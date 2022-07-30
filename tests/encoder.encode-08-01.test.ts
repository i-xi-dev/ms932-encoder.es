import { assertStrictEquals, assertThrows } from "std/testing/asserts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+7000-U+73FF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u7000");
    },
    Error,
    "EncodingError U+7000",
  );
  r = r && ([...ms932Encoder.encode("瀁")].join(",") === "224,102"); // U+7001
  assertThrows(
    () => {
      ms932Encoder.encode("\u7002");
    },
    Error,
    "EncodingError U+7002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7003");
    },
    Error,
    "EncodingError U+7003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7004");
    },
    Error,
    "EncodingError U+7004",
  );
  r = r && ([...ms932Encoder.encode("瀅")].join(",") === "251,78"); // U+7005
  assertThrows(
    () => {
      ms932Encoder.encode("\u7006");
    },
    Error,
    "EncodingError U+7006",
  );
  r = r && ([...ms932Encoder.encode("瀇")].join(",") === "251,79"); // U+7007
  assertThrows(
    () => {
      ms932Encoder.encode("\u7008");
    },
    Error,
    "EncodingError U+7008",
  );
  r = r && ([...ms932Encoder.encode("瀉")].join(",") === "224,98"); // U+7009
  assertThrows(
    () => {
      ms932Encoder.encode("\u700A");
    },
    Error,
    "EncodingError U+700A",
  );
  r = r && ([...ms932Encoder.encode("瀋")].join(",") === "224,99"); // U+700B
  assertThrows(
    () => {
      ms932Encoder.encode("\u700C");
    },
    Error,
    "EncodingError U+700C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u700D");
    },
    Error,
    "EncodingError U+700D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u700E");
    },
    Error,
    "EncodingError U+700E",
  );
  r = r && ([...ms932Encoder.encode("瀏")].join(",") === "224,103"); // U+700F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7010");
    },
    Error,
    "EncodingError U+7010",
  );
  r = r && ([...ms932Encoder.encode("瀑")].join(",") === "224,101"); // U+7011
  assertThrows(
    () => {
      ms932Encoder.encode("\u7012");
    },
    Error,
    "EncodingError U+7012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7013");
    },
    Error,
    "EncodingError U+7013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7014");
    },
    Error,
    "EncodingError U+7014",
  );
  r = r && ([...ms932Encoder.encode("瀕")].join(",") === "149,109"); // U+7015
  assertThrows(
    () => {
      ms932Encoder.encode("\u7016");
    },
    Error,
    "EncodingError U+7016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7017");
    },
    Error,
    "EncodingError U+7017",
  );
  r = r && ([...ms932Encoder.encode("瀘")].join(",") === "224,109"); // U+7018
  assertThrows(
    () => {
      ms932Encoder.encode("\u7019");
    },
    Error,
    "EncodingError U+7019",
  );
  r = r && ([...ms932Encoder.encode("瀚瀛")].join(",") === "224,106,224,105"); // U+701A
  assertThrows(
    () => {
      ms932Encoder.encode("\u701C");
    },
    Error,
    "EncodingError U+701C",
  );
  r = r &&
    ([...ms932Encoder.encode("瀝瀞瀟")].join(",") === "224,108,147,210,224,110"); // U+701D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7020");
    },
    Error,
    "EncodingError U+7020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7021");
    },
    Error,
    "EncodingError U+7021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7022");
    },
    Error,
    "EncodingError U+7022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7023");
    },
    Error,
    "EncodingError U+7023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7024");
    },
    Error,
    "EncodingError U+7024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7025");
    },
    Error,
    "EncodingError U+7025",
  );
  r = r &&
    ([...ms932Encoder.encode("瀦瀧瀨")].join(",") === "146,149,145,235,251,80"); // U+7026
  assertThrows(
    () => {
      ms932Encoder.encode("\u7029");
    },
    Error,
    "EncodingError U+7029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u702A");
    },
    Error,
    "EncodingError U+702A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u702B");
    },
    Error,
    "EncodingError U+702B",
  );
  r = r && ([...ms932Encoder.encode("瀬")].join(",") === "144,163"); // U+702C
  assertThrows(
    () => {
      ms932Encoder.encode("\u702D");
    },
    Error,
    "EncodingError U+702D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u702E");
    },
    Error,
    "EncodingError U+702E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u702F");
    },
    Error,
    "EncodingError U+702F",
  );
  r = r && ([...ms932Encoder.encode("瀰")].join(",") === "224,111"); // U+7030
  assertThrows(
    () => {
      ms932Encoder.encode("\u7031");
    },
    Error,
    "EncodingError U+7031",
  );
  r = r && ([...ms932Encoder.encode("瀲")].join(",") === "224,113"); // U+7032
  assertThrows(
    () => {
      ms932Encoder.encode("\u7033");
    },
    Error,
    "EncodingError U+7033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7034");
    },
    Error,
    "EncodingError U+7034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7035");
    },
    Error,
    "EncodingError U+7035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7036");
    },
    Error,
    "EncodingError U+7036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7037");
    },
    Error,
    "EncodingError U+7037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7038");
    },
    Error,
    "EncodingError U+7038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7039");
    },
    Error,
    "EncodingError U+7039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u703A");
    },
    Error,
    "EncodingError U+703A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u703B");
    },
    Error,
    "EncodingError U+703B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u703C");
    },
    Error,
    "EncodingError U+703C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u703D");
    },
    Error,
    "EncodingError U+703D",
  );
  r = r && ([...ms932Encoder.encode("瀾")].join(",") === "224,112"); // U+703E
  assertThrows(
    () => {
      ms932Encoder.encode("\u703F");
    },
    Error,
    "EncodingError U+703F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7040");
    },
    Error,
    "EncodingError U+7040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7041");
    },
    Error,
    "EncodingError U+7041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7042");
    },
    Error,
    "EncodingError U+7042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7043");
    },
    Error,
    "EncodingError U+7043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7044");
    },
    Error,
    "EncodingError U+7044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7045");
    },
    Error,
    "EncodingError U+7045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7046");
    },
    Error,
    "EncodingError U+7046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7047");
    },
    Error,
    "EncodingError U+7047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7048");
    },
    Error,
    "EncodingError U+7048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7049");
    },
    Error,
    "EncodingError U+7049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u704A");
    },
    Error,
    "EncodingError U+704A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u704B");
    },
    Error,
    "EncodingError U+704B",
  );
  r = r && ([...ms932Encoder.encode("灌")].join(",") === "159,243"); // U+704C
  assertThrows(
    () => {
      ms932Encoder.encode("\u704D");
    },
    Error,
    "EncodingError U+704D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u704E");
    },
    Error,
    "EncodingError U+704E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u704F");
    },
    Error,
    "EncodingError U+704F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7050");
    },
    Error,
    "EncodingError U+7050",
  );
  r = r && ([...ms932Encoder.encode("灑")].join(",") === "224,114"); // U+7051
  assertThrows(
    () => {
      ms932Encoder.encode("\u7052");
    },
    Error,
    "EncodingError U+7052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7053");
    },
    Error,
    "EncodingError U+7053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7054");
    },
    Error,
    "EncodingError U+7054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7055");
    },
    Error,
    "EncodingError U+7055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7056");
    },
    Error,
    "EncodingError U+7056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7057");
    },
    Error,
    "EncodingError U+7057",
  );
  r = r && ([...ms932Encoder.encode("灘")].join(",") === "147,229"); // U+7058
  assertThrows(
    () => {
      ms932Encoder.encode("\u7059");
    },
    Error,
    "EncodingError U+7059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u705A");
    },
    Error,
    "EncodingError U+705A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u705B");
    },
    Error,
    "EncodingError U+705B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u705C");
    },
    Error,
    "EncodingError U+705C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u705D");
    },
    Error,
    "EncodingError U+705D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u705E");
    },
    Error,
    "EncodingError U+705E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u705F");
    },
    Error,
    "EncodingError U+705F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7060");
    },
    Error,
    "EncodingError U+7060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7061");
    },
    Error,
    "EncodingError U+7061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7062");
    },
    Error,
    "EncodingError U+7062",
  );
  r = r && ([...ms932Encoder.encode("灣")].join(",") === "224,115"); // U+7063
  assertThrows(
    () => {
      ms932Encoder.encode("\u7064");
    },
    Error,
    "EncodingError U+7064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7065");
    },
    Error,
    "EncodingError U+7065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7066");
    },
    Error,
    "EncodingError U+7066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7067");
    },
    Error,
    "EncodingError U+7067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7068");
    },
    Error,
    "EncodingError U+7068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7069");
    },
    Error,
    "EncodingError U+7069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u706A");
    },
    Error,
    "EncodingError U+706A",
  );
  r = r && ([...ms932Encoder.encode("火")].join(",") === "137,206"); // U+706B
  assertThrows(
    () => {
      ms932Encoder.encode("\u706C");
    },
    Error,
    "EncodingError U+706C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u706D");
    },
    Error,
    "EncodingError U+706D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u706E");
    },
    Error,
    "EncodingError U+706E",
  );
  r = r && ([...ms932Encoder.encode("灯灰")].join(",") === "147,148,138,68"); // U+706F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7071");
    },
    Error,
    "EncodingError U+7071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7072");
    },
    Error,
    "EncodingError U+7072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7073");
    },
    Error,
    "EncodingError U+7073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7074");
    },
    Error,
    "EncodingError U+7074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7075");
    },
    Error,
    "EncodingError U+7075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7076");
    },
    Error,
    "EncodingError U+7076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7077");
    },
    Error,
    "EncodingError U+7077",
  );
  r = r && ([...ms932Encoder.encode("灸")].join(",") === "139,132"); // U+7078
  assertThrows(
    () => {
      ms932Encoder.encode("\u7079");
    },
    Error,
    "EncodingError U+7079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u707A");
    },
    Error,
    "EncodingError U+707A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u707B");
    },
    Error,
    "EncodingError U+707B",
  );
  r = r && ([...ms932Encoder.encode("灼災")].join(",") === "142,220,141,208"); // U+707C
  assertThrows(
    () => {
      ms932Encoder.encode("\u707E");
    },
    Error,
    "EncodingError U+707E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u707F");
    },
    Error,
    "EncodingError U+707F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7080");
    },
    Error,
    "EncodingError U+7080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7081");
    },
    Error,
    "EncodingError U+7081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7082");
    },
    Error,
    "EncodingError U+7082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7083");
    },
    Error,
    "EncodingError U+7083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7084");
    },
    Error,
    "EncodingError U+7084",
  );
  r = r && ([...ms932Encoder.encode("炅")].join(",") === "251,81"); // U+7085
  assertThrows(
    () => {
      ms932Encoder.encode("\u7086");
    },
    Error,
    "EncodingError U+7086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7087");
    },
    Error,
    "EncodingError U+7087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7088");
    },
    Error,
    "EncodingError U+7088",
  );
  r = r && ([...ms932Encoder.encode("炉炊")].join(",") === "152,70,144,134"); // U+7089
  assertThrows(
    () => {
      ms932Encoder.encode("\u708B");
    },
    Error,
    "EncodingError U+708B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u708C");
    },
    Error,
    "EncodingError U+708C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u708D");
    },
    Error,
    "EncodingError U+708D",
  );
  r = r && ([...ms932Encoder.encode("炎")].join(",") === "137,138"); // U+708E
  assertThrows(
    () => {
      ms932Encoder.encode("\u708F");
    },
    Error,
    "EncodingError U+708F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7090");
    },
    Error,
    "EncodingError U+7090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7091");
    },
    Error,
    "EncodingError U+7091",
  );
  r = r && ([...ms932Encoder.encode("炒")].join(",") === "224,117"); // U+7092
  assertThrows(
    () => {
      ms932Encoder.encode("\u7093");
    },
    Error,
    "EncodingError U+7093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7094");
    },
    Error,
    "EncodingError U+7094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7095");
    },
    Error,
    "EncodingError U+7095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7096");
    },
    Error,
    "EncodingError U+7096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7097");
    },
    Error,
    "EncodingError U+7097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7098");
    },
    Error,
    "EncodingError U+7098",
  );
  r = r && ([...ms932Encoder.encode("炙")].join(",") === "224,116"); // U+7099
  assertThrows(
    () => {
      ms932Encoder.encode("\u709A");
    },
    Error,
    "EncodingError U+709A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u709B");
    },
    Error,
    "EncodingError U+709B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u709C");
    },
    Error,
    "EncodingError U+709C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u709D");
    },
    Error,
    "EncodingError U+709D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u709E");
    },
    Error,
    "EncodingError U+709E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u709F");
    },
    Error,
    "EncodingError U+709F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70A0");
    },
    Error,
    "EncodingError U+70A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70A1");
    },
    Error,
    "EncodingError U+70A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70A2");
    },
    Error,
    "EncodingError U+70A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70A3");
    },
    Error,
    "EncodingError U+70A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70A4");
    },
    Error,
    "EncodingError U+70A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70A5");
    },
    Error,
    "EncodingError U+70A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70A6");
    },
    Error,
    "EncodingError U+70A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70A7");
    },
    Error,
    "EncodingError U+70A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70A8");
    },
    Error,
    "EncodingError U+70A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70A9");
    },
    Error,
    "EncodingError U+70A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70AA");
    },
    Error,
    "EncodingError U+70AA",
  );
  r = r &&
    ([...ms932Encoder.encode("炫炬炭炮炯")].join(",") ===
      "251,82,224,120,146,89,224,123,224,118"); // U+70AB
  assertThrows(
    () => {
      ms932Encoder.encode("\u70B0");
    },
    Error,
    "EncodingError U+70B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70B1");
    },
    Error,
    "EncodingError U+70B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70B2");
    },
    Error,
    "EncodingError U+70B2",
  );
  r = r && ([...ms932Encoder.encode("炳")].join(",") === "224,122"); // U+70B3
  assertThrows(
    () => {
      ms932Encoder.encode("\u70B4");
    },
    Error,
    "EncodingError U+70B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70B5");
    },
    Error,
    "EncodingError U+70B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70B6");
    },
    Error,
    "EncodingError U+70B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70B7");
    },
    Error,
    "EncodingError U+70B7",
  );
  r = r &&
    ([...ms932Encoder.encode("炸点為炻")].join(",") ===
      "224,121,147,95,136,215,250,98"); // U+70B8
  assertThrows(
    () => {
      ms932Encoder.encode("\u70BC");
    },
    Error,
    "EncodingError U+70BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70BD");
    },
    Error,
    "EncodingError U+70BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70BE");
    },
    Error,
    "EncodingError U+70BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70BF");
    },
    Error,
    "EncodingError U+70BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70C0");
    },
    Error,
    "EncodingError U+70C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70C1");
    },
    Error,
    "EncodingError U+70C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70C2");
    },
    Error,
    "EncodingError U+70C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70C3");
    },
    Error,
    "EncodingError U+70C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70C4");
    },
    Error,
    "EncodingError U+70C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70C5");
    },
    Error,
    "EncodingError U+70C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70C6");
    },
    Error,
    "EncodingError U+70C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70C7");
    },
    Error,
    "EncodingError U+70C7",
  );
  r = r && ([...ms932Encoder.encode("烈")].join(",") === "151,243"); // U+70C8
  assertThrows(
    () => {
      ms932Encoder.encode("\u70C9");
    },
    Error,
    "EncodingError U+70C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70CA");
    },
    Error,
    "EncodingError U+70CA",
  );
  r = r && ([...ms932Encoder.encode("烋")].join(",") === "224,125"); // U+70CB
  assertThrows(
    () => {
      ms932Encoder.encode("\u70CC");
    },
    Error,
    "EncodingError U+70CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70CD");
    },
    Error,
    "EncodingError U+70CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70CE");
    },
    Error,
    "EncodingError U+70CE",
  );
  r = r && ([...ms932Encoder.encode("烏")].join(",") === "137,71"); // U+70CF
  assertThrows(
    () => {
      ms932Encoder.encode("\u70D0");
    },
    Error,
    "EncodingError U+70D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70D1");
    },
    Error,
    "EncodingError U+70D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70D2");
    },
    Error,
    "EncodingError U+70D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70D3");
    },
    Error,
    "EncodingError U+70D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70D4");
    },
    Error,
    "EncodingError U+70D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70D5");
    },
    Error,
    "EncodingError U+70D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70D6");
    },
    Error,
    "EncodingError U+70D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70D7");
    },
    Error,
    "EncodingError U+70D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70D8");
    },
    Error,
    "EncodingError U+70D8",
  );
  r = r && ([...ms932Encoder.encode("烙")].join(",") === "224,128"); // U+70D9
  assertThrows(
    () => {
      ms932Encoder.encode("\u70DA");
    },
    Error,
    "EncodingError U+70DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70DB");
    },
    Error,
    "EncodingError U+70DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70DC");
    },
    Error,
    "EncodingError U+70DC",
  );
  r = r && ([...ms932Encoder.encode("烝")].join(",") === "224,126"); // U+70DD
  assertThrows(
    () => {
      ms932Encoder.encode("\u70DE");
    },
    Error,
    "EncodingError U+70DE",
  );
  r = r && ([...ms932Encoder.encode("烟")].join(",") === "224,124"); // U+70DF
  assertThrows(
    () => {
      ms932Encoder.encode("\u70E0");
    },
    Error,
    "EncodingError U+70E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70E1");
    },
    Error,
    "EncodingError U+70E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70E2");
    },
    Error,
    "EncodingError U+70E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70E3");
    },
    Error,
    "EncodingError U+70E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70E4");
    },
    Error,
    "EncodingError U+70E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70E5");
    },
    Error,
    "EncodingError U+70E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70E6");
    },
    Error,
    "EncodingError U+70E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70E7");
    },
    Error,
    "EncodingError U+70E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70E8");
    },
    Error,
    "EncodingError U+70E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70E9");
    },
    Error,
    "EncodingError U+70E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70EA");
    },
    Error,
    "EncodingError U+70EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70EB");
    },
    Error,
    "EncodingError U+70EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70EC");
    },
    Error,
    "EncodingError U+70EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70ED");
    },
    Error,
    "EncodingError U+70ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70EE");
    },
    Error,
    "EncodingError U+70EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70EF");
    },
    Error,
    "EncodingError U+70EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70F0");
    },
    Error,
    "EncodingError U+70F0",
  );
  r = r && ([...ms932Encoder.encode("烱")].join(",") === "224,119"); // U+70F1
  assertThrows(
    () => {
      ms932Encoder.encode("\u70F2");
    },
    Error,
    "EncodingError U+70F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70F3");
    },
    Error,
    "EncodingError U+70F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70F4");
    },
    Error,
    "EncodingError U+70F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70F5");
    },
    Error,
    "EncodingError U+70F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70F6");
    },
    Error,
    "EncodingError U+70F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70F7");
    },
    Error,
    "EncodingError U+70F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70F8");
    },
    Error,
    "EncodingError U+70F8",
  );
  r = r && ([...ms932Encoder.encode("烹")].join(",") === "150,66"); // U+70F9
  assertThrows(
    () => {
      ms932Encoder.encode("\u70FA");
    },
    Error,
    "EncodingError U+70FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70FB");
    },
    Error,
    "EncodingError U+70FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70FC");
    },
    Error,
    "EncodingError U+70FC",
  );
  r = r && ([...ms932Encoder.encode("烽")].join(",") === "224,130"); // U+70FD
  assertThrows(
    () => {
      ms932Encoder.encode("\u70FE");
    },
    Error,
    "EncodingError U+70FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u70FF");
    },
    Error,
    "EncodingError U+70FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7100");
    },
    Error,
    "EncodingError U+7100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7101");
    },
    Error,
    "EncodingError U+7101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7102");
    },
    Error,
    "EncodingError U+7102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7103");
    },
    Error,
    "EncodingError U+7103",
  );
  r = r && ([...ms932Encoder.encode("焄")].join(",") === "251,84"); // U+7104
  assertThrows(
    () => {
      ms932Encoder.encode("\u7105");
    },
    Error,
    "EncodingError U+7105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7106");
    },
    Error,
    "EncodingError U+7106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7107");
    },
    Error,
    "EncodingError U+7107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7108");
    },
    Error,
    "EncodingError U+7108",
  );
  r = r && ([...ms932Encoder.encode("焉")].join(",") === "224,129"); // U+7109
  assertThrows(
    () => {
      ms932Encoder.encode("\u710A");
    },
    Error,
    "EncodingError U+710A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u710B");
    },
    Error,
    "EncodingError U+710B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u710C");
    },
    Error,
    "EncodingError U+710C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u710D");
    },
    Error,
    "EncodingError U+710D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u710E");
    },
    Error,
    "EncodingError U+710E",
  );
  r = r && ([...ms932Encoder.encode("焏")].join(",") === "251,83"); // U+710F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7110");
    },
    Error,
    "EncodingError U+7110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7111");
    },
    Error,
    "EncodingError U+7111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7112");
    },
    Error,
    "EncodingError U+7112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7113");
    },
    Error,
    "EncodingError U+7113",
  );
  r = r && ([...ms932Encoder.encode("焔")].join(",") === "137,139"); // U+7114
  assertThrows(
    () => {
      ms932Encoder.encode("\u7115");
    },
    Error,
    "EncodingError U+7115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7116");
    },
    Error,
    "EncodingError U+7116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7117");
    },
    Error,
    "EncodingError U+7117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7118");
    },
    Error,
    "EncodingError U+7118",
  );
  r = r && ([...ms932Encoder.encode("焙焚")].join(",") === "224,132,149,176"); // U+7119
  assertThrows(
    () => {
      ms932Encoder.encode("\u711B");
    },
    Error,
    "EncodingError U+711B",
  );
  r = r && ([...ms932Encoder.encode("焜")].join(",") === "224,131"); // U+711C
  assertThrows(
    () => {
      ms932Encoder.encode("\u711D");
    },
    Error,
    "EncodingError U+711D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u711E");
    },
    Error,
    "EncodingError U+711E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u711F");
    },
    Error,
    "EncodingError U+711F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7120");
    },
    Error,
    "EncodingError U+7120",
  );
  r = r && ([...ms932Encoder.encode("無")].join(",") === "150,179"); // U+7121
  assertThrows(
    () => {
      ms932Encoder.encode("\u7122");
    },
    Error,
    "EncodingError U+7122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7123");
    },
    Error,
    "EncodingError U+7123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7124");
    },
    Error,
    "EncodingError U+7124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7125");
    },
    Error,
    "EncodingError U+7125",
  );
  r = r && ([...ms932Encoder.encode("焦")].join(",") === "143,197"); // U+7126
  assertThrows(
    () => {
      ms932Encoder.encode("\u7127");
    },
    Error,
    "EncodingError U+7127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7128");
    },
    Error,
    "EncodingError U+7128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7129");
    },
    Error,
    "EncodingError U+7129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u712A");
    },
    Error,
    "EncodingError U+712A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u712B");
    },
    Error,
    "EncodingError U+712B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u712C");
    },
    Error,
    "EncodingError U+712C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u712D");
    },
    Error,
    "EncodingError U+712D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u712E");
    },
    Error,
    "EncodingError U+712E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u712F");
    },
    Error,
    "EncodingError U+712F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7130");
    },
    Error,
    "EncodingError U+7130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7131");
    },
    Error,
    "EncodingError U+7131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7132");
    },
    Error,
    "EncodingError U+7132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7133");
    },
    Error,
    "EncodingError U+7133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7134");
    },
    Error,
    "EncodingError U+7134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7135");
    },
    Error,
    "EncodingError U+7135",
  );
  r = r && ([...ms932Encoder.encode("然")].join(",") === "145,82"); // U+7136
  assertThrows(
    () => {
      ms932Encoder.encode("\u7137");
    },
    Error,
    "EncodingError U+7137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7138");
    },
    Error,
    "EncodingError U+7138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7139");
    },
    Error,
    "EncodingError U+7139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u713A");
    },
    Error,
    "EncodingError U+713A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u713B");
    },
    Error,
    "EncodingError U+713B",
  );
  r = r && ([...ms932Encoder.encode("焼")].join(",") === "143,196"); // U+713C
  assertThrows(
    () => {
      ms932Encoder.encode("\u713D");
    },
    Error,
    "EncodingError U+713D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u713E");
    },
    Error,
    "EncodingError U+713E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u713F");
    },
    Error,
    "EncodingError U+713F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7140");
    },
    Error,
    "EncodingError U+7140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7141");
    },
    Error,
    "EncodingError U+7141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7142");
    },
    Error,
    "EncodingError U+7142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7143");
    },
    Error,
    "EncodingError U+7143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7144");
    },
    Error,
    "EncodingError U+7144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7145");
    },
    Error,
    "EncodingError U+7145",
  );
  r = r && ([...ms932Encoder.encode("煆煇")].join(",") === "251,86,251,87"); // U+7146
  assertThrows(
    () => {
      ms932Encoder.encode("\u7148");
    },
    Error,
    "EncodingError U+7148",
  );
  r = r && ([...ms932Encoder.encode("煉")].join(",") === "151,249"); // U+7149
  assertThrows(
    () => {
      ms932Encoder.encode("\u714A");
    },
    Error,
    "EncodingError U+714A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u714B");
    },
    Error,
    "EncodingError U+714B",
  );
  r = r && ([...ms932Encoder.encode("煌")].join(",") === "224,138"); // U+714C
  assertThrows(
    () => {
      ms932Encoder.encode("\u714D");
    },
    Error,
    "EncodingError U+714D",
  );
  r = r && ([...ms932Encoder.encode("煎")].join(",") === "144,247"); // U+714E
  assertThrows(
    () => {
      ms932Encoder.encode("\u714F");
    },
    Error,
    "EncodingError U+714F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7150");
    },
    Error,
    "EncodingError U+7150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7151");
    },
    Error,
    "EncodingError U+7151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7152");
    },
    Error,
    "EncodingError U+7152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7153");
    },
    Error,
    "EncodingError U+7153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7154");
    },
    Error,
    "EncodingError U+7154",
  );
  r = r && ([...ms932Encoder.encode("煕煖")].join(",") === "224,134,224,139"); // U+7155
  assertThrows(
    () => {
      ms932Encoder.encode("\u7157");
    },
    Error,
    "EncodingError U+7157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7158");
    },
    Error,
    "EncodingError U+7158",
  );
  r = r && ([...ms932Encoder.encode("煙")].join(",") === "137,140"); // U+7159
  assertThrows(
    () => {
      ms932Encoder.encode("\u715A");
    },
    Error,
    "EncodingError U+715A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u715B");
    },
    Error,
    "EncodingError U+715B",
  );
  r = r && ([...ms932Encoder.encode("煜")].join(",") === "251,85"); // U+715C
  assertThrows(
    () => {
      ms932Encoder.encode("\u715D");
    },
    Error,
    "EncodingError U+715D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u715E");
    },
    Error,
    "EncodingError U+715E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u715F");
    },
    Error,
    "EncodingError U+715F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7160");
    },
    Error,
    "EncodingError U+7160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7161");
    },
    Error,
    "EncodingError U+7161",
  );
  r = r && ([...ms932Encoder.encode("煢")].join(",") === "224,137"); // U+7162
  assertThrows(
    () => {
      ms932Encoder.encode("\u7163");
    },
    Error,
    "EncodingError U+7163",
  );
  r = r &&
    ([...ms932Encoder.encode("煤煥煦照")].join(",") ===
      "148,129,224,133,224,136,143,198"); // U+7164
  assertThrows(
    () => {
      ms932Encoder.encode("\u7168");
    },
    Error,
    "EncodingError U+7168",
  );
  r = r && ([...ms932Encoder.encode("煩")].join(",") === "148,207"); // U+7169
  assertThrows(
    () => {
      ms932Encoder.encode("\u716A");
    },
    Error,
    "EncodingError U+716A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u716B");
    },
    Error,
    "EncodingError U+716B",
  );
  r = r && ([...ms932Encoder.encode("煬")].join(",") === "224,140"); // U+716C
  assertThrows(
    () => {
      ms932Encoder.encode("\u716D");
    },
    Error,
    "EncodingError U+716D",
  );
  r = r && ([...ms932Encoder.encode("煮")].join(",") === "142,207"); // U+716E
  assertThrows(
    () => {
      ms932Encoder.encode("\u716F");
    },
    Error,
    "EncodingError U+716F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7170");
    },
    Error,
    "EncodingError U+7170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7171");
    },
    Error,
    "EncodingError U+7171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7172");
    },
    Error,
    "EncodingError U+7172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7173");
    },
    Error,
    "EncodingError U+7173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7174");
    },
    Error,
    "EncodingError U+7174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7175");
    },
    Error,
    "EncodingError U+7175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7176");
    },
    Error,
    "EncodingError U+7176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7177");
    },
    Error,
    "EncodingError U+7177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7178");
    },
    Error,
    "EncodingError U+7178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7179");
    },
    Error,
    "EncodingError U+7179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u717A");
    },
    Error,
    "EncodingError U+717A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u717B");
    },
    Error,
    "EncodingError U+717B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u717C");
    },
    Error,
    "EncodingError U+717C",
  );
  r = r && ([...ms932Encoder.encode("煽")].join(",") === "144,248"); // U+717D
  assertThrows(
    () => {
      ms932Encoder.encode("\u717E");
    },
    Error,
    "EncodingError U+717E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u717F");
    },
    Error,
    "EncodingError U+717F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7180");
    },
    Error,
    "EncodingError U+7180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7181");
    },
    Error,
    "EncodingError U+7181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7182");
    },
    Error,
    "EncodingError U+7182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7183");
    },
    Error,
    "EncodingError U+7183",
  );
  r = r && ([...ms932Encoder.encode("熄")].join(",") === "224,143"); // U+7184
  assertThrows(
    () => {
      ms932Encoder.encode("\u7185");
    },
    Error,
    "EncodingError U+7185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7186");
    },
    Error,
    "EncodingError U+7186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7187");
    },
    Error,
    "EncodingError U+7187",
  );
  r = r && ([...ms932Encoder.encode("熈")].join(",") === "224,135"); // U+7188
  assertThrows(
    () => {
      ms932Encoder.encode("\u7189");
    },
    Error,
    "EncodingError U+7189",
  );
  r = r && ([...ms932Encoder.encode("熊")].join(",") === "140,70"); // U+718A
  assertThrows(
    () => {
      ms932Encoder.encode("\u718B");
    },
    Error,
    "EncodingError U+718B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u718C");
    },
    Error,
    "EncodingError U+718C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u718D");
    },
    Error,
    "EncodingError U+718D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u718E");
    },
    Error,
    "EncodingError U+718E",
  );
  r = r && ([...ms932Encoder.encode("熏")].join(",") === "224,141"); // U+718F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7190");
    },
    Error,
    "EncodingError U+7190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7191");
    },
    Error,
    "EncodingError U+7191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7192");
    },
    Error,
    "EncodingError U+7192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7193");
    },
    Error,
    "EncodingError U+7193",
  );
  r = r && ([...ms932Encoder.encode("熔熕")].join(",") === "151,111,224,144"); // U+7194
  assertThrows(
    () => {
      ms932Encoder.encode("\u7196");
    },
    Error,
    "EncodingError U+7196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7197");
    },
    Error,
    "EncodingError U+7197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7198");
    },
    Error,
    "EncodingError U+7198",
  );
  r = r && ([...ms932Encoder.encode("熙")].join(",") === "234,164"); // U+7199
  assertThrows(
    () => {
      ms932Encoder.encode("\u719A");
    },
    Error,
    "EncodingError U+719A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u719B");
    },
    Error,
    "EncodingError U+719B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u719C");
    },
    Error,
    "EncodingError U+719C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u719D");
    },
    Error,
    "EncodingError U+719D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u719E");
    },
    Error,
    "EncodingError U+719E",
  );
  r = r && ([...ms932Encoder.encode("熟")].join(",") === "143,110"); // U+719F
  assertThrows(
    () => {
      ms932Encoder.encode("\u71A0");
    },
    Error,
    "EncodingError U+71A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71A1");
    },
    Error,
    "EncodingError U+71A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71A2");
    },
    Error,
    "EncodingError U+71A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71A3");
    },
    Error,
    "EncodingError U+71A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71A4");
    },
    Error,
    "EncodingError U+71A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71A5");
    },
    Error,
    "EncodingError U+71A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71A6");
    },
    Error,
    "EncodingError U+71A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71A7");
    },
    Error,
    "EncodingError U+71A7",
  );
  r = r && ([...ms932Encoder.encode("熨")].join(",") === "224,145"); // U+71A8
  assertThrows(
    () => {
      ms932Encoder.encode("\u71A9");
    },
    Error,
    "EncodingError U+71A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71AA");
    },
    Error,
    "EncodingError U+71AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71AB");
    },
    Error,
    "EncodingError U+71AB",
  );
  r = r && ([...ms932Encoder.encode("熬")].join(",") === "224,146"); // U+71AC
  assertThrows(
    () => {
      ms932Encoder.encode("\u71AD");
    },
    Error,
    "EncodingError U+71AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71AE");
    },
    Error,
    "EncodingError U+71AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71AF");
    },
    Error,
    "EncodingError U+71AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71B0");
    },
    Error,
    "EncodingError U+71B0",
  );
  r = r && ([...ms932Encoder.encode("熱")].join(",") === "148,77"); // U+71B1
  assertThrows(
    () => {
      ms932Encoder.encode("\u71B2");
    },
    Error,
    "EncodingError U+71B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71B3");
    },
    Error,
    "EncodingError U+71B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71B4");
    },
    Error,
    "EncodingError U+71B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71B5");
    },
    Error,
    "EncodingError U+71B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71B6");
    },
    Error,
    "EncodingError U+71B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71B7");
    },
    Error,
    "EncodingError U+71B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71B8");
    },
    Error,
    "EncodingError U+71B8",
  );
  r = r && ([...ms932Encoder.encode("熹")].join(",") === "224,148"); // U+71B9
  assertThrows(
    () => {
      ms932Encoder.encode("\u71BA");
    },
    Error,
    "EncodingError U+71BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71BB");
    },
    Error,
    "EncodingError U+71BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71BC");
    },
    Error,
    "EncodingError U+71BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71BD");
    },
    Error,
    "EncodingError U+71BD",
  );
  r = r && ([...ms932Encoder.encode("熾")].join(",") === "224,149"); // U+71BE
  assertThrows(
    () => {
      ms932Encoder.encode("\u71BF");
    },
    Error,
    "EncodingError U+71BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71C0");
    },
    Error,
    "EncodingError U+71C0",
  );
  r = r && ([...ms932Encoder.encode("燁")].join(",") === "251,89"); // U+71C1
  assertThrows(
    () => {
      ms932Encoder.encode("\u71C2");
    },
    Error,
    "EncodingError U+71C2",
  );
  r = r && ([...ms932Encoder.encode("燃")].join(",") === "148,82"); // U+71C3
  assertThrows(
    () => {
      ms932Encoder.encode("\u71C4");
    },
    Error,
    "EncodingError U+71C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71C5");
    },
    Error,
    "EncodingError U+71C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71C6");
    },
    Error,
    "EncodingError U+71C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71C7");
    },
    Error,
    "EncodingError U+71C7",
  );
  r = r && ([...ms932Encoder.encode("燈燉")].join(",") === "147,149,224,151"); // U+71C8
  assertThrows(
    () => {
      ms932Encoder.encode("\u71CA");
    },
    Error,
    "EncodingError U+71CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71CB");
    },
    Error,
    "EncodingError U+71CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71CC");
    },
    Error,
    "EncodingError U+71CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71CD");
    },
    Error,
    "EncodingError U+71CD",
  );
  r = r && ([...ms932Encoder.encode("燎")].join(",") === "224,153"); // U+71CE
  assertThrows(
    () => {
      ms932Encoder.encode("\u71CF");
    },
    Error,
    "EncodingError U+71CF",
  );
  r = r && ([...ms932Encoder.encode("燐")].join(",") === "151,211"); // U+71D0
  assertThrows(
    () => {
      ms932Encoder.encode("\u71D1");
    },
    Error,
    "EncodingError U+71D1",
  );
  r = r && ([...ms932Encoder.encode("燒")].join(",") === "224,150"); // U+71D2
  assertThrows(
    () => {
      ms932Encoder.encode("\u71D3");
    },
    Error,
    "EncodingError U+71D3",
  );
  r = r && ([...ms932Encoder.encode("燔燕")].join(",") === "224,152,137,141"); // U+71D4
  assertThrows(
    () => {
      ms932Encoder.encode("\u71D6");
    },
    Error,
    "EncodingError U+71D6",
  );
  r = r && ([...ms932Encoder.encode("燗")].join(",") === "224,147"); // U+71D7
  assertThrows(
    () => {
      ms932Encoder.encode("\u71D8");
    },
    Error,
    "EncodingError U+71D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71D9");
    },
    Error,
    "EncodingError U+71D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71DA");
    },
    Error,
    "EncodingError U+71DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71DB");
    },
    Error,
    "EncodingError U+71DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71DC");
    },
    Error,
    "EncodingError U+71DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71DD");
    },
    Error,
    "EncodingError U+71DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71DE");
    },
    Error,
    "EncodingError U+71DE",
  );
  r = r && ([...ms932Encoder.encode("營燠")].join(",") === "154,122,224,154"); // U+71DF
  assertThrows(
    () => {
      ms932Encoder.encode("\u71E1");
    },
    Error,
    "EncodingError U+71E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71E2");
    },
    Error,
    "EncodingError U+71E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71E3");
    },
    Error,
    "EncodingError U+71E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71E4");
    },
    Error,
    "EncodingError U+71E4",
  );
  r = r &&
    ([...ms932Encoder.encode("燥燦燧")].join(",") === "145,135,142,87,224,156"); // U+71E5
  assertThrows(
    () => {
      ms932Encoder.encode("\u71E8");
    },
    Error,
    "EncodingError U+71E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71E9");
    },
    Error,
    "EncodingError U+71E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71EA");
    },
    Error,
    "EncodingError U+71EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71EB");
    },
    Error,
    "EncodingError U+71EB",
  );
  r = r &&
    ([...ms932Encoder.encode("燬燭燮")].join(",") === "224,155,144,67,153,215"); // U+71EC
  assertThrows(
    () => {
      ms932Encoder.encode("\u71EF");
    },
    Error,
    "EncodingError U+71EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71F0");
    },
    Error,
    "EncodingError U+71F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71F1");
    },
    Error,
    "EncodingError U+71F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71F2");
    },
    Error,
    "EncodingError U+71F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71F3");
    },
    Error,
    "EncodingError U+71F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71F4");
    },
    Error,
    "EncodingError U+71F4",
  );
  r = r && ([...ms932Encoder.encode("燵")].join(",") === "224,157"); // U+71F5
  assertThrows(
    () => {
      ms932Encoder.encode("\u71F6");
    },
    Error,
    "EncodingError U+71F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71F7");
    },
    Error,
    "EncodingError U+71F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u71F8");
    },
    Error,
    "EncodingError U+71F8",
  );
  r = r && ([...ms932Encoder.encode("燹")].join(",") === "224,159"); // U+71F9
  assertThrows(
    () => {
      ms932Encoder.encode("\u71FA");
    },
    Error,
    "EncodingError U+71FA",
  );
  r = r && ([...ms932Encoder.encode("燻燼")].join(",") === "224,142,224,158"); // U+71FB
  assertThrows(
    () => {
      ms932Encoder.encode("\u71FD");
    },
    Error,
    "EncodingError U+71FD",
  );
  r = r && ([...ms932Encoder.encode("燾燿")].join(",") === "251,90,224,160"); // U+71FE
  assertThrows(
    () => {
      ms932Encoder.encode("\u7200");
    },
    Error,
    "EncodingError U+7200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7201");
    },
    Error,
    "EncodingError U+7201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7202");
    },
    Error,
    "EncodingError U+7202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7203");
    },
    Error,
    "EncodingError U+7203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7204");
    },
    Error,
    "EncodingError U+7204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7205");
    },
    Error,
    "EncodingError U+7205",
  );
  r = r && ([...ms932Encoder.encode("爆")].join(",") === "148,154"); // U+7206
  assertThrows(
    () => {
      ms932Encoder.encode("\u7207");
    },
    Error,
    "EncodingError U+7207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7208");
    },
    Error,
    "EncodingError U+7208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7209");
    },
    Error,
    "EncodingError U+7209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u720A");
    },
    Error,
    "EncodingError U+720A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u720B");
    },
    Error,
    "EncodingError U+720B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u720C");
    },
    Error,
    "EncodingError U+720C",
  );
  r = r && ([...ms932Encoder.encode("爍")].join(",") === "224,161"); // U+720D
  assertThrows(
    () => {
      ms932Encoder.encode("\u720E");
    },
    Error,
    "EncodingError U+720E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u720F");
    },
    Error,
    "EncodingError U+720F",
  );
  r = r && ([...ms932Encoder.encode("爐")].join(",") === "224,162"); // U+7210
  assertThrows(
    () => {
      ms932Encoder.encode("\u7211");
    },
    Error,
    "EncodingError U+7211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7212");
    },
    Error,
    "EncodingError U+7212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7213");
    },
    Error,
    "EncodingError U+7213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7214");
    },
    Error,
    "EncodingError U+7214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7215");
    },
    Error,
    "EncodingError U+7215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7216");
    },
    Error,
    "EncodingError U+7216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7217");
    },
    Error,
    "EncodingError U+7217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7218");
    },
    Error,
    "EncodingError U+7218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7219");
    },
    Error,
    "EncodingError U+7219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u721A");
    },
    Error,
    "EncodingError U+721A",
  );
  r = r && ([...ms932Encoder.encode("爛")].join(",") === "224,163"); // U+721B
  assertThrows(
    () => {
      ms932Encoder.encode("\u721C");
    },
    Error,
    "EncodingError U+721C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u721D");
    },
    Error,
    "EncodingError U+721D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u721E");
    },
    Error,
    "EncodingError U+721E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u721F");
    },
    Error,
    "EncodingError U+721F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7220");
    },
    Error,
    "EncodingError U+7220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7221");
    },
    Error,
    "EncodingError U+7221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7222");
    },
    Error,
    "EncodingError U+7222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7223");
    },
    Error,
    "EncodingError U+7223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7224");
    },
    Error,
    "EncodingError U+7224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7225");
    },
    Error,
    "EncodingError U+7225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7226");
    },
    Error,
    "EncodingError U+7226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7227");
    },
    Error,
    "EncodingError U+7227",
  );
  r = r && ([...ms932Encoder.encode("爨")].join(",") === "224,164"); // U+7228
  assertThrows(
    () => {
      ms932Encoder.encode("\u7229");
    },
    Error,
    "EncodingError U+7229",
  );
  r = r && ([...ms932Encoder.encode("爪")].join(",") === "146,220"); // U+722A
  assertThrows(
    () => {
      ms932Encoder.encode("\u722B");
    },
    Error,
    "EncodingError U+722B",
  );
  r = r && ([...ms932Encoder.encode("爬爭")].join(",") === "224,166,224,165"); // U+722C
  assertThrows(
    () => {
      ms932Encoder.encode("\u722E");
    },
    Error,
    "EncodingError U+722E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u722F");
    },
    Error,
    "EncodingError U+722F",
  );
  r = r && ([...ms932Encoder.encode("爰")].join(",") === "224,167"); // U+7230
  assertThrows(
    () => {
      ms932Encoder.encode("\u7231");
    },
    Error,
    "EncodingError U+7231",
  );
  r = r && ([...ms932Encoder.encode("爲")].join(",") === "224,168"); // U+7232
  assertThrows(
    () => {
      ms932Encoder.encode("\u7233");
    },
    Error,
    "EncodingError U+7233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7234");
    },
    Error,
    "EncodingError U+7234",
  );
  r = r && ([...ms932Encoder.encode("爵父")].join(",") === "142,221,149,131"); // U+7235
  assertThrows(
    () => {
      ms932Encoder.encode("\u7237");
    },
    Error,
    "EncodingError U+7237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7238");
    },
    Error,
    "EncodingError U+7238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7239");
    },
    Error,
    "EncodingError U+7239",
  );
  r = r &&
    ([...ms932Encoder.encode("爺爻爼爽爾爿牀")].join(",") ===
      "150,234,224,169,224,170,145,117,142,162,224,171,224,172"); // U+723A
  assertThrows(
    () => {
      ms932Encoder.encode("\u7241");
    },
    Error,
    "EncodingError U+7241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7242");
    },
    Error,
    "EncodingError U+7242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7243");
    },
    Error,
    "EncodingError U+7243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7244");
    },
    Error,
    "EncodingError U+7244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7245");
    },
    Error,
    "EncodingError U+7245",
  );
  r = r &&
    ([...ms932Encoder.encode("牆片版")].join(",") === "224,173,149,208,148,197"); // U+7246
  assertThrows(
    () => {
      ms932Encoder.encode("\u7249");
    },
    Error,
    "EncodingError U+7249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u724A");
    },
    Error,
    "EncodingError U+724A",
  );
  r = r && ([...ms932Encoder.encode("牋牌")].join(",") === "224,174,148,118"); // U+724B
  assertThrows(
    () => {
      ms932Encoder.encode("\u724D");
    },
    Error,
    "EncodingError U+724D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u724E");
    },
    Error,
    "EncodingError U+724E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u724F");
    },
    Error,
    "EncodingError U+724F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7250");
    },
    Error,
    "EncodingError U+7250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7251");
    },
    Error,
    "EncodingError U+7251",
  );
  r = r && ([...ms932Encoder.encode("牒")].join(",") === "146,171"); // U+7252
  assertThrows(
    () => {
      ms932Encoder.encode("\u7253");
    },
    Error,
    "EncodingError U+7253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7254");
    },
    Error,
    "EncodingError U+7254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7255");
    },
    Error,
    "EncodingError U+7255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7256");
    },
    Error,
    "EncodingError U+7256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7257");
    },
    Error,
    "EncodingError U+7257",
  );
  r = r && ([...ms932Encoder.encode("牘牙")].join(",") === "224,175,137,229"); // U+7258
  assertThrows(
    () => {
      ms932Encoder.encode("\u725A");
    },
    Error,
    "EncodingError U+725A",
  );
  r = r && ([...ms932Encoder.encode("牛")].join(",") === "139,141"); // U+725B
  assertThrows(
    () => {
      ms932Encoder.encode("\u725C");
    },
    Error,
    "EncodingError U+725C",
  );
  r = r && ([...ms932Encoder.encode("牝")].join(",") === "150,196"); // U+725D
  assertThrows(
    () => {
      ms932Encoder.encode("\u725E");
    },
    Error,
    "EncodingError U+725E",
  );
  r = r && ([...ms932Encoder.encode("牟")].join(",") === "150,180"); // U+725F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7260");
    },
    Error,
    "EncodingError U+7260",
  );
  r = r && ([...ms932Encoder.encode("牡牢")].join(",") === "137,178,152,83"); // U+7261
  assertThrows(
    () => {
      ms932Encoder.encode("\u7263");
    },
    Error,
    "EncodingError U+7263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7264");
    },
    Error,
    "EncodingError U+7264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7265");
    },
    Error,
    "EncodingError U+7265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7266");
    },
    Error,
    "EncodingError U+7266",
  );
  r = r && ([...ms932Encoder.encode("牧")].join(",") === "150,113"); // U+7267
  assertThrows(
    () => {
      ms932Encoder.encode("\u7268");
    },
    Error,
    "EncodingError U+7268",
  );
  r = r && ([...ms932Encoder.encode("物")].join(",") === "149,168"); // U+7269
  assertThrows(
    () => {
      ms932Encoder.encode("\u726A");
    },
    Error,
    "EncodingError U+726A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u726B");
    },
    Error,
    "EncodingError U+726B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u726C");
    },
    Error,
    "EncodingError U+726C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u726D");
    },
    Error,
    "EncodingError U+726D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u726E");
    },
    Error,
    "EncodingError U+726E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u726F");
    },
    Error,
    "EncodingError U+726F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7270");
    },
    Error,
    "EncodingError U+7270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7271");
    },
    Error,
    "EncodingError U+7271",
  );
  r = r && ([...ms932Encoder.encode("牲")].join(",") === "144,181"); // U+7272
  assertThrows(
    () => {
      ms932Encoder.encode("\u7273");
    },
    Error,
    "EncodingError U+7273",
  );
  r = r && ([...ms932Encoder.encode("牴")].join(",") === "224,176"); // U+7274
  assertThrows(
    () => {
      ms932Encoder.encode("\u7275");
    },
    Error,
    "EncodingError U+7275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7276");
    },
    Error,
    "EncodingError U+7276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7277");
    },
    Error,
    "EncodingError U+7277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7278");
    },
    Error,
    "EncodingError U+7278",
  );
  r = r && ([...ms932Encoder.encode("特")].join(",") === "147,193"); // U+7279
  assertThrows(
    () => {
      ms932Encoder.encode("\u727A");
    },
    Error,
    "EncodingError U+727A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u727B");
    },
    Error,
    "EncodingError U+727B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u727C");
    },
    Error,
    "EncodingError U+727C",
  );
  r = r && ([...ms932Encoder.encode("牽牾")].join(",") === "140,161,224,177"); // U+727D
  assertThrows(
    () => {
      ms932Encoder.encode("\u727F");
    },
    Error,
    "EncodingError U+727F",
  );
  r = r &&
    ([...ms932Encoder.encode("犀犁犂")].join(",") === "141,210,224,179,224,178"); // U+7280
  assertThrows(
    () => {
      ms932Encoder.encode("\u7283");
    },
    Error,
    "EncodingError U+7283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7284");
    },
    Error,
    "EncodingError U+7284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7285");
    },
    Error,
    "EncodingError U+7285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7286");
    },
    Error,
    "EncodingError U+7286",
  );
  r = r && ([...ms932Encoder.encode("犇")].join(",") === "224,180"); // U+7287
  assertThrows(
    () => {
      ms932Encoder.encode("\u7288");
    },
    Error,
    "EncodingError U+7288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7289");
    },
    Error,
    "EncodingError U+7289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u728A");
    },
    Error,
    "EncodingError U+728A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u728B");
    },
    Error,
    "EncodingError U+728B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u728C");
    },
    Error,
    "EncodingError U+728C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u728D");
    },
    Error,
    "EncodingError U+728D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u728E");
    },
    Error,
    "EncodingError U+728E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u728F");
    },
    Error,
    "EncodingError U+728F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7290");
    },
    Error,
    "EncodingError U+7290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7291");
    },
    Error,
    "EncodingError U+7291",
  );
  r = r && ([...ms932Encoder.encode("犒")].join(",") === "224,181"); // U+7292
  assertThrows(
    () => {
      ms932Encoder.encode("\u7293");
    },
    Error,
    "EncodingError U+7293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7294");
    },
    Error,
    "EncodingError U+7294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7295");
    },
    Error,
    "EncodingError U+7295",
  );
  r = r && ([...ms932Encoder.encode("犖")].join(",") === "224,182"); // U+7296
  assertThrows(
    () => {
      ms932Encoder.encode("\u7297");
    },
    Error,
    "EncodingError U+7297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7298");
    },
    Error,
    "EncodingError U+7298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7299");
    },
    Error,
    "EncodingError U+7299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u729A");
    },
    Error,
    "EncodingError U+729A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u729B");
    },
    Error,
    "EncodingError U+729B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u729C");
    },
    Error,
    "EncodingError U+729C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u729D");
    },
    Error,
    "EncodingError U+729D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u729E");
    },
    Error,
    "EncodingError U+729E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u729F");
    },
    Error,
    "EncodingError U+729F",
  );
  r = r && ([...ms932Encoder.encode("犠")].join(",") === "139,93"); // U+72A0
  assertThrows(
    () => {
      ms932Encoder.encode("\u72A1");
    },
    Error,
    "EncodingError U+72A1",
  );
  r = r && ([...ms932Encoder.encode("犢")].join(",") === "224,183"); // U+72A2
  assertThrows(
    () => {
      ms932Encoder.encode("\u72A3");
    },
    Error,
    "EncodingError U+72A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72A4");
    },
    Error,
    "EncodingError U+72A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72A5");
    },
    Error,
    "EncodingError U+72A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72A6");
    },
    Error,
    "EncodingError U+72A6",
  );
  r = r && ([...ms932Encoder.encode("犧")].join(",") === "224,184"); // U+72A7
  assertThrows(
    () => {
      ms932Encoder.encode("\u72A8");
    },
    Error,
    "EncodingError U+72A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72A9");
    },
    Error,
    "EncodingError U+72A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72AA");
    },
    Error,
    "EncodingError U+72AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72AB");
    },
    Error,
    "EncodingError U+72AB",
  );
  r = r && ([...ms932Encoder.encode("犬")].join(",") === "140,162"); // U+72AC
  assertThrows(
    () => {
      ms932Encoder.encode("\u72AD");
    },
    Error,
    "EncodingError U+72AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72AE");
    },
    Error,
    "EncodingError U+72AE",
  );
  r = r && ([...ms932Encoder.encode("犯")].join(",") === "148,198"); // U+72AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u72B0");
    },
    Error,
    "EncodingError U+72B0",
  );
  r = r && ([...ms932Encoder.encode("犱犲")].join(",") === "251,91,224,186"); // U+72B1
  assertThrows(
    () => {
      ms932Encoder.encode("\u72B3");
    },
    Error,
    "EncodingError U+72B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72B4");
    },
    Error,
    "EncodingError U+72B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72B5");
    },
    Error,
    "EncodingError U+72B5",
  );
  r = r && ([...ms932Encoder.encode("状")].join(",") === "143,243"); // U+72B6
  assertThrows(
    () => {
      ms932Encoder.encode("\u72B7");
    },
    Error,
    "EncodingError U+72B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72B8");
    },
    Error,
    "EncodingError U+72B8",
  );
  r = r && ([...ms932Encoder.encode("犹")].join(",") === "224,185"); // U+72B9
  assertThrows(
    () => {
      ms932Encoder.encode("\u72BA");
    },
    Error,
    "EncodingError U+72BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72BB");
    },
    Error,
    "EncodingError U+72BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72BC");
    },
    Error,
    "EncodingError U+72BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72BD");
    },
    Error,
    "EncodingError U+72BD",
  );
  r = r && ([...ms932Encoder.encode("犾")].join(",") === "251,92"); // U+72BE
  assertThrows(
    () => {
      ms932Encoder.encode("\u72BF");
    },
    Error,
    "EncodingError U+72BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72C0");
    },
    Error,
    "EncodingError U+72C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72C1");
    },
    Error,
    "EncodingError U+72C1",
  );
  r = r &&
    ([...ms932Encoder.encode("狂狃狄")].join(",") === "139,182,224,187,224,189"); // U+72C2
  assertThrows(
    () => {
      ms932Encoder.encode("\u72C5");
    },
    Error,
    "EncodingError U+72C5",
  );
  r = r && ([...ms932Encoder.encode("狆")].join(",") === "224,188"); // U+72C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u72C7");
    },
    Error,
    "EncodingError U+72C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72C8");
    },
    Error,
    "EncodingError U+72C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72C9");
    },
    Error,
    "EncodingError U+72C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72CA");
    },
    Error,
    "EncodingError U+72CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72CB");
    },
    Error,
    "EncodingError U+72CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72CC");
    },
    Error,
    "EncodingError U+72CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72CD");
    },
    Error,
    "EncodingError U+72CD",
  );
  r = r && ([...ms932Encoder.encode("狎")].join(",") === "224,190"); // U+72CE
  assertThrows(
    () => {
      ms932Encoder.encode("\u72CF");
    },
    Error,
    "EncodingError U+72CF",
  );
  r = r && ([...ms932Encoder.encode("狐")].join(",") === "140,207"); // U+72D0
  assertThrows(
    () => {
      ms932Encoder.encode("\u72D1");
    },
    Error,
    "EncodingError U+72D1",
  );
  r = r && ([...ms932Encoder.encode("狒")].join(",") === "224,191"); // U+72D2
  assertThrows(
    () => {
      ms932Encoder.encode("\u72D3");
    },
    Error,
    "EncodingError U+72D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72D4");
    },
    Error,
    "EncodingError U+72D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72D5");
    },
    Error,
    "EncodingError U+72D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72D6");
    },
    Error,
    "EncodingError U+72D6",
  );
  r = r && ([...ms932Encoder.encode("狗")].join(",") === "139,231"); // U+72D7
  assertThrows(
    () => {
      ms932Encoder.encode("\u72D8");
    },
    Error,
    "EncodingError U+72D8",
  );
  r = r && ([...ms932Encoder.encode("狙")].join(",") === "145,95"); // U+72D9
  assertThrows(
    () => {
      ms932Encoder.encode("\u72DA");
    },
    Error,
    "EncodingError U+72DA",
  );
  r = r && ([...ms932Encoder.encode("狛")].join(",") === "141,157"); // U+72DB
  assertThrows(
    () => {
      ms932Encoder.encode("\u72DC");
    },
    Error,
    "EncodingError U+72DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72DD");
    },
    Error,
    "EncodingError U+72DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72DE");
    },
    Error,
    "EncodingError U+72DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72DF");
    },
    Error,
    "EncodingError U+72DF",
  );
  r = r &&
    ([...ms932Encoder.encode("狠狡狢")].join(",") === "224,193,224,194,224,192"); // U+72E0
  assertThrows(
    () => {
      ms932Encoder.encode("\u72E3");
    },
    Error,
    "EncodingError U+72E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72E4");
    },
    Error,
    "EncodingError U+72E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72E5");
    },
    Error,
    "EncodingError U+72E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72E6");
    },
    Error,
    "EncodingError U+72E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72E7");
    },
    Error,
    "EncodingError U+72E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72E8");
    },
    Error,
    "EncodingError U+72E8",
  );
  r = r && ([...ms932Encoder.encode("狩")].join(",") === "142,235"); // U+72E9
  assertThrows(
    () => {
      ms932Encoder.encode("\u72EA");
    },
    Error,
    "EncodingError U+72EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72EB");
    },
    Error,
    "EncodingError U+72EB",
  );
  r = r && ([...ms932Encoder.encode("独狭")].join(",") === "147,198,139,183"); // U+72EC
  assertThrows(
    () => {
      ms932Encoder.encode("\u72EE");
    },
    Error,
    "EncodingError U+72EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72EF");
    },
    Error,
    "EncodingError U+72EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72F0");
    },
    Error,
    "EncodingError U+72F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72F1");
    },
    Error,
    "EncodingError U+72F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72F2");
    },
    Error,
    "EncodingError U+72F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72F3");
    },
    Error,
    "EncodingError U+72F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72F4");
    },
    Error,
    "EncodingError U+72F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72F5");
    },
    Error,
    "EncodingError U+72F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72F6");
    },
    Error,
    "EncodingError U+72F6",
  );
  r = r &&
    ([...ms932Encoder.encode("狷狸狹")].join(",") === "224,196,146,75,224,195"); // U+72F7
  assertThrows(
    () => {
      ms932Encoder.encode("\u72FA");
    },
    Error,
    "EncodingError U+72FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72FB");
    },
    Error,
    "EncodingError U+72FB",
  );
  r = r && ([...ms932Encoder.encode("狼狽")].join(",") === "152,84,148,130"); // U+72FC
  assertThrows(
    () => {
      ms932Encoder.encode("\u72FE");
    },
    Error,
    "EncodingError U+72FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u72FF");
    },
    Error,
    "EncodingError U+72FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7300");
    },
    Error,
    "EncodingError U+7300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7301");
    },
    Error,
    "EncodingError U+7301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7302");
    },
    Error,
    "EncodingError U+7302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7303");
    },
    Error,
    "EncodingError U+7303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7304");
    },
    Error,
    "EncodingError U+7304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7305");
    },
    Error,
    "EncodingError U+7305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7306");
    },
    Error,
    "EncodingError U+7306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7307");
    },
    Error,
    "EncodingError U+7307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7308");
    },
    Error,
    "EncodingError U+7308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7309");
    },
    Error,
    "EncodingError U+7309",
  );
  r = r && ([...ms932Encoder.encode("猊")].join(",") === "224,199"); // U+730A
  assertThrows(
    () => {
      ms932Encoder.encode("\u730B");
    },
    Error,
    "EncodingError U+730B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u730C");
    },
    Error,
    "EncodingError U+730C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u730D");
    },
    Error,
    "EncodingError U+730D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u730E");
    },
    Error,
    "EncodingError U+730E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u730F");
    },
    Error,
    "EncodingError U+730F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7310");
    },
    Error,
    "EncodingError U+7310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7311");
    },
    Error,
    "EncodingError U+7311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7312");
    },
    Error,
    "EncodingError U+7312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7313");
    },
    Error,
    "EncodingError U+7313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7314");
    },
    Error,
    "EncodingError U+7314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7315");
    },
    Error,
    "EncodingError U+7315",
  );
  r = r && ([...ms932Encoder.encode("猖猗")].join(",") === "224,201,224,198"); // U+7316
  assertThrows(
    () => {
      ms932Encoder.encode("\u7318");
    },
    Error,
    "EncodingError U+7318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7319");
    },
    Error,
    "EncodingError U+7319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u731A");
    },
    Error,
    "EncodingError U+731A",
  );
  r = r &&
    ([...ms932Encoder.encode("猛猜猝")].join(",") === "150,210,224,200,224,202"); // U+731B
  assertThrows(
    () => {
      ms932Encoder.encode("\u731E");
    },
    Error,
    "EncodingError U+731E",
  );
  r = r && ([...ms932Encoder.encode("猟")].join(",") === "151,194"); // U+731F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7320");
    },
    Error,
    "EncodingError U+7320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7321");
    },
    Error,
    "EncodingError U+7321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7322");
    },
    Error,
    "EncodingError U+7322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7323");
    },
    Error,
    "EncodingError U+7323",
  );
  r = r && ([...ms932Encoder.encode("猤猥")].join(",") === "251,93,224,206"); // U+7324
  assertThrows(
    () => {
      ms932Encoder.encode("\u7326");
    },
    Error,
    "EncodingError U+7326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7327");
    },
    Error,
    "EncodingError U+7327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7328");
    },
    Error,
    "EncodingError U+7328",
  );
  r = r &&
    ([...ms932Encoder.encode("猩猪猫")].join(",") === "224,205,146,150,148,76"); // U+7329
  assertThrows(
    () => {
      ms932Encoder.encode("\u732C");
    },
    Error,
    "EncodingError U+732C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u732D");
    },
    Error,
    "EncodingError U+732D",
  );
  r = r && ([...ms932Encoder.encode("献猯")].join(",") === "140,163,224,204"); // U+732E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7330");
    },
    Error,
    "EncodingError U+7330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7331");
    },
    Error,
    "EncodingError U+7331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7332");
    },
    Error,
    "EncodingError U+7332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7333");
    },
    Error,
    "EncodingError U+7333",
  );
  r = r && ([...ms932Encoder.encode("猴")].join(",") === "224,203"); // U+7334
  assertThrows(
    () => {
      ms932Encoder.encode("\u7335");
    },
    Error,
    "EncodingError U+7335",
  );
  r = r && ([...ms932Encoder.encode("猶猷")].join(",") === "151,80,151,81"); // U+7336
  assertThrows(
    () => {
      ms932Encoder.encode("\u7338");
    },
    Error,
    "EncodingError U+7338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7339");
    },
    Error,
    "EncodingError U+7339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u733A");
    },
    Error,
    "EncodingError U+733A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u733B");
    },
    Error,
    "EncodingError U+733B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u733C");
    },
    Error,
    "EncodingError U+733C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u733D");
    },
    Error,
    "EncodingError U+733D",
  );
  r = r && ([...ms932Encoder.encode("猾猿")].join(",") === "224,207,137,142"); // U+733E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7340");
    },
    Error,
    "EncodingError U+7340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7341");
    },
    Error,
    "EncodingError U+7341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7342");
    },
    Error,
    "EncodingError U+7342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7343");
    },
    Error,
    "EncodingError U+7343",
  );
  r = r && ([...ms932Encoder.encode("獄獅")].join(",") === "141,150,142,130"); // U+7344
  assertThrows(
    () => {
      ms932Encoder.encode("\u7346");
    },
    Error,
    "EncodingError U+7346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7347");
    },
    Error,
    "EncodingError U+7347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7348");
    },
    Error,
    "EncodingError U+7348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7349");
    },
    Error,
    "EncodingError U+7349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u734A");
    },
    Error,
    "EncodingError U+734A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u734B");
    },
    Error,
    "EncodingError U+734B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u734C");
    },
    Error,
    "EncodingError U+734C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u734D");
    },
    Error,
    "EncodingError U+734D",
  );
  r = r && ([...ms932Encoder.encode("獎獏")].join(",") === "224,208,224,209"); // U+734E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7350");
    },
    Error,
    "EncodingError U+7350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7351");
    },
    Error,
    "EncodingError U+7351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7352");
    },
    Error,
    "EncodingError U+7352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7353");
    },
    Error,
    "EncodingError U+7353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7354");
    },
    Error,
    "EncodingError U+7354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7355");
    },
    Error,
    "EncodingError U+7355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7356");
    },
    Error,
    "EncodingError U+7356",
  );
  r = r && ([...ms932Encoder.encode("獗")].join(",") === "224,211"); // U+7357
  assertThrows(
    () => {
      ms932Encoder.encode("\u7358");
    },
    Error,
    "EncodingError U+7358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7359");
    },
    Error,
    "EncodingError U+7359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u735A");
    },
    Error,
    "EncodingError U+735A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u735B");
    },
    Error,
    "EncodingError U+735B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u735C");
    },
    Error,
    "EncodingError U+735C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u735D");
    },
    Error,
    "EncodingError U+735D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u735E");
    },
    Error,
    "EncodingError U+735E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u735F");
    },
    Error,
    "EncodingError U+735F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7360");
    },
    Error,
    "EncodingError U+7360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7361");
    },
    Error,
    "EncodingError U+7361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7362");
    },
    Error,
    "EncodingError U+7362",
  );
  r = r && ([...ms932Encoder.encode("獣")].join(",") === "143,98"); // U+7363
  assertThrows(
    () => {
      ms932Encoder.encode("\u7364");
    },
    Error,
    "EncodingError U+7364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7365");
    },
    Error,
    "EncodingError U+7365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7366");
    },
    Error,
    "EncodingError U+7366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7367");
    },
    Error,
    "EncodingError U+7367",
  );
  r = r && ([...ms932Encoder.encode("獨")].join(",") === "224,213"); // U+7368
  assertThrows(
    () => {
      ms932Encoder.encode("\u7369");
    },
    Error,
    "EncodingError U+7369",
  );
  r = r && ([...ms932Encoder.encode("獪")].join(",") === "224,212"); // U+736A
  assertThrows(
    () => {
      ms932Encoder.encode("\u736B");
    },
    Error,
    "EncodingError U+736B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u736C");
    },
    Error,
    "EncodingError U+736C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u736D");
    },
    Error,
    "EncodingError U+736D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u736E");
    },
    Error,
    "EncodingError U+736E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u736F");
    },
    Error,
    "EncodingError U+736F",
  );
  r = r && ([...ms932Encoder.encode("獰")].join(",") === "224,214"); // U+7370
  assertThrows(
    () => {
      ms932Encoder.encode("\u7371");
    },
    Error,
    "EncodingError U+7371",
  );
  r = r && ([...ms932Encoder.encode("獲")].join(",") === "138,108"); // U+7372
  assertThrows(
    () => {
      ms932Encoder.encode("\u7373");
    },
    Error,
    "EncodingError U+7373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7374");
    },
    Error,
    "EncodingError U+7374",
  );
  r = r && ([...ms932Encoder.encode("獵")].join(",") === "224,216"); // U+7375
  assertThrows(
    () => {
      ms932Encoder.encode("\u7376");
    },
    Error,
    "EncodingError U+7376",
  );
  r = r && ([...ms932Encoder.encode("獷獸")].join(",") === "251,95,224,215"); // U+7377
  assertThrows(
    () => {
      ms932Encoder.encode("\u7379");
    },
    Error,
    "EncodingError U+7379",
  );
  r = r && ([...ms932Encoder.encode("獺獻")].join(",") === "224,218,224,217"); // U+737A
  assertThrows(
    () => {
      ms932Encoder.encode("\u737C");
    },
    Error,
    "EncodingError U+737C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u737D");
    },
    Error,
    "EncodingError U+737D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u737E");
    },
    Error,
    "EncodingError U+737E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u737F");
    },
    Error,
    "EncodingError U+737F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7380");
    },
    Error,
    "EncodingError U+7380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7381");
    },
    Error,
    "EncodingError U+7381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7382");
    },
    Error,
    "EncodingError U+7382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7383");
    },
    Error,
    "EncodingError U+7383",
  );
  r = r && ([...ms932Encoder.encode("玄")].join(",") === "140,186"); // U+7384
  assertThrows(
    () => {
      ms932Encoder.encode("\u7385");
    },
    Error,
    "EncodingError U+7385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7386");
    },
    Error,
    "EncodingError U+7386",
  );
  r = r && ([...ms932Encoder.encode("率")].join(",") === "151,166"); // U+7387
  assertThrows(
    () => {
      ms932Encoder.encode("\u7388");
    },
    Error,
    "EncodingError U+7388",
  );
  r = r && ([...ms932Encoder.encode("玉")].join(",") === "139,202"); // U+7389
  assertThrows(
    () => {
      ms932Encoder.encode("\u738A");
    },
    Error,
    "EncodingError U+738A",
  );
  r = r && ([...ms932Encoder.encode("王")].join(",") === "137,164"); // U+738B
  assertThrows(
    () => {
      ms932Encoder.encode("\u738C");
    },
    Error,
    "EncodingError U+738C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u738D");
    },
    Error,
    "EncodingError U+738D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u738E");
    },
    Error,
    "EncodingError U+738E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u738F");
    },
    Error,
    "EncodingError U+738F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7390");
    },
    Error,
    "EncodingError U+7390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7391");
    },
    Error,
    "EncodingError U+7391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7392");
    },
    Error,
    "EncodingError U+7392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7393");
    },
    Error,
    "EncodingError U+7393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7394");
    },
    Error,
    "EncodingError U+7394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7395");
    },
    Error,
    "EncodingError U+7395",
  );
  r = r && ([...ms932Encoder.encode("玖")].join(",") === "139,232"); // U+7396
  assertThrows(
    () => {
      ms932Encoder.encode("\u7397");
    },
    Error,
    "EncodingError U+7397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7398");
    },
    Error,
    "EncodingError U+7398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7399");
    },
    Error,
    "EncodingError U+7399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u739A");
    },
    Error,
    "EncodingError U+739A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u739B");
    },
    Error,
    "EncodingError U+739B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u739C");
    },
    Error,
    "EncodingError U+739C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u739D");
    },
    Error,
    "EncodingError U+739D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u739E");
    },
    Error,
    "EncodingError U+739E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u739F");
    },
    Error,
    "EncodingError U+739F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73A0");
    },
    Error,
    "EncodingError U+73A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73A1");
    },
    Error,
    "EncodingError U+73A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73A2");
    },
    Error,
    "EncodingError U+73A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73A3");
    },
    Error,
    "EncodingError U+73A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73A4");
    },
    Error,
    "EncodingError U+73A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73A5");
    },
    Error,
    "EncodingError U+73A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73A6");
    },
    Error,
    "EncodingError U+73A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73A7");
    },
    Error,
    "EncodingError U+73A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73A8");
    },
    Error,
    "EncodingError U+73A8",
  );
  r = r && ([...ms932Encoder.encode("玩")].join(",") === "138,223"); // U+73A9
  assertThrows(
    () => {
      ms932Encoder.encode("\u73AA");
    },
    Error,
    "EncodingError U+73AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73AB");
    },
    Error,
    "EncodingError U+73AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73AC");
    },
    Error,
    "EncodingError U+73AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73AD");
    },
    Error,
    "EncodingError U+73AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73AE");
    },
    Error,
    "EncodingError U+73AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73AF");
    },
    Error,
    "EncodingError U+73AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73B0");
    },
    Error,
    "EncodingError U+73B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73B1");
    },
    Error,
    "EncodingError U+73B1",
  );
  r = r && ([...ms932Encoder.encode("玲玳")].join(",") === "151,230,224,220"); // U+73B2
  assertThrows(
    () => {
      ms932Encoder.encode("\u73B4");
    },
    Error,
    "EncodingError U+73B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73B5");
    },
    Error,
    "EncodingError U+73B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73B6");
    },
    Error,
    "EncodingError U+73B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73B7");
    },
    Error,
    "EncodingError U+73B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73B8");
    },
    Error,
    "EncodingError U+73B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73B9");
    },
    Error,
    "EncodingError U+73B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73BA");
    },
    Error,
    "EncodingError U+73BA",
  );
  r = r && ([...ms932Encoder.encode("玻")].join(",") === "224,222"); // U+73BB
  assertThrows(
    () => {
      ms932Encoder.encode("\u73BC");
    },
    Error,
    "EncodingError U+73BC",
  );
  r = r && ([...ms932Encoder.encode("玽")].join(",") === "251,96"); // U+73BD
  assertThrows(
    () => {
      ms932Encoder.encode("\u73BE");
    },
    Error,
    "EncodingError U+73BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73BF");
    },
    Error,
    "EncodingError U+73BF",
  );
  r = r && ([...ms932Encoder.encode("珀")].join(",") === "224,223"); // U+73C0
  assertThrows(
    () => {
      ms932Encoder.encode("\u73C1");
    },
    Error,
    "EncodingError U+73C1",
  );
  r = r && ([...ms932Encoder.encode("珂")].join(",") === "137,207"); // U+73C2
  assertThrows(
    () => {
      ms932Encoder.encode("\u73C3");
    },
    Error,
    "EncodingError U+73C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73C4");
    },
    Error,
    "EncodingError U+73C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73C5");
    },
    Error,
    "EncodingError U+73C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73C6");
    },
    Error,
    "EncodingError U+73C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73C7");
    },
    Error,
    "EncodingError U+73C7",
  );
  r = r &&
    ([...ms932Encoder.encode("珈珉珊")].join(",") === "224,219,251,97,142,88"); // U+73C8
  assertThrows(
    () => {
      ms932Encoder.encode("\u73CB");
    },
    Error,
    "EncodingError U+73CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73CC");
    },
    Error,
    "EncodingError U+73CC",
  );
  r = r && ([...ms932Encoder.encode("珍珎")].join(",") === "146,191,224,221"); // U+73CD
  assertThrows(
    () => {
      ms932Encoder.encode("\u73CF");
    },
    Error,
    "EncodingError U+73CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73D0");
    },
    Error,
    "EncodingError U+73D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73D1");
    },
    Error,
    "EncodingError U+73D1",
  );
  r = r && ([...ms932Encoder.encode("珒")].join(",") === "251,100"); // U+73D2
  assertThrows(
    () => {
      ms932Encoder.encode("\u73D3");
    },
    Error,
    "EncodingError U+73D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73D4");
    },
    Error,
    "EncodingError U+73D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73D5");
    },
    Error,
    "EncodingError U+73D5",
  );
  r = r && ([...ms932Encoder.encode("珖")].join(",") === "251,98"); // U+73D6
  assertThrows(
    () => {
      ms932Encoder.encode("\u73D7");
    },
    Error,
    "EncodingError U+73D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73D8");
    },
    Error,
    "EncodingError U+73D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73D9");
    },
    Error,
    "EncodingError U+73D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73DA");
    },
    Error,
    "EncodingError U+73DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73DB");
    },
    Error,
    "EncodingError U+73DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73DC");
    },
    Error,
    "EncodingError U+73DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73DD");
    },
    Error,
    "EncodingError U+73DD",
  );
  r = r && ([...ms932Encoder.encode("珞")].join(",") === "224,226"); // U+73DE
  assertThrows(
    () => {
      ms932Encoder.encode("\u73DF");
    },
    Error,
    "EncodingError U+73DF",
  );
  r = r && ([...ms932Encoder.encode("珠")].join(",") === "142,236"); // U+73E0
  assertThrows(
    () => {
      ms932Encoder.encode("\u73E1");
    },
    Error,
    "EncodingError U+73E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73E2");
    },
    Error,
    "EncodingError U+73E2",
  );
  r = r && ([...ms932Encoder.encode("珣")].join(",") === "251,99"); // U+73E3
  assertThrows(
    () => {
      ms932Encoder.encode("\u73E4");
    },
    Error,
    "EncodingError U+73E4",
  );
  r = r && ([...ms932Encoder.encode("珥")].join(",") === "224,224"); // U+73E5
  assertThrows(
    () => {
      ms932Encoder.encode("\u73E6");
    },
    Error,
    "EncodingError U+73E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73E7");
    },
    Error,
    "EncodingError U+73E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73E8");
    },
    Error,
    "EncodingError U+73E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73E9");
    },
    Error,
    "EncodingError U+73E9",
  );
  r = r && ([...ms932Encoder.encode("珪")].join(",") === "140,93"); // U+73EA
  assertThrows(
    () => {
      ms932Encoder.encode("\u73EB");
    },
    Error,
    "EncodingError U+73EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73EC");
    },
    Error,
    "EncodingError U+73EC",
  );
  r = r && ([...ms932Encoder.encode("班珮")].join(",") === "148,199,224,225"); // U+73ED
  assertThrows(
    () => {
      ms932Encoder.encode("\u73EF");
    },
    Error,
    "EncodingError U+73EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73F0");
    },
    Error,
    "EncodingError U+73F0",
  );
  r = r && ([...ms932Encoder.encode("珱")].join(",") === "224,252"); // U+73F1
  assertThrows(
    () => {
      ms932Encoder.encode("\u73F2");
    },
    Error,
    "EncodingError U+73F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73F3");
    },
    Error,
    "EncodingError U+73F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73F4");
    },
    Error,
    "EncodingError U+73F4",
  );
  r = r && ([...ms932Encoder.encode("珵")].join(",") === "251,102"); // U+73F5
  assertThrows(
    () => {
      ms932Encoder.encode("\u73F6");
    },
    Error,
    "EncodingError U+73F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73F7");
    },
    Error,
    "EncodingError U+73F7",
  );
  r = r && ([...ms932Encoder.encode("珸")].join(",") === "224,231"); // U+73F8
  assertThrows(
    () => {
      ms932Encoder.encode("\u73F9");
    },
    Error,
    "EncodingError U+73F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73FA");
    },
    Error,
    "EncodingError U+73FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73FB");
    },
    Error,
    "EncodingError U+73FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73FC");
    },
    Error,
    "EncodingError U+73FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u73FD");
    },
    Error,
    "EncodingError U+73FD",
  );
  r = r && ([...ms932Encoder.encode("現")].join(",") === "140,187"); // U+73FE
  assertThrows(
    () => {
      ms932Encoder.encode("\u73FF");
    },
    Error,
    "EncodingError U+73FF",
  );

  assertStrictEquals(r, true);
});
