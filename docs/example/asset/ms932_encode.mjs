import { Ms932 } from "https://www.unpkg.com/@i-xi-dev/ms932-encoder@2.0.22/esm/mod.js";
// https://cdn.skypack.dev/@i-xi-dev/ms932-encoder@2.0.22

import { bytesToString, decodeMs932 } from "./lib.mjs";

const i1 = document.getElementById("i1");
const ip11 = document.getElementById("ip11");
const ip12 = document.getElementById("ip12");
const a1 = document.getElementById("a1");
const o1 = document.getElementById("o1");
const o2 = document.getElementById("o2");

a1.addEventListener("click", () => {
  const i = i1.value;
  const options = {
    fatal: (ip11.checked === true),
    replacementChar: ip12.value,
  };

  try {
    const encoder = new Ms932.Encoder(options);

    const bytes = encoder.encode(i);
    o1.value = bytesToString(bytes);
    o2.value = decodeMs932(bytes);
  } catch {
    o1.value = "error";
    o2.value = "error";
  }
});

document.querySelector("*.progress").hidden = true;
