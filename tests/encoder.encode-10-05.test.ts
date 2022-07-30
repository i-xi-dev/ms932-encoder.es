import { assertStrictEquals, assertThrows } from "std/testing/asserts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+9400-U+97FF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u9400");
    },
    Error,
    "EncodingError U+9400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9401");
    },
    Error,
    "EncodingError U+9401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9402");
    },
    Error,
    "EncodingError U+9402",
  );
  r = r && ([...ms932Encoder.encode("鐃")].join(",") === "232,94"); // U+9403
  assertThrows(
    () => {
      ms932Encoder.encode("\u9404");
    },
    Error,
    "EncodingError U+9404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9405");
    },
    Error,
    "EncodingError U+9405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9406");
    },
    Error,
    "EncodingError U+9406",
  );
  r = r && ([...ms932Encoder.encode("鐇")].join(",") === "232,95"); // U+9407
  assertThrows(
    () => {
      ms932Encoder.encode("\u9408");
    },
    Error,
    "EncodingError U+9408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9409");
    },
    Error,
    "EncodingError U+9409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u940A");
    },
    Error,
    "EncodingError U+940A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u940B");
    },
    Error,
    "EncodingError U+940B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u940C");
    },
    Error,
    "EncodingError U+940C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u940D");
    },
    Error,
    "EncodingError U+940D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u940E");
    },
    Error,
    "EncodingError U+940E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u940F");
    },
    Error,
    "EncodingError U+940F",
  );
  r = r && ([...ms932Encoder.encode("鐐")].join(",") === "232,96"); // U+9410
  assertThrows(
    () => {
      ms932Encoder.encode("\u9411");
    },
    Error,
    "EncodingError U+9411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9412");
    },
    Error,
    "EncodingError U+9412",
  );
  r = r && ([...ms932Encoder.encode("鐓鐔")].join(",") === "232,93,232,92"); // U+9413
  assertThrows(
    () => {
      ms932Encoder.encode("\u9415");
    },
    Error,
    "EncodingError U+9415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9416");
    },
    Error,
    "EncodingError U+9416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9417");
    },
    Error,
    "EncodingError U+9417",
  );
  r = r &&
    ([...ms932Encoder.encode("鐘鐙鐚")].join(",") === "143,224,147,168,232,91"); // U+9418
  assertThrows(
    () => {
      ms932Encoder.encode("\u941B");
    },
    Error,
    "EncodingError U+941B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u941C");
    },
    Error,
    "EncodingError U+941C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u941D");
    },
    Error,
    "EncodingError U+941D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u941E");
    },
    Error,
    "EncodingError U+941E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u941F");
    },
    Error,
    "EncodingError U+941F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9420");
    },
    Error,
    "EncodingError U+9420",
  );
  r = r && ([...ms932Encoder.encode("鐡")].join(",") === "232,100"); // U+9421
  assertThrows(
    () => {
      ms932Encoder.encode("\u9422");
    },
    Error,
    "EncodingError U+9422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9423");
    },
    Error,
    "EncodingError U+9423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9424");
    },
    Error,
    "EncodingError U+9424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9425");
    },
    Error,
    "EncodingError U+9425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9426");
    },
    Error,
    "EncodingError U+9426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9427");
    },
    Error,
    "EncodingError U+9427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9428");
    },
    Error,
    "EncodingError U+9428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9429");
    },
    Error,
    "EncodingError U+9429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u942A");
    },
    Error,
    "EncodingError U+942A",
  );
  r = r && ([...ms932Encoder.encode("鐫")].join(",") === "232,98"); // U+942B
  assertThrows(
    () => {
      ms932Encoder.encode("\u942C");
    },
    Error,
    "EncodingError U+942C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u942D");
    },
    Error,
    "EncodingError U+942D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u942E");
    },
    Error,
    "EncodingError U+942E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u942F");
    },
    Error,
    "EncodingError U+942F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9430");
    },
    Error,
    "EncodingError U+9430",
  );
  r = r && ([...ms932Encoder.encode("鐱")].join(",") === "251,229"); // U+9431
  assertThrows(
    () => {
      ms932Encoder.encode("\u9432");
    },
    Error,
    "EncodingError U+9432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9433");
    },
    Error,
    "EncodingError U+9433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9434");
    },
    Error,
    "EncodingError U+9434",
  );
  r = r && ([...ms932Encoder.encode("鐵鐶")].join(",") === "232,99,232,97"); // U+9435
  assertThrows(
    () => {
      ms932Encoder.encode("\u9437");
    },
    Error,
    "EncodingError U+9437",
  );
  r = r && ([...ms932Encoder.encode("鐸")].join(",") === "145,246"); // U+9438
  assertThrows(
    () => {
      ms932Encoder.encode("\u9439");
    },
    Error,
    "EncodingError U+9439",
  );
  r = r && ([...ms932Encoder.encode("鐺")].join(",") === "232,101"); // U+943A
  assertThrows(
    () => {
      ms932Encoder.encode("\u943B");
    },
    Error,
    "EncodingError U+943B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u943C");
    },
    Error,
    "EncodingError U+943C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u943D");
    },
    Error,
    "EncodingError U+943D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u943E");
    },
    Error,
    "EncodingError U+943E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u943F");
    },
    Error,
    "EncodingError U+943F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9440");
    },
    Error,
    "EncodingError U+9440",
  );
  r = r && ([...ms932Encoder.encode("鑁")].join(",") === "232,102"); // U+9441
  assertThrows(
    () => {
      ms932Encoder.encode("\u9442");
    },
    Error,
    "EncodingError U+9442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9443");
    },
    Error,
    "EncodingError U+9443",
  );
  r = r && ([...ms932Encoder.encode("鑄鑅")].join(",") === "232,104,251,230"); // U+9444
  assertThrows(
    () => {
      ms932Encoder.encode("\u9446");
    },
    Error,
    "EncodingError U+9446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9447");
    },
    Error,
    "EncodingError U+9447",
  );
  r = r && ([...ms932Encoder.encode("鑈")].join(",") === "251,231"); // U+9448
  assertThrows(
    () => {
      ms932Encoder.encode("\u9449");
    },
    Error,
    "EncodingError U+9449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u944A");
    },
    Error,
    "EncodingError U+944A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u944B");
    },
    Error,
    "EncodingError U+944B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u944C");
    },
    Error,
    "EncodingError U+944C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u944D");
    },
    Error,
    "EncodingError U+944D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u944E");
    },
    Error,
    "EncodingError U+944E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u944F");
    },
    Error,
    "EncodingError U+944F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9450");
    },
    Error,
    "EncodingError U+9450",
  );
  r = r &&
    ([...ms932Encoder.encode("鑑鑒鑓")].join(",") === "138,211,232,103,150,248"); // U+9451
  assertThrows(
    () => {
      ms932Encoder.encode("\u9454");
    },
    Error,
    "EncodingError U+9454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9455");
    },
    Error,
    "EncodingError U+9455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9456");
    },
    Error,
    "EncodingError U+9456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9457");
    },
    Error,
    "EncodingError U+9457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9458");
    },
    Error,
    "EncodingError U+9458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9459");
    },
    Error,
    "EncodingError U+9459",
  );
  r = r && ([...ms932Encoder.encode("鑚鑛")].join(",") === "232,115,232,105"); // U+945A
  assertThrows(
    () => {
      ms932Encoder.encode("\u945C");
    },
    Error,
    "EncodingError U+945C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u945D");
    },
    Error,
    "EncodingError U+945D",
  );
  r = r && ([...ms932Encoder.encode("鑞")].join(",") === "232,108"); // U+945E
  assertThrows(
    () => {
      ms932Encoder.encode("\u945F");
    },
    Error,
    "EncodingError U+945F",
  );
  r = r && ([...ms932Encoder.encode("鑠")].join(",") === "232,106"); // U+9460
  assertThrows(
    () => {
      ms932Encoder.encode("\u9461");
    },
    Error,
    "EncodingError U+9461",
  );
  r = r && ([...ms932Encoder.encode("鑢")].join(",") === "232,107"); // U+9462
  assertThrows(
    () => {
      ms932Encoder.encode("\u9463");
    },
    Error,
    "EncodingError U+9463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9464");
    },
    Error,
    "EncodingError U+9464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9465");
    },
    Error,
    "EncodingError U+9465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9466");
    },
    Error,
    "EncodingError U+9466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9467");
    },
    Error,
    "EncodingError U+9467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9468");
    },
    Error,
    "EncodingError U+9468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9469");
    },
    Error,
    "EncodingError U+9469",
  );
  r = r && ([...ms932Encoder.encode("鑪")].join(",") === "232,109"); // U+946A
  assertThrows(
    () => {
      ms932Encoder.encode("\u946B");
    },
    Error,
    "EncodingError U+946B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u946C");
    },
    Error,
    "EncodingError U+946C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u946D");
    },
    Error,
    "EncodingError U+946D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u946E");
    },
    Error,
    "EncodingError U+946E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u946F");
    },
    Error,
    "EncodingError U+946F",
  );
  r = r && ([...ms932Encoder.encode("鑰")].join(",") === "232,111"); // U+9470
  assertThrows(
    () => {
      ms932Encoder.encode("\u9471");
    },
    Error,
    "EncodingError U+9471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9472");
    },
    Error,
    "EncodingError U+9472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9473");
    },
    Error,
    "EncodingError U+9473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9474");
    },
    Error,
    "EncodingError U+9474",
  );
  r = r && ([...ms932Encoder.encode("鑵")].join(",") === "232,112"); // U+9475
  assertThrows(
    () => {
      ms932Encoder.encode("\u9476");
    },
    Error,
    "EncodingError U+9476",
  );
  r = r && ([...ms932Encoder.encode("鑷")].join(",") === "232,113"); // U+9477
  assertThrows(
    () => {
      ms932Encoder.encode("\u9478");
    },
    Error,
    "EncodingError U+9478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9479");
    },
    Error,
    "EncodingError U+9479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u947A");
    },
    Error,
    "EncodingError U+947A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u947B");
    },
    Error,
    "EncodingError U+947B",
  );
  r = r &&
    ([...ms932Encoder.encode("鑼鑽鑾鑿")].join(",") ===
      "232,116,232,114,232,117,232,119"); // U+947C
  assertThrows(
    () => {
      ms932Encoder.encode("\u9480");
    },
    Error,
    "EncodingError U+9480",
  );
  r = r && ([...ms932Encoder.encode("钁")].join(",") === "232,118"); // U+9481
  assertThrows(
    () => {
      ms932Encoder.encode("\u9482");
    },
    Error,
    "EncodingError U+9482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9483");
    },
    Error,
    "EncodingError U+9483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9484");
    },
    Error,
    "EncodingError U+9484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9485");
    },
    Error,
    "EncodingError U+9485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9486");
    },
    Error,
    "EncodingError U+9486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9487");
    },
    Error,
    "EncodingError U+9487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9488");
    },
    Error,
    "EncodingError U+9488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9489");
    },
    Error,
    "EncodingError U+9489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u948A");
    },
    Error,
    "EncodingError U+948A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u948B");
    },
    Error,
    "EncodingError U+948B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u948C");
    },
    Error,
    "EncodingError U+948C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u948D");
    },
    Error,
    "EncodingError U+948D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u948E");
    },
    Error,
    "EncodingError U+948E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u948F");
    },
    Error,
    "EncodingError U+948F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9490");
    },
    Error,
    "EncodingError U+9490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9491");
    },
    Error,
    "EncodingError U+9491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9492");
    },
    Error,
    "EncodingError U+9492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9493");
    },
    Error,
    "EncodingError U+9493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9494");
    },
    Error,
    "EncodingError U+9494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9495");
    },
    Error,
    "EncodingError U+9495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9496");
    },
    Error,
    "EncodingError U+9496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9497");
    },
    Error,
    "EncodingError U+9497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9498");
    },
    Error,
    "EncodingError U+9498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9499");
    },
    Error,
    "EncodingError U+9499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u949A");
    },
    Error,
    "EncodingError U+949A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u949B");
    },
    Error,
    "EncodingError U+949B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u949C");
    },
    Error,
    "EncodingError U+949C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u949D");
    },
    Error,
    "EncodingError U+949D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u949E");
    },
    Error,
    "EncodingError U+949E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u949F");
    },
    Error,
    "EncodingError U+949F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94A0");
    },
    Error,
    "EncodingError U+94A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94A1");
    },
    Error,
    "EncodingError U+94A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94A2");
    },
    Error,
    "EncodingError U+94A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94A3");
    },
    Error,
    "EncodingError U+94A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94A4");
    },
    Error,
    "EncodingError U+94A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94A5");
    },
    Error,
    "EncodingError U+94A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94A6");
    },
    Error,
    "EncodingError U+94A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94A7");
    },
    Error,
    "EncodingError U+94A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94A8");
    },
    Error,
    "EncodingError U+94A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94A9");
    },
    Error,
    "EncodingError U+94A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94AA");
    },
    Error,
    "EncodingError U+94AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94AB");
    },
    Error,
    "EncodingError U+94AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94AC");
    },
    Error,
    "EncodingError U+94AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94AD");
    },
    Error,
    "EncodingError U+94AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94AE");
    },
    Error,
    "EncodingError U+94AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94AF");
    },
    Error,
    "EncodingError U+94AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94B0");
    },
    Error,
    "EncodingError U+94B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94B1");
    },
    Error,
    "EncodingError U+94B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94B2");
    },
    Error,
    "EncodingError U+94B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94B3");
    },
    Error,
    "EncodingError U+94B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94B4");
    },
    Error,
    "EncodingError U+94B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94B5");
    },
    Error,
    "EncodingError U+94B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94B6");
    },
    Error,
    "EncodingError U+94B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94B7");
    },
    Error,
    "EncodingError U+94B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94B8");
    },
    Error,
    "EncodingError U+94B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94B9");
    },
    Error,
    "EncodingError U+94B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94BA");
    },
    Error,
    "EncodingError U+94BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94BB");
    },
    Error,
    "EncodingError U+94BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94BC");
    },
    Error,
    "EncodingError U+94BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94BD");
    },
    Error,
    "EncodingError U+94BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94BE");
    },
    Error,
    "EncodingError U+94BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94BF");
    },
    Error,
    "EncodingError U+94BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94C0");
    },
    Error,
    "EncodingError U+94C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94C1");
    },
    Error,
    "EncodingError U+94C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94C2");
    },
    Error,
    "EncodingError U+94C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94C3");
    },
    Error,
    "EncodingError U+94C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94C4");
    },
    Error,
    "EncodingError U+94C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94C5");
    },
    Error,
    "EncodingError U+94C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94C6");
    },
    Error,
    "EncodingError U+94C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94C7");
    },
    Error,
    "EncodingError U+94C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94C8");
    },
    Error,
    "EncodingError U+94C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94C9");
    },
    Error,
    "EncodingError U+94C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94CA");
    },
    Error,
    "EncodingError U+94CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94CB");
    },
    Error,
    "EncodingError U+94CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94CC");
    },
    Error,
    "EncodingError U+94CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94CD");
    },
    Error,
    "EncodingError U+94CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94CE");
    },
    Error,
    "EncodingError U+94CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94CF");
    },
    Error,
    "EncodingError U+94CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94D0");
    },
    Error,
    "EncodingError U+94D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94D1");
    },
    Error,
    "EncodingError U+94D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94D2");
    },
    Error,
    "EncodingError U+94D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94D3");
    },
    Error,
    "EncodingError U+94D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94D4");
    },
    Error,
    "EncodingError U+94D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94D5");
    },
    Error,
    "EncodingError U+94D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94D6");
    },
    Error,
    "EncodingError U+94D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94D7");
    },
    Error,
    "EncodingError U+94D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94D8");
    },
    Error,
    "EncodingError U+94D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94D9");
    },
    Error,
    "EncodingError U+94D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94DA");
    },
    Error,
    "EncodingError U+94DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94DB");
    },
    Error,
    "EncodingError U+94DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94DC");
    },
    Error,
    "EncodingError U+94DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94DD");
    },
    Error,
    "EncodingError U+94DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94DE");
    },
    Error,
    "EncodingError U+94DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94DF");
    },
    Error,
    "EncodingError U+94DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94E0");
    },
    Error,
    "EncodingError U+94E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94E1");
    },
    Error,
    "EncodingError U+94E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94E2");
    },
    Error,
    "EncodingError U+94E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94E3");
    },
    Error,
    "EncodingError U+94E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94E4");
    },
    Error,
    "EncodingError U+94E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94E5");
    },
    Error,
    "EncodingError U+94E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94E6");
    },
    Error,
    "EncodingError U+94E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94E7");
    },
    Error,
    "EncodingError U+94E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94E8");
    },
    Error,
    "EncodingError U+94E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94E9");
    },
    Error,
    "EncodingError U+94E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94EA");
    },
    Error,
    "EncodingError U+94EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94EB");
    },
    Error,
    "EncodingError U+94EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94EC");
    },
    Error,
    "EncodingError U+94EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94ED");
    },
    Error,
    "EncodingError U+94ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94EE");
    },
    Error,
    "EncodingError U+94EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94EF");
    },
    Error,
    "EncodingError U+94EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94F0");
    },
    Error,
    "EncodingError U+94F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94F1");
    },
    Error,
    "EncodingError U+94F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94F2");
    },
    Error,
    "EncodingError U+94F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94F3");
    },
    Error,
    "EncodingError U+94F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94F4");
    },
    Error,
    "EncodingError U+94F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94F5");
    },
    Error,
    "EncodingError U+94F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94F6");
    },
    Error,
    "EncodingError U+94F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94F7");
    },
    Error,
    "EncodingError U+94F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94F8");
    },
    Error,
    "EncodingError U+94F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94F9");
    },
    Error,
    "EncodingError U+94F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94FA");
    },
    Error,
    "EncodingError U+94FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94FB");
    },
    Error,
    "EncodingError U+94FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94FC");
    },
    Error,
    "EncodingError U+94FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94FD");
    },
    Error,
    "EncodingError U+94FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94FE");
    },
    Error,
    "EncodingError U+94FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u94FF");
    },
    Error,
    "EncodingError U+94FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9500");
    },
    Error,
    "EncodingError U+9500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9501");
    },
    Error,
    "EncodingError U+9501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9502");
    },
    Error,
    "EncodingError U+9502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9503");
    },
    Error,
    "EncodingError U+9503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9504");
    },
    Error,
    "EncodingError U+9504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9505");
    },
    Error,
    "EncodingError U+9505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9506");
    },
    Error,
    "EncodingError U+9506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9507");
    },
    Error,
    "EncodingError U+9507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9508");
    },
    Error,
    "EncodingError U+9508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9509");
    },
    Error,
    "EncodingError U+9509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u950A");
    },
    Error,
    "EncodingError U+950A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u950B");
    },
    Error,
    "EncodingError U+950B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u950C");
    },
    Error,
    "EncodingError U+950C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u950D");
    },
    Error,
    "EncodingError U+950D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u950E");
    },
    Error,
    "EncodingError U+950E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u950F");
    },
    Error,
    "EncodingError U+950F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9510");
    },
    Error,
    "EncodingError U+9510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9511");
    },
    Error,
    "EncodingError U+9511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9512");
    },
    Error,
    "EncodingError U+9512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9513");
    },
    Error,
    "EncodingError U+9513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9514");
    },
    Error,
    "EncodingError U+9514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9515");
    },
    Error,
    "EncodingError U+9515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9516");
    },
    Error,
    "EncodingError U+9516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9517");
    },
    Error,
    "EncodingError U+9517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9518");
    },
    Error,
    "EncodingError U+9518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9519");
    },
    Error,
    "EncodingError U+9519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u951A");
    },
    Error,
    "EncodingError U+951A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u951B");
    },
    Error,
    "EncodingError U+951B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u951C");
    },
    Error,
    "EncodingError U+951C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u951D");
    },
    Error,
    "EncodingError U+951D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u951E");
    },
    Error,
    "EncodingError U+951E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u951F");
    },
    Error,
    "EncodingError U+951F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9520");
    },
    Error,
    "EncodingError U+9520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9521");
    },
    Error,
    "EncodingError U+9521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9522");
    },
    Error,
    "EncodingError U+9522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9523");
    },
    Error,
    "EncodingError U+9523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9524");
    },
    Error,
    "EncodingError U+9524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9525");
    },
    Error,
    "EncodingError U+9525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9526");
    },
    Error,
    "EncodingError U+9526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9527");
    },
    Error,
    "EncodingError U+9527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9528");
    },
    Error,
    "EncodingError U+9528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9529");
    },
    Error,
    "EncodingError U+9529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u952A");
    },
    Error,
    "EncodingError U+952A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u952B");
    },
    Error,
    "EncodingError U+952B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u952C");
    },
    Error,
    "EncodingError U+952C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u952D");
    },
    Error,
    "EncodingError U+952D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u952E");
    },
    Error,
    "EncodingError U+952E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u952F");
    },
    Error,
    "EncodingError U+952F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9530");
    },
    Error,
    "EncodingError U+9530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9531");
    },
    Error,
    "EncodingError U+9531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9532");
    },
    Error,
    "EncodingError U+9532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9533");
    },
    Error,
    "EncodingError U+9533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9534");
    },
    Error,
    "EncodingError U+9534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9535");
    },
    Error,
    "EncodingError U+9535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9536");
    },
    Error,
    "EncodingError U+9536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9537");
    },
    Error,
    "EncodingError U+9537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9538");
    },
    Error,
    "EncodingError U+9538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9539");
    },
    Error,
    "EncodingError U+9539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u953A");
    },
    Error,
    "EncodingError U+953A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u953B");
    },
    Error,
    "EncodingError U+953B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u953C");
    },
    Error,
    "EncodingError U+953C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u953D");
    },
    Error,
    "EncodingError U+953D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u953E");
    },
    Error,
    "EncodingError U+953E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u953F");
    },
    Error,
    "EncodingError U+953F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9540");
    },
    Error,
    "EncodingError U+9540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9541");
    },
    Error,
    "EncodingError U+9541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9542");
    },
    Error,
    "EncodingError U+9542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9543");
    },
    Error,
    "EncodingError U+9543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9544");
    },
    Error,
    "EncodingError U+9544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9545");
    },
    Error,
    "EncodingError U+9545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9546");
    },
    Error,
    "EncodingError U+9546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9547");
    },
    Error,
    "EncodingError U+9547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9548");
    },
    Error,
    "EncodingError U+9548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9549");
    },
    Error,
    "EncodingError U+9549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u954A");
    },
    Error,
    "EncodingError U+954A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u954B");
    },
    Error,
    "EncodingError U+954B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u954C");
    },
    Error,
    "EncodingError U+954C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u954D");
    },
    Error,
    "EncodingError U+954D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u954E");
    },
    Error,
    "EncodingError U+954E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u954F");
    },
    Error,
    "EncodingError U+954F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9550");
    },
    Error,
    "EncodingError U+9550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9551");
    },
    Error,
    "EncodingError U+9551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9552");
    },
    Error,
    "EncodingError U+9552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9553");
    },
    Error,
    "EncodingError U+9553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9554");
    },
    Error,
    "EncodingError U+9554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9555");
    },
    Error,
    "EncodingError U+9555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9556");
    },
    Error,
    "EncodingError U+9556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9557");
    },
    Error,
    "EncodingError U+9557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9558");
    },
    Error,
    "EncodingError U+9558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9559");
    },
    Error,
    "EncodingError U+9559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u955A");
    },
    Error,
    "EncodingError U+955A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u955B");
    },
    Error,
    "EncodingError U+955B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u955C");
    },
    Error,
    "EncodingError U+955C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u955D");
    },
    Error,
    "EncodingError U+955D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u955E");
    },
    Error,
    "EncodingError U+955E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u955F");
    },
    Error,
    "EncodingError U+955F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9560");
    },
    Error,
    "EncodingError U+9560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9561");
    },
    Error,
    "EncodingError U+9561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9562");
    },
    Error,
    "EncodingError U+9562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9563");
    },
    Error,
    "EncodingError U+9563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9564");
    },
    Error,
    "EncodingError U+9564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9565");
    },
    Error,
    "EncodingError U+9565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9566");
    },
    Error,
    "EncodingError U+9566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9567");
    },
    Error,
    "EncodingError U+9567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9568");
    },
    Error,
    "EncodingError U+9568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9569");
    },
    Error,
    "EncodingError U+9569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u956A");
    },
    Error,
    "EncodingError U+956A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u956B");
    },
    Error,
    "EncodingError U+956B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u956C");
    },
    Error,
    "EncodingError U+956C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u956D");
    },
    Error,
    "EncodingError U+956D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u956E");
    },
    Error,
    "EncodingError U+956E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u956F");
    },
    Error,
    "EncodingError U+956F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9570");
    },
    Error,
    "EncodingError U+9570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9571");
    },
    Error,
    "EncodingError U+9571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9572");
    },
    Error,
    "EncodingError U+9572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9573");
    },
    Error,
    "EncodingError U+9573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9574");
    },
    Error,
    "EncodingError U+9574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9575");
    },
    Error,
    "EncodingError U+9575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9576");
    },
    Error,
    "EncodingError U+9576",
  );
  r = r && ([...ms932Encoder.encode("長")].join(",") === "146,183"); // U+9577
  assertThrows(
    () => {
      ms932Encoder.encode("\u9578");
    },
    Error,
    "EncodingError U+9578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9579");
    },
    Error,
    "EncodingError U+9579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u957A");
    },
    Error,
    "EncodingError U+957A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u957B");
    },
    Error,
    "EncodingError U+957B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u957C");
    },
    Error,
    "EncodingError U+957C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u957D");
    },
    Error,
    "EncodingError U+957D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u957E");
    },
    Error,
    "EncodingError U+957E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u957F");
    },
    Error,
    "EncodingError U+957F",
  );
  r = r && ([...ms932Encoder.encode("門")].join(",") === "150,229"); // U+9580
  assertThrows(
    () => {
      ms932Encoder.encode("\u9581");
    },
    Error,
    "EncodingError U+9581",
  );
  r = r && ([...ms932Encoder.encode("閂閃")].join(",") === "232,120,145,77"); // U+9582
  assertThrows(
    () => {
      ms932Encoder.encode("\u9584");
    },
    Error,
    "EncodingError U+9584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9585");
    },
    Error,
    "EncodingError U+9585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9586");
    },
    Error,
    "EncodingError U+9586",
  );
  r = r && ([...ms932Encoder.encode("閇")].join(",") === "232,121"); // U+9587
  assertThrows(
    () => {
      ms932Encoder.encode("\u9588");
    },
    Error,
    "EncodingError U+9588",
  );
  r = r &&
    ([...ms932Encoder.encode("閉閊開")].join(",") === "149,194,232,122,138,74"); // U+9589
  assertThrows(
    () => {
      ms932Encoder.encode("\u958C");
    },
    Error,
    "EncodingError U+958C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u958D");
    },
    Error,
    "EncodingError U+958D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u958E");
    },
    Error,
    "EncodingError U+958E",
  );
  r = r && ([...ms932Encoder.encode("閏")].join(",") === "137,91"); // U+958F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9590");
    },
    Error,
    "EncodingError U+9590",
  );
  r = r &&
    ([...ms932Encoder.encode("閑閒間閔")].join(",") ===
      "138,213,251,232,138,212,232,123"); // U+9591
  assertThrows(
    () => {
      ms932Encoder.encode("\u9595");
    },
    Error,
    "EncodingError U+9595",
  );
  r = r && ([...ms932Encoder.encode("閖")].join(",") === "232,124"); // U+9596
  assertThrows(
    () => {
      ms932Encoder.encode("\u9597");
    },
    Error,
    "EncodingError U+9597",
  );
  r = r && ([...ms932Encoder.encode("閘閙")].join(",") === "232,125,232,126"); // U+9598
  assertThrows(
    () => {
      ms932Encoder.encode("\u959A");
    },
    Error,
    "EncodingError U+959A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u959B");
    },
    Error,
    "EncodingError U+959B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u959C");
    },
    Error,
    "EncodingError U+959C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u959D");
    },
    Error,
    "EncodingError U+959D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u959E");
    },
    Error,
    "EncodingError U+959E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u959F");
    },
    Error,
    "EncodingError U+959F",
  );
  r = r && ([...ms932Encoder.encode("閠")].join(",") === "232,128"); // U+95A0
  assertThrows(
    () => {
      ms932Encoder.encode("\u95A1");
    },
    Error,
    "EncodingError U+95A1",
  );
  r = r &&
    ([...ms932Encoder.encode("関閣閤閥")].join(",") ===
      "138,214,138,116,141,125,148,180"); // U+95A2
  assertThrows(
    () => {
      ms932Encoder.encode("\u95A6");
    },
    Error,
    "EncodingError U+95A6",
  );
  r = r && ([...ms932Encoder.encode("閧閨")].join(",") === "232,130,232,129"); // U+95A7
  assertThrows(
    () => {
      ms932Encoder.encode("\u95A9");
    },
    Error,
    "EncodingError U+95A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95AA");
    },
    Error,
    "EncodingError U+95AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95AB");
    },
    Error,
    "EncodingError U+95AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95AC");
    },
    Error,
    "EncodingError U+95AC",
  );
  r = r && ([...ms932Encoder.encode("閭")].join(",") === "232,131"); // U+95AD
  assertThrows(
    () => {
      ms932Encoder.encode("\u95AE");
    },
    Error,
    "EncodingError U+95AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95AF");
    },
    Error,
    "EncodingError U+95AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95B0");
    },
    Error,
    "EncodingError U+95B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95B1");
    },
    Error,
    "EncodingError U+95B1",
  );
  r = r && ([...ms932Encoder.encode("閲")].join(",") === "137,123"); // U+95B2
  assertThrows(
    () => {
      ms932Encoder.encode("\u95B3");
    },
    Error,
    "EncodingError U+95B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95B4");
    },
    Error,
    "EncodingError U+95B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95B5");
    },
    Error,
    "EncodingError U+95B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95B6");
    },
    Error,
    "EncodingError U+95B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95B7");
    },
    Error,
    "EncodingError U+95B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95B8");
    },
    Error,
    "EncodingError U+95B8",
  );
  r = r && ([...ms932Encoder.encode("閹")].join(",") === "232,134"); // U+95B9
  assertThrows(
    () => {
      ms932Encoder.encode("\u95BA");
    },
    Error,
    "EncodingError U+95BA",
  );
  r = r && ([...ms932Encoder.encode("閻閼")].join(",") === "232,133,232,132"); // U+95BB
  assertThrows(
    () => {
      ms932Encoder.encode("\u95BD");
    },
    Error,
    "EncodingError U+95BD",
  );
  r = r && ([...ms932Encoder.encode("閾")].join(",") === "232,135"); // U+95BE
  assertThrows(
    () => {
      ms932Encoder.encode("\u95BF");
    },
    Error,
    "EncodingError U+95BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95C0");
    },
    Error,
    "EncodingError U+95C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95C1");
    },
    Error,
    "EncodingError U+95C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95C2");
    },
    Error,
    "EncodingError U+95C2",
  );
  r = r && ([...ms932Encoder.encode("闃")].join(",") === "232,138"); // U+95C3
  assertThrows(
    () => {
      ms932Encoder.encode("\u95C4");
    },
    Error,
    "EncodingError U+95C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95C5");
    },
    Error,
    "EncodingError U+95C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95C6");
    },
    Error,
    "EncodingError U+95C6",
  );
  r = r && ([...ms932Encoder.encode("闇")].join(",") === "136,197"); // U+95C7
  assertThrows(
    () => {
      ms932Encoder.encode("\u95C8");
    },
    Error,
    "EncodingError U+95C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95C9");
    },
    Error,
    "EncodingError U+95C9",
  );
  r = r && ([...ms932Encoder.encode("闊")].join(",") === "232,136"); // U+95CA
  assertThrows(
    () => {
      ms932Encoder.encode("\u95CB");
    },
    Error,
    "EncodingError U+95CB",
  );
  r = r && ([...ms932Encoder.encode("闌闍")].join(",") === "232,140,232,139"); // U+95CC
  assertThrows(
    () => {
      ms932Encoder.encode("\u95CE");
    },
    Error,
    "EncodingError U+95CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95CF");
    },
    Error,
    "EncodingError U+95CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95D0");
    },
    Error,
    "EncodingError U+95D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95D1");
    },
    Error,
    "EncodingError U+95D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95D2");
    },
    Error,
    "EncodingError U+95D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95D3");
    },
    Error,
    "EncodingError U+95D3",
  );
  r = r &&
    ([...ms932Encoder.encode("闔闕闖")].join(",") === "232,142,232,141,232,143"); // U+95D4
  assertThrows(
    () => {
      ms932Encoder.encode("\u95D7");
    },
    Error,
    "EncodingError U+95D7",
  );
  r = r && ([...ms932Encoder.encode("闘")].join(",") === "147,172"); // U+95D8
  assertThrows(
    () => {
      ms932Encoder.encode("\u95D9");
    },
    Error,
    "EncodingError U+95D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95DA");
    },
    Error,
    "EncodingError U+95DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95DB");
    },
    Error,
    "EncodingError U+95DB",
  );
  r = r && ([...ms932Encoder.encode("關")].join(",") === "232,144"); // U+95DC
  assertThrows(
    () => {
      ms932Encoder.encode("\u95DD");
    },
    Error,
    "EncodingError U+95DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95DE");
    },
    Error,
    "EncodingError U+95DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95DF");
    },
    Error,
    "EncodingError U+95DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95E0");
    },
    Error,
    "EncodingError U+95E0",
  );
  r = r && ([...ms932Encoder.encode("闡闢")].join(",") === "232,145,232,147"); // U+95E1
  assertThrows(
    () => {
      ms932Encoder.encode("\u95E3");
    },
    Error,
    "EncodingError U+95E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95E4");
    },
    Error,
    "EncodingError U+95E4",
  );
  r = r && ([...ms932Encoder.encode("闥")].join(",") === "232,146"); // U+95E5
  assertThrows(
    () => {
      ms932Encoder.encode("\u95E6");
    },
    Error,
    "EncodingError U+95E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95E7");
    },
    Error,
    "EncodingError U+95E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95E8");
    },
    Error,
    "EncodingError U+95E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95E9");
    },
    Error,
    "EncodingError U+95E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95EA");
    },
    Error,
    "EncodingError U+95EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95EB");
    },
    Error,
    "EncodingError U+95EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95EC");
    },
    Error,
    "EncodingError U+95EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95ED");
    },
    Error,
    "EncodingError U+95ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95EE");
    },
    Error,
    "EncodingError U+95EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95EF");
    },
    Error,
    "EncodingError U+95EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95F0");
    },
    Error,
    "EncodingError U+95F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95F1");
    },
    Error,
    "EncodingError U+95F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95F2");
    },
    Error,
    "EncodingError U+95F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95F3");
    },
    Error,
    "EncodingError U+95F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95F4");
    },
    Error,
    "EncodingError U+95F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95F5");
    },
    Error,
    "EncodingError U+95F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95F6");
    },
    Error,
    "EncodingError U+95F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95F7");
    },
    Error,
    "EncodingError U+95F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95F8");
    },
    Error,
    "EncodingError U+95F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95F9");
    },
    Error,
    "EncodingError U+95F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95FA");
    },
    Error,
    "EncodingError U+95FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95FB");
    },
    Error,
    "EncodingError U+95FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95FC");
    },
    Error,
    "EncodingError U+95FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95FD");
    },
    Error,
    "EncodingError U+95FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95FE");
    },
    Error,
    "EncodingError U+95FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u95FF");
    },
    Error,
    "EncodingError U+95FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9600");
    },
    Error,
    "EncodingError U+9600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9601");
    },
    Error,
    "EncodingError U+9601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9602");
    },
    Error,
    "EncodingError U+9602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9603");
    },
    Error,
    "EncodingError U+9603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9604");
    },
    Error,
    "EncodingError U+9604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9605");
    },
    Error,
    "EncodingError U+9605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9606");
    },
    Error,
    "EncodingError U+9606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9607");
    },
    Error,
    "EncodingError U+9607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9608");
    },
    Error,
    "EncodingError U+9608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9609");
    },
    Error,
    "EncodingError U+9609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u960A");
    },
    Error,
    "EncodingError U+960A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u960B");
    },
    Error,
    "EncodingError U+960B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u960C");
    },
    Error,
    "EncodingError U+960C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u960D");
    },
    Error,
    "EncodingError U+960D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u960E");
    },
    Error,
    "EncodingError U+960E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u960F");
    },
    Error,
    "EncodingError U+960F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9610");
    },
    Error,
    "EncodingError U+9610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9611");
    },
    Error,
    "EncodingError U+9611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9612");
    },
    Error,
    "EncodingError U+9612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9613");
    },
    Error,
    "EncodingError U+9613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9614");
    },
    Error,
    "EncodingError U+9614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9615");
    },
    Error,
    "EncodingError U+9615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9616");
    },
    Error,
    "EncodingError U+9616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9617");
    },
    Error,
    "EncodingError U+9617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9618");
    },
    Error,
    "EncodingError U+9618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9619");
    },
    Error,
    "EncodingError U+9619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u961A");
    },
    Error,
    "EncodingError U+961A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u961B");
    },
    Error,
    "EncodingError U+961B",
  );
  r = r && ([...ms932Encoder.encode("阜")].join(",") === "149,140"); // U+961C
  assertThrows(
    () => {
      ms932Encoder.encode("\u961D");
    },
    Error,
    "EncodingError U+961D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u961E");
    },
    Error,
    "EncodingError U+961E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u961F");
    },
    Error,
    "EncodingError U+961F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9620");
    },
    Error,
    "EncodingError U+9620",
  );
  r = r && ([...ms932Encoder.encode("阡")].join(",") === "232,148"); // U+9621
  assertThrows(
    () => {
      ms932Encoder.encode("\u9622");
    },
    Error,
    "EncodingError U+9622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9623");
    },
    Error,
    "EncodingError U+9623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9624");
    },
    Error,
    "EncodingError U+9624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9625");
    },
    Error,
    "EncodingError U+9625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9626");
    },
    Error,
    "EncodingError U+9626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9627");
    },
    Error,
    "EncodingError U+9627",
  );
  r = r && ([...ms932Encoder.encode("阨")].join(",") === "232,149"); // U+9628
  assertThrows(
    () => {
      ms932Encoder.encode("\u9629");
    },
    Error,
    "EncodingError U+9629",
  );
  r = r && ([...ms932Encoder.encode("阪")].join(",") === "141,227"); // U+962A
  assertThrows(
    () => {
      ms932Encoder.encode("\u962B");
    },
    Error,
    "EncodingError U+962B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u962C");
    },
    Error,
    "EncodingError U+962C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u962D");
    },
    Error,
    "EncodingError U+962D",
  );
  r = r && ([...ms932Encoder.encode("阮阯")].join(",") === "232,150,232,151"); // U+962E
  assertThrows(
    () => {
      ms932Encoder.encode("\u9630");
    },
    Error,
    "EncodingError U+9630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9631");
    },
    Error,
    "EncodingError U+9631",
  );
  r = r && ([...ms932Encoder.encode("防")].join(",") === "150,104"); // U+9632
  assertThrows(
    () => {
      ms932Encoder.encode("\u9633");
    },
    Error,
    "EncodingError U+9633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9634");
    },
    Error,
    "EncodingError U+9634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9635");
    },
    Error,
    "EncodingError U+9635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9636");
    },
    Error,
    "EncodingError U+9636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9637");
    },
    Error,
    "EncodingError U+9637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9638");
    },
    Error,
    "EncodingError U+9638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9639");
    },
    Error,
    "EncodingError U+9639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u963A");
    },
    Error,
    "EncodingError U+963A",
  );
  r = r && ([...ms932Encoder.encode("阻")].join(",") === "145,106"); // U+963B
  assertThrows(
    () => {
      ms932Encoder.encode("\u963C");
    },
    Error,
    "EncodingError U+963C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u963D");
    },
    Error,
    "EncodingError U+963D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u963E");
    },
    Error,
    "EncodingError U+963E",
  );
  r = r && ([...ms932Encoder.encode("阿陀")].join(",") === "136,162,145,201"); // U+963F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9641");
    },
    Error,
    "EncodingError U+9641",
  );
  r = r && ([...ms932Encoder.encode("陂")].join(",") === "232,152"); // U+9642
  assertThrows(
    () => {
      ms932Encoder.encode("\u9643");
    },
    Error,
    "EncodingError U+9643",
  );
  r = r && ([...ms932Encoder.encode("附")].join(",") === "149,141"); // U+9644
  assertThrows(
    () => {
      ms932Encoder.encode("\u9645");
    },
    Error,
    "EncodingError U+9645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9646");
    },
    Error,
    "EncodingError U+9646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9647");
    },
    Error,
    "EncodingError U+9647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9648");
    },
    Error,
    "EncodingError U+9648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9649");
    },
    Error,
    "EncodingError U+9649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u964A");
    },
    Error,
    "EncodingError U+964A",
  );
  r = r &&
    ([...ms932Encoder.encode("陋陌降")].join(",") === "232,155,232,153,141,126"); // U+964B
  assertThrows(
    () => {
      ms932Encoder.encode("\u964E");
    },
    Error,
    "EncodingError U+964E",
  );
  r = r && ([...ms932Encoder.encode("陏限")].join(",") === "232,154,140,192"); // U+964F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9651");
    },
    Error,
    "EncodingError U+9651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9652");
    },
    Error,
    "EncodingError U+9652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9653");
    },
    Error,
    "EncodingError U+9653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9654");
    },
    Error,
    "EncodingError U+9654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9655");
    },
    Error,
    "EncodingError U+9655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9656");
    },
    Error,
    "EncodingError U+9656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9657");
    },
    Error,
    "EncodingError U+9657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9658");
    },
    Error,
    "EncodingError U+9658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9659");
    },
    Error,
    "EncodingError U+9659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u965A");
    },
    Error,
    "EncodingError U+965A",
  );
  r = r &&
    ([...ms932Encoder.encode("陛陜陝陞陟")].join(",") ===
      "149,195,232,157,232,159,232,158,232,160"); // U+965B
  assertThrows(
    () => {
      ms932Encoder.encode("\u9660");
    },
    Error,
    "EncodingError U+9660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9661");
    },
    Error,
    "EncodingError U+9661",
  );
  r = r &&
    ([...ms932Encoder.encode("院陣除陥陦")].join(",") ===
      "137,64,144,119,143,156,138,215,232,161"); // U+9662
  assertThrows(
    () => {
      ms932Encoder.encode("\u9667");
    },
    Error,
    "EncodingError U+9667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9668");
    },
    Error,
    "EncodingError U+9668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9669");
    },
    Error,
    "EncodingError U+9669",
  );
  r = r && ([...ms932Encoder.encode("陪")].join(",") === "148,134"); // U+966A
  assertThrows(
    () => {
      ms932Encoder.encode("\u966B");
    },
    Error,
    "EncodingError U+966B",
  );
  r = r && ([...ms932Encoder.encode("陬")].join(",") === "232,163"); // U+966C
  assertThrows(
    () => {
      ms932Encoder.encode("\u966D");
    },
    Error,
    "EncodingError U+966D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u966E");
    },
    Error,
    "EncodingError U+966E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u966F");
    },
    Error,
    "EncodingError U+966F",
  );
  r = r && ([...ms932Encoder.encode("陰")].join(",") === "137,65"); // U+9670
  assertThrows(
    () => {
      ms932Encoder.encode("\u9671");
    },
    Error,
    "EncodingError U+9671",
  );
  r = r && ([...ms932Encoder.encode("陲陳")].join(",") === "232,162,146,194"); // U+9672
  assertThrows(
    () => {
      ms932Encoder.encode("\u9674");
    },
    Error,
    "EncodingError U+9674",
  );
  r = r &&
    ([...ms932Encoder.encode("陵陶陷陸")].join(",") ===
      "151,203,147,169,232,156,151,164"); // U+9675
  assertThrows(
    () => {
      ms932Encoder.encode("\u9679");
    },
    Error,
    "EncodingError U+9679",
  );
  r = r && ([...ms932Encoder.encode("険")].join(",") === "140,175"); // U+967A
  assertThrows(
    () => {
      ms932Encoder.encode("\u967B");
    },
    Error,
    "EncodingError U+967B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u967C");
    },
    Error,
    "EncodingError U+967C",
  );
  r = r && ([...ms932Encoder.encode("陽")].join(",") === "151,122"); // U+967D
  assertThrows(
    () => {
      ms932Encoder.encode("\u967E");
    },
    Error,
    "EncodingError U+967E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u967F");
    },
    Error,
    "EncodingError U+967F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9680");
    },
    Error,
    "EncodingError U+9680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9681");
    },
    Error,
    "EncodingError U+9681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9682");
    },
    Error,
    "EncodingError U+9682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9683");
    },
    Error,
    "EncodingError U+9683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9684");
    },
    Error,
    "EncodingError U+9684",
  );
  r = r && ([...ms932Encoder.encode("隅隆")].join(",") === "139,247,151,178"); // U+9685
  assertThrows(
    () => {
      ms932Encoder.encode("\u9687");
    },
    Error,
    "EncodingError U+9687",
  );
  r = r && ([...ms932Encoder.encode("隈")].join(",") === "140,71"); // U+9688
  assertThrows(
    () => {
      ms932Encoder.encode("\u9689");
    },
    Error,
    "EncodingError U+9689",
  );
  r = r && ([...ms932Encoder.encode("隊隋")].join(",") === "145,224,228,64"); // U+968A
  assertThrows(
    () => {
      ms932Encoder.encode("\u968C");
    },
    Error,
    "EncodingError U+968C",
  );
  r = r &&
    ([...ms932Encoder.encode("隍階随")].join(",") === "232,164,138,75,144,143"); // U+968D
  assertThrows(
    () => {
      ms932Encoder.encode("\u9690");
    },
    Error,
    "EncodingError U+9690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9691");
    },
    Error,
    "EncodingError U+9691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9692");
    },
    Error,
    "EncodingError U+9692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9693");
    },
    Error,
    "EncodingError U+9693",
  );
  r = r && ([...ms932Encoder.encode("隔隕")].join(",") === "138,117,232,166"); // U+9694
  assertThrows(
    () => {
      ms932Encoder.encode("\u9696");
    },
    Error,
    "EncodingError U+9696",
  );
  r = r &&
    ([...ms932Encoder.encode("隗隘隙")].join(",") === "232,167,232,165,140,132"); // U+9697
  assertThrows(
    () => {
      ms932Encoder.encode("\u969A");
    },
    Error,
    "EncodingError U+969A",
  );
  r = r &&
    ([...ms932Encoder.encode("際障隝")].join(",") === "141,219,143,225,251,235"); // U+969B
  assertThrows(
    () => {
      ms932Encoder.encode("\u969E");
    },
    Error,
    "EncodingError U+969E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u969F");
    },
    Error,
    "EncodingError U+969F",
  );
  r = r && ([...ms932Encoder.encode("隠")].join(",") === "137,66"); // U+96A0
  assertThrows(
    () => {
      ms932Encoder.encode("\u96A1");
    },
    Error,
    "EncodingError U+96A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96A2");
    },
    Error,
    "EncodingError U+96A2",
  );
  r = r && ([...ms932Encoder.encode("隣")].join(",") === "151,215"); // U+96A3
  assertThrows(
    () => {
      ms932Encoder.encode("\u96A4");
    },
    Error,
    "EncodingError U+96A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96A5");
    },
    Error,
    "EncodingError U+96A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96A6");
    },
    Error,
    "EncodingError U+96A6",
  );
  r = r && ([...ms932Encoder.encode("隧隨")].join(",") === "232,169,231,172"); // U+96A7
  assertThrows(
    () => {
      ms932Encoder.encode("\u96A9");
    },
    Error,
    "EncodingError U+96A9",
  );
  r = r && ([...ms932Encoder.encode("險")].join(",") === "232,168"); // U+96AA
  assertThrows(
    () => {
      ms932Encoder.encode("\u96AB");
    },
    Error,
    "EncodingError U+96AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96AC");
    },
    Error,
    "EncodingError U+96AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96AD");
    },
    Error,
    "EncodingError U+96AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96AE");
    },
    Error,
    "EncodingError U+96AE",
  );
  r = r &&
    ([...ms932Encoder.encode("隯隰隱隲")].join(",") ===
      "251,236,232,172,232,170,232,171"); // U+96AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u96B3");
    },
    Error,
    "EncodingError U+96B3",
  );
  r = r && ([...ms932Encoder.encode("隴")].join(",") === "232,173"); // U+96B4
  assertThrows(
    () => {
      ms932Encoder.encode("\u96B5");
    },
    Error,
    "EncodingError U+96B5",
  );
  r = r &&
    ([...ms932Encoder.encode("隶隷隸隹")].join(",") ===
      "232,174,151,234,232,175,232,176"); // U+96B6
  assertThrows(
    () => {
      ms932Encoder.encode("\u96BA");
    },
    Error,
    "EncodingError U+96BA",
  );
  r = r && ([...ms932Encoder.encode("隻隼")].join(",") === "144,199,148,185"); // U+96BB
  assertThrows(
    () => {
      ms932Encoder.encode("\u96BD");
    },
    Error,
    "EncodingError U+96BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96BE");
    },
    Error,
    "EncodingError U+96BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96BF");
    },
    Error,
    "EncodingError U+96BF",
  );
  r = r && ([...ms932Encoder.encode("雀雁")].join(",") === "144,157,138,229"); // U+96C0
  assertThrows(
    () => {
      ms932Encoder.encode("\u96C2");
    },
    Error,
    "EncodingError U+96C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96C3");
    },
    Error,
    "EncodingError U+96C3",
  );
  r = r &&
    ([...ms932Encoder.encode("雄雅集雇")].join(",") ===
      "151,89,137,235,143,87,140,217"); // U+96C4
  assertThrows(
    () => {
      ms932Encoder.encode("\u96C8");
    },
    Error,
    "EncodingError U+96C8",
  );
  r = r && ([...ms932Encoder.encode("雉")].join(",") === "232,179"); // U+96C9
  assertThrows(
    () => {
      ms932Encoder.encode("\u96CA");
    },
    Error,
    "EncodingError U+96CA",
  );
  r = r &&
    ([...ms932Encoder.encode("雋雌雍雎")].join(",") ===
      "232,178,142,147,232,180,232,177"); // U+96CB
  assertThrows(
    () => {
      ms932Encoder.encode("\u96CF");
    },
    Error,
    "EncodingError U+96CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96D0");
    },
    Error,
    "EncodingError U+96D0",
  );
  r = r && ([...ms932Encoder.encode("雑")].join(",") === "142,71"); // U+96D1
  assertThrows(
    () => {
      ms932Encoder.encode("\u96D2");
    },
    Error,
    "EncodingError U+96D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96D3");
    },
    Error,
    "EncodingError U+96D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96D4");
    },
    Error,
    "EncodingError U+96D4",
  );
  r = r && ([...ms932Encoder.encode("雕雖")].join(",") === "232,184,229,171"); // U+96D5
  assertThrows(
    () => {
      ms932Encoder.encode("\u96D7");
    },
    Error,
    "EncodingError U+96D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96D8");
    },
    Error,
    "EncodingError U+96D8",
  );
  r = r && ([...ms932Encoder.encode("雙")].join(",") === "153,212"); // U+96D9
  assertThrows(
    () => {
      ms932Encoder.encode("\u96DA");
    },
    Error,
    "EncodingError U+96DA",
  );
  r = r && ([...ms932Encoder.encode("雛雜")].join(",") === "144,151,232,182"); // U+96DB
  assertThrows(
    () => {
      ms932Encoder.encode("\u96DD");
    },
    Error,
    "EncodingError U+96DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96DE");
    },
    Error,
    "EncodingError U+96DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96DF");
    },
    Error,
    "EncodingError U+96DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96E0");
    },
    Error,
    "EncodingError U+96E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96E1");
    },
    Error,
    "EncodingError U+96E1",
  );
  r = r && ([...ms932Encoder.encode("離難")].join(",") === "151,163,147,239"); // U+96E2
  assertThrows(
    () => {
      ms932Encoder.encode("\u96E4");
    },
    Error,
    "EncodingError U+96E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96E5");
    },
    Error,
    "EncodingError U+96E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96E6");
    },
    Error,
    "EncodingError U+96E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96E7");
    },
    Error,
    "EncodingError U+96E7",
  );
  r = r && ([...ms932Encoder.encode("雨")].join(",") === "137,74"); // U+96E8
  assertThrows(
    () => {
      ms932Encoder.encode("\u96E9");
    },
    Error,
    "EncodingError U+96E9",
  );
  r = r && ([...ms932Encoder.encode("雪雫")].join(",") === "144,225,142,180"); // U+96EA
  assertThrows(
    () => {
      ms932Encoder.encode("\u96EC");
    },
    Error,
    "EncodingError U+96EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96ED");
    },
    Error,
    "EncodingError U+96ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96EE");
    },
    Error,
    "EncodingError U+96EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96EF");
    },
    Error,
    "EncodingError U+96EF",
  );
  r = r && ([...ms932Encoder.encode("雰")].join(",") === "149,181"); // U+96F0
  assertThrows(
    () => {
      ms932Encoder.encode("\u96F1");
    },
    Error,
    "EncodingError U+96F1",
  );
  r = r && ([...ms932Encoder.encode("雲")].join(",") === "137,95"); // U+96F2
  assertThrows(
    () => {
      ms932Encoder.encode("\u96F3");
    },
    Error,
    "EncodingError U+96F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96F4");
    },
    Error,
    "EncodingError U+96F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96F5");
    },
    Error,
    "EncodingError U+96F5",
  );
  r = r && ([...ms932Encoder.encode("零雷")].join(",") === "151,235,151,139"); // U+96F6
  assertThrows(
    () => {
      ms932Encoder.encode("\u96F8");
    },
    Error,
    "EncodingError U+96F8",
  );
  r = r && ([...ms932Encoder.encode("雹")].join(",") === "232,185"); // U+96F9
  assertThrows(
    () => {
      ms932Encoder.encode("\u96FA");
    },
    Error,
    "EncodingError U+96FA",
  );
  r = r && ([...ms932Encoder.encode("電")].join(",") === "147,100"); // U+96FB
  assertThrows(
    () => {
      ms932Encoder.encode("\u96FC");
    },
    Error,
    "EncodingError U+96FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96FD");
    },
    Error,
    "EncodingError U+96FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96FE");
    },
    Error,
    "EncodingError U+96FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u96FF");
    },
    Error,
    "EncodingError U+96FF",
  );
  r = r && ([...ms932Encoder.encode("需")].join(",") === "142,249"); // U+9700
  assertThrows(
    () => {
      ms932Encoder.encode("\u9701");
    },
    Error,
    "EncodingError U+9701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9702");
    },
    Error,
    "EncodingError U+9702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9703");
    },
    Error,
    "EncodingError U+9703",
  );
  r = r && ([...ms932Encoder.encode("霄")].join(",") === "232,186"); // U+9704
  assertThrows(
    () => {
      ms932Encoder.encode("\u9705");
    },
    Error,
    "EncodingError U+9705",
  );
  r = r &&
    ([...ms932Encoder.encode("霆震霈")].join(",") === "232,187,144,107,232,188"); // U+9706
  assertThrows(
    () => {
      ms932Encoder.encode("\u9709");
    },
    Error,
    "EncodingError U+9709",
  );
  r = r && ([...ms932Encoder.encode("霊")].join(",") === "151,236"); // U+970A
  assertThrows(
    () => {
      ms932Encoder.encode("\u970B");
    },
    Error,
    "EncodingError U+970B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u970C");
    },
    Error,
    "EncodingError U+970C",
  );
  r = r &&
    ([...ms932Encoder.encode("霍霎霏")].join(",") === "232,183,232,190,232,192"); // U+970D
  assertThrows(
    () => {
      ms932Encoder.encode("\u9710");
    },
    Error,
    "EncodingError U+9710",
  );
  r = r && ([...ms932Encoder.encode("霑")].join(",") === "232,191"); // U+9711
  assertThrows(
    () => {
      ms932Encoder.encode("\u9712");
    },
    Error,
    "EncodingError U+9712",
  );
  r = r && ([...ms932Encoder.encode("霓")].join(",") === "232,189"); // U+9713
  assertThrows(
    () => {
      ms932Encoder.encode("\u9714");
    },
    Error,
    "EncodingError U+9714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9715");
    },
    Error,
    "EncodingError U+9715",
  );
  r = r && ([...ms932Encoder.encode("霖")].join(",") === "232,193"); // U+9716
  assertThrows(
    () => {
      ms932Encoder.encode("\u9717");
    },
    Error,
    "EncodingError U+9717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9718");
    },
    Error,
    "EncodingError U+9718",
  );
  r = r && ([...ms932Encoder.encode("霙")].join(",") === "232,194"); // U+9719
  assertThrows(
    () => {
      ms932Encoder.encode("\u971A");
    },
    Error,
    "EncodingError U+971A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u971B");
    },
    Error,
    "EncodingError U+971B",
  );
  r = r && ([...ms932Encoder.encode("霜")].join(",") === "145,154"); // U+971C
  assertThrows(
    () => {
      ms932Encoder.encode("\u971D");
    },
    Error,
    "EncodingError U+971D",
  );
  r = r && ([...ms932Encoder.encode("霞")].join(",") === "137,224"); // U+971E
  assertThrows(
    () => {
      ms932Encoder.encode("\u971F");
    },
    Error,
    "EncodingError U+971F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9720");
    },
    Error,
    "EncodingError U+9720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9721");
    },
    Error,
    "EncodingError U+9721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9722");
    },
    Error,
    "EncodingError U+9722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9723");
    },
    Error,
    "EncodingError U+9723",
  );
  r = r && ([...ms932Encoder.encode("霤")].join(",") === "232,195"); // U+9724
  assertThrows(
    () => {
      ms932Encoder.encode("\u9725");
    },
    Error,
    "EncodingError U+9725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9726");
    },
    Error,
    "EncodingError U+9726",
  );
  r = r && ([...ms932Encoder.encode("霧")].join(",") === "150,182"); // U+9727
  assertThrows(
    () => {
      ms932Encoder.encode("\u9728");
    },
    Error,
    "EncodingError U+9728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9729");
    },
    Error,
    "EncodingError U+9729",
  );
  r = r && ([...ms932Encoder.encode("霪")].join(",") === "232,196"); // U+972A
  assertThrows(
    () => {
      ms932Encoder.encode("\u972B");
    },
    Error,
    "EncodingError U+972B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u972C");
    },
    Error,
    "EncodingError U+972C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u972D");
    },
    Error,
    "EncodingError U+972D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u972E");
    },
    Error,
    "EncodingError U+972E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u972F");
    },
    Error,
    "EncodingError U+972F",
  );
  r = r && ([...ms932Encoder.encode("霰")].join(",") === "232,197"); // U+9730
  assertThrows(
    () => {
      ms932Encoder.encode("\u9731");
    },
    Error,
    "EncodingError U+9731",
  );
  r = r && ([...ms932Encoder.encode("露霳")].join(",") === "152,73,251,237"); // U+9732
  assertThrows(
    () => {
      ms932Encoder.encode("\u9734");
    },
    Error,
    "EncodingError U+9734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9735");
    },
    Error,
    "EncodingError U+9735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9736");
    },
    Error,
    "EncodingError U+9736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9737");
    },
    Error,
    "EncodingError U+9737",
  );
  r = r && ([...ms932Encoder.encode("霸霹")].join(",") === "158,80,232,198"); // U+9738
  assertThrows(
    () => {
      ms932Encoder.encode("\u973A");
    },
    Error,
    "EncodingError U+973A",
  );
  r = r && ([...ms932Encoder.encode("霻")].join(",") === "251,238"); // U+973B
  assertThrows(
    () => {
      ms932Encoder.encode("\u973C");
    },
    Error,
    "EncodingError U+973C",
  );
  r = r && ([...ms932Encoder.encode("霽霾")].join(",") === "232,199,232,200"); // U+973D
  assertThrows(
    () => {
      ms932Encoder.encode("\u973F");
    },
    Error,
    "EncodingError U+973F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9740");
    },
    Error,
    "EncodingError U+9740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9741");
    },
    Error,
    "EncodingError U+9741",
  );
  r = r &&
    ([...ms932Encoder.encode("靂靃靄")].join(",") === "232,204,251,239,232,201"); // U+9742
  assertThrows(
    () => {
      ms932Encoder.encode("\u9745");
    },
    Error,
    "EncodingError U+9745",
  );
  r = r && ([...ms932Encoder.encode("靆")].join(",") === "232,202"); // U+9746
  assertThrows(
    () => {
      ms932Encoder.encode("\u9747");
    },
    Error,
    "EncodingError U+9747",
  );
  r = r && ([...ms932Encoder.encode("靈靉")].join(",") === "232,203,232,205"); // U+9748
  assertThrows(
    () => {
      ms932Encoder.encode("\u974A");
    },
    Error,
    "EncodingError U+974A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u974B");
    },
    Error,
    "EncodingError U+974B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u974C");
    },
    Error,
    "EncodingError U+974C",
  );
  r = r && ([...ms932Encoder.encode("靍")].join(",") === "251,240"); // U+974D
  assertThrows(
    () => {
      ms932Encoder.encode("\u974E");
    },
    Error,
    "EncodingError U+974E",
  );
  r = r && ([...ms932Encoder.encode("靏")].join(",") === "251,241"); // U+974F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9750");
    },
    Error,
    "EncodingError U+9750",
  );
  r = r && ([...ms932Encoder.encode("靑青")].join(",") === "251,242,144,194"); // U+9751
  assertThrows(
    () => {
      ms932Encoder.encode("\u9753");
    },
    Error,
    "EncodingError U+9753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9754");
    },
    Error,
    "EncodingError U+9754",
  );
  r = r && ([...ms932Encoder.encode("靕靖")].join(",") === "251,243,150,245"); // U+9755
  assertThrows(
    () => {
      ms932Encoder.encode("\u9757");
    },
    Error,
    "EncodingError U+9757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9758");
    },
    Error,
    "EncodingError U+9758",
  );
  r = r && ([...ms932Encoder.encode("静")].join(",") === "144,195"); // U+9759
  assertThrows(
    () => {
      ms932Encoder.encode("\u975A");
    },
    Error,
    "EncodingError U+975A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u975B");
    },
    Error,
    "EncodingError U+975B",
  );
  r = r && ([...ms932Encoder.encode("靜")].join(",") === "232,206"); // U+975C
  assertThrows(
    () => {
      ms932Encoder.encode("\u975D");
    },
    Error,
    "EncodingError U+975D",
  );
  r = r && ([...ms932Encoder.encode("非")].join(",") === "148,241"); // U+975E
  assertThrows(
    () => {
      ms932Encoder.encode("\u975F");
    },
    Error,
    "EncodingError U+975F",
  );
  r = r &&
    ([...ms932Encoder.encode("靠靡面")].join(",") === "232,207,234,114,150,202"); // U+9760
  assertThrows(
    () => {
      ms932Encoder.encode("\u9763");
    },
    Error,
    "EncodingError U+9763",
  );
  r = r && ([...ms932Encoder.encode("靤")].join(",") === "232,208"); // U+9764
  assertThrows(
    () => {
      ms932Encoder.encode("\u9765");
    },
    Error,
    "EncodingError U+9765",
  );
  r = r && ([...ms932Encoder.encode("靦")].join(",") === "232,209"); // U+9766
  assertThrows(
    () => {
      ms932Encoder.encode("\u9767");
    },
    Error,
    "EncodingError U+9767",
  );
  r = r && ([...ms932Encoder.encode("靨革")].join(",") === "232,210,138,118"); // U+9768
  assertThrows(
    () => {
      ms932Encoder.encode("\u976A");
    },
    Error,
    "EncodingError U+976A",
  );
  r = r && ([...ms932Encoder.encode("靫")].join(",") === "232,212"); // U+976B
  assertThrows(
    () => {
      ms932Encoder.encode("\u976C");
    },
    Error,
    "EncodingError U+976C",
  );
  r = r && ([...ms932Encoder.encode("靭")].join(",") === "144,120"); // U+976D
  assertThrows(
    () => {
      ms932Encoder.encode("\u976E");
    },
    Error,
    "EncodingError U+976E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u976F");
    },
    Error,
    "EncodingError U+976F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9770");
    },
    Error,
    "EncodingError U+9770",
  );
  r = r && ([...ms932Encoder.encode("靱")].join(",") === "232,213"); // U+9771
  assertThrows(
    () => {
      ms932Encoder.encode("\u9772");
    },
    Error,
    "EncodingError U+9772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9773");
    },
    Error,
    "EncodingError U+9773",
  );
  r = r && ([...ms932Encoder.encode("靴")].join(",") === "140,67"); // U+9774
  assertThrows(
    () => {
      ms932Encoder.encode("\u9775");
    },
    Error,
    "EncodingError U+9775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9776");
    },
    Error,
    "EncodingError U+9776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9777");
    },
    Error,
    "EncodingError U+9777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9778");
    },
    Error,
    "EncodingError U+9778",
  );
  r = r && ([...ms932Encoder.encode("靹靺")].join(",") === "232,214,232,218"); // U+9779
  assertThrows(
    () => {
      ms932Encoder.encode("\u977B");
    },
    Error,
    "EncodingError U+977B",
  );
  r = r && ([...ms932Encoder.encode("靼")].join(",") === "232,216"); // U+977C
  assertThrows(
    () => {
      ms932Encoder.encode("\u977D");
    },
    Error,
    "EncodingError U+977D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u977E");
    },
    Error,
    "EncodingError U+977E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u977F");
    },
    Error,
    "EncodingError U+977F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9780");
    },
    Error,
    "EncodingError U+9780",
  );
  r = r && ([...ms932Encoder.encode("鞁")].join(",") === "232,217"); // U+9781
  assertThrows(
    () => {
      ms932Encoder.encode("\u9782");
    },
    Error,
    "EncodingError U+9782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9783");
    },
    Error,
    "EncodingError U+9783",
  );
  r = r &&
    ([...ms932Encoder.encode("鞄鞅鞆")].join(",") === "138,147,232,215,232,219"); // U+9784
  assertThrows(
    () => {
      ms932Encoder.encode("\u9787");
    },
    Error,
    "EncodingError U+9787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9788");
    },
    Error,
    "EncodingError U+9788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9789");
    },
    Error,
    "EncodingError U+9789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u978A");
    },
    Error,
    "EncodingError U+978A",
  );
  r = r && ([...ms932Encoder.encode("鞋")].join(",") === "232,220"); // U+978B
  assertThrows(
    () => {
      ms932Encoder.encode("\u978C");
    },
    Error,
    "EncodingError U+978C",
  );
  r = r && ([...ms932Encoder.encode("鞍")].join(",") === "136,198"); // U+978D
  assertThrows(
    () => {
      ms932Encoder.encode("\u978E");
    },
    Error,
    "EncodingError U+978E",
  );
  r = r && ([...ms932Encoder.encode("鞏鞐")].join(",") === "232,221,232,222"); // U+978F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9791");
    },
    Error,
    "EncodingError U+9791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9792");
    },
    Error,
    "EncodingError U+9792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9793");
    },
    Error,
    "EncodingError U+9793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9794");
    },
    Error,
    "EncodingError U+9794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9795");
    },
    Error,
    "EncodingError U+9795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9796");
    },
    Error,
    "EncodingError U+9796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9797");
    },
    Error,
    "EncodingError U+9797",
  );
  r = r && ([...ms932Encoder.encode("鞘")].join(",") === "143,226"); // U+9798
  assertThrows(
    () => {
      ms932Encoder.encode("\u9799");
    },
    Error,
    "EncodingError U+9799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u979A");
    },
    Error,
    "EncodingError U+979A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u979B");
    },
    Error,
    "EncodingError U+979B",
  );
  r = r && ([...ms932Encoder.encode("鞜")].join(",") === "232,223"); // U+979C
  assertThrows(
    () => {
      ms932Encoder.encode("\u979D");
    },
    Error,
    "EncodingError U+979D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u979E");
    },
    Error,
    "EncodingError U+979E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u979F");
    },
    Error,
    "EncodingError U+979F",
  );
  r = r && ([...ms932Encoder.encode("鞠")].join(",") === "139,102"); // U+97A0
  assertThrows(
    () => {
      ms932Encoder.encode("\u97A1");
    },
    Error,
    "EncodingError U+97A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97A2");
    },
    Error,
    "EncodingError U+97A2",
  );
  r = r && ([...ms932Encoder.encode("鞣")].join(",") === "232,226"); // U+97A3
  assertThrows(
    () => {
      ms932Encoder.encode("\u97A4");
    },
    Error,
    "EncodingError U+97A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97A5");
    },
    Error,
    "EncodingError U+97A5",
  );
  r = r && ([...ms932Encoder.encode("鞦")].join(",") === "232,225"); // U+97A6
  assertThrows(
    () => {
      ms932Encoder.encode("\u97A7");
    },
    Error,
    "EncodingError U+97A7",
  );
  r = r && ([...ms932Encoder.encode("鞨")].join(",") === "232,224"); // U+97A8
  assertThrows(
    () => {
      ms932Encoder.encode("\u97A9");
    },
    Error,
    "EncodingError U+97A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97AA");
    },
    Error,
    "EncodingError U+97AA",
  );
  r = r && ([...ms932Encoder.encode("鞫")].join(",") === "230,145"); // U+97AB
  assertThrows(
    () => {
      ms932Encoder.encode("\u97AC");
    },
    Error,
    "EncodingError U+97AC",
  );
  r = r && ([...ms932Encoder.encode("鞭")].join(",") === "149,218"); // U+97AD
  assertThrows(
    () => {
      ms932Encoder.encode("\u97AE");
    },
    Error,
    "EncodingError U+97AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97AF");
    },
    Error,
    "EncodingError U+97AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97B0");
    },
    Error,
    "EncodingError U+97B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97B1");
    },
    Error,
    "EncodingError U+97B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97B2");
    },
    Error,
    "EncodingError U+97B2",
  );
  r = r && ([...ms932Encoder.encode("鞳鞴")].join(",") === "232,227,232,228"); // U+97B3
  assertThrows(
    () => {
      ms932Encoder.encode("\u97B5");
    },
    Error,
    "EncodingError U+97B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97B6");
    },
    Error,
    "EncodingError U+97B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97B7");
    },
    Error,
    "EncodingError U+97B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97B8");
    },
    Error,
    "EncodingError U+97B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97B9");
    },
    Error,
    "EncodingError U+97B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97BA");
    },
    Error,
    "EncodingError U+97BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97BB");
    },
    Error,
    "EncodingError U+97BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97BC");
    },
    Error,
    "EncodingError U+97BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97BD");
    },
    Error,
    "EncodingError U+97BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97BE");
    },
    Error,
    "EncodingError U+97BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97BF");
    },
    Error,
    "EncodingError U+97BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97C0");
    },
    Error,
    "EncodingError U+97C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97C1");
    },
    Error,
    "EncodingError U+97C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97C2");
    },
    Error,
    "EncodingError U+97C2",
  );
  r = r && ([...ms932Encoder.encode("韃")].join(",") === "232,229"); // U+97C3
  assertThrows(
    () => {
      ms932Encoder.encode("\u97C4");
    },
    Error,
    "EncodingError U+97C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97C5");
    },
    Error,
    "EncodingError U+97C5",
  );
  r = r && ([...ms932Encoder.encode("韆")].join(",") === "232,230"); // U+97C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u97C7");
    },
    Error,
    "EncodingError U+97C7",
  );
  r = r && ([...ms932Encoder.encode("韈")].join(",") === "232,231"); // U+97C8
  assertThrows(
    () => {
      ms932Encoder.encode("\u97C9");
    },
    Error,
    "EncodingError U+97C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97CA");
    },
    Error,
    "EncodingError U+97CA",
  );
  r = r && ([...ms932Encoder.encode("韋")].join(",") === "232,232"); // U+97CB
  assertThrows(
    () => {
      ms932Encoder.encode("\u97CC");
    },
    Error,
    "EncodingError U+97CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97CD");
    },
    Error,
    "EncodingError U+97CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97CE");
    },
    Error,
    "EncodingError U+97CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97CF");
    },
    Error,
    "EncodingError U+97CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97D0");
    },
    Error,
    "EncodingError U+97D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97D1");
    },
    Error,
    "EncodingError U+97D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97D2");
    },
    Error,
    "EncodingError U+97D2",
  );
  r = r && ([...ms932Encoder.encode("韓")].join(",") === "138,216"); // U+97D3
  assertThrows(
    () => {
      ms932Encoder.encode("\u97D4");
    },
    Error,
    "EncodingError U+97D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97D5");
    },
    Error,
    "EncodingError U+97D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97D6");
    },
    Error,
    "EncodingError U+97D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97D7");
    },
    Error,
    "EncodingError U+97D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97D8");
    },
    Error,
    "EncodingError U+97D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97D9");
    },
    Error,
    "EncodingError U+97D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97DA");
    },
    Error,
    "EncodingError U+97DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97DB");
    },
    Error,
    "EncodingError U+97DB",
  );
  r = r && ([...ms932Encoder.encode("韜")].join(",") === "232,233"); // U+97DC
  assertThrows(
    () => {
      ms932Encoder.encode("\u97DD");
    },
    Error,
    "EncodingError U+97DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97DE");
    },
    Error,
    "EncodingError U+97DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97DF");
    },
    Error,
    "EncodingError U+97DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97E0");
    },
    Error,
    "EncodingError U+97E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97E1");
    },
    Error,
    "EncodingError U+97E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97E2");
    },
    Error,
    "EncodingError U+97E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97E3");
    },
    Error,
    "EncodingError U+97E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97E4");
    },
    Error,
    "EncodingError U+97E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97E5");
    },
    Error,
    "EncodingError U+97E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97E6");
    },
    Error,
    "EncodingError U+97E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97E7");
    },
    Error,
    "EncodingError U+97E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97E8");
    },
    Error,
    "EncodingError U+97E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97E9");
    },
    Error,
    "EncodingError U+97E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97EA");
    },
    Error,
    "EncodingError U+97EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97EB");
    },
    Error,
    "EncodingError U+97EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97EC");
    },
    Error,
    "EncodingError U+97EC",
  );
  r = r && ([...ms932Encoder.encode("韭韮")].join(",") === "232,234,148,66"); // U+97ED
  assertThrows(
    () => {
      ms932Encoder.encode("\u97EF");
    },
    Error,
    "EncodingError U+97EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97F0");
    },
    Error,
    "EncodingError U+97F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97F1");
    },
    Error,
    "EncodingError U+97F1",
  );
  r = r && ([...ms932Encoder.encode("韲音")].join(",") === "232,236,137,185"); // U+97F2
  assertThrows(
    () => {
      ms932Encoder.encode("\u97F4");
    },
    Error,
    "EncodingError U+97F4",
  );
  r = r && ([...ms932Encoder.encode("韵韶")].join(",") === "232,239,232,238"); // U+97F5
  assertThrows(
    () => {
      ms932Encoder.encode("\u97F7");
    },
    Error,
    "EncodingError U+97F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97F8");
    },
    Error,
    "EncodingError U+97F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97F9");
    },
    Error,
    "EncodingError U+97F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97FA");
    },
    Error,
    "EncodingError U+97FA",
  );
  r = r && ([...ms932Encoder.encode("韻")].join(",") === "137,67"); // U+97FB
  assertThrows(
    () => {
      ms932Encoder.encode("\u97FC");
    },
    Error,
    "EncodingError U+97FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97FD");
    },
    Error,
    "EncodingError U+97FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u97FE");
    },
    Error,
    "EncodingError U+97FE",
  );
  r = r && ([...ms932Encoder.encode("響")].join(",") === "139,191"); // U+97FF

  assertStrictEquals(r, true);
});
