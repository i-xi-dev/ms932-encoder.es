import { assertStrictEquals, assertThrows } from "std/testing/asserts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+6C00-U+6FFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C00");
    },
    Error,
    "EncodingError U+6C00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C01");
    },
    Error,
    "EncodingError U+6C01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C02");
    },
    Error,
    "EncodingError U+6C02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C03");
    },
    Error,
    "EncodingError U+6C03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C04");
    },
    Error,
    "EncodingError U+6C04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C05");
    },
    Error,
    "EncodingError U+6C05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C06");
    },
    Error,
    "EncodingError U+6C06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C07");
    },
    Error,
    "EncodingError U+6C07",
  );
  r = r && ([...ms932Encoder.encode("氈")].join(",") === "159,129"); // U+6C08
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C09");
    },
    Error,
    "EncodingError U+6C09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C0A");
    },
    Error,
    "EncodingError U+6C0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C0B");
    },
    Error,
    "EncodingError U+6C0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C0C");
    },
    Error,
    "EncodingError U+6C0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C0D");
    },
    Error,
    "EncodingError U+6C0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C0E");
    },
    Error,
    "EncodingError U+6C0E",
  );
  r = r && ([...ms932Encoder.encode("氏")].join(",") === "142,129"); // U+6C0F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C10");
    },
    Error,
    "EncodingError U+6C10",
  );
  r = r && ([...ms932Encoder.encode("民")].join(",") === "150,175"); // U+6C11
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C12");
    },
    Error,
    "EncodingError U+6C12",
  );
  r = r && ([...ms932Encoder.encode("氓气")].join(",") === "159,130,159,131"); // U+6C13
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C15");
    },
    Error,
    "EncodingError U+6C15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C16");
    },
    Error,
    "EncodingError U+6C16",
  );
  r = r && ([...ms932Encoder.encode("気")].join(",") === "139,67"); // U+6C17
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C18");
    },
    Error,
    "EncodingError U+6C18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C19");
    },
    Error,
    "EncodingError U+6C19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C1A");
    },
    Error,
    "EncodingError U+6C1A",
  );
  r = r && ([...ms932Encoder.encode("氛")].join(",") === "159,132"); // U+6C1B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C1C");
    },
    Error,
    "EncodingError U+6C1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C1D");
    },
    Error,
    "EncodingError U+6C1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C1E");
    },
    Error,
    "EncodingError U+6C1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C1F");
    },
    Error,
    "EncodingError U+6C1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C20");
    },
    Error,
    "EncodingError U+6C20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C21");
    },
    Error,
    "EncodingError U+6C21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C22");
    },
    Error,
    "EncodingError U+6C22",
  );
  r = r && ([...ms932Encoder.encode("氣氤")].join(",") === "159,134,159,133"); // U+6C23
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C25");
    },
    Error,
    "EncodingError U+6C25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C26");
    },
    Error,
    "EncodingError U+6C26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C27");
    },
    Error,
    "EncodingError U+6C27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C28");
    },
    Error,
    "EncodingError U+6C28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C29");
    },
    Error,
    "EncodingError U+6C29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C2A");
    },
    Error,
    "EncodingError U+6C2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C2B");
    },
    Error,
    "EncodingError U+6C2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C2C");
    },
    Error,
    "EncodingError U+6C2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C2D");
    },
    Error,
    "EncodingError U+6C2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C2E");
    },
    Error,
    "EncodingError U+6C2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C2F");
    },
    Error,
    "EncodingError U+6C2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C30");
    },
    Error,
    "EncodingError U+6C30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C31");
    },
    Error,
    "EncodingError U+6C31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C32");
    },
    Error,
    "EncodingError U+6C32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C33");
    },
    Error,
    "EncodingError U+6C33",
  );
  r = r && ([...ms932Encoder.encode("水")].join(",") === "144,133"); // U+6C34
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C35");
    },
    Error,
    "EncodingError U+6C35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C36");
    },
    Error,
    "EncodingError U+6C36",
  );
  r = r && ([...ms932Encoder.encode("氷永")].join(",") === "149,88,137,105"); // U+6C37
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C39");
    },
    Error,
    "EncodingError U+6C39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C3A");
    },
    Error,
    "EncodingError U+6C3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C3B");
    },
    Error,
    "EncodingError U+6C3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C3C");
    },
    Error,
    "EncodingError U+6C3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C3D");
    },
    Error,
    "EncodingError U+6C3D",
  );
  r = r &&
    ([...ms932Encoder.encode("氾氿汀汁求")].join(",") ===
      "148,195,250,245,146,243,143,96,139,129"); // U+6C3E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C43");
    },
    Error,
    "EncodingError U+6C43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C44");
    },
    Error,
    "EncodingError U+6C44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C45");
    },
    Error,
    "EncodingError U+6C45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C46");
    },
    Error,
    "EncodingError U+6C46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C47");
    },
    Error,
    "EncodingError U+6C47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C48");
    },
    Error,
    "EncodingError U+6C48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C49");
    },
    Error,
    "EncodingError U+6C49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C4A");
    },
    Error,
    "EncodingError U+6C4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C4B");
    },
    Error,
    "EncodingError U+6C4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C4C");
    },
    Error,
    "EncodingError U+6C4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C4D");
    },
    Error,
    "EncodingError U+6C4D",
  );
  r = r && ([...ms932Encoder.encode("汎")].join(",") === "148,196"); // U+6C4E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C4F");
    },
    Error,
    "EncodingError U+6C4F",
  );
  r = r && ([...ms932Encoder.encode("汐")].join(",") === "142,172"); // U+6C50
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C51");
    },
    Error,
    "EncodingError U+6C51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C52");
    },
    Error,
    "EncodingError U+6C52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C53");
    },
    Error,
    "EncodingError U+6C53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C54");
    },
    Error,
    "EncodingError U+6C54",
  );
  r = r && ([...ms932Encoder.encode("汕")].join(",") === "159,136"); // U+6C55
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C56");
    },
    Error,
    "EncodingError U+6C56",
  );
  r = r && ([...ms932Encoder.encode("汗")].join(",") === "138,190"); // U+6C57
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C58");
    },
    Error,
    "EncodingError U+6C58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C59");
    },
    Error,
    "EncodingError U+6C59",
  );
  r = r && ([...ms932Encoder.encode("汚")].join(",") === "137,152"); // U+6C5A
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C5B");
    },
    Error,
    "EncodingError U+6C5B",
  );
  r = r &&
    ([...ms932Encoder.encode("汜汝汞江池")].join(",") ===
      "250,246,147,240,159,135,141,93,146,114"); // U+6C5C
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C61");
    },
    Error,
    "EncodingError U+6C61",
  );
  r = r && ([...ms932Encoder.encode("汢")].join(",") === "159,137"); // U+6C62
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C63");
    },
    Error,
    "EncodingError U+6C63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C64");
    },
    Error,
    "EncodingError U+6C64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C65");
    },
    Error,
    "EncodingError U+6C65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C66");
    },
    Error,
    "EncodingError U+6C66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C67");
    },
    Error,
    "EncodingError U+6C67",
  );
  r = r && ([...ms932Encoder.encode("汨")].join(",") === "159,145"); // U+6C68
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C69");
    },
    Error,
    "EncodingError U+6C69",
  );
  r = r && ([...ms932Encoder.encode("汪")].join(",") === "159,138"); // U+6C6A
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C6B");
    },
    Error,
    "EncodingError U+6C6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C6C");
    },
    Error,
    "EncodingError U+6C6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C6D");
    },
    Error,
    "EncodingError U+6C6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C6E");
    },
    Error,
    "EncodingError U+6C6E",
  );
  r = r && ([...ms932Encoder.encode("汯汰")].join(",") === "250,248,145,191"); // U+6C6F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C71");
    },
    Error,
    "EncodingError U+6C71",
  );
  r = r && ([...ms932Encoder.encode("汲汳")].join(",") === "139,130,159,146"); // U+6C72
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C74");
    },
    Error,
    "EncodingError U+6C74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C75");
    },
    Error,
    "EncodingError U+6C75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C76");
    },
    Error,
    "EncodingError U+6C76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C77");
    },
    Error,
    "EncodingError U+6C77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C78");
    },
    Error,
    "EncodingError U+6C78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C79");
    },
    Error,
    "EncodingError U+6C79",
  );
  r = r && ([...ms932Encoder.encode("決")].join(",") === "140,136"); // U+6C7A
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C7B");
    },
    Error,
    "EncodingError U+6C7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C7C");
    },
    Error,
    "EncodingError U+6C7C",
  );
  r = r && ([...ms932Encoder.encode("汽汾")].join(",") === "139,68,159,144"); // U+6C7D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C7F");
    },
    Error,
    "EncodingError U+6C7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C80");
    },
    Error,
    "EncodingError U+6C80",
  );
  r = r &&
    ([...ms932Encoder.encode("沁沂沃")].join(",") === "159,142,159,139,151,128"); // U+6C81
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C84");
    },
    Error,
    "EncodingError U+6C84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C85");
    },
    Error,
    "EncodingError U+6C85",
  );
  r = r && ([...ms932Encoder.encode("沆")].join(",") === "250,247"); // U+6C86
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C87");
    },
    Error,
    "EncodingError U+6C87",
  );
  r = r && ([...ms932Encoder.encode("沈")].join(",") === "146,190"); // U+6C88
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C89");
    },
    Error,
    "EncodingError U+6C89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C8A");
    },
    Error,
    "EncodingError U+6C8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C8B");
    },
    Error,
    "EncodingError U+6C8B",
  );
  r = r && ([...ms932Encoder.encode("沌沍")].join(",") === "147,215,159,140"); // U+6C8C
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C8E");
    },
    Error,
    "EncodingError U+6C8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C8F");
    },
    Error,
    "EncodingError U+6C8F",
  );
  r = r && ([...ms932Encoder.encode("沐")].join(",") === "159,148"); // U+6C90
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C91");
    },
    Error,
    "EncodingError U+6C91",
  );
  r = r && ([...ms932Encoder.encode("沒沓")].join(",") === "159,147,140,66"); // U+6C92
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C94");
    },
    Error,
    "EncodingError U+6C94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C95");
    },
    Error,
    "EncodingError U+6C95",
  );
  r = r && ([...ms932Encoder.encode("沖")].join(",") === "137,171"); // U+6C96
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C97");
    },
    Error,
    "EncodingError U+6C97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C98");
    },
    Error,
    "EncodingError U+6C98",
  );
  r = r &&
    ([...ms932Encoder.encode("沙沚沛")].join(",") === "141,185,159,141,159,143"); // U+6C99
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C9C");
    },
    Error,
    "EncodingError U+6C9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C9D");
    },
    Error,
    "EncodingError U+6C9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C9E");
    },
    Error,
    "EncodingError U+6C9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6C9F");
    },
    Error,
    "EncodingError U+6C9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CA0");
    },
    Error,
    "EncodingError U+6CA0",
  );
  r = r && ([...ms932Encoder.encode("没沢")].join(",") === "150,118,145,242"); // U+6CA1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CA3");
    },
    Error,
    "EncodingError U+6CA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CA4");
    },
    Error,
    "EncodingError U+6CA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CA5");
    },
    Error,
    "EncodingError U+6CA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CA6");
    },
    Error,
    "EncodingError U+6CA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CA7");
    },
    Error,
    "EncodingError U+6CA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CA8");
    },
    Error,
    "EncodingError U+6CA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CA9");
    },
    Error,
    "EncodingError U+6CA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CAA");
    },
    Error,
    "EncodingError U+6CAA",
  );
  r = r && ([...ms932Encoder.encode("沫")].join(",") === "150,151"); // U+6CAB
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CAC");
    },
    Error,
    "EncodingError U+6CAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CAD");
    },
    Error,
    "EncodingError U+6CAD",
  );
  r = r && ([...ms932Encoder.encode("沮")].join(",") === "159,156"); // U+6CAE
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CAF");
    },
    Error,
    "EncodingError U+6CAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CB0");
    },
    Error,
    "EncodingError U+6CB0",
  );
  r = r && ([...ms932Encoder.encode("沱")].join(",") === "159,157"); // U+6CB1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CB2");
    },
    Error,
    "EncodingError U+6CB2",
  );
  r = r && ([...ms932Encoder.encode("河")].join(",") === "137,205"); // U+6CB3
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CB4");
    },
    Error,
    "EncodingError U+6CB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CB5");
    },
    Error,
    "EncodingError U+6CB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CB6");
    },
    Error,
    "EncodingError U+6CB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CB7");
    },
    Error,
    "EncodingError U+6CB7",
  );
  r = r &&
    ([...ms932Encoder.encode("沸油沺治沼沽沾沿")].join(",") ===
      "149,166,150,251,159,159,142,161,143,192,159,152,159,158,137,136"); // U+6CB8
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CC0");
    },
    Error,
    "EncodingError U+6CC0",
  );
  r = r && ([...ms932Encoder.encode("況")].join(",") === "139,181"); // U+6CC1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CC2");
    },
    Error,
    "EncodingError U+6CC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CC3");
    },
    Error,
    "EncodingError U+6CC3",
  );
  r = r && ([...ms932Encoder.encode("泄泅")].join(",") === "159,149,159,154"); // U+6CC4
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CC6");
    },
    Error,
    "EncodingError U+6CC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CC7");
    },
    Error,
    "EncodingError U+6CC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CC8");
    },
    Error,
    "EncodingError U+6CC8",
  );
  r = r && ([...ms932Encoder.encode("泉泊")].join(",") === "144,242,148,145"); // U+6CC9
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CCB");
    },
    Error,
    "EncodingError U+6CCB",
  );
  r = r && ([...ms932Encoder.encode("泌")].join(",") === "148,229"); // U+6CCC
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CCD");
    },
    Error,
    "EncodingError U+6CCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CCE");
    },
    Error,
    "EncodingError U+6CCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CCF");
    },
    Error,
    "EncodingError U+6CCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CD0");
    },
    Error,
    "EncodingError U+6CD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CD1");
    },
    Error,
    "EncodingError U+6CD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CD2");
    },
    Error,
    "EncodingError U+6CD2",
  );
  r = r && ([...ms932Encoder.encode("泓")].join(",") === "159,151"); // U+6CD3
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CD4");
    },
    Error,
    "EncodingError U+6CD4",
  );
  r = r && ([...ms932Encoder.encode("法")].join(",") === "150,64"); // U+6CD5
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CD6");
    },
    Error,
    "EncodingError U+6CD6",
  );
  r = r && ([...ms932Encoder.encode("泗")].join(",") === "159,153"); // U+6CD7
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CD8");
    },
    Error,
    "EncodingError U+6CD8",
  );
  r = r &&
    ([...ms932Encoder.encode("泙泚泛")].join(",") === "159,162,250,249,159,160"); // U+6CD9
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CDC");
    },
    Error,
    "EncodingError U+6CDC",
  );
  r = r && ([...ms932Encoder.encode("泝")].join(",") === "159,155"); // U+6CDD
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CDE");
    },
    Error,
    "EncodingError U+6CDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CDF");
    },
    Error,
    "EncodingError U+6CDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CE0");
    },
    Error,
    "EncodingError U+6CE0",
  );
  r = r &&
    ([...ms932Encoder.encode("泡波泣")].join(",") === "150,65,148,103,139,131"); // U+6CE1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CE4");
    },
    Error,
    "EncodingError U+6CE4",
  );
  r = r && ([...ms932Encoder.encode("泥")].join(",") === "147,68"); // U+6CE5
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CE6");
    },
    Error,
    "EncodingError U+6CE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CE7");
    },
    Error,
    "EncodingError U+6CE7",
  );
  r = r && ([...ms932Encoder.encode("注")].join(",") === "146,141"); // U+6CE8
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CE9");
    },
    Error,
    "EncodingError U+6CE9",
  );
  r = r && ([...ms932Encoder.encode("泪")].join(",") === "159,163"); // U+6CEA
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CEB");
    },
    Error,
    "EncodingError U+6CEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CEC");
    },
    Error,
    "EncodingError U+6CEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CED");
    },
    Error,
    "EncodingError U+6CED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CEE");
    },
    Error,
    "EncodingError U+6CEE",
  );
  r = r &&
    ([...ms932Encoder.encode("泯泰泱")].join(",") === "159,161,145,215,159,150"); // U+6CEF
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CF2");
    },
    Error,
    "EncodingError U+6CF2",
  );
  r = r && ([...ms932Encoder.encode("泳")].join(",") === "137,106"); // U+6CF3
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CF4");
    },
    Error,
    "EncodingError U+6CF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CF5");
    },
    Error,
    "EncodingError U+6CF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CF6");
    },
    Error,
    "EncodingError U+6CF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CF7");
    },
    Error,
    "EncodingError U+6CF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CF8");
    },
    Error,
    "EncodingError U+6CF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CF9");
    },
    Error,
    "EncodingError U+6CF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CFA");
    },
    Error,
    "EncodingError U+6CFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CFB");
    },
    Error,
    "EncodingError U+6CFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CFC");
    },
    Error,
    "EncodingError U+6CFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CFD");
    },
    Error,
    "EncodingError U+6CFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CFE");
    },
    Error,
    "EncodingError U+6CFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6CFF");
    },
    Error,
    "EncodingError U+6CFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D00");
    },
    Error,
    "EncodingError U+6D00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D01");
    },
    Error,
    "EncodingError U+6D01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D02");
    },
    Error,
    "EncodingError U+6D02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D03");
    },
    Error,
    "EncodingError U+6D03",
  );
  r = r && ([...ms932Encoder.encode("洄")].join(",") === "250,250"); // U+6D04
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D05");
    },
    Error,
    "EncodingError U+6D05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D06");
    },
    Error,
    "EncodingError U+6D06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D07");
    },
    Error,
    "EncodingError U+6D07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D08");
    },
    Error,
    "EncodingError U+6D08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D09");
    },
    Error,
    "EncodingError U+6D09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D0A");
    },
    Error,
    "EncodingError U+6D0A",
  );
  r = r && ([...ms932Encoder.encode("洋洌")].join(",") === "151,109,159,174"); // U+6D0B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D0D");
    },
    Error,
    "EncodingError U+6D0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D0E");
    },
    Error,
    "EncodingError U+6D0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D0F");
    },
    Error,
    "EncodingError U+6D0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D10");
    },
    Error,
    "EncodingError U+6D10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D11");
    },
    Error,
    "EncodingError U+6D11",
  );
  r = r && ([...ms932Encoder.encode("洒")].join(",") === "159,173"); // U+6D12
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D13");
    },
    Error,
    "EncodingError U+6D13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D14");
    },
    Error,
    "EncodingError U+6D14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D15");
    },
    Error,
    "EncodingError U+6D15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D16");
    },
    Error,
    "EncodingError U+6D16",
  );
  r = r && ([...ms932Encoder.encode("洗")].join(",") === "144,244"); // U+6D17
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D18");
    },
    Error,
    "EncodingError U+6D18",
  );
  r = r && ([...ms932Encoder.encode("洙")].join(",") === "159,170"); // U+6D19
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D1A");
    },
    Error,
    "EncodingError U+6D1A",
  );
  r = r && ([...ms932Encoder.encode("洛")].join(",") === "151,140"); // U+6D1B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D1C");
    },
    Error,
    "EncodingError U+6D1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D1D");
    },
    Error,
    "EncodingError U+6D1D",
  );
  r = r && ([...ms932Encoder.encode("洞洟")].join(",") === "147,180,159,164"); // U+6D1E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D20");
    },
    Error,
    "EncodingError U+6D20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D21");
    },
    Error,
    "EncodingError U+6D21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D22");
    },
    Error,
    "EncodingError U+6D22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D23");
    },
    Error,
    "EncodingError U+6D23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D24");
    },
    Error,
    "EncodingError U+6D24",
  );
  r = r && ([...ms932Encoder.encode("津")].join(",") === "146,195"); // U+6D25
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D26");
    },
    Error,
    "EncodingError U+6D26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D27");
    },
    Error,
    "EncodingError U+6D27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D28");
    },
    Error,
    "EncodingError U+6D28",
  );
  r = r &&
    ([...ms932Encoder.encode("洩洪洫")].join(",") === "137,107,141,94,159,167"); // U+6D29
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D2C");
    },
    Error,
    "EncodingError U+6D2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D2D");
    },
    Error,
    "EncodingError U+6D2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D2E");
    },
    Error,
    "EncodingError U+6D2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D2F");
    },
    Error,
    "EncodingError U+6D2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D30");
    },
    Error,
    "EncodingError U+6D30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D31");
    },
    Error,
    "EncodingError U+6D31",
  );
  r = r && ([...ms932Encoder.encode("洲洳")].join(",") === "143,70,159,172"); // U+6D32
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D34");
    },
    Error,
    "EncodingError U+6D34",
  );
  r = r && ([...ms932Encoder.encode("洵洶")].join(",") === "159,171,159,166"); // U+6D35
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D37");
    },
    Error,
    "EncodingError U+6D37",
  );
  r = r && ([...ms932Encoder.encode("洸")].join(",") === "159,169"); // U+6D38
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D39");
    },
    Error,
    "EncodingError U+6D39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D3A");
    },
    Error,
    "EncodingError U+6D3A",
  );
  r = r && ([...ms932Encoder.encode("活")].join(",") === "138,136"); // U+6D3B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D3C");
    },
    Error,
    "EncodingError U+6D3C",
  );
  r = r && ([...ms932Encoder.encode("洽派")].join(",") === "159,168,148,104"); // U+6D3D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D3F");
    },
    Error,
    "EncodingError U+6D3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D40");
    },
    Error,
    "EncodingError U+6D40",
  );
  r = r && ([...ms932Encoder.encode("流")].join(",") === "151,172"); // U+6D41
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D42");
    },
    Error,
    "EncodingError U+6D42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D43");
    },
    Error,
    "EncodingError U+6D43",
  );
  r = r && ([...ms932Encoder.encode("浄浅")].join(",") === "143,242,144,243"); // U+6D44
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D46");
    },
    Error,
    "EncodingError U+6D46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D47");
    },
    Error,
    "EncodingError U+6D47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D48");
    },
    Error,
    "EncodingError U+6D48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D49");
    },
    Error,
    "EncodingError U+6D49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D4A");
    },
    Error,
    "EncodingError U+6D4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D4B");
    },
    Error,
    "EncodingError U+6D4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D4C");
    },
    Error,
    "EncodingError U+6D4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D4D");
    },
    Error,
    "EncodingError U+6D4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D4E");
    },
    Error,
    "EncodingError U+6D4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D4F");
    },
    Error,
    "EncodingError U+6D4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D50");
    },
    Error,
    "EncodingError U+6D50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D51");
    },
    Error,
    "EncodingError U+6D51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D52");
    },
    Error,
    "EncodingError U+6D52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D53");
    },
    Error,
    "EncodingError U+6D53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D54");
    },
    Error,
    "EncodingError U+6D54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D55");
    },
    Error,
    "EncodingError U+6D55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D56");
    },
    Error,
    "EncodingError U+6D56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D57");
    },
    Error,
    "EncodingError U+6D57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D58");
    },
    Error,
    "EncodingError U+6D58",
  );
  r = r && ([...ms932Encoder.encode("浙浚")].join(",") === "159,180,159,178"); // U+6D59
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D5B");
    },
    Error,
    "EncodingError U+6D5B",
  );
  r = r && ([...ms932Encoder.encode("浜")].join(",") === "149,108"); // U+6D5C
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D5D");
    },
    Error,
    "EncodingError U+6D5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D5E");
    },
    Error,
    "EncodingError U+6D5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D5F");
    },
    Error,
    "EncodingError U+6D5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D60");
    },
    Error,
    "EncodingError U+6D60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D61");
    },
    Error,
    "EncodingError U+6D61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D62");
    },
    Error,
    "EncodingError U+6D62",
  );
  r = r && ([...ms932Encoder.encode("浣浤")].join(",") === "159,175,159,177"); // U+6D63
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D65");
    },
    Error,
    "EncodingError U+6D65",
  );
  r = r && ([...ms932Encoder.encode("浦")].join(",") === "137,89"); // U+6D66
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D67");
    },
    Error,
    "EncodingError U+6D67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D68");
    },
    Error,
    "EncodingError U+6D68",
  );
  r = r && ([...ms932Encoder.encode("浩浪")].join(",") === "141,95,152,81"); // U+6D69
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D6B");
    },
    Error,
    "EncodingError U+6D6B",
  );
  r = r && ([...ms932Encoder.encode("浬")].join(",") === "138,92"); // U+6D6C
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D6D");
    },
    Error,
    "EncodingError U+6D6D",
  );
  r = r && ([...ms932Encoder.encode("浮浯")].join(",") === "149,130,250,252"); // U+6D6E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D70");
    },
    Error,
    "EncodingError U+6D70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D71");
    },
    Error,
    "EncodingError U+6D71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D72");
    },
    Error,
    "EncodingError U+6D72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D73");
    },
    Error,
    "EncodingError U+6D73",
  );
  r = r && ([...ms932Encoder.encode("浴")].join(",") === "151,129"); // U+6D74
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D75");
    },
    Error,
    "EncodingError U+6D75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D76");
    },
    Error,
    "EncodingError U+6D76",
  );
  r = r &&
    ([...ms932Encoder.encode("海浸浹")].join(",") === "138,67,144,90,159,179"); // U+6D77
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D7A");
    },
    Error,
    "EncodingError U+6D7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D7B");
    },
    Error,
    "EncodingError U+6D7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D7C");
    },
    Error,
    "EncodingError U+6D7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D7D");
    },
    Error,
    "EncodingError U+6D7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D7E");
    },
    Error,
    "EncodingError U+6D7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D7F");
    },
    Error,
    "EncodingError U+6D7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D80");
    },
    Error,
    "EncodingError U+6D80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D81");
    },
    Error,
    "EncodingError U+6D81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D82");
    },
    Error,
    "EncodingError U+6D82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D83");
    },
    Error,
    "EncodingError U+6D83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D84");
    },
    Error,
    "EncodingError U+6D84",
  );
  r = r && ([...ms932Encoder.encode("涅")].join(",") === "159,184"); // U+6D85
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D86");
    },
    Error,
    "EncodingError U+6D86",
  );
  r = r && ([...ms932Encoder.encode("涇消")].join(",") === "250,251,143,193"); // U+6D87
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D89");
    },
    Error,
    "EncodingError U+6D89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D8A");
    },
    Error,
    "EncodingError U+6D8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D8B");
    },
    Error,
    "EncodingError U+6D8B",
  );
  r = r && ([...ms932Encoder.encode("涌")].join(",") === "151,79"); // U+6D8C
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D8D");
    },
    Error,
    "EncodingError U+6D8D",
  );
  r = r && ([...ms932Encoder.encode("涎")].join(",") === "159,181"); // U+6D8E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D8F");
    },
    Error,
    "EncodingError U+6D8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D90");
    },
    Error,
    "EncodingError U+6D90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D91");
    },
    Error,
    "EncodingError U+6D91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D92");
    },
    Error,
    "EncodingError U+6D92",
  );
  r = r && ([...ms932Encoder.encode("涓")].join(",") === "159,176"); // U+6D93
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D94");
    },
    Error,
    "EncodingError U+6D94",
  );
  r = r && ([...ms932Encoder.encode("涕涖")].join(",") === "159,182,251,64"); // U+6D95
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D97");
    },
    Error,
    "EncodingError U+6D97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D98");
    },
    Error,
    "EncodingError U+6D98",
  );
  r = r && ([...ms932Encoder.encode("涙")].join(",") === "151,220"); // U+6D99
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D9A");
    },
    Error,
    "EncodingError U+6D9A",
  );
  r = r && ([...ms932Encoder.encode("涛涜")].join(",") === "147,147,147,192"); // U+6D9B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D9D");
    },
    Error,
    "EncodingError U+6D9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D9E");
    },
    Error,
    "EncodingError U+6D9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6D9F");
    },
    Error,
    "EncodingError U+6D9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DA0");
    },
    Error,
    "EncodingError U+6DA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DA1");
    },
    Error,
    "EncodingError U+6DA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DA2");
    },
    Error,
    "EncodingError U+6DA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DA3");
    },
    Error,
    "EncodingError U+6DA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DA4");
    },
    Error,
    "EncodingError U+6DA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DA5");
    },
    Error,
    "EncodingError U+6DA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DA6");
    },
    Error,
    "EncodingError U+6DA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DA7");
    },
    Error,
    "EncodingError U+6DA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DA8");
    },
    Error,
    "EncodingError U+6DA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DA9");
    },
    Error,
    "EncodingError U+6DA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DAA");
    },
    Error,
    "EncodingError U+6DAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DAB");
    },
    Error,
    "EncodingError U+6DAB",
  );
  r = r && ([...ms932Encoder.encode("涬")].join(",") === "251,65"); // U+6DAC
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DAD");
    },
    Error,
    "EncodingError U+6DAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DAE");
    },
    Error,
    "EncodingError U+6DAE",
  );
  r = r && ([...ms932Encoder.encode("涯")].join(",") === "138,85"); // U+6DAF
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DB0");
    },
    Error,
    "EncodingError U+6DB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DB1");
    },
    Error,
    "EncodingError U+6DB1",
  );
  r = r && ([...ms932Encoder.encode("液")].join(",") === "137,116"); // U+6DB2
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DB3");
    },
    Error,
    "EncodingError U+6DB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DB4");
    },
    Error,
    "EncodingError U+6DB4",
  );
  r = r && ([...ms932Encoder.encode("涵")].join(",") === "159,188"); // U+6DB5
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DB6");
    },
    Error,
    "EncodingError U+6DB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DB7");
    },
    Error,
    "EncodingError U+6DB7",
  );
  r = r && ([...ms932Encoder.encode("涸")].join(",") === "159,191"); // U+6DB8
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DB9");
    },
    Error,
    "EncodingError U+6DB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DBA");
    },
    Error,
    "EncodingError U+6DBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DBB");
    },
    Error,
    "EncodingError U+6DBB",
  );
  r = r && ([...ms932Encoder.encode("涼")].join(",") === "151,193"); // U+6DBC
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DBD");
    },
    Error,
    "EncodingError U+6DBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DBE");
    },
    Error,
    "EncodingError U+6DBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DBF");
    },
    Error,
    "EncodingError U+6DBF",
  );
  r = r && ([...ms932Encoder.encode("淀")].join(",") === "151,132"); // U+6DC0
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DC1");
    },
    Error,
    "EncodingError U+6DC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DC2");
    },
    Error,
    "EncodingError U+6DC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DC3");
    },
    Error,
    "EncodingError U+6DC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DC4");
    },
    Error,
    "EncodingError U+6DC4",
  );
  r = r &&
    ([...ms932Encoder.encode("淅淆淇")].join(",") === "159,198,159,192,159,189"); // U+6DC5
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DC8");
    },
    Error,
    "EncodingError U+6DC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DC9");
    },
    Error,
    "EncodingError U+6DC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DCA");
    },
    Error,
    "EncodingError U+6DCA",
  );
  r = r && ([...ms932Encoder.encode("淋淌")].join(",") === "151,210,159,195"); // U+6DCB
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DCD");
    },
    Error,
    "EncodingError U+6DCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DCE");
    },
    Error,
    "EncodingError U+6DCE",
  );
  r = r && ([...ms932Encoder.encode("淏")].join(",") === "251,66"); // U+6DCF
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DD0");
    },
    Error,
    "EncodingError U+6DD0",
  );
  r = r && ([...ms932Encoder.encode("淑淒")].join(",") === "143,105,159,197"); // U+6DD1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DD3");
    },
    Error,
    "EncodingError U+6DD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DD4");
    },
    Error,
    "EncodingError U+6DD4",
  );
  r = r && ([...ms932Encoder.encode("淕")].join(",") === "159,202"); // U+6DD5
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DD6");
    },
    Error,
    "EncodingError U+6DD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DD7");
    },
    Error,
    "EncodingError U+6DD7",
  );
  r = r && ([...ms932Encoder.encode("淘淙")].join(",") === "147,145,159,200"); // U+6DD8
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DDA");
    },
    Error,
    "EncodingError U+6DDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DDB");
    },
    Error,
    "EncodingError U+6DDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DDC");
    },
    Error,
    "EncodingError U+6DDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DDD");
    },
    Error,
    "EncodingError U+6DDD",
  );
  r = r && ([...ms932Encoder.encode("淞")].join(",") === "159,194"); // U+6DDE
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DDF");
    },
    Error,
    "EncodingError U+6DDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DE0");
    },
    Error,
    "EncodingError U+6DE0",
  );
  r = r && ([...ms932Encoder.encode("淡")].join(",") === "146,87"); // U+6DE1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DE2");
    },
    Error,
    "EncodingError U+6DE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DE3");
    },
    Error,
    "EncodingError U+6DE3",
  );
  r = r && ([...ms932Encoder.encode("淤")].join(",") === "159,201"); // U+6DE4
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DE5");
    },
    Error,
    "EncodingError U+6DE5",
  );
  r = r && ([...ms932Encoder.encode("淦")].join(",") === "159,190"); // U+6DE6
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DE7");
    },
    Error,
    "EncodingError U+6DE7",
  );
  r = r && ([...ms932Encoder.encode("淨")].join(",") === "159,196"); // U+6DE8
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DE9");
    },
    Error,
    "EncodingError U+6DE9",
  );
  r = r &&
    ([...ms932Encoder.encode("淪淫淬")].join(",") === "159,203,136,250,159,193"); // U+6DEA
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DED");
    },
    Error,
    "EncodingError U+6DED",
  );
  r = r && ([...ms932Encoder.encode("淮")].join(",") === "159,204"); // U+6DEE
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DEF");
    },
    Error,
    "EncodingError U+6DEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DF0");
    },
    Error,
    "EncodingError U+6DF0",
  );
  r = r &&
    ([...ms932Encoder.encode("深淲淳")].join(",") === "144,91,251,68,143,126"); // U+6DF1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DF4");
    },
    Error,
    "EncodingError U+6DF4",
  );
  r = r && ([...ms932Encoder.encode("淵")].join(",") === "149,163"); // U+6DF5
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DF6");
    },
    Error,
    "EncodingError U+6DF6",
  );
  r = r &&
    ([...ms932Encoder.encode("混淸淹淺添淼")].join(",") ===
      "141,172,251,67,159,185,159,199,147,89,251,69"); // U+6DF7
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DFD");
    },
    Error,
    "EncodingError U+6DFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DFE");
    },
    Error,
    "EncodingError U+6DFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6DFF");
    },
    Error,
    "EncodingError U+6DFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E00");
    },
    Error,
    "EncodingError U+6E00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E01");
    },
    Error,
    "EncodingError U+6E01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E02");
    },
    Error,
    "EncodingError U+6E02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E03");
    },
    Error,
    "EncodingError U+6E03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E04");
    },
    Error,
    "EncodingError U+6E04",
  );
  r = r && ([...ms932Encoder.encode("清")].join(",") === "144,180"); // U+6E05
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E06");
    },
    Error,
    "EncodingError U+6E06",
  );
  r = r &&
    ([...ms932Encoder.encode("渇済渉渊渋")].join(",") ===
      "138,137,141,207,143,194,159,187,143,97"); // U+6E07
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E0C");
    },
    Error,
    "EncodingError U+6E0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E0D");
    },
    Error,
    "EncodingError U+6E0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E0E");
    },
    Error,
    "EncodingError U+6E0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E0F");
    },
    Error,
    "EncodingError U+6E0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E10");
    },
    Error,
    "EncodingError U+6E10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E11");
    },
    Error,
    "EncodingError U+6E11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E12");
    },
    Error,
    "EncodingError U+6E12",
  );
  r = r && ([...ms932Encoder.encode("渓")].join(",") === "140,107"); // U+6E13
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E14");
    },
    Error,
    "EncodingError U+6E14",
  );
  r = r && ([...ms932Encoder.encode("渕")].join(",") === "159,186"); // U+6E15
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E16");
    },
    Error,
    "EncodingError U+6E16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E17");
    },
    Error,
    "EncodingError U+6E17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E18");
    },
    Error,
    "EncodingError U+6E18",
  );
  r = r &&
    ([...ms932Encoder.encode("渙渚減")].join(",") === "159,208,143,141,140,184"); // U+6E19
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E1C");
    },
    Error,
    "EncodingError U+6E1C",
  );
  r = r && ([...ms932Encoder.encode("渝")].join(",") === "159,223"); // U+6E1D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E1E");
    },
    Error,
    "EncodingError U+6E1E",
  );
  r = r &&
    ([...ms932Encoder.encode("渟渠渡")].join(",") === "159,217,139,148,147,110"); // U+6E1F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E22");
    },
    Error,
    "EncodingError U+6E22",
  );
  r = r &&
    ([...ms932Encoder.encode("渣渤渥渦渧")].join(",") ===
      "159,212,159,221,136,173,137,81,251,72"); // U+6E23
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E28");
    },
    Error,
    "EncodingError U+6E28",
  );
  r = r && ([...ms932Encoder.encode("温")].join(",") === "137,183"); // U+6E29
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E2A");
    },
    Error,
    "EncodingError U+6E2A",
  );
  r = r &&
    ([...ms932Encoder.encode("渫測渭渮港")].join(",") ===
      "159,214,145,170,159,205,159,207,141,96"); // U+6E2B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E30");
    },
    Error,
    "EncodingError U+6E30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E31");
    },
    Error,
    "EncodingError U+6E31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E32");
    },
    Error,
    "EncodingError U+6E32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E33");
    },
    Error,
    "EncodingError U+6E33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E34");
    },
    Error,
    "EncodingError U+6E34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E35");
    },
    Error,
    "EncodingError U+6E35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E36");
    },
    Error,
    "EncodingError U+6E36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E37");
    },
    Error,
    "EncodingError U+6E37",
  );
  r = r &&
    ([...ms932Encoder.encode("游渹渺")].join(",") === "159,224,251,70,159,219"); // U+6E38
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E3B");
    },
    Error,
    "EncodingError U+6E3B",
  );
  r = r && ([...ms932Encoder.encode("渼")].join(",") === "251,73"); // U+6E3C
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E3D");
    },
    Error,
    "EncodingError U+6E3D",
  );
  r = r && ([...ms932Encoder.encode("渾")].join(",") === "159,211"); // U+6E3E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E3F");
    },
    Error,
    "EncodingError U+6E3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E40");
    },
    Error,
    "EncodingError U+6E40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E41");
    },
    Error,
    "EncodingError U+6E41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E42");
    },
    Error,
    "EncodingError U+6E42",
  );
  r = r && ([...ms932Encoder.encode("湃")].join(",") === "159,218"); // U+6E43
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E44");
    },
    Error,
    "EncodingError U+6E44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E45");
    },
    Error,
    "EncodingError U+6E45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E46");
    },
    Error,
    "EncodingError U+6E46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E47");
    },
    Error,
    "EncodingError U+6E47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E48");
    },
    Error,
    "EncodingError U+6E48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E49");
    },
    Error,
    "EncodingError U+6E49",
  );
  r = r && ([...ms932Encoder.encode("湊")].join(",") === "150,169"); // U+6E4A
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E4B");
    },
    Error,
    "EncodingError U+6E4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E4C");
    },
    Error,
    "EncodingError U+6E4C",
  );
  r = r && ([...ms932Encoder.encode("湍湎")].join(",") === "159,216,159,220"); // U+6E4D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E4F");
    },
    Error,
    "EncodingError U+6E4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E50");
    },
    Error,
    "EncodingError U+6E50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E51");
    },
    Error,
    "EncodingError U+6E51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E52");
    },
    Error,
    "EncodingError U+6E52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E53");
    },
    Error,
    "EncodingError U+6E53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E54");
    },
    Error,
    "EncodingError U+6E54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E55");
    },
    Error,
    "EncodingError U+6E55",
  );
  r = r && ([...ms932Encoder.encode("湖")].join(",") === "140,206"); // U+6E56
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E57");
    },
    Error,
    "EncodingError U+6E57",
  );
  r = r && ([...ms932Encoder.encode("湘")].join(",") === "143,195"); // U+6E58
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E59");
    },
    Error,
    "EncodingError U+6E59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E5A");
    },
    Error,
    "EncodingError U+6E5A",
  );
  r = r && ([...ms932Encoder.encode("湛湜")].join(",") === "146,88,251,71"); // U+6E5B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E5D");
    },
    Error,
    "EncodingError U+6E5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E5E");
    },
    Error,
    "EncodingError U+6E5E",
  );
  r = r && ([...ms932Encoder.encode("湟")].join(",") === "159,210"); // U+6E5F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E60");
    },
    Error,
    "EncodingError U+6E60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E61");
    },
    Error,
    "EncodingError U+6E61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E62");
    },
    Error,
    "EncodingError U+6E62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E63");
    },
    Error,
    "EncodingError U+6E63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E64");
    },
    Error,
    "EncodingError U+6E64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E65");
    },
    Error,
    "EncodingError U+6E65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E66");
    },
    Error,
    "EncodingError U+6E66",
  );
  r = r && ([...ms932Encoder.encode("湧")].join(",") === "151,78"); // U+6E67
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E68");
    },
    Error,
    "EncodingError U+6E68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E69");
    },
    Error,
    "EncodingError U+6E69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E6A");
    },
    Error,
    "EncodingError U+6E6A",
  );
  r = r && ([...ms932Encoder.encode("湫")].join(",") === "159,213"); // U+6E6B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E6C");
    },
    Error,
    "EncodingError U+6E6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E6D");
    },
    Error,
    "EncodingError U+6E6D",
  );
  r = r && ([...ms932Encoder.encode("湮湯")].join(",") === "159,206,147,146"); // U+6E6E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E70");
    },
    Error,
    "EncodingError U+6E70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E71");
    },
    Error,
    "EncodingError U+6E71",
  );
  r = r && ([...ms932Encoder.encode("湲")].join(",") === "159,209"); // U+6E72
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E73");
    },
    Error,
    "EncodingError U+6E73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E74");
    },
    Error,
    "EncodingError U+6E74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E75");
    },
    Error,
    "EncodingError U+6E75",
  );
  r = r && ([...ms932Encoder.encode("湶")].join(",") === "159,215"); // U+6E76
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E77");
    },
    Error,
    "EncodingError U+6E77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E78");
    },
    Error,
    "EncodingError U+6E78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E79");
    },
    Error,
    "EncodingError U+6E79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E7A");
    },
    Error,
    "EncodingError U+6E7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E7B");
    },
    Error,
    "EncodingError U+6E7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E7C");
    },
    Error,
    "EncodingError U+6E7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E7D");
    },
    Error,
    "EncodingError U+6E7D",
  );
  r = r &&
    ([...ms932Encoder.encode("湾湿満")].join(",") === "152,112,142,188,150,158"); // U+6E7E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E81");
    },
    Error,
    "EncodingError U+6E81",
  );
  r = r && ([...ms932Encoder.encode("溂")].join(",") === "159,225"); // U+6E82
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E83");
    },
    Error,
    "EncodingError U+6E83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E84");
    },
    Error,
    "EncodingError U+6E84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E85");
    },
    Error,
    "EncodingError U+6E85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E86");
    },
    Error,
    "EncodingError U+6E86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E87");
    },
    Error,
    "EncodingError U+6E87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E88");
    },
    Error,
    "EncodingError U+6E88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E89");
    },
    Error,
    "EncodingError U+6E89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E8A");
    },
    Error,
    "EncodingError U+6E8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E8B");
    },
    Error,
    "EncodingError U+6E8B",
  );
  r = r && ([...ms932Encoder.encode("溌")].join(",") === "148,172"); // U+6E8C
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E8D");
    },
    Error,
    "EncodingError U+6E8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E8E");
    },
    Error,
    "EncodingError U+6E8E",
  );
  r = r && ([...ms932Encoder.encode("溏源")].join(",") === "159,237,140,185"); // U+6E8F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E91");
    },
    Error,
    "EncodingError U+6E91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E92");
    },
    Error,
    "EncodingError U+6E92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E93");
    },
    Error,
    "EncodingError U+6E93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E94");
    },
    Error,
    "EncodingError U+6E94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E95");
    },
    Error,
    "EncodingError U+6E95",
  );
  r = r && ([...ms932Encoder.encode("準")].join(",") === "143,128"); // U+6E96
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E97");
    },
    Error,
    "EncodingError U+6E97",
  );
  r = r && ([...ms932Encoder.encode("溘")].join(",") === "159,227"); // U+6E98
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E99");
    },
    Error,
    "EncodingError U+6E99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E9A");
    },
    Error,
    "EncodingError U+6E9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E9B");
    },
    Error,
    "EncodingError U+6E9B",
  );
  r = r && ([...ms932Encoder.encode("溜溝")].join(",") === "151,173,141,97"); // U+6E9C
  assertThrows(
    () => {
      ms932Encoder.encode("\u6E9E");
    },
    Error,
    "EncodingError U+6E9E",
  );
  r = r && ([...ms932Encoder.encode("溟")].join(",") === "159,240"); // U+6E9F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EA0");
    },
    Error,
    "EncodingError U+6EA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EA1");
    },
    Error,
    "EncodingError U+6EA1",
  );
  r = r && ([...ms932Encoder.encode("溢")].join(",") === "136,236"); // U+6EA2
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EA3");
    },
    Error,
    "EncodingError U+6EA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EA4");
    },
    Error,
    "EncodingError U+6EA4",
  );
  r = r && ([...ms932Encoder.encode("溥")].join(",") === "159,238"); // U+6EA5
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EA6");
    },
    Error,
    "EncodingError U+6EA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EA7");
    },
    Error,
    "EncodingError U+6EA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EA8");
    },
    Error,
    "EncodingError U+6EA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EA9");
    },
    Error,
    "EncodingError U+6EA9",
  );
  r = r && ([...ms932Encoder.encode("溪")].join(",") === "159,226"); // U+6EAA
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EAB");
    },
    Error,
    "EncodingError U+6EAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EAC");
    },
    Error,
    "EncodingError U+6EAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EAD");
    },
    Error,
    "EncodingError U+6EAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EAE");
    },
    Error,
    "EncodingError U+6EAE",
  );
  r = r && ([...ms932Encoder.encode("溯")].join(",") === "159,232"); // U+6EAF
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EB0");
    },
    Error,
    "EncodingError U+6EB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EB1");
    },
    Error,
    "EncodingError U+6EB1",
  );
  r = r && ([...ms932Encoder.encode("溲")].join(",") === "159,234"); // U+6EB2
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EB3");
    },
    Error,
    "EncodingError U+6EB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EB4");
    },
    Error,
    "EncodingError U+6EB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EB5");
    },
    Error,
    "EncodingError U+6EB5",
  );
  r = r && ([...ms932Encoder.encode("溶溷")].join(",") === "151,110,159,229"); // U+6EB6
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EB8");
    },
    Error,
    "EncodingError U+6EB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EB9");
    },
    Error,
    "EncodingError U+6EB9",
  );
  r = r && ([...ms932Encoder.encode("溺")].join(",") === "147,77"); // U+6EBA
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EBB");
    },
    Error,
    "EncodingError U+6EBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EBC");
    },
    Error,
    "EncodingError U+6EBC",
  );
  r = r && ([...ms932Encoder.encode("溽")].join(",") === "159,231"); // U+6EBD
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EBE");
    },
    Error,
    "EncodingError U+6EBE",
  );
  r = r && ([...ms932Encoder.encode("溿")].join(",") === "251,74"); // U+6EBF
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EC0");
    },
    Error,
    "EncodingError U+6EC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EC1");
    },
    Error,
    "EncodingError U+6EC1",
  );
  r = r && ([...ms932Encoder.encode("滂")].join(",") === "159,239"); // U+6EC2
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EC3");
    },
    Error,
    "EncodingError U+6EC3",
  );
  r = r && ([...ms932Encoder.encode("滄滅")].join(",") === "159,233,150,197"); // U+6EC4
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EC6");
    },
    Error,
    "EncodingError U+6EC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EC7");
    },
    Error,
    "EncodingError U+6EC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EC8");
    },
    Error,
    "EncodingError U+6EC8",
  );
  r = r && ([...ms932Encoder.encode("滉")].join(",") === "159,228"); // U+6EC9
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ECA");
    },
    Error,
    "EncodingError U+6ECA",
  );
  r = r && ([...ms932Encoder.encode("滋滌")].join(",") === "142,160,159,252"); // U+6ECB
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ECD");
    },
    Error,
    "EncodingError U+6ECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ECE");
    },
    Error,
    "EncodingError U+6ECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ECF");
    },
    Error,
    "EncodingError U+6ECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ED0");
    },
    Error,
    "EncodingError U+6ED0",
  );
  r = r && ([...ms932Encoder.encode("滑")].join(",") === "138,138"); // U+6ED1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ED2");
    },
    Error,
    "EncodingError U+6ED2",
  );
  r = r &&
    ([...ms932Encoder.encode("滓滔滕")].join(",") === "159,230,159,235,159,236"); // U+6ED3
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ED6");
    },
    Error,
    "EncodingError U+6ED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ED7");
    },
    Error,
    "EncodingError U+6ED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ED8");
    },
    Error,
    "EncodingError U+6ED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ED9");
    },
    Error,
    "EncodingError U+6ED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EDA");
    },
    Error,
    "EncodingError U+6EDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EDB");
    },
    Error,
    "EncodingError U+6EDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EDC");
    },
    Error,
    "EncodingError U+6EDC",
  );
  r = r && ([...ms932Encoder.encode("滝滞")].join(",") === "145,234,145,216"); // U+6EDD
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EDF");
    },
    Error,
    "EncodingError U+6EDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EE0");
    },
    Error,
    "EncodingError U+6EE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EE1");
    },
    Error,
    "EncodingError U+6EE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EE2");
    },
    Error,
    "EncodingError U+6EE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EE3");
    },
    Error,
    "EncodingError U+6EE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EE4");
    },
    Error,
    "EncodingError U+6EE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EE5");
    },
    Error,
    "EncodingError U+6EE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EE6");
    },
    Error,
    "EncodingError U+6EE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EE7");
    },
    Error,
    "EncodingError U+6EE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EE8");
    },
    Error,
    "EncodingError U+6EE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EE9");
    },
    Error,
    "EncodingError U+6EE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EEA");
    },
    Error,
    "EncodingError U+6EEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EEB");
    },
    Error,
    "EncodingError U+6EEB",
  );
  r = r && ([...ms932Encoder.encode("滬")].join(",") === "159,244"); // U+6EEC
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EED");
    },
    Error,
    "EncodingError U+6EED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EEE");
    },
    Error,
    "EncodingError U+6EEE",
  );
  r = r && ([...ms932Encoder.encode("滯")].join(",") === "159,250"); // U+6EEF
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EF0");
    },
    Error,
    "EncodingError U+6EF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EF1");
    },
    Error,
    "EncodingError U+6EF1",
  );
  r = r && ([...ms932Encoder.encode("滲")].join(",") === "159,248"); // U+6EF2
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EF3");
    },
    Error,
    "EncodingError U+6EF3",
  );
  r = r && ([...ms932Encoder.encode("滴")].join(",") === "147,72"); // U+6EF4
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EF5");
    },
    Error,
    "EncodingError U+6EF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EF6");
    },
    Error,
    "EncodingError U+6EF6",
  );
  r = r && ([...ms932Encoder.encode("滷滸")].join(",") === "224,66,159,245"); // U+6EF7
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EF9");
    },
    Error,
    "EncodingError U+6EF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EFA");
    },
    Error,
    "EncodingError U+6EFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EFB");
    },
    Error,
    "EncodingError U+6EFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EFC");
    },
    Error,
    "EncodingError U+6EFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6EFD");
    },
    Error,
    "EncodingError U+6EFD",
  );
  r = r && ([...ms932Encoder.encode("滾滿")].join(",") === "159,246,159,222"); // U+6EFE
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F00");
    },
    Error,
    "EncodingError U+6F00",
  );
  r = r && ([...ms932Encoder.encode("漁漂")].join(",") === "139,153,149,89"); // U+6F01
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F03");
    },
    Error,
    "EncodingError U+6F03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F04");
    },
    Error,
    "EncodingError U+6F04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F05");
    },
    Error,
    "EncodingError U+6F05",
  );
  r = r && ([...ms932Encoder.encode("漆")].join(",") === "142,189"); // U+6F06
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F07");
    },
    Error,
    "EncodingError U+6F07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F08");
    },
    Error,
    "EncodingError U+6F08",
  );
  r = r && ([...ms932Encoder.encode("漉")].join(",") === "141,151"); // U+6F09
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F0A");
    },
    Error,
    "EncodingError U+6F0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F0B");
    },
    Error,
    "EncodingError U+6F0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F0C");
    },
    Error,
    "EncodingError U+6F0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F0D");
    },
    Error,
    "EncodingError U+6F0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F0E");
    },
    Error,
    "EncodingError U+6F0E",
  );
  r = r && ([...ms932Encoder.encode("漏")].join(",") === "152,82"); // U+6F0F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F10");
    },
    Error,
    "EncodingError U+6F10",
  );
  r = r && ([...ms932Encoder.encode("漑")].join(",") === "159,242"); // U+6F11
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F12");
    },
    Error,
    "EncodingError U+6F12",
  );
  r = r &&
    ([...ms932Encoder.encode("漓演漕")].join(",") === "224,65,137,137,145,134"); // U+6F13
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F16");
    },
    Error,
    "EncodingError U+6F16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F17");
    },
    Error,
    "EncodingError U+6F17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F18");
    },
    Error,
    "EncodingError U+6F18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F19");
    },
    Error,
    "EncodingError U+6F19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F1A");
    },
    Error,
    "EncodingError U+6F1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F1B");
    },
    Error,
    "EncodingError U+6F1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F1C");
    },
    Error,
    "EncodingError U+6F1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F1D");
    },
    Error,
    "EncodingError U+6F1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F1E");
    },
    Error,
    "EncodingError U+6F1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F1F");
    },
    Error,
    "EncodingError U+6F1F",
  );
  r = r && ([...ms932Encoder.encode("漠")].join(",") === "148,153"); // U+6F20
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F21");
    },
    Error,
    "EncodingError U+6F21",
  );
  r = r && ([...ms932Encoder.encode("漢漣")].join(",") === "138,191,151,248"); // U+6F22
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F24");
    },
    Error,
    "EncodingError U+6F24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F25");
    },
    Error,
    "EncodingError U+6F25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F26");
    },
    Error,
    "EncodingError U+6F26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F27");
    },
    Error,
    "EncodingError U+6F27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F28");
    },
    Error,
    "EncodingError U+6F28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F29");
    },
    Error,
    "EncodingError U+6F29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F2A");
    },
    Error,
    "EncodingError U+6F2A",
  );
  r = r && ([...ms932Encoder.encode("漫漬")].join(",") === "150,159,146,208"); // U+6F2B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F2D");
    },
    Error,
    "EncodingError U+6F2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F2E");
    },
    Error,
    "EncodingError U+6F2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F2F");
    },
    Error,
    "EncodingError U+6F2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F30");
    },
    Error,
    "EncodingError U+6F30",
  );
  r = r && ([...ms932Encoder.encode("漱漲")].join(",") === "159,249,159,251"); // U+6F31
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F33");
    },
    Error,
    "EncodingError U+6F33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F34");
    },
    Error,
    "EncodingError U+6F34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F35");
    },
    Error,
    "EncodingError U+6F35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F36");
    },
    Error,
    "EncodingError U+6F36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F37");
    },
    Error,
    "EncodingError U+6F37",
  );
  r = r && ([...ms932Encoder.encode("漸")].join(",") === "145,81"); // U+6F38
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F39");
    },
    Error,
    "EncodingError U+6F39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F3A");
    },
    Error,
    "EncodingError U+6F3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F3B");
    },
    Error,
    "EncodingError U+6F3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F3C");
    },
    Error,
    "EncodingError U+6F3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F3D");
    },
    Error,
    "EncodingError U+6F3D",
  );
  r = r && ([...ms932Encoder.encode("漾漿")].join(",") === "224,64,159,247"); // U+6F3E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F40");
    },
    Error,
    "EncodingError U+6F40",
  );
  r = r && ([...ms932Encoder.encode("潁")].join(",") === "159,241"); // U+6F41
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F42");
    },
    Error,
    "EncodingError U+6F42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F43");
    },
    Error,
    "EncodingError U+6F43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F44");
    },
    Error,
    "EncodingError U+6F44",
  );
  r = r && ([...ms932Encoder.encode("潅")].join(",") === "138,193"); // U+6F45
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F46");
    },
    Error,
    "EncodingError U+6F46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F47");
    },
    Error,
    "EncodingError U+6F47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F48");
    },
    Error,
    "EncodingError U+6F48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F49");
    },
    Error,
    "EncodingError U+6F49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F4A");
    },
    Error,
    "EncodingError U+6F4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F4B");
    },
    Error,
    "EncodingError U+6F4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F4C");
    },
    Error,
    "EncodingError U+6F4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F4D");
    },
    Error,
    "EncodingError U+6F4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F4E");
    },
    Error,
    "EncodingError U+6F4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F4F");
    },
    Error,
    "EncodingError U+6F4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F50");
    },
    Error,
    "EncodingError U+6F50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F51");
    },
    Error,
    "EncodingError U+6F51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F52");
    },
    Error,
    "EncodingError U+6F52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F53");
    },
    Error,
    "EncodingError U+6F53",
  );
  r = r && ([...ms932Encoder.encode("潔")].join(",") === "140,137"); // U+6F54
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F55");
    },
    Error,
    "EncodingError U+6F55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F56");
    },
    Error,
    "EncodingError U+6F56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F57");
    },
    Error,
    "EncodingError U+6F57",
  );
  r = r && ([...ms932Encoder.encode("潘")].join(",") === "224,78"); // U+6F58
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F59");
    },
    Error,
    "EncodingError U+6F59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F5A");
    },
    Error,
    "EncodingError U+6F5A",
  );
  r = r && ([...ms932Encoder.encode("潛潜")].join(",") === "224,73,144,246"); // U+6F5B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F5D");
    },
    Error,
    "EncodingError U+6F5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F5E");
    },
    Error,
    "EncodingError U+6F5E",
  );
  r = r && ([...ms932Encoder.encode("潟")].join(",") === "138,131"); // U+6F5F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F60");
    },
    Error,
    "EncodingError U+6F60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F61");
    },
    Error,
    "EncodingError U+6F61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F62");
    },
    Error,
    "EncodingError U+6F62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F63");
    },
    Error,
    "EncodingError U+6F63",
  );
  r = r && ([...ms932Encoder.encode("潤")].join(",") === "143,129"); // U+6F64
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F65");
    },
    Error,
    "EncodingError U+6F65",
  );
  r = r && ([...ms932Encoder.encode("潦")].join(",") === "224,82"); // U+6F66
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F67");
    },
    Error,
    "EncodingError U+6F67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F68");
    },
    Error,
    "EncodingError U+6F68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F69");
    },
    Error,
    "EncodingError U+6F69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F6A");
    },
    Error,
    "EncodingError U+6F6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F6B");
    },
    Error,
    "EncodingError U+6F6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F6C");
    },
    Error,
    "EncodingError U+6F6C",
  );
  r = r &&
    ([...ms932Encoder.encode("潭潮潯潰")].join(",") ===
      "224,75,146,170,224,72,146,215"); // U+6F6D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F71");
    },
    Error,
    "EncodingError U+6F71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F72");
    },
    Error,
    "EncodingError U+6F72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F73");
    },
    Error,
    "EncodingError U+6F73",
  );
  r = r && ([...ms932Encoder.encode("潴")].join(",") === "224,107"); // U+6F74
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F75");
    },
    Error,
    "EncodingError U+6F75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F76");
    },
    Error,
    "EncodingError U+6F76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F77");
    },
    Error,
    "EncodingError U+6F77",
  );
  r = r && ([...ms932Encoder.encode("潸")].join(",") === "224,69"); // U+6F78
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F79");
    },
    Error,
    "EncodingError U+6F79",
  );
  r = r && ([...ms932Encoder.encode("潺")].join(",") === "224,68"); // U+6F7A
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F7B");
    },
    Error,
    "EncodingError U+6F7B",
  );
  r = r && ([...ms932Encoder.encode("潼")].join(",") === "224,77"); // U+6F7C
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F7D");
    },
    Error,
    "EncodingError U+6F7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F7E");
    },
    Error,
    "EncodingError U+6F7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F7F");
    },
    Error,
    "EncodingError U+6F7F",
  );
  r = r &&
    ([...ms932Encoder.encode("澀澁澂")].join(",") === "224,71,224,70,224,76"); // U+6F80
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F83");
    },
    Error,
    "EncodingError U+6F83",
  );
  r = r && ([...ms932Encoder.encode("澄")].join(",") === "144,159"); // U+6F84
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F85");
    },
    Error,
    "EncodingError U+6F85",
  );
  r = r && ([...ms932Encoder.encode("澆")].join(",") === "224,67"); // U+6F86
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F87");
    },
    Error,
    "EncodingError U+6F87",
  );
  r = r && ([...ms932Encoder.encode("澈")].join(",") === "251,75"); // U+6F88
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F89");
    },
    Error,
    "EncodingError U+6F89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F8A");
    },
    Error,
    "EncodingError U+6F8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F8B");
    },
    Error,
    "EncodingError U+6F8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F8C");
    },
    Error,
    "EncodingError U+6F8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F8D");
    },
    Error,
    "EncodingError U+6F8D",
  );
  r = r && ([...ms932Encoder.encode("澎")].join(",") === "224,79"); // U+6F8E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F8F");
    },
    Error,
    "EncodingError U+6F8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F90");
    },
    Error,
    "EncodingError U+6F90",
  );
  r = r && ([...ms932Encoder.encode("澑")].join(",") === "224,80"); // U+6F91
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F92");
    },
    Error,
    "EncodingError U+6F92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F93");
    },
    Error,
    "EncodingError U+6F93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F94");
    },
    Error,
    "EncodingError U+6F94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F95");
    },
    Error,
    "EncodingError U+6F95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F96");
    },
    Error,
    "EncodingError U+6F96",
  );
  r = r && ([...ms932Encoder.encode("澗")].join(",") === "138,192"); // U+6F97
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F98");
    },
    Error,
    "EncodingError U+6F98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F99");
    },
    Error,
    "EncodingError U+6F99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F9A");
    },
    Error,
    "EncodingError U+6F9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F9B");
    },
    Error,
    "EncodingError U+6F9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F9C");
    },
    Error,
    "EncodingError U+6F9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F9D");
    },
    Error,
    "EncodingError U+6F9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F9E");
    },
    Error,
    "EncodingError U+6F9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6F9F");
    },
    Error,
    "EncodingError U+6F9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FA0");
    },
    Error,
    "EncodingError U+6FA0",
  );
  r = r && ([...ms932Encoder.encode("澡")].join(",") === "224,85"); // U+6FA1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FA2");
    },
    Error,
    "EncodingError U+6FA2",
  );
  r = r && ([...ms932Encoder.encode("澣澤")].join(",") === "224,84,224,86"); // U+6FA3
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FA5");
    },
    Error,
    "EncodingError U+6FA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FA6");
    },
    Error,
    "EncodingError U+6FA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FA7");
    },
    Error,
    "EncodingError U+6FA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FA8");
    },
    Error,
    "EncodingError U+6FA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FA9");
    },
    Error,
    "EncodingError U+6FA9",
  );
  r = r && ([...ms932Encoder.encode("澪")].join(",") === "224,89"); // U+6FAA
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FAB");
    },
    Error,
    "EncodingError U+6FAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FAC");
    },
    Error,
    "EncodingError U+6FAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FAD");
    },
    Error,
    "EncodingError U+6FAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FAE");
    },
    Error,
    "EncodingError U+6FAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FAF");
    },
    Error,
    "EncodingError U+6FAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FB0");
    },
    Error,
    "EncodingError U+6FB0",
  );
  r = r && ([...ms932Encoder.encode("澱")].join(",") === "147,98"); // U+6FB1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FB2");
    },
    Error,
    "EncodingError U+6FB2",
  );
  r = r && ([...ms932Encoder.encode("澳")].join(",") === "224,83"); // U+6FB3
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FB4");
    },
    Error,
    "EncodingError U+6FB4",
  );
  r = r && ([...ms932Encoder.encode("澵")].join(",") === "251,76"); // U+6FB5
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FB6");
    },
    Error,
    "EncodingError U+6FB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FB7");
    },
    Error,
    "EncodingError U+6FB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FB8");
    },
    Error,
    "EncodingError U+6FB8",
  );
  r = r && ([...ms932Encoder.encode("澹")].join(",") === "224,87"); // U+6FB9
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FBA");
    },
    Error,
    "EncodingError U+6FBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FBB");
    },
    Error,
    "EncodingError U+6FBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FBC");
    },
    Error,
    "EncodingError U+6FBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FBD");
    },
    Error,
    "EncodingError U+6FBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FBE");
    },
    Error,
    "EncodingError U+6FBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FBF");
    },
    Error,
    "EncodingError U+6FBF",
  );
  r = r &&
    ([...ms932Encoder.encode("激濁濂濃")].join(",") ===
      "140,131,145,247,224,81,148,90"); // U+6FC0
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FC4");
    },
    Error,
    "EncodingError U+6FC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FC5");
    },
    Error,
    "EncodingError U+6FC5",
  );
  r = r && ([...ms932Encoder.encode("濆")].join(",") === "224,88"); // U+6FC6
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FC7");
    },
    Error,
    "EncodingError U+6FC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FC8");
    },
    Error,
    "EncodingError U+6FC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FC9");
    },
    Error,
    "EncodingError U+6FC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FCA");
    },
    Error,
    "EncodingError U+6FCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FCB");
    },
    Error,
    "EncodingError U+6FCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FCC");
    },
    Error,
    "EncodingError U+6FCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FCD");
    },
    Error,
    "EncodingError U+6FCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FCE");
    },
    Error,
    "EncodingError U+6FCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FCF");
    },
    Error,
    "EncodingError U+6FCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FD0");
    },
    Error,
    "EncodingError U+6FD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FD1");
    },
    Error,
    "EncodingError U+6FD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FD2");
    },
    Error,
    "EncodingError U+6FD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FD3");
    },
    Error,
    "EncodingError U+6FD3",
  );
  r = r && ([...ms932Encoder.encode("濔濕")].join(",") === "224,93,224,91"); // U+6FD4
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FD6");
    },
    Error,
    "EncodingError U+6FD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FD7");
    },
    Error,
    "EncodingError U+6FD7",
  );
  r = r && ([...ms932Encoder.encode("濘")].join(",") === "224,94"); // U+6FD8
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FD9");
    },
    Error,
    "EncodingError U+6FD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FDA");
    },
    Error,
    "EncodingError U+6FDA",
  );
  r = r && ([...ms932Encoder.encode("濛")].join(",") === "224,97"); // U+6FDB
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FDC");
    },
    Error,
    "EncodingError U+6FDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FDD");
    },
    Error,
    "EncodingError U+6FDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FDE");
    },
    Error,
    "EncodingError U+6FDE",
  );
  r = r &&
    ([...ms932Encoder.encode("濟濠濡")].join(",") === "224,90,141,138,148,71"); // U+6FDF
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FE2");
    },
    Error,
    "EncodingError U+6FE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FE3");
    },
    Error,
    "EncodingError U+6FE3",
  );
  r = r && ([...ms932Encoder.encode("濤")].join(",") === "159,183"); // U+6FE4
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FE5");
    },
    Error,
    "EncodingError U+6FE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FE6");
    },
    Error,
    "EncodingError U+6FE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FE7");
    },
    Error,
    "EncodingError U+6FE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FE8");
    },
    Error,
    "EncodingError U+6FE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FE9");
    },
    Error,
    "EncodingError U+6FE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FEA");
    },
    Error,
    "EncodingError U+6FEA",
  );
  r = r && ([...ms932Encoder.encode("濫濬")].join(",") === "151,148,224,92"); // U+6FEB
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FED");
    },
    Error,
    "EncodingError U+6FED",
  );
  r = r && ([...ms932Encoder.encode("濮濯")].join(",") === "224,96,145,243"); // U+6FEE
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FF0");
    },
    Error,
    "EncodingError U+6FF0",
  );
  r = r && ([...ms932Encoder.encode("濱")].join(",") === "224,95"); // U+6FF1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FF2");
    },
    Error,
    "EncodingError U+6FF2",
  );
  r = r && ([...ms932Encoder.encode("濳")].join(",") === "224,74"); // U+6FF3
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FF4");
    },
    Error,
    "EncodingError U+6FF4",
  );
  r = r && ([...ms932Encoder.encode("濵濶")].join(",") === "251,77,232,137"); // U+6FF5
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FF7");
    },
    Error,
    "EncodingError U+6FF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FF8");
    },
    Error,
    "EncodingError U+6FF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FF9");
    },
    Error,
    "EncodingError U+6FF9",
  );
  r = r && ([...ms932Encoder.encode("濺")].join(",") === "224,100"); // U+6FFA
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FFB");
    },
    Error,
    "EncodingError U+6FFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FFC");
    },
    Error,
    "EncodingError U+6FFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FFD");
    },
    Error,
    "EncodingError U+6FFD",
  );
  r = r && ([...ms932Encoder.encode("濾")].join(",") === "224,104"); // U+6FFE
  assertThrows(
    () => {
      ms932Encoder.encode("\u6FFF");
    },
    Error,
    "EncodingError U+6FFF",
  );

  assertStrictEquals(r, true);
});
