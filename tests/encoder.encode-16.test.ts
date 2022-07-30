import { assertStrictEquals, assertThrows } from "std/testing/asserts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+F000-U+FFFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\uF000");
    },
    Error,
    "EncodingError U+F000",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF001");
    },
    Error,
    "EncodingError U+F001",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF002");
    },
    Error,
    "EncodingError U+F002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF003");
    },
    Error,
    "EncodingError U+F003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF004");
    },
    Error,
    "EncodingError U+F004",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF005");
    },
    Error,
    "EncodingError U+F005",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF006");
    },
    Error,
    "EncodingError U+F006",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF007");
    },
    Error,
    "EncodingError U+F007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF008");
    },
    Error,
    "EncodingError U+F008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF009");
    },
    Error,
    "EncodingError U+F009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF00A");
    },
    Error,
    "EncodingError U+F00A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF00B");
    },
    Error,
    "EncodingError U+F00B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF00C");
    },
    Error,
    "EncodingError U+F00C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF00D");
    },
    Error,
    "EncodingError U+F00D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF00E");
    },
    Error,
    "EncodingError U+F00E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF00F");
    },
    Error,
    "EncodingError U+F00F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF010");
    },
    Error,
    "EncodingError U+F010",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF011");
    },
    Error,
    "EncodingError U+F011",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF012");
    },
    Error,
    "EncodingError U+F012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF013");
    },
    Error,
    "EncodingError U+F013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF014");
    },
    Error,
    "EncodingError U+F014",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF015");
    },
    Error,
    "EncodingError U+F015",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF016");
    },
    Error,
    "EncodingError U+F016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF017");
    },
    Error,
    "EncodingError U+F017",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF018");
    },
    Error,
    "EncodingError U+F018",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF019");
    },
    Error,
    "EncodingError U+F019",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF01A");
    },
    Error,
    "EncodingError U+F01A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF01B");
    },
    Error,
    "EncodingError U+F01B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF01C");
    },
    Error,
    "EncodingError U+F01C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF01D");
    },
    Error,
    "EncodingError U+F01D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF01E");
    },
    Error,
    "EncodingError U+F01E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF01F");
    },
    Error,
    "EncodingError U+F01F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF020");
    },
    Error,
    "EncodingError U+F020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF021");
    },
    Error,
    "EncodingError U+F021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF022");
    },
    Error,
    "EncodingError U+F022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF023");
    },
    Error,
    "EncodingError U+F023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF024");
    },
    Error,
    "EncodingError U+F024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF025");
    },
    Error,
    "EncodingError U+F025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF026");
    },
    Error,
    "EncodingError U+F026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF027");
    },
    Error,
    "EncodingError U+F027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF028");
    },
    Error,
    "EncodingError U+F028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF029");
    },
    Error,
    "EncodingError U+F029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF02A");
    },
    Error,
    "EncodingError U+F02A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF02B");
    },
    Error,
    "EncodingError U+F02B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF02C");
    },
    Error,
    "EncodingError U+F02C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF02D");
    },
    Error,
    "EncodingError U+F02D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF02E");
    },
    Error,
    "EncodingError U+F02E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF02F");
    },
    Error,
    "EncodingError U+F02F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF030");
    },
    Error,
    "EncodingError U+F030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF031");
    },
    Error,
    "EncodingError U+F031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF032");
    },
    Error,
    "EncodingError U+F032",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF033");
    },
    Error,
    "EncodingError U+F033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF034");
    },
    Error,
    "EncodingError U+F034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF035");
    },
    Error,
    "EncodingError U+F035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF036");
    },
    Error,
    "EncodingError U+F036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF037");
    },
    Error,
    "EncodingError U+F037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF038");
    },
    Error,
    "EncodingError U+F038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF039");
    },
    Error,
    "EncodingError U+F039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF03A");
    },
    Error,
    "EncodingError U+F03A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF03B");
    },
    Error,
    "EncodingError U+F03B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF03C");
    },
    Error,
    "EncodingError U+F03C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF03D");
    },
    Error,
    "EncodingError U+F03D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF03E");
    },
    Error,
    "EncodingError U+F03E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF03F");
    },
    Error,
    "EncodingError U+F03F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF040");
    },
    Error,
    "EncodingError U+F040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF041");
    },
    Error,
    "EncodingError U+F041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF042");
    },
    Error,
    "EncodingError U+F042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF043");
    },
    Error,
    "EncodingError U+F043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF044");
    },
    Error,
    "EncodingError U+F044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF045");
    },
    Error,
    "EncodingError U+F045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF046");
    },
    Error,
    "EncodingError U+F046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF047");
    },
    Error,
    "EncodingError U+F047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF048");
    },
    Error,
    "EncodingError U+F048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF049");
    },
    Error,
    "EncodingError U+F049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF04A");
    },
    Error,
    "EncodingError U+F04A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF04B");
    },
    Error,
    "EncodingError U+F04B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF04C");
    },
    Error,
    "EncodingError U+F04C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF04D");
    },
    Error,
    "EncodingError U+F04D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF04E");
    },
    Error,
    "EncodingError U+F04E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF04F");
    },
    Error,
    "EncodingError U+F04F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF050");
    },
    Error,
    "EncodingError U+F050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF051");
    },
    Error,
    "EncodingError U+F051",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF052");
    },
    Error,
    "EncodingError U+F052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF053");
    },
    Error,
    "EncodingError U+F053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF054");
    },
    Error,
    "EncodingError U+F054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF055");
    },
    Error,
    "EncodingError U+F055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF056");
    },
    Error,
    "EncodingError U+F056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF057");
    },
    Error,
    "EncodingError U+F057",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF058");
    },
    Error,
    "EncodingError U+F058",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF059");
    },
    Error,
    "EncodingError U+F059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF05A");
    },
    Error,
    "EncodingError U+F05A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF05B");
    },
    Error,
    "EncodingError U+F05B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF05C");
    },
    Error,
    "EncodingError U+F05C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF05D");
    },
    Error,
    "EncodingError U+F05D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF05E");
    },
    Error,
    "EncodingError U+F05E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF05F");
    },
    Error,
    "EncodingError U+F05F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF060");
    },
    Error,
    "EncodingError U+F060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF061");
    },
    Error,
    "EncodingError U+F061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF062");
    },
    Error,
    "EncodingError U+F062",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF063");
    },
    Error,
    "EncodingError U+F063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF064");
    },
    Error,
    "EncodingError U+F064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF065");
    },
    Error,
    "EncodingError U+F065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF066");
    },
    Error,
    "EncodingError U+F066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF067");
    },
    Error,
    "EncodingError U+F067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF068");
    },
    Error,
    "EncodingError U+F068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF069");
    },
    Error,
    "EncodingError U+F069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF06A");
    },
    Error,
    "EncodingError U+F06A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF06B");
    },
    Error,
    "EncodingError U+F06B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF06C");
    },
    Error,
    "EncodingError U+F06C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF06D");
    },
    Error,
    "EncodingError U+F06D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF06E");
    },
    Error,
    "EncodingError U+F06E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF06F");
    },
    Error,
    "EncodingError U+F06F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF070");
    },
    Error,
    "EncodingError U+F070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF071");
    },
    Error,
    "EncodingError U+F071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF072");
    },
    Error,
    "EncodingError U+F072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF073");
    },
    Error,
    "EncodingError U+F073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF074");
    },
    Error,
    "EncodingError U+F074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF075");
    },
    Error,
    "EncodingError U+F075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF076");
    },
    Error,
    "EncodingError U+F076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF077");
    },
    Error,
    "EncodingError U+F077",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF078");
    },
    Error,
    "EncodingError U+F078",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF079");
    },
    Error,
    "EncodingError U+F079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF07A");
    },
    Error,
    "EncodingError U+F07A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF07B");
    },
    Error,
    "EncodingError U+F07B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF07C");
    },
    Error,
    "EncodingError U+F07C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF07D");
    },
    Error,
    "EncodingError U+F07D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF07E");
    },
    Error,
    "EncodingError U+F07E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF07F");
    },
    Error,
    "EncodingError U+F07F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF080");
    },
    Error,
    "EncodingError U+F080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF081");
    },
    Error,
    "EncodingError U+F081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF082");
    },
    Error,
    "EncodingError U+F082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF083");
    },
    Error,
    "EncodingError U+F083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF084");
    },
    Error,
    "EncodingError U+F084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF085");
    },
    Error,
    "EncodingError U+F085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF086");
    },
    Error,
    "EncodingError U+F086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF087");
    },
    Error,
    "EncodingError U+F087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF088");
    },
    Error,
    "EncodingError U+F088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF089");
    },
    Error,
    "EncodingError U+F089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF08A");
    },
    Error,
    "EncodingError U+F08A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF08B");
    },
    Error,
    "EncodingError U+F08B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF08C");
    },
    Error,
    "EncodingError U+F08C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF08D");
    },
    Error,
    "EncodingError U+F08D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF08E");
    },
    Error,
    "EncodingError U+F08E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF08F");
    },
    Error,
    "EncodingError U+F08F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF090");
    },
    Error,
    "EncodingError U+F090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF091");
    },
    Error,
    "EncodingError U+F091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF092");
    },
    Error,
    "EncodingError U+F092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF093");
    },
    Error,
    "EncodingError U+F093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF094");
    },
    Error,
    "EncodingError U+F094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF095");
    },
    Error,
    "EncodingError U+F095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF096");
    },
    Error,
    "EncodingError U+F096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF097");
    },
    Error,
    "EncodingError U+F097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF098");
    },
    Error,
    "EncodingError U+F098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF099");
    },
    Error,
    "EncodingError U+F099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF09A");
    },
    Error,
    "EncodingError U+F09A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF09B");
    },
    Error,
    "EncodingError U+F09B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF09C");
    },
    Error,
    "EncodingError U+F09C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF09D");
    },
    Error,
    "EncodingError U+F09D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF09E");
    },
    Error,
    "EncodingError U+F09E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF09F");
    },
    Error,
    "EncodingError U+F09F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A0");
    },
    Error,
    "EncodingError U+F0A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A1");
    },
    Error,
    "EncodingError U+F0A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A2");
    },
    Error,
    "EncodingError U+F0A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A3");
    },
    Error,
    "EncodingError U+F0A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A4");
    },
    Error,
    "EncodingError U+F0A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A5");
    },
    Error,
    "EncodingError U+F0A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A6");
    },
    Error,
    "EncodingError U+F0A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A7");
    },
    Error,
    "EncodingError U+F0A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A8");
    },
    Error,
    "EncodingError U+F0A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A9");
    },
    Error,
    "EncodingError U+F0A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0AA");
    },
    Error,
    "EncodingError U+F0AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0AB");
    },
    Error,
    "EncodingError U+F0AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0AC");
    },
    Error,
    "EncodingError U+F0AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0AD");
    },
    Error,
    "EncodingError U+F0AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0AE");
    },
    Error,
    "EncodingError U+F0AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0AF");
    },
    Error,
    "EncodingError U+F0AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B0");
    },
    Error,
    "EncodingError U+F0B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B1");
    },
    Error,
    "EncodingError U+F0B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B2");
    },
    Error,
    "EncodingError U+F0B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B3");
    },
    Error,
    "EncodingError U+F0B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B4");
    },
    Error,
    "EncodingError U+F0B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B5");
    },
    Error,
    "EncodingError U+F0B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B6");
    },
    Error,
    "EncodingError U+F0B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B7");
    },
    Error,
    "EncodingError U+F0B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B8");
    },
    Error,
    "EncodingError U+F0B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B9");
    },
    Error,
    "EncodingError U+F0B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0BA");
    },
    Error,
    "EncodingError U+F0BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0BB");
    },
    Error,
    "EncodingError U+F0BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0BC");
    },
    Error,
    "EncodingError U+F0BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0BD");
    },
    Error,
    "EncodingError U+F0BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0BE");
    },
    Error,
    "EncodingError U+F0BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0BF");
    },
    Error,
    "EncodingError U+F0BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C0");
    },
    Error,
    "EncodingError U+F0C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C1");
    },
    Error,
    "EncodingError U+F0C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C2");
    },
    Error,
    "EncodingError U+F0C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C3");
    },
    Error,
    "EncodingError U+F0C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C4");
    },
    Error,
    "EncodingError U+F0C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C5");
    },
    Error,
    "EncodingError U+F0C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C6");
    },
    Error,
    "EncodingError U+F0C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C7");
    },
    Error,
    "EncodingError U+F0C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C8");
    },
    Error,
    "EncodingError U+F0C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C9");
    },
    Error,
    "EncodingError U+F0C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0CA");
    },
    Error,
    "EncodingError U+F0CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0CB");
    },
    Error,
    "EncodingError U+F0CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0CC");
    },
    Error,
    "EncodingError U+F0CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0CD");
    },
    Error,
    "EncodingError U+F0CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0CE");
    },
    Error,
    "EncodingError U+F0CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0CF");
    },
    Error,
    "EncodingError U+F0CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D0");
    },
    Error,
    "EncodingError U+F0D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D1");
    },
    Error,
    "EncodingError U+F0D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D2");
    },
    Error,
    "EncodingError U+F0D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D3");
    },
    Error,
    "EncodingError U+F0D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D4");
    },
    Error,
    "EncodingError U+F0D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D5");
    },
    Error,
    "EncodingError U+F0D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D6");
    },
    Error,
    "EncodingError U+F0D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D7");
    },
    Error,
    "EncodingError U+F0D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D8");
    },
    Error,
    "EncodingError U+F0D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D9");
    },
    Error,
    "EncodingError U+F0D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0DA");
    },
    Error,
    "EncodingError U+F0DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0DB");
    },
    Error,
    "EncodingError U+F0DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0DC");
    },
    Error,
    "EncodingError U+F0DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0DD");
    },
    Error,
    "EncodingError U+F0DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0DE");
    },
    Error,
    "EncodingError U+F0DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0DF");
    },
    Error,
    "EncodingError U+F0DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E0");
    },
    Error,
    "EncodingError U+F0E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E1");
    },
    Error,
    "EncodingError U+F0E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E2");
    },
    Error,
    "EncodingError U+F0E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E3");
    },
    Error,
    "EncodingError U+F0E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E4");
    },
    Error,
    "EncodingError U+F0E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E5");
    },
    Error,
    "EncodingError U+F0E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E6");
    },
    Error,
    "EncodingError U+F0E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E7");
    },
    Error,
    "EncodingError U+F0E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E8");
    },
    Error,
    "EncodingError U+F0E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E9");
    },
    Error,
    "EncodingError U+F0E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0EA");
    },
    Error,
    "EncodingError U+F0EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0EB");
    },
    Error,
    "EncodingError U+F0EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0EC");
    },
    Error,
    "EncodingError U+F0EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0ED");
    },
    Error,
    "EncodingError U+F0ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0EE");
    },
    Error,
    "EncodingError U+F0EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0EF");
    },
    Error,
    "EncodingError U+F0EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F0");
    },
    Error,
    "EncodingError U+F0F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F1");
    },
    Error,
    "EncodingError U+F0F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F2");
    },
    Error,
    "EncodingError U+F0F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F3");
    },
    Error,
    "EncodingError U+F0F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F4");
    },
    Error,
    "EncodingError U+F0F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F5");
    },
    Error,
    "EncodingError U+F0F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F6");
    },
    Error,
    "EncodingError U+F0F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F7");
    },
    Error,
    "EncodingError U+F0F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F8");
    },
    Error,
    "EncodingError U+F0F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F9");
    },
    Error,
    "EncodingError U+F0F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0FA");
    },
    Error,
    "EncodingError U+F0FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0FB");
    },
    Error,
    "EncodingError U+F0FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0FC");
    },
    Error,
    "EncodingError U+F0FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0FD");
    },
    Error,
    "EncodingError U+F0FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0FE");
    },
    Error,
    "EncodingError U+F0FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0FF");
    },
    Error,
    "EncodingError U+F0FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF100");
    },
    Error,
    "EncodingError U+F100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF101");
    },
    Error,
    "EncodingError U+F101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF102");
    },
    Error,
    "EncodingError U+F102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF103");
    },
    Error,
    "EncodingError U+F103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF104");
    },
    Error,
    "EncodingError U+F104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF105");
    },
    Error,
    "EncodingError U+F105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF106");
    },
    Error,
    "EncodingError U+F106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF107");
    },
    Error,
    "EncodingError U+F107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF108");
    },
    Error,
    "EncodingError U+F108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF109");
    },
    Error,
    "EncodingError U+F109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF10A");
    },
    Error,
    "EncodingError U+F10A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF10B");
    },
    Error,
    "EncodingError U+F10B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF10C");
    },
    Error,
    "EncodingError U+F10C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF10D");
    },
    Error,
    "EncodingError U+F10D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF10E");
    },
    Error,
    "EncodingError U+F10E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF10F");
    },
    Error,
    "EncodingError U+F10F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF110");
    },
    Error,
    "EncodingError U+F110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF111");
    },
    Error,
    "EncodingError U+F111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF112");
    },
    Error,
    "EncodingError U+F112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF113");
    },
    Error,
    "EncodingError U+F113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF114");
    },
    Error,
    "EncodingError U+F114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF115");
    },
    Error,
    "EncodingError U+F115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF116");
    },
    Error,
    "EncodingError U+F116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF117");
    },
    Error,
    "EncodingError U+F117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF118");
    },
    Error,
    "EncodingError U+F118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF119");
    },
    Error,
    "EncodingError U+F119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF11A");
    },
    Error,
    "EncodingError U+F11A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF11B");
    },
    Error,
    "EncodingError U+F11B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF11C");
    },
    Error,
    "EncodingError U+F11C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF11D");
    },
    Error,
    "EncodingError U+F11D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF11E");
    },
    Error,
    "EncodingError U+F11E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF11F");
    },
    Error,
    "EncodingError U+F11F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF120");
    },
    Error,
    "EncodingError U+F120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF121");
    },
    Error,
    "EncodingError U+F121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF122");
    },
    Error,
    "EncodingError U+F122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF123");
    },
    Error,
    "EncodingError U+F123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF124");
    },
    Error,
    "EncodingError U+F124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF125");
    },
    Error,
    "EncodingError U+F125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF126");
    },
    Error,
    "EncodingError U+F126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF127");
    },
    Error,
    "EncodingError U+F127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF128");
    },
    Error,
    "EncodingError U+F128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF129");
    },
    Error,
    "EncodingError U+F129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF12A");
    },
    Error,
    "EncodingError U+F12A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF12B");
    },
    Error,
    "EncodingError U+F12B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF12C");
    },
    Error,
    "EncodingError U+F12C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF12D");
    },
    Error,
    "EncodingError U+F12D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF12E");
    },
    Error,
    "EncodingError U+F12E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF12F");
    },
    Error,
    "EncodingError U+F12F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF130");
    },
    Error,
    "EncodingError U+F130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF131");
    },
    Error,
    "EncodingError U+F131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF132");
    },
    Error,
    "EncodingError U+F132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF133");
    },
    Error,
    "EncodingError U+F133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF134");
    },
    Error,
    "EncodingError U+F134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF135");
    },
    Error,
    "EncodingError U+F135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF136");
    },
    Error,
    "EncodingError U+F136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF137");
    },
    Error,
    "EncodingError U+F137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF138");
    },
    Error,
    "EncodingError U+F138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF139");
    },
    Error,
    "EncodingError U+F139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF13A");
    },
    Error,
    "EncodingError U+F13A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF13B");
    },
    Error,
    "EncodingError U+F13B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF13C");
    },
    Error,
    "EncodingError U+F13C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF13D");
    },
    Error,
    "EncodingError U+F13D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF13E");
    },
    Error,
    "EncodingError U+F13E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF13F");
    },
    Error,
    "EncodingError U+F13F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF140");
    },
    Error,
    "EncodingError U+F140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF141");
    },
    Error,
    "EncodingError U+F141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF142");
    },
    Error,
    "EncodingError U+F142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF143");
    },
    Error,
    "EncodingError U+F143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF144");
    },
    Error,
    "EncodingError U+F144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF145");
    },
    Error,
    "EncodingError U+F145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF146");
    },
    Error,
    "EncodingError U+F146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF147");
    },
    Error,
    "EncodingError U+F147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF148");
    },
    Error,
    "EncodingError U+F148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF149");
    },
    Error,
    "EncodingError U+F149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF14A");
    },
    Error,
    "EncodingError U+F14A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF14B");
    },
    Error,
    "EncodingError U+F14B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF14C");
    },
    Error,
    "EncodingError U+F14C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF14D");
    },
    Error,
    "EncodingError U+F14D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF14E");
    },
    Error,
    "EncodingError U+F14E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF14F");
    },
    Error,
    "EncodingError U+F14F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF150");
    },
    Error,
    "EncodingError U+F150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF151");
    },
    Error,
    "EncodingError U+F151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF152");
    },
    Error,
    "EncodingError U+F152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF153");
    },
    Error,
    "EncodingError U+F153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF154");
    },
    Error,
    "EncodingError U+F154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF155");
    },
    Error,
    "EncodingError U+F155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF156");
    },
    Error,
    "EncodingError U+F156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF157");
    },
    Error,
    "EncodingError U+F157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF158");
    },
    Error,
    "EncodingError U+F158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF159");
    },
    Error,
    "EncodingError U+F159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF15A");
    },
    Error,
    "EncodingError U+F15A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF15B");
    },
    Error,
    "EncodingError U+F15B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF15C");
    },
    Error,
    "EncodingError U+F15C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF15D");
    },
    Error,
    "EncodingError U+F15D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF15E");
    },
    Error,
    "EncodingError U+F15E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF15F");
    },
    Error,
    "EncodingError U+F15F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF160");
    },
    Error,
    "EncodingError U+F160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF161");
    },
    Error,
    "EncodingError U+F161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF162");
    },
    Error,
    "EncodingError U+F162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF163");
    },
    Error,
    "EncodingError U+F163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF164");
    },
    Error,
    "EncodingError U+F164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF165");
    },
    Error,
    "EncodingError U+F165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF166");
    },
    Error,
    "EncodingError U+F166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF167");
    },
    Error,
    "EncodingError U+F167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF168");
    },
    Error,
    "EncodingError U+F168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF169");
    },
    Error,
    "EncodingError U+F169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF16A");
    },
    Error,
    "EncodingError U+F16A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF16B");
    },
    Error,
    "EncodingError U+F16B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF16C");
    },
    Error,
    "EncodingError U+F16C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF16D");
    },
    Error,
    "EncodingError U+F16D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF16E");
    },
    Error,
    "EncodingError U+F16E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF16F");
    },
    Error,
    "EncodingError U+F16F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF170");
    },
    Error,
    "EncodingError U+F170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF171");
    },
    Error,
    "EncodingError U+F171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF172");
    },
    Error,
    "EncodingError U+F172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF173");
    },
    Error,
    "EncodingError U+F173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF174");
    },
    Error,
    "EncodingError U+F174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF175");
    },
    Error,
    "EncodingError U+F175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF176");
    },
    Error,
    "EncodingError U+F176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF177");
    },
    Error,
    "EncodingError U+F177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF178");
    },
    Error,
    "EncodingError U+F178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF179");
    },
    Error,
    "EncodingError U+F179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF17A");
    },
    Error,
    "EncodingError U+F17A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF17B");
    },
    Error,
    "EncodingError U+F17B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF17C");
    },
    Error,
    "EncodingError U+F17C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF17D");
    },
    Error,
    "EncodingError U+F17D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF17E");
    },
    Error,
    "EncodingError U+F17E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF17F");
    },
    Error,
    "EncodingError U+F17F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF180");
    },
    Error,
    "EncodingError U+F180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF181");
    },
    Error,
    "EncodingError U+F181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF182");
    },
    Error,
    "EncodingError U+F182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF183");
    },
    Error,
    "EncodingError U+F183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF184");
    },
    Error,
    "EncodingError U+F184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF185");
    },
    Error,
    "EncodingError U+F185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF186");
    },
    Error,
    "EncodingError U+F186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF187");
    },
    Error,
    "EncodingError U+F187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF188");
    },
    Error,
    "EncodingError U+F188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF189");
    },
    Error,
    "EncodingError U+F189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF18A");
    },
    Error,
    "EncodingError U+F18A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF18B");
    },
    Error,
    "EncodingError U+F18B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF18C");
    },
    Error,
    "EncodingError U+F18C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF18D");
    },
    Error,
    "EncodingError U+F18D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF18E");
    },
    Error,
    "EncodingError U+F18E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF18F");
    },
    Error,
    "EncodingError U+F18F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF190");
    },
    Error,
    "EncodingError U+F190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF191");
    },
    Error,
    "EncodingError U+F191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF192");
    },
    Error,
    "EncodingError U+F192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF193");
    },
    Error,
    "EncodingError U+F193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF194");
    },
    Error,
    "EncodingError U+F194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF195");
    },
    Error,
    "EncodingError U+F195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF196");
    },
    Error,
    "EncodingError U+F196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF197");
    },
    Error,
    "EncodingError U+F197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF198");
    },
    Error,
    "EncodingError U+F198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF199");
    },
    Error,
    "EncodingError U+F199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF19A");
    },
    Error,
    "EncodingError U+F19A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF19B");
    },
    Error,
    "EncodingError U+F19B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF19C");
    },
    Error,
    "EncodingError U+F19C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF19D");
    },
    Error,
    "EncodingError U+F19D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF19E");
    },
    Error,
    "EncodingError U+F19E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF19F");
    },
    Error,
    "EncodingError U+F19F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A0");
    },
    Error,
    "EncodingError U+F1A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A1");
    },
    Error,
    "EncodingError U+F1A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A2");
    },
    Error,
    "EncodingError U+F1A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A3");
    },
    Error,
    "EncodingError U+F1A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A4");
    },
    Error,
    "EncodingError U+F1A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A5");
    },
    Error,
    "EncodingError U+F1A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A6");
    },
    Error,
    "EncodingError U+F1A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A7");
    },
    Error,
    "EncodingError U+F1A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A8");
    },
    Error,
    "EncodingError U+F1A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A9");
    },
    Error,
    "EncodingError U+F1A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1AA");
    },
    Error,
    "EncodingError U+F1AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1AB");
    },
    Error,
    "EncodingError U+F1AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1AC");
    },
    Error,
    "EncodingError U+F1AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1AD");
    },
    Error,
    "EncodingError U+F1AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1AE");
    },
    Error,
    "EncodingError U+F1AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1AF");
    },
    Error,
    "EncodingError U+F1AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B0");
    },
    Error,
    "EncodingError U+F1B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B1");
    },
    Error,
    "EncodingError U+F1B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B2");
    },
    Error,
    "EncodingError U+F1B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B3");
    },
    Error,
    "EncodingError U+F1B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B4");
    },
    Error,
    "EncodingError U+F1B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B5");
    },
    Error,
    "EncodingError U+F1B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B6");
    },
    Error,
    "EncodingError U+F1B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B7");
    },
    Error,
    "EncodingError U+F1B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B8");
    },
    Error,
    "EncodingError U+F1B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B9");
    },
    Error,
    "EncodingError U+F1B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1BA");
    },
    Error,
    "EncodingError U+F1BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1BB");
    },
    Error,
    "EncodingError U+F1BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1BC");
    },
    Error,
    "EncodingError U+F1BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1BD");
    },
    Error,
    "EncodingError U+F1BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1BE");
    },
    Error,
    "EncodingError U+F1BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1BF");
    },
    Error,
    "EncodingError U+F1BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C0");
    },
    Error,
    "EncodingError U+F1C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C1");
    },
    Error,
    "EncodingError U+F1C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C2");
    },
    Error,
    "EncodingError U+F1C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C3");
    },
    Error,
    "EncodingError U+F1C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C4");
    },
    Error,
    "EncodingError U+F1C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C5");
    },
    Error,
    "EncodingError U+F1C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C6");
    },
    Error,
    "EncodingError U+F1C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C7");
    },
    Error,
    "EncodingError U+F1C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C8");
    },
    Error,
    "EncodingError U+F1C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C9");
    },
    Error,
    "EncodingError U+F1C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1CA");
    },
    Error,
    "EncodingError U+F1CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1CB");
    },
    Error,
    "EncodingError U+F1CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1CC");
    },
    Error,
    "EncodingError U+F1CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1CD");
    },
    Error,
    "EncodingError U+F1CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1CE");
    },
    Error,
    "EncodingError U+F1CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1CF");
    },
    Error,
    "EncodingError U+F1CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D0");
    },
    Error,
    "EncodingError U+F1D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D1");
    },
    Error,
    "EncodingError U+F1D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D2");
    },
    Error,
    "EncodingError U+F1D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D3");
    },
    Error,
    "EncodingError U+F1D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D4");
    },
    Error,
    "EncodingError U+F1D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D5");
    },
    Error,
    "EncodingError U+F1D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D6");
    },
    Error,
    "EncodingError U+F1D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D7");
    },
    Error,
    "EncodingError U+F1D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D8");
    },
    Error,
    "EncodingError U+F1D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D9");
    },
    Error,
    "EncodingError U+F1D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1DA");
    },
    Error,
    "EncodingError U+F1DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1DB");
    },
    Error,
    "EncodingError U+F1DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1DC");
    },
    Error,
    "EncodingError U+F1DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1DD");
    },
    Error,
    "EncodingError U+F1DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1DE");
    },
    Error,
    "EncodingError U+F1DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1DF");
    },
    Error,
    "EncodingError U+F1DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E0");
    },
    Error,
    "EncodingError U+F1E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E1");
    },
    Error,
    "EncodingError U+F1E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E2");
    },
    Error,
    "EncodingError U+F1E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E3");
    },
    Error,
    "EncodingError U+F1E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E4");
    },
    Error,
    "EncodingError U+F1E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E5");
    },
    Error,
    "EncodingError U+F1E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E6");
    },
    Error,
    "EncodingError U+F1E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E7");
    },
    Error,
    "EncodingError U+F1E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E8");
    },
    Error,
    "EncodingError U+F1E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E9");
    },
    Error,
    "EncodingError U+F1E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1EA");
    },
    Error,
    "EncodingError U+F1EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1EB");
    },
    Error,
    "EncodingError U+F1EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1EC");
    },
    Error,
    "EncodingError U+F1EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1ED");
    },
    Error,
    "EncodingError U+F1ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1EE");
    },
    Error,
    "EncodingError U+F1EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1EF");
    },
    Error,
    "EncodingError U+F1EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F0");
    },
    Error,
    "EncodingError U+F1F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F1");
    },
    Error,
    "EncodingError U+F1F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F2");
    },
    Error,
    "EncodingError U+F1F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F3");
    },
    Error,
    "EncodingError U+F1F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F4");
    },
    Error,
    "EncodingError U+F1F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F5");
    },
    Error,
    "EncodingError U+F1F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F6");
    },
    Error,
    "EncodingError U+F1F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F7");
    },
    Error,
    "EncodingError U+F1F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F8");
    },
    Error,
    "EncodingError U+F1F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F9");
    },
    Error,
    "EncodingError U+F1F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1FA");
    },
    Error,
    "EncodingError U+F1FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1FB");
    },
    Error,
    "EncodingError U+F1FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1FC");
    },
    Error,
    "EncodingError U+F1FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1FD");
    },
    Error,
    "EncodingError U+F1FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1FE");
    },
    Error,
    "EncodingError U+F1FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1FF");
    },
    Error,
    "EncodingError U+F1FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF200");
    },
    Error,
    "EncodingError U+F200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF201");
    },
    Error,
    "EncodingError U+F201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF202");
    },
    Error,
    "EncodingError U+F202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF203");
    },
    Error,
    "EncodingError U+F203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF204");
    },
    Error,
    "EncodingError U+F204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF205");
    },
    Error,
    "EncodingError U+F205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF206");
    },
    Error,
    "EncodingError U+F206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF207");
    },
    Error,
    "EncodingError U+F207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF208");
    },
    Error,
    "EncodingError U+F208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF209");
    },
    Error,
    "EncodingError U+F209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF20A");
    },
    Error,
    "EncodingError U+F20A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF20B");
    },
    Error,
    "EncodingError U+F20B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF20C");
    },
    Error,
    "EncodingError U+F20C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF20D");
    },
    Error,
    "EncodingError U+F20D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF20E");
    },
    Error,
    "EncodingError U+F20E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF20F");
    },
    Error,
    "EncodingError U+F20F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF210");
    },
    Error,
    "EncodingError U+F210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF211");
    },
    Error,
    "EncodingError U+F211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF212");
    },
    Error,
    "EncodingError U+F212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF213");
    },
    Error,
    "EncodingError U+F213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF214");
    },
    Error,
    "EncodingError U+F214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF215");
    },
    Error,
    "EncodingError U+F215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF216");
    },
    Error,
    "EncodingError U+F216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF217");
    },
    Error,
    "EncodingError U+F217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF218");
    },
    Error,
    "EncodingError U+F218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF219");
    },
    Error,
    "EncodingError U+F219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF21A");
    },
    Error,
    "EncodingError U+F21A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF21B");
    },
    Error,
    "EncodingError U+F21B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF21C");
    },
    Error,
    "EncodingError U+F21C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF21D");
    },
    Error,
    "EncodingError U+F21D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF21E");
    },
    Error,
    "EncodingError U+F21E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF21F");
    },
    Error,
    "EncodingError U+F21F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF220");
    },
    Error,
    "EncodingError U+F220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF221");
    },
    Error,
    "EncodingError U+F221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF222");
    },
    Error,
    "EncodingError U+F222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF223");
    },
    Error,
    "EncodingError U+F223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF224");
    },
    Error,
    "EncodingError U+F224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF225");
    },
    Error,
    "EncodingError U+F225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF226");
    },
    Error,
    "EncodingError U+F226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF227");
    },
    Error,
    "EncodingError U+F227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF228");
    },
    Error,
    "EncodingError U+F228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF229");
    },
    Error,
    "EncodingError U+F229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF22A");
    },
    Error,
    "EncodingError U+F22A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF22B");
    },
    Error,
    "EncodingError U+F22B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF22C");
    },
    Error,
    "EncodingError U+F22C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF22D");
    },
    Error,
    "EncodingError U+F22D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF22E");
    },
    Error,
    "EncodingError U+F22E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF22F");
    },
    Error,
    "EncodingError U+F22F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF230");
    },
    Error,
    "EncodingError U+F230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF231");
    },
    Error,
    "EncodingError U+F231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF232");
    },
    Error,
    "EncodingError U+F232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF233");
    },
    Error,
    "EncodingError U+F233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF234");
    },
    Error,
    "EncodingError U+F234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF235");
    },
    Error,
    "EncodingError U+F235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF236");
    },
    Error,
    "EncodingError U+F236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF237");
    },
    Error,
    "EncodingError U+F237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF238");
    },
    Error,
    "EncodingError U+F238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF239");
    },
    Error,
    "EncodingError U+F239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF23A");
    },
    Error,
    "EncodingError U+F23A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF23B");
    },
    Error,
    "EncodingError U+F23B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF23C");
    },
    Error,
    "EncodingError U+F23C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF23D");
    },
    Error,
    "EncodingError U+F23D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF23E");
    },
    Error,
    "EncodingError U+F23E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF23F");
    },
    Error,
    "EncodingError U+F23F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF240");
    },
    Error,
    "EncodingError U+F240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF241");
    },
    Error,
    "EncodingError U+F241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF242");
    },
    Error,
    "EncodingError U+F242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF243");
    },
    Error,
    "EncodingError U+F243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF244");
    },
    Error,
    "EncodingError U+F244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF245");
    },
    Error,
    "EncodingError U+F245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF246");
    },
    Error,
    "EncodingError U+F246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF247");
    },
    Error,
    "EncodingError U+F247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF248");
    },
    Error,
    "EncodingError U+F248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF249");
    },
    Error,
    "EncodingError U+F249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF24A");
    },
    Error,
    "EncodingError U+F24A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF24B");
    },
    Error,
    "EncodingError U+F24B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF24C");
    },
    Error,
    "EncodingError U+F24C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF24D");
    },
    Error,
    "EncodingError U+F24D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF24E");
    },
    Error,
    "EncodingError U+F24E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF24F");
    },
    Error,
    "EncodingError U+F24F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF250");
    },
    Error,
    "EncodingError U+F250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF251");
    },
    Error,
    "EncodingError U+F251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF252");
    },
    Error,
    "EncodingError U+F252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF253");
    },
    Error,
    "EncodingError U+F253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF254");
    },
    Error,
    "EncodingError U+F254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF255");
    },
    Error,
    "EncodingError U+F255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF256");
    },
    Error,
    "EncodingError U+F256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF257");
    },
    Error,
    "EncodingError U+F257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF258");
    },
    Error,
    "EncodingError U+F258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF259");
    },
    Error,
    "EncodingError U+F259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF25A");
    },
    Error,
    "EncodingError U+F25A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF25B");
    },
    Error,
    "EncodingError U+F25B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF25C");
    },
    Error,
    "EncodingError U+F25C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF25D");
    },
    Error,
    "EncodingError U+F25D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF25E");
    },
    Error,
    "EncodingError U+F25E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF25F");
    },
    Error,
    "EncodingError U+F25F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF260");
    },
    Error,
    "EncodingError U+F260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF261");
    },
    Error,
    "EncodingError U+F261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF262");
    },
    Error,
    "EncodingError U+F262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF263");
    },
    Error,
    "EncodingError U+F263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF264");
    },
    Error,
    "EncodingError U+F264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF265");
    },
    Error,
    "EncodingError U+F265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF266");
    },
    Error,
    "EncodingError U+F266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF267");
    },
    Error,
    "EncodingError U+F267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF268");
    },
    Error,
    "EncodingError U+F268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF269");
    },
    Error,
    "EncodingError U+F269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF26A");
    },
    Error,
    "EncodingError U+F26A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF26B");
    },
    Error,
    "EncodingError U+F26B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF26C");
    },
    Error,
    "EncodingError U+F26C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF26D");
    },
    Error,
    "EncodingError U+F26D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF26E");
    },
    Error,
    "EncodingError U+F26E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF26F");
    },
    Error,
    "EncodingError U+F26F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF270");
    },
    Error,
    "EncodingError U+F270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF271");
    },
    Error,
    "EncodingError U+F271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF272");
    },
    Error,
    "EncodingError U+F272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF273");
    },
    Error,
    "EncodingError U+F273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF274");
    },
    Error,
    "EncodingError U+F274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF275");
    },
    Error,
    "EncodingError U+F275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF276");
    },
    Error,
    "EncodingError U+F276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF277");
    },
    Error,
    "EncodingError U+F277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF278");
    },
    Error,
    "EncodingError U+F278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF279");
    },
    Error,
    "EncodingError U+F279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF27A");
    },
    Error,
    "EncodingError U+F27A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF27B");
    },
    Error,
    "EncodingError U+F27B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF27C");
    },
    Error,
    "EncodingError U+F27C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF27D");
    },
    Error,
    "EncodingError U+F27D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF27E");
    },
    Error,
    "EncodingError U+F27E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF27F");
    },
    Error,
    "EncodingError U+F27F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF280");
    },
    Error,
    "EncodingError U+F280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF281");
    },
    Error,
    "EncodingError U+F281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF282");
    },
    Error,
    "EncodingError U+F282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF283");
    },
    Error,
    "EncodingError U+F283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF284");
    },
    Error,
    "EncodingError U+F284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF285");
    },
    Error,
    "EncodingError U+F285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF286");
    },
    Error,
    "EncodingError U+F286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF287");
    },
    Error,
    "EncodingError U+F287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF288");
    },
    Error,
    "EncodingError U+F288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF289");
    },
    Error,
    "EncodingError U+F289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF28A");
    },
    Error,
    "EncodingError U+F28A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF28B");
    },
    Error,
    "EncodingError U+F28B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF28C");
    },
    Error,
    "EncodingError U+F28C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF28D");
    },
    Error,
    "EncodingError U+F28D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF28E");
    },
    Error,
    "EncodingError U+F28E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF28F");
    },
    Error,
    "EncodingError U+F28F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF290");
    },
    Error,
    "EncodingError U+F290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF291");
    },
    Error,
    "EncodingError U+F291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF292");
    },
    Error,
    "EncodingError U+F292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF293");
    },
    Error,
    "EncodingError U+F293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF294");
    },
    Error,
    "EncodingError U+F294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF295");
    },
    Error,
    "EncodingError U+F295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF296");
    },
    Error,
    "EncodingError U+F296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF297");
    },
    Error,
    "EncodingError U+F297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF298");
    },
    Error,
    "EncodingError U+F298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF299");
    },
    Error,
    "EncodingError U+F299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF29A");
    },
    Error,
    "EncodingError U+F29A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF29B");
    },
    Error,
    "EncodingError U+F29B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF29C");
    },
    Error,
    "EncodingError U+F29C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF29D");
    },
    Error,
    "EncodingError U+F29D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF29E");
    },
    Error,
    "EncodingError U+F29E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF29F");
    },
    Error,
    "EncodingError U+F29F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A0");
    },
    Error,
    "EncodingError U+F2A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A1");
    },
    Error,
    "EncodingError U+F2A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A2");
    },
    Error,
    "EncodingError U+F2A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A3");
    },
    Error,
    "EncodingError U+F2A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A4");
    },
    Error,
    "EncodingError U+F2A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A5");
    },
    Error,
    "EncodingError U+F2A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A6");
    },
    Error,
    "EncodingError U+F2A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A7");
    },
    Error,
    "EncodingError U+F2A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A8");
    },
    Error,
    "EncodingError U+F2A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A9");
    },
    Error,
    "EncodingError U+F2A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2AA");
    },
    Error,
    "EncodingError U+F2AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2AB");
    },
    Error,
    "EncodingError U+F2AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2AC");
    },
    Error,
    "EncodingError U+F2AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2AD");
    },
    Error,
    "EncodingError U+F2AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2AE");
    },
    Error,
    "EncodingError U+F2AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2AF");
    },
    Error,
    "EncodingError U+F2AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B0");
    },
    Error,
    "EncodingError U+F2B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B1");
    },
    Error,
    "EncodingError U+F2B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B2");
    },
    Error,
    "EncodingError U+F2B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B3");
    },
    Error,
    "EncodingError U+F2B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B4");
    },
    Error,
    "EncodingError U+F2B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B5");
    },
    Error,
    "EncodingError U+F2B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B6");
    },
    Error,
    "EncodingError U+F2B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B7");
    },
    Error,
    "EncodingError U+F2B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B8");
    },
    Error,
    "EncodingError U+F2B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B9");
    },
    Error,
    "EncodingError U+F2B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2BA");
    },
    Error,
    "EncodingError U+F2BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2BB");
    },
    Error,
    "EncodingError U+F2BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2BC");
    },
    Error,
    "EncodingError U+F2BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2BD");
    },
    Error,
    "EncodingError U+F2BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2BE");
    },
    Error,
    "EncodingError U+F2BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2BF");
    },
    Error,
    "EncodingError U+F2BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C0");
    },
    Error,
    "EncodingError U+F2C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C1");
    },
    Error,
    "EncodingError U+F2C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C2");
    },
    Error,
    "EncodingError U+F2C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C3");
    },
    Error,
    "EncodingError U+F2C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C4");
    },
    Error,
    "EncodingError U+F2C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C5");
    },
    Error,
    "EncodingError U+F2C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C6");
    },
    Error,
    "EncodingError U+F2C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C7");
    },
    Error,
    "EncodingError U+F2C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C8");
    },
    Error,
    "EncodingError U+F2C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C9");
    },
    Error,
    "EncodingError U+F2C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2CA");
    },
    Error,
    "EncodingError U+F2CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2CB");
    },
    Error,
    "EncodingError U+F2CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2CC");
    },
    Error,
    "EncodingError U+F2CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2CD");
    },
    Error,
    "EncodingError U+F2CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2CE");
    },
    Error,
    "EncodingError U+F2CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2CF");
    },
    Error,
    "EncodingError U+F2CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D0");
    },
    Error,
    "EncodingError U+F2D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D1");
    },
    Error,
    "EncodingError U+F2D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D2");
    },
    Error,
    "EncodingError U+F2D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D3");
    },
    Error,
    "EncodingError U+F2D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D4");
    },
    Error,
    "EncodingError U+F2D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D5");
    },
    Error,
    "EncodingError U+F2D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D6");
    },
    Error,
    "EncodingError U+F2D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D7");
    },
    Error,
    "EncodingError U+F2D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D8");
    },
    Error,
    "EncodingError U+F2D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D9");
    },
    Error,
    "EncodingError U+F2D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2DA");
    },
    Error,
    "EncodingError U+F2DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2DB");
    },
    Error,
    "EncodingError U+F2DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2DC");
    },
    Error,
    "EncodingError U+F2DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2DD");
    },
    Error,
    "EncodingError U+F2DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2DE");
    },
    Error,
    "EncodingError U+F2DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2DF");
    },
    Error,
    "EncodingError U+F2DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E0");
    },
    Error,
    "EncodingError U+F2E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E1");
    },
    Error,
    "EncodingError U+F2E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E2");
    },
    Error,
    "EncodingError U+F2E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E3");
    },
    Error,
    "EncodingError U+F2E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E4");
    },
    Error,
    "EncodingError U+F2E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E5");
    },
    Error,
    "EncodingError U+F2E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E6");
    },
    Error,
    "EncodingError U+F2E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E7");
    },
    Error,
    "EncodingError U+F2E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E8");
    },
    Error,
    "EncodingError U+F2E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E9");
    },
    Error,
    "EncodingError U+F2E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2EA");
    },
    Error,
    "EncodingError U+F2EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2EB");
    },
    Error,
    "EncodingError U+F2EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2EC");
    },
    Error,
    "EncodingError U+F2EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2ED");
    },
    Error,
    "EncodingError U+F2ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2EE");
    },
    Error,
    "EncodingError U+F2EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2EF");
    },
    Error,
    "EncodingError U+F2EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F0");
    },
    Error,
    "EncodingError U+F2F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F1");
    },
    Error,
    "EncodingError U+F2F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F2");
    },
    Error,
    "EncodingError U+F2F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F3");
    },
    Error,
    "EncodingError U+F2F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F4");
    },
    Error,
    "EncodingError U+F2F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F5");
    },
    Error,
    "EncodingError U+F2F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F6");
    },
    Error,
    "EncodingError U+F2F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F7");
    },
    Error,
    "EncodingError U+F2F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F8");
    },
    Error,
    "EncodingError U+F2F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F9");
    },
    Error,
    "EncodingError U+F2F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2FA");
    },
    Error,
    "EncodingError U+F2FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2FB");
    },
    Error,
    "EncodingError U+F2FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2FC");
    },
    Error,
    "EncodingError U+F2FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2FD");
    },
    Error,
    "EncodingError U+F2FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2FE");
    },
    Error,
    "EncodingError U+F2FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2FF");
    },
    Error,
    "EncodingError U+F2FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF300");
    },
    Error,
    "EncodingError U+F300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF301");
    },
    Error,
    "EncodingError U+F301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF302");
    },
    Error,
    "EncodingError U+F302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF303");
    },
    Error,
    "EncodingError U+F303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF304");
    },
    Error,
    "EncodingError U+F304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF305");
    },
    Error,
    "EncodingError U+F305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF306");
    },
    Error,
    "EncodingError U+F306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF307");
    },
    Error,
    "EncodingError U+F307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF308");
    },
    Error,
    "EncodingError U+F308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF309");
    },
    Error,
    "EncodingError U+F309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF30A");
    },
    Error,
    "EncodingError U+F30A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF30B");
    },
    Error,
    "EncodingError U+F30B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF30C");
    },
    Error,
    "EncodingError U+F30C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF30D");
    },
    Error,
    "EncodingError U+F30D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF30E");
    },
    Error,
    "EncodingError U+F30E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF30F");
    },
    Error,
    "EncodingError U+F30F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF310");
    },
    Error,
    "EncodingError U+F310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF311");
    },
    Error,
    "EncodingError U+F311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF312");
    },
    Error,
    "EncodingError U+F312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF313");
    },
    Error,
    "EncodingError U+F313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF314");
    },
    Error,
    "EncodingError U+F314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF315");
    },
    Error,
    "EncodingError U+F315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF316");
    },
    Error,
    "EncodingError U+F316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF317");
    },
    Error,
    "EncodingError U+F317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF318");
    },
    Error,
    "EncodingError U+F318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF319");
    },
    Error,
    "EncodingError U+F319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF31A");
    },
    Error,
    "EncodingError U+F31A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF31B");
    },
    Error,
    "EncodingError U+F31B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF31C");
    },
    Error,
    "EncodingError U+F31C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF31D");
    },
    Error,
    "EncodingError U+F31D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF31E");
    },
    Error,
    "EncodingError U+F31E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF31F");
    },
    Error,
    "EncodingError U+F31F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF320");
    },
    Error,
    "EncodingError U+F320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF321");
    },
    Error,
    "EncodingError U+F321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF322");
    },
    Error,
    "EncodingError U+F322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF323");
    },
    Error,
    "EncodingError U+F323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF324");
    },
    Error,
    "EncodingError U+F324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF325");
    },
    Error,
    "EncodingError U+F325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF326");
    },
    Error,
    "EncodingError U+F326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF327");
    },
    Error,
    "EncodingError U+F327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF328");
    },
    Error,
    "EncodingError U+F328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF329");
    },
    Error,
    "EncodingError U+F329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF32A");
    },
    Error,
    "EncodingError U+F32A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF32B");
    },
    Error,
    "EncodingError U+F32B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF32C");
    },
    Error,
    "EncodingError U+F32C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF32D");
    },
    Error,
    "EncodingError U+F32D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF32E");
    },
    Error,
    "EncodingError U+F32E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF32F");
    },
    Error,
    "EncodingError U+F32F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF330");
    },
    Error,
    "EncodingError U+F330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF331");
    },
    Error,
    "EncodingError U+F331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF332");
    },
    Error,
    "EncodingError U+F332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF333");
    },
    Error,
    "EncodingError U+F333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF334");
    },
    Error,
    "EncodingError U+F334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF335");
    },
    Error,
    "EncodingError U+F335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF336");
    },
    Error,
    "EncodingError U+F336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF337");
    },
    Error,
    "EncodingError U+F337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF338");
    },
    Error,
    "EncodingError U+F338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF339");
    },
    Error,
    "EncodingError U+F339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF33A");
    },
    Error,
    "EncodingError U+F33A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF33B");
    },
    Error,
    "EncodingError U+F33B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF33C");
    },
    Error,
    "EncodingError U+F33C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF33D");
    },
    Error,
    "EncodingError U+F33D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF33E");
    },
    Error,
    "EncodingError U+F33E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF33F");
    },
    Error,
    "EncodingError U+F33F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF340");
    },
    Error,
    "EncodingError U+F340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF341");
    },
    Error,
    "EncodingError U+F341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF342");
    },
    Error,
    "EncodingError U+F342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF343");
    },
    Error,
    "EncodingError U+F343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF344");
    },
    Error,
    "EncodingError U+F344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF345");
    },
    Error,
    "EncodingError U+F345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF346");
    },
    Error,
    "EncodingError U+F346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF347");
    },
    Error,
    "EncodingError U+F347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF348");
    },
    Error,
    "EncodingError U+F348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF349");
    },
    Error,
    "EncodingError U+F349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF34A");
    },
    Error,
    "EncodingError U+F34A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF34B");
    },
    Error,
    "EncodingError U+F34B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF34C");
    },
    Error,
    "EncodingError U+F34C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF34D");
    },
    Error,
    "EncodingError U+F34D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF34E");
    },
    Error,
    "EncodingError U+F34E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF34F");
    },
    Error,
    "EncodingError U+F34F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF350");
    },
    Error,
    "EncodingError U+F350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF351");
    },
    Error,
    "EncodingError U+F351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF352");
    },
    Error,
    "EncodingError U+F352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF353");
    },
    Error,
    "EncodingError U+F353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF354");
    },
    Error,
    "EncodingError U+F354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF355");
    },
    Error,
    "EncodingError U+F355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF356");
    },
    Error,
    "EncodingError U+F356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF357");
    },
    Error,
    "EncodingError U+F357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF358");
    },
    Error,
    "EncodingError U+F358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF359");
    },
    Error,
    "EncodingError U+F359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF35A");
    },
    Error,
    "EncodingError U+F35A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF35B");
    },
    Error,
    "EncodingError U+F35B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF35C");
    },
    Error,
    "EncodingError U+F35C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF35D");
    },
    Error,
    "EncodingError U+F35D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF35E");
    },
    Error,
    "EncodingError U+F35E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF35F");
    },
    Error,
    "EncodingError U+F35F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF360");
    },
    Error,
    "EncodingError U+F360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF361");
    },
    Error,
    "EncodingError U+F361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF362");
    },
    Error,
    "EncodingError U+F362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF363");
    },
    Error,
    "EncodingError U+F363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF364");
    },
    Error,
    "EncodingError U+F364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF365");
    },
    Error,
    "EncodingError U+F365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF366");
    },
    Error,
    "EncodingError U+F366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF367");
    },
    Error,
    "EncodingError U+F367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF368");
    },
    Error,
    "EncodingError U+F368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF369");
    },
    Error,
    "EncodingError U+F369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF36A");
    },
    Error,
    "EncodingError U+F36A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF36B");
    },
    Error,
    "EncodingError U+F36B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF36C");
    },
    Error,
    "EncodingError U+F36C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF36D");
    },
    Error,
    "EncodingError U+F36D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF36E");
    },
    Error,
    "EncodingError U+F36E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF36F");
    },
    Error,
    "EncodingError U+F36F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF370");
    },
    Error,
    "EncodingError U+F370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF371");
    },
    Error,
    "EncodingError U+F371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF372");
    },
    Error,
    "EncodingError U+F372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF373");
    },
    Error,
    "EncodingError U+F373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF374");
    },
    Error,
    "EncodingError U+F374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF375");
    },
    Error,
    "EncodingError U+F375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF376");
    },
    Error,
    "EncodingError U+F376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF377");
    },
    Error,
    "EncodingError U+F377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF378");
    },
    Error,
    "EncodingError U+F378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF379");
    },
    Error,
    "EncodingError U+F379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF37A");
    },
    Error,
    "EncodingError U+F37A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF37B");
    },
    Error,
    "EncodingError U+F37B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF37C");
    },
    Error,
    "EncodingError U+F37C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF37D");
    },
    Error,
    "EncodingError U+F37D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF37E");
    },
    Error,
    "EncodingError U+F37E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF37F");
    },
    Error,
    "EncodingError U+F37F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF380");
    },
    Error,
    "EncodingError U+F380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF381");
    },
    Error,
    "EncodingError U+F381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF382");
    },
    Error,
    "EncodingError U+F382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF383");
    },
    Error,
    "EncodingError U+F383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF384");
    },
    Error,
    "EncodingError U+F384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF385");
    },
    Error,
    "EncodingError U+F385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF386");
    },
    Error,
    "EncodingError U+F386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF387");
    },
    Error,
    "EncodingError U+F387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF388");
    },
    Error,
    "EncodingError U+F388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF389");
    },
    Error,
    "EncodingError U+F389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF38A");
    },
    Error,
    "EncodingError U+F38A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF38B");
    },
    Error,
    "EncodingError U+F38B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF38C");
    },
    Error,
    "EncodingError U+F38C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF38D");
    },
    Error,
    "EncodingError U+F38D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF38E");
    },
    Error,
    "EncodingError U+F38E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF38F");
    },
    Error,
    "EncodingError U+F38F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF390");
    },
    Error,
    "EncodingError U+F390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF391");
    },
    Error,
    "EncodingError U+F391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF392");
    },
    Error,
    "EncodingError U+F392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF393");
    },
    Error,
    "EncodingError U+F393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF394");
    },
    Error,
    "EncodingError U+F394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF395");
    },
    Error,
    "EncodingError U+F395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF396");
    },
    Error,
    "EncodingError U+F396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF397");
    },
    Error,
    "EncodingError U+F397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF398");
    },
    Error,
    "EncodingError U+F398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF399");
    },
    Error,
    "EncodingError U+F399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF39A");
    },
    Error,
    "EncodingError U+F39A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF39B");
    },
    Error,
    "EncodingError U+F39B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF39C");
    },
    Error,
    "EncodingError U+F39C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF39D");
    },
    Error,
    "EncodingError U+F39D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF39E");
    },
    Error,
    "EncodingError U+F39E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF39F");
    },
    Error,
    "EncodingError U+F39F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A0");
    },
    Error,
    "EncodingError U+F3A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A1");
    },
    Error,
    "EncodingError U+F3A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A2");
    },
    Error,
    "EncodingError U+F3A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A3");
    },
    Error,
    "EncodingError U+F3A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A4");
    },
    Error,
    "EncodingError U+F3A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A5");
    },
    Error,
    "EncodingError U+F3A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A6");
    },
    Error,
    "EncodingError U+F3A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A7");
    },
    Error,
    "EncodingError U+F3A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A8");
    },
    Error,
    "EncodingError U+F3A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A9");
    },
    Error,
    "EncodingError U+F3A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3AA");
    },
    Error,
    "EncodingError U+F3AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3AB");
    },
    Error,
    "EncodingError U+F3AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3AC");
    },
    Error,
    "EncodingError U+F3AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3AD");
    },
    Error,
    "EncodingError U+F3AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3AE");
    },
    Error,
    "EncodingError U+F3AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3AF");
    },
    Error,
    "EncodingError U+F3AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B0");
    },
    Error,
    "EncodingError U+F3B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B1");
    },
    Error,
    "EncodingError U+F3B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B2");
    },
    Error,
    "EncodingError U+F3B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B3");
    },
    Error,
    "EncodingError U+F3B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B4");
    },
    Error,
    "EncodingError U+F3B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B5");
    },
    Error,
    "EncodingError U+F3B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B6");
    },
    Error,
    "EncodingError U+F3B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B7");
    },
    Error,
    "EncodingError U+F3B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B8");
    },
    Error,
    "EncodingError U+F3B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B9");
    },
    Error,
    "EncodingError U+F3B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3BA");
    },
    Error,
    "EncodingError U+F3BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3BB");
    },
    Error,
    "EncodingError U+F3BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3BC");
    },
    Error,
    "EncodingError U+F3BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3BD");
    },
    Error,
    "EncodingError U+F3BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3BE");
    },
    Error,
    "EncodingError U+F3BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3BF");
    },
    Error,
    "EncodingError U+F3BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C0");
    },
    Error,
    "EncodingError U+F3C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C1");
    },
    Error,
    "EncodingError U+F3C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C2");
    },
    Error,
    "EncodingError U+F3C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C3");
    },
    Error,
    "EncodingError U+F3C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C4");
    },
    Error,
    "EncodingError U+F3C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C5");
    },
    Error,
    "EncodingError U+F3C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C6");
    },
    Error,
    "EncodingError U+F3C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C7");
    },
    Error,
    "EncodingError U+F3C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C8");
    },
    Error,
    "EncodingError U+F3C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C9");
    },
    Error,
    "EncodingError U+F3C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3CA");
    },
    Error,
    "EncodingError U+F3CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3CB");
    },
    Error,
    "EncodingError U+F3CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3CC");
    },
    Error,
    "EncodingError U+F3CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3CD");
    },
    Error,
    "EncodingError U+F3CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3CE");
    },
    Error,
    "EncodingError U+F3CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3CF");
    },
    Error,
    "EncodingError U+F3CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D0");
    },
    Error,
    "EncodingError U+F3D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D1");
    },
    Error,
    "EncodingError U+F3D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D2");
    },
    Error,
    "EncodingError U+F3D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D3");
    },
    Error,
    "EncodingError U+F3D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D4");
    },
    Error,
    "EncodingError U+F3D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D5");
    },
    Error,
    "EncodingError U+F3D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D6");
    },
    Error,
    "EncodingError U+F3D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D7");
    },
    Error,
    "EncodingError U+F3D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D8");
    },
    Error,
    "EncodingError U+F3D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D9");
    },
    Error,
    "EncodingError U+F3D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3DA");
    },
    Error,
    "EncodingError U+F3DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3DB");
    },
    Error,
    "EncodingError U+F3DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3DC");
    },
    Error,
    "EncodingError U+F3DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3DD");
    },
    Error,
    "EncodingError U+F3DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3DE");
    },
    Error,
    "EncodingError U+F3DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3DF");
    },
    Error,
    "EncodingError U+F3DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E0");
    },
    Error,
    "EncodingError U+F3E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E1");
    },
    Error,
    "EncodingError U+F3E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E2");
    },
    Error,
    "EncodingError U+F3E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E3");
    },
    Error,
    "EncodingError U+F3E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E4");
    },
    Error,
    "EncodingError U+F3E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E5");
    },
    Error,
    "EncodingError U+F3E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E6");
    },
    Error,
    "EncodingError U+F3E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E7");
    },
    Error,
    "EncodingError U+F3E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E8");
    },
    Error,
    "EncodingError U+F3E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E9");
    },
    Error,
    "EncodingError U+F3E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3EA");
    },
    Error,
    "EncodingError U+F3EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3EB");
    },
    Error,
    "EncodingError U+F3EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3EC");
    },
    Error,
    "EncodingError U+F3EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3ED");
    },
    Error,
    "EncodingError U+F3ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3EE");
    },
    Error,
    "EncodingError U+F3EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3EF");
    },
    Error,
    "EncodingError U+F3EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F0");
    },
    Error,
    "EncodingError U+F3F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F1");
    },
    Error,
    "EncodingError U+F3F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F2");
    },
    Error,
    "EncodingError U+F3F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F3");
    },
    Error,
    "EncodingError U+F3F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F4");
    },
    Error,
    "EncodingError U+F3F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F5");
    },
    Error,
    "EncodingError U+F3F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F6");
    },
    Error,
    "EncodingError U+F3F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F7");
    },
    Error,
    "EncodingError U+F3F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F8");
    },
    Error,
    "EncodingError U+F3F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F9");
    },
    Error,
    "EncodingError U+F3F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3FA");
    },
    Error,
    "EncodingError U+F3FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3FB");
    },
    Error,
    "EncodingError U+F3FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3FC");
    },
    Error,
    "EncodingError U+F3FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3FD");
    },
    Error,
    "EncodingError U+F3FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3FE");
    },
    Error,
    "EncodingError U+F3FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3FF");
    },
    Error,
    "EncodingError U+F3FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF400");
    },
    Error,
    "EncodingError U+F400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF401");
    },
    Error,
    "EncodingError U+F401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF402");
    },
    Error,
    "EncodingError U+F402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF403");
    },
    Error,
    "EncodingError U+F403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF404");
    },
    Error,
    "EncodingError U+F404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF405");
    },
    Error,
    "EncodingError U+F405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF406");
    },
    Error,
    "EncodingError U+F406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF407");
    },
    Error,
    "EncodingError U+F407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF408");
    },
    Error,
    "EncodingError U+F408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF409");
    },
    Error,
    "EncodingError U+F409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF40A");
    },
    Error,
    "EncodingError U+F40A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF40B");
    },
    Error,
    "EncodingError U+F40B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF40C");
    },
    Error,
    "EncodingError U+F40C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF40D");
    },
    Error,
    "EncodingError U+F40D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF40E");
    },
    Error,
    "EncodingError U+F40E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF40F");
    },
    Error,
    "EncodingError U+F40F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF410");
    },
    Error,
    "EncodingError U+F410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF411");
    },
    Error,
    "EncodingError U+F411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF412");
    },
    Error,
    "EncodingError U+F412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF413");
    },
    Error,
    "EncodingError U+F413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF414");
    },
    Error,
    "EncodingError U+F414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF415");
    },
    Error,
    "EncodingError U+F415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF416");
    },
    Error,
    "EncodingError U+F416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF417");
    },
    Error,
    "EncodingError U+F417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF418");
    },
    Error,
    "EncodingError U+F418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF419");
    },
    Error,
    "EncodingError U+F419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF41A");
    },
    Error,
    "EncodingError U+F41A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF41B");
    },
    Error,
    "EncodingError U+F41B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF41C");
    },
    Error,
    "EncodingError U+F41C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF41D");
    },
    Error,
    "EncodingError U+F41D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF41E");
    },
    Error,
    "EncodingError U+F41E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF41F");
    },
    Error,
    "EncodingError U+F41F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF420");
    },
    Error,
    "EncodingError U+F420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF421");
    },
    Error,
    "EncodingError U+F421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF422");
    },
    Error,
    "EncodingError U+F422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF423");
    },
    Error,
    "EncodingError U+F423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF424");
    },
    Error,
    "EncodingError U+F424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF425");
    },
    Error,
    "EncodingError U+F425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF426");
    },
    Error,
    "EncodingError U+F426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF427");
    },
    Error,
    "EncodingError U+F427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF428");
    },
    Error,
    "EncodingError U+F428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF429");
    },
    Error,
    "EncodingError U+F429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF42A");
    },
    Error,
    "EncodingError U+F42A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF42B");
    },
    Error,
    "EncodingError U+F42B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF42C");
    },
    Error,
    "EncodingError U+F42C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF42D");
    },
    Error,
    "EncodingError U+F42D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF42E");
    },
    Error,
    "EncodingError U+F42E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF42F");
    },
    Error,
    "EncodingError U+F42F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF430");
    },
    Error,
    "EncodingError U+F430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF431");
    },
    Error,
    "EncodingError U+F431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF432");
    },
    Error,
    "EncodingError U+F432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF433");
    },
    Error,
    "EncodingError U+F433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF434");
    },
    Error,
    "EncodingError U+F434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF435");
    },
    Error,
    "EncodingError U+F435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF436");
    },
    Error,
    "EncodingError U+F436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF437");
    },
    Error,
    "EncodingError U+F437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF438");
    },
    Error,
    "EncodingError U+F438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF439");
    },
    Error,
    "EncodingError U+F439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF43A");
    },
    Error,
    "EncodingError U+F43A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF43B");
    },
    Error,
    "EncodingError U+F43B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF43C");
    },
    Error,
    "EncodingError U+F43C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF43D");
    },
    Error,
    "EncodingError U+F43D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF43E");
    },
    Error,
    "EncodingError U+F43E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF43F");
    },
    Error,
    "EncodingError U+F43F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF440");
    },
    Error,
    "EncodingError U+F440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF441");
    },
    Error,
    "EncodingError U+F441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF442");
    },
    Error,
    "EncodingError U+F442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF443");
    },
    Error,
    "EncodingError U+F443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF444");
    },
    Error,
    "EncodingError U+F444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF445");
    },
    Error,
    "EncodingError U+F445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF446");
    },
    Error,
    "EncodingError U+F446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF447");
    },
    Error,
    "EncodingError U+F447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF448");
    },
    Error,
    "EncodingError U+F448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF449");
    },
    Error,
    "EncodingError U+F449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF44A");
    },
    Error,
    "EncodingError U+F44A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF44B");
    },
    Error,
    "EncodingError U+F44B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF44C");
    },
    Error,
    "EncodingError U+F44C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF44D");
    },
    Error,
    "EncodingError U+F44D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF44E");
    },
    Error,
    "EncodingError U+F44E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF44F");
    },
    Error,
    "EncodingError U+F44F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF450");
    },
    Error,
    "EncodingError U+F450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF451");
    },
    Error,
    "EncodingError U+F451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF452");
    },
    Error,
    "EncodingError U+F452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF453");
    },
    Error,
    "EncodingError U+F453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF454");
    },
    Error,
    "EncodingError U+F454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF455");
    },
    Error,
    "EncodingError U+F455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF456");
    },
    Error,
    "EncodingError U+F456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF457");
    },
    Error,
    "EncodingError U+F457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF458");
    },
    Error,
    "EncodingError U+F458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF459");
    },
    Error,
    "EncodingError U+F459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF45A");
    },
    Error,
    "EncodingError U+F45A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF45B");
    },
    Error,
    "EncodingError U+F45B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF45C");
    },
    Error,
    "EncodingError U+F45C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF45D");
    },
    Error,
    "EncodingError U+F45D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF45E");
    },
    Error,
    "EncodingError U+F45E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF45F");
    },
    Error,
    "EncodingError U+F45F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF460");
    },
    Error,
    "EncodingError U+F460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF461");
    },
    Error,
    "EncodingError U+F461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF462");
    },
    Error,
    "EncodingError U+F462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF463");
    },
    Error,
    "EncodingError U+F463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF464");
    },
    Error,
    "EncodingError U+F464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF465");
    },
    Error,
    "EncodingError U+F465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF466");
    },
    Error,
    "EncodingError U+F466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF467");
    },
    Error,
    "EncodingError U+F467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF468");
    },
    Error,
    "EncodingError U+F468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF469");
    },
    Error,
    "EncodingError U+F469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF46A");
    },
    Error,
    "EncodingError U+F46A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF46B");
    },
    Error,
    "EncodingError U+F46B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF46C");
    },
    Error,
    "EncodingError U+F46C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF46D");
    },
    Error,
    "EncodingError U+F46D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF46E");
    },
    Error,
    "EncodingError U+F46E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF46F");
    },
    Error,
    "EncodingError U+F46F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF470");
    },
    Error,
    "EncodingError U+F470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF471");
    },
    Error,
    "EncodingError U+F471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF472");
    },
    Error,
    "EncodingError U+F472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF473");
    },
    Error,
    "EncodingError U+F473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF474");
    },
    Error,
    "EncodingError U+F474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF475");
    },
    Error,
    "EncodingError U+F475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF476");
    },
    Error,
    "EncodingError U+F476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF477");
    },
    Error,
    "EncodingError U+F477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF478");
    },
    Error,
    "EncodingError U+F478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF479");
    },
    Error,
    "EncodingError U+F479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF47A");
    },
    Error,
    "EncodingError U+F47A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF47B");
    },
    Error,
    "EncodingError U+F47B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF47C");
    },
    Error,
    "EncodingError U+F47C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF47D");
    },
    Error,
    "EncodingError U+F47D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF47E");
    },
    Error,
    "EncodingError U+F47E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF47F");
    },
    Error,
    "EncodingError U+F47F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF480");
    },
    Error,
    "EncodingError U+F480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF481");
    },
    Error,
    "EncodingError U+F481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF482");
    },
    Error,
    "EncodingError U+F482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF483");
    },
    Error,
    "EncodingError U+F483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF484");
    },
    Error,
    "EncodingError U+F484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF485");
    },
    Error,
    "EncodingError U+F485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF486");
    },
    Error,
    "EncodingError U+F486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF487");
    },
    Error,
    "EncodingError U+F487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF488");
    },
    Error,
    "EncodingError U+F488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF489");
    },
    Error,
    "EncodingError U+F489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF48A");
    },
    Error,
    "EncodingError U+F48A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF48B");
    },
    Error,
    "EncodingError U+F48B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF48C");
    },
    Error,
    "EncodingError U+F48C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF48D");
    },
    Error,
    "EncodingError U+F48D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF48E");
    },
    Error,
    "EncodingError U+F48E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF48F");
    },
    Error,
    "EncodingError U+F48F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF490");
    },
    Error,
    "EncodingError U+F490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF491");
    },
    Error,
    "EncodingError U+F491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF492");
    },
    Error,
    "EncodingError U+F492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF493");
    },
    Error,
    "EncodingError U+F493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF494");
    },
    Error,
    "EncodingError U+F494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF495");
    },
    Error,
    "EncodingError U+F495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF496");
    },
    Error,
    "EncodingError U+F496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF497");
    },
    Error,
    "EncodingError U+F497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF498");
    },
    Error,
    "EncodingError U+F498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF499");
    },
    Error,
    "EncodingError U+F499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF49A");
    },
    Error,
    "EncodingError U+F49A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF49B");
    },
    Error,
    "EncodingError U+F49B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF49C");
    },
    Error,
    "EncodingError U+F49C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF49D");
    },
    Error,
    "EncodingError U+F49D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF49E");
    },
    Error,
    "EncodingError U+F49E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF49F");
    },
    Error,
    "EncodingError U+F49F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A0");
    },
    Error,
    "EncodingError U+F4A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A1");
    },
    Error,
    "EncodingError U+F4A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A2");
    },
    Error,
    "EncodingError U+F4A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A3");
    },
    Error,
    "EncodingError U+F4A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A4");
    },
    Error,
    "EncodingError U+F4A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A5");
    },
    Error,
    "EncodingError U+F4A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A6");
    },
    Error,
    "EncodingError U+F4A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A7");
    },
    Error,
    "EncodingError U+F4A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A8");
    },
    Error,
    "EncodingError U+F4A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A9");
    },
    Error,
    "EncodingError U+F4A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4AA");
    },
    Error,
    "EncodingError U+F4AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4AB");
    },
    Error,
    "EncodingError U+F4AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4AC");
    },
    Error,
    "EncodingError U+F4AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4AD");
    },
    Error,
    "EncodingError U+F4AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4AE");
    },
    Error,
    "EncodingError U+F4AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4AF");
    },
    Error,
    "EncodingError U+F4AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B0");
    },
    Error,
    "EncodingError U+F4B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B1");
    },
    Error,
    "EncodingError U+F4B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B2");
    },
    Error,
    "EncodingError U+F4B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B3");
    },
    Error,
    "EncodingError U+F4B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B4");
    },
    Error,
    "EncodingError U+F4B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B5");
    },
    Error,
    "EncodingError U+F4B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B6");
    },
    Error,
    "EncodingError U+F4B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B7");
    },
    Error,
    "EncodingError U+F4B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B8");
    },
    Error,
    "EncodingError U+F4B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B9");
    },
    Error,
    "EncodingError U+F4B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4BA");
    },
    Error,
    "EncodingError U+F4BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4BB");
    },
    Error,
    "EncodingError U+F4BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4BC");
    },
    Error,
    "EncodingError U+F4BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4BD");
    },
    Error,
    "EncodingError U+F4BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4BE");
    },
    Error,
    "EncodingError U+F4BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4BF");
    },
    Error,
    "EncodingError U+F4BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C0");
    },
    Error,
    "EncodingError U+F4C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C1");
    },
    Error,
    "EncodingError U+F4C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C2");
    },
    Error,
    "EncodingError U+F4C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C3");
    },
    Error,
    "EncodingError U+F4C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C4");
    },
    Error,
    "EncodingError U+F4C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C5");
    },
    Error,
    "EncodingError U+F4C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C6");
    },
    Error,
    "EncodingError U+F4C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C7");
    },
    Error,
    "EncodingError U+F4C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C8");
    },
    Error,
    "EncodingError U+F4C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C9");
    },
    Error,
    "EncodingError U+F4C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4CA");
    },
    Error,
    "EncodingError U+F4CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4CB");
    },
    Error,
    "EncodingError U+F4CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4CC");
    },
    Error,
    "EncodingError U+F4CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4CD");
    },
    Error,
    "EncodingError U+F4CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4CE");
    },
    Error,
    "EncodingError U+F4CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4CF");
    },
    Error,
    "EncodingError U+F4CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D0");
    },
    Error,
    "EncodingError U+F4D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D1");
    },
    Error,
    "EncodingError U+F4D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D2");
    },
    Error,
    "EncodingError U+F4D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D3");
    },
    Error,
    "EncodingError U+F4D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D4");
    },
    Error,
    "EncodingError U+F4D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D5");
    },
    Error,
    "EncodingError U+F4D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D6");
    },
    Error,
    "EncodingError U+F4D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D7");
    },
    Error,
    "EncodingError U+F4D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D8");
    },
    Error,
    "EncodingError U+F4D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D9");
    },
    Error,
    "EncodingError U+F4D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4DA");
    },
    Error,
    "EncodingError U+F4DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4DB");
    },
    Error,
    "EncodingError U+F4DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4DC");
    },
    Error,
    "EncodingError U+F4DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4DD");
    },
    Error,
    "EncodingError U+F4DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4DE");
    },
    Error,
    "EncodingError U+F4DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4DF");
    },
    Error,
    "EncodingError U+F4DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E0");
    },
    Error,
    "EncodingError U+F4E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E1");
    },
    Error,
    "EncodingError U+F4E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E2");
    },
    Error,
    "EncodingError U+F4E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E3");
    },
    Error,
    "EncodingError U+F4E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E4");
    },
    Error,
    "EncodingError U+F4E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E5");
    },
    Error,
    "EncodingError U+F4E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E6");
    },
    Error,
    "EncodingError U+F4E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E7");
    },
    Error,
    "EncodingError U+F4E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E8");
    },
    Error,
    "EncodingError U+F4E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E9");
    },
    Error,
    "EncodingError U+F4E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4EA");
    },
    Error,
    "EncodingError U+F4EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4EB");
    },
    Error,
    "EncodingError U+F4EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4EC");
    },
    Error,
    "EncodingError U+F4EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4ED");
    },
    Error,
    "EncodingError U+F4ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4EE");
    },
    Error,
    "EncodingError U+F4EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4EF");
    },
    Error,
    "EncodingError U+F4EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F0");
    },
    Error,
    "EncodingError U+F4F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F1");
    },
    Error,
    "EncodingError U+F4F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F2");
    },
    Error,
    "EncodingError U+F4F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F3");
    },
    Error,
    "EncodingError U+F4F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F4");
    },
    Error,
    "EncodingError U+F4F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F5");
    },
    Error,
    "EncodingError U+F4F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F6");
    },
    Error,
    "EncodingError U+F4F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F7");
    },
    Error,
    "EncodingError U+F4F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F8");
    },
    Error,
    "EncodingError U+F4F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F9");
    },
    Error,
    "EncodingError U+F4F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4FA");
    },
    Error,
    "EncodingError U+F4FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4FB");
    },
    Error,
    "EncodingError U+F4FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4FC");
    },
    Error,
    "EncodingError U+F4FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4FD");
    },
    Error,
    "EncodingError U+F4FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4FE");
    },
    Error,
    "EncodingError U+F4FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4FF");
    },
    Error,
    "EncodingError U+F4FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF500");
    },
    Error,
    "EncodingError U+F500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF501");
    },
    Error,
    "EncodingError U+F501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF502");
    },
    Error,
    "EncodingError U+F502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF503");
    },
    Error,
    "EncodingError U+F503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF504");
    },
    Error,
    "EncodingError U+F504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF505");
    },
    Error,
    "EncodingError U+F505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF506");
    },
    Error,
    "EncodingError U+F506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF507");
    },
    Error,
    "EncodingError U+F507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF508");
    },
    Error,
    "EncodingError U+F508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF509");
    },
    Error,
    "EncodingError U+F509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF50A");
    },
    Error,
    "EncodingError U+F50A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF50B");
    },
    Error,
    "EncodingError U+F50B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF50C");
    },
    Error,
    "EncodingError U+F50C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF50D");
    },
    Error,
    "EncodingError U+F50D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF50E");
    },
    Error,
    "EncodingError U+F50E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF50F");
    },
    Error,
    "EncodingError U+F50F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF510");
    },
    Error,
    "EncodingError U+F510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF511");
    },
    Error,
    "EncodingError U+F511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF512");
    },
    Error,
    "EncodingError U+F512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF513");
    },
    Error,
    "EncodingError U+F513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF514");
    },
    Error,
    "EncodingError U+F514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF515");
    },
    Error,
    "EncodingError U+F515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF516");
    },
    Error,
    "EncodingError U+F516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF517");
    },
    Error,
    "EncodingError U+F517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF518");
    },
    Error,
    "EncodingError U+F518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF519");
    },
    Error,
    "EncodingError U+F519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF51A");
    },
    Error,
    "EncodingError U+F51A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF51B");
    },
    Error,
    "EncodingError U+F51B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF51C");
    },
    Error,
    "EncodingError U+F51C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF51D");
    },
    Error,
    "EncodingError U+F51D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF51E");
    },
    Error,
    "EncodingError U+F51E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF51F");
    },
    Error,
    "EncodingError U+F51F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF520");
    },
    Error,
    "EncodingError U+F520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF521");
    },
    Error,
    "EncodingError U+F521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF522");
    },
    Error,
    "EncodingError U+F522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF523");
    },
    Error,
    "EncodingError U+F523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF524");
    },
    Error,
    "EncodingError U+F524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF525");
    },
    Error,
    "EncodingError U+F525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF526");
    },
    Error,
    "EncodingError U+F526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF527");
    },
    Error,
    "EncodingError U+F527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF528");
    },
    Error,
    "EncodingError U+F528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF529");
    },
    Error,
    "EncodingError U+F529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF52A");
    },
    Error,
    "EncodingError U+F52A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF52B");
    },
    Error,
    "EncodingError U+F52B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF52C");
    },
    Error,
    "EncodingError U+F52C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF52D");
    },
    Error,
    "EncodingError U+F52D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF52E");
    },
    Error,
    "EncodingError U+F52E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF52F");
    },
    Error,
    "EncodingError U+F52F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF530");
    },
    Error,
    "EncodingError U+F530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF531");
    },
    Error,
    "EncodingError U+F531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF532");
    },
    Error,
    "EncodingError U+F532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF533");
    },
    Error,
    "EncodingError U+F533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF534");
    },
    Error,
    "EncodingError U+F534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF535");
    },
    Error,
    "EncodingError U+F535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF536");
    },
    Error,
    "EncodingError U+F536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF537");
    },
    Error,
    "EncodingError U+F537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF538");
    },
    Error,
    "EncodingError U+F538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF539");
    },
    Error,
    "EncodingError U+F539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF53A");
    },
    Error,
    "EncodingError U+F53A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF53B");
    },
    Error,
    "EncodingError U+F53B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF53C");
    },
    Error,
    "EncodingError U+F53C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF53D");
    },
    Error,
    "EncodingError U+F53D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF53E");
    },
    Error,
    "EncodingError U+F53E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF53F");
    },
    Error,
    "EncodingError U+F53F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF540");
    },
    Error,
    "EncodingError U+F540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF541");
    },
    Error,
    "EncodingError U+F541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF542");
    },
    Error,
    "EncodingError U+F542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF543");
    },
    Error,
    "EncodingError U+F543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF544");
    },
    Error,
    "EncodingError U+F544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF545");
    },
    Error,
    "EncodingError U+F545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF546");
    },
    Error,
    "EncodingError U+F546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF547");
    },
    Error,
    "EncodingError U+F547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF548");
    },
    Error,
    "EncodingError U+F548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF549");
    },
    Error,
    "EncodingError U+F549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF54A");
    },
    Error,
    "EncodingError U+F54A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF54B");
    },
    Error,
    "EncodingError U+F54B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF54C");
    },
    Error,
    "EncodingError U+F54C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF54D");
    },
    Error,
    "EncodingError U+F54D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF54E");
    },
    Error,
    "EncodingError U+F54E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF54F");
    },
    Error,
    "EncodingError U+F54F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF550");
    },
    Error,
    "EncodingError U+F550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF551");
    },
    Error,
    "EncodingError U+F551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF552");
    },
    Error,
    "EncodingError U+F552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF553");
    },
    Error,
    "EncodingError U+F553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF554");
    },
    Error,
    "EncodingError U+F554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF555");
    },
    Error,
    "EncodingError U+F555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF556");
    },
    Error,
    "EncodingError U+F556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF557");
    },
    Error,
    "EncodingError U+F557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF558");
    },
    Error,
    "EncodingError U+F558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF559");
    },
    Error,
    "EncodingError U+F559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF55A");
    },
    Error,
    "EncodingError U+F55A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF55B");
    },
    Error,
    "EncodingError U+F55B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF55C");
    },
    Error,
    "EncodingError U+F55C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF55D");
    },
    Error,
    "EncodingError U+F55D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF55E");
    },
    Error,
    "EncodingError U+F55E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF55F");
    },
    Error,
    "EncodingError U+F55F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF560");
    },
    Error,
    "EncodingError U+F560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF561");
    },
    Error,
    "EncodingError U+F561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF562");
    },
    Error,
    "EncodingError U+F562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF563");
    },
    Error,
    "EncodingError U+F563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF564");
    },
    Error,
    "EncodingError U+F564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF565");
    },
    Error,
    "EncodingError U+F565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF566");
    },
    Error,
    "EncodingError U+F566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF567");
    },
    Error,
    "EncodingError U+F567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF568");
    },
    Error,
    "EncodingError U+F568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF569");
    },
    Error,
    "EncodingError U+F569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF56A");
    },
    Error,
    "EncodingError U+F56A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF56B");
    },
    Error,
    "EncodingError U+F56B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF56C");
    },
    Error,
    "EncodingError U+F56C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF56D");
    },
    Error,
    "EncodingError U+F56D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF56E");
    },
    Error,
    "EncodingError U+F56E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF56F");
    },
    Error,
    "EncodingError U+F56F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF570");
    },
    Error,
    "EncodingError U+F570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF571");
    },
    Error,
    "EncodingError U+F571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF572");
    },
    Error,
    "EncodingError U+F572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF573");
    },
    Error,
    "EncodingError U+F573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF574");
    },
    Error,
    "EncodingError U+F574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF575");
    },
    Error,
    "EncodingError U+F575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF576");
    },
    Error,
    "EncodingError U+F576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF577");
    },
    Error,
    "EncodingError U+F577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF578");
    },
    Error,
    "EncodingError U+F578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF579");
    },
    Error,
    "EncodingError U+F579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF57A");
    },
    Error,
    "EncodingError U+F57A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF57B");
    },
    Error,
    "EncodingError U+F57B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF57C");
    },
    Error,
    "EncodingError U+F57C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF57D");
    },
    Error,
    "EncodingError U+F57D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF57E");
    },
    Error,
    "EncodingError U+F57E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF57F");
    },
    Error,
    "EncodingError U+F57F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF580");
    },
    Error,
    "EncodingError U+F580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF581");
    },
    Error,
    "EncodingError U+F581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF582");
    },
    Error,
    "EncodingError U+F582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF583");
    },
    Error,
    "EncodingError U+F583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF584");
    },
    Error,
    "EncodingError U+F584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF585");
    },
    Error,
    "EncodingError U+F585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF586");
    },
    Error,
    "EncodingError U+F586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF587");
    },
    Error,
    "EncodingError U+F587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF588");
    },
    Error,
    "EncodingError U+F588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF589");
    },
    Error,
    "EncodingError U+F589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF58A");
    },
    Error,
    "EncodingError U+F58A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF58B");
    },
    Error,
    "EncodingError U+F58B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF58C");
    },
    Error,
    "EncodingError U+F58C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF58D");
    },
    Error,
    "EncodingError U+F58D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF58E");
    },
    Error,
    "EncodingError U+F58E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF58F");
    },
    Error,
    "EncodingError U+F58F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF590");
    },
    Error,
    "EncodingError U+F590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF591");
    },
    Error,
    "EncodingError U+F591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF592");
    },
    Error,
    "EncodingError U+F592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF593");
    },
    Error,
    "EncodingError U+F593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF594");
    },
    Error,
    "EncodingError U+F594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF595");
    },
    Error,
    "EncodingError U+F595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF596");
    },
    Error,
    "EncodingError U+F596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF597");
    },
    Error,
    "EncodingError U+F597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF598");
    },
    Error,
    "EncodingError U+F598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF599");
    },
    Error,
    "EncodingError U+F599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF59A");
    },
    Error,
    "EncodingError U+F59A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF59B");
    },
    Error,
    "EncodingError U+F59B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF59C");
    },
    Error,
    "EncodingError U+F59C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF59D");
    },
    Error,
    "EncodingError U+F59D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF59E");
    },
    Error,
    "EncodingError U+F59E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF59F");
    },
    Error,
    "EncodingError U+F59F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A0");
    },
    Error,
    "EncodingError U+F5A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A1");
    },
    Error,
    "EncodingError U+F5A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A2");
    },
    Error,
    "EncodingError U+F5A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A3");
    },
    Error,
    "EncodingError U+F5A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A4");
    },
    Error,
    "EncodingError U+F5A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A5");
    },
    Error,
    "EncodingError U+F5A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A6");
    },
    Error,
    "EncodingError U+F5A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A7");
    },
    Error,
    "EncodingError U+F5A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A8");
    },
    Error,
    "EncodingError U+F5A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A9");
    },
    Error,
    "EncodingError U+F5A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5AA");
    },
    Error,
    "EncodingError U+F5AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5AB");
    },
    Error,
    "EncodingError U+F5AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5AC");
    },
    Error,
    "EncodingError U+F5AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5AD");
    },
    Error,
    "EncodingError U+F5AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5AE");
    },
    Error,
    "EncodingError U+F5AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5AF");
    },
    Error,
    "EncodingError U+F5AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B0");
    },
    Error,
    "EncodingError U+F5B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B1");
    },
    Error,
    "EncodingError U+F5B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B2");
    },
    Error,
    "EncodingError U+F5B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B3");
    },
    Error,
    "EncodingError U+F5B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B4");
    },
    Error,
    "EncodingError U+F5B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B5");
    },
    Error,
    "EncodingError U+F5B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B6");
    },
    Error,
    "EncodingError U+F5B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B7");
    },
    Error,
    "EncodingError U+F5B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B8");
    },
    Error,
    "EncodingError U+F5B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B9");
    },
    Error,
    "EncodingError U+F5B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5BA");
    },
    Error,
    "EncodingError U+F5BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5BB");
    },
    Error,
    "EncodingError U+F5BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5BC");
    },
    Error,
    "EncodingError U+F5BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5BD");
    },
    Error,
    "EncodingError U+F5BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5BE");
    },
    Error,
    "EncodingError U+F5BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5BF");
    },
    Error,
    "EncodingError U+F5BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C0");
    },
    Error,
    "EncodingError U+F5C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C1");
    },
    Error,
    "EncodingError U+F5C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C2");
    },
    Error,
    "EncodingError U+F5C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C3");
    },
    Error,
    "EncodingError U+F5C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C4");
    },
    Error,
    "EncodingError U+F5C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C5");
    },
    Error,
    "EncodingError U+F5C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C6");
    },
    Error,
    "EncodingError U+F5C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C7");
    },
    Error,
    "EncodingError U+F5C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C8");
    },
    Error,
    "EncodingError U+F5C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C9");
    },
    Error,
    "EncodingError U+F5C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5CA");
    },
    Error,
    "EncodingError U+F5CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5CB");
    },
    Error,
    "EncodingError U+F5CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5CC");
    },
    Error,
    "EncodingError U+F5CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5CD");
    },
    Error,
    "EncodingError U+F5CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5CE");
    },
    Error,
    "EncodingError U+F5CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5CF");
    },
    Error,
    "EncodingError U+F5CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D0");
    },
    Error,
    "EncodingError U+F5D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D1");
    },
    Error,
    "EncodingError U+F5D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D2");
    },
    Error,
    "EncodingError U+F5D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D3");
    },
    Error,
    "EncodingError U+F5D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D4");
    },
    Error,
    "EncodingError U+F5D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D5");
    },
    Error,
    "EncodingError U+F5D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D6");
    },
    Error,
    "EncodingError U+F5D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D7");
    },
    Error,
    "EncodingError U+F5D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D8");
    },
    Error,
    "EncodingError U+F5D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D9");
    },
    Error,
    "EncodingError U+F5D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5DA");
    },
    Error,
    "EncodingError U+F5DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5DB");
    },
    Error,
    "EncodingError U+F5DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5DC");
    },
    Error,
    "EncodingError U+F5DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5DD");
    },
    Error,
    "EncodingError U+F5DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5DE");
    },
    Error,
    "EncodingError U+F5DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5DF");
    },
    Error,
    "EncodingError U+F5DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E0");
    },
    Error,
    "EncodingError U+F5E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E1");
    },
    Error,
    "EncodingError U+F5E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E2");
    },
    Error,
    "EncodingError U+F5E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E3");
    },
    Error,
    "EncodingError U+F5E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E4");
    },
    Error,
    "EncodingError U+F5E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E5");
    },
    Error,
    "EncodingError U+F5E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E6");
    },
    Error,
    "EncodingError U+F5E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E7");
    },
    Error,
    "EncodingError U+F5E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E8");
    },
    Error,
    "EncodingError U+F5E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E9");
    },
    Error,
    "EncodingError U+F5E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5EA");
    },
    Error,
    "EncodingError U+F5EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5EB");
    },
    Error,
    "EncodingError U+F5EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5EC");
    },
    Error,
    "EncodingError U+F5EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5ED");
    },
    Error,
    "EncodingError U+F5ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5EE");
    },
    Error,
    "EncodingError U+F5EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5EF");
    },
    Error,
    "EncodingError U+F5EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F0");
    },
    Error,
    "EncodingError U+F5F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F1");
    },
    Error,
    "EncodingError U+F5F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F2");
    },
    Error,
    "EncodingError U+F5F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F3");
    },
    Error,
    "EncodingError U+F5F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F4");
    },
    Error,
    "EncodingError U+F5F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F5");
    },
    Error,
    "EncodingError U+F5F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F6");
    },
    Error,
    "EncodingError U+F5F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F7");
    },
    Error,
    "EncodingError U+F5F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F8");
    },
    Error,
    "EncodingError U+F5F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F9");
    },
    Error,
    "EncodingError U+F5F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5FA");
    },
    Error,
    "EncodingError U+F5FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5FB");
    },
    Error,
    "EncodingError U+F5FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5FC");
    },
    Error,
    "EncodingError U+F5FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5FD");
    },
    Error,
    "EncodingError U+F5FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5FE");
    },
    Error,
    "EncodingError U+F5FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5FF");
    },
    Error,
    "EncodingError U+F5FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF600");
    },
    Error,
    "EncodingError U+F600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF601");
    },
    Error,
    "EncodingError U+F601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF602");
    },
    Error,
    "EncodingError U+F602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF603");
    },
    Error,
    "EncodingError U+F603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF604");
    },
    Error,
    "EncodingError U+F604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF605");
    },
    Error,
    "EncodingError U+F605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF606");
    },
    Error,
    "EncodingError U+F606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF607");
    },
    Error,
    "EncodingError U+F607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF608");
    },
    Error,
    "EncodingError U+F608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF609");
    },
    Error,
    "EncodingError U+F609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF60A");
    },
    Error,
    "EncodingError U+F60A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF60B");
    },
    Error,
    "EncodingError U+F60B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF60C");
    },
    Error,
    "EncodingError U+F60C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF60D");
    },
    Error,
    "EncodingError U+F60D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF60E");
    },
    Error,
    "EncodingError U+F60E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF60F");
    },
    Error,
    "EncodingError U+F60F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF610");
    },
    Error,
    "EncodingError U+F610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF611");
    },
    Error,
    "EncodingError U+F611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF612");
    },
    Error,
    "EncodingError U+F612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF613");
    },
    Error,
    "EncodingError U+F613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF614");
    },
    Error,
    "EncodingError U+F614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF615");
    },
    Error,
    "EncodingError U+F615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF616");
    },
    Error,
    "EncodingError U+F616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF617");
    },
    Error,
    "EncodingError U+F617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF618");
    },
    Error,
    "EncodingError U+F618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF619");
    },
    Error,
    "EncodingError U+F619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF61A");
    },
    Error,
    "EncodingError U+F61A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF61B");
    },
    Error,
    "EncodingError U+F61B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF61C");
    },
    Error,
    "EncodingError U+F61C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF61D");
    },
    Error,
    "EncodingError U+F61D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF61E");
    },
    Error,
    "EncodingError U+F61E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF61F");
    },
    Error,
    "EncodingError U+F61F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF620");
    },
    Error,
    "EncodingError U+F620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF621");
    },
    Error,
    "EncodingError U+F621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF622");
    },
    Error,
    "EncodingError U+F622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF623");
    },
    Error,
    "EncodingError U+F623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF624");
    },
    Error,
    "EncodingError U+F624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF625");
    },
    Error,
    "EncodingError U+F625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF626");
    },
    Error,
    "EncodingError U+F626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF627");
    },
    Error,
    "EncodingError U+F627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF628");
    },
    Error,
    "EncodingError U+F628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF629");
    },
    Error,
    "EncodingError U+F629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF62A");
    },
    Error,
    "EncodingError U+F62A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF62B");
    },
    Error,
    "EncodingError U+F62B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF62C");
    },
    Error,
    "EncodingError U+F62C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF62D");
    },
    Error,
    "EncodingError U+F62D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF62E");
    },
    Error,
    "EncodingError U+F62E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF62F");
    },
    Error,
    "EncodingError U+F62F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF630");
    },
    Error,
    "EncodingError U+F630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF631");
    },
    Error,
    "EncodingError U+F631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF632");
    },
    Error,
    "EncodingError U+F632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF633");
    },
    Error,
    "EncodingError U+F633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF634");
    },
    Error,
    "EncodingError U+F634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF635");
    },
    Error,
    "EncodingError U+F635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF636");
    },
    Error,
    "EncodingError U+F636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF637");
    },
    Error,
    "EncodingError U+F637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF638");
    },
    Error,
    "EncodingError U+F638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF639");
    },
    Error,
    "EncodingError U+F639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF63A");
    },
    Error,
    "EncodingError U+F63A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF63B");
    },
    Error,
    "EncodingError U+F63B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF63C");
    },
    Error,
    "EncodingError U+F63C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF63D");
    },
    Error,
    "EncodingError U+F63D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF63E");
    },
    Error,
    "EncodingError U+F63E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF63F");
    },
    Error,
    "EncodingError U+F63F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF640");
    },
    Error,
    "EncodingError U+F640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF641");
    },
    Error,
    "EncodingError U+F641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF642");
    },
    Error,
    "EncodingError U+F642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF643");
    },
    Error,
    "EncodingError U+F643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF644");
    },
    Error,
    "EncodingError U+F644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF645");
    },
    Error,
    "EncodingError U+F645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF646");
    },
    Error,
    "EncodingError U+F646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF647");
    },
    Error,
    "EncodingError U+F647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF648");
    },
    Error,
    "EncodingError U+F648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF649");
    },
    Error,
    "EncodingError U+F649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF64A");
    },
    Error,
    "EncodingError U+F64A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF64B");
    },
    Error,
    "EncodingError U+F64B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF64C");
    },
    Error,
    "EncodingError U+F64C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF64D");
    },
    Error,
    "EncodingError U+F64D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF64E");
    },
    Error,
    "EncodingError U+F64E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF64F");
    },
    Error,
    "EncodingError U+F64F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF650");
    },
    Error,
    "EncodingError U+F650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF651");
    },
    Error,
    "EncodingError U+F651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF652");
    },
    Error,
    "EncodingError U+F652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF653");
    },
    Error,
    "EncodingError U+F653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF654");
    },
    Error,
    "EncodingError U+F654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF655");
    },
    Error,
    "EncodingError U+F655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF656");
    },
    Error,
    "EncodingError U+F656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF657");
    },
    Error,
    "EncodingError U+F657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF658");
    },
    Error,
    "EncodingError U+F658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF659");
    },
    Error,
    "EncodingError U+F659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF65A");
    },
    Error,
    "EncodingError U+F65A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF65B");
    },
    Error,
    "EncodingError U+F65B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF65C");
    },
    Error,
    "EncodingError U+F65C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF65D");
    },
    Error,
    "EncodingError U+F65D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF65E");
    },
    Error,
    "EncodingError U+F65E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF65F");
    },
    Error,
    "EncodingError U+F65F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF660");
    },
    Error,
    "EncodingError U+F660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF661");
    },
    Error,
    "EncodingError U+F661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF662");
    },
    Error,
    "EncodingError U+F662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF663");
    },
    Error,
    "EncodingError U+F663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF664");
    },
    Error,
    "EncodingError U+F664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF665");
    },
    Error,
    "EncodingError U+F665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF666");
    },
    Error,
    "EncodingError U+F666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF667");
    },
    Error,
    "EncodingError U+F667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF668");
    },
    Error,
    "EncodingError U+F668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF669");
    },
    Error,
    "EncodingError U+F669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF66A");
    },
    Error,
    "EncodingError U+F66A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF66B");
    },
    Error,
    "EncodingError U+F66B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF66C");
    },
    Error,
    "EncodingError U+F66C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF66D");
    },
    Error,
    "EncodingError U+F66D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF66E");
    },
    Error,
    "EncodingError U+F66E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF66F");
    },
    Error,
    "EncodingError U+F66F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF670");
    },
    Error,
    "EncodingError U+F670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF671");
    },
    Error,
    "EncodingError U+F671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF672");
    },
    Error,
    "EncodingError U+F672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF673");
    },
    Error,
    "EncodingError U+F673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF674");
    },
    Error,
    "EncodingError U+F674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF675");
    },
    Error,
    "EncodingError U+F675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF676");
    },
    Error,
    "EncodingError U+F676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF677");
    },
    Error,
    "EncodingError U+F677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF678");
    },
    Error,
    "EncodingError U+F678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF679");
    },
    Error,
    "EncodingError U+F679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF67A");
    },
    Error,
    "EncodingError U+F67A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF67B");
    },
    Error,
    "EncodingError U+F67B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF67C");
    },
    Error,
    "EncodingError U+F67C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF67D");
    },
    Error,
    "EncodingError U+F67D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF67E");
    },
    Error,
    "EncodingError U+F67E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF67F");
    },
    Error,
    "EncodingError U+F67F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF680");
    },
    Error,
    "EncodingError U+F680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF681");
    },
    Error,
    "EncodingError U+F681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF682");
    },
    Error,
    "EncodingError U+F682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF683");
    },
    Error,
    "EncodingError U+F683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF684");
    },
    Error,
    "EncodingError U+F684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF685");
    },
    Error,
    "EncodingError U+F685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF686");
    },
    Error,
    "EncodingError U+F686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF687");
    },
    Error,
    "EncodingError U+F687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF688");
    },
    Error,
    "EncodingError U+F688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF689");
    },
    Error,
    "EncodingError U+F689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF68A");
    },
    Error,
    "EncodingError U+F68A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF68B");
    },
    Error,
    "EncodingError U+F68B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF68C");
    },
    Error,
    "EncodingError U+F68C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF68D");
    },
    Error,
    "EncodingError U+F68D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF68E");
    },
    Error,
    "EncodingError U+F68E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF68F");
    },
    Error,
    "EncodingError U+F68F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF690");
    },
    Error,
    "EncodingError U+F690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF691");
    },
    Error,
    "EncodingError U+F691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF692");
    },
    Error,
    "EncodingError U+F692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF693");
    },
    Error,
    "EncodingError U+F693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF694");
    },
    Error,
    "EncodingError U+F694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF695");
    },
    Error,
    "EncodingError U+F695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF696");
    },
    Error,
    "EncodingError U+F696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF697");
    },
    Error,
    "EncodingError U+F697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF698");
    },
    Error,
    "EncodingError U+F698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF699");
    },
    Error,
    "EncodingError U+F699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF69A");
    },
    Error,
    "EncodingError U+F69A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF69B");
    },
    Error,
    "EncodingError U+F69B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF69C");
    },
    Error,
    "EncodingError U+F69C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF69D");
    },
    Error,
    "EncodingError U+F69D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF69E");
    },
    Error,
    "EncodingError U+F69E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF69F");
    },
    Error,
    "EncodingError U+F69F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A0");
    },
    Error,
    "EncodingError U+F6A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A1");
    },
    Error,
    "EncodingError U+F6A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A2");
    },
    Error,
    "EncodingError U+F6A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A3");
    },
    Error,
    "EncodingError U+F6A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A4");
    },
    Error,
    "EncodingError U+F6A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A5");
    },
    Error,
    "EncodingError U+F6A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A6");
    },
    Error,
    "EncodingError U+F6A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A7");
    },
    Error,
    "EncodingError U+F6A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A8");
    },
    Error,
    "EncodingError U+F6A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A9");
    },
    Error,
    "EncodingError U+F6A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6AA");
    },
    Error,
    "EncodingError U+F6AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6AB");
    },
    Error,
    "EncodingError U+F6AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6AC");
    },
    Error,
    "EncodingError U+F6AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6AD");
    },
    Error,
    "EncodingError U+F6AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6AE");
    },
    Error,
    "EncodingError U+F6AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6AF");
    },
    Error,
    "EncodingError U+F6AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B0");
    },
    Error,
    "EncodingError U+F6B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B1");
    },
    Error,
    "EncodingError U+F6B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B2");
    },
    Error,
    "EncodingError U+F6B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B3");
    },
    Error,
    "EncodingError U+F6B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B4");
    },
    Error,
    "EncodingError U+F6B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B5");
    },
    Error,
    "EncodingError U+F6B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B6");
    },
    Error,
    "EncodingError U+F6B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B7");
    },
    Error,
    "EncodingError U+F6B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B8");
    },
    Error,
    "EncodingError U+F6B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B9");
    },
    Error,
    "EncodingError U+F6B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6BA");
    },
    Error,
    "EncodingError U+F6BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6BB");
    },
    Error,
    "EncodingError U+F6BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6BC");
    },
    Error,
    "EncodingError U+F6BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6BD");
    },
    Error,
    "EncodingError U+F6BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6BE");
    },
    Error,
    "EncodingError U+F6BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6BF");
    },
    Error,
    "EncodingError U+F6BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C0");
    },
    Error,
    "EncodingError U+F6C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C1");
    },
    Error,
    "EncodingError U+F6C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C2");
    },
    Error,
    "EncodingError U+F6C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C3");
    },
    Error,
    "EncodingError U+F6C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C4");
    },
    Error,
    "EncodingError U+F6C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C5");
    },
    Error,
    "EncodingError U+F6C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C6");
    },
    Error,
    "EncodingError U+F6C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C7");
    },
    Error,
    "EncodingError U+F6C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C8");
    },
    Error,
    "EncodingError U+F6C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C9");
    },
    Error,
    "EncodingError U+F6C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6CA");
    },
    Error,
    "EncodingError U+F6CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6CB");
    },
    Error,
    "EncodingError U+F6CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6CC");
    },
    Error,
    "EncodingError U+F6CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6CD");
    },
    Error,
    "EncodingError U+F6CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6CE");
    },
    Error,
    "EncodingError U+F6CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6CF");
    },
    Error,
    "EncodingError U+F6CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D0");
    },
    Error,
    "EncodingError U+F6D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D1");
    },
    Error,
    "EncodingError U+F6D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D2");
    },
    Error,
    "EncodingError U+F6D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D3");
    },
    Error,
    "EncodingError U+F6D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D4");
    },
    Error,
    "EncodingError U+F6D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D5");
    },
    Error,
    "EncodingError U+F6D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D6");
    },
    Error,
    "EncodingError U+F6D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D7");
    },
    Error,
    "EncodingError U+F6D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D8");
    },
    Error,
    "EncodingError U+F6D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D9");
    },
    Error,
    "EncodingError U+F6D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6DA");
    },
    Error,
    "EncodingError U+F6DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6DB");
    },
    Error,
    "EncodingError U+F6DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6DC");
    },
    Error,
    "EncodingError U+F6DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6DD");
    },
    Error,
    "EncodingError U+F6DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6DE");
    },
    Error,
    "EncodingError U+F6DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6DF");
    },
    Error,
    "EncodingError U+F6DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E0");
    },
    Error,
    "EncodingError U+F6E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E1");
    },
    Error,
    "EncodingError U+F6E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E2");
    },
    Error,
    "EncodingError U+F6E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E3");
    },
    Error,
    "EncodingError U+F6E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E4");
    },
    Error,
    "EncodingError U+F6E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E5");
    },
    Error,
    "EncodingError U+F6E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E6");
    },
    Error,
    "EncodingError U+F6E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E7");
    },
    Error,
    "EncodingError U+F6E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E8");
    },
    Error,
    "EncodingError U+F6E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E9");
    },
    Error,
    "EncodingError U+F6E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6EA");
    },
    Error,
    "EncodingError U+F6EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6EB");
    },
    Error,
    "EncodingError U+F6EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6EC");
    },
    Error,
    "EncodingError U+F6EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6ED");
    },
    Error,
    "EncodingError U+F6ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6EE");
    },
    Error,
    "EncodingError U+F6EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6EF");
    },
    Error,
    "EncodingError U+F6EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F0");
    },
    Error,
    "EncodingError U+F6F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F1");
    },
    Error,
    "EncodingError U+F6F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F2");
    },
    Error,
    "EncodingError U+F6F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F3");
    },
    Error,
    "EncodingError U+F6F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F4");
    },
    Error,
    "EncodingError U+F6F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F5");
    },
    Error,
    "EncodingError U+F6F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F6");
    },
    Error,
    "EncodingError U+F6F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F7");
    },
    Error,
    "EncodingError U+F6F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F8");
    },
    Error,
    "EncodingError U+F6F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F9");
    },
    Error,
    "EncodingError U+F6F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6FA");
    },
    Error,
    "EncodingError U+F6FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6FB");
    },
    Error,
    "EncodingError U+F6FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6FC");
    },
    Error,
    "EncodingError U+F6FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6FD");
    },
    Error,
    "EncodingError U+F6FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6FE");
    },
    Error,
    "EncodingError U+F6FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6FF");
    },
    Error,
    "EncodingError U+F6FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF700");
    },
    Error,
    "EncodingError U+F700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF701");
    },
    Error,
    "EncodingError U+F701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF702");
    },
    Error,
    "EncodingError U+F702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF703");
    },
    Error,
    "EncodingError U+F703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF704");
    },
    Error,
    "EncodingError U+F704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF705");
    },
    Error,
    "EncodingError U+F705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF706");
    },
    Error,
    "EncodingError U+F706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF707");
    },
    Error,
    "EncodingError U+F707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF708");
    },
    Error,
    "EncodingError U+F708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF709");
    },
    Error,
    "EncodingError U+F709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF70A");
    },
    Error,
    "EncodingError U+F70A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF70B");
    },
    Error,
    "EncodingError U+F70B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF70C");
    },
    Error,
    "EncodingError U+F70C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF70D");
    },
    Error,
    "EncodingError U+F70D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF70E");
    },
    Error,
    "EncodingError U+F70E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF70F");
    },
    Error,
    "EncodingError U+F70F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF710");
    },
    Error,
    "EncodingError U+F710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF711");
    },
    Error,
    "EncodingError U+F711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF712");
    },
    Error,
    "EncodingError U+F712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF713");
    },
    Error,
    "EncodingError U+F713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF714");
    },
    Error,
    "EncodingError U+F714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF715");
    },
    Error,
    "EncodingError U+F715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF716");
    },
    Error,
    "EncodingError U+F716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF717");
    },
    Error,
    "EncodingError U+F717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF718");
    },
    Error,
    "EncodingError U+F718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF719");
    },
    Error,
    "EncodingError U+F719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF71A");
    },
    Error,
    "EncodingError U+F71A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF71B");
    },
    Error,
    "EncodingError U+F71B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF71C");
    },
    Error,
    "EncodingError U+F71C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF71D");
    },
    Error,
    "EncodingError U+F71D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF71E");
    },
    Error,
    "EncodingError U+F71E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF71F");
    },
    Error,
    "EncodingError U+F71F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF720");
    },
    Error,
    "EncodingError U+F720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF721");
    },
    Error,
    "EncodingError U+F721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF722");
    },
    Error,
    "EncodingError U+F722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF723");
    },
    Error,
    "EncodingError U+F723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF724");
    },
    Error,
    "EncodingError U+F724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF725");
    },
    Error,
    "EncodingError U+F725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF726");
    },
    Error,
    "EncodingError U+F726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF727");
    },
    Error,
    "EncodingError U+F727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF728");
    },
    Error,
    "EncodingError U+F728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF729");
    },
    Error,
    "EncodingError U+F729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF72A");
    },
    Error,
    "EncodingError U+F72A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF72B");
    },
    Error,
    "EncodingError U+F72B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF72C");
    },
    Error,
    "EncodingError U+F72C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF72D");
    },
    Error,
    "EncodingError U+F72D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF72E");
    },
    Error,
    "EncodingError U+F72E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF72F");
    },
    Error,
    "EncodingError U+F72F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF730");
    },
    Error,
    "EncodingError U+F730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF731");
    },
    Error,
    "EncodingError U+F731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF732");
    },
    Error,
    "EncodingError U+F732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF733");
    },
    Error,
    "EncodingError U+F733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF734");
    },
    Error,
    "EncodingError U+F734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF735");
    },
    Error,
    "EncodingError U+F735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF736");
    },
    Error,
    "EncodingError U+F736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF737");
    },
    Error,
    "EncodingError U+F737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF738");
    },
    Error,
    "EncodingError U+F738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF739");
    },
    Error,
    "EncodingError U+F739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF73A");
    },
    Error,
    "EncodingError U+F73A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF73B");
    },
    Error,
    "EncodingError U+F73B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF73C");
    },
    Error,
    "EncodingError U+F73C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF73D");
    },
    Error,
    "EncodingError U+F73D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF73E");
    },
    Error,
    "EncodingError U+F73E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF73F");
    },
    Error,
    "EncodingError U+F73F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF740");
    },
    Error,
    "EncodingError U+F740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF741");
    },
    Error,
    "EncodingError U+F741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF742");
    },
    Error,
    "EncodingError U+F742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF743");
    },
    Error,
    "EncodingError U+F743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF744");
    },
    Error,
    "EncodingError U+F744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF745");
    },
    Error,
    "EncodingError U+F745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF746");
    },
    Error,
    "EncodingError U+F746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF747");
    },
    Error,
    "EncodingError U+F747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF748");
    },
    Error,
    "EncodingError U+F748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF749");
    },
    Error,
    "EncodingError U+F749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF74A");
    },
    Error,
    "EncodingError U+F74A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF74B");
    },
    Error,
    "EncodingError U+F74B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF74C");
    },
    Error,
    "EncodingError U+F74C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF74D");
    },
    Error,
    "EncodingError U+F74D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF74E");
    },
    Error,
    "EncodingError U+F74E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF74F");
    },
    Error,
    "EncodingError U+F74F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF750");
    },
    Error,
    "EncodingError U+F750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF751");
    },
    Error,
    "EncodingError U+F751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF752");
    },
    Error,
    "EncodingError U+F752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF753");
    },
    Error,
    "EncodingError U+F753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF754");
    },
    Error,
    "EncodingError U+F754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF755");
    },
    Error,
    "EncodingError U+F755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF756");
    },
    Error,
    "EncodingError U+F756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF757");
    },
    Error,
    "EncodingError U+F757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF758");
    },
    Error,
    "EncodingError U+F758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF759");
    },
    Error,
    "EncodingError U+F759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF75A");
    },
    Error,
    "EncodingError U+F75A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF75B");
    },
    Error,
    "EncodingError U+F75B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF75C");
    },
    Error,
    "EncodingError U+F75C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF75D");
    },
    Error,
    "EncodingError U+F75D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF75E");
    },
    Error,
    "EncodingError U+F75E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF75F");
    },
    Error,
    "EncodingError U+F75F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF760");
    },
    Error,
    "EncodingError U+F760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF761");
    },
    Error,
    "EncodingError U+F761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF762");
    },
    Error,
    "EncodingError U+F762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF763");
    },
    Error,
    "EncodingError U+F763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF764");
    },
    Error,
    "EncodingError U+F764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF765");
    },
    Error,
    "EncodingError U+F765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF766");
    },
    Error,
    "EncodingError U+F766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF767");
    },
    Error,
    "EncodingError U+F767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF768");
    },
    Error,
    "EncodingError U+F768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF769");
    },
    Error,
    "EncodingError U+F769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF76A");
    },
    Error,
    "EncodingError U+F76A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF76B");
    },
    Error,
    "EncodingError U+F76B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF76C");
    },
    Error,
    "EncodingError U+F76C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF76D");
    },
    Error,
    "EncodingError U+F76D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF76E");
    },
    Error,
    "EncodingError U+F76E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF76F");
    },
    Error,
    "EncodingError U+F76F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF770");
    },
    Error,
    "EncodingError U+F770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF771");
    },
    Error,
    "EncodingError U+F771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF772");
    },
    Error,
    "EncodingError U+F772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF773");
    },
    Error,
    "EncodingError U+F773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF774");
    },
    Error,
    "EncodingError U+F774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF775");
    },
    Error,
    "EncodingError U+F775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF776");
    },
    Error,
    "EncodingError U+F776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF777");
    },
    Error,
    "EncodingError U+F777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF778");
    },
    Error,
    "EncodingError U+F778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF779");
    },
    Error,
    "EncodingError U+F779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF77A");
    },
    Error,
    "EncodingError U+F77A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF77B");
    },
    Error,
    "EncodingError U+F77B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF77C");
    },
    Error,
    "EncodingError U+F77C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF77D");
    },
    Error,
    "EncodingError U+F77D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF77E");
    },
    Error,
    "EncodingError U+F77E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF77F");
    },
    Error,
    "EncodingError U+F77F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF780");
    },
    Error,
    "EncodingError U+F780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF781");
    },
    Error,
    "EncodingError U+F781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF782");
    },
    Error,
    "EncodingError U+F782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF783");
    },
    Error,
    "EncodingError U+F783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF784");
    },
    Error,
    "EncodingError U+F784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF785");
    },
    Error,
    "EncodingError U+F785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF786");
    },
    Error,
    "EncodingError U+F786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF787");
    },
    Error,
    "EncodingError U+F787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF788");
    },
    Error,
    "EncodingError U+F788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF789");
    },
    Error,
    "EncodingError U+F789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF78A");
    },
    Error,
    "EncodingError U+F78A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF78B");
    },
    Error,
    "EncodingError U+F78B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF78C");
    },
    Error,
    "EncodingError U+F78C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF78D");
    },
    Error,
    "EncodingError U+F78D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF78E");
    },
    Error,
    "EncodingError U+F78E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF78F");
    },
    Error,
    "EncodingError U+F78F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF790");
    },
    Error,
    "EncodingError U+F790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF791");
    },
    Error,
    "EncodingError U+F791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF792");
    },
    Error,
    "EncodingError U+F792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF793");
    },
    Error,
    "EncodingError U+F793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF794");
    },
    Error,
    "EncodingError U+F794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF795");
    },
    Error,
    "EncodingError U+F795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF796");
    },
    Error,
    "EncodingError U+F796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF797");
    },
    Error,
    "EncodingError U+F797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF798");
    },
    Error,
    "EncodingError U+F798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF799");
    },
    Error,
    "EncodingError U+F799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF79A");
    },
    Error,
    "EncodingError U+F79A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF79B");
    },
    Error,
    "EncodingError U+F79B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF79C");
    },
    Error,
    "EncodingError U+F79C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF79D");
    },
    Error,
    "EncodingError U+F79D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF79E");
    },
    Error,
    "EncodingError U+F79E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF79F");
    },
    Error,
    "EncodingError U+F79F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A0");
    },
    Error,
    "EncodingError U+F7A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A1");
    },
    Error,
    "EncodingError U+F7A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A2");
    },
    Error,
    "EncodingError U+F7A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A3");
    },
    Error,
    "EncodingError U+F7A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A4");
    },
    Error,
    "EncodingError U+F7A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A5");
    },
    Error,
    "EncodingError U+F7A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A6");
    },
    Error,
    "EncodingError U+F7A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A7");
    },
    Error,
    "EncodingError U+F7A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A8");
    },
    Error,
    "EncodingError U+F7A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A9");
    },
    Error,
    "EncodingError U+F7A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7AA");
    },
    Error,
    "EncodingError U+F7AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7AB");
    },
    Error,
    "EncodingError U+F7AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7AC");
    },
    Error,
    "EncodingError U+F7AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7AD");
    },
    Error,
    "EncodingError U+F7AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7AE");
    },
    Error,
    "EncodingError U+F7AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7AF");
    },
    Error,
    "EncodingError U+F7AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B0");
    },
    Error,
    "EncodingError U+F7B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B1");
    },
    Error,
    "EncodingError U+F7B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B2");
    },
    Error,
    "EncodingError U+F7B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B3");
    },
    Error,
    "EncodingError U+F7B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B4");
    },
    Error,
    "EncodingError U+F7B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B5");
    },
    Error,
    "EncodingError U+F7B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B6");
    },
    Error,
    "EncodingError U+F7B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B7");
    },
    Error,
    "EncodingError U+F7B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B8");
    },
    Error,
    "EncodingError U+F7B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B9");
    },
    Error,
    "EncodingError U+F7B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7BA");
    },
    Error,
    "EncodingError U+F7BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7BB");
    },
    Error,
    "EncodingError U+F7BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7BC");
    },
    Error,
    "EncodingError U+F7BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7BD");
    },
    Error,
    "EncodingError U+F7BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7BE");
    },
    Error,
    "EncodingError U+F7BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7BF");
    },
    Error,
    "EncodingError U+F7BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C0");
    },
    Error,
    "EncodingError U+F7C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C1");
    },
    Error,
    "EncodingError U+F7C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C2");
    },
    Error,
    "EncodingError U+F7C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C3");
    },
    Error,
    "EncodingError U+F7C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C4");
    },
    Error,
    "EncodingError U+F7C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C5");
    },
    Error,
    "EncodingError U+F7C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C6");
    },
    Error,
    "EncodingError U+F7C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C7");
    },
    Error,
    "EncodingError U+F7C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C8");
    },
    Error,
    "EncodingError U+F7C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C9");
    },
    Error,
    "EncodingError U+F7C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7CA");
    },
    Error,
    "EncodingError U+F7CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7CB");
    },
    Error,
    "EncodingError U+F7CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7CC");
    },
    Error,
    "EncodingError U+F7CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7CD");
    },
    Error,
    "EncodingError U+F7CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7CE");
    },
    Error,
    "EncodingError U+F7CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7CF");
    },
    Error,
    "EncodingError U+F7CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D0");
    },
    Error,
    "EncodingError U+F7D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D1");
    },
    Error,
    "EncodingError U+F7D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D2");
    },
    Error,
    "EncodingError U+F7D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D3");
    },
    Error,
    "EncodingError U+F7D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D4");
    },
    Error,
    "EncodingError U+F7D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D5");
    },
    Error,
    "EncodingError U+F7D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D6");
    },
    Error,
    "EncodingError U+F7D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D7");
    },
    Error,
    "EncodingError U+F7D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D8");
    },
    Error,
    "EncodingError U+F7D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D9");
    },
    Error,
    "EncodingError U+F7D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7DA");
    },
    Error,
    "EncodingError U+F7DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7DB");
    },
    Error,
    "EncodingError U+F7DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7DC");
    },
    Error,
    "EncodingError U+F7DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7DD");
    },
    Error,
    "EncodingError U+F7DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7DE");
    },
    Error,
    "EncodingError U+F7DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7DF");
    },
    Error,
    "EncodingError U+F7DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E0");
    },
    Error,
    "EncodingError U+F7E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E1");
    },
    Error,
    "EncodingError U+F7E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E2");
    },
    Error,
    "EncodingError U+F7E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E3");
    },
    Error,
    "EncodingError U+F7E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E4");
    },
    Error,
    "EncodingError U+F7E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E5");
    },
    Error,
    "EncodingError U+F7E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E6");
    },
    Error,
    "EncodingError U+F7E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E7");
    },
    Error,
    "EncodingError U+F7E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E8");
    },
    Error,
    "EncodingError U+F7E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E9");
    },
    Error,
    "EncodingError U+F7E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7EA");
    },
    Error,
    "EncodingError U+F7EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7EB");
    },
    Error,
    "EncodingError U+F7EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7EC");
    },
    Error,
    "EncodingError U+F7EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7ED");
    },
    Error,
    "EncodingError U+F7ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7EE");
    },
    Error,
    "EncodingError U+F7EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7EF");
    },
    Error,
    "EncodingError U+F7EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F0");
    },
    Error,
    "EncodingError U+F7F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F1");
    },
    Error,
    "EncodingError U+F7F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F2");
    },
    Error,
    "EncodingError U+F7F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F3");
    },
    Error,
    "EncodingError U+F7F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F4");
    },
    Error,
    "EncodingError U+F7F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F5");
    },
    Error,
    "EncodingError U+F7F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F6");
    },
    Error,
    "EncodingError U+F7F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F7");
    },
    Error,
    "EncodingError U+F7F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F8");
    },
    Error,
    "EncodingError U+F7F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F9");
    },
    Error,
    "EncodingError U+F7F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7FA");
    },
    Error,
    "EncodingError U+F7FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7FB");
    },
    Error,
    "EncodingError U+F7FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7FC");
    },
    Error,
    "EncodingError U+F7FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7FD");
    },
    Error,
    "EncodingError U+F7FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7FE");
    },
    Error,
    "EncodingError U+F7FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7FF");
    },
    Error,
    "EncodingError U+F7FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF800");
    },
    Error,
    "EncodingError U+F800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF801");
    },
    Error,
    "EncodingError U+F801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF802");
    },
    Error,
    "EncodingError U+F802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF803");
    },
    Error,
    "EncodingError U+F803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF804");
    },
    Error,
    "EncodingError U+F804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF805");
    },
    Error,
    "EncodingError U+F805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF806");
    },
    Error,
    "EncodingError U+F806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF807");
    },
    Error,
    "EncodingError U+F807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF808");
    },
    Error,
    "EncodingError U+F808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF809");
    },
    Error,
    "EncodingError U+F809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF80A");
    },
    Error,
    "EncodingError U+F80A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF80B");
    },
    Error,
    "EncodingError U+F80B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF80C");
    },
    Error,
    "EncodingError U+F80C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF80D");
    },
    Error,
    "EncodingError U+F80D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF80E");
    },
    Error,
    "EncodingError U+F80E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF80F");
    },
    Error,
    "EncodingError U+F80F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF810");
    },
    Error,
    "EncodingError U+F810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF811");
    },
    Error,
    "EncodingError U+F811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF812");
    },
    Error,
    "EncodingError U+F812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF813");
    },
    Error,
    "EncodingError U+F813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF814");
    },
    Error,
    "EncodingError U+F814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF815");
    },
    Error,
    "EncodingError U+F815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF816");
    },
    Error,
    "EncodingError U+F816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF817");
    },
    Error,
    "EncodingError U+F817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF818");
    },
    Error,
    "EncodingError U+F818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF819");
    },
    Error,
    "EncodingError U+F819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF81A");
    },
    Error,
    "EncodingError U+F81A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF81B");
    },
    Error,
    "EncodingError U+F81B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF81C");
    },
    Error,
    "EncodingError U+F81C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF81D");
    },
    Error,
    "EncodingError U+F81D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF81E");
    },
    Error,
    "EncodingError U+F81E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF81F");
    },
    Error,
    "EncodingError U+F81F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF820");
    },
    Error,
    "EncodingError U+F820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF821");
    },
    Error,
    "EncodingError U+F821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF822");
    },
    Error,
    "EncodingError U+F822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF823");
    },
    Error,
    "EncodingError U+F823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF824");
    },
    Error,
    "EncodingError U+F824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF825");
    },
    Error,
    "EncodingError U+F825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF826");
    },
    Error,
    "EncodingError U+F826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF827");
    },
    Error,
    "EncodingError U+F827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF828");
    },
    Error,
    "EncodingError U+F828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF829");
    },
    Error,
    "EncodingError U+F829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF82A");
    },
    Error,
    "EncodingError U+F82A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF82B");
    },
    Error,
    "EncodingError U+F82B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF82C");
    },
    Error,
    "EncodingError U+F82C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF82D");
    },
    Error,
    "EncodingError U+F82D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF82E");
    },
    Error,
    "EncodingError U+F82E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF82F");
    },
    Error,
    "EncodingError U+F82F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF830");
    },
    Error,
    "EncodingError U+F830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF831");
    },
    Error,
    "EncodingError U+F831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF832");
    },
    Error,
    "EncodingError U+F832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF833");
    },
    Error,
    "EncodingError U+F833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF834");
    },
    Error,
    "EncodingError U+F834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF835");
    },
    Error,
    "EncodingError U+F835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF836");
    },
    Error,
    "EncodingError U+F836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF837");
    },
    Error,
    "EncodingError U+F837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF838");
    },
    Error,
    "EncodingError U+F838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF839");
    },
    Error,
    "EncodingError U+F839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF83A");
    },
    Error,
    "EncodingError U+F83A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF83B");
    },
    Error,
    "EncodingError U+F83B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF83C");
    },
    Error,
    "EncodingError U+F83C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF83D");
    },
    Error,
    "EncodingError U+F83D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF83E");
    },
    Error,
    "EncodingError U+F83E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF83F");
    },
    Error,
    "EncodingError U+F83F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF840");
    },
    Error,
    "EncodingError U+F840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF841");
    },
    Error,
    "EncodingError U+F841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF842");
    },
    Error,
    "EncodingError U+F842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF843");
    },
    Error,
    "EncodingError U+F843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF844");
    },
    Error,
    "EncodingError U+F844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF845");
    },
    Error,
    "EncodingError U+F845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF846");
    },
    Error,
    "EncodingError U+F846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF847");
    },
    Error,
    "EncodingError U+F847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF848");
    },
    Error,
    "EncodingError U+F848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF849");
    },
    Error,
    "EncodingError U+F849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF84A");
    },
    Error,
    "EncodingError U+F84A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF84B");
    },
    Error,
    "EncodingError U+F84B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF84C");
    },
    Error,
    "EncodingError U+F84C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF84D");
    },
    Error,
    "EncodingError U+F84D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF84E");
    },
    Error,
    "EncodingError U+F84E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF84F");
    },
    Error,
    "EncodingError U+F84F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF850");
    },
    Error,
    "EncodingError U+F850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF851");
    },
    Error,
    "EncodingError U+F851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF852");
    },
    Error,
    "EncodingError U+F852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF853");
    },
    Error,
    "EncodingError U+F853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF854");
    },
    Error,
    "EncodingError U+F854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF855");
    },
    Error,
    "EncodingError U+F855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF856");
    },
    Error,
    "EncodingError U+F856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF857");
    },
    Error,
    "EncodingError U+F857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF858");
    },
    Error,
    "EncodingError U+F858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF859");
    },
    Error,
    "EncodingError U+F859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF85A");
    },
    Error,
    "EncodingError U+F85A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF85B");
    },
    Error,
    "EncodingError U+F85B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF85C");
    },
    Error,
    "EncodingError U+F85C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF85D");
    },
    Error,
    "EncodingError U+F85D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF85E");
    },
    Error,
    "EncodingError U+F85E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF85F");
    },
    Error,
    "EncodingError U+F85F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF860");
    },
    Error,
    "EncodingError U+F860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF861");
    },
    Error,
    "EncodingError U+F861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF862");
    },
    Error,
    "EncodingError U+F862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF863");
    },
    Error,
    "EncodingError U+F863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF864");
    },
    Error,
    "EncodingError U+F864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF865");
    },
    Error,
    "EncodingError U+F865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF866");
    },
    Error,
    "EncodingError U+F866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF867");
    },
    Error,
    "EncodingError U+F867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF868");
    },
    Error,
    "EncodingError U+F868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF869");
    },
    Error,
    "EncodingError U+F869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF86A");
    },
    Error,
    "EncodingError U+F86A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF86B");
    },
    Error,
    "EncodingError U+F86B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF86C");
    },
    Error,
    "EncodingError U+F86C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF86D");
    },
    Error,
    "EncodingError U+F86D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF86E");
    },
    Error,
    "EncodingError U+F86E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF86F");
    },
    Error,
    "EncodingError U+F86F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF870");
    },
    Error,
    "EncodingError U+F870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF871");
    },
    Error,
    "EncodingError U+F871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF872");
    },
    Error,
    "EncodingError U+F872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF873");
    },
    Error,
    "EncodingError U+F873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF874");
    },
    Error,
    "EncodingError U+F874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF875");
    },
    Error,
    "EncodingError U+F875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF876");
    },
    Error,
    "EncodingError U+F876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF877");
    },
    Error,
    "EncodingError U+F877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF878");
    },
    Error,
    "EncodingError U+F878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF879");
    },
    Error,
    "EncodingError U+F879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF87A");
    },
    Error,
    "EncodingError U+F87A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF87B");
    },
    Error,
    "EncodingError U+F87B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF87C");
    },
    Error,
    "EncodingError U+F87C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF87D");
    },
    Error,
    "EncodingError U+F87D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF87E");
    },
    Error,
    "EncodingError U+F87E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF87F");
    },
    Error,
    "EncodingError U+F87F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF880");
    },
    Error,
    "EncodingError U+F880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF881");
    },
    Error,
    "EncodingError U+F881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF882");
    },
    Error,
    "EncodingError U+F882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF883");
    },
    Error,
    "EncodingError U+F883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF884");
    },
    Error,
    "EncodingError U+F884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF885");
    },
    Error,
    "EncodingError U+F885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF886");
    },
    Error,
    "EncodingError U+F886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF887");
    },
    Error,
    "EncodingError U+F887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF888");
    },
    Error,
    "EncodingError U+F888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF889");
    },
    Error,
    "EncodingError U+F889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF88A");
    },
    Error,
    "EncodingError U+F88A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF88B");
    },
    Error,
    "EncodingError U+F88B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF88C");
    },
    Error,
    "EncodingError U+F88C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF88D");
    },
    Error,
    "EncodingError U+F88D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF88E");
    },
    Error,
    "EncodingError U+F88E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF88F");
    },
    Error,
    "EncodingError U+F88F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF890");
    },
    Error,
    "EncodingError U+F890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF891");
    },
    Error,
    "EncodingError U+F891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF892");
    },
    Error,
    "EncodingError U+F892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF893");
    },
    Error,
    "EncodingError U+F893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF894");
    },
    Error,
    "EncodingError U+F894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF895");
    },
    Error,
    "EncodingError U+F895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF896");
    },
    Error,
    "EncodingError U+F896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF897");
    },
    Error,
    "EncodingError U+F897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF898");
    },
    Error,
    "EncodingError U+F898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF899");
    },
    Error,
    "EncodingError U+F899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF89A");
    },
    Error,
    "EncodingError U+F89A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF89B");
    },
    Error,
    "EncodingError U+F89B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF89C");
    },
    Error,
    "EncodingError U+F89C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF89D");
    },
    Error,
    "EncodingError U+F89D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF89E");
    },
    Error,
    "EncodingError U+F89E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF89F");
    },
    Error,
    "EncodingError U+F89F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A0");
    },
    Error,
    "EncodingError U+F8A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A1");
    },
    Error,
    "EncodingError U+F8A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A2");
    },
    Error,
    "EncodingError U+F8A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A3");
    },
    Error,
    "EncodingError U+F8A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A4");
    },
    Error,
    "EncodingError U+F8A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A5");
    },
    Error,
    "EncodingError U+F8A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A6");
    },
    Error,
    "EncodingError U+F8A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A7");
    },
    Error,
    "EncodingError U+F8A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A8");
    },
    Error,
    "EncodingError U+F8A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A9");
    },
    Error,
    "EncodingError U+F8A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8AA");
    },
    Error,
    "EncodingError U+F8AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8AB");
    },
    Error,
    "EncodingError U+F8AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8AC");
    },
    Error,
    "EncodingError U+F8AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8AD");
    },
    Error,
    "EncodingError U+F8AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8AE");
    },
    Error,
    "EncodingError U+F8AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8AF");
    },
    Error,
    "EncodingError U+F8AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B0");
    },
    Error,
    "EncodingError U+F8B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B1");
    },
    Error,
    "EncodingError U+F8B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B2");
    },
    Error,
    "EncodingError U+F8B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B3");
    },
    Error,
    "EncodingError U+F8B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B4");
    },
    Error,
    "EncodingError U+F8B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B5");
    },
    Error,
    "EncodingError U+F8B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B6");
    },
    Error,
    "EncodingError U+F8B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B7");
    },
    Error,
    "EncodingError U+F8B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B8");
    },
    Error,
    "EncodingError U+F8B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B9");
    },
    Error,
    "EncodingError U+F8B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8BA");
    },
    Error,
    "EncodingError U+F8BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8BB");
    },
    Error,
    "EncodingError U+F8BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8BC");
    },
    Error,
    "EncodingError U+F8BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8BD");
    },
    Error,
    "EncodingError U+F8BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8BE");
    },
    Error,
    "EncodingError U+F8BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8BF");
    },
    Error,
    "EncodingError U+F8BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C0");
    },
    Error,
    "EncodingError U+F8C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C1");
    },
    Error,
    "EncodingError U+F8C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C2");
    },
    Error,
    "EncodingError U+F8C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C3");
    },
    Error,
    "EncodingError U+F8C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C4");
    },
    Error,
    "EncodingError U+F8C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C5");
    },
    Error,
    "EncodingError U+F8C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C6");
    },
    Error,
    "EncodingError U+F8C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C7");
    },
    Error,
    "EncodingError U+F8C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C8");
    },
    Error,
    "EncodingError U+F8C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C9");
    },
    Error,
    "EncodingError U+F8C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8CA");
    },
    Error,
    "EncodingError U+F8CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8CB");
    },
    Error,
    "EncodingError U+F8CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8CC");
    },
    Error,
    "EncodingError U+F8CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8CD");
    },
    Error,
    "EncodingError U+F8CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8CE");
    },
    Error,
    "EncodingError U+F8CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8CF");
    },
    Error,
    "EncodingError U+F8CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D0");
    },
    Error,
    "EncodingError U+F8D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D1");
    },
    Error,
    "EncodingError U+F8D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D2");
    },
    Error,
    "EncodingError U+F8D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D3");
    },
    Error,
    "EncodingError U+F8D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D4");
    },
    Error,
    "EncodingError U+F8D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D5");
    },
    Error,
    "EncodingError U+F8D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D6");
    },
    Error,
    "EncodingError U+F8D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D7");
    },
    Error,
    "EncodingError U+F8D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D8");
    },
    Error,
    "EncodingError U+F8D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D9");
    },
    Error,
    "EncodingError U+F8D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8DA");
    },
    Error,
    "EncodingError U+F8DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8DB");
    },
    Error,
    "EncodingError U+F8DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8DC");
    },
    Error,
    "EncodingError U+F8DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8DD");
    },
    Error,
    "EncodingError U+F8DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8DE");
    },
    Error,
    "EncodingError U+F8DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8DF");
    },
    Error,
    "EncodingError U+F8DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E0");
    },
    Error,
    "EncodingError U+F8E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E1");
    },
    Error,
    "EncodingError U+F8E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E2");
    },
    Error,
    "EncodingError U+F8E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E3");
    },
    Error,
    "EncodingError U+F8E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E4");
    },
    Error,
    "EncodingError U+F8E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E5");
    },
    Error,
    "EncodingError U+F8E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E6");
    },
    Error,
    "EncodingError U+F8E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E7");
    },
    Error,
    "EncodingError U+F8E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E8");
    },
    Error,
    "EncodingError U+F8E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E9");
    },
    Error,
    "EncodingError U+F8E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8EA");
    },
    Error,
    "EncodingError U+F8EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8EB");
    },
    Error,
    "EncodingError U+F8EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8EC");
    },
    Error,
    "EncodingError U+F8EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8ED");
    },
    Error,
    "EncodingError U+F8ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8EE");
    },
    Error,
    "EncodingError U+F8EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8EF");
    },
    Error,
    "EncodingError U+F8EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F0");
    },
    Error,
    "EncodingError U+F8F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F1");
    },
    Error,
    "EncodingError U+F8F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F2");
    },
    Error,
    "EncodingError U+F8F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F3");
    },
    Error,
    "EncodingError U+F8F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F4");
    },
    Error,
    "EncodingError U+F8F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F5");
    },
    Error,
    "EncodingError U+F8F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F6");
    },
    Error,
    "EncodingError U+F8F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F7");
    },
    Error,
    "EncodingError U+F8F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F8");
    },
    Error,
    "EncodingError U+F8F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F9");
    },
    Error,
    "EncodingError U+F8F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8FA");
    },
    Error,
    "EncodingError U+F8FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8FB");
    },
    Error,
    "EncodingError U+F8FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8FC");
    },
    Error,
    "EncodingError U+F8FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8FD");
    },
    Error,
    "EncodingError U+F8FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8FE");
    },
    Error,
    "EncodingError U+F8FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8FF");
    },
    Error,
    "EncodingError U+F8FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF900");
    },
    Error,
    "EncodingError U+F900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF901");
    },
    Error,
    "EncodingError U+F901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF902");
    },
    Error,
    "EncodingError U+F902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF903");
    },
    Error,
    "EncodingError U+F903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF904");
    },
    Error,
    "EncodingError U+F904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF905");
    },
    Error,
    "EncodingError U+F905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF906");
    },
    Error,
    "EncodingError U+F906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF907");
    },
    Error,
    "EncodingError U+F907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF908");
    },
    Error,
    "EncodingError U+F908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF909");
    },
    Error,
    "EncodingError U+F909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF90A");
    },
    Error,
    "EncodingError U+F90A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF90B");
    },
    Error,
    "EncodingError U+F90B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF90C");
    },
    Error,
    "EncodingError U+F90C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF90D");
    },
    Error,
    "EncodingError U+F90D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF90E");
    },
    Error,
    "EncodingError U+F90E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF90F");
    },
    Error,
    "EncodingError U+F90F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF910");
    },
    Error,
    "EncodingError U+F910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF911");
    },
    Error,
    "EncodingError U+F911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF912");
    },
    Error,
    "EncodingError U+F912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF913");
    },
    Error,
    "EncodingError U+F913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF914");
    },
    Error,
    "EncodingError U+F914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF915");
    },
    Error,
    "EncodingError U+F915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF916");
    },
    Error,
    "EncodingError U+F916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF917");
    },
    Error,
    "EncodingError U+F917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF918");
    },
    Error,
    "EncodingError U+F918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF919");
    },
    Error,
    "EncodingError U+F919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF91A");
    },
    Error,
    "EncodingError U+F91A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF91B");
    },
    Error,
    "EncodingError U+F91B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF91C");
    },
    Error,
    "EncodingError U+F91C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF91D");
    },
    Error,
    "EncodingError U+F91D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF91E");
    },
    Error,
    "EncodingError U+F91E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF91F");
    },
    Error,
    "EncodingError U+F91F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF920");
    },
    Error,
    "EncodingError U+F920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF921");
    },
    Error,
    "EncodingError U+F921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF922");
    },
    Error,
    "EncodingError U+F922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF923");
    },
    Error,
    "EncodingError U+F923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF924");
    },
    Error,
    "EncodingError U+F924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF925");
    },
    Error,
    "EncodingError U+F925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF926");
    },
    Error,
    "EncodingError U+F926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF927");
    },
    Error,
    "EncodingError U+F927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF928");
    },
    Error,
    "EncodingError U+F928",
  );
  r = r && ([...ms932Encoder.encode("朗")].join(",") === "250,224"); // U+F929
  assertThrows(
    () => {
      ms932Encoder.encode("\uF92A");
    },
    Error,
    "EncodingError U+F92A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF92B");
    },
    Error,
    "EncodingError U+F92B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF92C");
    },
    Error,
    "EncodingError U+F92C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF92D");
    },
    Error,
    "EncodingError U+F92D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF92E");
    },
    Error,
    "EncodingError U+F92E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF92F");
    },
    Error,
    "EncodingError U+F92F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF930");
    },
    Error,
    "EncodingError U+F930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF931");
    },
    Error,
    "EncodingError U+F931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF932");
    },
    Error,
    "EncodingError U+F932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF933");
    },
    Error,
    "EncodingError U+F933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF934");
    },
    Error,
    "EncodingError U+F934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF935");
    },
    Error,
    "EncodingError U+F935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF936");
    },
    Error,
    "EncodingError U+F936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF937");
    },
    Error,
    "EncodingError U+F937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF938");
    },
    Error,
    "EncodingError U+F938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF939");
    },
    Error,
    "EncodingError U+F939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF93A");
    },
    Error,
    "EncodingError U+F93A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF93B");
    },
    Error,
    "EncodingError U+F93B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF93C");
    },
    Error,
    "EncodingError U+F93C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF93D");
    },
    Error,
    "EncodingError U+F93D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF93E");
    },
    Error,
    "EncodingError U+F93E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF93F");
    },
    Error,
    "EncodingError U+F93F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF940");
    },
    Error,
    "EncodingError U+F940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF941");
    },
    Error,
    "EncodingError U+F941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF942");
    },
    Error,
    "EncodingError U+F942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF943");
    },
    Error,
    "EncodingError U+F943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF944");
    },
    Error,
    "EncodingError U+F944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF945");
    },
    Error,
    "EncodingError U+F945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF946");
    },
    Error,
    "EncodingError U+F946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF947");
    },
    Error,
    "EncodingError U+F947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF948");
    },
    Error,
    "EncodingError U+F948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF949");
    },
    Error,
    "EncodingError U+F949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF94A");
    },
    Error,
    "EncodingError U+F94A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF94B");
    },
    Error,
    "EncodingError U+F94B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF94C");
    },
    Error,
    "EncodingError U+F94C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF94D");
    },
    Error,
    "EncodingError U+F94D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF94E");
    },
    Error,
    "EncodingError U+F94E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF94F");
    },
    Error,
    "EncodingError U+F94F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF950");
    },
    Error,
    "EncodingError U+F950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF951");
    },
    Error,
    "EncodingError U+F951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF952");
    },
    Error,
    "EncodingError U+F952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF953");
    },
    Error,
    "EncodingError U+F953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF954");
    },
    Error,
    "EncodingError U+F954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF955");
    },
    Error,
    "EncodingError U+F955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF956");
    },
    Error,
    "EncodingError U+F956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF957");
    },
    Error,
    "EncodingError U+F957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF958");
    },
    Error,
    "EncodingError U+F958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF959");
    },
    Error,
    "EncodingError U+F959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF95A");
    },
    Error,
    "EncodingError U+F95A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF95B");
    },
    Error,
    "EncodingError U+F95B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF95C");
    },
    Error,
    "EncodingError U+F95C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF95D");
    },
    Error,
    "EncodingError U+F95D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF95E");
    },
    Error,
    "EncodingError U+F95E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF95F");
    },
    Error,
    "EncodingError U+F95F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF960");
    },
    Error,
    "EncodingError U+F960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF961");
    },
    Error,
    "EncodingError U+F961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF962");
    },
    Error,
    "EncodingError U+F962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF963");
    },
    Error,
    "EncodingError U+F963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF964");
    },
    Error,
    "EncodingError U+F964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF965");
    },
    Error,
    "EncodingError U+F965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF966");
    },
    Error,
    "EncodingError U+F966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF967");
    },
    Error,
    "EncodingError U+F967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF968");
    },
    Error,
    "EncodingError U+F968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF969");
    },
    Error,
    "EncodingError U+F969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF96A");
    },
    Error,
    "EncodingError U+F96A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF96B");
    },
    Error,
    "EncodingError U+F96B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF96C");
    },
    Error,
    "EncodingError U+F96C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF96D");
    },
    Error,
    "EncodingError U+F96D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF96E");
    },
    Error,
    "EncodingError U+F96E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF96F");
    },
    Error,
    "EncodingError U+F96F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF970");
    },
    Error,
    "EncodingError U+F970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF971");
    },
    Error,
    "EncodingError U+F971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF972");
    },
    Error,
    "EncodingError U+F972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF973");
    },
    Error,
    "EncodingError U+F973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF974");
    },
    Error,
    "EncodingError U+F974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF975");
    },
    Error,
    "EncodingError U+F975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF976");
    },
    Error,
    "EncodingError U+F976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF977");
    },
    Error,
    "EncodingError U+F977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF978");
    },
    Error,
    "EncodingError U+F978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF979");
    },
    Error,
    "EncodingError U+F979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF97A");
    },
    Error,
    "EncodingError U+F97A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF97B");
    },
    Error,
    "EncodingError U+F97B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF97C");
    },
    Error,
    "EncodingError U+F97C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF97D");
    },
    Error,
    "EncodingError U+F97D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF97E");
    },
    Error,
    "EncodingError U+F97E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF97F");
    },
    Error,
    "EncodingError U+F97F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF980");
    },
    Error,
    "EncodingError U+F980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF981");
    },
    Error,
    "EncodingError U+F981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF982");
    },
    Error,
    "EncodingError U+F982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF983");
    },
    Error,
    "EncodingError U+F983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF984");
    },
    Error,
    "EncodingError U+F984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF985");
    },
    Error,
    "EncodingError U+F985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF986");
    },
    Error,
    "EncodingError U+F986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF987");
    },
    Error,
    "EncodingError U+F987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF988");
    },
    Error,
    "EncodingError U+F988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF989");
    },
    Error,
    "EncodingError U+F989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF98A");
    },
    Error,
    "EncodingError U+F98A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF98B");
    },
    Error,
    "EncodingError U+F98B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF98C");
    },
    Error,
    "EncodingError U+F98C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF98D");
    },
    Error,
    "EncodingError U+F98D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF98E");
    },
    Error,
    "EncodingError U+F98E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF98F");
    },
    Error,
    "EncodingError U+F98F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF990");
    },
    Error,
    "EncodingError U+F990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF991");
    },
    Error,
    "EncodingError U+F991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF992");
    },
    Error,
    "EncodingError U+F992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF993");
    },
    Error,
    "EncodingError U+F993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF994");
    },
    Error,
    "EncodingError U+F994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF995");
    },
    Error,
    "EncodingError U+F995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF996");
    },
    Error,
    "EncodingError U+F996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF997");
    },
    Error,
    "EncodingError U+F997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF998");
    },
    Error,
    "EncodingError U+F998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF999");
    },
    Error,
    "EncodingError U+F999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF99A");
    },
    Error,
    "EncodingError U+F99A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF99B");
    },
    Error,
    "EncodingError U+F99B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF99C");
    },
    Error,
    "EncodingError U+F99C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF99D");
    },
    Error,
    "EncodingError U+F99D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF99E");
    },
    Error,
    "EncodingError U+F99E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF99F");
    },
    Error,
    "EncodingError U+F99F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A0");
    },
    Error,
    "EncodingError U+F9A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A1");
    },
    Error,
    "EncodingError U+F9A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A2");
    },
    Error,
    "EncodingError U+F9A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A3");
    },
    Error,
    "EncodingError U+F9A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A4");
    },
    Error,
    "EncodingError U+F9A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A5");
    },
    Error,
    "EncodingError U+F9A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A6");
    },
    Error,
    "EncodingError U+F9A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A7");
    },
    Error,
    "EncodingError U+F9A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A8");
    },
    Error,
    "EncodingError U+F9A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A9");
    },
    Error,
    "EncodingError U+F9A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9AA");
    },
    Error,
    "EncodingError U+F9AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9AB");
    },
    Error,
    "EncodingError U+F9AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9AC");
    },
    Error,
    "EncodingError U+F9AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9AD");
    },
    Error,
    "EncodingError U+F9AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9AE");
    },
    Error,
    "EncodingError U+F9AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9AF");
    },
    Error,
    "EncodingError U+F9AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B0");
    },
    Error,
    "EncodingError U+F9B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B1");
    },
    Error,
    "EncodingError U+F9B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B2");
    },
    Error,
    "EncodingError U+F9B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B3");
    },
    Error,
    "EncodingError U+F9B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B4");
    },
    Error,
    "EncodingError U+F9B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B5");
    },
    Error,
    "EncodingError U+F9B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B6");
    },
    Error,
    "EncodingError U+F9B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B7");
    },
    Error,
    "EncodingError U+F9B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B8");
    },
    Error,
    "EncodingError U+F9B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B9");
    },
    Error,
    "EncodingError U+F9B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9BA");
    },
    Error,
    "EncodingError U+F9BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9BB");
    },
    Error,
    "EncodingError U+F9BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9BC");
    },
    Error,
    "EncodingError U+F9BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9BD");
    },
    Error,
    "EncodingError U+F9BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9BE");
    },
    Error,
    "EncodingError U+F9BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9BF");
    },
    Error,
    "EncodingError U+F9BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C0");
    },
    Error,
    "EncodingError U+F9C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C1");
    },
    Error,
    "EncodingError U+F9C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C2");
    },
    Error,
    "EncodingError U+F9C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C3");
    },
    Error,
    "EncodingError U+F9C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C4");
    },
    Error,
    "EncodingError U+F9C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C5");
    },
    Error,
    "EncodingError U+F9C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C6");
    },
    Error,
    "EncodingError U+F9C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C7");
    },
    Error,
    "EncodingError U+F9C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C8");
    },
    Error,
    "EncodingError U+F9C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C9");
    },
    Error,
    "EncodingError U+F9C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9CA");
    },
    Error,
    "EncodingError U+F9CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9CB");
    },
    Error,
    "EncodingError U+F9CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9CC");
    },
    Error,
    "EncodingError U+F9CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9CD");
    },
    Error,
    "EncodingError U+F9CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9CE");
    },
    Error,
    "EncodingError U+F9CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9CF");
    },
    Error,
    "EncodingError U+F9CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D0");
    },
    Error,
    "EncodingError U+F9D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D1");
    },
    Error,
    "EncodingError U+F9D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D2");
    },
    Error,
    "EncodingError U+F9D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D3");
    },
    Error,
    "EncodingError U+F9D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D4");
    },
    Error,
    "EncodingError U+F9D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D5");
    },
    Error,
    "EncodingError U+F9D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D6");
    },
    Error,
    "EncodingError U+F9D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D7");
    },
    Error,
    "EncodingError U+F9D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D8");
    },
    Error,
    "EncodingError U+F9D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D9");
    },
    Error,
    "EncodingError U+F9D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9DA");
    },
    Error,
    "EncodingError U+F9DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9DB");
    },
    Error,
    "EncodingError U+F9DB",
  );
  r = r && ([...ms932Encoder.encode("隆")].join(",") === "251,233"); // U+F9DC
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9DD");
    },
    Error,
    "EncodingError U+F9DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9DE");
    },
    Error,
    "EncodingError U+F9DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9DF");
    },
    Error,
    "EncodingError U+F9DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E0");
    },
    Error,
    "EncodingError U+F9E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E1");
    },
    Error,
    "EncodingError U+F9E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E2");
    },
    Error,
    "EncodingError U+F9E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E3");
    },
    Error,
    "EncodingError U+F9E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E4");
    },
    Error,
    "EncodingError U+F9E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E5");
    },
    Error,
    "EncodingError U+F9E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E6");
    },
    Error,
    "EncodingError U+F9E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E7");
    },
    Error,
    "EncodingError U+F9E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E8");
    },
    Error,
    "EncodingError U+F9E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E9");
    },
    Error,
    "EncodingError U+F9E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9EA");
    },
    Error,
    "EncodingError U+F9EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9EB");
    },
    Error,
    "EncodingError U+F9EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9EC");
    },
    Error,
    "EncodingError U+F9EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9ED");
    },
    Error,
    "EncodingError U+F9ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9EE");
    },
    Error,
    "EncodingError U+F9EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9EF");
    },
    Error,
    "EncodingError U+F9EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F0");
    },
    Error,
    "EncodingError U+F9F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F1");
    },
    Error,
    "EncodingError U+F9F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F2");
    },
    Error,
    "EncodingError U+F9F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F3");
    },
    Error,
    "EncodingError U+F9F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F4");
    },
    Error,
    "EncodingError U+F9F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F5");
    },
    Error,
    "EncodingError U+F9F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F6");
    },
    Error,
    "EncodingError U+F9F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F7");
    },
    Error,
    "EncodingError U+F9F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F8");
    },
    Error,
    "EncodingError U+F9F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F9");
    },
    Error,
    "EncodingError U+F9F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9FA");
    },
    Error,
    "EncodingError U+F9FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9FB");
    },
    Error,
    "EncodingError U+F9FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9FC");
    },
    Error,
    "EncodingError U+F9FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9FD");
    },
    Error,
    "EncodingError U+F9FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9FE");
    },
    Error,
    "EncodingError U+F9FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9FF");
    },
    Error,
    "EncodingError U+F9FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA00");
    },
    Error,
    "EncodingError U+FA00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA01");
    },
    Error,
    "EncodingError U+FA01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA02");
    },
    Error,
    "EncodingError U+FA02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA03");
    },
    Error,
    "EncodingError U+FA03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA04");
    },
    Error,
    "EncodingError U+FA04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA05");
    },
    Error,
    "EncodingError U+FA05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA06");
    },
    Error,
    "EncodingError U+FA06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA07");
    },
    Error,
    "EncodingError U+FA07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA08");
    },
    Error,
    "EncodingError U+FA08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA09");
    },
    Error,
    "EncodingError U+FA09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA0A");
    },
    Error,
    "EncodingError U+FA0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA0B");
    },
    Error,
    "EncodingError U+FA0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA0C");
    },
    Error,
    "EncodingError U+FA0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA0D");
    },
    Error,
    "EncodingError U+FA0D",
  );
  r = r &&
    ([...ms932Encoder.encode("﨎﨏塚﨑晴﨓﨔凞猪益礼神祥福靖精羽﨟蘒﨡諸﨣﨤逸都﨧﨨﨩飯飼館鶴")].join(
      ",",
    ) ===
      "250,144,250,155,250,156,250,177,250,216,250,232,250,234,251,88,251,94,251,117,251,125,251,126,251,128,251,130,251,134,251,137,251,146,251,157,251,159,251,160,251,169,251,177,251,179,251,180,251,183,251,211,251,218,251,234,251,246,251,247,251,249,252,73"); // U+FA0E
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA2E");
    },
    Error,
    "EncodingError U+FA2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA2F");
    },
    Error,
    "EncodingError U+FA2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA30");
    },
    Error,
    "EncodingError U+FA30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA31");
    },
    Error,
    "EncodingError U+FA31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA32");
    },
    Error,
    "EncodingError U+FA32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA33");
    },
    Error,
    "EncodingError U+FA33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA34");
    },
    Error,
    "EncodingError U+FA34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA35");
    },
    Error,
    "EncodingError U+FA35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA36");
    },
    Error,
    "EncodingError U+FA36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA37");
    },
    Error,
    "EncodingError U+FA37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA38");
    },
    Error,
    "EncodingError U+FA38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA39");
    },
    Error,
    "EncodingError U+FA39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA3A");
    },
    Error,
    "EncodingError U+FA3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA3B");
    },
    Error,
    "EncodingError U+FA3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA3C");
    },
    Error,
    "EncodingError U+FA3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA3D");
    },
    Error,
    "EncodingError U+FA3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA3E");
    },
    Error,
    "EncodingError U+FA3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA3F");
    },
    Error,
    "EncodingError U+FA3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA40");
    },
    Error,
    "EncodingError U+FA40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA41");
    },
    Error,
    "EncodingError U+FA41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA42");
    },
    Error,
    "EncodingError U+FA42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA43");
    },
    Error,
    "EncodingError U+FA43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA44");
    },
    Error,
    "EncodingError U+FA44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA45");
    },
    Error,
    "EncodingError U+FA45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA46");
    },
    Error,
    "EncodingError U+FA46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA47");
    },
    Error,
    "EncodingError U+FA47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA48");
    },
    Error,
    "EncodingError U+FA48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA49");
    },
    Error,
    "EncodingError U+FA49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA4A");
    },
    Error,
    "EncodingError U+FA4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA4B");
    },
    Error,
    "EncodingError U+FA4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA4C");
    },
    Error,
    "EncodingError U+FA4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA4D");
    },
    Error,
    "EncodingError U+FA4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA4E");
    },
    Error,
    "EncodingError U+FA4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA4F");
    },
    Error,
    "EncodingError U+FA4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA50");
    },
    Error,
    "EncodingError U+FA50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA51");
    },
    Error,
    "EncodingError U+FA51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA52");
    },
    Error,
    "EncodingError U+FA52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA53");
    },
    Error,
    "EncodingError U+FA53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA54");
    },
    Error,
    "EncodingError U+FA54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA55");
    },
    Error,
    "EncodingError U+FA55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA56");
    },
    Error,
    "EncodingError U+FA56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA57");
    },
    Error,
    "EncodingError U+FA57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA58");
    },
    Error,
    "EncodingError U+FA58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA59");
    },
    Error,
    "EncodingError U+FA59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA5A");
    },
    Error,
    "EncodingError U+FA5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA5B");
    },
    Error,
    "EncodingError U+FA5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA5C");
    },
    Error,
    "EncodingError U+FA5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA5D");
    },
    Error,
    "EncodingError U+FA5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA5E");
    },
    Error,
    "EncodingError U+FA5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA5F");
    },
    Error,
    "EncodingError U+FA5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA60");
    },
    Error,
    "EncodingError U+FA60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA61");
    },
    Error,
    "EncodingError U+FA61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA62");
    },
    Error,
    "EncodingError U+FA62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA63");
    },
    Error,
    "EncodingError U+FA63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA64");
    },
    Error,
    "EncodingError U+FA64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA65");
    },
    Error,
    "EncodingError U+FA65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA66");
    },
    Error,
    "EncodingError U+FA66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA67");
    },
    Error,
    "EncodingError U+FA67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA68");
    },
    Error,
    "EncodingError U+FA68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA69");
    },
    Error,
    "EncodingError U+FA69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA6A");
    },
    Error,
    "EncodingError U+FA6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA6B");
    },
    Error,
    "EncodingError U+FA6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA6C");
    },
    Error,
    "EncodingError U+FA6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA6D");
    },
    Error,
    "EncodingError U+FA6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA6E");
    },
    Error,
    "EncodingError U+FA6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA6F");
    },
    Error,
    "EncodingError U+FA6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA70");
    },
    Error,
    "EncodingError U+FA70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA71");
    },
    Error,
    "EncodingError U+FA71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA72");
    },
    Error,
    "EncodingError U+FA72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA73");
    },
    Error,
    "EncodingError U+FA73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA74");
    },
    Error,
    "EncodingError U+FA74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA75");
    },
    Error,
    "EncodingError U+FA75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA76");
    },
    Error,
    "EncodingError U+FA76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA77");
    },
    Error,
    "EncodingError U+FA77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA78");
    },
    Error,
    "EncodingError U+FA78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA79");
    },
    Error,
    "EncodingError U+FA79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA7A");
    },
    Error,
    "EncodingError U+FA7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA7B");
    },
    Error,
    "EncodingError U+FA7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA7C");
    },
    Error,
    "EncodingError U+FA7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA7D");
    },
    Error,
    "EncodingError U+FA7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA7E");
    },
    Error,
    "EncodingError U+FA7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA7F");
    },
    Error,
    "EncodingError U+FA7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA80");
    },
    Error,
    "EncodingError U+FA80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA81");
    },
    Error,
    "EncodingError U+FA81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA82");
    },
    Error,
    "EncodingError U+FA82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA83");
    },
    Error,
    "EncodingError U+FA83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA84");
    },
    Error,
    "EncodingError U+FA84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA85");
    },
    Error,
    "EncodingError U+FA85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA86");
    },
    Error,
    "EncodingError U+FA86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA87");
    },
    Error,
    "EncodingError U+FA87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA88");
    },
    Error,
    "EncodingError U+FA88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA89");
    },
    Error,
    "EncodingError U+FA89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA8A");
    },
    Error,
    "EncodingError U+FA8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA8B");
    },
    Error,
    "EncodingError U+FA8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA8C");
    },
    Error,
    "EncodingError U+FA8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA8D");
    },
    Error,
    "EncodingError U+FA8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA8E");
    },
    Error,
    "EncodingError U+FA8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA8F");
    },
    Error,
    "EncodingError U+FA8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA90");
    },
    Error,
    "EncodingError U+FA90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA91");
    },
    Error,
    "EncodingError U+FA91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA92");
    },
    Error,
    "EncodingError U+FA92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA93");
    },
    Error,
    "EncodingError U+FA93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA94");
    },
    Error,
    "EncodingError U+FA94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA95");
    },
    Error,
    "EncodingError U+FA95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA96");
    },
    Error,
    "EncodingError U+FA96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA97");
    },
    Error,
    "EncodingError U+FA97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA98");
    },
    Error,
    "EncodingError U+FA98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA99");
    },
    Error,
    "EncodingError U+FA99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA9A");
    },
    Error,
    "EncodingError U+FA9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA9B");
    },
    Error,
    "EncodingError U+FA9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA9C");
    },
    Error,
    "EncodingError U+FA9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA9D");
    },
    Error,
    "EncodingError U+FA9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA9E");
    },
    Error,
    "EncodingError U+FA9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA9F");
    },
    Error,
    "EncodingError U+FA9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA0");
    },
    Error,
    "EncodingError U+FAA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA1");
    },
    Error,
    "EncodingError U+FAA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA2");
    },
    Error,
    "EncodingError U+FAA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA3");
    },
    Error,
    "EncodingError U+FAA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA4");
    },
    Error,
    "EncodingError U+FAA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA5");
    },
    Error,
    "EncodingError U+FAA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA6");
    },
    Error,
    "EncodingError U+FAA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA7");
    },
    Error,
    "EncodingError U+FAA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA8");
    },
    Error,
    "EncodingError U+FAA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA9");
    },
    Error,
    "EncodingError U+FAA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAAA");
    },
    Error,
    "EncodingError U+FAAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAAB");
    },
    Error,
    "EncodingError U+FAAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAAC");
    },
    Error,
    "EncodingError U+FAAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAAD");
    },
    Error,
    "EncodingError U+FAAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAAE");
    },
    Error,
    "EncodingError U+FAAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAAF");
    },
    Error,
    "EncodingError U+FAAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB0");
    },
    Error,
    "EncodingError U+FAB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB1");
    },
    Error,
    "EncodingError U+FAB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB2");
    },
    Error,
    "EncodingError U+FAB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB3");
    },
    Error,
    "EncodingError U+FAB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB4");
    },
    Error,
    "EncodingError U+FAB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB5");
    },
    Error,
    "EncodingError U+FAB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB6");
    },
    Error,
    "EncodingError U+FAB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB7");
    },
    Error,
    "EncodingError U+FAB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB8");
    },
    Error,
    "EncodingError U+FAB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB9");
    },
    Error,
    "EncodingError U+FAB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFABA");
    },
    Error,
    "EncodingError U+FABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFABB");
    },
    Error,
    "EncodingError U+FABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFABC");
    },
    Error,
    "EncodingError U+FABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFABD");
    },
    Error,
    "EncodingError U+FABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFABE");
    },
    Error,
    "EncodingError U+FABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFABF");
    },
    Error,
    "EncodingError U+FABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC0");
    },
    Error,
    "EncodingError U+FAC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC1");
    },
    Error,
    "EncodingError U+FAC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC2");
    },
    Error,
    "EncodingError U+FAC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC3");
    },
    Error,
    "EncodingError U+FAC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC4");
    },
    Error,
    "EncodingError U+FAC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC5");
    },
    Error,
    "EncodingError U+FAC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC6");
    },
    Error,
    "EncodingError U+FAC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC7");
    },
    Error,
    "EncodingError U+FAC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC8");
    },
    Error,
    "EncodingError U+FAC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC9");
    },
    Error,
    "EncodingError U+FAC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFACA");
    },
    Error,
    "EncodingError U+FACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFACB");
    },
    Error,
    "EncodingError U+FACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFACC");
    },
    Error,
    "EncodingError U+FACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFACD");
    },
    Error,
    "EncodingError U+FACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFACE");
    },
    Error,
    "EncodingError U+FACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFACF");
    },
    Error,
    "EncodingError U+FACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD0");
    },
    Error,
    "EncodingError U+FAD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD1");
    },
    Error,
    "EncodingError U+FAD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD2");
    },
    Error,
    "EncodingError U+FAD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD3");
    },
    Error,
    "EncodingError U+FAD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD4");
    },
    Error,
    "EncodingError U+FAD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD5");
    },
    Error,
    "EncodingError U+FAD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD6");
    },
    Error,
    "EncodingError U+FAD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD7");
    },
    Error,
    "EncodingError U+FAD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD8");
    },
    Error,
    "EncodingError U+FAD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD9");
    },
    Error,
    "EncodingError U+FAD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFADA");
    },
    Error,
    "EncodingError U+FADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFADB");
    },
    Error,
    "EncodingError U+FADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFADC");
    },
    Error,
    "EncodingError U+FADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFADD");
    },
    Error,
    "EncodingError U+FADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFADE");
    },
    Error,
    "EncodingError U+FADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFADF");
    },
    Error,
    "EncodingError U+FADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE0");
    },
    Error,
    "EncodingError U+FAE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE1");
    },
    Error,
    "EncodingError U+FAE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE2");
    },
    Error,
    "EncodingError U+FAE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE3");
    },
    Error,
    "EncodingError U+FAE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE4");
    },
    Error,
    "EncodingError U+FAE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE5");
    },
    Error,
    "EncodingError U+FAE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE6");
    },
    Error,
    "EncodingError U+FAE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE7");
    },
    Error,
    "EncodingError U+FAE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE8");
    },
    Error,
    "EncodingError U+FAE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE9");
    },
    Error,
    "EncodingError U+FAE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAEA");
    },
    Error,
    "EncodingError U+FAEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAEB");
    },
    Error,
    "EncodingError U+FAEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAEC");
    },
    Error,
    "EncodingError U+FAEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAED");
    },
    Error,
    "EncodingError U+FAED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAEE");
    },
    Error,
    "EncodingError U+FAEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAEF");
    },
    Error,
    "EncodingError U+FAEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF0");
    },
    Error,
    "EncodingError U+FAF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF1");
    },
    Error,
    "EncodingError U+FAF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF2");
    },
    Error,
    "EncodingError U+FAF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF3");
    },
    Error,
    "EncodingError U+FAF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF4");
    },
    Error,
    "EncodingError U+FAF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF5");
    },
    Error,
    "EncodingError U+FAF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF6");
    },
    Error,
    "EncodingError U+FAF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF7");
    },
    Error,
    "EncodingError U+FAF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF8");
    },
    Error,
    "EncodingError U+FAF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF9");
    },
    Error,
    "EncodingError U+FAF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAFA");
    },
    Error,
    "EncodingError U+FAFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAFB");
    },
    Error,
    "EncodingError U+FAFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAFC");
    },
    Error,
    "EncodingError U+FAFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAFD");
    },
    Error,
    "EncodingError U+FAFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAFE");
    },
    Error,
    "EncodingError U+FAFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAFF");
    },
    Error,
    "EncodingError U+FAFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB00");
    },
    Error,
    "EncodingError U+FB00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB01");
    },
    Error,
    "EncodingError U+FB01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB02");
    },
    Error,
    "EncodingError U+FB02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB03");
    },
    Error,
    "EncodingError U+FB03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB04");
    },
    Error,
    "EncodingError U+FB04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB05");
    },
    Error,
    "EncodingError U+FB05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB06");
    },
    Error,
    "EncodingError U+FB06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB07");
    },
    Error,
    "EncodingError U+FB07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB08");
    },
    Error,
    "EncodingError U+FB08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB09");
    },
    Error,
    "EncodingError U+FB09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB0A");
    },
    Error,
    "EncodingError U+FB0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB0B");
    },
    Error,
    "EncodingError U+FB0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB0C");
    },
    Error,
    "EncodingError U+FB0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB0D");
    },
    Error,
    "EncodingError U+FB0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB0E");
    },
    Error,
    "EncodingError U+FB0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB0F");
    },
    Error,
    "EncodingError U+FB0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB10");
    },
    Error,
    "EncodingError U+FB10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB11");
    },
    Error,
    "EncodingError U+FB11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB12");
    },
    Error,
    "EncodingError U+FB12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB13");
    },
    Error,
    "EncodingError U+FB13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB14");
    },
    Error,
    "EncodingError U+FB14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB15");
    },
    Error,
    "EncodingError U+FB15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB16");
    },
    Error,
    "EncodingError U+FB16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB17");
    },
    Error,
    "EncodingError U+FB17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB18");
    },
    Error,
    "EncodingError U+FB18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB19");
    },
    Error,
    "EncodingError U+FB19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB1A");
    },
    Error,
    "EncodingError U+FB1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB1B");
    },
    Error,
    "EncodingError U+FB1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB1C");
    },
    Error,
    "EncodingError U+FB1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB1D");
    },
    Error,
    "EncodingError U+FB1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB1E");
    },
    Error,
    "EncodingError U+FB1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB1F");
    },
    Error,
    "EncodingError U+FB1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB20");
    },
    Error,
    "EncodingError U+FB20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB21");
    },
    Error,
    "EncodingError U+FB21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB22");
    },
    Error,
    "EncodingError U+FB22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB23");
    },
    Error,
    "EncodingError U+FB23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB24");
    },
    Error,
    "EncodingError U+FB24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB25");
    },
    Error,
    "EncodingError U+FB25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB26");
    },
    Error,
    "EncodingError U+FB26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB27");
    },
    Error,
    "EncodingError U+FB27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB28");
    },
    Error,
    "EncodingError U+FB28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB29");
    },
    Error,
    "EncodingError U+FB29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB2A");
    },
    Error,
    "EncodingError U+FB2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB2B");
    },
    Error,
    "EncodingError U+FB2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB2C");
    },
    Error,
    "EncodingError U+FB2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB2D");
    },
    Error,
    "EncodingError U+FB2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB2E");
    },
    Error,
    "EncodingError U+FB2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB2F");
    },
    Error,
    "EncodingError U+FB2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB30");
    },
    Error,
    "EncodingError U+FB30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB31");
    },
    Error,
    "EncodingError U+FB31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB32");
    },
    Error,
    "EncodingError U+FB32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB33");
    },
    Error,
    "EncodingError U+FB33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB34");
    },
    Error,
    "EncodingError U+FB34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB35");
    },
    Error,
    "EncodingError U+FB35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB36");
    },
    Error,
    "EncodingError U+FB36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB37");
    },
    Error,
    "EncodingError U+FB37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB38");
    },
    Error,
    "EncodingError U+FB38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB39");
    },
    Error,
    "EncodingError U+FB39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB3A");
    },
    Error,
    "EncodingError U+FB3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB3B");
    },
    Error,
    "EncodingError U+FB3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB3C");
    },
    Error,
    "EncodingError U+FB3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB3D");
    },
    Error,
    "EncodingError U+FB3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB3E");
    },
    Error,
    "EncodingError U+FB3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB3F");
    },
    Error,
    "EncodingError U+FB3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB40");
    },
    Error,
    "EncodingError U+FB40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB41");
    },
    Error,
    "EncodingError U+FB41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB42");
    },
    Error,
    "EncodingError U+FB42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB43");
    },
    Error,
    "EncodingError U+FB43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB44");
    },
    Error,
    "EncodingError U+FB44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB45");
    },
    Error,
    "EncodingError U+FB45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB46");
    },
    Error,
    "EncodingError U+FB46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB47");
    },
    Error,
    "EncodingError U+FB47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB48");
    },
    Error,
    "EncodingError U+FB48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB49");
    },
    Error,
    "EncodingError U+FB49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB4A");
    },
    Error,
    "EncodingError U+FB4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB4B");
    },
    Error,
    "EncodingError U+FB4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB4C");
    },
    Error,
    "EncodingError U+FB4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB4D");
    },
    Error,
    "EncodingError U+FB4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB4E");
    },
    Error,
    "EncodingError U+FB4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB4F");
    },
    Error,
    "EncodingError U+FB4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB50");
    },
    Error,
    "EncodingError U+FB50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB51");
    },
    Error,
    "EncodingError U+FB51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB52");
    },
    Error,
    "EncodingError U+FB52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB53");
    },
    Error,
    "EncodingError U+FB53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB54");
    },
    Error,
    "EncodingError U+FB54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB55");
    },
    Error,
    "EncodingError U+FB55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB56");
    },
    Error,
    "EncodingError U+FB56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB57");
    },
    Error,
    "EncodingError U+FB57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB58");
    },
    Error,
    "EncodingError U+FB58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB59");
    },
    Error,
    "EncodingError U+FB59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB5A");
    },
    Error,
    "EncodingError U+FB5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB5B");
    },
    Error,
    "EncodingError U+FB5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB5C");
    },
    Error,
    "EncodingError U+FB5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB5D");
    },
    Error,
    "EncodingError U+FB5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB5E");
    },
    Error,
    "EncodingError U+FB5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB5F");
    },
    Error,
    "EncodingError U+FB5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB60");
    },
    Error,
    "EncodingError U+FB60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB61");
    },
    Error,
    "EncodingError U+FB61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB62");
    },
    Error,
    "EncodingError U+FB62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB63");
    },
    Error,
    "EncodingError U+FB63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB64");
    },
    Error,
    "EncodingError U+FB64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB65");
    },
    Error,
    "EncodingError U+FB65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB66");
    },
    Error,
    "EncodingError U+FB66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB67");
    },
    Error,
    "EncodingError U+FB67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB68");
    },
    Error,
    "EncodingError U+FB68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB69");
    },
    Error,
    "EncodingError U+FB69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB6A");
    },
    Error,
    "EncodingError U+FB6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB6B");
    },
    Error,
    "EncodingError U+FB6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB6C");
    },
    Error,
    "EncodingError U+FB6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB6D");
    },
    Error,
    "EncodingError U+FB6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB6E");
    },
    Error,
    "EncodingError U+FB6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB6F");
    },
    Error,
    "EncodingError U+FB6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB70");
    },
    Error,
    "EncodingError U+FB70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB71");
    },
    Error,
    "EncodingError U+FB71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB72");
    },
    Error,
    "EncodingError U+FB72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB73");
    },
    Error,
    "EncodingError U+FB73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB74");
    },
    Error,
    "EncodingError U+FB74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB75");
    },
    Error,
    "EncodingError U+FB75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB76");
    },
    Error,
    "EncodingError U+FB76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB77");
    },
    Error,
    "EncodingError U+FB77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB78");
    },
    Error,
    "EncodingError U+FB78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB79");
    },
    Error,
    "EncodingError U+FB79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB7A");
    },
    Error,
    "EncodingError U+FB7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB7B");
    },
    Error,
    "EncodingError U+FB7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB7C");
    },
    Error,
    "EncodingError U+FB7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB7D");
    },
    Error,
    "EncodingError U+FB7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB7E");
    },
    Error,
    "EncodingError U+FB7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB7F");
    },
    Error,
    "EncodingError U+FB7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB80");
    },
    Error,
    "EncodingError U+FB80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB81");
    },
    Error,
    "EncodingError U+FB81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB82");
    },
    Error,
    "EncodingError U+FB82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB83");
    },
    Error,
    "EncodingError U+FB83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB84");
    },
    Error,
    "EncodingError U+FB84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB85");
    },
    Error,
    "EncodingError U+FB85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB86");
    },
    Error,
    "EncodingError U+FB86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB87");
    },
    Error,
    "EncodingError U+FB87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB88");
    },
    Error,
    "EncodingError U+FB88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB89");
    },
    Error,
    "EncodingError U+FB89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB8A");
    },
    Error,
    "EncodingError U+FB8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB8B");
    },
    Error,
    "EncodingError U+FB8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB8C");
    },
    Error,
    "EncodingError U+FB8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB8D");
    },
    Error,
    "EncodingError U+FB8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB8E");
    },
    Error,
    "EncodingError U+FB8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB8F");
    },
    Error,
    "EncodingError U+FB8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB90");
    },
    Error,
    "EncodingError U+FB90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB91");
    },
    Error,
    "EncodingError U+FB91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB92");
    },
    Error,
    "EncodingError U+FB92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB93");
    },
    Error,
    "EncodingError U+FB93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB94");
    },
    Error,
    "EncodingError U+FB94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB95");
    },
    Error,
    "EncodingError U+FB95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB96");
    },
    Error,
    "EncodingError U+FB96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB97");
    },
    Error,
    "EncodingError U+FB97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB98");
    },
    Error,
    "EncodingError U+FB98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB99");
    },
    Error,
    "EncodingError U+FB99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB9A");
    },
    Error,
    "EncodingError U+FB9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB9B");
    },
    Error,
    "EncodingError U+FB9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB9C");
    },
    Error,
    "EncodingError U+FB9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB9D");
    },
    Error,
    "EncodingError U+FB9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB9E");
    },
    Error,
    "EncodingError U+FB9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB9F");
    },
    Error,
    "EncodingError U+FB9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA0");
    },
    Error,
    "EncodingError U+FBA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA1");
    },
    Error,
    "EncodingError U+FBA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA2");
    },
    Error,
    "EncodingError U+FBA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA3");
    },
    Error,
    "EncodingError U+FBA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA4");
    },
    Error,
    "EncodingError U+FBA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA5");
    },
    Error,
    "EncodingError U+FBA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA6");
    },
    Error,
    "EncodingError U+FBA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA7");
    },
    Error,
    "EncodingError U+FBA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA8");
    },
    Error,
    "EncodingError U+FBA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA9");
    },
    Error,
    "EncodingError U+FBA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBAA");
    },
    Error,
    "EncodingError U+FBAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBAB");
    },
    Error,
    "EncodingError U+FBAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBAC");
    },
    Error,
    "EncodingError U+FBAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBAD");
    },
    Error,
    "EncodingError U+FBAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBAE");
    },
    Error,
    "EncodingError U+FBAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBAF");
    },
    Error,
    "EncodingError U+FBAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB0");
    },
    Error,
    "EncodingError U+FBB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB1");
    },
    Error,
    "EncodingError U+FBB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB2");
    },
    Error,
    "EncodingError U+FBB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB3");
    },
    Error,
    "EncodingError U+FBB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB4");
    },
    Error,
    "EncodingError U+FBB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB5");
    },
    Error,
    "EncodingError U+FBB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB6");
    },
    Error,
    "EncodingError U+FBB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB7");
    },
    Error,
    "EncodingError U+FBB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB8");
    },
    Error,
    "EncodingError U+FBB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB9");
    },
    Error,
    "EncodingError U+FBB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBBA");
    },
    Error,
    "EncodingError U+FBBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBBB");
    },
    Error,
    "EncodingError U+FBBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBBC");
    },
    Error,
    "EncodingError U+FBBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBBD");
    },
    Error,
    "EncodingError U+FBBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBBE");
    },
    Error,
    "EncodingError U+FBBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBBF");
    },
    Error,
    "EncodingError U+FBBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC0");
    },
    Error,
    "EncodingError U+FBC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC1");
    },
    Error,
    "EncodingError U+FBC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC2");
    },
    Error,
    "EncodingError U+FBC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC3");
    },
    Error,
    "EncodingError U+FBC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC4");
    },
    Error,
    "EncodingError U+FBC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC5");
    },
    Error,
    "EncodingError U+FBC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC6");
    },
    Error,
    "EncodingError U+FBC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC7");
    },
    Error,
    "EncodingError U+FBC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC8");
    },
    Error,
    "EncodingError U+FBC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC9");
    },
    Error,
    "EncodingError U+FBC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBCA");
    },
    Error,
    "EncodingError U+FBCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBCB");
    },
    Error,
    "EncodingError U+FBCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBCC");
    },
    Error,
    "EncodingError U+FBCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBCD");
    },
    Error,
    "EncodingError U+FBCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBCE");
    },
    Error,
    "EncodingError U+FBCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBCF");
    },
    Error,
    "EncodingError U+FBCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD0");
    },
    Error,
    "EncodingError U+FBD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD1");
    },
    Error,
    "EncodingError U+FBD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD2");
    },
    Error,
    "EncodingError U+FBD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD3");
    },
    Error,
    "EncodingError U+FBD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD4");
    },
    Error,
    "EncodingError U+FBD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD5");
    },
    Error,
    "EncodingError U+FBD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD6");
    },
    Error,
    "EncodingError U+FBD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD7");
    },
    Error,
    "EncodingError U+FBD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD8");
    },
    Error,
    "EncodingError U+FBD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD9");
    },
    Error,
    "EncodingError U+FBD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBDA");
    },
    Error,
    "EncodingError U+FBDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBDB");
    },
    Error,
    "EncodingError U+FBDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBDC");
    },
    Error,
    "EncodingError U+FBDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBDD");
    },
    Error,
    "EncodingError U+FBDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBDE");
    },
    Error,
    "EncodingError U+FBDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBDF");
    },
    Error,
    "EncodingError U+FBDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE0");
    },
    Error,
    "EncodingError U+FBE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE1");
    },
    Error,
    "EncodingError U+FBE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE2");
    },
    Error,
    "EncodingError U+FBE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE3");
    },
    Error,
    "EncodingError U+FBE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE4");
    },
    Error,
    "EncodingError U+FBE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE5");
    },
    Error,
    "EncodingError U+FBE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE6");
    },
    Error,
    "EncodingError U+FBE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE7");
    },
    Error,
    "EncodingError U+FBE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE8");
    },
    Error,
    "EncodingError U+FBE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE9");
    },
    Error,
    "EncodingError U+FBE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBEA");
    },
    Error,
    "EncodingError U+FBEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBEB");
    },
    Error,
    "EncodingError U+FBEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBEC");
    },
    Error,
    "EncodingError U+FBEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBED");
    },
    Error,
    "EncodingError U+FBED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBEE");
    },
    Error,
    "EncodingError U+FBEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBEF");
    },
    Error,
    "EncodingError U+FBEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF0");
    },
    Error,
    "EncodingError U+FBF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF1");
    },
    Error,
    "EncodingError U+FBF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF2");
    },
    Error,
    "EncodingError U+FBF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF3");
    },
    Error,
    "EncodingError U+FBF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF4");
    },
    Error,
    "EncodingError U+FBF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF5");
    },
    Error,
    "EncodingError U+FBF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF6");
    },
    Error,
    "EncodingError U+FBF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF7");
    },
    Error,
    "EncodingError U+FBF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF8");
    },
    Error,
    "EncodingError U+FBF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF9");
    },
    Error,
    "EncodingError U+FBF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBFA");
    },
    Error,
    "EncodingError U+FBFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBFB");
    },
    Error,
    "EncodingError U+FBFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBFC");
    },
    Error,
    "EncodingError U+FBFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBFD");
    },
    Error,
    "EncodingError U+FBFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBFE");
    },
    Error,
    "EncodingError U+FBFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBFF");
    },
    Error,
    "EncodingError U+FBFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC00");
    },
    Error,
    "EncodingError U+FC00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC01");
    },
    Error,
    "EncodingError U+FC01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC02");
    },
    Error,
    "EncodingError U+FC02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC03");
    },
    Error,
    "EncodingError U+FC03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC04");
    },
    Error,
    "EncodingError U+FC04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC05");
    },
    Error,
    "EncodingError U+FC05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC06");
    },
    Error,
    "EncodingError U+FC06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC07");
    },
    Error,
    "EncodingError U+FC07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC08");
    },
    Error,
    "EncodingError U+FC08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC09");
    },
    Error,
    "EncodingError U+FC09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC0A");
    },
    Error,
    "EncodingError U+FC0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC0B");
    },
    Error,
    "EncodingError U+FC0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC0C");
    },
    Error,
    "EncodingError U+FC0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC0D");
    },
    Error,
    "EncodingError U+FC0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC0E");
    },
    Error,
    "EncodingError U+FC0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC0F");
    },
    Error,
    "EncodingError U+FC0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC10");
    },
    Error,
    "EncodingError U+FC10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC11");
    },
    Error,
    "EncodingError U+FC11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC12");
    },
    Error,
    "EncodingError U+FC12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC13");
    },
    Error,
    "EncodingError U+FC13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC14");
    },
    Error,
    "EncodingError U+FC14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC15");
    },
    Error,
    "EncodingError U+FC15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC16");
    },
    Error,
    "EncodingError U+FC16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC17");
    },
    Error,
    "EncodingError U+FC17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC18");
    },
    Error,
    "EncodingError U+FC18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC19");
    },
    Error,
    "EncodingError U+FC19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC1A");
    },
    Error,
    "EncodingError U+FC1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC1B");
    },
    Error,
    "EncodingError U+FC1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC1C");
    },
    Error,
    "EncodingError U+FC1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC1D");
    },
    Error,
    "EncodingError U+FC1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC1E");
    },
    Error,
    "EncodingError U+FC1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC1F");
    },
    Error,
    "EncodingError U+FC1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC20");
    },
    Error,
    "EncodingError U+FC20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC21");
    },
    Error,
    "EncodingError U+FC21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC22");
    },
    Error,
    "EncodingError U+FC22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC23");
    },
    Error,
    "EncodingError U+FC23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC24");
    },
    Error,
    "EncodingError U+FC24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC25");
    },
    Error,
    "EncodingError U+FC25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC26");
    },
    Error,
    "EncodingError U+FC26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC27");
    },
    Error,
    "EncodingError U+FC27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC28");
    },
    Error,
    "EncodingError U+FC28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC29");
    },
    Error,
    "EncodingError U+FC29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC2A");
    },
    Error,
    "EncodingError U+FC2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC2B");
    },
    Error,
    "EncodingError U+FC2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC2C");
    },
    Error,
    "EncodingError U+FC2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC2D");
    },
    Error,
    "EncodingError U+FC2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC2E");
    },
    Error,
    "EncodingError U+FC2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC2F");
    },
    Error,
    "EncodingError U+FC2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC30");
    },
    Error,
    "EncodingError U+FC30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC31");
    },
    Error,
    "EncodingError U+FC31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC32");
    },
    Error,
    "EncodingError U+FC32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC33");
    },
    Error,
    "EncodingError U+FC33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC34");
    },
    Error,
    "EncodingError U+FC34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC35");
    },
    Error,
    "EncodingError U+FC35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC36");
    },
    Error,
    "EncodingError U+FC36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC37");
    },
    Error,
    "EncodingError U+FC37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC38");
    },
    Error,
    "EncodingError U+FC38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC39");
    },
    Error,
    "EncodingError U+FC39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC3A");
    },
    Error,
    "EncodingError U+FC3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC3B");
    },
    Error,
    "EncodingError U+FC3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC3C");
    },
    Error,
    "EncodingError U+FC3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC3D");
    },
    Error,
    "EncodingError U+FC3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC3E");
    },
    Error,
    "EncodingError U+FC3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC3F");
    },
    Error,
    "EncodingError U+FC3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC40");
    },
    Error,
    "EncodingError U+FC40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC41");
    },
    Error,
    "EncodingError U+FC41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC42");
    },
    Error,
    "EncodingError U+FC42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC43");
    },
    Error,
    "EncodingError U+FC43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC44");
    },
    Error,
    "EncodingError U+FC44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC45");
    },
    Error,
    "EncodingError U+FC45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC46");
    },
    Error,
    "EncodingError U+FC46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC47");
    },
    Error,
    "EncodingError U+FC47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC48");
    },
    Error,
    "EncodingError U+FC48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC49");
    },
    Error,
    "EncodingError U+FC49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC4A");
    },
    Error,
    "EncodingError U+FC4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC4B");
    },
    Error,
    "EncodingError U+FC4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC4C");
    },
    Error,
    "EncodingError U+FC4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC4D");
    },
    Error,
    "EncodingError U+FC4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC4E");
    },
    Error,
    "EncodingError U+FC4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC4F");
    },
    Error,
    "EncodingError U+FC4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC50");
    },
    Error,
    "EncodingError U+FC50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC51");
    },
    Error,
    "EncodingError U+FC51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC52");
    },
    Error,
    "EncodingError U+FC52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC53");
    },
    Error,
    "EncodingError U+FC53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC54");
    },
    Error,
    "EncodingError U+FC54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC55");
    },
    Error,
    "EncodingError U+FC55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC56");
    },
    Error,
    "EncodingError U+FC56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC57");
    },
    Error,
    "EncodingError U+FC57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC58");
    },
    Error,
    "EncodingError U+FC58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC59");
    },
    Error,
    "EncodingError U+FC59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC5A");
    },
    Error,
    "EncodingError U+FC5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC5B");
    },
    Error,
    "EncodingError U+FC5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC5C");
    },
    Error,
    "EncodingError U+FC5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC5D");
    },
    Error,
    "EncodingError U+FC5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC5E");
    },
    Error,
    "EncodingError U+FC5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC5F");
    },
    Error,
    "EncodingError U+FC5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC60");
    },
    Error,
    "EncodingError U+FC60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC61");
    },
    Error,
    "EncodingError U+FC61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC62");
    },
    Error,
    "EncodingError U+FC62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC63");
    },
    Error,
    "EncodingError U+FC63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC64");
    },
    Error,
    "EncodingError U+FC64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC65");
    },
    Error,
    "EncodingError U+FC65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC66");
    },
    Error,
    "EncodingError U+FC66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC67");
    },
    Error,
    "EncodingError U+FC67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC68");
    },
    Error,
    "EncodingError U+FC68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC69");
    },
    Error,
    "EncodingError U+FC69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC6A");
    },
    Error,
    "EncodingError U+FC6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC6B");
    },
    Error,
    "EncodingError U+FC6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC6C");
    },
    Error,
    "EncodingError U+FC6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC6D");
    },
    Error,
    "EncodingError U+FC6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC6E");
    },
    Error,
    "EncodingError U+FC6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC6F");
    },
    Error,
    "EncodingError U+FC6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC70");
    },
    Error,
    "EncodingError U+FC70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC71");
    },
    Error,
    "EncodingError U+FC71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC72");
    },
    Error,
    "EncodingError U+FC72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC73");
    },
    Error,
    "EncodingError U+FC73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC74");
    },
    Error,
    "EncodingError U+FC74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC75");
    },
    Error,
    "EncodingError U+FC75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC76");
    },
    Error,
    "EncodingError U+FC76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC77");
    },
    Error,
    "EncodingError U+FC77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC78");
    },
    Error,
    "EncodingError U+FC78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC79");
    },
    Error,
    "EncodingError U+FC79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC7A");
    },
    Error,
    "EncodingError U+FC7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC7B");
    },
    Error,
    "EncodingError U+FC7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC7C");
    },
    Error,
    "EncodingError U+FC7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC7D");
    },
    Error,
    "EncodingError U+FC7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC7E");
    },
    Error,
    "EncodingError U+FC7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC7F");
    },
    Error,
    "EncodingError U+FC7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC80");
    },
    Error,
    "EncodingError U+FC80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC81");
    },
    Error,
    "EncodingError U+FC81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC82");
    },
    Error,
    "EncodingError U+FC82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC83");
    },
    Error,
    "EncodingError U+FC83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC84");
    },
    Error,
    "EncodingError U+FC84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC85");
    },
    Error,
    "EncodingError U+FC85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC86");
    },
    Error,
    "EncodingError U+FC86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC87");
    },
    Error,
    "EncodingError U+FC87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC88");
    },
    Error,
    "EncodingError U+FC88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC89");
    },
    Error,
    "EncodingError U+FC89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC8A");
    },
    Error,
    "EncodingError U+FC8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC8B");
    },
    Error,
    "EncodingError U+FC8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC8C");
    },
    Error,
    "EncodingError U+FC8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC8D");
    },
    Error,
    "EncodingError U+FC8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC8E");
    },
    Error,
    "EncodingError U+FC8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC8F");
    },
    Error,
    "EncodingError U+FC8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC90");
    },
    Error,
    "EncodingError U+FC90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC91");
    },
    Error,
    "EncodingError U+FC91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC92");
    },
    Error,
    "EncodingError U+FC92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC93");
    },
    Error,
    "EncodingError U+FC93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC94");
    },
    Error,
    "EncodingError U+FC94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC95");
    },
    Error,
    "EncodingError U+FC95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC96");
    },
    Error,
    "EncodingError U+FC96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC97");
    },
    Error,
    "EncodingError U+FC97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC98");
    },
    Error,
    "EncodingError U+FC98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC99");
    },
    Error,
    "EncodingError U+FC99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC9A");
    },
    Error,
    "EncodingError U+FC9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC9B");
    },
    Error,
    "EncodingError U+FC9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC9C");
    },
    Error,
    "EncodingError U+FC9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC9D");
    },
    Error,
    "EncodingError U+FC9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC9E");
    },
    Error,
    "EncodingError U+FC9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC9F");
    },
    Error,
    "EncodingError U+FC9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA0");
    },
    Error,
    "EncodingError U+FCA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA1");
    },
    Error,
    "EncodingError U+FCA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA2");
    },
    Error,
    "EncodingError U+FCA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA3");
    },
    Error,
    "EncodingError U+FCA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA4");
    },
    Error,
    "EncodingError U+FCA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA5");
    },
    Error,
    "EncodingError U+FCA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA6");
    },
    Error,
    "EncodingError U+FCA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA7");
    },
    Error,
    "EncodingError U+FCA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA8");
    },
    Error,
    "EncodingError U+FCA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA9");
    },
    Error,
    "EncodingError U+FCA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCAA");
    },
    Error,
    "EncodingError U+FCAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCAB");
    },
    Error,
    "EncodingError U+FCAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCAC");
    },
    Error,
    "EncodingError U+FCAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCAD");
    },
    Error,
    "EncodingError U+FCAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCAE");
    },
    Error,
    "EncodingError U+FCAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCAF");
    },
    Error,
    "EncodingError U+FCAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB0");
    },
    Error,
    "EncodingError U+FCB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB1");
    },
    Error,
    "EncodingError U+FCB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB2");
    },
    Error,
    "EncodingError U+FCB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB3");
    },
    Error,
    "EncodingError U+FCB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB4");
    },
    Error,
    "EncodingError U+FCB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB5");
    },
    Error,
    "EncodingError U+FCB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB6");
    },
    Error,
    "EncodingError U+FCB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB7");
    },
    Error,
    "EncodingError U+FCB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB8");
    },
    Error,
    "EncodingError U+FCB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB9");
    },
    Error,
    "EncodingError U+FCB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCBA");
    },
    Error,
    "EncodingError U+FCBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCBB");
    },
    Error,
    "EncodingError U+FCBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCBC");
    },
    Error,
    "EncodingError U+FCBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCBD");
    },
    Error,
    "EncodingError U+FCBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCBE");
    },
    Error,
    "EncodingError U+FCBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCBF");
    },
    Error,
    "EncodingError U+FCBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC0");
    },
    Error,
    "EncodingError U+FCC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC1");
    },
    Error,
    "EncodingError U+FCC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC2");
    },
    Error,
    "EncodingError U+FCC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC3");
    },
    Error,
    "EncodingError U+FCC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC4");
    },
    Error,
    "EncodingError U+FCC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC5");
    },
    Error,
    "EncodingError U+FCC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC6");
    },
    Error,
    "EncodingError U+FCC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC7");
    },
    Error,
    "EncodingError U+FCC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC8");
    },
    Error,
    "EncodingError U+FCC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC9");
    },
    Error,
    "EncodingError U+FCC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCCA");
    },
    Error,
    "EncodingError U+FCCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCCB");
    },
    Error,
    "EncodingError U+FCCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCCC");
    },
    Error,
    "EncodingError U+FCCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCCD");
    },
    Error,
    "EncodingError U+FCCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCCE");
    },
    Error,
    "EncodingError U+FCCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCCF");
    },
    Error,
    "EncodingError U+FCCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD0");
    },
    Error,
    "EncodingError U+FCD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD1");
    },
    Error,
    "EncodingError U+FCD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD2");
    },
    Error,
    "EncodingError U+FCD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD3");
    },
    Error,
    "EncodingError U+FCD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD4");
    },
    Error,
    "EncodingError U+FCD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD5");
    },
    Error,
    "EncodingError U+FCD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD6");
    },
    Error,
    "EncodingError U+FCD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD7");
    },
    Error,
    "EncodingError U+FCD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD8");
    },
    Error,
    "EncodingError U+FCD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD9");
    },
    Error,
    "EncodingError U+FCD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCDA");
    },
    Error,
    "EncodingError U+FCDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCDB");
    },
    Error,
    "EncodingError U+FCDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCDC");
    },
    Error,
    "EncodingError U+FCDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCDD");
    },
    Error,
    "EncodingError U+FCDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCDE");
    },
    Error,
    "EncodingError U+FCDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCDF");
    },
    Error,
    "EncodingError U+FCDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE0");
    },
    Error,
    "EncodingError U+FCE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE1");
    },
    Error,
    "EncodingError U+FCE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE2");
    },
    Error,
    "EncodingError U+FCE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE3");
    },
    Error,
    "EncodingError U+FCE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE4");
    },
    Error,
    "EncodingError U+FCE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE5");
    },
    Error,
    "EncodingError U+FCE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE6");
    },
    Error,
    "EncodingError U+FCE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE7");
    },
    Error,
    "EncodingError U+FCE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE8");
    },
    Error,
    "EncodingError U+FCE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE9");
    },
    Error,
    "EncodingError U+FCE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCEA");
    },
    Error,
    "EncodingError U+FCEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCEB");
    },
    Error,
    "EncodingError U+FCEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCEC");
    },
    Error,
    "EncodingError U+FCEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCED");
    },
    Error,
    "EncodingError U+FCED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCEE");
    },
    Error,
    "EncodingError U+FCEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCEF");
    },
    Error,
    "EncodingError U+FCEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF0");
    },
    Error,
    "EncodingError U+FCF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF1");
    },
    Error,
    "EncodingError U+FCF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF2");
    },
    Error,
    "EncodingError U+FCF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF3");
    },
    Error,
    "EncodingError U+FCF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF4");
    },
    Error,
    "EncodingError U+FCF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF5");
    },
    Error,
    "EncodingError U+FCF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF6");
    },
    Error,
    "EncodingError U+FCF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF7");
    },
    Error,
    "EncodingError U+FCF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF8");
    },
    Error,
    "EncodingError U+FCF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF9");
    },
    Error,
    "EncodingError U+FCF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCFA");
    },
    Error,
    "EncodingError U+FCFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCFB");
    },
    Error,
    "EncodingError U+FCFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCFC");
    },
    Error,
    "EncodingError U+FCFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCFD");
    },
    Error,
    "EncodingError U+FCFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCFE");
    },
    Error,
    "EncodingError U+FCFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCFF");
    },
    Error,
    "EncodingError U+FCFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD00");
    },
    Error,
    "EncodingError U+FD00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD01");
    },
    Error,
    "EncodingError U+FD01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD02");
    },
    Error,
    "EncodingError U+FD02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD03");
    },
    Error,
    "EncodingError U+FD03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD04");
    },
    Error,
    "EncodingError U+FD04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD05");
    },
    Error,
    "EncodingError U+FD05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD06");
    },
    Error,
    "EncodingError U+FD06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD07");
    },
    Error,
    "EncodingError U+FD07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD08");
    },
    Error,
    "EncodingError U+FD08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD09");
    },
    Error,
    "EncodingError U+FD09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD0A");
    },
    Error,
    "EncodingError U+FD0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD0B");
    },
    Error,
    "EncodingError U+FD0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD0C");
    },
    Error,
    "EncodingError U+FD0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD0D");
    },
    Error,
    "EncodingError U+FD0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD0E");
    },
    Error,
    "EncodingError U+FD0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD0F");
    },
    Error,
    "EncodingError U+FD0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD10");
    },
    Error,
    "EncodingError U+FD10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD11");
    },
    Error,
    "EncodingError U+FD11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD12");
    },
    Error,
    "EncodingError U+FD12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD13");
    },
    Error,
    "EncodingError U+FD13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD14");
    },
    Error,
    "EncodingError U+FD14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD15");
    },
    Error,
    "EncodingError U+FD15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD16");
    },
    Error,
    "EncodingError U+FD16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD17");
    },
    Error,
    "EncodingError U+FD17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD18");
    },
    Error,
    "EncodingError U+FD18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD19");
    },
    Error,
    "EncodingError U+FD19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD1A");
    },
    Error,
    "EncodingError U+FD1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD1B");
    },
    Error,
    "EncodingError U+FD1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD1C");
    },
    Error,
    "EncodingError U+FD1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD1D");
    },
    Error,
    "EncodingError U+FD1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD1E");
    },
    Error,
    "EncodingError U+FD1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD1F");
    },
    Error,
    "EncodingError U+FD1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD20");
    },
    Error,
    "EncodingError U+FD20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD21");
    },
    Error,
    "EncodingError U+FD21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD22");
    },
    Error,
    "EncodingError U+FD22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD23");
    },
    Error,
    "EncodingError U+FD23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD24");
    },
    Error,
    "EncodingError U+FD24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD25");
    },
    Error,
    "EncodingError U+FD25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD26");
    },
    Error,
    "EncodingError U+FD26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD27");
    },
    Error,
    "EncodingError U+FD27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD28");
    },
    Error,
    "EncodingError U+FD28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD29");
    },
    Error,
    "EncodingError U+FD29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD2A");
    },
    Error,
    "EncodingError U+FD2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD2B");
    },
    Error,
    "EncodingError U+FD2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD2C");
    },
    Error,
    "EncodingError U+FD2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD2D");
    },
    Error,
    "EncodingError U+FD2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD2E");
    },
    Error,
    "EncodingError U+FD2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD2F");
    },
    Error,
    "EncodingError U+FD2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD30");
    },
    Error,
    "EncodingError U+FD30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD31");
    },
    Error,
    "EncodingError U+FD31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD32");
    },
    Error,
    "EncodingError U+FD32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD33");
    },
    Error,
    "EncodingError U+FD33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD34");
    },
    Error,
    "EncodingError U+FD34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD35");
    },
    Error,
    "EncodingError U+FD35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD36");
    },
    Error,
    "EncodingError U+FD36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD37");
    },
    Error,
    "EncodingError U+FD37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD38");
    },
    Error,
    "EncodingError U+FD38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD39");
    },
    Error,
    "EncodingError U+FD39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD3A");
    },
    Error,
    "EncodingError U+FD3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD3B");
    },
    Error,
    "EncodingError U+FD3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD3C");
    },
    Error,
    "EncodingError U+FD3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD3D");
    },
    Error,
    "EncodingError U+FD3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD3E");
    },
    Error,
    "EncodingError U+FD3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD3F");
    },
    Error,
    "EncodingError U+FD3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD40");
    },
    Error,
    "EncodingError U+FD40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD41");
    },
    Error,
    "EncodingError U+FD41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD42");
    },
    Error,
    "EncodingError U+FD42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD43");
    },
    Error,
    "EncodingError U+FD43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD44");
    },
    Error,
    "EncodingError U+FD44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD45");
    },
    Error,
    "EncodingError U+FD45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD46");
    },
    Error,
    "EncodingError U+FD46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD47");
    },
    Error,
    "EncodingError U+FD47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD48");
    },
    Error,
    "EncodingError U+FD48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD49");
    },
    Error,
    "EncodingError U+FD49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD4A");
    },
    Error,
    "EncodingError U+FD4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD4B");
    },
    Error,
    "EncodingError U+FD4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD4C");
    },
    Error,
    "EncodingError U+FD4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD4D");
    },
    Error,
    "EncodingError U+FD4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD4E");
    },
    Error,
    "EncodingError U+FD4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD4F");
    },
    Error,
    "EncodingError U+FD4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD50");
    },
    Error,
    "EncodingError U+FD50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD51");
    },
    Error,
    "EncodingError U+FD51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD52");
    },
    Error,
    "EncodingError U+FD52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD53");
    },
    Error,
    "EncodingError U+FD53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD54");
    },
    Error,
    "EncodingError U+FD54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD55");
    },
    Error,
    "EncodingError U+FD55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD56");
    },
    Error,
    "EncodingError U+FD56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD57");
    },
    Error,
    "EncodingError U+FD57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD58");
    },
    Error,
    "EncodingError U+FD58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD59");
    },
    Error,
    "EncodingError U+FD59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD5A");
    },
    Error,
    "EncodingError U+FD5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD5B");
    },
    Error,
    "EncodingError U+FD5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD5C");
    },
    Error,
    "EncodingError U+FD5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD5D");
    },
    Error,
    "EncodingError U+FD5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD5E");
    },
    Error,
    "EncodingError U+FD5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD5F");
    },
    Error,
    "EncodingError U+FD5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD60");
    },
    Error,
    "EncodingError U+FD60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD61");
    },
    Error,
    "EncodingError U+FD61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD62");
    },
    Error,
    "EncodingError U+FD62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD63");
    },
    Error,
    "EncodingError U+FD63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD64");
    },
    Error,
    "EncodingError U+FD64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD65");
    },
    Error,
    "EncodingError U+FD65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD66");
    },
    Error,
    "EncodingError U+FD66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD67");
    },
    Error,
    "EncodingError U+FD67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD68");
    },
    Error,
    "EncodingError U+FD68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD69");
    },
    Error,
    "EncodingError U+FD69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD6A");
    },
    Error,
    "EncodingError U+FD6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD6B");
    },
    Error,
    "EncodingError U+FD6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD6C");
    },
    Error,
    "EncodingError U+FD6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD6D");
    },
    Error,
    "EncodingError U+FD6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD6E");
    },
    Error,
    "EncodingError U+FD6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD6F");
    },
    Error,
    "EncodingError U+FD6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD70");
    },
    Error,
    "EncodingError U+FD70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD71");
    },
    Error,
    "EncodingError U+FD71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD72");
    },
    Error,
    "EncodingError U+FD72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD73");
    },
    Error,
    "EncodingError U+FD73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD74");
    },
    Error,
    "EncodingError U+FD74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD75");
    },
    Error,
    "EncodingError U+FD75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD76");
    },
    Error,
    "EncodingError U+FD76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD77");
    },
    Error,
    "EncodingError U+FD77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD78");
    },
    Error,
    "EncodingError U+FD78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD79");
    },
    Error,
    "EncodingError U+FD79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD7A");
    },
    Error,
    "EncodingError U+FD7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD7B");
    },
    Error,
    "EncodingError U+FD7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD7C");
    },
    Error,
    "EncodingError U+FD7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD7D");
    },
    Error,
    "EncodingError U+FD7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD7E");
    },
    Error,
    "EncodingError U+FD7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD7F");
    },
    Error,
    "EncodingError U+FD7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD80");
    },
    Error,
    "EncodingError U+FD80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD81");
    },
    Error,
    "EncodingError U+FD81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD82");
    },
    Error,
    "EncodingError U+FD82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD83");
    },
    Error,
    "EncodingError U+FD83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD84");
    },
    Error,
    "EncodingError U+FD84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD85");
    },
    Error,
    "EncodingError U+FD85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD86");
    },
    Error,
    "EncodingError U+FD86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD87");
    },
    Error,
    "EncodingError U+FD87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD88");
    },
    Error,
    "EncodingError U+FD88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD89");
    },
    Error,
    "EncodingError U+FD89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD8A");
    },
    Error,
    "EncodingError U+FD8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD8B");
    },
    Error,
    "EncodingError U+FD8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD8C");
    },
    Error,
    "EncodingError U+FD8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD8D");
    },
    Error,
    "EncodingError U+FD8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD8E");
    },
    Error,
    "EncodingError U+FD8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD8F");
    },
    Error,
    "EncodingError U+FD8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD90");
    },
    Error,
    "EncodingError U+FD90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD91");
    },
    Error,
    "EncodingError U+FD91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD92");
    },
    Error,
    "EncodingError U+FD92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD93");
    },
    Error,
    "EncodingError U+FD93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD94");
    },
    Error,
    "EncodingError U+FD94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD95");
    },
    Error,
    "EncodingError U+FD95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD96");
    },
    Error,
    "EncodingError U+FD96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD97");
    },
    Error,
    "EncodingError U+FD97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD98");
    },
    Error,
    "EncodingError U+FD98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD99");
    },
    Error,
    "EncodingError U+FD99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD9A");
    },
    Error,
    "EncodingError U+FD9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD9B");
    },
    Error,
    "EncodingError U+FD9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD9C");
    },
    Error,
    "EncodingError U+FD9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD9D");
    },
    Error,
    "EncodingError U+FD9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD9E");
    },
    Error,
    "EncodingError U+FD9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD9F");
    },
    Error,
    "EncodingError U+FD9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA0");
    },
    Error,
    "EncodingError U+FDA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA1");
    },
    Error,
    "EncodingError U+FDA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA2");
    },
    Error,
    "EncodingError U+FDA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA3");
    },
    Error,
    "EncodingError U+FDA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA4");
    },
    Error,
    "EncodingError U+FDA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA5");
    },
    Error,
    "EncodingError U+FDA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA6");
    },
    Error,
    "EncodingError U+FDA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA7");
    },
    Error,
    "EncodingError U+FDA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA8");
    },
    Error,
    "EncodingError U+FDA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA9");
    },
    Error,
    "EncodingError U+FDA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDAA");
    },
    Error,
    "EncodingError U+FDAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDAB");
    },
    Error,
    "EncodingError U+FDAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDAC");
    },
    Error,
    "EncodingError U+FDAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDAD");
    },
    Error,
    "EncodingError U+FDAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDAE");
    },
    Error,
    "EncodingError U+FDAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDAF");
    },
    Error,
    "EncodingError U+FDAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB0");
    },
    Error,
    "EncodingError U+FDB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB1");
    },
    Error,
    "EncodingError U+FDB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB2");
    },
    Error,
    "EncodingError U+FDB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB3");
    },
    Error,
    "EncodingError U+FDB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB4");
    },
    Error,
    "EncodingError U+FDB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB5");
    },
    Error,
    "EncodingError U+FDB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB6");
    },
    Error,
    "EncodingError U+FDB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB7");
    },
    Error,
    "EncodingError U+FDB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB8");
    },
    Error,
    "EncodingError U+FDB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB9");
    },
    Error,
    "EncodingError U+FDB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDBA");
    },
    Error,
    "EncodingError U+FDBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDBB");
    },
    Error,
    "EncodingError U+FDBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDBC");
    },
    Error,
    "EncodingError U+FDBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDBD");
    },
    Error,
    "EncodingError U+FDBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDBE");
    },
    Error,
    "EncodingError U+FDBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDBF");
    },
    Error,
    "EncodingError U+FDBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC0");
    },
    Error,
    "EncodingError U+FDC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC1");
    },
    Error,
    "EncodingError U+FDC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC2");
    },
    Error,
    "EncodingError U+FDC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC3");
    },
    Error,
    "EncodingError U+FDC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC4");
    },
    Error,
    "EncodingError U+FDC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC5");
    },
    Error,
    "EncodingError U+FDC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC6");
    },
    Error,
    "EncodingError U+FDC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC7");
    },
    Error,
    "EncodingError U+FDC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC8");
    },
    Error,
    "EncodingError U+FDC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC9");
    },
    Error,
    "EncodingError U+FDC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDCA");
    },
    Error,
    "EncodingError U+FDCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDCB");
    },
    Error,
    "EncodingError U+FDCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDCC");
    },
    Error,
    "EncodingError U+FDCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDCD");
    },
    Error,
    "EncodingError U+FDCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDCE");
    },
    Error,
    "EncodingError U+FDCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDCF");
    },
    Error,
    "EncodingError U+FDCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD0");
    },
    Error,
    "EncodingError U+FDD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD1");
    },
    Error,
    "EncodingError U+FDD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD2");
    },
    Error,
    "EncodingError U+FDD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD3");
    },
    Error,
    "EncodingError U+FDD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD4");
    },
    Error,
    "EncodingError U+FDD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD5");
    },
    Error,
    "EncodingError U+FDD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD6");
    },
    Error,
    "EncodingError U+FDD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD7");
    },
    Error,
    "EncodingError U+FDD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD8");
    },
    Error,
    "EncodingError U+FDD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD9");
    },
    Error,
    "EncodingError U+FDD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDDA");
    },
    Error,
    "EncodingError U+FDDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDDB");
    },
    Error,
    "EncodingError U+FDDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDDC");
    },
    Error,
    "EncodingError U+FDDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDDD");
    },
    Error,
    "EncodingError U+FDDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDDE");
    },
    Error,
    "EncodingError U+FDDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDDF");
    },
    Error,
    "EncodingError U+FDDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE0");
    },
    Error,
    "EncodingError U+FDE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE1");
    },
    Error,
    "EncodingError U+FDE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE2");
    },
    Error,
    "EncodingError U+FDE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE3");
    },
    Error,
    "EncodingError U+FDE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE4");
    },
    Error,
    "EncodingError U+FDE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE5");
    },
    Error,
    "EncodingError U+FDE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE6");
    },
    Error,
    "EncodingError U+FDE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE7");
    },
    Error,
    "EncodingError U+FDE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE8");
    },
    Error,
    "EncodingError U+FDE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE9");
    },
    Error,
    "EncodingError U+FDE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDEA");
    },
    Error,
    "EncodingError U+FDEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDEB");
    },
    Error,
    "EncodingError U+FDEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDEC");
    },
    Error,
    "EncodingError U+FDEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDED");
    },
    Error,
    "EncodingError U+FDED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDEE");
    },
    Error,
    "EncodingError U+FDEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDEF");
    },
    Error,
    "EncodingError U+FDEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF0");
    },
    Error,
    "EncodingError U+FDF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF1");
    },
    Error,
    "EncodingError U+FDF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF2");
    },
    Error,
    "EncodingError U+FDF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF3");
    },
    Error,
    "EncodingError U+FDF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF4");
    },
    Error,
    "EncodingError U+FDF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF5");
    },
    Error,
    "EncodingError U+FDF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF6");
    },
    Error,
    "EncodingError U+FDF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF7");
    },
    Error,
    "EncodingError U+FDF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF8");
    },
    Error,
    "EncodingError U+FDF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF9");
    },
    Error,
    "EncodingError U+FDF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDFA");
    },
    Error,
    "EncodingError U+FDFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDFB");
    },
    Error,
    "EncodingError U+FDFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDFC");
    },
    Error,
    "EncodingError U+FDFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDFD");
    },
    Error,
    "EncodingError U+FDFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDFE");
    },
    Error,
    "EncodingError U+FDFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDFF");
    },
    Error,
    "EncodingError U+FDFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE00");
    },
    Error,
    "EncodingError U+FE00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE01");
    },
    Error,
    "EncodingError U+FE01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE02");
    },
    Error,
    "EncodingError U+FE02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE03");
    },
    Error,
    "EncodingError U+FE03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE04");
    },
    Error,
    "EncodingError U+FE04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE05");
    },
    Error,
    "EncodingError U+FE05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE06");
    },
    Error,
    "EncodingError U+FE06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE07");
    },
    Error,
    "EncodingError U+FE07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE08");
    },
    Error,
    "EncodingError U+FE08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE09");
    },
    Error,
    "EncodingError U+FE09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE0A");
    },
    Error,
    "EncodingError U+FE0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE0B");
    },
    Error,
    "EncodingError U+FE0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE0C");
    },
    Error,
    "EncodingError U+FE0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE0D");
    },
    Error,
    "EncodingError U+FE0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE0E");
    },
    Error,
    "EncodingError U+FE0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE0F");
    },
    Error,
    "EncodingError U+FE0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE10");
    },
    Error,
    "EncodingError U+FE10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE11");
    },
    Error,
    "EncodingError U+FE11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE12");
    },
    Error,
    "EncodingError U+FE12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE13");
    },
    Error,
    "EncodingError U+FE13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE14");
    },
    Error,
    "EncodingError U+FE14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE15");
    },
    Error,
    "EncodingError U+FE15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE16");
    },
    Error,
    "EncodingError U+FE16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE17");
    },
    Error,
    "EncodingError U+FE17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE18");
    },
    Error,
    "EncodingError U+FE18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE19");
    },
    Error,
    "EncodingError U+FE19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE1A");
    },
    Error,
    "EncodingError U+FE1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE1B");
    },
    Error,
    "EncodingError U+FE1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE1C");
    },
    Error,
    "EncodingError U+FE1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE1D");
    },
    Error,
    "EncodingError U+FE1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE1E");
    },
    Error,
    "EncodingError U+FE1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE1F");
    },
    Error,
    "EncodingError U+FE1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE20");
    },
    Error,
    "EncodingError U+FE20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE21");
    },
    Error,
    "EncodingError U+FE21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE22");
    },
    Error,
    "EncodingError U+FE22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE23");
    },
    Error,
    "EncodingError U+FE23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE24");
    },
    Error,
    "EncodingError U+FE24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE25");
    },
    Error,
    "EncodingError U+FE25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE26");
    },
    Error,
    "EncodingError U+FE26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE27");
    },
    Error,
    "EncodingError U+FE27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE28");
    },
    Error,
    "EncodingError U+FE28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE29");
    },
    Error,
    "EncodingError U+FE29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE2A");
    },
    Error,
    "EncodingError U+FE2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE2B");
    },
    Error,
    "EncodingError U+FE2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE2C");
    },
    Error,
    "EncodingError U+FE2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE2D");
    },
    Error,
    "EncodingError U+FE2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE2E");
    },
    Error,
    "EncodingError U+FE2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE2F");
    },
    Error,
    "EncodingError U+FE2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE30");
    },
    Error,
    "EncodingError U+FE30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE31");
    },
    Error,
    "EncodingError U+FE31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE32");
    },
    Error,
    "EncodingError U+FE32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE33");
    },
    Error,
    "EncodingError U+FE33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE34");
    },
    Error,
    "EncodingError U+FE34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE35");
    },
    Error,
    "EncodingError U+FE35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE36");
    },
    Error,
    "EncodingError U+FE36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE37");
    },
    Error,
    "EncodingError U+FE37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE38");
    },
    Error,
    "EncodingError U+FE38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE39");
    },
    Error,
    "EncodingError U+FE39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE3A");
    },
    Error,
    "EncodingError U+FE3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE3B");
    },
    Error,
    "EncodingError U+FE3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE3C");
    },
    Error,
    "EncodingError U+FE3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE3D");
    },
    Error,
    "EncodingError U+FE3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE3E");
    },
    Error,
    "EncodingError U+FE3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE3F");
    },
    Error,
    "EncodingError U+FE3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE40");
    },
    Error,
    "EncodingError U+FE40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE41");
    },
    Error,
    "EncodingError U+FE41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE42");
    },
    Error,
    "EncodingError U+FE42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE43");
    },
    Error,
    "EncodingError U+FE43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE44");
    },
    Error,
    "EncodingError U+FE44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE45");
    },
    Error,
    "EncodingError U+FE45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE46");
    },
    Error,
    "EncodingError U+FE46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE47");
    },
    Error,
    "EncodingError U+FE47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE48");
    },
    Error,
    "EncodingError U+FE48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE49");
    },
    Error,
    "EncodingError U+FE49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE4A");
    },
    Error,
    "EncodingError U+FE4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE4B");
    },
    Error,
    "EncodingError U+FE4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE4C");
    },
    Error,
    "EncodingError U+FE4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE4D");
    },
    Error,
    "EncodingError U+FE4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE4E");
    },
    Error,
    "EncodingError U+FE4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE4F");
    },
    Error,
    "EncodingError U+FE4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE50");
    },
    Error,
    "EncodingError U+FE50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE51");
    },
    Error,
    "EncodingError U+FE51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE52");
    },
    Error,
    "EncodingError U+FE52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE53");
    },
    Error,
    "EncodingError U+FE53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE54");
    },
    Error,
    "EncodingError U+FE54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE55");
    },
    Error,
    "EncodingError U+FE55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE56");
    },
    Error,
    "EncodingError U+FE56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE57");
    },
    Error,
    "EncodingError U+FE57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE58");
    },
    Error,
    "EncodingError U+FE58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE59");
    },
    Error,
    "EncodingError U+FE59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE5A");
    },
    Error,
    "EncodingError U+FE5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE5B");
    },
    Error,
    "EncodingError U+FE5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE5C");
    },
    Error,
    "EncodingError U+FE5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE5D");
    },
    Error,
    "EncodingError U+FE5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE5E");
    },
    Error,
    "EncodingError U+FE5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE5F");
    },
    Error,
    "EncodingError U+FE5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE60");
    },
    Error,
    "EncodingError U+FE60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE61");
    },
    Error,
    "EncodingError U+FE61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE62");
    },
    Error,
    "EncodingError U+FE62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE63");
    },
    Error,
    "EncodingError U+FE63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE64");
    },
    Error,
    "EncodingError U+FE64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE65");
    },
    Error,
    "EncodingError U+FE65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE66");
    },
    Error,
    "EncodingError U+FE66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE67");
    },
    Error,
    "EncodingError U+FE67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE68");
    },
    Error,
    "EncodingError U+FE68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE69");
    },
    Error,
    "EncodingError U+FE69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE6A");
    },
    Error,
    "EncodingError U+FE6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE6B");
    },
    Error,
    "EncodingError U+FE6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE6C");
    },
    Error,
    "EncodingError U+FE6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE6D");
    },
    Error,
    "EncodingError U+FE6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE6E");
    },
    Error,
    "EncodingError U+FE6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE6F");
    },
    Error,
    "EncodingError U+FE6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE70");
    },
    Error,
    "EncodingError U+FE70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE71");
    },
    Error,
    "EncodingError U+FE71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE72");
    },
    Error,
    "EncodingError U+FE72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE73");
    },
    Error,
    "EncodingError U+FE73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE74");
    },
    Error,
    "EncodingError U+FE74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE75");
    },
    Error,
    "EncodingError U+FE75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE76");
    },
    Error,
    "EncodingError U+FE76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE77");
    },
    Error,
    "EncodingError U+FE77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE78");
    },
    Error,
    "EncodingError U+FE78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE79");
    },
    Error,
    "EncodingError U+FE79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE7A");
    },
    Error,
    "EncodingError U+FE7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE7B");
    },
    Error,
    "EncodingError U+FE7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE7C");
    },
    Error,
    "EncodingError U+FE7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE7D");
    },
    Error,
    "EncodingError U+FE7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE7E");
    },
    Error,
    "EncodingError U+FE7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE7F");
    },
    Error,
    "EncodingError U+FE7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE80");
    },
    Error,
    "EncodingError U+FE80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE81");
    },
    Error,
    "EncodingError U+FE81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE82");
    },
    Error,
    "EncodingError U+FE82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE83");
    },
    Error,
    "EncodingError U+FE83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE84");
    },
    Error,
    "EncodingError U+FE84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE85");
    },
    Error,
    "EncodingError U+FE85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE86");
    },
    Error,
    "EncodingError U+FE86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE87");
    },
    Error,
    "EncodingError U+FE87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE88");
    },
    Error,
    "EncodingError U+FE88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE89");
    },
    Error,
    "EncodingError U+FE89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE8A");
    },
    Error,
    "EncodingError U+FE8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE8B");
    },
    Error,
    "EncodingError U+FE8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE8C");
    },
    Error,
    "EncodingError U+FE8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE8D");
    },
    Error,
    "EncodingError U+FE8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE8E");
    },
    Error,
    "EncodingError U+FE8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE8F");
    },
    Error,
    "EncodingError U+FE8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE90");
    },
    Error,
    "EncodingError U+FE90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE91");
    },
    Error,
    "EncodingError U+FE91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE92");
    },
    Error,
    "EncodingError U+FE92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE93");
    },
    Error,
    "EncodingError U+FE93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE94");
    },
    Error,
    "EncodingError U+FE94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE95");
    },
    Error,
    "EncodingError U+FE95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE96");
    },
    Error,
    "EncodingError U+FE96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE97");
    },
    Error,
    "EncodingError U+FE97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE98");
    },
    Error,
    "EncodingError U+FE98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE99");
    },
    Error,
    "EncodingError U+FE99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE9A");
    },
    Error,
    "EncodingError U+FE9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE9B");
    },
    Error,
    "EncodingError U+FE9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE9C");
    },
    Error,
    "EncodingError U+FE9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE9D");
    },
    Error,
    "EncodingError U+FE9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE9E");
    },
    Error,
    "EncodingError U+FE9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE9F");
    },
    Error,
    "EncodingError U+FE9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA0");
    },
    Error,
    "EncodingError U+FEA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA1");
    },
    Error,
    "EncodingError U+FEA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA2");
    },
    Error,
    "EncodingError U+FEA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA3");
    },
    Error,
    "EncodingError U+FEA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA4");
    },
    Error,
    "EncodingError U+FEA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA5");
    },
    Error,
    "EncodingError U+FEA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA6");
    },
    Error,
    "EncodingError U+FEA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA7");
    },
    Error,
    "EncodingError U+FEA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA8");
    },
    Error,
    "EncodingError U+FEA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA9");
    },
    Error,
    "EncodingError U+FEA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEAA");
    },
    Error,
    "EncodingError U+FEAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEAB");
    },
    Error,
    "EncodingError U+FEAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEAC");
    },
    Error,
    "EncodingError U+FEAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEAD");
    },
    Error,
    "EncodingError U+FEAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEAE");
    },
    Error,
    "EncodingError U+FEAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEAF");
    },
    Error,
    "EncodingError U+FEAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB0");
    },
    Error,
    "EncodingError U+FEB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB1");
    },
    Error,
    "EncodingError U+FEB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB2");
    },
    Error,
    "EncodingError U+FEB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB3");
    },
    Error,
    "EncodingError U+FEB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB4");
    },
    Error,
    "EncodingError U+FEB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB5");
    },
    Error,
    "EncodingError U+FEB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB6");
    },
    Error,
    "EncodingError U+FEB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB7");
    },
    Error,
    "EncodingError U+FEB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB8");
    },
    Error,
    "EncodingError U+FEB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB9");
    },
    Error,
    "EncodingError U+FEB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEBA");
    },
    Error,
    "EncodingError U+FEBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEBB");
    },
    Error,
    "EncodingError U+FEBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEBC");
    },
    Error,
    "EncodingError U+FEBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEBD");
    },
    Error,
    "EncodingError U+FEBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEBE");
    },
    Error,
    "EncodingError U+FEBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEBF");
    },
    Error,
    "EncodingError U+FEBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC0");
    },
    Error,
    "EncodingError U+FEC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC1");
    },
    Error,
    "EncodingError U+FEC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC2");
    },
    Error,
    "EncodingError U+FEC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC3");
    },
    Error,
    "EncodingError U+FEC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC4");
    },
    Error,
    "EncodingError U+FEC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC5");
    },
    Error,
    "EncodingError U+FEC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC6");
    },
    Error,
    "EncodingError U+FEC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC7");
    },
    Error,
    "EncodingError U+FEC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC8");
    },
    Error,
    "EncodingError U+FEC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC9");
    },
    Error,
    "EncodingError U+FEC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFECA");
    },
    Error,
    "EncodingError U+FECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFECB");
    },
    Error,
    "EncodingError U+FECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFECC");
    },
    Error,
    "EncodingError U+FECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFECD");
    },
    Error,
    "EncodingError U+FECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFECE");
    },
    Error,
    "EncodingError U+FECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFECF");
    },
    Error,
    "EncodingError U+FECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED0");
    },
    Error,
    "EncodingError U+FED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED1");
    },
    Error,
    "EncodingError U+FED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED2");
    },
    Error,
    "EncodingError U+FED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED3");
    },
    Error,
    "EncodingError U+FED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED4");
    },
    Error,
    "EncodingError U+FED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED5");
    },
    Error,
    "EncodingError U+FED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED6");
    },
    Error,
    "EncodingError U+FED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED7");
    },
    Error,
    "EncodingError U+FED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED8");
    },
    Error,
    "EncodingError U+FED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED9");
    },
    Error,
    "EncodingError U+FED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEDA");
    },
    Error,
    "EncodingError U+FEDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEDB");
    },
    Error,
    "EncodingError U+FEDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEDC");
    },
    Error,
    "EncodingError U+FEDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEDD");
    },
    Error,
    "EncodingError U+FEDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEDE");
    },
    Error,
    "EncodingError U+FEDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEDF");
    },
    Error,
    "EncodingError U+FEDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE0");
    },
    Error,
    "EncodingError U+FEE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE1");
    },
    Error,
    "EncodingError U+FEE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE2");
    },
    Error,
    "EncodingError U+FEE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE3");
    },
    Error,
    "EncodingError U+FEE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE4");
    },
    Error,
    "EncodingError U+FEE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE5");
    },
    Error,
    "EncodingError U+FEE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE6");
    },
    Error,
    "EncodingError U+FEE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE7");
    },
    Error,
    "EncodingError U+FEE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE8");
    },
    Error,
    "EncodingError U+FEE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE9");
    },
    Error,
    "EncodingError U+FEE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEEA");
    },
    Error,
    "EncodingError U+FEEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEEB");
    },
    Error,
    "EncodingError U+FEEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEEC");
    },
    Error,
    "EncodingError U+FEEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEED");
    },
    Error,
    "EncodingError U+FEED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEEE");
    },
    Error,
    "EncodingError U+FEEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEEF");
    },
    Error,
    "EncodingError U+FEEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF0");
    },
    Error,
    "EncodingError U+FEF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF1");
    },
    Error,
    "EncodingError U+FEF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF2");
    },
    Error,
    "EncodingError U+FEF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF3");
    },
    Error,
    "EncodingError U+FEF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF4");
    },
    Error,
    "EncodingError U+FEF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF5");
    },
    Error,
    "EncodingError U+FEF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF6");
    },
    Error,
    "EncodingError U+FEF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF7");
    },
    Error,
    "EncodingError U+FEF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF8");
    },
    Error,
    "EncodingError U+FEF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF9");
    },
    Error,
    "EncodingError U+FEF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEFA");
    },
    Error,
    "EncodingError U+FEFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEFB");
    },
    Error,
    "EncodingError U+FEFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEFC");
    },
    Error,
    "EncodingError U+FEFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEFD");
    },
    Error,
    "EncodingError U+FEFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEFE");
    },
    Error,
    "EncodingError U+FEFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEFF");
    },
    Error,
    "EncodingError U+FEFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFF00");
    },
    Error,
    "EncodingError U+FF00",
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
    "EncodingError U+FF5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFF60");
    },
    Error,
    "EncodingError U+FF60",
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
    "EncodingError U+FFA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA1");
    },
    Error,
    "EncodingError U+FFA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA2");
    },
    Error,
    "EncodingError U+FFA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA3");
    },
    Error,
    "EncodingError U+FFA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA4");
    },
    Error,
    "EncodingError U+FFA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA5");
    },
    Error,
    "EncodingError U+FFA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA6");
    },
    Error,
    "EncodingError U+FFA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA7");
    },
    Error,
    "EncodingError U+FFA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA8");
    },
    Error,
    "EncodingError U+FFA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA9");
    },
    Error,
    "EncodingError U+FFA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFAA");
    },
    Error,
    "EncodingError U+FFAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFAB");
    },
    Error,
    "EncodingError U+FFAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFAC");
    },
    Error,
    "EncodingError U+FFAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFAD");
    },
    Error,
    "EncodingError U+FFAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFAE");
    },
    Error,
    "EncodingError U+FFAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFAF");
    },
    Error,
    "EncodingError U+FFAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB0");
    },
    Error,
    "EncodingError U+FFB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB1");
    },
    Error,
    "EncodingError U+FFB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB2");
    },
    Error,
    "EncodingError U+FFB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB3");
    },
    Error,
    "EncodingError U+FFB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB4");
    },
    Error,
    "EncodingError U+FFB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB5");
    },
    Error,
    "EncodingError U+FFB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB6");
    },
    Error,
    "EncodingError U+FFB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB7");
    },
    Error,
    "EncodingError U+FFB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB8");
    },
    Error,
    "EncodingError U+FFB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB9");
    },
    Error,
    "EncodingError U+FFB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFBA");
    },
    Error,
    "EncodingError U+FFBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFBB");
    },
    Error,
    "EncodingError U+FFBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFBC");
    },
    Error,
    "EncodingError U+FFBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFBD");
    },
    Error,
    "EncodingError U+FFBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFBE");
    },
    Error,
    "EncodingError U+FFBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFBF");
    },
    Error,
    "EncodingError U+FFBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC0");
    },
    Error,
    "EncodingError U+FFC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC1");
    },
    Error,
    "EncodingError U+FFC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC2");
    },
    Error,
    "EncodingError U+FFC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC3");
    },
    Error,
    "EncodingError U+FFC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC4");
    },
    Error,
    "EncodingError U+FFC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC5");
    },
    Error,
    "EncodingError U+FFC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC6");
    },
    Error,
    "EncodingError U+FFC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC7");
    },
    Error,
    "EncodingError U+FFC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC8");
    },
    Error,
    "EncodingError U+FFC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC9");
    },
    Error,
    "EncodingError U+FFC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFCA");
    },
    Error,
    "EncodingError U+FFCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFCB");
    },
    Error,
    "EncodingError U+FFCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFCC");
    },
    Error,
    "EncodingError U+FFCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFCD");
    },
    Error,
    "EncodingError U+FFCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFCE");
    },
    Error,
    "EncodingError U+FFCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFCF");
    },
    Error,
    "EncodingError U+FFCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD0");
    },
    Error,
    "EncodingError U+FFD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD1");
    },
    Error,
    "EncodingError U+FFD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD2");
    },
    Error,
    "EncodingError U+FFD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD3");
    },
    Error,
    "EncodingError U+FFD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD4");
    },
    Error,
    "EncodingError U+FFD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD5");
    },
    Error,
    "EncodingError U+FFD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD6");
    },
    Error,
    "EncodingError U+FFD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD7");
    },
    Error,
    "EncodingError U+FFD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD8");
    },
    Error,
    "EncodingError U+FFD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD9");
    },
    Error,
    "EncodingError U+FFD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFDA");
    },
    Error,
    "EncodingError U+FFDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFDB");
    },
    Error,
    "EncodingError U+FFDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFDC");
    },
    Error,
    "EncodingError U+FFDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFDD");
    },
    Error,
    "EncodingError U+FFDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFDE");
    },
    Error,
    "EncodingError U+FFDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFDF");
    },
    Error,
    "EncodingError U+FFDF",
  );
  r = r &&
    ([...ms932Encoder.encode("￠￡￢￣￤￥")].join(",") ===
      "129,145,129,146,129,202,129,80,250,85,129,143"); // U+FFE0
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFE6");
    },
    Error,
    "EncodingError U+FFE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFE7");
    },
    Error,
    "EncodingError U+FFE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFE8");
    },
    Error,
    "EncodingError U+FFE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFE9");
    },
    Error,
    "EncodingError U+FFE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFEA");
    },
    Error,
    "EncodingError U+FFEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFEB");
    },
    Error,
    "EncodingError U+FFEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFEC");
    },
    Error,
    "EncodingError U+FFEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFED");
    },
    Error,
    "EncodingError U+FFED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFEE");
    },
    Error,
    "EncodingError U+FFEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFEF");
    },
    Error,
    "EncodingError U+FFEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF0");
    },
    Error,
    "EncodingError U+FFF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF1");
    },
    Error,
    "EncodingError U+FFF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF2");
    },
    Error,
    "EncodingError U+FFF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF3");
    },
    Error,
    "EncodingError U+FFF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF4");
    },
    Error,
    "EncodingError U+FFF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF5");
    },
    Error,
    "EncodingError U+FFF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF6");
    },
    Error,
    "EncodingError U+FFF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF7");
    },
    Error,
    "EncodingError U+FFF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF8");
    },
    Error,
    "EncodingError U+FFF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF9");
    },
    Error,
    "EncodingError U+FFF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFFA");
    },
    Error,
    "EncodingError U+FFFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFFB");
    },
    Error,
    "EncodingError U+FFFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFFC");
    },
    Error,
    "EncodingError U+FFFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFFD");
    },
    Error,
    "EncodingError U+FFFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFFE");
    },
    Error,
    "EncodingError U+FFFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFFF");
    },
    Error,
    "EncodingError U+FFFF",
  );

  assertStrictEquals(r, true);
});
