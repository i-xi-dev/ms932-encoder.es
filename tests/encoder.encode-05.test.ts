import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+4000-U+4FFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u4000");
    },
    Error,
    "encode-error: U+4000",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4001");
    },
    Error,
    "encode-error: U+4001",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4002");
    },
    Error,
    "encode-error: U+4002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4003");
    },
    Error,
    "encode-error: U+4003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4004");
    },
    Error,
    "encode-error: U+4004",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4005");
    },
    Error,
    "encode-error: U+4005",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4006");
    },
    Error,
    "encode-error: U+4006",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4007");
    },
    Error,
    "encode-error: U+4007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4008");
    },
    Error,
    "encode-error: U+4008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4009");
    },
    Error,
    "encode-error: U+4009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u400A");
    },
    Error,
    "encode-error: U+400A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u400B");
    },
    Error,
    "encode-error: U+400B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u400C");
    },
    Error,
    "encode-error: U+400C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u400D");
    },
    Error,
    "encode-error: U+400D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u400E");
    },
    Error,
    "encode-error: U+400E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u400F");
    },
    Error,
    "encode-error: U+400F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4010");
    },
    Error,
    "encode-error: U+4010",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4011");
    },
    Error,
    "encode-error: U+4011",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4012");
    },
    Error,
    "encode-error: U+4012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4013");
    },
    Error,
    "encode-error: U+4013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4014");
    },
    Error,
    "encode-error: U+4014",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4015");
    },
    Error,
    "encode-error: U+4015",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4016");
    },
    Error,
    "encode-error: U+4016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4017");
    },
    Error,
    "encode-error: U+4017",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4018");
    },
    Error,
    "encode-error: U+4018",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4019");
    },
    Error,
    "encode-error: U+4019",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u401A");
    },
    Error,
    "encode-error: U+401A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u401B");
    },
    Error,
    "encode-error: U+401B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u401C");
    },
    Error,
    "encode-error: U+401C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u401D");
    },
    Error,
    "encode-error: U+401D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u401E");
    },
    Error,
    "encode-error: U+401E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u401F");
    },
    Error,
    "encode-error: U+401F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4020");
    },
    Error,
    "encode-error: U+4020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4021");
    },
    Error,
    "encode-error: U+4021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4022");
    },
    Error,
    "encode-error: U+4022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4023");
    },
    Error,
    "encode-error: U+4023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4024");
    },
    Error,
    "encode-error: U+4024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4025");
    },
    Error,
    "encode-error: U+4025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4026");
    },
    Error,
    "encode-error: U+4026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4027");
    },
    Error,
    "encode-error: U+4027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4028");
    },
    Error,
    "encode-error: U+4028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4029");
    },
    Error,
    "encode-error: U+4029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u402A");
    },
    Error,
    "encode-error: U+402A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u402B");
    },
    Error,
    "encode-error: U+402B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u402C");
    },
    Error,
    "encode-error: U+402C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u402D");
    },
    Error,
    "encode-error: U+402D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u402E");
    },
    Error,
    "encode-error: U+402E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u402F");
    },
    Error,
    "encode-error: U+402F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4030");
    },
    Error,
    "encode-error: U+4030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4031");
    },
    Error,
    "encode-error: U+4031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4032");
    },
    Error,
    "encode-error: U+4032",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4033");
    },
    Error,
    "encode-error: U+4033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4034");
    },
    Error,
    "encode-error: U+4034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4035");
    },
    Error,
    "encode-error: U+4035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4036");
    },
    Error,
    "encode-error: U+4036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4037");
    },
    Error,
    "encode-error: U+4037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4038");
    },
    Error,
    "encode-error: U+4038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4039");
    },
    Error,
    "encode-error: U+4039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u403A");
    },
    Error,
    "encode-error: U+403A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u403B");
    },
    Error,
    "encode-error: U+403B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u403C");
    },
    Error,
    "encode-error: U+403C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u403D");
    },
    Error,
    "encode-error: U+403D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u403E");
    },
    Error,
    "encode-error: U+403E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u403F");
    },
    Error,
    "encode-error: U+403F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4040");
    },
    Error,
    "encode-error: U+4040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4041");
    },
    Error,
    "encode-error: U+4041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4042");
    },
    Error,
    "encode-error: U+4042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4043");
    },
    Error,
    "encode-error: U+4043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4044");
    },
    Error,
    "encode-error: U+4044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4045");
    },
    Error,
    "encode-error: U+4045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4046");
    },
    Error,
    "encode-error: U+4046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4047");
    },
    Error,
    "encode-error: U+4047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4048");
    },
    Error,
    "encode-error: U+4048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4049");
    },
    Error,
    "encode-error: U+4049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u404A");
    },
    Error,
    "encode-error: U+404A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u404B");
    },
    Error,
    "encode-error: U+404B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u404C");
    },
    Error,
    "encode-error: U+404C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u404D");
    },
    Error,
    "encode-error: U+404D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u404E");
    },
    Error,
    "encode-error: U+404E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u404F");
    },
    Error,
    "encode-error: U+404F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4050");
    },
    Error,
    "encode-error: U+4050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4051");
    },
    Error,
    "encode-error: U+4051",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4052");
    },
    Error,
    "encode-error: U+4052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4053");
    },
    Error,
    "encode-error: U+4053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4054");
    },
    Error,
    "encode-error: U+4054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4055");
    },
    Error,
    "encode-error: U+4055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4056");
    },
    Error,
    "encode-error: U+4056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4057");
    },
    Error,
    "encode-error: U+4057",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4058");
    },
    Error,
    "encode-error: U+4058",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4059");
    },
    Error,
    "encode-error: U+4059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u405A");
    },
    Error,
    "encode-error: U+405A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u405B");
    },
    Error,
    "encode-error: U+405B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u405C");
    },
    Error,
    "encode-error: U+405C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u405D");
    },
    Error,
    "encode-error: U+405D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u405E");
    },
    Error,
    "encode-error: U+405E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u405F");
    },
    Error,
    "encode-error: U+405F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4060");
    },
    Error,
    "encode-error: U+4060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4061");
    },
    Error,
    "encode-error: U+4061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4062");
    },
    Error,
    "encode-error: U+4062",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4063");
    },
    Error,
    "encode-error: U+4063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4064");
    },
    Error,
    "encode-error: U+4064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4065");
    },
    Error,
    "encode-error: U+4065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4066");
    },
    Error,
    "encode-error: U+4066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4067");
    },
    Error,
    "encode-error: U+4067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4068");
    },
    Error,
    "encode-error: U+4068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4069");
    },
    Error,
    "encode-error: U+4069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u406A");
    },
    Error,
    "encode-error: U+406A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u406B");
    },
    Error,
    "encode-error: U+406B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u406C");
    },
    Error,
    "encode-error: U+406C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u406D");
    },
    Error,
    "encode-error: U+406D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u406E");
    },
    Error,
    "encode-error: U+406E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u406F");
    },
    Error,
    "encode-error: U+406F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4070");
    },
    Error,
    "encode-error: U+4070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4071");
    },
    Error,
    "encode-error: U+4071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4072");
    },
    Error,
    "encode-error: U+4072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4073");
    },
    Error,
    "encode-error: U+4073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4074");
    },
    Error,
    "encode-error: U+4074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4075");
    },
    Error,
    "encode-error: U+4075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4076");
    },
    Error,
    "encode-error: U+4076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4077");
    },
    Error,
    "encode-error: U+4077",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4078");
    },
    Error,
    "encode-error: U+4078",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4079");
    },
    Error,
    "encode-error: U+4079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u407A");
    },
    Error,
    "encode-error: U+407A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u407B");
    },
    Error,
    "encode-error: U+407B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u407C");
    },
    Error,
    "encode-error: U+407C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u407D");
    },
    Error,
    "encode-error: U+407D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u407E");
    },
    Error,
    "encode-error: U+407E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u407F");
    },
    Error,
    "encode-error: U+407F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4080");
    },
    Error,
    "encode-error: U+4080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4081");
    },
    Error,
    "encode-error: U+4081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4082");
    },
    Error,
    "encode-error: U+4082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4083");
    },
    Error,
    "encode-error: U+4083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4084");
    },
    Error,
    "encode-error: U+4084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4085");
    },
    Error,
    "encode-error: U+4085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4086");
    },
    Error,
    "encode-error: U+4086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4087");
    },
    Error,
    "encode-error: U+4087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4088");
    },
    Error,
    "encode-error: U+4088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4089");
    },
    Error,
    "encode-error: U+4089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u408A");
    },
    Error,
    "encode-error: U+408A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u408B");
    },
    Error,
    "encode-error: U+408B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u408C");
    },
    Error,
    "encode-error: U+408C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u408D");
    },
    Error,
    "encode-error: U+408D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u408E");
    },
    Error,
    "encode-error: U+408E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u408F");
    },
    Error,
    "encode-error: U+408F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4090");
    },
    Error,
    "encode-error: U+4090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4091");
    },
    Error,
    "encode-error: U+4091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4092");
    },
    Error,
    "encode-error: U+4092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4093");
    },
    Error,
    "encode-error: U+4093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4094");
    },
    Error,
    "encode-error: U+4094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4095");
    },
    Error,
    "encode-error: U+4095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4096");
    },
    Error,
    "encode-error: U+4096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4097");
    },
    Error,
    "encode-error: U+4097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4098");
    },
    Error,
    "encode-error: U+4098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4099");
    },
    Error,
    "encode-error: U+4099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u409A");
    },
    Error,
    "encode-error: U+409A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u409B");
    },
    Error,
    "encode-error: U+409B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u409C");
    },
    Error,
    "encode-error: U+409C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u409D");
    },
    Error,
    "encode-error: U+409D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u409E");
    },
    Error,
    "encode-error: U+409E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u409F");
    },
    Error,
    "encode-error: U+409F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40A0");
    },
    Error,
    "encode-error: U+40A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40A1");
    },
    Error,
    "encode-error: U+40A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40A2");
    },
    Error,
    "encode-error: U+40A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40A3");
    },
    Error,
    "encode-error: U+40A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40A4");
    },
    Error,
    "encode-error: U+40A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40A5");
    },
    Error,
    "encode-error: U+40A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40A6");
    },
    Error,
    "encode-error: U+40A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40A7");
    },
    Error,
    "encode-error: U+40A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40A8");
    },
    Error,
    "encode-error: U+40A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40A9");
    },
    Error,
    "encode-error: U+40A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40AA");
    },
    Error,
    "encode-error: U+40AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40AB");
    },
    Error,
    "encode-error: U+40AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40AC");
    },
    Error,
    "encode-error: U+40AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40AD");
    },
    Error,
    "encode-error: U+40AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40AE");
    },
    Error,
    "encode-error: U+40AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40AF");
    },
    Error,
    "encode-error: U+40AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40B0");
    },
    Error,
    "encode-error: U+40B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40B1");
    },
    Error,
    "encode-error: U+40B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40B2");
    },
    Error,
    "encode-error: U+40B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40B3");
    },
    Error,
    "encode-error: U+40B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40B4");
    },
    Error,
    "encode-error: U+40B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40B5");
    },
    Error,
    "encode-error: U+40B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40B6");
    },
    Error,
    "encode-error: U+40B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40B7");
    },
    Error,
    "encode-error: U+40B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40B8");
    },
    Error,
    "encode-error: U+40B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40B9");
    },
    Error,
    "encode-error: U+40B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40BA");
    },
    Error,
    "encode-error: U+40BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40BB");
    },
    Error,
    "encode-error: U+40BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40BC");
    },
    Error,
    "encode-error: U+40BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40BD");
    },
    Error,
    "encode-error: U+40BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40BE");
    },
    Error,
    "encode-error: U+40BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40BF");
    },
    Error,
    "encode-error: U+40BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40C0");
    },
    Error,
    "encode-error: U+40C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40C1");
    },
    Error,
    "encode-error: U+40C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40C2");
    },
    Error,
    "encode-error: U+40C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40C3");
    },
    Error,
    "encode-error: U+40C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40C4");
    },
    Error,
    "encode-error: U+40C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40C5");
    },
    Error,
    "encode-error: U+40C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40C6");
    },
    Error,
    "encode-error: U+40C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40C7");
    },
    Error,
    "encode-error: U+40C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40C8");
    },
    Error,
    "encode-error: U+40C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40C9");
    },
    Error,
    "encode-error: U+40C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40CA");
    },
    Error,
    "encode-error: U+40CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40CB");
    },
    Error,
    "encode-error: U+40CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40CC");
    },
    Error,
    "encode-error: U+40CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40CD");
    },
    Error,
    "encode-error: U+40CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40CE");
    },
    Error,
    "encode-error: U+40CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40CF");
    },
    Error,
    "encode-error: U+40CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40D0");
    },
    Error,
    "encode-error: U+40D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40D1");
    },
    Error,
    "encode-error: U+40D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40D2");
    },
    Error,
    "encode-error: U+40D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40D3");
    },
    Error,
    "encode-error: U+40D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40D4");
    },
    Error,
    "encode-error: U+40D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40D5");
    },
    Error,
    "encode-error: U+40D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40D6");
    },
    Error,
    "encode-error: U+40D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40D7");
    },
    Error,
    "encode-error: U+40D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40D8");
    },
    Error,
    "encode-error: U+40D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40D9");
    },
    Error,
    "encode-error: U+40D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40DA");
    },
    Error,
    "encode-error: U+40DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40DB");
    },
    Error,
    "encode-error: U+40DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40DC");
    },
    Error,
    "encode-error: U+40DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40DD");
    },
    Error,
    "encode-error: U+40DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40DE");
    },
    Error,
    "encode-error: U+40DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40DF");
    },
    Error,
    "encode-error: U+40DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40E0");
    },
    Error,
    "encode-error: U+40E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40E1");
    },
    Error,
    "encode-error: U+40E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40E2");
    },
    Error,
    "encode-error: U+40E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40E3");
    },
    Error,
    "encode-error: U+40E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40E4");
    },
    Error,
    "encode-error: U+40E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40E5");
    },
    Error,
    "encode-error: U+40E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40E6");
    },
    Error,
    "encode-error: U+40E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40E7");
    },
    Error,
    "encode-error: U+40E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40E8");
    },
    Error,
    "encode-error: U+40E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40E9");
    },
    Error,
    "encode-error: U+40E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40EA");
    },
    Error,
    "encode-error: U+40EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40EB");
    },
    Error,
    "encode-error: U+40EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40EC");
    },
    Error,
    "encode-error: U+40EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40ED");
    },
    Error,
    "encode-error: U+40ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40EE");
    },
    Error,
    "encode-error: U+40EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40EF");
    },
    Error,
    "encode-error: U+40EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40F0");
    },
    Error,
    "encode-error: U+40F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40F1");
    },
    Error,
    "encode-error: U+40F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40F2");
    },
    Error,
    "encode-error: U+40F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40F3");
    },
    Error,
    "encode-error: U+40F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40F4");
    },
    Error,
    "encode-error: U+40F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40F5");
    },
    Error,
    "encode-error: U+40F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40F6");
    },
    Error,
    "encode-error: U+40F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40F7");
    },
    Error,
    "encode-error: U+40F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40F8");
    },
    Error,
    "encode-error: U+40F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40F9");
    },
    Error,
    "encode-error: U+40F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40FA");
    },
    Error,
    "encode-error: U+40FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40FB");
    },
    Error,
    "encode-error: U+40FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40FC");
    },
    Error,
    "encode-error: U+40FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40FD");
    },
    Error,
    "encode-error: U+40FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40FE");
    },
    Error,
    "encode-error: U+40FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u40FF");
    },
    Error,
    "encode-error: U+40FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4100");
    },
    Error,
    "encode-error: U+4100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4101");
    },
    Error,
    "encode-error: U+4101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4102");
    },
    Error,
    "encode-error: U+4102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4103");
    },
    Error,
    "encode-error: U+4103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4104");
    },
    Error,
    "encode-error: U+4104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4105");
    },
    Error,
    "encode-error: U+4105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4106");
    },
    Error,
    "encode-error: U+4106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4107");
    },
    Error,
    "encode-error: U+4107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4108");
    },
    Error,
    "encode-error: U+4108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4109");
    },
    Error,
    "encode-error: U+4109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u410A");
    },
    Error,
    "encode-error: U+410A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u410B");
    },
    Error,
    "encode-error: U+410B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u410C");
    },
    Error,
    "encode-error: U+410C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u410D");
    },
    Error,
    "encode-error: U+410D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u410E");
    },
    Error,
    "encode-error: U+410E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u410F");
    },
    Error,
    "encode-error: U+410F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4110");
    },
    Error,
    "encode-error: U+4110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4111");
    },
    Error,
    "encode-error: U+4111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4112");
    },
    Error,
    "encode-error: U+4112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4113");
    },
    Error,
    "encode-error: U+4113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4114");
    },
    Error,
    "encode-error: U+4114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4115");
    },
    Error,
    "encode-error: U+4115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4116");
    },
    Error,
    "encode-error: U+4116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4117");
    },
    Error,
    "encode-error: U+4117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4118");
    },
    Error,
    "encode-error: U+4118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4119");
    },
    Error,
    "encode-error: U+4119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u411A");
    },
    Error,
    "encode-error: U+411A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u411B");
    },
    Error,
    "encode-error: U+411B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u411C");
    },
    Error,
    "encode-error: U+411C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u411D");
    },
    Error,
    "encode-error: U+411D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u411E");
    },
    Error,
    "encode-error: U+411E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u411F");
    },
    Error,
    "encode-error: U+411F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4120");
    },
    Error,
    "encode-error: U+4120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4121");
    },
    Error,
    "encode-error: U+4121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4122");
    },
    Error,
    "encode-error: U+4122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4123");
    },
    Error,
    "encode-error: U+4123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4124");
    },
    Error,
    "encode-error: U+4124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4125");
    },
    Error,
    "encode-error: U+4125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4126");
    },
    Error,
    "encode-error: U+4126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4127");
    },
    Error,
    "encode-error: U+4127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4128");
    },
    Error,
    "encode-error: U+4128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4129");
    },
    Error,
    "encode-error: U+4129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u412A");
    },
    Error,
    "encode-error: U+412A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u412B");
    },
    Error,
    "encode-error: U+412B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u412C");
    },
    Error,
    "encode-error: U+412C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u412D");
    },
    Error,
    "encode-error: U+412D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u412E");
    },
    Error,
    "encode-error: U+412E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u412F");
    },
    Error,
    "encode-error: U+412F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4130");
    },
    Error,
    "encode-error: U+4130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4131");
    },
    Error,
    "encode-error: U+4131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4132");
    },
    Error,
    "encode-error: U+4132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4133");
    },
    Error,
    "encode-error: U+4133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4134");
    },
    Error,
    "encode-error: U+4134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4135");
    },
    Error,
    "encode-error: U+4135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4136");
    },
    Error,
    "encode-error: U+4136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4137");
    },
    Error,
    "encode-error: U+4137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4138");
    },
    Error,
    "encode-error: U+4138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4139");
    },
    Error,
    "encode-error: U+4139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u413A");
    },
    Error,
    "encode-error: U+413A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u413B");
    },
    Error,
    "encode-error: U+413B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u413C");
    },
    Error,
    "encode-error: U+413C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u413D");
    },
    Error,
    "encode-error: U+413D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u413E");
    },
    Error,
    "encode-error: U+413E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u413F");
    },
    Error,
    "encode-error: U+413F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4140");
    },
    Error,
    "encode-error: U+4140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4141");
    },
    Error,
    "encode-error: U+4141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4142");
    },
    Error,
    "encode-error: U+4142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4143");
    },
    Error,
    "encode-error: U+4143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4144");
    },
    Error,
    "encode-error: U+4144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4145");
    },
    Error,
    "encode-error: U+4145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4146");
    },
    Error,
    "encode-error: U+4146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4147");
    },
    Error,
    "encode-error: U+4147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4148");
    },
    Error,
    "encode-error: U+4148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4149");
    },
    Error,
    "encode-error: U+4149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u414A");
    },
    Error,
    "encode-error: U+414A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u414B");
    },
    Error,
    "encode-error: U+414B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u414C");
    },
    Error,
    "encode-error: U+414C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u414D");
    },
    Error,
    "encode-error: U+414D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u414E");
    },
    Error,
    "encode-error: U+414E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u414F");
    },
    Error,
    "encode-error: U+414F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4150");
    },
    Error,
    "encode-error: U+4150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4151");
    },
    Error,
    "encode-error: U+4151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4152");
    },
    Error,
    "encode-error: U+4152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4153");
    },
    Error,
    "encode-error: U+4153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4154");
    },
    Error,
    "encode-error: U+4154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4155");
    },
    Error,
    "encode-error: U+4155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4156");
    },
    Error,
    "encode-error: U+4156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4157");
    },
    Error,
    "encode-error: U+4157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4158");
    },
    Error,
    "encode-error: U+4158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4159");
    },
    Error,
    "encode-error: U+4159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u415A");
    },
    Error,
    "encode-error: U+415A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u415B");
    },
    Error,
    "encode-error: U+415B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u415C");
    },
    Error,
    "encode-error: U+415C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u415D");
    },
    Error,
    "encode-error: U+415D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u415E");
    },
    Error,
    "encode-error: U+415E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u415F");
    },
    Error,
    "encode-error: U+415F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4160");
    },
    Error,
    "encode-error: U+4160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4161");
    },
    Error,
    "encode-error: U+4161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4162");
    },
    Error,
    "encode-error: U+4162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4163");
    },
    Error,
    "encode-error: U+4163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4164");
    },
    Error,
    "encode-error: U+4164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4165");
    },
    Error,
    "encode-error: U+4165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4166");
    },
    Error,
    "encode-error: U+4166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4167");
    },
    Error,
    "encode-error: U+4167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4168");
    },
    Error,
    "encode-error: U+4168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4169");
    },
    Error,
    "encode-error: U+4169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u416A");
    },
    Error,
    "encode-error: U+416A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u416B");
    },
    Error,
    "encode-error: U+416B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u416C");
    },
    Error,
    "encode-error: U+416C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u416D");
    },
    Error,
    "encode-error: U+416D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u416E");
    },
    Error,
    "encode-error: U+416E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u416F");
    },
    Error,
    "encode-error: U+416F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4170");
    },
    Error,
    "encode-error: U+4170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4171");
    },
    Error,
    "encode-error: U+4171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4172");
    },
    Error,
    "encode-error: U+4172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4173");
    },
    Error,
    "encode-error: U+4173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4174");
    },
    Error,
    "encode-error: U+4174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4175");
    },
    Error,
    "encode-error: U+4175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4176");
    },
    Error,
    "encode-error: U+4176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4177");
    },
    Error,
    "encode-error: U+4177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4178");
    },
    Error,
    "encode-error: U+4178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4179");
    },
    Error,
    "encode-error: U+4179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u417A");
    },
    Error,
    "encode-error: U+417A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u417B");
    },
    Error,
    "encode-error: U+417B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u417C");
    },
    Error,
    "encode-error: U+417C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u417D");
    },
    Error,
    "encode-error: U+417D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u417E");
    },
    Error,
    "encode-error: U+417E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u417F");
    },
    Error,
    "encode-error: U+417F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4180");
    },
    Error,
    "encode-error: U+4180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4181");
    },
    Error,
    "encode-error: U+4181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4182");
    },
    Error,
    "encode-error: U+4182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4183");
    },
    Error,
    "encode-error: U+4183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4184");
    },
    Error,
    "encode-error: U+4184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4185");
    },
    Error,
    "encode-error: U+4185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4186");
    },
    Error,
    "encode-error: U+4186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4187");
    },
    Error,
    "encode-error: U+4187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4188");
    },
    Error,
    "encode-error: U+4188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4189");
    },
    Error,
    "encode-error: U+4189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u418A");
    },
    Error,
    "encode-error: U+418A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u418B");
    },
    Error,
    "encode-error: U+418B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u418C");
    },
    Error,
    "encode-error: U+418C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u418D");
    },
    Error,
    "encode-error: U+418D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u418E");
    },
    Error,
    "encode-error: U+418E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u418F");
    },
    Error,
    "encode-error: U+418F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4190");
    },
    Error,
    "encode-error: U+4190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4191");
    },
    Error,
    "encode-error: U+4191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4192");
    },
    Error,
    "encode-error: U+4192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4193");
    },
    Error,
    "encode-error: U+4193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4194");
    },
    Error,
    "encode-error: U+4194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4195");
    },
    Error,
    "encode-error: U+4195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4196");
    },
    Error,
    "encode-error: U+4196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4197");
    },
    Error,
    "encode-error: U+4197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4198");
    },
    Error,
    "encode-error: U+4198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4199");
    },
    Error,
    "encode-error: U+4199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u419A");
    },
    Error,
    "encode-error: U+419A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u419B");
    },
    Error,
    "encode-error: U+419B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u419C");
    },
    Error,
    "encode-error: U+419C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u419D");
    },
    Error,
    "encode-error: U+419D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u419E");
    },
    Error,
    "encode-error: U+419E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u419F");
    },
    Error,
    "encode-error: U+419F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41A0");
    },
    Error,
    "encode-error: U+41A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41A1");
    },
    Error,
    "encode-error: U+41A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41A2");
    },
    Error,
    "encode-error: U+41A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41A3");
    },
    Error,
    "encode-error: U+41A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41A4");
    },
    Error,
    "encode-error: U+41A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41A5");
    },
    Error,
    "encode-error: U+41A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41A6");
    },
    Error,
    "encode-error: U+41A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41A7");
    },
    Error,
    "encode-error: U+41A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41A8");
    },
    Error,
    "encode-error: U+41A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41A9");
    },
    Error,
    "encode-error: U+41A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41AA");
    },
    Error,
    "encode-error: U+41AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41AB");
    },
    Error,
    "encode-error: U+41AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41AC");
    },
    Error,
    "encode-error: U+41AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41AD");
    },
    Error,
    "encode-error: U+41AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41AE");
    },
    Error,
    "encode-error: U+41AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41AF");
    },
    Error,
    "encode-error: U+41AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41B0");
    },
    Error,
    "encode-error: U+41B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41B1");
    },
    Error,
    "encode-error: U+41B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41B2");
    },
    Error,
    "encode-error: U+41B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41B3");
    },
    Error,
    "encode-error: U+41B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41B4");
    },
    Error,
    "encode-error: U+41B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41B5");
    },
    Error,
    "encode-error: U+41B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41B6");
    },
    Error,
    "encode-error: U+41B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41B7");
    },
    Error,
    "encode-error: U+41B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41B8");
    },
    Error,
    "encode-error: U+41B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41B9");
    },
    Error,
    "encode-error: U+41B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41BA");
    },
    Error,
    "encode-error: U+41BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41BB");
    },
    Error,
    "encode-error: U+41BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41BC");
    },
    Error,
    "encode-error: U+41BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41BD");
    },
    Error,
    "encode-error: U+41BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41BE");
    },
    Error,
    "encode-error: U+41BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41BF");
    },
    Error,
    "encode-error: U+41BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41C0");
    },
    Error,
    "encode-error: U+41C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41C1");
    },
    Error,
    "encode-error: U+41C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41C2");
    },
    Error,
    "encode-error: U+41C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41C3");
    },
    Error,
    "encode-error: U+41C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41C4");
    },
    Error,
    "encode-error: U+41C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41C5");
    },
    Error,
    "encode-error: U+41C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41C6");
    },
    Error,
    "encode-error: U+41C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41C7");
    },
    Error,
    "encode-error: U+41C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41C8");
    },
    Error,
    "encode-error: U+41C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41C9");
    },
    Error,
    "encode-error: U+41C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41CA");
    },
    Error,
    "encode-error: U+41CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41CB");
    },
    Error,
    "encode-error: U+41CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41CC");
    },
    Error,
    "encode-error: U+41CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41CD");
    },
    Error,
    "encode-error: U+41CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41CE");
    },
    Error,
    "encode-error: U+41CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41CF");
    },
    Error,
    "encode-error: U+41CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41D0");
    },
    Error,
    "encode-error: U+41D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41D1");
    },
    Error,
    "encode-error: U+41D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41D2");
    },
    Error,
    "encode-error: U+41D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41D3");
    },
    Error,
    "encode-error: U+41D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41D4");
    },
    Error,
    "encode-error: U+41D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41D5");
    },
    Error,
    "encode-error: U+41D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41D6");
    },
    Error,
    "encode-error: U+41D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41D7");
    },
    Error,
    "encode-error: U+41D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41D8");
    },
    Error,
    "encode-error: U+41D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41D9");
    },
    Error,
    "encode-error: U+41D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41DA");
    },
    Error,
    "encode-error: U+41DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41DB");
    },
    Error,
    "encode-error: U+41DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41DC");
    },
    Error,
    "encode-error: U+41DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41DD");
    },
    Error,
    "encode-error: U+41DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41DE");
    },
    Error,
    "encode-error: U+41DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41DF");
    },
    Error,
    "encode-error: U+41DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41E0");
    },
    Error,
    "encode-error: U+41E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41E1");
    },
    Error,
    "encode-error: U+41E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41E2");
    },
    Error,
    "encode-error: U+41E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41E3");
    },
    Error,
    "encode-error: U+41E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41E4");
    },
    Error,
    "encode-error: U+41E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41E5");
    },
    Error,
    "encode-error: U+41E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41E6");
    },
    Error,
    "encode-error: U+41E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41E7");
    },
    Error,
    "encode-error: U+41E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41E8");
    },
    Error,
    "encode-error: U+41E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41E9");
    },
    Error,
    "encode-error: U+41E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41EA");
    },
    Error,
    "encode-error: U+41EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41EB");
    },
    Error,
    "encode-error: U+41EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41EC");
    },
    Error,
    "encode-error: U+41EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41ED");
    },
    Error,
    "encode-error: U+41ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41EE");
    },
    Error,
    "encode-error: U+41EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41EF");
    },
    Error,
    "encode-error: U+41EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41F0");
    },
    Error,
    "encode-error: U+41F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41F1");
    },
    Error,
    "encode-error: U+41F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41F2");
    },
    Error,
    "encode-error: U+41F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41F3");
    },
    Error,
    "encode-error: U+41F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41F4");
    },
    Error,
    "encode-error: U+41F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41F5");
    },
    Error,
    "encode-error: U+41F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41F6");
    },
    Error,
    "encode-error: U+41F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41F7");
    },
    Error,
    "encode-error: U+41F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41F8");
    },
    Error,
    "encode-error: U+41F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41F9");
    },
    Error,
    "encode-error: U+41F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41FA");
    },
    Error,
    "encode-error: U+41FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41FB");
    },
    Error,
    "encode-error: U+41FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41FC");
    },
    Error,
    "encode-error: U+41FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41FD");
    },
    Error,
    "encode-error: U+41FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41FE");
    },
    Error,
    "encode-error: U+41FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u41FF");
    },
    Error,
    "encode-error: U+41FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4200");
    },
    Error,
    "encode-error: U+4200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4201");
    },
    Error,
    "encode-error: U+4201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4202");
    },
    Error,
    "encode-error: U+4202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4203");
    },
    Error,
    "encode-error: U+4203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4204");
    },
    Error,
    "encode-error: U+4204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4205");
    },
    Error,
    "encode-error: U+4205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4206");
    },
    Error,
    "encode-error: U+4206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4207");
    },
    Error,
    "encode-error: U+4207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4208");
    },
    Error,
    "encode-error: U+4208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4209");
    },
    Error,
    "encode-error: U+4209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u420A");
    },
    Error,
    "encode-error: U+420A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u420B");
    },
    Error,
    "encode-error: U+420B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u420C");
    },
    Error,
    "encode-error: U+420C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u420D");
    },
    Error,
    "encode-error: U+420D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u420E");
    },
    Error,
    "encode-error: U+420E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u420F");
    },
    Error,
    "encode-error: U+420F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4210");
    },
    Error,
    "encode-error: U+4210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4211");
    },
    Error,
    "encode-error: U+4211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4212");
    },
    Error,
    "encode-error: U+4212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4213");
    },
    Error,
    "encode-error: U+4213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4214");
    },
    Error,
    "encode-error: U+4214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4215");
    },
    Error,
    "encode-error: U+4215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4216");
    },
    Error,
    "encode-error: U+4216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4217");
    },
    Error,
    "encode-error: U+4217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4218");
    },
    Error,
    "encode-error: U+4218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4219");
    },
    Error,
    "encode-error: U+4219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u421A");
    },
    Error,
    "encode-error: U+421A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u421B");
    },
    Error,
    "encode-error: U+421B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u421C");
    },
    Error,
    "encode-error: U+421C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u421D");
    },
    Error,
    "encode-error: U+421D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u421E");
    },
    Error,
    "encode-error: U+421E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u421F");
    },
    Error,
    "encode-error: U+421F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4220");
    },
    Error,
    "encode-error: U+4220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4221");
    },
    Error,
    "encode-error: U+4221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4222");
    },
    Error,
    "encode-error: U+4222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4223");
    },
    Error,
    "encode-error: U+4223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4224");
    },
    Error,
    "encode-error: U+4224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4225");
    },
    Error,
    "encode-error: U+4225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4226");
    },
    Error,
    "encode-error: U+4226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4227");
    },
    Error,
    "encode-error: U+4227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4228");
    },
    Error,
    "encode-error: U+4228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4229");
    },
    Error,
    "encode-error: U+4229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u422A");
    },
    Error,
    "encode-error: U+422A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u422B");
    },
    Error,
    "encode-error: U+422B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u422C");
    },
    Error,
    "encode-error: U+422C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u422D");
    },
    Error,
    "encode-error: U+422D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u422E");
    },
    Error,
    "encode-error: U+422E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u422F");
    },
    Error,
    "encode-error: U+422F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4230");
    },
    Error,
    "encode-error: U+4230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4231");
    },
    Error,
    "encode-error: U+4231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4232");
    },
    Error,
    "encode-error: U+4232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4233");
    },
    Error,
    "encode-error: U+4233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4234");
    },
    Error,
    "encode-error: U+4234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4235");
    },
    Error,
    "encode-error: U+4235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4236");
    },
    Error,
    "encode-error: U+4236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4237");
    },
    Error,
    "encode-error: U+4237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4238");
    },
    Error,
    "encode-error: U+4238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4239");
    },
    Error,
    "encode-error: U+4239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u423A");
    },
    Error,
    "encode-error: U+423A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u423B");
    },
    Error,
    "encode-error: U+423B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u423C");
    },
    Error,
    "encode-error: U+423C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u423D");
    },
    Error,
    "encode-error: U+423D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u423E");
    },
    Error,
    "encode-error: U+423E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u423F");
    },
    Error,
    "encode-error: U+423F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4240");
    },
    Error,
    "encode-error: U+4240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4241");
    },
    Error,
    "encode-error: U+4241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4242");
    },
    Error,
    "encode-error: U+4242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4243");
    },
    Error,
    "encode-error: U+4243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4244");
    },
    Error,
    "encode-error: U+4244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4245");
    },
    Error,
    "encode-error: U+4245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4246");
    },
    Error,
    "encode-error: U+4246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4247");
    },
    Error,
    "encode-error: U+4247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4248");
    },
    Error,
    "encode-error: U+4248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4249");
    },
    Error,
    "encode-error: U+4249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u424A");
    },
    Error,
    "encode-error: U+424A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u424B");
    },
    Error,
    "encode-error: U+424B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u424C");
    },
    Error,
    "encode-error: U+424C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u424D");
    },
    Error,
    "encode-error: U+424D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u424E");
    },
    Error,
    "encode-error: U+424E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u424F");
    },
    Error,
    "encode-error: U+424F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4250");
    },
    Error,
    "encode-error: U+4250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4251");
    },
    Error,
    "encode-error: U+4251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4252");
    },
    Error,
    "encode-error: U+4252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4253");
    },
    Error,
    "encode-error: U+4253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4254");
    },
    Error,
    "encode-error: U+4254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4255");
    },
    Error,
    "encode-error: U+4255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4256");
    },
    Error,
    "encode-error: U+4256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4257");
    },
    Error,
    "encode-error: U+4257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4258");
    },
    Error,
    "encode-error: U+4258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4259");
    },
    Error,
    "encode-error: U+4259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u425A");
    },
    Error,
    "encode-error: U+425A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u425B");
    },
    Error,
    "encode-error: U+425B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u425C");
    },
    Error,
    "encode-error: U+425C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u425D");
    },
    Error,
    "encode-error: U+425D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u425E");
    },
    Error,
    "encode-error: U+425E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u425F");
    },
    Error,
    "encode-error: U+425F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4260");
    },
    Error,
    "encode-error: U+4260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4261");
    },
    Error,
    "encode-error: U+4261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4262");
    },
    Error,
    "encode-error: U+4262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4263");
    },
    Error,
    "encode-error: U+4263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4264");
    },
    Error,
    "encode-error: U+4264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4265");
    },
    Error,
    "encode-error: U+4265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4266");
    },
    Error,
    "encode-error: U+4266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4267");
    },
    Error,
    "encode-error: U+4267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4268");
    },
    Error,
    "encode-error: U+4268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4269");
    },
    Error,
    "encode-error: U+4269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u426A");
    },
    Error,
    "encode-error: U+426A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u426B");
    },
    Error,
    "encode-error: U+426B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u426C");
    },
    Error,
    "encode-error: U+426C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u426D");
    },
    Error,
    "encode-error: U+426D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u426E");
    },
    Error,
    "encode-error: U+426E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u426F");
    },
    Error,
    "encode-error: U+426F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4270");
    },
    Error,
    "encode-error: U+4270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4271");
    },
    Error,
    "encode-error: U+4271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4272");
    },
    Error,
    "encode-error: U+4272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4273");
    },
    Error,
    "encode-error: U+4273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4274");
    },
    Error,
    "encode-error: U+4274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4275");
    },
    Error,
    "encode-error: U+4275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4276");
    },
    Error,
    "encode-error: U+4276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4277");
    },
    Error,
    "encode-error: U+4277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4278");
    },
    Error,
    "encode-error: U+4278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4279");
    },
    Error,
    "encode-error: U+4279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u427A");
    },
    Error,
    "encode-error: U+427A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u427B");
    },
    Error,
    "encode-error: U+427B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u427C");
    },
    Error,
    "encode-error: U+427C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u427D");
    },
    Error,
    "encode-error: U+427D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u427E");
    },
    Error,
    "encode-error: U+427E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u427F");
    },
    Error,
    "encode-error: U+427F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4280");
    },
    Error,
    "encode-error: U+4280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4281");
    },
    Error,
    "encode-error: U+4281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4282");
    },
    Error,
    "encode-error: U+4282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4283");
    },
    Error,
    "encode-error: U+4283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4284");
    },
    Error,
    "encode-error: U+4284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4285");
    },
    Error,
    "encode-error: U+4285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4286");
    },
    Error,
    "encode-error: U+4286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4287");
    },
    Error,
    "encode-error: U+4287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4288");
    },
    Error,
    "encode-error: U+4288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4289");
    },
    Error,
    "encode-error: U+4289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u428A");
    },
    Error,
    "encode-error: U+428A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u428B");
    },
    Error,
    "encode-error: U+428B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u428C");
    },
    Error,
    "encode-error: U+428C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u428D");
    },
    Error,
    "encode-error: U+428D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u428E");
    },
    Error,
    "encode-error: U+428E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u428F");
    },
    Error,
    "encode-error: U+428F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4290");
    },
    Error,
    "encode-error: U+4290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4291");
    },
    Error,
    "encode-error: U+4291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4292");
    },
    Error,
    "encode-error: U+4292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4293");
    },
    Error,
    "encode-error: U+4293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4294");
    },
    Error,
    "encode-error: U+4294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4295");
    },
    Error,
    "encode-error: U+4295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4296");
    },
    Error,
    "encode-error: U+4296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4297");
    },
    Error,
    "encode-error: U+4297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4298");
    },
    Error,
    "encode-error: U+4298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4299");
    },
    Error,
    "encode-error: U+4299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u429A");
    },
    Error,
    "encode-error: U+429A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u429B");
    },
    Error,
    "encode-error: U+429B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u429C");
    },
    Error,
    "encode-error: U+429C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u429D");
    },
    Error,
    "encode-error: U+429D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u429E");
    },
    Error,
    "encode-error: U+429E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u429F");
    },
    Error,
    "encode-error: U+429F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42A0");
    },
    Error,
    "encode-error: U+42A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42A1");
    },
    Error,
    "encode-error: U+42A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42A2");
    },
    Error,
    "encode-error: U+42A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42A3");
    },
    Error,
    "encode-error: U+42A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42A4");
    },
    Error,
    "encode-error: U+42A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42A5");
    },
    Error,
    "encode-error: U+42A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42A6");
    },
    Error,
    "encode-error: U+42A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42A7");
    },
    Error,
    "encode-error: U+42A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42A8");
    },
    Error,
    "encode-error: U+42A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42A9");
    },
    Error,
    "encode-error: U+42A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42AA");
    },
    Error,
    "encode-error: U+42AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42AB");
    },
    Error,
    "encode-error: U+42AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42AC");
    },
    Error,
    "encode-error: U+42AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42AD");
    },
    Error,
    "encode-error: U+42AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42AE");
    },
    Error,
    "encode-error: U+42AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42AF");
    },
    Error,
    "encode-error: U+42AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42B0");
    },
    Error,
    "encode-error: U+42B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42B1");
    },
    Error,
    "encode-error: U+42B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42B2");
    },
    Error,
    "encode-error: U+42B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42B3");
    },
    Error,
    "encode-error: U+42B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42B4");
    },
    Error,
    "encode-error: U+42B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42B5");
    },
    Error,
    "encode-error: U+42B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42B6");
    },
    Error,
    "encode-error: U+42B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42B7");
    },
    Error,
    "encode-error: U+42B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42B8");
    },
    Error,
    "encode-error: U+42B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42B9");
    },
    Error,
    "encode-error: U+42B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42BA");
    },
    Error,
    "encode-error: U+42BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42BB");
    },
    Error,
    "encode-error: U+42BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42BC");
    },
    Error,
    "encode-error: U+42BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42BD");
    },
    Error,
    "encode-error: U+42BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42BE");
    },
    Error,
    "encode-error: U+42BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42BF");
    },
    Error,
    "encode-error: U+42BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42C0");
    },
    Error,
    "encode-error: U+42C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42C1");
    },
    Error,
    "encode-error: U+42C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42C2");
    },
    Error,
    "encode-error: U+42C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42C3");
    },
    Error,
    "encode-error: U+42C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42C4");
    },
    Error,
    "encode-error: U+42C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42C5");
    },
    Error,
    "encode-error: U+42C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42C6");
    },
    Error,
    "encode-error: U+42C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42C7");
    },
    Error,
    "encode-error: U+42C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42C8");
    },
    Error,
    "encode-error: U+42C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42C9");
    },
    Error,
    "encode-error: U+42C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42CA");
    },
    Error,
    "encode-error: U+42CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42CB");
    },
    Error,
    "encode-error: U+42CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42CC");
    },
    Error,
    "encode-error: U+42CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42CD");
    },
    Error,
    "encode-error: U+42CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42CE");
    },
    Error,
    "encode-error: U+42CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42CF");
    },
    Error,
    "encode-error: U+42CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42D0");
    },
    Error,
    "encode-error: U+42D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42D1");
    },
    Error,
    "encode-error: U+42D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42D2");
    },
    Error,
    "encode-error: U+42D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42D3");
    },
    Error,
    "encode-error: U+42D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42D4");
    },
    Error,
    "encode-error: U+42D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42D5");
    },
    Error,
    "encode-error: U+42D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42D6");
    },
    Error,
    "encode-error: U+42D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42D7");
    },
    Error,
    "encode-error: U+42D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42D8");
    },
    Error,
    "encode-error: U+42D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42D9");
    },
    Error,
    "encode-error: U+42D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42DA");
    },
    Error,
    "encode-error: U+42DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42DB");
    },
    Error,
    "encode-error: U+42DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42DC");
    },
    Error,
    "encode-error: U+42DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42DD");
    },
    Error,
    "encode-error: U+42DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42DE");
    },
    Error,
    "encode-error: U+42DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42DF");
    },
    Error,
    "encode-error: U+42DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42E0");
    },
    Error,
    "encode-error: U+42E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42E1");
    },
    Error,
    "encode-error: U+42E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42E2");
    },
    Error,
    "encode-error: U+42E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42E3");
    },
    Error,
    "encode-error: U+42E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42E4");
    },
    Error,
    "encode-error: U+42E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42E5");
    },
    Error,
    "encode-error: U+42E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42E6");
    },
    Error,
    "encode-error: U+42E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42E7");
    },
    Error,
    "encode-error: U+42E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42E8");
    },
    Error,
    "encode-error: U+42E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42E9");
    },
    Error,
    "encode-error: U+42E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42EA");
    },
    Error,
    "encode-error: U+42EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42EB");
    },
    Error,
    "encode-error: U+42EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42EC");
    },
    Error,
    "encode-error: U+42EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42ED");
    },
    Error,
    "encode-error: U+42ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42EE");
    },
    Error,
    "encode-error: U+42EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42EF");
    },
    Error,
    "encode-error: U+42EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42F0");
    },
    Error,
    "encode-error: U+42F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42F1");
    },
    Error,
    "encode-error: U+42F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42F2");
    },
    Error,
    "encode-error: U+42F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42F3");
    },
    Error,
    "encode-error: U+42F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42F4");
    },
    Error,
    "encode-error: U+42F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42F5");
    },
    Error,
    "encode-error: U+42F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42F6");
    },
    Error,
    "encode-error: U+42F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42F7");
    },
    Error,
    "encode-error: U+42F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42F8");
    },
    Error,
    "encode-error: U+42F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42F9");
    },
    Error,
    "encode-error: U+42F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42FA");
    },
    Error,
    "encode-error: U+42FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42FB");
    },
    Error,
    "encode-error: U+42FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42FC");
    },
    Error,
    "encode-error: U+42FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42FD");
    },
    Error,
    "encode-error: U+42FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42FE");
    },
    Error,
    "encode-error: U+42FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u42FF");
    },
    Error,
    "encode-error: U+42FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4300");
    },
    Error,
    "encode-error: U+4300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4301");
    },
    Error,
    "encode-error: U+4301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4302");
    },
    Error,
    "encode-error: U+4302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4303");
    },
    Error,
    "encode-error: U+4303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4304");
    },
    Error,
    "encode-error: U+4304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4305");
    },
    Error,
    "encode-error: U+4305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4306");
    },
    Error,
    "encode-error: U+4306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4307");
    },
    Error,
    "encode-error: U+4307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4308");
    },
    Error,
    "encode-error: U+4308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4309");
    },
    Error,
    "encode-error: U+4309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u430A");
    },
    Error,
    "encode-error: U+430A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u430B");
    },
    Error,
    "encode-error: U+430B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u430C");
    },
    Error,
    "encode-error: U+430C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u430D");
    },
    Error,
    "encode-error: U+430D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u430E");
    },
    Error,
    "encode-error: U+430E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u430F");
    },
    Error,
    "encode-error: U+430F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4310");
    },
    Error,
    "encode-error: U+4310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4311");
    },
    Error,
    "encode-error: U+4311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4312");
    },
    Error,
    "encode-error: U+4312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4313");
    },
    Error,
    "encode-error: U+4313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4314");
    },
    Error,
    "encode-error: U+4314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4315");
    },
    Error,
    "encode-error: U+4315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4316");
    },
    Error,
    "encode-error: U+4316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4317");
    },
    Error,
    "encode-error: U+4317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4318");
    },
    Error,
    "encode-error: U+4318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4319");
    },
    Error,
    "encode-error: U+4319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u431A");
    },
    Error,
    "encode-error: U+431A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u431B");
    },
    Error,
    "encode-error: U+431B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u431C");
    },
    Error,
    "encode-error: U+431C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u431D");
    },
    Error,
    "encode-error: U+431D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u431E");
    },
    Error,
    "encode-error: U+431E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u431F");
    },
    Error,
    "encode-error: U+431F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4320");
    },
    Error,
    "encode-error: U+4320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4321");
    },
    Error,
    "encode-error: U+4321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4322");
    },
    Error,
    "encode-error: U+4322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4323");
    },
    Error,
    "encode-error: U+4323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4324");
    },
    Error,
    "encode-error: U+4324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4325");
    },
    Error,
    "encode-error: U+4325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4326");
    },
    Error,
    "encode-error: U+4326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4327");
    },
    Error,
    "encode-error: U+4327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4328");
    },
    Error,
    "encode-error: U+4328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4329");
    },
    Error,
    "encode-error: U+4329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u432A");
    },
    Error,
    "encode-error: U+432A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u432B");
    },
    Error,
    "encode-error: U+432B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u432C");
    },
    Error,
    "encode-error: U+432C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u432D");
    },
    Error,
    "encode-error: U+432D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u432E");
    },
    Error,
    "encode-error: U+432E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u432F");
    },
    Error,
    "encode-error: U+432F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4330");
    },
    Error,
    "encode-error: U+4330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4331");
    },
    Error,
    "encode-error: U+4331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4332");
    },
    Error,
    "encode-error: U+4332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4333");
    },
    Error,
    "encode-error: U+4333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4334");
    },
    Error,
    "encode-error: U+4334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4335");
    },
    Error,
    "encode-error: U+4335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4336");
    },
    Error,
    "encode-error: U+4336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4337");
    },
    Error,
    "encode-error: U+4337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4338");
    },
    Error,
    "encode-error: U+4338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4339");
    },
    Error,
    "encode-error: U+4339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u433A");
    },
    Error,
    "encode-error: U+433A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u433B");
    },
    Error,
    "encode-error: U+433B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u433C");
    },
    Error,
    "encode-error: U+433C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u433D");
    },
    Error,
    "encode-error: U+433D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u433E");
    },
    Error,
    "encode-error: U+433E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u433F");
    },
    Error,
    "encode-error: U+433F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4340");
    },
    Error,
    "encode-error: U+4340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4341");
    },
    Error,
    "encode-error: U+4341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4342");
    },
    Error,
    "encode-error: U+4342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4343");
    },
    Error,
    "encode-error: U+4343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4344");
    },
    Error,
    "encode-error: U+4344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4345");
    },
    Error,
    "encode-error: U+4345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4346");
    },
    Error,
    "encode-error: U+4346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4347");
    },
    Error,
    "encode-error: U+4347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4348");
    },
    Error,
    "encode-error: U+4348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4349");
    },
    Error,
    "encode-error: U+4349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u434A");
    },
    Error,
    "encode-error: U+434A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u434B");
    },
    Error,
    "encode-error: U+434B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u434C");
    },
    Error,
    "encode-error: U+434C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u434D");
    },
    Error,
    "encode-error: U+434D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u434E");
    },
    Error,
    "encode-error: U+434E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u434F");
    },
    Error,
    "encode-error: U+434F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4350");
    },
    Error,
    "encode-error: U+4350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4351");
    },
    Error,
    "encode-error: U+4351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4352");
    },
    Error,
    "encode-error: U+4352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4353");
    },
    Error,
    "encode-error: U+4353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4354");
    },
    Error,
    "encode-error: U+4354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4355");
    },
    Error,
    "encode-error: U+4355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4356");
    },
    Error,
    "encode-error: U+4356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4357");
    },
    Error,
    "encode-error: U+4357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4358");
    },
    Error,
    "encode-error: U+4358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4359");
    },
    Error,
    "encode-error: U+4359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u435A");
    },
    Error,
    "encode-error: U+435A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u435B");
    },
    Error,
    "encode-error: U+435B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u435C");
    },
    Error,
    "encode-error: U+435C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u435D");
    },
    Error,
    "encode-error: U+435D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u435E");
    },
    Error,
    "encode-error: U+435E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u435F");
    },
    Error,
    "encode-error: U+435F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4360");
    },
    Error,
    "encode-error: U+4360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4361");
    },
    Error,
    "encode-error: U+4361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4362");
    },
    Error,
    "encode-error: U+4362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4363");
    },
    Error,
    "encode-error: U+4363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4364");
    },
    Error,
    "encode-error: U+4364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4365");
    },
    Error,
    "encode-error: U+4365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4366");
    },
    Error,
    "encode-error: U+4366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4367");
    },
    Error,
    "encode-error: U+4367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4368");
    },
    Error,
    "encode-error: U+4368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4369");
    },
    Error,
    "encode-error: U+4369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u436A");
    },
    Error,
    "encode-error: U+436A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u436B");
    },
    Error,
    "encode-error: U+436B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u436C");
    },
    Error,
    "encode-error: U+436C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u436D");
    },
    Error,
    "encode-error: U+436D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u436E");
    },
    Error,
    "encode-error: U+436E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u436F");
    },
    Error,
    "encode-error: U+436F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4370");
    },
    Error,
    "encode-error: U+4370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4371");
    },
    Error,
    "encode-error: U+4371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4372");
    },
    Error,
    "encode-error: U+4372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4373");
    },
    Error,
    "encode-error: U+4373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4374");
    },
    Error,
    "encode-error: U+4374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4375");
    },
    Error,
    "encode-error: U+4375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4376");
    },
    Error,
    "encode-error: U+4376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4377");
    },
    Error,
    "encode-error: U+4377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4378");
    },
    Error,
    "encode-error: U+4378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4379");
    },
    Error,
    "encode-error: U+4379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u437A");
    },
    Error,
    "encode-error: U+437A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u437B");
    },
    Error,
    "encode-error: U+437B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u437C");
    },
    Error,
    "encode-error: U+437C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u437D");
    },
    Error,
    "encode-error: U+437D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u437E");
    },
    Error,
    "encode-error: U+437E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u437F");
    },
    Error,
    "encode-error: U+437F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4380");
    },
    Error,
    "encode-error: U+4380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4381");
    },
    Error,
    "encode-error: U+4381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4382");
    },
    Error,
    "encode-error: U+4382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4383");
    },
    Error,
    "encode-error: U+4383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4384");
    },
    Error,
    "encode-error: U+4384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4385");
    },
    Error,
    "encode-error: U+4385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4386");
    },
    Error,
    "encode-error: U+4386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4387");
    },
    Error,
    "encode-error: U+4387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4388");
    },
    Error,
    "encode-error: U+4388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4389");
    },
    Error,
    "encode-error: U+4389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u438A");
    },
    Error,
    "encode-error: U+438A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u438B");
    },
    Error,
    "encode-error: U+438B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u438C");
    },
    Error,
    "encode-error: U+438C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u438D");
    },
    Error,
    "encode-error: U+438D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u438E");
    },
    Error,
    "encode-error: U+438E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u438F");
    },
    Error,
    "encode-error: U+438F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4390");
    },
    Error,
    "encode-error: U+4390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4391");
    },
    Error,
    "encode-error: U+4391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4392");
    },
    Error,
    "encode-error: U+4392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4393");
    },
    Error,
    "encode-error: U+4393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4394");
    },
    Error,
    "encode-error: U+4394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4395");
    },
    Error,
    "encode-error: U+4395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4396");
    },
    Error,
    "encode-error: U+4396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4397");
    },
    Error,
    "encode-error: U+4397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4398");
    },
    Error,
    "encode-error: U+4398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4399");
    },
    Error,
    "encode-error: U+4399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u439A");
    },
    Error,
    "encode-error: U+439A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u439B");
    },
    Error,
    "encode-error: U+439B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u439C");
    },
    Error,
    "encode-error: U+439C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u439D");
    },
    Error,
    "encode-error: U+439D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u439E");
    },
    Error,
    "encode-error: U+439E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u439F");
    },
    Error,
    "encode-error: U+439F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43A0");
    },
    Error,
    "encode-error: U+43A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43A1");
    },
    Error,
    "encode-error: U+43A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43A2");
    },
    Error,
    "encode-error: U+43A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43A3");
    },
    Error,
    "encode-error: U+43A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43A4");
    },
    Error,
    "encode-error: U+43A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43A5");
    },
    Error,
    "encode-error: U+43A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43A6");
    },
    Error,
    "encode-error: U+43A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43A7");
    },
    Error,
    "encode-error: U+43A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43A8");
    },
    Error,
    "encode-error: U+43A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43A9");
    },
    Error,
    "encode-error: U+43A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43AA");
    },
    Error,
    "encode-error: U+43AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43AB");
    },
    Error,
    "encode-error: U+43AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43AC");
    },
    Error,
    "encode-error: U+43AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43AD");
    },
    Error,
    "encode-error: U+43AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43AE");
    },
    Error,
    "encode-error: U+43AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43AF");
    },
    Error,
    "encode-error: U+43AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43B0");
    },
    Error,
    "encode-error: U+43B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43B1");
    },
    Error,
    "encode-error: U+43B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43B2");
    },
    Error,
    "encode-error: U+43B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43B3");
    },
    Error,
    "encode-error: U+43B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43B4");
    },
    Error,
    "encode-error: U+43B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43B5");
    },
    Error,
    "encode-error: U+43B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43B6");
    },
    Error,
    "encode-error: U+43B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43B7");
    },
    Error,
    "encode-error: U+43B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43B8");
    },
    Error,
    "encode-error: U+43B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43B9");
    },
    Error,
    "encode-error: U+43B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43BA");
    },
    Error,
    "encode-error: U+43BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43BB");
    },
    Error,
    "encode-error: U+43BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43BC");
    },
    Error,
    "encode-error: U+43BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43BD");
    },
    Error,
    "encode-error: U+43BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43BE");
    },
    Error,
    "encode-error: U+43BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43BF");
    },
    Error,
    "encode-error: U+43BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43C0");
    },
    Error,
    "encode-error: U+43C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43C1");
    },
    Error,
    "encode-error: U+43C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43C2");
    },
    Error,
    "encode-error: U+43C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43C3");
    },
    Error,
    "encode-error: U+43C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43C4");
    },
    Error,
    "encode-error: U+43C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43C5");
    },
    Error,
    "encode-error: U+43C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43C6");
    },
    Error,
    "encode-error: U+43C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43C7");
    },
    Error,
    "encode-error: U+43C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43C8");
    },
    Error,
    "encode-error: U+43C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43C9");
    },
    Error,
    "encode-error: U+43C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43CA");
    },
    Error,
    "encode-error: U+43CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43CB");
    },
    Error,
    "encode-error: U+43CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43CC");
    },
    Error,
    "encode-error: U+43CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43CD");
    },
    Error,
    "encode-error: U+43CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43CE");
    },
    Error,
    "encode-error: U+43CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43CF");
    },
    Error,
    "encode-error: U+43CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43D0");
    },
    Error,
    "encode-error: U+43D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43D1");
    },
    Error,
    "encode-error: U+43D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43D2");
    },
    Error,
    "encode-error: U+43D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43D3");
    },
    Error,
    "encode-error: U+43D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43D4");
    },
    Error,
    "encode-error: U+43D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43D5");
    },
    Error,
    "encode-error: U+43D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43D6");
    },
    Error,
    "encode-error: U+43D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43D7");
    },
    Error,
    "encode-error: U+43D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43D8");
    },
    Error,
    "encode-error: U+43D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43D9");
    },
    Error,
    "encode-error: U+43D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43DA");
    },
    Error,
    "encode-error: U+43DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43DB");
    },
    Error,
    "encode-error: U+43DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43DC");
    },
    Error,
    "encode-error: U+43DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43DD");
    },
    Error,
    "encode-error: U+43DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43DE");
    },
    Error,
    "encode-error: U+43DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43DF");
    },
    Error,
    "encode-error: U+43DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43E0");
    },
    Error,
    "encode-error: U+43E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43E1");
    },
    Error,
    "encode-error: U+43E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43E2");
    },
    Error,
    "encode-error: U+43E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43E3");
    },
    Error,
    "encode-error: U+43E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43E4");
    },
    Error,
    "encode-error: U+43E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43E5");
    },
    Error,
    "encode-error: U+43E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43E6");
    },
    Error,
    "encode-error: U+43E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43E7");
    },
    Error,
    "encode-error: U+43E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43E8");
    },
    Error,
    "encode-error: U+43E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43E9");
    },
    Error,
    "encode-error: U+43E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43EA");
    },
    Error,
    "encode-error: U+43EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43EB");
    },
    Error,
    "encode-error: U+43EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43EC");
    },
    Error,
    "encode-error: U+43EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43ED");
    },
    Error,
    "encode-error: U+43ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43EE");
    },
    Error,
    "encode-error: U+43EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43EF");
    },
    Error,
    "encode-error: U+43EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43F0");
    },
    Error,
    "encode-error: U+43F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43F1");
    },
    Error,
    "encode-error: U+43F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43F2");
    },
    Error,
    "encode-error: U+43F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43F3");
    },
    Error,
    "encode-error: U+43F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43F4");
    },
    Error,
    "encode-error: U+43F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43F5");
    },
    Error,
    "encode-error: U+43F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43F6");
    },
    Error,
    "encode-error: U+43F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43F7");
    },
    Error,
    "encode-error: U+43F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43F8");
    },
    Error,
    "encode-error: U+43F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43F9");
    },
    Error,
    "encode-error: U+43F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43FA");
    },
    Error,
    "encode-error: U+43FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43FB");
    },
    Error,
    "encode-error: U+43FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43FC");
    },
    Error,
    "encode-error: U+43FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43FD");
    },
    Error,
    "encode-error: U+43FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43FE");
    },
    Error,
    "encode-error: U+43FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u43FF");
    },
    Error,
    "encode-error: U+43FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4400");
    },
    Error,
    "encode-error: U+4400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4401");
    },
    Error,
    "encode-error: U+4401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4402");
    },
    Error,
    "encode-error: U+4402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4403");
    },
    Error,
    "encode-error: U+4403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4404");
    },
    Error,
    "encode-error: U+4404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4405");
    },
    Error,
    "encode-error: U+4405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4406");
    },
    Error,
    "encode-error: U+4406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4407");
    },
    Error,
    "encode-error: U+4407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4408");
    },
    Error,
    "encode-error: U+4408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4409");
    },
    Error,
    "encode-error: U+4409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u440A");
    },
    Error,
    "encode-error: U+440A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u440B");
    },
    Error,
    "encode-error: U+440B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u440C");
    },
    Error,
    "encode-error: U+440C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u440D");
    },
    Error,
    "encode-error: U+440D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u440E");
    },
    Error,
    "encode-error: U+440E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u440F");
    },
    Error,
    "encode-error: U+440F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4410");
    },
    Error,
    "encode-error: U+4410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4411");
    },
    Error,
    "encode-error: U+4411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4412");
    },
    Error,
    "encode-error: U+4412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4413");
    },
    Error,
    "encode-error: U+4413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4414");
    },
    Error,
    "encode-error: U+4414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4415");
    },
    Error,
    "encode-error: U+4415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4416");
    },
    Error,
    "encode-error: U+4416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4417");
    },
    Error,
    "encode-error: U+4417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4418");
    },
    Error,
    "encode-error: U+4418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4419");
    },
    Error,
    "encode-error: U+4419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u441A");
    },
    Error,
    "encode-error: U+441A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u441B");
    },
    Error,
    "encode-error: U+441B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u441C");
    },
    Error,
    "encode-error: U+441C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u441D");
    },
    Error,
    "encode-error: U+441D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u441E");
    },
    Error,
    "encode-error: U+441E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u441F");
    },
    Error,
    "encode-error: U+441F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4420");
    },
    Error,
    "encode-error: U+4420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4421");
    },
    Error,
    "encode-error: U+4421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4422");
    },
    Error,
    "encode-error: U+4422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4423");
    },
    Error,
    "encode-error: U+4423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4424");
    },
    Error,
    "encode-error: U+4424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4425");
    },
    Error,
    "encode-error: U+4425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4426");
    },
    Error,
    "encode-error: U+4426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4427");
    },
    Error,
    "encode-error: U+4427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4428");
    },
    Error,
    "encode-error: U+4428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4429");
    },
    Error,
    "encode-error: U+4429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u442A");
    },
    Error,
    "encode-error: U+442A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u442B");
    },
    Error,
    "encode-error: U+442B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u442C");
    },
    Error,
    "encode-error: U+442C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u442D");
    },
    Error,
    "encode-error: U+442D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u442E");
    },
    Error,
    "encode-error: U+442E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u442F");
    },
    Error,
    "encode-error: U+442F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4430");
    },
    Error,
    "encode-error: U+4430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4431");
    },
    Error,
    "encode-error: U+4431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4432");
    },
    Error,
    "encode-error: U+4432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4433");
    },
    Error,
    "encode-error: U+4433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4434");
    },
    Error,
    "encode-error: U+4434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4435");
    },
    Error,
    "encode-error: U+4435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4436");
    },
    Error,
    "encode-error: U+4436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4437");
    },
    Error,
    "encode-error: U+4437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4438");
    },
    Error,
    "encode-error: U+4438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4439");
    },
    Error,
    "encode-error: U+4439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u443A");
    },
    Error,
    "encode-error: U+443A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u443B");
    },
    Error,
    "encode-error: U+443B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u443C");
    },
    Error,
    "encode-error: U+443C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u443D");
    },
    Error,
    "encode-error: U+443D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u443E");
    },
    Error,
    "encode-error: U+443E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u443F");
    },
    Error,
    "encode-error: U+443F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4440");
    },
    Error,
    "encode-error: U+4440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4441");
    },
    Error,
    "encode-error: U+4441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4442");
    },
    Error,
    "encode-error: U+4442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4443");
    },
    Error,
    "encode-error: U+4443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4444");
    },
    Error,
    "encode-error: U+4444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4445");
    },
    Error,
    "encode-error: U+4445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4446");
    },
    Error,
    "encode-error: U+4446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4447");
    },
    Error,
    "encode-error: U+4447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4448");
    },
    Error,
    "encode-error: U+4448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4449");
    },
    Error,
    "encode-error: U+4449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u444A");
    },
    Error,
    "encode-error: U+444A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u444B");
    },
    Error,
    "encode-error: U+444B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u444C");
    },
    Error,
    "encode-error: U+444C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u444D");
    },
    Error,
    "encode-error: U+444D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u444E");
    },
    Error,
    "encode-error: U+444E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u444F");
    },
    Error,
    "encode-error: U+444F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4450");
    },
    Error,
    "encode-error: U+4450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4451");
    },
    Error,
    "encode-error: U+4451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4452");
    },
    Error,
    "encode-error: U+4452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4453");
    },
    Error,
    "encode-error: U+4453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4454");
    },
    Error,
    "encode-error: U+4454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4455");
    },
    Error,
    "encode-error: U+4455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4456");
    },
    Error,
    "encode-error: U+4456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4457");
    },
    Error,
    "encode-error: U+4457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4458");
    },
    Error,
    "encode-error: U+4458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4459");
    },
    Error,
    "encode-error: U+4459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u445A");
    },
    Error,
    "encode-error: U+445A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u445B");
    },
    Error,
    "encode-error: U+445B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u445C");
    },
    Error,
    "encode-error: U+445C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u445D");
    },
    Error,
    "encode-error: U+445D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u445E");
    },
    Error,
    "encode-error: U+445E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u445F");
    },
    Error,
    "encode-error: U+445F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4460");
    },
    Error,
    "encode-error: U+4460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4461");
    },
    Error,
    "encode-error: U+4461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4462");
    },
    Error,
    "encode-error: U+4462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4463");
    },
    Error,
    "encode-error: U+4463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4464");
    },
    Error,
    "encode-error: U+4464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4465");
    },
    Error,
    "encode-error: U+4465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4466");
    },
    Error,
    "encode-error: U+4466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4467");
    },
    Error,
    "encode-error: U+4467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4468");
    },
    Error,
    "encode-error: U+4468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4469");
    },
    Error,
    "encode-error: U+4469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u446A");
    },
    Error,
    "encode-error: U+446A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u446B");
    },
    Error,
    "encode-error: U+446B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u446C");
    },
    Error,
    "encode-error: U+446C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u446D");
    },
    Error,
    "encode-error: U+446D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u446E");
    },
    Error,
    "encode-error: U+446E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u446F");
    },
    Error,
    "encode-error: U+446F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4470");
    },
    Error,
    "encode-error: U+4470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4471");
    },
    Error,
    "encode-error: U+4471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4472");
    },
    Error,
    "encode-error: U+4472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4473");
    },
    Error,
    "encode-error: U+4473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4474");
    },
    Error,
    "encode-error: U+4474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4475");
    },
    Error,
    "encode-error: U+4475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4476");
    },
    Error,
    "encode-error: U+4476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4477");
    },
    Error,
    "encode-error: U+4477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4478");
    },
    Error,
    "encode-error: U+4478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4479");
    },
    Error,
    "encode-error: U+4479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u447A");
    },
    Error,
    "encode-error: U+447A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u447B");
    },
    Error,
    "encode-error: U+447B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u447C");
    },
    Error,
    "encode-error: U+447C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u447D");
    },
    Error,
    "encode-error: U+447D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u447E");
    },
    Error,
    "encode-error: U+447E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u447F");
    },
    Error,
    "encode-error: U+447F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4480");
    },
    Error,
    "encode-error: U+4480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4481");
    },
    Error,
    "encode-error: U+4481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4482");
    },
    Error,
    "encode-error: U+4482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4483");
    },
    Error,
    "encode-error: U+4483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4484");
    },
    Error,
    "encode-error: U+4484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4485");
    },
    Error,
    "encode-error: U+4485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4486");
    },
    Error,
    "encode-error: U+4486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4487");
    },
    Error,
    "encode-error: U+4487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4488");
    },
    Error,
    "encode-error: U+4488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4489");
    },
    Error,
    "encode-error: U+4489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u448A");
    },
    Error,
    "encode-error: U+448A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u448B");
    },
    Error,
    "encode-error: U+448B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u448C");
    },
    Error,
    "encode-error: U+448C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u448D");
    },
    Error,
    "encode-error: U+448D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u448E");
    },
    Error,
    "encode-error: U+448E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u448F");
    },
    Error,
    "encode-error: U+448F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4490");
    },
    Error,
    "encode-error: U+4490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4491");
    },
    Error,
    "encode-error: U+4491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4492");
    },
    Error,
    "encode-error: U+4492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4493");
    },
    Error,
    "encode-error: U+4493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4494");
    },
    Error,
    "encode-error: U+4494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4495");
    },
    Error,
    "encode-error: U+4495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4496");
    },
    Error,
    "encode-error: U+4496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4497");
    },
    Error,
    "encode-error: U+4497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4498");
    },
    Error,
    "encode-error: U+4498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4499");
    },
    Error,
    "encode-error: U+4499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u449A");
    },
    Error,
    "encode-error: U+449A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u449B");
    },
    Error,
    "encode-error: U+449B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u449C");
    },
    Error,
    "encode-error: U+449C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u449D");
    },
    Error,
    "encode-error: U+449D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u449E");
    },
    Error,
    "encode-error: U+449E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u449F");
    },
    Error,
    "encode-error: U+449F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44A0");
    },
    Error,
    "encode-error: U+44A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44A1");
    },
    Error,
    "encode-error: U+44A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44A2");
    },
    Error,
    "encode-error: U+44A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44A3");
    },
    Error,
    "encode-error: U+44A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44A4");
    },
    Error,
    "encode-error: U+44A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44A5");
    },
    Error,
    "encode-error: U+44A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44A6");
    },
    Error,
    "encode-error: U+44A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44A7");
    },
    Error,
    "encode-error: U+44A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44A8");
    },
    Error,
    "encode-error: U+44A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44A9");
    },
    Error,
    "encode-error: U+44A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44AA");
    },
    Error,
    "encode-error: U+44AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44AB");
    },
    Error,
    "encode-error: U+44AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44AC");
    },
    Error,
    "encode-error: U+44AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44AD");
    },
    Error,
    "encode-error: U+44AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44AE");
    },
    Error,
    "encode-error: U+44AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44AF");
    },
    Error,
    "encode-error: U+44AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44B0");
    },
    Error,
    "encode-error: U+44B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44B1");
    },
    Error,
    "encode-error: U+44B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44B2");
    },
    Error,
    "encode-error: U+44B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44B3");
    },
    Error,
    "encode-error: U+44B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44B4");
    },
    Error,
    "encode-error: U+44B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44B5");
    },
    Error,
    "encode-error: U+44B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44B6");
    },
    Error,
    "encode-error: U+44B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44B7");
    },
    Error,
    "encode-error: U+44B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44B8");
    },
    Error,
    "encode-error: U+44B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44B9");
    },
    Error,
    "encode-error: U+44B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44BA");
    },
    Error,
    "encode-error: U+44BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44BB");
    },
    Error,
    "encode-error: U+44BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44BC");
    },
    Error,
    "encode-error: U+44BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44BD");
    },
    Error,
    "encode-error: U+44BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44BE");
    },
    Error,
    "encode-error: U+44BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44BF");
    },
    Error,
    "encode-error: U+44BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44C0");
    },
    Error,
    "encode-error: U+44C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44C1");
    },
    Error,
    "encode-error: U+44C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44C2");
    },
    Error,
    "encode-error: U+44C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44C3");
    },
    Error,
    "encode-error: U+44C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44C4");
    },
    Error,
    "encode-error: U+44C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44C5");
    },
    Error,
    "encode-error: U+44C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44C6");
    },
    Error,
    "encode-error: U+44C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44C7");
    },
    Error,
    "encode-error: U+44C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44C8");
    },
    Error,
    "encode-error: U+44C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44C9");
    },
    Error,
    "encode-error: U+44C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44CA");
    },
    Error,
    "encode-error: U+44CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44CB");
    },
    Error,
    "encode-error: U+44CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44CC");
    },
    Error,
    "encode-error: U+44CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44CD");
    },
    Error,
    "encode-error: U+44CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44CE");
    },
    Error,
    "encode-error: U+44CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44CF");
    },
    Error,
    "encode-error: U+44CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44D0");
    },
    Error,
    "encode-error: U+44D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44D1");
    },
    Error,
    "encode-error: U+44D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44D2");
    },
    Error,
    "encode-error: U+44D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44D3");
    },
    Error,
    "encode-error: U+44D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44D4");
    },
    Error,
    "encode-error: U+44D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44D5");
    },
    Error,
    "encode-error: U+44D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44D6");
    },
    Error,
    "encode-error: U+44D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44D7");
    },
    Error,
    "encode-error: U+44D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44D8");
    },
    Error,
    "encode-error: U+44D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44D9");
    },
    Error,
    "encode-error: U+44D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44DA");
    },
    Error,
    "encode-error: U+44DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44DB");
    },
    Error,
    "encode-error: U+44DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44DC");
    },
    Error,
    "encode-error: U+44DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44DD");
    },
    Error,
    "encode-error: U+44DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44DE");
    },
    Error,
    "encode-error: U+44DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44DF");
    },
    Error,
    "encode-error: U+44DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44E0");
    },
    Error,
    "encode-error: U+44E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44E1");
    },
    Error,
    "encode-error: U+44E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44E2");
    },
    Error,
    "encode-error: U+44E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44E3");
    },
    Error,
    "encode-error: U+44E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44E4");
    },
    Error,
    "encode-error: U+44E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44E5");
    },
    Error,
    "encode-error: U+44E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44E6");
    },
    Error,
    "encode-error: U+44E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44E7");
    },
    Error,
    "encode-error: U+44E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44E8");
    },
    Error,
    "encode-error: U+44E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44E9");
    },
    Error,
    "encode-error: U+44E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44EA");
    },
    Error,
    "encode-error: U+44EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44EB");
    },
    Error,
    "encode-error: U+44EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44EC");
    },
    Error,
    "encode-error: U+44EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44ED");
    },
    Error,
    "encode-error: U+44ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44EE");
    },
    Error,
    "encode-error: U+44EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44EF");
    },
    Error,
    "encode-error: U+44EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44F0");
    },
    Error,
    "encode-error: U+44F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44F1");
    },
    Error,
    "encode-error: U+44F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44F2");
    },
    Error,
    "encode-error: U+44F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44F3");
    },
    Error,
    "encode-error: U+44F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44F4");
    },
    Error,
    "encode-error: U+44F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44F5");
    },
    Error,
    "encode-error: U+44F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44F6");
    },
    Error,
    "encode-error: U+44F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44F7");
    },
    Error,
    "encode-error: U+44F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44F8");
    },
    Error,
    "encode-error: U+44F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44F9");
    },
    Error,
    "encode-error: U+44F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44FA");
    },
    Error,
    "encode-error: U+44FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44FB");
    },
    Error,
    "encode-error: U+44FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44FC");
    },
    Error,
    "encode-error: U+44FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44FD");
    },
    Error,
    "encode-error: U+44FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44FE");
    },
    Error,
    "encode-error: U+44FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u44FF");
    },
    Error,
    "encode-error: U+44FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4500");
    },
    Error,
    "encode-error: U+4500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4501");
    },
    Error,
    "encode-error: U+4501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4502");
    },
    Error,
    "encode-error: U+4502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4503");
    },
    Error,
    "encode-error: U+4503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4504");
    },
    Error,
    "encode-error: U+4504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4505");
    },
    Error,
    "encode-error: U+4505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4506");
    },
    Error,
    "encode-error: U+4506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4507");
    },
    Error,
    "encode-error: U+4507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4508");
    },
    Error,
    "encode-error: U+4508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4509");
    },
    Error,
    "encode-error: U+4509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u450A");
    },
    Error,
    "encode-error: U+450A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u450B");
    },
    Error,
    "encode-error: U+450B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u450C");
    },
    Error,
    "encode-error: U+450C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u450D");
    },
    Error,
    "encode-error: U+450D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u450E");
    },
    Error,
    "encode-error: U+450E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u450F");
    },
    Error,
    "encode-error: U+450F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4510");
    },
    Error,
    "encode-error: U+4510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4511");
    },
    Error,
    "encode-error: U+4511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4512");
    },
    Error,
    "encode-error: U+4512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4513");
    },
    Error,
    "encode-error: U+4513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4514");
    },
    Error,
    "encode-error: U+4514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4515");
    },
    Error,
    "encode-error: U+4515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4516");
    },
    Error,
    "encode-error: U+4516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4517");
    },
    Error,
    "encode-error: U+4517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4518");
    },
    Error,
    "encode-error: U+4518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4519");
    },
    Error,
    "encode-error: U+4519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u451A");
    },
    Error,
    "encode-error: U+451A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u451B");
    },
    Error,
    "encode-error: U+451B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u451C");
    },
    Error,
    "encode-error: U+451C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u451D");
    },
    Error,
    "encode-error: U+451D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u451E");
    },
    Error,
    "encode-error: U+451E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u451F");
    },
    Error,
    "encode-error: U+451F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4520");
    },
    Error,
    "encode-error: U+4520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4521");
    },
    Error,
    "encode-error: U+4521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4522");
    },
    Error,
    "encode-error: U+4522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4523");
    },
    Error,
    "encode-error: U+4523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4524");
    },
    Error,
    "encode-error: U+4524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4525");
    },
    Error,
    "encode-error: U+4525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4526");
    },
    Error,
    "encode-error: U+4526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4527");
    },
    Error,
    "encode-error: U+4527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4528");
    },
    Error,
    "encode-error: U+4528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4529");
    },
    Error,
    "encode-error: U+4529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u452A");
    },
    Error,
    "encode-error: U+452A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u452B");
    },
    Error,
    "encode-error: U+452B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u452C");
    },
    Error,
    "encode-error: U+452C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u452D");
    },
    Error,
    "encode-error: U+452D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u452E");
    },
    Error,
    "encode-error: U+452E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u452F");
    },
    Error,
    "encode-error: U+452F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4530");
    },
    Error,
    "encode-error: U+4530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4531");
    },
    Error,
    "encode-error: U+4531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4532");
    },
    Error,
    "encode-error: U+4532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4533");
    },
    Error,
    "encode-error: U+4533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4534");
    },
    Error,
    "encode-error: U+4534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4535");
    },
    Error,
    "encode-error: U+4535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4536");
    },
    Error,
    "encode-error: U+4536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4537");
    },
    Error,
    "encode-error: U+4537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4538");
    },
    Error,
    "encode-error: U+4538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4539");
    },
    Error,
    "encode-error: U+4539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u453A");
    },
    Error,
    "encode-error: U+453A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u453B");
    },
    Error,
    "encode-error: U+453B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u453C");
    },
    Error,
    "encode-error: U+453C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u453D");
    },
    Error,
    "encode-error: U+453D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u453E");
    },
    Error,
    "encode-error: U+453E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u453F");
    },
    Error,
    "encode-error: U+453F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4540");
    },
    Error,
    "encode-error: U+4540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4541");
    },
    Error,
    "encode-error: U+4541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4542");
    },
    Error,
    "encode-error: U+4542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4543");
    },
    Error,
    "encode-error: U+4543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4544");
    },
    Error,
    "encode-error: U+4544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4545");
    },
    Error,
    "encode-error: U+4545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4546");
    },
    Error,
    "encode-error: U+4546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4547");
    },
    Error,
    "encode-error: U+4547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4548");
    },
    Error,
    "encode-error: U+4548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4549");
    },
    Error,
    "encode-error: U+4549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u454A");
    },
    Error,
    "encode-error: U+454A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u454B");
    },
    Error,
    "encode-error: U+454B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u454C");
    },
    Error,
    "encode-error: U+454C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u454D");
    },
    Error,
    "encode-error: U+454D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u454E");
    },
    Error,
    "encode-error: U+454E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u454F");
    },
    Error,
    "encode-error: U+454F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4550");
    },
    Error,
    "encode-error: U+4550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4551");
    },
    Error,
    "encode-error: U+4551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4552");
    },
    Error,
    "encode-error: U+4552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4553");
    },
    Error,
    "encode-error: U+4553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4554");
    },
    Error,
    "encode-error: U+4554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4555");
    },
    Error,
    "encode-error: U+4555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4556");
    },
    Error,
    "encode-error: U+4556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4557");
    },
    Error,
    "encode-error: U+4557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4558");
    },
    Error,
    "encode-error: U+4558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4559");
    },
    Error,
    "encode-error: U+4559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u455A");
    },
    Error,
    "encode-error: U+455A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u455B");
    },
    Error,
    "encode-error: U+455B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u455C");
    },
    Error,
    "encode-error: U+455C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u455D");
    },
    Error,
    "encode-error: U+455D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u455E");
    },
    Error,
    "encode-error: U+455E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u455F");
    },
    Error,
    "encode-error: U+455F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4560");
    },
    Error,
    "encode-error: U+4560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4561");
    },
    Error,
    "encode-error: U+4561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4562");
    },
    Error,
    "encode-error: U+4562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4563");
    },
    Error,
    "encode-error: U+4563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4564");
    },
    Error,
    "encode-error: U+4564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4565");
    },
    Error,
    "encode-error: U+4565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4566");
    },
    Error,
    "encode-error: U+4566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4567");
    },
    Error,
    "encode-error: U+4567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4568");
    },
    Error,
    "encode-error: U+4568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4569");
    },
    Error,
    "encode-error: U+4569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u456A");
    },
    Error,
    "encode-error: U+456A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u456B");
    },
    Error,
    "encode-error: U+456B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u456C");
    },
    Error,
    "encode-error: U+456C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u456D");
    },
    Error,
    "encode-error: U+456D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u456E");
    },
    Error,
    "encode-error: U+456E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u456F");
    },
    Error,
    "encode-error: U+456F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4570");
    },
    Error,
    "encode-error: U+4570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4571");
    },
    Error,
    "encode-error: U+4571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4572");
    },
    Error,
    "encode-error: U+4572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4573");
    },
    Error,
    "encode-error: U+4573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4574");
    },
    Error,
    "encode-error: U+4574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4575");
    },
    Error,
    "encode-error: U+4575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4576");
    },
    Error,
    "encode-error: U+4576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4577");
    },
    Error,
    "encode-error: U+4577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4578");
    },
    Error,
    "encode-error: U+4578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4579");
    },
    Error,
    "encode-error: U+4579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u457A");
    },
    Error,
    "encode-error: U+457A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u457B");
    },
    Error,
    "encode-error: U+457B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u457C");
    },
    Error,
    "encode-error: U+457C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u457D");
    },
    Error,
    "encode-error: U+457D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u457E");
    },
    Error,
    "encode-error: U+457E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u457F");
    },
    Error,
    "encode-error: U+457F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4580");
    },
    Error,
    "encode-error: U+4580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4581");
    },
    Error,
    "encode-error: U+4581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4582");
    },
    Error,
    "encode-error: U+4582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4583");
    },
    Error,
    "encode-error: U+4583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4584");
    },
    Error,
    "encode-error: U+4584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4585");
    },
    Error,
    "encode-error: U+4585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4586");
    },
    Error,
    "encode-error: U+4586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4587");
    },
    Error,
    "encode-error: U+4587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4588");
    },
    Error,
    "encode-error: U+4588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4589");
    },
    Error,
    "encode-error: U+4589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u458A");
    },
    Error,
    "encode-error: U+458A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u458B");
    },
    Error,
    "encode-error: U+458B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u458C");
    },
    Error,
    "encode-error: U+458C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u458D");
    },
    Error,
    "encode-error: U+458D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u458E");
    },
    Error,
    "encode-error: U+458E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u458F");
    },
    Error,
    "encode-error: U+458F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4590");
    },
    Error,
    "encode-error: U+4590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4591");
    },
    Error,
    "encode-error: U+4591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4592");
    },
    Error,
    "encode-error: U+4592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4593");
    },
    Error,
    "encode-error: U+4593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4594");
    },
    Error,
    "encode-error: U+4594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4595");
    },
    Error,
    "encode-error: U+4595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4596");
    },
    Error,
    "encode-error: U+4596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4597");
    },
    Error,
    "encode-error: U+4597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4598");
    },
    Error,
    "encode-error: U+4598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4599");
    },
    Error,
    "encode-error: U+4599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u459A");
    },
    Error,
    "encode-error: U+459A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u459B");
    },
    Error,
    "encode-error: U+459B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u459C");
    },
    Error,
    "encode-error: U+459C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u459D");
    },
    Error,
    "encode-error: U+459D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u459E");
    },
    Error,
    "encode-error: U+459E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u459F");
    },
    Error,
    "encode-error: U+459F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45A0");
    },
    Error,
    "encode-error: U+45A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45A1");
    },
    Error,
    "encode-error: U+45A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45A2");
    },
    Error,
    "encode-error: U+45A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45A3");
    },
    Error,
    "encode-error: U+45A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45A4");
    },
    Error,
    "encode-error: U+45A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45A5");
    },
    Error,
    "encode-error: U+45A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45A6");
    },
    Error,
    "encode-error: U+45A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45A7");
    },
    Error,
    "encode-error: U+45A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45A8");
    },
    Error,
    "encode-error: U+45A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45A9");
    },
    Error,
    "encode-error: U+45A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45AA");
    },
    Error,
    "encode-error: U+45AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45AB");
    },
    Error,
    "encode-error: U+45AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45AC");
    },
    Error,
    "encode-error: U+45AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45AD");
    },
    Error,
    "encode-error: U+45AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45AE");
    },
    Error,
    "encode-error: U+45AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45AF");
    },
    Error,
    "encode-error: U+45AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45B0");
    },
    Error,
    "encode-error: U+45B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45B1");
    },
    Error,
    "encode-error: U+45B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45B2");
    },
    Error,
    "encode-error: U+45B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45B3");
    },
    Error,
    "encode-error: U+45B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45B4");
    },
    Error,
    "encode-error: U+45B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45B5");
    },
    Error,
    "encode-error: U+45B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45B6");
    },
    Error,
    "encode-error: U+45B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45B7");
    },
    Error,
    "encode-error: U+45B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45B8");
    },
    Error,
    "encode-error: U+45B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45B9");
    },
    Error,
    "encode-error: U+45B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45BA");
    },
    Error,
    "encode-error: U+45BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45BB");
    },
    Error,
    "encode-error: U+45BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45BC");
    },
    Error,
    "encode-error: U+45BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45BD");
    },
    Error,
    "encode-error: U+45BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45BE");
    },
    Error,
    "encode-error: U+45BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45BF");
    },
    Error,
    "encode-error: U+45BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45C0");
    },
    Error,
    "encode-error: U+45C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45C1");
    },
    Error,
    "encode-error: U+45C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45C2");
    },
    Error,
    "encode-error: U+45C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45C3");
    },
    Error,
    "encode-error: U+45C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45C4");
    },
    Error,
    "encode-error: U+45C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45C5");
    },
    Error,
    "encode-error: U+45C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45C6");
    },
    Error,
    "encode-error: U+45C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45C7");
    },
    Error,
    "encode-error: U+45C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45C8");
    },
    Error,
    "encode-error: U+45C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45C9");
    },
    Error,
    "encode-error: U+45C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45CA");
    },
    Error,
    "encode-error: U+45CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45CB");
    },
    Error,
    "encode-error: U+45CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45CC");
    },
    Error,
    "encode-error: U+45CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45CD");
    },
    Error,
    "encode-error: U+45CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45CE");
    },
    Error,
    "encode-error: U+45CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45CF");
    },
    Error,
    "encode-error: U+45CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45D0");
    },
    Error,
    "encode-error: U+45D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45D1");
    },
    Error,
    "encode-error: U+45D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45D2");
    },
    Error,
    "encode-error: U+45D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45D3");
    },
    Error,
    "encode-error: U+45D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45D4");
    },
    Error,
    "encode-error: U+45D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45D5");
    },
    Error,
    "encode-error: U+45D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45D6");
    },
    Error,
    "encode-error: U+45D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45D7");
    },
    Error,
    "encode-error: U+45D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45D8");
    },
    Error,
    "encode-error: U+45D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45D9");
    },
    Error,
    "encode-error: U+45D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45DA");
    },
    Error,
    "encode-error: U+45DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45DB");
    },
    Error,
    "encode-error: U+45DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45DC");
    },
    Error,
    "encode-error: U+45DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45DD");
    },
    Error,
    "encode-error: U+45DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45DE");
    },
    Error,
    "encode-error: U+45DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45DF");
    },
    Error,
    "encode-error: U+45DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45E0");
    },
    Error,
    "encode-error: U+45E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45E1");
    },
    Error,
    "encode-error: U+45E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45E2");
    },
    Error,
    "encode-error: U+45E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45E3");
    },
    Error,
    "encode-error: U+45E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45E4");
    },
    Error,
    "encode-error: U+45E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45E5");
    },
    Error,
    "encode-error: U+45E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45E6");
    },
    Error,
    "encode-error: U+45E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45E7");
    },
    Error,
    "encode-error: U+45E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45E8");
    },
    Error,
    "encode-error: U+45E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45E9");
    },
    Error,
    "encode-error: U+45E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45EA");
    },
    Error,
    "encode-error: U+45EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45EB");
    },
    Error,
    "encode-error: U+45EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45EC");
    },
    Error,
    "encode-error: U+45EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45ED");
    },
    Error,
    "encode-error: U+45ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45EE");
    },
    Error,
    "encode-error: U+45EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45EF");
    },
    Error,
    "encode-error: U+45EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45F0");
    },
    Error,
    "encode-error: U+45F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45F1");
    },
    Error,
    "encode-error: U+45F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45F2");
    },
    Error,
    "encode-error: U+45F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45F3");
    },
    Error,
    "encode-error: U+45F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45F4");
    },
    Error,
    "encode-error: U+45F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45F5");
    },
    Error,
    "encode-error: U+45F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45F6");
    },
    Error,
    "encode-error: U+45F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45F7");
    },
    Error,
    "encode-error: U+45F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45F8");
    },
    Error,
    "encode-error: U+45F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45F9");
    },
    Error,
    "encode-error: U+45F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45FA");
    },
    Error,
    "encode-error: U+45FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45FB");
    },
    Error,
    "encode-error: U+45FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45FC");
    },
    Error,
    "encode-error: U+45FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45FD");
    },
    Error,
    "encode-error: U+45FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45FE");
    },
    Error,
    "encode-error: U+45FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u45FF");
    },
    Error,
    "encode-error: U+45FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4600");
    },
    Error,
    "encode-error: U+4600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4601");
    },
    Error,
    "encode-error: U+4601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4602");
    },
    Error,
    "encode-error: U+4602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4603");
    },
    Error,
    "encode-error: U+4603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4604");
    },
    Error,
    "encode-error: U+4604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4605");
    },
    Error,
    "encode-error: U+4605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4606");
    },
    Error,
    "encode-error: U+4606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4607");
    },
    Error,
    "encode-error: U+4607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4608");
    },
    Error,
    "encode-error: U+4608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4609");
    },
    Error,
    "encode-error: U+4609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u460A");
    },
    Error,
    "encode-error: U+460A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u460B");
    },
    Error,
    "encode-error: U+460B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u460C");
    },
    Error,
    "encode-error: U+460C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u460D");
    },
    Error,
    "encode-error: U+460D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u460E");
    },
    Error,
    "encode-error: U+460E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u460F");
    },
    Error,
    "encode-error: U+460F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4610");
    },
    Error,
    "encode-error: U+4610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4611");
    },
    Error,
    "encode-error: U+4611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4612");
    },
    Error,
    "encode-error: U+4612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4613");
    },
    Error,
    "encode-error: U+4613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4614");
    },
    Error,
    "encode-error: U+4614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4615");
    },
    Error,
    "encode-error: U+4615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4616");
    },
    Error,
    "encode-error: U+4616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4617");
    },
    Error,
    "encode-error: U+4617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4618");
    },
    Error,
    "encode-error: U+4618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4619");
    },
    Error,
    "encode-error: U+4619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u461A");
    },
    Error,
    "encode-error: U+461A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u461B");
    },
    Error,
    "encode-error: U+461B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u461C");
    },
    Error,
    "encode-error: U+461C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u461D");
    },
    Error,
    "encode-error: U+461D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u461E");
    },
    Error,
    "encode-error: U+461E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u461F");
    },
    Error,
    "encode-error: U+461F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4620");
    },
    Error,
    "encode-error: U+4620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4621");
    },
    Error,
    "encode-error: U+4621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4622");
    },
    Error,
    "encode-error: U+4622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4623");
    },
    Error,
    "encode-error: U+4623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4624");
    },
    Error,
    "encode-error: U+4624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4625");
    },
    Error,
    "encode-error: U+4625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4626");
    },
    Error,
    "encode-error: U+4626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4627");
    },
    Error,
    "encode-error: U+4627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4628");
    },
    Error,
    "encode-error: U+4628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4629");
    },
    Error,
    "encode-error: U+4629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u462A");
    },
    Error,
    "encode-error: U+462A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u462B");
    },
    Error,
    "encode-error: U+462B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u462C");
    },
    Error,
    "encode-error: U+462C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u462D");
    },
    Error,
    "encode-error: U+462D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u462E");
    },
    Error,
    "encode-error: U+462E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u462F");
    },
    Error,
    "encode-error: U+462F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4630");
    },
    Error,
    "encode-error: U+4630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4631");
    },
    Error,
    "encode-error: U+4631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4632");
    },
    Error,
    "encode-error: U+4632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4633");
    },
    Error,
    "encode-error: U+4633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4634");
    },
    Error,
    "encode-error: U+4634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4635");
    },
    Error,
    "encode-error: U+4635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4636");
    },
    Error,
    "encode-error: U+4636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4637");
    },
    Error,
    "encode-error: U+4637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4638");
    },
    Error,
    "encode-error: U+4638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4639");
    },
    Error,
    "encode-error: U+4639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u463A");
    },
    Error,
    "encode-error: U+463A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u463B");
    },
    Error,
    "encode-error: U+463B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u463C");
    },
    Error,
    "encode-error: U+463C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u463D");
    },
    Error,
    "encode-error: U+463D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u463E");
    },
    Error,
    "encode-error: U+463E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u463F");
    },
    Error,
    "encode-error: U+463F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4640");
    },
    Error,
    "encode-error: U+4640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4641");
    },
    Error,
    "encode-error: U+4641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4642");
    },
    Error,
    "encode-error: U+4642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4643");
    },
    Error,
    "encode-error: U+4643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4644");
    },
    Error,
    "encode-error: U+4644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4645");
    },
    Error,
    "encode-error: U+4645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4646");
    },
    Error,
    "encode-error: U+4646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4647");
    },
    Error,
    "encode-error: U+4647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4648");
    },
    Error,
    "encode-error: U+4648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4649");
    },
    Error,
    "encode-error: U+4649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u464A");
    },
    Error,
    "encode-error: U+464A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u464B");
    },
    Error,
    "encode-error: U+464B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u464C");
    },
    Error,
    "encode-error: U+464C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u464D");
    },
    Error,
    "encode-error: U+464D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u464E");
    },
    Error,
    "encode-error: U+464E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u464F");
    },
    Error,
    "encode-error: U+464F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4650");
    },
    Error,
    "encode-error: U+4650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4651");
    },
    Error,
    "encode-error: U+4651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4652");
    },
    Error,
    "encode-error: U+4652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4653");
    },
    Error,
    "encode-error: U+4653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4654");
    },
    Error,
    "encode-error: U+4654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4655");
    },
    Error,
    "encode-error: U+4655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4656");
    },
    Error,
    "encode-error: U+4656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4657");
    },
    Error,
    "encode-error: U+4657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4658");
    },
    Error,
    "encode-error: U+4658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4659");
    },
    Error,
    "encode-error: U+4659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u465A");
    },
    Error,
    "encode-error: U+465A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u465B");
    },
    Error,
    "encode-error: U+465B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u465C");
    },
    Error,
    "encode-error: U+465C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u465D");
    },
    Error,
    "encode-error: U+465D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u465E");
    },
    Error,
    "encode-error: U+465E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u465F");
    },
    Error,
    "encode-error: U+465F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4660");
    },
    Error,
    "encode-error: U+4660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4661");
    },
    Error,
    "encode-error: U+4661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4662");
    },
    Error,
    "encode-error: U+4662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4663");
    },
    Error,
    "encode-error: U+4663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4664");
    },
    Error,
    "encode-error: U+4664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4665");
    },
    Error,
    "encode-error: U+4665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4666");
    },
    Error,
    "encode-error: U+4666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4667");
    },
    Error,
    "encode-error: U+4667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4668");
    },
    Error,
    "encode-error: U+4668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4669");
    },
    Error,
    "encode-error: U+4669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u466A");
    },
    Error,
    "encode-error: U+466A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u466B");
    },
    Error,
    "encode-error: U+466B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u466C");
    },
    Error,
    "encode-error: U+466C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u466D");
    },
    Error,
    "encode-error: U+466D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u466E");
    },
    Error,
    "encode-error: U+466E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u466F");
    },
    Error,
    "encode-error: U+466F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4670");
    },
    Error,
    "encode-error: U+4670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4671");
    },
    Error,
    "encode-error: U+4671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4672");
    },
    Error,
    "encode-error: U+4672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4673");
    },
    Error,
    "encode-error: U+4673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4674");
    },
    Error,
    "encode-error: U+4674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4675");
    },
    Error,
    "encode-error: U+4675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4676");
    },
    Error,
    "encode-error: U+4676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4677");
    },
    Error,
    "encode-error: U+4677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4678");
    },
    Error,
    "encode-error: U+4678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4679");
    },
    Error,
    "encode-error: U+4679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u467A");
    },
    Error,
    "encode-error: U+467A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u467B");
    },
    Error,
    "encode-error: U+467B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u467C");
    },
    Error,
    "encode-error: U+467C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u467D");
    },
    Error,
    "encode-error: U+467D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u467E");
    },
    Error,
    "encode-error: U+467E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u467F");
    },
    Error,
    "encode-error: U+467F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4680");
    },
    Error,
    "encode-error: U+4680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4681");
    },
    Error,
    "encode-error: U+4681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4682");
    },
    Error,
    "encode-error: U+4682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4683");
    },
    Error,
    "encode-error: U+4683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4684");
    },
    Error,
    "encode-error: U+4684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4685");
    },
    Error,
    "encode-error: U+4685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4686");
    },
    Error,
    "encode-error: U+4686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4687");
    },
    Error,
    "encode-error: U+4687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4688");
    },
    Error,
    "encode-error: U+4688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4689");
    },
    Error,
    "encode-error: U+4689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u468A");
    },
    Error,
    "encode-error: U+468A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u468B");
    },
    Error,
    "encode-error: U+468B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u468C");
    },
    Error,
    "encode-error: U+468C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u468D");
    },
    Error,
    "encode-error: U+468D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u468E");
    },
    Error,
    "encode-error: U+468E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u468F");
    },
    Error,
    "encode-error: U+468F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4690");
    },
    Error,
    "encode-error: U+4690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4691");
    },
    Error,
    "encode-error: U+4691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4692");
    },
    Error,
    "encode-error: U+4692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4693");
    },
    Error,
    "encode-error: U+4693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4694");
    },
    Error,
    "encode-error: U+4694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4695");
    },
    Error,
    "encode-error: U+4695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4696");
    },
    Error,
    "encode-error: U+4696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4697");
    },
    Error,
    "encode-error: U+4697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4698");
    },
    Error,
    "encode-error: U+4698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4699");
    },
    Error,
    "encode-error: U+4699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u469A");
    },
    Error,
    "encode-error: U+469A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u469B");
    },
    Error,
    "encode-error: U+469B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u469C");
    },
    Error,
    "encode-error: U+469C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u469D");
    },
    Error,
    "encode-error: U+469D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u469E");
    },
    Error,
    "encode-error: U+469E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u469F");
    },
    Error,
    "encode-error: U+469F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46A0");
    },
    Error,
    "encode-error: U+46A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46A1");
    },
    Error,
    "encode-error: U+46A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46A2");
    },
    Error,
    "encode-error: U+46A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46A3");
    },
    Error,
    "encode-error: U+46A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46A4");
    },
    Error,
    "encode-error: U+46A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46A5");
    },
    Error,
    "encode-error: U+46A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46A6");
    },
    Error,
    "encode-error: U+46A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46A7");
    },
    Error,
    "encode-error: U+46A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46A8");
    },
    Error,
    "encode-error: U+46A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46A9");
    },
    Error,
    "encode-error: U+46A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46AA");
    },
    Error,
    "encode-error: U+46AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46AB");
    },
    Error,
    "encode-error: U+46AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46AC");
    },
    Error,
    "encode-error: U+46AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46AD");
    },
    Error,
    "encode-error: U+46AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46AE");
    },
    Error,
    "encode-error: U+46AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46AF");
    },
    Error,
    "encode-error: U+46AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46B0");
    },
    Error,
    "encode-error: U+46B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46B1");
    },
    Error,
    "encode-error: U+46B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46B2");
    },
    Error,
    "encode-error: U+46B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46B3");
    },
    Error,
    "encode-error: U+46B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46B4");
    },
    Error,
    "encode-error: U+46B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46B5");
    },
    Error,
    "encode-error: U+46B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46B6");
    },
    Error,
    "encode-error: U+46B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46B7");
    },
    Error,
    "encode-error: U+46B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46B8");
    },
    Error,
    "encode-error: U+46B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46B9");
    },
    Error,
    "encode-error: U+46B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46BA");
    },
    Error,
    "encode-error: U+46BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46BB");
    },
    Error,
    "encode-error: U+46BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46BC");
    },
    Error,
    "encode-error: U+46BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46BD");
    },
    Error,
    "encode-error: U+46BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46BE");
    },
    Error,
    "encode-error: U+46BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46BF");
    },
    Error,
    "encode-error: U+46BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46C0");
    },
    Error,
    "encode-error: U+46C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46C1");
    },
    Error,
    "encode-error: U+46C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46C2");
    },
    Error,
    "encode-error: U+46C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46C3");
    },
    Error,
    "encode-error: U+46C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46C4");
    },
    Error,
    "encode-error: U+46C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46C5");
    },
    Error,
    "encode-error: U+46C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46C6");
    },
    Error,
    "encode-error: U+46C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46C7");
    },
    Error,
    "encode-error: U+46C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46C8");
    },
    Error,
    "encode-error: U+46C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46C9");
    },
    Error,
    "encode-error: U+46C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46CA");
    },
    Error,
    "encode-error: U+46CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46CB");
    },
    Error,
    "encode-error: U+46CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46CC");
    },
    Error,
    "encode-error: U+46CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46CD");
    },
    Error,
    "encode-error: U+46CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46CE");
    },
    Error,
    "encode-error: U+46CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46CF");
    },
    Error,
    "encode-error: U+46CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46D0");
    },
    Error,
    "encode-error: U+46D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46D1");
    },
    Error,
    "encode-error: U+46D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46D2");
    },
    Error,
    "encode-error: U+46D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46D3");
    },
    Error,
    "encode-error: U+46D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46D4");
    },
    Error,
    "encode-error: U+46D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46D5");
    },
    Error,
    "encode-error: U+46D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46D6");
    },
    Error,
    "encode-error: U+46D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46D7");
    },
    Error,
    "encode-error: U+46D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46D8");
    },
    Error,
    "encode-error: U+46D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46D9");
    },
    Error,
    "encode-error: U+46D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46DA");
    },
    Error,
    "encode-error: U+46DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46DB");
    },
    Error,
    "encode-error: U+46DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46DC");
    },
    Error,
    "encode-error: U+46DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46DD");
    },
    Error,
    "encode-error: U+46DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46DE");
    },
    Error,
    "encode-error: U+46DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46DF");
    },
    Error,
    "encode-error: U+46DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46E0");
    },
    Error,
    "encode-error: U+46E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46E1");
    },
    Error,
    "encode-error: U+46E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46E2");
    },
    Error,
    "encode-error: U+46E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46E3");
    },
    Error,
    "encode-error: U+46E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46E4");
    },
    Error,
    "encode-error: U+46E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46E5");
    },
    Error,
    "encode-error: U+46E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46E6");
    },
    Error,
    "encode-error: U+46E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46E7");
    },
    Error,
    "encode-error: U+46E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46E8");
    },
    Error,
    "encode-error: U+46E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46E9");
    },
    Error,
    "encode-error: U+46E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46EA");
    },
    Error,
    "encode-error: U+46EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46EB");
    },
    Error,
    "encode-error: U+46EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46EC");
    },
    Error,
    "encode-error: U+46EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46ED");
    },
    Error,
    "encode-error: U+46ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46EE");
    },
    Error,
    "encode-error: U+46EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46EF");
    },
    Error,
    "encode-error: U+46EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46F0");
    },
    Error,
    "encode-error: U+46F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46F1");
    },
    Error,
    "encode-error: U+46F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46F2");
    },
    Error,
    "encode-error: U+46F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46F3");
    },
    Error,
    "encode-error: U+46F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46F4");
    },
    Error,
    "encode-error: U+46F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46F5");
    },
    Error,
    "encode-error: U+46F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46F6");
    },
    Error,
    "encode-error: U+46F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46F7");
    },
    Error,
    "encode-error: U+46F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46F8");
    },
    Error,
    "encode-error: U+46F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46F9");
    },
    Error,
    "encode-error: U+46F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46FA");
    },
    Error,
    "encode-error: U+46FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46FB");
    },
    Error,
    "encode-error: U+46FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46FC");
    },
    Error,
    "encode-error: U+46FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46FD");
    },
    Error,
    "encode-error: U+46FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46FE");
    },
    Error,
    "encode-error: U+46FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u46FF");
    },
    Error,
    "encode-error: U+46FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4700");
    },
    Error,
    "encode-error: U+4700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4701");
    },
    Error,
    "encode-error: U+4701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4702");
    },
    Error,
    "encode-error: U+4702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4703");
    },
    Error,
    "encode-error: U+4703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4704");
    },
    Error,
    "encode-error: U+4704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4705");
    },
    Error,
    "encode-error: U+4705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4706");
    },
    Error,
    "encode-error: U+4706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4707");
    },
    Error,
    "encode-error: U+4707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4708");
    },
    Error,
    "encode-error: U+4708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4709");
    },
    Error,
    "encode-error: U+4709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u470A");
    },
    Error,
    "encode-error: U+470A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u470B");
    },
    Error,
    "encode-error: U+470B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u470C");
    },
    Error,
    "encode-error: U+470C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u470D");
    },
    Error,
    "encode-error: U+470D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u470E");
    },
    Error,
    "encode-error: U+470E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u470F");
    },
    Error,
    "encode-error: U+470F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4710");
    },
    Error,
    "encode-error: U+4710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4711");
    },
    Error,
    "encode-error: U+4711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4712");
    },
    Error,
    "encode-error: U+4712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4713");
    },
    Error,
    "encode-error: U+4713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4714");
    },
    Error,
    "encode-error: U+4714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4715");
    },
    Error,
    "encode-error: U+4715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4716");
    },
    Error,
    "encode-error: U+4716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4717");
    },
    Error,
    "encode-error: U+4717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4718");
    },
    Error,
    "encode-error: U+4718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4719");
    },
    Error,
    "encode-error: U+4719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u471A");
    },
    Error,
    "encode-error: U+471A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u471B");
    },
    Error,
    "encode-error: U+471B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u471C");
    },
    Error,
    "encode-error: U+471C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u471D");
    },
    Error,
    "encode-error: U+471D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u471E");
    },
    Error,
    "encode-error: U+471E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u471F");
    },
    Error,
    "encode-error: U+471F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4720");
    },
    Error,
    "encode-error: U+4720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4721");
    },
    Error,
    "encode-error: U+4721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4722");
    },
    Error,
    "encode-error: U+4722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4723");
    },
    Error,
    "encode-error: U+4723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4724");
    },
    Error,
    "encode-error: U+4724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4725");
    },
    Error,
    "encode-error: U+4725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4726");
    },
    Error,
    "encode-error: U+4726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4727");
    },
    Error,
    "encode-error: U+4727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4728");
    },
    Error,
    "encode-error: U+4728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4729");
    },
    Error,
    "encode-error: U+4729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u472A");
    },
    Error,
    "encode-error: U+472A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u472B");
    },
    Error,
    "encode-error: U+472B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u472C");
    },
    Error,
    "encode-error: U+472C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u472D");
    },
    Error,
    "encode-error: U+472D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u472E");
    },
    Error,
    "encode-error: U+472E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u472F");
    },
    Error,
    "encode-error: U+472F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4730");
    },
    Error,
    "encode-error: U+4730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4731");
    },
    Error,
    "encode-error: U+4731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4732");
    },
    Error,
    "encode-error: U+4732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4733");
    },
    Error,
    "encode-error: U+4733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4734");
    },
    Error,
    "encode-error: U+4734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4735");
    },
    Error,
    "encode-error: U+4735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4736");
    },
    Error,
    "encode-error: U+4736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4737");
    },
    Error,
    "encode-error: U+4737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4738");
    },
    Error,
    "encode-error: U+4738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4739");
    },
    Error,
    "encode-error: U+4739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u473A");
    },
    Error,
    "encode-error: U+473A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u473B");
    },
    Error,
    "encode-error: U+473B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u473C");
    },
    Error,
    "encode-error: U+473C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u473D");
    },
    Error,
    "encode-error: U+473D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u473E");
    },
    Error,
    "encode-error: U+473E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u473F");
    },
    Error,
    "encode-error: U+473F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4740");
    },
    Error,
    "encode-error: U+4740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4741");
    },
    Error,
    "encode-error: U+4741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4742");
    },
    Error,
    "encode-error: U+4742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4743");
    },
    Error,
    "encode-error: U+4743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4744");
    },
    Error,
    "encode-error: U+4744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4745");
    },
    Error,
    "encode-error: U+4745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4746");
    },
    Error,
    "encode-error: U+4746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4747");
    },
    Error,
    "encode-error: U+4747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4748");
    },
    Error,
    "encode-error: U+4748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4749");
    },
    Error,
    "encode-error: U+4749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u474A");
    },
    Error,
    "encode-error: U+474A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u474B");
    },
    Error,
    "encode-error: U+474B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u474C");
    },
    Error,
    "encode-error: U+474C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u474D");
    },
    Error,
    "encode-error: U+474D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u474E");
    },
    Error,
    "encode-error: U+474E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u474F");
    },
    Error,
    "encode-error: U+474F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4750");
    },
    Error,
    "encode-error: U+4750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4751");
    },
    Error,
    "encode-error: U+4751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4752");
    },
    Error,
    "encode-error: U+4752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4753");
    },
    Error,
    "encode-error: U+4753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4754");
    },
    Error,
    "encode-error: U+4754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4755");
    },
    Error,
    "encode-error: U+4755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4756");
    },
    Error,
    "encode-error: U+4756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4757");
    },
    Error,
    "encode-error: U+4757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4758");
    },
    Error,
    "encode-error: U+4758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4759");
    },
    Error,
    "encode-error: U+4759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u475A");
    },
    Error,
    "encode-error: U+475A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u475B");
    },
    Error,
    "encode-error: U+475B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u475C");
    },
    Error,
    "encode-error: U+475C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u475D");
    },
    Error,
    "encode-error: U+475D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u475E");
    },
    Error,
    "encode-error: U+475E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u475F");
    },
    Error,
    "encode-error: U+475F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4760");
    },
    Error,
    "encode-error: U+4760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4761");
    },
    Error,
    "encode-error: U+4761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4762");
    },
    Error,
    "encode-error: U+4762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4763");
    },
    Error,
    "encode-error: U+4763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4764");
    },
    Error,
    "encode-error: U+4764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4765");
    },
    Error,
    "encode-error: U+4765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4766");
    },
    Error,
    "encode-error: U+4766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4767");
    },
    Error,
    "encode-error: U+4767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4768");
    },
    Error,
    "encode-error: U+4768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4769");
    },
    Error,
    "encode-error: U+4769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u476A");
    },
    Error,
    "encode-error: U+476A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u476B");
    },
    Error,
    "encode-error: U+476B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u476C");
    },
    Error,
    "encode-error: U+476C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u476D");
    },
    Error,
    "encode-error: U+476D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u476E");
    },
    Error,
    "encode-error: U+476E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u476F");
    },
    Error,
    "encode-error: U+476F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4770");
    },
    Error,
    "encode-error: U+4770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4771");
    },
    Error,
    "encode-error: U+4771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4772");
    },
    Error,
    "encode-error: U+4772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4773");
    },
    Error,
    "encode-error: U+4773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4774");
    },
    Error,
    "encode-error: U+4774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4775");
    },
    Error,
    "encode-error: U+4775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4776");
    },
    Error,
    "encode-error: U+4776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4777");
    },
    Error,
    "encode-error: U+4777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4778");
    },
    Error,
    "encode-error: U+4778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4779");
    },
    Error,
    "encode-error: U+4779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u477A");
    },
    Error,
    "encode-error: U+477A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u477B");
    },
    Error,
    "encode-error: U+477B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u477C");
    },
    Error,
    "encode-error: U+477C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u477D");
    },
    Error,
    "encode-error: U+477D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u477E");
    },
    Error,
    "encode-error: U+477E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u477F");
    },
    Error,
    "encode-error: U+477F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4780");
    },
    Error,
    "encode-error: U+4780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4781");
    },
    Error,
    "encode-error: U+4781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4782");
    },
    Error,
    "encode-error: U+4782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4783");
    },
    Error,
    "encode-error: U+4783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4784");
    },
    Error,
    "encode-error: U+4784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4785");
    },
    Error,
    "encode-error: U+4785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4786");
    },
    Error,
    "encode-error: U+4786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4787");
    },
    Error,
    "encode-error: U+4787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4788");
    },
    Error,
    "encode-error: U+4788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4789");
    },
    Error,
    "encode-error: U+4789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u478A");
    },
    Error,
    "encode-error: U+478A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u478B");
    },
    Error,
    "encode-error: U+478B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u478C");
    },
    Error,
    "encode-error: U+478C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u478D");
    },
    Error,
    "encode-error: U+478D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u478E");
    },
    Error,
    "encode-error: U+478E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u478F");
    },
    Error,
    "encode-error: U+478F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4790");
    },
    Error,
    "encode-error: U+4790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4791");
    },
    Error,
    "encode-error: U+4791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4792");
    },
    Error,
    "encode-error: U+4792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4793");
    },
    Error,
    "encode-error: U+4793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4794");
    },
    Error,
    "encode-error: U+4794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4795");
    },
    Error,
    "encode-error: U+4795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4796");
    },
    Error,
    "encode-error: U+4796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4797");
    },
    Error,
    "encode-error: U+4797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4798");
    },
    Error,
    "encode-error: U+4798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4799");
    },
    Error,
    "encode-error: U+4799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u479A");
    },
    Error,
    "encode-error: U+479A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u479B");
    },
    Error,
    "encode-error: U+479B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u479C");
    },
    Error,
    "encode-error: U+479C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u479D");
    },
    Error,
    "encode-error: U+479D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u479E");
    },
    Error,
    "encode-error: U+479E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u479F");
    },
    Error,
    "encode-error: U+479F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47A0");
    },
    Error,
    "encode-error: U+47A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47A1");
    },
    Error,
    "encode-error: U+47A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47A2");
    },
    Error,
    "encode-error: U+47A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47A3");
    },
    Error,
    "encode-error: U+47A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47A4");
    },
    Error,
    "encode-error: U+47A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47A5");
    },
    Error,
    "encode-error: U+47A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47A6");
    },
    Error,
    "encode-error: U+47A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47A7");
    },
    Error,
    "encode-error: U+47A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47A8");
    },
    Error,
    "encode-error: U+47A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47A9");
    },
    Error,
    "encode-error: U+47A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47AA");
    },
    Error,
    "encode-error: U+47AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47AB");
    },
    Error,
    "encode-error: U+47AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47AC");
    },
    Error,
    "encode-error: U+47AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47AD");
    },
    Error,
    "encode-error: U+47AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47AE");
    },
    Error,
    "encode-error: U+47AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47AF");
    },
    Error,
    "encode-error: U+47AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47B0");
    },
    Error,
    "encode-error: U+47B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47B1");
    },
    Error,
    "encode-error: U+47B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47B2");
    },
    Error,
    "encode-error: U+47B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47B3");
    },
    Error,
    "encode-error: U+47B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47B4");
    },
    Error,
    "encode-error: U+47B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47B5");
    },
    Error,
    "encode-error: U+47B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47B6");
    },
    Error,
    "encode-error: U+47B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47B7");
    },
    Error,
    "encode-error: U+47B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47B8");
    },
    Error,
    "encode-error: U+47B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47B9");
    },
    Error,
    "encode-error: U+47B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47BA");
    },
    Error,
    "encode-error: U+47BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47BB");
    },
    Error,
    "encode-error: U+47BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47BC");
    },
    Error,
    "encode-error: U+47BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47BD");
    },
    Error,
    "encode-error: U+47BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47BE");
    },
    Error,
    "encode-error: U+47BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47BF");
    },
    Error,
    "encode-error: U+47BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47C0");
    },
    Error,
    "encode-error: U+47C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47C1");
    },
    Error,
    "encode-error: U+47C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47C2");
    },
    Error,
    "encode-error: U+47C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47C3");
    },
    Error,
    "encode-error: U+47C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47C4");
    },
    Error,
    "encode-error: U+47C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47C5");
    },
    Error,
    "encode-error: U+47C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47C6");
    },
    Error,
    "encode-error: U+47C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47C7");
    },
    Error,
    "encode-error: U+47C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47C8");
    },
    Error,
    "encode-error: U+47C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47C9");
    },
    Error,
    "encode-error: U+47C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47CA");
    },
    Error,
    "encode-error: U+47CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47CB");
    },
    Error,
    "encode-error: U+47CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47CC");
    },
    Error,
    "encode-error: U+47CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47CD");
    },
    Error,
    "encode-error: U+47CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47CE");
    },
    Error,
    "encode-error: U+47CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47CF");
    },
    Error,
    "encode-error: U+47CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47D0");
    },
    Error,
    "encode-error: U+47D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47D1");
    },
    Error,
    "encode-error: U+47D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47D2");
    },
    Error,
    "encode-error: U+47D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47D3");
    },
    Error,
    "encode-error: U+47D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47D4");
    },
    Error,
    "encode-error: U+47D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47D5");
    },
    Error,
    "encode-error: U+47D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47D6");
    },
    Error,
    "encode-error: U+47D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47D7");
    },
    Error,
    "encode-error: U+47D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47D8");
    },
    Error,
    "encode-error: U+47D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47D9");
    },
    Error,
    "encode-error: U+47D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47DA");
    },
    Error,
    "encode-error: U+47DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47DB");
    },
    Error,
    "encode-error: U+47DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47DC");
    },
    Error,
    "encode-error: U+47DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47DD");
    },
    Error,
    "encode-error: U+47DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47DE");
    },
    Error,
    "encode-error: U+47DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47DF");
    },
    Error,
    "encode-error: U+47DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47E0");
    },
    Error,
    "encode-error: U+47E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47E1");
    },
    Error,
    "encode-error: U+47E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47E2");
    },
    Error,
    "encode-error: U+47E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47E3");
    },
    Error,
    "encode-error: U+47E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47E4");
    },
    Error,
    "encode-error: U+47E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47E5");
    },
    Error,
    "encode-error: U+47E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47E6");
    },
    Error,
    "encode-error: U+47E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47E7");
    },
    Error,
    "encode-error: U+47E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47E8");
    },
    Error,
    "encode-error: U+47E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47E9");
    },
    Error,
    "encode-error: U+47E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47EA");
    },
    Error,
    "encode-error: U+47EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47EB");
    },
    Error,
    "encode-error: U+47EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47EC");
    },
    Error,
    "encode-error: U+47EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47ED");
    },
    Error,
    "encode-error: U+47ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47EE");
    },
    Error,
    "encode-error: U+47EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47EF");
    },
    Error,
    "encode-error: U+47EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47F0");
    },
    Error,
    "encode-error: U+47F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47F1");
    },
    Error,
    "encode-error: U+47F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47F2");
    },
    Error,
    "encode-error: U+47F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47F3");
    },
    Error,
    "encode-error: U+47F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47F4");
    },
    Error,
    "encode-error: U+47F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47F5");
    },
    Error,
    "encode-error: U+47F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47F6");
    },
    Error,
    "encode-error: U+47F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47F7");
    },
    Error,
    "encode-error: U+47F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47F8");
    },
    Error,
    "encode-error: U+47F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47F9");
    },
    Error,
    "encode-error: U+47F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47FA");
    },
    Error,
    "encode-error: U+47FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47FB");
    },
    Error,
    "encode-error: U+47FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47FC");
    },
    Error,
    "encode-error: U+47FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47FD");
    },
    Error,
    "encode-error: U+47FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47FE");
    },
    Error,
    "encode-error: U+47FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u47FF");
    },
    Error,
    "encode-error: U+47FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4800");
    },
    Error,
    "encode-error: U+4800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4801");
    },
    Error,
    "encode-error: U+4801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4802");
    },
    Error,
    "encode-error: U+4802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4803");
    },
    Error,
    "encode-error: U+4803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4804");
    },
    Error,
    "encode-error: U+4804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4805");
    },
    Error,
    "encode-error: U+4805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4806");
    },
    Error,
    "encode-error: U+4806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4807");
    },
    Error,
    "encode-error: U+4807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4808");
    },
    Error,
    "encode-error: U+4808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4809");
    },
    Error,
    "encode-error: U+4809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u480A");
    },
    Error,
    "encode-error: U+480A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u480B");
    },
    Error,
    "encode-error: U+480B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u480C");
    },
    Error,
    "encode-error: U+480C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u480D");
    },
    Error,
    "encode-error: U+480D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u480E");
    },
    Error,
    "encode-error: U+480E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u480F");
    },
    Error,
    "encode-error: U+480F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4810");
    },
    Error,
    "encode-error: U+4810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4811");
    },
    Error,
    "encode-error: U+4811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4812");
    },
    Error,
    "encode-error: U+4812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4813");
    },
    Error,
    "encode-error: U+4813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4814");
    },
    Error,
    "encode-error: U+4814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4815");
    },
    Error,
    "encode-error: U+4815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4816");
    },
    Error,
    "encode-error: U+4816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4817");
    },
    Error,
    "encode-error: U+4817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4818");
    },
    Error,
    "encode-error: U+4818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4819");
    },
    Error,
    "encode-error: U+4819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u481A");
    },
    Error,
    "encode-error: U+481A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u481B");
    },
    Error,
    "encode-error: U+481B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u481C");
    },
    Error,
    "encode-error: U+481C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u481D");
    },
    Error,
    "encode-error: U+481D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u481E");
    },
    Error,
    "encode-error: U+481E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u481F");
    },
    Error,
    "encode-error: U+481F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4820");
    },
    Error,
    "encode-error: U+4820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4821");
    },
    Error,
    "encode-error: U+4821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4822");
    },
    Error,
    "encode-error: U+4822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4823");
    },
    Error,
    "encode-error: U+4823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4824");
    },
    Error,
    "encode-error: U+4824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4825");
    },
    Error,
    "encode-error: U+4825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4826");
    },
    Error,
    "encode-error: U+4826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4827");
    },
    Error,
    "encode-error: U+4827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4828");
    },
    Error,
    "encode-error: U+4828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4829");
    },
    Error,
    "encode-error: U+4829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u482A");
    },
    Error,
    "encode-error: U+482A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u482B");
    },
    Error,
    "encode-error: U+482B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u482C");
    },
    Error,
    "encode-error: U+482C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u482D");
    },
    Error,
    "encode-error: U+482D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u482E");
    },
    Error,
    "encode-error: U+482E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u482F");
    },
    Error,
    "encode-error: U+482F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4830");
    },
    Error,
    "encode-error: U+4830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4831");
    },
    Error,
    "encode-error: U+4831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4832");
    },
    Error,
    "encode-error: U+4832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4833");
    },
    Error,
    "encode-error: U+4833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4834");
    },
    Error,
    "encode-error: U+4834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4835");
    },
    Error,
    "encode-error: U+4835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4836");
    },
    Error,
    "encode-error: U+4836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4837");
    },
    Error,
    "encode-error: U+4837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4838");
    },
    Error,
    "encode-error: U+4838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4839");
    },
    Error,
    "encode-error: U+4839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u483A");
    },
    Error,
    "encode-error: U+483A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u483B");
    },
    Error,
    "encode-error: U+483B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u483C");
    },
    Error,
    "encode-error: U+483C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u483D");
    },
    Error,
    "encode-error: U+483D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u483E");
    },
    Error,
    "encode-error: U+483E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u483F");
    },
    Error,
    "encode-error: U+483F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4840");
    },
    Error,
    "encode-error: U+4840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4841");
    },
    Error,
    "encode-error: U+4841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4842");
    },
    Error,
    "encode-error: U+4842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4843");
    },
    Error,
    "encode-error: U+4843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4844");
    },
    Error,
    "encode-error: U+4844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4845");
    },
    Error,
    "encode-error: U+4845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4846");
    },
    Error,
    "encode-error: U+4846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4847");
    },
    Error,
    "encode-error: U+4847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4848");
    },
    Error,
    "encode-error: U+4848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4849");
    },
    Error,
    "encode-error: U+4849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u484A");
    },
    Error,
    "encode-error: U+484A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u484B");
    },
    Error,
    "encode-error: U+484B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u484C");
    },
    Error,
    "encode-error: U+484C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u484D");
    },
    Error,
    "encode-error: U+484D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u484E");
    },
    Error,
    "encode-error: U+484E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u484F");
    },
    Error,
    "encode-error: U+484F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4850");
    },
    Error,
    "encode-error: U+4850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4851");
    },
    Error,
    "encode-error: U+4851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4852");
    },
    Error,
    "encode-error: U+4852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4853");
    },
    Error,
    "encode-error: U+4853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4854");
    },
    Error,
    "encode-error: U+4854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4855");
    },
    Error,
    "encode-error: U+4855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4856");
    },
    Error,
    "encode-error: U+4856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4857");
    },
    Error,
    "encode-error: U+4857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4858");
    },
    Error,
    "encode-error: U+4858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4859");
    },
    Error,
    "encode-error: U+4859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u485A");
    },
    Error,
    "encode-error: U+485A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u485B");
    },
    Error,
    "encode-error: U+485B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u485C");
    },
    Error,
    "encode-error: U+485C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u485D");
    },
    Error,
    "encode-error: U+485D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u485E");
    },
    Error,
    "encode-error: U+485E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u485F");
    },
    Error,
    "encode-error: U+485F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4860");
    },
    Error,
    "encode-error: U+4860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4861");
    },
    Error,
    "encode-error: U+4861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4862");
    },
    Error,
    "encode-error: U+4862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4863");
    },
    Error,
    "encode-error: U+4863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4864");
    },
    Error,
    "encode-error: U+4864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4865");
    },
    Error,
    "encode-error: U+4865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4866");
    },
    Error,
    "encode-error: U+4866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4867");
    },
    Error,
    "encode-error: U+4867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4868");
    },
    Error,
    "encode-error: U+4868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4869");
    },
    Error,
    "encode-error: U+4869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u486A");
    },
    Error,
    "encode-error: U+486A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u486B");
    },
    Error,
    "encode-error: U+486B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u486C");
    },
    Error,
    "encode-error: U+486C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u486D");
    },
    Error,
    "encode-error: U+486D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u486E");
    },
    Error,
    "encode-error: U+486E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u486F");
    },
    Error,
    "encode-error: U+486F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4870");
    },
    Error,
    "encode-error: U+4870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4871");
    },
    Error,
    "encode-error: U+4871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4872");
    },
    Error,
    "encode-error: U+4872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4873");
    },
    Error,
    "encode-error: U+4873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4874");
    },
    Error,
    "encode-error: U+4874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4875");
    },
    Error,
    "encode-error: U+4875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4876");
    },
    Error,
    "encode-error: U+4876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4877");
    },
    Error,
    "encode-error: U+4877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4878");
    },
    Error,
    "encode-error: U+4878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4879");
    },
    Error,
    "encode-error: U+4879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u487A");
    },
    Error,
    "encode-error: U+487A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u487B");
    },
    Error,
    "encode-error: U+487B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u487C");
    },
    Error,
    "encode-error: U+487C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u487D");
    },
    Error,
    "encode-error: U+487D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u487E");
    },
    Error,
    "encode-error: U+487E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u487F");
    },
    Error,
    "encode-error: U+487F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4880");
    },
    Error,
    "encode-error: U+4880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4881");
    },
    Error,
    "encode-error: U+4881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4882");
    },
    Error,
    "encode-error: U+4882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4883");
    },
    Error,
    "encode-error: U+4883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4884");
    },
    Error,
    "encode-error: U+4884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4885");
    },
    Error,
    "encode-error: U+4885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4886");
    },
    Error,
    "encode-error: U+4886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4887");
    },
    Error,
    "encode-error: U+4887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4888");
    },
    Error,
    "encode-error: U+4888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4889");
    },
    Error,
    "encode-error: U+4889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u488A");
    },
    Error,
    "encode-error: U+488A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u488B");
    },
    Error,
    "encode-error: U+488B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u488C");
    },
    Error,
    "encode-error: U+488C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u488D");
    },
    Error,
    "encode-error: U+488D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u488E");
    },
    Error,
    "encode-error: U+488E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u488F");
    },
    Error,
    "encode-error: U+488F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4890");
    },
    Error,
    "encode-error: U+4890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4891");
    },
    Error,
    "encode-error: U+4891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4892");
    },
    Error,
    "encode-error: U+4892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4893");
    },
    Error,
    "encode-error: U+4893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4894");
    },
    Error,
    "encode-error: U+4894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4895");
    },
    Error,
    "encode-error: U+4895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4896");
    },
    Error,
    "encode-error: U+4896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4897");
    },
    Error,
    "encode-error: U+4897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4898");
    },
    Error,
    "encode-error: U+4898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4899");
    },
    Error,
    "encode-error: U+4899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u489A");
    },
    Error,
    "encode-error: U+489A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u489B");
    },
    Error,
    "encode-error: U+489B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u489C");
    },
    Error,
    "encode-error: U+489C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u489D");
    },
    Error,
    "encode-error: U+489D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u489E");
    },
    Error,
    "encode-error: U+489E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u489F");
    },
    Error,
    "encode-error: U+489F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48A0");
    },
    Error,
    "encode-error: U+48A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48A1");
    },
    Error,
    "encode-error: U+48A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48A2");
    },
    Error,
    "encode-error: U+48A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48A3");
    },
    Error,
    "encode-error: U+48A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48A4");
    },
    Error,
    "encode-error: U+48A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48A5");
    },
    Error,
    "encode-error: U+48A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48A6");
    },
    Error,
    "encode-error: U+48A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48A7");
    },
    Error,
    "encode-error: U+48A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48A8");
    },
    Error,
    "encode-error: U+48A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48A9");
    },
    Error,
    "encode-error: U+48A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48AA");
    },
    Error,
    "encode-error: U+48AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48AB");
    },
    Error,
    "encode-error: U+48AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48AC");
    },
    Error,
    "encode-error: U+48AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48AD");
    },
    Error,
    "encode-error: U+48AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48AE");
    },
    Error,
    "encode-error: U+48AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48AF");
    },
    Error,
    "encode-error: U+48AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48B0");
    },
    Error,
    "encode-error: U+48B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48B1");
    },
    Error,
    "encode-error: U+48B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48B2");
    },
    Error,
    "encode-error: U+48B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48B3");
    },
    Error,
    "encode-error: U+48B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48B4");
    },
    Error,
    "encode-error: U+48B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48B5");
    },
    Error,
    "encode-error: U+48B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48B6");
    },
    Error,
    "encode-error: U+48B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48B7");
    },
    Error,
    "encode-error: U+48B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48B8");
    },
    Error,
    "encode-error: U+48B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48B9");
    },
    Error,
    "encode-error: U+48B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48BA");
    },
    Error,
    "encode-error: U+48BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48BB");
    },
    Error,
    "encode-error: U+48BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48BC");
    },
    Error,
    "encode-error: U+48BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48BD");
    },
    Error,
    "encode-error: U+48BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48BE");
    },
    Error,
    "encode-error: U+48BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48BF");
    },
    Error,
    "encode-error: U+48BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48C0");
    },
    Error,
    "encode-error: U+48C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48C1");
    },
    Error,
    "encode-error: U+48C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48C2");
    },
    Error,
    "encode-error: U+48C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48C3");
    },
    Error,
    "encode-error: U+48C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48C4");
    },
    Error,
    "encode-error: U+48C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48C5");
    },
    Error,
    "encode-error: U+48C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48C6");
    },
    Error,
    "encode-error: U+48C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48C7");
    },
    Error,
    "encode-error: U+48C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48C8");
    },
    Error,
    "encode-error: U+48C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48C9");
    },
    Error,
    "encode-error: U+48C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48CA");
    },
    Error,
    "encode-error: U+48CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48CB");
    },
    Error,
    "encode-error: U+48CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48CC");
    },
    Error,
    "encode-error: U+48CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48CD");
    },
    Error,
    "encode-error: U+48CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48CE");
    },
    Error,
    "encode-error: U+48CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48CF");
    },
    Error,
    "encode-error: U+48CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48D0");
    },
    Error,
    "encode-error: U+48D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48D1");
    },
    Error,
    "encode-error: U+48D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48D2");
    },
    Error,
    "encode-error: U+48D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48D3");
    },
    Error,
    "encode-error: U+48D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48D4");
    },
    Error,
    "encode-error: U+48D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48D5");
    },
    Error,
    "encode-error: U+48D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48D6");
    },
    Error,
    "encode-error: U+48D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48D7");
    },
    Error,
    "encode-error: U+48D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48D8");
    },
    Error,
    "encode-error: U+48D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48D9");
    },
    Error,
    "encode-error: U+48D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48DA");
    },
    Error,
    "encode-error: U+48DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48DB");
    },
    Error,
    "encode-error: U+48DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48DC");
    },
    Error,
    "encode-error: U+48DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48DD");
    },
    Error,
    "encode-error: U+48DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48DE");
    },
    Error,
    "encode-error: U+48DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48DF");
    },
    Error,
    "encode-error: U+48DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48E0");
    },
    Error,
    "encode-error: U+48E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48E1");
    },
    Error,
    "encode-error: U+48E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48E2");
    },
    Error,
    "encode-error: U+48E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48E3");
    },
    Error,
    "encode-error: U+48E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48E4");
    },
    Error,
    "encode-error: U+48E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48E5");
    },
    Error,
    "encode-error: U+48E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48E6");
    },
    Error,
    "encode-error: U+48E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48E7");
    },
    Error,
    "encode-error: U+48E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48E8");
    },
    Error,
    "encode-error: U+48E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48E9");
    },
    Error,
    "encode-error: U+48E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48EA");
    },
    Error,
    "encode-error: U+48EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48EB");
    },
    Error,
    "encode-error: U+48EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48EC");
    },
    Error,
    "encode-error: U+48EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48ED");
    },
    Error,
    "encode-error: U+48ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48EE");
    },
    Error,
    "encode-error: U+48EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48EF");
    },
    Error,
    "encode-error: U+48EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48F0");
    },
    Error,
    "encode-error: U+48F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48F1");
    },
    Error,
    "encode-error: U+48F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48F2");
    },
    Error,
    "encode-error: U+48F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48F3");
    },
    Error,
    "encode-error: U+48F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48F4");
    },
    Error,
    "encode-error: U+48F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48F5");
    },
    Error,
    "encode-error: U+48F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48F6");
    },
    Error,
    "encode-error: U+48F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48F7");
    },
    Error,
    "encode-error: U+48F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48F8");
    },
    Error,
    "encode-error: U+48F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48F9");
    },
    Error,
    "encode-error: U+48F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48FA");
    },
    Error,
    "encode-error: U+48FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48FB");
    },
    Error,
    "encode-error: U+48FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48FC");
    },
    Error,
    "encode-error: U+48FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48FD");
    },
    Error,
    "encode-error: U+48FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48FE");
    },
    Error,
    "encode-error: U+48FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u48FF");
    },
    Error,
    "encode-error: U+48FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4900");
    },
    Error,
    "encode-error: U+4900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4901");
    },
    Error,
    "encode-error: U+4901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4902");
    },
    Error,
    "encode-error: U+4902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4903");
    },
    Error,
    "encode-error: U+4903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4904");
    },
    Error,
    "encode-error: U+4904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4905");
    },
    Error,
    "encode-error: U+4905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4906");
    },
    Error,
    "encode-error: U+4906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4907");
    },
    Error,
    "encode-error: U+4907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4908");
    },
    Error,
    "encode-error: U+4908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4909");
    },
    Error,
    "encode-error: U+4909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u490A");
    },
    Error,
    "encode-error: U+490A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u490B");
    },
    Error,
    "encode-error: U+490B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u490C");
    },
    Error,
    "encode-error: U+490C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u490D");
    },
    Error,
    "encode-error: U+490D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u490E");
    },
    Error,
    "encode-error: U+490E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u490F");
    },
    Error,
    "encode-error: U+490F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4910");
    },
    Error,
    "encode-error: U+4910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4911");
    },
    Error,
    "encode-error: U+4911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4912");
    },
    Error,
    "encode-error: U+4912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4913");
    },
    Error,
    "encode-error: U+4913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4914");
    },
    Error,
    "encode-error: U+4914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4915");
    },
    Error,
    "encode-error: U+4915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4916");
    },
    Error,
    "encode-error: U+4916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4917");
    },
    Error,
    "encode-error: U+4917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4918");
    },
    Error,
    "encode-error: U+4918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4919");
    },
    Error,
    "encode-error: U+4919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u491A");
    },
    Error,
    "encode-error: U+491A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u491B");
    },
    Error,
    "encode-error: U+491B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u491C");
    },
    Error,
    "encode-error: U+491C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u491D");
    },
    Error,
    "encode-error: U+491D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u491E");
    },
    Error,
    "encode-error: U+491E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u491F");
    },
    Error,
    "encode-error: U+491F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4920");
    },
    Error,
    "encode-error: U+4920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4921");
    },
    Error,
    "encode-error: U+4921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4922");
    },
    Error,
    "encode-error: U+4922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4923");
    },
    Error,
    "encode-error: U+4923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4924");
    },
    Error,
    "encode-error: U+4924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4925");
    },
    Error,
    "encode-error: U+4925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4926");
    },
    Error,
    "encode-error: U+4926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4927");
    },
    Error,
    "encode-error: U+4927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4928");
    },
    Error,
    "encode-error: U+4928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4929");
    },
    Error,
    "encode-error: U+4929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u492A");
    },
    Error,
    "encode-error: U+492A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u492B");
    },
    Error,
    "encode-error: U+492B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u492C");
    },
    Error,
    "encode-error: U+492C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u492D");
    },
    Error,
    "encode-error: U+492D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u492E");
    },
    Error,
    "encode-error: U+492E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u492F");
    },
    Error,
    "encode-error: U+492F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4930");
    },
    Error,
    "encode-error: U+4930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4931");
    },
    Error,
    "encode-error: U+4931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4932");
    },
    Error,
    "encode-error: U+4932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4933");
    },
    Error,
    "encode-error: U+4933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4934");
    },
    Error,
    "encode-error: U+4934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4935");
    },
    Error,
    "encode-error: U+4935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4936");
    },
    Error,
    "encode-error: U+4936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4937");
    },
    Error,
    "encode-error: U+4937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4938");
    },
    Error,
    "encode-error: U+4938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4939");
    },
    Error,
    "encode-error: U+4939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u493A");
    },
    Error,
    "encode-error: U+493A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u493B");
    },
    Error,
    "encode-error: U+493B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u493C");
    },
    Error,
    "encode-error: U+493C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u493D");
    },
    Error,
    "encode-error: U+493D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u493E");
    },
    Error,
    "encode-error: U+493E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u493F");
    },
    Error,
    "encode-error: U+493F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4940");
    },
    Error,
    "encode-error: U+4940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4941");
    },
    Error,
    "encode-error: U+4941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4942");
    },
    Error,
    "encode-error: U+4942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4943");
    },
    Error,
    "encode-error: U+4943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4944");
    },
    Error,
    "encode-error: U+4944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4945");
    },
    Error,
    "encode-error: U+4945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4946");
    },
    Error,
    "encode-error: U+4946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4947");
    },
    Error,
    "encode-error: U+4947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4948");
    },
    Error,
    "encode-error: U+4948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4949");
    },
    Error,
    "encode-error: U+4949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u494A");
    },
    Error,
    "encode-error: U+494A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u494B");
    },
    Error,
    "encode-error: U+494B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u494C");
    },
    Error,
    "encode-error: U+494C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u494D");
    },
    Error,
    "encode-error: U+494D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u494E");
    },
    Error,
    "encode-error: U+494E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u494F");
    },
    Error,
    "encode-error: U+494F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4950");
    },
    Error,
    "encode-error: U+4950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4951");
    },
    Error,
    "encode-error: U+4951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4952");
    },
    Error,
    "encode-error: U+4952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4953");
    },
    Error,
    "encode-error: U+4953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4954");
    },
    Error,
    "encode-error: U+4954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4955");
    },
    Error,
    "encode-error: U+4955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4956");
    },
    Error,
    "encode-error: U+4956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4957");
    },
    Error,
    "encode-error: U+4957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4958");
    },
    Error,
    "encode-error: U+4958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4959");
    },
    Error,
    "encode-error: U+4959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u495A");
    },
    Error,
    "encode-error: U+495A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u495B");
    },
    Error,
    "encode-error: U+495B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u495C");
    },
    Error,
    "encode-error: U+495C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u495D");
    },
    Error,
    "encode-error: U+495D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u495E");
    },
    Error,
    "encode-error: U+495E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u495F");
    },
    Error,
    "encode-error: U+495F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4960");
    },
    Error,
    "encode-error: U+4960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4961");
    },
    Error,
    "encode-error: U+4961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4962");
    },
    Error,
    "encode-error: U+4962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4963");
    },
    Error,
    "encode-error: U+4963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4964");
    },
    Error,
    "encode-error: U+4964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4965");
    },
    Error,
    "encode-error: U+4965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4966");
    },
    Error,
    "encode-error: U+4966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4967");
    },
    Error,
    "encode-error: U+4967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4968");
    },
    Error,
    "encode-error: U+4968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4969");
    },
    Error,
    "encode-error: U+4969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u496A");
    },
    Error,
    "encode-error: U+496A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u496B");
    },
    Error,
    "encode-error: U+496B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u496C");
    },
    Error,
    "encode-error: U+496C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u496D");
    },
    Error,
    "encode-error: U+496D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u496E");
    },
    Error,
    "encode-error: U+496E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u496F");
    },
    Error,
    "encode-error: U+496F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4970");
    },
    Error,
    "encode-error: U+4970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4971");
    },
    Error,
    "encode-error: U+4971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4972");
    },
    Error,
    "encode-error: U+4972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4973");
    },
    Error,
    "encode-error: U+4973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4974");
    },
    Error,
    "encode-error: U+4974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4975");
    },
    Error,
    "encode-error: U+4975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4976");
    },
    Error,
    "encode-error: U+4976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4977");
    },
    Error,
    "encode-error: U+4977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4978");
    },
    Error,
    "encode-error: U+4978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4979");
    },
    Error,
    "encode-error: U+4979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u497A");
    },
    Error,
    "encode-error: U+497A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u497B");
    },
    Error,
    "encode-error: U+497B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u497C");
    },
    Error,
    "encode-error: U+497C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u497D");
    },
    Error,
    "encode-error: U+497D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u497E");
    },
    Error,
    "encode-error: U+497E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u497F");
    },
    Error,
    "encode-error: U+497F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4980");
    },
    Error,
    "encode-error: U+4980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4981");
    },
    Error,
    "encode-error: U+4981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4982");
    },
    Error,
    "encode-error: U+4982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4983");
    },
    Error,
    "encode-error: U+4983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4984");
    },
    Error,
    "encode-error: U+4984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4985");
    },
    Error,
    "encode-error: U+4985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4986");
    },
    Error,
    "encode-error: U+4986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4987");
    },
    Error,
    "encode-error: U+4987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4988");
    },
    Error,
    "encode-error: U+4988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4989");
    },
    Error,
    "encode-error: U+4989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u498A");
    },
    Error,
    "encode-error: U+498A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u498B");
    },
    Error,
    "encode-error: U+498B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u498C");
    },
    Error,
    "encode-error: U+498C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u498D");
    },
    Error,
    "encode-error: U+498D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u498E");
    },
    Error,
    "encode-error: U+498E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u498F");
    },
    Error,
    "encode-error: U+498F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4990");
    },
    Error,
    "encode-error: U+4990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4991");
    },
    Error,
    "encode-error: U+4991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4992");
    },
    Error,
    "encode-error: U+4992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4993");
    },
    Error,
    "encode-error: U+4993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4994");
    },
    Error,
    "encode-error: U+4994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4995");
    },
    Error,
    "encode-error: U+4995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4996");
    },
    Error,
    "encode-error: U+4996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4997");
    },
    Error,
    "encode-error: U+4997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4998");
    },
    Error,
    "encode-error: U+4998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4999");
    },
    Error,
    "encode-error: U+4999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u499A");
    },
    Error,
    "encode-error: U+499A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u499B");
    },
    Error,
    "encode-error: U+499B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u499C");
    },
    Error,
    "encode-error: U+499C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u499D");
    },
    Error,
    "encode-error: U+499D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u499E");
    },
    Error,
    "encode-error: U+499E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u499F");
    },
    Error,
    "encode-error: U+499F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49A0");
    },
    Error,
    "encode-error: U+49A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49A1");
    },
    Error,
    "encode-error: U+49A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49A2");
    },
    Error,
    "encode-error: U+49A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49A3");
    },
    Error,
    "encode-error: U+49A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49A4");
    },
    Error,
    "encode-error: U+49A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49A5");
    },
    Error,
    "encode-error: U+49A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49A6");
    },
    Error,
    "encode-error: U+49A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49A7");
    },
    Error,
    "encode-error: U+49A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49A8");
    },
    Error,
    "encode-error: U+49A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49A9");
    },
    Error,
    "encode-error: U+49A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49AA");
    },
    Error,
    "encode-error: U+49AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49AB");
    },
    Error,
    "encode-error: U+49AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49AC");
    },
    Error,
    "encode-error: U+49AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49AD");
    },
    Error,
    "encode-error: U+49AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49AE");
    },
    Error,
    "encode-error: U+49AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49AF");
    },
    Error,
    "encode-error: U+49AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49B0");
    },
    Error,
    "encode-error: U+49B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49B1");
    },
    Error,
    "encode-error: U+49B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49B2");
    },
    Error,
    "encode-error: U+49B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49B3");
    },
    Error,
    "encode-error: U+49B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49B4");
    },
    Error,
    "encode-error: U+49B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49B5");
    },
    Error,
    "encode-error: U+49B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49B6");
    },
    Error,
    "encode-error: U+49B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49B7");
    },
    Error,
    "encode-error: U+49B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49B8");
    },
    Error,
    "encode-error: U+49B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49B9");
    },
    Error,
    "encode-error: U+49B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49BA");
    },
    Error,
    "encode-error: U+49BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49BB");
    },
    Error,
    "encode-error: U+49BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49BC");
    },
    Error,
    "encode-error: U+49BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49BD");
    },
    Error,
    "encode-error: U+49BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49BE");
    },
    Error,
    "encode-error: U+49BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49BF");
    },
    Error,
    "encode-error: U+49BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49C0");
    },
    Error,
    "encode-error: U+49C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49C1");
    },
    Error,
    "encode-error: U+49C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49C2");
    },
    Error,
    "encode-error: U+49C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49C3");
    },
    Error,
    "encode-error: U+49C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49C4");
    },
    Error,
    "encode-error: U+49C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49C5");
    },
    Error,
    "encode-error: U+49C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49C6");
    },
    Error,
    "encode-error: U+49C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49C7");
    },
    Error,
    "encode-error: U+49C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49C8");
    },
    Error,
    "encode-error: U+49C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49C9");
    },
    Error,
    "encode-error: U+49C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49CA");
    },
    Error,
    "encode-error: U+49CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49CB");
    },
    Error,
    "encode-error: U+49CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49CC");
    },
    Error,
    "encode-error: U+49CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49CD");
    },
    Error,
    "encode-error: U+49CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49CE");
    },
    Error,
    "encode-error: U+49CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49CF");
    },
    Error,
    "encode-error: U+49CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49D0");
    },
    Error,
    "encode-error: U+49D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49D1");
    },
    Error,
    "encode-error: U+49D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49D2");
    },
    Error,
    "encode-error: U+49D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49D3");
    },
    Error,
    "encode-error: U+49D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49D4");
    },
    Error,
    "encode-error: U+49D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49D5");
    },
    Error,
    "encode-error: U+49D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49D6");
    },
    Error,
    "encode-error: U+49D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49D7");
    },
    Error,
    "encode-error: U+49D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49D8");
    },
    Error,
    "encode-error: U+49D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49D9");
    },
    Error,
    "encode-error: U+49D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49DA");
    },
    Error,
    "encode-error: U+49DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49DB");
    },
    Error,
    "encode-error: U+49DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49DC");
    },
    Error,
    "encode-error: U+49DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49DD");
    },
    Error,
    "encode-error: U+49DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49DE");
    },
    Error,
    "encode-error: U+49DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49DF");
    },
    Error,
    "encode-error: U+49DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49E0");
    },
    Error,
    "encode-error: U+49E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49E1");
    },
    Error,
    "encode-error: U+49E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49E2");
    },
    Error,
    "encode-error: U+49E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49E3");
    },
    Error,
    "encode-error: U+49E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49E4");
    },
    Error,
    "encode-error: U+49E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49E5");
    },
    Error,
    "encode-error: U+49E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49E6");
    },
    Error,
    "encode-error: U+49E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49E7");
    },
    Error,
    "encode-error: U+49E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49E8");
    },
    Error,
    "encode-error: U+49E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49E9");
    },
    Error,
    "encode-error: U+49E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49EA");
    },
    Error,
    "encode-error: U+49EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49EB");
    },
    Error,
    "encode-error: U+49EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49EC");
    },
    Error,
    "encode-error: U+49EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49ED");
    },
    Error,
    "encode-error: U+49ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49EE");
    },
    Error,
    "encode-error: U+49EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49EF");
    },
    Error,
    "encode-error: U+49EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49F0");
    },
    Error,
    "encode-error: U+49F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49F1");
    },
    Error,
    "encode-error: U+49F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49F2");
    },
    Error,
    "encode-error: U+49F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49F3");
    },
    Error,
    "encode-error: U+49F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49F4");
    },
    Error,
    "encode-error: U+49F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49F5");
    },
    Error,
    "encode-error: U+49F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49F6");
    },
    Error,
    "encode-error: U+49F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49F7");
    },
    Error,
    "encode-error: U+49F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49F8");
    },
    Error,
    "encode-error: U+49F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49F9");
    },
    Error,
    "encode-error: U+49F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49FA");
    },
    Error,
    "encode-error: U+49FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49FB");
    },
    Error,
    "encode-error: U+49FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49FC");
    },
    Error,
    "encode-error: U+49FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49FD");
    },
    Error,
    "encode-error: U+49FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49FE");
    },
    Error,
    "encode-error: U+49FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u49FF");
    },
    Error,
    "encode-error: U+49FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A00");
    },
    Error,
    "encode-error: U+4A00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A01");
    },
    Error,
    "encode-error: U+4A01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A02");
    },
    Error,
    "encode-error: U+4A02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A03");
    },
    Error,
    "encode-error: U+4A03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A04");
    },
    Error,
    "encode-error: U+4A04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A05");
    },
    Error,
    "encode-error: U+4A05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A06");
    },
    Error,
    "encode-error: U+4A06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A07");
    },
    Error,
    "encode-error: U+4A07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A08");
    },
    Error,
    "encode-error: U+4A08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A09");
    },
    Error,
    "encode-error: U+4A09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A0A");
    },
    Error,
    "encode-error: U+4A0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A0B");
    },
    Error,
    "encode-error: U+4A0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A0C");
    },
    Error,
    "encode-error: U+4A0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A0D");
    },
    Error,
    "encode-error: U+4A0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A0E");
    },
    Error,
    "encode-error: U+4A0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A0F");
    },
    Error,
    "encode-error: U+4A0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A10");
    },
    Error,
    "encode-error: U+4A10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A11");
    },
    Error,
    "encode-error: U+4A11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A12");
    },
    Error,
    "encode-error: U+4A12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A13");
    },
    Error,
    "encode-error: U+4A13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A14");
    },
    Error,
    "encode-error: U+4A14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A15");
    },
    Error,
    "encode-error: U+4A15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A16");
    },
    Error,
    "encode-error: U+4A16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A17");
    },
    Error,
    "encode-error: U+4A17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A18");
    },
    Error,
    "encode-error: U+4A18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A19");
    },
    Error,
    "encode-error: U+4A19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A1A");
    },
    Error,
    "encode-error: U+4A1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A1B");
    },
    Error,
    "encode-error: U+4A1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A1C");
    },
    Error,
    "encode-error: U+4A1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A1D");
    },
    Error,
    "encode-error: U+4A1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A1E");
    },
    Error,
    "encode-error: U+4A1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A1F");
    },
    Error,
    "encode-error: U+4A1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A20");
    },
    Error,
    "encode-error: U+4A20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A21");
    },
    Error,
    "encode-error: U+4A21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A22");
    },
    Error,
    "encode-error: U+4A22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A23");
    },
    Error,
    "encode-error: U+4A23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A24");
    },
    Error,
    "encode-error: U+4A24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A25");
    },
    Error,
    "encode-error: U+4A25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A26");
    },
    Error,
    "encode-error: U+4A26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A27");
    },
    Error,
    "encode-error: U+4A27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A28");
    },
    Error,
    "encode-error: U+4A28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A29");
    },
    Error,
    "encode-error: U+4A29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A2A");
    },
    Error,
    "encode-error: U+4A2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A2B");
    },
    Error,
    "encode-error: U+4A2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A2C");
    },
    Error,
    "encode-error: U+4A2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A2D");
    },
    Error,
    "encode-error: U+4A2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A2E");
    },
    Error,
    "encode-error: U+4A2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A2F");
    },
    Error,
    "encode-error: U+4A2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A30");
    },
    Error,
    "encode-error: U+4A30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A31");
    },
    Error,
    "encode-error: U+4A31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A32");
    },
    Error,
    "encode-error: U+4A32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A33");
    },
    Error,
    "encode-error: U+4A33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A34");
    },
    Error,
    "encode-error: U+4A34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A35");
    },
    Error,
    "encode-error: U+4A35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A36");
    },
    Error,
    "encode-error: U+4A36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A37");
    },
    Error,
    "encode-error: U+4A37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A38");
    },
    Error,
    "encode-error: U+4A38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A39");
    },
    Error,
    "encode-error: U+4A39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A3A");
    },
    Error,
    "encode-error: U+4A3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A3B");
    },
    Error,
    "encode-error: U+4A3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A3C");
    },
    Error,
    "encode-error: U+4A3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A3D");
    },
    Error,
    "encode-error: U+4A3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A3E");
    },
    Error,
    "encode-error: U+4A3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A3F");
    },
    Error,
    "encode-error: U+4A3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A40");
    },
    Error,
    "encode-error: U+4A40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A41");
    },
    Error,
    "encode-error: U+4A41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A42");
    },
    Error,
    "encode-error: U+4A42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A43");
    },
    Error,
    "encode-error: U+4A43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A44");
    },
    Error,
    "encode-error: U+4A44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A45");
    },
    Error,
    "encode-error: U+4A45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A46");
    },
    Error,
    "encode-error: U+4A46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A47");
    },
    Error,
    "encode-error: U+4A47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A48");
    },
    Error,
    "encode-error: U+4A48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A49");
    },
    Error,
    "encode-error: U+4A49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A4A");
    },
    Error,
    "encode-error: U+4A4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A4B");
    },
    Error,
    "encode-error: U+4A4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A4C");
    },
    Error,
    "encode-error: U+4A4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A4D");
    },
    Error,
    "encode-error: U+4A4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A4E");
    },
    Error,
    "encode-error: U+4A4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A4F");
    },
    Error,
    "encode-error: U+4A4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A50");
    },
    Error,
    "encode-error: U+4A50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A51");
    },
    Error,
    "encode-error: U+4A51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A52");
    },
    Error,
    "encode-error: U+4A52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A53");
    },
    Error,
    "encode-error: U+4A53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A54");
    },
    Error,
    "encode-error: U+4A54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A55");
    },
    Error,
    "encode-error: U+4A55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A56");
    },
    Error,
    "encode-error: U+4A56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A57");
    },
    Error,
    "encode-error: U+4A57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A58");
    },
    Error,
    "encode-error: U+4A58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A59");
    },
    Error,
    "encode-error: U+4A59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A5A");
    },
    Error,
    "encode-error: U+4A5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A5B");
    },
    Error,
    "encode-error: U+4A5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A5C");
    },
    Error,
    "encode-error: U+4A5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A5D");
    },
    Error,
    "encode-error: U+4A5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A5E");
    },
    Error,
    "encode-error: U+4A5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A5F");
    },
    Error,
    "encode-error: U+4A5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A60");
    },
    Error,
    "encode-error: U+4A60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A61");
    },
    Error,
    "encode-error: U+4A61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A62");
    },
    Error,
    "encode-error: U+4A62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A63");
    },
    Error,
    "encode-error: U+4A63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A64");
    },
    Error,
    "encode-error: U+4A64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A65");
    },
    Error,
    "encode-error: U+4A65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A66");
    },
    Error,
    "encode-error: U+4A66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A67");
    },
    Error,
    "encode-error: U+4A67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A68");
    },
    Error,
    "encode-error: U+4A68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A69");
    },
    Error,
    "encode-error: U+4A69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A6A");
    },
    Error,
    "encode-error: U+4A6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A6B");
    },
    Error,
    "encode-error: U+4A6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A6C");
    },
    Error,
    "encode-error: U+4A6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A6D");
    },
    Error,
    "encode-error: U+4A6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A6E");
    },
    Error,
    "encode-error: U+4A6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A6F");
    },
    Error,
    "encode-error: U+4A6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A70");
    },
    Error,
    "encode-error: U+4A70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A71");
    },
    Error,
    "encode-error: U+4A71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A72");
    },
    Error,
    "encode-error: U+4A72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A73");
    },
    Error,
    "encode-error: U+4A73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A74");
    },
    Error,
    "encode-error: U+4A74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A75");
    },
    Error,
    "encode-error: U+4A75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A76");
    },
    Error,
    "encode-error: U+4A76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A77");
    },
    Error,
    "encode-error: U+4A77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A78");
    },
    Error,
    "encode-error: U+4A78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A79");
    },
    Error,
    "encode-error: U+4A79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A7A");
    },
    Error,
    "encode-error: U+4A7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A7B");
    },
    Error,
    "encode-error: U+4A7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A7C");
    },
    Error,
    "encode-error: U+4A7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A7D");
    },
    Error,
    "encode-error: U+4A7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A7E");
    },
    Error,
    "encode-error: U+4A7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A7F");
    },
    Error,
    "encode-error: U+4A7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A80");
    },
    Error,
    "encode-error: U+4A80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A81");
    },
    Error,
    "encode-error: U+4A81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A82");
    },
    Error,
    "encode-error: U+4A82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A83");
    },
    Error,
    "encode-error: U+4A83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A84");
    },
    Error,
    "encode-error: U+4A84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A85");
    },
    Error,
    "encode-error: U+4A85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A86");
    },
    Error,
    "encode-error: U+4A86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A87");
    },
    Error,
    "encode-error: U+4A87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A88");
    },
    Error,
    "encode-error: U+4A88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A89");
    },
    Error,
    "encode-error: U+4A89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A8A");
    },
    Error,
    "encode-error: U+4A8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A8B");
    },
    Error,
    "encode-error: U+4A8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A8C");
    },
    Error,
    "encode-error: U+4A8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A8D");
    },
    Error,
    "encode-error: U+4A8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A8E");
    },
    Error,
    "encode-error: U+4A8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A8F");
    },
    Error,
    "encode-error: U+4A8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A90");
    },
    Error,
    "encode-error: U+4A90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A91");
    },
    Error,
    "encode-error: U+4A91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A92");
    },
    Error,
    "encode-error: U+4A92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A93");
    },
    Error,
    "encode-error: U+4A93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A94");
    },
    Error,
    "encode-error: U+4A94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A95");
    },
    Error,
    "encode-error: U+4A95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A96");
    },
    Error,
    "encode-error: U+4A96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A97");
    },
    Error,
    "encode-error: U+4A97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A98");
    },
    Error,
    "encode-error: U+4A98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A99");
    },
    Error,
    "encode-error: U+4A99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A9A");
    },
    Error,
    "encode-error: U+4A9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A9B");
    },
    Error,
    "encode-error: U+4A9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A9C");
    },
    Error,
    "encode-error: U+4A9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A9D");
    },
    Error,
    "encode-error: U+4A9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A9E");
    },
    Error,
    "encode-error: U+4A9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4A9F");
    },
    Error,
    "encode-error: U+4A9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AA0");
    },
    Error,
    "encode-error: U+4AA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AA1");
    },
    Error,
    "encode-error: U+4AA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AA2");
    },
    Error,
    "encode-error: U+4AA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AA3");
    },
    Error,
    "encode-error: U+4AA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AA4");
    },
    Error,
    "encode-error: U+4AA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AA5");
    },
    Error,
    "encode-error: U+4AA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AA6");
    },
    Error,
    "encode-error: U+4AA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AA7");
    },
    Error,
    "encode-error: U+4AA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AA8");
    },
    Error,
    "encode-error: U+4AA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AA9");
    },
    Error,
    "encode-error: U+4AA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AAA");
    },
    Error,
    "encode-error: U+4AAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AAB");
    },
    Error,
    "encode-error: U+4AAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AAC");
    },
    Error,
    "encode-error: U+4AAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AAD");
    },
    Error,
    "encode-error: U+4AAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AAE");
    },
    Error,
    "encode-error: U+4AAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AAF");
    },
    Error,
    "encode-error: U+4AAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AB0");
    },
    Error,
    "encode-error: U+4AB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AB1");
    },
    Error,
    "encode-error: U+4AB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AB2");
    },
    Error,
    "encode-error: U+4AB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AB3");
    },
    Error,
    "encode-error: U+4AB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AB4");
    },
    Error,
    "encode-error: U+4AB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AB5");
    },
    Error,
    "encode-error: U+4AB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AB6");
    },
    Error,
    "encode-error: U+4AB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AB7");
    },
    Error,
    "encode-error: U+4AB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AB8");
    },
    Error,
    "encode-error: U+4AB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AB9");
    },
    Error,
    "encode-error: U+4AB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ABA");
    },
    Error,
    "encode-error: U+4ABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ABB");
    },
    Error,
    "encode-error: U+4ABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ABC");
    },
    Error,
    "encode-error: U+4ABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ABD");
    },
    Error,
    "encode-error: U+4ABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ABE");
    },
    Error,
    "encode-error: U+4ABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ABF");
    },
    Error,
    "encode-error: U+4ABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AC0");
    },
    Error,
    "encode-error: U+4AC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AC1");
    },
    Error,
    "encode-error: U+4AC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AC2");
    },
    Error,
    "encode-error: U+4AC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AC3");
    },
    Error,
    "encode-error: U+4AC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AC4");
    },
    Error,
    "encode-error: U+4AC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AC5");
    },
    Error,
    "encode-error: U+4AC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AC6");
    },
    Error,
    "encode-error: U+4AC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AC7");
    },
    Error,
    "encode-error: U+4AC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AC8");
    },
    Error,
    "encode-error: U+4AC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AC9");
    },
    Error,
    "encode-error: U+4AC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ACA");
    },
    Error,
    "encode-error: U+4ACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ACB");
    },
    Error,
    "encode-error: U+4ACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ACC");
    },
    Error,
    "encode-error: U+4ACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ACD");
    },
    Error,
    "encode-error: U+4ACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ACE");
    },
    Error,
    "encode-error: U+4ACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ACF");
    },
    Error,
    "encode-error: U+4ACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AD0");
    },
    Error,
    "encode-error: U+4AD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AD1");
    },
    Error,
    "encode-error: U+4AD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AD2");
    },
    Error,
    "encode-error: U+4AD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AD3");
    },
    Error,
    "encode-error: U+4AD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AD4");
    },
    Error,
    "encode-error: U+4AD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AD5");
    },
    Error,
    "encode-error: U+4AD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AD6");
    },
    Error,
    "encode-error: U+4AD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AD7");
    },
    Error,
    "encode-error: U+4AD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AD8");
    },
    Error,
    "encode-error: U+4AD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AD9");
    },
    Error,
    "encode-error: U+4AD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ADA");
    },
    Error,
    "encode-error: U+4ADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ADB");
    },
    Error,
    "encode-error: U+4ADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ADC");
    },
    Error,
    "encode-error: U+4ADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ADD");
    },
    Error,
    "encode-error: U+4ADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ADE");
    },
    Error,
    "encode-error: U+4ADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ADF");
    },
    Error,
    "encode-error: U+4ADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AE0");
    },
    Error,
    "encode-error: U+4AE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AE1");
    },
    Error,
    "encode-error: U+4AE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AE2");
    },
    Error,
    "encode-error: U+4AE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AE3");
    },
    Error,
    "encode-error: U+4AE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AE4");
    },
    Error,
    "encode-error: U+4AE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AE5");
    },
    Error,
    "encode-error: U+4AE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AE6");
    },
    Error,
    "encode-error: U+4AE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AE7");
    },
    Error,
    "encode-error: U+4AE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AE8");
    },
    Error,
    "encode-error: U+4AE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AE9");
    },
    Error,
    "encode-error: U+4AE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AEA");
    },
    Error,
    "encode-error: U+4AEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AEB");
    },
    Error,
    "encode-error: U+4AEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AEC");
    },
    Error,
    "encode-error: U+4AEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AED");
    },
    Error,
    "encode-error: U+4AED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AEE");
    },
    Error,
    "encode-error: U+4AEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AEF");
    },
    Error,
    "encode-error: U+4AEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AF0");
    },
    Error,
    "encode-error: U+4AF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AF1");
    },
    Error,
    "encode-error: U+4AF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AF2");
    },
    Error,
    "encode-error: U+4AF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AF3");
    },
    Error,
    "encode-error: U+4AF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AF4");
    },
    Error,
    "encode-error: U+4AF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AF5");
    },
    Error,
    "encode-error: U+4AF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AF6");
    },
    Error,
    "encode-error: U+4AF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AF7");
    },
    Error,
    "encode-error: U+4AF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AF8");
    },
    Error,
    "encode-error: U+4AF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AF9");
    },
    Error,
    "encode-error: U+4AF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AFA");
    },
    Error,
    "encode-error: U+4AFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AFB");
    },
    Error,
    "encode-error: U+4AFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AFC");
    },
    Error,
    "encode-error: U+4AFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AFD");
    },
    Error,
    "encode-error: U+4AFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AFE");
    },
    Error,
    "encode-error: U+4AFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4AFF");
    },
    Error,
    "encode-error: U+4AFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B00");
    },
    Error,
    "encode-error: U+4B00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B01");
    },
    Error,
    "encode-error: U+4B01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B02");
    },
    Error,
    "encode-error: U+4B02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B03");
    },
    Error,
    "encode-error: U+4B03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B04");
    },
    Error,
    "encode-error: U+4B04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B05");
    },
    Error,
    "encode-error: U+4B05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B06");
    },
    Error,
    "encode-error: U+4B06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B07");
    },
    Error,
    "encode-error: U+4B07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B08");
    },
    Error,
    "encode-error: U+4B08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B09");
    },
    Error,
    "encode-error: U+4B09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B0A");
    },
    Error,
    "encode-error: U+4B0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B0B");
    },
    Error,
    "encode-error: U+4B0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B0C");
    },
    Error,
    "encode-error: U+4B0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B0D");
    },
    Error,
    "encode-error: U+4B0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B0E");
    },
    Error,
    "encode-error: U+4B0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B0F");
    },
    Error,
    "encode-error: U+4B0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B10");
    },
    Error,
    "encode-error: U+4B10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B11");
    },
    Error,
    "encode-error: U+4B11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B12");
    },
    Error,
    "encode-error: U+4B12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B13");
    },
    Error,
    "encode-error: U+4B13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B14");
    },
    Error,
    "encode-error: U+4B14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B15");
    },
    Error,
    "encode-error: U+4B15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B16");
    },
    Error,
    "encode-error: U+4B16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B17");
    },
    Error,
    "encode-error: U+4B17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B18");
    },
    Error,
    "encode-error: U+4B18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B19");
    },
    Error,
    "encode-error: U+4B19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B1A");
    },
    Error,
    "encode-error: U+4B1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B1B");
    },
    Error,
    "encode-error: U+4B1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B1C");
    },
    Error,
    "encode-error: U+4B1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B1D");
    },
    Error,
    "encode-error: U+4B1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B1E");
    },
    Error,
    "encode-error: U+4B1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B1F");
    },
    Error,
    "encode-error: U+4B1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B20");
    },
    Error,
    "encode-error: U+4B20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B21");
    },
    Error,
    "encode-error: U+4B21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B22");
    },
    Error,
    "encode-error: U+4B22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B23");
    },
    Error,
    "encode-error: U+4B23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B24");
    },
    Error,
    "encode-error: U+4B24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B25");
    },
    Error,
    "encode-error: U+4B25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B26");
    },
    Error,
    "encode-error: U+4B26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B27");
    },
    Error,
    "encode-error: U+4B27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B28");
    },
    Error,
    "encode-error: U+4B28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B29");
    },
    Error,
    "encode-error: U+4B29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B2A");
    },
    Error,
    "encode-error: U+4B2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B2B");
    },
    Error,
    "encode-error: U+4B2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B2C");
    },
    Error,
    "encode-error: U+4B2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B2D");
    },
    Error,
    "encode-error: U+4B2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B2E");
    },
    Error,
    "encode-error: U+4B2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B2F");
    },
    Error,
    "encode-error: U+4B2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B30");
    },
    Error,
    "encode-error: U+4B30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B31");
    },
    Error,
    "encode-error: U+4B31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B32");
    },
    Error,
    "encode-error: U+4B32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B33");
    },
    Error,
    "encode-error: U+4B33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B34");
    },
    Error,
    "encode-error: U+4B34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B35");
    },
    Error,
    "encode-error: U+4B35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B36");
    },
    Error,
    "encode-error: U+4B36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B37");
    },
    Error,
    "encode-error: U+4B37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B38");
    },
    Error,
    "encode-error: U+4B38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B39");
    },
    Error,
    "encode-error: U+4B39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B3A");
    },
    Error,
    "encode-error: U+4B3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B3B");
    },
    Error,
    "encode-error: U+4B3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B3C");
    },
    Error,
    "encode-error: U+4B3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B3D");
    },
    Error,
    "encode-error: U+4B3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B3E");
    },
    Error,
    "encode-error: U+4B3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B3F");
    },
    Error,
    "encode-error: U+4B3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B40");
    },
    Error,
    "encode-error: U+4B40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B41");
    },
    Error,
    "encode-error: U+4B41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B42");
    },
    Error,
    "encode-error: U+4B42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B43");
    },
    Error,
    "encode-error: U+4B43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B44");
    },
    Error,
    "encode-error: U+4B44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B45");
    },
    Error,
    "encode-error: U+4B45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B46");
    },
    Error,
    "encode-error: U+4B46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B47");
    },
    Error,
    "encode-error: U+4B47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B48");
    },
    Error,
    "encode-error: U+4B48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B49");
    },
    Error,
    "encode-error: U+4B49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B4A");
    },
    Error,
    "encode-error: U+4B4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B4B");
    },
    Error,
    "encode-error: U+4B4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B4C");
    },
    Error,
    "encode-error: U+4B4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B4D");
    },
    Error,
    "encode-error: U+4B4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B4E");
    },
    Error,
    "encode-error: U+4B4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B4F");
    },
    Error,
    "encode-error: U+4B4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B50");
    },
    Error,
    "encode-error: U+4B50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B51");
    },
    Error,
    "encode-error: U+4B51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B52");
    },
    Error,
    "encode-error: U+4B52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B53");
    },
    Error,
    "encode-error: U+4B53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B54");
    },
    Error,
    "encode-error: U+4B54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B55");
    },
    Error,
    "encode-error: U+4B55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B56");
    },
    Error,
    "encode-error: U+4B56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B57");
    },
    Error,
    "encode-error: U+4B57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B58");
    },
    Error,
    "encode-error: U+4B58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B59");
    },
    Error,
    "encode-error: U+4B59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B5A");
    },
    Error,
    "encode-error: U+4B5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B5B");
    },
    Error,
    "encode-error: U+4B5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B5C");
    },
    Error,
    "encode-error: U+4B5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B5D");
    },
    Error,
    "encode-error: U+4B5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B5E");
    },
    Error,
    "encode-error: U+4B5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B5F");
    },
    Error,
    "encode-error: U+4B5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B60");
    },
    Error,
    "encode-error: U+4B60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B61");
    },
    Error,
    "encode-error: U+4B61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B62");
    },
    Error,
    "encode-error: U+4B62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B63");
    },
    Error,
    "encode-error: U+4B63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B64");
    },
    Error,
    "encode-error: U+4B64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B65");
    },
    Error,
    "encode-error: U+4B65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B66");
    },
    Error,
    "encode-error: U+4B66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B67");
    },
    Error,
    "encode-error: U+4B67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B68");
    },
    Error,
    "encode-error: U+4B68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B69");
    },
    Error,
    "encode-error: U+4B69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B6A");
    },
    Error,
    "encode-error: U+4B6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B6B");
    },
    Error,
    "encode-error: U+4B6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B6C");
    },
    Error,
    "encode-error: U+4B6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B6D");
    },
    Error,
    "encode-error: U+4B6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B6E");
    },
    Error,
    "encode-error: U+4B6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B6F");
    },
    Error,
    "encode-error: U+4B6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B70");
    },
    Error,
    "encode-error: U+4B70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B71");
    },
    Error,
    "encode-error: U+4B71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B72");
    },
    Error,
    "encode-error: U+4B72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B73");
    },
    Error,
    "encode-error: U+4B73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B74");
    },
    Error,
    "encode-error: U+4B74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B75");
    },
    Error,
    "encode-error: U+4B75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B76");
    },
    Error,
    "encode-error: U+4B76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B77");
    },
    Error,
    "encode-error: U+4B77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B78");
    },
    Error,
    "encode-error: U+4B78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B79");
    },
    Error,
    "encode-error: U+4B79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B7A");
    },
    Error,
    "encode-error: U+4B7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B7B");
    },
    Error,
    "encode-error: U+4B7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B7C");
    },
    Error,
    "encode-error: U+4B7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B7D");
    },
    Error,
    "encode-error: U+4B7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B7E");
    },
    Error,
    "encode-error: U+4B7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B7F");
    },
    Error,
    "encode-error: U+4B7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B80");
    },
    Error,
    "encode-error: U+4B80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B81");
    },
    Error,
    "encode-error: U+4B81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B82");
    },
    Error,
    "encode-error: U+4B82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B83");
    },
    Error,
    "encode-error: U+4B83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B84");
    },
    Error,
    "encode-error: U+4B84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B85");
    },
    Error,
    "encode-error: U+4B85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B86");
    },
    Error,
    "encode-error: U+4B86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B87");
    },
    Error,
    "encode-error: U+4B87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B88");
    },
    Error,
    "encode-error: U+4B88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B89");
    },
    Error,
    "encode-error: U+4B89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B8A");
    },
    Error,
    "encode-error: U+4B8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B8B");
    },
    Error,
    "encode-error: U+4B8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B8C");
    },
    Error,
    "encode-error: U+4B8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B8D");
    },
    Error,
    "encode-error: U+4B8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B8E");
    },
    Error,
    "encode-error: U+4B8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B8F");
    },
    Error,
    "encode-error: U+4B8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B90");
    },
    Error,
    "encode-error: U+4B90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B91");
    },
    Error,
    "encode-error: U+4B91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B92");
    },
    Error,
    "encode-error: U+4B92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B93");
    },
    Error,
    "encode-error: U+4B93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B94");
    },
    Error,
    "encode-error: U+4B94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B95");
    },
    Error,
    "encode-error: U+4B95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B96");
    },
    Error,
    "encode-error: U+4B96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B97");
    },
    Error,
    "encode-error: U+4B97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B98");
    },
    Error,
    "encode-error: U+4B98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B99");
    },
    Error,
    "encode-error: U+4B99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B9A");
    },
    Error,
    "encode-error: U+4B9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B9B");
    },
    Error,
    "encode-error: U+4B9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B9C");
    },
    Error,
    "encode-error: U+4B9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B9D");
    },
    Error,
    "encode-error: U+4B9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B9E");
    },
    Error,
    "encode-error: U+4B9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4B9F");
    },
    Error,
    "encode-error: U+4B9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BA0");
    },
    Error,
    "encode-error: U+4BA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BA1");
    },
    Error,
    "encode-error: U+4BA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BA2");
    },
    Error,
    "encode-error: U+4BA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BA3");
    },
    Error,
    "encode-error: U+4BA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BA4");
    },
    Error,
    "encode-error: U+4BA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BA5");
    },
    Error,
    "encode-error: U+4BA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BA6");
    },
    Error,
    "encode-error: U+4BA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BA7");
    },
    Error,
    "encode-error: U+4BA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BA8");
    },
    Error,
    "encode-error: U+4BA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BA9");
    },
    Error,
    "encode-error: U+4BA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BAA");
    },
    Error,
    "encode-error: U+4BAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BAB");
    },
    Error,
    "encode-error: U+4BAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BAC");
    },
    Error,
    "encode-error: U+4BAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BAD");
    },
    Error,
    "encode-error: U+4BAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BAE");
    },
    Error,
    "encode-error: U+4BAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BAF");
    },
    Error,
    "encode-error: U+4BAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BB0");
    },
    Error,
    "encode-error: U+4BB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BB1");
    },
    Error,
    "encode-error: U+4BB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BB2");
    },
    Error,
    "encode-error: U+4BB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BB3");
    },
    Error,
    "encode-error: U+4BB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BB4");
    },
    Error,
    "encode-error: U+4BB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BB5");
    },
    Error,
    "encode-error: U+4BB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BB6");
    },
    Error,
    "encode-error: U+4BB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BB7");
    },
    Error,
    "encode-error: U+4BB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BB8");
    },
    Error,
    "encode-error: U+4BB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BB9");
    },
    Error,
    "encode-error: U+4BB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BBA");
    },
    Error,
    "encode-error: U+4BBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BBB");
    },
    Error,
    "encode-error: U+4BBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BBC");
    },
    Error,
    "encode-error: U+4BBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BBD");
    },
    Error,
    "encode-error: U+4BBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BBE");
    },
    Error,
    "encode-error: U+4BBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BBF");
    },
    Error,
    "encode-error: U+4BBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BC0");
    },
    Error,
    "encode-error: U+4BC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BC1");
    },
    Error,
    "encode-error: U+4BC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BC2");
    },
    Error,
    "encode-error: U+4BC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BC3");
    },
    Error,
    "encode-error: U+4BC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BC4");
    },
    Error,
    "encode-error: U+4BC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BC5");
    },
    Error,
    "encode-error: U+4BC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BC6");
    },
    Error,
    "encode-error: U+4BC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BC7");
    },
    Error,
    "encode-error: U+4BC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BC8");
    },
    Error,
    "encode-error: U+4BC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BC9");
    },
    Error,
    "encode-error: U+4BC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BCA");
    },
    Error,
    "encode-error: U+4BCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BCB");
    },
    Error,
    "encode-error: U+4BCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BCC");
    },
    Error,
    "encode-error: U+4BCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BCD");
    },
    Error,
    "encode-error: U+4BCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BCE");
    },
    Error,
    "encode-error: U+4BCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BCF");
    },
    Error,
    "encode-error: U+4BCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BD0");
    },
    Error,
    "encode-error: U+4BD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BD1");
    },
    Error,
    "encode-error: U+4BD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BD2");
    },
    Error,
    "encode-error: U+4BD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BD3");
    },
    Error,
    "encode-error: U+4BD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BD4");
    },
    Error,
    "encode-error: U+4BD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BD5");
    },
    Error,
    "encode-error: U+4BD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BD6");
    },
    Error,
    "encode-error: U+4BD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BD7");
    },
    Error,
    "encode-error: U+4BD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BD8");
    },
    Error,
    "encode-error: U+4BD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BD9");
    },
    Error,
    "encode-error: U+4BD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BDA");
    },
    Error,
    "encode-error: U+4BDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BDB");
    },
    Error,
    "encode-error: U+4BDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BDC");
    },
    Error,
    "encode-error: U+4BDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BDD");
    },
    Error,
    "encode-error: U+4BDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BDE");
    },
    Error,
    "encode-error: U+4BDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BDF");
    },
    Error,
    "encode-error: U+4BDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BE0");
    },
    Error,
    "encode-error: U+4BE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BE1");
    },
    Error,
    "encode-error: U+4BE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BE2");
    },
    Error,
    "encode-error: U+4BE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BE3");
    },
    Error,
    "encode-error: U+4BE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BE4");
    },
    Error,
    "encode-error: U+4BE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BE5");
    },
    Error,
    "encode-error: U+4BE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BE6");
    },
    Error,
    "encode-error: U+4BE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BE7");
    },
    Error,
    "encode-error: U+4BE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BE8");
    },
    Error,
    "encode-error: U+4BE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BE9");
    },
    Error,
    "encode-error: U+4BE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BEA");
    },
    Error,
    "encode-error: U+4BEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BEB");
    },
    Error,
    "encode-error: U+4BEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BEC");
    },
    Error,
    "encode-error: U+4BEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BED");
    },
    Error,
    "encode-error: U+4BED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BEE");
    },
    Error,
    "encode-error: U+4BEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BEF");
    },
    Error,
    "encode-error: U+4BEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BF0");
    },
    Error,
    "encode-error: U+4BF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BF1");
    },
    Error,
    "encode-error: U+4BF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BF2");
    },
    Error,
    "encode-error: U+4BF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BF3");
    },
    Error,
    "encode-error: U+4BF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BF4");
    },
    Error,
    "encode-error: U+4BF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BF5");
    },
    Error,
    "encode-error: U+4BF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BF6");
    },
    Error,
    "encode-error: U+4BF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BF7");
    },
    Error,
    "encode-error: U+4BF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BF8");
    },
    Error,
    "encode-error: U+4BF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BF9");
    },
    Error,
    "encode-error: U+4BF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BFA");
    },
    Error,
    "encode-error: U+4BFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BFB");
    },
    Error,
    "encode-error: U+4BFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BFC");
    },
    Error,
    "encode-error: U+4BFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BFD");
    },
    Error,
    "encode-error: U+4BFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BFE");
    },
    Error,
    "encode-error: U+4BFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4BFF");
    },
    Error,
    "encode-error: U+4BFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C00");
    },
    Error,
    "encode-error: U+4C00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C01");
    },
    Error,
    "encode-error: U+4C01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C02");
    },
    Error,
    "encode-error: U+4C02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C03");
    },
    Error,
    "encode-error: U+4C03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C04");
    },
    Error,
    "encode-error: U+4C04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C05");
    },
    Error,
    "encode-error: U+4C05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C06");
    },
    Error,
    "encode-error: U+4C06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C07");
    },
    Error,
    "encode-error: U+4C07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C08");
    },
    Error,
    "encode-error: U+4C08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C09");
    },
    Error,
    "encode-error: U+4C09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C0A");
    },
    Error,
    "encode-error: U+4C0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C0B");
    },
    Error,
    "encode-error: U+4C0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C0C");
    },
    Error,
    "encode-error: U+4C0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C0D");
    },
    Error,
    "encode-error: U+4C0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C0E");
    },
    Error,
    "encode-error: U+4C0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C0F");
    },
    Error,
    "encode-error: U+4C0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C10");
    },
    Error,
    "encode-error: U+4C10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C11");
    },
    Error,
    "encode-error: U+4C11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C12");
    },
    Error,
    "encode-error: U+4C12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C13");
    },
    Error,
    "encode-error: U+4C13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C14");
    },
    Error,
    "encode-error: U+4C14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C15");
    },
    Error,
    "encode-error: U+4C15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C16");
    },
    Error,
    "encode-error: U+4C16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C17");
    },
    Error,
    "encode-error: U+4C17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C18");
    },
    Error,
    "encode-error: U+4C18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C19");
    },
    Error,
    "encode-error: U+4C19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C1A");
    },
    Error,
    "encode-error: U+4C1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C1B");
    },
    Error,
    "encode-error: U+4C1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C1C");
    },
    Error,
    "encode-error: U+4C1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C1D");
    },
    Error,
    "encode-error: U+4C1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C1E");
    },
    Error,
    "encode-error: U+4C1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C1F");
    },
    Error,
    "encode-error: U+4C1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C20");
    },
    Error,
    "encode-error: U+4C20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C21");
    },
    Error,
    "encode-error: U+4C21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C22");
    },
    Error,
    "encode-error: U+4C22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C23");
    },
    Error,
    "encode-error: U+4C23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C24");
    },
    Error,
    "encode-error: U+4C24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C25");
    },
    Error,
    "encode-error: U+4C25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C26");
    },
    Error,
    "encode-error: U+4C26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C27");
    },
    Error,
    "encode-error: U+4C27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C28");
    },
    Error,
    "encode-error: U+4C28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C29");
    },
    Error,
    "encode-error: U+4C29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C2A");
    },
    Error,
    "encode-error: U+4C2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C2B");
    },
    Error,
    "encode-error: U+4C2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C2C");
    },
    Error,
    "encode-error: U+4C2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C2D");
    },
    Error,
    "encode-error: U+4C2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C2E");
    },
    Error,
    "encode-error: U+4C2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C2F");
    },
    Error,
    "encode-error: U+4C2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C30");
    },
    Error,
    "encode-error: U+4C30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C31");
    },
    Error,
    "encode-error: U+4C31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C32");
    },
    Error,
    "encode-error: U+4C32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C33");
    },
    Error,
    "encode-error: U+4C33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C34");
    },
    Error,
    "encode-error: U+4C34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C35");
    },
    Error,
    "encode-error: U+4C35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C36");
    },
    Error,
    "encode-error: U+4C36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C37");
    },
    Error,
    "encode-error: U+4C37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C38");
    },
    Error,
    "encode-error: U+4C38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C39");
    },
    Error,
    "encode-error: U+4C39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C3A");
    },
    Error,
    "encode-error: U+4C3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C3B");
    },
    Error,
    "encode-error: U+4C3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C3C");
    },
    Error,
    "encode-error: U+4C3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C3D");
    },
    Error,
    "encode-error: U+4C3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C3E");
    },
    Error,
    "encode-error: U+4C3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C3F");
    },
    Error,
    "encode-error: U+4C3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C40");
    },
    Error,
    "encode-error: U+4C40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C41");
    },
    Error,
    "encode-error: U+4C41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C42");
    },
    Error,
    "encode-error: U+4C42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C43");
    },
    Error,
    "encode-error: U+4C43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C44");
    },
    Error,
    "encode-error: U+4C44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C45");
    },
    Error,
    "encode-error: U+4C45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C46");
    },
    Error,
    "encode-error: U+4C46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C47");
    },
    Error,
    "encode-error: U+4C47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C48");
    },
    Error,
    "encode-error: U+4C48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C49");
    },
    Error,
    "encode-error: U+4C49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C4A");
    },
    Error,
    "encode-error: U+4C4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C4B");
    },
    Error,
    "encode-error: U+4C4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C4C");
    },
    Error,
    "encode-error: U+4C4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C4D");
    },
    Error,
    "encode-error: U+4C4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C4E");
    },
    Error,
    "encode-error: U+4C4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C4F");
    },
    Error,
    "encode-error: U+4C4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C50");
    },
    Error,
    "encode-error: U+4C50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C51");
    },
    Error,
    "encode-error: U+4C51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C52");
    },
    Error,
    "encode-error: U+4C52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C53");
    },
    Error,
    "encode-error: U+4C53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C54");
    },
    Error,
    "encode-error: U+4C54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C55");
    },
    Error,
    "encode-error: U+4C55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C56");
    },
    Error,
    "encode-error: U+4C56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C57");
    },
    Error,
    "encode-error: U+4C57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C58");
    },
    Error,
    "encode-error: U+4C58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C59");
    },
    Error,
    "encode-error: U+4C59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C5A");
    },
    Error,
    "encode-error: U+4C5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C5B");
    },
    Error,
    "encode-error: U+4C5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C5C");
    },
    Error,
    "encode-error: U+4C5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C5D");
    },
    Error,
    "encode-error: U+4C5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C5E");
    },
    Error,
    "encode-error: U+4C5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C5F");
    },
    Error,
    "encode-error: U+4C5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C60");
    },
    Error,
    "encode-error: U+4C60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C61");
    },
    Error,
    "encode-error: U+4C61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C62");
    },
    Error,
    "encode-error: U+4C62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C63");
    },
    Error,
    "encode-error: U+4C63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C64");
    },
    Error,
    "encode-error: U+4C64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C65");
    },
    Error,
    "encode-error: U+4C65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C66");
    },
    Error,
    "encode-error: U+4C66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C67");
    },
    Error,
    "encode-error: U+4C67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C68");
    },
    Error,
    "encode-error: U+4C68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C69");
    },
    Error,
    "encode-error: U+4C69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C6A");
    },
    Error,
    "encode-error: U+4C6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C6B");
    },
    Error,
    "encode-error: U+4C6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C6C");
    },
    Error,
    "encode-error: U+4C6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C6D");
    },
    Error,
    "encode-error: U+4C6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C6E");
    },
    Error,
    "encode-error: U+4C6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C6F");
    },
    Error,
    "encode-error: U+4C6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C70");
    },
    Error,
    "encode-error: U+4C70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C71");
    },
    Error,
    "encode-error: U+4C71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C72");
    },
    Error,
    "encode-error: U+4C72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C73");
    },
    Error,
    "encode-error: U+4C73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C74");
    },
    Error,
    "encode-error: U+4C74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C75");
    },
    Error,
    "encode-error: U+4C75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C76");
    },
    Error,
    "encode-error: U+4C76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C77");
    },
    Error,
    "encode-error: U+4C77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C78");
    },
    Error,
    "encode-error: U+4C78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C79");
    },
    Error,
    "encode-error: U+4C79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C7A");
    },
    Error,
    "encode-error: U+4C7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C7B");
    },
    Error,
    "encode-error: U+4C7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C7C");
    },
    Error,
    "encode-error: U+4C7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C7D");
    },
    Error,
    "encode-error: U+4C7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C7E");
    },
    Error,
    "encode-error: U+4C7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C7F");
    },
    Error,
    "encode-error: U+4C7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C80");
    },
    Error,
    "encode-error: U+4C80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C81");
    },
    Error,
    "encode-error: U+4C81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C82");
    },
    Error,
    "encode-error: U+4C82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C83");
    },
    Error,
    "encode-error: U+4C83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C84");
    },
    Error,
    "encode-error: U+4C84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C85");
    },
    Error,
    "encode-error: U+4C85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C86");
    },
    Error,
    "encode-error: U+4C86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C87");
    },
    Error,
    "encode-error: U+4C87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C88");
    },
    Error,
    "encode-error: U+4C88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C89");
    },
    Error,
    "encode-error: U+4C89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C8A");
    },
    Error,
    "encode-error: U+4C8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C8B");
    },
    Error,
    "encode-error: U+4C8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C8C");
    },
    Error,
    "encode-error: U+4C8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C8D");
    },
    Error,
    "encode-error: U+4C8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C8E");
    },
    Error,
    "encode-error: U+4C8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C8F");
    },
    Error,
    "encode-error: U+4C8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C90");
    },
    Error,
    "encode-error: U+4C90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C91");
    },
    Error,
    "encode-error: U+4C91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C92");
    },
    Error,
    "encode-error: U+4C92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C93");
    },
    Error,
    "encode-error: U+4C93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C94");
    },
    Error,
    "encode-error: U+4C94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C95");
    },
    Error,
    "encode-error: U+4C95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C96");
    },
    Error,
    "encode-error: U+4C96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C97");
    },
    Error,
    "encode-error: U+4C97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C98");
    },
    Error,
    "encode-error: U+4C98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C99");
    },
    Error,
    "encode-error: U+4C99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C9A");
    },
    Error,
    "encode-error: U+4C9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C9B");
    },
    Error,
    "encode-error: U+4C9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C9C");
    },
    Error,
    "encode-error: U+4C9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C9D");
    },
    Error,
    "encode-error: U+4C9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C9E");
    },
    Error,
    "encode-error: U+4C9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4C9F");
    },
    Error,
    "encode-error: U+4C9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CA0");
    },
    Error,
    "encode-error: U+4CA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CA1");
    },
    Error,
    "encode-error: U+4CA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CA2");
    },
    Error,
    "encode-error: U+4CA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CA3");
    },
    Error,
    "encode-error: U+4CA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CA4");
    },
    Error,
    "encode-error: U+4CA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CA5");
    },
    Error,
    "encode-error: U+4CA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CA6");
    },
    Error,
    "encode-error: U+4CA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CA7");
    },
    Error,
    "encode-error: U+4CA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CA8");
    },
    Error,
    "encode-error: U+4CA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CA9");
    },
    Error,
    "encode-error: U+4CA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CAA");
    },
    Error,
    "encode-error: U+4CAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CAB");
    },
    Error,
    "encode-error: U+4CAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CAC");
    },
    Error,
    "encode-error: U+4CAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CAD");
    },
    Error,
    "encode-error: U+4CAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CAE");
    },
    Error,
    "encode-error: U+4CAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CAF");
    },
    Error,
    "encode-error: U+4CAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CB0");
    },
    Error,
    "encode-error: U+4CB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CB1");
    },
    Error,
    "encode-error: U+4CB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CB2");
    },
    Error,
    "encode-error: U+4CB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CB3");
    },
    Error,
    "encode-error: U+4CB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CB4");
    },
    Error,
    "encode-error: U+4CB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CB5");
    },
    Error,
    "encode-error: U+4CB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CB6");
    },
    Error,
    "encode-error: U+4CB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CB7");
    },
    Error,
    "encode-error: U+4CB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CB8");
    },
    Error,
    "encode-error: U+4CB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CB9");
    },
    Error,
    "encode-error: U+4CB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CBA");
    },
    Error,
    "encode-error: U+4CBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CBB");
    },
    Error,
    "encode-error: U+4CBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CBC");
    },
    Error,
    "encode-error: U+4CBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CBD");
    },
    Error,
    "encode-error: U+4CBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CBE");
    },
    Error,
    "encode-error: U+4CBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CBF");
    },
    Error,
    "encode-error: U+4CBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CC0");
    },
    Error,
    "encode-error: U+4CC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CC1");
    },
    Error,
    "encode-error: U+4CC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CC2");
    },
    Error,
    "encode-error: U+4CC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CC3");
    },
    Error,
    "encode-error: U+4CC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CC4");
    },
    Error,
    "encode-error: U+4CC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CC5");
    },
    Error,
    "encode-error: U+4CC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CC6");
    },
    Error,
    "encode-error: U+4CC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CC7");
    },
    Error,
    "encode-error: U+4CC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CC8");
    },
    Error,
    "encode-error: U+4CC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CC9");
    },
    Error,
    "encode-error: U+4CC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CCA");
    },
    Error,
    "encode-error: U+4CCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CCB");
    },
    Error,
    "encode-error: U+4CCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CCC");
    },
    Error,
    "encode-error: U+4CCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CCD");
    },
    Error,
    "encode-error: U+4CCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CCE");
    },
    Error,
    "encode-error: U+4CCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CCF");
    },
    Error,
    "encode-error: U+4CCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CD0");
    },
    Error,
    "encode-error: U+4CD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CD1");
    },
    Error,
    "encode-error: U+4CD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CD2");
    },
    Error,
    "encode-error: U+4CD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CD3");
    },
    Error,
    "encode-error: U+4CD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CD4");
    },
    Error,
    "encode-error: U+4CD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CD5");
    },
    Error,
    "encode-error: U+4CD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CD6");
    },
    Error,
    "encode-error: U+4CD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CD7");
    },
    Error,
    "encode-error: U+4CD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CD8");
    },
    Error,
    "encode-error: U+4CD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CD9");
    },
    Error,
    "encode-error: U+4CD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CDA");
    },
    Error,
    "encode-error: U+4CDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CDB");
    },
    Error,
    "encode-error: U+4CDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CDC");
    },
    Error,
    "encode-error: U+4CDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CDD");
    },
    Error,
    "encode-error: U+4CDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CDE");
    },
    Error,
    "encode-error: U+4CDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CDF");
    },
    Error,
    "encode-error: U+4CDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CE0");
    },
    Error,
    "encode-error: U+4CE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CE1");
    },
    Error,
    "encode-error: U+4CE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CE2");
    },
    Error,
    "encode-error: U+4CE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CE3");
    },
    Error,
    "encode-error: U+4CE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CE4");
    },
    Error,
    "encode-error: U+4CE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CE5");
    },
    Error,
    "encode-error: U+4CE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CE6");
    },
    Error,
    "encode-error: U+4CE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CE7");
    },
    Error,
    "encode-error: U+4CE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CE8");
    },
    Error,
    "encode-error: U+4CE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CE9");
    },
    Error,
    "encode-error: U+4CE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CEA");
    },
    Error,
    "encode-error: U+4CEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CEB");
    },
    Error,
    "encode-error: U+4CEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CEC");
    },
    Error,
    "encode-error: U+4CEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CED");
    },
    Error,
    "encode-error: U+4CED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CEE");
    },
    Error,
    "encode-error: U+4CEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CEF");
    },
    Error,
    "encode-error: U+4CEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CF0");
    },
    Error,
    "encode-error: U+4CF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CF1");
    },
    Error,
    "encode-error: U+4CF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CF2");
    },
    Error,
    "encode-error: U+4CF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CF3");
    },
    Error,
    "encode-error: U+4CF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CF4");
    },
    Error,
    "encode-error: U+4CF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CF5");
    },
    Error,
    "encode-error: U+4CF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CF6");
    },
    Error,
    "encode-error: U+4CF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CF7");
    },
    Error,
    "encode-error: U+4CF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CF8");
    },
    Error,
    "encode-error: U+4CF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CF9");
    },
    Error,
    "encode-error: U+4CF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CFA");
    },
    Error,
    "encode-error: U+4CFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CFB");
    },
    Error,
    "encode-error: U+4CFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CFC");
    },
    Error,
    "encode-error: U+4CFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CFD");
    },
    Error,
    "encode-error: U+4CFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CFE");
    },
    Error,
    "encode-error: U+4CFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4CFF");
    },
    Error,
    "encode-error: U+4CFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D00");
    },
    Error,
    "encode-error: U+4D00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D01");
    },
    Error,
    "encode-error: U+4D01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D02");
    },
    Error,
    "encode-error: U+4D02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D03");
    },
    Error,
    "encode-error: U+4D03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D04");
    },
    Error,
    "encode-error: U+4D04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D05");
    },
    Error,
    "encode-error: U+4D05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D06");
    },
    Error,
    "encode-error: U+4D06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D07");
    },
    Error,
    "encode-error: U+4D07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D08");
    },
    Error,
    "encode-error: U+4D08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D09");
    },
    Error,
    "encode-error: U+4D09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D0A");
    },
    Error,
    "encode-error: U+4D0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D0B");
    },
    Error,
    "encode-error: U+4D0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D0C");
    },
    Error,
    "encode-error: U+4D0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D0D");
    },
    Error,
    "encode-error: U+4D0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D0E");
    },
    Error,
    "encode-error: U+4D0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D0F");
    },
    Error,
    "encode-error: U+4D0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D10");
    },
    Error,
    "encode-error: U+4D10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D11");
    },
    Error,
    "encode-error: U+4D11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D12");
    },
    Error,
    "encode-error: U+4D12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D13");
    },
    Error,
    "encode-error: U+4D13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D14");
    },
    Error,
    "encode-error: U+4D14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D15");
    },
    Error,
    "encode-error: U+4D15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D16");
    },
    Error,
    "encode-error: U+4D16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D17");
    },
    Error,
    "encode-error: U+4D17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D18");
    },
    Error,
    "encode-error: U+4D18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D19");
    },
    Error,
    "encode-error: U+4D19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D1A");
    },
    Error,
    "encode-error: U+4D1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D1B");
    },
    Error,
    "encode-error: U+4D1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D1C");
    },
    Error,
    "encode-error: U+4D1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D1D");
    },
    Error,
    "encode-error: U+4D1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D1E");
    },
    Error,
    "encode-error: U+4D1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D1F");
    },
    Error,
    "encode-error: U+4D1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D20");
    },
    Error,
    "encode-error: U+4D20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D21");
    },
    Error,
    "encode-error: U+4D21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D22");
    },
    Error,
    "encode-error: U+4D22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D23");
    },
    Error,
    "encode-error: U+4D23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D24");
    },
    Error,
    "encode-error: U+4D24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D25");
    },
    Error,
    "encode-error: U+4D25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D26");
    },
    Error,
    "encode-error: U+4D26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D27");
    },
    Error,
    "encode-error: U+4D27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D28");
    },
    Error,
    "encode-error: U+4D28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D29");
    },
    Error,
    "encode-error: U+4D29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D2A");
    },
    Error,
    "encode-error: U+4D2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D2B");
    },
    Error,
    "encode-error: U+4D2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D2C");
    },
    Error,
    "encode-error: U+4D2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D2D");
    },
    Error,
    "encode-error: U+4D2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D2E");
    },
    Error,
    "encode-error: U+4D2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D2F");
    },
    Error,
    "encode-error: U+4D2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D30");
    },
    Error,
    "encode-error: U+4D30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D31");
    },
    Error,
    "encode-error: U+4D31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D32");
    },
    Error,
    "encode-error: U+4D32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D33");
    },
    Error,
    "encode-error: U+4D33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D34");
    },
    Error,
    "encode-error: U+4D34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D35");
    },
    Error,
    "encode-error: U+4D35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D36");
    },
    Error,
    "encode-error: U+4D36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D37");
    },
    Error,
    "encode-error: U+4D37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D38");
    },
    Error,
    "encode-error: U+4D38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D39");
    },
    Error,
    "encode-error: U+4D39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D3A");
    },
    Error,
    "encode-error: U+4D3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D3B");
    },
    Error,
    "encode-error: U+4D3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D3C");
    },
    Error,
    "encode-error: U+4D3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D3D");
    },
    Error,
    "encode-error: U+4D3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D3E");
    },
    Error,
    "encode-error: U+4D3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D3F");
    },
    Error,
    "encode-error: U+4D3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D40");
    },
    Error,
    "encode-error: U+4D40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D41");
    },
    Error,
    "encode-error: U+4D41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D42");
    },
    Error,
    "encode-error: U+4D42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D43");
    },
    Error,
    "encode-error: U+4D43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D44");
    },
    Error,
    "encode-error: U+4D44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D45");
    },
    Error,
    "encode-error: U+4D45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D46");
    },
    Error,
    "encode-error: U+4D46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D47");
    },
    Error,
    "encode-error: U+4D47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D48");
    },
    Error,
    "encode-error: U+4D48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D49");
    },
    Error,
    "encode-error: U+4D49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D4A");
    },
    Error,
    "encode-error: U+4D4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D4B");
    },
    Error,
    "encode-error: U+4D4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D4C");
    },
    Error,
    "encode-error: U+4D4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D4D");
    },
    Error,
    "encode-error: U+4D4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D4E");
    },
    Error,
    "encode-error: U+4D4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D4F");
    },
    Error,
    "encode-error: U+4D4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D50");
    },
    Error,
    "encode-error: U+4D50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D51");
    },
    Error,
    "encode-error: U+4D51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D52");
    },
    Error,
    "encode-error: U+4D52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D53");
    },
    Error,
    "encode-error: U+4D53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D54");
    },
    Error,
    "encode-error: U+4D54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D55");
    },
    Error,
    "encode-error: U+4D55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D56");
    },
    Error,
    "encode-error: U+4D56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D57");
    },
    Error,
    "encode-error: U+4D57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D58");
    },
    Error,
    "encode-error: U+4D58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D59");
    },
    Error,
    "encode-error: U+4D59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D5A");
    },
    Error,
    "encode-error: U+4D5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D5B");
    },
    Error,
    "encode-error: U+4D5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D5C");
    },
    Error,
    "encode-error: U+4D5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D5D");
    },
    Error,
    "encode-error: U+4D5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D5E");
    },
    Error,
    "encode-error: U+4D5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D5F");
    },
    Error,
    "encode-error: U+4D5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D60");
    },
    Error,
    "encode-error: U+4D60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D61");
    },
    Error,
    "encode-error: U+4D61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D62");
    },
    Error,
    "encode-error: U+4D62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D63");
    },
    Error,
    "encode-error: U+4D63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D64");
    },
    Error,
    "encode-error: U+4D64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D65");
    },
    Error,
    "encode-error: U+4D65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D66");
    },
    Error,
    "encode-error: U+4D66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D67");
    },
    Error,
    "encode-error: U+4D67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D68");
    },
    Error,
    "encode-error: U+4D68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D69");
    },
    Error,
    "encode-error: U+4D69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D6A");
    },
    Error,
    "encode-error: U+4D6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D6B");
    },
    Error,
    "encode-error: U+4D6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D6C");
    },
    Error,
    "encode-error: U+4D6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D6D");
    },
    Error,
    "encode-error: U+4D6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D6E");
    },
    Error,
    "encode-error: U+4D6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D6F");
    },
    Error,
    "encode-error: U+4D6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D70");
    },
    Error,
    "encode-error: U+4D70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D71");
    },
    Error,
    "encode-error: U+4D71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D72");
    },
    Error,
    "encode-error: U+4D72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D73");
    },
    Error,
    "encode-error: U+4D73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D74");
    },
    Error,
    "encode-error: U+4D74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D75");
    },
    Error,
    "encode-error: U+4D75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D76");
    },
    Error,
    "encode-error: U+4D76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D77");
    },
    Error,
    "encode-error: U+4D77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D78");
    },
    Error,
    "encode-error: U+4D78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D79");
    },
    Error,
    "encode-error: U+4D79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D7A");
    },
    Error,
    "encode-error: U+4D7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D7B");
    },
    Error,
    "encode-error: U+4D7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D7C");
    },
    Error,
    "encode-error: U+4D7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D7D");
    },
    Error,
    "encode-error: U+4D7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D7E");
    },
    Error,
    "encode-error: U+4D7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D7F");
    },
    Error,
    "encode-error: U+4D7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D80");
    },
    Error,
    "encode-error: U+4D80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D81");
    },
    Error,
    "encode-error: U+4D81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D82");
    },
    Error,
    "encode-error: U+4D82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D83");
    },
    Error,
    "encode-error: U+4D83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D84");
    },
    Error,
    "encode-error: U+4D84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D85");
    },
    Error,
    "encode-error: U+4D85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D86");
    },
    Error,
    "encode-error: U+4D86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D87");
    },
    Error,
    "encode-error: U+4D87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D88");
    },
    Error,
    "encode-error: U+4D88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D89");
    },
    Error,
    "encode-error: U+4D89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D8A");
    },
    Error,
    "encode-error: U+4D8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D8B");
    },
    Error,
    "encode-error: U+4D8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D8C");
    },
    Error,
    "encode-error: U+4D8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D8D");
    },
    Error,
    "encode-error: U+4D8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D8E");
    },
    Error,
    "encode-error: U+4D8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D8F");
    },
    Error,
    "encode-error: U+4D8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D90");
    },
    Error,
    "encode-error: U+4D90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D91");
    },
    Error,
    "encode-error: U+4D91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D92");
    },
    Error,
    "encode-error: U+4D92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D93");
    },
    Error,
    "encode-error: U+4D93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D94");
    },
    Error,
    "encode-error: U+4D94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D95");
    },
    Error,
    "encode-error: U+4D95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D96");
    },
    Error,
    "encode-error: U+4D96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D97");
    },
    Error,
    "encode-error: U+4D97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D98");
    },
    Error,
    "encode-error: U+4D98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D99");
    },
    Error,
    "encode-error: U+4D99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D9A");
    },
    Error,
    "encode-error: U+4D9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D9B");
    },
    Error,
    "encode-error: U+4D9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D9C");
    },
    Error,
    "encode-error: U+4D9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D9D");
    },
    Error,
    "encode-error: U+4D9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D9E");
    },
    Error,
    "encode-error: U+4D9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4D9F");
    },
    Error,
    "encode-error: U+4D9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DA0");
    },
    Error,
    "encode-error: U+4DA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DA1");
    },
    Error,
    "encode-error: U+4DA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DA2");
    },
    Error,
    "encode-error: U+4DA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DA3");
    },
    Error,
    "encode-error: U+4DA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DA4");
    },
    Error,
    "encode-error: U+4DA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DA5");
    },
    Error,
    "encode-error: U+4DA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DA6");
    },
    Error,
    "encode-error: U+4DA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DA7");
    },
    Error,
    "encode-error: U+4DA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DA8");
    },
    Error,
    "encode-error: U+4DA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DA9");
    },
    Error,
    "encode-error: U+4DA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DAA");
    },
    Error,
    "encode-error: U+4DAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DAB");
    },
    Error,
    "encode-error: U+4DAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DAC");
    },
    Error,
    "encode-error: U+4DAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DAD");
    },
    Error,
    "encode-error: U+4DAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DAE");
    },
    Error,
    "encode-error: U+4DAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DAF");
    },
    Error,
    "encode-error: U+4DAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DB0");
    },
    Error,
    "encode-error: U+4DB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DB1");
    },
    Error,
    "encode-error: U+4DB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DB2");
    },
    Error,
    "encode-error: U+4DB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DB3");
    },
    Error,
    "encode-error: U+4DB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DB4");
    },
    Error,
    "encode-error: U+4DB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DB5");
    },
    Error,
    "encode-error: U+4DB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DB6");
    },
    Error,
    "encode-error: U+4DB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DB7");
    },
    Error,
    "encode-error: U+4DB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DB8");
    },
    Error,
    "encode-error: U+4DB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DB9");
    },
    Error,
    "encode-error: U+4DB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DBA");
    },
    Error,
    "encode-error: U+4DBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DBB");
    },
    Error,
    "encode-error: U+4DBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DBC");
    },
    Error,
    "encode-error: U+4DBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DBD");
    },
    Error,
    "encode-error: U+4DBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DBE");
    },
    Error,
    "encode-error: U+4DBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DBF");
    },
    Error,
    "encode-error: U+4DBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DC0");
    },
    Error,
    "encode-error: U+4DC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DC1");
    },
    Error,
    "encode-error: U+4DC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DC2");
    },
    Error,
    "encode-error: U+4DC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DC3");
    },
    Error,
    "encode-error: U+4DC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DC4");
    },
    Error,
    "encode-error: U+4DC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DC5");
    },
    Error,
    "encode-error: U+4DC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DC6");
    },
    Error,
    "encode-error: U+4DC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DC7");
    },
    Error,
    "encode-error: U+4DC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DC8");
    },
    Error,
    "encode-error: U+4DC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DC9");
    },
    Error,
    "encode-error: U+4DC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DCA");
    },
    Error,
    "encode-error: U+4DCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DCB");
    },
    Error,
    "encode-error: U+4DCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DCC");
    },
    Error,
    "encode-error: U+4DCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DCD");
    },
    Error,
    "encode-error: U+4DCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DCE");
    },
    Error,
    "encode-error: U+4DCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DCF");
    },
    Error,
    "encode-error: U+4DCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DD0");
    },
    Error,
    "encode-error: U+4DD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DD1");
    },
    Error,
    "encode-error: U+4DD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DD2");
    },
    Error,
    "encode-error: U+4DD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DD3");
    },
    Error,
    "encode-error: U+4DD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DD4");
    },
    Error,
    "encode-error: U+4DD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DD5");
    },
    Error,
    "encode-error: U+4DD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DD6");
    },
    Error,
    "encode-error: U+4DD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DD7");
    },
    Error,
    "encode-error: U+4DD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DD8");
    },
    Error,
    "encode-error: U+4DD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DD9");
    },
    Error,
    "encode-error: U+4DD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DDA");
    },
    Error,
    "encode-error: U+4DDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DDB");
    },
    Error,
    "encode-error: U+4DDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DDC");
    },
    Error,
    "encode-error: U+4DDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DDD");
    },
    Error,
    "encode-error: U+4DDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DDE");
    },
    Error,
    "encode-error: U+4DDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DDF");
    },
    Error,
    "encode-error: U+4DDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DE0");
    },
    Error,
    "encode-error: U+4DE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DE1");
    },
    Error,
    "encode-error: U+4DE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DE2");
    },
    Error,
    "encode-error: U+4DE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DE3");
    },
    Error,
    "encode-error: U+4DE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DE4");
    },
    Error,
    "encode-error: U+4DE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DE5");
    },
    Error,
    "encode-error: U+4DE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DE6");
    },
    Error,
    "encode-error: U+4DE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DE7");
    },
    Error,
    "encode-error: U+4DE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DE8");
    },
    Error,
    "encode-error: U+4DE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DE9");
    },
    Error,
    "encode-error: U+4DE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DEA");
    },
    Error,
    "encode-error: U+4DEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DEB");
    },
    Error,
    "encode-error: U+4DEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DEC");
    },
    Error,
    "encode-error: U+4DEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DED");
    },
    Error,
    "encode-error: U+4DED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DEE");
    },
    Error,
    "encode-error: U+4DEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DEF");
    },
    Error,
    "encode-error: U+4DEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DF0");
    },
    Error,
    "encode-error: U+4DF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DF1");
    },
    Error,
    "encode-error: U+4DF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DF2");
    },
    Error,
    "encode-error: U+4DF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DF3");
    },
    Error,
    "encode-error: U+4DF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DF4");
    },
    Error,
    "encode-error: U+4DF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DF5");
    },
    Error,
    "encode-error: U+4DF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DF6");
    },
    Error,
    "encode-error: U+4DF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DF7");
    },
    Error,
    "encode-error: U+4DF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DF8");
    },
    Error,
    "encode-error: U+4DF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DF9");
    },
    Error,
    "encode-error: U+4DF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DFA");
    },
    Error,
    "encode-error: U+4DFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DFB");
    },
    Error,
    "encode-error: U+4DFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DFC");
    },
    Error,
    "encode-error: U+4DFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DFD");
    },
    Error,
    "encode-error: U+4DFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DFE");
    },
    Error,
    "encode-error: U+4DFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4DFF");
    },
    Error,
    "encode-error: U+4DFF",
  );
  r = r && ([...ms932Encoder.encode("一丁")].join(",") === "136,234,146,154"); // U+4E00
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E02");
    },
    Error,
    "encode-error: U+4E02",
  );
  r = r && ([...ms932Encoder.encode("七")].join(",") === "142,181"); // U+4E03
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E04");
    },
    Error,
    "encode-error: U+4E04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E05");
    },
    Error,
    "encode-error: U+4E05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E06");
    },
    Error,
    "encode-error: U+4E06",
  );
  r = r &&
    ([...ms932Encoder.encode("万丈三上下")].join(",") ===
      "150,156,143,228,142,79,143,227,137,186"); // U+4E07
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E0C");
    },
    Error,
    "encode-error: U+4E0C",
  );
  r = r && ([...ms932Encoder.encode("不与")].join(",") === "149,115,151,94"); // U+4E0D
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E0F");
    },
    Error,
    "encode-error: U+4E0F",
  );
  r = r && ([...ms932Encoder.encode("丐丑")].join(",") === "152,160,137,78"); // U+4E10
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E12");
    },
    Error,
    "encode-error: U+4E12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E13");
    },
    Error,
    "encode-error: U+4E13",
  );
  r = r &&
    ([...ms932Encoder.encode("且丕世丗丘丙")].join(",") ===
      "138,142,152,161,144,162,153,192,139,117,149,184"); // U+4E14
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E1A");
    },
    Error,
    "encode-error: U+4E1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E1B");
    },
    Error,
    "encode-error: U+4E1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E1C");
    },
    Error,
    "encode-error: U+4E1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E1D");
    },
    Error,
    "encode-error: U+4E1D",
  );
  r = r && ([...ms932Encoder.encode("丞")].join(",") === "143,229"); // U+4E1E
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E1F");
    },
    Error,
    "encode-error: U+4E1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E20");
    },
    Error,
    "encode-error: U+4E20",
  );
  r = r && ([...ms932Encoder.encode("両")].join(",") === "151,188"); // U+4E21
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E22");
    },
    Error,
    "encode-error: U+4E22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E23");
    },
    Error,
    "encode-error: U+4E23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E24");
    },
    Error,
    "encode-error: U+4E24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E25");
    },
    Error,
    "encode-error: U+4E25",
  );
  r = r && ([...ms932Encoder.encode("並")].join(",") === "149,192"); // U+4E26
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E27");
    },
    Error,
    "encode-error: U+4E27",
  );
  r = r && ([...ms932Encoder.encode("丨")].join(",") === "250,104"); // U+4E28
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E29");
    },
    Error,
    "encode-error: U+4E29",
  );
  r = r && ([...ms932Encoder.encode("个")].join(",") === "152,162"); // U+4E2A
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E2B");
    },
    Error,
    "encode-error: U+4E2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E2C");
    },
    Error,
    "encode-error: U+4E2C",
  );
  r = r && ([...ms932Encoder.encode("中")].join(",") === "146,134"); // U+4E2D
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E2E");
    },
    Error,
    "encode-error: U+4E2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E2F");
    },
    Error,
    "encode-error: U+4E2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E30");
    },
    Error,
    "encode-error: U+4E30",
  );
  r = r && ([...ms932Encoder.encode("丱串")].join(",") === "152,163,139,248"); // U+4E31
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E33");
    },
    Error,
    "encode-error: U+4E33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E34");
    },
    Error,
    "encode-error: U+4E34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E35");
    },
    Error,
    "encode-error: U+4E35",
  );
  r = r && ([...ms932Encoder.encode("丶")].join(",") === "152,164"); // U+4E36
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E37");
    },
    Error,
    "encode-error: U+4E37",
  );
  r = r && ([...ms932Encoder.encode("丸丹")].join(",") === "138,219,146,79"); // U+4E38
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E3A");
    },
    Error,
    "encode-error: U+4E3A",
  );
  r = r && ([...ms932Encoder.encode("主丼")].join(",") === "142,229,152,165"); // U+4E3B
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E3D");
    },
    Error,
    "encode-error: U+4E3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E3E");
    },
    Error,
    "encode-error: U+4E3E",
  );
  r = r && ([...ms932Encoder.encode("丿")].join(",") === "152,166"); // U+4E3F
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E40");
    },
    Error,
    "encode-error: U+4E40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E41");
    },
    Error,
    "encode-error: U+4E41",
  );
  r = r && ([...ms932Encoder.encode("乂乃")].join(",") === "152,167,148,84"); // U+4E42
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E44");
    },
    Error,
    "encode-error: U+4E44",
  );
  r = r && ([...ms932Encoder.encode("久")].join(",") === "139,118"); // U+4E45
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E46");
    },
    Error,
    "encode-error: U+4E46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E47");
    },
    Error,
    "encode-error: U+4E47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E48");
    },
    Error,
    "encode-error: U+4E48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E49");
    },
    Error,
    "encode-error: U+4E49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E4A");
    },
    Error,
    "encode-error: U+4E4A",
  );
  r = r && ([...ms932Encoder.encode("之")].join(",") === "148,86"); // U+4E4B
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E4C");
    },
    Error,
    "encode-error: U+4E4C",
  );
  r = r &&
    ([...ms932Encoder.encode("乍乎乏")].join(",") === "147,225,140,193,150,82"); // U+4E4D
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E50");
    },
    Error,
    "encode-error: U+4E50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E51");
    },
    Error,
    "encode-error: U+4E51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E52");
    },
    Error,
    "encode-error: U+4E52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E53");
    },
    Error,
    "encode-error: U+4E53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E54");
    },
    Error,
    "encode-error: U+4E54",
  );
  r = r &&
    ([...ms932Encoder.encode("乕乖乗乘乙")].join(",") ===
      "229,104,152,168,143,230,152,169,137,179"); // U+4E55
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E5A");
    },
    Error,
    "encode-error: U+4E5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E5B");
    },
    Error,
    "encode-error: U+4E5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E5C");
    },
    Error,
    "encode-error: U+4E5C",
  );
  r = r &&
    ([...ms932Encoder.encode("九乞也")].join(",") ===
      "139,227,140,238,150,231"); // U+4E5D
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E60");
    },
    Error,
    "encode-error: U+4E60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E61");
    },
    Error,
    "encode-error: U+4E61",
  );
  r = r && ([...ms932Encoder.encode("乢")].join(",") === "155,164"); // U+4E62
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E63");
    },
    Error,
    "encode-error: U+4E63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E64");
    },
    Error,
    "encode-error: U+4E64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E65");
    },
    Error,
    "encode-error: U+4E65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E66");
    },
    Error,
    "encode-error: U+4E66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E67");
    },
    Error,
    "encode-error: U+4E67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E68");
    },
    Error,
    "encode-error: U+4E68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E69");
    },
    Error,
    "encode-error: U+4E69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E6A");
    },
    Error,
    "encode-error: U+4E6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E6B");
    },
    Error,
    "encode-error: U+4E6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E6C");
    },
    Error,
    "encode-error: U+4E6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E6D");
    },
    Error,
    "encode-error: U+4E6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E6E");
    },
    Error,
    "encode-error: U+4E6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E6F");
    },
    Error,
    "encode-error: U+4E6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E70");
    },
    Error,
    "encode-error: U+4E70",
  );
  r = r && ([...ms932Encoder.encode("乱")].join(",") === "151,144"); // U+4E71
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E72");
    },
    Error,
    "encode-error: U+4E72",
  );
  r = r && ([...ms932Encoder.encode("乳")].join(",") === "147,251"); // U+4E73
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E74");
    },
    Error,
    "encode-error: U+4E74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E75");
    },
    Error,
    "encode-error: U+4E75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E76");
    },
    Error,
    "encode-error: U+4E76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E77");
    },
    Error,
    "encode-error: U+4E77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E78");
    },
    Error,
    "encode-error: U+4E78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E79");
    },
    Error,
    "encode-error: U+4E79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E7A");
    },
    Error,
    "encode-error: U+4E7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E7B");
    },
    Error,
    "encode-error: U+4E7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E7C");
    },
    Error,
    "encode-error: U+4E7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E7D");
    },
    Error,
    "encode-error: U+4E7D",
  );
  r = r && ([...ms932Encoder.encode("乾")].join(",") === "138,163"); // U+4E7E
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E7F");
    },
    Error,
    "encode-error: U+4E7F",
  );
  r = r && ([...ms932Encoder.encode("亀")].join(",") === "139,84"); // U+4E80
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E81");
    },
    Error,
    "encode-error: U+4E81",
  );
  r = r && ([...ms932Encoder.encode("亂")].join(",") === "152,170"); // U+4E82
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E83");
    },
    Error,
    "encode-error: U+4E83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E84");
    },
    Error,
    "encode-error: U+4E84",
  );
  r = r && ([...ms932Encoder.encode("亅了")].join(",") === "152,171,151,185"); // U+4E85
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E87");
    },
    Error,
    "encode-error: U+4E87",
  );
  r = r &&
    ([...ms932Encoder.encode("予争亊事二")].join(",") ===
      "151,92,145,136,152,173,142,150,147,241"); // U+4E88
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E8D");
    },
    Error,
    "encode-error: U+4E8D",
  );
  r = r && ([...ms932Encoder.encode("于")].join(",") === "152,176"); // U+4E8E
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E8F");
    },
    Error,
    "encode-error: U+4E8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E90");
    },
    Error,
    "encode-error: U+4E90",
  );
  r = r && ([...ms932Encoder.encode("云互")].join(",") === "137,93,140,221"); // U+4E91
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E93");
    },
    Error,
    "encode-error: U+4E93",
  );
  r = r && ([...ms932Encoder.encode("五井")].join(",") === "140,220,136,228"); // U+4E94
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E96");
    },
    Error,
    "encode-error: U+4E96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E97");
    },
    Error,
    "encode-error: U+4E97",
  );
  r = r && ([...ms932Encoder.encode("亘亙")].join(",") === "152,106,152,105"); // U+4E98
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E9A");
    },
    Error,
    "encode-error: U+4E9A",
  );
  r = r && ([...ms932Encoder.encode("些亜")].join(",") === "141,177,136,159"); // U+4E9B
  assertThrows(
    () => {
      ms932Encoder.encode("\u4E9D");
    },
    Error,
    "encode-error: U+4E9D",
  );
  r = r &&
    ([...ms932Encoder.encode("亞亟亠亡亢")].join(",") ===
      "152,177,152,178,152,179,150,83,152,180"); // U+4E9E
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EA3");
    },
    Error,
    "encode-error: U+4EA3",
  );
  r = r &&
    ([...ms932Encoder.encode("交亥亦")].join(",") ===
      "140,240,136,229,150,146"); // U+4EA4
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EA7");
    },
    Error,
    "encode-error: U+4EA7",
  );
  r = r && ([...ms932Encoder.encode("亨")].join(",") === "139,156"); // U+4EA8
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EA9");
    },
    Error,
    "encode-error: U+4EA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EAA");
    },
    Error,
    "encode-error: U+4EAA",
  );
  r = r &&
    ([...ms932Encoder.encode("享京亭亮")].join(",") ===
      "139,157,139,158,146,224,151,186"); // U+4EAB
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EAF");
    },
    Error,
    "encode-error: U+4EAF",
  );
  r = r && ([...ms932Encoder.encode("亰")].join(",") === "152,181"); // U+4EB0
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EB1");
    },
    Error,
    "encode-error: U+4EB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EB2");
    },
    Error,
    "encode-error: U+4EB2",
  );
  r = r && ([...ms932Encoder.encode("亳")].join(",") === "152,182"); // U+4EB3
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EB4");
    },
    Error,
    "encode-error: U+4EB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EB5");
    },
    Error,
    "encode-error: U+4EB5",
  );
  r = r && ([...ms932Encoder.encode("亶")].join(",") === "152,183"); // U+4EB6
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EB7");
    },
    Error,
    "encode-error: U+4EB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EB8");
    },
    Error,
    "encode-error: U+4EB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EB9");
    },
    Error,
    "encode-error: U+4EB9",
  );
  r = r && ([...ms932Encoder.encode("人")].join(",") === "144,108"); // U+4EBA
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EBB");
    },
    Error,
    "encode-error: U+4EBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EBC");
    },
    Error,
    "encode-error: U+4EBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EBD");
    },
    Error,
    "encode-error: U+4EBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EBE");
    },
    Error,
    "encode-error: U+4EBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EBF");
    },
    Error,
    "encode-error: U+4EBF",
  );
  r = r &&
    ([...ms932Encoder.encode("什仁仂")].join(",") === "143,89,144,109,152,188"); // U+4EC0
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EC3");
    },
    Error,
    "encode-error: U+4EC3",
  );
  r = r && ([...ms932Encoder.encode("仄")].join(",") === "152,186"); // U+4EC4
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EC5");
    },
    Error,
    "encode-error: U+4EC5",
  );
  r = r && ([...ms932Encoder.encode("仆仇")].join(",") === "152,187,139,119"); // U+4EC6
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EC8");
    },
    Error,
    "encode-error: U+4EC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EC9");
    },
    Error,
    "encode-error: U+4EC9",
  );
  r = r && ([...ms932Encoder.encode("今介")].join(",") === "141,161,137,238"); // U+4ECA
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ECC");
    },
    Error,
    "encode-error: U+4ECC",
  );
  r = r &&
    ([...ms932Encoder.encode("仍从仏")].join(",") ===
      "152,185,152,184,149,167"); // U+4ECD
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ED0");
    },
    Error,
    "encode-error: U+4ED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ED1");
    },
    Error,
    "encode-error: U+4ED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ED2");
    },
    Error,
    "encode-error: U+4ED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4ED3");
    },
    Error,
    "encode-error: U+4ED3",
  );
  r = r &&
    ([...ms932Encoder.encode("仔仕他仗付仙")].join(",") ===
      "142,101,142,100,145,188,152,189,149,116,144,229"); // U+4ED4
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EDA");
    },
    Error,
    "encode-error: U+4EDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EDB");
    },
    Error,
    "encode-error: U+4EDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EDC");
    },
    Error,
    "encode-error: U+4EDC",
  );
  r = r &&
    ([...ms932Encoder.encode("仝仞仟")].join(",") === "129,87,152,190,152,192"); // U+4EDD
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EE0");
    },
    Error,
    "encode-error: U+4EE0",
  );
  r = r && ([...ms932Encoder.encode("仡")].join(",") === "250,105"); // U+4EE1
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EE2");
    },
    Error,
    "encode-error: U+4EE2",
  );
  r = r &&
    ([...ms932Encoder.encode("代令以")].join(",") ===
      "145,227,151,223,136,200"); // U+4EE3
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EE6");
    },
    Error,
    "encode-error: U+4EE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EE7");
    },
    Error,
    "encode-error: U+4EE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EE8");
    },
    Error,
    "encode-error: U+4EE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EE9");
    },
    Error,
    "encode-error: U+4EE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EEA");
    },
    Error,
    "encode-error: U+4EEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EEB");
    },
    Error,
    "encode-error: U+4EEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EEC");
    },
    Error,
    "encode-error: U+4EEC",
  );
  r = r && ([...ms932Encoder.encode("仭仮")].join(",") === "152,191,137,188"); // U+4EED
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EEF");
    },
    Error,
    "encode-error: U+4EEF",
  );
  r = r && ([...ms932Encoder.encode("仰")].join(",") === "139,194"); // U+4EF0
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EF1");
    },
    Error,
    "encode-error: U+4EF1",
  );
  r = r && ([...ms932Encoder.encode("仲")].join(",") === "146,135"); // U+4EF2
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EF3");
    },
    Error,
    "encode-error: U+4EF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EF4");
    },
    Error,
    "encode-error: U+4EF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EF5");
    },
    Error,
    "encode-error: U+4EF5",
  );
  r = r && ([...ms932Encoder.encode("件价")].join(",") === "140,143,152,193"); // U+4EF6
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EF8");
    },
    Error,
    "encode-error: U+4EF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EF9");
    },
    Error,
    "encode-error: U+4EF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EFA");
    },
    Error,
    "encode-error: U+4EFA",
  );
  r = r && ([...ms932Encoder.encode("任仼")].join(",") === "148,67,250,106"); // U+4EFB
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EFD");
    },
    Error,
    "encode-error: U+4EFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EFE");
    },
    Error,
    "encode-error: U+4EFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4EFF");
    },
    Error,
    "encode-error: U+4EFF",
  );
  r = r && ([...ms932Encoder.encode("伀企")].join(",") === "250,107,138,233"); // U+4F00
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F02");
    },
    Error,
    "encode-error: U+4F02",
  );
  r = r && ([...ms932Encoder.encode("伃")].join(",") === "250,108"); // U+4F03
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F04");
    },
    Error,
    "encode-error: U+4F04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F05");
    },
    Error,
    "encode-error: U+4F05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F06");
    },
    Error,
    "encode-error: U+4F06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F07");
    },
    Error,
    "encode-error: U+4F07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F08");
    },
    Error,
    "encode-error: U+4F08",
  );
  r = r && ([...ms932Encoder.encode("伉伊")].join(",") === "152,194,136,201"); // U+4F09
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F0B");
    },
    Error,
    "encode-error: U+4F0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F0C");
    },
    Error,
    "encode-error: U+4F0C",
  );
  r = r &&
    ([...ms932Encoder.encode("伍伎伏伐休")].join(",") ===
      "140,222,138,234,149,154,148,176,139,120"); // U+4F0D
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F12");
    },
    Error,
    "encode-error: U+4F12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F13");
    },
    Error,
    "encode-error: U+4F13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F14");
    },
    Error,
    "encode-error: U+4F14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F15");
    },
    Error,
    "encode-error: U+4F15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F16");
    },
    Error,
    "encode-error: U+4F16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F17");
    },
    Error,
    "encode-error: U+4F17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F18");
    },
    Error,
    "encode-error: U+4F18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F19");
    },
    Error,
    "encode-error: U+4F19",
  );
  r = r && ([...ms932Encoder.encode("会")].join(",") === "137,239"); // U+4F1A
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F1B");
    },
    Error,
    "encode-error: U+4F1B",
  );
  r = r && ([...ms932Encoder.encode("伜伝")].join(",") === "152,229,147,96"); // U+4F1C
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F1E");
    },
    Error,
    "encode-error: U+4F1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F1F");
    },
    Error,
    "encode-error: U+4F1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F20");
    },
    Error,
    "encode-error: U+4F20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F21");
    },
    Error,
    "encode-error: U+4F21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F22");
    },
    Error,
    "encode-error: U+4F22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F23");
    },
    Error,
    "encode-error: U+4F23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F24");
    },
    Error,
    "encode-error: U+4F24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F25");
    },
    Error,
    "encode-error: U+4F25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F26");
    },
    Error,
    "encode-error: U+4F26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F27");
    },
    Error,
    "encode-error: U+4F27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F28");
    },
    Error,
    "encode-error: U+4F28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F29");
    },
    Error,
    "encode-error: U+4F29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F2A");
    },
    Error,
    "encode-error: U+4F2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F2B");
    },
    Error,
    "encode-error: U+4F2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F2C");
    },
    Error,
    "encode-error: U+4F2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F2D");
    },
    Error,
    "encode-error: U+4F2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F2E");
    },
    Error,
    "encode-error: U+4F2E",
  );
  r = r && ([...ms932Encoder.encode("伯估")].join(",") === "148,140,152,196"); // U+4F2F
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F31");
    },
    Error,
    "encode-error: U+4F31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F32");
    },
    Error,
    "encode-error: U+4F32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F33");
    },
    Error,
    "encode-error: U+4F33",
  );
  r = r && ([...ms932Encoder.encode("伴")].join(",") === "148,186"); // U+4F34
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F35");
    },
    Error,
    "encode-error: U+4F35",
  );
  r = r && ([...ms932Encoder.encode("伶")].join(",") === "151,224"); // U+4F36
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F37");
    },
    Error,
    "encode-error: U+4F37",
  );
  r = r &&
    ([...ms932Encoder.encode("伸伹伺")].join(",") === "144,76,250,109,142,102"); // U+4F38
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F3B");
    },
    Error,
    "encode-error: U+4F3B",
  );
  r = r && ([...ms932Encoder.encode("似伽")].join(",") === "142,151,137,190"); // U+4F3C
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F3E");
    },
    Error,
    "encode-error: U+4F3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F3F");
    },
    Error,
    "encode-error: U+4F3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F40");
    },
    Error,
    "encode-error: U+4F40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F41");
    },
    Error,
    "encode-error: U+4F41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F42");
    },
    Error,
    "encode-error: U+4F42",
  );
  r = r && ([...ms932Encoder.encode("佃")].join(",") === "146,207"); // U+4F43
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F44");
    },
    Error,
    "encode-error: U+4F44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F45");
    },
    Error,
    "encode-error: U+4F45",
  );
  r = r && ([...ms932Encoder.encode("但佇")].join(",") === "146,65,152,200"); // U+4F46
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F48");
    },
    Error,
    "encode-error: U+4F48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F49");
    },
    Error,
    "encode-error: U+4F49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F4A");
    },
    Error,
    "encode-error: U+4F4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F4B");
    },
    Error,
    "encode-error: U+4F4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F4C");
    },
    Error,
    "encode-error: U+4F4C",
  );
  r = r &&
    ([...ms932Encoder.encode("位低住佐佑")].join(",") ===
      "136,202,146,225,143,90,141,178,151,67"); // U+4F4D
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F52");
    },
    Error,
    "encode-error: U+4F52",
  );
  r = r && ([...ms932Encoder.encode("体")].join(",") === "145,204"); // U+4F53
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F54");
    },
    Error,
    "encode-error: U+4F54",
  );
  r = r &&
    ([...ms932Encoder.encode("何佖佗")].join(",") ===
      "137,189,250,110,152,199"); // U+4F55
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F58");
    },
    Error,
    "encode-error: U+4F58",
  );
  r = r &&
    ([...ms932Encoder.encode("余佚佛作佝佞")].join(",") ===
      "151,93,152,195,152,197,141,236,152,198,155,67"); // U+4F59
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F5F");
    },
    Error,
    "encode-error: U+4F5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F60");
    },
    Error,
    "encode-error: U+4F60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F61");
    },
    Error,
    "encode-error: U+4F61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F62");
    },
    Error,
    "encode-error: U+4F62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F63");
    },
    Error,
    "encode-error: U+4F63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F64");
    },
    Error,
    "encode-error: U+4F64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F65");
    },
    Error,
    "encode-error: U+4F65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F66");
    },
    Error,
    "encode-error: U+4F66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F67");
    },
    Error,
    "encode-error: U+4F67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F68");
    },
    Error,
    "encode-error: U+4F68",
  );
  r = r && ([...ms932Encoder.encode("佩")].join(",") === "152,206"); // U+4F69
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F6A");
    },
    Error,
    "encode-error: U+4F6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F6B");
    },
    Error,
    "encode-error: U+4F6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F6C");
    },
    Error,
    "encode-error: U+4F6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F6D");
    },
    Error,
    "encode-error: U+4F6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F6E");
    },
    Error,
    "encode-error: U+4F6E",
  );
  r = r && ([...ms932Encoder.encode("佯佰")].join(",") === "152,209,152,207"); // U+4F6F
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F71");
    },
    Error,
    "encode-error: U+4F71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F72");
    },
    Error,
    "encode-error: U+4F72",
  );
  r = r && ([...ms932Encoder.encode("佳")].join(",") === "137,192"); // U+4F73
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F74");
    },
    Error,
    "encode-error: U+4F74",
  );
  r = r && ([...ms932Encoder.encode("併佶")].join(",") === "149,185,152,201"); // U+4F75
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F77");
    },
    Error,
    "encode-error: U+4F77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F78");
    },
    Error,
    "encode-error: U+4F78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F79");
    },
    Error,
    "encode-error: U+4F79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F7A");
    },
    Error,
    "encode-error: U+4F7A",
  );
  r = r && ([...ms932Encoder.encode("佻佼")].join(",") === "152,205,140,241"); // U+4F7B
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F7D");
    },
    Error,
    "encode-error: U+4F7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F7E");
    },
    Error,
    "encode-error: U+4F7E",
  );
  r = r && ([...ms932Encoder.encode("使")].join(",") === "142,103"); // U+4F7F
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F80");
    },
    Error,
    "encode-error: U+4F80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F81");
    },
    Error,
    "encode-error: U+4F81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F82");
    },
    Error,
    "encode-error: U+4F82",
  );
  r = r && ([...ms932Encoder.encode("侃")].join(",") === "138,164"); // U+4F83
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F84");
    },
    Error,
    "encode-error: U+4F84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F85");
    },
    Error,
    "encode-error: U+4F85",
  );
  r = r && ([...ms932Encoder.encode("來")].join(",") === "152,210"); // U+4F86
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F87");
    },
    Error,
    "encode-error: U+4F87",
  );
  r = r && ([...ms932Encoder.encode("侈")].join(",") === "152,202"); // U+4F88
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F89");
    },
    Error,
    "encode-error: U+4F89",
  );
  r = r && ([...ms932Encoder.encode("侊例")].join(",") === "250,112,151,225"); // U+4F8A
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F8C");
    },
    Error,
    "encode-error: U+4F8C",
  );
  r = r && ([...ms932Encoder.encode("侍")].join(",") === "142,152"); // U+4F8D
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F8E");
    },
    Error,
    "encode-error: U+4F8E",
  );
  r = r && ([...ms932Encoder.encode("侏")].join(",") === "152,203"); // U+4F8F
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F90");
    },
    Error,
    "encode-error: U+4F90",
  );
  r = r && ([...ms932Encoder.encode("侑侒")].join(",") === "152,208,250,111"); // U+4F91
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F93");
    },
    Error,
    "encode-error: U+4F93",
  );
  r = r && ([...ms932Encoder.encode("侔")].join(",") === "250,114"); // U+4F94
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F95");
    },
    Error,
    "encode-error: U+4F95",
  );
  r = r && ([...ms932Encoder.encode("侖")].join(",") === "152,211"); // U+4F96
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F97");
    },
    Error,
    "encode-error: U+4F97",
  );
  r = r && ([...ms932Encoder.encode("侘")].join(",") === "152,204"); // U+4F98
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F99");
    },
    Error,
    "encode-error: U+4F99",
  );
  r = r && ([...ms932Encoder.encode("侚供")].join(",") === "250,113,139,159"); // U+4F9A
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F9C");
    },
    Error,
    "encode-error: U+4F9C",
  );
  r = r && ([...ms932Encoder.encode("依")].join(",") === "136,203"); // U+4F9D
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F9E");
    },
    Error,
    "encode-error: U+4F9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4F9F");
    },
    Error,
    "encode-error: U+4F9F",
  );
  r = r && ([...ms932Encoder.encode("侠価")].join(",") === "139,160,137,191"); // U+4FA0
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FA2");
    },
    Error,
    "encode-error: U+4FA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FA3");
    },
    Error,
    "encode-error: U+4FA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FA4");
    },
    Error,
    "encode-error: U+4FA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FA5");
    },
    Error,
    "encode-error: U+4FA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FA6");
    },
    Error,
    "encode-error: U+4FA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FA7");
    },
    Error,
    "encode-error: U+4FA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FA8");
    },
    Error,
    "encode-error: U+4FA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FA9");
    },
    Error,
    "encode-error: U+4FA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FAA");
    },
    Error,
    "encode-error: U+4FAA",
  );
  r = r && ([...ms932Encoder.encode("侫")].join(",") === "155,68"); // U+4FAB
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FAC");
    },
    Error,
    "encode-error: U+4FAC",
  );
  r = r &&
    ([...ms932Encoder.encode("侭侮侯")].join(",") ===
      "150,153,149,142,140,242"); // U+4FAD
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FB0");
    },
    Error,
    "encode-error: U+4FB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FB1");
    },
    Error,
    "encode-error: U+4FB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FB2");
    },
    Error,
    "encode-error: U+4FB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FB3");
    },
    Error,
    "encode-error: U+4FB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FB4");
    },
    Error,
    "encode-error: U+4FB4",
  );
  r = r && ([...ms932Encoder.encode("侵侶")].join(",") === "144,78,151,181"); // U+4FB5
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FB7");
    },
    Error,
    "encode-error: U+4FB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FB8");
    },
    Error,
    "encode-error: U+4FB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FB9");
    },
    Error,
    "encode-error: U+4FB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FBA");
    },
    Error,
    "encode-error: U+4FBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FBB");
    },
    Error,
    "encode-error: U+4FBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FBC");
    },
    Error,
    "encode-error: U+4FBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FBD");
    },
    Error,
    "encode-error: U+4FBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FBE");
    },
    Error,
    "encode-error: U+4FBE",
  );
  r = r && ([...ms932Encoder.encode("便")].join(",") === "149,214"); // U+4FBF
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FC0");
    },
    Error,
    "encode-error: U+4FC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FC1");
    },
    Error,
    "encode-error: U+4FC1",
  );
  r = r &&
    ([...ms932Encoder.encode("係促俄")].join(",") === "140,87,145,163,137,226"); // U+4FC2
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FC5");
    },
    Error,
    "encode-error: U+4FC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FC6");
    },
    Error,
    "encode-error: U+4FC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FC7");
    },
    Error,
    "encode-error: U+4FC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FC8");
    },
    Error,
    "encode-error: U+4FC8",
  );
  r = r && ([...ms932Encoder.encode("俉俊")].join(",") === "250,97,143,114"); // U+4FC9
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FCB");
    },
    Error,
    "encode-error: U+4FCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FCC");
    },
    Error,
    "encode-error: U+4FCC",
  );
  r = r && ([...ms932Encoder.encode("俍俎")].join(",") === "250,115,152,215"); // U+4FCD
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FCF");
    },
    Error,
    "encode-error: U+4FCF",
  );
  r = r && ([...ms932Encoder.encode("俐俑")].join(",") === "152,220,152,218"); // U+4FD0
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FD2");
    },
    Error,
    "encode-error: U+4FD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FD3");
    },
    Error,
    "encode-error: U+4FD3",
  );
  r = r && ([...ms932Encoder.encode("俔")].join(",") === "152,213"); // U+4FD4
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FD5");
    },
    Error,
    "encode-error: U+4FD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FD6");
    },
    Error,
    "encode-error: U+4FD6",
  );
  r = r && ([...ms932Encoder.encode("俗俘")].join(",") === "145,173,152,216"); // U+4FD7
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FD9");
    },
    Error,
    "encode-error: U+4FD9",
  );
  r = r && ([...ms932Encoder.encode("俚俛")].join(",") === "152,219,152,217"); // U+4FDA
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FDC");
    },
    Error,
    "encode-error: U+4FDC",
  );
  r = r && ([...ms932Encoder.encode("保")].join(",") === "149,219"); // U+4FDD
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FDE");
    },
    Error,
    "encode-error: U+4FDE",
  );
  r = r && ([...ms932Encoder.encode("俟")].join(",") === "152,214"); // U+4FDF
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FE0");
    },
    Error,
    "encode-error: U+4FE0",
  );
  r = r && ([...ms932Encoder.encode("信")].join(",") === "144,77"); // U+4FE1
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FE2");
    },
    Error,
    "encode-error: U+4FE2",
  );
  r = r &&
    ([...ms932Encoder.encode("俣俤俥")].join(",") ===
      "150,147,152,221,152,222"); // U+4FE3
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FE6");
    },
    Error,
    "encode-error: U+4FE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FE7");
    },
    Error,
    "encode-error: U+4FE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FE8");
    },
    Error,
    "encode-error: U+4FE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FE9");
    },
    Error,
    "encode-error: U+4FE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FEA");
    },
    Error,
    "encode-error: U+4FEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FEB");
    },
    Error,
    "encode-error: U+4FEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FEC");
    },
    Error,
    "encode-error: U+4FEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FED");
    },
    Error,
    "encode-error: U+4FED",
  );
  r = r && ([...ms932Encoder.encode("修俯")].join(",") === "143,67,152,235"); // U+4FEE
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FF0");
    },
    Error,
    "encode-error: U+4FF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FF1");
    },
    Error,
    "encode-error: U+4FF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FF2");
    },
    Error,
    "encode-error: U+4FF2",
  );
  r = r && ([...ms932Encoder.encode("俳")].join(",") === "148,111"); // U+4FF3
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FF4");
    },
    Error,
    "encode-error: U+4FF4",
  );
  r = r && ([...ms932Encoder.encode("俵俶")].join(",") === "149,85,152,230"); // U+4FF5
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FF7");
    },
    Error,
    "encode-error: U+4FF7",
  );
  r = r && ([...ms932Encoder.encode("俸")].join(",") === "149,238"); // U+4FF8
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FF9");
    },
    Error,
    "encode-error: U+4FF9",
  );
  r = r && ([...ms932Encoder.encode("俺")].join(",") === "137,180"); // U+4FFA
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FFB");
    },
    Error,
    "encode-error: U+4FFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FFC");
    },
    Error,
    "encode-error: U+4FFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u4FFD");
    },
    Error,
    "encode-error: U+4FFD",
  );
  r = r && ([...ms932Encoder.encode("俾俿")].join(",") === "152,234,250,118"); // U+4FFE

  assertStrictEquals(r, true);
});
