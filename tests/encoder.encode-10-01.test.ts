import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+9000-U+93FF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  r = r && ([...ms932Encoder.encode("退送")].join(",") === "145,222,145,151"); // U+9000
  assertThrows(
    () => {
      ms932Encoder.encode("\u9002");
    },
    Error,
    "encode-error: U+9002",
  );
  r = r && ([...ms932Encoder.encode("逃")].join(",") === "147,166"); // U+9003
  assertThrows(
    () => {
      ms932Encoder.encode("\u9004");
    },
    Error,
    "encode-error: U+9004",
  );
  r = r && ([...ms932Encoder.encode("逅逆")].join(",") === "231,144,139,116"); // U+9005
  assertThrows(
    () => {
      ms932Encoder.encode("\u9007");
    },
    Error,
    "encode-error: U+9007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9008");
    },
    Error,
    "encode-error: U+9008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9009");
    },
    Error,
    "encode-error: U+9009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u900A");
    },
    Error,
    "encode-error: U+900A",
  );
  r = r && ([...ms932Encoder.encode("逋")].join(",") === "231,153"); // U+900B
  assertThrows(
    () => {
      ms932Encoder.encode("\u900C");
    },
    Error,
    "encode-error: U+900C",
  );
  r = r &&
    ([...ms932Encoder.encode("逍逎透逐逑")].join(",") ===
      "231,150,231,163,147,167,146,128,231,147"); // U+900D
  assertThrows(
    () => {
      ms932Encoder.encode("\u9012");
    },
    Error,
    "encode-error: U+9012",
  );
  r = r &&
    ([...ms932Encoder.encode("逓途逕逖逗")].join(",") ===
      "146,252,147,114,231,148,231,152,144,128"); // U+9013
  assertThrows(
    () => {
      ms932Encoder.encode("\u9018");
    },
    Error,
    "encode-error: U+9018",
  );
  r = r && ([...ms932Encoder.encode("這通")].join(",") === "148,135,146,202"); // U+9019
  assertThrows(
    () => {
      ms932Encoder.encode("\u901B");
    },
    Error,
    "encode-error: U+901B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u901C");
    },
    Error,
    "encode-error: U+901C",
  );
  r = r &&
    ([...ms932Encoder.encode("逝逞速造逡逢連")].join(",") ===
      "144,192,231,151,145,172,145,162,231,149,136,167,152,65"); // U+901D
  assertThrows(
    () => {
      ms932Encoder.encode("\u9024");
    },
    Error,
    "encode-error: U+9024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9025");
    },
    Error,
    "encode-error: U+9025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9026");
    },
    Error,
    "encode-error: U+9026",
  );
  r = r && ([...ms932Encoder.encode("逧")].join(",") === "231,154"); // U+9027
  assertThrows(
    () => {
      ms932Encoder.encode("\u9028");
    },
    Error,
    "encode-error: U+9028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9029");
    },
    Error,
    "encode-error: U+9029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u902A");
    },
    Error,
    "encode-error: U+902A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u902B");
    },
    Error,
    "encode-error: U+902B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u902C");
    },
    Error,
    "encode-error: U+902C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u902D");
    },
    Error,
    "encode-error: U+902D",
  );
  r = r && ([...ms932Encoder.encode("逮")].join(",") === "145,223"); // U+902E
  assertThrows(
    () => {
      ms932Encoder.encode("\u902F");
    },
    Error,
    "encode-error: U+902F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9030");
    },
    Error,
    "encode-error: U+9030",
  );
  r = r && ([...ms932Encoder.encode("週進")].join(",") === "143,84,144,105"); // U+9031
  assertThrows(
    () => {
      ms932Encoder.encode("\u9033");
    },
    Error,
    "encode-error: U+9033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9034");
    },
    Error,
    "encode-error: U+9034",
  );
  r = r && ([...ms932Encoder.encode("逵逶")].join(",") === "231,156,231,155"); // U+9035
  assertThrows(
    () => {
      ms932Encoder.encode("\u9037");
    },
    Error,
    "encode-error: U+9037",
  );
  r = r && ([...ms932Encoder.encode("逸逹")].join(",") === "136,237,231,157"); // U+9038
  assertThrows(
    () => {
      ms932Encoder.encode("\u903A");
    },
    Error,
    "encode-error: U+903A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u903B");
    },
    Error,
    "encode-error: U+903B",
  );
  r = r && ([...ms932Encoder.encode("逼")].join(",") === "149,78"); // U+903C
  assertThrows(
    () => {
      ms932Encoder.encode("\u903D");
    },
    Error,
    "encode-error: U+903D",
  );
  r = r && ([...ms932Encoder.encode("逾")].join(",") === "231,165"); // U+903E
  assertThrows(
    () => {
      ms932Encoder.encode("\u903F");
    },
    Error,
    "encode-error: U+903F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9040");
    },
    Error,
    "encode-error: U+9040",
  );
  r = r && ([...ms932Encoder.encode("遁遂")].join(",") === "147,217,144,139"); // U+9041
  assertThrows(
    () => {
      ms932Encoder.encode("\u9043");
    },
    Error,
    "encode-error: U+9043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9044");
    },
    Error,
    "encode-error: U+9044",
  );
  r = r && ([...ms932Encoder.encode("遅")].join(",") === "146,120"); // U+9045
  assertThrows(
    () => {
      ms932Encoder.encode("\u9046");
    },
    Error,
    "encode-error: U+9046",
  );
  r = r && ([...ms932Encoder.encode("遇")].join(",") === "139,246"); // U+9047
  assertThrows(
    () => {
      ms932Encoder.encode("\u9048");
    },
    Error,
    "encode-error: U+9048",
  );
  r = r &&
    ([...ms932Encoder.encode("遉遊運")].join(",") === "231,164,151,86,137,94"); // U+9049
  assertThrows(
    () => {
      ms932Encoder.encode("\u904C");
    },
    Error,
    "encode-error: U+904C",
  );
  r = r &&
    ([...ms932Encoder.encode("遍過遏遐遑遒道達違遖")].join(",") ===
      "149,213,137,223,231,159,231,160,231,161,231,162,147,185,146,66,136,225,231,166"); // U+904D
  assertThrows(
    () => {
      ms932Encoder.encode("\u9057");
    },
    Error,
    "encode-error: U+9057",
  );
  r = r && ([...ms932Encoder.encode("遘遙")].join(",") === "231,167,234,161"); // U+9058
  assertThrows(
    () => {
      ms932Encoder.encode("\u905A");
    },
    Error,
    "encode-error: U+905A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u905B");
    },
    Error,
    "encode-error: U+905B",
  );
  r = r && ([...ms932Encoder.encode("遜")].join(",") === "145,187"); // U+905C
  assertThrows(
    () => {
      ms932Encoder.encode("\u905D");
    },
    Error,
    "encode-error: U+905D",
  );
  r = r && ([...ms932Encoder.encode("遞")].join(",") === "231,168"); // U+905E
  assertThrows(
    () => {
      ms932Encoder.encode("\u905F");
    },
    Error,
    "encode-error: U+905F",
  );
  r = r && ([...ms932Encoder.encode("遠遡")].join(",") === "137,147,145,107"); // U+9060
  assertThrows(
    () => {
      ms932Encoder.encode("\u9062");
    },
    Error,
    "encode-error: U+9062",
  );
  r = r && ([...ms932Encoder.encode("遣")].join(",") === "140,173"); // U+9063
  assertThrows(
    () => {
      ms932Encoder.encode("\u9064");
    },
    Error,
    "encode-error: U+9064",
  );
  r = r && ([...ms932Encoder.encode("遥")].join(",") === "151,121"); // U+9065
  assertThrows(
    () => {
      ms932Encoder.encode("\u9066");
    },
    Error,
    "encode-error: U+9066",
  );
  r = r &&
    ([...ms932Encoder.encode("遧遨適")].join(",") === "251,181,231,169,147,75"); // U+9067
  assertThrows(
    () => {
      ms932Encoder.encode("\u906A");
    },
    Error,
    "encode-error: U+906A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u906B");
    },
    Error,
    "encode-error: U+906B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u906C");
    },
    Error,
    "encode-error: U+906C",
  );
  r = r &&
    ([...ms932Encoder.encode("遭遮遯")].join(",") ===
      "145,152,142,213,231,170"); // U+906D
  assertThrows(
    () => {
      ms932Encoder.encode("\u9070");
    },
    Error,
    "encode-error: U+9070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9071");
    },
    Error,
    "encode-error: U+9071",
  );
  r = r && ([...ms932Encoder.encode("遲")].join(",") === "231,173"); // U+9072
  assertThrows(
    () => {
      ms932Encoder.encode("\u9073");
    },
    Error,
    "encode-error: U+9073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9074");
    },
    Error,
    "encode-error: U+9074",
  );
  r = r &&
    ([...ms932Encoder.encode("遵遶遷選")].join(",") ===
      "143,133,231,171,145,74,145,73"); // U+9075
  assertThrows(
    () => {
      ms932Encoder.encode("\u9079");
    },
    Error,
    "encode-error: U+9079",
  );
  r = r && ([...ms932Encoder.encode("遺")].join(",") === "136,226"); // U+907A
  assertThrows(
    () => {
      ms932Encoder.encode("\u907B");
    },
    Error,
    "encode-error: U+907B",
  );
  r = r && ([...ms932Encoder.encode("遼遽")].join(",") === "151,201,231,175"); // U+907C
  assertThrows(
    () => {
      ms932Encoder.encode("\u907E");
    },
    Error,
    "encode-error: U+907E",
  );
  r = r &&
    ([...ms932Encoder.encode("避邀邁邂邃還")].join(",") ===
      "148,240,231,177,231,176,231,174,226,132,138,210"); // U+907F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9085");
    },
    Error,
    "encode-error: U+9085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9086");
    },
    Error,
    "encode-error: U+9086",
  );
  r = r && ([...ms932Encoder.encode("邇")].join(",") === "231,142"); // U+9087
  assertThrows(
    () => {
      ms932Encoder.encode("\u9088");
    },
    Error,
    "encode-error: U+9088",
  );
  r = r && ([...ms932Encoder.encode("邉邊")].join(",") === "231,179,231,178"); // U+9089
  assertThrows(
    () => {
      ms932Encoder.encode("\u908B");
    },
    Error,
    "encode-error: U+908B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u908C");
    },
    Error,
    "encode-error: U+908C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u908D");
    },
    Error,
    "encode-error: U+908D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u908E");
    },
    Error,
    "encode-error: U+908E",
  );
  r = r && ([...ms932Encoder.encode("邏")].join(",") === "231,180"); // U+908F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9090");
    },
    Error,
    "encode-error: U+9090",
  );
  r = r && ([...ms932Encoder.encode("邑")].join(",") === "151,87"); // U+9091
  assertThrows(
    () => {
      ms932Encoder.encode("\u9092");
    },
    Error,
    "encode-error: U+9092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9093");
    },
    Error,
    "encode-error: U+9093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9094");
    },
    Error,
    "encode-error: U+9094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9095");
    },
    Error,
    "encode-error: U+9095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9096");
    },
    Error,
    "encode-error: U+9096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9097");
    },
    Error,
    "encode-error: U+9097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9098");
    },
    Error,
    "encode-error: U+9098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9099");
    },
    Error,
    "encode-error: U+9099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u909A");
    },
    Error,
    "encode-error: U+909A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u909B");
    },
    Error,
    "encode-error: U+909B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u909C");
    },
    Error,
    "encode-error: U+909C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u909D");
    },
    Error,
    "encode-error: U+909D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u909E");
    },
    Error,
    "encode-error: U+909E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u909F");
    },
    Error,
    "encode-error: U+909F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90A0");
    },
    Error,
    "encode-error: U+90A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90A1");
    },
    Error,
    "encode-error: U+90A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90A2");
    },
    Error,
    "encode-error: U+90A2",
  );
  r = r && ([...ms932Encoder.encode("那")].join(",") === "147,223"); // U+90A3
  assertThrows(
    () => {
      ms932Encoder.encode("\u90A4");
    },
    Error,
    "encode-error: U+90A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90A5");
    },
    Error,
    "encode-error: U+90A5",
  );
  r = r && ([...ms932Encoder.encode("邦")].join(",") === "150,77"); // U+90A6
  assertThrows(
    () => {
      ms932Encoder.encode("\u90A7");
    },
    Error,
    "encode-error: U+90A7",
  );
  r = r && ([...ms932Encoder.encode("邨")].join(",") === "231,181"); // U+90A8
  assertThrows(
    () => {
      ms932Encoder.encode("\u90A9");
    },
    Error,
    "encode-error: U+90A9",
  );
  r = r && ([...ms932Encoder.encode("邪")].join(",") === "142,215"); // U+90AA
  assertThrows(
    () => {
      ms932Encoder.encode("\u90AB");
    },
    Error,
    "encode-error: U+90AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90AC");
    },
    Error,
    "encode-error: U+90AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90AD");
    },
    Error,
    "encode-error: U+90AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90AE");
    },
    Error,
    "encode-error: U+90AE",
  );
  r = r && ([...ms932Encoder.encode("邯")].join(",") === "231,182"); // U+90AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u90B0");
    },
    Error,
    "encode-error: U+90B0",
  );
  r = r && ([...ms932Encoder.encode("邱")].join(",") === "231,183"); // U+90B1
  assertThrows(
    () => {
      ms932Encoder.encode("\u90B2");
    },
    Error,
    "encode-error: U+90B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90B3");
    },
    Error,
    "encode-error: U+90B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90B4");
    },
    Error,
    "encode-error: U+90B4",
  );
  r = r && ([...ms932Encoder.encode("邵")].join(",") === "231,184"); // U+90B5
  assertThrows(
    () => {
      ms932Encoder.encode("\u90B6");
    },
    Error,
    "encode-error: U+90B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90B7");
    },
    Error,
    "encode-error: U+90B7",
  );
  r = r && ([...ms932Encoder.encode("邸")].join(",") === "147,64"); // U+90B8
  assertThrows(
    () => {
      ms932Encoder.encode("\u90B9");
    },
    Error,
    "encode-error: U+90B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90BA");
    },
    Error,
    "encode-error: U+90BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90BB");
    },
    Error,
    "encode-error: U+90BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90BC");
    },
    Error,
    "encode-error: U+90BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90BD");
    },
    Error,
    "encode-error: U+90BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90BE");
    },
    Error,
    "encode-error: U+90BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90BF");
    },
    Error,
    "encode-error: U+90BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90C0");
    },
    Error,
    "encode-error: U+90C0",
  );
  r = r && ([...ms932Encoder.encode("郁")].join(",") === "136,232"); // U+90C1
  assertThrows(
    () => {
      ms932Encoder.encode("\u90C2");
    },
    Error,
    "encode-error: U+90C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90C3");
    },
    Error,
    "encode-error: U+90C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90C4");
    },
    Error,
    "encode-error: U+90C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90C5");
    },
    Error,
    "encode-error: U+90C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90C6");
    },
    Error,
    "encode-error: U+90C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90C7");
    },
    Error,
    "encode-error: U+90C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90C8");
    },
    Error,
    "encode-error: U+90C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90C9");
    },
    Error,
    "encode-error: U+90C9",
  );
  r = r && ([...ms932Encoder.encode("郊")].join(",") === "141,120"); // U+90CA
  assertThrows(
    () => {
      ms932Encoder.encode("\u90CB");
    },
    Error,
    "encode-error: U+90CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90CC");
    },
    Error,
    "encode-error: U+90CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90CD");
    },
    Error,
    "encode-error: U+90CD",
  );
  r = r && ([...ms932Encoder.encode("郎")].join(",") === "152,89"); // U+90CE
  assertThrows(
    () => {
      ms932Encoder.encode("\u90CF");
    },
    Error,
    "encode-error: U+90CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90D0");
    },
    Error,
    "encode-error: U+90D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90D1");
    },
    Error,
    "encode-error: U+90D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90D2");
    },
    Error,
    "encode-error: U+90D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90D3");
    },
    Error,
    "encode-error: U+90D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90D4");
    },
    Error,
    "encode-error: U+90D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90D5");
    },
    Error,
    "encode-error: U+90D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90D6");
    },
    Error,
    "encode-error: U+90D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90D7");
    },
    Error,
    "encode-error: U+90D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90D8");
    },
    Error,
    "encode-error: U+90D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90D9");
    },
    Error,
    "encode-error: U+90D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90DA");
    },
    Error,
    "encode-error: U+90DA",
  );
  r = r && ([...ms932Encoder.encode("郛")].join(",") === "231,188"); // U+90DB
  assertThrows(
    () => {
      ms932Encoder.encode("\u90DC");
    },
    Error,
    "encode-error: U+90DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90DD");
    },
    Error,
    "encode-error: U+90DD",
  );
  r = r && ([...ms932Encoder.encode("郞")].join(",") === "251,182"); // U+90DE
  assertThrows(
    () => {
      ms932Encoder.encode("\u90DF");
    },
    Error,
    "encode-error: U+90DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90E0");
    },
    Error,
    "encode-error: U+90E0",
  );
  r = r && ([...ms932Encoder.encode("郡郢")].join(",") === "140,83,231,185"); // U+90E1
  assertThrows(
    () => {
      ms932Encoder.encode("\u90E3");
    },
    Error,
    "encode-error: U+90E3",
  );
  r = r && ([...ms932Encoder.encode("郤")].join(",") === "231,186"); // U+90E4
  assertThrows(
    () => {
      ms932Encoder.encode("\u90E5");
    },
    Error,
    "encode-error: U+90E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90E6");
    },
    Error,
    "encode-error: U+90E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90E7");
    },
    Error,
    "encode-error: U+90E7",
  );
  r = r && ([...ms932Encoder.encode("部")].join(",") === "149,148"); // U+90E8
  assertThrows(
    () => {
      ms932Encoder.encode("\u90E9");
    },
    Error,
    "encode-error: U+90E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90EA");
    },
    Error,
    "encode-error: U+90EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90EB");
    },
    Error,
    "encode-error: U+90EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90EC");
    },
    Error,
    "encode-error: U+90EC",
  );
  r = r && ([...ms932Encoder.encode("郭")].join(",") === "138,115"); // U+90ED
  assertThrows(
    () => {
      ms932Encoder.encode("\u90EE");
    },
    Error,
    "encode-error: U+90EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90EF");
    },
    Error,
    "encode-error: U+90EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90F0");
    },
    Error,
    "encode-error: U+90F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90F1");
    },
    Error,
    "encode-error: U+90F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90F2");
    },
    Error,
    "encode-error: U+90F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90F3");
    },
    Error,
    "encode-error: U+90F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90F4");
    },
    Error,
    "encode-error: U+90F4",
  );
  r = r && ([...ms932Encoder.encode("郵")].join(",") === "151,88"); // U+90F5
  assertThrows(
    () => {
      ms932Encoder.encode("\u90F6");
    },
    Error,
    "encode-error: U+90F6",
  );
  r = r && ([...ms932Encoder.encode("郷")].join(",") === "139,189"); // U+90F7
  assertThrows(
    () => {
      ms932Encoder.encode("\u90F8");
    },
    Error,
    "encode-error: U+90F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90F9");
    },
    Error,
    "encode-error: U+90F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90FA");
    },
    Error,
    "encode-error: U+90FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90FB");
    },
    Error,
    "encode-error: U+90FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90FC");
    },
    Error,
    "encode-error: U+90FC",
  );
  r = r && ([...ms932Encoder.encode("都")].join(",") === "147,115"); // U+90FD
  assertThrows(
    () => {
      ms932Encoder.encode("\u90FE");
    },
    Error,
    "encode-error: U+90FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u90FF");
    },
    Error,
    "encode-error: U+90FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9100");
    },
    Error,
    "encode-error: U+9100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9101");
    },
    Error,
    "encode-error: U+9101",
  );
  r = r && ([...ms932Encoder.encode("鄂")].join(",") === "231,189"); // U+9102
  assertThrows(
    () => {
      ms932Encoder.encode("\u9103");
    },
    Error,
    "encode-error: U+9103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9104");
    },
    Error,
    "encode-error: U+9104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9105");
    },
    Error,
    "encode-error: U+9105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9106");
    },
    Error,
    "encode-error: U+9106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9107");
    },
    Error,
    "encode-error: U+9107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9108");
    },
    Error,
    "encode-error: U+9108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9109");
    },
    Error,
    "encode-error: U+9109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u910A");
    },
    Error,
    "encode-error: U+910A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u910B");
    },
    Error,
    "encode-error: U+910B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u910C");
    },
    Error,
    "encode-error: U+910C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u910D");
    },
    Error,
    "encode-error: U+910D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u910E");
    },
    Error,
    "encode-error: U+910E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u910F");
    },
    Error,
    "encode-error: U+910F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9110");
    },
    Error,
    "encode-error: U+9110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9111");
    },
    Error,
    "encode-error: U+9111",
  );
  r = r && ([...ms932Encoder.encode("鄒")].join(",") === "231,190"); // U+9112
  assertThrows(
    () => {
      ms932Encoder.encode("\u9113");
    },
    Error,
    "encode-error: U+9113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9114");
    },
    Error,
    "encode-error: U+9114",
  );
  r = r && ([...ms932Encoder.encode("鄕")].join(",") === "251,184"); // U+9115
  assertThrows(
    () => {
      ms932Encoder.encode("\u9116");
    },
    Error,
    "encode-error: U+9116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9117");
    },
    Error,
    "encode-error: U+9117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9118");
    },
    Error,
    "encode-error: U+9118",
  );
  r = r && ([...ms932Encoder.encode("鄙")].join(",") === "231,191"); // U+9119
  assertThrows(
    () => {
      ms932Encoder.encode("\u911A");
    },
    Error,
    "encode-error: U+911A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u911B");
    },
    Error,
    "encode-error: U+911B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u911C");
    },
    Error,
    "encode-error: U+911C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u911D");
    },
    Error,
    "encode-error: U+911D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u911E");
    },
    Error,
    "encode-error: U+911E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u911F");
    },
    Error,
    "encode-error: U+911F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9120");
    },
    Error,
    "encode-error: U+9120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9121");
    },
    Error,
    "encode-error: U+9121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9122");
    },
    Error,
    "encode-error: U+9122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9123");
    },
    Error,
    "encode-error: U+9123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9124");
    },
    Error,
    "encode-error: U+9124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9125");
    },
    Error,
    "encode-error: U+9125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9126");
    },
    Error,
    "encode-error: U+9126",
  );
  r = r && ([...ms932Encoder.encode("鄧")].join(",") === "251,185"); // U+9127
  assertThrows(
    () => {
      ms932Encoder.encode("\u9128");
    },
    Error,
    "encode-error: U+9128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9129");
    },
    Error,
    "encode-error: U+9129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u912A");
    },
    Error,
    "encode-error: U+912A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u912B");
    },
    Error,
    "encode-error: U+912B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u912C");
    },
    Error,
    "encode-error: U+912C",
  );
  r = r && ([...ms932Encoder.encode("鄭")].join(",") === "147,65"); // U+912D
  assertThrows(
    () => {
      ms932Encoder.encode("\u912E");
    },
    Error,
    "encode-error: U+912E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u912F");
    },
    Error,
    "encode-error: U+912F",
  );
  r = r && ([...ms932Encoder.encode("鄰")].join(",") === "231,193"); // U+9130
  assertThrows(
    () => {
      ms932Encoder.encode("\u9131");
    },
    Error,
    "encode-error: U+9131",
  );
  r = r && ([...ms932Encoder.encode("鄲")].join(",") === "231,192"); // U+9132
  assertThrows(
    () => {
      ms932Encoder.encode("\u9133");
    },
    Error,
    "encode-error: U+9133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9134");
    },
    Error,
    "encode-error: U+9134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9135");
    },
    Error,
    "encode-error: U+9135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9136");
    },
    Error,
    "encode-error: U+9136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9137");
    },
    Error,
    "encode-error: U+9137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9138");
    },
    Error,
    "encode-error: U+9138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9139");
    },
    Error,
    "encode-error: U+9139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u913A");
    },
    Error,
    "encode-error: U+913A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u913B");
    },
    Error,
    "encode-error: U+913B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u913C");
    },
    Error,
    "encode-error: U+913C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u913D");
    },
    Error,
    "encode-error: U+913D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u913E");
    },
    Error,
    "encode-error: U+913E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u913F");
    },
    Error,
    "encode-error: U+913F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9140");
    },
    Error,
    "encode-error: U+9140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9141");
    },
    Error,
    "encode-error: U+9141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9142");
    },
    Error,
    "encode-error: U+9142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9143");
    },
    Error,
    "encode-error: U+9143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9144");
    },
    Error,
    "encode-error: U+9144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9145");
    },
    Error,
    "encode-error: U+9145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9146");
    },
    Error,
    "encode-error: U+9146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9147");
    },
    Error,
    "encode-error: U+9147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9148");
    },
    Error,
    "encode-error: U+9148",
  );
  r = r &&
    ([...ms932Encoder.encode("酉酊酋酌配酎")].join(",") ===
      "147,209,231,194,143,85,142,222,148,122,146,145"); // U+9149
  assertThrows(
    () => {
      ms932Encoder.encode("\u914F");
    },
    Error,
    "encode-error: U+914F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9150");
    },
    Error,
    "encode-error: U+9150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9151");
    },
    Error,
    "encode-error: U+9151",
  );
  r = r && ([...ms932Encoder.encode("酒")].join(",") === "142,240"); // U+9152
  assertThrows(
    () => {
      ms932Encoder.encode("\u9153");
    },
    Error,
    "encode-error: U+9153",
  );
  r = r && ([...ms932Encoder.encode("酔")].join(",") === "144,140"); // U+9154
  assertThrows(
    () => {
      ms932Encoder.encode("\u9155");
    },
    Error,
    "encode-error: U+9155",
  );
  r = r && ([...ms932Encoder.encode("酖")].join(",") === "231,195"); // U+9156
  assertThrows(
    () => {
      ms932Encoder.encode("\u9157");
    },
    Error,
    "encode-error: U+9157",
  );
  r = r && ([...ms932Encoder.encode("酘")].join(",") === "231,196"); // U+9158
  assertThrows(
    () => {
      ms932Encoder.encode("\u9159");
    },
    Error,
    "encode-error: U+9159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u915A");
    },
    Error,
    "encode-error: U+915A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u915B");
    },
    Error,
    "encode-error: U+915B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u915C");
    },
    Error,
    "encode-error: U+915C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u915D");
    },
    Error,
    "encode-error: U+915D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u915E");
    },
    Error,
    "encode-error: U+915E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u915F");
    },
    Error,
    "encode-error: U+915F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9160");
    },
    Error,
    "encode-error: U+9160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9161");
    },
    Error,
    "encode-error: U+9161",
  );
  r = r && ([...ms932Encoder.encode("酢酣")].join(",") === "144,124,231,197"); // U+9162
  assertThrows(
    () => {
      ms932Encoder.encode("\u9164");
    },
    Error,
    "encode-error: U+9164",
  );
  r = r && ([...ms932Encoder.encode("酥")].join(",") === "231,198"); // U+9165
  assertThrows(
    () => {
      ms932Encoder.encode("\u9166");
    },
    Error,
    "encode-error: U+9166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9167");
    },
    Error,
    "encode-error: U+9167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9168");
    },
    Error,
    "encode-error: U+9168",
  );
  r = r && ([...ms932Encoder.encode("酩酪")].join(",") === "231,199,151,143"); // U+9169
  assertThrows(
    () => {
      ms932Encoder.encode("\u916B");
    },
    Error,
    "encode-error: U+916B",
  );
  r = r && ([...ms932Encoder.encode("酬")].join(",") === "143,86"); // U+916C
  assertThrows(
    () => {
      ms932Encoder.encode("\u916D");
    },
    Error,
    "encode-error: U+916D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u916E");
    },
    Error,
    "encode-error: U+916E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u916F");
    },
    Error,
    "encode-error: U+916F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9170");
    },
    Error,
    "encode-error: U+9170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9171");
    },
    Error,
    "encode-error: U+9171",
  );
  r = r && ([...ms932Encoder.encode("酲酳")].join(",") === "231,201,231,200"); // U+9172
  assertThrows(
    () => {
      ms932Encoder.encode("\u9174");
    },
    Error,
    "encode-error: U+9174",
  );
  r = r && ([...ms932Encoder.encode("酵")].join(",") === "141,121"); // U+9175
  assertThrows(
    () => {
      ms932Encoder.encode("\u9176");
    },
    Error,
    "encode-error: U+9176",
  );
  r = r && ([...ms932Encoder.encode("酷酸")].join(",") === "141,147,142,95"); // U+9177
  assertThrows(
    () => {
      ms932Encoder.encode("\u9179");
    },
    Error,
    "encode-error: U+9179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u917A");
    },
    Error,
    "encode-error: U+917A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u917B");
    },
    Error,
    "encode-error: U+917B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u917C");
    },
    Error,
    "encode-error: U+917C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u917D");
    },
    Error,
    "encode-error: U+917D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u917E");
    },
    Error,
    "encode-error: U+917E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u917F");
    },
    Error,
    "encode-error: U+917F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9180");
    },
    Error,
    "encode-error: U+9180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9181");
    },
    Error,
    "encode-error: U+9181",
  );
  r = r && ([...ms932Encoder.encode("醂")].join(",") === "231,204"); // U+9182
  assertThrows(
    () => {
      ms932Encoder.encode("\u9183");
    },
    Error,
    "encode-error: U+9183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9184");
    },
    Error,
    "encode-error: U+9184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9185");
    },
    Error,
    "encode-error: U+9185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9186");
    },
    Error,
    "encode-error: U+9186",
  );
  r = r && ([...ms932Encoder.encode("醇")].join(",") === "143,134"); // U+9187
  assertThrows(
    () => {
      ms932Encoder.encode("\u9188");
    },
    Error,
    "encode-error: U+9188",
  );
  r = r && ([...ms932Encoder.encode("醉")].join(",") === "231,203"); // U+9189
  assertThrows(
    () => {
      ms932Encoder.encode("\u918A");
    },
    Error,
    "encode-error: U+918A",
  );
  r = r && ([...ms932Encoder.encode("醋")].join(",") === "231,202"); // U+918B
  assertThrows(
    () => {
      ms932Encoder.encode("\u918C");
    },
    Error,
    "encode-error: U+918C",
  );
  r = r && ([...ms932Encoder.encode("醍")].join(",") === "145,231"); // U+918D
  assertThrows(
    () => {
      ms932Encoder.encode("\u918E");
    },
    Error,
    "encode-error: U+918E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u918F");
    },
    Error,
    "encode-error: U+918F",
  );
  r = r && ([...ms932Encoder.encode("醐")].join(",") === "140,237"); // U+9190
  assertThrows(
    () => {
      ms932Encoder.encode("\u9191");
    },
    Error,
    "encode-error: U+9191",
  );
  r = r && ([...ms932Encoder.encode("醒")].join(",") === "144,193"); // U+9192
  assertThrows(
    () => {
      ms932Encoder.encode("\u9193");
    },
    Error,
    "encode-error: U+9193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9194");
    },
    Error,
    "encode-error: U+9194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9195");
    },
    Error,
    "encode-error: U+9195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9196");
    },
    Error,
    "encode-error: U+9196",
  );
  r = r && ([...ms932Encoder.encode("醗")].join(",") === "148,174"); // U+9197
  assertThrows(
    () => {
      ms932Encoder.encode("\u9198");
    },
    Error,
    "encode-error: U+9198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9199");
    },
    Error,
    "encode-error: U+9199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u919A");
    },
    Error,
    "encode-error: U+919A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u919B");
    },
    Error,
    "encode-error: U+919B",
  );
  r = r && ([...ms932Encoder.encode("醜")].join(",") === "143,88"); // U+919C
  assertThrows(
    () => {
      ms932Encoder.encode("\u919D");
    },
    Error,
    "encode-error: U+919D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u919E");
    },
    Error,
    "encode-error: U+919E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u919F");
    },
    Error,
    "encode-error: U+919F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91A0");
    },
    Error,
    "encode-error: U+91A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91A1");
    },
    Error,
    "encode-error: U+91A1",
  );
  r = r && ([...ms932Encoder.encode("醢")].join(",") === "231,205"); // U+91A2
  assertThrows(
    () => {
      ms932Encoder.encode("\u91A3");
    },
    Error,
    "encode-error: U+91A3",
  );
  r = r && ([...ms932Encoder.encode("醤")].join(",") === "143,221"); // U+91A4
  assertThrows(
    () => {
      ms932Encoder.encode("\u91A5");
    },
    Error,
    "encode-error: U+91A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91A6");
    },
    Error,
    "encode-error: U+91A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91A7");
    },
    Error,
    "encode-error: U+91A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91A8");
    },
    Error,
    "encode-error: U+91A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91A9");
    },
    Error,
    "encode-error: U+91A9",
  );
  r = r && ([...ms932Encoder.encode("醪醫")].join(",") === "231,208,231,206"); // U+91AA
  assertThrows(
    () => {
      ms932Encoder.encode("\u91AC");
    },
    Error,
    "encode-error: U+91AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91AD");
    },
    Error,
    "encode-error: U+91AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91AE");
    },
    Error,
    "encode-error: U+91AE",
  );
  r = r && ([...ms932Encoder.encode("醯")].join(",") === "231,207"); // U+91AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u91B0");
    },
    Error,
    "encode-error: U+91B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91B1");
    },
    Error,
    "encode-error: U+91B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91B2");
    },
    Error,
    "encode-error: U+91B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91B3");
    },
    Error,
    "encode-error: U+91B3",
  );
  r = r && ([...ms932Encoder.encode("醴醵")].join(",") === "231,210,231,209"); // U+91B4
  assertThrows(
    () => {
      ms932Encoder.encode("\u91B6");
    },
    Error,
    "encode-error: U+91B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91B7");
    },
    Error,
    "encode-error: U+91B7",
  );
  r = r && ([...ms932Encoder.encode("醸")].join(",") === "143,248"); // U+91B8
  assertThrows(
    () => {
      ms932Encoder.encode("\u91B9");
    },
    Error,
    "encode-error: U+91B9",
  );
  r = r && ([...ms932Encoder.encode("醺")].join(",") === "231,211"); // U+91BA
  assertThrows(
    () => {
      ms932Encoder.encode("\u91BB");
    },
    Error,
    "encode-error: U+91BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91BC");
    },
    Error,
    "encode-error: U+91BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91BD");
    },
    Error,
    "encode-error: U+91BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91BE");
    },
    Error,
    "encode-error: U+91BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91BF");
    },
    Error,
    "encode-error: U+91BF",
  );
  r = r && ([...ms932Encoder.encode("釀釁")].join(",") === "231,212,231,213"); // U+91C0
  assertThrows(
    () => {
      ms932Encoder.encode("\u91C2");
    },
    Error,
    "encode-error: U+91C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91C3");
    },
    Error,
    "encode-error: U+91C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91C4");
    },
    Error,
    "encode-error: U+91C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91C5");
    },
    Error,
    "encode-error: U+91C5",
  );
  r = r &&
    ([...ms932Encoder.encode("釆采釈釉")].join(",") ===
      "148,206,141,209,142,223,231,214"); // U+91C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u91CA");
    },
    Error,
    "encode-error: U+91CA",
  );
  r = r &&
    ([...ms932Encoder.encode("釋里重野量釐金")].join(",") ===
      "231,215,151,162,143,100,150,236,151,202,231,216,139,224"); // U+91CB
  assertThrows(
    () => {
      ms932Encoder.encode("\u91D2");
    },
    Error,
    "encode-error: U+91D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91D3");
    },
    Error,
    "encode-error: U+91D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91D4");
    },
    Error,
    "encode-error: U+91D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91D5");
    },
    Error,
    "encode-error: U+91D5",
  );
  r = r &&
    ([...ms932Encoder.encode("釖釗釘")].join(",") === "231,217,251,187,147,66"); // U+91D6
  assertThrows(
    () => {
      ms932Encoder.encode("\u91D9");
    },
    Error,
    "encode-error: U+91D9",
  );
  r = r &&
    ([...ms932Encoder.encode("釚釛釜針釞釟")].join(",") ===
      "251,186,231,220,138,152,144,106,251,188,231,218"); // U+91DA
  assertThrows(
    () => {
      ms932Encoder.encode("\u91E0");
    },
    Error,
    "encode-error: U+91E0",
  );
  r = r && ([...ms932Encoder.encode("釡")].join(",") === "231,219"); // U+91E1
  assertThrows(
    () => {
      ms932Encoder.encode("\u91E2");
    },
    Error,
    "encode-error: U+91E2",
  );
  r = r &&
    ([...ms932Encoder.encode("釣釤釥釦釧")].join(",") ===
      "146,222,251,191,251,192,150,116,139,250"); // U+91E3
  assertThrows(
    () => {
      ms932Encoder.encode("\u91E8");
    },
    Error,
    "encode-error: U+91E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91E9");
    },
    Error,
    "encode-error: U+91E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91EA");
    },
    Error,
    "encode-error: U+91EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91EB");
    },
    Error,
    "encode-error: U+91EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91EC");
    },
    Error,
    "encode-error: U+91EC",
  );
  r = r && ([...ms932Encoder.encode("釭釮")].join(",") === "251,189,251,190"); // U+91ED
  assertThrows(
    () => {
      ms932Encoder.encode("\u91EF");
    },
    Error,
    "encode-error: U+91EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91F0");
    },
    Error,
    "encode-error: U+91F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91F1");
    },
    Error,
    "encode-error: U+91F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91F2");
    },
    Error,
    "encode-error: U+91F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91F3");
    },
    Error,
    "encode-error: U+91F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91F4");
    },
    Error,
    "encode-error: U+91F4",
  );
  r = r && ([...ms932Encoder.encode("釵釶")].join(",") === "231,222,231,223"); // U+91F5
  assertThrows(
    () => {
      ms932Encoder.encode("\u91F7");
    },
    Error,
    "encode-error: U+91F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91F8");
    },
    Error,
    "encode-error: U+91F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91F9");
    },
    Error,
    "encode-error: U+91F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91FA");
    },
    Error,
    "encode-error: U+91FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91FB");
    },
    Error,
    "encode-error: U+91FB",
  );
  r = r && ([...ms932Encoder.encode("釼")].join(",") === "231,221"); // U+91FC
  assertThrows(
    () => {
      ms932Encoder.encode("\u91FD");
    },
    Error,
    "encode-error: U+91FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u91FE");
    },
    Error,
    "encode-error: U+91FE",
  );
  r = r && ([...ms932Encoder.encode("釿")].join(",") === "231,225"); // U+91FF
  assertThrows(
    () => {
      ms932Encoder.encode("\u9200");
    },
    Error,
    "encode-error: U+9200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9201");
    },
    Error,
    "encode-error: U+9201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9202");
    },
    Error,
    "encode-error: U+9202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9203");
    },
    Error,
    "encode-error: U+9203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9204");
    },
    Error,
    "encode-error: U+9204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9205");
    },
    Error,
    "encode-error: U+9205",
  );
  r = r && ([...ms932Encoder.encode("鈆")].join(",") === "251,193"); // U+9206
  assertThrows(
    () => {
      ms932Encoder.encode("\u9207");
    },
    Error,
    "encode-error: U+9207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9208");
    },
    Error,
    "encode-error: U+9208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9209");
    },
    Error,
    "encode-error: U+9209",
  );
  r = r && ([...ms932Encoder.encode("鈊")].join(",") === "251,195"); // U+920A
  assertThrows(
    () => {
      ms932Encoder.encode("\u920B");
    },
    Error,
    "encode-error: U+920B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u920C");
    },
    Error,
    "encode-error: U+920C",
  );
  r = r && ([...ms932Encoder.encode("鈍鈎")].join(",") === "147,221,138,98"); // U+920D
  assertThrows(
    () => {
      ms932Encoder.encode("\u920F");
    },
    Error,
    "encode-error: U+920F",
  );
  r = r && ([...ms932Encoder.encode("鈐鈑")].join(",") === "251,194,231,229"); // U+9210
  assertThrows(
    () => {
      ms932Encoder.encode("\u9212");
    },
    Error,
    "encode-error: U+9212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9213");
    },
    Error,
    "encode-error: U+9213",
  );
  r = r && ([...ms932Encoder.encode("鈔鈕")].join(",") === "231,226,231,228"); // U+9214
  assertThrows(
    () => {
      ms932Encoder.encode("\u9216");
    },
    Error,
    "encode-error: U+9216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9217");
    },
    Error,
    "encode-error: U+9217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9218");
    },
    Error,
    "encode-error: U+9218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9219");
    },
    Error,
    "encode-error: U+9219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u921A");
    },
    Error,
    "encode-error: U+921A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u921B");
    },
    Error,
    "encode-error: U+921B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u921C");
    },
    Error,
    "encode-error: U+921C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u921D");
    },
    Error,
    "encode-error: U+921D",
  );
  r = r && ([...ms932Encoder.encode("鈞")].join(",") === "231,224"); // U+921E
  assertThrows(
    () => {
      ms932Encoder.encode("\u921F");
    },
    Error,
    "encode-error: U+921F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9220");
    },
    Error,
    "encode-error: U+9220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9221");
    },
    Error,
    "encode-error: U+9221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9222");
    },
    Error,
    "encode-error: U+9222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9223");
    },
    Error,
    "encode-error: U+9223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9224");
    },
    Error,
    "encode-error: U+9224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9225");
    },
    Error,
    "encode-error: U+9225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9226");
    },
    Error,
    "encode-error: U+9226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9227");
    },
    Error,
    "encode-error: U+9227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9228");
    },
    Error,
    "encode-error: U+9228",
  );
  r = r && ([...ms932Encoder.encode("鈩")].join(",") === "232,110"); // U+9229
  assertThrows(
    () => {
      ms932Encoder.encode("\u922A");
    },
    Error,
    "encode-error: U+922A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u922B");
    },
    Error,
    "encode-error: U+922B",
  );
  r = r && ([...ms932Encoder.encode("鈬")].join(",") === "231,227"); // U+922C
  assertThrows(
    () => {
      ms932Encoder.encode("\u922D");
    },
    Error,
    "encode-error: U+922D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u922E");
    },
    Error,
    "encode-error: U+922E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u922F");
    },
    Error,
    "encode-error: U+922F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9230");
    },
    Error,
    "encode-error: U+9230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9231");
    },
    Error,
    "encode-error: U+9231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9232");
    },
    Error,
    "encode-error: U+9232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9233");
    },
    Error,
    "encode-error: U+9233",
  );
  r = r && ([...ms932Encoder.encode("鈴")].join(",") === "151,233"); // U+9234
  assertThrows(
    () => {
      ms932Encoder.encode("\u9235");
    },
    Error,
    "encode-error: U+9235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9236");
    },
    Error,
    "encode-error: U+9236",
  );
  r = r && ([...ms932Encoder.encode("鈷")].join(",") === "140,216"); // U+9237
  assertThrows(
    () => {
      ms932Encoder.encode("\u9238");
    },
    Error,
    "encode-error: U+9238",
  );
  r = r && ([...ms932Encoder.encode("鈹鈺")].join(",") === "251,202,251,196"); // U+9239
  assertThrows(
    () => {
      ms932Encoder.encode("\u923B");
    },
    Error,
    "encode-error: U+923B",
  );
  r = r && ([...ms932Encoder.encode("鈼")].join(",") === "251,198"); // U+923C
  assertThrows(
    () => {
      ms932Encoder.encode("\u923D");
    },
    Error,
    "encode-error: U+923D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u923E");
    },
    Error,
    "encode-error: U+923E",
  );
  r = r && ([...ms932Encoder.encode("鈿鉀")].join(",") === "231,237,251,197"); // U+923F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9241");
    },
    Error,
    "encode-error: U+9241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9242");
    },
    Error,
    "encode-error: U+9242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9243");
    },
    Error,
    "encode-error: U+9243",
  );
  r = r && ([...ms932Encoder.encode("鉄鉅")].join(",") === "147,83,231,232"); // U+9244
  assertThrows(
    () => {
      ms932Encoder.encode("\u9246");
    },
    Error,
    "encode-error: U+9246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9247");
    },
    Error,
    "encode-error: U+9247",
  );
  r = r && ([...ms932Encoder.encode("鉈鉉")].join(",") === "231,235,231,233"); // U+9248
  assertThrows(
    () => {
      ms932Encoder.encode("\u924A");
    },
    Error,
    "encode-error: U+924A",
  );
  r = r && ([...ms932Encoder.encode("鉋")].join(",") === "231,238"); // U+924B
  assertThrows(
    () => {
      ms932Encoder.encode("\u924C");
    },
    Error,
    "encode-error: U+924C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u924D");
    },
    Error,
    "encode-error: U+924D",
  );
  r = r && ([...ms932Encoder.encode("鉎")].join(",") === "251,199"); // U+924E
  assertThrows(
    () => {
      ms932Encoder.encode("\u924F");
    },
    Error,
    "encode-error: U+924F",
  );
  r = r && ([...ms932Encoder.encode("鉐鉑")].join(",") === "231,239,251,201"); // U+9250
  assertThrows(
    () => {
      ms932Encoder.encode("\u9252");
    },
    Error,
    "encode-error: U+9252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9253");
    },
    Error,
    "encode-error: U+9253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9254");
    },
    Error,
    "encode-error: U+9254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9255");
    },
    Error,
    "encode-error: U+9255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9256");
    },
    Error,
    "encode-error: U+9256",
  );
  r = r && ([...ms932Encoder.encode("鉗")].join(",") === "231,231"); // U+9257
  assertThrows(
    () => {
      ms932Encoder.encode("\u9258");
    },
    Error,
    "encode-error: U+9258",
  );
  r = r &&
    ([...ms932Encoder.encode("鉙鉚鉛")].join(",") ===
      "251,200,231,244,137,148"); // U+9259
  assertThrows(
    () => {
      ms932Encoder.encode("\u925C");
    },
    Error,
    "encode-error: U+925C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u925D");
    },
    Error,
    "encode-error: U+925D",
  );
  r = r && ([...ms932Encoder.encode("鉞")].join(",") === "231,230"); // U+925E
  assertThrows(
    () => {
      ms932Encoder.encode("\u925F");
    },
    Error,
    "encode-error: U+925F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9260");
    },
    Error,
    "encode-error: U+9260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9261");
    },
    Error,
    "encode-error: U+9261",
  );
  r = r && ([...ms932Encoder.encode("鉢")].join(",") === "148,171"); // U+9262
  assertThrows(
    () => {
      ms932Encoder.encode("\u9263");
    },
    Error,
    "encode-error: U+9263",
  );
  r = r && ([...ms932Encoder.encode("鉤")].join(",") === "231,234"); // U+9264
  assertThrows(
    () => {
      ms932Encoder.encode("\u9265");
    },
    Error,
    "encode-error: U+9265",
  );
  r = r && ([...ms932Encoder.encode("鉦鉧")].join(",") === "143,222,251,203"); // U+9266
  assertThrows(
    () => {
      ms932Encoder.encode("\u9268");
    },
    Error,
    "encode-error: U+9268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9269");
    },
    Error,
    "encode-error: U+9269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u926A");
    },
    Error,
    "encode-error: U+926A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u926B");
    },
    Error,
    "encode-error: U+926B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u926C");
    },
    Error,
    "encode-error: U+926C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u926D");
    },
    Error,
    "encode-error: U+926D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u926E");
    },
    Error,
    "encode-error: U+926E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u926F");
    },
    Error,
    "encode-error: U+926F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9270");
    },
    Error,
    "encode-error: U+9270",
  );
  r = r && ([...ms932Encoder.encode("鉱")].join(",") === "141,122"); // U+9271
  assertThrows(
    () => {
      ms932Encoder.encode("\u9272");
    },
    Error,
    "encode-error: U+9272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9273");
    },
    Error,
    "encode-error: U+9273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9274");
    },
    Error,
    "encode-error: U+9274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9275");
    },
    Error,
    "encode-error: U+9275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9276");
    },
    Error,
    "encode-error: U+9276",
  );
  r = r && ([...ms932Encoder.encode("鉷鉸")].join(",") === "251,205,251,206"); // U+9277
  assertThrows(
    () => {
      ms932Encoder.encode("\u9279");
    },
    Error,
    "encode-error: U+9279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u927A");
    },
    Error,
    "encode-error: U+927A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u927B");
    },
    Error,
    "encode-error: U+927B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u927C");
    },
    Error,
    "encode-error: U+927C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u927D");
    },
    Error,
    "encode-error: U+927D",
  );
  r = r && ([...ms932Encoder.encode("鉾")].join(",") === "150,103"); // U+927E
  assertThrows(
    () => {
      ms932Encoder.encode("\u927F");
    },
    Error,
    "encode-error: U+927F",
  );
  r = r && ([...ms932Encoder.encode("銀")].join(",") === "139,226"); // U+9280
  assertThrows(
    () => {
      ms932Encoder.encode("\u9281");
    },
    Error,
    "encode-error: U+9281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9282");
    },
    Error,
    "encode-error: U+9282",
  );
  r = r && ([...ms932Encoder.encode("銃")].join(",") === "143,101"); // U+9283
  assertThrows(
    () => {
      ms932Encoder.encode("\u9284");
    },
    Error,
    "encode-error: U+9284",
  );
  r = r && ([...ms932Encoder.encode("銅")].join(",") === "147,186"); // U+9285
  assertThrows(
    () => {
      ms932Encoder.encode("\u9286");
    },
    Error,
    "encode-error: U+9286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9287");
    },
    Error,
    "encode-error: U+9287",
  );
  r = r && ([...ms932Encoder.encode("銈")].join(",") === "250,95"); // U+9288
  assertThrows(
    () => {
      ms932Encoder.encode("\u9289");
    },
    Error,
    "encode-error: U+9289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u928A");
    },
    Error,
    "encode-error: U+928A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u928B");
    },
    Error,
    "encode-error: U+928B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u928C");
    },
    Error,
    "encode-error: U+928C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u928D");
    },
    Error,
    "encode-error: U+928D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u928E");
    },
    Error,
    "encode-error: U+928E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u928F");
    },
    Error,
    "encode-error: U+928F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9290");
    },
    Error,
    "encode-error: U+9290",
  );
  r = r && ([...ms932Encoder.encode("銑")].join(",") === "145,76"); // U+9291
  assertThrows(
    () => {
      ms932Encoder.encode("\u9292");
    },
    Error,
    "encode-error: U+9292",
  );
  r = r && ([...ms932Encoder.encode("銓")].join(",") === "231,242"); // U+9293
  assertThrows(
    () => {
      ms932Encoder.encode("\u9294");
    },
    Error,
    "encode-error: U+9294",
  );
  r = r && ([...ms932Encoder.encode("銕銖")].join(",") === "231,236,231,241"); // U+9295
  assertThrows(
    () => {
      ms932Encoder.encode("\u9297");
    },
    Error,
    "encode-error: U+9297",
  );
  r = r && ([...ms932Encoder.encode("銘")].join(",") === "150,193"); // U+9298
  assertThrows(
    () => {
      ms932Encoder.encode("\u9299");
    },
    Error,
    "encode-error: U+9299",
  );
  r = r &&
    ([...ms932Encoder.encode("銚銛銜")].join(",") ===
      "146,182,231,243,231,240"); // U+929A
  assertThrows(
    () => {
      ms932Encoder.encode("\u929D");
    },
    Error,
    "encode-error: U+929D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u929E");
    },
    Error,
    "encode-error: U+929E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u929F");
    },
    Error,
    "encode-error: U+929F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92A0");
    },
    Error,
    "encode-error: U+92A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92A1");
    },
    Error,
    "encode-error: U+92A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92A2");
    },
    Error,
    "encode-error: U+92A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92A3");
    },
    Error,
    "encode-error: U+92A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92A4");
    },
    Error,
    "encode-error: U+92A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92A5");
    },
    Error,
    "encode-error: U+92A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92A6");
    },
    Error,
    "encode-error: U+92A6",
  );
  r = r && ([...ms932Encoder.encode("銧")].join(",") === "251,204"); // U+92A7
  assertThrows(
    () => {
      ms932Encoder.encode("\u92A8");
    },
    Error,
    "encode-error: U+92A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92A9");
    },
    Error,
    "encode-error: U+92A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92AA");
    },
    Error,
    "encode-error: U+92AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92AB");
    },
    Error,
    "encode-error: U+92AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92AC");
    },
    Error,
    "encode-error: U+92AC",
  );
  r = r && ([...ms932Encoder.encode("銭")].join(",") === "145,75"); // U+92AD
  assertThrows(
    () => {
      ms932Encoder.encode("\u92AE");
    },
    Error,
    "encode-error: U+92AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92AF");
    },
    Error,
    "encode-error: U+92AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92B0");
    },
    Error,
    "encode-error: U+92B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92B1");
    },
    Error,
    "encode-error: U+92B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92B2");
    },
    Error,
    "encode-error: U+92B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92B3");
    },
    Error,
    "encode-error: U+92B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92B4");
    },
    Error,
    "encode-error: U+92B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92B5");
    },
    Error,
    "encode-error: U+92B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92B6");
    },
    Error,
    "encode-error: U+92B6",
  );
  r = r && ([...ms932Encoder.encode("銷")].join(",") === "231,247"); // U+92B7
  assertThrows(
    () => {
      ms932Encoder.encode("\u92B8");
    },
    Error,
    "encode-error: U+92B8",
  );
  r = r && ([...ms932Encoder.encode("銹")].join(",") === "231,246"); // U+92B9
  assertThrows(
    () => {
      ms932Encoder.encode("\u92BA");
    },
    Error,
    "encode-error: U+92BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92BB");
    },
    Error,
    "encode-error: U+92BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92BC");
    },
    Error,
    "encode-error: U+92BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92BD");
    },
    Error,
    "encode-error: U+92BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92BE");
    },
    Error,
    "encode-error: U+92BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92BF");
    },
    Error,
    "encode-error: U+92BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92C0");
    },
    Error,
    "encode-error: U+92C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92C1");
    },
    Error,
    "encode-error: U+92C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92C2");
    },
    Error,
    "encode-error: U+92C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92C3");
    },
    Error,
    "encode-error: U+92C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92C4");
    },
    Error,
    "encode-error: U+92C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92C5");
    },
    Error,
    "encode-error: U+92C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92C6");
    },
    Error,
    "encode-error: U+92C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92C7");
    },
    Error,
    "encode-error: U+92C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92C8");
    },
    Error,
    "encode-error: U+92C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92C9");
    },
    Error,
    "encode-error: U+92C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92CA");
    },
    Error,
    "encode-error: U+92CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92CB");
    },
    Error,
    "encode-error: U+92CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92CC");
    },
    Error,
    "encode-error: U+92CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92CD");
    },
    Error,
    "encode-error: U+92CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92CE");
    },
    Error,
    "encode-error: U+92CE",
  );
  r = r && ([...ms932Encoder.encode("鋏鋐")].join(",") === "231,245,251,210"); // U+92CF
  assertThrows(
    () => {
      ms932Encoder.encode("\u92D1");
    },
    Error,
    "encode-error: U+92D1",
  );
  r = r && ([...ms932Encoder.encode("鋒鋓")].join(",") === "150,78,251,214"); // U+92D2
  assertThrows(
    () => {
      ms932Encoder.encode("\u92D4");
    },
    Error,
    "encode-error: U+92D4",
  );
  r = r && ([...ms932Encoder.encode("鋕")].join(",") === "251,212"); // U+92D5
  assertThrows(
    () => {
      ms932Encoder.encode("\u92D6");
    },
    Error,
    "encode-error: U+92D6",
  );
  r = r && ([...ms932Encoder.encode("鋗")].join(",") === "251,208"); // U+92D7
  assertThrows(
    () => {
      ms932Encoder.encode("\u92D8");
    },
    Error,
    "encode-error: U+92D8",
  );
  r = r && ([...ms932Encoder.encode("鋙")].join(",") === "251,209"); // U+92D9
  assertThrows(
    () => {
      ms932Encoder.encode("\u92DA");
    },
    Error,
    "encode-error: U+92DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92DB");
    },
    Error,
    "encode-error: U+92DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92DC");
    },
    Error,
    "encode-error: U+92DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92DD");
    },
    Error,
    "encode-error: U+92DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92DE");
    },
    Error,
    "encode-error: U+92DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92DF");
    },
    Error,
    "encode-error: U+92DF",
  );
  r = r && ([...ms932Encoder.encode("鋠")].join(",") === "251,213"); // U+92E0
  assertThrows(
    () => {
      ms932Encoder.encode("\u92E1");
    },
    Error,
    "encode-error: U+92E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92E2");
    },
    Error,
    "encode-error: U+92E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92E3");
    },
    Error,
    "encode-error: U+92E3",
  );
  r = r && ([...ms932Encoder.encode("鋤")].join(",") === "143,155"); // U+92E4
  assertThrows(
    () => {
      ms932Encoder.encode("\u92E5");
    },
    Error,
    "encode-error: U+92E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92E6");
    },
    Error,
    "encode-error: U+92E6",
  );
  r = r && ([...ms932Encoder.encode("鋧")].join(",") === "251,207"); // U+92E7
  assertThrows(
    () => {
      ms932Encoder.encode("\u92E8");
    },
    Error,
    "encode-error: U+92E8",
  );
  r = r && ([...ms932Encoder.encode("鋩鋪")].join(",") === "231,248,149,221"); // U+92E9
  assertThrows(
    () => {
      ms932Encoder.encode("\u92EB");
    },
    Error,
    "encode-error: U+92EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92EC");
    },
    Error,
    "encode-error: U+92EC",
  );
  r = r && ([...ms932Encoder.encode("鋭")].join(",") === "137,115"); // U+92ED
  assertThrows(
    () => {
      ms932Encoder.encode("\u92EE");
    },
    Error,
    "encode-error: U+92EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92EF");
    },
    Error,
    "encode-error: U+92EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92F0");
    },
    Error,
    "encode-error: U+92F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92F1");
    },
    Error,
    "encode-error: U+92F1",
  );
  r = r && ([...ms932Encoder.encode("鋲鋳")].join(",") === "149,101,146,146"); // U+92F2
  assertThrows(
    () => {
      ms932Encoder.encode("\u92F4");
    },
    Error,
    "encode-error: U+92F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92F5");
    },
    Error,
    "encode-error: U+92F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92F6");
    },
    Error,
    "encode-error: U+92F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92F7");
    },
    Error,
    "encode-error: U+92F7",
  );
  r = r &&
    ([...ms932Encoder.encode("鋸鋹鋺鋻鋼")].join(",") ===
      "139,152,250,101,231,250,251,217,141,124"); // U+92F8
  assertThrows(
    () => {
      ms932Encoder.encode("\u92FD");
    },
    Error,
    "encode-error: U+92FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u92FE");
    },
    Error,
    "encode-error: U+92FE",
  );
  r = r && ([...ms932Encoder.encode("鋿")].join(",") === "251,220"); // U+92FF
  assertThrows(
    () => {
      ms932Encoder.encode("\u9300");
    },
    Error,
    "encode-error: U+9300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9301");
    },
    Error,
    "encode-error: U+9301",
  );
  r = r && ([...ms932Encoder.encode("錂")].join(",") === "251,222"); // U+9302
  assertThrows(
    () => {
      ms932Encoder.encode("\u9303");
    },
    Error,
    "encode-error: U+9303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9304");
    },
    Error,
    "encode-error: U+9304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9305");
    },
    Error,
    "encode-error: U+9305",
  );
  r = r && ([...ms932Encoder.encode("錆")].join(",") === "142,75"); // U+9306
  assertThrows(
    () => {
      ms932Encoder.encode("\u9307");
    },
    Error,
    "encode-error: U+9307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9308");
    },
    Error,
    "encode-error: U+9308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9309");
    },
    Error,
    "encode-error: U+9309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u930A");
    },
    Error,
    "encode-error: U+930A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u930B");
    },
    Error,
    "encode-error: U+930B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u930C");
    },
    Error,
    "encode-error: U+930C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u930D");
    },
    Error,
    "encode-error: U+930D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u930E");
    },
    Error,
    "encode-error: U+930E",
  );
  r = r && ([...ms932Encoder.encode("錏錐")].join(",") === "231,249,144,141"); // U+930F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9311");
    },
    Error,
    "encode-error: U+9311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9312");
    },
    Error,
    "encode-error: U+9312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9313");
    },
    Error,
    "encode-error: U+9313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9314");
    },
    Error,
    "encode-error: U+9314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9315");
    },
    Error,
    "encode-error: U+9315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9316");
    },
    Error,
    "encode-error: U+9316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9317");
    },
    Error,
    "encode-error: U+9317",
  );
  r = r &&
    ([...ms932Encoder.encode("錘錙錚")].join(",") === "144,142,232,64,232,66"); // U+9318
  assertThrows(
    () => {
      ms932Encoder.encode("\u931B");
    },
    Error,
    "encode-error: U+931B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u931C");
    },
    Error,
    "encode-error: U+931C",
  );
  r = r && ([...ms932Encoder.encode("錝錞")].join(",") === "251,221,251,219"); // U+931D
  assertThrows(
    () => {
      ms932Encoder.encode("\u931F");
    },
    Error,
    "encode-error: U+931F",
  );
  r = r &&
    ([...ms932Encoder.encode("錠錡錢錣")].join(",") ===
      "143,249,251,216,232,65,232,67"); // U+9320
  assertThrows(
    () => {
      ms932Encoder.encode("\u9324");
    },
    Error,
    "encode-error: U+9324",
  );
  r = r && ([...ms932Encoder.encode("錥錦")].join(",") === "251,215,139,209"); // U+9325
  assertThrows(
    () => {
      ms932Encoder.encode("\u9327");
    },
    Error,
    "encode-error: U+9327",
  );
  r = r && ([...ms932Encoder.encode("錨")].join(",") === "149,100"); // U+9328
  assertThrows(
    () => {
      ms932Encoder.encode("\u9329");
    },
    Error,
    "encode-error: U+9329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u932A");
    },
    Error,
    "encode-error: U+932A",
  );
  r = r && ([...ms932Encoder.encode("錫錬")].join(",") === "142,224,152,66"); // U+932B
  assertThrows(
    () => {
      ms932Encoder.encode("\u932D");
    },
    Error,
    "encode-error: U+932D",
  );
  r = r && ([...ms932Encoder.encode("錮錯")].join(",") === "231,252,141,246"); // U+932E
  assertThrows(
    () => {
      ms932Encoder.encode("\u9330");
    },
    Error,
    "encode-error: U+9330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9331");
    },
    Error,
    "encode-error: U+9331",
  );
  r = r && ([...ms932Encoder.encode("録")].join(",") === "152,94"); // U+9332
  assertThrows(
    () => {
      ms932Encoder.encode("\u9333");
    },
    Error,
    "encode-error: U+9333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9334");
    },
    Error,
    "encode-error: U+9334",
  );
  r = r && ([...ms932Encoder.encode("錵")].join(",") === "232,69"); // U+9335
  assertThrows(
    () => {
      ms932Encoder.encode("\u9336");
    },
    Error,
    "encode-error: U+9336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9337");
    },
    Error,
    "encode-error: U+9337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9338");
    },
    Error,
    "encode-error: U+9338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9339");
    },
    Error,
    "encode-error: U+9339",
  );
  r = r && ([...ms932Encoder.encode("錺錻")].join(",") === "232,68,232,70"); // U+933A
  assertThrows(
    () => {
      ms932Encoder.encode("\u933C");
    },
    Error,
    "encode-error: U+933C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u933D");
    },
    Error,
    "encode-error: U+933D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u933E");
    },
    Error,
    "encode-error: U+933E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u933F");
    },
    Error,
    "encode-error: U+933F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9340");
    },
    Error,
    "encode-error: U+9340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9341");
    },
    Error,
    "encode-error: U+9341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9342");
    },
    Error,
    "encode-error: U+9342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9343");
    },
    Error,
    "encode-error: U+9343",
  );
  r = r && ([...ms932Encoder.encode("鍄")].join(",") === "231,251"); // U+9344
  assertThrows(
    () => {
      ms932Encoder.encode("\u9345");
    },
    Error,
    "encode-error: U+9345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9346");
    },
    Error,
    "encode-error: U+9346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9347");
    },
    Error,
    "encode-error: U+9347",
  );
  r = r && ([...ms932Encoder.encode("鍈")].join(",") === "250,94"); // U+9348
  assertThrows(
    () => {
      ms932Encoder.encode("\u9349");
    },
    Error,
    "encode-error: U+9349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u934A");
    },
    Error,
    "encode-error: U+934A",
  );
  r = r && ([...ms932Encoder.encode("鍋")].join(",") === "147,231"); // U+934B
  assertThrows(
    () => {
      ms932Encoder.encode("\u934C");
    },
    Error,
    "encode-error: U+934C",
  );
  r = r && ([...ms932Encoder.encode("鍍")].join(",") === "147,116"); // U+934D
  assertThrows(
    () => {
      ms932Encoder.encode("\u934E");
    },
    Error,
    "encode-error: U+934E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u934F");
    },
    Error,
    "encode-error: U+934F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9350");
    },
    Error,
    "encode-error: U+9350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9351");
    },
    Error,
    "encode-error: U+9351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9352");
    },
    Error,
    "encode-error: U+9352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9353");
    },
    Error,
    "encode-error: U+9353",
  );
  r = r && ([...ms932Encoder.encode("鍔")].join(",") === "146,213"); // U+9354
  assertThrows(
    () => {
      ms932Encoder.encode("\u9355");
    },
    Error,
    "encode-error: U+9355",
  );
  r = r && ([...ms932Encoder.encode("鍖鍗")].join(",") === "232,75,251,224"); // U+9356
  assertThrows(
    () => {
      ms932Encoder.encode("\u9358");
    },
    Error,
    "encode-error: U+9358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9359");
    },
    Error,
    "encode-error: U+9359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u935A");
    },
    Error,
    "encode-error: U+935A",
  );
  r = r && ([...ms932Encoder.encode("鍛鍜")].join(",") === "146,98,232,71"); // U+935B
  assertThrows(
    () => {
      ms932Encoder.encode("\u935D");
    },
    Error,
    "encode-error: U+935D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u935E");
    },
    Error,
    "encode-error: U+935E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u935F");
    },
    Error,
    "encode-error: U+935F",
  );
  r = r && ([...ms932Encoder.encode("鍠")].join(",") === "232,72"); // U+9360
  assertThrows(
    () => {
      ms932Encoder.encode("\u9361");
    },
    Error,
    "encode-error: U+9361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9362");
    },
    Error,
    "encode-error: U+9362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9363");
    },
    Error,
    "encode-error: U+9363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9364");
    },
    Error,
    "encode-error: U+9364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9365");
    },
    Error,
    "encode-error: U+9365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9366");
    },
    Error,
    "encode-error: U+9366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9367");
    },
    Error,
    "encode-error: U+9367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9368");
    },
    Error,
    "encode-error: U+9368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9369");
    },
    Error,
    "encode-error: U+9369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u936A");
    },
    Error,
    "encode-error: U+936A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u936B");
    },
    Error,
    "encode-error: U+936B",
  );
  r = r && ([...ms932Encoder.encode("鍬")].join(",") === "140,76"); // U+936C
  assertThrows(
    () => {
      ms932Encoder.encode("\u936D");
    },
    Error,
    "encode-error: U+936D",
  );
  r = r && ([...ms932Encoder.encode("鍮")].join(",") === "232,74"); // U+936E
  assertThrows(
    () => {
      ms932Encoder.encode("\u936F");
    },
    Error,
    "encode-error: U+936F",
  );
  r = r && ([...ms932Encoder.encode("鍰")].join(",") === "251,223"); // U+9370
  assertThrows(
    () => {
      ms932Encoder.encode("\u9371");
    },
    Error,
    "encode-error: U+9371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9372");
    },
    Error,
    "encode-error: U+9372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9373");
    },
    Error,
    "encode-error: U+9373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9374");
    },
    Error,
    "encode-error: U+9374",
  );
  r = r && ([...ms932Encoder.encode("鍵")].join(",") === "140,174"); // U+9375
  assertThrows(
    () => {
      ms932Encoder.encode("\u9376");
    },
    Error,
    "encode-error: U+9376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9377");
    },
    Error,
    "encode-error: U+9377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9378");
    },
    Error,
    "encode-error: U+9378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9379");
    },
    Error,
    "encode-error: U+9379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u937A");
    },
    Error,
    "encode-error: U+937A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u937B");
    },
    Error,
    "encode-error: U+937B",
  );
  r = r && ([...ms932Encoder.encode("鍼")].join(",") === "232,73"); // U+937C
  assertThrows(
    () => {
      ms932Encoder.encode("\u937D");
    },
    Error,
    "encode-error: U+937D",
  );
  r = r && ([...ms932Encoder.encode("鍾")].join(",") === "143,223"); // U+937E
  assertThrows(
    () => {
      ms932Encoder.encode("\u937F");
    },
    Error,
    "encode-error: U+937F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9380");
    },
    Error,
    "encode-error: U+9380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9381");
    },
    Error,
    "encode-error: U+9381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9382");
    },
    Error,
    "encode-error: U+9382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9383");
    },
    Error,
    "encode-error: U+9383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9384");
    },
    Error,
    "encode-error: U+9384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9385");
    },
    Error,
    "encode-error: U+9385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9386");
    },
    Error,
    "encode-error: U+9386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9387");
    },
    Error,
    "encode-error: U+9387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9388");
    },
    Error,
    "encode-error: U+9388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9389");
    },
    Error,
    "encode-error: U+9389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u938A");
    },
    Error,
    "encode-error: U+938A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u938B");
    },
    Error,
    "encode-error: U+938B",
  );
  r = r && ([...ms932Encoder.encode("鎌")].join(",") === "138,153"); // U+938C
  assertThrows(
    () => {
      ms932Encoder.encode("\u938D");
    },
    Error,
    "encode-error: U+938D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u938E");
    },
    Error,
    "encode-error: U+938E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u938F");
    },
    Error,
    "encode-error: U+938F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9390");
    },
    Error,
    "encode-error: U+9390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9391");
    },
    Error,
    "encode-error: U+9391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9392");
    },
    Error,
    "encode-error: U+9392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9393");
    },
    Error,
    "encode-error: U+9393",
  );
  r = r && ([...ms932Encoder.encode("鎔")].join(",") === "232,79"); // U+9394
  assertThrows(
    () => {
      ms932Encoder.encode("\u9395");
    },
    Error,
    "encode-error: U+9395",
  );
  r = r && ([...ms932Encoder.encode("鎖鎗")].join(",") === "141,189,145,153"); // U+9396
  assertThrows(
    () => {
      ms932Encoder.encode("\u9398");
    },
    Error,
    "encode-error: U+9398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9399");
    },
    Error,
    "encode-error: U+9399",
  );
  r = r && ([...ms932Encoder.encode("鎚")].join(",") === "146,200"); // U+939A
  assertThrows(
    () => {
      ms932Encoder.encode("\u939B");
    },
    Error,
    "encode-error: U+939B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u939C");
    },
    Error,
    "encode-error: U+939C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u939D");
    },
    Error,
    "encode-error: U+939D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u939E");
    },
    Error,
    "encode-error: U+939E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u939F");
    },
    Error,
    "encode-error: U+939F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93A0");
    },
    Error,
    "encode-error: U+93A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93A1");
    },
    Error,
    "encode-error: U+93A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93A2");
    },
    Error,
    "encode-error: U+93A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93A3");
    },
    Error,
    "encode-error: U+93A3",
  );
  r = r && ([...ms932Encoder.encode("鎤")].join(",") === "251,225"); // U+93A4
  assertThrows(
    () => {
      ms932Encoder.encode("\u93A5");
    },
    Error,
    "encode-error: U+93A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93A6");
    },
    Error,
    "encode-error: U+93A6",
  );
  r = r && ([...ms932Encoder.encode("鎧")].join(",") === "138,90"); // U+93A7
  assertThrows(
    () => {
      ms932Encoder.encode("\u93A8");
    },
    Error,
    "encode-error: U+93A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93A9");
    },
    Error,
    "encode-error: U+93A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93AA");
    },
    Error,
    "encode-error: U+93AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93AB");
    },
    Error,
    "encode-error: U+93AB",
  );
  r = r &&
    ([...ms932Encoder.encode("鎬鎭鎮")].join(",") === "232,77,232,78,146,193"); // U+93AC
  assertThrows(
    () => {
      ms932Encoder.encode("\u93AF");
    },
    Error,
    "encode-error: U+93AF",
  );
  r = r && ([...ms932Encoder.encode("鎰")].join(",") === "232,76"); // U+93B0
  assertThrows(
    () => {
      ms932Encoder.encode("\u93B1");
    },
    Error,
    "encode-error: U+93B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93B2");
    },
    Error,
    "encode-error: U+93B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93B3");
    },
    Error,
    "encode-error: U+93B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93B4");
    },
    Error,
    "encode-error: U+93B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93B5");
    },
    Error,
    "encode-error: U+93B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93B6");
    },
    Error,
    "encode-error: U+93B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93B7");
    },
    Error,
    "encode-error: U+93B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93B8");
    },
    Error,
    "encode-error: U+93B8",
  );
  r = r && ([...ms932Encoder.encode("鎹")].join(",") === "232,80"); // U+93B9
  assertThrows(
    () => {
      ms932Encoder.encode("\u93BA");
    },
    Error,
    "encode-error: U+93BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93BB");
    },
    Error,
    "encode-error: U+93BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93BC");
    },
    Error,
    "encode-error: U+93BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93BD");
    },
    Error,
    "encode-error: U+93BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93BE");
    },
    Error,
    "encode-error: U+93BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93BF");
    },
    Error,
    "encode-error: U+93BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93C0");
    },
    Error,
    "encode-error: U+93C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93C1");
    },
    Error,
    "encode-error: U+93C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93C2");
    },
    Error,
    "encode-error: U+93C2",
  );
  r = r && ([...ms932Encoder.encode("鏃")].join(",") === "232,86"); // U+93C3
  assertThrows(
    () => {
      ms932Encoder.encode("\u93C4");
    },
    Error,
    "encode-error: U+93C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93C5");
    },
    Error,
    "encode-error: U+93C5",
  );
  r = r && ([...ms932Encoder.encode("鏆")].join(",") === "251,226"); // U+93C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u93C7");
    },
    Error,
    "encode-error: U+93C7",
  );
  r = r && ([...ms932Encoder.encode("鏈")].join(",") === "232,89"); // U+93C8
  assertThrows(
    () => {
      ms932Encoder.encode("\u93C9");
    },
    Error,
    "encode-error: U+93C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93CA");
    },
    Error,
    "encode-error: U+93CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93CB");
    },
    Error,
    "encode-error: U+93CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93CC");
    },
    Error,
    "encode-error: U+93CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93CD");
    },
    Error,
    "encode-error: U+93CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93CE");
    },
    Error,
    "encode-error: U+93CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93CF");
    },
    Error,
    "encode-error: U+93CF",
  );
  r = r && ([...ms932Encoder.encode("鏐鏑")].join(",") === "232,88,147,76"); // U+93D0
  assertThrows(
    () => {
      ms932Encoder.encode("\u93D2");
    },
    Error,
    "encode-error: U+93D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93D3");
    },
    Error,
    "encode-error: U+93D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93D4");
    },
    Error,
    "encode-error: U+93D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93D5");
    },
    Error,
    "encode-error: U+93D5",
  );
  r = r &&
    ([...ms932Encoder.encode("鏖鏗鏘")].join(",") === "232,81,232,82,232,85"); // U+93D6
  assertThrows(
    () => {
      ms932Encoder.encode("\u93D9");
    },
    Error,
    "encode-error: U+93D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93DA");
    },
    Error,
    "encode-error: U+93DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93DB");
    },
    Error,
    "encode-error: U+93DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93DC");
    },
    Error,
    "encode-error: U+93DC",
  );
  r = r && ([...ms932Encoder.encode("鏝鏞")].join(",") === "232,87,251,227"); // U+93DD
  assertThrows(
    () => {
      ms932Encoder.encode("\u93DF");
    },
    Error,
    "encode-error: U+93DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93E0");
    },
    Error,
    "encode-error: U+93E0",
  );
  r = r && ([...ms932Encoder.encode("鏡")].join(",") === "139,190"); // U+93E1
  assertThrows(
    () => {
      ms932Encoder.encode("\u93E2");
    },
    Error,
    "encode-error: U+93E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93E3");
    },
    Error,
    "encode-error: U+93E3",
  );
  r = r && ([...ms932Encoder.encode("鏤鏥")].join(",") === "232,90,232,84"); // U+93E4
  assertThrows(
    () => {
      ms932Encoder.encode("\u93E6");
    },
    Error,
    "encode-error: U+93E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93E7");
    },
    Error,
    "encode-error: U+93E7",
  );
  r = r && ([...ms932Encoder.encode("鏨")].join(",") === "232,83"); // U+93E8
  assertThrows(
    () => {
      ms932Encoder.encode("\u93E9");
    },
    Error,
    "encode-error: U+93E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93EA");
    },
    Error,
    "encode-error: U+93EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93EB");
    },
    Error,
    "encode-error: U+93EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93EC");
    },
    Error,
    "encode-error: U+93EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93ED");
    },
    Error,
    "encode-error: U+93ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93EE");
    },
    Error,
    "encode-error: U+93EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93EF");
    },
    Error,
    "encode-error: U+93EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93F0");
    },
    Error,
    "encode-error: U+93F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93F1");
    },
    Error,
    "encode-error: U+93F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93F2");
    },
    Error,
    "encode-error: U+93F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93F3");
    },
    Error,
    "encode-error: U+93F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93F4");
    },
    Error,
    "encode-error: U+93F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93F5");
    },
    Error,
    "encode-error: U+93F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93F6");
    },
    Error,
    "encode-error: U+93F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93F7");
    },
    Error,
    "encode-error: U+93F7",
  );
  r = r && ([...ms932Encoder.encode("鏸")].join(",") === "251,228"); // U+93F8
  assertThrows(
    () => {
      ms932Encoder.encode("\u93F9");
    },
    Error,
    "encode-error: U+93F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93FA");
    },
    Error,
    "encode-error: U+93FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93FB");
    },
    Error,
    "encode-error: U+93FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93FC");
    },
    Error,
    "encode-error: U+93FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93FD");
    },
    Error,
    "encode-error: U+93FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93FE");
    },
    Error,
    "encode-error: U+93FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u93FF");
    },
    Error,
    "encode-error: U+93FF",
  );

  assertStrictEquals(r, true);
});
