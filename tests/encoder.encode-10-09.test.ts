import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+9800-U+9BFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u9800");
    },
    Error,
    "EncodingError U+9800",
  );
  r = r &&
    ([...ms932Encoder.encode("頁頂頃")].join(",") === "149,197,146,184,141,160"); // U+9801
  assertThrows(
    () => {
      ms932Encoder.encode("\u9804");
    },
    Error,
    "EncodingError U+9804",
  );
  r = r && ([...ms932Encoder.encode("項順")].join(",") === "141,128,143,135"); // U+9805
  assertThrows(
    () => {
      ms932Encoder.encode("\u9807");
    },
    Error,
    "EncodingError U+9807",
  );
  r = r && ([...ms932Encoder.encode("須")].join(",") === "144,123"); // U+9808
  assertThrows(
    () => {
      ms932Encoder.encode("\u9809");
    },
    Error,
    "EncodingError U+9809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u980A");
    },
    Error,
    "EncodingError U+980A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u980B");
    },
    Error,
    "EncodingError U+980B",
  );
  r = r && ([...ms932Encoder.encode("頌")].join(",") === "232,241"); // U+980C
  assertThrows(
    () => {
      ms932Encoder.encode("\u980D");
    },
    Error,
    "EncodingError U+980D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u980E");
    },
    Error,
    "EncodingError U+980E",
  );
  r = r &&
    ([...ms932Encoder.encode("頏預頑頒頓")].join(",") ===
      "232,240,151,97,138,230,148,208,147,218"); // U+980F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9814");
    },
    Error,
    "EncodingError U+9814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9815");
    },
    Error,
    "EncodingError U+9815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9816");
    },
    Error,
    "EncodingError U+9816",
  );
  r = r && ([...ms932Encoder.encode("頗領")].join(",") === "144,156,151,204"); // U+9817
  assertThrows(
    () => {
      ms932Encoder.encode("\u9819");
    },
    Error,
    "EncodingError U+9819",
  );
  r = r && ([...ms932Encoder.encode("頚")].join(",") === "140,122"); // U+981A
  assertThrows(
    () => {
      ms932Encoder.encode("\u981B");
    },
    Error,
    "EncodingError U+981B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u981C");
    },
    Error,
    "EncodingError U+981C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u981D");
    },
    Error,
    "EncodingError U+981D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u981E");
    },
    Error,
    "EncodingError U+981E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u981F");
    },
    Error,
    "EncodingError U+981F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9820");
    },
    Error,
    "EncodingError U+9820",
  );
  r = r && ([...ms932Encoder.encode("頡")].join(",") === "232,244"); // U+9821
  assertThrows(
    () => {
      ms932Encoder.encode("\u9822");
    },
    Error,
    "EncodingError U+9822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9823");
    },
    Error,
    "EncodingError U+9823",
  );
  r = r && ([...ms932Encoder.encode("頤")].join(",") === "232,243"); // U+9824
  assertThrows(
    () => {
      ms932Encoder.encode("\u9825");
    },
    Error,
    "EncodingError U+9825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9826");
    },
    Error,
    "EncodingError U+9826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9827");
    },
    Error,
    "EncodingError U+9827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9828");
    },
    Error,
    "EncodingError U+9828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9829");
    },
    Error,
    "EncodingError U+9829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u982A");
    },
    Error,
    "EncodingError U+982A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u982B");
    },
    Error,
    "EncodingError U+982B",
  );
  r = r && ([...ms932Encoder.encode("頬頭")].join(",") === "150,106,147,170"); // U+982C
  assertThrows(
    () => {
      ms932Encoder.encode("\u982E");
    },
    Error,
    "EncodingError U+982E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u982F");
    },
    Error,
    "EncodingError U+982F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9830");
    },
    Error,
    "EncodingError U+9830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9831");
    },
    Error,
    "EncodingError U+9831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9832");
    },
    Error,
    "EncodingError U+9832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9833");
    },
    Error,
    "EncodingError U+9833",
  );
  r = r && ([...ms932Encoder.encode("頴")].join(",") === "137,111"); // U+9834
  assertThrows(
    () => {
      ms932Encoder.encode("\u9835");
    },
    Error,
    "EncodingError U+9835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9836");
    },
    Error,
    "EncodingError U+9836",
  );
  r = r && ([...ms932Encoder.encode("頷頸")].join(",") === "232,245,232,242"); // U+9837
  assertThrows(
    () => {
      ms932Encoder.encode("\u9839");
    },
    Error,
    "EncodingError U+9839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u983A");
    },
    Error,
    "EncodingError U+983A",
  );
  r = r &&
    ([...ms932Encoder.encode("頻頼頽")].join(",") === "149,112,151,138,232,246"); // U+983B
  assertThrows(
    () => {
      ms932Encoder.encode("\u983E");
    },
    Error,
    "EncodingError U+983E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u983F");
    },
    Error,
    "EncodingError U+983F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9840");
    },
    Error,
    "EncodingError U+9840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9841");
    },
    Error,
    "EncodingError U+9841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9842");
    },
    Error,
    "EncodingError U+9842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9843");
    },
    Error,
    "EncodingError U+9843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9844");
    },
    Error,
    "EncodingError U+9844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9845");
    },
    Error,
    "EncodingError U+9845",
  );
  r = r && ([...ms932Encoder.encode("顆")].join(",") === "232,247"); // U+9846
  assertThrows(
    () => {
      ms932Encoder.encode("\u9847");
    },
    Error,
    "EncodingError U+9847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9848");
    },
    Error,
    "EncodingError U+9848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9849");
    },
    Error,
    "EncodingError U+9849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u984A");
    },
    Error,
    "EncodingError U+984A",
  );
  r = r &&
    ([...ms932Encoder.encode("顋題額顎顏")].join(",") ===
      "232,249,145,232,138,122,138,123,232,248"); // U+984B
  assertThrows(
    () => {
      ms932Encoder.encode("\u9850");
    },
    Error,
    "EncodingError U+9850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9851");
    },
    Error,
    "EncodingError U+9851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9852");
    },
    Error,
    "EncodingError U+9852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9853");
    },
    Error,
    "EncodingError U+9853",
  );
  r = r && ([...ms932Encoder.encode("顔顕")].join(",") === "138,231,140,176"); // U+9854
  assertThrows(
    () => {
      ms932Encoder.encode("\u9856");
    },
    Error,
    "EncodingError U+9856",
  );
  r = r && ([...ms932Encoder.encode("顗願")].join(",") === "251,244,138,232"); // U+9857
  assertThrows(
    () => {
      ms932Encoder.encode("\u9859");
    },
    Error,
    "EncodingError U+9859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u985A");
    },
    Error,
    "EncodingError U+985A",
  );
  r = r && ([...ms932Encoder.encode("顛")].join(",") === "147,94"); // U+985B
  assertThrows(
    () => {
      ms932Encoder.encode("\u985C");
    },
    Error,
    "EncodingError U+985C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u985D");
    },
    Error,
    "EncodingError U+985D",
  );
  r = r && ([...ms932Encoder.encode("類")].join(",") === "151,222"); // U+985E
  assertThrows(
    () => {
      ms932Encoder.encode("\u985F");
    },
    Error,
    "EncodingError U+985F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9860");
    },
    Error,
    "EncodingError U+9860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9861");
    },
    Error,
    "EncodingError U+9861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9862");
    },
    Error,
    "EncodingError U+9862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9863");
    },
    Error,
    "EncodingError U+9863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9864");
    },
    Error,
    "EncodingError U+9864",
  );
  r = r && ([...ms932Encoder.encode("顥")].join(",") === "251,245"); // U+9865
  assertThrows(
    () => {
      ms932Encoder.encode("\u9866");
    },
    Error,
    "EncodingError U+9866",
  );
  r = r && ([...ms932Encoder.encode("顧")].join(",") === "140,218"); // U+9867
  assertThrows(
    () => {
      ms932Encoder.encode("\u9868");
    },
    Error,
    "EncodingError U+9868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9869");
    },
    Error,
    "EncodingError U+9869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u986A");
    },
    Error,
    "EncodingError U+986A",
  );
  r = r && ([...ms932Encoder.encode("顫")].join(",") === "232,250"); // U+986B
  assertThrows(
    () => {
      ms932Encoder.encode("\u986C");
    },
    Error,
    "EncodingError U+986C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u986D");
    },
    Error,
    "EncodingError U+986D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u986E");
    },
    Error,
    "EncodingError U+986E",
  );
  r = r &&
    ([...ms932Encoder.encode("顯顰顱")].join(",") === "232,251,232,252,233,64"); // U+986F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9872");
    },
    Error,
    "EncodingError U+9872",
  );
  r = r && ([...ms932Encoder.encode("顳顴")].join(",") === "233,66,233,65"); // U+9873
  assertThrows(
    () => {
      ms932Encoder.encode("\u9875");
    },
    Error,
    "EncodingError U+9875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9876");
    },
    Error,
    "EncodingError U+9876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9877");
    },
    Error,
    "EncodingError U+9877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9878");
    },
    Error,
    "EncodingError U+9878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9879");
    },
    Error,
    "EncodingError U+9879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u987A");
    },
    Error,
    "EncodingError U+987A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u987B");
    },
    Error,
    "EncodingError U+987B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u987C");
    },
    Error,
    "EncodingError U+987C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u987D");
    },
    Error,
    "EncodingError U+987D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u987E");
    },
    Error,
    "EncodingError U+987E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u987F");
    },
    Error,
    "EncodingError U+987F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9880");
    },
    Error,
    "EncodingError U+9880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9881");
    },
    Error,
    "EncodingError U+9881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9882");
    },
    Error,
    "EncodingError U+9882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9883");
    },
    Error,
    "EncodingError U+9883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9884");
    },
    Error,
    "EncodingError U+9884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9885");
    },
    Error,
    "EncodingError U+9885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9886");
    },
    Error,
    "EncodingError U+9886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9887");
    },
    Error,
    "EncodingError U+9887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9888");
    },
    Error,
    "EncodingError U+9888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9889");
    },
    Error,
    "EncodingError U+9889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u988A");
    },
    Error,
    "EncodingError U+988A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u988B");
    },
    Error,
    "EncodingError U+988B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u988C");
    },
    Error,
    "EncodingError U+988C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u988D");
    },
    Error,
    "EncodingError U+988D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u988E");
    },
    Error,
    "EncodingError U+988E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u988F");
    },
    Error,
    "EncodingError U+988F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9890");
    },
    Error,
    "EncodingError U+9890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9891");
    },
    Error,
    "EncodingError U+9891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9892");
    },
    Error,
    "EncodingError U+9892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9893");
    },
    Error,
    "EncodingError U+9893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9894");
    },
    Error,
    "EncodingError U+9894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9895");
    },
    Error,
    "EncodingError U+9895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9896");
    },
    Error,
    "EncodingError U+9896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9897");
    },
    Error,
    "EncodingError U+9897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9898");
    },
    Error,
    "EncodingError U+9898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9899");
    },
    Error,
    "EncodingError U+9899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u989A");
    },
    Error,
    "EncodingError U+989A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u989B");
    },
    Error,
    "EncodingError U+989B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u989C");
    },
    Error,
    "EncodingError U+989C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u989D");
    },
    Error,
    "EncodingError U+989D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u989E");
    },
    Error,
    "EncodingError U+989E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u989F");
    },
    Error,
    "EncodingError U+989F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98A0");
    },
    Error,
    "EncodingError U+98A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98A1");
    },
    Error,
    "EncodingError U+98A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98A2");
    },
    Error,
    "EncodingError U+98A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98A3");
    },
    Error,
    "EncodingError U+98A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98A4");
    },
    Error,
    "EncodingError U+98A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98A5");
    },
    Error,
    "EncodingError U+98A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98A6");
    },
    Error,
    "EncodingError U+98A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98A7");
    },
    Error,
    "EncodingError U+98A7",
  );
  r = r && ([...ms932Encoder.encode("風")].join(",") === "149,151"); // U+98A8
  assertThrows(
    () => {
      ms932Encoder.encode("\u98A9");
    },
    Error,
    "EncodingError U+98A9",
  );
  r = r && ([...ms932Encoder.encode("颪")].join(",") === "233,67"); // U+98AA
  assertThrows(
    () => {
      ms932Encoder.encode("\u98AB");
    },
    Error,
    "EncodingError U+98AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98AC");
    },
    Error,
    "EncodingError U+98AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98AD");
    },
    Error,
    "EncodingError U+98AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98AE");
    },
    Error,
    "EncodingError U+98AE",
  );
  r = r && ([...ms932Encoder.encode("颯")].join(",") === "233,68"); // U+98AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u98B0");
    },
    Error,
    "EncodingError U+98B0",
  );
  r = r && ([...ms932Encoder.encode("颱")].join(",") === "233,69"); // U+98B1
  assertThrows(
    () => {
      ms932Encoder.encode("\u98B2");
    },
    Error,
    "EncodingError U+98B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98B3");
    },
    Error,
    "EncodingError U+98B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98B4");
    },
    Error,
    "EncodingError U+98B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98B5");
    },
    Error,
    "EncodingError U+98B5",
  );
  r = r && ([...ms932Encoder.encode("颶")].join(",") === "233,70"); // U+98B6
  assertThrows(
    () => {
      ms932Encoder.encode("\u98B7");
    },
    Error,
    "EncodingError U+98B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98B8");
    },
    Error,
    "EncodingError U+98B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98B9");
    },
    Error,
    "EncodingError U+98B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98BA");
    },
    Error,
    "EncodingError U+98BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98BB");
    },
    Error,
    "EncodingError U+98BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98BC");
    },
    Error,
    "EncodingError U+98BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98BD");
    },
    Error,
    "EncodingError U+98BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98BE");
    },
    Error,
    "EncodingError U+98BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98BF");
    },
    Error,
    "EncodingError U+98BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98C0");
    },
    Error,
    "EncodingError U+98C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98C1");
    },
    Error,
    "EncodingError U+98C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98C2");
    },
    Error,
    "EncodingError U+98C2",
  );
  r = r && ([...ms932Encoder.encode("飃飄")].join(",") === "233,72,233,71"); // U+98C3
  assertThrows(
    () => {
      ms932Encoder.encode("\u98C5");
    },
    Error,
    "EncodingError U+98C5",
  );
  r = r && ([...ms932Encoder.encode("飆")].join(",") === "233,73"); // U+98C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u98C7");
    },
    Error,
    "EncodingError U+98C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98C8");
    },
    Error,
    "EncodingError U+98C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98C9");
    },
    Error,
    "EncodingError U+98C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98CA");
    },
    Error,
    "EncodingError U+98CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98CB");
    },
    Error,
    "EncodingError U+98CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98CC");
    },
    Error,
    "EncodingError U+98CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98CD");
    },
    Error,
    "EncodingError U+98CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98CE");
    },
    Error,
    "EncodingError U+98CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98CF");
    },
    Error,
    "EncodingError U+98CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98D0");
    },
    Error,
    "EncodingError U+98D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98D1");
    },
    Error,
    "EncodingError U+98D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98D2");
    },
    Error,
    "EncodingError U+98D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98D3");
    },
    Error,
    "EncodingError U+98D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98D4");
    },
    Error,
    "EncodingError U+98D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98D5");
    },
    Error,
    "EncodingError U+98D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98D6");
    },
    Error,
    "EncodingError U+98D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98D7");
    },
    Error,
    "EncodingError U+98D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98D8");
    },
    Error,
    "EncodingError U+98D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98D9");
    },
    Error,
    "EncodingError U+98D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98DA");
    },
    Error,
    "EncodingError U+98DA",
  );
  r = r && ([...ms932Encoder.encode("飛飜")].join(",") === "148,242,227,202"); // U+98DB
  assertThrows(
    () => {
      ms932Encoder.encode("\u98DD");
    },
    Error,
    "EncodingError U+98DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98DE");
    },
    Error,
    "EncodingError U+98DE",
  );
  r = r && ([...ms932Encoder.encode("食")].join(",") === "144,72"); // U+98DF
  assertThrows(
    () => {
      ms932Encoder.encode("\u98E0");
    },
    Error,
    "EncodingError U+98E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98E1");
    },
    Error,
    "EncodingError U+98E1",
  );
  r = r && ([...ms932Encoder.encode("飢")].join(",") === "139,81"); // U+98E2
  assertThrows(
    () => {
      ms932Encoder.encode("\u98E3");
    },
    Error,
    "EncodingError U+98E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98E4");
    },
    Error,
    "EncodingError U+98E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98E5");
    },
    Error,
    "EncodingError U+98E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98E6");
    },
    Error,
    "EncodingError U+98E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98E7");
    },
    Error,
    "EncodingError U+98E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98E8");
    },
    Error,
    "EncodingError U+98E8",
  );
  r = r && ([...ms932Encoder.encode("飩")].join(",") === "233,74"); // U+98E9
  assertThrows(
    () => {
      ms932Encoder.encode("\u98EA");
    },
    Error,
    "EncodingError U+98EA",
  );
  r = r && ([...ms932Encoder.encode("飫")].join(",") === "233,75"); // U+98EB
  assertThrows(
    () => {
      ms932Encoder.encode("\u98EC");
    },
    Error,
    "EncodingError U+98EC",
  );
  r = r &&
    ([...ms932Encoder.encode("飭飮飯")].join(",") === "153,170,159,90,148,209"); // U+98ED
  assertThrows(
    () => {
      ms932Encoder.encode("\u98F0");
    },
    Error,
    "EncodingError U+98F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98F1");
    },
    Error,
    "EncodingError U+98F1",
  );
  r = r && ([...ms932Encoder.encode("飲")].join(",") === "136,249"); // U+98F2
  assertThrows(
    () => {
      ms932Encoder.encode("\u98F3");
    },
    Error,
    "EncodingError U+98F3",
  );
  r = r && ([...ms932Encoder.encode("飴")].join(",") === "136,185"); // U+98F4
  assertThrows(
    () => {
      ms932Encoder.encode("\u98F5");
    },
    Error,
    "EncodingError U+98F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98F6");
    },
    Error,
    "EncodingError U+98F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98F7");
    },
    Error,
    "EncodingError U+98F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98F8");
    },
    Error,
    "EncodingError U+98F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98F9");
    },
    Error,
    "EncodingError U+98F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98FA");
    },
    Error,
    "EncodingError U+98FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u98FB");
    },
    Error,
    "EncodingError U+98FB",
  );
  r = r &&
    ([...ms932Encoder.encode("飼飽飾")].join(",") === "142,148,150,79,143,252"); // U+98FC
  assertThrows(
    () => {
      ms932Encoder.encode("\u98FF");
    },
    Error,
    "EncodingError U+98FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9900");
    },
    Error,
    "EncodingError U+9900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9901");
    },
    Error,
    "EncodingError U+9901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9902");
    },
    Error,
    "EncodingError U+9902",
  );
  r = r && ([...ms932Encoder.encode("餃")].join(",") === "233,76"); // U+9903
  assertThrows(
    () => {
      ms932Encoder.encode("\u9904");
    },
    Error,
    "EncodingError U+9904",
  );
  r = r && ([...ms932Encoder.encode("餅")].join(",") === "150,221"); // U+9905
  assertThrows(
    () => {
      ms932Encoder.encode("\u9906");
    },
    Error,
    "EncodingError U+9906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9907");
    },
    Error,
    "EncodingError U+9907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9908");
    },
    Error,
    "EncodingError U+9908",
  );
  r = r && ([...ms932Encoder.encode("餉養")].join(",") === "233,77,151,123"); // U+9909
  assertThrows(
    () => {
      ms932Encoder.encode("\u990B");
    },
    Error,
    "EncodingError U+990B",
  );
  r = r && ([...ms932Encoder.encode("餌")].join(",") === "137,97"); // U+990C
  assertThrows(
    () => {
      ms932Encoder.encode("\u990D");
    },
    Error,
    "EncodingError U+990D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u990E");
    },
    Error,
    "EncodingError U+990E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u990F");
    },
    Error,
    "EncodingError U+990F",
  );
  r = r && ([...ms932Encoder.encode("餐")].join(",") === "142,96"); // U+9910
  assertThrows(
    () => {
      ms932Encoder.encode("\u9911");
    },
    Error,
    "EncodingError U+9911",
  );
  r = r &&
    ([...ms932Encoder.encode("餒餓餔")].join(",") === "233,78,137,236,233,79"); // U+9912
  assertThrows(
    () => {
      ms932Encoder.encode("\u9915");
    },
    Error,
    "EncodingError U+9915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9916");
    },
    Error,
    "EncodingError U+9916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9917");
    },
    Error,
    "EncodingError U+9917",
  );
  r = r && ([...ms932Encoder.encode("餘")].join(",") === "233,80"); // U+9918
  assertThrows(
    () => {
      ms932Encoder.encode("\u9919");
    },
    Error,
    "EncodingError U+9919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u991A");
    },
    Error,
    "EncodingError U+991A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u991B");
    },
    Error,
    "EncodingError U+991B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u991C");
    },
    Error,
    "EncodingError U+991C",
  );
  r = r && ([...ms932Encoder.encode("餝餞")].join(",") === "233,82,233,83"); // U+991D
  assertThrows(
    () => {
      ms932Encoder.encode("\u991F");
    },
    Error,
    "EncodingError U+991F",
  );
  r = r && ([...ms932Encoder.encode("餠餡")].join(",") === "233,85,233,81"); // U+9920
  assertThrows(
    () => {
      ms932Encoder.encode("\u9922");
    },
    Error,
    "EncodingError U+9922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9923");
    },
    Error,
    "EncodingError U+9923",
  );
  r = r && ([...ms932Encoder.encode("餤")].join(",") === "233,84"); // U+9924
  assertThrows(
    () => {
      ms932Encoder.encode("\u9925");
    },
    Error,
    "EncodingError U+9925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9926");
    },
    Error,
    "EncodingError U+9926",
  );
  r = r && ([...ms932Encoder.encode("餧館")].join(",") === "251,248,138,217"); // U+9927
  assertThrows(
    () => {
      ms932Encoder.encode("\u9929");
    },
    Error,
    "EncodingError U+9929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u992A");
    },
    Error,
    "EncodingError U+992A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u992B");
    },
    Error,
    "EncodingError U+992B",
  );
  r = r && ([...ms932Encoder.encode("餬")].join(",") === "233,86"); // U+992C
  assertThrows(
    () => {
      ms932Encoder.encode("\u992D");
    },
    Error,
    "EncodingError U+992D",
  );
  r = r && ([...ms932Encoder.encode("餮")].join(",") === "233,87"); // U+992E
  assertThrows(
    () => {
      ms932Encoder.encode("\u992F");
    },
    Error,
    "EncodingError U+992F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9930");
    },
    Error,
    "EncodingError U+9930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9931");
    },
    Error,
    "EncodingError U+9931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9932");
    },
    Error,
    "EncodingError U+9932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9933");
    },
    Error,
    "EncodingError U+9933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9934");
    },
    Error,
    "EncodingError U+9934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9935");
    },
    Error,
    "EncodingError U+9935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9936");
    },
    Error,
    "EncodingError U+9936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9937");
    },
    Error,
    "EncodingError U+9937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9938");
    },
    Error,
    "EncodingError U+9938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9939");
    },
    Error,
    "EncodingError U+9939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u993A");
    },
    Error,
    "EncodingError U+993A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u993B");
    },
    Error,
    "EncodingError U+993B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u993C");
    },
    Error,
    "EncodingError U+993C",
  );
  r = r && ([...ms932Encoder.encode("餽餾")].join(",") === "233,88,233,89"); // U+993D
  assertThrows(
    () => {
      ms932Encoder.encode("\u993F");
    },
    Error,
    "EncodingError U+993F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9940");
    },
    Error,
    "EncodingError U+9940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9941");
    },
    Error,
    "EncodingError U+9941",
  );
  r = r && ([...ms932Encoder.encode("饂")].join(",") === "233,90"); // U+9942
  assertThrows(
    () => {
      ms932Encoder.encode("\u9943");
    },
    Error,
    "EncodingError U+9943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9944");
    },
    Error,
    "EncodingError U+9944",
  );
  r = r && ([...ms932Encoder.encode("饅")].join(",") === "233,92"); // U+9945
  assertThrows(
    () => {
      ms932Encoder.encode("\u9946");
    },
    Error,
    "EncodingError U+9946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9947");
    },
    Error,
    "EncodingError U+9947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9948");
    },
    Error,
    "EncodingError U+9948",
  );
  r = r && ([...ms932Encoder.encode("饉")].join(",") === "233,91"); // U+9949
  assertThrows(
    () => {
      ms932Encoder.encode("\u994A");
    },
    Error,
    "EncodingError U+994A",
  );
  r = r && ([...ms932Encoder.encode("饋饌")].join(",") === "233,94,233,97"); // U+994B
  assertThrows(
    () => {
      ms932Encoder.encode("\u994D");
    },
    Error,
    "EncodingError U+994D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u994E");
    },
    Error,
    "EncodingError U+994E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u994F");
    },
    Error,
    "EncodingError U+994F",
  );
  r = r &&
    ([...ms932Encoder.encode("饐饑饒")].join(",") === "233,93,233,95,233,96"); // U+9950
  assertThrows(
    () => {
      ms932Encoder.encode("\u9953");
    },
    Error,
    "EncodingError U+9953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9954");
    },
    Error,
    "EncodingError U+9954",
  );
  r = r && ([...ms932Encoder.encode("饕")].join(",") === "233,98"); // U+9955
  assertThrows(
    () => {
      ms932Encoder.encode("\u9956");
    },
    Error,
    "EncodingError U+9956",
  );
  r = r && ([...ms932Encoder.encode("饗")].join(",") === "139,192"); // U+9957
  assertThrows(
    () => {
      ms932Encoder.encode("\u9958");
    },
    Error,
    "EncodingError U+9958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9959");
    },
    Error,
    "EncodingError U+9959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u995A");
    },
    Error,
    "EncodingError U+995A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u995B");
    },
    Error,
    "EncodingError U+995B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u995C");
    },
    Error,
    "EncodingError U+995C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u995D");
    },
    Error,
    "EncodingError U+995D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u995E");
    },
    Error,
    "EncodingError U+995E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u995F");
    },
    Error,
    "EncodingError U+995F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9960");
    },
    Error,
    "EncodingError U+9960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9961");
    },
    Error,
    "EncodingError U+9961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9962");
    },
    Error,
    "EncodingError U+9962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9963");
    },
    Error,
    "EncodingError U+9963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9964");
    },
    Error,
    "EncodingError U+9964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9965");
    },
    Error,
    "EncodingError U+9965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9966");
    },
    Error,
    "EncodingError U+9966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9967");
    },
    Error,
    "EncodingError U+9967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9968");
    },
    Error,
    "EncodingError U+9968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9969");
    },
    Error,
    "EncodingError U+9969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u996A");
    },
    Error,
    "EncodingError U+996A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u996B");
    },
    Error,
    "EncodingError U+996B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u996C");
    },
    Error,
    "EncodingError U+996C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u996D");
    },
    Error,
    "EncodingError U+996D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u996E");
    },
    Error,
    "EncodingError U+996E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u996F");
    },
    Error,
    "EncodingError U+996F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9970");
    },
    Error,
    "EncodingError U+9970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9971");
    },
    Error,
    "EncodingError U+9971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9972");
    },
    Error,
    "EncodingError U+9972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9973");
    },
    Error,
    "EncodingError U+9973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9974");
    },
    Error,
    "EncodingError U+9974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9975");
    },
    Error,
    "EncodingError U+9975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9976");
    },
    Error,
    "EncodingError U+9976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9977");
    },
    Error,
    "EncodingError U+9977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9978");
    },
    Error,
    "EncodingError U+9978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9979");
    },
    Error,
    "EncodingError U+9979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u997A");
    },
    Error,
    "EncodingError U+997A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u997B");
    },
    Error,
    "EncodingError U+997B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u997C");
    },
    Error,
    "EncodingError U+997C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u997D");
    },
    Error,
    "EncodingError U+997D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u997E");
    },
    Error,
    "EncodingError U+997E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u997F");
    },
    Error,
    "EncodingError U+997F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9980");
    },
    Error,
    "EncodingError U+9980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9981");
    },
    Error,
    "EncodingError U+9981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9982");
    },
    Error,
    "EncodingError U+9982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9983");
    },
    Error,
    "EncodingError U+9983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9984");
    },
    Error,
    "EncodingError U+9984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9985");
    },
    Error,
    "EncodingError U+9985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9986");
    },
    Error,
    "EncodingError U+9986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9987");
    },
    Error,
    "EncodingError U+9987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9988");
    },
    Error,
    "EncodingError U+9988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9989");
    },
    Error,
    "EncodingError U+9989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u998A");
    },
    Error,
    "EncodingError U+998A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u998B");
    },
    Error,
    "EncodingError U+998B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u998C");
    },
    Error,
    "EncodingError U+998C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u998D");
    },
    Error,
    "EncodingError U+998D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u998E");
    },
    Error,
    "EncodingError U+998E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u998F");
    },
    Error,
    "EncodingError U+998F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9990");
    },
    Error,
    "EncodingError U+9990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9991");
    },
    Error,
    "EncodingError U+9991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9992");
    },
    Error,
    "EncodingError U+9992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9993");
    },
    Error,
    "EncodingError U+9993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9994");
    },
    Error,
    "EncodingError U+9994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9995");
    },
    Error,
    "EncodingError U+9995",
  );
  r = r &&
    ([...ms932Encoder.encode("首馗馘香")].join(",") ===
      "142,241,233,99,233,100,141,129"); // U+9996
  assertThrows(
    () => {
      ms932Encoder.encode("\u999A");
    },
    Error,
    "EncodingError U+999A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u999B");
    },
    Error,
    "EncodingError U+999B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u999C");
    },
    Error,
    "EncodingError U+999C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u999D");
    },
    Error,
    "EncodingError U+999D",
  );
  r = r && ([...ms932Encoder.encode("馞")].join(",") === "251,250"); // U+999E
  assertThrows(
    () => {
      ms932Encoder.encode("\u999F");
    },
    Error,
    "EncodingError U+999F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99A0");
    },
    Error,
    "EncodingError U+99A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99A1");
    },
    Error,
    "EncodingError U+99A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99A2");
    },
    Error,
    "EncodingError U+99A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99A3");
    },
    Error,
    "EncodingError U+99A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99A4");
    },
    Error,
    "EncodingError U+99A4",
  );
  r = r && ([...ms932Encoder.encode("馥")].join(",") === "233,101"); // U+99A5
  assertThrows(
    () => {
      ms932Encoder.encode("\u99A6");
    },
    Error,
    "EncodingError U+99A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99A7");
    },
    Error,
    "EncodingError U+99A7",
  );
  r = r && ([...ms932Encoder.encode("馨")].join(",") === "138,93"); // U+99A8
  assertThrows(
    () => {
      ms932Encoder.encode("\u99A9");
    },
    Error,
    "EncodingError U+99A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99AA");
    },
    Error,
    "EncodingError U+99AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99AB");
    },
    Error,
    "EncodingError U+99AB",
  );
  r = r &&
    ([...ms932Encoder.encode("馬馭馮")].join(",") === "148,110,233,102,233,103"); // U+99AC
  assertThrows(
    () => {
      ms932Encoder.encode("\u99AF");
    },
    Error,
    "EncodingError U+99AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99B0");
    },
    Error,
    "EncodingError U+99B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99B1");
    },
    Error,
    "EncodingError U+99B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99B2");
    },
    Error,
    "EncodingError U+99B2",
  );
  r = r && ([...ms932Encoder.encode("馳馴")].join(",") === "146,121,147,233"); // U+99B3
  assertThrows(
    () => {
      ms932Encoder.encode("\u99B5");
    },
    Error,
    "EncodingError U+99B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99B6");
    },
    Error,
    "EncodingError U+99B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99B7");
    },
    Error,
    "EncodingError U+99B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99B8");
    },
    Error,
    "EncodingError U+99B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99B9");
    },
    Error,
    "EncodingError U+99B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99BA");
    },
    Error,
    "EncodingError U+99BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99BB");
    },
    Error,
    "EncodingError U+99BB",
  );
  r = r && ([...ms932Encoder.encode("馼")].join(",") === "233,104"); // U+99BC
  assertThrows(
    () => {
      ms932Encoder.encode("\u99BD");
    },
    Error,
    "EncodingError U+99BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99BE");
    },
    Error,
    "EncodingError U+99BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99BF");
    },
    Error,
    "EncodingError U+99BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99C0");
    },
    Error,
    "EncodingError U+99C0",
  );
  r = r && ([...ms932Encoder.encode("駁")].join(",") === "148,157"); // U+99C1
  assertThrows(
    () => {
      ms932Encoder.encode("\u99C2");
    },
    Error,
    "EncodingError U+99C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99C3");
    },
    Error,
    "EncodingError U+99C3",
  );
  r = r &&
    ([...ms932Encoder.encode("駄駅駆")].join(",") === "145,202,137,119,139,236"); // U+99C4
  assertThrows(
    () => {
      ms932Encoder.encode("\u99C7");
    },
    Error,
    "EncodingError U+99C7",
  );
  r = r && ([...ms932Encoder.encode("駈")].join(",") === "139,237"); // U+99C8
  assertThrows(
    () => {
      ms932Encoder.encode("\u99C9");
    },
    Error,
    "EncodingError U+99C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99CA");
    },
    Error,
    "EncodingError U+99CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99CB");
    },
    Error,
    "EncodingError U+99CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99CC");
    },
    Error,
    "EncodingError U+99CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99CD");
    },
    Error,
    "EncodingError U+99CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99CE");
    },
    Error,
    "EncodingError U+99CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99CF");
    },
    Error,
    "EncodingError U+99CF",
  );
  r = r &&
    ([...ms932Encoder.encode("駐駑駒")].join(",") === "146,147,233,109,139,238"); // U+99D0
  assertThrows(
    () => {
      ms932Encoder.encode("\u99D3");
    },
    Error,
    "EncodingError U+99D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99D4");
    },
    Error,
    "EncodingError U+99D4",
  );
  r = r && ([...ms932Encoder.encode("駕")].join(",") === "137,237"); // U+99D5
  assertThrows(
    () => {
      ms932Encoder.encode("\u99D6");
    },
    Error,
    "EncodingError U+99D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99D7");
    },
    Error,
    "EncodingError U+99D7",
  );
  r = r && ([...ms932Encoder.encode("駘")].join(",") === "233,108"); // U+99D8
  assertThrows(
    () => {
      ms932Encoder.encode("\u99D9");
    },
    Error,
    "EncodingError U+99D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99DA");
    },
    Error,
    "EncodingError U+99DA",
  );
  r = r && ([...ms932Encoder.encode("駛")].join(",") === "233,106"); // U+99DB
  assertThrows(
    () => {
      ms932Encoder.encode("\u99DC");
    },
    Error,
    "EncodingError U+99DC",
  );
  r = r && ([...ms932Encoder.encode("駝")].join(",") === "233,107"); // U+99DD
  assertThrows(
    () => {
      ms932Encoder.encode("\u99DE");
    },
    Error,
    "EncodingError U+99DE",
  );
  r = r && ([...ms932Encoder.encode("駟")].join(",") === "233,105"); // U+99DF
  assertThrows(
    () => {
      ms932Encoder.encode("\u99E0");
    },
    Error,
    "EncodingError U+99E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99E1");
    },
    Error,
    "EncodingError U+99E1",
  );
  r = r && ([...ms932Encoder.encode("駢")].join(",") === "233,119"); // U+99E2
  assertThrows(
    () => {
      ms932Encoder.encode("\u99E3");
    },
    Error,
    "EncodingError U+99E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99E4");
    },
    Error,
    "EncodingError U+99E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99E5");
    },
    Error,
    "EncodingError U+99E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99E6");
    },
    Error,
    "EncodingError U+99E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99E7");
    },
    Error,
    "EncodingError U+99E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99E8");
    },
    Error,
    "EncodingError U+99E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99E9");
    },
    Error,
    "EncodingError U+99E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99EA");
    },
    Error,
    "EncodingError U+99EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99EB");
    },
    Error,
    "EncodingError U+99EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99EC");
    },
    Error,
    "EncodingError U+99EC",
  );
  r = r && ([...ms932Encoder.encode("駭駮")].join(",") === "233,110,233,111"); // U+99ED
  assertThrows(
    () => {
      ms932Encoder.encode("\u99EF");
    },
    Error,
    "EncodingError U+99EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99F0");
    },
    Error,
    "EncodingError U+99F0",
  );
  r = r && ([...ms932Encoder.encode("駱駲")].join(",") === "233,112,233,113"); // U+99F1
  assertThrows(
    () => {
      ms932Encoder.encode("\u99F3");
    },
    Error,
    "EncodingError U+99F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99F4");
    },
    Error,
    "EncodingError U+99F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99F5");
    },
    Error,
    "EncodingError U+99F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99F6");
    },
    Error,
    "EncodingError U+99F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99F7");
    },
    Error,
    "EncodingError U+99F7",
  );
  r = r && ([...ms932Encoder.encode("駸")].join(",") === "233,115"); // U+99F8
  assertThrows(
    () => {
      ms932Encoder.encode("\u99F9");
    },
    Error,
    "EncodingError U+99F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99FA");
    },
    Error,
    "EncodingError U+99FA",
  );
  r = r && ([...ms932Encoder.encode("駻")].join(",") === "233,114"); // U+99FB
  assertThrows(
    () => {
      ms932Encoder.encode("\u99FC");
    },
    Error,
    "EncodingError U+99FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99FD");
    },
    Error,
    "EncodingError U+99FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u99FE");
    },
    Error,
    "EncodingError U+99FE",
  );
  r = r && ([...ms932Encoder.encode("駿")].join(",") === "143,120"); // U+99FF
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A00");
    },
    Error,
    "EncodingError U+9A00",
  );
  r = r && ([...ms932Encoder.encode("騁")].join(",") === "233,116"); // U+9A01
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A02");
    },
    Error,
    "EncodingError U+9A02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A03");
    },
    Error,
    "EncodingError U+9A03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A04");
    },
    Error,
    "EncodingError U+9A04",
  );
  r = r && ([...ms932Encoder.encode("騅")].join(",") === "233,118"); // U+9A05
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A06");
    },
    Error,
    "EncodingError U+9A06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A07");
    },
    Error,
    "EncodingError U+9A07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A08");
    },
    Error,
    "EncodingError U+9A08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A09");
    },
    Error,
    "EncodingError U+9A09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A0A");
    },
    Error,
    "EncodingError U+9A0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A0B");
    },
    Error,
    "EncodingError U+9A0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A0C");
    },
    Error,
    "EncodingError U+9A0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A0D");
    },
    Error,
    "EncodingError U+9A0D",
  );
  r = r && ([...ms932Encoder.encode("騎騏")].join(",") === "139,82,233,117"); // U+9A0E
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A10");
    },
    Error,
    "EncodingError U+9A10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A11");
    },
    Error,
    "EncodingError U+9A11",
  );
  r = r && ([...ms932Encoder.encode("騒験")].join(",") === "145,155,140,177"); // U+9A12
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A14");
    },
    Error,
    "EncodingError U+9A14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A15");
    },
    Error,
    "EncodingError U+9A15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A16");
    },
    Error,
    "EncodingError U+9A16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A17");
    },
    Error,
    "EncodingError U+9A17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A18");
    },
    Error,
    "EncodingError U+9A18",
  );
  r = r && ([...ms932Encoder.encode("騙")].join(",") === "233,120"); // U+9A19
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A1A");
    },
    Error,
    "EncodingError U+9A1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A1B");
    },
    Error,
    "EncodingError U+9A1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A1C");
    },
    Error,
    "EncodingError U+9A1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A1D");
    },
    Error,
    "EncodingError U+9A1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A1E");
    },
    Error,
    "EncodingError U+9A1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A1F");
    },
    Error,
    "EncodingError U+9A1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A20");
    },
    Error,
    "EncodingError U+9A20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A21");
    },
    Error,
    "EncodingError U+9A21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A22");
    },
    Error,
    "EncodingError U+9A22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A23");
    },
    Error,
    "EncodingError U+9A23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A24");
    },
    Error,
    "EncodingError U+9A24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A25");
    },
    Error,
    "EncodingError U+9A25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A26");
    },
    Error,
    "EncodingError U+9A26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A27");
    },
    Error,
    "EncodingError U+9A27",
  );
  r = r && ([...ms932Encoder.encode("騨")].join(",") === "145,203"); // U+9A28
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A29");
    },
    Error,
    "EncodingError U+9A29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A2A");
    },
    Error,
    "EncodingError U+9A2A",
  );
  r = r && ([...ms932Encoder.encode("騫")].join(",") === "233,121"); // U+9A2B
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A2C");
    },
    Error,
    "EncodingError U+9A2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A2D");
    },
    Error,
    "EncodingError U+9A2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A2E");
    },
    Error,
    "EncodingError U+9A2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A2F");
    },
    Error,
    "EncodingError U+9A2F",
  );
  r = r && ([...ms932Encoder.encode("騰")].join(",") === "147,171"); // U+9A30
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A31");
    },
    Error,
    "EncodingError U+9A31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A32");
    },
    Error,
    "EncodingError U+9A32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A33");
    },
    Error,
    "EncodingError U+9A33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A34");
    },
    Error,
    "EncodingError U+9A34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A35");
    },
    Error,
    "EncodingError U+9A35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A36");
    },
    Error,
    "EncodingError U+9A36",
  );
  r = r && ([...ms932Encoder.encode("騷")].join(",") === "233,122"); // U+9A37
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A38");
    },
    Error,
    "EncodingError U+9A38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A39");
    },
    Error,
    "EncodingError U+9A39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A3A");
    },
    Error,
    "EncodingError U+9A3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A3B");
    },
    Error,
    "EncodingError U+9A3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A3C");
    },
    Error,
    "EncodingError U+9A3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A3D");
    },
    Error,
    "EncodingError U+9A3D",
  );
  r = r && ([...ms932Encoder.encode("騾")].join(",") === "233,128"); // U+9A3E
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A3F");
    },
    Error,
    "EncodingError U+9A3F",
  );
  r = r && ([...ms932Encoder.encode("驀")].join(",") === "233,125"); // U+9A40
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A41");
    },
    Error,
    "EncodingError U+9A41",
  );
  r = r && ([...ms932Encoder.encode("驂驃")].join(",") === "233,124,233,126"); // U+9A42
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A44");
    },
    Error,
    "EncodingError U+9A44",
  );
  r = r && ([...ms932Encoder.encode("驅")].join(",") === "233,123"); // U+9A45
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A46");
    },
    Error,
    "EncodingError U+9A46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A47");
    },
    Error,
    "EncodingError U+9A47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A48");
    },
    Error,
    "EncodingError U+9A48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A49");
    },
    Error,
    "EncodingError U+9A49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A4A");
    },
    Error,
    "EncodingError U+9A4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A4B");
    },
    Error,
    "EncodingError U+9A4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A4C");
    },
    Error,
    "EncodingError U+9A4C",
  );
  r = r && ([...ms932Encoder.encode("驍驎")].join(",") === "233,130,251,251"); // U+9A4D
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A4F");
    },
    Error,
    "EncodingError U+9A4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A50");
    },
    Error,
    "EncodingError U+9A50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A51");
    },
    Error,
    "EncodingError U+9A51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A52");
    },
    Error,
    "EncodingError U+9A52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A53");
    },
    Error,
    "EncodingError U+9A53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A54");
    },
    Error,
    "EncodingError U+9A54",
  );
  r = r && ([...ms932Encoder.encode("驕")].join(",") === "233,129"); // U+9A55
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A56");
    },
    Error,
    "EncodingError U+9A56",
  );
  r = r && ([...ms932Encoder.encode("驗")].join(",") === "233,132"); // U+9A57
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A58");
    },
    Error,
    "EncodingError U+9A58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A59");
    },
    Error,
    "EncodingError U+9A59",
  );
  r = r && ([...ms932Encoder.encode("驚驛")].join(",") === "139,193,233,131"); // U+9A5A
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A5C");
    },
    Error,
    "EncodingError U+9A5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A5D");
    },
    Error,
    "EncodingError U+9A5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A5E");
    },
    Error,
    "EncodingError U+9A5E",
  );
  r = r && ([...ms932Encoder.encode("驟")].join(",") === "233,133"); // U+9A5F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A60");
    },
    Error,
    "EncodingError U+9A60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A61");
    },
    Error,
    "EncodingError U+9A61",
  );
  r = r && ([...ms932Encoder.encode("驢")].join(",") === "233,134"); // U+9A62
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A63");
    },
    Error,
    "EncodingError U+9A63",
  );
  r = r && ([...ms932Encoder.encode("驤驥")].join(",") === "233,136,233,135"); // U+9A64
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A66");
    },
    Error,
    "EncodingError U+9A66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A67");
    },
    Error,
    "EncodingError U+9A67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A68");
    },
    Error,
    "EncodingError U+9A68",
  );
  r = r &&
    ([...ms932Encoder.encode("驩驪驫")].join(",") === "233,137,233,139,233,138"); // U+9A69
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A6C");
    },
    Error,
    "EncodingError U+9A6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A6D");
    },
    Error,
    "EncodingError U+9A6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A6E");
    },
    Error,
    "EncodingError U+9A6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A6F");
    },
    Error,
    "EncodingError U+9A6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A70");
    },
    Error,
    "EncodingError U+9A70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A71");
    },
    Error,
    "EncodingError U+9A71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A72");
    },
    Error,
    "EncodingError U+9A72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A73");
    },
    Error,
    "EncodingError U+9A73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A74");
    },
    Error,
    "EncodingError U+9A74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A75");
    },
    Error,
    "EncodingError U+9A75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A76");
    },
    Error,
    "EncodingError U+9A76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A77");
    },
    Error,
    "EncodingError U+9A77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A78");
    },
    Error,
    "EncodingError U+9A78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A79");
    },
    Error,
    "EncodingError U+9A79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A7A");
    },
    Error,
    "EncodingError U+9A7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A7B");
    },
    Error,
    "EncodingError U+9A7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A7C");
    },
    Error,
    "EncodingError U+9A7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A7D");
    },
    Error,
    "EncodingError U+9A7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A7E");
    },
    Error,
    "EncodingError U+9A7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A7F");
    },
    Error,
    "EncodingError U+9A7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A80");
    },
    Error,
    "EncodingError U+9A80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A81");
    },
    Error,
    "EncodingError U+9A81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A82");
    },
    Error,
    "EncodingError U+9A82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A83");
    },
    Error,
    "EncodingError U+9A83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A84");
    },
    Error,
    "EncodingError U+9A84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A85");
    },
    Error,
    "EncodingError U+9A85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A86");
    },
    Error,
    "EncodingError U+9A86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A87");
    },
    Error,
    "EncodingError U+9A87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A88");
    },
    Error,
    "EncodingError U+9A88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A89");
    },
    Error,
    "EncodingError U+9A89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A8A");
    },
    Error,
    "EncodingError U+9A8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A8B");
    },
    Error,
    "EncodingError U+9A8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A8C");
    },
    Error,
    "EncodingError U+9A8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A8D");
    },
    Error,
    "EncodingError U+9A8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A8E");
    },
    Error,
    "EncodingError U+9A8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A8F");
    },
    Error,
    "EncodingError U+9A8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A90");
    },
    Error,
    "EncodingError U+9A90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A91");
    },
    Error,
    "EncodingError U+9A91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A92");
    },
    Error,
    "EncodingError U+9A92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A93");
    },
    Error,
    "EncodingError U+9A93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A94");
    },
    Error,
    "EncodingError U+9A94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A95");
    },
    Error,
    "EncodingError U+9A95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A96");
    },
    Error,
    "EncodingError U+9A96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A97");
    },
    Error,
    "EncodingError U+9A97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A98");
    },
    Error,
    "EncodingError U+9A98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A99");
    },
    Error,
    "EncodingError U+9A99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A9A");
    },
    Error,
    "EncodingError U+9A9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A9B");
    },
    Error,
    "EncodingError U+9A9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A9C");
    },
    Error,
    "EncodingError U+9A9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A9D");
    },
    Error,
    "EncodingError U+9A9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A9E");
    },
    Error,
    "EncodingError U+9A9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9A9F");
    },
    Error,
    "EncodingError U+9A9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AA0");
    },
    Error,
    "EncodingError U+9AA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AA1");
    },
    Error,
    "EncodingError U+9AA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AA2");
    },
    Error,
    "EncodingError U+9AA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AA3");
    },
    Error,
    "EncodingError U+9AA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AA4");
    },
    Error,
    "EncodingError U+9AA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AA5");
    },
    Error,
    "EncodingError U+9AA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AA6");
    },
    Error,
    "EncodingError U+9AA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AA7");
    },
    Error,
    "EncodingError U+9AA7",
  );
  r = r && ([...ms932Encoder.encode("骨")].join(",") === "141,156"); // U+9AA8
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AA9");
    },
    Error,
    "EncodingError U+9AA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AAA");
    },
    Error,
    "EncodingError U+9AAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AAB");
    },
    Error,
    "EncodingError U+9AAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AAC");
    },
    Error,
    "EncodingError U+9AAC",
  );
  r = r && ([...ms932Encoder.encode("骭")].join(",") === "233,140"); // U+9AAD
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AAE");
    },
    Error,
    "EncodingError U+9AAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AAF");
    },
    Error,
    "EncodingError U+9AAF",
  );
  r = r && ([...ms932Encoder.encode("骰")].join(",") === "233,141"); // U+9AB0
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AB1");
    },
    Error,
    "EncodingError U+9AB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AB2");
    },
    Error,
    "EncodingError U+9AB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AB3");
    },
    Error,
    "EncodingError U+9AB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AB4");
    },
    Error,
    "EncodingError U+9AB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AB5");
    },
    Error,
    "EncodingError U+9AB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AB6");
    },
    Error,
    "EncodingError U+9AB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AB7");
    },
    Error,
    "EncodingError U+9AB7",
  );
  r = r && ([...ms932Encoder.encode("骸")].join(",") === "138,91"); // U+9AB8
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AB9");
    },
    Error,
    "EncodingError U+9AB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ABA");
    },
    Error,
    "EncodingError U+9ABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ABB");
    },
    Error,
    "EncodingError U+9ABB",
  );
  r = r && ([...ms932Encoder.encode("骼")].join(",") === "233,142"); // U+9ABC
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ABD");
    },
    Error,
    "EncodingError U+9ABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ABE");
    },
    Error,
    "EncodingError U+9ABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ABF");
    },
    Error,
    "EncodingError U+9ABF",
  );
  r = r && ([...ms932Encoder.encode("髀")].join(",") === "233,143"); // U+9AC0
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AC1");
    },
    Error,
    "EncodingError U+9AC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AC2");
    },
    Error,
    "EncodingError U+9AC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AC3");
    },
    Error,
    "EncodingError U+9AC3",
  );
  r = r && ([...ms932Encoder.encode("髄")].join(",") === "144,145"); // U+9AC4
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AC5");
    },
    Error,
    "EncodingError U+9AC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AC6");
    },
    Error,
    "EncodingError U+9AC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AC7");
    },
    Error,
    "EncodingError U+9AC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AC8");
    },
    Error,
    "EncodingError U+9AC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AC9");
    },
    Error,
    "EncodingError U+9AC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ACA");
    },
    Error,
    "EncodingError U+9ACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ACB");
    },
    Error,
    "EncodingError U+9ACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ACC");
    },
    Error,
    "EncodingError U+9ACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ACD");
    },
    Error,
    "EncodingError U+9ACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ACE");
    },
    Error,
    "EncodingError U+9ACE",
  );
  r = r && ([...ms932Encoder.encode("髏")].join(",") === "233,144"); // U+9ACF
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AD0");
    },
    Error,
    "EncodingError U+9AD0",
  );
  r = r && ([...ms932Encoder.encode("髑")].join(",") === "233,145"); // U+9AD1
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AD2");
    },
    Error,
    "EncodingError U+9AD2",
  );
  r = r && ([...ms932Encoder.encode("髓體")].join(",") === "233,146,233,147"); // U+9AD3
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AD5");
    },
    Error,
    "EncodingError U+9AD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AD6");
    },
    Error,
    "EncodingError U+9AD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AD7");
    },
    Error,
    "EncodingError U+9AD7",
  );
  r = r && ([...ms932Encoder.encode("高髙")].join(",") === "141,130,251,252"); // U+9AD8
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ADA");
    },
    Error,
    "EncodingError U+9ADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ADB");
    },
    Error,
    "EncodingError U+9ADB",
  );
  r = r && ([...ms932Encoder.encode("髜")].join(",") === "252,64"); // U+9ADC
  assertThrows(
    () => {
      ms932Encoder.encode("\u9ADD");
    },
    Error,
    "EncodingError U+9ADD",
  );
  r = r && ([...ms932Encoder.encode("髞髟")].join(",") === "233,148,233,149"); // U+9ADE
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AE0");
    },
    Error,
    "EncodingError U+9AE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AE1");
    },
    Error,
    "EncodingError U+9AE1",
  );
  r = r && ([...ms932Encoder.encode("髢髣")].join(",") === "233,150,233,151"); // U+9AE2
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AE4");
    },
    Error,
    "EncodingError U+9AE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AE5");
    },
    Error,
    "EncodingError U+9AE5",
  );
  r = r && ([...ms932Encoder.encode("髦")].join(",") === "233,152"); // U+9AE6
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AE7");
    },
    Error,
    "EncodingError U+9AE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AE8");
    },
    Error,
    "EncodingError U+9AE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AE9");
    },
    Error,
    "EncodingError U+9AE9",
  );
  r = r && ([...ms932Encoder.encode("髪髫")].join(",") === "148,175,233,154"); // U+9AEA
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AEC");
    },
    Error,
    "EncodingError U+9AEC",
  );
  r = r &&
    ([...ms932Encoder.encode("髭髮髯")].join(",") === "149,69,233,155,233,153"); // U+9AED
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AF0");
    },
    Error,
    "EncodingError U+9AF0",
  );
  r = r && ([...ms932Encoder.encode("髱")].join(",") === "233,157"); // U+9AF1
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AF2");
    },
    Error,
    "EncodingError U+9AF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AF3");
    },
    Error,
    "EncodingError U+9AF3",
  );
  r = r && ([...ms932Encoder.encode("髴")].join(",") === "233,156"); // U+9AF4
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AF5");
    },
    Error,
    "EncodingError U+9AF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AF6");
    },
    Error,
    "EncodingError U+9AF6",
  );
  r = r && ([...ms932Encoder.encode("髷")].join(",") === "233,158"); // U+9AF7
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AF8");
    },
    Error,
    "EncodingError U+9AF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AF9");
    },
    Error,
    "EncodingError U+9AF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AFA");
    },
    Error,
    "EncodingError U+9AFA",
  );
  r = r && ([...ms932Encoder.encode("髻")].join(",") === "233,159"); // U+9AFB
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AFC");
    },
    Error,
    "EncodingError U+9AFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AFD");
    },
    Error,
    "EncodingError U+9AFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AFE");
    },
    Error,
    "EncodingError U+9AFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9AFF");
    },
    Error,
    "EncodingError U+9AFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B00");
    },
    Error,
    "EncodingError U+9B00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B01");
    },
    Error,
    "EncodingError U+9B01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B02");
    },
    Error,
    "EncodingError U+9B02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B03");
    },
    Error,
    "EncodingError U+9B03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B04");
    },
    Error,
    "EncodingError U+9B04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B05");
    },
    Error,
    "EncodingError U+9B05",
  );
  r = r && ([...ms932Encoder.encode("鬆")].join(",") === "233,160"); // U+9B06
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B07");
    },
    Error,
    "EncodingError U+9B07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B08");
    },
    Error,
    "EncodingError U+9B08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B09");
    },
    Error,
    "EncodingError U+9B09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B0A");
    },
    Error,
    "EncodingError U+9B0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B0B");
    },
    Error,
    "EncodingError U+9B0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B0C");
    },
    Error,
    "EncodingError U+9B0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B0D");
    },
    Error,
    "EncodingError U+9B0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B0E");
    },
    Error,
    "EncodingError U+9B0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B0F");
    },
    Error,
    "EncodingError U+9B0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B10");
    },
    Error,
    "EncodingError U+9B10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B11");
    },
    Error,
    "EncodingError U+9B11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B12");
    },
    Error,
    "EncodingError U+9B12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B13");
    },
    Error,
    "EncodingError U+9B13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B14");
    },
    Error,
    "EncodingError U+9B14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B15");
    },
    Error,
    "EncodingError U+9B15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B16");
    },
    Error,
    "EncodingError U+9B16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B17");
    },
    Error,
    "EncodingError U+9B17",
  );
  r = r && ([...ms932Encoder.encode("鬘")].join(",") === "233,161"); // U+9B18
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B19");
    },
    Error,
    "EncodingError U+9B19",
  );
  r = r && ([...ms932Encoder.encode("鬚")].join(",") === "233,162"); // U+9B1A
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B1B");
    },
    Error,
    "EncodingError U+9B1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B1C");
    },
    Error,
    "EncodingError U+9B1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B1D");
    },
    Error,
    "EncodingError U+9B1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B1E");
    },
    Error,
    "EncodingError U+9B1E",
  );
  r = r && ([...ms932Encoder.encode("鬟")].join(",") === "233,163"); // U+9B1F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B20");
    },
    Error,
    "EncodingError U+9B20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B21");
    },
    Error,
    "EncodingError U+9B21",
  );
  r = r && ([...ms932Encoder.encode("鬢鬣")].join(",") === "233,164,233,165"); // U+9B22
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B24");
    },
    Error,
    "EncodingError U+9B24",
  );
  r = r && ([...ms932Encoder.encode("鬥")].join(",") === "233,166"); // U+9B25
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B26");
    },
    Error,
    "EncodingError U+9B26",
  );
  r = r &&
    ([...ms932Encoder.encode("鬧鬨鬩鬪")].join(",") ===
      "233,167,233,168,233,169,233,170"); // U+9B27
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B2B");
    },
    Error,
    "EncodingError U+9B2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B2C");
    },
    Error,
    "EncodingError U+9B2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B2D");
    },
    Error,
    "EncodingError U+9B2D",
  );
  r = r && ([...ms932Encoder.encode("鬮鬯")].join(",") === "233,171,233,172"); // U+9B2E
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B30");
    },
    Error,
    "EncodingError U+9B30",
  );
  r = r && ([...ms932Encoder.encode("鬱鬲")].join(",") === "159,84,233,173"); // U+9B31
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B33");
    },
    Error,
    "EncodingError U+9B33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B34");
    },
    Error,
    "EncodingError U+9B34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B35");
    },
    Error,
    "EncodingError U+9B35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B36");
    },
    Error,
    "EncodingError U+9B36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B37");
    },
    Error,
    "EncodingError U+9B37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B38");
    },
    Error,
    "EncodingError U+9B38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B39");
    },
    Error,
    "EncodingError U+9B39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B3A");
    },
    Error,
    "EncodingError U+9B3A",
  );
  r = r && ([...ms932Encoder.encode("鬻鬼")].join(",") === "226,246,139,83"); // U+9B3B
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B3D");
    },
    Error,
    "EncodingError U+9B3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B3E");
    },
    Error,
    "EncodingError U+9B3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B3F");
    },
    Error,
    "EncodingError U+9B3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B40");
    },
    Error,
    "EncodingError U+9B40",
  );
  r = r &&
    ([...ms932Encoder.encode("魁魂魃魄魅")].join(",") ===
      "138,64,141,176,233,175,233,174,150,163"); // U+9B41
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B46");
    },
    Error,
    "EncodingError U+9B46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B47");
    },
    Error,
    "EncodingError U+9B47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B48");
    },
    Error,
    "EncodingError U+9B48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B49");
    },
    Error,
    "EncodingError U+9B49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B4A");
    },
    Error,
    "EncodingError U+9B4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B4B");
    },
    Error,
    "EncodingError U+9B4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B4C");
    },
    Error,
    "EncodingError U+9B4C",
  );
  r = r &&
    ([...ms932Encoder.encode("魍魎魏")].join(",") === "233,177,233,178,233,176"); // U+9B4D
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B50");
    },
    Error,
    "EncodingError U+9B50",
  );
  r = r && ([...ms932Encoder.encode("魑")].join(",") === "233,179"); // U+9B51
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B52");
    },
    Error,
    "EncodingError U+9B52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B53");
    },
    Error,
    "EncodingError U+9B53",
  );
  r = r && ([...ms932Encoder.encode("魔")].join(",") === "150,130"); // U+9B54
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B55");
    },
    Error,
    "EncodingError U+9B55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B56");
    },
    Error,
    "EncodingError U+9B56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B57");
    },
    Error,
    "EncodingError U+9B57",
  );
  r = r && ([...ms932Encoder.encode("魘")].join(",") === "233,180"); // U+9B58
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B59");
    },
    Error,
    "EncodingError U+9B59",
  );
  r = r && ([...ms932Encoder.encode("魚")].join(",") === "139,155"); // U+9B5A
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B5B");
    },
    Error,
    "EncodingError U+9B5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B5C");
    },
    Error,
    "EncodingError U+9B5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B5D");
    },
    Error,
    "EncodingError U+9B5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B5E");
    },
    Error,
    "EncodingError U+9B5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B5F");
    },
    Error,
    "EncodingError U+9B5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B60");
    },
    Error,
    "EncodingError U+9B60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B61");
    },
    Error,
    "EncodingError U+9B61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B62");
    },
    Error,
    "EncodingError U+9B62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B63");
    },
    Error,
    "EncodingError U+9B63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B64");
    },
    Error,
    "EncodingError U+9B64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B65");
    },
    Error,
    "EncodingError U+9B65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B66");
    },
    Error,
    "EncodingError U+9B66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B67");
    },
    Error,
    "EncodingError U+9B67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B68");
    },
    Error,
    "EncodingError U+9B68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B69");
    },
    Error,
    "EncodingError U+9B69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B6A");
    },
    Error,
    "EncodingError U+9B6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B6B");
    },
    Error,
    "EncodingError U+9B6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B6C");
    },
    Error,
    "EncodingError U+9B6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B6D");
    },
    Error,
    "EncodingError U+9B6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B6E");
    },
    Error,
    "EncodingError U+9B6E",
  );
  r = r && ([...ms932Encoder.encode("魯")].join(",") === "152,68"); // U+9B6F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B70");
    },
    Error,
    "EncodingError U+9B70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B71");
    },
    Error,
    "EncodingError U+9B71",
  );
  r = r && ([...ms932Encoder.encode("魲")].join(",") === "252,66"); // U+9B72
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B73");
    },
    Error,
    "EncodingError U+9B73",
  );
  r = r && ([...ms932Encoder.encode("魴魵")].join(",") === "233,181,252,65"); // U+9B74
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B76");
    },
    Error,
    "EncodingError U+9B76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B77");
    },
    Error,
    "EncodingError U+9B77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B78");
    },
    Error,
    "EncodingError U+9B78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B79");
    },
    Error,
    "EncodingError U+9B79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B7A");
    },
    Error,
    "EncodingError U+9B7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B7B");
    },
    Error,
    "EncodingError U+9B7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B7C");
    },
    Error,
    "EncodingError U+9B7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B7D");
    },
    Error,
    "EncodingError U+9B7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B7E");
    },
    Error,
    "EncodingError U+9B7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B7F");
    },
    Error,
    "EncodingError U+9B7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B80");
    },
    Error,
    "EncodingError U+9B80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B81");
    },
    Error,
    "EncodingError U+9B81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B82");
    },
    Error,
    "EncodingError U+9B82",
  );
  r = r && ([...ms932Encoder.encode("鮃")].join(",") === "233,183"); // U+9B83
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B84");
    },
    Error,
    "EncodingError U+9B84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B85");
    },
    Error,
    "EncodingError U+9B85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B86");
    },
    Error,
    "EncodingError U+9B86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B87");
    },
    Error,
    "EncodingError U+9B87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B88");
    },
    Error,
    "EncodingError U+9B88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B89");
    },
    Error,
    "EncodingError U+9B89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B8A");
    },
    Error,
    "EncodingError U+9B8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B8B");
    },
    Error,
    "EncodingError U+9B8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B8C");
    },
    Error,
    "EncodingError U+9B8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B8D");
    },
    Error,
    "EncodingError U+9B8D",
  );
  r = r && ([...ms932Encoder.encode("鮎鮏")].join(",") === "136,188,252,67"); // U+9B8E
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B90");
    },
    Error,
    "EncodingError U+9B90",
  );
  r = r &&
    ([...ms932Encoder.encode("鮑鮒鮓")].join(",") === "233,184,149,169,233,182"); // U+9B91
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B94");
    },
    Error,
    "EncodingError U+9B94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B95");
    },
    Error,
    "EncodingError U+9B95",
  );
  r = r && ([...ms932Encoder.encode("鮖鮗")].join(",") === "233,185,233,186"); // U+9B96
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B98");
    },
    Error,
    "EncodingError U+9B98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B99");
    },
    Error,
    "EncodingError U+9B99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B9A");
    },
    Error,
    "EncodingError U+9B9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B9B");
    },
    Error,
    "EncodingError U+9B9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B9C");
    },
    Error,
    "EncodingError U+9B9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B9D");
    },
    Error,
    "EncodingError U+9B9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9B9E");
    },
    Error,
    "EncodingError U+9B9E",
  );
  r = r && ([...ms932Encoder.encode("鮟鮠")].join(",") === "233,187,233,188"); // U+9B9F
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BA1");
    },
    Error,
    "EncodingError U+9BA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BA2");
    },
    Error,
    "EncodingError U+9BA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BA3");
    },
    Error,
    "EncodingError U+9BA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BA4");
    },
    Error,
    "EncodingError U+9BA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BA5");
    },
    Error,
    "EncodingError U+9BA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BA6");
    },
    Error,
    "EncodingError U+9BA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BA7");
    },
    Error,
    "EncodingError U+9BA7",
  );
  r = r && ([...ms932Encoder.encode("鮨")].join(",") === "233,189"); // U+9BA8
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BA9");
    },
    Error,
    "EncodingError U+9BA9",
  );
  r = r && ([...ms932Encoder.encode("鮪鮫")].join(",") === "150,142,142,76"); // U+9BAA
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BAC");
    },
    Error,
    "EncodingError U+9BAC",
  );
  r = r && ([...ms932Encoder.encode("鮭鮮")].join(",") === "141,248,145,78"); // U+9BAD
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BAF");
    },
    Error,
    "EncodingError U+9BAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BB0");
    },
    Error,
    "EncodingError U+9BB0",
  );
  r = r && ([...ms932Encoder.encode("鮱")].join(",") === "252,68"); // U+9BB1
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BB2");
    },
    Error,
    "EncodingError U+9BB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BB3");
    },
    Error,
    "EncodingError U+9BB3",
  );
  r = r && ([...ms932Encoder.encode("鮴")].join(",") === "233,190"); // U+9BB4
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BB5");
    },
    Error,
    "EncodingError U+9BB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BB6");
    },
    Error,
    "EncodingError U+9BB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BB7");
    },
    Error,
    "EncodingError U+9BB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BB8");
    },
    Error,
    "EncodingError U+9BB8",
  );
  r = r && ([...ms932Encoder.encode("鮹")].join(",") === "233,193"); // U+9BB9
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BBA");
    },
    Error,
    "EncodingError U+9BBA",
  );
  r = r && ([...ms932Encoder.encode("鮻")].join(",") === "252,69"); // U+9BBB
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BBC");
    },
    Error,
    "EncodingError U+9BBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BBD");
    },
    Error,
    "EncodingError U+9BBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BBE");
    },
    Error,
    "EncodingError U+9BBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BBF");
    },
    Error,
    "EncodingError U+9BBF",
  );
  r = r && ([...ms932Encoder.encode("鯀")].join(",") === "233,191"); // U+9BC0
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BC1");
    },
    Error,
    "EncodingError U+9BC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BC2");
    },
    Error,
    "EncodingError U+9BC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BC3");
    },
    Error,
    "EncodingError U+9BC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BC4");
    },
    Error,
    "EncodingError U+9BC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BC5");
    },
    Error,
    "EncodingError U+9BC5",
  );
  r = r && ([...ms932Encoder.encode("鯆")].join(",") === "233,194"); // U+9BC6
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BC7");
    },
    Error,
    "EncodingError U+9BC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BC8");
    },
    Error,
    "EncodingError U+9BC8",
  );
  r = r && ([...ms932Encoder.encode("鯉鯊")].join(",") === "140,239,233,192"); // U+9BC9
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BCB");
    },
    Error,
    "EncodingError U+9BCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BCC");
    },
    Error,
    "EncodingError U+9BCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BCD");
    },
    Error,
    "EncodingError U+9BCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BCE");
    },
    Error,
    "EncodingError U+9BCE",
  );
  r = r && ([...ms932Encoder.encode("鯏")].join(",") === "233,195"); // U+9BCF
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BD0");
    },
    Error,
    "EncodingError U+9BD0",
  );
  r = r && ([...ms932Encoder.encode("鯑鯒")].join(",") === "233,196,233,197"); // U+9BD1
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BD3");
    },
    Error,
    "EncodingError U+9BD3",
  );
  r = r && ([...ms932Encoder.encode("鯔")].join(",") === "233,201"); // U+9BD4
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BD5");
    },
    Error,
    "EncodingError U+9BD5",
  );
  r = r && ([...ms932Encoder.encode("鯖")].join(",") === "142,73"); // U+9BD6
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BD7");
    },
    Error,
    "EncodingError U+9BD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BD8");
    },
    Error,
    "EncodingError U+9BD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BD9");
    },
    Error,
    "EncodingError U+9BD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BDA");
    },
    Error,
    "EncodingError U+9BDA",
  );
  r = r && ([...ms932Encoder.encode("鯛")].join(",") === "145,226"); // U+9BDB
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BDC");
    },
    Error,
    "EncodingError U+9BDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BDD");
    },
    Error,
    "EncodingError U+9BDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BDE");
    },
    Error,
    "EncodingError U+9BDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BDF");
    },
    Error,
    "EncodingError U+9BDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BE0");
    },
    Error,
    "EncodingError U+9BE0",
  );
  r = r &&
    ([...ms932Encoder.encode("鯡鯢鯣鯤")].join(",") ===
      "233,202,233,199,233,198,233,200"); // U+9BE1
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BE5");
    },
    Error,
    "EncodingError U+9BE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BE6");
    },
    Error,
    "EncodingError U+9BE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BE7");
    },
    Error,
    "EncodingError U+9BE7",
  );
  r = r && ([...ms932Encoder.encode("鯨")].join(",") === "140,126"); // U+9BE8
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BE9");
    },
    Error,
    "EncodingError U+9BE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BEA");
    },
    Error,
    "EncodingError U+9BEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BEB");
    },
    Error,
    "EncodingError U+9BEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BEC");
    },
    Error,
    "EncodingError U+9BEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BED");
    },
    Error,
    "EncodingError U+9BED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BEE");
    },
    Error,
    "EncodingError U+9BEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BEF");
    },
    Error,
    "EncodingError U+9BEF",
  );
  r = r &&
    ([...ms932Encoder.encode("鯰鯱鯲")].join(",") === "233,206,233,205,233,204"); // U+9BF0
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BF3");
    },
    Error,
    "EncodingError U+9BF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BF4");
    },
    Error,
    "EncodingError U+9BF4",
  );
  r = r && ([...ms932Encoder.encode("鯵")].join(",") === "136,177"); // U+9BF5
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BF6");
    },
    Error,
    "EncodingError U+9BF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BF7");
    },
    Error,
    "EncodingError U+9BF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BF8");
    },
    Error,
    "EncodingError U+9BF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BF9");
    },
    Error,
    "EncodingError U+9BF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BFA");
    },
    Error,
    "EncodingError U+9BFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BFB");
    },
    Error,
    "EncodingError U+9BFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BFC");
    },
    Error,
    "EncodingError U+9BFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BFD");
    },
    Error,
    "EncodingError U+9BFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BFE");
    },
    Error,
    "EncodingError U+9BFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u9BFF");
    },
    Error,
    "EncodingError U+9BFF",
  );

  assertStrictEquals(r, true);
});
