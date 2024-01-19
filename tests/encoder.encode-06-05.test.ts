import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+5400-U+57FF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u5400");
    },
    Error,
    "encode-error: U+5400",
  );
  r = r && ([...ms932Encoder.encode("吁")].join(",") === "153,220"); // U+5401
  assertThrows(
    () => {
      ms932Encoder.encode("\u5402");
    },
    Error,
    "encode-error: U+5402",
  );
  r = r && ([...ms932Encoder.encode("吃各")].join(",") === "139,104,138,101"); // U+5403
  assertThrows(
    () => {
      ms932Encoder.encode("\u5405");
    },
    Error,
    "encode-error: U+5405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5406");
    },
    Error,
    "encode-error: U+5406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5407");
    },
    Error,
    "encode-error: U+5407",
  );
  r = r &&
    ([...ms932Encoder.encode("合吉吊吋同名后吏吐向")].join(",") ===
      "141,135,139,103,146,221,137,68,147,175,150,188,141,64,151,153,147,102,140,252"); // U+5408
  assertThrows(
    () => {
      ms932Encoder.encode("\u5412");
    },
    Error,
    "encode-error: U+5412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5413");
    },
    Error,
    "encode-error: U+5413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5414");
    },
    Error,
    "encode-error: U+5414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5415");
    },
    Error,
    "encode-error: U+5415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5416");
    },
    Error,
    "encode-error: U+5416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5417");
    },
    Error,
    "encode-error: U+5417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5418");
    },
    Error,
    "encode-error: U+5418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5419");
    },
    Error,
    "encode-error: U+5419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u541A");
    },
    Error,
    "encode-error: U+541A",
  );
  r = r && ([...ms932Encoder.encode("君")].join(",") === "140,78"); // U+541B
  assertThrows(
    () => {
      ms932Encoder.encode("\u541C");
    },
    Error,
    "encode-error: U+541C",
  );
  r = r && ([...ms932Encoder.encode("吝")].join(",") === "153,229"); // U+541D
  assertThrows(
    () => {
      ms932Encoder.encode("\u541E");
    },
    Error,
    "encode-error: U+541E",
  );
  r = r && ([...ms932Encoder.encode("吟吠")].join(",") === "139,225,150,105"); // U+541F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5421");
    },
    Error,
    "encode-error: U+5421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5422");
    },
    Error,
    "encode-error: U+5422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5423");
    },
    Error,
    "encode-error: U+5423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5424");
    },
    Error,
    "encode-error: U+5424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5425");
    },
    Error,
    "encode-error: U+5425",
  );
  r = r && ([...ms932Encoder.encode("否")].join(",") === "148,219"); // U+5426
  assertThrows(
    () => {
      ms932Encoder.encode("\u5427");
    },
    Error,
    "encode-error: U+5427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5428");
    },
    Error,
    "encode-error: U+5428",
  );
  r = r && ([...ms932Encoder.encode("吩")].join(",") === "153,228"); // U+5429
  assertThrows(
    () => {
      ms932Encoder.encode("\u542A");
    },
    Error,
    "encode-error: U+542A",
  );
  r = r &&
    ([...ms932Encoder.encode("含听吭吮")].join(",") ===
      "138,220,153,223,153,224,153,226"); // U+542B
  assertThrows(
    () => {
      ms932Encoder.encode("\u542F");
    },
    Error,
    "encode-error: U+542F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5430");
    },
    Error,
    "encode-error: U+5430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5431");
    },
    Error,
    "encode-error: U+5431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5432");
    },
    Error,
    "encode-error: U+5432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5433");
    },
    Error,
    "encode-error: U+5433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5434");
    },
    Error,
    "encode-error: U+5434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5435");
    },
    Error,
    "encode-error: U+5435",
  );
  r = r && ([...ms932Encoder.encode("吶")].join(",") === "153,227"); // U+5436
  assertThrows(
    () => {
      ms932Encoder.encode("\u5437");
    },
    Error,
    "encode-error: U+5437",
  );
  r = r && ([...ms932Encoder.encode("吸吹")].join(",") === "139,122,144,129"); // U+5438
  assertThrows(
    () => {
      ms932Encoder.encode("\u543A");
    },
    Error,
    "encode-error: U+543A",
  );
  r = r &&
    ([...ms932Encoder.encode("吻吼吽吾")].join(",") ===
      "149,171,153,225,153,221,140,225"); // U+543B
  assertThrows(
    () => {
      ms932Encoder.encode("\u543F");
    },
    Error,
    "encode-error: U+543F",
  );
  r = r && ([...ms932Encoder.encode("呀")].join(",") === "153,222"); // U+5440
  assertThrows(
    () => {
      ms932Encoder.encode("\u5441");
    },
    Error,
    "encode-error: U+5441",
  );
  r = r && ([...ms932Encoder.encode("呂")].join(",") === "152,67"); // U+5442
  assertThrows(
    () => {
      ms932Encoder.encode("\u5443");
    },
    Error,
    "encode-error: U+5443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5444");
    },
    Error,
    "encode-error: U+5444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5445");
    },
    Error,
    "encode-error: U+5445",
  );
  r = r && ([...ms932Encoder.encode("呆")].join(",") === "149,240"); // U+5446
  assertThrows(
    () => {
      ms932Encoder.encode("\u5447");
    },
    Error,
    "encode-error: U+5447",
  );
  r = r &&
    ([...ms932Encoder.encode("呈呉告")].join(",") ===
      "146,230,140,224,141,144"); // U+5448
  assertThrows(
    () => {
      ms932Encoder.encode("\u544B");
    },
    Error,
    "encode-error: U+544B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u544C");
    },
    Error,
    "encode-error: U+544C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u544D");
    },
    Error,
    "encode-error: U+544D",
  );
  r = r && ([...ms932Encoder.encode("呎")].join(",") === "153,230"); // U+544E
  assertThrows(
    () => {
      ms932Encoder.encode("\u544F");
    },
    Error,
    "encode-error: U+544F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5450");
    },
    Error,
    "encode-error: U+5450",
  );
  r = r && ([...ms932Encoder.encode("呑")].join(",") === "147,219"); // U+5451
  assertThrows(
    () => {
      ms932Encoder.encode("\u5452");
    },
    Error,
    "encode-error: U+5452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5453");
    },
    Error,
    "encode-error: U+5453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5454");
    },
    Error,
    "encode-error: U+5454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5455");
    },
    Error,
    "encode-error: U+5455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5456");
    },
    Error,
    "encode-error: U+5456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5457");
    },
    Error,
    "encode-error: U+5457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5458");
    },
    Error,
    "encode-error: U+5458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5459");
    },
    Error,
    "encode-error: U+5459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u545A");
    },
    Error,
    "encode-error: U+545A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u545B");
    },
    Error,
    "encode-error: U+545B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u545C");
    },
    Error,
    "encode-error: U+545C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u545D");
    },
    Error,
    "encode-error: U+545D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u545E");
    },
    Error,
    "encode-error: U+545E",
  );
  r = r && ([...ms932Encoder.encode("呟")].join(",") === "153,234"); // U+545F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5460");
    },
    Error,
    "encode-error: U+5460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5461");
    },
    Error,
    "encode-error: U+5461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5462");
    },
    Error,
    "encode-error: U+5462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5463");
    },
    Error,
    "encode-error: U+5463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5464");
    },
    Error,
    "encode-error: U+5464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5465");
    },
    Error,
    "encode-error: U+5465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5466");
    },
    Error,
    "encode-error: U+5466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5467");
    },
    Error,
    "encode-error: U+5467",
  );
  r = r && ([...ms932Encoder.encode("周")].join(",") === "142,252"); // U+5468
  assertThrows(
    () => {
      ms932Encoder.encode("\u5469");
    },
    Error,
    "encode-error: U+5469",
  );
  r = r && ([...ms932Encoder.encode("呪")].join(",") === "142,244"); // U+546A
  assertThrows(
    () => {
      ms932Encoder.encode("\u546B");
    },
    Error,
    "encode-error: U+546B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u546C");
    },
    Error,
    "encode-error: U+546C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u546D");
    },
    Error,
    "encode-error: U+546D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u546E");
    },
    Error,
    "encode-error: U+546E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u546F");
    },
    Error,
    "encode-error: U+546F",
  );
  r = r && ([...ms932Encoder.encode("呰呱")].join(",") === "153,237,153,235"); // U+5470
  assertThrows(
    () => {
      ms932Encoder.encode("\u5472");
    },
    Error,
    "encode-error: U+5472",
  );
  r = r && ([...ms932Encoder.encode("味")].join(",") === "150,161"); // U+5473
  assertThrows(
    () => {
      ms932Encoder.encode("\u5474");
    },
    Error,
    "encode-error: U+5474",
  );
  r = r &&
    ([...ms932Encoder.encode("呵呶呷")].join(",") ===
      "153,232,153,241,153,236"); // U+5475
  assertThrows(
    () => {
      ms932Encoder.encode("\u5478");
    },
    Error,
    "encode-error: U+5478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5479");
    },
    Error,
    "encode-error: U+5479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u547A");
    },
    Error,
    "encode-error: U+547A",
  );
  r = r &&
    ([...ms932Encoder.encode("呻呼命")].join(",") ===
      "153,239,140,196,150,189"); // U+547B
  assertThrows(
    () => {
      ms932Encoder.encode("\u547E");
    },
    Error,
    "encode-error: U+547E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u547F");
    },
    Error,
    "encode-error: U+547F",
  );
  r = r && ([...ms932Encoder.encode("咀")].join(",") === "153,240"); // U+5480
  assertThrows(
    () => {
      ms932Encoder.encode("\u5481");
    },
    Error,
    "encode-error: U+5481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5482");
    },
    Error,
    "encode-error: U+5482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5483");
    },
    Error,
    "encode-error: U+5483",
  );
  r = r && ([...ms932Encoder.encode("咄")].join(",") === "153,242"); // U+5484
  assertThrows(
    () => {
      ms932Encoder.encode("\u5485");
    },
    Error,
    "encode-error: U+5485",
  );
  r = r && ([...ms932Encoder.encode("咆")].join(",") === "153,244"); // U+5486
  assertThrows(
    () => {
      ms932Encoder.encode("\u5487");
    },
    Error,
    "encode-error: U+5487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5488");
    },
    Error,
    "encode-error: U+5488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5489");
    },
    Error,
    "encode-error: U+5489",
  );
  r = r &&
    ([...ms932Encoder.encode("咊咋和")].join(",") === "250,146,141,238,152,97"); // U+548A
  assertThrows(
    () => {
      ms932Encoder.encode("\u548D");
    },
    Error,
    "encode-error: U+548D",
  );
  r = r &&
    ([...ms932Encoder.encode("咎咏咐")].join(",") ===
      "153,233,153,231,153,243"); // U+548E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5491");
    },
    Error,
    "encode-error: U+5491",
  );
  r = r && ([...ms932Encoder.encode("咒")].join(",") === "153,238"); // U+5492
  assertThrows(
    () => {
      ms932Encoder.encode("\u5493");
    },
    Error,
    "encode-error: U+5493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5494");
    },
    Error,
    "encode-error: U+5494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5495");
    },
    Error,
    "encode-error: U+5495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5496");
    },
    Error,
    "encode-error: U+5496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5497");
    },
    Error,
    "encode-error: U+5497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5498");
    },
    Error,
    "encode-error: U+5498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5499");
    },
    Error,
    "encode-error: U+5499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u549A");
    },
    Error,
    "encode-error: U+549A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u549B");
    },
    Error,
    "encode-error: U+549B",
  );
  r = r && ([...ms932Encoder.encode("咜")].join(",") === "250,145"); // U+549C
  assertThrows(
    () => {
      ms932Encoder.encode("\u549D");
    },
    Error,
    "encode-error: U+549D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u549E");
    },
    Error,
    "encode-error: U+549E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u549F");
    },
    Error,
    "encode-error: U+549F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54A0");
    },
    Error,
    "encode-error: U+54A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54A1");
    },
    Error,
    "encode-error: U+54A1",
  );
  r = r && ([...ms932Encoder.encode("咢")].join(",") === "153,246"); // U+54A2
  assertThrows(
    () => {
      ms932Encoder.encode("\u54A3");
    },
    Error,
    "encode-error: U+54A3",
  );
  r = r && ([...ms932Encoder.encode("咤咥")].join(",") === "154,66,153,248"); // U+54A4
  assertThrows(
    () => {
      ms932Encoder.encode("\u54A6");
    },
    Error,
    "encode-error: U+54A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54A7");
    },
    Error,
    "encode-error: U+54A7",
  );
  r = r && ([...ms932Encoder.encode("咨咩")].join(",") === "153,252,250,147"); // U+54A8
  assertThrows(
    () => {
      ms932Encoder.encode("\u54AA");
    },
    Error,
    "encode-error: U+54AA",
  );
  r = r && ([...ms932Encoder.encode("咫咬")].join(",") === "154,64,153,249"); // U+54AB
  assertThrows(
    () => {
      ms932Encoder.encode("\u54AD");
    },
    Error,
    "encode-error: U+54AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54AE");
    },
    Error,
    "encode-error: U+54AE",
  );
  r = r && ([...ms932Encoder.encode("咯")].join(",") === "154,93"); // U+54AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u54B0");
    },
    Error,
    "encode-error: U+54B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54B1");
    },
    Error,
    "encode-error: U+54B1",
  );
  r = r && ([...ms932Encoder.encode("咲咳")].join(",") === "141,231,138,80"); // U+54B2
  assertThrows(
    () => {
      ms932Encoder.encode("\u54B4");
    },
    Error,
    "encode-error: U+54B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54B5");
    },
    Error,
    "encode-error: U+54B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54B6");
    },
    Error,
    "encode-error: U+54B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54B7");
    },
    Error,
    "encode-error: U+54B7",
  );
  r = r && ([...ms932Encoder.encode("咸")].join(",") === "153,247"); // U+54B8
  assertThrows(
    () => {
      ms932Encoder.encode("\u54B9");
    },
    Error,
    "encode-error: U+54B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54BA");
    },
    Error,
    "encode-error: U+54BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54BB");
    },
    Error,
    "encode-error: U+54BB",
  );
  r = r &&
    ([...ms932Encoder.encode("咼咽咾")].join(",") === "154,68,136,244,154,67"); // U+54BC
  assertThrows(
    () => {
      ms932Encoder.encode("\u54BF");
    },
    Error,
    "encode-error: U+54BF",
  );
  r = r &&
    ([...ms932Encoder.encode("哀品哂")].join(",") === "136,163,149,105,154,65"); // U+54C0
  assertThrows(
    () => {
      ms932Encoder.encode("\u54C3");
    },
    Error,
    "encode-error: U+54C3",
  );
  r = r && ([...ms932Encoder.encode("哄")].join(",") === "153,250"); // U+54C4
  assertThrows(
    () => {
      ms932Encoder.encode("\u54C5");
    },
    Error,
    "encode-error: U+54C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54C6");
    },
    Error,
    "encode-error: U+54C6",
  );
  r = r &&
    ([...ms932Encoder.encode("哇哈哉")].join(",") ===
      "153,245,153,251,141,198"); // U+54C7
  assertThrows(
    () => {
      ms932Encoder.encode("\u54CA");
    },
    Error,
    "encode-error: U+54CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54CB");
    },
    Error,
    "encode-error: U+54CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54CC");
    },
    Error,
    "encode-error: U+54CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54CD");
    },
    Error,
    "encode-error: U+54CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54CE");
    },
    Error,
    "encode-error: U+54CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54CF");
    },
    Error,
    "encode-error: U+54CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54D0");
    },
    Error,
    "encode-error: U+54D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54D1");
    },
    Error,
    "encode-error: U+54D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54D2");
    },
    Error,
    "encode-error: U+54D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54D3");
    },
    Error,
    "encode-error: U+54D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54D4");
    },
    Error,
    "encode-error: U+54D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54D5");
    },
    Error,
    "encode-error: U+54D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54D6");
    },
    Error,
    "encode-error: U+54D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54D7");
    },
    Error,
    "encode-error: U+54D7",
  );
  r = r && ([...ms932Encoder.encode("哘")].join(",") === "154,69"); // U+54D8
  assertThrows(
    () => {
      ms932Encoder.encode("\u54D9");
    },
    Error,
    "encode-error: U+54D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54DA");
    },
    Error,
    "encode-error: U+54DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54DB");
    },
    Error,
    "encode-error: U+54DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54DC");
    },
    Error,
    "encode-error: U+54DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54DD");
    },
    Error,
    "encode-error: U+54DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54DE");
    },
    Error,
    "encode-error: U+54DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54DF");
    },
    Error,
    "encode-error: U+54DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54E0");
    },
    Error,
    "encode-error: U+54E0",
  );
  r = r && ([...ms932Encoder.encode("員哢")].join(",") === "136,245,154,78"); // U+54E1
  assertThrows(
    () => {
      ms932Encoder.encode("\u54E3");
    },
    Error,
    "encode-error: U+54E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54E4");
    },
    Error,
    "encode-error: U+54E4",
  );
  r = r && ([...ms932Encoder.encode("哥哦")].join(",") === "154,70,154,71"); // U+54E5
  assertThrows(
    () => {
      ms932Encoder.encode("\u54E7");
    },
    Error,
    "encode-error: U+54E7",
  );
  r = r && ([...ms932Encoder.encode("哨哩")].join(",") === "143,163,150,137"); // U+54E8
  assertThrows(
    () => {
      ms932Encoder.encode("\u54EA");
    },
    Error,
    "encode-error: U+54EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54EB");
    },
    Error,
    "encode-error: U+54EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54EC");
    },
    Error,
    "encode-error: U+54EC",
  );
  r = r && ([...ms932Encoder.encode("哭哮")].join(",") === "154,76,154,75"); // U+54ED
  assertThrows(
    () => {
      ms932Encoder.encode("\u54EF");
    },
    Error,
    "encode-error: U+54EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54F0");
    },
    Error,
    "encode-error: U+54F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54F1");
    },
    Error,
    "encode-error: U+54F1",
  );
  r = r && ([...ms932Encoder.encode("哲")].join(",") === "147,78"); // U+54F2
  assertThrows(
    () => {
      ms932Encoder.encode("\u54F3");
    },
    Error,
    "encode-error: U+54F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54F4");
    },
    Error,
    "encode-error: U+54F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54F5");
    },
    Error,
    "encode-error: U+54F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54F6");
    },
    Error,
    "encode-error: U+54F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54F7");
    },
    Error,
    "encode-error: U+54F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54F8");
    },
    Error,
    "encode-error: U+54F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54F9");
    },
    Error,
    "encode-error: U+54F9",
  );
  r = r && ([...ms932Encoder.encode("哺")].join(",") === "154,77"); // U+54FA
  assertThrows(
    () => {
      ms932Encoder.encode("\u54FB");
    },
    Error,
    "encode-error: U+54FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u54FC");
    },
    Error,
    "encode-error: U+54FC",
  );
  r = r && ([...ms932Encoder.encode("哽")].join(",") === "154,74"); // U+54FD
  assertThrows(
    () => {
      ms932Encoder.encode("\u54FE");
    },
    Error,
    "encode-error: U+54FE",
  );
  r = r && ([...ms932Encoder.encode("哿")].join(",") === "250,148"); // U+54FF
  assertThrows(
    () => {
      ms932Encoder.encode("\u5500");
    },
    Error,
    "encode-error: U+5500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5501");
    },
    Error,
    "encode-error: U+5501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5502");
    },
    Error,
    "encode-error: U+5502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5503");
    },
    Error,
    "encode-error: U+5503",
  );
  r = r && ([...ms932Encoder.encode("唄")].join(",") === "137,83"); // U+5504
  assertThrows(
    () => {
      ms932Encoder.encode("\u5505");
    },
    Error,
    "encode-error: U+5505",
  );
  r = r && ([...ms932Encoder.encode("唆唇")].join(",") === "141,180,144,79"); // U+5506
  assertThrows(
    () => {
      ms932Encoder.encode("\u5508");
    },
    Error,
    "encode-error: U+5508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5509");
    },
    Error,
    "encode-error: U+5509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u550A");
    },
    Error,
    "encode-error: U+550A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u550B");
    },
    Error,
    "encode-error: U+550B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u550C");
    },
    Error,
    "encode-error: U+550C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u550D");
    },
    Error,
    "encode-error: U+550D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u550E");
    },
    Error,
    "encode-error: U+550E",
  );
  r = r && ([...ms932Encoder.encode("唏唐")].join(",") === "154,72,147,130"); // U+550F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5511");
    },
    Error,
    "encode-error: U+5511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5512");
    },
    Error,
    "encode-error: U+5512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5513");
    },
    Error,
    "encode-error: U+5513",
  );
  r = r && ([...ms932Encoder.encode("唔")].join(",") === "154,73"); // U+5514
  assertThrows(
    () => {
      ms932Encoder.encode("\u5515");
    },
    Error,
    "encode-error: U+5515",
  );
  r = r && ([...ms932Encoder.encode("唖")].join(",") === "136,160"); // U+5516
  assertThrows(
    () => {
      ms932Encoder.encode("\u5517");
    },
    Error,
    "encode-error: U+5517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5518");
    },
    Error,
    "encode-error: U+5518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5519");
    },
    Error,
    "encode-error: U+5519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u551A");
    },
    Error,
    "encode-error: U+551A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u551B");
    },
    Error,
    "encode-error: U+551B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u551C");
    },
    Error,
    "encode-error: U+551C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u551D");
    },
    Error,
    "encode-error: U+551D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u551E");
    },
    Error,
    "encode-error: U+551E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u551F");
    },
    Error,
    "encode-error: U+551F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5520");
    },
    Error,
    "encode-error: U+5520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5521");
    },
    Error,
    "encode-error: U+5521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5522");
    },
    Error,
    "encode-error: U+5522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5523");
    },
    Error,
    "encode-error: U+5523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5524");
    },
    Error,
    "encode-error: U+5524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5525");
    },
    Error,
    "encode-error: U+5525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5526");
    },
    Error,
    "encode-error: U+5526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5527");
    },
    Error,
    "encode-error: U+5527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5528");
    },
    Error,
    "encode-error: U+5528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5529");
    },
    Error,
    "encode-error: U+5529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u552A");
    },
    Error,
    "encode-error: U+552A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u552B");
    },
    Error,
    "encode-error: U+552B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u552C");
    },
    Error,
    "encode-error: U+552C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u552D");
    },
    Error,
    "encode-error: U+552D",
  );
  r = r && ([...ms932Encoder.encode("售唯")].join(",") === "154,83,151,66"); // U+552E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5530");
    },
    Error,
    "encode-error: U+5530",
  );
  r = r && ([...ms932Encoder.encode("唱")].join(",") === "143,165"); // U+5531
  assertThrows(
    () => {
      ms932Encoder.encode("\u5532");
    },
    Error,
    "encode-error: U+5532",
  );
  r = r && ([...ms932Encoder.encode("唳")].join(",") === "154,89"); // U+5533
  assertThrows(
    () => {
      ms932Encoder.encode("\u5534");
    },
    Error,
    "encode-error: U+5534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5535");
    },
    Error,
    "encode-error: U+5535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5536");
    },
    Error,
    "encode-error: U+5536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5537");
    },
    Error,
    "encode-error: U+5537",
  );
  r = r && ([...ms932Encoder.encode("唸唹")].join(",") === "154,88,154,79"); // U+5538
  assertThrows(
    () => {
      ms932Encoder.encode("\u553A");
    },
    Error,
    "encode-error: U+553A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u553B");
    },
    Error,
    "encode-error: U+553B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u553C");
    },
    Error,
    "encode-error: U+553C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u553D");
    },
    Error,
    "encode-error: U+553D",
  );
  r = r && ([...ms932Encoder.encode("唾")].join(",") === "145,193"); // U+553E
  assertThrows(
    () => {
      ms932Encoder.encode("\u553F");
    },
    Error,
    "encode-error: U+553F",
  );
  r = r && ([...ms932Encoder.encode("啀")].join(",") === "154,80"); // U+5540
  assertThrows(
    () => {
      ms932Encoder.encode("\u5541");
    },
    Error,
    "encode-error: U+5541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5542");
    },
    Error,
    "encode-error: U+5542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5543");
    },
    Error,
    "encode-error: U+5543",
  );
  r = r &&
    ([...ms932Encoder.encode("啄啅商")].join(",") === "145,237,154,85,143,164"); // U+5544
  assertThrows(
    () => {
      ms932Encoder.encode("\u5547");
    },
    Error,
    "encode-error: U+5547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5548");
    },
    Error,
    "encode-error: U+5548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5549");
    },
    Error,
    "encode-error: U+5549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u554A");
    },
    Error,
    "encode-error: U+554A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u554B");
    },
    Error,
    "encode-error: U+554B",
  );
  r = r && ([...ms932Encoder.encode("啌")].join(",") === "154,82"); // U+554C
  assertThrows(
    () => {
      ms932Encoder.encode("\u554D");
    },
    Error,
    "encode-error: U+554D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u554E");
    },
    Error,
    "encode-error: U+554E",
  );
  r = r && ([...ms932Encoder.encode("問")].join(",") === "150,226"); // U+554F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5550");
    },
    Error,
    "encode-error: U+5550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5551");
    },
    Error,
    "encode-error: U+5551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5552");
    },
    Error,
    "encode-error: U+5552",
  );
  r = r && ([...ms932Encoder.encode("啓")].join(",") === "140,91"); // U+5553
  assertThrows(
    () => {
      ms932Encoder.encode("\u5554");
    },
    Error,
    "encode-error: U+5554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5555");
    },
    Error,
    "encode-error: U+5555",
  );
  r = r && ([...ms932Encoder.encode("啖啗")].join(",") === "154,86,154,87"); // U+5556
  assertThrows(
    () => {
      ms932Encoder.encode("\u5558");
    },
    Error,
    "encode-error: U+5558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5559");
    },
    Error,
    "encode-error: U+5559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u555A");
    },
    Error,
    "encode-error: U+555A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u555B");
    },
    Error,
    "encode-error: U+555B",
  );
  r = r && ([...ms932Encoder.encode("啜啝")].join(",") === "154,84,154,90"); // U+555C
  assertThrows(
    () => {
      ms932Encoder.encode("\u555E");
    },
    Error,
    "encode-error: U+555E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u555F");
    },
    Error,
    "encode-error: U+555F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5560");
    },
    Error,
    "encode-error: U+5560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5561");
    },
    Error,
    "encode-error: U+5561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5562");
    },
    Error,
    "encode-error: U+5562",
  );
  r = r && ([...ms932Encoder.encode("啣")].join(",") === "154,81"); // U+5563
  assertThrows(
    () => {
      ms932Encoder.encode("\u5564");
    },
    Error,
    "encode-error: U+5564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5565");
    },
    Error,
    "encode-error: U+5565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5566");
    },
    Error,
    "encode-error: U+5566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5567");
    },
    Error,
    "encode-error: U+5567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5568");
    },
    Error,
    "encode-error: U+5568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5569");
    },
    Error,
    "encode-error: U+5569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u556A");
    },
    Error,
    "encode-error: U+556A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u556B");
    },
    Error,
    "encode-error: U+556B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u556C");
    },
    Error,
    "encode-error: U+556C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u556D");
    },
    Error,
    "encode-error: U+556D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u556E");
    },
    Error,
    "encode-error: U+556E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u556F");
    },
    Error,
    "encode-error: U+556F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5570");
    },
    Error,
    "encode-error: U+5570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5571");
    },
    Error,
    "encode-error: U+5571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5572");
    },
    Error,
    "encode-error: U+5572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5573");
    },
    Error,
    "encode-error: U+5573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5574");
    },
    Error,
    "encode-error: U+5574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5575");
    },
    Error,
    "encode-error: U+5575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5576");
    },
    Error,
    "encode-error: U+5576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5577");
    },
    Error,
    "encode-error: U+5577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5578");
    },
    Error,
    "encode-error: U+5578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5579");
    },
    Error,
    "encode-error: U+5579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u557A");
    },
    Error,
    "encode-error: U+557A",
  );
  r = r && ([...ms932Encoder.encode("啻啼")].join(",") === "154,96,154,101"); // U+557B
  assertThrows(
    () => {
      ms932Encoder.encode("\u557D");
    },
    Error,
    "encode-error: U+557D",
  );
  r = r && ([...ms932Encoder.encode("啾")].join(",") === "154,97"); // U+557E
  assertThrows(
    () => {
      ms932Encoder.encode("\u557F");
    },
    Error,
    "encode-error: U+557F",
  );
  r = r && ([...ms932Encoder.encode("喀")].join(",") === "154,92"); // U+5580
  assertThrows(
    () => {
      ms932Encoder.encode("\u5581");
    },
    Error,
    "encode-error: U+5581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5582");
    },
    Error,
    "encode-error: U+5582",
  );
  r = r && ([...ms932Encoder.encode("喃善")].join(",") === "154,102,145,80"); // U+5583
  assertThrows(
    () => {
      ms932Encoder.encode("\u5585");
    },
    Error,
    "encode-error: U+5585",
  );
  r = r && ([...ms932Encoder.encode("喆喇")].join(",") === "250,149,154,104"); // U+5586
  assertThrows(
    () => {
      ms932Encoder.encode("\u5588");
    },
    Error,
    "encode-error: U+5588",
  );
  r = r &&
    ([...ms932Encoder.encode("喉喊喋")].join(",") === "141,65,154,94,146,157"); // U+5589
  assertThrows(
    () => {
      ms932Encoder.encode("\u558C");
    },
    Error,
    "encode-error: U+558C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u558D");
    },
    Error,
    "encode-error: U+558D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u558E");
    },
    Error,
    "encode-error: U+558E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u558F");
    },
    Error,
    "encode-error: U+558F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5590");
    },
    Error,
    "encode-error: U+5590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5591");
    },
    Error,
    "encode-error: U+5591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5592");
    },
    Error,
    "encode-error: U+5592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5593");
    },
    Error,
    "encode-error: U+5593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5594");
    },
    Error,
    "encode-error: U+5594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5595");
    },
    Error,
    "encode-error: U+5595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5596");
    },
    Error,
    "encode-error: U+5596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5597");
    },
    Error,
    "encode-error: U+5597",
  );
  r = r &&
    ([...ms932Encoder.encode("喘喙喚")].join(",") === "154,98,154,91,138,171"); // U+5598
  assertThrows(
    () => {
      ms932Encoder.encode("\u559B");
    },
    Error,
    "encode-error: U+559B",
  );
  r = r &&
    ([...ms932Encoder.encode("喜喝喞喟")].join(",") ===
      "138,236,138,133,154,99,154,95"); // U+559C
  assertThrows(
    () => {
      ms932Encoder.encode("\u55A0");
    },
    Error,
    "encode-error: U+55A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55A1");
    },
    Error,
    "encode-error: U+55A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55A2");
    },
    Error,
    "encode-error: U+55A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55A3");
    },
    Error,
    "encode-error: U+55A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55A4");
    },
    Error,
    "encode-error: U+55A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55A5");
    },
    Error,
    "encode-error: U+55A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55A6");
    },
    Error,
    "encode-error: U+55A6",
  );
  r = r &&
    ([...ms932Encoder.encode("喧喨喩喪喫喬")].join(",") ===
      "140,150,154,105,154,103,145,114,139,105,139,170"); // U+55A7
  assertThrows(
    () => {
      ms932Encoder.encode("\u55AD");
    },
    Error,
    "encode-error: U+55AD",
  );
  r = r && ([...ms932Encoder.encode("單")].join(",") === "154,100"); // U+55AE
  assertThrows(
    () => {
      ms932Encoder.encode("\u55AF");
    },
    Error,
    "encode-error: U+55AF",
  );
  r = r && ([...ms932Encoder.encode("喰")].join(",") === "139,242"); // U+55B0
  assertThrows(
    () => {
      ms932Encoder.encode("\u55B1");
    },
    Error,
    "encode-error: U+55B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55B2");
    },
    Error,
    "encode-error: U+55B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55B3");
    },
    Error,
    "encode-error: U+55B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55B4");
    },
    Error,
    "encode-error: U+55B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55B5");
    },
    Error,
    "encode-error: U+55B5",
  );
  r = r && ([...ms932Encoder.encode("営")].join(",") === "137,99"); // U+55B6
  assertThrows(
    () => {
      ms932Encoder.encode("\u55B7");
    },
    Error,
    "encode-error: U+55B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55B8");
    },
    Error,
    "encode-error: U+55B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55B9");
    },
    Error,
    "encode-error: U+55B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55BA");
    },
    Error,
    "encode-error: U+55BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55BB");
    },
    Error,
    "encode-error: U+55BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55BC");
    },
    Error,
    "encode-error: U+55BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55BD");
    },
    Error,
    "encode-error: U+55BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55BE");
    },
    Error,
    "encode-error: U+55BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55BF");
    },
    Error,
    "encode-error: U+55BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55C0");
    },
    Error,
    "encode-error: U+55C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55C1");
    },
    Error,
    "encode-error: U+55C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55C2");
    },
    Error,
    "encode-error: U+55C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55C3");
    },
    Error,
    "encode-error: U+55C3",
  );
  r = r && ([...ms932Encoder.encode("嗄嗅")].join(",") === "154,109,154,107"); // U+55C4
  assertThrows(
    () => {
      ms932Encoder.encode("\u55C6");
    },
    Error,
    "encode-error: U+55C6",
  );
  r = r && ([...ms932Encoder.encode("嗇")].join(",") === "154,165"); // U+55C7
  assertThrows(
    () => {
      ms932Encoder.encode("\u55C8");
    },
    Error,
    "encode-error: U+55C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55C9");
    },
    Error,
    "encode-error: U+55C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55CA");
    },
    Error,
    "encode-error: U+55CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55CB");
    },
    Error,
    "encode-error: U+55CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55CC");
    },
    Error,
    "encode-error: U+55CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55CD");
    },
    Error,
    "encode-error: U+55CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55CE");
    },
    Error,
    "encode-error: U+55CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55CF");
    },
    Error,
    "encode-error: U+55CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55D0");
    },
    Error,
    "encode-error: U+55D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55D1");
    },
    Error,
    "encode-error: U+55D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55D2");
    },
    Error,
    "encode-error: U+55D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55D3");
    },
    Error,
    "encode-error: U+55D3",
  );
  r = r && ([...ms932Encoder.encode("嗔")].join(",") === "154,112"); // U+55D4
  assertThrows(
    () => {
      ms932Encoder.encode("\u55D5");
    },
    Error,
    "encode-error: U+55D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55D6");
    },
    Error,
    "encode-error: U+55D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55D7");
    },
    Error,
    "encode-error: U+55D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55D8");
    },
    Error,
    "encode-error: U+55D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55D9");
    },
    Error,
    "encode-error: U+55D9",
  );
  r = r && ([...ms932Encoder.encode("嗚")].join(",") === "154,106"); // U+55DA
  assertThrows(
    () => {
      ms932Encoder.encode("\u55DB");
    },
    Error,
    "encode-error: U+55DB",
  );
  r = r && ([...ms932Encoder.encode("嗜")].join(",") === "154,110"); // U+55DC
  assertThrows(
    () => {
      ms932Encoder.encode("\u55DD");
    },
    Error,
    "encode-error: U+55DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55DE");
    },
    Error,
    "encode-error: U+55DE",
  );
  r = r && ([...ms932Encoder.encode("嗟")].join(",") === "154,108"); // U+55DF
  assertThrows(
    () => {
      ms932Encoder.encode("\u55E0");
    },
    Error,
    "encode-error: U+55E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55E1");
    },
    Error,
    "encode-error: U+55E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55E2");
    },
    Error,
    "encode-error: U+55E2",
  );
  r = r && ([...ms932Encoder.encode("嗣嗤")].join(",") === "142,107,154,111"); // U+55E3
  assertThrows(
    () => {
      ms932Encoder.encode("\u55E5");
    },
    Error,
    "encode-error: U+55E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55E6");
    },
    Error,
    "encode-error: U+55E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55E7");
    },
    Error,
    "encode-error: U+55E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55E8");
    },
    Error,
    "encode-error: U+55E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55E9");
    },
    Error,
    "encode-error: U+55E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55EA");
    },
    Error,
    "encode-error: U+55EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55EB");
    },
    Error,
    "encode-error: U+55EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55EC");
    },
    Error,
    "encode-error: U+55EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55ED");
    },
    Error,
    "encode-error: U+55ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55EE");
    },
    Error,
    "encode-error: U+55EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55EF");
    },
    Error,
    "encode-error: U+55EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55F0");
    },
    Error,
    "encode-error: U+55F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55F1");
    },
    Error,
    "encode-error: U+55F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55F2");
    },
    Error,
    "encode-error: U+55F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55F3");
    },
    Error,
    "encode-error: U+55F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55F4");
    },
    Error,
    "encode-error: U+55F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55F5");
    },
    Error,
    "encode-error: U+55F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55F6");
    },
    Error,
    "encode-error: U+55F6",
  );
  r = r && ([...ms932Encoder.encode("嗷")].join(",") === "154,114"); // U+55F7
  assertThrows(
    () => {
      ms932Encoder.encode("\u55F8");
    },
    Error,
    "encode-error: U+55F8",
  );
  r = r && ([...ms932Encoder.encode("嗹")].join(",") === "154,119"); // U+55F9
  assertThrows(
    () => {
      ms932Encoder.encode("\u55FA");
    },
    Error,
    "encode-error: U+55FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55FB");
    },
    Error,
    "encode-error: U+55FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u55FC");
    },
    Error,
    "encode-error: U+55FC",
  );
  r = r && ([...ms932Encoder.encode("嗽嗾")].join(",") === "154,117,154,116"); // U+55FD
  assertThrows(
    () => {
      ms932Encoder.encode("\u55FF");
    },
    Error,
    "encode-error: U+55FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5600");
    },
    Error,
    "encode-error: U+5600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5601");
    },
    Error,
    "encode-error: U+5601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5602");
    },
    Error,
    "encode-error: U+5602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5603");
    },
    Error,
    "encode-error: U+5603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5604");
    },
    Error,
    "encode-error: U+5604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5605");
    },
    Error,
    "encode-error: U+5605",
  );
  r = r && ([...ms932Encoder.encode("嘆")].join(",") === "146,81"); // U+5606
  assertThrows(
    () => {
      ms932Encoder.encode("\u5607");
    },
    Error,
    "encode-error: U+5607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5608");
    },
    Error,
    "encode-error: U+5608",
  );
  r = r && ([...ms932Encoder.encode("嘉")].join(",") === "137,195"); // U+5609
  assertThrows(
    () => {
      ms932Encoder.encode("\u560A");
    },
    Error,
    "encode-error: U+560A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u560B");
    },
    Error,
    "encode-error: U+560B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u560C");
    },
    Error,
    "encode-error: U+560C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u560D");
    },
    Error,
    "encode-error: U+560D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u560E");
    },
    Error,
    "encode-error: U+560E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u560F");
    },
    Error,
    "encode-error: U+560F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5610");
    },
    Error,
    "encode-error: U+5610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5611");
    },
    Error,
    "encode-error: U+5611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5612");
    },
    Error,
    "encode-error: U+5612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5613");
    },
    Error,
    "encode-error: U+5613",
  );
  r = r && ([...ms932Encoder.encode("嘔")].join(",") === "154,113"); // U+5614
  assertThrows(
    () => {
      ms932Encoder.encode("\u5615");
    },
    Error,
    "encode-error: U+5615",
  );
  r = r &&
    ([...ms932Encoder.encode("嘖嘗嘘")].join(",") === "154,115,143,166,137,82"); // U+5616
  assertThrows(
    () => {
      ms932Encoder.encode("\u5619");
    },
    Error,
    "encode-error: U+5619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u561A");
    },
    Error,
    "encode-error: U+561A",
  );
  r = r && ([...ms932Encoder.encode("嘛")].join(",") === "154,118"); // U+561B
  assertThrows(
    () => {
      ms932Encoder.encode("\u561C");
    },
    Error,
    "encode-error: U+561C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u561D");
    },
    Error,
    "encode-error: U+561D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u561E");
    },
    Error,
    "encode-error: U+561E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u561F");
    },
    Error,
    "encode-error: U+561F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5620");
    },
    Error,
    "encode-error: U+5620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5621");
    },
    Error,
    "encode-error: U+5621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5622");
    },
    Error,
    "encode-error: U+5622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5623");
    },
    Error,
    "encode-error: U+5623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5624");
    },
    Error,
    "encode-error: U+5624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5625");
    },
    Error,
    "encode-error: U+5625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5626");
    },
    Error,
    "encode-error: U+5626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5627");
    },
    Error,
    "encode-error: U+5627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5628");
    },
    Error,
    "encode-error: U+5628",
  );
  r = r && ([...ms932Encoder.encode("嘩")].join(",") === "137,220"); // U+5629
  assertThrows(
    () => {
      ms932Encoder.encode("\u562A");
    },
    Error,
    "encode-error: U+562A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u562B");
    },
    Error,
    "encode-error: U+562B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u562C");
    },
    Error,
    "encode-error: U+562C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u562D");
    },
    Error,
    "encode-error: U+562D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u562E");
    },
    Error,
    "encode-error: U+562E",
  );
  r = r && ([...ms932Encoder.encode("嘯")].join(",") === "154,130"); // U+562F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5630");
    },
    Error,
    "encode-error: U+5630",
  );
  r = r && ([...ms932Encoder.encode("嘱嘲")].join(",") === "143,250,154,125"); // U+5631
  assertThrows(
    () => {
      ms932Encoder.encode("\u5633");
    },
    Error,
    "encode-error: U+5633",
  );
  r = r && ([...ms932Encoder.encode("嘴")].join(",") === "154,123"); // U+5634
  assertThrows(
    () => {
      ms932Encoder.encode("\u5635");
    },
    Error,
    "encode-error: U+5635",
  );
  r = r && ([...ms932Encoder.encode("嘶")].join(",") === "154,124"); // U+5636
  assertThrows(
    () => {
      ms932Encoder.encode("\u5637");
    },
    Error,
    "encode-error: U+5637",
  );
  r = r && ([...ms932Encoder.encode("嘸")].join(",") === "154,126"); // U+5638
  assertThrows(
    () => {
      ms932Encoder.encode("\u5639");
    },
    Error,
    "encode-error: U+5639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u563A");
    },
    Error,
    "encode-error: U+563A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u563B");
    },
    Error,
    "encode-error: U+563B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u563C");
    },
    Error,
    "encode-error: U+563C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u563D");
    },
    Error,
    "encode-error: U+563D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u563E");
    },
    Error,
    "encode-error: U+563E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u563F");
    },
    Error,
    "encode-error: U+563F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5640");
    },
    Error,
    "encode-error: U+5640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5641");
    },
    Error,
    "encode-error: U+5641",
  );
  r = r && ([...ms932Encoder.encode("噂")].join(",") === "137,92"); // U+5642
  assertThrows(
    () => {
      ms932Encoder.encode("\u5643");
    },
    Error,
    "encode-error: U+5643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5644");
    },
    Error,
    "encode-error: U+5644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5645");
    },
    Error,
    "encode-error: U+5645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5646");
    },
    Error,
    "encode-error: U+5646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5647");
    },
    Error,
    "encode-error: U+5647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5648");
    },
    Error,
    "encode-error: U+5648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5649");
    },
    Error,
    "encode-error: U+5649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u564A");
    },
    Error,
    "encode-error: U+564A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u564B");
    },
    Error,
    "encode-error: U+564B",
  );
  r = r && ([...ms932Encoder.encode("噌")].join(",") === "145,88"); // U+564C
  assertThrows(
    () => {
      ms932Encoder.encode("\u564D");
    },
    Error,
    "encode-error: U+564D",
  );
  r = r && ([...ms932Encoder.encode("噎")].join(",") === "154,120"); // U+564E
  assertThrows(
    () => {
      ms932Encoder.encode("\u564F");
    },
    Error,
    "encode-error: U+564F",
  );
  r = r && ([...ms932Encoder.encode("噐")].join(",") === "154,121"); // U+5650
  assertThrows(
    () => {
      ms932Encoder.encode("\u5651");
    },
    Error,
    "encode-error: U+5651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5652");
    },
    Error,
    "encode-error: U+5652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5653");
    },
    Error,
    "encode-error: U+5653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5654");
    },
    Error,
    "encode-error: U+5654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5655");
    },
    Error,
    "encode-error: U+5655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5656");
    },
    Error,
    "encode-error: U+5656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5657");
    },
    Error,
    "encode-error: U+5657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5658");
    },
    Error,
    "encode-error: U+5658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5659");
    },
    Error,
    "encode-error: U+5659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u565A");
    },
    Error,
    "encode-error: U+565A",
  );
  r = r && ([...ms932Encoder.encode("噛")].join(",") === "138,154"); // U+565B
  assertThrows(
    () => {
      ms932Encoder.encode("\u565C");
    },
    Error,
    "encode-error: U+565C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u565D");
    },
    Error,
    "encode-error: U+565D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u565E");
    },
    Error,
    "encode-error: U+565E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u565F");
    },
    Error,
    "encode-error: U+565F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5660");
    },
    Error,
    "encode-error: U+5660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5661");
    },
    Error,
    "encode-error: U+5661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5662");
    },
    Error,
    "encode-error: U+5662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5663");
    },
    Error,
    "encode-error: U+5663",
  );
  r = r && ([...ms932Encoder.encode("噤")].join(",") === "154,129"); // U+5664
  assertThrows(
    () => {
      ms932Encoder.encode("\u5665");
    },
    Error,
    "encode-error: U+5665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5666");
    },
    Error,
    "encode-error: U+5666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5667");
    },
    Error,
    "encode-error: U+5667",
  );
  r = r && ([...ms932Encoder.encode("器")].join(",") === "138,237"); // U+5668
  assertThrows(
    () => {
      ms932Encoder.encode("\u5669");
    },
    Error,
    "encode-error: U+5669",
  );
  r = r &&
    ([...ms932Encoder.encode("噪噫噬")].join(",") ===
      "154,132,154,128,154,131"); // U+566A
  assertThrows(
    () => {
      ms932Encoder.encode("\u566D");
    },
    Error,
    "encode-error: U+566D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u566E");
    },
    Error,
    "encode-error: U+566E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u566F");
    },
    Error,
    "encode-error: U+566F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5670");
    },
    Error,
    "encode-error: U+5670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5671");
    },
    Error,
    "encode-error: U+5671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5672");
    },
    Error,
    "encode-error: U+5672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5673");
    },
    Error,
    "encode-error: U+5673",
  );
  r = r && ([...ms932Encoder.encode("噴")].join(",") === "149,172"); // U+5674
  assertThrows(
    () => {
      ms932Encoder.encode("\u5675");
    },
    Error,
    "encode-error: U+5675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5676");
    },
    Error,
    "encode-error: U+5676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5677");
    },
    Error,
    "encode-error: U+5677",
  );
  r = r && ([...ms932Encoder.encode("噸")].join(",") === "147,211"); // U+5678
  assertThrows(
    () => {
      ms932Encoder.encode("\u5679");
    },
    Error,
    "encode-error: U+5679",
  );
  r = r && ([...ms932Encoder.encode("噺")].join(",") === "148,182"); // U+567A
  assertThrows(
    () => {
      ms932Encoder.encode("\u567B");
    },
    Error,
    "encode-error: U+567B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u567C");
    },
    Error,
    "encode-error: U+567C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u567D");
    },
    Error,
    "encode-error: U+567D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u567E");
    },
    Error,
    "encode-error: U+567E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u567F");
    },
    Error,
    "encode-error: U+567F",
  );
  r = r && ([...ms932Encoder.encode("嚀")].join(",") === "154,134"); // U+5680
  assertThrows(
    () => {
      ms932Encoder.encode("\u5681");
    },
    Error,
    "encode-error: U+5681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5682");
    },
    Error,
    "encode-error: U+5682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5683");
    },
    Error,
    "encode-error: U+5683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5684");
    },
    Error,
    "encode-error: U+5684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5685");
    },
    Error,
    "encode-error: U+5685",
  );
  r = r && ([...ms932Encoder.encode("嚆嚇")].join(",") === "154,133,138,100"); // U+5686
  assertThrows(
    () => {
      ms932Encoder.encode("\u5688");
    },
    Error,
    "encode-error: U+5688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5689");
    },
    Error,
    "encode-error: U+5689",
  );
  r = r && ([...ms932Encoder.encode("嚊")].join(",") === "154,135"); // U+568A
  assertThrows(
    () => {
      ms932Encoder.encode("\u568B");
    },
    Error,
    "encode-error: U+568B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u568C");
    },
    Error,
    "encode-error: U+568C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u568D");
    },
    Error,
    "encode-error: U+568D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u568E");
    },
    Error,
    "encode-error: U+568E",
  );
  r = r && ([...ms932Encoder.encode("嚏")].join(",") === "154,138"); // U+568F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5690");
    },
    Error,
    "encode-error: U+5690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5691");
    },
    Error,
    "encode-error: U+5691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5692");
    },
    Error,
    "encode-error: U+5692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5693");
    },
    Error,
    "encode-error: U+5693",
  );
  r = r && ([...ms932Encoder.encode("嚔")].join(",") === "154,137"); // U+5694
  assertThrows(
    () => {
      ms932Encoder.encode("\u5695");
    },
    Error,
    "encode-error: U+5695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5696");
    },
    Error,
    "encode-error: U+5696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5697");
    },
    Error,
    "encode-error: U+5697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5698");
    },
    Error,
    "encode-error: U+5698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5699");
    },
    Error,
    "encode-error: U+5699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u569A");
    },
    Error,
    "encode-error: U+569A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u569B");
    },
    Error,
    "encode-error: U+569B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u569C");
    },
    Error,
    "encode-error: U+569C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u569D");
    },
    Error,
    "encode-error: U+569D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u569E");
    },
    Error,
    "encode-error: U+569E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u569F");
    },
    Error,
    "encode-error: U+569F",
  );
  r = r && ([...ms932Encoder.encode("嚠")].join(",") === "154,136"); // U+56A0
  assertThrows(
    () => {
      ms932Encoder.encode("\u56A1");
    },
    Error,
    "encode-error: U+56A1",
  );
  r = r && ([...ms932Encoder.encode("嚢")].join(",") === "148,88"); // U+56A2
  assertThrows(
    () => {
      ms932Encoder.encode("\u56A3");
    },
    Error,
    "encode-error: U+56A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56A4");
    },
    Error,
    "encode-error: U+56A4",
  );
  r = r && ([...ms932Encoder.encode("嚥")].join(",") === "154,139"); // U+56A5
  assertThrows(
    () => {
      ms932Encoder.encode("\u56A6");
    },
    Error,
    "encode-error: U+56A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56A7");
    },
    Error,
    "encode-error: U+56A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56A8");
    },
    Error,
    "encode-error: U+56A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56A9");
    },
    Error,
    "encode-error: U+56A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56AA");
    },
    Error,
    "encode-error: U+56AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56AB");
    },
    Error,
    "encode-error: U+56AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56AC");
    },
    Error,
    "encode-error: U+56AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56AD");
    },
    Error,
    "encode-error: U+56AD",
  );
  r = r && ([...ms932Encoder.encode("嚮")].join(",") === "154,140"); // U+56AE
  assertThrows(
    () => {
      ms932Encoder.encode("\u56AF");
    },
    Error,
    "encode-error: U+56AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56B0");
    },
    Error,
    "encode-error: U+56B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56B1");
    },
    Error,
    "encode-error: U+56B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56B2");
    },
    Error,
    "encode-error: U+56B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56B3");
    },
    Error,
    "encode-error: U+56B3",
  );
  r = r && ([...ms932Encoder.encode("嚴")].join(",") === "154,142"); // U+56B4
  assertThrows(
    () => {
      ms932Encoder.encode("\u56B5");
    },
    Error,
    "encode-error: U+56B5",
  );
  r = r && ([...ms932Encoder.encode("嚶")].join(",") === "154,141"); // U+56B6
  assertThrows(
    () => {
      ms932Encoder.encode("\u56B7");
    },
    Error,
    "encode-error: U+56B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56B8");
    },
    Error,
    "encode-error: U+56B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56B9");
    },
    Error,
    "encode-error: U+56B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56BA");
    },
    Error,
    "encode-error: U+56BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56BB");
    },
    Error,
    "encode-error: U+56BB",
  );
  r = r && ([...ms932Encoder.encode("嚼")].join(",") === "154,144"); // U+56BC
  assertThrows(
    () => {
      ms932Encoder.encode("\u56BD");
    },
    Error,
    "encode-error: U+56BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56BE");
    },
    Error,
    "encode-error: U+56BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56BF");
    },
    Error,
    "encode-error: U+56BF",
  );
  r = r &&
    ([...ms932Encoder.encode("囀囁囂囃")].join(",") ===
      "154,147,154,145,154,143,154,146"); // U+56C0
  assertThrows(
    () => {
      ms932Encoder.encode("\u56C4");
    },
    Error,
    "encode-error: U+56C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56C5");
    },
    Error,
    "encode-error: U+56C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56C6");
    },
    Error,
    "encode-error: U+56C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56C7");
    },
    Error,
    "encode-error: U+56C7",
  );
  r = r && ([...ms932Encoder.encode("囈")].join(",") === "154,148"); // U+56C8
  assertThrows(
    () => {
      ms932Encoder.encode("\u56C9");
    },
    Error,
    "encode-error: U+56C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56CA");
    },
    Error,
    "encode-error: U+56CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56CB");
    },
    Error,
    "encode-error: U+56CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56CC");
    },
    Error,
    "encode-error: U+56CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56CD");
    },
    Error,
    "encode-error: U+56CD",
  );
  r = r && ([...ms932Encoder.encode("囎")].join(",") === "154,149"); // U+56CE
  assertThrows(
    () => {
      ms932Encoder.encode("\u56CF");
    },
    Error,
    "encode-error: U+56CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56D0");
    },
    Error,
    "encode-error: U+56D0",
  );
  r = r && ([...ms932Encoder.encode("囑")].join(",") === "154,150"); // U+56D1
  assertThrows(
    () => {
      ms932Encoder.encode("\u56D2");
    },
    Error,
    "encode-error: U+56D2",
  );
  r = r && ([...ms932Encoder.encode("囓")].join(",") === "154,151"); // U+56D3
  assertThrows(
    () => {
      ms932Encoder.encode("\u56D4");
    },
    Error,
    "encode-error: U+56D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56D5");
    },
    Error,
    "encode-error: U+56D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56D6");
    },
    Error,
    "encode-error: U+56D6",
  );
  r = r && ([...ms932Encoder.encode("囗囘")].join(",") === "154,152,153,100"); // U+56D7
  assertThrows(
    () => {
      ms932Encoder.encode("\u56D9");
    },
    Error,
    "encode-error: U+56D9",
  );
  r = r && ([...ms932Encoder.encode("囚四")].join(",") === "142,250,142,108"); // U+56DA
  assertThrows(
    () => {
      ms932Encoder.encode("\u56DC");
    },
    Error,
    "encode-error: U+56DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56DD");
    },
    Error,
    "encode-error: U+56DD",
  );
  r = r && ([...ms932Encoder.encode("回")].join(",") === "137,241"); // U+56DE
  assertThrows(
    () => {
      ms932Encoder.encode("\u56DF");
    },
    Error,
    "encode-error: U+56DF",
  );
  r = r && ([...ms932Encoder.encode("因")].join(",") === "136,246"); // U+56E0
  assertThrows(
    () => {
      ms932Encoder.encode("\u56E1");
    },
    Error,
    "encode-error: U+56E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56E2");
    },
    Error,
    "encode-error: U+56E2",
  );
  r = r && ([...ms932Encoder.encode("団")].join(",") === "146,99"); // U+56E3
  assertThrows(
    () => {
      ms932Encoder.encode("\u56E4");
    },
    Error,
    "encode-error: U+56E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56E5");
    },
    Error,
    "encode-error: U+56E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56E6");
    },
    Error,
    "encode-error: U+56E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56E7");
    },
    Error,
    "encode-error: U+56E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56E8");
    },
    Error,
    "encode-error: U+56E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56E9");
    },
    Error,
    "encode-error: U+56E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56EA");
    },
    Error,
    "encode-error: U+56EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56EB");
    },
    Error,
    "encode-error: U+56EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56EC");
    },
    Error,
    "encode-error: U+56EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56ED");
    },
    Error,
    "encode-error: U+56ED",
  );
  r = r && ([...ms932Encoder.encode("囮")].join(",") === "154,153"); // U+56EE
  assertThrows(
    () => {
      ms932Encoder.encode("\u56EF");
    },
    Error,
    "encode-error: U+56EF",
  );
  r = r && ([...ms932Encoder.encode("困")].join(",") === "141,162"); // U+56F0
  assertThrows(
    () => {
      ms932Encoder.encode("\u56F1");
    },
    Error,
    "encode-error: U+56F1",
  );
  r = r && ([...ms932Encoder.encode("囲図")].join(",") === "136,205,144,125"); // U+56F2
  assertThrows(
    () => {
      ms932Encoder.encode("\u56F4");
    },
    Error,
    "encode-error: U+56F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56F5");
    },
    Error,
    "encode-error: U+56F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56F6");
    },
    Error,
    "encode-error: U+56F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56F7");
    },
    Error,
    "encode-error: U+56F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56F8");
    },
    Error,
    "encode-error: U+56F8",
  );
  r = r && ([...ms932Encoder.encode("囹固")].join(",") === "154,154,140,197"); // U+56F9
  assertThrows(
    () => {
      ms932Encoder.encode("\u56FB");
    },
    Error,
    "encode-error: U+56FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u56FC");
    },
    Error,
    "encode-error: U+56FC",
  );
  r = r && ([...ms932Encoder.encode("国")].join(",") === "141,145"); // U+56FD
  assertThrows(
    () => {
      ms932Encoder.encode("\u56FE");
    },
    Error,
    "encode-error: U+56FE",
  );
  r = r && ([...ms932Encoder.encode("囿圀")].join(",") === "154,156,154,155"); // U+56FF
  assertThrows(
    () => {
      ms932Encoder.encode("\u5701");
    },
    Error,
    "encode-error: U+5701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5702");
    },
    Error,
    "encode-error: U+5702",
  );
  r = r && ([...ms932Encoder.encode("圃圄")].join(",") === "149,222,154,157"); // U+5703
  assertThrows(
    () => {
      ms932Encoder.encode("\u5705");
    },
    Error,
    "encode-error: U+5705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5706");
    },
    Error,
    "encode-error: U+5706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5707");
    },
    Error,
    "encode-error: U+5707",
  );
  r = r && ([...ms932Encoder.encode("圈圉")].join(",") === "154,159,154,158"); // U+5708
  assertThrows(
    () => {
      ms932Encoder.encode("\u570A");
    },
    Error,
    "encode-error: U+570A",
  );
  r = r && ([...ms932Encoder.encode("國")].join(",") === "154,160"); // U+570B
  assertThrows(
    () => {
      ms932Encoder.encode("\u570C");
    },
    Error,
    "encode-error: U+570C",
  );
  r = r && ([...ms932Encoder.encode("圍")].join(",") === "154,161"); // U+570D
  assertThrows(
    () => {
      ms932Encoder.encode("\u570E");
    },
    Error,
    "encode-error: U+570E",
  );
  r = r && ([...ms932Encoder.encode("圏")].join(",") === "140,151"); // U+570F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5710");
    },
    Error,
    "encode-error: U+5710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5711");
    },
    Error,
    "encode-error: U+5711",
  );
  r = r && ([...ms932Encoder.encode("園圓")].join(",") === "137,128,154,162"); // U+5712
  assertThrows(
    () => {
      ms932Encoder.encode("\u5714");
    },
    Error,
    "encode-error: U+5714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5715");
    },
    Error,
    "encode-error: U+5715",
  );
  r = r && ([...ms932Encoder.encode("圖")].join(",") === "154,164"); // U+5716
  assertThrows(
    () => {
      ms932Encoder.encode("\u5717");
    },
    Error,
    "encode-error: U+5717",
  );
  r = r && ([...ms932Encoder.encode("團")].join(",") === "154,163"); // U+5718
  assertThrows(
    () => {
      ms932Encoder.encode("\u5719");
    },
    Error,
    "encode-error: U+5719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u571A");
    },
    Error,
    "encode-error: U+571A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u571B");
    },
    Error,
    "encode-error: U+571B",
  );
  r = r && ([...ms932Encoder.encode("圜")].join(",") === "154,166"); // U+571C
  assertThrows(
    () => {
      ms932Encoder.encode("\u571D");
    },
    Error,
    "encode-error: U+571D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u571E");
    },
    Error,
    "encode-error: U+571E",
  );
  r = r && ([...ms932Encoder.encode("土")].join(",") === "147,121"); // U+571F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5720");
    },
    Error,
    "encode-error: U+5720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5721");
    },
    Error,
    "encode-error: U+5721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5722");
    },
    Error,
    "encode-error: U+5722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5723");
    },
    Error,
    "encode-error: U+5723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5724");
    },
    Error,
    "encode-error: U+5724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5725");
    },
    Error,
    "encode-error: U+5725",
  );
  r = r &&
    ([...ms932Encoder.encode("圦圧在")].join(",") ===
      "154,167,136,179,141,221"); // U+5726
  assertThrows(
    () => {
      ms932Encoder.encode("\u5729");
    },
    Error,
    "encode-error: U+5729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u572A");
    },
    Error,
    "encode-error: U+572A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u572B");
    },
    Error,
    "encode-error: U+572B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u572C");
    },
    Error,
    "encode-error: U+572C",
  );
  r = r && ([...ms932Encoder.encode("圭")].join(",") === "140,92"); // U+572D
  assertThrows(
    () => {
      ms932Encoder.encode("\u572E");
    },
    Error,
    "encode-error: U+572E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u572F");
    },
    Error,
    "encode-error: U+572F",
  );
  r = r && ([...ms932Encoder.encode("地")].join(",") === "146,110"); // U+5730
  assertThrows(
    () => {
      ms932Encoder.encode("\u5731");
    },
    Error,
    "encode-error: U+5731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5732");
    },
    Error,
    "encode-error: U+5732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5733");
    },
    Error,
    "encode-error: U+5733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5734");
    },
    Error,
    "encode-error: U+5734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5735");
    },
    Error,
    "encode-error: U+5735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5736");
    },
    Error,
    "encode-error: U+5736",
  );
  r = r && ([...ms932Encoder.encode("圷圸")].join(",") === "154,168,154,169"); // U+5737
  assertThrows(
    () => {
      ms932Encoder.encode("\u5739");
    },
    Error,
    "encode-error: U+5739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u573A");
    },
    Error,
    "encode-error: U+573A",
  );
  r = r && ([...ms932Encoder.encode("圻")].join(",") === "154,171"); // U+573B
  assertThrows(
    () => {
      ms932Encoder.encode("\u573C");
    },
    Error,
    "encode-error: U+573C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u573D");
    },
    Error,
    "encode-error: U+573D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u573E");
    },
    Error,
    "encode-error: U+573E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u573F");
    },
    Error,
    "encode-error: U+573F",
  );
  r = r && ([...ms932Encoder.encode("址")].join(",") === "154,172"); // U+5740
  assertThrows(
    () => {
      ms932Encoder.encode("\u5741");
    },
    Error,
    "encode-error: U+5741",
  );
  r = r && ([...ms932Encoder.encode("坂")].join(",") === "141,226"); // U+5742
  assertThrows(
    () => {
      ms932Encoder.encode("\u5743");
    },
    Error,
    "encode-error: U+5743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5744");
    },
    Error,
    "encode-error: U+5744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5745");
    },
    Error,
    "encode-error: U+5745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5746");
    },
    Error,
    "encode-error: U+5746",
  );
  r = r && ([...ms932Encoder.encode("均")].join(",") === "139,207"); // U+5747
  assertThrows(
    () => {
      ms932Encoder.encode("\u5748");
    },
    Error,
    "encode-error: U+5748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5749");
    },
    Error,
    "encode-error: U+5749",
  );
  r = r && ([...ms932Encoder.encode("坊")].join(",") === "150,86"); // U+574A
  assertThrows(
    () => {
      ms932Encoder.encode("\u574B");
    },
    Error,
    "encode-error: U+574B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u574C");
    },
    Error,
    "encode-error: U+574C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u574D");
    },
    Error,
    "encode-error: U+574D",
  );
  r = r &&
    ([...ms932Encoder.encode("坎坏坐坑")].join(",") ===
      "154,170,154,173,141,191,141,66"); // U+574E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5752");
    },
    Error,
    "encode-error: U+5752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5753");
    },
    Error,
    "encode-error: U+5753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5754");
    },
    Error,
    "encode-error: U+5754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5755");
    },
    Error,
    "encode-error: U+5755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5756");
    },
    Error,
    "encode-error: U+5756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5757");
    },
    Error,
    "encode-error: U+5757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5758");
    },
    Error,
    "encode-error: U+5758",
  );
  r = r && ([...ms932Encoder.encode("坙")].join(",") === "250,150"); // U+5759
  assertThrows(
    () => {
      ms932Encoder.encode("\u575A");
    },
    Error,
    "encode-error: U+575A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u575B");
    },
    Error,
    "encode-error: U+575B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u575C");
    },
    Error,
    "encode-error: U+575C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u575D");
    },
    Error,
    "encode-error: U+575D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u575E");
    },
    Error,
    "encode-error: U+575E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u575F");
    },
    Error,
    "encode-error: U+575F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5760");
    },
    Error,
    "encode-error: U+5760",
  );
  r = r && ([...ms932Encoder.encode("坡")].join(",") === "154,177"); // U+5761
  assertThrows(
    () => {
      ms932Encoder.encode("\u5762");
    },
    Error,
    "encode-error: U+5762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5763");
    },
    Error,
    "encode-error: U+5763",
  );
  r = r &&
    ([...ms932Encoder.encode("坤坥坦")].join(",") === "141,163,250,151,146,82"); // U+5764
  assertThrows(
    () => {
      ms932Encoder.encode("\u5767");
    },
    Error,
    "encode-error: U+5767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5768");
    },
    Error,
    "encode-error: U+5768",
  );
  r = r && ([...ms932Encoder.encode("坩坪")].join(",") === "154,174,146,216"); // U+5769
  assertThrows(
    () => {
      ms932Encoder.encode("\u576B");
    },
    Error,
    "encode-error: U+576B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u576C");
    },
    Error,
    "encode-error: U+576C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u576D");
    },
    Error,
    "encode-error: U+576D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u576E");
    },
    Error,
    "encode-error: U+576E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u576F");
    },
    Error,
    "encode-error: U+576F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5770");
    },
    Error,
    "encode-error: U+5770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5771");
    },
    Error,
    "encode-error: U+5771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5772");
    },
    Error,
    "encode-error: U+5772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5773");
    },
    Error,
    "encode-error: U+5773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5774");
    },
    Error,
    "encode-error: U+5774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5775");
    },
    Error,
    "encode-error: U+5775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5776");
    },
    Error,
    "encode-error: U+5776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5777");
    },
    Error,
    "encode-error: U+5777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5778");
    },
    Error,
    "encode-error: U+5778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5779");
    },
    Error,
    "encode-error: U+5779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u577A");
    },
    Error,
    "encode-error: U+577A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u577B");
    },
    Error,
    "encode-error: U+577B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u577C");
    },
    Error,
    "encode-error: U+577C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u577D");
    },
    Error,
    "encode-error: U+577D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u577E");
    },
    Error,
    "encode-error: U+577E",
  );
  r = r && ([...ms932Encoder.encode("坿")].join(",") === "154,178"); // U+577F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5780");
    },
    Error,
    "encode-error: U+5780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5781");
    },
    Error,
    "encode-error: U+5781",
  );
  r = r && ([...ms932Encoder.encode("垂")].join(",") === "144,130"); // U+5782
  assertThrows(
    () => {
      ms932Encoder.encode("\u5783");
    },
    Error,
    "encode-error: U+5783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5784");
    },
    Error,
    "encode-error: U+5784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5785");
    },
    Error,
    "encode-error: U+5785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5786");
    },
    Error,
    "encode-error: U+5786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5787");
    },
    Error,
    "encode-error: U+5787",
  );
  r = r && ([...ms932Encoder.encode("垈垉")].join(",") === "154,176,154,179"); // U+5788
  assertThrows(
    () => {
      ms932Encoder.encode("\u578A");
    },
    Error,
    "encode-error: U+578A",
  );
  r = r && ([...ms932Encoder.encode("型")].join(",") === "140,94"); // U+578B
  assertThrows(
    () => {
      ms932Encoder.encode("\u578C");
    },
    Error,
    "encode-error: U+578C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u578D");
    },
    Error,
    "encode-error: U+578D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u578E");
    },
    Error,
    "encode-error: U+578E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u578F");
    },
    Error,
    "encode-error: U+578F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5790");
    },
    Error,
    "encode-error: U+5790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5791");
    },
    Error,
    "encode-error: U+5791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5792");
    },
    Error,
    "encode-error: U+5792",
  );
  r = r && ([...ms932Encoder.encode("垓")].join(",") === "154,180"); // U+5793
  assertThrows(
    () => {
      ms932Encoder.encode("\u5794");
    },
    Error,
    "encode-error: U+5794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5795");
    },
    Error,
    "encode-error: U+5795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5796");
    },
    Error,
    "encode-error: U+5796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5797");
    },
    Error,
    "encode-error: U+5797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5798");
    },
    Error,
    "encode-error: U+5798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5799");
    },
    Error,
    "encode-error: U+5799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u579A");
    },
    Error,
    "encode-error: U+579A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u579B");
    },
    Error,
    "encode-error: U+579B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u579C");
    },
    Error,
    "encode-error: U+579C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u579D");
    },
    Error,
    "encode-error: U+579D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u579E");
    },
    Error,
    "encode-error: U+579E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u579F");
    },
    Error,
    "encode-error: U+579F",
  );
  r = r && ([...ms932Encoder.encode("垠")].join(",") === "154,181"); // U+57A0
  assertThrows(
    () => {
      ms932Encoder.encode("\u57A1");
    },
    Error,
    "encode-error: U+57A1",
  );
  r = r &&
    ([...ms932Encoder.encode("垢垣垤")].join(",") === "141,67,138,95,154,183"); // U+57A2
  assertThrows(
    () => {
      ms932Encoder.encode("\u57A5");
    },
    Error,
    "encode-error: U+57A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57A6");
    },
    Error,
    "encode-error: U+57A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57A7");
    },
    Error,
    "encode-error: U+57A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57A8");
    },
    Error,
    "encode-error: U+57A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57A9");
    },
    Error,
    "encode-error: U+57A9",
  );
  r = r && ([...ms932Encoder.encode("垪")].join(",") === "154,184"); // U+57AA
  assertThrows(
    () => {
      ms932Encoder.encode("\u57AB");
    },
    Error,
    "encode-error: U+57AB",
  );
  r = r && ([...ms932Encoder.encode("垬")].join(",") === "250,152"); // U+57AC
  assertThrows(
    () => {
      ms932Encoder.encode("\u57AD");
    },
    Error,
    "encode-error: U+57AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57AE");
    },
    Error,
    "encode-error: U+57AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57AF");
    },
    Error,
    "encode-error: U+57AF",
  );
  r = r && ([...ms932Encoder.encode("垰")].join(",") === "154,185"); // U+57B0
  assertThrows(
    () => {
      ms932Encoder.encode("\u57B1");
    },
    Error,
    "encode-error: U+57B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57B2");
    },
    Error,
    "encode-error: U+57B2",
  );
  r = r && ([...ms932Encoder.encode("垳")].join(",") === "154,182"); // U+57B3
  assertThrows(
    () => {
      ms932Encoder.encode("\u57B4");
    },
    Error,
    "encode-error: U+57B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57B5");
    },
    Error,
    "encode-error: U+57B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57B6");
    },
    Error,
    "encode-error: U+57B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57B7");
    },
    Error,
    "encode-error: U+57B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57B8");
    },
    Error,
    "encode-error: U+57B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57B9");
    },
    Error,
    "encode-error: U+57B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57BA");
    },
    Error,
    "encode-error: U+57BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57BB");
    },
    Error,
    "encode-error: U+57BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57BC");
    },
    Error,
    "encode-error: U+57BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57BD");
    },
    Error,
    "encode-error: U+57BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57BE");
    },
    Error,
    "encode-error: U+57BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57BF");
    },
    Error,
    "encode-error: U+57BF",
  );
  r = r && ([...ms932Encoder.encode("埀")].join(",") === "154,175"); // U+57C0
  assertThrows(
    () => {
      ms932Encoder.encode("\u57C1");
    },
    Error,
    "encode-error: U+57C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57C2");
    },
    Error,
    "encode-error: U+57C2",
  );
  r = r && ([...ms932Encoder.encode("埃")].join(",") === "154,186"); // U+57C3
  assertThrows(
    () => {
      ms932Encoder.encode("\u57C4");
    },
    Error,
    "encode-error: U+57C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57C5");
    },
    Error,
    "encode-error: U+57C5",
  );
  r = r &&
    ([...ms932Encoder.encode("埆埇埈")].join(",") ===
      "154,187,250,154,250,153"); // U+57C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u57C9");
    },
    Error,
    "encode-error: U+57C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57CA");
    },
    Error,
    "encode-error: U+57CA",
  );
  r = r && ([...ms932Encoder.encode("埋")].join(",") === "150,132"); // U+57CB
  assertThrows(
    () => {
      ms932Encoder.encode("\u57CC");
    },
    Error,
    "encode-error: U+57CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57CD");
    },
    Error,
    "encode-error: U+57CD",
  );
  r = r && ([...ms932Encoder.encode("城")].join(",") === "143,233"); // U+57CE
  assertThrows(
    () => {
      ms932Encoder.encode("\u57CF");
    },
    Error,
    "encode-error: U+57CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57D0");
    },
    Error,
    "encode-error: U+57D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57D1");
    },
    Error,
    "encode-error: U+57D1",
  );
  r = r &&
    ([...ms932Encoder.encode("埒埓埔")].join(",") ===
      "154,189,154,190,154,188"); // U+57D2
  assertThrows(
    () => {
      ms932Encoder.encode("\u57D5");
    },
    Error,
    "encode-error: U+57D5",
  );
  r = r && ([...ms932Encoder.encode("埖")].join(",") === "154,192"); // U+57D6
  assertThrows(
    () => {
      ms932Encoder.encode("\u57D7");
    },
    Error,
    "encode-error: U+57D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57D8");
    },
    Error,
    "encode-error: U+57D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57D9");
    },
    Error,
    "encode-error: U+57D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57DA");
    },
    Error,
    "encode-error: U+57DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57DB");
    },
    Error,
    "encode-error: U+57DB",
  );
  r = r && ([...ms932Encoder.encode("埜")].join(",") === "148,87"); // U+57DC
  assertThrows(
    () => {
      ms932Encoder.encode("\u57DD");
    },
    Error,
    "encode-error: U+57DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57DE");
    },
    Error,
    "encode-error: U+57DE",
  );
  r = r && ([...ms932Encoder.encode("域埠")].join(",") === "136,230,149,117"); // U+57DF
  assertThrows(
    () => {
      ms932Encoder.encode("\u57E1");
    },
    Error,
    "encode-error: U+57E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57E2");
    },
    Error,
    "encode-error: U+57E2",
  );
  r = r && ([...ms932Encoder.encode("埣")].join(",") === "154,193"); // U+57E3
  assertThrows(
    () => {
      ms932Encoder.encode("\u57E4");
    },
    Error,
    "encode-error: U+57E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57E5");
    },
    Error,
    "encode-error: U+57E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57E6");
    },
    Error,
    "encode-error: U+57E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57E7");
    },
    Error,
    "encode-error: U+57E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57E8");
    },
    Error,
    "encode-error: U+57E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57E9");
    },
    Error,
    "encode-error: U+57E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57EA");
    },
    Error,
    "encode-error: U+57EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57EB");
    },
    Error,
    "encode-error: U+57EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57EC");
    },
    Error,
    "encode-error: U+57EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57ED");
    },
    Error,
    "encode-error: U+57ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57EE");
    },
    Error,
    "encode-error: U+57EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57EF");
    },
    Error,
    "encode-error: U+57EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57F0");
    },
    Error,
    "encode-error: U+57F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57F1");
    },
    Error,
    "encode-error: U+57F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57F2");
    },
    Error,
    "encode-error: U+57F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57F3");
    },
    Error,
    "encode-error: U+57F3",
  );
  r = r && ([...ms932Encoder.encode("埴")].join(",") === "143,251"); // U+57F4
  assertThrows(
    () => {
      ms932Encoder.encode("\u57F5");
    },
    Error,
    "encode-error: U+57F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57F6");
    },
    Error,
    "encode-error: U+57F6",
  );
  r = r && ([...ms932Encoder.encode("執")].join(",") === "142,183"); // U+57F7
  assertThrows(
    () => {
      ms932Encoder.encode("\u57F8");
    },
    Error,
    "encode-error: U+57F8",
  );
  r = r && ([...ms932Encoder.encode("培基")].join(",") === "148,124,138,238"); // U+57F9
  assertThrows(
    () => {
      ms932Encoder.encode("\u57FB");
    },
    Error,
    "encode-error: U+57FB",
  );
  r = r && ([...ms932Encoder.encode("埼")].join(",") === "141,233"); // U+57FC
  assertThrows(
    () => {
      ms932Encoder.encode("\u57FD");
    },
    Error,
    "encode-error: U+57FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57FE");
    },
    Error,
    "encode-error: U+57FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u57FF");
    },
    Error,
    "encode-error: U+57FF",
  );

  assertStrictEquals(r, true);
});
