import { build, emptyDir } from "https://deno.land/x/dnt@0.23.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: "dev",
  },
  scriptModule: false,
  rootTestDir: "./tests",
  package: {
    name: "@i-xi-dev/ms932-encoder",
    version: "2.0.6",
    description:
      "A JavaScript Windows-31J encoder, implements Shift_JIS encoder defined in WHATWG Encoding Standard.",
    license: "MIT",
    author: "i-xi-dev",
    homepage: "https://github.com/i-xi-dev/ms932-encoder.es#readme",
    keywords: [
      "ms932",
      "shift_jis",
      "windows-31j",
      "textencoder",
      "textencoderstream",
      "browser",
      "deno",
      "nodejs",
      "zero-dependency",
    ],
    repository: {
      type: "git",
      url: "git+https://github.com/i-xi-dev/ms932-encoder.es.git",
    },
    bugs: {
      url: "https://github.com/i-xi-dev/ms932-encoder.es/issues",
    },
    publishConfig: {
      access: "public",
    },
    files: [
      "esm",
      "types",
    ],
  },
  importMap: "./import_map.json",
});

Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
