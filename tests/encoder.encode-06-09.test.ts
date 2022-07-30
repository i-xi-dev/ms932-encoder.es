import { assertStrictEquals, assertThrows } from "std/testing/asserts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+5800-U+5BFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  r = r && ([...ms932Encoder.encode("堀")].join(",") === "150,120"); // U+5800
  assertThrows(
    () => {
      ms932Encoder.encode("\u5801");
    },
    Error,
    "EncodingError U+5801",
  );
  r = r && ([...ms932Encoder.encode("堂")].join(",") === "147,176"); // U+5802
  assertThrows(
    () => {
      ms932Encoder.encode("\u5803");
    },
    Error,
    "EncodingError U+5803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5804");
    },
    Error,
    "EncodingError U+5804",
  );
  r = r && ([...ms932Encoder.encode("堅堆")].join(",") === "140,152,145,205"); // U+5805
  assertThrows(
    () => {
      ms932Encoder.encode("\u5807");
    },
    Error,
    "EncodingError U+5807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5808");
    },
    Error,
    "EncodingError U+5808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5809");
    },
    Error,
    "EncodingError U+5809",
  );
  r = r && ([...ms932Encoder.encode("堊堋")].join(",") === "154,191,154,194"); // U+580A
  assertThrows(
    () => {
      ms932Encoder.encode("\u580C");
    },
    Error,
    "EncodingError U+580C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u580D");
    },
    Error,
    "EncodingError U+580D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u580E");
    },
    Error,
    "EncodingError U+580E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u580F");
    },
    Error,
    "EncodingError U+580F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5810");
    },
    Error,
    "EncodingError U+5810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5811");
    },
    Error,
    "EncodingError U+5811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5812");
    },
    Error,
    "EncodingError U+5812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5813");
    },
    Error,
    "EncodingError U+5813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5814");
    },
    Error,
    "EncodingError U+5814",
  );
  r = r && ([...ms932Encoder.encode("堕")].join(",") === "145,194"); // U+5815
  assertThrows(
    () => {
      ms932Encoder.encode("\u5816");
    },
    Error,
    "EncodingError U+5816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5817");
    },
    Error,
    "EncodingError U+5817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5818");
    },
    Error,
    "EncodingError U+5818",
  );
  r = r && ([...ms932Encoder.encode("堙")].join(",") === "154,195"); // U+5819
  assertThrows(
    () => {
      ms932Encoder.encode("\u581A");
    },
    Error,
    "EncodingError U+581A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u581B");
    },
    Error,
    "EncodingError U+581B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u581C");
    },
    Error,
    "EncodingError U+581C",
  );
  r = r && ([...ms932Encoder.encode("堝")].join(",") === "154,196"); // U+581D
  assertThrows(
    () => {
      ms932Encoder.encode("\u581E");
    },
    Error,
    "EncodingError U+581E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u581F");
    },
    Error,
    "EncodingError U+581F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5820");
    },
    Error,
    "EncodingError U+5820",
  );
  r = r && ([...ms932Encoder.encode("堡")].join(",") === "154,198"); // U+5821
  assertThrows(
    () => {
      ms932Encoder.encode("\u5822");
    },
    Error,
    "EncodingError U+5822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5823");
    },
    Error,
    "EncodingError U+5823",
  );
  r = r && ([...ms932Encoder.encode("堤")].join(",") === "146,231"); // U+5824
  assertThrows(
    () => {
      ms932Encoder.encode("\u5825");
    },
    Error,
    "EncodingError U+5825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5826");
    },
    Error,
    "EncodingError U+5826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5827");
    },
    Error,
    "EncodingError U+5827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5828");
    },
    Error,
    "EncodingError U+5828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5829");
    },
    Error,
    "EncodingError U+5829",
  );
  r = r && ([...ms932Encoder.encode("堪")].join(",") === "138,172"); // U+582A
  assertThrows(
    () => {
      ms932Encoder.encode("\u582B");
    },
    Error,
    "EncodingError U+582B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u582C");
    },
    Error,
    "EncodingError U+582C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u582D");
    },
    Error,
    "EncodingError U+582D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u582E");
    },
    Error,
    "EncodingError U+582E",
  );
  r = r &&
    ([...ms932Encoder.encode("堯堰報")].join(",") === "234,159,137,129,149,241"); // U+582F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5832");
    },
    Error,
    "EncodingError U+5832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5833");
    },
    Error,
    "EncodingError U+5833",
  );
  r = r && ([...ms932Encoder.encode("場堵")].join(",") === "143,234,147,103"); // U+5834
  assertThrows(
    () => {
      ms932Encoder.encode("\u5836");
    },
    Error,
    "EncodingError U+5836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5837");
    },
    Error,
    "EncodingError U+5837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5838");
    },
    Error,
    "EncodingError U+5838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5839");
    },
    Error,
    "EncodingError U+5839",
  );
  r = r && ([...ms932Encoder.encode("堺")].join(",") === "141,228"); // U+583A
  assertThrows(
    () => {
      ms932Encoder.encode("\u583B");
    },
    Error,
    "EncodingError U+583B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u583C");
    },
    Error,
    "EncodingError U+583C",
  );
  r = r && ([...ms932Encoder.encode("堽")].join(",") === "154,204"); // U+583D
  assertThrows(
    () => {
      ms932Encoder.encode("\u583E");
    },
    Error,
    "EncodingError U+583E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u583F");
    },
    Error,
    "EncodingError U+583F",
  );
  r = r && ([...ms932Encoder.encode("塀塁")].join(",") === "149,187,151,219"); // U+5840
  assertThrows(
    () => {
      ms932Encoder.encode("\u5842");
    },
    Error,
    "EncodingError U+5842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5843");
    },
    Error,
    "EncodingError U+5843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5844");
    },
    Error,
    "EncodingError U+5844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5845");
    },
    Error,
    "EncodingError U+5845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5846");
    },
    Error,
    "EncodingError U+5846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5847");
    },
    Error,
    "EncodingError U+5847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5848");
    },
    Error,
    "EncodingError U+5848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5849");
    },
    Error,
    "EncodingError U+5849",
  );
  r = r && ([...ms932Encoder.encode("塊塋")].join(",") === "137,242,154,200"); // U+584A
  assertThrows(
    () => {
      ms932Encoder.encode("\u584C");
    },
    Error,
    "EncodingError U+584C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u584D");
    },
    Error,
    "EncodingError U+584D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u584E");
    },
    Error,
    "EncodingError U+584E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u584F");
    },
    Error,
    "EncodingError U+584F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5850");
    },
    Error,
    "EncodingError U+5850",
  );
  r = r && ([...ms932Encoder.encode("塑塒")].join(",") === "145,89,154,203"); // U+5851
  assertThrows(
    () => {
      ms932Encoder.encode("\u5853");
    },
    Error,
    "EncodingError U+5853",
  );
  r = r && ([...ms932Encoder.encode("塔")].join(",") === "147,131"); // U+5854
  assertThrows(
    () => {
      ms932Encoder.encode("\u5855");
    },
    Error,
    "EncodingError U+5855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5856");
    },
    Error,
    "EncodingError U+5856",
  );
  r = r &&
    ([...ms932Encoder.encode("塗塘塙塚")].join(",") ===
      "147,104,147,132,148,183,146,203"); // U+5857
  assertThrows(
    () => {
      ms932Encoder.encode("\u585B");
    },
    Error,
    "EncodingError U+585B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u585C");
    },
    Error,
    "EncodingError U+585C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u585D");
    },
    Error,
    "EncodingError U+585D",
  );
  r = r && ([...ms932Encoder.encode("塞")].join(",") === "141,199"); // U+585E
  assertThrows(
    () => {
      ms932Encoder.encode("\u585F");
    },
    Error,
    "EncodingError U+585F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5860");
    },
    Error,
    "EncodingError U+5860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5861");
    },
    Error,
    "EncodingError U+5861",
  );
  r = r && ([...ms932Encoder.encode("塢")].join(",") === "154,199"); // U+5862
  assertThrows(
    () => {
      ms932Encoder.encode("\u5863");
    },
    Error,
    "EncodingError U+5863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5864");
    },
    Error,
    "EncodingError U+5864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5865");
    },
    Error,
    "EncodingError U+5865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5866");
    },
    Error,
    "EncodingError U+5866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5867");
    },
    Error,
    "EncodingError U+5867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5868");
    },
    Error,
    "EncodingError U+5868",
  );
  r = r && ([...ms932Encoder.encode("塩")].join(",") === "137,150"); // U+5869
  assertThrows(
    () => {
      ms932Encoder.encode("\u586A");
    },
    Error,
    "EncodingError U+586A",
  );
  r = r && ([...ms932Encoder.encode("填")].join(",") === "147,85"); // U+586B
  assertThrows(
    () => {
      ms932Encoder.encode("\u586C");
    },
    Error,
    "EncodingError U+586C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u586D");
    },
    Error,
    "EncodingError U+586D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u586E");
    },
    Error,
    "EncodingError U+586E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u586F");
    },
    Error,
    "EncodingError U+586F",
  );
  r = r && ([...ms932Encoder.encode("塰")].join(",") === "154,201"); // U+5870
  assertThrows(
    () => {
      ms932Encoder.encode("\u5871");
    },
    Error,
    "EncodingError U+5871",
  );
  r = r && ([...ms932Encoder.encode("塲")].join(",") === "154,197"); // U+5872
  assertThrows(
    () => {
      ms932Encoder.encode("\u5873");
    },
    Error,
    "EncodingError U+5873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5874");
    },
    Error,
    "EncodingError U+5874",
  );
  r = r && ([...ms932Encoder.encode("塵")].join(",") === "144,111"); // U+5875
  assertThrows(
    () => {
      ms932Encoder.encode("\u5876");
    },
    Error,
    "EncodingError U+5876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5877");
    },
    Error,
    "EncodingError U+5877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5878");
    },
    Error,
    "EncodingError U+5878",
  );
  r = r && ([...ms932Encoder.encode("塹")].join(",") === "154,205"); // U+5879
  assertThrows(
    () => {
      ms932Encoder.encode("\u587A");
    },
    Error,
    "EncodingError U+587A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u587B");
    },
    Error,
    "EncodingError U+587B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u587C");
    },
    Error,
    "EncodingError U+587C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u587D");
    },
    Error,
    "EncodingError U+587D",
  );
  r = r && ([...ms932Encoder.encode("塾")].join(",") === "143,109"); // U+587E
  assertThrows(
    () => {
      ms932Encoder.encode("\u587F");
    },
    Error,
    "EncodingError U+587F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5880");
    },
    Error,
    "EncodingError U+5880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5881");
    },
    Error,
    "EncodingError U+5881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5882");
    },
    Error,
    "EncodingError U+5882",
  );
  r = r && ([...ms932Encoder.encode("境")].join(",") === "139,171"); // U+5883
  assertThrows(
    () => {
      ms932Encoder.encode("\u5884");
    },
    Error,
    "EncodingError U+5884",
  );
  r = r && ([...ms932Encoder.encode("墅")].join(",") === "154,206"); // U+5885
  assertThrows(
    () => {
      ms932Encoder.encode("\u5886");
    },
    Error,
    "EncodingError U+5886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5887");
    },
    Error,
    "EncodingError U+5887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5888");
    },
    Error,
    "EncodingError U+5888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5889");
    },
    Error,
    "EncodingError U+5889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u588A");
    },
    Error,
    "EncodingError U+588A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u588B");
    },
    Error,
    "EncodingError U+588B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u588C");
    },
    Error,
    "EncodingError U+588C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u588D");
    },
    Error,
    "EncodingError U+588D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u588E");
    },
    Error,
    "EncodingError U+588E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u588F");
    },
    Error,
    "EncodingError U+588F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5890");
    },
    Error,
    "EncodingError U+5890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5891");
    },
    Error,
    "EncodingError U+5891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5892");
    },
    Error,
    "EncodingError U+5892",
  );
  r = r && ([...ms932Encoder.encode("墓")].join(",") === "149,230"); // U+5893
  assertThrows(
    () => {
      ms932Encoder.encode("\u5894");
    },
    Error,
    "EncodingError U+5894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5895");
    },
    Error,
    "EncodingError U+5895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5896");
    },
    Error,
    "EncodingError U+5896",
  );
  r = r && ([...ms932Encoder.encode("増")].join(",") === "145,157"); // U+5897
  assertThrows(
    () => {
      ms932Encoder.encode("\u5898");
    },
    Error,
    "EncodingError U+5898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5899");
    },
    Error,
    "EncodingError U+5899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u589A");
    },
    Error,
    "EncodingError U+589A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u589B");
    },
    Error,
    "EncodingError U+589B",
  );
  r = r && ([...ms932Encoder.encode("墜")].join(",") === "146,196"); // U+589C
  assertThrows(
    () => {
      ms932Encoder.encode("\u589D");
    },
    Error,
    "EncodingError U+589D",
  );
  r = r && ([...ms932Encoder.encode("增墟")].join(",") === "250,157,154,208"); // U+589E
  assertThrows(
    () => {
      ms932Encoder.encode("\u58A0");
    },
    Error,
    "EncodingError U+58A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58A1");
    },
    Error,
    "EncodingError U+58A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58A2");
    },
    Error,
    "EncodingError U+58A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58A3");
    },
    Error,
    "EncodingError U+58A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58A4");
    },
    Error,
    "EncodingError U+58A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58A5");
    },
    Error,
    "EncodingError U+58A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58A6");
    },
    Error,
    "EncodingError U+58A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58A7");
    },
    Error,
    "EncodingError U+58A7",
  );
  r = r && ([...ms932Encoder.encode("墨")].join(",") === "150,110"); // U+58A8
  assertThrows(
    () => {
      ms932Encoder.encode("\u58A9");
    },
    Error,
    "EncodingError U+58A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58AA");
    },
    Error,
    "EncodingError U+58AA",
  );
  r = r && ([...ms932Encoder.encode("墫")].join(",") === "154,209"); // U+58AB
  assertThrows(
    () => {
      ms932Encoder.encode("\u58AC");
    },
    Error,
    "EncodingError U+58AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58AD");
    },
    Error,
    "EncodingError U+58AD",
  );
  r = r && ([...ms932Encoder.encode("墮")].join(",") === "154,214"); // U+58AE
  assertThrows(
    () => {
      ms932Encoder.encode("\u58AF");
    },
    Error,
    "EncodingError U+58AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58B0");
    },
    Error,
    "EncodingError U+58B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58B1");
    },
    Error,
    "EncodingError U+58B1",
  );
  r = r && ([...ms932Encoder.encode("墲墳")].join(",") === "250,158,149,173"); // U+58B2
  assertThrows(
    () => {
      ms932Encoder.encode("\u58B4");
    },
    Error,
    "EncodingError U+58B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58B5");
    },
    Error,
    "EncodingError U+58B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58B6");
    },
    Error,
    "EncodingError U+58B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58B7");
    },
    Error,
    "EncodingError U+58B7",
  );
  r = r &&
    ([...ms932Encoder.encode("墸墹墺墻")].join(",") ===
      "154,213,154,207,154,210,154,212"); // U+58B8
  assertThrows(
    () => {
      ms932Encoder.encode("\u58BC");
    },
    Error,
    "EncodingError U+58BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58BD");
    },
    Error,
    "EncodingError U+58BD",
  );
  r = r && ([...ms932Encoder.encode("墾")].join(",") === "141,164"); // U+58BE
  assertThrows(
    () => {
      ms932Encoder.encode("\u58BF");
    },
    Error,
    "EncodingError U+58BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58C0");
    },
    Error,
    "EncodingError U+58C0",
  );
  r = r && ([...ms932Encoder.encode("壁")].join(",") === "149,199"); // U+58C1
  assertThrows(
    () => {
      ms932Encoder.encode("\u58C2");
    },
    Error,
    "EncodingError U+58C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58C3");
    },
    Error,
    "EncodingError U+58C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58C4");
    },
    Error,
    "EncodingError U+58C4",
  );
  r = r && ([...ms932Encoder.encode("壅")].join(",") === "154,215"); // U+58C5
  assertThrows(
    () => {
      ms932Encoder.encode("\u58C6");
    },
    Error,
    "EncodingError U+58C6",
  );
  r = r && ([...ms932Encoder.encode("壇")].join(",") === "146,100"); // U+58C7
  assertThrows(
    () => {
      ms932Encoder.encode("\u58C8");
    },
    Error,
    "EncodingError U+58C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58C9");
    },
    Error,
    "EncodingError U+58C9",
  );
  r = r && ([...ms932Encoder.encode("壊")].join(",") === "137,243"); // U+58CA
  assertThrows(
    () => {
      ms932Encoder.encode("\u58CB");
    },
    Error,
    "EncodingError U+58CB",
  );
  r = r && ([...ms932Encoder.encode("壌")].join(",") === "143,235"); // U+58CC
  assertThrows(
    () => {
      ms932Encoder.encode("\u58CD");
    },
    Error,
    "EncodingError U+58CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58CE");
    },
    Error,
    "EncodingError U+58CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58CF");
    },
    Error,
    "EncodingError U+58CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58D0");
    },
    Error,
    "EncodingError U+58D0",
  );
  r = r && ([...ms932Encoder.encode("壑")].join(",") === "154,217"); // U+58D1
  assertThrows(
    () => {
      ms932Encoder.encode("\u58D2");
    },
    Error,
    "EncodingError U+58D2",
  );
  r = r && ([...ms932Encoder.encode("壓")].join(",") === "154,216"); // U+58D3
  assertThrows(
    () => {
      ms932Encoder.encode("\u58D4");
    },
    Error,
    "EncodingError U+58D4",
  );
  r = r && ([...ms932Encoder.encode("壕")].join(",") === "141,136"); // U+58D5
  assertThrows(
    () => {
      ms932Encoder.encode("\u58D6");
    },
    Error,
    "EncodingError U+58D6",
  );
  r = r &&
    ([...ms932Encoder.encode("壗壘壙")].join(",") === "154,218,154,220,154,219"); // U+58D7
  assertThrows(
    () => {
      ms932Encoder.encode("\u58DA");
    },
    Error,
    "EncodingError U+58DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58DB");
    },
    Error,
    "EncodingError U+58DB",
  );
  r = r && ([...ms932Encoder.encode("壜")].join(",") === "154,222"); // U+58DC
  assertThrows(
    () => {
      ms932Encoder.encode("\u58DD");
    },
    Error,
    "EncodingError U+58DD",
  );
  r = r && ([...ms932Encoder.encode("壞壟")].join(",") === "154,211,154,224"); // U+58DE
  assertThrows(
    () => {
      ms932Encoder.encode("\u58E0");
    },
    Error,
    "EncodingError U+58E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58E1");
    },
    Error,
    "EncodingError U+58E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58E2");
    },
    Error,
    "EncodingError U+58E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58E3");
    },
    Error,
    "EncodingError U+58E3",
  );
  r = r && ([...ms932Encoder.encode("壤壥")].join(",") === "154,223,154,221"); // U+58E4
  assertThrows(
    () => {
      ms932Encoder.encode("\u58E6");
    },
    Error,
    "EncodingError U+58E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58E7");
    },
    Error,
    "EncodingError U+58E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58E8");
    },
    Error,
    "EncodingError U+58E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58E9");
    },
    Error,
    "EncodingError U+58E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58EA");
    },
    Error,
    "EncodingError U+58EA",
  );
  r = r && ([...ms932Encoder.encode("士壬")].join(",") === "142,109,144,112"); // U+58EB
  assertThrows(
    () => {
      ms932Encoder.encode("\u58ED");
    },
    Error,
    "EncodingError U+58ED",
  );
  r = r &&
    ([...ms932Encoder.encode("壮壯声壱売")].join(",") ===
      "145,115,154,225,144,186,136,235,148,132"); // U+58EE
  assertThrows(
    () => {
      ms932Encoder.encode("\u58F3");
    },
    Error,
    "EncodingError U+58F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58F4");
    },
    Error,
    "EncodingError U+58F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58F5");
    },
    Error,
    "EncodingError U+58F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58F6");
    },
    Error,
    "EncodingError U+58F6",
  );
  r = r && ([...ms932Encoder.encode("壷")].join(",") === "146,217"); // U+58F7
  assertThrows(
    () => {
      ms932Encoder.encode("\u58F8");
    },
    Error,
    "EncodingError U+58F8",
  );
  r = r &&
    ([...ms932Encoder.encode("壹壺壻壼壽")].join(",") ===
      "154,227,154,226,154,228,154,229,154,230"); // U+58F9
  assertThrows(
    () => {
      ms932Encoder.encode("\u58FE");
    },
    Error,
    "EncodingError U+58FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u58FF");
    },
    Error,
    "EncodingError U+58FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5900");
    },
    Error,
    "EncodingError U+5900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5901");
    },
    Error,
    "EncodingError U+5901",
  );
  r = r && ([...ms932Encoder.encode("夂")].join(",") === "154,231"); // U+5902
  assertThrows(
    () => {
      ms932Encoder.encode("\u5903");
    },
    Error,
    "EncodingError U+5903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5904");
    },
    Error,
    "EncodingError U+5904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5905");
    },
    Error,
    "EncodingError U+5905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5906");
    },
    Error,
    "EncodingError U+5906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5907");
    },
    Error,
    "EncodingError U+5907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5908");
    },
    Error,
    "EncodingError U+5908",
  );
  r = r &&
    ([...ms932Encoder.encode("変夊夋")].join(",") === "149,207,154,232,250,159"); // U+5909
  assertThrows(
    () => {
      ms932Encoder.encode("\u590C");
    },
    Error,
    "EncodingError U+590C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u590D");
    },
    Error,
    "EncodingError U+590D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u590E");
    },
    Error,
    "EncodingError U+590E",
  );
  r = r && ([...ms932Encoder.encode("夏夐")].join(",") === "137,196,154,233"); // U+590F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5911");
    },
    Error,
    "EncodingError U+5911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5912");
    },
    Error,
    "EncodingError U+5912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5913");
    },
    Error,
    "EncodingError U+5913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5914");
    },
    Error,
    "EncodingError U+5914",
  );
  r = r && ([...ms932Encoder.encode("夕外")].join(",") === "151,91,138,79"); // U+5915
  assertThrows(
    () => {
      ms932Encoder.encode("\u5917");
    },
    Error,
    "EncodingError U+5917",
  );
  r = r &&
    ([...ms932Encoder.encode("夘夙多夛夜")].join(",") ===
      "153,199,143,103,145,189,154,234,150,233"); // U+5918
  assertThrows(
    () => {
      ms932Encoder.encode("\u591D");
    },
    Error,
    "EncodingError U+591D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u591E");
    },
    Error,
    "EncodingError U+591E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u591F");
    },
    Error,
    "EncodingError U+591F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5920");
    },
    Error,
    "EncodingError U+5920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5921");
    },
    Error,
    "EncodingError U+5921",
  );
  r = r && ([...ms932Encoder.encode("夢")].join(",") === "150,178"); // U+5922
  assertThrows(
    () => {
      ms932Encoder.encode("\u5923");
    },
    Error,
    "EncodingError U+5923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5924");
    },
    Error,
    "EncodingError U+5924",
  );
  r = r && ([...ms932Encoder.encode("夥")].join(",") === "154,236"); // U+5925
  assertThrows(
    () => {
      ms932Encoder.encode("\u5926");
    },
    Error,
    "EncodingError U+5926",
  );
  r = r && ([...ms932Encoder.encode("大")].join(",") === "145,229"); // U+5927
  assertThrows(
    () => {
      ms932Encoder.encode("\u5928");
    },
    Error,
    "EncodingError U+5928",
  );
  r = r &&
    ([...ms932Encoder.encode("天太夫夬夭央")].join(",") ===
      "147,86,145,190,149,118,154,237,154,238,137,155"); // U+5929
  assertThrows(
    () => {
      ms932Encoder.encode("\u592F");
    },
    Error,
    "EncodingError U+592F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5930");
    },
    Error,
    "EncodingError U+5930",
  );
  r = r && ([...ms932Encoder.encode("失夲")].join(",") === "142,184,154,239"); // U+5931
  assertThrows(
    () => {
      ms932Encoder.encode("\u5933");
    },
    Error,
    "EncodingError U+5933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5934");
    },
    Error,
    "EncodingError U+5934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5935");
    },
    Error,
    "EncodingError U+5935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5936");
    },
    Error,
    "EncodingError U+5936",
  );
  r = r && ([...ms932Encoder.encode("夷夸")].join(",") === "136,206,154,240"); // U+5937
  assertThrows(
    () => {
      ms932Encoder.encode("\u5939");
    },
    Error,
    "EncodingError U+5939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u593A");
    },
    Error,
    "EncodingError U+593A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u593B");
    },
    Error,
    "EncodingError U+593B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u593C");
    },
    Error,
    "EncodingError U+593C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u593D");
    },
    Error,
    "EncodingError U+593D",
  );
  r = r && ([...ms932Encoder.encode("夾")].join(",") === "154,241"); // U+593E
  assertThrows(
    () => {
      ms932Encoder.encode("\u593F");
    },
    Error,
    "EncodingError U+593F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5940");
    },
    Error,
    "EncodingError U+5940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5941");
    },
    Error,
    "EncodingError U+5941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5942");
    },
    Error,
    "EncodingError U+5942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5943");
    },
    Error,
    "EncodingError U+5943",
  );
  r = r && ([...ms932Encoder.encode("奄")].join(",") === "137,130"); // U+5944
  assertThrows(
    () => {
      ms932Encoder.encode("\u5945");
    },
    Error,
    "EncodingError U+5945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5946");
    },
    Error,
    "EncodingError U+5946",
  );
  r = r &&
    ([...ms932Encoder.encode("奇奈奉")].join(",") === "138,239,147,222,149,242"); // U+5947
  assertThrows(
    () => {
      ms932Encoder.encode("\u594A");
    },
    Error,
    "EncodingError U+594A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u594B");
    },
    Error,
    "EncodingError U+594B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u594C");
    },
    Error,
    "EncodingError U+594C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u594D");
    },
    Error,
    "EncodingError U+594D",
  );
  r = r &&
    ([...ms932Encoder.encode("奎奏奐契")].join(",") ===
      "154,245,145,116,154,244,140,95"); // U+594E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5952");
    },
    Error,
    "EncodingError U+5952",
  );
  r = r &&
    ([...ms932Encoder.encode("奓奔奕")].join(",") === "250,160,150,122,154,243"); // U+5953
  assertThrows(
    () => {
      ms932Encoder.encode("\u5956");
    },
    Error,
    "EncodingError U+5956",
  );
  r = r && ([...ms932Encoder.encode("套奘")].join(",") === "147,133,154,247"); // U+5957
  assertThrows(
    () => {
      ms932Encoder.encode("\u5959");
    },
    Error,
    "EncodingError U+5959",
  );
  r = r && ([...ms932Encoder.encode("奚奛")].join(",") === "154,246,250,161"); // U+595A
  assertThrows(
    () => {
      ms932Encoder.encode("\u595C");
    },
    Error,
    "EncodingError U+595C",
  );
  r = r && ([...ms932Encoder.encode("奝")].join(",") === "250,162"); // U+595D
  assertThrows(
    () => {
      ms932Encoder.encode("\u595E");
    },
    Error,
    "EncodingError U+595E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u595F");
    },
    Error,
    "EncodingError U+595F",
  );
  r = r && ([...ms932Encoder.encode("奠")].join(",") === "154,249"); // U+5960
  assertThrows(
    () => {
      ms932Encoder.encode("\u5961");
    },
    Error,
    "EncodingError U+5961",
  );
  r = r && ([...ms932Encoder.encode("奢奣")].join(",") === "154,248,250,163"); // U+5962
  assertThrows(
    () => {
      ms932Encoder.encode("\u5964");
    },
    Error,
    "EncodingError U+5964",
  );
  r = r && ([...ms932Encoder.encode("奥")].join(",") === "137,156"); // U+5965
  assertThrows(
    () => {
      ms932Encoder.encode("\u5966");
    },
    Error,
    "EncodingError U+5966",
  );
  r = r &&
    ([...ms932Encoder.encode("奧奨奩奪")].join(",") ===
      "154,250,143,167,154,252,146,68"); // U+5967
  assertThrows(
    () => {
      ms932Encoder.encode("\u596B");
    },
    Error,
    "EncodingError U+596B",
  );
  r = r && ([...ms932Encoder.encode("奬")].join(",") === "154,251"); // U+596C
  assertThrows(
    () => {
      ms932Encoder.encode("\u596D");
    },
    Error,
    "EncodingError U+596D",
  );
  r = r && ([...ms932Encoder.encode("奮")].join(",") === "149,177"); // U+596E
  assertThrows(
    () => {
      ms932Encoder.encode("\u596F");
    },
    Error,
    "EncodingError U+596F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5970");
    },
    Error,
    "EncodingError U+5970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5971");
    },
    Error,
    "EncodingError U+5971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5972");
    },
    Error,
    "EncodingError U+5972",
  );
  r = r && ([...ms932Encoder.encode("女奴")].join(",") === "143,151,147,122"); // U+5973
  assertThrows(
    () => {
      ms932Encoder.encode("\u5975");
    },
    Error,
    "EncodingError U+5975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5976");
    },
    Error,
    "EncodingError U+5976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5977");
    },
    Error,
    "EncodingError U+5977",
  );
  r = r && ([...ms932Encoder.encode("奸")].join(",") === "155,64"); // U+5978
  assertThrows(
    () => {
      ms932Encoder.encode("\u5979");
    },
    Error,
    "EncodingError U+5979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u597A");
    },
    Error,
    "EncodingError U+597A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u597B");
    },
    Error,
    "EncodingError U+597B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u597C");
    },
    Error,
    "EncodingError U+597C",
  );
  r = r && ([...ms932Encoder.encode("好")].join(",") === "141,68"); // U+597D
  assertThrows(
    () => {
      ms932Encoder.encode("\u597E");
    },
    Error,
    "EncodingError U+597E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u597F");
    },
    Error,
    "EncodingError U+597F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5980");
    },
    Error,
    "EncodingError U+5980",
  );
  r = r &&
    ([...ms932Encoder.encode("妁如妃妄")].join(",") ===
      "155,65,148,64,148,220,150,207"); // U+5981
  assertThrows(
    () => {
      ms932Encoder.encode("\u5985");
    },
    Error,
    "EncodingError U+5985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5986");
    },
    Error,
    "EncodingError U+5986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5987");
    },
    Error,
    "EncodingError U+5987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5988");
    },
    Error,
    "EncodingError U+5988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5989");
    },
    Error,
    "EncodingError U+5989",
  );
  r = r && ([...ms932Encoder.encode("妊")].join(",") === "148,68"); // U+598A
  assertThrows(
    () => {
      ms932Encoder.encode("\u598B");
    },
    Error,
    "EncodingError U+598B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u598C");
    },
    Error,
    "EncodingError U+598C",
  );
  r = r && ([...ms932Encoder.encode("妍")].join(",") === "155,74"); // U+598D
  assertThrows(
    () => {
      ms932Encoder.encode("\u598E");
    },
    Error,
    "EncodingError U+598E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u598F");
    },
    Error,
    "EncodingError U+598F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5990");
    },
    Error,
    "EncodingError U+5990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5991");
    },
    Error,
    "EncodingError U+5991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5992");
    },
    Error,
    "EncodingError U+5992",
  );
  r = r && ([...ms932Encoder.encode("妓")].join(",") === "139,87"); // U+5993
  assertThrows(
    () => {
      ms932Encoder.encode("\u5994");
    },
    Error,
    "EncodingError U+5994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5995");
    },
    Error,
    "EncodingError U+5995",
  );
  r = r && ([...ms932Encoder.encode("妖")].join(",") === "151,100"); // U+5996
  assertThrows(
    () => {
      ms932Encoder.encode("\u5997");
    },
    Error,
    "EncodingError U+5997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5998");
    },
    Error,
    "EncodingError U+5998",
  );
  r = r && ([...ms932Encoder.encode("妙")].join(",") === "150,173"); // U+5999
  assertThrows(
    () => {
      ms932Encoder.encode("\u599A");
    },
    Error,
    "EncodingError U+599A",
  );
  r = r && ([...ms932Encoder.encode("妛")].join(",") === "155,170"); // U+599B
  assertThrows(
    () => {
      ms932Encoder.encode("\u599C");
    },
    Error,
    "EncodingError U+599C",
  );
  r = r && ([...ms932Encoder.encode("妝")].join(",") === "155,66"); // U+599D
  assertThrows(
    () => {
      ms932Encoder.encode("\u599E");
    },
    Error,
    "EncodingError U+599E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u599F");
    },
    Error,
    "EncodingError U+599F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59A0");
    },
    Error,
    "EncodingError U+59A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59A1");
    },
    Error,
    "EncodingError U+59A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59A2");
    },
    Error,
    "EncodingError U+59A2",
  );
  r = r &&
    ([...ms932Encoder.encode("妣妤妥")].join(",") === "155,69,250,164,145,195"); // U+59A3
  assertThrows(
    () => {
      ms932Encoder.encode("\u59A6");
    },
    Error,
    "EncodingError U+59A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59A7");
    },
    Error,
    "EncodingError U+59A7",
  );
  r = r && ([...ms932Encoder.encode("妨")].join(",") === "150,87"); // U+59A8
  assertThrows(
    () => {
      ms932Encoder.encode("\u59A9");
    },
    Error,
    "EncodingError U+59A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59AA");
    },
    Error,
    "EncodingError U+59AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59AB");
    },
    Error,
    "EncodingError U+59AB",
  );
  r = r && ([...ms932Encoder.encode("妬")].join(",") === "147,105"); // U+59AC
  assertThrows(
    () => {
      ms932Encoder.encode("\u59AD");
    },
    Error,
    "EncodingError U+59AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59AE");
    },
    Error,
    "EncodingError U+59AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59AF");
    },
    Error,
    "EncodingError U+59AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59B0");
    },
    Error,
    "EncodingError U+59B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59B1");
    },
    Error,
    "EncodingError U+59B1",
  );
  r = r && ([...ms932Encoder.encode("妲")].join(",") === "155,70"); // U+59B2
  assertThrows(
    () => {
      ms932Encoder.encode("\u59B3");
    },
    Error,
    "EncodingError U+59B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59B4");
    },
    Error,
    "EncodingError U+59B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59B5");
    },
    Error,
    "EncodingError U+59B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59B6");
    },
    Error,
    "EncodingError U+59B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59B7");
    },
    Error,
    "EncodingError U+59B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59B8");
    },
    Error,
    "EncodingError U+59B8",
  );
  r = r &&
    ([...ms932Encoder.encode("妹妺妻")].join(",") === "150,133,250,165,141,200"); // U+59B9
  assertThrows(
    () => {
      ms932Encoder.encode("\u59BC");
    },
    Error,
    "EncodingError U+59BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59BD");
    },
    Error,
    "EncodingError U+59BD",
  );
  r = r && ([...ms932Encoder.encode("妾")].join(",") === "143,168"); // U+59BE
  assertThrows(
    () => {
      ms932Encoder.encode("\u59BF");
    },
    Error,
    "EncodingError U+59BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59C0");
    },
    Error,
    "EncodingError U+59C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59C1");
    },
    Error,
    "EncodingError U+59C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59C2");
    },
    Error,
    "EncodingError U+59C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59C3");
    },
    Error,
    "EncodingError U+59C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59C4");
    },
    Error,
    "EncodingError U+59C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59C5");
    },
    Error,
    "EncodingError U+59C5",
  );
  r = r && ([...ms932Encoder.encode("姆")].join(",") === "155,71"); // U+59C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u59C7");
    },
    Error,
    "EncodingError U+59C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59C8");
    },
    Error,
    "EncodingError U+59C8",
  );
  r = r && ([...ms932Encoder.encode("姉")].join(",") === "142,111"); // U+59C9
  assertThrows(
    () => {
      ms932Encoder.encode("\u59CA");
    },
    Error,
    "EncodingError U+59CA",
  );
  r = r && ([...ms932Encoder.encode("始")].join(",") === "142,110"); // U+59CB
  assertThrows(
    () => {
      ms932Encoder.encode("\u59CC");
    },
    Error,
    "EncodingError U+59CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59CD");
    },
    Error,
    "EncodingError U+59CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59CE");
    },
    Error,
    "EncodingError U+59CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59CF");
    },
    Error,
    "EncodingError U+59CF",
  );
  r = r && ([...ms932Encoder.encode("姐姑")].join(",") === "136,183,140,198"); // U+59D0
  assertThrows(
    () => {
      ms932Encoder.encode("\u59D2");
    },
    Error,
    "EncodingError U+59D2",
  );
  r = r && ([...ms932Encoder.encode("姓委")].join(",") === "144,169,136,207"); // U+59D3
  assertThrows(
    () => {
      ms932Encoder.encode("\u59D5");
    },
    Error,
    "EncodingError U+59D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59D6");
    },
    Error,
    "EncodingError U+59D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59D7");
    },
    Error,
    "EncodingError U+59D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59D8");
    },
    Error,
    "EncodingError U+59D8",
  );
  r = r && ([...ms932Encoder.encode("姙姚")].join(",") === "155,75,155,76"); // U+59D9
  assertThrows(
    () => {
      ms932Encoder.encode("\u59DB");
    },
    Error,
    "EncodingError U+59DB",
  );
  r = r && ([...ms932Encoder.encode("姜")].join(",") === "155,73"); // U+59DC
  assertThrows(
    () => {
      ms932Encoder.encode("\u59DD");
    },
    Error,
    "EncodingError U+59DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59DE");
    },
    Error,
    "EncodingError U+59DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59DF");
    },
    Error,
    "EncodingError U+59DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59E0");
    },
    Error,
    "EncodingError U+59E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59E1");
    },
    Error,
    "EncodingError U+59E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59E2");
    },
    Error,
    "EncodingError U+59E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59E3");
    },
    Error,
    "EncodingError U+59E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59E4");
    },
    Error,
    "EncodingError U+59E4",
  );
  r = r && ([...ms932Encoder.encode("姥姦")].join(",") === "137,87,138,173"); // U+59E5
  assertThrows(
    () => {
      ms932Encoder.encode("\u59E7");
    },
    Error,
    "EncodingError U+59E7",
  );
  r = r && ([...ms932Encoder.encode("姨")].join(",") === "155,72"); // U+59E8
  assertThrows(
    () => {
      ms932Encoder.encode("\u59E9");
    },
    Error,
    "EncodingError U+59E9",
  );
  r = r && ([...ms932Encoder.encode("姪姫")].join(",") === "150,195,149,80"); // U+59EA
  assertThrows(
    () => {
      ms932Encoder.encode("\u59EC");
    },
    Error,
    "EncodingError U+59EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59ED");
    },
    Error,
    "EncodingError U+59ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59EE");
    },
    Error,
    "EncodingError U+59EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59EF");
    },
    Error,
    "EncodingError U+59EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59F0");
    },
    Error,
    "EncodingError U+59F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59F1");
    },
    Error,
    "EncodingError U+59F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59F2");
    },
    Error,
    "EncodingError U+59F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59F3");
    },
    Error,
    "EncodingError U+59F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59F4");
    },
    Error,
    "EncodingError U+59F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59F5");
    },
    Error,
    "EncodingError U+59F5",
  );
  r = r && ([...ms932Encoder.encode("姶")].join(",") === "136,166"); // U+59F6
  assertThrows(
    () => {
      ms932Encoder.encode("\u59F7");
    },
    Error,
    "EncodingError U+59F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59F8");
    },
    Error,
    "EncodingError U+59F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59F9");
    },
    Error,
    "EncodingError U+59F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59FA");
    },
    Error,
    "EncodingError U+59FA",
  );
  r = r && ([...ms932Encoder.encode("姻")].join(",") === "136,247"); // U+59FB
  assertThrows(
    () => {
      ms932Encoder.encode("\u59FC");
    },
    Error,
    "EncodingError U+59FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59FD");
    },
    Error,
    "EncodingError U+59FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u59FE");
    },
    Error,
    "EncodingError U+59FE",
  );
  r = r && ([...ms932Encoder.encode("姿")].join(",") === "142,112"); // U+59FF
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A00");
    },
    Error,
    "EncodingError U+5A00",
  );
  r = r && ([...ms932Encoder.encode("威")].join(",") === "136,208"); // U+5A01
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A02");
    },
    Error,
    "EncodingError U+5A02",
  );
  r = r && ([...ms932Encoder.encode("娃")].join(",") === "136,161"); // U+5A03
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A04");
    },
    Error,
    "EncodingError U+5A04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A05");
    },
    Error,
    "EncodingError U+5A05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A06");
    },
    Error,
    "EncodingError U+5A06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A07");
    },
    Error,
    "EncodingError U+5A07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A08");
    },
    Error,
    "EncodingError U+5A08",
  );
  r = r && ([...ms932Encoder.encode("娉")].join(",") === "155,81"); // U+5A09
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A0A");
    },
    Error,
    "EncodingError U+5A0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A0B");
    },
    Error,
    "EncodingError U+5A0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A0C");
    },
    Error,
    "EncodingError U+5A0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A0D");
    },
    Error,
    "EncodingError U+5A0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A0E");
    },
    Error,
    "EncodingError U+5A0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A0F");
    },
    Error,
    "EncodingError U+5A0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A10");
    },
    Error,
    "EncodingError U+5A10",
  );
  r = r && ([...ms932Encoder.encode("娑")].join(",") === "155,79"); // U+5A11
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A12");
    },
    Error,
    "EncodingError U+5A12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A13");
    },
    Error,
    "EncodingError U+5A13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A14");
    },
    Error,
    "EncodingError U+5A14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A15");
    },
    Error,
    "EncodingError U+5A15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A16");
    },
    Error,
    "EncodingError U+5A16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A17");
    },
    Error,
    "EncodingError U+5A17",
  );
  r = r && ([...ms932Encoder.encode("娘")].join(",") === "150,186"); // U+5A18
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A19");
    },
    Error,
    "EncodingError U+5A19",
  );
  r = r && ([...ms932Encoder.encode("娚")].join(",") === "155,82"); // U+5A1A
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A1B");
    },
    Error,
    "EncodingError U+5A1B",
  );
  r = r && ([...ms932Encoder.encode("娜")].join(",") === "155,80"); // U+5A1C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A1D");
    },
    Error,
    "EncodingError U+5A1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A1E");
    },
    Error,
    "EncodingError U+5A1E",
  );
  r = r && ([...ms932Encoder.encode("娟娠")].join(",") === "155,78,144,80"); // U+5A1F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A21");
    },
    Error,
    "EncodingError U+5A21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A22");
    },
    Error,
    "EncodingError U+5A22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A23");
    },
    Error,
    "EncodingError U+5A23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A24");
    },
    Error,
    "EncodingError U+5A24",
  );
  r = r && ([...ms932Encoder.encode("娥")].join(",") === "155,77"); // U+5A25
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A26");
    },
    Error,
    "EncodingError U+5A26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A27");
    },
    Error,
    "EncodingError U+5A27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A28");
    },
    Error,
    "EncodingError U+5A28",
  );
  r = r && ([...ms932Encoder.encode("娩")].join(",") === "149,216"); // U+5A29
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A2A");
    },
    Error,
    "EncodingError U+5A2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A2B");
    },
    Error,
    "EncodingError U+5A2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A2C");
    },
    Error,
    "EncodingError U+5A2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A2D");
    },
    Error,
    "EncodingError U+5A2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A2E");
    },
    Error,
    "EncodingError U+5A2E",
  );
  r = r && ([...ms932Encoder.encode("娯")].join(",") === "140,226"); // U+5A2F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A30");
    },
    Error,
    "EncodingError U+5A30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A31");
    },
    Error,
    "EncodingError U+5A31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A32");
    },
    Error,
    "EncodingError U+5A32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A33");
    },
    Error,
    "EncodingError U+5A33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A34");
    },
    Error,
    "EncodingError U+5A34",
  );
  r = r && ([...ms932Encoder.encode("娵娶")].join(",") === "155,86,155,87"); // U+5A35
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A37");
    },
    Error,
    "EncodingError U+5A37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A38");
    },
    Error,
    "EncodingError U+5A38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A39");
    },
    Error,
    "EncodingError U+5A39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A3A");
    },
    Error,
    "EncodingError U+5A3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A3B");
    },
    Error,
    "EncodingError U+5A3B",
  );
  r = r && ([...ms932Encoder.encode("娼")].join(",") === "143,169"); // U+5A3C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A3D");
    },
    Error,
    "EncodingError U+5A3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A3E");
    },
    Error,
    "EncodingError U+5A3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A3F");
    },
    Error,
    "EncodingError U+5A3F",
  );
  r = r && ([...ms932Encoder.encode("婀婁")].join(",") === "155,83,152,75"); // U+5A40
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A42");
    },
    Error,
    "EncodingError U+5A42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A43");
    },
    Error,
    "EncodingError U+5A43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A44");
    },
    Error,
    "EncodingError U+5A44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A45");
    },
    Error,
    "EncodingError U+5A45",
  );
  r = r && ([...ms932Encoder.encode("婆")].join(",") === "148,107"); // U+5A46
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A47");
    },
    Error,
    "EncodingError U+5A47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A48");
    },
    Error,
    "EncodingError U+5A48",
  );
  r = r && ([...ms932Encoder.encode("婉")].join(",") === "155,85"); // U+5A49
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A4A");
    },
    Error,
    "EncodingError U+5A4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A4B");
    },
    Error,
    "EncodingError U+5A4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A4C");
    },
    Error,
    "EncodingError U+5A4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A4D");
    },
    Error,
    "EncodingError U+5A4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A4E");
    },
    Error,
    "EncodingError U+5A4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A4F");
    },
    Error,
    "EncodingError U+5A4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A50");
    },
    Error,
    "EncodingError U+5A50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A51");
    },
    Error,
    "EncodingError U+5A51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A52");
    },
    Error,
    "EncodingError U+5A52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A53");
    },
    Error,
    "EncodingError U+5A53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A54");
    },
    Error,
    "EncodingError U+5A54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A55");
    },
    Error,
    "EncodingError U+5A55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A56");
    },
    Error,
    "EncodingError U+5A56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A57");
    },
    Error,
    "EncodingError U+5A57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A58");
    },
    Error,
    "EncodingError U+5A58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A59");
    },
    Error,
    "EncodingError U+5A59",
  );
  r = r && ([...ms932Encoder.encode("婚")].join(",") === "141,165"); // U+5A5A
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A5B");
    },
    Error,
    "EncodingError U+5A5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A5C");
    },
    Error,
    "EncodingError U+5A5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A5D");
    },
    Error,
    "EncodingError U+5A5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A5E");
    },
    Error,
    "EncodingError U+5A5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A5F");
    },
    Error,
    "EncodingError U+5A5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A60");
    },
    Error,
    "EncodingError U+5A60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A61");
    },
    Error,
    "EncodingError U+5A61",
  );
  r = r && ([...ms932Encoder.encode("婢")].join(",") === "155,88"); // U+5A62
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A63");
    },
    Error,
    "EncodingError U+5A63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A64");
    },
    Error,
    "EncodingError U+5A64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A65");
    },
    Error,
    "EncodingError U+5A65",
  );
  r = r && ([...ms932Encoder.encode("婦")].join(",") === "149,119"); // U+5A66
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A67");
    },
    Error,
    "EncodingError U+5A67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A68");
    },
    Error,
    "EncodingError U+5A68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A69");
    },
    Error,
    "EncodingError U+5A69",
  );
  r = r && ([...ms932Encoder.encode("婪")].join(",") === "155,89"); // U+5A6A
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A6B");
    },
    Error,
    "EncodingError U+5A6B",
  );
  r = r && ([...ms932Encoder.encode("婬")].join(",") === "155,84"); // U+5A6C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A6D");
    },
    Error,
    "EncodingError U+5A6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A6E");
    },
    Error,
    "EncodingError U+5A6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A6F");
    },
    Error,
    "EncodingError U+5A6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A70");
    },
    Error,
    "EncodingError U+5A70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A71");
    },
    Error,
    "EncodingError U+5A71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A72");
    },
    Error,
    "EncodingError U+5A72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A73");
    },
    Error,
    "EncodingError U+5A73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A74");
    },
    Error,
    "EncodingError U+5A74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A75");
    },
    Error,
    "EncodingError U+5A75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A76");
    },
    Error,
    "EncodingError U+5A76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A77");
    },
    Error,
    "EncodingError U+5A77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A78");
    },
    Error,
    "EncodingError U+5A78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A79");
    },
    Error,
    "EncodingError U+5A79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A7A");
    },
    Error,
    "EncodingError U+5A7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A7B");
    },
    Error,
    "EncodingError U+5A7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A7C");
    },
    Error,
    "EncodingError U+5A7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A7D");
    },
    Error,
    "EncodingError U+5A7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A7E");
    },
    Error,
    "EncodingError U+5A7E",
  );
  r = r && ([...ms932Encoder.encode("婿")].join(",") === "150,185"); // U+5A7F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A80");
    },
    Error,
    "EncodingError U+5A80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A81");
    },
    Error,
    "EncodingError U+5A81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A82");
    },
    Error,
    "EncodingError U+5A82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A83");
    },
    Error,
    "EncodingError U+5A83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A84");
    },
    Error,
    "EncodingError U+5A84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A85");
    },
    Error,
    "EncodingError U+5A85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A86");
    },
    Error,
    "EncodingError U+5A86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A87");
    },
    Error,
    "EncodingError U+5A87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A88");
    },
    Error,
    "EncodingError U+5A88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A89");
    },
    Error,
    "EncodingError U+5A89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A8A");
    },
    Error,
    "EncodingError U+5A8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A8B");
    },
    Error,
    "EncodingError U+5A8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A8C");
    },
    Error,
    "EncodingError U+5A8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A8D");
    },
    Error,
    "EncodingError U+5A8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A8E");
    },
    Error,
    "EncodingError U+5A8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A8F");
    },
    Error,
    "EncodingError U+5A8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A90");
    },
    Error,
    "EncodingError U+5A90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A91");
    },
    Error,
    "EncodingError U+5A91",
  );
  r = r && ([...ms932Encoder.encode("媒")].join(",") === "148,125"); // U+5A92
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A93");
    },
    Error,
    "EncodingError U+5A93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A94");
    },
    Error,
    "EncodingError U+5A94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A95");
    },
    Error,
    "EncodingError U+5A95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A96");
    },
    Error,
    "EncodingError U+5A96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A97");
    },
    Error,
    "EncodingError U+5A97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A98");
    },
    Error,
    "EncodingError U+5A98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A99");
    },
    Error,
    "EncodingError U+5A99",
  );
  r = r && ([...ms932Encoder.encode("媚媛")].join(",") === "155,90,149,81"); // U+5A9A
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A9C");
    },
    Error,
    "EncodingError U+5A9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A9D");
    },
    Error,
    "EncodingError U+5A9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A9E");
    },
    Error,
    "EncodingError U+5A9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5A9F");
    },
    Error,
    "EncodingError U+5A9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AA0");
    },
    Error,
    "EncodingError U+5AA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AA1");
    },
    Error,
    "EncodingError U+5AA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AA2");
    },
    Error,
    "EncodingError U+5AA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AA3");
    },
    Error,
    "EncodingError U+5AA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AA4");
    },
    Error,
    "EncodingError U+5AA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AA5");
    },
    Error,
    "EncodingError U+5AA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AA6");
    },
    Error,
    "EncodingError U+5AA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AA7");
    },
    Error,
    "EncodingError U+5AA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AA8");
    },
    Error,
    "EncodingError U+5AA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AA9");
    },
    Error,
    "EncodingError U+5AA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AAA");
    },
    Error,
    "EncodingError U+5AAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AAB");
    },
    Error,
    "EncodingError U+5AAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AAC");
    },
    Error,
    "EncodingError U+5AAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AAD");
    },
    Error,
    "EncodingError U+5AAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AAE");
    },
    Error,
    "EncodingError U+5AAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AAF");
    },
    Error,
    "EncodingError U+5AAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AB0");
    },
    Error,
    "EncodingError U+5AB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AB1");
    },
    Error,
    "EncodingError U+5AB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AB2");
    },
    Error,
    "EncodingError U+5AB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AB3");
    },
    Error,
    "EncodingError U+5AB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AB4");
    },
    Error,
    "EncodingError U+5AB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AB5");
    },
    Error,
    "EncodingError U+5AB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AB6");
    },
    Error,
    "EncodingError U+5AB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AB7");
    },
    Error,
    "EncodingError U+5AB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AB8");
    },
    Error,
    "EncodingError U+5AB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AB9");
    },
    Error,
    "EncodingError U+5AB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ABA");
    },
    Error,
    "EncodingError U+5ABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ABB");
    },
    Error,
    "EncodingError U+5ABB",
  );
  r = r &&
    ([...ms932Encoder.encode("媼媽媾")].join(",") === "155,91,155,95,155,92"); // U+5ABC
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ABF");
    },
    Error,
    "EncodingError U+5ABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AC0");
    },
    Error,
    "EncodingError U+5AC0",
  );
  r = r && ([...ms932Encoder.encode("嫁嫂")].join(",") === "137,197,155,94"); // U+5AC1
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AC3");
    },
    Error,
    "EncodingError U+5AC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AC4");
    },
    Error,
    "EncodingError U+5AC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AC5");
    },
    Error,
    "EncodingError U+5AC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AC6");
    },
    Error,
    "EncodingError U+5AC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AC7");
    },
    Error,
    "EncodingError U+5AC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AC8");
    },
    Error,
    "EncodingError U+5AC8",
  );
  r = r && ([...ms932Encoder.encode("嫉")].join(",") === "142,185"); // U+5AC9
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ACA");
    },
    Error,
    "EncodingError U+5ACA",
  );
  r = r && ([...ms932Encoder.encode("嫋嫌")].join(",") === "155,93,140,153"); // U+5ACB
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ACD");
    },
    Error,
    "EncodingError U+5ACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ACE");
    },
    Error,
    "EncodingError U+5ACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ACF");
    },
    Error,
    "EncodingError U+5ACF",
  );
  r = r && ([...ms932Encoder.encode("嫐")].join(",") === "155,107"); // U+5AD0
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AD1");
    },
    Error,
    "EncodingError U+5AD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AD2");
    },
    Error,
    "EncodingError U+5AD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AD3");
    },
    Error,
    "EncodingError U+5AD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AD4");
    },
    Error,
    "EncodingError U+5AD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AD5");
    },
    Error,
    "EncodingError U+5AD5",
  );
  r = r && ([...ms932Encoder.encode("嫖嫗")].join(",") === "155,100,155,97"); // U+5AD6
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AD8");
    },
    Error,
    "EncodingError U+5AD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AD9");
    },
    Error,
    "EncodingError U+5AD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ADA");
    },
    Error,
    "EncodingError U+5ADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ADB");
    },
    Error,
    "EncodingError U+5ADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ADC");
    },
    Error,
    "EncodingError U+5ADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ADD");
    },
    Error,
    "EncodingError U+5ADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ADE");
    },
    Error,
    "EncodingError U+5ADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5ADF");
    },
    Error,
    "EncodingError U+5ADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AE0");
    },
    Error,
    "EncodingError U+5AE0",
  );
  r = r && ([...ms932Encoder.encode("嫡")].join(",") === "146,132"); // U+5AE1
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AE2");
    },
    Error,
    "EncodingError U+5AE2",
  );
  r = r && ([...ms932Encoder.encode("嫣")].join(",") === "155,96"); // U+5AE3
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AE4");
    },
    Error,
    "EncodingError U+5AE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AE5");
    },
    Error,
    "EncodingError U+5AE5",
  );
  r = r && ([...ms932Encoder.encode("嫦")].join(",") === "155,98"); // U+5AE6
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AE7");
    },
    Error,
    "EncodingError U+5AE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AE8");
    },
    Error,
    "EncodingError U+5AE8",
  );
  r = r && ([...ms932Encoder.encode("嫩")].join(",") === "155,99"); // U+5AE9
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AEA");
    },
    Error,
    "EncodingError U+5AEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AEB");
    },
    Error,
    "EncodingError U+5AEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AEC");
    },
    Error,
    "EncodingError U+5AEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AED");
    },
    Error,
    "EncodingError U+5AED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AEE");
    },
    Error,
    "EncodingError U+5AEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AEF");
    },
    Error,
    "EncodingError U+5AEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AF0");
    },
    Error,
    "EncodingError U+5AF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AF1");
    },
    Error,
    "EncodingError U+5AF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AF2");
    },
    Error,
    "EncodingError U+5AF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AF3");
    },
    Error,
    "EncodingError U+5AF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AF4");
    },
    Error,
    "EncodingError U+5AF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AF5");
    },
    Error,
    "EncodingError U+5AF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AF6");
    },
    Error,
    "EncodingError U+5AF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AF7");
    },
    Error,
    "EncodingError U+5AF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AF8");
    },
    Error,
    "EncodingError U+5AF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AF9");
    },
    Error,
    "EncodingError U+5AF9",
  );
  r = r && ([...ms932Encoder.encode("嫺嫻")].join(",") === "155,101,155,102"); // U+5AFA
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AFC");
    },
    Error,
    "EncodingError U+5AFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AFD");
    },
    Error,
    "EncodingError U+5AFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AFE");
    },
    Error,
    "EncodingError U+5AFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5AFF");
    },
    Error,
    "EncodingError U+5AFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B00");
    },
    Error,
    "EncodingError U+5B00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B01");
    },
    Error,
    "EncodingError U+5B01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B02");
    },
    Error,
    "EncodingError U+5B02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B03");
    },
    Error,
    "EncodingError U+5B03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B04");
    },
    Error,
    "EncodingError U+5B04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B05");
    },
    Error,
    "EncodingError U+5B05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B06");
    },
    Error,
    "EncodingError U+5B06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B07");
    },
    Error,
    "EncodingError U+5B07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B08");
    },
    Error,
    "EncodingError U+5B08",
  );
  r = r && ([...ms932Encoder.encode("嬉")].join(",") === "138,240"); // U+5B09
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B0A");
    },
    Error,
    "EncodingError U+5B0A",
  );
  r = r && ([...ms932Encoder.encode("嬋嬌")].join(",") === "155,104,155,103"); // U+5B0B
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B0D");
    },
    Error,
    "EncodingError U+5B0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B0E");
    },
    Error,
    "EncodingError U+5B0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B0F");
    },
    Error,
    "EncodingError U+5B0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B10");
    },
    Error,
    "EncodingError U+5B10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B11");
    },
    Error,
    "EncodingError U+5B11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B12");
    },
    Error,
    "EncodingError U+5B12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B13");
    },
    Error,
    "EncodingError U+5B13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B14");
    },
    Error,
    "EncodingError U+5B14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B15");
    },
    Error,
    "EncodingError U+5B15",
  );
  r = r && ([...ms932Encoder.encode("嬖")].join(",") === "155,105"); // U+5B16
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B17");
    },
    Error,
    "EncodingError U+5B17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B18");
    },
    Error,
    "EncodingError U+5B18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B19");
    },
    Error,
    "EncodingError U+5B19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B1A");
    },
    Error,
    "EncodingError U+5B1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B1B");
    },
    Error,
    "EncodingError U+5B1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B1C");
    },
    Error,
    "EncodingError U+5B1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B1D");
    },
    Error,
    "EncodingError U+5B1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B1E");
    },
    Error,
    "EncodingError U+5B1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B1F");
    },
    Error,
    "EncodingError U+5B1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B20");
    },
    Error,
    "EncodingError U+5B20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B21");
    },
    Error,
    "EncodingError U+5B21",
  );
  r = r && ([...ms932Encoder.encode("嬢")].join(",") === "143,236"); // U+5B22
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B23");
    },
    Error,
    "EncodingError U+5B23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B24");
    },
    Error,
    "EncodingError U+5B24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B25");
    },
    Error,
    "EncodingError U+5B25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B26");
    },
    Error,
    "EncodingError U+5B26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B27");
    },
    Error,
    "EncodingError U+5B27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B28");
    },
    Error,
    "EncodingError U+5B28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B29");
    },
    Error,
    "EncodingError U+5B29",
  );
  r = r && ([...ms932Encoder.encode("嬪")].join(",") === "155,108"); // U+5B2A
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B2B");
    },
    Error,
    "EncodingError U+5B2B",
  );
  r = r && ([...ms932Encoder.encode("嬬")].join(",") === "146,218"); // U+5B2C
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B2D");
    },
    Error,
    "EncodingError U+5B2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B2E");
    },
    Error,
    "EncodingError U+5B2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B2F");
    },
    Error,
    "EncodingError U+5B2F",
  );
  r = r && ([...ms932Encoder.encode("嬰")].join(",") === "137,100"); // U+5B30
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B31");
    },
    Error,
    "EncodingError U+5B31",
  );
  r = r && ([...ms932Encoder.encode("嬲")].join(",") === "155,106"); // U+5B32
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B33");
    },
    Error,
    "EncodingError U+5B33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B34");
    },
    Error,
    "EncodingError U+5B34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B35");
    },
    Error,
    "EncodingError U+5B35",
  );
  r = r && ([...ms932Encoder.encode("嬶")].join(",") === "155,109"); // U+5B36
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B37");
    },
    Error,
    "EncodingError U+5B37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B38");
    },
    Error,
    "EncodingError U+5B38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B39");
    },
    Error,
    "EncodingError U+5B39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B3A");
    },
    Error,
    "EncodingError U+5B3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B3B");
    },
    Error,
    "EncodingError U+5B3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B3C");
    },
    Error,
    "EncodingError U+5B3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B3D");
    },
    Error,
    "EncodingError U+5B3D",
  );
  r = r && ([...ms932Encoder.encode("嬾")].join(",") === "155,110"); // U+5B3E
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B3F");
    },
    Error,
    "EncodingError U+5B3F",
  );
  r = r && ([...ms932Encoder.encode("孀")].join(",") === "155,113"); // U+5B40
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B41");
    },
    Error,
    "EncodingError U+5B41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B42");
    },
    Error,
    "EncodingError U+5B42",
  );
  r = r && ([...ms932Encoder.encode("孃")].join(",") === "155,111"); // U+5B43
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B44");
    },
    Error,
    "EncodingError U+5B44",
  );
  r = r && ([...ms932Encoder.encode("孅")].join(",") === "155,112"); // U+5B45
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B46");
    },
    Error,
    "EncodingError U+5B46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B47");
    },
    Error,
    "EncodingError U+5B47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B48");
    },
    Error,
    "EncodingError U+5B48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B49");
    },
    Error,
    "EncodingError U+5B49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B4A");
    },
    Error,
    "EncodingError U+5B4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B4B");
    },
    Error,
    "EncodingError U+5B4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B4C");
    },
    Error,
    "EncodingError U+5B4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B4D");
    },
    Error,
    "EncodingError U+5B4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B4E");
    },
    Error,
    "EncodingError U+5B4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B4F");
    },
    Error,
    "EncodingError U+5B4F",
  );
  r = r && ([...ms932Encoder.encode("子孑")].join(",") === "142,113,155,114"); // U+5B50
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B52");
    },
    Error,
    "EncodingError U+5B52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B53");
    },
    Error,
    "EncodingError U+5B53",
  );
  r = r &&
    ([...ms932Encoder.encode("孔孕孖字存")].join(",") ===
      "141,69,155,115,250,166,142,154,145,182"); // U+5B54
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B59");
    },
    Error,
    "EncodingError U+5B59",
  );
  r = r &&
    ([...ms932Encoder.encode("孚孛孜孝")].join(",") ===
      "155,116,155,117,142,121,141,70"); // U+5B5A
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B5E");
    },
    Error,
    "EncodingError U+5B5E",
  );
  r = r && ([...ms932Encoder.encode("孟")].join(",") === "150,208"); // U+5B5F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B60");
    },
    Error,
    "EncodingError U+5B60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B61");
    },
    Error,
    "EncodingError U+5B61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B62");
    },
    Error,
    "EncodingError U+5B62",
  );
  r = r &&
    ([...ms932Encoder.encode("季孤孥学")].join(",") ===
      "139,71,140,199,155,118,138,119"); // U+5B63
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B67");
    },
    Error,
    "EncodingError U+5B67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B68");
    },
    Error,
    "EncodingError U+5B68",
  );
  r = r && ([...ms932Encoder.encode("孩")].join(",") === "155,119"); // U+5B69
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B6A");
    },
    Error,
    "EncodingError U+5B6A",
  );
  r = r && ([...ms932Encoder.encode("孫")].join(",") === "145,183"); // U+5B6B
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B6C");
    },
    Error,
    "EncodingError U+5B6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B6D");
    },
    Error,
    "EncodingError U+5B6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B6E");
    },
    Error,
    "EncodingError U+5B6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B6F");
    },
    Error,
    "EncodingError U+5B6F",
  );
  r = r && ([...ms932Encoder.encode("孰孱")].join(",") === "155,120,155,161"); // U+5B70
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B72");
    },
    Error,
    "EncodingError U+5B72",
  );
  r = r && ([...ms932Encoder.encode("孳")].join(",") === "155,121"); // U+5B73
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B74");
    },
    Error,
    "EncodingError U+5B74",
  );
  r = r && ([...ms932Encoder.encode("孵")].join(",") === "155,122"); // U+5B75
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B76");
    },
    Error,
    "EncodingError U+5B76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B77");
    },
    Error,
    "EncodingError U+5B77",
  );
  r = r && ([...ms932Encoder.encode("學")].join(",") === "155,123"); // U+5B78
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B79");
    },
    Error,
    "EncodingError U+5B79",
  );
  r = r && ([...ms932Encoder.encode("孺")].join(",") === "155,125"); // U+5B7A
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B7B");
    },
    Error,
    "EncodingError U+5B7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B7C");
    },
    Error,
    "EncodingError U+5B7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B7D");
    },
    Error,
    "EncodingError U+5B7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B7E");
    },
    Error,
    "EncodingError U+5B7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B7F");
    },
    Error,
    "EncodingError U+5B7F",
  );
  r = r && ([...ms932Encoder.encode("宀")].join(",") === "155,126"); // U+5B80
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B81");
    },
    Error,
    "EncodingError U+5B81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B82");
    },
    Error,
    "EncodingError U+5B82",
  );
  r = r && ([...ms932Encoder.encode("它")].join(",") === "155,128"); // U+5B83
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B84");
    },
    Error,
    "EncodingError U+5B84",
  );
  r = r && ([...ms932Encoder.encode("宅")].join(",") === "145,238"); // U+5B85
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B86");
    },
    Error,
    "EncodingError U+5B86",
  );
  r = r &&
    ([...ms932Encoder.encode("宇守安")].join(",") === "137,70,142,231,136,192"); // U+5B87
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B8A");
    },
    Error,
    "EncodingError U+5B8A",
  );
  r = r &&
    ([...ms932Encoder.encode("宋完宍")].join(",") === "145,118,138,174,142,179"); // U+5B8B
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B8E");
    },
    Error,
    "EncodingError U+5B8E",
  );
  r = r && ([...ms932Encoder.encode("宏")].join(",") === "141,71"); // U+5B8F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B90");
    },
    Error,
    "EncodingError U+5B90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B91");
    },
    Error,
    "EncodingError U+5B91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B92");
    },
    Error,
    "EncodingError U+5B92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B93");
    },
    Error,
    "EncodingError U+5B93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B94");
    },
    Error,
    "EncodingError U+5B94",
  );
  r = r && ([...ms932Encoder.encode("宕")].join(",") === "147,134"); // U+5B95
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B96");
    },
    Error,
    "EncodingError U+5B96",
  );
  r = r &&
    ([...ms932Encoder.encode("宗官宙定宛宜宝")].join(",") ===
      "143,64,138,175,146,136,146,232,136,182,139,88,149,243"); // U+5B97
  assertThrows(
    () => {
      ms932Encoder.encode("\u5B9E");
    },
    Error,
    "EncodingError U+5B9E",
  );
  r = r && ([...ms932Encoder.encode("実")].join(",") === "142,192"); // U+5B9F
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BA0");
    },
    Error,
    "EncodingError U+5BA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BA1");
    },
    Error,
    "EncodingError U+5BA1",
  );
  r = r &&
    ([...ms932Encoder.encode("客宣室宥宦")].join(",") ===
      "139,113,144,233,142,186,151,71,155,129"); // U+5BA2
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BA7");
    },
    Error,
    "EncodingError U+5BA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BA8");
    },
    Error,
    "EncodingError U+5BA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BA9");
    },
    Error,
    "EncodingError U+5BA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BAA");
    },
    Error,
    "EncodingError U+5BAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BAB");
    },
    Error,
    "EncodingError U+5BAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BAC");
    },
    Error,
    "EncodingError U+5BAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BAD");
    },
    Error,
    "EncodingError U+5BAD",
  );
  r = r && ([...ms932Encoder.encode("宮")].join(",") === "139,123"); // U+5BAE
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BAF");
    },
    Error,
    "EncodingError U+5BAF",
  );
  r = r && ([...ms932Encoder.encode("宰")].join(",") === "141,201"); // U+5BB0
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BB1");
    },
    Error,
    "EncodingError U+5BB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BB2");
    },
    Error,
    "EncodingError U+5BB2",
  );
  r = r &&
    ([...ms932Encoder.encode("害宴宵家")].join(",") ===
      "138,81,137,131,143,170,137,198"); // U+5BB3
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BB7");
    },
    Error,
    "EncodingError U+5BB7",
  );
  r = r && ([...ms932Encoder.encode("宸容")].join(",") === "155,130,151,101"); // U+5BB8
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BBA");
    },
    Error,
    "EncodingError U+5BBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BBB");
    },
    Error,
    "EncodingError U+5BBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BBC");
    },
    Error,
    "EncodingError U+5BBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BBD");
    },
    Error,
    "EncodingError U+5BBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BBE");
    },
    Error,
    "EncodingError U+5BBE",
  );
  r = r && ([...ms932Encoder.encode("宿寀")].join(",") === "143,104,250,167"); // U+5BBF
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BC1");
    },
    Error,
    "EncodingError U+5BC1",
  );
  r = r &&
    ([...ms932Encoder.encode("寂寃寄寅密寇")].join(",") ===
      "142,226,155,131,138,241,147,208,150,167,155,132"); // U+5BC2
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BC8");
    },
    Error,
    "EncodingError U+5BC8",
  );
  r = r && ([...ms932Encoder.encode("寉")].join(",") === "155,133"); // U+5BC9
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BCA");
    },
    Error,
    "EncodingError U+5BCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BCB");
    },
    Error,
    "EncodingError U+5BCB",
  );
  r = r && ([...ms932Encoder.encode("富")].join(",") === "149,120"); // U+5BCC
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BCD");
    },
    Error,
    "EncodingError U+5BCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BCE");
    },
    Error,
    "EncodingError U+5BCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BCF");
    },
    Error,
    "EncodingError U+5BCF",
  );
  r = r && ([...ms932Encoder.encode("寐")].join(",") === "155,135"); // U+5BD0
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BD1");
    },
    Error,
    "EncodingError U+5BD1",
  );
  r = r &&
    ([...ms932Encoder.encode("寒寓寔")].join(",") === "138,166,139,245,155,134"); // U+5BD2
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BD5");
    },
    Error,
    "EncodingError U+5BD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BD6");
    },
    Error,
    "EncodingError U+5BD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BD7");
    },
    Error,
    "EncodingError U+5BD7",
  );
  r = r && ([...ms932Encoder.encode("寘")].join(",") === "250,169"); // U+5BD8
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BD9");
    },
    Error,
    "EncodingError U+5BD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BDA");
    },
    Error,
    "EncodingError U+5BDA",
  );
  r = r && ([...ms932Encoder.encode("寛")].join(",") === "138,176"); // U+5BDB
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BDC");
    },
    Error,
    "EncodingError U+5BDC",
  );
  r = r &&
    ([...ms932Encoder.encode("寝寞察")].join(",") === "144,81,155,139,142,64"); // U+5BDD
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BE0");
    },
    Error,
    "EncodingError U+5BE0",
  );
  r = r && ([...ms932Encoder.encode("寡寢")].join(",") === "137,199,155,138"); // U+5BE1
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BE3");
    },
    Error,
    "EncodingError U+5BE3",
  );
  r = r &&
    ([...ms932Encoder.encode("寤寥實寧寨審")].join(",") ===
      "155,136,155,140,155,137,148,74,158,203,144,82"); // U+5BE4
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BEA");
    },
    Error,
    "EncodingError U+5BEA",
  );
  r = r && ([...ms932Encoder.encode("寫寬")].join(",") === "155,141,250,170"); // U+5BEB
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BED");
    },
    Error,
    "EncodingError U+5BED",
  );
  r = r && ([...ms932Encoder.encode("寮")].join(",") === "151,190"); // U+5BEE
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BEF");
    },
    Error,
    "EncodingError U+5BEF",
  );
  r = r && ([...ms932Encoder.encode("寰")].join(",") === "155,142"); // U+5BF0
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BF1");
    },
    Error,
    "EncodingError U+5BF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BF2");
    },
    Error,
    "EncodingError U+5BF2",
  );
  r = r && ([...ms932Encoder.encode("寳")].join(",") === "155,144"); // U+5BF3
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BF4");
    },
    Error,
    "EncodingError U+5BF4",
  );
  r = r && ([...ms932Encoder.encode("寵寶")].join(",") === "146,158,155,143"); // U+5BF5
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BF7");
    },
    Error,
    "EncodingError U+5BF7",
  );
  r = r && ([...ms932Encoder.encode("寸")].join(",") === "144,161"); // U+5BF8
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BF9");
    },
    Error,
    "EncodingError U+5BF9",
  );
  r = r && ([...ms932Encoder.encode("寺")].join(",") === "142,155"); // U+5BFA
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BFB");
    },
    Error,
    "EncodingError U+5BFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BFC");
    },
    Error,
    "EncodingError U+5BFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u5BFD");
    },
    Error,
    "EncodingError U+5BFD",
  );
  r = r && ([...ms932Encoder.encode("対寿")].join(",") === "145,206,142,245"); // U+5BFE

  assertStrictEquals(r, true);
});
