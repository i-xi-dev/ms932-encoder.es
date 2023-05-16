import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+7800-U+7BFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u7800");
    },
    Error,
    "EncodingError U+7800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7801");
    },
    Error,
    "EncodingError U+7801",
  );
  r = r && ([...ms932Encoder.encode("砂")].join(",") === "141,187"); // U+7802
  assertThrows(
    () => {
      ms932Encoder.encode("\u7803");
    },
    Error,
    "EncodingError U+7803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7804");
    },
    Error,
    "EncodingError U+7804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7805");
    },
    Error,
    "EncodingError U+7805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7806");
    },
    Error,
    "EncodingError U+7806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7807");
    },
    Error,
    "EncodingError U+7807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7808");
    },
    Error,
    "EncodingError U+7808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7809");
    },
    Error,
    "EncodingError U+7809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u780A");
    },
    Error,
    "EncodingError U+780A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u780B");
    },
    Error,
    "EncodingError U+780B",
  );
  r = r && ([...ms932Encoder.encode("砌")].join(",") === "225,228"); // U+780C
  assertThrows(
    () => {
      ms932Encoder.encode("\u780D");
    },
    Error,
    "EncodingError U+780D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u780E");
    },
    Error,
    "EncodingError U+780E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u780F");
    },
    Error,
    "EncodingError U+780F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7810");
    },
    Error,
    "EncodingError U+7810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7811");
    },
    Error,
    "EncodingError U+7811",
  );
  r = r && ([...ms932Encoder.encode("砒")].join(",") === "225,229"); // U+7812
  assertThrows(
    () => {
      ms932Encoder.encode("\u7813");
    },
    Error,
    "EncodingError U+7813",
  );
  r = r && ([...ms932Encoder.encode("研砕")].join(",") === "140,164,141,211"); // U+7814
  assertThrows(
    () => {
      ms932Encoder.encode("\u7816");
    },
    Error,
    "EncodingError U+7816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7817");
    },
    Error,
    "EncodingError U+7817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7818");
    },
    Error,
    "EncodingError U+7818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7819");
    },
    Error,
    "EncodingError U+7819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u781A");
    },
    Error,
    "EncodingError U+781A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u781B");
    },
    Error,
    "EncodingError U+781B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u781C");
    },
    Error,
    "EncodingError U+781C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u781D");
    },
    Error,
    "EncodingError U+781D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u781E");
    },
    Error,
    "EncodingError U+781E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u781F");
    },
    Error,
    "EncodingError U+781F",
  );
  r = r && ([...ms932Encoder.encode("砠砡")].join(",") === "225,231,251,120"); // U+7820
  assertThrows(
    () => {
      ms932Encoder.encode("\u7822");
    },
    Error,
    "EncodingError U+7822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7823");
    },
    Error,
    "EncodingError U+7823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7824");
    },
    Error,
    "EncodingError U+7824",
  );
  r = r &&
    ([...ms932Encoder.encode("砥砦砧")].join(",") === "147,117,141,212,139,109"); // U+7825
  assertThrows(
    () => {
      ms932Encoder.encode("\u7828");
    },
    Error,
    "EncodingError U+7828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7829");
    },
    Error,
    "EncodingError U+7829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u782A");
    },
    Error,
    "EncodingError U+782A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u782B");
    },
    Error,
    "EncodingError U+782B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u782C");
    },
    Error,
    "EncodingError U+782C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u782D");
    },
    Error,
    "EncodingError U+782D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u782E");
    },
    Error,
    "EncodingError U+782E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u782F");
    },
    Error,
    "EncodingError U+782F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7830");
    },
    Error,
    "EncodingError U+7830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7831");
    },
    Error,
    "EncodingError U+7831",
  );
  r = r && ([...ms932Encoder.encode("砲")].join(",") === "150,67"); // U+7832
  assertThrows(
    () => {
      ms932Encoder.encode("\u7833");
    },
    Error,
    "EncodingError U+7833",
  );
  r = r && ([...ms932Encoder.encode("破")].join(",") === "148,106"); // U+7834
  assertThrows(
    () => {
      ms932Encoder.encode("\u7835");
    },
    Error,
    "EncodingError U+7835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7836");
    },
    Error,
    "EncodingError U+7836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7837");
    },
    Error,
    "EncodingError U+7837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7838");
    },
    Error,
    "EncodingError U+7838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7839");
    },
    Error,
    "EncodingError U+7839",
  );
  r = r && ([...ms932Encoder.encode("砺")].join(",") === "147,118"); // U+783A
  assertThrows(
    () => {
      ms932Encoder.encode("\u783B");
    },
    Error,
    "EncodingError U+783B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u783C");
    },
    Error,
    "EncodingError U+783C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u783D");
    },
    Error,
    "EncodingError U+783D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u783E");
    },
    Error,
    "EncodingError U+783E",
  );
  r = r && ([...ms932Encoder.encode("砿")].join(",") === "141,123"); // U+783F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7840");
    },
    Error,
    "EncodingError U+7840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7841");
    },
    Error,
    "EncodingError U+7841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7842");
    },
    Error,
    "EncodingError U+7842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7843");
    },
    Error,
    "EncodingError U+7843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7844");
    },
    Error,
    "EncodingError U+7844",
  );
  r = r && ([...ms932Encoder.encode("硅")].join(",") === "225,233"); // U+7845
  assertThrows(
    () => {
      ms932Encoder.encode("\u7846");
    },
    Error,
    "EncodingError U+7846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7847");
    },
    Error,
    "EncodingError U+7847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7848");
    },
    Error,
    "EncodingError U+7848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7849");
    },
    Error,
    "EncodingError U+7849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u784A");
    },
    Error,
    "EncodingError U+784A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u784B");
    },
    Error,
    "EncodingError U+784B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u784C");
    },
    Error,
    "EncodingError U+784C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u784D");
    },
    Error,
    "EncodingError U+784D",
  );
  r = r && ([...ms932Encoder.encode("硎")].join(",") === "251,121"); // U+784E
  assertThrows(
    () => {
      ms932Encoder.encode("\u784F");
    },
    Error,
    "EncodingError U+784F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7850");
    },
    Error,
    "EncodingError U+7850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7851");
    },
    Error,
    "EncodingError U+7851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7852");
    },
    Error,
    "EncodingError U+7852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7853");
    },
    Error,
    "EncodingError U+7853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7854");
    },
    Error,
    "EncodingError U+7854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7855");
    },
    Error,
    "EncodingError U+7855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7856");
    },
    Error,
    "EncodingError U+7856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7857");
    },
    Error,
    "EncodingError U+7857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7858");
    },
    Error,
    "EncodingError U+7858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7859");
    },
    Error,
    "EncodingError U+7859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u785A");
    },
    Error,
    "EncodingError U+785A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u785B");
    },
    Error,
    "EncodingError U+785B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u785C");
    },
    Error,
    "EncodingError U+785C",
  );
  r = r && ([...ms932Encoder.encode("硝")].join(",") === "143,201"); // U+785D
  assertThrows(
    () => {
      ms932Encoder.encode("\u785E");
    },
    Error,
    "EncodingError U+785E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u785F");
    },
    Error,
    "EncodingError U+785F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7860");
    },
    Error,
    "EncodingError U+7860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7861");
    },
    Error,
    "EncodingError U+7861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7862");
    },
    Error,
    "EncodingError U+7862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7863");
    },
    Error,
    "EncodingError U+7863",
  );
  r = r && ([...ms932Encoder.encode("硤")].join(",") === "251,122"); // U+7864
  assertThrows(
    () => {
      ms932Encoder.encode("\u7865");
    },
    Error,
    "EncodingError U+7865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7866");
    },
    Error,
    "EncodingError U+7866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7867");
    },
    Error,
    "EncodingError U+7867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7868");
    },
    Error,
    "EncodingError U+7868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7869");
    },
    Error,
    "EncodingError U+7869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u786A");
    },
    Error,
    "EncodingError U+786A",
  );
  r = r && ([...ms932Encoder.encode("硫硬")].join(",") === "151,176,141,100"); // U+786B
  assertThrows(
    () => {
      ms932Encoder.encode("\u786D");
    },
    Error,
    "EncodingError U+786D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u786E");
    },
    Error,
    "EncodingError U+786E",
  );
  r = r && ([...ms932Encoder.encode("硯")].join(",") === "140,165"); // U+786F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7870");
    },
    Error,
    "EncodingError U+7870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7871");
    },
    Error,
    "EncodingError U+7871",
  );
  r = r && ([...ms932Encoder.encode("硲")].join(",") === "148,161"); // U+7872
  assertThrows(
    () => {
      ms932Encoder.encode("\u7873");
    },
    Error,
    "EncodingError U+7873",
  );
  r = r && ([...ms932Encoder.encode("硴")].join(",") === "225,235"); // U+7874
  assertThrows(
    () => {
      ms932Encoder.encode("\u7875");
    },
    Error,
    "EncodingError U+7875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7876");
    },
    Error,
    "EncodingError U+7876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7877");
    },
    Error,
    "EncodingError U+7877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7878");
    },
    Error,
    "EncodingError U+7878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7879");
    },
    Error,
    "EncodingError U+7879",
  );
  r = r && ([...ms932Encoder.encode("硺")].join(",") === "251,123"); // U+787A
  assertThrows(
    () => {
      ms932Encoder.encode("\u787B");
    },
    Error,
    "EncodingError U+787B",
  );
  r = r && ([...ms932Encoder.encode("硼")].join(",") === "225,237"); // U+787C
  assertThrows(
    () => {
      ms932Encoder.encode("\u787D");
    },
    Error,
    "EncodingError U+787D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u787E");
    },
    Error,
    "EncodingError U+787E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u787F");
    },
    Error,
    "EncodingError U+787F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7880");
    },
    Error,
    "EncodingError U+7880",
  );
  r = r && ([...ms932Encoder.encode("碁")].join(",") === "140,233"); // U+7881
  assertThrows(
    () => {
      ms932Encoder.encode("\u7882");
    },
    Error,
    "EncodingError U+7882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7883");
    },
    Error,
    "EncodingError U+7883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7884");
    },
    Error,
    "EncodingError U+7884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7885");
    },
    Error,
    "EncodingError U+7885",
  );
  r = r && ([...ms932Encoder.encode("碆碇")].join(",") === "225,236,146,244"); // U+7886
  assertThrows(
    () => {
      ms932Encoder.encode("\u7888");
    },
    Error,
    "EncodingError U+7888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7889");
    },
    Error,
    "EncodingError U+7889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u788A");
    },
    Error,
    "EncodingError U+788A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u788B");
    },
    Error,
    "EncodingError U+788B",
  );
  r = r &&
    ([...ms932Encoder.encode("碌碍碎")].join(",") === "225,239,138,86,225,234"); // U+788C
  assertThrows(
    () => {
      ms932Encoder.encode("\u788F");
    },
    Error,
    "EncodingError U+788F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7890");
    },
    Error,
    "EncodingError U+7890",
  );
  r = r && ([...ms932Encoder.encode("碑")].join(",") === "148,232"); // U+7891
  assertThrows(
    () => {
      ms932Encoder.encode("\u7892");
    },
    Error,
    "EncodingError U+7892",
  );
  r = r && ([...ms932Encoder.encode("碓")].join(",") === "137,79"); // U+7893
  assertThrows(
    () => {
      ms932Encoder.encode("\u7894");
    },
    Error,
    "EncodingError U+7894",
  );
  r = r && ([...ms932Encoder.encode("碕")].join(",") === "141,234"); // U+7895
  assertThrows(
    () => {
      ms932Encoder.encode("\u7896");
    },
    Error,
    "EncodingError U+7896",
  );
  r = r && ([...ms932Encoder.encode("碗")].join(",") === "152,113"); // U+7897
  assertThrows(
    () => {
      ms932Encoder.encode("\u7898");
    },
    Error,
    "EncodingError U+7898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7899");
    },
    Error,
    "EncodingError U+7899",
  );
  r = r && ([...ms932Encoder.encode("碚")].join(",") === "225,238"); // U+789A
  assertThrows(
    () => {
      ms932Encoder.encode("\u789B");
    },
    Error,
    "EncodingError U+789B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u789C");
    },
    Error,
    "EncodingError U+789C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u789D");
    },
    Error,
    "EncodingError U+789D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u789E");
    },
    Error,
    "EncodingError U+789E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u789F");
    },
    Error,
    "EncodingError U+789F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78A0");
    },
    Error,
    "EncodingError U+78A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78A1");
    },
    Error,
    "EncodingError U+78A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78A2");
    },
    Error,
    "EncodingError U+78A2",
  );
  r = r && ([...ms932Encoder.encode("碣")].join(",") === "225,240"); // U+78A3
  assertThrows(
    () => {
      ms932Encoder.encode("\u78A4");
    },
    Error,
    "EncodingError U+78A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78A5");
    },
    Error,
    "EncodingError U+78A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78A6");
    },
    Error,
    "EncodingError U+78A6",
  );
  r = r && ([...ms932Encoder.encode("碧")].join(",") === "149,201"); // U+78A7
  assertThrows(
    () => {
      ms932Encoder.encode("\u78A8");
    },
    Error,
    "EncodingError U+78A8",
  );
  r = r && ([...ms932Encoder.encode("碩碪")].join(",") === "144,215,225,242"); // U+78A9
  assertThrows(
    () => {
      ms932Encoder.encode("\u78AB");
    },
    Error,
    "EncodingError U+78AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78AC");
    },
    Error,
    "EncodingError U+78AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78AD");
    },
    Error,
    "EncodingError U+78AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78AE");
    },
    Error,
    "EncodingError U+78AE",
  );
  r = r && ([...ms932Encoder.encode("碯")].join(",") === "225,243"); // U+78AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u78B0");
    },
    Error,
    "EncodingError U+78B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78B1");
    },
    Error,
    "EncodingError U+78B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78B2");
    },
    Error,
    "EncodingError U+78B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78B3");
    },
    Error,
    "EncodingError U+78B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78B4");
    },
    Error,
    "EncodingError U+78B4",
  );
  r = r && ([...ms932Encoder.encode("碵")].join(",") === "225,241"); // U+78B5
  assertThrows(
    () => {
      ms932Encoder.encode("\u78B6");
    },
    Error,
    "EncodingError U+78B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78B7");
    },
    Error,
    "EncodingError U+78B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78B8");
    },
    Error,
    "EncodingError U+78B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78B9");
    },
    Error,
    "EncodingError U+78B9",
  );
  r = r && ([...ms932Encoder.encode("確")].join(",") === "138,109"); // U+78BA
  assertThrows(
    () => {
      ms932Encoder.encode("\u78BB");
    },
    Error,
    "EncodingError U+78BB",
  );
  r = r && ([...ms932Encoder.encode("碼")].join(",") === "225,249"); // U+78BC
  assertThrows(
    () => {
      ms932Encoder.encode("\u78BD");
    },
    Error,
    "EncodingError U+78BD",
  );
  r = r && ([...ms932Encoder.encode("碾")].join(",") === "225,248"); // U+78BE
  assertThrows(
    () => {
      ms932Encoder.encode("\u78BF");
    },
    Error,
    "EncodingError U+78BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78C0");
    },
    Error,
    "EncodingError U+78C0",
  );
  r = r && ([...ms932Encoder.encode("磁")].join(",") === "142,165"); // U+78C1
  assertThrows(
    () => {
      ms932Encoder.encode("\u78C2");
    },
    Error,
    "EncodingError U+78C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78C3");
    },
    Error,
    "EncodingError U+78C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78C4");
    },
    Error,
    "EncodingError U+78C4",
  );
  r = r && ([...ms932Encoder.encode("磅磆")].join(",") === "225,250,225,245"); // U+78C5
  assertThrows(
    () => {
      ms932Encoder.encode("\u78C7");
    },
    Error,
    "EncodingError U+78C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78C8");
    },
    Error,
    "EncodingError U+78C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78C9");
    },
    Error,
    "EncodingError U+78C9",
  );
  r = r && ([...ms932Encoder.encode("磊磋")].join(",") === "225,251,225,246"); // U+78CA
  assertThrows(
    () => {
      ms932Encoder.encode("\u78CC");
    },
    Error,
    "EncodingError U+78CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78CD");
    },
    Error,
    "EncodingError U+78CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78CE");
    },
    Error,
    "EncodingError U+78CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78CF");
    },
    Error,
    "EncodingError U+78CF",
  );
  r = r && ([...ms932Encoder.encode("磐磑")].join(",") === "148,214,225,244"); // U+78D0
  assertThrows(
    () => {
      ms932Encoder.encode("\u78D2");
    },
    Error,
    "EncodingError U+78D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78D3");
    },
    Error,
    "EncodingError U+78D3",
  );
  r = r && ([...ms932Encoder.encode("磔")].join(",") === "225,247"); // U+78D4
  assertThrows(
    () => {
      ms932Encoder.encode("\u78D5");
    },
    Error,
    "EncodingError U+78D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78D6");
    },
    Error,
    "EncodingError U+78D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78D7");
    },
    Error,
    "EncodingError U+78D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78D8");
    },
    Error,
    "EncodingError U+78D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78D9");
    },
    Error,
    "EncodingError U+78D9",
  );
  r = r && ([...ms932Encoder.encode("磚")].join(",") === "226,65"); // U+78DA
  assertThrows(
    () => {
      ms932Encoder.encode("\u78DB");
    },
    Error,
    "EncodingError U+78DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78DC");
    },
    Error,
    "EncodingError U+78DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78DD");
    },
    Error,
    "EncodingError U+78DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78DE");
    },
    Error,
    "EncodingError U+78DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78DF");
    },
    Error,
    "EncodingError U+78DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78E0");
    },
    Error,
    "EncodingError U+78E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78E1");
    },
    Error,
    "EncodingError U+78E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78E2");
    },
    Error,
    "EncodingError U+78E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78E3");
    },
    Error,
    "EncodingError U+78E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78E4");
    },
    Error,
    "EncodingError U+78E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78E5");
    },
    Error,
    "EncodingError U+78E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78E6");
    },
    Error,
    "EncodingError U+78E6",
  );
  r = r && ([...ms932Encoder.encode("磧磨")].join(",") === "226,64,150,129"); // U+78E7
  assertThrows(
    () => {
      ms932Encoder.encode("\u78E9");
    },
    Error,
    "EncodingError U+78E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78EA");
    },
    Error,
    "EncodingError U+78EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78EB");
    },
    Error,
    "EncodingError U+78EB",
  );
  r = r && ([...ms932Encoder.encode("磬")].join(",") === "225,252"); // U+78EC
  assertThrows(
    () => {
      ms932Encoder.encode("\u78ED");
    },
    Error,
    "EncodingError U+78ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78EE");
    },
    Error,
    "EncodingError U+78EE",
  );
  r = r && ([...ms932Encoder.encode("磯")].join(",") === "136,233"); // U+78EF
  assertThrows(
    () => {
      ms932Encoder.encode("\u78F0");
    },
    Error,
    "EncodingError U+78F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78F1");
    },
    Error,
    "EncodingError U+78F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78F2");
    },
    Error,
    "EncodingError U+78F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78F3");
    },
    Error,
    "EncodingError U+78F3",
  );
  r = r && ([...ms932Encoder.encode("磴")].join(",") === "226,67"); // U+78F4
  assertThrows(
    () => {
      ms932Encoder.encode("\u78F5");
    },
    Error,
    "EncodingError U+78F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78F6");
    },
    Error,
    "EncodingError U+78F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78F7");
    },
    Error,
    "EncodingError U+78F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78F8");
    },
    Error,
    "EncodingError U+78F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78F9");
    },
    Error,
    "EncodingError U+78F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78FA");
    },
    Error,
    "EncodingError U+78FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78FB");
    },
    Error,
    "EncodingError U+78FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78FC");
    },
    Error,
    "EncodingError U+78FC",
  );
  r = r && ([...ms932Encoder.encode("磽")].join(",") === "226,66"); // U+78FD
  assertThrows(
    () => {
      ms932Encoder.encode("\u78FE");
    },
    Error,
    "EncodingError U+78FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u78FF");
    },
    Error,
    "EncodingError U+78FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7900");
    },
    Error,
    "EncodingError U+7900",
  );
  r = r && ([...ms932Encoder.encode("礁")].join(",") === "143,202"); // U+7901
  assertThrows(
    () => {
      ms932Encoder.encode("\u7902");
    },
    Error,
    "EncodingError U+7902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7903");
    },
    Error,
    "EncodingError U+7903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7904");
    },
    Error,
    "EncodingError U+7904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7905");
    },
    Error,
    "EncodingError U+7905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7906");
    },
    Error,
    "EncodingError U+7906",
  );
  r = r && ([...ms932Encoder.encode("礇")].join(",") === "226,68"); // U+7907
  assertThrows(
    () => {
      ms932Encoder.encode("\u7908");
    },
    Error,
    "EncodingError U+7908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7909");
    },
    Error,
    "EncodingError U+7909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u790A");
    },
    Error,
    "EncodingError U+790A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u790B");
    },
    Error,
    "EncodingError U+790B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u790C");
    },
    Error,
    "EncodingError U+790C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u790D");
    },
    Error,
    "EncodingError U+790D",
  );
  r = r && ([...ms932Encoder.encode("礎")].join(",") === "145,98"); // U+790E
  assertThrows(
    () => {
      ms932Encoder.encode("\u790F");
    },
    Error,
    "EncodingError U+790F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7910");
    },
    Error,
    "EncodingError U+7910",
  );
  r = r && ([...ms932Encoder.encode("礑礒")].join(",") === "226,70,226,69"); // U+7911
  assertThrows(
    () => {
      ms932Encoder.encode("\u7913");
    },
    Error,
    "EncodingError U+7913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7914");
    },
    Error,
    "EncodingError U+7914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7915");
    },
    Error,
    "EncodingError U+7915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7916");
    },
    Error,
    "EncodingError U+7916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7917");
    },
    Error,
    "EncodingError U+7917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7918");
    },
    Error,
    "EncodingError U+7918",
  );
  r = r && ([...ms932Encoder.encode("礙")].join(",") === "226,71"); // U+7919
  assertThrows(
    () => {
      ms932Encoder.encode("\u791A");
    },
    Error,
    "EncodingError U+791A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u791B");
    },
    Error,
    "EncodingError U+791B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u791C");
    },
    Error,
    "EncodingError U+791C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u791D");
    },
    Error,
    "EncodingError U+791D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u791E");
    },
    Error,
    "EncodingError U+791E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u791F");
    },
    Error,
    "EncodingError U+791F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7920");
    },
    Error,
    "EncodingError U+7920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7921");
    },
    Error,
    "EncodingError U+7921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7922");
    },
    Error,
    "EncodingError U+7922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7923");
    },
    Error,
    "EncodingError U+7923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7924");
    },
    Error,
    "EncodingError U+7924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7925");
    },
    Error,
    "EncodingError U+7925",
  );
  r = r && ([...ms932Encoder.encode("礦")].join(",") === "225,230"); // U+7926
  assertThrows(
    () => {
      ms932Encoder.encode("\u7927");
    },
    Error,
    "EncodingError U+7927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7928");
    },
    Error,
    "EncodingError U+7928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7929");
    },
    Error,
    "EncodingError U+7929",
  );
  r = r &&
    ([...ms932Encoder.encode("礪礫礬")].join(",") === "225,232,226,73,226,72"); // U+792A
  assertThrows(
    () => {
      ms932Encoder.encode("\u792D");
    },
    Error,
    "EncodingError U+792D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u792E");
    },
    Error,
    "EncodingError U+792E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u792F");
    },
    Error,
    "EncodingError U+792F",
  );
  r = r && ([...ms932Encoder.encode("礰")].join(",") === "251,124"); // U+7930
  assertThrows(
    () => {
      ms932Encoder.encode("\u7931");
    },
    Error,
    "EncodingError U+7931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7932");
    },
    Error,
    "EncodingError U+7932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7933");
    },
    Error,
    "EncodingError U+7933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7934");
    },
    Error,
    "EncodingError U+7934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7935");
    },
    Error,
    "EncodingError U+7935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7936");
    },
    Error,
    "EncodingError U+7936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7937");
    },
    Error,
    "EncodingError U+7937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7938");
    },
    Error,
    "EncodingError U+7938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7939");
    },
    Error,
    "EncodingError U+7939",
  );
  r = r && ([...ms932Encoder.encode("示")].join(",") === "142,166"); // U+793A
  assertThrows(
    () => {
      ms932Encoder.encode("\u793B");
    },
    Error,
    "EncodingError U+793B",
  );
  r = r && ([...ms932Encoder.encode("礼")].join(",") === "151,231"); // U+793C
  assertThrows(
    () => {
      ms932Encoder.encode("\u793D");
    },
    Error,
    "EncodingError U+793D",
  );
  r = r && ([...ms932Encoder.encode("社")].join(",") === "142,208"); // U+793E
  assertThrows(
    () => {
      ms932Encoder.encode("\u793F");
    },
    Error,
    "EncodingError U+793F",
  );
  r = r && ([...ms932Encoder.encode("祀祁")].join(",") === "226,74,140,86"); // U+7940
  assertThrows(
    () => {
      ms932Encoder.encode("\u7942");
    },
    Error,
    "EncodingError U+7942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7943");
    },
    Error,
    "EncodingError U+7943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7944");
    },
    Error,
    "EncodingError U+7944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7945");
    },
    Error,
    "EncodingError U+7945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7946");
    },
    Error,
    "EncodingError U+7946",
  );
  r = r &&
    ([...ms932Encoder.encode("祇祈祉")].join(",") === "139,95,139,70,142,131"); // U+7947
  assertThrows(
    () => {
      ms932Encoder.encode("\u794A");
    },
    Error,
    "EncodingError U+794A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u794B");
    },
    Error,
    "EncodingError U+794B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u794C");
    },
    Error,
    "EncodingError U+794C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u794D");
    },
    Error,
    "EncodingError U+794D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u794E");
    },
    Error,
    "EncodingError U+794E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u794F");
    },
    Error,
    "EncodingError U+794F",
  );
  r = r && ([...ms932Encoder.encode("祐")].join(",") === "151,83"); // U+7950
  assertThrows(
    () => {
      ms932Encoder.encode("\u7951");
    },
    Error,
    "EncodingError U+7951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7952");
    },
    Error,
    "EncodingError U+7952",
  );
  r = r && ([...ms932Encoder.encode("祓")].join(",") === "226,80"); // U+7953
  assertThrows(
    () => {
      ms932Encoder.encode("\u7954");
    },
    Error,
    "EncodingError U+7954",
  );
  r = r &&
    ([...ms932Encoder.encode("祕祖祗")].join(",") === "226,79,145,99,226,76"); // U+7955
  assertThrows(
    () => {
      ms932Encoder.encode("\u7958");
    },
    Error,
    "EncodingError U+7958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7959");
    },
    Error,
    "EncodingError U+7959",
  );
  r = r && ([...ms932Encoder.encode("祚")].join(",") === "226,78"); // U+795A
  assertThrows(
    () => {
      ms932Encoder.encode("\u795B");
    },
    Error,
    "EncodingError U+795B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u795C");
    },
    Error,
    "EncodingError U+795C",
  );
  r = r &&
    ([...ms932Encoder.encode("祝神祟祠")].join(",") ===
      "143,106,144,95,226,77,226,75"); // U+795D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7961");
    },
    Error,
    "EncodingError U+7961",
  );
  r = r && ([...ms932Encoder.encode("祢")].join(",") === "148,73"); // U+7962
  assertThrows(
    () => {
      ms932Encoder.encode("\u7963");
    },
    Error,
    "EncodingError U+7963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7964");
    },
    Error,
    "EncodingError U+7964",
  );
  r = r && ([...ms932Encoder.encode("祥")].join(",") === "143,203"); // U+7965
  assertThrows(
    () => {
      ms932Encoder.encode("\u7966");
    },
    Error,
    "EncodingError U+7966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7967");
    },
    Error,
    "EncodingError U+7967",
  );
  r = r && ([...ms932Encoder.encode("票")].join(",") === "149,91"); // U+7968
  assertThrows(
    () => {
      ms932Encoder.encode("\u7969");
    },
    Error,
    "EncodingError U+7969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u796A");
    },
    Error,
    "EncodingError U+796A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u796B");
    },
    Error,
    "EncodingError U+796B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u796C");
    },
    Error,
    "EncodingError U+796C",
  );
  r = r && ([...ms932Encoder.encode("祭")].join(",") === "141,213"); // U+796D
  assertThrows(
    () => {
      ms932Encoder.encode("\u796E");
    },
    Error,
    "EncodingError U+796E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u796F");
    },
    Error,
    "EncodingError U+796F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7970");
    },
    Error,
    "EncodingError U+7970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7971");
    },
    Error,
    "EncodingError U+7971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7972");
    },
    Error,
    "EncodingError U+7972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7973");
    },
    Error,
    "EncodingError U+7973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7974");
    },
    Error,
    "EncodingError U+7974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7975");
    },
    Error,
    "EncodingError U+7975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7976");
    },
    Error,
    "EncodingError U+7976",
  );
  r = r && ([...ms932Encoder.encode("祷")].join(",") === "147,152"); // U+7977
  assertThrows(
    () => {
      ms932Encoder.encode("\u7978");
    },
    Error,
    "EncodingError U+7978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7979");
    },
    Error,
    "EncodingError U+7979",
  );
  r = r && ([...ms932Encoder.encode("祺")].join(",") === "226,81"); // U+797A
  assertThrows(
    () => {
      ms932Encoder.encode("\u797B");
    },
    Error,
    "EncodingError U+797B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u797C");
    },
    Error,
    "EncodingError U+797C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u797D");
    },
    Error,
    "EncodingError U+797D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u797E");
    },
    Error,
    "EncodingError U+797E",
  );
  r = r &&
    ([...ms932Encoder.encode("祿禀禁")].join(",") === "226,82,226,104,139,214"); // U+797F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7982");
    },
    Error,
    "EncodingError U+7982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7983");
    },
    Error,
    "EncodingError U+7983",
  );
  r = r && ([...ms932Encoder.encode("禄禅")].join(",") === "152,92,145,84"); // U+7984
  assertThrows(
    () => {
      ms932Encoder.encode("\u7986");
    },
    Error,
    "EncodingError U+7986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7987");
    },
    Error,
    "EncodingError U+7987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7988");
    },
    Error,
    "EncodingError U+7988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7989");
    },
    Error,
    "EncodingError U+7989",
  );
  r = r && ([...ms932Encoder.encode("禊")].join(",") === "226,83"); // U+798A
  assertThrows(
    () => {
      ms932Encoder.encode("\u798B");
    },
    Error,
    "EncodingError U+798B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u798C");
    },
    Error,
    "EncodingError U+798C",
  );
  r = r &&
    ([...ms932Encoder.encode("禍禎福")].join(",") === "137,208,146,245,149,159"); // U+798D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7990");
    },
    Error,
    "EncodingError U+7990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7991");
    },
    Error,
    "EncodingError U+7991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7992");
    },
    Error,
    "EncodingError U+7992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7993");
    },
    Error,
    "EncodingError U+7993",
  );
  r = r && ([...ms932Encoder.encode("禔")].join(",") === "251,129"); // U+7994
  assertThrows(
    () => {
      ms932Encoder.encode("\u7995");
    },
    Error,
    "EncodingError U+7995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7996");
    },
    Error,
    "EncodingError U+7996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7997");
    },
    Error,
    "EncodingError U+7997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7998");
    },
    Error,
    "EncodingError U+7998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7999");
    },
    Error,
    "EncodingError U+7999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u799A");
    },
    Error,
    "EncodingError U+799A",
  );
  r = r && ([...ms932Encoder.encode("禛")].join(",") === "251,131"); // U+799B
  assertThrows(
    () => {
      ms932Encoder.encode("\u799C");
    },
    Error,
    "EncodingError U+799C",
  );
  r = r && ([...ms932Encoder.encode("禝")].join(",") === "226,84"); // U+799D
  assertThrows(
    () => {
      ms932Encoder.encode("\u799E");
    },
    Error,
    "EncodingError U+799E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u799F");
    },
    Error,
    "EncodingError U+799F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79A0");
    },
    Error,
    "EncodingError U+79A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79A1");
    },
    Error,
    "EncodingError U+79A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79A2");
    },
    Error,
    "EncodingError U+79A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79A3");
    },
    Error,
    "EncodingError U+79A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79A4");
    },
    Error,
    "EncodingError U+79A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79A5");
    },
    Error,
    "EncodingError U+79A5",
  );
  r = r && ([...ms932Encoder.encode("禦禧")].join(",") === "139,154,226,85"); // U+79A6
  assertThrows(
    () => {
      ms932Encoder.encode("\u79A8");
    },
    Error,
    "EncodingError U+79A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79A9");
    },
    Error,
    "EncodingError U+79A9",
  );
  r = r && ([...ms932Encoder.encode("禪")].join(",") === "226,87"); // U+79AA
  assertThrows(
    () => {
      ms932Encoder.encode("\u79AB");
    },
    Error,
    "EncodingError U+79AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79AC");
    },
    Error,
    "EncodingError U+79AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79AD");
    },
    Error,
    "EncodingError U+79AD",
  );
  r = r && ([...ms932Encoder.encode("禮")].join(",") === "226,88"); // U+79AE
  assertThrows(
    () => {
      ms932Encoder.encode("\u79AF");
    },
    Error,
    "EncodingError U+79AF",
  );
  r = r && ([...ms932Encoder.encode("禰")].join(",") === "148,72"); // U+79B0
  assertThrows(
    () => {
      ms932Encoder.encode("\u79B1");
    },
    Error,
    "EncodingError U+79B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79B2");
    },
    Error,
    "EncodingError U+79B2",
  );
  r = r && ([...ms932Encoder.encode("禳")].join(",") === "226,89"); // U+79B3
  assertThrows(
    () => {
      ms932Encoder.encode("\u79B4");
    },
    Error,
    "EncodingError U+79B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79B5");
    },
    Error,
    "EncodingError U+79B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79B6");
    },
    Error,
    "EncodingError U+79B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79B7");
    },
    Error,
    "EncodingError U+79B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79B8");
    },
    Error,
    "EncodingError U+79B8",
  );
  r = r && ([...ms932Encoder.encode("禹禺")].join(",") === "226,90,226,91"); // U+79B9
  assertThrows(
    () => {
      ms932Encoder.encode("\u79BB");
    },
    Error,
    "EncodingError U+79BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79BC");
    },
    Error,
    "EncodingError U+79BC",
  );
  r = r &&
    ([...ms932Encoder.encode("禽禾禿秀私")].join(",") ===
      "139,215,137,209,147,195,143,71,142,132"); // U+79BD
  assertThrows(
    () => {
      ms932Encoder.encode("\u79C2");
    },
    Error,
    "EncodingError U+79C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79C3");
    },
    Error,
    "EncodingError U+79C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79C4");
    },
    Error,
    "EncodingError U+79C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79C5");
    },
    Error,
    "EncodingError U+79C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79C6");
    },
    Error,
    "EncodingError U+79C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79C7");
    },
    Error,
    "EncodingError U+79C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79C8");
    },
    Error,
    "EncodingError U+79C8",
  );
  r = r && ([...ms932Encoder.encode("秉")].join(",") === "226,92"); // U+79C9
  assertThrows(
    () => {
      ms932Encoder.encode("\u79CA");
    },
    Error,
    "EncodingError U+79CA",
  );
  r = r && ([...ms932Encoder.encode("秋")].join(",") === "143,72"); // U+79CB
  assertThrows(
    () => {
      ms932Encoder.encode("\u79CC");
    },
    Error,
    "EncodingError U+79CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79CD");
    },
    Error,
    "EncodingError U+79CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79CE");
    },
    Error,
    "EncodingError U+79CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79CF");
    },
    Error,
    "EncodingError U+79CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79D0");
    },
    Error,
    "EncodingError U+79D0",
  );
  r = r && ([...ms932Encoder.encode("科秒")].join(",") === "137,200,149,98"); // U+79D1
  assertThrows(
    () => {
      ms932Encoder.encode("\u79D3");
    },
    Error,
    "EncodingError U+79D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79D4");
    },
    Error,
    "EncodingError U+79D4",
  );
  r = r && ([...ms932Encoder.encode("秕")].join(",") === "226,93"); // U+79D5
  assertThrows(
    () => {
      ms932Encoder.encode("\u79D6");
    },
    Error,
    "EncodingError U+79D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79D7");
    },
    Error,
    "EncodingError U+79D7",
  );
  r = r && ([...ms932Encoder.encode("秘")].join(",") === "148,233"); // U+79D8
  assertThrows(
    () => {
      ms932Encoder.encode("\u79D9");
    },
    Error,
    "EncodingError U+79D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79DA");
    },
    Error,
    "EncodingError U+79DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79DB");
    },
    Error,
    "EncodingError U+79DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79DC");
    },
    Error,
    "EncodingError U+79DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79DD");
    },
    Error,
    "EncodingError U+79DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79DE");
    },
    Error,
    "EncodingError U+79DE",
  );
  r = r && ([...ms932Encoder.encode("租")].join(",") === "145,100"); // U+79DF
  assertThrows(
    () => {
      ms932Encoder.encode("\u79E0");
    },
    Error,
    "EncodingError U+79E0",
  );
  r = r && ([...ms932Encoder.encode("秡")].join(",") === "226,96"); // U+79E1
  assertThrows(
    () => {
      ms932Encoder.encode("\u79E2");
    },
    Error,
    "EncodingError U+79E2",
  );
  r = r && ([...ms932Encoder.encode("秣秤")].join(",") === "226,97,148,137"); // U+79E3
  assertThrows(
    () => {
      ms932Encoder.encode("\u79E5");
    },
    Error,
    "EncodingError U+79E5",
  );
  r = r && ([...ms932Encoder.encode("秦秧")].join(",") === "144,96,226,94"); // U+79E6
  assertThrows(
    () => {
      ms932Encoder.encode("\u79E8");
    },
    Error,
    "EncodingError U+79E8",
  );
  r = r && ([...ms932Encoder.encode("秩")].join(",") === "146,129"); // U+79E9
  assertThrows(
    () => {
      ms932Encoder.encode("\u79EA");
    },
    Error,
    "EncodingError U+79EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79EB");
    },
    Error,
    "EncodingError U+79EB",
  );
  r = r && ([...ms932Encoder.encode("秬")].join(",") === "226,95"); // U+79EC
  assertThrows(
    () => {
      ms932Encoder.encode("\u79ED");
    },
    Error,
    "EncodingError U+79ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79EE");
    },
    Error,
    "EncodingError U+79EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79EF");
    },
    Error,
    "EncodingError U+79EF",
  );
  r = r && ([...ms932Encoder.encode("称")].join(",") === "143,204"); // U+79F0
  assertThrows(
    () => {
      ms932Encoder.encode("\u79F1");
    },
    Error,
    "EncodingError U+79F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79F2");
    },
    Error,
    "EncodingError U+79F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79F3");
    },
    Error,
    "EncodingError U+79F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79F4");
    },
    Error,
    "EncodingError U+79F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79F5");
    },
    Error,
    "EncodingError U+79F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79F6");
    },
    Error,
    "EncodingError U+79F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79F7");
    },
    Error,
    "EncodingError U+79F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79F8");
    },
    Error,
    "EncodingError U+79F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79F9");
    },
    Error,
    "EncodingError U+79F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79FA");
    },
    Error,
    "EncodingError U+79FA",
  );
  r = r && ([...ms932Encoder.encode("移")].join(",") === "136,218"); // U+79FB
  assertThrows(
    () => {
      ms932Encoder.encode("\u79FC");
    },
    Error,
    "EncodingError U+79FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79FD");
    },
    Error,
    "EncodingError U+79FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79FE");
    },
    Error,
    "EncodingError U+79FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u79FF");
    },
    Error,
    "EncodingError U+79FF",
  );
  r = r && ([...ms932Encoder.encode("稀")].join(",") === "139,72"); // U+7A00
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A01");
    },
    Error,
    "EncodingError U+7A01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A02");
    },
    Error,
    "EncodingError U+7A02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A03");
    },
    Error,
    "EncodingError U+7A03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A04");
    },
    Error,
    "EncodingError U+7A04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A05");
    },
    Error,
    "EncodingError U+7A05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A06");
    },
    Error,
    "EncodingError U+7A06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A07");
    },
    Error,
    "EncodingError U+7A07",
  );
  r = r && ([...ms932Encoder.encode("稈")].join(",") === "226,98"); // U+7A08
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A09");
    },
    Error,
    "EncodingError U+7A09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A0A");
    },
    Error,
    "EncodingError U+7A0A",
  );
  r = r && ([...ms932Encoder.encode("程")].join(",") === "146,246"); // U+7A0B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A0C");
    },
    Error,
    "EncodingError U+7A0C",
  );
  r = r && ([...ms932Encoder.encode("稍税")].join(",") === "226,99,144,197"); // U+7A0D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A0F");
    },
    Error,
    "EncodingError U+7A0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A10");
    },
    Error,
    "EncodingError U+7A10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A11");
    },
    Error,
    "EncodingError U+7A11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A12");
    },
    Error,
    "EncodingError U+7A12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A13");
    },
    Error,
    "EncodingError U+7A13",
  );
  r = r && ([...ms932Encoder.encode("稔")].join(",") === "150,171"); // U+7A14
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A15");
    },
    Error,
    "EncodingError U+7A15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A16");
    },
    Error,
    "EncodingError U+7A16",
  );
  r = r &&
    ([...ms932Encoder.encode("稗稘稙稚")].join(",") ===
      "149,66,226,100,226,101,146,116"); // U+7A17
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A1B");
    },
    Error,
    "EncodingError U+7A1B",
  );
  r = r && ([...ms932Encoder.encode("稜")].join(",") === "151,197"); // U+7A1C
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A1D");
    },
    Error,
    "EncodingError U+7A1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A1E");
    },
    Error,
    "EncodingError U+7A1E",
  );
  r = r && ([...ms932Encoder.encode("稟稠")].join(",") === "226,103,226,102"); // U+7A1F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A21");
    },
    Error,
    "EncodingError U+7A21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A22");
    },
    Error,
    "EncodingError U+7A22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A23");
    },
    Error,
    "EncodingError U+7A23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A24");
    },
    Error,
    "EncodingError U+7A24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A25");
    },
    Error,
    "EncodingError U+7A25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A26");
    },
    Error,
    "EncodingError U+7A26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A27");
    },
    Error,
    "EncodingError U+7A27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A28");
    },
    Error,
    "EncodingError U+7A28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A29");
    },
    Error,
    "EncodingError U+7A29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A2A");
    },
    Error,
    "EncodingError U+7A2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A2B");
    },
    Error,
    "EncodingError U+7A2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A2C");
    },
    Error,
    "EncodingError U+7A2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A2D");
    },
    Error,
    "EncodingError U+7A2D",
  );
  r = r && ([...ms932Encoder.encode("種")].join(",") === "142,237"); // U+7A2E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A2F");
    },
    Error,
    "EncodingError U+7A2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A30");
    },
    Error,
    "EncodingError U+7A30",
  );
  r = r && ([...ms932Encoder.encode("稱稲")].join(",") === "226,105,136,238"); // U+7A31
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A33");
    },
    Error,
    "EncodingError U+7A33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A34");
    },
    Error,
    "EncodingError U+7A34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A35");
    },
    Error,
    "EncodingError U+7A35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A36");
    },
    Error,
    "EncodingError U+7A36",
  );
  r = r && ([...ms932Encoder.encode("稷")].join(",") === "226,108"); // U+7A37
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A38");
    },
    Error,
    "EncodingError U+7A38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A39");
    },
    Error,
    "EncodingError U+7A39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A3A");
    },
    Error,
    "EncodingError U+7A3A",
  );
  r = r &&
    ([...ms932Encoder.encode("稻稼稽稾稿穀")].join(",") ===
      "226,106,137,210,140,109,226,107,141,101,141,146"); // U+7A3B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A41");
    },
    Error,
    "EncodingError U+7A41",
  );
  r = r && ([...ms932Encoder.encode("穂穃")].join(",") === "149,228,226,109"); // U+7A42
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A44");
    },
    Error,
    "EncodingError U+7A44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A45");
    },
    Error,
    "EncodingError U+7A45",
  );
  r = r && ([...ms932Encoder.encode("穆")].join(",") === "150,115"); // U+7A46
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A47");
    },
    Error,
    "EncodingError U+7A47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A48");
    },
    Error,
    "EncodingError U+7A48",
  );
  r = r && ([...ms932Encoder.encode("穉")].join(",") === "226,111"); // U+7A49
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A4A");
    },
    Error,
    "EncodingError U+7A4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A4B");
    },
    Error,
    "EncodingError U+7A4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A4C");
    },
    Error,
    "EncodingError U+7A4C",
  );
  r = r &&
    ([...ms932Encoder.encode("積穎穏穐")].join(",") ===
      "144,207,137,110,137,184,136,170"); // U+7A4D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A51");
    },
    Error,
    "EncodingError U+7A51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A52");
    },
    Error,
    "EncodingError U+7A52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A53");
    },
    Error,
    "EncodingError U+7A53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A54");
    },
    Error,
    "EncodingError U+7A54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A55");
    },
    Error,
    "EncodingError U+7A55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A56");
    },
    Error,
    "EncodingError U+7A56",
  );
  r = r && ([...ms932Encoder.encode("穗")].join(",") === "226,110"); // U+7A57
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A58");
    },
    Error,
    "EncodingError U+7A58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A59");
    },
    Error,
    "EncodingError U+7A59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A5A");
    },
    Error,
    "EncodingError U+7A5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A5B");
    },
    Error,
    "EncodingError U+7A5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A5C");
    },
    Error,
    "EncodingError U+7A5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A5D");
    },
    Error,
    "EncodingError U+7A5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A5E");
    },
    Error,
    "EncodingError U+7A5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A5F");
    },
    Error,
    "EncodingError U+7A5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A60");
    },
    Error,
    "EncodingError U+7A60",
  );
  r = r &&
    ([...ms932Encoder.encode("穡穢穣")].join(",") === "226,112,226,113,143,245"); // U+7A61
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A64");
    },
    Error,
    "EncodingError U+7A64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A65");
    },
    Error,
    "EncodingError U+7A65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A66");
    },
    Error,
    "EncodingError U+7A66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A67");
    },
    Error,
    "EncodingError U+7A67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A68");
    },
    Error,
    "EncodingError U+7A68",
  );
  r = r && ([...ms932Encoder.encode("穩")].join(",") === "226,114"); // U+7A69
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A6A");
    },
    Error,
    "EncodingError U+7A6A",
  );
  r = r && ([...ms932Encoder.encode("穫")].join(",") === "138,110"); // U+7A6B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A6C");
    },
    Error,
    "EncodingError U+7A6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A6D");
    },
    Error,
    "EncodingError U+7A6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A6E");
    },
    Error,
    "EncodingError U+7A6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A6F");
    },
    Error,
    "EncodingError U+7A6F",
  );
  r = r && ([...ms932Encoder.encode("穰")].join(",") === "226,116"); // U+7A70
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A71");
    },
    Error,
    "EncodingError U+7A71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A72");
    },
    Error,
    "EncodingError U+7A72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A73");
    },
    Error,
    "EncodingError U+7A73",
  );
  r = r && ([...ms932Encoder.encode("穴")].join(",") === "140,138"); // U+7A74
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A75");
    },
    Error,
    "EncodingError U+7A75",
  );
  r = r && ([...ms932Encoder.encode("究")].join(",") === "139,134"); // U+7A76
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A77");
    },
    Error,
    "EncodingError U+7A77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A78");
    },
    Error,
    "EncodingError U+7A78",
  );
  r = r && ([...ms932Encoder.encode("穹空")].join(",") === "226,117,139,243"); // U+7A79
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A7B");
    },
    Error,
    "EncodingError U+7A7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A7C");
    },
    Error,
    "EncodingError U+7A7C",
  );
  r = r && ([...ms932Encoder.encode("穽")].join(",") === "226,118"); // U+7A7D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A7E");
    },
    Error,
    "EncodingError U+7A7E",
  );
  r = r && ([...ms932Encoder.encode("穿")].join(",") === "144,250"); // U+7A7F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A80");
    },
    Error,
    "EncodingError U+7A80",
  );
  r = r && ([...ms932Encoder.encode("突")].join(",") === "147,203"); // U+7A81
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A82");
    },
    Error,
    "EncodingError U+7A82",
  );
  r = r && ([...ms932Encoder.encode("窃窄")].join(",") === "144,222,141,243"); // U+7A83
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A85");
    },
    Error,
    "EncodingError U+7A85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A86");
    },
    Error,
    "EncodingError U+7A86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A87");
    },
    Error,
    "EncodingError U+7A87",
  );
  r = r && ([...ms932Encoder.encode("窈")].join(",") === "226,119"); // U+7A88
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A89");
    },
    Error,
    "EncodingError U+7A89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A8A");
    },
    Error,
    "EncodingError U+7A8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A8B");
    },
    Error,
    "EncodingError U+7A8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A8C");
    },
    Error,
    "EncodingError U+7A8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A8D");
    },
    Error,
    "EncodingError U+7A8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A8E");
    },
    Error,
    "EncodingError U+7A8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A8F");
    },
    Error,
    "EncodingError U+7A8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A90");
    },
    Error,
    "EncodingError U+7A90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A91");
    },
    Error,
    "EncodingError U+7A91",
  );
  r = r && ([...ms932Encoder.encode("窒窓")].join(",") === "146,130,145,139"); // U+7A92
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A94");
    },
    Error,
    "EncodingError U+7A94",
  );
  r = r &&
    ([...ms932Encoder.encode("窕窖窗窘")].join(",") ===
      "226,121,226,123,226,120,226,122"); // U+7A95
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A99");
    },
    Error,
    "EncodingError U+7A99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A9A");
    },
    Error,
    "EncodingError U+7A9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A9B");
    },
    Error,
    "EncodingError U+7A9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A9C");
    },
    Error,
    "EncodingError U+7A9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A9D");
    },
    Error,
    "EncodingError U+7A9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7A9E");
    },
    Error,
    "EncodingError U+7A9E",
  );
  r = r && ([...ms932Encoder.encode("窟")].join(",") === "140,65"); // U+7A9F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AA0");
    },
    Error,
    "EncodingError U+7AA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AA1");
    },
    Error,
    "EncodingError U+7AA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AA2");
    },
    Error,
    "EncodingError U+7AA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AA3");
    },
    Error,
    "EncodingError U+7AA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AA4");
    },
    Error,
    "EncodingError U+7AA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AA5");
    },
    Error,
    "EncodingError U+7AA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AA6");
    },
    Error,
    "EncodingError U+7AA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AA7");
    },
    Error,
    "EncodingError U+7AA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AA8");
    },
    Error,
    "EncodingError U+7AA8",
  );
  r = r && ([...ms932Encoder.encode("窩窪")].join(",") === "226,124,140,69"); // U+7AA9
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AAB");
    },
    Error,
    "EncodingError U+7AAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AAC");
    },
    Error,
    "EncodingError U+7AAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AAD");
    },
    Error,
    "EncodingError U+7AAD",
  );
  r = r &&
    ([...ms932Encoder.encode("窮窯窰")].join(",") === "139,135,151,113,226,126"); // U+7AAE
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AB1");
    },
    Error,
    "EncodingError U+7AB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AB2");
    },
    Error,
    "EncodingError U+7AB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AB3");
    },
    Error,
    "EncodingError U+7AB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AB4");
    },
    Error,
    "EncodingError U+7AB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AB5");
    },
    Error,
    "EncodingError U+7AB5",
  );
  r = r && ([...ms932Encoder.encode("窶")].join(",") === "226,128"); // U+7AB6
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AB7");
    },
    Error,
    "EncodingError U+7AB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AB8");
    },
    Error,
    "EncodingError U+7AB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AB9");
    },
    Error,
    "EncodingError U+7AB9",
  );
  r = r && ([...ms932Encoder.encode("窺")].join(",") === "137,77"); // U+7ABA
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ABB");
    },
    Error,
    "EncodingError U+7ABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ABC");
    },
    Error,
    "EncodingError U+7ABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ABD");
    },
    Error,
    "EncodingError U+7ABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ABE");
    },
    Error,
    "EncodingError U+7ABE",
  );
  r = r && ([...ms932Encoder.encode("窿")].join(",") === "226,131"); // U+7ABF
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AC0");
    },
    Error,
    "EncodingError U+7AC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AC1");
    },
    Error,
    "EncodingError U+7AC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AC2");
    },
    Error,
    "EncodingError U+7AC2",
  );
  r = r &&
    ([...ms932Encoder.encode("竃竄竅")].join(",") === "138,150,226,130,226,129"); // U+7AC3
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AC6");
    },
    Error,
    "EncodingError U+7AC6",
  );
  r = r && ([...ms932Encoder.encode("竇竈")].join(",") === "226,133,226,125"); // U+7AC7
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AC9");
    },
    Error,
    "EncodingError U+7AC9",
  );
  r = r && ([...ms932Encoder.encode("竊立")].join(",") === "226,134,151,167"); // U+7ACA
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ACC");
    },
    Error,
    "EncodingError U+7ACC",
  );
  r = r && ([...ms932Encoder.encode("竍")].join(",") === "226,135"); // U+7ACD
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ACE");
    },
    Error,
    "EncodingError U+7ACE",
  );
  r = r && ([...ms932Encoder.encode("竏")].join(",") === "226,136"); // U+7ACF
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AD0");
    },
    Error,
    "EncodingError U+7AD0",
  );
  r = r &&
    ([...ms932Encoder.encode("竑竒竓")].join(",") === "251,132,154,242,226,138"); // U+7AD1
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AD4");
    },
    Error,
    "EncodingError U+7AD4",
  );
  r = r && ([...ms932Encoder.encode("竕")].join(",") === "226,137"); // U+7AD5
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AD6");
    },
    Error,
    "EncodingError U+7AD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AD7");
    },
    Error,
    "EncodingError U+7AD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AD8");
    },
    Error,
    "EncodingError U+7AD8",
  );
  r = r && ([...ms932Encoder.encode("站竚")].join(",") === "226,139,226,140"); // U+7AD9
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ADB");
    },
    Error,
    "EncodingError U+7ADB",
  );
  r = r && ([...ms932Encoder.encode("竜竝")].join(",") === "151,179,226,141"); // U+7ADC
  assertThrows(
    () => {
      ms932Encoder.encode("\u7ADE");
    },
    Error,
    "EncodingError U+7ADE",
  );
  r = r &&
    ([...ms932Encoder.encode("竟章竡竢竣")].join(",") ===
      "232,237,143,205,226,142,226,143,143,118"); // U+7ADF
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AE4");
    },
    Error,
    "EncodingError U+7AE4",
  );
  r = r &&
    ([...ms932Encoder.encode("童竦竧")].join(",") === "147,182,226,144,251,133"); // U+7AE5
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AE8");
    },
    Error,
    "EncodingError U+7AE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AE9");
    },
    Error,
    "EncodingError U+7AE9",
  );
  r = r && ([...ms932Encoder.encode("竪竫")].join(",") === "146,71,251,135"); // U+7AEA
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AEC");
    },
    Error,
    "EncodingError U+7AEC",
  );
  r = r && ([...ms932Encoder.encode("竭")].join(",") === "226,145"); // U+7AED
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AEE");
    },
    Error,
    "EncodingError U+7AEE",
  );
  r = r && ([...ms932Encoder.encode("端竰")].join(",") === "146,91,226,146"); // U+7AEF
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AF1");
    },
    Error,
    "EncodingError U+7AF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AF2");
    },
    Error,
    "EncodingError U+7AF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AF3");
    },
    Error,
    "EncodingError U+7AF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AF4");
    },
    Error,
    "EncodingError U+7AF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AF5");
    },
    Error,
    "EncodingError U+7AF5",
  );
  r = r && ([...ms932Encoder.encode("競")].join(",") === "139,163"); // U+7AF6
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AF7");
    },
    Error,
    "EncodingError U+7AF7",
  );
  r = r &&
    ([...ms932Encoder.encode("竸竹竺")].join(",") === "153,94,146,124,142,177"); // U+7AF8
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AFB");
    },
    Error,
    "EncodingError U+7AFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AFC");
    },
    Error,
    "EncodingError U+7AFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AFD");
    },
    Error,
    "EncodingError U+7AFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7AFE");
    },
    Error,
    "EncodingError U+7AFE",
  );
  r = r && ([...ms932Encoder.encode("竿")].join(",") === "138,198"); // U+7AFF
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B00");
    },
    Error,
    "EncodingError U+7B00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B01");
    },
    Error,
    "EncodingError U+7B01",
  );
  r = r && ([...ms932Encoder.encode("笂")].join(",") === "226,147"); // U+7B02
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B03");
    },
    Error,
    "EncodingError U+7B03",
  );
  r = r && ([...ms932Encoder.encode("笄")].join(",") === "226,160"); // U+7B04
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B05");
    },
    Error,
    "EncodingError U+7B05",
  );
  r = r && ([...ms932Encoder.encode("笆")].join(",") === "226,150"); // U+7B06
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B07");
    },
    Error,
    "EncodingError U+7B07",
  );
  r = r && ([...ms932Encoder.encode("笈")].join(",") === "139,136"); // U+7B08
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B09");
    },
    Error,
    "EncodingError U+7B09",
  );
  r = r && ([...ms932Encoder.encode("笊笋")].join(",") === "226,149,226,162"); // U+7B0A
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B0C");
    },
    Error,
    "EncodingError U+7B0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B0D");
    },
    Error,
    "EncodingError U+7B0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B0E");
    },
    Error,
    "EncodingError U+7B0E",
  );
  r = r && ([...ms932Encoder.encode("笏")].join(",") === "226,148"); // U+7B0F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B10");
    },
    Error,
    "EncodingError U+7B10",
  );
  r = r && ([...ms932Encoder.encode("笑")].join(",") === "143,206"); // U+7B11
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B12");
    },
    Error,
    "EncodingError U+7B12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B13");
    },
    Error,
    "EncodingError U+7B13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B14");
    },
    Error,
    "EncodingError U+7B14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B15");
    },
    Error,
    "EncodingError U+7B15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B16");
    },
    Error,
    "EncodingError U+7B16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B17");
    },
    Error,
    "EncodingError U+7B17",
  );
  r = r && ([...ms932Encoder.encode("笘笙")].join(",") === "226,152,226,153"); // U+7B18
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B1A");
    },
    Error,
    "EncodingError U+7B1A",
  );
  r = r && ([...ms932Encoder.encode("笛")].join(",") === "147,74"); // U+7B1B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B1C");
    },
    Error,
    "EncodingError U+7B1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B1D");
    },
    Error,
    "EncodingError U+7B1D",
  );
  r = r && ([...ms932Encoder.encode("笞")].join(",") === "226,154"); // U+7B1E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B1F");
    },
    Error,
    "EncodingError U+7B1F",
  );
  r = r && ([...ms932Encoder.encode("笠")].join(",") === "138,125"); // U+7B20
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B21");
    },
    Error,
    "EncodingError U+7B21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B22");
    },
    Error,
    "EncodingError U+7B22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B23");
    },
    Error,
    "EncodingError U+7B23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B24");
    },
    Error,
    "EncodingError U+7B24",
  );
  r = r && ([...ms932Encoder.encode("笥符")].join(",") === "144,121,149,132"); // U+7B25
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B27");
    },
    Error,
    "EncodingError U+7B27",
  );
  r = r && ([...ms932Encoder.encode("笨")].join(",") === "226,156"); // U+7B28
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B29");
    },
    Error,
    "EncodingError U+7B29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B2A");
    },
    Error,
    "EncodingError U+7B2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B2B");
    },
    Error,
    "EncodingError U+7B2B",
  );
  r = r && ([...ms932Encoder.encode("第")].join(",") === "145,230"); // U+7B2C
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B2D");
    },
    Error,
    "EncodingError U+7B2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B2E");
    },
    Error,
    "EncodingError U+7B2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B2F");
    },
    Error,
    "EncodingError U+7B2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B30");
    },
    Error,
    "EncodingError U+7B30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B31");
    },
    Error,
    "EncodingError U+7B31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B32");
    },
    Error,
    "EncodingError U+7B32",
  );
  r = r && ([...ms932Encoder.encode("笳")].join(",") === "226,151"); // U+7B33
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B34");
    },
    Error,
    "EncodingError U+7B34",
  );
  r = r && ([...ms932Encoder.encode("笵笶")].join(",") === "226,155,226,157"); // U+7B35
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B37");
    },
    Error,
    "EncodingError U+7B37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B38");
    },
    Error,
    "EncodingError U+7B38",
  );
  r = r && ([...ms932Encoder.encode("笹")].join(",") === "141,249"); // U+7B39
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B3A");
    },
    Error,
    "EncodingError U+7B3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B3B");
    },
    Error,
    "EncodingError U+7B3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B3C");
    },
    Error,
    "EncodingError U+7B3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B3D");
    },
    Error,
    "EncodingError U+7B3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B3E");
    },
    Error,
    "EncodingError U+7B3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B3F");
    },
    Error,
    "EncodingError U+7B3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B40");
    },
    Error,
    "EncodingError U+7B40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B41");
    },
    Error,
    "EncodingError U+7B41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B42");
    },
    Error,
    "EncodingError U+7B42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B43");
    },
    Error,
    "EncodingError U+7B43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B44");
    },
    Error,
    "EncodingError U+7B44",
  );
  r = r && ([...ms932Encoder.encode("筅筆")].join(",") === "226,164,149,77"); // U+7B45
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B47");
    },
    Error,
    "EncodingError U+7B47",
  );
  r = r && ([...ms932Encoder.encode("筈等")].join(",") === "148,164,147,153"); // U+7B48
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B4A");
    },
    Error,
    "EncodingError U+7B4A",
  );
  r = r &&
    ([...ms932Encoder.encode("筋筌筍")].join(",") === "139,216,226,163,226,161"); // U+7B4B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B4E");
    },
    Error,
    "EncodingError U+7B4E",
  );
  r = r &&
    ([...ms932Encoder.encode("筏筐筑筒")].join(",") ===
      "148,179,226,158,146,125,147,155"); // U+7B4F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B53");
    },
    Error,
    "EncodingError U+7B53",
  );
  r = r && ([...ms932Encoder.encode("答")].join(",") === "147,154"); // U+7B54
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B55");
    },
    Error,
    "EncodingError U+7B55",
  );
  r = r && ([...ms932Encoder.encode("策")].join(",") === "141,244"); // U+7B56
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B57");
    },
    Error,
    "EncodingError U+7B57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B58");
    },
    Error,
    "EncodingError U+7B58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B59");
    },
    Error,
    "EncodingError U+7B59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B5A");
    },
    Error,
    "EncodingError U+7B5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B5B");
    },
    Error,
    "EncodingError U+7B5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B5C");
    },
    Error,
    "EncodingError U+7B5C",
  );
  r = r && ([...ms932Encoder.encode("筝")].join(",") === "226,182"); // U+7B5D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B5E");
    },
    Error,
    "EncodingError U+7B5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B5F");
    },
    Error,
    "EncodingError U+7B5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B60");
    },
    Error,
    "EncodingError U+7B60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B61");
    },
    Error,
    "EncodingError U+7B61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B62");
    },
    Error,
    "EncodingError U+7B62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B63");
    },
    Error,
    "EncodingError U+7B63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B64");
    },
    Error,
    "EncodingError U+7B64",
  );
  r = r && ([...ms932Encoder.encode("筥")].join(",") === "226,166"); // U+7B65
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B66");
    },
    Error,
    "EncodingError U+7B66",
  );
  r = r && ([...ms932Encoder.encode("筧")].join(",") === "226,168"); // U+7B67
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B68");
    },
    Error,
    "EncodingError U+7B68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B69");
    },
    Error,
    "EncodingError U+7B69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B6A");
    },
    Error,
    "EncodingError U+7B6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B6B");
    },
    Error,
    "EncodingError U+7B6B",
  );
  r = r && ([...ms932Encoder.encode("筬")].join(",") === "226,171"); // U+7B6C
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B6D");
    },
    Error,
    "EncodingError U+7B6D",
  );
  r = r && ([...ms932Encoder.encode("筮")].join(",") === "226,172"); // U+7B6E
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B6F");
    },
    Error,
    "EncodingError U+7B6F",
  );
  r = r && ([...ms932Encoder.encode("筰筱")].join(",") === "226,169,226,170"); // U+7B70
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B72");
    },
    Error,
    "EncodingError U+7B72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B73");
    },
    Error,
    "EncodingError U+7B73",
  );
  r = r && ([...ms932Encoder.encode("筴筵")].join(",") === "226,167,226,165"); // U+7B74
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B76");
    },
    Error,
    "EncodingError U+7B76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B77");
    },
    Error,
    "EncodingError U+7B77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B78");
    },
    Error,
    "EncodingError U+7B78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B79");
    },
    Error,
    "EncodingError U+7B79",
  );
  r = r && ([...ms932Encoder.encode("筺")].join(",") === "226,159"); // U+7B7A
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B7B");
    },
    Error,
    "EncodingError U+7B7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B7C");
    },
    Error,
    "EncodingError U+7B7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B7D");
    },
    Error,
    "EncodingError U+7B7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B7E");
    },
    Error,
    "EncodingError U+7B7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B7F");
    },
    Error,
    "EncodingError U+7B7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B80");
    },
    Error,
    "EncodingError U+7B80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B81");
    },
    Error,
    "EncodingError U+7B81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B82");
    },
    Error,
    "EncodingError U+7B82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B83");
    },
    Error,
    "EncodingError U+7B83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B84");
    },
    Error,
    "EncodingError U+7B84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B85");
    },
    Error,
    "EncodingError U+7B85",
  );
  r = r && ([...ms932Encoder.encode("箆箇")].join(",") === "149,205,137,211"); // U+7B86
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B88");
    },
    Error,
    "EncodingError U+7B88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B89");
    },
    Error,
    "EncodingError U+7B89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B8A");
    },
    Error,
    "EncodingError U+7B8A",
  );
  r = r && ([...ms932Encoder.encode("箋")].join(",") === "226,179"); // U+7B8B
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B8C");
    },
    Error,
    "EncodingError U+7B8C",
  );
  r = r && ([...ms932Encoder.encode("箍")].join(",") === "226,176"); // U+7B8D
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B8E");
    },
    Error,
    "EncodingError U+7B8E",
  );
  r = r && ([...ms932Encoder.encode("箏")].join(",") === "226,181"); // U+7B8F
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B90");
    },
    Error,
    "EncodingError U+7B90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B91");
    },
    Error,
    "EncodingError U+7B91",
  );
  r = r && ([...ms932Encoder.encode("箒")].join(",") === "226,180"); // U+7B92
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B93");
    },
    Error,
    "EncodingError U+7B93",
  );
  r = r && ([...ms932Encoder.encode("箔箕")].join(",") === "148,147,150,165"); // U+7B94
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B96");
    },
    Error,
    "EncodingError U+7B96",
  );
  r = r &&
    ([...ms932Encoder.encode("算箘箙箚")].join(",") ===
      "142,90,226,174,226,183,226,178"); // U+7B97
  assertThrows(
    () => {
      ms932Encoder.encode("\u7B9B");
    },
    Error,
    "EncodingError U+7B9B",
  );
  r = r &&
    ([...ms932Encoder.encode("箜箝箞箟")].join(",") ===
      "226,177,226,173,251,136,226,175"); // U+7B9C
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BA0");
    },
    Error,
    "EncodingError U+7BA0",
  );
  r = r && ([...ms932Encoder.encode("管")].join(",") === "138,199"); // U+7BA1
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BA2");
    },
    Error,
    "EncodingError U+7BA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BA3");
    },
    Error,
    "EncodingError U+7BA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BA4");
    },
    Error,
    "EncodingError U+7BA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BA5");
    },
    Error,
    "EncodingError U+7BA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BA6");
    },
    Error,
    "EncodingError U+7BA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BA7");
    },
    Error,
    "EncodingError U+7BA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BA8");
    },
    Error,
    "EncodingError U+7BA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BA9");
    },
    Error,
    "EncodingError U+7BA9",
  );
  r = r && ([...ms932Encoder.encode("箪")].join(",") === "146,92"); // U+7BAA
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BAB");
    },
    Error,
    "EncodingError U+7BAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BAC");
    },
    Error,
    "EncodingError U+7BAC",
  );
  r = r && ([...ms932Encoder.encode("箭")].join(",") === "144,251"); // U+7BAD
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BAE");
    },
    Error,
    "EncodingError U+7BAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BAF");
    },
    Error,
    "EncodingError U+7BAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BB0");
    },
    Error,
    "EncodingError U+7BB0",
  );
  r = r && ([...ms932Encoder.encode("箱")].join(",") === "148,160"); // U+7BB1
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BB2");
    },
    Error,
    "EncodingError U+7BB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BB3");
    },
    Error,
    "EncodingError U+7BB3",
  );
  r = r && ([...ms932Encoder.encode("箴")].join(",") === "226,188"); // U+7BB4
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BB5");
    },
    Error,
    "EncodingError U+7BB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BB6");
    },
    Error,
    "EncodingError U+7BB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BB7");
    },
    Error,
    "EncodingError U+7BB7",
  );
  r = r && ([...ms932Encoder.encode("箸")].join(",") === "148,162"); // U+7BB8
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BB9");
    },
    Error,
    "EncodingError U+7BB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BBA");
    },
    Error,
    "EncodingError U+7BBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BBB");
    },
    Error,
    "EncodingError U+7BBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BBC");
    },
    Error,
    "EncodingError U+7BBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BBD");
    },
    Error,
    "EncodingError U+7BBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BBE");
    },
    Error,
    "EncodingError U+7BBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BBF");
    },
    Error,
    "EncodingError U+7BBF",
  );
  r = r && ([...ms932Encoder.encode("節篁")].join(",") === "144,223,226,185"); // U+7BC0
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BC2");
    },
    Error,
    "EncodingError U+7BC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BC3");
    },
    Error,
    "EncodingError U+7BC3",
  );
  r = r && ([...ms932Encoder.encode("範")].join(",") === "148,205"); // U+7BC4
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BC5");
    },
    Error,
    "EncodingError U+7BC5",
  );
  r = r && ([...ms932Encoder.encode("篆篇")].join(",") === "226,189,149,209"); // U+7BC6
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BC8");
    },
    Error,
    "EncodingError U+7BC8",
  );
  r = r && ([...ms932Encoder.encode("築")].join(",") === "146,122"); // U+7BC9
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BCA");
    },
    Error,
    "EncodingError U+7BCA",
  );
  r = r && ([...ms932Encoder.encode("篋篌")].join(",") === "226,184,226,186"); // U+7BCB
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BCD");
    },
    Error,
    "EncodingError U+7BCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BCE");
    },
    Error,
    "EncodingError U+7BCE",
  );
  r = r && ([...ms932Encoder.encode("篏")].join(",") === "226,187"); // U+7BCF
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BD0");
    },
    Error,
    "EncodingError U+7BD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BD1");
    },
    Error,
    "EncodingError U+7BD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BD2");
    },
    Error,
    "EncodingError U+7BD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BD3");
    },
    Error,
    "EncodingError U+7BD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BD4");
    },
    Error,
    "EncodingError U+7BD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BD5");
    },
    Error,
    "EncodingError U+7BD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BD6");
    },
    Error,
    "EncodingError U+7BD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BD7");
    },
    Error,
    "EncodingError U+7BD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BD8");
    },
    Error,
    "EncodingError U+7BD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BD9");
    },
    Error,
    "EncodingError U+7BD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BDA");
    },
    Error,
    "EncodingError U+7BDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BDB");
    },
    Error,
    "EncodingError U+7BDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BDC");
    },
    Error,
    "EncodingError U+7BDC",
  );
  r = r && ([...ms932Encoder.encode("篝")].join(",") === "226,190"); // U+7BDD
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BDE");
    },
    Error,
    "EncodingError U+7BDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BDF");
    },
    Error,
    "EncodingError U+7BDF",
  );
  r = r && ([...ms932Encoder.encode("篠")].join(",") === "142,194"); // U+7BE0
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BE1");
    },
    Error,
    "EncodingError U+7BE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BE2");
    },
    Error,
    "EncodingError U+7BE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BE3");
    },
    Error,
    "EncodingError U+7BE3",
  );
  r = r &&
    ([...ms932Encoder.encode("篤篥篦")].join(",") === "147,196,226,195,226,194"); // U+7BE4
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BE7");
    },
    Error,
    "EncodingError U+7BE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BE8");
    },
    Error,
    "EncodingError U+7BE8",
  );
  r = r && ([...ms932Encoder.encode("篩")].join(",") === "226,191"); // U+7BE9
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BEA");
    },
    Error,
    "EncodingError U+7BEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BEB");
    },
    Error,
    "EncodingError U+7BEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BEC");
    },
    Error,
    "EncodingError U+7BEC",
  );
  r = r && ([...ms932Encoder.encode("篭")].join(",") === "152,85"); // U+7BED
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BEE");
    },
    Error,
    "EncodingError U+7BEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BEF");
    },
    Error,
    "EncodingError U+7BEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BF0");
    },
    Error,
    "EncodingError U+7BF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BF1");
    },
    Error,
    "EncodingError U+7BF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BF2");
    },
    Error,
    "EncodingError U+7BF2",
  );
  r = r && ([...ms932Encoder.encode("篳")].join(",") === "226,200"); // U+7BF3
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BF4");
    },
    Error,
    "EncodingError U+7BF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BF5");
    },
    Error,
    "EncodingError U+7BF5",
  );
  r = r && ([...ms932Encoder.encode("篶篷")].join(",") === "226,204,226,201"); // U+7BF6
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BF8");
    },
    Error,
    "EncodingError U+7BF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BF9");
    },
    Error,
    "EncodingError U+7BF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BFA");
    },
    Error,
    "EncodingError U+7BFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BFB");
    },
    Error,
    "EncodingError U+7BFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BFC");
    },
    Error,
    "EncodingError U+7BFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BFD");
    },
    Error,
    "EncodingError U+7BFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BFE");
    },
    Error,
    "EncodingError U+7BFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u7BFF");
    },
    Error,
    "EncodingError U+7BFF",
  );

  assertStrictEquals(r, true);
});
