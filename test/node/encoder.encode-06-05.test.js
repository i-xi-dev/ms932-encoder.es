import assert from "node:assert";
import { Ms932Encoder } from "../../node/index.mjs";

describe("Ms932Encoder.prototype.encode 6", () => {

  it("encode(string) - U+5400-U+57FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u5400")}, {name:"Error",message:"EncodingError U+5400"});
r = r && ([...ms932Encoder.encode("吁")].join(",") === "153,220"); // U+5401
assert.throws(() => {ms932Encoder.encode("\u5402")}, {name:"Error",message:"EncodingError U+5402"});
r = r && ([...ms932Encoder.encode("吃各")].join(",") === "139,104,138,101"); // U+5403
assert.throws(() => {ms932Encoder.encode("\u5405")}, {name:"Error",message:"EncodingError U+5405"});
assert.throws(() => {ms932Encoder.encode("\u5406")}, {name:"Error",message:"EncodingError U+5406"});
assert.throws(() => {ms932Encoder.encode("\u5407")}, {name:"Error",message:"EncodingError U+5407"});
r = r && ([...ms932Encoder.encode("合吉吊吋同名后吏吐向")].join(",") === "141,135,139,103,146,221,137,68,147,175,150,188,141,64,151,153,147,102,140,252"); // U+5408
assert.throws(() => {ms932Encoder.encode("\u5412")}, {name:"Error",message:"EncodingError U+5412"});
assert.throws(() => {ms932Encoder.encode("\u5413")}, {name:"Error",message:"EncodingError U+5413"});
assert.throws(() => {ms932Encoder.encode("\u5414")}, {name:"Error",message:"EncodingError U+5414"});
assert.throws(() => {ms932Encoder.encode("\u5415")}, {name:"Error",message:"EncodingError U+5415"});
assert.throws(() => {ms932Encoder.encode("\u5416")}, {name:"Error",message:"EncodingError U+5416"});
assert.throws(() => {ms932Encoder.encode("\u5417")}, {name:"Error",message:"EncodingError U+5417"});
assert.throws(() => {ms932Encoder.encode("\u5418")}, {name:"Error",message:"EncodingError U+5418"});
assert.throws(() => {ms932Encoder.encode("\u5419")}, {name:"Error",message:"EncodingError U+5419"});
assert.throws(() => {ms932Encoder.encode("\u541A")}, {name:"Error",message:"EncodingError U+541A"});
r = r && ([...ms932Encoder.encode("君")].join(",") === "140,78"); // U+541B
assert.throws(() => {ms932Encoder.encode("\u541C")}, {name:"Error",message:"EncodingError U+541C"});
r = r && ([...ms932Encoder.encode("吝")].join(",") === "153,229"); // U+541D
assert.throws(() => {ms932Encoder.encode("\u541E")}, {name:"Error",message:"EncodingError U+541E"});
r = r && ([...ms932Encoder.encode("吟吠")].join(",") === "139,225,150,105"); // U+541F
assert.throws(() => {ms932Encoder.encode("\u5421")}, {name:"Error",message:"EncodingError U+5421"});
assert.throws(() => {ms932Encoder.encode("\u5422")}, {name:"Error",message:"EncodingError U+5422"});
assert.throws(() => {ms932Encoder.encode("\u5423")}, {name:"Error",message:"EncodingError U+5423"});
assert.throws(() => {ms932Encoder.encode("\u5424")}, {name:"Error",message:"EncodingError U+5424"});
assert.throws(() => {ms932Encoder.encode("\u5425")}, {name:"Error",message:"EncodingError U+5425"});
r = r && ([...ms932Encoder.encode("否")].join(",") === "148,219"); // U+5426
assert.throws(() => {ms932Encoder.encode("\u5427")}, {name:"Error",message:"EncodingError U+5427"});
assert.throws(() => {ms932Encoder.encode("\u5428")}, {name:"Error",message:"EncodingError U+5428"});
r = r && ([...ms932Encoder.encode("吩")].join(",") === "153,228"); // U+5429
assert.throws(() => {ms932Encoder.encode("\u542A")}, {name:"Error",message:"EncodingError U+542A"});
r = r && ([...ms932Encoder.encode("含听吭吮")].join(",") === "138,220,153,223,153,224,153,226"); // U+542B
assert.throws(() => {ms932Encoder.encode("\u542F")}, {name:"Error",message:"EncodingError U+542F"});
assert.throws(() => {ms932Encoder.encode("\u5430")}, {name:"Error",message:"EncodingError U+5430"});
assert.throws(() => {ms932Encoder.encode("\u5431")}, {name:"Error",message:"EncodingError U+5431"});
assert.throws(() => {ms932Encoder.encode("\u5432")}, {name:"Error",message:"EncodingError U+5432"});
assert.throws(() => {ms932Encoder.encode("\u5433")}, {name:"Error",message:"EncodingError U+5433"});
assert.throws(() => {ms932Encoder.encode("\u5434")}, {name:"Error",message:"EncodingError U+5434"});
assert.throws(() => {ms932Encoder.encode("\u5435")}, {name:"Error",message:"EncodingError U+5435"});
r = r && ([...ms932Encoder.encode("吶")].join(",") === "153,227"); // U+5436
assert.throws(() => {ms932Encoder.encode("\u5437")}, {name:"Error",message:"EncodingError U+5437"});
r = r && ([...ms932Encoder.encode("吸吹")].join(",") === "139,122,144,129"); // U+5438
assert.throws(() => {ms932Encoder.encode("\u543A")}, {name:"Error",message:"EncodingError U+543A"});
r = r && ([...ms932Encoder.encode("吻吼吽吾")].join(",") === "149,171,153,225,153,221,140,225"); // U+543B
assert.throws(() => {ms932Encoder.encode("\u543F")}, {name:"Error",message:"EncodingError U+543F"});
r = r && ([...ms932Encoder.encode("呀")].join(",") === "153,222"); // U+5440
assert.throws(() => {ms932Encoder.encode("\u5441")}, {name:"Error",message:"EncodingError U+5441"});
r = r && ([...ms932Encoder.encode("呂")].join(",") === "152,67"); // U+5442
assert.throws(() => {ms932Encoder.encode("\u5443")}, {name:"Error",message:"EncodingError U+5443"});
assert.throws(() => {ms932Encoder.encode("\u5444")}, {name:"Error",message:"EncodingError U+5444"});
assert.throws(() => {ms932Encoder.encode("\u5445")}, {name:"Error",message:"EncodingError U+5445"});
r = r && ([...ms932Encoder.encode("呆")].join(",") === "149,240"); // U+5446
assert.throws(() => {ms932Encoder.encode("\u5447")}, {name:"Error",message:"EncodingError U+5447"});
r = r && ([...ms932Encoder.encode("呈呉告")].join(",") === "146,230,140,224,141,144"); // U+5448
assert.throws(() => {ms932Encoder.encode("\u544B")}, {name:"Error",message:"EncodingError U+544B"});
assert.throws(() => {ms932Encoder.encode("\u544C")}, {name:"Error",message:"EncodingError U+544C"});
assert.throws(() => {ms932Encoder.encode("\u544D")}, {name:"Error",message:"EncodingError U+544D"});
r = r && ([...ms932Encoder.encode("呎")].join(",") === "153,230"); // U+544E
assert.throws(() => {ms932Encoder.encode("\u544F")}, {name:"Error",message:"EncodingError U+544F"});
assert.throws(() => {ms932Encoder.encode("\u5450")}, {name:"Error",message:"EncodingError U+5450"});
r = r && ([...ms932Encoder.encode("呑")].join(",") === "147,219"); // U+5451
assert.throws(() => {ms932Encoder.encode("\u5452")}, {name:"Error",message:"EncodingError U+5452"});
assert.throws(() => {ms932Encoder.encode("\u5453")}, {name:"Error",message:"EncodingError U+5453"});
assert.throws(() => {ms932Encoder.encode("\u5454")}, {name:"Error",message:"EncodingError U+5454"});
assert.throws(() => {ms932Encoder.encode("\u5455")}, {name:"Error",message:"EncodingError U+5455"});
assert.throws(() => {ms932Encoder.encode("\u5456")}, {name:"Error",message:"EncodingError U+5456"});
assert.throws(() => {ms932Encoder.encode("\u5457")}, {name:"Error",message:"EncodingError U+5457"});
assert.throws(() => {ms932Encoder.encode("\u5458")}, {name:"Error",message:"EncodingError U+5458"});
assert.throws(() => {ms932Encoder.encode("\u5459")}, {name:"Error",message:"EncodingError U+5459"});
assert.throws(() => {ms932Encoder.encode("\u545A")}, {name:"Error",message:"EncodingError U+545A"});
assert.throws(() => {ms932Encoder.encode("\u545B")}, {name:"Error",message:"EncodingError U+545B"});
assert.throws(() => {ms932Encoder.encode("\u545C")}, {name:"Error",message:"EncodingError U+545C"});
assert.throws(() => {ms932Encoder.encode("\u545D")}, {name:"Error",message:"EncodingError U+545D"});
assert.throws(() => {ms932Encoder.encode("\u545E")}, {name:"Error",message:"EncodingError U+545E"});
r = r && ([...ms932Encoder.encode("呟")].join(",") === "153,234"); // U+545F
assert.throws(() => {ms932Encoder.encode("\u5460")}, {name:"Error",message:"EncodingError U+5460"});
assert.throws(() => {ms932Encoder.encode("\u5461")}, {name:"Error",message:"EncodingError U+5461"});
assert.throws(() => {ms932Encoder.encode("\u5462")}, {name:"Error",message:"EncodingError U+5462"});
assert.throws(() => {ms932Encoder.encode("\u5463")}, {name:"Error",message:"EncodingError U+5463"});
assert.throws(() => {ms932Encoder.encode("\u5464")}, {name:"Error",message:"EncodingError U+5464"});
assert.throws(() => {ms932Encoder.encode("\u5465")}, {name:"Error",message:"EncodingError U+5465"});
assert.throws(() => {ms932Encoder.encode("\u5466")}, {name:"Error",message:"EncodingError U+5466"});
assert.throws(() => {ms932Encoder.encode("\u5467")}, {name:"Error",message:"EncodingError U+5467"});
r = r && ([...ms932Encoder.encode("周")].join(",") === "142,252"); // U+5468
assert.throws(() => {ms932Encoder.encode("\u5469")}, {name:"Error",message:"EncodingError U+5469"});
r = r && ([...ms932Encoder.encode("呪")].join(",") === "142,244"); // U+546A
assert.throws(() => {ms932Encoder.encode("\u546B")}, {name:"Error",message:"EncodingError U+546B"});
assert.throws(() => {ms932Encoder.encode("\u546C")}, {name:"Error",message:"EncodingError U+546C"});
assert.throws(() => {ms932Encoder.encode("\u546D")}, {name:"Error",message:"EncodingError U+546D"});
assert.throws(() => {ms932Encoder.encode("\u546E")}, {name:"Error",message:"EncodingError U+546E"});
assert.throws(() => {ms932Encoder.encode("\u546F")}, {name:"Error",message:"EncodingError U+546F"});
r = r && ([...ms932Encoder.encode("呰呱")].join(",") === "153,237,153,235"); // U+5470
assert.throws(() => {ms932Encoder.encode("\u5472")}, {name:"Error",message:"EncodingError U+5472"});
r = r && ([...ms932Encoder.encode("味")].join(",") === "150,161"); // U+5473
assert.throws(() => {ms932Encoder.encode("\u5474")}, {name:"Error",message:"EncodingError U+5474"});
r = r && ([...ms932Encoder.encode("呵呶呷")].join(",") === "153,232,153,241,153,236"); // U+5475
assert.throws(() => {ms932Encoder.encode("\u5478")}, {name:"Error",message:"EncodingError U+5478"});
assert.throws(() => {ms932Encoder.encode("\u5479")}, {name:"Error",message:"EncodingError U+5479"});
assert.throws(() => {ms932Encoder.encode("\u547A")}, {name:"Error",message:"EncodingError U+547A"});
r = r && ([...ms932Encoder.encode("呻呼命")].join(",") === "153,239,140,196,150,189"); // U+547B
assert.throws(() => {ms932Encoder.encode("\u547E")}, {name:"Error",message:"EncodingError U+547E"});
assert.throws(() => {ms932Encoder.encode("\u547F")}, {name:"Error",message:"EncodingError U+547F"});
r = r && ([...ms932Encoder.encode("咀")].join(",") === "153,240"); // U+5480
assert.throws(() => {ms932Encoder.encode("\u5481")}, {name:"Error",message:"EncodingError U+5481"});
assert.throws(() => {ms932Encoder.encode("\u5482")}, {name:"Error",message:"EncodingError U+5482"});
assert.throws(() => {ms932Encoder.encode("\u5483")}, {name:"Error",message:"EncodingError U+5483"});
r = r && ([...ms932Encoder.encode("咄")].join(",") === "153,242"); // U+5484
assert.throws(() => {ms932Encoder.encode("\u5485")}, {name:"Error",message:"EncodingError U+5485"});
r = r && ([...ms932Encoder.encode("咆")].join(",") === "153,244"); // U+5486
assert.throws(() => {ms932Encoder.encode("\u5487")}, {name:"Error",message:"EncodingError U+5487"});
assert.throws(() => {ms932Encoder.encode("\u5488")}, {name:"Error",message:"EncodingError U+5488"});
assert.throws(() => {ms932Encoder.encode("\u5489")}, {name:"Error",message:"EncodingError U+5489"});
r = r && ([...ms932Encoder.encode("咊咋和")].join(",") === "250,146,141,238,152,97"); // U+548A
assert.throws(() => {ms932Encoder.encode("\u548D")}, {name:"Error",message:"EncodingError U+548D"});
r = r && ([...ms932Encoder.encode("咎咏咐")].join(",") === "153,233,153,231,153,243"); // U+548E
assert.throws(() => {ms932Encoder.encode("\u5491")}, {name:"Error",message:"EncodingError U+5491"});
r = r && ([...ms932Encoder.encode("咒")].join(",") === "153,238"); // U+5492
assert.throws(() => {ms932Encoder.encode("\u5493")}, {name:"Error",message:"EncodingError U+5493"});
assert.throws(() => {ms932Encoder.encode("\u5494")}, {name:"Error",message:"EncodingError U+5494"});
assert.throws(() => {ms932Encoder.encode("\u5495")}, {name:"Error",message:"EncodingError U+5495"});
assert.throws(() => {ms932Encoder.encode("\u5496")}, {name:"Error",message:"EncodingError U+5496"});
assert.throws(() => {ms932Encoder.encode("\u5497")}, {name:"Error",message:"EncodingError U+5497"});
assert.throws(() => {ms932Encoder.encode("\u5498")}, {name:"Error",message:"EncodingError U+5498"});
assert.throws(() => {ms932Encoder.encode("\u5499")}, {name:"Error",message:"EncodingError U+5499"});
assert.throws(() => {ms932Encoder.encode("\u549A")}, {name:"Error",message:"EncodingError U+549A"});
assert.throws(() => {ms932Encoder.encode("\u549B")}, {name:"Error",message:"EncodingError U+549B"});
r = r && ([...ms932Encoder.encode("咜")].join(",") === "250,145"); // U+549C
assert.throws(() => {ms932Encoder.encode("\u549D")}, {name:"Error",message:"EncodingError U+549D"});
assert.throws(() => {ms932Encoder.encode("\u549E")}, {name:"Error",message:"EncodingError U+549E"});
assert.throws(() => {ms932Encoder.encode("\u549F")}, {name:"Error",message:"EncodingError U+549F"});
assert.throws(() => {ms932Encoder.encode("\u54A0")}, {name:"Error",message:"EncodingError U+54A0"});
assert.throws(() => {ms932Encoder.encode("\u54A1")}, {name:"Error",message:"EncodingError U+54A1"});
r = r && ([...ms932Encoder.encode("咢")].join(",") === "153,246"); // U+54A2
assert.throws(() => {ms932Encoder.encode("\u54A3")}, {name:"Error",message:"EncodingError U+54A3"});
r = r && ([...ms932Encoder.encode("咤咥")].join(",") === "154,66,153,248"); // U+54A4
assert.throws(() => {ms932Encoder.encode("\u54A6")}, {name:"Error",message:"EncodingError U+54A6"});
assert.throws(() => {ms932Encoder.encode("\u54A7")}, {name:"Error",message:"EncodingError U+54A7"});
r = r && ([...ms932Encoder.encode("咨咩")].join(",") === "153,252,250,147"); // U+54A8
assert.throws(() => {ms932Encoder.encode("\u54AA")}, {name:"Error",message:"EncodingError U+54AA"});
r = r && ([...ms932Encoder.encode("咫咬")].join(",") === "154,64,153,249"); // U+54AB
assert.throws(() => {ms932Encoder.encode("\u54AD")}, {name:"Error",message:"EncodingError U+54AD"});
assert.throws(() => {ms932Encoder.encode("\u54AE")}, {name:"Error",message:"EncodingError U+54AE"});
r = r && ([...ms932Encoder.encode("咯")].join(",") === "154,93"); // U+54AF
assert.throws(() => {ms932Encoder.encode("\u54B0")}, {name:"Error",message:"EncodingError U+54B0"});
assert.throws(() => {ms932Encoder.encode("\u54B1")}, {name:"Error",message:"EncodingError U+54B1"});
r = r && ([...ms932Encoder.encode("咲咳")].join(",") === "141,231,138,80"); // U+54B2
assert.throws(() => {ms932Encoder.encode("\u54B4")}, {name:"Error",message:"EncodingError U+54B4"});
assert.throws(() => {ms932Encoder.encode("\u54B5")}, {name:"Error",message:"EncodingError U+54B5"});
assert.throws(() => {ms932Encoder.encode("\u54B6")}, {name:"Error",message:"EncodingError U+54B6"});
assert.throws(() => {ms932Encoder.encode("\u54B7")}, {name:"Error",message:"EncodingError U+54B7"});
r = r && ([...ms932Encoder.encode("咸")].join(",") === "153,247"); // U+54B8
assert.throws(() => {ms932Encoder.encode("\u54B9")}, {name:"Error",message:"EncodingError U+54B9"});
assert.throws(() => {ms932Encoder.encode("\u54BA")}, {name:"Error",message:"EncodingError U+54BA"});
assert.throws(() => {ms932Encoder.encode("\u54BB")}, {name:"Error",message:"EncodingError U+54BB"});
r = r && ([...ms932Encoder.encode("咼咽咾")].join(",") === "154,68,136,244,154,67"); // U+54BC
assert.throws(() => {ms932Encoder.encode("\u54BF")}, {name:"Error",message:"EncodingError U+54BF"});
r = r && ([...ms932Encoder.encode("哀品哂")].join(",") === "136,163,149,105,154,65"); // U+54C0
assert.throws(() => {ms932Encoder.encode("\u54C3")}, {name:"Error",message:"EncodingError U+54C3"});
r = r && ([...ms932Encoder.encode("哄")].join(",") === "153,250"); // U+54C4
assert.throws(() => {ms932Encoder.encode("\u54C5")}, {name:"Error",message:"EncodingError U+54C5"});
assert.throws(() => {ms932Encoder.encode("\u54C6")}, {name:"Error",message:"EncodingError U+54C6"});
r = r && ([...ms932Encoder.encode("哇哈哉")].join(",") === "153,245,153,251,141,198"); // U+54C7
assert.throws(() => {ms932Encoder.encode("\u54CA")}, {name:"Error",message:"EncodingError U+54CA"});
assert.throws(() => {ms932Encoder.encode("\u54CB")}, {name:"Error",message:"EncodingError U+54CB"});
assert.throws(() => {ms932Encoder.encode("\u54CC")}, {name:"Error",message:"EncodingError U+54CC"});
assert.throws(() => {ms932Encoder.encode("\u54CD")}, {name:"Error",message:"EncodingError U+54CD"});
assert.throws(() => {ms932Encoder.encode("\u54CE")}, {name:"Error",message:"EncodingError U+54CE"});
assert.throws(() => {ms932Encoder.encode("\u54CF")}, {name:"Error",message:"EncodingError U+54CF"});
assert.throws(() => {ms932Encoder.encode("\u54D0")}, {name:"Error",message:"EncodingError U+54D0"});
assert.throws(() => {ms932Encoder.encode("\u54D1")}, {name:"Error",message:"EncodingError U+54D1"});
assert.throws(() => {ms932Encoder.encode("\u54D2")}, {name:"Error",message:"EncodingError U+54D2"});
assert.throws(() => {ms932Encoder.encode("\u54D3")}, {name:"Error",message:"EncodingError U+54D3"});
assert.throws(() => {ms932Encoder.encode("\u54D4")}, {name:"Error",message:"EncodingError U+54D4"});
assert.throws(() => {ms932Encoder.encode("\u54D5")}, {name:"Error",message:"EncodingError U+54D5"});
assert.throws(() => {ms932Encoder.encode("\u54D6")}, {name:"Error",message:"EncodingError U+54D6"});
assert.throws(() => {ms932Encoder.encode("\u54D7")}, {name:"Error",message:"EncodingError U+54D7"});
r = r && ([...ms932Encoder.encode("哘")].join(",") === "154,69"); // U+54D8
assert.throws(() => {ms932Encoder.encode("\u54D9")}, {name:"Error",message:"EncodingError U+54D9"});
assert.throws(() => {ms932Encoder.encode("\u54DA")}, {name:"Error",message:"EncodingError U+54DA"});
assert.throws(() => {ms932Encoder.encode("\u54DB")}, {name:"Error",message:"EncodingError U+54DB"});
assert.throws(() => {ms932Encoder.encode("\u54DC")}, {name:"Error",message:"EncodingError U+54DC"});
assert.throws(() => {ms932Encoder.encode("\u54DD")}, {name:"Error",message:"EncodingError U+54DD"});
assert.throws(() => {ms932Encoder.encode("\u54DE")}, {name:"Error",message:"EncodingError U+54DE"});
assert.throws(() => {ms932Encoder.encode("\u54DF")}, {name:"Error",message:"EncodingError U+54DF"});
assert.throws(() => {ms932Encoder.encode("\u54E0")}, {name:"Error",message:"EncodingError U+54E0"});
r = r && ([...ms932Encoder.encode("員哢")].join(",") === "136,245,154,78"); // U+54E1
assert.throws(() => {ms932Encoder.encode("\u54E3")}, {name:"Error",message:"EncodingError U+54E3"});
assert.throws(() => {ms932Encoder.encode("\u54E4")}, {name:"Error",message:"EncodingError U+54E4"});
r = r && ([...ms932Encoder.encode("哥哦")].join(",") === "154,70,154,71"); // U+54E5
assert.throws(() => {ms932Encoder.encode("\u54E7")}, {name:"Error",message:"EncodingError U+54E7"});
r = r && ([...ms932Encoder.encode("哨哩")].join(",") === "143,163,150,137"); // U+54E8
assert.throws(() => {ms932Encoder.encode("\u54EA")}, {name:"Error",message:"EncodingError U+54EA"});
assert.throws(() => {ms932Encoder.encode("\u54EB")}, {name:"Error",message:"EncodingError U+54EB"});
assert.throws(() => {ms932Encoder.encode("\u54EC")}, {name:"Error",message:"EncodingError U+54EC"});
r = r && ([...ms932Encoder.encode("哭哮")].join(",") === "154,76,154,75"); // U+54ED
assert.throws(() => {ms932Encoder.encode("\u54EF")}, {name:"Error",message:"EncodingError U+54EF"});
assert.throws(() => {ms932Encoder.encode("\u54F0")}, {name:"Error",message:"EncodingError U+54F0"});
assert.throws(() => {ms932Encoder.encode("\u54F1")}, {name:"Error",message:"EncodingError U+54F1"});
r = r && ([...ms932Encoder.encode("哲")].join(",") === "147,78"); // U+54F2
assert.throws(() => {ms932Encoder.encode("\u54F3")}, {name:"Error",message:"EncodingError U+54F3"});
assert.throws(() => {ms932Encoder.encode("\u54F4")}, {name:"Error",message:"EncodingError U+54F4"});
assert.throws(() => {ms932Encoder.encode("\u54F5")}, {name:"Error",message:"EncodingError U+54F5"});
assert.throws(() => {ms932Encoder.encode("\u54F6")}, {name:"Error",message:"EncodingError U+54F6"});
assert.throws(() => {ms932Encoder.encode("\u54F7")}, {name:"Error",message:"EncodingError U+54F7"});
assert.throws(() => {ms932Encoder.encode("\u54F8")}, {name:"Error",message:"EncodingError U+54F8"});
assert.throws(() => {ms932Encoder.encode("\u54F9")}, {name:"Error",message:"EncodingError U+54F9"});
r = r && ([...ms932Encoder.encode("哺")].join(",") === "154,77"); // U+54FA
assert.throws(() => {ms932Encoder.encode("\u54FB")}, {name:"Error",message:"EncodingError U+54FB"});
assert.throws(() => {ms932Encoder.encode("\u54FC")}, {name:"Error",message:"EncodingError U+54FC"});
r = r && ([...ms932Encoder.encode("哽")].join(",") === "154,74"); // U+54FD
assert.throws(() => {ms932Encoder.encode("\u54FE")}, {name:"Error",message:"EncodingError U+54FE"});
r = r && ([...ms932Encoder.encode("哿")].join(",") === "250,148"); // U+54FF
assert.throws(() => {ms932Encoder.encode("\u5500")}, {name:"Error",message:"EncodingError U+5500"});
assert.throws(() => {ms932Encoder.encode("\u5501")}, {name:"Error",message:"EncodingError U+5501"});
assert.throws(() => {ms932Encoder.encode("\u5502")}, {name:"Error",message:"EncodingError U+5502"});
assert.throws(() => {ms932Encoder.encode("\u5503")}, {name:"Error",message:"EncodingError U+5503"});
r = r && ([...ms932Encoder.encode("唄")].join(",") === "137,83"); // U+5504
assert.throws(() => {ms932Encoder.encode("\u5505")}, {name:"Error",message:"EncodingError U+5505"});
r = r && ([...ms932Encoder.encode("唆唇")].join(",") === "141,180,144,79"); // U+5506
assert.throws(() => {ms932Encoder.encode("\u5508")}, {name:"Error",message:"EncodingError U+5508"});
assert.throws(() => {ms932Encoder.encode("\u5509")}, {name:"Error",message:"EncodingError U+5509"});
assert.throws(() => {ms932Encoder.encode("\u550A")}, {name:"Error",message:"EncodingError U+550A"});
assert.throws(() => {ms932Encoder.encode("\u550B")}, {name:"Error",message:"EncodingError U+550B"});
assert.throws(() => {ms932Encoder.encode("\u550C")}, {name:"Error",message:"EncodingError U+550C"});
assert.throws(() => {ms932Encoder.encode("\u550D")}, {name:"Error",message:"EncodingError U+550D"});
assert.throws(() => {ms932Encoder.encode("\u550E")}, {name:"Error",message:"EncodingError U+550E"});
r = r && ([...ms932Encoder.encode("唏唐")].join(",") === "154,72,147,130"); // U+550F
assert.throws(() => {ms932Encoder.encode("\u5511")}, {name:"Error",message:"EncodingError U+5511"});
assert.throws(() => {ms932Encoder.encode("\u5512")}, {name:"Error",message:"EncodingError U+5512"});
assert.throws(() => {ms932Encoder.encode("\u5513")}, {name:"Error",message:"EncodingError U+5513"});
r = r && ([...ms932Encoder.encode("唔")].join(",") === "154,73"); // U+5514
assert.throws(() => {ms932Encoder.encode("\u5515")}, {name:"Error",message:"EncodingError U+5515"});
r = r && ([...ms932Encoder.encode("唖")].join(",") === "136,160"); // U+5516
assert.throws(() => {ms932Encoder.encode("\u5517")}, {name:"Error",message:"EncodingError U+5517"});
assert.throws(() => {ms932Encoder.encode("\u5518")}, {name:"Error",message:"EncodingError U+5518"});
assert.throws(() => {ms932Encoder.encode("\u5519")}, {name:"Error",message:"EncodingError U+5519"});
assert.throws(() => {ms932Encoder.encode("\u551A")}, {name:"Error",message:"EncodingError U+551A"});
assert.throws(() => {ms932Encoder.encode("\u551B")}, {name:"Error",message:"EncodingError U+551B"});
assert.throws(() => {ms932Encoder.encode("\u551C")}, {name:"Error",message:"EncodingError U+551C"});
assert.throws(() => {ms932Encoder.encode("\u551D")}, {name:"Error",message:"EncodingError U+551D"});
assert.throws(() => {ms932Encoder.encode("\u551E")}, {name:"Error",message:"EncodingError U+551E"});
assert.throws(() => {ms932Encoder.encode("\u551F")}, {name:"Error",message:"EncodingError U+551F"});
assert.throws(() => {ms932Encoder.encode("\u5520")}, {name:"Error",message:"EncodingError U+5520"});
assert.throws(() => {ms932Encoder.encode("\u5521")}, {name:"Error",message:"EncodingError U+5521"});
assert.throws(() => {ms932Encoder.encode("\u5522")}, {name:"Error",message:"EncodingError U+5522"});
assert.throws(() => {ms932Encoder.encode("\u5523")}, {name:"Error",message:"EncodingError U+5523"});
assert.throws(() => {ms932Encoder.encode("\u5524")}, {name:"Error",message:"EncodingError U+5524"});
assert.throws(() => {ms932Encoder.encode("\u5525")}, {name:"Error",message:"EncodingError U+5525"});
assert.throws(() => {ms932Encoder.encode("\u5526")}, {name:"Error",message:"EncodingError U+5526"});
assert.throws(() => {ms932Encoder.encode("\u5527")}, {name:"Error",message:"EncodingError U+5527"});
assert.throws(() => {ms932Encoder.encode("\u5528")}, {name:"Error",message:"EncodingError U+5528"});
assert.throws(() => {ms932Encoder.encode("\u5529")}, {name:"Error",message:"EncodingError U+5529"});
assert.throws(() => {ms932Encoder.encode("\u552A")}, {name:"Error",message:"EncodingError U+552A"});
assert.throws(() => {ms932Encoder.encode("\u552B")}, {name:"Error",message:"EncodingError U+552B"});
assert.throws(() => {ms932Encoder.encode("\u552C")}, {name:"Error",message:"EncodingError U+552C"});
assert.throws(() => {ms932Encoder.encode("\u552D")}, {name:"Error",message:"EncodingError U+552D"});
r = r && ([...ms932Encoder.encode("售唯")].join(",") === "154,83,151,66"); // U+552E
assert.throws(() => {ms932Encoder.encode("\u5530")}, {name:"Error",message:"EncodingError U+5530"});
r = r && ([...ms932Encoder.encode("唱")].join(",") === "143,165"); // U+5531
assert.throws(() => {ms932Encoder.encode("\u5532")}, {name:"Error",message:"EncodingError U+5532"});
r = r && ([...ms932Encoder.encode("唳")].join(",") === "154,89"); // U+5533
assert.throws(() => {ms932Encoder.encode("\u5534")}, {name:"Error",message:"EncodingError U+5534"});
assert.throws(() => {ms932Encoder.encode("\u5535")}, {name:"Error",message:"EncodingError U+5535"});
assert.throws(() => {ms932Encoder.encode("\u5536")}, {name:"Error",message:"EncodingError U+5536"});
assert.throws(() => {ms932Encoder.encode("\u5537")}, {name:"Error",message:"EncodingError U+5537"});
r = r && ([...ms932Encoder.encode("唸唹")].join(",") === "154,88,154,79"); // U+5538
assert.throws(() => {ms932Encoder.encode("\u553A")}, {name:"Error",message:"EncodingError U+553A"});
assert.throws(() => {ms932Encoder.encode("\u553B")}, {name:"Error",message:"EncodingError U+553B"});
assert.throws(() => {ms932Encoder.encode("\u553C")}, {name:"Error",message:"EncodingError U+553C"});
assert.throws(() => {ms932Encoder.encode("\u553D")}, {name:"Error",message:"EncodingError U+553D"});
r = r && ([...ms932Encoder.encode("唾")].join(",") === "145,193"); // U+553E
assert.throws(() => {ms932Encoder.encode("\u553F")}, {name:"Error",message:"EncodingError U+553F"});
r = r && ([...ms932Encoder.encode("啀")].join(",") === "154,80"); // U+5540
assert.throws(() => {ms932Encoder.encode("\u5541")}, {name:"Error",message:"EncodingError U+5541"});
assert.throws(() => {ms932Encoder.encode("\u5542")}, {name:"Error",message:"EncodingError U+5542"});
assert.throws(() => {ms932Encoder.encode("\u5543")}, {name:"Error",message:"EncodingError U+5543"});
r = r && ([...ms932Encoder.encode("啄啅商")].join(",") === "145,237,154,85,143,164"); // U+5544
assert.throws(() => {ms932Encoder.encode("\u5547")}, {name:"Error",message:"EncodingError U+5547"});
assert.throws(() => {ms932Encoder.encode("\u5548")}, {name:"Error",message:"EncodingError U+5548"});
assert.throws(() => {ms932Encoder.encode("\u5549")}, {name:"Error",message:"EncodingError U+5549"});
assert.throws(() => {ms932Encoder.encode("\u554A")}, {name:"Error",message:"EncodingError U+554A"});
assert.throws(() => {ms932Encoder.encode("\u554B")}, {name:"Error",message:"EncodingError U+554B"});
r = r && ([...ms932Encoder.encode("啌")].join(",") === "154,82"); // U+554C
assert.throws(() => {ms932Encoder.encode("\u554D")}, {name:"Error",message:"EncodingError U+554D"});
assert.throws(() => {ms932Encoder.encode("\u554E")}, {name:"Error",message:"EncodingError U+554E"});
r = r && ([...ms932Encoder.encode("問")].join(",") === "150,226"); // U+554F
assert.throws(() => {ms932Encoder.encode("\u5550")}, {name:"Error",message:"EncodingError U+5550"});
assert.throws(() => {ms932Encoder.encode("\u5551")}, {name:"Error",message:"EncodingError U+5551"});
assert.throws(() => {ms932Encoder.encode("\u5552")}, {name:"Error",message:"EncodingError U+5552"});
r = r && ([...ms932Encoder.encode("啓")].join(",") === "140,91"); // U+5553
assert.throws(() => {ms932Encoder.encode("\u5554")}, {name:"Error",message:"EncodingError U+5554"});
assert.throws(() => {ms932Encoder.encode("\u5555")}, {name:"Error",message:"EncodingError U+5555"});
r = r && ([...ms932Encoder.encode("啖啗")].join(",") === "154,86,154,87"); // U+5556
assert.throws(() => {ms932Encoder.encode("\u5558")}, {name:"Error",message:"EncodingError U+5558"});
assert.throws(() => {ms932Encoder.encode("\u5559")}, {name:"Error",message:"EncodingError U+5559"});
assert.throws(() => {ms932Encoder.encode("\u555A")}, {name:"Error",message:"EncodingError U+555A"});
assert.throws(() => {ms932Encoder.encode("\u555B")}, {name:"Error",message:"EncodingError U+555B"});
r = r && ([...ms932Encoder.encode("啜啝")].join(",") === "154,84,154,90"); // U+555C
assert.throws(() => {ms932Encoder.encode("\u555E")}, {name:"Error",message:"EncodingError U+555E"});
assert.throws(() => {ms932Encoder.encode("\u555F")}, {name:"Error",message:"EncodingError U+555F"});
assert.throws(() => {ms932Encoder.encode("\u5560")}, {name:"Error",message:"EncodingError U+5560"});
assert.throws(() => {ms932Encoder.encode("\u5561")}, {name:"Error",message:"EncodingError U+5561"});
assert.throws(() => {ms932Encoder.encode("\u5562")}, {name:"Error",message:"EncodingError U+5562"});
r = r && ([...ms932Encoder.encode("啣")].join(",") === "154,81"); // U+5563
assert.throws(() => {ms932Encoder.encode("\u5564")}, {name:"Error",message:"EncodingError U+5564"});
assert.throws(() => {ms932Encoder.encode("\u5565")}, {name:"Error",message:"EncodingError U+5565"});
assert.throws(() => {ms932Encoder.encode("\u5566")}, {name:"Error",message:"EncodingError U+5566"});
assert.throws(() => {ms932Encoder.encode("\u5567")}, {name:"Error",message:"EncodingError U+5567"});
assert.throws(() => {ms932Encoder.encode("\u5568")}, {name:"Error",message:"EncodingError U+5568"});
assert.throws(() => {ms932Encoder.encode("\u5569")}, {name:"Error",message:"EncodingError U+5569"});
assert.throws(() => {ms932Encoder.encode("\u556A")}, {name:"Error",message:"EncodingError U+556A"});
assert.throws(() => {ms932Encoder.encode("\u556B")}, {name:"Error",message:"EncodingError U+556B"});
assert.throws(() => {ms932Encoder.encode("\u556C")}, {name:"Error",message:"EncodingError U+556C"});
assert.throws(() => {ms932Encoder.encode("\u556D")}, {name:"Error",message:"EncodingError U+556D"});
assert.throws(() => {ms932Encoder.encode("\u556E")}, {name:"Error",message:"EncodingError U+556E"});
assert.throws(() => {ms932Encoder.encode("\u556F")}, {name:"Error",message:"EncodingError U+556F"});
assert.throws(() => {ms932Encoder.encode("\u5570")}, {name:"Error",message:"EncodingError U+5570"});
assert.throws(() => {ms932Encoder.encode("\u5571")}, {name:"Error",message:"EncodingError U+5571"});
assert.throws(() => {ms932Encoder.encode("\u5572")}, {name:"Error",message:"EncodingError U+5572"});
assert.throws(() => {ms932Encoder.encode("\u5573")}, {name:"Error",message:"EncodingError U+5573"});
assert.throws(() => {ms932Encoder.encode("\u5574")}, {name:"Error",message:"EncodingError U+5574"});
assert.throws(() => {ms932Encoder.encode("\u5575")}, {name:"Error",message:"EncodingError U+5575"});
assert.throws(() => {ms932Encoder.encode("\u5576")}, {name:"Error",message:"EncodingError U+5576"});
assert.throws(() => {ms932Encoder.encode("\u5577")}, {name:"Error",message:"EncodingError U+5577"});
assert.throws(() => {ms932Encoder.encode("\u5578")}, {name:"Error",message:"EncodingError U+5578"});
assert.throws(() => {ms932Encoder.encode("\u5579")}, {name:"Error",message:"EncodingError U+5579"});
assert.throws(() => {ms932Encoder.encode("\u557A")}, {name:"Error",message:"EncodingError U+557A"});
r = r && ([...ms932Encoder.encode("啻啼")].join(",") === "154,96,154,101"); // U+557B
assert.throws(() => {ms932Encoder.encode("\u557D")}, {name:"Error",message:"EncodingError U+557D"});
r = r && ([...ms932Encoder.encode("啾")].join(",") === "154,97"); // U+557E
assert.throws(() => {ms932Encoder.encode("\u557F")}, {name:"Error",message:"EncodingError U+557F"});
r = r && ([...ms932Encoder.encode("喀")].join(",") === "154,92"); // U+5580
assert.throws(() => {ms932Encoder.encode("\u5581")}, {name:"Error",message:"EncodingError U+5581"});
assert.throws(() => {ms932Encoder.encode("\u5582")}, {name:"Error",message:"EncodingError U+5582"});
r = r && ([...ms932Encoder.encode("喃善")].join(",") === "154,102,145,80"); // U+5583
assert.throws(() => {ms932Encoder.encode("\u5585")}, {name:"Error",message:"EncodingError U+5585"});
r = r && ([...ms932Encoder.encode("喆喇")].join(",") === "250,149,154,104"); // U+5586
assert.throws(() => {ms932Encoder.encode("\u5588")}, {name:"Error",message:"EncodingError U+5588"});
r = r && ([...ms932Encoder.encode("喉喊喋")].join(",") === "141,65,154,94,146,157"); // U+5589
assert.throws(() => {ms932Encoder.encode("\u558C")}, {name:"Error",message:"EncodingError U+558C"});
assert.throws(() => {ms932Encoder.encode("\u558D")}, {name:"Error",message:"EncodingError U+558D"});
assert.throws(() => {ms932Encoder.encode("\u558E")}, {name:"Error",message:"EncodingError U+558E"});
assert.throws(() => {ms932Encoder.encode("\u558F")}, {name:"Error",message:"EncodingError U+558F"});
assert.throws(() => {ms932Encoder.encode("\u5590")}, {name:"Error",message:"EncodingError U+5590"});
assert.throws(() => {ms932Encoder.encode("\u5591")}, {name:"Error",message:"EncodingError U+5591"});
assert.throws(() => {ms932Encoder.encode("\u5592")}, {name:"Error",message:"EncodingError U+5592"});
assert.throws(() => {ms932Encoder.encode("\u5593")}, {name:"Error",message:"EncodingError U+5593"});
assert.throws(() => {ms932Encoder.encode("\u5594")}, {name:"Error",message:"EncodingError U+5594"});
assert.throws(() => {ms932Encoder.encode("\u5595")}, {name:"Error",message:"EncodingError U+5595"});
assert.throws(() => {ms932Encoder.encode("\u5596")}, {name:"Error",message:"EncodingError U+5596"});
assert.throws(() => {ms932Encoder.encode("\u5597")}, {name:"Error",message:"EncodingError U+5597"});
r = r && ([...ms932Encoder.encode("喘喙喚")].join(",") === "154,98,154,91,138,171"); // U+5598
assert.throws(() => {ms932Encoder.encode("\u559B")}, {name:"Error",message:"EncodingError U+559B"});
r = r && ([...ms932Encoder.encode("喜喝喞喟")].join(",") === "138,236,138,133,154,99,154,95"); // U+559C
assert.throws(() => {ms932Encoder.encode("\u55A0")}, {name:"Error",message:"EncodingError U+55A0"});
assert.throws(() => {ms932Encoder.encode("\u55A1")}, {name:"Error",message:"EncodingError U+55A1"});
assert.throws(() => {ms932Encoder.encode("\u55A2")}, {name:"Error",message:"EncodingError U+55A2"});
assert.throws(() => {ms932Encoder.encode("\u55A3")}, {name:"Error",message:"EncodingError U+55A3"});
assert.throws(() => {ms932Encoder.encode("\u55A4")}, {name:"Error",message:"EncodingError U+55A4"});
assert.throws(() => {ms932Encoder.encode("\u55A5")}, {name:"Error",message:"EncodingError U+55A5"});
assert.throws(() => {ms932Encoder.encode("\u55A6")}, {name:"Error",message:"EncodingError U+55A6"});
r = r && ([...ms932Encoder.encode("喧喨喩喪喫喬")].join(",") === "140,150,154,105,154,103,145,114,139,105,139,170"); // U+55A7
assert.throws(() => {ms932Encoder.encode("\u55AD")}, {name:"Error",message:"EncodingError U+55AD"});
r = r && ([...ms932Encoder.encode("單")].join(",") === "154,100"); // U+55AE
assert.throws(() => {ms932Encoder.encode("\u55AF")}, {name:"Error",message:"EncodingError U+55AF"});
r = r && ([...ms932Encoder.encode("喰")].join(",") === "139,242"); // U+55B0
assert.throws(() => {ms932Encoder.encode("\u55B1")}, {name:"Error",message:"EncodingError U+55B1"});
assert.throws(() => {ms932Encoder.encode("\u55B2")}, {name:"Error",message:"EncodingError U+55B2"});
assert.throws(() => {ms932Encoder.encode("\u55B3")}, {name:"Error",message:"EncodingError U+55B3"});
assert.throws(() => {ms932Encoder.encode("\u55B4")}, {name:"Error",message:"EncodingError U+55B4"});
assert.throws(() => {ms932Encoder.encode("\u55B5")}, {name:"Error",message:"EncodingError U+55B5"});
r = r && ([...ms932Encoder.encode("営")].join(",") === "137,99"); // U+55B6
assert.throws(() => {ms932Encoder.encode("\u55B7")}, {name:"Error",message:"EncodingError U+55B7"});
assert.throws(() => {ms932Encoder.encode("\u55B8")}, {name:"Error",message:"EncodingError U+55B8"});
assert.throws(() => {ms932Encoder.encode("\u55B9")}, {name:"Error",message:"EncodingError U+55B9"});
assert.throws(() => {ms932Encoder.encode("\u55BA")}, {name:"Error",message:"EncodingError U+55BA"});
assert.throws(() => {ms932Encoder.encode("\u55BB")}, {name:"Error",message:"EncodingError U+55BB"});
assert.throws(() => {ms932Encoder.encode("\u55BC")}, {name:"Error",message:"EncodingError U+55BC"});
assert.throws(() => {ms932Encoder.encode("\u55BD")}, {name:"Error",message:"EncodingError U+55BD"});
assert.throws(() => {ms932Encoder.encode("\u55BE")}, {name:"Error",message:"EncodingError U+55BE"});
assert.throws(() => {ms932Encoder.encode("\u55BF")}, {name:"Error",message:"EncodingError U+55BF"});
assert.throws(() => {ms932Encoder.encode("\u55C0")}, {name:"Error",message:"EncodingError U+55C0"});
assert.throws(() => {ms932Encoder.encode("\u55C1")}, {name:"Error",message:"EncodingError U+55C1"});
assert.throws(() => {ms932Encoder.encode("\u55C2")}, {name:"Error",message:"EncodingError U+55C2"});
assert.throws(() => {ms932Encoder.encode("\u55C3")}, {name:"Error",message:"EncodingError U+55C3"});
r = r && ([...ms932Encoder.encode("嗄嗅")].join(",") === "154,109,154,107"); // U+55C4
assert.throws(() => {ms932Encoder.encode("\u55C6")}, {name:"Error",message:"EncodingError U+55C6"});
r = r && ([...ms932Encoder.encode("嗇")].join(",") === "154,165"); // U+55C7
assert.throws(() => {ms932Encoder.encode("\u55C8")}, {name:"Error",message:"EncodingError U+55C8"});
assert.throws(() => {ms932Encoder.encode("\u55C9")}, {name:"Error",message:"EncodingError U+55C9"});
assert.throws(() => {ms932Encoder.encode("\u55CA")}, {name:"Error",message:"EncodingError U+55CA"});
assert.throws(() => {ms932Encoder.encode("\u55CB")}, {name:"Error",message:"EncodingError U+55CB"});
assert.throws(() => {ms932Encoder.encode("\u55CC")}, {name:"Error",message:"EncodingError U+55CC"});
assert.throws(() => {ms932Encoder.encode("\u55CD")}, {name:"Error",message:"EncodingError U+55CD"});
assert.throws(() => {ms932Encoder.encode("\u55CE")}, {name:"Error",message:"EncodingError U+55CE"});
assert.throws(() => {ms932Encoder.encode("\u55CF")}, {name:"Error",message:"EncodingError U+55CF"});
assert.throws(() => {ms932Encoder.encode("\u55D0")}, {name:"Error",message:"EncodingError U+55D0"});
assert.throws(() => {ms932Encoder.encode("\u55D1")}, {name:"Error",message:"EncodingError U+55D1"});
assert.throws(() => {ms932Encoder.encode("\u55D2")}, {name:"Error",message:"EncodingError U+55D2"});
assert.throws(() => {ms932Encoder.encode("\u55D3")}, {name:"Error",message:"EncodingError U+55D3"});
r = r && ([...ms932Encoder.encode("嗔")].join(",") === "154,112"); // U+55D4
assert.throws(() => {ms932Encoder.encode("\u55D5")}, {name:"Error",message:"EncodingError U+55D5"});
assert.throws(() => {ms932Encoder.encode("\u55D6")}, {name:"Error",message:"EncodingError U+55D6"});
assert.throws(() => {ms932Encoder.encode("\u55D7")}, {name:"Error",message:"EncodingError U+55D7"});
assert.throws(() => {ms932Encoder.encode("\u55D8")}, {name:"Error",message:"EncodingError U+55D8"});
assert.throws(() => {ms932Encoder.encode("\u55D9")}, {name:"Error",message:"EncodingError U+55D9"});
r = r && ([...ms932Encoder.encode("嗚")].join(",") === "154,106"); // U+55DA
assert.throws(() => {ms932Encoder.encode("\u55DB")}, {name:"Error",message:"EncodingError U+55DB"});
r = r && ([...ms932Encoder.encode("嗜")].join(",") === "154,110"); // U+55DC
assert.throws(() => {ms932Encoder.encode("\u55DD")}, {name:"Error",message:"EncodingError U+55DD"});
assert.throws(() => {ms932Encoder.encode("\u55DE")}, {name:"Error",message:"EncodingError U+55DE"});
r = r && ([...ms932Encoder.encode("嗟")].join(",") === "154,108"); // U+55DF
assert.throws(() => {ms932Encoder.encode("\u55E0")}, {name:"Error",message:"EncodingError U+55E0"});
assert.throws(() => {ms932Encoder.encode("\u55E1")}, {name:"Error",message:"EncodingError U+55E1"});
assert.throws(() => {ms932Encoder.encode("\u55E2")}, {name:"Error",message:"EncodingError U+55E2"});
r = r && ([...ms932Encoder.encode("嗣嗤")].join(",") === "142,107,154,111"); // U+55E3
assert.throws(() => {ms932Encoder.encode("\u55E5")}, {name:"Error",message:"EncodingError U+55E5"});
assert.throws(() => {ms932Encoder.encode("\u55E6")}, {name:"Error",message:"EncodingError U+55E6"});
assert.throws(() => {ms932Encoder.encode("\u55E7")}, {name:"Error",message:"EncodingError U+55E7"});
assert.throws(() => {ms932Encoder.encode("\u55E8")}, {name:"Error",message:"EncodingError U+55E8"});
assert.throws(() => {ms932Encoder.encode("\u55E9")}, {name:"Error",message:"EncodingError U+55E9"});
assert.throws(() => {ms932Encoder.encode("\u55EA")}, {name:"Error",message:"EncodingError U+55EA"});
assert.throws(() => {ms932Encoder.encode("\u55EB")}, {name:"Error",message:"EncodingError U+55EB"});
assert.throws(() => {ms932Encoder.encode("\u55EC")}, {name:"Error",message:"EncodingError U+55EC"});
assert.throws(() => {ms932Encoder.encode("\u55ED")}, {name:"Error",message:"EncodingError U+55ED"});
assert.throws(() => {ms932Encoder.encode("\u55EE")}, {name:"Error",message:"EncodingError U+55EE"});
assert.throws(() => {ms932Encoder.encode("\u55EF")}, {name:"Error",message:"EncodingError U+55EF"});
assert.throws(() => {ms932Encoder.encode("\u55F0")}, {name:"Error",message:"EncodingError U+55F0"});
assert.throws(() => {ms932Encoder.encode("\u55F1")}, {name:"Error",message:"EncodingError U+55F1"});
assert.throws(() => {ms932Encoder.encode("\u55F2")}, {name:"Error",message:"EncodingError U+55F2"});
assert.throws(() => {ms932Encoder.encode("\u55F3")}, {name:"Error",message:"EncodingError U+55F3"});
assert.throws(() => {ms932Encoder.encode("\u55F4")}, {name:"Error",message:"EncodingError U+55F4"});
assert.throws(() => {ms932Encoder.encode("\u55F5")}, {name:"Error",message:"EncodingError U+55F5"});
assert.throws(() => {ms932Encoder.encode("\u55F6")}, {name:"Error",message:"EncodingError U+55F6"});
r = r && ([...ms932Encoder.encode("嗷")].join(",") === "154,114"); // U+55F7
assert.throws(() => {ms932Encoder.encode("\u55F8")}, {name:"Error",message:"EncodingError U+55F8"});
r = r && ([...ms932Encoder.encode("嗹")].join(",") === "154,119"); // U+55F9
assert.throws(() => {ms932Encoder.encode("\u55FA")}, {name:"Error",message:"EncodingError U+55FA"});
assert.throws(() => {ms932Encoder.encode("\u55FB")}, {name:"Error",message:"EncodingError U+55FB"});
assert.throws(() => {ms932Encoder.encode("\u55FC")}, {name:"Error",message:"EncodingError U+55FC"});
r = r && ([...ms932Encoder.encode("嗽嗾")].join(",") === "154,117,154,116"); // U+55FD
assert.throws(() => {ms932Encoder.encode("\u55FF")}, {name:"Error",message:"EncodingError U+55FF"});
assert.throws(() => {ms932Encoder.encode("\u5600")}, {name:"Error",message:"EncodingError U+5600"});
assert.throws(() => {ms932Encoder.encode("\u5601")}, {name:"Error",message:"EncodingError U+5601"});
assert.throws(() => {ms932Encoder.encode("\u5602")}, {name:"Error",message:"EncodingError U+5602"});
assert.throws(() => {ms932Encoder.encode("\u5603")}, {name:"Error",message:"EncodingError U+5603"});
assert.throws(() => {ms932Encoder.encode("\u5604")}, {name:"Error",message:"EncodingError U+5604"});
assert.throws(() => {ms932Encoder.encode("\u5605")}, {name:"Error",message:"EncodingError U+5605"});
r = r && ([...ms932Encoder.encode("嘆")].join(",") === "146,81"); // U+5606
assert.throws(() => {ms932Encoder.encode("\u5607")}, {name:"Error",message:"EncodingError U+5607"});
assert.throws(() => {ms932Encoder.encode("\u5608")}, {name:"Error",message:"EncodingError U+5608"});
r = r && ([...ms932Encoder.encode("嘉")].join(",") === "137,195"); // U+5609
assert.throws(() => {ms932Encoder.encode("\u560A")}, {name:"Error",message:"EncodingError U+560A"});
assert.throws(() => {ms932Encoder.encode("\u560B")}, {name:"Error",message:"EncodingError U+560B"});
assert.throws(() => {ms932Encoder.encode("\u560C")}, {name:"Error",message:"EncodingError U+560C"});
assert.throws(() => {ms932Encoder.encode("\u560D")}, {name:"Error",message:"EncodingError U+560D"});
assert.throws(() => {ms932Encoder.encode("\u560E")}, {name:"Error",message:"EncodingError U+560E"});
assert.throws(() => {ms932Encoder.encode("\u560F")}, {name:"Error",message:"EncodingError U+560F"});
assert.throws(() => {ms932Encoder.encode("\u5610")}, {name:"Error",message:"EncodingError U+5610"});
assert.throws(() => {ms932Encoder.encode("\u5611")}, {name:"Error",message:"EncodingError U+5611"});
assert.throws(() => {ms932Encoder.encode("\u5612")}, {name:"Error",message:"EncodingError U+5612"});
assert.throws(() => {ms932Encoder.encode("\u5613")}, {name:"Error",message:"EncodingError U+5613"});
r = r && ([...ms932Encoder.encode("嘔")].join(",") === "154,113"); // U+5614
assert.throws(() => {ms932Encoder.encode("\u5615")}, {name:"Error",message:"EncodingError U+5615"});
r = r && ([...ms932Encoder.encode("嘖嘗嘘")].join(",") === "154,115,143,166,137,82"); // U+5616
assert.throws(() => {ms932Encoder.encode("\u5619")}, {name:"Error",message:"EncodingError U+5619"});
assert.throws(() => {ms932Encoder.encode("\u561A")}, {name:"Error",message:"EncodingError U+561A"});
r = r && ([...ms932Encoder.encode("嘛")].join(",") === "154,118"); // U+561B
assert.throws(() => {ms932Encoder.encode("\u561C")}, {name:"Error",message:"EncodingError U+561C"});
assert.throws(() => {ms932Encoder.encode("\u561D")}, {name:"Error",message:"EncodingError U+561D"});
assert.throws(() => {ms932Encoder.encode("\u561E")}, {name:"Error",message:"EncodingError U+561E"});
assert.throws(() => {ms932Encoder.encode("\u561F")}, {name:"Error",message:"EncodingError U+561F"});
assert.throws(() => {ms932Encoder.encode("\u5620")}, {name:"Error",message:"EncodingError U+5620"});
assert.throws(() => {ms932Encoder.encode("\u5621")}, {name:"Error",message:"EncodingError U+5621"});
assert.throws(() => {ms932Encoder.encode("\u5622")}, {name:"Error",message:"EncodingError U+5622"});
assert.throws(() => {ms932Encoder.encode("\u5623")}, {name:"Error",message:"EncodingError U+5623"});
assert.throws(() => {ms932Encoder.encode("\u5624")}, {name:"Error",message:"EncodingError U+5624"});
assert.throws(() => {ms932Encoder.encode("\u5625")}, {name:"Error",message:"EncodingError U+5625"});
assert.throws(() => {ms932Encoder.encode("\u5626")}, {name:"Error",message:"EncodingError U+5626"});
assert.throws(() => {ms932Encoder.encode("\u5627")}, {name:"Error",message:"EncodingError U+5627"});
assert.throws(() => {ms932Encoder.encode("\u5628")}, {name:"Error",message:"EncodingError U+5628"});
r = r && ([...ms932Encoder.encode("嘩")].join(",") === "137,220"); // U+5629
assert.throws(() => {ms932Encoder.encode("\u562A")}, {name:"Error",message:"EncodingError U+562A"});
assert.throws(() => {ms932Encoder.encode("\u562B")}, {name:"Error",message:"EncodingError U+562B"});
assert.throws(() => {ms932Encoder.encode("\u562C")}, {name:"Error",message:"EncodingError U+562C"});
assert.throws(() => {ms932Encoder.encode("\u562D")}, {name:"Error",message:"EncodingError U+562D"});
assert.throws(() => {ms932Encoder.encode("\u562E")}, {name:"Error",message:"EncodingError U+562E"});
r = r && ([...ms932Encoder.encode("嘯")].join(",") === "154,130"); // U+562F
assert.throws(() => {ms932Encoder.encode("\u5630")}, {name:"Error",message:"EncodingError U+5630"});
r = r && ([...ms932Encoder.encode("嘱嘲")].join(",") === "143,250,154,125"); // U+5631
assert.throws(() => {ms932Encoder.encode("\u5633")}, {name:"Error",message:"EncodingError U+5633"});
r = r && ([...ms932Encoder.encode("嘴")].join(",") === "154,123"); // U+5634
assert.throws(() => {ms932Encoder.encode("\u5635")}, {name:"Error",message:"EncodingError U+5635"});
r = r && ([...ms932Encoder.encode("嘶")].join(",") === "154,124"); // U+5636
assert.throws(() => {ms932Encoder.encode("\u5637")}, {name:"Error",message:"EncodingError U+5637"});
r = r && ([...ms932Encoder.encode("嘸")].join(",") === "154,126"); // U+5638
assert.throws(() => {ms932Encoder.encode("\u5639")}, {name:"Error",message:"EncodingError U+5639"});
assert.throws(() => {ms932Encoder.encode("\u563A")}, {name:"Error",message:"EncodingError U+563A"});
assert.throws(() => {ms932Encoder.encode("\u563B")}, {name:"Error",message:"EncodingError U+563B"});
assert.throws(() => {ms932Encoder.encode("\u563C")}, {name:"Error",message:"EncodingError U+563C"});
assert.throws(() => {ms932Encoder.encode("\u563D")}, {name:"Error",message:"EncodingError U+563D"});
assert.throws(() => {ms932Encoder.encode("\u563E")}, {name:"Error",message:"EncodingError U+563E"});
assert.throws(() => {ms932Encoder.encode("\u563F")}, {name:"Error",message:"EncodingError U+563F"});
assert.throws(() => {ms932Encoder.encode("\u5640")}, {name:"Error",message:"EncodingError U+5640"});
assert.throws(() => {ms932Encoder.encode("\u5641")}, {name:"Error",message:"EncodingError U+5641"});
r = r && ([...ms932Encoder.encode("噂")].join(",") === "137,92"); // U+5642
assert.throws(() => {ms932Encoder.encode("\u5643")}, {name:"Error",message:"EncodingError U+5643"});
assert.throws(() => {ms932Encoder.encode("\u5644")}, {name:"Error",message:"EncodingError U+5644"});
assert.throws(() => {ms932Encoder.encode("\u5645")}, {name:"Error",message:"EncodingError U+5645"});
assert.throws(() => {ms932Encoder.encode("\u5646")}, {name:"Error",message:"EncodingError U+5646"});
assert.throws(() => {ms932Encoder.encode("\u5647")}, {name:"Error",message:"EncodingError U+5647"});
assert.throws(() => {ms932Encoder.encode("\u5648")}, {name:"Error",message:"EncodingError U+5648"});
assert.throws(() => {ms932Encoder.encode("\u5649")}, {name:"Error",message:"EncodingError U+5649"});
assert.throws(() => {ms932Encoder.encode("\u564A")}, {name:"Error",message:"EncodingError U+564A"});
assert.throws(() => {ms932Encoder.encode("\u564B")}, {name:"Error",message:"EncodingError U+564B"});
r = r && ([...ms932Encoder.encode("噌")].join(",") === "145,88"); // U+564C
assert.throws(() => {ms932Encoder.encode("\u564D")}, {name:"Error",message:"EncodingError U+564D"});
r = r && ([...ms932Encoder.encode("噎")].join(",") === "154,120"); // U+564E
assert.throws(() => {ms932Encoder.encode("\u564F")}, {name:"Error",message:"EncodingError U+564F"});
r = r && ([...ms932Encoder.encode("噐")].join(",") === "154,121"); // U+5650
assert.throws(() => {ms932Encoder.encode("\u5651")}, {name:"Error",message:"EncodingError U+5651"});
assert.throws(() => {ms932Encoder.encode("\u5652")}, {name:"Error",message:"EncodingError U+5652"});
assert.throws(() => {ms932Encoder.encode("\u5653")}, {name:"Error",message:"EncodingError U+5653"});
assert.throws(() => {ms932Encoder.encode("\u5654")}, {name:"Error",message:"EncodingError U+5654"});
assert.throws(() => {ms932Encoder.encode("\u5655")}, {name:"Error",message:"EncodingError U+5655"});
assert.throws(() => {ms932Encoder.encode("\u5656")}, {name:"Error",message:"EncodingError U+5656"});
assert.throws(() => {ms932Encoder.encode("\u5657")}, {name:"Error",message:"EncodingError U+5657"});
assert.throws(() => {ms932Encoder.encode("\u5658")}, {name:"Error",message:"EncodingError U+5658"});
assert.throws(() => {ms932Encoder.encode("\u5659")}, {name:"Error",message:"EncodingError U+5659"});
assert.throws(() => {ms932Encoder.encode("\u565A")}, {name:"Error",message:"EncodingError U+565A"});
r = r && ([...ms932Encoder.encode("噛")].join(",") === "138,154"); // U+565B
assert.throws(() => {ms932Encoder.encode("\u565C")}, {name:"Error",message:"EncodingError U+565C"});
assert.throws(() => {ms932Encoder.encode("\u565D")}, {name:"Error",message:"EncodingError U+565D"});
assert.throws(() => {ms932Encoder.encode("\u565E")}, {name:"Error",message:"EncodingError U+565E"});
assert.throws(() => {ms932Encoder.encode("\u565F")}, {name:"Error",message:"EncodingError U+565F"});
assert.throws(() => {ms932Encoder.encode("\u5660")}, {name:"Error",message:"EncodingError U+5660"});
assert.throws(() => {ms932Encoder.encode("\u5661")}, {name:"Error",message:"EncodingError U+5661"});
assert.throws(() => {ms932Encoder.encode("\u5662")}, {name:"Error",message:"EncodingError U+5662"});
assert.throws(() => {ms932Encoder.encode("\u5663")}, {name:"Error",message:"EncodingError U+5663"});
r = r && ([...ms932Encoder.encode("噤")].join(",") === "154,129"); // U+5664
assert.throws(() => {ms932Encoder.encode("\u5665")}, {name:"Error",message:"EncodingError U+5665"});
assert.throws(() => {ms932Encoder.encode("\u5666")}, {name:"Error",message:"EncodingError U+5666"});
assert.throws(() => {ms932Encoder.encode("\u5667")}, {name:"Error",message:"EncodingError U+5667"});
r = r && ([...ms932Encoder.encode("器")].join(",") === "138,237"); // U+5668
assert.throws(() => {ms932Encoder.encode("\u5669")}, {name:"Error",message:"EncodingError U+5669"});
r = r && ([...ms932Encoder.encode("噪噫噬")].join(",") === "154,132,154,128,154,131"); // U+566A
assert.throws(() => {ms932Encoder.encode("\u566D")}, {name:"Error",message:"EncodingError U+566D"});
assert.throws(() => {ms932Encoder.encode("\u566E")}, {name:"Error",message:"EncodingError U+566E"});
assert.throws(() => {ms932Encoder.encode("\u566F")}, {name:"Error",message:"EncodingError U+566F"});
assert.throws(() => {ms932Encoder.encode("\u5670")}, {name:"Error",message:"EncodingError U+5670"});
assert.throws(() => {ms932Encoder.encode("\u5671")}, {name:"Error",message:"EncodingError U+5671"});
assert.throws(() => {ms932Encoder.encode("\u5672")}, {name:"Error",message:"EncodingError U+5672"});
assert.throws(() => {ms932Encoder.encode("\u5673")}, {name:"Error",message:"EncodingError U+5673"});
r = r && ([...ms932Encoder.encode("噴")].join(",") === "149,172"); // U+5674
assert.throws(() => {ms932Encoder.encode("\u5675")}, {name:"Error",message:"EncodingError U+5675"});
assert.throws(() => {ms932Encoder.encode("\u5676")}, {name:"Error",message:"EncodingError U+5676"});
assert.throws(() => {ms932Encoder.encode("\u5677")}, {name:"Error",message:"EncodingError U+5677"});
r = r && ([...ms932Encoder.encode("噸")].join(",") === "147,211"); // U+5678
assert.throws(() => {ms932Encoder.encode("\u5679")}, {name:"Error",message:"EncodingError U+5679"});
r = r && ([...ms932Encoder.encode("噺")].join(",") === "148,182"); // U+567A
assert.throws(() => {ms932Encoder.encode("\u567B")}, {name:"Error",message:"EncodingError U+567B"});
assert.throws(() => {ms932Encoder.encode("\u567C")}, {name:"Error",message:"EncodingError U+567C"});
assert.throws(() => {ms932Encoder.encode("\u567D")}, {name:"Error",message:"EncodingError U+567D"});
assert.throws(() => {ms932Encoder.encode("\u567E")}, {name:"Error",message:"EncodingError U+567E"});
assert.throws(() => {ms932Encoder.encode("\u567F")}, {name:"Error",message:"EncodingError U+567F"});
r = r && ([...ms932Encoder.encode("嚀")].join(",") === "154,134"); // U+5680
assert.throws(() => {ms932Encoder.encode("\u5681")}, {name:"Error",message:"EncodingError U+5681"});
assert.throws(() => {ms932Encoder.encode("\u5682")}, {name:"Error",message:"EncodingError U+5682"});
assert.throws(() => {ms932Encoder.encode("\u5683")}, {name:"Error",message:"EncodingError U+5683"});
assert.throws(() => {ms932Encoder.encode("\u5684")}, {name:"Error",message:"EncodingError U+5684"});
assert.throws(() => {ms932Encoder.encode("\u5685")}, {name:"Error",message:"EncodingError U+5685"});
r = r && ([...ms932Encoder.encode("嚆嚇")].join(",") === "154,133,138,100"); // U+5686
assert.throws(() => {ms932Encoder.encode("\u5688")}, {name:"Error",message:"EncodingError U+5688"});
assert.throws(() => {ms932Encoder.encode("\u5689")}, {name:"Error",message:"EncodingError U+5689"});
r = r && ([...ms932Encoder.encode("嚊")].join(",") === "154,135"); // U+568A
assert.throws(() => {ms932Encoder.encode("\u568B")}, {name:"Error",message:"EncodingError U+568B"});
assert.throws(() => {ms932Encoder.encode("\u568C")}, {name:"Error",message:"EncodingError U+568C"});
assert.throws(() => {ms932Encoder.encode("\u568D")}, {name:"Error",message:"EncodingError U+568D"});
assert.throws(() => {ms932Encoder.encode("\u568E")}, {name:"Error",message:"EncodingError U+568E"});
r = r && ([...ms932Encoder.encode("嚏")].join(",") === "154,138"); // U+568F
assert.throws(() => {ms932Encoder.encode("\u5690")}, {name:"Error",message:"EncodingError U+5690"});
assert.throws(() => {ms932Encoder.encode("\u5691")}, {name:"Error",message:"EncodingError U+5691"});
assert.throws(() => {ms932Encoder.encode("\u5692")}, {name:"Error",message:"EncodingError U+5692"});
assert.throws(() => {ms932Encoder.encode("\u5693")}, {name:"Error",message:"EncodingError U+5693"});
r = r && ([...ms932Encoder.encode("嚔")].join(",") === "154,137"); // U+5694
assert.throws(() => {ms932Encoder.encode("\u5695")}, {name:"Error",message:"EncodingError U+5695"});
assert.throws(() => {ms932Encoder.encode("\u5696")}, {name:"Error",message:"EncodingError U+5696"});
assert.throws(() => {ms932Encoder.encode("\u5697")}, {name:"Error",message:"EncodingError U+5697"});
assert.throws(() => {ms932Encoder.encode("\u5698")}, {name:"Error",message:"EncodingError U+5698"});
assert.throws(() => {ms932Encoder.encode("\u5699")}, {name:"Error",message:"EncodingError U+5699"});
assert.throws(() => {ms932Encoder.encode("\u569A")}, {name:"Error",message:"EncodingError U+569A"});
assert.throws(() => {ms932Encoder.encode("\u569B")}, {name:"Error",message:"EncodingError U+569B"});
assert.throws(() => {ms932Encoder.encode("\u569C")}, {name:"Error",message:"EncodingError U+569C"});
assert.throws(() => {ms932Encoder.encode("\u569D")}, {name:"Error",message:"EncodingError U+569D"});
assert.throws(() => {ms932Encoder.encode("\u569E")}, {name:"Error",message:"EncodingError U+569E"});
assert.throws(() => {ms932Encoder.encode("\u569F")}, {name:"Error",message:"EncodingError U+569F"});
r = r && ([...ms932Encoder.encode("嚠")].join(",") === "154,136"); // U+56A0
assert.throws(() => {ms932Encoder.encode("\u56A1")}, {name:"Error",message:"EncodingError U+56A1"});
r = r && ([...ms932Encoder.encode("嚢")].join(",") === "148,88"); // U+56A2
assert.throws(() => {ms932Encoder.encode("\u56A3")}, {name:"Error",message:"EncodingError U+56A3"});
assert.throws(() => {ms932Encoder.encode("\u56A4")}, {name:"Error",message:"EncodingError U+56A4"});
r = r && ([...ms932Encoder.encode("嚥")].join(",") === "154,139"); // U+56A5
assert.throws(() => {ms932Encoder.encode("\u56A6")}, {name:"Error",message:"EncodingError U+56A6"});
assert.throws(() => {ms932Encoder.encode("\u56A7")}, {name:"Error",message:"EncodingError U+56A7"});
assert.throws(() => {ms932Encoder.encode("\u56A8")}, {name:"Error",message:"EncodingError U+56A8"});
assert.throws(() => {ms932Encoder.encode("\u56A9")}, {name:"Error",message:"EncodingError U+56A9"});
assert.throws(() => {ms932Encoder.encode("\u56AA")}, {name:"Error",message:"EncodingError U+56AA"});
assert.throws(() => {ms932Encoder.encode("\u56AB")}, {name:"Error",message:"EncodingError U+56AB"});
assert.throws(() => {ms932Encoder.encode("\u56AC")}, {name:"Error",message:"EncodingError U+56AC"});
assert.throws(() => {ms932Encoder.encode("\u56AD")}, {name:"Error",message:"EncodingError U+56AD"});
r = r && ([...ms932Encoder.encode("嚮")].join(",") === "154,140"); // U+56AE
assert.throws(() => {ms932Encoder.encode("\u56AF")}, {name:"Error",message:"EncodingError U+56AF"});
assert.throws(() => {ms932Encoder.encode("\u56B0")}, {name:"Error",message:"EncodingError U+56B0"});
assert.throws(() => {ms932Encoder.encode("\u56B1")}, {name:"Error",message:"EncodingError U+56B1"});
assert.throws(() => {ms932Encoder.encode("\u56B2")}, {name:"Error",message:"EncodingError U+56B2"});
assert.throws(() => {ms932Encoder.encode("\u56B3")}, {name:"Error",message:"EncodingError U+56B3"});
r = r && ([...ms932Encoder.encode("嚴")].join(",") === "154,142"); // U+56B4
assert.throws(() => {ms932Encoder.encode("\u56B5")}, {name:"Error",message:"EncodingError U+56B5"});
r = r && ([...ms932Encoder.encode("嚶")].join(",") === "154,141"); // U+56B6
assert.throws(() => {ms932Encoder.encode("\u56B7")}, {name:"Error",message:"EncodingError U+56B7"});
assert.throws(() => {ms932Encoder.encode("\u56B8")}, {name:"Error",message:"EncodingError U+56B8"});
assert.throws(() => {ms932Encoder.encode("\u56B9")}, {name:"Error",message:"EncodingError U+56B9"});
assert.throws(() => {ms932Encoder.encode("\u56BA")}, {name:"Error",message:"EncodingError U+56BA"});
assert.throws(() => {ms932Encoder.encode("\u56BB")}, {name:"Error",message:"EncodingError U+56BB"});
r = r && ([...ms932Encoder.encode("嚼")].join(",") === "154,144"); // U+56BC
assert.throws(() => {ms932Encoder.encode("\u56BD")}, {name:"Error",message:"EncodingError U+56BD"});
assert.throws(() => {ms932Encoder.encode("\u56BE")}, {name:"Error",message:"EncodingError U+56BE"});
assert.throws(() => {ms932Encoder.encode("\u56BF")}, {name:"Error",message:"EncodingError U+56BF"});
r = r && ([...ms932Encoder.encode("囀囁囂囃")].join(",") === "154,147,154,145,154,143,154,146"); // U+56C0
assert.throws(() => {ms932Encoder.encode("\u56C4")}, {name:"Error",message:"EncodingError U+56C4"});
assert.throws(() => {ms932Encoder.encode("\u56C5")}, {name:"Error",message:"EncodingError U+56C5"});
assert.throws(() => {ms932Encoder.encode("\u56C6")}, {name:"Error",message:"EncodingError U+56C6"});
assert.throws(() => {ms932Encoder.encode("\u56C7")}, {name:"Error",message:"EncodingError U+56C7"});
r = r && ([...ms932Encoder.encode("囈")].join(",") === "154,148"); // U+56C8
assert.throws(() => {ms932Encoder.encode("\u56C9")}, {name:"Error",message:"EncodingError U+56C9"});
assert.throws(() => {ms932Encoder.encode("\u56CA")}, {name:"Error",message:"EncodingError U+56CA"});
assert.throws(() => {ms932Encoder.encode("\u56CB")}, {name:"Error",message:"EncodingError U+56CB"});
assert.throws(() => {ms932Encoder.encode("\u56CC")}, {name:"Error",message:"EncodingError U+56CC"});
assert.throws(() => {ms932Encoder.encode("\u56CD")}, {name:"Error",message:"EncodingError U+56CD"});
r = r && ([...ms932Encoder.encode("囎")].join(",") === "154,149"); // U+56CE
assert.throws(() => {ms932Encoder.encode("\u56CF")}, {name:"Error",message:"EncodingError U+56CF"});
assert.throws(() => {ms932Encoder.encode("\u56D0")}, {name:"Error",message:"EncodingError U+56D0"});
r = r && ([...ms932Encoder.encode("囑")].join(",") === "154,150"); // U+56D1
assert.throws(() => {ms932Encoder.encode("\u56D2")}, {name:"Error",message:"EncodingError U+56D2"});
r = r && ([...ms932Encoder.encode("囓")].join(",") === "154,151"); // U+56D3
assert.throws(() => {ms932Encoder.encode("\u56D4")}, {name:"Error",message:"EncodingError U+56D4"});
assert.throws(() => {ms932Encoder.encode("\u56D5")}, {name:"Error",message:"EncodingError U+56D5"});
assert.throws(() => {ms932Encoder.encode("\u56D6")}, {name:"Error",message:"EncodingError U+56D6"});
r = r && ([...ms932Encoder.encode("囗囘")].join(",") === "154,152,153,100"); // U+56D7
assert.throws(() => {ms932Encoder.encode("\u56D9")}, {name:"Error",message:"EncodingError U+56D9"});
r = r && ([...ms932Encoder.encode("囚四")].join(",") === "142,250,142,108"); // U+56DA
assert.throws(() => {ms932Encoder.encode("\u56DC")}, {name:"Error",message:"EncodingError U+56DC"});
assert.throws(() => {ms932Encoder.encode("\u56DD")}, {name:"Error",message:"EncodingError U+56DD"});
r = r && ([...ms932Encoder.encode("回")].join(",") === "137,241"); // U+56DE
assert.throws(() => {ms932Encoder.encode("\u56DF")}, {name:"Error",message:"EncodingError U+56DF"});
r = r && ([...ms932Encoder.encode("因")].join(",") === "136,246"); // U+56E0
assert.throws(() => {ms932Encoder.encode("\u56E1")}, {name:"Error",message:"EncodingError U+56E1"});
assert.throws(() => {ms932Encoder.encode("\u56E2")}, {name:"Error",message:"EncodingError U+56E2"});
r = r && ([...ms932Encoder.encode("団")].join(",") === "146,99"); // U+56E3
assert.throws(() => {ms932Encoder.encode("\u56E4")}, {name:"Error",message:"EncodingError U+56E4"});
assert.throws(() => {ms932Encoder.encode("\u56E5")}, {name:"Error",message:"EncodingError U+56E5"});
assert.throws(() => {ms932Encoder.encode("\u56E6")}, {name:"Error",message:"EncodingError U+56E6"});
assert.throws(() => {ms932Encoder.encode("\u56E7")}, {name:"Error",message:"EncodingError U+56E7"});
assert.throws(() => {ms932Encoder.encode("\u56E8")}, {name:"Error",message:"EncodingError U+56E8"});
assert.throws(() => {ms932Encoder.encode("\u56E9")}, {name:"Error",message:"EncodingError U+56E9"});
assert.throws(() => {ms932Encoder.encode("\u56EA")}, {name:"Error",message:"EncodingError U+56EA"});
assert.throws(() => {ms932Encoder.encode("\u56EB")}, {name:"Error",message:"EncodingError U+56EB"});
assert.throws(() => {ms932Encoder.encode("\u56EC")}, {name:"Error",message:"EncodingError U+56EC"});
assert.throws(() => {ms932Encoder.encode("\u56ED")}, {name:"Error",message:"EncodingError U+56ED"});
r = r && ([...ms932Encoder.encode("囮")].join(",") === "154,153"); // U+56EE
assert.throws(() => {ms932Encoder.encode("\u56EF")}, {name:"Error",message:"EncodingError U+56EF"});
r = r && ([...ms932Encoder.encode("困")].join(",") === "141,162"); // U+56F0
assert.throws(() => {ms932Encoder.encode("\u56F1")}, {name:"Error",message:"EncodingError U+56F1"});
r = r && ([...ms932Encoder.encode("囲図")].join(",") === "136,205,144,125"); // U+56F2
assert.throws(() => {ms932Encoder.encode("\u56F4")}, {name:"Error",message:"EncodingError U+56F4"});
assert.throws(() => {ms932Encoder.encode("\u56F5")}, {name:"Error",message:"EncodingError U+56F5"});
assert.throws(() => {ms932Encoder.encode("\u56F6")}, {name:"Error",message:"EncodingError U+56F6"});
assert.throws(() => {ms932Encoder.encode("\u56F7")}, {name:"Error",message:"EncodingError U+56F7"});
assert.throws(() => {ms932Encoder.encode("\u56F8")}, {name:"Error",message:"EncodingError U+56F8"});
r = r && ([...ms932Encoder.encode("囹固")].join(",") === "154,154,140,197"); // U+56F9
assert.throws(() => {ms932Encoder.encode("\u56FB")}, {name:"Error",message:"EncodingError U+56FB"});
assert.throws(() => {ms932Encoder.encode("\u56FC")}, {name:"Error",message:"EncodingError U+56FC"});
r = r && ([...ms932Encoder.encode("国")].join(",") === "141,145"); // U+56FD
assert.throws(() => {ms932Encoder.encode("\u56FE")}, {name:"Error",message:"EncodingError U+56FE"});
r = r && ([...ms932Encoder.encode("囿圀")].join(",") === "154,156,154,155"); // U+56FF
assert.throws(() => {ms932Encoder.encode("\u5701")}, {name:"Error",message:"EncodingError U+5701"});
assert.throws(() => {ms932Encoder.encode("\u5702")}, {name:"Error",message:"EncodingError U+5702"});
r = r && ([...ms932Encoder.encode("圃圄")].join(",") === "149,222,154,157"); // U+5703
assert.throws(() => {ms932Encoder.encode("\u5705")}, {name:"Error",message:"EncodingError U+5705"});
assert.throws(() => {ms932Encoder.encode("\u5706")}, {name:"Error",message:"EncodingError U+5706"});
assert.throws(() => {ms932Encoder.encode("\u5707")}, {name:"Error",message:"EncodingError U+5707"});
r = r && ([...ms932Encoder.encode("圈圉")].join(",") === "154,159,154,158"); // U+5708
assert.throws(() => {ms932Encoder.encode("\u570A")}, {name:"Error",message:"EncodingError U+570A"});
r = r && ([...ms932Encoder.encode("國")].join(",") === "154,160"); // U+570B
assert.throws(() => {ms932Encoder.encode("\u570C")}, {name:"Error",message:"EncodingError U+570C"});
r = r && ([...ms932Encoder.encode("圍")].join(",") === "154,161"); // U+570D
assert.throws(() => {ms932Encoder.encode("\u570E")}, {name:"Error",message:"EncodingError U+570E"});
r = r && ([...ms932Encoder.encode("圏")].join(",") === "140,151"); // U+570F
assert.throws(() => {ms932Encoder.encode("\u5710")}, {name:"Error",message:"EncodingError U+5710"});
assert.throws(() => {ms932Encoder.encode("\u5711")}, {name:"Error",message:"EncodingError U+5711"});
r = r && ([...ms932Encoder.encode("園圓")].join(",") === "137,128,154,162"); // U+5712
assert.throws(() => {ms932Encoder.encode("\u5714")}, {name:"Error",message:"EncodingError U+5714"});
assert.throws(() => {ms932Encoder.encode("\u5715")}, {name:"Error",message:"EncodingError U+5715"});
r = r && ([...ms932Encoder.encode("圖")].join(",") === "154,164"); // U+5716
assert.throws(() => {ms932Encoder.encode("\u5717")}, {name:"Error",message:"EncodingError U+5717"});
r = r && ([...ms932Encoder.encode("團")].join(",") === "154,163"); // U+5718
assert.throws(() => {ms932Encoder.encode("\u5719")}, {name:"Error",message:"EncodingError U+5719"});
assert.throws(() => {ms932Encoder.encode("\u571A")}, {name:"Error",message:"EncodingError U+571A"});
assert.throws(() => {ms932Encoder.encode("\u571B")}, {name:"Error",message:"EncodingError U+571B"});
r = r && ([...ms932Encoder.encode("圜")].join(",") === "154,166"); // U+571C
assert.throws(() => {ms932Encoder.encode("\u571D")}, {name:"Error",message:"EncodingError U+571D"});
assert.throws(() => {ms932Encoder.encode("\u571E")}, {name:"Error",message:"EncodingError U+571E"});
r = r && ([...ms932Encoder.encode("土")].join(",") === "147,121"); // U+571F
assert.throws(() => {ms932Encoder.encode("\u5720")}, {name:"Error",message:"EncodingError U+5720"});
assert.throws(() => {ms932Encoder.encode("\u5721")}, {name:"Error",message:"EncodingError U+5721"});
assert.throws(() => {ms932Encoder.encode("\u5722")}, {name:"Error",message:"EncodingError U+5722"});
assert.throws(() => {ms932Encoder.encode("\u5723")}, {name:"Error",message:"EncodingError U+5723"});
assert.throws(() => {ms932Encoder.encode("\u5724")}, {name:"Error",message:"EncodingError U+5724"});
assert.throws(() => {ms932Encoder.encode("\u5725")}, {name:"Error",message:"EncodingError U+5725"});
r = r && ([...ms932Encoder.encode("圦圧在")].join(",") === "154,167,136,179,141,221"); // U+5726
assert.throws(() => {ms932Encoder.encode("\u5729")}, {name:"Error",message:"EncodingError U+5729"});
assert.throws(() => {ms932Encoder.encode("\u572A")}, {name:"Error",message:"EncodingError U+572A"});
assert.throws(() => {ms932Encoder.encode("\u572B")}, {name:"Error",message:"EncodingError U+572B"});
assert.throws(() => {ms932Encoder.encode("\u572C")}, {name:"Error",message:"EncodingError U+572C"});
r = r && ([...ms932Encoder.encode("圭")].join(",") === "140,92"); // U+572D
assert.throws(() => {ms932Encoder.encode("\u572E")}, {name:"Error",message:"EncodingError U+572E"});
assert.throws(() => {ms932Encoder.encode("\u572F")}, {name:"Error",message:"EncodingError U+572F"});
r = r && ([...ms932Encoder.encode("地")].join(",") === "146,110"); // U+5730
assert.throws(() => {ms932Encoder.encode("\u5731")}, {name:"Error",message:"EncodingError U+5731"});
assert.throws(() => {ms932Encoder.encode("\u5732")}, {name:"Error",message:"EncodingError U+5732"});
assert.throws(() => {ms932Encoder.encode("\u5733")}, {name:"Error",message:"EncodingError U+5733"});
assert.throws(() => {ms932Encoder.encode("\u5734")}, {name:"Error",message:"EncodingError U+5734"});
assert.throws(() => {ms932Encoder.encode("\u5735")}, {name:"Error",message:"EncodingError U+5735"});
assert.throws(() => {ms932Encoder.encode("\u5736")}, {name:"Error",message:"EncodingError U+5736"});
r = r && ([...ms932Encoder.encode("圷圸")].join(",") === "154,168,154,169"); // U+5737
assert.throws(() => {ms932Encoder.encode("\u5739")}, {name:"Error",message:"EncodingError U+5739"});
assert.throws(() => {ms932Encoder.encode("\u573A")}, {name:"Error",message:"EncodingError U+573A"});
r = r && ([...ms932Encoder.encode("圻")].join(",") === "154,171"); // U+573B
assert.throws(() => {ms932Encoder.encode("\u573C")}, {name:"Error",message:"EncodingError U+573C"});
assert.throws(() => {ms932Encoder.encode("\u573D")}, {name:"Error",message:"EncodingError U+573D"});
assert.throws(() => {ms932Encoder.encode("\u573E")}, {name:"Error",message:"EncodingError U+573E"});
assert.throws(() => {ms932Encoder.encode("\u573F")}, {name:"Error",message:"EncodingError U+573F"});
r = r && ([...ms932Encoder.encode("址")].join(",") === "154,172"); // U+5740
assert.throws(() => {ms932Encoder.encode("\u5741")}, {name:"Error",message:"EncodingError U+5741"});
r = r && ([...ms932Encoder.encode("坂")].join(",") === "141,226"); // U+5742
assert.throws(() => {ms932Encoder.encode("\u5743")}, {name:"Error",message:"EncodingError U+5743"});
assert.throws(() => {ms932Encoder.encode("\u5744")}, {name:"Error",message:"EncodingError U+5744"});
assert.throws(() => {ms932Encoder.encode("\u5745")}, {name:"Error",message:"EncodingError U+5745"});
assert.throws(() => {ms932Encoder.encode("\u5746")}, {name:"Error",message:"EncodingError U+5746"});
r = r && ([...ms932Encoder.encode("均")].join(",") === "139,207"); // U+5747
assert.throws(() => {ms932Encoder.encode("\u5748")}, {name:"Error",message:"EncodingError U+5748"});
assert.throws(() => {ms932Encoder.encode("\u5749")}, {name:"Error",message:"EncodingError U+5749"});
r = r && ([...ms932Encoder.encode("坊")].join(",") === "150,86"); // U+574A
assert.throws(() => {ms932Encoder.encode("\u574B")}, {name:"Error",message:"EncodingError U+574B"});
assert.throws(() => {ms932Encoder.encode("\u574C")}, {name:"Error",message:"EncodingError U+574C"});
assert.throws(() => {ms932Encoder.encode("\u574D")}, {name:"Error",message:"EncodingError U+574D"});
r = r && ([...ms932Encoder.encode("坎坏坐坑")].join(",") === "154,170,154,173,141,191,141,66"); // U+574E
assert.throws(() => {ms932Encoder.encode("\u5752")}, {name:"Error",message:"EncodingError U+5752"});
assert.throws(() => {ms932Encoder.encode("\u5753")}, {name:"Error",message:"EncodingError U+5753"});
assert.throws(() => {ms932Encoder.encode("\u5754")}, {name:"Error",message:"EncodingError U+5754"});
assert.throws(() => {ms932Encoder.encode("\u5755")}, {name:"Error",message:"EncodingError U+5755"});
assert.throws(() => {ms932Encoder.encode("\u5756")}, {name:"Error",message:"EncodingError U+5756"});
assert.throws(() => {ms932Encoder.encode("\u5757")}, {name:"Error",message:"EncodingError U+5757"});
assert.throws(() => {ms932Encoder.encode("\u5758")}, {name:"Error",message:"EncodingError U+5758"});
r = r && ([...ms932Encoder.encode("坙")].join(",") === "250,150"); // U+5759
assert.throws(() => {ms932Encoder.encode("\u575A")}, {name:"Error",message:"EncodingError U+575A"});
assert.throws(() => {ms932Encoder.encode("\u575B")}, {name:"Error",message:"EncodingError U+575B"});
assert.throws(() => {ms932Encoder.encode("\u575C")}, {name:"Error",message:"EncodingError U+575C"});
assert.throws(() => {ms932Encoder.encode("\u575D")}, {name:"Error",message:"EncodingError U+575D"});
assert.throws(() => {ms932Encoder.encode("\u575E")}, {name:"Error",message:"EncodingError U+575E"});
assert.throws(() => {ms932Encoder.encode("\u575F")}, {name:"Error",message:"EncodingError U+575F"});
assert.throws(() => {ms932Encoder.encode("\u5760")}, {name:"Error",message:"EncodingError U+5760"});
r = r && ([...ms932Encoder.encode("坡")].join(",") === "154,177"); // U+5761
assert.throws(() => {ms932Encoder.encode("\u5762")}, {name:"Error",message:"EncodingError U+5762"});
assert.throws(() => {ms932Encoder.encode("\u5763")}, {name:"Error",message:"EncodingError U+5763"});
r = r && ([...ms932Encoder.encode("坤坥坦")].join(",") === "141,163,250,151,146,82"); // U+5764
assert.throws(() => {ms932Encoder.encode("\u5767")}, {name:"Error",message:"EncodingError U+5767"});
assert.throws(() => {ms932Encoder.encode("\u5768")}, {name:"Error",message:"EncodingError U+5768"});
r = r && ([...ms932Encoder.encode("坩坪")].join(",") === "154,174,146,216"); // U+5769
assert.throws(() => {ms932Encoder.encode("\u576B")}, {name:"Error",message:"EncodingError U+576B"});
assert.throws(() => {ms932Encoder.encode("\u576C")}, {name:"Error",message:"EncodingError U+576C"});
assert.throws(() => {ms932Encoder.encode("\u576D")}, {name:"Error",message:"EncodingError U+576D"});
assert.throws(() => {ms932Encoder.encode("\u576E")}, {name:"Error",message:"EncodingError U+576E"});
assert.throws(() => {ms932Encoder.encode("\u576F")}, {name:"Error",message:"EncodingError U+576F"});
assert.throws(() => {ms932Encoder.encode("\u5770")}, {name:"Error",message:"EncodingError U+5770"});
assert.throws(() => {ms932Encoder.encode("\u5771")}, {name:"Error",message:"EncodingError U+5771"});
assert.throws(() => {ms932Encoder.encode("\u5772")}, {name:"Error",message:"EncodingError U+5772"});
assert.throws(() => {ms932Encoder.encode("\u5773")}, {name:"Error",message:"EncodingError U+5773"});
assert.throws(() => {ms932Encoder.encode("\u5774")}, {name:"Error",message:"EncodingError U+5774"});
assert.throws(() => {ms932Encoder.encode("\u5775")}, {name:"Error",message:"EncodingError U+5775"});
assert.throws(() => {ms932Encoder.encode("\u5776")}, {name:"Error",message:"EncodingError U+5776"});
assert.throws(() => {ms932Encoder.encode("\u5777")}, {name:"Error",message:"EncodingError U+5777"});
assert.throws(() => {ms932Encoder.encode("\u5778")}, {name:"Error",message:"EncodingError U+5778"});
assert.throws(() => {ms932Encoder.encode("\u5779")}, {name:"Error",message:"EncodingError U+5779"});
assert.throws(() => {ms932Encoder.encode("\u577A")}, {name:"Error",message:"EncodingError U+577A"});
assert.throws(() => {ms932Encoder.encode("\u577B")}, {name:"Error",message:"EncodingError U+577B"});
assert.throws(() => {ms932Encoder.encode("\u577C")}, {name:"Error",message:"EncodingError U+577C"});
assert.throws(() => {ms932Encoder.encode("\u577D")}, {name:"Error",message:"EncodingError U+577D"});
assert.throws(() => {ms932Encoder.encode("\u577E")}, {name:"Error",message:"EncodingError U+577E"});
r = r && ([...ms932Encoder.encode("坿")].join(",") === "154,178"); // U+577F
assert.throws(() => {ms932Encoder.encode("\u5780")}, {name:"Error",message:"EncodingError U+5780"});
assert.throws(() => {ms932Encoder.encode("\u5781")}, {name:"Error",message:"EncodingError U+5781"});
r = r && ([...ms932Encoder.encode("垂")].join(",") === "144,130"); // U+5782
assert.throws(() => {ms932Encoder.encode("\u5783")}, {name:"Error",message:"EncodingError U+5783"});
assert.throws(() => {ms932Encoder.encode("\u5784")}, {name:"Error",message:"EncodingError U+5784"});
assert.throws(() => {ms932Encoder.encode("\u5785")}, {name:"Error",message:"EncodingError U+5785"});
assert.throws(() => {ms932Encoder.encode("\u5786")}, {name:"Error",message:"EncodingError U+5786"});
assert.throws(() => {ms932Encoder.encode("\u5787")}, {name:"Error",message:"EncodingError U+5787"});
r = r && ([...ms932Encoder.encode("垈垉")].join(",") === "154,176,154,179"); // U+5788
assert.throws(() => {ms932Encoder.encode("\u578A")}, {name:"Error",message:"EncodingError U+578A"});
r = r && ([...ms932Encoder.encode("型")].join(",") === "140,94"); // U+578B
assert.throws(() => {ms932Encoder.encode("\u578C")}, {name:"Error",message:"EncodingError U+578C"});
assert.throws(() => {ms932Encoder.encode("\u578D")}, {name:"Error",message:"EncodingError U+578D"});
assert.throws(() => {ms932Encoder.encode("\u578E")}, {name:"Error",message:"EncodingError U+578E"});
assert.throws(() => {ms932Encoder.encode("\u578F")}, {name:"Error",message:"EncodingError U+578F"});
assert.throws(() => {ms932Encoder.encode("\u5790")}, {name:"Error",message:"EncodingError U+5790"});
assert.throws(() => {ms932Encoder.encode("\u5791")}, {name:"Error",message:"EncodingError U+5791"});
assert.throws(() => {ms932Encoder.encode("\u5792")}, {name:"Error",message:"EncodingError U+5792"});
r = r && ([...ms932Encoder.encode("垓")].join(",") === "154,180"); // U+5793
assert.throws(() => {ms932Encoder.encode("\u5794")}, {name:"Error",message:"EncodingError U+5794"});
assert.throws(() => {ms932Encoder.encode("\u5795")}, {name:"Error",message:"EncodingError U+5795"});
assert.throws(() => {ms932Encoder.encode("\u5796")}, {name:"Error",message:"EncodingError U+5796"});
assert.throws(() => {ms932Encoder.encode("\u5797")}, {name:"Error",message:"EncodingError U+5797"});
assert.throws(() => {ms932Encoder.encode("\u5798")}, {name:"Error",message:"EncodingError U+5798"});
assert.throws(() => {ms932Encoder.encode("\u5799")}, {name:"Error",message:"EncodingError U+5799"});
assert.throws(() => {ms932Encoder.encode("\u579A")}, {name:"Error",message:"EncodingError U+579A"});
assert.throws(() => {ms932Encoder.encode("\u579B")}, {name:"Error",message:"EncodingError U+579B"});
assert.throws(() => {ms932Encoder.encode("\u579C")}, {name:"Error",message:"EncodingError U+579C"});
assert.throws(() => {ms932Encoder.encode("\u579D")}, {name:"Error",message:"EncodingError U+579D"});
assert.throws(() => {ms932Encoder.encode("\u579E")}, {name:"Error",message:"EncodingError U+579E"});
assert.throws(() => {ms932Encoder.encode("\u579F")}, {name:"Error",message:"EncodingError U+579F"});
r = r && ([...ms932Encoder.encode("垠")].join(",") === "154,181"); // U+57A0
assert.throws(() => {ms932Encoder.encode("\u57A1")}, {name:"Error",message:"EncodingError U+57A1"});
r = r && ([...ms932Encoder.encode("垢垣垤")].join(",") === "141,67,138,95,154,183"); // U+57A2
assert.throws(() => {ms932Encoder.encode("\u57A5")}, {name:"Error",message:"EncodingError U+57A5"});
assert.throws(() => {ms932Encoder.encode("\u57A6")}, {name:"Error",message:"EncodingError U+57A6"});
assert.throws(() => {ms932Encoder.encode("\u57A7")}, {name:"Error",message:"EncodingError U+57A7"});
assert.throws(() => {ms932Encoder.encode("\u57A8")}, {name:"Error",message:"EncodingError U+57A8"});
assert.throws(() => {ms932Encoder.encode("\u57A9")}, {name:"Error",message:"EncodingError U+57A9"});
r = r && ([...ms932Encoder.encode("垪")].join(",") === "154,184"); // U+57AA
assert.throws(() => {ms932Encoder.encode("\u57AB")}, {name:"Error",message:"EncodingError U+57AB"});
r = r && ([...ms932Encoder.encode("垬")].join(",") === "250,152"); // U+57AC
assert.throws(() => {ms932Encoder.encode("\u57AD")}, {name:"Error",message:"EncodingError U+57AD"});
assert.throws(() => {ms932Encoder.encode("\u57AE")}, {name:"Error",message:"EncodingError U+57AE"});
assert.throws(() => {ms932Encoder.encode("\u57AF")}, {name:"Error",message:"EncodingError U+57AF"});
r = r && ([...ms932Encoder.encode("垰")].join(",") === "154,185"); // U+57B0
assert.throws(() => {ms932Encoder.encode("\u57B1")}, {name:"Error",message:"EncodingError U+57B1"});
assert.throws(() => {ms932Encoder.encode("\u57B2")}, {name:"Error",message:"EncodingError U+57B2"});
r = r && ([...ms932Encoder.encode("垳")].join(",") === "154,182"); // U+57B3
assert.throws(() => {ms932Encoder.encode("\u57B4")}, {name:"Error",message:"EncodingError U+57B4"});
assert.throws(() => {ms932Encoder.encode("\u57B5")}, {name:"Error",message:"EncodingError U+57B5"});
assert.throws(() => {ms932Encoder.encode("\u57B6")}, {name:"Error",message:"EncodingError U+57B6"});
assert.throws(() => {ms932Encoder.encode("\u57B7")}, {name:"Error",message:"EncodingError U+57B7"});
assert.throws(() => {ms932Encoder.encode("\u57B8")}, {name:"Error",message:"EncodingError U+57B8"});
assert.throws(() => {ms932Encoder.encode("\u57B9")}, {name:"Error",message:"EncodingError U+57B9"});
assert.throws(() => {ms932Encoder.encode("\u57BA")}, {name:"Error",message:"EncodingError U+57BA"});
assert.throws(() => {ms932Encoder.encode("\u57BB")}, {name:"Error",message:"EncodingError U+57BB"});
assert.throws(() => {ms932Encoder.encode("\u57BC")}, {name:"Error",message:"EncodingError U+57BC"});
assert.throws(() => {ms932Encoder.encode("\u57BD")}, {name:"Error",message:"EncodingError U+57BD"});
assert.throws(() => {ms932Encoder.encode("\u57BE")}, {name:"Error",message:"EncodingError U+57BE"});
assert.throws(() => {ms932Encoder.encode("\u57BF")}, {name:"Error",message:"EncodingError U+57BF"});
r = r && ([...ms932Encoder.encode("埀")].join(",") === "154,175"); // U+57C0
assert.throws(() => {ms932Encoder.encode("\u57C1")}, {name:"Error",message:"EncodingError U+57C1"});
assert.throws(() => {ms932Encoder.encode("\u57C2")}, {name:"Error",message:"EncodingError U+57C2"});
r = r && ([...ms932Encoder.encode("埃")].join(",") === "154,186"); // U+57C3
assert.throws(() => {ms932Encoder.encode("\u57C4")}, {name:"Error",message:"EncodingError U+57C4"});
assert.throws(() => {ms932Encoder.encode("\u57C5")}, {name:"Error",message:"EncodingError U+57C5"});
r = r && ([...ms932Encoder.encode("埆埇埈")].join(",") === "154,187,250,154,250,153"); // U+57C6
assert.throws(() => {ms932Encoder.encode("\u57C9")}, {name:"Error",message:"EncodingError U+57C9"});
assert.throws(() => {ms932Encoder.encode("\u57CA")}, {name:"Error",message:"EncodingError U+57CA"});
r = r && ([...ms932Encoder.encode("埋")].join(",") === "150,132"); // U+57CB
assert.throws(() => {ms932Encoder.encode("\u57CC")}, {name:"Error",message:"EncodingError U+57CC"});
assert.throws(() => {ms932Encoder.encode("\u57CD")}, {name:"Error",message:"EncodingError U+57CD"});
r = r && ([...ms932Encoder.encode("城")].join(",") === "143,233"); // U+57CE
assert.throws(() => {ms932Encoder.encode("\u57CF")}, {name:"Error",message:"EncodingError U+57CF"});
assert.throws(() => {ms932Encoder.encode("\u57D0")}, {name:"Error",message:"EncodingError U+57D0"});
assert.throws(() => {ms932Encoder.encode("\u57D1")}, {name:"Error",message:"EncodingError U+57D1"});
r = r && ([...ms932Encoder.encode("埒埓埔")].join(",") === "154,189,154,190,154,188"); // U+57D2
assert.throws(() => {ms932Encoder.encode("\u57D5")}, {name:"Error",message:"EncodingError U+57D5"});
r = r && ([...ms932Encoder.encode("埖")].join(",") === "154,192"); // U+57D6
assert.throws(() => {ms932Encoder.encode("\u57D7")}, {name:"Error",message:"EncodingError U+57D7"});
assert.throws(() => {ms932Encoder.encode("\u57D8")}, {name:"Error",message:"EncodingError U+57D8"});
assert.throws(() => {ms932Encoder.encode("\u57D9")}, {name:"Error",message:"EncodingError U+57D9"});
assert.throws(() => {ms932Encoder.encode("\u57DA")}, {name:"Error",message:"EncodingError U+57DA"});
assert.throws(() => {ms932Encoder.encode("\u57DB")}, {name:"Error",message:"EncodingError U+57DB"});
r = r && ([...ms932Encoder.encode("埜")].join(",") === "148,87"); // U+57DC
assert.throws(() => {ms932Encoder.encode("\u57DD")}, {name:"Error",message:"EncodingError U+57DD"});
assert.throws(() => {ms932Encoder.encode("\u57DE")}, {name:"Error",message:"EncodingError U+57DE"});
r = r && ([...ms932Encoder.encode("域埠")].join(",") === "136,230,149,117"); // U+57DF
assert.throws(() => {ms932Encoder.encode("\u57E1")}, {name:"Error",message:"EncodingError U+57E1"});
assert.throws(() => {ms932Encoder.encode("\u57E2")}, {name:"Error",message:"EncodingError U+57E2"});
r = r && ([...ms932Encoder.encode("埣")].join(",") === "154,193"); // U+57E3
assert.throws(() => {ms932Encoder.encode("\u57E4")}, {name:"Error",message:"EncodingError U+57E4"});
assert.throws(() => {ms932Encoder.encode("\u57E5")}, {name:"Error",message:"EncodingError U+57E5"});
assert.throws(() => {ms932Encoder.encode("\u57E6")}, {name:"Error",message:"EncodingError U+57E6"});
assert.throws(() => {ms932Encoder.encode("\u57E7")}, {name:"Error",message:"EncodingError U+57E7"});
assert.throws(() => {ms932Encoder.encode("\u57E8")}, {name:"Error",message:"EncodingError U+57E8"});
assert.throws(() => {ms932Encoder.encode("\u57E9")}, {name:"Error",message:"EncodingError U+57E9"});
assert.throws(() => {ms932Encoder.encode("\u57EA")}, {name:"Error",message:"EncodingError U+57EA"});
assert.throws(() => {ms932Encoder.encode("\u57EB")}, {name:"Error",message:"EncodingError U+57EB"});
assert.throws(() => {ms932Encoder.encode("\u57EC")}, {name:"Error",message:"EncodingError U+57EC"});
assert.throws(() => {ms932Encoder.encode("\u57ED")}, {name:"Error",message:"EncodingError U+57ED"});
assert.throws(() => {ms932Encoder.encode("\u57EE")}, {name:"Error",message:"EncodingError U+57EE"});
assert.throws(() => {ms932Encoder.encode("\u57EF")}, {name:"Error",message:"EncodingError U+57EF"});
assert.throws(() => {ms932Encoder.encode("\u57F0")}, {name:"Error",message:"EncodingError U+57F0"});
assert.throws(() => {ms932Encoder.encode("\u57F1")}, {name:"Error",message:"EncodingError U+57F1"});
assert.throws(() => {ms932Encoder.encode("\u57F2")}, {name:"Error",message:"EncodingError U+57F2"});
assert.throws(() => {ms932Encoder.encode("\u57F3")}, {name:"Error",message:"EncodingError U+57F3"});
r = r && ([...ms932Encoder.encode("埴")].join(",") === "143,251"); // U+57F4
assert.throws(() => {ms932Encoder.encode("\u57F5")}, {name:"Error",message:"EncodingError U+57F5"});
assert.throws(() => {ms932Encoder.encode("\u57F6")}, {name:"Error",message:"EncodingError U+57F6"});
r = r && ([...ms932Encoder.encode("執")].join(",") === "142,183"); // U+57F7
assert.throws(() => {ms932Encoder.encode("\u57F8")}, {name:"Error",message:"EncodingError U+57F8"});
r = r && ([...ms932Encoder.encode("培基")].join(",") === "148,124,138,238"); // U+57F9
assert.throws(() => {ms932Encoder.encode("\u57FB")}, {name:"Error",message:"EncodingError U+57FB"});
r = r && ([...ms932Encoder.encode("埼")].join(",") === "141,233"); // U+57FC
assert.throws(() => {ms932Encoder.encode("\u57FD")}, {name:"Error",message:"EncodingError U+57FD"});
assert.throws(() => {ms932Encoder.encode("\u57FE")}, {name:"Error",message:"EncodingError U+57FE"});
assert.throws(() => {ms932Encoder.encode("\u57FF")}, {name:"Error",message:"EncodingError U+57FF"});

assert.strictEqual(r, true);

  });

});
