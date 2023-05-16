import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+2000-U+2FFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\u2000");
    },
    Error,
    "EncodingError U+2000",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2001");
    },
    Error,
    "EncodingError U+2001",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2002");
    },
    Error,
    "EncodingError U+2002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2003");
    },
    Error,
    "EncodingError U+2003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2004");
    },
    Error,
    "EncodingError U+2004",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2005");
    },
    Error,
    "EncodingError U+2005",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2006");
    },
    Error,
    "EncodingError U+2006",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2007");
    },
    Error,
    "EncodingError U+2007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2008");
    },
    Error,
    "EncodingError U+2008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2009");
    },
    Error,
    "EncodingError U+2009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u200A");
    },
    Error,
    "EncodingError U+200A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u200B");
    },
    Error,
    "EncodingError U+200B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u200C");
    },
    Error,
    "EncodingError U+200C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u200D");
    },
    Error,
    "EncodingError U+200D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u200E");
    },
    Error,
    "EncodingError U+200E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u200F");
    },
    Error,
    "EncodingError U+200F",
  );
  r = r && ([...ms932Encoder.encode("‐")].join(",") === "129,93"); // U+2010
  assertThrows(
    () => {
      ms932Encoder.encode("\u2011");
    },
    Error,
    "EncodingError U+2011",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2012");
    },
    Error,
    "EncodingError U+2012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2013");
    },
    Error,
    "EncodingError U+2013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2014");
    },
    Error,
    "EncodingError U+2014",
  );
  r = r && ([...ms932Encoder.encode("―")].join(",") === "129,92"); // U+2015
  assertThrows(
    () => {
      ms932Encoder.encode("\u2016");
    },
    Error,
    "EncodingError U+2016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2017");
    },
    Error,
    "EncodingError U+2017",
  );
  r = r && ([...ms932Encoder.encode("‘’")].join(",") === "129,101,129,102"); // U+2018
  assertThrows(
    () => {
      ms932Encoder.encode("\u201A");
    },
    Error,
    "EncodingError U+201A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u201B");
    },
    Error,
    "EncodingError U+201B",
  );
  r = r && ([...ms932Encoder.encode("“”")].join(",") === "129,103,129,104"); // U+201C
  assertThrows(
    () => {
      ms932Encoder.encode("\u201E");
    },
    Error,
    "EncodingError U+201E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u201F");
    },
    Error,
    "EncodingError U+201F",
  );
  r = r && ([...ms932Encoder.encode("†‡")].join(",") === "129,245,129,246"); // U+2020
  assertThrows(
    () => {
      ms932Encoder.encode("\u2022");
    },
    Error,
    "EncodingError U+2022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2023");
    },
    Error,
    "EncodingError U+2023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2024");
    },
    Error,
    "EncodingError U+2024",
  );
  r = r && ([...ms932Encoder.encode("‥…")].join(",") === "129,100,129,99"); // U+2025
  assertThrows(
    () => {
      ms932Encoder.encode("\u2027");
    },
    Error,
    "EncodingError U+2027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2028");
    },
    Error,
    "EncodingError U+2028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2029");
    },
    Error,
    "EncodingError U+2029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u202A");
    },
    Error,
    "EncodingError U+202A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u202B");
    },
    Error,
    "EncodingError U+202B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u202C");
    },
    Error,
    "EncodingError U+202C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u202D");
    },
    Error,
    "EncodingError U+202D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u202E");
    },
    Error,
    "EncodingError U+202E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u202F");
    },
    Error,
    "EncodingError U+202F",
  );
  r = r && ([...ms932Encoder.encode("‰")].join(",") === "129,241"); // U+2030
  assertThrows(
    () => {
      ms932Encoder.encode("\u2031");
    },
    Error,
    "EncodingError U+2031",
  );
  r = r && ([...ms932Encoder.encode("′″")].join(",") === "129,140,129,141"); // U+2032
  assertThrows(
    () => {
      ms932Encoder.encode("\u2034");
    },
    Error,
    "EncodingError U+2034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2035");
    },
    Error,
    "EncodingError U+2035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2036");
    },
    Error,
    "EncodingError U+2036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2037");
    },
    Error,
    "EncodingError U+2037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2038");
    },
    Error,
    "EncodingError U+2038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2039");
    },
    Error,
    "EncodingError U+2039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u203A");
    },
    Error,
    "EncodingError U+203A",
  );
  r = r && ([...ms932Encoder.encode("※")].join(",") === "129,166"); // U+203B
  assertThrows(
    () => {
      ms932Encoder.encode("\u203C");
    },
    Error,
    "EncodingError U+203C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u203D");
    },
    Error,
    "EncodingError U+203D",
  );
  r = r && ([...ms932Encoder.encode("\u203E")].join(",") === "126"); // U+203E -> 7E
  assertThrows(
    () => {
      ms932Encoder.encode("\u203F");
    },
    Error,
    "EncodingError U+203F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2040");
    },
    Error,
    "EncodingError U+2040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2041");
    },
    Error,
    "EncodingError U+2041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2042");
    },
    Error,
    "EncodingError U+2042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2043");
    },
    Error,
    "EncodingError U+2043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2044");
    },
    Error,
    "EncodingError U+2044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2045");
    },
    Error,
    "EncodingError U+2045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2046");
    },
    Error,
    "EncodingError U+2046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2047");
    },
    Error,
    "EncodingError U+2047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2048");
    },
    Error,
    "EncodingError U+2048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2049");
    },
    Error,
    "EncodingError U+2049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u204A");
    },
    Error,
    "EncodingError U+204A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u204B");
    },
    Error,
    "EncodingError U+204B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u204C");
    },
    Error,
    "EncodingError U+204C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u204D");
    },
    Error,
    "EncodingError U+204D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u204E");
    },
    Error,
    "EncodingError U+204E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u204F");
    },
    Error,
    "EncodingError U+204F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2050");
    },
    Error,
    "EncodingError U+2050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2051");
    },
    Error,
    "EncodingError U+2051",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2052");
    },
    Error,
    "EncodingError U+2052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2053");
    },
    Error,
    "EncodingError U+2053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2054");
    },
    Error,
    "EncodingError U+2054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2055");
    },
    Error,
    "EncodingError U+2055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2056");
    },
    Error,
    "EncodingError U+2056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2057");
    },
    Error,
    "EncodingError U+2057",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2058");
    },
    Error,
    "EncodingError U+2058",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2059");
    },
    Error,
    "EncodingError U+2059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u205A");
    },
    Error,
    "EncodingError U+205A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u205B");
    },
    Error,
    "EncodingError U+205B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u205C");
    },
    Error,
    "EncodingError U+205C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u205D");
    },
    Error,
    "EncodingError U+205D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u205E");
    },
    Error,
    "EncodingError U+205E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u205F");
    },
    Error,
    "EncodingError U+205F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2060");
    },
    Error,
    "EncodingError U+2060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2061");
    },
    Error,
    "EncodingError U+2061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2062");
    },
    Error,
    "EncodingError U+2062",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2063");
    },
    Error,
    "EncodingError U+2063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2064");
    },
    Error,
    "EncodingError U+2064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2065");
    },
    Error,
    "EncodingError U+2065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2066");
    },
    Error,
    "EncodingError U+2066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2067");
    },
    Error,
    "EncodingError U+2067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2068");
    },
    Error,
    "EncodingError U+2068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2069");
    },
    Error,
    "EncodingError U+2069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u206A");
    },
    Error,
    "EncodingError U+206A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u206B");
    },
    Error,
    "EncodingError U+206B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u206C");
    },
    Error,
    "EncodingError U+206C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u206D");
    },
    Error,
    "EncodingError U+206D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u206E");
    },
    Error,
    "EncodingError U+206E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u206F");
    },
    Error,
    "EncodingError U+206F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2070");
    },
    Error,
    "EncodingError U+2070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2071");
    },
    Error,
    "EncodingError U+2071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2072");
    },
    Error,
    "EncodingError U+2072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2073");
    },
    Error,
    "EncodingError U+2073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2074");
    },
    Error,
    "EncodingError U+2074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2075");
    },
    Error,
    "EncodingError U+2075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2076");
    },
    Error,
    "EncodingError U+2076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2077");
    },
    Error,
    "EncodingError U+2077",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2078");
    },
    Error,
    "EncodingError U+2078",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2079");
    },
    Error,
    "EncodingError U+2079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u207A");
    },
    Error,
    "EncodingError U+207A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u207B");
    },
    Error,
    "EncodingError U+207B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u207C");
    },
    Error,
    "EncodingError U+207C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u207D");
    },
    Error,
    "EncodingError U+207D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u207E");
    },
    Error,
    "EncodingError U+207E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u207F");
    },
    Error,
    "EncodingError U+207F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2080");
    },
    Error,
    "EncodingError U+2080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2081");
    },
    Error,
    "EncodingError U+2081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2082");
    },
    Error,
    "EncodingError U+2082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2083");
    },
    Error,
    "EncodingError U+2083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2084");
    },
    Error,
    "EncodingError U+2084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2085");
    },
    Error,
    "EncodingError U+2085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2086");
    },
    Error,
    "EncodingError U+2086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2087");
    },
    Error,
    "EncodingError U+2087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2088");
    },
    Error,
    "EncodingError U+2088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2089");
    },
    Error,
    "EncodingError U+2089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u208A");
    },
    Error,
    "EncodingError U+208A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u208B");
    },
    Error,
    "EncodingError U+208B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u208C");
    },
    Error,
    "EncodingError U+208C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u208D");
    },
    Error,
    "EncodingError U+208D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u208E");
    },
    Error,
    "EncodingError U+208E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u208F");
    },
    Error,
    "EncodingError U+208F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2090");
    },
    Error,
    "EncodingError U+2090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2091");
    },
    Error,
    "EncodingError U+2091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2092");
    },
    Error,
    "EncodingError U+2092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2093");
    },
    Error,
    "EncodingError U+2093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2094");
    },
    Error,
    "EncodingError U+2094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2095");
    },
    Error,
    "EncodingError U+2095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2096");
    },
    Error,
    "EncodingError U+2096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2097");
    },
    Error,
    "EncodingError U+2097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2098");
    },
    Error,
    "EncodingError U+2098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2099");
    },
    Error,
    "EncodingError U+2099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u209A");
    },
    Error,
    "EncodingError U+209A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u209B");
    },
    Error,
    "EncodingError U+209B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u209C");
    },
    Error,
    "EncodingError U+209C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u209D");
    },
    Error,
    "EncodingError U+209D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u209E");
    },
    Error,
    "EncodingError U+209E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u209F");
    },
    Error,
    "EncodingError U+209F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20A0");
    },
    Error,
    "EncodingError U+20A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20A1");
    },
    Error,
    "EncodingError U+20A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20A2");
    },
    Error,
    "EncodingError U+20A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20A3");
    },
    Error,
    "EncodingError U+20A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20A4");
    },
    Error,
    "EncodingError U+20A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20A5");
    },
    Error,
    "EncodingError U+20A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20A6");
    },
    Error,
    "EncodingError U+20A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20A7");
    },
    Error,
    "EncodingError U+20A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20A8");
    },
    Error,
    "EncodingError U+20A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20A9");
    },
    Error,
    "EncodingError U+20A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20AA");
    },
    Error,
    "EncodingError U+20AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20AB");
    },
    Error,
    "EncodingError U+20AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20AC");
    },
    Error,
    "EncodingError U+20AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20AD");
    },
    Error,
    "EncodingError U+20AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20AE");
    },
    Error,
    "EncodingError U+20AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20AF");
    },
    Error,
    "EncodingError U+20AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20B0");
    },
    Error,
    "EncodingError U+20B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20B1");
    },
    Error,
    "EncodingError U+20B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20B2");
    },
    Error,
    "EncodingError U+20B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20B3");
    },
    Error,
    "EncodingError U+20B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20B4");
    },
    Error,
    "EncodingError U+20B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20B5");
    },
    Error,
    "EncodingError U+20B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20B6");
    },
    Error,
    "EncodingError U+20B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20B7");
    },
    Error,
    "EncodingError U+20B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20B8");
    },
    Error,
    "EncodingError U+20B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20B9");
    },
    Error,
    "EncodingError U+20B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20BA");
    },
    Error,
    "EncodingError U+20BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20BB");
    },
    Error,
    "EncodingError U+20BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20BC");
    },
    Error,
    "EncodingError U+20BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20BD");
    },
    Error,
    "EncodingError U+20BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20BE");
    },
    Error,
    "EncodingError U+20BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20BF");
    },
    Error,
    "EncodingError U+20BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20C0");
    },
    Error,
    "EncodingError U+20C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20C1");
    },
    Error,
    "EncodingError U+20C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20C2");
    },
    Error,
    "EncodingError U+20C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20C3");
    },
    Error,
    "EncodingError U+20C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20C4");
    },
    Error,
    "EncodingError U+20C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20C5");
    },
    Error,
    "EncodingError U+20C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20C6");
    },
    Error,
    "EncodingError U+20C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20C7");
    },
    Error,
    "EncodingError U+20C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20C8");
    },
    Error,
    "EncodingError U+20C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20C9");
    },
    Error,
    "EncodingError U+20C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20CA");
    },
    Error,
    "EncodingError U+20CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20CB");
    },
    Error,
    "EncodingError U+20CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20CC");
    },
    Error,
    "EncodingError U+20CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20CD");
    },
    Error,
    "EncodingError U+20CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20CE");
    },
    Error,
    "EncodingError U+20CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20CF");
    },
    Error,
    "EncodingError U+20CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20D0");
    },
    Error,
    "EncodingError U+20D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20D1");
    },
    Error,
    "EncodingError U+20D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20D2");
    },
    Error,
    "EncodingError U+20D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20D3");
    },
    Error,
    "EncodingError U+20D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20D4");
    },
    Error,
    "EncodingError U+20D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20D5");
    },
    Error,
    "EncodingError U+20D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20D6");
    },
    Error,
    "EncodingError U+20D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20D7");
    },
    Error,
    "EncodingError U+20D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20D8");
    },
    Error,
    "EncodingError U+20D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20D9");
    },
    Error,
    "EncodingError U+20D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20DA");
    },
    Error,
    "EncodingError U+20DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20DB");
    },
    Error,
    "EncodingError U+20DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20DC");
    },
    Error,
    "EncodingError U+20DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20DD");
    },
    Error,
    "EncodingError U+20DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20DE");
    },
    Error,
    "EncodingError U+20DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20DF");
    },
    Error,
    "EncodingError U+20DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20E0");
    },
    Error,
    "EncodingError U+20E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20E1");
    },
    Error,
    "EncodingError U+20E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20E2");
    },
    Error,
    "EncodingError U+20E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20E3");
    },
    Error,
    "EncodingError U+20E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20E4");
    },
    Error,
    "EncodingError U+20E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20E5");
    },
    Error,
    "EncodingError U+20E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20E6");
    },
    Error,
    "EncodingError U+20E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20E7");
    },
    Error,
    "EncodingError U+20E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20E8");
    },
    Error,
    "EncodingError U+20E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20E9");
    },
    Error,
    "EncodingError U+20E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20EA");
    },
    Error,
    "EncodingError U+20EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20EB");
    },
    Error,
    "EncodingError U+20EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20EC");
    },
    Error,
    "EncodingError U+20EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20ED");
    },
    Error,
    "EncodingError U+20ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20EE");
    },
    Error,
    "EncodingError U+20EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20EF");
    },
    Error,
    "EncodingError U+20EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20F0");
    },
    Error,
    "EncodingError U+20F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20F1");
    },
    Error,
    "EncodingError U+20F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20F2");
    },
    Error,
    "EncodingError U+20F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20F3");
    },
    Error,
    "EncodingError U+20F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20F4");
    },
    Error,
    "EncodingError U+20F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20F5");
    },
    Error,
    "EncodingError U+20F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20F6");
    },
    Error,
    "EncodingError U+20F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20F7");
    },
    Error,
    "EncodingError U+20F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20F8");
    },
    Error,
    "EncodingError U+20F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20F9");
    },
    Error,
    "EncodingError U+20F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20FA");
    },
    Error,
    "EncodingError U+20FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20FB");
    },
    Error,
    "EncodingError U+20FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20FC");
    },
    Error,
    "EncodingError U+20FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20FD");
    },
    Error,
    "EncodingError U+20FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20FE");
    },
    Error,
    "EncodingError U+20FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u20FF");
    },
    Error,
    "EncodingError U+20FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2100");
    },
    Error,
    "EncodingError U+2100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2101");
    },
    Error,
    "EncodingError U+2101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2102");
    },
    Error,
    "EncodingError U+2102",
  );
  r = r && ([...ms932Encoder.encode("℃")].join(",") === "129,142"); // U+2103
  assertThrows(
    () => {
      ms932Encoder.encode("\u2104");
    },
    Error,
    "EncodingError U+2104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2105");
    },
    Error,
    "EncodingError U+2105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2106");
    },
    Error,
    "EncodingError U+2106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2107");
    },
    Error,
    "EncodingError U+2107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2108");
    },
    Error,
    "EncodingError U+2108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2109");
    },
    Error,
    "EncodingError U+2109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u210A");
    },
    Error,
    "EncodingError U+210A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u210B");
    },
    Error,
    "EncodingError U+210B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u210C");
    },
    Error,
    "EncodingError U+210C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u210D");
    },
    Error,
    "EncodingError U+210D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u210E");
    },
    Error,
    "EncodingError U+210E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u210F");
    },
    Error,
    "EncodingError U+210F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2110");
    },
    Error,
    "EncodingError U+2110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2111");
    },
    Error,
    "EncodingError U+2111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2112");
    },
    Error,
    "EncodingError U+2112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2113");
    },
    Error,
    "EncodingError U+2113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2114");
    },
    Error,
    "EncodingError U+2114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2115");
    },
    Error,
    "EncodingError U+2115",
  );
  r = r && ([...ms932Encoder.encode("№")].join(",") === "135,130"); // U+2116
  assertThrows(
    () => {
      ms932Encoder.encode("\u2117");
    },
    Error,
    "EncodingError U+2117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2118");
    },
    Error,
    "EncodingError U+2118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2119");
    },
    Error,
    "EncodingError U+2119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u211A");
    },
    Error,
    "EncodingError U+211A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u211B");
    },
    Error,
    "EncodingError U+211B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u211C");
    },
    Error,
    "EncodingError U+211C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u211D");
    },
    Error,
    "EncodingError U+211D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u211E");
    },
    Error,
    "EncodingError U+211E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u211F");
    },
    Error,
    "EncodingError U+211F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2120");
    },
    Error,
    "EncodingError U+2120",
  );
  r = r && ([...ms932Encoder.encode("℡")].join(",") === "135,132"); // U+2121
  r = r && ([...ms932Encoder.encode("\u2122")].join(",") === "129,124"); // U+2122 -> FF0D
  assertThrows(
    () => {
      ms932Encoder.encode("\u2123");
    },
    Error,
    "EncodingError U+2123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2124");
    },
    Error,
    "EncodingError U+2124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2125");
    },
    Error,
    "EncodingError U+2125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2126");
    },
    Error,
    "EncodingError U+2126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2127");
    },
    Error,
    "EncodingError U+2127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2128");
    },
    Error,
    "EncodingError U+2128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2129");
    },
    Error,
    "EncodingError U+2129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u212A");
    },
    Error,
    "EncodingError U+212A",
  );
  r = r && ([...ms932Encoder.encode("Å")].join(",") === "129,240"); // U+212B
  assertThrows(
    () => {
      ms932Encoder.encode("\u212C");
    },
    Error,
    "EncodingError U+212C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u212D");
    },
    Error,
    "EncodingError U+212D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u212E");
    },
    Error,
    "EncodingError U+212E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u212F");
    },
    Error,
    "EncodingError U+212F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2130");
    },
    Error,
    "EncodingError U+2130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2131");
    },
    Error,
    "EncodingError U+2131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2132");
    },
    Error,
    "EncodingError U+2132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2133");
    },
    Error,
    "EncodingError U+2133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2134");
    },
    Error,
    "EncodingError U+2134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2135");
    },
    Error,
    "EncodingError U+2135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2136");
    },
    Error,
    "EncodingError U+2136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2137");
    },
    Error,
    "EncodingError U+2137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2138");
    },
    Error,
    "EncodingError U+2138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2139");
    },
    Error,
    "EncodingError U+2139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u213A");
    },
    Error,
    "EncodingError U+213A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u213B");
    },
    Error,
    "EncodingError U+213B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u213C");
    },
    Error,
    "EncodingError U+213C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u213D");
    },
    Error,
    "EncodingError U+213D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u213E");
    },
    Error,
    "EncodingError U+213E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u213F");
    },
    Error,
    "EncodingError U+213F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2140");
    },
    Error,
    "EncodingError U+2140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2141");
    },
    Error,
    "EncodingError U+2141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2142");
    },
    Error,
    "EncodingError U+2142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2143");
    },
    Error,
    "EncodingError U+2143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2144");
    },
    Error,
    "EncodingError U+2144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2145");
    },
    Error,
    "EncodingError U+2145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2146");
    },
    Error,
    "EncodingError U+2146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2147");
    },
    Error,
    "EncodingError U+2147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2148");
    },
    Error,
    "EncodingError U+2148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2149");
    },
    Error,
    "EncodingError U+2149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u214A");
    },
    Error,
    "EncodingError U+214A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u214B");
    },
    Error,
    "EncodingError U+214B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u214C");
    },
    Error,
    "EncodingError U+214C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u214D");
    },
    Error,
    "EncodingError U+214D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u214E");
    },
    Error,
    "EncodingError U+214E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u214F");
    },
    Error,
    "EncodingError U+214F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2150");
    },
    Error,
    "EncodingError U+2150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2151");
    },
    Error,
    "EncodingError U+2151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2152");
    },
    Error,
    "EncodingError U+2152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2153");
    },
    Error,
    "EncodingError U+2153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2154");
    },
    Error,
    "EncodingError U+2154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2155");
    },
    Error,
    "EncodingError U+2155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2156");
    },
    Error,
    "EncodingError U+2156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2157");
    },
    Error,
    "EncodingError U+2157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2158");
    },
    Error,
    "EncodingError U+2158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2159");
    },
    Error,
    "EncodingError U+2159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u215A");
    },
    Error,
    "EncodingError U+215A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u215B");
    },
    Error,
    "EncodingError U+215B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u215C");
    },
    Error,
    "EncodingError U+215C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u215D");
    },
    Error,
    "EncodingError U+215D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u215E");
    },
    Error,
    "EncodingError U+215E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u215F");
    },
    Error,
    "EncodingError U+215F",
  );
  r = r &&
    ([...ms932Encoder.encode("ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ")].join(",") ===
      "135,84,135,85,135,86,135,87,135,88,135,89,135,90,135,91,135,92,135,93"); // U+2160
  assertThrows(
    () => {
      ms932Encoder.encode("\u216A");
    },
    Error,
    "EncodingError U+216A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u216B");
    },
    Error,
    "EncodingError U+216B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u216C");
    },
    Error,
    "EncodingError U+216C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u216D");
    },
    Error,
    "EncodingError U+216D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u216E");
    },
    Error,
    "EncodingError U+216E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u216F");
    },
    Error,
    "EncodingError U+216F",
  );
  r = r &&
    ([...ms932Encoder.encode("ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ")].join(",") ===
      "250,64,250,65,250,66,250,67,250,68,250,69,250,70,250,71,250,72,250,73"); // U+2170
  assertThrows(
    () => {
      ms932Encoder.encode("\u217A");
    },
    Error,
    "EncodingError U+217A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u217B");
    },
    Error,
    "EncodingError U+217B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u217C");
    },
    Error,
    "EncodingError U+217C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u217D");
    },
    Error,
    "EncodingError U+217D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u217E");
    },
    Error,
    "EncodingError U+217E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u217F");
    },
    Error,
    "EncodingError U+217F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2180");
    },
    Error,
    "EncodingError U+2180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2181");
    },
    Error,
    "EncodingError U+2181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2182");
    },
    Error,
    "EncodingError U+2182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2183");
    },
    Error,
    "EncodingError U+2183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2184");
    },
    Error,
    "EncodingError U+2184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2185");
    },
    Error,
    "EncodingError U+2185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2186");
    },
    Error,
    "EncodingError U+2186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2187");
    },
    Error,
    "EncodingError U+2187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2188");
    },
    Error,
    "EncodingError U+2188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2189");
    },
    Error,
    "EncodingError U+2189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u218A");
    },
    Error,
    "EncodingError U+218A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u218B");
    },
    Error,
    "EncodingError U+218B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u218C");
    },
    Error,
    "EncodingError U+218C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u218D");
    },
    Error,
    "EncodingError U+218D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u218E");
    },
    Error,
    "EncodingError U+218E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u218F");
    },
    Error,
    "EncodingError U+218F",
  );
  r = r &&
    ([...ms932Encoder.encode("←↑→↓")].join(",") ===
      "129,169,129,170,129,168,129,171"); // U+2190
  assertThrows(
    () => {
      ms932Encoder.encode("\u2194");
    },
    Error,
    "EncodingError U+2194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2195");
    },
    Error,
    "EncodingError U+2195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2196");
    },
    Error,
    "EncodingError U+2196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2197");
    },
    Error,
    "EncodingError U+2197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2198");
    },
    Error,
    "EncodingError U+2198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2199");
    },
    Error,
    "EncodingError U+2199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u219A");
    },
    Error,
    "EncodingError U+219A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u219B");
    },
    Error,
    "EncodingError U+219B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u219C");
    },
    Error,
    "EncodingError U+219C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u219D");
    },
    Error,
    "EncodingError U+219D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u219E");
    },
    Error,
    "EncodingError U+219E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u219F");
    },
    Error,
    "EncodingError U+219F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21A0");
    },
    Error,
    "EncodingError U+21A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21A1");
    },
    Error,
    "EncodingError U+21A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21A2");
    },
    Error,
    "EncodingError U+21A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21A3");
    },
    Error,
    "EncodingError U+21A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21A4");
    },
    Error,
    "EncodingError U+21A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21A5");
    },
    Error,
    "EncodingError U+21A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21A6");
    },
    Error,
    "EncodingError U+21A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21A7");
    },
    Error,
    "EncodingError U+21A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21A8");
    },
    Error,
    "EncodingError U+21A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21A9");
    },
    Error,
    "EncodingError U+21A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21AA");
    },
    Error,
    "EncodingError U+21AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21AB");
    },
    Error,
    "EncodingError U+21AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21AC");
    },
    Error,
    "EncodingError U+21AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21AD");
    },
    Error,
    "EncodingError U+21AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21AE");
    },
    Error,
    "EncodingError U+21AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21AF");
    },
    Error,
    "EncodingError U+21AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21B0");
    },
    Error,
    "EncodingError U+21B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21B1");
    },
    Error,
    "EncodingError U+21B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21B2");
    },
    Error,
    "EncodingError U+21B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21B3");
    },
    Error,
    "EncodingError U+21B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21B4");
    },
    Error,
    "EncodingError U+21B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21B5");
    },
    Error,
    "EncodingError U+21B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21B6");
    },
    Error,
    "EncodingError U+21B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21B7");
    },
    Error,
    "EncodingError U+21B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21B8");
    },
    Error,
    "EncodingError U+21B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21B9");
    },
    Error,
    "EncodingError U+21B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21BA");
    },
    Error,
    "EncodingError U+21BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21BB");
    },
    Error,
    "EncodingError U+21BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21BC");
    },
    Error,
    "EncodingError U+21BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21BD");
    },
    Error,
    "EncodingError U+21BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21BE");
    },
    Error,
    "EncodingError U+21BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21BF");
    },
    Error,
    "EncodingError U+21BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21C0");
    },
    Error,
    "EncodingError U+21C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21C1");
    },
    Error,
    "EncodingError U+21C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21C2");
    },
    Error,
    "EncodingError U+21C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21C3");
    },
    Error,
    "EncodingError U+21C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21C4");
    },
    Error,
    "EncodingError U+21C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21C5");
    },
    Error,
    "EncodingError U+21C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21C6");
    },
    Error,
    "EncodingError U+21C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21C7");
    },
    Error,
    "EncodingError U+21C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21C8");
    },
    Error,
    "EncodingError U+21C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21C9");
    },
    Error,
    "EncodingError U+21C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21CA");
    },
    Error,
    "EncodingError U+21CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21CB");
    },
    Error,
    "EncodingError U+21CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21CC");
    },
    Error,
    "EncodingError U+21CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21CD");
    },
    Error,
    "EncodingError U+21CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21CE");
    },
    Error,
    "EncodingError U+21CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21CF");
    },
    Error,
    "EncodingError U+21CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21D0");
    },
    Error,
    "EncodingError U+21D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21D1");
    },
    Error,
    "EncodingError U+21D1",
  );
  r = r && ([...ms932Encoder.encode("⇒")].join(",") === "129,203"); // U+21D2
  assertThrows(
    () => {
      ms932Encoder.encode("\u21D3");
    },
    Error,
    "EncodingError U+21D3",
  );
  r = r && ([...ms932Encoder.encode("⇔")].join(",") === "129,204"); // U+21D4
  assertThrows(
    () => {
      ms932Encoder.encode("\u21D5");
    },
    Error,
    "EncodingError U+21D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21D6");
    },
    Error,
    "EncodingError U+21D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21D7");
    },
    Error,
    "EncodingError U+21D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21D8");
    },
    Error,
    "EncodingError U+21D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21D9");
    },
    Error,
    "EncodingError U+21D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21DA");
    },
    Error,
    "EncodingError U+21DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21DB");
    },
    Error,
    "EncodingError U+21DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21DC");
    },
    Error,
    "EncodingError U+21DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21DD");
    },
    Error,
    "EncodingError U+21DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21DE");
    },
    Error,
    "EncodingError U+21DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21DF");
    },
    Error,
    "EncodingError U+21DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21E0");
    },
    Error,
    "EncodingError U+21E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21E1");
    },
    Error,
    "EncodingError U+21E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21E2");
    },
    Error,
    "EncodingError U+21E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21E3");
    },
    Error,
    "EncodingError U+21E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21E4");
    },
    Error,
    "EncodingError U+21E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21E5");
    },
    Error,
    "EncodingError U+21E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21E6");
    },
    Error,
    "EncodingError U+21E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21E7");
    },
    Error,
    "EncodingError U+21E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21E8");
    },
    Error,
    "EncodingError U+21E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21E9");
    },
    Error,
    "EncodingError U+21E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21EA");
    },
    Error,
    "EncodingError U+21EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21EB");
    },
    Error,
    "EncodingError U+21EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21EC");
    },
    Error,
    "EncodingError U+21EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21ED");
    },
    Error,
    "EncodingError U+21ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21EE");
    },
    Error,
    "EncodingError U+21EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21EF");
    },
    Error,
    "EncodingError U+21EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21F0");
    },
    Error,
    "EncodingError U+21F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21F1");
    },
    Error,
    "EncodingError U+21F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21F2");
    },
    Error,
    "EncodingError U+21F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21F3");
    },
    Error,
    "EncodingError U+21F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21F4");
    },
    Error,
    "EncodingError U+21F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21F5");
    },
    Error,
    "EncodingError U+21F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21F6");
    },
    Error,
    "EncodingError U+21F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21F7");
    },
    Error,
    "EncodingError U+21F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21F8");
    },
    Error,
    "EncodingError U+21F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21F9");
    },
    Error,
    "EncodingError U+21F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21FA");
    },
    Error,
    "EncodingError U+21FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21FB");
    },
    Error,
    "EncodingError U+21FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21FC");
    },
    Error,
    "EncodingError U+21FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21FD");
    },
    Error,
    "EncodingError U+21FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21FE");
    },
    Error,
    "EncodingError U+21FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u21FF");
    },
    Error,
    "EncodingError U+21FF",
  );
  r = r && ([...ms932Encoder.encode("∀")].join(",") === "129,205"); // U+2200
  assertThrows(
    () => {
      ms932Encoder.encode("\u2201");
    },
    Error,
    "EncodingError U+2201",
  );
  r = r && ([...ms932Encoder.encode("∂∃")].join(",") === "129,221,129,206"); // U+2202
  assertThrows(
    () => {
      ms932Encoder.encode("\u2204");
    },
    Error,
    "EncodingError U+2204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2205");
    },
    Error,
    "EncodingError U+2205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2206");
    },
    Error,
    "EncodingError U+2206",
  );
  r = r && ([...ms932Encoder.encode("∇∈")].join(",") === "129,222,129,184"); // U+2207
  assertThrows(
    () => {
      ms932Encoder.encode("\u2209");
    },
    Error,
    "EncodingError U+2209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u220A");
    },
    Error,
    "EncodingError U+220A",
  );
  r = r && ([...ms932Encoder.encode("∋")].join(",") === "129,185"); // U+220B
  assertThrows(
    () => {
      ms932Encoder.encode("\u220C");
    },
    Error,
    "EncodingError U+220C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u220D");
    },
    Error,
    "EncodingError U+220D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u220E");
    },
    Error,
    "EncodingError U+220E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u220F");
    },
    Error,
    "EncodingError U+220F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2210");
    },
    Error,
    "EncodingError U+2210",
  );
  r = r && ([...ms932Encoder.encode("∑")].join(",") === "135,148"); // U+2211
  assertThrows(
    () => {
      ms932Encoder.encode("\u2212");
    },
    Error,
    "EncodingError U+2212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2213");
    },
    Error,
    "EncodingError U+2213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2214");
    },
    Error,
    "EncodingError U+2214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2215");
    },
    Error,
    "EncodingError U+2215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2216");
    },
    Error,
    "EncodingError U+2216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2217");
    },
    Error,
    "EncodingError U+2217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2218");
    },
    Error,
    "EncodingError U+2218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2219");
    },
    Error,
    "EncodingError U+2219",
  );
  r = r && ([...ms932Encoder.encode("√")].join(",") === "129,227"); // U+221A
  assertThrows(
    () => {
      ms932Encoder.encode("\u221B");
    },
    Error,
    "EncodingError U+221B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u221C");
    },
    Error,
    "EncodingError U+221C",
  );
  r = r &&
    ([...ms932Encoder.encode("∝∞∟∠")].join(",") ===
      "129,229,129,135,135,152,129,218"); // U+221D
  assertThrows(
    () => {
      ms932Encoder.encode("\u2221");
    },
    Error,
    "EncodingError U+2221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2222");
    },
    Error,
    "EncodingError U+2222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2223");
    },
    Error,
    "EncodingError U+2223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2224");
    },
    Error,
    "EncodingError U+2224",
  );
  r = r && ([...ms932Encoder.encode("∥")].join(",") === "129,97"); // U+2225
  assertThrows(
    () => {
      ms932Encoder.encode("\u2226");
    },
    Error,
    "EncodingError U+2226",
  );
  r = r &&
    ([...ms932Encoder.encode("∧∨∩∪∫∬")].join(",") ===
      "129,200,129,201,129,191,129,190,129,231,129,232"); // U+2227
  assertThrows(
    () => {
      ms932Encoder.encode("\u222D");
    },
    Error,
    "EncodingError U+222D",
  );
  r = r && ([...ms932Encoder.encode("∮")].join(",") === "135,147"); // U+222E
  assertThrows(
    () => {
      ms932Encoder.encode("\u222F");
    },
    Error,
    "EncodingError U+222F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2230");
    },
    Error,
    "EncodingError U+2230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2231");
    },
    Error,
    "EncodingError U+2231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2232");
    },
    Error,
    "EncodingError U+2232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2233");
    },
    Error,
    "EncodingError U+2233",
  );
  r = r && ([...ms932Encoder.encode("∴∵")].join(",") === "129,136,129,230"); // U+2234
  assertThrows(
    () => {
      ms932Encoder.encode("\u2236");
    },
    Error,
    "EncodingError U+2236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2237");
    },
    Error,
    "EncodingError U+2237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2238");
    },
    Error,
    "EncodingError U+2238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2239");
    },
    Error,
    "EncodingError U+2239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u223A");
    },
    Error,
    "EncodingError U+223A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u223B");
    },
    Error,
    "EncodingError U+223B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u223C");
    },
    Error,
    "EncodingError U+223C",
  );
  r = r && ([...ms932Encoder.encode("∽")].join(",") === "129,228"); // U+223D
  assertThrows(
    () => {
      ms932Encoder.encode("\u223E");
    },
    Error,
    "EncodingError U+223E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u223F");
    },
    Error,
    "EncodingError U+223F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2240");
    },
    Error,
    "EncodingError U+2240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2241");
    },
    Error,
    "EncodingError U+2241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2242");
    },
    Error,
    "EncodingError U+2242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2243");
    },
    Error,
    "EncodingError U+2243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2244");
    },
    Error,
    "EncodingError U+2244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2245");
    },
    Error,
    "EncodingError U+2245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2246");
    },
    Error,
    "EncodingError U+2246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2247");
    },
    Error,
    "EncodingError U+2247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2248");
    },
    Error,
    "EncodingError U+2248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2249");
    },
    Error,
    "EncodingError U+2249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u224A");
    },
    Error,
    "EncodingError U+224A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u224B");
    },
    Error,
    "EncodingError U+224B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u224C");
    },
    Error,
    "EncodingError U+224C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u224D");
    },
    Error,
    "EncodingError U+224D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u224E");
    },
    Error,
    "EncodingError U+224E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u224F");
    },
    Error,
    "EncodingError U+224F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2250");
    },
    Error,
    "EncodingError U+2250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2251");
    },
    Error,
    "EncodingError U+2251",
  );
  r = r && ([...ms932Encoder.encode("≒")].join(",") === "129,224"); // U+2252
  assertThrows(
    () => {
      ms932Encoder.encode("\u2253");
    },
    Error,
    "EncodingError U+2253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2254");
    },
    Error,
    "EncodingError U+2254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2255");
    },
    Error,
    "EncodingError U+2255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2256");
    },
    Error,
    "EncodingError U+2256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2257");
    },
    Error,
    "EncodingError U+2257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2258");
    },
    Error,
    "EncodingError U+2258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2259");
    },
    Error,
    "EncodingError U+2259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u225A");
    },
    Error,
    "EncodingError U+225A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u225B");
    },
    Error,
    "EncodingError U+225B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u225C");
    },
    Error,
    "EncodingError U+225C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u225D");
    },
    Error,
    "EncodingError U+225D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u225E");
    },
    Error,
    "EncodingError U+225E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u225F");
    },
    Error,
    "EncodingError U+225F",
  );
  r = r && ([...ms932Encoder.encode("≠≡")].join(",") === "129,130,129,223"); // U+2260
  assertThrows(
    () => {
      ms932Encoder.encode("\u2262");
    },
    Error,
    "EncodingError U+2262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2263");
    },
    Error,
    "EncodingError U+2263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2264");
    },
    Error,
    "EncodingError U+2264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2265");
    },
    Error,
    "EncodingError U+2265",
  );
  r = r && ([...ms932Encoder.encode("≦≧")].join(",") === "129,133,129,134"); // U+2266
  assertThrows(
    () => {
      ms932Encoder.encode("\u2268");
    },
    Error,
    "EncodingError U+2268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2269");
    },
    Error,
    "EncodingError U+2269",
  );
  r = r && ([...ms932Encoder.encode("≪≫")].join(",") === "129,225,129,226"); // U+226A
  assertThrows(
    () => {
      ms932Encoder.encode("\u226C");
    },
    Error,
    "EncodingError U+226C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u226D");
    },
    Error,
    "EncodingError U+226D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u226E");
    },
    Error,
    "EncodingError U+226E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u226F");
    },
    Error,
    "EncodingError U+226F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2270");
    },
    Error,
    "EncodingError U+2270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2271");
    },
    Error,
    "EncodingError U+2271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2272");
    },
    Error,
    "EncodingError U+2272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2273");
    },
    Error,
    "EncodingError U+2273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2274");
    },
    Error,
    "EncodingError U+2274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2275");
    },
    Error,
    "EncodingError U+2275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2276");
    },
    Error,
    "EncodingError U+2276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2277");
    },
    Error,
    "EncodingError U+2277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2278");
    },
    Error,
    "EncodingError U+2278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2279");
    },
    Error,
    "EncodingError U+2279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u227A");
    },
    Error,
    "EncodingError U+227A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u227B");
    },
    Error,
    "EncodingError U+227B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u227C");
    },
    Error,
    "EncodingError U+227C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u227D");
    },
    Error,
    "EncodingError U+227D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u227E");
    },
    Error,
    "EncodingError U+227E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u227F");
    },
    Error,
    "EncodingError U+227F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2280");
    },
    Error,
    "EncodingError U+2280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2281");
    },
    Error,
    "EncodingError U+2281",
  );
  r = r && ([...ms932Encoder.encode("⊂⊃")].join(",") === "129,188,129,189"); // U+2282
  assertThrows(
    () => {
      ms932Encoder.encode("\u2284");
    },
    Error,
    "EncodingError U+2284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2285");
    },
    Error,
    "EncodingError U+2285",
  );
  r = r && ([...ms932Encoder.encode("⊆⊇")].join(",") === "129,186,129,187"); // U+2286
  assertThrows(
    () => {
      ms932Encoder.encode("\u2288");
    },
    Error,
    "EncodingError U+2288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2289");
    },
    Error,
    "EncodingError U+2289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u228A");
    },
    Error,
    "EncodingError U+228A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u228B");
    },
    Error,
    "EncodingError U+228B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u228C");
    },
    Error,
    "EncodingError U+228C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u228D");
    },
    Error,
    "EncodingError U+228D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u228E");
    },
    Error,
    "EncodingError U+228E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u228F");
    },
    Error,
    "EncodingError U+228F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2290");
    },
    Error,
    "EncodingError U+2290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2291");
    },
    Error,
    "EncodingError U+2291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2292");
    },
    Error,
    "EncodingError U+2292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2293");
    },
    Error,
    "EncodingError U+2293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2294");
    },
    Error,
    "EncodingError U+2294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2295");
    },
    Error,
    "EncodingError U+2295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2296");
    },
    Error,
    "EncodingError U+2296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2297");
    },
    Error,
    "EncodingError U+2297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2298");
    },
    Error,
    "EncodingError U+2298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2299");
    },
    Error,
    "EncodingError U+2299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u229A");
    },
    Error,
    "EncodingError U+229A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u229B");
    },
    Error,
    "EncodingError U+229B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u229C");
    },
    Error,
    "EncodingError U+229C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u229D");
    },
    Error,
    "EncodingError U+229D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u229E");
    },
    Error,
    "EncodingError U+229E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u229F");
    },
    Error,
    "EncodingError U+229F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22A0");
    },
    Error,
    "EncodingError U+22A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22A1");
    },
    Error,
    "EncodingError U+22A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22A2");
    },
    Error,
    "EncodingError U+22A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22A3");
    },
    Error,
    "EncodingError U+22A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22A4");
    },
    Error,
    "EncodingError U+22A4",
  );
  r = r && ([...ms932Encoder.encode("⊥")].join(",") === "129,219"); // U+22A5
  assertThrows(
    () => {
      ms932Encoder.encode("\u22A6");
    },
    Error,
    "EncodingError U+22A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22A7");
    },
    Error,
    "EncodingError U+22A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22A8");
    },
    Error,
    "EncodingError U+22A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22A9");
    },
    Error,
    "EncodingError U+22A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22AA");
    },
    Error,
    "EncodingError U+22AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22AB");
    },
    Error,
    "EncodingError U+22AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22AC");
    },
    Error,
    "EncodingError U+22AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22AD");
    },
    Error,
    "EncodingError U+22AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22AE");
    },
    Error,
    "EncodingError U+22AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22AF");
    },
    Error,
    "EncodingError U+22AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22B0");
    },
    Error,
    "EncodingError U+22B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22B1");
    },
    Error,
    "EncodingError U+22B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22B2");
    },
    Error,
    "EncodingError U+22B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22B3");
    },
    Error,
    "EncodingError U+22B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22B4");
    },
    Error,
    "EncodingError U+22B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22B5");
    },
    Error,
    "EncodingError U+22B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22B6");
    },
    Error,
    "EncodingError U+22B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22B7");
    },
    Error,
    "EncodingError U+22B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22B8");
    },
    Error,
    "EncodingError U+22B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22B9");
    },
    Error,
    "EncodingError U+22B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22BA");
    },
    Error,
    "EncodingError U+22BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22BB");
    },
    Error,
    "EncodingError U+22BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22BC");
    },
    Error,
    "EncodingError U+22BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22BD");
    },
    Error,
    "EncodingError U+22BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22BE");
    },
    Error,
    "EncodingError U+22BE",
  );
  r = r && ([...ms932Encoder.encode("⊿")].join(",") === "135,153"); // U+22BF
  assertThrows(
    () => {
      ms932Encoder.encode("\u22C0");
    },
    Error,
    "EncodingError U+22C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22C1");
    },
    Error,
    "EncodingError U+22C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22C2");
    },
    Error,
    "EncodingError U+22C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22C3");
    },
    Error,
    "EncodingError U+22C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22C4");
    },
    Error,
    "EncodingError U+22C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22C5");
    },
    Error,
    "EncodingError U+22C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22C6");
    },
    Error,
    "EncodingError U+22C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22C7");
    },
    Error,
    "EncodingError U+22C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22C8");
    },
    Error,
    "EncodingError U+22C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22C9");
    },
    Error,
    "EncodingError U+22C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22CA");
    },
    Error,
    "EncodingError U+22CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22CB");
    },
    Error,
    "EncodingError U+22CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22CC");
    },
    Error,
    "EncodingError U+22CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22CD");
    },
    Error,
    "EncodingError U+22CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22CE");
    },
    Error,
    "EncodingError U+22CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22CF");
    },
    Error,
    "EncodingError U+22CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22D0");
    },
    Error,
    "EncodingError U+22D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22D1");
    },
    Error,
    "EncodingError U+22D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22D2");
    },
    Error,
    "EncodingError U+22D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22D3");
    },
    Error,
    "EncodingError U+22D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22D4");
    },
    Error,
    "EncodingError U+22D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22D5");
    },
    Error,
    "EncodingError U+22D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22D6");
    },
    Error,
    "EncodingError U+22D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22D7");
    },
    Error,
    "EncodingError U+22D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22D8");
    },
    Error,
    "EncodingError U+22D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22D9");
    },
    Error,
    "EncodingError U+22D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22DA");
    },
    Error,
    "EncodingError U+22DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22DB");
    },
    Error,
    "EncodingError U+22DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22DC");
    },
    Error,
    "EncodingError U+22DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22DD");
    },
    Error,
    "EncodingError U+22DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22DE");
    },
    Error,
    "EncodingError U+22DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22DF");
    },
    Error,
    "EncodingError U+22DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22E0");
    },
    Error,
    "EncodingError U+22E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22E1");
    },
    Error,
    "EncodingError U+22E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22E2");
    },
    Error,
    "EncodingError U+22E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22E3");
    },
    Error,
    "EncodingError U+22E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22E4");
    },
    Error,
    "EncodingError U+22E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22E5");
    },
    Error,
    "EncodingError U+22E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22E6");
    },
    Error,
    "EncodingError U+22E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22E7");
    },
    Error,
    "EncodingError U+22E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22E8");
    },
    Error,
    "EncodingError U+22E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22E9");
    },
    Error,
    "EncodingError U+22E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22EA");
    },
    Error,
    "EncodingError U+22EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22EB");
    },
    Error,
    "EncodingError U+22EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22EC");
    },
    Error,
    "EncodingError U+22EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22ED");
    },
    Error,
    "EncodingError U+22ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22EE");
    },
    Error,
    "EncodingError U+22EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22EF");
    },
    Error,
    "EncodingError U+22EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22F0");
    },
    Error,
    "EncodingError U+22F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22F1");
    },
    Error,
    "EncodingError U+22F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22F2");
    },
    Error,
    "EncodingError U+22F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22F3");
    },
    Error,
    "EncodingError U+22F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22F4");
    },
    Error,
    "EncodingError U+22F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22F5");
    },
    Error,
    "EncodingError U+22F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22F6");
    },
    Error,
    "EncodingError U+22F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22F7");
    },
    Error,
    "EncodingError U+22F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22F8");
    },
    Error,
    "EncodingError U+22F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22F9");
    },
    Error,
    "EncodingError U+22F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22FA");
    },
    Error,
    "EncodingError U+22FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22FB");
    },
    Error,
    "EncodingError U+22FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22FC");
    },
    Error,
    "EncodingError U+22FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22FD");
    },
    Error,
    "EncodingError U+22FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22FE");
    },
    Error,
    "EncodingError U+22FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u22FF");
    },
    Error,
    "EncodingError U+22FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2300");
    },
    Error,
    "EncodingError U+2300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2301");
    },
    Error,
    "EncodingError U+2301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2302");
    },
    Error,
    "EncodingError U+2302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2303");
    },
    Error,
    "EncodingError U+2303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2304");
    },
    Error,
    "EncodingError U+2304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2305");
    },
    Error,
    "EncodingError U+2305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2306");
    },
    Error,
    "EncodingError U+2306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2307");
    },
    Error,
    "EncodingError U+2307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2308");
    },
    Error,
    "EncodingError U+2308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2309");
    },
    Error,
    "EncodingError U+2309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u230A");
    },
    Error,
    "EncodingError U+230A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u230B");
    },
    Error,
    "EncodingError U+230B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u230C");
    },
    Error,
    "EncodingError U+230C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u230D");
    },
    Error,
    "EncodingError U+230D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u230E");
    },
    Error,
    "EncodingError U+230E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u230F");
    },
    Error,
    "EncodingError U+230F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2310");
    },
    Error,
    "EncodingError U+2310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2311");
    },
    Error,
    "EncodingError U+2311",
  );
  r = r && ([...ms932Encoder.encode("⌒")].join(",") === "129,220"); // U+2312
  assertThrows(
    () => {
      ms932Encoder.encode("\u2313");
    },
    Error,
    "EncodingError U+2313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2314");
    },
    Error,
    "EncodingError U+2314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2315");
    },
    Error,
    "EncodingError U+2315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2316");
    },
    Error,
    "EncodingError U+2316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2317");
    },
    Error,
    "EncodingError U+2317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2318");
    },
    Error,
    "EncodingError U+2318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2319");
    },
    Error,
    "EncodingError U+2319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u231A");
    },
    Error,
    "EncodingError U+231A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u231B");
    },
    Error,
    "EncodingError U+231B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u231C");
    },
    Error,
    "EncodingError U+231C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u231D");
    },
    Error,
    "EncodingError U+231D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u231E");
    },
    Error,
    "EncodingError U+231E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u231F");
    },
    Error,
    "EncodingError U+231F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2320");
    },
    Error,
    "EncodingError U+2320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2321");
    },
    Error,
    "EncodingError U+2321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2322");
    },
    Error,
    "EncodingError U+2322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2323");
    },
    Error,
    "EncodingError U+2323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2324");
    },
    Error,
    "EncodingError U+2324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2325");
    },
    Error,
    "EncodingError U+2325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2326");
    },
    Error,
    "EncodingError U+2326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2327");
    },
    Error,
    "EncodingError U+2327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2328");
    },
    Error,
    "EncodingError U+2328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2329");
    },
    Error,
    "EncodingError U+2329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u232A");
    },
    Error,
    "EncodingError U+232A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u232B");
    },
    Error,
    "EncodingError U+232B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u232C");
    },
    Error,
    "EncodingError U+232C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u232D");
    },
    Error,
    "EncodingError U+232D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u232E");
    },
    Error,
    "EncodingError U+232E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u232F");
    },
    Error,
    "EncodingError U+232F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2330");
    },
    Error,
    "EncodingError U+2330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2331");
    },
    Error,
    "EncodingError U+2331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2332");
    },
    Error,
    "EncodingError U+2332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2333");
    },
    Error,
    "EncodingError U+2333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2334");
    },
    Error,
    "EncodingError U+2334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2335");
    },
    Error,
    "EncodingError U+2335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2336");
    },
    Error,
    "EncodingError U+2336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2337");
    },
    Error,
    "EncodingError U+2337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2338");
    },
    Error,
    "EncodingError U+2338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2339");
    },
    Error,
    "EncodingError U+2339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u233A");
    },
    Error,
    "EncodingError U+233A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u233B");
    },
    Error,
    "EncodingError U+233B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u233C");
    },
    Error,
    "EncodingError U+233C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u233D");
    },
    Error,
    "EncodingError U+233D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u233E");
    },
    Error,
    "EncodingError U+233E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u233F");
    },
    Error,
    "EncodingError U+233F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2340");
    },
    Error,
    "EncodingError U+2340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2341");
    },
    Error,
    "EncodingError U+2341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2342");
    },
    Error,
    "EncodingError U+2342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2343");
    },
    Error,
    "EncodingError U+2343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2344");
    },
    Error,
    "EncodingError U+2344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2345");
    },
    Error,
    "EncodingError U+2345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2346");
    },
    Error,
    "EncodingError U+2346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2347");
    },
    Error,
    "EncodingError U+2347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2348");
    },
    Error,
    "EncodingError U+2348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2349");
    },
    Error,
    "EncodingError U+2349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u234A");
    },
    Error,
    "EncodingError U+234A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u234B");
    },
    Error,
    "EncodingError U+234B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u234C");
    },
    Error,
    "EncodingError U+234C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u234D");
    },
    Error,
    "EncodingError U+234D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u234E");
    },
    Error,
    "EncodingError U+234E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u234F");
    },
    Error,
    "EncodingError U+234F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2350");
    },
    Error,
    "EncodingError U+2350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2351");
    },
    Error,
    "EncodingError U+2351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2352");
    },
    Error,
    "EncodingError U+2352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2353");
    },
    Error,
    "EncodingError U+2353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2354");
    },
    Error,
    "EncodingError U+2354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2355");
    },
    Error,
    "EncodingError U+2355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2356");
    },
    Error,
    "EncodingError U+2356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2357");
    },
    Error,
    "EncodingError U+2357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2358");
    },
    Error,
    "EncodingError U+2358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2359");
    },
    Error,
    "EncodingError U+2359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u235A");
    },
    Error,
    "EncodingError U+235A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u235B");
    },
    Error,
    "EncodingError U+235B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u235C");
    },
    Error,
    "EncodingError U+235C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u235D");
    },
    Error,
    "EncodingError U+235D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u235E");
    },
    Error,
    "EncodingError U+235E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u235F");
    },
    Error,
    "EncodingError U+235F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2360");
    },
    Error,
    "EncodingError U+2360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2361");
    },
    Error,
    "EncodingError U+2361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2362");
    },
    Error,
    "EncodingError U+2362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2363");
    },
    Error,
    "EncodingError U+2363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2364");
    },
    Error,
    "EncodingError U+2364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2365");
    },
    Error,
    "EncodingError U+2365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2366");
    },
    Error,
    "EncodingError U+2366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2367");
    },
    Error,
    "EncodingError U+2367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2368");
    },
    Error,
    "EncodingError U+2368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2369");
    },
    Error,
    "EncodingError U+2369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u236A");
    },
    Error,
    "EncodingError U+236A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u236B");
    },
    Error,
    "EncodingError U+236B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u236C");
    },
    Error,
    "EncodingError U+236C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u236D");
    },
    Error,
    "EncodingError U+236D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u236E");
    },
    Error,
    "EncodingError U+236E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u236F");
    },
    Error,
    "EncodingError U+236F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2370");
    },
    Error,
    "EncodingError U+2370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2371");
    },
    Error,
    "EncodingError U+2371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2372");
    },
    Error,
    "EncodingError U+2372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2373");
    },
    Error,
    "EncodingError U+2373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2374");
    },
    Error,
    "EncodingError U+2374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2375");
    },
    Error,
    "EncodingError U+2375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2376");
    },
    Error,
    "EncodingError U+2376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2377");
    },
    Error,
    "EncodingError U+2377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2378");
    },
    Error,
    "EncodingError U+2378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2379");
    },
    Error,
    "EncodingError U+2379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u237A");
    },
    Error,
    "EncodingError U+237A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u237B");
    },
    Error,
    "EncodingError U+237B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u237C");
    },
    Error,
    "EncodingError U+237C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u237D");
    },
    Error,
    "EncodingError U+237D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u237E");
    },
    Error,
    "EncodingError U+237E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u237F");
    },
    Error,
    "EncodingError U+237F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2380");
    },
    Error,
    "EncodingError U+2380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2381");
    },
    Error,
    "EncodingError U+2381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2382");
    },
    Error,
    "EncodingError U+2382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2383");
    },
    Error,
    "EncodingError U+2383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2384");
    },
    Error,
    "EncodingError U+2384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2385");
    },
    Error,
    "EncodingError U+2385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2386");
    },
    Error,
    "EncodingError U+2386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2387");
    },
    Error,
    "EncodingError U+2387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2388");
    },
    Error,
    "EncodingError U+2388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2389");
    },
    Error,
    "EncodingError U+2389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u238A");
    },
    Error,
    "EncodingError U+238A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u238B");
    },
    Error,
    "EncodingError U+238B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u238C");
    },
    Error,
    "EncodingError U+238C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u238D");
    },
    Error,
    "EncodingError U+238D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u238E");
    },
    Error,
    "EncodingError U+238E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u238F");
    },
    Error,
    "EncodingError U+238F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2390");
    },
    Error,
    "EncodingError U+2390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2391");
    },
    Error,
    "EncodingError U+2391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2392");
    },
    Error,
    "EncodingError U+2392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2393");
    },
    Error,
    "EncodingError U+2393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2394");
    },
    Error,
    "EncodingError U+2394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2395");
    },
    Error,
    "EncodingError U+2395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2396");
    },
    Error,
    "EncodingError U+2396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2397");
    },
    Error,
    "EncodingError U+2397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2398");
    },
    Error,
    "EncodingError U+2398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2399");
    },
    Error,
    "EncodingError U+2399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u239A");
    },
    Error,
    "EncodingError U+239A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u239B");
    },
    Error,
    "EncodingError U+239B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u239C");
    },
    Error,
    "EncodingError U+239C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u239D");
    },
    Error,
    "EncodingError U+239D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u239E");
    },
    Error,
    "EncodingError U+239E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u239F");
    },
    Error,
    "EncodingError U+239F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23A0");
    },
    Error,
    "EncodingError U+23A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23A1");
    },
    Error,
    "EncodingError U+23A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23A2");
    },
    Error,
    "EncodingError U+23A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23A3");
    },
    Error,
    "EncodingError U+23A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23A4");
    },
    Error,
    "EncodingError U+23A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23A5");
    },
    Error,
    "EncodingError U+23A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23A6");
    },
    Error,
    "EncodingError U+23A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23A7");
    },
    Error,
    "EncodingError U+23A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23A8");
    },
    Error,
    "EncodingError U+23A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23A9");
    },
    Error,
    "EncodingError U+23A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23AA");
    },
    Error,
    "EncodingError U+23AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23AB");
    },
    Error,
    "EncodingError U+23AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23AC");
    },
    Error,
    "EncodingError U+23AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23AD");
    },
    Error,
    "EncodingError U+23AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23AE");
    },
    Error,
    "EncodingError U+23AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23AF");
    },
    Error,
    "EncodingError U+23AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23B0");
    },
    Error,
    "EncodingError U+23B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23B1");
    },
    Error,
    "EncodingError U+23B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23B2");
    },
    Error,
    "EncodingError U+23B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23B3");
    },
    Error,
    "EncodingError U+23B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23B4");
    },
    Error,
    "EncodingError U+23B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23B5");
    },
    Error,
    "EncodingError U+23B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23B6");
    },
    Error,
    "EncodingError U+23B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23B7");
    },
    Error,
    "EncodingError U+23B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23B8");
    },
    Error,
    "EncodingError U+23B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23B9");
    },
    Error,
    "EncodingError U+23B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23BA");
    },
    Error,
    "EncodingError U+23BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23BB");
    },
    Error,
    "EncodingError U+23BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23BC");
    },
    Error,
    "EncodingError U+23BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23BD");
    },
    Error,
    "EncodingError U+23BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23BE");
    },
    Error,
    "EncodingError U+23BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23BF");
    },
    Error,
    "EncodingError U+23BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23C0");
    },
    Error,
    "EncodingError U+23C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23C1");
    },
    Error,
    "EncodingError U+23C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23C2");
    },
    Error,
    "EncodingError U+23C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23C3");
    },
    Error,
    "EncodingError U+23C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23C4");
    },
    Error,
    "EncodingError U+23C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23C5");
    },
    Error,
    "EncodingError U+23C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23C6");
    },
    Error,
    "EncodingError U+23C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23C7");
    },
    Error,
    "EncodingError U+23C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23C8");
    },
    Error,
    "EncodingError U+23C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23C9");
    },
    Error,
    "EncodingError U+23C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23CA");
    },
    Error,
    "EncodingError U+23CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23CB");
    },
    Error,
    "EncodingError U+23CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23CC");
    },
    Error,
    "EncodingError U+23CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23CD");
    },
    Error,
    "EncodingError U+23CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23CE");
    },
    Error,
    "EncodingError U+23CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23CF");
    },
    Error,
    "EncodingError U+23CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23D0");
    },
    Error,
    "EncodingError U+23D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23D1");
    },
    Error,
    "EncodingError U+23D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23D2");
    },
    Error,
    "EncodingError U+23D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23D3");
    },
    Error,
    "EncodingError U+23D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23D4");
    },
    Error,
    "EncodingError U+23D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23D5");
    },
    Error,
    "EncodingError U+23D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23D6");
    },
    Error,
    "EncodingError U+23D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23D7");
    },
    Error,
    "EncodingError U+23D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23D8");
    },
    Error,
    "EncodingError U+23D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23D9");
    },
    Error,
    "EncodingError U+23D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23DA");
    },
    Error,
    "EncodingError U+23DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23DB");
    },
    Error,
    "EncodingError U+23DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23DC");
    },
    Error,
    "EncodingError U+23DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23DD");
    },
    Error,
    "EncodingError U+23DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23DE");
    },
    Error,
    "EncodingError U+23DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23DF");
    },
    Error,
    "EncodingError U+23DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23E0");
    },
    Error,
    "EncodingError U+23E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23E1");
    },
    Error,
    "EncodingError U+23E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23E2");
    },
    Error,
    "EncodingError U+23E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23E3");
    },
    Error,
    "EncodingError U+23E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23E4");
    },
    Error,
    "EncodingError U+23E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23E5");
    },
    Error,
    "EncodingError U+23E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23E6");
    },
    Error,
    "EncodingError U+23E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23E7");
    },
    Error,
    "EncodingError U+23E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23E8");
    },
    Error,
    "EncodingError U+23E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23E9");
    },
    Error,
    "EncodingError U+23E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23EA");
    },
    Error,
    "EncodingError U+23EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23EB");
    },
    Error,
    "EncodingError U+23EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23EC");
    },
    Error,
    "EncodingError U+23EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23ED");
    },
    Error,
    "EncodingError U+23ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23EE");
    },
    Error,
    "EncodingError U+23EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23EF");
    },
    Error,
    "EncodingError U+23EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23F0");
    },
    Error,
    "EncodingError U+23F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23F1");
    },
    Error,
    "EncodingError U+23F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23F2");
    },
    Error,
    "EncodingError U+23F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23F3");
    },
    Error,
    "EncodingError U+23F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23F4");
    },
    Error,
    "EncodingError U+23F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23F5");
    },
    Error,
    "EncodingError U+23F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23F6");
    },
    Error,
    "EncodingError U+23F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23F7");
    },
    Error,
    "EncodingError U+23F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23F8");
    },
    Error,
    "EncodingError U+23F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23F9");
    },
    Error,
    "EncodingError U+23F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23FA");
    },
    Error,
    "EncodingError U+23FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23FB");
    },
    Error,
    "EncodingError U+23FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23FC");
    },
    Error,
    "EncodingError U+23FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23FD");
    },
    Error,
    "EncodingError U+23FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23FE");
    },
    Error,
    "EncodingError U+23FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u23FF");
    },
    Error,
    "EncodingError U+23FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2400");
    },
    Error,
    "EncodingError U+2400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2401");
    },
    Error,
    "EncodingError U+2401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2402");
    },
    Error,
    "EncodingError U+2402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2403");
    },
    Error,
    "EncodingError U+2403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2404");
    },
    Error,
    "EncodingError U+2404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2405");
    },
    Error,
    "EncodingError U+2405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2406");
    },
    Error,
    "EncodingError U+2406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2407");
    },
    Error,
    "EncodingError U+2407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2408");
    },
    Error,
    "EncodingError U+2408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2409");
    },
    Error,
    "EncodingError U+2409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u240A");
    },
    Error,
    "EncodingError U+240A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u240B");
    },
    Error,
    "EncodingError U+240B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u240C");
    },
    Error,
    "EncodingError U+240C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u240D");
    },
    Error,
    "EncodingError U+240D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u240E");
    },
    Error,
    "EncodingError U+240E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u240F");
    },
    Error,
    "EncodingError U+240F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2410");
    },
    Error,
    "EncodingError U+2410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2411");
    },
    Error,
    "EncodingError U+2411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2412");
    },
    Error,
    "EncodingError U+2412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2413");
    },
    Error,
    "EncodingError U+2413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2414");
    },
    Error,
    "EncodingError U+2414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2415");
    },
    Error,
    "EncodingError U+2415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2416");
    },
    Error,
    "EncodingError U+2416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2417");
    },
    Error,
    "EncodingError U+2417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2418");
    },
    Error,
    "EncodingError U+2418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2419");
    },
    Error,
    "EncodingError U+2419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u241A");
    },
    Error,
    "EncodingError U+241A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u241B");
    },
    Error,
    "EncodingError U+241B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u241C");
    },
    Error,
    "EncodingError U+241C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u241D");
    },
    Error,
    "EncodingError U+241D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u241E");
    },
    Error,
    "EncodingError U+241E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u241F");
    },
    Error,
    "EncodingError U+241F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2420");
    },
    Error,
    "EncodingError U+2420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2421");
    },
    Error,
    "EncodingError U+2421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2422");
    },
    Error,
    "EncodingError U+2422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2423");
    },
    Error,
    "EncodingError U+2423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2424");
    },
    Error,
    "EncodingError U+2424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2425");
    },
    Error,
    "EncodingError U+2425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2426");
    },
    Error,
    "EncodingError U+2426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2427");
    },
    Error,
    "EncodingError U+2427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2428");
    },
    Error,
    "EncodingError U+2428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2429");
    },
    Error,
    "EncodingError U+2429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u242A");
    },
    Error,
    "EncodingError U+242A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u242B");
    },
    Error,
    "EncodingError U+242B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u242C");
    },
    Error,
    "EncodingError U+242C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u242D");
    },
    Error,
    "EncodingError U+242D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u242E");
    },
    Error,
    "EncodingError U+242E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u242F");
    },
    Error,
    "EncodingError U+242F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2430");
    },
    Error,
    "EncodingError U+2430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2431");
    },
    Error,
    "EncodingError U+2431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2432");
    },
    Error,
    "EncodingError U+2432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2433");
    },
    Error,
    "EncodingError U+2433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2434");
    },
    Error,
    "EncodingError U+2434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2435");
    },
    Error,
    "EncodingError U+2435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2436");
    },
    Error,
    "EncodingError U+2436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2437");
    },
    Error,
    "EncodingError U+2437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2438");
    },
    Error,
    "EncodingError U+2438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2439");
    },
    Error,
    "EncodingError U+2439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u243A");
    },
    Error,
    "EncodingError U+243A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u243B");
    },
    Error,
    "EncodingError U+243B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u243C");
    },
    Error,
    "EncodingError U+243C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u243D");
    },
    Error,
    "EncodingError U+243D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u243E");
    },
    Error,
    "EncodingError U+243E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u243F");
    },
    Error,
    "EncodingError U+243F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2440");
    },
    Error,
    "EncodingError U+2440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2441");
    },
    Error,
    "EncodingError U+2441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2442");
    },
    Error,
    "EncodingError U+2442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2443");
    },
    Error,
    "EncodingError U+2443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2444");
    },
    Error,
    "EncodingError U+2444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2445");
    },
    Error,
    "EncodingError U+2445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2446");
    },
    Error,
    "EncodingError U+2446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2447");
    },
    Error,
    "EncodingError U+2447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2448");
    },
    Error,
    "EncodingError U+2448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2449");
    },
    Error,
    "EncodingError U+2449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u244A");
    },
    Error,
    "EncodingError U+244A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u244B");
    },
    Error,
    "EncodingError U+244B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u244C");
    },
    Error,
    "EncodingError U+244C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u244D");
    },
    Error,
    "EncodingError U+244D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u244E");
    },
    Error,
    "EncodingError U+244E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u244F");
    },
    Error,
    "EncodingError U+244F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2450");
    },
    Error,
    "EncodingError U+2450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2451");
    },
    Error,
    "EncodingError U+2451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2452");
    },
    Error,
    "EncodingError U+2452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2453");
    },
    Error,
    "EncodingError U+2453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2454");
    },
    Error,
    "EncodingError U+2454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2455");
    },
    Error,
    "EncodingError U+2455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2456");
    },
    Error,
    "EncodingError U+2456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2457");
    },
    Error,
    "EncodingError U+2457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2458");
    },
    Error,
    "EncodingError U+2458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2459");
    },
    Error,
    "EncodingError U+2459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u245A");
    },
    Error,
    "EncodingError U+245A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u245B");
    },
    Error,
    "EncodingError U+245B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u245C");
    },
    Error,
    "EncodingError U+245C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u245D");
    },
    Error,
    "EncodingError U+245D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u245E");
    },
    Error,
    "EncodingError U+245E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u245F");
    },
    Error,
    "EncodingError U+245F",
  );
  r = r &&
    ([...ms932Encoder.encode("①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳")].join(",") ===
      "135,64,135,65,135,66,135,67,135,68,135,69,135,70,135,71,135,72,135,73,135,74,135,75,135,76,135,77,135,78,135,79,135,80,135,81,135,82,135,83"); // U+2460
  assertThrows(
    () => {
      ms932Encoder.encode("\u2474");
    },
    Error,
    "EncodingError U+2474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2475");
    },
    Error,
    "EncodingError U+2475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2476");
    },
    Error,
    "EncodingError U+2476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2477");
    },
    Error,
    "EncodingError U+2477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2478");
    },
    Error,
    "EncodingError U+2478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2479");
    },
    Error,
    "EncodingError U+2479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u247A");
    },
    Error,
    "EncodingError U+247A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u247B");
    },
    Error,
    "EncodingError U+247B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u247C");
    },
    Error,
    "EncodingError U+247C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u247D");
    },
    Error,
    "EncodingError U+247D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u247E");
    },
    Error,
    "EncodingError U+247E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u247F");
    },
    Error,
    "EncodingError U+247F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2480");
    },
    Error,
    "EncodingError U+2480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2481");
    },
    Error,
    "EncodingError U+2481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2482");
    },
    Error,
    "EncodingError U+2482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2483");
    },
    Error,
    "EncodingError U+2483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2484");
    },
    Error,
    "EncodingError U+2484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2485");
    },
    Error,
    "EncodingError U+2485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2486");
    },
    Error,
    "EncodingError U+2486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2487");
    },
    Error,
    "EncodingError U+2487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2488");
    },
    Error,
    "EncodingError U+2488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2489");
    },
    Error,
    "EncodingError U+2489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u248A");
    },
    Error,
    "EncodingError U+248A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u248B");
    },
    Error,
    "EncodingError U+248B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u248C");
    },
    Error,
    "EncodingError U+248C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u248D");
    },
    Error,
    "EncodingError U+248D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u248E");
    },
    Error,
    "EncodingError U+248E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u248F");
    },
    Error,
    "EncodingError U+248F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2490");
    },
    Error,
    "EncodingError U+2490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2491");
    },
    Error,
    "EncodingError U+2491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2492");
    },
    Error,
    "EncodingError U+2492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2493");
    },
    Error,
    "EncodingError U+2493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2494");
    },
    Error,
    "EncodingError U+2494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2495");
    },
    Error,
    "EncodingError U+2495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2496");
    },
    Error,
    "EncodingError U+2496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2497");
    },
    Error,
    "EncodingError U+2497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2498");
    },
    Error,
    "EncodingError U+2498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2499");
    },
    Error,
    "EncodingError U+2499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u249A");
    },
    Error,
    "EncodingError U+249A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u249B");
    },
    Error,
    "EncodingError U+249B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u249C");
    },
    Error,
    "EncodingError U+249C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u249D");
    },
    Error,
    "EncodingError U+249D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u249E");
    },
    Error,
    "EncodingError U+249E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u249F");
    },
    Error,
    "EncodingError U+249F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24A0");
    },
    Error,
    "EncodingError U+24A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24A1");
    },
    Error,
    "EncodingError U+24A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24A2");
    },
    Error,
    "EncodingError U+24A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24A3");
    },
    Error,
    "EncodingError U+24A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24A4");
    },
    Error,
    "EncodingError U+24A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24A5");
    },
    Error,
    "EncodingError U+24A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24A6");
    },
    Error,
    "EncodingError U+24A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24A7");
    },
    Error,
    "EncodingError U+24A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24A8");
    },
    Error,
    "EncodingError U+24A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24A9");
    },
    Error,
    "EncodingError U+24A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24AA");
    },
    Error,
    "EncodingError U+24AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24AB");
    },
    Error,
    "EncodingError U+24AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24AC");
    },
    Error,
    "EncodingError U+24AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24AD");
    },
    Error,
    "EncodingError U+24AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24AE");
    },
    Error,
    "EncodingError U+24AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24AF");
    },
    Error,
    "EncodingError U+24AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24B0");
    },
    Error,
    "EncodingError U+24B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24B1");
    },
    Error,
    "EncodingError U+24B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24B2");
    },
    Error,
    "EncodingError U+24B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24B3");
    },
    Error,
    "EncodingError U+24B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24B4");
    },
    Error,
    "EncodingError U+24B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24B5");
    },
    Error,
    "EncodingError U+24B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24B6");
    },
    Error,
    "EncodingError U+24B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24B7");
    },
    Error,
    "EncodingError U+24B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24B8");
    },
    Error,
    "EncodingError U+24B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24B9");
    },
    Error,
    "EncodingError U+24B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24BA");
    },
    Error,
    "EncodingError U+24BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24BB");
    },
    Error,
    "EncodingError U+24BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24BC");
    },
    Error,
    "EncodingError U+24BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24BD");
    },
    Error,
    "EncodingError U+24BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24BE");
    },
    Error,
    "EncodingError U+24BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24BF");
    },
    Error,
    "EncodingError U+24BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24C0");
    },
    Error,
    "EncodingError U+24C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24C1");
    },
    Error,
    "EncodingError U+24C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24C2");
    },
    Error,
    "EncodingError U+24C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24C3");
    },
    Error,
    "EncodingError U+24C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24C4");
    },
    Error,
    "EncodingError U+24C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24C5");
    },
    Error,
    "EncodingError U+24C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24C6");
    },
    Error,
    "EncodingError U+24C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24C7");
    },
    Error,
    "EncodingError U+24C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24C8");
    },
    Error,
    "EncodingError U+24C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24C9");
    },
    Error,
    "EncodingError U+24C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24CA");
    },
    Error,
    "EncodingError U+24CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24CB");
    },
    Error,
    "EncodingError U+24CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24CC");
    },
    Error,
    "EncodingError U+24CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24CD");
    },
    Error,
    "EncodingError U+24CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24CE");
    },
    Error,
    "EncodingError U+24CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24CF");
    },
    Error,
    "EncodingError U+24CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24D0");
    },
    Error,
    "EncodingError U+24D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24D1");
    },
    Error,
    "EncodingError U+24D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24D2");
    },
    Error,
    "EncodingError U+24D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24D3");
    },
    Error,
    "EncodingError U+24D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24D4");
    },
    Error,
    "EncodingError U+24D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24D5");
    },
    Error,
    "EncodingError U+24D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24D6");
    },
    Error,
    "EncodingError U+24D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24D7");
    },
    Error,
    "EncodingError U+24D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24D8");
    },
    Error,
    "EncodingError U+24D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24D9");
    },
    Error,
    "EncodingError U+24D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24DA");
    },
    Error,
    "EncodingError U+24DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24DB");
    },
    Error,
    "EncodingError U+24DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24DC");
    },
    Error,
    "EncodingError U+24DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24DD");
    },
    Error,
    "EncodingError U+24DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24DE");
    },
    Error,
    "EncodingError U+24DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24DF");
    },
    Error,
    "EncodingError U+24DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24E0");
    },
    Error,
    "EncodingError U+24E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24E1");
    },
    Error,
    "EncodingError U+24E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24E2");
    },
    Error,
    "EncodingError U+24E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24E3");
    },
    Error,
    "EncodingError U+24E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24E4");
    },
    Error,
    "EncodingError U+24E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24E5");
    },
    Error,
    "EncodingError U+24E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24E6");
    },
    Error,
    "EncodingError U+24E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24E7");
    },
    Error,
    "EncodingError U+24E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24E8");
    },
    Error,
    "EncodingError U+24E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24E9");
    },
    Error,
    "EncodingError U+24E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24EA");
    },
    Error,
    "EncodingError U+24EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24EB");
    },
    Error,
    "EncodingError U+24EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24EC");
    },
    Error,
    "EncodingError U+24EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24ED");
    },
    Error,
    "EncodingError U+24ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24EE");
    },
    Error,
    "EncodingError U+24EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24EF");
    },
    Error,
    "EncodingError U+24EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24F0");
    },
    Error,
    "EncodingError U+24F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24F1");
    },
    Error,
    "EncodingError U+24F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24F2");
    },
    Error,
    "EncodingError U+24F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24F3");
    },
    Error,
    "EncodingError U+24F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24F4");
    },
    Error,
    "EncodingError U+24F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24F5");
    },
    Error,
    "EncodingError U+24F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24F6");
    },
    Error,
    "EncodingError U+24F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24F7");
    },
    Error,
    "EncodingError U+24F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24F8");
    },
    Error,
    "EncodingError U+24F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24F9");
    },
    Error,
    "EncodingError U+24F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24FA");
    },
    Error,
    "EncodingError U+24FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24FB");
    },
    Error,
    "EncodingError U+24FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24FC");
    },
    Error,
    "EncodingError U+24FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24FD");
    },
    Error,
    "EncodingError U+24FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24FE");
    },
    Error,
    "EncodingError U+24FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u24FF");
    },
    Error,
    "EncodingError U+24FF",
  );
  r = r &&
    ([...ms932Encoder.encode("─━│┃")].join(",") ===
      "132,159,132,170,132,160,132,171"); // U+2500
  assertThrows(
    () => {
      ms932Encoder.encode("\u2504");
    },
    Error,
    "EncodingError U+2504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2505");
    },
    Error,
    "EncodingError U+2505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2506");
    },
    Error,
    "EncodingError U+2506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2507");
    },
    Error,
    "EncodingError U+2507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2508");
    },
    Error,
    "EncodingError U+2508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2509");
    },
    Error,
    "EncodingError U+2509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u250A");
    },
    Error,
    "EncodingError U+250A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u250B");
    },
    Error,
    "EncodingError U+250B",
  );
  r = r && ([...ms932Encoder.encode("┌")].join(",") === "132,161"); // U+250C
  assertThrows(
    () => {
      ms932Encoder.encode("\u250D");
    },
    Error,
    "EncodingError U+250D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u250E");
    },
    Error,
    "EncodingError U+250E",
  );
  r = r && ([...ms932Encoder.encode("┏┐")].join(",") === "132,172,132,162"); // U+250F
  assertThrows(
    () => {
      ms932Encoder.encode("\u2511");
    },
    Error,
    "EncodingError U+2511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2512");
    },
    Error,
    "EncodingError U+2512",
  );
  r = r && ([...ms932Encoder.encode("┓└")].join(",") === "132,173,132,164"); // U+2513
  assertThrows(
    () => {
      ms932Encoder.encode("\u2515");
    },
    Error,
    "EncodingError U+2515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2516");
    },
    Error,
    "EncodingError U+2516",
  );
  r = r && ([...ms932Encoder.encode("┗┘")].join(",") === "132,175,132,163"); // U+2517
  assertThrows(
    () => {
      ms932Encoder.encode("\u2519");
    },
    Error,
    "EncodingError U+2519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u251A");
    },
    Error,
    "EncodingError U+251A",
  );
  r = r &&
    ([...ms932Encoder.encode("┛├┝")].join(",") === "132,174,132,165,132,186"); // U+251B
  assertThrows(
    () => {
      ms932Encoder.encode("\u251E");
    },
    Error,
    "EncodingError U+251E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u251F");
    },
    Error,
    "EncodingError U+251F",
  );
  r = r && ([...ms932Encoder.encode("┠")].join(",") === "132,181"); // U+2520
  assertThrows(
    () => {
      ms932Encoder.encode("\u2521");
    },
    Error,
    "EncodingError U+2521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2522");
    },
    Error,
    "EncodingError U+2522",
  );
  r = r &&
    ([...ms932Encoder.encode("┣┤┥")].join(",") === "132,176,132,167,132,188"); // U+2523
  assertThrows(
    () => {
      ms932Encoder.encode("\u2526");
    },
    Error,
    "EncodingError U+2526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2527");
    },
    Error,
    "EncodingError U+2527",
  );
  r = r && ([...ms932Encoder.encode("┨")].join(",") === "132,183"); // U+2528
  assertThrows(
    () => {
      ms932Encoder.encode("\u2529");
    },
    Error,
    "EncodingError U+2529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u252A");
    },
    Error,
    "EncodingError U+252A",
  );
  r = r && ([...ms932Encoder.encode("┫┬")].join(",") === "132,178,132,166"); // U+252B
  assertThrows(
    () => {
      ms932Encoder.encode("\u252D");
    },
    Error,
    "EncodingError U+252D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u252E");
    },
    Error,
    "EncodingError U+252E",
  );
  r = r && ([...ms932Encoder.encode("┯┰")].join(",") === "132,182,132,187"); // U+252F
  assertThrows(
    () => {
      ms932Encoder.encode("\u2531");
    },
    Error,
    "EncodingError U+2531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2532");
    },
    Error,
    "EncodingError U+2532",
  );
  r = r && ([...ms932Encoder.encode("┳┴")].join(",") === "132,177,132,168"); // U+2533
  assertThrows(
    () => {
      ms932Encoder.encode("\u2535");
    },
    Error,
    "EncodingError U+2535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2536");
    },
    Error,
    "EncodingError U+2536",
  );
  r = r && ([...ms932Encoder.encode("┷┸")].join(",") === "132,184,132,189"); // U+2537
  assertThrows(
    () => {
      ms932Encoder.encode("\u2539");
    },
    Error,
    "EncodingError U+2539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u253A");
    },
    Error,
    "EncodingError U+253A",
  );
  r = r && ([...ms932Encoder.encode("┻┼")].join(",") === "132,179,132,169"); // U+253B
  assertThrows(
    () => {
      ms932Encoder.encode("\u253D");
    },
    Error,
    "EncodingError U+253D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u253E");
    },
    Error,
    "EncodingError U+253E",
  );
  r = r && ([...ms932Encoder.encode("┿")].join(",") === "132,185"); // U+253F
  assertThrows(
    () => {
      ms932Encoder.encode("\u2540");
    },
    Error,
    "EncodingError U+2540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2541");
    },
    Error,
    "EncodingError U+2541",
  );
  r = r && ([...ms932Encoder.encode("╂")].join(",") === "132,190"); // U+2542
  assertThrows(
    () => {
      ms932Encoder.encode("\u2543");
    },
    Error,
    "EncodingError U+2543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2544");
    },
    Error,
    "EncodingError U+2544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2545");
    },
    Error,
    "EncodingError U+2545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2546");
    },
    Error,
    "EncodingError U+2546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2547");
    },
    Error,
    "EncodingError U+2547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2548");
    },
    Error,
    "EncodingError U+2548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2549");
    },
    Error,
    "EncodingError U+2549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u254A");
    },
    Error,
    "EncodingError U+254A",
  );
  r = r && ([...ms932Encoder.encode("╋")].join(",") === "132,180"); // U+254B
  assertThrows(
    () => {
      ms932Encoder.encode("\u254C");
    },
    Error,
    "EncodingError U+254C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u254D");
    },
    Error,
    "EncodingError U+254D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u254E");
    },
    Error,
    "EncodingError U+254E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u254F");
    },
    Error,
    "EncodingError U+254F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2550");
    },
    Error,
    "EncodingError U+2550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2551");
    },
    Error,
    "EncodingError U+2551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2552");
    },
    Error,
    "EncodingError U+2552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2553");
    },
    Error,
    "EncodingError U+2553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2554");
    },
    Error,
    "EncodingError U+2554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2555");
    },
    Error,
    "EncodingError U+2555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2556");
    },
    Error,
    "EncodingError U+2556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2557");
    },
    Error,
    "EncodingError U+2557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2558");
    },
    Error,
    "EncodingError U+2558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2559");
    },
    Error,
    "EncodingError U+2559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u255A");
    },
    Error,
    "EncodingError U+255A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u255B");
    },
    Error,
    "EncodingError U+255B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u255C");
    },
    Error,
    "EncodingError U+255C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u255D");
    },
    Error,
    "EncodingError U+255D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u255E");
    },
    Error,
    "EncodingError U+255E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u255F");
    },
    Error,
    "EncodingError U+255F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2560");
    },
    Error,
    "EncodingError U+2560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2561");
    },
    Error,
    "EncodingError U+2561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2562");
    },
    Error,
    "EncodingError U+2562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2563");
    },
    Error,
    "EncodingError U+2563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2564");
    },
    Error,
    "EncodingError U+2564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2565");
    },
    Error,
    "EncodingError U+2565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2566");
    },
    Error,
    "EncodingError U+2566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2567");
    },
    Error,
    "EncodingError U+2567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2568");
    },
    Error,
    "EncodingError U+2568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2569");
    },
    Error,
    "EncodingError U+2569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u256A");
    },
    Error,
    "EncodingError U+256A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u256B");
    },
    Error,
    "EncodingError U+256B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u256C");
    },
    Error,
    "EncodingError U+256C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u256D");
    },
    Error,
    "EncodingError U+256D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u256E");
    },
    Error,
    "EncodingError U+256E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u256F");
    },
    Error,
    "EncodingError U+256F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2570");
    },
    Error,
    "EncodingError U+2570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2571");
    },
    Error,
    "EncodingError U+2571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2572");
    },
    Error,
    "EncodingError U+2572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2573");
    },
    Error,
    "EncodingError U+2573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2574");
    },
    Error,
    "EncodingError U+2574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2575");
    },
    Error,
    "EncodingError U+2575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2576");
    },
    Error,
    "EncodingError U+2576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2577");
    },
    Error,
    "EncodingError U+2577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2578");
    },
    Error,
    "EncodingError U+2578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2579");
    },
    Error,
    "EncodingError U+2579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u257A");
    },
    Error,
    "EncodingError U+257A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u257B");
    },
    Error,
    "EncodingError U+257B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u257C");
    },
    Error,
    "EncodingError U+257C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u257D");
    },
    Error,
    "EncodingError U+257D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u257E");
    },
    Error,
    "EncodingError U+257E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u257F");
    },
    Error,
    "EncodingError U+257F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2580");
    },
    Error,
    "EncodingError U+2580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2581");
    },
    Error,
    "EncodingError U+2581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2582");
    },
    Error,
    "EncodingError U+2582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2583");
    },
    Error,
    "EncodingError U+2583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2584");
    },
    Error,
    "EncodingError U+2584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2585");
    },
    Error,
    "EncodingError U+2585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2586");
    },
    Error,
    "EncodingError U+2586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2587");
    },
    Error,
    "EncodingError U+2587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2588");
    },
    Error,
    "EncodingError U+2588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2589");
    },
    Error,
    "EncodingError U+2589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u258A");
    },
    Error,
    "EncodingError U+258A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u258B");
    },
    Error,
    "EncodingError U+258B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u258C");
    },
    Error,
    "EncodingError U+258C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u258D");
    },
    Error,
    "EncodingError U+258D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u258E");
    },
    Error,
    "EncodingError U+258E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u258F");
    },
    Error,
    "EncodingError U+258F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2590");
    },
    Error,
    "EncodingError U+2590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2591");
    },
    Error,
    "EncodingError U+2591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2592");
    },
    Error,
    "EncodingError U+2592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2593");
    },
    Error,
    "EncodingError U+2593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2594");
    },
    Error,
    "EncodingError U+2594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2595");
    },
    Error,
    "EncodingError U+2595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2596");
    },
    Error,
    "EncodingError U+2596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2597");
    },
    Error,
    "EncodingError U+2597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2598");
    },
    Error,
    "EncodingError U+2598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2599");
    },
    Error,
    "EncodingError U+2599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u259A");
    },
    Error,
    "EncodingError U+259A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u259B");
    },
    Error,
    "EncodingError U+259B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u259C");
    },
    Error,
    "EncodingError U+259C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u259D");
    },
    Error,
    "EncodingError U+259D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u259E");
    },
    Error,
    "EncodingError U+259E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u259F");
    },
    Error,
    "EncodingError U+259F",
  );
  r = r && ([...ms932Encoder.encode("■□")].join(",") === "129,161,129,160"); // U+25A0
  assertThrows(
    () => {
      ms932Encoder.encode("\u25A2");
    },
    Error,
    "EncodingError U+25A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25A3");
    },
    Error,
    "EncodingError U+25A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25A4");
    },
    Error,
    "EncodingError U+25A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25A5");
    },
    Error,
    "EncodingError U+25A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25A6");
    },
    Error,
    "EncodingError U+25A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25A7");
    },
    Error,
    "EncodingError U+25A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25A8");
    },
    Error,
    "EncodingError U+25A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25A9");
    },
    Error,
    "EncodingError U+25A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25AA");
    },
    Error,
    "EncodingError U+25AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25AB");
    },
    Error,
    "EncodingError U+25AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25AC");
    },
    Error,
    "EncodingError U+25AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25AD");
    },
    Error,
    "EncodingError U+25AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25AE");
    },
    Error,
    "EncodingError U+25AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25AF");
    },
    Error,
    "EncodingError U+25AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25B0");
    },
    Error,
    "EncodingError U+25B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25B1");
    },
    Error,
    "EncodingError U+25B1",
  );
  r = r && ([...ms932Encoder.encode("▲△")].join(",") === "129,163,129,162"); // U+25B2
  assertThrows(
    () => {
      ms932Encoder.encode("\u25B4");
    },
    Error,
    "EncodingError U+25B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25B5");
    },
    Error,
    "EncodingError U+25B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25B6");
    },
    Error,
    "EncodingError U+25B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25B7");
    },
    Error,
    "EncodingError U+25B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25B8");
    },
    Error,
    "EncodingError U+25B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25B9");
    },
    Error,
    "EncodingError U+25B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25BA");
    },
    Error,
    "EncodingError U+25BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25BB");
    },
    Error,
    "EncodingError U+25BB",
  );
  r = r && ([...ms932Encoder.encode("▼▽")].join(",") === "129,165,129,164"); // U+25BC
  assertThrows(
    () => {
      ms932Encoder.encode("\u25BE");
    },
    Error,
    "EncodingError U+25BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25BF");
    },
    Error,
    "EncodingError U+25BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25C0");
    },
    Error,
    "EncodingError U+25C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25C1");
    },
    Error,
    "EncodingError U+25C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25C2");
    },
    Error,
    "EncodingError U+25C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25C3");
    },
    Error,
    "EncodingError U+25C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25C4");
    },
    Error,
    "EncodingError U+25C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25C5");
    },
    Error,
    "EncodingError U+25C5",
  );
  r = r && ([...ms932Encoder.encode("◆◇")].join(",") === "129,159,129,158"); // U+25C6
  assertThrows(
    () => {
      ms932Encoder.encode("\u25C8");
    },
    Error,
    "EncodingError U+25C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25C9");
    },
    Error,
    "EncodingError U+25C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25CA");
    },
    Error,
    "EncodingError U+25CA",
  );
  r = r && ([...ms932Encoder.encode("○")].join(",") === "129,155"); // U+25CB
  assertThrows(
    () => {
      ms932Encoder.encode("\u25CC");
    },
    Error,
    "EncodingError U+25CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25CD");
    },
    Error,
    "EncodingError U+25CD",
  );
  r = r && ([...ms932Encoder.encode("◎●")].join(",") === "129,157,129,156"); // U+25CE
  assertThrows(
    () => {
      ms932Encoder.encode("\u25D0");
    },
    Error,
    "EncodingError U+25D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25D1");
    },
    Error,
    "EncodingError U+25D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25D2");
    },
    Error,
    "EncodingError U+25D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25D3");
    },
    Error,
    "EncodingError U+25D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25D4");
    },
    Error,
    "EncodingError U+25D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25D5");
    },
    Error,
    "EncodingError U+25D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25D6");
    },
    Error,
    "EncodingError U+25D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25D7");
    },
    Error,
    "EncodingError U+25D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25D8");
    },
    Error,
    "EncodingError U+25D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25D9");
    },
    Error,
    "EncodingError U+25D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25DA");
    },
    Error,
    "EncodingError U+25DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25DB");
    },
    Error,
    "EncodingError U+25DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25DC");
    },
    Error,
    "EncodingError U+25DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25DD");
    },
    Error,
    "EncodingError U+25DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25DE");
    },
    Error,
    "EncodingError U+25DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25DF");
    },
    Error,
    "EncodingError U+25DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25E0");
    },
    Error,
    "EncodingError U+25E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25E1");
    },
    Error,
    "EncodingError U+25E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25E2");
    },
    Error,
    "EncodingError U+25E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25E3");
    },
    Error,
    "EncodingError U+25E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25E4");
    },
    Error,
    "EncodingError U+25E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25E5");
    },
    Error,
    "EncodingError U+25E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25E6");
    },
    Error,
    "EncodingError U+25E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25E7");
    },
    Error,
    "EncodingError U+25E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25E8");
    },
    Error,
    "EncodingError U+25E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25E9");
    },
    Error,
    "EncodingError U+25E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25EA");
    },
    Error,
    "EncodingError U+25EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25EB");
    },
    Error,
    "EncodingError U+25EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25EC");
    },
    Error,
    "EncodingError U+25EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25ED");
    },
    Error,
    "EncodingError U+25ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25EE");
    },
    Error,
    "EncodingError U+25EE",
  );
  r = r && ([...ms932Encoder.encode("◯")].join(",") === "129,252"); // U+25EF
  assertThrows(
    () => {
      ms932Encoder.encode("\u25F0");
    },
    Error,
    "EncodingError U+25F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25F1");
    },
    Error,
    "EncodingError U+25F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25F2");
    },
    Error,
    "EncodingError U+25F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25F3");
    },
    Error,
    "EncodingError U+25F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25F4");
    },
    Error,
    "EncodingError U+25F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25F5");
    },
    Error,
    "EncodingError U+25F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25F6");
    },
    Error,
    "EncodingError U+25F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25F7");
    },
    Error,
    "EncodingError U+25F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25F8");
    },
    Error,
    "EncodingError U+25F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25F9");
    },
    Error,
    "EncodingError U+25F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25FA");
    },
    Error,
    "EncodingError U+25FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25FB");
    },
    Error,
    "EncodingError U+25FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25FC");
    },
    Error,
    "EncodingError U+25FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25FD");
    },
    Error,
    "EncodingError U+25FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25FE");
    },
    Error,
    "EncodingError U+25FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u25FF");
    },
    Error,
    "EncodingError U+25FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2600");
    },
    Error,
    "EncodingError U+2600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2601");
    },
    Error,
    "EncodingError U+2601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2602");
    },
    Error,
    "EncodingError U+2602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2603");
    },
    Error,
    "EncodingError U+2603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2604");
    },
    Error,
    "EncodingError U+2604",
  );
  r = r && ([...ms932Encoder.encode("★☆")].join(",") === "129,154,129,153"); // U+2605
  assertThrows(
    () => {
      ms932Encoder.encode("\u2607");
    },
    Error,
    "EncodingError U+2607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2608");
    },
    Error,
    "EncodingError U+2608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2609");
    },
    Error,
    "EncodingError U+2609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u260A");
    },
    Error,
    "EncodingError U+260A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u260B");
    },
    Error,
    "EncodingError U+260B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u260C");
    },
    Error,
    "EncodingError U+260C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u260D");
    },
    Error,
    "EncodingError U+260D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u260E");
    },
    Error,
    "EncodingError U+260E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u260F");
    },
    Error,
    "EncodingError U+260F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2610");
    },
    Error,
    "EncodingError U+2610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2611");
    },
    Error,
    "EncodingError U+2611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2612");
    },
    Error,
    "EncodingError U+2612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2613");
    },
    Error,
    "EncodingError U+2613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2614");
    },
    Error,
    "EncodingError U+2614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2615");
    },
    Error,
    "EncodingError U+2615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2616");
    },
    Error,
    "EncodingError U+2616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2617");
    },
    Error,
    "EncodingError U+2617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2618");
    },
    Error,
    "EncodingError U+2618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2619");
    },
    Error,
    "EncodingError U+2619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u261A");
    },
    Error,
    "EncodingError U+261A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u261B");
    },
    Error,
    "EncodingError U+261B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u261C");
    },
    Error,
    "EncodingError U+261C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u261D");
    },
    Error,
    "EncodingError U+261D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u261E");
    },
    Error,
    "EncodingError U+261E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u261F");
    },
    Error,
    "EncodingError U+261F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2620");
    },
    Error,
    "EncodingError U+2620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2621");
    },
    Error,
    "EncodingError U+2621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2622");
    },
    Error,
    "EncodingError U+2622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2623");
    },
    Error,
    "EncodingError U+2623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2624");
    },
    Error,
    "EncodingError U+2624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2625");
    },
    Error,
    "EncodingError U+2625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2626");
    },
    Error,
    "EncodingError U+2626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2627");
    },
    Error,
    "EncodingError U+2627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2628");
    },
    Error,
    "EncodingError U+2628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2629");
    },
    Error,
    "EncodingError U+2629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u262A");
    },
    Error,
    "EncodingError U+262A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u262B");
    },
    Error,
    "EncodingError U+262B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u262C");
    },
    Error,
    "EncodingError U+262C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u262D");
    },
    Error,
    "EncodingError U+262D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u262E");
    },
    Error,
    "EncodingError U+262E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u262F");
    },
    Error,
    "EncodingError U+262F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2630");
    },
    Error,
    "EncodingError U+2630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2631");
    },
    Error,
    "EncodingError U+2631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2632");
    },
    Error,
    "EncodingError U+2632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2633");
    },
    Error,
    "EncodingError U+2633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2634");
    },
    Error,
    "EncodingError U+2634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2635");
    },
    Error,
    "EncodingError U+2635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2636");
    },
    Error,
    "EncodingError U+2636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2637");
    },
    Error,
    "EncodingError U+2637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2638");
    },
    Error,
    "EncodingError U+2638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2639");
    },
    Error,
    "EncodingError U+2639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u263A");
    },
    Error,
    "EncodingError U+263A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u263B");
    },
    Error,
    "EncodingError U+263B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u263C");
    },
    Error,
    "EncodingError U+263C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u263D");
    },
    Error,
    "EncodingError U+263D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u263E");
    },
    Error,
    "EncodingError U+263E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u263F");
    },
    Error,
    "EncodingError U+263F",
  );
  r = r && ([...ms932Encoder.encode("♀")].join(",") === "129,138"); // U+2640
  assertThrows(
    () => {
      ms932Encoder.encode("\u2641");
    },
    Error,
    "EncodingError U+2641",
  );
  r = r && ([...ms932Encoder.encode("♂")].join(",") === "129,137"); // U+2642
  assertThrows(
    () => {
      ms932Encoder.encode("\u2643");
    },
    Error,
    "EncodingError U+2643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2644");
    },
    Error,
    "EncodingError U+2644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2645");
    },
    Error,
    "EncodingError U+2645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2646");
    },
    Error,
    "EncodingError U+2646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2647");
    },
    Error,
    "EncodingError U+2647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2648");
    },
    Error,
    "EncodingError U+2648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2649");
    },
    Error,
    "EncodingError U+2649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u264A");
    },
    Error,
    "EncodingError U+264A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u264B");
    },
    Error,
    "EncodingError U+264B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u264C");
    },
    Error,
    "EncodingError U+264C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u264D");
    },
    Error,
    "EncodingError U+264D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u264E");
    },
    Error,
    "EncodingError U+264E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u264F");
    },
    Error,
    "EncodingError U+264F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2650");
    },
    Error,
    "EncodingError U+2650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2651");
    },
    Error,
    "EncodingError U+2651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2652");
    },
    Error,
    "EncodingError U+2652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2653");
    },
    Error,
    "EncodingError U+2653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2654");
    },
    Error,
    "EncodingError U+2654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2655");
    },
    Error,
    "EncodingError U+2655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2656");
    },
    Error,
    "EncodingError U+2656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2657");
    },
    Error,
    "EncodingError U+2657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2658");
    },
    Error,
    "EncodingError U+2658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2659");
    },
    Error,
    "EncodingError U+2659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u265A");
    },
    Error,
    "EncodingError U+265A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u265B");
    },
    Error,
    "EncodingError U+265B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u265C");
    },
    Error,
    "EncodingError U+265C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u265D");
    },
    Error,
    "EncodingError U+265D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u265E");
    },
    Error,
    "EncodingError U+265E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u265F");
    },
    Error,
    "EncodingError U+265F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2660");
    },
    Error,
    "EncodingError U+2660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2661");
    },
    Error,
    "EncodingError U+2661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2662");
    },
    Error,
    "EncodingError U+2662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2663");
    },
    Error,
    "EncodingError U+2663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2664");
    },
    Error,
    "EncodingError U+2664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2665");
    },
    Error,
    "EncodingError U+2665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2666");
    },
    Error,
    "EncodingError U+2666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2667");
    },
    Error,
    "EncodingError U+2667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2668");
    },
    Error,
    "EncodingError U+2668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2669");
    },
    Error,
    "EncodingError U+2669",
  );
  r = r && ([...ms932Encoder.encode("♪")].join(",") === "129,244"); // U+266A
  assertThrows(
    () => {
      ms932Encoder.encode("\u266B");
    },
    Error,
    "EncodingError U+266B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u266C");
    },
    Error,
    "EncodingError U+266C",
  );
  r = r && ([...ms932Encoder.encode("♭")].join(",") === "129,243"); // U+266D
  assertThrows(
    () => {
      ms932Encoder.encode("\u266E");
    },
    Error,
    "EncodingError U+266E",
  );
  r = r && ([...ms932Encoder.encode("♯")].join(",") === "129,242"); // U+266F
  assertThrows(
    () => {
      ms932Encoder.encode("\u2670");
    },
    Error,
    "EncodingError U+2670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2671");
    },
    Error,
    "EncodingError U+2671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2672");
    },
    Error,
    "EncodingError U+2672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2673");
    },
    Error,
    "EncodingError U+2673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2674");
    },
    Error,
    "EncodingError U+2674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2675");
    },
    Error,
    "EncodingError U+2675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2676");
    },
    Error,
    "EncodingError U+2676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2677");
    },
    Error,
    "EncodingError U+2677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2678");
    },
    Error,
    "EncodingError U+2678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2679");
    },
    Error,
    "EncodingError U+2679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u267A");
    },
    Error,
    "EncodingError U+267A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u267B");
    },
    Error,
    "EncodingError U+267B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u267C");
    },
    Error,
    "EncodingError U+267C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u267D");
    },
    Error,
    "EncodingError U+267D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u267E");
    },
    Error,
    "EncodingError U+267E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u267F");
    },
    Error,
    "EncodingError U+267F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2680");
    },
    Error,
    "EncodingError U+2680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2681");
    },
    Error,
    "EncodingError U+2681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2682");
    },
    Error,
    "EncodingError U+2682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2683");
    },
    Error,
    "EncodingError U+2683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2684");
    },
    Error,
    "EncodingError U+2684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2685");
    },
    Error,
    "EncodingError U+2685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2686");
    },
    Error,
    "EncodingError U+2686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2687");
    },
    Error,
    "EncodingError U+2687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2688");
    },
    Error,
    "EncodingError U+2688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2689");
    },
    Error,
    "EncodingError U+2689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u268A");
    },
    Error,
    "EncodingError U+268A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u268B");
    },
    Error,
    "EncodingError U+268B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u268C");
    },
    Error,
    "EncodingError U+268C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u268D");
    },
    Error,
    "EncodingError U+268D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u268E");
    },
    Error,
    "EncodingError U+268E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u268F");
    },
    Error,
    "EncodingError U+268F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2690");
    },
    Error,
    "EncodingError U+2690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2691");
    },
    Error,
    "EncodingError U+2691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2692");
    },
    Error,
    "EncodingError U+2692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2693");
    },
    Error,
    "EncodingError U+2693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2694");
    },
    Error,
    "EncodingError U+2694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2695");
    },
    Error,
    "EncodingError U+2695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2696");
    },
    Error,
    "EncodingError U+2696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2697");
    },
    Error,
    "EncodingError U+2697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2698");
    },
    Error,
    "EncodingError U+2698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2699");
    },
    Error,
    "EncodingError U+2699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u269A");
    },
    Error,
    "EncodingError U+269A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u269B");
    },
    Error,
    "EncodingError U+269B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u269C");
    },
    Error,
    "EncodingError U+269C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u269D");
    },
    Error,
    "EncodingError U+269D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u269E");
    },
    Error,
    "EncodingError U+269E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u269F");
    },
    Error,
    "EncodingError U+269F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26A0");
    },
    Error,
    "EncodingError U+26A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26A1");
    },
    Error,
    "EncodingError U+26A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26A2");
    },
    Error,
    "EncodingError U+26A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26A3");
    },
    Error,
    "EncodingError U+26A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26A4");
    },
    Error,
    "EncodingError U+26A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26A5");
    },
    Error,
    "EncodingError U+26A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26A6");
    },
    Error,
    "EncodingError U+26A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26A7");
    },
    Error,
    "EncodingError U+26A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26A8");
    },
    Error,
    "EncodingError U+26A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26A9");
    },
    Error,
    "EncodingError U+26A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26AA");
    },
    Error,
    "EncodingError U+26AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26AB");
    },
    Error,
    "EncodingError U+26AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26AC");
    },
    Error,
    "EncodingError U+26AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26AD");
    },
    Error,
    "EncodingError U+26AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26AE");
    },
    Error,
    "EncodingError U+26AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26AF");
    },
    Error,
    "EncodingError U+26AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26B0");
    },
    Error,
    "EncodingError U+26B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26B1");
    },
    Error,
    "EncodingError U+26B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26B2");
    },
    Error,
    "EncodingError U+26B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26B3");
    },
    Error,
    "EncodingError U+26B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26B4");
    },
    Error,
    "EncodingError U+26B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26B5");
    },
    Error,
    "EncodingError U+26B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26B6");
    },
    Error,
    "EncodingError U+26B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26B7");
    },
    Error,
    "EncodingError U+26B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26B8");
    },
    Error,
    "EncodingError U+26B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26B9");
    },
    Error,
    "EncodingError U+26B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26BA");
    },
    Error,
    "EncodingError U+26BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26BB");
    },
    Error,
    "EncodingError U+26BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26BC");
    },
    Error,
    "EncodingError U+26BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26BD");
    },
    Error,
    "EncodingError U+26BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26BE");
    },
    Error,
    "EncodingError U+26BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26BF");
    },
    Error,
    "EncodingError U+26BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26C0");
    },
    Error,
    "EncodingError U+26C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26C1");
    },
    Error,
    "EncodingError U+26C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26C2");
    },
    Error,
    "EncodingError U+26C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26C3");
    },
    Error,
    "EncodingError U+26C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26C4");
    },
    Error,
    "EncodingError U+26C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26C5");
    },
    Error,
    "EncodingError U+26C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26C6");
    },
    Error,
    "EncodingError U+26C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26C7");
    },
    Error,
    "EncodingError U+26C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26C8");
    },
    Error,
    "EncodingError U+26C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26C9");
    },
    Error,
    "EncodingError U+26C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26CA");
    },
    Error,
    "EncodingError U+26CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26CB");
    },
    Error,
    "EncodingError U+26CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26CC");
    },
    Error,
    "EncodingError U+26CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26CD");
    },
    Error,
    "EncodingError U+26CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26CE");
    },
    Error,
    "EncodingError U+26CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26CF");
    },
    Error,
    "EncodingError U+26CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26D0");
    },
    Error,
    "EncodingError U+26D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26D1");
    },
    Error,
    "EncodingError U+26D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26D2");
    },
    Error,
    "EncodingError U+26D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26D3");
    },
    Error,
    "EncodingError U+26D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26D4");
    },
    Error,
    "EncodingError U+26D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26D5");
    },
    Error,
    "EncodingError U+26D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26D6");
    },
    Error,
    "EncodingError U+26D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26D7");
    },
    Error,
    "EncodingError U+26D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26D8");
    },
    Error,
    "EncodingError U+26D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26D9");
    },
    Error,
    "EncodingError U+26D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26DA");
    },
    Error,
    "EncodingError U+26DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26DB");
    },
    Error,
    "EncodingError U+26DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26DC");
    },
    Error,
    "EncodingError U+26DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26DD");
    },
    Error,
    "EncodingError U+26DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26DE");
    },
    Error,
    "EncodingError U+26DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26DF");
    },
    Error,
    "EncodingError U+26DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26E0");
    },
    Error,
    "EncodingError U+26E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26E1");
    },
    Error,
    "EncodingError U+26E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26E2");
    },
    Error,
    "EncodingError U+26E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26E3");
    },
    Error,
    "EncodingError U+26E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26E4");
    },
    Error,
    "EncodingError U+26E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26E5");
    },
    Error,
    "EncodingError U+26E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26E6");
    },
    Error,
    "EncodingError U+26E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26E7");
    },
    Error,
    "EncodingError U+26E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26E8");
    },
    Error,
    "EncodingError U+26E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26E9");
    },
    Error,
    "EncodingError U+26E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26EA");
    },
    Error,
    "EncodingError U+26EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26EB");
    },
    Error,
    "EncodingError U+26EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26EC");
    },
    Error,
    "EncodingError U+26EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26ED");
    },
    Error,
    "EncodingError U+26ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26EE");
    },
    Error,
    "EncodingError U+26EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26EF");
    },
    Error,
    "EncodingError U+26EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26F0");
    },
    Error,
    "EncodingError U+26F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26F1");
    },
    Error,
    "EncodingError U+26F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26F2");
    },
    Error,
    "EncodingError U+26F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26F3");
    },
    Error,
    "EncodingError U+26F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26F4");
    },
    Error,
    "EncodingError U+26F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26F5");
    },
    Error,
    "EncodingError U+26F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26F6");
    },
    Error,
    "EncodingError U+26F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26F7");
    },
    Error,
    "EncodingError U+26F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26F8");
    },
    Error,
    "EncodingError U+26F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26F9");
    },
    Error,
    "EncodingError U+26F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26FA");
    },
    Error,
    "EncodingError U+26FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26FB");
    },
    Error,
    "EncodingError U+26FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26FC");
    },
    Error,
    "EncodingError U+26FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26FD");
    },
    Error,
    "EncodingError U+26FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26FE");
    },
    Error,
    "EncodingError U+26FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u26FF");
    },
    Error,
    "EncodingError U+26FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2700");
    },
    Error,
    "EncodingError U+2700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2701");
    },
    Error,
    "EncodingError U+2701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2702");
    },
    Error,
    "EncodingError U+2702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2703");
    },
    Error,
    "EncodingError U+2703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2704");
    },
    Error,
    "EncodingError U+2704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2705");
    },
    Error,
    "EncodingError U+2705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2706");
    },
    Error,
    "EncodingError U+2706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2707");
    },
    Error,
    "EncodingError U+2707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2708");
    },
    Error,
    "EncodingError U+2708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2709");
    },
    Error,
    "EncodingError U+2709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u270A");
    },
    Error,
    "EncodingError U+270A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u270B");
    },
    Error,
    "EncodingError U+270B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u270C");
    },
    Error,
    "EncodingError U+270C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u270D");
    },
    Error,
    "EncodingError U+270D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u270E");
    },
    Error,
    "EncodingError U+270E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u270F");
    },
    Error,
    "EncodingError U+270F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2710");
    },
    Error,
    "EncodingError U+2710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2711");
    },
    Error,
    "EncodingError U+2711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2712");
    },
    Error,
    "EncodingError U+2712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2713");
    },
    Error,
    "EncodingError U+2713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2714");
    },
    Error,
    "EncodingError U+2714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2715");
    },
    Error,
    "EncodingError U+2715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2716");
    },
    Error,
    "EncodingError U+2716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2717");
    },
    Error,
    "EncodingError U+2717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2718");
    },
    Error,
    "EncodingError U+2718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2719");
    },
    Error,
    "EncodingError U+2719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u271A");
    },
    Error,
    "EncodingError U+271A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u271B");
    },
    Error,
    "EncodingError U+271B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u271C");
    },
    Error,
    "EncodingError U+271C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u271D");
    },
    Error,
    "EncodingError U+271D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u271E");
    },
    Error,
    "EncodingError U+271E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u271F");
    },
    Error,
    "EncodingError U+271F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2720");
    },
    Error,
    "EncodingError U+2720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2721");
    },
    Error,
    "EncodingError U+2721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2722");
    },
    Error,
    "EncodingError U+2722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2723");
    },
    Error,
    "EncodingError U+2723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2724");
    },
    Error,
    "EncodingError U+2724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2725");
    },
    Error,
    "EncodingError U+2725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2726");
    },
    Error,
    "EncodingError U+2726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2727");
    },
    Error,
    "EncodingError U+2727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2728");
    },
    Error,
    "EncodingError U+2728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2729");
    },
    Error,
    "EncodingError U+2729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u272A");
    },
    Error,
    "EncodingError U+272A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u272B");
    },
    Error,
    "EncodingError U+272B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u272C");
    },
    Error,
    "EncodingError U+272C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u272D");
    },
    Error,
    "EncodingError U+272D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u272E");
    },
    Error,
    "EncodingError U+272E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u272F");
    },
    Error,
    "EncodingError U+272F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2730");
    },
    Error,
    "EncodingError U+2730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2731");
    },
    Error,
    "EncodingError U+2731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2732");
    },
    Error,
    "EncodingError U+2732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2733");
    },
    Error,
    "EncodingError U+2733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2734");
    },
    Error,
    "EncodingError U+2734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2735");
    },
    Error,
    "EncodingError U+2735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2736");
    },
    Error,
    "EncodingError U+2736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2737");
    },
    Error,
    "EncodingError U+2737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2738");
    },
    Error,
    "EncodingError U+2738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2739");
    },
    Error,
    "EncodingError U+2739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u273A");
    },
    Error,
    "EncodingError U+273A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u273B");
    },
    Error,
    "EncodingError U+273B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u273C");
    },
    Error,
    "EncodingError U+273C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u273D");
    },
    Error,
    "EncodingError U+273D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u273E");
    },
    Error,
    "EncodingError U+273E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u273F");
    },
    Error,
    "EncodingError U+273F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2740");
    },
    Error,
    "EncodingError U+2740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2741");
    },
    Error,
    "EncodingError U+2741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2742");
    },
    Error,
    "EncodingError U+2742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2743");
    },
    Error,
    "EncodingError U+2743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2744");
    },
    Error,
    "EncodingError U+2744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2745");
    },
    Error,
    "EncodingError U+2745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2746");
    },
    Error,
    "EncodingError U+2746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2747");
    },
    Error,
    "EncodingError U+2747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2748");
    },
    Error,
    "EncodingError U+2748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2749");
    },
    Error,
    "EncodingError U+2749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u274A");
    },
    Error,
    "EncodingError U+274A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u274B");
    },
    Error,
    "EncodingError U+274B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u274C");
    },
    Error,
    "EncodingError U+274C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u274D");
    },
    Error,
    "EncodingError U+274D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u274E");
    },
    Error,
    "EncodingError U+274E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u274F");
    },
    Error,
    "EncodingError U+274F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2750");
    },
    Error,
    "EncodingError U+2750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2751");
    },
    Error,
    "EncodingError U+2751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2752");
    },
    Error,
    "EncodingError U+2752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2753");
    },
    Error,
    "EncodingError U+2753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2754");
    },
    Error,
    "EncodingError U+2754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2755");
    },
    Error,
    "EncodingError U+2755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2756");
    },
    Error,
    "EncodingError U+2756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2757");
    },
    Error,
    "EncodingError U+2757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2758");
    },
    Error,
    "EncodingError U+2758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2759");
    },
    Error,
    "EncodingError U+2759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u275A");
    },
    Error,
    "EncodingError U+275A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u275B");
    },
    Error,
    "EncodingError U+275B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u275C");
    },
    Error,
    "EncodingError U+275C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u275D");
    },
    Error,
    "EncodingError U+275D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u275E");
    },
    Error,
    "EncodingError U+275E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u275F");
    },
    Error,
    "EncodingError U+275F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2760");
    },
    Error,
    "EncodingError U+2760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2761");
    },
    Error,
    "EncodingError U+2761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2762");
    },
    Error,
    "EncodingError U+2762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2763");
    },
    Error,
    "EncodingError U+2763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2764");
    },
    Error,
    "EncodingError U+2764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2765");
    },
    Error,
    "EncodingError U+2765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2766");
    },
    Error,
    "EncodingError U+2766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2767");
    },
    Error,
    "EncodingError U+2767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2768");
    },
    Error,
    "EncodingError U+2768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2769");
    },
    Error,
    "EncodingError U+2769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u276A");
    },
    Error,
    "EncodingError U+276A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u276B");
    },
    Error,
    "EncodingError U+276B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u276C");
    },
    Error,
    "EncodingError U+276C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u276D");
    },
    Error,
    "EncodingError U+276D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u276E");
    },
    Error,
    "EncodingError U+276E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u276F");
    },
    Error,
    "EncodingError U+276F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2770");
    },
    Error,
    "EncodingError U+2770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2771");
    },
    Error,
    "EncodingError U+2771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2772");
    },
    Error,
    "EncodingError U+2772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2773");
    },
    Error,
    "EncodingError U+2773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2774");
    },
    Error,
    "EncodingError U+2774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2775");
    },
    Error,
    "EncodingError U+2775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2776");
    },
    Error,
    "EncodingError U+2776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2777");
    },
    Error,
    "EncodingError U+2777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2778");
    },
    Error,
    "EncodingError U+2778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2779");
    },
    Error,
    "EncodingError U+2779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u277A");
    },
    Error,
    "EncodingError U+277A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u277B");
    },
    Error,
    "EncodingError U+277B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u277C");
    },
    Error,
    "EncodingError U+277C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u277D");
    },
    Error,
    "EncodingError U+277D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u277E");
    },
    Error,
    "EncodingError U+277E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u277F");
    },
    Error,
    "EncodingError U+277F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2780");
    },
    Error,
    "EncodingError U+2780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2781");
    },
    Error,
    "EncodingError U+2781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2782");
    },
    Error,
    "EncodingError U+2782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2783");
    },
    Error,
    "EncodingError U+2783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2784");
    },
    Error,
    "EncodingError U+2784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2785");
    },
    Error,
    "EncodingError U+2785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2786");
    },
    Error,
    "EncodingError U+2786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2787");
    },
    Error,
    "EncodingError U+2787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2788");
    },
    Error,
    "EncodingError U+2788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2789");
    },
    Error,
    "EncodingError U+2789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u278A");
    },
    Error,
    "EncodingError U+278A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u278B");
    },
    Error,
    "EncodingError U+278B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u278C");
    },
    Error,
    "EncodingError U+278C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u278D");
    },
    Error,
    "EncodingError U+278D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u278E");
    },
    Error,
    "EncodingError U+278E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u278F");
    },
    Error,
    "EncodingError U+278F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2790");
    },
    Error,
    "EncodingError U+2790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2791");
    },
    Error,
    "EncodingError U+2791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2792");
    },
    Error,
    "EncodingError U+2792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2793");
    },
    Error,
    "EncodingError U+2793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2794");
    },
    Error,
    "EncodingError U+2794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2795");
    },
    Error,
    "EncodingError U+2795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2796");
    },
    Error,
    "EncodingError U+2796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2797");
    },
    Error,
    "EncodingError U+2797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2798");
    },
    Error,
    "EncodingError U+2798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2799");
    },
    Error,
    "EncodingError U+2799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u279A");
    },
    Error,
    "EncodingError U+279A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u279B");
    },
    Error,
    "EncodingError U+279B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u279C");
    },
    Error,
    "EncodingError U+279C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u279D");
    },
    Error,
    "EncodingError U+279D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u279E");
    },
    Error,
    "EncodingError U+279E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u279F");
    },
    Error,
    "EncodingError U+279F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27A0");
    },
    Error,
    "EncodingError U+27A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27A1");
    },
    Error,
    "EncodingError U+27A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27A2");
    },
    Error,
    "EncodingError U+27A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27A3");
    },
    Error,
    "EncodingError U+27A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27A4");
    },
    Error,
    "EncodingError U+27A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27A5");
    },
    Error,
    "EncodingError U+27A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27A6");
    },
    Error,
    "EncodingError U+27A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27A7");
    },
    Error,
    "EncodingError U+27A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27A8");
    },
    Error,
    "EncodingError U+27A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27A9");
    },
    Error,
    "EncodingError U+27A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27AA");
    },
    Error,
    "EncodingError U+27AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27AB");
    },
    Error,
    "EncodingError U+27AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27AC");
    },
    Error,
    "EncodingError U+27AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27AD");
    },
    Error,
    "EncodingError U+27AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27AE");
    },
    Error,
    "EncodingError U+27AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27AF");
    },
    Error,
    "EncodingError U+27AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27B0");
    },
    Error,
    "EncodingError U+27B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27B1");
    },
    Error,
    "EncodingError U+27B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27B2");
    },
    Error,
    "EncodingError U+27B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27B3");
    },
    Error,
    "EncodingError U+27B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27B4");
    },
    Error,
    "EncodingError U+27B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27B5");
    },
    Error,
    "EncodingError U+27B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27B6");
    },
    Error,
    "EncodingError U+27B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27B7");
    },
    Error,
    "EncodingError U+27B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27B8");
    },
    Error,
    "EncodingError U+27B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27B9");
    },
    Error,
    "EncodingError U+27B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27BA");
    },
    Error,
    "EncodingError U+27BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27BB");
    },
    Error,
    "EncodingError U+27BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27BC");
    },
    Error,
    "EncodingError U+27BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27BD");
    },
    Error,
    "EncodingError U+27BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27BE");
    },
    Error,
    "EncodingError U+27BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27BF");
    },
    Error,
    "EncodingError U+27BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27C0");
    },
    Error,
    "EncodingError U+27C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27C1");
    },
    Error,
    "EncodingError U+27C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27C2");
    },
    Error,
    "EncodingError U+27C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27C3");
    },
    Error,
    "EncodingError U+27C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27C4");
    },
    Error,
    "EncodingError U+27C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27C5");
    },
    Error,
    "EncodingError U+27C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27C6");
    },
    Error,
    "EncodingError U+27C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27C7");
    },
    Error,
    "EncodingError U+27C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27C8");
    },
    Error,
    "EncodingError U+27C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27C9");
    },
    Error,
    "EncodingError U+27C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27CA");
    },
    Error,
    "EncodingError U+27CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27CB");
    },
    Error,
    "EncodingError U+27CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27CC");
    },
    Error,
    "EncodingError U+27CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27CD");
    },
    Error,
    "EncodingError U+27CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27CE");
    },
    Error,
    "EncodingError U+27CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27CF");
    },
    Error,
    "EncodingError U+27CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27D0");
    },
    Error,
    "EncodingError U+27D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27D1");
    },
    Error,
    "EncodingError U+27D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27D2");
    },
    Error,
    "EncodingError U+27D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27D3");
    },
    Error,
    "EncodingError U+27D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27D4");
    },
    Error,
    "EncodingError U+27D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27D5");
    },
    Error,
    "EncodingError U+27D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27D6");
    },
    Error,
    "EncodingError U+27D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27D7");
    },
    Error,
    "EncodingError U+27D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27D8");
    },
    Error,
    "EncodingError U+27D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27D9");
    },
    Error,
    "EncodingError U+27D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27DA");
    },
    Error,
    "EncodingError U+27DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27DB");
    },
    Error,
    "EncodingError U+27DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27DC");
    },
    Error,
    "EncodingError U+27DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27DD");
    },
    Error,
    "EncodingError U+27DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27DE");
    },
    Error,
    "EncodingError U+27DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27DF");
    },
    Error,
    "EncodingError U+27DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27E0");
    },
    Error,
    "EncodingError U+27E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27E1");
    },
    Error,
    "EncodingError U+27E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27E2");
    },
    Error,
    "EncodingError U+27E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27E3");
    },
    Error,
    "EncodingError U+27E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27E4");
    },
    Error,
    "EncodingError U+27E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27E5");
    },
    Error,
    "EncodingError U+27E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27E6");
    },
    Error,
    "EncodingError U+27E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27E7");
    },
    Error,
    "EncodingError U+27E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27E8");
    },
    Error,
    "EncodingError U+27E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27E9");
    },
    Error,
    "EncodingError U+27E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27EA");
    },
    Error,
    "EncodingError U+27EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27EB");
    },
    Error,
    "EncodingError U+27EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27EC");
    },
    Error,
    "EncodingError U+27EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27ED");
    },
    Error,
    "EncodingError U+27ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27EE");
    },
    Error,
    "EncodingError U+27EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27EF");
    },
    Error,
    "EncodingError U+27EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27F0");
    },
    Error,
    "EncodingError U+27F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27F1");
    },
    Error,
    "EncodingError U+27F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27F2");
    },
    Error,
    "EncodingError U+27F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27F3");
    },
    Error,
    "EncodingError U+27F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27F4");
    },
    Error,
    "EncodingError U+27F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27F5");
    },
    Error,
    "EncodingError U+27F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27F6");
    },
    Error,
    "EncodingError U+27F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27F7");
    },
    Error,
    "EncodingError U+27F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27F8");
    },
    Error,
    "EncodingError U+27F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27F9");
    },
    Error,
    "EncodingError U+27F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27FA");
    },
    Error,
    "EncodingError U+27FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27FB");
    },
    Error,
    "EncodingError U+27FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27FC");
    },
    Error,
    "EncodingError U+27FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27FD");
    },
    Error,
    "EncodingError U+27FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27FE");
    },
    Error,
    "EncodingError U+27FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u27FF");
    },
    Error,
    "EncodingError U+27FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2800");
    },
    Error,
    "EncodingError U+2800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2801");
    },
    Error,
    "EncodingError U+2801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2802");
    },
    Error,
    "EncodingError U+2802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2803");
    },
    Error,
    "EncodingError U+2803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2804");
    },
    Error,
    "EncodingError U+2804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2805");
    },
    Error,
    "EncodingError U+2805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2806");
    },
    Error,
    "EncodingError U+2806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2807");
    },
    Error,
    "EncodingError U+2807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2808");
    },
    Error,
    "EncodingError U+2808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2809");
    },
    Error,
    "EncodingError U+2809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u280A");
    },
    Error,
    "EncodingError U+280A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u280B");
    },
    Error,
    "EncodingError U+280B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u280C");
    },
    Error,
    "EncodingError U+280C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u280D");
    },
    Error,
    "EncodingError U+280D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u280E");
    },
    Error,
    "EncodingError U+280E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u280F");
    },
    Error,
    "EncodingError U+280F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2810");
    },
    Error,
    "EncodingError U+2810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2811");
    },
    Error,
    "EncodingError U+2811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2812");
    },
    Error,
    "EncodingError U+2812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2813");
    },
    Error,
    "EncodingError U+2813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2814");
    },
    Error,
    "EncodingError U+2814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2815");
    },
    Error,
    "EncodingError U+2815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2816");
    },
    Error,
    "EncodingError U+2816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2817");
    },
    Error,
    "EncodingError U+2817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2818");
    },
    Error,
    "EncodingError U+2818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2819");
    },
    Error,
    "EncodingError U+2819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u281A");
    },
    Error,
    "EncodingError U+281A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u281B");
    },
    Error,
    "EncodingError U+281B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u281C");
    },
    Error,
    "EncodingError U+281C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u281D");
    },
    Error,
    "EncodingError U+281D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u281E");
    },
    Error,
    "EncodingError U+281E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u281F");
    },
    Error,
    "EncodingError U+281F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2820");
    },
    Error,
    "EncodingError U+2820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2821");
    },
    Error,
    "EncodingError U+2821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2822");
    },
    Error,
    "EncodingError U+2822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2823");
    },
    Error,
    "EncodingError U+2823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2824");
    },
    Error,
    "EncodingError U+2824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2825");
    },
    Error,
    "EncodingError U+2825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2826");
    },
    Error,
    "EncodingError U+2826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2827");
    },
    Error,
    "EncodingError U+2827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2828");
    },
    Error,
    "EncodingError U+2828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2829");
    },
    Error,
    "EncodingError U+2829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u282A");
    },
    Error,
    "EncodingError U+282A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u282B");
    },
    Error,
    "EncodingError U+282B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u282C");
    },
    Error,
    "EncodingError U+282C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u282D");
    },
    Error,
    "EncodingError U+282D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u282E");
    },
    Error,
    "EncodingError U+282E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u282F");
    },
    Error,
    "EncodingError U+282F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2830");
    },
    Error,
    "EncodingError U+2830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2831");
    },
    Error,
    "EncodingError U+2831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2832");
    },
    Error,
    "EncodingError U+2832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2833");
    },
    Error,
    "EncodingError U+2833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2834");
    },
    Error,
    "EncodingError U+2834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2835");
    },
    Error,
    "EncodingError U+2835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2836");
    },
    Error,
    "EncodingError U+2836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2837");
    },
    Error,
    "EncodingError U+2837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2838");
    },
    Error,
    "EncodingError U+2838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2839");
    },
    Error,
    "EncodingError U+2839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u283A");
    },
    Error,
    "EncodingError U+283A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u283B");
    },
    Error,
    "EncodingError U+283B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u283C");
    },
    Error,
    "EncodingError U+283C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u283D");
    },
    Error,
    "EncodingError U+283D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u283E");
    },
    Error,
    "EncodingError U+283E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u283F");
    },
    Error,
    "EncodingError U+283F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2840");
    },
    Error,
    "EncodingError U+2840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2841");
    },
    Error,
    "EncodingError U+2841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2842");
    },
    Error,
    "EncodingError U+2842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2843");
    },
    Error,
    "EncodingError U+2843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2844");
    },
    Error,
    "EncodingError U+2844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2845");
    },
    Error,
    "EncodingError U+2845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2846");
    },
    Error,
    "EncodingError U+2846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2847");
    },
    Error,
    "EncodingError U+2847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2848");
    },
    Error,
    "EncodingError U+2848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2849");
    },
    Error,
    "EncodingError U+2849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u284A");
    },
    Error,
    "EncodingError U+284A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u284B");
    },
    Error,
    "EncodingError U+284B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u284C");
    },
    Error,
    "EncodingError U+284C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u284D");
    },
    Error,
    "EncodingError U+284D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u284E");
    },
    Error,
    "EncodingError U+284E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u284F");
    },
    Error,
    "EncodingError U+284F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2850");
    },
    Error,
    "EncodingError U+2850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2851");
    },
    Error,
    "EncodingError U+2851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2852");
    },
    Error,
    "EncodingError U+2852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2853");
    },
    Error,
    "EncodingError U+2853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2854");
    },
    Error,
    "EncodingError U+2854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2855");
    },
    Error,
    "EncodingError U+2855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2856");
    },
    Error,
    "EncodingError U+2856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2857");
    },
    Error,
    "EncodingError U+2857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2858");
    },
    Error,
    "EncodingError U+2858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2859");
    },
    Error,
    "EncodingError U+2859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u285A");
    },
    Error,
    "EncodingError U+285A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u285B");
    },
    Error,
    "EncodingError U+285B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u285C");
    },
    Error,
    "EncodingError U+285C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u285D");
    },
    Error,
    "EncodingError U+285D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u285E");
    },
    Error,
    "EncodingError U+285E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u285F");
    },
    Error,
    "EncodingError U+285F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2860");
    },
    Error,
    "EncodingError U+2860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2861");
    },
    Error,
    "EncodingError U+2861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2862");
    },
    Error,
    "EncodingError U+2862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2863");
    },
    Error,
    "EncodingError U+2863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2864");
    },
    Error,
    "EncodingError U+2864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2865");
    },
    Error,
    "EncodingError U+2865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2866");
    },
    Error,
    "EncodingError U+2866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2867");
    },
    Error,
    "EncodingError U+2867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2868");
    },
    Error,
    "EncodingError U+2868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2869");
    },
    Error,
    "EncodingError U+2869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u286A");
    },
    Error,
    "EncodingError U+286A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u286B");
    },
    Error,
    "EncodingError U+286B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u286C");
    },
    Error,
    "EncodingError U+286C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u286D");
    },
    Error,
    "EncodingError U+286D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u286E");
    },
    Error,
    "EncodingError U+286E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u286F");
    },
    Error,
    "EncodingError U+286F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2870");
    },
    Error,
    "EncodingError U+2870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2871");
    },
    Error,
    "EncodingError U+2871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2872");
    },
    Error,
    "EncodingError U+2872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2873");
    },
    Error,
    "EncodingError U+2873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2874");
    },
    Error,
    "EncodingError U+2874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2875");
    },
    Error,
    "EncodingError U+2875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2876");
    },
    Error,
    "EncodingError U+2876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2877");
    },
    Error,
    "EncodingError U+2877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2878");
    },
    Error,
    "EncodingError U+2878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2879");
    },
    Error,
    "EncodingError U+2879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u287A");
    },
    Error,
    "EncodingError U+287A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u287B");
    },
    Error,
    "EncodingError U+287B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u287C");
    },
    Error,
    "EncodingError U+287C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u287D");
    },
    Error,
    "EncodingError U+287D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u287E");
    },
    Error,
    "EncodingError U+287E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u287F");
    },
    Error,
    "EncodingError U+287F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2880");
    },
    Error,
    "EncodingError U+2880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2881");
    },
    Error,
    "EncodingError U+2881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2882");
    },
    Error,
    "EncodingError U+2882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2883");
    },
    Error,
    "EncodingError U+2883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2884");
    },
    Error,
    "EncodingError U+2884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2885");
    },
    Error,
    "EncodingError U+2885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2886");
    },
    Error,
    "EncodingError U+2886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2887");
    },
    Error,
    "EncodingError U+2887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2888");
    },
    Error,
    "EncodingError U+2888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2889");
    },
    Error,
    "EncodingError U+2889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u288A");
    },
    Error,
    "EncodingError U+288A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u288B");
    },
    Error,
    "EncodingError U+288B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u288C");
    },
    Error,
    "EncodingError U+288C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u288D");
    },
    Error,
    "EncodingError U+288D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u288E");
    },
    Error,
    "EncodingError U+288E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u288F");
    },
    Error,
    "EncodingError U+288F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2890");
    },
    Error,
    "EncodingError U+2890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2891");
    },
    Error,
    "EncodingError U+2891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2892");
    },
    Error,
    "EncodingError U+2892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2893");
    },
    Error,
    "EncodingError U+2893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2894");
    },
    Error,
    "EncodingError U+2894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2895");
    },
    Error,
    "EncodingError U+2895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2896");
    },
    Error,
    "EncodingError U+2896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2897");
    },
    Error,
    "EncodingError U+2897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2898");
    },
    Error,
    "EncodingError U+2898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2899");
    },
    Error,
    "EncodingError U+2899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u289A");
    },
    Error,
    "EncodingError U+289A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u289B");
    },
    Error,
    "EncodingError U+289B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u289C");
    },
    Error,
    "EncodingError U+289C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u289D");
    },
    Error,
    "EncodingError U+289D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u289E");
    },
    Error,
    "EncodingError U+289E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u289F");
    },
    Error,
    "EncodingError U+289F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28A0");
    },
    Error,
    "EncodingError U+28A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28A1");
    },
    Error,
    "EncodingError U+28A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28A2");
    },
    Error,
    "EncodingError U+28A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28A3");
    },
    Error,
    "EncodingError U+28A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28A4");
    },
    Error,
    "EncodingError U+28A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28A5");
    },
    Error,
    "EncodingError U+28A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28A6");
    },
    Error,
    "EncodingError U+28A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28A7");
    },
    Error,
    "EncodingError U+28A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28A8");
    },
    Error,
    "EncodingError U+28A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28A9");
    },
    Error,
    "EncodingError U+28A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28AA");
    },
    Error,
    "EncodingError U+28AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28AB");
    },
    Error,
    "EncodingError U+28AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28AC");
    },
    Error,
    "EncodingError U+28AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28AD");
    },
    Error,
    "EncodingError U+28AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28AE");
    },
    Error,
    "EncodingError U+28AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28AF");
    },
    Error,
    "EncodingError U+28AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28B0");
    },
    Error,
    "EncodingError U+28B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28B1");
    },
    Error,
    "EncodingError U+28B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28B2");
    },
    Error,
    "EncodingError U+28B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28B3");
    },
    Error,
    "EncodingError U+28B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28B4");
    },
    Error,
    "EncodingError U+28B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28B5");
    },
    Error,
    "EncodingError U+28B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28B6");
    },
    Error,
    "EncodingError U+28B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28B7");
    },
    Error,
    "EncodingError U+28B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28B8");
    },
    Error,
    "EncodingError U+28B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28B9");
    },
    Error,
    "EncodingError U+28B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28BA");
    },
    Error,
    "EncodingError U+28BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28BB");
    },
    Error,
    "EncodingError U+28BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28BC");
    },
    Error,
    "EncodingError U+28BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28BD");
    },
    Error,
    "EncodingError U+28BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28BE");
    },
    Error,
    "EncodingError U+28BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28BF");
    },
    Error,
    "EncodingError U+28BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28C0");
    },
    Error,
    "EncodingError U+28C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28C1");
    },
    Error,
    "EncodingError U+28C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28C2");
    },
    Error,
    "EncodingError U+28C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28C3");
    },
    Error,
    "EncodingError U+28C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28C4");
    },
    Error,
    "EncodingError U+28C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28C5");
    },
    Error,
    "EncodingError U+28C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28C6");
    },
    Error,
    "EncodingError U+28C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28C7");
    },
    Error,
    "EncodingError U+28C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28C8");
    },
    Error,
    "EncodingError U+28C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28C9");
    },
    Error,
    "EncodingError U+28C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28CA");
    },
    Error,
    "EncodingError U+28CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28CB");
    },
    Error,
    "EncodingError U+28CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28CC");
    },
    Error,
    "EncodingError U+28CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28CD");
    },
    Error,
    "EncodingError U+28CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28CE");
    },
    Error,
    "EncodingError U+28CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28CF");
    },
    Error,
    "EncodingError U+28CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28D0");
    },
    Error,
    "EncodingError U+28D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28D1");
    },
    Error,
    "EncodingError U+28D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28D2");
    },
    Error,
    "EncodingError U+28D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28D3");
    },
    Error,
    "EncodingError U+28D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28D4");
    },
    Error,
    "EncodingError U+28D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28D5");
    },
    Error,
    "EncodingError U+28D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28D6");
    },
    Error,
    "EncodingError U+28D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28D7");
    },
    Error,
    "EncodingError U+28D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28D8");
    },
    Error,
    "EncodingError U+28D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28D9");
    },
    Error,
    "EncodingError U+28D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28DA");
    },
    Error,
    "EncodingError U+28DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28DB");
    },
    Error,
    "EncodingError U+28DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28DC");
    },
    Error,
    "EncodingError U+28DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28DD");
    },
    Error,
    "EncodingError U+28DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28DE");
    },
    Error,
    "EncodingError U+28DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28DF");
    },
    Error,
    "EncodingError U+28DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28E0");
    },
    Error,
    "EncodingError U+28E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28E1");
    },
    Error,
    "EncodingError U+28E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28E2");
    },
    Error,
    "EncodingError U+28E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28E3");
    },
    Error,
    "EncodingError U+28E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28E4");
    },
    Error,
    "EncodingError U+28E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28E5");
    },
    Error,
    "EncodingError U+28E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28E6");
    },
    Error,
    "EncodingError U+28E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28E7");
    },
    Error,
    "EncodingError U+28E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28E8");
    },
    Error,
    "EncodingError U+28E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28E9");
    },
    Error,
    "EncodingError U+28E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28EA");
    },
    Error,
    "EncodingError U+28EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28EB");
    },
    Error,
    "EncodingError U+28EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28EC");
    },
    Error,
    "EncodingError U+28EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28ED");
    },
    Error,
    "EncodingError U+28ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28EE");
    },
    Error,
    "EncodingError U+28EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28EF");
    },
    Error,
    "EncodingError U+28EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28F0");
    },
    Error,
    "EncodingError U+28F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28F1");
    },
    Error,
    "EncodingError U+28F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28F2");
    },
    Error,
    "EncodingError U+28F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28F3");
    },
    Error,
    "EncodingError U+28F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28F4");
    },
    Error,
    "EncodingError U+28F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28F5");
    },
    Error,
    "EncodingError U+28F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28F6");
    },
    Error,
    "EncodingError U+28F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28F7");
    },
    Error,
    "EncodingError U+28F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28F8");
    },
    Error,
    "EncodingError U+28F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28F9");
    },
    Error,
    "EncodingError U+28F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28FA");
    },
    Error,
    "EncodingError U+28FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28FB");
    },
    Error,
    "EncodingError U+28FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28FC");
    },
    Error,
    "EncodingError U+28FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28FD");
    },
    Error,
    "EncodingError U+28FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28FE");
    },
    Error,
    "EncodingError U+28FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u28FF");
    },
    Error,
    "EncodingError U+28FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2900");
    },
    Error,
    "EncodingError U+2900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2901");
    },
    Error,
    "EncodingError U+2901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2902");
    },
    Error,
    "EncodingError U+2902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2903");
    },
    Error,
    "EncodingError U+2903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2904");
    },
    Error,
    "EncodingError U+2904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2905");
    },
    Error,
    "EncodingError U+2905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2906");
    },
    Error,
    "EncodingError U+2906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2907");
    },
    Error,
    "EncodingError U+2907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2908");
    },
    Error,
    "EncodingError U+2908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2909");
    },
    Error,
    "EncodingError U+2909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u290A");
    },
    Error,
    "EncodingError U+290A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u290B");
    },
    Error,
    "EncodingError U+290B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u290C");
    },
    Error,
    "EncodingError U+290C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u290D");
    },
    Error,
    "EncodingError U+290D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u290E");
    },
    Error,
    "EncodingError U+290E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u290F");
    },
    Error,
    "EncodingError U+290F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2910");
    },
    Error,
    "EncodingError U+2910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2911");
    },
    Error,
    "EncodingError U+2911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2912");
    },
    Error,
    "EncodingError U+2912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2913");
    },
    Error,
    "EncodingError U+2913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2914");
    },
    Error,
    "EncodingError U+2914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2915");
    },
    Error,
    "EncodingError U+2915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2916");
    },
    Error,
    "EncodingError U+2916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2917");
    },
    Error,
    "EncodingError U+2917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2918");
    },
    Error,
    "EncodingError U+2918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2919");
    },
    Error,
    "EncodingError U+2919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u291A");
    },
    Error,
    "EncodingError U+291A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u291B");
    },
    Error,
    "EncodingError U+291B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u291C");
    },
    Error,
    "EncodingError U+291C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u291D");
    },
    Error,
    "EncodingError U+291D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u291E");
    },
    Error,
    "EncodingError U+291E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u291F");
    },
    Error,
    "EncodingError U+291F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2920");
    },
    Error,
    "EncodingError U+2920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2921");
    },
    Error,
    "EncodingError U+2921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2922");
    },
    Error,
    "EncodingError U+2922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2923");
    },
    Error,
    "EncodingError U+2923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2924");
    },
    Error,
    "EncodingError U+2924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2925");
    },
    Error,
    "EncodingError U+2925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2926");
    },
    Error,
    "EncodingError U+2926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2927");
    },
    Error,
    "EncodingError U+2927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2928");
    },
    Error,
    "EncodingError U+2928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2929");
    },
    Error,
    "EncodingError U+2929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u292A");
    },
    Error,
    "EncodingError U+292A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u292B");
    },
    Error,
    "EncodingError U+292B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u292C");
    },
    Error,
    "EncodingError U+292C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u292D");
    },
    Error,
    "EncodingError U+292D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u292E");
    },
    Error,
    "EncodingError U+292E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u292F");
    },
    Error,
    "EncodingError U+292F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2930");
    },
    Error,
    "EncodingError U+2930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2931");
    },
    Error,
    "EncodingError U+2931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2932");
    },
    Error,
    "EncodingError U+2932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2933");
    },
    Error,
    "EncodingError U+2933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2934");
    },
    Error,
    "EncodingError U+2934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2935");
    },
    Error,
    "EncodingError U+2935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2936");
    },
    Error,
    "EncodingError U+2936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2937");
    },
    Error,
    "EncodingError U+2937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2938");
    },
    Error,
    "EncodingError U+2938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2939");
    },
    Error,
    "EncodingError U+2939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u293A");
    },
    Error,
    "EncodingError U+293A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u293B");
    },
    Error,
    "EncodingError U+293B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u293C");
    },
    Error,
    "EncodingError U+293C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u293D");
    },
    Error,
    "EncodingError U+293D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u293E");
    },
    Error,
    "EncodingError U+293E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u293F");
    },
    Error,
    "EncodingError U+293F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2940");
    },
    Error,
    "EncodingError U+2940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2941");
    },
    Error,
    "EncodingError U+2941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2942");
    },
    Error,
    "EncodingError U+2942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2943");
    },
    Error,
    "EncodingError U+2943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2944");
    },
    Error,
    "EncodingError U+2944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2945");
    },
    Error,
    "EncodingError U+2945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2946");
    },
    Error,
    "EncodingError U+2946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2947");
    },
    Error,
    "EncodingError U+2947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2948");
    },
    Error,
    "EncodingError U+2948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2949");
    },
    Error,
    "EncodingError U+2949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u294A");
    },
    Error,
    "EncodingError U+294A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u294B");
    },
    Error,
    "EncodingError U+294B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u294C");
    },
    Error,
    "EncodingError U+294C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u294D");
    },
    Error,
    "EncodingError U+294D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u294E");
    },
    Error,
    "EncodingError U+294E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u294F");
    },
    Error,
    "EncodingError U+294F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2950");
    },
    Error,
    "EncodingError U+2950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2951");
    },
    Error,
    "EncodingError U+2951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2952");
    },
    Error,
    "EncodingError U+2952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2953");
    },
    Error,
    "EncodingError U+2953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2954");
    },
    Error,
    "EncodingError U+2954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2955");
    },
    Error,
    "EncodingError U+2955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2956");
    },
    Error,
    "EncodingError U+2956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2957");
    },
    Error,
    "EncodingError U+2957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2958");
    },
    Error,
    "EncodingError U+2958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2959");
    },
    Error,
    "EncodingError U+2959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u295A");
    },
    Error,
    "EncodingError U+295A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u295B");
    },
    Error,
    "EncodingError U+295B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u295C");
    },
    Error,
    "EncodingError U+295C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u295D");
    },
    Error,
    "EncodingError U+295D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u295E");
    },
    Error,
    "EncodingError U+295E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u295F");
    },
    Error,
    "EncodingError U+295F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2960");
    },
    Error,
    "EncodingError U+2960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2961");
    },
    Error,
    "EncodingError U+2961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2962");
    },
    Error,
    "EncodingError U+2962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2963");
    },
    Error,
    "EncodingError U+2963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2964");
    },
    Error,
    "EncodingError U+2964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2965");
    },
    Error,
    "EncodingError U+2965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2966");
    },
    Error,
    "EncodingError U+2966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2967");
    },
    Error,
    "EncodingError U+2967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2968");
    },
    Error,
    "EncodingError U+2968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2969");
    },
    Error,
    "EncodingError U+2969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u296A");
    },
    Error,
    "EncodingError U+296A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u296B");
    },
    Error,
    "EncodingError U+296B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u296C");
    },
    Error,
    "EncodingError U+296C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u296D");
    },
    Error,
    "EncodingError U+296D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u296E");
    },
    Error,
    "EncodingError U+296E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u296F");
    },
    Error,
    "EncodingError U+296F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2970");
    },
    Error,
    "EncodingError U+2970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2971");
    },
    Error,
    "EncodingError U+2971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2972");
    },
    Error,
    "EncodingError U+2972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2973");
    },
    Error,
    "EncodingError U+2973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2974");
    },
    Error,
    "EncodingError U+2974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2975");
    },
    Error,
    "EncodingError U+2975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2976");
    },
    Error,
    "EncodingError U+2976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2977");
    },
    Error,
    "EncodingError U+2977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2978");
    },
    Error,
    "EncodingError U+2978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2979");
    },
    Error,
    "EncodingError U+2979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u297A");
    },
    Error,
    "EncodingError U+297A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u297B");
    },
    Error,
    "EncodingError U+297B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u297C");
    },
    Error,
    "EncodingError U+297C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u297D");
    },
    Error,
    "EncodingError U+297D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u297E");
    },
    Error,
    "EncodingError U+297E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u297F");
    },
    Error,
    "EncodingError U+297F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2980");
    },
    Error,
    "EncodingError U+2980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2981");
    },
    Error,
    "EncodingError U+2981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2982");
    },
    Error,
    "EncodingError U+2982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2983");
    },
    Error,
    "EncodingError U+2983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2984");
    },
    Error,
    "EncodingError U+2984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2985");
    },
    Error,
    "EncodingError U+2985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2986");
    },
    Error,
    "EncodingError U+2986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2987");
    },
    Error,
    "EncodingError U+2987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2988");
    },
    Error,
    "EncodingError U+2988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2989");
    },
    Error,
    "EncodingError U+2989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u298A");
    },
    Error,
    "EncodingError U+298A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u298B");
    },
    Error,
    "EncodingError U+298B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u298C");
    },
    Error,
    "EncodingError U+298C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u298D");
    },
    Error,
    "EncodingError U+298D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u298E");
    },
    Error,
    "EncodingError U+298E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u298F");
    },
    Error,
    "EncodingError U+298F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2990");
    },
    Error,
    "EncodingError U+2990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2991");
    },
    Error,
    "EncodingError U+2991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2992");
    },
    Error,
    "EncodingError U+2992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2993");
    },
    Error,
    "EncodingError U+2993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2994");
    },
    Error,
    "EncodingError U+2994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2995");
    },
    Error,
    "EncodingError U+2995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2996");
    },
    Error,
    "EncodingError U+2996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2997");
    },
    Error,
    "EncodingError U+2997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2998");
    },
    Error,
    "EncodingError U+2998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2999");
    },
    Error,
    "EncodingError U+2999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u299A");
    },
    Error,
    "EncodingError U+299A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u299B");
    },
    Error,
    "EncodingError U+299B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u299C");
    },
    Error,
    "EncodingError U+299C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u299D");
    },
    Error,
    "EncodingError U+299D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u299E");
    },
    Error,
    "EncodingError U+299E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u299F");
    },
    Error,
    "EncodingError U+299F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29A0");
    },
    Error,
    "EncodingError U+29A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29A1");
    },
    Error,
    "EncodingError U+29A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29A2");
    },
    Error,
    "EncodingError U+29A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29A3");
    },
    Error,
    "EncodingError U+29A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29A4");
    },
    Error,
    "EncodingError U+29A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29A5");
    },
    Error,
    "EncodingError U+29A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29A6");
    },
    Error,
    "EncodingError U+29A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29A7");
    },
    Error,
    "EncodingError U+29A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29A8");
    },
    Error,
    "EncodingError U+29A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29A9");
    },
    Error,
    "EncodingError U+29A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29AA");
    },
    Error,
    "EncodingError U+29AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29AB");
    },
    Error,
    "EncodingError U+29AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29AC");
    },
    Error,
    "EncodingError U+29AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29AD");
    },
    Error,
    "EncodingError U+29AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29AE");
    },
    Error,
    "EncodingError U+29AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29AF");
    },
    Error,
    "EncodingError U+29AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29B0");
    },
    Error,
    "EncodingError U+29B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29B1");
    },
    Error,
    "EncodingError U+29B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29B2");
    },
    Error,
    "EncodingError U+29B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29B3");
    },
    Error,
    "EncodingError U+29B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29B4");
    },
    Error,
    "EncodingError U+29B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29B5");
    },
    Error,
    "EncodingError U+29B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29B6");
    },
    Error,
    "EncodingError U+29B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29B7");
    },
    Error,
    "EncodingError U+29B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29B8");
    },
    Error,
    "EncodingError U+29B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29B9");
    },
    Error,
    "EncodingError U+29B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29BA");
    },
    Error,
    "EncodingError U+29BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29BB");
    },
    Error,
    "EncodingError U+29BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29BC");
    },
    Error,
    "EncodingError U+29BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29BD");
    },
    Error,
    "EncodingError U+29BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29BE");
    },
    Error,
    "EncodingError U+29BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29BF");
    },
    Error,
    "EncodingError U+29BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29C0");
    },
    Error,
    "EncodingError U+29C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29C1");
    },
    Error,
    "EncodingError U+29C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29C2");
    },
    Error,
    "EncodingError U+29C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29C3");
    },
    Error,
    "EncodingError U+29C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29C4");
    },
    Error,
    "EncodingError U+29C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29C5");
    },
    Error,
    "EncodingError U+29C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29C6");
    },
    Error,
    "EncodingError U+29C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29C7");
    },
    Error,
    "EncodingError U+29C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29C8");
    },
    Error,
    "EncodingError U+29C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29C9");
    },
    Error,
    "EncodingError U+29C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29CA");
    },
    Error,
    "EncodingError U+29CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29CB");
    },
    Error,
    "EncodingError U+29CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29CC");
    },
    Error,
    "EncodingError U+29CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29CD");
    },
    Error,
    "EncodingError U+29CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29CE");
    },
    Error,
    "EncodingError U+29CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29CF");
    },
    Error,
    "EncodingError U+29CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29D0");
    },
    Error,
    "EncodingError U+29D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29D1");
    },
    Error,
    "EncodingError U+29D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29D2");
    },
    Error,
    "EncodingError U+29D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29D3");
    },
    Error,
    "EncodingError U+29D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29D4");
    },
    Error,
    "EncodingError U+29D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29D5");
    },
    Error,
    "EncodingError U+29D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29D6");
    },
    Error,
    "EncodingError U+29D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29D7");
    },
    Error,
    "EncodingError U+29D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29D8");
    },
    Error,
    "EncodingError U+29D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29D9");
    },
    Error,
    "EncodingError U+29D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29DA");
    },
    Error,
    "EncodingError U+29DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29DB");
    },
    Error,
    "EncodingError U+29DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29DC");
    },
    Error,
    "EncodingError U+29DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29DD");
    },
    Error,
    "EncodingError U+29DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29DE");
    },
    Error,
    "EncodingError U+29DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29DF");
    },
    Error,
    "EncodingError U+29DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29E0");
    },
    Error,
    "EncodingError U+29E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29E1");
    },
    Error,
    "EncodingError U+29E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29E2");
    },
    Error,
    "EncodingError U+29E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29E3");
    },
    Error,
    "EncodingError U+29E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29E4");
    },
    Error,
    "EncodingError U+29E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29E5");
    },
    Error,
    "EncodingError U+29E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29E6");
    },
    Error,
    "EncodingError U+29E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29E7");
    },
    Error,
    "EncodingError U+29E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29E8");
    },
    Error,
    "EncodingError U+29E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29E9");
    },
    Error,
    "EncodingError U+29E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29EA");
    },
    Error,
    "EncodingError U+29EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29EB");
    },
    Error,
    "EncodingError U+29EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29EC");
    },
    Error,
    "EncodingError U+29EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29ED");
    },
    Error,
    "EncodingError U+29ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29EE");
    },
    Error,
    "EncodingError U+29EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29EF");
    },
    Error,
    "EncodingError U+29EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29F0");
    },
    Error,
    "EncodingError U+29F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29F1");
    },
    Error,
    "EncodingError U+29F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29F2");
    },
    Error,
    "EncodingError U+29F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29F3");
    },
    Error,
    "EncodingError U+29F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29F4");
    },
    Error,
    "EncodingError U+29F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29F5");
    },
    Error,
    "EncodingError U+29F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29F6");
    },
    Error,
    "EncodingError U+29F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29F7");
    },
    Error,
    "EncodingError U+29F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29F8");
    },
    Error,
    "EncodingError U+29F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29F9");
    },
    Error,
    "EncodingError U+29F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29FA");
    },
    Error,
    "EncodingError U+29FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29FB");
    },
    Error,
    "EncodingError U+29FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29FC");
    },
    Error,
    "EncodingError U+29FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29FD");
    },
    Error,
    "EncodingError U+29FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29FE");
    },
    Error,
    "EncodingError U+29FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u29FF");
    },
    Error,
    "EncodingError U+29FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A00");
    },
    Error,
    "EncodingError U+2A00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A01");
    },
    Error,
    "EncodingError U+2A01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A02");
    },
    Error,
    "EncodingError U+2A02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A03");
    },
    Error,
    "EncodingError U+2A03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A04");
    },
    Error,
    "EncodingError U+2A04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A05");
    },
    Error,
    "EncodingError U+2A05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A06");
    },
    Error,
    "EncodingError U+2A06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A07");
    },
    Error,
    "EncodingError U+2A07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A08");
    },
    Error,
    "EncodingError U+2A08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A09");
    },
    Error,
    "EncodingError U+2A09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A0A");
    },
    Error,
    "EncodingError U+2A0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A0B");
    },
    Error,
    "EncodingError U+2A0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A0C");
    },
    Error,
    "EncodingError U+2A0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A0D");
    },
    Error,
    "EncodingError U+2A0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A0E");
    },
    Error,
    "EncodingError U+2A0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A0F");
    },
    Error,
    "EncodingError U+2A0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A10");
    },
    Error,
    "EncodingError U+2A10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A11");
    },
    Error,
    "EncodingError U+2A11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A12");
    },
    Error,
    "EncodingError U+2A12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A13");
    },
    Error,
    "EncodingError U+2A13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A14");
    },
    Error,
    "EncodingError U+2A14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A15");
    },
    Error,
    "EncodingError U+2A15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A16");
    },
    Error,
    "EncodingError U+2A16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A17");
    },
    Error,
    "EncodingError U+2A17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A18");
    },
    Error,
    "EncodingError U+2A18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A19");
    },
    Error,
    "EncodingError U+2A19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A1A");
    },
    Error,
    "EncodingError U+2A1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A1B");
    },
    Error,
    "EncodingError U+2A1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A1C");
    },
    Error,
    "EncodingError U+2A1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A1D");
    },
    Error,
    "EncodingError U+2A1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A1E");
    },
    Error,
    "EncodingError U+2A1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A1F");
    },
    Error,
    "EncodingError U+2A1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A20");
    },
    Error,
    "EncodingError U+2A20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A21");
    },
    Error,
    "EncodingError U+2A21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A22");
    },
    Error,
    "EncodingError U+2A22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A23");
    },
    Error,
    "EncodingError U+2A23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A24");
    },
    Error,
    "EncodingError U+2A24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A25");
    },
    Error,
    "EncodingError U+2A25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A26");
    },
    Error,
    "EncodingError U+2A26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A27");
    },
    Error,
    "EncodingError U+2A27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A28");
    },
    Error,
    "EncodingError U+2A28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A29");
    },
    Error,
    "EncodingError U+2A29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A2A");
    },
    Error,
    "EncodingError U+2A2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A2B");
    },
    Error,
    "EncodingError U+2A2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A2C");
    },
    Error,
    "EncodingError U+2A2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A2D");
    },
    Error,
    "EncodingError U+2A2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A2E");
    },
    Error,
    "EncodingError U+2A2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A2F");
    },
    Error,
    "EncodingError U+2A2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A30");
    },
    Error,
    "EncodingError U+2A30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A31");
    },
    Error,
    "EncodingError U+2A31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A32");
    },
    Error,
    "EncodingError U+2A32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A33");
    },
    Error,
    "EncodingError U+2A33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A34");
    },
    Error,
    "EncodingError U+2A34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A35");
    },
    Error,
    "EncodingError U+2A35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A36");
    },
    Error,
    "EncodingError U+2A36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A37");
    },
    Error,
    "EncodingError U+2A37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A38");
    },
    Error,
    "EncodingError U+2A38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A39");
    },
    Error,
    "EncodingError U+2A39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A3A");
    },
    Error,
    "EncodingError U+2A3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A3B");
    },
    Error,
    "EncodingError U+2A3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A3C");
    },
    Error,
    "EncodingError U+2A3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A3D");
    },
    Error,
    "EncodingError U+2A3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A3E");
    },
    Error,
    "EncodingError U+2A3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A3F");
    },
    Error,
    "EncodingError U+2A3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A40");
    },
    Error,
    "EncodingError U+2A40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A41");
    },
    Error,
    "EncodingError U+2A41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A42");
    },
    Error,
    "EncodingError U+2A42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A43");
    },
    Error,
    "EncodingError U+2A43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A44");
    },
    Error,
    "EncodingError U+2A44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A45");
    },
    Error,
    "EncodingError U+2A45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A46");
    },
    Error,
    "EncodingError U+2A46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A47");
    },
    Error,
    "EncodingError U+2A47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A48");
    },
    Error,
    "EncodingError U+2A48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A49");
    },
    Error,
    "EncodingError U+2A49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A4A");
    },
    Error,
    "EncodingError U+2A4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A4B");
    },
    Error,
    "EncodingError U+2A4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A4C");
    },
    Error,
    "EncodingError U+2A4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A4D");
    },
    Error,
    "EncodingError U+2A4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A4E");
    },
    Error,
    "EncodingError U+2A4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A4F");
    },
    Error,
    "EncodingError U+2A4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A50");
    },
    Error,
    "EncodingError U+2A50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A51");
    },
    Error,
    "EncodingError U+2A51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A52");
    },
    Error,
    "EncodingError U+2A52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A53");
    },
    Error,
    "EncodingError U+2A53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A54");
    },
    Error,
    "EncodingError U+2A54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A55");
    },
    Error,
    "EncodingError U+2A55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A56");
    },
    Error,
    "EncodingError U+2A56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A57");
    },
    Error,
    "EncodingError U+2A57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A58");
    },
    Error,
    "EncodingError U+2A58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A59");
    },
    Error,
    "EncodingError U+2A59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A5A");
    },
    Error,
    "EncodingError U+2A5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A5B");
    },
    Error,
    "EncodingError U+2A5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A5C");
    },
    Error,
    "EncodingError U+2A5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A5D");
    },
    Error,
    "EncodingError U+2A5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A5E");
    },
    Error,
    "EncodingError U+2A5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A5F");
    },
    Error,
    "EncodingError U+2A5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A60");
    },
    Error,
    "EncodingError U+2A60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A61");
    },
    Error,
    "EncodingError U+2A61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A62");
    },
    Error,
    "EncodingError U+2A62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A63");
    },
    Error,
    "EncodingError U+2A63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A64");
    },
    Error,
    "EncodingError U+2A64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A65");
    },
    Error,
    "EncodingError U+2A65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A66");
    },
    Error,
    "EncodingError U+2A66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A67");
    },
    Error,
    "EncodingError U+2A67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A68");
    },
    Error,
    "EncodingError U+2A68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A69");
    },
    Error,
    "EncodingError U+2A69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A6A");
    },
    Error,
    "EncodingError U+2A6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A6B");
    },
    Error,
    "EncodingError U+2A6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A6C");
    },
    Error,
    "EncodingError U+2A6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A6D");
    },
    Error,
    "EncodingError U+2A6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A6E");
    },
    Error,
    "EncodingError U+2A6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A6F");
    },
    Error,
    "EncodingError U+2A6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A70");
    },
    Error,
    "EncodingError U+2A70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A71");
    },
    Error,
    "EncodingError U+2A71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A72");
    },
    Error,
    "EncodingError U+2A72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A73");
    },
    Error,
    "EncodingError U+2A73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A74");
    },
    Error,
    "EncodingError U+2A74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A75");
    },
    Error,
    "EncodingError U+2A75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A76");
    },
    Error,
    "EncodingError U+2A76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A77");
    },
    Error,
    "EncodingError U+2A77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A78");
    },
    Error,
    "EncodingError U+2A78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A79");
    },
    Error,
    "EncodingError U+2A79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A7A");
    },
    Error,
    "EncodingError U+2A7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A7B");
    },
    Error,
    "EncodingError U+2A7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A7C");
    },
    Error,
    "EncodingError U+2A7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A7D");
    },
    Error,
    "EncodingError U+2A7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A7E");
    },
    Error,
    "EncodingError U+2A7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A7F");
    },
    Error,
    "EncodingError U+2A7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A80");
    },
    Error,
    "EncodingError U+2A80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A81");
    },
    Error,
    "EncodingError U+2A81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A82");
    },
    Error,
    "EncodingError U+2A82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A83");
    },
    Error,
    "EncodingError U+2A83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A84");
    },
    Error,
    "EncodingError U+2A84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A85");
    },
    Error,
    "EncodingError U+2A85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A86");
    },
    Error,
    "EncodingError U+2A86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A87");
    },
    Error,
    "EncodingError U+2A87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A88");
    },
    Error,
    "EncodingError U+2A88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A89");
    },
    Error,
    "EncodingError U+2A89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A8A");
    },
    Error,
    "EncodingError U+2A8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A8B");
    },
    Error,
    "EncodingError U+2A8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A8C");
    },
    Error,
    "EncodingError U+2A8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A8D");
    },
    Error,
    "EncodingError U+2A8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A8E");
    },
    Error,
    "EncodingError U+2A8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A8F");
    },
    Error,
    "EncodingError U+2A8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A90");
    },
    Error,
    "EncodingError U+2A90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A91");
    },
    Error,
    "EncodingError U+2A91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A92");
    },
    Error,
    "EncodingError U+2A92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A93");
    },
    Error,
    "EncodingError U+2A93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A94");
    },
    Error,
    "EncodingError U+2A94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A95");
    },
    Error,
    "EncodingError U+2A95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A96");
    },
    Error,
    "EncodingError U+2A96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A97");
    },
    Error,
    "EncodingError U+2A97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A98");
    },
    Error,
    "EncodingError U+2A98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A99");
    },
    Error,
    "EncodingError U+2A99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A9A");
    },
    Error,
    "EncodingError U+2A9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A9B");
    },
    Error,
    "EncodingError U+2A9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A9C");
    },
    Error,
    "EncodingError U+2A9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A9D");
    },
    Error,
    "EncodingError U+2A9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A9E");
    },
    Error,
    "EncodingError U+2A9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2A9F");
    },
    Error,
    "EncodingError U+2A9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AA0");
    },
    Error,
    "EncodingError U+2AA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AA1");
    },
    Error,
    "EncodingError U+2AA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AA2");
    },
    Error,
    "EncodingError U+2AA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AA3");
    },
    Error,
    "EncodingError U+2AA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AA4");
    },
    Error,
    "EncodingError U+2AA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AA5");
    },
    Error,
    "EncodingError U+2AA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AA6");
    },
    Error,
    "EncodingError U+2AA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AA7");
    },
    Error,
    "EncodingError U+2AA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AA8");
    },
    Error,
    "EncodingError U+2AA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AA9");
    },
    Error,
    "EncodingError U+2AA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AAA");
    },
    Error,
    "EncodingError U+2AAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AAB");
    },
    Error,
    "EncodingError U+2AAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AAC");
    },
    Error,
    "EncodingError U+2AAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AAD");
    },
    Error,
    "EncodingError U+2AAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AAE");
    },
    Error,
    "EncodingError U+2AAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AAF");
    },
    Error,
    "EncodingError U+2AAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AB0");
    },
    Error,
    "EncodingError U+2AB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AB1");
    },
    Error,
    "EncodingError U+2AB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AB2");
    },
    Error,
    "EncodingError U+2AB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AB3");
    },
    Error,
    "EncodingError U+2AB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AB4");
    },
    Error,
    "EncodingError U+2AB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AB5");
    },
    Error,
    "EncodingError U+2AB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AB6");
    },
    Error,
    "EncodingError U+2AB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AB7");
    },
    Error,
    "EncodingError U+2AB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AB8");
    },
    Error,
    "EncodingError U+2AB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AB9");
    },
    Error,
    "EncodingError U+2AB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ABA");
    },
    Error,
    "EncodingError U+2ABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ABB");
    },
    Error,
    "EncodingError U+2ABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ABC");
    },
    Error,
    "EncodingError U+2ABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ABD");
    },
    Error,
    "EncodingError U+2ABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ABE");
    },
    Error,
    "EncodingError U+2ABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ABF");
    },
    Error,
    "EncodingError U+2ABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AC0");
    },
    Error,
    "EncodingError U+2AC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AC1");
    },
    Error,
    "EncodingError U+2AC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AC2");
    },
    Error,
    "EncodingError U+2AC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AC3");
    },
    Error,
    "EncodingError U+2AC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AC4");
    },
    Error,
    "EncodingError U+2AC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AC5");
    },
    Error,
    "EncodingError U+2AC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AC6");
    },
    Error,
    "EncodingError U+2AC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AC7");
    },
    Error,
    "EncodingError U+2AC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AC8");
    },
    Error,
    "EncodingError U+2AC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AC9");
    },
    Error,
    "EncodingError U+2AC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ACA");
    },
    Error,
    "EncodingError U+2ACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ACB");
    },
    Error,
    "EncodingError U+2ACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ACC");
    },
    Error,
    "EncodingError U+2ACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ACD");
    },
    Error,
    "EncodingError U+2ACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ACE");
    },
    Error,
    "EncodingError U+2ACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ACF");
    },
    Error,
    "EncodingError U+2ACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AD0");
    },
    Error,
    "EncodingError U+2AD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AD1");
    },
    Error,
    "EncodingError U+2AD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AD2");
    },
    Error,
    "EncodingError U+2AD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AD3");
    },
    Error,
    "EncodingError U+2AD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AD4");
    },
    Error,
    "EncodingError U+2AD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AD5");
    },
    Error,
    "EncodingError U+2AD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AD6");
    },
    Error,
    "EncodingError U+2AD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AD7");
    },
    Error,
    "EncodingError U+2AD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AD8");
    },
    Error,
    "EncodingError U+2AD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AD9");
    },
    Error,
    "EncodingError U+2AD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ADA");
    },
    Error,
    "EncodingError U+2ADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ADB");
    },
    Error,
    "EncodingError U+2ADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ADC");
    },
    Error,
    "EncodingError U+2ADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ADD");
    },
    Error,
    "EncodingError U+2ADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ADE");
    },
    Error,
    "EncodingError U+2ADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ADF");
    },
    Error,
    "EncodingError U+2ADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AE0");
    },
    Error,
    "EncodingError U+2AE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AE1");
    },
    Error,
    "EncodingError U+2AE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AE2");
    },
    Error,
    "EncodingError U+2AE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AE3");
    },
    Error,
    "EncodingError U+2AE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AE4");
    },
    Error,
    "EncodingError U+2AE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AE5");
    },
    Error,
    "EncodingError U+2AE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AE6");
    },
    Error,
    "EncodingError U+2AE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AE7");
    },
    Error,
    "EncodingError U+2AE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AE8");
    },
    Error,
    "EncodingError U+2AE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AE9");
    },
    Error,
    "EncodingError U+2AE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AEA");
    },
    Error,
    "EncodingError U+2AEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AEB");
    },
    Error,
    "EncodingError U+2AEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AEC");
    },
    Error,
    "EncodingError U+2AEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AED");
    },
    Error,
    "EncodingError U+2AED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AEE");
    },
    Error,
    "EncodingError U+2AEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AEF");
    },
    Error,
    "EncodingError U+2AEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AF0");
    },
    Error,
    "EncodingError U+2AF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AF1");
    },
    Error,
    "EncodingError U+2AF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AF2");
    },
    Error,
    "EncodingError U+2AF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AF3");
    },
    Error,
    "EncodingError U+2AF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AF4");
    },
    Error,
    "EncodingError U+2AF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AF5");
    },
    Error,
    "EncodingError U+2AF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AF6");
    },
    Error,
    "EncodingError U+2AF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AF7");
    },
    Error,
    "EncodingError U+2AF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AF8");
    },
    Error,
    "EncodingError U+2AF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AF9");
    },
    Error,
    "EncodingError U+2AF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AFA");
    },
    Error,
    "EncodingError U+2AFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AFB");
    },
    Error,
    "EncodingError U+2AFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AFC");
    },
    Error,
    "EncodingError U+2AFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AFD");
    },
    Error,
    "EncodingError U+2AFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AFE");
    },
    Error,
    "EncodingError U+2AFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2AFF");
    },
    Error,
    "EncodingError U+2AFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B00");
    },
    Error,
    "EncodingError U+2B00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B01");
    },
    Error,
    "EncodingError U+2B01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B02");
    },
    Error,
    "EncodingError U+2B02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B03");
    },
    Error,
    "EncodingError U+2B03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B04");
    },
    Error,
    "EncodingError U+2B04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B05");
    },
    Error,
    "EncodingError U+2B05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B06");
    },
    Error,
    "EncodingError U+2B06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B07");
    },
    Error,
    "EncodingError U+2B07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B08");
    },
    Error,
    "EncodingError U+2B08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B09");
    },
    Error,
    "EncodingError U+2B09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B0A");
    },
    Error,
    "EncodingError U+2B0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B0B");
    },
    Error,
    "EncodingError U+2B0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B0C");
    },
    Error,
    "EncodingError U+2B0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B0D");
    },
    Error,
    "EncodingError U+2B0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B0E");
    },
    Error,
    "EncodingError U+2B0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B0F");
    },
    Error,
    "EncodingError U+2B0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B10");
    },
    Error,
    "EncodingError U+2B10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B11");
    },
    Error,
    "EncodingError U+2B11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B12");
    },
    Error,
    "EncodingError U+2B12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B13");
    },
    Error,
    "EncodingError U+2B13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B14");
    },
    Error,
    "EncodingError U+2B14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B15");
    },
    Error,
    "EncodingError U+2B15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B16");
    },
    Error,
    "EncodingError U+2B16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B17");
    },
    Error,
    "EncodingError U+2B17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B18");
    },
    Error,
    "EncodingError U+2B18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B19");
    },
    Error,
    "EncodingError U+2B19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B1A");
    },
    Error,
    "EncodingError U+2B1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B1B");
    },
    Error,
    "EncodingError U+2B1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B1C");
    },
    Error,
    "EncodingError U+2B1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B1D");
    },
    Error,
    "EncodingError U+2B1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B1E");
    },
    Error,
    "EncodingError U+2B1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B1F");
    },
    Error,
    "EncodingError U+2B1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B20");
    },
    Error,
    "EncodingError U+2B20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B21");
    },
    Error,
    "EncodingError U+2B21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B22");
    },
    Error,
    "EncodingError U+2B22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B23");
    },
    Error,
    "EncodingError U+2B23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B24");
    },
    Error,
    "EncodingError U+2B24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B25");
    },
    Error,
    "EncodingError U+2B25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B26");
    },
    Error,
    "EncodingError U+2B26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B27");
    },
    Error,
    "EncodingError U+2B27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B28");
    },
    Error,
    "EncodingError U+2B28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B29");
    },
    Error,
    "EncodingError U+2B29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B2A");
    },
    Error,
    "EncodingError U+2B2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B2B");
    },
    Error,
    "EncodingError U+2B2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B2C");
    },
    Error,
    "EncodingError U+2B2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B2D");
    },
    Error,
    "EncodingError U+2B2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B2E");
    },
    Error,
    "EncodingError U+2B2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B2F");
    },
    Error,
    "EncodingError U+2B2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B30");
    },
    Error,
    "EncodingError U+2B30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B31");
    },
    Error,
    "EncodingError U+2B31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B32");
    },
    Error,
    "EncodingError U+2B32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B33");
    },
    Error,
    "EncodingError U+2B33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B34");
    },
    Error,
    "EncodingError U+2B34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B35");
    },
    Error,
    "EncodingError U+2B35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B36");
    },
    Error,
    "EncodingError U+2B36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B37");
    },
    Error,
    "EncodingError U+2B37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B38");
    },
    Error,
    "EncodingError U+2B38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B39");
    },
    Error,
    "EncodingError U+2B39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B3A");
    },
    Error,
    "EncodingError U+2B3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B3B");
    },
    Error,
    "EncodingError U+2B3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B3C");
    },
    Error,
    "EncodingError U+2B3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B3D");
    },
    Error,
    "EncodingError U+2B3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B3E");
    },
    Error,
    "EncodingError U+2B3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B3F");
    },
    Error,
    "EncodingError U+2B3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B40");
    },
    Error,
    "EncodingError U+2B40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B41");
    },
    Error,
    "EncodingError U+2B41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B42");
    },
    Error,
    "EncodingError U+2B42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B43");
    },
    Error,
    "EncodingError U+2B43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B44");
    },
    Error,
    "EncodingError U+2B44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B45");
    },
    Error,
    "EncodingError U+2B45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B46");
    },
    Error,
    "EncodingError U+2B46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B47");
    },
    Error,
    "EncodingError U+2B47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B48");
    },
    Error,
    "EncodingError U+2B48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B49");
    },
    Error,
    "EncodingError U+2B49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B4A");
    },
    Error,
    "EncodingError U+2B4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B4B");
    },
    Error,
    "EncodingError U+2B4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B4C");
    },
    Error,
    "EncodingError U+2B4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B4D");
    },
    Error,
    "EncodingError U+2B4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B4E");
    },
    Error,
    "EncodingError U+2B4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B4F");
    },
    Error,
    "EncodingError U+2B4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B50");
    },
    Error,
    "EncodingError U+2B50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B51");
    },
    Error,
    "EncodingError U+2B51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B52");
    },
    Error,
    "EncodingError U+2B52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B53");
    },
    Error,
    "EncodingError U+2B53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B54");
    },
    Error,
    "EncodingError U+2B54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B55");
    },
    Error,
    "EncodingError U+2B55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B56");
    },
    Error,
    "EncodingError U+2B56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B57");
    },
    Error,
    "EncodingError U+2B57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B58");
    },
    Error,
    "EncodingError U+2B58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B59");
    },
    Error,
    "EncodingError U+2B59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B5A");
    },
    Error,
    "EncodingError U+2B5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B5B");
    },
    Error,
    "EncodingError U+2B5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B5C");
    },
    Error,
    "EncodingError U+2B5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B5D");
    },
    Error,
    "EncodingError U+2B5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B5E");
    },
    Error,
    "EncodingError U+2B5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B5F");
    },
    Error,
    "EncodingError U+2B5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B60");
    },
    Error,
    "EncodingError U+2B60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B61");
    },
    Error,
    "EncodingError U+2B61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B62");
    },
    Error,
    "EncodingError U+2B62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B63");
    },
    Error,
    "EncodingError U+2B63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B64");
    },
    Error,
    "EncodingError U+2B64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B65");
    },
    Error,
    "EncodingError U+2B65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B66");
    },
    Error,
    "EncodingError U+2B66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B67");
    },
    Error,
    "EncodingError U+2B67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B68");
    },
    Error,
    "EncodingError U+2B68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B69");
    },
    Error,
    "EncodingError U+2B69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B6A");
    },
    Error,
    "EncodingError U+2B6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B6B");
    },
    Error,
    "EncodingError U+2B6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B6C");
    },
    Error,
    "EncodingError U+2B6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B6D");
    },
    Error,
    "EncodingError U+2B6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B6E");
    },
    Error,
    "EncodingError U+2B6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B6F");
    },
    Error,
    "EncodingError U+2B6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B70");
    },
    Error,
    "EncodingError U+2B70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B71");
    },
    Error,
    "EncodingError U+2B71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B72");
    },
    Error,
    "EncodingError U+2B72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B73");
    },
    Error,
    "EncodingError U+2B73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B74");
    },
    Error,
    "EncodingError U+2B74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B75");
    },
    Error,
    "EncodingError U+2B75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B76");
    },
    Error,
    "EncodingError U+2B76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B77");
    },
    Error,
    "EncodingError U+2B77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B78");
    },
    Error,
    "EncodingError U+2B78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B79");
    },
    Error,
    "EncodingError U+2B79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B7A");
    },
    Error,
    "EncodingError U+2B7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B7B");
    },
    Error,
    "EncodingError U+2B7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B7C");
    },
    Error,
    "EncodingError U+2B7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B7D");
    },
    Error,
    "EncodingError U+2B7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B7E");
    },
    Error,
    "EncodingError U+2B7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B7F");
    },
    Error,
    "EncodingError U+2B7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B80");
    },
    Error,
    "EncodingError U+2B80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B81");
    },
    Error,
    "EncodingError U+2B81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B82");
    },
    Error,
    "EncodingError U+2B82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B83");
    },
    Error,
    "EncodingError U+2B83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B84");
    },
    Error,
    "EncodingError U+2B84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B85");
    },
    Error,
    "EncodingError U+2B85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B86");
    },
    Error,
    "EncodingError U+2B86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B87");
    },
    Error,
    "EncodingError U+2B87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B88");
    },
    Error,
    "EncodingError U+2B88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B89");
    },
    Error,
    "EncodingError U+2B89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B8A");
    },
    Error,
    "EncodingError U+2B8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B8B");
    },
    Error,
    "EncodingError U+2B8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B8C");
    },
    Error,
    "EncodingError U+2B8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B8D");
    },
    Error,
    "EncodingError U+2B8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B8E");
    },
    Error,
    "EncodingError U+2B8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B8F");
    },
    Error,
    "EncodingError U+2B8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B90");
    },
    Error,
    "EncodingError U+2B90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B91");
    },
    Error,
    "EncodingError U+2B91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B92");
    },
    Error,
    "EncodingError U+2B92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B93");
    },
    Error,
    "EncodingError U+2B93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B94");
    },
    Error,
    "EncodingError U+2B94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B95");
    },
    Error,
    "EncodingError U+2B95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B96");
    },
    Error,
    "EncodingError U+2B96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B97");
    },
    Error,
    "EncodingError U+2B97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B98");
    },
    Error,
    "EncodingError U+2B98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B99");
    },
    Error,
    "EncodingError U+2B99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B9A");
    },
    Error,
    "EncodingError U+2B9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B9B");
    },
    Error,
    "EncodingError U+2B9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B9C");
    },
    Error,
    "EncodingError U+2B9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B9D");
    },
    Error,
    "EncodingError U+2B9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B9E");
    },
    Error,
    "EncodingError U+2B9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2B9F");
    },
    Error,
    "EncodingError U+2B9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BA0");
    },
    Error,
    "EncodingError U+2BA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BA1");
    },
    Error,
    "EncodingError U+2BA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BA2");
    },
    Error,
    "EncodingError U+2BA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BA3");
    },
    Error,
    "EncodingError U+2BA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BA4");
    },
    Error,
    "EncodingError U+2BA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BA5");
    },
    Error,
    "EncodingError U+2BA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BA6");
    },
    Error,
    "EncodingError U+2BA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BA7");
    },
    Error,
    "EncodingError U+2BA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BA8");
    },
    Error,
    "EncodingError U+2BA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BA9");
    },
    Error,
    "EncodingError U+2BA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BAA");
    },
    Error,
    "EncodingError U+2BAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BAB");
    },
    Error,
    "EncodingError U+2BAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BAC");
    },
    Error,
    "EncodingError U+2BAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BAD");
    },
    Error,
    "EncodingError U+2BAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BAE");
    },
    Error,
    "EncodingError U+2BAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BAF");
    },
    Error,
    "EncodingError U+2BAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BB0");
    },
    Error,
    "EncodingError U+2BB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BB1");
    },
    Error,
    "EncodingError U+2BB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BB2");
    },
    Error,
    "EncodingError U+2BB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BB3");
    },
    Error,
    "EncodingError U+2BB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BB4");
    },
    Error,
    "EncodingError U+2BB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BB5");
    },
    Error,
    "EncodingError U+2BB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BB6");
    },
    Error,
    "EncodingError U+2BB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BB7");
    },
    Error,
    "EncodingError U+2BB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BB8");
    },
    Error,
    "EncodingError U+2BB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BB9");
    },
    Error,
    "EncodingError U+2BB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BBA");
    },
    Error,
    "EncodingError U+2BBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BBB");
    },
    Error,
    "EncodingError U+2BBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BBC");
    },
    Error,
    "EncodingError U+2BBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BBD");
    },
    Error,
    "EncodingError U+2BBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BBE");
    },
    Error,
    "EncodingError U+2BBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BBF");
    },
    Error,
    "EncodingError U+2BBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BC0");
    },
    Error,
    "EncodingError U+2BC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BC1");
    },
    Error,
    "EncodingError U+2BC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BC2");
    },
    Error,
    "EncodingError U+2BC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BC3");
    },
    Error,
    "EncodingError U+2BC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BC4");
    },
    Error,
    "EncodingError U+2BC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BC5");
    },
    Error,
    "EncodingError U+2BC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BC6");
    },
    Error,
    "EncodingError U+2BC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BC7");
    },
    Error,
    "EncodingError U+2BC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BC8");
    },
    Error,
    "EncodingError U+2BC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BC9");
    },
    Error,
    "EncodingError U+2BC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BCA");
    },
    Error,
    "EncodingError U+2BCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BCB");
    },
    Error,
    "EncodingError U+2BCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BCC");
    },
    Error,
    "EncodingError U+2BCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BCD");
    },
    Error,
    "EncodingError U+2BCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BCE");
    },
    Error,
    "EncodingError U+2BCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BCF");
    },
    Error,
    "EncodingError U+2BCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BD0");
    },
    Error,
    "EncodingError U+2BD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BD1");
    },
    Error,
    "EncodingError U+2BD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BD2");
    },
    Error,
    "EncodingError U+2BD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BD3");
    },
    Error,
    "EncodingError U+2BD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BD4");
    },
    Error,
    "EncodingError U+2BD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BD5");
    },
    Error,
    "EncodingError U+2BD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BD6");
    },
    Error,
    "EncodingError U+2BD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BD7");
    },
    Error,
    "EncodingError U+2BD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BD8");
    },
    Error,
    "EncodingError U+2BD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BD9");
    },
    Error,
    "EncodingError U+2BD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BDA");
    },
    Error,
    "EncodingError U+2BDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BDB");
    },
    Error,
    "EncodingError U+2BDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BDC");
    },
    Error,
    "EncodingError U+2BDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BDD");
    },
    Error,
    "EncodingError U+2BDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BDE");
    },
    Error,
    "EncodingError U+2BDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BDF");
    },
    Error,
    "EncodingError U+2BDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BE0");
    },
    Error,
    "EncodingError U+2BE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BE1");
    },
    Error,
    "EncodingError U+2BE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BE2");
    },
    Error,
    "EncodingError U+2BE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BE3");
    },
    Error,
    "EncodingError U+2BE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BE4");
    },
    Error,
    "EncodingError U+2BE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BE5");
    },
    Error,
    "EncodingError U+2BE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BE6");
    },
    Error,
    "EncodingError U+2BE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BE7");
    },
    Error,
    "EncodingError U+2BE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BE8");
    },
    Error,
    "EncodingError U+2BE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BE9");
    },
    Error,
    "EncodingError U+2BE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BEA");
    },
    Error,
    "EncodingError U+2BEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BEB");
    },
    Error,
    "EncodingError U+2BEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BEC");
    },
    Error,
    "EncodingError U+2BEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BED");
    },
    Error,
    "EncodingError U+2BED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BEE");
    },
    Error,
    "EncodingError U+2BEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BEF");
    },
    Error,
    "EncodingError U+2BEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BF0");
    },
    Error,
    "EncodingError U+2BF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BF1");
    },
    Error,
    "EncodingError U+2BF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BF2");
    },
    Error,
    "EncodingError U+2BF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BF3");
    },
    Error,
    "EncodingError U+2BF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BF4");
    },
    Error,
    "EncodingError U+2BF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BF5");
    },
    Error,
    "EncodingError U+2BF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BF6");
    },
    Error,
    "EncodingError U+2BF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BF7");
    },
    Error,
    "EncodingError U+2BF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BF8");
    },
    Error,
    "EncodingError U+2BF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BF9");
    },
    Error,
    "EncodingError U+2BF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BFA");
    },
    Error,
    "EncodingError U+2BFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BFB");
    },
    Error,
    "EncodingError U+2BFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BFC");
    },
    Error,
    "EncodingError U+2BFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BFD");
    },
    Error,
    "EncodingError U+2BFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BFE");
    },
    Error,
    "EncodingError U+2BFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2BFF");
    },
    Error,
    "EncodingError U+2BFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C00");
    },
    Error,
    "EncodingError U+2C00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C01");
    },
    Error,
    "EncodingError U+2C01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C02");
    },
    Error,
    "EncodingError U+2C02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C03");
    },
    Error,
    "EncodingError U+2C03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C04");
    },
    Error,
    "EncodingError U+2C04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C05");
    },
    Error,
    "EncodingError U+2C05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C06");
    },
    Error,
    "EncodingError U+2C06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C07");
    },
    Error,
    "EncodingError U+2C07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C08");
    },
    Error,
    "EncodingError U+2C08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C09");
    },
    Error,
    "EncodingError U+2C09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C0A");
    },
    Error,
    "EncodingError U+2C0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C0B");
    },
    Error,
    "EncodingError U+2C0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C0C");
    },
    Error,
    "EncodingError U+2C0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C0D");
    },
    Error,
    "EncodingError U+2C0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C0E");
    },
    Error,
    "EncodingError U+2C0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C0F");
    },
    Error,
    "EncodingError U+2C0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C10");
    },
    Error,
    "EncodingError U+2C10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C11");
    },
    Error,
    "EncodingError U+2C11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C12");
    },
    Error,
    "EncodingError U+2C12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C13");
    },
    Error,
    "EncodingError U+2C13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C14");
    },
    Error,
    "EncodingError U+2C14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C15");
    },
    Error,
    "EncodingError U+2C15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C16");
    },
    Error,
    "EncodingError U+2C16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C17");
    },
    Error,
    "EncodingError U+2C17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C18");
    },
    Error,
    "EncodingError U+2C18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C19");
    },
    Error,
    "EncodingError U+2C19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C1A");
    },
    Error,
    "EncodingError U+2C1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C1B");
    },
    Error,
    "EncodingError U+2C1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C1C");
    },
    Error,
    "EncodingError U+2C1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C1D");
    },
    Error,
    "EncodingError U+2C1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C1E");
    },
    Error,
    "EncodingError U+2C1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C1F");
    },
    Error,
    "EncodingError U+2C1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C20");
    },
    Error,
    "EncodingError U+2C20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C21");
    },
    Error,
    "EncodingError U+2C21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C22");
    },
    Error,
    "EncodingError U+2C22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C23");
    },
    Error,
    "EncodingError U+2C23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C24");
    },
    Error,
    "EncodingError U+2C24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C25");
    },
    Error,
    "EncodingError U+2C25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C26");
    },
    Error,
    "EncodingError U+2C26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C27");
    },
    Error,
    "EncodingError U+2C27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C28");
    },
    Error,
    "EncodingError U+2C28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C29");
    },
    Error,
    "EncodingError U+2C29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C2A");
    },
    Error,
    "EncodingError U+2C2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C2B");
    },
    Error,
    "EncodingError U+2C2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C2C");
    },
    Error,
    "EncodingError U+2C2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C2D");
    },
    Error,
    "EncodingError U+2C2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C2E");
    },
    Error,
    "EncodingError U+2C2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C2F");
    },
    Error,
    "EncodingError U+2C2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C30");
    },
    Error,
    "EncodingError U+2C30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C31");
    },
    Error,
    "EncodingError U+2C31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C32");
    },
    Error,
    "EncodingError U+2C32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C33");
    },
    Error,
    "EncodingError U+2C33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C34");
    },
    Error,
    "EncodingError U+2C34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C35");
    },
    Error,
    "EncodingError U+2C35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C36");
    },
    Error,
    "EncodingError U+2C36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C37");
    },
    Error,
    "EncodingError U+2C37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C38");
    },
    Error,
    "EncodingError U+2C38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C39");
    },
    Error,
    "EncodingError U+2C39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C3A");
    },
    Error,
    "EncodingError U+2C3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C3B");
    },
    Error,
    "EncodingError U+2C3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C3C");
    },
    Error,
    "EncodingError U+2C3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C3D");
    },
    Error,
    "EncodingError U+2C3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C3E");
    },
    Error,
    "EncodingError U+2C3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C3F");
    },
    Error,
    "EncodingError U+2C3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C40");
    },
    Error,
    "EncodingError U+2C40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C41");
    },
    Error,
    "EncodingError U+2C41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C42");
    },
    Error,
    "EncodingError U+2C42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C43");
    },
    Error,
    "EncodingError U+2C43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C44");
    },
    Error,
    "EncodingError U+2C44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C45");
    },
    Error,
    "EncodingError U+2C45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C46");
    },
    Error,
    "EncodingError U+2C46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C47");
    },
    Error,
    "EncodingError U+2C47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C48");
    },
    Error,
    "EncodingError U+2C48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C49");
    },
    Error,
    "EncodingError U+2C49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C4A");
    },
    Error,
    "EncodingError U+2C4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C4B");
    },
    Error,
    "EncodingError U+2C4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C4C");
    },
    Error,
    "EncodingError U+2C4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C4D");
    },
    Error,
    "EncodingError U+2C4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C4E");
    },
    Error,
    "EncodingError U+2C4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C4F");
    },
    Error,
    "EncodingError U+2C4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C50");
    },
    Error,
    "EncodingError U+2C50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C51");
    },
    Error,
    "EncodingError U+2C51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C52");
    },
    Error,
    "EncodingError U+2C52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C53");
    },
    Error,
    "EncodingError U+2C53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C54");
    },
    Error,
    "EncodingError U+2C54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C55");
    },
    Error,
    "EncodingError U+2C55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C56");
    },
    Error,
    "EncodingError U+2C56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C57");
    },
    Error,
    "EncodingError U+2C57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C58");
    },
    Error,
    "EncodingError U+2C58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C59");
    },
    Error,
    "EncodingError U+2C59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C5A");
    },
    Error,
    "EncodingError U+2C5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C5B");
    },
    Error,
    "EncodingError U+2C5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C5C");
    },
    Error,
    "EncodingError U+2C5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C5D");
    },
    Error,
    "EncodingError U+2C5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C5E");
    },
    Error,
    "EncodingError U+2C5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C5F");
    },
    Error,
    "EncodingError U+2C5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C60");
    },
    Error,
    "EncodingError U+2C60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C61");
    },
    Error,
    "EncodingError U+2C61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C62");
    },
    Error,
    "EncodingError U+2C62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C63");
    },
    Error,
    "EncodingError U+2C63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C64");
    },
    Error,
    "EncodingError U+2C64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C65");
    },
    Error,
    "EncodingError U+2C65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C66");
    },
    Error,
    "EncodingError U+2C66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C67");
    },
    Error,
    "EncodingError U+2C67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C68");
    },
    Error,
    "EncodingError U+2C68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C69");
    },
    Error,
    "EncodingError U+2C69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C6A");
    },
    Error,
    "EncodingError U+2C6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C6B");
    },
    Error,
    "EncodingError U+2C6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C6C");
    },
    Error,
    "EncodingError U+2C6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C6D");
    },
    Error,
    "EncodingError U+2C6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C6E");
    },
    Error,
    "EncodingError U+2C6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C6F");
    },
    Error,
    "EncodingError U+2C6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C70");
    },
    Error,
    "EncodingError U+2C70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C71");
    },
    Error,
    "EncodingError U+2C71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C72");
    },
    Error,
    "EncodingError U+2C72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C73");
    },
    Error,
    "EncodingError U+2C73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C74");
    },
    Error,
    "EncodingError U+2C74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C75");
    },
    Error,
    "EncodingError U+2C75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C76");
    },
    Error,
    "EncodingError U+2C76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C77");
    },
    Error,
    "EncodingError U+2C77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C78");
    },
    Error,
    "EncodingError U+2C78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C79");
    },
    Error,
    "EncodingError U+2C79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C7A");
    },
    Error,
    "EncodingError U+2C7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C7B");
    },
    Error,
    "EncodingError U+2C7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C7C");
    },
    Error,
    "EncodingError U+2C7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C7D");
    },
    Error,
    "EncodingError U+2C7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C7E");
    },
    Error,
    "EncodingError U+2C7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C7F");
    },
    Error,
    "EncodingError U+2C7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C80");
    },
    Error,
    "EncodingError U+2C80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C81");
    },
    Error,
    "EncodingError U+2C81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C82");
    },
    Error,
    "EncodingError U+2C82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C83");
    },
    Error,
    "EncodingError U+2C83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C84");
    },
    Error,
    "EncodingError U+2C84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C85");
    },
    Error,
    "EncodingError U+2C85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C86");
    },
    Error,
    "EncodingError U+2C86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C87");
    },
    Error,
    "EncodingError U+2C87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C88");
    },
    Error,
    "EncodingError U+2C88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C89");
    },
    Error,
    "EncodingError U+2C89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C8A");
    },
    Error,
    "EncodingError U+2C8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C8B");
    },
    Error,
    "EncodingError U+2C8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C8C");
    },
    Error,
    "EncodingError U+2C8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C8D");
    },
    Error,
    "EncodingError U+2C8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C8E");
    },
    Error,
    "EncodingError U+2C8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C8F");
    },
    Error,
    "EncodingError U+2C8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C90");
    },
    Error,
    "EncodingError U+2C90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C91");
    },
    Error,
    "EncodingError U+2C91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C92");
    },
    Error,
    "EncodingError U+2C92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C93");
    },
    Error,
    "EncodingError U+2C93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C94");
    },
    Error,
    "EncodingError U+2C94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C95");
    },
    Error,
    "EncodingError U+2C95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C96");
    },
    Error,
    "EncodingError U+2C96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C97");
    },
    Error,
    "EncodingError U+2C97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C98");
    },
    Error,
    "EncodingError U+2C98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C99");
    },
    Error,
    "EncodingError U+2C99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C9A");
    },
    Error,
    "EncodingError U+2C9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C9B");
    },
    Error,
    "EncodingError U+2C9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C9C");
    },
    Error,
    "EncodingError U+2C9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C9D");
    },
    Error,
    "EncodingError U+2C9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C9E");
    },
    Error,
    "EncodingError U+2C9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2C9F");
    },
    Error,
    "EncodingError U+2C9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CA0");
    },
    Error,
    "EncodingError U+2CA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CA1");
    },
    Error,
    "EncodingError U+2CA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CA2");
    },
    Error,
    "EncodingError U+2CA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CA3");
    },
    Error,
    "EncodingError U+2CA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CA4");
    },
    Error,
    "EncodingError U+2CA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CA5");
    },
    Error,
    "EncodingError U+2CA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CA6");
    },
    Error,
    "EncodingError U+2CA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CA7");
    },
    Error,
    "EncodingError U+2CA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CA8");
    },
    Error,
    "EncodingError U+2CA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CA9");
    },
    Error,
    "EncodingError U+2CA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CAA");
    },
    Error,
    "EncodingError U+2CAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CAB");
    },
    Error,
    "EncodingError U+2CAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CAC");
    },
    Error,
    "EncodingError U+2CAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CAD");
    },
    Error,
    "EncodingError U+2CAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CAE");
    },
    Error,
    "EncodingError U+2CAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CAF");
    },
    Error,
    "EncodingError U+2CAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CB0");
    },
    Error,
    "EncodingError U+2CB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CB1");
    },
    Error,
    "EncodingError U+2CB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CB2");
    },
    Error,
    "EncodingError U+2CB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CB3");
    },
    Error,
    "EncodingError U+2CB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CB4");
    },
    Error,
    "EncodingError U+2CB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CB5");
    },
    Error,
    "EncodingError U+2CB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CB6");
    },
    Error,
    "EncodingError U+2CB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CB7");
    },
    Error,
    "EncodingError U+2CB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CB8");
    },
    Error,
    "EncodingError U+2CB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CB9");
    },
    Error,
    "EncodingError U+2CB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CBA");
    },
    Error,
    "EncodingError U+2CBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CBB");
    },
    Error,
    "EncodingError U+2CBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CBC");
    },
    Error,
    "EncodingError U+2CBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CBD");
    },
    Error,
    "EncodingError U+2CBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CBE");
    },
    Error,
    "EncodingError U+2CBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CBF");
    },
    Error,
    "EncodingError U+2CBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CC0");
    },
    Error,
    "EncodingError U+2CC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CC1");
    },
    Error,
    "EncodingError U+2CC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CC2");
    },
    Error,
    "EncodingError U+2CC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CC3");
    },
    Error,
    "EncodingError U+2CC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CC4");
    },
    Error,
    "EncodingError U+2CC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CC5");
    },
    Error,
    "EncodingError U+2CC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CC6");
    },
    Error,
    "EncodingError U+2CC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CC7");
    },
    Error,
    "EncodingError U+2CC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CC8");
    },
    Error,
    "EncodingError U+2CC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CC9");
    },
    Error,
    "EncodingError U+2CC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CCA");
    },
    Error,
    "EncodingError U+2CCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CCB");
    },
    Error,
    "EncodingError U+2CCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CCC");
    },
    Error,
    "EncodingError U+2CCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CCD");
    },
    Error,
    "EncodingError U+2CCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CCE");
    },
    Error,
    "EncodingError U+2CCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CCF");
    },
    Error,
    "EncodingError U+2CCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CD0");
    },
    Error,
    "EncodingError U+2CD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CD1");
    },
    Error,
    "EncodingError U+2CD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CD2");
    },
    Error,
    "EncodingError U+2CD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CD3");
    },
    Error,
    "EncodingError U+2CD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CD4");
    },
    Error,
    "EncodingError U+2CD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CD5");
    },
    Error,
    "EncodingError U+2CD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CD6");
    },
    Error,
    "EncodingError U+2CD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CD7");
    },
    Error,
    "EncodingError U+2CD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CD8");
    },
    Error,
    "EncodingError U+2CD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CD9");
    },
    Error,
    "EncodingError U+2CD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CDA");
    },
    Error,
    "EncodingError U+2CDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CDB");
    },
    Error,
    "EncodingError U+2CDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CDC");
    },
    Error,
    "EncodingError U+2CDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CDD");
    },
    Error,
    "EncodingError U+2CDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CDE");
    },
    Error,
    "EncodingError U+2CDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CDF");
    },
    Error,
    "EncodingError U+2CDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CE0");
    },
    Error,
    "EncodingError U+2CE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CE1");
    },
    Error,
    "EncodingError U+2CE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CE2");
    },
    Error,
    "EncodingError U+2CE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CE3");
    },
    Error,
    "EncodingError U+2CE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CE4");
    },
    Error,
    "EncodingError U+2CE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CE5");
    },
    Error,
    "EncodingError U+2CE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CE6");
    },
    Error,
    "EncodingError U+2CE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CE7");
    },
    Error,
    "EncodingError U+2CE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CE8");
    },
    Error,
    "EncodingError U+2CE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CE9");
    },
    Error,
    "EncodingError U+2CE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CEA");
    },
    Error,
    "EncodingError U+2CEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CEB");
    },
    Error,
    "EncodingError U+2CEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CEC");
    },
    Error,
    "EncodingError U+2CEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CED");
    },
    Error,
    "EncodingError U+2CED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CEE");
    },
    Error,
    "EncodingError U+2CEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CEF");
    },
    Error,
    "EncodingError U+2CEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CF0");
    },
    Error,
    "EncodingError U+2CF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CF1");
    },
    Error,
    "EncodingError U+2CF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CF2");
    },
    Error,
    "EncodingError U+2CF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CF3");
    },
    Error,
    "EncodingError U+2CF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CF4");
    },
    Error,
    "EncodingError U+2CF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CF5");
    },
    Error,
    "EncodingError U+2CF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CF6");
    },
    Error,
    "EncodingError U+2CF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CF7");
    },
    Error,
    "EncodingError U+2CF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CF8");
    },
    Error,
    "EncodingError U+2CF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CF9");
    },
    Error,
    "EncodingError U+2CF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CFA");
    },
    Error,
    "EncodingError U+2CFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CFB");
    },
    Error,
    "EncodingError U+2CFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CFC");
    },
    Error,
    "EncodingError U+2CFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CFD");
    },
    Error,
    "EncodingError U+2CFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CFE");
    },
    Error,
    "EncodingError U+2CFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2CFF");
    },
    Error,
    "EncodingError U+2CFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D00");
    },
    Error,
    "EncodingError U+2D00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D01");
    },
    Error,
    "EncodingError U+2D01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D02");
    },
    Error,
    "EncodingError U+2D02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D03");
    },
    Error,
    "EncodingError U+2D03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D04");
    },
    Error,
    "EncodingError U+2D04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D05");
    },
    Error,
    "EncodingError U+2D05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D06");
    },
    Error,
    "EncodingError U+2D06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D07");
    },
    Error,
    "EncodingError U+2D07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D08");
    },
    Error,
    "EncodingError U+2D08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D09");
    },
    Error,
    "EncodingError U+2D09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D0A");
    },
    Error,
    "EncodingError U+2D0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D0B");
    },
    Error,
    "EncodingError U+2D0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D0C");
    },
    Error,
    "EncodingError U+2D0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D0D");
    },
    Error,
    "EncodingError U+2D0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D0E");
    },
    Error,
    "EncodingError U+2D0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D0F");
    },
    Error,
    "EncodingError U+2D0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D10");
    },
    Error,
    "EncodingError U+2D10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D11");
    },
    Error,
    "EncodingError U+2D11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D12");
    },
    Error,
    "EncodingError U+2D12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D13");
    },
    Error,
    "EncodingError U+2D13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D14");
    },
    Error,
    "EncodingError U+2D14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D15");
    },
    Error,
    "EncodingError U+2D15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D16");
    },
    Error,
    "EncodingError U+2D16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D17");
    },
    Error,
    "EncodingError U+2D17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D18");
    },
    Error,
    "EncodingError U+2D18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D19");
    },
    Error,
    "EncodingError U+2D19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D1A");
    },
    Error,
    "EncodingError U+2D1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D1B");
    },
    Error,
    "EncodingError U+2D1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D1C");
    },
    Error,
    "EncodingError U+2D1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D1D");
    },
    Error,
    "EncodingError U+2D1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D1E");
    },
    Error,
    "EncodingError U+2D1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D1F");
    },
    Error,
    "EncodingError U+2D1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D20");
    },
    Error,
    "EncodingError U+2D20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D21");
    },
    Error,
    "EncodingError U+2D21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D22");
    },
    Error,
    "EncodingError U+2D22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D23");
    },
    Error,
    "EncodingError U+2D23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D24");
    },
    Error,
    "EncodingError U+2D24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D25");
    },
    Error,
    "EncodingError U+2D25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D26");
    },
    Error,
    "EncodingError U+2D26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D27");
    },
    Error,
    "EncodingError U+2D27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D28");
    },
    Error,
    "EncodingError U+2D28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D29");
    },
    Error,
    "EncodingError U+2D29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D2A");
    },
    Error,
    "EncodingError U+2D2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D2B");
    },
    Error,
    "EncodingError U+2D2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D2C");
    },
    Error,
    "EncodingError U+2D2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D2D");
    },
    Error,
    "EncodingError U+2D2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D2E");
    },
    Error,
    "EncodingError U+2D2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D2F");
    },
    Error,
    "EncodingError U+2D2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D30");
    },
    Error,
    "EncodingError U+2D30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D31");
    },
    Error,
    "EncodingError U+2D31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D32");
    },
    Error,
    "EncodingError U+2D32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D33");
    },
    Error,
    "EncodingError U+2D33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D34");
    },
    Error,
    "EncodingError U+2D34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D35");
    },
    Error,
    "EncodingError U+2D35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D36");
    },
    Error,
    "EncodingError U+2D36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D37");
    },
    Error,
    "EncodingError U+2D37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D38");
    },
    Error,
    "EncodingError U+2D38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D39");
    },
    Error,
    "EncodingError U+2D39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D3A");
    },
    Error,
    "EncodingError U+2D3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D3B");
    },
    Error,
    "EncodingError U+2D3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D3C");
    },
    Error,
    "EncodingError U+2D3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D3D");
    },
    Error,
    "EncodingError U+2D3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D3E");
    },
    Error,
    "EncodingError U+2D3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D3F");
    },
    Error,
    "EncodingError U+2D3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D40");
    },
    Error,
    "EncodingError U+2D40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D41");
    },
    Error,
    "EncodingError U+2D41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D42");
    },
    Error,
    "EncodingError U+2D42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D43");
    },
    Error,
    "EncodingError U+2D43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D44");
    },
    Error,
    "EncodingError U+2D44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D45");
    },
    Error,
    "EncodingError U+2D45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D46");
    },
    Error,
    "EncodingError U+2D46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D47");
    },
    Error,
    "EncodingError U+2D47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D48");
    },
    Error,
    "EncodingError U+2D48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D49");
    },
    Error,
    "EncodingError U+2D49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D4A");
    },
    Error,
    "EncodingError U+2D4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D4B");
    },
    Error,
    "EncodingError U+2D4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D4C");
    },
    Error,
    "EncodingError U+2D4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D4D");
    },
    Error,
    "EncodingError U+2D4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D4E");
    },
    Error,
    "EncodingError U+2D4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D4F");
    },
    Error,
    "EncodingError U+2D4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D50");
    },
    Error,
    "EncodingError U+2D50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D51");
    },
    Error,
    "EncodingError U+2D51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D52");
    },
    Error,
    "EncodingError U+2D52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D53");
    },
    Error,
    "EncodingError U+2D53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D54");
    },
    Error,
    "EncodingError U+2D54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D55");
    },
    Error,
    "EncodingError U+2D55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D56");
    },
    Error,
    "EncodingError U+2D56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D57");
    },
    Error,
    "EncodingError U+2D57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D58");
    },
    Error,
    "EncodingError U+2D58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D59");
    },
    Error,
    "EncodingError U+2D59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D5A");
    },
    Error,
    "EncodingError U+2D5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D5B");
    },
    Error,
    "EncodingError U+2D5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D5C");
    },
    Error,
    "EncodingError U+2D5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D5D");
    },
    Error,
    "EncodingError U+2D5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D5E");
    },
    Error,
    "EncodingError U+2D5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D5F");
    },
    Error,
    "EncodingError U+2D5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D60");
    },
    Error,
    "EncodingError U+2D60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D61");
    },
    Error,
    "EncodingError U+2D61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D62");
    },
    Error,
    "EncodingError U+2D62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D63");
    },
    Error,
    "EncodingError U+2D63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D64");
    },
    Error,
    "EncodingError U+2D64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D65");
    },
    Error,
    "EncodingError U+2D65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D66");
    },
    Error,
    "EncodingError U+2D66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D67");
    },
    Error,
    "EncodingError U+2D67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D68");
    },
    Error,
    "EncodingError U+2D68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D69");
    },
    Error,
    "EncodingError U+2D69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D6A");
    },
    Error,
    "EncodingError U+2D6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D6B");
    },
    Error,
    "EncodingError U+2D6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D6C");
    },
    Error,
    "EncodingError U+2D6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D6D");
    },
    Error,
    "EncodingError U+2D6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D6E");
    },
    Error,
    "EncodingError U+2D6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D6F");
    },
    Error,
    "EncodingError U+2D6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D70");
    },
    Error,
    "EncodingError U+2D70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D71");
    },
    Error,
    "EncodingError U+2D71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D72");
    },
    Error,
    "EncodingError U+2D72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D73");
    },
    Error,
    "EncodingError U+2D73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D74");
    },
    Error,
    "EncodingError U+2D74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D75");
    },
    Error,
    "EncodingError U+2D75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D76");
    },
    Error,
    "EncodingError U+2D76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D77");
    },
    Error,
    "EncodingError U+2D77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D78");
    },
    Error,
    "EncodingError U+2D78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D79");
    },
    Error,
    "EncodingError U+2D79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D7A");
    },
    Error,
    "EncodingError U+2D7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D7B");
    },
    Error,
    "EncodingError U+2D7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D7C");
    },
    Error,
    "EncodingError U+2D7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D7D");
    },
    Error,
    "EncodingError U+2D7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D7E");
    },
    Error,
    "EncodingError U+2D7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D7F");
    },
    Error,
    "EncodingError U+2D7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D80");
    },
    Error,
    "EncodingError U+2D80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D81");
    },
    Error,
    "EncodingError U+2D81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D82");
    },
    Error,
    "EncodingError U+2D82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D83");
    },
    Error,
    "EncodingError U+2D83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D84");
    },
    Error,
    "EncodingError U+2D84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D85");
    },
    Error,
    "EncodingError U+2D85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D86");
    },
    Error,
    "EncodingError U+2D86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D87");
    },
    Error,
    "EncodingError U+2D87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D88");
    },
    Error,
    "EncodingError U+2D88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D89");
    },
    Error,
    "EncodingError U+2D89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D8A");
    },
    Error,
    "EncodingError U+2D8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D8B");
    },
    Error,
    "EncodingError U+2D8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D8C");
    },
    Error,
    "EncodingError U+2D8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D8D");
    },
    Error,
    "EncodingError U+2D8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D8E");
    },
    Error,
    "EncodingError U+2D8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D8F");
    },
    Error,
    "EncodingError U+2D8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D90");
    },
    Error,
    "EncodingError U+2D90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D91");
    },
    Error,
    "EncodingError U+2D91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D92");
    },
    Error,
    "EncodingError U+2D92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D93");
    },
    Error,
    "EncodingError U+2D93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D94");
    },
    Error,
    "EncodingError U+2D94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D95");
    },
    Error,
    "EncodingError U+2D95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D96");
    },
    Error,
    "EncodingError U+2D96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D97");
    },
    Error,
    "EncodingError U+2D97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D98");
    },
    Error,
    "EncodingError U+2D98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D99");
    },
    Error,
    "EncodingError U+2D99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D9A");
    },
    Error,
    "EncodingError U+2D9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D9B");
    },
    Error,
    "EncodingError U+2D9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D9C");
    },
    Error,
    "EncodingError U+2D9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D9D");
    },
    Error,
    "EncodingError U+2D9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D9E");
    },
    Error,
    "EncodingError U+2D9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2D9F");
    },
    Error,
    "EncodingError U+2D9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DA0");
    },
    Error,
    "EncodingError U+2DA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DA1");
    },
    Error,
    "EncodingError U+2DA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DA2");
    },
    Error,
    "EncodingError U+2DA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DA3");
    },
    Error,
    "EncodingError U+2DA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DA4");
    },
    Error,
    "EncodingError U+2DA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DA5");
    },
    Error,
    "EncodingError U+2DA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DA6");
    },
    Error,
    "EncodingError U+2DA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DA7");
    },
    Error,
    "EncodingError U+2DA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DA8");
    },
    Error,
    "EncodingError U+2DA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DA9");
    },
    Error,
    "EncodingError U+2DA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DAA");
    },
    Error,
    "EncodingError U+2DAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DAB");
    },
    Error,
    "EncodingError U+2DAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DAC");
    },
    Error,
    "EncodingError U+2DAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DAD");
    },
    Error,
    "EncodingError U+2DAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DAE");
    },
    Error,
    "EncodingError U+2DAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DAF");
    },
    Error,
    "EncodingError U+2DAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DB0");
    },
    Error,
    "EncodingError U+2DB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DB1");
    },
    Error,
    "EncodingError U+2DB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DB2");
    },
    Error,
    "EncodingError U+2DB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DB3");
    },
    Error,
    "EncodingError U+2DB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DB4");
    },
    Error,
    "EncodingError U+2DB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DB5");
    },
    Error,
    "EncodingError U+2DB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DB6");
    },
    Error,
    "EncodingError U+2DB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DB7");
    },
    Error,
    "EncodingError U+2DB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DB8");
    },
    Error,
    "EncodingError U+2DB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DB9");
    },
    Error,
    "EncodingError U+2DB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DBA");
    },
    Error,
    "EncodingError U+2DBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DBB");
    },
    Error,
    "EncodingError U+2DBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DBC");
    },
    Error,
    "EncodingError U+2DBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DBD");
    },
    Error,
    "EncodingError U+2DBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DBE");
    },
    Error,
    "EncodingError U+2DBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DBF");
    },
    Error,
    "EncodingError U+2DBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DC0");
    },
    Error,
    "EncodingError U+2DC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DC1");
    },
    Error,
    "EncodingError U+2DC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DC2");
    },
    Error,
    "EncodingError U+2DC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DC3");
    },
    Error,
    "EncodingError U+2DC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DC4");
    },
    Error,
    "EncodingError U+2DC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DC5");
    },
    Error,
    "EncodingError U+2DC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DC6");
    },
    Error,
    "EncodingError U+2DC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DC7");
    },
    Error,
    "EncodingError U+2DC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DC8");
    },
    Error,
    "EncodingError U+2DC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DC9");
    },
    Error,
    "EncodingError U+2DC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DCA");
    },
    Error,
    "EncodingError U+2DCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DCB");
    },
    Error,
    "EncodingError U+2DCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DCC");
    },
    Error,
    "EncodingError U+2DCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DCD");
    },
    Error,
    "EncodingError U+2DCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DCE");
    },
    Error,
    "EncodingError U+2DCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DCF");
    },
    Error,
    "EncodingError U+2DCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DD0");
    },
    Error,
    "EncodingError U+2DD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DD1");
    },
    Error,
    "EncodingError U+2DD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DD2");
    },
    Error,
    "EncodingError U+2DD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DD3");
    },
    Error,
    "EncodingError U+2DD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DD4");
    },
    Error,
    "EncodingError U+2DD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DD5");
    },
    Error,
    "EncodingError U+2DD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DD6");
    },
    Error,
    "EncodingError U+2DD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DD7");
    },
    Error,
    "EncodingError U+2DD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DD8");
    },
    Error,
    "EncodingError U+2DD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DD9");
    },
    Error,
    "EncodingError U+2DD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DDA");
    },
    Error,
    "EncodingError U+2DDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DDB");
    },
    Error,
    "EncodingError U+2DDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DDC");
    },
    Error,
    "EncodingError U+2DDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DDD");
    },
    Error,
    "EncodingError U+2DDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DDE");
    },
    Error,
    "EncodingError U+2DDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DDF");
    },
    Error,
    "EncodingError U+2DDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DE0");
    },
    Error,
    "EncodingError U+2DE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DE1");
    },
    Error,
    "EncodingError U+2DE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DE2");
    },
    Error,
    "EncodingError U+2DE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DE3");
    },
    Error,
    "EncodingError U+2DE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DE4");
    },
    Error,
    "EncodingError U+2DE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DE5");
    },
    Error,
    "EncodingError U+2DE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DE6");
    },
    Error,
    "EncodingError U+2DE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DE7");
    },
    Error,
    "EncodingError U+2DE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DE8");
    },
    Error,
    "EncodingError U+2DE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DE9");
    },
    Error,
    "EncodingError U+2DE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DEA");
    },
    Error,
    "EncodingError U+2DEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DEB");
    },
    Error,
    "EncodingError U+2DEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DEC");
    },
    Error,
    "EncodingError U+2DEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DED");
    },
    Error,
    "EncodingError U+2DED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DEE");
    },
    Error,
    "EncodingError U+2DEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DEF");
    },
    Error,
    "EncodingError U+2DEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DF0");
    },
    Error,
    "EncodingError U+2DF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DF1");
    },
    Error,
    "EncodingError U+2DF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DF2");
    },
    Error,
    "EncodingError U+2DF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DF3");
    },
    Error,
    "EncodingError U+2DF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DF4");
    },
    Error,
    "EncodingError U+2DF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DF5");
    },
    Error,
    "EncodingError U+2DF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DF6");
    },
    Error,
    "EncodingError U+2DF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DF7");
    },
    Error,
    "EncodingError U+2DF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DF8");
    },
    Error,
    "EncodingError U+2DF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DF9");
    },
    Error,
    "EncodingError U+2DF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DFA");
    },
    Error,
    "EncodingError U+2DFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DFB");
    },
    Error,
    "EncodingError U+2DFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DFC");
    },
    Error,
    "EncodingError U+2DFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DFD");
    },
    Error,
    "EncodingError U+2DFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DFE");
    },
    Error,
    "EncodingError U+2DFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2DFF");
    },
    Error,
    "EncodingError U+2DFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E00");
    },
    Error,
    "EncodingError U+2E00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E01");
    },
    Error,
    "EncodingError U+2E01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E02");
    },
    Error,
    "EncodingError U+2E02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E03");
    },
    Error,
    "EncodingError U+2E03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E04");
    },
    Error,
    "EncodingError U+2E04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E05");
    },
    Error,
    "EncodingError U+2E05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E06");
    },
    Error,
    "EncodingError U+2E06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E07");
    },
    Error,
    "EncodingError U+2E07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E08");
    },
    Error,
    "EncodingError U+2E08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E09");
    },
    Error,
    "EncodingError U+2E09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E0A");
    },
    Error,
    "EncodingError U+2E0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E0B");
    },
    Error,
    "EncodingError U+2E0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E0C");
    },
    Error,
    "EncodingError U+2E0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E0D");
    },
    Error,
    "EncodingError U+2E0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E0E");
    },
    Error,
    "EncodingError U+2E0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E0F");
    },
    Error,
    "EncodingError U+2E0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E10");
    },
    Error,
    "EncodingError U+2E10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E11");
    },
    Error,
    "EncodingError U+2E11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E12");
    },
    Error,
    "EncodingError U+2E12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E13");
    },
    Error,
    "EncodingError U+2E13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E14");
    },
    Error,
    "EncodingError U+2E14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E15");
    },
    Error,
    "EncodingError U+2E15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E16");
    },
    Error,
    "EncodingError U+2E16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E17");
    },
    Error,
    "EncodingError U+2E17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E18");
    },
    Error,
    "EncodingError U+2E18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E19");
    },
    Error,
    "EncodingError U+2E19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E1A");
    },
    Error,
    "EncodingError U+2E1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E1B");
    },
    Error,
    "EncodingError U+2E1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E1C");
    },
    Error,
    "EncodingError U+2E1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E1D");
    },
    Error,
    "EncodingError U+2E1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E1E");
    },
    Error,
    "EncodingError U+2E1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E1F");
    },
    Error,
    "EncodingError U+2E1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E20");
    },
    Error,
    "EncodingError U+2E20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E21");
    },
    Error,
    "EncodingError U+2E21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E22");
    },
    Error,
    "EncodingError U+2E22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E23");
    },
    Error,
    "EncodingError U+2E23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E24");
    },
    Error,
    "EncodingError U+2E24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E25");
    },
    Error,
    "EncodingError U+2E25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E26");
    },
    Error,
    "EncodingError U+2E26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E27");
    },
    Error,
    "EncodingError U+2E27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E28");
    },
    Error,
    "EncodingError U+2E28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E29");
    },
    Error,
    "EncodingError U+2E29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E2A");
    },
    Error,
    "EncodingError U+2E2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E2B");
    },
    Error,
    "EncodingError U+2E2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E2C");
    },
    Error,
    "EncodingError U+2E2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E2D");
    },
    Error,
    "EncodingError U+2E2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E2E");
    },
    Error,
    "EncodingError U+2E2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E2F");
    },
    Error,
    "EncodingError U+2E2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E30");
    },
    Error,
    "EncodingError U+2E30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E31");
    },
    Error,
    "EncodingError U+2E31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E32");
    },
    Error,
    "EncodingError U+2E32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E33");
    },
    Error,
    "EncodingError U+2E33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E34");
    },
    Error,
    "EncodingError U+2E34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E35");
    },
    Error,
    "EncodingError U+2E35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E36");
    },
    Error,
    "EncodingError U+2E36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E37");
    },
    Error,
    "EncodingError U+2E37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E38");
    },
    Error,
    "EncodingError U+2E38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E39");
    },
    Error,
    "EncodingError U+2E39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E3A");
    },
    Error,
    "EncodingError U+2E3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E3B");
    },
    Error,
    "EncodingError U+2E3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E3C");
    },
    Error,
    "EncodingError U+2E3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E3D");
    },
    Error,
    "EncodingError U+2E3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E3E");
    },
    Error,
    "EncodingError U+2E3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E3F");
    },
    Error,
    "EncodingError U+2E3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E40");
    },
    Error,
    "EncodingError U+2E40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E41");
    },
    Error,
    "EncodingError U+2E41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E42");
    },
    Error,
    "EncodingError U+2E42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E43");
    },
    Error,
    "EncodingError U+2E43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E44");
    },
    Error,
    "EncodingError U+2E44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E45");
    },
    Error,
    "EncodingError U+2E45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E46");
    },
    Error,
    "EncodingError U+2E46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E47");
    },
    Error,
    "EncodingError U+2E47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E48");
    },
    Error,
    "EncodingError U+2E48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E49");
    },
    Error,
    "EncodingError U+2E49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E4A");
    },
    Error,
    "EncodingError U+2E4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E4B");
    },
    Error,
    "EncodingError U+2E4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E4C");
    },
    Error,
    "EncodingError U+2E4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E4D");
    },
    Error,
    "EncodingError U+2E4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E4E");
    },
    Error,
    "EncodingError U+2E4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E4F");
    },
    Error,
    "EncodingError U+2E4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E50");
    },
    Error,
    "EncodingError U+2E50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E51");
    },
    Error,
    "EncodingError U+2E51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E52");
    },
    Error,
    "EncodingError U+2E52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E53");
    },
    Error,
    "EncodingError U+2E53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E54");
    },
    Error,
    "EncodingError U+2E54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E55");
    },
    Error,
    "EncodingError U+2E55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E56");
    },
    Error,
    "EncodingError U+2E56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E57");
    },
    Error,
    "EncodingError U+2E57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E58");
    },
    Error,
    "EncodingError U+2E58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E59");
    },
    Error,
    "EncodingError U+2E59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E5A");
    },
    Error,
    "EncodingError U+2E5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E5B");
    },
    Error,
    "EncodingError U+2E5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E5C");
    },
    Error,
    "EncodingError U+2E5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E5D");
    },
    Error,
    "EncodingError U+2E5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E5E");
    },
    Error,
    "EncodingError U+2E5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E5F");
    },
    Error,
    "EncodingError U+2E5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E60");
    },
    Error,
    "EncodingError U+2E60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E61");
    },
    Error,
    "EncodingError U+2E61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E62");
    },
    Error,
    "EncodingError U+2E62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E63");
    },
    Error,
    "EncodingError U+2E63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E64");
    },
    Error,
    "EncodingError U+2E64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E65");
    },
    Error,
    "EncodingError U+2E65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E66");
    },
    Error,
    "EncodingError U+2E66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E67");
    },
    Error,
    "EncodingError U+2E67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E68");
    },
    Error,
    "EncodingError U+2E68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E69");
    },
    Error,
    "EncodingError U+2E69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E6A");
    },
    Error,
    "EncodingError U+2E6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E6B");
    },
    Error,
    "EncodingError U+2E6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E6C");
    },
    Error,
    "EncodingError U+2E6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E6D");
    },
    Error,
    "EncodingError U+2E6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E6E");
    },
    Error,
    "EncodingError U+2E6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E6F");
    },
    Error,
    "EncodingError U+2E6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E70");
    },
    Error,
    "EncodingError U+2E70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E71");
    },
    Error,
    "EncodingError U+2E71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E72");
    },
    Error,
    "EncodingError U+2E72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E73");
    },
    Error,
    "EncodingError U+2E73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E74");
    },
    Error,
    "EncodingError U+2E74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E75");
    },
    Error,
    "EncodingError U+2E75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E76");
    },
    Error,
    "EncodingError U+2E76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E77");
    },
    Error,
    "EncodingError U+2E77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E78");
    },
    Error,
    "EncodingError U+2E78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E79");
    },
    Error,
    "EncodingError U+2E79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E7A");
    },
    Error,
    "EncodingError U+2E7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E7B");
    },
    Error,
    "EncodingError U+2E7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E7C");
    },
    Error,
    "EncodingError U+2E7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E7D");
    },
    Error,
    "EncodingError U+2E7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E7E");
    },
    Error,
    "EncodingError U+2E7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E7F");
    },
    Error,
    "EncodingError U+2E7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E80");
    },
    Error,
    "EncodingError U+2E80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E81");
    },
    Error,
    "EncodingError U+2E81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E82");
    },
    Error,
    "EncodingError U+2E82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E83");
    },
    Error,
    "EncodingError U+2E83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E84");
    },
    Error,
    "EncodingError U+2E84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E85");
    },
    Error,
    "EncodingError U+2E85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E86");
    },
    Error,
    "EncodingError U+2E86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E87");
    },
    Error,
    "EncodingError U+2E87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E88");
    },
    Error,
    "EncodingError U+2E88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E89");
    },
    Error,
    "EncodingError U+2E89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E8A");
    },
    Error,
    "EncodingError U+2E8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E8B");
    },
    Error,
    "EncodingError U+2E8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E8C");
    },
    Error,
    "EncodingError U+2E8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E8D");
    },
    Error,
    "EncodingError U+2E8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E8E");
    },
    Error,
    "EncodingError U+2E8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E8F");
    },
    Error,
    "EncodingError U+2E8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E90");
    },
    Error,
    "EncodingError U+2E90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E91");
    },
    Error,
    "EncodingError U+2E91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E92");
    },
    Error,
    "EncodingError U+2E92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E93");
    },
    Error,
    "EncodingError U+2E93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E94");
    },
    Error,
    "EncodingError U+2E94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E95");
    },
    Error,
    "EncodingError U+2E95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E96");
    },
    Error,
    "EncodingError U+2E96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E97");
    },
    Error,
    "EncodingError U+2E97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E98");
    },
    Error,
    "EncodingError U+2E98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E99");
    },
    Error,
    "EncodingError U+2E99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E9A");
    },
    Error,
    "EncodingError U+2E9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E9B");
    },
    Error,
    "EncodingError U+2E9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E9C");
    },
    Error,
    "EncodingError U+2E9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E9D");
    },
    Error,
    "EncodingError U+2E9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E9E");
    },
    Error,
    "EncodingError U+2E9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2E9F");
    },
    Error,
    "EncodingError U+2E9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EA0");
    },
    Error,
    "EncodingError U+2EA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EA1");
    },
    Error,
    "EncodingError U+2EA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EA2");
    },
    Error,
    "EncodingError U+2EA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EA3");
    },
    Error,
    "EncodingError U+2EA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EA4");
    },
    Error,
    "EncodingError U+2EA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EA5");
    },
    Error,
    "EncodingError U+2EA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EA6");
    },
    Error,
    "EncodingError U+2EA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EA7");
    },
    Error,
    "EncodingError U+2EA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EA8");
    },
    Error,
    "EncodingError U+2EA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EA9");
    },
    Error,
    "EncodingError U+2EA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EAA");
    },
    Error,
    "EncodingError U+2EAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EAB");
    },
    Error,
    "EncodingError U+2EAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EAC");
    },
    Error,
    "EncodingError U+2EAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EAD");
    },
    Error,
    "EncodingError U+2EAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EAE");
    },
    Error,
    "EncodingError U+2EAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EAF");
    },
    Error,
    "EncodingError U+2EAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EB0");
    },
    Error,
    "EncodingError U+2EB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EB1");
    },
    Error,
    "EncodingError U+2EB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EB2");
    },
    Error,
    "EncodingError U+2EB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EB3");
    },
    Error,
    "EncodingError U+2EB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EB4");
    },
    Error,
    "EncodingError U+2EB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EB5");
    },
    Error,
    "EncodingError U+2EB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EB6");
    },
    Error,
    "EncodingError U+2EB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EB7");
    },
    Error,
    "EncodingError U+2EB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EB8");
    },
    Error,
    "EncodingError U+2EB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EB9");
    },
    Error,
    "EncodingError U+2EB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EBA");
    },
    Error,
    "EncodingError U+2EBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EBB");
    },
    Error,
    "EncodingError U+2EBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EBC");
    },
    Error,
    "EncodingError U+2EBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EBD");
    },
    Error,
    "EncodingError U+2EBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EBE");
    },
    Error,
    "EncodingError U+2EBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EBF");
    },
    Error,
    "EncodingError U+2EBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EC0");
    },
    Error,
    "EncodingError U+2EC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EC1");
    },
    Error,
    "EncodingError U+2EC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EC2");
    },
    Error,
    "EncodingError U+2EC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EC3");
    },
    Error,
    "EncodingError U+2EC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EC4");
    },
    Error,
    "EncodingError U+2EC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EC5");
    },
    Error,
    "EncodingError U+2EC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EC6");
    },
    Error,
    "EncodingError U+2EC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EC7");
    },
    Error,
    "EncodingError U+2EC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EC8");
    },
    Error,
    "EncodingError U+2EC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EC9");
    },
    Error,
    "EncodingError U+2EC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ECA");
    },
    Error,
    "EncodingError U+2ECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ECB");
    },
    Error,
    "EncodingError U+2ECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ECC");
    },
    Error,
    "EncodingError U+2ECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ECD");
    },
    Error,
    "EncodingError U+2ECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ECE");
    },
    Error,
    "EncodingError U+2ECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ECF");
    },
    Error,
    "EncodingError U+2ECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ED0");
    },
    Error,
    "EncodingError U+2ED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ED1");
    },
    Error,
    "EncodingError U+2ED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ED2");
    },
    Error,
    "EncodingError U+2ED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ED3");
    },
    Error,
    "EncodingError U+2ED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ED4");
    },
    Error,
    "EncodingError U+2ED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ED5");
    },
    Error,
    "EncodingError U+2ED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ED6");
    },
    Error,
    "EncodingError U+2ED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ED7");
    },
    Error,
    "EncodingError U+2ED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ED8");
    },
    Error,
    "EncodingError U+2ED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2ED9");
    },
    Error,
    "EncodingError U+2ED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EDA");
    },
    Error,
    "EncodingError U+2EDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EDB");
    },
    Error,
    "EncodingError U+2EDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EDC");
    },
    Error,
    "EncodingError U+2EDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EDD");
    },
    Error,
    "EncodingError U+2EDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EDE");
    },
    Error,
    "EncodingError U+2EDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EDF");
    },
    Error,
    "EncodingError U+2EDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EE0");
    },
    Error,
    "EncodingError U+2EE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EE1");
    },
    Error,
    "EncodingError U+2EE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EE2");
    },
    Error,
    "EncodingError U+2EE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EE3");
    },
    Error,
    "EncodingError U+2EE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EE4");
    },
    Error,
    "EncodingError U+2EE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EE5");
    },
    Error,
    "EncodingError U+2EE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EE6");
    },
    Error,
    "EncodingError U+2EE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EE7");
    },
    Error,
    "EncodingError U+2EE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EE8");
    },
    Error,
    "EncodingError U+2EE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EE9");
    },
    Error,
    "EncodingError U+2EE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EEA");
    },
    Error,
    "EncodingError U+2EEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EEB");
    },
    Error,
    "EncodingError U+2EEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EEC");
    },
    Error,
    "EncodingError U+2EEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EED");
    },
    Error,
    "EncodingError U+2EED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EEE");
    },
    Error,
    "EncodingError U+2EEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EEF");
    },
    Error,
    "EncodingError U+2EEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EF0");
    },
    Error,
    "EncodingError U+2EF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EF1");
    },
    Error,
    "EncodingError U+2EF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EF2");
    },
    Error,
    "EncodingError U+2EF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EF3");
    },
    Error,
    "EncodingError U+2EF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EF4");
    },
    Error,
    "EncodingError U+2EF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EF5");
    },
    Error,
    "EncodingError U+2EF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EF6");
    },
    Error,
    "EncodingError U+2EF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EF7");
    },
    Error,
    "EncodingError U+2EF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EF8");
    },
    Error,
    "EncodingError U+2EF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EF9");
    },
    Error,
    "EncodingError U+2EF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EFA");
    },
    Error,
    "EncodingError U+2EFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EFB");
    },
    Error,
    "EncodingError U+2EFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EFC");
    },
    Error,
    "EncodingError U+2EFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EFD");
    },
    Error,
    "EncodingError U+2EFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EFE");
    },
    Error,
    "EncodingError U+2EFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2EFF");
    },
    Error,
    "EncodingError U+2EFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F00");
    },
    Error,
    "EncodingError U+2F00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F01");
    },
    Error,
    "EncodingError U+2F01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F02");
    },
    Error,
    "EncodingError U+2F02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F03");
    },
    Error,
    "EncodingError U+2F03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F04");
    },
    Error,
    "EncodingError U+2F04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F05");
    },
    Error,
    "EncodingError U+2F05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F06");
    },
    Error,
    "EncodingError U+2F06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F07");
    },
    Error,
    "EncodingError U+2F07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F08");
    },
    Error,
    "EncodingError U+2F08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F09");
    },
    Error,
    "EncodingError U+2F09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F0A");
    },
    Error,
    "EncodingError U+2F0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F0B");
    },
    Error,
    "EncodingError U+2F0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F0C");
    },
    Error,
    "EncodingError U+2F0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F0D");
    },
    Error,
    "EncodingError U+2F0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F0E");
    },
    Error,
    "EncodingError U+2F0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F0F");
    },
    Error,
    "EncodingError U+2F0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F10");
    },
    Error,
    "EncodingError U+2F10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F11");
    },
    Error,
    "EncodingError U+2F11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F12");
    },
    Error,
    "EncodingError U+2F12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F13");
    },
    Error,
    "EncodingError U+2F13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F14");
    },
    Error,
    "EncodingError U+2F14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F15");
    },
    Error,
    "EncodingError U+2F15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F16");
    },
    Error,
    "EncodingError U+2F16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F17");
    },
    Error,
    "EncodingError U+2F17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F18");
    },
    Error,
    "EncodingError U+2F18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F19");
    },
    Error,
    "EncodingError U+2F19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F1A");
    },
    Error,
    "EncodingError U+2F1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F1B");
    },
    Error,
    "EncodingError U+2F1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F1C");
    },
    Error,
    "EncodingError U+2F1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F1D");
    },
    Error,
    "EncodingError U+2F1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F1E");
    },
    Error,
    "EncodingError U+2F1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F1F");
    },
    Error,
    "EncodingError U+2F1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F20");
    },
    Error,
    "EncodingError U+2F20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F21");
    },
    Error,
    "EncodingError U+2F21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F22");
    },
    Error,
    "EncodingError U+2F22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F23");
    },
    Error,
    "EncodingError U+2F23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F24");
    },
    Error,
    "EncodingError U+2F24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F25");
    },
    Error,
    "EncodingError U+2F25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F26");
    },
    Error,
    "EncodingError U+2F26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F27");
    },
    Error,
    "EncodingError U+2F27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F28");
    },
    Error,
    "EncodingError U+2F28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F29");
    },
    Error,
    "EncodingError U+2F29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F2A");
    },
    Error,
    "EncodingError U+2F2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F2B");
    },
    Error,
    "EncodingError U+2F2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F2C");
    },
    Error,
    "EncodingError U+2F2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F2D");
    },
    Error,
    "EncodingError U+2F2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F2E");
    },
    Error,
    "EncodingError U+2F2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F2F");
    },
    Error,
    "EncodingError U+2F2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F30");
    },
    Error,
    "EncodingError U+2F30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F31");
    },
    Error,
    "EncodingError U+2F31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F32");
    },
    Error,
    "EncodingError U+2F32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F33");
    },
    Error,
    "EncodingError U+2F33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F34");
    },
    Error,
    "EncodingError U+2F34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F35");
    },
    Error,
    "EncodingError U+2F35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F36");
    },
    Error,
    "EncodingError U+2F36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F37");
    },
    Error,
    "EncodingError U+2F37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F38");
    },
    Error,
    "EncodingError U+2F38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F39");
    },
    Error,
    "EncodingError U+2F39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F3A");
    },
    Error,
    "EncodingError U+2F3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F3B");
    },
    Error,
    "EncodingError U+2F3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F3C");
    },
    Error,
    "EncodingError U+2F3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F3D");
    },
    Error,
    "EncodingError U+2F3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F3E");
    },
    Error,
    "EncodingError U+2F3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F3F");
    },
    Error,
    "EncodingError U+2F3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F40");
    },
    Error,
    "EncodingError U+2F40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F41");
    },
    Error,
    "EncodingError U+2F41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F42");
    },
    Error,
    "EncodingError U+2F42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F43");
    },
    Error,
    "EncodingError U+2F43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F44");
    },
    Error,
    "EncodingError U+2F44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F45");
    },
    Error,
    "EncodingError U+2F45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F46");
    },
    Error,
    "EncodingError U+2F46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F47");
    },
    Error,
    "EncodingError U+2F47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F48");
    },
    Error,
    "EncodingError U+2F48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F49");
    },
    Error,
    "EncodingError U+2F49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F4A");
    },
    Error,
    "EncodingError U+2F4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F4B");
    },
    Error,
    "EncodingError U+2F4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F4C");
    },
    Error,
    "EncodingError U+2F4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F4D");
    },
    Error,
    "EncodingError U+2F4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F4E");
    },
    Error,
    "EncodingError U+2F4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F4F");
    },
    Error,
    "EncodingError U+2F4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F50");
    },
    Error,
    "EncodingError U+2F50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F51");
    },
    Error,
    "EncodingError U+2F51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F52");
    },
    Error,
    "EncodingError U+2F52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F53");
    },
    Error,
    "EncodingError U+2F53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F54");
    },
    Error,
    "EncodingError U+2F54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F55");
    },
    Error,
    "EncodingError U+2F55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F56");
    },
    Error,
    "EncodingError U+2F56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F57");
    },
    Error,
    "EncodingError U+2F57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F58");
    },
    Error,
    "EncodingError U+2F58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F59");
    },
    Error,
    "EncodingError U+2F59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F5A");
    },
    Error,
    "EncodingError U+2F5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F5B");
    },
    Error,
    "EncodingError U+2F5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F5C");
    },
    Error,
    "EncodingError U+2F5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F5D");
    },
    Error,
    "EncodingError U+2F5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F5E");
    },
    Error,
    "EncodingError U+2F5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F5F");
    },
    Error,
    "EncodingError U+2F5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F60");
    },
    Error,
    "EncodingError U+2F60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F61");
    },
    Error,
    "EncodingError U+2F61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F62");
    },
    Error,
    "EncodingError U+2F62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F63");
    },
    Error,
    "EncodingError U+2F63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F64");
    },
    Error,
    "EncodingError U+2F64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F65");
    },
    Error,
    "EncodingError U+2F65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F66");
    },
    Error,
    "EncodingError U+2F66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F67");
    },
    Error,
    "EncodingError U+2F67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F68");
    },
    Error,
    "EncodingError U+2F68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F69");
    },
    Error,
    "EncodingError U+2F69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F6A");
    },
    Error,
    "EncodingError U+2F6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F6B");
    },
    Error,
    "EncodingError U+2F6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F6C");
    },
    Error,
    "EncodingError U+2F6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F6D");
    },
    Error,
    "EncodingError U+2F6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F6E");
    },
    Error,
    "EncodingError U+2F6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F6F");
    },
    Error,
    "EncodingError U+2F6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F70");
    },
    Error,
    "EncodingError U+2F70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F71");
    },
    Error,
    "EncodingError U+2F71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F72");
    },
    Error,
    "EncodingError U+2F72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F73");
    },
    Error,
    "EncodingError U+2F73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F74");
    },
    Error,
    "EncodingError U+2F74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F75");
    },
    Error,
    "EncodingError U+2F75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F76");
    },
    Error,
    "EncodingError U+2F76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F77");
    },
    Error,
    "EncodingError U+2F77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F78");
    },
    Error,
    "EncodingError U+2F78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F79");
    },
    Error,
    "EncodingError U+2F79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F7A");
    },
    Error,
    "EncodingError U+2F7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F7B");
    },
    Error,
    "EncodingError U+2F7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F7C");
    },
    Error,
    "EncodingError U+2F7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F7D");
    },
    Error,
    "EncodingError U+2F7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F7E");
    },
    Error,
    "EncodingError U+2F7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F7F");
    },
    Error,
    "EncodingError U+2F7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F80");
    },
    Error,
    "EncodingError U+2F80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F81");
    },
    Error,
    "EncodingError U+2F81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F82");
    },
    Error,
    "EncodingError U+2F82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F83");
    },
    Error,
    "EncodingError U+2F83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F84");
    },
    Error,
    "EncodingError U+2F84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F85");
    },
    Error,
    "EncodingError U+2F85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F86");
    },
    Error,
    "EncodingError U+2F86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F87");
    },
    Error,
    "EncodingError U+2F87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F88");
    },
    Error,
    "EncodingError U+2F88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F89");
    },
    Error,
    "EncodingError U+2F89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F8A");
    },
    Error,
    "EncodingError U+2F8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F8B");
    },
    Error,
    "EncodingError U+2F8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F8C");
    },
    Error,
    "EncodingError U+2F8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F8D");
    },
    Error,
    "EncodingError U+2F8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F8E");
    },
    Error,
    "EncodingError U+2F8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F8F");
    },
    Error,
    "EncodingError U+2F8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F90");
    },
    Error,
    "EncodingError U+2F90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F91");
    },
    Error,
    "EncodingError U+2F91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F92");
    },
    Error,
    "EncodingError U+2F92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F93");
    },
    Error,
    "EncodingError U+2F93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F94");
    },
    Error,
    "EncodingError U+2F94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F95");
    },
    Error,
    "EncodingError U+2F95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F96");
    },
    Error,
    "EncodingError U+2F96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F97");
    },
    Error,
    "EncodingError U+2F97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F98");
    },
    Error,
    "EncodingError U+2F98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F99");
    },
    Error,
    "EncodingError U+2F99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F9A");
    },
    Error,
    "EncodingError U+2F9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F9B");
    },
    Error,
    "EncodingError U+2F9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F9C");
    },
    Error,
    "EncodingError U+2F9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F9D");
    },
    Error,
    "EncodingError U+2F9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F9E");
    },
    Error,
    "EncodingError U+2F9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2F9F");
    },
    Error,
    "EncodingError U+2F9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FA0");
    },
    Error,
    "EncodingError U+2FA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FA1");
    },
    Error,
    "EncodingError U+2FA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FA2");
    },
    Error,
    "EncodingError U+2FA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FA3");
    },
    Error,
    "EncodingError U+2FA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FA4");
    },
    Error,
    "EncodingError U+2FA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FA5");
    },
    Error,
    "EncodingError U+2FA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FA6");
    },
    Error,
    "EncodingError U+2FA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FA7");
    },
    Error,
    "EncodingError U+2FA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FA8");
    },
    Error,
    "EncodingError U+2FA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FA9");
    },
    Error,
    "EncodingError U+2FA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FAA");
    },
    Error,
    "EncodingError U+2FAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FAB");
    },
    Error,
    "EncodingError U+2FAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FAC");
    },
    Error,
    "EncodingError U+2FAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FAD");
    },
    Error,
    "EncodingError U+2FAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FAE");
    },
    Error,
    "EncodingError U+2FAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FAF");
    },
    Error,
    "EncodingError U+2FAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FB0");
    },
    Error,
    "EncodingError U+2FB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FB1");
    },
    Error,
    "EncodingError U+2FB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FB2");
    },
    Error,
    "EncodingError U+2FB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FB3");
    },
    Error,
    "EncodingError U+2FB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FB4");
    },
    Error,
    "EncodingError U+2FB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FB5");
    },
    Error,
    "EncodingError U+2FB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FB6");
    },
    Error,
    "EncodingError U+2FB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FB7");
    },
    Error,
    "EncodingError U+2FB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FB8");
    },
    Error,
    "EncodingError U+2FB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FB9");
    },
    Error,
    "EncodingError U+2FB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FBA");
    },
    Error,
    "EncodingError U+2FBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FBB");
    },
    Error,
    "EncodingError U+2FBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FBC");
    },
    Error,
    "EncodingError U+2FBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FBD");
    },
    Error,
    "EncodingError U+2FBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FBE");
    },
    Error,
    "EncodingError U+2FBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FBF");
    },
    Error,
    "EncodingError U+2FBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FC0");
    },
    Error,
    "EncodingError U+2FC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FC1");
    },
    Error,
    "EncodingError U+2FC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FC2");
    },
    Error,
    "EncodingError U+2FC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FC3");
    },
    Error,
    "EncodingError U+2FC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FC4");
    },
    Error,
    "EncodingError U+2FC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FC5");
    },
    Error,
    "EncodingError U+2FC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FC6");
    },
    Error,
    "EncodingError U+2FC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FC7");
    },
    Error,
    "EncodingError U+2FC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FC8");
    },
    Error,
    "EncodingError U+2FC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FC9");
    },
    Error,
    "EncodingError U+2FC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FCA");
    },
    Error,
    "EncodingError U+2FCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FCB");
    },
    Error,
    "EncodingError U+2FCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FCC");
    },
    Error,
    "EncodingError U+2FCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FCD");
    },
    Error,
    "EncodingError U+2FCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FCE");
    },
    Error,
    "EncodingError U+2FCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FCF");
    },
    Error,
    "EncodingError U+2FCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FD0");
    },
    Error,
    "EncodingError U+2FD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FD1");
    },
    Error,
    "EncodingError U+2FD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FD2");
    },
    Error,
    "EncodingError U+2FD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FD3");
    },
    Error,
    "EncodingError U+2FD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FD4");
    },
    Error,
    "EncodingError U+2FD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FD5");
    },
    Error,
    "EncodingError U+2FD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FD6");
    },
    Error,
    "EncodingError U+2FD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FD7");
    },
    Error,
    "EncodingError U+2FD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FD8");
    },
    Error,
    "EncodingError U+2FD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FD9");
    },
    Error,
    "EncodingError U+2FD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FDA");
    },
    Error,
    "EncodingError U+2FDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FDB");
    },
    Error,
    "EncodingError U+2FDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FDC");
    },
    Error,
    "EncodingError U+2FDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FDD");
    },
    Error,
    "EncodingError U+2FDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FDE");
    },
    Error,
    "EncodingError U+2FDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FDF");
    },
    Error,
    "EncodingError U+2FDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FE0");
    },
    Error,
    "EncodingError U+2FE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FE1");
    },
    Error,
    "EncodingError U+2FE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FE2");
    },
    Error,
    "EncodingError U+2FE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FE3");
    },
    Error,
    "EncodingError U+2FE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FE4");
    },
    Error,
    "EncodingError U+2FE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FE5");
    },
    Error,
    "EncodingError U+2FE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FE6");
    },
    Error,
    "EncodingError U+2FE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FE7");
    },
    Error,
    "EncodingError U+2FE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FE8");
    },
    Error,
    "EncodingError U+2FE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FE9");
    },
    Error,
    "EncodingError U+2FE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FEA");
    },
    Error,
    "EncodingError U+2FEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FEB");
    },
    Error,
    "EncodingError U+2FEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FEC");
    },
    Error,
    "EncodingError U+2FEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FED");
    },
    Error,
    "EncodingError U+2FED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FEE");
    },
    Error,
    "EncodingError U+2FEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FEF");
    },
    Error,
    "EncodingError U+2FEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FF0");
    },
    Error,
    "EncodingError U+2FF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FF1");
    },
    Error,
    "EncodingError U+2FF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FF2");
    },
    Error,
    "EncodingError U+2FF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FF3");
    },
    Error,
    "EncodingError U+2FF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FF4");
    },
    Error,
    "EncodingError U+2FF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FF5");
    },
    Error,
    "EncodingError U+2FF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FF6");
    },
    Error,
    "EncodingError U+2FF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FF7");
    },
    Error,
    "EncodingError U+2FF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FF8");
    },
    Error,
    "EncodingError U+2FF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FF9");
    },
    Error,
    "EncodingError U+2FF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FFA");
    },
    Error,
    "EncodingError U+2FFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FFB");
    },
    Error,
    "EncodingError U+2FFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FFC");
    },
    Error,
    "EncodingError U+2FFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FFD");
    },
    Error,
    "EncodingError U+2FFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FFE");
    },
    Error,
    "EncodingError U+2FFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\u2FFF");
    },
    Error,
    "EncodingError U+2FFF",
  );

  assertStrictEquals(r, true);
});
