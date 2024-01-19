import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+8000-U+83FF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  r = r && ([...ms932Encoder.encode("耀老")].join(",") === "151,115,152,86"); // U+8000
  assertThrows(
    () => {
      ms932Encoder.encode("\u8002");
    },
    Error,
    "encode-error: U+8002",
  );
  r = r &&
    ([...ms932Encoder.encode("考耄者耆")].join(",") ===
      "141,108,227,204,142,210,227,203"); // U+8003
  assertThrows(
    () => {
      ms932Encoder.encode("\u8007");
    },
    Error,
    "encode-error: U+8007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8008");
    },
    Error,
    "encode-error: U+8008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8009");
    },
    Error,
    "encode-error: U+8009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u800A");
    },
    Error,
    "encode-error: U+800A",
  );
  r = r && ([...ms932Encoder.encode("耋而")].join(",") === "227,205,142,167"); // U+800B
  assertThrows(
    () => {
      ms932Encoder.encode("\u800D");
    },
    Error,
    "encode-error: U+800D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u800E");
    },
    Error,
    "encode-error: U+800E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u800F");
    },
    Error,
    "encode-error: U+800F",
  );
  r = r && ([...ms932Encoder.encode("耐")].join(",") === "145,207"); // U+8010
  assertThrows(
    () => {
      ms932Encoder.encode("\u8011");
    },
    Error,
    "encode-error: U+8011",
  );
  r = r && ([...ms932Encoder.encode("耒")].join(",") === "227,206"); // U+8012
  assertThrows(
    () => {
      ms932Encoder.encode("\u8013");
    },
    Error,
    "encode-error: U+8013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8014");
    },
    Error,
    "encode-error: U+8014",
  );
  r = r && ([...ms932Encoder.encode("耕")].join(",") === "141,107"); // U+8015
  assertThrows(
    () => {
      ms932Encoder.encode("\u8016");
    },
    Error,
    "encode-error: U+8016",
  );
  r = r &&
    ([...ms932Encoder.encode("耗耘耙")].join(",") ===
      "150,213,227,207,227,208"); // U+8017
  assertThrows(
    () => {
      ms932Encoder.encode("\u801A");
    },
    Error,
    "encode-error: U+801A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u801B");
    },
    Error,
    "encode-error: U+801B",
  );
  r = r && ([...ms932Encoder.encode("耜")].join(",") === "227,209"); // U+801C
  assertThrows(
    () => {
      ms932Encoder.encode("\u801D");
    },
    Error,
    "encode-error: U+801D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u801E");
    },
    Error,
    "encode-error: U+801E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u801F");
    },
    Error,
    "encode-error: U+801F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8020");
    },
    Error,
    "encode-error: U+8020",
  );
  r = r && ([...ms932Encoder.encode("耡")].join(",") === "227,210"); // U+8021
  assertThrows(
    () => {
      ms932Encoder.encode("\u8022");
    },
    Error,
    "encode-error: U+8022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8023");
    },
    Error,
    "encode-error: U+8023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8024");
    },
    Error,
    "encode-error: U+8024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8025");
    },
    Error,
    "encode-error: U+8025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8026");
    },
    Error,
    "encode-error: U+8026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8027");
    },
    Error,
    "encode-error: U+8027",
  );
  r = r && ([...ms932Encoder.encode("耨")].join(",") === "227,211"); // U+8028
  assertThrows(
    () => {
      ms932Encoder.encode("\u8029");
    },
    Error,
    "encode-error: U+8029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u802A");
    },
    Error,
    "encode-error: U+802A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u802B");
    },
    Error,
    "encode-error: U+802B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u802C");
    },
    Error,
    "encode-error: U+802C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u802D");
    },
    Error,
    "encode-error: U+802D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u802E");
    },
    Error,
    "encode-error: U+802E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u802F");
    },
    Error,
    "encode-error: U+802F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8030");
    },
    Error,
    "encode-error: U+8030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8031");
    },
    Error,
    "encode-error: U+8031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8032");
    },
    Error,
    "encode-error: U+8032",
  );
  r = r && ([...ms932Encoder.encode("耳")].join(",") === "142,168"); // U+8033
  assertThrows(
    () => {
      ms932Encoder.encode("\u8034");
    },
    Error,
    "encode-error: U+8034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8035");
    },
    Error,
    "encode-error: U+8035",
  );
  r = r && ([...ms932Encoder.encode("耶")].join(",") === "150,235"); // U+8036
  assertThrows(
    () => {
      ms932Encoder.encode("\u8037");
    },
    Error,
    "encode-error: U+8037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8038");
    },
    Error,
    "encode-error: U+8038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8039");
    },
    Error,
    "encode-error: U+8039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u803A");
    },
    Error,
    "encode-error: U+803A",
  );
  r = r && ([...ms932Encoder.encode("耻")].join(",") === "227,213"); // U+803B
  assertThrows(
    () => {
      ms932Encoder.encode("\u803C");
    },
    Error,
    "encode-error: U+803C",
  );
  r = r && ([...ms932Encoder.encode("耽")].join(",") === "146,94"); // U+803D
  assertThrows(
    () => {
      ms932Encoder.encode("\u803E");
    },
    Error,
    "encode-error: U+803E",
  );
  r = r && ([...ms932Encoder.encode("耿")].join(",") === "227,212"); // U+803F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8040");
    },
    Error,
    "encode-error: U+8040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8041");
    },
    Error,
    "encode-error: U+8041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8042");
    },
    Error,
    "encode-error: U+8042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8043");
    },
    Error,
    "encode-error: U+8043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8044");
    },
    Error,
    "encode-error: U+8044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8045");
    },
    Error,
    "encode-error: U+8045",
  );
  r = r && ([...ms932Encoder.encode("聆")].join(",") === "227,215"); // U+8046
  assertThrows(
    () => {
      ms932Encoder.encode("\u8047");
    },
    Error,
    "encode-error: U+8047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8048");
    },
    Error,
    "encode-error: U+8048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8049");
    },
    Error,
    "encode-error: U+8049",
  );
  r = r && ([...ms932Encoder.encode("聊")].join(",") === "227,214"); // U+804A
  assertThrows(
    () => {
      ms932Encoder.encode("\u804B");
    },
    Error,
    "encode-error: U+804B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u804C");
    },
    Error,
    "encode-error: U+804C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u804D");
    },
    Error,
    "encode-error: U+804D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u804E");
    },
    Error,
    "encode-error: U+804E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u804F");
    },
    Error,
    "encode-error: U+804F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8050");
    },
    Error,
    "encode-error: U+8050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8051");
    },
    Error,
    "encode-error: U+8051",
  );
  r = r && ([...ms932Encoder.encode("聒")].join(",") === "227,216"); // U+8052
  assertThrows(
    () => {
      ms932Encoder.encode("\u8053");
    },
    Error,
    "encode-error: U+8053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8054");
    },
    Error,
    "encode-error: U+8054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8055");
    },
    Error,
    "encode-error: U+8055",
  );
  r = r && ([...ms932Encoder.encode("聖")].join(",") === "144,185"); // U+8056
  assertThrows(
    () => {
      ms932Encoder.encode("\u8057");
    },
    Error,
    "encode-error: U+8057",
  );
  r = r && ([...ms932Encoder.encode("聘")].join(",") === "227,217"); // U+8058
  assertThrows(
    () => {
      ms932Encoder.encode("\u8059");
    },
    Error,
    "encode-error: U+8059",
  );
  r = r && ([...ms932Encoder.encode("聚")].join(",") === "227,218"); // U+805A
  assertThrows(
    () => {
      ms932Encoder.encode("\u805B");
    },
    Error,
    "encode-error: U+805B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u805C");
    },
    Error,
    "encode-error: U+805C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u805D");
    },
    Error,
    "encode-error: U+805D",
  );
  r = r && ([...ms932Encoder.encode("聞聟")].join(",") === "149,183,227,219"); // U+805E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8060");
    },
    Error,
    "encode-error: U+8060",
  );
  r = r && ([...ms932Encoder.encode("聡聢")].join(",") === "145,143,227,220"); // U+8061
  assertThrows(
    () => {
      ms932Encoder.encode("\u8063");
    },
    Error,
    "encode-error: U+8063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8064");
    },
    Error,
    "encode-error: U+8064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8065");
    },
    Error,
    "encode-error: U+8065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8066");
    },
    Error,
    "encode-error: U+8066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8067");
    },
    Error,
    "encode-error: U+8067",
  );
  r = r && ([...ms932Encoder.encode("聨")].join(",") === "227,221"); // U+8068
  assertThrows(
    () => {
      ms932Encoder.encode("\u8069");
    },
    Error,
    "encode-error: U+8069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u806A");
    },
    Error,
    "encode-error: U+806A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u806B");
    },
    Error,
    "encode-error: U+806B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u806C");
    },
    Error,
    "encode-error: U+806C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u806D");
    },
    Error,
    "encode-error: U+806D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u806E");
    },
    Error,
    "encode-error: U+806E",
  );
  r = r && ([...ms932Encoder.encode("聯聰")].join(",") === "151,252,227,224"); // U+806F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8071");
    },
    Error,
    "encode-error: U+8071",
  );
  r = r &&
    ([...ms932Encoder.encode("聲聳聴")].join(",") ===
      "227,223,227,222,146,174"); // U+8072
  assertThrows(
    () => {
      ms932Encoder.encode("\u8075");
    },
    Error,
    "encode-error: U+8075",
  );
  r = r && ([...ms932Encoder.encode("聶職")].join(",") === "227,225,144,69"); // U+8076
  assertThrows(
    () => {
      ms932Encoder.encode("\u8078");
    },
    Error,
    "encode-error: U+8078",
  );
  r = r && ([...ms932Encoder.encode("聹")].join(",") === "227,226"); // U+8079
  assertThrows(
    () => {
      ms932Encoder.encode("\u807A");
    },
    Error,
    "encode-error: U+807A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u807B");
    },
    Error,
    "encode-error: U+807B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u807C");
    },
    Error,
    "encode-error: U+807C",
  );
  r = r &&
    ([...ms932Encoder.encode("聽聾聿")].join(",") === "227,227,152,87,227,228"); // U+807D
  assertThrows(
    () => {
      ms932Encoder.encode("\u8080");
    },
    Error,
    "encode-error: U+8080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8081");
    },
    Error,
    "encode-error: U+8081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8082");
    },
    Error,
    "encode-error: U+8082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8083");
    },
    Error,
    "encode-error: U+8083",
  );
  r = r &&
    ([...ms932Encoder.encode("肄肅肆肇")].join(",") ===
      "227,229,227,231,227,230,148,163"); // U+8084
  assertThrows(
    () => {
      ms932Encoder.encode("\u8088");
    },
    Error,
    "encode-error: U+8088",
  );
  r = r && ([...ms932Encoder.encode("肉")].join(",") === "147,247"); // U+8089
  assertThrows(
    () => {
      ms932Encoder.encode("\u808A");
    },
    Error,
    "encode-error: U+808A",
  );
  r = r && ([...ms932Encoder.encode("肋肌")].join(",") === "152,93,148,167"); // U+808B
  assertThrows(
    () => {
      ms932Encoder.encode("\u808D");
    },
    Error,
    "encode-error: U+808D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u808E");
    },
    Error,
    "encode-error: U+808E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u808F");
    },
    Error,
    "encode-error: U+808F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8090");
    },
    Error,
    "encode-error: U+8090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8091");
    },
    Error,
    "encode-error: U+8091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8092");
    },
    Error,
    "encode-error: U+8092",
  );
  r = r && ([...ms932Encoder.encode("肓")].join(",") === "227,233"); // U+8093
  assertThrows(
    () => {
      ms932Encoder.encode("\u8094");
    },
    Error,
    "encode-error: U+8094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8095");
    },
    Error,
    "encode-error: U+8095",
  );
  r = r && ([...ms932Encoder.encode("肖")].join(",") === "143,209"); // U+8096
  assertThrows(
    () => {
      ms932Encoder.encode("\u8097");
    },
    Error,
    "encode-error: U+8097",
  );
  r = r && ([...ms932Encoder.encode("肘")].join(",") === "149,73"); // U+8098
  assertThrows(
    () => {
      ms932Encoder.encode("\u8099");
    },
    Error,
    "encode-error: U+8099",
  );
  r = r && ([...ms932Encoder.encode("肚肛")].join(",") === "227,234,227,232"); // U+809A
  assertThrows(
    () => {
      ms932Encoder.encode("\u809C");
    },
    Error,
    "encode-error: U+809C",
  );
  r = r && ([...ms932Encoder.encode("肝")].join(",") === "138,204"); // U+809D
  assertThrows(
    () => {
      ms932Encoder.encode("\u809E");
    },
    Error,
    "encode-error: U+809E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u809F");
    },
    Error,
    "encode-error: U+809F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80A0");
    },
    Error,
    "encode-error: U+80A0",
  );
  r = r && ([...ms932Encoder.encode("股肢")].join(",") === "140,210,142,136"); // U+80A1
  assertThrows(
    () => {
      ms932Encoder.encode("\u80A3");
    },
    Error,
    "encode-error: U+80A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80A4");
    },
    Error,
    "encode-error: U+80A4",
  );
  r = r && ([...ms932Encoder.encode("肥")].join(",") === "148,236"); // U+80A5
  assertThrows(
    () => {
      ms932Encoder.encode("\u80A6");
    },
    Error,
    "encode-error: U+80A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80A7");
    },
    Error,
    "encode-error: U+80A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80A8");
    },
    Error,
    "encode-error: U+80A8",
  );
  r = r && ([...ms932Encoder.encode("肩肪")].join(",") === "140,168,150,98"); // U+80A9
  assertThrows(
    () => {
      ms932Encoder.encode("\u80AB");
    },
    Error,
    "encode-error: U+80AB",
  );
  r = r && ([...ms932Encoder.encode("肬肭")].join(",") === "227,237,227,235"); // U+80AC
  assertThrows(
    () => {
      ms932Encoder.encode("\u80AE");
    },
    Error,
    "encode-error: U+80AE",
  );
  r = r && ([...ms932Encoder.encode("肯")].join(",") === "141,109"); // U+80AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u80B0");
    },
    Error,
    "encode-error: U+80B0",
  );
  r = r && ([...ms932Encoder.encode("肱育")].join(",") === "141,110,136,231"); // U+80B1
  assertThrows(
    () => {
      ms932Encoder.encode("\u80B3");
    },
    Error,
    "encode-error: U+80B3",
  );
  r = r && ([...ms932Encoder.encode("肴")].join(",") === "141,230"); // U+80B4
  assertThrows(
    () => {
      ms932Encoder.encode("\u80B5");
    },
    Error,
    "encode-error: U+80B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80B6");
    },
    Error,
    "encode-error: U+80B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80B7");
    },
    Error,
    "encode-error: U+80B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80B8");
    },
    Error,
    "encode-error: U+80B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80B9");
    },
    Error,
    "encode-error: U+80B9",
  );
  r = r && ([...ms932Encoder.encode("肺")].join(",") === "148,120"); // U+80BA
  assertThrows(
    () => {
      ms932Encoder.encode("\u80BB");
    },
    Error,
    "encode-error: U+80BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80BC");
    },
    Error,
    "encode-error: U+80BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80BD");
    },
    Error,
    "encode-error: U+80BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80BE");
    },
    Error,
    "encode-error: U+80BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80BF");
    },
    Error,
    "encode-error: U+80BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80C0");
    },
    Error,
    "encode-error: U+80C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80C1");
    },
    Error,
    "encode-error: U+80C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80C2");
    },
    Error,
    "encode-error: U+80C2",
  );
  r = r && ([...ms932Encoder.encode("胃胄")].join(",") === "136,221,227,242"); // U+80C3
  assertThrows(
    () => {
      ms932Encoder.encode("\u80C5");
    },
    Error,
    "encode-error: U+80C5",
  );
  r = r && ([...ms932Encoder.encode("胆")].join(",") === "146,95"); // U+80C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u80C7");
    },
    Error,
    "encode-error: U+80C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80C8");
    },
    Error,
    "encode-error: U+80C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80C9");
    },
    Error,
    "encode-error: U+80C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80CA");
    },
    Error,
    "encode-error: U+80CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80CB");
    },
    Error,
    "encode-error: U+80CB",
  );
  r = r && ([...ms932Encoder.encode("背")].join(",") === "148,119"); // U+80CC
  assertThrows(
    () => {
      ms932Encoder.encode("\u80CD");
    },
    Error,
    "encode-error: U+80CD",
  );
  r = r && ([...ms932Encoder.encode("胎")].join(",") === "145,217"); // U+80CE
  assertThrows(
    () => {
      ms932Encoder.encode("\u80CF");
    },
    Error,
    "encode-error: U+80CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80D0");
    },
    Error,
    "encode-error: U+80D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80D1");
    },
    Error,
    "encode-error: U+80D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80D2");
    },
    Error,
    "encode-error: U+80D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80D3");
    },
    Error,
    "encode-error: U+80D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80D4");
    },
    Error,
    "encode-error: U+80D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80D5");
    },
    Error,
    "encode-error: U+80D5",
  );
  r = r && ([...ms932Encoder.encode("胖")].join(",") === "227,244"); // U+80D6
  assertThrows(
    () => {
      ms932Encoder.encode("\u80D7");
    },
    Error,
    "encode-error: U+80D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80D8");
    },
    Error,
    "encode-error: U+80D8",
  );
  r = r &&
    ([...ms932Encoder.encode("胙胚胛")].join(",") ===
      "227,240,227,243,227,238"); // U+80D9
  assertThrows(
    () => {
      ms932Encoder.encode("\u80DC");
    },
    Error,
    "encode-error: U+80DC",
  );
  r = r && ([...ms932Encoder.encode("胝胞")].join(",") === "227,241,150,69"); // U+80DD
  assertThrows(
    () => {
      ms932Encoder.encode("\u80DF");
    },
    Error,
    "encode-error: U+80DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80E0");
    },
    Error,
    "encode-error: U+80E0",
  );
  r = r && ([...ms932Encoder.encode("胡")].join(",") === "140,211"); // U+80E1
  assertThrows(
    () => {
      ms932Encoder.encode("\u80E2");
    },
    Error,
    "encode-error: U+80E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80E3");
    },
    Error,
    "encode-error: U+80E3",
  );
  r = r && ([...ms932Encoder.encode("胤胥")].join(",") === "136,251,227,239"); // U+80E4
  assertThrows(
    () => {
      ms932Encoder.encode("\u80E6");
    },
    Error,
    "encode-error: U+80E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80E7");
    },
    Error,
    "encode-error: U+80E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80E8");
    },
    Error,
    "encode-error: U+80E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80E9");
    },
    Error,
    "encode-error: U+80E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80EA");
    },
    Error,
    "encode-error: U+80EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80EB");
    },
    Error,
    "encode-error: U+80EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80EC");
    },
    Error,
    "encode-error: U+80EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80ED");
    },
    Error,
    "encode-error: U+80ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80EE");
    },
    Error,
    "encode-error: U+80EE",
  );
  r = r && ([...ms932Encoder.encode("胯")].join(",") === "227,246"); // U+80EF
  assertThrows(
    () => {
      ms932Encoder.encode("\u80F0");
    },
    Error,
    "encode-error: U+80F0",
  );
  r = r && ([...ms932Encoder.encode("胱")].join(",") === "227,247"); // U+80F1
  assertThrows(
    () => {
      ms932Encoder.encode("\u80F2");
    },
    Error,
    "encode-error: U+80F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80F3");
    },
    Error,
    "encode-error: U+80F3",
  );
  r = r && ([...ms932Encoder.encode("胴")].join(",") === "147,183"); // U+80F4
  assertThrows(
    () => {
      ms932Encoder.encode("\u80F5");
    },
    Error,
    "encode-error: U+80F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80F6");
    },
    Error,
    "encode-error: U+80F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80F7");
    },
    Error,
    "encode-error: U+80F7",
  );
  r = r && ([...ms932Encoder.encode("胸")].join(",") === "139,185"); // U+80F8
  assertThrows(
    () => {
      ms932Encoder.encode("\u80F9");
    },
    Error,
    "encode-error: U+80F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80FA");
    },
    Error,
    "encode-error: U+80FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80FB");
    },
    Error,
    "encode-error: U+80FB",
  );
  r = r && ([...ms932Encoder.encode("胼能")].join(",") === "228,69,148,92"); // U+80FC
  assertThrows(
    () => {
      ms932Encoder.encode("\u80FE");
    },
    Error,
    "encode-error: U+80FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u80FF");
    },
    Error,
    "encode-error: U+80FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8100");
    },
    Error,
    "encode-error: U+8100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8101");
    },
    Error,
    "encode-error: U+8101",
  );
  r = r && ([...ms932Encoder.encode("脂")].join(",") === "142,137"); // U+8102
  assertThrows(
    () => {
      ms932Encoder.encode("\u8103");
    },
    Error,
    "encode-error: U+8103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8104");
    },
    Error,
    "encode-error: U+8104",
  );
  r = r &&
    ([...ms932Encoder.encode("脅脆脇脈脉脊")].join(",") ===
      "139,186,144,198,152,101,150,172,227,245,144,210"); // U+8105
  assertThrows(
    () => {
      ms932Encoder.encode("\u810B");
    },
    Error,
    "encode-error: U+810B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u810C");
    },
    Error,
    "encode-error: U+810C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u810D");
    },
    Error,
    "encode-error: U+810D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u810E");
    },
    Error,
    "encode-error: U+810E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u810F");
    },
    Error,
    "encode-error: U+810F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8110");
    },
    Error,
    "encode-error: U+8110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8111");
    },
    Error,
    "encode-error: U+8111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8112");
    },
    Error,
    "encode-error: U+8112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8113");
    },
    Error,
    "encode-error: U+8113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8114");
    },
    Error,
    "encode-error: U+8114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8115");
    },
    Error,
    "encode-error: U+8115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8116");
    },
    Error,
    "encode-error: U+8116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8117");
    },
    Error,
    "encode-error: U+8117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8118");
    },
    Error,
    "encode-error: U+8118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8119");
    },
    Error,
    "encode-error: U+8119",
  );
  r = r && ([...ms932Encoder.encode("脚脛")].join(",") === "139,114,227,248"); // U+811A
  assertThrows(
    () => {
      ms932Encoder.encode("\u811C");
    },
    Error,
    "encode-error: U+811C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u811D");
    },
    Error,
    "encode-error: U+811D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u811E");
    },
    Error,
    "encode-error: U+811E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u811F");
    },
    Error,
    "encode-error: U+811F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8120");
    },
    Error,
    "encode-error: U+8120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8121");
    },
    Error,
    "encode-error: U+8121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8122");
    },
    Error,
    "encode-error: U+8122",
  );
  r = r && ([...ms932Encoder.encode("脣")].join(",") === "227,250"); // U+8123
  assertThrows(
    () => {
      ms932Encoder.encode("\u8124");
    },
    Error,
    "encode-error: U+8124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8125");
    },
    Error,
    "encode-error: U+8125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8126");
    },
    Error,
    "encode-error: U+8126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8127");
    },
    Error,
    "encode-error: U+8127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8128");
    },
    Error,
    "encode-error: U+8128",
  );
  r = r && ([...ms932Encoder.encode("脩")].join(",") === "227,249"); // U+8129
  assertThrows(
    () => {
      ms932Encoder.encode("\u812A");
    },
    Error,
    "encode-error: U+812A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u812B");
    },
    Error,
    "encode-error: U+812B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u812C");
    },
    Error,
    "encode-error: U+812C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u812D");
    },
    Error,
    "encode-error: U+812D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u812E");
    },
    Error,
    "encode-error: U+812E",
  );
  r = r && ([...ms932Encoder.encode("脯")].join(",") === "227,251"); // U+812F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8130");
    },
    Error,
    "encode-error: U+8130",
  );
  r = r && ([...ms932Encoder.encode("脱")].join(",") === "146,69"); // U+8131
  assertThrows(
    () => {
      ms932Encoder.encode("\u8132");
    },
    Error,
    "encode-error: U+8132",
  );
  r = r && ([...ms932Encoder.encode("脳")].join(",") === "148,93"); // U+8133
  assertThrows(
    () => {
      ms932Encoder.encode("\u8134");
    },
    Error,
    "encode-error: U+8134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8135");
    },
    Error,
    "encode-error: U+8135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8136");
    },
    Error,
    "encode-error: U+8136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8137");
    },
    Error,
    "encode-error: U+8137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8138");
    },
    Error,
    "encode-error: U+8138",
  );
  r = r && ([...ms932Encoder.encode("脹")].join(",") === "146,175"); // U+8139
  assertThrows(
    () => {
      ms932Encoder.encode("\u813A");
    },
    Error,
    "encode-error: U+813A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u813B");
    },
    Error,
    "encode-error: U+813B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u813C");
    },
    Error,
    "encode-error: U+813C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u813D");
    },
    Error,
    "encode-error: U+813D",
  );
  r = r && ([...ms932Encoder.encode("脾")].join(",") === "228,66"); // U+813E
  assertThrows(
    () => {
      ms932Encoder.encode("\u813F");
    },
    Error,
    "encode-error: U+813F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8140");
    },
    Error,
    "encode-error: U+8140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8141");
    },
    Error,
    "encode-error: U+8141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8142");
    },
    Error,
    "encode-error: U+8142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8143");
    },
    Error,
    "encode-error: U+8143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8144");
    },
    Error,
    "encode-error: U+8144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8145");
    },
    Error,
    "encode-error: U+8145",
  );
  r = r && ([...ms932Encoder.encode("腆")].join(",") === "228,65"); // U+8146
  assertThrows(
    () => {
      ms932Encoder.encode("\u8147");
    },
    Error,
    "encode-error: U+8147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8148");
    },
    Error,
    "encode-error: U+8148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8149");
    },
    Error,
    "encode-error: U+8149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u814A");
    },
    Error,
    "encode-error: U+814A",
  );
  r = r && ([...ms932Encoder.encode("腋")].join(",") === "227,252"); // U+814B
  assertThrows(
    () => {
      ms932Encoder.encode("\u814C");
    },
    Error,
    "encode-error: U+814C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u814D");
    },
    Error,
    "encode-error: U+814D",
  );
  r = r && ([...ms932Encoder.encode("腎")].join(",") === "144,116"); // U+814E
  assertThrows(
    () => {
      ms932Encoder.encode("\u814F");
    },
    Error,
    "encode-error: U+814F",
  );
  r = r && ([...ms932Encoder.encode("腐腑")].join(",") === "149,133,228,68"); // U+8150
  assertThrows(
    () => {
      ms932Encoder.encode("\u8152");
    },
    Error,
    "encode-error: U+8152",
  );
  r = r &&
    ([...ms932Encoder.encode("腓腔腕")].join(",") === "228,67,141,111,152,114"); // U+8153
  assertThrows(
    () => {
      ms932Encoder.encode("\u8156");
    },
    Error,
    "encode-error: U+8156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8157");
    },
    Error,
    "encode-error: U+8157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8158");
    },
    Error,
    "encode-error: U+8158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8159");
    },
    Error,
    "encode-error: U+8159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u815A");
    },
    Error,
    "encode-error: U+815A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u815B");
    },
    Error,
    "encode-error: U+815B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u815C");
    },
    Error,
    "encode-error: U+815C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u815D");
    },
    Error,
    "encode-error: U+815D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u815E");
    },
    Error,
    "encode-error: U+815E",
  );
  r = r && ([...ms932Encoder.encode("腟")].join(",") === "228,84"); // U+815F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8160");
    },
    Error,
    "encode-error: U+8160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8161");
    },
    Error,
    "encode-error: U+8161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8162");
    },
    Error,
    "encode-error: U+8162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8163");
    },
    Error,
    "encode-error: U+8163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8164");
    },
    Error,
    "encode-error: U+8164",
  );
  r = r && ([...ms932Encoder.encode("腥腦")].join(",") === "228,72,228,73"); // U+8165
  assertThrows(
    () => {
      ms932Encoder.encode("\u8167");
    },
    Error,
    "encode-error: U+8167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8168");
    },
    Error,
    "encode-error: U+8168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8169");
    },
    Error,
    "encode-error: U+8169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u816A");
    },
    Error,
    "encode-error: U+816A",
  );
  r = r && ([...ms932Encoder.encode("腫")].join(",") === "142,238"); // U+816B
  assertThrows(
    () => {
      ms932Encoder.encode("\u816C");
    },
    Error,
    "encode-error: U+816C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u816D");
    },
    Error,
    "encode-error: U+816D",
  );
  r = r && ([...ms932Encoder.encode("腮")].join(",") === "228,71"); // U+816E
  assertThrows(
    () => {
      ms932Encoder.encode("\u816F");
    },
    Error,
    "encode-error: U+816F",
  );
  r = r && ([...ms932Encoder.encode("腰腱")].join(",") === "141,152,228,70"); // U+8170
  assertThrows(
    () => {
      ms932Encoder.encode("\u8172");
    },
    Error,
    "encode-error: U+8172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8173");
    },
    Error,
    "encode-error: U+8173",
  );
  r = r && ([...ms932Encoder.encode("腴")].join(",") === "228,74"); // U+8174
  assertThrows(
    () => {
      ms932Encoder.encode("\u8175");
    },
    Error,
    "encode-error: U+8175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8176");
    },
    Error,
    "encode-error: U+8176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8177");
    },
    Error,
    "encode-error: U+8177",
  );
  r = r &&
    ([...ms932Encoder.encode("腸腹腺")].join(",") === "146,176,149,160,145,66"); // U+8178
  assertThrows(
    () => {
      ms932Encoder.encode("\u817B");
    },
    Error,
    "encode-error: U+817B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u817C");
    },
    Error,
    "encode-error: U+817C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u817D");
    },
    Error,
    "encode-error: U+817D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u817E");
    },
    Error,
    "encode-error: U+817E",
  );
  r = r && ([...ms932Encoder.encode("腿膀")].join(",") === "145,218,228,78"); // U+817F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8181");
    },
    Error,
    "encode-error: U+8181",
  );
  r = r && ([...ms932Encoder.encode("膂膃")].join(",") === "228,79,228,75"); // U+8182
  assertThrows(
    () => {
      ms932Encoder.encode("\u8184");
    },
    Error,
    "encode-error: U+8184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8185");
    },
    Error,
    "encode-error: U+8185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8186");
    },
    Error,
    "encode-error: U+8186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8187");
    },
    Error,
    "encode-error: U+8187",
  );
  r = r && ([...ms932Encoder.encode("膈")].join(",") === "228,76"); // U+8188
  assertThrows(
    () => {
      ms932Encoder.encode("\u8189");
    },
    Error,
    "encode-error: U+8189",
  );
  r = r && ([...ms932Encoder.encode("膊")].join(",") === "228,77"); // U+818A
  assertThrows(
    () => {
      ms932Encoder.encode("\u818B");
    },
    Error,
    "encode-error: U+818B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u818C");
    },
    Error,
    "encode-error: U+818C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u818D");
    },
    Error,
    "encode-error: U+818D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u818E");
    },
    Error,
    "encode-error: U+818E",
  );
  r = r && ([...ms932Encoder.encode("膏")].join(",") === "141,112"); // U+818F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8190");
    },
    Error,
    "encode-error: U+8190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8191");
    },
    Error,
    "encode-error: U+8191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8192");
    },
    Error,
    "encode-error: U+8192",
  );
  r = r && ([...ms932Encoder.encode("膓")].join(",") === "228,85"); // U+8193
  assertThrows(
    () => {
      ms932Encoder.encode("\u8194");
    },
    Error,
    "encode-error: U+8194",
  );
  r = r && ([...ms932Encoder.encode("膕")].join(",") === "228,81"); // U+8195
  assertThrows(
    () => {
      ms932Encoder.encode("\u8196");
    },
    Error,
    "encode-error: U+8196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8197");
    },
    Error,
    "encode-error: U+8197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8198");
    },
    Error,
    "encode-error: U+8198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8199");
    },
    Error,
    "encode-error: U+8199",
  );
  r = r && ([...ms932Encoder.encode("膚")].join(",") === "149,134"); // U+819A
  assertThrows(
    () => {
      ms932Encoder.encode("\u819B");
    },
    Error,
    "encode-error: U+819B",
  );
  r = r && ([...ms932Encoder.encode("膜膝")].join(",") === "150,140,149,71"); // U+819C
  assertThrows(
    () => {
      ms932Encoder.encode("\u819E");
    },
    Error,
    "encode-error: U+819E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u819F");
    },
    Error,
    "encode-error: U+819F",
  );
  r = r && ([...ms932Encoder.encode("膠")].join(",") === "228,80"); // U+81A0
  assertThrows(
    () => {
      ms932Encoder.encode("\u81A1");
    },
    Error,
    "encode-error: U+81A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81A2");
    },
    Error,
    "encode-error: U+81A2",
  );
  r = r && ([...ms932Encoder.encode("膣膤")].join(",") === "228,83,228,82"); // U+81A3
  assertThrows(
    () => {
      ms932Encoder.encode("\u81A5");
    },
    Error,
    "encode-error: U+81A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81A6");
    },
    Error,
    "encode-error: U+81A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81A7");
    },
    Error,
    "encode-error: U+81A7",
  );
  r = r && ([...ms932Encoder.encode("膨膩")].join(",") === "150,99,228,86"); // U+81A8
  assertThrows(
    () => {
      ms932Encoder.encode("\u81AA");
    },
    Error,
    "encode-error: U+81AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81AB");
    },
    Error,
    "encode-error: U+81AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81AC");
    },
    Error,
    "encode-error: U+81AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81AD");
    },
    Error,
    "encode-error: U+81AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81AE");
    },
    Error,
    "encode-error: U+81AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81AF");
    },
    Error,
    "encode-error: U+81AF",
  );
  r = r && ([...ms932Encoder.encode("膰")].join(",") === "228,87"); // U+81B0
  assertThrows(
    () => {
      ms932Encoder.encode("\u81B1");
    },
    Error,
    "encode-error: U+81B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81B2");
    },
    Error,
    "encode-error: U+81B2",
  );
  r = r && ([...ms932Encoder.encode("膳")].join(",") === "145,86"); // U+81B3
  assertThrows(
    () => {
      ms932Encoder.encode("\u81B4");
    },
    Error,
    "encode-error: U+81B4",
  );
  r = r && ([...ms932Encoder.encode("膵")].join(",") === "228,88"); // U+81B5
  assertThrows(
    () => {
      ms932Encoder.encode("\u81B6");
    },
    Error,
    "encode-error: U+81B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81B7");
    },
    Error,
    "encode-error: U+81B7",
  );
  r = r && ([...ms932Encoder.encode("膸")].join(",") === "228,90"); // U+81B8
  assertThrows(
    () => {
      ms932Encoder.encode("\u81B9");
    },
    Error,
    "encode-error: U+81B9",
  );
  r = r && ([...ms932Encoder.encode("膺")].join(",") === "228,94"); // U+81BA
  assertThrows(
    () => {
      ms932Encoder.encode("\u81BB");
    },
    Error,
    "encode-error: U+81BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81BC");
    },
    Error,
    "encode-error: U+81BC",
  );
  r = r &&
    ([...ms932Encoder.encode("膽膾膿臀")].join(",") ===
      "228,91,228,89,148,94,228,92"); // U+81BD
  assertThrows(
    () => {
      ms932Encoder.encode("\u81C1");
    },
    Error,
    "encode-error: U+81C1",
  );
  r = r && ([...ms932Encoder.encode("臂")].join(",") === "228,93"); // U+81C2
  assertThrows(
    () => {
      ms932Encoder.encode("\u81C3");
    },
    Error,
    "encode-error: U+81C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81C4");
    },
    Error,
    "encode-error: U+81C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81C5");
    },
    Error,
    "encode-error: U+81C5",
  );
  r = r && ([...ms932Encoder.encode("臆")].join(",") === "137,176"); // U+81C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u81C7");
    },
    Error,
    "encode-error: U+81C7",
  );
  r = r && ([...ms932Encoder.encode("臈臉")].join(",") === "228,100,228,95"); // U+81C8
  assertThrows(
    () => {
      ms932Encoder.encode("\u81CA");
    },
    Error,
    "encode-error: U+81CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81CB");
    },
    Error,
    "encode-error: U+81CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81CC");
    },
    Error,
    "encode-error: U+81CC",
  );
  r = r && ([...ms932Encoder.encode("臍")].join(",") === "228,96"); // U+81CD
  assertThrows(
    () => {
      ms932Encoder.encode("\u81CE");
    },
    Error,
    "encode-error: U+81CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81CF");
    },
    Error,
    "encode-error: U+81CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81D0");
    },
    Error,
    "encode-error: U+81D0",
  );
  r = r && ([...ms932Encoder.encode("臑")].join(",") === "228,97"); // U+81D1
  assertThrows(
    () => {
      ms932Encoder.encode("\u81D2");
    },
    Error,
    "encode-error: U+81D2",
  );
  r = r && ([...ms932Encoder.encode("臓")].join(",") === "145,159"); // U+81D3
  assertThrows(
    () => {
      ms932Encoder.encode("\u81D4");
    },
    Error,
    "encode-error: U+81D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81D5");
    },
    Error,
    "encode-error: U+81D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81D6");
    },
    Error,
    "encode-error: U+81D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81D7");
    },
    Error,
    "encode-error: U+81D7",
  );
  r = r &&
    ([...ms932Encoder.encode("臘臙臚")].join(",") === "228,99,228,98,228,101"); // U+81D8
  assertThrows(
    () => {
      ms932Encoder.encode("\u81DB");
    },
    Error,
    "encode-error: U+81DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81DC");
    },
    Error,
    "encode-error: U+81DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81DD");
    },
    Error,
    "encode-error: U+81DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81DE");
    },
    Error,
    "encode-error: U+81DE",
  );
  r = r && ([...ms932Encoder.encode("臟臠")].join(",") === "228,102,228,103"); // U+81DF
  assertThrows(
    () => {
      ms932Encoder.encode("\u81E1");
    },
    Error,
    "encode-error: U+81E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81E2");
    },
    Error,
    "encode-error: U+81E2",
  );
  r = r && ([...ms932Encoder.encode("臣")].join(",") === "144,98"); // U+81E3
  assertThrows(
    () => {
      ms932Encoder.encode("\u81E4");
    },
    Error,
    "encode-error: U+81E4",
  );
  r = r && ([...ms932Encoder.encode("臥")].join(",") === "137,231"); // U+81E5
  assertThrows(
    () => {
      ms932Encoder.encode("\u81E6");
    },
    Error,
    "encode-error: U+81E6",
  );
  r = r && ([...ms932Encoder.encode("臧臨")].join(",") === "228,104,151,213"); // U+81E7
  assertThrows(
    () => {
      ms932Encoder.encode("\u81E9");
    },
    Error,
    "encode-error: U+81E9",
  );
  r = r && ([...ms932Encoder.encode("自")].join(",") === "142,169"); // U+81EA
  assertThrows(
    () => {
      ms932Encoder.encode("\u81EB");
    },
    Error,
    "encode-error: U+81EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81EC");
    },
    Error,
    "encode-error: U+81EC",
  );
  r = r && ([...ms932Encoder.encode("臭")].join(",") === "143,76"); // U+81ED
  assertThrows(
    () => {
      ms932Encoder.encode("\u81EE");
    },
    Error,
    "encode-error: U+81EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81EF");
    },
    Error,
    "encode-error: U+81EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81F0");
    },
    Error,
    "encode-error: U+81F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81F1");
    },
    Error,
    "encode-error: U+81F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81F2");
    },
    Error,
    "encode-error: U+81F2",
  );
  r = r && ([...ms932Encoder.encode("至致")].join(",") === "142,138,146,118"); // U+81F3
  assertThrows(
    () => {
      ms932Encoder.encode("\u81F5");
    },
    Error,
    "encode-error: U+81F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81F6");
    },
    Error,
    "encode-error: U+81F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81F7");
    },
    Error,
    "encode-error: U+81F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81F8");
    },
    Error,
    "encode-error: U+81F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u81F9");
    },
    Error,
    "encode-error: U+81F9",
  );
  r = r &&
    ([...ms932Encoder.encode("臺臻臼")].join(",") === "228,105,228,106,137,80"); // U+81FA
  assertThrows(
    () => {
      ms932Encoder.encode("\u81FD");
    },
    Error,
    "encode-error: U+81FD",
  );
  r = r && ([...ms932Encoder.encode("臾")].join(",") === "228,107"); // U+81FE
  assertThrows(
    () => {
      ms932Encoder.encode("\u81FF");
    },
    Error,
    "encode-error: U+81FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8200");
    },
    Error,
    "encode-error: U+8200",
  );
  r = r && ([...ms932Encoder.encode("舁舂")].join(",") === "228,108,228,109"); // U+8201
  assertThrows(
    () => {
      ms932Encoder.encode("\u8203");
    },
    Error,
    "encode-error: U+8203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8204");
    },
    Error,
    "encode-error: U+8204",
  );
  r = r && ([...ms932Encoder.encode("舅")].join(",") === "228,110"); // U+8205
  assertThrows(
    () => {
      ms932Encoder.encode("\u8206");
    },
    Error,
    "encode-error: U+8206",
  );
  r = r &&
    ([...ms932Encoder.encode("與興舉舊")].join(",") ===
      "228,111,139,187,157,168,228,112"); // U+8207
  assertThrows(
    () => {
      ms932Encoder.encode("\u820B");
    },
    Error,
    "encode-error: U+820B",
  );
  r = r &&
    ([...ms932Encoder.encode("舌舍舎")].join(",") ===
      "144,227,228,113,142,201"); // U+820C
  assertThrows(
    () => {
      ms932Encoder.encode("\u820F");
    },
    Error,
    "encode-error: U+820F",
  );
  r = r && ([...ms932Encoder.encode("舐")].join(",") === "228,114"); // U+8210
  assertThrows(
    () => {
      ms932Encoder.encode("\u8211");
    },
    Error,
    "encode-error: U+8211",
  );
  r = r && ([...ms932Encoder.encode("舒")].join(",") === "152,174"); // U+8212
  assertThrows(
    () => {
      ms932Encoder.encode("\u8213");
    },
    Error,
    "encode-error: U+8213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8214");
    },
    Error,
    "encode-error: U+8214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8215");
    },
    Error,
    "encode-error: U+8215",
  );
  r = r &&
    ([...ms932Encoder.encode("舖舗舘")].join(",") ===
      "228,115,149,220,138,218"); // U+8216
  assertThrows(
    () => {
      ms932Encoder.encode("\u8219");
    },
    Error,
    "encode-error: U+8219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u821A");
    },
    Error,
    "encode-error: U+821A",
  );
  r = r && ([...ms932Encoder.encode("舛舜")].join(",") === "145,67,143,119"); // U+821B
  assertThrows(
    () => {
      ms932Encoder.encode("\u821D");
    },
    Error,
    "encode-error: U+821D",
  );
  r = r && ([...ms932Encoder.encode("舞舟")].join(",") === "149,145,143,77"); // U+821E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8220");
    },
    Error,
    "encode-error: U+8220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8221");
    },
    Error,
    "encode-error: U+8221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8222");
    },
    Error,
    "encode-error: U+8222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8223");
    },
    Error,
    "encode-error: U+8223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8224");
    },
    Error,
    "encode-error: U+8224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8225");
    },
    Error,
    "encode-error: U+8225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8226");
    },
    Error,
    "encode-error: U+8226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8227");
    },
    Error,
    "encode-error: U+8227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8228");
    },
    Error,
    "encode-error: U+8228",
  );
  r = r &&
    ([...ms932Encoder.encode("舩航舫般")].join(",") ===
      "228,116,141,113,228,117,148,202"); // U+8229
  assertThrows(
    () => {
      ms932Encoder.encode("\u822D");
    },
    Error,
    "encode-error: U+822D",
  );
  r = r && ([...ms932Encoder.encode("舮")].join(",") === "228,132"); // U+822E
  assertThrows(
    () => {
      ms932Encoder.encode("\u822F");
    },
    Error,
    "encode-error: U+822F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8230");
    },
    Error,
    "encode-error: U+8230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8231");
    },
    Error,
    "encode-error: U+8231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8232");
    },
    Error,
    "encode-error: U+8232",
  );
  r = r && ([...ms932Encoder.encode("舳")].join(",") === "228,119"); // U+8233
  assertThrows(
    () => {
      ms932Encoder.encode("\u8234");
    },
    Error,
    "encode-error: U+8234",
  );
  r = r &&
    ([...ms932Encoder.encode("舵舶舷舸船")].join(",") ===
      "145,199,148,149,140,189,228,118,145,68"); // U+8235
  assertThrows(
    () => {
      ms932Encoder.encode("\u823A");
    },
    Error,
    "encode-error: U+823A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u823B");
    },
    Error,
    "encode-error: U+823B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u823C");
    },
    Error,
    "encode-error: U+823C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u823D");
    },
    Error,
    "encode-error: U+823D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u823E");
    },
    Error,
    "encode-error: U+823E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u823F");
    },
    Error,
    "encode-error: U+823F",
  );
  r = r && ([...ms932Encoder.encode("艀")].join(",") === "228,120"); // U+8240
  assertThrows(
    () => {
      ms932Encoder.encode("\u8241");
    },
    Error,
    "encode-error: U+8241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8242");
    },
    Error,
    "encode-error: U+8242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8243");
    },
    Error,
    "encode-error: U+8243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8244");
    },
    Error,
    "encode-error: U+8244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8245");
    },
    Error,
    "encode-error: U+8245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8246");
    },
    Error,
    "encode-error: U+8246",
  );
  r = r && ([...ms932Encoder.encode("艇")].join(",") === "146,248"); // U+8247
  assertThrows(
    () => {
      ms932Encoder.encode("\u8248");
    },
    Error,
    "encode-error: U+8248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8249");
    },
    Error,
    "encode-error: U+8249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u824A");
    },
    Error,
    "encode-error: U+824A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u824B");
    },
    Error,
    "encode-error: U+824B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u824C");
    },
    Error,
    "encode-error: U+824C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u824D");
    },
    Error,
    "encode-error: U+824D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u824E");
    },
    Error,
    "encode-error: U+824E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u824F");
    },
    Error,
    "encode-error: U+824F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8250");
    },
    Error,
    "encode-error: U+8250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8251");
    },
    Error,
    "encode-error: U+8251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8252");
    },
    Error,
    "encode-error: U+8252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8253");
    },
    Error,
    "encode-error: U+8253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8254");
    },
    Error,
    "encode-error: U+8254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8255");
    },
    Error,
    "encode-error: U+8255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8256");
    },
    Error,
    "encode-error: U+8256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8257");
    },
    Error,
    "encode-error: U+8257",
  );
  r = r &&
    ([...ms932Encoder.encode("艘艙艚")].join(",") ===
      "228,122,228,121,228,124"); // U+8258
  assertThrows(
    () => {
      ms932Encoder.encode("\u825B");
    },
    Error,
    "encode-error: U+825B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u825C");
    },
    Error,
    "encode-error: U+825C",
  );
  r = r && ([...ms932Encoder.encode("艝")].join(",") === "228,123"); // U+825D
  assertThrows(
    () => {
      ms932Encoder.encode("\u825E");
    },
    Error,
    "encode-error: U+825E",
  );
  r = r && ([...ms932Encoder.encode("艟")].join(",") === "228,125"); // U+825F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8260");
    },
    Error,
    "encode-error: U+8260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8261");
    },
    Error,
    "encode-error: U+8261",
  );
  r = r && ([...ms932Encoder.encode("艢")].join(",") === "228,128"); // U+8262
  assertThrows(
    () => {
      ms932Encoder.encode("\u8263");
    },
    Error,
    "encode-error: U+8263",
  );
  r = r && ([...ms932Encoder.encode("艤")].join(",") === "228,126"); // U+8264
  assertThrows(
    () => {
      ms932Encoder.encode("\u8265");
    },
    Error,
    "encode-error: U+8265",
  );
  r = r && ([...ms932Encoder.encode("艦")].join(",") === "138,205"); // U+8266
  assertThrows(
    () => {
      ms932Encoder.encode("\u8267");
    },
    Error,
    "encode-error: U+8267",
  );
  r = r && ([...ms932Encoder.encode("艨")].join(",") === "228,129"); // U+8268
  assertThrows(
    () => {
      ms932Encoder.encode("\u8269");
    },
    Error,
    "encode-error: U+8269",
  );
  r = r && ([...ms932Encoder.encode("艪艫")].join(",") === "228,130,228,131"); // U+826A
  assertThrows(
    () => {
      ms932Encoder.encode("\u826C");
    },
    Error,
    "encode-error: U+826C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u826D");
    },
    Error,
    "encode-error: U+826D",
  );
  r = r && ([...ms932Encoder.encode("艮良")].join(",") === "141,175,151,199"); // U+826E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8270");
    },
    Error,
    "encode-error: U+8270",
  );
  r = r && ([...ms932Encoder.encode("艱色")].join(",") === "228,133,144,70"); // U+8271
  assertThrows(
    () => {
      ms932Encoder.encode("\u8273");
    },
    Error,
    "encode-error: U+8273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8274");
    },
    Error,
    "encode-error: U+8274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8275");
    },
    Error,
    "encode-error: U+8275",
  );
  r = r &&
    ([...ms932Encoder.encode("艶艷艸")].join(",") ===
      "137,144,228,134,228,135"); // U+8276
  assertThrows(
    () => {
      ms932Encoder.encode("\u8279");
    },
    Error,
    "encode-error: U+8279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u827A");
    },
    Error,
    "encode-error: U+827A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u827B");
    },
    Error,
    "encode-error: U+827B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u827C");
    },
    Error,
    "encode-error: U+827C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u827D");
    },
    Error,
    "encode-error: U+827D",
  );
  r = r && ([...ms932Encoder.encode("艾")].join(",") === "228,136"); // U+827E
  assertThrows(
    () => {
      ms932Encoder.encode("\u827F");
    },
    Error,
    "encode-error: U+827F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8280");
    },
    Error,
    "encode-error: U+8280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8281");
    },
    Error,
    "encode-error: U+8281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8282");
    },
    Error,
    "encode-error: U+8282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8283");
    },
    Error,
    "encode-error: U+8283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8284");
    },
    Error,
    "encode-error: U+8284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8285");
    },
    Error,
    "encode-error: U+8285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8286");
    },
    Error,
    "encode-error: U+8286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8287");
    },
    Error,
    "encode-error: U+8287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8288");
    },
    Error,
    "encode-error: U+8288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8289");
    },
    Error,
    "encode-error: U+8289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u828A");
    },
    Error,
    "encode-error: U+828A",
  );
  r = r && ([...ms932Encoder.encode("芋")].join(",") === "136,240"); // U+828B
  assertThrows(
    () => {
      ms932Encoder.encode("\u828C");
    },
    Error,
    "encode-error: U+828C",
  );
  r = r && ([...ms932Encoder.encode("芍")].join(",") === "228,137"); // U+828D
  assertThrows(
    () => {
      ms932Encoder.encode("\u828E");
    },
    Error,
    "encode-error: U+828E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u828F");
    },
    Error,
    "encode-error: U+828F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8290");
    },
    Error,
    "encode-error: U+8290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8291");
    },
    Error,
    "encode-error: U+8291",
  );
  r = r && ([...ms932Encoder.encode("芒")].join(",") === "228,138"); // U+8292
  assertThrows(
    () => {
      ms932Encoder.encode("\u8293");
    },
    Error,
    "encode-error: U+8293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8294");
    },
    Error,
    "encode-error: U+8294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8295");
    },
    Error,
    "encode-error: U+8295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8296");
    },
    Error,
    "encode-error: U+8296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8297");
    },
    Error,
    "encode-error: U+8297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8298");
    },
    Error,
    "encode-error: U+8298",
  );
  r = r && ([...ms932Encoder.encode("芙")].join(",") === "149,135"); // U+8299
  assertThrows(
    () => {
      ms932Encoder.encode("\u829A");
    },
    Error,
    "encode-error: U+829A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u829B");
    },
    Error,
    "encode-error: U+829B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u829C");
    },
    Error,
    "encode-error: U+829C",
  );
  r = r && ([...ms932Encoder.encode("芝")].join(",") === "142,197"); // U+829D
  assertThrows(
    () => {
      ms932Encoder.encode("\u829E");
    },
    Error,
    "encode-error: U+829E",
  );
  r = r && ([...ms932Encoder.encode("芟")].join(",") === "228,140"); // U+829F
  assertThrows(
    () => {
      ms932Encoder.encode("\u82A0");
    },
    Error,
    "encode-error: U+82A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82A1");
    },
    Error,
    "encode-error: U+82A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82A2");
    },
    Error,
    "encode-error: U+82A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82A3");
    },
    Error,
    "encode-error: U+82A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82A4");
    },
    Error,
    "encode-error: U+82A4",
  );
  r = r && ([...ms932Encoder.encode("芥芦")].join(",") === "138,72,136,176"); // U+82A5
  assertThrows(
    () => {
      ms932Encoder.encode("\u82A7");
    },
    Error,
    "encode-error: U+82A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82A8");
    },
    Error,
    "encode-error: U+82A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82A9");
    },
    Error,
    "encode-error: U+82A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82AA");
    },
    Error,
    "encode-error: U+82AA",
  );
  r = r &&
    ([...ms932Encoder.encode("芫芬芭")].join(",") ===
      "228,139,228,142,148,109"); // U+82AB
  assertThrows(
    () => {
      ms932Encoder.encode("\u82AE");
    },
    Error,
    "encode-error: U+82AE",
  );
  r = r && ([...ms932Encoder.encode("芯")].join(",") === "144,99"); // U+82AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u82B0");
    },
    Error,
    "encode-error: U+82B0",
  );
  r = r && ([...ms932Encoder.encode("花")].join(",") === "137,212"); // U+82B1
  assertThrows(
    () => {
      ms932Encoder.encode("\u82B2");
    },
    Error,
    "encode-error: U+82B2",
  );
  r = r && ([...ms932Encoder.encode("芳")].join(",") === "150,70"); // U+82B3
  assertThrows(
    () => {
      ms932Encoder.encode("\u82B4");
    },
    Error,
    "encode-error: U+82B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82B5");
    },
    Error,
    "encode-error: U+82B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82B6");
    },
    Error,
    "encode-error: U+82B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82B7");
    },
    Error,
    "encode-error: U+82B7",
  );
  r = r && ([...ms932Encoder.encode("芸芹")].join(",") === "140,124,139,218"); // U+82B8
  assertThrows(
    () => {
      ms932Encoder.encode("\u82BA");
    },
    Error,
    "encode-error: U+82BA",
  );
  r = r && ([...ms932Encoder.encode("芻")].join(",") === "228,141"); // U+82BB
  assertThrows(
    () => {
      ms932Encoder.encode("\u82BC");
    },
    Error,
    "encode-error: U+82BC",
  );
  r = r && ([...ms932Encoder.encode("芽")].join(",") === "137,232"); // U+82BD
  assertThrows(
    () => {
      ms932Encoder.encode("\u82BE");
    },
    Error,
    "encode-error: U+82BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82BF");
    },
    Error,
    "encode-error: U+82BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82C0");
    },
    Error,
    "encode-error: U+82C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82C1");
    },
    Error,
    "encode-error: U+82C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82C2");
    },
    Error,
    "encode-error: U+82C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82C3");
    },
    Error,
    "encode-error: U+82C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82C4");
    },
    Error,
    "encode-error: U+82C4",
  );
  r = r && ([...ms932Encoder.encode("苅")].join(",") === "138,161"); // U+82C5
  assertThrows(
    () => {
      ms932Encoder.encode("\u82C6");
    },
    Error,
    "encode-error: U+82C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82C7");
    },
    Error,
    "encode-error: U+82C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82C8");
    },
    Error,
    "encode-error: U+82C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82C9");
    },
    Error,
    "encode-error: U+82C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82CA");
    },
    Error,
    "encode-error: U+82CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82CB");
    },
    Error,
    "encode-error: U+82CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82CC");
    },
    Error,
    "encode-error: U+82CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82CD");
    },
    Error,
    "encode-error: U+82CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82CE");
    },
    Error,
    "encode-error: U+82CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82CF");
    },
    Error,
    "encode-error: U+82CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82D0");
    },
    Error,
    "encode-error: U+82D0",
  );
  r = r &&
    ([...ms932Encoder.encode("苑苒苓苔")].join(",") ===
      "137,145,228,146,151,232,145,219"); // U+82D1
  assertThrows(
    () => {
      ms932Encoder.encode("\u82D5");
    },
    Error,
    "encode-error: U+82D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82D6");
    },
    Error,
    "encode-error: U+82D6",
  );
  r = r && ([...ms932Encoder.encode("苗")].join(",") === "149,99"); // U+82D7
  assertThrows(
    () => {
      ms932Encoder.encode("\u82D8");
    },
    Error,
    "encode-error: U+82D8",
  );
  r = r && ([...ms932Encoder.encode("苙")].join(",") === "228,158"); // U+82D9
  assertThrows(
    () => {
      ms932Encoder.encode("\u82DA");
    },
    Error,
    "encode-error: U+82DA",
  );
  r = r && ([...ms932Encoder.encode("苛苜")].join(",") === "137,213,228,156"); // U+82DB
  assertThrows(
    () => {
      ms932Encoder.encode("\u82DD");
    },
    Error,
    "encode-error: U+82DD",
  );
  r = r && ([...ms932Encoder.encode("苞苟")].join(",") === "228,154,228,145"); // U+82DE
  assertThrows(
    () => {
      ms932Encoder.encode("\u82E0");
    },
    Error,
    "encode-error: U+82E0",
  );
  r = r && ([...ms932Encoder.encode("苡")].join(",") === "228,143"); // U+82E1
  assertThrows(
    () => {
      ms932Encoder.encode("\u82E2");
    },
    Error,
    "encode-error: U+82E2",
  );
  r = r && ([...ms932Encoder.encode("苣")].join(",") === "228,144"); // U+82E3
  assertThrows(
    () => {
      ms932Encoder.encode("\u82E4");
    },
    Error,
    "encode-error: U+82E4",
  );
  r = r &&
    ([...ms932Encoder.encode("若苦苧")].join(",") ===
      "142,225,139,234,146,151"); // U+82E5
  assertThrows(
    () => {
      ms932Encoder.encode("\u82E8");
    },
    Error,
    "encode-error: U+82E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82E9");
    },
    Error,
    "encode-error: U+82E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82EA");
    },
    Error,
    "encode-error: U+82EA",
  );
  r = r && ([...ms932Encoder.encode("苫")].join(",") === "147,207"); // U+82EB
  assertThrows(
    () => {
      ms932Encoder.encode("\u82EC");
    },
    Error,
    "encode-error: U+82EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82ED");
    },
    Error,
    "encode-error: U+82ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82EE");
    },
    Error,
    "encode-error: U+82EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82EF");
    },
    Error,
    "encode-error: U+82EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82F0");
    },
    Error,
    "encode-error: U+82F0",
  );
  r = r && ([...ms932Encoder.encode("英")].join(",") === "137,112"); // U+82F1
  assertThrows(
    () => {
      ms932Encoder.encode("\u82F2");
    },
    Error,
    "encode-error: U+82F2",
  );
  r = r && ([...ms932Encoder.encode("苳苴")].join(",") === "228,148,228,147"); // U+82F3
  assertThrows(
    () => {
      ms932Encoder.encode("\u82F5");
    },
    Error,
    "encode-error: U+82F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82F6");
    },
    Error,
    "encode-error: U+82F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82F7");
    },
    Error,
    "encode-error: U+82F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82F8");
    },
    Error,
    "encode-error: U+82F8",
  );
  r = r &&
    ([...ms932Encoder.encode("苹苺苻")].join(",") ===
      "228,153,228,149,228,152"); // U+82F9
  assertThrows(
    () => {
      ms932Encoder.encode("\u82FC");
    },
    Error,
    "encode-error: U+82FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82FD");
    },
    Error,
    "encode-error: U+82FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82FE");
    },
    Error,
    "encode-error: U+82FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u82FF");
    },
    Error,
    "encode-error: U+82FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8300");
    },
    Error,
    "encode-error: U+8300",
  );
  r = r &&
    ([...ms932Encoder.encode("茁茂范茄茅茆")].join(",") ===
      "251,147,150,206,228,151,137,214,138,157,228,155"); // U+8301
  assertThrows(
    () => {
      ms932Encoder.encode("\u8307");
    },
    Error,
    "encode-error: U+8307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8308");
    },
    Error,
    "encode-error: U+8308",
  );
  r = r && ([...ms932Encoder.encode("茉")].join(",") === "228,157"); // U+8309
  assertThrows(
    () => {
      ms932Encoder.encode("\u830A");
    },
    Error,
    "encode-error: U+830A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u830B");
    },
    Error,
    "encode-error: U+830B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u830C");
    },
    Error,
    "encode-error: U+830C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u830D");
    },
    Error,
    "encode-error: U+830D",
  );
  r = r && ([...ms932Encoder.encode("茎")].join(",") === "140,115"); // U+830E
  assertThrows(
    () => {
      ms932Encoder.encode("\u830F");
    },
    Error,
    "encode-error: U+830F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8310");
    },
    Error,
    "encode-error: U+8310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8311");
    },
    Error,
    "encode-error: U+8311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8312");
    },
    Error,
    "encode-error: U+8312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8313");
    },
    Error,
    "encode-error: U+8313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8314");
    },
    Error,
    "encode-error: U+8314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8315");
    },
    Error,
    "encode-error: U+8315",
  );
  r = r &&
    ([...ms932Encoder.encode("茖茗茘")].join(",") ===
      "228,161,228,170,228,171"); // U+8316
  assertThrows(
    () => {
      ms932Encoder.encode("\u8319");
    },
    Error,
    "encode-error: U+8319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u831A");
    },
    Error,
    "encode-error: U+831A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u831B");
    },
    Error,
    "encode-error: U+831B",
  );
  r = r && ([...ms932Encoder.encode("茜")].join(",") === "136,169"); // U+831C
  assertThrows(
    () => {
      ms932Encoder.encode("\u831D");
    },
    Error,
    "encode-error: U+831D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u831E");
    },
    Error,
    "encode-error: U+831E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u831F");
    },
    Error,
    "encode-error: U+831F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8320");
    },
    Error,
    "encode-error: U+8320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8321");
    },
    Error,
    "encode-error: U+8321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8322");
    },
    Error,
    "encode-error: U+8322",
  );
  r = r && ([...ms932Encoder.encode("茣")].join(",") === "228,178"); // U+8323
  assertThrows(
    () => {
      ms932Encoder.encode("\u8324");
    },
    Error,
    "encode-error: U+8324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8325");
    },
    Error,
    "encode-error: U+8325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8326");
    },
    Error,
    "encode-error: U+8326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8327");
    },
    Error,
    "encode-error: U+8327",
  );
  r = r && ([...ms932Encoder.encode("茨")].join(",") === "136,239"); // U+8328
  assertThrows(
    () => {
      ms932Encoder.encode("\u8329");
    },
    Error,
    "encode-error: U+8329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u832A");
    },
    Error,
    "encode-error: U+832A",
  );
  r = r && ([...ms932Encoder.encode("茫")].join(",") === "228,169"); // U+832B
  assertThrows(
    () => {
      ms932Encoder.encode("\u832C");
    },
    Error,
    "encode-error: U+832C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u832D");
    },
    Error,
    "encode-error: U+832D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u832E");
    },
    Error,
    "encode-error: U+832E",
  );
  r = r && ([...ms932Encoder.encode("茯")].join(",") === "228,168"); // U+832F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8330");
    },
    Error,
    "encode-error: U+8330",
  );
  r = r && ([...ms932Encoder.encode("茱茲")].join(",") === "228,163,228,162"); // U+8331
  assertThrows(
    () => {
      ms932Encoder.encode("\u8333");
    },
    Error,
    "encode-error: U+8333",
  );
  r = r &&
    ([...ms932Encoder.encode("茴茵茶")].join(",") ===
      "228,160,228,159,146,131"); // U+8334
  assertThrows(
    () => {
      ms932Encoder.encode("\u8337");
    },
    Error,
    "encode-error: U+8337",
  );
  r = r && ([...ms932Encoder.encode("茸茹")].join(",") === "145,249,228,165"); // U+8338
  assertThrows(
    () => {
      ms932Encoder.encode("\u833A");
    },
    Error,
    "encode-error: U+833A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u833B");
    },
    Error,
    "encode-error: U+833B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u833C");
    },
    Error,
    "encode-error: U+833C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u833D");
    },
    Error,
    "encode-error: U+833D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u833E");
    },
    Error,
    "encode-error: U+833E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u833F");
    },
    Error,
    "encode-error: U+833F",
  );
  r = r && ([...ms932Encoder.encode("荀")].join(",") === "228,164"); // U+8340
  assertThrows(
    () => {
      ms932Encoder.encode("\u8341");
    },
    Error,
    "encode-error: U+8341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8342");
    },
    Error,
    "encode-error: U+8342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8343");
    },
    Error,
    "encode-error: U+8343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8344");
    },
    Error,
    "encode-error: U+8344",
  );
  r = r && ([...ms932Encoder.encode("荅")].join(",") === "228,167"); // U+8345
  assertThrows(
    () => {
      ms932Encoder.encode("\u8346");
    },
    Error,
    "encode-error: U+8346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8347");
    },
    Error,
    "encode-error: U+8347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8348");
    },
    Error,
    "encode-error: U+8348",
  );
  r = r && ([...ms932Encoder.encode("草荊")].join(",") === "145,144,140,116"); // U+8349
  assertThrows(
    () => {
      ms932Encoder.encode("\u834B");
    },
    Error,
    "encode-error: U+834B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u834C");
    },
    Error,
    "encode-error: U+834C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u834D");
    },
    Error,
    "encode-error: U+834D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u834E");
    },
    Error,
    "encode-error: U+834E",
  );
  r = r && ([...ms932Encoder.encode("荏荐")].join(",") === "137,96,228,166"); // U+834F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8351");
    },
    Error,
    "encode-error: U+8351",
  );
  r = r && ([...ms932Encoder.encode("荒")].join(",") === "141,114"); // U+8352
  assertThrows(
    () => {
      ms932Encoder.encode("\u8353");
    },
    Error,
    "encode-error: U+8353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8354");
    },
    Error,
    "encode-error: U+8354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8355");
    },
    Error,
    "encode-error: U+8355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8356");
    },
    Error,
    "encode-error: U+8356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8357");
    },
    Error,
    "encode-error: U+8357",
  );
  r = r && ([...ms932Encoder.encode("荘")].join(",") === "145,145"); // U+8358
  assertThrows(
    () => {
      ms932Encoder.encode("\u8359");
    },
    Error,
    "encode-error: U+8359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u835A");
    },
    Error,
    "encode-error: U+835A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u835B");
    },
    Error,
    "encode-error: U+835B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u835C");
    },
    Error,
    "encode-error: U+835C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u835D");
    },
    Error,
    "encode-error: U+835D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u835E");
    },
    Error,
    "encode-error: U+835E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u835F");
    },
    Error,
    "encode-error: U+835F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8360");
    },
    Error,
    "encode-error: U+8360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8361");
    },
    Error,
    "encode-error: U+8361",
  );
  r = r && ([...ms932Encoder.encode("荢")].join(",") === "251,148"); // U+8362
  assertThrows(
    () => {
      ms932Encoder.encode("\u8363");
    },
    Error,
    "encode-error: U+8363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8364");
    },
    Error,
    "encode-error: U+8364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8365");
    },
    Error,
    "encode-error: U+8365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8366");
    },
    Error,
    "encode-error: U+8366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8367");
    },
    Error,
    "encode-error: U+8367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8368");
    },
    Error,
    "encode-error: U+8368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8369");
    },
    Error,
    "encode-error: U+8369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u836A");
    },
    Error,
    "encode-error: U+836A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u836B");
    },
    Error,
    "encode-error: U+836B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u836C");
    },
    Error,
    "encode-error: U+836C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u836D");
    },
    Error,
    "encode-error: U+836D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u836E");
    },
    Error,
    "encode-error: U+836E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u836F");
    },
    Error,
    "encode-error: U+836F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8370");
    },
    Error,
    "encode-error: U+8370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8371");
    },
    Error,
    "encode-error: U+8371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8372");
    },
    Error,
    "encode-error: U+8372",
  );
  r = r && ([...ms932Encoder.encode("荳")].join(",") === "228,184"); // U+8373
  assertThrows(
    () => {
      ms932Encoder.encode("\u8374");
    },
    Error,
    "encode-error: U+8374",
  );
  r = r && ([...ms932Encoder.encode("荵")].join(",") === "228,185"); // U+8375
  assertThrows(
    () => {
      ms932Encoder.encode("\u8376");
    },
    Error,
    "encode-error: U+8376",
  );
  r = r && ([...ms932Encoder.encode("荷")].join(",") === "137,215"); // U+8377
  assertThrows(
    () => {
      ms932Encoder.encode("\u8378");
    },
    Error,
    "encode-error: U+8378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8379");
    },
    Error,
    "encode-error: U+8379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u837A");
    },
    Error,
    "encode-error: U+837A",
  );
  r = r && ([...ms932Encoder.encode("荻荼")].join(",") === "137,172,228,182"); // U+837B
  assertThrows(
    () => {
      ms932Encoder.encode("\u837D");
    },
    Error,
    "encode-error: U+837D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u837E");
    },
    Error,
    "encode-error: U+837E",
  );
  r = r && ([...ms932Encoder.encode("荿")].join(",") === "251,149"); // U+837F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8380");
    },
    Error,
    "encode-error: U+8380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8381");
    },
    Error,
    "encode-error: U+8381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8382");
    },
    Error,
    "encode-error: U+8382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8383");
    },
    Error,
    "encode-error: U+8383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8384");
    },
    Error,
    "encode-error: U+8384",
  );
  r = r && ([...ms932Encoder.encode("莅")].join(",") === "228,172"); // U+8385
  assertThrows(
    () => {
      ms932Encoder.encode("\u8386");
    },
    Error,
    "encode-error: U+8386",
  );
  r = r && ([...ms932Encoder.encode("莇")].join(",") === "228,180"); // U+8387
  assertThrows(
    () => {
      ms932Encoder.encode("\u8388");
    },
    Error,
    "encode-error: U+8388",
  );
  r = r && ([...ms932Encoder.encode("莉莊")].join(",") === "228,187,228,181"); // U+8389
  assertThrows(
    () => {
      ms932Encoder.encode("\u838B");
    },
    Error,
    "encode-error: U+838B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u838C");
    },
    Error,
    "encode-error: U+838C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u838D");
    },
    Error,
    "encode-error: U+838D",
  );
  r = r && ([...ms932Encoder.encode("莎")].join(",") === "228,179"); // U+838E
  assertThrows(
    () => {
      ms932Encoder.encode("\u838F");
    },
    Error,
    "encode-error: U+838F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8390");
    },
    Error,
    "encode-error: U+8390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8391");
    },
    Error,
    "encode-error: U+8391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8392");
    },
    Error,
    "encode-error: U+8392",
  );
  r = r && ([...ms932Encoder.encode("莓")].join(",") === "228,150"); // U+8393
  assertThrows(
    () => {
      ms932Encoder.encode("\u8394");
    },
    Error,
    "encode-error: U+8394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8395");
    },
    Error,
    "encode-error: U+8395",
  );
  r = r && ([...ms932Encoder.encode("莖")].join(",") === "228,177"); // U+8396
  assertThrows(
    () => {
      ms932Encoder.encode("\u8397");
    },
    Error,
    "encode-error: U+8397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8398");
    },
    Error,
    "encode-error: U+8398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8399");
    },
    Error,
    "encode-error: U+8399",
  );
  r = r && ([...ms932Encoder.encode("莚")].join(",") === "228,173"); // U+839A
  assertThrows(
    () => {
      ms932Encoder.encode("\u839B");
    },
    Error,
    "encode-error: U+839B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u839C");
    },
    Error,
    "encode-error: U+839C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u839D");
    },
    Error,
    "encode-error: U+839D",
  );
  r = r &&
    ([...ms932Encoder.encode("莞莟莠")].join(",") ===
      "138,206,228,175,228,186"); // U+839E
  assertThrows(
    () => {
      ms932Encoder.encode("\u83A1");
    },
    Error,
    "encode-error: U+83A1",
  );
  r = r && ([...ms932Encoder.encode("莢")].join(",") === "228,176"); // U+83A2
  assertThrows(
    () => {
      ms932Encoder.encode("\u83A3");
    },
    Error,
    "encode-error: U+83A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83A4");
    },
    Error,
    "encode-error: U+83A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83A5");
    },
    Error,
    "encode-error: U+83A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83A6");
    },
    Error,
    "encode-error: U+83A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83A7");
    },
    Error,
    "encode-error: U+83A7",
  );
  r = r && ([...ms932Encoder.encode("莨")].join(",") === "228,188"); // U+83A8
  assertThrows(
    () => {
      ms932Encoder.encode("\u83A9");
    },
    Error,
    "encode-error: U+83A9",
  );
  r = r && ([...ms932Encoder.encode("莪莫")].join(",") === "228,174,148,156"); // U+83AA
  assertThrows(
    () => {
      ms932Encoder.encode("\u83AC");
    },
    Error,
    "encode-error: U+83AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83AD");
    },
    Error,
    "encode-error: U+83AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83AE");
    },
    Error,
    "encode-error: U+83AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83AF");
    },
    Error,
    "encode-error: U+83AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83B0");
    },
    Error,
    "encode-error: U+83B0",
  );
  r = r && ([...ms932Encoder.encode("莱")].join(",") === "151,137"); // U+83B1
  assertThrows(
    () => {
      ms932Encoder.encode("\u83B2");
    },
    Error,
    "encode-error: U+83B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83B3");
    },
    Error,
    "encode-error: U+83B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83B4");
    },
    Error,
    "encode-error: U+83B4",
  );
  r = r && ([...ms932Encoder.encode("莵")].join(",") === "228,183"); // U+83B5
  assertThrows(
    () => {
      ms932Encoder.encode("\u83B6");
    },
    Error,
    "encode-error: U+83B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83B7");
    },
    Error,
    "encode-error: U+83B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83B8");
    },
    Error,
    "encode-error: U+83B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83B9");
    },
    Error,
    "encode-error: U+83B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83BA");
    },
    Error,
    "encode-error: U+83BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83BB");
    },
    Error,
    "encode-error: U+83BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83BC");
    },
    Error,
    "encode-error: U+83BC",
  );
  r = r && ([...ms932Encoder.encode("莽")].join(",") === "228,205"); // U+83BD
  assertThrows(
    () => {
      ms932Encoder.encode("\u83BE");
    },
    Error,
    "encode-error: U+83BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83BF");
    },
    Error,
    "encode-error: U+83BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83C0");
    },
    Error,
    "encode-error: U+83C0",
  );
  r = r && ([...ms932Encoder.encode("菁")].join(",") === "228,197"); // U+83C1
  assertThrows(
    () => {
      ms932Encoder.encode("\u83C2");
    },
    Error,
    "encode-error: U+83C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83C3");
    },
    Error,
    "encode-error: U+83C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83C4");
    },
    Error,
    "encode-error: U+83C4",
  );
  r = r && ([...ms932Encoder.encode("菅")].join(",") === "144,155"); // U+83C5
  assertThrows(
    () => {
      ms932Encoder.encode("\u83C6");
    },
    Error,
    "encode-error: U+83C6",
  );
  r = r && ([...ms932Encoder.encode("菇")].join(",") === "251,150"); // U+83C7
  assertThrows(
    () => {
      ms932Encoder.encode("\u83C8");
    },
    Error,
    "encode-error: U+83C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83C9");
    },
    Error,
    "encode-error: U+83C9",
  );
  r = r && ([...ms932Encoder.encode("菊")].join(",") === "139,101"); // U+83CA
  assertThrows(
    () => {
      ms932Encoder.encode("\u83CB");
    },
    Error,
    "encode-error: U+83CB",
  );
  r = r && ([...ms932Encoder.encode("菌")].join(",") === "139,219"); // U+83CC
  assertThrows(
    () => {
      ms932Encoder.encode("\u83CD");
    },
    Error,
    "encode-error: U+83CD",
  );
  r = r && ([...ms932Encoder.encode("菎")].join(",") === "228,192"); // U+83CE
  assertThrows(
    () => {
      ms932Encoder.encode("\u83CF");
    },
    Error,
    "encode-error: U+83CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83D0");
    },
    Error,
    "encode-error: U+83D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83D1");
    },
    Error,
    "encode-error: U+83D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83D2");
    },
    Error,
    "encode-error: U+83D2",
  );
  r = r && ([...ms932Encoder.encode("菓")].join(",") === "137,217"); // U+83D3
  assertThrows(
    () => {
      ms932Encoder.encode("\u83D4");
    },
    Error,
    "encode-error: U+83D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83D5");
    },
    Error,
    "encode-error: U+83D5",
  );
  r = r && ([...ms932Encoder.encode("菖")].join(",") === "143,210"); // U+83D6
  assertThrows(
    () => {
      ms932Encoder.encode("\u83D7");
    },
    Error,
    "encode-error: U+83D7",
  );
  r = r && ([...ms932Encoder.encode("菘")].join(",") === "228,195"); // U+83D8
  assertThrows(
    () => {
      ms932Encoder.encode("\u83D9");
    },
    Error,
    "encode-error: U+83D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83DA");
    },
    Error,
    "encode-error: U+83DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83DB");
    },
    Error,
    "encode-error: U+83DB",
  );
  r = r && ([...ms932Encoder.encode("菜")].join(",") === "141,216"); // U+83DC
  assertThrows(
    () => {
      ms932Encoder.encode("\u83DD");
    },
    Error,
    "encode-error: U+83DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83DE");
    },
    Error,
    "encode-error: U+83DE",
  );
  r = r && ([...ms932Encoder.encode("菟菠")].join(",") === "147,112,228,200"); // U+83DF
  assertThrows(
    () => {
      ms932Encoder.encode("\u83E1");
    },
    Error,
    "encode-error: U+83E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83E2");
    },
    Error,
    "encode-error: U+83E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83E3");
    },
    Error,
    "encode-error: U+83E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83E4");
    },
    Error,
    "encode-error: U+83E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83E5");
    },
    Error,
    "encode-error: U+83E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83E6");
    },
    Error,
    "encode-error: U+83E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83E7");
    },
    Error,
    "encode-error: U+83E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83E8");
    },
    Error,
    "encode-error: U+83E8",
  );
  r = r && ([...ms932Encoder.encode("菩")].join(",") === "149,236"); // U+83E9
  assertThrows(
    () => {
      ms932Encoder.encode("\u83EA");
    },
    Error,
    "encode-error: U+83EA",
  );
  r = r && ([...ms932Encoder.encode("菫")].join(",") === "228,191"); // U+83EB
  assertThrows(
    () => {
      ms932Encoder.encode("\u83EC");
    },
    Error,
    "encode-error: U+83EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83ED");
    },
    Error,
    "encode-error: U+83ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83EE");
    },
    Error,
    "encode-error: U+83EE",
  );
  r = r &&
    ([...ms932Encoder.encode("華菰菱菲")].join(",") ===
      "137,216,140,212,149,72,228,201"); // U+83EF
  assertThrows(
    () => {
      ms932Encoder.encode("\u83F3");
    },
    Error,
    "encode-error: U+83F3",
  );
  r = r && ([...ms932Encoder.encode("菴")].join(",") === "228,189"); // U+83F4
  assertThrows(
    () => {
      ms932Encoder.encode("\u83F5");
    },
    Error,
    "encode-error: U+83F5",
  );
  r = r && ([...ms932Encoder.encode("菶菷")].join(",") === "251,151,228,198"); // U+83F6
  assertThrows(
    () => {
      ms932Encoder.encode("\u83F8");
    },
    Error,
    "encode-error: U+83F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83F9");
    },
    Error,
    "encode-error: U+83F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83FA");
    },
    Error,
    "encode-error: U+83FA",
  );
  r = r && ([...ms932Encoder.encode("菻")].join(",") === "228,208"); // U+83FB
  assertThrows(
    () => {
      ms932Encoder.encode("\u83FC");
    },
    Error,
    "encode-error: U+83FC",
  );
  r = r && ([...ms932Encoder.encode("菽")].join(",") === "228,193"); // U+83FD
  assertThrows(
    () => {
      ms932Encoder.encode("\u83FE");
    },
    Error,
    "encode-error: U+83FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u83FF");
    },
    Error,
    "encode-error: U+83FF",
  );

  assertStrictEquals(r, true);
});
