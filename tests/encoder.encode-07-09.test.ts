import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+6800-U+6BFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u6800");
    },
    Error,
    "encode-error: U+6800",
  );
  r = r &&
    ([...ms932Encoder.encode("栁栂栃栄")].join(",") ===
      "250,229,146,204,147,200,137,104"); // U+6801
  assertThrows(
    () => {
      ms932Encoder.encode("\u6805");
    },
    Error,
    "encode-error: U+6805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6806");
    },
    Error,
    "encode-error: U+6806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6807");
    },
    Error,
    "encode-error: U+6807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6808");
    },
    Error,
    "encode-error: U+6808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6809");
    },
    Error,
    "encode-error: U+6809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u680A");
    },
    Error,
    "encode-error: U+680A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u680B");
    },
    Error,
    "encode-error: U+680B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u680C");
    },
    Error,
    "encode-error: U+680C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u680D");
    },
    Error,
    "encode-error: U+680D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u680E");
    },
    Error,
    "encode-error: U+680E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u680F");
    },
    Error,
    "encode-error: U+680F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6810");
    },
    Error,
    "encode-error: U+6810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6811");
    },
    Error,
    "encode-error: U+6811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6812");
    },
    Error,
    "encode-error: U+6812",
  );
  r = r && ([...ms932Encoder.encode("栓")].join(",") === "144,240"); // U+6813
  assertThrows(
    () => {
      ms932Encoder.encode("\u6814");
    },
    Error,
    "encode-error: U+6814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6815");
    },
    Error,
    "encode-error: U+6815",
  );
  r = r && ([...ms932Encoder.encode("栖栗")].join(",") === "144,178,140,73"); // U+6816
  assertThrows(
    () => {
      ms932Encoder.encode("\u6818");
    },
    Error,
    "encode-error: U+6818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6819");
    },
    Error,
    "encode-error: U+6819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u681A");
    },
    Error,
    "encode-error: U+681A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u681B");
    },
    Error,
    "encode-error: U+681B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u681C");
    },
    Error,
    "encode-error: U+681C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u681D");
    },
    Error,
    "encode-error: U+681D",
  );
  r = r && ([...ms932Encoder.encode("栞")].join(",") === "158,120"); // U+681E
  assertThrows(
    () => {
      ms932Encoder.encode("\u681F");
    },
    Error,
    "encode-error: U+681F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6820");
    },
    Error,
    "encode-error: U+6820",
  );
  r = r && ([...ms932Encoder.encode("校栢")].join(",") === "141,90,138,156"); // U+6821
  assertThrows(
    () => {
      ms932Encoder.encode("\u6823");
    },
    Error,
    "encode-error: U+6823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6824");
    },
    Error,
    "encode-error: U+6824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6825");
    },
    Error,
    "encode-error: U+6825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6826");
    },
    Error,
    "encode-error: U+6826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6827");
    },
    Error,
    "encode-error: U+6827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6828");
    },
    Error,
    "encode-error: U+6828",
  );
  r = r &&
    ([...ms932Encoder.encode("栩株栫")].join(",") ===
      "158,122,138,148,158,129"); // U+6829
  assertThrows(
    () => {
      ms932Encoder.encode("\u682C");
    },
    Error,
    "encode-error: U+682C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u682D");
    },
    Error,
    "encode-error: U+682D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u682E");
    },
    Error,
    "encode-error: U+682E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u682F");
    },
    Error,
    "encode-error: U+682F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6830");
    },
    Error,
    "encode-error: U+6830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6831");
    },
    Error,
    "encode-error: U+6831",
  );
  r = r && ([...ms932Encoder.encode("栲")].join(",") === "158,125"); // U+6832
  assertThrows(
    () => {
      ms932Encoder.encode("\u6833");
    },
    Error,
    "encode-error: U+6833",
  );
  r = r && ([...ms932Encoder.encode("栴")].join(",") === "144,241"); // U+6834
  assertThrows(
    () => {
      ms932Encoder.encode("\u6835");
    },
    Error,
    "encode-error: U+6835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6836");
    },
    Error,
    "encode-error: U+6836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6837");
    },
    Error,
    "encode-error: U+6837",
  );
  r = r && ([...ms932Encoder.encode("核根")].join(",") === "138,106,141,170"); // U+6838
  assertThrows(
    () => {
      ms932Encoder.encode("\u683A");
    },
    Error,
    "encode-error: U+683A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u683B");
    },
    Error,
    "encode-error: U+683B",
  );
  r = r && ([...ms932Encoder.encode("格栽")].join(",") === "138,105,141,205"); // U+683C
  assertThrows(
    () => {
      ms932Encoder.encode("\u683E");
    },
    Error,
    "encode-error: U+683E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u683F");
    },
    Error,
    "encode-error: U+683F",
  );
  r = r &&
    ([...ms932Encoder.encode("桀桁桂桃桄")].join(",") ===
      "158,123,140,133,140,106,147,141,250,230"); // U+6840
  assertThrows(
    () => {
      ms932Encoder.encode("\u6845");
    },
    Error,
    "encode-error: U+6845",
  );
  r = r && ([...ms932Encoder.encode("框")].join(",") === "158,121"); // U+6846
  assertThrows(
    () => {
      ms932Encoder.encode("\u6847");
    },
    Error,
    "encode-error: U+6847",
  );
  r = r && ([...ms932Encoder.encode("案")].join(",") === "136,196"); // U+6848
  assertThrows(
    () => {
      ms932Encoder.encode("\u6849");
    },
    Error,
    "encode-error: U+6849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u684A");
    },
    Error,
    "encode-error: U+684A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u684B");
    },
    Error,
    "encode-error: U+684B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u684C");
    },
    Error,
    "encode-error: U+684C",
  );
  r = r && ([...ms932Encoder.encode("桍桎")].join(",") === "158,124,158,126"); // U+684D
  assertThrows(
    () => {
      ms932Encoder.encode("\u684F");
    },
    Error,
    "encode-error: U+684F",
  );
  r = r &&
    ([...ms932Encoder.encode("桐桑桒桓桔")].join(",") ===
      "139,203,140,75,250,227,138,186,139,106"); // U+6850
  assertThrows(
    () => {
      ms932Encoder.encode("\u6855");
    },
    Error,
    "encode-error: U+6855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6856");
    },
    Error,
    "encode-error: U+6856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6857");
    },
    Error,
    "encode-error: U+6857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6858");
    },
    Error,
    "encode-error: U+6858",
  );
  r = r && ([...ms932Encoder.encode("桙")].join(",") === "158,130"); // U+6859
  assertThrows(
    () => {
      ms932Encoder.encode("\u685A");
    },
    Error,
    "encode-error: U+685A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u685B");
    },
    Error,
    "encode-error: U+685B",
  );
  r = r && ([...ms932Encoder.encode("桜桝")].join(",") === "141,247,150,145"); // U+685C
  assertThrows(
    () => {
      ms932Encoder.encode("\u685E");
    },
    Error,
    "encode-error: U+685E",
  );
  r = r && ([...ms932Encoder.encode("桟")].join(",") === "142,86"); // U+685F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6860");
    },
    Error,
    "encode-error: U+6860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6861");
    },
    Error,
    "encode-error: U+6861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6862");
    },
    Error,
    "encode-error: U+6862",
  );
  r = r && ([...ms932Encoder.encode("档")].join(",") === "158,131"); // U+6863
  assertThrows(
    () => {
      ms932Encoder.encode("\u6864");
    },
    Error,
    "encode-error: U+6864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6865");
    },
    Error,
    "encode-error: U+6865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6866");
    },
    Error,
    "encode-error: U+6866",
  );
  r = r && ([...ms932Encoder.encode("桧")].join(",") === "149,79"); // U+6867
  assertThrows(
    () => {
      ms932Encoder.encode("\u6868");
    },
    Error,
    "encode-error: U+6868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6869");
    },
    Error,
    "encode-error: U+6869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u686A");
    },
    Error,
    "encode-error: U+686A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u686B");
    },
    Error,
    "encode-error: U+686B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u686C");
    },
    Error,
    "encode-error: U+686C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u686D");
    },
    Error,
    "encode-error: U+686D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u686E");
    },
    Error,
    "encode-error: U+686E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u686F");
    },
    Error,
    "encode-error: U+686F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6870");
    },
    Error,
    "encode-error: U+6870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6871");
    },
    Error,
    "encode-error: U+6871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6872");
    },
    Error,
    "encode-error: U+6872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6873");
    },
    Error,
    "encode-error: U+6873",
  );
  r = r && ([...ms932Encoder.encode("桴")].join(",") === "158,143"); // U+6874
  assertThrows(
    () => {
      ms932Encoder.encode("\u6875");
    },
    Error,
    "encode-error: U+6875",
  );
  r = r && ([...ms932Encoder.encode("桶桷")].join(",") === "137,177,158,132"); // U+6876
  assertThrows(
    () => {
      ms932Encoder.encode("\u6878");
    },
    Error,
    "encode-error: U+6878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6879");
    },
    Error,
    "encode-error: U+6879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u687A");
    },
    Error,
    "encode-error: U+687A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u687B");
    },
    Error,
    "encode-error: U+687B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u687C");
    },
    Error,
    "encode-error: U+687C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u687D");
    },
    Error,
    "encode-error: U+687D",
  );
  r = r && ([...ms932Encoder.encode("桾桿")].join(",") === "158,149,158,133"); // U+687E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6880");
    },
    Error,
    "encode-error: U+6880",
  );
  r = r && ([...ms932Encoder.encode("梁")].join(",") === "151,192"); // U+6881
  assertThrows(
    () => {
      ms932Encoder.encode("\u6882");
    },
    Error,
    "encode-error: U+6882",
  );
  r = r && ([...ms932Encoder.encode("梃")].join(",") === "158,140"); // U+6883
  assertThrows(
    () => {
      ms932Encoder.encode("\u6884");
    },
    Error,
    "encode-error: U+6884",
  );
  r = r && ([...ms932Encoder.encode("梅")].join(",") === "148,126"); // U+6885
  assertThrows(
    () => {
      ms932Encoder.encode("\u6886");
    },
    Error,
    "encode-error: U+6886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6887");
    },
    Error,
    "encode-error: U+6887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6888");
    },
    Error,
    "encode-error: U+6888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6889");
    },
    Error,
    "encode-error: U+6889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u688A");
    },
    Error,
    "encode-error: U+688A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u688B");
    },
    Error,
    "encode-error: U+688B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u688C");
    },
    Error,
    "encode-error: U+688C",
  );
  r = r && ([...ms932Encoder.encode("梍")].join(",") === "158,148"); // U+688D
  assertThrows(
    () => {
      ms932Encoder.encode("\u688E");
    },
    Error,
    "encode-error: U+688E",
  );
  r = r && ([...ms932Encoder.encode("梏")].join(",") === "158,135"); // U+688F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6890");
    },
    Error,
    "encode-error: U+6890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6891");
    },
    Error,
    "encode-error: U+6891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6892");
    },
    Error,
    "encode-error: U+6892",
  );
  r = r && ([...ms932Encoder.encode("梓梔")].join(",") === "136,178,158,137"); // U+6893
  assertThrows(
    () => {
      ms932Encoder.encode("\u6895");
    },
    Error,
    "encode-error: U+6895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6896");
    },
    Error,
    "encode-error: U+6896",
  );
  r = r && ([...ms932Encoder.encode("梗")].join(",") === "141,91"); // U+6897
  assertThrows(
    () => {
      ms932Encoder.encode("\u6898");
    },
    Error,
    "encode-error: U+6898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6899");
    },
    Error,
    "encode-error: U+6899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u689A");
    },
    Error,
    "encode-error: U+689A",
  );
  r = r && ([...ms932Encoder.encode("梛")].join(",") === "158,139"); // U+689B
  assertThrows(
    () => {
      ms932Encoder.encode("\u689C");
    },
    Error,
    "encode-error: U+689C",
  );
  r = r && ([...ms932Encoder.encode("條")].join(",") === "158,138"); // U+689D
  assertThrows(
    () => {
      ms932Encoder.encode("\u689E");
    },
    Error,
    "encode-error: U+689E",
  );
  r = r && ([...ms932Encoder.encode("梟梠")].join(",") === "158,134,158,145"); // U+689F
  assertThrows(
    () => {
      ms932Encoder.encode("\u68A1");
    },
    Error,
    "encode-error: U+68A1",
  );
  r = r && ([...ms932Encoder.encode("梢")].join(",") === "143,189"); // U+68A2
  assertThrows(
    () => {
      ms932Encoder.encode("\u68A3");
    },
    Error,
    "encode-error: U+68A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68A4");
    },
    Error,
    "encode-error: U+68A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68A5");
    },
    Error,
    "encode-error: U+68A5",
  );
  r = r &&
    ([...ms932Encoder.encode("梦梧梨")].join(",") ===
      "154,235,140,230,151,156"); // U+68A6
  assertThrows(
    () => {
      ms932Encoder.encode("\u68A9");
    },
    Error,
    "encode-error: U+68A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68AA");
    },
    Error,
    "encode-error: U+68AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68AB");
    },
    Error,
    "encode-error: U+68AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68AC");
    },
    Error,
    "encode-error: U+68AC",
  );
  r = r && ([...ms932Encoder.encode("梭")].join(",") === "158,136"); // U+68AD
  assertThrows(
    () => {
      ms932Encoder.encode("\u68AE");
    },
    Error,
    "encode-error: U+68AE",
  );
  r = r &&
    ([...ms932Encoder.encode("梯械梱")].join(",") === "146,242,138,66,141,171"); // U+68AF
  assertThrows(
    () => {
      ms932Encoder.encode("\u68B2");
    },
    Error,
    "encode-error: U+68B2",
  );
  r = r && ([...ms932Encoder.encode("梳")].join(",") === "158,128"); // U+68B3
  assertThrows(
    () => {
      ms932Encoder.encode("\u68B4");
    },
    Error,
    "encode-error: U+68B4",
  );
  r = r && ([...ms932Encoder.encode("梵梶")].join(",") === "158,144,138,129"); // U+68B5
  assertThrows(
    () => {
      ms932Encoder.encode("\u68B7");
    },
    Error,
    "encode-error: U+68B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68B8");
    },
    Error,
    "encode-error: U+68B8",
  );
  r = r && ([...ms932Encoder.encode("梹梺")].join(",") === "158,142,158,146"); // U+68B9
  assertThrows(
    () => {
      ms932Encoder.encode("\u68BB");
    },
    Error,
    "encode-error: U+68BB",
  );
  r = r && ([...ms932Encoder.encode("梼")].join(",") === "147,142"); // U+68BC
  assertThrows(
    () => {
      ms932Encoder.encode("\u68BD");
    },
    Error,
    "encode-error: U+68BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68BE");
    },
    Error,
    "encode-error: U+68BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68BF");
    },
    Error,
    "encode-error: U+68BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68C0");
    },
    Error,
    "encode-error: U+68C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68C1");
    },
    Error,
    "encode-error: U+68C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68C2");
    },
    Error,
    "encode-error: U+68C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68C3");
    },
    Error,
    "encode-error: U+68C3",
  );
  r = r && ([...ms932Encoder.encode("棄")].join(",") === "138,252"); // U+68C4
  assertThrows(
    () => {
      ms932Encoder.encode("\u68C5");
    },
    Error,
    "encode-error: U+68C5",
  );
  r = r && ([...ms932Encoder.encode("棆")].join(",") === "158,176"); // U+68C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u68C7");
    },
    Error,
    "encode-error: U+68C7",
  );
  r = r &&
    ([...ms932Encoder.encode("棈棉棊棋")].join(",") ===
      "250,100,150,199,158,151,138,251"); // U+68C8
  assertThrows(
    () => {
      ms932Encoder.encode("\u68CC");
    },
    Error,
    "encode-error: U+68CC",
  );
  r = r && ([...ms932Encoder.encode("棍")].join(",") === "158,158"); // U+68CD
  assertThrows(
    () => {
      ms932Encoder.encode("\u68CE");
    },
    Error,
    "encode-error: U+68CE",
  );
  r = r && ([...ms932Encoder.encode("棏")].join(",") === "250,231"); // U+68CF
  assertThrows(
    () => {
      ms932Encoder.encode("\u68D0");
    },
    Error,
    "encode-error: U+68D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68D1");
    },
    Error,
    "encode-error: U+68D1",
  );
  r = r && ([...ms932Encoder.encode("棒")].join(",") === "150,95"); // U+68D2
  assertThrows(
    () => {
      ms932Encoder.encode("\u68D3");
    },
    Error,
    "encode-error: U+68D3",
  );
  r = r && ([...ms932Encoder.encode("棔棕")].join(",") === "158,159,158,161"); // U+68D4
  assertThrows(
    () => {
      ms932Encoder.encode("\u68D6");
    },
    Error,
    "encode-error: U+68D6",
  );
  r = r && ([...ms932Encoder.encode("棗棘")].join(",") === "158,165,158,153"); // U+68D7
  assertThrows(
    () => {
      ms932Encoder.encode("\u68D9");
    },
    Error,
    "encode-error: U+68D9",
  );
  r = r && ([...ms932Encoder.encode("棚")].join(",") === "146,73"); // U+68DA
  assertThrows(
    () => {
      ms932Encoder.encode("\u68DB");
    },
    Error,
    "encode-error: U+68DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68DC");
    },
    Error,
    "encode-error: U+68DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68DD");
    },
    Error,
    "encode-error: U+68DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68DE");
    },
    Error,
    "encode-error: U+68DE",
  );
  r = r &&
    ([...ms932Encoder.encode("棟棠棡")].join(",") ===
      "147,143,158,169,158,156"); // U+68DF
  assertThrows(
    () => {
      ms932Encoder.encode("\u68E2");
    },
    Error,
    "encode-error: U+68E2",
  );
  r = r && ([...ms932Encoder.encode("棣")].join(",") === "158,166"); // U+68E3
  assertThrows(
    () => {
      ms932Encoder.encode("\u68E4");
    },
    Error,
    "encode-error: U+68E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68E5");
    },
    Error,
    "encode-error: U+68E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68E6");
    },
    Error,
    "encode-error: U+68E6",
  );
  r = r && ([...ms932Encoder.encode("棧")].join(",") === "158,160"); // U+68E7
  assertThrows(
    () => {
      ms932Encoder.encode("\u68E8");
    },
    Error,
    "encode-error: U+68E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68E9");
    },
    Error,
    "encode-error: U+68E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68EA");
    },
    Error,
    "encode-error: U+68EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68EB");
    },
    Error,
    "encode-error: U+68EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68EC");
    },
    Error,
    "encode-error: U+68EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68ED");
    },
    Error,
    "encode-error: U+68ED",
  );
  r = r && ([...ms932Encoder.encode("森棯")].join(",") === "144,88,158,170"); // U+68EE
  assertThrows(
    () => {
      ms932Encoder.encode("\u68F0");
    },
    Error,
    "encode-error: U+68F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68F1");
    },
    Error,
    "encode-error: U+68F1",
  );
  r = r && ([...ms932Encoder.encode("棲")].join(",") === "144,177"); // U+68F2
  assertThrows(
    () => {
      ms932Encoder.encode("\u68F3");
    },
    Error,
    "encode-error: U+68F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68F4");
    },
    Error,
    "encode-error: U+68F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68F5");
    },
    Error,
    "encode-error: U+68F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68F6");
    },
    Error,
    "encode-error: U+68F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68F7");
    },
    Error,
    "encode-error: U+68F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68F8");
    },
    Error,
    "encode-error: U+68F8",
  );
  r = r && ([...ms932Encoder.encode("棹棺")].join(",") === "158,168,138,187"); // U+68F9
  assertThrows(
    () => {
      ms932Encoder.encode("\u68FB");
    },
    Error,
    "encode-error: U+68FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68FC");
    },
    Error,
    "encode-error: U+68FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68FD");
    },
    Error,
    "encode-error: U+68FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68FE");
    },
    Error,
    "encode-error: U+68FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u68FF");
    },
    Error,
    "encode-error: U+68FF",
  );
  r = r && ([...ms932Encoder.encode("椀椁")].join(",") === "152,111,158,150"); // U+6900
  assertThrows(
    () => {
      ms932Encoder.encode("\u6902");
    },
    Error,
    "encode-error: U+6902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6903");
    },
    Error,
    "encode-error: U+6903",
  );
  r = r && ([...ms932Encoder.encode("椄椅")].join(",") === "158,164,136,214"); // U+6904
  assertThrows(
    () => {
      ms932Encoder.encode("\u6906");
    },
    Error,
    "encode-error: U+6906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6907");
    },
    Error,
    "encode-error: U+6907",
  );
  r = r && ([...ms932Encoder.encode("椈")].join(",") === "158,152"); // U+6908
  assertThrows(
    () => {
      ms932Encoder.encode("\u6909");
    },
    Error,
    "encode-error: U+6909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u690A");
    },
    Error,
    "encode-error: U+690A",
  );
  r = r &&
    ([...ms932Encoder.encode("椋椌植椎椏")].join(",") ===
      "150,184,158,157,144,65,146,197,158,147"); // U+690B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6910");
    },
    Error,
    "encode-error: U+6910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6911");
    },
    Error,
    "encode-error: U+6911",
  );
  r = r && ([...ms932Encoder.encode("椒")].join(",") === "158,163"); // U+6912
  assertThrows(
    () => {
      ms932Encoder.encode("\u6913");
    },
    Error,
    "encode-error: U+6913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6914");
    },
    Error,
    "encode-error: U+6914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6915");
    },
    Error,
    "encode-error: U+6915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6916");
    },
    Error,
    "encode-error: U+6916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6917");
    },
    Error,
    "encode-error: U+6917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6918");
    },
    Error,
    "encode-error: U+6918",
  );
  r = r &&
    ([...ms932Encoder.encode("椙椚椛検")].join(",") ===
      "144,154,158,173,138,145,140,159"); // U+6919
  assertThrows(
    () => {
      ms932Encoder.encode("\u691D");
    },
    Error,
    "encode-error: U+691D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u691E");
    },
    Error,
    "encode-error: U+691E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u691F");
    },
    Error,
    "encode-error: U+691F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6920");
    },
    Error,
    "encode-error: U+6920",
  );
  r = r &&
    ([...ms932Encoder.encode("椡椢椣")].join(",") ===
      "158,175,158,154,158,174"); // U+6921
  assertThrows(
    () => {
      ms932Encoder.encode("\u6924");
    },
    Error,
    "encode-error: U+6924",
  );
  r = r && ([...ms932Encoder.encode("椥椦")].join(",") === "158,167,158,155"); // U+6925
  assertThrows(
    () => {
      ms932Encoder.encode("\u6927");
    },
    Error,
    "encode-error: U+6927",
  );
  r = r && ([...ms932Encoder.encode("椨")].join(",") === "158,171"); // U+6928
  assertThrows(
    () => {
      ms932Encoder.encode("\u6929");
    },
    Error,
    "encode-error: U+6929",
  );
  r = r && ([...ms932Encoder.encode("椪")].join(",") === "158,172"); // U+692A
  assertThrows(
    () => {
      ms932Encoder.encode("\u692B");
    },
    Error,
    "encode-error: U+692B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u692C");
    },
    Error,
    "encode-error: U+692C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u692D");
    },
    Error,
    "encode-error: U+692D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u692E");
    },
    Error,
    "encode-error: U+692E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u692F");
    },
    Error,
    "encode-error: U+692F",
  );
  r = r && ([...ms932Encoder.encode("椰")].join(",") === "158,189"); // U+6930
  assertThrows(
    () => {
      ms932Encoder.encode("\u6931");
    },
    Error,
    "encode-error: U+6931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6932");
    },
    Error,
    "encode-error: U+6932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6933");
    },
    Error,
    "encode-error: U+6933",
  );
  r = r && ([...ms932Encoder.encode("椴")].join(",") === "147,204"); // U+6934
  assertThrows(
    () => {
      ms932Encoder.encode("\u6935");
    },
    Error,
    "encode-error: U+6935",
  );
  r = r && ([...ms932Encoder.encode("椶")].join(",") === "158,162"); // U+6936
  assertThrows(
    () => {
      ms932Encoder.encode("\u6937");
    },
    Error,
    "encode-error: U+6937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6938");
    },
    Error,
    "encode-error: U+6938",
  );
  r = r && ([...ms932Encoder.encode("椹")].join(",") === "158,185"); // U+6939
  assertThrows(
    () => {
      ms932Encoder.encode("\u693A");
    },
    Error,
    "encode-error: U+693A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u693B");
    },
    Error,
    "encode-error: U+693B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u693C");
    },
    Error,
    "encode-error: U+693C",
  );
  r = r && ([...ms932Encoder.encode("椽")].join(",") === "158,187"); // U+693D
  assertThrows(
    () => {
      ms932Encoder.encode("\u693E");
    },
    Error,
    "encode-error: U+693E",
  );
  r = r && ([...ms932Encoder.encode("椿")].join(",") === "146,214"); // U+693F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6940");
    },
    Error,
    "encode-error: U+6940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6941");
    },
    Error,
    "encode-error: U+6941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6942");
    },
    Error,
    "encode-error: U+6942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6943");
    },
    Error,
    "encode-error: U+6943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6944");
    },
    Error,
    "encode-error: U+6944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6945");
    },
    Error,
    "encode-error: U+6945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6946");
    },
    Error,
    "encode-error: U+6946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6947");
    },
    Error,
    "encode-error: U+6947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6948");
    },
    Error,
    "encode-error: U+6948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6949");
    },
    Error,
    "encode-error: U+6949",
  );
  r = r && ([...ms932Encoder.encode("楊")].join(",") === "151,107"); // U+694A
  assertThrows(
    () => {
      ms932Encoder.encode("\u694B");
    },
    Error,
    "encode-error: U+694B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u694C");
    },
    Error,
    "encode-error: U+694C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u694D");
    },
    Error,
    "encode-error: U+694D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u694E");
    },
    Error,
    "encode-error: U+694E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u694F");
    },
    Error,
    "encode-error: U+694F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6950");
    },
    Error,
    "encode-error: U+6950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6951");
    },
    Error,
    "encode-error: U+6951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6952");
    },
    Error,
    "encode-error: U+6952",
  );
  r = r &&
    ([...ms932Encoder.encode("楓楔楕")].join(",") ===
      "149,150,158,182,145,200"); // U+6953
  assertThrows(
    () => {
      ms932Encoder.encode("\u6956");
    },
    Error,
    "encode-error: U+6956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6957");
    },
    Error,
    "encode-error: U+6957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6958");
    },
    Error,
    "encode-error: U+6958",
  );
  r = r && ([...ms932Encoder.encode("楙楚")].join(",") === "158,188,145,94"); // U+6959
  assertThrows(
    () => {
      ms932Encoder.encode("\u695B");
    },
    Error,
    "encode-error: U+695B",
  );
  r = r &&
    ([...ms932Encoder.encode("楜楝楞")].join(",") ===
      "158,179,158,192,158,191"); // U+695C
  assertThrows(
    () => {
      ms932Encoder.encode("\u695F");
    },
    Error,
    "encode-error: U+695F",
  );
  r = r &&
    ([...ms932Encoder.encode("楠楡楢")].join(",") ===
      "147,237,158,190,147,232"); // U+6960
  assertThrows(
    () => {
      ms932Encoder.encode("\u6963");
    },
    Error,
    "encode-error: U+6963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6964");
    },
    Error,
    "encode-error: U+6964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6965");
    },
    Error,
    "encode-error: U+6965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6966");
    },
    Error,
    "encode-error: U+6966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6967");
    },
    Error,
    "encode-error: U+6967",
  );
  r = r && ([...ms932Encoder.encode("楨")].join(",") === "250,233"); // U+6968
  assertThrows(
    () => {
      ms932Encoder.encode("\u6969");
    },
    Error,
    "encode-error: U+6969",
  );
  r = r && ([...ms932Encoder.encode("楪楫")].join(",") === "158,194,158,181"); // U+696A
  assertThrows(
    () => {
      ms932Encoder.encode("\u696C");
    },
    Error,
    "encode-error: U+696C",
  );
  r = r &&
    ([...ms932Encoder.encode("業楮楯")].join(",") ===
      "139,198,158,184,143,124"); // U+696D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6970");
    },
    Error,
    "encode-error: U+6970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6971");
    },
    Error,
    "encode-error: U+6971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6972");
    },
    Error,
    "encode-error: U+6972",
  );
  r = r &&
    ([...ms932Encoder.encode("楳楴極")].join(",") ===
      "148,128,158,186,139,201"); // U+6973
  assertThrows(
    () => {
      ms932Encoder.encode("\u6976");
    },
    Error,
    "encode-error: U+6976",
  );
  r = r &&
    ([...ms932Encoder.encode("楷楸楹")].join(",") ===
      "158,178,158,180,158,177"); // U+6977
  assertThrows(
    () => {
      ms932Encoder.encode("\u697A");
    },
    Error,
    "encode-error: U+697A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u697B");
    },
    Error,
    "encode-error: U+697B",
  );
  r = r &&
    ([...ms932Encoder.encode("楼楽楾")].join(",") === "152,79,138,121,158,183"); // U+697C
  assertThrows(
    () => {
      ms932Encoder.encode("\u697F");
    },
    Error,
    "encode-error: U+697F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6980");
    },
    Error,
    "encode-error: U+6980",
  );
  r = r && ([...ms932Encoder.encode("榁概")].join(",") === "158,193,138,84"); // U+6981
  assertThrows(
    () => {
      ms932Encoder.encode("\u6983");
    },
    Error,
    "encode-error: U+6983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6984");
    },
    Error,
    "encode-error: U+6984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6985");
    },
    Error,
    "encode-error: U+6985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6986");
    },
    Error,
    "encode-error: U+6986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6987");
    },
    Error,
    "encode-error: U+6987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6988");
    },
    Error,
    "encode-error: U+6988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6989");
    },
    Error,
    "encode-error: U+6989",
  );
  r = r && ([...ms932Encoder.encode("榊")].join(",") === "141,229"); // U+698A
  assertThrows(
    () => {
      ms932Encoder.encode("\u698B");
    },
    Error,
    "encode-error: U+698B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u698C");
    },
    Error,
    "encode-error: U+698C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u698D");
    },
    Error,
    "encode-error: U+698D",
  );
  r = r && ([...ms932Encoder.encode("榎")].join(",") === "137,124"); // U+698E
  assertThrows(
    () => {
      ms932Encoder.encode("\u698F");
    },
    Error,
    "encode-error: U+698F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6990");
    },
    Error,
    "encode-error: U+6990",
  );
  r = r && ([...ms932Encoder.encode("榑")].join(",") === "158,210"); // U+6991
  assertThrows(
    () => {
      ms932Encoder.encode("\u6992");
    },
    Error,
    "encode-error: U+6992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6993");
    },
    Error,
    "encode-error: U+6993",
  );
  r = r && ([...ms932Encoder.encode("榔榕")].join(",") === "152,80,158,213"); // U+6994
  assertThrows(
    () => {
      ms932Encoder.encode("\u6996");
    },
    Error,
    "encode-error: U+6996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6997");
    },
    Error,
    "encode-error: U+6997",
  );
  r = r && ([...ms932Encoder.encode("榘")].join(",") === "250,235"); // U+6998
  assertThrows(
    () => {
      ms932Encoder.encode("\u6999");
    },
    Error,
    "encode-error: U+6999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u699A");
    },
    Error,
    "encode-error: U+699A",
  );
  r = r && ([...ms932Encoder.encode("榛榜")].join(",") === "144,89,158,212"); // U+699B
  assertThrows(
    () => {
      ms932Encoder.encode("\u699D");
    },
    Error,
    "encode-error: U+699D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u699E");
    },
    Error,
    "encode-error: U+699E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u699F");
    },
    Error,
    "encode-error: U+699F",
  );
  r = r && ([...ms932Encoder.encode("榠")].join(",") === "158,211"); // U+69A0
  assertThrows(
    () => {
      ms932Encoder.encode("\u69A1");
    },
    Error,
    "encode-error: U+69A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69A2");
    },
    Error,
    "encode-error: U+69A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69A3");
    },
    Error,
    "encode-error: U+69A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69A4");
    },
    Error,
    "encode-error: U+69A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69A5");
    },
    Error,
    "encode-error: U+69A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69A6");
    },
    Error,
    "encode-error: U+69A6",
  );
  r = r && ([...ms932Encoder.encode("榧")].join(",") === "158,208"); // U+69A7
  assertThrows(
    () => {
      ms932Encoder.encode("\u69A8");
    },
    Error,
    "encode-error: U+69A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69A9");
    },
    Error,
    "encode-error: U+69A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69AA");
    },
    Error,
    "encode-error: U+69AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69AB");
    },
    Error,
    "encode-error: U+69AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69AC");
    },
    Error,
    "encode-error: U+69AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69AD");
    },
    Error,
    "encode-error: U+69AD",
  );
  r = r && ([...ms932Encoder.encode("榮")].join(",") === "158,196"); // U+69AE
  assertThrows(
    () => {
      ms932Encoder.encode("\u69AF");
    },
    Error,
    "encode-error: U+69AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69B0");
    },
    Error,
    "encode-error: U+69B0",
  );
  r = r && ([...ms932Encoder.encode("榱榲")].join(",") === "158,225,158,195"); // U+69B1
  assertThrows(
    () => {
      ms932Encoder.encode("\u69B3");
    },
    Error,
    "encode-error: U+69B3",
  );
  r = r && ([...ms932Encoder.encode("榴")].join(",") === "158,214"); // U+69B4
  assertThrows(
    () => {
      ms932Encoder.encode("\u69B5");
    },
    Error,
    "encode-error: U+69B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69B6");
    },
    Error,
    "encode-error: U+69B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69B7");
    },
    Error,
    "encode-error: U+69B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69B8");
    },
    Error,
    "encode-error: U+69B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69B9");
    },
    Error,
    "encode-error: U+69B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69BA");
    },
    Error,
    "encode-error: U+69BA",
  );
  r = r && ([...ms932Encoder.encode("榻")].join(",") === "158,206"); // U+69BB
  assertThrows(
    () => {
      ms932Encoder.encode("\u69BC");
    },
    Error,
    "encode-error: U+69BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69BD");
    },
    Error,
    "encode-error: U+69BD",
  );
  r = r && ([...ms932Encoder.encode("榾榿")].join(",") === "158,201,158,198"); // U+69BE
  assertThrows(
    () => {
      ms932Encoder.encode("\u69C0");
    },
    Error,
    "encode-error: U+69C0",
  );
  r = r && ([...ms932Encoder.encode("槁")].join(",") === "158,199"); // U+69C1
  assertThrows(
    () => {
      ms932Encoder.encode("\u69C2");
    },
    Error,
    "encode-error: U+69C2",
  );
  r = r && ([...ms932Encoder.encode("槃")].join(",") === "158,207"); // U+69C3
  assertThrows(
    () => {
      ms932Encoder.encode("\u69C4");
    },
    Error,
    "encode-error: U+69C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69C5");
    },
    Error,
    "encode-error: U+69C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69C6");
    },
    Error,
    "encode-error: U+69C6",
  );
  r = r && ([...ms932Encoder.encode("槇")].join(",") === "234,160"); // U+69C7
  assertThrows(
    () => {
      ms932Encoder.encode("\u69C8");
    },
    Error,
    "encode-error: U+69C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69C9");
    },
    Error,
    "encode-error: U+69C9",
  );
  r = r &&
    ([...ms932Encoder.encode("槊構槌槍槎")].join(",") ===
      "158,204,141,92,146,198,145,132,158,202"); // U+69CA
  assertThrows(
    () => {
      ms932Encoder.encode("\u69CF");
    },
    Error,
    "encode-error: U+69CF",
  );
  r = r && ([...ms932Encoder.encode("槐")].join(",") === "158,197"); // U+69D0
  assertThrows(
    () => {
      ms932Encoder.encode("\u69D1");
    },
    Error,
    "encode-error: U+69D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69D2");
    },
    Error,
    "encode-error: U+69D2",
  );
  r = r && ([...ms932Encoder.encode("槓")].join(",") === "158,200"); // U+69D3
  assertThrows(
    () => {
      ms932Encoder.encode("\u69D4");
    },
    Error,
    "encode-error: U+69D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69D5");
    },
    Error,
    "encode-error: U+69D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69D6");
    },
    Error,
    "encode-error: U+69D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69D7");
    },
    Error,
    "encode-error: U+69D7",
  );
  r = r && ([...ms932Encoder.encode("様槙")].join(",") === "151,108,150,138"); // U+69D8
  assertThrows(
    () => {
      ms932Encoder.encode("\u69DA");
    },
    Error,
    "encode-error: U+69DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69DB");
    },
    Error,
    "encode-error: U+69DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69DC");
    },
    Error,
    "encode-error: U+69DC",
  );
  r = r && ([...ms932Encoder.encode("槝槞")].join(",") === "158,205,158,215"); // U+69DD
  assertThrows(
    () => {
      ms932Encoder.encode("\u69DF");
    },
    Error,
    "encode-error: U+69DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69E0");
    },
    Error,
    "encode-error: U+69E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69E1");
    },
    Error,
    "encode-error: U+69E1",
  );
  r = r && ([...ms932Encoder.encode("槢")].join(",") === "250,236"); // U+69E2
  assertThrows(
    () => {
      ms932Encoder.encode("\u69E3");
    },
    Error,
    "encode-error: U+69E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69E4");
    },
    Error,
    "encode-error: U+69E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69E5");
    },
    Error,
    "encode-error: U+69E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69E6");
    },
    Error,
    "encode-error: U+69E6",
  );
  r = r && ([...ms932Encoder.encode("槧槨")].join(",") === "158,223,158,216"); // U+69E7
  assertThrows(
    () => {
      ms932Encoder.encode("\u69E9");
    },
    Error,
    "encode-error: U+69E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69EA");
    },
    Error,
    "encode-error: U+69EA",
  );
  r = r && ([...ms932Encoder.encode("槫")].join(",") === "158,229"); // U+69EB
  assertThrows(
    () => {
      ms932Encoder.encode("\u69EC");
    },
    Error,
    "encode-error: U+69EC",
  );
  r = r && ([...ms932Encoder.encode("槭")].join(",") === "158,227"); // U+69ED
  assertThrows(
    () => {
      ms932Encoder.encode("\u69EE");
    },
    Error,
    "encode-error: U+69EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69EF");
    },
    Error,
    "encode-error: U+69EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69F0");
    },
    Error,
    "encode-error: U+69F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69F1");
    },
    Error,
    "encode-error: U+69F1",
  );
  r = r && ([...ms932Encoder.encode("槲")].join(",") === "158,222"); // U+69F2
  assertThrows(
    () => {
      ms932Encoder.encode("\u69F3");
    },
    Error,
    "encode-error: U+69F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69F4");
    },
    Error,
    "encode-error: U+69F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69F5");
    },
    Error,
    "encode-error: U+69F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69F6");
    },
    Error,
    "encode-error: U+69F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69F7");
    },
    Error,
    "encode-error: U+69F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u69F8");
    },
    Error,
    "encode-error: U+69F8",
  );
  r = r && ([...ms932Encoder.encode("槹")].join(",") === "158,221"); // U+69F9
  assertThrows(
    () => {
      ms932Encoder.encode("\u69FA");
    },
    Error,
    "encode-error: U+69FA",
  );
  r = r && ([...ms932Encoder.encode("槻")].join(",") === "146,206"); // U+69FB
  assertThrows(
    () => {
      ms932Encoder.encode("\u69FC");
    },
    Error,
    "encode-error: U+69FC",
  );
  r = r && ([...ms932Encoder.encode("槽")].join(",") === "145,133"); // U+69FD
  assertThrows(
    () => {
      ms932Encoder.encode("\u69FE");
    },
    Error,
    "encode-error: U+69FE",
  );
  r = r && ([...ms932Encoder.encode("槿")].join(",") === "158,219"); // U+69FF
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A00");
    },
    Error,
    "encode-error: U+6A00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A01");
    },
    Error,
    "encode-error: U+6A01",
  );
  r = r && ([...ms932Encoder.encode("樂")].join(",") === "158,217"); // U+6A02
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A03");
    },
    Error,
    "encode-error: U+6A03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A04");
    },
    Error,
    "encode-error: U+6A04",
  );
  r = r && ([...ms932Encoder.encode("樅")].join(",") === "158,224"); // U+6A05
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A06");
    },
    Error,
    "encode-error: U+6A06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A07");
    },
    Error,
    "encode-error: U+6A07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A08");
    },
    Error,
    "encode-error: U+6A08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A09");
    },
    Error,
    "encode-error: U+6A09",
  );
  r = r &&
    ([...ms932Encoder.encode("樊樋樌")].join(",") ===
      "158,230,148,243,158,236"); // U+6A0A
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A0D");
    },
    Error,
    "encode-error: U+6A0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A0E");
    },
    Error,
    "encode-error: U+6A0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A0F");
    },
    Error,
    "encode-error: U+6A0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A10");
    },
    Error,
    "encode-error: U+6A10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A11");
    },
    Error,
    "encode-error: U+6A11",
  );
  r = r &&
    ([...ms932Encoder.encode("樒樓樔")].join(",") ===
      "158,231,158,234,158,228"); // U+6A12
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A15");
    },
    Error,
    "encode-error: U+6A15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A16");
    },
    Error,
    "encode-error: U+6A16",
  );
  r = r && ([...ms932Encoder.encode("樗")].join(",") === "146,148"); // U+6A17
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A18");
    },
    Error,
    "encode-error: U+6A18",
  );
  r = r && ([...ms932Encoder.encode("標")].join(",") === "149,87"); // U+6A19
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A1A");
    },
    Error,
    "encode-error: U+6A1A",
  );
  r = r && ([...ms932Encoder.encode("樛")].join(",") === "158,218"); // U+6A1B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A1C");
    },
    Error,
    "encode-error: U+6A1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A1D");
    },
    Error,
    "encode-error: U+6A1D",
  );
  r = r && ([...ms932Encoder.encode("樞樟")].join(",") === "158,226,143,190"); // U+6A1E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A20");
    },
    Error,
    "encode-error: U+6A20",
  );
  r = r &&
    ([...ms932Encoder.encode("模樢樣")].join(",") ===
      "150,205,158,246,158,233"); // U+6A21
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A24");
    },
    Error,
    "encode-error: U+6A24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A25");
    },
    Error,
    "encode-error: U+6A25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A26");
    },
    Error,
    "encode-error: U+6A26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A27");
    },
    Error,
    "encode-error: U+6A27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A28");
    },
    Error,
    "encode-error: U+6A28",
  );
  r = r &&
    ([...ms932Encoder.encode("権横樫")].join(",") ===
      "140,160,137,161,138,126"); // U+6A29
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A2C");
    },
    Error,
    "encode-error: U+6A2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A2D");
    },
    Error,
    "encode-error: U+6A2D",
  );
  r = r && ([...ms932Encoder.encode("樮")].join(",") === "158,209"); // U+6A2E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A2F");
    },
    Error,
    "encode-error: U+6A2F",
  );
  r = r && ([...ms932Encoder.encode("樰")].join(",") === "250,237"); // U+6A30
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A31");
    },
    Error,
    "encode-error: U+6A31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A32");
    },
    Error,
    "encode-error: U+6A32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A33");
    },
    Error,
    "encode-error: U+6A33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A34");
    },
    Error,
    "encode-error: U+6A34",
  );
  r = r && ([...ms932Encoder.encode("樵樶")].join(",") === "143,191,158,238"); // U+6A35
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A37");
    },
    Error,
    "encode-error: U+6A37",
  );
  r = r &&
    ([...ms932Encoder.encode("樸樹樺")].join(",") ===
      "158,245,142,247,138,146"); // U+6A38
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A3B");
    },
    Error,
    "encode-error: U+6A3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A3C");
    },
    Error,
    "encode-error: U+6A3C",
  );
  r = r && ([...ms932Encoder.encode("樽")].join(",") === "146,77"); // U+6A3D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A3E");
    },
    Error,
    "encode-error: U+6A3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A3F");
    },
    Error,
    "encode-error: U+6A3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A40");
    },
    Error,
    "encode-error: U+6A40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A41");
    },
    Error,
    "encode-error: U+6A41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A42");
    },
    Error,
    "encode-error: U+6A42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A43");
    },
    Error,
    "encode-error: U+6A43",
  );
  r = r && ([...ms932Encoder.encode("橄")].join(",") === "158,235"); // U+6A44
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A45");
    },
    Error,
    "encode-error: U+6A45",
  );
  r = r &&
    ([...ms932Encoder.encode("橆橇橈")].join(",") ===
      "250,239,158,240,158,244"); // U+6A46
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A49");
    },
    Error,
    "encode-error: U+6A49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A4A");
    },
    Error,
    "encode-error: U+6A4A",
  );
  r = r && ([...ms932Encoder.encode("橋")].join(",") === "139,180"); // U+6A4B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A4C");
    },
    Error,
    "encode-error: U+6A4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A4D");
    },
    Error,
    "encode-error: U+6A4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A4E");
    },
    Error,
    "encode-error: U+6A4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A4F");
    },
    Error,
    "encode-error: U+6A4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A50");
    },
    Error,
    "encode-error: U+6A50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A51");
    },
    Error,
    "encode-error: U+6A51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A52");
    },
    Error,
    "encode-error: U+6A52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A53");
    },
    Error,
    "encode-error: U+6A53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A54");
    },
    Error,
    "encode-error: U+6A54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A55");
    },
    Error,
    "encode-error: U+6A55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A56");
    },
    Error,
    "encode-error: U+6A56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A57");
    },
    Error,
    "encode-error: U+6A57",
  );
  r = r && ([...ms932Encoder.encode("橘橙")].join(",") === "139,107,158,242"); // U+6A58
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A5A");
    },
    Error,
    "encode-error: U+6A5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A5B");
    },
    Error,
    "encode-error: U+6A5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A5C");
    },
    Error,
    "encode-error: U+6A5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A5D");
    },
    Error,
    "encode-error: U+6A5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A5E");
    },
    Error,
    "encode-error: U+6A5E",
  );
  r = r && ([...ms932Encoder.encode("機")].join(",") === "139,64"); // U+6A5F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A60");
    },
    Error,
    "encode-error: U+6A60",
  );
  r = r && ([...ms932Encoder.encode("橡橢")].join(",") === "147,201,158,241"); // U+6A61
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A63");
    },
    Error,
    "encode-error: U+6A63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A64");
    },
    Error,
    "encode-error: U+6A64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A65");
    },
    Error,
    "encode-error: U+6A65",
  );
  r = r && ([...ms932Encoder.encode("橦")].join(",") === "158,243"); // U+6A66
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A67");
    },
    Error,
    "encode-error: U+6A67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A68");
    },
    Error,
    "encode-error: U+6A68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A69");
    },
    Error,
    "encode-error: U+6A69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A6A");
    },
    Error,
    "encode-error: U+6A6A",
  );
  r = r && ([...ms932Encoder.encode("橫")].join(",") === "250,238"); // U+6A6B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A6C");
    },
    Error,
    "encode-error: U+6A6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A6D");
    },
    Error,
    "encode-error: U+6A6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A6E");
    },
    Error,
    "encode-error: U+6A6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A6F");
    },
    Error,
    "encode-error: U+6A6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A70");
    },
    Error,
    "encode-error: U+6A70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A71");
    },
    Error,
    "encode-error: U+6A71",
  );
  r = r && ([...ms932Encoder.encode("橲橳")].join(",") === "158,237,250,240"); // U+6A72
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A74");
    },
    Error,
    "encode-error: U+6A74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A75");
    },
    Error,
    "encode-error: U+6A75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A76");
    },
    Error,
    "encode-error: U+6A76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A77");
    },
    Error,
    "encode-error: U+6A77",
  );
  r = r && ([...ms932Encoder.encode("橸")].join(",") === "158,239"); // U+6A78
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A79");
    },
    Error,
    "encode-error: U+6A79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A7A");
    },
    Error,
    "encode-error: U+6A7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A7B");
    },
    Error,
    "encode-error: U+6A7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A7C");
    },
    Error,
    "encode-error: U+6A7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A7D");
    },
    Error,
    "encode-error: U+6A7D",
  );
  r = r &&
    ([...ms932Encoder.encode("橾橿檀")].join(",") ===
      "250,241,138,128,146,104"); // U+6A7E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A81");
    },
    Error,
    "encode-error: U+6A81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A82");
    },
    Error,
    "encode-error: U+6A82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A83");
    },
    Error,
    "encode-error: U+6A83",
  );
  r = r && ([...ms932Encoder.encode("檄")].join(",") === "158,250"); // U+6A84
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A85");
    },
    Error,
    "encode-error: U+6A85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A86");
    },
    Error,
    "encode-error: U+6A86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A87");
    },
    Error,
    "encode-error: U+6A87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A88");
    },
    Error,
    "encode-error: U+6A88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A89");
    },
    Error,
    "encode-error: U+6A89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A8A");
    },
    Error,
    "encode-error: U+6A8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A8B");
    },
    Error,
    "encode-error: U+6A8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A8C");
    },
    Error,
    "encode-error: U+6A8C",
  );
  r = r && ([...ms932Encoder.encode("檍檎")].join(",") === "158,248,140,231"); // U+6A8D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A8F");
    },
    Error,
    "encode-error: U+6A8F",
  );
  r = r && ([...ms932Encoder.encode("檐")].join(",") === "158,247"); // U+6A90
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A91");
    },
    Error,
    "encode-error: U+6A91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A92");
    },
    Error,
    "encode-error: U+6A92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A93");
    },
    Error,
    "encode-error: U+6A93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A94");
    },
    Error,
    "encode-error: U+6A94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A95");
    },
    Error,
    "encode-error: U+6A95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A96");
    },
    Error,
    "encode-error: U+6A96",
  );
  r = r && ([...ms932Encoder.encode("檗")].join(",") === "159,64"); // U+6A97
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A98");
    },
    Error,
    "encode-error: U+6A98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A99");
    },
    Error,
    "encode-error: U+6A99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A9A");
    },
    Error,
    "encode-error: U+6A9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A9B");
    },
    Error,
    "encode-error: U+6A9B",
  );
  r = r && ([...ms932Encoder.encode("檜")].join(",") === "158,119"); // U+6A9C
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A9D");
    },
    Error,
    "encode-error: U+6A9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A9E");
    },
    Error,
    "encode-error: U+6A9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6A9F");
    },
    Error,
    "encode-error: U+6A9F",
  );
  r = r && ([...ms932Encoder.encode("檠")].join(",") === "158,249"); // U+6AA0
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AA1");
    },
    Error,
    "encode-error: U+6AA1",
  );
  r = r && ([...ms932Encoder.encode("檢檣")].join(",") === "158,251,158,252"); // U+6AA2
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AA4");
    },
    Error,
    "encode-error: U+6AA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AA5");
    },
    Error,
    "encode-error: U+6AA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AA6");
    },
    Error,
    "encode-error: U+6AA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AA7");
    },
    Error,
    "encode-error: U+6AA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AA8");
    },
    Error,
    "encode-error: U+6AA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AA9");
    },
    Error,
    "encode-error: U+6AA9",
  );
  r = r && ([...ms932Encoder.encode("檪")].join(",") === "159,75"); // U+6AAA
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AAB");
    },
    Error,
    "encode-error: U+6AAB",
  );
  r = r && ([...ms932Encoder.encode("檬")].join(",") === "159,71"); // U+6AAC
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AAD");
    },
    Error,
    "encode-error: U+6AAD",
  );
  r = r && ([...ms932Encoder.encode("檮")].join(",") === "158,141"); // U+6AAE
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AAF");
    },
    Error,
    "encode-error: U+6AAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AB0");
    },
    Error,
    "encode-error: U+6AB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AB1");
    },
    Error,
    "encode-error: U+6AB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AB2");
    },
    Error,
    "encode-error: U+6AB2",
  );
  r = r && ([...ms932Encoder.encode("檳")].join(",") === "159,70"); // U+6AB3
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AB4");
    },
    Error,
    "encode-error: U+6AB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AB5");
    },
    Error,
    "encode-error: U+6AB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AB6");
    },
    Error,
    "encode-error: U+6AB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AB7");
    },
    Error,
    "encode-error: U+6AB7",
  );
  r = r && ([...ms932Encoder.encode("檸")].join(",") === "159,69"); // U+6AB8
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AB9");
    },
    Error,
    "encode-error: U+6AB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ABA");
    },
    Error,
    "encode-error: U+6ABA",
  );
  r = r && ([...ms932Encoder.encode("檻")].join(",") === "159,66"); // U+6ABB
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ABC");
    },
    Error,
    "encode-error: U+6ABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ABD");
    },
    Error,
    "encode-error: U+6ABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ABE");
    },
    Error,
    "encode-error: U+6ABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ABF");
    },
    Error,
    "encode-error: U+6ABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AC0");
    },
    Error,
    "encode-error: U+6AC0",
  );
  r = r &&
    ([...ms932Encoder.encode("櫁櫂櫃")].join(",") === "158,232,159,68,159,67"); // U+6AC1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AC4");
    },
    Error,
    "encode-error: U+6AC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AC5");
    },
    Error,
    "encode-error: U+6AC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AC6");
    },
    Error,
    "encode-error: U+6AC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AC7");
    },
    Error,
    "encode-error: U+6AC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AC8");
    },
    Error,
    "encode-error: U+6AC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AC9");
    },
    Error,
    "encode-error: U+6AC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ACA");
    },
    Error,
    "encode-error: U+6ACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ACB");
    },
    Error,
    "encode-error: U+6ACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ACC");
    },
    Error,
    "encode-error: U+6ACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ACD");
    },
    Error,
    "encode-error: U+6ACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ACE");
    },
    Error,
    "encode-error: U+6ACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ACF");
    },
    Error,
    "encode-error: U+6ACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AD0");
    },
    Error,
    "encode-error: U+6AD0",
  );
  r = r && ([...ms932Encoder.encode("櫑")].join(",") === "159,73"); // U+6AD1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AD2");
    },
    Error,
    "encode-error: U+6AD2",
  );
  r = r && ([...ms932Encoder.encode("櫓")].join(",") === "152,69"); // U+6AD3
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AD4");
    },
    Error,
    "encode-error: U+6AD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AD5");
    },
    Error,
    "encode-error: U+6AD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AD6");
    },
    Error,
    "encode-error: U+6AD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AD7");
    },
    Error,
    "encode-error: U+6AD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AD8");
    },
    Error,
    "encode-error: U+6AD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AD9");
    },
    Error,
    "encode-error: U+6AD9",
  );
  r = r && ([...ms932Encoder.encode("櫚櫛")].join(",") === "159,76,139,249"); // U+6ADA
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ADC");
    },
    Error,
    "encode-error: U+6ADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6ADD");
    },
    Error,
    "encode-error: U+6ADD",
  );
  r = r && ([...ms932Encoder.encode("櫞櫟")].join(",") === "159,72,159,74"); // U+6ADE
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AE0");
    },
    Error,
    "encode-error: U+6AE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AE1");
    },
    Error,
    "encode-error: U+6AE1",
  );
  r = r && ([...ms932Encoder.encode("櫢")].join(",") === "250,242"); // U+6AE2
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AE3");
    },
    Error,
    "encode-error: U+6AE3",
  );
  r = r && ([...ms932Encoder.encode("櫤")].join(",") === "250,243"); // U+6AE4
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AE5");
    },
    Error,
    "encode-error: U+6AE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AE6");
    },
    Error,
    "encode-error: U+6AE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AE7");
    },
    Error,
    "encode-error: U+6AE7",
  );
  r = r && ([...ms932Encoder.encode("櫨")].join(",") === "148,165"); // U+6AE8
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AE9");
    },
    Error,
    "encode-error: U+6AE9",
  );
  r = r && ([...ms932Encoder.encode("櫪")].join(",") === "159,77"); // U+6AEA
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AEB");
    },
    Error,
    "encode-error: U+6AEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AEC");
    },
    Error,
    "encode-error: U+6AEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AED");
    },
    Error,
    "encode-error: U+6AED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AEE");
    },
    Error,
    "encode-error: U+6AEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AEF");
    },
    Error,
    "encode-error: U+6AEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AF0");
    },
    Error,
    "encode-error: U+6AF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AF1");
    },
    Error,
    "encode-error: U+6AF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AF2");
    },
    Error,
    "encode-error: U+6AF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AF3");
    },
    Error,
    "encode-error: U+6AF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AF4");
    },
    Error,
    "encode-error: U+6AF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AF5");
    },
    Error,
    "encode-error: U+6AF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AF6");
    },
    Error,
    "encode-error: U+6AF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AF7");
    },
    Error,
    "encode-error: U+6AF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AF8");
    },
    Error,
    "encode-error: U+6AF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AF9");
    },
    Error,
    "encode-error: U+6AF9",
  );
  r = r && ([...ms932Encoder.encode("櫺櫻")].join(",") === "159,81,159,78"); // U+6AFA
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AFC");
    },
    Error,
    "encode-error: U+6AFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AFD");
    },
    Error,
    "encode-error: U+6AFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AFE");
    },
    Error,
    "encode-error: U+6AFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6AFF");
    },
    Error,
    "encode-error: U+6AFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B00");
    },
    Error,
    "encode-error: U+6B00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B01");
    },
    Error,
    "encode-error: U+6B01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B02");
    },
    Error,
    "encode-error: U+6B02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B03");
    },
    Error,
    "encode-error: U+6B03",
  );
  r = r && ([...ms932Encoder.encode("欄欅")].join(",") === "151,147,159,79"); // U+6B04
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B06");
    },
    Error,
    "encode-error: U+6B06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B07");
    },
    Error,
    "encode-error: U+6B07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B08");
    },
    Error,
    "encode-error: U+6B08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B09");
    },
    Error,
    "encode-error: U+6B09",
  );
  r = r && ([...ms932Encoder.encode("權")].join(",") === "158,220"); // U+6B0A
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B0B");
    },
    Error,
    "encode-error: U+6B0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B0C");
    },
    Error,
    "encode-error: U+6B0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B0D");
    },
    Error,
    "encode-error: U+6B0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B0E");
    },
    Error,
    "encode-error: U+6B0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B0F");
    },
    Error,
    "encode-error: U+6B0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B10");
    },
    Error,
    "encode-error: U+6B10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B11");
    },
    Error,
    "encode-error: U+6B11",
  );
  r = r && ([...ms932Encoder.encode("欒")].join(",") === "159,82"); // U+6B12
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B13");
    },
    Error,
    "encode-error: U+6B13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B14");
    },
    Error,
    "encode-error: U+6B14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B15");
    },
    Error,
    "encode-error: U+6B15",
  );
  r = r && ([...ms932Encoder.encode("欖")].join(",") === "159,83"); // U+6B16
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B17");
    },
    Error,
    "encode-error: U+6B17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B18");
    },
    Error,
    "encode-error: U+6B18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B19");
    },
    Error,
    "encode-error: U+6B19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B1A");
    },
    Error,
    "encode-error: U+6B1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B1B");
    },
    Error,
    "encode-error: U+6B1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B1C");
    },
    Error,
    "encode-error: U+6B1C",
  );
  r = r && ([...ms932Encoder.encode("欝")].join(",") === "137,84"); // U+6B1D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B1E");
    },
    Error,
    "encode-error: U+6B1E",
  );
  r = r &&
    ([...ms932Encoder.encode("欟欠次")].join(",") === "159,85,140,135,142,159"); // U+6B1F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B22");
    },
    Error,
    "encode-error: U+6B22",
  );
  r = r && ([...ms932Encoder.encode("欣")].join(",") === "139,211"); // U+6B23
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B24");
    },
    Error,
    "encode-error: U+6B24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B25");
    },
    Error,
    "encode-error: U+6B25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B26");
    },
    Error,
    "encode-error: U+6B26",
  );
  r = r && ([...ms932Encoder.encode("欧")].join(",") === "137,162"); // U+6B27
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B28");
    },
    Error,
    "encode-error: U+6B28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B29");
    },
    Error,
    "encode-error: U+6B29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B2A");
    },
    Error,
    "encode-error: U+6B2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B2B");
    },
    Error,
    "encode-error: U+6B2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B2C");
    },
    Error,
    "encode-error: U+6B2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B2D");
    },
    Error,
    "encode-error: U+6B2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B2E");
    },
    Error,
    "encode-error: U+6B2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B2F");
    },
    Error,
    "encode-error: U+6B2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B30");
    },
    Error,
    "encode-error: U+6B30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B31");
    },
    Error,
    "encode-error: U+6B31",
  );
  r = r && ([...ms932Encoder.encode("欲")].join(",") === "151,126"); // U+6B32
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B33");
    },
    Error,
    "encode-error: U+6B33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B34");
    },
    Error,
    "encode-error: U+6B34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B35");
    },
    Error,
    "encode-error: U+6B35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B36");
    },
    Error,
    "encode-error: U+6B36",
  );
  r = r &&
    ([...ms932Encoder.encode("欷欸欹欺")].join(",") ===
      "159,87,159,86,159,89,139,92"); // U+6B37
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B3B");
    },
    Error,
    "encode-error: U+6B3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B3C");
    },
    Error,
    "encode-error: U+6B3C",
  );
  r = r && ([...ms932Encoder.encode("欽款")].join(",") === "139,212,138,188"); // U+6B3D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B3F");
    },
    Error,
    "encode-error: U+6B3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B40");
    },
    Error,
    "encode-error: U+6B40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B41");
    },
    Error,
    "encode-error: U+6B41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B42");
    },
    Error,
    "encode-error: U+6B42",
  );
  r = r && ([...ms932Encoder.encode("歃")].join(",") === "159,92"); // U+6B43
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B44");
    },
    Error,
    "encode-error: U+6B44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B45");
    },
    Error,
    "encode-error: U+6B45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B46");
    },
    Error,
    "encode-error: U+6B46",
  );
  r = r && ([...ms932Encoder.encode("歇")].join(",") === "159,91"); // U+6B47
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B48");
    },
    Error,
    "encode-error: U+6B48",
  );
  r = r && ([...ms932Encoder.encode("歉")].join(",") === "159,93"); // U+6B49
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B4A");
    },
    Error,
    "encode-error: U+6B4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B4B");
    },
    Error,
    "encode-error: U+6B4B",
  );
  r = r && ([...ms932Encoder.encode("歌")].join(",") === "137,204"); // U+6B4C
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B4D");
    },
    Error,
    "encode-error: U+6B4D",
  );
  r = r && ([...ms932Encoder.encode("歎")].join(",") === "146,86"); // U+6B4E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B4F");
    },
    Error,
    "encode-error: U+6B4F",
  );
  r = r && ([...ms932Encoder.encode("歐")].join(",") === "159,94"); // U+6B50
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B51");
    },
    Error,
    "encode-error: U+6B51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B52");
    },
    Error,
    "encode-error: U+6B52",
  );
  r = r && ([...ms932Encoder.encode("歓歔")].join(",") === "138,189,159,96"); // U+6B53
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B55");
    },
    Error,
    "encode-error: U+6B55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B56");
    },
    Error,
    "encode-error: U+6B56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B57");
    },
    Error,
    "encode-error: U+6B57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B58");
    },
    Error,
    "encode-error: U+6B58",
  );
  r = r && ([...ms932Encoder.encode("歙")].join(",") === "159,95"); // U+6B59
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B5A");
    },
    Error,
    "encode-error: U+6B5A",
  );
  r = r && ([...ms932Encoder.encode("歛")].join(",") === "159,97"); // U+6B5B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B5C");
    },
    Error,
    "encode-error: U+6B5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B5D");
    },
    Error,
    "encode-error: U+6B5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B5E");
    },
    Error,
    "encode-error: U+6B5E",
  );
  r = r && ([...ms932Encoder.encode("歟")].join(",") === "159,98"); // U+6B5F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B60");
    },
    Error,
    "encode-error: U+6B60",
  );
  r = r &&
    ([...ms932Encoder.encode("歡止正此")].join(",") ===
      "159,99,142,126,144,179,141,159"); // U+6B61
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B65");
    },
    Error,
    "encode-error: U+6B65",
  );
  r = r && ([...ms932Encoder.encode("武")].join(",") === "149,144"); // U+6B66
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B67");
    },
    Error,
    "encode-error: U+6B67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B68");
    },
    Error,
    "encode-error: U+6B68",
  );
  r = r && ([...ms932Encoder.encode("歩歪")].join(",") === "149,224,152,99"); // U+6B69
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B6B");
    },
    Error,
    "encode-error: U+6B6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B6C");
    },
    Error,
    "encode-error: U+6B6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B6D");
    },
    Error,
    "encode-error: U+6B6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B6E");
    },
    Error,
    "encode-error: U+6B6E",
  );
  r = r && ([...ms932Encoder.encode("歯")].join(",") === "142,149"); // U+6B6F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B70");
    },
    Error,
    "encode-error: U+6B70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B71");
    },
    Error,
    "encode-error: U+6B71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B72");
    },
    Error,
    "encode-error: U+6B72",
  );
  r = r && ([...ms932Encoder.encode("歳歴")].join(",") === "141,206,151,240"); // U+6B73
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B75");
    },
    Error,
    "encode-error: U+6B75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B76");
    },
    Error,
    "encode-error: U+6B76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B77");
    },
    Error,
    "encode-error: U+6B77",
  );
  r = r && ([...ms932Encoder.encode("歸歹")].join(",") === "159,100,159,101"); // U+6B78
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B7A");
    },
    Error,
    "encode-error: U+6B7A",
  );
  r = r && ([...ms932Encoder.encode("死")].join(",") === "142,128"); // U+6B7B
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B7C");
    },
    Error,
    "encode-error: U+6B7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B7D");
    },
    Error,
    "encode-error: U+6B7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B7E");
    },
    Error,
    "encode-error: U+6B7E",
  );
  r = r && ([...ms932Encoder.encode("歿殀")].join(",") === "159,102,159,103"); // U+6B7F
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B81");
    },
    Error,
    "encode-error: U+6B81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B82");
    },
    Error,
    "encode-error: U+6B82",
  );
  r = r && ([...ms932Encoder.encode("殃殄")].join(",") === "159,105,159,104"); // U+6B83
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B85");
    },
    Error,
    "encode-error: U+6B85",
  );
  r = r && ([...ms932Encoder.encode("殆")].join(",") === "150,119"); // U+6B86
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B87");
    },
    Error,
    "encode-error: U+6B87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B88");
    },
    Error,
    "encode-error: U+6B88",
  );
  r = r &&
    ([...ms932Encoder.encode("殉殊残")].join(",") === "143,125,142,234,142,99"); // U+6B89
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B8C");
    },
    Error,
    "encode-error: U+6B8C",
  );
  r = r && ([...ms932Encoder.encode("殍")].join(",") === "159,106"); // U+6B8D
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B8E");
    },
    Error,
    "encode-error: U+6B8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B8F");
    },
    Error,
    "encode-error: U+6B8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B90");
    },
    Error,
    "encode-error: U+6B90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B91");
    },
    Error,
    "encode-error: U+6B91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B92");
    },
    Error,
    "encode-error: U+6B92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B93");
    },
    Error,
    "encode-error: U+6B93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B94");
    },
    Error,
    "encode-error: U+6B94",
  );
  r = r && ([...ms932Encoder.encode("殕殖")].join(",") === "159,108,144,66"); // U+6B95
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B97");
    },
    Error,
    "encode-error: U+6B97",
  );
  r = r && ([...ms932Encoder.encode("殘")].join(",") === "159,107"); // U+6B98
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B99");
    },
    Error,
    "encode-error: U+6B99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B9A");
    },
    Error,
    "encode-error: U+6B9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B9B");
    },
    Error,
    "encode-error: U+6B9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B9C");
    },
    Error,
    "encode-error: U+6B9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B9D");
    },
    Error,
    "encode-error: U+6B9D",
  );
  r = r && ([...ms932Encoder.encode("殞")].join(",") === "159,109"); // U+6B9E
  assertThrows(
    () => {
      ms932Encoder.encode("\u6B9F");
    },
    Error,
    "encode-error: U+6B9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BA0");
    },
    Error,
    "encode-error: U+6BA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BA1");
    },
    Error,
    "encode-error: U+6BA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BA2");
    },
    Error,
    "encode-error: U+6BA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BA3");
    },
    Error,
    "encode-error: U+6BA3",
  );
  r = r && ([...ms932Encoder.encode("殤")].join(",") === "159,110"); // U+6BA4
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BA5");
    },
    Error,
    "encode-error: U+6BA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BA6");
    },
    Error,
    "encode-error: U+6BA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BA7");
    },
    Error,
    "encode-error: U+6BA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BA8");
    },
    Error,
    "encode-error: U+6BA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BA9");
    },
    Error,
    "encode-error: U+6BA9",
  );
  r = r && ([...ms932Encoder.encode("殪殫")].join(",") === "159,111,159,112"); // U+6BAA
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BAC");
    },
    Error,
    "encode-error: U+6BAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BAD");
    },
    Error,
    "encode-error: U+6BAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BAE");
    },
    Error,
    "encode-error: U+6BAE",
  );
  r = r && ([...ms932Encoder.encode("殯")].join(",") === "159,113"); // U+6BAF
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BB0");
    },
    Error,
    "encode-error: U+6BB0",
  );
  r = r &&
    ([...ms932Encoder.encode("殱殲殳殴段")].join(",") ===
      "159,115,159,114,159,116,137,163,146,105"); // U+6BB1
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BB6");
    },
    Error,
    "encode-error: U+6BB6",
  );
  r = r && ([...ms932Encoder.encode("殷")].join(",") === "159,117"); // U+6BB7
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BB8");
    },
    Error,
    "encode-error: U+6BB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BB9");
    },
    Error,
    "encode-error: U+6BB9",
  );
  r = r &&
    ([...ms932Encoder.encode("殺殻殼")].join(",") === "142,69,138,107,159,118"); // U+6BBA
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BBD");
    },
    Error,
    "encode-error: U+6BBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BBE");
    },
    Error,
    "encode-error: U+6BBE",
  );
  r = r && ([...ms932Encoder.encode("殿毀")].join(",") === "147,97,154,202"); // U+6BBF
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BC1");
    },
    Error,
    "encode-error: U+6BC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BC2");
    },
    Error,
    "encode-error: U+6BC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BC3");
    },
    Error,
    "encode-error: U+6BC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BC4");
    },
    Error,
    "encode-error: U+6BC4",
  );
  r = r && ([...ms932Encoder.encode("毅毆")].join(",") === "139,66,159,119"); // U+6BC5
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BC7");
    },
    Error,
    "encode-error: U+6BC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BC8");
    },
    Error,
    "encode-error: U+6BC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BC9");
    },
    Error,
    "encode-error: U+6BC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BCA");
    },
    Error,
    "encode-error: U+6BCA",
  );
  r = r && ([...ms932Encoder.encode("毋")].join(",") === "159,120"); // U+6BCB
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BCC");
    },
    Error,
    "encode-error: U+6BCC",
  );
  r = r && ([...ms932Encoder.encode("母毎")].join(",") === "149,234,150,136"); // U+6BCD
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BCF");
    },
    Error,
    "encode-error: U+6BCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BD0");
    },
    Error,
    "encode-error: U+6BD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BD1");
    },
    Error,
    "encode-error: U+6BD1",
  );
  r = r &&
    ([...ms932Encoder.encode("毒毓比")].join(",") ===
      "147,197,159,121,148,228"); // U+6BD2
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BD5");
    },
    Error,
    "encode-error: U+6BD5",
  );
  r = r && ([...ms932Encoder.encode("毖")].join(",") === "250,244"); // U+6BD6
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BD7");
    },
    Error,
    "encode-error: U+6BD7",
  );
  r = r && ([...ms932Encoder.encode("毘")].join(",") === "148,249"); // U+6BD8
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BD9");
    },
    Error,
    "encode-error: U+6BD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BDA");
    },
    Error,
    "encode-error: U+6BDA",
  );
  r = r && ([...ms932Encoder.encode("毛")].join(",") === "150,209"); // U+6BDB
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BDC");
    },
    Error,
    "encode-error: U+6BDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BDD");
    },
    Error,
    "encode-error: U+6BDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BDE");
    },
    Error,
    "encode-error: U+6BDE",
  );
  r = r && ([...ms932Encoder.encode("毟")].join(",") === "159,122"); // U+6BDF
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BE0");
    },
    Error,
    "encode-error: U+6BE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BE1");
    },
    Error,
    "encode-error: U+6BE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BE2");
    },
    Error,
    "encode-error: U+6BE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BE3");
    },
    Error,
    "encode-error: U+6BE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BE4");
    },
    Error,
    "encode-error: U+6BE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BE5");
    },
    Error,
    "encode-error: U+6BE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BE6");
    },
    Error,
    "encode-error: U+6BE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BE7");
    },
    Error,
    "encode-error: U+6BE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BE8");
    },
    Error,
    "encode-error: U+6BE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BE9");
    },
    Error,
    "encode-error: U+6BE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BEA");
    },
    Error,
    "encode-error: U+6BEA",
  );
  r = r && ([...ms932Encoder.encode("毫毬")].join(",") === "159,124,159,123"); // U+6BEB
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BED");
    },
    Error,
    "encode-error: U+6BED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BEE");
    },
    Error,
    "encode-error: U+6BEE",
  );
  r = r && ([...ms932Encoder.encode("毯")].join(",") === "159,126"); // U+6BEF
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BF0");
    },
    Error,
    "encode-error: U+6BF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BF1");
    },
    Error,
    "encode-error: U+6BF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BF2");
    },
    Error,
    "encode-error: U+6BF2",
  );
  r = r && ([...ms932Encoder.encode("毳")].join(",") === "159,125"); // U+6BF3
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BF4");
    },
    Error,
    "encode-error: U+6BF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BF5");
    },
    Error,
    "encode-error: U+6BF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BF6");
    },
    Error,
    "encode-error: U+6BF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BF7");
    },
    Error,
    "encode-error: U+6BF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BF8");
    },
    Error,
    "encode-error: U+6BF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BF9");
    },
    Error,
    "encode-error: U+6BF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BFA");
    },
    Error,
    "encode-error: U+6BFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BFB");
    },
    Error,
    "encode-error: U+6BFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BFC");
    },
    Error,
    "encode-error: U+6BFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BFD");
    },
    Error,
    "encode-error: U+6BFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BFE");
    },
    Error,
    "encode-error: U+6BFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u6BFF");
    },
    Error,
    "encode-error: U+6BFF",
  );

  assertStrictEquals(r, true);
});
