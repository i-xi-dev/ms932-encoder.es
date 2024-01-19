import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+7C00-U+7FFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  r = r && ([...ms932Encoder.encode("簀")].join(",") === "226,197"); // U+7C00
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C01");
    },
    Error,
    "encode-error: U+7C01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C02");
    },
    Error,
    "encode-error: U+7C02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C03");
    },
    Error,
    "encode-error: U+7C03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C04");
    },
    Error,
    "encode-error: U+7C04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C05");
    },
    Error,
    "encode-error: U+7C05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C06");
    },
    Error,
    "encode-error: U+7C06",
  );
  r = r && ([...ms932Encoder.encode("簇")].join(",") === "226,198"); // U+7C07
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C08");
    },
    Error,
    "encode-error: U+7C08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C09");
    },
    Error,
    "encode-error: U+7C09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C0A");
    },
    Error,
    "encode-error: U+7C0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C0B");
    },
    Error,
    "encode-error: U+7C0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C0C");
    },
    Error,
    "encode-error: U+7C0C",
  );
  r = r && ([...ms932Encoder.encode("簍")].join(",") === "226,203"); // U+7C0D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C0E");
    },
    Error,
    "encode-error: U+7C0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C0F");
    },
    Error,
    "encode-error: U+7C0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C10");
    },
    Error,
    "encode-error: U+7C10",
  );
  r = r &&
    ([...ms932Encoder.encode("簑簒簓簔")].join(",") ===
      "226,192,153,211,226,199,226,193"); // U+7C11
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C15");
    },
    Error,
    "encode-error: U+7C15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C16");
    },
    Error,
    "encode-error: U+7C16",
  );
  r = r && ([...ms932Encoder.encode("簗")].join(",") === "226,202"); // U+7C17
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C18");
    },
    Error,
    "encode-error: U+7C18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C19");
    },
    Error,
    "encode-error: U+7C19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C1A");
    },
    Error,
    "encode-error: U+7C1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C1B");
    },
    Error,
    "encode-error: U+7C1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C1C");
    },
    Error,
    "encode-error: U+7C1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C1D");
    },
    Error,
    "encode-error: U+7C1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C1E");
    },
    Error,
    "encode-error: U+7C1E",
  );
  r = r && ([...ms932Encoder.encode("簟")].join(",") === "226,208"); // U+7C1F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C20");
    },
    Error,
    "encode-error: U+7C20",
  );
  r = r && ([...ms932Encoder.encode("簡")].join(",") === "138,200"); // U+7C21
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C22");
    },
    Error,
    "encode-error: U+7C22",
  );
  r = r && ([...ms932Encoder.encode("簣")].join(",") === "226,205"); // U+7C23
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C24");
    },
    Error,
    "encode-error: U+7C24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C25");
    },
    Error,
    "encode-error: U+7C25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C26");
    },
    Error,
    "encode-error: U+7C26",
  );
  r = r && ([...ms932Encoder.encode("簧")].join(",") === "226,206"); // U+7C27
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C28");
    },
    Error,
    "encode-error: U+7C28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C29");
    },
    Error,
    "encode-error: U+7C29",
  );
  r = r && ([...ms932Encoder.encode("簪簫")].join(",") === "226,207,226,210"); // U+7C2A
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C2C");
    },
    Error,
    "encode-error: U+7C2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C2D");
    },
    Error,
    "encode-error: U+7C2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C2E");
    },
    Error,
    "encode-error: U+7C2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C2F");
    },
    Error,
    "encode-error: U+7C2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C30");
    },
    Error,
    "encode-error: U+7C30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C31");
    },
    Error,
    "encode-error: U+7C31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C32");
    },
    Error,
    "encode-error: U+7C32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C33");
    },
    Error,
    "encode-error: U+7C33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C34");
    },
    Error,
    "encode-error: U+7C34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C35");
    },
    Error,
    "encode-error: U+7C35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C36");
    },
    Error,
    "encode-error: U+7C36",
  );
  r = r && ([...ms932Encoder.encode("簷簸")].join(",") === "226,209,148,244"); // U+7C37
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C39");
    },
    Error,
    "encode-error: U+7C39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C3A");
    },
    Error,
    "encode-error: U+7C3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C3B");
    },
    Error,
    "encode-error: U+7C3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C3C");
    },
    Error,
    "encode-error: U+7C3C",
  );
  r = r &&
    ([...ms932Encoder.encode("簽簾簿籀")].join(",") ===
      "226,211,151,250,149,235,226,216"); // U+7C3D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C41");
    },
    Error,
    "encode-error: U+7C41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C42");
    },
    Error,
    "encode-error: U+7C42",
  );
  r = r && ([...ms932Encoder.encode("籃")].join(",") === "226,213"); // U+7C43
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C44");
    },
    Error,
    "encode-error: U+7C44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C45");
    },
    Error,
    "encode-error: U+7C45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C46");
    },
    Error,
    "encode-error: U+7C46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C47");
    },
    Error,
    "encode-error: U+7C47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C48");
    },
    Error,
    "encode-error: U+7C48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C49");
    },
    Error,
    "encode-error: U+7C49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C4A");
    },
    Error,
    "encode-error: U+7C4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C4B");
    },
    Error,
    "encode-error: U+7C4B",
  );
  r = r && ([...ms932Encoder.encode("籌籍")].join(",") === "226,212,144,208"); // U+7C4C
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C4E");
    },
    Error,
    "encode-error: U+7C4E",
  );
  r = r && ([...ms932Encoder.encode("籏籐")].join(",") === "226,215,226,217"); // U+7C4F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C51");
    },
    Error,
    "encode-error: U+7C51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C52");
    },
    Error,
    "encode-error: U+7C52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C53");
    },
    Error,
    "encode-error: U+7C53",
  );
  r = r && ([...ms932Encoder.encode("籔")].join(",") === "226,214"); // U+7C54
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C55");
    },
    Error,
    "encode-error: U+7C55",
  );
  r = r && ([...ms932Encoder.encode("籖")].join(",") === "226,221"); // U+7C56
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C57");
    },
    Error,
    "encode-error: U+7C57",
  );
  r = r && ([...ms932Encoder.encode("籘")].join(",") === "226,218"); // U+7C58
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C59");
    },
    Error,
    "encode-error: U+7C59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C5A");
    },
    Error,
    "encode-error: U+7C5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C5B");
    },
    Error,
    "encode-error: U+7C5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C5C");
    },
    Error,
    "encode-error: U+7C5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C5D");
    },
    Error,
    "encode-error: U+7C5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C5E");
    },
    Error,
    "encode-error: U+7C5E",
  );
  r = r && ([...ms932Encoder.encode("籟籠")].join(",") === "226,219,226,196"); // U+7C5F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C61");
    },
    Error,
    "encode-error: U+7C61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C62");
    },
    Error,
    "encode-error: U+7C62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C63");
    },
    Error,
    "encode-error: U+7C63",
  );
  r = r && ([...ms932Encoder.encode("籤籥")].join(",") === "226,220,226,222"); // U+7C64
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C66");
    },
    Error,
    "encode-error: U+7C66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C67");
    },
    Error,
    "encode-error: U+7C67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C68");
    },
    Error,
    "encode-error: U+7C68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C69");
    },
    Error,
    "encode-error: U+7C69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C6A");
    },
    Error,
    "encode-error: U+7C6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C6B");
    },
    Error,
    "encode-error: U+7C6B",
  );
  r = r && ([...ms932Encoder.encode("籬")].join(",") === "226,223"); // U+7C6C
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C6D");
    },
    Error,
    "encode-error: U+7C6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C6E");
    },
    Error,
    "encode-error: U+7C6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C6F");
    },
    Error,
    "encode-error: U+7C6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C70");
    },
    Error,
    "encode-error: U+7C70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C71");
    },
    Error,
    "encode-error: U+7C71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C72");
    },
    Error,
    "encode-error: U+7C72",
  );
  r = r && ([...ms932Encoder.encode("米")].join(",") === "149,196"); // U+7C73
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C74");
    },
    Error,
    "encode-error: U+7C74",
  );
  r = r && ([...ms932Encoder.encode("籵")].join(",") === "226,224"); // U+7C75
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C76");
    },
    Error,
    "encode-error: U+7C76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C77");
    },
    Error,
    "encode-error: U+7C77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C78");
    },
    Error,
    "encode-error: U+7C78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C79");
    },
    Error,
    "encode-error: U+7C79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C7A");
    },
    Error,
    "encode-error: U+7C7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C7B");
    },
    Error,
    "encode-error: U+7C7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C7C");
    },
    Error,
    "encode-error: U+7C7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C7D");
    },
    Error,
    "encode-error: U+7C7D",
  );
  r = r && ([...ms932Encoder.encode("籾")].join(",") === "150,224"); // U+7C7E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C7F");
    },
    Error,
    "encode-error: U+7C7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C80");
    },
    Error,
    "encode-error: U+7C80",
  );
  r = r &&
    ([...ms932Encoder.encode("粁粂粃")].join(",") === "139,204,140,72,226,225"); // U+7C81
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C84");
    },
    Error,
    "encode-error: U+7C84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C85");
    },
    Error,
    "encode-error: U+7C85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C86");
    },
    Error,
    "encode-error: U+7C86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C87");
    },
    Error,
    "encode-error: U+7C87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C88");
    },
    Error,
    "encode-error: U+7C88",
  );
  r = r && ([...ms932Encoder.encode("粉")].join(",") === "149,178"); // U+7C89
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C8A");
    },
    Error,
    "encode-error: U+7C8A",
  );
  r = r && ([...ms932Encoder.encode("粋")].join(",") === "144,136"); // U+7C8B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C8C");
    },
    Error,
    "encode-error: U+7C8C",
  );
  r = r && ([...ms932Encoder.encode("粍")].join(",") === "150,174"); // U+7C8D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C8E");
    },
    Error,
    "encode-error: U+7C8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C8F");
    },
    Error,
    "encode-error: U+7C8F",
  );
  r = r && ([...ms932Encoder.encode("粐")].join(",") === "226,226"); // U+7C90
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C91");
    },
    Error,
    "encode-error: U+7C91",
  );
  r = r && ([...ms932Encoder.encode("粒")].join(",") === "151,177"); // U+7C92
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C93");
    },
    Error,
    "encode-error: U+7C93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C94");
    },
    Error,
    "encode-error: U+7C94",
  );
  r = r && ([...ms932Encoder.encode("粕")].join(",") === "148,148"); // U+7C95
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C96");
    },
    Error,
    "encode-error: U+7C96",
  );
  r = r && ([...ms932Encoder.encode("粗粘")].join(",") === "145,101,148,83"); // U+7C97
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C99");
    },
    Error,
    "encode-error: U+7C99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C9A");
    },
    Error,
    "encode-error: U+7C9A",
  );
  r = r && ([...ms932Encoder.encode("粛")].join(",") === "143,108"); // U+7C9B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C9C");
    },
    Error,
    "encode-error: U+7C9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C9D");
    },
    Error,
    "encode-error: U+7C9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7C9E");
    },
    Error,
    "encode-error: U+7C9E",
  );
  r = r && ([...ms932Encoder.encode("粟")].join(",") === "136,190"); // U+7C9F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CA0");
    },
    Error,
    "encode-error: U+7CA0",
  );
  r = r && ([...ms932Encoder.encode("粡粢")].join(",") === "226,231,226,229"); // U+7CA1
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CA3");
    },
    Error,
    "encode-error: U+7CA3",
  );
  r = r && ([...ms932Encoder.encode("粤粥")].join(",") === "226,227,138,159"); // U+7CA4
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CA6");
    },
    Error,
    "encode-error: U+7CA6",
  );
  r = r && ([...ms932Encoder.encode("粧粨")].join(",") === "143,207,226,232"); // U+7CA7
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CA9");
    },
    Error,
    "encode-error: U+7CA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CAA");
    },
    Error,
    "encode-error: U+7CAA",
  );
  r = r && ([...ms932Encoder.encode("粫")].join(",") === "226,230"); // U+7CAB
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CAC");
    },
    Error,
    "encode-error: U+7CAC",
  );
  r = r && ([...ms932Encoder.encode("粭粮")].join(",") === "226,228,226,236"); // U+7CAD
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CAF");
    },
    Error,
    "encode-error: U+7CAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CB0");
    },
    Error,
    "encode-error: U+7CB0",
  );
  r = r &&
    ([...ms932Encoder.encode("粱粲粳")].join(",") ===
      "226,235,226,234,226,233"); // U+7CB1
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CB4");
    },
    Error,
    "encode-error: U+7CB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CB5");
    },
    Error,
    "encode-error: U+7CB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CB6");
    },
    Error,
    "encode-error: U+7CB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CB7");
    },
    Error,
    "encode-error: U+7CB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CB8");
    },
    Error,
    "encode-error: U+7CB8",
  );
  r = r && ([...ms932Encoder.encode("粹")].join(",") === "226,237"); // U+7CB9
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CBA");
    },
    Error,
    "encode-error: U+7CBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CBB");
    },
    Error,
    "encode-error: U+7CBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CBC");
    },
    Error,
    "encode-error: U+7CBC",
  );
  r = r && ([...ms932Encoder.encode("粽精")].join(",") === "226,238,144,184"); // U+7CBD
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CBF");
    },
    Error,
    "encode-error: U+7CBF",
  );
  r = r && ([...ms932Encoder.encode("糀")].join(",") === "226,239"); // U+7CC0
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CC1");
    },
    Error,
    "encode-error: U+7CC1",
  );
  r = r && ([...ms932Encoder.encode("糂")].join(",") === "226,241"); // U+7CC2
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CC3");
    },
    Error,
    "encode-error: U+7CC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CC4");
    },
    Error,
    "encode-error: U+7CC4",
  );
  r = r && ([...ms932Encoder.encode("糅")].join(",") === "226,240"); // U+7CC5
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CC6");
    },
    Error,
    "encode-error: U+7CC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CC7");
    },
    Error,
    "encode-error: U+7CC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CC8");
    },
    Error,
    "encode-error: U+7CC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CC9");
    },
    Error,
    "encode-error: U+7CC9",
  );
  r = r && ([...ms932Encoder.encode("糊")].join(",") === "140,208"); // U+7CCA
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CCB");
    },
    Error,
    "encode-error: U+7CCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CCC");
    },
    Error,
    "encode-error: U+7CCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CCD");
    },
    Error,
    "encode-error: U+7CCD",
  );
  r = r && ([...ms932Encoder.encode("糎")].join(",") === "145,87"); // U+7CCE
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CCF");
    },
    Error,
    "encode-error: U+7CCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CD0");
    },
    Error,
    "encode-error: U+7CD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CD1");
    },
    Error,
    "encode-error: U+7CD1",
  );
  r = r && ([...ms932Encoder.encode("糒")].join(",") === "226,243"); // U+7CD2
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CD3");
    },
    Error,
    "encode-error: U+7CD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CD4");
    },
    Error,
    "encode-error: U+7CD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CD5");
    },
    Error,
    "encode-error: U+7CD5",
  );
  r = r && ([...ms932Encoder.encode("糖")].join(",") === "147,156"); // U+7CD6
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CD7");
    },
    Error,
    "encode-error: U+7CD7",
  );
  r = r && ([...ms932Encoder.encode("糘")].join(",") === "226,242"); // U+7CD8
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CD9");
    },
    Error,
    "encode-error: U+7CD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CDA");
    },
    Error,
    "encode-error: U+7CDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CDB");
    },
    Error,
    "encode-error: U+7CDB",
  );
  r = r && ([...ms932Encoder.encode("糜")].join(",") === "226,244"); // U+7CDC
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CDD");
    },
    Error,
    "encode-error: U+7CDD",
  );
  r = r &&
    ([...ms932Encoder.encode("糞糟糠")].join(",") ===
      "149,179,145,140,141,102"); // U+7CDE
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CE1");
    },
    Error,
    "encode-error: U+7CE1",
  );
  r = r && ([...ms932Encoder.encode("糢")].join(",") === "226,245"); // U+7CE2
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CE3");
    },
    Error,
    "encode-error: U+7CE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CE4");
    },
    Error,
    "encode-error: U+7CE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CE5");
    },
    Error,
    "encode-error: U+7CE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CE6");
    },
    Error,
    "encode-error: U+7CE6",
  );
  r = r && ([...ms932Encoder.encode("糧")].join(",") === "151,198"); // U+7CE7
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CE8");
    },
    Error,
    "encode-error: U+7CE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CE9");
    },
    Error,
    "encode-error: U+7CE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CEA");
    },
    Error,
    "encode-error: U+7CEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CEB");
    },
    Error,
    "encode-error: U+7CEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CEC");
    },
    Error,
    "encode-error: U+7CEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CED");
    },
    Error,
    "encode-error: U+7CED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CEE");
    },
    Error,
    "encode-error: U+7CEE",
  );
  r = r && ([...ms932Encoder.encode("糯")].join(",") === "226,247"); // U+7CEF
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CF0");
    },
    Error,
    "encode-error: U+7CF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CF1");
    },
    Error,
    "encode-error: U+7CF1",
  );
  r = r && ([...ms932Encoder.encode("糲")].join(",") === "226,248"); // U+7CF2
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CF3");
    },
    Error,
    "encode-error: U+7CF3",
  );
  r = r && ([...ms932Encoder.encode("糴")].join(",") === "226,249"); // U+7CF4
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CF5");
    },
    Error,
    "encode-error: U+7CF5",
  );
  r = r && ([...ms932Encoder.encode("糶")].join(",") === "226,250"); // U+7CF6
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CF7");
    },
    Error,
    "encode-error: U+7CF7",
  );
  r = r && ([...ms932Encoder.encode("糸")].join(",") === "142,133"); // U+7CF8
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CF9");
    },
    Error,
    "encode-error: U+7CF9",
  );
  r = r && ([...ms932Encoder.encode("糺系")].join(",") === "226,251,140,110"); // U+7CFA
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CFC");
    },
    Error,
    "encode-error: U+7CFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CFD");
    },
    Error,
    "encode-error: U+7CFD",
  );
  r = r && ([...ms932Encoder.encode("糾")].join(",") === "139,138"); // U+7CFE
  assertThrows(
    () => {
      ms932Encoder.encode("\u7CFF");
    },
    Error,
    "encode-error: U+7CFF",
  );
  r = r && ([...ms932Encoder.encode("紀")].join(",") === "139,73"); // U+7D00
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D01");
    },
    Error,
    "encode-error: U+7D01",
  );
  r = r && ([...ms932Encoder.encode("紂")].join(",") === "227,64"); // U+7D02
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D03");
    },
    Error,
    "encode-error: U+7D03",
  );
  r = r &&
    ([...ms932Encoder.encode("約紅紆")].join(",") ===
      "150,241,141,103,226,252"); // U+7D04
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D07");
    },
    Error,
    "encode-error: U+7D07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D08");
    },
    Error,
    "encode-error: U+7D08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D09");
    },
    Error,
    "encode-error: U+7D09",
  );
  r = r && ([...ms932Encoder.encode("紊紋")].join(",") === "227,67,150,228"); // U+7D0A
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D0C");
    },
    Error,
    "encode-error: U+7D0C",
  );
  r = r && ([...ms932Encoder.encode("納")].join(",") === "148,91"); // U+7D0D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D0E");
    },
    Error,
    "encode-error: U+7D0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D0F");
    },
    Error,
    "encode-error: U+7D0F",
  );
  r = r && ([...ms932Encoder.encode("紐")].join(",") === "149,82"); // U+7D10
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D11");
    },
    Error,
    "encode-error: U+7D11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D12");
    },
    Error,
    "encode-error: U+7D12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D13");
    },
    Error,
    "encode-error: U+7D13",
  );
  r = r && ([...ms932Encoder.encode("純紕")].join(",") === "143,131,227,66"); // U+7D14
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D16");
    },
    Error,
    "encode-error: U+7D16",
  );
  r = r &&
    ([...ms932Encoder.encode("紗紘紙級紛紜")].join(",") ===
      "142,209,141,104,142,134,139,137,149,180,227,65"); // U+7D17
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D1D");
    },
    Error,
    "encode-error: U+7D1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D1E");
    },
    Error,
    "encode-error: U+7D1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D1F");
    },
    Error,
    "encode-error: U+7D1F",
  );
  r = r &&
    ([...ms932Encoder.encode("素紡索")].join(",") === "145,102,150,97,141,245"); // U+7D20
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D23");
    },
    Error,
    "encode-error: U+7D23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D24");
    },
    Error,
    "encode-error: U+7D24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D25");
    },
    Error,
    "encode-error: U+7D25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D26");
    },
    Error,
    "encode-error: U+7D26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D27");
    },
    Error,
    "encode-error: U+7D27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D28");
    },
    Error,
    "encode-error: U+7D28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D29");
    },
    Error,
    "encode-error: U+7D29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D2A");
    },
    Error,
    "encode-error: U+7D2A",
  );
  r = r && ([...ms932Encoder.encode("紫紬")].join(",") === "142,135,146,219"); // U+7D2B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D2D");
    },
    Error,
    "encode-error: U+7D2D",
  );
  r = r &&
    ([...ms932Encoder.encode("紮累細")].join(",") === "227,70,151,221,141,215"); // U+7D2E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D31");
    },
    Error,
    "encode-error: U+7D31",
  );
  r = r && ([...ms932Encoder.encode("紲紳")].join(",") === "227,71,144,97"); // U+7D32
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D34");
    },
    Error,
    "encode-error: U+7D34",
  );
  r = r && ([...ms932Encoder.encode("紵")].join(",") === "227,73"); // U+7D35
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D36");
    },
    Error,
    "encode-error: U+7D36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D37");
    },
    Error,
    "encode-error: U+7D37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D38");
    },
    Error,
    "encode-error: U+7D38",
  );
  r = r && ([...ms932Encoder.encode("紹紺")].join(",") === "143,208,141,174"); // U+7D39
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D3B");
    },
    Error,
    "encode-error: U+7D3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D3C");
    },
    Error,
    "encode-error: U+7D3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D3D");
    },
    Error,
    "encode-error: U+7D3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D3E");
    },
    Error,
    "encode-error: U+7D3E",
  );
  r = r && ([...ms932Encoder.encode("紿")].join(",") === "227,72"); // U+7D3F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D40");
    },
    Error,
    "encode-error: U+7D40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D41");
    },
    Error,
    "encode-error: U+7D41",
  );
  r = r &&
    ([...ms932Encoder.encode("終絃組絅絆")].join(",") ===
      "143,73,140,188,145,103,227,68,227,74"); // U+7D42
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D47");
    },
    Error,
    "encode-error: U+7D47",
  );
  r = r && ([...ms932Encoder.encode("絈")].join(",") === "251,138"); // U+7D48
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D49");
    },
    Error,
    "encode-error: U+7D49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D4A");
    },
    Error,
    "encode-error: U+7D4A",
  );
  r = r && ([...ms932Encoder.encode("絋経")].join(",") === "227,69,140,111"); // U+7D4B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D4D");
    },
    Error,
    "encode-error: U+7D4D",
  );
  r = r &&
    ([...ms932Encoder.encode("絎絏結")].join(",") === "227,77,227,81,140,139"); // U+7D4E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D51");
    },
    Error,
    "encode-error: U+7D51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D52");
    },
    Error,
    "encode-error: U+7D52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D53");
    },
    Error,
    "encode-error: U+7D53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D54");
    },
    Error,
    "encode-error: U+7D54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D55");
    },
    Error,
    "encode-error: U+7D55",
  );
  r = r && ([...ms932Encoder.encode("絖")].join(",") === "227,76"); // U+7D56
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D57");
    },
    Error,
    "encode-error: U+7D57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D58");
    },
    Error,
    "encode-error: U+7D58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D59");
    },
    Error,
    "encode-error: U+7D59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D5A");
    },
    Error,
    "encode-error: U+7D5A",
  );
  r = r && ([...ms932Encoder.encode("絛絜")].join(",") === "227,85,251,139"); // U+7D5B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D5D");
    },
    Error,
    "encode-error: U+7D5D",
  );
  r = r && ([...ms932Encoder.encode("絞")].join(",") === "141,105"); // U+7D5E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D5F");
    },
    Error,
    "encode-error: U+7D5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D60");
    },
    Error,
    "encode-error: U+7D60",
  );
  r = r &&
    ([...ms932Encoder.encode("絡絢絣")].join(",") === "151,141,136,186,227,82"); // U+7D61
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D64");
    },
    Error,
    "encode-error: U+7D64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D65");
    },
    Error,
    "encode-error: U+7D65",
  );
  r = r && ([...ms932Encoder.encode("給")].join(",") === "139,139"); // U+7D66
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D67");
    },
    Error,
    "encode-error: U+7D67",
  );
  r = r && ([...ms932Encoder.encode("絨")].join(",") === "227,79"); // U+7D68
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D69");
    },
    Error,
    "encode-error: U+7D69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D6A");
    },
    Error,
    "encode-error: U+7D6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D6B");
    },
    Error,
    "encode-error: U+7D6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D6C");
    },
    Error,
    "encode-error: U+7D6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D6D");
    },
    Error,
    "encode-error: U+7D6D",
  );
  r = r && ([...ms932Encoder.encode("絮")].join(",") === "227,80"); // U+7D6E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D6F");
    },
    Error,
    "encode-error: U+7D6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D70");
    },
    Error,
    "encode-error: U+7D70",
  );
  r = r &&
    ([...ms932Encoder.encode("統絲絳")].join(",") === "147,157,227,78,227,75"); // U+7D71
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D74");
    },
    Error,
    "encode-error: U+7D74",
  );
  r = r && ([...ms932Encoder.encode("絵絶")].join(",") === "138,71,144,226"); // U+7D75
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D77");
    },
    Error,
    "encode-error: U+7D77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D78");
    },
    Error,
    "encode-error: U+7D78",
  );
  r = r && ([...ms932Encoder.encode("絹")].join(",") === "140,166"); // U+7D79
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D7A");
    },
    Error,
    "encode-error: U+7D7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D7B");
    },
    Error,
    "encode-error: U+7D7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D7C");
    },
    Error,
    "encode-error: U+7D7C",
  );
  r = r && ([...ms932Encoder.encode("絽")].join(",") === "227,87"); // U+7D7D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D7E");
    },
    Error,
    "encode-error: U+7D7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D7F");
    },
    Error,
    "encode-error: U+7D7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D80");
    },
    Error,
    "encode-error: U+7D80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D81");
    },
    Error,
    "encode-error: U+7D81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D82");
    },
    Error,
    "encode-error: U+7D82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D83");
    },
    Error,
    "encode-error: U+7D83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D84");
    },
    Error,
    "encode-error: U+7D84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D85");
    },
    Error,
    "encode-error: U+7D85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D86");
    },
    Error,
    "encode-error: U+7D86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D87");
    },
    Error,
    "encode-error: U+7D87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D88");
    },
    Error,
    "encode-error: U+7D88",
  );
  r = r && ([...ms932Encoder.encode("綉")].join(",") === "227,84"); // U+7D89
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D8A");
    },
    Error,
    "encode-error: U+7D8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D8B");
    },
    Error,
    "encode-error: U+7D8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D8C");
    },
    Error,
    "encode-error: U+7D8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D8D");
    },
    Error,
    "encode-error: U+7D8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D8E");
    },
    Error,
    "encode-error: U+7D8E",
  );
  r = r && ([...ms932Encoder.encode("綏")].join(",") === "227,86"); // U+7D8F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D90");
    },
    Error,
    "encode-error: U+7D90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D91");
    },
    Error,
    "encode-error: U+7D91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D92");
    },
    Error,
    "encode-error: U+7D92",
  );
  r = r && ([...ms932Encoder.encode("經")].join(",") === "227,83"); // U+7D93
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D94");
    },
    Error,
    "encode-error: U+7D94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D95");
    },
    Error,
    "encode-error: U+7D95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D96");
    },
    Error,
    "encode-error: U+7D96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D97");
    },
    Error,
    "encode-error: U+7D97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D98");
    },
    Error,
    "encode-error: U+7D98",
  );
  r = r &&
    ([...ms932Encoder.encode("継続綛綜")].join(",") ===
      "140,112,145,177,227,88,145,142"); // U+7D99
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D9D");
    },
    Error,
    "encode-error: U+7D9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7D9E");
    },
    Error,
    "encode-error: U+7D9E",
  );
  r = r && ([...ms932Encoder.encode("綟綠")].join(",") === "227,101,251,141"); // U+7D9F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DA1");
    },
    Error,
    "encode-error: U+7DA1",
  );
  r = r && ([...ms932Encoder.encode("綢綣")].join(",") === "227,97,227,91"); // U+7DA2
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DA4");
    },
    Error,
    "encode-error: U+7DA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DA5");
    },
    Error,
    "encode-error: U+7DA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DA6");
    },
    Error,
    "encode-error: U+7DA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DA7");
    },
    Error,
    "encode-error: U+7DA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DA8");
    },
    Error,
    "encode-error: U+7DA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DA9");
    },
    Error,
    "encode-error: U+7DA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DAA");
    },
    Error,
    "encode-error: U+7DAA",
  );
  r = r &&
    ([...ms932Encoder.encode("綫綬維綮綯綰綱網")].join(",") ===
      "227,95,142,248,136,219,227,90,227,98,227,102,141,106,150,212"); // U+7DAB
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DB3");
    },
    Error,
    "encode-error: U+7DB3",
  );
  r = r && ([...ms932Encoder.encode("綴綵")].join(",") === "146,212,227,92"); // U+7DB4
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DB6");
    },
    Error,
    "encode-error: U+7DB6",
  );
  r = r && ([...ms932Encoder.encode("綷綸")].join(",") === "251,140,227,100"); // U+7DB7
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DB9");
    },
    Error,
    "encode-error: U+7DB9",
  );
  r = r && ([...ms932Encoder.encode("綺綻")].join(",") === "227,89,146,93"); // U+7DBA
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DBC");
    },
    Error,
    "encode-error: U+7DBC",
  );
  r = r &&
    ([...ms932Encoder.encode("綽綾綿")].join(",") === "227,94,136,187,150,200"); // U+7DBD
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DC0");
    },
    Error,
    "encode-error: U+7DC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DC1");
    },
    Error,
    "encode-error: U+7DC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DC2");
    },
    Error,
    "encode-error: U+7DC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DC3");
    },
    Error,
    "encode-error: U+7DC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DC4");
    },
    Error,
    "encode-error: U+7DC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DC5");
    },
    Error,
    "encode-error: U+7DC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DC6");
    },
    Error,
    "encode-error: U+7DC6",
  );
  r = r && ([...ms932Encoder.encode("緇")].join(",") === "227,93"); // U+7DC7
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DC8");
    },
    Error,
    "encode-error: U+7DC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DC9");
    },
    Error,
    "encode-error: U+7DC9",
  );
  r = r && ([...ms932Encoder.encode("緊緋")].join(",") === "139,217,148,234"); // U+7DCA
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DCC");
    },
    Error,
    "encode-error: U+7DCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DCD");
    },
    Error,
    "encode-error: U+7DCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DCE");
    },
    Error,
    "encode-error: U+7DCE",
  );
  r = r && ([...ms932Encoder.encode("総")].join(",") === "145,141"); // U+7DCF
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DD0");
    },
    Error,
    "encode-error: U+7DD0",
  );
  r = r && ([...ms932Encoder.encode("緑緒")].join(",") === "151,206,143,143"); // U+7DD1
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DD3");
    },
    Error,
    "encode-error: U+7DD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DD4");
    },
    Error,
    "encode-error: U+7DD4",
  );
  r = r && ([...ms932Encoder.encode("緕緖")].join(",") === "227,142,251,142"); // U+7DD5
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DD7");
    },
    Error,
    "encode-error: U+7DD7",
  );
  r = r && ([...ms932Encoder.encode("緘")].join(",") === "227,103"); // U+7DD8
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DD9");
    },
    Error,
    "encode-error: U+7DD9",
  );
  r = r && ([...ms932Encoder.encode("線")].join(",") === "144,252"); // U+7DDA
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DDB");
    },
    Error,
    "encode-error: U+7DDB",
  );
  r = r &&
    ([...ms932Encoder.encode("緜緝緞")].join(",") === "227,99,227,104,227,106"); // U+7DDC
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DDF");
    },
    Error,
    "encode-error: U+7DDF",
  );
  r = r && ([...ms932Encoder.encode("締緡")].join(",") === "146,247,227,109"); // U+7DE0
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DE2");
    },
    Error,
    "encode-error: U+7DE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DE3");
    },
    Error,
    "encode-error: U+7DE3",
  );
  r = r && ([...ms932Encoder.encode("緤")].join(",") === "227,105"); // U+7DE4
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DE5");
    },
    Error,
    "encode-error: U+7DE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DE6");
    },
    Error,
    "encode-error: U+7DE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DE7");
    },
    Error,
    "encode-error: U+7DE7",
  );
  r = r && ([...ms932Encoder.encode("編緩")].join(",") === "149,210,138,201"); // U+7DE8
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DEA");
    },
    Error,
    "encode-error: U+7DEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DEB");
    },
    Error,
    "encode-error: U+7DEB",
  );
  r = r && ([...ms932Encoder.encode("緬")].join(",") === "150,201"); // U+7DEC
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DED");
    },
    Error,
    "encode-error: U+7DED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DEE");
    },
    Error,
    "encode-error: U+7DEE",
  );
  r = r && ([...ms932Encoder.encode("緯")].join(",") === "136,220"); // U+7DEF
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DF0");
    },
    Error,
    "encode-error: U+7DF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DF1");
    },
    Error,
    "encode-error: U+7DF1",
  );
  r = r && ([...ms932Encoder.encode("緲")].join(",") === "227,108"); // U+7DF2
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DF3");
    },
    Error,
    "encode-error: U+7DF3",
  );
  r = r && ([...ms932Encoder.encode("練")].join(",") === "151,251"); // U+7DF4
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DF5");
    },
    Error,
    "encode-error: U+7DF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DF6");
    },
    Error,
    "encode-error: U+7DF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DF7");
    },
    Error,
    "encode-error: U+7DF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DF8");
    },
    Error,
    "encode-error: U+7DF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DF9");
    },
    Error,
    "encode-error: U+7DF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DFA");
    },
    Error,
    "encode-error: U+7DFA",
  );
  r = r && ([...ms932Encoder.encode("緻")].join(",") === "227,107"); // U+7DFB
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DFC");
    },
    Error,
    "encode-error: U+7DFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DFD");
    },
    Error,
    "encode-error: U+7DFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DFE");
    },
    Error,
    "encode-error: U+7DFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7DFF");
    },
    Error,
    "encode-error: U+7DFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E00");
    },
    Error,
    "encode-error: U+7E00",
  );
  r = r && ([...ms932Encoder.encode("縁")].join(",") === "137,143"); // U+7E01
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E02");
    },
    Error,
    "encode-error: U+7E02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E03");
    },
    Error,
    "encode-error: U+7E03",
  );
  r = r && ([...ms932Encoder.encode("縄縅")].join(",") === "147,234,227,110"); // U+7E04
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E06");
    },
    Error,
    "encode-error: U+7E06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E07");
    },
    Error,
    "encode-error: U+7E07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E08");
    },
    Error,
    "encode-error: U+7E08",
  );
  r = r &&
    ([...ms932Encoder.encode("縉縊縋")].join(",") ===
      "227,117,227,111,227,118"); // U+7E09
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E0C");
    },
    Error,
    "encode-error: U+7E0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E0D");
    },
    Error,
    "encode-error: U+7E0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E0E");
    },
    Error,
    "encode-error: U+7E0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E0F");
    },
    Error,
    "encode-error: U+7E0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E10");
    },
    Error,
    "encode-error: U+7E10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E11");
    },
    Error,
    "encode-error: U+7E11",
  );
  r = r && ([...ms932Encoder.encode("縒")].join(",") === "227,114"); // U+7E12
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E13");
    },
    Error,
    "encode-error: U+7E13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E14");
    },
    Error,
    "encode-error: U+7E14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E15");
    },
    Error,
    "encode-error: U+7E15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E16");
    },
    Error,
    "encode-error: U+7E16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E17");
    },
    Error,
    "encode-error: U+7E17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E18");
    },
    Error,
    "encode-error: U+7E18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E19");
    },
    Error,
    "encode-error: U+7E19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E1A");
    },
    Error,
    "encode-error: U+7E1A",
  );
  r = r && ([...ms932Encoder.encode("縛")].join(",") === "148,155"); // U+7E1B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E1C");
    },
    Error,
    "encode-error: U+7E1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E1D");
    },
    Error,
    "encode-error: U+7E1D",
  );
  r = r && ([...ms932Encoder.encode("縞縟")].join(",") === "142,200,227,116"); // U+7E1E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E20");
    },
    Error,
    "encode-error: U+7E20",
  );
  r = r &&
    ([...ms932Encoder.encode("縡縢縣")].join(",") ===
      "227,113,227,119,227,112"); // U+7E21
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E24");
    },
    Error,
    "encode-error: U+7E24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E25");
    },
    Error,
    "encode-error: U+7E25",
  );
  r = r && ([...ms932Encoder.encode("縦")].join(",") === "143,99"); // U+7E26
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E27");
    },
    Error,
    "encode-error: U+7E27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E28");
    },
    Error,
    "encode-error: U+7E28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E29");
    },
    Error,
    "encode-error: U+7E29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E2A");
    },
    Error,
    "encode-error: U+7E2A",
  );
  r = r && ([...ms932Encoder.encode("縫")].join(",") === "150,68"); // U+7E2B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E2C");
    },
    Error,
    "encode-error: U+7E2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E2D");
    },
    Error,
    "encode-error: U+7E2D",
  );
  r = r && ([...ms932Encoder.encode("縮")].join(",") === "143,107"); // U+7E2E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E2F");
    },
    Error,
    "encode-error: U+7E2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E30");
    },
    Error,
    "encode-error: U+7E30",
  );
  r = r && ([...ms932Encoder.encode("縱縲")].join(",") === "227,115,227,128"); // U+7E31
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E33");
    },
    Error,
    "encode-error: U+7E33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E34");
    },
    Error,
    "encode-error: U+7E34",
  );
  r = r && ([...ms932Encoder.encode("縵")].join(",") === "227,123"); // U+7E35
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E36");
    },
    Error,
    "encode-error: U+7E36",
  );
  r = r && ([...ms932Encoder.encode("縷")].join(",") === "227,126"); // U+7E37
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E38");
    },
    Error,
    "encode-error: U+7E38",
  );
  r = r &&
    ([...ms932Encoder.encode("縹縺縻")].join(",") ===
      "227,124,227,129,227,122"); // U+7E39
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E3C");
    },
    Error,
    "encode-error: U+7E3C",
  );
  r = r && ([...ms932Encoder.encode("總績")].join(",") === "227,96,144,209"); // U+7E3D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E3F");
    },
    Error,
    "encode-error: U+7E3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E40");
    },
    Error,
    "encode-error: U+7E40",
  );
  r = r && ([...ms932Encoder.encode("繁")].join(",") === "148,201"); // U+7E41
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E42");
    },
    Error,
    "encode-error: U+7E42",
  );
  r = r && ([...ms932Encoder.encode("繃")].join(",") === "227,125"); // U+7E43
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E44");
    },
    Error,
    "encode-error: U+7E44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E45");
    },
    Error,
    "encode-error: U+7E45",
  );
  r = r && ([...ms932Encoder.encode("繆")].join(",") === "227,120"); // U+7E46
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E47");
    },
    Error,
    "encode-error: U+7E47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E48");
    },
    Error,
    "encode-error: U+7E48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E49");
    },
    Error,
    "encode-error: U+7E49",
  );
  r = r && ([...ms932Encoder.encode("繊繋")].join(",") === "145,64,140,113"); // U+7E4A
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E4C");
    },
    Error,
    "encode-error: U+7E4C",
  );
  r = r && ([...ms932Encoder.encode("繍")].join(",") === "143,74"); // U+7E4D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E4E");
    },
    Error,
    "encode-error: U+7E4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E4F");
    },
    Error,
    "encode-error: U+7E4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E50");
    },
    Error,
    "encode-error: U+7E50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E51");
    },
    Error,
    "encode-error: U+7E51",
  );
  r = r && ([...ms932Encoder.encode("繒")].join(",") === "251,143"); // U+7E52
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E53");
    },
    Error,
    "encode-error: U+7E53",
  );
  r = r &&
    ([...ms932Encoder.encode("織繕繖")].join(",") === "144,68,145,85,227,132"); // U+7E54
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E57");
    },
    Error,
    "encode-error: U+7E57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E58");
    },
    Error,
    "encode-error: U+7E58",
  );
  r = r && ([...ms932Encoder.encode("繙繚")].join(",") === "227,134,227,135"); // U+7E59
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E5B");
    },
    Error,
    "encode-error: U+7E5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E5C");
    },
    Error,
    "encode-error: U+7E5C",
  );
  r = r && ([...ms932Encoder.encode("繝繞")].join(",") === "227,131,227,133"); // U+7E5D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E5F");
    },
    Error,
    "encode-error: U+7E5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E60");
    },
    Error,
    "encode-error: U+7E60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E61");
    },
    Error,
    "encode-error: U+7E61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E62");
    },
    Error,
    "encode-error: U+7E62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E63");
    },
    Error,
    "encode-error: U+7E63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E64");
    },
    Error,
    "encode-error: U+7E64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E65");
    },
    Error,
    "encode-error: U+7E65",
  );
  r = r && ([...ms932Encoder.encode("繦繧")].join(",") === "227,121,227,130"); // U+7E66
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E68");
    },
    Error,
    "encode-error: U+7E68",
  );
  r = r && ([...ms932Encoder.encode("繩繪")].join(",") === "227,138,227,137"); // U+7E69
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E6B");
    },
    Error,
    "encode-error: U+7E6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E6C");
    },
    Error,
    "encode-error: U+7E6C",
  );
  r = r && ([...ms932Encoder.encode("繭")].join(",") === "150,154"); // U+7E6D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E6E");
    },
    Error,
    "encode-error: U+7E6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E6F");
    },
    Error,
    "encode-error: U+7E6F",
  );
  r = r && ([...ms932Encoder.encode("繰")].join(",") === "140,74"); // U+7E70
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E71");
    },
    Error,
    "encode-error: U+7E71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E72");
    },
    Error,
    "encode-error: U+7E72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E73");
    },
    Error,
    "encode-error: U+7E73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E74");
    },
    Error,
    "encode-error: U+7E74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E75");
    },
    Error,
    "encode-error: U+7E75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E76");
    },
    Error,
    "encode-error: U+7E76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E77");
    },
    Error,
    "encode-error: U+7E77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E78");
    },
    Error,
    "encode-error: U+7E78",
  );
  r = r && ([...ms932Encoder.encode("繹")].join(",") === "227,136"); // U+7E79
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E7A");
    },
    Error,
    "encode-error: U+7E7A",
  );
  r = r &&
    ([...ms932Encoder.encode("繻繼繽")].join(",") ===
      "227,140,227,139,227,143"); // U+7E7B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E7E");
    },
    Error,
    "encode-error: U+7E7E",
  );
  r = r && ([...ms932Encoder.encode("繿")].join(",") === "227,145"); // U+7E7F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E80");
    },
    Error,
    "encode-error: U+7E80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E81");
    },
    Error,
    "encode-error: U+7E81",
  );
  r = r && ([...ms932Encoder.encode("纂纃")].join(",") === "142,91,227,141"); // U+7E82
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E84");
    },
    Error,
    "encode-error: U+7E84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E85");
    },
    Error,
    "encode-error: U+7E85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E86");
    },
    Error,
    "encode-error: U+7E86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E87");
    },
    Error,
    "encode-error: U+7E87",
  );
  r = r &&
    ([...ms932Encoder.encode("纈纉纊")].join(",") === "227,146,227,147,250,92"); // U+7E88
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E8B");
    },
    Error,
    "encode-error: U+7E8B",
  );
  r = r && ([...ms932Encoder.encode("續")].join(",") === "227,148"); // U+7E8C
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E8D");
    },
    Error,
    "encode-error: U+7E8D",
  );
  r = r &&
    ([...ms932Encoder.encode("纎纏纐")].join(",") === "227,154,147,90,227,150"); // U+7E8E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E91");
    },
    Error,
    "encode-error: U+7E91",
  );
  r = r &&
    ([...ms932Encoder.encode("纒纓纔")].join(",") ===
      "227,149,227,151,227,152"); // U+7E92
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E95");
    },
    Error,
    "encode-error: U+7E95",
  );
  r = r && ([...ms932Encoder.encode("纖")].join(",") === "227,153"); // U+7E96
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E97");
    },
    Error,
    "encode-error: U+7E97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E98");
    },
    Error,
    "encode-error: U+7E98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E99");
    },
    Error,
    "encode-error: U+7E99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E9A");
    },
    Error,
    "encode-error: U+7E9A",
  );
  r = r && ([...ms932Encoder.encode("纛纜")].join(",") === "227,155,227,156"); // U+7E9B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E9D");
    },
    Error,
    "encode-error: U+7E9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E9E");
    },
    Error,
    "encode-error: U+7E9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7E9F");
    },
    Error,
    "encode-error: U+7E9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EA0");
    },
    Error,
    "encode-error: U+7EA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EA1");
    },
    Error,
    "encode-error: U+7EA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EA2");
    },
    Error,
    "encode-error: U+7EA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EA3");
    },
    Error,
    "encode-error: U+7EA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EA4");
    },
    Error,
    "encode-error: U+7EA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EA5");
    },
    Error,
    "encode-error: U+7EA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EA6");
    },
    Error,
    "encode-error: U+7EA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EA7");
    },
    Error,
    "encode-error: U+7EA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EA8");
    },
    Error,
    "encode-error: U+7EA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EA9");
    },
    Error,
    "encode-error: U+7EA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EAA");
    },
    Error,
    "encode-error: U+7EAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EAB");
    },
    Error,
    "encode-error: U+7EAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EAC");
    },
    Error,
    "encode-error: U+7EAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EAD");
    },
    Error,
    "encode-error: U+7EAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EAE");
    },
    Error,
    "encode-error: U+7EAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EAF");
    },
    Error,
    "encode-error: U+7EAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EB0");
    },
    Error,
    "encode-error: U+7EB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EB1");
    },
    Error,
    "encode-error: U+7EB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EB2");
    },
    Error,
    "encode-error: U+7EB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EB3");
    },
    Error,
    "encode-error: U+7EB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EB4");
    },
    Error,
    "encode-error: U+7EB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EB5");
    },
    Error,
    "encode-error: U+7EB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EB6");
    },
    Error,
    "encode-error: U+7EB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EB7");
    },
    Error,
    "encode-error: U+7EB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EB8");
    },
    Error,
    "encode-error: U+7EB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EB9");
    },
    Error,
    "encode-error: U+7EB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EBA");
    },
    Error,
    "encode-error: U+7EBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EBB");
    },
    Error,
    "encode-error: U+7EBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EBC");
    },
    Error,
    "encode-error: U+7EBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EBD");
    },
    Error,
    "encode-error: U+7EBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EBE");
    },
    Error,
    "encode-error: U+7EBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EBF");
    },
    Error,
    "encode-error: U+7EBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EC0");
    },
    Error,
    "encode-error: U+7EC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EC1");
    },
    Error,
    "encode-error: U+7EC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EC2");
    },
    Error,
    "encode-error: U+7EC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EC3");
    },
    Error,
    "encode-error: U+7EC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EC4");
    },
    Error,
    "encode-error: U+7EC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EC5");
    },
    Error,
    "encode-error: U+7EC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EC6");
    },
    Error,
    "encode-error: U+7EC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EC7");
    },
    Error,
    "encode-error: U+7EC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EC8");
    },
    Error,
    "encode-error: U+7EC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EC9");
    },
    Error,
    "encode-error: U+7EC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ECA");
    },
    Error,
    "encode-error: U+7ECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ECB");
    },
    Error,
    "encode-error: U+7ECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ECC");
    },
    Error,
    "encode-error: U+7ECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ECD");
    },
    Error,
    "encode-error: U+7ECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ECE");
    },
    Error,
    "encode-error: U+7ECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ECF");
    },
    Error,
    "encode-error: U+7ECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ED0");
    },
    Error,
    "encode-error: U+7ED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ED1");
    },
    Error,
    "encode-error: U+7ED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ED2");
    },
    Error,
    "encode-error: U+7ED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ED3");
    },
    Error,
    "encode-error: U+7ED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ED4");
    },
    Error,
    "encode-error: U+7ED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ED5");
    },
    Error,
    "encode-error: U+7ED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ED6");
    },
    Error,
    "encode-error: U+7ED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ED7");
    },
    Error,
    "encode-error: U+7ED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ED8");
    },
    Error,
    "encode-error: U+7ED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ED9");
    },
    Error,
    "encode-error: U+7ED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EDA");
    },
    Error,
    "encode-error: U+7EDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EDB");
    },
    Error,
    "encode-error: U+7EDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EDC");
    },
    Error,
    "encode-error: U+7EDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EDD");
    },
    Error,
    "encode-error: U+7EDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EDE");
    },
    Error,
    "encode-error: U+7EDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EDF");
    },
    Error,
    "encode-error: U+7EDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EE0");
    },
    Error,
    "encode-error: U+7EE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EE1");
    },
    Error,
    "encode-error: U+7EE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EE2");
    },
    Error,
    "encode-error: U+7EE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EE3");
    },
    Error,
    "encode-error: U+7EE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EE4");
    },
    Error,
    "encode-error: U+7EE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EE5");
    },
    Error,
    "encode-error: U+7EE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EE6");
    },
    Error,
    "encode-error: U+7EE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EE7");
    },
    Error,
    "encode-error: U+7EE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EE8");
    },
    Error,
    "encode-error: U+7EE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EE9");
    },
    Error,
    "encode-error: U+7EE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EEA");
    },
    Error,
    "encode-error: U+7EEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EEB");
    },
    Error,
    "encode-error: U+7EEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EEC");
    },
    Error,
    "encode-error: U+7EEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EED");
    },
    Error,
    "encode-error: U+7EED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EEE");
    },
    Error,
    "encode-error: U+7EEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EEF");
    },
    Error,
    "encode-error: U+7EEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EF0");
    },
    Error,
    "encode-error: U+7EF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EF1");
    },
    Error,
    "encode-error: U+7EF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EF2");
    },
    Error,
    "encode-error: U+7EF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EF3");
    },
    Error,
    "encode-error: U+7EF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EF4");
    },
    Error,
    "encode-error: U+7EF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EF5");
    },
    Error,
    "encode-error: U+7EF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EF6");
    },
    Error,
    "encode-error: U+7EF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EF7");
    },
    Error,
    "encode-error: U+7EF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EF8");
    },
    Error,
    "encode-error: U+7EF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EF9");
    },
    Error,
    "encode-error: U+7EF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EFA");
    },
    Error,
    "encode-error: U+7EFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EFB");
    },
    Error,
    "encode-error: U+7EFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EFC");
    },
    Error,
    "encode-error: U+7EFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EFD");
    },
    Error,
    "encode-error: U+7EFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EFE");
    },
    Error,
    "encode-error: U+7EFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7EFF");
    },
    Error,
    "encode-error: U+7EFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F00");
    },
    Error,
    "encode-error: U+7F00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F01");
    },
    Error,
    "encode-error: U+7F01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F02");
    },
    Error,
    "encode-error: U+7F02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F03");
    },
    Error,
    "encode-error: U+7F03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F04");
    },
    Error,
    "encode-error: U+7F04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F05");
    },
    Error,
    "encode-error: U+7F05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F06");
    },
    Error,
    "encode-error: U+7F06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F07");
    },
    Error,
    "encode-error: U+7F07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F08");
    },
    Error,
    "encode-error: U+7F08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F09");
    },
    Error,
    "encode-error: U+7F09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F0A");
    },
    Error,
    "encode-error: U+7F0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F0B");
    },
    Error,
    "encode-error: U+7F0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F0C");
    },
    Error,
    "encode-error: U+7F0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F0D");
    },
    Error,
    "encode-error: U+7F0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F0E");
    },
    Error,
    "encode-error: U+7F0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F0F");
    },
    Error,
    "encode-error: U+7F0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F10");
    },
    Error,
    "encode-error: U+7F10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F11");
    },
    Error,
    "encode-error: U+7F11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F12");
    },
    Error,
    "encode-error: U+7F12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F13");
    },
    Error,
    "encode-error: U+7F13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F14");
    },
    Error,
    "encode-error: U+7F14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F15");
    },
    Error,
    "encode-error: U+7F15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F16");
    },
    Error,
    "encode-error: U+7F16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F17");
    },
    Error,
    "encode-error: U+7F17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F18");
    },
    Error,
    "encode-error: U+7F18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F19");
    },
    Error,
    "encode-error: U+7F19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F1A");
    },
    Error,
    "encode-error: U+7F1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F1B");
    },
    Error,
    "encode-error: U+7F1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F1C");
    },
    Error,
    "encode-error: U+7F1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F1D");
    },
    Error,
    "encode-error: U+7F1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F1E");
    },
    Error,
    "encode-error: U+7F1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F1F");
    },
    Error,
    "encode-error: U+7F1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F20");
    },
    Error,
    "encode-error: U+7F20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F21");
    },
    Error,
    "encode-error: U+7F21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F22");
    },
    Error,
    "encode-error: U+7F22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F23");
    },
    Error,
    "encode-error: U+7F23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F24");
    },
    Error,
    "encode-error: U+7F24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F25");
    },
    Error,
    "encode-error: U+7F25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F26");
    },
    Error,
    "encode-error: U+7F26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F27");
    },
    Error,
    "encode-error: U+7F27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F28");
    },
    Error,
    "encode-error: U+7F28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F29");
    },
    Error,
    "encode-error: U+7F29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F2A");
    },
    Error,
    "encode-error: U+7F2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F2B");
    },
    Error,
    "encode-error: U+7F2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F2C");
    },
    Error,
    "encode-error: U+7F2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F2D");
    },
    Error,
    "encode-error: U+7F2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F2E");
    },
    Error,
    "encode-error: U+7F2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F2F");
    },
    Error,
    "encode-error: U+7F2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F30");
    },
    Error,
    "encode-error: U+7F30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F31");
    },
    Error,
    "encode-error: U+7F31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F32");
    },
    Error,
    "encode-error: U+7F32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F33");
    },
    Error,
    "encode-error: U+7F33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F34");
    },
    Error,
    "encode-error: U+7F34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F35");
    },
    Error,
    "encode-error: U+7F35",
  );
  r = r && ([...ms932Encoder.encode("缶")].join(",") === "138,202"); // U+7F36
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F37");
    },
    Error,
    "encode-error: U+7F37",
  );
  r = r && ([...ms932Encoder.encode("缸")].join(",") === "227,157"); // U+7F38
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F39");
    },
    Error,
    "encode-error: U+7F39",
  );
  r = r && ([...ms932Encoder.encode("缺")].join(",") === "227,158"); // U+7F3A
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F3B");
    },
    Error,
    "encode-error: U+7F3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F3C");
    },
    Error,
    "encode-error: U+7F3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F3D");
    },
    Error,
    "encode-error: U+7F3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F3E");
    },
    Error,
    "encode-error: U+7F3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F3F");
    },
    Error,
    "encode-error: U+7F3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F40");
    },
    Error,
    "encode-error: U+7F40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F41");
    },
    Error,
    "encode-error: U+7F41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F42");
    },
    Error,
    "encode-error: U+7F42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F43");
    },
    Error,
    "encode-error: U+7F43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F44");
    },
    Error,
    "encode-error: U+7F44",
  );
  r = r && ([...ms932Encoder.encode("罅")].join(",") === "227,159"); // U+7F45
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F46");
    },
    Error,
    "encode-error: U+7F46",
  );
  r = r && ([...ms932Encoder.encode("罇")].join(",") === "251,144"); // U+7F47
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F48");
    },
    Error,
    "encode-error: U+7F48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F49");
    },
    Error,
    "encode-error: U+7F49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F4A");
    },
    Error,
    "encode-error: U+7F4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F4B");
    },
    Error,
    "encode-error: U+7F4B",
  );
  r = r &&
    ([...ms932Encoder.encode("罌罍罎")].join(",") ===
      "227,160,227,161,227,162"); // U+7F4C
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F4F");
    },
    Error,
    "encode-error: U+7F4F",
  );
  r = r && ([...ms932Encoder.encode("罐网")].join(",") === "227,163,227,164"); // U+7F50
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F52");
    },
    Error,
    "encode-error: U+7F52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F53");
    },
    Error,
    "encode-error: U+7F53",
  );
  r = r && ([...ms932Encoder.encode("罔罕")].join(",") === "227,166,227,165"); // U+7F54
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F56");
    },
    Error,
    "encode-error: U+7F56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F57");
    },
    Error,
    "encode-error: U+7F57",
  );
  r = r && ([...ms932Encoder.encode("罘")].join(",") === "227,167"); // U+7F58
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F59");
    },
    Error,
    "encode-error: U+7F59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F5A");
    },
    Error,
    "encode-error: U+7F5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F5B");
    },
    Error,
    "encode-error: U+7F5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F5C");
    },
    Error,
    "encode-error: U+7F5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F5D");
    },
    Error,
    "encode-error: U+7F5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F5E");
    },
    Error,
    "encode-error: U+7F5E",
  );
  r = r && ([...ms932Encoder.encode("罟罠")].join(",") === "227,168,227,169"); // U+7F5F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F61");
    },
    Error,
    "encode-error: U+7F61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F62");
    },
    Error,
    "encode-error: U+7F62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F63");
    },
    Error,
    "encode-error: U+7F63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F64");
    },
    Error,
    "encode-error: U+7F64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F65");
    },
    Error,
    "encode-error: U+7F65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F66");
    },
    Error,
    "encode-error: U+7F66",
  );
  r = r &&
    ([...ms932Encoder.encode("罧罨罩罪罫")].join(",") ===
      "227,172,227,170,227,171,141,223,140,114"); // U+7F67
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F6C");
    },
    Error,
    "encode-error: U+7F6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F6D");
    },
    Error,
    "encode-error: U+7F6D",
  );
  r = r && ([...ms932Encoder.encode("置")].join(",") === "146,117"); // U+7F6E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F6F");
    },
    Error,
    "encode-error: U+7F6F",
  );
  r = r && ([...ms932Encoder.encode("罰")].join(",") === "148,177"); // U+7F70
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F71");
    },
    Error,
    "encode-error: U+7F71",
  );
  r = r && ([...ms932Encoder.encode("署")].join(",") === "143,144"); // U+7F72
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F73");
    },
    Error,
    "encode-error: U+7F73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F74");
    },
    Error,
    "encode-error: U+7F74",
  );
  r = r && ([...ms932Encoder.encode("罵")].join(",") === "148,108"); // U+7F75
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F76");
    },
    Error,
    "encode-error: U+7F76",
  );
  r = r &&
    ([...ms932Encoder.encode("罷罸罹")].join(",") ===
      "148,235,227,173,156,235"); // U+7F77
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F7A");
    },
    Error,
    "encode-error: U+7F7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F7B");
    },
    Error,
    "encode-error: U+7F7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F7C");
    },
    Error,
    "encode-error: U+7F7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F7D");
    },
    Error,
    "encode-error: U+7F7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F7E");
    },
    Error,
    "encode-error: U+7F7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F7F");
    },
    Error,
    "encode-error: U+7F7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F80");
    },
    Error,
    "encode-error: U+7F80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F81");
    },
    Error,
    "encode-error: U+7F81",
  );
  r = r && ([...ms932Encoder.encode("羂羃")].join(",") === "227,174,227,176"); // U+7F82
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F84");
    },
    Error,
    "encode-error: U+7F84",
  );
  r = r &&
    ([...ms932Encoder.encode("羅羆羇羈")].join(",") ===
      "151,133,227,175,227,178,227,177"); // U+7F85
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F89");
    },
    Error,
    "encode-error: U+7F89",
  );
  r = r && ([...ms932Encoder.encode("羊")].join(",") === "151,114"); // U+7F8A
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F8B");
    },
    Error,
    "encode-error: U+7F8B",
  );
  r = r && ([...ms932Encoder.encode("羌")].join(",") === "227,179"); // U+7F8C
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F8D");
    },
    Error,
    "encode-error: U+7F8D",
  );
  r = r && ([...ms932Encoder.encode("美")].join(",") === "148,252"); // U+7F8E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F8F");
    },
    Error,
    "encode-error: U+7F8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F90");
    },
    Error,
    "encode-error: U+7F90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F91");
    },
    Error,
    "encode-error: U+7F91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F92");
    },
    Error,
    "encode-error: U+7F92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F93");
    },
    Error,
    "encode-error: U+7F93",
  );
  r = r && ([...ms932Encoder.encode("羔")].join(",") === "227,180"); // U+7F94
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F95");
    },
    Error,
    "encode-error: U+7F95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F96");
    },
    Error,
    "encode-error: U+7F96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F97");
    },
    Error,
    "encode-error: U+7F97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F98");
    },
    Error,
    "encode-error: U+7F98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F99");
    },
    Error,
    "encode-error: U+7F99",
  );
  r = r && ([...ms932Encoder.encode("羚")].join(",") === "227,183"); // U+7F9A
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F9B");
    },
    Error,
    "encode-error: U+7F9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F9C");
    },
    Error,
    "encode-error: U+7F9C",
  );
  r = r && ([...ms932Encoder.encode("羝羞")].join(",") === "227,182,227,181"); // U+7F9D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7F9F");
    },
    Error,
    "encode-error: U+7F9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FA0");
    },
    Error,
    "encode-error: U+7FA0",
  );
  r = r && ([...ms932Encoder.encode("羡")].join(",") === "251,145"); // U+7FA1
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FA2");
    },
    Error,
    "encode-error: U+7FA2",
  );
  r = r && ([...ms932Encoder.encode("羣群")].join(",") === "227,184,140,81"); // U+7FA3
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FA5");
    },
    Error,
    "encode-error: U+7FA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FA6");
    },
    Error,
    "encode-error: U+7FA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FA7");
    },
    Error,
    "encode-error: U+7FA7",
  );
  r = r && ([...ms932Encoder.encode("羨義")].join(",") === "145,65,139,96"); // U+7FA8
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FAA");
    },
    Error,
    "encode-error: U+7FAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FAB");
    },
    Error,
    "encode-error: U+7FAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FAC");
    },
    Error,
    "encode-error: U+7FAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FAD");
    },
    Error,
    "encode-error: U+7FAD",
  );
  r = r && ([...ms932Encoder.encode("羮羯")].join(",") === "227,188,227,185"); // U+7FAE
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FB0");
    },
    Error,
    "encode-error: U+7FB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FB1");
    },
    Error,
    "encode-error: U+7FB1",
  );
  r = r && ([...ms932Encoder.encode("羲")].join(",") === "227,186"); // U+7FB2
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FB3");
    },
    Error,
    "encode-error: U+7FB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FB4");
    },
    Error,
    "encode-error: U+7FB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FB5");
    },
    Error,
    "encode-error: U+7FB5",
  );
  r = r && ([...ms932Encoder.encode("羶")].join(",") === "227,189"); // U+7FB6
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FB7");
    },
    Error,
    "encode-error: U+7FB7",
  );
  r = r && ([...ms932Encoder.encode("羸羹")].join(",") === "227,190,227,187"); // U+7FB8
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FBA");
    },
    Error,
    "encode-error: U+7FBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FBB");
    },
    Error,
    "encode-error: U+7FBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FBC");
    },
    Error,
    "encode-error: U+7FBC",
  );
  r = r && ([...ms932Encoder.encode("羽")].join(",") === "137,72"); // U+7FBD
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FBE");
    },
    Error,
    "encode-error: U+7FBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FBF");
    },
    Error,
    "encode-error: U+7FBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FC0");
    },
    Error,
    "encode-error: U+7FC0",
  );
  r = r && ([...ms932Encoder.encode("翁")].join(",") === "137,165"); // U+7FC1
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FC2");
    },
    Error,
    "encode-error: U+7FC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FC3");
    },
    Error,
    "encode-error: U+7FC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FC4");
    },
    Error,
    "encode-error: U+7FC4",
  );
  r = r && ([...ms932Encoder.encode("翅翆")].join(",") === "227,192,227,193"); // U+7FC5
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FC7");
    },
    Error,
    "encode-error: U+7FC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FC8");
    },
    Error,
    "encode-error: U+7FC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FC9");
    },
    Error,
    "encode-error: U+7FC9",
  );
  r = r && ([...ms932Encoder.encode("翊")].join(",") === "227,194"); // U+7FCA
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FCB");
    },
    Error,
    "encode-error: U+7FCB",
  );
  r = r && ([...ms932Encoder.encode("翌")].join(",") === "151,130"); // U+7FCC
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FCD");
    },
    Error,
    "encode-error: U+7FCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FCE");
    },
    Error,
    "encode-error: U+7FCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FCF");
    },
    Error,
    "encode-error: U+7FCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FD0");
    },
    Error,
    "encode-error: U+7FD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FD1");
    },
    Error,
    "encode-error: U+7FD1",
  );
  r = r && ([...ms932Encoder.encode("習")].join(",") === "143,75"); // U+7FD2
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FD3");
    },
    Error,
    "encode-error: U+7FD3",
  );
  r = r && ([...ms932Encoder.encode("翔翕")].join(",") === "227,196,227,195"); // U+7FD4
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FD6");
    },
    Error,
    "encode-error: U+7FD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FD7");
    },
    Error,
    "encode-error: U+7FD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FD8");
    },
    Error,
    "encode-error: U+7FD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FD9");
    },
    Error,
    "encode-error: U+7FD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FDA");
    },
    Error,
    "encode-error: U+7FDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FDB");
    },
    Error,
    "encode-error: U+7FDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FDC");
    },
    Error,
    "encode-error: U+7FDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FDD");
    },
    Error,
    "encode-error: U+7FDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FDE");
    },
    Error,
    "encode-error: U+7FDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FDF");
    },
    Error,
    "encode-error: U+7FDF",
  );
  r = r && ([...ms932Encoder.encode("翠翡")].join(",") === "144,137,227,197"); // U+7FE0
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FE2");
    },
    Error,
    "encode-error: U+7FE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FE3");
    },
    Error,
    "encode-error: U+7FE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FE4");
    },
    Error,
    "encode-error: U+7FE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FE5");
    },
    Error,
    "encode-error: U+7FE5",
  );
  r = r && ([...ms932Encoder.encode("翦")].join(",") === "227,198"); // U+7FE6
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FE7");
    },
    Error,
    "encode-error: U+7FE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FE8");
    },
    Error,
    "encode-error: U+7FE8",
  );
  r = r && ([...ms932Encoder.encode("翩")].join(",") === "227,199"); // U+7FE9
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FEA");
    },
    Error,
    "encode-error: U+7FEA",
  );
  r = r && ([...ms932Encoder.encode("翫")].join(",") === "138,227"); // U+7FEB
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FEC");
    },
    Error,
    "encode-error: U+7FEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FED");
    },
    Error,
    "encode-error: U+7FED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FEE");
    },
    Error,
    "encode-error: U+7FEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FEF");
    },
    Error,
    "encode-error: U+7FEF",
  );
  r = r && ([...ms932Encoder.encode("翰")].join(",") === "138,203"); // U+7FF0
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FF1");
    },
    Error,
    "encode-error: U+7FF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FF2");
    },
    Error,
    "encode-error: U+7FF2",
  );
  r = r && ([...ms932Encoder.encode("翳")].join(",") === "227,200"); // U+7FF3
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FF4");
    },
    Error,
    "encode-error: U+7FF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FF5");
    },
    Error,
    "encode-error: U+7FF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FF6");
    },
    Error,
    "encode-error: U+7FF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FF7");
    },
    Error,
    "encode-error: U+7FF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FF8");
    },
    Error,
    "encode-error: U+7FF8",
  );
  r = r && ([...ms932Encoder.encode("翹")].join(",") === "227,201"); // U+7FF9
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FFA");
    },
    Error,
    "encode-error: U+7FFA",
  );
  r = r && ([...ms932Encoder.encode("翻翼")].join(",") === "150,124,151,131"); // U+7FFB
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FFD");
    },
    Error,
    "encode-error: U+7FFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FFE");
    },
    Error,
    "encode-error: U+7FFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7FFF");
    },
    Error,
    "encode-error: U+7FFF",
  );

  assertStrictEquals(r, true);
});
