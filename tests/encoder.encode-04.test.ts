import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+3000-U+3FFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  r = r &&
    ([...ms932Encoder.encode("　、。〃")].join(",") ===
      "129,64,129,65,129,66,129,86"); // U+3000
  assertThrows(
    () => {
      ms932Encoder.encode("\u3004");
    },
    Error,
    "encode-error: U+3004",
  );
  r = r &&
    ([...ms932Encoder.encode("々〆〇〈〉《》「」『』【】〒〓〔〕")].join(
      ",",
    ) ===
      "129,88,129,89,129,90,129,113,129,114,129,115,129,116,129,117,129,118,129,119,129,120,129,121,129,122,129,167,129,172,129,107,129,108"); // U+3005
  assertThrows(
    () => {
      ms932Encoder.encode("\u3016");
    },
    Error,
    "encode-error: U+3016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3017");
    },
    Error,
    "encode-error: U+3017",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3018");
    },
    Error,
    "encode-error: U+3018",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3019");
    },
    Error,
    "encode-error: U+3019",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u301A");
    },
    Error,
    "encode-error: U+301A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u301B");
    },
    Error,
    "encode-error: U+301B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u301C");
    },
    Error,
    "encode-error: U+301C",
  );
  r = r && ([...ms932Encoder.encode("〝")].join(",") === "135,128"); // U+301D
  assertThrows(
    () => {
      ms932Encoder.encode("\u301E");
    },
    Error,
    "encode-error: U+301E",
  );
  r = r && ([...ms932Encoder.encode("〟")].join(",") === "135,129"); // U+301F
  assertThrows(
    () => {
      ms932Encoder.encode("\u3020");
    },
    Error,
    "encode-error: U+3020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3021");
    },
    Error,
    "encode-error: U+3021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3022");
    },
    Error,
    "encode-error: U+3022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3023");
    },
    Error,
    "encode-error: U+3023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3024");
    },
    Error,
    "encode-error: U+3024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3025");
    },
    Error,
    "encode-error: U+3025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3026");
    },
    Error,
    "encode-error: U+3026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3027");
    },
    Error,
    "encode-error: U+3027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3028");
    },
    Error,
    "encode-error: U+3028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3029");
    },
    Error,
    "encode-error: U+3029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u302A");
    },
    Error,
    "encode-error: U+302A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u302B");
    },
    Error,
    "encode-error: U+302B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u302C");
    },
    Error,
    "encode-error: U+302C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u302D");
    },
    Error,
    "encode-error: U+302D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u302E");
    },
    Error,
    "encode-error: U+302E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u302F");
    },
    Error,
    "encode-error: U+302F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3030");
    },
    Error,
    "encode-error: U+3030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3031");
    },
    Error,
    "encode-error: U+3031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3032");
    },
    Error,
    "encode-error: U+3032",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3033");
    },
    Error,
    "encode-error: U+3033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3034");
    },
    Error,
    "encode-error: U+3034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3035");
    },
    Error,
    "encode-error: U+3035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3036");
    },
    Error,
    "encode-error: U+3036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3037");
    },
    Error,
    "encode-error: U+3037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3038");
    },
    Error,
    "encode-error: U+3038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3039");
    },
    Error,
    "encode-error: U+3039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u303A");
    },
    Error,
    "encode-error: U+303A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u303B");
    },
    Error,
    "encode-error: U+303B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u303C");
    },
    Error,
    "encode-error: U+303C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u303D");
    },
    Error,
    "encode-error: U+303D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u303E");
    },
    Error,
    "encode-error: U+303E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u303F");
    },
    Error,
    "encode-error: U+303F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3040");
    },
    Error,
    "encode-error: U+3040",
  );
  r = r &&
    ([...ms932Encoder.encode(
      "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん",
    )].join(",") ===
      "130,159,130,160,130,161,130,162,130,163,130,164,130,165,130,166,130,167,130,168,130,169,130,170,130,171,130,172,130,173,130,174,130,175,130,176,130,177,130,178,130,179,130,180,130,181,130,182,130,183,130,184,130,185,130,186,130,187,130,188,130,189,130,190,130,191,130,192,130,193,130,194,130,195,130,196,130,197,130,198,130,199,130,200,130,201,130,202,130,203,130,204,130,205,130,206,130,207,130,208,130,209,130,210,130,211,130,212,130,213,130,214,130,215,130,216,130,217,130,218,130,219,130,220,130,221,130,222,130,223,130,224,130,225,130,226,130,227,130,228,130,229,130,230,130,231,130,232,130,233,130,234,130,235,130,236,130,237,130,238,130,239,130,240,130,241"); // U+3041
  assertThrows(
    () => {
      ms932Encoder.encode("\u3094");
    },
    Error,
    "encode-error: U+3094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3095");
    },
    Error,
    "encode-error: U+3095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3096");
    },
    Error,
    "encode-error: U+3096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3097");
    },
    Error,
    "encode-error: U+3097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3098");
    },
    Error,
    "encode-error: U+3098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3099");
    },
    Error,
    "encode-error: U+3099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u309A");
    },
    Error,
    "encode-error: U+309A",
  );
  r = r &&
    ([...ms932Encoder.encode("゛゜ゝゞ")].join(",") ===
      "129,74,129,75,129,84,129,85"); // U+309B
  assertThrows(
    () => {
      ms932Encoder.encode("\u309F");
    },
    Error,
    "encode-error: U+309F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u30A0");
    },
    Error,
    "encode-error: U+30A0",
  );
  r = r &&
    ([...ms932Encoder.encode(
      "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ",
    )].join(",") ===
      "131,64,131,65,131,66,131,67,131,68,131,69,131,70,131,71,131,72,131,73,131,74,131,75,131,76,131,77,131,78,131,79,131,80,131,81,131,82,131,83,131,84,131,85,131,86,131,87,131,88,131,89,131,90,131,91,131,92,131,93,131,94,131,95,131,96,131,97,131,98,131,99,131,100,131,101,131,102,131,103,131,104,131,105,131,106,131,107,131,108,131,109,131,110,131,111,131,112,131,113,131,114,131,115,131,116,131,117,131,118,131,119,131,120,131,121,131,122,131,123,131,124,131,125,131,126,131,128,131,129,131,130,131,131,131,132,131,133,131,134,131,135,131,136,131,137,131,138,131,139,131,140,131,141,131,142,131,143,131,144,131,145,131,146,131,147,131,148,131,149,131,150"); // U+30A1
  assertThrows(
    () => {
      ms932Encoder.encode("\u30F7");
    },
    Error,
    "encode-error: U+30F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u30F8");
    },
    Error,
    "encode-error: U+30F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u30F9");
    },
    Error,
    "encode-error: U+30F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u30FA");
    },
    Error,
    "encode-error: U+30FA",
  );
  r = r &&
    ([...ms932Encoder.encode("・ーヽヾ")].join(",") ===
      "129,69,129,91,129,82,129,83"); // U+30FB
  assertThrows(
    () => {
      ms932Encoder.encode("\u30FF");
    },
    Error,
    "encode-error: U+30FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3100");
    },
    Error,
    "encode-error: U+3100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3101");
    },
    Error,
    "encode-error: U+3101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3102");
    },
    Error,
    "encode-error: U+3102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3103");
    },
    Error,
    "encode-error: U+3103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3104");
    },
    Error,
    "encode-error: U+3104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3105");
    },
    Error,
    "encode-error: U+3105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3106");
    },
    Error,
    "encode-error: U+3106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3107");
    },
    Error,
    "encode-error: U+3107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3108");
    },
    Error,
    "encode-error: U+3108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3109");
    },
    Error,
    "encode-error: U+3109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u310A");
    },
    Error,
    "encode-error: U+310A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u310B");
    },
    Error,
    "encode-error: U+310B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u310C");
    },
    Error,
    "encode-error: U+310C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u310D");
    },
    Error,
    "encode-error: U+310D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u310E");
    },
    Error,
    "encode-error: U+310E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u310F");
    },
    Error,
    "encode-error: U+310F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3110");
    },
    Error,
    "encode-error: U+3110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3111");
    },
    Error,
    "encode-error: U+3111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3112");
    },
    Error,
    "encode-error: U+3112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3113");
    },
    Error,
    "encode-error: U+3113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3114");
    },
    Error,
    "encode-error: U+3114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3115");
    },
    Error,
    "encode-error: U+3115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3116");
    },
    Error,
    "encode-error: U+3116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3117");
    },
    Error,
    "encode-error: U+3117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3118");
    },
    Error,
    "encode-error: U+3118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3119");
    },
    Error,
    "encode-error: U+3119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u311A");
    },
    Error,
    "encode-error: U+311A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u311B");
    },
    Error,
    "encode-error: U+311B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u311C");
    },
    Error,
    "encode-error: U+311C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u311D");
    },
    Error,
    "encode-error: U+311D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u311E");
    },
    Error,
    "encode-error: U+311E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u311F");
    },
    Error,
    "encode-error: U+311F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3120");
    },
    Error,
    "encode-error: U+3120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3121");
    },
    Error,
    "encode-error: U+3121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3122");
    },
    Error,
    "encode-error: U+3122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3123");
    },
    Error,
    "encode-error: U+3123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3124");
    },
    Error,
    "encode-error: U+3124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3125");
    },
    Error,
    "encode-error: U+3125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3126");
    },
    Error,
    "encode-error: U+3126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3127");
    },
    Error,
    "encode-error: U+3127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3128");
    },
    Error,
    "encode-error: U+3128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3129");
    },
    Error,
    "encode-error: U+3129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u312A");
    },
    Error,
    "encode-error: U+312A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u312B");
    },
    Error,
    "encode-error: U+312B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u312C");
    },
    Error,
    "encode-error: U+312C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u312D");
    },
    Error,
    "encode-error: U+312D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u312E");
    },
    Error,
    "encode-error: U+312E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u312F");
    },
    Error,
    "encode-error: U+312F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3130");
    },
    Error,
    "encode-error: U+3130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3131");
    },
    Error,
    "encode-error: U+3131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3132");
    },
    Error,
    "encode-error: U+3132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3133");
    },
    Error,
    "encode-error: U+3133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3134");
    },
    Error,
    "encode-error: U+3134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3135");
    },
    Error,
    "encode-error: U+3135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3136");
    },
    Error,
    "encode-error: U+3136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3137");
    },
    Error,
    "encode-error: U+3137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3138");
    },
    Error,
    "encode-error: U+3138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3139");
    },
    Error,
    "encode-error: U+3139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u313A");
    },
    Error,
    "encode-error: U+313A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u313B");
    },
    Error,
    "encode-error: U+313B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u313C");
    },
    Error,
    "encode-error: U+313C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u313D");
    },
    Error,
    "encode-error: U+313D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u313E");
    },
    Error,
    "encode-error: U+313E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u313F");
    },
    Error,
    "encode-error: U+313F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3140");
    },
    Error,
    "encode-error: U+3140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3141");
    },
    Error,
    "encode-error: U+3141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3142");
    },
    Error,
    "encode-error: U+3142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3143");
    },
    Error,
    "encode-error: U+3143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3144");
    },
    Error,
    "encode-error: U+3144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3145");
    },
    Error,
    "encode-error: U+3145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3146");
    },
    Error,
    "encode-error: U+3146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3147");
    },
    Error,
    "encode-error: U+3147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3148");
    },
    Error,
    "encode-error: U+3148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3149");
    },
    Error,
    "encode-error: U+3149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u314A");
    },
    Error,
    "encode-error: U+314A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u314B");
    },
    Error,
    "encode-error: U+314B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u314C");
    },
    Error,
    "encode-error: U+314C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u314D");
    },
    Error,
    "encode-error: U+314D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u314E");
    },
    Error,
    "encode-error: U+314E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u314F");
    },
    Error,
    "encode-error: U+314F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3150");
    },
    Error,
    "encode-error: U+3150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3151");
    },
    Error,
    "encode-error: U+3151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3152");
    },
    Error,
    "encode-error: U+3152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3153");
    },
    Error,
    "encode-error: U+3153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3154");
    },
    Error,
    "encode-error: U+3154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3155");
    },
    Error,
    "encode-error: U+3155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3156");
    },
    Error,
    "encode-error: U+3156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3157");
    },
    Error,
    "encode-error: U+3157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3158");
    },
    Error,
    "encode-error: U+3158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3159");
    },
    Error,
    "encode-error: U+3159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u315A");
    },
    Error,
    "encode-error: U+315A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u315B");
    },
    Error,
    "encode-error: U+315B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u315C");
    },
    Error,
    "encode-error: U+315C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u315D");
    },
    Error,
    "encode-error: U+315D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u315E");
    },
    Error,
    "encode-error: U+315E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u315F");
    },
    Error,
    "encode-error: U+315F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3160");
    },
    Error,
    "encode-error: U+3160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3161");
    },
    Error,
    "encode-error: U+3161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3162");
    },
    Error,
    "encode-error: U+3162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3163");
    },
    Error,
    "encode-error: U+3163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3164");
    },
    Error,
    "encode-error: U+3164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3165");
    },
    Error,
    "encode-error: U+3165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3166");
    },
    Error,
    "encode-error: U+3166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3167");
    },
    Error,
    "encode-error: U+3167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3168");
    },
    Error,
    "encode-error: U+3168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3169");
    },
    Error,
    "encode-error: U+3169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u316A");
    },
    Error,
    "encode-error: U+316A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u316B");
    },
    Error,
    "encode-error: U+316B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u316C");
    },
    Error,
    "encode-error: U+316C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u316D");
    },
    Error,
    "encode-error: U+316D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u316E");
    },
    Error,
    "encode-error: U+316E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u316F");
    },
    Error,
    "encode-error: U+316F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3170");
    },
    Error,
    "encode-error: U+3170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3171");
    },
    Error,
    "encode-error: U+3171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3172");
    },
    Error,
    "encode-error: U+3172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3173");
    },
    Error,
    "encode-error: U+3173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3174");
    },
    Error,
    "encode-error: U+3174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3175");
    },
    Error,
    "encode-error: U+3175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3176");
    },
    Error,
    "encode-error: U+3176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3177");
    },
    Error,
    "encode-error: U+3177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3178");
    },
    Error,
    "encode-error: U+3178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3179");
    },
    Error,
    "encode-error: U+3179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u317A");
    },
    Error,
    "encode-error: U+317A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u317B");
    },
    Error,
    "encode-error: U+317B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u317C");
    },
    Error,
    "encode-error: U+317C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u317D");
    },
    Error,
    "encode-error: U+317D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u317E");
    },
    Error,
    "encode-error: U+317E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u317F");
    },
    Error,
    "encode-error: U+317F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3180");
    },
    Error,
    "encode-error: U+3180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3181");
    },
    Error,
    "encode-error: U+3181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3182");
    },
    Error,
    "encode-error: U+3182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3183");
    },
    Error,
    "encode-error: U+3183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3184");
    },
    Error,
    "encode-error: U+3184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3185");
    },
    Error,
    "encode-error: U+3185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3186");
    },
    Error,
    "encode-error: U+3186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3187");
    },
    Error,
    "encode-error: U+3187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3188");
    },
    Error,
    "encode-error: U+3188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3189");
    },
    Error,
    "encode-error: U+3189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u318A");
    },
    Error,
    "encode-error: U+318A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u318B");
    },
    Error,
    "encode-error: U+318B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u318C");
    },
    Error,
    "encode-error: U+318C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u318D");
    },
    Error,
    "encode-error: U+318D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u318E");
    },
    Error,
    "encode-error: U+318E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u318F");
    },
    Error,
    "encode-error: U+318F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3190");
    },
    Error,
    "encode-error: U+3190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3191");
    },
    Error,
    "encode-error: U+3191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3192");
    },
    Error,
    "encode-error: U+3192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3193");
    },
    Error,
    "encode-error: U+3193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3194");
    },
    Error,
    "encode-error: U+3194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3195");
    },
    Error,
    "encode-error: U+3195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3196");
    },
    Error,
    "encode-error: U+3196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3197");
    },
    Error,
    "encode-error: U+3197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3198");
    },
    Error,
    "encode-error: U+3198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3199");
    },
    Error,
    "encode-error: U+3199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u319A");
    },
    Error,
    "encode-error: U+319A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u319B");
    },
    Error,
    "encode-error: U+319B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u319C");
    },
    Error,
    "encode-error: U+319C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u319D");
    },
    Error,
    "encode-error: U+319D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u319E");
    },
    Error,
    "encode-error: U+319E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u319F");
    },
    Error,
    "encode-error: U+319F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31A0");
    },
    Error,
    "encode-error: U+31A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31A1");
    },
    Error,
    "encode-error: U+31A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31A2");
    },
    Error,
    "encode-error: U+31A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31A3");
    },
    Error,
    "encode-error: U+31A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31A4");
    },
    Error,
    "encode-error: U+31A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31A5");
    },
    Error,
    "encode-error: U+31A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31A6");
    },
    Error,
    "encode-error: U+31A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31A7");
    },
    Error,
    "encode-error: U+31A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31A8");
    },
    Error,
    "encode-error: U+31A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31A9");
    },
    Error,
    "encode-error: U+31A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31AA");
    },
    Error,
    "encode-error: U+31AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31AB");
    },
    Error,
    "encode-error: U+31AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31AC");
    },
    Error,
    "encode-error: U+31AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31AD");
    },
    Error,
    "encode-error: U+31AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31AE");
    },
    Error,
    "encode-error: U+31AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31AF");
    },
    Error,
    "encode-error: U+31AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31B0");
    },
    Error,
    "encode-error: U+31B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31B1");
    },
    Error,
    "encode-error: U+31B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31B2");
    },
    Error,
    "encode-error: U+31B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31B3");
    },
    Error,
    "encode-error: U+31B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31B4");
    },
    Error,
    "encode-error: U+31B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31B5");
    },
    Error,
    "encode-error: U+31B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31B6");
    },
    Error,
    "encode-error: U+31B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31B7");
    },
    Error,
    "encode-error: U+31B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31B8");
    },
    Error,
    "encode-error: U+31B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31B9");
    },
    Error,
    "encode-error: U+31B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31BA");
    },
    Error,
    "encode-error: U+31BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31BB");
    },
    Error,
    "encode-error: U+31BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31BC");
    },
    Error,
    "encode-error: U+31BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31BD");
    },
    Error,
    "encode-error: U+31BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31BE");
    },
    Error,
    "encode-error: U+31BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31BF");
    },
    Error,
    "encode-error: U+31BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31C0");
    },
    Error,
    "encode-error: U+31C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31C1");
    },
    Error,
    "encode-error: U+31C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31C2");
    },
    Error,
    "encode-error: U+31C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31C3");
    },
    Error,
    "encode-error: U+31C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31C4");
    },
    Error,
    "encode-error: U+31C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31C5");
    },
    Error,
    "encode-error: U+31C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31C6");
    },
    Error,
    "encode-error: U+31C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31C7");
    },
    Error,
    "encode-error: U+31C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31C8");
    },
    Error,
    "encode-error: U+31C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31C9");
    },
    Error,
    "encode-error: U+31C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31CA");
    },
    Error,
    "encode-error: U+31CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31CB");
    },
    Error,
    "encode-error: U+31CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31CC");
    },
    Error,
    "encode-error: U+31CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31CD");
    },
    Error,
    "encode-error: U+31CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31CE");
    },
    Error,
    "encode-error: U+31CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31CF");
    },
    Error,
    "encode-error: U+31CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31D0");
    },
    Error,
    "encode-error: U+31D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31D1");
    },
    Error,
    "encode-error: U+31D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31D2");
    },
    Error,
    "encode-error: U+31D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31D3");
    },
    Error,
    "encode-error: U+31D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31D4");
    },
    Error,
    "encode-error: U+31D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31D5");
    },
    Error,
    "encode-error: U+31D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31D6");
    },
    Error,
    "encode-error: U+31D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31D7");
    },
    Error,
    "encode-error: U+31D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31D8");
    },
    Error,
    "encode-error: U+31D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31D9");
    },
    Error,
    "encode-error: U+31D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31DA");
    },
    Error,
    "encode-error: U+31DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31DB");
    },
    Error,
    "encode-error: U+31DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31DC");
    },
    Error,
    "encode-error: U+31DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31DD");
    },
    Error,
    "encode-error: U+31DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31DE");
    },
    Error,
    "encode-error: U+31DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31DF");
    },
    Error,
    "encode-error: U+31DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31E0");
    },
    Error,
    "encode-error: U+31E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31E1");
    },
    Error,
    "encode-error: U+31E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31E2");
    },
    Error,
    "encode-error: U+31E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31E3");
    },
    Error,
    "encode-error: U+31E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31E4");
    },
    Error,
    "encode-error: U+31E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31E5");
    },
    Error,
    "encode-error: U+31E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31E6");
    },
    Error,
    "encode-error: U+31E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31E7");
    },
    Error,
    "encode-error: U+31E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31E8");
    },
    Error,
    "encode-error: U+31E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31E9");
    },
    Error,
    "encode-error: U+31E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31EA");
    },
    Error,
    "encode-error: U+31EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31EB");
    },
    Error,
    "encode-error: U+31EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31EC");
    },
    Error,
    "encode-error: U+31EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31ED");
    },
    Error,
    "encode-error: U+31ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31EE");
    },
    Error,
    "encode-error: U+31EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31EF");
    },
    Error,
    "encode-error: U+31EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31F0");
    },
    Error,
    "encode-error: U+31F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31F1");
    },
    Error,
    "encode-error: U+31F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31F2");
    },
    Error,
    "encode-error: U+31F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31F3");
    },
    Error,
    "encode-error: U+31F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31F4");
    },
    Error,
    "encode-error: U+31F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31F5");
    },
    Error,
    "encode-error: U+31F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31F6");
    },
    Error,
    "encode-error: U+31F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31F7");
    },
    Error,
    "encode-error: U+31F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31F8");
    },
    Error,
    "encode-error: U+31F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31F9");
    },
    Error,
    "encode-error: U+31F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31FA");
    },
    Error,
    "encode-error: U+31FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31FB");
    },
    Error,
    "encode-error: U+31FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31FC");
    },
    Error,
    "encode-error: U+31FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31FD");
    },
    Error,
    "encode-error: U+31FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31FE");
    },
    Error,
    "encode-error: U+31FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u31FF");
    },
    Error,
    "encode-error: U+31FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3200");
    },
    Error,
    "encode-error: U+3200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3201");
    },
    Error,
    "encode-error: U+3201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3202");
    },
    Error,
    "encode-error: U+3202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3203");
    },
    Error,
    "encode-error: U+3203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3204");
    },
    Error,
    "encode-error: U+3204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3205");
    },
    Error,
    "encode-error: U+3205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3206");
    },
    Error,
    "encode-error: U+3206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3207");
    },
    Error,
    "encode-error: U+3207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3208");
    },
    Error,
    "encode-error: U+3208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3209");
    },
    Error,
    "encode-error: U+3209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u320A");
    },
    Error,
    "encode-error: U+320A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u320B");
    },
    Error,
    "encode-error: U+320B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u320C");
    },
    Error,
    "encode-error: U+320C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u320D");
    },
    Error,
    "encode-error: U+320D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u320E");
    },
    Error,
    "encode-error: U+320E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u320F");
    },
    Error,
    "encode-error: U+320F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3210");
    },
    Error,
    "encode-error: U+3210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3211");
    },
    Error,
    "encode-error: U+3211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3212");
    },
    Error,
    "encode-error: U+3212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3213");
    },
    Error,
    "encode-error: U+3213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3214");
    },
    Error,
    "encode-error: U+3214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3215");
    },
    Error,
    "encode-error: U+3215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3216");
    },
    Error,
    "encode-error: U+3216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3217");
    },
    Error,
    "encode-error: U+3217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3218");
    },
    Error,
    "encode-error: U+3218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3219");
    },
    Error,
    "encode-error: U+3219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u321A");
    },
    Error,
    "encode-error: U+321A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u321B");
    },
    Error,
    "encode-error: U+321B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u321C");
    },
    Error,
    "encode-error: U+321C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u321D");
    },
    Error,
    "encode-error: U+321D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u321E");
    },
    Error,
    "encode-error: U+321E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u321F");
    },
    Error,
    "encode-error: U+321F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3220");
    },
    Error,
    "encode-error: U+3220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3221");
    },
    Error,
    "encode-error: U+3221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3222");
    },
    Error,
    "encode-error: U+3222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3223");
    },
    Error,
    "encode-error: U+3223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3224");
    },
    Error,
    "encode-error: U+3224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3225");
    },
    Error,
    "encode-error: U+3225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3226");
    },
    Error,
    "encode-error: U+3226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3227");
    },
    Error,
    "encode-error: U+3227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3228");
    },
    Error,
    "encode-error: U+3228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3229");
    },
    Error,
    "encode-error: U+3229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u322A");
    },
    Error,
    "encode-error: U+322A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u322B");
    },
    Error,
    "encode-error: U+322B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u322C");
    },
    Error,
    "encode-error: U+322C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u322D");
    },
    Error,
    "encode-error: U+322D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u322E");
    },
    Error,
    "encode-error: U+322E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u322F");
    },
    Error,
    "encode-error: U+322F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3230");
    },
    Error,
    "encode-error: U+3230",
  );
  r = r && ([...ms932Encoder.encode("㈱㈲")].join(",") === "135,138,135,139"); // U+3231
  assertThrows(
    () => {
      ms932Encoder.encode("\u3233");
    },
    Error,
    "encode-error: U+3233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3234");
    },
    Error,
    "encode-error: U+3234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3235");
    },
    Error,
    "encode-error: U+3235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3236");
    },
    Error,
    "encode-error: U+3236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3237");
    },
    Error,
    "encode-error: U+3237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3238");
    },
    Error,
    "encode-error: U+3238",
  );
  r = r && ([...ms932Encoder.encode("㈹")].join(",") === "135,140"); // U+3239
  assertThrows(
    () => {
      ms932Encoder.encode("\u323A");
    },
    Error,
    "encode-error: U+323A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u323B");
    },
    Error,
    "encode-error: U+323B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u323C");
    },
    Error,
    "encode-error: U+323C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u323D");
    },
    Error,
    "encode-error: U+323D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u323E");
    },
    Error,
    "encode-error: U+323E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u323F");
    },
    Error,
    "encode-error: U+323F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3240");
    },
    Error,
    "encode-error: U+3240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3241");
    },
    Error,
    "encode-error: U+3241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3242");
    },
    Error,
    "encode-error: U+3242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3243");
    },
    Error,
    "encode-error: U+3243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3244");
    },
    Error,
    "encode-error: U+3244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3245");
    },
    Error,
    "encode-error: U+3245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3246");
    },
    Error,
    "encode-error: U+3246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3247");
    },
    Error,
    "encode-error: U+3247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3248");
    },
    Error,
    "encode-error: U+3248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3249");
    },
    Error,
    "encode-error: U+3249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u324A");
    },
    Error,
    "encode-error: U+324A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u324B");
    },
    Error,
    "encode-error: U+324B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u324C");
    },
    Error,
    "encode-error: U+324C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u324D");
    },
    Error,
    "encode-error: U+324D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u324E");
    },
    Error,
    "encode-error: U+324E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u324F");
    },
    Error,
    "encode-error: U+324F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3250");
    },
    Error,
    "encode-error: U+3250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3251");
    },
    Error,
    "encode-error: U+3251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3252");
    },
    Error,
    "encode-error: U+3252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3253");
    },
    Error,
    "encode-error: U+3253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3254");
    },
    Error,
    "encode-error: U+3254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3255");
    },
    Error,
    "encode-error: U+3255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3256");
    },
    Error,
    "encode-error: U+3256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3257");
    },
    Error,
    "encode-error: U+3257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3258");
    },
    Error,
    "encode-error: U+3258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3259");
    },
    Error,
    "encode-error: U+3259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u325A");
    },
    Error,
    "encode-error: U+325A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u325B");
    },
    Error,
    "encode-error: U+325B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u325C");
    },
    Error,
    "encode-error: U+325C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u325D");
    },
    Error,
    "encode-error: U+325D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u325E");
    },
    Error,
    "encode-error: U+325E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u325F");
    },
    Error,
    "encode-error: U+325F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3260");
    },
    Error,
    "encode-error: U+3260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3261");
    },
    Error,
    "encode-error: U+3261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3262");
    },
    Error,
    "encode-error: U+3262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3263");
    },
    Error,
    "encode-error: U+3263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3264");
    },
    Error,
    "encode-error: U+3264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3265");
    },
    Error,
    "encode-error: U+3265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3266");
    },
    Error,
    "encode-error: U+3266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3267");
    },
    Error,
    "encode-error: U+3267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3268");
    },
    Error,
    "encode-error: U+3268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3269");
    },
    Error,
    "encode-error: U+3269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u326A");
    },
    Error,
    "encode-error: U+326A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u326B");
    },
    Error,
    "encode-error: U+326B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u326C");
    },
    Error,
    "encode-error: U+326C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u326D");
    },
    Error,
    "encode-error: U+326D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u326E");
    },
    Error,
    "encode-error: U+326E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u326F");
    },
    Error,
    "encode-error: U+326F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3270");
    },
    Error,
    "encode-error: U+3270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3271");
    },
    Error,
    "encode-error: U+3271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3272");
    },
    Error,
    "encode-error: U+3272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3273");
    },
    Error,
    "encode-error: U+3273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3274");
    },
    Error,
    "encode-error: U+3274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3275");
    },
    Error,
    "encode-error: U+3275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3276");
    },
    Error,
    "encode-error: U+3276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3277");
    },
    Error,
    "encode-error: U+3277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3278");
    },
    Error,
    "encode-error: U+3278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3279");
    },
    Error,
    "encode-error: U+3279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u327A");
    },
    Error,
    "encode-error: U+327A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u327B");
    },
    Error,
    "encode-error: U+327B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u327C");
    },
    Error,
    "encode-error: U+327C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u327D");
    },
    Error,
    "encode-error: U+327D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u327E");
    },
    Error,
    "encode-error: U+327E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u327F");
    },
    Error,
    "encode-error: U+327F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3280");
    },
    Error,
    "encode-error: U+3280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3281");
    },
    Error,
    "encode-error: U+3281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3282");
    },
    Error,
    "encode-error: U+3282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3283");
    },
    Error,
    "encode-error: U+3283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3284");
    },
    Error,
    "encode-error: U+3284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3285");
    },
    Error,
    "encode-error: U+3285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3286");
    },
    Error,
    "encode-error: U+3286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3287");
    },
    Error,
    "encode-error: U+3287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3288");
    },
    Error,
    "encode-error: U+3288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3289");
    },
    Error,
    "encode-error: U+3289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u328A");
    },
    Error,
    "encode-error: U+328A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u328B");
    },
    Error,
    "encode-error: U+328B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u328C");
    },
    Error,
    "encode-error: U+328C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u328D");
    },
    Error,
    "encode-error: U+328D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u328E");
    },
    Error,
    "encode-error: U+328E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u328F");
    },
    Error,
    "encode-error: U+328F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3290");
    },
    Error,
    "encode-error: U+3290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3291");
    },
    Error,
    "encode-error: U+3291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3292");
    },
    Error,
    "encode-error: U+3292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3293");
    },
    Error,
    "encode-error: U+3293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3294");
    },
    Error,
    "encode-error: U+3294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3295");
    },
    Error,
    "encode-error: U+3295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3296");
    },
    Error,
    "encode-error: U+3296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3297");
    },
    Error,
    "encode-error: U+3297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3298");
    },
    Error,
    "encode-error: U+3298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3299");
    },
    Error,
    "encode-error: U+3299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u329A");
    },
    Error,
    "encode-error: U+329A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u329B");
    },
    Error,
    "encode-error: U+329B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u329C");
    },
    Error,
    "encode-error: U+329C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u329D");
    },
    Error,
    "encode-error: U+329D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u329E");
    },
    Error,
    "encode-error: U+329E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u329F");
    },
    Error,
    "encode-error: U+329F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32A0");
    },
    Error,
    "encode-error: U+32A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32A1");
    },
    Error,
    "encode-error: U+32A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32A2");
    },
    Error,
    "encode-error: U+32A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32A3");
    },
    Error,
    "encode-error: U+32A3",
  );
  r = r &&
    ([...ms932Encoder.encode("㊤㊥㊦㊧㊨")].join(",") ===
      "135,133,135,134,135,135,135,136,135,137"); // U+32A4
  assertThrows(
    () => {
      ms932Encoder.encode("\u32A9");
    },
    Error,
    "encode-error: U+32A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32AA");
    },
    Error,
    "encode-error: U+32AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32AB");
    },
    Error,
    "encode-error: U+32AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32AC");
    },
    Error,
    "encode-error: U+32AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32AD");
    },
    Error,
    "encode-error: U+32AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32AE");
    },
    Error,
    "encode-error: U+32AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32AF");
    },
    Error,
    "encode-error: U+32AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32B0");
    },
    Error,
    "encode-error: U+32B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32B1");
    },
    Error,
    "encode-error: U+32B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32B2");
    },
    Error,
    "encode-error: U+32B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32B3");
    },
    Error,
    "encode-error: U+32B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32B4");
    },
    Error,
    "encode-error: U+32B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32B5");
    },
    Error,
    "encode-error: U+32B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32B6");
    },
    Error,
    "encode-error: U+32B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32B7");
    },
    Error,
    "encode-error: U+32B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32B8");
    },
    Error,
    "encode-error: U+32B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32B9");
    },
    Error,
    "encode-error: U+32B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32BA");
    },
    Error,
    "encode-error: U+32BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32BB");
    },
    Error,
    "encode-error: U+32BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32BC");
    },
    Error,
    "encode-error: U+32BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32BD");
    },
    Error,
    "encode-error: U+32BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32BE");
    },
    Error,
    "encode-error: U+32BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32BF");
    },
    Error,
    "encode-error: U+32BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32C0");
    },
    Error,
    "encode-error: U+32C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32C1");
    },
    Error,
    "encode-error: U+32C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32C2");
    },
    Error,
    "encode-error: U+32C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32C3");
    },
    Error,
    "encode-error: U+32C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32C4");
    },
    Error,
    "encode-error: U+32C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32C5");
    },
    Error,
    "encode-error: U+32C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32C6");
    },
    Error,
    "encode-error: U+32C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32C7");
    },
    Error,
    "encode-error: U+32C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32C8");
    },
    Error,
    "encode-error: U+32C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32C9");
    },
    Error,
    "encode-error: U+32C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32CA");
    },
    Error,
    "encode-error: U+32CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32CB");
    },
    Error,
    "encode-error: U+32CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32CC");
    },
    Error,
    "encode-error: U+32CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32CD");
    },
    Error,
    "encode-error: U+32CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32CE");
    },
    Error,
    "encode-error: U+32CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32CF");
    },
    Error,
    "encode-error: U+32CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32D0");
    },
    Error,
    "encode-error: U+32D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32D1");
    },
    Error,
    "encode-error: U+32D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32D2");
    },
    Error,
    "encode-error: U+32D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32D3");
    },
    Error,
    "encode-error: U+32D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32D4");
    },
    Error,
    "encode-error: U+32D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32D5");
    },
    Error,
    "encode-error: U+32D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32D6");
    },
    Error,
    "encode-error: U+32D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32D7");
    },
    Error,
    "encode-error: U+32D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32D8");
    },
    Error,
    "encode-error: U+32D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32D9");
    },
    Error,
    "encode-error: U+32D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32DA");
    },
    Error,
    "encode-error: U+32DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32DB");
    },
    Error,
    "encode-error: U+32DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32DC");
    },
    Error,
    "encode-error: U+32DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32DD");
    },
    Error,
    "encode-error: U+32DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32DE");
    },
    Error,
    "encode-error: U+32DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32DF");
    },
    Error,
    "encode-error: U+32DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32E0");
    },
    Error,
    "encode-error: U+32E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32E1");
    },
    Error,
    "encode-error: U+32E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32E2");
    },
    Error,
    "encode-error: U+32E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32E3");
    },
    Error,
    "encode-error: U+32E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32E4");
    },
    Error,
    "encode-error: U+32E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32E5");
    },
    Error,
    "encode-error: U+32E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32E6");
    },
    Error,
    "encode-error: U+32E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32E7");
    },
    Error,
    "encode-error: U+32E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32E8");
    },
    Error,
    "encode-error: U+32E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32E9");
    },
    Error,
    "encode-error: U+32E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32EA");
    },
    Error,
    "encode-error: U+32EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32EB");
    },
    Error,
    "encode-error: U+32EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32EC");
    },
    Error,
    "encode-error: U+32EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32ED");
    },
    Error,
    "encode-error: U+32ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32EE");
    },
    Error,
    "encode-error: U+32EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32EF");
    },
    Error,
    "encode-error: U+32EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32F0");
    },
    Error,
    "encode-error: U+32F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32F1");
    },
    Error,
    "encode-error: U+32F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32F2");
    },
    Error,
    "encode-error: U+32F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32F3");
    },
    Error,
    "encode-error: U+32F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32F4");
    },
    Error,
    "encode-error: U+32F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32F5");
    },
    Error,
    "encode-error: U+32F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32F6");
    },
    Error,
    "encode-error: U+32F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32F7");
    },
    Error,
    "encode-error: U+32F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32F8");
    },
    Error,
    "encode-error: U+32F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32F9");
    },
    Error,
    "encode-error: U+32F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32FA");
    },
    Error,
    "encode-error: U+32FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32FB");
    },
    Error,
    "encode-error: U+32FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32FC");
    },
    Error,
    "encode-error: U+32FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32FD");
    },
    Error,
    "encode-error: U+32FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32FE");
    },
    Error,
    "encode-error: U+32FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u32FF");
    },
    Error,
    "encode-error: U+32FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3300");
    },
    Error,
    "encode-error: U+3300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3301");
    },
    Error,
    "encode-error: U+3301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3302");
    },
    Error,
    "encode-error: U+3302",
  );
  r = r && ([...ms932Encoder.encode("㌃")].join(",") === "135,101"); // U+3303
  assertThrows(
    () => {
      ms932Encoder.encode("\u3304");
    },
    Error,
    "encode-error: U+3304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3305");
    },
    Error,
    "encode-error: U+3305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3306");
    },
    Error,
    "encode-error: U+3306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3307");
    },
    Error,
    "encode-error: U+3307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3308");
    },
    Error,
    "encode-error: U+3308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3309");
    },
    Error,
    "encode-error: U+3309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u330A");
    },
    Error,
    "encode-error: U+330A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u330B");
    },
    Error,
    "encode-error: U+330B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u330C");
    },
    Error,
    "encode-error: U+330C",
  );
  r = r && ([...ms932Encoder.encode("㌍")].join(",") === "135,105"); // U+330D
  assertThrows(
    () => {
      ms932Encoder.encode("\u330E");
    },
    Error,
    "encode-error: U+330E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u330F");
    },
    Error,
    "encode-error: U+330F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3310");
    },
    Error,
    "encode-error: U+3310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3311");
    },
    Error,
    "encode-error: U+3311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3312");
    },
    Error,
    "encode-error: U+3312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3313");
    },
    Error,
    "encode-error: U+3313",
  );
  r = r && ([...ms932Encoder.encode("㌔")].join(",") === "135,96"); // U+3314
  assertThrows(
    () => {
      ms932Encoder.encode("\u3315");
    },
    Error,
    "encode-error: U+3315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3316");
    },
    Error,
    "encode-error: U+3316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3317");
    },
    Error,
    "encode-error: U+3317",
  );
  r = r && ([...ms932Encoder.encode("㌘")].join(",") === "135,99"); // U+3318
  assertThrows(
    () => {
      ms932Encoder.encode("\u3319");
    },
    Error,
    "encode-error: U+3319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u331A");
    },
    Error,
    "encode-error: U+331A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u331B");
    },
    Error,
    "encode-error: U+331B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u331C");
    },
    Error,
    "encode-error: U+331C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u331D");
    },
    Error,
    "encode-error: U+331D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u331E");
    },
    Error,
    "encode-error: U+331E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u331F");
    },
    Error,
    "encode-error: U+331F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3320");
    },
    Error,
    "encode-error: U+3320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3321");
    },
    Error,
    "encode-error: U+3321",
  );
  r = r && ([...ms932Encoder.encode("㌢㌣")].join(",") === "135,97,135,107"); // U+3322
  assertThrows(
    () => {
      ms932Encoder.encode("\u3324");
    },
    Error,
    "encode-error: U+3324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3325");
    },
    Error,
    "encode-error: U+3325",
  );
  r = r && ([...ms932Encoder.encode("㌦㌧")].join(",") === "135,106,135,100"); // U+3326
  assertThrows(
    () => {
      ms932Encoder.encode("\u3328");
    },
    Error,
    "encode-error: U+3328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3329");
    },
    Error,
    "encode-error: U+3329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u332A");
    },
    Error,
    "encode-error: U+332A",
  );
  r = r && ([...ms932Encoder.encode("㌫")].join(",") === "135,108"); // U+332B
  assertThrows(
    () => {
      ms932Encoder.encode("\u332C");
    },
    Error,
    "encode-error: U+332C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u332D");
    },
    Error,
    "encode-error: U+332D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u332E");
    },
    Error,
    "encode-error: U+332E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u332F");
    },
    Error,
    "encode-error: U+332F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3330");
    },
    Error,
    "encode-error: U+3330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3331");
    },
    Error,
    "encode-error: U+3331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3332");
    },
    Error,
    "encode-error: U+3332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3333");
    },
    Error,
    "encode-error: U+3333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3334");
    },
    Error,
    "encode-error: U+3334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3335");
    },
    Error,
    "encode-error: U+3335",
  );
  r = r && ([...ms932Encoder.encode("㌶")].join(",") === "135,102"); // U+3336
  assertThrows(
    () => {
      ms932Encoder.encode("\u3337");
    },
    Error,
    "encode-error: U+3337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3338");
    },
    Error,
    "encode-error: U+3338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3339");
    },
    Error,
    "encode-error: U+3339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u333A");
    },
    Error,
    "encode-error: U+333A",
  );
  r = r && ([...ms932Encoder.encode("㌻")].join(",") === "135,110"); // U+333B
  assertThrows(
    () => {
      ms932Encoder.encode("\u333C");
    },
    Error,
    "encode-error: U+333C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u333D");
    },
    Error,
    "encode-error: U+333D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u333E");
    },
    Error,
    "encode-error: U+333E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u333F");
    },
    Error,
    "encode-error: U+333F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3340");
    },
    Error,
    "encode-error: U+3340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3341");
    },
    Error,
    "encode-error: U+3341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3342");
    },
    Error,
    "encode-error: U+3342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3343");
    },
    Error,
    "encode-error: U+3343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3344");
    },
    Error,
    "encode-error: U+3344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3345");
    },
    Error,
    "encode-error: U+3345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3346");
    },
    Error,
    "encode-error: U+3346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3347");
    },
    Error,
    "encode-error: U+3347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3348");
    },
    Error,
    "encode-error: U+3348",
  );
  r = r && ([...ms932Encoder.encode("㍉㍊")].join(",") === "135,95,135,109"); // U+3349
  assertThrows(
    () => {
      ms932Encoder.encode("\u334B");
    },
    Error,
    "encode-error: U+334B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u334C");
    },
    Error,
    "encode-error: U+334C",
  );
  r = r && ([...ms932Encoder.encode("㍍")].join(",") === "135,98"); // U+334D
  assertThrows(
    () => {
      ms932Encoder.encode("\u334E");
    },
    Error,
    "encode-error: U+334E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u334F");
    },
    Error,
    "encode-error: U+334F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3350");
    },
    Error,
    "encode-error: U+3350",
  );
  r = r && ([...ms932Encoder.encode("㍑")].join(",") === "135,103"); // U+3351
  assertThrows(
    () => {
      ms932Encoder.encode("\u3352");
    },
    Error,
    "encode-error: U+3352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3353");
    },
    Error,
    "encode-error: U+3353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3354");
    },
    Error,
    "encode-error: U+3354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3355");
    },
    Error,
    "encode-error: U+3355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3356");
    },
    Error,
    "encode-error: U+3356",
  );
  r = r && ([...ms932Encoder.encode("㍗")].join(",") === "135,104"); // U+3357
  assertThrows(
    () => {
      ms932Encoder.encode("\u3358");
    },
    Error,
    "encode-error: U+3358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3359");
    },
    Error,
    "encode-error: U+3359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u335A");
    },
    Error,
    "encode-error: U+335A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u335B");
    },
    Error,
    "encode-error: U+335B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u335C");
    },
    Error,
    "encode-error: U+335C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u335D");
    },
    Error,
    "encode-error: U+335D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u335E");
    },
    Error,
    "encode-error: U+335E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u335F");
    },
    Error,
    "encode-error: U+335F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3360");
    },
    Error,
    "encode-error: U+3360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3361");
    },
    Error,
    "encode-error: U+3361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3362");
    },
    Error,
    "encode-error: U+3362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3363");
    },
    Error,
    "encode-error: U+3363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3364");
    },
    Error,
    "encode-error: U+3364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3365");
    },
    Error,
    "encode-error: U+3365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3366");
    },
    Error,
    "encode-error: U+3366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3367");
    },
    Error,
    "encode-error: U+3367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3368");
    },
    Error,
    "encode-error: U+3368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3369");
    },
    Error,
    "encode-error: U+3369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u336A");
    },
    Error,
    "encode-error: U+336A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u336B");
    },
    Error,
    "encode-error: U+336B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u336C");
    },
    Error,
    "encode-error: U+336C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u336D");
    },
    Error,
    "encode-error: U+336D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u336E");
    },
    Error,
    "encode-error: U+336E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u336F");
    },
    Error,
    "encode-error: U+336F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3370");
    },
    Error,
    "encode-error: U+3370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3371");
    },
    Error,
    "encode-error: U+3371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3372");
    },
    Error,
    "encode-error: U+3372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3373");
    },
    Error,
    "encode-error: U+3373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3374");
    },
    Error,
    "encode-error: U+3374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3375");
    },
    Error,
    "encode-error: U+3375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3376");
    },
    Error,
    "encode-error: U+3376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3377");
    },
    Error,
    "encode-error: U+3377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3378");
    },
    Error,
    "encode-error: U+3378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3379");
    },
    Error,
    "encode-error: U+3379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u337A");
    },
    Error,
    "encode-error: U+337A",
  );
  r = r &&
    ([...ms932Encoder.encode("㍻㍼㍽㍾")].join(",") ===
      "135,126,135,143,135,142,135,141"); // U+337B
  assertThrows(
    () => {
      ms932Encoder.encode("\u337F");
    },
    Error,
    "encode-error: U+337F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3380");
    },
    Error,
    "encode-error: U+3380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3381");
    },
    Error,
    "encode-error: U+3381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3382");
    },
    Error,
    "encode-error: U+3382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3383");
    },
    Error,
    "encode-error: U+3383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3384");
    },
    Error,
    "encode-error: U+3384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3385");
    },
    Error,
    "encode-error: U+3385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3386");
    },
    Error,
    "encode-error: U+3386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3387");
    },
    Error,
    "encode-error: U+3387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3388");
    },
    Error,
    "encode-error: U+3388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3389");
    },
    Error,
    "encode-error: U+3389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u338A");
    },
    Error,
    "encode-error: U+338A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u338B");
    },
    Error,
    "encode-error: U+338B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u338C");
    },
    Error,
    "encode-error: U+338C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u338D");
    },
    Error,
    "encode-error: U+338D",
  );
  r = r && ([...ms932Encoder.encode("㎎㎏")].join(",") === "135,114,135,115"); // U+338E
  assertThrows(
    () => {
      ms932Encoder.encode("\u3390");
    },
    Error,
    "encode-error: U+3390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3391");
    },
    Error,
    "encode-error: U+3391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3392");
    },
    Error,
    "encode-error: U+3392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3393");
    },
    Error,
    "encode-error: U+3393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3394");
    },
    Error,
    "encode-error: U+3394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3395");
    },
    Error,
    "encode-error: U+3395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3396");
    },
    Error,
    "encode-error: U+3396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3397");
    },
    Error,
    "encode-error: U+3397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3398");
    },
    Error,
    "encode-error: U+3398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3399");
    },
    Error,
    "encode-error: U+3399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u339A");
    },
    Error,
    "encode-error: U+339A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u339B");
    },
    Error,
    "encode-error: U+339B",
  );
  r = r &&
    ([...ms932Encoder.encode("㎜㎝㎞")].join(",") ===
      "135,111,135,112,135,113"); // U+339C
  assertThrows(
    () => {
      ms932Encoder.encode("\u339F");
    },
    Error,
    "encode-error: U+339F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33A0");
    },
    Error,
    "encode-error: U+33A0",
  );
  r = r && ([...ms932Encoder.encode("㎡")].join(",") === "135,117"); // U+33A1
  assertThrows(
    () => {
      ms932Encoder.encode("\u33A2");
    },
    Error,
    "encode-error: U+33A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33A3");
    },
    Error,
    "encode-error: U+33A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33A4");
    },
    Error,
    "encode-error: U+33A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33A5");
    },
    Error,
    "encode-error: U+33A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33A6");
    },
    Error,
    "encode-error: U+33A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33A7");
    },
    Error,
    "encode-error: U+33A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33A8");
    },
    Error,
    "encode-error: U+33A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33A9");
    },
    Error,
    "encode-error: U+33A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33AA");
    },
    Error,
    "encode-error: U+33AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33AB");
    },
    Error,
    "encode-error: U+33AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33AC");
    },
    Error,
    "encode-error: U+33AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33AD");
    },
    Error,
    "encode-error: U+33AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33AE");
    },
    Error,
    "encode-error: U+33AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33AF");
    },
    Error,
    "encode-error: U+33AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33B0");
    },
    Error,
    "encode-error: U+33B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33B1");
    },
    Error,
    "encode-error: U+33B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33B2");
    },
    Error,
    "encode-error: U+33B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33B3");
    },
    Error,
    "encode-error: U+33B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33B4");
    },
    Error,
    "encode-error: U+33B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33B5");
    },
    Error,
    "encode-error: U+33B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33B6");
    },
    Error,
    "encode-error: U+33B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33B7");
    },
    Error,
    "encode-error: U+33B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33B8");
    },
    Error,
    "encode-error: U+33B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33B9");
    },
    Error,
    "encode-error: U+33B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33BA");
    },
    Error,
    "encode-error: U+33BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33BB");
    },
    Error,
    "encode-error: U+33BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33BC");
    },
    Error,
    "encode-error: U+33BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33BD");
    },
    Error,
    "encode-error: U+33BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33BE");
    },
    Error,
    "encode-error: U+33BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33BF");
    },
    Error,
    "encode-error: U+33BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33C0");
    },
    Error,
    "encode-error: U+33C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33C1");
    },
    Error,
    "encode-error: U+33C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33C2");
    },
    Error,
    "encode-error: U+33C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33C3");
    },
    Error,
    "encode-error: U+33C3",
  );
  r = r && ([...ms932Encoder.encode("㏄")].join(",") === "135,116"); // U+33C4
  assertThrows(
    () => {
      ms932Encoder.encode("\u33C5");
    },
    Error,
    "encode-error: U+33C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33C6");
    },
    Error,
    "encode-error: U+33C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33C7");
    },
    Error,
    "encode-error: U+33C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33C8");
    },
    Error,
    "encode-error: U+33C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33C9");
    },
    Error,
    "encode-error: U+33C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33CA");
    },
    Error,
    "encode-error: U+33CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33CB");
    },
    Error,
    "encode-error: U+33CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33CC");
    },
    Error,
    "encode-error: U+33CC",
  );
  r = r && ([...ms932Encoder.encode("㏍")].join(",") === "135,131"); // U+33CD
  assertThrows(
    () => {
      ms932Encoder.encode("\u33CE");
    },
    Error,
    "encode-error: U+33CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33CF");
    },
    Error,
    "encode-error: U+33CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33D0");
    },
    Error,
    "encode-error: U+33D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33D1");
    },
    Error,
    "encode-error: U+33D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33D2");
    },
    Error,
    "encode-error: U+33D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33D3");
    },
    Error,
    "encode-error: U+33D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33D4");
    },
    Error,
    "encode-error: U+33D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33D5");
    },
    Error,
    "encode-error: U+33D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33D6");
    },
    Error,
    "encode-error: U+33D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33D7");
    },
    Error,
    "encode-error: U+33D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33D8");
    },
    Error,
    "encode-error: U+33D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33D9");
    },
    Error,
    "encode-error: U+33D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33DA");
    },
    Error,
    "encode-error: U+33DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33DB");
    },
    Error,
    "encode-error: U+33DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33DC");
    },
    Error,
    "encode-error: U+33DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33DD");
    },
    Error,
    "encode-error: U+33DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33DE");
    },
    Error,
    "encode-error: U+33DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33DF");
    },
    Error,
    "encode-error: U+33DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33E0");
    },
    Error,
    "encode-error: U+33E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33E1");
    },
    Error,
    "encode-error: U+33E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33E2");
    },
    Error,
    "encode-error: U+33E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33E3");
    },
    Error,
    "encode-error: U+33E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33E4");
    },
    Error,
    "encode-error: U+33E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33E5");
    },
    Error,
    "encode-error: U+33E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33E6");
    },
    Error,
    "encode-error: U+33E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33E7");
    },
    Error,
    "encode-error: U+33E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33E8");
    },
    Error,
    "encode-error: U+33E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33E9");
    },
    Error,
    "encode-error: U+33E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33EA");
    },
    Error,
    "encode-error: U+33EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33EB");
    },
    Error,
    "encode-error: U+33EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33EC");
    },
    Error,
    "encode-error: U+33EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33ED");
    },
    Error,
    "encode-error: U+33ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33EE");
    },
    Error,
    "encode-error: U+33EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33EF");
    },
    Error,
    "encode-error: U+33EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33F0");
    },
    Error,
    "encode-error: U+33F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33F1");
    },
    Error,
    "encode-error: U+33F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33F2");
    },
    Error,
    "encode-error: U+33F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33F3");
    },
    Error,
    "encode-error: U+33F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33F4");
    },
    Error,
    "encode-error: U+33F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33F5");
    },
    Error,
    "encode-error: U+33F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33F6");
    },
    Error,
    "encode-error: U+33F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33F7");
    },
    Error,
    "encode-error: U+33F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33F8");
    },
    Error,
    "encode-error: U+33F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33F9");
    },
    Error,
    "encode-error: U+33F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33FA");
    },
    Error,
    "encode-error: U+33FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33FB");
    },
    Error,
    "encode-error: U+33FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33FC");
    },
    Error,
    "encode-error: U+33FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33FD");
    },
    Error,
    "encode-error: U+33FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33FE");
    },
    Error,
    "encode-error: U+33FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u33FF");
    },
    Error,
    "encode-error: U+33FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3400");
    },
    Error,
    "encode-error: U+3400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3401");
    },
    Error,
    "encode-error: U+3401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3402");
    },
    Error,
    "encode-error: U+3402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3403");
    },
    Error,
    "encode-error: U+3403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3404");
    },
    Error,
    "encode-error: U+3404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3405");
    },
    Error,
    "encode-error: U+3405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3406");
    },
    Error,
    "encode-error: U+3406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3407");
    },
    Error,
    "encode-error: U+3407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3408");
    },
    Error,
    "encode-error: U+3408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3409");
    },
    Error,
    "encode-error: U+3409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u340A");
    },
    Error,
    "encode-error: U+340A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u340B");
    },
    Error,
    "encode-error: U+340B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u340C");
    },
    Error,
    "encode-error: U+340C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u340D");
    },
    Error,
    "encode-error: U+340D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u340E");
    },
    Error,
    "encode-error: U+340E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u340F");
    },
    Error,
    "encode-error: U+340F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3410");
    },
    Error,
    "encode-error: U+3410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3411");
    },
    Error,
    "encode-error: U+3411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3412");
    },
    Error,
    "encode-error: U+3412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3413");
    },
    Error,
    "encode-error: U+3413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3414");
    },
    Error,
    "encode-error: U+3414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3415");
    },
    Error,
    "encode-error: U+3415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3416");
    },
    Error,
    "encode-error: U+3416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3417");
    },
    Error,
    "encode-error: U+3417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3418");
    },
    Error,
    "encode-error: U+3418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3419");
    },
    Error,
    "encode-error: U+3419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u341A");
    },
    Error,
    "encode-error: U+341A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u341B");
    },
    Error,
    "encode-error: U+341B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u341C");
    },
    Error,
    "encode-error: U+341C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u341D");
    },
    Error,
    "encode-error: U+341D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u341E");
    },
    Error,
    "encode-error: U+341E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u341F");
    },
    Error,
    "encode-error: U+341F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3420");
    },
    Error,
    "encode-error: U+3420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3421");
    },
    Error,
    "encode-error: U+3421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3422");
    },
    Error,
    "encode-error: U+3422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3423");
    },
    Error,
    "encode-error: U+3423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3424");
    },
    Error,
    "encode-error: U+3424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3425");
    },
    Error,
    "encode-error: U+3425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3426");
    },
    Error,
    "encode-error: U+3426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3427");
    },
    Error,
    "encode-error: U+3427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3428");
    },
    Error,
    "encode-error: U+3428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3429");
    },
    Error,
    "encode-error: U+3429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u342A");
    },
    Error,
    "encode-error: U+342A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u342B");
    },
    Error,
    "encode-error: U+342B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u342C");
    },
    Error,
    "encode-error: U+342C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u342D");
    },
    Error,
    "encode-error: U+342D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u342E");
    },
    Error,
    "encode-error: U+342E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u342F");
    },
    Error,
    "encode-error: U+342F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3430");
    },
    Error,
    "encode-error: U+3430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3431");
    },
    Error,
    "encode-error: U+3431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3432");
    },
    Error,
    "encode-error: U+3432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3433");
    },
    Error,
    "encode-error: U+3433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3434");
    },
    Error,
    "encode-error: U+3434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3435");
    },
    Error,
    "encode-error: U+3435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3436");
    },
    Error,
    "encode-error: U+3436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3437");
    },
    Error,
    "encode-error: U+3437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3438");
    },
    Error,
    "encode-error: U+3438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3439");
    },
    Error,
    "encode-error: U+3439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u343A");
    },
    Error,
    "encode-error: U+343A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u343B");
    },
    Error,
    "encode-error: U+343B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u343C");
    },
    Error,
    "encode-error: U+343C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u343D");
    },
    Error,
    "encode-error: U+343D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u343E");
    },
    Error,
    "encode-error: U+343E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u343F");
    },
    Error,
    "encode-error: U+343F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3440");
    },
    Error,
    "encode-error: U+3440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3441");
    },
    Error,
    "encode-error: U+3441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3442");
    },
    Error,
    "encode-error: U+3442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3443");
    },
    Error,
    "encode-error: U+3443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3444");
    },
    Error,
    "encode-error: U+3444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3445");
    },
    Error,
    "encode-error: U+3445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3446");
    },
    Error,
    "encode-error: U+3446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3447");
    },
    Error,
    "encode-error: U+3447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3448");
    },
    Error,
    "encode-error: U+3448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3449");
    },
    Error,
    "encode-error: U+3449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u344A");
    },
    Error,
    "encode-error: U+344A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u344B");
    },
    Error,
    "encode-error: U+344B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u344C");
    },
    Error,
    "encode-error: U+344C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u344D");
    },
    Error,
    "encode-error: U+344D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u344E");
    },
    Error,
    "encode-error: U+344E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u344F");
    },
    Error,
    "encode-error: U+344F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3450");
    },
    Error,
    "encode-error: U+3450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3451");
    },
    Error,
    "encode-error: U+3451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3452");
    },
    Error,
    "encode-error: U+3452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3453");
    },
    Error,
    "encode-error: U+3453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3454");
    },
    Error,
    "encode-error: U+3454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3455");
    },
    Error,
    "encode-error: U+3455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3456");
    },
    Error,
    "encode-error: U+3456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3457");
    },
    Error,
    "encode-error: U+3457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3458");
    },
    Error,
    "encode-error: U+3458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3459");
    },
    Error,
    "encode-error: U+3459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u345A");
    },
    Error,
    "encode-error: U+345A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u345B");
    },
    Error,
    "encode-error: U+345B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u345C");
    },
    Error,
    "encode-error: U+345C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u345D");
    },
    Error,
    "encode-error: U+345D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u345E");
    },
    Error,
    "encode-error: U+345E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u345F");
    },
    Error,
    "encode-error: U+345F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3460");
    },
    Error,
    "encode-error: U+3460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3461");
    },
    Error,
    "encode-error: U+3461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3462");
    },
    Error,
    "encode-error: U+3462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3463");
    },
    Error,
    "encode-error: U+3463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3464");
    },
    Error,
    "encode-error: U+3464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3465");
    },
    Error,
    "encode-error: U+3465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3466");
    },
    Error,
    "encode-error: U+3466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3467");
    },
    Error,
    "encode-error: U+3467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3468");
    },
    Error,
    "encode-error: U+3468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3469");
    },
    Error,
    "encode-error: U+3469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u346A");
    },
    Error,
    "encode-error: U+346A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u346B");
    },
    Error,
    "encode-error: U+346B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u346C");
    },
    Error,
    "encode-error: U+346C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u346D");
    },
    Error,
    "encode-error: U+346D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u346E");
    },
    Error,
    "encode-error: U+346E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u346F");
    },
    Error,
    "encode-error: U+346F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3470");
    },
    Error,
    "encode-error: U+3470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3471");
    },
    Error,
    "encode-error: U+3471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3472");
    },
    Error,
    "encode-error: U+3472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3473");
    },
    Error,
    "encode-error: U+3473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3474");
    },
    Error,
    "encode-error: U+3474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3475");
    },
    Error,
    "encode-error: U+3475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3476");
    },
    Error,
    "encode-error: U+3476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3477");
    },
    Error,
    "encode-error: U+3477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3478");
    },
    Error,
    "encode-error: U+3478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3479");
    },
    Error,
    "encode-error: U+3479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u347A");
    },
    Error,
    "encode-error: U+347A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u347B");
    },
    Error,
    "encode-error: U+347B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u347C");
    },
    Error,
    "encode-error: U+347C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u347D");
    },
    Error,
    "encode-error: U+347D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u347E");
    },
    Error,
    "encode-error: U+347E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u347F");
    },
    Error,
    "encode-error: U+347F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3480");
    },
    Error,
    "encode-error: U+3480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3481");
    },
    Error,
    "encode-error: U+3481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3482");
    },
    Error,
    "encode-error: U+3482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3483");
    },
    Error,
    "encode-error: U+3483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3484");
    },
    Error,
    "encode-error: U+3484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3485");
    },
    Error,
    "encode-error: U+3485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3486");
    },
    Error,
    "encode-error: U+3486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3487");
    },
    Error,
    "encode-error: U+3487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3488");
    },
    Error,
    "encode-error: U+3488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3489");
    },
    Error,
    "encode-error: U+3489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u348A");
    },
    Error,
    "encode-error: U+348A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u348B");
    },
    Error,
    "encode-error: U+348B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u348C");
    },
    Error,
    "encode-error: U+348C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u348D");
    },
    Error,
    "encode-error: U+348D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u348E");
    },
    Error,
    "encode-error: U+348E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u348F");
    },
    Error,
    "encode-error: U+348F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3490");
    },
    Error,
    "encode-error: U+3490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3491");
    },
    Error,
    "encode-error: U+3491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3492");
    },
    Error,
    "encode-error: U+3492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3493");
    },
    Error,
    "encode-error: U+3493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3494");
    },
    Error,
    "encode-error: U+3494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3495");
    },
    Error,
    "encode-error: U+3495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3496");
    },
    Error,
    "encode-error: U+3496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3497");
    },
    Error,
    "encode-error: U+3497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3498");
    },
    Error,
    "encode-error: U+3498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3499");
    },
    Error,
    "encode-error: U+3499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u349A");
    },
    Error,
    "encode-error: U+349A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u349B");
    },
    Error,
    "encode-error: U+349B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u349C");
    },
    Error,
    "encode-error: U+349C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u349D");
    },
    Error,
    "encode-error: U+349D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u349E");
    },
    Error,
    "encode-error: U+349E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u349F");
    },
    Error,
    "encode-error: U+349F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34A0");
    },
    Error,
    "encode-error: U+34A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34A1");
    },
    Error,
    "encode-error: U+34A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34A2");
    },
    Error,
    "encode-error: U+34A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34A3");
    },
    Error,
    "encode-error: U+34A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34A4");
    },
    Error,
    "encode-error: U+34A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34A5");
    },
    Error,
    "encode-error: U+34A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34A6");
    },
    Error,
    "encode-error: U+34A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34A7");
    },
    Error,
    "encode-error: U+34A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34A8");
    },
    Error,
    "encode-error: U+34A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34A9");
    },
    Error,
    "encode-error: U+34A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34AA");
    },
    Error,
    "encode-error: U+34AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34AB");
    },
    Error,
    "encode-error: U+34AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34AC");
    },
    Error,
    "encode-error: U+34AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34AD");
    },
    Error,
    "encode-error: U+34AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34AE");
    },
    Error,
    "encode-error: U+34AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34AF");
    },
    Error,
    "encode-error: U+34AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34B0");
    },
    Error,
    "encode-error: U+34B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34B1");
    },
    Error,
    "encode-error: U+34B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34B2");
    },
    Error,
    "encode-error: U+34B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34B3");
    },
    Error,
    "encode-error: U+34B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34B4");
    },
    Error,
    "encode-error: U+34B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34B5");
    },
    Error,
    "encode-error: U+34B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34B6");
    },
    Error,
    "encode-error: U+34B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34B7");
    },
    Error,
    "encode-error: U+34B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34B8");
    },
    Error,
    "encode-error: U+34B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34B9");
    },
    Error,
    "encode-error: U+34B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34BA");
    },
    Error,
    "encode-error: U+34BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34BB");
    },
    Error,
    "encode-error: U+34BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34BC");
    },
    Error,
    "encode-error: U+34BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34BD");
    },
    Error,
    "encode-error: U+34BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34BE");
    },
    Error,
    "encode-error: U+34BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34BF");
    },
    Error,
    "encode-error: U+34BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34C0");
    },
    Error,
    "encode-error: U+34C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34C1");
    },
    Error,
    "encode-error: U+34C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34C2");
    },
    Error,
    "encode-error: U+34C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34C3");
    },
    Error,
    "encode-error: U+34C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34C4");
    },
    Error,
    "encode-error: U+34C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34C5");
    },
    Error,
    "encode-error: U+34C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34C6");
    },
    Error,
    "encode-error: U+34C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34C7");
    },
    Error,
    "encode-error: U+34C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34C8");
    },
    Error,
    "encode-error: U+34C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34C9");
    },
    Error,
    "encode-error: U+34C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34CA");
    },
    Error,
    "encode-error: U+34CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34CB");
    },
    Error,
    "encode-error: U+34CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34CC");
    },
    Error,
    "encode-error: U+34CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34CD");
    },
    Error,
    "encode-error: U+34CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34CE");
    },
    Error,
    "encode-error: U+34CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34CF");
    },
    Error,
    "encode-error: U+34CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34D0");
    },
    Error,
    "encode-error: U+34D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34D1");
    },
    Error,
    "encode-error: U+34D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34D2");
    },
    Error,
    "encode-error: U+34D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34D3");
    },
    Error,
    "encode-error: U+34D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34D4");
    },
    Error,
    "encode-error: U+34D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34D5");
    },
    Error,
    "encode-error: U+34D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34D6");
    },
    Error,
    "encode-error: U+34D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34D7");
    },
    Error,
    "encode-error: U+34D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34D8");
    },
    Error,
    "encode-error: U+34D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34D9");
    },
    Error,
    "encode-error: U+34D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34DA");
    },
    Error,
    "encode-error: U+34DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34DB");
    },
    Error,
    "encode-error: U+34DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34DC");
    },
    Error,
    "encode-error: U+34DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34DD");
    },
    Error,
    "encode-error: U+34DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34DE");
    },
    Error,
    "encode-error: U+34DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34DF");
    },
    Error,
    "encode-error: U+34DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34E0");
    },
    Error,
    "encode-error: U+34E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34E1");
    },
    Error,
    "encode-error: U+34E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34E2");
    },
    Error,
    "encode-error: U+34E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34E3");
    },
    Error,
    "encode-error: U+34E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34E4");
    },
    Error,
    "encode-error: U+34E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34E5");
    },
    Error,
    "encode-error: U+34E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34E6");
    },
    Error,
    "encode-error: U+34E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34E7");
    },
    Error,
    "encode-error: U+34E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34E8");
    },
    Error,
    "encode-error: U+34E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34E9");
    },
    Error,
    "encode-error: U+34E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34EA");
    },
    Error,
    "encode-error: U+34EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34EB");
    },
    Error,
    "encode-error: U+34EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34EC");
    },
    Error,
    "encode-error: U+34EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34ED");
    },
    Error,
    "encode-error: U+34ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34EE");
    },
    Error,
    "encode-error: U+34EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34EF");
    },
    Error,
    "encode-error: U+34EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34F0");
    },
    Error,
    "encode-error: U+34F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34F1");
    },
    Error,
    "encode-error: U+34F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34F2");
    },
    Error,
    "encode-error: U+34F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34F3");
    },
    Error,
    "encode-error: U+34F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34F4");
    },
    Error,
    "encode-error: U+34F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34F5");
    },
    Error,
    "encode-error: U+34F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34F6");
    },
    Error,
    "encode-error: U+34F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34F7");
    },
    Error,
    "encode-error: U+34F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34F8");
    },
    Error,
    "encode-error: U+34F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34F9");
    },
    Error,
    "encode-error: U+34F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34FA");
    },
    Error,
    "encode-error: U+34FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34FB");
    },
    Error,
    "encode-error: U+34FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34FC");
    },
    Error,
    "encode-error: U+34FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34FD");
    },
    Error,
    "encode-error: U+34FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34FE");
    },
    Error,
    "encode-error: U+34FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u34FF");
    },
    Error,
    "encode-error: U+34FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3500");
    },
    Error,
    "encode-error: U+3500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3501");
    },
    Error,
    "encode-error: U+3501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3502");
    },
    Error,
    "encode-error: U+3502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3503");
    },
    Error,
    "encode-error: U+3503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3504");
    },
    Error,
    "encode-error: U+3504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3505");
    },
    Error,
    "encode-error: U+3505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3506");
    },
    Error,
    "encode-error: U+3506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3507");
    },
    Error,
    "encode-error: U+3507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3508");
    },
    Error,
    "encode-error: U+3508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3509");
    },
    Error,
    "encode-error: U+3509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u350A");
    },
    Error,
    "encode-error: U+350A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u350B");
    },
    Error,
    "encode-error: U+350B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u350C");
    },
    Error,
    "encode-error: U+350C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u350D");
    },
    Error,
    "encode-error: U+350D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u350E");
    },
    Error,
    "encode-error: U+350E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u350F");
    },
    Error,
    "encode-error: U+350F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3510");
    },
    Error,
    "encode-error: U+3510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3511");
    },
    Error,
    "encode-error: U+3511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3512");
    },
    Error,
    "encode-error: U+3512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3513");
    },
    Error,
    "encode-error: U+3513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3514");
    },
    Error,
    "encode-error: U+3514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3515");
    },
    Error,
    "encode-error: U+3515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3516");
    },
    Error,
    "encode-error: U+3516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3517");
    },
    Error,
    "encode-error: U+3517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3518");
    },
    Error,
    "encode-error: U+3518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3519");
    },
    Error,
    "encode-error: U+3519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u351A");
    },
    Error,
    "encode-error: U+351A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u351B");
    },
    Error,
    "encode-error: U+351B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u351C");
    },
    Error,
    "encode-error: U+351C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u351D");
    },
    Error,
    "encode-error: U+351D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u351E");
    },
    Error,
    "encode-error: U+351E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u351F");
    },
    Error,
    "encode-error: U+351F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3520");
    },
    Error,
    "encode-error: U+3520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3521");
    },
    Error,
    "encode-error: U+3521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3522");
    },
    Error,
    "encode-error: U+3522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3523");
    },
    Error,
    "encode-error: U+3523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3524");
    },
    Error,
    "encode-error: U+3524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3525");
    },
    Error,
    "encode-error: U+3525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3526");
    },
    Error,
    "encode-error: U+3526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3527");
    },
    Error,
    "encode-error: U+3527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3528");
    },
    Error,
    "encode-error: U+3528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3529");
    },
    Error,
    "encode-error: U+3529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u352A");
    },
    Error,
    "encode-error: U+352A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u352B");
    },
    Error,
    "encode-error: U+352B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u352C");
    },
    Error,
    "encode-error: U+352C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u352D");
    },
    Error,
    "encode-error: U+352D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u352E");
    },
    Error,
    "encode-error: U+352E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u352F");
    },
    Error,
    "encode-error: U+352F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3530");
    },
    Error,
    "encode-error: U+3530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3531");
    },
    Error,
    "encode-error: U+3531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3532");
    },
    Error,
    "encode-error: U+3532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3533");
    },
    Error,
    "encode-error: U+3533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3534");
    },
    Error,
    "encode-error: U+3534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3535");
    },
    Error,
    "encode-error: U+3535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3536");
    },
    Error,
    "encode-error: U+3536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3537");
    },
    Error,
    "encode-error: U+3537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3538");
    },
    Error,
    "encode-error: U+3538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3539");
    },
    Error,
    "encode-error: U+3539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u353A");
    },
    Error,
    "encode-error: U+353A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u353B");
    },
    Error,
    "encode-error: U+353B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u353C");
    },
    Error,
    "encode-error: U+353C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u353D");
    },
    Error,
    "encode-error: U+353D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u353E");
    },
    Error,
    "encode-error: U+353E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u353F");
    },
    Error,
    "encode-error: U+353F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3540");
    },
    Error,
    "encode-error: U+3540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3541");
    },
    Error,
    "encode-error: U+3541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3542");
    },
    Error,
    "encode-error: U+3542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3543");
    },
    Error,
    "encode-error: U+3543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3544");
    },
    Error,
    "encode-error: U+3544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3545");
    },
    Error,
    "encode-error: U+3545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3546");
    },
    Error,
    "encode-error: U+3546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3547");
    },
    Error,
    "encode-error: U+3547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3548");
    },
    Error,
    "encode-error: U+3548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3549");
    },
    Error,
    "encode-error: U+3549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u354A");
    },
    Error,
    "encode-error: U+354A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u354B");
    },
    Error,
    "encode-error: U+354B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u354C");
    },
    Error,
    "encode-error: U+354C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u354D");
    },
    Error,
    "encode-error: U+354D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u354E");
    },
    Error,
    "encode-error: U+354E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u354F");
    },
    Error,
    "encode-error: U+354F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3550");
    },
    Error,
    "encode-error: U+3550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3551");
    },
    Error,
    "encode-error: U+3551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3552");
    },
    Error,
    "encode-error: U+3552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3553");
    },
    Error,
    "encode-error: U+3553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3554");
    },
    Error,
    "encode-error: U+3554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3555");
    },
    Error,
    "encode-error: U+3555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3556");
    },
    Error,
    "encode-error: U+3556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3557");
    },
    Error,
    "encode-error: U+3557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3558");
    },
    Error,
    "encode-error: U+3558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3559");
    },
    Error,
    "encode-error: U+3559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u355A");
    },
    Error,
    "encode-error: U+355A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u355B");
    },
    Error,
    "encode-error: U+355B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u355C");
    },
    Error,
    "encode-error: U+355C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u355D");
    },
    Error,
    "encode-error: U+355D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u355E");
    },
    Error,
    "encode-error: U+355E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u355F");
    },
    Error,
    "encode-error: U+355F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3560");
    },
    Error,
    "encode-error: U+3560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3561");
    },
    Error,
    "encode-error: U+3561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3562");
    },
    Error,
    "encode-error: U+3562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3563");
    },
    Error,
    "encode-error: U+3563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3564");
    },
    Error,
    "encode-error: U+3564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3565");
    },
    Error,
    "encode-error: U+3565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3566");
    },
    Error,
    "encode-error: U+3566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3567");
    },
    Error,
    "encode-error: U+3567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3568");
    },
    Error,
    "encode-error: U+3568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3569");
    },
    Error,
    "encode-error: U+3569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u356A");
    },
    Error,
    "encode-error: U+356A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u356B");
    },
    Error,
    "encode-error: U+356B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u356C");
    },
    Error,
    "encode-error: U+356C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u356D");
    },
    Error,
    "encode-error: U+356D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u356E");
    },
    Error,
    "encode-error: U+356E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u356F");
    },
    Error,
    "encode-error: U+356F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3570");
    },
    Error,
    "encode-error: U+3570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3571");
    },
    Error,
    "encode-error: U+3571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3572");
    },
    Error,
    "encode-error: U+3572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3573");
    },
    Error,
    "encode-error: U+3573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3574");
    },
    Error,
    "encode-error: U+3574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3575");
    },
    Error,
    "encode-error: U+3575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3576");
    },
    Error,
    "encode-error: U+3576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3577");
    },
    Error,
    "encode-error: U+3577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3578");
    },
    Error,
    "encode-error: U+3578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3579");
    },
    Error,
    "encode-error: U+3579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u357A");
    },
    Error,
    "encode-error: U+357A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u357B");
    },
    Error,
    "encode-error: U+357B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u357C");
    },
    Error,
    "encode-error: U+357C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u357D");
    },
    Error,
    "encode-error: U+357D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u357E");
    },
    Error,
    "encode-error: U+357E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u357F");
    },
    Error,
    "encode-error: U+357F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3580");
    },
    Error,
    "encode-error: U+3580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3581");
    },
    Error,
    "encode-error: U+3581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3582");
    },
    Error,
    "encode-error: U+3582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3583");
    },
    Error,
    "encode-error: U+3583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3584");
    },
    Error,
    "encode-error: U+3584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3585");
    },
    Error,
    "encode-error: U+3585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3586");
    },
    Error,
    "encode-error: U+3586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3587");
    },
    Error,
    "encode-error: U+3587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3588");
    },
    Error,
    "encode-error: U+3588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3589");
    },
    Error,
    "encode-error: U+3589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u358A");
    },
    Error,
    "encode-error: U+358A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u358B");
    },
    Error,
    "encode-error: U+358B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u358C");
    },
    Error,
    "encode-error: U+358C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u358D");
    },
    Error,
    "encode-error: U+358D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u358E");
    },
    Error,
    "encode-error: U+358E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u358F");
    },
    Error,
    "encode-error: U+358F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3590");
    },
    Error,
    "encode-error: U+3590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3591");
    },
    Error,
    "encode-error: U+3591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3592");
    },
    Error,
    "encode-error: U+3592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3593");
    },
    Error,
    "encode-error: U+3593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3594");
    },
    Error,
    "encode-error: U+3594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3595");
    },
    Error,
    "encode-error: U+3595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3596");
    },
    Error,
    "encode-error: U+3596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3597");
    },
    Error,
    "encode-error: U+3597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3598");
    },
    Error,
    "encode-error: U+3598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3599");
    },
    Error,
    "encode-error: U+3599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u359A");
    },
    Error,
    "encode-error: U+359A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u359B");
    },
    Error,
    "encode-error: U+359B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u359C");
    },
    Error,
    "encode-error: U+359C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u359D");
    },
    Error,
    "encode-error: U+359D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u359E");
    },
    Error,
    "encode-error: U+359E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u359F");
    },
    Error,
    "encode-error: U+359F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35A0");
    },
    Error,
    "encode-error: U+35A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35A1");
    },
    Error,
    "encode-error: U+35A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35A2");
    },
    Error,
    "encode-error: U+35A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35A3");
    },
    Error,
    "encode-error: U+35A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35A4");
    },
    Error,
    "encode-error: U+35A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35A5");
    },
    Error,
    "encode-error: U+35A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35A6");
    },
    Error,
    "encode-error: U+35A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35A7");
    },
    Error,
    "encode-error: U+35A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35A8");
    },
    Error,
    "encode-error: U+35A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35A9");
    },
    Error,
    "encode-error: U+35A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35AA");
    },
    Error,
    "encode-error: U+35AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35AB");
    },
    Error,
    "encode-error: U+35AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35AC");
    },
    Error,
    "encode-error: U+35AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35AD");
    },
    Error,
    "encode-error: U+35AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35AE");
    },
    Error,
    "encode-error: U+35AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35AF");
    },
    Error,
    "encode-error: U+35AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35B0");
    },
    Error,
    "encode-error: U+35B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35B1");
    },
    Error,
    "encode-error: U+35B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35B2");
    },
    Error,
    "encode-error: U+35B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35B3");
    },
    Error,
    "encode-error: U+35B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35B4");
    },
    Error,
    "encode-error: U+35B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35B5");
    },
    Error,
    "encode-error: U+35B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35B6");
    },
    Error,
    "encode-error: U+35B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35B7");
    },
    Error,
    "encode-error: U+35B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35B8");
    },
    Error,
    "encode-error: U+35B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35B9");
    },
    Error,
    "encode-error: U+35B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35BA");
    },
    Error,
    "encode-error: U+35BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35BB");
    },
    Error,
    "encode-error: U+35BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35BC");
    },
    Error,
    "encode-error: U+35BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35BD");
    },
    Error,
    "encode-error: U+35BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35BE");
    },
    Error,
    "encode-error: U+35BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35BF");
    },
    Error,
    "encode-error: U+35BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35C0");
    },
    Error,
    "encode-error: U+35C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35C1");
    },
    Error,
    "encode-error: U+35C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35C2");
    },
    Error,
    "encode-error: U+35C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35C3");
    },
    Error,
    "encode-error: U+35C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35C4");
    },
    Error,
    "encode-error: U+35C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35C5");
    },
    Error,
    "encode-error: U+35C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35C6");
    },
    Error,
    "encode-error: U+35C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35C7");
    },
    Error,
    "encode-error: U+35C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35C8");
    },
    Error,
    "encode-error: U+35C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35C9");
    },
    Error,
    "encode-error: U+35C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35CA");
    },
    Error,
    "encode-error: U+35CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35CB");
    },
    Error,
    "encode-error: U+35CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35CC");
    },
    Error,
    "encode-error: U+35CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35CD");
    },
    Error,
    "encode-error: U+35CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35CE");
    },
    Error,
    "encode-error: U+35CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35CF");
    },
    Error,
    "encode-error: U+35CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35D0");
    },
    Error,
    "encode-error: U+35D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35D1");
    },
    Error,
    "encode-error: U+35D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35D2");
    },
    Error,
    "encode-error: U+35D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35D3");
    },
    Error,
    "encode-error: U+35D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35D4");
    },
    Error,
    "encode-error: U+35D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35D5");
    },
    Error,
    "encode-error: U+35D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35D6");
    },
    Error,
    "encode-error: U+35D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35D7");
    },
    Error,
    "encode-error: U+35D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35D8");
    },
    Error,
    "encode-error: U+35D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35D9");
    },
    Error,
    "encode-error: U+35D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35DA");
    },
    Error,
    "encode-error: U+35DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35DB");
    },
    Error,
    "encode-error: U+35DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35DC");
    },
    Error,
    "encode-error: U+35DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35DD");
    },
    Error,
    "encode-error: U+35DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35DE");
    },
    Error,
    "encode-error: U+35DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35DF");
    },
    Error,
    "encode-error: U+35DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35E0");
    },
    Error,
    "encode-error: U+35E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35E1");
    },
    Error,
    "encode-error: U+35E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35E2");
    },
    Error,
    "encode-error: U+35E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35E3");
    },
    Error,
    "encode-error: U+35E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35E4");
    },
    Error,
    "encode-error: U+35E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35E5");
    },
    Error,
    "encode-error: U+35E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35E6");
    },
    Error,
    "encode-error: U+35E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35E7");
    },
    Error,
    "encode-error: U+35E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35E8");
    },
    Error,
    "encode-error: U+35E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35E9");
    },
    Error,
    "encode-error: U+35E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35EA");
    },
    Error,
    "encode-error: U+35EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35EB");
    },
    Error,
    "encode-error: U+35EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35EC");
    },
    Error,
    "encode-error: U+35EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35ED");
    },
    Error,
    "encode-error: U+35ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35EE");
    },
    Error,
    "encode-error: U+35EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35EF");
    },
    Error,
    "encode-error: U+35EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35F0");
    },
    Error,
    "encode-error: U+35F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35F1");
    },
    Error,
    "encode-error: U+35F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35F2");
    },
    Error,
    "encode-error: U+35F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35F3");
    },
    Error,
    "encode-error: U+35F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35F4");
    },
    Error,
    "encode-error: U+35F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35F5");
    },
    Error,
    "encode-error: U+35F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35F6");
    },
    Error,
    "encode-error: U+35F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35F7");
    },
    Error,
    "encode-error: U+35F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35F8");
    },
    Error,
    "encode-error: U+35F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35F9");
    },
    Error,
    "encode-error: U+35F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35FA");
    },
    Error,
    "encode-error: U+35FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35FB");
    },
    Error,
    "encode-error: U+35FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35FC");
    },
    Error,
    "encode-error: U+35FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35FD");
    },
    Error,
    "encode-error: U+35FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35FE");
    },
    Error,
    "encode-error: U+35FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u35FF");
    },
    Error,
    "encode-error: U+35FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3600");
    },
    Error,
    "encode-error: U+3600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3601");
    },
    Error,
    "encode-error: U+3601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3602");
    },
    Error,
    "encode-error: U+3602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3603");
    },
    Error,
    "encode-error: U+3603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3604");
    },
    Error,
    "encode-error: U+3604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3605");
    },
    Error,
    "encode-error: U+3605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3606");
    },
    Error,
    "encode-error: U+3606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3607");
    },
    Error,
    "encode-error: U+3607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3608");
    },
    Error,
    "encode-error: U+3608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3609");
    },
    Error,
    "encode-error: U+3609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u360A");
    },
    Error,
    "encode-error: U+360A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u360B");
    },
    Error,
    "encode-error: U+360B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u360C");
    },
    Error,
    "encode-error: U+360C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u360D");
    },
    Error,
    "encode-error: U+360D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u360E");
    },
    Error,
    "encode-error: U+360E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u360F");
    },
    Error,
    "encode-error: U+360F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3610");
    },
    Error,
    "encode-error: U+3610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3611");
    },
    Error,
    "encode-error: U+3611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3612");
    },
    Error,
    "encode-error: U+3612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3613");
    },
    Error,
    "encode-error: U+3613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3614");
    },
    Error,
    "encode-error: U+3614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3615");
    },
    Error,
    "encode-error: U+3615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3616");
    },
    Error,
    "encode-error: U+3616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3617");
    },
    Error,
    "encode-error: U+3617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3618");
    },
    Error,
    "encode-error: U+3618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3619");
    },
    Error,
    "encode-error: U+3619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u361A");
    },
    Error,
    "encode-error: U+361A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u361B");
    },
    Error,
    "encode-error: U+361B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u361C");
    },
    Error,
    "encode-error: U+361C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u361D");
    },
    Error,
    "encode-error: U+361D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u361E");
    },
    Error,
    "encode-error: U+361E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u361F");
    },
    Error,
    "encode-error: U+361F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3620");
    },
    Error,
    "encode-error: U+3620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3621");
    },
    Error,
    "encode-error: U+3621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3622");
    },
    Error,
    "encode-error: U+3622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3623");
    },
    Error,
    "encode-error: U+3623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3624");
    },
    Error,
    "encode-error: U+3624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3625");
    },
    Error,
    "encode-error: U+3625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3626");
    },
    Error,
    "encode-error: U+3626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3627");
    },
    Error,
    "encode-error: U+3627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3628");
    },
    Error,
    "encode-error: U+3628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3629");
    },
    Error,
    "encode-error: U+3629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u362A");
    },
    Error,
    "encode-error: U+362A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u362B");
    },
    Error,
    "encode-error: U+362B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u362C");
    },
    Error,
    "encode-error: U+362C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u362D");
    },
    Error,
    "encode-error: U+362D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u362E");
    },
    Error,
    "encode-error: U+362E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u362F");
    },
    Error,
    "encode-error: U+362F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3630");
    },
    Error,
    "encode-error: U+3630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3631");
    },
    Error,
    "encode-error: U+3631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3632");
    },
    Error,
    "encode-error: U+3632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3633");
    },
    Error,
    "encode-error: U+3633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3634");
    },
    Error,
    "encode-error: U+3634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3635");
    },
    Error,
    "encode-error: U+3635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3636");
    },
    Error,
    "encode-error: U+3636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3637");
    },
    Error,
    "encode-error: U+3637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3638");
    },
    Error,
    "encode-error: U+3638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3639");
    },
    Error,
    "encode-error: U+3639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u363A");
    },
    Error,
    "encode-error: U+363A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u363B");
    },
    Error,
    "encode-error: U+363B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u363C");
    },
    Error,
    "encode-error: U+363C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u363D");
    },
    Error,
    "encode-error: U+363D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u363E");
    },
    Error,
    "encode-error: U+363E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u363F");
    },
    Error,
    "encode-error: U+363F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3640");
    },
    Error,
    "encode-error: U+3640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3641");
    },
    Error,
    "encode-error: U+3641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3642");
    },
    Error,
    "encode-error: U+3642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3643");
    },
    Error,
    "encode-error: U+3643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3644");
    },
    Error,
    "encode-error: U+3644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3645");
    },
    Error,
    "encode-error: U+3645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3646");
    },
    Error,
    "encode-error: U+3646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3647");
    },
    Error,
    "encode-error: U+3647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3648");
    },
    Error,
    "encode-error: U+3648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3649");
    },
    Error,
    "encode-error: U+3649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u364A");
    },
    Error,
    "encode-error: U+364A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u364B");
    },
    Error,
    "encode-error: U+364B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u364C");
    },
    Error,
    "encode-error: U+364C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u364D");
    },
    Error,
    "encode-error: U+364D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u364E");
    },
    Error,
    "encode-error: U+364E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u364F");
    },
    Error,
    "encode-error: U+364F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3650");
    },
    Error,
    "encode-error: U+3650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3651");
    },
    Error,
    "encode-error: U+3651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3652");
    },
    Error,
    "encode-error: U+3652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3653");
    },
    Error,
    "encode-error: U+3653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3654");
    },
    Error,
    "encode-error: U+3654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3655");
    },
    Error,
    "encode-error: U+3655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3656");
    },
    Error,
    "encode-error: U+3656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3657");
    },
    Error,
    "encode-error: U+3657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3658");
    },
    Error,
    "encode-error: U+3658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3659");
    },
    Error,
    "encode-error: U+3659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u365A");
    },
    Error,
    "encode-error: U+365A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u365B");
    },
    Error,
    "encode-error: U+365B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u365C");
    },
    Error,
    "encode-error: U+365C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u365D");
    },
    Error,
    "encode-error: U+365D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u365E");
    },
    Error,
    "encode-error: U+365E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u365F");
    },
    Error,
    "encode-error: U+365F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3660");
    },
    Error,
    "encode-error: U+3660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3661");
    },
    Error,
    "encode-error: U+3661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3662");
    },
    Error,
    "encode-error: U+3662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3663");
    },
    Error,
    "encode-error: U+3663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3664");
    },
    Error,
    "encode-error: U+3664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3665");
    },
    Error,
    "encode-error: U+3665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3666");
    },
    Error,
    "encode-error: U+3666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3667");
    },
    Error,
    "encode-error: U+3667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3668");
    },
    Error,
    "encode-error: U+3668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3669");
    },
    Error,
    "encode-error: U+3669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u366A");
    },
    Error,
    "encode-error: U+366A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u366B");
    },
    Error,
    "encode-error: U+366B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u366C");
    },
    Error,
    "encode-error: U+366C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u366D");
    },
    Error,
    "encode-error: U+366D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u366E");
    },
    Error,
    "encode-error: U+366E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u366F");
    },
    Error,
    "encode-error: U+366F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3670");
    },
    Error,
    "encode-error: U+3670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3671");
    },
    Error,
    "encode-error: U+3671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3672");
    },
    Error,
    "encode-error: U+3672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3673");
    },
    Error,
    "encode-error: U+3673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3674");
    },
    Error,
    "encode-error: U+3674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3675");
    },
    Error,
    "encode-error: U+3675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3676");
    },
    Error,
    "encode-error: U+3676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3677");
    },
    Error,
    "encode-error: U+3677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3678");
    },
    Error,
    "encode-error: U+3678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3679");
    },
    Error,
    "encode-error: U+3679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u367A");
    },
    Error,
    "encode-error: U+367A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u367B");
    },
    Error,
    "encode-error: U+367B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u367C");
    },
    Error,
    "encode-error: U+367C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u367D");
    },
    Error,
    "encode-error: U+367D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u367E");
    },
    Error,
    "encode-error: U+367E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u367F");
    },
    Error,
    "encode-error: U+367F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3680");
    },
    Error,
    "encode-error: U+3680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3681");
    },
    Error,
    "encode-error: U+3681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3682");
    },
    Error,
    "encode-error: U+3682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3683");
    },
    Error,
    "encode-error: U+3683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3684");
    },
    Error,
    "encode-error: U+3684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3685");
    },
    Error,
    "encode-error: U+3685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3686");
    },
    Error,
    "encode-error: U+3686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3687");
    },
    Error,
    "encode-error: U+3687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3688");
    },
    Error,
    "encode-error: U+3688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3689");
    },
    Error,
    "encode-error: U+3689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u368A");
    },
    Error,
    "encode-error: U+368A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u368B");
    },
    Error,
    "encode-error: U+368B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u368C");
    },
    Error,
    "encode-error: U+368C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u368D");
    },
    Error,
    "encode-error: U+368D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u368E");
    },
    Error,
    "encode-error: U+368E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u368F");
    },
    Error,
    "encode-error: U+368F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3690");
    },
    Error,
    "encode-error: U+3690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3691");
    },
    Error,
    "encode-error: U+3691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3692");
    },
    Error,
    "encode-error: U+3692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3693");
    },
    Error,
    "encode-error: U+3693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3694");
    },
    Error,
    "encode-error: U+3694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3695");
    },
    Error,
    "encode-error: U+3695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3696");
    },
    Error,
    "encode-error: U+3696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3697");
    },
    Error,
    "encode-error: U+3697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3698");
    },
    Error,
    "encode-error: U+3698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3699");
    },
    Error,
    "encode-error: U+3699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u369A");
    },
    Error,
    "encode-error: U+369A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u369B");
    },
    Error,
    "encode-error: U+369B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u369C");
    },
    Error,
    "encode-error: U+369C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u369D");
    },
    Error,
    "encode-error: U+369D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u369E");
    },
    Error,
    "encode-error: U+369E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u369F");
    },
    Error,
    "encode-error: U+369F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36A0");
    },
    Error,
    "encode-error: U+36A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36A1");
    },
    Error,
    "encode-error: U+36A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36A2");
    },
    Error,
    "encode-error: U+36A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36A3");
    },
    Error,
    "encode-error: U+36A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36A4");
    },
    Error,
    "encode-error: U+36A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36A5");
    },
    Error,
    "encode-error: U+36A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36A6");
    },
    Error,
    "encode-error: U+36A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36A7");
    },
    Error,
    "encode-error: U+36A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36A8");
    },
    Error,
    "encode-error: U+36A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36A9");
    },
    Error,
    "encode-error: U+36A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36AA");
    },
    Error,
    "encode-error: U+36AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36AB");
    },
    Error,
    "encode-error: U+36AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36AC");
    },
    Error,
    "encode-error: U+36AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36AD");
    },
    Error,
    "encode-error: U+36AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36AE");
    },
    Error,
    "encode-error: U+36AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36AF");
    },
    Error,
    "encode-error: U+36AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36B0");
    },
    Error,
    "encode-error: U+36B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36B1");
    },
    Error,
    "encode-error: U+36B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36B2");
    },
    Error,
    "encode-error: U+36B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36B3");
    },
    Error,
    "encode-error: U+36B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36B4");
    },
    Error,
    "encode-error: U+36B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36B5");
    },
    Error,
    "encode-error: U+36B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36B6");
    },
    Error,
    "encode-error: U+36B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36B7");
    },
    Error,
    "encode-error: U+36B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36B8");
    },
    Error,
    "encode-error: U+36B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36B9");
    },
    Error,
    "encode-error: U+36B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36BA");
    },
    Error,
    "encode-error: U+36BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36BB");
    },
    Error,
    "encode-error: U+36BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36BC");
    },
    Error,
    "encode-error: U+36BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36BD");
    },
    Error,
    "encode-error: U+36BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36BE");
    },
    Error,
    "encode-error: U+36BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36BF");
    },
    Error,
    "encode-error: U+36BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36C0");
    },
    Error,
    "encode-error: U+36C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36C1");
    },
    Error,
    "encode-error: U+36C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36C2");
    },
    Error,
    "encode-error: U+36C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36C3");
    },
    Error,
    "encode-error: U+36C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36C4");
    },
    Error,
    "encode-error: U+36C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36C5");
    },
    Error,
    "encode-error: U+36C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36C6");
    },
    Error,
    "encode-error: U+36C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36C7");
    },
    Error,
    "encode-error: U+36C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36C8");
    },
    Error,
    "encode-error: U+36C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36C9");
    },
    Error,
    "encode-error: U+36C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36CA");
    },
    Error,
    "encode-error: U+36CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36CB");
    },
    Error,
    "encode-error: U+36CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36CC");
    },
    Error,
    "encode-error: U+36CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36CD");
    },
    Error,
    "encode-error: U+36CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36CE");
    },
    Error,
    "encode-error: U+36CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36CF");
    },
    Error,
    "encode-error: U+36CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36D0");
    },
    Error,
    "encode-error: U+36D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36D1");
    },
    Error,
    "encode-error: U+36D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36D2");
    },
    Error,
    "encode-error: U+36D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36D3");
    },
    Error,
    "encode-error: U+36D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36D4");
    },
    Error,
    "encode-error: U+36D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36D5");
    },
    Error,
    "encode-error: U+36D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36D6");
    },
    Error,
    "encode-error: U+36D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36D7");
    },
    Error,
    "encode-error: U+36D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36D8");
    },
    Error,
    "encode-error: U+36D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36D9");
    },
    Error,
    "encode-error: U+36D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36DA");
    },
    Error,
    "encode-error: U+36DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36DB");
    },
    Error,
    "encode-error: U+36DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36DC");
    },
    Error,
    "encode-error: U+36DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36DD");
    },
    Error,
    "encode-error: U+36DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36DE");
    },
    Error,
    "encode-error: U+36DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36DF");
    },
    Error,
    "encode-error: U+36DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36E0");
    },
    Error,
    "encode-error: U+36E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36E1");
    },
    Error,
    "encode-error: U+36E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36E2");
    },
    Error,
    "encode-error: U+36E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36E3");
    },
    Error,
    "encode-error: U+36E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36E4");
    },
    Error,
    "encode-error: U+36E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36E5");
    },
    Error,
    "encode-error: U+36E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36E6");
    },
    Error,
    "encode-error: U+36E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36E7");
    },
    Error,
    "encode-error: U+36E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36E8");
    },
    Error,
    "encode-error: U+36E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36E9");
    },
    Error,
    "encode-error: U+36E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36EA");
    },
    Error,
    "encode-error: U+36EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36EB");
    },
    Error,
    "encode-error: U+36EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36EC");
    },
    Error,
    "encode-error: U+36EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36ED");
    },
    Error,
    "encode-error: U+36ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36EE");
    },
    Error,
    "encode-error: U+36EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36EF");
    },
    Error,
    "encode-error: U+36EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36F0");
    },
    Error,
    "encode-error: U+36F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36F1");
    },
    Error,
    "encode-error: U+36F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36F2");
    },
    Error,
    "encode-error: U+36F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36F3");
    },
    Error,
    "encode-error: U+36F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36F4");
    },
    Error,
    "encode-error: U+36F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36F5");
    },
    Error,
    "encode-error: U+36F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36F6");
    },
    Error,
    "encode-error: U+36F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36F7");
    },
    Error,
    "encode-error: U+36F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36F8");
    },
    Error,
    "encode-error: U+36F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36F9");
    },
    Error,
    "encode-error: U+36F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36FA");
    },
    Error,
    "encode-error: U+36FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36FB");
    },
    Error,
    "encode-error: U+36FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36FC");
    },
    Error,
    "encode-error: U+36FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36FD");
    },
    Error,
    "encode-error: U+36FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36FE");
    },
    Error,
    "encode-error: U+36FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u36FF");
    },
    Error,
    "encode-error: U+36FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3700");
    },
    Error,
    "encode-error: U+3700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3701");
    },
    Error,
    "encode-error: U+3701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3702");
    },
    Error,
    "encode-error: U+3702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3703");
    },
    Error,
    "encode-error: U+3703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3704");
    },
    Error,
    "encode-error: U+3704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3705");
    },
    Error,
    "encode-error: U+3705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3706");
    },
    Error,
    "encode-error: U+3706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3707");
    },
    Error,
    "encode-error: U+3707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3708");
    },
    Error,
    "encode-error: U+3708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3709");
    },
    Error,
    "encode-error: U+3709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u370A");
    },
    Error,
    "encode-error: U+370A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u370B");
    },
    Error,
    "encode-error: U+370B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u370C");
    },
    Error,
    "encode-error: U+370C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u370D");
    },
    Error,
    "encode-error: U+370D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u370E");
    },
    Error,
    "encode-error: U+370E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u370F");
    },
    Error,
    "encode-error: U+370F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3710");
    },
    Error,
    "encode-error: U+3710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3711");
    },
    Error,
    "encode-error: U+3711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3712");
    },
    Error,
    "encode-error: U+3712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3713");
    },
    Error,
    "encode-error: U+3713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3714");
    },
    Error,
    "encode-error: U+3714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3715");
    },
    Error,
    "encode-error: U+3715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3716");
    },
    Error,
    "encode-error: U+3716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3717");
    },
    Error,
    "encode-error: U+3717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3718");
    },
    Error,
    "encode-error: U+3718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3719");
    },
    Error,
    "encode-error: U+3719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u371A");
    },
    Error,
    "encode-error: U+371A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u371B");
    },
    Error,
    "encode-error: U+371B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u371C");
    },
    Error,
    "encode-error: U+371C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u371D");
    },
    Error,
    "encode-error: U+371D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u371E");
    },
    Error,
    "encode-error: U+371E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u371F");
    },
    Error,
    "encode-error: U+371F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3720");
    },
    Error,
    "encode-error: U+3720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3721");
    },
    Error,
    "encode-error: U+3721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3722");
    },
    Error,
    "encode-error: U+3722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3723");
    },
    Error,
    "encode-error: U+3723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3724");
    },
    Error,
    "encode-error: U+3724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3725");
    },
    Error,
    "encode-error: U+3725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3726");
    },
    Error,
    "encode-error: U+3726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3727");
    },
    Error,
    "encode-error: U+3727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3728");
    },
    Error,
    "encode-error: U+3728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3729");
    },
    Error,
    "encode-error: U+3729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u372A");
    },
    Error,
    "encode-error: U+372A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u372B");
    },
    Error,
    "encode-error: U+372B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u372C");
    },
    Error,
    "encode-error: U+372C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u372D");
    },
    Error,
    "encode-error: U+372D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u372E");
    },
    Error,
    "encode-error: U+372E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u372F");
    },
    Error,
    "encode-error: U+372F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3730");
    },
    Error,
    "encode-error: U+3730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3731");
    },
    Error,
    "encode-error: U+3731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3732");
    },
    Error,
    "encode-error: U+3732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3733");
    },
    Error,
    "encode-error: U+3733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3734");
    },
    Error,
    "encode-error: U+3734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3735");
    },
    Error,
    "encode-error: U+3735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3736");
    },
    Error,
    "encode-error: U+3736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3737");
    },
    Error,
    "encode-error: U+3737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3738");
    },
    Error,
    "encode-error: U+3738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3739");
    },
    Error,
    "encode-error: U+3739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u373A");
    },
    Error,
    "encode-error: U+373A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u373B");
    },
    Error,
    "encode-error: U+373B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u373C");
    },
    Error,
    "encode-error: U+373C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u373D");
    },
    Error,
    "encode-error: U+373D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u373E");
    },
    Error,
    "encode-error: U+373E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u373F");
    },
    Error,
    "encode-error: U+373F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3740");
    },
    Error,
    "encode-error: U+3740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3741");
    },
    Error,
    "encode-error: U+3741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3742");
    },
    Error,
    "encode-error: U+3742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3743");
    },
    Error,
    "encode-error: U+3743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3744");
    },
    Error,
    "encode-error: U+3744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3745");
    },
    Error,
    "encode-error: U+3745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3746");
    },
    Error,
    "encode-error: U+3746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3747");
    },
    Error,
    "encode-error: U+3747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3748");
    },
    Error,
    "encode-error: U+3748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3749");
    },
    Error,
    "encode-error: U+3749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u374A");
    },
    Error,
    "encode-error: U+374A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u374B");
    },
    Error,
    "encode-error: U+374B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u374C");
    },
    Error,
    "encode-error: U+374C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u374D");
    },
    Error,
    "encode-error: U+374D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u374E");
    },
    Error,
    "encode-error: U+374E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u374F");
    },
    Error,
    "encode-error: U+374F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3750");
    },
    Error,
    "encode-error: U+3750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3751");
    },
    Error,
    "encode-error: U+3751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3752");
    },
    Error,
    "encode-error: U+3752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3753");
    },
    Error,
    "encode-error: U+3753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3754");
    },
    Error,
    "encode-error: U+3754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3755");
    },
    Error,
    "encode-error: U+3755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3756");
    },
    Error,
    "encode-error: U+3756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3757");
    },
    Error,
    "encode-error: U+3757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3758");
    },
    Error,
    "encode-error: U+3758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3759");
    },
    Error,
    "encode-error: U+3759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u375A");
    },
    Error,
    "encode-error: U+375A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u375B");
    },
    Error,
    "encode-error: U+375B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u375C");
    },
    Error,
    "encode-error: U+375C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u375D");
    },
    Error,
    "encode-error: U+375D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u375E");
    },
    Error,
    "encode-error: U+375E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u375F");
    },
    Error,
    "encode-error: U+375F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3760");
    },
    Error,
    "encode-error: U+3760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3761");
    },
    Error,
    "encode-error: U+3761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3762");
    },
    Error,
    "encode-error: U+3762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3763");
    },
    Error,
    "encode-error: U+3763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3764");
    },
    Error,
    "encode-error: U+3764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3765");
    },
    Error,
    "encode-error: U+3765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3766");
    },
    Error,
    "encode-error: U+3766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3767");
    },
    Error,
    "encode-error: U+3767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3768");
    },
    Error,
    "encode-error: U+3768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3769");
    },
    Error,
    "encode-error: U+3769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u376A");
    },
    Error,
    "encode-error: U+376A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u376B");
    },
    Error,
    "encode-error: U+376B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u376C");
    },
    Error,
    "encode-error: U+376C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u376D");
    },
    Error,
    "encode-error: U+376D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u376E");
    },
    Error,
    "encode-error: U+376E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u376F");
    },
    Error,
    "encode-error: U+376F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3770");
    },
    Error,
    "encode-error: U+3770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3771");
    },
    Error,
    "encode-error: U+3771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3772");
    },
    Error,
    "encode-error: U+3772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3773");
    },
    Error,
    "encode-error: U+3773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3774");
    },
    Error,
    "encode-error: U+3774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3775");
    },
    Error,
    "encode-error: U+3775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3776");
    },
    Error,
    "encode-error: U+3776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3777");
    },
    Error,
    "encode-error: U+3777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3778");
    },
    Error,
    "encode-error: U+3778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3779");
    },
    Error,
    "encode-error: U+3779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u377A");
    },
    Error,
    "encode-error: U+377A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u377B");
    },
    Error,
    "encode-error: U+377B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u377C");
    },
    Error,
    "encode-error: U+377C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u377D");
    },
    Error,
    "encode-error: U+377D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u377E");
    },
    Error,
    "encode-error: U+377E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u377F");
    },
    Error,
    "encode-error: U+377F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3780");
    },
    Error,
    "encode-error: U+3780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3781");
    },
    Error,
    "encode-error: U+3781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3782");
    },
    Error,
    "encode-error: U+3782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3783");
    },
    Error,
    "encode-error: U+3783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3784");
    },
    Error,
    "encode-error: U+3784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3785");
    },
    Error,
    "encode-error: U+3785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3786");
    },
    Error,
    "encode-error: U+3786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3787");
    },
    Error,
    "encode-error: U+3787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3788");
    },
    Error,
    "encode-error: U+3788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3789");
    },
    Error,
    "encode-error: U+3789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u378A");
    },
    Error,
    "encode-error: U+378A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u378B");
    },
    Error,
    "encode-error: U+378B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u378C");
    },
    Error,
    "encode-error: U+378C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u378D");
    },
    Error,
    "encode-error: U+378D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u378E");
    },
    Error,
    "encode-error: U+378E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u378F");
    },
    Error,
    "encode-error: U+378F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3790");
    },
    Error,
    "encode-error: U+3790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3791");
    },
    Error,
    "encode-error: U+3791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3792");
    },
    Error,
    "encode-error: U+3792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3793");
    },
    Error,
    "encode-error: U+3793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3794");
    },
    Error,
    "encode-error: U+3794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3795");
    },
    Error,
    "encode-error: U+3795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3796");
    },
    Error,
    "encode-error: U+3796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3797");
    },
    Error,
    "encode-error: U+3797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3798");
    },
    Error,
    "encode-error: U+3798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3799");
    },
    Error,
    "encode-error: U+3799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u379A");
    },
    Error,
    "encode-error: U+379A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u379B");
    },
    Error,
    "encode-error: U+379B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u379C");
    },
    Error,
    "encode-error: U+379C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u379D");
    },
    Error,
    "encode-error: U+379D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u379E");
    },
    Error,
    "encode-error: U+379E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u379F");
    },
    Error,
    "encode-error: U+379F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37A0");
    },
    Error,
    "encode-error: U+37A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37A1");
    },
    Error,
    "encode-error: U+37A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37A2");
    },
    Error,
    "encode-error: U+37A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37A3");
    },
    Error,
    "encode-error: U+37A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37A4");
    },
    Error,
    "encode-error: U+37A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37A5");
    },
    Error,
    "encode-error: U+37A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37A6");
    },
    Error,
    "encode-error: U+37A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37A7");
    },
    Error,
    "encode-error: U+37A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37A8");
    },
    Error,
    "encode-error: U+37A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37A9");
    },
    Error,
    "encode-error: U+37A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37AA");
    },
    Error,
    "encode-error: U+37AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37AB");
    },
    Error,
    "encode-error: U+37AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37AC");
    },
    Error,
    "encode-error: U+37AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37AD");
    },
    Error,
    "encode-error: U+37AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37AE");
    },
    Error,
    "encode-error: U+37AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37AF");
    },
    Error,
    "encode-error: U+37AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37B0");
    },
    Error,
    "encode-error: U+37B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37B1");
    },
    Error,
    "encode-error: U+37B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37B2");
    },
    Error,
    "encode-error: U+37B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37B3");
    },
    Error,
    "encode-error: U+37B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37B4");
    },
    Error,
    "encode-error: U+37B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37B5");
    },
    Error,
    "encode-error: U+37B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37B6");
    },
    Error,
    "encode-error: U+37B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37B7");
    },
    Error,
    "encode-error: U+37B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37B8");
    },
    Error,
    "encode-error: U+37B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37B9");
    },
    Error,
    "encode-error: U+37B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37BA");
    },
    Error,
    "encode-error: U+37BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37BB");
    },
    Error,
    "encode-error: U+37BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37BC");
    },
    Error,
    "encode-error: U+37BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37BD");
    },
    Error,
    "encode-error: U+37BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37BE");
    },
    Error,
    "encode-error: U+37BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37BF");
    },
    Error,
    "encode-error: U+37BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37C0");
    },
    Error,
    "encode-error: U+37C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37C1");
    },
    Error,
    "encode-error: U+37C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37C2");
    },
    Error,
    "encode-error: U+37C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37C3");
    },
    Error,
    "encode-error: U+37C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37C4");
    },
    Error,
    "encode-error: U+37C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37C5");
    },
    Error,
    "encode-error: U+37C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37C6");
    },
    Error,
    "encode-error: U+37C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37C7");
    },
    Error,
    "encode-error: U+37C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37C8");
    },
    Error,
    "encode-error: U+37C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37C9");
    },
    Error,
    "encode-error: U+37C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37CA");
    },
    Error,
    "encode-error: U+37CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37CB");
    },
    Error,
    "encode-error: U+37CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37CC");
    },
    Error,
    "encode-error: U+37CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37CD");
    },
    Error,
    "encode-error: U+37CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37CE");
    },
    Error,
    "encode-error: U+37CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37CF");
    },
    Error,
    "encode-error: U+37CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37D0");
    },
    Error,
    "encode-error: U+37D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37D1");
    },
    Error,
    "encode-error: U+37D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37D2");
    },
    Error,
    "encode-error: U+37D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37D3");
    },
    Error,
    "encode-error: U+37D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37D4");
    },
    Error,
    "encode-error: U+37D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37D5");
    },
    Error,
    "encode-error: U+37D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37D6");
    },
    Error,
    "encode-error: U+37D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37D7");
    },
    Error,
    "encode-error: U+37D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37D8");
    },
    Error,
    "encode-error: U+37D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37D9");
    },
    Error,
    "encode-error: U+37D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37DA");
    },
    Error,
    "encode-error: U+37DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37DB");
    },
    Error,
    "encode-error: U+37DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37DC");
    },
    Error,
    "encode-error: U+37DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37DD");
    },
    Error,
    "encode-error: U+37DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37DE");
    },
    Error,
    "encode-error: U+37DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37DF");
    },
    Error,
    "encode-error: U+37DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37E0");
    },
    Error,
    "encode-error: U+37E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37E1");
    },
    Error,
    "encode-error: U+37E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37E2");
    },
    Error,
    "encode-error: U+37E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37E3");
    },
    Error,
    "encode-error: U+37E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37E4");
    },
    Error,
    "encode-error: U+37E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37E5");
    },
    Error,
    "encode-error: U+37E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37E6");
    },
    Error,
    "encode-error: U+37E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37E7");
    },
    Error,
    "encode-error: U+37E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37E8");
    },
    Error,
    "encode-error: U+37E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37E9");
    },
    Error,
    "encode-error: U+37E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37EA");
    },
    Error,
    "encode-error: U+37EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37EB");
    },
    Error,
    "encode-error: U+37EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37EC");
    },
    Error,
    "encode-error: U+37EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37ED");
    },
    Error,
    "encode-error: U+37ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37EE");
    },
    Error,
    "encode-error: U+37EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37EF");
    },
    Error,
    "encode-error: U+37EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37F0");
    },
    Error,
    "encode-error: U+37F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37F1");
    },
    Error,
    "encode-error: U+37F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37F2");
    },
    Error,
    "encode-error: U+37F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37F3");
    },
    Error,
    "encode-error: U+37F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37F4");
    },
    Error,
    "encode-error: U+37F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37F5");
    },
    Error,
    "encode-error: U+37F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37F6");
    },
    Error,
    "encode-error: U+37F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37F7");
    },
    Error,
    "encode-error: U+37F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37F8");
    },
    Error,
    "encode-error: U+37F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37F9");
    },
    Error,
    "encode-error: U+37F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37FA");
    },
    Error,
    "encode-error: U+37FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37FB");
    },
    Error,
    "encode-error: U+37FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37FC");
    },
    Error,
    "encode-error: U+37FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37FD");
    },
    Error,
    "encode-error: U+37FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37FE");
    },
    Error,
    "encode-error: U+37FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u37FF");
    },
    Error,
    "encode-error: U+37FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3800");
    },
    Error,
    "encode-error: U+3800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3801");
    },
    Error,
    "encode-error: U+3801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3802");
    },
    Error,
    "encode-error: U+3802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3803");
    },
    Error,
    "encode-error: U+3803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3804");
    },
    Error,
    "encode-error: U+3804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3805");
    },
    Error,
    "encode-error: U+3805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3806");
    },
    Error,
    "encode-error: U+3806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3807");
    },
    Error,
    "encode-error: U+3807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3808");
    },
    Error,
    "encode-error: U+3808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3809");
    },
    Error,
    "encode-error: U+3809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u380A");
    },
    Error,
    "encode-error: U+380A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u380B");
    },
    Error,
    "encode-error: U+380B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u380C");
    },
    Error,
    "encode-error: U+380C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u380D");
    },
    Error,
    "encode-error: U+380D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u380E");
    },
    Error,
    "encode-error: U+380E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u380F");
    },
    Error,
    "encode-error: U+380F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3810");
    },
    Error,
    "encode-error: U+3810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3811");
    },
    Error,
    "encode-error: U+3811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3812");
    },
    Error,
    "encode-error: U+3812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3813");
    },
    Error,
    "encode-error: U+3813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3814");
    },
    Error,
    "encode-error: U+3814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3815");
    },
    Error,
    "encode-error: U+3815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3816");
    },
    Error,
    "encode-error: U+3816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3817");
    },
    Error,
    "encode-error: U+3817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3818");
    },
    Error,
    "encode-error: U+3818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3819");
    },
    Error,
    "encode-error: U+3819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u381A");
    },
    Error,
    "encode-error: U+381A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u381B");
    },
    Error,
    "encode-error: U+381B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u381C");
    },
    Error,
    "encode-error: U+381C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u381D");
    },
    Error,
    "encode-error: U+381D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u381E");
    },
    Error,
    "encode-error: U+381E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u381F");
    },
    Error,
    "encode-error: U+381F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3820");
    },
    Error,
    "encode-error: U+3820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3821");
    },
    Error,
    "encode-error: U+3821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3822");
    },
    Error,
    "encode-error: U+3822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3823");
    },
    Error,
    "encode-error: U+3823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3824");
    },
    Error,
    "encode-error: U+3824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3825");
    },
    Error,
    "encode-error: U+3825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3826");
    },
    Error,
    "encode-error: U+3826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3827");
    },
    Error,
    "encode-error: U+3827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3828");
    },
    Error,
    "encode-error: U+3828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3829");
    },
    Error,
    "encode-error: U+3829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u382A");
    },
    Error,
    "encode-error: U+382A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u382B");
    },
    Error,
    "encode-error: U+382B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u382C");
    },
    Error,
    "encode-error: U+382C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u382D");
    },
    Error,
    "encode-error: U+382D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u382E");
    },
    Error,
    "encode-error: U+382E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u382F");
    },
    Error,
    "encode-error: U+382F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3830");
    },
    Error,
    "encode-error: U+3830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3831");
    },
    Error,
    "encode-error: U+3831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3832");
    },
    Error,
    "encode-error: U+3832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3833");
    },
    Error,
    "encode-error: U+3833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3834");
    },
    Error,
    "encode-error: U+3834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3835");
    },
    Error,
    "encode-error: U+3835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3836");
    },
    Error,
    "encode-error: U+3836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3837");
    },
    Error,
    "encode-error: U+3837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3838");
    },
    Error,
    "encode-error: U+3838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3839");
    },
    Error,
    "encode-error: U+3839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u383A");
    },
    Error,
    "encode-error: U+383A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u383B");
    },
    Error,
    "encode-error: U+383B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u383C");
    },
    Error,
    "encode-error: U+383C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u383D");
    },
    Error,
    "encode-error: U+383D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u383E");
    },
    Error,
    "encode-error: U+383E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u383F");
    },
    Error,
    "encode-error: U+383F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3840");
    },
    Error,
    "encode-error: U+3840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3841");
    },
    Error,
    "encode-error: U+3841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3842");
    },
    Error,
    "encode-error: U+3842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3843");
    },
    Error,
    "encode-error: U+3843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3844");
    },
    Error,
    "encode-error: U+3844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3845");
    },
    Error,
    "encode-error: U+3845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3846");
    },
    Error,
    "encode-error: U+3846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3847");
    },
    Error,
    "encode-error: U+3847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3848");
    },
    Error,
    "encode-error: U+3848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3849");
    },
    Error,
    "encode-error: U+3849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u384A");
    },
    Error,
    "encode-error: U+384A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u384B");
    },
    Error,
    "encode-error: U+384B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u384C");
    },
    Error,
    "encode-error: U+384C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u384D");
    },
    Error,
    "encode-error: U+384D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u384E");
    },
    Error,
    "encode-error: U+384E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u384F");
    },
    Error,
    "encode-error: U+384F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3850");
    },
    Error,
    "encode-error: U+3850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3851");
    },
    Error,
    "encode-error: U+3851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3852");
    },
    Error,
    "encode-error: U+3852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3853");
    },
    Error,
    "encode-error: U+3853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3854");
    },
    Error,
    "encode-error: U+3854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3855");
    },
    Error,
    "encode-error: U+3855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3856");
    },
    Error,
    "encode-error: U+3856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3857");
    },
    Error,
    "encode-error: U+3857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3858");
    },
    Error,
    "encode-error: U+3858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3859");
    },
    Error,
    "encode-error: U+3859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u385A");
    },
    Error,
    "encode-error: U+385A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u385B");
    },
    Error,
    "encode-error: U+385B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u385C");
    },
    Error,
    "encode-error: U+385C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u385D");
    },
    Error,
    "encode-error: U+385D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u385E");
    },
    Error,
    "encode-error: U+385E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u385F");
    },
    Error,
    "encode-error: U+385F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3860");
    },
    Error,
    "encode-error: U+3860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3861");
    },
    Error,
    "encode-error: U+3861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3862");
    },
    Error,
    "encode-error: U+3862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3863");
    },
    Error,
    "encode-error: U+3863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3864");
    },
    Error,
    "encode-error: U+3864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3865");
    },
    Error,
    "encode-error: U+3865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3866");
    },
    Error,
    "encode-error: U+3866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3867");
    },
    Error,
    "encode-error: U+3867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3868");
    },
    Error,
    "encode-error: U+3868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3869");
    },
    Error,
    "encode-error: U+3869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u386A");
    },
    Error,
    "encode-error: U+386A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u386B");
    },
    Error,
    "encode-error: U+386B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u386C");
    },
    Error,
    "encode-error: U+386C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u386D");
    },
    Error,
    "encode-error: U+386D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u386E");
    },
    Error,
    "encode-error: U+386E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u386F");
    },
    Error,
    "encode-error: U+386F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3870");
    },
    Error,
    "encode-error: U+3870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3871");
    },
    Error,
    "encode-error: U+3871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3872");
    },
    Error,
    "encode-error: U+3872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3873");
    },
    Error,
    "encode-error: U+3873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3874");
    },
    Error,
    "encode-error: U+3874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3875");
    },
    Error,
    "encode-error: U+3875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3876");
    },
    Error,
    "encode-error: U+3876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3877");
    },
    Error,
    "encode-error: U+3877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3878");
    },
    Error,
    "encode-error: U+3878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3879");
    },
    Error,
    "encode-error: U+3879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u387A");
    },
    Error,
    "encode-error: U+387A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u387B");
    },
    Error,
    "encode-error: U+387B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u387C");
    },
    Error,
    "encode-error: U+387C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u387D");
    },
    Error,
    "encode-error: U+387D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u387E");
    },
    Error,
    "encode-error: U+387E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u387F");
    },
    Error,
    "encode-error: U+387F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3880");
    },
    Error,
    "encode-error: U+3880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3881");
    },
    Error,
    "encode-error: U+3881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3882");
    },
    Error,
    "encode-error: U+3882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3883");
    },
    Error,
    "encode-error: U+3883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3884");
    },
    Error,
    "encode-error: U+3884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3885");
    },
    Error,
    "encode-error: U+3885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3886");
    },
    Error,
    "encode-error: U+3886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3887");
    },
    Error,
    "encode-error: U+3887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3888");
    },
    Error,
    "encode-error: U+3888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3889");
    },
    Error,
    "encode-error: U+3889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u388A");
    },
    Error,
    "encode-error: U+388A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u388B");
    },
    Error,
    "encode-error: U+388B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u388C");
    },
    Error,
    "encode-error: U+388C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u388D");
    },
    Error,
    "encode-error: U+388D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u388E");
    },
    Error,
    "encode-error: U+388E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u388F");
    },
    Error,
    "encode-error: U+388F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3890");
    },
    Error,
    "encode-error: U+3890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3891");
    },
    Error,
    "encode-error: U+3891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3892");
    },
    Error,
    "encode-error: U+3892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3893");
    },
    Error,
    "encode-error: U+3893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3894");
    },
    Error,
    "encode-error: U+3894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3895");
    },
    Error,
    "encode-error: U+3895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3896");
    },
    Error,
    "encode-error: U+3896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3897");
    },
    Error,
    "encode-error: U+3897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3898");
    },
    Error,
    "encode-error: U+3898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3899");
    },
    Error,
    "encode-error: U+3899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u389A");
    },
    Error,
    "encode-error: U+389A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u389B");
    },
    Error,
    "encode-error: U+389B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u389C");
    },
    Error,
    "encode-error: U+389C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u389D");
    },
    Error,
    "encode-error: U+389D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u389E");
    },
    Error,
    "encode-error: U+389E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u389F");
    },
    Error,
    "encode-error: U+389F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38A0");
    },
    Error,
    "encode-error: U+38A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38A1");
    },
    Error,
    "encode-error: U+38A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38A2");
    },
    Error,
    "encode-error: U+38A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38A3");
    },
    Error,
    "encode-error: U+38A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38A4");
    },
    Error,
    "encode-error: U+38A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38A5");
    },
    Error,
    "encode-error: U+38A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38A6");
    },
    Error,
    "encode-error: U+38A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38A7");
    },
    Error,
    "encode-error: U+38A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38A8");
    },
    Error,
    "encode-error: U+38A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38A9");
    },
    Error,
    "encode-error: U+38A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38AA");
    },
    Error,
    "encode-error: U+38AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38AB");
    },
    Error,
    "encode-error: U+38AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38AC");
    },
    Error,
    "encode-error: U+38AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38AD");
    },
    Error,
    "encode-error: U+38AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38AE");
    },
    Error,
    "encode-error: U+38AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38AF");
    },
    Error,
    "encode-error: U+38AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38B0");
    },
    Error,
    "encode-error: U+38B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38B1");
    },
    Error,
    "encode-error: U+38B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38B2");
    },
    Error,
    "encode-error: U+38B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38B3");
    },
    Error,
    "encode-error: U+38B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38B4");
    },
    Error,
    "encode-error: U+38B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38B5");
    },
    Error,
    "encode-error: U+38B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38B6");
    },
    Error,
    "encode-error: U+38B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38B7");
    },
    Error,
    "encode-error: U+38B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38B8");
    },
    Error,
    "encode-error: U+38B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38B9");
    },
    Error,
    "encode-error: U+38B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38BA");
    },
    Error,
    "encode-error: U+38BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38BB");
    },
    Error,
    "encode-error: U+38BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38BC");
    },
    Error,
    "encode-error: U+38BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38BD");
    },
    Error,
    "encode-error: U+38BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38BE");
    },
    Error,
    "encode-error: U+38BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38BF");
    },
    Error,
    "encode-error: U+38BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38C0");
    },
    Error,
    "encode-error: U+38C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38C1");
    },
    Error,
    "encode-error: U+38C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38C2");
    },
    Error,
    "encode-error: U+38C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38C3");
    },
    Error,
    "encode-error: U+38C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38C4");
    },
    Error,
    "encode-error: U+38C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38C5");
    },
    Error,
    "encode-error: U+38C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38C6");
    },
    Error,
    "encode-error: U+38C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38C7");
    },
    Error,
    "encode-error: U+38C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38C8");
    },
    Error,
    "encode-error: U+38C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38C9");
    },
    Error,
    "encode-error: U+38C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38CA");
    },
    Error,
    "encode-error: U+38CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38CB");
    },
    Error,
    "encode-error: U+38CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38CC");
    },
    Error,
    "encode-error: U+38CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38CD");
    },
    Error,
    "encode-error: U+38CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38CE");
    },
    Error,
    "encode-error: U+38CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38CF");
    },
    Error,
    "encode-error: U+38CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38D0");
    },
    Error,
    "encode-error: U+38D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38D1");
    },
    Error,
    "encode-error: U+38D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38D2");
    },
    Error,
    "encode-error: U+38D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38D3");
    },
    Error,
    "encode-error: U+38D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38D4");
    },
    Error,
    "encode-error: U+38D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38D5");
    },
    Error,
    "encode-error: U+38D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38D6");
    },
    Error,
    "encode-error: U+38D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38D7");
    },
    Error,
    "encode-error: U+38D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38D8");
    },
    Error,
    "encode-error: U+38D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38D9");
    },
    Error,
    "encode-error: U+38D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38DA");
    },
    Error,
    "encode-error: U+38DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38DB");
    },
    Error,
    "encode-error: U+38DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38DC");
    },
    Error,
    "encode-error: U+38DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38DD");
    },
    Error,
    "encode-error: U+38DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38DE");
    },
    Error,
    "encode-error: U+38DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38DF");
    },
    Error,
    "encode-error: U+38DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38E0");
    },
    Error,
    "encode-error: U+38E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38E1");
    },
    Error,
    "encode-error: U+38E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38E2");
    },
    Error,
    "encode-error: U+38E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38E3");
    },
    Error,
    "encode-error: U+38E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38E4");
    },
    Error,
    "encode-error: U+38E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38E5");
    },
    Error,
    "encode-error: U+38E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38E6");
    },
    Error,
    "encode-error: U+38E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38E7");
    },
    Error,
    "encode-error: U+38E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38E8");
    },
    Error,
    "encode-error: U+38E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38E9");
    },
    Error,
    "encode-error: U+38E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38EA");
    },
    Error,
    "encode-error: U+38EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38EB");
    },
    Error,
    "encode-error: U+38EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38EC");
    },
    Error,
    "encode-error: U+38EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38ED");
    },
    Error,
    "encode-error: U+38ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38EE");
    },
    Error,
    "encode-error: U+38EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38EF");
    },
    Error,
    "encode-error: U+38EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38F0");
    },
    Error,
    "encode-error: U+38F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38F1");
    },
    Error,
    "encode-error: U+38F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38F2");
    },
    Error,
    "encode-error: U+38F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38F3");
    },
    Error,
    "encode-error: U+38F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38F4");
    },
    Error,
    "encode-error: U+38F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38F5");
    },
    Error,
    "encode-error: U+38F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38F6");
    },
    Error,
    "encode-error: U+38F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38F7");
    },
    Error,
    "encode-error: U+38F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38F8");
    },
    Error,
    "encode-error: U+38F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38F9");
    },
    Error,
    "encode-error: U+38F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38FA");
    },
    Error,
    "encode-error: U+38FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38FB");
    },
    Error,
    "encode-error: U+38FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38FC");
    },
    Error,
    "encode-error: U+38FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38FD");
    },
    Error,
    "encode-error: U+38FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38FE");
    },
    Error,
    "encode-error: U+38FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u38FF");
    },
    Error,
    "encode-error: U+38FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3900");
    },
    Error,
    "encode-error: U+3900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3901");
    },
    Error,
    "encode-error: U+3901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3902");
    },
    Error,
    "encode-error: U+3902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3903");
    },
    Error,
    "encode-error: U+3903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3904");
    },
    Error,
    "encode-error: U+3904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3905");
    },
    Error,
    "encode-error: U+3905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3906");
    },
    Error,
    "encode-error: U+3906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3907");
    },
    Error,
    "encode-error: U+3907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3908");
    },
    Error,
    "encode-error: U+3908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3909");
    },
    Error,
    "encode-error: U+3909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u390A");
    },
    Error,
    "encode-error: U+390A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u390B");
    },
    Error,
    "encode-error: U+390B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u390C");
    },
    Error,
    "encode-error: U+390C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u390D");
    },
    Error,
    "encode-error: U+390D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u390E");
    },
    Error,
    "encode-error: U+390E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u390F");
    },
    Error,
    "encode-error: U+390F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3910");
    },
    Error,
    "encode-error: U+3910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3911");
    },
    Error,
    "encode-error: U+3911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3912");
    },
    Error,
    "encode-error: U+3912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3913");
    },
    Error,
    "encode-error: U+3913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3914");
    },
    Error,
    "encode-error: U+3914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3915");
    },
    Error,
    "encode-error: U+3915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3916");
    },
    Error,
    "encode-error: U+3916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3917");
    },
    Error,
    "encode-error: U+3917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3918");
    },
    Error,
    "encode-error: U+3918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3919");
    },
    Error,
    "encode-error: U+3919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u391A");
    },
    Error,
    "encode-error: U+391A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u391B");
    },
    Error,
    "encode-error: U+391B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u391C");
    },
    Error,
    "encode-error: U+391C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u391D");
    },
    Error,
    "encode-error: U+391D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u391E");
    },
    Error,
    "encode-error: U+391E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u391F");
    },
    Error,
    "encode-error: U+391F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3920");
    },
    Error,
    "encode-error: U+3920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3921");
    },
    Error,
    "encode-error: U+3921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3922");
    },
    Error,
    "encode-error: U+3922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3923");
    },
    Error,
    "encode-error: U+3923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3924");
    },
    Error,
    "encode-error: U+3924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3925");
    },
    Error,
    "encode-error: U+3925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3926");
    },
    Error,
    "encode-error: U+3926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3927");
    },
    Error,
    "encode-error: U+3927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3928");
    },
    Error,
    "encode-error: U+3928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3929");
    },
    Error,
    "encode-error: U+3929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u392A");
    },
    Error,
    "encode-error: U+392A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u392B");
    },
    Error,
    "encode-error: U+392B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u392C");
    },
    Error,
    "encode-error: U+392C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u392D");
    },
    Error,
    "encode-error: U+392D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u392E");
    },
    Error,
    "encode-error: U+392E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u392F");
    },
    Error,
    "encode-error: U+392F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3930");
    },
    Error,
    "encode-error: U+3930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3931");
    },
    Error,
    "encode-error: U+3931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3932");
    },
    Error,
    "encode-error: U+3932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3933");
    },
    Error,
    "encode-error: U+3933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3934");
    },
    Error,
    "encode-error: U+3934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3935");
    },
    Error,
    "encode-error: U+3935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3936");
    },
    Error,
    "encode-error: U+3936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3937");
    },
    Error,
    "encode-error: U+3937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3938");
    },
    Error,
    "encode-error: U+3938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3939");
    },
    Error,
    "encode-error: U+3939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u393A");
    },
    Error,
    "encode-error: U+393A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u393B");
    },
    Error,
    "encode-error: U+393B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u393C");
    },
    Error,
    "encode-error: U+393C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u393D");
    },
    Error,
    "encode-error: U+393D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u393E");
    },
    Error,
    "encode-error: U+393E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u393F");
    },
    Error,
    "encode-error: U+393F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3940");
    },
    Error,
    "encode-error: U+3940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3941");
    },
    Error,
    "encode-error: U+3941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3942");
    },
    Error,
    "encode-error: U+3942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3943");
    },
    Error,
    "encode-error: U+3943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3944");
    },
    Error,
    "encode-error: U+3944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3945");
    },
    Error,
    "encode-error: U+3945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3946");
    },
    Error,
    "encode-error: U+3946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3947");
    },
    Error,
    "encode-error: U+3947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3948");
    },
    Error,
    "encode-error: U+3948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3949");
    },
    Error,
    "encode-error: U+3949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u394A");
    },
    Error,
    "encode-error: U+394A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u394B");
    },
    Error,
    "encode-error: U+394B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u394C");
    },
    Error,
    "encode-error: U+394C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u394D");
    },
    Error,
    "encode-error: U+394D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u394E");
    },
    Error,
    "encode-error: U+394E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u394F");
    },
    Error,
    "encode-error: U+394F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3950");
    },
    Error,
    "encode-error: U+3950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3951");
    },
    Error,
    "encode-error: U+3951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3952");
    },
    Error,
    "encode-error: U+3952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3953");
    },
    Error,
    "encode-error: U+3953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3954");
    },
    Error,
    "encode-error: U+3954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3955");
    },
    Error,
    "encode-error: U+3955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3956");
    },
    Error,
    "encode-error: U+3956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3957");
    },
    Error,
    "encode-error: U+3957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3958");
    },
    Error,
    "encode-error: U+3958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3959");
    },
    Error,
    "encode-error: U+3959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u395A");
    },
    Error,
    "encode-error: U+395A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u395B");
    },
    Error,
    "encode-error: U+395B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u395C");
    },
    Error,
    "encode-error: U+395C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u395D");
    },
    Error,
    "encode-error: U+395D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u395E");
    },
    Error,
    "encode-error: U+395E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u395F");
    },
    Error,
    "encode-error: U+395F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3960");
    },
    Error,
    "encode-error: U+3960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3961");
    },
    Error,
    "encode-error: U+3961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3962");
    },
    Error,
    "encode-error: U+3962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3963");
    },
    Error,
    "encode-error: U+3963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3964");
    },
    Error,
    "encode-error: U+3964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3965");
    },
    Error,
    "encode-error: U+3965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3966");
    },
    Error,
    "encode-error: U+3966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3967");
    },
    Error,
    "encode-error: U+3967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3968");
    },
    Error,
    "encode-error: U+3968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3969");
    },
    Error,
    "encode-error: U+3969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u396A");
    },
    Error,
    "encode-error: U+396A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u396B");
    },
    Error,
    "encode-error: U+396B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u396C");
    },
    Error,
    "encode-error: U+396C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u396D");
    },
    Error,
    "encode-error: U+396D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u396E");
    },
    Error,
    "encode-error: U+396E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u396F");
    },
    Error,
    "encode-error: U+396F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3970");
    },
    Error,
    "encode-error: U+3970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3971");
    },
    Error,
    "encode-error: U+3971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3972");
    },
    Error,
    "encode-error: U+3972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3973");
    },
    Error,
    "encode-error: U+3973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3974");
    },
    Error,
    "encode-error: U+3974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3975");
    },
    Error,
    "encode-error: U+3975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3976");
    },
    Error,
    "encode-error: U+3976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3977");
    },
    Error,
    "encode-error: U+3977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3978");
    },
    Error,
    "encode-error: U+3978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3979");
    },
    Error,
    "encode-error: U+3979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u397A");
    },
    Error,
    "encode-error: U+397A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u397B");
    },
    Error,
    "encode-error: U+397B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u397C");
    },
    Error,
    "encode-error: U+397C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u397D");
    },
    Error,
    "encode-error: U+397D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u397E");
    },
    Error,
    "encode-error: U+397E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u397F");
    },
    Error,
    "encode-error: U+397F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3980");
    },
    Error,
    "encode-error: U+3980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3981");
    },
    Error,
    "encode-error: U+3981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3982");
    },
    Error,
    "encode-error: U+3982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3983");
    },
    Error,
    "encode-error: U+3983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3984");
    },
    Error,
    "encode-error: U+3984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3985");
    },
    Error,
    "encode-error: U+3985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3986");
    },
    Error,
    "encode-error: U+3986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3987");
    },
    Error,
    "encode-error: U+3987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3988");
    },
    Error,
    "encode-error: U+3988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3989");
    },
    Error,
    "encode-error: U+3989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u398A");
    },
    Error,
    "encode-error: U+398A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u398B");
    },
    Error,
    "encode-error: U+398B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u398C");
    },
    Error,
    "encode-error: U+398C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u398D");
    },
    Error,
    "encode-error: U+398D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u398E");
    },
    Error,
    "encode-error: U+398E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u398F");
    },
    Error,
    "encode-error: U+398F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3990");
    },
    Error,
    "encode-error: U+3990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3991");
    },
    Error,
    "encode-error: U+3991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3992");
    },
    Error,
    "encode-error: U+3992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3993");
    },
    Error,
    "encode-error: U+3993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3994");
    },
    Error,
    "encode-error: U+3994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3995");
    },
    Error,
    "encode-error: U+3995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3996");
    },
    Error,
    "encode-error: U+3996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3997");
    },
    Error,
    "encode-error: U+3997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3998");
    },
    Error,
    "encode-error: U+3998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3999");
    },
    Error,
    "encode-error: U+3999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u399A");
    },
    Error,
    "encode-error: U+399A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u399B");
    },
    Error,
    "encode-error: U+399B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u399C");
    },
    Error,
    "encode-error: U+399C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u399D");
    },
    Error,
    "encode-error: U+399D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u399E");
    },
    Error,
    "encode-error: U+399E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u399F");
    },
    Error,
    "encode-error: U+399F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39A0");
    },
    Error,
    "encode-error: U+39A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39A1");
    },
    Error,
    "encode-error: U+39A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39A2");
    },
    Error,
    "encode-error: U+39A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39A3");
    },
    Error,
    "encode-error: U+39A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39A4");
    },
    Error,
    "encode-error: U+39A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39A5");
    },
    Error,
    "encode-error: U+39A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39A6");
    },
    Error,
    "encode-error: U+39A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39A7");
    },
    Error,
    "encode-error: U+39A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39A8");
    },
    Error,
    "encode-error: U+39A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39A9");
    },
    Error,
    "encode-error: U+39A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39AA");
    },
    Error,
    "encode-error: U+39AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39AB");
    },
    Error,
    "encode-error: U+39AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39AC");
    },
    Error,
    "encode-error: U+39AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39AD");
    },
    Error,
    "encode-error: U+39AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39AE");
    },
    Error,
    "encode-error: U+39AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39AF");
    },
    Error,
    "encode-error: U+39AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39B0");
    },
    Error,
    "encode-error: U+39B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39B1");
    },
    Error,
    "encode-error: U+39B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39B2");
    },
    Error,
    "encode-error: U+39B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39B3");
    },
    Error,
    "encode-error: U+39B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39B4");
    },
    Error,
    "encode-error: U+39B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39B5");
    },
    Error,
    "encode-error: U+39B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39B6");
    },
    Error,
    "encode-error: U+39B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39B7");
    },
    Error,
    "encode-error: U+39B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39B8");
    },
    Error,
    "encode-error: U+39B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39B9");
    },
    Error,
    "encode-error: U+39B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39BA");
    },
    Error,
    "encode-error: U+39BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39BB");
    },
    Error,
    "encode-error: U+39BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39BC");
    },
    Error,
    "encode-error: U+39BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39BD");
    },
    Error,
    "encode-error: U+39BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39BE");
    },
    Error,
    "encode-error: U+39BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39BF");
    },
    Error,
    "encode-error: U+39BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39C0");
    },
    Error,
    "encode-error: U+39C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39C1");
    },
    Error,
    "encode-error: U+39C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39C2");
    },
    Error,
    "encode-error: U+39C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39C3");
    },
    Error,
    "encode-error: U+39C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39C4");
    },
    Error,
    "encode-error: U+39C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39C5");
    },
    Error,
    "encode-error: U+39C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39C6");
    },
    Error,
    "encode-error: U+39C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39C7");
    },
    Error,
    "encode-error: U+39C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39C8");
    },
    Error,
    "encode-error: U+39C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39C9");
    },
    Error,
    "encode-error: U+39C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39CA");
    },
    Error,
    "encode-error: U+39CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39CB");
    },
    Error,
    "encode-error: U+39CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39CC");
    },
    Error,
    "encode-error: U+39CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39CD");
    },
    Error,
    "encode-error: U+39CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39CE");
    },
    Error,
    "encode-error: U+39CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39CF");
    },
    Error,
    "encode-error: U+39CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39D0");
    },
    Error,
    "encode-error: U+39D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39D1");
    },
    Error,
    "encode-error: U+39D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39D2");
    },
    Error,
    "encode-error: U+39D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39D3");
    },
    Error,
    "encode-error: U+39D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39D4");
    },
    Error,
    "encode-error: U+39D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39D5");
    },
    Error,
    "encode-error: U+39D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39D6");
    },
    Error,
    "encode-error: U+39D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39D7");
    },
    Error,
    "encode-error: U+39D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39D8");
    },
    Error,
    "encode-error: U+39D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39D9");
    },
    Error,
    "encode-error: U+39D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39DA");
    },
    Error,
    "encode-error: U+39DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39DB");
    },
    Error,
    "encode-error: U+39DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39DC");
    },
    Error,
    "encode-error: U+39DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39DD");
    },
    Error,
    "encode-error: U+39DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39DE");
    },
    Error,
    "encode-error: U+39DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39DF");
    },
    Error,
    "encode-error: U+39DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39E0");
    },
    Error,
    "encode-error: U+39E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39E1");
    },
    Error,
    "encode-error: U+39E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39E2");
    },
    Error,
    "encode-error: U+39E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39E3");
    },
    Error,
    "encode-error: U+39E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39E4");
    },
    Error,
    "encode-error: U+39E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39E5");
    },
    Error,
    "encode-error: U+39E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39E6");
    },
    Error,
    "encode-error: U+39E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39E7");
    },
    Error,
    "encode-error: U+39E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39E8");
    },
    Error,
    "encode-error: U+39E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39E9");
    },
    Error,
    "encode-error: U+39E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39EA");
    },
    Error,
    "encode-error: U+39EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39EB");
    },
    Error,
    "encode-error: U+39EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39EC");
    },
    Error,
    "encode-error: U+39EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39ED");
    },
    Error,
    "encode-error: U+39ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39EE");
    },
    Error,
    "encode-error: U+39EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39EF");
    },
    Error,
    "encode-error: U+39EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39F0");
    },
    Error,
    "encode-error: U+39F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39F1");
    },
    Error,
    "encode-error: U+39F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39F2");
    },
    Error,
    "encode-error: U+39F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39F3");
    },
    Error,
    "encode-error: U+39F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39F4");
    },
    Error,
    "encode-error: U+39F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39F5");
    },
    Error,
    "encode-error: U+39F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39F6");
    },
    Error,
    "encode-error: U+39F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39F7");
    },
    Error,
    "encode-error: U+39F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39F8");
    },
    Error,
    "encode-error: U+39F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39F9");
    },
    Error,
    "encode-error: U+39F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39FA");
    },
    Error,
    "encode-error: U+39FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39FB");
    },
    Error,
    "encode-error: U+39FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39FC");
    },
    Error,
    "encode-error: U+39FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39FD");
    },
    Error,
    "encode-error: U+39FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39FE");
    },
    Error,
    "encode-error: U+39FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u39FF");
    },
    Error,
    "encode-error: U+39FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A00");
    },
    Error,
    "encode-error: U+3A00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A01");
    },
    Error,
    "encode-error: U+3A01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A02");
    },
    Error,
    "encode-error: U+3A02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A03");
    },
    Error,
    "encode-error: U+3A03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A04");
    },
    Error,
    "encode-error: U+3A04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A05");
    },
    Error,
    "encode-error: U+3A05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A06");
    },
    Error,
    "encode-error: U+3A06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A07");
    },
    Error,
    "encode-error: U+3A07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A08");
    },
    Error,
    "encode-error: U+3A08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A09");
    },
    Error,
    "encode-error: U+3A09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A0A");
    },
    Error,
    "encode-error: U+3A0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A0B");
    },
    Error,
    "encode-error: U+3A0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A0C");
    },
    Error,
    "encode-error: U+3A0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A0D");
    },
    Error,
    "encode-error: U+3A0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A0E");
    },
    Error,
    "encode-error: U+3A0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A0F");
    },
    Error,
    "encode-error: U+3A0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A10");
    },
    Error,
    "encode-error: U+3A10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A11");
    },
    Error,
    "encode-error: U+3A11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A12");
    },
    Error,
    "encode-error: U+3A12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A13");
    },
    Error,
    "encode-error: U+3A13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A14");
    },
    Error,
    "encode-error: U+3A14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A15");
    },
    Error,
    "encode-error: U+3A15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A16");
    },
    Error,
    "encode-error: U+3A16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A17");
    },
    Error,
    "encode-error: U+3A17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A18");
    },
    Error,
    "encode-error: U+3A18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A19");
    },
    Error,
    "encode-error: U+3A19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A1A");
    },
    Error,
    "encode-error: U+3A1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A1B");
    },
    Error,
    "encode-error: U+3A1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A1C");
    },
    Error,
    "encode-error: U+3A1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A1D");
    },
    Error,
    "encode-error: U+3A1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A1E");
    },
    Error,
    "encode-error: U+3A1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A1F");
    },
    Error,
    "encode-error: U+3A1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A20");
    },
    Error,
    "encode-error: U+3A20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A21");
    },
    Error,
    "encode-error: U+3A21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A22");
    },
    Error,
    "encode-error: U+3A22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A23");
    },
    Error,
    "encode-error: U+3A23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A24");
    },
    Error,
    "encode-error: U+3A24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A25");
    },
    Error,
    "encode-error: U+3A25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A26");
    },
    Error,
    "encode-error: U+3A26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A27");
    },
    Error,
    "encode-error: U+3A27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A28");
    },
    Error,
    "encode-error: U+3A28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A29");
    },
    Error,
    "encode-error: U+3A29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A2A");
    },
    Error,
    "encode-error: U+3A2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A2B");
    },
    Error,
    "encode-error: U+3A2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A2C");
    },
    Error,
    "encode-error: U+3A2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A2D");
    },
    Error,
    "encode-error: U+3A2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A2E");
    },
    Error,
    "encode-error: U+3A2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A2F");
    },
    Error,
    "encode-error: U+3A2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A30");
    },
    Error,
    "encode-error: U+3A30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A31");
    },
    Error,
    "encode-error: U+3A31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A32");
    },
    Error,
    "encode-error: U+3A32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A33");
    },
    Error,
    "encode-error: U+3A33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A34");
    },
    Error,
    "encode-error: U+3A34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A35");
    },
    Error,
    "encode-error: U+3A35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A36");
    },
    Error,
    "encode-error: U+3A36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A37");
    },
    Error,
    "encode-error: U+3A37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A38");
    },
    Error,
    "encode-error: U+3A38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A39");
    },
    Error,
    "encode-error: U+3A39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A3A");
    },
    Error,
    "encode-error: U+3A3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A3B");
    },
    Error,
    "encode-error: U+3A3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A3C");
    },
    Error,
    "encode-error: U+3A3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A3D");
    },
    Error,
    "encode-error: U+3A3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A3E");
    },
    Error,
    "encode-error: U+3A3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A3F");
    },
    Error,
    "encode-error: U+3A3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A40");
    },
    Error,
    "encode-error: U+3A40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A41");
    },
    Error,
    "encode-error: U+3A41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A42");
    },
    Error,
    "encode-error: U+3A42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A43");
    },
    Error,
    "encode-error: U+3A43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A44");
    },
    Error,
    "encode-error: U+3A44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A45");
    },
    Error,
    "encode-error: U+3A45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A46");
    },
    Error,
    "encode-error: U+3A46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A47");
    },
    Error,
    "encode-error: U+3A47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A48");
    },
    Error,
    "encode-error: U+3A48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A49");
    },
    Error,
    "encode-error: U+3A49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A4A");
    },
    Error,
    "encode-error: U+3A4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A4B");
    },
    Error,
    "encode-error: U+3A4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A4C");
    },
    Error,
    "encode-error: U+3A4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A4D");
    },
    Error,
    "encode-error: U+3A4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A4E");
    },
    Error,
    "encode-error: U+3A4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A4F");
    },
    Error,
    "encode-error: U+3A4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A50");
    },
    Error,
    "encode-error: U+3A50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A51");
    },
    Error,
    "encode-error: U+3A51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A52");
    },
    Error,
    "encode-error: U+3A52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A53");
    },
    Error,
    "encode-error: U+3A53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A54");
    },
    Error,
    "encode-error: U+3A54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A55");
    },
    Error,
    "encode-error: U+3A55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A56");
    },
    Error,
    "encode-error: U+3A56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A57");
    },
    Error,
    "encode-error: U+3A57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A58");
    },
    Error,
    "encode-error: U+3A58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A59");
    },
    Error,
    "encode-error: U+3A59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A5A");
    },
    Error,
    "encode-error: U+3A5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A5B");
    },
    Error,
    "encode-error: U+3A5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A5C");
    },
    Error,
    "encode-error: U+3A5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A5D");
    },
    Error,
    "encode-error: U+3A5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A5E");
    },
    Error,
    "encode-error: U+3A5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A5F");
    },
    Error,
    "encode-error: U+3A5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A60");
    },
    Error,
    "encode-error: U+3A60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A61");
    },
    Error,
    "encode-error: U+3A61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A62");
    },
    Error,
    "encode-error: U+3A62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A63");
    },
    Error,
    "encode-error: U+3A63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A64");
    },
    Error,
    "encode-error: U+3A64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A65");
    },
    Error,
    "encode-error: U+3A65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A66");
    },
    Error,
    "encode-error: U+3A66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A67");
    },
    Error,
    "encode-error: U+3A67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A68");
    },
    Error,
    "encode-error: U+3A68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A69");
    },
    Error,
    "encode-error: U+3A69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A6A");
    },
    Error,
    "encode-error: U+3A6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A6B");
    },
    Error,
    "encode-error: U+3A6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A6C");
    },
    Error,
    "encode-error: U+3A6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A6D");
    },
    Error,
    "encode-error: U+3A6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A6E");
    },
    Error,
    "encode-error: U+3A6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A6F");
    },
    Error,
    "encode-error: U+3A6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A70");
    },
    Error,
    "encode-error: U+3A70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A71");
    },
    Error,
    "encode-error: U+3A71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A72");
    },
    Error,
    "encode-error: U+3A72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A73");
    },
    Error,
    "encode-error: U+3A73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A74");
    },
    Error,
    "encode-error: U+3A74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A75");
    },
    Error,
    "encode-error: U+3A75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A76");
    },
    Error,
    "encode-error: U+3A76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A77");
    },
    Error,
    "encode-error: U+3A77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A78");
    },
    Error,
    "encode-error: U+3A78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A79");
    },
    Error,
    "encode-error: U+3A79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A7A");
    },
    Error,
    "encode-error: U+3A7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A7B");
    },
    Error,
    "encode-error: U+3A7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A7C");
    },
    Error,
    "encode-error: U+3A7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A7D");
    },
    Error,
    "encode-error: U+3A7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A7E");
    },
    Error,
    "encode-error: U+3A7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A7F");
    },
    Error,
    "encode-error: U+3A7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A80");
    },
    Error,
    "encode-error: U+3A80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A81");
    },
    Error,
    "encode-error: U+3A81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A82");
    },
    Error,
    "encode-error: U+3A82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A83");
    },
    Error,
    "encode-error: U+3A83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A84");
    },
    Error,
    "encode-error: U+3A84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A85");
    },
    Error,
    "encode-error: U+3A85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A86");
    },
    Error,
    "encode-error: U+3A86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A87");
    },
    Error,
    "encode-error: U+3A87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A88");
    },
    Error,
    "encode-error: U+3A88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A89");
    },
    Error,
    "encode-error: U+3A89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A8A");
    },
    Error,
    "encode-error: U+3A8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A8B");
    },
    Error,
    "encode-error: U+3A8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A8C");
    },
    Error,
    "encode-error: U+3A8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A8D");
    },
    Error,
    "encode-error: U+3A8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A8E");
    },
    Error,
    "encode-error: U+3A8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A8F");
    },
    Error,
    "encode-error: U+3A8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A90");
    },
    Error,
    "encode-error: U+3A90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A91");
    },
    Error,
    "encode-error: U+3A91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A92");
    },
    Error,
    "encode-error: U+3A92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A93");
    },
    Error,
    "encode-error: U+3A93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A94");
    },
    Error,
    "encode-error: U+3A94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A95");
    },
    Error,
    "encode-error: U+3A95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A96");
    },
    Error,
    "encode-error: U+3A96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A97");
    },
    Error,
    "encode-error: U+3A97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A98");
    },
    Error,
    "encode-error: U+3A98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A99");
    },
    Error,
    "encode-error: U+3A99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A9A");
    },
    Error,
    "encode-error: U+3A9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A9B");
    },
    Error,
    "encode-error: U+3A9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A9C");
    },
    Error,
    "encode-error: U+3A9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A9D");
    },
    Error,
    "encode-error: U+3A9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A9E");
    },
    Error,
    "encode-error: U+3A9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3A9F");
    },
    Error,
    "encode-error: U+3A9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AA0");
    },
    Error,
    "encode-error: U+3AA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AA1");
    },
    Error,
    "encode-error: U+3AA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AA2");
    },
    Error,
    "encode-error: U+3AA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AA3");
    },
    Error,
    "encode-error: U+3AA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AA4");
    },
    Error,
    "encode-error: U+3AA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AA5");
    },
    Error,
    "encode-error: U+3AA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AA6");
    },
    Error,
    "encode-error: U+3AA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AA7");
    },
    Error,
    "encode-error: U+3AA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AA8");
    },
    Error,
    "encode-error: U+3AA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AA9");
    },
    Error,
    "encode-error: U+3AA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AAA");
    },
    Error,
    "encode-error: U+3AAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AAB");
    },
    Error,
    "encode-error: U+3AAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AAC");
    },
    Error,
    "encode-error: U+3AAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AAD");
    },
    Error,
    "encode-error: U+3AAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AAE");
    },
    Error,
    "encode-error: U+3AAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AAF");
    },
    Error,
    "encode-error: U+3AAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AB0");
    },
    Error,
    "encode-error: U+3AB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AB1");
    },
    Error,
    "encode-error: U+3AB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AB2");
    },
    Error,
    "encode-error: U+3AB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AB3");
    },
    Error,
    "encode-error: U+3AB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AB4");
    },
    Error,
    "encode-error: U+3AB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AB5");
    },
    Error,
    "encode-error: U+3AB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AB6");
    },
    Error,
    "encode-error: U+3AB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AB7");
    },
    Error,
    "encode-error: U+3AB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AB8");
    },
    Error,
    "encode-error: U+3AB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AB9");
    },
    Error,
    "encode-error: U+3AB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ABA");
    },
    Error,
    "encode-error: U+3ABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ABB");
    },
    Error,
    "encode-error: U+3ABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ABC");
    },
    Error,
    "encode-error: U+3ABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ABD");
    },
    Error,
    "encode-error: U+3ABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ABE");
    },
    Error,
    "encode-error: U+3ABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ABF");
    },
    Error,
    "encode-error: U+3ABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AC0");
    },
    Error,
    "encode-error: U+3AC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AC1");
    },
    Error,
    "encode-error: U+3AC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AC2");
    },
    Error,
    "encode-error: U+3AC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AC3");
    },
    Error,
    "encode-error: U+3AC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AC4");
    },
    Error,
    "encode-error: U+3AC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AC5");
    },
    Error,
    "encode-error: U+3AC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AC6");
    },
    Error,
    "encode-error: U+3AC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AC7");
    },
    Error,
    "encode-error: U+3AC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AC8");
    },
    Error,
    "encode-error: U+3AC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AC9");
    },
    Error,
    "encode-error: U+3AC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ACA");
    },
    Error,
    "encode-error: U+3ACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ACB");
    },
    Error,
    "encode-error: U+3ACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ACC");
    },
    Error,
    "encode-error: U+3ACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ACD");
    },
    Error,
    "encode-error: U+3ACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ACE");
    },
    Error,
    "encode-error: U+3ACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ACF");
    },
    Error,
    "encode-error: U+3ACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AD0");
    },
    Error,
    "encode-error: U+3AD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AD1");
    },
    Error,
    "encode-error: U+3AD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AD2");
    },
    Error,
    "encode-error: U+3AD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AD3");
    },
    Error,
    "encode-error: U+3AD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AD4");
    },
    Error,
    "encode-error: U+3AD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AD5");
    },
    Error,
    "encode-error: U+3AD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AD6");
    },
    Error,
    "encode-error: U+3AD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AD7");
    },
    Error,
    "encode-error: U+3AD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AD8");
    },
    Error,
    "encode-error: U+3AD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AD9");
    },
    Error,
    "encode-error: U+3AD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ADA");
    },
    Error,
    "encode-error: U+3ADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ADB");
    },
    Error,
    "encode-error: U+3ADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ADC");
    },
    Error,
    "encode-error: U+3ADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ADD");
    },
    Error,
    "encode-error: U+3ADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ADE");
    },
    Error,
    "encode-error: U+3ADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ADF");
    },
    Error,
    "encode-error: U+3ADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AE0");
    },
    Error,
    "encode-error: U+3AE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AE1");
    },
    Error,
    "encode-error: U+3AE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AE2");
    },
    Error,
    "encode-error: U+3AE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AE3");
    },
    Error,
    "encode-error: U+3AE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AE4");
    },
    Error,
    "encode-error: U+3AE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AE5");
    },
    Error,
    "encode-error: U+3AE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AE6");
    },
    Error,
    "encode-error: U+3AE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AE7");
    },
    Error,
    "encode-error: U+3AE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AE8");
    },
    Error,
    "encode-error: U+3AE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AE9");
    },
    Error,
    "encode-error: U+3AE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AEA");
    },
    Error,
    "encode-error: U+3AEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AEB");
    },
    Error,
    "encode-error: U+3AEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AEC");
    },
    Error,
    "encode-error: U+3AEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AED");
    },
    Error,
    "encode-error: U+3AED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AEE");
    },
    Error,
    "encode-error: U+3AEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AEF");
    },
    Error,
    "encode-error: U+3AEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AF0");
    },
    Error,
    "encode-error: U+3AF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AF1");
    },
    Error,
    "encode-error: U+3AF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AF2");
    },
    Error,
    "encode-error: U+3AF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AF3");
    },
    Error,
    "encode-error: U+3AF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AF4");
    },
    Error,
    "encode-error: U+3AF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AF5");
    },
    Error,
    "encode-error: U+3AF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AF6");
    },
    Error,
    "encode-error: U+3AF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AF7");
    },
    Error,
    "encode-error: U+3AF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AF8");
    },
    Error,
    "encode-error: U+3AF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AF9");
    },
    Error,
    "encode-error: U+3AF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AFA");
    },
    Error,
    "encode-error: U+3AFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AFB");
    },
    Error,
    "encode-error: U+3AFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AFC");
    },
    Error,
    "encode-error: U+3AFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AFD");
    },
    Error,
    "encode-error: U+3AFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AFE");
    },
    Error,
    "encode-error: U+3AFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3AFF");
    },
    Error,
    "encode-error: U+3AFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B00");
    },
    Error,
    "encode-error: U+3B00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B01");
    },
    Error,
    "encode-error: U+3B01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B02");
    },
    Error,
    "encode-error: U+3B02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B03");
    },
    Error,
    "encode-error: U+3B03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B04");
    },
    Error,
    "encode-error: U+3B04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B05");
    },
    Error,
    "encode-error: U+3B05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B06");
    },
    Error,
    "encode-error: U+3B06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B07");
    },
    Error,
    "encode-error: U+3B07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B08");
    },
    Error,
    "encode-error: U+3B08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B09");
    },
    Error,
    "encode-error: U+3B09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B0A");
    },
    Error,
    "encode-error: U+3B0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B0B");
    },
    Error,
    "encode-error: U+3B0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B0C");
    },
    Error,
    "encode-error: U+3B0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B0D");
    },
    Error,
    "encode-error: U+3B0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B0E");
    },
    Error,
    "encode-error: U+3B0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B0F");
    },
    Error,
    "encode-error: U+3B0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B10");
    },
    Error,
    "encode-error: U+3B10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B11");
    },
    Error,
    "encode-error: U+3B11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B12");
    },
    Error,
    "encode-error: U+3B12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B13");
    },
    Error,
    "encode-error: U+3B13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B14");
    },
    Error,
    "encode-error: U+3B14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B15");
    },
    Error,
    "encode-error: U+3B15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B16");
    },
    Error,
    "encode-error: U+3B16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B17");
    },
    Error,
    "encode-error: U+3B17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B18");
    },
    Error,
    "encode-error: U+3B18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B19");
    },
    Error,
    "encode-error: U+3B19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B1A");
    },
    Error,
    "encode-error: U+3B1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B1B");
    },
    Error,
    "encode-error: U+3B1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B1C");
    },
    Error,
    "encode-error: U+3B1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B1D");
    },
    Error,
    "encode-error: U+3B1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B1E");
    },
    Error,
    "encode-error: U+3B1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B1F");
    },
    Error,
    "encode-error: U+3B1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B20");
    },
    Error,
    "encode-error: U+3B20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B21");
    },
    Error,
    "encode-error: U+3B21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B22");
    },
    Error,
    "encode-error: U+3B22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B23");
    },
    Error,
    "encode-error: U+3B23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B24");
    },
    Error,
    "encode-error: U+3B24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B25");
    },
    Error,
    "encode-error: U+3B25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B26");
    },
    Error,
    "encode-error: U+3B26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B27");
    },
    Error,
    "encode-error: U+3B27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B28");
    },
    Error,
    "encode-error: U+3B28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B29");
    },
    Error,
    "encode-error: U+3B29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B2A");
    },
    Error,
    "encode-error: U+3B2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B2B");
    },
    Error,
    "encode-error: U+3B2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B2C");
    },
    Error,
    "encode-error: U+3B2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B2D");
    },
    Error,
    "encode-error: U+3B2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B2E");
    },
    Error,
    "encode-error: U+3B2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B2F");
    },
    Error,
    "encode-error: U+3B2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B30");
    },
    Error,
    "encode-error: U+3B30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B31");
    },
    Error,
    "encode-error: U+3B31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B32");
    },
    Error,
    "encode-error: U+3B32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B33");
    },
    Error,
    "encode-error: U+3B33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B34");
    },
    Error,
    "encode-error: U+3B34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B35");
    },
    Error,
    "encode-error: U+3B35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B36");
    },
    Error,
    "encode-error: U+3B36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B37");
    },
    Error,
    "encode-error: U+3B37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B38");
    },
    Error,
    "encode-error: U+3B38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B39");
    },
    Error,
    "encode-error: U+3B39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B3A");
    },
    Error,
    "encode-error: U+3B3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B3B");
    },
    Error,
    "encode-error: U+3B3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B3C");
    },
    Error,
    "encode-error: U+3B3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B3D");
    },
    Error,
    "encode-error: U+3B3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B3E");
    },
    Error,
    "encode-error: U+3B3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B3F");
    },
    Error,
    "encode-error: U+3B3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B40");
    },
    Error,
    "encode-error: U+3B40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B41");
    },
    Error,
    "encode-error: U+3B41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B42");
    },
    Error,
    "encode-error: U+3B42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B43");
    },
    Error,
    "encode-error: U+3B43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B44");
    },
    Error,
    "encode-error: U+3B44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B45");
    },
    Error,
    "encode-error: U+3B45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B46");
    },
    Error,
    "encode-error: U+3B46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B47");
    },
    Error,
    "encode-error: U+3B47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B48");
    },
    Error,
    "encode-error: U+3B48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B49");
    },
    Error,
    "encode-error: U+3B49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B4A");
    },
    Error,
    "encode-error: U+3B4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B4B");
    },
    Error,
    "encode-error: U+3B4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B4C");
    },
    Error,
    "encode-error: U+3B4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B4D");
    },
    Error,
    "encode-error: U+3B4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B4E");
    },
    Error,
    "encode-error: U+3B4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B4F");
    },
    Error,
    "encode-error: U+3B4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B50");
    },
    Error,
    "encode-error: U+3B50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B51");
    },
    Error,
    "encode-error: U+3B51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B52");
    },
    Error,
    "encode-error: U+3B52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B53");
    },
    Error,
    "encode-error: U+3B53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B54");
    },
    Error,
    "encode-error: U+3B54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B55");
    },
    Error,
    "encode-error: U+3B55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B56");
    },
    Error,
    "encode-error: U+3B56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B57");
    },
    Error,
    "encode-error: U+3B57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B58");
    },
    Error,
    "encode-error: U+3B58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B59");
    },
    Error,
    "encode-error: U+3B59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B5A");
    },
    Error,
    "encode-error: U+3B5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B5B");
    },
    Error,
    "encode-error: U+3B5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B5C");
    },
    Error,
    "encode-error: U+3B5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B5D");
    },
    Error,
    "encode-error: U+3B5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B5E");
    },
    Error,
    "encode-error: U+3B5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B5F");
    },
    Error,
    "encode-error: U+3B5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B60");
    },
    Error,
    "encode-error: U+3B60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B61");
    },
    Error,
    "encode-error: U+3B61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B62");
    },
    Error,
    "encode-error: U+3B62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B63");
    },
    Error,
    "encode-error: U+3B63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B64");
    },
    Error,
    "encode-error: U+3B64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B65");
    },
    Error,
    "encode-error: U+3B65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B66");
    },
    Error,
    "encode-error: U+3B66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B67");
    },
    Error,
    "encode-error: U+3B67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B68");
    },
    Error,
    "encode-error: U+3B68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B69");
    },
    Error,
    "encode-error: U+3B69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B6A");
    },
    Error,
    "encode-error: U+3B6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B6B");
    },
    Error,
    "encode-error: U+3B6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B6C");
    },
    Error,
    "encode-error: U+3B6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B6D");
    },
    Error,
    "encode-error: U+3B6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B6E");
    },
    Error,
    "encode-error: U+3B6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B6F");
    },
    Error,
    "encode-error: U+3B6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B70");
    },
    Error,
    "encode-error: U+3B70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B71");
    },
    Error,
    "encode-error: U+3B71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B72");
    },
    Error,
    "encode-error: U+3B72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B73");
    },
    Error,
    "encode-error: U+3B73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B74");
    },
    Error,
    "encode-error: U+3B74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B75");
    },
    Error,
    "encode-error: U+3B75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B76");
    },
    Error,
    "encode-error: U+3B76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B77");
    },
    Error,
    "encode-error: U+3B77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B78");
    },
    Error,
    "encode-error: U+3B78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B79");
    },
    Error,
    "encode-error: U+3B79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B7A");
    },
    Error,
    "encode-error: U+3B7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B7B");
    },
    Error,
    "encode-error: U+3B7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B7C");
    },
    Error,
    "encode-error: U+3B7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B7D");
    },
    Error,
    "encode-error: U+3B7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B7E");
    },
    Error,
    "encode-error: U+3B7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B7F");
    },
    Error,
    "encode-error: U+3B7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B80");
    },
    Error,
    "encode-error: U+3B80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B81");
    },
    Error,
    "encode-error: U+3B81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B82");
    },
    Error,
    "encode-error: U+3B82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B83");
    },
    Error,
    "encode-error: U+3B83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B84");
    },
    Error,
    "encode-error: U+3B84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B85");
    },
    Error,
    "encode-error: U+3B85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B86");
    },
    Error,
    "encode-error: U+3B86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B87");
    },
    Error,
    "encode-error: U+3B87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B88");
    },
    Error,
    "encode-error: U+3B88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B89");
    },
    Error,
    "encode-error: U+3B89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B8A");
    },
    Error,
    "encode-error: U+3B8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B8B");
    },
    Error,
    "encode-error: U+3B8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B8C");
    },
    Error,
    "encode-error: U+3B8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B8D");
    },
    Error,
    "encode-error: U+3B8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B8E");
    },
    Error,
    "encode-error: U+3B8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B8F");
    },
    Error,
    "encode-error: U+3B8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B90");
    },
    Error,
    "encode-error: U+3B90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B91");
    },
    Error,
    "encode-error: U+3B91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B92");
    },
    Error,
    "encode-error: U+3B92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B93");
    },
    Error,
    "encode-error: U+3B93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B94");
    },
    Error,
    "encode-error: U+3B94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B95");
    },
    Error,
    "encode-error: U+3B95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B96");
    },
    Error,
    "encode-error: U+3B96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B97");
    },
    Error,
    "encode-error: U+3B97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B98");
    },
    Error,
    "encode-error: U+3B98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B99");
    },
    Error,
    "encode-error: U+3B99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B9A");
    },
    Error,
    "encode-error: U+3B9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B9B");
    },
    Error,
    "encode-error: U+3B9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B9C");
    },
    Error,
    "encode-error: U+3B9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B9D");
    },
    Error,
    "encode-error: U+3B9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B9E");
    },
    Error,
    "encode-error: U+3B9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3B9F");
    },
    Error,
    "encode-error: U+3B9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BA0");
    },
    Error,
    "encode-error: U+3BA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BA1");
    },
    Error,
    "encode-error: U+3BA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BA2");
    },
    Error,
    "encode-error: U+3BA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BA3");
    },
    Error,
    "encode-error: U+3BA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BA4");
    },
    Error,
    "encode-error: U+3BA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BA5");
    },
    Error,
    "encode-error: U+3BA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BA6");
    },
    Error,
    "encode-error: U+3BA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BA7");
    },
    Error,
    "encode-error: U+3BA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BA8");
    },
    Error,
    "encode-error: U+3BA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BA9");
    },
    Error,
    "encode-error: U+3BA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BAA");
    },
    Error,
    "encode-error: U+3BAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BAB");
    },
    Error,
    "encode-error: U+3BAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BAC");
    },
    Error,
    "encode-error: U+3BAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BAD");
    },
    Error,
    "encode-error: U+3BAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BAE");
    },
    Error,
    "encode-error: U+3BAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BAF");
    },
    Error,
    "encode-error: U+3BAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BB0");
    },
    Error,
    "encode-error: U+3BB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BB1");
    },
    Error,
    "encode-error: U+3BB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BB2");
    },
    Error,
    "encode-error: U+3BB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BB3");
    },
    Error,
    "encode-error: U+3BB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BB4");
    },
    Error,
    "encode-error: U+3BB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BB5");
    },
    Error,
    "encode-error: U+3BB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BB6");
    },
    Error,
    "encode-error: U+3BB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BB7");
    },
    Error,
    "encode-error: U+3BB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BB8");
    },
    Error,
    "encode-error: U+3BB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BB9");
    },
    Error,
    "encode-error: U+3BB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BBA");
    },
    Error,
    "encode-error: U+3BBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BBB");
    },
    Error,
    "encode-error: U+3BBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BBC");
    },
    Error,
    "encode-error: U+3BBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BBD");
    },
    Error,
    "encode-error: U+3BBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BBE");
    },
    Error,
    "encode-error: U+3BBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BBF");
    },
    Error,
    "encode-error: U+3BBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BC0");
    },
    Error,
    "encode-error: U+3BC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BC1");
    },
    Error,
    "encode-error: U+3BC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BC2");
    },
    Error,
    "encode-error: U+3BC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BC3");
    },
    Error,
    "encode-error: U+3BC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BC4");
    },
    Error,
    "encode-error: U+3BC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BC5");
    },
    Error,
    "encode-error: U+3BC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BC6");
    },
    Error,
    "encode-error: U+3BC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BC7");
    },
    Error,
    "encode-error: U+3BC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BC8");
    },
    Error,
    "encode-error: U+3BC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BC9");
    },
    Error,
    "encode-error: U+3BC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BCA");
    },
    Error,
    "encode-error: U+3BCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BCB");
    },
    Error,
    "encode-error: U+3BCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BCC");
    },
    Error,
    "encode-error: U+3BCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BCD");
    },
    Error,
    "encode-error: U+3BCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BCE");
    },
    Error,
    "encode-error: U+3BCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BCF");
    },
    Error,
    "encode-error: U+3BCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BD0");
    },
    Error,
    "encode-error: U+3BD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BD1");
    },
    Error,
    "encode-error: U+3BD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BD2");
    },
    Error,
    "encode-error: U+3BD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BD3");
    },
    Error,
    "encode-error: U+3BD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BD4");
    },
    Error,
    "encode-error: U+3BD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BD5");
    },
    Error,
    "encode-error: U+3BD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BD6");
    },
    Error,
    "encode-error: U+3BD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BD7");
    },
    Error,
    "encode-error: U+3BD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BD8");
    },
    Error,
    "encode-error: U+3BD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BD9");
    },
    Error,
    "encode-error: U+3BD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BDA");
    },
    Error,
    "encode-error: U+3BDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BDB");
    },
    Error,
    "encode-error: U+3BDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BDC");
    },
    Error,
    "encode-error: U+3BDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BDD");
    },
    Error,
    "encode-error: U+3BDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BDE");
    },
    Error,
    "encode-error: U+3BDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BDF");
    },
    Error,
    "encode-error: U+3BDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BE0");
    },
    Error,
    "encode-error: U+3BE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BE1");
    },
    Error,
    "encode-error: U+3BE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BE2");
    },
    Error,
    "encode-error: U+3BE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BE3");
    },
    Error,
    "encode-error: U+3BE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BE4");
    },
    Error,
    "encode-error: U+3BE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BE5");
    },
    Error,
    "encode-error: U+3BE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BE6");
    },
    Error,
    "encode-error: U+3BE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BE7");
    },
    Error,
    "encode-error: U+3BE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BE8");
    },
    Error,
    "encode-error: U+3BE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BE9");
    },
    Error,
    "encode-error: U+3BE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BEA");
    },
    Error,
    "encode-error: U+3BEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BEB");
    },
    Error,
    "encode-error: U+3BEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BEC");
    },
    Error,
    "encode-error: U+3BEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BED");
    },
    Error,
    "encode-error: U+3BED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BEE");
    },
    Error,
    "encode-error: U+3BEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BEF");
    },
    Error,
    "encode-error: U+3BEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BF0");
    },
    Error,
    "encode-error: U+3BF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BF1");
    },
    Error,
    "encode-error: U+3BF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BF2");
    },
    Error,
    "encode-error: U+3BF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BF3");
    },
    Error,
    "encode-error: U+3BF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BF4");
    },
    Error,
    "encode-error: U+3BF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BF5");
    },
    Error,
    "encode-error: U+3BF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BF6");
    },
    Error,
    "encode-error: U+3BF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BF7");
    },
    Error,
    "encode-error: U+3BF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BF8");
    },
    Error,
    "encode-error: U+3BF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BF9");
    },
    Error,
    "encode-error: U+3BF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BFA");
    },
    Error,
    "encode-error: U+3BFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BFB");
    },
    Error,
    "encode-error: U+3BFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BFC");
    },
    Error,
    "encode-error: U+3BFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BFD");
    },
    Error,
    "encode-error: U+3BFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BFE");
    },
    Error,
    "encode-error: U+3BFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3BFF");
    },
    Error,
    "encode-error: U+3BFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C00");
    },
    Error,
    "encode-error: U+3C00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C01");
    },
    Error,
    "encode-error: U+3C01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C02");
    },
    Error,
    "encode-error: U+3C02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C03");
    },
    Error,
    "encode-error: U+3C03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C04");
    },
    Error,
    "encode-error: U+3C04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C05");
    },
    Error,
    "encode-error: U+3C05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C06");
    },
    Error,
    "encode-error: U+3C06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C07");
    },
    Error,
    "encode-error: U+3C07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C08");
    },
    Error,
    "encode-error: U+3C08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C09");
    },
    Error,
    "encode-error: U+3C09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C0A");
    },
    Error,
    "encode-error: U+3C0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C0B");
    },
    Error,
    "encode-error: U+3C0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C0C");
    },
    Error,
    "encode-error: U+3C0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C0D");
    },
    Error,
    "encode-error: U+3C0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C0E");
    },
    Error,
    "encode-error: U+3C0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C0F");
    },
    Error,
    "encode-error: U+3C0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C10");
    },
    Error,
    "encode-error: U+3C10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C11");
    },
    Error,
    "encode-error: U+3C11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C12");
    },
    Error,
    "encode-error: U+3C12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C13");
    },
    Error,
    "encode-error: U+3C13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C14");
    },
    Error,
    "encode-error: U+3C14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C15");
    },
    Error,
    "encode-error: U+3C15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C16");
    },
    Error,
    "encode-error: U+3C16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C17");
    },
    Error,
    "encode-error: U+3C17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C18");
    },
    Error,
    "encode-error: U+3C18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C19");
    },
    Error,
    "encode-error: U+3C19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C1A");
    },
    Error,
    "encode-error: U+3C1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C1B");
    },
    Error,
    "encode-error: U+3C1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C1C");
    },
    Error,
    "encode-error: U+3C1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C1D");
    },
    Error,
    "encode-error: U+3C1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C1E");
    },
    Error,
    "encode-error: U+3C1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C1F");
    },
    Error,
    "encode-error: U+3C1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C20");
    },
    Error,
    "encode-error: U+3C20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C21");
    },
    Error,
    "encode-error: U+3C21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C22");
    },
    Error,
    "encode-error: U+3C22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C23");
    },
    Error,
    "encode-error: U+3C23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C24");
    },
    Error,
    "encode-error: U+3C24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C25");
    },
    Error,
    "encode-error: U+3C25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C26");
    },
    Error,
    "encode-error: U+3C26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C27");
    },
    Error,
    "encode-error: U+3C27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C28");
    },
    Error,
    "encode-error: U+3C28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C29");
    },
    Error,
    "encode-error: U+3C29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C2A");
    },
    Error,
    "encode-error: U+3C2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C2B");
    },
    Error,
    "encode-error: U+3C2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C2C");
    },
    Error,
    "encode-error: U+3C2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C2D");
    },
    Error,
    "encode-error: U+3C2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C2E");
    },
    Error,
    "encode-error: U+3C2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C2F");
    },
    Error,
    "encode-error: U+3C2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C30");
    },
    Error,
    "encode-error: U+3C30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C31");
    },
    Error,
    "encode-error: U+3C31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C32");
    },
    Error,
    "encode-error: U+3C32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C33");
    },
    Error,
    "encode-error: U+3C33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C34");
    },
    Error,
    "encode-error: U+3C34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C35");
    },
    Error,
    "encode-error: U+3C35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C36");
    },
    Error,
    "encode-error: U+3C36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C37");
    },
    Error,
    "encode-error: U+3C37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C38");
    },
    Error,
    "encode-error: U+3C38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C39");
    },
    Error,
    "encode-error: U+3C39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C3A");
    },
    Error,
    "encode-error: U+3C3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C3B");
    },
    Error,
    "encode-error: U+3C3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C3C");
    },
    Error,
    "encode-error: U+3C3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C3D");
    },
    Error,
    "encode-error: U+3C3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C3E");
    },
    Error,
    "encode-error: U+3C3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C3F");
    },
    Error,
    "encode-error: U+3C3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C40");
    },
    Error,
    "encode-error: U+3C40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C41");
    },
    Error,
    "encode-error: U+3C41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C42");
    },
    Error,
    "encode-error: U+3C42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C43");
    },
    Error,
    "encode-error: U+3C43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C44");
    },
    Error,
    "encode-error: U+3C44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C45");
    },
    Error,
    "encode-error: U+3C45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C46");
    },
    Error,
    "encode-error: U+3C46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C47");
    },
    Error,
    "encode-error: U+3C47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C48");
    },
    Error,
    "encode-error: U+3C48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C49");
    },
    Error,
    "encode-error: U+3C49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C4A");
    },
    Error,
    "encode-error: U+3C4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C4B");
    },
    Error,
    "encode-error: U+3C4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C4C");
    },
    Error,
    "encode-error: U+3C4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C4D");
    },
    Error,
    "encode-error: U+3C4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C4E");
    },
    Error,
    "encode-error: U+3C4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C4F");
    },
    Error,
    "encode-error: U+3C4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C50");
    },
    Error,
    "encode-error: U+3C50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C51");
    },
    Error,
    "encode-error: U+3C51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C52");
    },
    Error,
    "encode-error: U+3C52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C53");
    },
    Error,
    "encode-error: U+3C53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C54");
    },
    Error,
    "encode-error: U+3C54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C55");
    },
    Error,
    "encode-error: U+3C55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C56");
    },
    Error,
    "encode-error: U+3C56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C57");
    },
    Error,
    "encode-error: U+3C57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C58");
    },
    Error,
    "encode-error: U+3C58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C59");
    },
    Error,
    "encode-error: U+3C59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C5A");
    },
    Error,
    "encode-error: U+3C5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C5B");
    },
    Error,
    "encode-error: U+3C5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C5C");
    },
    Error,
    "encode-error: U+3C5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C5D");
    },
    Error,
    "encode-error: U+3C5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C5E");
    },
    Error,
    "encode-error: U+3C5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C5F");
    },
    Error,
    "encode-error: U+3C5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C60");
    },
    Error,
    "encode-error: U+3C60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C61");
    },
    Error,
    "encode-error: U+3C61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C62");
    },
    Error,
    "encode-error: U+3C62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C63");
    },
    Error,
    "encode-error: U+3C63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C64");
    },
    Error,
    "encode-error: U+3C64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C65");
    },
    Error,
    "encode-error: U+3C65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C66");
    },
    Error,
    "encode-error: U+3C66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C67");
    },
    Error,
    "encode-error: U+3C67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C68");
    },
    Error,
    "encode-error: U+3C68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C69");
    },
    Error,
    "encode-error: U+3C69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C6A");
    },
    Error,
    "encode-error: U+3C6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C6B");
    },
    Error,
    "encode-error: U+3C6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C6C");
    },
    Error,
    "encode-error: U+3C6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C6D");
    },
    Error,
    "encode-error: U+3C6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C6E");
    },
    Error,
    "encode-error: U+3C6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C6F");
    },
    Error,
    "encode-error: U+3C6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C70");
    },
    Error,
    "encode-error: U+3C70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C71");
    },
    Error,
    "encode-error: U+3C71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C72");
    },
    Error,
    "encode-error: U+3C72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C73");
    },
    Error,
    "encode-error: U+3C73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C74");
    },
    Error,
    "encode-error: U+3C74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C75");
    },
    Error,
    "encode-error: U+3C75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C76");
    },
    Error,
    "encode-error: U+3C76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C77");
    },
    Error,
    "encode-error: U+3C77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C78");
    },
    Error,
    "encode-error: U+3C78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C79");
    },
    Error,
    "encode-error: U+3C79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C7A");
    },
    Error,
    "encode-error: U+3C7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C7B");
    },
    Error,
    "encode-error: U+3C7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C7C");
    },
    Error,
    "encode-error: U+3C7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C7D");
    },
    Error,
    "encode-error: U+3C7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C7E");
    },
    Error,
    "encode-error: U+3C7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C7F");
    },
    Error,
    "encode-error: U+3C7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C80");
    },
    Error,
    "encode-error: U+3C80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C81");
    },
    Error,
    "encode-error: U+3C81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C82");
    },
    Error,
    "encode-error: U+3C82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C83");
    },
    Error,
    "encode-error: U+3C83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C84");
    },
    Error,
    "encode-error: U+3C84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C85");
    },
    Error,
    "encode-error: U+3C85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C86");
    },
    Error,
    "encode-error: U+3C86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C87");
    },
    Error,
    "encode-error: U+3C87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C88");
    },
    Error,
    "encode-error: U+3C88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C89");
    },
    Error,
    "encode-error: U+3C89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C8A");
    },
    Error,
    "encode-error: U+3C8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C8B");
    },
    Error,
    "encode-error: U+3C8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C8C");
    },
    Error,
    "encode-error: U+3C8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C8D");
    },
    Error,
    "encode-error: U+3C8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C8E");
    },
    Error,
    "encode-error: U+3C8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C8F");
    },
    Error,
    "encode-error: U+3C8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C90");
    },
    Error,
    "encode-error: U+3C90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C91");
    },
    Error,
    "encode-error: U+3C91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C92");
    },
    Error,
    "encode-error: U+3C92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C93");
    },
    Error,
    "encode-error: U+3C93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C94");
    },
    Error,
    "encode-error: U+3C94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C95");
    },
    Error,
    "encode-error: U+3C95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C96");
    },
    Error,
    "encode-error: U+3C96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C97");
    },
    Error,
    "encode-error: U+3C97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C98");
    },
    Error,
    "encode-error: U+3C98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C99");
    },
    Error,
    "encode-error: U+3C99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C9A");
    },
    Error,
    "encode-error: U+3C9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C9B");
    },
    Error,
    "encode-error: U+3C9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C9C");
    },
    Error,
    "encode-error: U+3C9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C9D");
    },
    Error,
    "encode-error: U+3C9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C9E");
    },
    Error,
    "encode-error: U+3C9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3C9F");
    },
    Error,
    "encode-error: U+3C9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CA0");
    },
    Error,
    "encode-error: U+3CA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CA1");
    },
    Error,
    "encode-error: U+3CA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CA2");
    },
    Error,
    "encode-error: U+3CA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CA3");
    },
    Error,
    "encode-error: U+3CA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CA4");
    },
    Error,
    "encode-error: U+3CA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CA5");
    },
    Error,
    "encode-error: U+3CA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CA6");
    },
    Error,
    "encode-error: U+3CA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CA7");
    },
    Error,
    "encode-error: U+3CA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CA8");
    },
    Error,
    "encode-error: U+3CA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CA9");
    },
    Error,
    "encode-error: U+3CA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CAA");
    },
    Error,
    "encode-error: U+3CAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CAB");
    },
    Error,
    "encode-error: U+3CAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CAC");
    },
    Error,
    "encode-error: U+3CAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CAD");
    },
    Error,
    "encode-error: U+3CAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CAE");
    },
    Error,
    "encode-error: U+3CAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CAF");
    },
    Error,
    "encode-error: U+3CAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CB0");
    },
    Error,
    "encode-error: U+3CB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CB1");
    },
    Error,
    "encode-error: U+3CB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CB2");
    },
    Error,
    "encode-error: U+3CB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CB3");
    },
    Error,
    "encode-error: U+3CB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CB4");
    },
    Error,
    "encode-error: U+3CB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CB5");
    },
    Error,
    "encode-error: U+3CB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CB6");
    },
    Error,
    "encode-error: U+3CB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CB7");
    },
    Error,
    "encode-error: U+3CB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CB8");
    },
    Error,
    "encode-error: U+3CB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CB9");
    },
    Error,
    "encode-error: U+3CB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CBA");
    },
    Error,
    "encode-error: U+3CBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CBB");
    },
    Error,
    "encode-error: U+3CBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CBC");
    },
    Error,
    "encode-error: U+3CBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CBD");
    },
    Error,
    "encode-error: U+3CBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CBE");
    },
    Error,
    "encode-error: U+3CBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CBF");
    },
    Error,
    "encode-error: U+3CBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CC0");
    },
    Error,
    "encode-error: U+3CC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CC1");
    },
    Error,
    "encode-error: U+3CC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CC2");
    },
    Error,
    "encode-error: U+3CC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CC3");
    },
    Error,
    "encode-error: U+3CC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CC4");
    },
    Error,
    "encode-error: U+3CC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CC5");
    },
    Error,
    "encode-error: U+3CC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CC6");
    },
    Error,
    "encode-error: U+3CC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CC7");
    },
    Error,
    "encode-error: U+3CC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CC8");
    },
    Error,
    "encode-error: U+3CC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CC9");
    },
    Error,
    "encode-error: U+3CC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CCA");
    },
    Error,
    "encode-error: U+3CCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CCB");
    },
    Error,
    "encode-error: U+3CCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CCC");
    },
    Error,
    "encode-error: U+3CCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CCD");
    },
    Error,
    "encode-error: U+3CCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CCE");
    },
    Error,
    "encode-error: U+3CCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CCF");
    },
    Error,
    "encode-error: U+3CCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CD0");
    },
    Error,
    "encode-error: U+3CD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CD1");
    },
    Error,
    "encode-error: U+3CD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CD2");
    },
    Error,
    "encode-error: U+3CD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CD3");
    },
    Error,
    "encode-error: U+3CD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CD4");
    },
    Error,
    "encode-error: U+3CD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CD5");
    },
    Error,
    "encode-error: U+3CD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CD6");
    },
    Error,
    "encode-error: U+3CD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CD7");
    },
    Error,
    "encode-error: U+3CD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CD8");
    },
    Error,
    "encode-error: U+3CD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CD9");
    },
    Error,
    "encode-error: U+3CD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CDA");
    },
    Error,
    "encode-error: U+3CDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CDB");
    },
    Error,
    "encode-error: U+3CDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CDC");
    },
    Error,
    "encode-error: U+3CDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CDD");
    },
    Error,
    "encode-error: U+3CDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CDE");
    },
    Error,
    "encode-error: U+3CDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CDF");
    },
    Error,
    "encode-error: U+3CDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CE0");
    },
    Error,
    "encode-error: U+3CE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CE1");
    },
    Error,
    "encode-error: U+3CE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CE2");
    },
    Error,
    "encode-error: U+3CE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CE3");
    },
    Error,
    "encode-error: U+3CE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CE4");
    },
    Error,
    "encode-error: U+3CE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CE5");
    },
    Error,
    "encode-error: U+3CE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CE6");
    },
    Error,
    "encode-error: U+3CE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CE7");
    },
    Error,
    "encode-error: U+3CE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CE8");
    },
    Error,
    "encode-error: U+3CE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CE9");
    },
    Error,
    "encode-error: U+3CE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CEA");
    },
    Error,
    "encode-error: U+3CEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CEB");
    },
    Error,
    "encode-error: U+3CEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CEC");
    },
    Error,
    "encode-error: U+3CEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CED");
    },
    Error,
    "encode-error: U+3CED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CEE");
    },
    Error,
    "encode-error: U+3CEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CEF");
    },
    Error,
    "encode-error: U+3CEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CF0");
    },
    Error,
    "encode-error: U+3CF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CF1");
    },
    Error,
    "encode-error: U+3CF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CF2");
    },
    Error,
    "encode-error: U+3CF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CF3");
    },
    Error,
    "encode-error: U+3CF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CF4");
    },
    Error,
    "encode-error: U+3CF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CF5");
    },
    Error,
    "encode-error: U+3CF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CF6");
    },
    Error,
    "encode-error: U+3CF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CF7");
    },
    Error,
    "encode-error: U+3CF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CF8");
    },
    Error,
    "encode-error: U+3CF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CF9");
    },
    Error,
    "encode-error: U+3CF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CFA");
    },
    Error,
    "encode-error: U+3CFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CFB");
    },
    Error,
    "encode-error: U+3CFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CFC");
    },
    Error,
    "encode-error: U+3CFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CFD");
    },
    Error,
    "encode-error: U+3CFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CFE");
    },
    Error,
    "encode-error: U+3CFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3CFF");
    },
    Error,
    "encode-error: U+3CFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D00");
    },
    Error,
    "encode-error: U+3D00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D01");
    },
    Error,
    "encode-error: U+3D01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D02");
    },
    Error,
    "encode-error: U+3D02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D03");
    },
    Error,
    "encode-error: U+3D03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D04");
    },
    Error,
    "encode-error: U+3D04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D05");
    },
    Error,
    "encode-error: U+3D05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D06");
    },
    Error,
    "encode-error: U+3D06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D07");
    },
    Error,
    "encode-error: U+3D07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D08");
    },
    Error,
    "encode-error: U+3D08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D09");
    },
    Error,
    "encode-error: U+3D09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D0A");
    },
    Error,
    "encode-error: U+3D0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D0B");
    },
    Error,
    "encode-error: U+3D0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D0C");
    },
    Error,
    "encode-error: U+3D0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D0D");
    },
    Error,
    "encode-error: U+3D0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D0E");
    },
    Error,
    "encode-error: U+3D0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D0F");
    },
    Error,
    "encode-error: U+3D0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D10");
    },
    Error,
    "encode-error: U+3D10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D11");
    },
    Error,
    "encode-error: U+3D11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D12");
    },
    Error,
    "encode-error: U+3D12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D13");
    },
    Error,
    "encode-error: U+3D13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D14");
    },
    Error,
    "encode-error: U+3D14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D15");
    },
    Error,
    "encode-error: U+3D15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D16");
    },
    Error,
    "encode-error: U+3D16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D17");
    },
    Error,
    "encode-error: U+3D17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D18");
    },
    Error,
    "encode-error: U+3D18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D19");
    },
    Error,
    "encode-error: U+3D19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D1A");
    },
    Error,
    "encode-error: U+3D1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D1B");
    },
    Error,
    "encode-error: U+3D1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D1C");
    },
    Error,
    "encode-error: U+3D1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D1D");
    },
    Error,
    "encode-error: U+3D1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D1E");
    },
    Error,
    "encode-error: U+3D1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D1F");
    },
    Error,
    "encode-error: U+3D1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D20");
    },
    Error,
    "encode-error: U+3D20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D21");
    },
    Error,
    "encode-error: U+3D21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D22");
    },
    Error,
    "encode-error: U+3D22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D23");
    },
    Error,
    "encode-error: U+3D23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D24");
    },
    Error,
    "encode-error: U+3D24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D25");
    },
    Error,
    "encode-error: U+3D25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D26");
    },
    Error,
    "encode-error: U+3D26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D27");
    },
    Error,
    "encode-error: U+3D27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D28");
    },
    Error,
    "encode-error: U+3D28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D29");
    },
    Error,
    "encode-error: U+3D29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D2A");
    },
    Error,
    "encode-error: U+3D2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D2B");
    },
    Error,
    "encode-error: U+3D2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D2C");
    },
    Error,
    "encode-error: U+3D2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D2D");
    },
    Error,
    "encode-error: U+3D2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D2E");
    },
    Error,
    "encode-error: U+3D2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D2F");
    },
    Error,
    "encode-error: U+3D2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D30");
    },
    Error,
    "encode-error: U+3D30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D31");
    },
    Error,
    "encode-error: U+3D31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D32");
    },
    Error,
    "encode-error: U+3D32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D33");
    },
    Error,
    "encode-error: U+3D33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D34");
    },
    Error,
    "encode-error: U+3D34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D35");
    },
    Error,
    "encode-error: U+3D35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D36");
    },
    Error,
    "encode-error: U+3D36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D37");
    },
    Error,
    "encode-error: U+3D37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D38");
    },
    Error,
    "encode-error: U+3D38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D39");
    },
    Error,
    "encode-error: U+3D39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D3A");
    },
    Error,
    "encode-error: U+3D3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D3B");
    },
    Error,
    "encode-error: U+3D3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D3C");
    },
    Error,
    "encode-error: U+3D3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D3D");
    },
    Error,
    "encode-error: U+3D3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D3E");
    },
    Error,
    "encode-error: U+3D3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D3F");
    },
    Error,
    "encode-error: U+3D3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D40");
    },
    Error,
    "encode-error: U+3D40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D41");
    },
    Error,
    "encode-error: U+3D41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D42");
    },
    Error,
    "encode-error: U+3D42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D43");
    },
    Error,
    "encode-error: U+3D43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D44");
    },
    Error,
    "encode-error: U+3D44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D45");
    },
    Error,
    "encode-error: U+3D45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D46");
    },
    Error,
    "encode-error: U+3D46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D47");
    },
    Error,
    "encode-error: U+3D47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D48");
    },
    Error,
    "encode-error: U+3D48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D49");
    },
    Error,
    "encode-error: U+3D49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D4A");
    },
    Error,
    "encode-error: U+3D4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D4B");
    },
    Error,
    "encode-error: U+3D4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D4C");
    },
    Error,
    "encode-error: U+3D4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D4D");
    },
    Error,
    "encode-error: U+3D4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D4E");
    },
    Error,
    "encode-error: U+3D4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D4F");
    },
    Error,
    "encode-error: U+3D4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D50");
    },
    Error,
    "encode-error: U+3D50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D51");
    },
    Error,
    "encode-error: U+3D51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D52");
    },
    Error,
    "encode-error: U+3D52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D53");
    },
    Error,
    "encode-error: U+3D53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D54");
    },
    Error,
    "encode-error: U+3D54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D55");
    },
    Error,
    "encode-error: U+3D55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D56");
    },
    Error,
    "encode-error: U+3D56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D57");
    },
    Error,
    "encode-error: U+3D57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D58");
    },
    Error,
    "encode-error: U+3D58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D59");
    },
    Error,
    "encode-error: U+3D59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D5A");
    },
    Error,
    "encode-error: U+3D5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D5B");
    },
    Error,
    "encode-error: U+3D5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D5C");
    },
    Error,
    "encode-error: U+3D5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D5D");
    },
    Error,
    "encode-error: U+3D5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D5E");
    },
    Error,
    "encode-error: U+3D5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D5F");
    },
    Error,
    "encode-error: U+3D5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D60");
    },
    Error,
    "encode-error: U+3D60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D61");
    },
    Error,
    "encode-error: U+3D61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D62");
    },
    Error,
    "encode-error: U+3D62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D63");
    },
    Error,
    "encode-error: U+3D63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D64");
    },
    Error,
    "encode-error: U+3D64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D65");
    },
    Error,
    "encode-error: U+3D65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D66");
    },
    Error,
    "encode-error: U+3D66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D67");
    },
    Error,
    "encode-error: U+3D67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D68");
    },
    Error,
    "encode-error: U+3D68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D69");
    },
    Error,
    "encode-error: U+3D69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D6A");
    },
    Error,
    "encode-error: U+3D6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D6B");
    },
    Error,
    "encode-error: U+3D6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D6C");
    },
    Error,
    "encode-error: U+3D6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D6D");
    },
    Error,
    "encode-error: U+3D6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D6E");
    },
    Error,
    "encode-error: U+3D6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D6F");
    },
    Error,
    "encode-error: U+3D6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D70");
    },
    Error,
    "encode-error: U+3D70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D71");
    },
    Error,
    "encode-error: U+3D71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D72");
    },
    Error,
    "encode-error: U+3D72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D73");
    },
    Error,
    "encode-error: U+3D73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D74");
    },
    Error,
    "encode-error: U+3D74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D75");
    },
    Error,
    "encode-error: U+3D75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D76");
    },
    Error,
    "encode-error: U+3D76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D77");
    },
    Error,
    "encode-error: U+3D77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D78");
    },
    Error,
    "encode-error: U+3D78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D79");
    },
    Error,
    "encode-error: U+3D79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D7A");
    },
    Error,
    "encode-error: U+3D7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D7B");
    },
    Error,
    "encode-error: U+3D7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D7C");
    },
    Error,
    "encode-error: U+3D7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D7D");
    },
    Error,
    "encode-error: U+3D7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D7E");
    },
    Error,
    "encode-error: U+3D7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D7F");
    },
    Error,
    "encode-error: U+3D7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D80");
    },
    Error,
    "encode-error: U+3D80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D81");
    },
    Error,
    "encode-error: U+3D81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D82");
    },
    Error,
    "encode-error: U+3D82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D83");
    },
    Error,
    "encode-error: U+3D83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D84");
    },
    Error,
    "encode-error: U+3D84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D85");
    },
    Error,
    "encode-error: U+3D85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D86");
    },
    Error,
    "encode-error: U+3D86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D87");
    },
    Error,
    "encode-error: U+3D87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D88");
    },
    Error,
    "encode-error: U+3D88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D89");
    },
    Error,
    "encode-error: U+3D89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D8A");
    },
    Error,
    "encode-error: U+3D8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D8B");
    },
    Error,
    "encode-error: U+3D8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D8C");
    },
    Error,
    "encode-error: U+3D8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D8D");
    },
    Error,
    "encode-error: U+3D8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D8E");
    },
    Error,
    "encode-error: U+3D8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D8F");
    },
    Error,
    "encode-error: U+3D8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D90");
    },
    Error,
    "encode-error: U+3D90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D91");
    },
    Error,
    "encode-error: U+3D91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D92");
    },
    Error,
    "encode-error: U+3D92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D93");
    },
    Error,
    "encode-error: U+3D93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D94");
    },
    Error,
    "encode-error: U+3D94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D95");
    },
    Error,
    "encode-error: U+3D95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D96");
    },
    Error,
    "encode-error: U+3D96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D97");
    },
    Error,
    "encode-error: U+3D97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D98");
    },
    Error,
    "encode-error: U+3D98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D99");
    },
    Error,
    "encode-error: U+3D99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D9A");
    },
    Error,
    "encode-error: U+3D9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D9B");
    },
    Error,
    "encode-error: U+3D9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D9C");
    },
    Error,
    "encode-error: U+3D9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D9D");
    },
    Error,
    "encode-error: U+3D9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D9E");
    },
    Error,
    "encode-error: U+3D9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3D9F");
    },
    Error,
    "encode-error: U+3D9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DA0");
    },
    Error,
    "encode-error: U+3DA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DA1");
    },
    Error,
    "encode-error: U+3DA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DA2");
    },
    Error,
    "encode-error: U+3DA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DA3");
    },
    Error,
    "encode-error: U+3DA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DA4");
    },
    Error,
    "encode-error: U+3DA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DA5");
    },
    Error,
    "encode-error: U+3DA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DA6");
    },
    Error,
    "encode-error: U+3DA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DA7");
    },
    Error,
    "encode-error: U+3DA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DA8");
    },
    Error,
    "encode-error: U+3DA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DA9");
    },
    Error,
    "encode-error: U+3DA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DAA");
    },
    Error,
    "encode-error: U+3DAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DAB");
    },
    Error,
    "encode-error: U+3DAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DAC");
    },
    Error,
    "encode-error: U+3DAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DAD");
    },
    Error,
    "encode-error: U+3DAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DAE");
    },
    Error,
    "encode-error: U+3DAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DAF");
    },
    Error,
    "encode-error: U+3DAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DB0");
    },
    Error,
    "encode-error: U+3DB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DB1");
    },
    Error,
    "encode-error: U+3DB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DB2");
    },
    Error,
    "encode-error: U+3DB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DB3");
    },
    Error,
    "encode-error: U+3DB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DB4");
    },
    Error,
    "encode-error: U+3DB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DB5");
    },
    Error,
    "encode-error: U+3DB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DB6");
    },
    Error,
    "encode-error: U+3DB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DB7");
    },
    Error,
    "encode-error: U+3DB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DB8");
    },
    Error,
    "encode-error: U+3DB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DB9");
    },
    Error,
    "encode-error: U+3DB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DBA");
    },
    Error,
    "encode-error: U+3DBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DBB");
    },
    Error,
    "encode-error: U+3DBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DBC");
    },
    Error,
    "encode-error: U+3DBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DBD");
    },
    Error,
    "encode-error: U+3DBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DBE");
    },
    Error,
    "encode-error: U+3DBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DBF");
    },
    Error,
    "encode-error: U+3DBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DC0");
    },
    Error,
    "encode-error: U+3DC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DC1");
    },
    Error,
    "encode-error: U+3DC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DC2");
    },
    Error,
    "encode-error: U+3DC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DC3");
    },
    Error,
    "encode-error: U+3DC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DC4");
    },
    Error,
    "encode-error: U+3DC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DC5");
    },
    Error,
    "encode-error: U+3DC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DC6");
    },
    Error,
    "encode-error: U+3DC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DC7");
    },
    Error,
    "encode-error: U+3DC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DC8");
    },
    Error,
    "encode-error: U+3DC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DC9");
    },
    Error,
    "encode-error: U+3DC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DCA");
    },
    Error,
    "encode-error: U+3DCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DCB");
    },
    Error,
    "encode-error: U+3DCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DCC");
    },
    Error,
    "encode-error: U+3DCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DCD");
    },
    Error,
    "encode-error: U+3DCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DCE");
    },
    Error,
    "encode-error: U+3DCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DCF");
    },
    Error,
    "encode-error: U+3DCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DD0");
    },
    Error,
    "encode-error: U+3DD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DD1");
    },
    Error,
    "encode-error: U+3DD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DD2");
    },
    Error,
    "encode-error: U+3DD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DD3");
    },
    Error,
    "encode-error: U+3DD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DD4");
    },
    Error,
    "encode-error: U+3DD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DD5");
    },
    Error,
    "encode-error: U+3DD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DD6");
    },
    Error,
    "encode-error: U+3DD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DD7");
    },
    Error,
    "encode-error: U+3DD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DD8");
    },
    Error,
    "encode-error: U+3DD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DD9");
    },
    Error,
    "encode-error: U+3DD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DDA");
    },
    Error,
    "encode-error: U+3DDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DDB");
    },
    Error,
    "encode-error: U+3DDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DDC");
    },
    Error,
    "encode-error: U+3DDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DDD");
    },
    Error,
    "encode-error: U+3DDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DDE");
    },
    Error,
    "encode-error: U+3DDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DDF");
    },
    Error,
    "encode-error: U+3DDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DE0");
    },
    Error,
    "encode-error: U+3DE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DE1");
    },
    Error,
    "encode-error: U+3DE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DE2");
    },
    Error,
    "encode-error: U+3DE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DE3");
    },
    Error,
    "encode-error: U+3DE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DE4");
    },
    Error,
    "encode-error: U+3DE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DE5");
    },
    Error,
    "encode-error: U+3DE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DE6");
    },
    Error,
    "encode-error: U+3DE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DE7");
    },
    Error,
    "encode-error: U+3DE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DE8");
    },
    Error,
    "encode-error: U+3DE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DE9");
    },
    Error,
    "encode-error: U+3DE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DEA");
    },
    Error,
    "encode-error: U+3DEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DEB");
    },
    Error,
    "encode-error: U+3DEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DEC");
    },
    Error,
    "encode-error: U+3DEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DED");
    },
    Error,
    "encode-error: U+3DED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DEE");
    },
    Error,
    "encode-error: U+3DEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DEF");
    },
    Error,
    "encode-error: U+3DEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DF0");
    },
    Error,
    "encode-error: U+3DF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DF1");
    },
    Error,
    "encode-error: U+3DF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DF2");
    },
    Error,
    "encode-error: U+3DF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DF3");
    },
    Error,
    "encode-error: U+3DF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DF4");
    },
    Error,
    "encode-error: U+3DF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DF5");
    },
    Error,
    "encode-error: U+3DF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DF6");
    },
    Error,
    "encode-error: U+3DF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DF7");
    },
    Error,
    "encode-error: U+3DF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DF8");
    },
    Error,
    "encode-error: U+3DF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DF9");
    },
    Error,
    "encode-error: U+3DF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DFA");
    },
    Error,
    "encode-error: U+3DFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DFB");
    },
    Error,
    "encode-error: U+3DFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DFC");
    },
    Error,
    "encode-error: U+3DFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DFD");
    },
    Error,
    "encode-error: U+3DFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DFE");
    },
    Error,
    "encode-error: U+3DFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3DFF");
    },
    Error,
    "encode-error: U+3DFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E00");
    },
    Error,
    "encode-error: U+3E00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E01");
    },
    Error,
    "encode-error: U+3E01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E02");
    },
    Error,
    "encode-error: U+3E02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E03");
    },
    Error,
    "encode-error: U+3E03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E04");
    },
    Error,
    "encode-error: U+3E04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E05");
    },
    Error,
    "encode-error: U+3E05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E06");
    },
    Error,
    "encode-error: U+3E06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E07");
    },
    Error,
    "encode-error: U+3E07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E08");
    },
    Error,
    "encode-error: U+3E08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E09");
    },
    Error,
    "encode-error: U+3E09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E0A");
    },
    Error,
    "encode-error: U+3E0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E0B");
    },
    Error,
    "encode-error: U+3E0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E0C");
    },
    Error,
    "encode-error: U+3E0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E0D");
    },
    Error,
    "encode-error: U+3E0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E0E");
    },
    Error,
    "encode-error: U+3E0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E0F");
    },
    Error,
    "encode-error: U+3E0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E10");
    },
    Error,
    "encode-error: U+3E10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E11");
    },
    Error,
    "encode-error: U+3E11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E12");
    },
    Error,
    "encode-error: U+3E12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E13");
    },
    Error,
    "encode-error: U+3E13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E14");
    },
    Error,
    "encode-error: U+3E14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E15");
    },
    Error,
    "encode-error: U+3E15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E16");
    },
    Error,
    "encode-error: U+3E16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E17");
    },
    Error,
    "encode-error: U+3E17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E18");
    },
    Error,
    "encode-error: U+3E18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E19");
    },
    Error,
    "encode-error: U+3E19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E1A");
    },
    Error,
    "encode-error: U+3E1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E1B");
    },
    Error,
    "encode-error: U+3E1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E1C");
    },
    Error,
    "encode-error: U+3E1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E1D");
    },
    Error,
    "encode-error: U+3E1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E1E");
    },
    Error,
    "encode-error: U+3E1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E1F");
    },
    Error,
    "encode-error: U+3E1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E20");
    },
    Error,
    "encode-error: U+3E20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E21");
    },
    Error,
    "encode-error: U+3E21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E22");
    },
    Error,
    "encode-error: U+3E22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E23");
    },
    Error,
    "encode-error: U+3E23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E24");
    },
    Error,
    "encode-error: U+3E24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E25");
    },
    Error,
    "encode-error: U+3E25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E26");
    },
    Error,
    "encode-error: U+3E26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E27");
    },
    Error,
    "encode-error: U+3E27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E28");
    },
    Error,
    "encode-error: U+3E28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E29");
    },
    Error,
    "encode-error: U+3E29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E2A");
    },
    Error,
    "encode-error: U+3E2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E2B");
    },
    Error,
    "encode-error: U+3E2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E2C");
    },
    Error,
    "encode-error: U+3E2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E2D");
    },
    Error,
    "encode-error: U+3E2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E2E");
    },
    Error,
    "encode-error: U+3E2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E2F");
    },
    Error,
    "encode-error: U+3E2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E30");
    },
    Error,
    "encode-error: U+3E30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E31");
    },
    Error,
    "encode-error: U+3E31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E32");
    },
    Error,
    "encode-error: U+3E32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E33");
    },
    Error,
    "encode-error: U+3E33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E34");
    },
    Error,
    "encode-error: U+3E34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E35");
    },
    Error,
    "encode-error: U+3E35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E36");
    },
    Error,
    "encode-error: U+3E36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E37");
    },
    Error,
    "encode-error: U+3E37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E38");
    },
    Error,
    "encode-error: U+3E38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E39");
    },
    Error,
    "encode-error: U+3E39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E3A");
    },
    Error,
    "encode-error: U+3E3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E3B");
    },
    Error,
    "encode-error: U+3E3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E3C");
    },
    Error,
    "encode-error: U+3E3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E3D");
    },
    Error,
    "encode-error: U+3E3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E3E");
    },
    Error,
    "encode-error: U+3E3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E3F");
    },
    Error,
    "encode-error: U+3E3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E40");
    },
    Error,
    "encode-error: U+3E40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E41");
    },
    Error,
    "encode-error: U+3E41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E42");
    },
    Error,
    "encode-error: U+3E42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E43");
    },
    Error,
    "encode-error: U+3E43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E44");
    },
    Error,
    "encode-error: U+3E44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E45");
    },
    Error,
    "encode-error: U+3E45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E46");
    },
    Error,
    "encode-error: U+3E46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E47");
    },
    Error,
    "encode-error: U+3E47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E48");
    },
    Error,
    "encode-error: U+3E48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E49");
    },
    Error,
    "encode-error: U+3E49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E4A");
    },
    Error,
    "encode-error: U+3E4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E4B");
    },
    Error,
    "encode-error: U+3E4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E4C");
    },
    Error,
    "encode-error: U+3E4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E4D");
    },
    Error,
    "encode-error: U+3E4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E4E");
    },
    Error,
    "encode-error: U+3E4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E4F");
    },
    Error,
    "encode-error: U+3E4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E50");
    },
    Error,
    "encode-error: U+3E50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E51");
    },
    Error,
    "encode-error: U+3E51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E52");
    },
    Error,
    "encode-error: U+3E52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E53");
    },
    Error,
    "encode-error: U+3E53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E54");
    },
    Error,
    "encode-error: U+3E54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E55");
    },
    Error,
    "encode-error: U+3E55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E56");
    },
    Error,
    "encode-error: U+3E56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E57");
    },
    Error,
    "encode-error: U+3E57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E58");
    },
    Error,
    "encode-error: U+3E58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E59");
    },
    Error,
    "encode-error: U+3E59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E5A");
    },
    Error,
    "encode-error: U+3E5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E5B");
    },
    Error,
    "encode-error: U+3E5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E5C");
    },
    Error,
    "encode-error: U+3E5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E5D");
    },
    Error,
    "encode-error: U+3E5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E5E");
    },
    Error,
    "encode-error: U+3E5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E5F");
    },
    Error,
    "encode-error: U+3E5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E60");
    },
    Error,
    "encode-error: U+3E60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E61");
    },
    Error,
    "encode-error: U+3E61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E62");
    },
    Error,
    "encode-error: U+3E62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E63");
    },
    Error,
    "encode-error: U+3E63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E64");
    },
    Error,
    "encode-error: U+3E64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E65");
    },
    Error,
    "encode-error: U+3E65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E66");
    },
    Error,
    "encode-error: U+3E66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E67");
    },
    Error,
    "encode-error: U+3E67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E68");
    },
    Error,
    "encode-error: U+3E68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E69");
    },
    Error,
    "encode-error: U+3E69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E6A");
    },
    Error,
    "encode-error: U+3E6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E6B");
    },
    Error,
    "encode-error: U+3E6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E6C");
    },
    Error,
    "encode-error: U+3E6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E6D");
    },
    Error,
    "encode-error: U+3E6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E6E");
    },
    Error,
    "encode-error: U+3E6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E6F");
    },
    Error,
    "encode-error: U+3E6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E70");
    },
    Error,
    "encode-error: U+3E70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E71");
    },
    Error,
    "encode-error: U+3E71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E72");
    },
    Error,
    "encode-error: U+3E72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E73");
    },
    Error,
    "encode-error: U+3E73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E74");
    },
    Error,
    "encode-error: U+3E74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E75");
    },
    Error,
    "encode-error: U+3E75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E76");
    },
    Error,
    "encode-error: U+3E76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E77");
    },
    Error,
    "encode-error: U+3E77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E78");
    },
    Error,
    "encode-error: U+3E78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E79");
    },
    Error,
    "encode-error: U+3E79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E7A");
    },
    Error,
    "encode-error: U+3E7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E7B");
    },
    Error,
    "encode-error: U+3E7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E7C");
    },
    Error,
    "encode-error: U+3E7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E7D");
    },
    Error,
    "encode-error: U+3E7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E7E");
    },
    Error,
    "encode-error: U+3E7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E7F");
    },
    Error,
    "encode-error: U+3E7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E80");
    },
    Error,
    "encode-error: U+3E80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E81");
    },
    Error,
    "encode-error: U+3E81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E82");
    },
    Error,
    "encode-error: U+3E82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E83");
    },
    Error,
    "encode-error: U+3E83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E84");
    },
    Error,
    "encode-error: U+3E84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E85");
    },
    Error,
    "encode-error: U+3E85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E86");
    },
    Error,
    "encode-error: U+3E86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E87");
    },
    Error,
    "encode-error: U+3E87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E88");
    },
    Error,
    "encode-error: U+3E88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E89");
    },
    Error,
    "encode-error: U+3E89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E8A");
    },
    Error,
    "encode-error: U+3E8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E8B");
    },
    Error,
    "encode-error: U+3E8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E8C");
    },
    Error,
    "encode-error: U+3E8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E8D");
    },
    Error,
    "encode-error: U+3E8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E8E");
    },
    Error,
    "encode-error: U+3E8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E8F");
    },
    Error,
    "encode-error: U+3E8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E90");
    },
    Error,
    "encode-error: U+3E90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E91");
    },
    Error,
    "encode-error: U+3E91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E92");
    },
    Error,
    "encode-error: U+3E92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E93");
    },
    Error,
    "encode-error: U+3E93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E94");
    },
    Error,
    "encode-error: U+3E94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E95");
    },
    Error,
    "encode-error: U+3E95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E96");
    },
    Error,
    "encode-error: U+3E96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E97");
    },
    Error,
    "encode-error: U+3E97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E98");
    },
    Error,
    "encode-error: U+3E98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E99");
    },
    Error,
    "encode-error: U+3E99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E9A");
    },
    Error,
    "encode-error: U+3E9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E9B");
    },
    Error,
    "encode-error: U+3E9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E9C");
    },
    Error,
    "encode-error: U+3E9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E9D");
    },
    Error,
    "encode-error: U+3E9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E9E");
    },
    Error,
    "encode-error: U+3E9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3E9F");
    },
    Error,
    "encode-error: U+3E9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EA0");
    },
    Error,
    "encode-error: U+3EA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EA1");
    },
    Error,
    "encode-error: U+3EA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EA2");
    },
    Error,
    "encode-error: U+3EA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EA3");
    },
    Error,
    "encode-error: U+3EA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EA4");
    },
    Error,
    "encode-error: U+3EA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EA5");
    },
    Error,
    "encode-error: U+3EA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EA6");
    },
    Error,
    "encode-error: U+3EA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EA7");
    },
    Error,
    "encode-error: U+3EA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EA8");
    },
    Error,
    "encode-error: U+3EA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EA9");
    },
    Error,
    "encode-error: U+3EA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EAA");
    },
    Error,
    "encode-error: U+3EAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EAB");
    },
    Error,
    "encode-error: U+3EAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EAC");
    },
    Error,
    "encode-error: U+3EAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EAD");
    },
    Error,
    "encode-error: U+3EAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EAE");
    },
    Error,
    "encode-error: U+3EAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EAF");
    },
    Error,
    "encode-error: U+3EAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EB0");
    },
    Error,
    "encode-error: U+3EB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EB1");
    },
    Error,
    "encode-error: U+3EB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EB2");
    },
    Error,
    "encode-error: U+3EB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EB3");
    },
    Error,
    "encode-error: U+3EB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EB4");
    },
    Error,
    "encode-error: U+3EB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EB5");
    },
    Error,
    "encode-error: U+3EB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EB6");
    },
    Error,
    "encode-error: U+3EB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EB7");
    },
    Error,
    "encode-error: U+3EB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EB8");
    },
    Error,
    "encode-error: U+3EB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EB9");
    },
    Error,
    "encode-error: U+3EB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EBA");
    },
    Error,
    "encode-error: U+3EBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EBB");
    },
    Error,
    "encode-error: U+3EBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EBC");
    },
    Error,
    "encode-error: U+3EBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EBD");
    },
    Error,
    "encode-error: U+3EBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EBE");
    },
    Error,
    "encode-error: U+3EBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EBF");
    },
    Error,
    "encode-error: U+3EBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EC0");
    },
    Error,
    "encode-error: U+3EC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EC1");
    },
    Error,
    "encode-error: U+3EC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EC2");
    },
    Error,
    "encode-error: U+3EC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EC3");
    },
    Error,
    "encode-error: U+3EC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EC4");
    },
    Error,
    "encode-error: U+3EC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EC5");
    },
    Error,
    "encode-error: U+3EC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EC6");
    },
    Error,
    "encode-error: U+3EC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EC7");
    },
    Error,
    "encode-error: U+3EC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EC8");
    },
    Error,
    "encode-error: U+3EC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EC9");
    },
    Error,
    "encode-error: U+3EC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ECA");
    },
    Error,
    "encode-error: U+3ECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ECB");
    },
    Error,
    "encode-error: U+3ECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ECC");
    },
    Error,
    "encode-error: U+3ECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ECD");
    },
    Error,
    "encode-error: U+3ECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ECE");
    },
    Error,
    "encode-error: U+3ECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ECF");
    },
    Error,
    "encode-error: U+3ECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ED0");
    },
    Error,
    "encode-error: U+3ED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ED1");
    },
    Error,
    "encode-error: U+3ED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ED2");
    },
    Error,
    "encode-error: U+3ED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ED3");
    },
    Error,
    "encode-error: U+3ED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ED4");
    },
    Error,
    "encode-error: U+3ED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ED5");
    },
    Error,
    "encode-error: U+3ED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ED6");
    },
    Error,
    "encode-error: U+3ED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ED7");
    },
    Error,
    "encode-error: U+3ED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ED8");
    },
    Error,
    "encode-error: U+3ED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3ED9");
    },
    Error,
    "encode-error: U+3ED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EDA");
    },
    Error,
    "encode-error: U+3EDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EDB");
    },
    Error,
    "encode-error: U+3EDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EDC");
    },
    Error,
    "encode-error: U+3EDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EDD");
    },
    Error,
    "encode-error: U+3EDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EDE");
    },
    Error,
    "encode-error: U+3EDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EDF");
    },
    Error,
    "encode-error: U+3EDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EE0");
    },
    Error,
    "encode-error: U+3EE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EE1");
    },
    Error,
    "encode-error: U+3EE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EE2");
    },
    Error,
    "encode-error: U+3EE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EE3");
    },
    Error,
    "encode-error: U+3EE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EE4");
    },
    Error,
    "encode-error: U+3EE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EE5");
    },
    Error,
    "encode-error: U+3EE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EE6");
    },
    Error,
    "encode-error: U+3EE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EE7");
    },
    Error,
    "encode-error: U+3EE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EE8");
    },
    Error,
    "encode-error: U+3EE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EE9");
    },
    Error,
    "encode-error: U+3EE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EEA");
    },
    Error,
    "encode-error: U+3EEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EEB");
    },
    Error,
    "encode-error: U+3EEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EEC");
    },
    Error,
    "encode-error: U+3EEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EED");
    },
    Error,
    "encode-error: U+3EED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EEE");
    },
    Error,
    "encode-error: U+3EEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EEF");
    },
    Error,
    "encode-error: U+3EEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EF0");
    },
    Error,
    "encode-error: U+3EF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EF1");
    },
    Error,
    "encode-error: U+3EF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EF2");
    },
    Error,
    "encode-error: U+3EF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EF3");
    },
    Error,
    "encode-error: U+3EF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EF4");
    },
    Error,
    "encode-error: U+3EF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EF5");
    },
    Error,
    "encode-error: U+3EF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EF6");
    },
    Error,
    "encode-error: U+3EF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EF7");
    },
    Error,
    "encode-error: U+3EF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EF8");
    },
    Error,
    "encode-error: U+3EF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EF9");
    },
    Error,
    "encode-error: U+3EF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EFA");
    },
    Error,
    "encode-error: U+3EFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EFB");
    },
    Error,
    "encode-error: U+3EFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EFC");
    },
    Error,
    "encode-error: U+3EFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EFD");
    },
    Error,
    "encode-error: U+3EFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EFE");
    },
    Error,
    "encode-error: U+3EFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3EFF");
    },
    Error,
    "encode-error: U+3EFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F00");
    },
    Error,
    "encode-error: U+3F00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F01");
    },
    Error,
    "encode-error: U+3F01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F02");
    },
    Error,
    "encode-error: U+3F02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F03");
    },
    Error,
    "encode-error: U+3F03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F04");
    },
    Error,
    "encode-error: U+3F04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F05");
    },
    Error,
    "encode-error: U+3F05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F06");
    },
    Error,
    "encode-error: U+3F06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F07");
    },
    Error,
    "encode-error: U+3F07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F08");
    },
    Error,
    "encode-error: U+3F08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F09");
    },
    Error,
    "encode-error: U+3F09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F0A");
    },
    Error,
    "encode-error: U+3F0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F0B");
    },
    Error,
    "encode-error: U+3F0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F0C");
    },
    Error,
    "encode-error: U+3F0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F0D");
    },
    Error,
    "encode-error: U+3F0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F0E");
    },
    Error,
    "encode-error: U+3F0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F0F");
    },
    Error,
    "encode-error: U+3F0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F10");
    },
    Error,
    "encode-error: U+3F10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F11");
    },
    Error,
    "encode-error: U+3F11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F12");
    },
    Error,
    "encode-error: U+3F12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F13");
    },
    Error,
    "encode-error: U+3F13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F14");
    },
    Error,
    "encode-error: U+3F14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F15");
    },
    Error,
    "encode-error: U+3F15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F16");
    },
    Error,
    "encode-error: U+3F16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F17");
    },
    Error,
    "encode-error: U+3F17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F18");
    },
    Error,
    "encode-error: U+3F18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F19");
    },
    Error,
    "encode-error: U+3F19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F1A");
    },
    Error,
    "encode-error: U+3F1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F1B");
    },
    Error,
    "encode-error: U+3F1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F1C");
    },
    Error,
    "encode-error: U+3F1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F1D");
    },
    Error,
    "encode-error: U+3F1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F1E");
    },
    Error,
    "encode-error: U+3F1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F1F");
    },
    Error,
    "encode-error: U+3F1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F20");
    },
    Error,
    "encode-error: U+3F20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F21");
    },
    Error,
    "encode-error: U+3F21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F22");
    },
    Error,
    "encode-error: U+3F22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F23");
    },
    Error,
    "encode-error: U+3F23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F24");
    },
    Error,
    "encode-error: U+3F24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F25");
    },
    Error,
    "encode-error: U+3F25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F26");
    },
    Error,
    "encode-error: U+3F26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F27");
    },
    Error,
    "encode-error: U+3F27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F28");
    },
    Error,
    "encode-error: U+3F28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F29");
    },
    Error,
    "encode-error: U+3F29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F2A");
    },
    Error,
    "encode-error: U+3F2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F2B");
    },
    Error,
    "encode-error: U+3F2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F2C");
    },
    Error,
    "encode-error: U+3F2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F2D");
    },
    Error,
    "encode-error: U+3F2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F2E");
    },
    Error,
    "encode-error: U+3F2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F2F");
    },
    Error,
    "encode-error: U+3F2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F30");
    },
    Error,
    "encode-error: U+3F30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F31");
    },
    Error,
    "encode-error: U+3F31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F32");
    },
    Error,
    "encode-error: U+3F32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F33");
    },
    Error,
    "encode-error: U+3F33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F34");
    },
    Error,
    "encode-error: U+3F34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F35");
    },
    Error,
    "encode-error: U+3F35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F36");
    },
    Error,
    "encode-error: U+3F36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F37");
    },
    Error,
    "encode-error: U+3F37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F38");
    },
    Error,
    "encode-error: U+3F38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F39");
    },
    Error,
    "encode-error: U+3F39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F3A");
    },
    Error,
    "encode-error: U+3F3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F3B");
    },
    Error,
    "encode-error: U+3F3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F3C");
    },
    Error,
    "encode-error: U+3F3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F3D");
    },
    Error,
    "encode-error: U+3F3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F3E");
    },
    Error,
    "encode-error: U+3F3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F3F");
    },
    Error,
    "encode-error: U+3F3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F40");
    },
    Error,
    "encode-error: U+3F40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F41");
    },
    Error,
    "encode-error: U+3F41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F42");
    },
    Error,
    "encode-error: U+3F42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F43");
    },
    Error,
    "encode-error: U+3F43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F44");
    },
    Error,
    "encode-error: U+3F44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F45");
    },
    Error,
    "encode-error: U+3F45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F46");
    },
    Error,
    "encode-error: U+3F46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F47");
    },
    Error,
    "encode-error: U+3F47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F48");
    },
    Error,
    "encode-error: U+3F48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F49");
    },
    Error,
    "encode-error: U+3F49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F4A");
    },
    Error,
    "encode-error: U+3F4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F4B");
    },
    Error,
    "encode-error: U+3F4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F4C");
    },
    Error,
    "encode-error: U+3F4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F4D");
    },
    Error,
    "encode-error: U+3F4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F4E");
    },
    Error,
    "encode-error: U+3F4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F4F");
    },
    Error,
    "encode-error: U+3F4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F50");
    },
    Error,
    "encode-error: U+3F50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F51");
    },
    Error,
    "encode-error: U+3F51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F52");
    },
    Error,
    "encode-error: U+3F52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F53");
    },
    Error,
    "encode-error: U+3F53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F54");
    },
    Error,
    "encode-error: U+3F54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F55");
    },
    Error,
    "encode-error: U+3F55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F56");
    },
    Error,
    "encode-error: U+3F56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F57");
    },
    Error,
    "encode-error: U+3F57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F58");
    },
    Error,
    "encode-error: U+3F58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F59");
    },
    Error,
    "encode-error: U+3F59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F5A");
    },
    Error,
    "encode-error: U+3F5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F5B");
    },
    Error,
    "encode-error: U+3F5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F5C");
    },
    Error,
    "encode-error: U+3F5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F5D");
    },
    Error,
    "encode-error: U+3F5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F5E");
    },
    Error,
    "encode-error: U+3F5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F5F");
    },
    Error,
    "encode-error: U+3F5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F60");
    },
    Error,
    "encode-error: U+3F60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F61");
    },
    Error,
    "encode-error: U+3F61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F62");
    },
    Error,
    "encode-error: U+3F62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F63");
    },
    Error,
    "encode-error: U+3F63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F64");
    },
    Error,
    "encode-error: U+3F64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F65");
    },
    Error,
    "encode-error: U+3F65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F66");
    },
    Error,
    "encode-error: U+3F66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F67");
    },
    Error,
    "encode-error: U+3F67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F68");
    },
    Error,
    "encode-error: U+3F68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F69");
    },
    Error,
    "encode-error: U+3F69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F6A");
    },
    Error,
    "encode-error: U+3F6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F6B");
    },
    Error,
    "encode-error: U+3F6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F6C");
    },
    Error,
    "encode-error: U+3F6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F6D");
    },
    Error,
    "encode-error: U+3F6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F6E");
    },
    Error,
    "encode-error: U+3F6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F6F");
    },
    Error,
    "encode-error: U+3F6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F70");
    },
    Error,
    "encode-error: U+3F70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F71");
    },
    Error,
    "encode-error: U+3F71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F72");
    },
    Error,
    "encode-error: U+3F72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F73");
    },
    Error,
    "encode-error: U+3F73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F74");
    },
    Error,
    "encode-error: U+3F74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F75");
    },
    Error,
    "encode-error: U+3F75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F76");
    },
    Error,
    "encode-error: U+3F76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F77");
    },
    Error,
    "encode-error: U+3F77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F78");
    },
    Error,
    "encode-error: U+3F78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F79");
    },
    Error,
    "encode-error: U+3F79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F7A");
    },
    Error,
    "encode-error: U+3F7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F7B");
    },
    Error,
    "encode-error: U+3F7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F7C");
    },
    Error,
    "encode-error: U+3F7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F7D");
    },
    Error,
    "encode-error: U+3F7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F7E");
    },
    Error,
    "encode-error: U+3F7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F7F");
    },
    Error,
    "encode-error: U+3F7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F80");
    },
    Error,
    "encode-error: U+3F80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F81");
    },
    Error,
    "encode-error: U+3F81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F82");
    },
    Error,
    "encode-error: U+3F82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F83");
    },
    Error,
    "encode-error: U+3F83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F84");
    },
    Error,
    "encode-error: U+3F84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F85");
    },
    Error,
    "encode-error: U+3F85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F86");
    },
    Error,
    "encode-error: U+3F86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F87");
    },
    Error,
    "encode-error: U+3F87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F88");
    },
    Error,
    "encode-error: U+3F88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F89");
    },
    Error,
    "encode-error: U+3F89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F8A");
    },
    Error,
    "encode-error: U+3F8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F8B");
    },
    Error,
    "encode-error: U+3F8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F8C");
    },
    Error,
    "encode-error: U+3F8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F8D");
    },
    Error,
    "encode-error: U+3F8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F8E");
    },
    Error,
    "encode-error: U+3F8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F8F");
    },
    Error,
    "encode-error: U+3F8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F90");
    },
    Error,
    "encode-error: U+3F90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F91");
    },
    Error,
    "encode-error: U+3F91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F92");
    },
    Error,
    "encode-error: U+3F92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F93");
    },
    Error,
    "encode-error: U+3F93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F94");
    },
    Error,
    "encode-error: U+3F94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F95");
    },
    Error,
    "encode-error: U+3F95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F96");
    },
    Error,
    "encode-error: U+3F96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F97");
    },
    Error,
    "encode-error: U+3F97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F98");
    },
    Error,
    "encode-error: U+3F98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F99");
    },
    Error,
    "encode-error: U+3F99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F9A");
    },
    Error,
    "encode-error: U+3F9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F9B");
    },
    Error,
    "encode-error: U+3F9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F9C");
    },
    Error,
    "encode-error: U+3F9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F9D");
    },
    Error,
    "encode-error: U+3F9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F9E");
    },
    Error,
    "encode-error: U+3F9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3F9F");
    },
    Error,
    "encode-error: U+3F9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FA0");
    },
    Error,
    "encode-error: U+3FA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FA1");
    },
    Error,
    "encode-error: U+3FA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FA2");
    },
    Error,
    "encode-error: U+3FA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FA3");
    },
    Error,
    "encode-error: U+3FA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FA4");
    },
    Error,
    "encode-error: U+3FA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FA5");
    },
    Error,
    "encode-error: U+3FA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FA6");
    },
    Error,
    "encode-error: U+3FA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FA7");
    },
    Error,
    "encode-error: U+3FA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FA8");
    },
    Error,
    "encode-error: U+3FA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FA9");
    },
    Error,
    "encode-error: U+3FA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FAA");
    },
    Error,
    "encode-error: U+3FAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FAB");
    },
    Error,
    "encode-error: U+3FAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FAC");
    },
    Error,
    "encode-error: U+3FAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FAD");
    },
    Error,
    "encode-error: U+3FAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FAE");
    },
    Error,
    "encode-error: U+3FAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FAF");
    },
    Error,
    "encode-error: U+3FAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FB0");
    },
    Error,
    "encode-error: U+3FB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FB1");
    },
    Error,
    "encode-error: U+3FB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FB2");
    },
    Error,
    "encode-error: U+3FB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FB3");
    },
    Error,
    "encode-error: U+3FB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FB4");
    },
    Error,
    "encode-error: U+3FB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FB5");
    },
    Error,
    "encode-error: U+3FB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FB6");
    },
    Error,
    "encode-error: U+3FB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FB7");
    },
    Error,
    "encode-error: U+3FB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FB8");
    },
    Error,
    "encode-error: U+3FB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FB9");
    },
    Error,
    "encode-error: U+3FB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FBA");
    },
    Error,
    "encode-error: U+3FBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FBB");
    },
    Error,
    "encode-error: U+3FBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FBC");
    },
    Error,
    "encode-error: U+3FBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FBD");
    },
    Error,
    "encode-error: U+3FBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FBE");
    },
    Error,
    "encode-error: U+3FBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FBF");
    },
    Error,
    "encode-error: U+3FBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FC0");
    },
    Error,
    "encode-error: U+3FC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FC1");
    },
    Error,
    "encode-error: U+3FC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FC2");
    },
    Error,
    "encode-error: U+3FC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FC3");
    },
    Error,
    "encode-error: U+3FC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FC4");
    },
    Error,
    "encode-error: U+3FC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FC5");
    },
    Error,
    "encode-error: U+3FC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FC6");
    },
    Error,
    "encode-error: U+3FC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FC7");
    },
    Error,
    "encode-error: U+3FC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FC8");
    },
    Error,
    "encode-error: U+3FC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FC9");
    },
    Error,
    "encode-error: U+3FC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FCA");
    },
    Error,
    "encode-error: U+3FCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FCB");
    },
    Error,
    "encode-error: U+3FCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FCC");
    },
    Error,
    "encode-error: U+3FCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FCD");
    },
    Error,
    "encode-error: U+3FCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FCE");
    },
    Error,
    "encode-error: U+3FCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FCF");
    },
    Error,
    "encode-error: U+3FCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FD0");
    },
    Error,
    "encode-error: U+3FD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FD1");
    },
    Error,
    "encode-error: U+3FD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FD2");
    },
    Error,
    "encode-error: U+3FD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FD3");
    },
    Error,
    "encode-error: U+3FD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FD4");
    },
    Error,
    "encode-error: U+3FD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FD5");
    },
    Error,
    "encode-error: U+3FD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FD6");
    },
    Error,
    "encode-error: U+3FD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FD7");
    },
    Error,
    "encode-error: U+3FD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FD8");
    },
    Error,
    "encode-error: U+3FD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FD9");
    },
    Error,
    "encode-error: U+3FD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FDA");
    },
    Error,
    "encode-error: U+3FDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FDB");
    },
    Error,
    "encode-error: U+3FDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FDC");
    },
    Error,
    "encode-error: U+3FDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FDD");
    },
    Error,
    "encode-error: U+3FDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FDE");
    },
    Error,
    "encode-error: U+3FDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FDF");
    },
    Error,
    "encode-error: U+3FDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FE0");
    },
    Error,
    "encode-error: U+3FE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FE1");
    },
    Error,
    "encode-error: U+3FE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FE2");
    },
    Error,
    "encode-error: U+3FE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FE3");
    },
    Error,
    "encode-error: U+3FE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FE4");
    },
    Error,
    "encode-error: U+3FE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FE5");
    },
    Error,
    "encode-error: U+3FE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FE6");
    },
    Error,
    "encode-error: U+3FE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FE7");
    },
    Error,
    "encode-error: U+3FE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FE8");
    },
    Error,
    "encode-error: U+3FE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FE9");
    },
    Error,
    "encode-error: U+3FE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FEA");
    },
    Error,
    "encode-error: U+3FEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FEB");
    },
    Error,
    "encode-error: U+3FEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FEC");
    },
    Error,
    "encode-error: U+3FEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FED");
    },
    Error,
    "encode-error: U+3FED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FEE");
    },
    Error,
    "encode-error: U+3FEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FEF");
    },
    Error,
    "encode-error: U+3FEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FF0");
    },
    Error,
    "encode-error: U+3FF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FF1");
    },
    Error,
    "encode-error: U+3FF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FF2");
    },
    Error,
    "encode-error: U+3FF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FF3");
    },
    Error,
    "encode-error: U+3FF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FF4");
    },
    Error,
    "encode-error: U+3FF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FF5");
    },
    Error,
    "encode-error: U+3FF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FF6");
    },
    Error,
    "encode-error: U+3FF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FF7");
    },
    Error,
    "encode-error: U+3FF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FF8");
    },
    Error,
    "encode-error: U+3FF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FF9");
    },
    Error,
    "encode-error: U+3FF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FFA");
    },
    Error,
    "encode-error: U+3FFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FFB");
    },
    Error,
    "encode-error: U+3FFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FFC");
    },
    Error,
    "encode-error: U+3FFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FFD");
    },
    Error,
    "encode-error: U+3FFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FFE");
    },
    Error,
    "encode-error: U+3FFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u3FFF");
    },
    Error,
    "encode-error: U+3FFF",
  );

  assertStrictEquals(r, true);
});
