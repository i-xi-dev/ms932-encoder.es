import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+8400-U+87FF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u8400");
    },
    Error,
    "encode-error: U+8400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8401");
    },
    Error,
    "encode-error: U+8401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8402");
    },
    Error,
    "encode-error: U+8402",
  );
  r = r && ([...ms932Encoder.encode("萃萄")].join(",") === "228,194,147,184"); // U+8403
  assertThrows(
    () => {
      ms932Encoder.encode("\u8405");
    },
    Error,
    "encode-error: U+8405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8406");
    },
    Error,
    "encode-error: U+8406",
  );
  r = r && ([...ms932Encoder.encode("萇")].join(",") === "228,199"); // U+8407
  assertThrows(
    () => {
      ms932Encoder.encode("\u8408");
    },
    Error,
    "encode-error: U+8408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8409");
    },
    Error,
    "encode-error: U+8409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u840A");
    },
    Error,
    "encode-error: U+840A",
  );
  r = r &&
    ([...ms932Encoder.encode("萋萌萍萎")].join(",") ===
      "228,196,150,71,228,202,136,222"); // U+840B
  assertThrows(
    () => {
      ms932Encoder.encode("\u840F");
    },
    Error,
    "encode-error: U+840F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8410");
    },
    Error,
    "encode-error: U+8410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8411");
    },
    Error,
    "encode-error: U+8411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8412");
    },
    Error,
    "encode-error: U+8412",
  );
  r = r && ([...ms932Encoder.encode("萓")].join(",") === "228,190"); // U+8413
  assertThrows(
    () => {
      ms932Encoder.encode("\u8414");
    },
    Error,
    "encode-error: U+8414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8415");
    },
    Error,
    "encode-error: U+8415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8416");
    },
    Error,
    "encode-error: U+8416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8417");
    },
    Error,
    "encode-error: U+8417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8418");
    },
    Error,
    "encode-error: U+8418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8419");
    },
    Error,
    "encode-error: U+8419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u841A");
    },
    Error,
    "encode-error: U+841A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u841B");
    },
    Error,
    "encode-error: U+841B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u841C");
    },
    Error,
    "encode-error: U+841C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u841D");
    },
    Error,
    "encode-error: U+841D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u841E");
    },
    Error,
    "encode-error: U+841E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u841F");
    },
    Error,
    "encode-error: U+841F",
  );
  r = r && ([...ms932Encoder.encode("萠")].join(",") === "228,204"); // U+8420
  assertThrows(
    () => {
      ms932Encoder.encode("\u8421");
    },
    Error,
    "encode-error: U+8421",
  );
  r = r && ([...ms932Encoder.encode("萢")].join(",") === "228,203"); // U+8422
  assertThrows(
    () => {
      ms932Encoder.encode("\u8423");
    },
    Error,
    "encode-error: U+8423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8424");
    },
    Error,
    "encode-error: U+8424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8425");
    },
    Error,
    "encode-error: U+8425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8426");
    },
    Error,
    "encode-error: U+8426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8427");
    },
    Error,
    "encode-error: U+8427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8428");
    },
    Error,
    "encode-error: U+8428",
  );
  r = r && ([...ms932Encoder.encode("萩萪")].join(",") === "148,139,228,210"); // U+8429
  assertThrows(
    () => {
      ms932Encoder.encode("\u842B");
    },
    Error,
    "encode-error: U+842B",
  );
  r = r && ([...ms932Encoder.encode("萬")].join(",") === "228,221"); // U+842C
  assertThrows(
    () => {
      ms932Encoder.encode("\u842D");
    },
    Error,
    "encode-error: U+842D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u842E");
    },
    Error,
    "encode-error: U+842E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u842F");
    },
    Error,
    "encode-error: U+842F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8430");
    },
    Error,
    "encode-error: U+8430",
  );
  r = r && ([...ms932Encoder.encode("萱")].join(",") === "138,158"); // U+8431
  assertThrows(
    () => {
      ms932Encoder.encode("\u8432");
    },
    Error,
    "encode-error: U+8432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8433");
    },
    Error,
    "encode-error: U+8433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8434");
    },
    Error,
    "encode-error: U+8434",
  );
  r = r && ([...ms932Encoder.encode("萵")].join(",") === "228,224"); // U+8435
  assertThrows(
    () => {
      ms932Encoder.encode("\u8436");
    },
    Error,
    "encode-error: U+8436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8437");
    },
    Error,
    "encode-error: U+8437",
  );
  r = r && ([...ms932Encoder.encode("萸")].join(",") === "228,206"); // U+8438
  assertThrows(
    () => {
      ms932Encoder.encode("\u8439");
    },
    Error,
    "encode-error: U+8439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u843A");
    },
    Error,
    "encode-error: U+843A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u843B");
    },
    Error,
    "encode-error: U+843B",
  );
  r = r && ([...ms932Encoder.encode("萼落")].join(",") === "228,211,151,142"); // U+843C
  assertThrows(
    () => {
      ms932Encoder.encode("\u843E");
    },
    Error,
    "encode-error: U+843E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u843F");
    },
    Error,
    "encode-error: U+843F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8440");
    },
    Error,
    "encode-error: U+8440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8441");
    },
    Error,
    "encode-error: U+8441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8442");
    },
    Error,
    "encode-error: U+8442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8443");
    },
    Error,
    "encode-error: U+8443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8444");
    },
    Error,
    "encode-error: U+8444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8445");
    },
    Error,
    "encode-error: U+8445",
  );
  r = r && ([...ms932Encoder.encode("葆")].join(",") === "228,220"); // U+8446
  assertThrows(
    () => {
      ms932Encoder.encode("\u8447");
    },
    Error,
    "encode-error: U+8447",
  );
  r = r && ([...ms932Encoder.encode("葈葉")].join(",") === "251,152,151,116"); // U+8448
  assertThrows(
    () => {
      ms932Encoder.encode("\u844A");
    },
    Error,
    "encode-error: U+844A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u844B");
    },
    Error,
    "encode-error: U+844B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u844C");
    },
    Error,
    "encode-error: U+844C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u844D");
    },
    Error,
    "encode-error: U+844D",
  );
  r = r && ([...ms932Encoder.encode("葎")].join(",") === "151,168"); // U+844E
  assertThrows(
    () => {
      ms932Encoder.encode("\u844F");
    },
    Error,
    "encode-error: U+844F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8450");
    },
    Error,
    "encode-error: U+8450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8451");
    },
    Error,
    "encode-error: U+8451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8452");
    },
    Error,
    "encode-error: U+8452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8453");
    },
    Error,
    "encode-error: U+8453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8454");
    },
    Error,
    "encode-error: U+8454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8455");
    },
    Error,
    "encode-error: U+8455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8456");
    },
    Error,
    "encode-error: U+8456",
  );
  r = r && ([...ms932Encoder.encode("著")].join(",") === "146,152"); // U+8457
  assertThrows(
    () => {
      ms932Encoder.encode("\u8458");
    },
    Error,
    "encode-error: U+8458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8459");
    },
    Error,
    "encode-error: U+8459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u845A");
    },
    Error,
    "encode-error: U+845A",
  );
  r = r && ([...ms932Encoder.encode("葛")].join(",") === "138,139"); // U+845B
  assertThrows(
    () => {
      ms932Encoder.encode("\u845C");
    },
    Error,
    "encode-error: U+845C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u845D");
    },
    Error,
    "encode-error: U+845D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u845E");
    },
    Error,
    "encode-error: U+845E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u845F");
    },
    Error,
    "encode-error: U+845F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8460");
    },
    Error,
    "encode-error: U+8460",
  );
  r = r &&
    ([...ms932Encoder.encode("葡葢董")].join(",") ===
      "149,146,228,226,147,159"); // U+8461
  assertThrows(
    () => {
      ms932Encoder.encode("\u8464");
    },
    Error,
    "encode-error: U+8464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8465");
    },
    Error,
    "encode-error: U+8465",
  );
  r = r && ([...ms932Encoder.encode("葦")].join(",") === "136,175"); // U+8466
  assertThrows(
    () => {
      ms932Encoder.encode("\u8467");
    },
    Error,
    "encode-error: U+8467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8468");
    },
    Error,
    "encode-error: U+8468",
  );
  r = r && ([...ms932Encoder.encode("葩")].join(",") === "228,219"); // U+8469
  assertThrows(
    () => {
      ms932Encoder.encode("\u846A");
    },
    Error,
    "encode-error: U+846A",
  );
  r = r &&
    ([...ms932Encoder.encode("葫葬葭葮葯")].join(",") ===
      "228,215,145,146,228,209,228,217,228,222"); // U+846B
  assertThrows(
    () => {
      ms932Encoder.encode("\u8470");
    },
    Error,
    "encode-error: U+8470",
  );
  r = r && ([...ms932Encoder.encode("葱")].join(",") === "148,75"); // U+8471
  assertThrows(
    () => {
      ms932Encoder.encode("\u8472");
    },
    Error,
    "encode-error: U+8472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8473");
    },
    Error,
    "encode-error: U+8473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8474");
    },
    Error,
    "encode-error: U+8474",
  );
  r = r && ([...ms932Encoder.encode("葵")].join(",") === "136,168"); // U+8475
  assertThrows(
    () => {
      ms932Encoder.encode("\u8476");
    },
    Error,
    "encode-error: U+8476",
  );
  r = r && ([...ms932Encoder.encode("葷")].join(",") === "228,214"); // U+8477
  assertThrows(
    () => {
      ms932Encoder.encode("\u8478");
    },
    Error,
    "encode-error: U+8478",
  );
  r = r && ([...ms932Encoder.encode("葹葺")].join(",") === "228,223,149,152"); // U+8479
  assertThrows(
    () => {
      ms932Encoder.encode("\u847B");
    },
    Error,
    "encode-error: U+847B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u847C");
    },
    Error,
    "encode-error: U+847C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u847D");
    },
    Error,
    "encode-error: U+847D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u847E");
    },
    Error,
    "encode-error: U+847E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u847F");
    },
    Error,
    "encode-error: U+847F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8480");
    },
    Error,
    "encode-error: U+8480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8481");
    },
    Error,
    "encode-error: U+8481",
  );
  r = r && ([...ms932Encoder.encode("蒂")].join(",") === "228,218"); // U+8482
  assertThrows(
    () => {
      ms932Encoder.encode("\u8483");
    },
    Error,
    "encode-error: U+8483",
  );
  r = r && ([...ms932Encoder.encode("蒄")].join(",") === "228,213"); // U+8484
  assertThrows(
    () => {
      ms932Encoder.encode("\u8485");
    },
    Error,
    "encode-error: U+8485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8486");
    },
    Error,
    "encode-error: U+8486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8487");
    },
    Error,
    "encode-error: U+8487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8488");
    },
    Error,
    "encode-error: U+8488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8489");
    },
    Error,
    "encode-error: U+8489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u848A");
    },
    Error,
    "encode-error: U+848A",
  );
  r = r && ([...ms932Encoder.encode("蒋")].join(",") === "143,211"); // U+848B
  assertThrows(
    () => {
      ms932Encoder.encode("\u848C");
    },
    Error,
    "encode-error: U+848C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u848D");
    },
    Error,
    "encode-error: U+848D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u848E");
    },
    Error,
    "encode-error: U+848E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u848F");
    },
    Error,
    "encode-error: U+848F",
  );
  r = r && ([...ms932Encoder.encode("蒐")].join(",") === "143,78"); // U+8490
  assertThrows(
    () => {
      ms932Encoder.encode("\u8491");
    },
    Error,
    "encode-error: U+8491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8492");
    },
    Error,
    "encode-error: U+8492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8493");
    },
    Error,
    "encode-error: U+8493",
  );
  r = r && ([...ms932Encoder.encode("蒔")].join(",") === "142,170"); // U+8494
  assertThrows(
    () => {
      ms932Encoder.encode("\u8495");
    },
    Error,
    "encode-error: U+8495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8496");
    },
    Error,
    "encode-error: U+8496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8497");
    },
    Error,
    "encode-error: U+8497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8498");
    },
    Error,
    "encode-error: U+8498",
  );
  r = r && ([...ms932Encoder.encode("蒙")].join(",") === "150,214"); // U+8499
  assertThrows(
    () => {
      ms932Encoder.encode("\u849A");
    },
    Error,
    "encode-error: U+849A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u849B");
    },
    Error,
    "encode-error: U+849B",
  );
  r = r && ([...ms932Encoder.encode("蒜")].join(",") === "149,102"); // U+849C
  assertThrows(
    () => {
      ms932Encoder.encode("\u849D");
    },
    Error,
    "encode-error: U+849D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u849E");
    },
    Error,
    "encode-error: U+849E",
  );
  r = r && ([...ms932Encoder.encode("蒟")].join(",") === "228,229"); // U+849F
  assertThrows(
    () => {
      ms932Encoder.encode("\u84A0");
    },
    Error,
    "encode-error: U+84A0",
  );
  r = r && ([...ms932Encoder.encode("蒡")].join(",") === "228,238"); // U+84A1
  assertThrows(
    () => {
      ms932Encoder.encode("\u84A2");
    },
    Error,
    "encode-error: U+84A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84A3");
    },
    Error,
    "encode-error: U+84A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84A4");
    },
    Error,
    "encode-error: U+84A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84A5");
    },
    Error,
    "encode-error: U+84A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84A6");
    },
    Error,
    "encode-error: U+84A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84A7");
    },
    Error,
    "encode-error: U+84A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84A8");
    },
    Error,
    "encode-error: U+84A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84A9");
    },
    Error,
    "encode-error: U+84A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84AA");
    },
    Error,
    "encode-error: U+84AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84AB");
    },
    Error,
    "encode-error: U+84AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84AC");
    },
    Error,
    "encode-error: U+84AC",
  );
  r = r && ([...ms932Encoder.encode("蒭")].join(",") === "228,216"); // U+84AD
  assertThrows(
    () => {
      ms932Encoder.encode("\u84AE");
    },
    Error,
    "encode-error: U+84AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84AF");
    },
    Error,
    "encode-error: U+84AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84B0");
    },
    Error,
    "encode-error: U+84B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84B1");
    },
    Error,
    "encode-error: U+84B1",
  );
  r = r && ([...ms932Encoder.encode("蒲")].join(",") === "138,151"); // U+84B2
  assertThrows(
    () => {
      ms932Encoder.encode("\u84B3");
    },
    Error,
    "encode-error: U+84B3",
  );
  r = r && ([...ms932Encoder.encode("蒴")].join(",") === "251,153"); // U+84B4
  assertThrows(
    () => {
      ms932Encoder.encode("\u84B5");
    },
    Error,
    "encode-error: U+84B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84B6");
    },
    Error,
    "encode-error: U+84B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84B7");
    },
    Error,
    "encode-error: U+84B7",
  );
  r = r && ([...ms932Encoder.encode("蒸蒹")].join(",") === "143,246,228,227"); // U+84B8
  assertThrows(
    () => {
      ms932Encoder.encode("\u84BA");
    },
    Error,
    "encode-error: U+84BA",
  );
  r = r && ([...ms932Encoder.encode("蒻蒼")].join(",") === "228,232,145,147"); // U+84BB
  assertThrows(
    () => {
      ms932Encoder.encode("\u84BD");
    },
    Error,
    "encode-error: U+84BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84BE");
    },
    Error,
    "encode-error: U+84BE",
  );
  r = r && ([...ms932Encoder.encode("蒿")].join(",") === "228,228"); // U+84BF
  assertThrows(
    () => {
      ms932Encoder.encode("\u84C0");
    },
    Error,
    "encode-error: U+84C0",
  );
  r = r && ([...ms932Encoder.encode("蓁")].join(",") === "228,235"); // U+84C1
  assertThrows(
    () => {
      ms932Encoder.encode("\u84C2");
    },
    Error,
    "encode-error: U+84C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84C3");
    },
    Error,
    "encode-error: U+84C3",
  );
  r = r && ([...ms932Encoder.encode("蓄")].join(",") === "146,126"); // U+84C4
  assertThrows(
    () => {
      ms932Encoder.encode("\u84C5");
    },
    Error,
    "encode-error: U+84C5",
  );
  r = r && ([...ms932Encoder.encode("蓆")].join(",") === "228,236"); // U+84C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u84C7");
    },
    Error,
    "encode-error: U+84C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84C8");
    },
    Error,
    "encode-error: U+84C8",
  );
  r = r &&
    ([...ms932Encoder.encode("蓉蓊蓋")].join(",") === "151,117,228,225,138,87"); // U+84C9
  assertThrows(
    () => {
      ms932Encoder.encode("\u84CC");
    },
    Error,
    "encode-error: U+84CC",
  );
  r = r && ([...ms932Encoder.encode("蓍")].join(",") === "228,231"); // U+84CD
  assertThrows(
    () => {
      ms932Encoder.encode("\u84CE");
    },
    Error,
    "encode-error: U+84CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84CF");
    },
    Error,
    "encode-error: U+84CF",
  );
  r = r && ([...ms932Encoder.encode("蓐蓑")].join(",") === "228,234,150,170"); // U+84D0
  assertThrows(
    () => {
      ms932Encoder.encode("\u84D2");
    },
    Error,
    "encode-error: U+84D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84D3");
    },
    Error,
    "encode-error: U+84D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84D4");
    },
    Error,
    "encode-error: U+84D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84D5");
    },
    Error,
    "encode-error: U+84D5",
  );
  r = r && ([...ms932Encoder.encode("蓖")].join(",") === "228,237"); // U+84D6
  assertThrows(
    () => {
      ms932Encoder.encode("\u84D7");
    },
    Error,
    "encode-error: U+84D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84D8");
    },
    Error,
    "encode-error: U+84D8",
  );
  r = r && ([...ms932Encoder.encode("蓙蓚")].join(",") === "228,230,228,233"); // U+84D9
  assertThrows(
    () => {
      ms932Encoder.encode("\u84DB");
    },
    Error,
    "encode-error: U+84DB",
  );
  r = r && ([...ms932Encoder.encode("蓜")].join(",") === "250,96"); // U+84DC
  assertThrows(
    () => {
      ms932Encoder.encode("\u84DD");
    },
    Error,
    "encode-error: U+84DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84DE");
    },
    Error,
    "encode-error: U+84DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84DF");
    },
    Error,
    "encode-error: U+84DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84E0");
    },
    Error,
    "encode-error: U+84E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84E1");
    },
    Error,
    "encode-error: U+84E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84E2");
    },
    Error,
    "encode-error: U+84E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84E3");
    },
    Error,
    "encode-error: U+84E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84E4");
    },
    Error,
    "encode-error: U+84E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84E5");
    },
    Error,
    "encode-error: U+84E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84E6");
    },
    Error,
    "encode-error: U+84E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84E7");
    },
    Error,
    "encode-error: U+84E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84E8");
    },
    Error,
    "encode-error: U+84E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84E9");
    },
    Error,
    "encode-error: U+84E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84EA");
    },
    Error,
    "encode-error: U+84EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84EB");
    },
    Error,
    "encode-error: U+84EB",
  );
  r = r && ([...ms932Encoder.encode("蓬")].join(",") === "150,72"); // U+84EC
  assertThrows(
    () => {
      ms932Encoder.encode("\u84ED");
    },
    Error,
    "encode-error: U+84ED",
  );
  r = r && ([...ms932Encoder.encode("蓮")].join(",") === "152,64"); // U+84EE
  assertThrows(
    () => {
      ms932Encoder.encode("\u84EF");
    },
    Error,
    "encode-error: U+84EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84F0");
    },
    Error,
    "encode-error: U+84F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84F1");
    },
    Error,
    "encode-error: U+84F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84F2");
    },
    Error,
    "encode-error: U+84F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84F3");
    },
    Error,
    "encode-error: U+84F3",
  );
  r = r && ([...ms932Encoder.encode("蓴")].join(",") === "228,241"); // U+84F4
  assertThrows(
    () => {
      ms932Encoder.encode("\u84F5");
    },
    Error,
    "encode-error: U+84F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84F6");
    },
    Error,
    "encode-error: U+84F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84F7");
    },
    Error,
    "encode-error: U+84F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84F8");
    },
    Error,
    "encode-error: U+84F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84F9");
    },
    Error,
    "encode-error: U+84F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84FA");
    },
    Error,
    "encode-error: U+84FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84FB");
    },
    Error,
    "encode-error: U+84FB",
  );
  r = r && ([...ms932Encoder.encode("蓼")].join(",") === "228,248"); // U+84FC
  assertThrows(
    () => {
      ms932Encoder.encode("\u84FD");
    },
    Error,
    "encode-error: U+84FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u84FE");
    },
    Error,
    "encode-error: U+84FE",
  );
  r = r && ([...ms932Encoder.encode("蓿蔀")].join(",") === "228,240,142,193"); // U+84FF
  assertThrows(
    () => {
      ms932Encoder.encode("\u8501");
    },
    Error,
    "encode-error: U+8501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8502");
    },
    Error,
    "encode-error: U+8502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8503");
    },
    Error,
    "encode-error: U+8503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8504");
    },
    Error,
    "encode-error: U+8504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8505");
    },
    Error,
    "encode-error: U+8505",
  );
  r = r && ([...ms932Encoder.encode("蔆")].join(",") === "228,207"); // U+8506
  assertThrows(
    () => {
      ms932Encoder.encode("\u8507");
    },
    Error,
    "encode-error: U+8507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8508");
    },
    Error,
    "encode-error: U+8508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8509");
    },
    Error,
    "encode-error: U+8509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u850A");
    },
    Error,
    "encode-error: U+850A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u850B");
    },
    Error,
    "encode-error: U+850B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u850C");
    },
    Error,
    "encode-error: U+850C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u850D");
    },
    Error,
    "encode-error: U+850D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u850E");
    },
    Error,
    "encode-error: U+850E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u850F");
    },
    Error,
    "encode-error: U+850F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8510");
    },
    Error,
    "encode-error: U+8510",
  );
  r = r && ([...ms932Encoder.encode("蔑")].join(",") === "149,204"); // U+8511
  assertThrows(
    () => {
      ms932Encoder.encode("\u8512");
    },
    Error,
    "encode-error: U+8512",
  );
  r = r &&
    ([...ms932Encoder.encode("蔓蔔蔕")].join(",") ===
      "150,160,228,247,228,246"); // U+8513
  assertThrows(
    () => {
      ms932Encoder.encode("\u8516");
    },
    Error,
    "encode-error: U+8516",
  );
  r = r && ([...ms932Encoder.encode("蔗蔘")].join(",") === "228,242,228,243"); // U+8517
  assertThrows(
    () => {
      ms932Encoder.encode("\u8519");
    },
    Error,
    "encode-error: U+8519",
  );
  r = r && ([...ms932Encoder.encode("蔚")].join(",") === "137,85"); // U+851A
  assertThrows(
    () => {
      ms932Encoder.encode("\u851B");
    },
    Error,
    "encode-error: U+851B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u851C");
    },
    Error,
    "encode-error: U+851C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u851D");
    },
    Error,
    "encode-error: U+851D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u851E");
    },
    Error,
    "encode-error: U+851E",
  );
  r = r && ([...ms932Encoder.encode("蔟")].join(",") === "228,245"); // U+851F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8520");
    },
    Error,
    "encode-error: U+8520",
  );
  r = r && ([...ms932Encoder.encode("蔡")].join(",") === "228,239"); // U+8521
  assertThrows(
    () => {
      ms932Encoder.encode("\u8522");
    },
    Error,
    "encode-error: U+8522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8523");
    },
    Error,
    "encode-error: U+8523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8524");
    },
    Error,
    "encode-error: U+8524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8525");
    },
    Error,
    "encode-error: U+8525",
  );
  r = r && ([...ms932Encoder.encode("蔦")].join(",") === "146,211"); // U+8526
  assertThrows(
    () => {
      ms932Encoder.encode("\u8527");
    },
    Error,
    "encode-error: U+8527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8528");
    },
    Error,
    "encode-error: U+8528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8529");
    },
    Error,
    "encode-error: U+8529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u852A");
    },
    Error,
    "encode-error: U+852A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u852B");
    },
    Error,
    "encode-error: U+852B",
  );
  r = r && ([...ms932Encoder.encode("蔬蔭")].join(",") === "228,244,136,252"); // U+852C
  assertThrows(
    () => {
      ms932Encoder.encode("\u852E");
    },
    Error,
    "encode-error: U+852E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u852F");
    },
    Error,
    "encode-error: U+852F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8530");
    },
    Error,
    "encode-error: U+8530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8531");
    },
    Error,
    "encode-error: U+8531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8532");
    },
    Error,
    "encode-error: U+8532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8533");
    },
    Error,
    "encode-error: U+8533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8534");
    },
    Error,
    "encode-error: U+8534",
  );
  r = r && ([...ms932Encoder.encode("蔵")].join(",") === "145,160"); // U+8535
  assertThrows(
    () => {
      ms932Encoder.encode("\u8536");
    },
    Error,
    "encode-error: U+8536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8537");
    },
    Error,
    "encode-error: U+8537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8538");
    },
    Error,
    "encode-error: U+8538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8539");
    },
    Error,
    "encode-error: U+8539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u853A");
    },
    Error,
    "encode-error: U+853A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u853B");
    },
    Error,
    "encode-error: U+853B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u853C");
    },
    Error,
    "encode-error: U+853C",
  );
  r = r && ([...ms932Encoder.encode("蔽")].join(",") === "149,193"); // U+853D
  assertThrows(
    () => {
      ms932Encoder.encode("\u853E");
    },
    Error,
    "encode-error: U+853E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u853F");
    },
    Error,
    "encode-error: U+853F",
  );
  r = r && ([...ms932Encoder.encode("蕀蕁")].join(",") === "228,249,229,64"); // U+8540
  assertThrows(
    () => {
      ms932Encoder.encode("\u8542");
    },
    Error,
    "encode-error: U+8542",
  );
  r = r && ([...ms932Encoder.encode("蕃")].join(",") === "148,215"); // U+8543
  assertThrows(
    () => {
      ms932Encoder.encode("\u8544");
    },
    Error,
    "encode-error: U+8544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8545");
    },
    Error,
    "encode-error: U+8545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8546");
    },
    Error,
    "encode-error: U+8546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8547");
    },
    Error,
    "encode-error: U+8547",
  );
  r = r &&
    ([...ms932Encoder.encode("蕈蕉蕊蕋")].join(",") ===
      "228,252,143,212,142,199,229,66"); // U+8548
  assertThrows(
    () => {
      ms932Encoder.encode("\u854C");
    },
    Error,
    "encode-error: U+854C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u854D");
    },
    Error,
    "encode-error: U+854D",
  );
  r = r && ([...ms932Encoder.encode("蕎")].join(",") === "139,188"); // U+854E
  assertThrows(
    () => {
      ms932Encoder.encode("\u854F");
    },
    Error,
    "encode-error: U+854F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8550");
    },
    Error,
    "encode-error: U+8550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8551");
    },
    Error,
    "encode-error: U+8551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8552");
    },
    Error,
    "encode-error: U+8552",
  );
  r = r && ([...ms932Encoder.encode("蕓")].join(",") === "251,154"); // U+8553
  assertThrows(
    () => {
      ms932Encoder.encode("\u8554");
    },
    Error,
    "encode-error: U+8554",
  );
  r = r && ([...ms932Encoder.encode("蕕")].join(",") === "229,67"); // U+8555
  assertThrows(
    () => {
      ms932Encoder.encode("\u8556");
    },
    Error,
    "encode-error: U+8556",
  );
  r = r &&
    ([...ms932Encoder.encode("蕗蕘蕙蕚")].join(",") ===
      "149,153,228,251,251,155,228,212"); // U+8557
  assertThrows(
    () => {
      ms932Encoder.encode("\u855B");
    },
    Error,
    "encode-error: U+855B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u855C");
    },
    Error,
    "encode-error: U+855C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u855D");
    },
    Error,
    "encode-error: U+855D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u855E");
    },
    Error,
    "encode-error: U+855E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u855F");
    },
    Error,
    "encode-error: U+855F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8560");
    },
    Error,
    "encode-error: U+8560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8561");
    },
    Error,
    "encode-error: U+8561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8562");
    },
    Error,
    "encode-error: U+8562",
  );
  r = r && ([...ms932Encoder.encode("蕣")].join(",") === "228,250"); // U+8563
  assertThrows(
    () => {
      ms932Encoder.encode("\u8564");
    },
    Error,
    "encode-error: U+8564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8565");
    },
    Error,
    "encode-error: U+8565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8566");
    },
    Error,
    "encode-error: U+8566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8567");
    },
    Error,
    "encode-error: U+8567",
  );
  r = r &&
    ([...ms932Encoder.encode("蕨蕩蕪蕫")].join(",") ===
      "152,110,147,160,149,147,251,156"); // U+8568
  assertThrows(
    () => {
      ms932Encoder.encode("\u856C");
    },
    Error,
    "encode-error: U+856C",
  );
  r = r && ([...ms932Encoder.encode("蕭")].join(",") === "229,74"); // U+856D
  assertThrows(
    () => {
      ms932Encoder.encode("\u856E");
    },
    Error,
    "encode-error: U+856E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u856F");
    },
    Error,
    "encode-error: U+856F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8570");
    },
    Error,
    "encode-error: U+8570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8571");
    },
    Error,
    "encode-error: U+8571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8572");
    },
    Error,
    "encode-error: U+8572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8573");
    },
    Error,
    "encode-error: U+8573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8574");
    },
    Error,
    "encode-error: U+8574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8575");
    },
    Error,
    "encode-error: U+8575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8576");
    },
    Error,
    "encode-error: U+8576",
  );
  r = r && ([...ms932Encoder.encode("蕷")].join(",") === "229,80"); // U+8577
  assertThrows(
    () => {
      ms932Encoder.encode("\u8578");
    },
    Error,
    "encode-error: U+8578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8579");
    },
    Error,
    "encode-error: U+8579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u857A");
    },
    Error,
    "encode-error: U+857A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u857B");
    },
    Error,
    "encode-error: U+857B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u857C");
    },
    Error,
    "encode-error: U+857C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u857D");
    },
    Error,
    "encode-error: U+857D",
  );
  r = r && ([...ms932Encoder.encode("蕾")].join(",") === "229,81"); // U+857E
  assertThrows(
    () => {
      ms932Encoder.encode("\u857F");
    },
    Error,
    "encode-error: U+857F",
  );
  r = r && ([...ms932Encoder.encode("薀")].join(",") === "229,68"); // U+8580
  assertThrows(
    () => {
      ms932Encoder.encode("\u8581");
    },
    Error,
    "encode-error: U+8581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8582");
    },
    Error,
    "encode-error: U+8582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8583");
    },
    Error,
    "encode-error: U+8583",
  );
  r = r && ([...ms932Encoder.encode("薄")].join(",") === "148,150"); // U+8584
  assertThrows(
    () => {
      ms932Encoder.encode("\u8585");
    },
    Error,
    "encode-error: U+8585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8586");
    },
    Error,
    "encode-error: U+8586",
  );
  r = r && ([...ms932Encoder.encode("薇薈")].join(",") === "229,78,229,70"); // U+8587
  assertThrows(
    () => {
      ms932Encoder.encode("\u8589");
    },
    Error,
    "encode-error: U+8589",
  );
  r = r && ([...ms932Encoder.encode("薊")].join(",") === "229,72"); // U+858A
  assertThrows(
    () => {
      ms932Encoder.encode("\u858B");
    },
    Error,
    "encode-error: U+858B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u858C");
    },
    Error,
    "encode-error: U+858C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u858D");
    },
    Error,
    "encode-error: U+858D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u858E");
    },
    Error,
    "encode-error: U+858E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u858F");
    },
    Error,
    "encode-error: U+858F",
  );
  r = r && ([...ms932Encoder.encode("薐薑")].join(",") === "229,82,229,71"); // U+8590
  assertThrows(
    () => {
      ms932Encoder.encode("\u8592");
    },
    Error,
    "encode-error: U+8592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8593");
    },
    Error,
    "encode-error: U+8593",
  );
  r = r && ([...ms932Encoder.encode("薔")].join(",") === "229,75"); // U+8594
  assertThrows(
    () => {
      ms932Encoder.encode("\u8595");
    },
    Error,
    "encode-error: U+8595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8596");
    },
    Error,
    "encode-error: U+8596",
  );
  r = r && ([...ms932Encoder.encode("薗")].join(",") === "137,146"); // U+8597
  assertThrows(
    () => {
      ms932Encoder.encode("\u8598");
    },
    Error,
    "encode-error: U+8598",
  );
  r = r && ([...ms932Encoder.encode("薙")].join(",") === "147,227"); // U+8599
  assertThrows(
    () => {
      ms932Encoder.encode("\u859A");
    },
    Error,
    "encode-error: U+859A",
  );
  r = r && ([...ms932Encoder.encode("薛薜")].join(",") === "229,76,229,79"); // U+859B
  assertThrows(
    () => {
      ms932Encoder.encode("\u859D");
    },
    Error,
    "encode-error: U+859D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u859E");
    },
    Error,
    "encode-error: U+859E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u859F");
    },
    Error,
    "encode-error: U+859F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85A0");
    },
    Error,
    "encode-error: U+85A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85A1");
    },
    Error,
    "encode-error: U+85A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85A2");
    },
    Error,
    "encode-error: U+85A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85A3");
    },
    Error,
    "encode-error: U+85A3",
  );
  r = r && ([...ms932Encoder.encode("薤")].join(",") === "229,69"); // U+85A4
  assertThrows(
    () => {
      ms932Encoder.encode("\u85A5");
    },
    Error,
    "encode-error: U+85A5",
  );
  r = r && ([...ms932Encoder.encode("薦")].join(",") === "145,69"); // U+85A6
  assertThrows(
    () => {
      ms932Encoder.encode("\u85A7");
    },
    Error,
    "encode-error: U+85A7",
  );
  r = r &&
    ([...ms932Encoder.encode("薨薩薪薫薬")].join(",") ===
      "229,73,142,70,144,100,140,79,150,242"); // U+85A8
  assertThrows(
    () => {
      ms932Encoder.encode("\u85AD");
    },
    Error,
    "encode-error: U+85AD",
  );
  r = r &&
    ([...ms932Encoder.encode("薮薯薰")].join(",") ===
      "150,247,143,146,251,158"); // U+85AE
  assertThrows(
    () => {
      ms932Encoder.encode("\u85B1");
    },
    Error,
    "encode-error: U+85B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85B2");
    },
    Error,
    "encode-error: U+85B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85B3");
    },
    Error,
    "encode-error: U+85B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85B4");
    },
    Error,
    "encode-error: U+85B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85B5");
    },
    Error,
    "encode-error: U+85B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85B6");
    },
    Error,
    "encode-error: U+85B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85B7");
    },
    Error,
    "encode-error: U+85B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85B8");
    },
    Error,
    "encode-error: U+85B8",
  );
  r = r && ([...ms932Encoder.encode("薹薺")].join(",") === "229,86,229,84"); // U+85B9
  assertThrows(
    () => {
      ms932Encoder.encode("\u85BB");
    },
    Error,
    "encode-error: U+85BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85BC");
    },
    Error,
    "encode-error: U+85BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85BD");
    },
    Error,
    "encode-error: U+85BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85BE");
    },
    Error,
    "encode-error: U+85BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85BF");
    },
    Error,
    "encode-error: U+85BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85C0");
    },
    Error,
    "encode-error: U+85C0",
  );
  r = r && ([...ms932Encoder.encode("藁")].join(",") === "152,109"); // U+85C1
  assertThrows(
    () => {
      ms932Encoder.encode("\u85C2");
    },
    Error,
    "encode-error: U+85C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85C3");
    },
    Error,
    "encode-error: U+85C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85C4");
    },
    Error,
    "encode-error: U+85C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85C5");
    },
    Error,
    "encode-error: U+85C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85C6");
    },
    Error,
    "encode-error: U+85C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85C7");
    },
    Error,
    "encode-error: U+85C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85C8");
    },
    Error,
    "encode-error: U+85C8",
  );
  r = r && ([...ms932Encoder.encode("藉")].join(",") === "229,83"); // U+85C9
  assertThrows(
    () => {
      ms932Encoder.encode("\u85CA");
    },
    Error,
    "encode-error: U+85CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85CB");
    },
    Error,
    "encode-error: U+85CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85CC");
    },
    Error,
    "encode-error: U+85CC",
  );
  r = r && ([...ms932Encoder.encode("藍")].join(",") === "151,149"); // U+85CD
  assertThrows(
    () => {
      ms932Encoder.encode("\u85CE");
    },
    Error,
    "encode-error: U+85CE",
  );
  r = r && ([...ms932Encoder.encode("藏藐")].join(",") === "229,85,229,87"); // U+85CF
  assertThrows(
    () => {
      ms932Encoder.encode("\u85D1");
    },
    Error,
    "encode-error: U+85D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85D2");
    },
    Error,
    "encode-error: U+85D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85D3");
    },
    Error,
    "encode-error: U+85D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85D4");
    },
    Error,
    "encode-error: U+85D4",
  );
  r = r && ([...ms932Encoder.encode("藕")].join(",") === "229,88"); // U+85D5
  assertThrows(
    () => {
      ms932Encoder.encode("\u85D6");
    },
    Error,
    "encode-error: U+85D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85D7");
    },
    Error,
    "encode-error: U+85D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85D8");
    },
    Error,
    "encode-error: U+85D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85D9");
    },
    Error,
    "encode-error: U+85D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85DA");
    },
    Error,
    "encode-error: U+85DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85DB");
    },
    Error,
    "encode-error: U+85DB",
  );
  r = r && ([...ms932Encoder.encode("藜藝")].join(",") === "229,91,229,89"); // U+85DC
  assertThrows(
    () => {
      ms932Encoder.encode("\u85DE");
    },
    Error,
    "encode-error: U+85DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85DF");
    },
    Error,
    "encode-error: U+85DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85E0");
    },
    Error,
    "encode-error: U+85E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85E1");
    },
    Error,
    "encode-error: U+85E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85E2");
    },
    Error,
    "encode-error: U+85E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85E3");
    },
    Error,
    "encode-error: U+85E3",
  );
  r = r && ([...ms932Encoder.encode("藤藥")].join(",") === "147,161,229,90"); // U+85E4
  assertThrows(
    () => {
      ms932Encoder.encode("\u85E6");
    },
    Error,
    "encode-error: U+85E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85E7");
    },
    Error,
    "encode-error: U+85E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85E8");
    },
    Error,
    "encode-error: U+85E8",
  );
  r = r && ([...ms932Encoder.encode("藩藪")].join(",") === "148,203,229,77"); // U+85E9
  assertThrows(
    () => {
      ms932Encoder.encode("\u85EB");
    },
    Error,
    "encode-error: U+85EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85EC");
    },
    Error,
    "encode-error: U+85EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85ED");
    },
    Error,
    "encode-error: U+85ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85EE");
    },
    Error,
    "encode-error: U+85EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85EF");
    },
    Error,
    "encode-error: U+85EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85F0");
    },
    Error,
    "encode-error: U+85F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85F1");
    },
    Error,
    "encode-error: U+85F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85F2");
    },
    Error,
    "encode-error: U+85F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85F3");
    },
    Error,
    "encode-error: U+85F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85F4");
    },
    Error,
    "encode-error: U+85F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85F5");
    },
    Error,
    "encode-error: U+85F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85F6");
    },
    Error,
    "encode-error: U+85F6",
  );
  r = r && ([...ms932Encoder.encode("藷")].join(",") === "143,147"); // U+85F7
  assertThrows(
    () => {
      ms932Encoder.encode("\u85F8");
    },
    Error,
    "encode-error: U+85F8",
  );
  r = r &&
    ([...ms932Encoder.encode("藹藺藻")].join(",") === "229,92,229,97,145,148"); // U+85F9
  assertThrows(
    () => {
      ms932Encoder.encode("\u85FC");
    },
    Error,
    "encode-error: U+85FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u85FD");
    },
    Error,
    "encode-error: U+85FD",
  );
  r = r && ([...ms932Encoder.encode("藾")].join(",") === "229,96"); // U+85FE
  assertThrows(
    () => {
      ms932Encoder.encode("\u85FF");
    },
    Error,
    "encode-error: U+85FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8600");
    },
    Error,
    "encode-error: U+8600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8601");
    },
    Error,
    "encode-error: U+8601",
  );
  r = r && ([...ms932Encoder.encode("蘂")].join(",") === "229,65"); // U+8602
  assertThrows(
    () => {
      ms932Encoder.encode("\u8603");
    },
    Error,
    "encode-error: U+8603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8604");
    },
    Error,
    "encode-error: U+8604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8605");
    },
    Error,
    "encode-error: U+8605",
  );
  r = r && ([...ms932Encoder.encode("蘆蘇")].join(",") === "229,98,145,104"); // U+8606
  assertThrows(
    () => {
      ms932Encoder.encode("\u8608");
    },
    Error,
    "encode-error: U+8608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8609");
    },
    Error,
    "encode-error: U+8609",
  );
  r = r && ([...ms932Encoder.encode("蘊蘋")].join(",") === "229,93,229,95"); // U+860A
  assertThrows(
    () => {
      ms932Encoder.encode("\u860C");
    },
    Error,
    "encode-error: U+860C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u860D");
    },
    Error,
    "encode-error: U+860D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u860E");
    },
    Error,
    "encode-error: U+860E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u860F");
    },
    Error,
    "encode-error: U+860F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8610");
    },
    Error,
    "encode-error: U+8610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8611");
    },
    Error,
    "encode-error: U+8611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8612");
    },
    Error,
    "encode-error: U+8612",
  );
  r = r && ([...ms932Encoder.encode("蘓")].join(",") === "229,94"); // U+8613
  assertThrows(
    () => {
      ms932Encoder.encode("\u8614");
    },
    Error,
    "encode-error: U+8614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8615");
    },
    Error,
    "encode-error: U+8615",
  );
  r = r && ([...ms932Encoder.encode("蘖蘗")].join(",") === "159,80,159,65"); // U+8616
  assertThrows(
    () => {
      ms932Encoder.encode("\u8618");
    },
    Error,
    "encode-error: U+8618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8619");
    },
    Error,
    "encode-error: U+8619",
  );
  r = r && ([...ms932Encoder.encode("蘚")].join(",") === "229,100"); // U+861A
  assertThrows(
    () => {
      ms932Encoder.encode("\u861B");
    },
    Error,
    "encode-error: U+861B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u861C");
    },
    Error,
    "encode-error: U+861C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u861D");
    },
    Error,
    "encode-error: U+861D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u861E");
    },
    Error,
    "encode-error: U+861E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u861F");
    },
    Error,
    "encode-error: U+861F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8620");
    },
    Error,
    "encode-error: U+8620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8621");
    },
    Error,
    "encode-error: U+8621",
  );
  r = r && ([...ms932Encoder.encode("蘢")].join(",") === "229,99"); // U+8622
  assertThrows(
    () => {
      ms932Encoder.encode("\u8623");
    },
    Error,
    "encode-error: U+8623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8624");
    },
    Error,
    "encode-error: U+8624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8625");
    },
    Error,
    "encode-error: U+8625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8626");
    },
    Error,
    "encode-error: U+8626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8627");
    },
    Error,
    "encode-error: U+8627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8628");
    },
    Error,
    "encode-error: U+8628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8629");
    },
    Error,
    "encode-error: U+8629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u862A");
    },
    Error,
    "encode-error: U+862A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u862B");
    },
    Error,
    "encode-error: U+862B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u862C");
    },
    Error,
    "encode-error: U+862C",
  );
  r = r && ([...ms932Encoder.encode("蘭")].join(",") === "151,150"); // U+862D
  assertThrows(
    () => {
      ms932Encoder.encode("\u862E");
    },
    Error,
    "encode-error: U+862E",
  );
  r = r && ([...ms932Encoder.encode("蘯蘰")].join(",") === "225,186,229,101"); // U+862F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8631");
    },
    Error,
    "encode-error: U+8631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8632");
    },
    Error,
    "encode-error: U+8632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8633");
    },
    Error,
    "encode-error: U+8633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8634");
    },
    Error,
    "encode-error: U+8634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8635");
    },
    Error,
    "encode-error: U+8635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8636");
    },
    Error,
    "encode-error: U+8636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8637");
    },
    Error,
    "encode-error: U+8637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8638");
    },
    Error,
    "encode-error: U+8638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8639");
    },
    Error,
    "encode-error: U+8639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u863A");
    },
    Error,
    "encode-error: U+863A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u863B");
    },
    Error,
    "encode-error: U+863B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u863C");
    },
    Error,
    "encode-error: U+863C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u863D");
    },
    Error,
    "encode-error: U+863D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u863E");
    },
    Error,
    "encode-error: U+863E",
  );
  r = r && ([...ms932Encoder.encode("蘿")].join(",") === "229,102"); // U+863F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8640");
    },
    Error,
    "encode-error: U+8640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8641");
    },
    Error,
    "encode-error: U+8641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8642");
    },
    Error,
    "encode-error: U+8642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8643");
    },
    Error,
    "encode-error: U+8643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8644");
    },
    Error,
    "encode-error: U+8644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8645");
    },
    Error,
    "encode-error: U+8645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8646");
    },
    Error,
    "encode-error: U+8646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8647");
    },
    Error,
    "encode-error: U+8647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8648");
    },
    Error,
    "encode-error: U+8648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8649");
    },
    Error,
    "encode-error: U+8649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u864A");
    },
    Error,
    "encode-error: U+864A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u864B");
    },
    Error,
    "encode-error: U+864B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u864C");
    },
    Error,
    "encode-error: U+864C",
  );
  r = r && ([...ms932Encoder.encode("虍虎")].join(",") === "229,103,140,213"); // U+864D
  assertThrows(
    () => {
      ms932Encoder.encode("\u864F");
    },
    Error,
    "encode-error: U+864F",
  );
  r = r && ([...ms932Encoder.encode("虐")].join(",") === "139,115"); // U+8650
  assertThrows(
    () => {
      ms932Encoder.encode("\u8651");
    },
    Error,
    "encode-error: U+8651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8652");
    },
    Error,
    "encode-error: U+8652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8653");
    },
    Error,
    "encode-error: U+8653",
  );
  r = r && ([...ms932Encoder.encode("虔處")].join(",") === "229,105,153,124"); // U+8654
  assertThrows(
    () => {
      ms932Encoder.encode("\u8656");
    },
    Error,
    "encode-error: U+8656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8657");
    },
    Error,
    "encode-error: U+8657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8658");
    },
    Error,
    "encode-error: U+8658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8659");
    },
    Error,
    "encode-error: U+8659",
  );
  r = r && ([...ms932Encoder.encode("虚")].join(",") === "139,149"); // U+865A
  assertThrows(
    () => {
      ms932Encoder.encode("\u865B");
    },
    Error,
    "encode-error: U+865B",
  );
  r = r && ([...ms932Encoder.encode("虜")].join(",") === "151,184"); // U+865C
  assertThrows(
    () => {
      ms932Encoder.encode("\u865D");
    },
    Error,
    "encode-error: U+865D",
  );
  r = r && ([...ms932Encoder.encode("虞號")].join(",") === "139,241,229,106"); // U+865E
  assertThrows(
    () => {
      ms932Encoder.encode("\u8660");
    },
    Error,
    "encode-error: U+8660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8661");
    },
    Error,
    "encode-error: U+8661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8662");
    },
    Error,
    "encode-error: U+8662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8663");
    },
    Error,
    "encode-error: U+8663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8664");
    },
    Error,
    "encode-error: U+8664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8665");
    },
    Error,
    "encode-error: U+8665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8666");
    },
    Error,
    "encode-error: U+8666",
  );
  r = r && ([...ms932Encoder.encode("虧")].join(",") === "229,107"); // U+8667
  assertThrows(
    () => {
      ms932Encoder.encode("\u8668");
    },
    Error,
    "encode-error: U+8668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8669");
    },
    Error,
    "encode-error: U+8669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u866A");
    },
    Error,
    "encode-error: U+866A",
  );
  r = r && ([...ms932Encoder.encode("虫")].join(",") === "146,142"); // U+866B
  assertThrows(
    () => {
      ms932Encoder.encode("\u866C");
    },
    Error,
    "encode-error: U+866C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u866D");
    },
    Error,
    "encode-error: U+866D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u866E");
    },
    Error,
    "encode-error: U+866E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u866F");
    },
    Error,
    "encode-error: U+866F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8670");
    },
    Error,
    "encode-error: U+8670",
  );
  r = r && ([...ms932Encoder.encode("虱")].join(",") === "229,108"); // U+8671
  assertThrows(
    () => {
      ms932Encoder.encode("\u8672");
    },
    Error,
    "encode-error: U+8672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8673");
    },
    Error,
    "encode-error: U+8673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8674");
    },
    Error,
    "encode-error: U+8674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8675");
    },
    Error,
    "encode-error: U+8675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8676");
    },
    Error,
    "encode-error: U+8676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8677");
    },
    Error,
    "encode-error: U+8677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8678");
    },
    Error,
    "encode-error: U+8678",
  );
  r = r && ([...ms932Encoder.encode("虹")].join(",") === "147,248"); // U+8679
  assertThrows(
    () => {
      ms932Encoder.encode("\u867A");
    },
    Error,
    "encode-error: U+867A",
  );
  r = r && ([...ms932Encoder.encode("虻")].join(",") === "136,184"); // U+867B
  assertThrows(
    () => {
      ms932Encoder.encode("\u867C");
    },
    Error,
    "encode-error: U+867C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u867D");
    },
    Error,
    "encode-error: U+867D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u867E");
    },
    Error,
    "encode-error: U+867E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u867F");
    },
    Error,
    "encode-error: U+867F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8680");
    },
    Error,
    "encode-error: U+8680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8681");
    },
    Error,
    "encode-error: U+8681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8682");
    },
    Error,
    "encode-error: U+8682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8683");
    },
    Error,
    "encode-error: U+8683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8684");
    },
    Error,
    "encode-error: U+8684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8685");
    },
    Error,
    "encode-error: U+8685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8686");
    },
    Error,
    "encode-error: U+8686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8687");
    },
    Error,
    "encode-error: U+8687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8688");
    },
    Error,
    "encode-error: U+8688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8689");
    },
    Error,
    "encode-error: U+8689",
  );
  r = r &&
    ([...ms932Encoder.encode("蚊蚋蚌")].join(",") ===
      "137,225,229,113,229,114"); // U+868A
  assertThrows(
    () => {
      ms932Encoder.encode("\u868D");
    },
    Error,
    "encode-error: U+868D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u868E");
    },
    Error,
    "encode-error: U+868E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u868F");
    },
    Error,
    "encode-error: U+868F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8690");
    },
    Error,
    "encode-error: U+8690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8691");
    },
    Error,
    "encode-error: U+8691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8692");
    },
    Error,
    "encode-error: U+8692",
  );
  r = r && ([...ms932Encoder.encode("蚓")].join(",") === "229,109"); // U+8693
  assertThrows(
    () => {
      ms932Encoder.encode("\u8694");
    },
    Error,
    "encode-error: U+8694",
  );
  r = r && ([...ms932Encoder.encode("蚕")].join(",") === "142,92"); // U+8695
  assertThrows(
    () => {
      ms932Encoder.encode("\u8696");
    },
    Error,
    "encode-error: U+8696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8697");
    },
    Error,
    "encode-error: U+8697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8698");
    },
    Error,
    "encode-error: U+8698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8699");
    },
    Error,
    "encode-error: U+8699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u869A");
    },
    Error,
    "encode-error: U+869A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u869B");
    },
    Error,
    "encode-error: U+869B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u869C");
    },
    Error,
    "encode-error: U+869C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u869D");
    },
    Error,
    "encode-error: U+869D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u869E");
    },
    Error,
    "encode-error: U+869E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u869F");
    },
    Error,
    "encode-error: U+869F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86A0");
    },
    Error,
    "encode-error: U+86A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86A1");
    },
    Error,
    "encode-error: U+86A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86A2");
    },
    Error,
    "encode-error: U+86A2",
  );
  r = r && ([...ms932Encoder.encode("蚣蚤")].join(",") === "229,110,148,97"); // U+86A3
  assertThrows(
    () => {
      ms932Encoder.encode("\u86A5");
    },
    Error,
    "encode-error: U+86A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86A6");
    },
    Error,
    "encode-error: U+86A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86A7");
    },
    Error,
    "encode-error: U+86A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86A8");
    },
    Error,
    "encode-error: U+86A8",
  );
  r = r &&
    ([...ms932Encoder.encode("蚩蚪蚫")].join(",") ===
      "229,111,229,112,229,122"); // U+86A9
  assertThrows(
    () => {
      ms932Encoder.encode("\u86AC");
    },
    Error,
    "encode-error: U+86AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86AD");
    },
    Error,
    "encode-error: U+86AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86AE");
    },
    Error,
    "encode-error: U+86AE",
  );
  r = r && ([...ms932Encoder.encode("蚯蚰")].join(",") === "229,116,229,119"); // U+86AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u86B1");
    },
    Error,
    "encode-error: U+86B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86B2");
    },
    Error,
    "encode-error: U+86B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86B3");
    },
    Error,
    "encode-error: U+86B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86B4");
    },
    Error,
    "encode-error: U+86B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86B5");
    },
    Error,
    "encode-error: U+86B5",
  );
  r = r && ([...ms932Encoder.encode("蚶")].join(",") === "229,115"); // U+86B6
  assertThrows(
    () => {
      ms932Encoder.encode("\u86B7");
    },
    Error,
    "encode-error: U+86B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86B8");
    },
    Error,
    "encode-error: U+86B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86B9");
    },
    Error,
    "encode-error: U+86B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86BA");
    },
    Error,
    "encode-error: U+86BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86BB");
    },
    Error,
    "encode-error: U+86BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86BC");
    },
    Error,
    "encode-error: U+86BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86BD");
    },
    Error,
    "encode-error: U+86BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86BE");
    },
    Error,
    "encode-error: U+86BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86BF");
    },
    Error,
    "encode-error: U+86BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86C0");
    },
    Error,
    "encode-error: U+86C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86C1");
    },
    Error,
    "encode-error: U+86C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86C2");
    },
    Error,
    "encode-error: U+86C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86C3");
    },
    Error,
    "encode-error: U+86C3",
  );
  r = r && ([...ms932Encoder.encode("蛄")].join(",") === "229,117"); // U+86C4
  assertThrows(
    () => {
      ms932Encoder.encode("\u86C5");
    },
    Error,
    "encode-error: U+86C5",
  );
  r = r && ([...ms932Encoder.encode("蛆蛇")].join(",") === "229,118,142,214"); // U+86C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u86C8");
    },
    Error,
    "encode-error: U+86C8",
  );
  r = r && ([...ms932Encoder.encode("蛉")].join(",") === "229,120"); // U+86C9
  assertThrows(
    () => {
      ms932Encoder.encode("\u86CA");
    },
    Error,
    "encode-error: U+86CA",
  );
  r = r && ([...ms932Encoder.encode("蛋")].join(",") === "146,96"); // U+86CB
  assertThrows(
    () => {
      ms932Encoder.encode("\u86CC");
    },
    Error,
    "encode-error: U+86CC",
  );
  r = r && ([...ms932Encoder.encode("蛍蛎")].join(",") === "140,117,138,97"); // U+86CD
  assertThrows(
    () => {
      ms932Encoder.encode("\u86CF");
    },
    Error,
    "encode-error: U+86CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86D0");
    },
    Error,
    "encode-error: U+86D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86D1");
    },
    Error,
    "encode-error: U+86D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86D2");
    },
    Error,
    "encode-error: U+86D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86D3");
    },
    Error,
    "encode-error: U+86D3",
  );
  r = r && ([...ms932Encoder.encode("蛔")].join(",") === "229,123"); // U+86D4
  assertThrows(
    () => {
      ms932Encoder.encode("\u86D5");
    },
    Error,
    "encode-error: U+86D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86D6");
    },
    Error,
    "encode-error: U+86D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86D7");
    },
    Error,
    "encode-error: U+86D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86D8");
    },
    Error,
    "encode-error: U+86D8",
  );
  r = r && ([...ms932Encoder.encode("蛙")].join(",") === "138,94"); // U+86D9
  assertThrows(
    () => {
      ms932Encoder.encode("\u86DA");
    },
    Error,
    "encode-error: U+86DA",
  );
  r = r && ([...ms932Encoder.encode("蛛")].join(",") === "229,129"); // U+86DB
  assertThrows(
    () => {
      ms932Encoder.encode("\u86DC");
    },
    Error,
    "encode-error: U+86DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86DD");
    },
    Error,
    "encode-error: U+86DD",
  );
  r = r && ([...ms932Encoder.encode("蛞蛟")].join(",") === "229,124,229,128"); // U+86DE
  assertThrows(
    () => {
      ms932Encoder.encode("\u86E0");
    },
    Error,
    "encode-error: U+86E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86E1");
    },
    Error,
    "encode-error: U+86E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86E2");
    },
    Error,
    "encode-error: U+86E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86E3");
    },
    Error,
    "encode-error: U+86E3",
  );
  r = r && ([...ms932Encoder.encode("蛤")].join(",") === "148,184"); // U+86E4
  assertThrows(
    () => {
      ms932Encoder.encode("\u86E5");
    },
    Error,
    "encode-error: U+86E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86E6");
    },
    Error,
    "encode-error: U+86E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86E7");
    },
    Error,
    "encode-error: U+86E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86E8");
    },
    Error,
    "encode-error: U+86E8",
  );
  r = r && ([...ms932Encoder.encode("蛩")].join(",") === "229,125"); // U+86E9
  assertThrows(
    () => {
      ms932Encoder.encode("\u86EA");
    },
    Error,
    "encode-error: U+86EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86EB");
    },
    Error,
    "encode-error: U+86EB",
  );
  r = r &&
    ([...ms932Encoder.encode("蛬蛭蛮蛯")].join(",") ===
      "229,126,149,103,148,216,229,130"); // U+86EC
  assertThrows(
    () => {
      ms932Encoder.encode("\u86F0");
    },
    Error,
    "encode-error: U+86F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86F1");
    },
    Error,
    "encode-error: U+86F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86F2");
    },
    Error,
    "encode-error: U+86F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86F3");
    },
    Error,
    "encode-error: U+86F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86F4");
    },
    Error,
    "encode-error: U+86F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86F5");
    },
    Error,
    "encode-error: U+86F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86F6");
    },
    Error,
    "encode-error: U+86F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86F7");
    },
    Error,
    "encode-error: U+86F7",
  );
  r = r && ([...ms932Encoder.encode("蛸蛹")].join(",") === "145,251,229,140"); // U+86F8
  assertThrows(
    () => {
      ms932Encoder.encode("\u86FA");
    },
    Error,
    "encode-error: U+86FA",
  );
  r = r && ([...ms932Encoder.encode("蛻")].join(",") === "229,136"); // U+86FB
  assertThrows(
    () => {
      ms932Encoder.encode("\u86FC");
    },
    Error,
    "encode-error: U+86FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u86FD");
    },
    Error,
    "encode-error: U+86FD",
  );
  r = r && ([...ms932Encoder.encode("蛾")].join(",") === "137,233"); // U+86FE
  assertThrows(
    () => {
      ms932Encoder.encode("\u86FF");
    },
    Error,
    "encode-error: U+86FF",
  );
  r = r && ([...ms932Encoder.encode("蜀")].join(",") === "229,134"); // U+8700
  assertThrows(
    () => {
      ms932Encoder.encode("\u8701");
    },
    Error,
    "encode-error: U+8701",
  );
  r = r && ([...ms932Encoder.encode("蜂蜃")].join(",") === "150,73,229,135"); // U+8702
  assertThrows(
    () => {
      ms932Encoder.encode("\u8704");
    },
    Error,
    "encode-error: U+8704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8705");
    },
    Error,
    "encode-error: U+8705",
  );
  r = r && ([...ms932Encoder.encode("蜆")].join(",") === "229,132"); // U+8706
  assertThrows(
    () => {
      ms932Encoder.encode("\u8707");
    },
    Error,
    "encode-error: U+8707",
  );
  r = r &&
    ([...ms932Encoder.encode("蜈蜉蜊")].join(",") ===
      "229,133,229,138,229,141"); // U+8708
  assertThrows(
    () => {
      ms932Encoder.encode("\u870B");
    },
    Error,
    "encode-error: U+870B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u870C");
    },
    Error,
    "encode-error: U+870C",
  );
  r = r && ([...ms932Encoder.encode("蜍")].join(",") === "229,139"); // U+870D
  assertThrows(
    () => {
      ms932Encoder.encode("\u870E");
    },
    Error,
    "encode-error: U+870E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u870F");
    },
    Error,
    "encode-error: U+870F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8710");
    },
    Error,
    "encode-error: U+8710",
  );
  r = r && ([...ms932Encoder.encode("蜑蜒")].join(",") === "229,137,229,131"); // U+8711
  assertThrows(
    () => {
      ms932Encoder.encode("\u8713");
    },
    Error,
    "encode-error: U+8713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8714");
    },
    Error,
    "encode-error: U+8714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8715");
    },
    Error,
    "encode-error: U+8715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8716");
    },
    Error,
    "encode-error: U+8716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8717");
    },
    Error,
    "encode-error: U+8717",
  );
  r = r && ([...ms932Encoder.encode("蜘")].join(",") === "146,119"); // U+8718
  assertThrows(
    () => {
      ms932Encoder.encode("\u8719");
    },
    Error,
    "encode-error: U+8719",
  );
  r = r && ([...ms932Encoder.encode("蜚")].join(",") === "229,148"); // U+871A
  assertThrows(
    () => {
      ms932Encoder.encode("\u871B");
    },
    Error,
    "encode-error: U+871B",
  );
  r = r && ([...ms932Encoder.encode("蜜")].join(",") === "150,168"); // U+871C
  assertThrows(
    () => {
      ms932Encoder.encode("\u871D");
    },
    Error,
    "encode-error: U+871D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u871E");
    },
    Error,
    "encode-error: U+871E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u871F");
    },
    Error,
    "encode-error: U+871F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8720");
    },
    Error,
    "encode-error: U+8720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8721");
    },
    Error,
    "encode-error: U+8721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8722");
    },
    Error,
    "encode-error: U+8722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8723");
    },
    Error,
    "encode-error: U+8723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8724");
    },
    Error,
    "encode-error: U+8724",
  );
  r = r && ([...ms932Encoder.encode("蜥")].join(",") === "229,146"); // U+8725
  assertThrows(
    () => {
      ms932Encoder.encode("\u8726");
    },
    Error,
    "encode-error: U+8726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8727");
    },
    Error,
    "encode-error: U+8727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8728");
    },
    Error,
    "encode-error: U+8728",
  );
  r = r && ([...ms932Encoder.encode("蜩")].join(",") === "229,147"); // U+8729
  assertThrows(
    () => {
      ms932Encoder.encode("\u872A");
    },
    Error,
    "encode-error: U+872A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u872B");
    },
    Error,
    "encode-error: U+872B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u872C");
    },
    Error,
    "encode-error: U+872C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u872D");
    },
    Error,
    "encode-error: U+872D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u872E");
    },
    Error,
    "encode-error: U+872E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u872F");
    },
    Error,
    "encode-error: U+872F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8730");
    },
    Error,
    "encode-error: U+8730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8731");
    },
    Error,
    "encode-error: U+8731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8732");
    },
    Error,
    "encode-error: U+8732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8733");
    },
    Error,
    "encode-error: U+8733",
  );
  r = r && ([...ms932Encoder.encode("蜴")].join(",") === "229,142"); // U+8734
  assertThrows(
    () => {
      ms932Encoder.encode("\u8735");
    },
    Error,
    "encode-error: U+8735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8736");
    },
    Error,
    "encode-error: U+8736",
  );
  r = r && ([...ms932Encoder.encode("蜷")].join(",") === "229,144"); // U+8737
  assertThrows(
    () => {
      ms932Encoder.encode("\u8738");
    },
    Error,
    "encode-error: U+8738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8739");
    },
    Error,
    "encode-error: U+8739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u873A");
    },
    Error,
    "encode-error: U+873A",
  );
  r = r && ([...ms932Encoder.encode("蜻")].join(",") === "229,145"); // U+873B
  assertThrows(
    () => {
      ms932Encoder.encode("\u873C");
    },
    Error,
    "encode-error: U+873C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u873D");
    },
    Error,
    "encode-error: U+873D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u873E");
    },
    Error,
    "encode-error: U+873E",
  );
  r = r && ([...ms932Encoder.encode("蜿")].join(",") === "229,143"); // U+873F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8740");
    },
    Error,
    "encode-error: U+8740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8741");
    },
    Error,
    "encode-error: U+8741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8742");
    },
    Error,
    "encode-error: U+8742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8743");
    },
    Error,
    "encode-error: U+8743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8744");
    },
    Error,
    "encode-error: U+8744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8745");
    },
    Error,
    "encode-error: U+8745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8746");
    },
    Error,
    "encode-error: U+8746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8747");
    },
    Error,
    "encode-error: U+8747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8748");
    },
    Error,
    "encode-error: U+8748",
  );
  r = r && ([...ms932Encoder.encode("蝉")].join(",") === "144,228"); // U+8749
  assertThrows(
    () => {
      ms932Encoder.encode("\u874A");
    },
    Error,
    "encode-error: U+874A",
  );
  r = r && ([...ms932Encoder.encode("蝋蝌")].join(",") === "152,88,229,152"); // U+874B
  assertThrows(
    () => {
      ms932Encoder.encode("\u874D");
    },
    Error,
    "encode-error: U+874D",
  );
  r = r && ([...ms932Encoder.encode("蝎")].join(",") === "229,153"); // U+874E
  assertThrows(
    () => {
      ms932Encoder.encode("\u874F");
    },
    Error,
    "encode-error: U+874F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8750");
    },
    Error,
    "encode-error: U+8750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8751");
    },
    Error,
    "encode-error: U+8751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8752");
    },
    Error,
    "encode-error: U+8752",
  );
  r = r && ([...ms932Encoder.encode("蝓")].join(",") === "229,159"); // U+8753
  assertThrows(
    () => {
      ms932Encoder.encode("\u8754");
    },
    Error,
    "encode-error: U+8754",
  );
  r = r && ([...ms932Encoder.encode("蝕")].join(",") === "144,73"); // U+8755
  assertThrows(
    () => {
      ms932Encoder.encode("\u8756");
    },
    Error,
    "encode-error: U+8756",
  );
  r = r && ([...ms932Encoder.encode("蝗")].join(",") === "229,155"); // U+8757
  assertThrows(
    () => {
      ms932Encoder.encode("\u8758");
    },
    Error,
    "encode-error: U+8758",
  );
  r = r && ([...ms932Encoder.encode("蝙")].join(",") === "229,158"); // U+8759
  assertThrows(
    () => {
      ms932Encoder.encode("\u875A");
    },
    Error,
    "encode-error: U+875A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u875B");
    },
    Error,
    "encode-error: U+875B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u875C");
    },
    Error,
    "encode-error: U+875C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u875D");
    },
    Error,
    "encode-error: U+875D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u875E");
    },
    Error,
    "encode-error: U+875E",
  );
  r = r && ([...ms932Encoder.encode("蝟蝠")].join(",") === "229,150,229,149"); // U+875F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8761");
    },
    Error,
    "encode-error: U+8761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8762");
    },
    Error,
    "encode-error: U+8762",
  );
  r = r && ([...ms932Encoder.encode("蝣")].join(",") === "229,160"); // U+8763
  assertThrows(
    () => {
      ms932Encoder.encode("\u8764");
    },
    Error,
    "encode-error: U+8764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8765");
    },
    Error,
    "encode-error: U+8765",
  );
  r = r && ([...ms932Encoder.encode("蝦")].join(",") === "137,218"); // U+8766
  assertThrows(
    () => {
      ms932Encoder.encode("\u8767");
    },
    Error,
    "encode-error: U+8767",
  );
  r = r && ([...ms932Encoder.encode("蝨")].join(",") === "229,156"); // U+8768
  assertThrows(
    () => {
      ms932Encoder.encode("\u8769");
    },
    Error,
    "encode-error: U+8769",
  );
  r = r && ([...ms932Encoder.encode("蝪")].join(",") === "229,161"); // U+876A
  assertThrows(
    () => {
      ms932Encoder.encode("\u876B");
    },
    Error,
    "encode-error: U+876B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u876C");
    },
    Error,
    "encode-error: U+876C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u876D");
    },
    Error,
    "encode-error: U+876D",
  );
  r = r && ([...ms932Encoder.encode("蝮")].join(",") === "229,157"); // U+876E
  assertThrows(
    () => {
      ms932Encoder.encode("\u876F");
    },
    Error,
    "encode-error: U+876F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8770");
    },
    Error,
    "encode-error: U+8770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8771");
    },
    Error,
    "encode-error: U+8771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8772");
    },
    Error,
    "encode-error: U+8772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8773");
    },
    Error,
    "encode-error: U+8773",
  );
  r = r && ([...ms932Encoder.encode("蝴")].join(",") === "229,154"); // U+8774
  assertThrows(
    () => {
      ms932Encoder.encode("\u8775");
    },
    Error,
    "encode-error: U+8775",
  );
  r = r && ([...ms932Encoder.encode("蝶")].join(",") === "146,177"); // U+8776
  assertThrows(
    () => {
      ms932Encoder.encode("\u8777");
    },
    Error,
    "encode-error: U+8777",
  );
  r = r && ([...ms932Encoder.encode("蝸")].join(",") === "229,151"); // U+8778
  assertThrows(
    () => {
      ms932Encoder.encode("\u8779");
    },
    Error,
    "encode-error: U+8779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u877A");
    },
    Error,
    "encode-error: U+877A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u877B");
    },
    Error,
    "encode-error: U+877B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u877C");
    },
    Error,
    "encode-error: U+877C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u877D");
    },
    Error,
    "encode-error: U+877D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u877E");
    },
    Error,
    "encode-error: U+877E",
  );
  r = r && ([...ms932Encoder.encode("蝿")].join(",") === "148,136"); // U+877F
  assertThrows(
    () => {
      ms932Encoder.encode("\u8780");
    },
    Error,
    "encode-error: U+8780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8781");
    },
    Error,
    "encode-error: U+8781",
  );
  r = r && ([...ms932Encoder.encode("螂")].join(",") === "229,165"); // U+8782
  assertThrows(
    () => {
      ms932Encoder.encode("\u8783");
    },
    Error,
    "encode-error: U+8783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8784");
    },
    Error,
    "encode-error: U+8784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8785");
    },
    Error,
    "encode-error: U+8785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8786");
    },
    Error,
    "encode-error: U+8786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8787");
    },
    Error,
    "encode-error: U+8787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8788");
    },
    Error,
    "encode-error: U+8788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8789");
    },
    Error,
    "encode-error: U+8789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u878A");
    },
    Error,
    "encode-error: U+878A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u878B");
    },
    Error,
    "encode-error: U+878B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u878C");
    },
    Error,
    "encode-error: U+878C",
  );
  r = r && ([...ms932Encoder.encode("融")].join(",") === "151,90"); // U+878D
  assertThrows(
    () => {
      ms932Encoder.encode("\u878E");
    },
    Error,
    "encode-error: U+878E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u878F");
    },
    Error,
    "encode-error: U+878F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8790");
    },
    Error,
    "encode-error: U+8790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8791");
    },
    Error,
    "encode-error: U+8791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8792");
    },
    Error,
    "encode-error: U+8792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8793");
    },
    Error,
    "encode-error: U+8793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8794");
    },
    Error,
    "encode-error: U+8794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8795");
    },
    Error,
    "encode-error: U+8795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8796");
    },
    Error,
    "encode-error: U+8796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8797");
    },
    Error,
    "encode-error: U+8797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8798");
    },
    Error,
    "encode-error: U+8798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u8799");
    },
    Error,
    "encode-error: U+8799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u879A");
    },
    Error,
    "encode-error: U+879A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u879B");
    },
    Error,
    "encode-error: U+879B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u879C");
    },
    Error,
    "encode-error: U+879C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u879D");
    },
    Error,
    "encode-error: U+879D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u879E");
    },
    Error,
    "encode-error: U+879E",
  );
  r = r && ([...ms932Encoder.encode("螟")].join(",") === "229,164"); // U+879F
  assertThrows(
    () => {
      ms932Encoder.encode("\u87A0");
    },
    Error,
    "encode-error: U+87A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87A1");
    },
    Error,
    "encode-error: U+87A1",
  );
  r = r && ([...ms932Encoder.encode("螢")].join(",") === "229,163"); // U+87A2
  assertThrows(
    () => {
      ms932Encoder.encode("\u87A3");
    },
    Error,
    "encode-error: U+87A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87A4");
    },
    Error,
    "encode-error: U+87A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87A5");
    },
    Error,
    "encode-error: U+87A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87A6");
    },
    Error,
    "encode-error: U+87A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87A7");
    },
    Error,
    "encode-error: U+87A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87A8");
    },
    Error,
    "encode-error: U+87A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87A9");
    },
    Error,
    "encode-error: U+87A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87AA");
    },
    Error,
    "encode-error: U+87AA",
  );
  r = r && ([...ms932Encoder.encode("螫")].join(",") === "229,172"); // U+87AB
  assertThrows(
    () => {
      ms932Encoder.encode("\u87AC");
    },
    Error,
    "encode-error: U+87AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87AD");
    },
    Error,
    "encode-error: U+87AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87AE");
    },
    Error,
    "encode-error: U+87AE",
  );
  r = r && ([...ms932Encoder.encode("螯")].join(",") === "229,166"); // U+87AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u87B0");
    },
    Error,
    "encode-error: U+87B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87B1");
    },
    Error,
    "encode-error: U+87B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87B2");
    },
    Error,
    "encode-error: U+87B2",
  );
  r = r && ([...ms932Encoder.encode("螳")].join(",") === "229,174"); // U+87B3
  assertThrows(
    () => {
      ms932Encoder.encode("\u87B4");
    },
    Error,
    "encode-error: U+87B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87B5");
    },
    Error,
    "encode-error: U+87B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87B6");
    },
    Error,
    "encode-error: U+87B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87B7");
    },
    Error,
    "encode-error: U+87B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87B8");
    },
    Error,
    "encode-error: U+87B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87B9");
    },
    Error,
    "encode-error: U+87B9",
  );
  r = r && ([...ms932Encoder.encode("螺螻")].join(",") === "151,134,229,177"); // U+87BA
  assertThrows(
    () => {
      ms932Encoder.encode("\u87BC");
    },
    Error,
    "encode-error: U+87BC",
  );
  r = r && ([...ms932Encoder.encode("螽")].join(",") === "229,168"); // U+87BD
  assertThrows(
    () => {
      ms932Encoder.encode("\u87BE");
    },
    Error,
    "encode-error: U+87BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87BF");
    },
    Error,
    "encode-error: U+87BF",
  );
  r = r && ([...ms932Encoder.encode("蟀")].join(",") === "229,169"); // U+87C0
  assertThrows(
    () => {
      ms932Encoder.encode("\u87C1");
    },
    Error,
    "encode-error: U+87C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87C2");
    },
    Error,
    "encode-error: U+87C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87C3");
    },
    Error,
    "encode-error: U+87C3",
  );
  r = r && ([...ms932Encoder.encode("蟄")].join(",") === "229,173"); // U+87C4
  assertThrows(
    () => {
      ms932Encoder.encode("\u87C5");
    },
    Error,
    "encode-error: U+87C5",
  );
  r = r && ([...ms932Encoder.encode("蟆蟇")].join(",") === "229,176,229,175"); // U+87C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u87C8");
    },
    Error,
    "encode-error: U+87C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87C9");
    },
    Error,
    "encode-error: U+87C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87CA");
    },
    Error,
    "encode-error: U+87CA",
  );
  r = r && ([...ms932Encoder.encode("蟋")].join(",") === "229,167"); // U+87CB
  assertThrows(
    () => {
      ms932Encoder.encode("\u87CC");
    },
    Error,
    "encode-error: U+87CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87CD");
    },
    Error,
    "encode-error: U+87CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87CE");
    },
    Error,
    "encode-error: U+87CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87CF");
    },
    Error,
    "encode-error: U+87CF",
  );
  r = r && ([...ms932Encoder.encode("蟐")].join(",") === "229,170"); // U+87D0
  assertThrows(
    () => {
      ms932Encoder.encode("\u87D1");
    },
    Error,
    "encode-error: U+87D1",
  );
  r = r && ([...ms932Encoder.encode("蟒")].join(",") === "229,187"); // U+87D2
  assertThrows(
    () => {
      ms932Encoder.encode("\u87D3");
    },
    Error,
    "encode-error: U+87D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87D4");
    },
    Error,
    "encode-error: U+87D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87D5");
    },
    Error,
    "encode-error: U+87D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87D6");
    },
    Error,
    "encode-error: U+87D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87D7");
    },
    Error,
    "encode-error: U+87D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87D8");
    },
    Error,
    "encode-error: U+87D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87D9");
    },
    Error,
    "encode-error: U+87D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87DA");
    },
    Error,
    "encode-error: U+87DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87DB");
    },
    Error,
    "encode-error: U+87DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87DC");
    },
    Error,
    "encode-error: U+87DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87DD");
    },
    Error,
    "encode-error: U+87DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87DE");
    },
    Error,
    "encode-error: U+87DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87DF");
    },
    Error,
    "encode-error: U+87DF",
  );
  r = r && ([...ms932Encoder.encode("蟠")].join(",") === "229,180"); // U+87E0
  assertThrows(
    () => {
      ms932Encoder.encode("\u87E1");
    },
    Error,
    "encode-error: U+87E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87E2");
    },
    Error,
    "encode-error: U+87E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87E3");
    },
    Error,
    "encode-error: U+87E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87E4");
    },
    Error,
    "encode-error: U+87E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87E5");
    },
    Error,
    "encode-error: U+87E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87E6");
    },
    Error,
    "encode-error: U+87E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87E7");
    },
    Error,
    "encode-error: U+87E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87E8");
    },
    Error,
    "encode-error: U+87E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87E9");
    },
    Error,
    "encode-error: U+87E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87EA");
    },
    Error,
    "encode-error: U+87EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87EB");
    },
    Error,
    "encode-error: U+87EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87EC");
    },
    Error,
    "encode-error: U+87EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87ED");
    },
    Error,
    "encode-error: U+87ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87EE");
    },
    Error,
    "encode-error: U+87EE",
  );
  r = r && ([...ms932Encoder.encode("蟯")].join(",") === "229,178"); // U+87EF
  assertThrows(
    () => {
      ms932Encoder.encode("\u87F0");
    },
    Error,
    "encode-error: U+87F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87F1");
    },
    Error,
    "encode-error: U+87F1",
  );
  r = r && ([...ms932Encoder.encode("蟲")].join(",") === "229,179"); // U+87F2
  assertThrows(
    () => {
      ms932Encoder.encode("\u87F3");
    },
    Error,
    "encode-error: U+87F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87F4");
    },
    Error,
    "encode-error: U+87F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87F5");
    },
    Error,
    "encode-error: U+87F5",
  );
  r = r && ([...ms932Encoder.encode("蟶蟷")].join(",") === "229,184,229,185"); // U+87F6
  assertThrows(
    () => {
      ms932Encoder.encode("\u87F8");
    },
    Error,
    "encode-error: U+87F8",
  );
  r = r && ([...ms932Encoder.encode("蟹")].join(",") === "138,73"); // U+87F9
  assertThrows(
    () => {
      ms932Encoder.encode("\u87FA");
    },
    Error,
    "encode-error: U+87FA",
  );
  r = r && ([...ms932Encoder.encode("蟻")].join(",") === "139,97"); // U+87FB
  assertThrows(
    () => {
      ms932Encoder.encode("\u87FC");
    },
    Error,
    "encode-error: U+87FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u87FD");
    },
    Error,
    "encode-error: U+87FD",
  );
  r = r && ([...ms932Encoder.encode("蟾")].join(",") === "229,183"); // U+87FE
  assertThrows(
    () => {
      ms932Encoder.encode("\u87FF");
    },
    Error,
    "encode-error: U+87FF",
  );

  assertStrictEquals(r, true);
});
