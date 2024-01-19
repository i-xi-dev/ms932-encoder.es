import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+5C00-U+5FFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C00");
    },
    Error,
    "encode-error: U+5C00",
  );
  r = r && ([...ms932Encoder.encode("封専")].join(",") === "149,149,144,234"); // U+5C01
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C03");
    },
    Error,
    "encode-error: U+5C03",
  );
  r = r &&
    ([...ms932Encoder.encode("射尅将將專尉尊尋")].join(",") ===
      "142,203,155,145,143,171,155,146,155,147,136,209,145,184,144,113"); // U+5C04
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C0C");
    },
    Error,
    "encode-error: U+5C0C",
  );
  r = r &&
    ([...ms932Encoder.encode("對導小")].join(",") ===
      "155,148,147,177,143,172"); // U+5C0D
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C10");
    },
    Error,
    "encode-error: U+5C10",
  );
  r = r && ([...ms932Encoder.encode("少")].join(",") === "143,173"); // U+5C11
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C12");
    },
    Error,
    "encode-error: U+5C12",
  );
  r = r && ([...ms932Encoder.encode("尓")].join(",") === "155,149"); // U+5C13
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C14");
    },
    Error,
    "encode-error: U+5C14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C15");
    },
    Error,
    "encode-error: U+5C15",
  );
  r = r && ([...ms932Encoder.encode("尖")].join(",") === "144,235"); // U+5C16
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C17");
    },
    Error,
    "encode-error: U+5C17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C18");
    },
    Error,
    "encode-error: U+5C18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C19");
    },
    Error,
    "encode-error: U+5C19",
  );
  r = r && ([...ms932Encoder.encode("尚")].join(",") === "143,174"); // U+5C1A
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C1B");
    },
    Error,
    "encode-error: U+5C1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C1C");
    },
    Error,
    "encode-error: U+5C1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C1D");
    },
    Error,
    "encode-error: U+5C1D",
  );
  r = r && ([...ms932Encoder.encode("尞")].join(",") === "250,171"); // U+5C1E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C1F");
    },
    Error,
    "encode-error: U+5C1F",
  );
  r = r && ([...ms932Encoder.encode("尠")].join(",") === "155,150"); // U+5C20
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C21");
    },
    Error,
    "encode-error: U+5C21",
  );
  r = r && ([...ms932Encoder.encode("尢")].join(",") === "155,151"); // U+5C22
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C23");
    },
    Error,
    "encode-error: U+5C23",
  );
  r = r && ([...ms932Encoder.encode("尤")].join(",") === "150,222"); // U+5C24
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C25");
    },
    Error,
    "encode-error: U+5C25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C26");
    },
    Error,
    "encode-error: U+5C26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C27");
    },
    Error,
    "encode-error: U+5C27",
  );
  r = r && ([...ms932Encoder.encode("尨")].join(",") === "155,152"); // U+5C28
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C29");
    },
    Error,
    "encode-error: U+5C29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C2A");
    },
    Error,
    "encode-error: U+5C2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C2B");
    },
    Error,
    "encode-error: U+5C2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C2C");
    },
    Error,
    "encode-error: U+5C2C",
  );
  r = r && ([...ms932Encoder.encode("尭")].join(",") === "139,196"); // U+5C2D
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C2E");
    },
    Error,
    "encode-error: U+5C2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C2F");
    },
    Error,
    "encode-error: U+5C2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C30");
    },
    Error,
    "encode-error: U+5C30",
  );
  r = r && ([...ms932Encoder.encode("就")].join(",") === "143,65"); // U+5C31
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C32");
    },
    Error,
    "encode-error: U+5C32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C33");
    },
    Error,
    "encode-error: U+5C33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C34");
    },
    Error,
    "encode-error: U+5C34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C35");
    },
    Error,
    "encode-error: U+5C35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C36");
    },
    Error,
    "encode-error: U+5C36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C37");
    },
    Error,
    "encode-error: U+5C37",
  );
  r = r &&
    ([...ms932Encoder.encode("尸尹尺尻尼尽尾尿局屁")].join(",") ===
      "155,153,155,154,142,218,144,75,147,242,144,115,148,246,148,65,139,199,155,155"); // U+5C38
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C42");
    },
    Error,
    "encode-error: U+5C42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C43");
    },
    Error,
    "encode-error: U+5C43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C44");
    },
    Error,
    "encode-error: U+5C44",
  );
  r = r && ([...ms932Encoder.encode("居屆")].join(",") === "139,143,155,156"); // U+5C45
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C47");
    },
    Error,
    "encode-error: U+5C47",
  );
  r = r && ([...ms932Encoder.encode("屈")].join(",") === "139,252"); // U+5C48
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C49");
    },
    Error,
    "encode-error: U+5C49",
  );
  r = r && ([...ms932Encoder.encode("届屋")].join(",") === "147,205,137,174"); // U+5C4A
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C4C");
    },
    Error,
    "encode-error: U+5C4C",
  );
  r = r &&
    ([...ms932Encoder.encode("屍屎屏屐屑")].join(",") ===
      "142,114,155,157,155,160,155,159,139,251"); // U+5C4D
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C52");
    },
    Error,
    "encode-error: U+5C52",
  );
  r = r && ([...ms932Encoder.encode("屓")].join(",") === "155,158"); // U+5C53
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C54");
    },
    Error,
    "encode-error: U+5C54",
  );
  r = r && ([...ms932Encoder.encode("展")].join(",") === "147,87"); // U+5C55
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C56");
    },
    Error,
    "encode-error: U+5C56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C57");
    },
    Error,
    "encode-error: U+5C57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C58");
    },
    Error,
    "encode-error: U+5C58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C59");
    },
    Error,
    "encode-error: U+5C59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C5A");
    },
    Error,
    "encode-error: U+5C5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C5B");
    },
    Error,
    "encode-error: U+5C5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C5C");
    },
    Error,
    "encode-error: U+5C5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C5D");
    },
    Error,
    "encode-error: U+5C5D",
  );
  r = r && ([...ms932Encoder.encode("属")].join(",") === "145,174"); // U+5C5E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C5F");
    },
    Error,
    "encode-error: U+5C5F",
  );
  r = r && ([...ms932Encoder.encode("屠屡")].join(",") === "147,106,142,198"); // U+5C60
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C62");
    },
    Error,
    "encode-error: U+5C62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C63");
    },
    Error,
    "encode-error: U+5C63",
  );
  r = r && ([...ms932Encoder.encode("層履")].join(",") === "145,119,151,154"); // U+5C64
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C66");
    },
    Error,
    "encode-error: U+5C66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C67");
    },
    Error,
    "encode-error: U+5C67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C68");
    },
    Error,
    "encode-error: U+5C68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C69");
    },
    Error,
    "encode-error: U+5C69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C6A");
    },
    Error,
    "encode-error: U+5C6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C6B");
    },
    Error,
    "encode-error: U+5C6B",
  );
  r = r && ([...ms932Encoder.encode("屬")].join(",") === "155,162"); // U+5C6C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C6D");
    },
    Error,
    "encode-error: U+5C6D",
  );
  r = r && ([...ms932Encoder.encode("屮屯")].join(",") === "155,163,147,212"); // U+5C6E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C70");
    },
    Error,
    "encode-error: U+5C70",
  );
  r = r && ([...ms932Encoder.encode("山")].join(",") === "142,82"); // U+5C71
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C72");
    },
    Error,
    "encode-error: U+5C72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C73");
    },
    Error,
    "encode-error: U+5C73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C74");
    },
    Error,
    "encode-error: U+5C74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C75");
    },
    Error,
    "encode-error: U+5C75",
  );
  r = r && ([...ms932Encoder.encode("屶")].join(",") === "155,165"); // U+5C76
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C77");
    },
    Error,
    "encode-error: U+5C77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C78");
    },
    Error,
    "encode-error: U+5C78",
  );
  r = r && ([...ms932Encoder.encode("屹")].join(",") === "155,166"); // U+5C79
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C7A");
    },
    Error,
    "encode-error: U+5C7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C7B");
    },
    Error,
    "encode-error: U+5C7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C7C");
    },
    Error,
    "encode-error: U+5C7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C7D");
    },
    Error,
    "encode-error: U+5C7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C7E");
    },
    Error,
    "encode-error: U+5C7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C7F");
    },
    Error,
    "encode-error: U+5C7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C80");
    },
    Error,
    "encode-error: U+5C80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C81");
    },
    Error,
    "encode-error: U+5C81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C82");
    },
    Error,
    "encode-error: U+5C82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C83");
    },
    Error,
    "encode-error: U+5C83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C84");
    },
    Error,
    "encode-error: U+5C84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C85");
    },
    Error,
    "encode-error: U+5C85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C86");
    },
    Error,
    "encode-error: U+5C86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C87");
    },
    Error,
    "encode-error: U+5C87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C88");
    },
    Error,
    "encode-error: U+5C88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C89");
    },
    Error,
    "encode-error: U+5C89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C8A");
    },
    Error,
    "encode-error: U+5C8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C8B");
    },
    Error,
    "encode-error: U+5C8B",
  );
  r = r && ([...ms932Encoder.encode("岌")].join(",") === "155,167"); // U+5C8C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C8D");
    },
    Error,
    "encode-error: U+5C8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C8E");
    },
    Error,
    "encode-error: U+5C8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C8F");
    },
    Error,
    "encode-error: U+5C8F",
  );
  r = r && ([...ms932Encoder.encode("岐岑")].join(",") === "138,242,155,168"); // U+5C90
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C92");
    },
    Error,
    "encode-error: U+5C92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C93");
    },
    Error,
    "encode-error: U+5C93",
  );
  r = r && ([...ms932Encoder.encode("岔")].join(",") === "155,169"); // U+5C94
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C95");
    },
    Error,
    "encode-error: U+5C95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C96");
    },
    Error,
    "encode-error: U+5C96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C97");
    },
    Error,
    "encode-error: U+5C97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C98");
    },
    Error,
    "encode-error: U+5C98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C99");
    },
    Error,
    "encode-error: U+5C99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C9A");
    },
    Error,
    "encode-error: U+5C9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C9B");
    },
    Error,
    "encode-error: U+5C9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C9C");
    },
    Error,
    "encode-error: U+5C9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C9D");
    },
    Error,
    "encode-error: U+5C9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C9E");
    },
    Error,
    "encode-error: U+5C9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5C9F");
    },
    Error,
    "encode-error: U+5C9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CA0");
    },
    Error,
    "encode-error: U+5CA0",
  );
  r = r && ([...ms932Encoder.encode("岡")].join(",") === "137,170"); // U+5CA1
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CA2");
    },
    Error,
    "encode-error: U+5CA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CA3");
    },
    Error,
    "encode-error: U+5CA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CA4");
    },
    Error,
    "encode-error: U+5CA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CA5");
    },
    Error,
    "encode-error: U+5CA5",
  );
  r = r && ([...ms932Encoder.encode("岦")].join(",") === "250,172"); // U+5CA6
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CA7");
    },
    Error,
    "encode-error: U+5CA7",
  );
  r = r && ([...ms932Encoder.encode("岨岩")].join(",") === "145,90,138,226"); // U+5CA8
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CAA");
    },
    Error,
    "encode-error: U+5CAA",
  );
  r = r && ([...ms932Encoder.encode("岫岬")].join(",") === "155,171,150,166"); // U+5CAB
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CAD");
    },
    Error,
    "encode-error: U+5CAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CAE");
    },
    Error,
    "encode-error: U+5CAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CAF");
    },
    Error,
    "encode-error: U+5CAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CB0");
    },
    Error,
    "encode-error: U+5CB0",
  );
  r = r && ([...ms932Encoder.encode("岱")].join(",") === "145,208"); // U+5CB1
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CB2");
    },
    Error,
    "encode-error: U+5CB2",
  );
  r = r && ([...ms932Encoder.encode("岳")].join(",") === "138,120"); // U+5CB3
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CB4");
    },
    Error,
    "encode-error: U+5CB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CB5");
    },
    Error,
    "encode-error: U+5CB5",
  );
  r = r &&
    ([...ms932Encoder.encode("岶岷岸")].join(",") ===
      "155,173,155,175,138,221"); // U+5CB6
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CB9");
    },
    Error,
    "encode-error: U+5CB9",
  );
  r = r &&
    ([...ms932Encoder.encode("岺岻岼")].join(",") ===
      "250,173,155,172,155,174"); // U+5CBA
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CBD");
    },
    Error,
    "encode-error: U+5CBD",
  );
  r = r && ([...ms932Encoder.encode("岾")].join(",") === "155,177"); // U+5CBE
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CBF");
    },
    Error,
    "encode-error: U+5CBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CC0");
    },
    Error,
    "encode-error: U+5CC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CC1");
    },
    Error,
    "encode-error: U+5CC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CC2");
    },
    Error,
    "encode-error: U+5CC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CC3");
    },
    Error,
    "encode-error: U+5CC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CC4");
    },
    Error,
    "encode-error: U+5CC4",
  );
  r = r && ([...ms932Encoder.encode("峅")].join(",") === "155,176"); // U+5CC5
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CC6");
    },
    Error,
    "encode-error: U+5CC6",
  );
  r = r && ([...ms932Encoder.encode("峇")].join(",") === "155,178"); // U+5CC7
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CC8");
    },
    Error,
    "encode-error: U+5CC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CC9");
    },
    Error,
    "encode-error: U+5CC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CCA");
    },
    Error,
    "encode-error: U+5CCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CCB");
    },
    Error,
    "encode-error: U+5CCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CCC");
    },
    Error,
    "encode-error: U+5CCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CCD");
    },
    Error,
    "encode-error: U+5CCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CCE");
    },
    Error,
    "encode-error: U+5CCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CCF");
    },
    Error,
    "encode-error: U+5CCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CD0");
    },
    Error,
    "encode-error: U+5CD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CD1");
    },
    Error,
    "encode-error: U+5CD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CD2");
    },
    Error,
    "encode-error: U+5CD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CD3");
    },
    Error,
    "encode-error: U+5CD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CD4");
    },
    Error,
    "encode-error: U+5CD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CD5");
    },
    Error,
    "encode-error: U+5CD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CD6");
    },
    Error,
    "encode-error: U+5CD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CD7");
    },
    Error,
    "encode-error: U+5CD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CD8");
    },
    Error,
    "encode-error: U+5CD8",
  );
  r = r && ([...ms932Encoder.encode("峙")].join(",") === "155,179"); // U+5CD9
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CDA");
    },
    Error,
    "encode-error: U+5CDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CDB");
    },
    Error,
    "encode-error: U+5CDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CDC");
    },
    Error,
    "encode-error: U+5CDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CDD");
    },
    Error,
    "encode-error: U+5CDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CDE");
    },
    Error,
    "encode-error: U+5CDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CDF");
    },
    Error,
    "encode-error: U+5CDF",
  );
  r = r && ([...ms932Encoder.encode("峠峡")].join(",") === "147,187,139,172"); // U+5CE0
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CE2");
    },
    Error,
    "encode-error: U+5CE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CE3");
    },
    Error,
    "encode-error: U+5CE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CE4");
    },
    Error,
    "encode-error: U+5CE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CE5");
    },
    Error,
    "encode-error: U+5CE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CE6");
    },
    Error,
    "encode-error: U+5CE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CE7");
    },
    Error,
    "encode-error: U+5CE7",
  );
  r = r &&
    ([...ms932Encoder.encode("峨峩峪")].join(",") ===
      "137,227,155,180,155,185"); // U+5CE8
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CEB");
    },
    Error,
    "encode-error: U+5CEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CEC");
    },
    Error,
    "encode-error: U+5CEC",
  );
  r = r && ([...ms932Encoder.encode("峭")].join(",") === "155,183"); // U+5CED
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CEE");
    },
    Error,
    "encode-error: U+5CEE",
  );
  r = r && ([...ms932Encoder.encode("峯峰")].join(",") === "149,245,149,244"); // U+5CEF
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CF1");
    },
    Error,
    "encode-error: U+5CF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CF2");
    },
    Error,
    "encode-error: U+5CF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CF3");
    },
    Error,
    "encode-error: U+5CF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CF4");
    },
    Error,
    "encode-error: U+5CF4",
  );
  r = r && ([...ms932Encoder.encode("峵島")].join(",") === "250,174,147,135"); // U+5CF5
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CF7");
    },
    Error,
    "encode-error: U+5CF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CF8");
    },
    Error,
    "encode-error: U+5CF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CF9");
    },
    Error,
    "encode-error: U+5CF9",
  );
  r = r && ([...ms932Encoder.encode("峺峻")].join(",") === "155,182,143,115"); // U+5CFA
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CFC");
    },
    Error,
    "encode-error: U+5CFC",
  );
  r = r && ([...ms932Encoder.encode("峽")].join(",") === "155,181"); // U+5CFD
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CFE");
    },
    Error,
    "encode-error: U+5CFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5CFF");
    },
    Error,
    "encode-error: U+5CFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D00");
    },
    Error,
    "encode-error: U+5D00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D01");
    },
    Error,
    "encode-error: U+5D01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D02");
    },
    Error,
    "encode-error: U+5D02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D03");
    },
    Error,
    "encode-error: U+5D03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D04");
    },
    Error,
    "encode-error: U+5D04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D05");
    },
    Error,
    "encode-error: U+5D05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D06");
    },
    Error,
    "encode-error: U+5D06",
  );
  r = r && ([...ms932Encoder.encode("崇")].join(",") === "144,146"); // U+5D07
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D08");
    },
    Error,
    "encode-error: U+5D08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D09");
    },
    Error,
    "encode-error: U+5D09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D0A");
    },
    Error,
    "encode-error: U+5D0A",
  );
  r = r && ([...ms932Encoder.encode("崋")].join(",") === "155,186"); // U+5D0B
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D0C");
    },
    Error,
    "encode-error: U+5D0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D0D");
    },
    Error,
    "encode-error: U+5D0D",
  );
  r = r && ([...ms932Encoder.encode("崎")].join(",") === "141,232"); // U+5D0E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D0F");
    },
    Error,
    "encode-error: U+5D0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D10");
    },
    Error,
    "encode-error: U+5D10",
  );
  r = r && ([...ms932Encoder.encode("崑")].join(",") === "155,192"); // U+5D11
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D12");
    },
    Error,
    "encode-error: U+5D12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D13");
    },
    Error,
    "encode-error: U+5D13",
  );
  r = r &&
    ([...ms932Encoder.encode("崔崕崖崗崘崙崚崛")].join(",") ===
      "155,193,155,187,138,82,155,188,155,197,155,196,155,195,155,191"); // U+5D14
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D1C");
    },
    Error,
    "encode-error: U+5D1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D1D");
    },
    Error,
    "encode-error: U+5D1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D1E");
    },
    Error,
    "encode-error: U+5D1E",
  );
  r = r && ([...ms932Encoder.encode("崟")].join(",") === "155,190"); // U+5D1F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D20");
    },
    Error,
    "encode-error: U+5D20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D21");
    },
    Error,
    "encode-error: U+5D21",
  );
  r = r && ([...ms932Encoder.encode("崢")].join(",") === "155,194"); // U+5D22
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D23");
    },
    Error,
    "encode-error: U+5D23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D24");
    },
    Error,
    "encode-error: U+5D24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D25");
    },
    Error,
    "encode-error: U+5D25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D26");
    },
    Error,
    "encode-error: U+5D26",
  );
  r = r && ([...ms932Encoder.encode("崧")].join(",") === "250,175"); // U+5D27
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D28");
    },
    Error,
    "encode-error: U+5D28",
  );
  r = r && ([...ms932Encoder.encode("崩")].join(",") === "149,246"); // U+5D29
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D2A");
    },
    Error,
    "encode-error: U+5D2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D2B");
    },
    Error,
    "encode-error: U+5D2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D2C");
    },
    Error,
    "encode-error: U+5D2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D2D");
    },
    Error,
    "encode-error: U+5D2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D2E");
    },
    Error,
    "encode-error: U+5D2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D2F");
    },
    Error,
    "encode-error: U+5D2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D30");
    },
    Error,
    "encode-error: U+5D30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D31");
    },
    Error,
    "encode-error: U+5D31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D32");
    },
    Error,
    "encode-error: U+5D32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D33");
    },
    Error,
    "encode-error: U+5D33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D34");
    },
    Error,
    "encode-error: U+5D34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D35");
    },
    Error,
    "encode-error: U+5D35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D36");
    },
    Error,
    "encode-error: U+5D36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D37");
    },
    Error,
    "encode-error: U+5D37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D38");
    },
    Error,
    "encode-error: U+5D38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D39");
    },
    Error,
    "encode-error: U+5D39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D3A");
    },
    Error,
    "encode-error: U+5D3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D3B");
    },
    Error,
    "encode-error: U+5D3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D3C");
    },
    Error,
    "encode-error: U+5D3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D3D");
    },
    Error,
    "encode-error: U+5D3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D3E");
    },
    Error,
    "encode-error: U+5D3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D3F");
    },
    Error,
    "encode-error: U+5D3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D40");
    },
    Error,
    "encode-error: U+5D40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D41");
    },
    Error,
    "encode-error: U+5D41",
  );
  r = r && ([...ms932Encoder.encode("嵂")].join(",") === "250,178"); // U+5D42
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D43");
    },
    Error,
    "encode-error: U+5D43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D44");
    },
    Error,
    "encode-error: U+5D44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D45");
    },
    Error,
    "encode-error: U+5D45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D46");
    },
    Error,
    "encode-error: U+5D46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D47");
    },
    Error,
    "encode-error: U+5D47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D48");
    },
    Error,
    "encode-error: U+5D48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D49");
    },
    Error,
    "encode-error: U+5D49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D4A");
    },
    Error,
    "encode-error: U+5D4A",
  );
  r = r && ([...ms932Encoder.encode("嵋嵌")].join(",") === "155,201,155,198"); // U+5D4B
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D4D");
    },
    Error,
    "encode-error: U+5D4D",
  );
  r = r && ([...ms932Encoder.encode("嵎")].join(",") === "155,200"); // U+5D4E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D4F");
    },
    Error,
    "encode-error: U+5D4F",
  );
  r = r && ([...ms932Encoder.encode("嵐")].join(",") === "151,146"); // U+5D50
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D51");
    },
    Error,
    "encode-error: U+5D51",
  );
  r = r && ([...ms932Encoder.encode("嵒嵓")].join(",") === "155,199,250,176"); // U+5D52
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D54");
    },
    Error,
    "encode-error: U+5D54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D55");
    },
    Error,
    "encode-error: U+5D55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D56");
    },
    Error,
    "encode-error: U+5D56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D57");
    },
    Error,
    "encode-error: U+5D57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D58");
    },
    Error,
    "encode-error: U+5D58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D59");
    },
    Error,
    "encode-error: U+5D59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D5A");
    },
    Error,
    "encode-error: U+5D5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D5B");
    },
    Error,
    "encode-error: U+5D5B",
  );
  r = r && ([...ms932Encoder.encode("嵜")].join(",") === "155,189"); // U+5D5C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D5D");
    },
    Error,
    "encode-error: U+5D5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D5E");
    },
    Error,
    "encode-error: U+5D5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D5F");
    },
    Error,
    "encode-error: U+5D5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D60");
    },
    Error,
    "encode-error: U+5D60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D61");
    },
    Error,
    "encode-error: U+5D61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D62");
    },
    Error,
    "encode-error: U+5D62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D63");
    },
    Error,
    "encode-error: U+5D63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D64");
    },
    Error,
    "encode-error: U+5D64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D65");
    },
    Error,
    "encode-error: U+5D65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D66");
    },
    Error,
    "encode-error: U+5D66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D67");
    },
    Error,
    "encode-error: U+5D67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D68");
    },
    Error,
    "encode-error: U+5D68",
  );
  r = r && ([...ms932Encoder.encode("嵩")].join(",") === "144,147"); // U+5D69
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D6A");
    },
    Error,
    "encode-error: U+5D6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D6B");
    },
    Error,
    "encode-error: U+5D6B",
  );
  r = r && ([...ms932Encoder.encode("嵬嵭")].join(",") === "155,202,250,179"); // U+5D6C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D6E");
    },
    Error,
    "encode-error: U+5D6E",
  );
  r = r && ([...ms932Encoder.encode("嵯")].join(",") === "141,181"); // U+5D6F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D70");
    },
    Error,
    "encode-error: U+5D70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D71");
    },
    Error,
    "encode-error: U+5D71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D72");
    },
    Error,
    "encode-error: U+5D72",
  );
  r = r && ([...ms932Encoder.encode("嵳")].join(",") === "155,203"); // U+5D73
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D74");
    },
    Error,
    "encode-error: U+5D74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D75");
    },
    Error,
    "encode-error: U+5D75",
  );
  r = r && ([...ms932Encoder.encode("嵶")].join(",") === "155,204"); // U+5D76
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D77");
    },
    Error,
    "encode-error: U+5D77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D78");
    },
    Error,
    "encode-error: U+5D78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D79");
    },
    Error,
    "encode-error: U+5D79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D7A");
    },
    Error,
    "encode-error: U+5D7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D7B");
    },
    Error,
    "encode-error: U+5D7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D7C");
    },
    Error,
    "encode-error: U+5D7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D7D");
    },
    Error,
    "encode-error: U+5D7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D7E");
    },
    Error,
    "encode-error: U+5D7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D7F");
    },
    Error,
    "encode-error: U+5D7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D80");
    },
    Error,
    "encode-error: U+5D80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D81");
    },
    Error,
    "encode-error: U+5D81",
  );
  r = r && ([...ms932Encoder.encode("嶂")].join(",") === "155,207"); // U+5D82
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D83");
    },
    Error,
    "encode-error: U+5D83",
  );
  r = r && ([...ms932Encoder.encode("嶄")].join(",") === "155,206"); // U+5D84
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D85");
    },
    Error,
    "encode-error: U+5D85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D86");
    },
    Error,
    "encode-error: U+5D86",
  );
  r = r && ([...ms932Encoder.encode("嶇")].join(",") === "155,205"); // U+5D87
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D88");
    },
    Error,
    "encode-error: U+5D88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D89");
    },
    Error,
    "encode-error: U+5D89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D8A");
    },
    Error,
    "encode-error: U+5D8A",
  );
  r = r && ([...ms932Encoder.encode("嶋嶌")].join(",") === "147,136,155,184"); // U+5D8B
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D8D");
    },
    Error,
    "encode-error: U+5D8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D8E");
    },
    Error,
    "encode-error: U+5D8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D8F");
    },
    Error,
    "encode-error: U+5D8F",
  );
  r = r && ([...ms932Encoder.encode("嶐")].join(",") === "155,213"); // U+5D90
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D91");
    },
    Error,
    "encode-error: U+5D91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D92");
    },
    Error,
    "encode-error: U+5D92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D93");
    },
    Error,
    "encode-error: U+5D93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D94");
    },
    Error,
    "encode-error: U+5D94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D95");
    },
    Error,
    "encode-error: U+5D95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D96");
    },
    Error,
    "encode-error: U+5D96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D97");
    },
    Error,
    "encode-error: U+5D97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D98");
    },
    Error,
    "encode-error: U+5D98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D99");
    },
    Error,
    "encode-error: U+5D99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D9A");
    },
    Error,
    "encode-error: U+5D9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D9B");
    },
    Error,
    "encode-error: U+5D9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D9C");
    },
    Error,
    "encode-error: U+5D9C",
  );
  r = r && ([...ms932Encoder.encode("嶝")].join(",") === "155,209"); // U+5D9D
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D9E");
    },
    Error,
    "encode-error: U+5D9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5D9F");
    },
    Error,
    "encode-error: U+5D9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DA0");
    },
    Error,
    "encode-error: U+5DA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DA1");
    },
    Error,
    "encode-error: U+5DA1",
  );
  r = r && ([...ms932Encoder.encode("嶢")].join(",") === "155,208"); // U+5DA2
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DA3");
    },
    Error,
    "encode-error: U+5DA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DA4");
    },
    Error,
    "encode-error: U+5DA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DA5");
    },
    Error,
    "encode-error: U+5DA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DA6");
    },
    Error,
    "encode-error: U+5DA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DA7");
    },
    Error,
    "encode-error: U+5DA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DA8");
    },
    Error,
    "encode-error: U+5DA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DA9");
    },
    Error,
    "encode-error: U+5DA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DAA");
    },
    Error,
    "encode-error: U+5DAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DAB");
    },
    Error,
    "encode-error: U+5DAB",
  );
  r = r && ([...ms932Encoder.encode("嶬")].join(",") === "155,210"); // U+5DAC
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DAD");
    },
    Error,
    "encode-error: U+5DAD",
  );
  r = r && ([...ms932Encoder.encode("嶮")].join(",") === "155,211"); // U+5DAE
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DAF");
    },
    Error,
    "encode-error: U+5DAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DB0");
    },
    Error,
    "encode-error: U+5DB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DB1");
    },
    Error,
    "encode-error: U+5DB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DB2");
    },
    Error,
    "encode-error: U+5DB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DB3");
    },
    Error,
    "encode-error: U+5DB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DB4");
    },
    Error,
    "encode-error: U+5DB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DB5");
    },
    Error,
    "encode-error: U+5DB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DB6");
    },
    Error,
    "encode-error: U+5DB6",
  );
  r = r &&
    ([...ms932Encoder.encode("嶷嶸嶹嶺")].join(",") ===
      "155,214,250,180,250,181,151,228"); // U+5DB7
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DBB");
    },
    Error,
    "encode-error: U+5DBB",
  );
  r = r && ([...ms932Encoder.encode("嶼嶽")].join(",") === "155,215,155,212"); // U+5DBC
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DBE");
    },
    Error,
    "encode-error: U+5DBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DBF");
    },
    Error,
    "encode-error: U+5DBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DC0");
    },
    Error,
    "encode-error: U+5DC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DC1");
    },
    Error,
    "encode-error: U+5DC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DC2");
    },
    Error,
    "encode-error: U+5DC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DC3");
    },
    Error,
    "encode-error: U+5DC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DC4");
    },
    Error,
    "encode-error: U+5DC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DC5");
    },
    Error,
    "encode-error: U+5DC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DC6");
    },
    Error,
    "encode-error: U+5DC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DC7");
    },
    Error,
    "encode-error: U+5DC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DC8");
    },
    Error,
    "encode-error: U+5DC8",
  );
  r = r && ([...ms932Encoder.encode("巉")].join(",") === "155,216"); // U+5DC9
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DCA");
    },
    Error,
    "encode-error: U+5DCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DCB");
    },
    Error,
    "encode-error: U+5DCB",
  );
  r = r && ([...ms932Encoder.encode("巌巍")].join(",") === "138,222,155,217"); // U+5DCC
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DCE");
    },
    Error,
    "encode-error: U+5DCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DCF");
    },
    Error,
    "encode-error: U+5DCF",
  );
  r = r && ([...ms932Encoder.encode("巐")].join(",") === "250,182"); // U+5DD0
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DD1");
    },
    Error,
    "encode-error: U+5DD1",
  );
  r = r && ([...ms932Encoder.encode("巒巓")].join(",") === "155,219,155,218"); // U+5DD2
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DD4");
    },
    Error,
    "encode-error: U+5DD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DD5");
    },
    Error,
    "encode-error: U+5DD5",
  );
  r = r && ([...ms932Encoder.encode("巖")].join(",") === "155,220"); // U+5DD6
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DD7");
    },
    Error,
    "encode-error: U+5DD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DD8");
    },
    Error,
    "encode-error: U+5DD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DD9");
    },
    Error,
    "encode-error: U+5DD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DDA");
    },
    Error,
    "encode-error: U+5DDA",
  );
  r = r && ([...ms932Encoder.encode("巛")].join(",") === "155,221"); // U+5DDB
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DDC");
    },
    Error,
    "encode-error: U+5DDC",
  );
  r = r && ([...ms932Encoder.encode("川州")].join(",") === "144,236,143,66"); // U+5DDD
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DDF");
    },
    Error,
    "encode-error: U+5DDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DE0");
    },
    Error,
    "encode-error: U+5DE0",
  );
  r = r && ([...ms932Encoder.encode("巡")].join(",") === "143,132"); // U+5DE1
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DE2");
    },
    Error,
    "encode-error: U+5DE2",
  );
  r = r && ([...ms932Encoder.encode("巣")].join(",") === "145,131"); // U+5DE3
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DE4");
    },
    Error,
    "encode-error: U+5DE4",
  );
  r = r &&
    ([...ms932Encoder.encode("工左巧巨")].join(",") ===
      "141,72,141,182,141,73,139,144"); // U+5DE5
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DE9");
    },
    Error,
    "encode-error: U+5DE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DEA");
    },
    Error,
    "encode-error: U+5DEA",
  );
  r = r && ([...ms932Encoder.encode("巫")].join(",") === "155,222"); // U+5DEB
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DEC");
    },
    Error,
    "encode-error: U+5DEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DED");
    },
    Error,
    "encode-error: U+5DED",
  );
  r = r && ([...ms932Encoder.encode("差")].join(",") === "141,183"); // U+5DEE
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DEF");
    },
    Error,
    "encode-error: U+5DEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DF0");
    },
    Error,
    "encode-error: U+5DF0",
  );
  r = r &&
    ([...ms932Encoder.encode("己已巳巴巵")].join(",") ===
      "140,200,155,223,150,164,148,98,155,224"); // U+5DF1
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DF6");
    },
    Error,
    "encode-error: U+5DF6",
  );
  r = r && ([...ms932Encoder.encode("巷")].join(",") === "141,74"); // U+5DF7
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DF8");
    },
    Error,
    "encode-error: U+5DF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DF9");
    },
    Error,
    "encode-error: U+5DF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DFA");
    },
    Error,
    "encode-error: U+5DFA",
  );
  r = r && ([...ms932Encoder.encode("巻")].join(",") === "138,170"); // U+5DFB
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DFC");
    },
    Error,
    "encode-error: U+5DFC",
  );
  r = r && ([...ms932Encoder.encode("巽巾")].join(",") === "146,70,139,208"); // U+5DFD
  assertThrows(
    () => {
      ms932Encoder.encode("\u5DFF");
    },
    Error,
    "encode-error: U+5DFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E00");
    },
    Error,
    "encode-error: U+5E00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E01");
    },
    Error,
    "encode-error: U+5E01",
  );
  r = r && ([...ms932Encoder.encode("市布")].join(",") === "142,115,149,122"); // U+5E02
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E04");
    },
    Error,
    "encode-error: U+5E04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E05");
    },
    Error,
    "encode-error: U+5E05",
  );
  r = r && ([...ms932Encoder.encode("帆")].join(",") === "148,191"); // U+5E06
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E07");
    },
    Error,
    "encode-error: U+5E07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E08");
    },
    Error,
    "encode-error: U+5E08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E09");
    },
    Error,
    "encode-error: U+5E09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E0A");
    },
    Error,
    "encode-error: U+5E0A",
  );
  r = r && ([...ms932Encoder.encode("帋希")].join(",") === "155,225,138,243"); // U+5E0B
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E0D");
    },
    Error,
    "encode-error: U+5E0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E0E");
    },
    Error,
    "encode-error: U+5E0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E0F");
    },
    Error,
    "encode-error: U+5E0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E10");
    },
    Error,
    "encode-error: U+5E10",
  );
  r = r && ([...ms932Encoder.encode("帑")].join(",") === "155,228"); // U+5E11
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E12");
    },
    Error,
    "encode-error: U+5E12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E13");
    },
    Error,
    "encode-error: U+5E13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E14");
    },
    Error,
    "encode-error: U+5E14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E15");
    },
    Error,
    "encode-error: U+5E15",
  );
  r = r && ([...ms932Encoder.encode("帖")].join(",") === "146,159"); // U+5E16
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E17");
    },
    Error,
    "encode-error: U+5E17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E18");
    },
    Error,
    "encode-error: U+5E18",
  );
  r = r &&
    ([...ms932Encoder.encode("帙帚帛")].join(",") ===
      "155,227,155,226,155,229"); // U+5E19
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E1C");
    },
    Error,
    "encode-error: U+5E1C",
  );
  r = r && ([...ms932Encoder.encode("帝")].join(",") === "146,233"); // U+5E1D
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E1E");
    },
    Error,
    "encode-error: U+5E1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E1F");
    },
    Error,
    "encode-error: U+5E1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E20");
    },
    Error,
    "encode-error: U+5E20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E21");
    },
    Error,
    "encode-error: U+5E21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E22");
    },
    Error,
    "encode-error: U+5E22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E23");
    },
    Error,
    "encode-error: U+5E23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E24");
    },
    Error,
    "encode-error: U+5E24",
  );
  r = r && ([...ms932Encoder.encode("帥")].join(",") === "144,131"); // U+5E25
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E26");
    },
    Error,
    "encode-error: U+5E26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E27");
    },
    Error,
    "encode-error: U+5E27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E28");
    },
    Error,
    "encode-error: U+5E28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E29");
    },
    Error,
    "encode-error: U+5E29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E2A");
    },
    Error,
    "encode-error: U+5E2A",
  );
  r = r && ([...ms932Encoder.encode("師")].join(",") === "142,116"); // U+5E2B
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E2C");
    },
    Error,
    "encode-error: U+5E2C",
  );
  r = r && ([...ms932Encoder.encode("席")].join(",") === "144,200"); // U+5E2D
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E2E");
    },
    Error,
    "encode-error: U+5E2E",
  );
  r = r && ([...ms932Encoder.encode("帯帰")].join(",") === "145,209,139,65"); // U+5E2F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E31");
    },
    Error,
    "encode-error: U+5E31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E32");
    },
    Error,
    "encode-error: U+5E32",
  );
  r = r && ([...ms932Encoder.encode("帳")].join(",") === "146,160"); // U+5E33
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E34");
    },
    Error,
    "encode-error: U+5E34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E35");
    },
    Error,
    "encode-error: U+5E35",
  );
  r = r &&
    ([...ms932Encoder.encode("帶帷常")].join(",") ===
      "155,230,155,231,143,237"); // U+5E36
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E39");
    },
    Error,
    "encode-error: U+5E39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E3A");
    },
    Error,
    "encode-error: U+5E3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E3B");
    },
    Error,
    "encode-error: U+5E3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E3C");
    },
    Error,
    "encode-error: U+5E3C",
  );
  r = r && ([...ms932Encoder.encode("帽")].join(",") === "150,88"); // U+5E3D
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E3E");
    },
    Error,
    "encode-error: U+5E3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E3F");
    },
    Error,
    "encode-error: U+5E3F",
  );
  r = r && ([...ms932Encoder.encode("幀")].join(",") === "155,234"); // U+5E40
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E41");
    },
    Error,
    "encode-error: U+5E41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E42");
    },
    Error,
    "encode-error: U+5E42",
  );
  r = r &&
    ([...ms932Encoder.encode("幃幄幅")].join(",") ===
      "155,233,155,232,149,157"); // U+5E43
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E46");
    },
    Error,
    "encode-error: U+5E46",
  );
  r = r && ([...ms932Encoder.encode("幇")].join(",") === "155,241"); // U+5E47
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E48");
    },
    Error,
    "encode-error: U+5E48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E49");
    },
    Error,
    "encode-error: U+5E49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E4A");
    },
    Error,
    "encode-error: U+5E4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E4B");
    },
    Error,
    "encode-error: U+5E4B",
  );
  r = r && ([...ms932Encoder.encode("幌")].join(",") === "150,121"); // U+5E4C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E4D");
    },
    Error,
    "encode-error: U+5E4D",
  );
  r = r && ([...ms932Encoder.encode("幎")].join(",") === "155,235"); // U+5E4E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E4F");
    },
    Error,
    "encode-error: U+5E4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E50");
    },
    Error,
    "encode-error: U+5E50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E51");
    },
    Error,
    "encode-error: U+5E51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E52");
    },
    Error,
    "encode-error: U+5E52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E53");
    },
    Error,
    "encode-error: U+5E53",
  );
  r = r && ([...ms932Encoder.encode("幔幕")].join(",") === "155,237,150,139"); // U+5E54
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E56");
    },
    Error,
    "encode-error: U+5E56",
  );
  r = r && ([...ms932Encoder.encode("幗")].join(",") === "155,236"); // U+5E57
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E58");
    },
    Error,
    "encode-error: U+5E58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E59");
    },
    Error,
    "encode-error: U+5E59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E5A");
    },
    Error,
    "encode-error: U+5E5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E5B");
    },
    Error,
    "encode-error: U+5E5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E5C");
    },
    Error,
    "encode-error: U+5E5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E5D");
    },
    Error,
    "encode-error: U+5E5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E5E");
    },
    Error,
    "encode-error: U+5E5E",
  );
  r = r && ([...ms932Encoder.encode("幟")].join(",") === "155,238"); // U+5E5F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E60");
    },
    Error,
    "encode-error: U+5E60",
  );
  r = r &&
    ([...ms932Encoder.encode("幡幢幣幤")].join(",") ===
      "148,166,155,239,149,188,155,240"); // U+5E61
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E65");
    },
    Error,
    "encode-error: U+5E65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E66");
    },
    Error,
    "encode-error: U+5E66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E67");
    },
    Error,
    "encode-error: U+5E67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E68");
    },
    Error,
    "encode-error: U+5E68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E69");
    },
    Error,
    "encode-error: U+5E69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E6A");
    },
    Error,
    "encode-error: U+5E6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E6B");
    },
    Error,
    "encode-error: U+5E6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E6C");
    },
    Error,
    "encode-error: U+5E6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E6D");
    },
    Error,
    "encode-error: U+5E6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E6E");
    },
    Error,
    "encode-error: U+5E6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E6F");
    },
    Error,
    "encode-error: U+5E6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E70");
    },
    Error,
    "encode-error: U+5E70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E71");
    },
    Error,
    "encode-error: U+5E71",
  );
  r = r &&
    ([...ms932Encoder.encode("干平年幵并")].join(",") ===
      "138,177,149,189,148,78,155,242,155,243"); // U+5E72
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E77");
    },
    Error,
    "encode-error: U+5E77",
  );
  r = r &&
    ([...ms932Encoder.encode("幸幹幺幻幼幽幾广")].join(",") ===
      "141,75,138,178,155,244,140,182,151,99,151,72,138,244,155,246"); // U+5E78
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E80");
    },
    Error,
    "encode-error: U+5E80",
  );
  r = r && ([...ms932Encoder.encode("庁")].join(",") === "146,161"); // U+5E81
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E82");
    },
    Error,
    "encode-error: U+5E82",
  );
  r = r && ([...ms932Encoder.encode("広庄")].join(",") === "141,76,143,175"); // U+5E83
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E85");
    },
    Error,
    "encode-error: U+5E85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E86");
    },
    Error,
    "encode-error: U+5E86",
  );
  r = r && ([...ms932Encoder.encode("庇")].join(",") === "148,221"); // U+5E87
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E88");
    },
    Error,
    "encode-error: U+5E88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E89");
    },
    Error,
    "encode-error: U+5E89",
  );
  r = r && ([...ms932Encoder.encode("床")].join(",") === "143,176"); // U+5E8A
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E8B");
    },
    Error,
    "encode-error: U+5E8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E8C");
    },
    Error,
    "encode-error: U+5E8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E8D");
    },
    Error,
    "encode-error: U+5E8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E8E");
    },
    Error,
    "encode-error: U+5E8E",
  );
  r = r && ([...ms932Encoder.encode("序")].join(",") === "143,152"); // U+5E8F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E90");
    },
    Error,
    "encode-error: U+5E90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E91");
    },
    Error,
    "encode-error: U+5E91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E92");
    },
    Error,
    "encode-error: U+5E92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E93");
    },
    Error,
    "encode-error: U+5E93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E94");
    },
    Error,
    "encode-error: U+5E94",
  );
  r = r &&
    ([...ms932Encoder.encode("底庖店")].join(",") === "146,234,149,247,147,88"); // U+5E95
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E98");
    },
    Error,
    "encode-error: U+5E98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E99");
    },
    Error,
    "encode-error: U+5E99",
  );
  r = r && ([...ms932Encoder.encode("庚")].join(",") === "141,77"); // U+5E9A
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E9B");
    },
    Error,
    "encode-error: U+5E9B",
  );
  r = r && ([...ms932Encoder.encode("府")].join(",") === "149,123"); // U+5E9C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E9D");
    },
    Error,
    "encode-error: U+5E9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E9E");
    },
    Error,
    "encode-error: U+5E9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5E9F");
    },
    Error,
    "encode-error: U+5E9F",
  );
  r = r && ([...ms932Encoder.encode("庠")].join(",") === "155,247"); // U+5EA0
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EA1");
    },
    Error,
    "encode-error: U+5EA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EA2");
    },
    Error,
    "encode-error: U+5EA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EA3");
    },
    Error,
    "encode-error: U+5EA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EA4");
    },
    Error,
    "encode-error: U+5EA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EA5");
    },
    Error,
    "encode-error: U+5EA5",
  );
  r = r && ([...ms932Encoder.encode("度座")].join(",") === "147,120,141,192"); // U+5EA6
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EA8");
    },
    Error,
    "encode-error: U+5EA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EA9");
    },
    Error,
    "encode-error: U+5EA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EAA");
    },
    Error,
    "encode-error: U+5EAA",
  );
  r = r && ([...ms932Encoder.encode("庫")].join(",") === "140,201"); // U+5EAB
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EAC");
    },
    Error,
    "encode-error: U+5EAC",
  );
  r = r && ([...ms932Encoder.encode("庭")].join(",") === "146,235"); // U+5EAD
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EAE");
    },
    Error,
    "encode-error: U+5EAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EAF");
    },
    Error,
    "encode-error: U+5EAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EB0");
    },
    Error,
    "encode-error: U+5EB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EB1");
    },
    Error,
    "encode-error: U+5EB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EB2");
    },
    Error,
    "encode-error: U+5EB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EB3");
    },
    Error,
    "encode-error: U+5EB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EB4");
    },
    Error,
    "encode-error: U+5EB4",
  );
  r = r &&
    ([...ms932Encoder.encode("庵庶康庸")].join(",") ===
      "136,193,143,142,141,78,151,102"); // U+5EB5
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EB9");
    },
    Error,
    "encode-error: U+5EB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EBA");
    },
    Error,
    "encode-error: U+5EBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EBB");
    },
    Error,
    "encode-error: U+5EBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EBC");
    },
    Error,
    "encode-error: U+5EBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EBD");
    },
    Error,
    "encode-error: U+5EBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EBE");
    },
    Error,
    "encode-error: U+5EBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EBF");
    },
    Error,
    "encode-error: U+5EBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EC0");
    },
    Error,
    "encode-error: U+5EC0",
  );
  r = r &&
    ([...ms932Encoder.encode("廁廂廃")].join(",") ===
      "155,248,155,249,148,112"); // U+5EC1
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EC4");
    },
    Error,
    "encode-error: U+5EC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EC5");
    },
    Error,
    "encode-error: U+5EC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EC6");
    },
    Error,
    "encode-error: U+5EC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EC7");
    },
    Error,
    "encode-error: U+5EC7",
  );
  r = r &&
    ([...ms932Encoder.encode("廈廉廊")].join(",") === "155,250,151,245,152,76"); // U+5EC8
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ECB");
    },
    Error,
    "encode-error: U+5ECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ECC");
    },
    Error,
    "encode-error: U+5ECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ECD");
    },
    Error,
    "encode-error: U+5ECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ECE");
    },
    Error,
    "encode-error: U+5ECE",
  );
  r = r && ([...ms932Encoder.encode("廏廐")].join(",") === "155,252,155,251"); // U+5ECF
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ED1");
    },
    Error,
    "encode-error: U+5ED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ED2");
    },
    Error,
    "encode-error: U+5ED2",
  );
  r = r && ([...ms932Encoder.encode("廓")].join(",") === "138,102"); // U+5ED3
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ED4");
    },
    Error,
    "encode-error: U+5ED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ED5");
    },
    Error,
    "encode-error: U+5ED5",
  );
  r = r && ([...ms932Encoder.encode("廖")].join(",") === "156,64"); // U+5ED6
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ED7");
    },
    Error,
    "encode-error: U+5ED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ED8");
    },
    Error,
    "encode-error: U+5ED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ED9");
    },
    Error,
    "encode-error: U+5ED9",
  );
  r = r && ([...ms932Encoder.encode("廚廛")].join(",") === "156,67,156,68"); // U+5EDA
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EDC");
    },
    Error,
    "encode-error: U+5EDC",
  );
  r = r && ([...ms932Encoder.encode("廝")].join(",") === "156,66"); // U+5EDD
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EDE");
    },
    Error,
    "encode-error: U+5EDE",
  );
  r = r &&
    ([...ms932Encoder.encode("廟廠廡廢廣")].join(",") ===
      "149,95,143,177,156,70,156,69,156,65"); // U+5EDF
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EE4");
    },
    Error,
    "encode-error: U+5EE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EE5");
    },
    Error,
    "encode-error: U+5EE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EE6");
    },
    Error,
    "encode-error: U+5EE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EE7");
    },
    Error,
    "encode-error: U+5EE7",
  );
  r = r && ([...ms932Encoder.encode("廨廩")].join(",") === "156,71,156,72"); // U+5EE8
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EEA");
    },
    Error,
    "encode-error: U+5EEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EEB");
    },
    Error,
    "encode-error: U+5EEB",
  );
  r = r && ([...ms932Encoder.encode("廬")].join(",") === "156,73"); // U+5EEC
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EED");
    },
    Error,
    "encode-error: U+5EED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EEE");
    },
    Error,
    "encode-error: U+5EEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EEF");
    },
    Error,
    "encode-error: U+5EEF",
  );
  r = r && ([...ms932Encoder.encode("廰廱")].join(",") === "156,76,156,74"); // U+5EF0
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EF2");
    },
    Error,
    "encode-error: U+5EF2",
  );
  r = r && ([...ms932Encoder.encode("廳廴")].join(",") === "156,75,156,77"); // U+5EF3
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EF5");
    },
    Error,
    "encode-error: U+5EF5",
  );
  r = r &&
    ([...ms932Encoder.encode("延廷廸")].join(",") === "137,132,146,236,156,78"); // U+5EF6
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EF9");
    },
    Error,
    "encode-error: U+5EF9",
  );
  r = r &&
    ([...ms932Encoder.encode("建廻廼")].join(",") === "140,154,137,244,148,85"); // U+5EFA
  assertThrows(
    () => {
      ms932Encoder.encode("\u5EFD");
    },
    Error,
    "encode-error: U+5EFD",
  );
  r = r && ([...ms932Encoder.encode("廾廿")].join(",") === "156,79,147,249"); // U+5EFE
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F00");
    },
    Error,
    "encode-error: U+5F00",
  );
  r = r && ([...ms932Encoder.encode("弁")].join(",") === "149,217"); // U+5F01
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F02");
    },
    Error,
    "encode-error: U+5F02",
  );
  r = r && ([...ms932Encoder.encode("弃弄")].join(",") === "156,80,152,77"); // U+5F03
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F05");
    },
    Error,
    "encode-error: U+5F05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F06");
    },
    Error,
    "encode-error: U+5F06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F07");
    },
    Error,
    "encode-error: U+5F07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F08");
    },
    Error,
    "encode-error: U+5F08",
  );
  r = r &&
    ([...ms932Encoder.encode("弉弊弋弌弍")].join(",") ===
      "156,81,149,190,156,84,152,159,152,175"); // U+5F09
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F0E");
    },
    Error,
    "encode-error: U+5F0E",
  );
  r = r &&
    ([...ms932Encoder.encode("式弐弑")].join(",") === "142,174,147,243,156,85"); // U+5F0F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F12");
    },
    Error,
    "encode-error: U+5F12",
  );
  r = r &&
    ([...ms932Encoder.encode("弓弔引弖弗弘")].join(",") ===
      "139,124,146,162,136,248,156,86,149,164,141,79"); // U+5F13
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F19");
    },
    Error,
    "encode-error: U+5F19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F1A");
    },
    Error,
    "encode-error: U+5F1A",
  );
  r = r && ([...ms932Encoder.encode("弛")].join(",") === "146,111"); // U+5F1B
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F1C");
    },
    Error,
    "encode-error: U+5F1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F1D");
    },
    Error,
    "encode-error: U+5F1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F1E");
    },
    Error,
    "encode-error: U+5F1E",
  );
  r = r && ([...ms932Encoder.encode("弟")].join(",") === "146,237"); // U+5F1F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F20");
    },
    Error,
    "encode-error: U+5F20",
  );
  r = r && ([...ms932Encoder.encode("弡")].join(",") === "250,183"); // U+5F21
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F22");
    },
    Error,
    "encode-error: U+5F22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F23");
    },
    Error,
    "encode-error: U+5F23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F24");
    },
    Error,
    "encode-error: U+5F24",
  );
  r = r &&
    ([...ms932Encoder.encode("弥弦弧")].join(",") ===
      "150,237,140,183,140,202"); // U+5F25
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F28");
    },
    Error,
    "encode-error: U+5F28",
  );
  r = r && ([...ms932Encoder.encode("弩")].join(",") === "156,87"); // U+5F29
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F2A");
    },
    Error,
    "encode-error: U+5F2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F2B");
    },
    Error,
    "encode-error: U+5F2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F2C");
    },
    Error,
    "encode-error: U+5F2C",
  );
  r = r && ([...ms932Encoder.encode("弭")].join(",") === "156,88"); // U+5F2D
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F2E");
    },
    Error,
    "encode-error: U+5F2E",
  );
  r = r && ([...ms932Encoder.encode("弯")].join(",") === "156,94"); // U+5F2F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F30");
    },
    Error,
    "encode-error: U+5F30",
  );
  r = r && ([...ms932Encoder.encode("弱")].join(",") === "142,227"); // U+5F31
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F32");
    },
    Error,
    "encode-error: U+5F32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F33");
    },
    Error,
    "encode-error: U+5F33",
  );
  r = r && ([...ms932Encoder.encode("弴張")].join(",") === "250,184,146,163"); // U+5F34
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F36");
    },
    Error,
    "encode-error: U+5F36",
  );
  r = r && ([...ms932Encoder.encode("強弸")].join(",") === "139,173,156,89"); // U+5F37
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F39");
    },
    Error,
    "encode-error: U+5F39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F3A");
    },
    Error,
    "encode-error: U+5F3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F3B");
    },
    Error,
    "encode-error: U+5F3B",
  );
  r = r && ([...ms932Encoder.encode("弼")].join(",") === "149,74"); // U+5F3C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F3D");
    },
    Error,
    "encode-error: U+5F3D",
  );
  r = r && ([...ms932Encoder.encode("弾")].join(",") === "146,101"); // U+5F3E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F3F");
    },
    Error,
    "encode-error: U+5F3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F40");
    },
    Error,
    "encode-error: U+5F40",
  );
  r = r && ([...ms932Encoder.encode("彁")].join(",") === "156,90"); // U+5F41
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F42");
    },
    Error,
    "encode-error: U+5F42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F43");
    },
    Error,
    "encode-error: U+5F43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F44");
    },
    Error,
    "encode-error: U+5F44",
  );
  r = r && ([...ms932Encoder.encode("彅")].join(",") === "250,103"); // U+5F45
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F46");
    },
    Error,
    "encode-error: U+5F46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F47");
    },
    Error,
    "encode-error: U+5F47",
  );
  r = r && ([...ms932Encoder.encode("彈")].join(",") === "156,91"); // U+5F48
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F49");
    },
    Error,
    "encode-error: U+5F49",
  );
  r = r && ([...ms932Encoder.encode("彊")].join(",") === "139,174"); // U+5F4A
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F4B");
    },
    Error,
    "encode-error: U+5F4B",
  );
  r = r && ([...ms932Encoder.encode("彌")].join(",") === "156,92"); // U+5F4C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F4D");
    },
    Error,
    "encode-error: U+5F4D",
  );
  r = r && ([...ms932Encoder.encode("彎")].join(",") === "156,93"); // U+5F4E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F4F");
    },
    Error,
    "encode-error: U+5F4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F50");
    },
    Error,
    "encode-error: U+5F50",
  );
  r = r && ([...ms932Encoder.encode("彑")].join(",") === "156,95"); // U+5F51
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F52");
    },
    Error,
    "encode-error: U+5F52",
  );
  r = r && ([...ms932Encoder.encode("当")].join(",") === "147,150"); // U+5F53
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F54");
    },
    Error,
    "encode-error: U+5F54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F55");
    },
    Error,
    "encode-error: U+5F55",
  );
  r = r && ([...ms932Encoder.encode("彖彗")].join(",") === "156,96,156,97"); // U+5F56
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F58");
    },
    Error,
    "encode-error: U+5F58",
  );
  r = r && ([...ms932Encoder.encode("彙")].join(",") === "156,98"); // U+5F59
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F5A");
    },
    Error,
    "encode-error: U+5F5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F5B");
    },
    Error,
    "encode-error: U+5F5B",
  );
  r = r && ([...ms932Encoder.encode("彜彝")].join(",") === "156,83,156,82"); // U+5F5C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F5E");
    },
    Error,
    "encode-error: U+5F5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F5F");
    },
    Error,
    "encode-error: U+5F5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F60");
    },
    Error,
    "encode-error: U+5F60",
  );
  r = r && ([...ms932Encoder.encode("彡形")].join(",") === "156,99,140,96"); // U+5F61
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F63");
    },
    Error,
    "encode-error: U+5F63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F64");
    },
    Error,
    "encode-error: U+5F64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F65");
    },
    Error,
    "encode-error: U+5F65",
  );
  r = r && ([...ms932Encoder.encode("彦彧")].join(",") === "149,70,250,185"); // U+5F66
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F68");
    },
    Error,
    "encode-error: U+5F68",
  );
  r = r &&
    ([...ms932Encoder.encode("彩彪彫彬彭")].join(",") ===
      "141,202,149,86,146,164,149,106,156,100"); // U+5F69
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F6E");
    },
    Error,
    "encode-error: U+5F6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F6F");
    },
    Error,
    "encode-error: U+5F6F",
  );
  r = r && ([...ms932Encoder.encode("彰影")].join(",") === "143,178,137,101"); // U+5F70
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F72");
    },
    Error,
    "encode-error: U+5F72",
  );
  r = r && ([...ms932Encoder.encode("彳")].join(",") === "156,101"); // U+5F73
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F74");
    },
    Error,
    "encode-error: U+5F74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F75");
    },
    Error,
    "encode-error: U+5F75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F76");
    },
    Error,
    "encode-error: U+5F76",
  );
  r = r && ([...ms932Encoder.encode("彷")].join(",") === "156,102"); // U+5F77
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F78");
    },
    Error,
    "encode-error: U+5F78",
  );
  r = r && ([...ms932Encoder.encode("役")].join(",") === "150,240"); // U+5F79
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F7A");
    },
    Error,
    "encode-error: U+5F7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F7B");
    },
    Error,
    "encode-error: U+5F7B",
  );
  r = r && ([...ms932Encoder.encode("彼")].join(",") === "148,222"); // U+5F7C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F7D");
    },
    Error,
    "encode-error: U+5F7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F7E");
    },
    Error,
    "encode-error: U+5F7E",
  );
  r = r &&
    ([...ms932Encoder.encode("彿往征徂徃径待")].join(",") ===
      "156,105,137,157,144,170,156,104,156,103,140,97,145,210"); // U+5F7F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F86");
    },
    Error,
    "encode-error: U+5F86",
  );
  r = r && ([...ms932Encoder.encode("徇很")].join(",") === "156,109,156,107"); // U+5F87
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F89");
    },
    Error,
    "encode-error: U+5F89",
  );
  r = r &&
    ([...ms932Encoder.encode("徊律後")].join(",") ===
      "156,106,151,165,140,227"); // U+5F8A
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F8D");
    },
    Error,
    "encode-error: U+5F8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F8E");
    },
    Error,
    "encode-error: U+5F8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F8F");
    },
    Error,
    "encode-error: U+5F8F",
  );
  r = r &&
    ([...ms932Encoder.encode("徐徑徒従")].join(",") ===
      "143,153,156,108,147,107,143,93"); // U+5F90
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F94");
    },
    Error,
    "encode-error: U+5F94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F95");
    },
    Error,
    "encode-error: U+5F95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F96");
    },
    Error,
    "encode-error: U+5F96",
  );
  r = r &&
    ([...ms932Encoder.encode("得徘徙")].join(",") ===
      "147,190,156,112,156,111"); // U+5F97
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F9A");
    },
    Error,
    "encode-error: U+5F9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F9B");
    },
    Error,
    "encode-error: U+5F9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F9C");
    },
    Error,
    "encode-error: U+5F9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F9D");
    },
    Error,
    "encode-error: U+5F9D",
  );
  r = r && ([...ms932Encoder.encode("從")].join(",") === "156,110"); // U+5F9E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5F9F");
    },
    Error,
    "encode-error: U+5F9F",
  );
  r = r && ([...ms932Encoder.encode("徠御")].join(",") === "156,113,140,228"); // U+5FA0
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FA2");
    },
    Error,
    "encode-error: U+5FA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FA3");
    },
    Error,
    "encode-error: U+5FA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FA4");
    },
    Error,
    "encode-error: U+5FA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FA5");
    },
    Error,
    "encode-error: U+5FA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FA6");
    },
    Error,
    "encode-error: U+5FA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FA7");
    },
    Error,
    "encode-error: U+5FA7",
  );
  r = r &&
    ([...ms932Encoder.encode("徨復循")].join(",") ===
      "156,114,149,156,143,122"); // U+5FA8
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FAB");
    },
    Error,
    "encode-error: U+5FAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FAC");
    },
    Error,
    "encode-error: U+5FAC",
  );
  r = r && ([...ms932Encoder.encode("徭微")].join(",") === "156,115,148,247"); // U+5FAD
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FAF");
    },
    Error,
    "encode-error: U+5FAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FB0");
    },
    Error,
    "encode-error: U+5FB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FB1");
    },
    Error,
    "encode-error: U+5FB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FB2");
    },
    Error,
    "encode-error: U+5FB2",
  );
  r = r && ([...ms932Encoder.encode("徳徴")].join(",") === "147,191,146,165"); // U+5FB3
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FB5");
    },
    Error,
    "encode-error: U+5FB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FB6");
    },
    Error,
    "encode-error: U+5FB6",
  );
  r = r && ([...ms932Encoder.encode("德")].join(",") === "250,186"); // U+5FB7
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FB8");
    },
    Error,
    "encode-error: U+5FB8",
  );
  r = r && ([...ms932Encoder.encode("徹")].join(",") === "147,79"); // U+5FB9
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FBA");
    },
    Error,
    "encode-error: U+5FBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FBB");
    },
    Error,
    "encode-error: U+5FBB",
  );
  r = r && ([...ms932Encoder.encode("徼徽")].join(",") === "156,116,139,74"); // U+5FBC
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FBE");
    },
    Error,
    "encode-error: U+5FBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FBF");
    },
    Error,
    "encode-error: U+5FBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FC0");
    },
    Error,
    "encode-error: U+5FC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FC1");
    },
    Error,
    "encode-error: U+5FC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FC2");
    },
    Error,
    "encode-error: U+5FC2",
  );
  r = r && ([...ms932Encoder.encode("心")].join(",") === "144,83"); // U+5FC3
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FC4");
    },
    Error,
    "encode-error: U+5FC4",
  );
  r = r && ([...ms932Encoder.encode("必")].join(",") === "149,75"); // U+5FC5
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FC6");
    },
    Error,
    "encode-error: U+5FC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FC7");
    },
    Error,
    "encode-error: U+5FC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FC8");
    },
    Error,
    "encode-error: U+5FC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FC9");
    },
    Error,
    "encode-error: U+5FC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FCA");
    },
    Error,
    "encode-error: U+5FCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FCB");
    },
    Error,
    "encode-error: U+5FCB",
  );
  r = r && ([...ms932Encoder.encode("忌忍")].join(",") === "138,245,148,69"); // U+5FCC
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FCE");
    },
    Error,
    "encode-error: U+5FCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FCF");
    },
    Error,
    "encode-error: U+5FCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FD0");
    },
    Error,
    "encode-error: U+5FD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FD1");
    },
    Error,
    "encode-error: U+5FD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FD2");
    },
    Error,
    "encode-error: U+5FD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FD3");
    },
    Error,
    "encode-error: U+5FD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FD4");
    },
    Error,
    "encode-error: U+5FD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FD5");
    },
    Error,
    "encode-error: U+5FD5",
  );
  r = r &&
    ([...ms932Encoder.encode("忖志忘忙")].join(",") ===
      "156,117,142,117,150,89,150,90"); // U+5FD6
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FDA");
    },
    Error,
    "encode-error: U+5FDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FDB");
    },
    Error,
    "encode-error: U+5FDB",
  );
  r = r &&
    ([...ms932Encoder.encode("応忝忞")].join(",") ===
      "137,158,156,122,250,187"); // U+5FDC
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FDF");
    },
    Error,
    "encode-error: U+5FDF",
  );
  r = r && ([...ms932Encoder.encode("忠")].join(",") === "146,137"); // U+5FE0
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FE1");
    },
    Error,
    "encode-error: U+5FE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FE2");
    },
    Error,
    "encode-error: U+5FE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FE3");
    },
    Error,
    "encode-error: U+5FE3",
  );
  r = r && ([...ms932Encoder.encode("忤")].join(",") === "156,119"); // U+5FE4
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FE5");
    },
    Error,
    "encode-error: U+5FE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FE6");
    },
    Error,
    "encode-error: U+5FE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FE7");
    },
    Error,
    "encode-error: U+5FE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FE8");
    },
    Error,
    "encode-error: U+5FE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FE9");
    },
    Error,
    "encode-error: U+5FE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FEA");
    },
    Error,
    "encode-error: U+5FEA",
  );
  r = r && ([...ms932Encoder.encode("快")].join(",") === "137,245"); // U+5FEB
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FEC");
    },
    Error,
    "encode-error: U+5FEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FED");
    },
    Error,
    "encode-error: U+5FED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FEE");
    },
    Error,
    "encode-error: U+5FEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FEF");
    },
    Error,
    "encode-error: U+5FEF",
  );
  r = r && ([...ms932Encoder.encode("忰忱")].join(",") === "156,171,156,121"); // U+5FF0
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FF2");
    },
    Error,
    "encode-error: U+5FF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FF3");
    },
    Error,
    "encode-error: U+5FF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FF4");
    },
    Error,
    "encode-error: U+5FF4",
  );
  r = r && ([...ms932Encoder.encode("念")].join(",") === "148,79"); // U+5FF5
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FF6");
    },
    Error,
    "encode-error: U+5FF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FF7");
    },
    Error,
    "encode-error: U+5FF7",
  );
  r = r && ([...ms932Encoder.encode("忸")].join(",") === "156,120"); // U+5FF8
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FF9");
    },
    Error,
    "encode-error: U+5FF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FFA");
    },
    Error,
    "encode-error: U+5FFA",
  );
  r = r && ([...ms932Encoder.encode("忻")].join(",") === "156,118"); // U+5FFB
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FFC");
    },
    Error,
    "encode-error: U+5FFC",
  );
  r = r && ([...ms932Encoder.encode("忽")].join(",") === "141,154"); // U+5FFD
  assertThrows(
    () => {
      ms932Encoder.encode("\u5FFE");
    },
    Error,
    "encode-error: U+5FFE",
  );
  r = r && ([...ms932Encoder.encode("忿")].join(",") === "156,124"); // U+5FFF

  assertStrictEquals(r, true);
});
