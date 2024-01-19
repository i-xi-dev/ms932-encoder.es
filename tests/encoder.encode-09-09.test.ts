import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+8800-U+8BFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u8800");
    },
    Error,
    "encode-error: U+8800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8801");
    },
    Error,
    "encode-error: U+8801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8802");
    },
    Error,
    "encode-error: U+8802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8803");
    },
    Error,
    "encode-error: U+8803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8804");
    },
    Error,
    "encode-error: U+8804",
  );
  r = r && ([...ms932Encoder.encode("蠅")].join(",") === "229,162"); // U+8805
  assertThrows(
    () => {
      ms932Encoder.encode("\u8806");
    },
    Error,
    "encode-error: U+8806",
  );
  r = r && ([...ms932Encoder.encode("蠇")].join(",") === "251,161"); // U+8807
  assertThrows(
    () => {
      ms932Encoder.encode("\u8808");
    },
    Error,
    "encode-error: U+8808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8809");
    },
    Error,
    "encode-error: U+8809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u880A");
    },
    Error,
    "encode-error: U+880A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u880B");
    },
    Error,
    "encode-error: U+880B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u880C");
    },
    Error,
    "encode-error: U+880C",
  );
  r = r &&
    ([...ms932Encoder.encode("蠍蠎蠏")].join(",") ===
      "229,182,229,186,229,181"); // U+880D
  assertThrows(
    () => {
      ms932Encoder.encode("\u8810");
    },
    Error,
    "encode-error: U+8810",
  );
  r = r && ([...ms932Encoder.encode("蠑")].join(",") === "229,188"); // U+8811
  assertThrows(
    () => {
      ms932Encoder.encode("\u8812");
    },
    Error,
    "encode-error: U+8812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8813");
    },
    Error,
    "encode-error: U+8813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8814");
    },
    Error,
    "encode-error: U+8814",
  );
  r = r && ([...ms932Encoder.encode("蠕蠖")].join(",") === "229,190,229,189"); // U+8815
  assertThrows(
    () => {
      ms932Encoder.encode("\u8817");
    },
    Error,
    "encode-error: U+8817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8818");
    },
    Error,
    "encode-error: U+8818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8819");
    },
    Error,
    "encode-error: U+8819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u881A");
    },
    Error,
    "encode-error: U+881A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u881B");
    },
    Error,
    "encode-error: U+881B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u881C");
    },
    Error,
    "encode-error: U+881C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u881D");
    },
    Error,
    "encode-error: U+881D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u881E");
    },
    Error,
    "encode-error: U+881E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u881F");
    },
    Error,
    "encode-error: U+881F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8820");
    },
    Error,
    "encode-error: U+8820",
  );
  r = r &&
    ([...ms932Encoder.encode("蠡蠢蠣")].join(",") ===
      "229,192,229,191,229,121"); // U+8821
  assertThrows(
    () => {
      ms932Encoder.encode("\u8824");
    },
    Error,
    "encode-error: U+8824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8825");
    },
    Error,
    "encode-error: U+8825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8826");
    },
    Error,
    "encode-error: U+8826",
  );
  r = r && ([...ms932Encoder.encode("蠧")].join(",") === "229,196"); // U+8827
  assertThrows(
    () => {
      ms932Encoder.encode("\u8828");
    },
    Error,
    "encode-error: U+8828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8829");
    },
    Error,
    "encode-error: U+8829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u882A");
    },
    Error,
    "encode-error: U+882A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u882B");
    },
    Error,
    "encode-error: U+882B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u882C");
    },
    Error,
    "encode-error: U+882C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u882D");
    },
    Error,
    "encode-error: U+882D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u882E");
    },
    Error,
    "encode-error: U+882E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u882F");
    },
    Error,
    "encode-error: U+882F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8830");
    },
    Error,
    "encode-error: U+8830",
  );
  r = r && ([...ms932Encoder.encode("蠱")].join(",") === "229,193"); // U+8831
  assertThrows(
    () => {
      ms932Encoder.encode("\u8832");
    },
    Error,
    "encode-error: U+8832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8833");
    },
    Error,
    "encode-error: U+8833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8834");
    },
    Error,
    "encode-error: U+8834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8835");
    },
    Error,
    "encode-error: U+8835",
  );
  r = r && ([...ms932Encoder.encode("蠶")].join(",") === "229,194"); // U+8836
  assertThrows(
    () => {
      ms932Encoder.encode("\u8837");
    },
    Error,
    "encode-error: U+8837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8838");
    },
    Error,
    "encode-error: U+8838",
  );
  r = r && ([...ms932Encoder.encode("蠹")].join(",") === "229,195"); // U+8839
  assertThrows(
    () => {
      ms932Encoder.encode("\u883A");
    },
    Error,
    "encode-error: U+883A",
  );
  r = r && ([...ms932Encoder.encode("蠻")].join(",") === "229,197"); // U+883B
  assertThrows(
    () => {
      ms932Encoder.encode("\u883C");
    },
    Error,
    "encode-error: U+883C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u883D");
    },
    Error,
    "encode-error: U+883D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u883E");
    },
    Error,
    "encode-error: U+883E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u883F");
    },
    Error,
    "encode-error: U+883F",
  );
  r = r && ([...ms932Encoder.encode("血")].join(",") === "140,140"); // U+8840
  assertThrows(
    () => {
      ms932Encoder.encode("\u8841");
    },
    Error,
    "encode-error: U+8841",
  );
  r = r && ([...ms932Encoder.encode("衂")].join(",") === "229,199"); // U+8842
  assertThrows(
    () => {
      ms932Encoder.encode("\u8843");
    },
    Error,
    "encode-error: U+8843",
  );
  r = r && ([...ms932Encoder.encode("衄")].join(",") === "229,198"); // U+8844
  assertThrows(
    () => {
      ms932Encoder.encode("\u8845");
    },
    Error,
    "encode-error: U+8845",
  );
  r = r && ([...ms932Encoder.encode("衆")].join(",") === "143,79"); // U+8846
  assertThrows(
    () => {
      ms932Encoder.encode("\u8847");
    },
    Error,
    "encode-error: U+8847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8848");
    },
    Error,
    "encode-error: U+8848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8849");
    },
    Error,
    "encode-error: U+8849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u884A");
    },
    Error,
    "encode-error: U+884A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u884B");
    },
    Error,
    "encode-error: U+884B",
  );
  r = r && ([...ms932Encoder.encode("行衍")].join(",") === "141,115,159,165"); // U+884C
  assertThrows(
    () => {
      ms932Encoder.encode("\u884E");
    },
    Error,
    "encode-error: U+884E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u884F");
    },
    Error,
    "encode-error: U+884F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8850");
    },
    Error,
    "encode-error: U+8850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8851");
    },
    Error,
    "encode-error: U+8851",
  );
  r = r && ([...ms932Encoder.encode("衒術")].join(",") === "229,200,143,112"); // U+8852
  assertThrows(
    () => {
      ms932Encoder.encode("\u8854");
    },
    Error,
    "encode-error: U+8854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8855");
    },
    Error,
    "encode-error: U+8855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8856");
    },
    Error,
    "encode-error: U+8856",
  );
  r = r && ([...ms932Encoder.encode("街")].join(",") === "138,88"); // U+8857
  assertThrows(
    () => {
      ms932Encoder.encode("\u8858");
    },
    Error,
    "encode-error: U+8858",
  );
  r = r && ([...ms932Encoder.encode("衙")].join(",") === "229,201"); // U+8859
  assertThrows(
    () => {
      ms932Encoder.encode("\u885A");
    },
    Error,
    "encode-error: U+885A",
  );
  r = r && ([...ms932Encoder.encode("衛")].join(",") === "137,113"); // U+885B
  assertThrows(
    () => {
      ms932Encoder.encode("\u885C");
    },
    Error,
    "encode-error: U+885C",
  );
  r = r && ([...ms932Encoder.encode("衝衞")].join(",") === "143,213,229,202"); // U+885D
  assertThrows(
    () => {
      ms932Encoder.encode("\u885F");
    },
    Error,
    "encode-error: U+885F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8860");
    },
    Error,
    "encode-error: U+8860",
  );
  r = r &&
    ([...ms932Encoder.encode("衡衢衣")].join(",") ===
      "141,116,229,203,136,223"); // U+8861
  assertThrows(
    () => {
      ms932Encoder.encode("\u8864");
    },
    Error,
    "encode-error: U+8864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8865");
    },
    Error,
    "encode-error: U+8865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8866");
    },
    Error,
    "encode-error: U+8866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8867");
    },
    Error,
    "encode-error: U+8867",
  );
  r = r && ([...ms932Encoder.encode("表")].join(",") === "149,92"); // U+8868
  assertThrows(
    () => {
      ms932Encoder.encode("\u8869");
    },
    Error,
    "encode-error: U+8869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u886A");
    },
    Error,
    "encode-error: U+886A",
  );
  r = r && ([...ms932Encoder.encode("衫")].join(",") === "229,204"); // U+886B
  assertThrows(
    () => {
      ms932Encoder.encode("\u886C");
    },
    Error,
    "encode-error: U+886C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u886D");
    },
    Error,
    "encode-error: U+886D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u886E");
    },
    Error,
    "encode-error: U+886E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u886F");
    },
    Error,
    "encode-error: U+886F",
  );
  r = r && ([...ms932Encoder.encode("衰")].join(",") === "144,138"); // U+8870
  assertThrows(
    () => {
      ms932Encoder.encode("\u8871");
    },
    Error,
    "encode-error: U+8871",
  );
  r = r && ([...ms932Encoder.encode("衲")].join(",") === "229,211"); // U+8872
  assertThrows(
    () => {
      ms932Encoder.encode("\u8873");
    },
    Error,
    "encode-error: U+8873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8874");
    },
    Error,
    "encode-error: U+8874",
  );
  r = r && ([...ms932Encoder.encode("衵")].join(",") === "229,208"); // U+8875
  assertThrows(
    () => {
      ms932Encoder.encode("\u8876");
    },
    Error,
    "encode-error: U+8876",
  );
  r = r && ([...ms932Encoder.encode("衷")].join(",") === "146,143"); // U+8877
  assertThrows(
    () => {
      ms932Encoder.encode("\u8878");
    },
    Error,
    "encode-error: U+8878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8879");
    },
    Error,
    "encode-error: U+8879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u887A");
    },
    Error,
    "encode-error: U+887A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u887B");
    },
    Error,
    "encode-error: U+887B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u887C");
    },
    Error,
    "encode-error: U+887C",
  );
  r = r &&
    ([...ms932Encoder.encode("衽衾衿")].join(",") ===
      "229,209,229,206,139,220"); // U+887D
  assertThrows(
    () => {
      ms932Encoder.encode("\u8880");
    },
    Error,
    "encode-error: U+8880",
  );
  r = r && ([...ms932Encoder.encode("袁袂")].join(",") === "229,205,229,212"); // U+8881
  assertThrows(
    () => {
      ms932Encoder.encode("\u8883");
    },
    Error,
    "encode-error: U+8883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8884");
    },
    Error,
    "encode-error: U+8884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8885");
    },
    Error,
    "encode-error: U+8885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8886");
    },
    Error,
    "encode-error: U+8886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8887");
    },
    Error,
    "encode-error: U+8887",
  );
  r = r && ([...ms932Encoder.encode("袈")].join(",") === "140,85"); // U+8888
  assertThrows(
    () => {
      ms932Encoder.encode("\u8889");
    },
    Error,
    "encode-error: U+8889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u888A");
    },
    Error,
    "encode-error: U+888A",
  );
  r = r && ([...ms932Encoder.encode("袋")].join(",") === "145,220"); // U+888B
  assertThrows(
    () => {
      ms932Encoder.encode("\u888C");
    },
    Error,
    "encode-error: U+888C",
  );
  r = r && ([...ms932Encoder.encode("袍")].join(",") === "229,218"); // U+888D
  assertThrows(
    () => {
      ms932Encoder.encode("\u888E");
    },
    Error,
    "encode-error: U+888E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u888F");
    },
    Error,
    "encode-error: U+888F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8890");
    },
    Error,
    "encode-error: U+8890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8891");
    },
    Error,
    "encode-error: U+8891",
  );
  r = r && ([...ms932Encoder.encode("袒")].join(",") === "229,214"); // U+8892
  assertThrows(
    () => {
      ms932Encoder.encode("\u8893");
    },
    Error,
    "encode-error: U+8893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8894");
    },
    Error,
    "encode-error: U+8894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8895");
    },
    Error,
    "encode-error: U+8895",
  );
  r = r && ([...ms932Encoder.encode("袖袗")].join(",") === "145,179,229,213"); // U+8896
  assertThrows(
    () => {
      ms932Encoder.encode("\u8898");
    },
    Error,
    "encode-error: U+8898",
  );
  r = r && ([...ms932Encoder.encode("袙")].join(",") === "229,216"); // U+8899
  assertThrows(
    () => {
      ms932Encoder.encode("\u889A");
    },
    Error,
    "encode-error: U+889A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u889B");
    },
    Error,
    "encode-error: U+889B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u889C");
    },
    Error,
    "encode-error: U+889C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u889D");
    },
    Error,
    "encode-error: U+889D",
  );
  r = r && ([...ms932Encoder.encode("袞")].join(",") === "229,207"); // U+889E
  assertThrows(
    () => {
      ms932Encoder.encode("\u889F");
    },
    Error,
    "encode-error: U+889F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88A0");
    },
    Error,
    "encode-error: U+88A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88A1");
    },
    Error,
    "encode-error: U+88A1",
  );
  r = r && ([...ms932Encoder.encode("袢")].join(",") === "229,217"); // U+88A2
  assertThrows(
    () => {
      ms932Encoder.encode("\u88A3");
    },
    Error,
    "encode-error: U+88A3",
  );
  r = r && ([...ms932Encoder.encode("袤")].join(",") === "229,219"); // U+88A4
  assertThrows(
    () => {
      ms932Encoder.encode("\u88A5");
    },
    Error,
    "encode-error: U+88A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88A6");
    },
    Error,
    "encode-error: U+88A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88A7");
    },
    Error,
    "encode-error: U+88A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88A8");
    },
    Error,
    "encode-error: U+88A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88A9");
    },
    Error,
    "encode-error: U+88A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88AA");
    },
    Error,
    "encode-error: U+88AA",
  );
  r = r && ([...ms932Encoder.encode("被")].join(",") === "148,237"); // U+88AB
  assertThrows(
    () => {
      ms932Encoder.encode("\u88AC");
    },
    Error,
    "encode-error: U+88AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88AD");
    },
    Error,
    "encode-error: U+88AD",
  );
  r = r && ([...ms932Encoder.encode("袮")].join(",") === "229,215"); // U+88AE
  assertThrows(
    () => {
      ms932Encoder.encode("\u88AF");
    },
    Error,
    "encode-error: U+88AF",
  );
  r = r && ([...ms932Encoder.encode("袰袱")].join(",") === "229,220,229,222"); // U+88B0
  assertThrows(
    () => {
      ms932Encoder.encode("\u88B2");
    },
    Error,
    "encode-error: U+88B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88B3");
    },
    Error,
    "encode-error: U+88B3",
  );
  r = r && ([...ms932Encoder.encode("袴袵")].join(",") === "140,209,229,210"); // U+88B4
  assertThrows(
    () => {
      ms932Encoder.encode("\u88B6");
    },
    Error,
    "encode-error: U+88B6",
  );
  r = r && ([...ms932Encoder.encode("袷")].join(",") === "136,191"); // U+88B7
  assertThrows(
    () => {
      ms932Encoder.encode("\u88B8");
    },
    Error,
    "encode-error: U+88B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88B9");
    },
    Error,
    "encode-error: U+88B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88BA");
    },
    Error,
    "encode-error: U+88BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88BB");
    },
    Error,
    "encode-error: U+88BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88BC");
    },
    Error,
    "encode-error: U+88BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88BD");
    },
    Error,
    "encode-error: U+88BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88BE");
    },
    Error,
    "encode-error: U+88BE",
  );
  r = r && ([...ms932Encoder.encode("袿")].join(",") === "229,221"); // U+88BF
  assertThrows(
    () => {
      ms932Encoder.encode("\u88C0");
    },
    Error,
    "encode-error: U+88C0",
  );
  r = r &&
    ([...ms932Encoder.encode("裁裂裃裄装")].join(",") ===
      "141,217,151,244,229,223,229,224,145,149"); // U+88C1
  assertThrows(
    () => {
      ms932Encoder.encode("\u88C6");
    },
    Error,
    "encode-error: U+88C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88C7");
    },
    Error,
    "encode-error: U+88C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88C8");
    },
    Error,
    "encode-error: U+88C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88C9");
    },
    Error,
    "encode-error: U+88C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88CA");
    },
    Error,
    "encode-error: U+88CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88CB");
    },
    Error,
    "encode-error: U+88CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88CC");
    },
    Error,
    "encode-error: U+88CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88CD");
    },
    Error,
    "encode-error: U+88CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88CE");
    },
    Error,
    "encode-error: U+88CE",
  );
  r = r && ([...ms932Encoder.encode("裏")].join(",") === "151,160"); // U+88CF
  assertThrows(
    () => {
      ms932Encoder.encode("\u88D0");
    },
    Error,
    "encode-error: U+88D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88D1");
    },
    Error,
    "encode-error: U+88D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88D2");
    },
    Error,
    "encode-error: U+88D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88D3");
    },
    Error,
    "encode-error: U+88D3",
  );
  r = r && ([...ms932Encoder.encode("裔裕")].join(",") === "229,225,151,84"); // U+88D4
  assertThrows(
    () => {
      ms932Encoder.encode("\u88D6");
    },
    Error,
    "encode-error: U+88D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88D7");
    },
    Error,
    "encode-error: U+88D7",
  );
  r = r && ([...ms932Encoder.encode("裘裙")].join(",") === "229,226,229,227"); // U+88D8
  assertThrows(
    () => {
      ms932Encoder.encode("\u88DA");
    },
    Error,
    "encode-error: U+88DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88DB");
    },
    Error,
    "encode-error: U+88DB",
  );
  r = r && ([...ms932Encoder.encode("補裝")].join(",") === "149,226,229,228"); // U+88DC
  assertThrows(
    () => {
      ms932Encoder.encode("\u88DE");
    },
    Error,
    "encode-error: U+88DE",
  );
  r = r && ([...ms932Encoder.encode("裟")].join(",") === "141,190"); // U+88DF
  assertThrows(
    () => {
      ms932Encoder.encode("\u88E0");
    },
    Error,
    "encode-error: U+88E0",
  );
  r = r && ([...ms932Encoder.encode("裡")].join(",") === "151,161"); // U+88E1
  assertThrows(
    () => {
      ms932Encoder.encode("\u88E2");
    },
    Error,
    "encode-error: U+88E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88E3");
    },
    Error,
    "encode-error: U+88E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88E4");
    },
    Error,
    "encode-error: U+88E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88E5");
    },
    Error,
    "encode-error: U+88E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88E6");
    },
    Error,
    "encode-error: U+88E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88E7");
    },
    Error,
    "encode-error: U+88E7",
  );
  r = r && ([...ms932Encoder.encode("裨")].join(",") === "229,233"); // U+88E8
  assertThrows(
    () => {
      ms932Encoder.encode("\u88E9");
    },
    Error,
    "encode-error: U+88E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88EA");
    },
    Error,
    "encode-error: U+88EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88EB");
    },
    Error,
    "encode-error: U+88EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88EC");
    },
    Error,
    "encode-error: U+88EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88ED");
    },
    Error,
    "encode-error: U+88ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88EE");
    },
    Error,
    "encode-error: U+88EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88EF");
    },
    Error,
    "encode-error: U+88EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88F0");
    },
    Error,
    "encode-error: U+88F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88F1");
    },
    Error,
    "encode-error: U+88F1",
  );
  r = r &&
    ([...ms932Encoder.encode("裲裳裴裵")].join(",") ===
      "229,234,143,214,229,232,251,162"); // U+88F2
  assertThrows(
    () => {
      ms932Encoder.encode("\u88F6");
    },
    Error,
    "encode-error: U+88F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88F7");
    },
    Error,
    "encode-error: U+88F7",
  );
  r = r && ([...ms932Encoder.encode("裸裹")].join(",") === "151,135,229,229"); // U+88F8
  assertThrows(
    () => {
      ms932Encoder.encode("\u88FA");
    },
    Error,
    "encode-error: U+88FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u88FB");
    },
    Error,
    "encode-error: U+88FB",
  );
  r = r &&
    ([...ms932Encoder.encode("裼製裾")].join(",") ===
      "229,231,144,187,144,158"); // U+88FC
  assertThrows(
    () => {
      ms932Encoder.encode("\u88FF");
    },
    Error,
    "encode-error: U+88FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8900");
    },
    Error,
    "encode-error: U+8900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8901");
    },
    Error,
    "encode-error: U+8901",
  );
  r = r && ([...ms932Encoder.encode("褂")].join(",") === "229,230"); // U+8902
  assertThrows(
    () => {
      ms932Encoder.encode("\u8903");
    },
    Error,
    "encode-error: U+8903",
  );
  r = r && ([...ms932Encoder.encode("褄")].join(",") === "229,235"); // U+8904
  assertThrows(
    () => {
      ms932Encoder.encode("\u8905");
    },
    Error,
    "encode-error: U+8905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8906");
    },
    Error,
    "encode-error: U+8906",
  );
  r = r && ([...ms932Encoder.encode("複")].join(",") === "149,161"); // U+8907
  assertThrows(
    () => {
      ms932Encoder.encode("\u8908");
    },
    Error,
    "encode-error: U+8908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8909");
    },
    Error,
    "encode-error: U+8909",
  );
  r = r && ([...ms932Encoder.encode("褊")].join(",") === "229,237"); // U+890A
  assertThrows(
    () => {
      ms932Encoder.encode("\u890B");
    },
    Error,
    "encode-error: U+890B",
  );
  r = r && ([...ms932Encoder.encode("褌")].join(",") === "229,236"); // U+890C
  assertThrows(
    () => {
      ms932Encoder.encode("\u890D");
    },
    Error,
    "encode-error: U+890D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u890E");
    },
    Error,
    "encode-error: U+890E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u890F");
    },
    Error,
    "encode-error: U+890F",
  );
  r = r && ([...ms932Encoder.encode("褐")].join(",") === "138,140"); // U+8910
  assertThrows(
    () => {
      ms932Encoder.encode("\u8911");
    },
    Error,
    "encode-error: U+8911",
  );
  r = r && ([...ms932Encoder.encode("褒褓")].join(",") === "150,74,229,238"); // U+8912
  assertThrows(
    () => {
      ms932Encoder.encode("\u8914");
    },
    Error,
    "encode-error: U+8914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8915");
    },
    Error,
    "encode-error: U+8915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8916");
    },
    Error,
    "encode-error: U+8916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8917");
    },
    Error,
    "encode-error: U+8917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8918");
    },
    Error,
    "encode-error: U+8918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8919");
    },
    Error,
    "encode-error: U+8919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u891A");
    },
    Error,
    "encode-error: U+891A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u891B");
    },
    Error,
    "encode-error: U+891B",
  );
  r = r &&
    ([...ms932Encoder.encode("褜褝褞")].join(",") === "250,93,229,250,229,240"); // U+891C
  assertThrows(
    () => {
      ms932Encoder.encode("\u891F");
    },
    Error,
    "encode-error: U+891F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8920");
    },
    Error,
    "encode-error: U+8920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8921");
    },
    Error,
    "encode-error: U+8921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8922");
    },
    Error,
    "encode-error: U+8922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8923");
    },
    Error,
    "encode-error: U+8923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8924");
    },
    Error,
    "encode-error: U+8924",
  );
  r = r && ([...ms932Encoder.encode("褥")].join(",") === "229,241"); // U+8925
  assertThrows(
    () => {
      ms932Encoder.encode("\u8926");
    },
    Error,
    "encode-error: U+8926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8927");
    },
    Error,
    "encode-error: U+8927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8928");
    },
    Error,
    "encode-error: U+8928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8929");
    },
    Error,
    "encode-error: U+8929",
  );
  r = r && ([...ms932Encoder.encode("褪褫")].join(",") === "229,242,229,243"); // U+892A
  assertThrows(
    () => {
      ms932Encoder.encode("\u892C");
    },
    Error,
    "encode-error: U+892C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u892D");
    },
    Error,
    "encode-error: U+892D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u892E");
    },
    Error,
    "encode-error: U+892E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u892F");
    },
    Error,
    "encode-error: U+892F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8930");
    },
    Error,
    "encode-error: U+8930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8931");
    },
    Error,
    "encode-error: U+8931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8932");
    },
    Error,
    "encode-error: U+8932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8933");
    },
    Error,
    "encode-error: U+8933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8934");
    },
    Error,
    "encode-error: U+8934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8935");
    },
    Error,
    "encode-error: U+8935",
  );
  r = r && ([...ms932Encoder.encode("褶")].join(",") === "229,247"); // U+8936
  assertThrows(
    () => {
      ms932Encoder.encode("\u8937");
    },
    Error,
    "encode-error: U+8937",
  );
  r = r && ([...ms932Encoder.encode("褸")].join(",") === "229,248"); // U+8938
  assertThrows(
    () => {
      ms932Encoder.encode("\u8939");
    },
    Error,
    "encode-error: U+8939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u893A");
    },
    Error,
    "encode-error: U+893A",
  );
  r = r && ([...ms932Encoder.encode("褻")].join(",") === "229,246"); // U+893B
  assertThrows(
    () => {
      ms932Encoder.encode("\u893C");
    },
    Error,
    "encode-error: U+893C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u893D");
    },
    Error,
    "encode-error: U+893D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u893E");
    },
    Error,
    "encode-error: U+893E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u893F");
    },
    Error,
    "encode-error: U+893F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8940");
    },
    Error,
    "encode-error: U+8940",
  );
  r = r && ([...ms932Encoder.encode("襁")].join(",") === "229,244"); // U+8941
  assertThrows(
    () => {
      ms932Encoder.encode("\u8942");
    },
    Error,
    "encode-error: U+8942",
  );
  r = r && ([...ms932Encoder.encode("襃襄")].join(",") === "229,239,229,245"); // U+8943
  assertThrows(
    () => {
      ms932Encoder.encode("\u8945");
    },
    Error,
    "encode-error: U+8945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8946");
    },
    Error,
    "encode-error: U+8946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8947");
    },
    Error,
    "encode-error: U+8947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8948");
    },
    Error,
    "encode-error: U+8948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8949");
    },
    Error,
    "encode-error: U+8949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u894A");
    },
    Error,
    "encode-error: U+894A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u894B");
    },
    Error,
    "encode-error: U+894B",
  );
  r = r && ([...ms932Encoder.encode("襌襍")].join(",") === "229,249,232,181"); // U+894C
  assertThrows(
    () => {
      ms932Encoder.encode("\u894E");
    },
    Error,
    "encode-error: U+894E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u894F");
    },
    Error,
    "encode-error: U+894F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8950");
    },
    Error,
    "encode-error: U+8950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8951");
    },
    Error,
    "encode-error: U+8951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8952");
    },
    Error,
    "encode-error: U+8952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8953");
    },
    Error,
    "encode-error: U+8953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8954");
    },
    Error,
    "encode-error: U+8954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8955");
    },
    Error,
    "encode-error: U+8955",
  );
  r = r && ([...ms932Encoder.encode("襖")].join(",") === "137,166"); // U+8956
  assertThrows(
    () => {
      ms932Encoder.encode("\u8957");
    },
    Error,
    "encode-error: U+8957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8958");
    },
    Error,
    "encode-error: U+8958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8959");
    },
    Error,
    "encode-error: U+8959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u895A");
    },
    Error,
    "encode-error: U+895A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u895B");
    },
    Error,
    "encode-error: U+895B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u895C");
    },
    Error,
    "encode-error: U+895C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u895D");
    },
    Error,
    "encode-error: U+895D",
  );
  r = r &&
    ([...ms932Encoder.encode("襞襟襠")].join(",") ===
      "229,252,139,221,229,251"); // U+895E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8961");
    },
    Error,
    "encode-error: U+8961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8962");
    },
    Error,
    "encode-error: U+8962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8963");
    },
    Error,
    "encode-error: U+8963",
  );
  r = r && ([...ms932Encoder.encode("襤")].join(",") === "230,65"); // U+8964
  assertThrows(
    () => {
      ms932Encoder.encode("\u8965");
    },
    Error,
    "encode-error: U+8965",
  );
  r = r && ([...ms932Encoder.encode("襦")].join(",") === "230,64"); // U+8966
  assertThrows(
    () => {
      ms932Encoder.encode("\u8967");
    },
    Error,
    "encode-error: U+8967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8968");
    },
    Error,
    "encode-error: U+8968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8969");
    },
    Error,
    "encode-error: U+8969",
  );
  r = r && ([...ms932Encoder.encode("襪")].join(",") === "230,67"); // U+896A
  assertThrows(
    () => {
      ms932Encoder.encode("\u896B");
    },
    Error,
    "encode-error: U+896B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u896C");
    },
    Error,
    "encode-error: U+896C",
  );
  r = r && ([...ms932Encoder.encode("襭")].join(",") === "230,66"); // U+896D
  assertThrows(
    () => {
      ms932Encoder.encode("\u896E");
    },
    Error,
    "encode-error: U+896E",
  );
  r = r && ([...ms932Encoder.encode("襯")].join(",") === "230,68"); // U+896F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8970");
    },
    Error,
    "encode-error: U+8970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8971");
    },
    Error,
    "encode-error: U+8971",
  );
  r = r && ([...ms932Encoder.encode("襲")].join(",") === "143,80"); // U+8972
  assertThrows(
    () => {
      ms932Encoder.encode("\u8973");
    },
    Error,
    "encode-error: U+8973",
  );
  r = r && ([...ms932Encoder.encode("襴")].join(",") === "230,69"); // U+8974
  assertThrows(
    () => {
      ms932Encoder.encode("\u8975");
    },
    Error,
    "encode-error: U+8975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8976");
    },
    Error,
    "encode-error: U+8976",
  );
  r = r && ([...ms932Encoder.encode("襷")].join(",") === "230,70"); // U+8977
  assertThrows(
    () => {
      ms932Encoder.encode("\u8978");
    },
    Error,
    "encode-error: U+8978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8979");
    },
    Error,
    "encode-error: U+8979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u897A");
    },
    Error,
    "encode-error: U+897A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u897B");
    },
    Error,
    "encode-error: U+897B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u897C");
    },
    Error,
    "encode-error: U+897C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u897D");
    },
    Error,
    "encode-error: U+897D",
  );
  r = r && ([...ms932Encoder.encode("襾西")].join(",") === "230,71,144,188"); // U+897E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8980");
    },
    Error,
    "encode-error: U+8980",
  );
  r = r && ([...ms932Encoder.encode("要")].join(",") === "151,118"); // U+8981
  assertThrows(
    () => {
      ms932Encoder.encode("\u8982");
    },
    Error,
    "encode-error: U+8982",
  );
  r = r && ([...ms932Encoder.encode("覃")].join(",") === "230,72"); // U+8983
  assertThrows(
    () => {
      ms932Encoder.encode("\u8984");
    },
    Error,
    "encode-error: U+8984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8985");
    },
    Error,
    "encode-error: U+8985",
  );
  r = r &&
    ([...ms932Encoder.encode("覆覇覈")].join(",") === "149,162,148,101,230,73"); // U+8986
  assertThrows(
    () => {
      ms932Encoder.encode("\u8989");
    },
    Error,
    "encode-error: U+8989",
  );
  r = r && ([...ms932Encoder.encode("覊見")].join(",") === "230,74,140,169"); // U+898A
  assertThrows(
    () => {
      ms932Encoder.encode("\u898C");
    },
    Error,
    "encode-error: U+898C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u898D");
    },
    Error,
    "encode-error: U+898D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u898E");
    },
    Error,
    "encode-error: U+898E",
  );
  r = r && ([...ms932Encoder.encode("規")].join(",") === "139,75"); // U+898F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8990");
    },
    Error,
    "encode-error: U+8990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8991");
    },
    Error,
    "encode-error: U+8991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8992");
    },
    Error,
    "encode-error: U+8992",
  );
  r = r && ([...ms932Encoder.encode("覓")].join(",") === "230,75"); // U+8993
  assertThrows(
    () => {
      ms932Encoder.encode("\u8994");
    },
    Error,
    "encode-error: U+8994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8995");
    },
    Error,
    "encode-error: U+8995",
  );
  r = r &&
    ([...ms932Encoder.encode("視覗覘")].join(",") === "142,139,148,96,230,76"); // U+8996
  assertThrows(
    () => {
      ms932Encoder.encode("\u8999");
    },
    Error,
    "encode-error: U+8999",
  );
  r = r && ([...ms932Encoder.encode("覚")].join(",") === "138,111"); // U+899A
  assertThrows(
    () => {
      ms932Encoder.encode("\u899B");
    },
    Error,
    "encode-error: U+899B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u899C");
    },
    Error,
    "encode-error: U+899C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u899D");
    },
    Error,
    "encode-error: U+899D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u899E");
    },
    Error,
    "encode-error: U+899E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u899F");
    },
    Error,
    "encode-error: U+899F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89A0");
    },
    Error,
    "encode-error: U+89A0",
  );
  r = r && ([...ms932Encoder.encode("覡")].join(",") === "230,77"); // U+89A1
  assertThrows(
    () => {
      ms932Encoder.encode("\u89A2");
    },
    Error,
    "encode-error: U+89A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89A3");
    },
    Error,
    "encode-error: U+89A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89A4");
    },
    Error,
    "encode-error: U+89A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89A5");
    },
    Error,
    "encode-error: U+89A5",
  );
  r = r && ([...ms932Encoder.encode("覦覧")].join(",") === "230,79,151,151"); // U+89A6
  assertThrows(
    () => {
      ms932Encoder.encode("\u89A8");
    },
    Error,
    "encode-error: U+89A8",
  );
  r = r && ([...ms932Encoder.encode("覩親")].join(",") === "230,78,144,101"); // U+89A9
  assertThrows(
    () => {
      ms932Encoder.encode("\u89AB");
    },
    Error,
    "encode-error: U+89AB",
  );
  r = r && ([...ms932Encoder.encode("覬")].join(",") === "230,80"); // U+89AC
  assertThrows(
    () => {
      ms932Encoder.encode("\u89AD");
    },
    Error,
    "encode-error: U+89AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89AE");
    },
    Error,
    "encode-error: U+89AE",
  );
  r = r && ([...ms932Encoder.encode("覯")].join(",") === "230,81"); // U+89AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u89B0");
    },
    Error,
    "encode-error: U+89B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89B1");
    },
    Error,
    "encode-error: U+89B1",
  );
  r = r && ([...ms932Encoder.encode("覲観")].join(",") === "230,82,138,207"); // U+89B2
  assertThrows(
    () => {
      ms932Encoder.encode("\u89B4");
    },
    Error,
    "encode-error: U+89B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89B5");
    },
    Error,
    "encode-error: U+89B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89B6");
    },
    Error,
    "encode-error: U+89B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89B7");
    },
    Error,
    "encode-error: U+89B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89B8");
    },
    Error,
    "encode-error: U+89B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89B9");
    },
    Error,
    "encode-error: U+89B9",
  );
  r = r && ([...ms932Encoder.encode("覺")].join(",") === "230,83"); // U+89BA
  assertThrows(
    () => {
      ms932Encoder.encode("\u89BB");
    },
    Error,
    "encode-error: U+89BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89BC");
    },
    Error,
    "encode-error: U+89BC",
  );
  r = r && ([...ms932Encoder.encode("覽")].join(",") === "230,84"); // U+89BD
  assertThrows(
    () => {
      ms932Encoder.encode("\u89BE");
    },
    Error,
    "encode-error: U+89BE",
  );
  r = r && ([...ms932Encoder.encode("覿觀")].join(",") === "230,85,230,86"); // U+89BF
  assertThrows(
    () => {
      ms932Encoder.encode("\u89C1");
    },
    Error,
    "encode-error: U+89C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89C2");
    },
    Error,
    "encode-error: U+89C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89C3");
    },
    Error,
    "encode-error: U+89C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89C4");
    },
    Error,
    "encode-error: U+89C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89C5");
    },
    Error,
    "encode-error: U+89C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89C6");
    },
    Error,
    "encode-error: U+89C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89C7");
    },
    Error,
    "encode-error: U+89C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89C8");
    },
    Error,
    "encode-error: U+89C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89C9");
    },
    Error,
    "encode-error: U+89C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89CA");
    },
    Error,
    "encode-error: U+89CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89CB");
    },
    Error,
    "encode-error: U+89CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89CC");
    },
    Error,
    "encode-error: U+89CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89CD");
    },
    Error,
    "encode-error: U+89CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89CE");
    },
    Error,
    "encode-error: U+89CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89CF");
    },
    Error,
    "encode-error: U+89CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89D0");
    },
    Error,
    "encode-error: U+89D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89D1");
    },
    Error,
    "encode-error: U+89D1",
  );
  r = r && ([...ms932Encoder.encode("角")].join(",") === "138,112"); // U+89D2
  assertThrows(
    () => {
      ms932Encoder.encode("\u89D3");
    },
    Error,
    "encode-error: U+89D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89D4");
    },
    Error,
    "encode-error: U+89D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89D5");
    },
    Error,
    "encode-error: U+89D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89D6");
    },
    Error,
    "encode-error: U+89D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89D7");
    },
    Error,
    "encode-error: U+89D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89D8");
    },
    Error,
    "encode-error: U+89D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89D9");
    },
    Error,
    "encode-error: U+89D9",
  );
  r = r && ([...ms932Encoder.encode("觚")].join(",") === "230,87"); // U+89DA
  assertThrows(
    () => {
      ms932Encoder.encode("\u89DB");
    },
    Error,
    "encode-error: U+89DB",
  );
  r = r && ([...ms932Encoder.encode("觜觝")].join(",") === "230,88,230,89"); // U+89DC
  assertThrows(
    () => {
      ms932Encoder.encode("\u89DE");
    },
    Error,
    "encode-error: U+89DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89DF");
    },
    Error,
    "encode-error: U+89DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89E0");
    },
    Error,
    "encode-error: U+89E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89E1");
    },
    Error,
    "encode-error: U+89E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89E2");
    },
    Error,
    "encode-error: U+89E2",
  );
  r = r && ([...ms932Encoder.encode("解")].join(",") === "137,240"); // U+89E3
  assertThrows(
    () => {
      ms932Encoder.encode("\u89E4");
    },
    Error,
    "encode-error: U+89E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89E5");
    },
    Error,
    "encode-error: U+89E5",
  );
  r = r && ([...ms932Encoder.encode("触觧")].join(",") === "144,71,230,90"); // U+89E6
  assertThrows(
    () => {
      ms932Encoder.encode("\u89E8");
    },
    Error,
    "encode-error: U+89E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89E9");
    },
    Error,
    "encode-error: U+89E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89EA");
    },
    Error,
    "encode-error: U+89EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89EB");
    },
    Error,
    "encode-error: U+89EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89EC");
    },
    Error,
    "encode-error: U+89EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89ED");
    },
    Error,
    "encode-error: U+89ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89EE");
    },
    Error,
    "encode-error: U+89EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89EF");
    },
    Error,
    "encode-error: U+89EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89F0");
    },
    Error,
    "encode-error: U+89F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89F1");
    },
    Error,
    "encode-error: U+89F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89F2");
    },
    Error,
    "encode-error: U+89F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89F3");
    },
    Error,
    "encode-error: U+89F3",
  );
  r = r && ([...ms932Encoder.encode("觴")].join(",") === "230,91"); // U+89F4
  assertThrows(
    () => {
      ms932Encoder.encode("\u89F5");
    },
    Error,
    "encode-error: U+89F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89F6");
    },
    Error,
    "encode-error: U+89F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89F7");
    },
    Error,
    "encode-error: U+89F7",
  );
  r = r && ([...ms932Encoder.encode("觸")].join(",") === "230,92"); // U+89F8
  assertThrows(
    () => {
      ms932Encoder.encode("\u89F9");
    },
    Error,
    "encode-error: U+89F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89FA");
    },
    Error,
    "encode-error: U+89FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89FB");
    },
    Error,
    "encode-error: U+89FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89FC");
    },
    Error,
    "encode-error: U+89FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89FD");
    },
    Error,
    "encode-error: U+89FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89FE");
    },
    Error,
    "encode-error: U+89FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u89FF");
    },
    Error,
    "encode-error: U+89FF",
  );
  r = r && ([...ms932Encoder.encode("言")].join(",") === "140,190"); // U+8A00
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A01");
    },
    Error,
    "encode-error: U+8A01",
  );
  r = r && ([...ms932Encoder.encode("訂訃")].join(",") === "146,249,230,93"); // U+8A02
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A04");
    },
    Error,
    "encode-error: U+8A04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A05");
    },
    Error,
    "encode-error: U+8A05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A06");
    },
    Error,
    "encode-error: U+8A06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A07");
    },
    Error,
    "encode-error: U+8A07",
  );
  r = r && ([...ms932Encoder.encode("計")].join(",") === "140,118"); // U+8A08
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A09");
    },
    Error,
    "encode-error: U+8A09",
  );
  r = r && ([...ms932Encoder.encode("訊")].join(",") === "144,117"); // U+8A0A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A0B");
    },
    Error,
    "encode-error: U+8A0B",
  );
  r = r && ([...ms932Encoder.encode("訌")].join(",") === "230,96"); // U+8A0C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A0D");
    },
    Error,
    "encode-error: U+8A0D",
  );
  r = r && ([...ms932Encoder.encode("討")].join(",") === "147,162"); // U+8A0E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A0F");
    },
    Error,
    "encode-error: U+8A0F",
  );
  r = r && ([...ms932Encoder.encode("訐")].join(",") === "230,95"); // U+8A10
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A11");
    },
    Error,
    "encode-error: U+8A11",
  );
  r = r && ([...ms932Encoder.encode("訒訓")].join(",") === "251,163,140,80"); // U+8A12
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A14");
    },
    Error,
    "encode-error: U+8A14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A15");
    },
    Error,
    "encode-error: U+8A15",
  );
  r = r &&
    ([...ms932Encoder.encode("訖託記")].join(",") === "230,94,145,245,139,76"); // U+8A16
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A19");
    },
    Error,
    "encode-error: U+8A19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A1A");
    },
    Error,
    "encode-error: U+8A1A",
  );
  r = r && ([...ms932Encoder.encode("訛")].join(",") === "230,97"); // U+8A1B
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A1C");
    },
    Error,
    "encode-error: U+8A1C",
  );
  r = r && ([...ms932Encoder.encode("訝")].join(",") === "230,98"); // U+8A1D
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A1E");
    },
    Error,
    "encode-error: U+8A1E",
  );
  r = r && ([...ms932Encoder.encode("訟")].join(",") === "143,215"); // U+8A1F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A20");
    },
    Error,
    "encode-error: U+8A20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A21");
    },
    Error,
    "encode-error: U+8A21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A22");
    },
    Error,
    "encode-error: U+8A22",
  );
  r = r && ([...ms932Encoder.encode("訣")].join(",") === "140,141"); // U+8A23
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A24");
    },
    Error,
    "encode-error: U+8A24",
  );
  r = r && ([...ms932Encoder.encode("訥")].join(",") === "230,99"); // U+8A25
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A26");
    },
    Error,
    "encode-error: U+8A26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A27");
    },
    Error,
    "encode-error: U+8A27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A28");
    },
    Error,
    "encode-error: U+8A28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A29");
    },
    Error,
    "encode-error: U+8A29",
  );
  r = r && ([...ms932Encoder.encode("訪")].join(",") === "150,75"); // U+8A2A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A2B");
    },
    Error,
    "encode-error: U+8A2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A2C");
    },
    Error,
    "encode-error: U+8A2C",
  );
  r = r && ([...ms932Encoder.encode("設")].join(",") === "144,221"); // U+8A2D
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A2E");
    },
    Error,
    "encode-error: U+8A2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A2F");
    },
    Error,
    "encode-error: U+8A2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A30");
    },
    Error,
    "encode-error: U+8A30",
  );
  r = r && ([...ms932Encoder.encode("許")].join(",") === "139,150"); // U+8A31
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A32");
    },
    Error,
    "encode-error: U+8A32",
  );
  r = r && ([...ms932Encoder.encode("訳訴")].join(",") === "150,243,145,105"); // U+8A33
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A35");
    },
    Error,
    "encode-error: U+8A35",
  );
  r = r && ([...ms932Encoder.encode("訶訷")].join(",") === "230,100,251,164"); // U+8A36
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A38");
    },
    Error,
    "encode-error: U+8A38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A39");
    },
    Error,
    "encode-error: U+8A39",
  );
  r = r &&
    ([...ms932Encoder.encode("診註証")].join(",") ===
      "144,102,146,144,143,216"); // U+8A3A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A3D");
    },
    Error,
    "encode-error: U+8A3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A3E");
    },
    Error,
    "encode-error: U+8A3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A3F");
    },
    Error,
    "encode-error: U+8A3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A40");
    },
    Error,
    "encode-error: U+8A40",
  );
  r = r && ([...ms932Encoder.encode("詁")].join(",") === "230,101"); // U+8A41
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A42");
    },
    Error,
    "encode-error: U+8A42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A43");
    },
    Error,
    "encode-error: U+8A43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A44");
    },
    Error,
    "encode-error: U+8A44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A45");
    },
    Error,
    "encode-error: U+8A45",
  );
  r = r && ([...ms932Encoder.encode("詆")].join(",") === "230,104"); // U+8A46
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A47");
    },
    Error,
    "encode-error: U+8A47",
  );
  r = r && ([...ms932Encoder.encode("詈")].join(",") === "230,105"); // U+8A48
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A49");
    },
    Error,
    "encode-error: U+8A49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A4A");
    },
    Error,
    "encode-error: U+8A4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A4B");
    },
    Error,
    "encode-error: U+8A4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A4C");
    },
    Error,
    "encode-error: U+8A4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A4D");
    },
    Error,
    "encode-error: U+8A4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A4E");
    },
    Error,
    "encode-error: U+8A4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A4F");
    },
    Error,
    "encode-error: U+8A4F",
  );
  r = r &&
    ([...ms932Encoder.encode("詐詑詒")].join(",") ===
      "141,188,145,192,230,103"); // U+8A50
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A53");
    },
    Error,
    "encode-error: U+8A53",
  );
  r = r && ([...ms932Encoder.encode("詔評")].join(",") === "143,217,149,93"); // U+8A54
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A56");
    },
    Error,
    "encode-error: U+8A56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A57");
    },
    Error,
    "encode-error: U+8A57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A58");
    },
    Error,
    "encode-error: U+8A58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A59");
    },
    Error,
    "encode-error: U+8A59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A5A");
    },
    Error,
    "encode-error: U+8A5A",
  );
  r = r && ([...ms932Encoder.encode("詛")].join(",") === "230,102"); // U+8A5B
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A5C");
    },
    Error,
    "encode-error: U+8A5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A5D");
    },
    Error,
    "encode-error: U+8A5D",
  );
  r = r && ([...ms932Encoder.encode("詞")].join(",") === "142,140"); // U+8A5E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A5F");
    },
    Error,
    "encode-error: U+8A5F",
  );
  r = r && ([...ms932Encoder.encode("詠")].join(",") === "137,114"); // U+8A60
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A61");
    },
    Error,
    "encode-error: U+8A61",
  );
  r = r && ([...ms932Encoder.encode("詢詣")].join(",") === "230,109,140,119"); // U+8A62
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A64");
    },
    Error,
    "encode-error: U+8A64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A65");
    },
    Error,
    "encode-error: U+8A65",
  );
  r = r && ([...ms932Encoder.encode("試")].join(",") === "142,142"); // U+8A66
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A67");
    },
    Error,
    "encode-error: U+8A67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A68");
    },
    Error,
    "encode-error: U+8A68",
  );
  r = r && ([...ms932Encoder.encode("詩")].join(",") === "142,141"); // U+8A69
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A6A");
    },
    Error,
    "encode-error: U+8A6A",
  );
  r = r &&
    ([...ms932Encoder.encode("詫詬詭詮")].join(",") ===
      "152,108,230,108,230,107,145,70"); // U+8A6B
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A6F");
    },
    Error,
    "encode-error: U+8A6F",
  );
  r = r &&
    ([...ms932Encoder.encode("詰話該詳")].join(",") ===
      "139,108,152,98,138,89,143,218"); // U+8A70
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A74");
    },
    Error,
    "encode-error: U+8A74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A75");
    },
    Error,
    "encode-error: U+8A75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A76");
    },
    Error,
    "encode-error: U+8A76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A77");
    },
    Error,
    "encode-error: U+8A77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A78");
    },
    Error,
    "encode-error: U+8A78",
  );
  r = r && ([...ms932Encoder.encode("詹")].join(",") === "251,165"); // U+8A79
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A7A");
    },
    Error,
    "encode-error: U+8A7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A7B");
    },
    Error,
    "encode-error: U+8A7B",
  );
  r = r && ([...ms932Encoder.encode("詼")].join(",") === "230,106"); // U+8A7C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A7D");
    },
    Error,
    "encode-error: U+8A7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A7E");
    },
    Error,
    "encode-error: U+8A7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A7F");
    },
    Error,
    "encode-error: U+8A7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A80");
    },
    Error,
    "encode-error: U+8A80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A81");
    },
    Error,
    "encode-error: U+8A81",
  );
  r = r && ([...ms932Encoder.encode("誂")].join(",") === "230,111"); // U+8A82
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A83");
    },
    Error,
    "encode-error: U+8A83",
  );
  r = r && ([...ms932Encoder.encode("誄誅")].join(",") === "230,112,230,110"); // U+8A84
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A86");
    },
    Error,
    "encode-error: U+8A86",
  );
  r = r && ([...ms932Encoder.encode("誇")].join(",") === "140,214"); // U+8A87
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A88");
    },
    Error,
    "encode-error: U+8A88",
  );
  r = r && ([...ms932Encoder.encode("誉")].join(",") === "151,95"); // U+8A89
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A8A");
    },
    Error,
    "encode-error: U+8A8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A8B");
    },
    Error,
    "encode-error: U+8A8B",
  );
  r = r && ([...ms932Encoder.encode("誌認")].join(",") === "142,143,148,70"); // U+8A8C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A8E");
    },
    Error,
    "encode-error: U+8A8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A8F");
    },
    Error,
    "encode-error: U+8A8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A90");
    },
    Error,
    "encode-error: U+8A90",
  );
  r = r && ([...ms932Encoder.encode("誑")].join(",") === "230,115"); // U+8A91
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A92");
    },
    Error,
    "encode-error: U+8A92",
  );
  r = r && ([...ms932Encoder.encode("誓")].join(",") === "144,190"); // U+8A93
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A94");
    },
    Error,
    "encode-error: U+8A94",
  );
  r = r && ([...ms932Encoder.encode("誕")].join(",") === "146,97"); // U+8A95
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A96");
    },
    Error,
    "encode-error: U+8A96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A97");
    },
    Error,
    "encode-error: U+8A97",
  );
  r = r && ([...ms932Encoder.encode("誘")].join(",") === "151,85"); // U+8A98
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A99");
    },
    Error,
    "encode-error: U+8A99",
  );
  r = r && ([...ms932Encoder.encode("誚")].join(",") === "230,118"); // U+8A9A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A9B");
    },
    Error,
    "encode-error: U+8A9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A9C");
    },
    Error,
    "encode-error: U+8A9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A9D");
    },
    Error,
    "encode-error: U+8A9D",
  );
  r = r && ([...ms932Encoder.encode("語")].join(",") === "140,234"); // U+8A9E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8A9F");
    },
    Error,
    "encode-error: U+8A9F",
  );
  r = r && ([...ms932Encoder.encode("誠誡")].join(",") === "144,189,230,114"); // U+8AA0
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AA2");
    },
    Error,
    "encode-error: U+8AA2",
  );
  r = r &&
    ([...ms932Encoder.encode("誣誤誥誦誧誨")].join(",") ===
      "230,119,140,235,230,116,230,117,251,166,230,113"); // U+8AA3
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AA9");
    },
    Error,
    "encode-error: U+8AA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AAA");
    },
    Error,
    "encode-error: U+8AAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AAB");
    },
    Error,
    "encode-error: U+8AAB",
  );
  r = r && ([...ms932Encoder.encode("説読")].join(",") === "144,224,147,199"); // U+8AAC
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AAE");
    },
    Error,
    "encode-error: U+8AAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AAF");
    },
    Error,
    "encode-error: U+8AAF",
  );
  r = r && ([...ms932Encoder.encode("誰")].join(",") === "146,78"); // U+8AB0
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AB1");
    },
    Error,
    "encode-error: U+8AB1",
  );
  r = r && ([...ms932Encoder.encode("課")].join(",") === "137,219"); // U+8AB2
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AB3");
    },
    Error,
    "encode-error: U+8AB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AB4");
    },
    Error,
    "encode-error: U+8AB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AB5");
    },
    Error,
    "encode-error: U+8AB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AB6");
    },
    Error,
    "encode-error: U+8AB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AB7");
    },
    Error,
    "encode-error: U+8AB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AB8");
    },
    Error,
    "encode-error: U+8AB8",
  );
  r = r && ([...ms932Encoder.encode("誹")].join(",") === "148,238"); // U+8AB9
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ABA");
    },
    Error,
    "encode-error: U+8ABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ABB");
    },
    Error,
    "encode-error: U+8ABB",
  );
  r = r && ([...ms932Encoder.encode("誼")].join(",") === "139,98"); // U+8ABC
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ABD");
    },
    Error,
    "encode-error: U+8ABD",
  );
  r = r && ([...ms932Encoder.encode("誾調")].join(",") === "251,167,146,178"); // U+8ABE
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AC0");
    },
    Error,
    "encode-error: U+8AC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AC1");
    },
    Error,
    "encode-error: U+8AC1",
  );
  r = r && ([...ms932Encoder.encode("諂")].join(",") === "230,122"); // U+8AC2
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AC3");
    },
    Error,
    "encode-error: U+8AC3",
  );
  r = r && ([...ms932Encoder.encode("諄")].join(",") === "230,120"); // U+8AC4
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AC5");
    },
    Error,
    "encode-error: U+8AC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AC6");
    },
    Error,
    "encode-error: U+8AC6",
  );
  r = r && ([...ms932Encoder.encode("談")].join(",") === "146,107"); // U+8AC7
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AC8");
    },
    Error,
    "encode-error: U+8AC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AC9");
    },
    Error,
    "encode-error: U+8AC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ACA");
    },
    Error,
    "encode-error: U+8ACA",
  );
  r = r &&
    ([...ms932Encoder.encode("請諌諍")].join(",") ===
      "144,191,138,208,230,121"); // U+8ACB
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ACE");
    },
    Error,
    "encode-error: U+8ACE",
  );
  r = r && ([...ms932Encoder.encode("諏")].join(",") === "144,122"); // U+8ACF
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AD0");
    },
    Error,
    "encode-error: U+8AD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AD1");
    },
    Error,
    "encode-error: U+8AD1",
  );
  r = r && ([...ms932Encoder.encode("諒")].join(",") === "151,200"); // U+8AD2
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AD3");
    },
    Error,
    "encode-error: U+8AD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AD4");
    },
    Error,
    "encode-error: U+8AD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AD5");
    },
    Error,
    "encode-error: U+8AD5",
  );
  r = r && ([...ms932Encoder.encode("論")].join(",") === "152,95"); // U+8AD6
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AD7");
    },
    Error,
    "encode-error: U+8AD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AD8");
    },
    Error,
    "encode-error: U+8AD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AD9");
    },
    Error,
    "encode-error: U+8AD9",
  );
  r = r &&
    ([...ms932Encoder.encode("諚諛諜")].join(",") ===
      "230,123,230,135,146,179"); // U+8ADA
  assertThrows(
    () => {
      ms932Encoder.encode("\u8ADD");
    },
    Error,
    "encode-error: U+8ADD",
  );
  r = r &&
    ([...ms932Encoder.encode("諞諟諠諡諢")].join(",") ===
      "230,134,251,168,230,131,230,139,230,132"); // U+8ADE
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AE3");
    },
    Error,
    "encode-error: U+8AE3",
  );
  r = r && ([...ms932Encoder.encode("諤")].join(",") === "230,128"); // U+8AE4
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AE5");
    },
    Error,
    "encode-error: U+8AE5",
  );
  r = r && ([...ms932Encoder.encode("諦諧")].join(",") === "146,250,230,126"); // U+8AE6
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AE8");
    },
    Error,
    "encode-error: U+8AE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AE9");
    },
    Error,
    "encode-error: U+8AE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AEA");
    },
    Error,
    "encode-error: U+8AEA",
  );
  r = r && ([...ms932Encoder.encode("諫")].join(",") === "230,124"); // U+8AEB
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AEC");
    },
    Error,
    "encode-error: U+8AEC",
  );
  r = r && ([...ms932Encoder.encode("諭諮")].join(",") === "151,64,142,144"); // U+8AED
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AEF");
    },
    Error,
    "encode-error: U+8AEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AF0");
    },
    Error,
    "encode-error: U+8AF0",
  );
  r = r && ([...ms932Encoder.encode("諱")].join(",") === "230,129"); // U+8AF1
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AF2");
    },
    Error,
    "encode-error: U+8AF2",
  );
  r = r && ([...ms932Encoder.encode("諳")].join(",") === "230,125"); // U+8AF3
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AF4");
    },
    Error,
    "encode-error: U+8AF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AF5");
    },
    Error,
    "encode-error: U+8AF5",
  );
  r = r &&
    ([...ms932Encoder.encode("諶諷諸")].join(",") ===
      "251,170,230,133,143,148"); // U+8AF6
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AF9");
    },
    Error,
    "encode-error: U+8AF9",
  );
  r = r && ([...ms932Encoder.encode("諺")].join(",") === "140,191"); // U+8AFA
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AFB");
    },
    Error,
    "encode-error: U+8AFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AFC");
    },
    Error,
    "encode-error: U+8AFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AFD");
    },
    Error,
    "encode-error: U+8AFD",
  );
  r = r && ([...ms932Encoder.encode("諾")].join(",") === "145,248"); // U+8AFE
  assertThrows(
    () => {
      ms932Encoder.encode("\u8AFF");
    },
    Error,
    "encode-error: U+8AFF",
  );
  r = r &&
    ([...ms932Encoder.encode("謀謁謂")].join(",") ===
      "150,100,137,121,136,224"); // U+8B00
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B03");
    },
    Error,
    "encode-error: U+8B03",
  );
  r = r && ([...ms932Encoder.encode("謄")].join(",") === "147,163"); // U+8B04
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B05");
    },
    Error,
    "encode-error: U+8B05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B06");
    },
    Error,
    "encode-error: U+8B06",
  );
  r = r && ([...ms932Encoder.encode("謇")].join(",") === "230,137"); // U+8B07
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B08");
    },
    Error,
    "encode-error: U+8B08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B09");
    },
    Error,
    "encode-error: U+8B09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B0A");
    },
    Error,
    "encode-error: U+8B0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B0B");
    },
    Error,
    "encode-error: U+8B0B",
  );
  r = r && ([...ms932Encoder.encode("謌")].join(",") === "230,136"); // U+8B0C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B0D");
    },
    Error,
    "encode-error: U+8B0D",
  );
  r = r && ([...ms932Encoder.encode("謎")].join(",") === "147,228"); // U+8B0E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B0F");
    },
    Error,
    "encode-error: U+8B0F",
  );
  r = r && ([...ms932Encoder.encode("謐")].join(",") === "230,141"); // U+8B10
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B11");
    },
    Error,
    "encode-error: U+8B11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B12");
    },
    Error,
    "encode-error: U+8B12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B13");
    },
    Error,
    "encode-error: U+8B13",
  );
  r = r && ([...ms932Encoder.encode("謔")].join(",") === "230,130"); // U+8B14
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B15");
    },
    Error,
    "encode-error: U+8B15",
  );
  r = r && ([...ms932Encoder.encode("謖謗")].join(",") === "230,140,230,142"); // U+8B16
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B18");
    },
    Error,
    "encode-error: U+8B18",
  );
  r = r &&
    ([...ms932Encoder.encode("謙謚講")].join(",") ===
      "140,170,230,138,141,117"); // U+8B19
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B1C");
    },
    Error,
    "encode-error: U+8B1C",
  );
  r = r && ([...ms932Encoder.encode("謝")].join(",") === "142,211"); // U+8B1D
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B1E");
    },
    Error,
    "encode-error: U+8B1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B1F");
    },
    Error,
    "encode-error: U+8B1F",
  );
  r = r && ([...ms932Encoder.encode("謠謡")].join(",") === "230,143,151,119"); // U+8B20
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B22");
    },
    Error,
    "encode-error: U+8B22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B23");
    },
    Error,
    "encode-error: U+8B23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B24");
    },
    Error,
    "encode-error: U+8B24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B25");
    },
    Error,
    "encode-error: U+8B25",
  );
  r = r && ([...ms932Encoder.encode("謦")].join(",") === "230,146"); // U+8B26
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B27");
    },
    Error,
    "encode-error: U+8B27",
  );
  r = r && ([...ms932Encoder.encode("謨")].join(",") === "230,149"); // U+8B28
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B29");
    },
    Error,
    "encode-error: U+8B29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B2A");
    },
    Error,
    "encode-error: U+8B2A",
  );
  r = r && ([...ms932Encoder.encode("謫謬")].join(",") === "230,147,149,84"); // U+8B2B
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B2D");
    },
    Error,
    "encode-error: U+8B2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B2E");
    },
    Error,
    "encode-error: U+8B2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B2F");
    },
    Error,
    "encode-error: U+8B2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B30");
    },
    Error,
    "encode-error: U+8B30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B31");
    },
    Error,
    "encode-error: U+8B31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B32");
    },
    Error,
    "encode-error: U+8B32",
  );
  r = r && ([...ms932Encoder.encode("謳")].join(",") === "230,144"); // U+8B33
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B34");
    },
    Error,
    "encode-error: U+8B34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B35");
    },
    Error,
    "encode-error: U+8B35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B36");
    },
    Error,
    "encode-error: U+8B36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B37");
    },
    Error,
    "encode-error: U+8B37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B38");
    },
    Error,
    "encode-error: U+8B38",
  );
  r = r && ([...ms932Encoder.encode("謹")].join(",") === "139,222"); // U+8B39
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B3A");
    },
    Error,
    "encode-error: U+8B3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B3B");
    },
    Error,
    "encode-error: U+8B3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B3C");
    },
    Error,
    "encode-error: U+8B3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B3D");
    },
    Error,
    "encode-error: U+8B3D",
  );
  r = r && ([...ms932Encoder.encode("謾")].join(",") === "230,148"); // U+8B3E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B3F");
    },
    Error,
    "encode-error: U+8B3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B40");
    },
    Error,
    "encode-error: U+8B40",
  );
  r = r && ([...ms932Encoder.encode("譁")].join(",") === "230,150"); // U+8B41
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B42");
    },
    Error,
    "encode-error: U+8B42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B43");
    },
    Error,
    "encode-error: U+8B43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B44");
    },
    Error,
    "encode-error: U+8B44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B45");
    },
    Error,
    "encode-error: U+8B45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B46");
    },
    Error,
    "encode-error: U+8B46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B47");
    },
    Error,
    "encode-error: U+8B47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B48");
    },
    Error,
    "encode-error: U+8B48",
  );
  r = r && ([...ms932Encoder.encode("證")].join(",") === "230,154"); // U+8B49
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B4A");
    },
    Error,
    "encode-error: U+8B4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B4B");
    },
    Error,
    "encode-error: U+8B4B",
  );
  r = r && ([...ms932Encoder.encode("譌")].join(",") === "230,151"); // U+8B4C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B4D");
    },
    Error,
    "encode-error: U+8B4D",
  );
  r = r && ([...ms932Encoder.encode("譎譏")].join(",") === "230,153,230,152"); // U+8B4E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B50");
    },
    Error,
    "encode-error: U+8B50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B51");
    },
    Error,
    "encode-error: U+8B51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B52");
    },
    Error,
    "encode-error: U+8B52",
  );
  r = r && ([...ms932Encoder.encode("譓")].join(",") === "251,171"); // U+8B53
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B54");
    },
    Error,
    "encode-error: U+8B54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B55");
    },
    Error,
    "encode-error: U+8B55",
  );
  r = r && ([...ms932Encoder.encode("譖")].join(",") === "230,155"); // U+8B56
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B57");
    },
    Error,
    "encode-error: U+8B57",
  );
  r = r && ([...ms932Encoder.encode("識")].join(",") === "142,175"); // U+8B58
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B59");
    },
    Error,
    "encode-error: U+8B59",
  );
  r = r &&
    ([...ms932Encoder.encode("譚譛譜")].join(",") ===
      "230,157,230,156,149,136"); // U+8B5A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B5D");
    },
    Error,
    "encode-error: U+8B5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B5E");
    },
    Error,
    "encode-error: U+8B5E",
  );
  r = r && ([...ms932Encoder.encode("譟")].join(",") === "230,159"); // U+8B5F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B60");
    },
    Error,
    "encode-error: U+8B60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B61");
    },
    Error,
    "encode-error: U+8B61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B62");
    },
    Error,
    "encode-error: U+8B62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B63");
    },
    Error,
    "encode-error: U+8B63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B64");
    },
    Error,
    "encode-error: U+8B64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B65");
    },
    Error,
    "encode-error: U+8B65",
  );
  r = r && ([...ms932Encoder.encode("警")].join(",") === "140,120"); // U+8B66
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B67");
    },
    Error,
    "encode-error: U+8B67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B68");
    },
    Error,
    "encode-error: U+8B68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B69");
    },
    Error,
    "encode-error: U+8B69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B6A");
    },
    Error,
    "encode-error: U+8B6A",
  );
  r = r && ([...ms932Encoder.encode("譫譬")].join(",") === "230,158,230,160"); // U+8B6B
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B6D");
    },
    Error,
    "encode-error: U+8B6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B6E");
    },
    Error,
    "encode-error: U+8B6E",
  );
  r = r &&
    ([...ms932Encoder.encode("譯議譱譲")].join(",") ===
      "230,161,139,99,227,191,143,247"); // U+8B6F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B73");
    },
    Error,
    "encode-error: U+8B73",
  );
  r = r && ([...ms932Encoder.encode("譴")].join(",") === "230,162"); // U+8B74
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B75");
    },
    Error,
    "encode-error: U+8B75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B76");
    },
    Error,
    "encode-error: U+8B76",
  );
  r = r && ([...ms932Encoder.encode("護")].join(",") === "140,236"); // U+8B77
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B78");
    },
    Error,
    "encode-error: U+8B78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B79");
    },
    Error,
    "encode-error: U+8B79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B7A");
    },
    Error,
    "encode-error: U+8B7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B7B");
    },
    Error,
    "encode-error: U+8B7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B7C");
    },
    Error,
    "encode-error: U+8B7C",
  );
  r = r && ([...ms932Encoder.encode("譽")].join(",") === "230,163"); // U+8B7D
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B7E");
    },
    Error,
    "encode-error: U+8B7E",
  );
  r = r && ([...ms932Encoder.encode("譿讀")].join(",") === "251,172,230,164"); // U+8B7F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B81");
    },
    Error,
    "encode-error: U+8B81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B82");
    },
    Error,
    "encode-error: U+8B82",
  );
  r = r && ([...ms932Encoder.encode("讃")].join(",") === "142,93"); // U+8B83
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B84");
    },
    Error,
    "encode-error: U+8B84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B85");
    },
    Error,
    "encode-error: U+8B85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B86");
    },
    Error,
    "encode-error: U+8B86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B87");
    },
    Error,
    "encode-error: U+8B87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B88");
    },
    Error,
    "encode-error: U+8B88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B89");
    },
    Error,
    "encode-error: U+8B89",
  );
  r = r && ([...ms932Encoder.encode("變")].join(",") === "157,204"); // U+8B8A
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B8B");
    },
    Error,
    "encode-error: U+8B8B",
  );
  r = r && ([...ms932Encoder.encode("讌")].join(",") === "230,165"); // U+8B8C
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B8D");
    },
    Error,
    "encode-error: U+8B8D",
  );
  r = r && ([...ms932Encoder.encode("讎")].join(",") === "230,166"); // U+8B8E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B8F");
    },
    Error,
    "encode-error: U+8B8F",
  );
  r = r && ([...ms932Encoder.encode("讐")].join(",") === "143,81"); // U+8B90
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B91");
    },
    Error,
    "encode-error: U+8B91",
  );
  r = r && ([...ms932Encoder.encode("讒讓")].join(",") === "230,167,230,168"); // U+8B92
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B94");
    },
    Error,
    "encode-error: U+8B94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B95");
    },
    Error,
    "encode-error: U+8B95",
  );
  r = r && ([...ms932Encoder.encode("讖")].join(",") === "230,169"); // U+8B96
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B97");
    },
    Error,
    "encode-error: U+8B97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B98");
    },
    Error,
    "encode-error: U+8B98",
  );
  r = r && ([...ms932Encoder.encode("讙讚")].join(",") === "230,170,230,171"); // U+8B99
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B9B");
    },
    Error,
    "encode-error: U+8B9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B9C");
    },
    Error,
    "encode-error: U+8B9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B9D");
    },
    Error,
    "encode-error: U+8B9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B9E");
    },
    Error,
    "encode-error: U+8B9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8B9F");
    },
    Error,
    "encode-error: U+8B9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BA0");
    },
    Error,
    "encode-error: U+8BA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BA1");
    },
    Error,
    "encode-error: U+8BA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BA2");
    },
    Error,
    "encode-error: U+8BA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BA3");
    },
    Error,
    "encode-error: U+8BA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BA4");
    },
    Error,
    "encode-error: U+8BA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BA5");
    },
    Error,
    "encode-error: U+8BA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BA6");
    },
    Error,
    "encode-error: U+8BA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BA7");
    },
    Error,
    "encode-error: U+8BA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BA8");
    },
    Error,
    "encode-error: U+8BA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BA9");
    },
    Error,
    "encode-error: U+8BA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BAA");
    },
    Error,
    "encode-error: U+8BAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BAB");
    },
    Error,
    "encode-error: U+8BAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BAC");
    },
    Error,
    "encode-error: U+8BAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BAD");
    },
    Error,
    "encode-error: U+8BAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BAE");
    },
    Error,
    "encode-error: U+8BAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BAF");
    },
    Error,
    "encode-error: U+8BAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BB0");
    },
    Error,
    "encode-error: U+8BB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BB1");
    },
    Error,
    "encode-error: U+8BB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BB2");
    },
    Error,
    "encode-error: U+8BB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BB3");
    },
    Error,
    "encode-error: U+8BB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BB4");
    },
    Error,
    "encode-error: U+8BB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BB5");
    },
    Error,
    "encode-error: U+8BB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BB6");
    },
    Error,
    "encode-error: U+8BB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BB7");
    },
    Error,
    "encode-error: U+8BB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BB8");
    },
    Error,
    "encode-error: U+8BB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BB9");
    },
    Error,
    "encode-error: U+8BB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BBA");
    },
    Error,
    "encode-error: U+8BBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BBB");
    },
    Error,
    "encode-error: U+8BBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BBC");
    },
    Error,
    "encode-error: U+8BBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BBD");
    },
    Error,
    "encode-error: U+8BBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BBE");
    },
    Error,
    "encode-error: U+8BBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BBF");
    },
    Error,
    "encode-error: U+8BBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BC0");
    },
    Error,
    "encode-error: U+8BC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BC1");
    },
    Error,
    "encode-error: U+8BC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BC2");
    },
    Error,
    "encode-error: U+8BC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BC3");
    },
    Error,
    "encode-error: U+8BC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BC4");
    },
    Error,
    "encode-error: U+8BC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BC5");
    },
    Error,
    "encode-error: U+8BC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BC6");
    },
    Error,
    "encode-error: U+8BC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BC7");
    },
    Error,
    "encode-error: U+8BC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BC8");
    },
    Error,
    "encode-error: U+8BC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BC9");
    },
    Error,
    "encode-error: U+8BC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BCA");
    },
    Error,
    "encode-error: U+8BCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BCB");
    },
    Error,
    "encode-error: U+8BCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BCC");
    },
    Error,
    "encode-error: U+8BCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BCD");
    },
    Error,
    "encode-error: U+8BCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BCE");
    },
    Error,
    "encode-error: U+8BCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BCF");
    },
    Error,
    "encode-error: U+8BCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BD0");
    },
    Error,
    "encode-error: U+8BD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BD1");
    },
    Error,
    "encode-error: U+8BD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BD2");
    },
    Error,
    "encode-error: U+8BD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BD3");
    },
    Error,
    "encode-error: U+8BD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BD4");
    },
    Error,
    "encode-error: U+8BD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BD5");
    },
    Error,
    "encode-error: U+8BD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BD6");
    },
    Error,
    "encode-error: U+8BD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BD7");
    },
    Error,
    "encode-error: U+8BD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BD8");
    },
    Error,
    "encode-error: U+8BD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BD9");
    },
    Error,
    "encode-error: U+8BD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BDA");
    },
    Error,
    "encode-error: U+8BDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BDB");
    },
    Error,
    "encode-error: U+8BDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BDC");
    },
    Error,
    "encode-error: U+8BDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BDD");
    },
    Error,
    "encode-error: U+8BDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BDE");
    },
    Error,
    "encode-error: U+8BDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BDF");
    },
    Error,
    "encode-error: U+8BDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BE0");
    },
    Error,
    "encode-error: U+8BE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BE1");
    },
    Error,
    "encode-error: U+8BE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BE2");
    },
    Error,
    "encode-error: U+8BE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BE3");
    },
    Error,
    "encode-error: U+8BE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BE4");
    },
    Error,
    "encode-error: U+8BE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BE5");
    },
    Error,
    "encode-error: U+8BE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BE6");
    },
    Error,
    "encode-error: U+8BE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BE7");
    },
    Error,
    "encode-error: U+8BE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BE8");
    },
    Error,
    "encode-error: U+8BE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BE9");
    },
    Error,
    "encode-error: U+8BE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BEA");
    },
    Error,
    "encode-error: U+8BEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BEB");
    },
    Error,
    "encode-error: U+8BEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BEC");
    },
    Error,
    "encode-error: U+8BEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BED");
    },
    Error,
    "encode-error: U+8BED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BEE");
    },
    Error,
    "encode-error: U+8BEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BEF");
    },
    Error,
    "encode-error: U+8BEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BF0");
    },
    Error,
    "encode-error: U+8BF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BF1");
    },
    Error,
    "encode-error: U+8BF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BF2");
    },
    Error,
    "encode-error: U+8BF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BF3");
    },
    Error,
    "encode-error: U+8BF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BF4");
    },
    Error,
    "encode-error: U+8BF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BF5");
    },
    Error,
    "encode-error: U+8BF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BF6");
    },
    Error,
    "encode-error: U+8BF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BF7");
    },
    Error,
    "encode-error: U+8BF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BF8");
    },
    Error,
    "encode-error: U+8BF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BF9");
    },
    Error,
    "encode-error: U+8BF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BFA");
    },
    Error,
    "encode-error: U+8BFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BFB");
    },
    Error,
    "encode-error: U+8BFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BFC");
    },
    Error,
    "encode-error: U+8BFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BFD");
    },
    Error,
    "encode-error: U+8BFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BFE");
    },
    Error,
    "encode-error: U+8BFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8BFF");
    },
    Error,
    "encode-error: U+8BFF",
  );

  assertStrictEquals(r, true);
});
