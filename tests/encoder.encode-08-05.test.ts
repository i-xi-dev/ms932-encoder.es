import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+7400-U+77FF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u7400");
    },
    Error,
    "encode-error: U+7400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7401");
    },
    Error,
    "encode-error: U+7401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7402");
    },
    Error,
    "encode-error: U+7402",
  );
  r = r && ([...ms932Encoder.encode("球")].join(",") === "139,133"); // U+7403
  assertThrows(
    () => {
      ms932Encoder.encode("\u7404");
    },
    Error,
    "encode-error: U+7404",
  );
  r = r &&
    ([...ms932Encoder.encode("琅理琇")].join(",") ===
      "224,228,151,157,251,101"); // U+7405
  assertThrows(
    () => {
      ms932Encoder.encode("\u7408");
    },
    Error,
    "encode-error: U+7408",
  );
  r = r && ([...ms932Encoder.encode("琉")].join(",") === "151,174"); // U+7409
  assertThrows(
    () => {
      ms932Encoder.encode("\u740A");
    },
    Error,
    "encode-error: U+740A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u740B");
    },
    Error,
    "encode-error: U+740B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u740C");
    },
    Error,
    "encode-error: U+740C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u740D");
    },
    Error,
    "encode-error: U+740D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u740E");
    },
    Error,
    "encode-error: U+740E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u740F");
    },
    Error,
    "encode-error: U+740F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7410");
    },
    Error,
    "encode-error: U+7410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7411");
    },
    Error,
    "encode-error: U+7411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7412");
    },
    Error,
    "encode-error: U+7412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7413");
    },
    Error,
    "encode-error: U+7413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7414");
    },
    Error,
    "encode-error: U+7414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7415");
    },
    Error,
    "encode-error: U+7415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7416");
    },
    Error,
    "encode-error: U+7416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7417");
    },
    Error,
    "encode-error: U+7417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7418");
    },
    Error,
    "encode-error: U+7418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7419");
    },
    Error,
    "encode-error: U+7419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u741A");
    },
    Error,
    "encode-error: U+741A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u741B");
    },
    Error,
    "encode-error: U+741B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u741C");
    },
    Error,
    "encode-error: U+741C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u741D");
    },
    Error,
    "encode-error: U+741D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u741E");
    },
    Error,
    "encode-error: U+741E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u741F");
    },
    Error,
    "encode-error: U+741F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7420");
    },
    Error,
    "encode-error: U+7420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7421");
    },
    Error,
    "encode-error: U+7421",
  );
  r = r && ([...ms932Encoder.encode("琢")].join(",") === "145,244"); // U+7422
  assertThrows(
    () => {
      ms932Encoder.encode("\u7423");
    },
    Error,
    "encode-error: U+7423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7424");
    },
    Error,
    "encode-error: U+7424",
  );
  r = r && ([...ms932Encoder.encode("琥琦")].join(",") === "224,230,251,103"); // U+7425
  assertThrows(
    () => {
      ms932Encoder.encode("\u7427");
    },
    Error,
    "encode-error: U+7427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7428");
    },
    Error,
    "encode-error: U+7428",
  );
  r = r && ([...ms932Encoder.encode("琩琪")].join(",") === "251,105,251,104"); // U+7429
  assertThrows(
    () => {
      ms932Encoder.encode("\u742B");
    },
    Error,
    "encode-error: U+742B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u742C");
    },
    Error,
    "encode-error: U+742C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u742D");
    },
    Error,
    "encode-error: U+742D",
  );
  r = r && ([...ms932Encoder.encode("琮")].join(",") === "251,106"); // U+742E
  assertThrows(
    () => {
      ms932Encoder.encode("\u742F");
    },
    Error,
    "encode-error: U+742F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7430");
    },
    Error,
    "encode-error: U+7430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7431");
    },
    Error,
    "encode-error: U+7431",
  );
  r = r &&
    ([...ms932Encoder.encode("琲琳琴琵琶")].join(",") ===
      "224,232,151,212,139,213,148,250,148,105"); // U+7432
  assertThrows(
    () => {
      ms932Encoder.encode("\u7437");
    },
    Error,
    "encode-error: U+7437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7438");
    },
    Error,
    "encode-error: U+7438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7439");
    },
    Error,
    "encode-error: U+7439",
  );
  r = r && ([...ms932Encoder.encode("琺")].join(",") === "224,233"); // U+743A
  assertThrows(
    () => {
      ms932Encoder.encode("\u743B");
    },
    Error,
    "encode-error: U+743B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u743C");
    },
    Error,
    "encode-error: U+743C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u743D");
    },
    Error,
    "encode-error: U+743D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u743E");
    },
    Error,
    "encode-error: U+743E",
  );
  r = r && ([...ms932Encoder.encode("琿")].join(",") === "224,235"); // U+743F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7440");
    },
    Error,
    "encode-error: U+7440",
  );
  r = r && ([...ms932Encoder.encode("瑁")].join(",") === "224,238"); // U+7441
  assertThrows(
    () => {
      ms932Encoder.encode("\u7442");
    },
    Error,
    "encode-error: U+7442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7443");
    },
    Error,
    "encode-error: U+7443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7444");
    },
    Error,
    "encode-error: U+7444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7445");
    },
    Error,
    "encode-error: U+7445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7446");
    },
    Error,
    "encode-error: U+7446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7447");
    },
    Error,
    "encode-error: U+7447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7448");
    },
    Error,
    "encode-error: U+7448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7449");
    },
    Error,
    "encode-error: U+7449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u744A");
    },
    Error,
    "encode-error: U+744A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u744B");
    },
    Error,
    "encode-error: U+744B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u744C");
    },
    Error,
    "encode-error: U+744C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u744D");
    },
    Error,
    "encode-error: U+744D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u744E");
    },
    Error,
    "encode-error: U+744E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u744F");
    },
    Error,
    "encode-error: U+744F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7450");
    },
    Error,
    "encode-error: U+7450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7451");
    },
    Error,
    "encode-error: U+7451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7452");
    },
    Error,
    "encode-error: U+7452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7453");
    },
    Error,
    "encode-error: U+7453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7454");
    },
    Error,
    "encode-error: U+7454",
  );
  r = r && ([...ms932Encoder.encode("瑕")].join(",") === "224,234"); // U+7455
  assertThrows(
    () => {
      ms932Encoder.encode("\u7456");
    },
    Error,
    "encode-error: U+7456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7457");
    },
    Error,
    "encode-error: U+7457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7458");
    },
    Error,
    "encode-error: U+7458",
  );
  r = r &&
    ([...ms932Encoder.encode("瑙瑚瑛瑜")].join(",") ===
      "224,237,140,232,137,108,224,239"); // U+7459
  assertThrows(
    () => {
      ms932Encoder.encode("\u745D");
    },
    Error,
    "encode-error: U+745D",
  );
  r = r &&
    ([...ms932Encoder.encode("瑞瑟瑠")].join(",") ===
      "144,144,224,236,151,218"); // U+745E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7461");
    },
    Error,
    "encode-error: U+7461",
  );
  r = r &&
    ([...ms932Encoder.encode("瑢瑣瑤")].join(",") ===
      "251,107,224,242,234,162"); // U+7462
  assertThrows(
    () => {
      ms932Encoder.encode("\u7465");
    },
    Error,
    "encode-error: U+7465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7466");
    },
    Error,
    "encode-error: U+7466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7467");
    },
    Error,
    "encode-error: U+7467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7468");
    },
    Error,
    "encode-error: U+7468",
  );
  r = r && ([...ms932Encoder.encode("瑩瑪")].join(",") === "224,240,224,243"); // U+7469
  assertThrows(
    () => {
      ms932Encoder.encode("\u746B");
    },
    Error,
    "encode-error: U+746B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u746C");
    },
    Error,
    "encode-error: U+746C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u746D");
    },
    Error,
    "encode-error: U+746D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u746E");
    },
    Error,
    "encode-error: U+746E",
  );
  r = r && ([...ms932Encoder.encode("瑯瑰")].join(",") === "224,229,224,241"); // U+746F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7471");
    },
    Error,
    "encode-error: U+7471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7472");
    },
    Error,
    "encode-error: U+7472",
  );
  r = r && ([...ms932Encoder.encode("瑳")].join(",") === "141,186"); // U+7473
  assertThrows(
    () => {
      ms932Encoder.encode("\u7474");
    },
    Error,
    "encode-error: U+7474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7475");
    },
    Error,
    "encode-error: U+7475",
  );
  r = r && ([...ms932Encoder.encode("瑶")].join(",") === "224,244"); // U+7476
  assertThrows(
    () => {
      ms932Encoder.encode("\u7477");
    },
    Error,
    "encode-error: U+7477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7478");
    },
    Error,
    "encode-error: U+7478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7479");
    },
    Error,
    "encode-error: U+7479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u747A");
    },
    Error,
    "encode-error: U+747A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u747B");
    },
    Error,
    "encode-error: U+747B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u747C");
    },
    Error,
    "encode-error: U+747C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u747D");
    },
    Error,
    "encode-error: U+747D",
  );
  r = r && ([...ms932Encoder.encode("瑾")].join(",") === "224,245"); // U+747E
  assertThrows(
    () => {
      ms932Encoder.encode("\u747F");
    },
    Error,
    "encode-error: U+747F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7480");
    },
    Error,
    "encode-error: U+7480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7481");
    },
    Error,
    "encode-error: U+7481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7482");
    },
    Error,
    "encode-error: U+7482",
  );
  r = r && ([...ms932Encoder.encode("璃")].join(",") === "151,158"); // U+7483
  assertThrows(
    () => {
      ms932Encoder.encode("\u7484");
    },
    Error,
    "encode-error: U+7484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7485");
    },
    Error,
    "encode-error: U+7485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7486");
    },
    Error,
    "encode-error: U+7486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7487");
    },
    Error,
    "encode-error: U+7487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7488");
    },
    Error,
    "encode-error: U+7488",
  );
  r = r && ([...ms932Encoder.encode("璉")].join(",") === "251,108"); // U+7489
  assertThrows(
    () => {
      ms932Encoder.encode("\u748A");
    },
    Error,
    "encode-error: U+748A",
  );
  r = r && ([...ms932Encoder.encode("璋")].join(",") === "224,246"); // U+748B
  assertThrows(
    () => {
      ms932Encoder.encode("\u748C");
    },
    Error,
    "encode-error: U+748C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u748D");
    },
    Error,
    "encode-error: U+748D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u748E");
    },
    Error,
    "encode-error: U+748E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u748F");
    },
    Error,
    "encode-error: U+748F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7490");
    },
    Error,
    "encode-error: U+7490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7491");
    },
    Error,
    "encode-error: U+7491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7492");
    },
    Error,
    "encode-error: U+7492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7493");
    },
    Error,
    "encode-error: U+7493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7494");
    },
    Error,
    "encode-error: U+7494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7495");
    },
    Error,
    "encode-error: U+7495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7496");
    },
    Error,
    "encode-error: U+7496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7497");
    },
    Error,
    "encode-error: U+7497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7498");
    },
    Error,
    "encode-error: U+7498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7499");
    },
    Error,
    "encode-error: U+7499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u749A");
    },
    Error,
    "encode-error: U+749A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u749B");
    },
    Error,
    "encode-error: U+749B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u749C");
    },
    Error,
    "encode-error: U+749C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u749D");
    },
    Error,
    "encode-error: U+749D",
  );
  r = r && ([...ms932Encoder.encode("璞璟")].join(",") === "224,247,251,109"); // U+749E
  assertThrows(
    () => {
      ms932Encoder.encode("\u74A0");
    },
    Error,
    "encode-error: U+74A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74A1");
    },
    Error,
    "encode-error: U+74A1",
  );
  r = r && ([...ms932Encoder.encode("璢")].join(",") === "224,227"); // U+74A2
  assertThrows(
    () => {
      ms932Encoder.encode("\u74A3");
    },
    Error,
    "encode-error: U+74A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74A4");
    },
    Error,
    "encode-error: U+74A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74A5");
    },
    Error,
    "encode-error: U+74A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74A6");
    },
    Error,
    "encode-error: U+74A6",
  );
  r = r && ([...ms932Encoder.encode("璧")].join(",") === "224,248"); // U+74A7
  assertThrows(
    () => {
      ms932Encoder.encode("\u74A8");
    },
    Error,
    "encode-error: U+74A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74A9");
    },
    Error,
    "encode-error: U+74A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74AA");
    },
    Error,
    "encode-error: U+74AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74AB");
    },
    Error,
    "encode-error: U+74AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74AC");
    },
    Error,
    "encode-error: U+74AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74AD");
    },
    Error,
    "encode-error: U+74AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74AE");
    },
    Error,
    "encode-error: U+74AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74AF");
    },
    Error,
    "encode-error: U+74AF",
  );
  r = r && ([...ms932Encoder.encode("環")].join(",") === "138,194"); // U+74B0
  assertThrows(
    () => {
      ms932Encoder.encode("\u74B1");
    },
    Error,
    "encode-error: U+74B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74B2");
    },
    Error,
    "encode-error: U+74B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74B3");
    },
    Error,
    "encode-error: U+74B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74B4");
    },
    Error,
    "encode-error: U+74B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74B5");
    },
    Error,
    "encode-error: U+74B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74B6");
    },
    Error,
    "encode-error: U+74B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74B7");
    },
    Error,
    "encode-error: U+74B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74B8");
    },
    Error,
    "encode-error: U+74B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74B9");
    },
    Error,
    "encode-error: U+74B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74BA");
    },
    Error,
    "encode-error: U+74BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74BB");
    },
    Error,
    "encode-error: U+74BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74BC");
    },
    Error,
    "encode-error: U+74BC",
  );
  r = r && ([...ms932Encoder.encode("璽")].join(",") === "142,163"); // U+74BD
  assertThrows(
    () => {
      ms932Encoder.encode("\u74BE");
    },
    Error,
    "encode-error: U+74BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74BF");
    },
    Error,
    "encode-error: U+74BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74C0");
    },
    Error,
    "encode-error: U+74C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74C1");
    },
    Error,
    "encode-error: U+74C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74C2");
    },
    Error,
    "encode-error: U+74C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74C3");
    },
    Error,
    "encode-error: U+74C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74C4");
    },
    Error,
    "encode-error: U+74C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74C5");
    },
    Error,
    "encode-error: U+74C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74C6");
    },
    Error,
    "encode-error: U+74C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74C7");
    },
    Error,
    "encode-error: U+74C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74C8");
    },
    Error,
    "encode-error: U+74C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74C9");
    },
    Error,
    "encode-error: U+74C9",
  );
  r = r && ([...ms932Encoder.encode("瓊")].join(",") === "224,249"); // U+74CA
  assertThrows(
    () => {
      ms932Encoder.encode("\u74CB");
    },
    Error,
    "encode-error: U+74CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74CC");
    },
    Error,
    "encode-error: U+74CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74CD");
    },
    Error,
    "encode-error: U+74CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74CE");
    },
    Error,
    "encode-error: U+74CE",
  );
  r = r && ([...ms932Encoder.encode("瓏")].join(",") === "224,250"); // U+74CF
  assertThrows(
    () => {
      ms932Encoder.encode("\u74D0");
    },
    Error,
    "encode-error: U+74D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74D1");
    },
    Error,
    "encode-error: U+74D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74D2");
    },
    Error,
    "encode-error: U+74D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74D3");
    },
    Error,
    "encode-error: U+74D3",
  );
  r = r && ([...ms932Encoder.encode("瓔")].join(",") === "224,251"); // U+74D4
  assertThrows(
    () => {
      ms932Encoder.encode("\u74D5");
    },
    Error,
    "encode-error: U+74D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74D6");
    },
    Error,
    "encode-error: U+74D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74D7");
    },
    Error,
    "encode-error: U+74D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74D8");
    },
    Error,
    "encode-error: U+74D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74D9");
    },
    Error,
    "encode-error: U+74D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74DA");
    },
    Error,
    "encode-error: U+74DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74DB");
    },
    Error,
    "encode-error: U+74DB",
  );
  r = r && ([...ms932Encoder.encode("瓜")].join(",") === "137,90"); // U+74DC
  assertThrows(
    () => {
      ms932Encoder.encode("\u74DD");
    },
    Error,
    "encode-error: U+74DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74DE");
    },
    Error,
    "encode-error: U+74DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74DF");
    },
    Error,
    "encode-error: U+74DF",
  );
  r = r && ([...ms932Encoder.encode("瓠")].join(",") === "225,64"); // U+74E0
  assertThrows(
    () => {
      ms932Encoder.encode("\u74E1");
    },
    Error,
    "encode-error: U+74E1",
  );
  r = r && ([...ms932Encoder.encode("瓢瓣")].join(",") === "149,90,225,65"); // U+74E2
  assertThrows(
    () => {
      ms932Encoder.encode("\u74E4");
    },
    Error,
    "encode-error: U+74E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74E5");
    },
    Error,
    "encode-error: U+74E5",
  );
  r = r && ([...ms932Encoder.encode("瓦瓧")].join(",") === "138,162,225,66"); // U+74E6
  assertThrows(
    () => {
      ms932Encoder.encode("\u74E8");
    },
    Error,
    "encode-error: U+74E8",
  );
  r = r && ([...ms932Encoder.encode("瓩")].join(",") === "225,67"); // U+74E9
  assertThrows(
    () => {
      ms932Encoder.encode("\u74EA");
    },
    Error,
    "encode-error: U+74EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74EB");
    },
    Error,
    "encode-error: U+74EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74EC");
    },
    Error,
    "encode-error: U+74EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74ED");
    },
    Error,
    "encode-error: U+74ED",
  );
  r = r && ([...ms932Encoder.encode("瓮")].join(",") === "225,68"); // U+74EE
  assertThrows(
    () => {
      ms932Encoder.encode("\u74EF");
    },
    Error,
    "encode-error: U+74EF",
  );
  r = r &&
    ([...ms932Encoder.encode("瓰瓱瓲")].join(",") === "225,70,225,71,225,69"); // U+74F0
  assertThrows(
    () => {
      ms932Encoder.encode("\u74F3");
    },
    Error,
    "encode-error: U+74F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74F4");
    },
    Error,
    "encode-error: U+74F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74F5");
    },
    Error,
    "encode-error: U+74F5",
  );
  r = r &&
    ([...ms932Encoder.encode("瓶瓷瓸")].join(",") === "149,114,225,73,225,72"); // U+74F6
  assertThrows(
    () => {
      ms932Encoder.encode("\u74F9");
    },
    Error,
    "encode-error: U+74F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74FA");
    },
    Error,
    "encode-error: U+74FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74FB");
    },
    Error,
    "encode-error: U+74FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74FC");
    },
    Error,
    "encode-error: U+74FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74FD");
    },
    Error,
    "encode-error: U+74FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74FE");
    },
    Error,
    "encode-error: U+74FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u74FF");
    },
    Error,
    "encode-error: U+74FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7500");
    },
    Error,
    "encode-error: U+7500",
  );
  r = r && ([...ms932Encoder.encode("甁")].join(",") === "251,110"); // U+7501
  assertThrows(
    () => {
      ms932Encoder.encode("\u7502");
    },
    Error,
    "encode-error: U+7502",
  );
  r = r &&
    ([...ms932Encoder.encode("甃甄甅")].join(",") === "225,75,225,74,225,76"); // U+7503
  assertThrows(
    () => {
      ms932Encoder.encode("\u7506");
    },
    Error,
    "encode-error: U+7506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7507");
    },
    Error,
    "encode-error: U+7507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7508");
    },
    Error,
    "encode-error: U+7508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7509");
    },
    Error,
    "encode-error: U+7509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u750A");
    },
    Error,
    "encode-error: U+750A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u750B");
    },
    Error,
    "encode-error: U+750B",
  );
  r = r &&
    ([...ms932Encoder.encode("甌甍甎")].join(",") === "225,77,225,79,225,78"); // U+750C
  assertThrows(
    () => {
      ms932Encoder.encode("\u750F");
    },
    Error,
    "encode-error: U+750F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7510");
    },
    Error,
    "encode-error: U+7510",
  );
  r = r && ([...ms932Encoder.encode("甑")].join(",") === "141,153"); // U+7511
  assertThrows(
    () => {
      ms932Encoder.encode("\u7512");
    },
    Error,
    "encode-error: U+7512",
  );
  r = r && ([...ms932Encoder.encode("甓")].join(",") === "225,81"); // U+7513
  assertThrows(
    () => {
      ms932Encoder.encode("\u7514");
    },
    Error,
    "encode-error: U+7514",
  );
  r = r && ([...ms932Encoder.encode("甕")].join(",") === "225,80"); // U+7515
  assertThrows(
    () => {
      ms932Encoder.encode("\u7516");
    },
    Error,
    "encode-error: U+7516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7517");
    },
    Error,
    "encode-error: U+7517",
  );
  r = r && ([...ms932Encoder.encode("甘")].join(",") === "138,195"); // U+7518
  assertThrows(
    () => {
      ms932Encoder.encode("\u7519");
    },
    Error,
    "encode-error: U+7519",
  );
  r = r && ([...ms932Encoder.encode("甚")].join(",") === "144,114"); // U+751A
  assertThrows(
    () => {
      ms932Encoder.encode("\u751B");
    },
    Error,
    "encode-error: U+751B",
  );
  r = r && ([...ms932Encoder.encode("甜")].join(",") === "147,91"); // U+751C
  assertThrows(
    () => {
      ms932Encoder.encode("\u751D");
    },
    Error,
    "encode-error: U+751D",
  );
  r = r && ([...ms932Encoder.encode("甞生")].join(",") === "225,82,144,182"); // U+751E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7520");
    },
    Error,
    "encode-error: U+7520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7521");
    },
    Error,
    "encode-error: U+7521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7522");
    },
    Error,
    "encode-error: U+7522",
  );
  r = r && ([...ms932Encoder.encode("産")].join(",") === "142,89"); // U+7523
  assertThrows(
    () => {
      ms932Encoder.encode("\u7524");
    },
    Error,
    "encode-error: U+7524",
  );
  r = r && ([...ms932Encoder.encode("甥甦")].join(",") === "137,153,225,83"); // U+7525
  assertThrows(
    () => {
      ms932Encoder.encode("\u7527");
    },
    Error,
    "encode-error: U+7527",
  );
  r = r && ([...ms932Encoder.encode("用")].join(",") === "151,112"); // U+7528
  assertThrows(
    () => {
      ms932Encoder.encode("\u7529");
    },
    Error,
    "encode-error: U+7529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u752A");
    },
    Error,
    "encode-error: U+752A",
  );
  r = r && ([...ms932Encoder.encode("甫甬")].join(",") === "149,225,225,84"); // U+752B
  assertThrows(
    () => {
      ms932Encoder.encode("\u752D");
    },
    Error,
    "encode-error: U+752D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u752E");
    },
    Error,
    "encode-error: U+752E",
  );
  r = r &&
    ([...ms932Encoder.encode("甯田由甲申")].join(",") ===
      "250,168,147,99,151,82,141,98,144,92"); // U+752F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7534");
    },
    Error,
    "encode-error: U+7534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7535");
    },
    Error,
    "encode-error: U+7535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7536");
    },
    Error,
    "encode-error: U+7536",
  );
  r = r && ([...ms932Encoder.encode("男甸")].join(",") === "146,106,153,178"); // U+7537
  assertThrows(
    () => {
      ms932Encoder.encode("\u7539");
    },
    Error,
    "encode-error: U+7539",
  );
  r = r &&
    ([...ms932Encoder.encode("町画甼")].join(",") === "146,172,137,230,225,85"); // U+753A
  assertThrows(
    () => {
      ms932Encoder.encode("\u753D");
    },
    Error,
    "encode-error: U+753D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u753E");
    },
    Error,
    "encode-error: U+753E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u753F");
    },
    Error,
    "encode-error: U+753F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7540");
    },
    Error,
    "encode-error: U+7540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7541");
    },
    Error,
    "encode-error: U+7541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7542");
    },
    Error,
    "encode-error: U+7542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7543");
    },
    Error,
    "encode-error: U+7543",
  );
  r = r && ([...ms932Encoder.encode("畄")].join(",") === "225,86"); // U+7544
  assertThrows(
    () => {
      ms932Encoder.encode("\u7545");
    },
    Error,
    "encode-error: U+7545",
  );
  r = r && ([...ms932Encoder.encode("畆")].join(",") === "225,91"); // U+7546
  assertThrows(
    () => {
      ms932Encoder.encode("\u7547");
    },
    Error,
    "encode-error: U+7547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7548");
    },
    Error,
    "encode-error: U+7548",
  );
  r = r &&
    ([...ms932Encoder.encode("畉畊畋界畍")].join(",") ===
      "225,89,225,88,157,192,138,69,225,87"); // U+7549
  assertThrows(
    () => {
      ms932Encoder.encode("\u754E");
    },
    Error,
    "encode-error: U+754E",
  );
  r = r && ([...ms932Encoder.encode("畏")].join(",") === "136,216"); // U+754F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7550");
    },
    Error,
    "encode-error: U+7550",
  );
  r = r && ([...ms932Encoder.encode("畑")].join(",") === "148,168"); // U+7551
  assertThrows(
    () => {
      ms932Encoder.encode("\u7552");
    },
    Error,
    "encode-error: U+7552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7553");
    },
    Error,
    "encode-error: U+7553",
  );
  r = r && ([...ms932Encoder.encode("畔")].join(",") === "148,200"); // U+7554
  assertThrows(
    () => {
      ms932Encoder.encode("\u7555");
    },
    Error,
    "encode-error: U+7555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7556");
    },
    Error,
    "encode-error: U+7556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7557");
    },
    Error,
    "encode-error: U+7557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7558");
    },
    Error,
    "encode-error: U+7558",
  );
  r = r &&
    ([...ms932Encoder.encode("留畚畛畜畝")].join(",") ===
      "151,175,225,92,225,90,146,123,144,164"); // U+7559
  assertThrows(
    () => {
      ms932Encoder.encode("\u755E");
    },
    Error,
    "encode-error: U+755E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u755F");
    },
    Error,
    "encode-error: U+755F",
  );
  r = r && ([...ms932Encoder.encode("畠")].join(",") === "148,169"); // U+7560
  assertThrows(
    () => {
      ms932Encoder.encode("\u7561");
    },
    Error,
    "encode-error: U+7561",
  );
  r = r && ([...ms932Encoder.encode("畢")].join(",") === "149,76"); // U+7562
  assertThrows(
    () => {
      ms932Encoder.encode("\u7563");
    },
    Error,
    "encode-error: U+7563",
  );
  r = r &&
    ([...ms932Encoder.encode("畤略畦畧")].join(",") ===
      "225,94,151,170,140,108,225,95"); // U+7564
  assertThrows(
    () => {
      ms932Encoder.encode("\u7568");
    },
    Error,
    "encode-error: U+7568",
  );
  r = r &&
    ([...ms932Encoder.encode("畩番畫")].join(",") === "225,93,148,212,225,96"); // U+7569
  assertThrows(
    () => {
      ms932Encoder.encode("\u756C");
    },
    Error,
    "encode-error: U+756C",
  );
  r = r && ([...ms932Encoder.encode("畭")].join(",") === "225,97"); // U+756D
  assertThrows(
    () => {
      ms932Encoder.encode("\u756E");
    },
    Error,
    "encode-error: U+756E",
  );
  r = r && ([...ms932Encoder.encode("畯異")].join(",") === "251,111,136,217"); // U+756F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7571");
    },
    Error,
    "encode-error: U+7571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7572");
    },
    Error,
    "encode-error: U+7572",
  );
  r = r && ([...ms932Encoder.encode("畳畴")].join(",") === "143,244,225,102"); // U+7573
  assertThrows(
    () => {
      ms932Encoder.encode("\u7575");
    },
    Error,
    "encode-error: U+7575",
  );
  r = r &&
    ([...ms932Encoder.encode("當畷畸")].join(",") === "225,99,147,235,225,98"); // U+7576
  assertThrows(
    () => {
      ms932Encoder.encode("\u7579");
    },
    Error,
    "encode-error: U+7579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u757A");
    },
    Error,
    "encode-error: U+757A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u757B");
    },
    Error,
    "encode-error: U+757B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u757C");
    },
    Error,
    "encode-error: U+757C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u757D");
    },
    Error,
    "encode-error: U+757D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u757E");
    },
    Error,
    "encode-error: U+757E",
  );
  r = r && ([...ms932Encoder.encode("畿")].join(",") === "139,69"); // U+757F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7580");
    },
    Error,
    "encode-error: U+7580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7581");
    },
    Error,
    "encode-error: U+7581",
  );
  r = r && ([...ms932Encoder.encode("疂")].join(",") === "225,105"); // U+7582
  assertThrows(
    () => {
      ms932Encoder.encode("\u7583");
    },
    Error,
    "encode-error: U+7583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7584");
    },
    Error,
    "encode-error: U+7584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7585");
    },
    Error,
    "encode-error: U+7585",
  );
  r = r && ([...ms932Encoder.encode("疆疇")].join(",") === "225,100,225,101"); // U+7586
  assertThrows(
    () => {
      ms932Encoder.encode("\u7588");
    },
    Error,
    "encode-error: U+7588",
  );
  r = r &&
    ([...ms932Encoder.encode("疉疊疋")].join(",") === "225,104,225,103,149,68"); // U+7589
  assertThrows(
    () => {
      ms932Encoder.encode("\u758C");
    },
    Error,
    "encode-error: U+758C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u758D");
    },
    Error,
    "encode-error: U+758D",
  );
  r = r && ([...ms932Encoder.encode("疎疏")].join(",") === "145,97,145,96"); // U+758E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7590");
    },
    Error,
    "encode-error: U+7590",
  );
  r = r && ([...ms932Encoder.encode("疑")].join(",") === "139,94"); // U+7591
  assertThrows(
    () => {
      ms932Encoder.encode("\u7592");
    },
    Error,
    "encode-error: U+7592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7593");
    },
    Error,
    "encode-error: U+7593",
  );
  r = r && ([...ms932Encoder.encode("疔")].join(",") === "225,106"); // U+7594
  assertThrows(
    () => {
      ms932Encoder.encode("\u7595");
    },
    Error,
    "encode-error: U+7595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7596");
    },
    Error,
    "encode-error: U+7596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7597");
    },
    Error,
    "encode-error: U+7597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7598");
    },
    Error,
    "encode-error: U+7598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7599");
    },
    Error,
    "encode-error: U+7599",
  );
  r = r && ([...ms932Encoder.encode("疚")].join(",") === "225,107"); // U+759A
  assertThrows(
    () => {
      ms932Encoder.encode("\u759B");
    },
    Error,
    "encode-error: U+759B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u759C");
    },
    Error,
    "encode-error: U+759C",
  );
  r = r && ([...ms932Encoder.encode("疝")].join(",") === "225,108"); // U+759D
  assertThrows(
    () => {
      ms932Encoder.encode("\u759E");
    },
    Error,
    "encode-error: U+759E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u759F");
    },
    Error,
    "encode-error: U+759F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75A0");
    },
    Error,
    "encode-error: U+75A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75A1");
    },
    Error,
    "encode-error: U+75A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75A2");
    },
    Error,
    "encode-error: U+75A2",
  );
  r = r && ([...ms932Encoder.encode("疣")].join(",") === "225,110"); // U+75A3
  assertThrows(
    () => {
      ms932Encoder.encode("\u75A4");
    },
    Error,
    "encode-error: U+75A4",
  );
  r = r && ([...ms932Encoder.encode("疥")].join(",") === "225,109"); // U+75A5
  assertThrows(
    () => {
      ms932Encoder.encode("\u75A6");
    },
    Error,
    "encode-error: U+75A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75A7");
    },
    Error,
    "encode-error: U+75A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75A8");
    },
    Error,
    "encode-error: U+75A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75A9");
    },
    Error,
    "encode-error: U+75A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75AA");
    },
    Error,
    "encode-error: U+75AA",
  );
  r = r && ([...ms932Encoder.encode("疫")].join(",") === "137,117"); // U+75AB
  assertThrows(
    () => {
      ms932Encoder.encode("\u75AC");
    },
    Error,
    "encode-error: U+75AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75AD");
    },
    Error,
    "encode-error: U+75AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75AE");
    },
    Error,
    "encode-error: U+75AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75AF");
    },
    Error,
    "encode-error: U+75AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75B0");
    },
    Error,
    "encode-error: U+75B0",
  );
  r = r &&
    ([...ms932Encoder.encode("疱疲疳")].join(",") ===
      "225,118,148,230,225,112"); // U+75B1
  assertThrows(
    () => {
      ms932Encoder.encode("\u75B4");
    },
    Error,
    "encode-error: U+75B4",
  );
  r = r && ([...ms932Encoder.encode("疵")].join(",") === "225,114"); // U+75B5
  assertThrows(
    () => {
      ms932Encoder.encode("\u75B6");
    },
    Error,
    "encode-error: U+75B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75B7");
    },
    Error,
    "encode-error: U+75B7",
  );
  r = r && ([...ms932Encoder.encode("疸疹")].join(",") === "225,116,144,93"); // U+75B8
  assertThrows(
    () => {
      ms932Encoder.encode("\u75BA");
    },
    Error,
    "encode-error: U+75BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75BB");
    },
    Error,
    "encode-error: U+75BB",
  );
  r = r &&
    ([...ms932Encoder.encode("疼疽疾")].join(",") ===
      "225,117,225,115,142,190"); // U+75BC
  assertThrows(
    () => {
      ms932Encoder.encode("\u75BF");
    },
    Error,
    "encode-error: U+75BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75C0");
    },
    Error,
    "encode-error: U+75C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75C1");
    },
    Error,
    "encode-error: U+75C1",
  );
  r = r && ([...ms932Encoder.encode("痂痃")].join(",") === "225,111,225,113"); // U+75C2
  assertThrows(
    () => {
      ms932Encoder.encode("\u75C4");
    },
    Error,
    "encode-error: U+75C4",
  );
  r = r && ([...ms932Encoder.encode("病")].join(",") === "149,97"); // U+75C5
  assertThrows(
    () => {
      ms932Encoder.encode("\u75C6");
    },
    Error,
    "encode-error: U+75C6",
  );
  r = r && ([...ms932Encoder.encode("症")].join(",") === "143,199"); // U+75C7
  assertThrows(
    () => {
      ms932Encoder.encode("\u75C8");
    },
    Error,
    "encode-error: U+75C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75C9");
    },
    Error,
    "encode-error: U+75C9",
  );
  r = r && ([...ms932Encoder.encode("痊")].join(",") === "225,120"); // U+75CA
  assertThrows(
    () => {
      ms932Encoder.encode("\u75CB");
    },
    Error,
    "encode-error: U+75CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75CC");
    },
    Error,
    "encode-error: U+75CC",
  );
  r = r && ([...ms932Encoder.encode("痍")].join(",") === "225,119"); // U+75CD
  assertThrows(
    () => {
      ms932Encoder.encode("\u75CE");
    },
    Error,
    "encode-error: U+75CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75CF");
    },
    Error,
    "encode-error: U+75CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75D0");
    },
    Error,
    "encode-error: U+75D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75D1");
    },
    Error,
    "encode-error: U+75D1",
  );
  r = r && ([...ms932Encoder.encode("痒")].join(",") === "225,121"); // U+75D2
  assertThrows(
    () => {
      ms932Encoder.encode("\u75D3");
    },
    Error,
    "encode-error: U+75D3",
  );
  r = r && ([...ms932Encoder.encode("痔痕")].join(",") === "142,164,141,173"); // U+75D4
  assertThrows(
    () => {
      ms932Encoder.encode("\u75D6");
    },
    Error,
    "encode-error: U+75D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75D7");
    },
    Error,
    "encode-error: U+75D7",
  );
  r = r && ([...ms932Encoder.encode("痘痙")].join(",") === "147,151,225,122"); // U+75D8
  assertThrows(
    () => {
      ms932Encoder.encode("\u75DA");
    },
    Error,
    "encode-error: U+75DA",
  );
  r = r && ([...ms932Encoder.encode("痛")].join(",") === "146,201"); // U+75DB
  assertThrows(
    () => {
      ms932Encoder.encode("\u75DC");
    },
    Error,
    "encode-error: U+75DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75DD");
    },
    Error,
    "encode-error: U+75DD",
  );
  r = r && ([...ms932Encoder.encode("痞")].join(",") === "225,124"); // U+75DE
  assertThrows(
    () => {
      ms932Encoder.encode("\u75DF");
    },
    Error,
    "encode-error: U+75DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75E0");
    },
    Error,
    "encode-error: U+75E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75E1");
    },
    Error,
    "encode-error: U+75E1",
  );
  r = r && ([...ms932Encoder.encode("痢痣")].join(",") === "151,159,225,123"); // U+75E2
  assertThrows(
    () => {
      ms932Encoder.encode("\u75E4");
    },
    Error,
    "encode-error: U+75E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75E5");
    },
    Error,
    "encode-error: U+75E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75E6");
    },
    Error,
    "encode-error: U+75E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75E7");
    },
    Error,
    "encode-error: U+75E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75E8");
    },
    Error,
    "encode-error: U+75E8",
  );
  r = r && ([...ms932Encoder.encode("痩")].join(",") === "145,137"); // U+75E9
  assertThrows(
    () => {
      ms932Encoder.encode("\u75EA");
    },
    Error,
    "encode-error: U+75EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75EB");
    },
    Error,
    "encode-error: U+75EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75EC");
    },
    Error,
    "encode-error: U+75EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75ED");
    },
    Error,
    "encode-error: U+75ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75EE");
    },
    Error,
    "encode-error: U+75EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75EF");
    },
    Error,
    "encode-error: U+75EF",
  );
  r = r && ([...ms932Encoder.encode("痰")].join(",") === "225,130"); // U+75F0
  assertThrows(
    () => {
      ms932Encoder.encode("\u75F1");
    },
    Error,
    "encode-error: U+75F1",
  );
  r = r &&
    ([...ms932Encoder.encode("痲痳痴")].join(",") ===
      "225,132,225,133,146,115"); // U+75F2
  assertThrows(
    () => {
      ms932Encoder.encode("\u75F5");
    },
    Error,
    "encode-error: U+75F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75F6");
    },
    Error,
    "encode-error: U+75F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75F7");
    },
    Error,
    "encode-error: U+75F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75F8");
    },
    Error,
    "encode-error: U+75F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u75F9");
    },
    Error,
    "encode-error: U+75F9",
  );
  r = r && ([...ms932Encoder.encode("痺")].join(",") === "225,131"); // U+75FA
  assertThrows(
    () => {
      ms932Encoder.encode("\u75FB");
    },
    Error,
    "encode-error: U+75FB",
  );
  r = r && ([...ms932Encoder.encode("痼")].join(",") === "225,128"); // U+75FC
  assertThrows(
    () => {
      ms932Encoder.encode("\u75FD");
    },
    Error,
    "encode-error: U+75FD",
  );
  r = r && ([...ms932Encoder.encode("痾痿")].join(",") === "225,125,225,126"); // U+75FE
  assertThrows(
    () => {
      ms932Encoder.encode("\u7600");
    },
    Error,
    "encode-error: U+7600",
  );
  r = r && ([...ms932Encoder.encode("瘁")].join(",") === "225,129"); // U+7601
  assertThrows(
    () => {
      ms932Encoder.encode("\u7602");
    },
    Error,
    "encode-error: U+7602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7603");
    },
    Error,
    "encode-error: U+7603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7604");
    },
    Error,
    "encode-error: U+7604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7605");
    },
    Error,
    "encode-error: U+7605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7606");
    },
    Error,
    "encode-error: U+7606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7607");
    },
    Error,
    "encode-error: U+7607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7608");
    },
    Error,
    "encode-error: U+7608",
  );
  r = r && ([...ms932Encoder.encode("瘉")].join(",") === "225,136"); // U+7609
  assertThrows(
    () => {
      ms932Encoder.encode("\u760A");
    },
    Error,
    "encode-error: U+760A",
  );
  r = r && ([...ms932Encoder.encode("瘋")].join(",") === "225,134"); // U+760B
  assertThrows(
    () => {
      ms932Encoder.encode("\u760C");
    },
    Error,
    "encode-error: U+760C",
  );
  r = r && ([...ms932Encoder.encode("瘍")].join(",") === "225,135"); // U+760D
  assertThrows(
    () => {
      ms932Encoder.encode("\u760E");
    },
    Error,
    "encode-error: U+760E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u760F");
    },
    Error,
    "encode-error: U+760F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7610");
    },
    Error,
    "encode-error: U+7610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7611");
    },
    Error,
    "encode-error: U+7611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7612");
    },
    Error,
    "encode-error: U+7612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7613");
    },
    Error,
    "encode-error: U+7613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7614");
    },
    Error,
    "encode-error: U+7614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7615");
    },
    Error,
    "encode-error: U+7615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7616");
    },
    Error,
    "encode-error: U+7616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7617");
    },
    Error,
    "encode-error: U+7617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7618");
    },
    Error,
    "encode-error: U+7618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7619");
    },
    Error,
    "encode-error: U+7619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u761A");
    },
    Error,
    "encode-error: U+761A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u761B");
    },
    Error,
    "encode-error: U+761B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u761C");
    },
    Error,
    "encode-error: U+761C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u761D");
    },
    Error,
    "encode-error: U+761D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u761E");
    },
    Error,
    "encode-error: U+761E",
  );
  r = r &&
    ([...ms932Encoder.encode("瘟瘠瘡瘢")].join(",") ===
      "225,137,225,139,225,140,225,141"); // U+761F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7623");
    },
    Error,
    "encode-error: U+7623",
  );
  r = r && ([...ms932Encoder.encode("瘤")].join(",") === "225,142"); // U+7624
  assertThrows(
    () => {
      ms932Encoder.encode("\u7625");
    },
    Error,
    "encode-error: U+7625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7626");
    },
    Error,
    "encode-error: U+7626",
  );
  r = r && ([...ms932Encoder.encode("瘧")].join(",") === "225,138"); // U+7627
  assertThrows(
    () => {
      ms932Encoder.encode("\u7628");
    },
    Error,
    "encode-error: U+7628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7629");
    },
    Error,
    "encode-error: U+7629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u762A");
    },
    Error,
    "encode-error: U+762A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u762B");
    },
    Error,
    "encode-error: U+762B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u762C");
    },
    Error,
    "encode-error: U+762C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u762D");
    },
    Error,
    "encode-error: U+762D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u762E");
    },
    Error,
    "encode-error: U+762E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u762F");
    },
    Error,
    "encode-error: U+762F",
  );
  r = r && ([...ms932Encoder.encode("瘰")].join(",") === "225,144"); // U+7630
  assertThrows(
    () => {
      ms932Encoder.encode("\u7631");
    },
    Error,
    "encode-error: U+7631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7632");
    },
    Error,
    "encode-error: U+7632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7633");
    },
    Error,
    "encode-error: U+7633",
  );
  r = r && ([...ms932Encoder.encode("瘴")].join(",") === "225,143"); // U+7634
  assertThrows(
    () => {
      ms932Encoder.encode("\u7635");
    },
    Error,
    "encode-error: U+7635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7636");
    },
    Error,
    "encode-error: U+7636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7637");
    },
    Error,
    "encode-error: U+7637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7638");
    },
    Error,
    "encode-error: U+7638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7639");
    },
    Error,
    "encode-error: U+7639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u763A");
    },
    Error,
    "encode-error: U+763A",
  );
  r = r && ([...ms932Encoder.encode("瘻")].join(",") === "225,145"); // U+763B
  assertThrows(
    () => {
      ms932Encoder.encode("\u763C");
    },
    Error,
    "encode-error: U+763C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u763D");
    },
    Error,
    "encode-error: U+763D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u763E");
    },
    Error,
    "encode-error: U+763E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u763F");
    },
    Error,
    "encode-error: U+763F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7640");
    },
    Error,
    "encode-error: U+7640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7641");
    },
    Error,
    "encode-error: U+7641",
  );
  r = r && ([...ms932Encoder.encode("療")].join(",") === "151,195"); // U+7642
  assertThrows(
    () => {
      ms932Encoder.encode("\u7643");
    },
    Error,
    "encode-error: U+7643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7644");
    },
    Error,
    "encode-error: U+7644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7645");
    },
    Error,
    "encode-error: U+7645",
  );
  r = r &&
    ([...ms932Encoder.encode("癆癇癈")].join(",") ===
      "225,148,225,146,225,147"); // U+7646
  assertThrows(
    () => {
      ms932Encoder.encode("\u7649");
    },
    Error,
    "encode-error: U+7649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u764A");
    },
    Error,
    "encode-error: U+764A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u764B");
    },
    Error,
    "encode-error: U+764B",
  );
  r = r && ([...ms932Encoder.encode("癌")].join(",") === "138,224"); // U+764C
  assertThrows(
    () => {
      ms932Encoder.encode("\u764D");
    },
    Error,
    "encode-error: U+764D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u764E");
    },
    Error,
    "encode-error: U+764E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u764F");
    },
    Error,
    "encode-error: U+764F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7650");
    },
    Error,
    "encode-error: U+7650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7651");
    },
    Error,
    "encode-error: U+7651",
  );
  r = r && ([...ms932Encoder.encode("癒")].join(",") === "150,252"); // U+7652
  assertThrows(
    () => {
      ms932Encoder.encode("\u7653");
    },
    Error,
    "encode-error: U+7653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7654");
    },
    Error,
    "encode-error: U+7654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7655");
    },
    Error,
    "encode-error: U+7655",
  );
  r = r && ([...ms932Encoder.encode("癖")].join(",") === "149,200"); // U+7656
  assertThrows(
    () => {
      ms932Encoder.encode("\u7657");
    },
    Error,
    "encode-error: U+7657",
  );
  r = r && ([...ms932Encoder.encode("癘")].join(",") === "225,150"); // U+7658
  assertThrows(
    () => {
      ms932Encoder.encode("\u7659");
    },
    Error,
    "encode-error: U+7659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u765A");
    },
    Error,
    "encode-error: U+765A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u765B");
    },
    Error,
    "encode-error: U+765B",
  );
  r = r && ([...ms932Encoder.encode("癜")].join(",") === "225,149"); // U+765C
  assertThrows(
    () => {
      ms932Encoder.encode("\u765D");
    },
    Error,
    "encode-error: U+765D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u765E");
    },
    Error,
    "encode-error: U+765E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u765F");
    },
    Error,
    "encode-error: U+765F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7660");
    },
    Error,
    "encode-error: U+7660",
  );
  r = r && ([...ms932Encoder.encode("癡癢")].join(",") === "225,151,225,152"); // U+7661
  assertThrows(
    () => {
      ms932Encoder.encode("\u7663");
    },
    Error,
    "encode-error: U+7663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7664");
    },
    Error,
    "encode-error: U+7664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7665");
    },
    Error,
    "encode-error: U+7665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7666");
    },
    Error,
    "encode-error: U+7666",
  );
  r = r &&
    ([...ms932Encoder.encode("癧癨癩癪")].join(",") ===
      "225,156,225,153,225,154,225,155"); // U+7667
  assertThrows(
    () => {
      ms932Encoder.encode("\u766B");
    },
    Error,
    "encode-error: U+766B",
  );
  r = r && ([...ms932Encoder.encode("癬")].join(",") === "225,157"); // U+766C
  assertThrows(
    () => {
      ms932Encoder.encode("\u766D");
    },
    Error,
    "encode-error: U+766D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u766E");
    },
    Error,
    "encode-error: U+766E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u766F");
    },
    Error,
    "encode-error: U+766F",
  );
  r = r && ([...ms932Encoder.encode("癰")].join(",") === "225,158"); // U+7670
  assertThrows(
    () => {
      ms932Encoder.encode("\u7671");
    },
    Error,
    "encode-error: U+7671",
  );
  r = r && ([...ms932Encoder.encode("癲")].join(",") === "225,159"); // U+7672
  assertThrows(
    () => {
      ms932Encoder.encode("\u7673");
    },
    Error,
    "encode-error: U+7673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7674");
    },
    Error,
    "encode-error: U+7674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7675");
    },
    Error,
    "encode-error: U+7675",
  );
  r = r && ([...ms932Encoder.encode("癶")].join(",") === "225,160"); // U+7676
  assertThrows(
    () => {
      ms932Encoder.encode("\u7677");
    },
    Error,
    "encode-error: U+7677",
  );
  r = r && ([...ms932Encoder.encode("癸")].join(",") === "225,161"); // U+7678
  assertThrows(
    () => {
      ms932Encoder.encode("\u7679");
    },
    Error,
    "encode-error: U+7679",
  );
  r = r &&
    ([...ms932Encoder.encode("発登發白百")].join(",") ===
      "148,173,147,111,225,162,148,146,149,83"); // U+767A
  assertThrows(
    () => {
      ms932Encoder.encode("\u767F");
    },
    Error,
    "encode-error: U+767F",
  );
  r = r && ([...ms932Encoder.encode("皀")].join(",") === "225,163"); // U+7680
  assertThrows(
    () => {
      ms932Encoder.encode("\u7681");
    },
    Error,
    "encode-error: U+7681",
  );
  r = r &&
    ([...ms932Encoder.encode("皂皃的")].join(",") === "251,112,225,164,147,73"); // U+7682
  assertThrows(
    () => {
      ms932Encoder.encode("\u7685");
    },
    Error,
    "encode-error: U+7685",
  );
  r = r &&
    ([...ms932Encoder.encode("皆皇皈")].join(",") === "138,70,141,99,225,165"); // U+7686
  assertThrows(
    () => {
      ms932Encoder.encode("\u7689");
    },
    Error,
    "encode-error: U+7689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u768A");
    },
    Error,
    "encode-error: U+768A",
  );
  r = r && ([...ms932Encoder.encode("皋")].join(",") === "225,166"); // U+768B
  assertThrows(
    () => {
      ms932Encoder.encode("\u768C");
    },
    Error,
    "encode-error: U+768C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u768D");
    },
    Error,
    "encode-error: U+768D",
  );
  r = r && ([...ms932Encoder.encode("皎")].join(",") === "225,167"); // U+768E
  assertThrows(
    () => {
      ms932Encoder.encode("\u768F");
    },
    Error,
    "encode-error: U+768F",
  );
  r = r && ([...ms932Encoder.encode("皐")].join(",") === "142,72"); // U+7690
  assertThrows(
    () => {
      ms932Encoder.encode("\u7691");
    },
    Error,
    "encode-error: U+7691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7692");
    },
    Error,
    "encode-error: U+7692",
  );
  r = r && ([...ms932Encoder.encode("皓")].join(",") === "225,169"); // U+7693
  assertThrows(
    () => {
      ms932Encoder.encode("\u7694");
    },
    Error,
    "encode-error: U+7694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7695");
    },
    Error,
    "encode-error: U+7695",
  );
  r = r && ([...ms932Encoder.encode("皖")].join(",") === "225,168"); // U+7696
  assertThrows(
    () => {
      ms932Encoder.encode("\u7697");
    },
    Error,
    "encode-error: U+7697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7698");
    },
    Error,
    "encode-error: U+7698",
  );
  r = r &&
    ([...ms932Encoder.encode("皙皚皛皜")].join(",") ===
      "225,170,225,171,251,115,251,113"); // U+7699
  assertThrows(
    () => {
      ms932Encoder.encode("\u769D");
    },
    Error,
    "encode-error: U+769D",
  );
  r = r && ([...ms932Encoder.encode("皞")].join(",") === "251,114"); // U+769E
  assertThrows(
    () => {
      ms932Encoder.encode("\u769F");
    },
    Error,
    "encode-error: U+769F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76A0");
    },
    Error,
    "encode-error: U+76A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76A1");
    },
    Error,
    "encode-error: U+76A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76A2");
    },
    Error,
    "encode-error: U+76A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76A3");
    },
    Error,
    "encode-error: U+76A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76A4");
    },
    Error,
    "encode-error: U+76A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76A5");
    },
    Error,
    "encode-error: U+76A5",
  );
  r = r && ([...ms932Encoder.encode("皦")].join(",") === "251,116"); // U+76A6
  assertThrows(
    () => {
      ms932Encoder.encode("\u76A7");
    },
    Error,
    "encode-error: U+76A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76A8");
    },
    Error,
    "encode-error: U+76A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76A9");
    },
    Error,
    "encode-error: U+76A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76AA");
    },
    Error,
    "encode-error: U+76AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76AB");
    },
    Error,
    "encode-error: U+76AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76AC");
    },
    Error,
    "encode-error: U+76AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76AD");
    },
    Error,
    "encode-error: U+76AD",
  );
  r = r && ([...ms932Encoder.encode("皮")].join(",") === "148,231"); // U+76AE
  assertThrows(
    () => {
      ms932Encoder.encode("\u76AF");
    },
    Error,
    "encode-error: U+76AF",
  );
  r = r && ([...ms932Encoder.encode("皰")].join(",") === "225,172"); // U+76B0
  assertThrows(
    () => {
      ms932Encoder.encode("\u76B1");
    },
    Error,
    "encode-error: U+76B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76B2");
    },
    Error,
    "encode-error: U+76B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76B3");
    },
    Error,
    "encode-error: U+76B3",
  );
  r = r && ([...ms932Encoder.encode("皴")].join(",") === "225,173"); // U+76B4
  assertThrows(
    () => {
      ms932Encoder.encode("\u76B5");
    },
    Error,
    "encode-error: U+76B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76B6");
    },
    Error,
    "encode-error: U+76B6",
  );
  r = r &&
    ([...ms932Encoder.encode("皷皸皹皺")].join(",") ===
      "234,137,225,174,225,175,225,176"); // U+76B7
  assertThrows(
    () => {
      ms932Encoder.encode("\u76BB");
    },
    Error,
    "encode-error: U+76BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76BC");
    },
    Error,
    "encode-error: U+76BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76BD");
    },
    Error,
    "encode-error: U+76BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76BE");
    },
    Error,
    "encode-error: U+76BE",
  );
  r = r && ([...ms932Encoder.encode("皿")].join(",") === "142,77"); // U+76BF
  assertThrows(
    () => {
      ms932Encoder.encode("\u76C0");
    },
    Error,
    "encode-error: U+76C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76C1");
    },
    Error,
    "encode-error: U+76C1",
  );
  r = r && ([...ms932Encoder.encode("盂盃")].join(",") === "225,177,148,117"); // U+76C2
  assertThrows(
    () => {
      ms932Encoder.encode("\u76C4");
    },
    Error,
    "encode-error: U+76C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76C5");
    },
    Error,
    "encode-error: U+76C5",
  );
  r = r && ([...ms932Encoder.encode("盆")].join(",") === "150,126"); // U+76C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u76C7");
    },
    Error,
    "encode-error: U+76C7",
  );
  r = r && ([...ms932Encoder.encode("盈")].join(",") === "137,109"); // U+76C8
  assertThrows(
    () => {
      ms932Encoder.encode("\u76C9");
    },
    Error,
    "encode-error: U+76C9",
  );
  r = r && ([...ms932Encoder.encode("益")].join(",") === "137,118"); // U+76CA
  assertThrows(
    () => {
      ms932Encoder.encode("\u76CB");
    },
    Error,
    "encode-error: U+76CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76CC");
    },
    Error,
    "encode-error: U+76CC",
  );
  r = r && ([...ms932Encoder.encode("盍")].join(",") === "225,178"); // U+76CD
  assertThrows(
    () => {
      ms932Encoder.encode("\u76CE");
    },
    Error,
    "encode-error: U+76CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76CF");
    },
    Error,
    "encode-error: U+76CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76D0");
    },
    Error,
    "encode-error: U+76D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76D1");
    },
    Error,
    "encode-error: U+76D1",
  );
  r = r && ([...ms932Encoder.encode("盒")].join(",") === "225,180"); // U+76D2
  assertThrows(
    () => {
      ms932Encoder.encode("\u76D3");
    },
    Error,
    "encode-error: U+76D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76D4");
    },
    Error,
    "encode-error: U+76D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76D5");
    },
    Error,
    "encode-error: U+76D5",
  );
  r = r && ([...ms932Encoder.encode("盖盗")].join(",") === "225,179,147,144"); // U+76D6
  assertThrows(
    () => {
      ms932Encoder.encode("\u76D8");
    },
    Error,
    "encode-error: U+76D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76D9");
    },
    Error,
    "encode-error: U+76D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76DA");
    },
    Error,
    "encode-error: U+76DA",
  );
  r = r && ([...ms932Encoder.encode("盛盜")].join(",") === "144,183,159,88"); // U+76DB
  assertThrows(
    () => {
      ms932Encoder.encode("\u76DD");
    },
    Error,
    "encode-error: U+76DD",
  );
  r = r && ([...ms932Encoder.encode("盞盟")].join(",") === "225,181,150,191"); // U+76DE
  assertThrows(
    () => {
      ms932Encoder.encode("\u76E0");
    },
    Error,
    "encode-error: U+76E0",
  );
  r = r && ([...ms932Encoder.encode("盡")].join(",") === "225,182"); // U+76E1
  assertThrows(
    () => {
      ms932Encoder.encode("\u76E2");
    },
    Error,
    "encode-error: U+76E2",
  );
  r = r &&
    ([...ms932Encoder.encode("監盤盥")].join(",") ===
      "138,196,148,213,225,183"); // U+76E3
  assertThrows(
    () => {
      ms932Encoder.encode("\u76E6");
    },
    Error,
    "encode-error: U+76E6",
  );
  r = r && ([...ms932Encoder.encode("盧")].join(",") === "225,184"); // U+76E7
  assertThrows(
    () => {
      ms932Encoder.encode("\u76E8");
    },
    Error,
    "encode-error: U+76E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76E9");
    },
    Error,
    "encode-error: U+76E9",
  );
  r = r && ([...ms932Encoder.encode("盪")].join(",") === "225,185"); // U+76EA
  assertThrows(
    () => {
      ms932Encoder.encode("\u76EB");
    },
    Error,
    "encode-error: U+76EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76EC");
    },
    Error,
    "encode-error: U+76EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76ED");
    },
    Error,
    "encode-error: U+76ED",
  );
  r = r && ([...ms932Encoder.encode("目")].join(",") === "150,218"); // U+76EE
  assertThrows(
    () => {
      ms932Encoder.encode("\u76EF");
    },
    Error,
    "encode-error: U+76EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76F0");
    },
    Error,
    "encode-error: U+76F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76F1");
    },
    Error,
    "encode-error: U+76F1",
  );
  r = r && ([...ms932Encoder.encode("盲")].join(",") === "150,211"); // U+76F2
  assertThrows(
    () => {
      ms932Encoder.encode("\u76F3");
    },
    Error,
    "encode-error: U+76F3",
  );
  r = r && ([...ms932Encoder.encode("直")].join(",") === "146,188"); // U+76F4
  assertThrows(
    () => {
      ms932Encoder.encode("\u76F5");
    },
    Error,
    "encode-error: U+76F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76F6");
    },
    Error,
    "encode-error: U+76F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76F7");
    },
    Error,
    "encode-error: U+76F7",
  );
  r = r && ([...ms932Encoder.encode("相")].join(",") === "145,138"); // U+76F8
  assertThrows(
    () => {
      ms932Encoder.encode("\u76F9");
    },
    Error,
    "encode-error: U+76F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76FA");
    },
    Error,
    "encode-error: U+76FA",
  );
  r = r && ([...ms932Encoder.encode("盻")].join(",") === "225,187"); // U+76FB
  assertThrows(
    () => {
      ms932Encoder.encode("\u76FC");
    },
    Error,
    "encode-error: U+76FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u76FD");
    },
    Error,
    "encode-error: U+76FD",
  );
  r = r && ([...ms932Encoder.encode("盾")].join(",") === "143,130"); // U+76FE
  assertThrows(
    () => {
      ms932Encoder.encode("\u76FF");
    },
    Error,
    "encode-error: U+76FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7700");
    },
    Error,
    "encode-error: U+7700",
  );
  r = r && ([...ms932Encoder.encode("省")].join(",") === "143,200"); // U+7701
  assertThrows(
    () => {
      ms932Encoder.encode("\u7702");
    },
    Error,
    "encode-error: U+7702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7703");
    },
    Error,
    "encode-error: U+7703",
  );
  r = r && ([...ms932Encoder.encode("眄")].join(",") === "225,190"); // U+7704
  assertThrows(
    () => {
      ms932Encoder.encode("\u7705");
    },
    Error,
    "encode-error: U+7705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7706");
    },
    Error,
    "encode-error: U+7706",
  );
  r = r &&
    ([...ms932Encoder.encode("眇眈眉")].join(",") ===
      "225,189,225,188,148,251"); // U+7707
  assertThrows(
    () => {
      ms932Encoder.encode("\u770A");
    },
    Error,
    "encode-error: U+770A",
  );
  r = r && ([...ms932Encoder.encode("看県")].join(",") === "138,197,140,167"); // U+770B
  assertThrows(
    () => {
      ms932Encoder.encode("\u770D");
    },
    Error,
    "encode-error: U+770D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u770E");
    },
    Error,
    "encode-error: U+770E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u770F");
    },
    Error,
    "encode-error: U+770F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7710");
    },
    Error,
    "encode-error: U+7710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7711");
    },
    Error,
    "encode-error: U+7711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7712");
    },
    Error,
    "encode-error: U+7712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7713");
    },
    Error,
    "encode-error: U+7713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7714");
    },
    Error,
    "encode-error: U+7714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7715");
    },
    Error,
    "encode-error: U+7715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7716");
    },
    Error,
    "encode-error: U+7716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7717");
    },
    Error,
    "encode-error: U+7717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7718");
    },
    Error,
    "encode-error: U+7718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7719");
    },
    Error,
    "encode-error: U+7719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u771A");
    },
    Error,
    "encode-error: U+771A",
  );
  r = r && ([...ms932Encoder.encode("眛")].join(",") === "225,196"); // U+771B
  assertThrows(
    () => {
      ms932Encoder.encode("\u771C");
    },
    Error,
    "encode-error: U+771C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u771D");
    },
    Error,
    "encode-error: U+771D",
  );
  r = r &&
    ([...ms932Encoder.encode("眞真眠")].join(",") === "225,193,144,94,150,176"); // U+771E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7721");
    },
    Error,
    "encode-error: U+7721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7722");
    },
    Error,
    "encode-error: U+7722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7723");
    },
    Error,
    "encode-error: U+7723",
  );
  r = r &&
    ([...ms932Encoder.encode("眤眥眦")].join(",") ===
      "225,192,225,194,225,195"); // U+7724
  assertThrows(
    () => {
      ms932Encoder.encode("\u7727");
    },
    Error,
    "encode-error: U+7727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7728");
    },
    Error,
    "encode-error: U+7728",
  );
  r = r && ([...ms932Encoder.encode("眩")].join(",") === "225,191"); // U+7729
  assertThrows(
    () => {
      ms932Encoder.encode("\u772A");
    },
    Error,
    "encode-error: U+772A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u772B");
    },
    Error,
    "encode-error: U+772B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u772C");
    },
    Error,
    "encode-error: U+772C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u772D");
    },
    Error,
    "encode-error: U+772D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u772E");
    },
    Error,
    "encode-error: U+772E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u772F");
    },
    Error,
    "encode-error: U+772F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7730");
    },
    Error,
    "encode-error: U+7730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7731");
    },
    Error,
    "encode-error: U+7731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7732");
    },
    Error,
    "encode-error: U+7732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7733");
    },
    Error,
    "encode-error: U+7733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7734");
    },
    Error,
    "encode-error: U+7734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7735");
    },
    Error,
    "encode-error: U+7735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7736");
    },
    Error,
    "encode-error: U+7736",
  );
  r = r && ([...ms932Encoder.encode("眷眸")].join(",") === "225,197,225,198"); // U+7737
  assertThrows(
    () => {
      ms932Encoder.encode("\u7739");
    },
    Error,
    "encode-error: U+7739",
  );
  r = r && ([...ms932Encoder.encode("眺")].join(",") === "146,173"); // U+773A
  assertThrows(
    () => {
      ms932Encoder.encode("\u773B");
    },
    Error,
    "encode-error: U+773B",
  );
  r = r && ([...ms932Encoder.encode("眼")].join(",") === "138,225"); // U+773C
  assertThrows(
    () => {
      ms932Encoder.encode("\u773D");
    },
    Error,
    "encode-error: U+773D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u773E");
    },
    Error,
    "encode-error: U+773E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u773F");
    },
    Error,
    "encode-error: U+773F",
  );
  r = r && ([...ms932Encoder.encode("着")].join(",") === "146,133"); // U+7740
  assertThrows(
    () => {
      ms932Encoder.encode("\u7741");
    },
    Error,
    "encode-error: U+7741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7742");
    },
    Error,
    "encode-error: U+7742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7743");
    },
    Error,
    "encode-error: U+7743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7744");
    },
    Error,
    "encode-error: U+7744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7745");
    },
    Error,
    "encode-error: U+7745",
  );
  r = r && ([...ms932Encoder.encode("睆睇")].join(",") === "251,118,225,199"); // U+7746
  assertThrows(
    () => {
      ms932Encoder.encode("\u7748");
    },
    Error,
    "encode-error: U+7748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7749");
    },
    Error,
    "encode-error: U+7749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u774A");
    },
    Error,
    "encode-error: U+774A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u774B");
    },
    Error,
    "encode-error: U+774B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u774C");
    },
    Error,
    "encode-error: U+774C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u774D");
    },
    Error,
    "encode-error: U+774D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u774E");
    },
    Error,
    "encode-error: U+774E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u774F");
    },
    Error,
    "encode-error: U+774F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7750");
    },
    Error,
    "encode-error: U+7750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7751");
    },
    Error,
    "encode-error: U+7751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7752");
    },
    Error,
    "encode-error: U+7752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7753");
    },
    Error,
    "encode-error: U+7753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7754");
    },
    Error,
    "encode-error: U+7754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7755");
    },
    Error,
    "encode-error: U+7755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7756");
    },
    Error,
    "encode-error: U+7756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7757");
    },
    Error,
    "encode-error: U+7757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7758");
    },
    Error,
    "encode-error: U+7758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7759");
    },
    Error,
    "encode-error: U+7759",
  );
  r = r && ([...ms932Encoder.encode("睚睛")].join(",") === "225,200,225,203"); // U+775A
  assertThrows(
    () => {
      ms932Encoder.encode("\u775C");
    },
    Error,
    "encode-error: U+775C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u775D");
    },
    Error,
    "encode-error: U+775D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u775E");
    },
    Error,
    "encode-error: U+775E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u775F");
    },
    Error,
    "encode-error: U+775F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7760");
    },
    Error,
    "encode-error: U+7760",
  );
  r = r && ([...ms932Encoder.encode("睡")].join(",") === "144,135"); // U+7761
  assertThrows(
    () => {
      ms932Encoder.encode("\u7762");
    },
    Error,
    "encode-error: U+7762",
  );
  r = r && ([...ms932Encoder.encode("督")].join(",") === "147,194"); // U+7763
  assertThrows(
    () => {
      ms932Encoder.encode("\u7764");
    },
    Error,
    "encode-error: U+7764",
  );
  r = r && ([...ms932Encoder.encode("睥睦")].join(",") === "225,204,150,114"); // U+7765
  assertThrows(
    () => {
      ms932Encoder.encode("\u7767");
    },
    Error,
    "encode-error: U+7767",
  );
  r = r && ([...ms932Encoder.encode("睨")].join(",") === "225,201"); // U+7768
  assertThrows(
    () => {
      ms932Encoder.encode("\u7769");
    },
    Error,
    "encode-error: U+7769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u776A");
    },
    Error,
    "encode-error: U+776A",
  );
  r = r && ([...ms932Encoder.encode("睫")].join(",") === "225,202"); // U+776B
  assertThrows(
    () => {
      ms932Encoder.encode("\u776C");
    },
    Error,
    "encode-error: U+776C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u776D");
    },
    Error,
    "encode-error: U+776D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u776E");
    },
    Error,
    "encode-error: U+776E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u776F");
    },
    Error,
    "encode-error: U+776F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7770");
    },
    Error,
    "encode-error: U+7770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7771");
    },
    Error,
    "encode-error: U+7771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7772");
    },
    Error,
    "encode-error: U+7772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7773");
    },
    Error,
    "encode-error: U+7773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7774");
    },
    Error,
    "encode-error: U+7774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7775");
    },
    Error,
    "encode-error: U+7775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7776");
    },
    Error,
    "encode-error: U+7776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7777");
    },
    Error,
    "encode-error: U+7777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7778");
    },
    Error,
    "encode-error: U+7778",
  );
  r = r && ([...ms932Encoder.encode("睹")].join(",") === "225,207"); // U+7779
  assertThrows(
    () => {
      ms932Encoder.encode("\u777A");
    },
    Error,
    "encode-error: U+777A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u777B");
    },
    Error,
    "encode-error: U+777B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u777C");
    },
    Error,
    "encode-error: U+777C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u777D");
    },
    Error,
    "encode-error: U+777D",
  );
  r = r && ([...ms932Encoder.encode("睾睿")].join(",") === "225,206,225,205"); // U+777E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7780");
    },
    Error,
    "encode-error: U+7780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7781");
    },
    Error,
    "encode-error: U+7781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7782");
    },
    Error,
    "encode-error: U+7782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7783");
    },
    Error,
    "encode-error: U+7783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7784");
    },
    Error,
    "encode-error: U+7784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7785");
    },
    Error,
    "encode-error: U+7785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7786");
    },
    Error,
    "encode-error: U+7786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7787");
    },
    Error,
    "encode-error: U+7787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7788");
    },
    Error,
    "encode-error: U+7788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7789");
    },
    Error,
    "encode-error: U+7789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u778A");
    },
    Error,
    "encode-error: U+778A",
  );
  r = r && ([...ms932Encoder.encode("瞋")].join(",") === "225,209"); // U+778B
  assertThrows(
    () => {
      ms932Encoder.encode("\u778C");
    },
    Error,
    "encode-error: U+778C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u778D");
    },
    Error,
    "encode-error: U+778D",
  );
  r = r && ([...ms932Encoder.encode("瞎")].join(",") === "225,208"); // U+778E
  assertThrows(
    () => {
      ms932Encoder.encode("\u778F");
    },
    Error,
    "encode-error: U+778F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7790");
    },
    Error,
    "encode-error: U+7790",
  );
  r = r && ([...ms932Encoder.encode("瞑")].join(",") === "225,210"); // U+7791
  assertThrows(
    () => {
      ms932Encoder.encode("\u7792");
    },
    Error,
    "encode-error: U+7792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7793");
    },
    Error,
    "encode-error: U+7793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7794");
    },
    Error,
    "encode-error: U+7794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7795");
    },
    Error,
    "encode-error: U+7795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7796");
    },
    Error,
    "encode-error: U+7796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7797");
    },
    Error,
    "encode-error: U+7797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7798");
    },
    Error,
    "encode-error: U+7798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7799");
    },
    Error,
    "encode-error: U+7799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u779A");
    },
    Error,
    "encode-error: U+779A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u779B");
    },
    Error,
    "encode-error: U+779B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u779C");
    },
    Error,
    "encode-error: U+779C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u779D");
    },
    Error,
    "encode-error: U+779D",
  );
  r = r && ([...ms932Encoder.encode("瞞")].join(",") === "225,212"); // U+779E
  assertThrows(
    () => {
      ms932Encoder.encode("\u779F");
    },
    Error,
    "encode-error: U+779F",
  );
  r = r && ([...ms932Encoder.encode("瞠")].join(",") === "225,211"); // U+77A0
  assertThrows(
    () => {
      ms932Encoder.encode("\u77A1");
    },
    Error,
    "encode-error: U+77A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77A2");
    },
    Error,
    "encode-error: U+77A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77A3");
    },
    Error,
    "encode-error: U+77A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77A4");
    },
    Error,
    "encode-error: U+77A4",
  );
  r = r && ([...ms932Encoder.encode("瞥")].join(",") === "149,203"); // U+77A5
  assertThrows(
    () => {
      ms932Encoder.encode("\u77A6");
    },
    Error,
    "encode-error: U+77A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77A7");
    },
    Error,
    "encode-error: U+77A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77A8");
    },
    Error,
    "encode-error: U+77A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77A9");
    },
    Error,
    "encode-error: U+77A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77AA");
    },
    Error,
    "encode-error: U+77AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77AB");
    },
    Error,
    "encode-error: U+77AB",
  );
  r = r && ([...ms932Encoder.encode("瞬瞭")].join(",") === "143,117,151,196"); // U+77AC
  assertThrows(
    () => {
      ms932Encoder.encode("\u77AE");
    },
    Error,
    "encode-error: U+77AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77AF");
    },
    Error,
    "encode-error: U+77AF",
  );
  r = r && ([...ms932Encoder.encode("瞰")].join(",") === "225,213"); // U+77B0
  assertThrows(
    () => {
      ms932Encoder.encode("\u77B1");
    },
    Error,
    "encode-error: U+77B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77B2");
    },
    Error,
    "encode-error: U+77B2",
  );
  r = r && ([...ms932Encoder.encode("瞳")].join(",") === "147,181"); // U+77B3
  assertThrows(
    () => {
      ms932Encoder.encode("\u77B4");
    },
    Error,
    "encode-error: U+77B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77B5");
    },
    Error,
    "encode-error: U+77B5",
  );
  r = r && ([...ms932Encoder.encode("瞶")].join(",") === "225,214"); // U+77B6
  assertThrows(
    () => {
      ms932Encoder.encode("\u77B7");
    },
    Error,
    "encode-error: U+77B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77B8");
    },
    Error,
    "encode-error: U+77B8",
  );
  r = r && ([...ms932Encoder.encode("瞹")].join(",") === "225,215"); // U+77B9
  assertThrows(
    () => {
      ms932Encoder.encode("\u77BA");
    },
    Error,
    "encode-error: U+77BA",
  );
  r = r &&
    ([...ms932Encoder.encode("瞻瞼瞽")].join(",") ===
      "225,219,225,217,225,218"); // U+77BB
  assertThrows(
    () => {
      ms932Encoder.encode("\u77BE");
    },
    Error,
    "encode-error: U+77BE",
  );
  r = r && ([...ms932Encoder.encode("瞿")].join(",") === "225,216"); // U+77BF
  assertThrows(
    () => {
      ms932Encoder.encode("\u77C0");
    },
    Error,
    "encode-error: U+77C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77C1");
    },
    Error,
    "encode-error: U+77C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77C2");
    },
    Error,
    "encode-error: U+77C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77C3");
    },
    Error,
    "encode-error: U+77C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77C4");
    },
    Error,
    "encode-error: U+77C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77C5");
    },
    Error,
    "encode-error: U+77C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77C6");
    },
    Error,
    "encode-error: U+77C6",
  );
  r = r && ([...ms932Encoder.encode("矇")].join(",") === "225,220"); // U+77C7
  assertThrows(
    () => {
      ms932Encoder.encode("\u77C8");
    },
    Error,
    "encode-error: U+77C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77C9");
    },
    Error,
    "encode-error: U+77C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77CA");
    },
    Error,
    "encode-error: U+77CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77CB");
    },
    Error,
    "encode-error: U+77CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77CC");
    },
    Error,
    "encode-error: U+77CC",
  );
  r = r && ([...ms932Encoder.encode("矍")].join(",") === "225,221"); // U+77CD
  assertThrows(
    () => {
      ms932Encoder.encode("\u77CE");
    },
    Error,
    "encode-error: U+77CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77CF");
    },
    Error,
    "encode-error: U+77CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77D0");
    },
    Error,
    "encode-error: U+77D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77D1");
    },
    Error,
    "encode-error: U+77D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77D2");
    },
    Error,
    "encode-error: U+77D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77D3");
    },
    Error,
    "encode-error: U+77D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77D4");
    },
    Error,
    "encode-error: U+77D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77D5");
    },
    Error,
    "encode-error: U+77D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77D6");
    },
    Error,
    "encode-error: U+77D6",
  );
  r = r && ([...ms932Encoder.encode("矗")].join(",") === "225,222"); // U+77D7
  assertThrows(
    () => {
      ms932Encoder.encode("\u77D8");
    },
    Error,
    "encode-error: U+77D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77D9");
    },
    Error,
    "encode-error: U+77D9",
  );
  r = r &&
    ([...ms932Encoder.encode("矚矛矜")].join(",") ===
      "225,223,150,181,225,224"); // U+77DA
  assertThrows(
    () => {
      ms932Encoder.encode("\u77DD");
    },
    Error,
    "encode-error: U+77DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77DE");
    },
    Error,
    "encode-error: U+77DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77DF");
    },
    Error,
    "encode-error: U+77DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77E0");
    },
    Error,
    "encode-error: U+77E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77E1");
    },
    Error,
    "encode-error: U+77E1",
  );
  r = r && ([...ms932Encoder.encode("矢矣")].join(",") === "150,238,225,225"); // U+77E2
  assertThrows(
    () => {
      ms932Encoder.encode("\u77E4");
    },
    Error,
    "encode-error: U+77E4",
  );
  r = r && ([...ms932Encoder.encode("知")].join(",") === "146,109"); // U+77E5
  assertThrows(
    () => {
      ms932Encoder.encode("\u77E6");
    },
    Error,
    "encode-error: U+77E6",
  );
  r = r && ([...ms932Encoder.encode("矧")].join(",") === "148,138"); // U+77E7
  assertThrows(
    () => {
      ms932Encoder.encode("\u77E8");
    },
    Error,
    "encode-error: U+77E8",
  );
  r = r && ([...ms932Encoder.encode("矩")].join(",") === "139,233"); // U+77E9
  assertThrows(
    () => {
      ms932Encoder.encode("\u77EA");
    },
    Error,
    "encode-error: U+77EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77EB");
    },
    Error,
    "encode-error: U+77EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77EC");
    },
    Error,
    "encode-error: U+77EC",
  );
  r = r &&
    ([...ms932Encoder.encode("短矮矯")].join(",") === "146,90,225,226,139,184"); // U+77ED
  assertThrows(
    () => {
      ms932Encoder.encode("\u77F0");
    },
    Error,
    "encode-error: U+77F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77F1");
    },
    Error,
    "encode-error: U+77F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77F2");
    },
    Error,
    "encode-error: U+77F2",
  );
  r = r && ([...ms932Encoder.encode("石")].join(",") === "144,206"); // U+77F3
  assertThrows(
    () => {
      ms932Encoder.encode("\u77F4");
    },
    Error,
    "encode-error: U+77F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77F5");
    },
    Error,
    "encode-error: U+77F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77F6");
    },
    Error,
    "encode-error: U+77F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77F7");
    },
    Error,
    "encode-error: U+77F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77F8");
    },
    Error,
    "encode-error: U+77F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77F9");
    },
    Error,
    "encode-error: U+77F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77FA");
    },
    Error,
    "encode-error: U+77FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77FB");
    },
    Error,
    "encode-error: U+77FB",
  );
  r = r && ([...ms932Encoder.encode("矼")].join(",") === "225,227"); // U+77FC
  assertThrows(
    () => {
      ms932Encoder.encode("\u77FD");
    },
    Error,
    "encode-error: U+77FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77FE");
    },
    Error,
    "encode-error: U+77FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u77FF");
    },
    Error,
    "encode-error: U+77FF",
  );

  assertStrictEquals(r, true);
});
