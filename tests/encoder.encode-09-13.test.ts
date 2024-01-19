import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+8C00-U+8FFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C00");
    },
    Error,
    "encode-error: U+8C00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C01");
    },
    Error,
    "encode-error: U+8C01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C02");
    },
    Error,
    "encode-error: U+8C02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C03");
    },
    Error,
    "encode-error: U+8C03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C04");
    },
    Error,
    "encode-error: U+8C04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C05");
    },
    Error,
    "encode-error: U+8C05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C06");
    },
    Error,
    "encode-error: U+8C06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C07");
    },
    Error,
    "encode-error: U+8C07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C08");
    },
    Error,
    "encode-error: U+8C08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C09");
    },
    Error,
    "encode-error: U+8C09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C0A");
    },
    Error,
    "encode-error: U+8C0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C0B");
    },
    Error,
    "encode-error: U+8C0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C0C");
    },
    Error,
    "encode-error: U+8C0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C0D");
    },
    Error,
    "encode-error: U+8C0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C0E");
    },
    Error,
    "encode-error: U+8C0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C0F");
    },
    Error,
    "encode-error: U+8C0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C10");
    },
    Error,
    "encode-error: U+8C10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C11");
    },
    Error,
    "encode-error: U+8C11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C12");
    },
    Error,
    "encode-error: U+8C12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C13");
    },
    Error,
    "encode-error: U+8C13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C14");
    },
    Error,
    "encode-error: U+8C14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C15");
    },
    Error,
    "encode-error: U+8C15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C16");
    },
    Error,
    "encode-error: U+8C16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C17");
    },
    Error,
    "encode-error: U+8C17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C18");
    },
    Error,
    "encode-error: U+8C18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C19");
    },
    Error,
    "encode-error: U+8C19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C1A");
    },
    Error,
    "encode-error: U+8C1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C1B");
    },
    Error,
    "encode-error: U+8C1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C1C");
    },
    Error,
    "encode-error: U+8C1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C1D");
    },
    Error,
    "encode-error: U+8C1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C1E");
    },
    Error,
    "encode-error: U+8C1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C1F");
    },
    Error,
    "encode-error: U+8C1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C20");
    },
    Error,
    "encode-error: U+8C20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C21");
    },
    Error,
    "encode-error: U+8C21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C22");
    },
    Error,
    "encode-error: U+8C22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C23");
    },
    Error,
    "encode-error: U+8C23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C24");
    },
    Error,
    "encode-error: U+8C24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C25");
    },
    Error,
    "encode-error: U+8C25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C26");
    },
    Error,
    "encode-error: U+8C26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C27");
    },
    Error,
    "encode-error: U+8C27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C28");
    },
    Error,
    "encode-error: U+8C28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C29");
    },
    Error,
    "encode-error: U+8C29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C2A");
    },
    Error,
    "encode-error: U+8C2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C2B");
    },
    Error,
    "encode-error: U+8C2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C2C");
    },
    Error,
    "encode-error: U+8C2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C2D");
    },
    Error,
    "encode-error: U+8C2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C2E");
    },
    Error,
    "encode-error: U+8C2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C2F");
    },
    Error,
    "encode-error: U+8C2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C30");
    },
    Error,
    "encode-error: U+8C30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C31");
    },
    Error,
    "encode-error: U+8C31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C32");
    },
    Error,
    "encode-error: U+8C32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C33");
    },
    Error,
    "encode-error: U+8C33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C34");
    },
    Error,
    "encode-error: U+8C34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C35");
    },
    Error,
    "encode-error: U+8C35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C36");
    },
    Error,
    "encode-error: U+8C36",
  );
  r = r && ([...ms932Encoder.encode("谷")].join(",") === "146,74"); // U+8C37
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C38");
    },
    Error,
    "encode-error: U+8C38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C39");
    },
    Error,
    "encode-error: U+8C39",
  );
  r = r && ([...ms932Encoder.encode("谺")].join(",") === "230,172"); // U+8C3A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C3B");
    },
    Error,
    "encode-error: U+8C3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C3C");
    },
    Error,
    "encode-error: U+8C3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C3D");
    },
    Error,
    "encode-error: U+8C3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C3E");
    },
    Error,
    "encode-error: U+8C3E",
  );
  r = r && ([...ms932Encoder.encode("谿")].join(",") === "230,174"); // U+8C3F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C40");
    },
    Error,
    "encode-error: U+8C40",
  );
  r = r && ([...ms932Encoder.encode("豁")].join(",") === "230,173"); // U+8C41
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C42");
    },
    Error,
    "encode-error: U+8C42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C43");
    },
    Error,
    "encode-error: U+8C43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C44");
    },
    Error,
    "encode-error: U+8C44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C45");
    },
    Error,
    "encode-error: U+8C45",
  );
  r = r && ([...ms932Encoder.encode("豆")].join(",") === "147,164"); // U+8C46
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C47");
    },
    Error,
    "encode-error: U+8C47",
  );
  r = r && ([...ms932Encoder.encode("豈")].join(",") === "230,175"); // U+8C48
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C49");
    },
    Error,
    "encode-error: U+8C49",
  );
  r = r && ([...ms932Encoder.encode("豊")].join(",") === "150,76"); // U+8C4A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C4B");
    },
    Error,
    "encode-error: U+8C4B",
  );
  r = r && ([...ms932Encoder.encode("豌")].join(",") === "230,176"); // U+8C4C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C4D");
    },
    Error,
    "encode-error: U+8C4D",
  );
  r = r && ([...ms932Encoder.encode("豎")].join(",") === "230,177"); // U+8C4E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C4F");
    },
    Error,
    "encode-error: U+8C4F",
  );
  r = r && ([...ms932Encoder.encode("豐")].join(",") === "230,178"); // U+8C50
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C51");
    },
    Error,
    "encode-error: U+8C51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C52");
    },
    Error,
    "encode-error: U+8C52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C53");
    },
    Error,
    "encode-error: U+8C53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C54");
    },
    Error,
    "encode-error: U+8C54",
  );
  r = r && ([...ms932Encoder.encode("豕")].join(",") === "230,179"); // U+8C55
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C56");
    },
    Error,
    "encode-error: U+8C56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C57");
    },
    Error,
    "encode-error: U+8C57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C58");
    },
    Error,
    "encode-error: U+8C58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C59");
    },
    Error,
    "encode-error: U+8C59",
  );
  r = r && ([...ms932Encoder.encode("豚")].join(",") === "147,216"); // U+8C5A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C5B");
    },
    Error,
    "encode-error: U+8C5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C5C");
    },
    Error,
    "encode-error: U+8C5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C5D");
    },
    Error,
    "encode-error: U+8C5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C5E");
    },
    Error,
    "encode-error: U+8C5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C5F");
    },
    Error,
    "encode-error: U+8C5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C60");
    },
    Error,
    "encode-error: U+8C60",
  );
  r = r && ([...ms932Encoder.encode("象豢")].join(",") === "143,219,230,180"); // U+8C61
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C63");
    },
    Error,
    "encode-error: U+8C63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C64");
    },
    Error,
    "encode-error: U+8C64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C65");
    },
    Error,
    "encode-error: U+8C65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C66");
    },
    Error,
    "encode-error: U+8C66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C67");
    },
    Error,
    "encode-error: U+8C67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C68");
    },
    Error,
    "encode-error: U+8C68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C69");
    },
    Error,
    "encode-error: U+8C69",
  );
  r = r &&
    ([...ms932Encoder.encode("豪豫豬")].join(",") ===
      "141,139,152,172,230,181"); // U+8C6A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C6D");
    },
    Error,
    "encode-error: U+8C6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C6E");
    },
    Error,
    "encode-error: U+8C6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C6F");
    },
    Error,
    "encode-error: U+8C6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C70");
    },
    Error,
    "encode-error: U+8C70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C71");
    },
    Error,
    "encode-error: U+8C71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C72");
    },
    Error,
    "encode-error: U+8C72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C73");
    },
    Error,
    "encode-error: U+8C73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C74");
    },
    Error,
    "encode-error: U+8C74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C75");
    },
    Error,
    "encode-error: U+8C75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C76");
    },
    Error,
    "encode-error: U+8C76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C77");
    },
    Error,
    "encode-error: U+8C77",
  );
  r = r &&
    ([...ms932Encoder.encode("豸豹豺")].join(",") === "230,182,149,94,230,183"); // U+8C78
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C7B");
    },
    Error,
    "encode-error: U+8C7B",
  );
  r = r && ([...ms932Encoder.encode("豼")].join(",") === "230,191"); // U+8C7C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C7D");
    },
    Error,
    "encode-error: U+8C7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C7E");
    },
    Error,
    "encode-error: U+8C7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C7F");
    },
    Error,
    "encode-error: U+8C7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C80");
    },
    Error,
    "encode-error: U+8C80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C81");
    },
    Error,
    "encode-error: U+8C81",
  );
  r = r && ([...ms932Encoder.encode("貂")].join(",") === "230,184"); // U+8C82
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C83");
    },
    Error,
    "encode-error: U+8C83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C84");
    },
    Error,
    "encode-error: U+8C84",
  );
  r = r && ([...ms932Encoder.encode("貅")].join(",") === "230,186"); // U+8C85
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C86");
    },
    Error,
    "encode-error: U+8C86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C87");
    },
    Error,
    "encode-error: U+8C87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C88");
    },
    Error,
    "encode-error: U+8C88",
  );
  r = r && ([...ms932Encoder.encode("貉貊")].join(",") === "230,185,230,187"); // U+8C89
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C8B");
    },
    Error,
    "encode-error: U+8C8B",
  );
  r = r &&
    ([...ms932Encoder.encode("貌貍貎")].join(",") ===
      "150,101,230,188,230,189"); // U+8C8C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C8F");
    },
    Error,
    "encode-error: U+8C8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C90");
    },
    Error,
    "encode-error: U+8C90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C91");
    },
    Error,
    "encode-error: U+8C91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C92");
    },
    Error,
    "encode-error: U+8C92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C93");
    },
    Error,
    "encode-error: U+8C93",
  );
  r = r && ([...ms932Encoder.encode("貔")].join(",") === "230,190"); // U+8C94
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C95");
    },
    Error,
    "encode-error: U+8C95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C96");
    },
    Error,
    "encode-error: U+8C96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C97");
    },
    Error,
    "encode-error: U+8C97",
  );
  r = r && ([...ms932Encoder.encode("貘")].join(",") === "230,192"); // U+8C98
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C99");
    },
    Error,
    "encode-error: U+8C99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C9A");
    },
    Error,
    "encode-error: U+8C9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C9B");
    },
    Error,
    "encode-error: U+8C9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C9C");
    },
    Error,
    "encode-error: U+8C9C",
  );
  r = r && ([...ms932Encoder.encode("貝貞")].join(",") === "138,76,146,229"); // U+8C9D
  assertThrows(
    () => {
      ms932Encoder.encode("\u8C9F");
    },
    Error,
    "encode-error: U+8C9F",
  );
  r = r &&
    ([...ms932Encoder.encode("負財貢")].join(",") ===
      "149,137,141,224,141,118"); // U+8CA0
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CA3");
    },
    Error,
    "encode-error: U+8CA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CA4");
    },
    Error,
    "encode-error: U+8CA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CA5");
    },
    Error,
    "encode-error: U+8CA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CA6");
    },
    Error,
    "encode-error: U+8CA6",
  );
  r = r &&
    ([...ms932Encoder.encode("貧貨販貪貫責貭貮貯貰")].join(",") ===
      "149,110,137,221,148,204,230,195,138,209,144,211,230,194,230,199,146,153,150,225"); // U+8CA7
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CB1");
    },
    Error,
    "encode-error: U+8CB1",
  );
  r = r &&
    ([...ms932Encoder.encode("貲貳貴")].join(",") === "230,197,230,198,139,77"); // U+8CB2
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CB5");
    },
    Error,
    "encode-error: U+8CB5",
  );
  r = r &&
    ([...ms932Encoder.encode("貶買貸")].join(",") ===
      "230,200,148,131,145,221"); // U+8CB6
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CB9");
    },
    Error,
    "encode-error: U+8CB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CBA");
    },
    Error,
    "encode-error: U+8CBA",
  );
  r = r &&
    ([...ms932Encoder.encode("費貼貽")].join(",") === "148,239,147,92,230,196"); // U+8CBB
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CBE");
    },
    Error,
    "encode-error: U+8CBE",
  );
  r = r &&
    ([...ms932Encoder.encode("貿賀賁賂賃賄")].join(",") ===
      "150,102,137,234,230,202,152,71,146,192,152,100"); // U+8CBF
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CC5");
    },
    Error,
    "encode-error: U+8CC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CC6");
    },
    Error,
    "encode-error: U+8CC6",
  );
  r = r && ([...ms932Encoder.encode("資賈")].join(",") === "142,145,230,201"); // U+8CC7
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CC9");
    },
    Error,
    "encode-error: U+8CC9",
  );
  r = r && ([...ms932Encoder.encode("賊")].join(",") === "145,175"); // U+8CCA
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CCB");
    },
    Error,
    "encode-error: U+8CCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CCC");
    },
    Error,
    "encode-error: U+8CCC",
  );
  r = r && ([...ms932Encoder.encode("賍賎")].join(",") === "230,218,145,71"); // U+8CCD
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CCF");
    },
    Error,
    "encode-error: U+8CCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CD0");
    },
    Error,
    "encode-error: U+8CD0",
  );
  r = r && ([...ms932Encoder.encode("賑")].join(",") === "147,246"); // U+8CD1
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CD2");
    },
    Error,
    "encode-error: U+8CD2",
  );
  r = r && ([...ms932Encoder.encode("賓")].join(",") === "149,111"); // U+8CD3
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CD4");
    },
    Error,
    "encode-error: U+8CD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CD5");
    },
    Error,
    "encode-error: U+8CD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CD6");
    },
    Error,
    "encode-error: U+8CD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CD7");
    },
    Error,
    "encode-error: U+8CD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CD8");
    },
    Error,
    "encode-error: U+8CD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CD9");
    },
    Error,
    "encode-error: U+8CD9",
  );
  r = r &&
    ([...ms932Encoder.encode("賚賛賜")].join(",") === "230,205,142,94,142,146"); // U+8CDA
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CDD");
    },
    Error,
    "encode-error: U+8CDD",
  );
  r = r && ([...ms932Encoder.encode("賞")].join(",") === "143,220"); // U+8CDE
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CDF");
    },
    Error,
    "encode-error: U+8CDF",
  );
  r = r && ([...ms932Encoder.encode("賠")].join(",") === "148,133"); // U+8CE0
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CE1");
    },
    Error,
    "encode-error: U+8CE1",
  );
  r = r &&
    ([...ms932Encoder.encode("賢賣賤")].join(",") ===
      "140,171,230,204,230,203"); // U+8CE2
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CE5");
    },
    Error,
    "encode-error: U+8CE5",
  );
  r = r && ([...ms932Encoder.encode("賦")].join(",") === "149,138"); // U+8CE6
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CE7");
    },
    Error,
    "encode-error: U+8CE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CE8");
    },
    Error,
    "encode-error: U+8CE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CE9");
    },
    Error,
    "encode-error: U+8CE9",
  );
  r = r && ([...ms932Encoder.encode("質")].join(",") === "142,191"); // U+8CEA
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CEB");
    },
    Error,
    "encode-error: U+8CEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CEC");
    },
    Error,
    "encode-error: U+8CEC",
  );
  r = r && ([...ms932Encoder.encode("賭")].join(",") === "147,113"); // U+8CED
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CEE");
    },
    Error,
    "encode-error: U+8CEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CEF");
    },
    Error,
    "encode-error: U+8CEF",
  );
  r = r && ([...ms932Encoder.encode("賰")].join(",") === "251,173"); // U+8CF0
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CF1");
    },
    Error,
    "encode-error: U+8CF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CF2");
    },
    Error,
    "encode-error: U+8CF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CF3");
    },
    Error,
    "encode-error: U+8CF3",
  );
  r = r && ([...ms932Encoder.encode("賴")].join(",") === "251,174"); // U+8CF4
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CF5");
    },
    Error,
    "encode-error: U+8CF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CF6");
    },
    Error,
    "encode-error: U+8CF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CF7");
    },
    Error,
    "encode-error: U+8CF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CF8");
    },
    Error,
    "encode-error: U+8CF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CF9");
    },
    Error,
    "encode-error: U+8CF9",
  );
  r = r &&
    ([...ms932Encoder.encode("賺賻購賽")].join(",") ===
      "230,207,230,208,141,119,230,206"); // U+8CFA
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CFE");
    },
    Error,
    "encode-error: U+8CFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8CFF");
    },
    Error,
    "encode-error: U+8CFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D00");
    },
    Error,
    "encode-error: U+8D00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D01");
    },
    Error,
    "encode-error: U+8D01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D02");
    },
    Error,
    "encode-error: U+8D02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D03");
    },
    Error,
    "encode-error: U+8D03",
  );
  r = r && ([...ms932Encoder.encode("贄贅")].join(",") === "230,209,230,210"); // U+8D04
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D06");
    },
    Error,
    "encode-error: U+8D06",
  );
  r = r && ([...ms932Encoder.encode("贇贈")].join(",") === "230,212,145,161"); // U+8D07
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D09");
    },
    Error,
    "encode-error: U+8D09",
  );
  r = r && ([...ms932Encoder.encode("贊贋")].join(",") === "230,211,138,228"); // U+8D0A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D0C");
    },
    Error,
    "encode-error: U+8D0C",
  );
  r = r && ([...ms932Encoder.encode("贍")].join(",") === "230,214"); // U+8D0D
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D0E");
    },
    Error,
    "encode-error: U+8D0E",
  );
  r = r && ([...ms932Encoder.encode("贏贐")].join(",") === "230,213,230,215"); // U+8D0F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D11");
    },
    Error,
    "encode-error: U+8D11",
  );
  r = r &&
    ([...ms932Encoder.encode("贒贓贔")].join(",") ===
      "251,175,230,217,230,219"); // U+8D12
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D15");
    },
    Error,
    "encode-error: U+8D15",
  );
  r = r && ([...ms932Encoder.encode("贖")].join(",") === "230,220"); // U+8D16
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D17");
    },
    Error,
    "encode-error: U+8D17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D18");
    },
    Error,
    "encode-error: U+8D18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D19");
    },
    Error,
    "encode-error: U+8D19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D1A");
    },
    Error,
    "encode-error: U+8D1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D1B");
    },
    Error,
    "encode-error: U+8D1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D1C");
    },
    Error,
    "encode-error: U+8D1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D1D");
    },
    Error,
    "encode-error: U+8D1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D1E");
    },
    Error,
    "encode-error: U+8D1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D1F");
    },
    Error,
    "encode-error: U+8D1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D20");
    },
    Error,
    "encode-error: U+8D20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D21");
    },
    Error,
    "encode-error: U+8D21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D22");
    },
    Error,
    "encode-error: U+8D22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D23");
    },
    Error,
    "encode-error: U+8D23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D24");
    },
    Error,
    "encode-error: U+8D24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D25");
    },
    Error,
    "encode-error: U+8D25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D26");
    },
    Error,
    "encode-error: U+8D26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D27");
    },
    Error,
    "encode-error: U+8D27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D28");
    },
    Error,
    "encode-error: U+8D28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D29");
    },
    Error,
    "encode-error: U+8D29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D2A");
    },
    Error,
    "encode-error: U+8D2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D2B");
    },
    Error,
    "encode-error: U+8D2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D2C");
    },
    Error,
    "encode-error: U+8D2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D2D");
    },
    Error,
    "encode-error: U+8D2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D2E");
    },
    Error,
    "encode-error: U+8D2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D2F");
    },
    Error,
    "encode-error: U+8D2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D30");
    },
    Error,
    "encode-error: U+8D30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D31");
    },
    Error,
    "encode-error: U+8D31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D32");
    },
    Error,
    "encode-error: U+8D32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D33");
    },
    Error,
    "encode-error: U+8D33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D34");
    },
    Error,
    "encode-error: U+8D34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D35");
    },
    Error,
    "encode-error: U+8D35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D36");
    },
    Error,
    "encode-error: U+8D36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D37");
    },
    Error,
    "encode-error: U+8D37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D38");
    },
    Error,
    "encode-error: U+8D38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D39");
    },
    Error,
    "encode-error: U+8D39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D3A");
    },
    Error,
    "encode-error: U+8D3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D3B");
    },
    Error,
    "encode-error: U+8D3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D3C");
    },
    Error,
    "encode-error: U+8D3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D3D");
    },
    Error,
    "encode-error: U+8D3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D3E");
    },
    Error,
    "encode-error: U+8D3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D3F");
    },
    Error,
    "encode-error: U+8D3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D40");
    },
    Error,
    "encode-error: U+8D40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D41");
    },
    Error,
    "encode-error: U+8D41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D42");
    },
    Error,
    "encode-error: U+8D42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D43");
    },
    Error,
    "encode-error: U+8D43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D44");
    },
    Error,
    "encode-error: U+8D44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D45");
    },
    Error,
    "encode-error: U+8D45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D46");
    },
    Error,
    "encode-error: U+8D46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D47");
    },
    Error,
    "encode-error: U+8D47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D48");
    },
    Error,
    "encode-error: U+8D48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D49");
    },
    Error,
    "encode-error: U+8D49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D4A");
    },
    Error,
    "encode-error: U+8D4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D4B");
    },
    Error,
    "encode-error: U+8D4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D4C");
    },
    Error,
    "encode-error: U+8D4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D4D");
    },
    Error,
    "encode-error: U+8D4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D4E");
    },
    Error,
    "encode-error: U+8D4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D4F");
    },
    Error,
    "encode-error: U+8D4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D50");
    },
    Error,
    "encode-error: U+8D50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D51");
    },
    Error,
    "encode-error: U+8D51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D52");
    },
    Error,
    "encode-error: U+8D52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D53");
    },
    Error,
    "encode-error: U+8D53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D54");
    },
    Error,
    "encode-error: U+8D54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D55");
    },
    Error,
    "encode-error: U+8D55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D56");
    },
    Error,
    "encode-error: U+8D56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D57");
    },
    Error,
    "encode-error: U+8D57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D58");
    },
    Error,
    "encode-error: U+8D58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D59");
    },
    Error,
    "encode-error: U+8D59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D5A");
    },
    Error,
    "encode-error: U+8D5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D5B");
    },
    Error,
    "encode-error: U+8D5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D5C");
    },
    Error,
    "encode-error: U+8D5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D5D");
    },
    Error,
    "encode-error: U+8D5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D5E");
    },
    Error,
    "encode-error: U+8D5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D5F");
    },
    Error,
    "encode-error: U+8D5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D60");
    },
    Error,
    "encode-error: U+8D60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D61");
    },
    Error,
    "encode-error: U+8D61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D62");
    },
    Error,
    "encode-error: U+8D62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D63");
    },
    Error,
    "encode-error: U+8D63",
  );
  r = r && ([...ms932Encoder.encode("赤")].join(",") === "144,212"); // U+8D64
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D65");
    },
    Error,
    "encode-error: U+8D65",
  );
  r = r && ([...ms932Encoder.encode("赦赧")].join(",") === "142,205,230,221"); // U+8D66
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D68");
    },
    Error,
    "encode-error: U+8D68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D69");
    },
    Error,
    "encode-error: U+8D69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D6A");
    },
    Error,
    "encode-error: U+8D6A",
  );
  r = r && ([...ms932Encoder.encode("赫")].join(",") === "138,113"); // U+8D6B
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D6C");
    },
    Error,
    "encode-error: U+8D6C",
  );
  r = r && ([...ms932Encoder.encode("赭")].join(",") === "230,222"); // U+8D6D
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D6E");
    },
    Error,
    "encode-error: U+8D6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D6F");
    },
    Error,
    "encode-error: U+8D6F",
  );
  r = r && ([...ms932Encoder.encode("走赱")].join(",") === "145,150,230,223"); // U+8D70
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D72");
    },
    Error,
    "encode-error: U+8D72",
  );
  r = r && ([...ms932Encoder.encode("赳赴")].join(",") === "230,224,149,139"); // U+8D73
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D75");
    },
    Error,
    "encode-error: U+8D75",
  );
  r = r && ([...ms932Encoder.encode("赶起")].join(",") === "251,176,139,78"); // U+8D76
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D78");
    },
    Error,
    "encode-error: U+8D78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D79");
    },
    Error,
    "encode-error: U+8D79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D7A");
    },
    Error,
    "encode-error: U+8D7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D7B");
    },
    Error,
    "encode-error: U+8D7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D7C");
    },
    Error,
    "encode-error: U+8D7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D7D");
    },
    Error,
    "encode-error: U+8D7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D7E");
    },
    Error,
    "encode-error: U+8D7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D7F");
    },
    Error,
    "encode-error: U+8D7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D80");
    },
    Error,
    "encode-error: U+8D80",
  );
  r = r && ([...ms932Encoder.encode("趁")].join(",") === "230,225"); // U+8D81
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D82");
    },
    Error,
    "encode-error: U+8D82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D83");
    },
    Error,
    "encode-error: U+8D83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D84");
    },
    Error,
    "encode-error: U+8D84",
  );
  r = r && ([...ms932Encoder.encode("超")].join(",") === "146,180"); // U+8D85
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D86");
    },
    Error,
    "encode-error: U+8D86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D87");
    },
    Error,
    "encode-error: U+8D87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D88");
    },
    Error,
    "encode-error: U+8D88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D89");
    },
    Error,
    "encode-error: U+8D89",
  );
  r = r && ([...ms932Encoder.encode("越")].join(",") === "137,122"); // U+8D8A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D8B");
    },
    Error,
    "encode-error: U+8D8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D8C");
    },
    Error,
    "encode-error: U+8D8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D8D");
    },
    Error,
    "encode-error: U+8D8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D8E");
    },
    Error,
    "encode-error: U+8D8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D8F");
    },
    Error,
    "encode-error: U+8D8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D90");
    },
    Error,
    "encode-error: U+8D90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D91");
    },
    Error,
    "encode-error: U+8D91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D92");
    },
    Error,
    "encode-error: U+8D92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D93");
    },
    Error,
    "encode-error: U+8D93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D94");
    },
    Error,
    "encode-error: U+8D94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D95");
    },
    Error,
    "encode-error: U+8D95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D96");
    },
    Error,
    "encode-error: U+8D96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D97");
    },
    Error,
    "encode-error: U+8D97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D98");
    },
    Error,
    "encode-error: U+8D98",
  );
  r = r && ([...ms932Encoder.encode("趙")].join(",") === "230,226"); // U+8D99
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D9A");
    },
    Error,
    "encode-error: U+8D9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D9B");
    },
    Error,
    "encode-error: U+8D9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D9C");
    },
    Error,
    "encode-error: U+8D9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D9D");
    },
    Error,
    "encode-error: U+8D9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D9E");
    },
    Error,
    "encode-error: U+8D9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8D9F");
    },
    Error,
    "encode-error: U+8D9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DA0");
    },
    Error,
    "encode-error: U+8DA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DA1");
    },
    Error,
    "encode-error: U+8DA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DA2");
    },
    Error,
    "encode-error: U+8DA2",
  );
  r = r && ([...ms932Encoder.encode("趣")].join(",") === "142,239"); // U+8DA3
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DA4");
    },
    Error,
    "encode-error: U+8DA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DA5");
    },
    Error,
    "encode-error: U+8DA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DA6");
    },
    Error,
    "encode-error: U+8DA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DA7");
    },
    Error,
    "encode-error: U+8DA7",
  );
  r = r && ([...ms932Encoder.encode("趨")].join(",") === "144,150"); // U+8DA8
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DA9");
    },
    Error,
    "encode-error: U+8DA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DAA");
    },
    Error,
    "encode-error: U+8DAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DAB");
    },
    Error,
    "encode-error: U+8DAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DAC");
    },
    Error,
    "encode-error: U+8DAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DAD");
    },
    Error,
    "encode-error: U+8DAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DAE");
    },
    Error,
    "encode-error: U+8DAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DAF");
    },
    Error,
    "encode-error: U+8DAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DB0");
    },
    Error,
    "encode-error: U+8DB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DB1");
    },
    Error,
    "encode-error: U+8DB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DB2");
    },
    Error,
    "encode-error: U+8DB2",
  );
  r = r && ([...ms932Encoder.encode("足")].join(",") === "145,171"); // U+8DB3
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DB4");
    },
    Error,
    "encode-error: U+8DB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DB5");
    },
    Error,
    "encode-error: U+8DB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DB6");
    },
    Error,
    "encode-error: U+8DB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DB7");
    },
    Error,
    "encode-error: U+8DB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DB8");
    },
    Error,
    "encode-error: U+8DB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DB9");
    },
    Error,
    "encode-error: U+8DB9",
  );
  r = r && ([...ms932Encoder.encode("趺")].join(",") === "230,229"); // U+8DBA
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DBB");
    },
    Error,
    "encode-error: U+8DBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DBC");
    },
    Error,
    "encode-error: U+8DBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DBD");
    },
    Error,
    "encode-error: U+8DBD",
  );
  r = r && ([...ms932Encoder.encode("趾")].join(",") === "230,228"); // U+8DBE
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DBF");
    },
    Error,
    "encode-error: U+8DBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DC0");
    },
    Error,
    "encode-error: U+8DC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DC1");
    },
    Error,
    "encode-error: U+8DC1",
  );
  r = r && ([...ms932Encoder.encode("跂")].join(",") === "230,227"); // U+8DC2
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DC3");
    },
    Error,
    "encode-error: U+8DC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DC4");
    },
    Error,
    "encode-error: U+8DC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DC5");
    },
    Error,
    "encode-error: U+8DC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DC6");
    },
    Error,
    "encode-error: U+8DC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DC7");
    },
    Error,
    "encode-error: U+8DC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DC8");
    },
    Error,
    "encode-error: U+8DC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DC9");
    },
    Error,
    "encode-error: U+8DC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DCA");
    },
    Error,
    "encode-error: U+8DCA",
  );
  r = r && ([...ms932Encoder.encode("跋跌")].join(",") === "230,235,230,233"); // U+8DCB
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DCD");
    },
    Error,
    "encode-error: U+8DCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DCE");
    },
    Error,
    "encode-error: U+8DCE",
  );
  r = r && ([...ms932Encoder.encode("跏")].join(",") === "230,230"); // U+8DCF
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DD0");
    },
    Error,
    "encode-error: U+8DD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DD1");
    },
    Error,
    "encode-error: U+8DD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DD2");
    },
    Error,
    "encode-error: U+8DD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DD3");
    },
    Error,
    "encode-error: U+8DD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DD4");
    },
    Error,
    "encode-error: U+8DD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DD5");
    },
    Error,
    "encode-error: U+8DD5",
  );
  r = r && ([...ms932Encoder.encode("跖")].join(",") === "230,232"); // U+8DD6
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DD7");
    },
    Error,
    "encode-error: U+8DD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DD8");
    },
    Error,
    "encode-error: U+8DD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DD9");
    },
    Error,
    "encode-error: U+8DD9",
  );
  r = r && ([...ms932Encoder.encode("跚跛")].join(",") === "230,231,230,234"); // U+8DDA
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DDC");
    },
    Error,
    "encode-error: U+8DDC",
  );
  r = r && ([...ms932Encoder.encode("距")].join(",") === "139,151"); // U+8DDD
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DDE");
    },
    Error,
    "encode-error: U+8DDE",
  );
  r = r && ([...ms932Encoder.encode("跟")].join(",") === "230,238"); // U+8DDF
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DE0");
    },
    Error,
    "encode-error: U+8DE0",
  );
  r = r && ([...ms932Encoder.encode("跡")].join(",") === "144,213"); // U+8DE1
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DE2");
    },
    Error,
    "encode-error: U+8DE2",
  );
  r = r && ([...ms932Encoder.encode("跣")].join(",") === "230,239"); // U+8DE3
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DE4");
    },
    Error,
    "encode-error: U+8DE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DE5");
    },
    Error,
    "encode-error: U+8DE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DE6");
    },
    Error,
    "encode-error: U+8DE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DE7");
    },
    Error,
    "encode-error: U+8DE7",
  );
  r = r && ([...ms932Encoder.encode("跨")].join(",") === "140,215"); // U+8DE8
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DE9");
    },
    Error,
    "encode-error: U+8DE9",
  );
  r = r && ([...ms932Encoder.encode("跪跫")].join(",") === "230,236,230,237"); // U+8DEA
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DEC");
    },
    Error,
    "encode-error: U+8DEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DED");
    },
    Error,
    "encode-error: U+8DED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DEE");
    },
    Error,
    "encode-error: U+8DEE",
  );
  r = r && ([...ms932Encoder.encode("路")].join(",") === "152,72"); // U+8DEF
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DF0");
    },
    Error,
    "encode-error: U+8DF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DF1");
    },
    Error,
    "encode-error: U+8DF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DF2");
    },
    Error,
    "encode-error: U+8DF2",
  );
  r = r && ([...ms932Encoder.encode("跳")].join(",") === "146,181"); // U+8DF3
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DF4");
    },
    Error,
    "encode-error: U+8DF4",
  );
  r = r && ([...ms932Encoder.encode("践")].join(",") === "145,72"); // U+8DF5
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DF6");
    },
    Error,
    "encode-error: U+8DF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DF7");
    },
    Error,
    "encode-error: U+8DF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DF8");
    },
    Error,
    "encode-error: U+8DF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DF9");
    },
    Error,
    "encode-error: U+8DF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DFA");
    },
    Error,
    "encode-error: U+8DFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DFB");
    },
    Error,
    "encode-error: U+8DFB",
  );
  r = r && ([...ms932Encoder.encode("跼")].join(",") === "230,240"); // U+8DFC
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DFD");
    },
    Error,
    "encode-error: U+8DFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8DFE");
    },
    Error,
    "encode-error: U+8DFE",
  );
  r = r && ([...ms932Encoder.encode("跿")].join(",") === "230,243"); // U+8DFF
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E00");
    },
    Error,
    "encode-error: U+8E00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E01");
    },
    Error,
    "encode-error: U+8E01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E02");
    },
    Error,
    "encode-error: U+8E02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E03");
    },
    Error,
    "encode-error: U+8E03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E04");
    },
    Error,
    "encode-error: U+8E04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E05");
    },
    Error,
    "encode-error: U+8E05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E06");
    },
    Error,
    "encode-error: U+8E06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E07");
    },
    Error,
    "encode-error: U+8E07",
  );
  r = r &&
    ([...ms932Encoder.encode("踈踉踊")].join(",") ===
      "230,241,230,242,151,120"); // U+8E08
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E0B");
    },
    Error,
    "encode-error: U+8E0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E0C");
    },
    Error,
    "encode-error: U+8E0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E0D");
    },
    Error,
    "encode-error: U+8E0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E0E");
    },
    Error,
    "encode-error: U+8E0E",
  );
  r = r && ([...ms932Encoder.encode("踏踐")].join(",") === "147,165,230,246"); // U+8E0F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E11");
    },
    Error,
    "encode-error: U+8E11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E12");
    },
    Error,
    "encode-error: U+8E12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E13");
    },
    Error,
    "encode-error: U+8E13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E14");
    },
    Error,
    "encode-error: U+8E14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E15");
    },
    Error,
    "encode-error: U+8E15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E16");
    },
    Error,
    "encode-error: U+8E16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E17");
    },
    Error,
    "encode-error: U+8E17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E18");
    },
    Error,
    "encode-error: U+8E18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E19");
    },
    Error,
    "encode-error: U+8E19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E1A");
    },
    Error,
    "encode-error: U+8E1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E1B");
    },
    Error,
    "encode-error: U+8E1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E1C");
    },
    Error,
    "encode-error: U+8E1C",
  );
  r = r &&
    ([...ms932Encoder.encode("踝踞踟")].join(",") ===
      "230,244,230,245,230,247"); // U+8E1D
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E20");
    },
    Error,
    "encode-error: U+8E20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E21");
    },
    Error,
    "encode-error: U+8E21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E22");
    },
    Error,
    "encode-error: U+8E22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E23");
    },
    Error,
    "encode-error: U+8E23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E24");
    },
    Error,
    "encode-error: U+8E24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E25");
    },
    Error,
    "encode-error: U+8E25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E26");
    },
    Error,
    "encode-error: U+8E26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E27");
    },
    Error,
    "encode-error: U+8E27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E28");
    },
    Error,
    "encode-error: U+8E28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E29");
    },
    Error,
    "encode-error: U+8E29",
  );
  r = r && ([...ms932Encoder.encode("踪")].join(",") === "231,72"); // U+8E2A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E2B");
    },
    Error,
    "encode-error: U+8E2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E2C");
    },
    Error,
    "encode-error: U+8E2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E2D");
    },
    Error,
    "encode-error: U+8E2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E2E");
    },
    Error,
    "encode-error: U+8E2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E2F");
    },
    Error,
    "encode-error: U+8E2F",
  );
  r = r && ([...ms932Encoder.encode("踰")].join(",") === "230,250"); // U+8E30
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E31");
    },
    Error,
    "encode-error: U+8E31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E32");
    },
    Error,
    "encode-error: U+8E32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E33");
    },
    Error,
    "encode-error: U+8E33",
  );
  r = r && ([...ms932Encoder.encode("踴踵")].join(",") === "230,251,230,249"); // U+8E34
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E36");
    },
    Error,
    "encode-error: U+8E36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E37");
    },
    Error,
    "encode-error: U+8E37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E38");
    },
    Error,
    "encode-error: U+8E38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E39");
    },
    Error,
    "encode-error: U+8E39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E3A");
    },
    Error,
    "encode-error: U+8E3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E3B");
    },
    Error,
    "encode-error: U+8E3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E3C");
    },
    Error,
    "encode-error: U+8E3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E3D");
    },
    Error,
    "encode-error: U+8E3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E3E");
    },
    Error,
    "encode-error: U+8E3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E3F");
    },
    Error,
    "encode-error: U+8E3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E40");
    },
    Error,
    "encode-error: U+8E40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E41");
    },
    Error,
    "encode-error: U+8E41",
  );
  r = r && ([...ms932Encoder.encode("蹂")].join(",") === "230,248"); // U+8E42
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E43");
    },
    Error,
    "encode-error: U+8E43",
  );
  r = r && ([...ms932Encoder.encode("蹄")].join(",") === "146,251"); // U+8E44
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E45");
    },
    Error,
    "encode-error: U+8E45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E46");
    },
    Error,
    "encode-error: U+8E46",
  );
  r = r &&
    ([...ms932Encoder.encode("蹇蹈蹉蹊")].join(",") ===
      "231,64,231,68,231,65,230,252"); // U+8E47
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E4B");
    },
    Error,
    "encode-error: U+8E4B",
  );
  r = r && ([...ms932Encoder.encode("蹌")].join(",") === "231,66"); // U+8E4C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E4D");
    },
    Error,
    "encode-error: U+8E4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E4E");
    },
    Error,
    "encode-error: U+8E4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E4F");
    },
    Error,
    "encode-error: U+8E4F",
  );
  r = r && ([...ms932Encoder.encode("蹐")].join(",") === "231,67"); // U+8E50
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E51");
    },
    Error,
    "encode-error: U+8E51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E52");
    },
    Error,
    "encode-error: U+8E52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E53");
    },
    Error,
    "encode-error: U+8E53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E54");
    },
    Error,
    "encode-error: U+8E54",
  );
  r = r && ([...ms932Encoder.encode("蹕")].join(",") === "231,74"); // U+8E55
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E56");
    },
    Error,
    "encode-error: U+8E56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E57");
    },
    Error,
    "encode-error: U+8E57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E58");
    },
    Error,
    "encode-error: U+8E58",
  );
  r = r && ([...ms932Encoder.encode("蹙")].join(",") === "231,69"); // U+8E59
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E5A");
    },
    Error,
    "encode-error: U+8E5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E5B");
    },
    Error,
    "encode-error: U+8E5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E5C");
    },
    Error,
    "encode-error: U+8E5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E5D");
    },
    Error,
    "encode-error: U+8E5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E5E");
    },
    Error,
    "encode-error: U+8E5E",
  );
  r = r && ([...ms932Encoder.encode("蹟蹠")].join(",") === "144,214,231,71"); // U+8E5F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E61");
    },
    Error,
    "encode-error: U+8E61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E62");
    },
    Error,
    "encode-error: U+8E62",
  );
  r = r && ([...ms932Encoder.encode("蹣蹤")].join(",") === "231,73,231,70"); // U+8E63
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E65");
    },
    Error,
    "encode-error: U+8E65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E66");
    },
    Error,
    "encode-error: U+8E66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E67");
    },
    Error,
    "encode-error: U+8E67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E68");
    },
    Error,
    "encode-error: U+8E68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E69");
    },
    Error,
    "encode-error: U+8E69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E6A");
    },
    Error,
    "encode-error: U+8E6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E6B");
    },
    Error,
    "encode-error: U+8E6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E6C");
    },
    Error,
    "encode-error: U+8E6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E6D");
    },
    Error,
    "encode-error: U+8E6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E6E");
    },
    Error,
    "encode-error: U+8E6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E6F");
    },
    Error,
    "encode-error: U+8E6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E70");
    },
    Error,
    "encode-error: U+8E70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E71");
    },
    Error,
    "encode-error: U+8E71",
  );
  r = r && ([...ms932Encoder.encode("蹲")].join(",") === "231,76"); // U+8E72
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E73");
    },
    Error,
    "encode-error: U+8E73",
  );
  r = r && ([...ms932Encoder.encode("蹴")].join(",") === "143,82"); // U+8E74
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E75");
    },
    Error,
    "encode-error: U+8E75",
  );
  r = r && ([...ms932Encoder.encode("蹶")].join(",") === "231,75"); // U+8E76
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E77");
    },
    Error,
    "encode-error: U+8E77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E78");
    },
    Error,
    "encode-error: U+8E78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E79");
    },
    Error,
    "encode-error: U+8E79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E7A");
    },
    Error,
    "encode-error: U+8E7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E7B");
    },
    Error,
    "encode-error: U+8E7B",
  );
  r = r && ([...ms932Encoder.encode("蹼")].join(",") === "231,77"); // U+8E7C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E7D");
    },
    Error,
    "encode-error: U+8E7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E7E");
    },
    Error,
    "encode-error: U+8E7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E7F");
    },
    Error,
    "encode-error: U+8E7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E80");
    },
    Error,
    "encode-error: U+8E80",
  );
  r = r && ([...ms932Encoder.encode("躁")].join(",") === "231,78"); // U+8E81
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E82");
    },
    Error,
    "encode-error: U+8E82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E83");
    },
    Error,
    "encode-error: U+8E83",
  );
  r = r && ([...ms932Encoder.encode("躄躅")].join(",") === "231,81,231,80"); // U+8E84
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E86");
    },
    Error,
    "encode-error: U+8E86",
  );
  r = r && ([...ms932Encoder.encode("躇")].join(",") === "231,79"); // U+8E87
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E88");
    },
    Error,
    "encode-error: U+8E88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E89");
    },
    Error,
    "encode-error: U+8E89",
  );
  r = r && ([...ms932Encoder.encode("躊躋")].join(",") === "231,83,231,82"); // U+8E8A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E8C");
    },
    Error,
    "encode-error: U+8E8C",
  );
  r = r && ([...ms932Encoder.encode("躍")].join(",") === "150,244"); // U+8E8D
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E8E");
    },
    Error,
    "encode-error: U+8E8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E8F");
    },
    Error,
    "encode-error: U+8E8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E90");
    },
    Error,
    "encode-error: U+8E90",
  );
  r = r && ([...ms932Encoder.encode("躑")].join(",") === "231,85"); // U+8E91
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E92");
    },
    Error,
    "encode-error: U+8E92",
  );
  r = r && ([...ms932Encoder.encode("躓躔")].join(",") === "231,84,231,86"); // U+8E93
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E95");
    },
    Error,
    "encode-error: U+8E95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E96");
    },
    Error,
    "encode-error: U+8E96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E97");
    },
    Error,
    "encode-error: U+8E97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E98");
    },
    Error,
    "encode-error: U+8E98",
  );
  r = r && ([...ms932Encoder.encode("躙")].join(",") === "231,87"); // U+8E99
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E9A");
    },
    Error,
    "encode-error: U+8E9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E9B");
    },
    Error,
    "encode-error: U+8E9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E9C");
    },
    Error,
    "encode-error: U+8E9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E9D");
    },
    Error,
    "encode-error: U+8E9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E9E");
    },
    Error,
    "encode-error: U+8E9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8E9F");
    },
    Error,
    "encode-error: U+8E9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EA0");
    },
    Error,
    "encode-error: U+8EA0",
  );
  r = r && ([...ms932Encoder.encode("躡")].join(",") === "231,89"); // U+8EA1
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EA2");
    },
    Error,
    "encode-error: U+8EA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EA3");
    },
    Error,
    "encode-error: U+8EA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EA4");
    },
    Error,
    "encode-error: U+8EA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EA5");
    },
    Error,
    "encode-error: U+8EA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EA6");
    },
    Error,
    "encode-error: U+8EA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EA7");
    },
    Error,
    "encode-error: U+8EA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EA8");
    },
    Error,
    "encode-error: U+8EA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EA9");
    },
    Error,
    "encode-error: U+8EA9",
  );
  r = r &&
    ([...ms932Encoder.encode("躪身躬")].join(",") === "231,88,144,103,231,90"); // U+8EAA
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EAD");
    },
    Error,
    "encode-error: U+8EAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EAE");
    },
    Error,
    "encode-error: U+8EAE",
  );
  r = r &&
    ([...ms932Encoder.encode("躯躰躱")].join(",") === "139,235,231,91,231,93"); // U+8EAF
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EB2");
    },
    Error,
    "encode-error: U+8EB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EB3");
    },
    Error,
    "encode-error: U+8EB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EB4");
    },
    Error,
    "encode-error: U+8EB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EB5");
    },
    Error,
    "encode-error: U+8EB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EB6");
    },
    Error,
    "encode-error: U+8EB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EB7");
    },
    Error,
    "encode-error: U+8EB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EB8");
    },
    Error,
    "encode-error: U+8EB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EB9");
    },
    Error,
    "encode-error: U+8EB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EBA");
    },
    Error,
    "encode-error: U+8EBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EBB");
    },
    Error,
    "encode-error: U+8EBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EBC");
    },
    Error,
    "encode-error: U+8EBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EBD");
    },
    Error,
    "encode-error: U+8EBD",
  );
  r = r && ([...ms932Encoder.encode("躾")].join(",") === "231,94"); // U+8EBE
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EBF");
    },
    Error,
    "encode-error: U+8EBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EC0");
    },
    Error,
    "encode-error: U+8EC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EC1");
    },
    Error,
    "encode-error: U+8EC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EC2");
    },
    Error,
    "encode-error: U+8EC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EC3");
    },
    Error,
    "encode-error: U+8EC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EC4");
    },
    Error,
    "encode-error: U+8EC4",
  );
  r = r && ([...ms932Encoder.encode("軅軆")].join(",") === "231,95,231,92"); // U+8EC5
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EC7");
    },
    Error,
    "encode-error: U+8EC7",
  );
  r = r && ([...ms932Encoder.encode("軈")].join(",") === "231,96"); // U+8EC8
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EC9");
    },
    Error,
    "encode-error: U+8EC9",
  );
  r = r &&
    ([...ms932Encoder.encode("車軋軌軍")].join(",") ===
      "142,212,231,97,139,79,140,82"); // U+8ECA
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ECE");
    },
    Error,
    "encode-error: U+8ECE",
  );
  r = r && ([...ms932Encoder.encode("軏")].join(",") === "251,178"); // U+8ECF
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ED0");
    },
    Error,
    "encode-error: U+8ED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ED1");
    },
    Error,
    "encode-error: U+8ED1",
  );
  r = r && ([...ms932Encoder.encode("軒")].join(",") === "140,172"); // U+8ED2
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ED3");
    },
    Error,
    "encode-error: U+8ED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ED4");
    },
    Error,
    "encode-error: U+8ED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ED5");
    },
    Error,
    "encode-error: U+8ED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ED6");
    },
    Error,
    "encode-error: U+8ED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ED7");
    },
    Error,
    "encode-error: U+8ED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ED8");
    },
    Error,
    "encode-error: U+8ED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ED9");
    },
    Error,
    "encode-error: U+8ED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EDA");
    },
    Error,
    "encode-error: U+8EDA",
  );
  r = r && ([...ms932Encoder.encode("軛")].join(",") === "231,98"); // U+8EDB
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EDC");
    },
    Error,
    "encode-error: U+8EDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EDD");
    },
    Error,
    "encode-error: U+8EDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EDE");
    },
    Error,
    "encode-error: U+8EDE",
  );
  r = r && ([...ms932Encoder.encode("軟")].join(",") === "147,238"); // U+8EDF
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EE0");
    },
    Error,
    "encode-error: U+8EE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EE1");
    },
    Error,
    "encode-error: U+8EE1",
  );
  r = r && ([...ms932Encoder.encode("転軣")].join(",") === "147,93,231,99"); // U+8EE2
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EE4");
    },
    Error,
    "encode-error: U+8EE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EE5");
    },
    Error,
    "encode-error: U+8EE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EE6");
    },
    Error,
    "encode-error: U+8EE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EE7");
    },
    Error,
    "encode-error: U+8EE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EE8");
    },
    Error,
    "encode-error: U+8EE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EE9");
    },
    Error,
    "encode-error: U+8EE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EEA");
    },
    Error,
    "encode-error: U+8EEA",
  );
  r = r && ([...ms932Encoder.encode("軫")].join(",") === "231,102"); // U+8EEB
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EEC");
    },
    Error,
    "encode-error: U+8EEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EED");
    },
    Error,
    "encode-error: U+8EED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EEE");
    },
    Error,
    "encode-error: U+8EEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EEF");
    },
    Error,
    "encode-error: U+8EEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EF0");
    },
    Error,
    "encode-error: U+8EF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EF1");
    },
    Error,
    "encode-error: U+8EF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EF2");
    },
    Error,
    "encode-error: U+8EF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EF3");
    },
    Error,
    "encode-error: U+8EF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EF4");
    },
    Error,
    "encode-error: U+8EF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EF5");
    },
    Error,
    "encode-error: U+8EF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EF6");
    },
    Error,
    "encode-error: U+8EF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EF7");
    },
    Error,
    "encode-error: U+8EF7",
  );
  r = r && ([...ms932Encoder.encode("軸")].join(",") === "142,178"); // U+8EF8
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EF9");
    },
    Error,
    "encode-error: U+8EF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EFA");
    },
    Error,
    "encode-error: U+8EFA",
  );
  r = r &&
    ([...ms932Encoder.encode("軻軼軽軾")].join(",") ===
      "231,101,231,100,140,121,231,103"); // U+8EFB
  assertThrows(
    () => {
      ms932Encoder.encode("\u8EFF");
    },
    Error,
    "encode-error: U+8EFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F00");
    },
    Error,
    "encode-error: U+8F00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F01");
    },
    Error,
    "encode-error: U+8F01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F02");
    },
    Error,
    "encode-error: U+8F02",
  );
  r = r && ([...ms932Encoder.encode("較")].join(",") === "138,114"); // U+8F03
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F04");
    },
    Error,
    "encode-error: U+8F04",
  );
  r = r && ([...ms932Encoder.encode("輅")].join(",") === "231,105"); // U+8F05
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F06");
    },
    Error,
    "encode-error: U+8F06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F07");
    },
    Error,
    "encode-error: U+8F07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F08");
    },
    Error,
    "encode-error: U+8F08",
  );
  r = r && ([...ms932Encoder.encode("載輊")].join(",") === "141,218,231,104"); // U+8F09
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F0B");
    },
    Error,
    "encode-error: U+8F0B",
  );
  r = r && ([...ms932Encoder.encode("輌")].join(",") === "231,113"); // U+8F0C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F0D");
    },
    Error,
    "encode-error: U+8F0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F0E");
    },
    Error,
    "encode-error: U+8F0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F0F");
    },
    Error,
    "encode-error: U+8F0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F10");
    },
    Error,
    "encode-error: U+8F10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F11");
    },
    Error,
    "encode-error: U+8F11",
  );
  r = r &&
    ([...ms932Encoder.encode("輒輓輔輕")].join(",") ===
      "231,107,231,109,149,227,231,106"); // U+8F12
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F16");
    },
    Error,
    "encode-error: U+8F16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F17");
    },
    Error,
    "encode-error: U+8F17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F18");
    },
    Error,
    "encode-error: U+8F18",
  );
  r = r && ([...ms932Encoder.encode("輙")].join(",") === "231,108"); // U+8F19
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F1A");
    },
    Error,
    "encode-error: U+8F1A",
  );
  r = r &&
    ([...ms932Encoder.encode("輛輜輝")].join(",") === "231,112,231,110,139,80"); // U+8F1B
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F1E");
    },
    Error,
    "encode-error: U+8F1E",
  );
  r = r && ([...ms932Encoder.encode("輟")].join(",") === "231,111"); // U+8F1F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F20");
    },
    Error,
    "encode-error: U+8F20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F21");
    },
    Error,
    "encode-error: U+8F21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F22");
    },
    Error,
    "encode-error: U+8F22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F23");
    },
    Error,
    "encode-error: U+8F23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F24");
    },
    Error,
    "encode-error: U+8F24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F25");
    },
    Error,
    "encode-error: U+8F25",
  );
  r = r && ([...ms932Encoder.encode("輦")].join(",") === "231,114"); // U+8F26
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F27");
    },
    Error,
    "encode-error: U+8F27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F28");
    },
    Error,
    "encode-error: U+8F28",
  );
  r = r && ([...ms932Encoder.encode("輩輪")].join(",") === "148,121,151,214"); // U+8F29
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F2B");
    },
    Error,
    "encode-error: U+8F2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F2C");
    },
    Error,
    "encode-error: U+8F2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F2D");
    },
    Error,
    "encode-error: U+8F2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F2E");
    },
    Error,
    "encode-error: U+8F2E",
  );
  r = r && ([...ms932Encoder.encode("輯")].join(",") === "143,83"); // U+8F2F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F30");
    },
    Error,
    "encode-error: U+8F30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F31");
    },
    Error,
    "encode-error: U+8F31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F32");
    },
    Error,
    "encode-error: U+8F32",
  );
  r = r && ([...ms932Encoder.encode("輳")].join(",") === "231,115"); // U+8F33
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F34");
    },
    Error,
    "encode-error: U+8F34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F35");
    },
    Error,
    "encode-error: U+8F35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F36");
    },
    Error,
    "encode-error: U+8F36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F37");
    },
    Error,
    "encode-error: U+8F37",
  );
  r = r && ([...ms932Encoder.encode("輸輹")].join(",") === "151,65,231,117"); // U+8F38
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F3A");
    },
    Error,
    "encode-error: U+8F3A",
  );
  r = r && ([...ms932Encoder.encode("輻")].join(",") === "231,116"); // U+8F3B
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F3C");
    },
    Error,
    "encode-error: U+8F3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F3D");
    },
    Error,
    "encode-error: U+8F3D",
  );
  r = r && ([...ms932Encoder.encode("輾輿")].join(",") === "231,120,151,96"); // U+8F3E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F40");
    },
    Error,
    "encode-error: U+8F40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F41");
    },
    Error,
    "encode-error: U+8F41",
  );
  r = r && ([...ms932Encoder.encode("轂")].join(",") === "231,119"); // U+8F42
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F43");
    },
    Error,
    "encode-error: U+8F43",
  );
  r = r &&
    ([...ms932Encoder.encode("轄轅轆")].join(",") ===
      "138,141,231,118,231,123"); // U+8F44
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F47");
    },
    Error,
    "encode-error: U+8F47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F48");
    },
    Error,
    "encode-error: U+8F48",
  );
  r = r && ([...ms932Encoder.encode("轉")].join(",") === "231,122"); // U+8F49
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F4A");
    },
    Error,
    "encode-error: U+8F4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F4B");
    },
    Error,
    "encode-error: U+8F4B",
  );
  r = r &&
    ([...ms932Encoder.encode("轌轍轎")].join(",") === "231,121,147,81,231,124"); // U+8F4C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F4F");
    },
    Error,
    "encode-error: U+8F4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F50");
    },
    Error,
    "encode-error: U+8F50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F51");
    },
    Error,
    "encode-error: U+8F51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F52");
    },
    Error,
    "encode-error: U+8F52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F53");
    },
    Error,
    "encode-error: U+8F53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F54");
    },
    Error,
    "encode-error: U+8F54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F55");
    },
    Error,
    "encode-error: U+8F55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F56");
    },
    Error,
    "encode-error: U+8F56",
  );
  r = r && ([...ms932Encoder.encode("轗")].join(",") === "231,125"); // U+8F57
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F58");
    },
    Error,
    "encode-error: U+8F58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F59");
    },
    Error,
    "encode-error: U+8F59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F5A");
    },
    Error,
    "encode-error: U+8F5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F5B");
    },
    Error,
    "encode-error: U+8F5B",
  );
  r = r && ([...ms932Encoder.encode("轜")].join(",") === "231,126"); // U+8F5C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F5D");
    },
    Error,
    "encode-error: U+8F5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F5E");
    },
    Error,
    "encode-error: U+8F5E",
  );
  r = r && ([...ms932Encoder.encode("轟")].join(",") === "141,140"); // U+8F5F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F60");
    },
    Error,
    "encode-error: U+8F60",
  );
  r = r &&
    ([...ms932Encoder.encode("轡轢轣轤")].join(",") ===
      "140,68,231,128,231,129,231,130"); // U+8F61
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F65");
    },
    Error,
    "encode-error: U+8F65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F66");
    },
    Error,
    "encode-error: U+8F66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F67");
    },
    Error,
    "encode-error: U+8F67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F68");
    },
    Error,
    "encode-error: U+8F68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F69");
    },
    Error,
    "encode-error: U+8F69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F6A");
    },
    Error,
    "encode-error: U+8F6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F6B");
    },
    Error,
    "encode-error: U+8F6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F6C");
    },
    Error,
    "encode-error: U+8F6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F6D");
    },
    Error,
    "encode-error: U+8F6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F6E");
    },
    Error,
    "encode-error: U+8F6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F6F");
    },
    Error,
    "encode-error: U+8F6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F70");
    },
    Error,
    "encode-error: U+8F70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F71");
    },
    Error,
    "encode-error: U+8F71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F72");
    },
    Error,
    "encode-error: U+8F72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F73");
    },
    Error,
    "encode-error: U+8F73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F74");
    },
    Error,
    "encode-error: U+8F74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F75");
    },
    Error,
    "encode-error: U+8F75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F76");
    },
    Error,
    "encode-error: U+8F76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F77");
    },
    Error,
    "encode-error: U+8F77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F78");
    },
    Error,
    "encode-error: U+8F78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F79");
    },
    Error,
    "encode-error: U+8F79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F7A");
    },
    Error,
    "encode-error: U+8F7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F7B");
    },
    Error,
    "encode-error: U+8F7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F7C");
    },
    Error,
    "encode-error: U+8F7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F7D");
    },
    Error,
    "encode-error: U+8F7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F7E");
    },
    Error,
    "encode-error: U+8F7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F7F");
    },
    Error,
    "encode-error: U+8F7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F80");
    },
    Error,
    "encode-error: U+8F80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F81");
    },
    Error,
    "encode-error: U+8F81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F82");
    },
    Error,
    "encode-error: U+8F82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F83");
    },
    Error,
    "encode-error: U+8F83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F84");
    },
    Error,
    "encode-error: U+8F84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F85");
    },
    Error,
    "encode-error: U+8F85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F86");
    },
    Error,
    "encode-error: U+8F86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F87");
    },
    Error,
    "encode-error: U+8F87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F88");
    },
    Error,
    "encode-error: U+8F88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F89");
    },
    Error,
    "encode-error: U+8F89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F8A");
    },
    Error,
    "encode-error: U+8F8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F8B");
    },
    Error,
    "encode-error: U+8F8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F8C");
    },
    Error,
    "encode-error: U+8F8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F8D");
    },
    Error,
    "encode-error: U+8F8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F8E");
    },
    Error,
    "encode-error: U+8F8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F8F");
    },
    Error,
    "encode-error: U+8F8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F90");
    },
    Error,
    "encode-error: U+8F90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F91");
    },
    Error,
    "encode-error: U+8F91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F92");
    },
    Error,
    "encode-error: U+8F92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F93");
    },
    Error,
    "encode-error: U+8F93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F94");
    },
    Error,
    "encode-error: U+8F94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F95");
    },
    Error,
    "encode-error: U+8F95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F96");
    },
    Error,
    "encode-error: U+8F96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F97");
    },
    Error,
    "encode-error: U+8F97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F98");
    },
    Error,
    "encode-error: U+8F98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F99");
    },
    Error,
    "encode-error: U+8F99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F9A");
    },
    Error,
    "encode-error: U+8F9A",
  );
  r = r && ([...ms932Encoder.encode("辛辜")].join(",") === "144,104,231,131"); // U+8F9B
  assertThrows(
    () => {
      ms932Encoder.encode("\u8F9D");
    },
    Error,
    "encode-error: U+8F9D",
  );
  r = r && ([...ms932Encoder.encode("辞辟")].join(",") === "142,171,231,132"); // U+8F9E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FA0");
    },
    Error,
    "encode-error: U+8FA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FA1");
    },
    Error,
    "encode-error: U+8FA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FA2");
    },
    Error,
    "encode-error: U+8FA2",
  );
  r = r && ([...ms932Encoder.encode("辣")].join(",") === "231,133"); // U+8FA3
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FA4");
    },
    Error,
    "encode-error: U+8FA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FA5");
    },
    Error,
    "encode-error: U+8FA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FA6");
    },
    Error,
    "encode-error: U+8FA6",
  );
  r = r && ([...ms932Encoder.encode("辧辨")].join(",") === "153,159,153,158"); // U+8FA7
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FA9");
    },
    Error,
    "encode-error: U+8FA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FAA");
    },
    Error,
    "encode-error: U+8FAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FAB");
    },
    Error,
    "encode-error: U+8FAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FAC");
    },
    Error,
    "encode-error: U+8FAC",
  );
  r = r &&
    ([...ms932Encoder.encode("辭辮辯辰辱農")].join(",") ===
      "231,134,227,144,231,135,146,67,144,74,148,95"); // U+8FAD
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FB3");
    },
    Error,
    "encode-error: U+8FB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FB4");
    },
    Error,
    "encode-error: U+8FB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FB5");
    },
    Error,
    "encode-error: U+8FB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FB6");
    },
    Error,
    "encode-error: U+8FB6",
  );
  r = r && ([...ms932Encoder.encode("辷")].join(",") === "231,136"); // U+8FB7
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FB8");
    },
    Error,
    "encode-error: U+8FB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FB9");
    },
    Error,
    "encode-error: U+8FB9",
  );
  r = r &&
    ([...ms932Encoder.encode("辺辻込")].join(",") ===
      "149,211,146,210,141,158"); // U+8FBA
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FBD");
    },
    Error,
    "encode-error: U+8FBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FBE");
    },
    Error,
    "encode-error: U+8FBE",
  );
  r = r && ([...ms932Encoder.encode("辿")].join(",") === "146,72"); // U+8FBF
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FC0");
    },
    Error,
    "encode-error: U+8FC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FC1");
    },
    Error,
    "encode-error: U+8FC1",
  );
  r = r && ([...ms932Encoder.encode("迂")].join(",") === "137,73"); // U+8FC2
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FC3");
    },
    Error,
    "encode-error: U+8FC3",
  );
  r = r && ([...ms932Encoder.encode("迄迅")].join(",") === "150,152,144,118"); // U+8FC4
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FC6");
    },
    Error,
    "encode-error: U+8FC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FC7");
    },
    Error,
    "encode-error: U+8FC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FC8");
    },
    Error,
    "encode-error: U+8FC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FC9");
    },
    Error,
    "encode-error: U+8FC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FCA");
    },
    Error,
    "encode-error: U+8FCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FCB");
    },
    Error,
    "encode-error: U+8FCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FCC");
    },
    Error,
    "encode-error: U+8FCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FCD");
    },
    Error,
    "encode-error: U+8FCD",
  );
  r = r && ([...ms932Encoder.encode("迎")].join(",") === "140,125"); // U+8FCE
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FCF");
    },
    Error,
    "encode-error: U+8FCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FD0");
    },
    Error,
    "encode-error: U+8FD0",
  );
  r = r && ([...ms932Encoder.encode("近")].join(",") === "139,223"); // U+8FD1
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FD2");
    },
    Error,
    "encode-error: U+8FD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FD3");
    },
    Error,
    "encode-error: U+8FD3",
  );
  r = r && ([...ms932Encoder.encode("返")].join(",") === "149,212"); // U+8FD4
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FD5");
    },
    Error,
    "encode-error: U+8FD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FD6");
    },
    Error,
    "encode-error: U+8FD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FD7");
    },
    Error,
    "encode-error: U+8FD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FD8");
    },
    Error,
    "encode-error: U+8FD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FD9");
    },
    Error,
    "encode-error: U+8FD9",
  );
  r = r && ([...ms932Encoder.encode("迚")].join(",") === "231,137"); // U+8FDA
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FDB");
    },
    Error,
    "encode-error: U+8FDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FDC");
    },
    Error,
    "encode-error: U+8FDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FDD");
    },
    Error,
    "encode-error: U+8FDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FDE");
    },
    Error,
    "encode-error: U+8FDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FDF");
    },
    Error,
    "encode-error: U+8FDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FE0");
    },
    Error,
    "encode-error: U+8FE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FE1");
    },
    Error,
    "encode-error: U+8FE1",
  );
  r = r && ([...ms932Encoder.encode("迢")].join(",") === "231,139"); // U+8FE2
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FE3");
    },
    Error,
    "encode-error: U+8FE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FE4");
    },
    Error,
    "encode-error: U+8FE4",
  );
  r = r && ([...ms932Encoder.encode("迥迦")].join(",") === "231,138,137,222"); // U+8FE5
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FE7");
    },
    Error,
    "encode-error: U+8FE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FE8");
    },
    Error,
    "encode-error: U+8FE8",
  );
  r = r &&
    ([...ms932Encoder.encode("迩迪迫")].join(",") ===
      "147,244,231,140,148,151"); // U+8FE9
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FEC");
    },
    Error,
    "encode-error: U+8FEC",
  );
  r = r && ([...ms932Encoder.encode("迭")].join(",") === "147,82"); // U+8FED
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FEE");
    },
    Error,
    "encode-error: U+8FEE",
  );
  r = r && ([...ms932Encoder.encode("迯述")].join(",") === "231,141,143,113"); // U+8FEF
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FF1");
    },
    Error,
    "encode-error: U+8FF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FF2");
    },
    Error,
    "encode-error: U+8FF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FF3");
    },
    Error,
    "encode-error: U+8FF3",
  );
  r = r && ([...ms932Encoder.encode("迴")].join(",") === "231,143"); // U+8FF4
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FF5");
    },
    Error,
    "encode-error: U+8FF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FF6");
    },
    Error,
    "encode-error: U+8FF6",
  );
  r = r &&
    ([...ms932Encoder.encode("迷迸迹迺")].join(",") ===
      "150,192,231,158,231,145,231,146"); // U+8FF7
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FFB");
    },
    Error,
    "encode-error: U+8FFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FFC");
    },
    Error,
    "encode-error: U+8FFC",
  );
  r = r && ([...ms932Encoder.encode("追")].join(",") === "146,199"); // U+8FFD
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FFE");
    },
    Error,
    "encode-error: U+8FFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8FFF");
    },
    Error,
    "encode-error: U+8FFF",
  );

  assertStrictEquals(r, true);
});
