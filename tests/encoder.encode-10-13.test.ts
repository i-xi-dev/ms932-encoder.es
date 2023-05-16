import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+9C00-U+9FFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  r = r && ([...ms932Encoder.encode("鰀")].join(",") === "252,70"); // U+9C00
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C01");
    },
    Error,
    "EncodingError U+9C01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C02");
    },
    Error,
    "EncodingError U+9C02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C03");
    },
    Error,
    "EncodingError U+9C03",
  );
  r = r && ([...ms932Encoder.encode("鰄")].join(",") === "233,216"); // U+9C04
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C05");
    },
    Error,
    "EncodingError U+9C05",
  );
  r = r && ([...ms932Encoder.encode("鰆")].join(",") === "233,212"); // U+9C06
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C07");
    },
    Error,
    "EncodingError U+9C07",
  );
  r = r &&
    ([...ms932Encoder.encode("鰈鰉鰊")].join(",") === "233,213,233,209,233,215"); // U+9C08
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C0B");
    },
    Error,
    "EncodingError U+9C0B",
  );
  r = r && ([...ms932Encoder.encode("鰌鰍")].join(",") === "233,211,138,130"); // U+9C0C
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C0E");
    },
    Error,
    "EncodingError U+9C0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C0F");
    },
    Error,
    "EncodingError U+9C0F",
  );
  r = r && ([...ms932Encoder.encode("鰐")].join(",") === "152,107"); // U+9C10
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C11");
    },
    Error,
    "EncodingError U+9C11",
  );
  r = r &&
    ([...ms932Encoder.encode("鰒鰓鰔鰕")].join(",") ===
      "233,214,233,210,233,208,233,207"); // U+9C12
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C16");
    },
    Error,
    "EncodingError U+9C16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C17");
    },
    Error,
    "EncodingError U+9C17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C18");
    },
    Error,
    "EncodingError U+9C18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C19");
    },
    Error,
    "EncodingError U+9C19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C1A");
    },
    Error,
    "EncodingError U+9C1A",
  );
  r = r && ([...ms932Encoder.encode("鰛")].join(",") === "233,218"); // U+9C1B
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C1C");
    },
    Error,
    "EncodingError U+9C1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C1D");
    },
    Error,
    "EncodingError U+9C1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C1E");
    },
    Error,
    "EncodingError U+9C1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C1F");
    },
    Error,
    "EncodingError U+9C1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C20");
    },
    Error,
    "EncodingError U+9C20",
  );
  r = r && ([...ms932Encoder.encode("鰡")].join(",") === "233,221"); // U+9C21
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C22");
    },
    Error,
    "EncodingError U+9C22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C23");
    },
    Error,
    "EncodingError U+9C23",
  );
  r = r && ([...ms932Encoder.encode("鰤鰥")].join(",") === "233,220,233,219"); // U+9C24
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C26");
    },
    Error,
    "EncodingError U+9C26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C27");
    },
    Error,
    "EncodingError U+9C27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C28");
    },
    Error,
    "EncodingError U+9C28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C29");
    },
    Error,
    "EncodingError U+9C29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C2A");
    },
    Error,
    "EncodingError U+9C2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C2B");
    },
    Error,
    "EncodingError U+9C2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C2C");
    },
    Error,
    "EncodingError U+9C2C",
  );
  r = r &&
    ([...ms932Encoder.encode("鰭鰮鰯鰰")].join(",") ===
      "149,104,233,217,136,241,233,222"); // U+9C2D
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C31");
    },
    Error,
    "EncodingError U+9C31",
  );
  r = r && ([...ms932Encoder.encode("鰲")].join(",") === "233,224"); // U+9C32
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C33");
    },
    Error,
    "EncodingError U+9C33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C34");
    },
    Error,
    "EncodingError U+9C34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C35");
    },
    Error,
    "EncodingError U+9C35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C36");
    },
    Error,
    "EncodingError U+9C36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C37");
    },
    Error,
    "EncodingError U+9C37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C38");
    },
    Error,
    "EncodingError U+9C38",
  );
  r = r &&
    ([...ms932Encoder.encode("鰹鰺鰻")].join(",") === "138,143,233,203,137,86"); // U+9C39
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C3C");
    },
    Error,
    "EncodingError U+9C3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C3D");
    },
    Error,
    "EncodingError U+9C3D",
  );
  r = r && ([...ms932Encoder.encode("鰾")].join(",") === "233,226"); // U+9C3E
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C3F");
    },
    Error,
    "EncodingError U+9C3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C40");
    },
    Error,
    "EncodingError U+9C40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C41");
    },
    Error,
    "EncodingError U+9C41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C42");
    },
    Error,
    "EncodingError U+9C42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C43");
    },
    Error,
    "EncodingError U+9C43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C44");
    },
    Error,
    "EncodingError U+9C44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C45");
    },
    Error,
    "EncodingError U+9C45",
  );
  r = r &&
    ([...ms932Encoder.encode("鱆鱇鱈")].join(",") === "233,225,233,223,146,76"); // U+9C46
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C49");
    },
    Error,
    "EncodingError U+9C49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C4A");
    },
    Error,
    "EncodingError U+9C4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C4B");
    },
    Error,
    "EncodingError U+9C4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C4C");
    },
    Error,
    "EncodingError U+9C4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C4D");
    },
    Error,
    "EncodingError U+9C4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C4E");
    },
    Error,
    "EncodingError U+9C4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C4F");
    },
    Error,
    "EncodingError U+9C4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C50");
    },
    Error,
    "EncodingError U+9C50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C51");
    },
    Error,
    "EncodingError U+9C51",
  );
  r = r && ([...ms932Encoder.encode("鱒")].join(",") === "150,144"); // U+9C52
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C53");
    },
    Error,
    "EncodingError U+9C53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C54");
    },
    Error,
    "EncodingError U+9C54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C55");
    },
    Error,
    "EncodingError U+9C55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C56");
    },
    Error,
    "EncodingError U+9C56",
  );
  r = r && ([...ms932Encoder.encode("鱗")].join(",") === "151,216"); // U+9C57
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C58");
    },
    Error,
    "EncodingError U+9C58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C59");
    },
    Error,
    "EncodingError U+9C59",
  );
  r = r && ([...ms932Encoder.encode("鱚")].join(",") === "233,227"); // U+9C5A
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C5B");
    },
    Error,
    "EncodingError U+9C5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C5C");
    },
    Error,
    "EncodingError U+9C5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C5D");
    },
    Error,
    "EncodingError U+9C5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C5E");
    },
    Error,
    "EncodingError U+9C5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C5F");
    },
    Error,
    "EncodingError U+9C5F",
  );
  r = r && ([...ms932Encoder.encode("鱠")].join(",") === "233,228"); // U+9C60
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C61");
    },
    Error,
    "EncodingError U+9C61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C62");
    },
    Error,
    "EncodingError U+9C62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C63");
    },
    Error,
    "EncodingError U+9C63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C64");
    },
    Error,
    "EncodingError U+9C64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C65");
    },
    Error,
    "EncodingError U+9C65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C66");
    },
    Error,
    "EncodingError U+9C66",
  );
  r = r && ([...ms932Encoder.encode("鱧")].join(",") === "233,229"); // U+9C67
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C68");
    },
    Error,
    "EncodingError U+9C68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C69");
    },
    Error,
    "EncodingError U+9C69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C6A");
    },
    Error,
    "EncodingError U+9C6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C6B");
    },
    Error,
    "EncodingError U+9C6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C6C");
    },
    Error,
    "EncodingError U+9C6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C6D");
    },
    Error,
    "EncodingError U+9C6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C6E");
    },
    Error,
    "EncodingError U+9C6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C6F");
    },
    Error,
    "EncodingError U+9C6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C70");
    },
    Error,
    "EncodingError U+9C70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C71");
    },
    Error,
    "EncodingError U+9C71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C72");
    },
    Error,
    "EncodingError U+9C72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C73");
    },
    Error,
    "EncodingError U+9C73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C74");
    },
    Error,
    "EncodingError U+9C74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C75");
    },
    Error,
    "EncodingError U+9C75",
  );
  r = r && ([...ms932Encoder.encode("鱶")].join(",") === "233,230"); // U+9C76
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C77");
    },
    Error,
    "EncodingError U+9C77",
  );
  r = r && ([...ms932Encoder.encode("鱸")].join(",") === "233,231"); // U+9C78
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C79");
    },
    Error,
    "EncodingError U+9C79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C7A");
    },
    Error,
    "EncodingError U+9C7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C7B");
    },
    Error,
    "EncodingError U+9C7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C7C");
    },
    Error,
    "EncodingError U+9C7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C7D");
    },
    Error,
    "EncodingError U+9C7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C7E");
    },
    Error,
    "EncodingError U+9C7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C7F");
    },
    Error,
    "EncodingError U+9C7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C80");
    },
    Error,
    "EncodingError U+9C80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C81");
    },
    Error,
    "EncodingError U+9C81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C82");
    },
    Error,
    "EncodingError U+9C82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C83");
    },
    Error,
    "EncodingError U+9C83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C84");
    },
    Error,
    "EncodingError U+9C84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C85");
    },
    Error,
    "EncodingError U+9C85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C86");
    },
    Error,
    "EncodingError U+9C86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C87");
    },
    Error,
    "EncodingError U+9C87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C88");
    },
    Error,
    "EncodingError U+9C88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C89");
    },
    Error,
    "EncodingError U+9C89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C8A");
    },
    Error,
    "EncodingError U+9C8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C8B");
    },
    Error,
    "EncodingError U+9C8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C8C");
    },
    Error,
    "EncodingError U+9C8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C8D");
    },
    Error,
    "EncodingError U+9C8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C8E");
    },
    Error,
    "EncodingError U+9C8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C8F");
    },
    Error,
    "EncodingError U+9C8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C90");
    },
    Error,
    "EncodingError U+9C90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C91");
    },
    Error,
    "EncodingError U+9C91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C92");
    },
    Error,
    "EncodingError U+9C92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C93");
    },
    Error,
    "EncodingError U+9C93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C94");
    },
    Error,
    "EncodingError U+9C94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C95");
    },
    Error,
    "EncodingError U+9C95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C96");
    },
    Error,
    "EncodingError U+9C96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C97");
    },
    Error,
    "EncodingError U+9C97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C98");
    },
    Error,
    "EncodingError U+9C98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C99");
    },
    Error,
    "EncodingError U+9C99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C9A");
    },
    Error,
    "EncodingError U+9C9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C9B");
    },
    Error,
    "EncodingError U+9C9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C9C");
    },
    Error,
    "EncodingError U+9C9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C9D");
    },
    Error,
    "EncodingError U+9C9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C9E");
    },
    Error,
    "EncodingError U+9C9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9C9F");
    },
    Error,
    "EncodingError U+9C9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CA0");
    },
    Error,
    "EncodingError U+9CA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CA1");
    },
    Error,
    "EncodingError U+9CA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CA2");
    },
    Error,
    "EncodingError U+9CA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CA3");
    },
    Error,
    "EncodingError U+9CA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CA4");
    },
    Error,
    "EncodingError U+9CA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CA5");
    },
    Error,
    "EncodingError U+9CA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CA6");
    },
    Error,
    "EncodingError U+9CA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CA7");
    },
    Error,
    "EncodingError U+9CA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CA8");
    },
    Error,
    "EncodingError U+9CA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CA9");
    },
    Error,
    "EncodingError U+9CA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CAA");
    },
    Error,
    "EncodingError U+9CAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CAB");
    },
    Error,
    "EncodingError U+9CAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CAC");
    },
    Error,
    "EncodingError U+9CAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CAD");
    },
    Error,
    "EncodingError U+9CAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CAE");
    },
    Error,
    "EncodingError U+9CAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CAF");
    },
    Error,
    "EncodingError U+9CAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CB0");
    },
    Error,
    "EncodingError U+9CB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CB1");
    },
    Error,
    "EncodingError U+9CB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CB2");
    },
    Error,
    "EncodingError U+9CB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CB3");
    },
    Error,
    "EncodingError U+9CB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CB4");
    },
    Error,
    "EncodingError U+9CB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CB5");
    },
    Error,
    "EncodingError U+9CB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CB6");
    },
    Error,
    "EncodingError U+9CB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CB7");
    },
    Error,
    "EncodingError U+9CB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CB8");
    },
    Error,
    "EncodingError U+9CB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CB9");
    },
    Error,
    "EncodingError U+9CB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CBA");
    },
    Error,
    "EncodingError U+9CBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CBB");
    },
    Error,
    "EncodingError U+9CBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CBC");
    },
    Error,
    "EncodingError U+9CBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CBD");
    },
    Error,
    "EncodingError U+9CBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CBE");
    },
    Error,
    "EncodingError U+9CBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CBF");
    },
    Error,
    "EncodingError U+9CBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CC0");
    },
    Error,
    "EncodingError U+9CC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CC1");
    },
    Error,
    "EncodingError U+9CC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CC2");
    },
    Error,
    "EncodingError U+9CC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CC3");
    },
    Error,
    "EncodingError U+9CC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CC4");
    },
    Error,
    "EncodingError U+9CC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CC5");
    },
    Error,
    "EncodingError U+9CC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CC6");
    },
    Error,
    "EncodingError U+9CC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CC7");
    },
    Error,
    "EncodingError U+9CC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CC8");
    },
    Error,
    "EncodingError U+9CC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CC9");
    },
    Error,
    "EncodingError U+9CC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CCA");
    },
    Error,
    "EncodingError U+9CCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CCB");
    },
    Error,
    "EncodingError U+9CCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CCC");
    },
    Error,
    "EncodingError U+9CCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CCD");
    },
    Error,
    "EncodingError U+9CCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CCE");
    },
    Error,
    "EncodingError U+9CCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CCF");
    },
    Error,
    "EncodingError U+9CCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CD0");
    },
    Error,
    "EncodingError U+9CD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CD1");
    },
    Error,
    "EncodingError U+9CD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CD2");
    },
    Error,
    "EncodingError U+9CD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CD3");
    },
    Error,
    "EncodingError U+9CD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CD4");
    },
    Error,
    "EncodingError U+9CD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CD5");
    },
    Error,
    "EncodingError U+9CD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CD6");
    },
    Error,
    "EncodingError U+9CD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CD7");
    },
    Error,
    "EncodingError U+9CD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CD8");
    },
    Error,
    "EncodingError U+9CD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CD9");
    },
    Error,
    "EncodingError U+9CD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CDA");
    },
    Error,
    "EncodingError U+9CDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CDB");
    },
    Error,
    "EncodingError U+9CDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CDC");
    },
    Error,
    "EncodingError U+9CDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CDD");
    },
    Error,
    "EncodingError U+9CDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CDE");
    },
    Error,
    "EncodingError U+9CDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CDF");
    },
    Error,
    "EncodingError U+9CDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CE0");
    },
    Error,
    "EncodingError U+9CE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CE1");
    },
    Error,
    "EncodingError U+9CE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CE2");
    },
    Error,
    "EncodingError U+9CE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CE3");
    },
    Error,
    "EncodingError U+9CE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CE4");
    },
    Error,
    "EncodingError U+9CE4",
  );
  r = r && ([...ms932Encoder.encode("鳥")].join(",") === "146,185"); // U+9CE5
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CE6");
    },
    Error,
    "EncodingError U+9CE6",
  );
  r = r && ([...ms932Encoder.encode("鳧")].join(",") === "233,232"); // U+9CE7
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CE8");
    },
    Error,
    "EncodingError U+9CE8",
  );
  r = r && ([...ms932Encoder.encode("鳩")].join(",") === "148,181"); // U+9CE9
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CEA");
    },
    Error,
    "EncodingError U+9CEA",
  );
  r = r && ([...ms932Encoder.encode("鳫鳬")].join(",") === "233,237,233,233"); // U+9CEB
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CED");
    },
    Error,
    "EncodingError U+9CED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CEE");
    },
    Error,
    "EncodingError U+9CEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CEF");
    },
    Error,
    "EncodingError U+9CEF",
  );
  r = r && ([...ms932Encoder.encode("鳰")].join(",") === "233,234"); // U+9CF0
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CF1");
    },
    Error,
    "EncodingError U+9CF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CF2");
    },
    Error,
    "EncodingError U+9CF2",
  );
  r = r && ([...ms932Encoder.encode("鳳鳴")].join(",") === "150,80,150,194"); // U+9CF3
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CF5");
    },
    Error,
    "EncodingError U+9CF5",
  );
  r = r && ([...ms932Encoder.encode("鳶")].join(",") === "147,206"); // U+9CF6
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CF7");
    },
    Error,
    "EncodingError U+9CF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CF8");
    },
    Error,
    "EncodingError U+9CF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CF9");
    },
    Error,
    "EncodingError U+9CF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CFA");
    },
    Error,
    "EncodingError U+9CFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CFB");
    },
    Error,
    "EncodingError U+9CFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CFC");
    },
    Error,
    "EncodingError U+9CFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CFD");
    },
    Error,
    "EncodingError U+9CFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CFE");
    },
    Error,
    "EncodingError U+9CFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9CFF");
    },
    Error,
    "EncodingError U+9CFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D00");
    },
    Error,
    "EncodingError U+9D00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D01");
    },
    Error,
    "EncodingError U+9D01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D02");
    },
    Error,
    "EncodingError U+9D02",
  );
  r = r && ([...ms932Encoder.encode("鴃")].join(",") === "233,238"); // U+9D03
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D04");
    },
    Error,
    "EncodingError U+9D04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D05");
    },
    Error,
    "EncodingError U+9D05",
  );
  r = r &&
    ([...ms932Encoder.encode("鴆鴇鴈鴉")].join(",") ===
      "233,239,147,188,233,236,233,235"); // U+9D06
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D0A");
    },
    Error,
    "EncodingError U+9D0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D0B");
    },
    Error,
    "EncodingError U+9D0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D0C");
    },
    Error,
    "EncodingError U+9D0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D0D");
    },
    Error,
    "EncodingError U+9D0D",
  );
  r = r && ([...ms932Encoder.encode("鴎")].join(",") === "137,168"); // U+9D0E
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D0F");
    },
    Error,
    "EncodingError U+9D0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D10");
    },
    Error,
    "EncodingError U+9D10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D11");
    },
    Error,
    "EncodingError U+9D11",
  );
  r = r && ([...ms932Encoder.encode("鴒")].join(",") === "233,247"); // U+9D12
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D13");
    },
    Error,
    "EncodingError U+9D13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D14");
    },
    Error,
    "EncodingError U+9D14",
  );
  r = r && ([...ms932Encoder.encode("鴕")].join(",") === "233,246"); // U+9D15
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D16");
    },
    Error,
    "EncodingError U+9D16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D17");
    },
    Error,
    "EncodingError U+9D17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D18");
    },
    Error,
    "EncodingError U+9D18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D19");
    },
    Error,
    "EncodingError U+9D19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D1A");
    },
    Error,
    "EncodingError U+9D1A",
  );
  r = r && ([...ms932Encoder.encode("鴛")].join(",") === "137,149"); // U+9D1B
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D1C");
    },
    Error,
    "EncodingError U+9D1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D1D");
    },
    Error,
    "EncodingError U+9D1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D1E");
    },
    Error,
    "EncodingError U+9D1E",
  );
  r = r && ([...ms932Encoder.encode("鴟")].join(",") === "233,244"); // U+9D1F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D20");
    },
    Error,
    "EncodingError U+9D20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D21");
    },
    Error,
    "EncodingError U+9D21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D22");
    },
    Error,
    "EncodingError U+9D22",
  );
  r = r && ([...ms932Encoder.encode("鴣")].join(",") === "233,243"); // U+9D23
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D24");
    },
    Error,
    "EncodingError U+9D24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D25");
    },
    Error,
    "EncodingError U+9D25",
  );
  r = r && ([...ms932Encoder.encode("鴦")].join(",") === "233,241"); // U+9D26
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D27");
    },
    Error,
    "EncodingError U+9D27",
  );
  r = r && ([...ms932Encoder.encode("鴨")].join(",") === "138,155"); // U+9D28
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D29");
    },
    Error,
    "EncodingError U+9D29",
  );
  r = r &&
    ([...ms932Encoder.encode("鴪鴫鴬")].join(",") === "233,240,142,176,137,167"); // U+9D2A
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D2D");
    },
    Error,
    "EncodingError U+9D2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D2E");
    },
    Error,
    "EncodingError U+9D2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D2F");
    },
    Error,
    "EncodingError U+9D2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D30");
    },
    Error,
    "EncodingError U+9D30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D31");
    },
    Error,
    "EncodingError U+9D31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D32");
    },
    Error,
    "EncodingError U+9D32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D33");
    },
    Error,
    "EncodingError U+9D33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D34");
    },
    Error,
    "EncodingError U+9D34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D35");
    },
    Error,
    "EncodingError U+9D35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D36");
    },
    Error,
    "EncodingError U+9D36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D37");
    },
    Error,
    "EncodingError U+9D37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D38");
    },
    Error,
    "EncodingError U+9D38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D39");
    },
    Error,
    "EncodingError U+9D39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D3A");
    },
    Error,
    "EncodingError U+9D3A",
  );
  r = r && ([...ms932Encoder.encode("鴻")].join(",") === "141,131"); // U+9D3B
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D3C");
    },
    Error,
    "EncodingError U+9D3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D3D");
    },
    Error,
    "EncodingError U+9D3D",
  );
  r = r && ([...ms932Encoder.encode("鴾鴿")].join(",") === "233,250,233,249"); // U+9D3E
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D40");
    },
    Error,
    "EncodingError U+9D40",
  );
  r = r && ([...ms932Encoder.encode("鵁")].join(",") === "233,248"); // U+9D41
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D42");
    },
    Error,
    "EncodingError U+9D42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D43");
    },
    Error,
    "EncodingError U+9D43",
  );
  r = r && ([...ms932Encoder.encode("鵄")].join(",") === "233,245"); // U+9D44
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D45");
    },
    Error,
    "EncodingError U+9D45",
  );
  r = r && ([...ms932Encoder.encode("鵆")].join(",") === "233,251"); // U+9D46
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D47");
    },
    Error,
    "EncodingError U+9D47",
  );
  r = r && ([...ms932Encoder.encode("鵈")].join(",") === "233,252"); // U+9D48
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D49");
    },
    Error,
    "EncodingError U+9D49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D4A");
    },
    Error,
    "EncodingError U+9D4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D4B");
    },
    Error,
    "EncodingError U+9D4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D4C");
    },
    Error,
    "EncodingError U+9D4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D4D");
    },
    Error,
    "EncodingError U+9D4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D4E");
    },
    Error,
    "EncodingError U+9D4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D4F");
    },
    Error,
    "EncodingError U+9D4F",
  );
  r = r && ([...ms932Encoder.encode("鵐鵑")].join(",") === "234,68,234,67"); // U+9D50
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D52");
    },
    Error,
    "EncodingError U+9D52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D53");
    },
    Error,
    "EncodingError U+9D53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D54");
    },
    Error,
    "EncodingError U+9D54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D55");
    },
    Error,
    "EncodingError U+9D55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D56");
    },
    Error,
    "EncodingError U+9D56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D57");
    },
    Error,
    "EncodingError U+9D57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D58");
    },
    Error,
    "EncodingError U+9D58",
  );
  r = r && ([...ms932Encoder.encode("鵙")].join(",") === "234,69"); // U+9D59
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D5A");
    },
    Error,
    "EncodingError U+9D5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D5B");
    },
    Error,
    "EncodingError U+9D5B",
  );
  r = r &&
    ([...ms932Encoder.encode("鵜鵝鵞")].join(",") === "137,76,234,64,234,65"); // U+9D5C
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D5F");
    },
    Error,
    "EncodingError U+9D5F",
  );
  r = r && ([...ms932Encoder.encode("鵠鵡")].join(",") === "141,148,150,183"); // U+9D60
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D62");
    },
    Error,
    "EncodingError U+9D62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D63");
    },
    Error,
    "EncodingError U+9D63",
  );
  r = r && ([...ms932Encoder.encode("鵤")].join(",") === "234,66"); // U+9D64
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D65");
    },
    Error,
    "EncodingError U+9D65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D66");
    },
    Error,
    "EncodingError U+9D66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D67");
    },
    Error,
    "EncodingError U+9D67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D68");
    },
    Error,
    "EncodingError U+9D68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D69");
    },
    Error,
    "EncodingError U+9D69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D6A");
    },
    Error,
    "EncodingError U+9D6A",
  );
  r = r && ([...ms932Encoder.encode("鵫鵬")].join(",") === "252,72,150,81"); // U+9D6B
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D6D");
    },
    Error,
    "EncodingError U+9D6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D6E");
    },
    Error,
    "EncodingError U+9D6E",
  );
  r = r && ([...ms932Encoder.encode("鵯鵰")].join(",") === "234,74,252,71"); // U+9D6F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D71");
    },
    Error,
    "EncodingError U+9D71",
  );
  r = r && ([...ms932Encoder.encode("鵲")].join(",") === "234,70"); // U+9D72
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D73");
    },
    Error,
    "EncodingError U+9D73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D74");
    },
    Error,
    "EncodingError U+9D74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D75");
    },
    Error,
    "EncodingError U+9D75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D76");
    },
    Error,
    "EncodingError U+9D76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D77");
    },
    Error,
    "EncodingError U+9D77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D78");
    },
    Error,
    "EncodingError U+9D78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D79");
    },
    Error,
    "EncodingError U+9D79",
  );
  r = r && ([...ms932Encoder.encode("鵺")].join(",") === "234,75"); // U+9D7A
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D7B");
    },
    Error,
    "EncodingError U+9D7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D7C");
    },
    Error,
    "EncodingError U+9D7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D7D");
    },
    Error,
    "EncodingError U+9D7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D7E");
    },
    Error,
    "EncodingError U+9D7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D7F");
    },
    Error,
    "EncodingError U+9D7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D80");
    },
    Error,
    "EncodingError U+9D80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D81");
    },
    Error,
    "EncodingError U+9D81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D82");
    },
    Error,
    "EncodingError U+9D82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D83");
    },
    Error,
    "EncodingError U+9D83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D84");
    },
    Error,
    "EncodingError U+9D84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D85");
    },
    Error,
    "EncodingError U+9D85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D86");
    },
    Error,
    "EncodingError U+9D86",
  );
  r = r && ([...ms932Encoder.encode("鶇")].join(",") === "234,72"); // U+9D87
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D88");
    },
    Error,
    "EncodingError U+9D88",
  );
  r = r && ([...ms932Encoder.encode("鶉")].join(",") === "234,71"); // U+9D89
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D8A");
    },
    Error,
    "EncodingError U+9D8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D8B");
    },
    Error,
    "EncodingError U+9D8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D8C");
    },
    Error,
    "EncodingError U+9D8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D8D");
    },
    Error,
    "EncodingError U+9D8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D8E");
    },
    Error,
    "EncodingError U+9D8E",
  );
  r = r && ([...ms932Encoder.encode("鶏")].join(",") === "140,123"); // U+9D8F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D90");
    },
    Error,
    "EncodingError U+9D90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D91");
    },
    Error,
    "EncodingError U+9D91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D92");
    },
    Error,
    "EncodingError U+9D92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D93");
    },
    Error,
    "EncodingError U+9D93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D94");
    },
    Error,
    "EncodingError U+9D94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D95");
    },
    Error,
    "EncodingError U+9D95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D96");
    },
    Error,
    "EncodingError U+9D96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D97");
    },
    Error,
    "EncodingError U+9D97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D98");
    },
    Error,
    "EncodingError U+9D98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D99");
    },
    Error,
    "EncodingError U+9D99",
  );
  r = r && ([...ms932Encoder.encode("鶚")].join(",") === "234,76"); // U+9D9A
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D9B");
    },
    Error,
    "EncodingError U+9D9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D9C");
    },
    Error,
    "EncodingError U+9D9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D9D");
    },
    Error,
    "EncodingError U+9D9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D9E");
    },
    Error,
    "EncodingError U+9D9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9D9F");
    },
    Error,
    "EncodingError U+9D9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DA0");
    },
    Error,
    "EncodingError U+9DA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DA1");
    },
    Error,
    "EncodingError U+9DA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DA2");
    },
    Error,
    "EncodingError U+9DA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DA3");
    },
    Error,
    "EncodingError U+9DA3",
  );
  r = r && ([...ms932Encoder.encode("鶤")].join(",") === "234,77"); // U+9DA4
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DA5");
    },
    Error,
    "EncodingError U+9DA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DA6");
    },
    Error,
    "EncodingError U+9DA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DA7");
    },
    Error,
    "EncodingError U+9DA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DA8");
    },
    Error,
    "EncodingError U+9DA8",
  );
  r = r && ([...ms932Encoder.encode("鶩")].join(",") === "234,78"); // U+9DA9
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DAA");
    },
    Error,
    "EncodingError U+9DAA",
  );
  r = r && ([...ms932Encoder.encode("鶫")].join(",") === "234,73"); // U+9DAB
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DAC");
    },
    Error,
    "EncodingError U+9DAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DAD");
    },
    Error,
    "EncodingError U+9DAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DAE");
    },
    Error,
    "EncodingError U+9DAE",
  );
  r = r && ([...ms932Encoder.encode("鶯")].join(",") === "233,242"); // U+9DAF
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DB0");
    },
    Error,
    "EncodingError U+9DB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DB1");
    },
    Error,
    "EncodingError U+9DB1",
  );
  r = r && ([...ms932Encoder.encode("鶲")].join(",") === "234,79"); // U+9DB2
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DB3");
    },
    Error,
    "EncodingError U+9DB3",
  );
  r = r && ([...ms932Encoder.encode("鶴")].join(",") === "146,223"); // U+9DB4
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DB5");
    },
    Error,
    "EncodingError U+9DB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DB6");
    },
    Error,
    "EncodingError U+9DB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DB7");
    },
    Error,
    "EncodingError U+9DB7",
  );
  r = r && ([...ms932Encoder.encode("鶸")].join(",") === "234,83"); // U+9DB8
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DB9");
    },
    Error,
    "EncodingError U+9DB9",
  );
  r = r && ([...ms932Encoder.encode("鶺鶻")].join(",") === "234,84,234,82"); // U+9DBA
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DBC");
    },
    Error,
    "EncodingError U+9DBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DBD");
    },
    Error,
    "EncodingError U+9DBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DBE");
    },
    Error,
    "EncodingError U+9DBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DBF");
    },
    Error,
    "EncodingError U+9DBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DC0");
    },
    Error,
    "EncodingError U+9DC0",
  );
  r = r && ([...ms932Encoder.encode("鷁鷂")].join(",") === "234,81,234,87"); // U+9DC1
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DC3");
    },
    Error,
    "EncodingError U+9DC3",
  );
  r = r && ([...ms932Encoder.encode("鷄")].join(",") === "234,80"); // U+9DC4
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DC5");
    },
    Error,
    "EncodingError U+9DC5",
  );
  r = r && ([...ms932Encoder.encode("鷆")].join(",") === "234,85"); // U+9DC6
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DC7");
    },
    Error,
    "EncodingError U+9DC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DC8");
    },
    Error,
    "EncodingError U+9DC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DC9");
    },
    Error,
    "EncodingError U+9DC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DCA");
    },
    Error,
    "EncodingError U+9DCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DCB");
    },
    Error,
    "EncodingError U+9DCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DCC");
    },
    Error,
    "EncodingError U+9DCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DCD");
    },
    Error,
    "EncodingError U+9DCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DCE");
    },
    Error,
    "EncodingError U+9DCE",
  );
  r = r && ([...ms932Encoder.encode("鷏")].join(",") === "234,86"); // U+9DCF
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DD0");
    },
    Error,
    "EncodingError U+9DD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DD1");
    },
    Error,
    "EncodingError U+9DD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DD2");
    },
    Error,
    "EncodingError U+9DD2",
  );
  r = r && ([...ms932Encoder.encode("鷓")].join(",") === "234,89"); // U+9DD3
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DD4");
    },
    Error,
    "EncodingError U+9DD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DD5");
    },
    Error,
    "EncodingError U+9DD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DD6");
    },
    Error,
    "EncodingError U+9DD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DD7");
    },
    Error,
    "EncodingError U+9DD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DD8");
    },
    Error,
    "EncodingError U+9DD8",
  );
  r = r && ([...ms932Encoder.encode("鷙")].join(",") === "234,88"); // U+9DD9
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DDA");
    },
    Error,
    "EncodingError U+9DDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DDB");
    },
    Error,
    "EncodingError U+9DDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DDC");
    },
    Error,
    "EncodingError U+9DDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DDD");
    },
    Error,
    "EncodingError U+9DDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DDE");
    },
    Error,
    "EncodingError U+9DDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DDF");
    },
    Error,
    "EncodingError U+9DDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DE0");
    },
    Error,
    "EncodingError U+9DE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DE1");
    },
    Error,
    "EncodingError U+9DE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DE2");
    },
    Error,
    "EncodingError U+9DE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DE3");
    },
    Error,
    "EncodingError U+9DE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DE4");
    },
    Error,
    "EncodingError U+9DE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DE5");
    },
    Error,
    "EncodingError U+9DE5",
  );
  r = r && ([...ms932Encoder.encode("鷦")].join(",") === "234,91"); // U+9DE6
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DE7");
    },
    Error,
    "EncodingError U+9DE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DE8");
    },
    Error,
    "EncodingError U+9DE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DE9");
    },
    Error,
    "EncodingError U+9DE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DEA");
    },
    Error,
    "EncodingError U+9DEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DEB");
    },
    Error,
    "EncodingError U+9DEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DEC");
    },
    Error,
    "EncodingError U+9DEC",
  );
  r = r && ([...ms932Encoder.encode("鷭")].join(",") === "234,92"); // U+9DED
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DEE");
    },
    Error,
    "EncodingError U+9DEE",
  );
  r = r && ([...ms932Encoder.encode("鷯")].join(",") === "234,93"); // U+9DEF
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DF0");
    },
    Error,
    "EncodingError U+9DF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DF1");
    },
    Error,
    "EncodingError U+9DF1",
  );
  r = r && ([...ms932Encoder.encode("鷲")].join(",") === "152,104"); // U+9DF2
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DF3");
    },
    Error,
    "EncodingError U+9DF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DF4");
    },
    Error,
    "EncodingError U+9DF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DF5");
    },
    Error,
    "EncodingError U+9DF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DF6");
    },
    Error,
    "EncodingError U+9DF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DF7");
    },
    Error,
    "EncodingError U+9DF7",
  );
  r = r &&
    ([...ms932Encoder.encode("鷸鷹鷺")].join(",") === "234,90,145,233,141,235"); // U+9DF8
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DFB");
    },
    Error,
    "EncodingError U+9DFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DFC");
    },
    Error,
    "EncodingError U+9DFC",
  );
  r = r && ([...ms932Encoder.encode("鷽")].join(",") === "234,94"); // U+9DFD
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DFE");
    },
    Error,
    "EncodingError U+9DFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9DFF");
    },
    Error,
    "EncodingError U+9DFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E00");
    },
    Error,
    "EncodingError U+9E00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E01");
    },
    Error,
    "EncodingError U+9E01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E02");
    },
    Error,
    "EncodingError U+9E02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E03");
    },
    Error,
    "EncodingError U+9E03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E04");
    },
    Error,
    "EncodingError U+9E04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E05");
    },
    Error,
    "EncodingError U+9E05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E06");
    },
    Error,
    "EncodingError U+9E06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E07");
    },
    Error,
    "EncodingError U+9E07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E08");
    },
    Error,
    "EncodingError U+9E08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E09");
    },
    Error,
    "EncodingError U+9E09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E0A");
    },
    Error,
    "EncodingError U+9E0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E0B");
    },
    Error,
    "EncodingError U+9E0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E0C");
    },
    Error,
    "EncodingError U+9E0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E0D");
    },
    Error,
    "EncodingError U+9E0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E0E");
    },
    Error,
    "EncodingError U+9E0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E0F");
    },
    Error,
    "EncodingError U+9E0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E10");
    },
    Error,
    "EncodingError U+9E10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E11");
    },
    Error,
    "EncodingError U+9E11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E12");
    },
    Error,
    "EncodingError U+9E12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E13");
    },
    Error,
    "EncodingError U+9E13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E14");
    },
    Error,
    "EncodingError U+9E14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E15");
    },
    Error,
    "EncodingError U+9E15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E16");
    },
    Error,
    "EncodingError U+9E16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E17");
    },
    Error,
    "EncodingError U+9E17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E18");
    },
    Error,
    "EncodingError U+9E18",
  );
  r = r &&
    ([...ms932Encoder.encode("鸙鸚鸛")].join(",") === "252,74,234,95,234,96"); // U+9E19
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E1C");
    },
    Error,
    "EncodingError U+9E1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E1D");
    },
    Error,
    "EncodingError U+9E1D",
  );
  r = r && ([...ms932Encoder.encode("鸞")].join(",") === "234,97"); // U+9E1E
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E1F");
    },
    Error,
    "EncodingError U+9E1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E20");
    },
    Error,
    "EncodingError U+9E20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E21");
    },
    Error,
    "EncodingError U+9E21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E22");
    },
    Error,
    "EncodingError U+9E22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E23");
    },
    Error,
    "EncodingError U+9E23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E24");
    },
    Error,
    "EncodingError U+9E24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E25");
    },
    Error,
    "EncodingError U+9E25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E26");
    },
    Error,
    "EncodingError U+9E26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E27");
    },
    Error,
    "EncodingError U+9E27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E28");
    },
    Error,
    "EncodingError U+9E28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E29");
    },
    Error,
    "EncodingError U+9E29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E2A");
    },
    Error,
    "EncodingError U+9E2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E2B");
    },
    Error,
    "EncodingError U+9E2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E2C");
    },
    Error,
    "EncodingError U+9E2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E2D");
    },
    Error,
    "EncodingError U+9E2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E2E");
    },
    Error,
    "EncodingError U+9E2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E2F");
    },
    Error,
    "EncodingError U+9E2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E30");
    },
    Error,
    "EncodingError U+9E30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E31");
    },
    Error,
    "EncodingError U+9E31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E32");
    },
    Error,
    "EncodingError U+9E32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E33");
    },
    Error,
    "EncodingError U+9E33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E34");
    },
    Error,
    "EncodingError U+9E34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E35");
    },
    Error,
    "EncodingError U+9E35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E36");
    },
    Error,
    "EncodingError U+9E36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E37");
    },
    Error,
    "EncodingError U+9E37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E38");
    },
    Error,
    "EncodingError U+9E38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E39");
    },
    Error,
    "EncodingError U+9E39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E3A");
    },
    Error,
    "EncodingError U+9E3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E3B");
    },
    Error,
    "EncodingError U+9E3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E3C");
    },
    Error,
    "EncodingError U+9E3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E3D");
    },
    Error,
    "EncodingError U+9E3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E3E");
    },
    Error,
    "EncodingError U+9E3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E3F");
    },
    Error,
    "EncodingError U+9E3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E40");
    },
    Error,
    "EncodingError U+9E40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E41");
    },
    Error,
    "EncodingError U+9E41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E42");
    },
    Error,
    "EncodingError U+9E42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E43");
    },
    Error,
    "EncodingError U+9E43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E44");
    },
    Error,
    "EncodingError U+9E44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E45");
    },
    Error,
    "EncodingError U+9E45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E46");
    },
    Error,
    "EncodingError U+9E46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E47");
    },
    Error,
    "EncodingError U+9E47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E48");
    },
    Error,
    "EncodingError U+9E48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E49");
    },
    Error,
    "EncodingError U+9E49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E4A");
    },
    Error,
    "EncodingError U+9E4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E4B");
    },
    Error,
    "EncodingError U+9E4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E4C");
    },
    Error,
    "EncodingError U+9E4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E4D");
    },
    Error,
    "EncodingError U+9E4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E4E");
    },
    Error,
    "EncodingError U+9E4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E4F");
    },
    Error,
    "EncodingError U+9E4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E50");
    },
    Error,
    "EncodingError U+9E50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E51");
    },
    Error,
    "EncodingError U+9E51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E52");
    },
    Error,
    "EncodingError U+9E52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E53");
    },
    Error,
    "EncodingError U+9E53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E54");
    },
    Error,
    "EncodingError U+9E54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E55");
    },
    Error,
    "EncodingError U+9E55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E56");
    },
    Error,
    "EncodingError U+9E56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E57");
    },
    Error,
    "EncodingError U+9E57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E58");
    },
    Error,
    "EncodingError U+9E58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E59");
    },
    Error,
    "EncodingError U+9E59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E5A");
    },
    Error,
    "EncodingError U+9E5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E5B");
    },
    Error,
    "EncodingError U+9E5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E5C");
    },
    Error,
    "EncodingError U+9E5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E5D");
    },
    Error,
    "EncodingError U+9E5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E5E");
    },
    Error,
    "EncodingError U+9E5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E5F");
    },
    Error,
    "EncodingError U+9E5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E60");
    },
    Error,
    "EncodingError U+9E60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E61");
    },
    Error,
    "EncodingError U+9E61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E62");
    },
    Error,
    "EncodingError U+9E62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E63");
    },
    Error,
    "EncodingError U+9E63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E64");
    },
    Error,
    "EncodingError U+9E64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E65");
    },
    Error,
    "EncodingError U+9E65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E66");
    },
    Error,
    "EncodingError U+9E66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E67");
    },
    Error,
    "EncodingError U+9E67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E68");
    },
    Error,
    "EncodingError U+9E68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E69");
    },
    Error,
    "EncodingError U+9E69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E6A");
    },
    Error,
    "EncodingError U+9E6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E6B");
    },
    Error,
    "EncodingError U+9E6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E6C");
    },
    Error,
    "EncodingError U+9E6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E6D");
    },
    Error,
    "EncodingError U+9E6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E6E");
    },
    Error,
    "EncodingError U+9E6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E6F");
    },
    Error,
    "EncodingError U+9E6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E70");
    },
    Error,
    "EncodingError U+9E70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E71");
    },
    Error,
    "EncodingError U+9E71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E72");
    },
    Error,
    "EncodingError U+9E72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E73");
    },
    Error,
    "EncodingError U+9E73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E74");
    },
    Error,
    "EncodingError U+9E74",
  );
  r = r && ([...ms932Encoder.encode("鹵")].join(",") === "234,98"); // U+9E75
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E76");
    },
    Error,
    "EncodingError U+9E76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E77");
    },
    Error,
    "EncodingError U+9E77",
  );
  r = r && ([...ms932Encoder.encode("鹸鹹")].join(",") === "140,178,234,99"); // U+9E78
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E7A");
    },
    Error,
    "EncodingError U+9E7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E7B");
    },
    Error,
    "EncodingError U+9E7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E7C");
    },
    Error,
    "EncodingError U+9E7C",
  );
  r = r && ([...ms932Encoder.encode("鹽")].join(",") === "234,100"); // U+9E7D
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E7E");
    },
    Error,
    "EncodingError U+9E7E",
  );
  r = r && ([...ms932Encoder.encode("鹿")].join(",") === "142,173"); // U+9E7F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E80");
    },
    Error,
    "EncodingError U+9E80",
  );
  r = r && ([...ms932Encoder.encode("麁")].join(",") === "234,101"); // U+9E81
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E82");
    },
    Error,
    "EncodingError U+9E82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E83");
    },
    Error,
    "EncodingError U+9E83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E84");
    },
    Error,
    "EncodingError U+9E84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E85");
    },
    Error,
    "EncodingError U+9E85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E86");
    },
    Error,
    "EncodingError U+9E86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E87");
    },
    Error,
    "EncodingError U+9E87",
  );
  r = r && ([...ms932Encoder.encode("麈")].join(",") === "234,102"); // U+9E88
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E89");
    },
    Error,
    "EncodingError U+9E89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E8A");
    },
    Error,
    "EncodingError U+9E8A",
  );
  r = r && ([...ms932Encoder.encode("麋麌")].join(",") === "234,103,234,104"); // U+9E8B
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E8D");
    },
    Error,
    "EncodingError U+9E8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E8E");
    },
    Error,
    "EncodingError U+9E8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E8F");
    },
    Error,
    "EncodingError U+9E8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E90");
    },
    Error,
    "EncodingError U+9E90",
  );
  r = r &&
    ([...ms932Encoder.encode("麑麒麓")].join(",") === "234,107,234,105,152,91"); // U+9E91
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E94");
    },
    Error,
    "EncodingError U+9E94",
  );
  r = r && ([...ms932Encoder.encode("麕")].join(",") === "234,106"); // U+9E95
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E96");
    },
    Error,
    "EncodingError U+9E96",
  );
  r = r && ([...ms932Encoder.encode("麗")].join(",") === "151,237"); // U+9E97
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E98");
    },
    Error,
    "EncodingError U+9E98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E99");
    },
    Error,
    "EncodingError U+9E99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E9A");
    },
    Error,
    "EncodingError U+9E9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E9B");
    },
    Error,
    "EncodingError U+9E9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E9C");
    },
    Error,
    "EncodingError U+9E9C",
  );
  r = r && ([...ms932Encoder.encode("麝")].join(",") === "234,108"); // U+9E9D
  assertThrows(
    () => {
      ms932Encoder.encode("\u9E9E");
    },
    Error,
    "EncodingError U+9E9E",
  );
  r = r && ([...ms932Encoder.encode("麟")].join(",") === "151,217"); // U+9E9F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EA0");
    },
    Error,
    "EncodingError U+9EA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EA1");
    },
    Error,
    "EncodingError U+9EA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EA2");
    },
    Error,
    "EncodingError U+9EA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EA3");
    },
    Error,
    "EncodingError U+9EA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EA4");
    },
    Error,
    "EncodingError U+9EA4",
  );
  r = r && ([...ms932Encoder.encode("麥麦")].join(",") === "234,109,148,158"); // U+9EA5
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EA7");
    },
    Error,
    "EncodingError U+9EA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EA8");
    },
    Error,
    "EncodingError U+9EA8",
  );
  r = r && ([...ms932Encoder.encode("麩麪")].join(",") === "234,110,234,112"); // U+9EA9
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EAB");
    },
    Error,
    "EncodingError U+9EAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EAC");
    },
    Error,
    "EncodingError U+9EAC",
  );
  r = r && ([...ms932Encoder.encode("麭")].join(",") === "234,113"); // U+9EAD
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EAE");
    },
    Error,
    "EncodingError U+9EAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EAF");
    },
    Error,
    "EncodingError U+9EAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EB0");
    },
    Error,
    "EncodingError U+9EB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EB1");
    },
    Error,
    "EncodingError U+9EB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EB2");
    },
    Error,
    "EncodingError U+9EB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EB3");
    },
    Error,
    "EncodingError U+9EB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EB4");
    },
    Error,
    "EncodingError U+9EB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EB5");
    },
    Error,
    "EncodingError U+9EB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EB6");
    },
    Error,
    "EncodingError U+9EB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EB7");
    },
    Error,
    "EncodingError U+9EB7",
  );
  r = r &&
    ([...ms932Encoder.encode("麸麹麺麻麼")].join(",") ===
      "234,111,141,141,150,203,150,131,155,245"); // U+9EB8
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EBD");
    },
    Error,
    "EncodingError U+9EBD",
  );
  r = r && ([...ms932Encoder.encode("麾麿")].join(",") === "159,128,150,155"); // U+9EBE
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EC0");
    },
    Error,
    "EncodingError U+9EC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EC1");
    },
    Error,
    "EncodingError U+9EC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EC2");
    },
    Error,
    "EncodingError U+9EC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EC3");
    },
    Error,
    "EncodingError U+9EC3",
  );
  r = r && ([...ms932Encoder.encode("黄")].join(",") === "137,169"); // U+9EC4
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EC5");
    },
    Error,
    "EncodingError U+9EC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EC6");
    },
    Error,
    "EncodingError U+9EC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EC7");
    },
    Error,
    "EncodingError U+9EC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EC8");
    },
    Error,
    "EncodingError U+9EC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EC9");
    },
    Error,
    "EncodingError U+9EC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ECA");
    },
    Error,
    "EncodingError U+9ECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ECB");
    },
    Error,
    "EncodingError U+9ECB",
  );
  r = r &&
    ([...ms932Encoder.encode("黌黍黎黏黐黑黒")].join(",") ===
      "234,115,139,111,234,116,234,117,234,118,252,75,141,149"); // U+9ECC
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ED3");
    },
    Error,
    "EncodingError U+9ED3",
  );
  r = r && ([...ms932Encoder.encode("黔")].join(",") === "234,119"); // U+9ED4
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ED5");
    },
    Error,
    "EncodingError U+9ED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ED6");
    },
    Error,
    "EncodingError U+9ED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ED7");
    },
    Error,
    "EncodingError U+9ED7",
  );
  r = r && ([...ms932Encoder.encode("默黙")].join(",") === "224,210,150,217"); // U+9ED8
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EDA");
    },
    Error,
    "EncodingError U+9EDA",
  );
  r = r &&
    ([...ms932Encoder.encode("黛黜黝點")].join(",") ===
      "145,225,234,120,234,122,234,121"); // U+9EDB
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EDF");
    },
    Error,
    "EncodingError U+9EDF",
  );
  r = r && ([...ms932Encoder.encode("黠")].join(",") === "234,123"); // U+9EE0
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EE1");
    },
    Error,
    "EncodingError U+9EE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EE2");
    },
    Error,
    "EncodingError U+9EE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EE3");
    },
    Error,
    "EncodingError U+9EE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EE4");
    },
    Error,
    "EncodingError U+9EE4",
  );
  r = r && ([...ms932Encoder.encode("黥")].join(",") === "234,124"); // U+9EE5
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EE6");
    },
    Error,
    "EncodingError U+9EE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EE7");
    },
    Error,
    "EncodingError U+9EE7",
  );
  r = r && ([...ms932Encoder.encode("黨")].join(",") === "234,125"); // U+9EE8
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EE9");
    },
    Error,
    "EncodingError U+9EE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EEA");
    },
    Error,
    "EncodingError U+9EEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EEB");
    },
    Error,
    "EncodingError U+9EEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EEC");
    },
    Error,
    "EncodingError U+9EEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EED");
    },
    Error,
    "EncodingError U+9EED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EEE");
    },
    Error,
    "EncodingError U+9EEE",
  );
  r = r && ([...ms932Encoder.encode("黯")].join(",") === "234,126"); // U+9EEF
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EF0");
    },
    Error,
    "EncodingError U+9EF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EF1");
    },
    Error,
    "EncodingError U+9EF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EF2");
    },
    Error,
    "EncodingError U+9EF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EF3");
    },
    Error,
    "EncodingError U+9EF3",
  );
  r = r && ([...ms932Encoder.encode("黴")].join(",") === "234,128"); // U+9EF4
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EF5");
    },
    Error,
    "EncodingError U+9EF5",
  );
  r = r && ([...ms932Encoder.encode("黶黷")].join(",") === "234,129,234,130"); // U+9EF6
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EF8");
    },
    Error,
    "EncodingError U+9EF8",
  );
  r = r && ([...ms932Encoder.encode("黹")].join(",") === "234,131"); // U+9EF9
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EFA");
    },
    Error,
    "EncodingError U+9EFA",
  );
  r = r &&
    ([...ms932Encoder.encode("黻黼黽")].join(",") === "234,132,234,133,234,134"); // U+9EFB
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EFE");
    },
    Error,
    "EncodingError U+9EFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9EFF");
    },
    Error,
    "EncodingError U+9EFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F00");
    },
    Error,
    "EncodingError U+9F00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F01");
    },
    Error,
    "EncodingError U+9F01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F02");
    },
    Error,
    "EncodingError U+9F02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F03");
    },
    Error,
    "EncodingError U+9F03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F04");
    },
    Error,
    "EncodingError U+9F04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F05");
    },
    Error,
    "EncodingError U+9F05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F06");
    },
    Error,
    "EncodingError U+9F06",
  );
  r = r && ([...ms932Encoder.encode("鼇鼈")].join(",") === "234,135,234,136"); // U+9F07
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F09");
    },
    Error,
    "EncodingError U+9F09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F0A");
    },
    Error,
    "EncodingError U+9F0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F0B");
    },
    Error,
    "EncodingError U+9F0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F0C");
    },
    Error,
    "EncodingError U+9F0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F0D");
    },
    Error,
    "EncodingError U+9F0D",
  );
  r = r && ([...ms932Encoder.encode("鼎")].join(",") === "147,67"); // U+9F0E
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F0F");
    },
    Error,
    "EncodingError U+9F0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F10");
    },
    Error,
    "EncodingError U+9F10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F11");
    },
    Error,
    "EncodingError U+9F11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F12");
    },
    Error,
    "EncodingError U+9F12",
  );
  r = r && ([...ms932Encoder.encode("鼓")].join(",") === "140,219"); // U+9F13
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F14");
    },
    Error,
    "EncodingError U+9F14",
  );
  r = r && ([...ms932Encoder.encode("鼕")].join(",") === "234,138"); // U+9F15
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F16");
    },
    Error,
    "EncodingError U+9F16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F17");
    },
    Error,
    "EncodingError U+9F17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F18");
    },
    Error,
    "EncodingError U+9F18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F19");
    },
    Error,
    "EncodingError U+9F19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F1A");
    },
    Error,
    "EncodingError U+9F1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F1B");
    },
    Error,
    "EncodingError U+9F1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F1C");
    },
    Error,
    "EncodingError U+9F1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F1D");
    },
    Error,
    "EncodingError U+9F1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F1E");
    },
    Error,
    "EncodingError U+9F1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F1F");
    },
    Error,
    "EncodingError U+9F1F",
  );
  r = r && ([...ms932Encoder.encode("鼠鼡")].join(",") === "145,108,234,139"); // U+9F20
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F22");
    },
    Error,
    "EncodingError U+9F22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F23");
    },
    Error,
    "EncodingError U+9F23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F24");
    },
    Error,
    "EncodingError U+9F24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F25");
    },
    Error,
    "EncodingError U+9F25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F26");
    },
    Error,
    "EncodingError U+9F26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F27");
    },
    Error,
    "EncodingError U+9F27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F28");
    },
    Error,
    "EncodingError U+9F28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F29");
    },
    Error,
    "EncodingError U+9F29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F2A");
    },
    Error,
    "EncodingError U+9F2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F2B");
    },
    Error,
    "EncodingError U+9F2B",
  );
  r = r && ([...ms932Encoder.encode("鼬")].join(",") === "234,140"); // U+9F2C
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F2D");
    },
    Error,
    "EncodingError U+9F2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F2E");
    },
    Error,
    "EncodingError U+9F2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F2F");
    },
    Error,
    "EncodingError U+9F2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F30");
    },
    Error,
    "EncodingError U+9F30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F31");
    },
    Error,
    "EncodingError U+9F31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F32");
    },
    Error,
    "EncodingError U+9F32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F33");
    },
    Error,
    "EncodingError U+9F33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F34");
    },
    Error,
    "EncodingError U+9F34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F35");
    },
    Error,
    "EncodingError U+9F35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F36");
    },
    Error,
    "EncodingError U+9F36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F37");
    },
    Error,
    "EncodingError U+9F37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F38");
    },
    Error,
    "EncodingError U+9F38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F39");
    },
    Error,
    "EncodingError U+9F39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F3A");
    },
    Error,
    "EncodingError U+9F3A",
  );
  r = r && ([...ms932Encoder.encode("鼻")].join(",") === "149,64"); // U+9F3B
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F3C");
    },
    Error,
    "EncodingError U+9F3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F3D");
    },
    Error,
    "EncodingError U+9F3D",
  );
  r = r && ([...ms932Encoder.encode("鼾")].join(",") === "234,141"); // U+9F3E
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F3F");
    },
    Error,
    "EncodingError U+9F3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F40");
    },
    Error,
    "EncodingError U+9F40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F41");
    },
    Error,
    "EncodingError U+9F41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F42");
    },
    Error,
    "EncodingError U+9F42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F43");
    },
    Error,
    "EncodingError U+9F43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F44");
    },
    Error,
    "EncodingError U+9F44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F45");
    },
    Error,
    "EncodingError U+9F45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F46");
    },
    Error,
    "EncodingError U+9F46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F47");
    },
    Error,
    "EncodingError U+9F47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F48");
    },
    Error,
    "EncodingError U+9F48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F49");
    },
    Error,
    "EncodingError U+9F49",
  );
  r = r && ([...ms932Encoder.encode("齊齋")].join(",") === "234,142,226,86"); // U+9F4A
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F4C");
    },
    Error,
    "EncodingError U+9F4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F4D");
    },
    Error,
    "EncodingError U+9F4D",
  );
  r = r && ([...ms932Encoder.encode("齎齏")].join(",") === "230,216,232,235"); // U+9F4E
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F50");
    },
    Error,
    "EncodingError U+9F50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F51");
    },
    Error,
    "EncodingError U+9F51",
  );
  r = r && ([...ms932Encoder.encode("齒")].join(",") === "234,143"); // U+9F52
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F53");
    },
    Error,
    "EncodingError U+9F53",
  );
  r = r && ([...ms932Encoder.encode("齔")].join(",") === "234,144"); // U+9F54
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F55");
    },
    Error,
    "EncodingError U+9F55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F56");
    },
    Error,
    "EncodingError U+9F56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F57");
    },
    Error,
    "EncodingError U+9F57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F58");
    },
    Error,
    "EncodingError U+9F58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F59");
    },
    Error,
    "EncodingError U+9F59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F5A");
    },
    Error,
    "EncodingError U+9F5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F5B");
    },
    Error,
    "EncodingError U+9F5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F5C");
    },
    Error,
    "EncodingError U+9F5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F5D");
    },
    Error,
    "EncodingError U+9F5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F5E");
    },
    Error,
    "EncodingError U+9F5E",
  );
  r = r &&
    ([...ms932Encoder.encode("齟齠齡齢齣")].join(",") ===
      "234,146,234,147,234,148,151,238,234,145"); // U+9F5F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F64");
    },
    Error,
    "EncodingError U+9F64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F65");
    },
    Error,
    "EncodingError U+9F65",
  );
  r = r && ([...ms932Encoder.encode("齦齧")].join(",") === "234,149,234,150"); // U+9F66
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F68");
    },
    Error,
    "EncodingError U+9F68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F69");
    },
    Error,
    "EncodingError U+9F69",
  );
  r = r && ([...ms932Encoder.encode("齪")].join(",") === "234,152"); // U+9F6A
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F6B");
    },
    Error,
    "EncodingError U+9F6B",
  );
  r = r && ([...ms932Encoder.encode("齬")].join(",") === "234,151"); // U+9F6C
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F6D");
    },
    Error,
    "EncodingError U+9F6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F6E");
    },
    Error,
    "EncodingError U+9F6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F6F");
    },
    Error,
    "EncodingError U+9F6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F70");
    },
    Error,
    "EncodingError U+9F70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F71");
    },
    Error,
    "EncodingError U+9F71",
  );
  r = r && ([...ms932Encoder.encode("齲")].join(",") === "234,154"); // U+9F72
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F73");
    },
    Error,
    "EncodingError U+9F73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F74");
    },
    Error,
    "EncodingError U+9F74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F75");
    },
    Error,
    "EncodingError U+9F75",
  );
  r = r && ([...ms932Encoder.encode("齶齷")].join(",") === "234,155,234,153"); // U+9F76
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F78");
    },
    Error,
    "EncodingError U+9F78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F79");
    },
    Error,
    "EncodingError U+9F79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F7A");
    },
    Error,
    "EncodingError U+9F7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F7B");
    },
    Error,
    "EncodingError U+9F7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F7C");
    },
    Error,
    "EncodingError U+9F7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F7D");
    },
    Error,
    "EncodingError U+9F7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F7E");
    },
    Error,
    "EncodingError U+9F7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F7F");
    },
    Error,
    "EncodingError U+9F7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F80");
    },
    Error,
    "EncodingError U+9F80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F81");
    },
    Error,
    "EncodingError U+9F81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F82");
    },
    Error,
    "EncodingError U+9F82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F83");
    },
    Error,
    "EncodingError U+9F83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F84");
    },
    Error,
    "EncodingError U+9F84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F85");
    },
    Error,
    "EncodingError U+9F85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F86");
    },
    Error,
    "EncodingError U+9F86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F87");
    },
    Error,
    "EncodingError U+9F87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F88");
    },
    Error,
    "EncodingError U+9F88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F89");
    },
    Error,
    "EncodingError U+9F89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F8A");
    },
    Error,
    "EncodingError U+9F8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F8B");
    },
    Error,
    "EncodingError U+9F8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F8C");
    },
    Error,
    "EncodingError U+9F8C",
  );
  r = r && ([...ms932Encoder.encode("龍")].join(",") === "151,180"); // U+9F8D
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F8E");
    },
    Error,
    "EncodingError U+9F8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F8F");
    },
    Error,
    "EncodingError U+9F8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F90");
    },
    Error,
    "EncodingError U+9F90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F91");
    },
    Error,
    "EncodingError U+9F91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F92");
    },
    Error,
    "EncodingError U+9F92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F93");
    },
    Error,
    "EncodingError U+9F93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F94");
    },
    Error,
    "EncodingError U+9F94",
  );
  r = r && ([...ms932Encoder.encode("龕")].join(",") === "234,156"); // U+9F95
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F96");
    },
    Error,
    "EncodingError U+9F96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F97");
    },
    Error,
    "EncodingError U+9F97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F98");
    },
    Error,
    "EncodingError U+9F98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F99");
    },
    Error,
    "EncodingError U+9F99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F9A");
    },
    Error,
    "EncodingError U+9F9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F9B");
    },
    Error,
    "EncodingError U+9F9B",
  );
  r = r && ([...ms932Encoder.encode("龜龝")].join(",") === "234,157,226,115"); // U+9F9C
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F9E");
    },
    Error,
    "EncodingError U+9F9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9F9F");
    },
    Error,
    "EncodingError U+9F9F",
  );
  r = r && ([...ms932Encoder.encode("龠")].join(",") === "234,158"); // U+9FA0
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FA1");
    },
    Error,
    "EncodingError U+9FA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FA2");
    },
    Error,
    "EncodingError U+9FA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FA3");
    },
    Error,
    "EncodingError U+9FA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FA4");
    },
    Error,
    "EncodingError U+9FA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FA5");
    },
    Error,
    "EncodingError U+9FA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FA6");
    },
    Error,
    "EncodingError U+9FA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FA7");
    },
    Error,
    "EncodingError U+9FA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FA8");
    },
    Error,
    "EncodingError U+9FA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FA9");
    },
    Error,
    "EncodingError U+9FA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FAA");
    },
    Error,
    "EncodingError U+9FAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FAB");
    },
    Error,
    "EncodingError U+9FAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FAC");
    },
    Error,
    "EncodingError U+9FAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FAD");
    },
    Error,
    "EncodingError U+9FAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FAE");
    },
    Error,
    "EncodingError U+9FAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FAF");
    },
    Error,
    "EncodingError U+9FAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FB0");
    },
    Error,
    "EncodingError U+9FB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FB1");
    },
    Error,
    "EncodingError U+9FB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FB2");
    },
    Error,
    "EncodingError U+9FB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FB3");
    },
    Error,
    "EncodingError U+9FB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FB4");
    },
    Error,
    "EncodingError U+9FB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FB5");
    },
    Error,
    "EncodingError U+9FB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FB6");
    },
    Error,
    "EncodingError U+9FB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FB7");
    },
    Error,
    "EncodingError U+9FB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FB8");
    },
    Error,
    "EncodingError U+9FB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FB9");
    },
    Error,
    "EncodingError U+9FB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FBA");
    },
    Error,
    "EncodingError U+9FBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FBB");
    },
    Error,
    "EncodingError U+9FBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FBC");
    },
    Error,
    "EncodingError U+9FBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FBD");
    },
    Error,
    "EncodingError U+9FBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FBE");
    },
    Error,
    "EncodingError U+9FBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FBF");
    },
    Error,
    "EncodingError U+9FBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FC0");
    },
    Error,
    "EncodingError U+9FC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FC1");
    },
    Error,
    "EncodingError U+9FC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FC2");
    },
    Error,
    "EncodingError U+9FC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FC3");
    },
    Error,
    "EncodingError U+9FC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FC4");
    },
    Error,
    "EncodingError U+9FC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FC5");
    },
    Error,
    "EncodingError U+9FC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FC6");
    },
    Error,
    "EncodingError U+9FC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FC7");
    },
    Error,
    "EncodingError U+9FC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FC8");
    },
    Error,
    "EncodingError U+9FC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FC9");
    },
    Error,
    "EncodingError U+9FC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FCA");
    },
    Error,
    "EncodingError U+9FCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FCB");
    },
    Error,
    "EncodingError U+9FCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FCC");
    },
    Error,
    "EncodingError U+9FCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FCD");
    },
    Error,
    "EncodingError U+9FCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FCE");
    },
    Error,
    "EncodingError U+9FCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FCF");
    },
    Error,
    "EncodingError U+9FCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FD0");
    },
    Error,
    "EncodingError U+9FD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FD1");
    },
    Error,
    "EncodingError U+9FD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FD2");
    },
    Error,
    "EncodingError U+9FD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FD3");
    },
    Error,
    "EncodingError U+9FD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FD4");
    },
    Error,
    "EncodingError U+9FD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FD5");
    },
    Error,
    "EncodingError U+9FD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FD6");
    },
    Error,
    "EncodingError U+9FD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FD7");
    },
    Error,
    "EncodingError U+9FD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FD8");
    },
    Error,
    "EncodingError U+9FD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FD9");
    },
    Error,
    "EncodingError U+9FD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FDA");
    },
    Error,
    "EncodingError U+9FDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FDB");
    },
    Error,
    "EncodingError U+9FDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FDC");
    },
    Error,
    "EncodingError U+9FDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FDD");
    },
    Error,
    "EncodingError U+9FDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FDE");
    },
    Error,
    "EncodingError U+9FDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FDF");
    },
    Error,
    "EncodingError U+9FDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FE0");
    },
    Error,
    "EncodingError U+9FE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FE1");
    },
    Error,
    "EncodingError U+9FE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FE2");
    },
    Error,
    "EncodingError U+9FE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FE3");
    },
    Error,
    "EncodingError U+9FE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FE4");
    },
    Error,
    "EncodingError U+9FE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FE5");
    },
    Error,
    "EncodingError U+9FE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FE6");
    },
    Error,
    "EncodingError U+9FE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FE7");
    },
    Error,
    "EncodingError U+9FE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FE8");
    },
    Error,
    "EncodingError U+9FE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FE9");
    },
    Error,
    "EncodingError U+9FE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FEA");
    },
    Error,
    "EncodingError U+9FEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FEB");
    },
    Error,
    "EncodingError U+9FEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FEC");
    },
    Error,
    "EncodingError U+9FEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FED");
    },
    Error,
    "EncodingError U+9FED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FEE");
    },
    Error,
    "EncodingError U+9FEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FEF");
    },
    Error,
    "EncodingError U+9FEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FF0");
    },
    Error,
    "EncodingError U+9FF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FF1");
    },
    Error,
    "EncodingError U+9FF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FF2");
    },
    Error,
    "EncodingError U+9FF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FF3");
    },
    Error,
    "EncodingError U+9FF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FF4");
    },
    Error,
    "EncodingError U+9FF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FF5");
    },
    Error,
    "EncodingError U+9FF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FF6");
    },
    Error,
    "EncodingError U+9FF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FF7");
    },
    Error,
    "EncodingError U+9FF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FF8");
    },
    Error,
    "EncodingError U+9FF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FF9");
    },
    Error,
    "EncodingError U+9FF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FFA");
    },
    Error,
    "EncodingError U+9FFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FFB");
    },
    Error,
    "EncodingError U+9FFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FFC");
    },
    Error,
    "EncodingError U+9FFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FFD");
    },
    Error,
    "EncodingError U+9FFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FFE");
    },
    Error,
    "EncodingError U+9FFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9FFF");
    },
    Error,
    "EncodingError U+9FFF",
  );

  assertStrictEquals(r, true);
});
