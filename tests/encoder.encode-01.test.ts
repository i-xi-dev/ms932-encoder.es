import { assertStrictEquals, assertThrows } from "std/testing/asserts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string, Object)", () => {
  // fallback
  const ms932Encoder1 = new Ms932.Encoder({ fatal: true });
  assertThrows(
    () => {
      ms932Encoder1.encode("\u0081");
    },
    Error,
    "EncodingError U+0081",
  );

  const ms932Encoder2 = new Ms932.Encoder(/*{fatal: false}*/);
  assertStrictEquals([...ms932Encoder2.encode("\u0081")].join(","), "63");
  assertStrictEquals([...ms932Encoder2.encode("\u{29e3d}")].join(","), "63");

  const ms932Encoder1b = new Ms932.Encoder({
    fatal: true,
    replacementChar: "X",
  });
  assertThrows(
    () => {
      ms932Encoder1b.encode("\u0081");
    },
    Error,
    "EncodingError U+0081",
  );

  const ms932Encoder2b = new Ms932.Encoder({ replacementChar: "X" });
  assertStrictEquals([...ms932Encoder2b.encode("\u0081")].join(","), "88");
  assertStrictEquals([...ms932Encoder2b.encode("\u{29e3d}")].join(","), "88");
  assertStrictEquals([...ms932Encoder2b.encode("X\u0081")].join(","), "88,88");

  const ms932Encoder2c = new Ms932.Encoder({ replacementChar: "■" });
  assertStrictEquals([...ms932Encoder2c.encode("\u0081")].join(","), "129,161");
  assertStrictEquals(
    [...ms932Encoder2c.encode("X\u0081X")].join(","),
    "88,129,161,88",
  );
});

Deno.test("Ms932.Encoder.prototype.encode(string)", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertStrictEquals(
    [...ms932Encoder.encode(
      "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u000A\u000B\u000C\u000D\u000E\u000F\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001A\u001B\u001C\u001D\u001E\u001F !\u0022#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    )].join(","),
    "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128",
  ); // U+0000
  assertThrows(
    () => {
      ms932Encoder.encode("\u0081");
    },
    Error,
    "EncodingError U+0081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0082");
    },
    Error,
    "EncodingError U+0082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0083");
    },
    Error,
    "EncodingError U+0083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0084");
    },
    Error,
    "EncodingError U+0084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0085");
    },
    Error,
    "EncodingError U+0085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0086");
    },
    Error,
    "EncodingError U+0086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0087");
    },
    Error,
    "EncodingError U+0087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0088");
    },
    Error,
    "EncodingError U+0088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0089");
    },
    Error,
    "EncodingError U+0089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u008A");
    },
    Error,
    "EncodingError U+008A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u008B");
    },
    Error,
    "EncodingError U+008B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u008C");
    },
    Error,
    "EncodingError U+008C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u008D");
    },
    Error,
    "EncodingError U+008D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u008E");
    },
    Error,
    "EncodingError U+008E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u008F");
    },
    Error,
    "EncodingError U+008F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0090");
    },
    Error,
    "EncodingError U+0090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0091");
    },
    Error,
    "EncodingError U+0091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0092");
    },
    Error,
    "EncodingError U+0092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0093");
    },
    Error,
    "EncodingError U+0093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0094");
    },
    Error,
    "EncodingError U+0094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0095");
    },
    Error,
    "EncodingError U+0095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0096");
    },
    Error,
    "EncodingError U+0096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0097");
    },
    Error,
    "EncodingError U+0097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0098");
    },
    Error,
    "EncodingError U+0098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0099");
    },
    Error,
    "EncodingError U+0099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u009A");
    },
    Error,
    "EncodingError U+009A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u009B");
    },
    Error,
    "EncodingError U+009B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u009C");
    },
    Error,
    "EncodingError U+009C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u009D");
    },
    Error,
    "EncodingError U+009D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u009E");
    },
    Error,
    "EncodingError U+009E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u009F");
    },
    Error,
    "EncodingError U+009F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A0");
    },
    Error,
    "EncodingError U+00A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A1");
    },
    Error,
    "EncodingError U+00A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A2");
    },
    Error,
    "EncodingError U+00A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A3");
    },
    Error,
    "EncodingError U+00A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A4");
    },
    Error,
    "EncodingError U+00A4",
  );
  r = r && ([...ms932Encoder.encode("\u00A5")].join(",") === "92"); // U+00A5 -> 5C
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A6");
    },
    Error,
    "EncodingError U+00A6",
  );
  r = r && ([...ms932Encoder.encode("§¨")].join(",") === "129,152,129,78"); // U+00A7
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A9");
    },
    Error,
    "EncodingError U+00A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00AA");
    },
    Error,
    "EncodingError U+00AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00AB");
    },
    Error,
    "EncodingError U+00AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00AC");
    },
    Error,
    "EncodingError U+00AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00AD");
    },
    Error,
    "EncodingError U+00AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00AE");
    },
    Error,
    "EncodingError U+00AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00AF");
    },
    Error,
    "EncodingError U+00AF",
  );
  r = r && ([...ms932Encoder.encode("°±")].join(",") === "129,139,129,125"); // U+00B0
  assertThrows(
    () => {
      ms932Encoder.encode("\u00B2");
    },
    Error,
    "EncodingError U+00B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00B3");
    },
    Error,
    "EncodingError U+00B3",
  );
  r = r && ([...ms932Encoder.encode("´")].join(",") === "129,76"); // U+00B4
  assertThrows(
    () => {
      ms932Encoder.encode("\u00B5");
    },
    Error,
    "EncodingError U+00B5",
  );
  r = r && ([...ms932Encoder.encode("¶")].join(",") === "129,247"); // U+00B6
  assertThrows(
    () => {
      ms932Encoder.encode("\u00B7");
    },
    Error,
    "EncodingError U+00B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00B8");
    },
    Error,
    "EncodingError U+00B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00B9");
    },
    Error,
    "EncodingError U+00B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00BA");
    },
    Error,
    "EncodingError U+00BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00BB");
    },
    Error,
    "EncodingError U+00BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00BC");
    },
    Error,
    "EncodingError U+00BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00BD");
    },
    Error,
    "EncodingError U+00BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00BE");
    },
    Error,
    "EncodingError U+00BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00BF");
    },
    Error,
    "EncodingError U+00BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C0");
    },
    Error,
    "EncodingError U+00C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C1");
    },
    Error,
    "EncodingError U+00C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C2");
    },
    Error,
    "EncodingError U+00C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C3");
    },
    Error,
    "EncodingError U+00C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C4");
    },
    Error,
    "EncodingError U+00C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C5");
    },
    Error,
    "EncodingError U+00C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C6");
    },
    Error,
    "EncodingError U+00C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C7");
    },
    Error,
    "EncodingError U+00C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C8");
    },
    Error,
    "EncodingError U+00C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C9");
    },
    Error,
    "EncodingError U+00C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00CA");
    },
    Error,
    "EncodingError U+00CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00CB");
    },
    Error,
    "EncodingError U+00CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00CC");
    },
    Error,
    "EncodingError U+00CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00CD");
    },
    Error,
    "EncodingError U+00CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00CE");
    },
    Error,
    "EncodingError U+00CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00CF");
    },
    Error,
    "EncodingError U+00CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D0");
    },
    Error,
    "EncodingError U+00D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D1");
    },
    Error,
    "EncodingError U+00D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D2");
    },
    Error,
    "EncodingError U+00D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D3");
    },
    Error,
    "EncodingError U+00D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D4");
    },
    Error,
    "EncodingError U+00D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D5");
    },
    Error,
    "EncodingError U+00D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D6");
    },
    Error,
    "EncodingError U+00D6",
  );
  r = r && ([...ms932Encoder.encode("×")].join(",") === "129,126"); // U+00D7
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D8");
    },
    Error,
    "EncodingError U+00D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D9");
    },
    Error,
    "EncodingError U+00D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00DA");
    },
    Error,
    "EncodingError U+00DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00DB");
    },
    Error,
    "EncodingError U+00DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00DC");
    },
    Error,
    "EncodingError U+00DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00DD");
    },
    Error,
    "EncodingError U+00DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00DE");
    },
    Error,
    "EncodingError U+00DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00DF");
    },
    Error,
    "EncodingError U+00DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E0");
    },
    Error,
    "EncodingError U+00E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E1");
    },
    Error,
    "EncodingError U+00E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E2");
    },
    Error,
    "EncodingError U+00E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E3");
    },
    Error,
    "EncodingError U+00E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E4");
    },
    Error,
    "EncodingError U+00E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E5");
    },
    Error,
    "EncodingError U+00E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E6");
    },
    Error,
    "EncodingError U+00E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E7");
    },
    Error,
    "EncodingError U+00E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E8");
    },
    Error,
    "EncodingError U+00E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E9");
    },
    Error,
    "EncodingError U+00E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00EA");
    },
    Error,
    "EncodingError U+00EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00EB");
    },
    Error,
    "EncodingError U+00EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00EC");
    },
    Error,
    "EncodingError U+00EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00ED");
    },
    Error,
    "EncodingError U+00ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00EE");
    },
    Error,
    "EncodingError U+00EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00EF");
    },
    Error,
    "EncodingError U+00EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F0");
    },
    Error,
    "EncodingError U+00F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F1");
    },
    Error,
    "EncodingError U+00F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F2");
    },
    Error,
    "EncodingError U+00F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F3");
    },
    Error,
    "EncodingError U+00F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F4");
    },
    Error,
    "EncodingError U+00F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F5");
    },
    Error,
    "EncodingError U+00F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F6");
    },
    Error,
    "EncodingError U+00F6",
  );
  r = r && ([...ms932Encoder.encode("÷")].join(",") === "129,128"); // U+00F7
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F8");
    },
    Error,
    "EncodingError U+00F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F9");
    },
    Error,
    "EncodingError U+00F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00FA");
    },
    Error,
    "EncodingError U+00FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00FB");
    },
    Error,
    "EncodingError U+00FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00FC");
    },
    Error,
    "EncodingError U+00FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00FD");
    },
    Error,
    "EncodingError U+00FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00FE");
    },
    Error,
    "EncodingError U+00FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00FF");
    },
    Error,
    "EncodingError U+00FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0100");
    },
    Error,
    "EncodingError U+0100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0101");
    },
    Error,
    "EncodingError U+0101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0102");
    },
    Error,
    "EncodingError U+0102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0103");
    },
    Error,
    "EncodingError U+0103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0104");
    },
    Error,
    "EncodingError U+0104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0105");
    },
    Error,
    "EncodingError U+0105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0106");
    },
    Error,
    "EncodingError U+0106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0107");
    },
    Error,
    "EncodingError U+0107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0108");
    },
    Error,
    "EncodingError U+0108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0109");
    },
    Error,
    "EncodingError U+0109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u010A");
    },
    Error,
    "EncodingError U+010A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u010B");
    },
    Error,
    "EncodingError U+010B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u010C");
    },
    Error,
    "EncodingError U+010C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u010D");
    },
    Error,
    "EncodingError U+010D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u010E");
    },
    Error,
    "EncodingError U+010E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u010F");
    },
    Error,
    "EncodingError U+010F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0110");
    },
    Error,
    "EncodingError U+0110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0111");
    },
    Error,
    "EncodingError U+0111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0112");
    },
    Error,
    "EncodingError U+0112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0113");
    },
    Error,
    "EncodingError U+0113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0114");
    },
    Error,
    "EncodingError U+0114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0115");
    },
    Error,
    "EncodingError U+0115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0116");
    },
    Error,
    "EncodingError U+0116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0117");
    },
    Error,
    "EncodingError U+0117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0118");
    },
    Error,
    "EncodingError U+0118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0119");
    },
    Error,
    "EncodingError U+0119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u011A");
    },
    Error,
    "EncodingError U+011A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u011B");
    },
    Error,
    "EncodingError U+011B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u011C");
    },
    Error,
    "EncodingError U+011C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u011D");
    },
    Error,
    "EncodingError U+011D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u011E");
    },
    Error,
    "EncodingError U+011E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u011F");
    },
    Error,
    "EncodingError U+011F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0120");
    },
    Error,
    "EncodingError U+0120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0121");
    },
    Error,
    "EncodingError U+0121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0122");
    },
    Error,
    "EncodingError U+0122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0123");
    },
    Error,
    "EncodingError U+0123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0124");
    },
    Error,
    "EncodingError U+0124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0125");
    },
    Error,
    "EncodingError U+0125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0126");
    },
    Error,
    "EncodingError U+0126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0127");
    },
    Error,
    "EncodingError U+0127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0128");
    },
    Error,
    "EncodingError U+0128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0129");
    },
    Error,
    "EncodingError U+0129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u012A");
    },
    Error,
    "EncodingError U+012A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u012B");
    },
    Error,
    "EncodingError U+012B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u012C");
    },
    Error,
    "EncodingError U+012C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u012D");
    },
    Error,
    "EncodingError U+012D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u012E");
    },
    Error,
    "EncodingError U+012E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u012F");
    },
    Error,
    "EncodingError U+012F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0130");
    },
    Error,
    "EncodingError U+0130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0131");
    },
    Error,
    "EncodingError U+0131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0132");
    },
    Error,
    "EncodingError U+0132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0133");
    },
    Error,
    "EncodingError U+0133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0134");
    },
    Error,
    "EncodingError U+0134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0135");
    },
    Error,
    "EncodingError U+0135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0136");
    },
    Error,
    "EncodingError U+0136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0137");
    },
    Error,
    "EncodingError U+0137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0138");
    },
    Error,
    "EncodingError U+0138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0139");
    },
    Error,
    "EncodingError U+0139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u013A");
    },
    Error,
    "EncodingError U+013A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u013B");
    },
    Error,
    "EncodingError U+013B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u013C");
    },
    Error,
    "EncodingError U+013C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u013D");
    },
    Error,
    "EncodingError U+013D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u013E");
    },
    Error,
    "EncodingError U+013E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u013F");
    },
    Error,
    "EncodingError U+013F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0140");
    },
    Error,
    "EncodingError U+0140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0141");
    },
    Error,
    "EncodingError U+0141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0142");
    },
    Error,
    "EncodingError U+0142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0143");
    },
    Error,
    "EncodingError U+0143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0144");
    },
    Error,
    "EncodingError U+0144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0145");
    },
    Error,
    "EncodingError U+0145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0146");
    },
    Error,
    "EncodingError U+0146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0147");
    },
    Error,
    "EncodingError U+0147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0148");
    },
    Error,
    "EncodingError U+0148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0149");
    },
    Error,
    "EncodingError U+0149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u014A");
    },
    Error,
    "EncodingError U+014A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u014B");
    },
    Error,
    "EncodingError U+014B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u014C");
    },
    Error,
    "EncodingError U+014C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u014D");
    },
    Error,
    "EncodingError U+014D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u014E");
    },
    Error,
    "EncodingError U+014E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u014F");
    },
    Error,
    "EncodingError U+014F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0150");
    },
    Error,
    "EncodingError U+0150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0151");
    },
    Error,
    "EncodingError U+0151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0152");
    },
    Error,
    "EncodingError U+0152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0153");
    },
    Error,
    "EncodingError U+0153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0154");
    },
    Error,
    "EncodingError U+0154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0155");
    },
    Error,
    "EncodingError U+0155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0156");
    },
    Error,
    "EncodingError U+0156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0157");
    },
    Error,
    "EncodingError U+0157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0158");
    },
    Error,
    "EncodingError U+0158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0159");
    },
    Error,
    "EncodingError U+0159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u015A");
    },
    Error,
    "EncodingError U+015A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u015B");
    },
    Error,
    "EncodingError U+015B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u015C");
    },
    Error,
    "EncodingError U+015C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u015D");
    },
    Error,
    "EncodingError U+015D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u015E");
    },
    Error,
    "EncodingError U+015E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u015F");
    },
    Error,
    "EncodingError U+015F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0160");
    },
    Error,
    "EncodingError U+0160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0161");
    },
    Error,
    "EncodingError U+0161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0162");
    },
    Error,
    "EncodingError U+0162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0163");
    },
    Error,
    "EncodingError U+0163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0164");
    },
    Error,
    "EncodingError U+0164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0165");
    },
    Error,
    "EncodingError U+0165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0166");
    },
    Error,
    "EncodingError U+0166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0167");
    },
    Error,
    "EncodingError U+0167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0168");
    },
    Error,
    "EncodingError U+0168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0169");
    },
    Error,
    "EncodingError U+0169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u016A");
    },
    Error,
    "EncodingError U+016A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u016B");
    },
    Error,
    "EncodingError U+016B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u016C");
    },
    Error,
    "EncodingError U+016C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u016D");
    },
    Error,
    "EncodingError U+016D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u016E");
    },
    Error,
    "EncodingError U+016E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u016F");
    },
    Error,
    "EncodingError U+016F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0170");
    },
    Error,
    "EncodingError U+0170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0171");
    },
    Error,
    "EncodingError U+0171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0172");
    },
    Error,
    "EncodingError U+0172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0173");
    },
    Error,
    "EncodingError U+0173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0174");
    },
    Error,
    "EncodingError U+0174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0175");
    },
    Error,
    "EncodingError U+0175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0176");
    },
    Error,
    "EncodingError U+0176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0177");
    },
    Error,
    "EncodingError U+0177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0178");
    },
    Error,
    "EncodingError U+0178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0179");
    },
    Error,
    "EncodingError U+0179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u017A");
    },
    Error,
    "EncodingError U+017A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u017B");
    },
    Error,
    "EncodingError U+017B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u017C");
    },
    Error,
    "EncodingError U+017C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u017D");
    },
    Error,
    "EncodingError U+017D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u017E");
    },
    Error,
    "EncodingError U+017E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u017F");
    },
    Error,
    "EncodingError U+017F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0180");
    },
    Error,
    "EncodingError U+0180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0181");
    },
    Error,
    "EncodingError U+0181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0182");
    },
    Error,
    "EncodingError U+0182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0183");
    },
    Error,
    "EncodingError U+0183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0184");
    },
    Error,
    "EncodingError U+0184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0185");
    },
    Error,
    "EncodingError U+0185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0186");
    },
    Error,
    "EncodingError U+0186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0187");
    },
    Error,
    "EncodingError U+0187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0188");
    },
    Error,
    "EncodingError U+0188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0189");
    },
    Error,
    "EncodingError U+0189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u018A");
    },
    Error,
    "EncodingError U+018A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u018B");
    },
    Error,
    "EncodingError U+018B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u018C");
    },
    Error,
    "EncodingError U+018C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u018D");
    },
    Error,
    "EncodingError U+018D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u018E");
    },
    Error,
    "EncodingError U+018E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u018F");
    },
    Error,
    "EncodingError U+018F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0190");
    },
    Error,
    "EncodingError U+0190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0191");
    },
    Error,
    "EncodingError U+0191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0192");
    },
    Error,
    "EncodingError U+0192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0193");
    },
    Error,
    "EncodingError U+0193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0194");
    },
    Error,
    "EncodingError U+0194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0195");
    },
    Error,
    "EncodingError U+0195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0196");
    },
    Error,
    "EncodingError U+0196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0197");
    },
    Error,
    "EncodingError U+0197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0198");
    },
    Error,
    "EncodingError U+0198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0199");
    },
    Error,
    "EncodingError U+0199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u019A");
    },
    Error,
    "EncodingError U+019A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u019B");
    },
    Error,
    "EncodingError U+019B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u019C");
    },
    Error,
    "EncodingError U+019C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u019D");
    },
    Error,
    "EncodingError U+019D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u019E");
    },
    Error,
    "EncodingError U+019E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u019F");
    },
    Error,
    "EncodingError U+019F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A0");
    },
    Error,
    "EncodingError U+01A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A1");
    },
    Error,
    "EncodingError U+01A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A2");
    },
    Error,
    "EncodingError U+01A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A3");
    },
    Error,
    "EncodingError U+01A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A4");
    },
    Error,
    "EncodingError U+01A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A5");
    },
    Error,
    "EncodingError U+01A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A6");
    },
    Error,
    "EncodingError U+01A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A7");
    },
    Error,
    "EncodingError U+01A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A8");
    },
    Error,
    "EncodingError U+01A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A9");
    },
    Error,
    "EncodingError U+01A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01AA");
    },
    Error,
    "EncodingError U+01AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01AB");
    },
    Error,
    "EncodingError U+01AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01AC");
    },
    Error,
    "EncodingError U+01AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01AD");
    },
    Error,
    "EncodingError U+01AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01AE");
    },
    Error,
    "EncodingError U+01AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01AF");
    },
    Error,
    "EncodingError U+01AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B0");
    },
    Error,
    "EncodingError U+01B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B1");
    },
    Error,
    "EncodingError U+01B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B2");
    },
    Error,
    "EncodingError U+01B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B3");
    },
    Error,
    "EncodingError U+01B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B4");
    },
    Error,
    "EncodingError U+01B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B5");
    },
    Error,
    "EncodingError U+01B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B6");
    },
    Error,
    "EncodingError U+01B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B7");
    },
    Error,
    "EncodingError U+01B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B8");
    },
    Error,
    "EncodingError U+01B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B9");
    },
    Error,
    "EncodingError U+01B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01BA");
    },
    Error,
    "EncodingError U+01BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01BB");
    },
    Error,
    "EncodingError U+01BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01BC");
    },
    Error,
    "EncodingError U+01BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01BD");
    },
    Error,
    "EncodingError U+01BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01BE");
    },
    Error,
    "EncodingError U+01BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01BF");
    },
    Error,
    "EncodingError U+01BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C0");
    },
    Error,
    "EncodingError U+01C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C1");
    },
    Error,
    "EncodingError U+01C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C2");
    },
    Error,
    "EncodingError U+01C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C3");
    },
    Error,
    "EncodingError U+01C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C4");
    },
    Error,
    "EncodingError U+01C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C5");
    },
    Error,
    "EncodingError U+01C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C6");
    },
    Error,
    "EncodingError U+01C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C7");
    },
    Error,
    "EncodingError U+01C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C8");
    },
    Error,
    "EncodingError U+01C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C9");
    },
    Error,
    "EncodingError U+01C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01CA");
    },
    Error,
    "EncodingError U+01CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01CB");
    },
    Error,
    "EncodingError U+01CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01CC");
    },
    Error,
    "EncodingError U+01CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01CD");
    },
    Error,
    "EncodingError U+01CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01CE");
    },
    Error,
    "EncodingError U+01CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01CF");
    },
    Error,
    "EncodingError U+01CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D0");
    },
    Error,
    "EncodingError U+01D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D1");
    },
    Error,
    "EncodingError U+01D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D2");
    },
    Error,
    "EncodingError U+01D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D3");
    },
    Error,
    "EncodingError U+01D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D4");
    },
    Error,
    "EncodingError U+01D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D5");
    },
    Error,
    "EncodingError U+01D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D6");
    },
    Error,
    "EncodingError U+01D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D7");
    },
    Error,
    "EncodingError U+01D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D8");
    },
    Error,
    "EncodingError U+01D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D9");
    },
    Error,
    "EncodingError U+01D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01DA");
    },
    Error,
    "EncodingError U+01DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01DB");
    },
    Error,
    "EncodingError U+01DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01DC");
    },
    Error,
    "EncodingError U+01DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01DD");
    },
    Error,
    "EncodingError U+01DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01DE");
    },
    Error,
    "EncodingError U+01DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01DF");
    },
    Error,
    "EncodingError U+01DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E0");
    },
    Error,
    "EncodingError U+01E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E1");
    },
    Error,
    "EncodingError U+01E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E2");
    },
    Error,
    "EncodingError U+01E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E3");
    },
    Error,
    "EncodingError U+01E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E4");
    },
    Error,
    "EncodingError U+01E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E5");
    },
    Error,
    "EncodingError U+01E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E6");
    },
    Error,
    "EncodingError U+01E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E7");
    },
    Error,
    "EncodingError U+01E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E8");
    },
    Error,
    "EncodingError U+01E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E9");
    },
    Error,
    "EncodingError U+01E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01EA");
    },
    Error,
    "EncodingError U+01EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01EB");
    },
    Error,
    "EncodingError U+01EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01EC");
    },
    Error,
    "EncodingError U+01EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01ED");
    },
    Error,
    "EncodingError U+01ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01EE");
    },
    Error,
    "EncodingError U+01EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01EF");
    },
    Error,
    "EncodingError U+01EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F0");
    },
    Error,
    "EncodingError U+01F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F1");
    },
    Error,
    "EncodingError U+01F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F2");
    },
    Error,
    "EncodingError U+01F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F3");
    },
    Error,
    "EncodingError U+01F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F4");
    },
    Error,
    "EncodingError U+01F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F5");
    },
    Error,
    "EncodingError U+01F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F6");
    },
    Error,
    "EncodingError U+01F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F7");
    },
    Error,
    "EncodingError U+01F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F8");
    },
    Error,
    "EncodingError U+01F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F9");
    },
    Error,
    "EncodingError U+01F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01FA");
    },
    Error,
    "EncodingError U+01FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01FB");
    },
    Error,
    "EncodingError U+01FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01FC");
    },
    Error,
    "EncodingError U+01FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01FD");
    },
    Error,
    "EncodingError U+01FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01FE");
    },
    Error,
    "EncodingError U+01FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01FF");
    },
    Error,
    "EncodingError U+01FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0200");
    },
    Error,
    "EncodingError U+0200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0201");
    },
    Error,
    "EncodingError U+0201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0202");
    },
    Error,
    "EncodingError U+0202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0203");
    },
    Error,
    "EncodingError U+0203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0204");
    },
    Error,
    "EncodingError U+0204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0205");
    },
    Error,
    "EncodingError U+0205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0206");
    },
    Error,
    "EncodingError U+0206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0207");
    },
    Error,
    "EncodingError U+0207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0208");
    },
    Error,
    "EncodingError U+0208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0209");
    },
    Error,
    "EncodingError U+0209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u020A");
    },
    Error,
    "EncodingError U+020A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u020B");
    },
    Error,
    "EncodingError U+020B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u020C");
    },
    Error,
    "EncodingError U+020C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u020D");
    },
    Error,
    "EncodingError U+020D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u020E");
    },
    Error,
    "EncodingError U+020E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u020F");
    },
    Error,
    "EncodingError U+020F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0210");
    },
    Error,
    "EncodingError U+0210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0211");
    },
    Error,
    "EncodingError U+0211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0212");
    },
    Error,
    "EncodingError U+0212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0213");
    },
    Error,
    "EncodingError U+0213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0214");
    },
    Error,
    "EncodingError U+0214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0215");
    },
    Error,
    "EncodingError U+0215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0216");
    },
    Error,
    "EncodingError U+0216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0217");
    },
    Error,
    "EncodingError U+0217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0218");
    },
    Error,
    "EncodingError U+0218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0219");
    },
    Error,
    "EncodingError U+0219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u021A");
    },
    Error,
    "EncodingError U+021A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u021B");
    },
    Error,
    "EncodingError U+021B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u021C");
    },
    Error,
    "EncodingError U+021C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u021D");
    },
    Error,
    "EncodingError U+021D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u021E");
    },
    Error,
    "EncodingError U+021E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u021F");
    },
    Error,
    "EncodingError U+021F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0220");
    },
    Error,
    "EncodingError U+0220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0221");
    },
    Error,
    "EncodingError U+0221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0222");
    },
    Error,
    "EncodingError U+0222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0223");
    },
    Error,
    "EncodingError U+0223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0224");
    },
    Error,
    "EncodingError U+0224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0225");
    },
    Error,
    "EncodingError U+0225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0226");
    },
    Error,
    "EncodingError U+0226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0227");
    },
    Error,
    "EncodingError U+0227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0228");
    },
    Error,
    "EncodingError U+0228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0229");
    },
    Error,
    "EncodingError U+0229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u022A");
    },
    Error,
    "EncodingError U+022A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u022B");
    },
    Error,
    "EncodingError U+022B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u022C");
    },
    Error,
    "EncodingError U+022C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u022D");
    },
    Error,
    "EncodingError U+022D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u022E");
    },
    Error,
    "EncodingError U+022E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u022F");
    },
    Error,
    "EncodingError U+022F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0230");
    },
    Error,
    "EncodingError U+0230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0231");
    },
    Error,
    "EncodingError U+0231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0232");
    },
    Error,
    "EncodingError U+0232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0233");
    },
    Error,
    "EncodingError U+0233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0234");
    },
    Error,
    "EncodingError U+0234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0235");
    },
    Error,
    "EncodingError U+0235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0236");
    },
    Error,
    "EncodingError U+0236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0237");
    },
    Error,
    "EncodingError U+0237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0238");
    },
    Error,
    "EncodingError U+0238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0239");
    },
    Error,
    "EncodingError U+0239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u023A");
    },
    Error,
    "EncodingError U+023A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u023B");
    },
    Error,
    "EncodingError U+023B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u023C");
    },
    Error,
    "EncodingError U+023C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u023D");
    },
    Error,
    "EncodingError U+023D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u023E");
    },
    Error,
    "EncodingError U+023E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u023F");
    },
    Error,
    "EncodingError U+023F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0240");
    },
    Error,
    "EncodingError U+0240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0241");
    },
    Error,
    "EncodingError U+0241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0242");
    },
    Error,
    "EncodingError U+0242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0243");
    },
    Error,
    "EncodingError U+0243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0244");
    },
    Error,
    "EncodingError U+0244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0245");
    },
    Error,
    "EncodingError U+0245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0246");
    },
    Error,
    "EncodingError U+0246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0247");
    },
    Error,
    "EncodingError U+0247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0248");
    },
    Error,
    "EncodingError U+0248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0249");
    },
    Error,
    "EncodingError U+0249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u024A");
    },
    Error,
    "EncodingError U+024A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u024B");
    },
    Error,
    "EncodingError U+024B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u024C");
    },
    Error,
    "EncodingError U+024C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u024D");
    },
    Error,
    "EncodingError U+024D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u024E");
    },
    Error,
    "EncodingError U+024E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u024F");
    },
    Error,
    "EncodingError U+024F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0250");
    },
    Error,
    "EncodingError U+0250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0251");
    },
    Error,
    "EncodingError U+0251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0252");
    },
    Error,
    "EncodingError U+0252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0253");
    },
    Error,
    "EncodingError U+0253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0254");
    },
    Error,
    "EncodingError U+0254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0255");
    },
    Error,
    "EncodingError U+0255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0256");
    },
    Error,
    "EncodingError U+0256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0257");
    },
    Error,
    "EncodingError U+0257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0258");
    },
    Error,
    "EncodingError U+0258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0259");
    },
    Error,
    "EncodingError U+0259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u025A");
    },
    Error,
    "EncodingError U+025A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u025B");
    },
    Error,
    "EncodingError U+025B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u025C");
    },
    Error,
    "EncodingError U+025C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u025D");
    },
    Error,
    "EncodingError U+025D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u025E");
    },
    Error,
    "EncodingError U+025E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u025F");
    },
    Error,
    "EncodingError U+025F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0260");
    },
    Error,
    "EncodingError U+0260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0261");
    },
    Error,
    "EncodingError U+0261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0262");
    },
    Error,
    "EncodingError U+0262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0263");
    },
    Error,
    "EncodingError U+0263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0264");
    },
    Error,
    "EncodingError U+0264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0265");
    },
    Error,
    "EncodingError U+0265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0266");
    },
    Error,
    "EncodingError U+0266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0267");
    },
    Error,
    "EncodingError U+0267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0268");
    },
    Error,
    "EncodingError U+0268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0269");
    },
    Error,
    "EncodingError U+0269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u026A");
    },
    Error,
    "EncodingError U+026A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u026B");
    },
    Error,
    "EncodingError U+026B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u026C");
    },
    Error,
    "EncodingError U+026C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u026D");
    },
    Error,
    "EncodingError U+026D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u026E");
    },
    Error,
    "EncodingError U+026E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u026F");
    },
    Error,
    "EncodingError U+026F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0270");
    },
    Error,
    "EncodingError U+0270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0271");
    },
    Error,
    "EncodingError U+0271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0272");
    },
    Error,
    "EncodingError U+0272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0273");
    },
    Error,
    "EncodingError U+0273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0274");
    },
    Error,
    "EncodingError U+0274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0275");
    },
    Error,
    "EncodingError U+0275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0276");
    },
    Error,
    "EncodingError U+0276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0277");
    },
    Error,
    "EncodingError U+0277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0278");
    },
    Error,
    "EncodingError U+0278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0279");
    },
    Error,
    "EncodingError U+0279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u027A");
    },
    Error,
    "EncodingError U+027A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u027B");
    },
    Error,
    "EncodingError U+027B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u027C");
    },
    Error,
    "EncodingError U+027C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u027D");
    },
    Error,
    "EncodingError U+027D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u027E");
    },
    Error,
    "EncodingError U+027E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u027F");
    },
    Error,
    "EncodingError U+027F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0280");
    },
    Error,
    "EncodingError U+0280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0281");
    },
    Error,
    "EncodingError U+0281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0282");
    },
    Error,
    "EncodingError U+0282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0283");
    },
    Error,
    "EncodingError U+0283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0284");
    },
    Error,
    "EncodingError U+0284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0285");
    },
    Error,
    "EncodingError U+0285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0286");
    },
    Error,
    "EncodingError U+0286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0287");
    },
    Error,
    "EncodingError U+0287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0288");
    },
    Error,
    "EncodingError U+0288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0289");
    },
    Error,
    "EncodingError U+0289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u028A");
    },
    Error,
    "EncodingError U+028A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u028B");
    },
    Error,
    "EncodingError U+028B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u028C");
    },
    Error,
    "EncodingError U+028C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u028D");
    },
    Error,
    "EncodingError U+028D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u028E");
    },
    Error,
    "EncodingError U+028E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u028F");
    },
    Error,
    "EncodingError U+028F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0290");
    },
    Error,
    "EncodingError U+0290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0291");
    },
    Error,
    "EncodingError U+0291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0292");
    },
    Error,
    "EncodingError U+0292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0293");
    },
    Error,
    "EncodingError U+0293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0294");
    },
    Error,
    "EncodingError U+0294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0295");
    },
    Error,
    "EncodingError U+0295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0296");
    },
    Error,
    "EncodingError U+0296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0297");
    },
    Error,
    "EncodingError U+0297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0298");
    },
    Error,
    "EncodingError U+0298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0299");
    },
    Error,
    "EncodingError U+0299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u029A");
    },
    Error,
    "EncodingError U+029A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u029B");
    },
    Error,
    "EncodingError U+029B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u029C");
    },
    Error,
    "EncodingError U+029C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u029D");
    },
    Error,
    "EncodingError U+029D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u029E");
    },
    Error,
    "EncodingError U+029E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u029F");
    },
    Error,
    "EncodingError U+029F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A0");
    },
    Error,
    "EncodingError U+02A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A1");
    },
    Error,
    "EncodingError U+02A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A2");
    },
    Error,
    "EncodingError U+02A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A3");
    },
    Error,
    "EncodingError U+02A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A4");
    },
    Error,
    "EncodingError U+02A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A5");
    },
    Error,
    "EncodingError U+02A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A6");
    },
    Error,
    "EncodingError U+02A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A7");
    },
    Error,
    "EncodingError U+02A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A8");
    },
    Error,
    "EncodingError U+02A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A9");
    },
    Error,
    "EncodingError U+02A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02AA");
    },
    Error,
    "EncodingError U+02AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02AB");
    },
    Error,
    "EncodingError U+02AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02AC");
    },
    Error,
    "EncodingError U+02AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02AD");
    },
    Error,
    "EncodingError U+02AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02AE");
    },
    Error,
    "EncodingError U+02AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02AF");
    },
    Error,
    "EncodingError U+02AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B0");
    },
    Error,
    "EncodingError U+02B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B1");
    },
    Error,
    "EncodingError U+02B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B2");
    },
    Error,
    "EncodingError U+02B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B3");
    },
    Error,
    "EncodingError U+02B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B4");
    },
    Error,
    "EncodingError U+02B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B5");
    },
    Error,
    "EncodingError U+02B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B6");
    },
    Error,
    "EncodingError U+02B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B7");
    },
    Error,
    "EncodingError U+02B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B8");
    },
    Error,
    "EncodingError U+02B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B9");
    },
    Error,
    "EncodingError U+02B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02BA");
    },
    Error,
    "EncodingError U+02BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02BB");
    },
    Error,
    "EncodingError U+02BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02BC");
    },
    Error,
    "EncodingError U+02BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02BD");
    },
    Error,
    "EncodingError U+02BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02BE");
    },
    Error,
    "EncodingError U+02BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02BF");
    },
    Error,
    "EncodingError U+02BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C0");
    },
    Error,
    "EncodingError U+02C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C1");
    },
    Error,
    "EncodingError U+02C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C2");
    },
    Error,
    "EncodingError U+02C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C3");
    },
    Error,
    "EncodingError U+02C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C4");
    },
    Error,
    "EncodingError U+02C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C5");
    },
    Error,
    "EncodingError U+02C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C6");
    },
    Error,
    "EncodingError U+02C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C7");
    },
    Error,
    "EncodingError U+02C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C8");
    },
    Error,
    "EncodingError U+02C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C9");
    },
    Error,
    "EncodingError U+02C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02CA");
    },
    Error,
    "EncodingError U+02CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02CB");
    },
    Error,
    "EncodingError U+02CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02CC");
    },
    Error,
    "EncodingError U+02CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02CD");
    },
    Error,
    "EncodingError U+02CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02CE");
    },
    Error,
    "EncodingError U+02CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02CF");
    },
    Error,
    "EncodingError U+02CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D0");
    },
    Error,
    "EncodingError U+02D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D1");
    },
    Error,
    "EncodingError U+02D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D2");
    },
    Error,
    "EncodingError U+02D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D3");
    },
    Error,
    "EncodingError U+02D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D4");
    },
    Error,
    "EncodingError U+02D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D5");
    },
    Error,
    "EncodingError U+02D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D6");
    },
    Error,
    "EncodingError U+02D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D7");
    },
    Error,
    "EncodingError U+02D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D8");
    },
    Error,
    "EncodingError U+02D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D9");
    },
    Error,
    "EncodingError U+02D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02DA");
    },
    Error,
    "EncodingError U+02DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02DB");
    },
    Error,
    "EncodingError U+02DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02DC");
    },
    Error,
    "EncodingError U+02DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02DD");
    },
    Error,
    "EncodingError U+02DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02DE");
    },
    Error,
    "EncodingError U+02DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02DF");
    },
    Error,
    "EncodingError U+02DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E0");
    },
    Error,
    "EncodingError U+02E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E1");
    },
    Error,
    "EncodingError U+02E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E2");
    },
    Error,
    "EncodingError U+02E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E3");
    },
    Error,
    "EncodingError U+02E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E4");
    },
    Error,
    "EncodingError U+02E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E5");
    },
    Error,
    "EncodingError U+02E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E6");
    },
    Error,
    "EncodingError U+02E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E7");
    },
    Error,
    "EncodingError U+02E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E8");
    },
    Error,
    "EncodingError U+02E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E9");
    },
    Error,
    "EncodingError U+02E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02EA");
    },
    Error,
    "EncodingError U+02EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02EB");
    },
    Error,
    "EncodingError U+02EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02EC");
    },
    Error,
    "EncodingError U+02EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02ED");
    },
    Error,
    "EncodingError U+02ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02EE");
    },
    Error,
    "EncodingError U+02EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02EF");
    },
    Error,
    "EncodingError U+02EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F0");
    },
    Error,
    "EncodingError U+02F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F1");
    },
    Error,
    "EncodingError U+02F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F2");
    },
    Error,
    "EncodingError U+02F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F3");
    },
    Error,
    "EncodingError U+02F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F4");
    },
    Error,
    "EncodingError U+02F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F5");
    },
    Error,
    "EncodingError U+02F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F6");
    },
    Error,
    "EncodingError U+02F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F7");
    },
    Error,
    "EncodingError U+02F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F8");
    },
    Error,
    "EncodingError U+02F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F9");
    },
    Error,
    "EncodingError U+02F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02FA");
    },
    Error,
    "EncodingError U+02FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02FB");
    },
    Error,
    "EncodingError U+02FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02FC");
    },
    Error,
    "EncodingError U+02FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02FD");
    },
    Error,
    "EncodingError U+02FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02FE");
    },
    Error,
    "EncodingError U+02FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02FF");
    },
    Error,
    "EncodingError U+02FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0300");
    },
    Error,
    "EncodingError U+0300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0301");
    },
    Error,
    "EncodingError U+0301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0302");
    },
    Error,
    "EncodingError U+0302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0303");
    },
    Error,
    "EncodingError U+0303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0304");
    },
    Error,
    "EncodingError U+0304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0305");
    },
    Error,
    "EncodingError U+0305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0306");
    },
    Error,
    "EncodingError U+0306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0307");
    },
    Error,
    "EncodingError U+0307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0308");
    },
    Error,
    "EncodingError U+0308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0309");
    },
    Error,
    "EncodingError U+0309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u030A");
    },
    Error,
    "EncodingError U+030A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u030B");
    },
    Error,
    "EncodingError U+030B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u030C");
    },
    Error,
    "EncodingError U+030C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u030D");
    },
    Error,
    "EncodingError U+030D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u030E");
    },
    Error,
    "EncodingError U+030E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u030F");
    },
    Error,
    "EncodingError U+030F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0310");
    },
    Error,
    "EncodingError U+0310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0311");
    },
    Error,
    "EncodingError U+0311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0312");
    },
    Error,
    "EncodingError U+0312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0313");
    },
    Error,
    "EncodingError U+0313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0314");
    },
    Error,
    "EncodingError U+0314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0315");
    },
    Error,
    "EncodingError U+0315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0316");
    },
    Error,
    "EncodingError U+0316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0317");
    },
    Error,
    "EncodingError U+0317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0318");
    },
    Error,
    "EncodingError U+0318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0319");
    },
    Error,
    "EncodingError U+0319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u031A");
    },
    Error,
    "EncodingError U+031A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u031B");
    },
    Error,
    "EncodingError U+031B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u031C");
    },
    Error,
    "EncodingError U+031C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u031D");
    },
    Error,
    "EncodingError U+031D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u031E");
    },
    Error,
    "EncodingError U+031E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u031F");
    },
    Error,
    "EncodingError U+031F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0320");
    },
    Error,
    "EncodingError U+0320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0321");
    },
    Error,
    "EncodingError U+0321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0322");
    },
    Error,
    "EncodingError U+0322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0323");
    },
    Error,
    "EncodingError U+0323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0324");
    },
    Error,
    "EncodingError U+0324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0325");
    },
    Error,
    "EncodingError U+0325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0326");
    },
    Error,
    "EncodingError U+0326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0327");
    },
    Error,
    "EncodingError U+0327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0328");
    },
    Error,
    "EncodingError U+0328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0329");
    },
    Error,
    "EncodingError U+0329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u032A");
    },
    Error,
    "EncodingError U+032A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u032B");
    },
    Error,
    "EncodingError U+032B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u032C");
    },
    Error,
    "EncodingError U+032C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u032D");
    },
    Error,
    "EncodingError U+032D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u032E");
    },
    Error,
    "EncodingError U+032E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u032F");
    },
    Error,
    "EncodingError U+032F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0330");
    },
    Error,
    "EncodingError U+0330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0331");
    },
    Error,
    "EncodingError U+0331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0332");
    },
    Error,
    "EncodingError U+0332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0333");
    },
    Error,
    "EncodingError U+0333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0334");
    },
    Error,
    "EncodingError U+0334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0335");
    },
    Error,
    "EncodingError U+0335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0336");
    },
    Error,
    "EncodingError U+0336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0337");
    },
    Error,
    "EncodingError U+0337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0338");
    },
    Error,
    "EncodingError U+0338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0339");
    },
    Error,
    "EncodingError U+0339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u033A");
    },
    Error,
    "EncodingError U+033A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u033B");
    },
    Error,
    "EncodingError U+033B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u033C");
    },
    Error,
    "EncodingError U+033C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u033D");
    },
    Error,
    "EncodingError U+033D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u033E");
    },
    Error,
    "EncodingError U+033E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u033F");
    },
    Error,
    "EncodingError U+033F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0340");
    },
    Error,
    "EncodingError U+0340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0341");
    },
    Error,
    "EncodingError U+0341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0342");
    },
    Error,
    "EncodingError U+0342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0343");
    },
    Error,
    "EncodingError U+0343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0344");
    },
    Error,
    "EncodingError U+0344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0345");
    },
    Error,
    "EncodingError U+0345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0346");
    },
    Error,
    "EncodingError U+0346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0347");
    },
    Error,
    "EncodingError U+0347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0348");
    },
    Error,
    "EncodingError U+0348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0349");
    },
    Error,
    "EncodingError U+0349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u034A");
    },
    Error,
    "EncodingError U+034A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u034B");
    },
    Error,
    "EncodingError U+034B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u034C");
    },
    Error,
    "EncodingError U+034C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u034D");
    },
    Error,
    "EncodingError U+034D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u034E");
    },
    Error,
    "EncodingError U+034E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u034F");
    },
    Error,
    "EncodingError U+034F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0350");
    },
    Error,
    "EncodingError U+0350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0351");
    },
    Error,
    "EncodingError U+0351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0352");
    },
    Error,
    "EncodingError U+0352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0353");
    },
    Error,
    "EncodingError U+0353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0354");
    },
    Error,
    "EncodingError U+0354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0355");
    },
    Error,
    "EncodingError U+0355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0356");
    },
    Error,
    "EncodingError U+0356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0357");
    },
    Error,
    "EncodingError U+0357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0358");
    },
    Error,
    "EncodingError U+0358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0359");
    },
    Error,
    "EncodingError U+0359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u035A");
    },
    Error,
    "EncodingError U+035A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u035B");
    },
    Error,
    "EncodingError U+035B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u035C");
    },
    Error,
    "EncodingError U+035C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u035D");
    },
    Error,
    "EncodingError U+035D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u035E");
    },
    Error,
    "EncodingError U+035E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u035F");
    },
    Error,
    "EncodingError U+035F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0360");
    },
    Error,
    "EncodingError U+0360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0361");
    },
    Error,
    "EncodingError U+0361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0362");
    },
    Error,
    "EncodingError U+0362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0363");
    },
    Error,
    "EncodingError U+0363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0364");
    },
    Error,
    "EncodingError U+0364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0365");
    },
    Error,
    "EncodingError U+0365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0366");
    },
    Error,
    "EncodingError U+0366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0367");
    },
    Error,
    "EncodingError U+0367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0368");
    },
    Error,
    "EncodingError U+0368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0369");
    },
    Error,
    "EncodingError U+0369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u036A");
    },
    Error,
    "EncodingError U+036A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u036B");
    },
    Error,
    "EncodingError U+036B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u036C");
    },
    Error,
    "EncodingError U+036C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u036D");
    },
    Error,
    "EncodingError U+036D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u036E");
    },
    Error,
    "EncodingError U+036E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u036F");
    },
    Error,
    "EncodingError U+036F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0370");
    },
    Error,
    "EncodingError U+0370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0371");
    },
    Error,
    "EncodingError U+0371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0372");
    },
    Error,
    "EncodingError U+0372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0373");
    },
    Error,
    "EncodingError U+0373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0374");
    },
    Error,
    "EncodingError U+0374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0375");
    },
    Error,
    "EncodingError U+0375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0376");
    },
    Error,
    "EncodingError U+0376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0377");
    },
    Error,
    "EncodingError U+0377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0378");
    },
    Error,
    "EncodingError U+0378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0379");
    },
    Error,
    "EncodingError U+0379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u037A");
    },
    Error,
    "EncodingError U+037A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u037B");
    },
    Error,
    "EncodingError U+037B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u037C");
    },
    Error,
    "EncodingError U+037C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u037D");
    },
    Error,
    "EncodingError U+037D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u037E");
    },
    Error,
    "EncodingError U+037E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u037F");
    },
    Error,
    "EncodingError U+037F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0380");
    },
    Error,
    "EncodingError U+0380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0381");
    },
    Error,
    "EncodingError U+0381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0382");
    },
    Error,
    "EncodingError U+0382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0383");
    },
    Error,
    "EncodingError U+0383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0384");
    },
    Error,
    "EncodingError U+0384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0385");
    },
    Error,
    "EncodingError U+0385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0386");
    },
    Error,
    "EncodingError U+0386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0387");
    },
    Error,
    "EncodingError U+0387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0388");
    },
    Error,
    "EncodingError U+0388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0389");
    },
    Error,
    "EncodingError U+0389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u038A");
    },
    Error,
    "EncodingError U+038A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u038B");
    },
    Error,
    "EncodingError U+038B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u038C");
    },
    Error,
    "EncodingError U+038C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u038D");
    },
    Error,
    "EncodingError U+038D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u038E");
    },
    Error,
    "EncodingError U+038E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u038F");
    },
    Error,
    "EncodingError U+038F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0390");
    },
    Error,
    "EncodingError U+0390",
  );
  r = r &&
    ([...ms932Encoder.encode("ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ")].join(",") ===
      "131,159,131,160,131,161,131,162,131,163,131,164,131,165,131,166,131,167,131,168,131,169,131,170,131,171,131,172,131,173,131,174,131,175"); // U+0391
  assertThrows(
    () => {
      ms932Encoder.encode("\u03A2");
    },
    Error,
    "EncodingError U+03A2",
  );
  r = r &&
    ([...ms932Encoder.encode("ΣΤΥΦΧΨΩ")].join(",") ===
      "131,176,131,177,131,178,131,179,131,180,131,181,131,182"); // U+03A3
  assertThrows(
    () => {
      ms932Encoder.encode("\u03AA");
    },
    Error,
    "EncodingError U+03AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03AB");
    },
    Error,
    "EncodingError U+03AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03AC");
    },
    Error,
    "EncodingError U+03AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03AD");
    },
    Error,
    "EncodingError U+03AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03AE");
    },
    Error,
    "EncodingError U+03AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03AF");
    },
    Error,
    "EncodingError U+03AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03B0");
    },
    Error,
    "EncodingError U+03B0",
  );
  r = r &&
    ([...ms932Encoder.encode("αβγδεζηθικλμνξοπρ")].join(",") ===
      "131,191,131,192,131,193,131,194,131,195,131,196,131,197,131,198,131,199,131,200,131,201,131,202,131,203,131,204,131,205,131,206,131,207"); // U+03B1
  assertThrows(
    () => {
      ms932Encoder.encode("\u03C2");
    },
    Error,
    "EncodingError U+03C2",
  );
  r = r &&
    ([...ms932Encoder.encode("στυφχψω")].join(",") ===
      "131,208,131,209,131,210,131,211,131,212,131,213,131,214"); // U+03C3
  assertThrows(
    () => {
      ms932Encoder.encode("\u03CA");
    },
    Error,
    "EncodingError U+03CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03CB");
    },
    Error,
    "EncodingError U+03CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03CC");
    },
    Error,
    "EncodingError U+03CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03CD");
    },
    Error,
    "EncodingError U+03CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03CE");
    },
    Error,
    "EncodingError U+03CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03CF");
    },
    Error,
    "EncodingError U+03CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D0");
    },
    Error,
    "EncodingError U+03D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D1");
    },
    Error,
    "EncodingError U+03D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D2");
    },
    Error,
    "EncodingError U+03D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D3");
    },
    Error,
    "EncodingError U+03D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D4");
    },
    Error,
    "EncodingError U+03D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D5");
    },
    Error,
    "EncodingError U+03D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D6");
    },
    Error,
    "EncodingError U+03D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D7");
    },
    Error,
    "EncodingError U+03D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D8");
    },
    Error,
    "EncodingError U+03D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D9");
    },
    Error,
    "EncodingError U+03D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03DA");
    },
    Error,
    "EncodingError U+03DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03DB");
    },
    Error,
    "EncodingError U+03DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03DC");
    },
    Error,
    "EncodingError U+03DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03DD");
    },
    Error,
    "EncodingError U+03DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03DE");
    },
    Error,
    "EncodingError U+03DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03DF");
    },
    Error,
    "EncodingError U+03DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E0");
    },
    Error,
    "EncodingError U+03E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E1");
    },
    Error,
    "EncodingError U+03E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E2");
    },
    Error,
    "EncodingError U+03E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E3");
    },
    Error,
    "EncodingError U+03E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E4");
    },
    Error,
    "EncodingError U+03E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E5");
    },
    Error,
    "EncodingError U+03E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E6");
    },
    Error,
    "EncodingError U+03E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E7");
    },
    Error,
    "EncodingError U+03E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E8");
    },
    Error,
    "EncodingError U+03E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E9");
    },
    Error,
    "EncodingError U+03E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03EA");
    },
    Error,
    "EncodingError U+03EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03EB");
    },
    Error,
    "EncodingError U+03EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03EC");
    },
    Error,
    "EncodingError U+03EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03ED");
    },
    Error,
    "EncodingError U+03ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03EE");
    },
    Error,
    "EncodingError U+03EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03EF");
    },
    Error,
    "EncodingError U+03EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F0");
    },
    Error,
    "EncodingError U+03F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F1");
    },
    Error,
    "EncodingError U+03F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F2");
    },
    Error,
    "EncodingError U+03F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F3");
    },
    Error,
    "EncodingError U+03F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F4");
    },
    Error,
    "EncodingError U+03F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F5");
    },
    Error,
    "EncodingError U+03F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F6");
    },
    Error,
    "EncodingError U+03F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F7");
    },
    Error,
    "EncodingError U+03F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F8");
    },
    Error,
    "EncodingError U+03F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F9");
    },
    Error,
    "EncodingError U+03F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03FA");
    },
    Error,
    "EncodingError U+03FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03FB");
    },
    Error,
    "EncodingError U+03FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03FC");
    },
    Error,
    "EncodingError U+03FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03FD");
    },
    Error,
    "EncodingError U+03FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03FE");
    },
    Error,
    "EncodingError U+03FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03FF");
    },
    Error,
    "EncodingError U+03FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0400");
    },
    Error,
    "EncodingError U+0400",
  );
  r = r && ([...ms932Encoder.encode("Ё")].join(",") === "132,70"); // U+0401
  assertThrows(
    () => {
      ms932Encoder.encode("\u0402");
    },
    Error,
    "EncodingError U+0402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0403");
    },
    Error,
    "EncodingError U+0403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0404");
    },
    Error,
    "EncodingError U+0404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0405");
    },
    Error,
    "EncodingError U+0405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0406");
    },
    Error,
    "EncodingError U+0406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0407");
    },
    Error,
    "EncodingError U+0407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0408");
    },
    Error,
    "EncodingError U+0408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0409");
    },
    Error,
    "EncodingError U+0409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u040A");
    },
    Error,
    "EncodingError U+040A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u040B");
    },
    Error,
    "EncodingError U+040B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u040C");
    },
    Error,
    "EncodingError U+040C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u040D");
    },
    Error,
    "EncodingError U+040D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u040E");
    },
    Error,
    "EncodingError U+040E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u040F");
    },
    Error,
    "EncodingError U+040F",
  );
  r = r &&
    ([...ms932Encoder.encode(
      "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя",
    )].join(",") ===
      "132,64,132,65,132,66,132,67,132,68,132,69,132,71,132,72,132,73,132,74,132,75,132,76,132,77,132,78,132,79,132,80,132,81,132,82,132,83,132,84,132,85,132,86,132,87,132,88,132,89,132,90,132,91,132,92,132,93,132,94,132,95,132,96,132,112,132,113,132,114,132,115,132,116,132,117,132,119,132,120,132,121,132,122,132,123,132,124,132,125,132,126,132,128,132,129,132,130,132,131,132,132,132,133,132,134,132,135,132,136,132,137,132,138,132,139,132,140,132,141,132,142,132,143,132,144,132,145"); // U+0410
  assertThrows(
    () => {
      ms932Encoder.encode("\u0450");
    },
    Error,
    "EncodingError U+0450",
  );
  r = r && ([...ms932Encoder.encode("ё")].join(",") === "132,118"); // U+0451
  assertThrows(
    () => {
      ms932Encoder.encode("\u0452");
    },
    Error,
    "EncodingError U+0452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0453");
    },
    Error,
    "EncodingError U+0453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0454");
    },
    Error,
    "EncodingError U+0454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0455");
    },
    Error,
    "EncodingError U+0455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0456");
    },
    Error,
    "EncodingError U+0456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0457");
    },
    Error,
    "EncodingError U+0457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0458");
    },
    Error,
    "EncodingError U+0458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0459");
    },
    Error,
    "EncodingError U+0459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u045A");
    },
    Error,
    "EncodingError U+045A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u045B");
    },
    Error,
    "EncodingError U+045B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u045C");
    },
    Error,
    "EncodingError U+045C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u045D");
    },
    Error,
    "EncodingError U+045D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u045E");
    },
    Error,
    "EncodingError U+045E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u045F");
    },
    Error,
    "EncodingError U+045F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0460");
    },
    Error,
    "EncodingError U+0460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0461");
    },
    Error,
    "EncodingError U+0461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0462");
    },
    Error,
    "EncodingError U+0462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0463");
    },
    Error,
    "EncodingError U+0463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0464");
    },
    Error,
    "EncodingError U+0464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0465");
    },
    Error,
    "EncodingError U+0465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0466");
    },
    Error,
    "EncodingError U+0466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0467");
    },
    Error,
    "EncodingError U+0467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0468");
    },
    Error,
    "EncodingError U+0468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0469");
    },
    Error,
    "EncodingError U+0469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u046A");
    },
    Error,
    "EncodingError U+046A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u046B");
    },
    Error,
    "EncodingError U+046B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u046C");
    },
    Error,
    "EncodingError U+046C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u046D");
    },
    Error,
    "EncodingError U+046D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u046E");
    },
    Error,
    "EncodingError U+046E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u046F");
    },
    Error,
    "EncodingError U+046F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0470");
    },
    Error,
    "EncodingError U+0470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0471");
    },
    Error,
    "EncodingError U+0471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0472");
    },
    Error,
    "EncodingError U+0472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0473");
    },
    Error,
    "EncodingError U+0473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0474");
    },
    Error,
    "EncodingError U+0474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0475");
    },
    Error,
    "EncodingError U+0475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0476");
    },
    Error,
    "EncodingError U+0476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0477");
    },
    Error,
    "EncodingError U+0477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0478");
    },
    Error,
    "EncodingError U+0478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0479");
    },
    Error,
    "EncodingError U+0479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u047A");
    },
    Error,
    "EncodingError U+047A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u047B");
    },
    Error,
    "EncodingError U+047B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u047C");
    },
    Error,
    "EncodingError U+047C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u047D");
    },
    Error,
    "EncodingError U+047D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u047E");
    },
    Error,
    "EncodingError U+047E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u047F");
    },
    Error,
    "EncodingError U+047F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0480");
    },
    Error,
    "EncodingError U+0480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0481");
    },
    Error,
    "EncodingError U+0481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0482");
    },
    Error,
    "EncodingError U+0482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0483");
    },
    Error,
    "EncodingError U+0483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0484");
    },
    Error,
    "EncodingError U+0484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0485");
    },
    Error,
    "EncodingError U+0485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0486");
    },
    Error,
    "EncodingError U+0486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0487");
    },
    Error,
    "EncodingError U+0487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0488");
    },
    Error,
    "EncodingError U+0488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0489");
    },
    Error,
    "EncodingError U+0489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u048A");
    },
    Error,
    "EncodingError U+048A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u048B");
    },
    Error,
    "EncodingError U+048B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u048C");
    },
    Error,
    "EncodingError U+048C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u048D");
    },
    Error,
    "EncodingError U+048D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u048E");
    },
    Error,
    "EncodingError U+048E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u048F");
    },
    Error,
    "EncodingError U+048F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0490");
    },
    Error,
    "EncodingError U+0490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0491");
    },
    Error,
    "EncodingError U+0491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0492");
    },
    Error,
    "EncodingError U+0492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0493");
    },
    Error,
    "EncodingError U+0493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0494");
    },
    Error,
    "EncodingError U+0494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0495");
    },
    Error,
    "EncodingError U+0495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0496");
    },
    Error,
    "EncodingError U+0496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0497");
    },
    Error,
    "EncodingError U+0497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0498");
    },
    Error,
    "EncodingError U+0498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0499");
    },
    Error,
    "EncodingError U+0499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u049A");
    },
    Error,
    "EncodingError U+049A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u049B");
    },
    Error,
    "EncodingError U+049B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u049C");
    },
    Error,
    "EncodingError U+049C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u049D");
    },
    Error,
    "EncodingError U+049D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u049E");
    },
    Error,
    "EncodingError U+049E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u049F");
    },
    Error,
    "EncodingError U+049F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A0");
    },
    Error,
    "EncodingError U+04A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A1");
    },
    Error,
    "EncodingError U+04A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A2");
    },
    Error,
    "EncodingError U+04A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A3");
    },
    Error,
    "EncodingError U+04A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A4");
    },
    Error,
    "EncodingError U+04A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A5");
    },
    Error,
    "EncodingError U+04A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A6");
    },
    Error,
    "EncodingError U+04A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A7");
    },
    Error,
    "EncodingError U+04A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A8");
    },
    Error,
    "EncodingError U+04A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A9");
    },
    Error,
    "EncodingError U+04A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04AA");
    },
    Error,
    "EncodingError U+04AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04AB");
    },
    Error,
    "EncodingError U+04AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04AC");
    },
    Error,
    "EncodingError U+04AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04AD");
    },
    Error,
    "EncodingError U+04AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04AE");
    },
    Error,
    "EncodingError U+04AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04AF");
    },
    Error,
    "EncodingError U+04AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B0");
    },
    Error,
    "EncodingError U+04B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B1");
    },
    Error,
    "EncodingError U+04B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B2");
    },
    Error,
    "EncodingError U+04B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B3");
    },
    Error,
    "EncodingError U+04B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B4");
    },
    Error,
    "EncodingError U+04B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B5");
    },
    Error,
    "EncodingError U+04B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B6");
    },
    Error,
    "EncodingError U+04B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B7");
    },
    Error,
    "EncodingError U+04B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B8");
    },
    Error,
    "EncodingError U+04B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B9");
    },
    Error,
    "EncodingError U+04B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04BA");
    },
    Error,
    "EncodingError U+04BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04BB");
    },
    Error,
    "EncodingError U+04BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04BC");
    },
    Error,
    "EncodingError U+04BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04BD");
    },
    Error,
    "EncodingError U+04BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04BE");
    },
    Error,
    "EncodingError U+04BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04BF");
    },
    Error,
    "EncodingError U+04BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C0");
    },
    Error,
    "EncodingError U+04C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C1");
    },
    Error,
    "EncodingError U+04C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C2");
    },
    Error,
    "EncodingError U+04C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C3");
    },
    Error,
    "EncodingError U+04C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C4");
    },
    Error,
    "EncodingError U+04C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C5");
    },
    Error,
    "EncodingError U+04C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C6");
    },
    Error,
    "EncodingError U+04C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C7");
    },
    Error,
    "EncodingError U+04C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C8");
    },
    Error,
    "EncodingError U+04C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C9");
    },
    Error,
    "EncodingError U+04C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04CA");
    },
    Error,
    "EncodingError U+04CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04CB");
    },
    Error,
    "EncodingError U+04CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04CC");
    },
    Error,
    "EncodingError U+04CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04CD");
    },
    Error,
    "EncodingError U+04CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04CE");
    },
    Error,
    "EncodingError U+04CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04CF");
    },
    Error,
    "EncodingError U+04CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D0");
    },
    Error,
    "EncodingError U+04D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D1");
    },
    Error,
    "EncodingError U+04D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D2");
    },
    Error,
    "EncodingError U+04D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D3");
    },
    Error,
    "EncodingError U+04D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D4");
    },
    Error,
    "EncodingError U+04D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D5");
    },
    Error,
    "EncodingError U+04D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D6");
    },
    Error,
    "EncodingError U+04D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D7");
    },
    Error,
    "EncodingError U+04D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D8");
    },
    Error,
    "EncodingError U+04D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D9");
    },
    Error,
    "EncodingError U+04D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04DA");
    },
    Error,
    "EncodingError U+04DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04DB");
    },
    Error,
    "EncodingError U+04DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04DC");
    },
    Error,
    "EncodingError U+04DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04DD");
    },
    Error,
    "EncodingError U+04DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04DE");
    },
    Error,
    "EncodingError U+04DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04DF");
    },
    Error,
    "EncodingError U+04DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E0");
    },
    Error,
    "EncodingError U+04E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E1");
    },
    Error,
    "EncodingError U+04E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E2");
    },
    Error,
    "EncodingError U+04E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E3");
    },
    Error,
    "EncodingError U+04E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E4");
    },
    Error,
    "EncodingError U+04E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E5");
    },
    Error,
    "EncodingError U+04E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E6");
    },
    Error,
    "EncodingError U+04E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E7");
    },
    Error,
    "EncodingError U+04E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E8");
    },
    Error,
    "EncodingError U+04E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E9");
    },
    Error,
    "EncodingError U+04E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04EA");
    },
    Error,
    "EncodingError U+04EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04EB");
    },
    Error,
    "EncodingError U+04EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04EC");
    },
    Error,
    "EncodingError U+04EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04ED");
    },
    Error,
    "EncodingError U+04ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04EE");
    },
    Error,
    "EncodingError U+04EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04EF");
    },
    Error,
    "EncodingError U+04EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F0");
    },
    Error,
    "EncodingError U+04F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F1");
    },
    Error,
    "EncodingError U+04F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F2");
    },
    Error,
    "EncodingError U+04F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F3");
    },
    Error,
    "EncodingError U+04F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F4");
    },
    Error,
    "EncodingError U+04F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F5");
    },
    Error,
    "EncodingError U+04F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F6");
    },
    Error,
    "EncodingError U+04F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F7");
    },
    Error,
    "EncodingError U+04F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F8");
    },
    Error,
    "EncodingError U+04F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F9");
    },
    Error,
    "EncodingError U+04F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04FA");
    },
    Error,
    "EncodingError U+04FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04FB");
    },
    Error,
    "EncodingError U+04FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04FC");
    },
    Error,
    "EncodingError U+04FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04FD");
    },
    Error,
    "EncodingError U+04FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04FE");
    },
    Error,
    "EncodingError U+04FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04FF");
    },
    Error,
    "EncodingError U+04FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0500");
    },
    Error,
    "EncodingError U+0500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0501");
    },
    Error,
    "EncodingError U+0501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0502");
    },
    Error,
    "EncodingError U+0502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0503");
    },
    Error,
    "EncodingError U+0503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0504");
    },
    Error,
    "EncodingError U+0504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0505");
    },
    Error,
    "EncodingError U+0505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0506");
    },
    Error,
    "EncodingError U+0506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0507");
    },
    Error,
    "EncodingError U+0507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0508");
    },
    Error,
    "EncodingError U+0508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0509");
    },
    Error,
    "EncodingError U+0509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u050A");
    },
    Error,
    "EncodingError U+050A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u050B");
    },
    Error,
    "EncodingError U+050B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u050C");
    },
    Error,
    "EncodingError U+050C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u050D");
    },
    Error,
    "EncodingError U+050D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u050E");
    },
    Error,
    "EncodingError U+050E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u050F");
    },
    Error,
    "EncodingError U+050F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0510");
    },
    Error,
    "EncodingError U+0510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0511");
    },
    Error,
    "EncodingError U+0511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0512");
    },
    Error,
    "EncodingError U+0512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0513");
    },
    Error,
    "EncodingError U+0513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0514");
    },
    Error,
    "EncodingError U+0514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0515");
    },
    Error,
    "EncodingError U+0515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0516");
    },
    Error,
    "EncodingError U+0516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0517");
    },
    Error,
    "EncodingError U+0517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0518");
    },
    Error,
    "EncodingError U+0518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0519");
    },
    Error,
    "EncodingError U+0519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u051A");
    },
    Error,
    "EncodingError U+051A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u051B");
    },
    Error,
    "EncodingError U+051B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u051C");
    },
    Error,
    "EncodingError U+051C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u051D");
    },
    Error,
    "EncodingError U+051D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u051E");
    },
    Error,
    "EncodingError U+051E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u051F");
    },
    Error,
    "EncodingError U+051F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0520");
    },
    Error,
    "EncodingError U+0520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0521");
    },
    Error,
    "EncodingError U+0521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0522");
    },
    Error,
    "EncodingError U+0522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0523");
    },
    Error,
    "EncodingError U+0523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0524");
    },
    Error,
    "EncodingError U+0524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0525");
    },
    Error,
    "EncodingError U+0525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0526");
    },
    Error,
    "EncodingError U+0526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0527");
    },
    Error,
    "EncodingError U+0527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0528");
    },
    Error,
    "EncodingError U+0528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0529");
    },
    Error,
    "EncodingError U+0529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u052A");
    },
    Error,
    "EncodingError U+052A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u052B");
    },
    Error,
    "EncodingError U+052B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u052C");
    },
    Error,
    "EncodingError U+052C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u052D");
    },
    Error,
    "EncodingError U+052D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u052E");
    },
    Error,
    "EncodingError U+052E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u052F");
    },
    Error,
    "EncodingError U+052F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0530");
    },
    Error,
    "EncodingError U+0530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0531");
    },
    Error,
    "EncodingError U+0531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0532");
    },
    Error,
    "EncodingError U+0532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0533");
    },
    Error,
    "EncodingError U+0533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0534");
    },
    Error,
    "EncodingError U+0534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0535");
    },
    Error,
    "EncodingError U+0535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0536");
    },
    Error,
    "EncodingError U+0536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0537");
    },
    Error,
    "EncodingError U+0537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0538");
    },
    Error,
    "EncodingError U+0538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0539");
    },
    Error,
    "EncodingError U+0539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u053A");
    },
    Error,
    "EncodingError U+053A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u053B");
    },
    Error,
    "EncodingError U+053B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u053C");
    },
    Error,
    "EncodingError U+053C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u053D");
    },
    Error,
    "EncodingError U+053D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u053E");
    },
    Error,
    "EncodingError U+053E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u053F");
    },
    Error,
    "EncodingError U+053F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0540");
    },
    Error,
    "EncodingError U+0540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0541");
    },
    Error,
    "EncodingError U+0541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0542");
    },
    Error,
    "EncodingError U+0542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0543");
    },
    Error,
    "EncodingError U+0543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0544");
    },
    Error,
    "EncodingError U+0544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0545");
    },
    Error,
    "EncodingError U+0545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0546");
    },
    Error,
    "EncodingError U+0546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0547");
    },
    Error,
    "EncodingError U+0547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0548");
    },
    Error,
    "EncodingError U+0548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0549");
    },
    Error,
    "EncodingError U+0549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u054A");
    },
    Error,
    "EncodingError U+054A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u054B");
    },
    Error,
    "EncodingError U+054B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u054C");
    },
    Error,
    "EncodingError U+054C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u054D");
    },
    Error,
    "EncodingError U+054D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u054E");
    },
    Error,
    "EncodingError U+054E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u054F");
    },
    Error,
    "EncodingError U+054F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0550");
    },
    Error,
    "EncodingError U+0550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0551");
    },
    Error,
    "EncodingError U+0551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0552");
    },
    Error,
    "EncodingError U+0552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0553");
    },
    Error,
    "EncodingError U+0553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0554");
    },
    Error,
    "EncodingError U+0554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0555");
    },
    Error,
    "EncodingError U+0555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0556");
    },
    Error,
    "EncodingError U+0556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0557");
    },
    Error,
    "EncodingError U+0557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0558");
    },
    Error,
    "EncodingError U+0558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0559");
    },
    Error,
    "EncodingError U+0559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u055A");
    },
    Error,
    "EncodingError U+055A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u055B");
    },
    Error,
    "EncodingError U+055B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u055C");
    },
    Error,
    "EncodingError U+055C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u055D");
    },
    Error,
    "EncodingError U+055D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u055E");
    },
    Error,
    "EncodingError U+055E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u055F");
    },
    Error,
    "EncodingError U+055F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0560");
    },
    Error,
    "EncodingError U+0560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0561");
    },
    Error,
    "EncodingError U+0561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0562");
    },
    Error,
    "EncodingError U+0562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0563");
    },
    Error,
    "EncodingError U+0563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0564");
    },
    Error,
    "EncodingError U+0564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0565");
    },
    Error,
    "EncodingError U+0565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0566");
    },
    Error,
    "EncodingError U+0566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0567");
    },
    Error,
    "EncodingError U+0567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0568");
    },
    Error,
    "EncodingError U+0568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0569");
    },
    Error,
    "EncodingError U+0569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u056A");
    },
    Error,
    "EncodingError U+056A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u056B");
    },
    Error,
    "EncodingError U+056B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u056C");
    },
    Error,
    "EncodingError U+056C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u056D");
    },
    Error,
    "EncodingError U+056D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u056E");
    },
    Error,
    "EncodingError U+056E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u056F");
    },
    Error,
    "EncodingError U+056F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0570");
    },
    Error,
    "EncodingError U+0570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0571");
    },
    Error,
    "EncodingError U+0571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0572");
    },
    Error,
    "EncodingError U+0572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0573");
    },
    Error,
    "EncodingError U+0573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0574");
    },
    Error,
    "EncodingError U+0574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0575");
    },
    Error,
    "EncodingError U+0575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0576");
    },
    Error,
    "EncodingError U+0576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0577");
    },
    Error,
    "EncodingError U+0577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0578");
    },
    Error,
    "EncodingError U+0578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0579");
    },
    Error,
    "EncodingError U+0579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u057A");
    },
    Error,
    "EncodingError U+057A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u057B");
    },
    Error,
    "EncodingError U+057B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u057C");
    },
    Error,
    "EncodingError U+057C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u057D");
    },
    Error,
    "EncodingError U+057D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u057E");
    },
    Error,
    "EncodingError U+057E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u057F");
    },
    Error,
    "EncodingError U+057F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0580");
    },
    Error,
    "EncodingError U+0580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0581");
    },
    Error,
    "EncodingError U+0581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0582");
    },
    Error,
    "EncodingError U+0582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0583");
    },
    Error,
    "EncodingError U+0583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0584");
    },
    Error,
    "EncodingError U+0584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0585");
    },
    Error,
    "EncodingError U+0585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0586");
    },
    Error,
    "EncodingError U+0586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0587");
    },
    Error,
    "EncodingError U+0587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0588");
    },
    Error,
    "EncodingError U+0588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0589");
    },
    Error,
    "EncodingError U+0589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u058A");
    },
    Error,
    "EncodingError U+058A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u058B");
    },
    Error,
    "EncodingError U+058B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u058C");
    },
    Error,
    "EncodingError U+058C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u058D");
    },
    Error,
    "EncodingError U+058D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u058E");
    },
    Error,
    "EncodingError U+058E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u058F");
    },
    Error,
    "EncodingError U+058F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0590");
    },
    Error,
    "EncodingError U+0590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0591");
    },
    Error,
    "EncodingError U+0591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0592");
    },
    Error,
    "EncodingError U+0592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0593");
    },
    Error,
    "EncodingError U+0593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0594");
    },
    Error,
    "EncodingError U+0594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0595");
    },
    Error,
    "EncodingError U+0595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0596");
    },
    Error,
    "EncodingError U+0596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0597");
    },
    Error,
    "EncodingError U+0597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0598");
    },
    Error,
    "EncodingError U+0598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0599");
    },
    Error,
    "EncodingError U+0599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u059A");
    },
    Error,
    "EncodingError U+059A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u059B");
    },
    Error,
    "EncodingError U+059B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u059C");
    },
    Error,
    "EncodingError U+059C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u059D");
    },
    Error,
    "EncodingError U+059D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u059E");
    },
    Error,
    "EncodingError U+059E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u059F");
    },
    Error,
    "EncodingError U+059F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A0");
    },
    Error,
    "EncodingError U+05A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A1");
    },
    Error,
    "EncodingError U+05A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A2");
    },
    Error,
    "EncodingError U+05A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A3");
    },
    Error,
    "EncodingError U+05A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A4");
    },
    Error,
    "EncodingError U+05A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A5");
    },
    Error,
    "EncodingError U+05A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A6");
    },
    Error,
    "EncodingError U+05A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A7");
    },
    Error,
    "EncodingError U+05A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A8");
    },
    Error,
    "EncodingError U+05A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A9");
    },
    Error,
    "EncodingError U+05A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05AA");
    },
    Error,
    "EncodingError U+05AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05AB");
    },
    Error,
    "EncodingError U+05AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05AC");
    },
    Error,
    "EncodingError U+05AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05AD");
    },
    Error,
    "EncodingError U+05AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05AE");
    },
    Error,
    "EncodingError U+05AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05AF");
    },
    Error,
    "EncodingError U+05AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B0");
    },
    Error,
    "EncodingError U+05B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B1");
    },
    Error,
    "EncodingError U+05B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B2");
    },
    Error,
    "EncodingError U+05B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B3");
    },
    Error,
    "EncodingError U+05B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B4");
    },
    Error,
    "EncodingError U+05B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B5");
    },
    Error,
    "EncodingError U+05B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B6");
    },
    Error,
    "EncodingError U+05B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B7");
    },
    Error,
    "EncodingError U+05B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B8");
    },
    Error,
    "EncodingError U+05B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B9");
    },
    Error,
    "EncodingError U+05B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05BA");
    },
    Error,
    "EncodingError U+05BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05BB");
    },
    Error,
    "EncodingError U+05BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05BC");
    },
    Error,
    "EncodingError U+05BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05BD");
    },
    Error,
    "EncodingError U+05BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05BE");
    },
    Error,
    "EncodingError U+05BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05BF");
    },
    Error,
    "EncodingError U+05BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C0");
    },
    Error,
    "EncodingError U+05C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C1");
    },
    Error,
    "EncodingError U+05C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C2");
    },
    Error,
    "EncodingError U+05C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C3");
    },
    Error,
    "EncodingError U+05C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C4");
    },
    Error,
    "EncodingError U+05C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C5");
    },
    Error,
    "EncodingError U+05C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C6");
    },
    Error,
    "EncodingError U+05C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C7");
    },
    Error,
    "EncodingError U+05C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C8");
    },
    Error,
    "EncodingError U+05C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C9");
    },
    Error,
    "EncodingError U+05C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05CA");
    },
    Error,
    "EncodingError U+05CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05CB");
    },
    Error,
    "EncodingError U+05CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05CC");
    },
    Error,
    "EncodingError U+05CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05CD");
    },
    Error,
    "EncodingError U+05CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05CE");
    },
    Error,
    "EncodingError U+05CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05CF");
    },
    Error,
    "EncodingError U+05CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D0");
    },
    Error,
    "EncodingError U+05D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D1");
    },
    Error,
    "EncodingError U+05D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D2");
    },
    Error,
    "EncodingError U+05D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D3");
    },
    Error,
    "EncodingError U+05D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D4");
    },
    Error,
    "EncodingError U+05D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D5");
    },
    Error,
    "EncodingError U+05D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D6");
    },
    Error,
    "EncodingError U+05D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D7");
    },
    Error,
    "EncodingError U+05D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D8");
    },
    Error,
    "EncodingError U+05D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D9");
    },
    Error,
    "EncodingError U+05D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05DA");
    },
    Error,
    "EncodingError U+05DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05DB");
    },
    Error,
    "EncodingError U+05DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05DC");
    },
    Error,
    "EncodingError U+05DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05DD");
    },
    Error,
    "EncodingError U+05DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05DE");
    },
    Error,
    "EncodingError U+05DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05DF");
    },
    Error,
    "EncodingError U+05DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E0");
    },
    Error,
    "EncodingError U+05E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E1");
    },
    Error,
    "EncodingError U+05E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E2");
    },
    Error,
    "EncodingError U+05E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E3");
    },
    Error,
    "EncodingError U+05E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E4");
    },
    Error,
    "EncodingError U+05E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E5");
    },
    Error,
    "EncodingError U+05E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E6");
    },
    Error,
    "EncodingError U+05E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E7");
    },
    Error,
    "EncodingError U+05E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E8");
    },
    Error,
    "EncodingError U+05E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E9");
    },
    Error,
    "EncodingError U+05E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05EA");
    },
    Error,
    "EncodingError U+05EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05EB");
    },
    Error,
    "EncodingError U+05EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05EC");
    },
    Error,
    "EncodingError U+05EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05ED");
    },
    Error,
    "EncodingError U+05ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05EE");
    },
    Error,
    "EncodingError U+05EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05EF");
    },
    Error,
    "EncodingError U+05EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F0");
    },
    Error,
    "EncodingError U+05F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F1");
    },
    Error,
    "EncodingError U+05F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F2");
    },
    Error,
    "EncodingError U+05F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F3");
    },
    Error,
    "EncodingError U+05F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F4");
    },
    Error,
    "EncodingError U+05F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F5");
    },
    Error,
    "EncodingError U+05F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F6");
    },
    Error,
    "EncodingError U+05F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F7");
    },
    Error,
    "EncodingError U+05F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F8");
    },
    Error,
    "EncodingError U+05F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F9");
    },
    Error,
    "EncodingError U+05F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05FA");
    },
    Error,
    "EncodingError U+05FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05FB");
    },
    Error,
    "EncodingError U+05FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05FC");
    },
    Error,
    "EncodingError U+05FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05FD");
    },
    Error,
    "EncodingError U+05FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05FE");
    },
    Error,
    "EncodingError U+05FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05FF");
    },
    Error,
    "EncodingError U+05FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0600");
    },
    Error,
    "EncodingError U+0600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0601");
    },
    Error,
    "EncodingError U+0601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0602");
    },
    Error,
    "EncodingError U+0602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0603");
    },
    Error,
    "EncodingError U+0603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0604");
    },
    Error,
    "EncodingError U+0604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0605");
    },
    Error,
    "EncodingError U+0605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0606");
    },
    Error,
    "EncodingError U+0606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0607");
    },
    Error,
    "EncodingError U+0607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0608");
    },
    Error,
    "EncodingError U+0608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0609");
    },
    Error,
    "EncodingError U+0609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u060A");
    },
    Error,
    "EncodingError U+060A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u060B");
    },
    Error,
    "EncodingError U+060B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u060C");
    },
    Error,
    "EncodingError U+060C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u060D");
    },
    Error,
    "EncodingError U+060D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u060E");
    },
    Error,
    "EncodingError U+060E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u060F");
    },
    Error,
    "EncodingError U+060F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0610");
    },
    Error,
    "EncodingError U+0610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0611");
    },
    Error,
    "EncodingError U+0611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0612");
    },
    Error,
    "EncodingError U+0612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0613");
    },
    Error,
    "EncodingError U+0613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0614");
    },
    Error,
    "EncodingError U+0614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0615");
    },
    Error,
    "EncodingError U+0615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0616");
    },
    Error,
    "EncodingError U+0616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0617");
    },
    Error,
    "EncodingError U+0617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0618");
    },
    Error,
    "EncodingError U+0618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0619");
    },
    Error,
    "EncodingError U+0619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u061A");
    },
    Error,
    "EncodingError U+061A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u061B");
    },
    Error,
    "EncodingError U+061B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u061C");
    },
    Error,
    "EncodingError U+061C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u061D");
    },
    Error,
    "EncodingError U+061D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u061E");
    },
    Error,
    "EncodingError U+061E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u061F");
    },
    Error,
    "EncodingError U+061F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0620");
    },
    Error,
    "EncodingError U+0620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0621");
    },
    Error,
    "EncodingError U+0621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0622");
    },
    Error,
    "EncodingError U+0622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0623");
    },
    Error,
    "EncodingError U+0623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0624");
    },
    Error,
    "EncodingError U+0624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0625");
    },
    Error,
    "EncodingError U+0625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0626");
    },
    Error,
    "EncodingError U+0626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0627");
    },
    Error,
    "EncodingError U+0627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0628");
    },
    Error,
    "EncodingError U+0628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0629");
    },
    Error,
    "EncodingError U+0629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u062A");
    },
    Error,
    "EncodingError U+062A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u062B");
    },
    Error,
    "EncodingError U+062B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u062C");
    },
    Error,
    "EncodingError U+062C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u062D");
    },
    Error,
    "EncodingError U+062D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u062E");
    },
    Error,
    "EncodingError U+062E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u062F");
    },
    Error,
    "EncodingError U+062F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0630");
    },
    Error,
    "EncodingError U+0630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0631");
    },
    Error,
    "EncodingError U+0631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0632");
    },
    Error,
    "EncodingError U+0632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0633");
    },
    Error,
    "EncodingError U+0633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0634");
    },
    Error,
    "EncodingError U+0634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0635");
    },
    Error,
    "EncodingError U+0635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0636");
    },
    Error,
    "EncodingError U+0636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0637");
    },
    Error,
    "EncodingError U+0637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0638");
    },
    Error,
    "EncodingError U+0638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0639");
    },
    Error,
    "EncodingError U+0639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u063A");
    },
    Error,
    "EncodingError U+063A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u063B");
    },
    Error,
    "EncodingError U+063B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u063C");
    },
    Error,
    "EncodingError U+063C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u063D");
    },
    Error,
    "EncodingError U+063D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u063E");
    },
    Error,
    "EncodingError U+063E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u063F");
    },
    Error,
    "EncodingError U+063F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0640");
    },
    Error,
    "EncodingError U+0640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0641");
    },
    Error,
    "EncodingError U+0641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0642");
    },
    Error,
    "EncodingError U+0642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0643");
    },
    Error,
    "EncodingError U+0643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0644");
    },
    Error,
    "EncodingError U+0644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0645");
    },
    Error,
    "EncodingError U+0645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0646");
    },
    Error,
    "EncodingError U+0646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0647");
    },
    Error,
    "EncodingError U+0647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0648");
    },
    Error,
    "EncodingError U+0648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0649");
    },
    Error,
    "EncodingError U+0649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u064A");
    },
    Error,
    "EncodingError U+064A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u064B");
    },
    Error,
    "EncodingError U+064B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u064C");
    },
    Error,
    "EncodingError U+064C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u064D");
    },
    Error,
    "EncodingError U+064D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u064E");
    },
    Error,
    "EncodingError U+064E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u064F");
    },
    Error,
    "EncodingError U+064F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0650");
    },
    Error,
    "EncodingError U+0650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0651");
    },
    Error,
    "EncodingError U+0651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0652");
    },
    Error,
    "EncodingError U+0652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0653");
    },
    Error,
    "EncodingError U+0653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0654");
    },
    Error,
    "EncodingError U+0654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0655");
    },
    Error,
    "EncodingError U+0655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0656");
    },
    Error,
    "EncodingError U+0656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0657");
    },
    Error,
    "EncodingError U+0657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0658");
    },
    Error,
    "EncodingError U+0658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0659");
    },
    Error,
    "EncodingError U+0659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u065A");
    },
    Error,
    "EncodingError U+065A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u065B");
    },
    Error,
    "EncodingError U+065B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u065C");
    },
    Error,
    "EncodingError U+065C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u065D");
    },
    Error,
    "EncodingError U+065D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u065E");
    },
    Error,
    "EncodingError U+065E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u065F");
    },
    Error,
    "EncodingError U+065F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0660");
    },
    Error,
    "EncodingError U+0660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0661");
    },
    Error,
    "EncodingError U+0661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0662");
    },
    Error,
    "EncodingError U+0662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0663");
    },
    Error,
    "EncodingError U+0663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0664");
    },
    Error,
    "EncodingError U+0664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0665");
    },
    Error,
    "EncodingError U+0665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0666");
    },
    Error,
    "EncodingError U+0666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0667");
    },
    Error,
    "EncodingError U+0667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0668");
    },
    Error,
    "EncodingError U+0668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0669");
    },
    Error,
    "EncodingError U+0669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u066A");
    },
    Error,
    "EncodingError U+066A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u066B");
    },
    Error,
    "EncodingError U+066B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u066C");
    },
    Error,
    "EncodingError U+066C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u066D");
    },
    Error,
    "EncodingError U+066D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u066E");
    },
    Error,
    "EncodingError U+066E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u066F");
    },
    Error,
    "EncodingError U+066F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0670");
    },
    Error,
    "EncodingError U+0670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0671");
    },
    Error,
    "EncodingError U+0671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0672");
    },
    Error,
    "EncodingError U+0672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0673");
    },
    Error,
    "EncodingError U+0673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0674");
    },
    Error,
    "EncodingError U+0674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0675");
    },
    Error,
    "EncodingError U+0675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0676");
    },
    Error,
    "EncodingError U+0676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0677");
    },
    Error,
    "EncodingError U+0677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0678");
    },
    Error,
    "EncodingError U+0678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0679");
    },
    Error,
    "EncodingError U+0679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u067A");
    },
    Error,
    "EncodingError U+067A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u067B");
    },
    Error,
    "EncodingError U+067B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u067C");
    },
    Error,
    "EncodingError U+067C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u067D");
    },
    Error,
    "EncodingError U+067D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u067E");
    },
    Error,
    "EncodingError U+067E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u067F");
    },
    Error,
    "EncodingError U+067F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0680");
    },
    Error,
    "EncodingError U+0680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0681");
    },
    Error,
    "EncodingError U+0681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0682");
    },
    Error,
    "EncodingError U+0682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0683");
    },
    Error,
    "EncodingError U+0683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0684");
    },
    Error,
    "EncodingError U+0684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0685");
    },
    Error,
    "EncodingError U+0685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0686");
    },
    Error,
    "EncodingError U+0686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0687");
    },
    Error,
    "EncodingError U+0687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0688");
    },
    Error,
    "EncodingError U+0688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0689");
    },
    Error,
    "EncodingError U+0689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u068A");
    },
    Error,
    "EncodingError U+068A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u068B");
    },
    Error,
    "EncodingError U+068B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u068C");
    },
    Error,
    "EncodingError U+068C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u068D");
    },
    Error,
    "EncodingError U+068D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u068E");
    },
    Error,
    "EncodingError U+068E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u068F");
    },
    Error,
    "EncodingError U+068F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0690");
    },
    Error,
    "EncodingError U+0690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0691");
    },
    Error,
    "EncodingError U+0691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0692");
    },
    Error,
    "EncodingError U+0692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0693");
    },
    Error,
    "EncodingError U+0693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0694");
    },
    Error,
    "EncodingError U+0694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0695");
    },
    Error,
    "EncodingError U+0695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0696");
    },
    Error,
    "EncodingError U+0696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0697");
    },
    Error,
    "EncodingError U+0697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0698");
    },
    Error,
    "EncodingError U+0698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0699");
    },
    Error,
    "EncodingError U+0699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u069A");
    },
    Error,
    "EncodingError U+069A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u069B");
    },
    Error,
    "EncodingError U+069B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u069C");
    },
    Error,
    "EncodingError U+069C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u069D");
    },
    Error,
    "EncodingError U+069D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u069E");
    },
    Error,
    "EncodingError U+069E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u069F");
    },
    Error,
    "EncodingError U+069F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A0");
    },
    Error,
    "EncodingError U+06A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A1");
    },
    Error,
    "EncodingError U+06A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A2");
    },
    Error,
    "EncodingError U+06A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A3");
    },
    Error,
    "EncodingError U+06A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A4");
    },
    Error,
    "EncodingError U+06A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A5");
    },
    Error,
    "EncodingError U+06A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A6");
    },
    Error,
    "EncodingError U+06A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A7");
    },
    Error,
    "EncodingError U+06A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A8");
    },
    Error,
    "EncodingError U+06A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A9");
    },
    Error,
    "EncodingError U+06A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06AA");
    },
    Error,
    "EncodingError U+06AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06AB");
    },
    Error,
    "EncodingError U+06AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06AC");
    },
    Error,
    "EncodingError U+06AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06AD");
    },
    Error,
    "EncodingError U+06AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06AE");
    },
    Error,
    "EncodingError U+06AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06AF");
    },
    Error,
    "EncodingError U+06AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B0");
    },
    Error,
    "EncodingError U+06B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B1");
    },
    Error,
    "EncodingError U+06B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B2");
    },
    Error,
    "EncodingError U+06B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B3");
    },
    Error,
    "EncodingError U+06B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B4");
    },
    Error,
    "EncodingError U+06B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B5");
    },
    Error,
    "EncodingError U+06B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B6");
    },
    Error,
    "EncodingError U+06B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B7");
    },
    Error,
    "EncodingError U+06B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B8");
    },
    Error,
    "EncodingError U+06B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B9");
    },
    Error,
    "EncodingError U+06B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06BA");
    },
    Error,
    "EncodingError U+06BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06BB");
    },
    Error,
    "EncodingError U+06BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06BC");
    },
    Error,
    "EncodingError U+06BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06BD");
    },
    Error,
    "EncodingError U+06BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06BE");
    },
    Error,
    "EncodingError U+06BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06BF");
    },
    Error,
    "EncodingError U+06BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C0");
    },
    Error,
    "EncodingError U+06C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C1");
    },
    Error,
    "EncodingError U+06C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C2");
    },
    Error,
    "EncodingError U+06C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C3");
    },
    Error,
    "EncodingError U+06C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C4");
    },
    Error,
    "EncodingError U+06C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C5");
    },
    Error,
    "EncodingError U+06C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C6");
    },
    Error,
    "EncodingError U+06C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C7");
    },
    Error,
    "EncodingError U+06C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C8");
    },
    Error,
    "EncodingError U+06C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C9");
    },
    Error,
    "EncodingError U+06C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06CA");
    },
    Error,
    "EncodingError U+06CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06CB");
    },
    Error,
    "EncodingError U+06CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06CC");
    },
    Error,
    "EncodingError U+06CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06CD");
    },
    Error,
    "EncodingError U+06CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06CE");
    },
    Error,
    "EncodingError U+06CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06CF");
    },
    Error,
    "EncodingError U+06CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D0");
    },
    Error,
    "EncodingError U+06D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D1");
    },
    Error,
    "EncodingError U+06D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D2");
    },
    Error,
    "EncodingError U+06D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D3");
    },
    Error,
    "EncodingError U+06D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D4");
    },
    Error,
    "EncodingError U+06D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D5");
    },
    Error,
    "EncodingError U+06D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D6");
    },
    Error,
    "EncodingError U+06D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D7");
    },
    Error,
    "EncodingError U+06D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D8");
    },
    Error,
    "EncodingError U+06D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D9");
    },
    Error,
    "EncodingError U+06D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06DA");
    },
    Error,
    "EncodingError U+06DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06DB");
    },
    Error,
    "EncodingError U+06DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06DC");
    },
    Error,
    "EncodingError U+06DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06DD");
    },
    Error,
    "EncodingError U+06DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06DE");
    },
    Error,
    "EncodingError U+06DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06DF");
    },
    Error,
    "EncodingError U+06DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E0");
    },
    Error,
    "EncodingError U+06E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E1");
    },
    Error,
    "EncodingError U+06E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E2");
    },
    Error,
    "EncodingError U+06E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E3");
    },
    Error,
    "EncodingError U+06E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E4");
    },
    Error,
    "EncodingError U+06E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E5");
    },
    Error,
    "EncodingError U+06E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E6");
    },
    Error,
    "EncodingError U+06E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E7");
    },
    Error,
    "EncodingError U+06E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E8");
    },
    Error,
    "EncodingError U+06E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E9");
    },
    Error,
    "EncodingError U+06E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06EA");
    },
    Error,
    "EncodingError U+06EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06EB");
    },
    Error,
    "EncodingError U+06EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06EC");
    },
    Error,
    "EncodingError U+06EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06ED");
    },
    Error,
    "EncodingError U+06ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06EE");
    },
    Error,
    "EncodingError U+06EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06EF");
    },
    Error,
    "EncodingError U+06EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F0");
    },
    Error,
    "EncodingError U+06F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F1");
    },
    Error,
    "EncodingError U+06F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F2");
    },
    Error,
    "EncodingError U+06F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F3");
    },
    Error,
    "EncodingError U+06F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F4");
    },
    Error,
    "EncodingError U+06F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F5");
    },
    Error,
    "EncodingError U+06F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F6");
    },
    Error,
    "EncodingError U+06F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F7");
    },
    Error,
    "EncodingError U+06F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F8");
    },
    Error,
    "EncodingError U+06F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F9");
    },
    Error,
    "EncodingError U+06F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06FA");
    },
    Error,
    "EncodingError U+06FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06FB");
    },
    Error,
    "EncodingError U+06FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06FC");
    },
    Error,
    "EncodingError U+06FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06FD");
    },
    Error,
    "EncodingError U+06FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06FE");
    },
    Error,
    "EncodingError U+06FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06FF");
    },
    Error,
    "EncodingError U+06FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0700");
    },
    Error,
    "EncodingError U+0700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0701");
    },
    Error,
    "EncodingError U+0701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0702");
    },
    Error,
    "EncodingError U+0702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0703");
    },
    Error,
    "EncodingError U+0703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0704");
    },
    Error,
    "EncodingError U+0704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0705");
    },
    Error,
    "EncodingError U+0705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0706");
    },
    Error,
    "EncodingError U+0706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0707");
    },
    Error,
    "EncodingError U+0707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0708");
    },
    Error,
    "EncodingError U+0708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0709");
    },
    Error,
    "EncodingError U+0709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u070A");
    },
    Error,
    "EncodingError U+070A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u070B");
    },
    Error,
    "EncodingError U+070B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u070C");
    },
    Error,
    "EncodingError U+070C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u070D");
    },
    Error,
    "EncodingError U+070D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u070E");
    },
    Error,
    "EncodingError U+070E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u070F");
    },
    Error,
    "EncodingError U+070F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0710");
    },
    Error,
    "EncodingError U+0710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0711");
    },
    Error,
    "EncodingError U+0711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0712");
    },
    Error,
    "EncodingError U+0712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0713");
    },
    Error,
    "EncodingError U+0713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0714");
    },
    Error,
    "EncodingError U+0714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0715");
    },
    Error,
    "EncodingError U+0715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0716");
    },
    Error,
    "EncodingError U+0716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0717");
    },
    Error,
    "EncodingError U+0717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0718");
    },
    Error,
    "EncodingError U+0718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0719");
    },
    Error,
    "EncodingError U+0719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u071A");
    },
    Error,
    "EncodingError U+071A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u071B");
    },
    Error,
    "EncodingError U+071B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u071C");
    },
    Error,
    "EncodingError U+071C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u071D");
    },
    Error,
    "EncodingError U+071D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u071E");
    },
    Error,
    "EncodingError U+071E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u071F");
    },
    Error,
    "EncodingError U+071F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0720");
    },
    Error,
    "EncodingError U+0720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0721");
    },
    Error,
    "EncodingError U+0721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0722");
    },
    Error,
    "EncodingError U+0722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0723");
    },
    Error,
    "EncodingError U+0723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0724");
    },
    Error,
    "EncodingError U+0724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0725");
    },
    Error,
    "EncodingError U+0725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0726");
    },
    Error,
    "EncodingError U+0726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0727");
    },
    Error,
    "EncodingError U+0727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0728");
    },
    Error,
    "EncodingError U+0728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0729");
    },
    Error,
    "EncodingError U+0729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u072A");
    },
    Error,
    "EncodingError U+072A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u072B");
    },
    Error,
    "EncodingError U+072B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u072C");
    },
    Error,
    "EncodingError U+072C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u072D");
    },
    Error,
    "EncodingError U+072D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u072E");
    },
    Error,
    "EncodingError U+072E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u072F");
    },
    Error,
    "EncodingError U+072F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0730");
    },
    Error,
    "EncodingError U+0730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0731");
    },
    Error,
    "EncodingError U+0731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0732");
    },
    Error,
    "EncodingError U+0732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0733");
    },
    Error,
    "EncodingError U+0733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0734");
    },
    Error,
    "EncodingError U+0734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0735");
    },
    Error,
    "EncodingError U+0735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0736");
    },
    Error,
    "EncodingError U+0736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0737");
    },
    Error,
    "EncodingError U+0737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0738");
    },
    Error,
    "EncodingError U+0738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0739");
    },
    Error,
    "EncodingError U+0739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u073A");
    },
    Error,
    "EncodingError U+073A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u073B");
    },
    Error,
    "EncodingError U+073B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u073C");
    },
    Error,
    "EncodingError U+073C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u073D");
    },
    Error,
    "EncodingError U+073D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u073E");
    },
    Error,
    "EncodingError U+073E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u073F");
    },
    Error,
    "EncodingError U+073F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0740");
    },
    Error,
    "EncodingError U+0740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0741");
    },
    Error,
    "EncodingError U+0741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0742");
    },
    Error,
    "EncodingError U+0742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0743");
    },
    Error,
    "EncodingError U+0743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0744");
    },
    Error,
    "EncodingError U+0744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0745");
    },
    Error,
    "EncodingError U+0745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0746");
    },
    Error,
    "EncodingError U+0746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0747");
    },
    Error,
    "EncodingError U+0747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0748");
    },
    Error,
    "EncodingError U+0748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0749");
    },
    Error,
    "EncodingError U+0749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u074A");
    },
    Error,
    "EncodingError U+074A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u074B");
    },
    Error,
    "EncodingError U+074B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u074C");
    },
    Error,
    "EncodingError U+074C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u074D");
    },
    Error,
    "EncodingError U+074D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u074E");
    },
    Error,
    "EncodingError U+074E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u074F");
    },
    Error,
    "EncodingError U+074F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0750");
    },
    Error,
    "EncodingError U+0750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0751");
    },
    Error,
    "EncodingError U+0751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0752");
    },
    Error,
    "EncodingError U+0752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0753");
    },
    Error,
    "EncodingError U+0753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0754");
    },
    Error,
    "EncodingError U+0754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0755");
    },
    Error,
    "EncodingError U+0755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0756");
    },
    Error,
    "EncodingError U+0756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0757");
    },
    Error,
    "EncodingError U+0757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0758");
    },
    Error,
    "EncodingError U+0758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0759");
    },
    Error,
    "EncodingError U+0759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u075A");
    },
    Error,
    "EncodingError U+075A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u075B");
    },
    Error,
    "EncodingError U+075B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u075C");
    },
    Error,
    "EncodingError U+075C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u075D");
    },
    Error,
    "EncodingError U+075D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u075E");
    },
    Error,
    "EncodingError U+075E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u075F");
    },
    Error,
    "EncodingError U+075F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0760");
    },
    Error,
    "EncodingError U+0760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0761");
    },
    Error,
    "EncodingError U+0761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0762");
    },
    Error,
    "EncodingError U+0762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0763");
    },
    Error,
    "EncodingError U+0763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0764");
    },
    Error,
    "EncodingError U+0764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0765");
    },
    Error,
    "EncodingError U+0765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0766");
    },
    Error,
    "EncodingError U+0766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0767");
    },
    Error,
    "EncodingError U+0767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0768");
    },
    Error,
    "EncodingError U+0768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0769");
    },
    Error,
    "EncodingError U+0769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u076A");
    },
    Error,
    "EncodingError U+076A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u076B");
    },
    Error,
    "EncodingError U+076B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u076C");
    },
    Error,
    "EncodingError U+076C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u076D");
    },
    Error,
    "EncodingError U+076D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u076E");
    },
    Error,
    "EncodingError U+076E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u076F");
    },
    Error,
    "EncodingError U+076F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0770");
    },
    Error,
    "EncodingError U+0770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0771");
    },
    Error,
    "EncodingError U+0771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0772");
    },
    Error,
    "EncodingError U+0772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0773");
    },
    Error,
    "EncodingError U+0773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0774");
    },
    Error,
    "EncodingError U+0774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0775");
    },
    Error,
    "EncodingError U+0775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0776");
    },
    Error,
    "EncodingError U+0776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0777");
    },
    Error,
    "EncodingError U+0777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0778");
    },
    Error,
    "EncodingError U+0778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0779");
    },
    Error,
    "EncodingError U+0779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u077A");
    },
    Error,
    "EncodingError U+077A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u077B");
    },
    Error,
    "EncodingError U+077B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u077C");
    },
    Error,
    "EncodingError U+077C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u077D");
    },
    Error,
    "EncodingError U+077D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u077E");
    },
    Error,
    "EncodingError U+077E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u077F");
    },
    Error,
    "EncodingError U+077F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0780");
    },
    Error,
    "EncodingError U+0780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0781");
    },
    Error,
    "EncodingError U+0781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0782");
    },
    Error,
    "EncodingError U+0782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0783");
    },
    Error,
    "EncodingError U+0783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0784");
    },
    Error,
    "EncodingError U+0784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0785");
    },
    Error,
    "EncodingError U+0785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0786");
    },
    Error,
    "EncodingError U+0786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0787");
    },
    Error,
    "EncodingError U+0787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0788");
    },
    Error,
    "EncodingError U+0788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0789");
    },
    Error,
    "EncodingError U+0789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u078A");
    },
    Error,
    "EncodingError U+078A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u078B");
    },
    Error,
    "EncodingError U+078B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u078C");
    },
    Error,
    "EncodingError U+078C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u078D");
    },
    Error,
    "EncodingError U+078D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u078E");
    },
    Error,
    "EncodingError U+078E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u078F");
    },
    Error,
    "EncodingError U+078F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0790");
    },
    Error,
    "EncodingError U+0790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0791");
    },
    Error,
    "EncodingError U+0791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0792");
    },
    Error,
    "EncodingError U+0792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0793");
    },
    Error,
    "EncodingError U+0793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0794");
    },
    Error,
    "EncodingError U+0794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0795");
    },
    Error,
    "EncodingError U+0795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0796");
    },
    Error,
    "EncodingError U+0796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0797");
    },
    Error,
    "EncodingError U+0797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0798");
    },
    Error,
    "EncodingError U+0798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0799");
    },
    Error,
    "EncodingError U+0799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u079A");
    },
    Error,
    "EncodingError U+079A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u079B");
    },
    Error,
    "EncodingError U+079B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u079C");
    },
    Error,
    "EncodingError U+079C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u079D");
    },
    Error,
    "EncodingError U+079D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u079E");
    },
    Error,
    "EncodingError U+079E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u079F");
    },
    Error,
    "EncodingError U+079F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A0");
    },
    Error,
    "EncodingError U+07A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A1");
    },
    Error,
    "EncodingError U+07A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A2");
    },
    Error,
    "EncodingError U+07A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A3");
    },
    Error,
    "EncodingError U+07A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A4");
    },
    Error,
    "EncodingError U+07A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A5");
    },
    Error,
    "EncodingError U+07A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A6");
    },
    Error,
    "EncodingError U+07A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A7");
    },
    Error,
    "EncodingError U+07A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A8");
    },
    Error,
    "EncodingError U+07A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A9");
    },
    Error,
    "EncodingError U+07A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07AA");
    },
    Error,
    "EncodingError U+07AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07AB");
    },
    Error,
    "EncodingError U+07AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07AC");
    },
    Error,
    "EncodingError U+07AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07AD");
    },
    Error,
    "EncodingError U+07AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07AE");
    },
    Error,
    "EncodingError U+07AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07AF");
    },
    Error,
    "EncodingError U+07AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B0");
    },
    Error,
    "EncodingError U+07B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B1");
    },
    Error,
    "EncodingError U+07B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B2");
    },
    Error,
    "EncodingError U+07B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B3");
    },
    Error,
    "EncodingError U+07B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B4");
    },
    Error,
    "EncodingError U+07B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B5");
    },
    Error,
    "EncodingError U+07B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B6");
    },
    Error,
    "EncodingError U+07B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B7");
    },
    Error,
    "EncodingError U+07B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B8");
    },
    Error,
    "EncodingError U+07B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B9");
    },
    Error,
    "EncodingError U+07B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07BA");
    },
    Error,
    "EncodingError U+07BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07BB");
    },
    Error,
    "EncodingError U+07BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07BC");
    },
    Error,
    "EncodingError U+07BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07BD");
    },
    Error,
    "EncodingError U+07BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07BE");
    },
    Error,
    "EncodingError U+07BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07BF");
    },
    Error,
    "EncodingError U+07BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C0");
    },
    Error,
    "EncodingError U+07C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C1");
    },
    Error,
    "EncodingError U+07C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C2");
    },
    Error,
    "EncodingError U+07C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C3");
    },
    Error,
    "EncodingError U+07C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C4");
    },
    Error,
    "EncodingError U+07C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C5");
    },
    Error,
    "EncodingError U+07C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C6");
    },
    Error,
    "EncodingError U+07C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C7");
    },
    Error,
    "EncodingError U+07C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C8");
    },
    Error,
    "EncodingError U+07C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C9");
    },
    Error,
    "EncodingError U+07C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07CA");
    },
    Error,
    "EncodingError U+07CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07CB");
    },
    Error,
    "EncodingError U+07CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07CC");
    },
    Error,
    "EncodingError U+07CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07CD");
    },
    Error,
    "EncodingError U+07CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07CE");
    },
    Error,
    "EncodingError U+07CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07CF");
    },
    Error,
    "EncodingError U+07CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D0");
    },
    Error,
    "EncodingError U+07D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D1");
    },
    Error,
    "EncodingError U+07D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D2");
    },
    Error,
    "EncodingError U+07D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D3");
    },
    Error,
    "EncodingError U+07D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D4");
    },
    Error,
    "EncodingError U+07D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D5");
    },
    Error,
    "EncodingError U+07D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D6");
    },
    Error,
    "EncodingError U+07D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D7");
    },
    Error,
    "EncodingError U+07D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D8");
    },
    Error,
    "EncodingError U+07D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D9");
    },
    Error,
    "EncodingError U+07D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07DA");
    },
    Error,
    "EncodingError U+07DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07DB");
    },
    Error,
    "EncodingError U+07DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07DC");
    },
    Error,
    "EncodingError U+07DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07DD");
    },
    Error,
    "EncodingError U+07DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07DE");
    },
    Error,
    "EncodingError U+07DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07DF");
    },
    Error,
    "EncodingError U+07DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E0");
    },
    Error,
    "EncodingError U+07E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E1");
    },
    Error,
    "EncodingError U+07E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E2");
    },
    Error,
    "EncodingError U+07E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E3");
    },
    Error,
    "EncodingError U+07E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E4");
    },
    Error,
    "EncodingError U+07E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E5");
    },
    Error,
    "EncodingError U+07E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E6");
    },
    Error,
    "EncodingError U+07E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E7");
    },
    Error,
    "EncodingError U+07E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E8");
    },
    Error,
    "EncodingError U+07E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E9");
    },
    Error,
    "EncodingError U+07E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07EA");
    },
    Error,
    "EncodingError U+07EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07EB");
    },
    Error,
    "EncodingError U+07EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07EC");
    },
    Error,
    "EncodingError U+07EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07ED");
    },
    Error,
    "EncodingError U+07ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07EE");
    },
    Error,
    "EncodingError U+07EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07EF");
    },
    Error,
    "EncodingError U+07EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F0");
    },
    Error,
    "EncodingError U+07F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F1");
    },
    Error,
    "EncodingError U+07F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F2");
    },
    Error,
    "EncodingError U+07F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F3");
    },
    Error,
    "EncodingError U+07F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F4");
    },
    Error,
    "EncodingError U+07F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F5");
    },
    Error,
    "EncodingError U+07F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F6");
    },
    Error,
    "EncodingError U+07F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F7");
    },
    Error,
    "EncodingError U+07F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F8");
    },
    Error,
    "EncodingError U+07F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F9");
    },
    Error,
    "EncodingError U+07F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07FA");
    },
    Error,
    "EncodingError U+07FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07FB");
    },
    Error,
    "EncodingError U+07FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07FC");
    },
    Error,
    "EncodingError U+07FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07FD");
    },
    Error,
    "EncodingError U+07FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07FE");
    },
    Error,
    "EncodingError U+07FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07FF");
    },
    Error,
    "EncodingError U+07FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0800");
    },
    Error,
    "EncodingError U+0800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0801");
    },
    Error,
    "EncodingError U+0801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0802");
    },
    Error,
    "EncodingError U+0802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0803");
    },
    Error,
    "EncodingError U+0803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0804");
    },
    Error,
    "EncodingError U+0804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0805");
    },
    Error,
    "EncodingError U+0805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0806");
    },
    Error,
    "EncodingError U+0806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0807");
    },
    Error,
    "EncodingError U+0807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0808");
    },
    Error,
    "EncodingError U+0808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0809");
    },
    Error,
    "EncodingError U+0809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u080A");
    },
    Error,
    "EncodingError U+080A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u080B");
    },
    Error,
    "EncodingError U+080B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u080C");
    },
    Error,
    "EncodingError U+080C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u080D");
    },
    Error,
    "EncodingError U+080D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u080E");
    },
    Error,
    "EncodingError U+080E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u080F");
    },
    Error,
    "EncodingError U+080F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0810");
    },
    Error,
    "EncodingError U+0810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0811");
    },
    Error,
    "EncodingError U+0811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0812");
    },
    Error,
    "EncodingError U+0812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0813");
    },
    Error,
    "EncodingError U+0813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0814");
    },
    Error,
    "EncodingError U+0814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0815");
    },
    Error,
    "EncodingError U+0815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0816");
    },
    Error,
    "EncodingError U+0816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0817");
    },
    Error,
    "EncodingError U+0817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0818");
    },
    Error,
    "EncodingError U+0818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0819");
    },
    Error,
    "EncodingError U+0819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u081A");
    },
    Error,
    "EncodingError U+081A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u081B");
    },
    Error,
    "EncodingError U+081B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u081C");
    },
    Error,
    "EncodingError U+081C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u081D");
    },
    Error,
    "EncodingError U+081D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u081E");
    },
    Error,
    "EncodingError U+081E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u081F");
    },
    Error,
    "EncodingError U+081F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0820");
    },
    Error,
    "EncodingError U+0820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0821");
    },
    Error,
    "EncodingError U+0821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0822");
    },
    Error,
    "EncodingError U+0822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0823");
    },
    Error,
    "EncodingError U+0823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0824");
    },
    Error,
    "EncodingError U+0824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0825");
    },
    Error,
    "EncodingError U+0825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0826");
    },
    Error,
    "EncodingError U+0826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0827");
    },
    Error,
    "EncodingError U+0827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0828");
    },
    Error,
    "EncodingError U+0828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0829");
    },
    Error,
    "EncodingError U+0829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u082A");
    },
    Error,
    "EncodingError U+082A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u082B");
    },
    Error,
    "EncodingError U+082B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u082C");
    },
    Error,
    "EncodingError U+082C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u082D");
    },
    Error,
    "EncodingError U+082D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u082E");
    },
    Error,
    "EncodingError U+082E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u082F");
    },
    Error,
    "EncodingError U+082F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0830");
    },
    Error,
    "EncodingError U+0830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0831");
    },
    Error,
    "EncodingError U+0831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0832");
    },
    Error,
    "EncodingError U+0832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0833");
    },
    Error,
    "EncodingError U+0833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0834");
    },
    Error,
    "EncodingError U+0834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0835");
    },
    Error,
    "EncodingError U+0835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0836");
    },
    Error,
    "EncodingError U+0836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0837");
    },
    Error,
    "EncodingError U+0837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0838");
    },
    Error,
    "EncodingError U+0838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0839");
    },
    Error,
    "EncodingError U+0839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u083A");
    },
    Error,
    "EncodingError U+083A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u083B");
    },
    Error,
    "EncodingError U+083B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u083C");
    },
    Error,
    "EncodingError U+083C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u083D");
    },
    Error,
    "EncodingError U+083D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u083E");
    },
    Error,
    "EncodingError U+083E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u083F");
    },
    Error,
    "EncodingError U+083F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0840");
    },
    Error,
    "EncodingError U+0840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0841");
    },
    Error,
    "EncodingError U+0841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0842");
    },
    Error,
    "EncodingError U+0842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0843");
    },
    Error,
    "EncodingError U+0843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0844");
    },
    Error,
    "EncodingError U+0844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0845");
    },
    Error,
    "EncodingError U+0845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0846");
    },
    Error,
    "EncodingError U+0846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0847");
    },
    Error,
    "EncodingError U+0847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0848");
    },
    Error,
    "EncodingError U+0848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0849");
    },
    Error,
    "EncodingError U+0849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u084A");
    },
    Error,
    "EncodingError U+084A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u084B");
    },
    Error,
    "EncodingError U+084B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u084C");
    },
    Error,
    "EncodingError U+084C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u084D");
    },
    Error,
    "EncodingError U+084D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u084E");
    },
    Error,
    "EncodingError U+084E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u084F");
    },
    Error,
    "EncodingError U+084F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0850");
    },
    Error,
    "EncodingError U+0850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0851");
    },
    Error,
    "EncodingError U+0851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0852");
    },
    Error,
    "EncodingError U+0852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0853");
    },
    Error,
    "EncodingError U+0853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0854");
    },
    Error,
    "EncodingError U+0854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0855");
    },
    Error,
    "EncodingError U+0855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0856");
    },
    Error,
    "EncodingError U+0856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0857");
    },
    Error,
    "EncodingError U+0857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0858");
    },
    Error,
    "EncodingError U+0858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0859");
    },
    Error,
    "EncodingError U+0859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u085A");
    },
    Error,
    "EncodingError U+085A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u085B");
    },
    Error,
    "EncodingError U+085B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u085C");
    },
    Error,
    "EncodingError U+085C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u085D");
    },
    Error,
    "EncodingError U+085D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u085E");
    },
    Error,
    "EncodingError U+085E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u085F");
    },
    Error,
    "EncodingError U+085F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0860");
    },
    Error,
    "EncodingError U+0860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0861");
    },
    Error,
    "EncodingError U+0861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0862");
    },
    Error,
    "EncodingError U+0862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0863");
    },
    Error,
    "EncodingError U+0863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0864");
    },
    Error,
    "EncodingError U+0864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0865");
    },
    Error,
    "EncodingError U+0865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0866");
    },
    Error,
    "EncodingError U+0866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0867");
    },
    Error,
    "EncodingError U+0867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0868");
    },
    Error,
    "EncodingError U+0868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0869");
    },
    Error,
    "EncodingError U+0869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u086A");
    },
    Error,
    "EncodingError U+086A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u086B");
    },
    Error,
    "EncodingError U+086B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u086C");
    },
    Error,
    "EncodingError U+086C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u086D");
    },
    Error,
    "EncodingError U+086D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u086E");
    },
    Error,
    "EncodingError U+086E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u086F");
    },
    Error,
    "EncodingError U+086F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0870");
    },
    Error,
    "EncodingError U+0870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0871");
    },
    Error,
    "EncodingError U+0871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0872");
    },
    Error,
    "EncodingError U+0872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0873");
    },
    Error,
    "EncodingError U+0873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0874");
    },
    Error,
    "EncodingError U+0874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0875");
    },
    Error,
    "EncodingError U+0875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0876");
    },
    Error,
    "EncodingError U+0876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0877");
    },
    Error,
    "EncodingError U+0877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0878");
    },
    Error,
    "EncodingError U+0878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0879");
    },
    Error,
    "EncodingError U+0879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u087A");
    },
    Error,
    "EncodingError U+087A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u087B");
    },
    Error,
    "EncodingError U+087B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u087C");
    },
    Error,
    "EncodingError U+087C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u087D");
    },
    Error,
    "EncodingError U+087D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u087E");
    },
    Error,
    "EncodingError U+087E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u087F");
    },
    Error,
    "EncodingError U+087F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0880");
    },
    Error,
    "EncodingError U+0880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0881");
    },
    Error,
    "EncodingError U+0881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0882");
    },
    Error,
    "EncodingError U+0882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0883");
    },
    Error,
    "EncodingError U+0883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0884");
    },
    Error,
    "EncodingError U+0884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0885");
    },
    Error,
    "EncodingError U+0885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0886");
    },
    Error,
    "EncodingError U+0886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0887");
    },
    Error,
    "EncodingError U+0887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0888");
    },
    Error,
    "EncodingError U+0888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0889");
    },
    Error,
    "EncodingError U+0889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u088A");
    },
    Error,
    "EncodingError U+088A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u088B");
    },
    Error,
    "EncodingError U+088B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u088C");
    },
    Error,
    "EncodingError U+088C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u088D");
    },
    Error,
    "EncodingError U+088D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u088E");
    },
    Error,
    "EncodingError U+088E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u088F");
    },
    Error,
    "EncodingError U+088F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0890");
    },
    Error,
    "EncodingError U+0890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0891");
    },
    Error,
    "EncodingError U+0891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0892");
    },
    Error,
    "EncodingError U+0892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0893");
    },
    Error,
    "EncodingError U+0893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0894");
    },
    Error,
    "EncodingError U+0894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0895");
    },
    Error,
    "EncodingError U+0895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0896");
    },
    Error,
    "EncodingError U+0896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0897");
    },
    Error,
    "EncodingError U+0897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0898");
    },
    Error,
    "EncodingError U+0898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0899");
    },
    Error,
    "EncodingError U+0899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u089A");
    },
    Error,
    "EncodingError U+089A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u089B");
    },
    Error,
    "EncodingError U+089B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u089C");
    },
    Error,
    "EncodingError U+089C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u089D");
    },
    Error,
    "EncodingError U+089D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u089E");
    },
    Error,
    "EncodingError U+089E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u089F");
    },
    Error,
    "EncodingError U+089F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A0");
    },
    Error,
    "EncodingError U+08A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A1");
    },
    Error,
    "EncodingError U+08A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A2");
    },
    Error,
    "EncodingError U+08A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A3");
    },
    Error,
    "EncodingError U+08A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A4");
    },
    Error,
    "EncodingError U+08A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A5");
    },
    Error,
    "EncodingError U+08A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A6");
    },
    Error,
    "EncodingError U+08A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A7");
    },
    Error,
    "EncodingError U+08A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A8");
    },
    Error,
    "EncodingError U+08A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A9");
    },
    Error,
    "EncodingError U+08A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08AA");
    },
    Error,
    "EncodingError U+08AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08AB");
    },
    Error,
    "EncodingError U+08AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08AC");
    },
    Error,
    "EncodingError U+08AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08AD");
    },
    Error,
    "EncodingError U+08AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08AE");
    },
    Error,
    "EncodingError U+08AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08AF");
    },
    Error,
    "EncodingError U+08AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B0");
    },
    Error,
    "EncodingError U+08B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B1");
    },
    Error,
    "EncodingError U+08B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B2");
    },
    Error,
    "EncodingError U+08B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B3");
    },
    Error,
    "EncodingError U+08B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B4");
    },
    Error,
    "EncodingError U+08B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B5");
    },
    Error,
    "EncodingError U+08B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B6");
    },
    Error,
    "EncodingError U+08B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B7");
    },
    Error,
    "EncodingError U+08B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B8");
    },
    Error,
    "EncodingError U+08B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B9");
    },
    Error,
    "EncodingError U+08B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08BA");
    },
    Error,
    "EncodingError U+08BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08BB");
    },
    Error,
    "EncodingError U+08BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08BC");
    },
    Error,
    "EncodingError U+08BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08BD");
    },
    Error,
    "EncodingError U+08BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08BE");
    },
    Error,
    "EncodingError U+08BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08BF");
    },
    Error,
    "EncodingError U+08BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C0");
    },
    Error,
    "EncodingError U+08C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C1");
    },
    Error,
    "EncodingError U+08C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C2");
    },
    Error,
    "EncodingError U+08C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C3");
    },
    Error,
    "EncodingError U+08C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C4");
    },
    Error,
    "EncodingError U+08C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C5");
    },
    Error,
    "EncodingError U+08C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C6");
    },
    Error,
    "EncodingError U+08C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C7");
    },
    Error,
    "EncodingError U+08C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C8");
    },
    Error,
    "EncodingError U+08C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C9");
    },
    Error,
    "EncodingError U+08C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08CA");
    },
    Error,
    "EncodingError U+08CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08CB");
    },
    Error,
    "EncodingError U+08CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08CC");
    },
    Error,
    "EncodingError U+08CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08CD");
    },
    Error,
    "EncodingError U+08CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08CE");
    },
    Error,
    "EncodingError U+08CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08CF");
    },
    Error,
    "EncodingError U+08CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D0");
    },
    Error,
    "EncodingError U+08D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D1");
    },
    Error,
    "EncodingError U+08D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D2");
    },
    Error,
    "EncodingError U+08D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D3");
    },
    Error,
    "EncodingError U+08D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D4");
    },
    Error,
    "EncodingError U+08D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D5");
    },
    Error,
    "EncodingError U+08D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D6");
    },
    Error,
    "EncodingError U+08D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D7");
    },
    Error,
    "EncodingError U+08D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D8");
    },
    Error,
    "EncodingError U+08D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D9");
    },
    Error,
    "EncodingError U+08D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08DA");
    },
    Error,
    "EncodingError U+08DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08DB");
    },
    Error,
    "EncodingError U+08DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08DC");
    },
    Error,
    "EncodingError U+08DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08DD");
    },
    Error,
    "EncodingError U+08DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08DE");
    },
    Error,
    "EncodingError U+08DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08DF");
    },
    Error,
    "EncodingError U+08DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E0");
    },
    Error,
    "EncodingError U+08E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E1");
    },
    Error,
    "EncodingError U+08E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E2");
    },
    Error,
    "EncodingError U+08E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E3");
    },
    Error,
    "EncodingError U+08E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E4");
    },
    Error,
    "EncodingError U+08E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E5");
    },
    Error,
    "EncodingError U+08E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E6");
    },
    Error,
    "EncodingError U+08E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E7");
    },
    Error,
    "EncodingError U+08E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E8");
    },
    Error,
    "EncodingError U+08E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E9");
    },
    Error,
    "EncodingError U+08E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08EA");
    },
    Error,
    "EncodingError U+08EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08EB");
    },
    Error,
    "EncodingError U+08EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08EC");
    },
    Error,
    "EncodingError U+08EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08ED");
    },
    Error,
    "EncodingError U+08ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08EE");
    },
    Error,
    "EncodingError U+08EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08EF");
    },
    Error,
    "EncodingError U+08EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F0");
    },
    Error,
    "EncodingError U+08F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F1");
    },
    Error,
    "EncodingError U+08F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F2");
    },
    Error,
    "EncodingError U+08F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F3");
    },
    Error,
    "EncodingError U+08F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F4");
    },
    Error,
    "EncodingError U+08F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F5");
    },
    Error,
    "EncodingError U+08F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F6");
    },
    Error,
    "EncodingError U+08F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F7");
    },
    Error,
    "EncodingError U+08F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F8");
    },
    Error,
    "EncodingError U+08F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F9");
    },
    Error,
    "EncodingError U+08F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08FA");
    },
    Error,
    "EncodingError U+08FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08FB");
    },
    Error,
    "EncodingError U+08FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08FC");
    },
    Error,
    "EncodingError U+08FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08FD");
    },
    Error,
    "EncodingError U+08FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08FE");
    },
    Error,
    "EncodingError U+08FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08FF");
    },
    Error,
    "EncodingError U+08FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0900");
    },
    Error,
    "EncodingError U+0900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0901");
    },
    Error,
    "EncodingError U+0901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0902");
    },
    Error,
    "EncodingError U+0902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0903");
    },
    Error,
    "EncodingError U+0903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0904");
    },
    Error,
    "EncodingError U+0904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0905");
    },
    Error,
    "EncodingError U+0905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0906");
    },
    Error,
    "EncodingError U+0906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0907");
    },
    Error,
    "EncodingError U+0907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0908");
    },
    Error,
    "EncodingError U+0908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0909");
    },
    Error,
    "EncodingError U+0909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u090A");
    },
    Error,
    "EncodingError U+090A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u090B");
    },
    Error,
    "EncodingError U+090B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u090C");
    },
    Error,
    "EncodingError U+090C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u090D");
    },
    Error,
    "EncodingError U+090D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u090E");
    },
    Error,
    "EncodingError U+090E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u090F");
    },
    Error,
    "EncodingError U+090F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0910");
    },
    Error,
    "EncodingError U+0910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0911");
    },
    Error,
    "EncodingError U+0911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0912");
    },
    Error,
    "EncodingError U+0912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0913");
    },
    Error,
    "EncodingError U+0913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0914");
    },
    Error,
    "EncodingError U+0914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0915");
    },
    Error,
    "EncodingError U+0915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0916");
    },
    Error,
    "EncodingError U+0916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0917");
    },
    Error,
    "EncodingError U+0917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0918");
    },
    Error,
    "EncodingError U+0918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0919");
    },
    Error,
    "EncodingError U+0919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u091A");
    },
    Error,
    "EncodingError U+091A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u091B");
    },
    Error,
    "EncodingError U+091B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u091C");
    },
    Error,
    "EncodingError U+091C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u091D");
    },
    Error,
    "EncodingError U+091D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u091E");
    },
    Error,
    "EncodingError U+091E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u091F");
    },
    Error,
    "EncodingError U+091F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0920");
    },
    Error,
    "EncodingError U+0920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0921");
    },
    Error,
    "EncodingError U+0921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0922");
    },
    Error,
    "EncodingError U+0922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0923");
    },
    Error,
    "EncodingError U+0923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0924");
    },
    Error,
    "EncodingError U+0924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0925");
    },
    Error,
    "EncodingError U+0925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0926");
    },
    Error,
    "EncodingError U+0926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0927");
    },
    Error,
    "EncodingError U+0927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0928");
    },
    Error,
    "EncodingError U+0928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0929");
    },
    Error,
    "EncodingError U+0929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u092A");
    },
    Error,
    "EncodingError U+092A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u092B");
    },
    Error,
    "EncodingError U+092B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u092C");
    },
    Error,
    "EncodingError U+092C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u092D");
    },
    Error,
    "EncodingError U+092D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u092E");
    },
    Error,
    "EncodingError U+092E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u092F");
    },
    Error,
    "EncodingError U+092F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0930");
    },
    Error,
    "EncodingError U+0930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0931");
    },
    Error,
    "EncodingError U+0931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0932");
    },
    Error,
    "EncodingError U+0932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0933");
    },
    Error,
    "EncodingError U+0933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0934");
    },
    Error,
    "EncodingError U+0934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0935");
    },
    Error,
    "EncodingError U+0935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0936");
    },
    Error,
    "EncodingError U+0936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0937");
    },
    Error,
    "EncodingError U+0937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0938");
    },
    Error,
    "EncodingError U+0938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0939");
    },
    Error,
    "EncodingError U+0939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u093A");
    },
    Error,
    "EncodingError U+093A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u093B");
    },
    Error,
    "EncodingError U+093B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u093C");
    },
    Error,
    "EncodingError U+093C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u093D");
    },
    Error,
    "EncodingError U+093D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u093E");
    },
    Error,
    "EncodingError U+093E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u093F");
    },
    Error,
    "EncodingError U+093F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0940");
    },
    Error,
    "EncodingError U+0940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0941");
    },
    Error,
    "EncodingError U+0941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0942");
    },
    Error,
    "EncodingError U+0942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0943");
    },
    Error,
    "EncodingError U+0943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0944");
    },
    Error,
    "EncodingError U+0944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0945");
    },
    Error,
    "EncodingError U+0945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0946");
    },
    Error,
    "EncodingError U+0946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0947");
    },
    Error,
    "EncodingError U+0947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0948");
    },
    Error,
    "EncodingError U+0948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0949");
    },
    Error,
    "EncodingError U+0949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u094A");
    },
    Error,
    "EncodingError U+094A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u094B");
    },
    Error,
    "EncodingError U+094B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u094C");
    },
    Error,
    "EncodingError U+094C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u094D");
    },
    Error,
    "EncodingError U+094D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u094E");
    },
    Error,
    "EncodingError U+094E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u094F");
    },
    Error,
    "EncodingError U+094F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0950");
    },
    Error,
    "EncodingError U+0950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0951");
    },
    Error,
    "EncodingError U+0951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0952");
    },
    Error,
    "EncodingError U+0952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0953");
    },
    Error,
    "EncodingError U+0953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0954");
    },
    Error,
    "EncodingError U+0954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0955");
    },
    Error,
    "EncodingError U+0955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0956");
    },
    Error,
    "EncodingError U+0956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0957");
    },
    Error,
    "EncodingError U+0957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0958");
    },
    Error,
    "EncodingError U+0958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0959");
    },
    Error,
    "EncodingError U+0959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u095A");
    },
    Error,
    "EncodingError U+095A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u095B");
    },
    Error,
    "EncodingError U+095B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u095C");
    },
    Error,
    "EncodingError U+095C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u095D");
    },
    Error,
    "EncodingError U+095D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u095E");
    },
    Error,
    "EncodingError U+095E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u095F");
    },
    Error,
    "EncodingError U+095F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0960");
    },
    Error,
    "EncodingError U+0960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0961");
    },
    Error,
    "EncodingError U+0961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0962");
    },
    Error,
    "EncodingError U+0962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0963");
    },
    Error,
    "EncodingError U+0963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0964");
    },
    Error,
    "EncodingError U+0964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0965");
    },
    Error,
    "EncodingError U+0965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0966");
    },
    Error,
    "EncodingError U+0966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0967");
    },
    Error,
    "EncodingError U+0967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0968");
    },
    Error,
    "EncodingError U+0968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0969");
    },
    Error,
    "EncodingError U+0969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u096A");
    },
    Error,
    "EncodingError U+096A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u096B");
    },
    Error,
    "EncodingError U+096B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u096C");
    },
    Error,
    "EncodingError U+096C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u096D");
    },
    Error,
    "EncodingError U+096D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u096E");
    },
    Error,
    "EncodingError U+096E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u096F");
    },
    Error,
    "EncodingError U+096F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0970");
    },
    Error,
    "EncodingError U+0970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0971");
    },
    Error,
    "EncodingError U+0971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0972");
    },
    Error,
    "EncodingError U+0972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0973");
    },
    Error,
    "EncodingError U+0973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0974");
    },
    Error,
    "EncodingError U+0974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0975");
    },
    Error,
    "EncodingError U+0975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0976");
    },
    Error,
    "EncodingError U+0976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0977");
    },
    Error,
    "EncodingError U+0977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0978");
    },
    Error,
    "EncodingError U+0978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0979");
    },
    Error,
    "EncodingError U+0979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u097A");
    },
    Error,
    "EncodingError U+097A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u097B");
    },
    Error,
    "EncodingError U+097B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u097C");
    },
    Error,
    "EncodingError U+097C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u097D");
    },
    Error,
    "EncodingError U+097D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u097E");
    },
    Error,
    "EncodingError U+097E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u097F");
    },
    Error,
    "EncodingError U+097F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0980");
    },
    Error,
    "EncodingError U+0980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0981");
    },
    Error,
    "EncodingError U+0981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0982");
    },
    Error,
    "EncodingError U+0982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0983");
    },
    Error,
    "EncodingError U+0983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0984");
    },
    Error,
    "EncodingError U+0984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0985");
    },
    Error,
    "EncodingError U+0985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0986");
    },
    Error,
    "EncodingError U+0986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0987");
    },
    Error,
    "EncodingError U+0987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0988");
    },
    Error,
    "EncodingError U+0988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0989");
    },
    Error,
    "EncodingError U+0989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u098A");
    },
    Error,
    "EncodingError U+098A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u098B");
    },
    Error,
    "EncodingError U+098B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u098C");
    },
    Error,
    "EncodingError U+098C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u098D");
    },
    Error,
    "EncodingError U+098D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u098E");
    },
    Error,
    "EncodingError U+098E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u098F");
    },
    Error,
    "EncodingError U+098F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0990");
    },
    Error,
    "EncodingError U+0990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0991");
    },
    Error,
    "EncodingError U+0991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0992");
    },
    Error,
    "EncodingError U+0992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0993");
    },
    Error,
    "EncodingError U+0993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0994");
    },
    Error,
    "EncodingError U+0994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0995");
    },
    Error,
    "EncodingError U+0995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0996");
    },
    Error,
    "EncodingError U+0996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0997");
    },
    Error,
    "EncodingError U+0997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0998");
    },
    Error,
    "EncodingError U+0998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0999");
    },
    Error,
    "EncodingError U+0999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u099A");
    },
    Error,
    "EncodingError U+099A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u099B");
    },
    Error,
    "EncodingError U+099B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u099C");
    },
    Error,
    "EncodingError U+099C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u099D");
    },
    Error,
    "EncodingError U+099D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u099E");
    },
    Error,
    "EncodingError U+099E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u099F");
    },
    Error,
    "EncodingError U+099F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A0");
    },
    Error,
    "EncodingError U+09A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A1");
    },
    Error,
    "EncodingError U+09A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A2");
    },
    Error,
    "EncodingError U+09A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A3");
    },
    Error,
    "EncodingError U+09A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A4");
    },
    Error,
    "EncodingError U+09A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A5");
    },
    Error,
    "EncodingError U+09A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A6");
    },
    Error,
    "EncodingError U+09A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A7");
    },
    Error,
    "EncodingError U+09A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A8");
    },
    Error,
    "EncodingError U+09A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A9");
    },
    Error,
    "EncodingError U+09A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09AA");
    },
    Error,
    "EncodingError U+09AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09AB");
    },
    Error,
    "EncodingError U+09AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09AC");
    },
    Error,
    "EncodingError U+09AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09AD");
    },
    Error,
    "EncodingError U+09AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09AE");
    },
    Error,
    "EncodingError U+09AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09AF");
    },
    Error,
    "EncodingError U+09AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B0");
    },
    Error,
    "EncodingError U+09B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B1");
    },
    Error,
    "EncodingError U+09B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B2");
    },
    Error,
    "EncodingError U+09B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B3");
    },
    Error,
    "EncodingError U+09B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B4");
    },
    Error,
    "EncodingError U+09B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B5");
    },
    Error,
    "EncodingError U+09B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B6");
    },
    Error,
    "EncodingError U+09B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B7");
    },
    Error,
    "EncodingError U+09B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B8");
    },
    Error,
    "EncodingError U+09B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B9");
    },
    Error,
    "EncodingError U+09B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09BA");
    },
    Error,
    "EncodingError U+09BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09BB");
    },
    Error,
    "EncodingError U+09BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09BC");
    },
    Error,
    "EncodingError U+09BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09BD");
    },
    Error,
    "EncodingError U+09BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09BE");
    },
    Error,
    "EncodingError U+09BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09BF");
    },
    Error,
    "EncodingError U+09BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C0");
    },
    Error,
    "EncodingError U+09C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C1");
    },
    Error,
    "EncodingError U+09C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C2");
    },
    Error,
    "EncodingError U+09C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C3");
    },
    Error,
    "EncodingError U+09C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C4");
    },
    Error,
    "EncodingError U+09C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C5");
    },
    Error,
    "EncodingError U+09C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C6");
    },
    Error,
    "EncodingError U+09C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C7");
    },
    Error,
    "EncodingError U+09C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C8");
    },
    Error,
    "EncodingError U+09C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C9");
    },
    Error,
    "EncodingError U+09C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09CA");
    },
    Error,
    "EncodingError U+09CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09CB");
    },
    Error,
    "EncodingError U+09CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09CC");
    },
    Error,
    "EncodingError U+09CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09CD");
    },
    Error,
    "EncodingError U+09CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09CE");
    },
    Error,
    "EncodingError U+09CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09CF");
    },
    Error,
    "EncodingError U+09CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D0");
    },
    Error,
    "EncodingError U+09D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D1");
    },
    Error,
    "EncodingError U+09D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D2");
    },
    Error,
    "EncodingError U+09D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D3");
    },
    Error,
    "EncodingError U+09D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D4");
    },
    Error,
    "EncodingError U+09D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D5");
    },
    Error,
    "EncodingError U+09D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D6");
    },
    Error,
    "EncodingError U+09D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D7");
    },
    Error,
    "EncodingError U+09D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D8");
    },
    Error,
    "EncodingError U+09D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D9");
    },
    Error,
    "EncodingError U+09D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09DA");
    },
    Error,
    "EncodingError U+09DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09DB");
    },
    Error,
    "EncodingError U+09DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09DC");
    },
    Error,
    "EncodingError U+09DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09DD");
    },
    Error,
    "EncodingError U+09DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09DE");
    },
    Error,
    "EncodingError U+09DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09DF");
    },
    Error,
    "EncodingError U+09DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E0");
    },
    Error,
    "EncodingError U+09E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E1");
    },
    Error,
    "EncodingError U+09E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E2");
    },
    Error,
    "EncodingError U+09E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E3");
    },
    Error,
    "EncodingError U+09E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E4");
    },
    Error,
    "EncodingError U+09E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E5");
    },
    Error,
    "EncodingError U+09E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E6");
    },
    Error,
    "EncodingError U+09E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E7");
    },
    Error,
    "EncodingError U+09E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E8");
    },
    Error,
    "EncodingError U+09E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E9");
    },
    Error,
    "EncodingError U+09E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09EA");
    },
    Error,
    "EncodingError U+09EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09EB");
    },
    Error,
    "EncodingError U+09EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09EC");
    },
    Error,
    "EncodingError U+09EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09ED");
    },
    Error,
    "EncodingError U+09ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09EE");
    },
    Error,
    "EncodingError U+09EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09EF");
    },
    Error,
    "EncodingError U+09EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F0");
    },
    Error,
    "EncodingError U+09F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F1");
    },
    Error,
    "EncodingError U+09F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F2");
    },
    Error,
    "EncodingError U+09F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F3");
    },
    Error,
    "EncodingError U+09F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F4");
    },
    Error,
    "EncodingError U+09F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F5");
    },
    Error,
    "EncodingError U+09F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F6");
    },
    Error,
    "EncodingError U+09F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F7");
    },
    Error,
    "EncodingError U+09F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F8");
    },
    Error,
    "EncodingError U+09F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F9");
    },
    Error,
    "EncodingError U+09F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09FA");
    },
    Error,
    "EncodingError U+09FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09FB");
    },
    Error,
    "EncodingError U+09FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09FC");
    },
    Error,
    "EncodingError U+09FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09FD");
    },
    Error,
    "EncodingError U+09FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09FE");
    },
    Error,
    "EncodingError U+09FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09FF");
    },
    Error,
    "EncodingError U+09FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A00");
    },
    Error,
    "EncodingError U+0A00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A01");
    },
    Error,
    "EncodingError U+0A01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A02");
    },
    Error,
    "EncodingError U+0A02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A03");
    },
    Error,
    "EncodingError U+0A03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A04");
    },
    Error,
    "EncodingError U+0A04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A05");
    },
    Error,
    "EncodingError U+0A05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A06");
    },
    Error,
    "EncodingError U+0A06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A07");
    },
    Error,
    "EncodingError U+0A07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A08");
    },
    Error,
    "EncodingError U+0A08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A09");
    },
    Error,
    "EncodingError U+0A09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A0A");
    },
    Error,
    "EncodingError U+0A0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A0B");
    },
    Error,
    "EncodingError U+0A0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A0C");
    },
    Error,
    "EncodingError U+0A0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A0D");
    },
    Error,
    "EncodingError U+0A0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A0E");
    },
    Error,
    "EncodingError U+0A0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A0F");
    },
    Error,
    "EncodingError U+0A0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A10");
    },
    Error,
    "EncodingError U+0A10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A11");
    },
    Error,
    "EncodingError U+0A11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A12");
    },
    Error,
    "EncodingError U+0A12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A13");
    },
    Error,
    "EncodingError U+0A13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A14");
    },
    Error,
    "EncodingError U+0A14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A15");
    },
    Error,
    "EncodingError U+0A15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A16");
    },
    Error,
    "EncodingError U+0A16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A17");
    },
    Error,
    "EncodingError U+0A17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A18");
    },
    Error,
    "EncodingError U+0A18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A19");
    },
    Error,
    "EncodingError U+0A19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A1A");
    },
    Error,
    "EncodingError U+0A1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A1B");
    },
    Error,
    "EncodingError U+0A1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A1C");
    },
    Error,
    "EncodingError U+0A1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A1D");
    },
    Error,
    "EncodingError U+0A1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A1E");
    },
    Error,
    "EncodingError U+0A1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A1F");
    },
    Error,
    "EncodingError U+0A1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A20");
    },
    Error,
    "EncodingError U+0A20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A21");
    },
    Error,
    "EncodingError U+0A21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A22");
    },
    Error,
    "EncodingError U+0A22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A23");
    },
    Error,
    "EncodingError U+0A23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A24");
    },
    Error,
    "EncodingError U+0A24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A25");
    },
    Error,
    "EncodingError U+0A25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A26");
    },
    Error,
    "EncodingError U+0A26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A27");
    },
    Error,
    "EncodingError U+0A27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A28");
    },
    Error,
    "EncodingError U+0A28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A29");
    },
    Error,
    "EncodingError U+0A29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A2A");
    },
    Error,
    "EncodingError U+0A2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A2B");
    },
    Error,
    "EncodingError U+0A2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A2C");
    },
    Error,
    "EncodingError U+0A2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A2D");
    },
    Error,
    "EncodingError U+0A2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A2E");
    },
    Error,
    "EncodingError U+0A2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A2F");
    },
    Error,
    "EncodingError U+0A2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A30");
    },
    Error,
    "EncodingError U+0A30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A31");
    },
    Error,
    "EncodingError U+0A31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A32");
    },
    Error,
    "EncodingError U+0A32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A33");
    },
    Error,
    "EncodingError U+0A33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A34");
    },
    Error,
    "EncodingError U+0A34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A35");
    },
    Error,
    "EncodingError U+0A35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A36");
    },
    Error,
    "EncodingError U+0A36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A37");
    },
    Error,
    "EncodingError U+0A37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A38");
    },
    Error,
    "EncodingError U+0A38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A39");
    },
    Error,
    "EncodingError U+0A39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A3A");
    },
    Error,
    "EncodingError U+0A3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A3B");
    },
    Error,
    "EncodingError U+0A3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A3C");
    },
    Error,
    "EncodingError U+0A3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A3D");
    },
    Error,
    "EncodingError U+0A3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A3E");
    },
    Error,
    "EncodingError U+0A3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A3F");
    },
    Error,
    "EncodingError U+0A3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A40");
    },
    Error,
    "EncodingError U+0A40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A41");
    },
    Error,
    "EncodingError U+0A41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A42");
    },
    Error,
    "EncodingError U+0A42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A43");
    },
    Error,
    "EncodingError U+0A43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A44");
    },
    Error,
    "EncodingError U+0A44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A45");
    },
    Error,
    "EncodingError U+0A45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A46");
    },
    Error,
    "EncodingError U+0A46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A47");
    },
    Error,
    "EncodingError U+0A47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A48");
    },
    Error,
    "EncodingError U+0A48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A49");
    },
    Error,
    "EncodingError U+0A49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A4A");
    },
    Error,
    "EncodingError U+0A4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A4B");
    },
    Error,
    "EncodingError U+0A4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A4C");
    },
    Error,
    "EncodingError U+0A4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A4D");
    },
    Error,
    "EncodingError U+0A4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A4E");
    },
    Error,
    "EncodingError U+0A4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A4F");
    },
    Error,
    "EncodingError U+0A4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A50");
    },
    Error,
    "EncodingError U+0A50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A51");
    },
    Error,
    "EncodingError U+0A51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A52");
    },
    Error,
    "EncodingError U+0A52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A53");
    },
    Error,
    "EncodingError U+0A53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A54");
    },
    Error,
    "EncodingError U+0A54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A55");
    },
    Error,
    "EncodingError U+0A55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A56");
    },
    Error,
    "EncodingError U+0A56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A57");
    },
    Error,
    "EncodingError U+0A57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A58");
    },
    Error,
    "EncodingError U+0A58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A59");
    },
    Error,
    "EncodingError U+0A59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A5A");
    },
    Error,
    "EncodingError U+0A5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A5B");
    },
    Error,
    "EncodingError U+0A5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A5C");
    },
    Error,
    "EncodingError U+0A5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A5D");
    },
    Error,
    "EncodingError U+0A5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A5E");
    },
    Error,
    "EncodingError U+0A5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A5F");
    },
    Error,
    "EncodingError U+0A5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A60");
    },
    Error,
    "EncodingError U+0A60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A61");
    },
    Error,
    "EncodingError U+0A61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A62");
    },
    Error,
    "EncodingError U+0A62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A63");
    },
    Error,
    "EncodingError U+0A63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A64");
    },
    Error,
    "EncodingError U+0A64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A65");
    },
    Error,
    "EncodingError U+0A65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A66");
    },
    Error,
    "EncodingError U+0A66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A67");
    },
    Error,
    "EncodingError U+0A67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A68");
    },
    Error,
    "EncodingError U+0A68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A69");
    },
    Error,
    "EncodingError U+0A69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A6A");
    },
    Error,
    "EncodingError U+0A6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A6B");
    },
    Error,
    "EncodingError U+0A6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A6C");
    },
    Error,
    "EncodingError U+0A6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A6D");
    },
    Error,
    "EncodingError U+0A6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A6E");
    },
    Error,
    "EncodingError U+0A6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A6F");
    },
    Error,
    "EncodingError U+0A6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A70");
    },
    Error,
    "EncodingError U+0A70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A71");
    },
    Error,
    "EncodingError U+0A71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A72");
    },
    Error,
    "EncodingError U+0A72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A73");
    },
    Error,
    "EncodingError U+0A73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A74");
    },
    Error,
    "EncodingError U+0A74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A75");
    },
    Error,
    "EncodingError U+0A75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A76");
    },
    Error,
    "EncodingError U+0A76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A77");
    },
    Error,
    "EncodingError U+0A77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A78");
    },
    Error,
    "EncodingError U+0A78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A79");
    },
    Error,
    "EncodingError U+0A79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A7A");
    },
    Error,
    "EncodingError U+0A7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A7B");
    },
    Error,
    "EncodingError U+0A7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A7C");
    },
    Error,
    "EncodingError U+0A7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A7D");
    },
    Error,
    "EncodingError U+0A7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A7E");
    },
    Error,
    "EncodingError U+0A7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A7F");
    },
    Error,
    "EncodingError U+0A7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A80");
    },
    Error,
    "EncodingError U+0A80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A81");
    },
    Error,
    "EncodingError U+0A81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A82");
    },
    Error,
    "EncodingError U+0A82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A83");
    },
    Error,
    "EncodingError U+0A83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A84");
    },
    Error,
    "EncodingError U+0A84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A85");
    },
    Error,
    "EncodingError U+0A85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A86");
    },
    Error,
    "EncodingError U+0A86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A87");
    },
    Error,
    "EncodingError U+0A87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A88");
    },
    Error,
    "EncodingError U+0A88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A89");
    },
    Error,
    "EncodingError U+0A89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A8A");
    },
    Error,
    "EncodingError U+0A8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A8B");
    },
    Error,
    "EncodingError U+0A8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A8C");
    },
    Error,
    "EncodingError U+0A8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A8D");
    },
    Error,
    "EncodingError U+0A8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A8E");
    },
    Error,
    "EncodingError U+0A8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A8F");
    },
    Error,
    "EncodingError U+0A8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A90");
    },
    Error,
    "EncodingError U+0A90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A91");
    },
    Error,
    "EncodingError U+0A91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A92");
    },
    Error,
    "EncodingError U+0A92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A93");
    },
    Error,
    "EncodingError U+0A93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A94");
    },
    Error,
    "EncodingError U+0A94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A95");
    },
    Error,
    "EncodingError U+0A95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A96");
    },
    Error,
    "EncodingError U+0A96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A97");
    },
    Error,
    "EncodingError U+0A97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A98");
    },
    Error,
    "EncodingError U+0A98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A99");
    },
    Error,
    "EncodingError U+0A99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A9A");
    },
    Error,
    "EncodingError U+0A9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A9B");
    },
    Error,
    "EncodingError U+0A9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A9C");
    },
    Error,
    "EncodingError U+0A9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A9D");
    },
    Error,
    "EncodingError U+0A9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A9E");
    },
    Error,
    "EncodingError U+0A9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A9F");
    },
    Error,
    "EncodingError U+0A9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA0");
    },
    Error,
    "EncodingError U+0AA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA1");
    },
    Error,
    "EncodingError U+0AA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA2");
    },
    Error,
    "EncodingError U+0AA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA3");
    },
    Error,
    "EncodingError U+0AA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA4");
    },
    Error,
    "EncodingError U+0AA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA5");
    },
    Error,
    "EncodingError U+0AA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA6");
    },
    Error,
    "EncodingError U+0AA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA7");
    },
    Error,
    "EncodingError U+0AA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA8");
    },
    Error,
    "EncodingError U+0AA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA9");
    },
    Error,
    "EncodingError U+0AA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AAA");
    },
    Error,
    "EncodingError U+0AAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AAB");
    },
    Error,
    "EncodingError U+0AAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AAC");
    },
    Error,
    "EncodingError U+0AAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AAD");
    },
    Error,
    "EncodingError U+0AAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AAE");
    },
    Error,
    "EncodingError U+0AAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AAF");
    },
    Error,
    "EncodingError U+0AAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB0");
    },
    Error,
    "EncodingError U+0AB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB1");
    },
    Error,
    "EncodingError U+0AB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB2");
    },
    Error,
    "EncodingError U+0AB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB3");
    },
    Error,
    "EncodingError U+0AB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB4");
    },
    Error,
    "EncodingError U+0AB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB5");
    },
    Error,
    "EncodingError U+0AB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB6");
    },
    Error,
    "EncodingError U+0AB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB7");
    },
    Error,
    "EncodingError U+0AB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB8");
    },
    Error,
    "EncodingError U+0AB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB9");
    },
    Error,
    "EncodingError U+0AB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ABA");
    },
    Error,
    "EncodingError U+0ABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ABB");
    },
    Error,
    "EncodingError U+0ABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ABC");
    },
    Error,
    "EncodingError U+0ABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ABD");
    },
    Error,
    "EncodingError U+0ABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ABE");
    },
    Error,
    "EncodingError U+0ABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ABF");
    },
    Error,
    "EncodingError U+0ABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC0");
    },
    Error,
    "EncodingError U+0AC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC1");
    },
    Error,
    "EncodingError U+0AC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC2");
    },
    Error,
    "EncodingError U+0AC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC3");
    },
    Error,
    "EncodingError U+0AC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC4");
    },
    Error,
    "EncodingError U+0AC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC5");
    },
    Error,
    "EncodingError U+0AC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC6");
    },
    Error,
    "EncodingError U+0AC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC7");
    },
    Error,
    "EncodingError U+0AC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC8");
    },
    Error,
    "EncodingError U+0AC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC9");
    },
    Error,
    "EncodingError U+0AC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ACA");
    },
    Error,
    "EncodingError U+0ACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ACB");
    },
    Error,
    "EncodingError U+0ACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ACC");
    },
    Error,
    "EncodingError U+0ACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ACD");
    },
    Error,
    "EncodingError U+0ACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ACE");
    },
    Error,
    "EncodingError U+0ACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ACF");
    },
    Error,
    "EncodingError U+0ACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD0");
    },
    Error,
    "EncodingError U+0AD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD1");
    },
    Error,
    "EncodingError U+0AD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD2");
    },
    Error,
    "EncodingError U+0AD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD3");
    },
    Error,
    "EncodingError U+0AD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD4");
    },
    Error,
    "EncodingError U+0AD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD5");
    },
    Error,
    "EncodingError U+0AD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD6");
    },
    Error,
    "EncodingError U+0AD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD7");
    },
    Error,
    "EncodingError U+0AD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD8");
    },
    Error,
    "EncodingError U+0AD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD9");
    },
    Error,
    "EncodingError U+0AD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ADA");
    },
    Error,
    "EncodingError U+0ADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ADB");
    },
    Error,
    "EncodingError U+0ADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ADC");
    },
    Error,
    "EncodingError U+0ADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ADD");
    },
    Error,
    "EncodingError U+0ADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ADE");
    },
    Error,
    "EncodingError U+0ADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ADF");
    },
    Error,
    "EncodingError U+0ADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE0");
    },
    Error,
    "EncodingError U+0AE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE1");
    },
    Error,
    "EncodingError U+0AE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE2");
    },
    Error,
    "EncodingError U+0AE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE3");
    },
    Error,
    "EncodingError U+0AE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE4");
    },
    Error,
    "EncodingError U+0AE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE5");
    },
    Error,
    "EncodingError U+0AE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE6");
    },
    Error,
    "EncodingError U+0AE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE7");
    },
    Error,
    "EncodingError U+0AE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE8");
    },
    Error,
    "EncodingError U+0AE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE9");
    },
    Error,
    "EncodingError U+0AE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AEA");
    },
    Error,
    "EncodingError U+0AEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AEB");
    },
    Error,
    "EncodingError U+0AEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AEC");
    },
    Error,
    "EncodingError U+0AEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AED");
    },
    Error,
    "EncodingError U+0AED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AEE");
    },
    Error,
    "EncodingError U+0AEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AEF");
    },
    Error,
    "EncodingError U+0AEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF0");
    },
    Error,
    "EncodingError U+0AF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF1");
    },
    Error,
    "EncodingError U+0AF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF2");
    },
    Error,
    "EncodingError U+0AF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF3");
    },
    Error,
    "EncodingError U+0AF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF4");
    },
    Error,
    "EncodingError U+0AF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF5");
    },
    Error,
    "EncodingError U+0AF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF6");
    },
    Error,
    "EncodingError U+0AF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF7");
    },
    Error,
    "EncodingError U+0AF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF8");
    },
    Error,
    "EncodingError U+0AF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF9");
    },
    Error,
    "EncodingError U+0AF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AFA");
    },
    Error,
    "EncodingError U+0AFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AFB");
    },
    Error,
    "EncodingError U+0AFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AFC");
    },
    Error,
    "EncodingError U+0AFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AFD");
    },
    Error,
    "EncodingError U+0AFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AFE");
    },
    Error,
    "EncodingError U+0AFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AFF");
    },
    Error,
    "EncodingError U+0AFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B00");
    },
    Error,
    "EncodingError U+0B00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B01");
    },
    Error,
    "EncodingError U+0B01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B02");
    },
    Error,
    "EncodingError U+0B02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B03");
    },
    Error,
    "EncodingError U+0B03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B04");
    },
    Error,
    "EncodingError U+0B04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B05");
    },
    Error,
    "EncodingError U+0B05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B06");
    },
    Error,
    "EncodingError U+0B06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B07");
    },
    Error,
    "EncodingError U+0B07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B08");
    },
    Error,
    "EncodingError U+0B08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B09");
    },
    Error,
    "EncodingError U+0B09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B0A");
    },
    Error,
    "EncodingError U+0B0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B0B");
    },
    Error,
    "EncodingError U+0B0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B0C");
    },
    Error,
    "EncodingError U+0B0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B0D");
    },
    Error,
    "EncodingError U+0B0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B0E");
    },
    Error,
    "EncodingError U+0B0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B0F");
    },
    Error,
    "EncodingError U+0B0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B10");
    },
    Error,
    "EncodingError U+0B10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B11");
    },
    Error,
    "EncodingError U+0B11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B12");
    },
    Error,
    "EncodingError U+0B12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B13");
    },
    Error,
    "EncodingError U+0B13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B14");
    },
    Error,
    "EncodingError U+0B14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B15");
    },
    Error,
    "EncodingError U+0B15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B16");
    },
    Error,
    "EncodingError U+0B16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B17");
    },
    Error,
    "EncodingError U+0B17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B18");
    },
    Error,
    "EncodingError U+0B18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B19");
    },
    Error,
    "EncodingError U+0B19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B1A");
    },
    Error,
    "EncodingError U+0B1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B1B");
    },
    Error,
    "EncodingError U+0B1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B1C");
    },
    Error,
    "EncodingError U+0B1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B1D");
    },
    Error,
    "EncodingError U+0B1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B1E");
    },
    Error,
    "EncodingError U+0B1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B1F");
    },
    Error,
    "EncodingError U+0B1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B20");
    },
    Error,
    "EncodingError U+0B20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B21");
    },
    Error,
    "EncodingError U+0B21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B22");
    },
    Error,
    "EncodingError U+0B22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B23");
    },
    Error,
    "EncodingError U+0B23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B24");
    },
    Error,
    "EncodingError U+0B24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B25");
    },
    Error,
    "EncodingError U+0B25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B26");
    },
    Error,
    "EncodingError U+0B26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B27");
    },
    Error,
    "EncodingError U+0B27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B28");
    },
    Error,
    "EncodingError U+0B28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B29");
    },
    Error,
    "EncodingError U+0B29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B2A");
    },
    Error,
    "EncodingError U+0B2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B2B");
    },
    Error,
    "EncodingError U+0B2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B2C");
    },
    Error,
    "EncodingError U+0B2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B2D");
    },
    Error,
    "EncodingError U+0B2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B2E");
    },
    Error,
    "EncodingError U+0B2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B2F");
    },
    Error,
    "EncodingError U+0B2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B30");
    },
    Error,
    "EncodingError U+0B30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B31");
    },
    Error,
    "EncodingError U+0B31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B32");
    },
    Error,
    "EncodingError U+0B32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B33");
    },
    Error,
    "EncodingError U+0B33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B34");
    },
    Error,
    "EncodingError U+0B34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B35");
    },
    Error,
    "EncodingError U+0B35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B36");
    },
    Error,
    "EncodingError U+0B36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B37");
    },
    Error,
    "EncodingError U+0B37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B38");
    },
    Error,
    "EncodingError U+0B38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B39");
    },
    Error,
    "EncodingError U+0B39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B3A");
    },
    Error,
    "EncodingError U+0B3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B3B");
    },
    Error,
    "EncodingError U+0B3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B3C");
    },
    Error,
    "EncodingError U+0B3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B3D");
    },
    Error,
    "EncodingError U+0B3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B3E");
    },
    Error,
    "EncodingError U+0B3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B3F");
    },
    Error,
    "EncodingError U+0B3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B40");
    },
    Error,
    "EncodingError U+0B40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B41");
    },
    Error,
    "EncodingError U+0B41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B42");
    },
    Error,
    "EncodingError U+0B42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B43");
    },
    Error,
    "EncodingError U+0B43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B44");
    },
    Error,
    "EncodingError U+0B44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B45");
    },
    Error,
    "EncodingError U+0B45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B46");
    },
    Error,
    "EncodingError U+0B46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B47");
    },
    Error,
    "EncodingError U+0B47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B48");
    },
    Error,
    "EncodingError U+0B48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B49");
    },
    Error,
    "EncodingError U+0B49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B4A");
    },
    Error,
    "EncodingError U+0B4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B4B");
    },
    Error,
    "EncodingError U+0B4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B4C");
    },
    Error,
    "EncodingError U+0B4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B4D");
    },
    Error,
    "EncodingError U+0B4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B4E");
    },
    Error,
    "EncodingError U+0B4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B4F");
    },
    Error,
    "EncodingError U+0B4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B50");
    },
    Error,
    "EncodingError U+0B50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B51");
    },
    Error,
    "EncodingError U+0B51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B52");
    },
    Error,
    "EncodingError U+0B52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B53");
    },
    Error,
    "EncodingError U+0B53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B54");
    },
    Error,
    "EncodingError U+0B54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B55");
    },
    Error,
    "EncodingError U+0B55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B56");
    },
    Error,
    "EncodingError U+0B56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B57");
    },
    Error,
    "EncodingError U+0B57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B58");
    },
    Error,
    "EncodingError U+0B58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B59");
    },
    Error,
    "EncodingError U+0B59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B5A");
    },
    Error,
    "EncodingError U+0B5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B5B");
    },
    Error,
    "EncodingError U+0B5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B5C");
    },
    Error,
    "EncodingError U+0B5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B5D");
    },
    Error,
    "EncodingError U+0B5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B5E");
    },
    Error,
    "EncodingError U+0B5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B5F");
    },
    Error,
    "EncodingError U+0B5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B60");
    },
    Error,
    "EncodingError U+0B60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B61");
    },
    Error,
    "EncodingError U+0B61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B62");
    },
    Error,
    "EncodingError U+0B62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B63");
    },
    Error,
    "EncodingError U+0B63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B64");
    },
    Error,
    "EncodingError U+0B64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B65");
    },
    Error,
    "EncodingError U+0B65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B66");
    },
    Error,
    "EncodingError U+0B66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B67");
    },
    Error,
    "EncodingError U+0B67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B68");
    },
    Error,
    "EncodingError U+0B68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B69");
    },
    Error,
    "EncodingError U+0B69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B6A");
    },
    Error,
    "EncodingError U+0B6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B6B");
    },
    Error,
    "EncodingError U+0B6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B6C");
    },
    Error,
    "EncodingError U+0B6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B6D");
    },
    Error,
    "EncodingError U+0B6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B6E");
    },
    Error,
    "EncodingError U+0B6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B6F");
    },
    Error,
    "EncodingError U+0B6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B70");
    },
    Error,
    "EncodingError U+0B70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B71");
    },
    Error,
    "EncodingError U+0B71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B72");
    },
    Error,
    "EncodingError U+0B72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B73");
    },
    Error,
    "EncodingError U+0B73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B74");
    },
    Error,
    "EncodingError U+0B74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B75");
    },
    Error,
    "EncodingError U+0B75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B76");
    },
    Error,
    "EncodingError U+0B76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B77");
    },
    Error,
    "EncodingError U+0B77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B78");
    },
    Error,
    "EncodingError U+0B78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B79");
    },
    Error,
    "EncodingError U+0B79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B7A");
    },
    Error,
    "EncodingError U+0B7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B7B");
    },
    Error,
    "EncodingError U+0B7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B7C");
    },
    Error,
    "EncodingError U+0B7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B7D");
    },
    Error,
    "EncodingError U+0B7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B7E");
    },
    Error,
    "EncodingError U+0B7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B7F");
    },
    Error,
    "EncodingError U+0B7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B80");
    },
    Error,
    "EncodingError U+0B80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B81");
    },
    Error,
    "EncodingError U+0B81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B82");
    },
    Error,
    "EncodingError U+0B82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B83");
    },
    Error,
    "EncodingError U+0B83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B84");
    },
    Error,
    "EncodingError U+0B84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B85");
    },
    Error,
    "EncodingError U+0B85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B86");
    },
    Error,
    "EncodingError U+0B86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B87");
    },
    Error,
    "EncodingError U+0B87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B88");
    },
    Error,
    "EncodingError U+0B88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B89");
    },
    Error,
    "EncodingError U+0B89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B8A");
    },
    Error,
    "EncodingError U+0B8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B8B");
    },
    Error,
    "EncodingError U+0B8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B8C");
    },
    Error,
    "EncodingError U+0B8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B8D");
    },
    Error,
    "EncodingError U+0B8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B8E");
    },
    Error,
    "EncodingError U+0B8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B8F");
    },
    Error,
    "EncodingError U+0B8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B90");
    },
    Error,
    "EncodingError U+0B90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B91");
    },
    Error,
    "EncodingError U+0B91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B92");
    },
    Error,
    "EncodingError U+0B92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B93");
    },
    Error,
    "EncodingError U+0B93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B94");
    },
    Error,
    "EncodingError U+0B94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B95");
    },
    Error,
    "EncodingError U+0B95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B96");
    },
    Error,
    "EncodingError U+0B96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B97");
    },
    Error,
    "EncodingError U+0B97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B98");
    },
    Error,
    "EncodingError U+0B98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B99");
    },
    Error,
    "EncodingError U+0B99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B9A");
    },
    Error,
    "EncodingError U+0B9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B9B");
    },
    Error,
    "EncodingError U+0B9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B9C");
    },
    Error,
    "EncodingError U+0B9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B9D");
    },
    Error,
    "EncodingError U+0B9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B9E");
    },
    Error,
    "EncodingError U+0B9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B9F");
    },
    Error,
    "EncodingError U+0B9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA0");
    },
    Error,
    "EncodingError U+0BA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA1");
    },
    Error,
    "EncodingError U+0BA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA2");
    },
    Error,
    "EncodingError U+0BA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA3");
    },
    Error,
    "EncodingError U+0BA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA4");
    },
    Error,
    "EncodingError U+0BA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA5");
    },
    Error,
    "EncodingError U+0BA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA6");
    },
    Error,
    "EncodingError U+0BA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA7");
    },
    Error,
    "EncodingError U+0BA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA8");
    },
    Error,
    "EncodingError U+0BA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA9");
    },
    Error,
    "EncodingError U+0BA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BAA");
    },
    Error,
    "EncodingError U+0BAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BAB");
    },
    Error,
    "EncodingError U+0BAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BAC");
    },
    Error,
    "EncodingError U+0BAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BAD");
    },
    Error,
    "EncodingError U+0BAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BAE");
    },
    Error,
    "EncodingError U+0BAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BAF");
    },
    Error,
    "EncodingError U+0BAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB0");
    },
    Error,
    "EncodingError U+0BB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB1");
    },
    Error,
    "EncodingError U+0BB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB2");
    },
    Error,
    "EncodingError U+0BB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB3");
    },
    Error,
    "EncodingError U+0BB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB4");
    },
    Error,
    "EncodingError U+0BB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB5");
    },
    Error,
    "EncodingError U+0BB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB6");
    },
    Error,
    "EncodingError U+0BB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB7");
    },
    Error,
    "EncodingError U+0BB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB8");
    },
    Error,
    "EncodingError U+0BB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB9");
    },
    Error,
    "EncodingError U+0BB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BBA");
    },
    Error,
    "EncodingError U+0BBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BBB");
    },
    Error,
    "EncodingError U+0BBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BBC");
    },
    Error,
    "EncodingError U+0BBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BBD");
    },
    Error,
    "EncodingError U+0BBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BBE");
    },
    Error,
    "EncodingError U+0BBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BBF");
    },
    Error,
    "EncodingError U+0BBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC0");
    },
    Error,
    "EncodingError U+0BC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC1");
    },
    Error,
    "EncodingError U+0BC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC2");
    },
    Error,
    "EncodingError U+0BC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC3");
    },
    Error,
    "EncodingError U+0BC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC4");
    },
    Error,
    "EncodingError U+0BC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC5");
    },
    Error,
    "EncodingError U+0BC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC6");
    },
    Error,
    "EncodingError U+0BC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC7");
    },
    Error,
    "EncodingError U+0BC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC8");
    },
    Error,
    "EncodingError U+0BC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC9");
    },
    Error,
    "EncodingError U+0BC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BCA");
    },
    Error,
    "EncodingError U+0BCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BCB");
    },
    Error,
    "EncodingError U+0BCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BCC");
    },
    Error,
    "EncodingError U+0BCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BCD");
    },
    Error,
    "EncodingError U+0BCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BCE");
    },
    Error,
    "EncodingError U+0BCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BCF");
    },
    Error,
    "EncodingError U+0BCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD0");
    },
    Error,
    "EncodingError U+0BD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD1");
    },
    Error,
    "EncodingError U+0BD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD2");
    },
    Error,
    "EncodingError U+0BD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD3");
    },
    Error,
    "EncodingError U+0BD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD4");
    },
    Error,
    "EncodingError U+0BD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD5");
    },
    Error,
    "EncodingError U+0BD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD6");
    },
    Error,
    "EncodingError U+0BD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD7");
    },
    Error,
    "EncodingError U+0BD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD8");
    },
    Error,
    "EncodingError U+0BD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD9");
    },
    Error,
    "EncodingError U+0BD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BDA");
    },
    Error,
    "EncodingError U+0BDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BDB");
    },
    Error,
    "EncodingError U+0BDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BDC");
    },
    Error,
    "EncodingError U+0BDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BDD");
    },
    Error,
    "EncodingError U+0BDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BDE");
    },
    Error,
    "EncodingError U+0BDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BDF");
    },
    Error,
    "EncodingError U+0BDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE0");
    },
    Error,
    "EncodingError U+0BE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE1");
    },
    Error,
    "EncodingError U+0BE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE2");
    },
    Error,
    "EncodingError U+0BE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE3");
    },
    Error,
    "EncodingError U+0BE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE4");
    },
    Error,
    "EncodingError U+0BE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE5");
    },
    Error,
    "EncodingError U+0BE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE6");
    },
    Error,
    "EncodingError U+0BE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE7");
    },
    Error,
    "EncodingError U+0BE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE8");
    },
    Error,
    "EncodingError U+0BE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE9");
    },
    Error,
    "EncodingError U+0BE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BEA");
    },
    Error,
    "EncodingError U+0BEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BEB");
    },
    Error,
    "EncodingError U+0BEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BEC");
    },
    Error,
    "EncodingError U+0BEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BED");
    },
    Error,
    "EncodingError U+0BED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BEE");
    },
    Error,
    "EncodingError U+0BEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BEF");
    },
    Error,
    "EncodingError U+0BEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF0");
    },
    Error,
    "EncodingError U+0BF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF1");
    },
    Error,
    "EncodingError U+0BF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF2");
    },
    Error,
    "EncodingError U+0BF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF3");
    },
    Error,
    "EncodingError U+0BF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF4");
    },
    Error,
    "EncodingError U+0BF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF5");
    },
    Error,
    "EncodingError U+0BF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF6");
    },
    Error,
    "EncodingError U+0BF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF7");
    },
    Error,
    "EncodingError U+0BF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF8");
    },
    Error,
    "EncodingError U+0BF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF9");
    },
    Error,
    "EncodingError U+0BF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BFA");
    },
    Error,
    "EncodingError U+0BFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BFB");
    },
    Error,
    "EncodingError U+0BFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BFC");
    },
    Error,
    "EncodingError U+0BFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BFD");
    },
    Error,
    "EncodingError U+0BFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BFE");
    },
    Error,
    "EncodingError U+0BFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BFF");
    },
    Error,
    "EncodingError U+0BFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C00");
    },
    Error,
    "EncodingError U+0C00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C01");
    },
    Error,
    "EncodingError U+0C01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C02");
    },
    Error,
    "EncodingError U+0C02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C03");
    },
    Error,
    "EncodingError U+0C03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C04");
    },
    Error,
    "EncodingError U+0C04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C05");
    },
    Error,
    "EncodingError U+0C05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C06");
    },
    Error,
    "EncodingError U+0C06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C07");
    },
    Error,
    "EncodingError U+0C07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C08");
    },
    Error,
    "EncodingError U+0C08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C09");
    },
    Error,
    "EncodingError U+0C09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C0A");
    },
    Error,
    "EncodingError U+0C0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C0B");
    },
    Error,
    "EncodingError U+0C0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C0C");
    },
    Error,
    "EncodingError U+0C0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C0D");
    },
    Error,
    "EncodingError U+0C0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C0E");
    },
    Error,
    "EncodingError U+0C0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C0F");
    },
    Error,
    "EncodingError U+0C0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C10");
    },
    Error,
    "EncodingError U+0C10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C11");
    },
    Error,
    "EncodingError U+0C11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C12");
    },
    Error,
    "EncodingError U+0C12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C13");
    },
    Error,
    "EncodingError U+0C13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C14");
    },
    Error,
    "EncodingError U+0C14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C15");
    },
    Error,
    "EncodingError U+0C15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C16");
    },
    Error,
    "EncodingError U+0C16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C17");
    },
    Error,
    "EncodingError U+0C17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C18");
    },
    Error,
    "EncodingError U+0C18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C19");
    },
    Error,
    "EncodingError U+0C19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C1A");
    },
    Error,
    "EncodingError U+0C1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C1B");
    },
    Error,
    "EncodingError U+0C1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C1C");
    },
    Error,
    "EncodingError U+0C1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C1D");
    },
    Error,
    "EncodingError U+0C1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C1E");
    },
    Error,
    "EncodingError U+0C1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C1F");
    },
    Error,
    "EncodingError U+0C1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C20");
    },
    Error,
    "EncodingError U+0C20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C21");
    },
    Error,
    "EncodingError U+0C21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C22");
    },
    Error,
    "EncodingError U+0C22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C23");
    },
    Error,
    "EncodingError U+0C23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C24");
    },
    Error,
    "EncodingError U+0C24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C25");
    },
    Error,
    "EncodingError U+0C25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C26");
    },
    Error,
    "EncodingError U+0C26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C27");
    },
    Error,
    "EncodingError U+0C27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C28");
    },
    Error,
    "EncodingError U+0C28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C29");
    },
    Error,
    "EncodingError U+0C29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C2A");
    },
    Error,
    "EncodingError U+0C2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C2B");
    },
    Error,
    "EncodingError U+0C2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C2C");
    },
    Error,
    "EncodingError U+0C2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C2D");
    },
    Error,
    "EncodingError U+0C2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C2E");
    },
    Error,
    "EncodingError U+0C2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C2F");
    },
    Error,
    "EncodingError U+0C2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C30");
    },
    Error,
    "EncodingError U+0C30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C31");
    },
    Error,
    "EncodingError U+0C31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C32");
    },
    Error,
    "EncodingError U+0C32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C33");
    },
    Error,
    "EncodingError U+0C33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C34");
    },
    Error,
    "EncodingError U+0C34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C35");
    },
    Error,
    "EncodingError U+0C35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C36");
    },
    Error,
    "EncodingError U+0C36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C37");
    },
    Error,
    "EncodingError U+0C37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C38");
    },
    Error,
    "EncodingError U+0C38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C39");
    },
    Error,
    "EncodingError U+0C39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C3A");
    },
    Error,
    "EncodingError U+0C3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C3B");
    },
    Error,
    "EncodingError U+0C3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C3C");
    },
    Error,
    "EncodingError U+0C3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C3D");
    },
    Error,
    "EncodingError U+0C3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C3E");
    },
    Error,
    "EncodingError U+0C3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C3F");
    },
    Error,
    "EncodingError U+0C3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C40");
    },
    Error,
    "EncodingError U+0C40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C41");
    },
    Error,
    "EncodingError U+0C41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C42");
    },
    Error,
    "EncodingError U+0C42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C43");
    },
    Error,
    "EncodingError U+0C43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C44");
    },
    Error,
    "EncodingError U+0C44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C45");
    },
    Error,
    "EncodingError U+0C45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C46");
    },
    Error,
    "EncodingError U+0C46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C47");
    },
    Error,
    "EncodingError U+0C47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C48");
    },
    Error,
    "EncodingError U+0C48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C49");
    },
    Error,
    "EncodingError U+0C49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C4A");
    },
    Error,
    "EncodingError U+0C4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C4B");
    },
    Error,
    "EncodingError U+0C4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C4C");
    },
    Error,
    "EncodingError U+0C4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C4D");
    },
    Error,
    "EncodingError U+0C4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C4E");
    },
    Error,
    "EncodingError U+0C4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C4F");
    },
    Error,
    "EncodingError U+0C4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C50");
    },
    Error,
    "EncodingError U+0C50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C51");
    },
    Error,
    "EncodingError U+0C51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C52");
    },
    Error,
    "EncodingError U+0C52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C53");
    },
    Error,
    "EncodingError U+0C53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C54");
    },
    Error,
    "EncodingError U+0C54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C55");
    },
    Error,
    "EncodingError U+0C55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C56");
    },
    Error,
    "EncodingError U+0C56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C57");
    },
    Error,
    "EncodingError U+0C57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C58");
    },
    Error,
    "EncodingError U+0C58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C59");
    },
    Error,
    "EncodingError U+0C59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C5A");
    },
    Error,
    "EncodingError U+0C5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C5B");
    },
    Error,
    "EncodingError U+0C5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C5C");
    },
    Error,
    "EncodingError U+0C5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C5D");
    },
    Error,
    "EncodingError U+0C5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C5E");
    },
    Error,
    "EncodingError U+0C5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C5F");
    },
    Error,
    "EncodingError U+0C5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C60");
    },
    Error,
    "EncodingError U+0C60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C61");
    },
    Error,
    "EncodingError U+0C61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C62");
    },
    Error,
    "EncodingError U+0C62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C63");
    },
    Error,
    "EncodingError U+0C63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C64");
    },
    Error,
    "EncodingError U+0C64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C65");
    },
    Error,
    "EncodingError U+0C65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C66");
    },
    Error,
    "EncodingError U+0C66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C67");
    },
    Error,
    "EncodingError U+0C67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C68");
    },
    Error,
    "EncodingError U+0C68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C69");
    },
    Error,
    "EncodingError U+0C69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C6A");
    },
    Error,
    "EncodingError U+0C6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C6B");
    },
    Error,
    "EncodingError U+0C6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C6C");
    },
    Error,
    "EncodingError U+0C6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C6D");
    },
    Error,
    "EncodingError U+0C6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C6E");
    },
    Error,
    "EncodingError U+0C6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C6F");
    },
    Error,
    "EncodingError U+0C6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C70");
    },
    Error,
    "EncodingError U+0C70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C71");
    },
    Error,
    "EncodingError U+0C71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C72");
    },
    Error,
    "EncodingError U+0C72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C73");
    },
    Error,
    "EncodingError U+0C73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C74");
    },
    Error,
    "EncodingError U+0C74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C75");
    },
    Error,
    "EncodingError U+0C75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C76");
    },
    Error,
    "EncodingError U+0C76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C77");
    },
    Error,
    "EncodingError U+0C77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C78");
    },
    Error,
    "EncodingError U+0C78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C79");
    },
    Error,
    "EncodingError U+0C79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C7A");
    },
    Error,
    "EncodingError U+0C7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C7B");
    },
    Error,
    "EncodingError U+0C7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C7C");
    },
    Error,
    "EncodingError U+0C7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C7D");
    },
    Error,
    "EncodingError U+0C7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C7E");
    },
    Error,
    "EncodingError U+0C7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C7F");
    },
    Error,
    "EncodingError U+0C7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C80");
    },
    Error,
    "EncodingError U+0C80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C81");
    },
    Error,
    "EncodingError U+0C81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C82");
    },
    Error,
    "EncodingError U+0C82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C83");
    },
    Error,
    "EncodingError U+0C83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C84");
    },
    Error,
    "EncodingError U+0C84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C85");
    },
    Error,
    "EncodingError U+0C85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C86");
    },
    Error,
    "EncodingError U+0C86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C87");
    },
    Error,
    "EncodingError U+0C87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C88");
    },
    Error,
    "EncodingError U+0C88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C89");
    },
    Error,
    "EncodingError U+0C89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C8A");
    },
    Error,
    "EncodingError U+0C8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C8B");
    },
    Error,
    "EncodingError U+0C8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C8C");
    },
    Error,
    "EncodingError U+0C8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C8D");
    },
    Error,
    "EncodingError U+0C8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C8E");
    },
    Error,
    "EncodingError U+0C8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C8F");
    },
    Error,
    "EncodingError U+0C8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C90");
    },
    Error,
    "EncodingError U+0C90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C91");
    },
    Error,
    "EncodingError U+0C91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C92");
    },
    Error,
    "EncodingError U+0C92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C93");
    },
    Error,
    "EncodingError U+0C93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C94");
    },
    Error,
    "EncodingError U+0C94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C95");
    },
    Error,
    "EncodingError U+0C95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C96");
    },
    Error,
    "EncodingError U+0C96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C97");
    },
    Error,
    "EncodingError U+0C97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C98");
    },
    Error,
    "EncodingError U+0C98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C99");
    },
    Error,
    "EncodingError U+0C99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C9A");
    },
    Error,
    "EncodingError U+0C9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C9B");
    },
    Error,
    "EncodingError U+0C9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C9C");
    },
    Error,
    "EncodingError U+0C9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C9D");
    },
    Error,
    "EncodingError U+0C9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C9E");
    },
    Error,
    "EncodingError U+0C9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C9F");
    },
    Error,
    "EncodingError U+0C9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA0");
    },
    Error,
    "EncodingError U+0CA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA1");
    },
    Error,
    "EncodingError U+0CA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA2");
    },
    Error,
    "EncodingError U+0CA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA3");
    },
    Error,
    "EncodingError U+0CA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA4");
    },
    Error,
    "EncodingError U+0CA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA5");
    },
    Error,
    "EncodingError U+0CA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA6");
    },
    Error,
    "EncodingError U+0CA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA7");
    },
    Error,
    "EncodingError U+0CA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA8");
    },
    Error,
    "EncodingError U+0CA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA9");
    },
    Error,
    "EncodingError U+0CA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CAA");
    },
    Error,
    "EncodingError U+0CAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CAB");
    },
    Error,
    "EncodingError U+0CAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CAC");
    },
    Error,
    "EncodingError U+0CAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CAD");
    },
    Error,
    "EncodingError U+0CAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CAE");
    },
    Error,
    "EncodingError U+0CAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CAF");
    },
    Error,
    "EncodingError U+0CAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB0");
    },
    Error,
    "EncodingError U+0CB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB1");
    },
    Error,
    "EncodingError U+0CB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB2");
    },
    Error,
    "EncodingError U+0CB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB3");
    },
    Error,
    "EncodingError U+0CB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB4");
    },
    Error,
    "EncodingError U+0CB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB5");
    },
    Error,
    "EncodingError U+0CB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB6");
    },
    Error,
    "EncodingError U+0CB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB7");
    },
    Error,
    "EncodingError U+0CB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB8");
    },
    Error,
    "EncodingError U+0CB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB9");
    },
    Error,
    "EncodingError U+0CB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CBA");
    },
    Error,
    "EncodingError U+0CBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CBB");
    },
    Error,
    "EncodingError U+0CBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CBC");
    },
    Error,
    "EncodingError U+0CBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CBD");
    },
    Error,
    "EncodingError U+0CBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CBE");
    },
    Error,
    "EncodingError U+0CBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CBF");
    },
    Error,
    "EncodingError U+0CBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC0");
    },
    Error,
    "EncodingError U+0CC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC1");
    },
    Error,
    "EncodingError U+0CC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC2");
    },
    Error,
    "EncodingError U+0CC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC3");
    },
    Error,
    "EncodingError U+0CC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC4");
    },
    Error,
    "EncodingError U+0CC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC5");
    },
    Error,
    "EncodingError U+0CC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC6");
    },
    Error,
    "EncodingError U+0CC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC7");
    },
    Error,
    "EncodingError U+0CC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC8");
    },
    Error,
    "EncodingError U+0CC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC9");
    },
    Error,
    "EncodingError U+0CC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CCA");
    },
    Error,
    "EncodingError U+0CCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CCB");
    },
    Error,
    "EncodingError U+0CCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CCC");
    },
    Error,
    "EncodingError U+0CCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CCD");
    },
    Error,
    "EncodingError U+0CCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CCE");
    },
    Error,
    "EncodingError U+0CCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CCF");
    },
    Error,
    "EncodingError U+0CCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD0");
    },
    Error,
    "EncodingError U+0CD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD1");
    },
    Error,
    "EncodingError U+0CD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD2");
    },
    Error,
    "EncodingError U+0CD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD3");
    },
    Error,
    "EncodingError U+0CD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD4");
    },
    Error,
    "EncodingError U+0CD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD5");
    },
    Error,
    "EncodingError U+0CD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD6");
    },
    Error,
    "EncodingError U+0CD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD7");
    },
    Error,
    "EncodingError U+0CD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD8");
    },
    Error,
    "EncodingError U+0CD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD9");
    },
    Error,
    "EncodingError U+0CD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CDA");
    },
    Error,
    "EncodingError U+0CDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CDB");
    },
    Error,
    "EncodingError U+0CDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CDC");
    },
    Error,
    "EncodingError U+0CDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CDD");
    },
    Error,
    "EncodingError U+0CDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CDE");
    },
    Error,
    "EncodingError U+0CDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CDF");
    },
    Error,
    "EncodingError U+0CDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE0");
    },
    Error,
    "EncodingError U+0CE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE1");
    },
    Error,
    "EncodingError U+0CE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE2");
    },
    Error,
    "EncodingError U+0CE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE3");
    },
    Error,
    "EncodingError U+0CE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE4");
    },
    Error,
    "EncodingError U+0CE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE5");
    },
    Error,
    "EncodingError U+0CE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE6");
    },
    Error,
    "EncodingError U+0CE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE7");
    },
    Error,
    "EncodingError U+0CE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE8");
    },
    Error,
    "EncodingError U+0CE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE9");
    },
    Error,
    "EncodingError U+0CE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CEA");
    },
    Error,
    "EncodingError U+0CEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CEB");
    },
    Error,
    "EncodingError U+0CEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CEC");
    },
    Error,
    "EncodingError U+0CEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CED");
    },
    Error,
    "EncodingError U+0CED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CEE");
    },
    Error,
    "EncodingError U+0CEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CEF");
    },
    Error,
    "EncodingError U+0CEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF0");
    },
    Error,
    "EncodingError U+0CF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF1");
    },
    Error,
    "EncodingError U+0CF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF2");
    },
    Error,
    "EncodingError U+0CF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF3");
    },
    Error,
    "EncodingError U+0CF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF4");
    },
    Error,
    "EncodingError U+0CF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF5");
    },
    Error,
    "EncodingError U+0CF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF6");
    },
    Error,
    "EncodingError U+0CF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF7");
    },
    Error,
    "EncodingError U+0CF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF8");
    },
    Error,
    "EncodingError U+0CF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF9");
    },
    Error,
    "EncodingError U+0CF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CFA");
    },
    Error,
    "EncodingError U+0CFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CFB");
    },
    Error,
    "EncodingError U+0CFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CFC");
    },
    Error,
    "EncodingError U+0CFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CFD");
    },
    Error,
    "EncodingError U+0CFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CFE");
    },
    Error,
    "EncodingError U+0CFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CFF");
    },
    Error,
    "EncodingError U+0CFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D00");
    },
    Error,
    "EncodingError U+0D00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D01");
    },
    Error,
    "EncodingError U+0D01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D02");
    },
    Error,
    "EncodingError U+0D02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D03");
    },
    Error,
    "EncodingError U+0D03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D04");
    },
    Error,
    "EncodingError U+0D04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D05");
    },
    Error,
    "EncodingError U+0D05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D06");
    },
    Error,
    "EncodingError U+0D06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D07");
    },
    Error,
    "EncodingError U+0D07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D08");
    },
    Error,
    "EncodingError U+0D08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D09");
    },
    Error,
    "EncodingError U+0D09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D0A");
    },
    Error,
    "EncodingError U+0D0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D0B");
    },
    Error,
    "EncodingError U+0D0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D0C");
    },
    Error,
    "EncodingError U+0D0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D0D");
    },
    Error,
    "EncodingError U+0D0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D0E");
    },
    Error,
    "EncodingError U+0D0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D0F");
    },
    Error,
    "EncodingError U+0D0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D10");
    },
    Error,
    "EncodingError U+0D10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D11");
    },
    Error,
    "EncodingError U+0D11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D12");
    },
    Error,
    "EncodingError U+0D12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D13");
    },
    Error,
    "EncodingError U+0D13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D14");
    },
    Error,
    "EncodingError U+0D14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D15");
    },
    Error,
    "EncodingError U+0D15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D16");
    },
    Error,
    "EncodingError U+0D16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D17");
    },
    Error,
    "EncodingError U+0D17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D18");
    },
    Error,
    "EncodingError U+0D18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D19");
    },
    Error,
    "EncodingError U+0D19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D1A");
    },
    Error,
    "EncodingError U+0D1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D1B");
    },
    Error,
    "EncodingError U+0D1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D1C");
    },
    Error,
    "EncodingError U+0D1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D1D");
    },
    Error,
    "EncodingError U+0D1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D1E");
    },
    Error,
    "EncodingError U+0D1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D1F");
    },
    Error,
    "EncodingError U+0D1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D20");
    },
    Error,
    "EncodingError U+0D20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D21");
    },
    Error,
    "EncodingError U+0D21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D22");
    },
    Error,
    "EncodingError U+0D22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D23");
    },
    Error,
    "EncodingError U+0D23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D24");
    },
    Error,
    "EncodingError U+0D24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D25");
    },
    Error,
    "EncodingError U+0D25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D26");
    },
    Error,
    "EncodingError U+0D26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D27");
    },
    Error,
    "EncodingError U+0D27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D28");
    },
    Error,
    "EncodingError U+0D28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D29");
    },
    Error,
    "EncodingError U+0D29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D2A");
    },
    Error,
    "EncodingError U+0D2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D2B");
    },
    Error,
    "EncodingError U+0D2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D2C");
    },
    Error,
    "EncodingError U+0D2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D2D");
    },
    Error,
    "EncodingError U+0D2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D2E");
    },
    Error,
    "EncodingError U+0D2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D2F");
    },
    Error,
    "EncodingError U+0D2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D30");
    },
    Error,
    "EncodingError U+0D30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D31");
    },
    Error,
    "EncodingError U+0D31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D32");
    },
    Error,
    "EncodingError U+0D32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D33");
    },
    Error,
    "EncodingError U+0D33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D34");
    },
    Error,
    "EncodingError U+0D34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D35");
    },
    Error,
    "EncodingError U+0D35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D36");
    },
    Error,
    "EncodingError U+0D36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D37");
    },
    Error,
    "EncodingError U+0D37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D38");
    },
    Error,
    "EncodingError U+0D38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D39");
    },
    Error,
    "EncodingError U+0D39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D3A");
    },
    Error,
    "EncodingError U+0D3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D3B");
    },
    Error,
    "EncodingError U+0D3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D3C");
    },
    Error,
    "EncodingError U+0D3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D3D");
    },
    Error,
    "EncodingError U+0D3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D3E");
    },
    Error,
    "EncodingError U+0D3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D3F");
    },
    Error,
    "EncodingError U+0D3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D40");
    },
    Error,
    "EncodingError U+0D40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D41");
    },
    Error,
    "EncodingError U+0D41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D42");
    },
    Error,
    "EncodingError U+0D42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D43");
    },
    Error,
    "EncodingError U+0D43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D44");
    },
    Error,
    "EncodingError U+0D44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D45");
    },
    Error,
    "EncodingError U+0D45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D46");
    },
    Error,
    "EncodingError U+0D46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D47");
    },
    Error,
    "EncodingError U+0D47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D48");
    },
    Error,
    "EncodingError U+0D48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D49");
    },
    Error,
    "EncodingError U+0D49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D4A");
    },
    Error,
    "EncodingError U+0D4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D4B");
    },
    Error,
    "EncodingError U+0D4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D4C");
    },
    Error,
    "EncodingError U+0D4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D4D");
    },
    Error,
    "EncodingError U+0D4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D4E");
    },
    Error,
    "EncodingError U+0D4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D4F");
    },
    Error,
    "EncodingError U+0D4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D50");
    },
    Error,
    "EncodingError U+0D50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D51");
    },
    Error,
    "EncodingError U+0D51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D52");
    },
    Error,
    "EncodingError U+0D52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D53");
    },
    Error,
    "EncodingError U+0D53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D54");
    },
    Error,
    "EncodingError U+0D54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D55");
    },
    Error,
    "EncodingError U+0D55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D56");
    },
    Error,
    "EncodingError U+0D56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D57");
    },
    Error,
    "EncodingError U+0D57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D58");
    },
    Error,
    "EncodingError U+0D58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D59");
    },
    Error,
    "EncodingError U+0D59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D5A");
    },
    Error,
    "EncodingError U+0D5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D5B");
    },
    Error,
    "EncodingError U+0D5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D5C");
    },
    Error,
    "EncodingError U+0D5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D5D");
    },
    Error,
    "EncodingError U+0D5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D5E");
    },
    Error,
    "EncodingError U+0D5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D5F");
    },
    Error,
    "EncodingError U+0D5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D60");
    },
    Error,
    "EncodingError U+0D60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D61");
    },
    Error,
    "EncodingError U+0D61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D62");
    },
    Error,
    "EncodingError U+0D62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D63");
    },
    Error,
    "EncodingError U+0D63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D64");
    },
    Error,
    "EncodingError U+0D64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D65");
    },
    Error,
    "EncodingError U+0D65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D66");
    },
    Error,
    "EncodingError U+0D66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D67");
    },
    Error,
    "EncodingError U+0D67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D68");
    },
    Error,
    "EncodingError U+0D68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D69");
    },
    Error,
    "EncodingError U+0D69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D6A");
    },
    Error,
    "EncodingError U+0D6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D6B");
    },
    Error,
    "EncodingError U+0D6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D6C");
    },
    Error,
    "EncodingError U+0D6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D6D");
    },
    Error,
    "EncodingError U+0D6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D6E");
    },
    Error,
    "EncodingError U+0D6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D6F");
    },
    Error,
    "EncodingError U+0D6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D70");
    },
    Error,
    "EncodingError U+0D70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D71");
    },
    Error,
    "EncodingError U+0D71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D72");
    },
    Error,
    "EncodingError U+0D72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D73");
    },
    Error,
    "EncodingError U+0D73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D74");
    },
    Error,
    "EncodingError U+0D74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D75");
    },
    Error,
    "EncodingError U+0D75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D76");
    },
    Error,
    "EncodingError U+0D76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D77");
    },
    Error,
    "EncodingError U+0D77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D78");
    },
    Error,
    "EncodingError U+0D78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D79");
    },
    Error,
    "EncodingError U+0D79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D7A");
    },
    Error,
    "EncodingError U+0D7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D7B");
    },
    Error,
    "EncodingError U+0D7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D7C");
    },
    Error,
    "EncodingError U+0D7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D7D");
    },
    Error,
    "EncodingError U+0D7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D7E");
    },
    Error,
    "EncodingError U+0D7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D7F");
    },
    Error,
    "EncodingError U+0D7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D80");
    },
    Error,
    "EncodingError U+0D80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D81");
    },
    Error,
    "EncodingError U+0D81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D82");
    },
    Error,
    "EncodingError U+0D82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D83");
    },
    Error,
    "EncodingError U+0D83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D84");
    },
    Error,
    "EncodingError U+0D84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D85");
    },
    Error,
    "EncodingError U+0D85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D86");
    },
    Error,
    "EncodingError U+0D86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D87");
    },
    Error,
    "EncodingError U+0D87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D88");
    },
    Error,
    "EncodingError U+0D88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D89");
    },
    Error,
    "EncodingError U+0D89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D8A");
    },
    Error,
    "EncodingError U+0D8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D8B");
    },
    Error,
    "EncodingError U+0D8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D8C");
    },
    Error,
    "EncodingError U+0D8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D8D");
    },
    Error,
    "EncodingError U+0D8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D8E");
    },
    Error,
    "EncodingError U+0D8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D8F");
    },
    Error,
    "EncodingError U+0D8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D90");
    },
    Error,
    "EncodingError U+0D90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D91");
    },
    Error,
    "EncodingError U+0D91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D92");
    },
    Error,
    "EncodingError U+0D92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D93");
    },
    Error,
    "EncodingError U+0D93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D94");
    },
    Error,
    "EncodingError U+0D94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D95");
    },
    Error,
    "EncodingError U+0D95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D96");
    },
    Error,
    "EncodingError U+0D96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D97");
    },
    Error,
    "EncodingError U+0D97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D98");
    },
    Error,
    "EncodingError U+0D98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D99");
    },
    Error,
    "EncodingError U+0D99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D9A");
    },
    Error,
    "EncodingError U+0D9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D9B");
    },
    Error,
    "EncodingError U+0D9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D9C");
    },
    Error,
    "EncodingError U+0D9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D9D");
    },
    Error,
    "EncodingError U+0D9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D9E");
    },
    Error,
    "EncodingError U+0D9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D9F");
    },
    Error,
    "EncodingError U+0D9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA0");
    },
    Error,
    "EncodingError U+0DA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA1");
    },
    Error,
    "EncodingError U+0DA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA2");
    },
    Error,
    "EncodingError U+0DA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA3");
    },
    Error,
    "EncodingError U+0DA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA4");
    },
    Error,
    "EncodingError U+0DA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA5");
    },
    Error,
    "EncodingError U+0DA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA6");
    },
    Error,
    "EncodingError U+0DA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA7");
    },
    Error,
    "EncodingError U+0DA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA8");
    },
    Error,
    "EncodingError U+0DA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA9");
    },
    Error,
    "EncodingError U+0DA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DAA");
    },
    Error,
    "EncodingError U+0DAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DAB");
    },
    Error,
    "EncodingError U+0DAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DAC");
    },
    Error,
    "EncodingError U+0DAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DAD");
    },
    Error,
    "EncodingError U+0DAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DAE");
    },
    Error,
    "EncodingError U+0DAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DAF");
    },
    Error,
    "EncodingError U+0DAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB0");
    },
    Error,
    "EncodingError U+0DB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB1");
    },
    Error,
    "EncodingError U+0DB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB2");
    },
    Error,
    "EncodingError U+0DB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB3");
    },
    Error,
    "EncodingError U+0DB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB4");
    },
    Error,
    "EncodingError U+0DB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB5");
    },
    Error,
    "EncodingError U+0DB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB6");
    },
    Error,
    "EncodingError U+0DB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB7");
    },
    Error,
    "EncodingError U+0DB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB8");
    },
    Error,
    "EncodingError U+0DB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB9");
    },
    Error,
    "EncodingError U+0DB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DBA");
    },
    Error,
    "EncodingError U+0DBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DBB");
    },
    Error,
    "EncodingError U+0DBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DBC");
    },
    Error,
    "EncodingError U+0DBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DBD");
    },
    Error,
    "EncodingError U+0DBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DBE");
    },
    Error,
    "EncodingError U+0DBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DBF");
    },
    Error,
    "EncodingError U+0DBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC0");
    },
    Error,
    "EncodingError U+0DC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC1");
    },
    Error,
    "EncodingError U+0DC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC2");
    },
    Error,
    "EncodingError U+0DC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC3");
    },
    Error,
    "EncodingError U+0DC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC4");
    },
    Error,
    "EncodingError U+0DC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC5");
    },
    Error,
    "EncodingError U+0DC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC6");
    },
    Error,
    "EncodingError U+0DC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC7");
    },
    Error,
    "EncodingError U+0DC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC8");
    },
    Error,
    "EncodingError U+0DC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC9");
    },
    Error,
    "EncodingError U+0DC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DCA");
    },
    Error,
    "EncodingError U+0DCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DCB");
    },
    Error,
    "EncodingError U+0DCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DCC");
    },
    Error,
    "EncodingError U+0DCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DCD");
    },
    Error,
    "EncodingError U+0DCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DCE");
    },
    Error,
    "EncodingError U+0DCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DCF");
    },
    Error,
    "EncodingError U+0DCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD0");
    },
    Error,
    "EncodingError U+0DD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD1");
    },
    Error,
    "EncodingError U+0DD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD2");
    },
    Error,
    "EncodingError U+0DD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD3");
    },
    Error,
    "EncodingError U+0DD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD4");
    },
    Error,
    "EncodingError U+0DD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD5");
    },
    Error,
    "EncodingError U+0DD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD6");
    },
    Error,
    "EncodingError U+0DD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD7");
    },
    Error,
    "EncodingError U+0DD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD8");
    },
    Error,
    "EncodingError U+0DD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD9");
    },
    Error,
    "EncodingError U+0DD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DDA");
    },
    Error,
    "EncodingError U+0DDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DDB");
    },
    Error,
    "EncodingError U+0DDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DDC");
    },
    Error,
    "EncodingError U+0DDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DDD");
    },
    Error,
    "EncodingError U+0DDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DDE");
    },
    Error,
    "EncodingError U+0DDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DDF");
    },
    Error,
    "EncodingError U+0DDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE0");
    },
    Error,
    "EncodingError U+0DE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE1");
    },
    Error,
    "EncodingError U+0DE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE2");
    },
    Error,
    "EncodingError U+0DE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE3");
    },
    Error,
    "EncodingError U+0DE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE4");
    },
    Error,
    "EncodingError U+0DE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE5");
    },
    Error,
    "EncodingError U+0DE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE6");
    },
    Error,
    "EncodingError U+0DE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE7");
    },
    Error,
    "EncodingError U+0DE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE8");
    },
    Error,
    "EncodingError U+0DE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE9");
    },
    Error,
    "EncodingError U+0DE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DEA");
    },
    Error,
    "EncodingError U+0DEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DEB");
    },
    Error,
    "EncodingError U+0DEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DEC");
    },
    Error,
    "EncodingError U+0DEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DED");
    },
    Error,
    "EncodingError U+0DED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DEE");
    },
    Error,
    "EncodingError U+0DEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DEF");
    },
    Error,
    "EncodingError U+0DEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF0");
    },
    Error,
    "EncodingError U+0DF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF1");
    },
    Error,
    "EncodingError U+0DF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF2");
    },
    Error,
    "EncodingError U+0DF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF3");
    },
    Error,
    "EncodingError U+0DF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF4");
    },
    Error,
    "EncodingError U+0DF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF5");
    },
    Error,
    "EncodingError U+0DF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF6");
    },
    Error,
    "EncodingError U+0DF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF7");
    },
    Error,
    "EncodingError U+0DF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF8");
    },
    Error,
    "EncodingError U+0DF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF9");
    },
    Error,
    "EncodingError U+0DF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DFA");
    },
    Error,
    "EncodingError U+0DFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DFB");
    },
    Error,
    "EncodingError U+0DFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DFC");
    },
    Error,
    "EncodingError U+0DFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DFD");
    },
    Error,
    "EncodingError U+0DFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DFE");
    },
    Error,
    "EncodingError U+0DFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DFF");
    },
    Error,
    "EncodingError U+0DFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E00");
    },
    Error,
    "EncodingError U+0E00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E01");
    },
    Error,
    "EncodingError U+0E01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E02");
    },
    Error,
    "EncodingError U+0E02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E03");
    },
    Error,
    "EncodingError U+0E03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E04");
    },
    Error,
    "EncodingError U+0E04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E05");
    },
    Error,
    "EncodingError U+0E05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E06");
    },
    Error,
    "EncodingError U+0E06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E07");
    },
    Error,
    "EncodingError U+0E07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E08");
    },
    Error,
    "EncodingError U+0E08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E09");
    },
    Error,
    "EncodingError U+0E09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E0A");
    },
    Error,
    "EncodingError U+0E0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E0B");
    },
    Error,
    "EncodingError U+0E0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E0C");
    },
    Error,
    "EncodingError U+0E0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E0D");
    },
    Error,
    "EncodingError U+0E0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E0E");
    },
    Error,
    "EncodingError U+0E0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E0F");
    },
    Error,
    "EncodingError U+0E0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E10");
    },
    Error,
    "EncodingError U+0E10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E11");
    },
    Error,
    "EncodingError U+0E11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E12");
    },
    Error,
    "EncodingError U+0E12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E13");
    },
    Error,
    "EncodingError U+0E13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E14");
    },
    Error,
    "EncodingError U+0E14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E15");
    },
    Error,
    "EncodingError U+0E15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E16");
    },
    Error,
    "EncodingError U+0E16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E17");
    },
    Error,
    "EncodingError U+0E17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E18");
    },
    Error,
    "EncodingError U+0E18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E19");
    },
    Error,
    "EncodingError U+0E19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E1A");
    },
    Error,
    "EncodingError U+0E1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E1B");
    },
    Error,
    "EncodingError U+0E1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E1C");
    },
    Error,
    "EncodingError U+0E1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E1D");
    },
    Error,
    "EncodingError U+0E1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E1E");
    },
    Error,
    "EncodingError U+0E1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E1F");
    },
    Error,
    "EncodingError U+0E1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E20");
    },
    Error,
    "EncodingError U+0E20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E21");
    },
    Error,
    "EncodingError U+0E21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E22");
    },
    Error,
    "EncodingError U+0E22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E23");
    },
    Error,
    "EncodingError U+0E23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E24");
    },
    Error,
    "EncodingError U+0E24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E25");
    },
    Error,
    "EncodingError U+0E25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E26");
    },
    Error,
    "EncodingError U+0E26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E27");
    },
    Error,
    "EncodingError U+0E27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E28");
    },
    Error,
    "EncodingError U+0E28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E29");
    },
    Error,
    "EncodingError U+0E29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E2A");
    },
    Error,
    "EncodingError U+0E2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E2B");
    },
    Error,
    "EncodingError U+0E2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E2C");
    },
    Error,
    "EncodingError U+0E2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E2D");
    },
    Error,
    "EncodingError U+0E2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E2E");
    },
    Error,
    "EncodingError U+0E2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E2F");
    },
    Error,
    "EncodingError U+0E2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E30");
    },
    Error,
    "EncodingError U+0E30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E31");
    },
    Error,
    "EncodingError U+0E31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E32");
    },
    Error,
    "EncodingError U+0E32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E33");
    },
    Error,
    "EncodingError U+0E33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E34");
    },
    Error,
    "EncodingError U+0E34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E35");
    },
    Error,
    "EncodingError U+0E35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E36");
    },
    Error,
    "EncodingError U+0E36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E37");
    },
    Error,
    "EncodingError U+0E37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E38");
    },
    Error,
    "EncodingError U+0E38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E39");
    },
    Error,
    "EncodingError U+0E39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E3A");
    },
    Error,
    "EncodingError U+0E3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E3B");
    },
    Error,
    "EncodingError U+0E3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E3C");
    },
    Error,
    "EncodingError U+0E3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E3D");
    },
    Error,
    "EncodingError U+0E3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E3E");
    },
    Error,
    "EncodingError U+0E3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E3F");
    },
    Error,
    "EncodingError U+0E3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E40");
    },
    Error,
    "EncodingError U+0E40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E41");
    },
    Error,
    "EncodingError U+0E41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E42");
    },
    Error,
    "EncodingError U+0E42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E43");
    },
    Error,
    "EncodingError U+0E43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E44");
    },
    Error,
    "EncodingError U+0E44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E45");
    },
    Error,
    "EncodingError U+0E45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E46");
    },
    Error,
    "EncodingError U+0E46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E47");
    },
    Error,
    "EncodingError U+0E47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E48");
    },
    Error,
    "EncodingError U+0E48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E49");
    },
    Error,
    "EncodingError U+0E49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E4A");
    },
    Error,
    "EncodingError U+0E4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E4B");
    },
    Error,
    "EncodingError U+0E4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E4C");
    },
    Error,
    "EncodingError U+0E4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E4D");
    },
    Error,
    "EncodingError U+0E4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E4E");
    },
    Error,
    "EncodingError U+0E4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E4F");
    },
    Error,
    "EncodingError U+0E4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E50");
    },
    Error,
    "EncodingError U+0E50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E51");
    },
    Error,
    "EncodingError U+0E51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E52");
    },
    Error,
    "EncodingError U+0E52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E53");
    },
    Error,
    "EncodingError U+0E53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E54");
    },
    Error,
    "EncodingError U+0E54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E55");
    },
    Error,
    "EncodingError U+0E55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E56");
    },
    Error,
    "EncodingError U+0E56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E57");
    },
    Error,
    "EncodingError U+0E57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E58");
    },
    Error,
    "EncodingError U+0E58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E59");
    },
    Error,
    "EncodingError U+0E59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E5A");
    },
    Error,
    "EncodingError U+0E5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E5B");
    },
    Error,
    "EncodingError U+0E5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E5C");
    },
    Error,
    "EncodingError U+0E5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E5D");
    },
    Error,
    "EncodingError U+0E5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E5E");
    },
    Error,
    "EncodingError U+0E5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E5F");
    },
    Error,
    "EncodingError U+0E5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E60");
    },
    Error,
    "EncodingError U+0E60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E61");
    },
    Error,
    "EncodingError U+0E61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E62");
    },
    Error,
    "EncodingError U+0E62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E63");
    },
    Error,
    "EncodingError U+0E63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E64");
    },
    Error,
    "EncodingError U+0E64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E65");
    },
    Error,
    "EncodingError U+0E65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E66");
    },
    Error,
    "EncodingError U+0E66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E67");
    },
    Error,
    "EncodingError U+0E67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E68");
    },
    Error,
    "EncodingError U+0E68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E69");
    },
    Error,
    "EncodingError U+0E69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E6A");
    },
    Error,
    "EncodingError U+0E6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E6B");
    },
    Error,
    "EncodingError U+0E6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E6C");
    },
    Error,
    "EncodingError U+0E6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E6D");
    },
    Error,
    "EncodingError U+0E6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E6E");
    },
    Error,
    "EncodingError U+0E6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E6F");
    },
    Error,
    "EncodingError U+0E6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E70");
    },
    Error,
    "EncodingError U+0E70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E71");
    },
    Error,
    "EncodingError U+0E71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E72");
    },
    Error,
    "EncodingError U+0E72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E73");
    },
    Error,
    "EncodingError U+0E73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E74");
    },
    Error,
    "EncodingError U+0E74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E75");
    },
    Error,
    "EncodingError U+0E75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E76");
    },
    Error,
    "EncodingError U+0E76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E77");
    },
    Error,
    "EncodingError U+0E77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E78");
    },
    Error,
    "EncodingError U+0E78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E79");
    },
    Error,
    "EncodingError U+0E79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E7A");
    },
    Error,
    "EncodingError U+0E7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E7B");
    },
    Error,
    "EncodingError U+0E7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E7C");
    },
    Error,
    "EncodingError U+0E7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E7D");
    },
    Error,
    "EncodingError U+0E7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E7E");
    },
    Error,
    "EncodingError U+0E7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E7F");
    },
    Error,
    "EncodingError U+0E7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E80");
    },
    Error,
    "EncodingError U+0E80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E81");
    },
    Error,
    "EncodingError U+0E81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E82");
    },
    Error,
    "EncodingError U+0E82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E83");
    },
    Error,
    "EncodingError U+0E83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E84");
    },
    Error,
    "EncodingError U+0E84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E85");
    },
    Error,
    "EncodingError U+0E85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E86");
    },
    Error,
    "EncodingError U+0E86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E87");
    },
    Error,
    "EncodingError U+0E87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E88");
    },
    Error,
    "EncodingError U+0E88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E89");
    },
    Error,
    "EncodingError U+0E89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E8A");
    },
    Error,
    "EncodingError U+0E8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E8B");
    },
    Error,
    "EncodingError U+0E8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E8C");
    },
    Error,
    "EncodingError U+0E8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E8D");
    },
    Error,
    "EncodingError U+0E8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E8E");
    },
    Error,
    "EncodingError U+0E8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E8F");
    },
    Error,
    "EncodingError U+0E8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E90");
    },
    Error,
    "EncodingError U+0E90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E91");
    },
    Error,
    "EncodingError U+0E91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E92");
    },
    Error,
    "EncodingError U+0E92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E93");
    },
    Error,
    "EncodingError U+0E93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E94");
    },
    Error,
    "EncodingError U+0E94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E95");
    },
    Error,
    "EncodingError U+0E95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E96");
    },
    Error,
    "EncodingError U+0E96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E97");
    },
    Error,
    "EncodingError U+0E97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E98");
    },
    Error,
    "EncodingError U+0E98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E99");
    },
    Error,
    "EncodingError U+0E99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E9A");
    },
    Error,
    "EncodingError U+0E9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E9B");
    },
    Error,
    "EncodingError U+0E9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E9C");
    },
    Error,
    "EncodingError U+0E9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E9D");
    },
    Error,
    "EncodingError U+0E9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E9E");
    },
    Error,
    "EncodingError U+0E9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E9F");
    },
    Error,
    "EncodingError U+0E9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA0");
    },
    Error,
    "EncodingError U+0EA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA1");
    },
    Error,
    "EncodingError U+0EA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA2");
    },
    Error,
    "EncodingError U+0EA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA3");
    },
    Error,
    "EncodingError U+0EA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA4");
    },
    Error,
    "EncodingError U+0EA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA5");
    },
    Error,
    "EncodingError U+0EA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA6");
    },
    Error,
    "EncodingError U+0EA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA7");
    },
    Error,
    "EncodingError U+0EA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA8");
    },
    Error,
    "EncodingError U+0EA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA9");
    },
    Error,
    "EncodingError U+0EA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EAA");
    },
    Error,
    "EncodingError U+0EAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EAB");
    },
    Error,
    "EncodingError U+0EAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EAC");
    },
    Error,
    "EncodingError U+0EAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EAD");
    },
    Error,
    "EncodingError U+0EAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EAE");
    },
    Error,
    "EncodingError U+0EAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EAF");
    },
    Error,
    "EncodingError U+0EAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB0");
    },
    Error,
    "EncodingError U+0EB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB1");
    },
    Error,
    "EncodingError U+0EB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB2");
    },
    Error,
    "EncodingError U+0EB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB3");
    },
    Error,
    "EncodingError U+0EB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB4");
    },
    Error,
    "EncodingError U+0EB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB5");
    },
    Error,
    "EncodingError U+0EB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB6");
    },
    Error,
    "EncodingError U+0EB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB7");
    },
    Error,
    "EncodingError U+0EB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB8");
    },
    Error,
    "EncodingError U+0EB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB9");
    },
    Error,
    "EncodingError U+0EB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EBA");
    },
    Error,
    "EncodingError U+0EBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EBB");
    },
    Error,
    "EncodingError U+0EBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EBC");
    },
    Error,
    "EncodingError U+0EBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EBD");
    },
    Error,
    "EncodingError U+0EBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EBE");
    },
    Error,
    "EncodingError U+0EBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EBF");
    },
    Error,
    "EncodingError U+0EBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC0");
    },
    Error,
    "EncodingError U+0EC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC1");
    },
    Error,
    "EncodingError U+0EC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC2");
    },
    Error,
    "EncodingError U+0EC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC3");
    },
    Error,
    "EncodingError U+0EC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC4");
    },
    Error,
    "EncodingError U+0EC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC5");
    },
    Error,
    "EncodingError U+0EC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC6");
    },
    Error,
    "EncodingError U+0EC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC7");
    },
    Error,
    "EncodingError U+0EC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC8");
    },
    Error,
    "EncodingError U+0EC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC9");
    },
    Error,
    "EncodingError U+0EC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ECA");
    },
    Error,
    "EncodingError U+0ECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ECB");
    },
    Error,
    "EncodingError U+0ECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ECC");
    },
    Error,
    "EncodingError U+0ECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ECD");
    },
    Error,
    "EncodingError U+0ECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ECE");
    },
    Error,
    "EncodingError U+0ECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ECF");
    },
    Error,
    "EncodingError U+0ECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED0");
    },
    Error,
    "EncodingError U+0ED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED1");
    },
    Error,
    "EncodingError U+0ED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED2");
    },
    Error,
    "EncodingError U+0ED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED3");
    },
    Error,
    "EncodingError U+0ED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED4");
    },
    Error,
    "EncodingError U+0ED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED5");
    },
    Error,
    "EncodingError U+0ED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED6");
    },
    Error,
    "EncodingError U+0ED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED7");
    },
    Error,
    "EncodingError U+0ED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED8");
    },
    Error,
    "EncodingError U+0ED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED9");
    },
    Error,
    "EncodingError U+0ED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EDA");
    },
    Error,
    "EncodingError U+0EDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EDB");
    },
    Error,
    "EncodingError U+0EDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EDC");
    },
    Error,
    "EncodingError U+0EDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EDD");
    },
    Error,
    "EncodingError U+0EDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EDE");
    },
    Error,
    "EncodingError U+0EDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EDF");
    },
    Error,
    "EncodingError U+0EDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE0");
    },
    Error,
    "EncodingError U+0EE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE1");
    },
    Error,
    "EncodingError U+0EE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE2");
    },
    Error,
    "EncodingError U+0EE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE3");
    },
    Error,
    "EncodingError U+0EE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE4");
    },
    Error,
    "EncodingError U+0EE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE5");
    },
    Error,
    "EncodingError U+0EE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE6");
    },
    Error,
    "EncodingError U+0EE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE7");
    },
    Error,
    "EncodingError U+0EE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE8");
    },
    Error,
    "EncodingError U+0EE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE9");
    },
    Error,
    "EncodingError U+0EE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EEA");
    },
    Error,
    "EncodingError U+0EEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EEB");
    },
    Error,
    "EncodingError U+0EEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EEC");
    },
    Error,
    "EncodingError U+0EEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EED");
    },
    Error,
    "EncodingError U+0EED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EEE");
    },
    Error,
    "EncodingError U+0EEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EEF");
    },
    Error,
    "EncodingError U+0EEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF0");
    },
    Error,
    "EncodingError U+0EF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF1");
    },
    Error,
    "EncodingError U+0EF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF2");
    },
    Error,
    "EncodingError U+0EF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF3");
    },
    Error,
    "EncodingError U+0EF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF4");
    },
    Error,
    "EncodingError U+0EF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF5");
    },
    Error,
    "EncodingError U+0EF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF6");
    },
    Error,
    "EncodingError U+0EF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF7");
    },
    Error,
    "EncodingError U+0EF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF8");
    },
    Error,
    "EncodingError U+0EF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF9");
    },
    Error,
    "EncodingError U+0EF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EFA");
    },
    Error,
    "EncodingError U+0EFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EFB");
    },
    Error,
    "EncodingError U+0EFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EFC");
    },
    Error,
    "EncodingError U+0EFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EFD");
    },
    Error,
    "EncodingError U+0EFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EFE");
    },
    Error,
    "EncodingError U+0EFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EFF");
    },
    Error,
    "EncodingError U+0EFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F00");
    },
    Error,
    "EncodingError U+0F00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F01");
    },
    Error,
    "EncodingError U+0F01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F02");
    },
    Error,
    "EncodingError U+0F02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F03");
    },
    Error,
    "EncodingError U+0F03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F04");
    },
    Error,
    "EncodingError U+0F04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F05");
    },
    Error,
    "EncodingError U+0F05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F06");
    },
    Error,
    "EncodingError U+0F06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F07");
    },
    Error,
    "EncodingError U+0F07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F08");
    },
    Error,
    "EncodingError U+0F08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F09");
    },
    Error,
    "EncodingError U+0F09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F0A");
    },
    Error,
    "EncodingError U+0F0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F0B");
    },
    Error,
    "EncodingError U+0F0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F0C");
    },
    Error,
    "EncodingError U+0F0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F0D");
    },
    Error,
    "EncodingError U+0F0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F0E");
    },
    Error,
    "EncodingError U+0F0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F0F");
    },
    Error,
    "EncodingError U+0F0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F10");
    },
    Error,
    "EncodingError U+0F10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F11");
    },
    Error,
    "EncodingError U+0F11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F12");
    },
    Error,
    "EncodingError U+0F12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F13");
    },
    Error,
    "EncodingError U+0F13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F14");
    },
    Error,
    "EncodingError U+0F14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F15");
    },
    Error,
    "EncodingError U+0F15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F16");
    },
    Error,
    "EncodingError U+0F16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F17");
    },
    Error,
    "EncodingError U+0F17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F18");
    },
    Error,
    "EncodingError U+0F18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F19");
    },
    Error,
    "EncodingError U+0F19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F1A");
    },
    Error,
    "EncodingError U+0F1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F1B");
    },
    Error,
    "EncodingError U+0F1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F1C");
    },
    Error,
    "EncodingError U+0F1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F1D");
    },
    Error,
    "EncodingError U+0F1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F1E");
    },
    Error,
    "EncodingError U+0F1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F1F");
    },
    Error,
    "EncodingError U+0F1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F20");
    },
    Error,
    "EncodingError U+0F20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F21");
    },
    Error,
    "EncodingError U+0F21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F22");
    },
    Error,
    "EncodingError U+0F22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F23");
    },
    Error,
    "EncodingError U+0F23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F24");
    },
    Error,
    "EncodingError U+0F24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F25");
    },
    Error,
    "EncodingError U+0F25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F26");
    },
    Error,
    "EncodingError U+0F26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F27");
    },
    Error,
    "EncodingError U+0F27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F28");
    },
    Error,
    "EncodingError U+0F28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F29");
    },
    Error,
    "EncodingError U+0F29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F2A");
    },
    Error,
    "EncodingError U+0F2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F2B");
    },
    Error,
    "EncodingError U+0F2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F2C");
    },
    Error,
    "EncodingError U+0F2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F2D");
    },
    Error,
    "EncodingError U+0F2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F2E");
    },
    Error,
    "EncodingError U+0F2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F2F");
    },
    Error,
    "EncodingError U+0F2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F30");
    },
    Error,
    "EncodingError U+0F30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F31");
    },
    Error,
    "EncodingError U+0F31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F32");
    },
    Error,
    "EncodingError U+0F32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F33");
    },
    Error,
    "EncodingError U+0F33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F34");
    },
    Error,
    "EncodingError U+0F34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F35");
    },
    Error,
    "EncodingError U+0F35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F36");
    },
    Error,
    "EncodingError U+0F36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F37");
    },
    Error,
    "EncodingError U+0F37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F38");
    },
    Error,
    "EncodingError U+0F38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F39");
    },
    Error,
    "EncodingError U+0F39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F3A");
    },
    Error,
    "EncodingError U+0F3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F3B");
    },
    Error,
    "EncodingError U+0F3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F3C");
    },
    Error,
    "EncodingError U+0F3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F3D");
    },
    Error,
    "EncodingError U+0F3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F3E");
    },
    Error,
    "EncodingError U+0F3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F3F");
    },
    Error,
    "EncodingError U+0F3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F40");
    },
    Error,
    "EncodingError U+0F40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F41");
    },
    Error,
    "EncodingError U+0F41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F42");
    },
    Error,
    "EncodingError U+0F42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F43");
    },
    Error,
    "EncodingError U+0F43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F44");
    },
    Error,
    "EncodingError U+0F44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F45");
    },
    Error,
    "EncodingError U+0F45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F46");
    },
    Error,
    "EncodingError U+0F46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F47");
    },
    Error,
    "EncodingError U+0F47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F48");
    },
    Error,
    "EncodingError U+0F48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F49");
    },
    Error,
    "EncodingError U+0F49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F4A");
    },
    Error,
    "EncodingError U+0F4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F4B");
    },
    Error,
    "EncodingError U+0F4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F4C");
    },
    Error,
    "EncodingError U+0F4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F4D");
    },
    Error,
    "EncodingError U+0F4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F4E");
    },
    Error,
    "EncodingError U+0F4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F4F");
    },
    Error,
    "EncodingError U+0F4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F50");
    },
    Error,
    "EncodingError U+0F50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F51");
    },
    Error,
    "EncodingError U+0F51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F52");
    },
    Error,
    "EncodingError U+0F52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F53");
    },
    Error,
    "EncodingError U+0F53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F54");
    },
    Error,
    "EncodingError U+0F54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F55");
    },
    Error,
    "EncodingError U+0F55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F56");
    },
    Error,
    "EncodingError U+0F56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F57");
    },
    Error,
    "EncodingError U+0F57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F58");
    },
    Error,
    "EncodingError U+0F58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F59");
    },
    Error,
    "EncodingError U+0F59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F5A");
    },
    Error,
    "EncodingError U+0F5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F5B");
    },
    Error,
    "EncodingError U+0F5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F5C");
    },
    Error,
    "EncodingError U+0F5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F5D");
    },
    Error,
    "EncodingError U+0F5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F5E");
    },
    Error,
    "EncodingError U+0F5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F5F");
    },
    Error,
    "EncodingError U+0F5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F60");
    },
    Error,
    "EncodingError U+0F60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F61");
    },
    Error,
    "EncodingError U+0F61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F62");
    },
    Error,
    "EncodingError U+0F62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F63");
    },
    Error,
    "EncodingError U+0F63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F64");
    },
    Error,
    "EncodingError U+0F64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F65");
    },
    Error,
    "EncodingError U+0F65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F66");
    },
    Error,
    "EncodingError U+0F66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F67");
    },
    Error,
    "EncodingError U+0F67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F68");
    },
    Error,
    "EncodingError U+0F68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F69");
    },
    Error,
    "EncodingError U+0F69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F6A");
    },
    Error,
    "EncodingError U+0F6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F6B");
    },
    Error,
    "EncodingError U+0F6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F6C");
    },
    Error,
    "EncodingError U+0F6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F6D");
    },
    Error,
    "EncodingError U+0F6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F6E");
    },
    Error,
    "EncodingError U+0F6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F6F");
    },
    Error,
    "EncodingError U+0F6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F70");
    },
    Error,
    "EncodingError U+0F70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F71");
    },
    Error,
    "EncodingError U+0F71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F72");
    },
    Error,
    "EncodingError U+0F72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F73");
    },
    Error,
    "EncodingError U+0F73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F74");
    },
    Error,
    "EncodingError U+0F74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F75");
    },
    Error,
    "EncodingError U+0F75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F76");
    },
    Error,
    "EncodingError U+0F76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F77");
    },
    Error,
    "EncodingError U+0F77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F78");
    },
    Error,
    "EncodingError U+0F78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F79");
    },
    Error,
    "EncodingError U+0F79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F7A");
    },
    Error,
    "EncodingError U+0F7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F7B");
    },
    Error,
    "EncodingError U+0F7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F7C");
    },
    Error,
    "EncodingError U+0F7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F7D");
    },
    Error,
    "EncodingError U+0F7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F7E");
    },
    Error,
    "EncodingError U+0F7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F7F");
    },
    Error,
    "EncodingError U+0F7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F80");
    },
    Error,
    "EncodingError U+0F80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F81");
    },
    Error,
    "EncodingError U+0F81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F82");
    },
    Error,
    "EncodingError U+0F82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F83");
    },
    Error,
    "EncodingError U+0F83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F84");
    },
    Error,
    "EncodingError U+0F84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F85");
    },
    Error,
    "EncodingError U+0F85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F86");
    },
    Error,
    "EncodingError U+0F86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F87");
    },
    Error,
    "EncodingError U+0F87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F88");
    },
    Error,
    "EncodingError U+0F88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F89");
    },
    Error,
    "EncodingError U+0F89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F8A");
    },
    Error,
    "EncodingError U+0F8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F8B");
    },
    Error,
    "EncodingError U+0F8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F8C");
    },
    Error,
    "EncodingError U+0F8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F8D");
    },
    Error,
    "EncodingError U+0F8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F8E");
    },
    Error,
    "EncodingError U+0F8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F8F");
    },
    Error,
    "EncodingError U+0F8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F90");
    },
    Error,
    "EncodingError U+0F90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F91");
    },
    Error,
    "EncodingError U+0F91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F92");
    },
    Error,
    "EncodingError U+0F92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F93");
    },
    Error,
    "EncodingError U+0F93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F94");
    },
    Error,
    "EncodingError U+0F94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F95");
    },
    Error,
    "EncodingError U+0F95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F96");
    },
    Error,
    "EncodingError U+0F96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F97");
    },
    Error,
    "EncodingError U+0F97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F98");
    },
    Error,
    "EncodingError U+0F98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F99");
    },
    Error,
    "EncodingError U+0F99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F9A");
    },
    Error,
    "EncodingError U+0F9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F9B");
    },
    Error,
    "EncodingError U+0F9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F9C");
    },
    Error,
    "EncodingError U+0F9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F9D");
    },
    Error,
    "EncodingError U+0F9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F9E");
    },
    Error,
    "EncodingError U+0F9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F9F");
    },
    Error,
    "EncodingError U+0F9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA0");
    },
    Error,
    "EncodingError U+0FA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA1");
    },
    Error,
    "EncodingError U+0FA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA2");
    },
    Error,
    "EncodingError U+0FA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA3");
    },
    Error,
    "EncodingError U+0FA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA4");
    },
    Error,
    "EncodingError U+0FA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA5");
    },
    Error,
    "EncodingError U+0FA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA6");
    },
    Error,
    "EncodingError U+0FA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA7");
    },
    Error,
    "EncodingError U+0FA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA8");
    },
    Error,
    "EncodingError U+0FA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA9");
    },
    Error,
    "EncodingError U+0FA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FAA");
    },
    Error,
    "EncodingError U+0FAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FAB");
    },
    Error,
    "EncodingError U+0FAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FAC");
    },
    Error,
    "EncodingError U+0FAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FAD");
    },
    Error,
    "EncodingError U+0FAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FAE");
    },
    Error,
    "EncodingError U+0FAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FAF");
    },
    Error,
    "EncodingError U+0FAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB0");
    },
    Error,
    "EncodingError U+0FB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB1");
    },
    Error,
    "EncodingError U+0FB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB2");
    },
    Error,
    "EncodingError U+0FB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB3");
    },
    Error,
    "EncodingError U+0FB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB4");
    },
    Error,
    "EncodingError U+0FB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB5");
    },
    Error,
    "EncodingError U+0FB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB6");
    },
    Error,
    "EncodingError U+0FB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB7");
    },
    Error,
    "EncodingError U+0FB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB8");
    },
    Error,
    "EncodingError U+0FB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB9");
    },
    Error,
    "EncodingError U+0FB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FBA");
    },
    Error,
    "EncodingError U+0FBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FBB");
    },
    Error,
    "EncodingError U+0FBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FBC");
    },
    Error,
    "EncodingError U+0FBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FBD");
    },
    Error,
    "EncodingError U+0FBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FBE");
    },
    Error,
    "EncodingError U+0FBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FBF");
    },
    Error,
    "EncodingError U+0FBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC0");
    },
    Error,
    "EncodingError U+0FC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC1");
    },
    Error,
    "EncodingError U+0FC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC2");
    },
    Error,
    "EncodingError U+0FC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC3");
    },
    Error,
    "EncodingError U+0FC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC4");
    },
    Error,
    "EncodingError U+0FC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC5");
    },
    Error,
    "EncodingError U+0FC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC6");
    },
    Error,
    "EncodingError U+0FC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC7");
    },
    Error,
    "EncodingError U+0FC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC8");
    },
    Error,
    "EncodingError U+0FC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC9");
    },
    Error,
    "EncodingError U+0FC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FCA");
    },
    Error,
    "EncodingError U+0FCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FCB");
    },
    Error,
    "EncodingError U+0FCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FCC");
    },
    Error,
    "EncodingError U+0FCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FCD");
    },
    Error,
    "EncodingError U+0FCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FCE");
    },
    Error,
    "EncodingError U+0FCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FCF");
    },
    Error,
    "EncodingError U+0FCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD0");
    },
    Error,
    "EncodingError U+0FD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD1");
    },
    Error,
    "EncodingError U+0FD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD2");
    },
    Error,
    "EncodingError U+0FD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD3");
    },
    Error,
    "EncodingError U+0FD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD4");
    },
    Error,
    "EncodingError U+0FD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD5");
    },
    Error,
    "EncodingError U+0FD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD6");
    },
    Error,
    "EncodingError U+0FD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD7");
    },
    Error,
    "EncodingError U+0FD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD8");
    },
    Error,
    "EncodingError U+0FD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD9");
    },
    Error,
    "EncodingError U+0FD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FDA");
    },
    Error,
    "EncodingError U+0FDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FDB");
    },
    Error,
    "EncodingError U+0FDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FDC");
    },
    Error,
    "EncodingError U+0FDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FDD");
    },
    Error,
    "EncodingError U+0FDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FDE");
    },
    Error,
    "EncodingError U+0FDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FDF");
    },
    Error,
    "EncodingError U+0FDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE0");
    },
    Error,
    "EncodingError U+0FE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE1");
    },
    Error,
    "EncodingError U+0FE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE2");
    },
    Error,
    "EncodingError U+0FE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE3");
    },
    Error,
    "EncodingError U+0FE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE4");
    },
    Error,
    "EncodingError U+0FE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE5");
    },
    Error,
    "EncodingError U+0FE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE6");
    },
    Error,
    "EncodingError U+0FE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE7");
    },
    Error,
    "EncodingError U+0FE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE8");
    },
    Error,
    "EncodingError U+0FE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE9");
    },
    Error,
    "EncodingError U+0FE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FEA");
    },
    Error,
    "EncodingError U+0FEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FEB");
    },
    Error,
    "EncodingError U+0FEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FEC");
    },
    Error,
    "EncodingError U+0FEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FED");
    },
    Error,
    "EncodingError U+0FED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FEE");
    },
    Error,
    "EncodingError U+0FEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FEF");
    },
    Error,
    "EncodingError U+0FEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF0");
    },
    Error,
    "EncodingError U+0FF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF1");
    },
    Error,
    "EncodingError U+0FF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF2");
    },
    Error,
    "EncodingError U+0FF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF3");
    },
    Error,
    "EncodingError U+0FF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF4");
    },
    Error,
    "EncodingError U+0FF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF5");
    },
    Error,
    "EncodingError U+0FF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF6");
    },
    Error,
    "EncodingError U+0FF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF7");
    },
    Error,
    "EncodingError U+0FF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF8");
    },
    Error,
    "EncodingError U+0FF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF9");
    },
    Error,
    "EncodingError U+0FF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FFA");
    },
    Error,
    "EncodingError U+0FFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FFB");
    },
    Error,
    "EncodingError U+0FFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FFC");
    },
    Error,
    "EncodingError U+0FFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FFD");
    },
    Error,
    "EncodingError U+0FFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FFE");
    },
    Error,
    "EncodingError U+0FFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FFF");
    },
    Error,
    "EncodingError U+0FFF",
  );

  assertStrictEquals(r, true);
});
