import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string, Object)", () => {
  // fallback
  const ms932Encoder1 = new Ms932.Encoder({ fatal: true });
  assertThrows(
    () => {
      ms932Encoder1.encode("\u0081");
    },
    Error,
    "encode-error: U+0081",
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
    "encode-error: U+0081",
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
    "encode-error: U+0081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0082");
    },
    Error,
    "encode-error: U+0082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0083");
    },
    Error,
    "encode-error: U+0083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0084");
    },
    Error,
    "encode-error: U+0084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0085");
    },
    Error,
    "encode-error: U+0085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0086");
    },
    Error,
    "encode-error: U+0086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0087");
    },
    Error,
    "encode-error: U+0087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0088");
    },
    Error,
    "encode-error: U+0088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0089");
    },
    Error,
    "encode-error: U+0089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u008A");
    },
    Error,
    "encode-error: U+008A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u008B");
    },
    Error,
    "encode-error: U+008B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u008C");
    },
    Error,
    "encode-error: U+008C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u008D");
    },
    Error,
    "encode-error: U+008D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u008E");
    },
    Error,
    "encode-error: U+008E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u008F");
    },
    Error,
    "encode-error: U+008F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0090");
    },
    Error,
    "encode-error: U+0090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0091");
    },
    Error,
    "encode-error: U+0091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0092");
    },
    Error,
    "encode-error: U+0092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0093");
    },
    Error,
    "encode-error: U+0093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0094");
    },
    Error,
    "encode-error: U+0094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0095");
    },
    Error,
    "encode-error: U+0095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0096");
    },
    Error,
    "encode-error: U+0096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0097");
    },
    Error,
    "encode-error: U+0097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0098");
    },
    Error,
    "encode-error: U+0098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0099");
    },
    Error,
    "encode-error: U+0099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u009A");
    },
    Error,
    "encode-error: U+009A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u009B");
    },
    Error,
    "encode-error: U+009B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u009C");
    },
    Error,
    "encode-error: U+009C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u009D");
    },
    Error,
    "encode-error: U+009D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u009E");
    },
    Error,
    "encode-error: U+009E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u009F");
    },
    Error,
    "encode-error: U+009F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A0");
    },
    Error,
    "encode-error: U+00A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A1");
    },
    Error,
    "encode-error: U+00A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A2");
    },
    Error,
    "encode-error: U+00A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A3");
    },
    Error,
    "encode-error: U+00A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A4");
    },
    Error,
    "encode-error: U+00A4",
  );
  r = r && ([...ms932Encoder.encode("\u00A5")].join(",") === "92"); // U+00A5 -> 5C
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A6");
    },
    Error,
    "encode-error: U+00A6",
  );
  r = r && ([...ms932Encoder.encode("§¨")].join(",") === "129,152,129,78"); // U+00A7
  assertThrows(
    () => {
      ms932Encoder.encode("\u00A9");
    },
    Error,
    "encode-error: U+00A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00AA");
    },
    Error,
    "encode-error: U+00AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00AB");
    },
    Error,
    "encode-error: U+00AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00AC");
    },
    Error,
    "encode-error: U+00AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00AD");
    },
    Error,
    "encode-error: U+00AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00AE");
    },
    Error,
    "encode-error: U+00AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00AF");
    },
    Error,
    "encode-error: U+00AF",
  );
  r = r && ([...ms932Encoder.encode("°±")].join(",") === "129,139,129,125"); // U+00B0
  assertThrows(
    () => {
      ms932Encoder.encode("\u00B2");
    },
    Error,
    "encode-error: U+00B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00B3");
    },
    Error,
    "encode-error: U+00B3",
  );
  r = r && ([...ms932Encoder.encode("´")].join(",") === "129,76"); // U+00B4
  assertThrows(
    () => {
      ms932Encoder.encode("\u00B5");
    },
    Error,
    "encode-error: U+00B5",
  );
  r = r && ([...ms932Encoder.encode("¶")].join(",") === "129,247"); // U+00B6
  assertThrows(
    () => {
      ms932Encoder.encode("\u00B7");
    },
    Error,
    "encode-error: U+00B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00B8");
    },
    Error,
    "encode-error: U+00B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00B9");
    },
    Error,
    "encode-error: U+00B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00BA");
    },
    Error,
    "encode-error: U+00BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00BB");
    },
    Error,
    "encode-error: U+00BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00BC");
    },
    Error,
    "encode-error: U+00BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00BD");
    },
    Error,
    "encode-error: U+00BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00BE");
    },
    Error,
    "encode-error: U+00BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00BF");
    },
    Error,
    "encode-error: U+00BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C0");
    },
    Error,
    "encode-error: U+00C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C1");
    },
    Error,
    "encode-error: U+00C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C2");
    },
    Error,
    "encode-error: U+00C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C3");
    },
    Error,
    "encode-error: U+00C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C4");
    },
    Error,
    "encode-error: U+00C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C5");
    },
    Error,
    "encode-error: U+00C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C6");
    },
    Error,
    "encode-error: U+00C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C7");
    },
    Error,
    "encode-error: U+00C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C8");
    },
    Error,
    "encode-error: U+00C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00C9");
    },
    Error,
    "encode-error: U+00C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00CA");
    },
    Error,
    "encode-error: U+00CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00CB");
    },
    Error,
    "encode-error: U+00CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00CC");
    },
    Error,
    "encode-error: U+00CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00CD");
    },
    Error,
    "encode-error: U+00CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00CE");
    },
    Error,
    "encode-error: U+00CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00CF");
    },
    Error,
    "encode-error: U+00CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D0");
    },
    Error,
    "encode-error: U+00D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D1");
    },
    Error,
    "encode-error: U+00D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D2");
    },
    Error,
    "encode-error: U+00D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D3");
    },
    Error,
    "encode-error: U+00D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D4");
    },
    Error,
    "encode-error: U+00D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D5");
    },
    Error,
    "encode-error: U+00D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D6");
    },
    Error,
    "encode-error: U+00D6",
  );
  r = r && ([...ms932Encoder.encode("×")].join(",") === "129,126"); // U+00D7
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D8");
    },
    Error,
    "encode-error: U+00D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00D9");
    },
    Error,
    "encode-error: U+00D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00DA");
    },
    Error,
    "encode-error: U+00DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00DB");
    },
    Error,
    "encode-error: U+00DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00DC");
    },
    Error,
    "encode-error: U+00DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00DD");
    },
    Error,
    "encode-error: U+00DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00DE");
    },
    Error,
    "encode-error: U+00DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00DF");
    },
    Error,
    "encode-error: U+00DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E0");
    },
    Error,
    "encode-error: U+00E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E1");
    },
    Error,
    "encode-error: U+00E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E2");
    },
    Error,
    "encode-error: U+00E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E3");
    },
    Error,
    "encode-error: U+00E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E4");
    },
    Error,
    "encode-error: U+00E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E5");
    },
    Error,
    "encode-error: U+00E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E6");
    },
    Error,
    "encode-error: U+00E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E7");
    },
    Error,
    "encode-error: U+00E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E8");
    },
    Error,
    "encode-error: U+00E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00E9");
    },
    Error,
    "encode-error: U+00E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00EA");
    },
    Error,
    "encode-error: U+00EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00EB");
    },
    Error,
    "encode-error: U+00EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00EC");
    },
    Error,
    "encode-error: U+00EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00ED");
    },
    Error,
    "encode-error: U+00ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00EE");
    },
    Error,
    "encode-error: U+00EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00EF");
    },
    Error,
    "encode-error: U+00EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F0");
    },
    Error,
    "encode-error: U+00F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F1");
    },
    Error,
    "encode-error: U+00F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F2");
    },
    Error,
    "encode-error: U+00F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F3");
    },
    Error,
    "encode-error: U+00F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F4");
    },
    Error,
    "encode-error: U+00F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F5");
    },
    Error,
    "encode-error: U+00F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F6");
    },
    Error,
    "encode-error: U+00F6",
  );
  r = r && ([...ms932Encoder.encode("÷")].join(",") === "129,128"); // U+00F7
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F8");
    },
    Error,
    "encode-error: U+00F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00F9");
    },
    Error,
    "encode-error: U+00F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00FA");
    },
    Error,
    "encode-error: U+00FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00FB");
    },
    Error,
    "encode-error: U+00FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00FC");
    },
    Error,
    "encode-error: U+00FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00FD");
    },
    Error,
    "encode-error: U+00FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00FE");
    },
    Error,
    "encode-error: U+00FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u00FF");
    },
    Error,
    "encode-error: U+00FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0100");
    },
    Error,
    "encode-error: U+0100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0101");
    },
    Error,
    "encode-error: U+0101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0102");
    },
    Error,
    "encode-error: U+0102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0103");
    },
    Error,
    "encode-error: U+0103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0104");
    },
    Error,
    "encode-error: U+0104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0105");
    },
    Error,
    "encode-error: U+0105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0106");
    },
    Error,
    "encode-error: U+0106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0107");
    },
    Error,
    "encode-error: U+0107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0108");
    },
    Error,
    "encode-error: U+0108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0109");
    },
    Error,
    "encode-error: U+0109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u010A");
    },
    Error,
    "encode-error: U+010A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u010B");
    },
    Error,
    "encode-error: U+010B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u010C");
    },
    Error,
    "encode-error: U+010C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u010D");
    },
    Error,
    "encode-error: U+010D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u010E");
    },
    Error,
    "encode-error: U+010E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u010F");
    },
    Error,
    "encode-error: U+010F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0110");
    },
    Error,
    "encode-error: U+0110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0111");
    },
    Error,
    "encode-error: U+0111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0112");
    },
    Error,
    "encode-error: U+0112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0113");
    },
    Error,
    "encode-error: U+0113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0114");
    },
    Error,
    "encode-error: U+0114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0115");
    },
    Error,
    "encode-error: U+0115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0116");
    },
    Error,
    "encode-error: U+0116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0117");
    },
    Error,
    "encode-error: U+0117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0118");
    },
    Error,
    "encode-error: U+0118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0119");
    },
    Error,
    "encode-error: U+0119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u011A");
    },
    Error,
    "encode-error: U+011A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u011B");
    },
    Error,
    "encode-error: U+011B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u011C");
    },
    Error,
    "encode-error: U+011C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u011D");
    },
    Error,
    "encode-error: U+011D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u011E");
    },
    Error,
    "encode-error: U+011E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u011F");
    },
    Error,
    "encode-error: U+011F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0120");
    },
    Error,
    "encode-error: U+0120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0121");
    },
    Error,
    "encode-error: U+0121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0122");
    },
    Error,
    "encode-error: U+0122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0123");
    },
    Error,
    "encode-error: U+0123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0124");
    },
    Error,
    "encode-error: U+0124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0125");
    },
    Error,
    "encode-error: U+0125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0126");
    },
    Error,
    "encode-error: U+0126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0127");
    },
    Error,
    "encode-error: U+0127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0128");
    },
    Error,
    "encode-error: U+0128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0129");
    },
    Error,
    "encode-error: U+0129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u012A");
    },
    Error,
    "encode-error: U+012A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u012B");
    },
    Error,
    "encode-error: U+012B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u012C");
    },
    Error,
    "encode-error: U+012C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u012D");
    },
    Error,
    "encode-error: U+012D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u012E");
    },
    Error,
    "encode-error: U+012E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u012F");
    },
    Error,
    "encode-error: U+012F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0130");
    },
    Error,
    "encode-error: U+0130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0131");
    },
    Error,
    "encode-error: U+0131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0132");
    },
    Error,
    "encode-error: U+0132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0133");
    },
    Error,
    "encode-error: U+0133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0134");
    },
    Error,
    "encode-error: U+0134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0135");
    },
    Error,
    "encode-error: U+0135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0136");
    },
    Error,
    "encode-error: U+0136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0137");
    },
    Error,
    "encode-error: U+0137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0138");
    },
    Error,
    "encode-error: U+0138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0139");
    },
    Error,
    "encode-error: U+0139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u013A");
    },
    Error,
    "encode-error: U+013A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u013B");
    },
    Error,
    "encode-error: U+013B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u013C");
    },
    Error,
    "encode-error: U+013C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u013D");
    },
    Error,
    "encode-error: U+013D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u013E");
    },
    Error,
    "encode-error: U+013E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u013F");
    },
    Error,
    "encode-error: U+013F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0140");
    },
    Error,
    "encode-error: U+0140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0141");
    },
    Error,
    "encode-error: U+0141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0142");
    },
    Error,
    "encode-error: U+0142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0143");
    },
    Error,
    "encode-error: U+0143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0144");
    },
    Error,
    "encode-error: U+0144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0145");
    },
    Error,
    "encode-error: U+0145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0146");
    },
    Error,
    "encode-error: U+0146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0147");
    },
    Error,
    "encode-error: U+0147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0148");
    },
    Error,
    "encode-error: U+0148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0149");
    },
    Error,
    "encode-error: U+0149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u014A");
    },
    Error,
    "encode-error: U+014A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u014B");
    },
    Error,
    "encode-error: U+014B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u014C");
    },
    Error,
    "encode-error: U+014C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u014D");
    },
    Error,
    "encode-error: U+014D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u014E");
    },
    Error,
    "encode-error: U+014E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u014F");
    },
    Error,
    "encode-error: U+014F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0150");
    },
    Error,
    "encode-error: U+0150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0151");
    },
    Error,
    "encode-error: U+0151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0152");
    },
    Error,
    "encode-error: U+0152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0153");
    },
    Error,
    "encode-error: U+0153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0154");
    },
    Error,
    "encode-error: U+0154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0155");
    },
    Error,
    "encode-error: U+0155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0156");
    },
    Error,
    "encode-error: U+0156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0157");
    },
    Error,
    "encode-error: U+0157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0158");
    },
    Error,
    "encode-error: U+0158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0159");
    },
    Error,
    "encode-error: U+0159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u015A");
    },
    Error,
    "encode-error: U+015A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u015B");
    },
    Error,
    "encode-error: U+015B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u015C");
    },
    Error,
    "encode-error: U+015C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u015D");
    },
    Error,
    "encode-error: U+015D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u015E");
    },
    Error,
    "encode-error: U+015E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u015F");
    },
    Error,
    "encode-error: U+015F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0160");
    },
    Error,
    "encode-error: U+0160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0161");
    },
    Error,
    "encode-error: U+0161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0162");
    },
    Error,
    "encode-error: U+0162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0163");
    },
    Error,
    "encode-error: U+0163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0164");
    },
    Error,
    "encode-error: U+0164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0165");
    },
    Error,
    "encode-error: U+0165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0166");
    },
    Error,
    "encode-error: U+0166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0167");
    },
    Error,
    "encode-error: U+0167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0168");
    },
    Error,
    "encode-error: U+0168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0169");
    },
    Error,
    "encode-error: U+0169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u016A");
    },
    Error,
    "encode-error: U+016A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u016B");
    },
    Error,
    "encode-error: U+016B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u016C");
    },
    Error,
    "encode-error: U+016C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u016D");
    },
    Error,
    "encode-error: U+016D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u016E");
    },
    Error,
    "encode-error: U+016E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u016F");
    },
    Error,
    "encode-error: U+016F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0170");
    },
    Error,
    "encode-error: U+0170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0171");
    },
    Error,
    "encode-error: U+0171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0172");
    },
    Error,
    "encode-error: U+0172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0173");
    },
    Error,
    "encode-error: U+0173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0174");
    },
    Error,
    "encode-error: U+0174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0175");
    },
    Error,
    "encode-error: U+0175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0176");
    },
    Error,
    "encode-error: U+0176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0177");
    },
    Error,
    "encode-error: U+0177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0178");
    },
    Error,
    "encode-error: U+0178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0179");
    },
    Error,
    "encode-error: U+0179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u017A");
    },
    Error,
    "encode-error: U+017A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u017B");
    },
    Error,
    "encode-error: U+017B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u017C");
    },
    Error,
    "encode-error: U+017C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u017D");
    },
    Error,
    "encode-error: U+017D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u017E");
    },
    Error,
    "encode-error: U+017E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u017F");
    },
    Error,
    "encode-error: U+017F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0180");
    },
    Error,
    "encode-error: U+0180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0181");
    },
    Error,
    "encode-error: U+0181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0182");
    },
    Error,
    "encode-error: U+0182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0183");
    },
    Error,
    "encode-error: U+0183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0184");
    },
    Error,
    "encode-error: U+0184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0185");
    },
    Error,
    "encode-error: U+0185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0186");
    },
    Error,
    "encode-error: U+0186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0187");
    },
    Error,
    "encode-error: U+0187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0188");
    },
    Error,
    "encode-error: U+0188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0189");
    },
    Error,
    "encode-error: U+0189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u018A");
    },
    Error,
    "encode-error: U+018A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u018B");
    },
    Error,
    "encode-error: U+018B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u018C");
    },
    Error,
    "encode-error: U+018C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u018D");
    },
    Error,
    "encode-error: U+018D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u018E");
    },
    Error,
    "encode-error: U+018E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u018F");
    },
    Error,
    "encode-error: U+018F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0190");
    },
    Error,
    "encode-error: U+0190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0191");
    },
    Error,
    "encode-error: U+0191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0192");
    },
    Error,
    "encode-error: U+0192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0193");
    },
    Error,
    "encode-error: U+0193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0194");
    },
    Error,
    "encode-error: U+0194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0195");
    },
    Error,
    "encode-error: U+0195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0196");
    },
    Error,
    "encode-error: U+0196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0197");
    },
    Error,
    "encode-error: U+0197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0198");
    },
    Error,
    "encode-error: U+0198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0199");
    },
    Error,
    "encode-error: U+0199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u019A");
    },
    Error,
    "encode-error: U+019A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u019B");
    },
    Error,
    "encode-error: U+019B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u019C");
    },
    Error,
    "encode-error: U+019C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u019D");
    },
    Error,
    "encode-error: U+019D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u019E");
    },
    Error,
    "encode-error: U+019E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u019F");
    },
    Error,
    "encode-error: U+019F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A0");
    },
    Error,
    "encode-error: U+01A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A1");
    },
    Error,
    "encode-error: U+01A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A2");
    },
    Error,
    "encode-error: U+01A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A3");
    },
    Error,
    "encode-error: U+01A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A4");
    },
    Error,
    "encode-error: U+01A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A5");
    },
    Error,
    "encode-error: U+01A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A6");
    },
    Error,
    "encode-error: U+01A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A7");
    },
    Error,
    "encode-error: U+01A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A8");
    },
    Error,
    "encode-error: U+01A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01A9");
    },
    Error,
    "encode-error: U+01A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01AA");
    },
    Error,
    "encode-error: U+01AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01AB");
    },
    Error,
    "encode-error: U+01AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01AC");
    },
    Error,
    "encode-error: U+01AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01AD");
    },
    Error,
    "encode-error: U+01AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01AE");
    },
    Error,
    "encode-error: U+01AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01AF");
    },
    Error,
    "encode-error: U+01AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B0");
    },
    Error,
    "encode-error: U+01B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B1");
    },
    Error,
    "encode-error: U+01B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B2");
    },
    Error,
    "encode-error: U+01B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B3");
    },
    Error,
    "encode-error: U+01B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B4");
    },
    Error,
    "encode-error: U+01B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B5");
    },
    Error,
    "encode-error: U+01B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B6");
    },
    Error,
    "encode-error: U+01B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B7");
    },
    Error,
    "encode-error: U+01B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B8");
    },
    Error,
    "encode-error: U+01B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01B9");
    },
    Error,
    "encode-error: U+01B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01BA");
    },
    Error,
    "encode-error: U+01BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01BB");
    },
    Error,
    "encode-error: U+01BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01BC");
    },
    Error,
    "encode-error: U+01BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01BD");
    },
    Error,
    "encode-error: U+01BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01BE");
    },
    Error,
    "encode-error: U+01BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01BF");
    },
    Error,
    "encode-error: U+01BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C0");
    },
    Error,
    "encode-error: U+01C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C1");
    },
    Error,
    "encode-error: U+01C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C2");
    },
    Error,
    "encode-error: U+01C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C3");
    },
    Error,
    "encode-error: U+01C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C4");
    },
    Error,
    "encode-error: U+01C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C5");
    },
    Error,
    "encode-error: U+01C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C6");
    },
    Error,
    "encode-error: U+01C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C7");
    },
    Error,
    "encode-error: U+01C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C8");
    },
    Error,
    "encode-error: U+01C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01C9");
    },
    Error,
    "encode-error: U+01C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01CA");
    },
    Error,
    "encode-error: U+01CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01CB");
    },
    Error,
    "encode-error: U+01CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01CC");
    },
    Error,
    "encode-error: U+01CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01CD");
    },
    Error,
    "encode-error: U+01CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01CE");
    },
    Error,
    "encode-error: U+01CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01CF");
    },
    Error,
    "encode-error: U+01CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D0");
    },
    Error,
    "encode-error: U+01D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D1");
    },
    Error,
    "encode-error: U+01D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D2");
    },
    Error,
    "encode-error: U+01D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D3");
    },
    Error,
    "encode-error: U+01D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D4");
    },
    Error,
    "encode-error: U+01D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D5");
    },
    Error,
    "encode-error: U+01D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D6");
    },
    Error,
    "encode-error: U+01D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D7");
    },
    Error,
    "encode-error: U+01D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D8");
    },
    Error,
    "encode-error: U+01D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01D9");
    },
    Error,
    "encode-error: U+01D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01DA");
    },
    Error,
    "encode-error: U+01DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01DB");
    },
    Error,
    "encode-error: U+01DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01DC");
    },
    Error,
    "encode-error: U+01DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01DD");
    },
    Error,
    "encode-error: U+01DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01DE");
    },
    Error,
    "encode-error: U+01DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01DF");
    },
    Error,
    "encode-error: U+01DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E0");
    },
    Error,
    "encode-error: U+01E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E1");
    },
    Error,
    "encode-error: U+01E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E2");
    },
    Error,
    "encode-error: U+01E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E3");
    },
    Error,
    "encode-error: U+01E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E4");
    },
    Error,
    "encode-error: U+01E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E5");
    },
    Error,
    "encode-error: U+01E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E6");
    },
    Error,
    "encode-error: U+01E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E7");
    },
    Error,
    "encode-error: U+01E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E8");
    },
    Error,
    "encode-error: U+01E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01E9");
    },
    Error,
    "encode-error: U+01E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01EA");
    },
    Error,
    "encode-error: U+01EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01EB");
    },
    Error,
    "encode-error: U+01EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01EC");
    },
    Error,
    "encode-error: U+01EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01ED");
    },
    Error,
    "encode-error: U+01ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01EE");
    },
    Error,
    "encode-error: U+01EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01EF");
    },
    Error,
    "encode-error: U+01EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F0");
    },
    Error,
    "encode-error: U+01F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F1");
    },
    Error,
    "encode-error: U+01F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F2");
    },
    Error,
    "encode-error: U+01F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F3");
    },
    Error,
    "encode-error: U+01F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F4");
    },
    Error,
    "encode-error: U+01F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F5");
    },
    Error,
    "encode-error: U+01F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F6");
    },
    Error,
    "encode-error: U+01F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F7");
    },
    Error,
    "encode-error: U+01F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F8");
    },
    Error,
    "encode-error: U+01F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01F9");
    },
    Error,
    "encode-error: U+01F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01FA");
    },
    Error,
    "encode-error: U+01FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01FB");
    },
    Error,
    "encode-error: U+01FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01FC");
    },
    Error,
    "encode-error: U+01FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01FD");
    },
    Error,
    "encode-error: U+01FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01FE");
    },
    Error,
    "encode-error: U+01FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u01FF");
    },
    Error,
    "encode-error: U+01FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0200");
    },
    Error,
    "encode-error: U+0200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0201");
    },
    Error,
    "encode-error: U+0201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0202");
    },
    Error,
    "encode-error: U+0202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0203");
    },
    Error,
    "encode-error: U+0203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0204");
    },
    Error,
    "encode-error: U+0204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0205");
    },
    Error,
    "encode-error: U+0205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0206");
    },
    Error,
    "encode-error: U+0206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0207");
    },
    Error,
    "encode-error: U+0207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0208");
    },
    Error,
    "encode-error: U+0208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0209");
    },
    Error,
    "encode-error: U+0209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u020A");
    },
    Error,
    "encode-error: U+020A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u020B");
    },
    Error,
    "encode-error: U+020B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u020C");
    },
    Error,
    "encode-error: U+020C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u020D");
    },
    Error,
    "encode-error: U+020D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u020E");
    },
    Error,
    "encode-error: U+020E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u020F");
    },
    Error,
    "encode-error: U+020F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0210");
    },
    Error,
    "encode-error: U+0210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0211");
    },
    Error,
    "encode-error: U+0211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0212");
    },
    Error,
    "encode-error: U+0212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0213");
    },
    Error,
    "encode-error: U+0213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0214");
    },
    Error,
    "encode-error: U+0214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0215");
    },
    Error,
    "encode-error: U+0215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0216");
    },
    Error,
    "encode-error: U+0216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0217");
    },
    Error,
    "encode-error: U+0217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0218");
    },
    Error,
    "encode-error: U+0218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0219");
    },
    Error,
    "encode-error: U+0219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u021A");
    },
    Error,
    "encode-error: U+021A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u021B");
    },
    Error,
    "encode-error: U+021B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u021C");
    },
    Error,
    "encode-error: U+021C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u021D");
    },
    Error,
    "encode-error: U+021D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u021E");
    },
    Error,
    "encode-error: U+021E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u021F");
    },
    Error,
    "encode-error: U+021F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0220");
    },
    Error,
    "encode-error: U+0220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0221");
    },
    Error,
    "encode-error: U+0221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0222");
    },
    Error,
    "encode-error: U+0222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0223");
    },
    Error,
    "encode-error: U+0223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0224");
    },
    Error,
    "encode-error: U+0224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0225");
    },
    Error,
    "encode-error: U+0225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0226");
    },
    Error,
    "encode-error: U+0226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0227");
    },
    Error,
    "encode-error: U+0227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0228");
    },
    Error,
    "encode-error: U+0228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0229");
    },
    Error,
    "encode-error: U+0229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u022A");
    },
    Error,
    "encode-error: U+022A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u022B");
    },
    Error,
    "encode-error: U+022B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u022C");
    },
    Error,
    "encode-error: U+022C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u022D");
    },
    Error,
    "encode-error: U+022D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u022E");
    },
    Error,
    "encode-error: U+022E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u022F");
    },
    Error,
    "encode-error: U+022F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0230");
    },
    Error,
    "encode-error: U+0230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0231");
    },
    Error,
    "encode-error: U+0231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0232");
    },
    Error,
    "encode-error: U+0232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0233");
    },
    Error,
    "encode-error: U+0233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0234");
    },
    Error,
    "encode-error: U+0234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0235");
    },
    Error,
    "encode-error: U+0235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0236");
    },
    Error,
    "encode-error: U+0236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0237");
    },
    Error,
    "encode-error: U+0237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0238");
    },
    Error,
    "encode-error: U+0238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0239");
    },
    Error,
    "encode-error: U+0239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u023A");
    },
    Error,
    "encode-error: U+023A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u023B");
    },
    Error,
    "encode-error: U+023B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u023C");
    },
    Error,
    "encode-error: U+023C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u023D");
    },
    Error,
    "encode-error: U+023D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u023E");
    },
    Error,
    "encode-error: U+023E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u023F");
    },
    Error,
    "encode-error: U+023F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0240");
    },
    Error,
    "encode-error: U+0240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0241");
    },
    Error,
    "encode-error: U+0241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0242");
    },
    Error,
    "encode-error: U+0242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0243");
    },
    Error,
    "encode-error: U+0243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0244");
    },
    Error,
    "encode-error: U+0244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0245");
    },
    Error,
    "encode-error: U+0245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0246");
    },
    Error,
    "encode-error: U+0246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0247");
    },
    Error,
    "encode-error: U+0247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0248");
    },
    Error,
    "encode-error: U+0248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0249");
    },
    Error,
    "encode-error: U+0249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u024A");
    },
    Error,
    "encode-error: U+024A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u024B");
    },
    Error,
    "encode-error: U+024B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u024C");
    },
    Error,
    "encode-error: U+024C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u024D");
    },
    Error,
    "encode-error: U+024D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u024E");
    },
    Error,
    "encode-error: U+024E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u024F");
    },
    Error,
    "encode-error: U+024F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0250");
    },
    Error,
    "encode-error: U+0250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0251");
    },
    Error,
    "encode-error: U+0251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0252");
    },
    Error,
    "encode-error: U+0252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0253");
    },
    Error,
    "encode-error: U+0253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0254");
    },
    Error,
    "encode-error: U+0254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0255");
    },
    Error,
    "encode-error: U+0255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0256");
    },
    Error,
    "encode-error: U+0256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0257");
    },
    Error,
    "encode-error: U+0257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0258");
    },
    Error,
    "encode-error: U+0258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0259");
    },
    Error,
    "encode-error: U+0259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u025A");
    },
    Error,
    "encode-error: U+025A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u025B");
    },
    Error,
    "encode-error: U+025B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u025C");
    },
    Error,
    "encode-error: U+025C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u025D");
    },
    Error,
    "encode-error: U+025D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u025E");
    },
    Error,
    "encode-error: U+025E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u025F");
    },
    Error,
    "encode-error: U+025F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0260");
    },
    Error,
    "encode-error: U+0260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0261");
    },
    Error,
    "encode-error: U+0261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0262");
    },
    Error,
    "encode-error: U+0262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0263");
    },
    Error,
    "encode-error: U+0263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0264");
    },
    Error,
    "encode-error: U+0264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0265");
    },
    Error,
    "encode-error: U+0265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0266");
    },
    Error,
    "encode-error: U+0266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0267");
    },
    Error,
    "encode-error: U+0267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0268");
    },
    Error,
    "encode-error: U+0268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0269");
    },
    Error,
    "encode-error: U+0269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u026A");
    },
    Error,
    "encode-error: U+026A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u026B");
    },
    Error,
    "encode-error: U+026B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u026C");
    },
    Error,
    "encode-error: U+026C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u026D");
    },
    Error,
    "encode-error: U+026D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u026E");
    },
    Error,
    "encode-error: U+026E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u026F");
    },
    Error,
    "encode-error: U+026F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0270");
    },
    Error,
    "encode-error: U+0270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0271");
    },
    Error,
    "encode-error: U+0271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0272");
    },
    Error,
    "encode-error: U+0272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0273");
    },
    Error,
    "encode-error: U+0273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0274");
    },
    Error,
    "encode-error: U+0274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0275");
    },
    Error,
    "encode-error: U+0275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0276");
    },
    Error,
    "encode-error: U+0276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0277");
    },
    Error,
    "encode-error: U+0277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0278");
    },
    Error,
    "encode-error: U+0278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0279");
    },
    Error,
    "encode-error: U+0279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u027A");
    },
    Error,
    "encode-error: U+027A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u027B");
    },
    Error,
    "encode-error: U+027B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u027C");
    },
    Error,
    "encode-error: U+027C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u027D");
    },
    Error,
    "encode-error: U+027D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u027E");
    },
    Error,
    "encode-error: U+027E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u027F");
    },
    Error,
    "encode-error: U+027F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0280");
    },
    Error,
    "encode-error: U+0280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0281");
    },
    Error,
    "encode-error: U+0281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0282");
    },
    Error,
    "encode-error: U+0282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0283");
    },
    Error,
    "encode-error: U+0283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0284");
    },
    Error,
    "encode-error: U+0284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0285");
    },
    Error,
    "encode-error: U+0285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0286");
    },
    Error,
    "encode-error: U+0286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0287");
    },
    Error,
    "encode-error: U+0287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0288");
    },
    Error,
    "encode-error: U+0288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0289");
    },
    Error,
    "encode-error: U+0289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u028A");
    },
    Error,
    "encode-error: U+028A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u028B");
    },
    Error,
    "encode-error: U+028B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u028C");
    },
    Error,
    "encode-error: U+028C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u028D");
    },
    Error,
    "encode-error: U+028D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u028E");
    },
    Error,
    "encode-error: U+028E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u028F");
    },
    Error,
    "encode-error: U+028F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0290");
    },
    Error,
    "encode-error: U+0290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0291");
    },
    Error,
    "encode-error: U+0291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0292");
    },
    Error,
    "encode-error: U+0292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0293");
    },
    Error,
    "encode-error: U+0293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0294");
    },
    Error,
    "encode-error: U+0294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0295");
    },
    Error,
    "encode-error: U+0295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0296");
    },
    Error,
    "encode-error: U+0296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0297");
    },
    Error,
    "encode-error: U+0297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0298");
    },
    Error,
    "encode-error: U+0298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0299");
    },
    Error,
    "encode-error: U+0299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u029A");
    },
    Error,
    "encode-error: U+029A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u029B");
    },
    Error,
    "encode-error: U+029B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u029C");
    },
    Error,
    "encode-error: U+029C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u029D");
    },
    Error,
    "encode-error: U+029D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u029E");
    },
    Error,
    "encode-error: U+029E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u029F");
    },
    Error,
    "encode-error: U+029F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A0");
    },
    Error,
    "encode-error: U+02A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A1");
    },
    Error,
    "encode-error: U+02A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A2");
    },
    Error,
    "encode-error: U+02A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A3");
    },
    Error,
    "encode-error: U+02A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A4");
    },
    Error,
    "encode-error: U+02A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A5");
    },
    Error,
    "encode-error: U+02A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A6");
    },
    Error,
    "encode-error: U+02A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A7");
    },
    Error,
    "encode-error: U+02A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A8");
    },
    Error,
    "encode-error: U+02A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02A9");
    },
    Error,
    "encode-error: U+02A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02AA");
    },
    Error,
    "encode-error: U+02AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02AB");
    },
    Error,
    "encode-error: U+02AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02AC");
    },
    Error,
    "encode-error: U+02AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02AD");
    },
    Error,
    "encode-error: U+02AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02AE");
    },
    Error,
    "encode-error: U+02AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02AF");
    },
    Error,
    "encode-error: U+02AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B0");
    },
    Error,
    "encode-error: U+02B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B1");
    },
    Error,
    "encode-error: U+02B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B2");
    },
    Error,
    "encode-error: U+02B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B3");
    },
    Error,
    "encode-error: U+02B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B4");
    },
    Error,
    "encode-error: U+02B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B5");
    },
    Error,
    "encode-error: U+02B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B6");
    },
    Error,
    "encode-error: U+02B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B7");
    },
    Error,
    "encode-error: U+02B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B8");
    },
    Error,
    "encode-error: U+02B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02B9");
    },
    Error,
    "encode-error: U+02B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02BA");
    },
    Error,
    "encode-error: U+02BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02BB");
    },
    Error,
    "encode-error: U+02BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02BC");
    },
    Error,
    "encode-error: U+02BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02BD");
    },
    Error,
    "encode-error: U+02BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02BE");
    },
    Error,
    "encode-error: U+02BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02BF");
    },
    Error,
    "encode-error: U+02BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C0");
    },
    Error,
    "encode-error: U+02C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C1");
    },
    Error,
    "encode-error: U+02C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C2");
    },
    Error,
    "encode-error: U+02C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C3");
    },
    Error,
    "encode-error: U+02C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C4");
    },
    Error,
    "encode-error: U+02C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C5");
    },
    Error,
    "encode-error: U+02C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C6");
    },
    Error,
    "encode-error: U+02C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C7");
    },
    Error,
    "encode-error: U+02C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C8");
    },
    Error,
    "encode-error: U+02C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02C9");
    },
    Error,
    "encode-error: U+02C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02CA");
    },
    Error,
    "encode-error: U+02CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02CB");
    },
    Error,
    "encode-error: U+02CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02CC");
    },
    Error,
    "encode-error: U+02CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02CD");
    },
    Error,
    "encode-error: U+02CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02CE");
    },
    Error,
    "encode-error: U+02CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02CF");
    },
    Error,
    "encode-error: U+02CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D0");
    },
    Error,
    "encode-error: U+02D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D1");
    },
    Error,
    "encode-error: U+02D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D2");
    },
    Error,
    "encode-error: U+02D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D3");
    },
    Error,
    "encode-error: U+02D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D4");
    },
    Error,
    "encode-error: U+02D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D5");
    },
    Error,
    "encode-error: U+02D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D6");
    },
    Error,
    "encode-error: U+02D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D7");
    },
    Error,
    "encode-error: U+02D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D8");
    },
    Error,
    "encode-error: U+02D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02D9");
    },
    Error,
    "encode-error: U+02D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02DA");
    },
    Error,
    "encode-error: U+02DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02DB");
    },
    Error,
    "encode-error: U+02DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02DC");
    },
    Error,
    "encode-error: U+02DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02DD");
    },
    Error,
    "encode-error: U+02DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02DE");
    },
    Error,
    "encode-error: U+02DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02DF");
    },
    Error,
    "encode-error: U+02DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E0");
    },
    Error,
    "encode-error: U+02E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E1");
    },
    Error,
    "encode-error: U+02E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E2");
    },
    Error,
    "encode-error: U+02E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E3");
    },
    Error,
    "encode-error: U+02E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E4");
    },
    Error,
    "encode-error: U+02E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E5");
    },
    Error,
    "encode-error: U+02E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E6");
    },
    Error,
    "encode-error: U+02E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E7");
    },
    Error,
    "encode-error: U+02E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E8");
    },
    Error,
    "encode-error: U+02E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02E9");
    },
    Error,
    "encode-error: U+02E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02EA");
    },
    Error,
    "encode-error: U+02EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02EB");
    },
    Error,
    "encode-error: U+02EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02EC");
    },
    Error,
    "encode-error: U+02EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02ED");
    },
    Error,
    "encode-error: U+02ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02EE");
    },
    Error,
    "encode-error: U+02EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02EF");
    },
    Error,
    "encode-error: U+02EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F0");
    },
    Error,
    "encode-error: U+02F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F1");
    },
    Error,
    "encode-error: U+02F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F2");
    },
    Error,
    "encode-error: U+02F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F3");
    },
    Error,
    "encode-error: U+02F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F4");
    },
    Error,
    "encode-error: U+02F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F5");
    },
    Error,
    "encode-error: U+02F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F6");
    },
    Error,
    "encode-error: U+02F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F7");
    },
    Error,
    "encode-error: U+02F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F8");
    },
    Error,
    "encode-error: U+02F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02F9");
    },
    Error,
    "encode-error: U+02F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02FA");
    },
    Error,
    "encode-error: U+02FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02FB");
    },
    Error,
    "encode-error: U+02FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02FC");
    },
    Error,
    "encode-error: U+02FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02FD");
    },
    Error,
    "encode-error: U+02FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02FE");
    },
    Error,
    "encode-error: U+02FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u02FF");
    },
    Error,
    "encode-error: U+02FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0300");
    },
    Error,
    "encode-error: U+0300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0301");
    },
    Error,
    "encode-error: U+0301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0302");
    },
    Error,
    "encode-error: U+0302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0303");
    },
    Error,
    "encode-error: U+0303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0304");
    },
    Error,
    "encode-error: U+0304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0305");
    },
    Error,
    "encode-error: U+0305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0306");
    },
    Error,
    "encode-error: U+0306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0307");
    },
    Error,
    "encode-error: U+0307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0308");
    },
    Error,
    "encode-error: U+0308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0309");
    },
    Error,
    "encode-error: U+0309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u030A");
    },
    Error,
    "encode-error: U+030A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u030B");
    },
    Error,
    "encode-error: U+030B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u030C");
    },
    Error,
    "encode-error: U+030C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u030D");
    },
    Error,
    "encode-error: U+030D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u030E");
    },
    Error,
    "encode-error: U+030E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u030F");
    },
    Error,
    "encode-error: U+030F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0310");
    },
    Error,
    "encode-error: U+0310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0311");
    },
    Error,
    "encode-error: U+0311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0312");
    },
    Error,
    "encode-error: U+0312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0313");
    },
    Error,
    "encode-error: U+0313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0314");
    },
    Error,
    "encode-error: U+0314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0315");
    },
    Error,
    "encode-error: U+0315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0316");
    },
    Error,
    "encode-error: U+0316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0317");
    },
    Error,
    "encode-error: U+0317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0318");
    },
    Error,
    "encode-error: U+0318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0319");
    },
    Error,
    "encode-error: U+0319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u031A");
    },
    Error,
    "encode-error: U+031A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u031B");
    },
    Error,
    "encode-error: U+031B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u031C");
    },
    Error,
    "encode-error: U+031C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u031D");
    },
    Error,
    "encode-error: U+031D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u031E");
    },
    Error,
    "encode-error: U+031E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u031F");
    },
    Error,
    "encode-error: U+031F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0320");
    },
    Error,
    "encode-error: U+0320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0321");
    },
    Error,
    "encode-error: U+0321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0322");
    },
    Error,
    "encode-error: U+0322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0323");
    },
    Error,
    "encode-error: U+0323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0324");
    },
    Error,
    "encode-error: U+0324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0325");
    },
    Error,
    "encode-error: U+0325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0326");
    },
    Error,
    "encode-error: U+0326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0327");
    },
    Error,
    "encode-error: U+0327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0328");
    },
    Error,
    "encode-error: U+0328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0329");
    },
    Error,
    "encode-error: U+0329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u032A");
    },
    Error,
    "encode-error: U+032A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u032B");
    },
    Error,
    "encode-error: U+032B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u032C");
    },
    Error,
    "encode-error: U+032C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u032D");
    },
    Error,
    "encode-error: U+032D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u032E");
    },
    Error,
    "encode-error: U+032E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u032F");
    },
    Error,
    "encode-error: U+032F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0330");
    },
    Error,
    "encode-error: U+0330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0331");
    },
    Error,
    "encode-error: U+0331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0332");
    },
    Error,
    "encode-error: U+0332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0333");
    },
    Error,
    "encode-error: U+0333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0334");
    },
    Error,
    "encode-error: U+0334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0335");
    },
    Error,
    "encode-error: U+0335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0336");
    },
    Error,
    "encode-error: U+0336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0337");
    },
    Error,
    "encode-error: U+0337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0338");
    },
    Error,
    "encode-error: U+0338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0339");
    },
    Error,
    "encode-error: U+0339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u033A");
    },
    Error,
    "encode-error: U+033A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u033B");
    },
    Error,
    "encode-error: U+033B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u033C");
    },
    Error,
    "encode-error: U+033C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u033D");
    },
    Error,
    "encode-error: U+033D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u033E");
    },
    Error,
    "encode-error: U+033E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u033F");
    },
    Error,
    "encode-error: U+033F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0340");
    },
    Error,
    "encode-error: U+0340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0341");
    },
    Error,
    "encode-error: U+0341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0342");
    },
    Error,
    "encode-error: U+0342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0343");
    },
    Error,
    "encode-error: U+0343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0344");
    },
    Error,
    "encode-error: U+0344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0345");
    },
    Error,
    "encode-error: U+0345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0346");
    },
    Error,
    "encode-error: U+0346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0347");
    },
    Error,
    "encode-error: U+0347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0348");
    },
    Error,
    "encode-error: U+0348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0349");
    },
    Error,
    "encode-error: U+0349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u034A");
    },
    Error,
    "encode-error: U+034A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u034B");
    },
    Error,
    "encode-error: U+034B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u034C");
    },
    Error,
    "encode-error: U+034C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u034D");
    },
    Error,
    "encode-error: U+034D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u034E");
    },
    Error,
    "encode-error: U+034E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u034F");
    },
    Error,
    "encode-error: U+034F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0350");
    },
    Error,
    "encode-error: U+0350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0351");
    },
    Error,
    "encode-error: U+0351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0352");
    },
    Error,
    "encode-error: U+0352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0353");
    },
    Error,
    "encode-error: U+0353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0354");
    },
    Error,
    "encode-error: U+0354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0355");
    },
    Error,
    "encode-error: U+0355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0356");
    },
    Error,
    "encode-error: U+0356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0357");
    },
    Error,
    "encode-error: U+0357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0358");
    },
    Error,
    "encode-error: U+0358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0359");
    },
    Error,
    "encode-error: U+0359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u035A");
    },
    Error,
    "encode-error: U+035A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u035B");
    },
    Error,
    "encode-error: U+035B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u035C");
    },
    Error,
    "encode-error: U+035C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u035D");
    },
    Error,
    "encode-error: U+035D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u035E");
    },
    Error,
    "encode-error: U+035E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u035F");
    },
    Error,
    "encode-error: U+035F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0360");
    },
    Error,
    "encode-error: U+0360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0361");
    },
    Error,
    "encode-error: U+0361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0362");
    },
    Error,
    "encode-error: U+0362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0363");
    },
    Error,
    "encode-error: U+0363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0364");
    },
    Error,
    "encode-error: U+0364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0365");
    },
    Error,
    "encode-error: U+0365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0366");
    },
    Error,
    "encode-error: U+0366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0367");
    },
    Error,
    "encode-error: U+0367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0368");
    },
    Error,
    "encode-error: U+0368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0369");
    },
    Error,
    "encode-error: U+0369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u036A");
    },
    Error,
    "encode-error: U+036A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u036B");
    },
    Error,
    "encode-error: U+036B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u036C");
    },
    Error,
    "encode-error: U+036C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u036D");
    },
    Error,
    "encode-error: U+036D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u036E");
    },
    Error,
    "encode-error: U+036E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u036F");
    },
    Error,
    "encode-error: U+036F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0370");
    },
    Error,
    "encode-error: U+0370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0371");
    },
    Error,
    "encode-error: U+0371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0372");
    },
    Error,
    "encode-error: U+0372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0373");
    },
    Error,
    "encode-error: U+0373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0374");
    },
    Error,
    "encode-error: U+0374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0375");
    },
    Error,
    "encode-error: U+0375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0376");
    },
    Error,
    "encode-error: U+0376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0377");
    },
    Error,
    "encode-error: U+0377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0378");
    },
    Error,
    "encode-error: U+0378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0379");
    },
    Error,
    "encode-error: U+0379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u037A");
    },
    Error,
    "encode-error: U+037A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u037B");
    },
    Error,
    "encode-error: U+037B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u037C");
    },
    Error,
    "encode-error: U+037C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u037D");
    },
    Error,
    "encode-error: U+037D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u037E");
    },
    Error,
    "encode-error: U+037E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u037F");
    },
    Error,
    "encode-error: U+037F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0380");
    },
    Error,
    "encode-error: U+0380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0381");
    },
    Error,
    "encode-error: U+0381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0382");
    },
    Error,
    "encode-error: U+0382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0383");
    },
    Error,
    "encode-error: U+0383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0384");
    },
    Error,
    "encode-error: U+0384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0385");
    },
    Error,
    "encode-error: U+0385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0386");
    },
    Error,
    "encode-error: U+0386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0387");
    },
    Error,
    "encode-error: U+0387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0388");
    },
    Error,
    "encode-error: U+0388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0389");
    },
    Error,
    "encode-error: U+0389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u038A");
    },
    Error,
    "encode-error: U+038A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u038B");
    },
    Error,
    "encode-error: U+038B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u038C");
    },
    Error,
    "encode-error: U+038C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u038D");
    },
    Error,
    "encode-error: U+038D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u038E");
    },
    Error,
    "encode-error: U+038E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u038F");
    },
    Error,
    "encode-error: U+038F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0390");
    },
    Error,
    "encode-error: U+0390",
  );
  r = r &&
    ([...ms932Encoder.encode("ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ")].join(",") ===
      "131,159,131,160,131,161,131,162,131,163,131,164,131,165,131,166,131,167,131,168,131,169,131,170,131,171,131,172,131,173,131,174,131,175"); // U+0391
  assertThrows(
    () => {
      ms932Encoder.encode("\u03A2");
    },
    Error,
    "encode-error: U+03A2",
  );
  r = r &&
    ([...ms932Encoder.encode("ΣΤΥΦΧΨΩ")].join(",") ===
      "131,176,131,177,131,178,131,179,131,180,131,181,131,182"); // U+03A3
  assertThrows(
    () => {
      ms932Encoder.encode("\u03AA");
    },
    Error,
    "encode-error: U+03AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03AB");
    },
    Error,
    "encode-error: U+03AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03AC");
    },
    Error,
    "encode-error: U+03AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03AD");
    },
    Error,
    "encode-error: U+03AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03AE");
    },
    Error,
    "encode-error: U+03AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03AF");
    },
    Error,
    "encode-error: U+03AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03B0");
    },
    Error,
    "encode-error: U+03B0",
  );
  r = r &&
    ([...ms932Encoder.encode("αβγδεζηθικλμνξοπρ")].join(",") ===
      "131,191,131,192,131,193,131,194,131,195,131,196,131,197,131,198,131,199,131,200,131,201,131,202,131,203,131,204,131,205,131,206,131,207"); // U+03B1
  assertThrows(
    () => {
      ms932Encoder.encode("\u03C2");
    },
    Error,
    "encode-error: U+03C2",
  );
  r = r &&
    ([...ms932Encoder.encode("στυφχψω")].join(",") ===
      "131,208,131,209,131,210,131,211,131,212,131,213,131,214"); // U+03C3
  assertThrows(
    () => {
      ms932Encoder.encode("\u03CA");
    },
    Error,
    "encode-error: U+03CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03CB");
    },
    Error,
    "encode-error: U+03CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03CC");
    },
    Error,
    "encode-error: U+03CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03CD");
    },
    Error,
    "encode-error: U+03CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03CE");
    },
    Error,
    "encode-error: U+03CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03CF");
    },
    Error,
    "encode-error: U+03CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D0");
    },
    Error,
    "encode-error: U+03D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D1");
    },
    Error,
    "encode-error: U+03D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D2");
    },
    Error,
    "encode-error: U+03D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D3");
    },
    Error,
    "encode-error: U+03D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D4");
    },
    Error,
    "encode-error: U+03D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D5");
    },
    Error,
    "encode-error: U+03D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D6");
    },
    Error,
    "encode-error: U+03D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D7");
    },
    Error,
    "encode-error: U+03D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D8");
    },
    Error,
    "encode-error: U+03D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03D9");
    },
    Error,
    "encode-error: U+03D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03DA");
    },
    Error,
    "encode-error: U+03DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03DB");
    },
    Error,
    "encode-error: U+03DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03DC");
    },
    Error,
    "encode-error: U+03DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03DD");
    },
    Error,
    "encode-error: U+03DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03DE");
    },
    Error,
    "encode-error: U+03DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03DF");
    },
    Error,
    "encode-error: U+03DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E0");
    },
    Error,
    "encode-error: U+03E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E1");
    },
    Error,
    "encode-error: U+03E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E2");
    },
    Error,
    "encode-error: U+03E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E3");
    },
    Error,
    "encode-error: U+03E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E4");
    },
    Error,
    "encode-error: U+03E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E5");
    },
    Error,
    "encode-error: U+03E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E6");
    },
    Error,
    "encode-error: U+03E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E7");
    },
    Error,
    "encode-error: U+03E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E8");
    },
    Error,
    "encode-error: U+03E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03E9");
    },
    Error,
    "encode-error: U+03E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03EA");
    },
    Error,
    "encode-error: U+03EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03EB");
    },
    Error,
    "encode-error: U+03EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03EC");
    },
    Error,
    "encode-error: U+03EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03ED");
    },
    Error,
    "encode-error: U+03ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03EE");
    },
    Error,
    "encode-error: U+03EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03EF");
    },
    Error,
    "encode-error: U+03EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F0");
    },
    Error,
    "encode-error: U+03F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F1");
    },
    Error,
    "encode-error: U+03F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F2");
    },
    Error,
    "encode-error: U+03F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F3");
    },
    Error,
    "encode-error: U+03F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F4");
    },
    Error,
    "encode-error: U+03F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F5");
    },
    Error,
    "encode-error: U+03F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F6");
    },
    Error,
    "encode-error: U+03F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F7");
    },
    Error,
    "encode-error: U+03F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F8");
    },
    Error,
    "encode-error: U+03F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03F9");
    },
    Error,
    "encode-error: U+03F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03FA");
    },
    Error,
    "encode-error: U+03FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03FB");
    },
    Error,
    "encode-error: U+03FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03FC");
    },
    Error,
    "encode-error: U+03FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03FD");
    },
    Error,
    "encode-error: U+03FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03FE");
    },
    Error,
    "encode-error: U+03FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u03FF");
    },
    Error,
    "encode-error: U+03FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0400");
    },
    Error,
    "encode-error: U+0400",
  );
  r = r && ([...ms932Encoder.encode("Ё")].join(",") === "132,70"); // U+0401
  assertThrows(
    () => {
      ms932Encoder.encode("\u0402");
    },
    Error,
    "encode-error: U+0402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0403");
    },
    Error,
    "encode-error: U+0403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0404");
    },
    Error,
    "encode-error: U+0404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0405");
    },
    Error,
    "encode-error: U+0405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0406");
    },
    Error,
    "encode-error: U+0406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0407");
    },
    Error,
    "encode-error: U+0407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0408");
    },
    Error,
    "encode-error: U+0408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0409");
    },
    Error,
    "encode-error: U+0409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u040A");
    },
    Error,
    "encode-error: U+040A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u040B");
    },
    Error,
    "encode-error: U+040B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u040C");
    },
    Error,
    "encode-error: U+040C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u040D");
    },
    Error,
    "encode-error: U+040D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u040E");
    },
    Error,
    "encode-error: U+040E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u040F");
    },
    Error,
    "encode-error: U+040F",
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
    "encode-error: U+0450",
  );
  r = r && ([...ms932Encoder.encode("ё")].join(",") === "132,118"); // U+0451
  assertThrows(
    () => {
      ms932Encoder.encode("\u0452");
    },
    Error,
    "encode-error: U+0452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0453");
    },
    Error,
    "encode-error: U+0453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0454");
    },
    Error,
    "encode-error: U+0454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0455");
    },
    Error,
    "encode-error: U+0455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0456");
    },
    Error,
    "encode-error: U+0456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0457");
    },
    Error,
    "encode-error: U+0457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0458");
    },
    Error,
    "encode-error: U+0458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0459");
    },
    Error,
    "encode-error: U+0459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u045A");
    },
    Error,
    "encode-error: U+045A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u045B");
    },
    Error,
    "encode-error: U+045B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u045C");
    },
    Error,
    "encode-error: U+045C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u045D");
    },
    Error,
    "encode-error: U+045D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u045E");
    },
    Error,
    "encode-error: U+045E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u045F");
    },
    Error,
    "encode-error: U+045F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0460");
    },
    Error,
    "encode-error: U+0460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0461");
    },
    Error,
    "encode-error: U+0461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0462");
    },
    Error,
    "encode-error: U+0462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0463");
    },
    Error,
    "encode-error: U+0463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0464");
    },
    Error,
    "encode-error: U+0464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0465");
    },
    Error,
    "encode-error: U+0465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0466");
    },
    Error,
    "encode-error: U+0466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0467");
    },
    Error,
    "encode-error: U+0467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0468");
    },
    Error,
    "encode-error: U+0468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0469");
    },
    Error,
    "encode-error: U+0469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u046A");
    },
    Error,
    "encode-error: U+046A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u046B");
    },
    Error,
    "encode-error: U+046B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u046C");
    },
    Error,
    "encode-error: U+046C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u046D");
    },
    Error,
    "encode-error: U+046D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u046E");
    },
    Error,
    "encode-error: U+046E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u046F");
    },
    Error,
    "encode-error: U+046F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0470");
    },
    Error,
    "encode-error: U+0470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0471");
    },
    Error,
    "encode-error: U+0471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0472");
    },
    Error,
    "encode-error: U+0472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0473");
    },
    Error,
    "encode-error: U+0473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0474");
    },
    Error,
    "encode-error: U+0474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0475");
    },
    Error,
    "encode-error: U+0475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0476");
    },
    Error,
    "encode-error: U+0476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0477");
    },
    Error,
    "encode-error: U+0477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0478");
    },
    Error,
    "encode-error: U+0478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0479");
    },
    Error,
    "encode-error: U+0479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u047A");
    },
    Error,
    "encode-error: U+047A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u047B");
    },
    Error,
    "encode-error: U+047B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u047C");
    },
    Error,
    "encode-error: U+047C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u047D");
    },
    Error,
    "encode-error: U+047D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u047E");
    },
    Error,
    "encode-error: U+047E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u047F");
    },
    Error,
    "encode-error: U+047F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0480");
    },
    Error,
    "encode-error: U+0480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0481");
    },
    Error,
    "encode-error: U+0481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0482");
    },
    Error,
    "encode-error: U+0482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0483");
    },
    Error,
    "encode-error: U+0483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0484");
    },
    Error,
    "encode-error: U+0484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0485");
    },
    Error,
    "encode-error: U+0485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0486");
    },
    Error,
    "encode-error: U+0486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0487");
    },
    Error,
    "encode-error: U+0487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0488");
    },
    Error,
    "encode-error: U+0488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0489");
    },
    Error,
    "encode-error: U+0489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u048A");
    },
    Error,
    "encode-error: U+048A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u048B");
    },
    Error,
    "encode-error: U+048B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u048C");
    },
    Error,
    "encode-error: U+048C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u048D");
    },
    Error,
    "encode-error: U+048D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u048E");
    },
    Error,
    "encode-error: U+048E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u048F");
    },
    Error,
    "encode-error: U+048F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0490");
    },
    Error,
    "encode-error: U+0490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0491");
    },
    Error,
    "encode-error: U+0491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0492");
    },
    Error,
    "encode-error: U+0492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0493");
    },
    Error,
    "encode-error: U+0493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0494");
    },
    Error,
    "encode-error: U+0494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0495");
    },
    Error,
    "encode-error: U+0495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0496");
    },
    Error,
    "encode-error: U+0496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0497");
    },
    Error,
    "encode-error: U+0497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0498");
    },
    Error,
    "encode-error: U+0498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0499");
    },
    Error,
    "encode-error: U+0499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u049A");
    },
    Error,
    "encode-error: U+049A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u049B");
    },
    Error,
    "encode-error: U+049B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u049C");
    },
    Error,
    "encode-error: U+049C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u049D");
    },
    Error,
    "encode-error: U+049D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u049E");
    },
    Error,
    "encode-error: U+049E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u049F");
    },
    Error,
    "encode-error: U+049F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A0");
    },
    Error,
    "encode-error: U+04A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A1");
    },
    Error,
    "encode-error: U+04A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A2");
    },
    Error,
    "encode-error: U+04A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A3");
    },
    Error,
    "encode-error: U+04A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A4");
    },
    Error,
    "encode-error: U+04A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A5");
    },
    Error,
    "encode-error: U+04A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A6");
    },
    Error,
    "encode-error: U+04A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A7");
    },
    Error,
    "encode-error: U+04A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A8");
    },
    Error,
    "encode-error: U+04A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04A9");
    },
    Error,
    "encode-error: U+04A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04AA");
    },
    Error,
    "encode-error: U+04AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04AB");
    },
    Error,
    "encode-error: U+04AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04AC");
    },
    Error,
    "encode-error: U+04AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04AD");
    },
    Error,
    "encode-error: U+04AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04AE");
    },
    Error,
    "encode-error: U+04AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04AF");
    },
    Error,
    "encode-error: U+04AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B0");
    },
    Error,
    "encode-error: U+04B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B1");
    },
    Error,
    "encode-error: U+04B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B2");
    },
    Error,
    "encode-error: U+04B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B3");
    },
    Error,
    "encode-error: U+04B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B4");
    },
    Error,
    "encode-error: U+04B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B5");
    },
    Error,
    "encode-error: U+04B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B6");
    },
    Error,
    "encode-error: U+04B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B7");
    },
    Error,
    "encode-error: U+04B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B8");
    },
    Error,
    "encode-error: U+04B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04B9");
    },
    Error,
    "encode-error: U+04B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04BA");
    },
    Error,
    "encode-error: U+04BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04BB");
    },
    Error,
    "encode-error: U+04BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04BC");
    },
    Error,
    "encode-error: U+04BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04BD");
    },
    Error,
    "encode-error: U+04BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04BE");
    },
    Error,
    "encode-error: U+04BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04BF");
    },
    Error,
    "encode-error: U+04BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C0");
    },
    Error,
    "encode-error: U+04C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C1");
    },
    Error,
    "encode-error: U+04C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C2");
    },
    Error,
    "encode-error: U+04C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C3");
    },
    Error,
    "encode-error: U+04C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C4");
    },
    Error,
    "encode-error: U+04C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C5");
    },
    Error,
    "encode-error: U+04C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C6");
    },
    Error,
    "encode-error: U+04C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C7");
    },
    Error,
    "encode-error: U+04C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C8");
    },
    Error,
    "encode-error: U+04C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04C9");
    },
    Error,
    "encode-error: U+04C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04CA");
    },
    Error,
    "encode-error: U+04CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04CB");
    },
    Error,
    "encode-error: U+04CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04CC");
    },
    Error,
    "encode-error: U+04CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04CD");
    },
    Error,
    "encode-error: U+04CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04CE");
    },
    Error,
    "encode-error: U+04CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04CF");
    },
    Error,
    "encode-error: U+04CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D0");
    },
    Error,
    "encode-error: U+04D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D1");
    },
    Error,
    "encode-error: U+04D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D2");
    },
    Error,
    "encode-error: U+04D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D3");
    },
    Error,
    "encode-error: U+04D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D4");
    },
    Error,
    "encode-error: U+04D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D5");
    },
    Error,
    "encode-error: U+04D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D6");
    },
    Error,
    "encode-error: U+04D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D7");
    },
    Error,
    "encode-error: U+04D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D8");
    },
    Error,
    "encode-error: U+04D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04D9");
    },
    Error,
    "encode-error: U+04D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04DA");
    },
    Error,
    "encode-error: U+04DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04DB");
    },
    Error,
    "encode-error: U+04DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04DC");
    },
    Error,
    "encode-error: U+04DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04DD");
    },
    Error,
    "encode-error: U+04DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04DE");
    },
    Error,
    "encode-error: U+04DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04DF");
    },
    Error,
    "encode-error: U+04DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E0");
    },
    Error,
    "encode-error: U+04E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E1");
    },
    Error,
    "encode-error: U+04E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E2");
    },
    Error,
    "encode-error: U+04E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E3");
    },
    Error,
    "encode-error: U+04E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E4");
    },
    Error,
    "encode-error: U+04E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E5");
    },
    Error,
    "encode-error: U+04E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E6");
    },
    Error,
    "encode-error: U+04E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E7");
    },
    Error,
    "encode-error: U+04E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E8");
    },
    Error,
    "encode-error: U+04E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04E9");
    },
    Error,
    "encode-error: U+04E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04EA");
    },
    Error,
    "encode-error: U+04EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04EB");
    },
    Error,
    "encode-error: U+04EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04EC");
    },
    Error,
    "encode-error: U+04EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04ED");
    },
    Error,
    "encode-error: U+04ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04EE");
    },
    Error,
    "encode-error: U+04EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04EF");
    },
    Error,
    "encode-error: U+04EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F0");
    },
    Error,
    "encode-error: U+04F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F1");
    },
    Error,
    "encode-error: U+04F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F2");
    },
    Error,
    "encode-error: U+04F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F3");
    },
    Error,
    "encode-error: U+04F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F4");
    },
    Error,
    "encode-error: U+04F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F5");
    },
    Error,
    "encode-error: U+04F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F6");
    },
    Error,
    "encode-error: U+04F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F7");
    },
    Error,
    "encode-error: U+04F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F8");
    },
    Error,
    "encode-error: U+04F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04F9");
    },
    Error,
    "encode-error: U+04F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04FA");
    },
    Error,
    "encode-error: U+04FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04FB");
    },
    Error,
    "encode-error: U+04FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04FC");
    },
    Error,
    "encode-error: U+04FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04FD");
    },
    Error,
    "encode-error: U+04FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04FE");
    },
    Error,
    "encode-error: U+04FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u04FF");
    },
    Error,
    "encode-error: U+04FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0500");
    },
    Error,
    "encode-error: U+0500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0501");
    },
    Error,
    "encode-error: U+0501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0502");
    },
    Error,
    "encode-error: U+0502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0503");
    },
    Error,
    "encode-error: U+0503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0504");
    },
    Error,
    "encode-error: U+0504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0505");
    },
    Error,
    "encode-error: U+0505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0506");
    },
    Error,
    "encode-error: U+0506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0507");
    },
    Error,
    "encode-error: U+0507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0508");
    },
    Error,
    "encode-error: U+0508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0509");
    },
    Error,
    "encode-error: U+0509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u050A");
    },
    Error,
    "encode-error: U+050A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u050B");
    },
    Error,
    "encode-error: U+050B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u050C");
    },
    Error,
    "encode-error: U+050C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u050D");
    },
    Error,
    "encode-error: U+050D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u050E");
    },
    Error,
    "encode-error: U+050E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u050F");
    },
    Error,
    "encode-error: U+050F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0510");
    },
    Error,
    "encode-error: U+0510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0511");
    },
    Error,
    "encode-error: U+0511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0512");
    },
    Error,
    "encode-error: U+0512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0513");
    },
    Error,
    "encode-error: U+0513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0514");
    },
    Error,
    "encode-error: U+0514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0515");
    },
    Error,
    "encode-error: U+0515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0516");
    },
    Error,
    "encode-error: U+0516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0517");
    },
    Error,
    "encode-error: U+0517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0518");
    },
    Error,
    "encode-error: U+0518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0519");
    },
    Error,
    "encode-error: U+0519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u051A");
    },
    Error,
    "encode-error: U+051A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u051B");
    },
    Error,
    "encode-error: U+051B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u051C");
    },
    Error,
    "encode-error: U+051C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u051D");
    },
    Error,
    "encode-error: U+051D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u051E");
    },
    Error,
    "encode-error: U+051E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u051F");
    },
    Error,
    "encode-error: U+051F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0520");
    },
    Error,
    "encode-error: U+0520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0521");
    },
    Error,
    "encode-error: U+0521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0522");
    },
    Error,
    "encode-error: U+0522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0523");
    },
    Error,
    "encode-error: U+0523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0524");
    },
    Error,
    "encode-error: U+0524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0525");
    },
    Error,
    "encode-error: U+0525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0526");
    },
    Error,
    "encode-error: U+0526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0527");
    },
    Error,
    "encode-error: U+0527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0528");
    },
    Error,
    "encode-error: U+0528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0529");
    },
    Error,
    "encode-error: U+0529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u052A");
    },
    Error,
    "encode-error: U+052A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u052B");
    },
    Error,
    "encode-error: U+052B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u052C");
    },
    Error,
    "encode-error: U+052C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u052D");
    },
    Error,
    "encode-error: U+052D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u052E");
    },
    Error,
    "encode-error: U+052E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u052F");
    },
    Error,
    "encode-error: U+052F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0530");
    },
    Error,
    "encode-error: U+0530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0531");
    },
    Error,
    "encode-error: U+0531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0532");
    },
    Error,
    "encode-error: U+0532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0533");
    },
    Error,
    "encode-error: U+0533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0534");
    },
    Error,
    "encode-error: U+0534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0535");
    },
    Error,
    "encode-error: U+0535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0536");
    },
    Error,
    "encode-error: U+0536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0537");
    },
    Error,
    "encode-error: U+0537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0538");
    },
    Error,
    "encode-error: U+0538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0539");
    },
    Error,
    "encode-error: U+0539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u053A");
    },
    Error,
    "encode-error: U+053A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u053B");
    },
    Error,
    "encode-error: U+053B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u053C");
    },
    Error,
    "encode-error: U+053C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u053D");
    },
    Error,
    "encode-error: U+053D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u053E");
    },
    Error,
    "encode-error: U+053E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u053F");
    },
    Error,
    "encode-error: U+053F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0540");
    },
    Error,
    "encode-error: U+0540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0541");
    },
    Error,
    "encode-error: U+0541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0542");
    },
    Error,
    "encode-error: U+0542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0543");
    },
    Error,
    "encode-error: U+0543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0544");
    },
    Error,
    "encode-error: U+0544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0545");
    },
    Error,
    "encode-error: U+0545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0546");
    },
    Error,
    "encode-error: U+0546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0547");
    },
    Error,
    "encode-error: U+0547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0548");
    },
    Error,
    "encode-error: U+0548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0549");
    },
    Error,
    "encode-error: U+0549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u054A");
    },
    Error,
    "encode-error: U+054A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u054B");
    },
    Error,
    "encode-error: U+054B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u054C");
    },
    Error,
    "encode-error: U+054C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u054D");
    },
    Error,
    "encode-error: U+054D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u054E");
    },
    Error,
    "encode-error: U+054E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u054F");
    },
    Error,
    "encode-error: U+054F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0550");
    },
    Error,
    "encode-error: U+0550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0551");
    },
    Error,
    "encode-error: U+0551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0552");
    },
    Error,
    "encode-error: U+0552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0553");
    },
    Error,
    "encode-error: U+0553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0554");
    },
    Error,
    "encode-error: U+0554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0555");
    },
    Error,
    "encode-error: U+0555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0556");
    },
    Error,
    "encode-error: U+0556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0557");
    },
    Error,
    "encode-error: U+0557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0558");
    },
    Error,
    "encode-error: U+0558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0559");
    },
    Error,
    "encode-error: U+0559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u055A");
    },
    Error,
    "encode-error: U+055A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u055B");
    },
    Error,
    "encode-error: U+055B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u055C");
    },
    Error,
    "encode-error: U+055C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u055D");
    },
    Error,
    "encode-error: U+055D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u055E");
    },
    Error,
    "encode-error: U+055E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u055F");
    },
    Error,
    "encode-error: U+055F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0560");
    },
    Error,
    "encode-error: U+0560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0561");
    },
    Error,
    "encode-error: U+0561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0562");
    },
    Error,
    "encode-error: U+0562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0563");
    },
    Error,
    "encode-error: U+0563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0564");
    },
    Error,
    "encode-error: U+0564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0565");
    },
    Error,
    "encode-error: U+0565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0566");
    },
    Error,
    "encode-error: U+0566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0567");
    },
    Error,
    "encode-error: U+0567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0568");
    },
    Error,
    "encode-error: U+0568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0569");
    },
    Error,
    "encode-error: U+0569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u056A");
    },
    Error,
    "encode-error: U+056A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u056B");
    },
    Error,
    "encode-error: U+056B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u056C");
    },
    Error,
    "encode-error: U+056C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u056D");
    },
    Error,
    "encode-error: U+056D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u056E");
    },
    Error,
    "encode-error: U+056E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u056F");
    },
    Error,
    "encode-error: U+056F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0570");
    },
    Error,
    "encode-error: U+0570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0571");
    },
    Error,
    "encode-error: U+0571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0572");
    },
    Error,
    "encode-error: U+0572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0573");
    },
    Error,
    "encode-error: U+0573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0574");
    },
    Error,
    "encode-error: U+0574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0575");
    },
    Error,
    "encode-error: U+0575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0576");
    },
    Error,
    "encode-error: U+0576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0577");
    },
    Error,
    "encode-error: U+0577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0578");
    },
    Error,
    "encode-error: U+0578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0579");
    },
    Error,
    "encode-error: U+0579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u057A");
    },
    Error,
    "encode-error: U+057A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u057B");
    },
    Error,
    "encode-error: U+057B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u057C");
    },
    Error,
    "encode-error: U+057C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u057D");
    },
    Error,
    "encode-error: U+057D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u057E");
    },
    Error,
    "encode-error: U+057E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u057F");
    },
    Error,
    "encode-error: U+057F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0580");
    },
    Error,
    "encode-error: U+0580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0581");
    },
    Error,
    "encode-error: U+0581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0582");
    },
    Error,
    "encode-error: U+0582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0583");
    },
    Error,
    "encode-error: U+0583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0584");
    },
    Error,
    "encode-error: U+0584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0585");
    },
    Error,
    "encode-error: U+0585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0586");
    },
    Error,
    "encode-error: U+0586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0587");
    },
    Error,
    "encode-error: U+0587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0588");
    },
    Error,
    "encode-error: U+0588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0589");
    },
    Error,
    "encode-error: U+0589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u058A");
    },
    Error,
    "encode-error: U+058A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u058B");
    },
    Error,
    "encode-error: U+058B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u058C");
    },
    Error,
    "encode-error: U+058C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u058D");
    },
    Error,
    "encode-error: U+058D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u058E");
    },
    Error,
    "encode-error: U+058E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u058F");
    },
    Error,
    "encode-error: U+058F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0590");
    },
    Error,
    "encode-error: U+0590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0591");
    },
    Error,
    "encode-error: U+0591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0592");
    },
    Error,
    "encode-error: U+0592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0593");
    },
    Error,
    "encode-error: U+0593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0594");
    },
    Error,
    "encode-error: U+0594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0595");
    },
    Error,
    "encode-error: U+0595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0596");
    },
    Error,
    "encode-error: U+0596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0597");
    },
    Error,
    "encode-error: U+0597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0598");
    },
    Error,
    "encode-error: U+0598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0599");
    },
    Error,
    "encode-error: U+0599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u059A");
    },
    Error,
    "encode-error: U+059A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u059B");
    },
    Error,
    "encode-error: U+059B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u059C");
    },
    Error,
    "encode-error: U+059C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u059D");
    },
    Error,
    "encode-error: U+059D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u059E");
    },
    Error,
    "encode-error: U+059E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u059F");
    },
    Error,
    "encode-error: U+059F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A0");
    },
    Error,
    "encode-error: U+05A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A1");
    },
    Error,
    "encode-error: U+05A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A2");
    },
    Error,
    "encode-error: U+05A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A3");
    },
    Error,
    "encode-error: U+05A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A4");
    },
    Error,
    "encode-error: U+05A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A5");
    },
    Error,
    "encode-error: U+05A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A6");
    },
    Error,
    "encode-error: U+05A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A7");
    },
    Error,
    "encode-error: U+05A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A8");
    },
    Error,
    "encode-error: U+05A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05A9");
    },
    Error,
    "encode-error: U+05A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05AA");
    },
    Error,
    "encode-error: U+05AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05AB");
    },
    Error,
    "encode-error: U+05AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05AC");
    },
    Error,
    "encode-error: U+05AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05AD");
    },
    Error,
    "encode-error: U+05AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05AE");
    },
    Error,
    "encode-error: U+05AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05AF");
    },
    Error,
    "encode-error: U+05AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B0");
    },
    Error,
    "encode-error: U+05B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B1");
    },
    Error,
    "encode-error: U+05B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B2");
    },
    Error,
    "encode-error: U+05B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B3");
    },
    Error,
    "encode-error: U+05B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B4");
    },
    Error,
    "encode-error: U+05B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B5");
    },
    Error,
    "encode-error: U+05B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B6");
    },
    Error,
    "encode-error: U+05B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B7");
    },
    Error,
    "encode-error: U+05B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B8");
    },
    Error,
    "encode-error: U+05B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05B9");
    },
    Error,
    "encode-error: U+05B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05BA");
    },
    Error,
    "encode-error: U+05BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05BB");
    },
    Error,
    "encode-error: U+05BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05BC");
    },
    Error,
    "encode-error: U+05BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05BD");
    },
    Error,
    "encode-error: U+05BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05BE");
    },
    Error,
    "encode-error: U+05BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05BF");
    },
    Error,
    "encode-error: U+05BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C0");
    },
    Error,
    "encode-error: U+05C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C1");
    },
    Error,
    "encode-error: U+05C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C2");
    },
    Error,
    "encode-error: U+05C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C3");
    },
    Error,
    "encode-error: U+05C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C4");
    },
    Error,
    "encode-error: U+05C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C5");
    },
    Error,
    "encode-error: U+05C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C6");
    },
    Error,
    "encode-error: U+05C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C7");
    },
    Error,
    "encode-error: U+05C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C8");
    },
    Error,
    "encode-error: U+05C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05C9");
    },
    Error,
    "encode-error: U+05C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05CA");
    },
    Error,
    "encode-error: U+05CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05CB");
    },
    Error,
    "encode-error: U+05CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05CC");
    },
    Error,
    "encode-error: U+05CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05CD");
    },
    Error,
    "encode-error: U+05CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05CE");
    },
    Error,
    "encode-error: U+05CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05CF");
    },
    Error,
    "encode-error: U+05CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D0");
    },
    Error,
    "encode-error: U+05D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D1");
    },
    Error,
    "encode-error: U+05D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D2");
    },
    Error,
    "encode-error: U+05D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D3");
    },
    Error,
    "encode-error: U+05D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D4");
    },
    Error,
    "encode-error: U+05D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D5");
    },
    Error,
    "encode-error: U+05D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D6");
    },
    Error,
    "encode-error: U+05D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D7");
    },
    Error,
    "encode-error: U+05D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D8");
    },
    Error,
    "encode-error: U+05D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05D9");
    },
    Error,
    "encode-error: U+05D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05DA");
    },
    Error,
    "encode-error: U+05DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05DB");
    },
    Error,
    "encode-error: U+05DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05DC");
    },
    Error,
    "encode-error: U+05DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05DD");
    },
    Error,
    "encode-error: U+05DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05DE");
    },
    Error,
    "encode-error: U+05DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05DF");
    },
    Error,
    "encode-error: U+05DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E0");
    },
    Error,
    "encode-error: U+05E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E1");
    },
    Error,
    "encode-error: U+05E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E2");
    },
    Error,
    "encode-error: U+05E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E3");
    },
    Error,
    "encode-error: U+05E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E4");
    },
    Error,
    "encode-error: U+05E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E5");
    },
    Error,
    "encode-error: U+05E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E6");
    },
    Error,
    "encode-error: U+05E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E7");
    },
    Error,
    "encode-error: U+05E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E8");
    },
    Error,
    "encode-error: U+05E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05E9");
    },
    Error,
    "encode-error: U+05E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05EA");
    },
    Error,
    "encode-error: U+05EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05EB");
    },
    Error,
    "encode-error: U+05EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05EC");
    },
    Error,
    "encode-error: U+05EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05ED");
    },
    Error,
    "encode-error: U+05ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05EE");
    },
    Error,
    "encode-error: U+05EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05EF");
    },
    Error,
    "encode-error: U+05EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F0");
    },
    Error,
    "encode-error: U+05F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F1");
    },
    Error,
    "encode-error: U+05F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F2");
    },
    Error,
    "encode-error: U+05F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F3");
    },
    Error,
    "encode-error: U+05F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F4");
    },
    Error,
    "encode-error: U+05F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F5");
    },
    Error,
    "encode-error: U+05F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F6");
    },
    Error,
    "encode-error: U+05F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F7");
    },
    Error,
    "encode-error: U+05F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F8");
    },
    Error,
    "encode-error: U+05F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05F9");
    },
    Error,
    "encode-error: U+05F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05FA");
    },
    Error,
    "encode-error: U+05FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05FB");
    },
    Error,
    "encode-error: U+05FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05FC");
    },
    Error,
    "encode-error: U+05FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05FD");
    },
    Error,
    "encode-error: U+05FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05FE");
    },
    Error,
    "encode-error: U+05FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u05FF");
    },
    Error,
    "encode-error: U+05FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0600");
    },
    Error,
    "encode-error: U+0600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0601");
    },
    Error,
    "encode-error: U+0601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0602");
    },
    Error,
    "encode-error: U+0602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0603");
    },
    Error,
    "encode-error: U+0603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0604");
    },
    Error,
    "encode-error: U+0604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0605");
    },
    Error,
    "encode-error: U+0605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0606");
    },
    Error,
    "encode-error: U+0606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0607");
    },
    Error,
    "encode-error: U+0607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0608");
    },
    Error,
    "encode-error: U+0608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0609");
    },
    Error,
    "encode-error: U+0609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u060A");
    },
    Error,
    "encode-error: U+060A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u060B");
    },
    Error,
    "encode-error: U+060B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u060C");
    },
    Error,
    "encode-error: U+060C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u060D");
    },
    Error,
    "encode-error: U+060D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u060E");
    },
    Error,
    "encode-error: U+060E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u060F");
    },
    Error,
    "encode-error: U+060F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0610");
    },
    Error,
    "encode-error: U+0610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0611");
    },
    Error,
    "encode-error: U+0611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0612");
    },
    Error,
    "encode-error: U+0612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0613");
    },
    Error,
    "encode-error: U+0613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0614");
    },
    Error,
    "encode-error: U+0614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0615");
    },
    Error,
    "encode-error: U+0615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0616");
    },
    Error,
    "encode-error: U+0616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0617");
    },
    Error,
    "encode-error: U+0617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0618");
    },
    Error,
    "encode-error: U+0618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0619");
    },
    Error,
    "encode-error: U+0619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u061A");
    },
    Error,
    "encode-error: U+061A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u061B");
    },
    Error,
    "encode-error: U+061B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u061C");
    },
    Error,
    "encode-error: U+061C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u061D");
    },
    Error,
    "encode-error: U+061D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u061E");
    },
    Error,
    "encode-error: U+061E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u061F");
    },
    Error,
    "encode-error: U+061F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0620");
    },
    Error,
    "encode-error: U+0620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0621");
    },
    Error,
    "encode-error: U+0621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0622");
    },
    Error,
    "encode-error: U+0622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0623");
    },
    Error,
    "encode-error: U+0623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0624");
    },
    Error,
    "encode-error: U+0624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0625");
    },
    Error,
    "encode-error: U+0625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0626");
    },
    Error,
    "encode-error: U+0626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0627");
    },
    Error,
    "encode-error: U+0627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0628");
    },
    Error,
    "encode-error: U+0628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0629");
    },
    Error,
    "encode-error: U+0629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u062A");
    },
    Error,
    "encode-error: U+062A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u062B");
    },
    Error,
    "encode-error: U+062B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u062C");
    },
    Error,
    "encode-error: U+062C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u062D");
    },
    Error,
    "encode-error: U+062D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u062E");
    },
    Error,
    "encode-error: U+062E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u062F");
    },
    Error,
    "encode-error: U+062F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0630");
    },
    Error,
    "encode-error: U+0630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0631");
    },
    Error,
    "encode-error: U+0631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0632");
    },
    Error,
    "encode-error: U+0632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0633");
    },
    Error,
    "encode-error: U+0633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0634");
    },
    Error,
    "encode-error: U+0634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0635");
    },
    Error,
    "encode-error: U+0635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0636");
    },
    Error,
    "encode-error: U+0636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0637");
    },
    Error,
    "encode-error: U+0637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0638");
    },
    Error,
    "encode-error: U+0638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0639");
    },
    Error,
    "encode-error: U+0639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u063A");
    },
    Error,
    "encode-error: U+063A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u063B");
    },
    Error,
    "encode-error: U+063B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u063C");
    },
    Error,
    "encode-error: U+063C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u063D");
    },
    Error,
    "encode-error: U+063D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u063E");
    },
    Error,
    "encode-error: U+063E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u063F");
    },
    Error,
    "encode-error: U+063F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0640");
    },
    Error,
    "encode-error: U+0640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0641");
    },
    Error,
    "encode-error: U+0641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0642");
    },
    Error,
    "encode-error: U+0642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0643");
    },
    Error,
    "encode-error: U+0643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0644");
    },
    Error,
    "encode-error: U+0644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0645");
    },
    Error,
    "encode-error: U+0645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0646");
    },
    Error,
    "encode-error: U+0646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0647");
    },
    Error,
    "encode-error: U+0647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0648");
    },
    Error,
    "encode-error: U+0648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0649");
    },
    Error,
    "encode-error: U+0649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u064A");
    },
    Error,
    "encode-error: U+064A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u064B");
    },
    Error,
    "encode-error: U+064B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u064C");
    },
    Error,
    "encode-error: U+064C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u064D");
    },
    Error,
    "encode-error: U+064D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u064E");
    },
    Error,
    "encode-error: U+064E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u064F");
    },
    Error,
    "encode-error: U+064F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0650");
    },
    Error,
    "encode-error: U+0650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0651");
    },
    Error,
    "encode-error: U+0651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0652");
    },
    Error,
    "encode-error: U+0652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0653");
    },
    Error,
    "encode-error: U+0653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0654");
    },
    Error,
    "encode-error: U+0654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0655");
    },
    Error,
    "encode-error: U+0655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0656");
    },
    Error,
    "encode-error: U+0656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0657");
    },
    Error,
    "encode-error: U+0657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0658");
    },
    Error,
    "encode-error: U+0658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0659");
    },
    Error,
    "encode-error: U+0659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u065A");
    },
    Error,
    "encode-error: U+065A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u065B");
    },
    Error,
    "encode-error: U+065B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u065C");
    },
    Error,
    "encode-error: U+065C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u065D");
    },
    Error,
    "encode-error: U+065D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u065E");
    },
    Error,
    "encode-error: U+065E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u065F");
    },
    Error,
    "encode-error: U+065F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0660");
    },
    Error,
    "encode-error: U+0660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0661");
    },
    Error,
    "encode-error: U+0661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0662");
    },
    Error,
    "encode-error: U+0662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0663");
    },
    Error,
    "encode-error: U+0663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0664");
    },
    Error,
    "encode-error: U+0664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0665");
    },
    Error,
    "encode-error: U+0665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0666");
    },
    Error,
    "encode-error: U+0666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0667");
    },
    Error,
    "encode-error: U+0667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0668");
    },
    Error,
    "encode-error: U+0668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0669");
    },
    Error,
    "encode-error: U+0669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u066A");
    },
    Error,
    "encode-error: U+066A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u066B");
    },
    Error,
    "encode-error: U+066B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u066C");
    },
    Error,
    "encode-error: U+066C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u066D");
    },
    Error,
    "encode-error: U+066D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u066E");
    },
    Error,
    "encode-error: U+066E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u066F");
    },
    Error,
    "encode-error: U+066F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0670");
    },
    Error,
    "encode-error: U+0670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0671");
    },
    Error,
    "encode-error: U+0671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0672");
    },
    Error,
    "encode-error: U+0672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0673");
    },
    Error,
    "encode-error: U+0673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0674");
    },
    Error,
    "encode-error: U+0674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0675");
    },
    Error,
    "encode-error: U+0675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0676");
    },
    Error,
    "encode-error: U+0676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0677");
    },
    Error,
    "encode-error: U+0677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0678");
    },
    Error,
    "encode-error: U+0678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0679");
    },
    Error,
    "encode-error: U+0679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u067A");
    },
    Error,
    "encode-error: U+067A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u067B");
    },
    Error,
    "encode-error: U+067B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u067C");
    },
    Error,
    "encode-error: U+067C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u067D");
    },
    Error,
    "encode-error: U+067D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u067E");
    },
    Error,
    "encode-error: U+067E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u067F");
    },
    Error,
    "encode-error: U+067F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0680");
    },
    Error,
    "encode-error: U+0680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0681");
    },
    Error,
    "encode-error: U+0681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0682");
    },
    Error,
    "encode-error: U+0682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0683");
    },
    Error,
    "encode-error: U+0683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0684");
    },
    Error,
    "encode-error: U+0684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0685");
    },
    Error,
    "encode-error: U+0685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0686");
    },
    Error,
    "encode-error: U+0686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0687");
    },
    Error,
    "encode-error: U+0687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0688");
    },
    Error,
    "encode-error: U+0688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0689");
    },
    Error,
    "encode-error: U+0689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u068A");
    },
    Error,
    "encode-error: U+068A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u068B");
    },
    Error,
    "encode-error: U+068B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u068C");
    },
    Error,
    "encode-error: U+068C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u068D");
    },
    Error,
    "encode-error: U+068D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u068E");
    },
    Error,
    "encode-error: U+068E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u068F");
    },
    Error,
    "encode-error: U+068F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0690");
    },
    Error,
    "encode-error: U+0690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0691");
    },
    Error,
    "encode-error: U+0691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0692");
    },
    Error,
    "encode-error: U+0692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0693");
    },
    Error,
    "encode-error: U+0693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0694");
    },
    Error,
    "encode-error: U+0694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0695");
    },
    Error,
    "encode-error: U+0695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0696");
    },
    Error,
    "encode-error: U+0696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0697");
    },
    Error,
    "encode-error: U+0697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0698");
    },
    Error,
    "encode-error: U+0698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0699");
    },
    Error,
    "encode-error: U+0699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u069A");
    },
    Error,
    "encode-error: U+069A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u069B");
    },
    Error,
    "encode-error: U+069B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u069C");
    },
    Error,
    "encode-error: U+069C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u069D");
    },
    Error,
    "encode-error: U+069D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u069E");
    },
    Error,
    "encode-error: U+069E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u069F");
    },
    Error,
    "encode-error: U+069F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A0");
    },
    Error,
    "encode-error: U+06A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A1");
    },
    Error,
    "encode-error: U+06A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A2");
    },
    Error,
    "encode-error: U+06A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A3");
    },
    Error,
    "encode-error: U+06A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A4");
    },
    Error,
    "encode-error: U+06A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A5");
    },
    Error,
    "encode-error: U+06A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A6");
    },
    Error,
    "encode-error: U+06A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A7");
    },
    Error,
    "encode-error: U+06A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A8");
    },
    Error,
    "encode-error: U+06A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06A9");
    },
    Error,
    "encode-error: U+06A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06AA");
    },
    Error,
    "encode-error: U+06AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06AB");
    },
    Error,
    "encode-error: U+06AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06AC");
    },
    Error,
    "encode-error: U+06AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06AD");
    },
    Error,
    "encode-error: U+06AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06AE");
    },
    Error,
    "encode-error: U+06AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06AF");
    },
    Error,
    "encode-error: U+06AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B0");
    },
    Error,
    "encode-error: U+06B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B1");
    },
    Error,
    "encode-error: U+06B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B2");
    },
    Error,
    "encode-error: U+06B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B3");
    },
    Error,
    "encode-error: U+06B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B4");
    },
    Error,
    "encode-error: U+06B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B5");
    },
    Error,
    "encode-error: U+06B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B6");
    },
    Error,
    "encode-error: U+06B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B7");
    },
    Error,
    "encode-error: U+06B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B8");
    },
    Error,
    "encode-error: U+06B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06B9");
    },
    Error,
    "encode-error: U+06B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06BA");
    },
    Error,
    "encode-error: U+06BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06BB");
    },
    Error,
    "encode-error: U+06BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06BC");
    },
    Error,
    "encode-error: U+06BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06BD");
    },
    Error,
    "encode-error: U+06BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06BE");
    },
    Error,
    "encode-error: U+06BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06BF");
    },
    Error,
    "encode-error: U+06BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C0");
    },
    Error,
    "encode-error: U+06C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C1");
    },
    Error,
    "encode-error: U+06C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C2");
    },
    Error,
    "encode-error: U+06C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C3");
    },
    Error,
    "encode-error: U+06C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C4");
    },
    Error,
    "encode-error: U+06C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C5");
    },
    Error,
    "encode-error: U+06C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C6");
    },
    Error,
    "encode-error: U+06C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C7");
    },
    Error,
    "encode-error: U+06C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C8");
    },
    Error,
    "encode-error: U+06C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06C9");
    },
    Error,
    "encode-error: U+06C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06CA");
    },
    Error,
    "encode-error: U+06CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06CB");
    },
    Error,
    "encode-error: U+06CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06CC");
    },
    Error,
    "encode-error: U+06CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06CD");
    },
    Error,
    "encode-error: U+06CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06CE");
    },
    Error,
    "encode-error: U+06CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06CF");
    },
    Error,
    "encode-error: U+06CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D0");
    },
    Error,
    "encode-error: U+06D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D1");
    },
    Error,
    "encode-error: U+06D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D2");
    },
    Error,
    "encode-error: U+06D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D3");
    },
    Error,
    "encode-error: U+06D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D4");
    },
    Error,
    "encode-error: U+06D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D5");
    },
    Error,
    "encode-error: U+06D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D6");
    },
    Error,
    "encode-error: U+06D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D7");
    },
    Error,
    "encode-error: U+06D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D8");
    },
    Error,
    "encode-error: U+06D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06D9");
    },
    Error,
    "encode-error: U+06D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06DA");
    },
    Error,
    "encode-error: U+06DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06DB");
    },
    Error,
    "encode-error: U+06DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06DC");
    },
    Error,
    "encode-error: U+06DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06DD");
    },
    Error,
    "encode-error: U+06DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06DE");
    },
    Error,
    "encode-error: U+06DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06DF");
    },
    Error,
    "encode-error: U+06DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E0");
    },
    Error,
    "encode-error: U+06E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E1");
    },
    Error,
    "encode-error: U+06E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E2");
    },
    Error,
    "encode-error: U+06E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E3");
    },
    Error,
    "encode-error: U+06E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E4");
    },
    Error,
    "encode-error: U+06E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E5");
    },
    Error,
    "encode-error: U+06E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E6");
    },
    Error,
    "encode-error: U+06E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E7");
    },
    Error,
    "encode-error: U+06E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E8");
    },
    Error,
    "encode-error: U+06E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06E9");
    },
    Error,
    "encode-error: U+06E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06EA");
    },
    Error,
    "encode-error: U+06EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06EB");
    },
    Error,
    "encode-error: U+06EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06EC");
    },
    Error,
    "encode-error: U+06EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06ED");
    },
    Error,
    "encode-error: U+06ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06EE");
    },
    Error,
    "encode-error: U+06EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06EF");
    },
    Error,
    "encode-error: U+06EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F0");
    },
    Error,
    "encode-error: U+06F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F1");
    },
    Error,
    "encode-error: U+06F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F2");
    },
    Error,
    "encode-error: U+06F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F3");
    },
    Error,
    "encode-error: U+06F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F4");
    },
    Error,
    "encode-error: U+06F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F5");
    },
    Error,
    "encode-error: U+06F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F6");
    },
    Error,
    "encode-error: U+06F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F7");
    },
    Error,
    "encode-error: U+06F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F8");
    },
    Error,
    "encode-error: U+06F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06F9");
    },
    Error,
    "encode-error: U+06F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06FA");
    },
    Error,
    "encode-error: U+06FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06FB");
    },
    Error,
    "encode-error: U+06FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06FC");
    },
    Error,
    "encode-error: U+06FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06FD");
    },
    Error,
    "encode-error: U+06FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06FE");
    },
    Error,
    "encode-error: U+06FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u06FF");
    },
    Error,
    "encode-error: U+06FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0700");
    },
    Error,
    "encode-error: U+0700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0701");
    },
    Error,
    "encode-error: U+0701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0702");
    },
    Error,
    "encode-error: U+0702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0703");
    },
    Error,
    "encode-error: U+0703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0704");
    },
    Error,
    "encode-error: U+0704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0705");
    },
    Error,
    "encode-error: U+0705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0706");
    },
    Error,
    "encode-error: U+0706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0707");
    },
    Error,
    "encode-error: U+0707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0708");
    },
    Error,
    "encode-error: U+0708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0709");
    },
    Error,
    "encode-error: U+0709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u070A");
    },
    Error,
    "encode-error: U+070A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u070B");
    },
    Error,
    "encode-error: U+070B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u070C");
    },
    Error,
    "encode-error: U+070C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u070D");
    },
    Error,
    "encode-error: U+070D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u070E");
    },
    Error,
    "encode-error: U+070E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u070F");
    },
    Error,
    "encode-error: U+070F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0710");
    },
    Error,
    "encode-error: U+0710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0711");
    },
    Error,
    "encode-error: U+0711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0712");
    },
    Error,
    "encode-error: U+0712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0713");
    },
    Error,
    "encode-error: U+0713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0714");
    },
    Error,
    "encode-error: U+0714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0715");
    },
    Error,
    "encode-error: U+0715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0716");
    },
    Error,
    "encode-error: U+0716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0717");
    },
    Error,
    "encode-error: U+0717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0718");
    },
    Error,
    "encode-error: U+0718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0719");
    },
    Error,
    "encode-error: U+0719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u071A");
    },
    Error,
    "encode-error: U+071A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u071B");
    },
    Error,
    "encode-error: U+071B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u071C");
    },
    Error,
    "encode-error: U+071C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u071D");
    },
    Error,
    "encode-error: U+071D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u071E");
    },
    Error,
    "encode-error: U+071E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u071F");
    },
    Error,
    "encode-error: U+071F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0720");
    },
    Error,
    "encode-error: U+0720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0721");
    },
    Error,
    "encode-error: U+0721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0722");
    },
    Error,
    "encode-error: U+0722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0723");
    },
    Error,
    "encode-error: U+0723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0724");
    },
    Error,
    "encode-error: U+0724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0725");
    },
    Error,
    "encode-error: U+0725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0726");
    },
    Error,
    "encode-error: U+0726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0727");
    },
    Error,
    "encode-error: U+0727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0728");
    },
    Error,
    "encode-error: U+0728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0729");
    },
    Error,
    "encode-error: U+0729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u072A");
    },
    Error,
    "encode-error: U+072A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u072B");
    },
    Error,
    "encode-error: U+072B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u072C");
    },
    Error,
    "encode-error: U+072C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u072D");
    },
    Error,
    "encode-error: U+072D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u072E");
    },
    Error,
    "encode-error: U+072E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u072F");
    },
    Error,
    "encode-error: U+072F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0730");
    },
    Error,
    "encode-error: U+0730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0731");
    },
    Error,
    "encode-error: U+0731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0732");
    },
    Error,
    "encode-error: U+0732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0733");
    },
    Error,
    "encode-error: U+0733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0734");
    },
    Error,
    "encode-error: U+0734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0735");
    },
    Error,
    "encode-error: U+0735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0736");
    },
    Error,
    "encode-error: U+0736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0737");
    },
    Error,
    "encode-error: U+0737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0738");
    },
    Error,
    "encode-error: U+0738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0739");
    },
    Error,
    "encode-error: U+0739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u073A");
    },
    Error,
    "encode-error: U+073A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u073B");
    },
    Error,
    "encode-error: U+073B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u073C");
    },
    Error,
    "encode-error: U+073C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u073D");
    },
    Error,
    "encode-error: U+073D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u073E");
    },
    Error,
    "encode-error: U+073E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u073F");
    },
    Error,
    "encode-error: U+073F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0740");
    },
    Error,
    "encode-error: U+0740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0741");
    },
    Error,
    "encode-error: U+0741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0742");
    },
    Error,
    "encode-error: U+0742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0743");
    },
    Error,
    "encode-error: U+0743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0744");
    },
    Error,
    "encode-error: U+0744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0745");
    },
    Error,
    "encode-error: U+0745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0746");
    },
    Error,
    "encode-error: U+0746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0747");
    },
    Error,
    "encode-error: U+0747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0748");
    },
    Error,
    "encode-error: U+0748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0749");
    },
    Error,
    "encode-error: U+0749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u074A");
    },
    Error,
    "encode-error: U+074A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u074B");
    },
    Error,
    "encode-error: U+074B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u074C");
    },
    Error,
    "encode-error: U+074C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u074D");
    },
    Error,
    "encode-error: U+074D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u074E");
    },
    Error,
    "encode-error: U+074E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u074F");
    },
    Error,
    "encode-error: U+074F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0750");
    },
    Error,
    "encode-error: U+0750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0751");
    },
    Error,
    "encode-error: U+0751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0752");
    },
    Error,
    "encode-error: U+0752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0753");
    },
    Error,
    "encode-error: U+0753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0754");
    },
    Error,
    "encode-error: U+0754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0755");
    },
    Error,
    "encode-error: U+0755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0756");
    },
    Error,
    "encode-error: U+0756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0757");
    },
    Error,
    "encode-error: U+0757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0758");
    },
    Error,
    "encode-error: U+0758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0759");
    },
    Error,
    "encode-error: U+0759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u075A");
    },
    Error,
    "encode-error: U+075A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u075B");
    },
    Error,
    "encode-error: U+075B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u075C");
    },
    Error,
    "encode-error: U+075C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u075D");
    },
    Error,
    "encode-error: U+075D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u075E");
    },
    Error,
    "encode-error: U+075E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u075F");
    },
    Error,
    "encode-error: U+075F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0760");
    },
    Error,
    "encode-error: U+0760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0761");
    },
    Error,
    "encode-error: U+0761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0762");
    },
    Error,
    "encode-error: U+0762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0763");
    },
    Error,
    "encode-error: U+0763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0764");
    },
    Error,
    "encode-error: U+0764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0765");
    },
    Error,
    "encode-error: U+0765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0766");
    },
    Error,
    "encode-error: U+0766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0767");
    },
    Error,
    "encode-error: U+0767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0768");
    },
    Error,
    "encode-error: U+0768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0769");
    },
    Error,
    "encode-error: U+0769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u076A");
    },
    Error,
    "encode-error: U+076A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u076B");
    },
    Error,
    "encode-error: U+076B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u076C");
    },
    Error,
    "encode-error: U+076C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u076D");
    },
    Error,
    "encode-error: U+076D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u076E");
    },
    Error,
    "encode-error: U+076E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u076F");
    },
    Error,
    "encode-error: U+076F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0770");
    },
    Error,
    "encode-error: U+0770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0771");
    },
    Error,
    "encode-error: U+0771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0772");
    },
    Error,
    "encode-error: U+0772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0773");
    },
    Error,
    "encode-error: U+0773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0774");
    },
    Error,
    "encode-error: U+0774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0775");
    },
    Error,
    "encode-error: U+0775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0776");
    },
    Error,
    "encode-error: U+0776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0777");
    },
    Error,
    "encode-error: U+0777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0778");
    },
    Error,
    "encode-error: U+0778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0779");
    },
    Error,
    "encode-error: U+0779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u077A");
    },
    Error,
    "encode-error: U+077A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u077B");
    },
    Error,
    "encode-error: U+077B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u077C");
    },
    Error,
    "encode-error: U+077C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u077D");
    },
    Error,
    "encode-error: U+077D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u077E");
    },
    Error,
    "encode-error: U+077E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u077F");
    },
    Error,
    "encode-error: U+077F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0780");
    },
    Error,
    "encode-error: U+0780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0781");
    },
    Error,
    "encode-error: U+0781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0782");
    },
    Error,
    "encode-error: U+0782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0783");
    },
    Error,
    "encode-error: U+0783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0784");
    },
    Error,
    "encode-error: U+0784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0785");
    },
    Error,
    "encode-error: U+0785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0786");
    },
    Error,
    "encode-error: U+0786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0787");
    },
    Error,
    "encode-error: U+0787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0788");
    },
    Error,
    "encode-error: U+0788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0789");
    },
    Error,
    "encode-error: U+0789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u078A");
    },
    Error,
    "encode-error: U+078A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u078B");
    },
    Error,
    "encode-error: U+078B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u078C");
    },
    Error,
    "encode-error: U+078C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u078D");
    },
    Error,
    "encode-error: U+078D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u078E");
    },
    Error,
    "encode-error: U+078E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u078F");
    },
    Error,
    "encode-error: U+078F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0790");
    },
    Error,
    "encode-error: U+0790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0791");
    },
    Error,
    "encode-error: U+0791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0792");
    },
    Error,
    "encode-error: U+0792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0793");
    },
    Error,
    "encode-error: U+0793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0794");
    },
    Error,
    "encode-error: U+0794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0795");
    },
    Error,
    "encode-error: U+0795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0796");
    },
    Error,
    "encode-error: U+0796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0797");
    },
    Error,
    "encode-error: U+0797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0798");
    },
    Error,
    "encode-error: U+0798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0799");
    },
    Error,
    "encode-error: U+0799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u079A");
    },
    Error,
    "encode-error: U+079A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u079B");
    },
    Error,
    "encode-error: U+079B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u079C");
    },
    Error,
    "encode-error: U+079C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u079D");
    },
    Error,
    "encode-error: U+079D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u079E");
    },
    Error,
    "encode-error: U+079E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u079F");
    },
    Error,
    "encode-error: U+079F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A0");
    },
    Error,
    "encode-error: U+07A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A1");
    },
    Error,
    "encode-error: U+07A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A2");
    },
    Error,
    "encode-error: U+07A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A3");
    },
    Error,
    "encode-error: U+07A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A4");
    },
    Error,
    "encode-error: U+07A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A5");
    },
    Error,
    "encode-error: U+07A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A6");
    },
    Error,
    "encode-error: U+07A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A7");
    },
    Error,
    "encode-error: U+07A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A8");
    },
    Error,
    "encode-error: U+07A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07A9");
    },
    Error,
    "encode-error: U+07A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07AA");
    },
    Error,
    "encode-error: U+07AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07AB");
    },
    Error,
    "encode-error: U+07AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07AC");
    },
    Error,
    "encode-error: U+07AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07AD");
    },
    Error,
    "encode-error: U+07AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07AE");
    },
    Error,
    "encode-error: U+07AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07AF");
    },
    Error,
    "encode-error: U+07AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B0");
    },
    Error,
    "encode-error: U+07B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B1");
    },
    Error,
    "encode-error: U+07B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B2");
    },
    Error,
    "encode-error: U+07B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B3");
    },
    Error,
    "encode-error: U+07B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B4");
    },
    Error,
    "encode-error: U+07B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B5");
    },
    Error,
    "encode-error: U+07B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B6");
    },
    Error,
    "encode-error: U+07B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B7");
    },
    Error,
    "encode-error: U+07B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B8");
    },
    Error,
    "encode-error: U+07B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07B9");
    },
    Error,
    "encode-error: U+07B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07BA");
    },
    Error,
    "encode-error: U+07BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07BB");
    },
    Error,
    "encode-error: U+07BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07BC");
    },
    Error,
    "encode-error: U+07BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07BD");
    },
    Error,
    "encode-error: U+07BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07BE");
    },
    Error,
    "encode-error: U+07BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07BF");
    },
    Error,
    "encode-error: U+07BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C0");
    },
    Error,
    "encode-error: U+07C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C1");
    },
    Error,
    "encode-error: U+07C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C2");
    },
    Error,
    "encode-error: U+07C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C3");
    },
    Error,
    "encode-error: U+07C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C4");
    },
    Error,
    "encode-error: U+07C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C5");
    },
    Error,
    "encode-error: U+07C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C6");
    },
    Error,
    "encode-error: U+07C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C7");
    },
    Error,
    "encode-error: U+07C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C8");
    },
    Error,
    "encode-error: U+07C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07C9");
    },
    Error,
    "encode-error: U+07C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07CA");
    },
    Error,
    "encode-error: U+07CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07CB");
    },
    Error,
    "encode-error: U+07CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07CC");
    },
    Error,
    "encode-error: U+07CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07CD");
    },
    Error,
    "encode-error: U+07CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07CE");
    },
    Error,
    "encode-error: U+07CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07CF");
    },
    Error,
    "encode-error: U+07CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D0");
    },
    Error,
    "encode-error: U+07D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D1");
    },
    Error,
    "encode-error: U+07D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D2");
    },
    Error,
    "encode-error: U+07D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D3");
    },
    Error,
    "encode-error: U+07D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D4");
    },
    Error,
    "encode-error: U+07D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D5");
    },
    Error,
    "encode-error: U+07D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D6");
    },
    Error,
    "encode-error: U+07D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D7");
    },
    Error,
    "encode-error: U+07D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D8");
    },
    Error,
    "encode-error: U+07D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07D9");
    },
    Error,
    "encode-error: U+07D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07DA");
    },
    Error,
    "encode-error: U+07DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07DB");
    },
    Error,
    "encode-error: U+07DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07DC");
    },
    Error,
    "encode-error: U+07DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07DD");
    },
    Error,
    "encode-error: U+07DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07DE");
    },
    Error,
    "encode-error: U+07DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07DF");
    },
    Error,
    "encode-error: U+07DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E0");
    },
    Error,
    "encode-error: U+07E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E1");
    },
    Error,
    "encode-error: U+07E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E2");
    },
    Error,
    "encode-error: U+07E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E3");
    },
    Error,
    "encode-error: U+07E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E4");
    },
    Error,
    "encode-error: U+07E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E5");
    },
    Error,
    "encode-error: U+07E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E6");
    },
    Error,
    "encode-error: U+07E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E7");
    },
    Error,
    "encode-error: U+07E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E8");
    },
    Error,
    "encode-error: U+07E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07E9");
    },
    Error,
    "encode-error: U+07E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07EA");
    },
    Error,
    "encode-error: U+07EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07EB");
    },
    Error,
    "encode-error: U+07EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07EC");
    },
    Error,
    "encode-error: U+07EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07ED");
    },
    Error,
    "encode-error: U+07ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07EE");
    },
    Error,
    "encode-error: U+07EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07EF");
    },
    Error,
    "encode-error: U+07EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F0");
    },
    Error,
    "encode-error: U+07F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F1");
    },
    Error,
    "encode-error: U+07F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F2");
    },
    Error,
    "encode-error: U+07F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F3");
    },
    Error,
    "encode-error: U+07F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F4");
    },
    Error,
    "encode-error: U+07F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F5");
    },
    Error,
    "encode-error: U+07F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F6");
    },
    Error,
    "encode-error: U+07F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F7");
    },
    Error,
    "encode-error: U+07F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F8");
    },
    Error,
    "encode-error: U+07F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07F9");
    },
    Error,
    "encode-error: U+07F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07FA");
    },
    Error,
    "encode-error: U+07FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07FB");
    },
    Error,
    "encode-error: U+07FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07FC");
    },
    Error,
    "encode-error: U+07FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07FD");
    },
    Error,
    "encode-error: U+07FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07FE");
    },
    Error,
    "encode-error: U+07FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u07FF");
    },
    Error,
    "encode-error: U+07FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0800");
    },
    Error,
    "encode-error: U+0800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0801");
    },
    Error,
    "encode-error: U+0801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0802");
    },
    Error,
    "encode-error: U+0802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0803");
    },
    Error,
    "encode-error: U+0803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0804");
    },
    Error,
    "encode-error: U+0804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0805");
    },
    Error,
    "encode-error: U+0805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0806");
    },
    Error,
    "encode-error: U+0806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0807");
    },
    Error,
    "encode-error: U+0807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0808");
    },
    Error,
    "encode-error: U+0808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0809");
    },
    Error,
    "encode-error: U+0809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u080A");
    },
    Error,
    "encode-error: U+080A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u080B");
    },
    Error,
    "encode-error: U+080B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u080C");
    },
    Error,
    "encode-error: U+080C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u080D");
    },
    Error,
    "encode-error: U+080D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u080E");
    },
    Error,
    "encode-error: U+080E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u080F");
    },
    Error,
    "encode-error: U+080F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0810");
    },
    Error,
    "encode-error: U+0810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0811");
    },
    Error,
    "encode-error: U+0811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0812");
    },
    Error,
    "encode-error: U+0812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0813");
    },
    Error,
    "encode-error: U+0813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0814");
    },
    Error,
    "encode-error: U+0814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0815");
    },
    Error,
    "encode-error: U+0815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0816");
    },
    Error,
    "encode-error: U+0816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0817");
    },
    Error,
    "encode-error: U+0817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0818");
    },
    Error,
    "encode-error: U+0818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0819");
    },
    Error,
    "encode-error: U+0819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u081A");
    },
    Error,
    "encode-error: U+081A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u081B");
    },
    Error,
    "encode-error: U+081B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u081C");
    },
    Error,
    "encode-error: U+081C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u081D");
    },
    Error,
    "encode-error: U+081D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u081E");
    },
    Error,
    "encode-error: U+081E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u081F");
    },
    Error,
    "encode-error: U+081F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0820");
    },
    Error,
    "encode-error: U+0820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0821");
    },
    Error,
    "encode-error: U+0821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0822");
    },
    Error,
    "encode-error: U+0822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0823");
    },
    Error,
    "encode-error: U+0823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0824");
    },
    Error,
    "encode-error: U+0824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0825");
    },
    Error,
    "encode-error: U+0825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0826");
    },
    Error,
    "encode-error: U+0826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0827");
    },
    Error,
    "encode-error: U+0827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0828");
    },
    Error,
    "encode-error: U+0828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0829");
    },
    Error,
    "encode-error: U+0829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u082A");
    },
    Error,
    "encode-error: U+082A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u082B");
    },
    Error,
    "encode-error: U+082B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u082C");
    },
    Error,
    "encode-error: U+082C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u082D");
    },
    Error,
    "encode-error: U+082D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u082E");
    },
    Error,
    "encode-error: U+082E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u082F");
    },
    Error,
    "encode-error: U+082F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0830");
    },
    Error,
    "encode-error: U+0830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0831");
    },
    Error,
    "encode-error: U+0831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0832");
    },
    Error,
    "encode-error: U+0832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0833");
    },
    Error,
    "encode-error: U+0833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0834");
    },
    Error,
    "encode-error: U+0834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0835");
    },
    Error,
    "encode-error: U+0835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0836");
    },
    Error,
    "encode-error: U+0836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0837");
    },
    Error,
    "encode-error: U+0837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0838");
    },
    Error,
    "encode-error: U+0838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0839");
    },
    Error,
    "encode-error: U+0839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u083A");
    },
    Error,
    "encode-error: U+083A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u083B");
    },
    Error,
    "encode-error: U+083B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u083C");
    },
    Error,
    "encode-error: U+083C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u083D");
    },
    Error,
    "encode-error: U+083D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u083E");
    },
    Error,
    "encode-error: U+083E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u083F");
    },
    Error,
    "encode-error: U+083F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0840");
    },
    Error,
    "encode-error: U+0840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0841");
    },
    Error,
    "encode-error: U+0841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0842");
    },
    Error,
    "encode-error: U+0842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0843");
    },
    Error,
    "encode-error: U+0843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0844");
    },
    Error,
    "encode-error: U+0844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0845");
    },
    Error,
    "encode-error: U+0845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0846");
    },
    Error,
    "encode-error: U+0846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0847");
    },
    Error,
    "encode-error: U+0847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0848");
    },
    Error,
    "encode-error: U+0848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0849");
    },
    Error,
    "encode-error: U+0849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u084A");
    },
    Error,
    "encode-error: U+084A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u084B");
    },
    Error,
    "encode-error: U+084B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u084C");
    },
    Error,
    "encode-error: U+084C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u084D");
    },
    Error,
    "encode-error: U+084D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u084E");
    },
    Error,
    "encode-error: U+084E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u084F");
    },
    Error,
    "encode-error: U+084F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0850");
    },
    Error,
    "encode-error: U+0850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0851");
    },
    Error,
    "encode-error: U+0851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0852");
    },
    Error,
    "encode-error: U+0852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0853");
    },
    Error,
    "encode-error: U+0853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0854");
    },
    Error,
    "encode-error: U+0854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0855");
    },
    Error,
    "encode-error: U+0855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0856");
    },
    Error,
    "encode-error: U+0856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0857");
    },
    Error,
    "encode-error: U+0857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0858");
    },
    Error,
    "encode-error: U+0858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0859");
    },
    Error,
    "encode-error: U+0859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u085A");
    },
    Error,
    "encode-error: U+085A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u085B");
    },
    Error,
    "encode-error: U+085B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u085C");
    },
    Error,
    "encode-error: U+085C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u085D");
    },
    Error,
    "encode-error: U+085D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u085E");
    },
    Error,
    "encode-error: U+085E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u085F");
    },
    Error,
    "encode-error: U+085F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0860");
    },
    Error,
    "encode-error: U+0860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0861");
    },
    Error,
    "encode-error: U+0861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0862");
    },
    Error,
    "encode-error: U+0862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0863");
    },
    Error,
    "encode-error: U+0863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0864");
    },
    Error,
    "encode-error: U+0864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0865");
    },
    Error,
    "encode-error: U+0865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0866");
    },
    Error,
    "encode-error: U+0866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0867");
    },
    Error,
    "encode-error: U+0867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0868");
    },
    Error,
    "encode-error: U+0868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0869");
    },
    Error,
    "encode-error: U+0869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u086A");
    },
    Error,
    "encode-error: U+086A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u086B");
    },
    Error,
    "encode-error: U+086B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u086C");
    },
    Error,
    "encode-error: U+086C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u086D");
    },
    Error,
    "encode-error: U+086D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u086E");
    },
    Error,
    "encode-error: U+086E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u086F");
    },
    Error,
    "encode-error: U+086F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0870");
    },
    Error,
    "encode-error: U+0870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0871");
    },
    Error,
    "encode-error: U+0871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0872");
    },
    Error,
    "encode-error: U+0872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0873");
    },
    Error,
    "encode-error: U+0873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0874");
    },
    Error,
    "encode-error: U+0874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0875");
    },
    Error,
    "encode-error: U+0875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0876");
    },
    Error,
    "encode-error: U+0876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0877");
    },
    Error,
    "encode-error: U+0877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0878");
    },
    Error,
    "encode-error: U+0878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0879");
    },
    Error,
    "encode-error: U+0879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u087A");
    },
    Error,
    "encode-error: U+087A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u087B");
    },
    Error,
    "encode-error: U+087B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u087C");
    },
    Error,
    "encode-error: U+087C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u087D");
    },
    Error,
    "encode-error: U+087D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u087E");
    },
    Error,
    "encode-error: U+087E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u087F");
    },
    Error,
    "encode-error: U+087F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0880");
    },
    Error,
    "encode-error: U+0880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0881");
    },
    Error,
    "encode-error: U+0881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0882");
    },
    Error,
    "encode-error: U+0882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0883");
    },
    Error,
    "encode-error: U+0883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0884");
    },
    Error,
    "encode-error: U+0884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0885");
    },
    Error,
    "encode-error: U+0885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0886");
    },
    Error,
    "encode-error: U+0886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0887");
    },
    Error,
    "encode-error: U+0887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0888");
    },
    Error,
    "encode-error: U+0888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0889");
    },
    Error,
    "encode-error: U+0889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u088A");
    },
    Error,
    "encode-error: U+088A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u088B");
    },
    Error,
    "encode-error: U+088B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u088C");
    },
    Error,
    "encode-error: U+088C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u088D");
    },
    Error,
    "encode-error: U+088D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u088E");
    },
    Error,
    "encode-error: U+088E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u088F");
    },
    Error,
    "encode-error: U+088F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0890");
    },
    Error,
    "encode-error: U+0890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0891");
    },
    Error,
    "encode-error: U+0891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0892");
    },
    Error,
    "encode-error: U+0892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0893");
    },
    Error,
    "encode-error: U+0893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0894");
    },
    Error,
    "encode-error: U+0894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0895");
    },
    Error,
    "encode-error: U+0895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0896");
    },
    Error,
    "encode-error: U+0896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0897");
    },
    Error,
    "encode-error: U+0897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0898");
    },
    Error,
    "encode-error: U+0898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0899");
    },
    Error,
    "encode-error: U+0899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u089A");
    },
    Error,
    "encode-error: U+089A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u089B");
    },
    Error,
    "encode-error: U+089B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u089C");
    },
    Error,
    "encode-error: U+089C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u089D");
    },
    Error,
    "encode-error: U+089D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u089E");
    },
    Error,
    "encode-error: U+089E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u089F");
    },
    Error,
    "encode-error: U+089F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A0");
    },
    Error,
    "encode-error: U+08A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A1");
    },
    Error,
    "encode-error: U+08A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A2");
    },
    Error,
    "encode-error: U+08A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A3");
    },
    Error,
    "encode-error: U+08A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A4");
    },
    Error,
    "encode-error: U+08A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A5");
    },
    Error,
    "encode-error: U+08A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A6");
    },
    Error,
    "encode-error: U+08A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A7");
    },
    Error,
    "encode-error: U+08A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A8");
    },
    Error,
    "encode-error: U+08A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08A9");
    },
    Error,
    "encode-error: U+08A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08AA");
    },
    Error,
    "encode-error: U+08AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08AB");
    },
    Error,
    "encode-error: U+08AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08AC");
    },
    Error,
    "encode-error: U+08AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08AD");
    },
    Error,
    "encode-error: U+08AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08AE");
    },
    Error,
    "encode-error: U+08AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08AF");
    },
    Error,
    "encode-error: U+08AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B0");
    },
    Error,
    "encode-error: U+08B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B1");
    },
    Error,
    "encode-error: U+08B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B2");
    },
    Error,
    "encode-error: U+08B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B3");
    },
    Error,
    "encode-error: U+08B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B4");
    },
    Error,
    "encode-error: U+08B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B5");
    },
    Error,
    "encode-error: U+08B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B6");
    },
    Error,
    "encode-error: U+08B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B7");
    },
    Error,
    "encode-error: U+08B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B8");
    },
    Error,
    "encode-error: U+08B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08B9");
    },
    Error,
    "encode-error: U+08B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08BA");
    },
    Error,
    "encode-error: U+08BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08BB");
    },
    Error,
    "encode-error: U+08BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08BC");
    },
    Error,
    "encode-error: U+08BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08BD");
    },
    Error,
    "encode-error: U+08BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08BE");
    },
    Error,
    "encode-error: U+08BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08BF");
    },
    Error,
    "encode-error: U+08BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C0");
    },
    Error,
    "encode-error: U+08C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C1");
    },
    Error,
    "encode-error: U+08C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C2");
    },
    Error,
    "encode-error: U+08C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C3");
    },
    Error,
    "encode-error: U+08C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C4");
    },
    Error,
    "encode-error: U+08C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C5");
    },
    Error,
    "encode-error: U+08C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C6");
    },
    Error,
    "encode-error: U+08C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C7");
    },
    Error,
    "encode-error: U+08C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C8");
    },
    Error,
    "encode-error: U+08C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08C9");
    },
    Error,
    "encode-error: U+08C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08CA");
    },
    Error,
    "encode-error: U+08CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08CB");
    },
    Error,
    "encode-error: U+08CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08CC");
    },
    Error,
    "encode-error: U+08CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08CD");
    },
    Error,
    "encode-error: U+08CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08CE");
    },
    Error,
    "encode-error: U+08CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08CF");
    },
    Error,
    "encode-error: U+08CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D0");
    },
    Error,
    "encode-error: U+08D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D1");
    },
    Error,
    "encode-error: U+08D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D2");
    },
    Error,
    "encode-error: U+08D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D3");
    },
    Error,
    "encode-error: U+08D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D4");
    },
    Error,
    "encode-error: U+08D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D5");
    },
    Error,
    "encode-error: U+08D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D6");
    },
    Error,
    "encode-error: U+08D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D7");
    },
    Error,
    "encode-error: U+08D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D8");
    },
    Error,
    "encode-error: U+08D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08D9");
    },
    Error,
    "encode-error: U+08D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08DA");
    },
    Error,
    "encode-error: U+08DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08DB");
    },
    Error,
    "encode-error: U+08DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08DC");
    },
    Error,
    "encode-error: U+08DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08DD");
    },
    Error,
    "encode-error: U+08DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08DE");
    },
    Error,
    "encode-error: U+08DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08DF");
    },
    Error,
    "encode-error: U+08DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E0");
    },
    Error,
    "encode-error: U+08E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E1");
    },
    Error,
    "encode-error: U+08E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E2");
    },
    Error,
    "encode-error: U+08E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E3");
    },
    Error,
    "encode-error: U+08E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E4");
    },
    Error,
    "encode-error: U+08E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E5");
    },
    Error,
    "encode-error: U+08E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E6");
    },
    Error,
    "encode-error: U+08E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E7");
    },
    Error,
    "encode-error: U+08E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E8");
    },
    Error,
    "encode-error: U+08E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08E9");
    },
    Error,
    "encode-error: U+08E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08EA");
    },
    Error,
    "encode-error: U+08EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08EB");
    },
    Error,
    "encode-error: U+08EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08EC");
    },
    Error,
    "encode-error: U+08EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08ED");
    },
    Error,
    "encode-error: U+08ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08EE");
    },
    Error,
    "encode-error: U+08EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08EF");
    },
    Error,
    "encode-error: U+08EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F0");
    },
    Error,
    "encode-error: U+08F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F1");
    },
    Error,
    "encode-error: U+08F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F2");
    },
    Error,
    "encode-error: U+08F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F3");
    },
    Error,
    "encode-error: U+08F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F4");
    },
    Error,
    "encode-error: U+08F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F5");
    },
    Error,
    "encode-error: U+08F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F6");
    },
    Error,
    "encode-error: U+08F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F7");
    },
    Error,
    "encode-error: U+08F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F8");
    },
    Error,
    "encode-error: U+08F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08F9");
    },
    Error,
    "encode-error: U+08F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08FA");
    },
    Error,
    "encode-error: U+08FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08FB");
    },
    Error,
    "encode-error: U+08FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08FC");
    },
    Error,
    "encode-error: U+08FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08FD");
    },
    Error,
    "encode-error: U+08FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08FE");
    },
    Error,
    "encode-error: U+08FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u08FF");
    },
    Error,
    "encode-error: U+08FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0900");
    },
    Error,
    "encode-error: U+0900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0901");
    },
    Error,
    "encode-error: U+0901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0902");
    },
    Error,
    "encode-error: U+0902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0903");
    },
    Error,
    "encode-error: U+0903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0904");
    },
    Error,
    "encode-error: U+0904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0905");
    },
    Error,
    "encode-error: U+0905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0906");
    },
    Error,
    "encode-error: U+0906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0907");
    },
    Error,
    "encode-error: U+0907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0908");
    },
    Error,
    "encode-error: U+0908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0909");
    },
    Error,
    "encode-error: U+0909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u090A");
    },
    Error,
    "encode-error: U+090A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u090B");
    },
    Error,
    "encode-error: U+090B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u090C");
    },
    Error,
    "encode-error: U+090C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u090D");
    },
    Error,
    "encode-error: U+090D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u090E");
    },
    Error,
    "encode-error: U+090E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u090F");
    },
    Error,
    "encode-error: U+090F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0910");
    },
    Error,
    "encode-error: U+0910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0911");
    },
    Error,
    "encode-error: U+0911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0912");
    },
    Error,
    "encode-error: U+0912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0913");
    },
    Error,
    "encode-error: U+0913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0914");
    },
    Error,
    "encode-error: U+0914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0915");
    },
    Error,
    "encode-error: U+0915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0916");
    },
    Error,
    "encode-error: U+0916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0917");
    },
    Error,
    "encode-error: U+0917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0918");
    },
    Error,
    "encode-error: U+0918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0919");
    },
    Error,
    "encode-error: U+0919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u091A");
    },
    Error,
    "encode-error: U+091A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u091B");
    },
    Error,
    "encode-error: U+091B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u091C");
    },
    Error,
    "encode-error: U+091C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u091D");
    },
    Error,
    "encode-error: U+091D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u091E");
    },
    Error,
    "encode-error: U+091E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u091F");
    },
    Error,
    "encode-error: U+091F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0920");
    },
    Error,
    "encode-error: U+0920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0921");
    },
    Error,
    "encode-error: U+0921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0922");
    },
    Error,
    "encode-error: U+0922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0923");
    },
    Error,
    "encode-error: U+0923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0924");
    },
    Error,
    "encode-error: U+0924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0925");
    },
    Error,
    "encode-error: U+0925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0926");
    },
    Error,
    "encode-error: U+0926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0927");
    },
    Error,
    "encode-error: U+0927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0928");
    },
    Error,
    "encode-error: U+0928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0929");
    },
    Error,
    "encode-error: U+0929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u092A");
    },
    Error,
    "encode-error: U+092A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u092B");
    },
    Error,
    "encode-error: U+092B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u092C");
    },
    Error,
    "encode-error: U+092C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u092D");
    },
    Error,
    "encode-error: U+092D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u092E");
    },
    Error,
    "encode-error: U+092E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u092F");
    },
    Error,
    "encode-error: U+092F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0930");
    },
    Error,
    "encode-error: U+0930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0931");
    },
    Error,
    "encode-error: U+0931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0932");
    },
    Error,
    "encode-error: U+0932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0933");
    },
    Error,
    "encode-error: U+0933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0934");
    },
    Error,
    "encode-error: U+0934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0935");
    },
    Error,
    "encode-error: U+0935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0936");
    },
    Error,
    "encode-error: U+0936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0937");
    },
    Error,
    "encode-error: U+0937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0938");
    },
    Error,
    "encode-error: U+0938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0939");
    },
    Error,
    "encode-error: U+0939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u093A");
    },
    Error,
    "encode-error: U+093A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u093B");
    },
    Error,
    "encode-error: U+093B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u093C");
    },
    Error,
    "encode-error: U+093C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u093D");
    },
    Error,
    "encode-error: U+093D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u093E");
    },
    Error,
    "encode-error: U+093E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u093F");
    },
    Error,
    "encode-error: U+093F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0940");
    },
    Error,
    "encode-error: U+0940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0941");
    },
    Error,
    "encode-error: U+0941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0942");
    },
    Error,
    "encode-error: U+0942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0943");
    },
    Error,
    "encode-error: U+0943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0944");
    },
    Error,
    "encode-error: U+0944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0945");
    },
    Error,
    "encode-error: U+0945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0946");
    },
    Error,
    "encode-error: U+0946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0947");
    },
    Error,
    "encode-error: U+0947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0948");
    },
    Error,
    "encode-error: U+0948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0949");
    },
    Error,
    "encode-error: U+0949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u094A");
    },
    Error,
    "encode-error: U+094A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u094B");
    },
    Error,
    "encode-error: U+094B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u094C");
    },
    Error,
    "encode-error: U+094C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u094D");
    },
    Error,
    "encode-error: U+094D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u094E");
    },
    Error,
    "encode-error: U+094E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u094F");
    },
    Error,
    "encode-error: U+094F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0950");
    },
    Error,
    "encode-error: U+0950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0951");
    },
    Error,
    "encode-error: U+0951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0952");
    },
    Error,
    "encode-error: U+0952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0953");
    },
    Error,
    "encode-error: U+0953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0954");
    },
    Error,
    "encode-error: U+0954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0955");
    },
    Error,
    "encode-error: U+0955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0956");
    },
    Error,
    "encode-error: U+0956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0957");
    },
    Error,
    "encode-error: U+0957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0958");
    },
    Error,
    "encode-error: U+0958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0959");
    },
    Error,
    "encode-error: U+0959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u095A");
    },
    Error,
    "encode-error: U+095A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u095B");
    },
    Error,
    "encode-error: U+095B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u095C");
    },
    Error,
    "encode-error: U+095C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u095D");
    },
    Error,
    "encode-error: U+095D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u095E");
    },
    Error,
    "encode-error: U+095E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u095F");
    },
    Error,
    "encode-error: U+095F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0960");
    },
    Error,
    "encode-error: U+0960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0961");
    },
    Error,
    "encode-error: U+0961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0962");
    },
    Error,
    "encode-error: U+0962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0963");
    },
    Error,
    "encode-error: U+0963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0964");
    },
    Error,
    "encode-error: U+0964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0965");
    },
    Error,
    "encode-error: U+0965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0966");
    },
    Error,
    "encode-error: U+0966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0967");
    },
    Error,
    "encode-error: U+0967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0968");
    },
    Error,
    "encode-error: U+0968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0969");
    },
    Error,
    "encode-error: U+0969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u096A");
    },
    Error,
    "encode-error: U+096A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u096B");
    },
    Error,
    "encode-error: U+096B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u096C");
    },
    Error,
    "encode-error: U+096C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u096D");
    },
    Error,
    "encode-error: U+096D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u096E");
    },
    Error,
    "encode-error: U+096E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u096F");
    },
    Error,
    "encode-error: U+096F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0970");
    },
    Error,
    "encode-error: U+0970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0971");
    },
    Error,
    "encode-error: U+0971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0972");
    },
    Error,
    "encode-error: U+0972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0973");
    },
    Error,
    "encode-error: U+0973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0974");
    },
    Error,
    "encode-error: U+0974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0975");
    },
    Error,
    "encode-error: U+0975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0976");
    },
    Error,
    "encode-error: U+0976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0977");
    },
    Error,
    "encode-error: U+0977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0978");
    },
    Error,
    "encode-error: U+0978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0979");
    },
    Error,
    "encode-error: U+0979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u097A");
    },
    Error,
    "encode-error: U+097A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u097B");
    },
    Error,
    "encode-error: U+097B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u097C");
    },
    Error,
    "encode-error: U+097C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u097D");
    },
    Error,
    "encode-error: U+097D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u097E");
    },
    Error,
    "encode-error: U+097E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u097F");
    },
    Error,
    "encode-error: U+097F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0980");
    },
    Error,
    "encode-error: U+0980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0981");
    },
    Error,
    "encode-error: U+0981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0982");
    },
    Error,
    "encode-error: U+0982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0983");
    },
    Error,
    "encode-error: U+0983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0984");
    },
    Error,
    "encode-error: U+0984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0985");
    },
    Error,
    "encode-error: U+0985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0986");
    },
    Error,
    "encode-error: U+0986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0987");
    },
    Error,
    "encode-error: U+0987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0988");
    },
    Error,
    "encode-error: U+0988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0989");
    },
    Error,
    "encode-error: U+0989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u098A");
    },
    Error,
    "encode-error: U+098A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u098B");
    },
    Error,
    "encode-error: U+098B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u098C");
    },
    Error,
    "encode-error: U+098C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u098D");
    },
    Error,
    "encode-error: U+098D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u098E");
    },
    Error,
    "encode-error: U+098E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u098F");
    },
    Error,
    "encode-error: U+098F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0990");
    },
    Error,
    "encode-error: U+0990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0991");
    },
    Error,
    "encode-error: U+0991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0992");
    },
    Error,
    "encode-error: U+0992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0993");
    },
    Error,
    "encode-error: U+0993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0994");
    },
    Error,
    "encode-error: U+0994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0995");
    },
    Error,
    "encode-error: U+0995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0996");
    },
    Error,
    "encode-error: U+0996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0997");
    },
    Error,
    "encode-error: U+0997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0998");
    },
    Error,
    "encode-error: U+0998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0999");
    },
    Error,
    "encode-error: U+0999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u099A");
    },
    Error,
    "encode-error: U+099A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u099B");
    },
    Error,
    "encode-error: U+099B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u099C");
    },
    Error,
    "encode-error: U+099C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u099D");
    },
    Error,
    "encode-error: U+099D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u099E");
    },
    Error,
    "encode-error: U+099E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u099F");
    },
    Error,
    "encode-error: U+099F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A0");
    },
    Error,
    "encode-error: U+09A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A1");
    },
    Error,
    "encode-error: U+09A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A2");
    },
    Error,
    "encode-error: U+09A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A3");
    },
    Error,
    "encode-error: U+09A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A4");
    },
    Error,
    "encode-error: U+09A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A5");
    },
    Error,
    "encode-error: U+09A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A6");
    },
    Error,
    "encode-error: U+09A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A7");
    },
    Error,
    "encode-error: U+09A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A8");
    },
    Error,
    "encode-error: U+09A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09A9");
    },
    Error,
    "encode-error: U+09A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09AA");
    },
    Error,
    "encode-error: U+09AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09AB");
    },
    Error,
    "encode-error: U+09AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09AC");
    },
    Error,
    "encode-error: U+09AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09AD");
    },
    Error,
    "encode-error: U+09AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09AE");
    },
    Error,
    "encode-error: U+09AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09AF");
    },
    Error,
    "encode-error: U+09AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B0");
    },
    Error,
    "encode-error: U+09B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B1");
    },
    Error,
    "encode-error: U+09B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B2");
    },
    Error,
    "encode-error: U+09B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B3");
    },
    Error,
    "encode-error: U+09B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B4");
    },
    Error,
    "encode-error: U+09B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B5");
    },
    Error,
    "encode-error: U+09B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B6");
    },
    Error,
    "encode-error: U+09B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B7");
    },
    Error,
    "encode-error: U+09B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B8");
    },
    Error,
    "encode-error: U+09B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09B9");
    },
    Error,
    "encode-error: U+09B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09BA");
    },
    Error,
    "encode-error: U+09BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09BB");
    },
    Error,
    "encode-error: U+09BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09BC");
    },
    Error,
    "encode-error: U+09BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09BD");
    },
    Error,
    "encode-error: U+09BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09BE");
    },
    Error,
    "encode-error: U+09BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09BF");
    },
    Error,
    "encode-error: U+09BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C0");
    },
    Error,
    "encode-error: U+09C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C1");
    },
    Error,
    "encode-error: U+09C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C2");
    },
    Error,
    "encode-error: U+09C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C3");
    },
    Error,
    "encode-error: U+09C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C4");
    },
    Error,
    "encode-error: U+09C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C5");
    },
    Error,
    "encode-error: U+09C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C6");
    },
    Error,
    "encode-error: U+09C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C7");
    },
    Error,
    "encode-error: U+09C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C8");
    },
    Error,
    "encode-error: U+09C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09C9");
    },
    Error,
    "encode-error: U+09C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09CA");
    },
    Error,
    "encode-error: U+09CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09CB");
    },
    Error,
    "encode-error: U+09CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09CC");
    },
    Error,
    "encode-error: U+09CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09CD");
    },
    Error,
    "encode-error: U+09CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09CE");
    },
    Error,
    "encode-error: U+09CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09CF");
    },
    Error,
    "encode-error: U+09CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D0");
    },
    Error,
    "encode-error: U+09D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D1");
    },
    Error,
    "encode-error: U+09D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D2");
    },
    Error,
    "encode-error: U+09D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D3");
    },
    Error,
    "encode-error: U+09D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D4");
    },
    Error,
    "encode-error: U+09D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D5");
    },
    Error,
    "encode-error: U+09D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D6");
    },
    Error,
    "encode-error: U+09D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D7");
    },
    Error,
    "encode-error: U+09D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D8");
    },
    Error,
    "encode-error: U+09D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09D9");
    },
    Error,
    "encode-error: U+09D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09DA");
    },
    Error,
    "encode-error: U+09DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09DB");
    },
    Error,
    "encode-error: U+09DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09DC");
    },
    Error,
    "encode-error: U+09DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09DD");
    },
    Error,
    "encode-error: U+09DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09DE");
    },
    Error,
    "encode-error: U+09DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09DF");
    },
    Error,
    "encode-error: U+09DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E0");
    },
    Error,
    "encode-error: U+09E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E1");
    },
    Error,
    "encode-error: U+09E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E2");
    },
    Error,
    "encode-error: U+09E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E3");
    },
    Error,
    "encode-error: U+09E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E4");
    },
    Error,
    "encode-error: U+09E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E5");
    },
    Error,
    "encode-error: U+09E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E6");
    },
    Error,
    "encode-error: U+09E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E7");
    },
    Error,
    "encode-error: U+09E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E8");
    },
    Error,
    "encode-error: U+09E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09E9");
    },
    Error,
    "encode-error: U+09E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09EA");
    },
    Error,
    "encode-error: U+09EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09EB");
    },
    Error,
    "encode-error: U+09EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09EC");
    },
    Error,
    "encode-error: U+09EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09ED");
    },
    Error,
    "encode-error: U+09ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09EE");
    },
    Error,
    "encode-error: U+09EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09EF");
    },
    Error,
    "encode-error: U+09EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F0");
    },
    Error,
    "encode-error: U+09F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F1");
    },
    Error,
    "encode-error: U+09F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F2");
    },
    Error,
    "encode-error: U+09F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F3");
    },
    Error,
    "encode-error: U+09F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F4");
    },
    Error,
    "encode-error: U+09F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F5");
    },
    Error,
    "encode-error: U+09F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F6");
    },
    Error,
    "encode-error: U+09F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F7");
    },
    Error,
    "encode-error: U+09F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F8");
    },
    Error,
    "encode-error: U+09F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09F9");
    },
    Error,
    "encode-error: U+09F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09FA");
    },
    Error,
    "encode-error: U+09FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09FB");
    },
    Error,
    "encode-error: U+09FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09FC");
    },
    Error,
    "encode-error: U+09FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09FD");
    },
    Error,
    "encode-error: U+09FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09FE");
    },
    Error,
    "encode-error: U+09FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u09FF");
    },
    Error,
    "encode-error: U+09FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A00");
    },
    Error,
    "encode-error: U+0A00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A01");
    },
    Error,
    "encode-error: U+0A01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A02");
    },
    Error,
    "encode-error: U+0A02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A03");
    },
    Error,
    "encode-error: U+0A03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A04");
    },
    Error,
    "encode-error: U+0A04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A05");
    },
    Error,
    "encode-error: U+0A05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A06");
    },
    Error,
    "encode-error: U+0A06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A07");
    },
    Error,
    "encode-error: U+0A07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A08");
    },
    Error,
    "encode-error: U+0A08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A09");
    },
    Error,
    "encode-error: U+0A09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A0A");
    },
    Error,
    "encode-error: U+0A0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A0B");
    },
    Error,
    "encode-error: U+0A0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A0C");
    },
    Error,
    "encode-error: U+0A0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A0D");
    },
    Error,
    "encode-error: U+0A0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A0E");
    },
    Error,
    "encode-error: U+0A0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A0F");
    },
    Error,
    "encode-error: U+0A0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A10");
    },
    Error,
    "encode-error: U+0A10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A11");
    },
    Error,
    "encode-error: U+0A11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A12");
    },
    Error,
    "encode-error: U+0A12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A13");
    },
    Error,
    "encode-error: U+0A13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A14");
    },
    Error,
    "encode-error: U+0A14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A15");
    },
    Error,
    "encode-error: U+0A15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A16");
    },
    Error,
    "encode-error: U+0A16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A17");
    },
    Error,
    "encode-error: U+0A17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A18");
    },
    Error,
    "encode-error: U+0A18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A19");
    },
    Error,
    "encode-error: U+0A19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A1A");
    },
    Error,
    "encode-error: U+0A1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A1B");
    },
    Error,
    "encode-error: U+0A1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A1C");
    },
    Error,
    "encode-error: U+0A1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A1D");
    },
    Error,
    "encode-error: U+0A1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A1E");
    },
    Error,
    "encode-error: U+0A1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A1F");
    },
    Error,
    "encode-error: U+0A1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A20");
    },
    Error,
    "encode-error: U+0A20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A21");
    },
    Error,
    "encode-error: U+0A21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A22");
    },
    Error,
    "encode-error: U+0A22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A23");
    },
    Error,
    "encode-error: U+0A23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A24");
    },
    Error,
    "encode-error: U+0A24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A25");
    },
    Error,
    "encode-error: U+0A25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A26");
    },
    Error,
    "encode-error: U+0A26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A27");
    },
    Error,
    "encode-error: U+0A27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A28");
    },
    Error,
    "encode-error: U+0A28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A29");
    },
    Error,
    "encode-error: U+0A29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A2A");
    },
    Error,
    "encode-error: U+0A2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A2B");
    },
    Error,
    "encode-error: U+0A2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A2C");
    },
    Error,
    "encode-error: U+0A2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A2D");
    },
    Error,
    "encode-error: U+0A2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A2E");
    },
    Error,
    "encode-error: U+0A2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A2F");
    },
    Error,
    "encode-error: U+0A2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A30");
    },
    Error,
    "encode-error: U+0A30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A31");
    },
    Error,
    "encode-error: U+0A31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A32");
    },
    Error,
    "encode-error: U+0A32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A33");
    },
    Error,
    "encode-error: U+0A33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A34");
    },
    Error,
    "encode-error: U+0A34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A35");
    },
    Error,
    "encode-error: U+0A35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A36");
    },
    Error,
    "encode-error: U+0A36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A37");
    },
    Error,
    "encode-error: U+0A37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A38");
    },
    Error,
    "encode-error: U+0A38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A39");
    },
    Error,
    "encode-error: U+0A39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A3A");
    },
    Error,
    "encode-error: U+0A3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A3B");
    },
    Error,
    "encode-error: U+0A3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A3C");
    },
    Error,
    "encode-error: U+0A3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A3D");
    },
    Error,
    "encode-error: U+0A3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A3E");
    },
    Error,
    "encode-error: U+0A3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A3F");
    },
    Error,
    "encode-error: U+0A3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A40");
    },
    Error,
    "encode-error: U+0A40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A41");
    },
    Error,
    "encode-error: U+0A41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A42");
    },
    Error,
    "encode-error: U+0A42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A43");
    },
    Error,
    "encode-error: U+0A43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A44");
    },
    Error,
    "encode-error: U+0A44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A45");
    },
    Error,
    "encode-error: U+0A45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A46");
    },
    Error,
    "encode-error: U+0A46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A47");
    },
    Error,
    "encode-error: U+0A47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A48");
    },
    Error,
    "encode-error: U+0A48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A49");
    },
    Error,
    "encode-error: U+0A49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A4A");
    },
    Error,
    "encode-error: U+0A4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A4B");
    },
    Error,
    "encode-error: U+0A4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A4C");
    },
    Error,
    "encode-error: U+0A4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A4D");
    },
    Error,
    "encode-error: U+0A4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A4E");
    },
    Error,
    "encode-error: U+0A4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A4F");
    },
    Error,
    "encode-error: U+0A4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A50");
    },
    Error,
    "encode-error: U+0A50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A51");
    },
    Error,
    "encode-error: U+0A51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A52");
    },
    Error,
    "encode-error: U+0A52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A53");
    },
    Error,
    "encode-error: U+0A53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A54");
    },
    Error,
    "encode-error: U+0A54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A55");
    },
    Error,
    "encode-error: U+0A55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A56");
    },
    Error,
    "encode-error: U+0A56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A57");
    },
    Error,
    "encode-error: U+0A57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A58");
    },
    Error,
    "encode-error: U+0A58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A59");
    },
    Error,
    "encode-error: U+0A59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A5A");
    },
    Error,
    "encode-error: U+0A5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A5B");
    },
    Error,
    "encode-error: U+0A5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A5C");
    },
    Error,
    "encode-error: U+0A5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A5D");
    },
    Error,
    "encode-error: U+0A5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A5E");
    },
    Error,
    "encode-error: U+0A5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A5F");
    },
    Error,
    "encode-error: U+0A5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A60");
    },
    Error,
    "encode-error: U+0A60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A61");
    },
    Error,
    "encode-error: U+0A61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A62");
    },
    Error,
    "encode-error: U+0A62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A63");
    },
    Error,
    "encode-error: U+0A63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A64");
    },
    Error,
    "encode-error: U+0A64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A65");
    },
    Error,
    "encode-error: U+0A65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A66");
    },
    Error,
    "encode-error: U+0A66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A67");
    },
    Error,
    "encode-error: U+0A67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A68");
    },
    Error,
    "encode-error: U+0A68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A69");
    },
    Error,
    "encode-error: U+0A69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A6A");
    },
    Error,
    "encode-error: U+0A6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A6B");
    },
    Error,
    "encode-error: U+0A6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A6C");
    },
    Error,
    "encode-error: U+0A6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A6D");
    },
    Error,
    "encode-error: U+0A6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A6E");
    },
    Error,
    "encode-error: U+0A6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A6F");
    },
    Error,
    "encode-error: U+0A6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A70");
    },
    Error,
    "encode-error: U+0A70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A71");
    },
    Error,
    "encode-error: U+0A71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A72");
    },
    Error,
    "encode-error: U+0A72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A73");
    },
    Error,
    "encode-error: U+0A73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A74");
    },
    Error,
    "encode-error: U+0A74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A75");
    },
    Error,
    "encode-error: U+0A75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A76");
    },
    Error,
    "encode-error: U+0A76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A77");
    },
    Error,
    "encode-error: U+0A77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A78");
    },
    Error,
    "encode-error: U+0A78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A79");
    },
    Error,
    "encode-error: U+0A79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A7A");
    },
    Error,
    "encode-error: U+0A7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A7B");
    },
    Error,
    "encode-error: U+0A7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A7C");
    },
    Error,
    "encode-error: U+0A7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A7D");
    },
    Error,
    "encode-error: U+0A7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A7E");
    },
    Error,
    "encode-error: U+0A7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A7F");
    },
    Error,
    "encode-error: U+0A7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A80");
    },
    Error,
    "encode-error: U+0A80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A81");
    },
    Error,
    "encode-error: U+0A81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A82");
    },
    Error,
    "encode-error: U+0A82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A83");
    },
    Error,
    "encode-error: U+0A83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A84");
    },
    Error,
    "encode-error: U+0A84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A85");
    },
    Error,
    "encode-error: U+0A85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A86");
    },
    Error,
    "encode-error: U+0A86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A87");
    },
    Error,
    "encode-error: U+0A87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A88");
    },
    Error,
    "encode-error: U+0A88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A89");
    },
    Error,
    "encode-error: U+0A89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A8A");
    },
    Error,
    "encode-error: U+0A8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A8B");
    },
    Error,
    "encode-error: U+0A8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A8C");
    },
    Error,
    "encode-error: U+0A8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A8D");
    },
    Error,
    "encode-error: U+0A8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A8E");
    },
    Error,
    "encode-error: U+0A8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A8F");
    },
    Error,
    "encode-error: U+0A8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A90");
    },
    Error,
    "encode-error: U+0A90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A91");
    },
    Error,
    "encode-error: U+0A91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A92");
    },
    Error,
    "encode-error: U+0A92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A93");
    },
    Error,
    "encode-error: U+0A93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A94");
    },
    Error,
    "encode-error: U+0A94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A95");
    },
    Error,
    "encode-error: U+0A95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A96");
    },
    Error,
    "encode-error: U+0A96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A97");
    },
    Error,
    "encode-error: U+0A97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A98");
    },
    Error,
    "encode-error: U+0A98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A99");
    },
    Error,
    "encode-error: U+0A99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A9A");
    },
    Error,
    "encode-error: U+0A9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A9B");
    },
    Error,
    "encode-error: U+0A9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A9C");
    },
    Error,
    "encode-error: U+0A9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A9D");
    },
    Error,
    "encode-error: U+0A9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A9E");
    },
    Error,
    "encode-error: U+0A9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0A9F");
    },
    Error,
    "encode-error: U+0A9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA0");
    },
    Error,
    "encode-error: U+0AA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA1");
    },
    Error,
    "encode-error: U+0AA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA2");
    },
    Error,
    "encode-error: U+0AA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA3");
    },
    Error,
    "encode-error: U+0AA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA4");
    },
    Error,
    "encode-error: U+0AA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA5");
    },
    Error,
    "encode-error: U+0AA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA6");
    },
    Error,
    "encode-error: U+0AA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA7");
    },
    Error,
    "encode-error: U+0AA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA8");
    },
    Error,
    "encode-error: U+0AA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AA9");
    },
    Error,
    "encode-error: U+0AA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AAA");
    },
    Error,
    "encode-error: U+0AAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AAB");
    },
    Error,
    "encode-error: U+0AAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AAC");
    },
    Error,
    "encode-error: U+0AAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AAD");
    },
    Error,
    "encode-error: U+0AAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AAE");
    },
    Error,
    "encode-error: U+0AAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AAF");
    },
    Error,
    "encode-error: U+0AAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB0");
    },
    Error,
    "encode-error: U+0AB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB1");
    },
    Error,
    "encode-error: U+0AB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB2");
    },
    Error,
    "encode-error: U+0AB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB3");
    },
    Error,
    "encode-error: U+0AB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB4");
    },
    Error,
    "encode-error: U+0AB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB5");
    },
    Error,
    "encode-error: U+0AB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB6");
    },
    Error,
    "encode-error: U+0AB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB7");
    },
    Error,
    "encode-error: U+0AB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB8");
    },
    Error,
    "encode-error: U+0AB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AB9");
    },
    Error,
    "encode-error: U+0AB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ABA");
    },
    Error,
    "encode-error: U+0ABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ABB");
    },
    Error,
    "encode-error: U+0ABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ABC");
    },
    Error,
    "encode-error: U+0ABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ABD");
    },
    Error,
    "encode-error: U+0ABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ABE");
    },
    Error,
    "encode-error: U+0ABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ABF");
    },
    Error,
    "encode-error: U+0ABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC0");
    },
    Error,
    "encode-error: U+0AC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC1");
    },
    Error,
    "encode-error: U+0AC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC2");
    },
    Error,
    "encode-error: U+0AC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC3");
    },
    Error,
    "encode-error: U+0AC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC4");
    },
    Error,
    "encode-error: U+0AC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC5");
    },
    Error,
    "encode-error: U+0AC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC6");
    },
    Error,
    "encode-error: U+0AC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC7");
    },
    Error,
    "encode-error: U+0AC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC8");
    },
    Error,
    "encode-error: U+0AC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AC9");
    },
    Error,
    "encode-error: U+0AC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ACA");
    },
    Error,
    "encode-error: U+0ACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ACB");
    },
    Error,
    "encode-error: U+0ACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ACC");
    },
    Error,
    "encode-error: U+0ACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ACD");
    },
    Error,
    "encode-error: U+0ACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ACE");
    },
    Error,
    "encode-error: U+0ACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ACF");
    },
    Error,
    "encode-error: U+0ACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD0");
    },
    Error,
    "encode-error: U+0AD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD1");
    },
    Error,
    "encode-error: U+0AD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD2");
    },
    Error,
    "encode-error: U+0AD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD3");
    },
    Error,
    "encode-error: U+0AD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD4");
    },
    Error,
    "encode-error: U+0AD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD5");
    },
    Error,
    "encode-error: U+0AD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD6");
    },
    Error,
    "encode-error: U+0AD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD7");
    },
    Error,
    "encode-error: U+0AD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD8");
    },
    Error,
    "encode-error: U+0AD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AD9");
    },
    Error,
    "encode-error: U+0AD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ADA");
    },
    Error,
    "encode-error: U+0ADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ADB");
    },
    Error,
    "encode-error: U+0ADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ADC");
    },
    Error,
    "encode-error: U+0ADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ADD");
    },
    Error,
    "encode-error: U+0ADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ADE");
    },
    Error,
    "encode-error: U+0ADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ADF");
    },
    Error,
    "encode-error: U+0ADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE0");
    },
    Error,
    "encode-error: U+0AE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE1");
    },
    Error,
    "encode-error: U+0AE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE2");
    },
    Error,
    "encode-error: U+0AE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE3");
    },
    Error,
    "encode-error: U+0AE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE4");
    },
    Error,
    "encode-error: U+0AE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE5");
    },
    Error,
    "encode-error: U+0AE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE6");
    },
    Error,
    "encode-error: U+0AE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE7");
    },
    Error,
    "encode-error: U+0AE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE8");
    },
    Error,
    "encode-error: U+0AE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AE9");
    },
    Error,
    "encode-error: U+0AE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AEA");
    },
    Error,
    "encode-error: U+0AEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AEB");
    },
    Error,
    "encode-error: U+0AEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AEC");
    },
    Error,
    "encode-error: U+0AEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AED");
    },
    Error,
    "encode-error: U+0AED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AEE");
    },
    Error,
    "encode-error: U+0AEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AEF");
    },
    Error,
    "encode-error: U+0AEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF0");
    },
    Error,
    "encode-error: U+0AF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF1");
    },
    Error,
    "encode-error: U+0AF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF2");
    },
    Error,
    "encode-error: U+0AF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF3");
    },
    Error,
    "encode-error: U+0AF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF4");
    },
    Error,
    "encode-error: U+0AF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF5");
    },
    Error,
    "encode-error: U+0AF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF6");
    },
    Error,
    "encode-error: U+0AF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF7");
    },
    Error,
    "encode-error: U+0AF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF8");
    },
    Error,
    "encode-error: U+0AF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AF9");
    },
    Error,
    "encode-error: U+0AF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AFA");
    },
    Error,
    "encode-error: U+0AFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AFB");
    },
    Error,
    "encode-error: U+0AFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AFC");
    },
    Error,
    "encode-error: U+0AFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AFD");
    },
    Error,
    "encode-error: U+0AFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AFE");
    },
    Error,
    "encode-error: U+0AFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0AFF");
    },
    Error,
    "encode-error: U+0AFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B00");
    },
    Error,
    "encode-error: U+0B00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B01");
    },
    Error,
    "encode-error: U+0B01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B02");
    },
    Error,
    "encode-error: U+0B02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B03");
    },
    Error,
    "encode-error: U+0B03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B04");
    },
    Error,
    "encode-error: U+0B04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B05");
    },
    Error,
    "encode-error: U+0B05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B06");
    },
    Error,
    "encode-error: U+0B06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B07");
    },
    Error,
    "encode-error: U+0B07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B08");
    },
    Error,
    "encode-error: U+0B08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B09");
    },
    Error,
    "encode-error: U+0B09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B0A");
    },
    Error,
    "encode-error: U+0B0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B0B");
    },
    Error,
    "encode-error: U+0B0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B0C");
    },
    Error,
    "encode-error: U+0B0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B0D");
    },
    Error,
    "encode-error: U+0B0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B0E");
    },
    Error,
    "encode-error: U+0B0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B0F");
    },
    Error,
    "encode-error: U+0B0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B10");
    },
    Error,
    "encode-error: U+0B10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B11");
    },
    Error,
    "encode-error: U+0B11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B12");
    },
    Error,
    "encode-error: U+0B12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B13");
    },
    Error,
    "encode-error: U+0B13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B14");
    },
    Error,
    "encode-error: U+0B14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B15");
    },
    Error,
    "encode-error: U+0B15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B16");
    },
    Error,
    "encode-error: U+0B16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B17");
    },
    Error,
    "encode-error: U+0B17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B18");
    },
    Error,
    "encode-error: U+0B18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B19");
    },
    Error,
    "encode-error: U+0B19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B1A");
    },
    Error,
    "encode-error: U+0B1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B1B");
    },
    Error,
    "encode-error: U+0B1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B1C");
    },
    Error,
    "encode-error: U+0B1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B1D");
    },
    Error,
    "encode-error: U+0B1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B1E");
    },
    Error,
    "encode-error: U+0B1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B1F");
    },
    Error,
    "encode-error: U+0B1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B20");
    },
    Error,
    "encode-error: U+0B20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B21");
    },
    Error,
    "encode-error: U+0B21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B22");
    },
    Error,
    "encode-error: U+0B22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B23");
    },
    Error,
    "encode-error: U+0B23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B24");
    },
    Error,
    "encode-error: U+0B24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B25");
    },
    Error,
    "encode-error: U+0B25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B26");
    },
    Error,
    "encode-error: U+0B26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B27");
    },
    Error,
    "encode-error: U+0B27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B28");
    },
    Error,
    "encode-error: U+0B28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B29");
    },
    Error,
    "encode-error: U+0B29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B2A");
    },
    Error,
    "encode-error: U+0B2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B2B");
    },
    Error,
    "encode-error: U+0B2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B2C");
    },
    Error,
    "encode-error: U+0B2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B2D");
    },
    Error,
    "encode-error: U+0B2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B2E");
    },
    Error,
    "encode-error: U+0B2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B2F");
    },
    Error,
    "encode-error: U+0B2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B30");
    },
    Error,
    "encode-error: U+0B30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B31");
    },
    Error,
    "encode-error: U+0B31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B32");
    },
    Error,
    "encode-error: U+0B32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B33");
    },
    Error,
    "encode-error: U+0B33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B34");
    },
    Error,
    "encode-error: U+0B34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B35");
    },
    Error,
    "encode-error: U+0B35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B36");
    },
    Error,
    "encode-error: U+0B36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B37");
    },
    Error,
    "encode-error: U+0B37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B38");
    },
    Error,
    "encode-error: U+0B38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B39");
    },
    Error,
    "encode-error: U+0B39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B3A");
    },
    Error,
    "encode-error: U+0B3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B3B");
    },
    Error,
    "encode-error: U+0B3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B3C");
    },
    Error,
    "encode-error: U+0B3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B3D");
    },
    Error,
    "encode-error: U+0B3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B3E");
    },
    Error,
    "encode-error: U+0B3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B3F");
    },
    Error,
    "encode-error: U+0B3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B40");
    },
    Error,
    "encode-error: U+0B40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B41");
    },
    Error,
    "encode-error: U+0B41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B42");
    },
    Error,
    "encode-error: U+0B42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B43");
    },
    Error,
    "encode-error: U+0B43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B44");
    },
    Error,
    "encode-error: U+0B44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B45");
    },
    Error,
    "encode-error: U+0B45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B46");
    },
    Error,
    "encode-error: U+0B46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B47");
    },
    Error,
    "encode-error: U+0B47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B48");
    },
    Error,
    "encode-error: U+0B48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B49");
    },
    Error,
    "encode-error: U+0B49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B4A");
    },
    Error,
    "encode-error: U+0B4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B4B");
    },
    Error,
    "encode-error: U+0B4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B4C");
    },
    Error,
    "encode-error: U+0B4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B4D");
    },
    Error,
    "encode-error: U+0B4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B4E");
    },
    Error,
    "encode-error: U+0B4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B4F");
    },
    Error,
    "encode-error: U+0B4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B50");
    },
    Error,
    "encode-error: U+0B50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B51");
    },
    Error,
    "encode-error: U+0B51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B52");
    },
    Error,
    "encode-error: U+0B52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B53");
    },
    Error,
    "encode-error: U+0B53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B54");
    },
    Error,
    "encode-error: U+0B54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B55");
    },
    Error,
    "encode-error: U+0B55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B56");
    },
    Error,
    "encode-error: U+0B56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B57");
    },
    Error,
    "encode-error: U+0B57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B58");
    },
    Error,
    "encode-error: U+0B58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B59");
    },
    Error,
    "encode-error: U+0B59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B5A");
    },
    Error,
    "encode-error: U+0B5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B5B");
    },
    Error,
    "encode-error: U+0B5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B5C");
    },
    Error,
    "encode-error: U+0B5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B5D");
    },
    Error,
    "encode-error: U+0B5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B5E");
    },
    Error,
    "encode-error: U+0B5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B5F");
    },
    Error,
    "encode-error: U+0B5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B60");
    },
    Error,
    "encode-error: U+0B60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B61");
    },
    Error,
    "encode-error: U+0B61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B62");
    },
    Error,
    "encode-error: U+0B62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B63");
    },
    Error,
    "encode-error: U+0B63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B64");
    },
    Error,
    "encode-error: U+0B64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B65");
    },
    Error,
    "encode-error: U+0B65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B66");
    },
    Error,
    "encode-error: U+0B66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B67");
    },
    Error,
    "encode-error: U+0B67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B68");
    },
    Error,
    "encode-error: U+0B68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B69");
    },
    Error,
    "encode-error: U+0B69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B6A");
    },
    Error,
    "encode-error: U+0B6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B6B");
    },
    Error,
    "encode-error: U+0B6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B6C");
    },
    Error,
    "encode-error: U+0B6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B6D");
    },
    Error,
    "encode-error: U+0B6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B6E");
    },
    Error,
    "encode-error: U+0B6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B6F");
    },
    Error,
    "encode-error: U+0B6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B70");
    },
    Error,
    "encode-error: U+0B70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B71");
    },
    Error,
    "encode-error: U+0B71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B72");
    },
    Error,
    "encode-error: U+0B72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B73");
    },
    Error,
    "encode-error: U+0B73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B74");
    },
    Error,
    "encode-error: U+0B74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B75");
    },
    Error,
    "encode-error: U+0B75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B76");
    },
    Error,
    "encode-error: U+0B76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B77");
    },
    Error,
    "encode-error: U+0B77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B78");
    },
    Error,
    "encode-error: U+0B78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B79");
    },
    Error,
    "encode-error: U+0B79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B7A");
    },
    Error,
    "encode-error: U+0B7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B7B");
    },
    Error,
    "encode-error: U+0B7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B7C");
    },
    Error,
    "encode-error: U+0B7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B7D");
    },
    Error,
    "encode-error: U+0B7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B7E");
    },
    Error,
    "encode-error: U+0B7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B7F");
    },
    Error,
    "encode-error: U+0B7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B80");
    },
    Error,
    "encode-error: U+0B80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B81");
    },
    Error,
    "encode-error: U+0B81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B82");
    },
    Error,
    "encode-error: U+0B82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B83");
    },
    Error,
    "encode-error: U+0B83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B84");
    },
    Error,
    "encode-error: U+0B84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B85");
    },
    Error,
    "encode-error: U+0B85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B86");
    },
    Error,
    "encode-error: U+0B86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B87");
    },
    Error,
    "encode-error: U+0B87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B88");
    },
    Error,
    "encode-error: U+0B88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B89");
    },
    Error,
    "encode-error: U+0B89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B8A");
    },
    Error,
    "encode-error: U+0B8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B8B");
    },
    Error,
    "encode-error: U+0B8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B8C");
    },
    Error,
    "encode-error: U+0B8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B8D");
    },
    Error,
    "encode-error: U+0B8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B8E");
    },
    Error,
    "encode-error: U+0B8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B8F");
    },
    Error,
    "encode-error: U+0B8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B90");
    },
    Error,
    "encode-error: U+0B90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B91");
    },
    Error,
    "encode-error: U+0B91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B92");
    },
    Error,
    "encode-error: U+0B92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B93");
    },
    Error,
    "encode-error: U+0B93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B94");
    },
    Error,
    "encode-error: U+0B94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B95");
    },
    Error,
    "encode-error: U+0B95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B96");
    },
    Error,
    "encode-error: U+0B96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B97");
    },
    Error,
    "encode-error: U+0B97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B98");
    },
    Error,
    "encode-error: U+0B98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B99");
    },
    Error,
    "encode-error: U+0B99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B9A");
    },
    Error,
    "encode-error: U+0B9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B9B");
    },
    Error,
    "encode-error: U+0B9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B9C");
    },
    Error,
    "encode-error: U+0B9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B9D");
    },
    Error,
    "encode-error: U+0B9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B9E");
    },
    Error,
    "encode-error: U+0B9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0B9F");
    },
    Error,
    "encode-error: U+0B9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA0");
    },
    Error,
    "encode-error: U+0BA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA1");
    },
    Error,
    "encode-error: U+0BA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA2");
    },
    Error,
    "encode-error: U+0BA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA3");
    },
    Error,
    "encode-error: U+0BA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA4");
    },
    Error,
    "encode-error: U+0BA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA5");
    },
    Error,
    "encode-error: U+0BA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA6");
    },
    Error,
    "encode-error: U+0BA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA7");
    },
    Error,
    "encode-error: U+0BA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA8");
    },
    Error,
    "encode-error: U+0BA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BA9");
    },
    Error,
    "encode-error: U+0BA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BAA");
    },
    Error,
    "encode-error: U+0BAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BAB");
    },
    Error,
    "encode-error: U+0BAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BAC");
    },
    Error,
    "encode-error: U+0BAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BAD");
    },
    Error,
    "encode-error: U+0BAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BAE");
    },
    Error,
    "encode-error: U+0BAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BAF");
    },
    Error,
    "encode-error: U+0BAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB0");
    },
    Error,
    "encode-error: U+0BB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB1");
    },
    Error,
    "encode-error: U+0BB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB2");
    },
    Error,
    "encode-error: U+0BB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB3");
    },
    Error,
    "encode-error: U+0BB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB4");
    },
    Error,
    "encode-error: U+0BB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB5");
    },
    Error,
    "encode-error: U+0BB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB6");
    },
    Error,
    "encode-error: U+0BB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB7");
    },
    Error,
    "encode-error: U+0BB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB8");
    },
    Error,
    "encode-error: U+0BB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BB9");
    },
    Error,
    "encode-error: U+0BB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BBA");
    },
    Error,
    "encode-error: U+0BBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BBB");
    },
    Error,
    "encode-error: U+0BBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BBC");
    },
    Error,
    "encode-error: U+0BBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BBD");
    },
    Error,
    "encode-error: U+0BBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BBE");
    },
    Error,
    "encode-error: U+0BBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BBF");
    },
    Error,
    "encode-error: U+0BBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC0");
    },
    Error,
    "encode-error: U+0BC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC1");
    },
    Error,
    "encode-error: U+0BC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC2");
    },
    Error,
    "encode-error: U+0BC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC3");
    },
    Error,
    "encode-error: U+0BC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC4");
    },
    Error,
    "encode-error: U+0BC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC5");
    },
    Error,
    "encode-error: U+0BC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC6");
    },
    Error,
    "encode-error: U+0BC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC7");
    },
    Error,
    "encode-error: U+0BC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC8");
    },
    Error,
    "encode-error: U+0BC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BC9");
    },
    Error,
    "encode-error: U+0BC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BCA");
    },
    Error,
    "encode-error: U+0BCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BCB");
    },
    Error,
    "encode-error: U+0BCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BCC");
    },
    Error,
    "encode-error: U+0BCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BCD");
    },
    Error,
    "encode-error: U+0BCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BCE");
    },
    Error,
    "encode-error: U+0BCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BCF");
    },
    Error,
    "encode-error: U+0BCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD0");
    },
    Error,
    "encode-error: U+0BD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD1");
    },
    Error,
    "encode-error: U+0BD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD2");
    },
    Error,
    "encode-error: U+0BD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD3");
    },
    Error,
    "encode-error: U+0BD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD4");
    },
    Error,
    "encode-error: U+0BD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD5");
    },
    Error,
    "encode-error: U+0BD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD6");
    },
    Error,
    "encode-error: U+0BD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD7");
    },
    Error,
    "encode-error: U+0BD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD8");
    },
    Error,
    "encode-error: U+0BD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BD9");
    },
    Error,
    "encode-error: U+0BD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BDA");
    },
    Error,
    "encode-error: U+0BDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BDB");
    },
    Error,
    "encode-error: U+0BDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BDC");
    },
    Error,
    "encode-error: U+0BDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BDD");
    },
    Error,
    "encode-error: U+0BDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BDE");
    },
    Error,
    "encode-error: U+0BDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BDF");
    },
    Error,
    "encode-error: U+0BDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE0");
    },
    Error,
    "encode-error: U+0BE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE1");
    },
    Error,
    "encode-error: U+0BE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE2");
    },
    Error,
    "encode-error: U+0BE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE3");
    },
    Error,
    "encode-error: U+0BE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE4");
    },
    Error,
    "encode-error: U+0BE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE5");
    },
    Error,
    "encode-error: U+0BE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE6");
    },
    Error,
    "encode-error: U+0BE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE7");
    },
    Error,
    "encode-error: U+0BE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE8");
    },
    Error,
    "encode-error: U+0BE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BE9");
    },
    Error,
    "encode-error: U+0BE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BEA");
    },
    Error,
    "encode-error: U+0BEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BEB");
    },
    Error,
    "encode-error: U+0BEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BEC");
    },
    Error,
    "encode-error: U+0BEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BED");
    },
    Error,
    "encode-error: U+0BED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BEE");
    },
    Error,
    "encode-error: U+0BEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BEF");
    },
    Error,
    "encode-error: U+0BEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF0");
    },
    Error,
    "encode-error: U+0BF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF1");
    },
    Error,
    "encode-error: U+0BF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF2");
    },
    Error,
    "encode-error: U+0BF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF3");
    },
    Error,
    "encode-error: U+0BF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF4");
    },
    Error,
    "encode-error: U+0BF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF5");
    },
    Error,
    "encode-error: U+0BF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF6");
    },
    Error,
    "encode-error: U+0BF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF7");
    },
    Error,
    "encode-error: U+0BF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF8");
    },
    Error,
    "encode-error: U+0BF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BF9");
    },
    Error,
    "encode-error: U+0BF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BFA");
    },
    Error,
    "encode-error: U+0BFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BFB");
    },
    Error,
    "encode-error: U+0BFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BFC");
    },
    Error,
    "encode-error: U+0BFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BFD");
    },
    Error,
    "encode-error: U+0BFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BFE");
    },
    Error,
    "encode-error: U+0BFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0BFF");
    },
    Error,
    "encode-error: U+0BFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C00");
    },
    Error,
    "encode-error: U+0C00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C01");
    },
    Error,
    "encode-error: U+0C01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C02");
    },
    Error,
    "encode-error: U+0C02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C03");
    },
    Error,
    "encode-error: U+0C03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C04");
    },
    Error,
    "encode-error: U+0C04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C05");
    },
    Error,
    "encode-error: U+0C05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C06");
    },
    Error,
    "encode-error: U+0C06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C07");
    },
    Error,
    "encode-error: U+0C07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C08");
    },
    Error,
    "encode-error: U+0C08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C09");
    },
    Error,
    "encode-error: U+0C09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C0A");
    },
    Error,
    "encode-error: U+0C0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C0B");
    },
    Error,
    "encode-error: U+0C0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C0C");
    },
    Error,
    "encode-error: U+0C0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C0D");
    },
    Error,
    "encode-error: U+0C0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C0E");
    },
    Error,
    "encode-error: U+0C0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C0F");
    },
    Error,
    "encode-error: U+0C0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C10");
    },
    Error,
    "encode-error: U+0C10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C11");
    },
    Error,
    "encode-error: U+0C11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C12");
    },
    Error,
    "encode-error: U+0C12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C13");
    },
    Error,
    "encode-error: U+0C13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C14");
    },
    Error,
    "encode-error: U+0C14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C15");
    },
    Error,
    "encode-error: U+0C15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C16");
    },
    Error,
    "encode-error: U+0C16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C17");
    },
    Error,
    "encode-error: U+0C17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C18");
    },
    Error,
    "encode-error: U+0C18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C19");
    },
    Error,
    "encode-error: U+0C19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C1A");
    },
    Error,
    "encode-error: U+0C1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C1B");
    },
    Error,
    "encode-error: U+0C1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C1C");
    },
    Error,
    "encode-error: U+0C1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C1D");
    },
    Error,
    "encode-error: U+0C1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C1E");
    },
    Error,
    "encode-error: U+0C1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C1F");
    },
    Error,
    "encode-error: U+0C1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C20");
    },
    Error,
    "encode-error: U+0C20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C21");
    },
    Error,
    "encode-error: U+0C21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C22");
    },
    Error,
    "encode-error: U+0C22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C23");
    },
    Error,
    "encode-error: U+0C23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C24");
    },
    Error,
    "encode-error: U+0C24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C25");
    },
    Error,
    "encode-error: U+0C25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C26");
    },
    Error,
    "encode-error: U+0C26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C27");
    },
    Error,
    "encode-error: U+0C27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C28");
    },
    Error,
    "encode-error: U+0C28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C29");
    },
    Error,
    "encode-error: U+0C29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C2A");
    },
    Error,
    "encode-error: U+0C2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C2B");
    },
    Error,
    "encode-error: U+0C2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C2C");
    },
    Error,
    "encode-error: U+0C2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C2D");
    },
    Error,
    "encode-error: U+0C2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C2E");
    },
    Error,
    "encode-error: U+0C2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C2F");
    },
    Error,
    "encode-error: U+0C2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C30");
    },
    Error,
    "encode-error: U+0C30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C31");
    },
    Error,
    "encode-error: U+0C31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C32");
    },
    Error,
    "encode-error: U+0C32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C33");
    },
    Error,
    "encode-error: U+0C33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C34");
    },
    Error,
    "encode-error: U+0C34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C35");
    },
    Error,
    "encode-error: U+0C35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C36");
    },
    Error,
    "encode-error: U+0C36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C37");
    },
    Error,
    "encode-error: U+0C37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C38");
    },
    Error,
    "encode-error: U+0C38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C39");
    },
    Error,
    "encode-error: U+0C39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C3A");
    },
    Error,
    "encode-error: U+0C3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C3B");
    },
    Error,
    "encode-error: U+0C3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C3C");
    },
    Error,
    "encode-error: U+0C3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C3D");
    },
    Error,
    "encode-error: U+0C3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C3E");
    },
    Error,
    "encode-error: U+0C3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C3F");
    },
    Error,
    "encode-error: U+0C3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C40");
    },
    Error,
    "encode-error: U+0C40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C41");
    },
    Error,
    "encode-error: U+0C41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C42");
    },
    Error,
    "encode-error: U+0C42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C43");
    },
    Error,
    "encode-error: U+0C43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C44");
    },
    Error,
    "encode-error: U+0C44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C45");
    },
    Error,
    "encode-error: U+0C45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C46");
    },
    Error,
    "encode-error: U+0C46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C47");
    },
    Error,
    "encode-error: U+0C47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C48");
    },
    Error,
    "encode-error: U+0C48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C49");
    },
    Error,
    "encode-error: U+0C49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C4A");
    },
    Error,
    "encode-error: U+0C4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C4B");
    },
    Error,
    "encode-error: U+0C4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C4C");
    },
    Error,
    "encode-error: U+0C4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C4D");
    },
    Error,
    "encode-error: U+0C4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C4E");
    },
    Error,
    "encode-error: U+0C4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C4F");
    },
    Error,
    "encode-error: U+0C4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C50");
    },
    Error,
    "encode-error: U+0C50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C51");
    },
    Error,
    "encode-error: U+0C51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C52");
    },
    Error,
    "encode-error: U+0C52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C53");
    },
    Error,
    "encode-error: U+0C53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C54");
    },
    Error,
    "encode-error: U+0C54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C55");
    },
    Error,
    "encode-error: U+0C55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C56");
    },
    Error,
    "encode-error: U+0C56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C57");
    },
    Error,
    "encode-error: U+0C57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C58");
    },
    Error,
    "encode-error: U+0C58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C59");
    },
    Error,
    "encode-error: U+0C59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C5A");
    },
    Error,
    "encode-error: U+0C5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C5B");
    },
    Error,
    "encode-error: U+0C5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C5C");
    },
    Error,
    "encode-error: U+0C5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C5D");
    },
    Error,
    "encode-error: U+0C5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C5E");
    },
    Error,
    "encode-error: U+0C5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C5F");
    },
    Error,
    "encode-error: U+0C5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C60");
    },
    Error,
    "encode-error: U+0C60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C61");
    },
    Error,
    "encode-error: U+0C61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C62");
    },
    Error,
    "encode-error: U+0C62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C63");
    },
    Error,
    "encode-error: U+0C63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C64");
    },
    Error,
    "encode-error: U+0C64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C65");
    },
    Error,
    "encode-error: U+0C65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C66");
    },
    Error,
    "encode-error: U+0C66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C67");
    },
    Error,
    "encode-error: U+0C67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C68");
    },
    Error,
    "encode-error: U+0C68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C69");
    },
    Error,
    "encode-error: U+0C69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C6A");
    },
    Error,
    "encode-error: U+0C6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C6B");
    },
    Error,
    "encode-error: U+0C6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C6C");
    },
    Error,
    "encode-error: U+0C6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C6D");
    },
    Error,
    "encode-error: U+0C6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C6E");
    },
    Error,
    "encode-error: U+0C6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C6F");
    },
    Error,
    "encode-error: U+0C6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C70");
    },
    Error,
    "encode-error: U+0C70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C71");
    },
    Error,
    "encode-error: U+0C71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C72");
    },
    Error,
    "encode-error: U+0C72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C73");
    },
    Error,
    "encode-error: U+0C73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C74");
    },
    Error,
    "encode-error: U+0C74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C75");
    },
    Error,
    "encode-error: U+0C75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C76");
    },
    Error,
    "encode-error: U+0C76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C77");
    },
    Error,
    "encode-error: U+0C77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C78");
    },
    Error,
    "encode-error: U+0C78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C79");
    },
    Error,
    "encode-error: U+0C79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C7A");
    },
    Error,
    "encode-error: U+0C7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C7B");
    },
    Error,
    "encode-error: U+0C7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C7C");
    },
    Error,
    "encode-error: U+0C7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C7D");
    },
    Error,
    "encode-error: U+0C7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C7E");
    },
    Error,
    "encode-error: U+0C7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C7F");
    },
    Error,
    "encode-error: U+0C7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C80");
    },
    Error,
    "encode-error: U+0C80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C81");
    },
    Error,
    "encode-error: U+0C81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C82");
    },
    Error,
    "encode-error: U+0C82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C83");
    },
    Error,
    "encode-error: U+0C83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C84");
    },
    Error,
    "encode-error: U+0C84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C85");
    },
    Error,
    "encode-error: U+0C85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C86");
    },
    Error,
    "encode-error: U+0C86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C87");
    },
    Error,
    "encode-error: U+0C87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C88");
    },
    Error,
    "encode-error: U+0C88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C89");
    },
    Error,
    "encode-error: U+0C89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C8A");
    },
    Error,
    "encode-error: U+0C8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C8B");
    },
    Error,
    "encode-error: U+0C8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C8C");
    },
    Error,
    "encode-error: U+0C8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C8D");
    },
    Error,
    "encode-error: U+0C8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C8E");
    },
    Error,
    "encode-error: U+0C8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C8F");
    },
    Error,
    "encode-error: U+0C8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C90");
    },
    Error,
    "encode-error: U+0C90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C91");
    },
    Error,
    "encode-error: U+0C91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C92");
    },
    Error,
    "encode-error: U+0C92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C93");
    },
    Error,
    "encode-error: U+0C93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C94");
    },
    Error,
    "encode-error: U+0C94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C95");
    },
    Error,
    "encode-error: U+0C95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C96");
    },
    Error,
    "encode-error: U+0C96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C97");
    },
    Error,
    "encode-error: U+0C97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C98");
    },
    Error,
    "encode-error: U+0C98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C99");
    },
    Error,
    "encode-error: U+0C99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C9A");
    },
    Error,
    "encode-error: U+0C9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C9B");
    },
    Error,
    "encode-error: U+0C9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C9C");
    },
    Error,
    "encode-error: U+0C9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C9D");
    },
    Error,
    "encode-error: U+0C9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C9E");
    },
    Error,
    "encode-error: U+0C9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0C9F");
    },
    Error,
    "encode-error: U+0C9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA0");
    },
    Error,
    "encode-error: U+0CA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA1");
    },
    Error,
    "encode-error: U+0CA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA2");
    },
    Error,
    "encode-error: U+0CA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA3");
    },
    Error,
    "encode-error: U+0CA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA4");
    },
    Error,
    "encode-error: U+0CA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA5");
    },
    Error,
    "encode-error: U+0CA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA6");
    },
    Error,
    "encode-error: U+0CA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA7");
    },
    Error,
    "encode-error: U+0CA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA8");
    },
    Error,
    "encode-error: U+0CA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CA9");
    },
    Error,
    "encode-error: U+0CA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CAA");
    },
    Error,
    "encode-error: U+0CAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CAB");
    },
    Error,
    "encode-error: U+0CAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CAC");
    },
    Error,
    "encode-error: U+0CAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CAD");
    },
    Error,
    "encode-error: U+0CAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CAE");
    },
    Error,
    "encode-error: U+0CAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CAF");
    },
    Error,
    "encode-error: U+0CAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB0");
    },
    Error,
    "encode-error: U+0CB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB1");
    },
    Error,
    "encode-error: U+0CB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB2");
    },
    Error,
    "encode-error: U+0CB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB3");
    },
    Error,
    "encode-error: U+0CB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB4");
    },
    Error,
    "encode-error: U+0CB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB5");
    },
    Error,
    "encode-error: U+0CB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB6");
    },
    Error,
    "encode-error: U+0CB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB7");
    },
    Error,
    "encode-error: U+0CB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB8");
    },
    Error,
    "encode-error: U+0CB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CB9");
    },
    Error,
    "encode-error: U+0CB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CBA");
    },
    Error,
    "encode-error: U+0CBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CBB");
    },
    Error,
    "encode-error: U+0CBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CBC");
    },
    Error,
    "encode-error: U+0CBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CBD");
    },
    Error,
    "encode-error: U+0CBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CBE");
    },
    Error,
    "encode-error: U+0CBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CBF");
    },
    Error,
    "encode-error: U+0CBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC0");
    },
    Error,
    "encode-error: U+0CC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC1");
    },
    Error,
    "encode-error: U+0CC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC2");
    },
    Error,
    "encode-error: U+0CC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC3");
    },
    Error,
    "encode-error: U+0CC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC4");
    },
    Error,
    "encode-error: U+0CC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC5");
    },
    Error,
    "encode-error: U+0CC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC6");
    },
    Error,
    "encode-error: U+0CC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC7");
    },
    Error,
    "encode-error: U+0CC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC8");
    },
    Error,
    "encode-error: U+0CC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CC9");
    },
    Error,
    "encode-error: U+0CC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CCA");
    },
    Error,
    "encode-error: U+0CCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CCB");
    },
    Error,
    "encode-error: U+0CCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CCC");
    },
    Error,
    "encode-error: U+0CCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CCD");
    },
    Error,
    "encode-error: U+0CCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CCE");
    },
    Error,
    "encode-error: U+0CCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CCF");
    },
    Error,
    "encode-error: U+0CCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD0");
    },
    Error,
    "encode-error: U+0CD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD1");
    },
    Error,
    "encode-error: U+0CD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD2");
    },
    Error,
    "encode-error: U+0CD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD3");
    },
    Error,
    "encode-error: U+0CD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD4");
    },
    Error,
    "encode-error: U+0CD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD5");
    },
    Error,
    "encode-error: U+0CD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD6");
    },
    Error,
    "encode-error: U+0CD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD7");
    },
    Error,
    "encode-error: U+0CD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD8");
    },
    Error,
    "encode-error: U+0CD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CD9");
    },
    Error,
    "encode-error: U+0CD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CDA");
    },
    Error,
    "encode-error: U+0CDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CDB");
    },
    Error,
    "encode-error: U+0CDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CDC");
    },
    Error,
    "encode-error: U+0CDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CDD");
    },
    Error,
    "encode-error: U+0CDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CDE");
    },
    Error,
    "encode-error: U+0CDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CDF");
    },
    Error,
    "encode-error: U+0CDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE0");
    },
    Error,
    "encode-error: U+0CE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE1");
    },
    Error,
    "encode-error: U+0CE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE2");
    },
    Error,
    "encode-error: U+0CE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE3");
    },
    Error,
    "encode-error: U+0CE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE4");
    },
    Error,
    "encode-error: U+0CE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE5");
    },
    Error,
    "encode-error: U+0CE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE6");
    },
    Error,
    "encode-error: U+0CE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE7");
    },
    Error,
    "encode-error: U+0CE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE8");
    },
    Error,
    "encode-error: U+0CE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CE9");
    },
    Error,
    "encode-error: U+0CE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CEA");
    },
    Error,
    "encode-error: U+0CEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CEB");
    },
    Error,
    "encode-error: U+0CEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CEC");
    },
    Error,
    "encode-error: U+0CEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CED");
    },
    Error,
    "encode-error: U+0CED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CEE");
    },
    Error,
    "encode-error: U+0CEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CEF");
    },
    Error,
    "encode-error: U+0CEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF0");
    },
    Error,
    "encode-error: U+0CF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF1");
    },
    Error,
    "encode-error: U+0CF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF2");
    },
    Error,
    "encode-error: U+0CF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF3");
    },
    Error,
    "encode-error: U+0CF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF4");
    },
    Error,
    "encode-error: U+0CF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF5");
    },
    Error,
    "encode-error: U+0CF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF6");
    },
    Error,
    "encode-error: U+0CF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF7");
    },
    Error,
    "encode-error: U+0CF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF8");
    },
    Error,
    "encode-error: U+0CF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CF9");
    },
    Error,
    "encode-error: U+0CF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CFA");
    },
    Error,
    "encode-error: U+0CFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CFB");
    },
    Error,
    "encode-error: U+0CFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CFC");
    },
    Error,
    "encode-error: U+0CFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CFD");
    },
    Error,
    "encode-error: U+0CFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CFE");
    },
    Error,
    "encode-error: U+0CFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0CFF");
    },
    Error,
    "encode-error: U+0CFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D00");
    },
    Error,
    "encode-error: U+0D00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D01");
    },
    Error,
    "encode-error: U+0D01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D02");
    },
    Error,
    "encode-error: U+0D02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D03");
    },
    Error,
    "encode-error: U+0D03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D04");
    },
    Error,
    "encode-error: U+0D04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D05");
    },
    Error,
    "encode-error: U+0D05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D06");
    },
    Error,
    "encode-error: U+0D06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D07");
    },
    Error,
    "encode-error: U+0D07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D08");
    },
    Error,
    "encode-error: U+0D08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D09");
    },
    Error,
    "encode-error: U+0D09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D0A");
    },
    Error,
    "encode-error: U+0D0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D0B");
    },
    Error,
    "encode-error: U+0D0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D0C");
    },
    Error,
    "encode-error: U+0D0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D0D");
    },
    Error,
    "encode-error: U+0D0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D0E");
    },
    Error,
    "encode-error: U+0D0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D0F");
    },
    Error,
    "encode-error: U+0D0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D10");
    },
    Error,
    "encode-error: U+0D10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D11");
    },
    Error,
    "encode-error: U+0D11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D12");
    },
    Error,
    "encode-error: U+0D12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D13");
    },
    Error,
    "encode-error: U+0D13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D14");
    },
    Error,
    "encode-error: U+0D14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D15");
    },
    Error,
    "encode-error: U+0D15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D16");
    },
    Error,
    "encode-error: U+0D16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D17");
    },
    Error,
    "encode-error: U+0D17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D18");
    },
    Error,
    "encode-error: U+0D18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D19");
    },
    Error,
    "encode-error: U+0D19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D1A");
    },
    Error,
    "encode-error: U+0D1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D1B");
    },
    Error,
    "encode-error: U+0D1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D1C");
    },
    Error,
    "encode-error: U+0D1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D1D");
    },
    Error,
    "encode-error: U+0D1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D1E");
    },
    Error,
    "encode-error: U+0D1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D1F");
    },
    Error,
    "encode-error: U+0D1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D20");
    },
    Error,
    "encode-error: U+0D20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D21");
    },
    Error,
    "encode-error: U+0D21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D22");
    },
    Error,
    "encode-error: U+0D22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D23");
    },
    Error,
    "encode-error: U+0D23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D24");
    },
    Error,
    "encode-error: U+0D24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D25");
    },
    Error,
    "encode-error: U+0D25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D26");
    },
    Error,
    "encode-error: U+0D26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D27");
    },
    Error,
    "encode-error: U+0D27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D28");
    },
    Error,
    "encode-error: U+0D28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D29");
    },
    Error,
    "encode-error: U+0D29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D2A");
    },
    Error,
    "encode-error: U+0D2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D2B");
    },
    Error,
    "encode-error: U+0D2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D2C");
    },
    Error,
    "encode-error: U+0D2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D2D");
    },
    Error,
    "encode-error: U+0D2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D2E");
    },
    Error,
    "encode-error: U+0D2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D2F");
    },
    Error,
    "encode-error: U+0D2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D30");
    },
    Error,
    "encode-error: U+0D30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D31");
    },
    Error,
    "encode-error: U+0D31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D32");
    },
    Error,
    "encode-error: U+0D32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D33");
    },
    Error,
    "encode-error: U+0D33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D34");
    },
    Error,
    "encode-error: U+0D34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D35");
    },
    Error,
    "encode-error: U+0D35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D36");
    },
    Error,
    "encode-error: U+0D36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D37");
    },
    Error,
    "encode-error: U+0D37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D38");
    },
    Error,
    "encode-error: U+0D38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D39");
    },
    Error,
    "encode-error: U+0D39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D3A");
    },
    Error,
    "encode-error: U+0D3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D3B");
    },
    Error,
    "encode-error: U+0D3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D3C");
    },
    Error,
    "encode-error: U+0D3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D3D");
    },
    Error,
    "encode-error: U+0D3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D3E");
    },
    Error,
    "encode-error: U+0D3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D3F");
    },
    Error,
    "encode-error: U+0D3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D40");
    },
    Error,
    "encode-error: U+0D40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D41");
    },
    Error,
    "encode-error: U+0D41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D42");
    },
    Error,
    "encode-error: U+0D42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D43");
    },
    Error,
    "encode-error: U+0D43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D44");
    },
    Error,
    "encode-error: U+0D44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D45");
    },
    Error,
    "encode-error: U+0D45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D46");
    },
    Error,
    "encode-error: U+0D46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D47");
    },
    Error,
    "encode-error: U+0D47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D48");
    },
    Error,
    "encode-error: U+0D48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D49");
    },
    Error,
    "encode-error: U+0D49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D4A");
    },
    Error,
    "encode-error: U+0D4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D4B");
    },
    Error,
    "encode-error: U+0D4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D4C");
    },
    Error,
    "encode-error: U+0D4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D4D");
    },
    Error,
    "encode-error: U+0D4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D4E");
    },
    Error,
    "encode-error: U+0D4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D4F");
    },
    Error,
    "encode-error: U+0D4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D50");
    },
    Error,
    "encode-error: U+0D50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D51");
    },
    Error,
    "encode-error: U+0D51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D52");
    },
    Error,
    "encode-error: U+0D52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D53");
    },
    Error,
    "encode-error: U+0D53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D54");
    },
    Error,
    "encode-error: U+0D54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D55");
    },
    Error,
    "encode-error: U+0D55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D56");
    },
    Error,
    "encode-error: U+0D56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D57");
    },
    Error,
    "encode-error: U+0D57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D58");
    },
    Error,
    "encode-error: U+0D58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D59");
    },
    Error,
    "encode-error: U+0D59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D5A");
    },
    Error,
    "encode-error: U+0D5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D5B");
    },
    Error,
    "encode-error: U+0D5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D5C");
    },
    Error,
    "encode-error: U+0D5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D5D");
    },
    Error,
    "encode-error: U+0D5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D5E");
    },
    Error,
    "encode-error: U+0D5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D5F");
    },
    Error,
    "encode-error: U+0D5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D60");
    },
    Error,
    "encode-error: U+0D60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D61");
    },
    Error,
    "encode-error: U+0D61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D62");
    },
    Error,
    "encode-error: U+0D62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D63");
    },
    Error,
    "encode-error: U+0D63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D64");
    },
    Error,
    "encode-error: U+0D64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D65");
    },
    Error,
    "encode-error: U+0D65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D66");
    },
    Error,
    "encode-error: U+0D66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D67");
    },
    Error,
    "encode-error: U+0D67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D68");
    },
    Error,
    "encode-error: U+0D68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D69");
    },
    Error,
    "encode-error: U+0D69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D6A");
    },
    Error,
    "encode-error: U+0D6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D6B");
    },
    Error,
    "encode-error: U+0D6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D6C");
    },
    Error,
    "encode-error: U+0D6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D6D");
    },
    Error,
    "encode-error: U+0D6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D6E");
    },
    Error,
    "encode-error: U+0D6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D6F");
    },
    Error,
    "encode-error: U+0D6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D70");
    },
    Error,
    "encode-error: U+0D70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D71");
    },
    Error,
    "encode-error: U+0D71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D72");
    },
    Error,
    "encode-error: U+0D72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D73");
    },
    Error,
    "encode-error: U+0D73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D74");
    },
    Error,
    "encode-error: U+0D74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D75");
    },
    Error,
    "encode-error: U+0D75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D76");
    },
    Error,
    "encode-error: U+0D76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D77");
    },
    Error,
    "encode-error: U+0D77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D78");
    },
    Error,
    "encode-error: U+0D78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D79");
    },
    Error,
    "encode-error: U+0D79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D7A");
    },
    Error,
    "encode-error: U+0D7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D7B");
    },
    Error,
    "encode-error: U+0D7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D7C");
    },
    Error,
    "encode-error: U+0D7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D7D");
    },
    Error,
    "encode-error: U+0D7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D7E");
    },
    Error,
    "encode-error: U+0D7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D7F");
    },
    Error,
    "encode-error: U+0D7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D80");
    },
    Error,
    "encode-error: U+0D80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D81");
    },
    Error,
    "encode-error: U+0D81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D82");
    },
    Error,
    "encode-error: U+0D82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D83");
    },
    Error,
    "encode-error: U+0D83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D84");
    },
    Error,
    "encode-error: U+0D84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D85");
    },
    Error,
    "encode-error: U+0D85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D86");
    },
    Error,
    "encode-error: U+0D86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D87");
    },
    Error,
    "encode-error: U+0D87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D88");
    },
    Error,
    "encode-error: U+0D88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D89");
    },
    Error,
    "encode-error: U+0D89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D8A");
    },
    Error,
    "encode-error: U+0D8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D8B");
    },
    Error,
    "encode-error: U+0D8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D8C");
    },
    Error,
    "encode-error: U+0D8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D8D");
    },
    Error,
    "encode-error: U+0D8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D8E");
    },
    Error,
    "encode-error: U+0D8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D8F");
    },
    Error,
    "encode-error: U+0D8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D90");
    },
    Error,
    "encode-error: U+0D90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D91");
    },
    Error,
    "encode-error: U+0D91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D92");
    },
    Error,
    "encode-error: U+0D92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D93");
    },
    Error,
    "encode-error: U+0D93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D94");
    },
    Error,
    "encode-error: U+0D94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D95");
    },
    Error,
    "encode-error: U+0D95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D96");
    },
    Error,
    "encode-error: U+0D96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D97");
    },
    Error,
    "encode-error: U+0D97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D98");
    },
    Error,
    "encode-error: U+0D98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D99");
    },
    Error,
    "encode-error: U+0D99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D9A");
    },
    Error,
    "encode-error: U+0D9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D9B");
    },
    Error,
    "encode-error: U+0D9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D9C");
    },
    Error,
    "encode-error: U+0D9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D9D");
    },
    Error,
    "encode-error: U+0D9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D9E");
    },
    Error,
    "encode-error: U+0D9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0D9F");
    },
    Error,
    "encode-error: U+0D9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA0");
    },
    Error,
    "encode-error: U+0DA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA1");
    },
    Error,
    "encode-error: U+0DA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA2");
    },
    Error,
    "encode-error: U+0DA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA3");
    },
    Error,
    "encode-error: U+0DA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA4");
    },
    Error,
    "encode-error: U+0DA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA5");
    },
    Error,
    "encode-error: U+0DA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA6");
    },
    Error,
    "encode-error: U+0DA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA7");
    },
    Error,
    "encode-error: U+0DA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA8");
    },
    Error,
    "encode-error: U+0DA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DA9");
    },
    Error,
    "encode-error: U+0DA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DAA");
    },
    Error,
    "encode-error: U+0DAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DAB");
    },
    Error,
    "encode-error: U+0DAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DAC");
    },
    Error,
    "encode-error: U+0DAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DAD");
    },
    Error,
    "encode-error: U+0DAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DAE");
    },
    Error,
    "encode-error: U+0DAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DAF");
    },
    Error,
    "encode-error: U+0DAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB0");
    },
    Error,
    "encode-error: U+0DB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB1");
    },
    Error,
    "encode-error: U+0DB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB2");
    },
    Error,
    "encode-error: U+0DB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB3");
    },
    Error,
    "encode-error: U+0DB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB4");
    },
    Error,
    "encode-error: U+0DB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB5");
    },
    Error,
    "encode-error: U+0DB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB6");
    },
    Error,
    "encode-error: U+0DB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB7");
    },
    Error,
    "encode-error: U+0DB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB8");
    },
    Error,
    "encode-error: U+0DB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DB9");
    },
    Error,
    "encode-error: U+0DB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DBA");
    },
    Error,
    "encode-error: U+0DBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DBB");
    },
    Error,
    "encode-error: U+0DBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DBC");
    },
    Error,
    "encode-error: U+0DBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DBD");
    },
    Error,
    "encode-error: U+0DBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DBE");
    },
    Error,
    "encode-error: U+0DBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DBF");
    },
    Error,
    "encode-error: U+0DBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC0");
    },
    Error,
    "encode-error: U+0DC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC1");
    },
    Error,
    "encode-error: U+0DC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC2");
    },
    Error,
    "encode-error: U+0DC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC3");
    },
    Error,
    "encode-error: U+0DC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC4");
    },
    Error,
    "encode-error: U+0DC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC5");
    },
    Error,
    "encode-error: U+0DC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC6");
    },
    Error,
    "encode-error: U+0DC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC7");
    },
    Error,
    "encode-error: U+0DC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC8");
    },
    Error,
    "encode-error: U+0DC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DC9");
    },
    Error,
    "encode-error: U+0DC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DCA");
    },
    Error,
    "encode-error: U+0DCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DCB");
    },
    Error,
    "encode-error: U+0DCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DCC");
    },
    Error,
    "encode-error: U+0DCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DCD");
    },
    Error,
    "encode-error: U+0DCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DCE");
    },
    Error,
    "encode-error: U+0DCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DCF");
    },
    Error,
    "encode-error: U+0DCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD0");
    },
    Error,
    "encode-error: U+0DD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD1");
    },
    Error,
    "encode-error: U+0DD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD2");
    },
    Error,
    "encode-error: U+0DD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD3");
    },
    Error,
    "encode-error: U+0DD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD4");
    },
    Error,
    "encode-error: U+0DD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD5");
    },
    Error,
    "encode-error: U+0DD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD6");
    },
    Error,
    "encode-error: U+0DD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD7");
    },
    Error,
    "encode-error: U+0DD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD8");
    },
    Error,
    "encode-error: U+0DD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DD9");
    },
    Error,
    "encode-error: U+0DD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DDA");
    },
    Error,
    "encode-error: U+0DDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DDB");
    },
    Error,
    "encode-error: U+0DDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DDC");
    },
    Error,
    "encode-error: U+0DDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DDD");
    },
    Error,
    "encode-error: U+0DDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DDE");
    },
    Error,
    "encode-error: U+0DDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DDF");
    },
    Error,
    "encode-error: U+0DDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE0");
    },
    Error,
    "encode-error: U+0DE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE1");
    },
    Error,
    "encode-error: U+0DE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE2");
    },
    Error,
    "encode-error: U+0DE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE3");
    },
    Error,
    "encode-error: U+0DE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE4");
    },
    Error,
    "encode-error: U+0DE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE5");
    },
    Error,
    "encode-error: U+0DE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE6");
    },
    Error,
    "encode-error: U+0DE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE7");
    },
    Error,
    "encode-error: U+0DE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE8");
    },
    Error,
    "encode-error: U+0DE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DE9");
    },
    Error,
    "encode-error: U+0DE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DEA");
    },
    Error,
    "encode-error: U+0DEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DEB");
    },
    Error,
    "encode-error: U+0DEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DEC");
    },
    Error,
    "encode-error: U+0DEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DED");
    },
    Error,
    "encode-error: U+0DED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DEE");
    },
    Error,
    "encode-error: U+0DEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DEF");
    },
    Error,
    "encode-error: U+0DEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF0");
    },
    Error,
    "encode-error: U+0DF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF1");
    },
    Error,
    "encode-error: U+0DF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF2");
    },
    Error,
    "encode-error: U+0DF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF3");
    },
    Error,
    "encode-error: U+0DF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF4");
    },
    Error,
    "encode-error: U+0DF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF5");
    },
    Error,
    "encode-error: U+0DF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF6");
    },
    Error,
    "encode-error: U+0DF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF7");
    },
    Error,
    "encode-error: U+0DF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF8");
    },
    Error,
    "encode-error: U+0DF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DF9");
    },
    Error,
    "encode-error: U+0DF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DFA");
    },
    Error,
    "encode-error: U+0DFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DFB");
    },
    Error,
    "encode-error: U+0DFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DFC");
    },
    Error,
    "encode-error: U+0DFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DFD");
    },
    Error,
    "encode-error: U+0DFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DFE");
    },
    Error,
    "encode-error: U+0DFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0DFF");
    },
    Error,
    "encode-error: U+0DFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E00");
    },
    Error,
    "encode-error: U+0E00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E01");
    },
    Error,
    "encode-error: U+0E01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E02");
    },
    Error,
    "encode-error: U+0E02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E03");
    },
    Error,
    "encode-error: U+0E03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E04");
    },
    Error,
    "encode-error: U+0E04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E05");
    },
    Error,
    "encode-error: U+0E05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E06");
    },
    Error,
    "encode-error: U+0E06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E07");
    },
    Error,
    "encode-error: U+0E07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E08");
    },
    Error,
    "encode-error: U+0E08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E09");
    },
    Error,
    "encode-error: U+0E09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E0A");
    },
    Error,
    "encode-error: U+0E0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E0B");
    },
    Error,
    "encode-error: U+0E0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E0C");
    },
    Error,
    "encode-error: U+0E0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E0D");
    },
    Error,
    "encode-error: U+0E0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E0E");
    },
    Error,
    "encode-error: U+0E0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E0F");
    },
    Error,
    "encode-error: U+0E0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E10");
    },
    Error,
    "encode-error: U+0E10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E11");
    },
    Error,
    "encode-error: U+0E11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E12");
    },
    Error,
    "encode-error: U+0E12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E13");
    },
    Error,
    "encode-error: U+0E13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E14");
    },
    Error,
    "encode-error: U+0E14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E15");
    },
    Error,
    "encode-error: U+0E15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E16");
    },
    Error,
    "encode-error: U+0E16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E17");
    },
    Error,
    "encode-error: U+0E17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E18");
    },
    Error,
    "encode-error: U+0E18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E19");
    },
    Error,
    "encode-error: U+0E19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E1A");
    },
    Error,
    "encode-error: U+0E1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E1B");
    },
    Error,
    "encode-error: U+0E1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E1C");
    },
    Error,
    "encode-error: U+0E1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E1D");
    },
    Error,
    "encode-error: U+0E1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E1E");
    },
    Error,
    "encode-error: U+0E1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E1F");
    },
    Error,
    "encode-error: U+0E1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E20");
    },
    Error,
    "encode-error: U+0E20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E21");
    },
    Error,
    "encode-error: U+0E21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E22");
    },
    Error,
    "encode-error: U+0E22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E23");
    },
    Error,
    "encode-error: U+0E23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E24");
    },
    Error,
    "encode-error: U+0E24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E25");
    },
    Error,
    "encode-error: U+0E25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E26");
    },
    Error,
    "encode-error: U+0E26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E27");
    },
    Error,
    "encode-error: U+0E27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E28");
    },
    Error,
    "encode-error: U+0E28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E29");
    },
    Error,
    "encode-error: U+0E29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E2A");
    },
    Error,
    "encode-error: U+0E2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E2B");
    },
    Error,
    "encode-error: U+0E2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E2C");
    },
    Error,
    "encode-error: U+0E2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E2D");
    },
    Error,
    "encode-error: U+0E2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E2E");
    },
    Error,
    "encode-error: U+0E2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E2F");
    },
    Error,
    "encode-error: U+0E2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E30");
    },
    Error,
    "encode-error: U+0E30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E31");
    },
    Error,
    "encode-error: U+0E31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E32");
    },
    Error,
    "encode-error: U+0E32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E33");
    },
    Error,
    "encode-error: U+0E33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E34");
    },
    Error,
    "encode-error: U+0E34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E35");
    },
    Error,
    "encode-error: U+0E35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E36");
    },
    Error,
    "encode-error: U+0E36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E37");
    },
    Error,
    "encode-error: U+0E37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E38");
    },
    Error,
    "encode-error: U+0E38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E39");
    },
    Error,
    "encode-error: U+0E39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E3A");
    },
    Error,
    "encode-error: U+0E3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E3B");
    },
    Error,
    "encode-error: U+0E3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E3C");
    },
    Error,
    "encode-error: U+0E3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E3D");
    },
    Error,
    "encode-error: U+0E3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E3E");
    },
    Error,
    "encode-error: U+0E3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E3F");
    },
    Error,
    "encode-error: U+0E3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E40");
    },
    Error,
    "encode-error: U+0E40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E41");
    },
    Error,
    "encode-error: U+0E41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E42");
    },
    Error,
    "encode-error: U+0E42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E43");
    },
    Error,
    "encode-error: U+0E43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E44");
    },
    Error,
    "encode-error: U+0E44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E45");
    },
    Error,
    "encode-error: U+0E45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E46");
    },
    Error,
    "encode-error: U+0E46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E47");
    },
    Error,
    "encode-error: U+0E47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E48");
    },
    Error,
    "encode-error: U+0E48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E49");
    },
    Error,
    "encode-error: U+0E49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E4A");
    },
    Error,
    "encode-error: U+0E4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E4B");
    },
    Error,
    "encode-error: U+0E4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E4C");
    },
    Error,
    "encode-error: U+0E4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E4D");
    },
    Error,
    "encode-error: U+0E4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E4E");
    },
    Error,
    "encode-error: U+0E4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E4F");
    },
    Error,
    "encode-error: U+0E4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E50");
    },
    Error,
    "encode-error: U+0E50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E51");
    },
    Error,
    "encode-error: U+0E51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E52");
    },
    Error,
    "encode-error: U+0E52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E53");
    },
    Error,
    "encode-error: U+0E53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E54");
    },
    Error,
    "encode-error: U+0E54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E55");
    },
    Error,
    "encode-error: U+0E55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E56");
    },
    Error,
    "encode-error: U+0E56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E57");
    },
    Error,
    "encode-error: U+0E57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E58");
    },
    Error,
    "encode-error: U+0E58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E59");
    },
    Error,
    "encode-error: U+0E59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E5A");
    },
    Error,
    "encode-error: U+0E5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E5B");
    },
    Error,
    "encode-error: U+0E5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E5C");
    },
    Error,
    "encode-error: U+0E5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E5D");
    },
    Error,
    "encode-error: U+0E5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E5E");
    },
    Error,
    "encode-error: U+0E5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E5F");
    },
    Error,
    "encode-error: U+0E5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E60");
    },
    Error,
    "encode-error: U+0E60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E61");
    },
    Error,
    "encode-error: U+0E61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E62");
    },
    Error,
    "encode-error: U+0E62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E63");
    },
    Error,
    "encode-error: U+0E63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E64");
    },
    Error,
    "encode-error: U+0E64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E65");
    },
    Error,
    "encode-error: U+0E65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E66");
    },
    Error,
    "encode-error: U+0E66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E67");
    },
    Error,
    "encode-error: U+0E67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E68");
    },
    Error,
    "encode-error: U+0E68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E69");
    },
    Error,
    "encode-error: U+0E69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E6A");
    },
    Error,
    "encode-error: U+0E6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E6B");
    },
    Error,
    "encode-error: U+0E6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E6C");
    },
    Error,
    "encode-error: U+0E6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E6D");
    },
    Error,
    "encode-error: U+0E6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E6E");
    },
    Error,
    "encode-error: U+0E6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E6F");
    },
    Error,
    "encode-error: U+0E6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E70");
    },
    Error,
    "encode-error: U+0E70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E71");
    },
    Error,
    "encode-error: U+0E71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E72");
    },
    Error,
    "encode-error: U+0E72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E73");
    },
    Error,
    "encode-error: U+0E73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E74");
    },
    Error,
    "encode-error: U+0E74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E75");
    },
    Error,
    "encode-error: U+0E75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E76");
    },
    Error,
    "encode-error: U+0E76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E77");
    },
    Error,
    "encode-error: U+0E77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E78");
    },
    Error,
    "encode-error: U+0E78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E79");
    },
    Error,
    "encode-error: U+0E79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E7A");
    },
    Error,
    "encode-error: U+0E7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E7B");
    },
    Error,
    "encode-error: U+0E7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E7C");
    },
    Error,
    "encode-error: U+0E7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E7D");
    },
    Error,
    "encode-error: U+0E7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E7E");
    },
    Error,
    "encode-error: U+0E7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E7F");
    },
    Error,
    "encode-error: U+0E7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E80");
    },
    Error,
    "encode-error: U+0E80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E81");
    },
    Error,
    "encode-error: U+0E81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E82");
    },
    Error,
    "encode-error: U+0E82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E83");
    },
    Error,
    "encode-error: U+0E83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E84");
    },
    Error,
    "encode-error: U+0E84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E85");
    },
    Error,
    "encode-error: U+0E85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E86");
    },
    Error,
    "encode-error: U+0E86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E87");
    },
    Error,
    "encode-error: U+0E87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E88");
    },
    Error,
    "encode-error: U+0E88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E89");
    },
    Error,
    "encode-error: U+0E89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E8A");
    },
    Error,
    "encode-error: U+0E8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E8B");
    },
    Error,
    "encode-error: U+0E8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E8C");
    },
    Error,
    "encode-error: U+0E8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E8D");
    },
    Error,
    "encode-error: U+0E8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E8E");
    },
    Error,
    "encode-error: U+0E8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E8F");
    },
    Error,
    "encode-error: U+0E8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E90");
    },
    Error,
    "encode-error: U+0E90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E91");
    },
    Error,
    "encode-error: U+0E91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E92");
    },
    Error,
    "encode-error: U+0E92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E93");
    },
    Error,
    "encode-error: U+0E93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E94");
    },
    Error,
    "encode-error: U+0E94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E95");
    },
    Error,
    "encode-error: U+0E95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E96");
    },
    Error,
    "encode-error: U+0E96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E97");
    },
    Error,
    "encode-error: U+0E97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E98");
    },
    Error,
    "encode-error: U+0E98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E99");
    },
    Error,
    "encode-error: U+0E99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E9A");
    },
    Error,
    "encode-error: U+0E9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E9B");
    },
    Error,
    "encode-error: U+0E9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E9C");
    },
    Error,
    "encode-error: U+0E9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E9D");
    },
    Error,
    "encode-error: U+0E9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E9E");
    },
    Error,
    "encode-error: U+0E9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0E9F");
    },
    Error,
    "encode-error: U+0E9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA0");
    },
    Error,
    "encode-error: U+0EA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA1");
    },
    Error,
    "encode-error: U+0EA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA2");
    },
    Error,
    "encode-error: U+0EA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA3");
    },
    Error,
    "encode-error: U+0EA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA4");
    },
    Error,
    "encode-error: U+0EA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA5");
    },
    Error,
    "encode-error: U+0EA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA6");
    },
    Error,
    "encode-error: U+0EA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA7");
    },
    Error,
    "encode-error: U+0EA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA8");
    },
    Error,
    "encode-error: U+0EA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EA9");
    },
    Error,
    "encode-error: U+0EA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EAA");
    },
    Error,
    "encode-error: U+0EAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EAB");
    },
    Error,
    "encode-error: U+0EAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EAC");
    },
    Error,
    "encode-error: U+0EAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EAD");
    },
    Error,
    "encode-error: U+0EAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EAE");
    },
    Error,
    "encode-error: U+0EAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EAF");
    },
    Error,
    "encode-error: U+0EAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB0");
    },
    Error,
    "encode-error: U+0EB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB1");
    },
    Error,
    "encode-error: U+0EB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB2");
    },
    Error,
    "encode-error: U+0EB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB3");
    },
    Error,
    "encode-error: U+0EB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB4");
    },
    Error,
    "encode-error: U+0EB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB5");
    },
    Error,
    "encode-error: U+0EB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB6");
    },
    Error,
    "encode-error: U+0EB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB7");
    },
    Error,
    "encode-error: U+0EB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB8");
    },
    Error,
    "encode-error: U+0EB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EB9");
    },
    Error,
    "encode-error: U+0EB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EBA");
    },
    Error,
    "encode-error: U+0EBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EBB");
    },
    Error,
    "encode-error: U+0EBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EBC");
    },
    Error,
    "encode-error: U+0EBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EBD");
    },
    Error,
    "encode-error: U+0EBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EBE");
    },
    Error,
    "encode-error: U+0EBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EBF");
    },
    Error,
    "encode-error: U+0EBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC0");
    },
    Error,
    "encode-error: U+0EC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC1");
    },
    Error,
    "encode-error: U+0EC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC2");
    },
    Error,
    "encode-error: U+0EC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC3");
    },
    Error,
    "encode-error: U+0EC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC4");
    },
    Error,
    "encode-error: U+0EC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC5");
    },
    Error,
    "encode-error: U+0EC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC6");
    },
    Error,
    "encode-error: U+0EC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC7");
    },
    Error,
    "encode-error: U+0EC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC8");
    },
    Error,
    "encode-error: U+0EC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EC9");
    },
    Error,
    "encode-error: U+0EC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ECA");
    },
    Error,
    "encode-error: U+0ECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ECB");
    },
    Error,
    "encode-error: U+0ECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ECC");
    },
    Error,
    "encode-error: U+0ECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ECD");
    },
    Error,
    "encode-error: U+0ECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ECE");
    },
    Error,
    "encode-error: U+0ECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ECF");
    },
    Error,
    "encode-error: U+0ECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED0");
    },
    Error,
    "encode-error: U+0ED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED1");
    },
    Error,
    "encode-error: U+0ED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED2");
    },
    Error,
    "encode-error: U+0ED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED3");
    },
    Error,
    "encode-error: U+0ED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED4");
    },
    Error,
    "encode-error: U+0ED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED5");
    },
    Error,
    "encode-error: U+0ED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED6");
    },
    Error,
    "encode-error: U+0ED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED7");
    },
    Error,
    "encode-error: U+0ED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED8");
    },
    Error,
    "encode-error: U+0ED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0ED9");
    },
    Error,
    "encode-error: U+0ED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EDA");
    },
    Error,
    "encode-error: U+0EDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EDB");
    },
    Error,
    "encode-error: U+0EDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EDC");
    },
    Error,
    "encode-error: U+0EDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EDD");
    },
    Error,
    "encode-error: U+0EDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EDE");
    },
    Error,
    "encode-error: U+0EDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EDF");
    },
    Error,
    "encode-error: U+0EDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE0");
    },
    Error,
    "encode-error: U+0EE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE1");
    },
    Error,
    "encode-error: U+0EE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE2");
    },
    Error,
    "encode-error: U+0EE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE3");
    },
    Error,
    "encode-error: U+0EE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE4");
    },
    Error,
    "encode-error: U+0EE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE5");
    },
    Error,
    "encode-error: U+0EE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE6");
    },
    Error,
    "encode-error: U+0EE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE7");
    },
    Error,
    "encode-error: U+0EE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE8");
    },
    Error,
    "encode-error: U+0EE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EE9");
    },
    Error,
    "encode-error: U+0EE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EEA");
    },
    Error,
    "encode-error: U+0EEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EEB");
    },
    Error,
    "encode-error: U+0EEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EEC");
    },
    Error,
    "encode-error: U+0EEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EED");
    },
    Error,
    "encode-error: U+0EED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EEE");
    },
    Error,
    "encode-error: U+0EEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EEF");
    },
    Error,
    "encode-error: U+0EEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF0");
    },
    Error,
    "encode-error: U+0EF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF1");
    },
    Error,
    "encode-error: U+0EF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF2");
    },
    Error,
    "encode-error: U+0EF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF3");
    },
    Error,
    "encode-error: U+0EF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF4");
    },
    Error,
    "encode-error: U+0EF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF5");
    },
    Error,
    "encode-error: U+0EF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF6");
    },
    Error,
    "encode-error: U+0EF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF7");
    },
    Error,
    "encode-error: U+0EF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF8");
    },
    Error,
    "encode-error: U+0EF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EF9");
    },
    Error,
    "encode-error: U+0EF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EFA");
    },
    Error,
    "encode-error: U+0EFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EFB");
    },
    Error,
    "encode-error: U+0EFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EFC");
    },
    Error,
    "encode-error: U+0EFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EFD");
    },
    Error,
    "encode-error: U+0EFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EFE");
    },
    Error,
    "encode-error: U+0EFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0EFF");
    },
    Error,
    "encode-error: U+0EFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F00");
    },
    Error,
    "encode-error: U+0F00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F01");
    },
    Error,
    "encode-error: U+0F01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F02");
    },
    Error,
    "encode-error: U+0F02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F03");
    },
    Error,
    "encode-error: U+0F03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F04");
    },
    Error,
    "encode-error: U+0F04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F05");
    },
    Error,
    "encode-error: U+0F05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F06");
    },
    Error,
    "encode-error: U+0F06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F07");
    },
    Error,
    "encode-error: U+0F07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F08");
    },
    Error,
    "encode-error: U+0F08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F09");
    },
    Error,
    "encode-error: U+0F09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F0A");
    },
    Error,
    "encode-error: U+0F0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F0B");
    },
    Error,
    "encode-error: U+0F0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F0C");
    },
    Error,
    "encode-error: U+0F0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F0D");
    },
    Error,
    "encode-error: U+0F0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F0E");
    },
    Error,
    "encode-error: U+0F0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F0F");
    },
    Error,
    "encode-error: U+0F0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F10");
    },
    Error,
    "encode-error: U+0F10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F11");
    },
    Error,
    "encode-error: U+0F11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F12");
    },
    Error,
    "encode-error: U+0F12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F13");
    },
    Error,
    "encode-error: U+0F13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F14");
    },
    Error,
    "encode-error: U+0F14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F15");
    },
    Error,
    "encode-error: U+0F15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F16");
    },
    Error,
    "encode-error: U+0F16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F17");
    },
    Error,
    "encode-error: U+0F17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F18");
    },
    Error,
    "encode-error: U+0F18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F19");
    },
    Error,
    "encode-error: U+0F19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F1A");
    },
    Error,
    "encode-error: U+0F1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F1B");
    },
    Error,
    "encode-error: U+0F1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F1C");
    },
    Error,
    "encode-error: U+0F1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F1D");
    },
    Error,
    "encode-error: U+0F1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F1E");
    },
    Error,
    "encode-error: U+0F1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F1F");
    },
    Error,
    "encode-error: U+0F1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F20");
    },
    Error,
    "encode-error: U+0F20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F21");
    },
    Error,
    "encode-error: U+0F21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F22");
    },
    Error,
    "encode-error: U+0F22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F23");
    },
    Error,
    "encode-error: U+0F23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F24");
    },
    Error,
    "encode-error: U+0F24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F25");
    },
    Error,
    "encode-error: U+0F25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F26");
    },
    Error,
    "encode-error: U+0F26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F27");
    },
    Error,
    "encode-error: U+0F27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F28");
    },
    Error,
    "encode-error: U+0F28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F29");
    },
    Error,
    "encode-error: U+0F29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F2A");
    },
    Error,
    "encode-error: U+0F2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F2B");
    },
    Error,
    "encode-error: U+0F2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F2C");
    },
    Error,
    "encode-error: U+0F2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F2D");
    },
    Error,
    "encode-error: U+0F2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F2E");
    },
    Error,
    "encode-error: U+0F2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F2F");
    },
    Error,
    "encode-error: U+0F2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F30");
    },
    Error,
    "encode-error: U+0F30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F31");
    },
    Error,
    "encode-error: U+0F31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F32");
    },
    Error,
    "encode-error: U+0F32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F33");
    },
    Error,
    "encode-error: U+0F33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F34");
    },
    Error,
    "encode-error: U+0F34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F35");
    },
    Error,
    "encode-error: U+0F35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F36");
    },
    Error,
    "encode-error: U+0F36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F37");
    },
    Error,
    "encode-error: U+0F37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F38");
    },
    Error,
    "encode-error: U+0F38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F39");
    },
    Error,
    "encode-error: U+0F39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F3A");
    },
    Error,
    "encode-error: U+0F3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F3B");
    },
    Error,
    "encode-error: U+0F3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F3C");
    },
    Error,
    "encode-error: U+0F3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F3D");
    },
    Error,
    "encode-error: U+0F3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F3E");
    },
    Error,
    "encode-error: U+0F3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F3F");
    },
    Error,
    "encode-error: U+0F3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F40");
    },
    Error,
    "encode-error: U+0F40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F41");
    },
    Error,
    "encode-error: U+0F41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F42");
    },
    Error,
    "encode-error: U+0F42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F43");
    },
    Error,
    "encode-error: U+0F43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F44");
    },
    Error,
    "encode-error: U+0F44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F45");
    },
    Error,
    "encode-error: U+0F45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F46");
    },
    Error,
    "encode-error: U+0F46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F47");
    },
    Error,
    "encode-error: U+0F47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F48");
    },
    Error,
    "encode-error: U+0F48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F49");
    },
    Error,
    "encode-error: U+0F49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F4A");
    },
    Error,
    "encode-error: U+0F4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F4B");
    },
    Error,
    "encode-error: U+0F4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F4C");
    },
    Error,
    "encode-error: U+0F4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F4D");
    },
    Error,
    "encode-error: U+0F4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F4E");
    },
    Error,
    "encode-error: U+0F4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F4F");
    },
    Error,
    "encode-error: U+0F4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F50");
    },
    Error,
    "encode-error: U+0F50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F51");
    },
    Error,
    "encode-error: U+0F51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F52");
    },
    Error,
    "encode-error: U+0F52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F53");
    },
    Error,
    "encode-error: U+0F53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F54");
    },
    Error,
    "encode-error: U+0F54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F55");
    },
    Error,
    "encode-error: U+0F55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F56");
    },
    Error,
    "encode-error: U+0F56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F57");
    },
    Error,
    "encode-error: U+0F57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F58");
    },
    Error,
    "encode-error: U+0F58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F59");
    },
    Error,
    "encode-error: U+0F59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F5A");
    },
    Error,
    "encode-error: U+0F5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F5B");
    },
    Error,
    "encode-error: U+0F5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F5C");
    },
    Error,
    "encode-error: U+0F5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F5D");
    },
    Error,
    "encode-error: U+0F5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F5E");
    },
    Error,
    "encode-error: U+0F5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F5F");
    },
    Error,
    "encode-error: U+0F5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F60");
    },
    Error,
    "encode-error: U+0F60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F61");
    },
    Error,
    "encode-error: U+0F61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F62");
    },
    Error,
    "encode-error: U+0F62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F63");
    },
    Error,
    "encode-error: U+0F63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F64");
    },
    Error,
    "encode-error: U+0F64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F65");
    },
    Error,
    "encode-error: U+0F65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F66");
    },
    Error,
    "encode-error: U+0F66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F67");
    },
    Error,
    "encode-error: U+0F67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F68");
    },
    Error,
    "encode-error: U+0F68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F69");
    },
    Error,
    "encode-error: U+0F69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F6A");
    },
    Error,
    "encode-error: U+0F6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F6B");
    },
    Error,
    "encode-error: U+0F6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F6C");
    },
    Error,
    "encode-error: U+0F6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F6D");
    },
    Error,
    "encode-error: U+0F6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F6E");
    },
    Error,
    "encode-error: U+0F6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F6F");
    },
    Error,
    "encode-error: U+0F6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F70");
    },
    Error,
    "encode-error: U+0F70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F71");
    },
    Error,
    "encode-error: U+0F71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F72");
    },
    Error,
    "encode-error: U+0F72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F73");
    },
    Error,
    "encode-error: U+0F73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F74");
    },
    Error,
    "encode-error: U+0F74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F75");
    },
    Error,
    "encode-error: U+0F75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F76");
    },
    Error,
    "encode-error: U+0F76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F77");
    },
    Error,
    "encode-error: U+0F77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F78");
    },
    Error,
    "encode-error: U+0F78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F79");
    },
    Error,
    "encode-error: U+0F79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F7A");
    },
    Error,
    "encode-error: U+0F7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F7B");
    },
    Error,
    "encode-error: U+0F7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F7C");
    },
    Error,
    "encode-error: U+0F7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F7D");
    },
    Error,
    "encode-error: U+0F7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F7E");
    },
    Error,
    "encode-error: U+0F7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F7F");
    },
    Error,
    "encode-error: U+0F7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F80");
    },
    Error,
    "encode-error: U+0F80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F81");
    },
    Error,
    "encode-error: U+0F81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F82");
    },
    Error,
    "encode-error: U+0F82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F83");
    },
    Error,
    "encode-error: U+0F83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F84");
    },
    Error,
    "encode-error: U+0F84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F85");
    },
    Error,
    "encode-error: U+0F85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F86");
    },
    Error,
    "encode-error: U+0F86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F87");
    },
    Error,
    "encode-error: U+0F87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F88");
    },
    Error,
    "encode-error: U+0F88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F89");
    },
    Error,
    "encode-error: U+0F89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F8A");
    },
    Error,
    "encode-error: U+0F8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F8B");
    },
    Error,
    "encode-error: U+0F8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F8C");
    },
    Error,
    "encode-error: U+0F8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F8D");
    },
    Error,
    "encode-error: U+0F8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F8E");
    },
    Error,
    "encode-error: U+0F8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F8F");
    },
    Error,
    "encode-error: U+0F8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F90");
    },
    Error,
    "encode-error: U+0F90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F91");
    },
    Error,
    "encode-error: U+0F91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F92");
    },
    Error,
    "encode-error: U+0F92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F93");
    },
    Error,
    "encode-error: U+0F93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F94");
    },
    Error,
    "encode-error: U+0F94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F95");
    },
    Error,
    "encode-error: U+0F95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F96");
    },
    Error,
    "encode-error: U+0F96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F97");
    },
    Error,
    "encode-error: U+0F97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F98");
    },
    Error,
    "encode-error: U+0F98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F99");
    },
    Error,
    "encode-error: U+0F99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F9A");
    },
    Error,
    "encode-error: U+0F9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F9B");
    },
    Error,
    "encode-error: U+0F9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F9C");
    },
    Error,
    "encode-error: U+0F9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F9D");
    },
    Error,
    "encode-error: U+0F9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F9E");
    },
    Error,
    "encode-error: U+0F9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0F9F");
    },
    Error,
    "encode-error: U+0F9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA0");
    },
    Error,
    "encode-error: U+0FA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA1");
    },
    Error,
    "encode-error: U+0FA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA2");
    },
    Error,
    "encode-error: U+0FA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA3");
    },
    Error,
    "encode-error: U+0FA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA4");
    },
    Error,
    "encode-error: U+0FA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA5");
    },
    Error,
    "encode-error: U+0FA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA6");
    },
    Error,
    "encode-error: U+0FA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA7");
    },
    Error,
    "encode-error: U+0FA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA8");
    },
    Error,
    "encode-error: U+0FA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FA9");
    },
    Error,
    "encode-error: U+0FA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FAA");
    },
    Error,
    "encode-error: U+0FAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FAB");
    },
    Error,
    "encode-error: U+0FAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FAC");
    },
    Error,
    "encode-error: U+0FAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FAD");
    },
    Error,
    "encode-error: U+0FAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FAE");
    },
    Error,
    "encode-error: U+0FAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FAF");
    },
    Error,
    "encode-error: U+0FAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB0");
    },
    Error,
    "encode-error: U+0FB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB1");
    },
    Error,
    "encode-error: U+0FB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB2");
    },
    Error,
    "encode-error: U+0FB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB3");
    },
    Error,
    "encode-error: U+0FB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB4");
    },
    Error,
    "encode-error: U+0FB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB5");
    },
    Error,
    "encode-error: U+0FB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB6");
    },
    Error,
    "encode-error: U+0FB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB7");
    },
    Error,
    "encode-error: U+0FB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB8");
    },
    Error,
    "encode-error: U+0FB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FB9");
    },
    Error,
    "encode-error: U+0FB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FBA");
    },
    Error,
    "encode-error: U+0FBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FBB");
    },
    Error,
    "encode-error: U+0FBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FBC");
    },
    Error,
    "encode-error: U+0FBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FBD");
    },
    Error,
    "encode-error: U+0FBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FBE");
    },
    Error,
    "encode-error: U+0FBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FBF");
    },
    Error,
    "encode-error: U+0FBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC0");
    },
    Error,
    "encode-error: U+0FC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC1");
    },
    Error,
    "encode-error: U+0FC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC2");
    },
    Error,
    "encode-error: U+0FC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC3");
    },
    Error,
    "encode-error: U+0FC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC4");
    },
    Error,
    "encode-error: U+0FC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC5");
    },
    Error,
    "encode-error: U+0FC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC6");
    },
    Error,
    "encode-error: U+0FC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC7");
    },
    Error,
    "encode-error: U+0FC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC8");
    },
    Error,
    "encode-error: U+0FC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FC9");
    },
    Error,
    "encode-error: U+0FC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FCA");
    },
    Error,
    "encode-error: U+0FCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FCB");
    },
    Error,
    "encode-error: U+0FCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FCC");
    },
    Error,
    "encode-error: U+0FCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FCD");
    },
    Error,
    "encode-error: U+0FCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FCE");
    },
    Error,
    "encode-error: U+0FCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FCF");
    },
    Error,
    "encode-error: U+0FCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD0");
    },
    Error,
    "encode-error: U+0FD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD1");
    },
    Error,
    "encode-error: U+0FD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD2");
    },
    Error,
    "encode-error: U+0FD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD3");
    },
    Error,
    "encode-error: U+0FD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD4");
    },
    Error,
    "encode-error: U+0FD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD5");
    },
    Error,
    "encode-error: U+0FD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD6");
    },
    Error,
    "encode-error: U+0FD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD7");
    },
    Error,
    "encode-error: U+0FD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD8");
    },
    Error,
    "encode-error: U+0FD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FD9");
    },
    Error,
    "encode-error: U+0FD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FDA");
    },
    Error,
    "encode-error: U+0FDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FDB");
    },
    Error,
    "encode-error: U+0FDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FDC");
    },
    Error,
    "encode-error: U+0FDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FDD");
    },
    Error,
    "encode-error: U+0FDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FDE");
    },
    Error,
    "encode-error: U+0FDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FDF");
    },
    Error,
    "encode-error: U+0FDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE0");
    },
    Error,
    "encode-error: U+0FE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE1");
    },
    Error,
    "encode-error: U+0FE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE2");
    },
    Error,
    "encode-error: U+0FE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE3");
    },
    Error,
    "encode-error: U+0FE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE4");
    },
    Error,
    "encode-error: U+0FE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE5");
    },
    Error,
    "encode-error: U+0FE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE6");
    },
    Error,
    "encode-error: U+0FE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE7");
    },
    Error,
    "encode-error: U+0FE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE8");
    },
    Error,
    "encode-error: U+0FE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FE9");
    },
    Error,
    "encode-error: U+0FE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FEA");
    },
    Error,
    "encode-error: U+0FEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FEB");
    },
    Error,
    "encode-error: U+0FEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FEC");
    },
    Error,
    "encode-error: U+0FEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FED");
    },
    Error,
    "encode-error: U+0FED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FEE");
    },
    Error,
    "encode-error: U+0FEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FEF");
    },
    Error,
    "encode-error: U+0FEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF0");
    },
    Error,
    "encode-error: U+0FF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF1");
    },
    Error,
    "encode-error: U+0FF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF2");
    },
    Error,
    "encode-error: U+0FF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF3");
    },
    Error,
    "encode-error: U+0FF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF4");
    },
    Error,
    "encode-error: U+0FF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF5");
    },
    Error,
    "encode-error: U+0FF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF6");
    },
    Error,
    "encode-error: U+0FF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF7");
    },
    Error,
    "encode-error: U+0FF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF8");
    },
    Error,
    "encode-error: U+0FF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FF9");
    },
    Error,
    "encode-error: U+0FF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FFA");
    },
    Error,
    "encode-error: U+0FFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FFB");
    },
    Error,
    "encode-error: U+0FFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FFC");
    },
    Error,
    "encode-error: U+0FFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FFD");
    },
    Error,
    "encode-error: U+0FFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FFE");
    },
    Error,
    "encode-error: U+0FFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u0FFF");
    },
    Error,
    "encode-error: U+0FFF",
  );

  assertStrictEquals(r, true);
});
