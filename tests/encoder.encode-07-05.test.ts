import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+6400-U+67FF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u6400");
    },
    Error,
    "encode-error: U+6400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6401");
    },
    Error,
    "encode-error: U+6401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6402");
    },
    Error,
    "encode-error: U+6402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6403");
    },
    Error,
    "encode-error: U+6403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6404");
    },
    Error,
    "encode-error: U+6404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6405");
    },
    Error,
    "encode-error: U+6405",
  );
  r = r && ([...ms932Encoder.encode("搆")].join(",") === "157,140"); // U+6406
  assertThrows(
    () => {
      ms932Encoder.encode("\u6407");
    },
    Error,
    "encode-error: U+6407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6408");
    },
    Error,
    "encode-error: U+6408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6409");
    },
    Error,
    "encode-error: U+6409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u640A");
    },
    Error,
    "encode-error: U+640A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u640B");
    },
    Error,
    "encode-error: U+640B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u640C");
    },
    Error,
    "encode-error: U+640C",
  );
  r = r && ([...ms932Encoder.encode("損")].join(",") === "145,185"); // U+640D
  assertThrows(
    () => {
      ms932Encoder.encode("\u640E");
    },
    Error,
    "encode-error: U+640E",
  );
  r = r && ([...ms932Encoder.encode("搏")].join(",") === "157,147"); // U+640F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6410");
    },
    Error,
    "encode-error: U+6410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6411");
    },
    Error,
    "encode-error: U+6411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6412");
    },
    Error,
    "encode-error: U+6412",
  );
  r = r && ([...ms932Encoder.encode("搓")].join(",") === "157,141"); // U+6413
  assertThrows(
    () => {
      ms932Encoder.encode("\u6414");
    },
    Error,
    "encode-error: U+6414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6415");
    },
    Error,
    "encode-error: U+6415",
  );
  r = r && ([...ms932Encoder.encode("搖搗")].join(",") === "157,138,157,145"); // U+6416
  assertThrows(
    () => {
      ms932Encoder.encode("\u6418");
    },
    Error,
    "encode-error: U+6418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6419");
    },
    Error,
    "encode-error: U+6419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u641A");
    },
    Error,
    "encode-error: U+641A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u641B");
    },
    Error,
    "encode-error: U+641B",
  );
  r = r && ([...ms932Encoder.encode("搜")].join(",") === "157,114"); // U+641C
  assertThrows(
    () => {
      ms932Encoder.encode("\u641D");
    },
    Error,
    "encode-error: U+641D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u641E");
    },
    Error,
    "encode-error: U+641E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u641F");
    },
    Error,
    "encode-error: U+641F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6420");
    },
    Error,
    "encode-error: U+6420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6421");
    },
    Error,
    "encode-error: U+6421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6422");
    },
    Error,
    "encode-error: U+6422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6423");
    },
    Error,
    "encode-error: U+6423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6424");
    },
    Error,
    "encode-error: U+6424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6425");
    },
    Error,
    "encode-error: U+6425",
  );
  r = r && ([...ms932Encoder.encode("搦")].join(",") === "157,142"); // U+6426
  assertThrows(
    () => {
      ms932Encoder.encode("\u6427");
    },
    Error,
    "encode-error: U+6427",
  );
  r = r && ([...ms932Encoder.encode("搨")].join(",") === "157,146"); // U+6428
  assertThrows(
    () => {
      ms932Encoder.encode("\u6429");
    },
    Error,
    "encode-error: U+6429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u642A");
    },
    Error,
    "encode-error: U+642A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u642B");
    },
    Error,
    "encode-error: U+642B",
  );
  r = r && ([...ms932Encoder.encode("搬搭")].join(",") === "148,192,147,139"); // U+642C
  assertThrows(
    () => {
      ms932Encoder.encode("\u642E");
    },
    Error,
    "encode-error: U+642E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u642F");
    },
    Error,
    "encode-error: U+642F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6430");
    },
    Error,
    "encode-error: U+6430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6431");
    },
    Error,
    "encode-error: U+6431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6432");
    },
    Error,
    "encode-error: U+6432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6433");
    },
    Error,
    "encode-error: U+6433",
  );
  r = r && ([...ms932Encoder.encode("搴")].join(",") === "157,139"); // U+6434
  assertThrows(
    () => {
      ms932Encoder.encode("\u6435");
    },
    Error,
    "encode-error: U+6435",
  );
  r = r && ([...ms932Encoder.encode("搶")].join(",") === "157,143"); // U+6436
  assertThrows(
    () => {
      ms932Encoder.encode("\u6437");
    },
    Error,
    "encode-error: U+6437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6438");
    },
    Error,
    "encode-error: U+6438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6439");
    },
    Error,
    "encode-error: U+6439",
  );
  r = r && ([...ms932Encoder.encode("携")].join(",") === "140,103"); // U+643A
  assertThrows(
    () => {
      ms932Encoder.encode("\u643B");
    },
    Error,
    "encode-error: U+643B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u643C");
    },
    Error,
    "encode-error: U+643C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u643D");
    },
    Error,
    "encode-error: U+643D",
  );
  r = r && ([...ms932Encoder.encode("搾")].join(",") === "141,239"); // U+643E
  assertThrows(
    () => {
      ms932Encoder.encode("\u643F");
    },
    Error,
    "encode-error: U+643F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6440");
    },
    Error,
    "encode-error: U+6440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6441");
    },
    Error,
    "encode-error: U+6441",
  );
  r = r && ([...ms932Encoder.encode("摂")].join(",") === "144,219"); // U+6442
  assertThrows(
    () => {
      ms932Encoder.encode("\u6443");
    },
    Error,
    "encode-error: U+6443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6444");
    },
    Error,
    "encode-error: U+6444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6445");
    },
    Error,
    "encode-error: U+6445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6446");
    },
    Error,
    "encode-error: U+6446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6447");
    },
    Error,
    "encode-error: U+6447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6448");
    },
    Error,
    "encode-error: U+6448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6449");
    },
    Error,
    "encode-error: U+6449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u644A");
    },
    Error,
    "encode-error: U+644A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u644B");
    },
    Error,
    "encode-error: U+644B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u644C");
    },
    Error,
    "encode-error: U+644C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u644D");
    },
    Error,
    "encode-error: U+644D",
  );
  r = r && ([...ms932Encoder.encode("摎")].join(",") === "157,151"); // U+644E
  assertThrows(
    () => {
      ms932Encoder.encode("\u644F");
    },
    Error,
    "encode-error: U+644F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6450");
    },
    Error,
    "encode-error: U+6450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6451");
    },
    Error,
    "encode-error: U+6451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6452");
    },
    Error,
    "encode-error: U+6452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6453");
    },
    Error,
    "encode-error: U+6453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6454");
    },
    Error,
    "encode-error: U+6454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6455");
    },
    Error,
    "encode-error: U+6455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6456");
    },
    Error,
    "encode-error: U+6456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6457");
    },
    Error,
    "encode-error: U+6457",
  );
  r = r && ([...ms932Encoder.encode("摘")].join(",") === "147,69"); // U+6458
  assertThrows(
    () => {
      ms932Encoder.encode("\u6459");
    },
    Error,
    "encode-error: U+6459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u645A");
    },
    Error,
    "encode-error: U+645A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u645B");
    },
    Error,
    "encode-error: U+645B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u645C");
    },
    Error,
    "encode-error: U+645C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u645D");
    },
    Error,
    "encode-error: U+645D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u645E");
    },
    Error,
    "encode-error: U+645E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u645F");
    },
    Error,
    "encode-error: U+645F",
  );
  r = r && ([...ms932Encoder.encode("摠")].join(",") === "250,202"); // U+6460
  assertThrows(
    () => {
      ms932Encoder.encode("\u6461");
    },
    Error,
    "encode-error: U+6461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6462");
    },
    Error,
    "encode-error: U+6462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6463");
    },
    Error,
    "encode-error: U+6463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6464");
    },
    Error,
    "encode-error: U+6464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6465");
    },
    Error,
    "encode-error: U+6465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6466");
    },
    Error,
    "encode-error: U+6466",
  );
  r = r && ([...ms932Encoder.encode("摧")].join(",") === "157,148"); // U+6467
  assertThrows(
    () => {
      ms932Encoder.encode("\u6468");
    },
    Error,
    "encode-error: U+6468",
  );
  r = r && ([...ms932Encoder.encode("摩")].join(",") === "150,128"); // U+6469
  assertThrows(
    () => {
      ms932Encoder.encode("\u646A");
    },
    Error,
    "encode-error: U+646A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u646B");
    },
    Error,
    "encode-error: U+646B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u646C");
    },
    Error,
    "encode-error: U+646C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u646D");
    },
    Error,
    "encode-error: U+646D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u646E");
    },
    Error,
    "encode-error: U+646E",
  );
  r = r && ([...ms932Encoder.encode("摯")].join(",") === "157,149"); // U+646F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6470");
    },
    Error,
    "encode-error: U+6470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6471");
    },
    Error,
    "encode-error: U+6471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6472");
    },
    Error,
    "encode-error: U+6472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6473");
    },
    Error,
    "encode-error: U+6473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6474");
    },
    Error,
    "encode-error: U+6474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6475");
    },
    Error,
    "encode-error: U+6475",
  );
  r = r && ([...ms932Encoder.encode("摶")].join(",") === "157,150"); // U+6476
  assertThrows(
    () => {
      ms932Encoder.encode("\u6477");
    },
    Error,
    "encode-error: U+6477",
  );
  r = r && ([...ms932Encoder.encode("摸")].join(",") === "150,204"); // U+6478
  assertThrows(
    () => {
      ms932Encoder.encode("\u6479");
    },
    Error,
    "encode-error: U+6479",
  );
  r = r && ([...ms932Encoder.encode("摺")].join(",") === "144,160"); // U+647A
  assertThrows(
    () => {
      ms932Encoder.encode("\u647B");
    },
    Error,
    "encode-error: U+647B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u647C");
    },
    Error,
    "encode-error: U+647C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u647D");
    },
    Error,
    "encode-error: U+647D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u647E");
    },
    Error,
    "encode-error: U+647E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u647F");
    },
    Error,
    "encode-error: U+647F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6480");
    },
    Error,
    "encode-error: U+6480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6481");
    },
    Error,
    "encode-error: U+6481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6482");
    },
    Error,
    "encode-error: U+6482",
  );
  r = r && ([...ms932Encoder.encode("撃")].join(",") === "140,130"); // U+6483
  assertThrows(
    () => {
      ms932Encoder.encode("\u6484");
    },
    Error,
    "encode-error: U+6484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6485");
    },
    Error,
    "encode-error: U+6485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6486");
    },
    Error,
    "encode-error: U+6486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6487");
    },
    Error,
    "encode-error: U+6487",
  );
  r = r && ([...ms932Encoder.encode("撈")].join(",") === "157,157"); // U+6488
  assertThrows(
    () => {
      ms932Encoder.encode("\u6489");
    },
    Error,
    "encode-error: U+6489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u648A");
    },
    Error,
    "encode-error: U+648A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u648B");
    },
    Error,
    "encode-error: U+648B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u648C");
    },
    Error,
    "encode-error: U+648C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u648D");
    },
    Error,
    "encode-error: U+648D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u648E");
    },
    Error,
    "encode-error: U+648E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u648F");
    },
    Error,
    "encode-error: U+648F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6490");
    },
    Error,
    "encode-error: U+6490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6491");
    },
    Error,
    "encode-error: U+6491",
  );
  r = r && ([...ms932Encoder.encode("撒撓")].join(",") === "142,84,157,154"); // U+6492
  assertThrows(
    () => {
      ms932Encoder.encode("\u6494");
    },
    Error,
    "encode-error: U+6494",
  );
  r = r && ([...ms932Encoder.encode("撕")].join(",") === "157,153"); // U+6495
  assertThrows(
    () => {
      ms932Encoder.encode("\u6496");
    },
    Error,
    "encode-error: U+6496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6497");
    },
    Error,
    "encode-error: U+6497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6498");
    },
    Error,
    "encode-error: U+6498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6499");
    },
    Error,
    "encode-error: U+6499",
  );
  r = r && ([...ms932Encoder.encode("撚")].join(",") === "148,81"); // U+649A
  assertThrows(
    () => {
      ms932Encoder.encode("\u649B");
    },
    Error,
    "encode-error: U+649B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u649C");
    },
    Error,
    "encode-error: U+649C",
  );
  r = r && ([...ms932Encoder.encode("撝撞")].join(",") === "250,203,147,179"); // U+649D
  assertThrows(
    () => {
      ms932Encoder.encode("\u649F");
    },
    Error,
    "encode-error: U+649F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64A0");
    },
    Error,
    "encode-error: U+64A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64A1");
    },
    Error,
    "encode-error: U+64A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64A2");
    },
    Error,
    "encode-error: U+64A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64A3");
    },
    Error,
    "encode-error: U+64A3",
  );
  r = r && ([...ms932Encoder.encode("撤撥")].join(",") === "147,80,157,155"); // U+64A4
  assertThrows(
    () => {
      ms932Encoder.encode("\u64A6");
    },
    Error,
    "encode-error: U+64A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64A7");
    },
    Error,
    "encode-error: U+64A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64A8");
    },
    Error,
    "encode-error: U+64A8",
  );
  r = r && ([...ms932Encoder.encode("撩")].join(",") === "157,156"); // U+64A9
  assertThrows(
    () => {
      ms932Encoder.encode("\u64AA");
    },
    Error,
    "encode-error: U+64AA",
  );
  r = r && ([...ms932Encoder.encode("撫")].join(",") === "149,143"); // U+64AB
  assertThrows(
    () => {
      ms932Encoder.encode("\u64AC");
    },
    Error,
    "encode-error: U+64AC",
  );
  r = r && ([...ms932Encoder.encode("播撮")].join(",") === "148,100,142,66"); // U+64AD
  assertThrows(
    () => {
      ms932Encoder.encode("\u64AF");
    },
    Error,
    "encode-error: U+64AF",
  );
  r = r && ([...ms932Encoder.encode("撰")].join(",") === "144,239"); // U+64B0
  assertThrows(
    () => {
      ms932Encoder.encode("\u64B1");
    },
    Error,
    "encode-error: U+64B1",
  );
  r = r && ([...ms932Encoder.encode("撲")].join(",") === "150,111"); // U+64B2
  assertThrows(
    () => {
      ms932Encoder.encode("\u64B3");
    },
    Error,
    "encode-error: U+64B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64B4");
    },
    Error,
    "encode-error: U+64B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64B5");
    },
    Error,
    "encode-error: U+64B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64B6");
    },
    Error,
    "encode-error: U+64B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64B7");
    },
    Error,
    "encode-error: U+64B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64B8");
    },
    Error,
    "encode-error: U+64B8",
  );
  r = r && ([...ms932Encoder.encode("撹")].join(",") === "138,104"); // U+64B9
  assertThrows(
    () => {
      ms932Encoder.encode("\u64BA");
    },
    Error,
    "encode-error: U+64BA",
  );
  r = r && ([...ms932Encoder.encode("撻撼")].join(",") === "157,163,157,158"); // U+64BB
  assertThrows(
    () => {
      ms932Encoder.encode("\u64BD");
    },
    Error,
    "encode-error: U+64BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64BE");
    },
    Error,
    "encode-error: U+64BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64BF");
    },
    Error,
    "encode-error: U+64BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64C0");
    },
    Error,
    "encode-error: U+64C0",
  );
  r = r && ([...ms932Encoder.encode("擁擂")].join(",") === "151,105,157,165"); // U+64C1
  assertThrows(
    () => {
      ms932Encoder.encode("\u64C3");
    },
    Error,
    "encode-error: U+64C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64C4");
    },
    Error,
    "encode-error: U+64C4",
  );
  r = r && ([...ms932Encoder.encode("擅")].join(",") === "157,161"); // U+64C5
  assertThrows(
    () => {
      ms932Encoder.encode("\u64C6");
    },
    Error,
    "encode-error: U+64C6",
  );
  r = r && ([...ms932Encoder.encode("擇")].join(",") === "157,162"); // U+64C7
  assertThrows(
    () => {
      ms932Encoder.encode("\u64C8");
    },
    Error,
    "encode-error: U+64C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64C9");
    },
    Error,
    "encode-error: U+64C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64CA");
    },
    Error,
    "encode-error: U+64CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64CB");
    },
    Error,
    "encode-error: U+64CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64CC");
    },
    Error,
    "encode-error: U+64CC",
  );
  r = r && ([...ms932Encoder.encode("操擎")].join(",") === "145,128,250,204"); // U+64CD
  assertThrows(
    () => {
      ms932Encoder.encode("\u64CF");
    },
    Error,
    "encode-error: U+64CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64D0");
    },
    Error,
    "encode-error: U+64D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64D1");
    },
    Error,
    "encode-error: U+64D1",
  );
  r = r && ([...ms932Encoder.encode("擒")].join(",") === "157,160"); // U+64D2
  assertThrows(
    () => {
      ms932Encoder.encode("\u64D3");
    },
    Error,
    "encode-error: U+64D3",
  );
  r = r && ([...ms932Encoder.encode("擔")].join(",") === "157,94"); // U+64D4
  assertThrows(
    () => {
      ms932Encoder.encode("\u64D5");
    },
    Error,
    "encode-error: U+64D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64D6");
    },
    Error,
    "encode-error: U+64D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64D7");
    },
    Error,
    "encode-error: U+64D7",
  );
  r = r && ([...ms932Encoder.encode("擘")].join(",") === "157,164"); // U+64D8
  assertThrows(
    () => {
      ms932Encoder.encode("\u64D9");
    },
    Error,
    "encode-error: U+64D9",
  );
  r = r && ([...ms932Encoder.encode("據")].join(",") === "157,159"); // U+64DA
  assertThrows(
    () => {
      ms932Encoder.encode("\u64DB");
    },
    Error,
    "encode-error: U+64DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64DC");
    },
    Error,
    "encode-error: U+64DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64DD");
    },
    Error,
    "encode-error: U+64DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64DE");
    },
    Error,
    "encode-error: U+64DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64DF");
    },
    Error,
    "encode-error: U+64DF",
  );
  r = r &&
    ([...ms932Encoder.encode("擠擡擢擣")].join(",") ===
      "157,169,157,170,147,70,157,172"); // U+64E0
  assertThrows(
    () => {
      ms932Encoder.encode("\u64E4");
    },
    Error,
    "encode-error: U+64E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64E5");
    },
    Error,
    "encode-error: U+64E5",
  );
  r = r && ([...ms932Encoder.encode("擦擧")].join(",") === "142,67,157,167"); // U+64E6
  assertThrows(
    () => {
      ms932Encoder.encode("\u64E8");
    },
    Error,
    "encode-error: U+64E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64E9");
    },
    Error,
    "encode-error: U+64E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64EA");
    },
    Error,
    "encode-error: U+64EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64EB");
    },
    Error,
    "encode-error: U+64EB",
  );
  r = r && ([...ms932Encoder.encode("擬")].join(",") === "139,91"); // U+64EC
  assertThrows(
    () => {
      ms932Encoder.encode("\u64ED");
    },
    Error,
    "encode-error: U+64ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64EE");
    },
    Error,
    "encode-error: U+64EE",
  );
  r = r && ([...ms932Encoder.encode("擯")].join(",") === "157,173"); // U+64EF
  assertThrows(
    () => {
      ms932Encoder.encode("\u64F0");
    },
    Error,
    "encode-error: U+64F0",
  );
  r = r && ([...ms932Encoder.encode("擱擲")].join(",") === "157,166,157,177"); // U+64F1
  assertThrows(
    () => {
      ms932Encoder.encode("\u64F3");
    },
    Error,
    "encode-error: U+64F3",
  );
  r = r && ([...ms932Encoder.encode("擴")].join(",") === "157,176"); // U+64F4
  assertThrows(
    () => {
      ms932Encoder.encode("\u64F5");
    },
    Error,
    "encode-error: U+64F5",
  );
  r = r && ([...ms932Encoder.encode("擶")].join(",") === "157,175"); // U+64F6
  assertThrows(
    () => {
      ms932Encoder.encode("\u64F7");
    },
    Error,
    "encode-error: U+64F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64F8");
    },
    Error,
    "encode-error: U+64F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64F9");
    },
    Error,
    "encode-error: U+64F9",
  );
  r = r && ([...ms932Encoder.encode("擺")].join(",") === "157,178"); // U+64FA
  assertThrows(
    () => {
      ms932Encoder.encode("\u64FB");
    },
    Error,
    "encode-error: U+64FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u64FC");
    },
    Error,
    "encode-error: U+64FC",
  );
  r = r && ([...ms932Encoder.encode("擽擾")].join(",") === "157,180,143,239"); // U+64FD
  assertThrows(
    () => {
      ms932Encoder.encode("\u64FF");
    },
    Error,
    "encode-error: U+64FF",
  );
  r = r && ([...ms932Encoder.encode("攀")].join(",") === "157,179"); // U+6500
  assertThrows(
    () => {
      ms932Encoder.encode("\u6501");
    },
    Error,
    "encode-error: U+6501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6502");
    },
    Error,
    "encode-error: U+6502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6503");
    },
    Error,
    "encode-error: U+6503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6504");
    },
    Error,
    "encode-error: U+6504",
  );
  r = r && ([...ms932Encoder.encode("攅")].join(",") === "157,183"); // U+6505
  assertThrows(
    () => {
      ms932Encoder.encode("\u6506");
    },
    Error,
    "encode-error: U+6506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6507");
    },
    Error,
    "encode-error: U+6507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6508");
    },
    Error,
    "encode-error: U+6508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6509");
    },
    Error,
    "encode-error: U+6509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u650A");
    },
    Error,
    "encode-error: U+650A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u650B");
    },
    Error,
    "encode-error: U+650B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u650C");
    },
    Error,
    "encode-error: U+650C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u650D");
    },
    Error,
    "encode-error: U+650D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u650E");
    },
    Error,
    "encode-error: U+650E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u650F");
    },
    Error,
    "encode-error: U+650F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6510");
    },
    Error,
    "encode-error: U+6510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6511");
    },
    Error,
    "encode-error: U+6511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6512");
    },
    Error,
    "encode-error: U+6512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6513");
    },
    Error,
    "encode-error: U+6513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6514");
    },
    Error,
    "encode-error: U+6514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6515");
    },
    Error,
    "encode-error: U+6515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6516");
    },
    Error,
    "encode-error: U+6516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6517");
    },
    Error,
    "encode-error: U+6517",
  );
  r = r && ([...ms932Encoder.encode("攘")].join(",") === "157,181"); // U+6518
  assertThrows(
    () => {
      ms932Encoder.encode("\u6519");
    },
    Error,
    "encode-error: U+6519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u651A");
    },
    Error,
    "encode-error: U+651A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u651B");
    },
    Error,
    "encode-error: U+651B",
  );
  r = r && ([...ms932Encoder.encode("攜攝")].join(",") === "157,182,157,144"); // U+651C
  assertThrows(
    () => {
      ms932Encoder.encode("\u651E");
    },
    Error,
    "encode-error: U+651E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u651F");
    },
    Error,
    "encode-error: U+651F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6520");
    },
    Error,
    "encode-error: U+6520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6521");
    },
    Error,
    "encode-error: U+6521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6522");
    },
    Error,
    "encode-error: U+6522",
  );
  r = r && ([...ms932Encoder.encode("攣攤")].join(",") === "157,185,157,184"); // U+6523
  assertThrows(
    () => {
      ms932Encoder.encode("\u6525");
    },
    Error,
    "encode-error: U+6525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6526");
    },
    Error,
    "encode-error: U+6526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6527");
    },
    Error,
    "encode-error: U+6527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6528");
    },
    Error,
    "encode-error: U+6528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6529");
    },
    Error,
    "encode-error: U+6529",
  );
  r = r &&
    ([...ms932Encoder.encode("攪攫攬")].join(",") ===
      "157,152,157,186,157,174"); // U+652A
  assertThrows(
    () => {
      ms932Encoder.encode("\u652D");
    },
    Error,
    "encode-error: U+652D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u652E");
    },
    Error,
    "encode-error: U+652E",
  );
  r = r && ([...ms932Encoder.encode("支")].join(",") === "142,120"); // U+652F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6530");
    },
    Error,
    "encode-error: U+6530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6531");
    },
    Error,
    "encode-error: U+6531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6532");
    },
    Error,
    "encode-error: U+6532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6533");
    },
    Error,
    "encode-error: U+6533",
  );
  r = r &&
    ([...ms932Encoder.encode("攴攵收攷攸改")].join(",") ===
      "157,187,157,188,157,190,157,189,157,191,137,252"); // U+6534
  assertThrows(
    () => {
      ms932Encoder.encode("\u653A");
    },
    Error,
    "encode-error: U+653A",
  );
  r = r && ([...ms932Encoder.encode("攻")].join(",") === "141,85"); // U+653B
  assertThrows(
    () => {
      ms932Encoder.encode("\u653C");
    },
    Error,
    "encode-error: U+653C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u653D");
    },
    Error,
    "encode-error: U+653D",
  );
  r = r && ([...ms932Encoder.encode("放政")].join(",") === "149,250,144,173"); // U+653E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6540");
    },
    Error,
    "encode-error: U+6540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6541");
    },
    Error,
    "encode-error: U+6541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6542");
    },
    Error,
    "encode-error: U+6542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6543");
    },
    Error,
    "encode-error: U+6543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6544");
    },
    Error,
    "encode-error: U+6544",
  );
  r = r && ([...ms932Encoder.encode("故")].join(",") === "140,204"); // U+6545
  assertThrows(
    () => {
      ms932Encoder.encode("\u6546");
    },
    Error,
    "encode-error: U+6546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6547");
    },
    Error,
    "encode-error: U+6547",
  );
  r = r && ([...ms932Encoder.encode("效")].join(",") === "157,193"); // U+6548
  assertThrows(
    () => {
      ms932Encoder.encode("\u6549");
    },
    Error,
    "encode-error: U+6549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u654A");
    },
    Error,
    "encode-error: U+654A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u654B");
    },
    Error,
    "encode-error: U+654B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u654C");
    },
    Error,
    "encode-error: U+654C",
  );
  r = r &&
    ([...ms932Encoder.encode("敍敎敏")].join(",") ===
      "157,196,250,205,149,113"); // U+654D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6550");
    },
    Error,
    "encode-error: U+6550",
  );
  r = r && ([...ms932Encoder.encode("救")].join(",") === "139,126"); // U+6551
  assertThrows(
    () => {
      ms932Encoder.encode("\u6552");
    },
    Error,
    "encode-error: U+6552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6553");
    },
    Error,
    "encode-error: U+6553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6554");
    },
    Error,
    "encode-error: U+6554",
  );
  r = r &&
    ([...ms932Encoder.encode("敕敖敗敘教")].join(",") ===
      "157,195,157,194,148,115,157,197,139,179"); // U+6555
  assertThrows(
    () => {
      ms932Encoder.encode("\u655A");
    },
    Error,
    "encode-error: U+655A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u655B");
    },
    Error,
    "encode-error: U+655B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u655C");
    },
    Error,
    "encode-error: U+655C",
  );
  r = r && ([...ms932Encoder.encode("敝敞")].join(",") === "157,199,157,198"); // U+655D
  assertThrows(
    () => {
      ms932Encoder.encode("\u655F");
    },
    Error,
    "encode-error: U+655F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6560");
    },
    Error,
    "encode-error: U+6560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6561");
    },
    Error,
    "encode-error: U+6561",
  );
  r = r && ([...ms932Encoder.encode("敢散")].join(",") === "138,184,142,85"); // U+6562
  assertThrows(
    () => {
      ms932Encoder.encode("\u6564");
    },
    Error,
    "encode-error: U+6564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6565");
    },
    Error,
    "encode-error: U+6565",
  );
  r = r && ([...ms932Encoder.encode("敦")].join(",") === "147,214"); // U+6566
  assertThrows(
    () => {
      ms932Encoder.encode("\u6567");
    },
    Error,
    "encode-error: U+6567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6568");
    },
    Error,
    "encode-error: U+6568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6569");
    },
    Error,
    "encode-error: U+6569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u656A");
    },
    Error,
    "encode-error: U+656A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u656B");
    },
    Error,
    "encode-error: U+656B",
  );
  r = r && ([...ms932Encoder.encode("敬")].join(",") === "140,104"); // U+656C
  assertThrows(
    () => {
      ms932Encoder.encode("\u656D");
    },
    Error,
    "encode-error: U+656D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u656E");
    },
    Error,
    "encode-error: U+656E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u656F");
    },
    Error,
    "encode-error: U+656F",
  );
  r = r && ([...ms932Encoder.encode("数")].join(",") === "144,148"); // U+6570
  assertThrows(
    () => {
      ms932Encoder.encode("\u6571");
    },
    Error,
    "encode-error: U+6571",
  );
  r = r && ([...ms932Encoder.encode("敲")].join(",") === "157,200"); // U+6572
  assertThrows(
    () => {
      ms932Encoder.encode("\u6573");
    },
    Error,
    "encode-error: U+6573",
  );
  r = r && ([...ms932Encoder.encode("整敵")].join(",") === "144,174,147,71"); // U+6574
  assertThrows(
    () => {
      ms932Encoder.encode("\u6576");
    },
    Error,
    "encode-error: U+6576",
  );
  r = r && ([...ms932Encoder.encode("敷數")].join(",") === "149,126,157,201"); // U+6577
  assertThrows(
    () => {
      ms932Encoder.encode("\u6579");
    },
    Error,
    "encode-error: U+6579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u657A");
    },
    Error,
    "encode-error: U+657A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u657B");
    },
    Error,
    "encode-error: U+657B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u657C");
    },
    Error,
    "encode-error: U+657C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u657D");
    },
    Error,
    "encode-error: U+657D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u657E");
    },
    Error,
    "encode-error: U+657E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u657F");
    },
    Error,
    "encode-error: U+657F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6580");
    },
    Error,
    "encode-error: U+6580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6581");
    },
    Error,
    "encode-error: U+6581",
  );
  r = r && ([...ms932Encoder.encode("斂斃")].join(",") === "157,202,157,203"); // U+6582
  assertThrows(
    () => {
      ms932Encoder.encode("\u6584");
    },
    Error,
    "encode-error: U+6584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6585");
    },
    Error,
    "encode-error: U+6585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6586");
    },
    Error,
    "encode-error: U+6586",
  );
  r = r &&
    ([...ms932Encoder.encode("文斈斉")].join(",") ===
      "149,182,155,124,144,196"); // U+6587
  assertThrows(
    () => {
      ms932Encoder.encode("\u658A");
    },
    Error,
    "encode-error: U+658A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u658B");
    },
    Error,
    "encode-error: U+658B",
  );
  r = r && ([...ms932Encoder.encode("斌")].join(",") === "149,107"); // U+658C
  assertThrows(
    () => {
      ms932Encoder.encode("\u658D");
    },
    Error,
    "encode-error: U+658D",
  );
  r = r && ([...ms932Encoder.encode("斎")].join(",") === "141,214"); // U+658E
  assertThrows(
    () => {
      ms932Encoder.encode("\u658F");
    },
    Error,
    "encode-error: U+658F",
  );
  r = r && ([...ms932Encoder.encode("斐斑")].join(",") === "148,227,148,193"); // U+6590
  assertThrows(
    () => {
      ms932Encoder.encode("\u6592");
    },
    Error,
    "encode-error: U+6592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6593");
    },
    Error,
    "encode-error: U+6593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6594");
    },
    Error,
    "encode-error: U+6594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6595");
    },
    Error,
    "encode-error: U+6595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6596");
    },
    Error,
    "encode-error: U+6596",
  );
  r = r && ([...ms932Encoder.encode("斗")].join(",") === "147,108"); // U+6597
  assertThrows(
    () => {
      ms932Encoder.encode("\u6598");
    },
    Error,
    "encode-error: U+6598",
  );
  r = r && ([...ms932Encoder.encode("料")].join(",") === "151,191"); // U+6599
  assertThrows(
    () => {
      ms932Encoder.encode("\u659A");
    },
    Error,
    "encode-error: U+659A",
  );
  r = r && ([...ms932Encoder.encode("斛斜")].join(",") === "157,205,142,206"); // U+659B
  assertThrows(
    () => {
      ms932Encoder.encode("\u659D");
    },
    Error,
    "encode-error: U+659D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u659E");
    },
    Error,
    "encode-error: U+659E",
  );
  r = r && ([...ms932Encoder.encode("斟")].join(",") === "157,206"); // U+659F
  assertThrows(
    () => {
      ms932Encoder.encode("\u65A0");
    },
    Error,
    "encode-error: U+65A0",
  );
  r = r && ([...ms932Encoder.encode("斡")].join(",") === "136,180"); // U+65A1
  assertThrows(
    () => {
      ms932Encoder.encode("\u65A2");
    },
    Error,
    "encode-error: U+65A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65A3");
    },
    Error,
    "encode-error: U+65A3",
  );
  r = r && ([...ms932Encoder.encode("斤斥")].join(",") === "139,210,144,203"); // U+65A4
  assertThrows(
    () => {
      ms932Encoder.encode("\u65A6");
    },
    Error,
    "encode-error: U+65A6",
  );
  r = r && ([...ms932Encoder.encode("斧")].join(",") === "149,128"); // U+65A7
  assertThrows(
    () => {
      ms932Encoder.encode("\u65A8");
    },
    Error,
    "encode-error: U+65A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65A9");
    },
    Error,
    "encode-error: U+65A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65AA");
    },
    Error,
    "encode-error: U+65AA",
  );
  r = r &&
    ([...ms932Encoder.encode("斫斬断")].join(",") === "157,207,142,97,146,102"); // U+65AB
  assertThrows(
    () => {
      ms932Encoder.encode("\u65AE");
    },
    Error,
    "encode-error: U+65AE",
  );
  r = r && ([...ms932Encoder.encode("斯新")].join(",") === "142,122,144,86"); // U+65AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u65B1");
    },
    Error,
    "encode-error: U+65B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65B2");
    },
    Error,
    "encode-error: U+65B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65B3");
    },
    Error,
    "encode-error: U+65B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65B4");
    },
    Error,
    "encode-error: U+65B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65B5");
    },
    Error,
    "encode-error: U+65B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65B6");
    },
    Error,
    "encode-error: U+65B6",
  );
  r = r && ([...ms932Encoder.encode("斷")].join(",") === "157,208"); // U+65B7
  assertThrows(
    () => {
      ms932Encoder.encode("\u65B8");
    },
    Error,
    "encode-error: U+65B8",
  );
  r = r && ([...ms932Encoder.encode("方")].join(",") === "149,251"); // U+65B9
  assertThrows(
    () => {
      ms932Encoder.encode("\u65BA");
    },
    Error,
    "encode-error: U+65BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65BB");
    },
    Error,
    "encode-error: U+65BB",
  );
  r = r && ([...ms932Encoder.encode("於施")].join(",") === "137,151,142,123"); // U+65BC
  assertThrows(
    () => {
      ms932Encoder.encode("\u65BE");
    },
    Error,
    "encode-error: U+65BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65BF");
    },
    Error,
    "encode-error: U+65BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65C0");
    },
    Error,
    "encode-error: U+65C0",
  );
  r = r && ([...ms932Encoder.encode("旁")].join(",") === "157,211"); // U+65C1
  assertThrows(
    () => {
      ms932Encoder.encode("\u65C2");
    },
    Error,
    "encode-error: U+65C2",
  );
  r = r &&
    ([...ms932Encoder.encode("旃旄旅旆")].join(",") ===
      "157,209,157,212,151,183,157,210"); // U+65C3
  assertThrows(
    () => {
      ms932Encoder.encode("\u65C7");
    },
    Error,
    "encode-error: U+65C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65C8");
    },
    Error,
    "encode-error: U+65C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65C9");
    },
    Error,
    "encode-error: U+65C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65CA");
    },
    Error,
    "encode-error: U+65CA",
  );
  r = r && ([...ms932Encoder.encode("旋旌")].join(",") === "144,249,157,213"); // U+65CB
  assertThrows(
    () => {
      ms932Encoder.encode("\u65CD");
    },
    Error,
    "encode-error: U+65CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65CE");
    },
    Error,
    "encode-error: U+65CE",
  );
  r = r && ([...ms932Encoder.encode("族")].join(",") === "145,176"); // U+65CF
  assertThrows(
    () => {
      ms932Encoder.encode("\u65D0");
    },
    Error,
    "encode-error: U+65D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65D1");
    },
    Error,
    "encode-error: U+65D1",
  );
  r = r && ([...ms932Encoder.encode("旒")].join(",") === "157,214"); // U+65D2
  assertThrows(
    () => {
      ms932Encoder.encode("\u65D3");
    },
    Error,
    "encode-error: U+65D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65D4");
    },
    Error,
    "encode-error: U+65D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65D5");
    },
    Error,
    "encode-error: U+65D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65D6");
    },
    Error,
    "encode-error: U+65D6",
  );
  r = r && ([...ms932Encoder.encode("旗")].join(",") === "138,248"); // U+65D7
  assertThrows(
    () => {
      ms932Encoder.encode("\u65D8");
    },
    Error,
    "encode-error: U+65D8",
  );
  r = r && ([...ms932Encoder.encode("旙")].join(",") === "157,216"); // U+65D9
  assertThrows(
    () => {
      ms932Encoder.encode("\u65DA");
    },
    Error,
    "encode-error: U+65DA",
  );
  r = r && ([...ms932Encoder.encode("旛")].join(",") === "157,215"); // U+65DB
  assertThrows(
    () => {
      ms932Encoder.encode("\u65DC");
    },
    Error,
    "encode-error: U+65DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65DD");
    },
    Error,
    "encode-error: U+65DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65DE");
    },
    Error,
    "encode-error: U+65DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65DF");
    },
    Error,
    "encode-error: U+65DF",
  );
  r = r &&
    ([...ms932Encoder.encode("无旡既")].join(",") ===
      "157,217,157,218,138,249"); // U+65E0
  assertThrows(
    () => {
      ms932Encoder.encode("\u65E3");
    },
    Error,
    "encode-error: U+65E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65E4");
    },
    Error,
    "encode-error: U+65E4",
  );
  r = r &&
    ([...ms932Encoder.encode("日旦旧旨早")].join(",") ===
      "147,250,146,85,139,140,142,124,145,129"); // U+65E5
  assertThrows(
    () => {
      ms932Encoder.encode("\u65EA");
    },
    Error,
    "encode-error: U+65EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65EB");
    },
    Error,
    "encode-error: U+65EB",
  );
  r = r && ([...ms932Encoder.encode("旬旭")].join(",") === "143,123,136,174"); // U+65EC
  assertThrows(
    () => {
      ms932Encoder.encode("\u65EE");
    },
    Error,
    "encode-error: U+65EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65EF");
    },
    Error,
    "encode-error: U+65EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65F0");
    },
    Error,
    "encode-error: U+65F0",
  );
  r = r && ([...ms932Encoder.encode("旱")].join(",") === "157,219"); // U+65F1
  assertThrows(
    () => {
      ms932Encoder.encode("\u65F2");
    },
    Error,
    "encode-error: U+65F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65F3");
    },
    Error,
    "encode-error: U+65F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65F4");
    },
    Error,
    "encode-error: U+65F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65F5");
    },
    Error,
    "encode-error: U+65F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65F6");
    },
    Error,
    "encode-error: U+65F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65F7");
    },
    Error,
    "encode-error: U+65F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65F8");
    },
    Error,
    "encode-error: U+65F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65F9");
    },
    Error,
    "encode-error: U+65F9",
  );
  r = r && ([...ms932Encoder.encode("旺旻")].join(",") === "137,160,157,223"); // U+65FA
  assertThrows(
    () => {
      ms932Encoder.encode("\u65FC");
    },
    Error,
    "encode-error: U+65FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65FD");
    },
    Error,
    "encode-error: U+65FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65FE");
    },
    Error,
    "encode-error: U+65FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u65FF");
    },
    Error,
    "encode-error: U+65FF",
  );
  r = r && ([...ms932Encoder.encode("昀")].join(",") === "250,206"); // U+6600
  assertThrows(
    () => {
      ms932Encoder.encode("\u6601");
    },
    Error,
    "encode-error: U+6601",
  );
  r = r && ([...ms932Encoder.encode("昂昃")].join(",") === "141,86,157,222"); // U+6602
  assertThrows(
    () => {
      ms932Encoder.encode("\u6604");
    },
    Error,
    "encode-error: U+6604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6605");
    },
    Error,
    "encode-error: U+6605",
  );
  r = r && ([...ms932Encoder.encode("昆昇")].join(",") === "141,169,143,184"); // U+6606
  assertThrows(
    () => {
      ms932Encoder.encode("\u6608");
    },
    Error,
    "encode-error: U+6608",
  );
  r = r && ([...ms932Encoder.encode("昉昊")].join(",") === "250,209,157,221"); // U+6609
  assertThrows(
    () => {
      ms932Encoder.encode("\u660B");
    },
    Error,
    "encode-error: U+660B",
  );
  r = r && ([...ms932Encoder.encode("昌")].join(",") === "143,185"); // U+660C
  assertThrows(
    () => {
      ms932Encoder.encode("\u660D");
    },
    Error,
    "encode-error: U+660D",
  );
  r = r && ([...ms932Encoder.encode("明昏")].join(",") === "150,190,141,168"); // U+660E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6610");
    },
    Error,
    "encode-error: U+6610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6611");
    },
    Error,
    "encode-error: U+6611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6612");
    },
    Error,
    "encode-error: U+6612",
  );
  r = r &&
    ([...ms932Encoder.encode("易昔昕")].join(",") ===
      "136,213,144,204,250,207"); // U+6613
  assertThrows(
    () => {
      ms932Encoder.encode("\u6616");
    },
    Error,
    "encode-error: U+6616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6617");
    },
    Error,
    "encode-error: U+6617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6618");
    },
    Error,
    "encode-error: U+6618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6619");
    },
    Error,
    "encode-error: U+6619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u661A");
    },
    Error,
    "encode-error: U+661A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u661B");
    },
    Error,
    "encode-error: U+661B",
  );
  r = r && ([...ms932Encoder.encode("昜")].join(",") === "157,228"); // U+661C
  assertThrows(
    () => {
      ms932Encoder.encode("\u661D");
    },
    Error,
    "encode-error: U+661D",
  );
  r = r &&
    ([...ms932Encoder.encode("昞星映")].join(",") ===
      "250,211,144,175,137,102"); // U+661E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6621");
    },
    Error,
    "encode-error: U+6621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6622");
    },
    Error,
    "encode-error: U+6622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6623");
    },
    Error,
    "encode-error: U+6623",
  );
  r = r && ([...ms932Encoder.encode("昤春")].join(",") === "250,212,143,116"); // U+6624
  assertThrows(
    () => {
      ms932Encoder.encode("\u6626");
    },
    Error,
    "encode-error: U+6626",
  );
  r = r && ([...ms932Encoder.encode("昧昨")].join(",") === "150,134,141,240"); // U+6627
  assertThrows(
    () => {
      ms932Encoder.encode("\u6629");
    },
    Error,
    "encode-error: U+6629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u662A");
    },
    Error,
    "encode-error: U+662A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u662B");
    },
    Error,
    "encode-error: U+662B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u662C");
    },
    Error,
    "encode-error: U+662C",
  );
  r = r &&
    ([...ms932Encoder.encode("昭昮是")].join(",") ===
      "143,186,250,210,144,165"); // U+662D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6630");
    },
    Error,
    "encode-error: U+6630",
  );
  r = r && ([...ms932Encoder.encode("昱")].join(",") === "250,99"); // U+6631
  assertThrows(
    () => {
      ms932Encoder.encode("\u6632");
    },
    Error,
    "encode-error: U+6632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6633");
    },
    Error,
    "encode-error: U+6633",
  );
  r = r &&
    ([...ms932Encoder.encode("昴昵昶")].join(",") ===
      "157,227,157,225,157,226"); // U+6634
  assertThrows(
    () => {
      ms932Encoder.encode("\u6637");
    },
    Error,
    "encode-error: U+6637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6638");
    },
    Error,
    "encode-error: U+6638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6639");
    },
    Error,
    "encode-error: U+6639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u663A");
    },
    Error,
    "encode-error: U+663A",
  );
  r = r && ([...ms932Encoder.encode("昻昼")].join(",") === "250,208,146,139"); // U+663B
  assertThrows(
    () => {
      ms932Encoder.encode("\u663D");
    },
    Error,
    "encode-error: U+663D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u663E");
    },
    Error,
    "encode-error: U+663E",
  );
  r = r && ([...ms932Encoder.encode("昿")].join(",") === "158,69"); // U+663F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6640");
    },
    Error,
    "encode-error: U+6640",
  );
  r = r &&
    ([...ms932Encoder.encode("晁時晃晄")].join(",") ===
      "157,232,142,158,141,87,157,230"); // U+6641
  assertThrows(
    () => {
      ms932Encoder.encode("\u6645");
    },
    Error,
    "encode-error: U+6645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6646");
    },
    Error,
    "encode-error: U+6646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6647");
    },
    Error,
    "encode-error: U+6647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6648");
    },
    Error,
    "encode-error: U+6648",
  );
  r = r && ([...ms932Encoder.encode("晉")].join(",") === "157,231"); // U+6649
  assertThrows(
    () => {
      ms932Encoder.encode("\u664A");
    },
    Error,
    "encode-error: U+664A",
  );
  r = r && ([...ms932Encoder.encode("晋")].join(",") === "144,87"); // U+664B
  assertThrows(
    () => {
      ms932Encoder.encode("\u664C");
    },
    Error,
    "encode-error: U+664C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u664D");
    },
    Error,
    "encode-error: U+664D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u664E");
    },
    Error,
    "encode-error: U+664E",
  );
  r = r && ([...ms932Encoder.encode("晏")].join(",") === "157,229"); // U+664F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6650");
    },
    Error,
    "encode-error: U+6650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6651");
    },
    Error,
    "encode-error: U+6651",
  );
  r = r && ([...ms932Encoder.encode("晒")].join(",") === "142,78"); // U+6652
  assertThrows(
    () => {
      ms932Encoder.encode("\u6653");
    },
    Error,
    "encode-error: U+6653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6654");
    },
    Error,
    "encode-error: U+6654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6655");
    },
    Error,
    "encode-error: U+6655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6656");
    },
    Error,
    "encode-error: U+6656",
  );
  r = r && ([...ms932Encoder.encode("晗")].join(",") === "250,214"); // U+6657
  assertThrows(
    () => {
      ms932Encoder.encode("\u6658");
    },
    Error,
    "encode-error: U+6658",
  );
  r = r && ([...ms932Encoder.encode("晙")].join(",") === "250,215"); // U+6659
  assertThrows(
    () => {
      ms932Encoder.encode("\u665A");
    },
    Error,
    "encode-error: U+665A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u665B");
    },
    Error,
    "encode-error: U+665B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u665C");
    },
    Error,
    "encode-error: U+665C",
  );
  r = r &&
    ([...ms932Encoder.encode("晝晞晟")].join(",") ===
      "157,234,157,233,157,238"); // U+665D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6660");
    },
    Error,
    "encode-error: U+6660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6661");
    },
    Error,
    "encode-error: U+6661",
  );
  r = r && ([...ms932Encoder.encode("晢")].join(",") === "157,239"); // U+6662
  assertThrows(
    () => {
      ms932Encoder.encode("\u6663");
    },
    Error,
    "encode-error: U+6663",
  );
  r = r &&
    ([...ms932Encoder.encode("晤晥晦晧晨晩")].join(",") ===
      "157,235,250,213,138,65,157,236,157,237,148,211"); // U+6664
  assertThrows(
    () => {
      ms932Encoder.encode("\u666A");
    },
    Error,
    "encode-error: U+666A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u666B");
    },
    Error,
    "encode-error: U+666B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u666C");
    },
    Error,
    "encode-error: U+666C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u666D");
    },
    Error,
    "encode-error: U+666D",
  );
  r = r &&
    ([...ms932Encoder.encode("普景晰")].join(",") ===
      "149,129,140,105,157,240"); // U+666E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6671");
    },
    Error,
    "encode-error: U+6671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6672");
    },
    Error,
    "encode-error: U+6672",
  );
  r = r && ([...ms932Encoder.encode("晳晴")].join(",") === "250,217,144,176"); // U+6673
  assertThrows(
    () => {
      ms932Encoder.encode("\u6675");
    },
    Error,
    "encode-error: U+6675",
  );
  r = r && ([...ms932Encoder.encode("晶")].join(",") === "143,187"); // U+6676
  assertThrows(
    () => {
      ms932Encoder.encode("\u6677");
    },
    Error,
    "encode-error: U+6677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6678");
    },
    Error,
    "encode-error: U+6678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6679");
    },
    Error,
    "encode-error: U+6679",
  );
  r = r && ([...ms932Encoder.encode("智")].join(",") === "146,113"); // U+667A
  assertThrows(
    () => {
      ms932Encoder.encode("\u667B");
    },
    Error,
    "encode-error: U+667B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u667C");
    },
    Error,
    "encode-error: U+667C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u667D");
    },
    Error,
    "encode-error: U+667D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u667E");
    },
    Error,
    "encode-error: U+667E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u667F");
    },
    Error,
    "encode-error: U+667F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6680");
    },
    Error,
    "encode-error: U+6680",
  );
  r = r && ([...ms932Encoder.encode("暁")].join(",") === "139,197"); // U+6681
  assertThrows(
    () => {
      ms932Encoder.encode("\u6682");
    },
    Error,
    "encode-error: U+6682",
  );
  r = r && ([...ms932Encoder.encode("暃暄")].join(",") === "157,241,157,245"); // U+6683
  assertThrows(
    () => {
      ms932Encoder.encode("\u6685");
    },
    Error,
    "encode-error: U+6685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6686");
    },
    Error,
    "encode-error: U+6686",
  );
  r = r &&
    ([...ms932Encoder.encode("暇暈暉")].join(",") ===
      "137,201,157,242,157,244"); // U+6687
  assertThrows(
    () => {
      ms932Encoder.encode("\u668A");
    },
    Error,
    "encode-error: U+668A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u668B");
    },
    Error,
    "encode-error: U+668B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u668C");
    },
    Error,
    "encode-error: U+668C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u668D");
    },
    Error,
    "encode-error: U+668D",
  );
  r = r && ([...ms932Encoder.encode("暎")].join(",") === "157,243"); // U+668E
  assertThrows(
    () => {
      ms932Encoder.encode("\u668F");
    },
    Error,
    "encode-error: U+668F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6690");
    },
    Error,
    "encode-error: U+6690",
  );
  r = r && ([...ms932Encoder.encode("暑")].join(",") === "143,139"); // U+6691
  assertThrows(
    () => {
      ms932Encoder.encode("\u6692");
    },
    Error,
    "encode-error: U+6692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6693");
    },
    Error,
    "encode-error: U+6693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6694");
    },
    Error,
    "encode-error: U+6694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6695");
    },
    Error,
    "encode-error: U+6695",
  );
  r = r &&
    ([...ms932Encoder.encode("暖暗暘暙")].join(",") ===
      "146,103,136,195,157,246,250,218"); // U+6696
  assertThrows(
    () => {
      ms932Encoder.encode("\u669A");
    },
    Error,
    "encode-error: U+669A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u669B");
    },
    Error,
    "encode-error: U+669B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u669C");
    },
    Error,
    "encode-error: U+669C",
  );
  r = r && ([...ms932Encoder.encode("暝")].join(",") === "157,247"); // U+669D
  assertThrows(
    () => {
      ms932Encoder.encode("\u669E");
    },
    Error,
    "encode-error: U+669E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u669F");
    },
    Error,
    "encode-error: U+669F",
  );
  r = r && ([...ms932Encoder.encode("暠")].join(",") === "250,219"); // U+66A0
  assertThrows(
    () => {
      ms932Encoder.encode("\u66A1");
    },
    Error,
    "encode-error: U+66A1",
  );
  r = r && ([...ms932Encoder.encode("暢")].join(",") === "146,168"); // U+66A2
  assertThrows(
    () => {
      ms932Encoder.encode("\u66A3");
    },
    Error,
    "encode-error: U+66A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66A4");
    },
    Error,
    "encode-error: U+66A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66A5");
    },
    Error,
    "encode-error: U+66A5",
  );
  r = r && ([...ms932Encoder.encode("暦")].join(",") === "151,239"); // U+66A6
  assertThrows(
    () => {
      ms932Encoder.encode("\u66A7");
    },
    Error,
    "encode-error: U+66A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66A8");
    },
    Error,
    "encode-error: U+66A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66A9");
    },
    Error,
    "encode-error: U+66A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66AA");
    },
    Error,
    "encode-error: U+66AA",
  );
  r = r && ([...ms932Encoder.encode("暫")].join(",") === "142,98"); // U+66AB
  assertThrows(
    () => {
      ms932Encoder.encode("\u66AC");
    },
    Error,
    "encode-error: U+66AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66AD");
    },
    Error,
    "encode-error: U+66AD",
  );
  r = r && ([...ms932Encoder.encode("暮")].join(",") === "149,233"); // U+66AE
  assertThrows(
    () => {
      ms932Encoder.encode("\u66AF");
    },
    Error,
    "encode-error: U+66AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66B0");
    },
    Error,
    "encode-error: U+66B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66B1");
    },
    Error,
    "encode-error: U+66B1",
  );
  r = r && ([...ms932Encoder.encode("暲")].join(",") === "250,220"); // U+66B2
  assertThrows(
    () => {
      ms932Encoder.encode("\u66B3");
    },
    Error,
    "encode-error: U+66B3",
  );
  r = r && ([...ms932Encoder.encode("暴")].join(",") === "150,92"); // U+66B4
  assertThrows(
    () => {
      ms932Encoder.encode("\u66B5");
    },
    Error,
    "encode-error: U+66B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66B6");
    },
    Error,
    "encode-error: U+66B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66B7");
    },
    Error,
    "encode-error: U+66B7",
  );
  r = r && ([...ms932Encoder.encode("暸暹")].join(",") === "158,65,157,249"); // U+66B8
  assertThrows(
    () => {
      ms932Encoder.encode("\u66BA");
    },
    Error,
    "encode-error: U+66BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66BB");
    },
    Error,
    "encode-error: U+66BB",
  );
  r = r && ([...ms932Encoder.encode("暼")].join(",") === "157,252"); // U+66BC
  assertThrows(
    () => {
      ms932Encoder.encode("\u66BD");
    },
    Error,
    "encode-error: U+66BD",
  );
  r = r && ([...ms932Encoder.encode("暾暿")].join(",") === "157,251,250,221"); // U+66BE
  assertThrows(
    () => {
      ms932Encoder.encode("\u66C0");
    },
    Error,
    "encode-error: U+66C0",
  );
  r = r && ([...ms932Encoder.encode("曁")].join(",") === "157,248"); // U+66C1
  assertThrows(
    () => {
      ms932Encoder.encode("\u66C2");
    },
    Error,
    "encode-error: U+66C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66C3");
    },
    Error,
    "encode-error: U+66C3",
  );
  r = r && ([...ms932Encoder.encode("曄")].join(",") === "158,64"); // U+66C4
  assertThrows(
    () => {
      ms932Encoder.encode("\u66C5");
    },
    Error,
    "encode-error: U+66C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66C6");
    },
    Error,
    "encode-error: U+66C6",
  );
  r = r && ([...ms932Encoder.encode("曇")].join(",") === "147,220"); // U+66C7
  assertThrows(
    () => {
      ms932Encoder.encode("\u66C8");
    },
    Error,
    "encode-error: U+66C8",
  );
  r = r && ([...ms932Encoder.encode("曉")].join(",") === "157,250"); // U+66C9
  assertThrows(
    () => {
      ms932Encoder.encode("\u66CA");
    },
    Error,
    "encode-error: U+66CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66CB");
    },
    Error,
    "encode-error: U+66CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66CC");
    },
    Error,
    "encode-error: U+66CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66CD");
    },
    Error,
    "encode-error: U+66CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66CE");
    },
    Error,
    "encode-error: U+66CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66CF");
    },
    Error,
    "encode-error: U+66CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66D0");
    },
    Error,
    "encode-error: U+66D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66D1");
    },
    Error,
    "encode-error: U+66D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66D2");
    },
    Error,
    "encode-error: U+66D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66D3");
    },
    Error,
    "encode-error: U+66D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66D4");
    },
    Error,
    "encode-error: U+66D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66D5");
    },
    Error,
    "encode-error: U+66D5",
  );
  r = r && ([...ms932Encoder.encode("曖")].join(",") === "158,66"); // U+66D6
  assertThrows(
    () => {
      ms932Encoder.encode("\u66D7");
    },
    Error,
    "encode-error: U+66D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66D8");
    },
    Error,
    "encode-error: U+66D8",
  );
  r = r && ([...ms932Encoder.encode("曙曚")].join(",") === "143,140,158,67"); // U+66D9
  assertThrows(
    () => {
      ms932Encoder.encode("\u66DB");
    },
    Error,
    "encode-error: U+66DB",
  );
  r = r && ([...ms932Encoder.encode("曜曝")].join(",") === "151,106,148,152"); // U+66DC
  assertThrows(
    () => {
      ms932Encoder.encode("\u66DE");
    },
    Error,
    "encode-error: U+66DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66DF");
    },
    Error,
    "encode-error: U+66DF",
  );
  r = r && ([...ms932Encoder.encode("曠")].join(",") === "158,68"); // U+66E0
  assertThrows(
    () => {
      ms932Encoder.encode("\u66E1");
    },
    Error,
    "encode-error: U+66E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66E2");
    },
    Error,
    "encode-error: U+66E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66E3");
    },
    Error,
    "encode-error: U+66E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66E4");
    },
    Error,
    "encode-error: U+66E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66E5");
    },
    Error,
    "encode-error: U+66E5",
  );
  r = r && ([...ms932Encoder.encode("曦")].join(",") === "158,70"); // U+66E6
  assertThrows(
    () => {
      ms932Encoder.encode("\u66E7");
    },
    Error,
    "encode-error: U+66E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66E8");
    },
    Error,
    "encode-error: U+66E8",
  );
  r = r && ([...ms932Encoder.encode("曩")].join(",") === "158,71"); // U+66E9
  assertThrows(
    () => {
      ms932Encoder.encode("\u66EA");
    },
    Error,
    "encode-error: U+66EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66EB");
    },
    Error,
    "encode-error: U+66EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66EC");
    },
    Error,
    "encode-error: U+66EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66ED");
    },
    Error,
    "encode-error: U+66ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66EE");
    },
    Error,
    "encode-error: U+66EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u66EF");
    },
    Error,
    "encode-error: U+66EF",
  );
  r = r && ([...ms932Encoder.encode("曰")].join(",") === "158,72"); // U+66F0
  assertThrows(
    () => {
      ms932Encoder.encode("\u66F1");
    },
    Error,
    "encode-error: U+66F1",
  );
  r = r &&
    ([...ms932Encoder.encode("曲曳更曵")].join(",") ===
      "139,200,137,103,141,88,158,73"); // U+66F2
  assertThrows(
    () => {
      ms932Encoder.encode("\u66F6");
    },
    Error,
    "encode-error: U+66F6",
  );
  r = r &&
    ([...ms932Encoder.encode("曷書曹曺曻曼曽曾替最")].join(",") ===
      "158,74,143,145,145,130,250,222,250,102,153,214,145,93,145,92,145,214,141,197"); // U+66F7
  assertThrows(
    () => {
      ms932Encoder.encode("\u6701");
    },
    Error,
    "encode-error: U+6701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6702");
    },
    Error,
    "encode-error: U+6702",
  );
  r = r && ([...ms932Encoder.encode("會")].join(",") === "152,240"); // U+6703
  assertThrows(
    () => {
      ms932Encoder.encode("\u6704");
    },
    Error,
    "encode-error: U+6704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6705");
    },
    Error,
    "encode-error: U+6705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6706");
    },
    Error,
    "encode-error: U+6706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6707");
    },
    Error,
    "encode-error: U+6707",
  );
  r = r && ([...ms932Encoder.encode("月有")].join(",") === "140,142,151,76"); // U+6708
  assertThrows(
    () => {
      ms932Encoder.encode("\u670A");
    },
    Error,
    "encode-error: U+670A",
  );
  r = r && ([...ms932Encoder.encode("朋")].join(",") === "149,252"); // U+670B
  assertThrows(
    () => {
      ms932Encoder.encode("\u670C");
    },
    Error,
    "encode-error: U+670C",
  );
  r = r &&
    ([...ms932Encoder.encode("服朎朏")].join(",") === "149,158,250,223,158,75"); // U+670D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6710");
    },
    Error,
    "encode-error: U+6710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6711");
    },
    Error,
    "encode-error: U+6711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6712");
    },
    Error,
    "encode-error: U+6712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6713");
    },
    Error,
    "encode-error: U+6713",
  );
  r = r &&
    ([...ms932Encoder.encode("朔朕朖朗")].join(",") ===
      "141,241,146,189,158,76,152,78"); // U+6714
  assertThrows(
    () => {
      ms932Encoder.encode("\u6718");
    },
    Error,
    "encode-error: U+6718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6719");
    },
    Error,
    "encode-error: U+6719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u671A");
    },
    Error,
    "encode-error: U+671A",
  );
  r = r && ([...ms932Encoder.encode("望")].join(",") === "150,93"); // U+671B
  assertThrows(
    () => {
      ms932Encoder.encode("\u671C");
    },
    Error,
    "encode-error: U+671C",
  );
  r = r &&
    ([...ms932Encoder.encode("朝朞期")].join(",") === "146,169,158,77,138,250"); // U+671D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6720");
    },
    Error,
    "encode-error: U+6720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6721");
    },
    Error,
    "encode-error: U+6721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6722");
    },
    Error,
    "encode-error: U+6722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6723");
    },
    Error,
    "encode-error: U+6723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6724");
    },
    Error,
    "encode-error: U+6724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6725");
    },
    Error,
    "encode-error: U+6725",
  );
  r = r &&
    ([...ms932Encoder.encode("朦朧木")].join(",") === "158,78,158,79,150,216"); // U+6726
  assertThrows(
    () => {
      ms932Encoder.encode("\u6729");
    },
    Error,
    "encode-error: U+6729",
  );
  r = r &&
    ([...ms932Encoder.encode("未末本札朮")].join(",") ===
      "150,162,150,150,150,123,142,68,158,81"); // U+672A
  assertThrows(
    () => {
      ms932Encoder.encode("\u672F");
    },
    Error,
    "encode-error: U+672F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6730");
    },
    Error,
    "encode-error: U+6730",
  );
  r = r && ([...ms932Encoder.encode("朱")].join(",") === "142,233"); // U+6731
  assertThrows(
    () => {
      ms932Encoder.encode("\u6732");
    },
    Error,
    "encode-error: U+6732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6733");
    },
    Error,
    "encode-error: U+6733",
  );
  r = r && ([...ms932Encoder.encode("朴")].join(",") === "150,112"); // U+6734
  assertThrows(
    () => {
      ms932Encoder.encode("\u6735");
    },
    Error,
    "encode-error: U+6735",
  );
  r = r &&
    ([...ms932Encoder.encode("朶朷朸")].join(",") === "158,83,158,86,158,85"); // U+6736
  assertThrows(
    () => {
      ms932Encoder.encode("\u6739");
    },
    Error,
    "encode-error: U+6739",
  );
  r = r && ([...ms932Encoder.encode("机")].join(",") === "138,247"); // U+673A
  assertThrows(
    () => {
      ms932Encoder.encode("\u673B");
    },
    Error,
    "encode-error: U+673B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u673C");
    },
    Error,
    "encode-error: U+673C",
  );
  r = r && ([...ms932Encoder.encode("朽")].join(",") === "139,128"); // U+673D
  assertThrows(
    () => {
      ms932Encoder.encode("\u673E");
    },
    Error,
    "encode-error: U+673E",
  );
  r = r && ([...ms932Encoder.encode("朿")].join(",") === "158,82"); // U+673F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6740");
    },
    Error,
    "encode-error: U+6740",
  );
  r = r && ([...ms932Encoder.encode("杁")].join(",") === "158,84"); // U+6741
  assertThrows(
    () => {
      ms932Encoder.encode("\u6742");
    },
    Error,
    "encode-error: U+6742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6743");
    },
    Error,
    "encode-error: U+6743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6744");
    },
    Error,
    "encode-error: U+6744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6745");
    },
    Error,
    "encode-error: U+6745",
  );
  r = r && ([...ms932Encoder.encode("杆")].join(",") === "158,87"); // U+6746
  assertThrows(
    () => {
      ms932Encoder.encode("\u6747");
    },
    Error,
    "encode-error: U+6747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6748");
    },
    Error,
    "encode-error: U+6748",
  );
  r = r && ([...ms932Encoder.encode("杉")].join(",") === "144,153"); // U+6749
  assertThrows(
    () => {
      ms932Encoder.encode("\u674A");
    },
    Error,
    "encode-error: U+674A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u674B");
    },
    Error,
    "encode-error: U+674B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u674C");
    },
    Error,
    "encode-error: U+674C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u674D");
    },
    Error,
    "encode-error: U+674D",
  );
  r = r &&
    ([...ms932Encoder.encode("李杏材村")].join(",") ===
      "151,155,136,199,141,222,145,186"); // U+674E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6752");
    },
    Error,
    "encode-error: U+6752",
  );
  r = r && ([...ms932Encoder.encode("杓")].join(",") === "142,219"); // U+6753
  assertThrows(
    () => {
      ms932Encoder.encode("\u6754");
    },
    Error,
    "encode-error: U+6754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6755");
    },
    Error,
    "encode-error: U+6755",
  );
  r = r && ([...ms932Encoder.encode("杖")].join(",") === "143,241"); // U+6756
  assertThrows(
    () => {
      ms932Encoder.encode("\u6757");
    },
    Error,
    "encode-error: U+6757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6758");
    },
    Error,
    "encode-error: U+6758",
  );
  r = r && ([...ms932Encoder.encode("杙")].join(",") === "158,90"); // U+6759
  assertThrows(
    () => {
      ms932Encoder.encode("\u675A");
    },
    Error,
    "encode-error: U+675A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u675B");
    },
    Error,
    "encode-error: U+675B",
  );
  r = r && ([...ms932Encoder.encode("杜")].join(",") === "147,109"); // U+675C
  assertThrows(
    () => {
      ms932Encoder.encode("\u675D");
    },
    Error,
    "encode-error: U+675D",
  );
  r = r &&
    ([...ms932Encoder.encode("杞束杠条杢杣杤来杦")].join(",") ===
      "158,88,145,169,158,89,143,240,150,219,158,91,158,92,151,136,250,225"); // U+675E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6767");
    },
    Error,
    "encode-error: U+6767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6768");
    },
    Error,
    "encode-error: U+6768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6769");
    },
    Error,
    "encode-error: U+6769",
  );
  r = r && ([...ms932Encoder.encode("杪")].join(",") === "158,97"); // U+676A
  assertThrows(
    () => {
      ms932Encoder.encode("\u676B");
    },
    Error,
    "encode-error: U+676B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u676C");
    },
    Error,
    "encode-error: U+676C",
  );
  r = r && ([...ms932Encoder.encode("杭")].join(",") === "141,89"); // U+676D
  assertThrows(
    () => {
      ms932Encoder.encode("\u676E");
    },
    Error,
    "encode-error: U+676E",
  );
  r = r &&
    ([...ms932Encoder.encode("杯杰東杲杳")].join(",") ===
      "148,116,158,94,147,140,157,220,157,224"); // U+676F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6774");
    },
    Error,
    "encode-error: U+6774",
  );
  r = r && ([...ms932Encoder.encode("杵")].join(",") === "139,110"); // U+6775
  assertThrows(
    () => {
      ms932Encoder.encode("\u6776");
    },
    Error,
    "encode-error: U+6776",
  );
  r = r && ([...ms932Encoder.encode("杷")].join(",") === "148,102"); // U+6777
  assertThrows(
    () => {
      ms932Encoder.encode("\u6778");
    },
    Error,
    "encode-error: U+6778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6779");
    },
    Error,
    "encode-error: U+6779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u677A");
    },
    Error,
    "encode-error: U+677A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u677B");
    },
    Error,
    "encode-error: U+677B",
  );
  r = r && ([...ms932Encoder.encode("杼")].join(",") === "158,96"); // U+677C
  assertThrows(
    () => {
      ms932Encoder.encode("\u677D");
    },
    Error,
    "encode-error: U+677D",
  );
  r = r && ([...ms932Encoder.encode("松板")].join(",") === "143,188,148,194"); // U+677E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6780");
    },
    Error,
    "encode-error: U+6780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6781");
    },
    Error,
    "encode-error: U+6781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6782");
    },
    Error,
    "encode-error: U+6782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6783");
    },
    Error,
    "encode-error: U+6783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6784");
    },
    Error,
    "encode-error: U+6784",
  );
  r = r && ([...ms932Encoder.encode("枅")].join(",") === "158,102"); // U+6785
  assertThrows(
    () => {
      ms932Encoder.encode("\u6786");
    },
    Error,
    "encode-error: U+6786",
  );
  r = r && ([...ms932Encoder.encode("枇")].join(",") === "148,248"); // U+6787
  assertThrows(
    () => {
      ms932Encoder.encode("\u6788");
    },
    Error,
    "encode-error: U+6788",
  );
  r = r && ([...ms932Encoder.encode("枉")].join(",") === "158,93"); // U+6789
  assertThrows(
    () => {
      ms932Encoder.encode("\u678A");
    },
    Error,
    "encode-error: U+678A",
  );
  r = r && ([...ms932Encoder.encode("枋枌")].join(",") === "158,99,158,98"); // U+678B
  assertThrows(
    () => {
      ms932Encoder.encode("\u678D");
    },
    Error,
    "encode-error: U+678D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u678E");
    },
    Error,
    "encode-error: U+678E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u678F");
    },
    Error,
    "encode-error: U+678F",
  );
  r = r && ([...ms932Encoder.encode("析")].join(",") === "144,205"); // U+6790
  assertThrows(
    () => {
      ms932Encoder.encode("\u6791");
    },
    Error,
    "encode-error: U+6791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6792");
    },
    Error,
    "encode-error: U+6792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6793");
    },
    Error,
    "encode-error: U+6793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6794");
    },
    Error,
    "encode-error: U+6794",
  );
  r = r && ([...ms932Encoder.encode("枕")].join(",") === "150,141"); // U+6795
  assertThrows(
    () => {
      ms932Encoder.encode("\u6796");
    },
    Error,
    "encode-error: U+6796",
  );
  r = r && ([...ms932Encoder.encode("林")].join(",") === "151,209"); // U+6797
  assertThrows(
    () => {
      ms932Encoder.encode("\u6798");
    },
    Error,
    "encode-error: U+6798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6799");
    },
    Error,
    "encode-error: U+6799",
  );
  r = r && ([...ms932Encoder.encode("枚")].join(",") === "150,135"); // U+679A
  assertThrows(
    () => {
      ms932Encoder.encode("\u679B");
    },
    Error,
    "encode-error: U+679B",
  );
  r = r && ([...ms932Encoder.encode("果枝")].join(",") === "137,202,142,125"); // U+679C
  assertThrows(
    () => {
      ms932Encoder.encode("\u679E");
    },
    Error,
    "encode-error: U+679E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u679F");
    },
    Error,
    "encode-error: U+679F",
  );
  r = r &&
    ([...ms932Encoder.encode("枠枡枢")].join(",") ===
      "152,103,158,101,144,149"); // U+67A0
  assertThrows(
    () => {
      ms932Encoder.encode("\u67A3");
    },
    Error,
    "encode-error: U+67A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67A4");
    },
    Error,
    "encode-error: U+67A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67A5");
    },
    Error,
    "encode-error: U+67A5",
  );
  r = r && ([...ms932Encoder.encode("枦")].join(",") === "158,100"); // U+67A6
  assertThrows(
    () => {
      ms932Encoder.encode("\u67A7");
    },
    Error,
    "encode-error: U+67A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67A8");
    },
    Error,
    "encode-error: U+67A8",
  );
  r = r && ([...ms932Encoder.encode("枩")].join(",") === "158,95"); // U+67A9
  assertThrows(
    () => {
      ms932Encoder.encode("\u67AA");
    },
    Error,
    "encode-error: U+67AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67AB");
    },
    Error,
    "encode-error: U+67AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67AC");
    },
    Error,
    "encode-error: U+67AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67AD");
    },
    Error,
    "encode-error: U+67AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67AE");
    },
    Error,
    "encode-error: U+67AE",
  );
  r = r && ([...ms932Encoder.encode("枯")].join(",") === "140,205"); // U+67AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u67B0");
    },
    Error,
    "encode-error: U+67B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67B1");
    },
    Error,
    "encode-error: U+67B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67B2");
    },
    Error,
    "encode-error: U+67B2",
  );
  r = r && ([...ms932Encoder.encode("枳枴")].join(",") === "158,107,158,105"); // U+67B3
  assertThrows(
    () => {
      ms932Encoder.encode("\u67B5");
    },
    Error,
    "encode-error: U+67B5",
  );
  r = r &&
    ([...ms932Encoder.encode("架枷枸枹")].join(",") ===
      "137,203,158,103,158,109,158,115"); // U+67B6
  assertThrows(
    () => {
      ms932Encoder.encode("\u67BA");
    },
    Error,
    "encode-error: U+67BA",
  );
  r = r && ([...ms932Encoder.encode("枻")].join(",") === "250,226"); // U+67BB
  assertThrows(
    () => {
      ms932Encoder.encode("\u67BC");
    },
    Error,
    "encode-error: U+67BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67BD");
    },
    Error,
    "encode-error: U+67BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67BE");
    },
    Error,
    "encode-error: U+67BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67BF");
    },
    Error,
    "encode-error: U+67BF",
  );
  r = r && ([...ms932Encoder.encode("柀柁")].join(",") === "250,228,145,198"); // U+67C0
  assertThrows(
    () => {
      ms932Encoder.encode("\u67C2");
    },
    Error,
    "encode-error: U+67C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67C3");
    },
    Error,
    "encode-error: U+67C3",
  );
  r = r && ([...ms932Encoder.encode("柄")].join(",") === "149,191"); // U+67C4
  assertThrows(
    () => {
      ms932Encoder.encode("\u67C5");
    },
    Error,
    "encode-error: U+67C5",
  );
  r = r && ([...ms932Encoder.encode("柆")].join(",") === "158,117"); // U+67C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u67C7");
    },
    Error,
    "encode-error: U+67C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67C8");
    },
    Error,
    "encode-error: U+67C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67C9");
    },
    Error,
    "encode-error: U+67C9",
  );
  r = r && ([...ms932Encoder.encode("柊")].join(",") === "149,65"); // U+67CA
  assertThrows(
    () => {
      ms932Encoder.encode("\u67CB");
    },
    Error,
    "encode-error: U+67CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67CC");
    },
    Error,
    "encode-error: U+67CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67CD");
    },
    Error,
    "encode-error: U+67CD",
  );
  r = r &&
    ([...ms932Encoder.encode("柎柏某柑")].join(",") ===
      "158,116,148,144,150,94,138,185"); // U+67CE
  assertThrows(
    () => {
      ms932Encoder.encode("\u67D2");
    },
    Error,
    "encode-error: U+67D2",
  );
  r = r && ([...ms932Encoder.encode("染柔")].join(",") === "144,245,143,95"); // U+67D3
  assertThrows(
    () => {
      ms932Encoder.encode("\u67D5");
    },
    Error,
    "encode-error: U+67D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67D6");
    },
    Error,
    "encode-error: U+67D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67D7");
    },
    Error,
    "encode-error: U+67D7",
  );
  r = r && ([...ms932Encoder.encode("柘")].join(",") === "146,209"); // U+67D8
  assertThrows(
    () => {
      ms932Encoder.encode("\u67D9");
    },
    Error,
    "encode-error: U+67D9",
  );
  r = r && ([...ms932Encoder.encode("柚")].join(",") === "151,77"); // U+67DA
  assertThrows(
    () => {
      ms932Encoder.encode("\u67DB");
    },
    Error,
    "encode-error: U+67DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67DC");
    },
    Error,
    "encode-error: U+67DC",
  );
  r = r && ([...ms932Encoder.encode("柝柞")].join(",") === "158,112,158,111"); // U+67DD
  assertThrows(
    () => {
      ms932Encoder.encode("\u67DF");
    },
    Error,
    "encode-error: U+67DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67E0");
    },
    Error,
    "encode-error: U+67E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67E1");
    },
    Error,
    "encode-error: U+67E1",
  );
  r = r && ([...ms932Encoder.encode("柢")].join(",") === "158,113"); // U+67E2
  assertThrows(
    () => {
      ms932Encoder.encode("\u67E3");
    },
    Error,
    "encode-error: U+67E3",
  );
  r = r && ([...ms932Encoder.encode("柤")].join(",") === "158,110"); // U+67E4
  assertThrows(
    () => {
      ms932Encoder.encode("\u67E5");
    },
    Error,
    "encode-error: U+67E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67E6");
    },
    Error,
    "encode-error: U+67E6",
  );
  r = r && ([...ms932Encoder.encode("柧")].join(",") === "158,118"); // U+67E7
  assertThrows(
    () => {
      ms932Encoder.encode("\u67E8");
    },
    Error,
    "encode-error: U+67E8",
  );
  r = r && ([...ms932Encoder.encode("柩")].join(",") === "158,108"); // U+67E9
  assertThrows(
    () => {
      ms932Encoder.encode("\u67EA");
    },
    Error,
    "encode-error: U+67EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67EB");
    },
    Error,
    "encode-error: U+67EB",
  );
  r = r && ([...ms932Encoder.encode("柬")].join(",") === "158,106"); // U+67EC
  assertThrows(
    () => {
      ms932Encoder.encode("\u67ED");
    },
    Error,
    "encode-error: U+67ED",
  );
  r = r && ([...ms932Encoder.encode("柮柯")].join(",") === "158,114,158,104"); // U+67EE
  assertThrows(
    () => {
      ms932Encoder.encode("\u67F0");
    },
    Error,
    "encode-error: U+67F0",
  );
  r = r && ([...ms932Encoder.encode("柱")].join(",") === "146,140"); // U+67F1
  assertThrows(
    () => {
      ms932Encoder.encode("\u67F2");
    },
    Error,
    "encode-error: U+67F2",
  );
  r = r &&
    ([...ms932Encoder.encode("柳柴柵")].join(",") ===
      "150,246,142,196,141,242"); // U+67F3
  assertThrows(
    () => {
      ms932Encoder.encode("\u67F6");
    },
    Error,
    "encode-error: U+67F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67F7");
    },
    Error,
    "encode-error: U+67F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67F8");
    },
    Error,
    "encode-error: U+67F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67F9");
    },
    Error,
    "encode-error: U+67F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67FA");
    },
    Error,
    "encode-error: U+67FA",
  );
  r = r && ([...ms932Encoder.encode("査")].join(",") === "141,184"); // U+67FB
  assertThrows(
    () => {
      ms932Encoder.encode("\u67FC");
    },
    Error,
    "encode-error: U+67FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u67FD");
    },
    Error,
    "encode-error: U+67FD",
  );
  r = r && ([...ms932Encoder.encode("柾柿")].join(",") === "150,143,138,96"); // U+67FE

  assertStrictEquals(r, true);
});
