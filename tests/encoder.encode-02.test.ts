import { assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+1000-U+1FFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  assertThrows(
    () => {
      ms932Encoder.encode("\u1000");
    },
    Error,
    "encode-error: U+1000",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1001");
    },
    Error,
    "encode-error: U+1001",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1002");
    },
    Error,
    "encode-error: U+1002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1003");
    },
    Error,
    "encode-error: U+1003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1004");
    },
    Error,
    "encode-error: U+1004",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1005");
    },
    Error,
    "encode-error: U+1005",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1006");
    },
    Error,
    "encode-error: U+1006",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1007");
    },
    Error,
    "encode-error: U+1007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1008");
    },
    Error,
    "encode-error: U+1008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1009");
    },
    Error,
    "encode-error: U+1009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u100A");
    },
    Error,
    "encode-error: U+100A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u100B");
    },
    Error,
    "encode-error: U+100B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u100C");
    },
    Error,
    "encode-error: U+100C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u100D");
    },
    Error,
    "encode-error: U+100D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u100E");
    },
    Error,
    "encode-error: U+100E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u100F");
    },
    Error,
    "encode-error: U+100F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1010");
    },
    Error,
    "encode-error: U+1010",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1011");
    },
    Error,
    "encode-error: U+1011",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1012");
    },
    Error,
    "encode-error: U+1012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1013");
    },
    Error,
    "encode-error: U+1013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1014");
    },
    Error,
    "encode-error: U+1014",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1015");
    },
    Error,
    "encode-error: U+1015",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1016");
    },
    Error,
    "encode-error: U+1016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1017");
    },
    Error,
    "encode-error: U+1017",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1018");
    },
    Error,
    "encode-error: U+1018",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1019");
    },
    Error,
    "encode-error: U+1019",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u101A");
    },
    Error,
    "encode-error: U+101A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u101B");
    },
    Error,
    "encode-error: U+101B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u101C");
    },
    Error,
    "encode-error: U+101C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u101D");
    },
    Error,
    "encode-error: U+101D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u101E");
    },
    Error,
    "encode-error: U+101E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u101F");
    },
    Error,
    "encode-error: U+101F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1020");
    },
    Error,
    "encode-error: U+1020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1021");
    },
    Error,
    "encode-error: U+1021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1022");
    },
    Error,
    "encode-error: U+1022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1023");
    },
    Error,
    "encode-error: U+1023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1024");
    },
    Error,
    "encode-error: U+1024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1025");
    },
    Error,
    "encode-error: U+1025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1026");
    },
    Error,
    "encode-error: U+1026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1027");
    },
    Error,
    "encode-error: U+1027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1028");
    },
    Error,
    "encode-error: U+1028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1029");
    },
    Error,
    "encode-error: U+1029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u102A");
    },
    Error,
    "encode-error: U+102A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u102B");
    },
    Error,
    "encode-error: U+102B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u102C");
    },
    Error,
    "encode-error: U+102C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u102D");
    },
    Error,
    "encode-error: U+102D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u102E");
    },
    Error,
    "encode-error: U+102E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u102F");
    },
    Error,
    "encode-error: U+102F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1030");
    },
    Error,
    "encode-error: U+1030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1031");
    },
    Error,
    "encode-error: U+1031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1032");
    },
    Error,
    "encode-error: U+1032",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1033");
    },
    Error,
    "encode-error: U+1033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1034");
    },
    Error,
    "encode-error: U+1034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1035");
    },
    Error,
    "encode-error: U+1035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1036");
    },
    Error,
    "encode-error: U+1036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1037");
    },
    Error,
    "encode-error: U+1037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1038");
    },
    Error,
    "encode-error: U+1038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1039");
    },
    Error,
    "encode-error: U+1039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u103A");
    },
    Error,
    "encode-error: U+103A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u103B");
    },
    Error,
    "encode-error: U+103B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u103C");
    },
    Error,
    "encode-error: U+103C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u103D");
    },
    Error,
    "encode-error: U+103D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u103E");
    },
    Error,
    "encode-error: U+103E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u103F");
    },
    Error,
    "encode-error: U+103F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1040");
    },
    Error,
    "encode-error: U+1040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1041");
    },
    Error,
    "encode-error: U+1041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1042");
    },
    Error,
    "encode-error: U+1042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1043");
    },
    Error,
    "encode-error: U+1043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1044");
    },
    Error,
    "encode-error: U+1044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1045");
    },
    Error,
    "encode-error: U+1045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1046");
    },
    Error,
    "encode-error: U+1046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1047");
    },
    Error,
    "encode-error: U+1047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1048");
    },
    Error,
    "encode-error: U+1048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1049");
    },
    Error,
    "encode-error: U+1049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u104A");
    },
    Error,
    "encode-error: U+104A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u104B");
    },
    Error,
    "encode-error: U+104B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u104C");
    },
    Error,
    "encode-error: U+104C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u104D");
    },
    Error,
    "encode-error: U+104D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u104E");
    },
    Error,
    "encode-error: U+104E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u104F");
    },
    Error,
    "encode-error: U+104F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1050");
    },
    Error,
    "encode-error: U+1050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1051");
    },
    Error,
    "encode-error: U+1051",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1052");
    },
    Error,
    "encode-error: U+1052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1053");
    },
    Error,
    "encode-error: U+1053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1054");
    },
    Error,
    "encode-error: U+1054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1055");
    },
    Error,
    "encode-error: U+1055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1056");
    },
    Error,
    "encode-error: U+1056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1057");
    },
    Error,
    "encode-error: U+1057",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1058");
    },
    Error,
    "encode-error: U+1058",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1059");
    },
    Error,
    "encode-error: U+1059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u105A");
    },
    Error,
    "encode-error: U+105A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u105B");
    },
    Error,
    "encode-error: U+105B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u105C");
    },
    Error,
    "encode-error: U+105C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u105D");
    },
    Error,
    "encode-error: U+105D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u105E");
    },
    Error,
    "encode-error: U+105E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u105F");
    },
    Error,
    "encode-error: U+105F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1060");
    },
    Error,
    "encode-error: U+1060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1061");
    },
    Error,
    "encode-error: U+1061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1062");
    },
    Error,
    "encode-error: U+1062",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1063");
    },
    Error,
    "encode-error: U+1063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1064");
    },
    Error,
    "encode-error: U+1064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1065");
    },
    Error,
    "encode-error: U+1065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1066");
    },
    Error,
    "encode-error: U+1066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1067");
    },
    Error,
    "encode-error: U+1067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1068");
    },
    Error,
    "encode-error: U+1068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1069");
    },
    Error,
    "encode-error: U+1069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u106A");
    },
    Error,
    "encode-error: U+106A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u106B");
    },
    Error,
    "encode-error: U+106B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u106C");
    },
    Error,
    "encode-error: U+106C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u106D");
    },
    Error,
    "encode-error: U+106D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u106E");
    },
    Error,
    "encode-error: U+106E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u106F");
    },
    Error,
    "encode-error: U+106F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1070");
    },
    Error,
    "encode-error: U+1070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1071");
    },
    Error,
    "encode-error: U+1071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1072");
    },
    Error,
    "encode-error: U+1072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1073");
    },
    Error,
    "encode-error: U+1073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1074");
    },
    Error,
    "encode-error: U+1074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1075");
    },
    Error,
    "encode-error: U+1075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1076");
    },
    Error,
    "encode-error: U+1076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1077");
    },
    Error,
    "encode-error: U+1077",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1078");
    },
    Error,
    "encode-error: U+1078",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1079");
    },
    Error,
    "encode-error: U+1079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u107A");
    },
    Error,
    "encode-error: U+107A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u107B");
    },
    Error,
    "encode-error: U+107B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u107C");
    },
    Error,
    "encode-error: U+107C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u107D");
    },
    Error,
    "encode-error: U+107D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u107E");
    },
    Error,
    "encode-error: U+107E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u107F");
    },
    Error,
    "encode-error: U+107F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1080");
    },
    Error,
    "encode-error: U+1080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1081");
    },
    Error,
    "encode-error: U+1081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1082");
    },
    Error,
    "encode-error: U+1082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1083");
    },
    Error,
    "encode-error: U+1083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1084");
    },
    Error,
    "encode-error: U+1084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1085");
    },
    Error,
    "encode-error: U+1085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1086");
    },
    Error,
    "encode-error: U+1086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1087");
    },
    Error,
    "encode-error: U+1087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1088");
    },
    Error,
    "encode-error: U+1088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1089");
    },
    Error,
    "encode-error: U+1089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u108A");
    },
    Error,
    "encode-error: U+108A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u108B");
    },
    Error,
    "encode-error: U+108B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u108C");
    },
    Error,
    "encode-error: U+108C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u108D");
    },
    Error,
    "encode-error: U+108D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u108E");
    },
    Error,
    "encode-error: U+108E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u108F");
    },
    Error,
    "encode-error: U+108F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1090");
    },
    Error,
    "encode-error: U+1090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1091");
    },
    Error,
    "encode-error: U+1091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1092");
    },
    Error,
    "encode-error: U+1092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1093");
    },
    Error,
    "encode-error: U+1093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1094");
    },
    Error,
    "encode-error: U+1094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1095");
    },
    Error,
    "encode-error: U+1095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1096");
    },
    Error,
    "encode-error: U+1096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1097");
    },
    Error,
    "encode-error: U+1097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1098");
    },
    Error,
    "encode-error: U+1098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1099");
    },
    Error,
    "encode-error: U+1099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u109A");
    },
    Error,
    "encode-error: U+109A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u109B");
    },
    Error,
    "encode-error: U+109B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u109C");
    },
    Error,
    "encode-error: U+109C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u109D");
    },
    Error,
    "encode-error: U+109D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u109E");
    },
    Error,
    "encode-error: U+109E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u109F");
    },
    Error,
    "encode-error: U+109F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10A0");
    },
    Error,
    "encode-error: U+10A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10A1");
    },
    Error,
    "encode-error: U+10A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10A2");
    },
    Error,
    "encode-error: U+10A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10A3");
    },
    Error,
    "encode-error: U+10A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10A4");
    },
    Error,
    "encode-error: U+10A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10A5");
    },
    Error,
    "encode-error: U+10A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10A6");
    },
    Error,
    "encode-error: U+10A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10A7");
    },
    Error,
    "encode-error: U+10A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10A8");
    },
    Error,
    "encode-error: U+10A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10A9");
    },
    Error,
    "encode-error: U+10A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10AA");
    },
    Error,
    "encode-error: U+10AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10AB");
    },
    Error,
    "encode-error: U+10AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10AC");
    },
    Error,
    "encode-error: U+10AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10AD");
    },
    Error,
    "encode-error: U+10AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10AE");
    },
    Error,
    "encode-error: U+10AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10AF");
    },
    Error,
    "encode-error: U+10AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10B0");
    },
    Error,
    "encode-error: U+10B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10B1");
    },
    Error,
    "encode-error: U+10B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10B2");
    },
    Error,
    "encode-error: U+10B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10B3");
    },
    Error,
    "encode-error: U+10B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10B4");
    },
    Error,
    "encode-error: U+10B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10B5");
    },
    Error,
    "encode-error: U+10B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10B6");
    },
    Error,
    "encode-error: U+10B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10B7");
    },
    Error,
    "encode-error: U+10B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10B8");
    },
    Error,
    "encode-error: U+10B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10B9");
    },
    Error,
    "encode-error: U+10B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10BA");
    },
    Error,
    "encode-error: U+10BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10BB");
    },
    Error,
    "encode-error: U+10BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10BC");
    },
    Error,
    "encode-error: U+10BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10BD");
    },
    Error,
    "encode-error: U+10BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10BE");
    },
    Error,
    "encode-error: U+10BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10BF");
    },
    Error,
    "encode-error: U+10BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10C0");
    },
    Error,
    "encode-error: U+10C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10C1");
    },
    Error,
    "encode-error: U+10C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10C2");
    },
    Error,
    "encode-error: U+10C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10C3");
    },
    Error,
    "encode-error: U+10C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10C4");
    },
    Error,
    "encode-error: U+10C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10C5");
    },
    Error,
    "encode-error: U+10C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10C6");
    },
    Error,
    "encode-error: U+10C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10C7");
    },
    Error,
    "encode-error: U+10C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10C8");
    },
    Error,
    "encode-error: U+10C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10C9");
    },
    Error,
    "encode-error: U+10C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10CA");
    },
    Error,
    "encode-error: U+10CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10CB");
    },
    Error,
    "encode-error: U+10CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10CC");
    },
    Error,
    "encode-error: U+10CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10CD");
    },
    Error,
    "encode-error: U+10CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10CE");
    },
    Error,
    "encode-error: U+10CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10CF");
    },
    Error,
    "encode-error: U+10CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10D0");
    },
    Error,
    "encode-error: U+10D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10D1");
    },
    Error,
    "encode-error: U+10D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10D2");
    },
    Error,
    "encode-error: U+10D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10D3");
    },
    Error,
    "encode-error: U+10D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10D4");
    },
    Error,
    "encode-error: U+10D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10D5");
    },
    Error,
    "encode-error: U+10D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10D6");
    },
    Error,
    "encode-error: U+10D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10D7");
    },
    Error,
    "encode-error: U+10D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10D8");
    },
    Error,
    "encode-error: U+10D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10D9");
    },
    Error,
    "encode-error: U+10D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10DA");
    },
    Error,
    "encode-error: U+10DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10DB");
    },
    Error,
    "encode-error: U+10DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10DC");
    },
    Error,
    "encode-error: U+10DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10DD");
    },
    Error,
    "encode-error: U+10DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10DE");
    },
    Error,
    "encode-error: U+10DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10DF");
    },
    Error,
    "encode-error: U+10DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10E0");
    },
    Error,
    "encode-error: U+10E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10E1");
    },
    Error,
    "encode-error: U+10E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10E2");
    },
    Error,
    "encode-error: U+10E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10E3");
    },
    Error,
    "encode-error: U+10E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10E4");
    },
    Error,
    "encode-error: U+10E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10E5");
    },
    Error,
    "encode-error: U+10E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10E6");
    },
    Error,
    "encode-error: U+10E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10E7");
    },
    Error,
    "encode-error: U+10E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10E8");
    },
    Error,
    "encode-error: U+10E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10E9");
    },
    Error,
    "encode-error: U+10E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10EA");
    },
    Error,
    "encode-error: U+10EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10EB");
    },
    Error,
    "encode-error: U+10EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10EC");
    },
    Error,
    "encode-error: U+10EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10ED");
    },
    Error,
    "encode-error: U+10ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10EE");
    },
    Error,
    "encode-error: U+10EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10EF");
    },
    Error,
    "encode-error: U+10EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10F0");
    },
    Error,
    "encode-error: U+10F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10F1");
    },
    Error,
    "encode-error: U+10F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10F2");
    },
    Error,
    "encode-error: U+10F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10F3");
    },
    Error,
    "encode-error: U+10F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10F4");
    },
    Error,
    "encode-error: U+10F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10F5");
    },
    Error,
    "encode-error: U+10F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10F6");
    },
    Error,
    "encode-error: U+10F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10F7");
    },
    Error,
    "encode-error: U+10F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10F8");
    },
    Error,
    "encode-error: U+10F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10F9");
    },
    Error,
    "encode-error: U+10F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10FA");
    },
    Error,
    "encode-error: U+10FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10FB");
    },
    Error,
    "encode-error: U+10FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10FC");
    },
    Error,
    "encode-error: U+10FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10FD");
    },
    Error,
    "encode-error: U+10FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10FE");
    },
    Error,
    "encode-error: U+10FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u10FF");
    },
    Error,
    "encode-error: U+10FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1100");
    },
    Error,
    "encode-error: U+1100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1101");
    },
    Error,
    "encode-error: U+1101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1102");
    },
    Error,
    "encode-error: U+1102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1103");
    },
    Error,
    "encode-error: U+1103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1104");
    },
    Error,
    "encode-error: U+1104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1105");
    },
    Error,
    "encode-error: U+1105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1106");
    },
    Error,
    "encode-error: U+1106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1107");
    },
    Error,
    "encode-error: U+1107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1108");
    },
    Error,
    "encode-error: U+1108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1109");
    },
    Error,
    "encode-error: U+1109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u110A");
    },
    Error,
    "encode-error: U+110A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u110B");
    },
    Error,
    "encode-error: U+110B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u110C");
    },
    Error,
    "encode-error: U+110C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u110D");
    },
    Error,
    "encode-error: U+110D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u110E");
    },
    Error,
    "encode-error: U+110E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u110F");
    },
    Error,
    "encode-error: U+110F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1110");
    },
    Error,
    "encode-error: U+1110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1111");
    },
    Error,
    "encode-error: U+1111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1112");
    },
    Error,
    "encode-error: U+1112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1113");
    },
    Error,
    "encode-error: U+1113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1114");
    },
    Error,
    "encode-error: U+1114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1115");
    },
    Error,
    "encode-error: U+1115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1116");
    },
    Error,
    "encode-error: U+1116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1117");
    },
    Error,
    "encode-error: U+1117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1118");
    },
    Error,
    "encode-error: U+1118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1119");
    },
    Error,
    "encode-error: U+1119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u111A");
    },
    Error,
    "encode-error: U+111A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u111B");
    },
    Error,
    "encode-error: U+111B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u111C");
    },
    Error,
    "encode-error: U+111C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u111D");
    },
    Error,
    "encode-error: U+111D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u111E");
    },
    Error,
    "encode-error: U+111E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u111F");
    },
    Error,
    "encode-error: U+111F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1120");
    },
    Error,
    "encode-error: U+1120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1121");
    },
    Error,
    "encode-error: U+1121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1122");
    },
    Error,
    "encode-error: U+1122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1123");
    },
    Error,
    "encode-error: U+1123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1124");
    },
    Error,
    "encode-error: U+1124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1125");
    },
    Error,
    "encode-error: U+1125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1126");
    },
    Error,
    "encode-error: U+1126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1127");
    },
    Error,
    "encode-error: U+1127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1128");
    },
    Error,
    "encode-error: U+1128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1129");
    },
    Error,
    "encode-error: U+1129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u112A");
    },
    Error,
    "encode-error: U+112A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u112B");
    },
    Error,
    "encode-error: U+112B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u112C");
    },
    Error,
    "encode-error: U+112C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u112D");
    },
    Error,
    "encode-error: U+112D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u112E");
    },
    Error,
    "encode-error: U+112E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u112F");
    },
    Error,
    "encode-error: U+112F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1130");
    },
    Error,
    "encode-error: U+1130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1131");
    },
    Error,
    "encode-error: U+1131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1132");
    },
    Error,
    "encode-error: U+1132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1133");
    },
    Error,
    "encode-error: U+1133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1134");
    },
    Error,
    "encode-error: U+1134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1135");
    },
    Error,
    "encode-error: U+1135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1136");
    },
    Error,
    "encode-error: U+1136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1137");
    },
    Error,
    "encode-error: U+1137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1138");
    },
    Error,
    "encode-error: U+1138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1139");
    },
    Error,
    "encode-error: U+1139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u113A");
    },
    Error,
    "encode-error: U+113A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u113B");
    },
    Error,
    "encode-error: U+113B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u113C");
    },
    Error,
    "encode-error: U+113C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u113D");
    },
    Error,
    "encode-error: U+113D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u113E");
    },
    Error,
    "encode-error: U+113E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u113F");
    },
    Error,
    "encode-error: U+113F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1140");
    },
    Error,
    "encode-error: U+1140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1141");
    },
    Error,
    "encode-error: U+1141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1142");
    },
    Error,
    "encode-error: U+1142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1143");
    },
    Error,
    "encode-error: U+1143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1144");
    },
    Error,
    "encode-error: U+1144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1145");
    },
    Error,
    "encode-error: U+1145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1146");
    },
    Error,
    "encode-error: U+1146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1147");
    },
    Error,
    "encode-error: U+1147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1148");
    },
    Error,
    "encode-error: U+1148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1149");
    },
    Error,
    "encode-error: U+1149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u114A");
    },
    Error,
    "encode-error: U+114A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u114B");
    },
    Error,
    "encode-error: U+114B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u114C");
    },
    Error,
    "encode-error: U+114C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u114D");
    },
    Error,
    "encode-error: U+114D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u114E");
    },
    Error,
    "encode-error: U+114E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u114F");
    },
    Error,
    "encode-error: U+114F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1150");
    },
    Error,
    "encode-error: U+1150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1151");
    },
    Error,
    "encode-error: U+1151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1152");
    },
    Error,
    "encode-error: U+1152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1153");
    },
    Error,
    "encode-error: U+1153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1154");
    },
    Error,
    "encode-error: U+1154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1155");
    },
    Error,
    "encode-error: U+1155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1156");
    },
    Error,
    "encode-error: U+1156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1157");
    },
    Error,
    "encode-error: U+1157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1158");
    },
    Error,
    "encode-error: U+1158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1159");
    },
    Error,
    "encode-error: U+1159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u115A");
    },
    Error,
    "encode-error: U+115A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u115B");
    },
    Error,
    "encode-error: U+115B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u115C");
    },
    Error,
    "encode-error: U+115C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u115D");
    },
    Error,
    "encode-error: U+115D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u115E");
    },
    Error,
    "encode-error: U+115E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u115F");
    },
    Error,
    "encode-error: U+115F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1160");
    },
    Error,
    "encode-error: U+1160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1161");
    },
    Error,
    "encode-error: U+1161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1162");
    },
    Error,
    "encode-error: U+1162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1163");
    },
    Error,
    "encode-error: U+1163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1164");
    },
    Error,
    "encode-error: U+1164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1165");
    },
    Error,
    "encode-error: U+1165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1166");
    },
    Error,
    "encode-error: U+1166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1167");
    },
    Error,
    "encode-error: U+1167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1168");
    },
    Error,
    "encode-error: U+1168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1169");
    },
    Error,
    "encode-error: U+1169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u116A");
    },
    Error,
    "encode-error: U+116A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u116B");
    },
    Error,
    "encode-error: U+116B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u116C");
    },
    Error,
    "encode-error: U+116C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u116D");
    },
    Error,
    "encode-error: U+116D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u116E");
    },
    Error,
    "encode-error: U+116E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u116F");
    },
    Error,
    "encode-error: U+116F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1170");
    },
    Error,
    "encode-error: U+1170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1171");
    },
    Error,
    "encode-error: U+1171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1172");
    },
    Error,
    "encode-error: U+1172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1173");
    },
    Error,
    "encode-error: U+1173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1174");
    },
    Error,
    "encode-error: U+1174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1175");
    },
    Error,
    "encode-error: U+1175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1176");
    },
    Error,
    "encode-error: U+1176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1177");
    },
    Error,
    "encode-error: U+1177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1178");
    },
    Error,
    "encode-error: U+1178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1179");
    },
    Error,
    "encode-error: U+1179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u117A");
    },
    Error,
    "encode-error: U+117A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u117B");
    },
    Error,
    "encode-error: U+117B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u117C");
    },
    Error,
    "encode-error: U+117C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u117D");
    },
    Error,
    "encode-error: U+117D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u117E");
    },
    Error,
    "encode-error: U+117E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u117F");
    },
    Error,
    "encode-error: U+117F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1180");
    },
    Error,
    "encode-error: U+1180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1181");
    },
    Error,
    "encode-error: U+1181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1182");
    },
    Error,
    "encode-error: U+1182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1183");
    },
    Error,
    "encode-error: U+1183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1184");
    },
    Error,
    "encode-error: U+1184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1185");
    },
    Error,
    "encode-error: U+1185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1186");
    },
    Error,
    "encode-error: U+1186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1187");
    },
    Error,
    "encode-error: U+1187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1188");
    },
    Error,
    "encode-error: U+1188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1189");
    },
    Error,
    "encode-error: U+1189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u118A");
    },
    Error,
    "encode-error: U+118A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u118B");
    },
    Error,
    "encode-error: U+118B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u118C");
    },
    Error,
    "encode-error: U+118C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u118D");
    },
    Error,
    "encode-error: U+118D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u118E");
    },
    Error,
    "encode-error: U+118E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u118F");
    },
    Error,
    "encode-error: U+118F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1190");
    },
    Error,
    "encode-error: U+1190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1191");
    },
    Error,
    "encode-error: U+1191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1192");
    },
    Error,
    "encode-error: U+1192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1193");
    },
    Error,
    "encode-error: U+1193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1194");
    },
    Error,
    "encode-error: U+1194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1195");
    },
    Error,
    "encode-error: U+1195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1196");
    },
    Error,
    "encode-error: U+1196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1197");
    },
    Error,
    "encode-error: U+1197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1198");
    },
    Error,
    "encode-error: U+1198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1199");
    },
    Error,
    "encode-error: U+1199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u119A");
    },
    Error,
    "encode-error: U+119A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u119B");
    },
    Error,
    "encode-error: U+119B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u119C");
    },
    Error,
    "encode-error: U+119C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u119D");
    },
    Error,
    "encode-error: U+119D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u119E");
    },
    Error,
    "encode-error: U+119E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u119F");
    },
    Error,
    "encode-error: U+119F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11A0");
    },
    Error,
    "encode-error: U+11A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11A1");
    },
    Error,
    "encode-error: U+11A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11A2");
    },
    Error,
    "encode-error: U+11A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11A3");
    },
    Error,
    "encode-error: U+11A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11A4");
    },
    Error,
    "encode-error: U+11A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11A5");
    },
    Error,
    "encode-error: U+11A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11A6");
    },
    Error,
    "encode-error: U+11A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11A7");
    },
    Error,
    "encode-error: U+11A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11A8");
    },
    Error,
    "encode-error: U+11A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11A9");
    },
    Error,
    "encode-error: U+11A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11AA");
    },
    Error,
    "encode-error: U+11AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11AB");
    },
    Error,
    "encode-error: U+11AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11AC");
    },
    Error,
    "encode-error: U+11AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11AD");
    },
    Error,
    "encode-error: U+11AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11AE");
    },
    Error,
    "encode-error: U+11AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11AF");
    },
    Error,
    "encode-error: U+11AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11B0");
    },
    Error,
    "encode-error: U+11B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11B1");
    },
    Error,
    "encode-error: U+11B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11B2");
    },
    Error,
    "encode-error: U+11B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11B3");
    },
    Error,
    "encode-error: U+11B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11B4");
    },
    Error,
    "encode-error: U+11B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11B5");
    },
    Error,
    "encode-error: U+11B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11B6");
    },
    Error,
    "encode-error: U+11B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11B7");
    },
    Error,
    "encode-error: U+11B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11B8");
    },
    Error,
    "encode-error: U+11B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11B9");
    },
    Error,
    "encode-error: U+11B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11BA");
    },
    Error,
    "encode-error: U+11BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11BB");
    },
    Error,
    "encode-error: U+11BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11BC");
    },
    Error,
    "encode-error: U+11BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11BD");
    },
    Error,
    "encode-error: U+11BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11BE");
    },
    Error,
    "encode-error: U+11BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11BF");
    },
    Error,
    "encode-error: U+11BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11C0");
    },
    Error,
    "encode-error: U+11C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11C1");
    },
    Error,
    "encode-error: U+11C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11C2");
    },
    Error,
    "encode-error: U+11C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11C3");
    },
    Error,
    "encode-error: U+11C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11C4");
    },
    Error,
    "encode-error: U+11C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11C5");
    },
    Error,
    "encode-error: U+11C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11C6");
    },
    Error,
    "encode-error: U+11C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11C7");
    },
    Error,
    "encode-error: U+11C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11C8");
    },
    Error,
    "encode-error: U+11C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11C9");
    },
    Error,
    "encode-error: U+11C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11CA");
    },
    Error,
    "encode-error: U+11CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11CB");
    },
    Error,
    "encode-error: U+11CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11CC");
    },
    Error,
    "encode-error: U+11CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11CD");
    },
    Error,
    "encode-error: U+11CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11CE");
    },
    Error,
    "encode-error: U+11CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11CF");
    },
    Error,
    "encode-error: U+11CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11D0");
    },
    Error,
    "encode-error: U+11D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11D1");
    },
    Error,
    "encode-error: U+11D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11D2");
    },
    Error,
    "encode-error: U+11D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11D3");
    },
    Error,
    "encode-error: U+11D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11D4");
    },
    Error,
    "encode-error: U+11D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11D5");
    },
    Error,
    "encode-error: U+11D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11D6");
    },
    Error,
    "encode-error: U+11D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11D7");
    },
    Error,
    "encode-error: U+11D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11D8");
    },
    Error,
    "encode-error: U+11D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11D9");
    },
    Error,
    "encode-error: U+11D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11DA");
    },
    Error,
    "encode-error: U+11DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11DB");
    },
    Error,
    "encode-error: U+11DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11DC");
    },
    Error,
    "encode-error: U+11DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11DD");
    },
    Error,
    "encode-error: U+11DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11DE");
    },
    Error,
    "encode-error: U+11DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11DF");
    },
    Error,
    "encode-error: U+11DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11E0");
    },
    Error,
    "encode-error: U+11E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11E1");
    },
    Error,
    "encode-error: U+11E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11E2");
    },
    Error,
    "encode-error: U+11E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11E3");
    },
    Error,
    "encode-error: U+11E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11E4");
    },
    Error,
    "encode-error: U+11E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11E5");
    },
    Error,
    "encode-error: U+11E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11E6");
    },
    Error,
    "encode-error: U+11E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11E7");
    },
    Error,
    "encode-error: U+11E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11E8");
    },
    Error,
    "encode-error: U+11E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11E9");
    },
    Error,
    "encode-error: U+11E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11EA");
    },
    Error,
    "encode-error: U+11EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11EB");
    },
    Error,
    "encode-error: U+11EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11EC");
    },
    Error,
    "encode-error: U+11EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11ED");
    },
    Error,
    "encode-error: U+11ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11EE");
    },
    Error,
    "encode-error: U+11EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11EF");
    },
    Error,
    "encode-error: U+11EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11F0");
    },
    Error,
    "encode-error: U+11F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11F1");
    },
    Error,
    "encode-error: U+11F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11F2");
    },
    Error,
    "encode-error: U+11F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11F3");
    },
    Error,
    "encode-error: U+11F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11F4");
    },
    Error,
    "encode-error: U+11F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11F5");
    },
    Error,
    "encode-error: U+11F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11F6");
    },
    Error,
    "encode-error: U+11F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11F7");
    },
    Error,
    "encode-error: U+11F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11F8");
    },
    Error,
    "encode-error: U+11F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11F9");
    },
    Error,
    "encode-error: U+11F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11FA");
    },
    Error,
    "encode-error: U+11FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11FB");
    },
    Error,
    "encode-error: U+11FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11FC");
    },
    Error,
    "encode-error: U+11FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11FD");
    },
    Error,
    "encode-error: U+11FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11FE");
    },
    Error,
    "encode-error: U+11FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u11FF");
    },
    Error,
    "encode-error: U+11FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1200");
    },
    Error,
    "encode-error: U+1200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1201");
    },
    Error,
    "encode-error: U+1201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1202");
    },
    Error,
    "encode-error: U+1202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1203");
    },
    Error,
    "encode-error: U+1203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1204");
    },
    Error,
    "encode-error: U+1204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1205");
    },
    Error,
    "encode-error: U+1205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1206");
    },
    Error,
    "encode-error: U+1206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1207");
    },
    Error,
    "encode-error: U+1207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1208");
    },
    Error,
    "encode-error: U+1208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1209");
    },
    Error,
    "encode-error: U+1209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u120A");
    },
    Error,
    "encode-error: U+120A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u120B");
    },
    Error,
    "encode-error: U+120B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u120C");
    },
    Error,
    "encode-error: U+120C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u120D");
    },
    Error,
    "encode-error: U+120D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u120E");
    },
    Error,
    "encode-error: U+120E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u120F");
    },
    Error,
    "encode-error: U+120F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1210");
    },
    Error,
    "encode-error: U+1210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1211");
    },
    Error,
    "encode-error: U+1211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1212");
    },
    Error,
    "encode-error: U+1212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1213");
    },
    Error,
    "encode-error: U+1213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1214");
    },
    Error,
    "encode-error: U+1214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1215");
    },
    Error,
    "encode-error: U+1215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1216");
    },
    Error,
    "encode-error: U+1216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1217");
    },
    Error,
    "encode-error: U+1217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1218");
    },
    Error,
    "encode-error: U+1218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1219");
    },
    Error,
    "encode-error: U+1219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u121A");
    },
    Error,
    "encode-error: U+121A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u121B");
    },
    Error,
    "encode-error: U+121B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u121C");
    },
    Error,
    "encode-error: U+121C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u121D");
    },
    Error,
    "encode-error: U+121D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u121E");
    },
    Error,
    "encode-error: U+121E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u121F");
    },
    Error,
    "encode-error: U+121F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1220");
    },
    Error,
    "encode-error: U+1220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1221");
    },
    Error,
    "encode-error: U+1221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1222");
    },
    Error,
    "encode-error: U+1222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1223");
    },
    Error,
    "encode-error: U+1223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1224");
    },
    Error,
    "encode-error: U+1224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1225");
    },
    Error,
    "encode-error: U+1225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1226");
    },
    Error,
    "encode-error: U+1226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1227");
    },
    Error,
    "encode-error: U+1227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1228");
    },
    Error,
    "encode-error: U+1228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1229");
    },
    Error,
    "encode-error: U+1229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u122A");
    },
    Error,
    "encode-error: U+122A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u122B");
    },
    Error,
    "encode-error: U+122B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u122C");
    },
    Error,
    "encode-error: U+122C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u122D");
    },
    Error,
    "encode-error: U+122D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u122E");
    },
    Error,
    "encode-error: U+122E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u122F");
    },
    Error,
    "encode-error: U+122F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1230");
    },
    Error,
    "encode-error: U+1230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1231");
    },
    Error,
    "encode-error: U+1231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1232");
    },
    Error,
    "encode-error: U+1232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1233");
    },
    Error,
    "encode-error: U+1233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1234");
    },
    Error,
    "encode-error: U+1234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1235");
    },
    Error,
    "encode-error: U+1235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1236");
    },
    Error,
    "encode-error: U+1236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1237");
    },
    Error,
    "encode-error: U+1237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1238");
    },
    Error,
    "encode-error: U+1238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1239");
    },
    Error,
    "encode-error: U+1239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u123A");
    },
    Error,
    "encode-error: U+123A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u123B");
    },
    Error,
    "encode-error: U+123B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u123C");
    },
    Error,
    "encode-error: U+123C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u123D");
    },
    Error,
    "encode-error: U+123D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u123E");
    },
    Error,
    "encode-error: U+123E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u123F");
    },
    Error,
    "encode-error: U+123F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1240");
    },
    Error,
    "encode-error: U+1240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1241");
    },
    Error,
    "encode-error: U+1241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1242");
    },
    Error,
    "encode-error: U+1242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1243");
    },
    Error,
    "encode-error: U+1243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1244");
    },
    Error,
    "encode-error: U+1244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1245");
    },
    Error,
    "encode-error: U+1245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1246");
    },
    Error,
    "encode-error: U+1246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1247");
    },
    Error,
    "encode-error: U+1247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1248");
    },
    Error,
    "encode-error: U+1248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1249");
    },
    Error,
    "encode-error: U+1249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u124A");
    },
    Error,
    "encode-error: U+124A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u124B");
    },
    Error,
    "encode-error: U+124B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u124C");
    },
    Error,
    "encode-error: U+124C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u124D");
    },
    Error,
    "encode-error: U+124D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u124E");
    },
    Error,
    "encode-error: U+124E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u124F");
    },
    Error,
    "encode-error: U+124F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1250");
    },
    Error,
    "encode-error: U+1250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1251");
    },
    Error,
    "encode-error: U+1251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1252");
    },
    Error,
    "encode-error: U+1252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1253");
    },
    Error,
    "encode-error: U+1253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1254");
    },
    Error,
    "encode-error: U+1254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1255");
    },
    Error,
    "encode-error: U+1255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1256");
    },
    Error,
    "encode-error: U+1256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1257");
    },
    Error,
    "encode-error: U+1257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1258");
    },
    Error,
    "encode-error: U+1258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1259");
    },
    Error,
    "encode-error: U+1259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u125A");
    },
    Error,
    "encode-error: U+125A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u125B");
    },
    Error,
    "encode-error: U+125B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u125C");
    },
    Error,
    "encode-error: U+125C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u125D");
    },
    Error,
    "encode-error: U+125D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u125E");
    },
    Error,
    "encode-error: U+125E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u125F");
    },
    Error,
    "encode-error: U+125F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1260");
    },
    Error,
    "encode-error: U+1260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1261");
    },
    Error,
    "encode-error: U+1261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1262");
    },
    Error,
    "encode-error: U+1262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1263");
    },
    Error,
    "encode-error: U+1263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1264");
    },
    Error,
    "encode-error: U+1264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1265");
    },
    Error,
    "encode-error: U+1265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1266");
    },
    Error,
    "encode-error: U+1266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1267");
    },
    Error,
    "encode-error: U+1267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1268");
    },
    Error,
    "encode-error: U+1268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1269");
    },
    Error,
    "encode-error: U+1269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u126A");
    },
    Error,
    "encode-error: U+126A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u126B");
    },
    Error,
    "encode-error: U+126B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u126C");
    },
    Error,
    "encode-error: U+126C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u126D");
    },
    Error,
    "encode-error: U+126D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u126E");
    },
    Error,
    "encode-error: U+126E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u126F");
    },
    Error,
    "encode-error: U+126F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1270");
    },
    Error,
    "encode-error: U+1270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1271");
    },
    Error,
    "encode-error: U+1271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1272");
    },
    Error,
    "encode-error: U+1272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1273");
    },
    Error,
    "encode-error: U+1273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1274");
    },
    Error,
    "encode-error: U+1274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1275");
    },
    Error,
    "encode-error: U+1275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1276");
    },
    Error,
    "encode-error: U+1276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1277");
    },
    Error,
    "encode-error: U+1277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1278");
    },
    Error,
    "encode-error: U+1278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1279");
    },
    Error,
    "encode-error: U+1279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u127A");
    },
    Error,
    "encode-error: U+127A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u127B");
    },
    Error,
    "encode-error: U+127B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u127C");
    },
    Error,
    "encode-error: U+127C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u127D");
    },
    Error,
    "encode-error: U+127D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u127E");
    },
    Error,
    "encode-error: U+127E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u127F");
    },
    Error,
    "encode-error: U+127F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1280");
    },
    Error,
    "encode-error: U+1280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1281");
    },
    Error,
    "encode-error: U+1281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1282");
    },
    Error,
    "encode-error: U+1282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1283");
    },
    Error,
    "encode-error: U+1283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1284");
    },
    Error,
    "encode-error: U+1284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1285");
    },
    Error,
    "encode-error: U+1285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1286");
    },
    Error,
    "encode-error: U+1286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1287");
    },
    Error,
    "encode-error: U+1287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1288");
    },
    Error,
    "encode-error: U+1288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1289");
    },
    Error,
    "encode-error: U+1289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u128A");
    },
    Error,
    "encode-error: U+128A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u128B");
    },
    Error,
    "encode-error: U+128B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u128C");
    },
    Error,
    "encode-error: U+128C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u128D");
    },
    Error,
    "encode-error: U+128D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u128E");
    },
    Error,
    "encode-error: U+128E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u128F");
    },
    Error,
    "encode-error: U+128F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1290");
    },
    Error,
    "encode-error: U+1290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1291");
    },
    Error,
    "encode-error: U+1291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1292");
    },
    Error,
    "encode-error: U+1292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1293");
    },
    Error,
    "encode-error: U+1293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1294");
    },
    Error,
    "encode-error: U+1294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1295");
    },
    Error,
    "encode-error: U+1295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1296");
    },
    Error,
    "encode-error: U+1296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1297");
    },
    Error,
    "encode-error: U+1297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1298");
    },
    Error,
    "encode-error: U+1298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1299");
    },
    Error,
    "encode-error: U+1299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u129A");
    },
    Error,
    "encode-error: U+129A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u129B");
    },
    Error,
    "encode-error: U+129B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u129C");
    },
    Error,
    "encode-error: U+129C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u129D");
    },
    Error,
    "encode-error: U+129D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u129E");
    },
    Error,
    "encode-error: U+129E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u129F");
    },
    Error,
    "encode-error: U+129F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12A0");
    },
    Error,
    "encode-error: U+12A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12A1");
    },
    Error,
    "encode-error: U+12A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12A2");
    },
    Error,
    "encode-error: U+12A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12A3");
    },
    Error,
    "encode-error: U+12A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12A4");
    },
    Error,
    "encode-error: U+12A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12A5");
    },
    Error,
    "encode-error: U+12A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12A6");
    },
    Error,
    "encode-error: U+12A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12A7");
    },
    Error,
    "encode-error: U+12A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12A8");
    },
    Error,
    "encode-error: U+12A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12A9");
    },
    Error,
    "encode-error: U+12A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12AA");
    },
    Error,
    "encode-error: U+12AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12AB");
    },
    Error,
    "encode-error: U+12AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12AC");
    },
    Error,
    "encode-error: U+12AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12AD");
    },
    Error,
    "encode-error: U+12AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12AE");
    },
    Error,
    "encode-error: U+12AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12AF");
    },
    Error,
    "encode-error: U+12AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12B0");
    },
    Error,
    "encode-error: U+12B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12B1");
    },
    Error,
    "encode-error: U+12B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12B2");
    },
    Error,
    "encode-error: U+12B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12B3");
    },
    Error,
    "encode-error: U+12B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12B4");
    },
    Error,
    "encode-error: U+12B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12B5");
    },
    Error,
    "encode-error: U+12B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12B6");
    },
    Error,
    "encode-error: U+12B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12B7");
    },
    Error,
    "encode-error: U+12B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12B8");
    },
    Error,
    "encode-error: U+12B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12B9");
    },
    Error,
    "encode-error: U+12B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12BA");
    },
    Error,
    "encode-error: U+12BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12BB");
    },
    Error,
    "encode-error: U+12BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12BC");
    },
    Error,
    "encode-error: U+12BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12BD");
    },
    Error,
    "encode-error: U+12BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12BE");
    },
    Error,
    "encode-error: U+12BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12BF");
    },
    Error,
    "encode-error: U+12BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12C0");
    },
    Error,
    "encode-error: U+12C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12C1");
    },
    Error,
    "encode-error: U+12C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12C2");
    },
    Error,
    "encode-error: U+12C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12C3");
    },
    Error,
    "encode-error: U+12C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12C4");
    },
    Error,
    "encode-error: U+12C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12C5");
    },
    Error,
    "encode-error: U+12C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12C6");
    },
    Error,
    "encode-error: U+12C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12C7");
    },
    Error,
    "encode-error: U+12C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12C8");
    },
    Error,
    "encode-error: U+12C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12C9");
    },
    Error,
    "encode-error: U+12C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12CA");
    },
    Error,
    "encode-error: U+12CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12CB");
    },
    Error,
    "encode-error: U+12CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12CC");
    },
    Error,
    "encode-error: U+12CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12CD");
    },
    Error,
    "encode-error: U+12CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12CE");
    },
    Error,
    "encode-error: U+12CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12CF");
    },
    Error,
    "encode-error: U+12CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12D0");
    },
    Error,
    "encode-error: U+12D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12D1");
    },
    Error,
    "encode-error: U+12D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12D2");
    },
    Error,
    "encode-error: U+12D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12D3");
    },
    Error,
    "encode-error: U+12D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12D4");
    },
    Error,
    "encode-error: U+12D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12D5");
    },
    Error,
    "encode-error: U+12D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12D6");
    },
    Error,
    "encode-error: U+12D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12D7");
    },
    Error,
    "encode-error: U+12D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12D8");
    },
    Error,
    "encode-error: U+12D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12D9");
    },
    Error,
    "encode-error: U+12D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12DA");
    },
    Error,
    "encode-error: U+12DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12DB");
    },
    Error,
    "encode-error: U+12DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12DC");
    },
    Error,
    "encode-error: U+12DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12DD");
    },
    Error,
    "encode-error: U+12DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12DE");
    },
    Error,
    "encode-error: U+12DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12DF");
    },
    Error,
    "encode-error: U+12DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12E0");
    },
    Error,
    "encode-error: U+12E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12E1");
    },
    Error,
    "encode-error: U+12E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12E2");
    },
    Error,
    "encode-error: U+12E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12E3");
    },
    Error,
    "encode-error: U+12E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12E4");
    },
    Error,
    "encode-error: U+12E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12E5");
    },
    Error,
    "encode-error: U+12E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12E6");
    },
    Error,
    "encode-error: U+12E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12E7");
    },
    Error,
    "encode-error: U+12E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12E8");
    },
    Error,
    "encode-error: U+12E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12E9");
    },
    Error,
    "encode-error: U+12E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12EA");
    },
    Error,
    "encode-error: U+12EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12EB");
    },
    Error,
    "encode-error: U+12EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12EC");
    },
    Error,
    "encode-error: U+12EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12ED");
    },
    Error,
    "encode-error: U+12ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12EE");
    },
    Error,
    "encode-error: U+12EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12EF");
    },
    Error,
    "encode-error: U+12EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12F0");
    },
    Error,
    "encode-error: U+12F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12F1");
    },
    Error,
    "encode-error: U+12F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12F2");
    },
    Error,
    "encode-error: U+12F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12F3");
    },
    Error,
    "encode-error: U+12F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12F4");
    },
    Error,
    "encode-error: U+12F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12F5");
    },
    Error,
    "encode-error: U+12F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12F6");
    },
    Error,
    "encode-error: U+12F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12F7");
    },
    Error,
    "encode-error: U+12F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12F8");
    },
    Error,
    "encode-error: U+12F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12F9");
    },
    Error,
    "encode-error: U+12F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12FA");
    },
    Error,
    "encode-error: U+12FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12FB");
    },
    Error,
    "encode-error: U+12FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12FC");
    },
    Error,
    "encode-error: U+12FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12FD");
    },
    Error,
    "encode-error: U+12FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12FE");
    },
    Error,
    "encode-error: U+12FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u12FF");
    },
    Error,
    "encode-error: U+12FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1300");
    },
    Error,
    "encode-error: U+1300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1301");
    },
    Error,
    "encode-error: U+1301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1302");
    },
    Error,
    "encode-error: U+1302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1303");
    },
    Error,
    "encode-error: U+1303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1304");
    },
    Error,
    "encode-error: U+1304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1305");
    },
    Error,
    "encode-error: U+1305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1306");
    },
    Error,
    "encode-error: U+1306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1307");
    },
    Error,
    "encode-error: U+1307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1308");
    },
    Error,
    "encode-error: U+1308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1309");
    },
    Error,
    "encode-error: U+1309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u130A");
    },
    Error,
    "encode-error: U+130A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u130B");
    },
    Error,
    "encode-error: U+130B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u130C");
    },
    Error,
    "encode-error: U+130C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u130D");
    },
    Error,
    "encode-error: U+130D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u130E");
    },
    Error,
    "encode-error: U+130E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u130F");
    },
    Error,
    "encode-error: U+130F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1310");
    },
    Error,
    "encode-error: U+1310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1311");
    },
    Error,
    "encode-error: U+1311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1312");
    },
    Error,
    "encode-error: U+1312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1313");
    },
    Error,
    "encode-error: U+1313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1314");
    },
    Error,
    "encode-error: U+1314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1315");
    },
    Error,
    "encode-error: U+1315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1316");
    },
    Error,
    "encode-error: U+1316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1317");
    },
    Error,
    "encode-error: U+1317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1318");
    },
    Error,
    "encode-error: U+1318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1319");
    },
    Error,
    "encode-error: U+1319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u131A");
    },
    Error,
    "encode-error: U+131A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u131B");
    },
    Error,
    "encode-error: U+131B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u131C");
    },
    Error,
    "encode-error: U+131C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u131D");
    },
    Error,
    "encode-error: U+131D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u131E");
    },
    Error,
    "encode-error: U+131E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u131F");
    },
    Error,
    "encode-error: U+131F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1320");
    },
    Error,
    "encode-error: U+1320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1321");
    },
    Error,
    "encode-error: U+1321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1322");
    },
    Error,
    "encode-error: U+1322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1323");
    },
    Error,
    "encode-error: U+1323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1324");
    },
    Error,
    "encode-error: U+1324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1325");
    },
    Error,
    "encode-error: U+1325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1326");
    },
    Error,
    "encode-error: U+1326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1327");
    },
    Error,
    "encode-error: U+1327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1328");
    },
    Error,
    "encode-error: U+1328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1329");
    },
    Error,
    "encode-error: U+1329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u132A");
    },
    Error,
    "encode-error: U+132A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u132B");
    },
    Error,
    "encode-error: U+132B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u132C");
    },
    Error,
    "encode-error: U+132C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u132D");
    },
    Error,
    "encode-error: U+132D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u132E");
    },
    Error,
    "encode-error: U+132E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u132F");
    },
    Error,
    "encode-error: U+132F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1330");
    },
    Error,
    "encode-error: U+1330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1331");
    },
    Error,
    "encode-error: U+1331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1332");
    },
    Error,
    "encode-error: U+1332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1333");
    },
    Error,
    "encode-error: U+1333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1334");
    },
    Error,
    "encode-error: U+1334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1335");
    },
    Error,
    "encode-error: U+1335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1336");
    },
    Error,
    "encode-error: U+1336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1337");
    },
    Error,
    "encode-error: U+1337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1338");
    },
    Error,
    "encode-error: U+1338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1339");
    },
    Error,
    "encode-error: U+1339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u133A");
    },
    Error,
    "encode-error: U+133A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u133B");
    },
    Error,
    "encode-error: U+133B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u133C");
    },
    Error,
    "encode-error: U+133C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u133D");
    },
    Error,
    "encode-error: U+133D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u133E");
    },
    Error,
    "encode-error: U+133E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u133F");
    },
    Error,
    "encode-error: U+133F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1340");
    },
    Error,
    "encode-error: U+1340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1341");
    },
    Error,
    "encode-error: U+1341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1342");
    },
    Error,
    "encode-error: U+1342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1343");
    },
    Error,
    "encode-error: U+1343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1344");
    },
    Error,
    "encode-error: U+1344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1345");
    },
    Error,
    "encode-error: U+1345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1346");
    },
    Error,
    "encode-error: U+1346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1347");
    },
    Error,
    "encode-error: U+1347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1348");
    },
    Error,
    "encode-error: U+1348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1349");
    },
    Error,
    "encode-error: U+1349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u134A");
    },
    Error,
    "encode-error: U+134A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u134B");
    },
    Error,
    "encode-error: U+134B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u134C");
    },
    Error,
    "encode-error: U+134C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u134D");
    },
    Error,
    "encode-error: U+134D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u134E");
    },
    Error,
    "encode-error: U+134E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u134F");
    },
    Error,
    "encode-error: U+134F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1350");
    },
    Error,
    "encode-error: U+1350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1351");
    },
    Error,
    "encode-error: U+1351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1352");
    },
    Error,
    "encode-error: U+1352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1353");
    },
    Error,
    "encode-error: U+1353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1354");
    },
    Error,
    "encode-error: U+1354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1355");
    },
    Error,
    "encode-error: U+1355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1356");
    },
    Error,
    "encode-error: U+1356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1357");
    },
    Error,
    "encode-error: U+1357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1358");
    },
    Error,
    "encode-error: U+1358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1359");
    },
    Error,
    "encode-error: U+1359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u135A");
    },
    Error,
    "encode-error: U+135A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u135B");
    },
    Error,
    "encode-error: U+135B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u135C");
    },
    Error,
    "encode-error: U+135C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u135D");
    },
    Error,
    "encode-error: U+135D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u135E");
    },
    Error,
    "encode-error: U+135E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u135F");
    },
    Error,
    "encode-error: U+135F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1360");
    },
    Error,
    "encode-error: U+1360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1361");
    },
    Error,
    "encode-error: U+1361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1362");
    },
    Error,
    "encode-error: U+1362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1363");
    },
    Error,
    "encode-error: U+1363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1364");
    },
    Error,
    "encode-error: U+1364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1365");
    },
    Error,
    "encode-error: U+1365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1366");
    },
    Error,
    "encode-error: U+1366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1367");
    },
    Error,
    "encode-error: U+1367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1368");
    },
    Error,
    "encode-error: U+1368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1369");
    },
    Error,
    "encode-error: U+1369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u136A");
    },
    Error,
    "encode-error: U+136A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u136B");
    },
    Error,
    "encode-error: U+136B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u136C");
    },
    Error,
    "encode-error: U+136C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u136D");
    },
    Error,
    "encode-error: U+136D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u136E");
    },
    Error,
    "encode-error: U+136E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u136F");
    },
    Error,
    "encode-error: U+136F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1370");
    },
    Error,
    "encode-error: U+1370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1371");
    },
    Error,
    "encode-error: U+1371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1372");
    },
    Error,
    "encode-error: U+1372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1373");
    },
    Error,
    "encode-error: U+1373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1374");
    },
    Error,
    "encode-error: U+1374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1375");
    },
    Error,
    "encode-error: U+1375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1376");
    },
    Error,
    "encode-error: U+1376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1377");
    },
    Error,
    "encode-error: U+1377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1378");
    },
    Error,
    "encode-error: U+1378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1379");
    },
    Error,
    "encode-error: U+1379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u137A");
    },
    Error,
    "encode-error: U+137A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u137B");
    },
    Error,
    "encode-error: U+137B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u137C");
    },
    Error,
    "encode-error: U+137C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u137D");
    },
    Error,
    "encode-error: U+137D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u137E");
    },
    Error,
    "encode-error: U+137E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u137F");
    },
    Error,
    "encode-error: U+137F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1380");
    },
    Error,
    "encode-error: U+1380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1381");
    },
    Error,
    "encode-error: U+1381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1382");
    },
    Error,
    "encode-error: U+1382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1383");
    },
    Error,
    "encode-error: U+1383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1384");
    },
    Error,
    "encode-error: U+1384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1385");
    },
    Error,
    "encode-error: U+1385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1386");
    },
    Error,
    "encode-error: U+1386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1387");
    },
    Error,
    "encode-error: U+1387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1388");
    },
    Error,
    "encode-error: U+1388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1389");
    },
    Error,
    "encode-error: U+1389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u138A");
    },
    Error,
    "encode-error: U+138A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u138B");
    },
    Error,
    "encode-error: U+138B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u138C");
    },
    Error,
    "encode-error: U+138C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u138D");
    },
    Error,
    "encode-error: U+138D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u138E");
    },
    Error,
    "encode-error: U+138E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u138F");
    },
    Error,
    "encode-error: U+138F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1390");
    },
    Error,
    "encode-error: U+1390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1391");
    },
    Error,
    "encode-error: U+1391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1392");
    },
    Error,
    "encode-error: U+1392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1393");
    },
    Error,
    "encode-error: U+1393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1394");
    },
    Error,
    "encode-error: U+1394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1395");
    },
    Error,
    "encode-error: U+1395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1396");
    },
    Error,
    "encode-error: U+1396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1397");
    },
    Error,
    "encode-error: U+1397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1398");
    },
    Error,
    "encode-error: U+1398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1399");
    },
    Error,
    "encode-error: U+1399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u139A");
    },
    Error,
    "encode-error: U+139A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u139B");
    },
    Error,
    "encode-error: U+139B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u139C");
    },
    Error,
    "encode-error: U+139C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u139D");
    },
    Error,
    "encode-error: U+139D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u139E");
    },
    Error,
    "encode-error: U+139E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u139F");
    },
    Error,
    "encode-error: U+139F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13A0");
    },
    Error,
    "encode-error: U+13A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13A1");
    },
    Error,
    "encode-error: U+13A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13A2");
    },
    Error,
    "encode-error: U+13A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13A3");
    },
    Error,
    "encode-error: U+13A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13A4");
    },
    Error,
    "encode-error: U+13A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13A5");
    },
    Error,
    "encode-error: U+13A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13A6");
    },
    Error,
    "encode-error: U+13A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13A7");
    },
    Error,
    "encode-error: U+13A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13A8");
    },
    Error,
    "encode-error: U+13A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13A9");
    },
    Error,
    "encode-error: U+13A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13AA");
    },
    Error,
    "encode-error: U+13AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13AB");
    },
    Error,
    "encode-error: U+13AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13AC");
    },
    Error,
    "encode-error: U+13AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13AD");
    },
    Error,
    "encode-error: U+13AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13AE");
    },
    Error,
    "encode-error: U+13AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13AF");
    },
    Error,
    "encode-error: U+13AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13B0");
    },
    Error,
    "encode-error: U+13B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13B1");
    },
    Error,
    "encode-error: U+13B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13B2");
    },
    Error,
    "encode-error: U+13B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13B3");
    },
    Error,
    "encode-error: U+13B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13B4");
    },
    Error,
    "encode-error: U+13B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13B5");
    },
    Error,
    "encode-error: U+13B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13B6");
    },
    Error,
    "encode-error: U+13B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13B7");
    },
    Error,
    "encode-error: U+13B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13B8");
    },
    Error,
    "encode-error: U+13B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13B9");
    },
    Error,
    "encode-error: U+13B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13BA");
    },
    Error,
    "encode-error: U+13BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13BB");
    },
    Error,
    "encode-error: U+13BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13BC");
    },
    Error,
    "encode-error: U+13BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13BD");
    },
    Error,
    "encode-error: U+13BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13BE");
    },
    Error,
    "encode-error: U+13BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13BF");
    },
    Error,
    "encode-error: U+13BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13C0");
    },
    Error,
    "encode-error: U+13C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13C1");
    },
    Error,
    "encode-error: U+13C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13C2");
    },
    Error,
    "encode-error: U+13C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13C3");
    },
    Error,
    "encode-error: U+13C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13C4");
    },
    Error,
    "encode-error: U+13C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13C5");
    },
    Error,
    "encode-error: U+13C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13C6");
    },
    Error,
    "encode-error: U+13C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13C7");
    },
    Error,
    "encode-error: U+13C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13C8");
    },
    Error,
    "encode-error: U+13C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13C9");
    },
    Error,
    "encode-error: U+13C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13CA");
    },
    Error,
    "encode-error: U+13CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13CB");
    },
    Error,
    "encode-error: U+13CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13CC");
    },
    Error,
    "encode-error: U+13CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13CD");
    },
    Error,
    "encode-error: U+13CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13CE");
    },
    Error,
    "encode-error: U+13CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13CF");
    },
    Error,
    "encode-error: U+13CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13D0");
    },
    Error,
    "encode-error: U+13D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13D1");
    },
    Error,
    "encode-error: U+13D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13D2");
    },
    Error,
    "encode-error: U+13D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13D3");
    },
    Error,
    "encode-error: U+13D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13D4");
    },
    Error,
    "encode-error: U+13D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13D5");
    },
    Error,
    "encode-error: U+13D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13D6");
    },
    Error,
    "encode-error: U+13D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13D7");
    },
    Error,
    "encode-error: U+13D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13D8");
    },
    Error,
    "encode-error: U+13D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13D9");
    },
    Error,
    "encode-error: U+13D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13DA");
    },
    Error,
    "encode-error: U+13DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13DB");
    },
    Error,
    "encode-error: U+13DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13DC");
    },
    Error,
    "encode-error: U+13DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13DD");
    },
    Error,
    "encode-error: U+13DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13DE");
    },
    Error,
    "encode-error: U+13DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13DF");
    },
    Error,
    "encode-error: U+13DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13E0");
    },
    Error,
    "encode-error: U+13E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13E1");
    },
    Error,
    "encode-error: U+13E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13E2");
    },
    Error,
    "encode-error: U+13E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13E3");
    },
    Error,
    "encode-error: U+13E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13E4");
    },
    Error,
    "encode-error: U+13E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13E5");
    },
    Error,
    "encode-error: U+13E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13E6");
    },
    Error,
    "encode-error: U+13E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13E7");
    },
    Error,
    "encode-error: U+13E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13E8");
    },
    Error,
    "encode-error: U+13E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13E9");
    },
    Error,
    "encode-error: U+13E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13EA");
    },
    Error,
    "encode-error: U+13EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13EB");
    },
    Error,
    "encode-error: U+13EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13EC");
    },
    Error,
    "encode-error: U+13EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13ED");
    },
    Error,
    "encode-error: U+13ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13EE");
    },
    Error,
    "encode-error: U+13EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13EF");
    },
    Error,
    "encode-error: U+13EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13F0");
    },
    Error,
    "encode-error: U+13F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13F1");
    },
    Error,
    "encode-error: U+13F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13F2");
    },
    Error,
    "encode-error: U+13F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13F3");
    },
    Error,
    "encode-error: U+13F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13F4");
    },
    Error,
    "encode-error: U+13F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13F5");
    },
    Error,
    "encode-error: U+13F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13F6");
    },
    Error,
    "encode-error: U+13F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13F7");
    },
    Error,
    "encode-error: U+13F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13F8");
    },
    Error,
    "encode-error: U+13F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13F9");
    },
    Error,
    "encode-error: U+13F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13FA");
    },
    Error,
    "encode-error: U+13FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13FB");
    },
    Error,
    "encode-error: U+13FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13FC");
    },
    Error,
    "encode-error: U+13FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13FD");
    },
    Error,
    "encode-error: U+13FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13FE");
    },
    Error,
    "encode-error: U+13FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u13FF");
    },
    Error,
    "encode-error: U+13FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1400");
    },
    Error,
    "encode-error: U+1400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1401");
    },
    Error,
    "encode-error: U+1401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1402");
    },
    Error,
    "encode-error: U+1402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1403");
    },
    Error,
    "encode-error: U+1403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1404");
    },
    Error,
    "encode-error: U+1404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1405");
    },
    Error,
    "encode-error: U+1405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1406");
    },
    Error,
    "encode-error: U+1406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1407");
    },
    Error,
    "encode-error: U+1407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1408");
    },
    Error,
    "encode-error: U+1408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1409");
    },
    Error,
    "encode-error: U+1409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u140A");
    },
    Error,
    "encode-error: U+140A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u140B");
    },
    Error,
    "encode-error: U+140B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u140C");
    },
    Error,
    "encode-error: U+140C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u140D");
    },
    Error,
    "encode-error: U+140D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u140E");
    },
    Error,
    "encode-error: U+140E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u140F");
    },
    Error,
    "encode-error: U+140F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1410");
    },
    Error,
    "encode-error: U+1410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1411");
    },
    Error,
    "encode-error: U+1411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1412");
    },
    Error,
    "encode-error: U+1412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1413");
    },
    Error,
    "encode-error: U+1413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1414");
    },
    Error,
    "encode-error: U+1414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1415");
    },
    Error,
    "encode-error: U+1415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1416");
    },
    Error,
    "encode-error: U+1416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1417");
    },
    Error,
    "encode-error: U+1417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1418");
    },
    Error,
    "encode-error: U+1418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1419");
    },
    Error,
    "encode-error: U+1419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u141A");
    },
    Error,
    "encode-error: U+141A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u141B");
    },
    Error,
    "encode-error: U+141B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u141C");
    },
    Error,
    "encode-error: U+141C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u141D");
    },
    Error,
    "encode-error: U+141D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u141E");
    },
    Error,
    "encode-error: U+141E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u141F");
    },
    Error,
    "encode-error: U+141F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1420");
    },
    Error,
    "encode-error: U+1420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1421");
    },
    Error,
    "encode-error: U+1421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1422");
    },
    Error,
    "encode-error: U+1422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1423");
    },
    Error,
    "encode-error: U+1423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1424");
    },
    Error,
    "encode-error: U+1424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1425");
    },
    Error,
    "encode-error: U+1425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1426");
    },
    Error,
    "encode-error: U+1426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1427");
    },
    Error,
    "encode-error: U+1427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1428");
    },
    Error,
    "encode-error: U+1428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1429");
    },
    Error,
    "encode-error: U+1429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u142A");
    },
    Error,
    "encode-error: U+142A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u142B");
    },
    Error,
    "encode-error: U+142B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u142C");
    },
    Error,
    "encode-error: U+142C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u142D");
    },
    Error,
    "encode-error: U+142D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u142E");
    },
    Error,
    "encode-error: U+142E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u142F");
    },
    Error,
    "encode-error: U+142F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1430");
    },
    Error,
    "encode-error: U+1430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1431");
    },
    Error,
    "encode-error: U+1431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1432");
    },
    Error,
    "encode-error: U+1432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1433");
    },
    Error,
    "encode-error: U+1433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1434");
    },
    Error,
    "encode-error: U+1434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1435");
    },
    Error,
    "encode-error: U+1435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1436");
    },
    Error,
    "encode-error: U+1436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1437");
    },
    Error,
    "encode-error: U+1437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1438");
    },
    Error,
    "encode-error: U+1438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1439");
    },
    Error,
    "encode-error: U+1439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u143A");
    },
    Error,
    "encode-error: U+143A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u143B");
    },
    Error,
    "encode-error: U+143B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u143C");
    },
    Error,
    "encode-error: U+143C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u143D");
    },
    Error,
    "encode-error: U+143D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u143E");
    },
    Error,
    "encode-error: U+143E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u143F");
    },
    Error,
    "encode-error: U+143F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1440");
    },
    Error,
    "encode-error: U+1440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1441");
    },
    Error,
    "encode-error: U+1441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1442");
    },
    Error,
    "encode-error: U+1442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1443");
    },
    Error,
    "encode-error: U+1443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1444");
    },
    Error,
    "encode-error: U+1444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1445");
    },
    Error,
    "encode-error: U+1445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1446");
    },
    Error,
    "encode-error: U+1446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1447");
    },
    Error,
    "encode-error: U+1447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1448");
    },
    Error,
    "encode-error: U+1448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1449");
    },
    Error,
    "encode-error: U+1449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u144A");
    },
    Error,
    "encode-error: U+144A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u144B");
    },
    Error,
    "encode-error: U+144B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u144C");
    },
    Error,
    "encode-error: U+144C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u144D");
    },
    Error,
    "encode-error: U+144D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u144E");
    },
    Error,
    "encode-error: U+144E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u144F");
    },
    Error,
    "encode-error: U+144F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1450");
    },
    Error,
    "encode-error: U+1450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1451");
    },
    Error,
    "encode-error: U+1451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1452");
    },
    Error,
    "encode-error: U+1452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1453");
    },
    Error,
    "encode-error: U+1453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1454");
    },
    Error,
    "encode-error: U+1454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1455");
    },
    Error,
    "encode-error: U+1455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1456");
    },
    Error,
    "encode-error: U+1456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1457");
    },
    Error,
    "encode-error: U+1457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1458");
    },
    Error,
    "encode-error: U+1458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1459");
    },
    Error,
    "encode-error: U+1459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u145A");
    },
    Error,
    "encode-error: U+145A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u145B");
    },
    Error,
    "encode-error: U+145B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u145C");
    },
    Error,
    "encode-error: U+145C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u145D");
    },
    Error,
    "encode-error: U+145D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u145E");
    },
    Error,
    "encode-error: U+145E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u145F");
    },
    Error,
    "encode-error: U+145F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1460");
    },
    Error,
    "encode-error: U+1460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1461");
    },
    Error,
    "encode-error: U+1461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1462");
    },
    Error,
    "encode-error: U+1462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1463");
    },
    Error,
    "encode-error: U+1463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1464");
    },
    Error,
    "encode-error: U+1464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1465");
    },
    Error,
    "encode-error: U+1465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1466");
    },
    Error,
    "encode-error: U+1466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1467");
    },
    Error,
    "encode-error: U+1467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1468");
    },
    Error,
    "encode-error: U+1468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1469");
    },
    Error,
    "encode-error: U+1469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u146A");
    },
    Error,
    "encode-error: U+146A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u146B");
    },
    Error,
    "encode-error: U+146B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u146C");
    },
    Error,
    "encode-error: U+146C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u146D");
    },
    Error,
    "encode-error: U+146D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u146E");
    },
    Error,
    "encode-error: U+146E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u146F");
    },
    Error,
    "encode-error: U+146F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1470");
    },
    Error,
    "encode-error: U+1470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1471");
    },
    Error,
    "encode-error: U+1471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1472");
    },
    Error,
    "encode-error: U+1472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1473");
    },
    Error,
    "encode-error: U+1473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1474");
    },
    Error,
    "encode-error: U+1474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1475");
    },
    Error,
    "encode-error: U+1475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1476");
    },
    Error,
    "encode-error: U+1476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1477");
    },
    Error,
    "encode-error: U+1477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1478");
    },
    Error,
    "encode-error: U+1478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1479");
    },
    Error,
    "encode-error: U+1479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u147A");
    },
    Error,
    "encode-error: U+147A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u147B");
    },
    Error,
    "encode-error: U+147B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u147C");
    },
    Error,
    "encode-error: U+147C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u147D");
    },
    Error,
    "encode-error: U+147D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u147E");
    },
    Error,
    "encode-error: U+147E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u147F");
    },
    Error,
    "encode-error: U+147F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1480");
    },
    Error,
    "encode-error: U+1480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1481");
    },
    Error,
    "encode-error: U+1481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1482");
    },
    Error,
    "encode-error: U+1482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1483");
    },
    Error,
    "encode-error: U+1483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1484");
    },
    Error,
    "encode-error: U+1484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1485");
    },
    Error,
    "encode-error: U+1485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1486");
    },
    Error,
    "encode-error: U+1486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1487");
    },
    Error,
    "encode-error: U+1487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1488");
    },
    Error,
    "encode-error: U+1488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1489");
    },
    Error,
    "encode-error: U+1489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u148A");
    },
    Error,
    "encode-error: U+148A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u148B");
    },
    Error,
    "encode-error: U+148B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u148C");
    },
    Error,
    "encode-error: U+148C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u148D");
    },
    Error,
    "encode-error: U+148D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u148E");
    },
    Error,
    "encode-error: U+148E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u148F");
    },
    Error,
    "encode-error: U+148F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1490");
    },
    Error,
    "encode-error: U+1490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1491");
    },
    Error,
    "encode-error: U+1491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1492");
    },
    Error,
    "encode-error: U+1492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1493");
    },
    Error,
    "encode-error: U+1493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1494");
    },
    Error,
    "encode-error: U+1494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1495");
    },
    Error,
    "encode-error: U+1495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1496");
    },
    Error,
    "encode-error: U+1496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1497");
    },
    Error,
    "encode-error: U+1497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1498");
    },
    Error,
    "encode-error: U+1498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1499");
    },
    Error,
    "encode-error: U+1499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u149A");
    },
    Error,
    "encode-error: U+149A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u149B");
    },
    Error,
    "encode-error: U+149B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u149C");
    },
    Error,
    "encode-error: U+149C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u149D");
    },
    Error,
    "encode-error: U+149D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u149E");
    },
    Error,
    "encode-error: U+149E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u149F");
    },
    Error,
    "encode-error: U+149F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14A0");
    },
    Error,
    "encode-error: U+14A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14A1");
    },
    Error,
    "encode-error: U+14A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14A2");
    },
    Error,
    "encode-error: U+14A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14A3");
    },
    Error,
    "encode-error: U+14A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14A4");
    },
    Error,
    "encode-error: U+14A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14A5");
    },
    Error,
    "encode-error: U+14A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14A6");
    },
    Error,
    "encode-error: U+14A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14A7");
    },
    Error,
    "encode-error: U+14A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14A8");
    },
    Error,
    "encode-error: U+14A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14A9");
    },
    Error,
    "encode-error: U+14A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14AA");
    },
    Error,
    "encode-error: U+14AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14AB");
    },
    Error,
    "encode-error: U+14AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14AC");
    },
    Error,
    "encode-error: U+14AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14AD");
    },
    Error,
    "encode-error: U+14AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14AE");
    },
    Error,
    "encode-error: U+14AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14AF");
    },
    Error,
    "encode-error: U+14AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14B0");
    },
    Error,
    "encode-error: U+14B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14B1");
    },
    Error,
    "encode-error: U+14B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14B2");
    },
    Error,
    "encode-error: U+14B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14B3");
    },
    Error,
    "encode-error: U+14B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14B4");
    },
    Error,
    "encode-error: U+14B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14B5");
    },
    Error,
    "encode-error: U+14B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14B6");
    },
    Error,
    "encode-error: U+14B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14B7");
    },
    Error,
    "encode-error: U+14B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14B8");
    },
    Error,
    "encode-error: U+14B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14B9");
    },
    Error,
    "encode-error: U+14B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14BA");
    },
    Error,
    "encode-error: U+14BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14BB");
    },
    Error,
    "encode-error: U+14BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14BC");
    },
    Error,
    "encode-error: U+14BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14BD");
    },
    Error,
    "encode-error: U+14BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14BE");
    },
    Error,
    "encode-error: U+14BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14BF");
    },
    Error,
    "encode-error: U+14BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14C0");
    },
    Error,
    "encode-error: U+14C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14C1");
    },
    Error,
    "encode-error: U+14C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14C2");
    },
    Error,
    "encode-error: U+14C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14C3");
    },
    Error,
    "encode-error: U+14C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14C4");
    },
    Error,
    "encode-error: U+14C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14C5");
    },
    Error,
    "encode-error: U+14C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14C6");
    },
    Error,
    "encode-error: U+14C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14C7");
    },
    Error,
    "encode-error: U+14C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14C8");
    },
    Error,
    "encode-error: U+14C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14C9");
    },
    Error,
    "encode-error: U+14C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14CA");
    },
    Error,
    "encode-error: U+14CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14CB");
    },
    Error,
    "encode-error: U+14CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14CC");
    },
    Error,
    "encode-error: U+14CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14CD");
    },
    Error,
    "encode-error: U+14CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14CE");
    },
    Error,
    "encode-error: U+14CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14CF");
    },
    Error,
    "encode-error: U+14CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14D0");
    },
    Error,
    "encode-error: U+14D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14D1");
    },
    Error,
    "encode-error: U+14D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14D2");
    },
    Error,
    "encode-error: U+14D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14D3");
    },
    Error,
    "encode-error: U+14D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14D4");
    },
    Error,
    "encode-error: U+14D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14D5");
    },
    Error,
    "encode-error: U+14D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14D6");
    },
    Error,
    "encode-error: U+14D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14D7");
    },
    Error,
    "encode-error: U+14D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14D8");
    },
    Error,
    "encode-error: U+14D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14D9");
    },
    Error,
    "encode-error: U+14D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14DA");
    },
    Error,
    "encode-error: U+14DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14DB");
    },
    Error,
    "encode-error: U+14DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14DC");
    },
    Error,
    "encode-error: U+14DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14DD");
    },
    Error,
    "encode-error: U+14DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14DE");
    },
    Error,
    "encode-error: U+14DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14DF");
    },
    Error,
    "encode-error: U+14DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14E0");
    },
    Error,
    "encode-error: U+14E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14E1");
    },
    Error,
    "encode-error: U+14E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14E2");
    },
    Error,
    "encode-error: U+14E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14E3");
    },
    Error,
    "encode-error: U+14E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14E4");
    },
    Error,
    "encode-error: U+14E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14E5");
    },
    Error,
    "encode-error: U+14E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14E6");
    },
    Error,
    "encode-error: U+14E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14E7");
    },
    Error,
    "encode-error: U+14E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14E8");
    },
    Error,
    "encode-error: U+14E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14E9");
    },
    Error,
    "encode-error: U+14E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14EA");
    },
    Error,
    "encode-error: U+14EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14EB");
    },
    Error,
    "encode-error: U+14EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14EC");
    },
    Error,
    "encode-error: U+14EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14ED");
    },
    Error,
    "encode-error: U+14ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14EE");
    },
    Error,
    "encode-error: U+14EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14EF");
    },
    Error,
    "encode-error: U+14EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14F0");
    },
    Error,
    "encode-error: U+14F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14F1");
    },
    Error,
    "encode-error: U+14F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14F2");
    },
    Error,
    "encode-error: U+14F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14F3");
    },
    Error,
    "encode-error: U+14F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14F4");
    },
    Error,
    "encode-error: U+14F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14F5");
    },
    Error,
    "encode-error: U+14F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14F6");
    },
    Error,
    "encode-error: U+14F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14F7");
    },
    Error,
    "encode-error: U+14F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14F8");
    },
    Error,
    "encode-error: U+14F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14F9");
    },
    Error,
    "encode-error: U+14F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14FA");
    },
    Error,
    "encode-error: U+14FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14FB");
    },
    Error,
    "encode-error: U+14FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14FC");
    },
    Error,
    "encode-error: U+14FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14FD");
    },
    Error,
    "encode-error: U+14FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14FE");
    },
    Error,
    "encode-error: U+14FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u14FF");
    },
    Error,
    "encode-error: U+14FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1500");
    },
    Error,
    "encode-error: U+1500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1501");
    },
    Error,
    "encode-error: U+1501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1502");
    },
    Error,
    "encode-error: U+1502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1503");
    },
    Error,
    "encode-error: U+1503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1504");
    },
    Error,
    "encode-error: U+1504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1505");
    },
    Error,
    "encode-error: U+1505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1506");
    },
    Error,
    "encode-error: U+1506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1507");
    },
    Error,
    "encode-error: U+1507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1508");
    },
    Error,
    "encode-error: U+1508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1509");
    },
    Error,
    "encode-error: U+1509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u150A");
    },
    Error,
    "encode-error: U+150A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u150B");
    },
    Error,
    "encode-error: U+150B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u150C");
    },
    Error,
    "encode-error: U+150C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u150D");
    },
    Error,
    "encode-error: U+150D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u150E");
    },
    Error,
    "encode-error: U+150E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u150F");
    },
    Error,
    "encode-error: U+150F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1510");
    },
    Error,
    "encode-error: U+1510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1511");
    },
    Error,
    "encode-error: U+1511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1512");
    },
    Error,
    "encode-error: U+1512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1513");
    },
    Error,
    "encode-error: U+1513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1514");
    },
    Error,
    "encode-error: U+1514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1515");
    },
    Error,
    "encode-error: U+1515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1516");
    },
    Error,
    "encode-error: U+1516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1517");
    },
    Error,
    "encode-error: U+1517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1518");
    },
    Error,
    "encode-error: U+1518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1519");
    },
    Error,
    "encode-error: U+1519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u151A");
    },
    Error,
    "encode-error: U+151A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u151B");
    },
    Error,
    "encode-error: U+151B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u151C");
    },
    Error,
    "encode-error: U+151C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u151D");
    },
    Error,
    "encode-error: U+151D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u151E");
    },
    Error,
    "encode-error: U+151E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u151F");
    },
    Error,
    "encode-error: U+151F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1520");
    },
    Error,
    "encode-error: U+1520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1521");
    },
    Error,
    "encode-error: U+1521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1522");
    },
    Error,
    "encode-error: U+1522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1523");
    },
    Error,
    "encode-error: U+1523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1524");
    },
    Error,
    "encode-error: U+1524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1525");
    },
    Error,
    "encode-error: U+1525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1526");
    },
    Error,
    "encode-error: U+1526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1527");
    },
    Error,
    "encode-error: U+1527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1528");
    },
    Error,
    "encode-error: U+1528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1529");
    },
    Error,
    "encode-error: U+1529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u152A");
    },
    Error,
    "encode-error: U+152A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u152B");
    },
    Error,
    "encode-error: U+152B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u152C");
    },
    Error,
    "encode-error: U+152C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u152D");
    },
    Error,
    "encode-error: U+152D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u152E");
    },
    Error,
    "encode-error: U+152E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u152F");
    },
    Error,
    "encode-error: U+152F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1530");
    },
    Error,
    "encode-error: U+1530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1531");
    },
    Error,
    "encode-error: U+1531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1532");
    },
    Error,
    "encode-error: U+1532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1533");
    },
    Error,
    "encode-error: U+1533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1534");
    },
    Error,
    "encode-error: U+1534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1535");
    },
    Error,
    "encode-error: U+1535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1536");
    },
    Error,
    "encode-error: U+1536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1537");
    },
    Error,
    "encode-error: U+1537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1538");
    },
    Error,
    "encode-error: U+1538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1539");
    },
    Error,
    "encode-error: U+1539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u153A");
    },
    Error,
    "encode-error: U+153A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u153B");
    },
    Error,
    "encode-error: U+153B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u153C");
    },
    Error,
    "encode-error: U+153C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u153D");
    },
    Error,
    "encode-error: U+153D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u153E");
    },
    Error,
    "encode-error: U+153E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u153F");
    },
    Error,
    "encode-error: U+153F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1540");
    },
    Error,
    "encode-error: U+1540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1541");
    },
    Error,
    "encode-error: U+1541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1542");
    },
    Error,
    "encode-error: U+1542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1543");
    },
    Error,
    "encode-error: U+1543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1544");
    },
    Error,
    "encode-error: U+1544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1545");
    },
    Error,
    "encode-error: U+1545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1546");
    },
    Error,
    "encode-error: U+1546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1547");
    },
    Error,
    "encode-error: U+1547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1548");
    },
    Error,
    "encode-error: U+1548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1549");
    },
    Error,
    "encode-error: U+1549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u154A");
    },
    Error,
    "encode-error: U+154A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u154B");
    },
    Error,
    "encode-error: U+154B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u154C");
    },
    Error,
    "encode-error: U+154C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u154D");
    },
    Error,
    "encode-error: U+154D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u154E");
    },
    Error,
    "encode-error: U+154E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u154F");
    },
    Error,
    "encode-error: U+154F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1550");
    },
    Error,
    "encode-error: U+1550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1551");
    },
    Error,
    "encode-error: U+1551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1552");
    },
    Error,
    "encode-error: U+1552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1553");
    },
    Error,
    "encode-error: U+1553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1554");
    },
    Error,
    "encode-error: U+1554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1555");
    },
    Error,
    "encode-error: U+1555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1556");
    },
    Error,
    "encode-error: U+1556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1557");
    },
    Error,
    "encode-error: U+1557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1558");
    },
    Error,
    "encode-error: U+1558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1559");
    },
    Error,
    "encode-error: U+1559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u155A");
    },
    Error,
    "encode-error: U+155A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u155B");
    },
    Error,
    "encode-error: U+155B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u155C");
    },
    Error,
    "encode-error: U+155C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u155D");
    },
    Error,
    "encode-error: U+155D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u155E");
    },
    Error,
    "encode-error: U+155E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u155F");
    },
    Error,
    "encode-error: U+155F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1560");
    },
    Error,
    "encode-error: U+1560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1561");
    },
    Error,
    "encode-error: U+1561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1562");
    },
    Error,
    "encode-error: U+1562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1563");
    },
    Error,
    "encode-error: U+1563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1564");
    },
    Error,
    "encode-error: U+1564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1565");
    },
    Error,
    "encode-error: U+1565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1566");
    },
    Error,
    "encode-error: U+1566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1567");
    },
    Error,
    "encode-error: U+1567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1568");
    },
    Error,
    "encode-error: U+1568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1569");
    },
    Error,
    "encode-error: U+1569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u156A");
    },
    Error,
    "encode-error: U+156A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u156B");
    },
    Error,
    "encode-error: U+156B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u156C");
    },
    Error,
    "encode-error: U+156C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u156D");
    },
    Error,
    "encode-error: U+156D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u156E");
    },
    Error,
    "encode-error: U+156E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u156F");
    },
    Error,
    "encode-error: U+156F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1570");
    },
    Error,
    "encode-error: U+1570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1571");
    },
    Error,
    "encode-error: U+1571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1572");
    },
    Error,
    "encode-error: U+1572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1573");
    },
    Error,
    "encode-error: U+1573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1574");
    },
    Error,
    "encode-error: U+1574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1575");
    },
    Error,
    "encode-error: U+1575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1576");
    },
    Error,
    "encode-error: U+1576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1577");
    },
    Error,
    "encode-error: U+1577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1578");
    },
    Error,
    "encode-error: U+1578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1579");
    },
    Error,
    "encode-error: U+1579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u157A");
    },
    Error,
    "encode-error: U+157A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u157B");
    },
    Error,
    "encode-error: U+157B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u157C");
    },
    Error,
    "encode-error: U+157C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u157D");
    },
    Error,
    "encode-error: U+157D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u157E");
    },
    Error,
    "encode-error: U+157E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u157F");
    },
    Error,
    "encode-error: U+157F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1580");
    },
    Error,
    "encode-error: U+1580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1581");
    },
    Error,
    "encode-error: U+1581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1582");
    },
    Error,
    "encode-error: U+1582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1583");
    },
    Error,
    "encode-error: U+1583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1584");
    },
    Error,
    "encode-error: U+1584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1585");
    },
    Error,
    "encode-error: U+1585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1586");
    },
    Error,
    "encode-error: U+1586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1587");
    },
    Error,
    "encode-error: U+1587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1588");
    },
    Error,
    "encode-error: U+1588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1589");
    },
    Error,
    "encode-error: U+1589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u158A");
    },
    Error,
    "encode-error: U+158A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u158B");
    },
    Error,
    "encode-error: U+158B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u158C");
    },
    Error,
    "encode-error: U+158C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u158D");
    },
    Error,
    "encode-error: U+158D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u158E");
    },
    Error,
    "encode-error: U+158E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u158F");
    },
    Error,
    "encode-error: U+158F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1590");
    },
    Error,
    "encode-error: U+1590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1591");
    },
    Error,
    "encode-error: U+1591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1592");
    },
    Error,
    "encode-error: U+1592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1593");
    },
    Error,
    "encode-error: U+1593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1594");
    },
    Error,
    "encode-error: U+1594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1595");
    },
    Error,
    "encode-error: U+1595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1596");
    },
    Error,
    "encode-error: U+1596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1597");
    },
    Error,
    "encode-error: U+1597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1598");
    },
    Error,
    "encode-error: U+1598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1599");
    },
    Error,
    "encode-error: U+1599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u159A");
    },
    Error,
    "encode-error: U+159A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u159B");
    },
    Error,
    "encode-error: U+159B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u159C");
    },
    Error,
    "encode-error: U+159C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u159D");
    },
    Error,
    "encode-error: U+159D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u159E");
    },
    Error,
    "encode-error: U+159E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u159F");
    },
    Error,
    "encode-error: U+159F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15A0");
    },
    Error,
    "encode-error: U+15A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15A1");
    },
    Error,
    "encode-error: U+15A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15A2");
    },
    Error,
    "encode-error: U+15A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15A3");
    },
    Error,
    "encode-error: U+15A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15A4");
    },
    Error,
    "encode-error: U+15A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15A5");
    },
    Error,
    "encode-error: U+15A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15A6");
    },
    Error,
    "encode-error: U+15A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15A7");
    },
    Error,
    "encode-error: U+15A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15A8");
    },
    Error,
    "encode-error: U+15A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15A9");
    },
    Error,
    "encode-error: U+15A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15AA");
    },
    Error,
    "encode-error: U+15AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15AB");
    },
    Error,
    "encode-error: U+15AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15AC");
    },
    Error,
    "encode-error: U+15AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15AD");
    },
    Error,
    "encode-error: U+15AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15AE");
    },
    Error,
    "encode-error: U+15AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15AF");
    },
    Error,
    "encode-error: U+15AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15B0");
    },
    Error,
    "encode-error: U+15B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15B1");
    },
    Error,
    "encode-error: U+15B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15B2");
    },
    Error,
    "encode-error: U+15B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15B3");
    },
    Error,
    "encode-error: U+15B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15B4");
    },
    Error,
    "encode-error: U+15B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15B5");
    },
    Error,
    "encode-error: U+15B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15B6");
    },
    Error,
    "encode-error: U+15B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15B7");
    },
    Error,
    "encode-error: U+15B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15B8");
    },
    Error,
    "encode-error: U+15B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15B9");
    },
    Error,
    "encode-error: U+15B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15BA");
    },
    Error,
    "encode-error: U+15BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15BB");
    },
    Error,
    "encode-error: U+15BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15BC");
    },
    Error,
    "encode-error: U+15BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15BD");
    },
    Error,
    "encode-error: U+15BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15BE");
    },
    Error,
    "encode-error: U+15BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15BF");
    },
    Error,
    "encode-error: U+15BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15C0");
    },
    Error,
    "encode-error: U+15C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15C1");
    },
    Error,
    "encode-error: U+15C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15C2");
    },
    Error,
    "encode-error: U+15C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15C3");
    },
    Error,
    "encode-error: U+15C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15C4");
    },
    Error,
    "encode-error: U+15C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15C5");
    },
    Error,
    "encode-error: U+15C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15C6");
    },
    Error,
    "encode-error: U+15C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15C7");
    },
    Error,
    "encode-error: U+15C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15C8");
    },
    Error,
    "encode-error: U+15C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15C9");
    },
    Error,
    "encode-error: U+15C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15CA");
    },
    Error,
    "encode-error: U+15CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15CB");
    },
    Error,
    "encode-error: U+15CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15CC");
    },
    Error,
    "encode-error: U+15CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15CD");
    },
    Error,
    "encode-error: U+15CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15CE");
    },
    Error,
    "encode-error: U+15CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15CF");
    },
    Error,
    "encode-error: U+15CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15D0");
    },
    Error,
    "encode-error: U+15D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15D1");
    },
    Error,
    "encode-error: U+15D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15D2");
    },
    Error,
    "encode-error: U+15D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15D3");
    },
    Error,
    "encode-error: U+15D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15D4");
    },
    Error,
    "encode-error: U+15D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15D5");
    },
    Error,
    "encode-error: U+15D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15D6");
    },
    Error,
    "encode-error: U+15D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15D7");
    },
    Error,
    "encode-error: U+15D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15D8");
    },
    Error,
    "encode-error: U+15D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15D9");
    },
    Error,
    "encode-error: U+15D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15DA");
    },
    Error,
    "encode-error: U+15DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15DB");
    },
    Error,
    "encode-error: U+15DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15DC");
    },
    Error,
    "encode-error: U+15DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15DD");
    },
    Error,
    "encode-error: U+15DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15DE");
    },
    Error,
    "encode-error: U+15DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15DF");
    },
    Error,
    "encode-error: U+15DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15E0");
    },
    Error,
    "encode-error: U+15E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15E1");
    },
    Error,
    "encode-error: U+15E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15E2");
    },
    Error,
    "encode-error: U+15E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15E3");
    },
    Error,
    "encode-error: U+15E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15E4");
    },
    Error,
    "encode-error: U+15E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15E5");
    },
    Error,
    "encode-error: U+15E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15E6");
    },
    Error,
    "encode-error: U+15E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15E7");
    },
    Error,
    "encode-error: U+15E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15E8");
    },
    Error,
    "encode-error: U+15E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15E9");
    },
    Error,
    "encode-error: U+15E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15EA");
    },
    Error,
    "encode-error: U+15EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15EB");
    },
    Error,
    "encode-error: U+15EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15EC");
    },
    Error,
    "encode-error: U+15EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15ED");
    },
    Error,
    "encode-error: U+15ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15EE");
    },
    Error,
    "encode-error: U+15EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15EF");
    },
    Error,
    "encode-error: U+15EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15F0");
    },
    Error,
    "encode-error: U+15F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15F1");
    },
    Error,
    "encode-error: U+15F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15F2");
    },
    Error,
    "encode-error: U+15F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15F3");
    },
    Error,
    "encode-error: U+15F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15F4");
    },
    Error,
    "encode-error: U+15F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15F5");
    },
    Error,
    "encode-error: U+15F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15F6");
    },
    Error,
    "encode-error: U+15F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15F7");
    },
    Error,
    "encode-error: U+15F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15F8");
    },
    Error,
    "encode-error: U+15F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15F9");
    },
    Error,
    "encode-error: U+15F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15FA");
    },
    Error,
    "encode-error: U+15FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15FB");
    },
    Error,
    "encode-error: U+15FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15FC");
    },
    Error,
    "encode-error: U+15FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15FD");
    },
    Error,
    "encode-error: U+15FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15FE");
    },
    Error,
    "encode-error: U+15FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u15FF");
    },
    Error,
    "encode-error: U+15FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1600");
    },
    Error,
    "encode-error: U+1600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1601");
    },
    Error,
    "encode-error: U+1601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1602");
    },
    Error,
    "encode-error: U+1602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1603");
    },
    Error,
    "encode-error: U+1603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1604");
    },
    Error,
    "encode-error: U+1604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1605");
    },
    Error,
    "encode-error: U+1605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1606");
    },
    Error,
    "encode-error: U+1606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1607");
    },
    Error,
    "encode-error: U+1607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1608");
    },
    Error,
    "encode-error: U+1608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1609");
    },
    Error,
    "encode-error: U+1609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u160A");
    },
    Error,
    "encode-error: U+160A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u160B");
    },
    Error,
    "encode-error: U+160B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u160C");
    },
    Error,
    "encode-error: U+160C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u160D");
    },
    Error,
    "encode-error: U+160D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u160E");
    },
    Error,
    "encode-error: U+160E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u160F");
    },
    Error,
    "encode-error: U+160F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1610");
    },
    Error,
    "encode-error: U+1610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1611");
    },
    Error,
    "encode-error: U+1611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1612");
    },
    Error,
    "encode-error: U+1612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1613");
    },
    Error,
    "encode-error: U+1613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1614");
    },
    Error,
    "encode-error: U+1614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1615");
    },
    Error,
    "encode-error: U+1615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1616");
    },
    Error,
    "encode-error: U+1616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1617");
    },
    Error,
    "encode-error: U+1617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1618");
    },
    Error,
    "encode-error: U+1618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1619");
    },
    Error,
    "encode-error: U+1619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u161A");
    },
    Error,
    "encode-error: U+161A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u161B");
    },
    Error,
    "encode-error: U+161B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u161C");
    },
    Error,
    "encode-error: U+161C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u161D");
    },
    Error,
    "encode-error: U+161D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u161E");
    },
    Error,
    "encode-error: U+161E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u161F");
    },
    Error,
    "encode-error: U+161F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1620");
    },
    Error,
    "encode-error: U+1620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1621");
    },
    Error,
    "encode-error: U+1621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1622");
    },
    Error,
    "encode-error: U+1622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1623");
    },
    Error,
    "encode-error: U+1623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1624");
    },
    Error,
    "encode-error: U+1624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1625");
    },
    Error,
    "encode-error: U+1625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1626");
    },
    Error,
    "encode-error: U+1626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1627");
    },
    Error,
    "encode-error: U+1627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1628");
    },
    Error,
    "encode-error: U+1628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1629");
    },
    Error,
    "encode-error: U+1629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u162A");
    },
    Error,
    "encode-error: U+162A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u162B");
    },
    Error,
    "encode-error: U+162B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u162C");
    },
    Error,
    "encode-error: U+162C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u162D");
    },
    Error,
    "encode-error: U+162D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u162E");
    },
    Error,
    "encode-error: U+162E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u162F");
    },
    Error,
    "encode-error: U+162F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1630");
    },
    Error,
    "encode-error: U+1630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1631");
    },
    Error,
    "encode-error: U+1631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1632");
    },
    Error,
    "encode-error: U+1632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1633");
    },
    Error,
    "encode-error: U+1633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1634");
    },
    Error,
    "encode-error: U+1634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1635");
    },
    Error,
    "encode-error: U+1635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1636");
    },
    Error,
    "encode-error: U+1636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1637");
    },
    Error,
    "encode-error: U+1637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1638");
    },
    Error,
    "encode-error: U+1638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1639");
    },
    Error,
    "encode-error: U+1639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u163A");
    },
    Error,
    "encode-error: U+163A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u163B");
    },
    Error,
    "encode-error: U+163B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u163C");
    },
    Error,
    "encode-error: U+163C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u163D");
    },
    Error,
    "encode-error: U+163D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u163E");
    },
    Error,
    "encode-error: U+163E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u163F");
    },
    Error,
    "encode-error: U+163F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1640");
    },
    Error,
    "encode-error: U+1640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1641");
    },
    Error,
    "encode-error: U+1641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1642");
    },
    Error,
    "encode-error: U+1642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1643");
    },
    Error,
    "encode-error: U+1643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1644");
    },
    Error,
    "encode-error: U+1644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1645");
    },
    Error,
    "encode-error: U+1645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1646");
    },
    Error,
    "encode-error: U+1646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1647");
    },
    Error,
    "encode-error: U+1647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1648");
    },
    Error,
    "encode-error: U+1648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1649");
    },
    Error,
    "encode-error: U+1649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u164A");
    },
    Error,
    "encode-error: U+164A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u164B");
    },
    Error,
    "encode-error: U+164B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u164C");
    },
    Error,
    "encode-error: U+164C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u164D");
    },
    Error,
    "encode-error: U+164D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u164E");
    },
    Error,
    "encode-error: U+164E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u164F");
    },
    Error,
    "encode-error: U+164F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1650");
    },
    Error,
    "encode-error: U+1650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1651");
    },
    Error,
    "encode-error: U+1651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1652");
    },
    Error,
    "encode-error: U+1652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1653");
    },
    Error,
    "encode-error: U+1653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1654");
    },
    Error,
    "encode-error: U+1654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1655");
    },
    Error,
    "encode-error: U+1655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1656");
    },
    Error,
    "encode-error: U+1656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1657");
    },
    Error,
    "encode-error: U+1657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1658");
    },
    Error,
    "encode-error: U+1658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1659");
    },
    Error,
    "encode-error: U+1659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u165A");
    },
    Error,
    "encode-error: U+165A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u165B");
    },
    Error,
    "encode-error: U+165B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u165C");
    },
    Error,
    "encode-error: U+165C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u165D");
    },
    Error,
    "encode-error: U+165D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u165E");
    },
    Error,
    "encode-error: U+165E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u165F");
    },
    Error,
    "encode-error: U+165F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1660");
    },
    Error,
    "encode-error: U+1660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1661");
    },
    Error,
    "encode-error: U+1661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1662");
    },
    Error,
    "encode-error: U+1662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1663");
    },
    Error,
    "encode-error: U+1663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1664");
    },
    Error,
    "encode-error: U+1664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1665");
    },
    Error,
    "encode-error: U+1665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1666");
    },
    Error,
    "encode-error: U+1666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1667");
    },
    Error,
    "encode-error: U+1667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1668");
    },
    Error,
    "encode-error: U+1668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1669");
    },
    Error,
    "encode-error: U+1669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u166A");
    },
    Error,
    "encode-error: U+166A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u166B");
    },
    Error,
    "encode-error: U+166B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u166C");
    },
    Error,
    "encode-error: U+166C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u166D");
    },
    Error,
    "encode-error: U+166D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u166E");
    },
    Error,
    "encode-error: U+166E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u166F");
    },
    Error,
    "encode-error: U+166F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1670");
    },
    Error,
    "encode-error: U+1670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1671");
    },
    Error,
    "encode-error: U+1671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1672");
    },
    Error,
    "encode-error: U+1672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1673");
    },
    Error,
    "encode-error: U+1673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1674");
    },
    Error,
    "encode-error: U+1674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1675");
    },
    Error,
    "encode-error: U+1675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1676");
    },
    Error,
    "encode-error: U+1676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1677");
    },
    Error,
    "encode-error: U+1677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1678");
    },
    Error,
    "encode-error: U+1678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1679");
    },
    Error,
    "encode-error: U+1679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u167A");
    },
    Error,
    "encode-error: U+167A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u167B");
    },
    Error,
    "encode-error: U+167B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u167C");
    },
    Error,
    "encode-error: U+167C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u167D");
    },
    Error,
    "encode-error: U+167D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u167E");
    },
    Error,
    "encode-error: U+167E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u167F");
    },
    Error,
    "encode-error: U+167F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1680");
    },
    Error,
    "encode-error: U+1680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1681");
    },
    Error,
    "encode-error: U+1681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1682");
    },
    Error,
    "encode-error: U+1682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1683");
    },
    Error,
    "encode-error: U+1683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1684");
    },
    Error,
    "encode-error: U+1684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1685");
    },
    Error,
    "encode-error: U+1685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1686");
    },
    Error,
    "encode-error: U+1686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1687");
    },
    Error,
    "encode-error: U+1687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1688");
    },
    Error,
    "encode-error: U+1688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1689");
    },
    Error,
    "encode-error: U+1689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u168A");
    },
    Error,
    "encode-error: U+168A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u168B");
    },
    Error,
    "encode-error: U+168B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u168C");
    },
    Error,
    "encode-error: U+168C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u168D");
    },
    Error,
    "encode-error: U+168D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u168E");
    },
    Error,
    "encode-error: U+168E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u168F");
    },
    Error,
    "encode-error: U+168F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1690");
    },
    Error,
    "encode-error: U+1690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1691");
    },
    Error,
    "encode-error: U+1691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1692");
    },
    Error,
    "encode-error: U+1692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1693");
    },
    Error,
    "encode-error: U+1693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1694");
    },
    Error,
    "encode-error: U+1694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1695");
    },
    Error,
    "encode-error: U+1695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1696");
    },
    Error,
    "encode-error: U+1696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1697");
    },
    Error,
    "encode-error: U+1697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1698");
    },
    Error,
    "encode-error: U+1698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1699");
    },
    Error,
    "encode-error: U+1699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u169A");
    },
    Error,
    "encode-error: U+169A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u169B");
    },
    Error,
    "encode-error: U+169B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u169C");
    },
    Error,
    "encode-error: U+169C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u169D");
    },
    Error,
    "encode-error: U+169D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u169E");
    },
    Error,
    "encode-error: U+169E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u169F");
    },
    Error,
    "encode-error: U+169F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16A0");
    },
    Error,
    "encode-error: U+16A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16A1");
    },
    Error,
    "encode-error: U+16A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16A2");
    },
    Error,
    "encode-error: U+16A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16A3");
    },
    Error,
    "encode-error: U+16A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16A4");
    },
    Error,
    "encode-error: U+16A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16A5");
    },
    Error,
    "encode-error: U+16A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16A6");
    },
    Error,
    "encode-error: U+16A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16A7");
    },
    Error,
    "encode-error: U+16A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16A8");
    },
    Error,
    "encode-error: U+16A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16A9");
    },
    Error,
    "encode-error: U+16A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16AA");
    },
    Error,
    "encode-error: U+16AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16AB");
    },
    Error,
    "encode-error: U+16AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16AC");
    },
    Error,
    "encode-error: U+16AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16AD");
    },
    Error,
    "encode-error: U+16AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16AE");
    },
    Error,
    "encode-error: U+16AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16AF");
    },
    Error,
    "encode-error: U+16AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16B0");
    },
    Error,
    "encode-error: U+16B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16B1");
    },
    Error,
    "encode-error: U+16B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16B2");
    },
    Error,
    "encode-error: U+16B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16B3");
    },
    Error,
    "encode-error: U+16B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16B4");
    },
    Error,
    "encode-error: U+16B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16B5");
    },
    Error,
    "encode-error: U+16B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16B6");
    },
    Error,
    "encode-error: U+16B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16B7");
    },
    Error,
    "encode-error: U+16B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16B8");
    },
    Error,
    "encode-error: U+16B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16B9");
    },
    Error,
    "encode-error: U+16B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16BA");
    },
    Error,
    "encode-error: U+16BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16BB");
    },
    Error,
    "encode-error: U+16BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16BC");
    },
    Error,
    "encode-error: U+16BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16BD");
    },
    Error,
    "encode-error: U+16BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16BE");
    },
    Error,
    "encode-error: U+16BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16BF");
    },
    Error,
    "encode-error: U+16BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16C0");
    },
    Error,
    "encode-error: U+16C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16C1");
    },
    Error,
    "encode-error: U+16C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16C2");
    },
    Error,
    "encode-error: U+16C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16C3");
    },
    Error,
    "encode-error: U+16C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16C4");
    },
    Error,
    "encode-error: U+16C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16C5");
    },
    Error,
    "encode-error: U+16C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16C6");
    },
    Error,
    "encode-error: U+16C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16C7");
    },
    Error,
    "encode-error: U+16C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16C8");
    },
    Error,
    "encode-error: U+16C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16C9");
    },
    Error,
    "encode-error: U+16C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16CA");
    },
    Error,
    "encode-error: U+16CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16CB");
    },
    Error,
    "encode-error: U+16CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16CC");
    },
    Error,
    "encode-error: U+16CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16CD");
    },
    Error,
    "encode-error: U+16CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16CE");
    },
    Error,
    "encode-error: U+16CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16CF");
    },
    Error,
    "encode-error: U+16CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16D0");
    },
    Error,
    "encode-error: U+16D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16D1");
    },
    Error,
    "encode-error: U+16D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16D2");
    },
    Error,
    "encode-error: U+16D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16D3");
    },
    Error,
    "encode-error: U+16D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16D4");
    },
    Error,
    "encode-error: U+16D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16D5");
    },
    Error,
    "encode-error: U+16D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16D6");
    },
    Error,
    "encode-error: U+16D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16D7");
    },
    Error,
    "encode-error: U+16D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16D8");
    },
    Error,
    "encode-error: U+16D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16D9");
    },
    Error,
    "encode-error: U+16D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16DA");
    },
    Error,
    "encode-error: U+16DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16DB");
    },
    Error,
    "encode-error: U+16DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16DC");
    },
    Error,
    "encode-error: U+16DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16DD");
    },
    Error,
    "encode-error: U+16DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16DE");
    },
    Error,
    "encode-error: U+16DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16DF");
    },
    Error,
    "encode-error: U+16DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16E0");
    },
    Error,
    "encode-error: U+16E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16E1");
    },
    Error,
    "encode-error: U+16E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16E2");
    },
    Error,
    "encode-error: U+16E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16E3");
    },
    Error,
    "encode-error: U+16E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16E4");
    },
    Error,
    "encode-error: U+16E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16E5");
    },
    Error,
    "encode-error: U+16E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16E6");
    },
    Error,
    "encode-error: U+16E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16E7");
    },
    Error,
    "encode-error: U+16E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16E8");
    },
    Error,
    "encode-error: U+16E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16E9");
    },
    Error,
    "encode-error: U+16E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16EA");
    },
    Error,
    "encode-error: U+16EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16EB");
    },
    Error,
    "encode-error: U+16EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16EC");
    },
    Error,
    "encode-error: U+16EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16ED");
    },
    Error,
    "encode-error: U+16ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16EE");
    },
    Error,
    "encode-error: U+16EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16EF");
    },
    Error,
    "encode-error: U+16EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16F0");
    },
    Error,
    "encode-error: U+16F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16F1");
    },
    Error,
    "encode-error: U+16F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16F2");
    },
    Error,
    "encode-error: U+16F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16F3");
    },
    Error,
    "encode-error: U+16F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16F4");
    },
    Error,
    "encode-error: U+16F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16F5");
    },
    Error,
    "encode-error: U+16F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16F6");
    },
    Error,
    "encode-error: U+16F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16F7");
    },
    Error,
    "encode-error: U+16F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16F8");
    },
    Error,
    "encode-error: U+16F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16F9");
    },
    Error,
    "encode-error: U+16F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16FA");
    },
    Error,
    "encode-error: U+16FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16FB");
    },
    Error,
    "encode-error: U+16FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16FC");
    },
    Error,
    "encode-error: U+16FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16FD");
    },
    Error,
    "encode-error: U+16FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16FE");
    },
    Error,
    "encode-error: U+16FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u16FF");
    },
    Error,
    "encode-error: U+16FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1700");
    },
    Error,
    "encode-error: U+1700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1701");
    },
    Error,
    "encode-error: U+1701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1702");
    },
    Error,
    "encode-error: U+1702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1703");
    },
    Error,
    "encode-error: U+1703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1704");
    },
    Error,
    "encode-error: U+1704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1705");
    },
    Error,
    "encode-error: U+1705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1706");
    },
    Error,
    "encode-error: U+1706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1707");
    },
    Error,
    "encode-error: U+1707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1708");
    },
    Error,
    "encode-error: U+1708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1709");
    },
    Error,
    "encode-error: U+1709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u170A");
    },
    Error,
    "encode-error: U+170A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u170B");
    },
    Error,
    "encode-error: U+170B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u170C");
    },
    Error,
    "encode-error: U+170C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u170D");
    },
    Error,
    "encode-error: U+170D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u170E");
    },
    Error,
    "encode-error: U+170E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u170F");
    },
    Error,
    "encode-error: U+170F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1710");
    },
    Error,
    "encode-error: U+1710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1711");
    },
    Error,
    "encode-error: U+1711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1712");
    },
    Error,
    "encode-error: U+1712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1713");
    },
    Error,
    "encode-error: U+1713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1714");
    },
    Error,
    "encode-error: U+1714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1715");
    },
    Error,
    "encode-error: U+1715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1716");
    },
    Error,
    "encode-error: U+1716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1717");
    },
    Error,
    "encode-error: U+1717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1718");
    },
    Error,
    "encode-error: U+1718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1719");
    },
    Error,
    "encode-error: U+1719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u171A");
    },
    Error,
    "encode-error: U+171A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u171B");
    },
    Error,
    "encode-error: U+171B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u171C");
    },
    Error,
    "encode-error: U+171C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u171D");
    },
    Error,
    "encode-error: U+171D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u171E");
    },
    Error,
    "encode-error: U+171E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u171F");
    },
    Error,
    "encode-error: U+171F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1720");
    },
    Error,
    "encode-error: U+1720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1721");
    },
    Error,
    "encode-error: U+1721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1722");
    },
    Error,
    "encode-error: U+1722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1723");
    },
    Error,
    "encode-error: U+1723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1724");
    },
    Error,
    "encode-error: U+1724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1725");
    },
    Error,
    "encode-error: U+1725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1726");
    },
    Error,
    "encode-error: U+1726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1727");
    },
    Error,
    "encode-error: U+1727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1728");
    },
    Error,
    "encode-error: U+1728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1729");
    },
    Error,
    "encode-error: U+1729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u172A");
    },
    Error,
    "encode-error: U+172A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u172B");
    },
    Error,
    "encode-error: U+172B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u172C");
    },
    Error,
    "encode-error: U+172C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u172D");
    },
    Error,
    "encode-error: U+172D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u172E");
    },
    Error,
    "encode-error: U+172E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u172F");
    },
    Error,
    "encode-error: U+172F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1730");
    },
    Error,
    "encode-error: U+1730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1731");
    },
    Error,
    "encode-error: U+1731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1732");
    },
    Error,
    "encode-error: U+1732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1733");
    },
    Error,
    "encode-error: U+1733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1734");
    },
    Error,
    "encode-error: U+1734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1735");
    },
    Error,
    "encode-error: U+1735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1736");
    },
    Error,
    "encode-error: U+1736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1737");
    },
    Error,
    "encode-error: U+1737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1738");
    },
    Error,
    "encode-error: U+1738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1739");
    },
    Error,
    "encode-error: U+1739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u173A");
    },
    Error,
    "encode-error: U+173A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u173B");
    },
    Error,
    "encode-error: U+173B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u173C");
    },
    Error,
    "encode-error: U+173C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u173D");
    },
    Error,
    "encode-error: U+173D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u173E");
    },
    Error,
    "encode-error: U+173E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u173F");
    },
    Error,
    "encode-error: U+173F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1740");
    },
    Error,
    "encode-error: U+1740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1741");
    },
    Error,
    "encode-error: U+1741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1742");
    },
    Error,
    "encode-error: U+1742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1743");
    },
    Error,
    "encode-error: U+1743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1744");
    },
    Error,
    "encode-error: U+1744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1745");
    },
    Error,
    "encode-error: U+1745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1746");
    },
    Error,
    "encode-error: U+1746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1747");
    },
    Error,
    "encode-error: U+1747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1748");
    },
    Error,
    "encode-error: U+1748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1749");
    },
    Error,
    "encode-error: U+1749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u174A");
    },
    Error,
    "encode-error: U+174A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u174B");
    },
    Error,
    "encode-error: U+174B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u174C");
    },
    Error,
    "encode-error: U+174C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u174D");
    },
    Error,
    "encode-error: U+174D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u174E");
    },
    Error,
    "encode-error: U+174E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u174F");
    },
    Error,
    "encode-error: U+174F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1750");
    },
    Error,
    "encode-error: U+1750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1751");
    },
    Error,
    "encode-error: U+1751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1752");
    },
    Error,
    "encode-error: U+1752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1753");
    },
    Error,
    "encode-error: U+1753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1754");
    },
    Error,
    "encode-error: U+1754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1755");
    },
    Error,
    "encode-error: U+1755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1756");
    },
    Error,
    "encode-error: U+1756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1757");
    },
    Error,
    "encode-error: U+1757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1758");
    },
    Error,
    "encode-error: U+1758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1759");
    },
    Error,
    "encode-error: U+1759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u175A");
    },
    Error,
    "encode-error: U+175A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u175B");
    },
    Error,
    "encode-error: U+175B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u175C");
    },
    Error,
    "encode-error: U+175C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u175D");
    },
    Error,
    "encode-error: U+175D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u175E");
    },
    Error,
    "encode-error: U+175E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u175F");
    },
    Error,
    "encode-error: U+175F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1760");
    },
    Error,
    "encode-error: U+1760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1761");
    },
    Error,
    "encode-error: U+1761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1762");
    },
    Error,
    "encode-error: U+1762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1763");
    },
    Error,
    "encode-error: U+1763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1764");
    },
    Error,
    "encode-error: U+1764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1765");
    },
    Error,
    "encode-error: U+1765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1766");
    },
    Error,
    "encode-error: U+1766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1767");
    },
    Error,
    "encode-error: U+1767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1768");
    },
    Error,
    "encode-error: U+1768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1769");
    },
    Error,
    "encode-error: U+1769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u176A");
    },
    Error,
    "encode-error: U+176A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u176B");
    },
    Error,
    "encode-error: U+176B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u176C");
    },
    Error,
    "encode-error: U+176C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u176D");
    },
    Error,
    "encode-error: U+176D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u176E");
    },
    Error,
    "encode-error: U+176E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u176F");
    },
    Error,
    "encode-error: U+176F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1770");
    },
    Error,
    "encode-error: U+1770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1771");
    },
    Error,
    "encode-error: U+1771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1772");
    },
    Error,
    "encode-error: U+1772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1773");
    },
    Error,
    "encode-error: U+1773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1774");
    },
    Error,
    "encode-error: U+1774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1775");
    },
    Error,
    "encode-error: U+1775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1776");
    },
    Error,
    "encode-error: U+1776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1777");
    },
    Error,
    "encode-error: U+1777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1778");
    },
    Error,
    "encode-error: U+1778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1779");
    },
    Error,
    "encode-error: U+1779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u177A");
    },
    Error,
    "encode-error: U+177A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u177B");
    },
    Error,
    "encode-error: U+177B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u177C");
    },
    Error,
    "encode-error: U+177C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u177D");
    },
    Error,
    "encode-error: U+177D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u177E");
    },
    Error,
    "encode-error: U+177E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u177F");
    },
    Error,
    "encode-error: U+177F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1780");
    },
    Error,
    "encode-error: U+1780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1781");
    },
    Error,
    "encode-error: U+1781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1782");
    },
    Error,
    "encode-error: U+1782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1783");
    },
    Error,
    "encode-error: U+1783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1784");
    },
    Error,
    "encode-error: U+1784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1785");
    },
    Error,
    "encode-error: U+1785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1786");
    },
    Error,
    "encode-error: U+1786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1787");
    },
    Error,
    "encode-error: U+1787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1788");
    },
    Error,
    "encode-error: U+1788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1789");
    },
    Error,
    "encode-error: U+1789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u178A");
    },
    Error,
    "encode-error: U+178A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u178B");
    },
    Error,
    "encode-error: U+178B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u178C");
    },
    Error,
    "encode-error: U+178C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u178D");
    },
    Error,
    "encode-error: U+178D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u178E");
    },
    Error,
    "encode-error: U+178E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u178F");
    },
    Error,
    "encode-error: U+178F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1790");
    },
    Error,
    "encode-error: U+1790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1791");
    },
    Error,
    "encode-error: U+1791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1792");
    },
    Error,
    "encode-error: U+1792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1793");
    },
    Error,
    "encode-error: U+1793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1794");
    },
    Error,
    "encode-error: U+1794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1795");
    },
    Error,
    "encode-error: U+1795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1796");
    },
    Error,
    "encode-error: U+1796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1797");
    },
    Error,
    "encode-error: U+1797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1798");
    },
    Error,
    "encode-error: U+1798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1799");
    },
    Error,
    "encode-error: U+1799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u179A");
    },
    Error,
    "encode-error: U+179A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u179B");
    },
    Error,
    "encode-error: U+179B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u179C");
    },
    Error,
    "encode-error: U+179C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u179D");
    },
    Error,
    "encode-error: U+179D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u179E");
    },
    Error,
    "encode-error: U+179E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u179F");
    },
    Error,
    "encode-error: U+179F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17A0");
    },
    Error,
    "encode-error: U+17A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17A1");
    },
    Error,
    "encode-error: U+17A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17A2");
    },
    Error,
    "encode-error: U+17A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17A3");
    },
    Error,
    "encode-error: U+17A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17A4");
    },
    Error,
    "encode-error: U+17A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17A5");
    },
    Error,
    "encode-error: U+17A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17A6");
    },
    Error,
    "encode-error: U+17A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17A7");
    },
    Error,
    "encode-error: U+17A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17A8");
    },
    Error,
    "encode-error: U+17A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17A9");
    },
    Error,
    "encode-error: U+17A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17AA");
    },
    Error,
    "encode-error: U+17AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17AB");
    },
    Error,
    "encode-error: U+17AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17AC");
    },
    Error,
    "encode-error: U+17AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17AD");
    },
    Error,
    "encode-error: U+17AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17AE");
    },
    Error,
    "encode-error: U+17AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17AF");
    },
    Error,
    "encode-error: U+17AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17B0");
    },
    Error,
    "encode-error: U+17B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17B1");
    },
    Error,
    "encode-error: U+17B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17B2");
    },
    Error,
    "encode-error: U+17B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17B3");
    },
    Error,
    "encode-error: U+17B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17B4");
    },
    Error,
    "encode-error: U+17B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17B5");
    },
    Error,
    "encode-error: U+17B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17B6");
    },
    Error,
    "encode-error: U+17B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17B7");
    },
    Error,
    "encode-error: U+17B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17B8");
    },
    Error,
    "encode-error: U+17B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17B9");
    },
    Error,
    "encode-error: U+17B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17BA");
    },
    Error,
    "encode-error: U+17BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17BB");
    },
    Error,
    "encode-error: U+17BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17BC");
    },
    Error,
    "encode-error: U+17BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17BD");
    },
    Error,
    "encode-error: U+17BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17BE");
    },
    Error,
    "encode-error: U+17BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17BF");
    },
    Error,
    "encode-error: U+17BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17C0");
    },
    Error,
    "encode-error: U+17C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17C1");
    },
    Error,
    "encode-error: U+17C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17C2");
    },
    Error,
    "encode-error: U+17C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17C3");
    },
    Error,
    "encode-error: U+17C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17C4");
    },
    Error,
    "encode-error: U+17C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17C5");
    },
    Error,
    "encode-error: U+17C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17C6");
    },
    Error,
    "encode-error: U+17C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17C7");
    },
    Error,
    "encode-error: U+17C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17C8");
    },
    Error,
    "encode-error: U+17C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17C9");
    },
    Error,
    "encode-error: U+17C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17CA");
    },
    Error,
    "encode-error: U+17CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17CB");
    },
    Error,
    "encode-error: U+17CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17CC");
    },
    Error,
    "encode-error: U+17CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17CD");
    },
    Error,
    "encode-error: U+17CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17CE");
    },
    Error,
    "encode-error: U+17CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17CF");
    },
    Error,
    "encode-error: U+17CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17D0");
    },
    Error,
    "encode-error: U+17D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17D1");
    },
    Error,
    "encode-error: U+17D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17D2");
    },
    Error,
    "encode-error: U+17D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17D3");
    },
    Error,
    "encode-error: U+17D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17D4");
    },
    Error,
    "encode-error: U+17D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17D5");
    },
    Error,
    "encode-error: U+17D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17D6");
    },
    Error,
    "encode-error: U+17D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17D7");
    },
    Error,
    "encode-error: U+17D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17D8");
    },
    Error,
    "encode-error: U+17D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17D9");
    },
    Error,
    "encode-error: U+17D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17DA");
    },
    Error,
    "encode-error: U+17DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17DB");
    },
    Error,
    "encode-error: U+17DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17DC");
    },
    Error,
    "encode-error: U+17DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17DD");
    },
    Error,
    "encode-error: U+17DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17DE");
    },
    Error,
    "encode-error: U+17DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17DF");
    },
    Error,
    "encode-error: U+17DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17E0");
    },
    Error,
    "encode-error: U+17E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17E1");
    },
    Error,
    "encode-error: U+17E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17E2");
    },
    Error,
    "encode-error: U+17E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17E3");
    },
    Error,
    "encode-error: U+17E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17E4");
    },
    Error,
    "encode-error: U+17E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17E5");
    },
    Error,
    "encode-error: U+17E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17E6");
    },
    Error,
    "encode-error: U+17E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17E7");
    },
    Error,
    "encode-error: U+17E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17E8");
    },
    Error,
    "encode-error: U+17E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17E9");
    },
    Error,
    "encode-error: U+17E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17EA");
    },
    Error,
    "encode-error: U+17EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17EB");
    },
    Error,
    "encode-error: U+17EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17EC");
    },
    Error,
    "encode-error: U+17EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17ED");
    },
    Error,
    "encode-error: U+17ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17EE");
    },
    Error,
    "encode-error: U+17EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17EF");
    },
    Error,
    "encode-error: U+17EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17F0");
    },
    Error,
    "encode-error: U+17F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17F1");
    },
    Error,
    "encode-error: U+17F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17F2");
    },
    Error,
    "encode-error: U+17F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17F3");
    },
    Error,
    "encode-error: U+17F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17F4");
    },
    Error,
    "encode-error: U+17F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17F5");
    },
    Error,
    "encode-error: U+17F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17F6");
    },
    Error,
    "encode-error: U+17F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17F7");
    },
    Error,
    "encode-error: U+17F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17F8");
    },
    Error,
    "encode-error: U+17F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17F9");
    },
    Error,
    "encode-error: U+17F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17FA");
    },
    Error,
    "encode-error: U+17FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17FB");
    },
    Error,
    "encode-error: U+17FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17FC");
    },
    Error,
    "encode-error: U+17FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17FD");
    },
    Error,
    "encode-error: U+17FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17FE");
    },
    Error,
    "encode-error: U+17FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u17FF");
    },
    Error,
    "encode-error: U+17FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1800");
    },
    Error,
    "encode-error: U+1800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1801");
    },
    Error,
    "encode-error: U+1801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1802");
    },
    Error,
    "encode-error: U+1802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1803");
    },
    Error,
    "encode-error: U+1803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1804");
    },
    Error,
    "encode-error: U+1804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1805");
    },
    Error,
    "encode-error: U+1805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1806");
    },
    Error,
    "encode-error: U+1806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1807");
    },
    Error,
    "encode-error: U+1807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1808");
    },
    Error,
    "encode-error: U+1808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1809");
    },
    Error,
    "encode-error: U+1809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u180A");
    },
    Error,
    "encode-error: U+180A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u180B");
    },
    Error,
    "encode-error: U+180B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u180C");
    },
    Error,
    "encode-error: U+180C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u180D");
    },
    Error,
    "encode-error: U+180D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u180E");
    },
    Error,
    "encode-error: U+180E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u180F");
    },
    Error,
    "encode-error: U+180F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1810");
    },
    Error,
    "encode-error: U+1810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1811");
    },
    Error,
    "encode-error: U+1811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1812");
    },
    Error,
    "encode-error: U+1812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1813");
    },
    Error,
    "encode-error: U+1813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1814");
    },
    Error,
    "encode-error: U+1814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1815");
    },
    Error,
    "encode-error: U+1815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1816");
    },
    Error,
    "encode-error: U+1816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1817");
    },
    Error,
    "encode-error: U+1817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1818");
    },
    Error,
    "encode-error: U+1818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1819");
    },
    Error,
    "encode-error: U+1819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u181A");
    },
    Error,
    "encode-error: U+181A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u181B");
    },
    Error,
    "encode-error: U+181B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u181C");
    },
    Error,
    "encode-error: U+181C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u181D");
    },
    Error,
    "encode-error: U+181D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u181E");
    },
    Error,
    "encode-error: U+181E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u181F");
    },
    Error,
    "encode-error: U+181F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1820");
    },
    Error,
    "encode-error: U+1820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1821");
    },
    Error,
    "encode-error: U+1821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1822");
    },
    Error,
    "encode-error: U+1822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1823");
    },
    Error,
    "encode-error: U+1823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1824");
    },
    Error,
    "encode-error: U+1824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1825");
    },
    Error,
    "encode-error: U+1825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1826");
    },
    Error,
    "encode-error: U+1826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1827");
    },
    Error,
    "encode-error: U+1827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1828");
    },
    Error,
    "encode-error: U+1828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1829");
    },
    Error,
    "encode-error: U+1829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u182A");
    },
    Error,
    "encode-error: U+182A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u182B");
    },
    Error,
    "encode-error: U+182B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u182C");
    },
    Error,
    "encode-error: U+182C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u182D");
    },
    Error,
    "encode-error: U+182D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u182E");
    },
    Error,
    "encode-error: U+182E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u182F");
    },
    Error,
    "encode-error: U+182F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1830");
    },
    Error,
    "encode-error: U+1830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1831");
    },
    Error,
    "encode-error: U+1831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1832");
    },
    Error,
    "encode-error: U+1832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1833");
    },
    Error,
    "encode-error: U+1833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1834");
    },
    Error,
    "encode-error: U+1834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1835");
    },
    Error,
    "encode-error: U+1835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1836");
    },
    Error,
    "encode-error: U+1836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1837");
    },
    Error,
    "encode-error: U+1837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1838");
    },
    Error,
    "encode-error: U+1838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1839");
    },
    Error,
    "encode-error: U+1839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u183A");
    },
    Error,
    "encode-error: U+183A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u183B");
    },
    Error,
    "encode-error: U+183B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u183C");
    },
    Error,
    "encode-error: U+183C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u183D");
    },
    Error,
    "encode-error: U+183D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u183E");
    },
    Error,
    "encode-error: U+183E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u183F");
    },
    Error,
    "encode-error: U+183F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1840");
    },
    Error,
    "encode-error: U+1840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1841");
    },
    Error,
    "encode-error: U+1841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1842");
    },
    Error,
    "encode-error: U+1842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1843");
    },
    Error,
    "encode-error: U+1843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1844");
    },
    Error,
    "encode-error: U+1844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1845");
    },
    Error,
    "encode-error: U+1845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1846");
    },
    Error,
    "encode-error: U+1846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1847");
    },
    Error,
    "encode-error: U+1847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1848");
    },
    Error,
    "encode-error: U+1848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1849");
    },
    Error,
    "encode-error: U+1849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u184A");
    },
    Error,
    "encode-error: U+184A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u184B");
    },
    Error,
    "encode-error: U+184B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u184C");
    },
    Error,
    "encode-error: U+184C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u184D");
    },
    Error,
    "encode-error: U+184D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u184E");
    },
    Error,
    "encode-error: U+184E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u184F");
    },
    Error,
    "encode-error: U+184F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1850");
    },
    Error,
    "encode-error: U+1850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1851");
    },
    Error,
    "encode-error: U+1851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1852");
    },
    Error,
    "encode-error: U+1852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1853");
    },
    Error,
    "encode-error: U+1853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1854");
    },
    Error,
    "encode-error: U+1854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1855");
    },
    Error,
    "encode-error: U+1855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1856");
    },
    Error,
    "encode-error: U+1856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1857");
    },
    Error,
    "encode-error: U+1857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1858");
    },
    Error,
    "encode-error: U+1858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1859");
    },
    Error,
    "encode-error: U+1859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u185A");
    },
    Error,
    "encode-error: U+185A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u185B");
    },
    Error,
    "encode-error: U+185B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u185C");
    },
    Error,
    "encode-error: U+185C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u185D");
    },
    Error,
    "encode-error: U+185D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u185E");
    },
    Error,
    "encode-error: U+185E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u185F");
    },
    Error,
    "encode-error: U+185F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1860");
    },
    Error,
    "encode-error: U+1860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1861");
    },
    Error,
    "encode-error: U+1861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1862");
    },
    Error,
    "encode-error: U+1862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1863");
    },
    Error,
    "encode-error: U+1863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1864");
    },
    Error,
    "encode-error: U+1864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1865");
    },
    Error,
    "encode-error: U+1865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1866");
    },
    Error,
    "encode-error: U+1866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1867");
    },
    Error,
    "encode-error: U+1867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1868");
    },
    Error,
    "encode-error: U+1868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1869");
    },
    Error,
    "encode-error: U+1869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u186A");
    },
    Error,
    "encode-error: U+186A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u186B");
    },
    Error,
    "encode-error: U+186B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u186C");
    },
    Error,
    "encode-error: U+186C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u186D");
    },
    Error,
    "encode-error: U+186D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u186E");
    },
    Error,
    "encode-error: U+186E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u186F");
    },
    Error,
    "encode-error: U+186F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1870");
    },
    Error,
    "encode-error: U+1870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1871");
    },
    Error,
    "encode-error: U+1871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1872");
    },
    Error,
    "encode-error: U+1872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1873");
    },
    Error,
    "encode-error: U+1873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1874");
    },
    Error,
    "encode-error: U+1874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1875");
    },
    Error,
    "encode-error: U+1875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1876");
    },
    Error,
    "encode-error: U+1876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1877");
    },
    Error,
    "encode-error: U+1877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1878");
    },
    Error,
    "encode-error: U+1878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1879");
    },
    Error,
    "encode-error: U+1879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u187A");
    },
    Error,
    "encode-error: U+187A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u187B");
    },
    Error,
    "encode-error: U+187B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u187C");
    },
    Error,
    "encode-error: U+187C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u187D");
    },
    Error,
    "encode-error: U+187D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u187E");
    },
    Error,
    "encode-error: U+187E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u187F");
    },
    Error,
    "encode-error: U+187F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1880");
    },
    Error,
    "encode-error: U+1880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1881");
    },
    Error,
    "encode-error: U+1881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1882");
    },
    Error,
    "encode-error: U+1882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1883");
    },
    Error,
    "encode-error: U+1883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1884");
    },
    Error,
    "encode-error: U+1884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1885");
    },
    Error,
    "encode-error: U+1885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1886");
    },
    Error,
    "encode-error: U+1886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1887");
    },
    Error,
    "encode-error: U+1887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1888");
    },
    Error,
    "encode-error: U+1888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1889");
    },
    Error,
    "encode-error: U+1889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u188A");
    },
    Error,
    "encode-error: U+188A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u188B");
    },
    Error,
    "encode-error: U+188B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u188C");
    },
    Error,
    "encode-error: U+188C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u188D");
    },
    Error,
    "encode-error: U+188D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u188E");
    },
    Error,
    "encode-error: U+188E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u188F");
    },
    Error,
    "encode-error: U+188F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1890");
    },
    Error,
    "encode-error: U+1890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1891");
    },
    Error,
    "encode-error: U+1891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1892");
    },
    Error,
    "encode-error: U+1892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1893");
    },
    Error,
    "encode-error: U+1893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1894");
    },
    Error,
    "encode-error: U+1894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1895");
    },
    Error,
    "encode-error: U+1895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1896");
    },
    Error,
    "encode-error: U+1896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1897");
    },
    Error,
    "encode-error: U+1897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1898");
    },
    Error,
    "encode-error: U+1898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1899");
    },
    Error,
    "encode-error: U+1899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u189A");
    },
    Error,
    "encode-error: U+189A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u189B");
    },
    Error,
    "encode-error: U+189B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u189C");
    },
    Error,
    "encode-error: U+189C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u189D");
    },
    Error,
    "encode-error: U+189D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u189E");
    },
    Error,
    "encode-error: U+189E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u189F");
    },
    Error,
    "encode-error: U+189F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18A0");
    },
    Error,
    "encode-error: U+18A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18A1");
    },
    Error,
    "encode-error: U+18A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18A2");
    },
    Error,
    "encode-error: U+18A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18A3");
    },
    Error,
    "encode-error: U+18A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18A4");
    },
    Error,
    "encode-error: U+18A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18A5");
    },
    Error,
    "encode-error: U+18A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18A6");
    },
    Error,
    "encode-error: U+18A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18A7");
    },
    Error,
    "encode-error: U+18A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18A8");
    },
    Error,
    "encode-error: U+18A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18A9");
    },
    Error,
    "encode-error: U+18A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18AA");
    },
    Error,
    "encode-error: U+18AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18AB");
    },
    Error,
    "encode-error: U+18AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18AC");
    },
    Error,
    "encode-error: U+18AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18AD");
    },
    Error,
    "encode-error: U+18AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18AE");
    },
    Error,
    "encode-error: U+18AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18AF");
    },
    Error,
    "encode-error: U+18AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18B0");
    },
    Error,
    "encode-error: U+18B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18B1");
    },
    Error,
    "encode-error: U+18B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18B2");
    },
    Error,
    "encode-error: U+18B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18B3");
    },
    Error,
    "encode-error: U+18B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18B4");
    },
    Error,
    "encode-error: U+18B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18B5");
    },
    Error,
    "encode-error: U+18B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18B6");
    },
    Error,
    "encode-error: U+18B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18B7");
    },
    Error,
    "encode-error: U+18B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18B8");
    },
    Error,
    "encode-error: U+18B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18B9");
    },
    Error,
    "encode-error: U+18B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18BA");
    },
    Error,
    "encode-error: U+18BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18BB");
    },
    Error,
    "encode-error: U+18BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18BC");
    },
    Error,
    "encode-error: U+18BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18BD");
    },
    Error,
    "encode-error: U+18BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18BE");
    },
    Error,
    "encode-error: U+18BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18BF");
    },
    Error,
    "encode-error: U+18BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18C0");
    },
    Error,
    "encode-error: U+18C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18C1");
    },
    Error,
    "encode-error: U+18C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18C2");
    },
    Error,
    "encode-error: U+18C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18C3");
    },
    Error,
    "encode-error: U+18C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18C4");
    },
    Error,
    "encode-error: U+18C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18C5");
    },
    Error,
    "encode-error: U+18C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18C6");
    },
    Error,
    "encode-error: U+18C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18C7");
    },
    Error,
    "encode-error: U+18C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18C8");
    },
    Error,
    "encode-error: U+18C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18C9");
    },
    Error,
    "encode-error: U+18C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18CA");
    },
    Error,
    "encode-error: U+18CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18CB");
    },
    Error,
    "encode-error: U+18CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18CC");
    },
    Error,
    "encode-error: U+18CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18CD");
    },
    Error,
    "encode-error: U+18CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18CE");
    },
    Error,
    "encode-error: U+18CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18CF");
    },
    Error,
    "encode-error: U+18CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18D0");
    },
    Error,
    "encode-error: U+18D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18D1");
    },
    Error,
    "encode-error: U+18D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18D2");
    },
    Error,
    "encode-error: U+18D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18D3");
    },
    Error,
    "encode-error: U+18D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18D4");
    },
    Error,
    "encode-error: U+18D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18D5");
    },
    Error,
    "encode-error: U+18D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18D6");
    },
    Error,
    "encode-error: U+18D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18D7");
    },
    Error,
    "encode-error: U+18D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18D8");
    },
    Error,
    "encode-error: U+18D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18D9");
    },
    Error,
    "encode-error: U+18D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18DA");
    },
    Error,
    "encode-error: U+18DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18DB");
    },
    Error,
    "encode-error: U+18DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18DC");
    },
    Error,
    "encode-error: U+18DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18DD");
    },
    Error,
    "encode-error: U+18DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18DE");
    },
    Error,
    "encode-error: U+18DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18DF");
    },
    Error,
    "encode-error: U+18DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18E0");
    },
    Error,
    "encode-error: U+18E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18E1");
    },
    Error,
    "encode-error: U+18E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18E2");
    },
    Error,
    "encode-error: U+18E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18E3");
    },
    Error,
    "encode-error: U+18E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18E4");
    },
    Error,
    "encode-error: U+18E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18E5");
    },
    Error,
    "encode-error: U+18E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18E6");
    },
    Error,
    "encode-error: U+18E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18E7");
    },
    Error,
    "encode-error: U+18E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18E8");
    },
    Error,
    "encode-error: U+18E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18E9");
    },
    Error,
    "encode-error: U+18E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18EA");
    },
    Error,
    "encode-error: U+18EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18EB");
    },
    Error,
    "encode-error: U+18EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18EC");
    },
    Error,
    "encode-error: U+18EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18ED");
    },
    Error,
    "encode-error: U+18ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18EE");
    },
    Error,
    "encode-error: U+18EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18EF");
    },
    Error,
    "encode-error: U+18EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18F0");
    },
    Error,
    "encode-error: U+18F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18F1");
    },
    Error,
    "encode-error: U+18F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18F2");
    },
    Error,
    "encode-error: U+18F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18F3");
    },
    Error,
    "encode-error: U+18F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18F4");
    },
    Error,
    "encode-error: U+18F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18F5");
    },
    Error,
    "encode-error: U+18F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18F6");
    },
    Error,
    "encode-error: U+18F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18F7");
    },
    Error,
    "encode-error: U+18F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18F8");
    },
    Error,
    "encode-error: U+18F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18F9");
    },
    Error,
    "encode-error: U+18F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18FA");
    },
    Error,
    "encode-error: U+18FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18FB");
    },
    Error,
    "encode-error: U+18FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18FC");
    },
    Error,
    "encode-error: U+18FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18FD");
    },
    Error,
    "encode-error: U+18FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18FE");
    },
    Error,
    "encode-error: U+18FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u18FF");
    },
    Error,
    "encode-error: U+18FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1900");
    },
    Error,
    "encode-error: U+1900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1901");
    },
    Error,
    "encode-error: U+1901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1902");
    },
    Error,
    "encode-error: U+1902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1903");
    },
    Error,
    "encode-error: U+1903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1904");
    },
    Error,
    "encode-error: U+1904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1905");
    },
    Error,
    "encode-error: U+1905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1906");
    },
    Error,
    "encode-error: U+1906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1907");
    },
    Error,
    "encode-error: U+1907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1908");
    },
    Error,
    "encode-error: U+1908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1909");
    },
    Error,
    "encode-error: U+1909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u190A");
    },
    Error,
    "encode-error: U+190A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u190B");
    },
    Error,
    "encode-error: U+190B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u190C");
    },
    Error,
    "encode-error: U+190C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u190D");
    },
    Error,
    "encode-error: U+190D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u190E");
    },
    Error,
    "encode-error: U+190E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u190F");
    },
    Error,
    "encode-error: U+190F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1910");
    },
    Error,
    "encode-error: U+1910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1911");
    },
    Error,
    "encode-error: U+1911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1912");
    },
    Error,
    "encode-error: U+1912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1913");
    },
    Error,
    "encode-error: U+1913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1914");
    },
    Error,
    "encode-error: U+1914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1915");
    },
    Error,
    "encode-error: U+1915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1916");
    },
    Error,
    "encode-error: U+1916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1917");
    },
    Error,
    "encode-error: U+1917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1918");
    },
    Error,
    "encode-error: U+1918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1919");
    },
    Error,
    "encode-error: U+1919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u191A");
    },
    Error,
    "encode-error: U+191A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u191B");
    },
    Error,
    "encode-error: U+191B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u191C");
    },
    Error,
    "encode-error: U+191C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u191D");
    },
    Error,
    "encode-error: U+191D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u191E");
    },
    Error,
    "encode-error: U+191E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u191F");
    },
    Error,
    "encode-error: U+191F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1920");
    },
    Error,
    "encode-error: U+1920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1921");
    },
    Error,
    "encode-error: U+1921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1922");
    },
    Error,
    "encode-error: U+1922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1923");
    },
    Error,
    "encode-error: U+1923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1924");
    },
    Error,
    "encode-error: U+1924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1925");
    },
    Error,
    "encode-error: U+1925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1926");
    },
    Error,
    "encode-error: U+1926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1927");
    },
    Error,
    "encode-error: U+1927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1928");
    },
    Error,
    "encode-error: U+1928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1929");
    },
    Error,
    "encode-error: U+1929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u192A");
    },
    Error,
    "encode-error: U+192A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u192B");
    },
    Error,
    "encode-error: U+192B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u192C");
    },
    Error,
    "encode-error: U+192C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u192D");
    },
    Error,
    "encode-error: U+192D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u192E");
    },
    Error,
    "encode-error: U+192E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u192F");
    },
    Error,
    "encode-error: U+192F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1930");
    },
    Error,
    "encode-error: U+1930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1931");
    },
    Error,
    "encode-error: U+1931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1932");
    },
    Error,
    "encode-error: U+1932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1933");
    },
    Error,
    "encode-error: U+1933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1934");
    },
    Error,
    "encode-error: U+1934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1935");
    },
    Error,
    "encode-error: U+1935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1936");
    },
    Error,
    "encode-error: U+1936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1937");
    },
    Error,
    "encode-error: U+1937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1938");
    },
    Error,
    "encode-error: U+1938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1939");
    },
    Error,
    "encode-error: U+1939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u193A");
    },
    Error,
    "encode-error: U+193A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u193B");
    },
    Error,
    "encode-error: U+193B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u193C");
    },
    Error,
    "encode-error: U+193C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u193D");
    },
    Error,
    "encode-error: U+193D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u193E");
    },
    Error,
    "encode-error: U+193E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u193F");
    },
    Error,
    "encode-error: U+193F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1940");
    },
    Error,
    "encode-error: U+1940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1941");
    },
    Error,
    "encode-error: U+1941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1942");
    },
    Error,
    "encode-error: U+1942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1943");
    },
    Error,
    "encode-error: U+1943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1944");
    },
    Error,
    "encode-error: U+1944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1945");
    },
    Error,
    "encode-error: U+1945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1946");
    },
    Error,
    "encode-error: U+1946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1947");
    },
    Error,
    "encode-error: U+1947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1948");
    },
    Error,
    "encode-error: U+1948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1949");
    },
    Error,
    "encode-error: U+1949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u194A");
    },
    Error,
    "encode-error: U+194A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u194B");
    },
    Error,
    "encode-error: U+194B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u194C");
    },
    Error,
    "encode-error: U+194C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u194D");
    },
    Error,
    "encode-error: U+194D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u194E");
    },
    Error,
    "encode-error: U+194E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u194F");
    },
    Error,
    "encode-error: U+194F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1950");
    },
    Error,
    "encode-error: U+1950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1951");
    },
    Error,
    "encode-error: U+1951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1952");
    },
    Error,
    "encode-error: U+1952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1953");
    },
    Error,
    "encode-error: U+1953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1954");
    },
    Error,
    "encode-error: U+1954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1955");
    },
    Error,
    "encode-error: U+1955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1956");
    },
    Error,
    "encode-error: U+1956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1957");
    },
    Error,
    "encode-error: U+1957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1958");
    },
    Error,
    "encode-error: U+1958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1959");
    },
    Error,
    "encode-error: U+1959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u195A");
    },
    Error,
    "encode-error: U+195A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u195B");
    },
    Error,
    "encode-error: U+195B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u195C");
    },
    Error,
    "encode-error: U+195C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u195D");
    },
    Error,
    "encode-error: U+195D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u195E");
    },
    Error,
    "encode-error: U+195E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u195F");
    },
    Error,
    "encode-error: U+195F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1960");
    },
    Error,
    "encode-error: U+1960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1961");
    },
    Error,
    "encode-error: U+1961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1962");
    },
    Error,
    "encode-error: U+1962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1963");
    },
    Error,
    "encode-error: U+1963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1964");
    },
    Error,
    "encode-error: U+1964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1965");
    },
    Error,
    "encode-error: U+1965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1966");
    },
    Error,
    "encode-error: U+1966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1967");
    },
    Error,
    "encode-error: U+1967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1968");
    },
    Error,
    "encode-error: U+1968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1969");
    },
    Error,
    "encode-error: U+1969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u196A");
    },
    Error,
    "encode-error: U+196A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u196B");
    },
    Error,
    "encode-error: U+196B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u196C");
    },
    Error,
    "encode-error: U+196C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u196D");
    },
    Error,
    "encode-error: U+196D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u196E");
    },
    Error,
    "encode-error: U+196E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u196F");
    },
    Error,
    "encode-error: U+196F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1970");
    },
    Error,
    "encode-error: U+1970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1971");
    },
    Error,
    "encode-error: U+1971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1972");
    },
    Error,
    "encode-error: U+1972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1973");
    },
    Error,
    "encode-error: U+1973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1974");
    },
    Error,
    "encode-error: U+1974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1975");
    },
    Error,
    "encode-error: U+1975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1976");
    },
    Error,
    "encode-error: U+1976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1977");
    },
    Error,
    "encode-error: U+1977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1978");
    },
    Error,
    "encode-error: U+1978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1979");
    },
    Error,
    "encode-error: U+1979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u197A");
    },
    Error,
    "encode-error: U+197A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u197B");
    },
    Error,
    "encode-error: U+197B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u197C");
    },
    Error,
    "encode-error: U+197C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u197D");
    },
    Error,
    "encode-error: U+197D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u197E");
    },
    Error,
    "encode-error: U+197E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u197F");
    },
    Error,
    "encode-error: U+197F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1980");
    },
    Error,
    "encode-error: U+1980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1981");
    },
    Error,
    "encode-error: U+1981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1982");
    },
    Error,
    "encode-error: U+1982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1983");
    },
    Error,
    "encode-error: U+1983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1984");
    },
    Error,
    "encode-error: U+1984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1985");
    },
    Error,
    "encode-error: U+1985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1986");
    },
    Error,
    "encode-error: U+1986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1987");
    },
    Error,
    "encode-error: U+1987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1988");
    },
    Error,
    "encode-error: U+1988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1989");
    },
    Error,
    "encode-error: U+1989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u198A");
    },
    Error,
    "encode-error: U+198A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u198B");
    },
    Error,
    "encode-error: U+198B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u198C");
    },
    Error,
    "encode-error: U+198C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u198D");
    },
    Error,
    "encode-error: U+198D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u198E");
    },
    Error,
    "encode-error: U+198E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u198F");
    },
    Error,
    "encode-error: U+198F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1990");
    },
    Error,
    "encode-error: U+1990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1991");
    },
    Error,
    "encode-error: U+1991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1992");
    },
    Error,
    "encode-error: U+1992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1993");
    },
    Error,
    "encode-error: U+1993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1994");
    },
    Error,
    "encode-error: U+1994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1995");
    },
    Error,
    "encode-error: U+1995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1996");
    },
    Error,
    "encode-error: U+1996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1997");
    },
    Error,
    "encode-error: U+1997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1998");
    },
    Error,
    "encode-error: U+1998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1999");
    },
    Error,
    "encode-error: U+1999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u199A");
    },
    Error,
    "encode-error: U+199A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u199B");
    },
    Error,
    "encode-error: U+199B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u199C");
    },
    Error,
    "encode-error: U+199C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u199D");
    },
    Error,
    "encode-error: U+199D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u199E");
    },
    Error,
    "encode-error: U+199E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u199F");
    },
    Error,
    "encode-error: U+199F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19A0");
    },
    Error,
    "encode-error: U+19A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19A1");
    },
    Error,
    "encode-error: U+19A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19A2");
    },
    Error,
    "encode-error: U+19A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19A3");
    },
    Error,
    "encode-error: U+19A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19A4");
    },
    Error,
    "encode-error: U+19A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19A5");
    },
    Error,
    "encode-error: U+19A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19A6");
    },
    Error,
    "encode-error: U+19A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19A7");
    },
    Error,
    "encode-error: U+19A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19A8");
    },
    Error,
    "encode-error: U+19A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19A9");
    },
    Error,
    "encode-error: U+19A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19AA");
    },
    Error,
    "encode-error: U+19AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19AB");
    },
    Error,
    "encode-error: U+19AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19AC");
    },
    Error,
    "encode-error: U+19AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19AD");
    },
    Error,
    "encode-error: U+19AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19AE");
    },
    Error,
    "encode-error: U+19AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19AF");
    },
    Error,
    "encode-error: U+19AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19B0");
    },
    Error,
    "encode-error: U+19B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19B1");
    },
    Error,
    "encode-error: U+19B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19B2");
    },
    Error,
    "encode-error: U+19B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19B3");
    },
    Error,
    "encode-error: U+19B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19B4");
    },
    Error,
    "encode-error: U+19B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19B5");
    },
    Error,
    "encode-error: U+19B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19B6");
    },
    Error,
    "encode-error: U+19B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19B7");
    },
    Error,
    "encode-error: U+19B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19B8");
    },
    Error,
    "encode-error: U+19B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19B9");
    },
    Error,
    "encode-error: U+19B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19BA");
    },
    Error,
    "encode-error: U+19BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19BB");
    },
    Error,
    "encode-error: U+19BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19BC");
    },
    Error,
    "encode-error: U+19BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19BD");
    },
    Error,
    "encode-error: U+19BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19BE");
    },
    Error,
    "encode-error: U+19BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19BF");
    },
    Error,
    "encode-error: U+19BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19C0");
    },
    Error,
    "encode-error: U+19C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19C1");
    },
    Error,
    "encode-error: U+19C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19C2");
    },
    Error,
    "encode-error: U+19C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19C3");
    },
    Error,
    "encode-error: U+19C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19C4");
    },
    Error,
    "encode-error: U+19C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19C5");
    },
    Error,
    "encode-error: U+19C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19C6");
    },
    Error,
    "encode-error: U+19C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19C7");
    },
    Error,
    "encode-error: U+19C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19C8");
    },
    Error,
    "encode-error: U+19C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19C9");
    },
    Error,
    "encode-error: U+19C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19CA");
    },
    Error,
    "encode-error: U+19CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19CB");
    },
    Error,
    "encode-error: U+19CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19CC");
    },
    Error,
    "encode-error: U+19CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19CD");
    },
    Error,
    "encode-error: U+19CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19CE");
    },
    Error,
    "encode-error: U+19CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19CF");
    },
    Error,
    "encode-error: U+19CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19D0");
    },
    Error,
    "encode-error: U+19D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19D1");
    },
    Error,
    "encode-error: U+19D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19D2");
    },
    Error,
    "encode-error: U+19D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19D3");
    },
    Error,
    "encode-error: U+19D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19D4");
    },
    Error,
    "encode-error: U+19D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19D5");
    },
    Error,
    "encode-error: U+19D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19D6");
    },
    Error,
    "encode-error: U+19D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19D7");
    },
    Error,
    "encode-error: U+19D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19D8");
    },
    Error,
    "encode-error: U+19D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19D9");
    },
    Error,
    "encode-error: U+19D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19DA");
    },
    Error,
    "encode-error: U+19DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19DB");
    },
    Error,
    "encode-error: U+19DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19DC");
    },
    Error,
    "encode-error: U+19DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19DD");
    },
    Error,
    "encode-error: U+19DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19DE");
    },
    Error,
    "encode-error: U+19DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19DF");
    },
    Error,
    "encode-error: U+19DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19E0");
    },
    Error,
    "encode-error: U+19E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19E1");
    },
    Error,
    "encode-error: U+19E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19E2");
    },
    Error,
    "encode-error: U+19E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19E3");
    },
    Error,
    "encode-error: U+19E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19E4");
    },
    Error,
    "encode-error: U+19E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19E5");
    },
    Error,
    "encode-error: U+19E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19E6");
    },
    Error,
    "encode-error: U+19E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19E7");
    },
    Error,
    "encode-error: U+19E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19E8");
    },
    Error,
    "encode-error: U+19E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19E9");
    },
    Error,
    "encode-error: U+19E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19EA");
    },
    Error,
    "encode-error: U+19EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19EB");
    },
    Error,
    "encode-error: U+19EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19EC");
    },
    Error,
    "encode-error: U+19EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19ED");
    },
    Error,
    "encode-error: U+19ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19EE");
    },
    Error,
    "encode-error: U+19EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19EF");
    },
    Error,
    "encode-error: U+19EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19F0");
    },
    Error,
    "encode-error: U+19F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19F1");
    },
    Error,
    "encode-error: U+19F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19F2");
    },
    Error,
    "encode-error: U+19F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19F3");
    },
    Error,
    "encode-error: U+19F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19F4");
    },
    Error,
    "encode-error: U+19F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19F5");
    },
    Error,
    "encode-error: U+19F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19F6");
    },
    Error,
    "encode-error: U+19F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19F7");
    },
    Error,
    "encode-error: U+19F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19F8");
    },
    Error,
    "encode-error: U+19F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19F9");
    },
    Error,
    "encode-error: U+19F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19FA");
    },
    Error,
    "encode-error: U+19FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19FB");
    },
    Error,
    "encode-error: U+19FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19FC");
    },
    Error,
    "encode-error: U+19FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19FD");
    },
    Error,
    "encode-error: U+19FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19FE");
    },
    Error,
    "encode-error: U+19FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u19FF");
    },
    Error,
    "encode-error: U+19FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A00");
    },
    Error,
    "encode-error: U+1A00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A01");
    },
    Error,
    "encode-error: U+1A01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A02");
    },
    Error,
    "encode-error: U+1A02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A03");
    },
    Error,
    "encode-error: U+1A03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A04");
    },
    Error,
    "encode-error: U+1A04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A05");
    },
    Error,
    "encode-error: U+1A05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A06");
    },
    Error,
    "encode-error: U+1A06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A07");
    },
    Error,
    "encode-error: U+1A07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A08");
    },
    Error,
    "encode-error: U+1A08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A09");
    },
    Error,
    "encode-error: U+1A09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A0A");
    },
    Error,
    "encode-error: U+1A0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A0B");
    },
    Error,
    "encode-error: U+1A0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A0C");
    },
    Error,
    "encode-error: U+1A0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A0D");
    },
    Error,
    "encode-error: U+1A0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A0E");
    },
    Error,
    "encode-error: U+1A0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A0F");
    },
    Error,
    "encode-error: U+1A0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A10");
    },
    Error,
    "encode-error: U+1A10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A11");
    },
    Error,
    "encode-error: U+1A11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A12");
    },
    Error,
    "encode-error: U+1A12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A13");
    },
    Error,
    "encode-error: U+1A13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A14");
    },
    Error,
    "encode-error: U+1A14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A15");
    },
    Error,
    "encode-error: U+1A15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A16");
    },
    Error,
    "encode-error: U+1A16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A17");
    },
    Error,
    "encode-error: U+1A17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A18");
    },
    Error,
    "encode-error: U+1A18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A19");
    },
    Error,
    "encode-error: U+1A19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A1A");
    },
    Error,
    "encode-error: U+1A1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A1B");
    },
    Error,
    "encode-error: U+1A1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A1C");
    },
    Error,
    "encode-error: U+1A1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A1D");
    },
    Error,
    "encode-error: U+1A1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A1E");
    },
    Error,
    "encode-error: U+1A1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A1F");
    },
    Error,
    "encode-error: U+1A1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A20");
    },
    Error,
    "encode-error: U+1A20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A21");
    },
    Error,
    "encode-error: U+1A21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A22");
    },
    Error,
    "encode-error: U+1A22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A23");
    },
    Error,
    "encode-error: U+1A23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A24");
    },
    Error,
    "encode-error: U+1A24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A25");
    },
    Error,
    "encode-error: U+1A25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A26");
    },
    Error,
    "encode-error: U+1A26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A27");
    },
    Error,
    "encode-error: U+1A27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A28");
    },
    Error,
    "encode-error: U+1A28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A29");
    },
    Error,
    "encode-error: U+1A29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A2A");
    },
    Error,
    "encode-error: U+1A2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A2B");
    },
    Error,
    "encode-error: U+1A2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A2C");
    },
    Error,
    "encode-error: U+1A2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A2D");
    },
    Error,
    "encode-error: U+1A2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A2E");
    },
    Error,
    "encode-error: U+1A2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A2F");
    },
    Error,
    "encode-error: U+1A2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A30");
    },
    Error,
    "encode-error: U+1A30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A31");
    },
    Error,
    "encode-error: U+1A31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A32");
    },
    Error,
    "encode-error: U+1A32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A33");
    },
    Error,
    "encode-error: U+1A33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A34");
    },
    Error,
    "encode-error: U+1A34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A35");
    },
    Error,
    "encode-error: U+1A35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A36");
    },
    Error,
    "encode-error: U+1A36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A37");
    },
    Error,
    "encode-error: U+1A37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A38");
    },
    Error,
    "encode-error: U+1A38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A39");
    },
    Error,
    "encode-error: U+1A39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A3A");
    },
    Error,
    "encode-error: U+1A3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A3B");
    },
    Error,
    "encode-error: U+1A3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A3C");
    },
    Error,
    "encode-error: U+1A3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A3D");
    },
    Error,
    "encode-error: U+1A3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A3E");
    },
    Error,
    "encode-error: U+1A3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A3F");
    },
    Error,
    "encode-error: U+1A3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A40");
    },
    Error,
    "encode-error: U+1A40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A41");
    },
    Error,
    "encode-error: U+1A41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A42");
    },
    Error,
    "encode-error: U+1A42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A43");
    },
    Error,
    "encode-error: U+1A43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A44");
    },
    Error,
    "encode-error: U+1A44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A45");
    },
    Error,
    "encode-error: U+1A45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A46");
    },
    Error,
    "encode-error: U+1A46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A47");
    },
    Error,
    "encode-error: U+1A47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A48");
    },
    Error,
    "encode-error: U+1A48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A49");
    },
    Error,
    "encode-error: U+1A49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A4A");
    },
    Error,
    "encode-error: U+1A4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A4B");
    },
    Error,
    "encode-error: U+1A4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A4C");
    },
    Error,
    "encode-error: U+1A4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A4D");
    },
    Error,
    "encode-error: U+1A4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A4E");
    },
    Error,
    "encode-error: U+1A4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A4F");
    },
    Error,
    "encode-error: U+1A4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A50");
    },
    Error,
    "encode-error: U+1A50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A51");
    },
    Error,
    "encode-error: U+1A51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A52");
    },
    Error,
    "encode-error: U+1A52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A53");
    },
    Error,
    "encode-error: U+1A53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A54");
    },
    Error,
    "encode-error: U+1A54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A55");
    },
    Error,
    "encode-error: U+1A55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A56");
    },
    Error,
    "encode-error: U+1A56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A57");
    },
    Error,
    "encode-error: U+1A57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A58");
    },
    Error,
    "encode-error: U+1A58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A59");
    },
    Error,
    "encode-error: U+1A59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A5A");
    },
    Error,
    "encode-error: U+1A5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A5B");
    },
    Error,
    "encode-error: U+1A5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A5C");
    },
    Error,
    "encode-error: U+1A5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A5D");
    },
    Error,
    "encode-error: U+1A5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A5E");
    },
    Error,
    "encode-error: U+1A5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A5F");
    },
    Error,
    "encode-error: U+1A5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A60");
    },
    Error,
    "encode-error: U+1A60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A61");
    },
    Error,
    "encode-error: U+1A61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A62");
    },
    Error,
    "encode-error: U+1A62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A63");
    },
    Error,
    "encode-error: U+1A63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A64");
    },
    Error,
    "encode-error: U+1A64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A65");
    },
    Error,
    "encode-error: U+1A65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A66");
    },
    Error,
    "encode-error: U+1A66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A67");
    },
    Error,
    "encode-error: U+1A67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A68");
    },
    Error,
    "encode-error: U+1A68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A69");
    },
    Error,
    "encode-error: U+1A69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A6A");
    },
    Error,
    "encode-error: U+1A6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A6B");
    },
    Error,
    "encode-error: U+1A6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A6C");
    },
    Error,
    "encode-error: U+1A6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A6D");
    },
    Error,
    "encode-error: U+1A6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A6E");
    },
    Error,
    "encode-error: U+1A6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A6F");
    },
    Error,
    "encode-error: U+1A6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A70");
    },
    Error,
    "encode-error: U+1A70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A71");
    },
    Error,
    "encode-error: U+1A71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A72");
    },
    Error,
    "encode-error: U+1A72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A73");
    },
    Error,
    "encode-error: U+1A73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A74");
    },
    Error,
    "encode-error: U+1A74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A75");
    },
    Error,
    "encode-error: U+1A75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A76");
    },
    Error,
    "encode-error: U+1A76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A77");
    },
    Error,
    "encode-error: U+1A77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A78");
    },
    Error,
    "encode-error: U+1A78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A79");
    },
    Error,
    "encode-error: U+1A79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A7A");
    },
    Error,
    "encode-error: U+1A7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A7B");
    },
    Error,
    "encode-error: U+1A7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A7C");
    },
    Error,
    "encode-error: U+1A7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A7D");
    },
    Error,
    "encode-error: U+1A7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A7E");
    },
    Error,
    "encode-error: U+1A7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A7F");
    },
    Error,
    "encode-error: U+1A7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A80");
    },
    Error,
    "encode-error: U+1A80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A81");
    },
    Error,
    "encode-error: U+1A81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A82");
    },
    Error,
    "encode-error: U+1A82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A83");
    },
    Error,
    "encode-error: U+1A83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A84");
    },
    Error,
    "encode-error: U+1A84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A85");
    },
    Error,
    "encode-error: U+1A85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A86");
    },
    Error,
    "encode-error: U+1A86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A87");
    },
    Error,
    "encode-error: U+1A87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A88");
    },
    Error,
    "encode-error: U+1A88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A89");
    },
    Error,
    "encode-error: U+1A89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A8A");
    },
    Error,
    "encode-error: U+1A8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A8B");
    },
    Error,
    "encode-error: U+1A8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A8C");
    },
    Error,
    "encode-error: U+1A8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A8D");
    },
    Error,
    "encode-error: U+1A8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A8E");
    },
    Error,
    "encode-error: U+1A8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A8F");
    },
    Error,
    "encode-error: U+1A8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A90");
    },
    Error,
    "encode-error: U+1A90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A91");
    },
    Error,
    "encode-error: U+1A91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A92");
    },
    Error,
    "encode-error: U+1A92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A93");
    },
    Error,
    "encode-error: U+1A93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A94");
    },
    Error,
    "encode-error: U+1A94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A95");
    },
    Error,
    "encode-error: U+1A95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A96");
    },
    Error,
    "encode-error: U+1A96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A97");
    },
    Error,
    "encode-error: U+1A97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A98");
    },
    Error,
    "encode-error: U+1A98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A99");
    },
    Error,
    "encode-error: U+1A99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A9A");
    },
    Error,
    "encode-error: U+1A9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A9B");
    },
    Error,
    "encode-error: U+1A9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A9C");
    },
    Error,
    "encode-error: U+1A9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A9D");
    },
    Error,
    "encode-error: U+1A9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A9E");
    },
    Error,
    "encode-error: U+1A9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1A9F");
    },
    Error,
    "encode-error: U+1A9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AA0");
    },
    Error,
    "encode-error: U+1AA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AA1");
    },
    Error,
    "encode-error: U+1AA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AA2");
    },
    Error,
    "encode-error: U+1AA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AA3");
    },
    Error,
    "encode-error: U+1AA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AA4");
    },
    Error,
    "encode-error: U+1AA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AA5");
    },
    Error,
    "encode-error: U+1AA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AA6");
    },
    Error,
    "encode-error: U+1AA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AA7");
    },
    Error,
    "encode-error: U+1AA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AA8");
    },
    Error,
    "encode-error: U+1AA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AA9");
    },
    Error,
    "encode-error: U+1AA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AAA");
    },
    Error,
    "encode-error: U+1AAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AAB");
    },
    Error,
    "encode-error: U+1AAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AAC");
    },
    Error,
    "encode-error: U+1AAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AAD");
    },
    Error,
    "encode-error: U+1AAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AAE");
    },
    Error,
    "encode-error: U+1AAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AAF");
    },
    Error,
    "encode-error: U+1AAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AB0");
    },
    Error,
    "encode-error: U+1AB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AB1");
    },
    Error,
    "encode-error: U+1AB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AB2");
    },
    Error,
    "encode-error: U+1AB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AB3");
    },
    Error,
    "encode-error: U+1AB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AB4");
    },
    Error,
    "encode-error: U+1AB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AB5");
    },
    Error,
    "encode-error: U+1AB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AB6");
    },
    Error,
    "encode-error: U+1AB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AB7");
    },
    Error,
    "encode-error: U+1AB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AB8");
    },
    Error,
    "encode-error: U+1AB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AB9");
    },
    Error,
    "encode-error: U+1AB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ABA");
    },
    Error,
    "encode-error: U+1ABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ABB");
    },
    Error,
    "encode-error: U+1ABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ABC");
    },
    Error,
    "encode-error: U+1ABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ABD");
    },
    Error,
    "encode-error: U+1ABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ABE");
    },
    Error,
    "encode-error: U+1ABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ABF");
    },
    Error,
    "encode-error: U+1ABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AC0");
    },
    Error,
    "encode-error: U+1AC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AC1");
    },
    Error,
    "encode-error: U+1AC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AC2");
    },
    Error,
    "encode-error: U+1AC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AC3");
    },
    Error,
    "encode-error: U+1AC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AC4");
    },
    Error,
    "encode-error: U+1AC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AC5");
    },
    Error,
    "encode-error: U+1AC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AC6");
    },
    Error,
    "encode-error: U+1AC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AC7");
    },
    Error,
    "encode-error: U+1AC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AC8");
    },
    Error,
    "encode-error: U+1AC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AC9");
    },
    Error,
    "encode-error: U+1AC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ACA");
    },
    Error,
    "encode-error: U+1ACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ACB");
    },
    Error,
    "encode-error: U+1ACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ACC");
    },
    Error,
    "encode-error: U+1ACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ACD");
    },
    Error,
    "encode-error: U+1ACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ACE");
    },
    Error,
    "encode-error: U+1ACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ACF");
    },
    Error,
    "encode-error: U+1ACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AD0");
    },
    Error,
    "encode-error: U+1AD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AD1");
    },
    Error,
    "encode-error: U+1AD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AD2");
    },
    Error,
    "encode-error: U+1AD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AD3");
    },
    Error,
    "encode-error: U+1AD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AD4");
    },
    Error,
    "encode-error: U+1AD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AD5");
    },
    Error,
    "encode-error: U+1AD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AD6");
    },
    Error,
    "encode-error: U+1AD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AD7");
    },
    Error,
    "encode-error: U+1AD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AD8");
    },
    Error,
    "encode-error: U+1AD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AD9");
    },
    Error,
    "encode-error: U+1AD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ADA");
    },
    Error,
    "encode-error: U+1ADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ADB");
    },
    Error,
    "encode-error: U+1ADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ADC");
    },
    Error,
    "encode-error: U+1ADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ADD");
    },
    Error,
    "encode-error: U+1ADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ADE");
    },
    Error,
    "encode-error: U+1ADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ADF");
    },
    Error,
    "encode-error: U+1ADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AE0");
    },
    Error,
    "encode-error: U+1AE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AE1");
    },
    Error,
    "encode-error: U+1AE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AE2");
    },
    Error,
    "encode-error: U+1AE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AE3");
    },
    Error,
    "encode-error: U+1AE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AE4");
    },
    Error,
    "encode-error: U+1AE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AE5");
    },
    Error,
    "encode-error: U+1AE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AE6");
    },
    Error,
    "encode-error: U+1AE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AE7");
    },
    Error,
    "encode-error: U+1AE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AE8");
    },
    Error,
    "encode-error: U+1AE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AE9");
    },
    Error,
    "encode-error: U+1AE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AEA");
    },
    Error,
    "encode-error: U+1AEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AEB");
    },
    Error,
    "encode-error: U+1AEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AEC");
    },
    Error,
    "encode-error: U+1AEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AED");
    },
    Error,
    "encode-error: U+1AED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AEE");
    },
    Error,
    "encode-error: U+1AEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AEF");
    },
    Error,
    "encode-error: U+1AEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AF0");
    },
    Error,
    "encode-error: U+1AF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AF1");
    },
    Error,
    "encode-error: U+1AF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AF2");
    },
    Error,
    "encode-error: U+1AF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AF3");
    },
    Error,
    "encode-error: U+1AF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AF4");
    },
    Error,
    "encode-error: U+1AF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AF5");
    },
    Error,
    "encode-error: U+1AF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AF6");
    },
    Error,
    "encode-error: U+1AF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AF7");
    },
    Error,
    "encode-error: U+1AF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AF8");
    },
    Error,
    "encode-error: U+1AF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AF9");
    },
    Error,
    "encode-error: U+1AF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AFA");
    },
    Error,
    "encode-error: U+1AFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AFB");
    },
    Error,
    "encode-error: U+1AFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AFC");
    },
    Error,
    "encode-error: U+1AFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AFD");
    },
    Error,
    "encode-error: U+1AFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AFE");
    },
    Error,
    "encode-error: U+1AFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1AFF");
    },
    Error,
    "encode-error: U+1AFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B00");
    },
    Error,
    "encode-error: U+1B00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B01");
    },
    Error,
    "encode-error: U+1B01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B02");
    },
    Error,
    "encode-error: U+1B02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B03");
    },
    Error,
    "encode-error: U+1B03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B04");
    },
    Error,
    "encode-error: U+1B04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B05");
    },
    Error,
    "encode-error: U+1B05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B06");
    },
    Error,
    "encode-error: U+1B06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B07");
    },
    Error,
    "encode-error: U+1B07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B08");
    },
    Error,
    "encode-error: U+1B08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B09");
    },
    Error,
    "encode-error: U+1B09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B0A");
    },
    Error,
    "encode-error: U+1B0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B0B");
    },
    Error,
    "encode-error: U+1B0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B0C");
    },
    Error,
    "encode-error: U+1B0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B0D");
    },
    Error,
    "encode-error: U+1B0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B0E");
    },
    Error,
    "encode-error: U+1B0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B0F");
    },
    Error,
    "encode-error: U+1B0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B10");
    },
    Error,
    "encode-error: U+1B10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B11");
    },
    Error,
    "encode-error: U+1B11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B12");
    },
    Error,
    "encode-error: U+1B12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B13");
    },
    Error,
    "encode-error: U+1B13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B14");
    },
    Error,
    "encode-error: U+1B14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B15");
    },
    Error,
    "encode-error: U+1B15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B16");
    },
    Error,
    "encode-error: U+1B16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B17");
    },
    Error,
    "encode-error: U+1B17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B18");
    },
    Error,
    "encode-error: U+1B18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B19");
    },
    Error,
    "encode-error: U+1B19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B1A");
    },
    Error,
    "encode-error: U+1B1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B1B");
    },
    Error,
    "encode-error: U+1B1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B1C");
    },
    Error,
    "encode-error: U+1B1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B1D");
    },
    Error,
    "encode-error: U+1B1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B1E");
    },
    Error,
    "encode-error: U+1B1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B1F");
    },
    Error,
    "encode-error: U+1B1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B20");
    },
    Error,
    "encode-error: U+1B20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B21");
    },
    Error,
    "encode-error: U+1B21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B22");
    },
    Error,
    "encode-error: U+1B22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B23");
    },
    Error,
    "encode-error: U+1B23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B24");
    },
    Error,
    "encode-error: U+1B24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B25");
    },
    Error,
    "encode-error: U+1B25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B26");
    },
    Error,
    "encode-error: U+1B26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B27");
    },
    Error,
    "encode-error: U+1B27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B28");
    },
    Error,
    "encode-error: U+1B28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B29");
    },
    Error,
    "encode-error: U+1B29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B2A");
    },
    Error,
    "encode-error: U+1B2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B2B");
    },
    Error,
    "encode-error: U+1B2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B2C");
    },
    Error,
    "encode-error: U+1B2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B2D");
    },
    Error,
    "encode-error: U+1B2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B2E");
    },
    Error,
    "encode-error: U+1B2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B2F");
    },
    Error,
    "encode-error: U+1B2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B30");
    },
    Error,
    "encode-error: U+1B30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B31");
    },
    Error,
    "encode-error: U+1B31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B32");
    },
    Error,
    "encode-error: U+1B32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B33");
    },
    Error,
    "encode-error: U+1B33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B34");
    },
    Error,
    "encode-error: U+1B34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B35");
    },
    Error,
    "encode-error: U+1B35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B36");
    },
    Error,
    "encode-error: U+1B36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B37");
    },
    Error,
    "encode-error: U+1B37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B38");
    },
    Error,
    "encode-error: U+1B38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B39");
    },
    Error,
    "encode-error: U+1B39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B3A");
    },
    Error,
    "encode-error: U+1B3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B3B");
    },
    Error,
    "encode-error: U+1B3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B3C");
    },
    Error,
    "encode-error: U+1B3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B3D");
    },
    Error,
    "encode-error: U+1B3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B3E");
    },
    Error,
    "encode-error: U+1B3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B3F");
    },
    Error,
    "encode-error: U+1B3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B40");
    },
    Error,
    "encode-error: U+1B40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B41");
    },
    Error,
    "encode-error: U+1B41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B42");
    },
    Error,
    "encode-error: U+1B42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B43");
    },
    Error,
    "encode-error: U+1B43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B44");
    },
    Error,
    "encode-error: U+1B44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B45");
    },
    Error,
    "encode-error: U+1B45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B46");
    },
    Error,
    "encode-error: U+1B46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B47");
    },
    Error,
    "encode-error: U+1B47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B48");
    },
    Error,
    "encode-error: U+1B48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B49");
    },
    Error,
    "encode-error: U+1B49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B4A");
    },
    Error,
    "encode-error: U+1B4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B4B");
    },
    Error,
    "encode-error: U+1B4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B4C");
    },
    Error,
    "encode-error: U+1B4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B4D");
    },
    Error,
    "encode-error: U+1B4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B4E");
    },
    Error,
    "encode-error: U+1B4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B4F");
    },
    Error,
    "encode-error: U+1B4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B50");
    },
    Error,
    "encode-error: U+1B50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B51");
    },
    Error,
    "encode-error: U+1B51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B52");
    },
    Error,
    "encode-error: U+1B52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B53");
    },
    Error,
    "encode-error: U+1B53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B54");
    },
    Error,
    "encode-error: U+1B54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B55");
    },
    Error,
    "encode-error: U+1B55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B56");
    },
    Error,
    "encode-error: U+1B56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B57");
    },
    Error,
    "encode-error: U+1B57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B58");
    },
    Error,
    "encode-error: U+1B58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B59");
    },
    Error,
    "encode-error: U+1B59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B5A");
    },
    Error,
    "encode-error: U+1B5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B5B");
    },
    Error,
    "encode-error: U+1B5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B5C");
    },
    Error,
    "encode-error: U+1B5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B5D");
    },
    Error,
    "encode-error: U+1B5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B5E");
    },
    Error,
    "encode-error: U+1B5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B5F");
    },
    Error,
    "encode-error: U+1B5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B60");
    },
    Error,
    "encode-error: U+1B60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B61");
    },
    Error,
    "encode-error: U+1B61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B62");
    },
    Error,
    "encode-error: U+1B62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B63");
    },
    Error,
    "encode-error: U+1B63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B64");
    },
    Error,
    "encode-error: U+1B64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B65");
    },
    Error,
    "encode-error: U+1B65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B66");
    },
    Error,
    "encode-error: U+1B66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B67");
    },
    Error,
    "encode-error: U+1B67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B68");
    },
    Error,
    "encode-error: U+1B68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B69");
    },
    Error,
    "encode-error: U+1B69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B6A");
    },
    Error,
    "encode-error: U+1B6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B6B");
    },
    Error,
    "encode-error: U+1B6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B6C");
    },
    Error,
    "encode-error: U+1B6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B6D");
    },
    Error,
    "encode-error: U+1B6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B6E");
    },
    Error,
    "encode-error: U+1B6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B6F");
    },
    Error,
    "encode-error: U+1B6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B70");
    },
    Error,
    "encode-error: U+1B70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B71");
    },
    Error,
    "encode-error: U+1B71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B72");
    },
    Error,
    "encode-error: U+1B72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B73");
    },
    Error,
    "encode-error: U+1B73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B74");
    },
    Error,
    "encode-error: U+1B74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B75");
    },
    Error,
    "encode-error: U+1B75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B76");
    },
    Error,
    "encode-error: U+1B76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B77");
    },
    Error,
    "encode-error: U+1B77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B78");
    },
    Error,
    "encode-error: U+1B78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B79");
    },
    Error,
    "encode-error: U+1B79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B7A");
    },
    Error,
    "encode-error: U+1B7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B7B");
    },
    Error,
    "encode-error: U+1B7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B7C");
    },
    Error,
    "encode-error: U+1B7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B7D");
    },
    Error,
    "encode-error: U+1B7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B7E");
    },
    Error,
    "encode-error: U+1B7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B7F");
    },
    Error,
    "encode-error: U+1B7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B80");
    },
    Error,
    "encode-error: U+1B80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B81");
    },
    Error,
    "encode-error: U+1B81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B82");
    },
    Error,
    "encode-error: U+1B82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B83");
    },
    Error,
    "encode-error: U+1B83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B84");
    },
    Error,
    "encode-error: U+1B84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B85");
    },
    Error,
    "encode-error: U+1B85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B86");
    },
    Error,
    "encode-error: U+1B86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B87");
    },
    Error,
    "encode-error: U+1B87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B88");
    },
    Error,
    "encode-error: U+1B88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B89");
    },
    Error,
    "encode-error: U+1B89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B8A");
    },
    Error,
    "encode-error: U+1B8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B8B");
    },
    Error,
    "encode-error: U+1B8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B8C");
    },
    Error,
    "encode-error: U+1B8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B8D");
    },
    Error,
    "encode-error: U+1B8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B8E");
    },
    Error,
    "encode-error: U+1B8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B8F");
    },
    Error,
    "encode-error: U+1B8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B90");
    },
    Error,
    "encode-error: U+1B90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B91");
    },
    Error,
    "encode-error: U+1B91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B92");
    },
    Error,
    "encode-error: U+1B92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B93");
    },
    Error,
    "encode-error: U+1B93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B94");
    },
    Error,
    "encode-error: U+1B94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B95");
    },
    Error,
    "encode-error: U+1B95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B96");
    },
    Error,
    "encode-error: U+1B96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B97");
    },
    Error,
    "encode-error: U+1B97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B98");
    },
    Error,
    "encode-error: U+1B98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B99");
    },
    Error,
    "encode-error: U+1B99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B9A");
    },
    Error,
    "encode-error: U+1B9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B9B");
    },
    Error,
    "encode-error: U+1B9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B9C");
    },
    Error,
    "encode-error: U+1B9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B9D");
    },
    Error,
    "encode-error: U+1B9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B9E");
    },
    Error,
    "encode-error: U+1B9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1B9F");
    },
    Error,
    "encode-error: U+1B9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BA0");
    },
    Error,
    "encode-error: U+1BA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BA1");
    },
    Error,
    "encode-error: U+1BA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BA2");
    },
    Error,
    "encode-error: U+1BA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BA3");
    },
    Error,
    "encode-error: U+1BA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BA4");
    },
    Error,
    "encode-error: U+1BA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BA5");
    },
    Error,
    "encode-error: U+1BA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BA6");
    },
    Error,
    "encode-error: U+1BA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BA7");
    },
    Error,
    "encode-error: U+1BA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BA8");
    },
    Error,
    "encode-error: U+1BA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BA9");
    },
    Error,
    "encode-error: U+1BA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BAA");
    },
    Error,
    "encode-error: U+1BAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BAB");
    },
    Error,
    "encode-error: U+1BAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BAC");
    },
    Error,
    "encode-error: U+1BAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BAD");
    },
    Error,
    "encode-error: U+1BAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BAE");
    },
    Error,
    "encode-error: U+1BAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BAF");
    },
    Error,
    "encode-error: U+1BAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BB0");
    },
    Error,
    "encode-error: U+1BB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BB1");
    },
    Error,
    "encode-error: U+1BB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BB2");
    },
    Error,
    "encode-error: U+1BB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BB3");
    },
    Error,
    "encode-error: U+1BB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BB4");
    },
    Error,
    "encode-error: U+1BB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BB5");
    },
    Error,
    "encode-error: U+1BB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BB6");
    },
    Error,
    "encode-error: U+1BB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BB7");
    },
    Error,
    "encode-error: U+1BB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BB8");
    },
    Error,
    "encode-error: U+1BB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BB9");
    },
    Error,
    "encode-error: U+1BB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BBA");
    },
    Error,
    "encode-error: U+1BBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BBB");
    },
    Error,
    "encode-error: U+1BBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BBC");
    },
    Error,
    "encode-error: U+1BBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BBD");
    },
    Error,
    "encode-error: U+1BBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BBE");
    },
    Error,
    "encode-error: U+1BBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BBF");
    },
    Error,
    "encode-error: U+1BBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BC0");
    },
    Error,
    "encode-error: U+1BC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BC1");
    },
    Error,
    "encode-error: U+1BC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BC2");
    },
    Error,
    "encode-error: U+1BC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BC3");
    },
    Error,
    "encode-error: U+1BC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BC4");
    },
    Error,
    "encode-error: U+1BC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BC5");
    },
    Error,
    "encode-error: U+1BC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BC6");
    },
    Error,
    "encode-error: U+1BC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BC7");
    },
    Error,
    "encode-error: U+1BC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BC8");
    },
    Error,
    "encode-error: U+1BC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BC9");
    },
    Error,
    "encode-error: U+1BC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BCA");
    },
    Error,
    "encode-error: U+1BCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BCB");
    },
    Error,
    "encode-error: U+1BCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BCC");
    },
    Error,
    "encode-error: U+1BCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BCD");
    },
    Error,
    "encode-error: U+1BCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BCE");
    },
    Error,
    "encode-error: U+1BCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BCF");
    },
    Error,
    "encode-error: U+1BCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BD0");
    },
    Error,
    "encode-error: U+1BD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BD1");
    },
    Error,
    "encode-error: U+1BD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BD2");
    },
    Error,
    "encode-error: U+1BD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BD3");
    },
    Error,
    "encode-error: U+1BD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BD4");
    },
    Error,
    "encode-error: U+1BD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BD5");
    },
    Error,
    "encode-error: U+1BD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BD6");
    },
    Error,
    "encode-error: U+1BD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BD7");
    },
    Error,
    "encode-error: U+1BD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BD8");
    },
    Error,
    "encode-error: U+1BD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BD9");
    },
    Error,
    "encode-error: U+1BD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BDA");
    },
    Error,
    "encode-error: U+1BDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BDB");
    },
    Error,
    "encode-error: U+1BDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BDC");
    },
    Error,
    "encode-error: U+1BDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BDD");
    },
    Error,
    "encode-error: U+1BDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BDE");
    },
    Error,
    "encode-error: U+1BDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BDF");
    },
    Error,
    "encode-error: U+1BDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BE0");
    },
    Error,
    "encode-error: U+1BE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BE1");
    },
    Error,
    "encode-error: U+1BE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BE2");
    },
    Error,
    "encode-error: U+1BE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BE3");
    },
    Error,
    "encode-error: U+1BE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BE4");
    },
    Error,
    "encode-error: U+1BE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BE5");
    },
    Error,
    "encode-error: U+1BE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BE6");
    },
    Error,
    "encode-error: U+1BE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BE7");
    },
    Error,
    "encode-error: U+1BE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BE8");
    },
    Error,
    "encode-error: U+1BE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BE9");
    },
    Error,
    "encode-error: U+1BE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BEA");
    },
    Error,
    "encode-error: U+1BEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BEB");
    },
    Error,
    "encode-error: U+1BEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BEC");
    },
    Error,
    "encode-error: U+1BEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BED");
    },
    Error,
    "encode-error: U+1BED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BEE");
    },
    Error,
    "encode-error: U+1BEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BEF");
    },
    Error,
    "encode-error: U+1BEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BF0");
    },
    Error,
    "encode-error: U+1BF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BF1");
    },
    Error,
    "encode-error: U+1BF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BF2");
    },
    Error,
    "encode-error: U+1BF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BF3");
    },
    Error,
    "encode-error: U+1BF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BF4");
    },
    Error,
    "encode-error: U+1BF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BF5");
    },
    Error,
    "encode-error: U+1BF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BF6");
    },
    Error,
    "encode-error: U+1BF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BF7");
    },
    Error,
    "encode-error: U+1BF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BF8");
    },
    Error,
    "encode-error: U+1BF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BF9");
    },
    Error,
    "encode-error: U+1BF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BFA");
    },
    Error,
    "encode-error: U+1BFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BFB");
    },
    Error,
    "encode-error: U+1BFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BFC");
    },
    Error,
    "encode-error: U+1BFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BFD");
    },
    Error,
    "encode-error: U+1BFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BFE");
    },
    Error,
    "encode-error: U+1BFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1BFF");
    },
    Error,
    "encode-error: U+1BFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C00");
    },
    Error,
    "encode-error: U+1C00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C01");
    },
    Error,
    "encode-error: U+1C01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C02");
    },
    Error,
    "encode-error: U+1C02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C03");
    },
    Error,
    "encode-error: U+1C03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C04");
    },
    Error,
    "encode-error: U+1C04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C05");
    },
    Error,
    "encode-error: U+1C05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C06");
    },
    Error,
    "encode-error: U+1C06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C07");
    },
    Error,
    "encode-error: U+1C07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C08");
    },
    Error,
    "encode-error: U+1C08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C09");
    },
    Error,
    "encode-error: U+1C09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C0A");
    },
    Error,
    "encode-error: U+1C0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C0B");
    },
    Error,
    "encode-error: U+1C0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C0C");
    },
    Error,
    "encode-error: U+1C0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C0D");
    },
    Error,
    "encode-error: U+1C0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C0E");
    },
    Error,
    "encode-error: U+1C0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C0F");
    },
    Error,
    "encode-error: U+1C0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C10");
    },
    Error,
    "encode-error: U+1C10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C11");
    },
    Error,
    "encode-error: U+1C11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C12");
    },
    Error,
    "encode-error: U+1C12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C13");
    },
    Error,
    "encode-error: U+1C13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C14");
    },
    Error,
    "encode-error: U+1C14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C15");
    },
    Error,
    "encode-error: U+1C15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C16");
    },
    Error,
    "encode-error: U+1C16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C17");
    },
    Error,
    "encode-error: U+1C17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C18");
    },
    Error,
    "encode-error: U+1C18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C19");
    },
    Error,
    "encode-error: U+1C19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C1A");
    },
    Error,
    "encode-error: U+1C1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C1B");
    },
    Error,
    "encode-error: U+1C1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C1C");
    },
    Error,
    "encode-error: U+1C1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C1D");
    },
    Error,
    "encode-error: U+1C1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C1E");
    },
    Error,
    "encode-error: U+1C1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C1F");
    },
    Error,
    "encode-error: U+1C1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C20");
    },
    Error,
    "encode-error: U+1C20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C21");
    },
    Error,
    "encode-error: U+1C21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C22");
    },
    Error,
    "encode-error: U+1C22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C23");
    },
    Error,
    "encode-error: U+1C23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C24");
    },
    Error,
    "encode-error: U+1C24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C25");
    },
    Error,
    "encode-error: U+1C25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C26");
    },
    Error,
    "encode-error: U+1C26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C27");
    },
    Error,
    "encode-error: U+1C27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C28");
    },
    Error,
    "encode-error: U+1C28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C29");
    },
    Error,
    "encode-error: U+1C29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C2A");
    },
    Error,
    "encode-error: U+1C2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C2B");
    },
    Error,
    "encode-error: U+1C2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C2C");
    },
    Error,
    "encode-error: U+1C2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C2D");
    },
    Error,
    "encode-error: U+1C2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C2E");
    },
    Error,
    "encode-error: U+1C2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C2F");
    },
    Error,
    "encode-error: U+1C2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C30");
    },
    Error,
    "encode-error: U+1C30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C31");
    },
    Error,
    "encode-error: U+1C31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C32");
    },
    Error,
    "encode-error: U+1C32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C33");
    },
    Error,
    "encode-error: U+1C33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C34");
    },
    Error,
    "encode-error: U+1C34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C35");
    },
    Error,
    "encode-error: U+1C35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C36");
    },
    Error,
    "encode-error: U+1C36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C37");
    },
    Error,
    "encode-error: U+1C37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C38");
    },
    Error,
    "encode-error: U+1C38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C39");
    },
    Error,
    "encode-error: U+1C39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C3A");
    },
    Error,
    "encode-error: U+1C3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C3B");
    },
    Error,
    "encode-error: U+1C3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C3C");
    },
    Error,
    "encode-error: U+1C3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C3D");
    },
    Error,
    "encode-error: U+1C3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C3E");
    },
    Error,
    "encode-error: U+1C3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C3F");
    },
    Error,
    "encode-error: U+1C3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C40");
    },
    Error,
    "encode-error: U+1C40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C41");
    },
    Error,
    "encode-error: U+1C41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C42");
    },
    Error,
    "encode-error: U+1C42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C43");
    },
    Error,
    "encode-error: U+1C43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C44");
    },
    Error,
    "encode-error: U+1C44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C45");
    },
    Error,
    "encode-error: U+1C45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C46");
    },
    Error,
    "encode-error: U+1C46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C47");
    },
    Error,
    "encode-error: U+1C47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C48");
    },
    Error,
    "encode-error: U+1C48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C49");
    },
    Error,
    "encode-error: U+1C49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C4A");
    },
    Error,
    "encode-error: U+1C4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C4B");
    },
    Error,
    "encode-error: U+1C4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C4C");
    },
    Error,
    "encode-error: U+1C4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C4D");
    },
    Error,
    "encode-error: U+1C4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C4E");
    },
    Error,
    "encode-error: U+1C4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C4F");
    },
    Error,
    "encode-error: U+1C4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C50");
    },
    Error,
    "encode-error: U+1C50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C51");
    },
    Error,
    "encode-error: U+1C51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C52");
    },
    Error,
    "encode-error: U+1C52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C53");
    },
    Error,
    "encode-error: U+1C53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C54");
    },
    Error,
    "encode-error: U+1C54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C55");
    },
    Error,
    "encode-error: U+1C55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C56");
    },
    Error,
    "encode-error: U+1C56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C57");
    },
    Error,
    "encode-error: U+1C57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C58");
    },
    Error,
    "encode-error: U+1C58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C59");
    },
    Error,
    "encode-error: U+1C59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C5A");
    },
    Error,
    "encode-error: U+1C5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C5B");
    },
    Error,
    "encode-error: U+1C5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C5C");
    },
    Error,
    "encode-error: U+1C5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C5D");
    },
    Error,
    "encode-error: U+1C5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C5E");
    },
    Error,
    "encode-error: U+1C5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C5F");
    },
    Error,
    "encode-error: U+1C5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C60");
    },
    Error,
    "encode-error: U+1C60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C61");
    },
    Error,
    "encode-error: U+1C61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C62");
    },
    Error,
    "encode-error: U+1C62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C63");
    },
    Error,
    "encode-error: U+1C63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C64");
    },
    Error,
    "encode-error: U+1C64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C65");
    },
    Error,
    "encode-error: U+1C65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C66");
    },
    Error,
    "encode-error: U+1C66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C67");
    },
    Error,
    "encode-error: U+1C67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C68");
    },
    Error,
    "encode-error: U+1C68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C69");
    },
    Error,
    "encode-error: U+1C69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C6A");
    },
    Error,
    "encode-error: U+1C6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C6B");
    },
    Error,
    "encode-error: U+1C6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C6C");
    },
    Error,
    "encode-error: U+1C6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C6D");
    },
    Error,
    "encode-error: U+1C6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C6E");
    },
    Error,
    "encode-error: U+1C6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C6F");
    },
    Error,
    "encode-error: U+1C6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C70");
    },
    Error,
    "encode-error: U+1C70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C71");
    },
    Error,
    "encode-error: U+1C71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C72");
    },
    Error,
    "encode-error: U+1C72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C73");
    },
    Error,
    "encode-error: U+1C73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C74");
    },
    Error,
    "encode-error: U+1C74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C75");
    },
    Error,
    "encode-error: U+1C75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C76");
    },
    Error,
    "encode-error: U+1C76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C77");
    },
    Error,
    "encode-error: U+1C77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C78");
    },
    Error,
    "encode-error: U+1C78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C79");
    },
    Error,
    "encode-error: U+1C79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C7A");
    },
    Error,
    "encode-error: U+1C7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C7B");
    },
    Error,
    "encode-error: U+1C7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C7C");
    },
    Error,
    "encode-error: U+1C7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C7D");
    },
    Error,
    "encode-error: U+1C7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C7E");
    },
    Error,
    "encode-error: U+1C7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C7F");
    },
    Error,
    "encode-error: U+1C7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C80");
    },
    Error,
    "encode-error: U+1C80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C81");
    },
    Error,
    "encode-error: U+1C81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C82");
    },
    Error,
    "encode-error: U+1C82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C83");
    },
    Error,
    "encode-error: U+1C83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C84");
    },
    Error,
    "encode-error: U+1C84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C85");
    },
    Error,
    "encode-error: U+1C85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C86");
    },
    Error,
    "encode-error: U+1C86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C87");
    },
    Error,
    "encode-error: U+1C87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C88");
    },
    Error,
    "encode-error: U+1C88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C89");
    },
    Error,
    "encode-error: U+1C89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C8A");
    },
    Error,
    "encode-error: U+1C8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C8B");
    },
    Error,
    "encode-error: U+1C8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C8C");
    },
    Error,
    "encode-error: U+1C8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C8D");
    },
    Error,
    "encode-error: U+1C8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C8E");
    },
    Error,
    "encode-error: U+1C8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C8F");
    },
    Error,
    "encode-error: U+1C8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C90");
    },
    Error,
    "encode-error: U+1C90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C91");
    },
    Error,
    "encode-error: U+1C91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C92");
    },
    Error,
    "encode-error: U+1C92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C93");
    },
    Error,
    "encode-error: U+1C93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C94");
    },
    Error,
    "encode-error: U+1C94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C95");
    },
    Error,
    "encode-error: U+1C95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C96");
    },
    Error,
    "encode-error: U+1C96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C97");
    },
    Error,
    "encode-error: U+1C97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C98");
    },
    Error,
    "encode-error: U+1C98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C99");
    },
    Error,
    "encode-error: U+1C99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C9A");
    },
    Error,
    "encode-error: U+1C9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C9B");
    },
    Error,
    "encode-error: U+1C9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C9C");
    },
    Error,
    "encode-error: U+1C9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C9D");
    },
    Error,
    "encode-error: U+1C9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C9E");
    },
    Error,
    "encode-error: U+1C9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1C9F");
    },
    Error,
    "encode-error: U+1C9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CA0");
    },
    Error,
    "encode-error: U+1CA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CA1");
    },
    Error,
    "encode-error: U+1CA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CA2");
    },
    Error,
    "encode-error: U+1CA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CA3");
    },
    Error,
    "encode-error: U+1CA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CA4");
    },
    Error,
    "encode-error: U+1CA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CA5");
    },
    Error,
    "encode-error: U+1CA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CA6");
    },
    Error,
    "encode-error: U+1CA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CA7");
    },
    Error,
    "encode-error: U+1CA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CA8");
    },
    Error,
    "encode-error: U+1CA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CA9");
    },
    Error,
    "encode-error: U+1CA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CAA");
    },
    Error,
    "encode-error: U+1CAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CAB");
    },
    Error,
    "encode-error: U+1CAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CAC");
    },
    Error,
    "encode-error: U+1CAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CAD");
    },
    Error,
    "encode-error: U+1CAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CAE");
    },
    Error,
    "encode-error: U+1CAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CAF");
    },
    Error,
    "encode-error: U+1CAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CB0");
    },
    Error,
    "encode-error: U+1CB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CB1");
    },
    Error,
    "encode-error: U+1CB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CB2");
    },
    Error,
    "encode-error: U+1CB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CB3");
    },
    Error,
    "encode-error: U+1CB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CB4");
    },
    Error,
    "encode-error: U+1CB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CB5");
    },
    Error,
    "encode-error: U+1CB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CB6");
    },
    Error,
    "encode-error: U+1CB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CB7");
    },
    Error,
    "encode-error: U+1CB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CB8");
    },
    Error,
    "encode-error: U+1CB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CB9");
    },
    Error,
    "encode-error: U+1CB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CBA");
    },
    Error,
    "encode-error: U+1CBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CBB");
    },
    Error,
    "encode-error: U+1CBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CBC");
    },
    Error,
    "encode-error: U+1CBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CBD");
    },
    Error,
    "encode-error: U+1CBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CBE");
    },
    Error,
    "encode-error: U+1CBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CBF");
    },
    Error,
    "encode-error: U+1CBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CC0");
    },
    Error,
    "encode-error: U+1CC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CC1");
    },
    Error,
    "encode-error: U+1CC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CC2");
    },
    Error,
    "encode-error: U+1CC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CC3");
    },
    Error,
    "encode-error: U+1CC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CC4");
    },
    Error,
    "encode-error: U+1CC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CC5");
    },
    Error,
    "encode-error: U+1CC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CC6");
    },
    Error,
    "encode-error: U+1CC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CC7");
    },
    Error,
    "encode-error: U+1CC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CC8");
    },
    Error,
    "encode-error: U+1CC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CC9");
    },
    Error,
    "encode-error: U+1CC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CCA");
    },
    Error,
    "encode-error: U+1CCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CCB");
    },
    Error,
    "encode-error: U+1CCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CCC");
    },
    Error,
    "encode-error: U+1CCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CCD");
    },
    Error,
    "encode-error: U+1CCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CCE");
    },
    Error,
    "encode-error: U+1CCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CCF");
    },
    Error,
    "encode-error: U+1CCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CD0");
    },
    Error,
    "encode-error: U+1CD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CD1");
    },
    Error,
    "encode-error: U+1CD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CD2");
    },
    Error,
    "encode-error: U+1CD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CD3");
    },
    Error,
    "encode-error: U+1CD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CD4");
    },
    Error,
    "encode-error: U+1CD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CD5");
    },
    Error,
    "encode-error: U+1CD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CD6");
    },
    Error,
    "encode-error: U+1CD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CD7");
    },
    Error,
    "encode-error: U+1CD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CD8");
    },
    Error,
    "encode-error: U+1CD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CD9");
    },
    Error,
    "encode-error: U+1CD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CDA");
    },
    Error,
    "encode-error: U+1CDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CDB");
    },
    Error,
    "encode-error: U+1CDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CDC");
    },
    Error,
    "encode-error: U+1CDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CDD");
    },
    Error,
    "encode-error: U+1CDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CDE");
    },
    Error,
    "encode-error: U+1CDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CDF");
    },
    Error,
    "encode-error: U+1CDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CE0");
    },
    Error,
    "encode-error: U+1CE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CE1");
    },
    Error,
    "encode-error: U+1CE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CE2");
    },
    Error,
    "encode-error: U+1CE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CE3");
    },
    Error,
    "encode-error: U+1CE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CE4");
    },
    Error,
    "encode-error: U+1CE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CE5");
    },
    Error,
    "encode-error: U+1CE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CE6");
    },
    Error,
    "encode-error: U+1CE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CE7");
    },
    Error,
    "encode-error: U+1CE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CE8");
    },
    Error,
    "encode-error: U+1CE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CE9");
    },
    Error,
    "encode-error: U+1CE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CEA");
    },
    Error,
    "encode-error: U+1CEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CEB");
    },
    Error,
    "encode-error: U+1CEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CEC");
    },
    Error,
    "encode-error: U+1CEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CED");
    },
    Error,
    "encode-error: U+1CED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CEE");
    },
    Error,
    "encode-error: U+1CEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CEF");
    },
    Error,
    "encode-error: U+1CEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CF0");
    },
    Error,
    "encode-error: U+1CF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CF1");
    },
    Error,
    "encode-error: U+1CF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CF2");
    },
    Error,
    "encode-error: U+1CF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CF3");
    },
    Error,
    "encode-error: U+1CF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CF4");
    },
    Error,
    "encode-error: U+1CF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CF5");
    },
    Error,
    "encode-error: U+1CF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CF6");
    },
    Error,
    "encode-error: U+1CF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CF7");
    },
    Error,
    "encode-error: U+1CF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CF8");
    },
    Error,
    "encode-error: U+1CF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CF9");
    },
    Error,
    "encode-error: U+1CF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CFA");
    },
    Error,
    "encode-error: U+1CFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CFB");
    },
    Error,
    "encode-error: U+1CFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CFC");
    },
    Error,
    "encode-error: U+1CFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CFD");
    },
    Error,
    "encode-error: U+1CFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CFE");
    },
    Error,
    "encode-error: U+1CFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1CFF");
    },
    Error,
    "encode-error: U+1CFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D00");
    },
    Error,
    "encode-error: U+1D00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D01");
    },
    Error,
    "encode-error: U+1D01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D02");
    },
    Error,
    "encode-error: U+1D02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D03");
    },
    Error,
    "encode-error: U+1D03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D04");
    },
    Error,
    "encode-error: U+1D04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D05");
    },
    Error,
    "encode-error: U+1D05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D06");
    },
    Error,
    "encode-error: U+1D06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D07");
    },
    Error,
    "encode-error: U+1D07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D08");
    },
    Error,
    "encode-error: U+1D08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D09");
    },
    Error,
    "encode-error: U+1D09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D0A");
    },
    Error,
    "encode-error: U+1D0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D0B");
    },
    Error,
    "encode-error: U+1D0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D0C");
    },
    Error,
    "encode-error: U+1D0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D0D");
    },
    Error,
    "encode-error: U+1D0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D0E");
    },
    Error,
    "encode-error: U+1D0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D0F");
    },
    Error,
    "encode-error: U+1D0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D10");
    },
    Error,
    "encode-error: U+1D10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D11");
    },
    Error,
    "encode-error: U+1D11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D12");
    },
    Error,
    "encode-error: U+1D12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D13");
    },
    Error,
    "encode-error: U+1D13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D14");
    },
    Error,
    "encode-error: U+1D14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D15");
    },
    Error,
    "encode-error: U+1D15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D16");
    },
    Error,
    "encode-error: U+1D16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D17");
    },
    Error,
    "encode-error: U+1D17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D18");
    },
    Error,
    "encode-error: U+1D18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D19");
    },
    Error,
    "encode-error: U+1D19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D1A");
    },
    Error,
    "encode-error: U+1D1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D1B");
    },
    Error,
    "encode-error: U+1D1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D1C");
    },
    Error,
    "encode-error: U+1D1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D1D");
    },
    Error,
    "encode-error: U+1D1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D1E");
    },
    Error,
    "encode-error: U+1D1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D1F");
    },
    Error,
    "encode-error: U+1D1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D20");
    },
    Error,
    "encode-error: U+1D20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D21");
    },
    Error,
    "encode-error: U+1D21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D22");
    },
    Error,
    "encode-error: U+1D22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D23");
    },
    Error,
    "encode-error: U+1D23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D24");
    },
    Error,
    "encode-error: U+1D24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D25");
    },
    Error,
    "encode-error: U+1D25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D26");
    },
    Error,
    "encode-error: U+1D26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D27");
    },
    Error,
    "encode-error: U+1D27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D28");
    },
    Error,
    "encode-error: U+1D28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D29");
    },
    Error,
    "encode-error: U+1D29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D2A");
    },
    Error,
    "encode-error: U+1D2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D2B");
    },
    Error,
    "encode-error: U+1D2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D2C");
    },
    Error,
    "encode-error: U+1D2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D2D");
    },
    Error,
    "encode-error: U+1D2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D2E");
    },
    Error,
    "encode-error: U+1D2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D2F");
    },
    Error,
    "encode-error: U+1D2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D30");
    },
    Error,
    "encode-error: U+1D30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D31");
    },
    Error,
    "encode-error: U+1D31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D32");
    },
    Error,
    "encode-error: U+1D32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D33");
    },
    Error,
    "encode-error: U+1D33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D34");
    },
    Error,
    "encode-error: U+1D34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D35");
    },
    Error,
    "encode-error: U+1D35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D36");
    },
    Error,
    "encode-error: U+1D36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D37");
    },
    Error,
    "encode-error: U+1D37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D38");
    },
    Error,
    "encode-error: U+1D38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D39");
    },
    Error,
    "encode-error: U+1D39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D3A");
    },
    Error,
    "encode-error: U+1D3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D3B");
    },
    Error,
    "encode-error: U+1D3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D3C");
    },
    Error,
    "encode-error: U+1D3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D3D");
    },
    Error,
    "encode-error: U+1D3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D3E");
    },
    Error,
    "encode-error: U+1D3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D3F");
    },
    Error,
    "encode-error: U+1D3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D40");
    },
    Error,
    "encode-error: U+1D40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D41");
    },
    Error,
    "encode-error: U+1D41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D42");
    },
    Error,
    "encode-error: U+1D42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D43");
    },
    Error,
    "encode-error: U+1D43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D44");
    },
    Error,
    "encode-error: U+1D44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D45");
    },
    Error,
    "encode-error: U+1D45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D46");
    },
    Error,
    "encode-error: U+1D46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D47");
    },
    Error,
    "encode-error: U+1D47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D48");
    },
    Error,
    "encode-error: U+1D48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D49");
    },
    Error,
    "encode-error: U+1D49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D4A");
    },
    Error,
    "encode-error: U+1D4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D4B");
    },
    Error,
    "encode-error: U+1D4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D4C");
    },
    Error,
    "encode-error: U+1D4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D4D");
    },
    Error,
    "encode-error: U+1D4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D4E");
    },
    Error,
    "encode-error: U+1D4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D4F");
    },
    Error,
    "encode-error: U+1D4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D50");
    },
    Error,
    "encode-error: U+1D50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D51");
    },
    Error,
    "encode-error: U+1D51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D52");
    },
    Error,
    "encode-error: U+1D52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D53");
    },
    Error,
    "encode-error: U+1D53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D54");
    },
    Error,
    "encode-error: U+1D54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D55");
    },
    Error,
    "encode-error: U+1D55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D56");
    },
    Error,
    "encode-error: U+1D56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D57");
    },
    Error,
    "encode-error: U+1D57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D58");
    },
    Error,
    "encode-error: U+1D58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D59");
    },
    Error,
    "encode-error: U+1D59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D5A");
    },
    Error,
    "encode-error: U+1D5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D5B");
    },
    Error,
    "encode-error: U+1D5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D5C");
    },
    Error,
    "encode-error: U+1D5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D5D");
    },
    Error,
    "encode-error: U+1D5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D5E");
    },
    Error,
    "encode-error: U+1D5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D5F");
    },
    Error,
    "encode-error: U+1D5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D60");
    },
    Error,
    "encode-error: U+1D60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D61");
    },
    Error,
    "encode-error: U+1D61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D62");
    },
    Error,
    "encode-error: U+1D62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D63");
    },
    Error,
    "encode-error: U+1D63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D64");
    },
    Error,
    "encode-error: U+1D64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D65");
    },
    Error,
    "encode-error: U+1D65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D66");
    },
    Error,
    "encode-error: U+1D66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D67");
    },
    Error,
    "encode-error: U+1D67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D68");
    },
    Error,
    "encode-error: U+1D68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D69");
    },
    Error,
    "encode-error: U+1D69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D6A");
    },
    Error,
    "encode-error: U+1D6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D6B");
    },
    Error,
    "encode-error: U+1D6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D6C");
    },
    Error,
    "encode-error: U+1D6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D6D");
    },
    Error,
    "encode-error: U+1D6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D6E");
    },
    Error,
    "encode-error: U+1D6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D6F");
    },
    Error,
    "encode-error: U+1D6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D70");
    },
    Error,
    "encode-error: U+1D70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D71");
    },
    Error,
    "encode-error: U+1D71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D72");
    },
    Error,
    "encode-error: U+1D72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D73");
    },
    Error,
    "encode-error: U+1D73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D74");
    },
    Error,
    "encode-error: U+1D74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D75");
    },
    Error,
    "encode-error: U+1D75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D76");
    },
    Error,
    "encode-error: U+1D76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D77");
    },
    Error,
    "encode-error: U+1D77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D78");
    },
    Error,
    "encode-error: U+1D78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D79");
    },
    Error,
    "encode-error: U+1D79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D7A");
    },
    Error,
    "encode-error: U+1D7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D7B");
    },
    Error,
    "encode-error: U+1D7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D7C");
    },
    Error,
    "encode-error: U+1D7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D7D");
    },
    Error,
    "encode-error: U+1D7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D7E");
    },
    Error,
    "encode-error: U+1D7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D7F");
    },
    Error,
    "encode-error: U+1D7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D80");
    },
    Error,
    "encode-error: U+1D80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D81");
    },
    Error,
    "encode-error: U+1D81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D82");
    },
    Error,
    "encode-error: U+1D82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D83");
    },
    Error,
    "encode-error: U+1D83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D84");
    },
    Error,
    "encode-error: U+1D84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D85");
    },
    Error,
    "encode-error: U+1D85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D86");
    },
    Error,
    "encode-error: U+1D86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D87");
    },
    Error,
    "encode-error: U+1D87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D88");
    },
    Error,
    "encode-error: U+1D88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D89");
    },
    Error,
    "encode-error: U+1D89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D8A");
    },
    Error,
    "encode-error: U+1D8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D8B");
    },
    Error,
    "encode-error: U+1D8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D8C");
    },
    Error,
    "encode-error: U+1D8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D8D");
    },
    Error,
    "encode-error: U+1D8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D8E");
    },
    Error,
    "encode-error: U+1D8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D8F");
    },
    Error,
    "encode-error: U+1D8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D90");
    },
    Error,
    "encode-error: U+1D90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D91");
    },
    Error,
    "encode-error: U+1D91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D92");
    },
    Error,
    "encode-error: U+1D92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D93");
    },
    Error,
    "encode-error: U+1D93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D94");
    },
    Error,
    "encode-error: U+1D94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D95");
    },
    Error,
    "encode-error: U+1D95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D96");
    },
    Error,
    "encode-error: U+1D96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D97");
    },
    Error,
    "encode-error: U+1D97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D98");
    },
    Error,
    "encode-error: U+1D98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D99");
    },
    Error,
    "encode-error: U+1D99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D9A");
    },
    Error,
    "encode-error: U+1D9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D9B");
    },
    Error,
    "encode-error: U+1D9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D9C");
    },
    Error,
    "encode-error: U+1D9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D9D");
    },
    Error,
    "encode-error: U+1D9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D9E");
    },
    Error,
    "encode-error: U+1D9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1D9F");
    },
    Error,
    "encode-error: U+1D9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DA0");
    },
    Error,
    "encode-error: U+1DA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DA1");
    },
    Error,
    "encode-error: U+1DA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DA2");
    },
    Error,
    "encode-error: U+1DA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DA3");
    },
    Error,
    "encode-error: U+1DA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DA4");
    },
    Error,
    "encode-error: U+1DA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DA5");
    },
    Error,
    "encode-error: U+1DA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DA6");
    },
    Error,
    "encode-error: U+1DA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DA7");
    },
    Error,
    "encode-error: U+1DA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DA8");
    },
    Error,
    "encode-error: U+1DA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DA9");
    },
    Error,
    "encode-error: U+1DA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DAA");
    },
    Error,
    "encode-error: U+1DAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DAB");
    },
    Error,
    "encode-error: U+1DAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DAC");
    },
    Error,
    "encode-error: U+1DAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DAD");
    },
    Error,
    "encode-error: U+1DAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DAE");
    },
    Error,
    "encode-error: U+1DAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DAF");
    },
    Error,
    "encode-error: U+1DAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DB0");
    },
    Error,
    "encode-error: U+1DB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DB1");
    },
    Error,
    "encode-error: U+1DB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DB2");
    },
    Error,
    "encode-error: U+1DB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DB3");
    },
    Error,
    "encode-error: U+1DB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DB4");
    },
    Error,
    "encode-error: U+1DB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DB5");
    },
    Error,
    "encode-error: U+1DB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DB6");
    },
    Error,
    "encode-error: U+1DB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DB7");
    },
    Error,
    "encode-error: U+1DB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DB8");
    },
    Error,
    "encode-error: U+1DB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DB9");
    },
    Error,
    "encode-error: U+1DB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DBA");
    },
    Error,
    "encode-error: U+1DBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DBB");
    },
    Error,
    "encode-error: U+1DBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DBC");
    },
    Error,
    "encode-error: U+1DBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DBD");
    },
    Error,
    "encode-error: U+1DBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DBE");
    },
    Error,
    "encode-error: U+1DBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DBF");
    },
    Error,
    "encode-error: U+1DBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DC0");
    },
    Error,
    "encode-error: U+1DC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DC1");
    },
    Error,
    "encode-error: U+1DC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DC2");
    },
    Error,
    "encode-error: U+1DC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DC3");
    },
    Error,
    "encode-error: U+1DC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DC4");
    },
    Error,
    "encode-error: U+1DC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DC5");
    },
    Error,
    "encode-error: U+1DC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DC6");
    },
    Error,
    "encode-error: U+1DC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DC7");
    },
    Error,
    "encode-error: U+1DC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DC8");
    },
    Error,
    "encode-error: U+1DC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DC9");
    },
    Error,
    "encode-error: U+1DC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DCA");
    },
    Error,
    "encode-error: U+1DCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DCB");
    },
    Error,
    "encode-error: U+1DCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DCC");
    },
    Error,
    "encode-error: U+1DCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DCD");
    },
    Error,
    "encode-error: U+1DCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DCE");
    },
    Error,
    "encode-error: U+1DCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DCF");
    },
    Error,
    "encode-error: U+1DCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DD0");
    },
    Error,
    "encode-error: U+1DD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DD1");
    },
    Error,
    "encode-error: U+1DD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DD2");
    },
    Error,
    "encode-error: U+1DD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DD3");
    },
    Error,
    "encode-error: U+1DD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DD4");
    },
    Error,
    "encode-error: U+1DD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DD5");
    },
    Error,
    "encode-error: U+1DD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DD6");
    },
    Error,
    "encode-error: U+1DD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DD7");
    },
    Error,
    "encode-error: U+1DD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DD8");
    },
    Error,
    "encode-error: U+1DD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DD9");
    },
    Error,
    "encode-error: U+1DD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DDA");
    },
    Error,
    "encode-error: U+1DDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DDB");
    },
    Error,
    "encode-error: U+1DDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DDC");
    },
    Error,
    "encode-error: U+1DDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DDD");
    },
    Error,
    "encode-error: U+1DDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DDE");
    },
    Error,
    "encode-error: U+1DDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DDF");
    },
    Error,
    "encode-error: U+1DDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DE0");
    },
    Error,
    "encode-error: U+1DE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DE1");
    },
    Error,
    "encode-error: U+1DE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DE2");
    },
    Error,
    "encode-error: U+1DE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DE3");
    },
    Error,
    "encode-error: U+1DE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DE4");
    },
    Error,
    "encode-error: U+1DE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DE5");
    },
    Error,
    "encode-error: U+1DE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DE6");
    },
    Error,
    "encode-error: U+1DE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DE7");
    },
    Error,
    "encode-error: U+1DE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DE8");
    },
    Error,
    "encode-error: U+1DE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DE9");
    },
    Error,
    "encode-error: U+1DE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DEA");
    },
    Error,
    "encode-error: U+1DEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DEB");
    },
    Error,
    "encode-error: U+1DEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DEC");
    },
    Error,
    "encode-error: U+1DEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DED");
    },
    Error,
    "encode-error: U+1DED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DEE");
    },
    Error,
    "encode-error: U+1DEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DEF");
    },
    Error,
    "encode-error: U+1DEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DF0");
    },
    Error,
    "encode-error: U+1DF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DF1");
    },
    Error,
    "encode-error: U+1DF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DF2");
    },
    Error,
    "encode-error: U+1DF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DF3");
    },
    Error,
    "encode-error: U+1DF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DF4");
    },
    Error,
    "encode-error: U+1DF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DF5");
    },
    Error,
    "encode-error: U+1DF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DF6");
    },
    Error,
    "encode-error: U+1DF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DF7");
    },
    Error,
    "encode-error: U+1DF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DF8");
    },
    Error,
    "encode-error: U+1DF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DF9");
    },
    Error,
    "encode-error: U+1DF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DFA");
    },
    Error,
    "encode-error: U+1DFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DFB");
    },
    Error,
    "encode-error: U+1DFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DFC");
    },
    Error,
    "encode-error: U+1DFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DFD");
    },
    Error,
    "encode-error: U+1DFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DFE");
    },
    Error,
    "encode-error: U+1DFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1DFF");
    },
    Error,
    "encode-error: U+1DFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E00");
    },
    Error,
    "encode-error: U+1E00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E01");
    },
    Error,
    "encode-error: U+1E01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E02");
    },
    Error,
    "encode-error: U+1E02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E03");
    },
    Error,
    "encode-error: U+1E03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E04");
    },
    Error,
    "encode-error: U+1E04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E05");
    },
    Error,
    "encode-error: U+1E05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E06");
    },
    Error,
    "encode-error: U+1E06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E07");
    },
    Error,
    "encode-error: U+1E07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E08");
    },
    Error,
    "encode-error: U+1E08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E09");
    },
    Error,
    "encode-error: U+1E09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E0A");
    },
    Error,
    "encode-error: U+1E0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E0B");
    },
    Error,
    "encode-error: U+1E0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E0C");
    },
    Error,
    "encode-error: U+1E0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E0D");
    },
    Error,
    "encode-error: U+1E0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E0E");
    },
    Error,
    "encode-error: U+1E0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E0F");
    },
    Error,
    "encode-error: U+1E0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E10");
    },
    Error,
    "encode-error: U+1E10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E11");
    },
    Error,
    "encode-error: U+1E11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E12");
    },
    Error,
    "encode-error: U+1E12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E13");
    },
    Error,
    "encode-error: U+1E13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E14");
    },
    Error,
    "encode-error: U+1E14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E15");
    },
    Error,
    "encode-error: U+1E15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E16");
    },
    Error,
    "encode-error: U+1E16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E17");
    },
    Error,
    "encode-error: U+1E17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E18");
    },
    Error,
    "encode-error: U+1E18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E19");
    },
    Error,
    "encode-error: U+1E19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E1A");
    },
    Error,
    "encode-error: U+1E1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E1B");
    },
    Error,
    "encode-error: U+1E1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E1C");
    },
    Error,
    "encode-error: U+1E1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E1D");
    },
    Error,
    "encode-error: U+1E1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E1E");
    },
    Error,
    "encode-error: U+1E1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E1F");
    },
    Error,
    "encode-error: U+1E1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E20");
    },
    Error,
    "encode-error: U+1E20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E21");
    },
    Error,
    "encode-error: U+1E21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E22");
    },
    Error,
    "encode-error: U+1E22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E23");
    },
    Error,
    "encode-error: U+1E23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E24");
    },
    Error,
    "encode-error: U+1E24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E25");
    },
    Error,
    "encode-error: U+1E25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E26");
    },
    Error,
    "encode-error: U+1E26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E27");
    },
    Error,
    "encode-error: U+1E27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E28");
    },
    Error,
    "encode-error: U+1E28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E29");
    },
    Error,
    "encode-error: U+1E29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E2A");
    },
    Error,
    "encode-error: U+1E2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E2B");
    },
    Error,
    "encode-error: U+1E2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E2C");
    },
    Error,
    "encode-error: U+1E2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E2D");
    },
    Error,
    "encode-error: U+1E2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E2E");
    },
    Error,
    "encode-error: U+1E2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E2F");
    },
    Error,
    "encode-error: U+1E2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E30");
    },
    Error,
    "encode-error: U+1E30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E31");
    },
    Error,
    "encode-error: U+1E31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E32");
    },
    Error,
    "encode-error: U+1E32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E33");
    },
    Error,
    "encode-error: U+1E33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E34");
    },
    Error,
    "encode-error: U+1E34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E35");
    },
    Error,
    "encode-error: U+1E35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E36");
    },
    Error,
    "encode-error: U+1E36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E37");
    },
    Error,
    "encode-error: U+1E37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E38");
    },
    Error,
    "encode-error: U+1E38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E39");
    },
    Error,
    "encode-error: U+1E39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E3A");
    },
    Error,
    "encode-error: U+1E3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E3B");
    },
    Error,
    "encode-error: U+1E3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E3C");
    },
    Error,
    "encode-error: U+1E3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E3D");
    },
    Error,
    "encode-error: U+1E3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E3E");
    },
    Error,
    "encode-error: U+1E3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E3F");
    },
    Error,
    "encode-error: U+1E3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E40");
    },
    Error,
    "encode-error: U+1E40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E41");
    },
    Error,
    "encode-error: U+1E41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E42");
    },
    Error,
    "encode-error: U+1E42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E43");
    },
    Error,
    "encode-error: U+1E43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E44");
    },
    Error,
    "encode-error: U+1E44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E45");
    },
    Error,
    "encode-error: U+1E45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E46");
    },
    Error,
    "encode-error: U+1E46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E47");
    },
    Error,
    "encode-error: U+1E47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E48");
    },
    Error,
    "encode-error: U+1E48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E49");
    },
    Error,
    "encode-error: U+1E49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E4A");
    },
    Error,
    "encode-error: U+1E4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E4B");
    },
    Error,
    "encode-error: U+1E4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E4C");
    },
    Error,
    "encode-error: U+1E4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E4D");
    },
    Error,
    "encode-error: U+1E4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E4E");
    },
    Error,
    "encode-error: U+1E4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E4F");
    },
    Error,
    "encode-error: U+1E4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E50");
    },
    Error,
    "encode-error: U+1E50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E51");
    },
    Error,
    "encode-error: U+1E51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E52");
    },
    Error,
    "encode-error: U+1E52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E53");
    },
    Error,
    "encode-error: U+1E53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E54");
    },
    Error,
    "encode-error: U+1E54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E55");
    },
    Error,
    "encode-error: U+1E55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E56");
    },
    Error,
    "encode-error: U+1E56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E57");
    },
    Error,
    "encode-error: U+1E57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E58");
    },
    Error,
    "encode-error: U+1E58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E59");
    },
    Error,
    "encode-error: U+1E59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E5A");
    },
    Error,
    "encode-error: U+1E5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E5B");
    },
    Error,
    "encode-error: U+1E5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E5C");
    },
    Error,
    "encode-error: U+1E5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E5D");
    },
    Error,
    "encode-error: U+1E5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E5E");
    },
    Error,
    "encode-error: U+1E5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E5F");
    },
    Error,
    "encode-error: U+1E5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E60");
    },
    Error,
    "encode-error: U+1E60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E61");
    },
    Error,
    "encode-error: U+1E61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E62");
    },
    Error,
    "encode-error: U+1E62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E63");
    },
    Error,
    "encode-error: U+1E63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E64");
    },
    Error,
    "encode-error: U+1E64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E65");
    },
    Error,
    "encode-error: U+1E65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E66");
    },
    Error,
    "encode-error: U+1E66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E67");
    },
    Error,
    "encode-error: U+1E67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E68");
    },
    Error,
    "encode-error: U+1E68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E69");
    },
    Error,
    "encode-error: U+1E69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E6A");
    },
    Error,
    "encode-error: U+1E6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E6B");
    },
    Error,
    "encode-error: U+1E6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E6C");
    },
    Error,
    "encode-error: U+1E6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E6D");
    },
    Error,
    "encode-error: U+1E6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E6E");
    },
    Error,
    "encode-error: U+1E6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E6F");
    },
    Error,
    "encode-error: U+1E6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E70");
    },
    Error,
    "encode-error: U+1E70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E71");
    },
    Error,
    "encode-error: U+1E71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E72");
    },
    Error,
    "encode-error: U+1E72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E73");
    },
    Error,
    "encode-error: U+1E73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E74");
    },
    Error,
    "encode-error: U+1E74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E75");
    },
    Error,
    "encode-error: U+1E75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E76");
    },
    Error,
    "encode-error: U+1E76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E77");
    },
    Error,
    "encode-error: U+1E77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E78");
    },
    Error,
    "encode-error: U+1E78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E79");
    },
    Error,
    "encode-error: U+1E79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E7A");
    },
    Error,
    "encode-error: U+1E7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E7B");
    },
    Error,
    "encode-error: U+1E7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E7C");
    },
    Error,
    "encode-error: U+1E7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E7D");
    },
    Error,
    "encode-error: U+1E7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E7E");
    },
    Error,
    "encode-error: U+1E7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E7F");
    },
    Error,
    "encode-error: U+1E7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E80");
    },
    Error,
    "encode-error: U+1E80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E81");
    },
    Error,
    "encode-error: U+1E81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E82");
    },
    Error,
    "encode-error: U+1E82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E83");
    },
    Error,
    "encode-error: U+1E83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E84");
    },
    Error,
    "encode-error: U+1E84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E85");
    },
    Error,
    "encode-error: U+1E85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E86");
    },
    Error,
    "encode-error: U+1E86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E87");
    },
    Error,
    "encode-error: U+1E87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E88");
    },
    Error,
    "encode-error: U+1E88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E89");
    },
    Error,
    "encode-error: U+1E89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E8A");
    },
    Error,
    "encode-error: U+1E8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E8B");
    },
    Error,
    "encode-error: U+1E8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E8C");
    },
    Error,
    "encode-error: U+1E8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E8D");
    },
    Error,
    "encode-error: U+1E8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E8E");
    },
    Error,
    "encode-error: U+1E8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E8F");
    },
    Error,
    "encode-error: U+1E8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E90");
    },
    Error,
    "encode-error: U+1E90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E91");
    },
    Error,
    "encode-error: U+1E91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E92");
    },
    Error,
    "encode-error: U+1E92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E93");
    },
    Error,
    "encode-error: U+1E93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E94");
    },
    Error,
    "encode-error: U+1E94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E95");
    },
    Error,
    "encode-error: U+1E95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E96");
    },
    Error,
    "encode-error: U+1E96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E97");
    },
    Error,
    "encode-error: U+1E97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E98");
    },
    Error,
    "encode-error: U+1E98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E99");
    },
    Error,
    "encode-error: U+1E99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E9A");
    },
    Error,
    "encode-error: U+1E9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E9B");
    },
    Error,
    "encode-error: U+1E9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E9C");
    },
    Error,
    "encode-error: U+1E9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E9D");
    },
    Error,
    "encode-error: U+1E9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E9E");
    },
    Error,
    "encode-error: U+1E9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1E9F");
    },
    Error,
    "encode-error: U+1E9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EA0");
    },
    Error,
    "encode-error: U+1EA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EA1");
    },
    Error,
    "encode-error: U+1EA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EA2");
    },
    Error,
    "encode-error: U+1EA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EA3");
    },
    Error,
    "encode-error: U+1EA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EA4");
    },
    Error,
    "encode-error: U+1EA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EA5");
    },
    Error,
    "encode-error: U+1EA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EA6");
    },
    Error,
    "encode-error: U+1EA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EA7");
    },
    Error,
    "encode-error: U+1EA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EA8");
    },
    Error,
    "encode-error: U+1EA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EA9");
    },
    Error,
    "encode-error: U+1EA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EAA");
    },
    Error,
    "encode-error: U+1EAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EAB");
    },
    Error,
    "encode-error: U+1EAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EAC");
    },
    Error,
    "encode-error: U+1EAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EAD");
    },
    Error,
    "encode-error: U+1EAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EAE");
    },
    Error,
    "encode-error: U+1EAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EAF");
    },
    Error,
    "encode-error: U+1EAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EB0");
    },
    Error,
    "encode-error: U+1EB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EB1");
    },
    Error,
    "encode-error: U+1EB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EB2");
    },
    Error,
    "encode-error: U+1EB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EB3");
    },
    Error,
    "encode-error: U+1EB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EB4");
    },
    Error,
    "encode-error: U+1EB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EB5");
    },
    Error,
    "encode-error: U+1EB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EB6");
    },
    Error,
    "encode-error: U+1EB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EB7");
    },
    Error,
    "encode-error: U+1EB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EB8");
    },
    Error,
    "encode-error: U+1EB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EB9");
    },
    Error,
    "encode-error: U+1EB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EBA");
    },
    Error,
    "encode-error: U+1EBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EBB");
    },
    Error,
    "encode-error: U+1EBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EBC");
    },
    Error,
    "encode-error: U+1EBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EBD");
    },
    Error,
    "encode-error: U+1EBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EBE");
    },
    Error,
    "encode-error: U+1EBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EBF");
    },
    Error,
    "encode-error: U+1EBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EC0");
    },
    Error,
    "encode-error: U+1EC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EC1");
    },
    Error,
    "encode-error: U+1EC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EC2");
    },
    Error,
    "encode-error: U+1EC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EC3");
    },
    Error,
    "encode-error: U+1EC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EC4");
    },
    Error,
    "encode-error: U+1EC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EC5");
    },
    Error,
    "encode-error: U+1EC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EC6");
    },
    Error,
    "encode-error: U+1EC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EC7");
    },
    Error,
    "encode-error: U+1EC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EC8");
    },
    Error,
    "encode-error: U+1EC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EC9");
    },
    Error,
    "encode-error: U+1EC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ECA");
    },
    Error,
    "encode-error: U+1ECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ECB");
    },
    Error,
    "encode-error: U+1ECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ECC");
    },
    Error,
    "encode-error: U+1ECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ECD");
    },
    Error,
    "encode-error: U+1ECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ECE");
    },
    Error,
    "encode-error: U+1ECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ECF");
    },
    Error,
    "encode-error: U+1ECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ED0");
    },
    Error,
    "encode-error: U+1ED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ED1");
    },
    Error,
    "encode-error: U+1ED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ED2");
    },
    Error,
    "encode-error: U+1ED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ED3");
    },
    Error,
    "encode-error: U+1ED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ED4");
    },
    Error,
    "encode-error: U+1ED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ED5");
    },
    Error,
    "encode-error: U+1ED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ED6");
    },
    Error,
    "encode-error: U+1ED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ED7");
    },
    Error,
    "encode-error: U+1ED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ED8");
    },
    Error,
    "encode-error: U+1ED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1ED9");
    },
    Error,
    "encode-error: U+1ED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EDA");
    },
    Error,
    "encode-error: U+1EDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EDB");
    },
    Error,
    "encode-error: U+1EDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EDC");
    },
    Error,
    "encode-error: U+1EDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EDD");
    },
    Error,
    "encode-error: U+1EDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EDE");
    },
    Error,
    "encode-error: U+1EDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EDF");
    },
    Error,
    "encode-error: U+1EDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EE0");
    },
    Error,
    "encode-error: U+1EE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EE1");
    },
    Error,
    "encode-error: U+1EE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EE2");
    },
    Error,
    "encode-error: U+1EE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EE3");
    },
    Error,
    "encode-error: U+1EE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EE4");
    },
    Error,
    "encode-error: U+1EE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EE5");
    },
    Error,
    "encode-error: U+1EE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EE6");
    },
    Error,
    "encode-error: U+1EE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EE7");
    },
    Error,
    "encode-error: U+1EE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EE8");
    },
    Error,
    "encode-error: U+1EE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EE9");
    },
    Error,
    "encode-error: U+1EE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EEA");
    },
    Error,
    "encode-error: U+1EEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EEB");
    },
    Error,
    "encode-error: U+1EEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EEC");
    },
    Error,
    "encode-error: U+1EEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EED");
    },
    Error,
    "encode-error: U+1EED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EEE");
    },
    Error,
    "encode-error: U+1EEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EEF");
    },
    Error,
    "encode-error: U+1EEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EF0");
    },
    Error,
    "encode-error: U+1EF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EF1");
    },
    Error,
    "encode-error: U+1EF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EF2");
    },
    Error,
    "encode-error: U+1EF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EF3");
    },
    Error,
    "encode-error: U+1EF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EF4");
    },
    Error,
    "encode-error: U+1EF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EF5");
    },
    Error,
    "encode-error: U+1EF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EF6");
    },
    Error,
    "encode-error: U+1EF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EF7");
    },
    Error,
    "encode-error: U+1EF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EF8");
    },
    Error,
    "encode-error: U+1EF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EF9");
    },
    Error,
    "encode-error: U+1EF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EFA");
    },
    Error,
    "encode-error: U+1EFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EFB");
    },
    Error,
    "encode-error: U+1EFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EFC");
    },
    Error,
    "encode-error: U+1EFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EFD");
    },
    Error,
    "encode-error: U+1EFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EFE");
    },
    Error,
    "encode-error: U+1EFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1EFF");
    },
    Error,
    "encode-error: U+1EFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F00");
    },
    Error,
    "encode-error: U+1F00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F01");
    },
    Error,
    "encode-error: U+1F01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F02");
    },
    Error,
    "encode-error: U+1F02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F03");
    },
    Error,
    "encode-error: U+1F03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F04");
    },
    Error,
    "encode-error: U+1F04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F05");
    },
    Error,
    "encode-error: U+1F05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F06");
    },
    Error,
    "encode-error: U+1F06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F07");
    },
    Error,
    "encode-error: U+1F07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F08");
    },
    Error,
    "encode-error: U+1F08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F09");
    },
    Error,
    "encode-error: U+1F09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F0A");
    },
    Error,
    "encode-error: U+1F0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F0B");
    },
    Error,
    "encode-error: U+1F0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F0C");
    },
    Error,
    "encode-error: U+1F0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F0D");
    },
    Error,
    "encode-error: U+1F0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F0E");
    },
    Error,
    "encode-error: U+1F0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F0F");
    },
    Error,
    "encode-error: U+1F0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F10");
    },
    Error,
    "encode-error: U+1F10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F11");
    },
    Error,
    "encode-error: U+1F11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F12");
    },
    Error,
    "encode-error: U+1F12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F13");
    },
    Error,
    "encode-error: U+1F13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F14");
    },
    Error,
    "encode-error: U+1F14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F15");
    },
    Error,
    "encode-error: U+1F15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F16");
    },
    Error,
    "encode-error: U+1F16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F17");
    },
    Error,
    "encode-error: U+1F17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F18");
    },
    Error,
    "encode-error: U+1F18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F19");
    },
    Error,
    "encode-error: U+1F19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F1A");
    },
    Error,
    "encode-error: U+1F1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F1B");
    },
    Error,
    "encode-error: U+1F1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F1C");
    },
    Error,
    "encode-error: U+1F1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F1D");
    },
    Error,
    "encode-error: U+1F1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F1E");
    },
    Error,
    "encode-error: U+1F1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F1F");
    },
    Error,
    "encode-error: U+1F1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F20");
    },
    Error,
    "encode-error: U+1F20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F21");
    },
    Error,
    "encode-error: U+1F21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F22");
    },
    Error,
    "encode-error: U+1F22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F23");
    },
    Error,
    "encode-error: U+1F23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F24");
    },
    Error,
    "encode-error: U+1F24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F25");
    },
    Error,
    "encode-error: U+1F25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F26");
    },
    Error,
    "encode-error: U+1F26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F27");
    },
    Error,
    "encode-error: U+1F27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F28");
    },
    Error,
    "encode-error: U+1F28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F29");
    },
    Error,
    "encode-error: U+1F29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F2A");
    },
    Error,
    "encode-error: U+1F2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F2B");
    },
    Error,
    "encode-error: U+1F2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F2C");
    },
    Error,
    "encode-error: U+1F2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F2D");
    },
    Error,
    "encode-error: U+1F2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F2E");
    },
    Error,
    "encode-error: U+1F2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F2F");
    },
    Error,
    "encode-error: U+1F2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F30");
    },
    Error,
    "encode-error: U+1F30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F31");
    },
    Error,
    "encode-error: U+1F31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F32");
    },
    Error,
    "encode-error: U+1F32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F33");
    },
    Error,
    "encode-error: U+1F33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F34");
    },
    Error,
    "encode-error: U+1F34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F35");
    },
    Error,
    "encode-error: U+1F35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F36");
    },
    Error,
    "encode-error: U+1F36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F37");
    },
    Error,
    "encode-error: U+1F37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F38");
    },
    Error,
    "encode-error: U+1F38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F39");
    },
    Error,
    "encode-error: U+1F39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F3A");
    },
    Error,
    "encode-error: U+1F3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F3B");
    },
    Error,
    "encode-error: U+1F3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F3C");
    },
    Error,
    "encode-error: U+1F3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F3D");
    },
    Error,
    "encode-error: U+1F3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F3E");
    },
    Error,
    "encode-error: U+1F3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F3F");
    },
    Error,
    "encode-error: U+1F3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F40");
    },
    Error,
    "encode-error: U+1F40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F41");
    },
    Error,
    "encode-error: U+1F41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F42");
    },
    Error,
    "encode-error: U+1F42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F43");
    },
    Error,
    "encode-error: U+1F43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F44");
    },
    Error,
    "encode-error: U+1F44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F45");
    },
    Error,
    "encode-error: U+1F45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F46");
    },
    Error,
    "encode-error: U+1F46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F47");
    },
    Error,
    "encode-error: U+1F47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F48");
    },
    Error,
    "encode-error: U+1F48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F49");
    },
    Error,
    "encode-error: U+1F49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F4A");
    },
    Error,
    "encode-error: U+1F4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F4B");
    },
    Error,
    "encode-error: U+1F4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F4C");
    },
    Error,
    "encode-error: U+1F4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F4D");
    },
    Error,
    "encode-error: U+1F4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F4E");
    },
    Error,
    "encode-error: U+1F4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F4F");
    },
    Error,
    "encode-error: U+1F4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F50");
    },
    Error,
    "encode-error: U+1F50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F51");
    },
    Error,
    "encode-error: U+1F51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F52");
    },
    Error,
    "encode-error: U+1F52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F53");
    },
    Error,
    "encode-error: U+1F53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F54");
    },
    Error,
    "encode-error: U+1F54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F55");
    },
    Error,
    "encode-error: U+1F55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F56");
    },
    Error,
    "encode-error: U+1F56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F57");
    },
    Error,
    "encode-error: U+1F57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F58");
    },
    Error,
    "encode-error: U+1F58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F59");
    },
    Error,
    "encode-error: U+1F59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F5A");
    },
    Error,
    "encode-error: U+1F5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F5B");
    },
    Error,
    "encode-error: U+1F5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F5C");
    },
    Error,
    "encode-error: U+1F5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F5D");
    },
    Error,
    "encode-error: U+1F5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F5E");
    },
    Error,
    "encode-error: U+1F5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F5F");
    },
    Error,
    "encode-error: U+1F5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F60");
    },
    Error,
    "encode-error: U+1F60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F61");
    },
    Error,
    "encode-error: U+1F61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F62");
    },
    Error,
    "encode-error: U+1F62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F63");
    },
    Error,
    "encode-error: U+1F63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F64");
    },
    Error,
    "encode-error: U+1F64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F65");
    },
    Error,
    "encode-error: U+1F65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F66");
    },
    Error,
    "encode-error: U+1F66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F67");
    },
    Error,
    "encode-error: U+1F67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F68");
    },
    Error,
    "encode-error: U+1F68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F69");
    },
    Error,
    "encode-error: U+1F69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F6A");
    },
    Error,
    "encode-error: U+1F6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F6B");
    },
    Error,
    "encode-error: U+1F6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F6C");
    },
    Error,
    "encode-error: U+1F6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F6D");
    },
    Error,
    "encode-error: U+1F6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F6E");
    },
    Error,
    "encode-error: U+1F6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F6F");
    },
    Error,
    "encode-error: U+1F6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F70");
    },
    Error,
    "encode-error: U+1F70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F71");
    },
    Error,
    "encode-error: U+1F71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F72");
    },
    Error,
    "encode-error: U+1F72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F73");
    },
    Error,
    "encode-error: U+1F73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F74");
    },
    Error,
    "encode-error: U+1F74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F75");
    },
    Error,
    "encode-error: U+1F75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F76");
    },
    Error,
    "encode-error: U+1F76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F77");
    },
    Error,
    "encode-error: U+1F77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F78");
    },
    Error,
    "encode-error: U+1F78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F79");
    },
    Error,
    "encode-error: U+1F79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F7A");
    },
    Error,
    "encode-error: U+1F7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F7B");
    },
    Error,
    "encode-error: U+1F7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F7C");
    },
    Error,
    "encode-error: U+1F7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F7D");
    },
    Error,
    "encode-error: U+1F7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F7E");
    },
    Error,
    "encode-error: U+1F7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F7F");
    },
    Error,
    "encode-error: U+1F7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F80");
    },
    Error,
    "encode-error: U+1F80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F81");
    },
    Error,
    "encode-error: U+1F81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F82");
    },
    Error,
    "encode-error: U+1F82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F83");
    },
    Error,
    "encode-error: U+1F83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F84");
    },
    Error,
    "encode-error: U+1F84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F85");
    },
    Error,
    "encode-error: U+1F85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F86");
    },
    Error,
    "encode-error: U+1F86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F87");
    },
    Error,
    "encode-error: U+1F87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F88");
    },
    Error,
    "encode-error: U+1F88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F89");
    },
    Error,
    "encode-error: U+1F89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F8A");
    },
    Error,
    "encode-error: U+1F8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F8B");
    },
    Error,
    "encode-error: U+1F8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F8C");
    },
    Error,
    "encode-error: U+1F8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F8D");
    },
    Error,
    "encode-error: U+1F8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F8E");
    },
    Error,
    "encode-error: U+1F8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F8F");
    },
    Error,
    "encode-error: U+1F8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F90");
    },
    Error,
    "encode-error: U+1F90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F91");
    },
    Error,
    "encode-error: U+1F91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F92");
    },
    Error,
    "encode-error: U+1F92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F93");
    },
    Error,
    "encode-error: U+1F93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F94");
    },
    Error,
    "encode-error: U+1F94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F95");
    },
    Error,
    "encode-error: U+1F95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F96");
    },
    Error,
    "encode-error: U+1F96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F97");
    },
    Error,
    "encode-error: U+1F97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F98");
    },
    Error,
    "encode-error: U+1F98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F99");
    },
    Error,
    "encode-error: U+1F99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F9A");
    },
    Error,
    "encode-error: U+1F9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F9B");
    },
    Error,
    "encode-error: U+1F9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F9C");
    },
    Error,
    "encode-error: U+1F9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F9D");
    },
    Error,
    "encode-error: U+1F9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F9E");
    },
    Error,
    "encode-error: U+1F9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1F9F");
    },
    Error,
    "encode-error: U+1F9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FA0");
    },
    Error,
    "encode-error: U+1FA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FA1");
    },
    Error,
    "encode-error: U+1FA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FA2");
    },
    Error,
    "encode-error: U+1FA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FA3");
    },
    Error,
    "encode-error: U+1FA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FA4");
    },
    Error,
    "encode-error: U+1FA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FA5");
    },
    Error,
    "encode-error: U+1FA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FA6");
    },
    Error,
    "encode-error: U+1FA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FA7");
    },
    Error,
    "encode-error: U+1FA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FA8");
    },
    Error,
    "encode-error: U+1FA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FA9");
    },
    Error,
    "encode-error: U+1FA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FAA");
    },
    Error,
    "encode-error: U+1FAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FAB");
    },
    Error,
    "encode-error: U+1FAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FAC");
    },
    Error,
    "encode-error: U+1FAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FAD");
    },
    Error,
    "encode-error: U+1FAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FAE");
    },
    Error,
    "encode-error: U+1FAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FAF");
    },
    Error,
    "encode-error: U+1FAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FB0");
    },
    Error,
    "encode-error: U+1FB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FB1");
    },
    Error,
    "encode-error: U+1FB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FB2");
    },
    Error,
    "encode-error: U+1FB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FB3");
    },
    Error,
    "encode-error: U+1FB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FB4");
    },
    Error,
    "encode-error: U+1FB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FB5");
    },
    Error,
    "encode-error: U+1FB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FB6");
    },
    Error,
    "encode-error: U+1FB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FB7");
    },
    Error,
    "encode-error: U+1FB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FB8");
    },
    Error,
    "encode-error: U+1FB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FB9");
    },
    Error,
    "encode-error: U+1FB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FBA");
    },
    Error,
    "encode-error: U+1FBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FBB");
    },
    Error,
    "encode-error: U+1FBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FBC");
    },
    Error,
    "encode-error: U+1FBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FBD");
    },
    Error,
    "encode-error: U+1FBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FBE");
    },
    Error,
    "encode-error: U+1FBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FBF");
    },
    Error,
    "encode-error: U+1FBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FC0");
    },
    Error,
    "encode-error: U+1FC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FC1");
    },
    Error,
    "encode-error: U+1FC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FC2");
    },
    Error,
    "encode-error: U+1FC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FC3");
    },
    Error,
    "encode-error: U+1FC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FC4");
    },
    Error,
    "encode-error: U+1FC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FC5");
    },
    Error,
    "encode-error: U+1FC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FC6");
    },
    Error,
    "encode-error: U+1FC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FC7");
    },
    Error,
    "encode-error: U+1FC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FC8");
    },
    Error,
    "encode-error: U+1FC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FC9");
    },
    Error,
    "encode-error: U+1FC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FCA");
    },
    Error,
    "encode-error: U+1FCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FCB");
    },
    Error,
    "encode-error: U+1FCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FCC");
    },
    Error,
    "encode-error: U+1FCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FCD");
    },
    Error,
    "encode-error: U+1FCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FCE");
    },
    Error,
    "encode-error: U+1FCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FCF");
    },
    Error,
    "encode-error: U+1FCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FD0");
    },
    Error,
    "encode-error: U+1FD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FD1");
    },
    Error,
    "encode-error: U+1FD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FD2");
    },
    Error,
    "encode-error: U+1FD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FD3");
    },
    Error,
    "encode-error: U+1FD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FD4");
    },
    Error,
    "encode-error: U+1FD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FD5");
    },
    Error,
    "encode-error: U+1FD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FD6");
    },
    Error,
    "encode-error: U+1FD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FD7");
    },
    Error,
    "encode-error: U+1FD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FD8");
    },
    Error,
    "encode-error: U+1FD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FD9");
    },
    Error,
    "encode-error: U+1FD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FDA");
    },
    Error,
    "encode-error: U+1FDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FDB");
    },
    Error,
    "encode-error: U+1FDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FDC");
    },
    Error,
    "encode-error: U+1FDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FDD");
    },
    Error,
    "encode-error: U+1FDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FDE");
    },
    Error,
    "encode-error: U+1FDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FDF");
    },
    Error,
    "encode-error: U+1FDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FE0");
    },
    Error,
    "encode-error: U+1FE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FE1");
    },
    Error,
    "encode-error: U+1FE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FE2");
    },
    Error,
    "encode-error: U+1FE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FE3");
    },
    Error,
    "encode-error: U+1FE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FE4");
    },
    Error,
    "encode-error: U+1FE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FE5");
    },
    Error,
    "encode-error: U+1FE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FE6");
    },
    Error,
    "encode-error: U+1FE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FE7");
    },
    Error,
    "encode-error: U+1FE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FE8");
    },
    Error,
    "encode-error: U+1FE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FE9");
    },
    Error,
    "encode-error: U+1FE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FEA");
    },
    Error,
    "encode-error: U+1FEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FEB");
    },
    Error,
    "encode-error: U+1FEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FEC");
    },
    Error,
    "encode-error: U+1FEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FED");
    },
    Error,
    "encode-error: U+1FED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FEE");
    },
    Error,
    "encode-error: U+1FEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FEF");
    },
    Error,
    "encode-error: U+1FEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FF0");
    },
    Error,
    "encode-error: U+1FF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FF1");
    },
    Error,
    "encode-error: U+1FF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FF2");
    },
    Error,
    "encode-error: U+1FF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FF3");
    },
    Error,
    "encode-error: U+1FF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FF4");
    },
    Error,
    "encode-error: U+1FF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FF5");
    },
    Error,
    "encode-error: U+1FF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FF6");
    },
    Error,
    "encode-error: U+1FF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FF7");
    },
    Error,
    "encode-error: U+1FF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FF8");
    },
    Error,
    "encode-error: U+1FF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FF9");
    },
    Error,
    "encode-error: U+1FF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FFA");
    },
    Error,
    "encode-error: U+1FFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FFB");
    },
    Error,
    "encode-error: U+1FFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FFC");
    },
    Error,
    "encode-error: U+1FFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FFD");
    },
    Error,
    "encode-error: U+1FFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FFE");
    },
    Error,
    "encode-error: U+1FFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u1FFF");
    },
    Error,
    "encode-error: U+1FFF",
  );
});
