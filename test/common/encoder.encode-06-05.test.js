import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "../../dist/index.js";

describe("Ms932Encoder.prototype.encode 6", () => {

  it("encode(string) - U+5400-U+57FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u5400")}).to.throw(Error, "EncodingError U+5400");
r = r && ([...ms932Encoder.encode("吁")].join(",") === "153,220"); // U+5401
expect(() => {ms932Encoder.encode("\u5402")}).to.throw(Error, "EncodingError U+5402");
r = r && ([...ms932Encoder.encode("吃各")].join(",") === "139,104,138,101"); // U+5403
expect(() => {ms932Encoder.encode("\u5405")}).to.throw(Error, "EncodingError U+5405");
expect(() => {ms932Encoder.encode("\u5406")}).to.throw(Error, "EncodingError U+5406");
expect(() => {ms932Encoder.encode("\u5407")}).to.throw(Error, "EncodingError U+5407");
r = r && ([...ms932Encoder.encode("合吉吊吋同名后吏吐向")].join(",") === "141,135,139,103,146,221,137,68,147,175,150,188,141,64,151,153,147,102,140,252"); // U+5408
expect(() => {ms932Encoder.encode("\u5412")}).to.throw(Error, "EncodingError U+5412");
expect(() => {ms932Encoder.encode("\u5413")}).to.throw(Error, "EncodingError U+5413");
expect(() => {ms932Encoder.encode("\u5414")}).to.throw(Error, "EncodingError U+5414");
expect(() => {ms932Encoder.encode("\u5415")}).to.throw(Error, "EncodingError U+5415");
expect(() => {ms932Encoder.encode("\u5416")}).to.throw(Error, "EncodingError U+5416");
expect(() => {ms932Encoder.encode("\u5417")}).to.throw(Error, "EncodingError U+5417");
expect(() => {ms932Encoder.encode("\u5418")}).to.throw(Error, "EncodingError U+5418");
expect(() => {ms932Encoder.encode("\u5419")}).to.throw(Error, "EncodingError U+5419");
expect(() => {ms932Encoder.encode("\u541A")}).to.throw(Error, "EncodingError U+541A");
r = r && ([...ms932Encoder.encode("君")].join(",") === "140,78"); // U+541B
expect(() => {ms932Encoder.encode("\u541C")}).to.throw(Error, "EncodingError U+541C");
r = r && ([...ms932Encoder.encode("吝")].join(",") === "153,229"); // U+541D
expect(() => {ms932Encoder.encode("\u541E")}).to.throw(Error, "EncodingError U+541E");
r = r && ([...ms932Encoder.encode("吟吠")].join(",") === "139,225,150,105"); // U+541F
expect(() => {ms932Encoder.encode("\u5421")}).to.throw(Error, "EncodingError U+5421");
expect(() => {ms932Encoder.encode("\u5422")}).to.throw(Error, "EncodingError U+5422");
expect(() => {ms932Encoder.encode("\u5423")}).to.throw(Error, "EncodingError U+5423");
expect(() => {ms932Encoder.encode("\u5424")}).to.throw(Error, "EncodingError U+5424");
expect(() => {ms932Encoder.encode("\u5425")}).to.throw(Error, "EncodingError U+5425");
r = r && ([...ms932Encoder.encode("否")].join(",") === "148,219"); // U+5426
expect(() => {ms932Encoder.encode("\u5427")}).to.throw(Error, "EncodingError U+5427");
expect(() => {ms932Encoder.encode("\u5428")}).to.throw(Error, "EncodingError U+5428");
r = r && ([...ms932Encoder.encode("吩")].join(",") === "153,228"); // U+5429
expect(() => {ms932Encoder.encode("\u542A")}).to.throw(Error, "EncodingError U+542A");
r = r && ([...ms932Encoder.encode("含听吭吮")].join(",") === "138,220,153,223,153,224,153,226"); // U+542B
expect(() => {ms932Encoder.encode("\u542F")}).to.throw(Error, "EncodingError U+542F");
expect(() => {ms932Encoder.encode("\u5430")}).to.throw(Error, "EncodingError U+5430");
expect(() => {ms932Encoder.encode("\u5431")}).to.throw(Error, "EncodingError U+5431");
expect(() => {ms932Encoder.encode("\u5432")}).to.throw(Error, "EncodingError U+5432");
expect(() => {ms932Encoder.encode("\u5433")}).to.throw(Error, "EncodingError U+5433");
expect(() => {ms932Encoder.encode("\u5434")}).to.throw(Error, "EncodingError U+5434");
expect(() => {ms932Encoder.encode("\u5435")}).to.throw(Error, "EncodingError U+5435");
r = r && ([...ms932Encoder.encode("吶")].join(",") === "153,227"); // U+5436
expect(() => {ms932Encoder.encode("\u5437")}).to.throw(Error, "EncodingError U+5437");
r = r && ([...ms932Encoder.encode("吸吹")].join(",") === "139,122,144,129"); // U+5438
expect(() => {ms932Encoder.encode("\u543A")}).to.throw(Error, "EncodingError U+543A");
r = r && ([...ms932Encoder.encode("吻吼吽吾")].join(",") === "149,171,153,225,153,221,140,225"); // U+543B
expect(() => {ms932Encoder.encode("\u543F")}).to.throw(Error, "EncodingError U+543F");
r = r && ([...ms932Encoder.encode("呀")].join(",") === "153,222"); // U+5440
expect(() => {ms932Encoder.encode("\u5441")}).to.throw(Error, "EncodingError U+5441");
r = r && ([...ms932Encoder.encode("呂")].join(",") === "152,67"); // U+5442
expect(() => {ms932Encoder.encode("\u5443")}).to.throw(Error, "EncodingError U+5443");
expect(() => {ms932Encoder.encode("\u5444")}).to.throw(Error, "EncodingError U+5444");
expect(() => {ms932Encoder.encode("\u5445")}).to.throw(Error, "EncodingError U+5445");
r = r && ([...ms932Encoder.encode("呆")].join(",") === "149,240"); // U+5446
expect(() => {ms932Encoder.encode("\u5447")}).to.throw(Error, "EncodingError U+5447");
r = r && ([...ms932Encoder.encode("呈呉告")].join(",") === "146,230,140,224,141,144"); // U+5448
expect(() => {ms932Encoder.encode("\u544B")}).to.throw(Error, "EncodingError U+544B");
expect(() => {ms932Encoder.encode("\u544C")}).to.throw(Error, "EncodingError U+544C");
expect(() => {ms932Encoder.encode("\u544D")}).to.throw(Error, "EncodingError U+544D");
r = r && ([...ms932Encoder.encode("呎")].join(",") === "153,230"); // U+544E
expect(() => {ms932Encoder.encode("\u544F")}).to.throw(Error, "EncodingError U+544F");
expect(() => {ms932Encoder.encode("\u5450")}).to.throw(Error, "EncodingError U+5450");
r = r && ([...ms932Encoder.encode("呑")].join(",") === "147,219"); // U+5451
expect(() => {ms932Encoder.encode("\u5452")}).to.throw(Error, "EncodingError U+5452");
expect(() => {ms932Encoder.encode("\u5453")}).to.throw(Error, "EncodingError U+5453");
expect(() => {ms932Encoder.encode("\u5454")}).to.throw(Error, "EncodingError U+5454");
expect(() => {ms932Encoder.encode("\u5455")}).to.throw(Error, "EncodingError U+5455");
expect(() => {ms932Encoder.encode("\u5456")}).to.throw(Error, "EncodingError U+5456");
expect(() => {ms932Encoder.encode("\u5457")}).to.throw(Error, "EncodingError U+5457");
expect(() => {ms932Encoder.encode("\u5458")}).to.throw(Error, "EncodingError U+5458");
expect(() => {ms932Encoder.encode("\u5459")}).to.throw(Error, "EncodingError U+5459");
expect(() => {ms932Encoder.encode("\u545A")}).to.throw(Error, "EncodingError U+545A");
expect(() => {ms932Encoder.encode("\u545B")}).to.throw(Error, "EncodingError U+545B");
expect(() => {ms932Encoder.encode("\u545C")}).to.throw(Error, "EncodingError U+545C");
expect(() => {ms932Encoder.encode("\u545D")}).to.throw(Error, "EncodingError U+545D");
expect(() => {ms932Encoder.encode("\u545E")}).to.throw(Error, "EncodingError U+545E");
r = r && ([...ms932Encoder.encode("呟")].join(",") === "153,234"); // U+545F
expect(() => {ms932Encoder.encode("\u5460")}).to.throw(Error, "EncodingError U+5460");
expect(() => {ms932Encoder.encode("\u5461")}).to.throw(Error, "EncodingError U+5461");
expect(() => {ms932Encoder.encode("\u5462")}).to.throw(Error, "EncodingError U+5462");
expect(() => {ms932Encoder.encode("\u5463")}).to.throw(Error, "EncodingError U+5463");
expect(() => {ms932Encoder.encode("\u5464")}).to.throw(Error, "EncodingError U+5464");
expect(() => {ms932Encoder.encode("\u5465")}).to.throw(Error, "EncodingError U+5465");
expect(() => {ms932Encoder.encode("\u5466")}).to.throw(Error, "EncodingError U+5466");
expect(() => {ms932Encoder.encode("\u5467")}).to.throw(Error, "EncodingError U+5467");
r = r && ([...ms932Encoder.encode("周")].join(",") === "142,252"); // U+5468
expect(() => {ms932Encoder.encode("\u5469")}).to.throw(Error, "EncodingError U+5469");
r = r && ([...ms932Encoder.encode("呪")].join(",") === "142,244"); // U+546A
expect(() => {ms932Encoder.encode("\u546B")}).to.throw(Error, "EncodingError U+546B");
expect(() => {ms932Encoder.encode("\u546C")}).to.throw(Error, "EncodingError U+546C");
expect(() => {ms932Encoder.encode("\u546D")}).to.throw(Error, "EncodingError U+546D");
expect(() => {ms932Encoder.encode("\u546E")}).to.throw(Error, "EncodingError U+546E");
expect(() => {ms932Encoder.encode("\u546F")}).to.throw(Error, "EncodingError U+546F");
r = r && ([...ms932Encoder.encode("呰呱")].join(",") === "153,237,153,235"); // U+5470
expect(() => {ms932Encoder.encode("\u5472")}).to.throw(Error, "EncodingError U+5472");
r = r && ([...ms932Encoder.encode("味")].join(",") === "150,161"); // U+5473
expect(() => {ms932Encoder.encode("\u5474")}).to.throw(Error, "EncodingError U+5474");
r = r && ([...ms932Encoder.encode("呵呶呷")].join(",") === "153,232,153,241,153,236"); // U+5475
expect(() => {ms932Encoder.encode("\u5478")}).to.throw(Error, "EncodingError U+5478");
expect(() => {ms932Encoder.encode("\u5479")}).to.throw(Error, "EncodingError U+5479");
expect(() => {ms932Encoder.encode("\u547A")}).to.throw(Error, "EncodingError U+547A");
r = r && ([...ms932Encoder.encode("呻呼命")].join(",") === "153,239,140,196,150,189"); // U+547B
expect(() => {ms932Encoder.encode("\u547E")}).to.throw(Error, "EncodingError U+547E");
expect(() => {ms932Encoder.encode("\u547F")}).to.throw(Error, "EncodingError U+547F");
r = r && ([...ms932Encoder.encode("咀")].join(",") === "153,240"); // U+5480
expect(() => {ms932Encoder.encode("\u5481")}).to.throw(Error, "EncodingError U+5481");
expect(() => {ms932Encoder.encode("\u5482")}).to.throw(Error, "EncodingError U+5482");
expect(() => {ms932Encoder.encode("\u5483")}).to.throw(Error, "EncodingError U+5483");
r = r && ([...ms932Encoder.encode("咄")].join(",") === "153,242"); // U+5484
expect(() => {ms932Encoder.encode("\u5485")}).to.throw(Error, "EncodingError U+5485");
r = r && ([...ms932Encoder.encode("咆")].join(",") === "153,244"); // U+5486
expect(() => {ms932Encoder.encode("\u5487")}).to.throw(Error, "EncodingError U+5487");
expect(() => {ms932Encoder.encode("\u5488")}).to.throw(Error, "EncodingError U+5488");
expect(() => {ms932Encoder.encode("\u5489")}).to.throw(Error, "EncodingError U+5489");
r = r && ([...ms932Encoder.encode("咊咋和")].join(",") === "250,146,141,238,152,97"); // U+548A
expect(() => {ms932Encoder.encode("\u548D")}).to.throw(Error, "EncodingError U+548D");
r = r && ([...ms932Encoder.encode("咎咏咐")].join(",") === "153,233,153,231,153,243"); // U+548E
expect(() => {ms932Encoder.encode("\u5491")}).to.throw(Error, "EncodingError U+5491");
r = r && ([...ms932Encoder.encode("咒")].join(",") === "153,238"); // U+5492
expect(() => {ms932Encoder.encode("\u5493")}).to.throw(Error, "EncodingError U+5493");
expect(() => {ms932Encoder.encode("\u5494")}).to.throw(Error, "EncodingError U+5494");
expect(() => {ms932Encoder.encode("\u5495")}).to.throw(Error, "EncodingError U+5495");
expect(() => {ms932Encoder.encode("\u5496")}).to.throw(Error, "EncodingError U+5496");
expect(() => {ms932Encoder.encode("\u5497")}).to.throw(Error, "EncodingError U+5497");
expect(() => {ms932Encoder.encode("\u5498")}).to.throw(Error, "EncodingError U+5498");
expect(() => {ms932Encoder.encode("\u5499")}).to.throw(Error, "EncodingError U+5499");
expect(() => {ms932Encoder.encode("\u549A")}).to.throw(Error, "EncodingError U+549A");
expect(() => {ms932Encoder.encode("\u549B")}).to.throw(Error, "EncodingError U+549B");
r = r && ([...ms932Encoder.encode("咜")].join(",") === "250,145"); // U+549C
expect(() => {ms932Encoder.encode("\u549D")}).to.throw(Error, "EncodingError U+549D");
expect(() => {ms932Encoder.encode("\u549E")}).to.throw(Error, "EncodingError U+549E");
expect(() => {ms932Encoder.encode("\u549F")}).to.throw(Error, "EncodingError U+549F");
expect(() => {ms932Encoder.encode("\u54A0")}).to.throw(Error, "EncodingError U+54A0");
expect(() => {ms932Encoder.encode("\u54A1")}).to.throw(Error, "EncodingError U+54A1");
r = r && ([...ms932Encoder.encode("咢")].join(",") === "153,246"); // U+54A2
expect(() => {ms932Encoder.encode("\u54A3")}).to.throw(Error, "EncodingError U+54A3");
r = r && ([...ms932Encoder.encode("咤咥")].join(",") === "154,66,153,248"); // U+54A4
expect(() => {ms932Encoder.encode("\u54A6")}).to.throw(Error, "EncodingError U+54A6");
expect(() => {ms932Encoder.encode("\u54A7")}).to.throw(Error, "EncodingError U+54A7");
r = r && ([...ms932Encoder.encode("咨咩")].join(",") === "153,252,250,147"); // U+54A8
expect(() => {ms932Encoder.encode("\u54AA")}).to.throw(Error, "EncodingError U+54AA");
r = r && ([...ms932Encoder.encode("咫咬")].join(",") === "154,64,153,249"); // U+54AB
expect(() => {ms932Encoder.encode("\u54AD")}).to.throw(Error, "EncodingError U+54AD");
expect(() => {ms932Encoder.encode("\u54AE")}).to.throw(Error, "EncodingError U+54AE");
r = r && ([...ms932Encoder.encode("咯")].join(",") === "154,93"); // U+54AF
expect(() => {ms932Encoder.encode("\u54B0")}).to.throw(Error, "EncodingError U+54B0");
expect(() => {ms932Encoder.encode("\u54B1")}).to.throw(Error, "EncodingError U+54B1");
r = r && ([...ms932Encoder.encode("咲咳")].join(",") === "141,231,138,80"); // U+54B2
expect(() => {ms932Encoder.encode("\u54B4")}).to.throw(Error, "EncodingError U+54B4");
expect(() => {ms932Encoder.encode("\u54B5")}).to.throw(Error, "EncodingError U+54B5");
expect(() => {ms932Encoder.encode("\u54B6")}).to.throw(Error, "EncodingError U+54B6");
expect(() => {ms932Encoder.encode("\u54B7")}).to.throw(Error, "EncodingError U+54B7");
r = r && ([...ms932Encoder.encode("咸")].join(",") === "153,247"); // U+54B8
expect(() => {ms932Encoder.encode("\u54B9")}).to.throw(Error, "EncodingError U+54B9");
expect(() => {ms932Encoder.encode("\u54BA")}).to.throw(Error, "EncodingError U+54BA");
expect(() => {ms932Encoder.encode("\u54BB")}).to.throw(Error, "EncodingError U+54BB");
r = r && ([...ms932Encoder.encode("咼咽咾")].join(",") === "154,68,136,244,154,67"); // U+54BC
expect(() => {ms932Encoder.encode("\u54BF")}).to.throw(Error, "EncodingError U+54BF");
r = r && ([...ms932Encoder.encode("哀品哂")].join(",") === "136,163,149,105,154,65"); // U+54C0
expect(() => {ms932Encoder.encode("\u54C3")}).to.throw(Error, "EncodingError U+54C3");
r = r && ([...ms932Encoder.encode("哄")].join(",") === "153,250"); // U+54C4
expect(() => {ms932Encoder.encode("\u54C5")}).to.throw(Error, "EncodingError U+54C5");
expect(() => {ms932Encoder.encode("\u54C6")}).to.throw(Error, "EncodingError U+54C6");
r = r && ([...ms932Encoder.encode("哇哈哉")].join(",") === "153,245,153,251,141,198"); // U+54C7
expect(() => {ms932Encoder.encode("\u54CA")}).to.throw(Error, "EncodingError U+54CA");
expect(() => {ms932Encoder.encode("\u54CB")}).to.throw(Error, "EncodingError U+54CB");
expect(() => {ms932Encoder.encode("\u54CC")}).to.throw(Error, "EncodingError U+54CC");
expect(() => {ms932Encoder.encode("\u54CD")}).to.throw(Error, "EncodingError U+54CD");
expect(() => {ms932Encoder.encode("\u54CE")}).to.throw(Error, "EncodingError U+54CE");
expect(() => {ms932Encoder.encode("\u54CF")}).to.throw(Error, "EncodingError U+54CF");
expect(() => {ms932Encoder.encode("\u54D0")}).to.throw(Error, "EncodingError U+54D0");
expect(() => {ms932Encoder.encode("\u54D1")}).to.throw(Error, "EncodingError U+54D1");
expect(() => {ms932Encoder.encode("\u54D2")}).to.throw(Error, "EncodingError U+54D2");
expect(() => {ms932Encoder.encode("\u54D3")}).to.throw(Error, "EncodingError U+54D3");
expect(() => {ms932Encoder.encode("\u54D4")}).to.throw(Error, "EncodingError U+54D4");
expect(() => {ms932Encoder.encode("\u54D5")}).to.throw(Error, "EncodingError U+54D5");
expect(() => {ms932Encoder.encode("\u54D6")}).to.throw(Error, "EncodingError U+54D6");
expect(() => {ms932Encoder.encode("\u54D7")}).to.throw(Error, "EncodingError U+54D7");
r = r && ([...ms932Encoder.encode("哘")].join(",") === "154,69"); // U+54D8
expect(() => {ms932Encoder.encode("\u54D9")}).to.throw(Error, "EncodingError U+54D9");
expect(() => {ms932Encoder.encode("\u54DA")}).to.throw(Error, "EncodingError U+54DA");
expect(() => {ms932Encoder.encode("\u54DB")}).to.throw(Error, "EncodingError U+54DB");
expect(() => {ms932Encoder.encode("\u54DC")}).to.throw(Error, "EncodingError U+54DC");
expect(() => {ms932Encoder.encode("\u54DD")}).to.throw(Error, "EncodingError U+54DD");
expect(() => {ms932Encoder.encode("\u54DE")}).to.throw(Error, "EncodingError U+54DE");
expect(() => {ms932Encoder.encode("\u54DF")}).to.throw(Error, "EncodingError U+54DF");
expect(() => {ms932Encoder.encode("\u54E0")}).to.throw(Error, "EncodingError U+54E0");
r = r && ([...ms932Encoder.encode("員哢")].join(",") === "136,245,154,78"); // U+54E1
expect(() => {ms932Encoder.encode("\u54E3")}).to.throw(Error, "EncodingError U+54E3");
expect(() => {ms932Encoder.encode("\u54E4")}).to.throw(Error, "EncodingError U+54E4");
r = r && ([...ms932Encoder.encode("哥哦")].join(",") === "154,70,154,71"); // U+54E5
expect(() => {ms932Encoder.encode("\u54E7")}).to.throw(Error, "EncodingError U+54E7");
r = r && ([...ms932Encoder.encode("哨哩")].join(",") === "143,163,150,137"); // U+54E8
expect(() => {ms932Encoder.encode("\u54EA")}).to.throw(Error, "EncodingError U+54EA");
expect(() => {ms932Encoder.encode("\u54EB")}).to.throw(Error, "EncodingError U+54EB");
expect(() => {ms932Encoder.encode("\u54EC")}).to.throw(Error, "EncodingError U+54EC");
r = r && ([...ms932Encoder.encode("哭哮")].join(",") === "154,76,154,75"); // U+54ED
expect(() => {ms932Encoder.encode("\u54EF")}).to.throw(Error, "EncodingError U+54EF");
expect(() => {ms932Encoder.encode("\u54F0")}).to.throw(Error, "EncodingError U+54F0");
expect(() => {ms932Encoder.encode("\u54F1")}).to.throw(Error, "EncodingError U+54F1");
r = r && ([...ms932Encoder.encode("哲")].join(",") === "147,78"); // U+54F2
expect(() => {ms932Encoder.encode("\u54F3")}).to.throw(Error, "EncodingError U+54F3");
expect(() => {ms932Encoder.encode("\u54F4")}).to.throw(Error, "EncodingError U+54F4");
expect(() => {ms932Encoder.encode("\u54F5")}).to.throw(Error, "EncodingError U+54F5");
expect(() => {ms932Encoder.encode("\u54F6")}).to.throw(Error, "EncodingError U+54F6");
expect(() => {ms932Encoder.encode("\u54F7")}).to.throw(Error, "EncodingError U+54F7");
expect(() => {ms932Encoder.encode("\u54F8")}).to.throw(Error, "EncodingError U+54F8");
expect(() => {ms932Encoder.encode("\u54F9")}).to.throw(Error, "EncodingError U+54F9");
r = r && ([...ms932Encoder.encode("哺")].join(",") === "154,77"); // U+54FA
expect(() => {ms932Encoder.encode("\u54FB")}).to.throw(Error, "EncodingError U+54FB");
expect(() => {ms932Encoder.encode("\u54FC")}).to.throw(Error, "EncodingError U+54FC");
r = r && ([...ms932Encoder.encode("哽")].join(",") === "154,74"); // U+54FD
expect(() => {ms932Encoder.encode("\u54FE")}).to.throw(Error, "EncodingError U+54FE");
r = r && ([...ms932Encoder.encode("哿")].join(",") === "250,148"); // U+54FF
expect(() => {ms932Encoder.encode("\u5500")}).to.throw(Error, "EncodingError U+5500");
expect(() => {ms932Encoder.encode("\u5501")}).to.throw(Error, "EncodingError U+5501");
expect(() => {ms932Encoder.encode("\u5502")}).to.throw(Error, "EncodingError U+5502");
expect(() => {ms932Encoder.encode("\u5503")}).to.throw(Error, "EncodingError U+5503");
r = r && ([...ms932Encoder.encode("唄")].join(",") === "137,83"); // U+5504
expect(() => {ms932Encoder.encode("\u5505")}).to.throw(Error, "EncodingError U+5505");
r = r && ([...ms932Encoder.encode("唆唇")].join(",") === "141,180,144,79"); // U+5506
expect(() => {ms932Encoder.encode("\u5508")}).to.throw(Error, "EncodingError U+5508");
expect(() => {ms932Encoder.encode("\u5509")}).to.throw(Error, "EncodingError U+5509");
expect(() => {ms932Encoder.encode("\u550A")}).to.throw(Error, "EncodingError U+550A");
expect(() => {ms932Encoder.encode("\u550B")}).to.throw(Error, "EncodingError U+550B");
expect(() => {ms932Encoder.encode("\u550C")}).to.throw(Error, "EncodingError U+550C");
expect(() => {ms932Encoder.encode("\u550D")}).to.throw(Error, "EncodingError U+550D");
expect(() => {ms932Encoder.encode("\u550E")}).to.throw(Error, "EncodingError U+550E");
r = r && ([...ms932Encoder.encode("唏唐")].join(",") === "154,72,147,130"); // U+550F
expect(() => {ms932Encoder.encode("\u5511")}).to.throw(Error, "EncodingError U+5511");
expect(() => {ms932Encoder.encode("\u5512")}).to.throw(Error, "EncodingError U+5512");
expect(() => {ms932Encoder.encode("\u5513")}).to.throw(Error, "EncodingError U+5513");
r = r && ([...ms932Encoder.encode("唔")].join(",") === "154,73"); // U+5514
expect(() => {ms932Encoder.encode("\u5515")}).to.throw(Error, "EncodingError U+5515");
r = r && ([...ms932Encoder.encode("唖")].join(",") === "136,160"); // U+5516
expect(() => {ms932Encoder.encode("\u5517")}).to.throw(Error, "EncodingError U+5517");
expect(() => {ms932Encoder.encode("\u5518")}).to.throw(Error, "EncodingError U+5518");
expect(() => {ms932Encoder.encode("\u5519")}).to.throw(Error, "EncodingError U+5519");
expect(() => {ms932Encoder.encode("\u551A")}).to.throw(Error, "EncodingError U+551A");
expect(() => {ms932Encoder.encode("\u551B")}).to.throw(Error, "EncodingError U+551B");
expect(() => {ms932Encoder.encode("\u551C")}).to.throw(Error, "EncodingError U+551C");
expect(() => {ms932Encoder.encode("\u551D")}).to.throw(Error, "EncodingError U+551D");
expect(() => {ms932Encoder.encode("\u551E")}).to.throw(Error, "EncodingError U+551E");
expect(() => {ms932Encoder.encode("\u551F")}).to.throw(Error, "EncodingError U+551F");
expect(() => {ms932Encoder.encode("\u5520")}).to.throw(Error, "EncodingError U+5520");
expect(() => {ms932Encoder.encode("\u5521")}).to.throw(Error, "EncodingError U+5521");
expect(() => {ms932Encoder.encode("\u5522")}).to.throw(Error, "EncodingError U+5522");
expect(() => {ms932Encoder.encode("\u5523")}).to.throw(Error, "EncodingError U+5523");
expect(() => {ms932Encoder.encode("\u5524")}).to.throw(Error, "EncodingError U+5524");
expect(() => {ms932Encoder.encode("\u5525")}).to.throw(Error, "EncodingError U+5525");
expect(() => {ms932Encoder.encode("\u5526")}).to.throw(Error, "EncodingError U+5526");
expect(() => {ms932Encoder.encode("\u5527")}).to.throw(Error, "EncodingError U+5527");
expect(() => {ms932Encoder.encode("\u5528")}).to.throw(Error, "EncodingError U+5528");
expect(() => {ms932Encoder.encode("\u5529")}).to.throw(Error, "EncodingError U+5529");
expect(() => {ms932Encoder.encode("\u552A")}).to.throw(Error, "EncodingError U+552A");
expect(() => {ms932Encoder.encode("\u552B")}).to.throw(Error, "EncodingError U+552B");
expect(() => {ms932Encoder.encode("\u552C")}).to.throw(Error, "EncodingError U+552C");
expect(() => {ms932Encoder.encode("\u552D")}).to.throw(Error, "EncodingError U+552D");
r = r && ([...ms932Encoder.encode("售唯")].join(",") === "154,83,151,66"); // U+552E
expect(() => {ms932Encoder.encode("\u5530")}).to.throw(Error, "EncodingError U+5530");
r = r && ([...ms932Encoder.encode("唱")].join(",") === "143,165"); // U+5531
expect(() => {ms932Encoder.encode("\u5532")}).to.throw(Error, "EncodingError U+5532");
r = r && ([...ms932Encoder.encode("唳")].join(",") === "154,89"); // U+5533
expect(() => {ms932Encoder.encode("\u5534")}).to.throw(Error, "EncodingError U+5534");
expect(() => {ms932Encoder.encode("\u5535")}).to.throw(Error, "EncodingError U+5535");
expect(() => {ms932Encoder.encode("\u5536")}).to.throw(Error, "EncodingError U+5536");
expect(() => {ms932Encoder.encode("\u5537")}).to.throw(Error, "EncodingError U+5537");
r = r && ([...ms932Encoder.encode("唸唹")].join(",") === "154,88,154,79"); // U+5538
expect(() => {ms932Encoder.encode("\u553A")}).to.throw(Error, "EncodingError U+553A");
expect(() => {ms932Encoder.encode("\u553B")}).to.throw(Error, "EncodingError U+553B");
expect(() => {ms932Encoder.encode("\u553C")}).to.throw(Error, "EncodingError U+553C");
expect(() => {ms932Encoder.encode("\u553D")}).to.throw(Error, "EncodingError U+553D");
r = r && ([...ms932Encoder.encode("唾")].join(",") === "145,193"); // U+553E
expect(() => {ms932Encoder.encode("\u553F")}).to.throw(Error, "EncodingError U+553F");
r = r && ([...ms932Encoder.encode("啀")].join(",") === "154,80"); // U+5540
expect(() => {ms932Encoder.encode("\u5541")}).to.throw(Error, "EncodingError U+5541");
expect(() => {ms932Encoder.encode("\u5542")}).to.throw(Error, "EncodingError U+5542");
expect(() => {ms932Encoder.encode("\u5543")}).to.throw(Error, "EncodingError U+5543");
r = r && ([...ms932Encoder.encode("啄啅商")].join(",") === "145,237,154,85,143,164"); // U+5544
expect(() => {ms932Encoder.encode("\u5547")}).to.throw(Error, "EncodingError U+5547");
expect(() => {ms932Encoder.encode("\u5548")}).to.throw(Error, "EncodingError U+5548");
expect(() => {ms932Encoder.encode("\u5549")}).to.throw(Error, "EncodingError U+5549");
expect(() => {ms932Encoder.encode("\u554A")}).to.throw(Error, "EncodingError U+554A");
expect(() => {ms932Encoder.encode("\u554B")}).to.throw(Error, "EncodingError U+554B");
r = r && ([...ms932Encoder.encode("啌")].join(",") === "154,82"); // U+554C
expect(() => {ms932Encoder.encode("\u554D")}).to.throw(Error, "EncodingError U+554D");
expect(() => {ms932Encoder.encode("\u554E")}).to.throw(Error, "EncodingError U+554E");
r = r && ([...ms932Encoder.encode("問")].join(",") === "150,226"); // U+554F
expect(() => {ms932Encoder.encode("\u5550")}).to.throw(Error, "EncodingError U+5550");
expect(() => {ms932Encoder.encode("\u5551")}).to.throw(Error, "EncodingError U+5551");
expect(() => {ms932Encoder.encode("\u5552")}).to.throw(Error, "EncodingError U+5552");
r = r && ([...ms932Encoder.encode("啓")].join(",") === "140,91"); // U+5553
expect(() => {ms932Encoder.encode("\u5554")}).to.throw(Error, "EncodingError U+5554");
expect(() => {ms932Encoder.encode("\u5555")}).to.throw(Error, "EncodingError U+5555");
r = r && ([...ms932Encoder.encode("啖啗")].join(",") === "154,86,154,87"); // U+5556
expect(() => {ms932Encoder.encode("\u5558")}).to.throw(Error, "EncodingError U+5558");
expect(() => {ms932Encoder.encode("\u5559")}).to.throw(Error, "EncodingError U+5559");
expect(() => {ms932Encoder.encode("\u555A")}).to.throw(Error, "EncodingError U+555A");
expect(() => {ms932Encoder.encode("\u555B")}).to.throw(Error, "EncodingError U+555B");
r = r && ([...ms932Encoder.encode("啜啝")].join(",") === "154,84,154,90"); // U+555C
expect(() => {ms932Encoder.encode("\u555E")}).to.throw(Error, "EncodingError U+555E");
expect(() => {ms932Encoder.encode("\u555F")}).to.throw(Error, "EncodingError U+555F");
expect(() => {ms932Encoder.encode("\u5560")}).to.throw(Error, "EncodingError U+5560");
expect(() => {ms932Encoder.encode("\u5561")}).to.throw(Error, "EncodingError U+5561");
expect(() => {ms932Encoder.encode("\u5562")}).to.throw(Error, "EncodingError U+5562");
r = r && ([...ms932Encoder.encode("啣")].join(",") === "154,81"); // U+5563
expect(() => {ms932Encoder.encode("\u5564")}).to.throw(Error, "EncodingError U+5564");
expect(() => {ms932Encoder.encode("\u5565")}).to.throw(Error, "EncodingError U+5565");
expect(() => {ms932Encoder.encode("\u5566")}).to.throw(Error, "EncodingError U+5566");
expect(() => {ms932Encoder.encode("\u5567")}).to.throw(Error, "EncodingError U+5567");
expect(() => {ms932Encoder.encode("\u5568")}).to.throw(Error, "EncodingError U+5568");
expect(() => {ms932Encoder.encode("\u5569")}).to.throw(Error, "EncodingError U+5569");
expect(() => {ms932Encoder.encode("\u556A")}).to.throw(Error, "EncodingError U+556A");
expect(() => {ms932Encoder.encode("\u556B")}).to.throw(Error, "EncodingError U+556B");
expect(() => {ms932Encoder.encode("\u556C")}).to.throw(Error, "EncodingError U+556C");
expect(() => {ms932Encoder.encode("\u556D")}).to.throw(Error, "EncodingError U+556D");
expect(() => {ms932Encoder.encode("\u556E")}).to.throw(Error, "EncodingError U+556E");
expect(() => {ms932Encoder.encode("\u556F")}).to.throw(Error, "EncodingError U+556F");
expect(() => {ms932Encoder.encode("\u5570")}).to.throw(Error, "EncodingError U+5570");
expect(() => {ms932Encoder.encode("\u5571")}).to.throw(Error, "EncodingError U+5571");
expect(() => {ms932Encoder.encode("\u5572")}).to.throw(Error, "EncodingError U+5572");
expect(() => {ms932Encoder.encode("\u5573")}).to.throw(Error, "EncodingError U+5573");
expect(() => {ms932Encoder.encode("\u5574")}).to.throw(Error, "EncodingError U+5574");
expect(() => {ms932Encoder.encode("\u5575")}).to.throw(Error, "EncodingError U+5575");
expect(() => {ms932Encoder.encode("\u5576")}).to.throw(Error, "EncodingError U+5576");
expect(() => {ms932Encoder.encode("\u5577")}).to.throw(Error, "EncodingError U+5577");
expect(() => {ms932Encoder.encode("\u5578")}).to.throw(Error, "EncodingError U+5578");
expect(() => {ms932Encoder.encode("\u5579")}).to.throw(Error, "EncodingError U+5579");
expect(() => {ms932Encoder.encode("\u557A")}).to.throw(Error, "EncodingError U+557A");
r = r && ([...ms932Encoder.encode("啻啼")].join(",") === "154,96,154,101"); // U+557B
expect(() => {ms932Encoder.encode("\u557D")}).to.throw(Error, "EncodingError U+557D");
r = r && ([...ms932Encoder.encode("啾")].join(",") === "154,97"); // U+557E
expect(() => {ms932Encoder.encode("\u557F")}).to.throw(Error, "EncodingError U+557F");
r = r && ([...ms932Encoder.encode("喀")].join(",") === "154,92"); // U+5580
expect(() => {ms932Encoder.encode("\u5581")}).to.throw(Error, "EncodingError U+5581");
expect(() => {ms932Encoder.encode("\u5582")}).to.throw(Error, "EncodingError U+5582");
r = r && ([...ms932Encoder.encode("喃善")].join(",") === "154,102,145,80"); // U+5583
expect(() => {ms932Encoder.encode("\u5585")}).to.throw(Error, "EncodingError U+5585");
r = r && ([...ms932Encoder.encode("喆喇")].join(",") === "250,149,154,104"); // U+5586
expect(() => {ms932Encoder.encode("\u5588")}).to.throw(Error, "EncodingError U+5588");
r = r && ([...ms932Encoder.encode("喉喊喋")].join(",") === "141,65,154,94,146,157"); // U+5589
expect(() => {ms932Encoder.encode("\u558C")}).to.throw(Error, "EncodingError U+558C");
expect(() => {ms932Encoder.encode("\u558D")}).to.throw(Error, "EncodingError U+558D");
expect(() => {ms932Encoder.encode("\u558E")}).to.throw(Error, "EncodingError U+558E");
expect(() => {ms932Encoder.encode("\u558F")}).to.throw(Error, "EncodingError U+558F");
expect(() => {ms932Encoder.encode("\u5590")}).to.throw(Error, "EncodingError U+5590");
expect(() => {ms932Encoder.encode("\u5591")}).to.throw(Error, "EncodingError U+5591");
expect(() => {ms932Encoder.encode("\u5592")}).to.throw(Error, "EncodingError U+5592");
expect(() => {ms932Encoder.encode("\u5593")}).to.throw(Error, "EncodingError U+5593");
expect(() => {ms932Encoder.encode("\u5594")}).to.throw(Error, "EncodingError U+5594");
expect(() => {ms932Encoder.encode("\u5595")}).to.throw(Error, "EncodingError U+5595");
expect(() => {ms932Encoder.encode("\u5596")}).to.throw(Error, "EncodingError U+5596");
expect(() => {ms932Encoder.encode("\u5597")}).to.throw(Error, "EncodingError U+5597");
r = r && ([...ms932Encoder.encode("喘喙喚")].join(",") === "154,98,154,91,138,171"); // U+5598
expect(() => {ms932Encoder.encode("\u559B")}).to.throw(Error, "EncodingError U+559B");
r = r && ([...ms932Encoder.encode("喜喝喞喟")].join(",") === "138,236,138,133,154,99,154,95"); // U+559C
expect(() => {ms932Encoder.encode("\u55A0")}).to.throw(Error, "EncodingError U+55A0");
expect(() => {ms932Encoder.encode("\u55A1")}).to.throw(Error, "EncodingError U+55A1");
expect(() => {ms932Encoder.encode("\u55A2")}).to.throw(Error, "EncodingError U+55A2");
expect(() => {ms932Encoder.encode("\u55A3")}).to.throw(Error, "EncodingError U+55A3");
expect(() => {ms932Encoder.encode("\u55A4")}).to.throw(Error, "EncodingError U+55A4");
expect(() => {ms932Encoder.encode("\u55A5")}).to.throw(Error, "EncodingError U+55A5");
expect(() => {ms932Encoder.encode("\u55A6")}).to.throw(Error, "EncodingError U+55A6");
r = r && ([...ms932Encoder.encode("喧喨喩喪喫喬")].join(",") === "140,150,154,105,154,103,145,114,139,105,139,170"); // U+55A7
expect(() => {ms932Encoder.encode("\u55AD")}).to.throw(Error, "EncodingError U+55AD");
r = r && ([...ms932Encoder.encode("單")].join(",") === "154,100"); // U+55AE
expect(() => {ms932Encoder.encode("\u55AF")}).to.throw(Error, "EncodingError U+55AF");
r = r && ([...ms932Encoder.encode("喰")].join(",") === "139,242"); // U+55B0
expect(() => {ms932Encoder.encode("\u55B1")}).to.throw(Error, "EncodingError U+55B1");
expect(() => {ms932Encoder.encode("\u55B2")}).to.throw(Error, "EncodingError U+55B2");
expect(() => {ms932Encoder.encode("\u55B3")}).to.throw(Error, "EncodingError U+55B3");
expect(() => {ms932Encoder.encode("\u55B4")}).to.throw(Error, "EncodingError U+55B4");
expect(() => {ms932Encoder.encode("\u55B5")}).to.throw(Error, "EncodingError U+55B5");
r = r && ([...ms932Encoder.encode("営")].join(",") === "137,99"); // U+55B6
expect(() => {ms932Encoder.encode("\u55B7")}).to.throw(Error, "EncodingError U+55B7");
expect(() => {ms932Encoder.encode("\u55B8")}).to.throw(Error, "EncodingError U+55B8");
expect(() => {ms932Encoder.encode("\u55B9")}).to.throw(Error, "EncodingError U+55B9");
expect(() => {ms932Encoder.encode("\u55BA")}).to.throw(Error, "EncodingError U+55BA");
expect(() => {ms932Encoder.encode("\u55BB")}).to.throw(Error, "EncodingError U+55BB");
expect(() => {ms932Encoder.encode("\u55BC")}).to.throw(Error, "EncodingError U+55BC");
expect(() => {ms932Encoder.encode("\u55BD")}).to.throw(Error, "EncodingError U+55BD");
expect(() => {ms932Encoder.encode("\u55BE")}).to.throw(Error, "EncodingError U+55BE");
expect(() => {ms932Encoder.encode("\u55BF")}).to.throw(Error, "EncodingError U+55BF");
expect(() => {ms932Encoder.encode("\u55C0")}).to.throw(Error, "EncodingError U+55C0");
expect(() => {ms932Encoder.encode("\u55C1")}).to.throw(Error, "EncodingError U+55C1");
expect(() => {ms932Encoder.encode("\u55C2")}).to.throw(Error, "EncodingError U+55C2");
expect(() => {ms932Encoder.encode("\u55C3")}).to.throw(Error, "EncodingError U+55C3");
r = r && ([...ms932Encoder.encode("嗄嗅")].join(",") === "154,109,154,107"); // U+55C4
expect(() => {ms932Encoder.encode("\u55C6")}).to.throw(Error, "EncodingError U+55C6");
r = r && ([...ms932Encoder.encode("嗇")].join(",") === "154,165"); // U+55C7
expect(() => {ms932Encoder.encode("\u55C8")}).to.throw(Error, "EncodingError U+55C8");
expect(() => {ms932Encoder.encode("\u55C9")}).to.throw(Error, "EncodingError U+55C9");
expect(() => {ms932Encoder.encode("\u55CA")}).to.throw(Error, "EncodingError U+55CA");
expect(() => {ms932Encoder.encode("\u55CB")}).to.throw(Error, "EncodingError U+55CB");
expect(() => {ms932Encoder.encode("\u55CC")}).to.throw(Error, "EncodingError U+55CC");
expect(() => {ms932Encoder.encode("\u55CD")}).to.throw(Error, "EncodingError U+55CD");
expect(() => {ms932Encoder.encode("\u55CE")}).to.throw(Error, "EncodingError U+55CE");
expect(() => {ms932Encoder.encode("\u55CF")}).to.throw(Error, "EncodingError U+55CF");
expect(() => {ms932Encoder.encode("\u55D0")}).to.throw(Error, "EncodingError U+55D0");
expect(() => {ms932Encoder.encode("\u55D1")}).to.throw(Error, "EncodingError U+55D1");
expect(() => {ms932Encoder.encode("\u55D2")}).to.throw(Error, "EncodingError U+55D2");
expect(() => {ms932Encoder.encode("\u55D3")}).to.throw(Error, "EncodingError U+55D3");
r = r && ([...ms932Encoder.encode("嗔")].join(",") === "154,112"); // U+55D4
expect(() => {ms932Encoder.encode("\u55D5")}).to.throw(Error, "EncodingError U+55D5");
expect(() => {ms932Encoder.encode("\u55D6")}).to.throw(Error, "EncodingError U+55D6");
expect(() => {ms932Encoder.encode("\u55D7")}).to.throw(Error, "EncodingError U+55D7");
expect(() => {ms932Encoder.encode("\u55D8")}).to.throw(Error, "EncodingError U+55D8");
expect(() => {ms932Encoder.encode("\u55D9")}).to.throw(Error, "EncodingError U+55D9");
r = r && ([...ms932Encoder.encode("嗚")].join(",") === "154,106"); // U+55DA
expect(() => {ms932Encoder.encode("\u55DB")}).to.throw(Error, "EncodingError U+55DB");
r = r && ([...ms932Encoder.encode("嗜")].join(",") === "154,110"); // U+55DC
expect(() => {ms932Encoder.encode("\u55DD")}).to.throw(Error, "EncodingError U+55DD");
expect(() => {ms932Encoder.encode("\u55DE")}).to.throw(Error, "EncodingError U+55DE");
r = r && ([...ms932Encoder.encode("嗟")].join(",") === "154,108"); // U+55DF
expect(() => {ms932Encoder.encode("\u55E0")}).to.throw(Error, "EncodingError U+55E0");
expect(() => {ms932Encoder.encode("\u55E1")}).to.throw(Error, "EncodingError U+55E1");
expect(() => {ms932Encoder.encode("\u55E2")}).to.throw(Error, "EncodingError U+55E2");
r = r && ([...ms932Encoder.encode("嗣嗤")].join(",") === "142,107,154,111"); // U+55E3
expect(() => {ms932Encoder.encode("\u55E5")}).to.throw(Error, "EncodingError U+55E5");
expect(() => {ms932Encoder.encode("\u55E6")}).to.throw(Error, "EncodingError U+55E6");
expect(() => {ms932Encoder.encode("\u55E7")}).to.throw(Error, "EncodingError U+55E7");
expect(() => {ms932Encoder.encode("\u55E8")}).to.throw(Error, "EncodingError U+55E8");
expect(() => {ms932Encoder.encode("\u55E9")}).to.throw(Error, "EncodingError U+55E9");
expect(() => {ms932Encoder.encode("\u55EA")}).to.throw(Error, "EncodingError U+55EA");
expect(() => {ms932Encoder.encode("\u55EB")}).to.throw(Error, "EncodingError U+55EB");
expect(() => {ms932Encoder.encode("\u55EC")}).to.throw(Error, "EncodingError U+55EC");
expect(() => {ms932Encoder.encode("\u55ED")}).to.throw(Error, "EncodingError U+55ED");
expect(() => {ms932Encoder.encode("\u55EE")}).to.throw(Error, "EncodingError U+55EE");
expect(() => {ms932Encoder.encode("\u55EF")}).to.throw(Error, "EncodingError U+55EF");
expect(() => {ms932Encoder.encode("\u55F0")}).to.throw(Error, "EncodingError U+55F0");
expect(() => {ms932Encoder.encode("\u55F1")}).to.throw(Error, "EncodingError U+55F1");
expect(() => {ms932Encoder.encode("\u55F2")}).to.throw(Error, "EncodingError U+55F2");
expect(() => {ms932Encoder.encode("\u55F3")}).to.throw(Error, "EncodingError U+55F3");
expect(() => {ms932Encoder.encode("\u55F4")}).to.throw(Error, "EncodingError U+55F4");
expect(() => {ms932Encoder.encode("\u55F5")}).to.throw(Error, "EncodingError U+55F5");
expect(() => {ms932Encoder.encode("\u55F6")}).to.throw(Error, "EncodingError U+55F6");
r = r && ([...ms932Encoder.encode("嗷")].join(",") === "154,114"); // U+55F7
expect(() => {ms932Encoder.encode("\u55F8")}).to.throw(Error, "EncodingError U+55F8");
r = r && ([...ms932Encoder.encode("嗹")].join(",") === "154,119"); // U+55F9
expect(() => {ms932Encoder.encode("\u55FA")}).to.throw(Error, "EncodingError U+55FA");
expect(() => {ms932Encoder.encode("\u55FB")}).to.throw(Error, "EncodingError U+55FB");
expect(() => {ms932Encoder.encode("\u55FC")}).to.throw(Error, "EncodingError U+55FC");
r = r && ([...ms932Encoder.encode("嗽嗾")].join(",") === "154,117,154,116"); // U+55FD
expect(() => {ms932Encoder.encode("\u55FF")}).to.throw(Error, "EncodingError U+55FF");
expect(() => {ms932Encoder.encode("\u5600")}).to.throw(Error, "EncodingError U+5600");
expect(() => {ms932Encoder.encode("\u5601")}).to.throw(Error, "EncodingError U+5601");
expect(() => {ms932Encoder.encode("\u5602")}).to.throw(Error, "EncodingError U+5602");
expect(() => {ms932Encoder.encode("\u5603")}).to.throw(Error, "EncodingError U+5603");
expect(() => {ms932Encoder.encode("\u5604")}).to.throw(Error, "EncodingError U+5604");
expect(() => {ms932Encoder.encode("\u5605")}).to.throw(Error, "EncodingError U+5605");
r = r && ([...ms932Encoder.encode("嘆")].join(",") === "146,81"); // U+5606
expect(() => {ms932Encoder.encode("\u5607")}).to.throw(Error, "EncodingError U+5607");
expect(() => {ms932Encoder.encode("\u5608")}).to.throw(Error, "EncodingError U+5608");
r = r && ([...ms932Encoder.encode("嘉")].join(",") === "137,195"); // U+5609
expect(() => {ms932Encoder.encode("\u560A")}).to.throw(Error, "EncodingError U+560A");
expect(() => {ms932Encoder.encode("\u560B")}).to.throw(Error, "EncodingError U+560B");
expect(() => {ms932Encoder.encode("\u560C")}).to.throw(Error, "EncodingError U+560C");
expect(() => {ms932Encoder.encode("\u560D")}).to.throw(Error, "EncodingError U+560D");
expect(() => {ms932Encoder.encode("\u560E")}).to.throw(Error, "EncodingError U+560E");
expect(() => {ms932Encoder.encode("\u560F")}).to.throw(Error, "EncodingError U+560F");
expect(() => {ms932Encoder.encode("\u5610")}).to.throw(Error, "EncodingError U+5610");
expect(() => {ms932Encoder.encode("\u5611")}).to.throw(Error, "EncodingError U+5611");
expect(() => {ms932Encoder.encode("\u5612")}).to.throw(Error, "EncodingError U+5612");
expect(() => {ms932Encoder.encode("\u5613")}).to.throw(Error, "EncodingError U+5613");
r = r && ([...ms932Encoder.encode("嘔")].join(",") === "154,113"); // U+5614
expect(() => {ms932Encoder.encode("\u5615")}).to.throw(Error, "EncodingError U+5615");
r = r && ([...ms932Encoder.encode("嘖嘗嘘")].join(",") === "154,115,143,166,137,82"); // U+5616
expect(() => {ms932Encoder.encode("\u5619")}).to.throw(Error, "EncodingError U+5619");
expect(() => {ms932Encoder.encode("\u561A")}).to.throw(Error, "EncodingError U+561A");
r = r && ([...ms932Encoder.encode("嘛")].join(",") === "154,118"); // U+561B
expect(() => {ms932Encoder.encode("\u561C")}).to.throw(Error, "EncodingError U+561C");
expect(() => {ms932Encoder.encode("\u561D")}).to.throw(Error, "EncodingError U+561D");
expect(() => {ms932Encoder.encode("\u561E")}).to.throw(Error, "EncodingError U+561E");
expect(() => {ms932Encoder.encode("\u561F")}).to.throw(Error, "EncodingError U+561F");
expect(() => {ms932Encoder.encode("\u5620")}).to.throw(Error, "EncodingError U+5620");
expect(() => {ms932Encoder.encode("\u5621")}).to.throw(Error, "EncodingError U+5621");
expect(() => {ms932Encoder.encode("\u5622")}).to.throw(Error, "EncodingError U+5622");
expect(() => {ms932Encoder.encode("\u5623")}).to.throw(Error, "EncodingError U+5623");
expect(() => {ms932Encoder.encode("\u5624")}).to.throw(Error, "EncodingError U+5624");
expect(() => {ms932Encoder.encode("\u5625")}).to.throw(Error, "EncodingError U+5625");
expect(() => {ms932Encoder.encode("\u5626")}).to.throw(Error, "EncodingError U+5626");
expect(() => {ms932Encoder.encode("\u5627")}).to.throw(Error, "EncodingError U+5627");
expect(() => {ms932Encoder.encode("\u5628")}).to.throw(Error, "EncodingError U+5628");
r = r && ([...ms932Encoder.encode("嘩")].join(",") === "137,220"); // U+5629
expect(() => {ms932Encoder.encode("\u562A")}).to.throw(Error, "EncodingError U+562A");
expect(() => {ms932Encoder.encode("\u562B")}).to.throw(Error, "EncodingError U+562B");
expect(() => {ms932Encoder.encode("\u562C")}).to.throw(Error, "EncodingError U+562C");
expect(() => {ms932Encoder.encode("\u562D")}).to.throw(Error, "EncodingError U+562D");
expect(() => {ms932Encoder.encode("\u562E")}).to.throw(Error, "EncodingError U+562E");
r = r && ([...ms932Encoder.encode("嘯")].join(",") === "154,130"); // U+562F
expect(() => {ms932Encoder.encode("\u5630")}).to.throw(Error, "EncodingError U+5630");
r = r && ([...ms932Encoder.encode("嘱嘲")].join(",") === "143,250,154,125"); // U+5631
expect(() => {ms932Encoder.encode("\u5633")}).to.throw(Error, "EncodingError U+5633");
r = r && ([...ms932Encoder.encode("嘴")].join(",") === "154,123"); // U+5634
expect(() => {ms932Encoder.encode("\u5635")}).to.throw(Error, "EncodingError U+5635");
r = r && ([...ms932Encoder.encode("嘶")].join(",") === "154,124"); // U+5636
expect(() => {ms932Encoder.encode("\u5637")}).to.throw(Error, "EncodingError U+5637");
r = r && ([...ms932Encoder.encode("嘸")].join(",") === "154,126"); // U+5638
expect(() => {ms932Encoder.encode("\u5639")}).to.throw(Error, "EncodingError U+5639");
expect(() => {ms932Encoder.encode("\u563A")}).to.throw(Error, "EncodingError U+563A");
expect(() => {ms932Encoder.encode("\u563B")}).to.throw(Error, "EncodingError U+563B");
expect(() => {ms932Encoder.encode("\u563C")}).to.throw(Error, "EncodingError U+563C");
expect(() => {ms932Encoder.encode("\u563D")}).to.throw(Error, "EncodingError U+563D");
expect(() => {ms932Encoder.encode("\u563E")}).to.throw(Error, "EncodingError U+563E");
expect(() => {ms932Encoder.encode("\u563F")}).to.throw(Error, "EncodingError U+563F");
expect(() => {ms932Encoder.encode("\u5640")}).to.throw(Error, "EncodingError U+5640");
expect(() => {ms932Encoder.encode("\u5641")}).to.throw(Error, "EncodingError U+5641");
r = r && ([...ms932Encoder.encode("噂")].join(",") === "137,92"); // U+5642
expect(() => {ms932Encoder.encode("\u5643")}).to.throw(Error, "EncodingError U+5643");
expect(() => {ms932Encoder.encode("\u5644")}).to.throw(Error, "EncodingError U+5644");
expect(() => {ms932Encoder.encode("\u5645")}).to.throw(Error, "EncodingError U+5645");
expect(() => {ms932Encoder.encode("\u5646")}).to.throw(Error, "EncodingError U+5646");
expect(() => {ms932Encoder.encode("\u5647")}).to.throw(Error, "EncodingError U+5647");
expect(() => {ms932Encoder.encode("\u5648")}).to.throw(Error, "EncodingError U+5648");
expect(() => {ms932Encoder.encode("\u5649")}).to.throw(Error, "EncodingError U+5649");
expect(() => {ms932Encoder.encode("\u564A")}).to.throw(Error, "EncodingError U+564A");
expect(() => {ms932Encoder.encode("\u564B")}).to.throw(Error, "EncodingError U+564B");
r = r && ([...ms932Encoder.encode("噌")].join(",") === "145,88"); // U+564C
expect(() => {ms932Encoder.encode("\u564D")}).to.throw(Error, "EncodingError U+564D");
r = r && ([...ms932Encoder.encode("噎")].join(",") === "154,120"); // U+564E
expect(() => {ms932Encoder.encode("\u564F")}).to.throw(Error, "EncodingError U+564F");
r = r && ([...ms932Encoder.encode("噐")].join(",") === "154,121"); // U+5650
expect(() => {ms932Encoder.encode("\u5651")}).to.throw(Error, "EncodingError U+5651");
expect(() => {ms932Encoder.encode("\u5652")}).to.throw(Error, "EncodingError U+5652");
expect(() => {ms932Encoder.encode("\u5653")}).to.throw(Error, "EncodingError U+5653");
expect(() => {ms932Encoder.encode("\u5654")}).to.throw(Error, "EncodingError U+5654");
expect(() => {ms932Encoder.encode("\u5655")}).to.throw(Error, "EncodingError U+5655");
expect(() => {ms932Encoder.encode("\u5656")}).to.throw(Error, "EncodingError U+5656");
expect(() => {ms932Encoder.encode("\u5657")}).to.throw(Error, "EncodingError U+5657");
expect(() => {ms932Encoder.encode("\u5658")}).to.throw(Error, "EncodingError U+5658");
expect(() => {ms932Encoder.encode("\u5659")}).to.throw(Error, "EncodingError U+5659");
expect(() => {ms932Encoder.encode("\u565A")}).to.throw(Error, "EncodingError U+565A");
r = r && ([...ms932Encoder.encode("噛")].join(",") === "138,154"); // U+565B
expect(() => {ms932Encoder.encode("\u565C")}).to.throw(Error, "EncodingError U+565C");
expect(() => {ms932Encoder.encode("\u565D")}).to.throw(Error, "EncodingError U+565D");
expect(() => {ms932Encoder.encode("\u565E")}).to.throw(Error, "EncodingError U+565E");
expect(() => {ms932Encoder.encode("\u565F")}).to.throw(Error, "EncodingError U+565F");
expect(() => {ms932Encoder.encode("\u5660")}).to.throw(Error, "EncodingError U+5660");
expect(() => {ms932Encoder.encode("\u5661")}).to.throw(Error, "EncodingError U+5661");
expect(() => {ms932Encoder.encode("\u5662")}).to.throw(Error, "EncodingError U+5662");
expect(() => {ms932Encoder.encode("\u5663")}).to.throw(Error, "EncodingError U+5663");
r = r && ([...ms932Encoder.encode("噤")].join(",") === "154,129"); // U+5664
expect(() => {ms932Encoder.encode("\u5665")}).to.throw(Error, "EncodingError U+5665");
expect(() => {ms932Encoder.encode("\u5666")}).to.throw(Error, "EncodingError U+5666");
expect(() => {ms932Encoder.encode("\u5667")}).to.throw(Error, "EncodingError U+5667");
r = r && ([...ms932Encoder.encode("器")].join(",") === "138,237"); // U+5668
expect(() => {ms932Encoder.encode("\u5669")}).to.throw(Error, "EncodingError U+5669");
r = r && ([...ms932Encoder.encode("噪噫噬")].join(",") === "154,132,154,128,154,131"); // U+566A
expect(() => {ms932Encoder.encode("\u566D")}).to.throw(Error, "EncodingError U+566D");
expect(() => {ms932Encoder.encode("\u566E")}).to.throw(Error, "EncodingError U+566E");
expect(() => {ms932Encoder.encode("\u566F")}).to.throw(Error, "EncodingError U+566F");
expect(() => {ms932Encoder.encode("\u5670")}).to.throw(Error, "EncodingError U+5670");
expect(() => {ms932Encoder.encode("\u5671")}).to.throw(Error, "EncodingError U+5671");
expect(() => {ms932Encoder.encode("\u5672")}).to.throw(Error, "EncodingError U+5672");
expect(() => {ms932Encoder.encode("\u5673")}).to.throw(Error, "EncodingError U+5673");
r = r && ([...ms932Encoder.encode("噴")].join(",") === "149,172"); // U+5674
expect(() => {ms932Encoder.encode("\u5675")}).to.throw(Error, "EncodingError U+5675");
expect(() => {ms932Encoder.encode("\u5676")}).to.throw(Error, "EncodingError U+5676");
expect(() => {ms932Encoder.encode("\u5677")}).to.throw(Error, "EncodingError U+5677");
r = r && ([...ms932Encoder.encode("噸")].join(",") === "147,211"); // U+5678
expect(() => {ms932Encoder.encode("\u5679")}).to.throw(Error, "EncodingError U+5679");
r = r && ([...ms932Encoder.encode("噺")].join(",") === "148,182"); // U+567A
expect(() => {ms932Encoder.encode("\u567B")}).to.throw(Error, "EncodingError U+567B");
expect(() => {ms932Encoder.encode("\u567C")}).to.throw(Error, "EncodingError U+567C");
expect(() => {ms932Encoder.encode("\u567D")}).to.throw(Error, "EncodingError U+567D");
expect(() => {ms932Encoder.encode("\u567E")}).to.throw(Error, "EncodingError U+567E");
expect(() => {ms932Encoder.encode("\u567F")}).to.throw(Error, "EncodingError U+567F");
r = r && ([...ms932Encoder.encode("嚀")].join(",") === "154,134"); // U+5680
expect(() => {ms932Encoder.encode("\u5681")}).to.throw(Error, "EncodingError U+5681");
expect(() => {ms932Encoder.encode("\u5682")}).to.throw(Error, "EncodingError U+5682");
expect(() => {ms932Encoder.encode("\u5683")}).to.throw(Error, "EncodingError U+5683");
expect(() => {ms932Encoder.encode("\u5684")}).to.throw(Error, "EncodingError U+5684");
expect(() => {ms932Encoder.encode("\u5685")}).to.throw(Error, "EncodingError U+5685");
r = r && ([...ms932Encoder.encode("嚆嚇")].join(",") === "154,133,138,100"); // U+5686
expect(() => {ms932Encoder.encode("\u5688")}).to.throw(Error, "EncodingError U+5688");
expect(() => {ms932Encoder.encode("\u5689")}).to.throw(Error, "EncodingError U+5689");
r = r && ([...ms932Encoder.encode("嚊")].join(",") === "154,135"); // U+568A
expect(() => {ms932Encoder.encode("\u568B")}).to.throw(Error, "EncodingError U+568B");
expect(() => {ms932Encoder.encode("\u568C")}).to.throw(Error, "EncodingError U+568C");
expect(() => {ms932Encoder.encode("\u568D")}).to.throw(Error, "EncodingError U+568D");
expect(() => {ms932Encoder.encode("\u568E")}).to.throw(Error, "EncodingError U+568E");
r = r && ([...ms932Encoder.encode("嚏")].join(",") === "154,138"); // U+568F
expect(() => {ms932Encoder.encode("\u5690")}).to.throw(Error, "EncodingError U+5690");
expect(() => {ms932Encoder.encode("\u5691")}).to.throw(Error, "EncodingError U+5691");
expect(() => {ms932Encoder.encode("\u5692")}).to.throw(Error, "EncodingError U+5692");
expect(() => {ms932Encoder.encode("\u5693")}).to.throw(Error, "EncodingError U+5693");
r = r && ([...ms932Encoder.encode("嚔")].join(",") === "154,137"); // U+5694
expect(() => {ms932Encoder.encode("\u5695")}).to.throw(Error, "EncodingError U+5695");
expect(() => {ms932Encoder.encode("\u5696")}).to.throw(Error, "EncodingError U+5696");
expect(() => {ms932Encoder.encode("\u5697")}).to.throw(Error, "EncodingError U+5697");
expect(() => {ms932Encoder.encode("\u5698")}).to.throw(Error, "EncodingError U+5698");
expect(() => {ms932Encoder.encode("\u5699")}).to.throw(Error, "EncodingError U+5699");
expect(() => {ms932Encoder.encode("\u569A")}).to.throw(Error, "EncodingError U+569A");
expect(() => {ms932Encoder.encode("\u569B")}).to.throw(Error, "EncodingError U+569B");
expect(() => {ms932Encoder.encode("\u569C")}).to.throw(Error, "EncodingError U+569C");
expect(() => {ms932Encoder.encode("\u569D")}).to.throw(Error, "EncodingError U+569D");
expect(() => {ms932Encoder.encode("\u569E")}).to.throw(Error, "EncodingError U+569E");
expect(() => {ms932Encoder.encode("\u569F")}).to.throw(Error, "EncodingError U+569F");
r = r && ([...ms932Encoder.encode("嚠")].join(",") === "154,136"); // U+56A0
expect(() => {ms932Encoder.encode("\u56A1")}).to.throw(Error, "EncodingError U+56A1");
r = r && ([...ms932Encoder.encode("嚢")].join(",") === "148,88"); // U+56A2
expect(() => {ms932Encoder.encode("\u56A3")}).to.throw(Error, "EncodingError U+56A3");
expect(() => {ms932Encoder.encode("\u56A4")}).to.throw(Error, "EncodingError U+56A4");
r = r && ([...ms932Encoder.encode("嚥")].join(",") === "154,139"); // U+56A5
expect(() => {ms932Encoder.encode("\u56A6")}).to.throw(Error, "EncodingError U+56A6");
expect(() => {ms932Encoder.encode("\u56A7")}).to.throw(Error, "EncodingError U+56A7");
expect(() => {ms932Encoder.encode("\u56A8")}).to.throw(Error, "EncodingError U+56A8");
expect(() => {ms932Encoder.encode("\u56A9")}).to.throw(Error, "EncodingError U+56A9");
expect(() => {ms932Encoder.encode("\u56AA")}).to.throw(Error, "EncodingError U+56AA");
expect(() => {ms932Encoder.encode("\u56AB")}).to.throw(Error, "EncodingError U+56AB");
expect(() => {ms932Encoder.encode("\u56AC")}).to.throw(Error, "EncodingError U+56AC");
expect(() => {ms932Encoder.encode("\u56AD")}).to.throw(Error, "EncodingError U+56AD");
r = r && ([...ms932Encoder.encode("嚮")].join(",") === "154,140"); // U+56AE
expect(() => {ms932Encoder.encode("\u56AF")}).to.throw(Error, "EncodingError U+56AF");
expect(() => {ms932Encoder.encode("\u56B0")}).to.throw(Error, "EncodingError U+56B0");
expect(() => {ms932Encoder.encode("\u56B1")}).to.throw(Error, "EncodingError U+56B1");
expect(() => {ms932Encoder.encode("\u56B2")}).to.throw(Error, "EncodingError U+56B2");
expect(() => {ms932Encoder.encode("\u56B3")}).to.throw(Error, "EncodingError U+56B3");
r = r && ([...ms932Encoder.encode("嚴")].join(",") === "154,142"); // U+56B4
expect(() => {ms932Encoder.encode("\u56B5")}).to.throw(Error, "EncodingError U+56B5");
r = r && ([...ms932Encoder.encode("嚶")].join(",") === "154,141"); // U+56B6
expect(() => {ms932Encoder.encode("\u56B7")}).to.throw(Error, "EncodingError U+56B7");
expect(() => {ms932Encoder.encode("\u56B8")}).to.throw(Error, "EncodingError U+56B8");
expect(() => {ms932Encoder.encode("\u56B9")}).to.throw(Error, "EncodingError U+56B9");
expect(() => {ms932Encoder.encode("\u56BA")}).to.throw(Error, "EncodingError U+56BA");
expect(() => {ms932Encoder.encode("\u56BB")}).to.throw(Error, "EncodingError U+56BB");
r = r && ([...ms932Encoder.encode("嚼")].join(",") === "154,144"); // U+56BC
expect(() => {ms932Encoder.encode("\u56BD")}).to.throw(Error, "EncodingError U+56BD");
expect(() => {ms932Encoder.encode("\u56BE")}).to.throw(Error, "EncodingError U+56BE");
expect(() => {ms932Encoder.encode("\u56BF")}).to.throw(Error, "EncodingError U+56BF");
r = r && ([...ms932Encoder.encode("囀囁囂囃")].join(",") === "154,147,154,145,154,143,154,146"); // U+56C0
expect(() => {ms932Encoder.encode("\u56C4")}).to.throw(Error, "EncodingError U+56C4");
expect(() => {ms932Encoder.encode("\u56C5")}).to.throw(Error, "EncodingError U+56C5");
expect(() => {ms932Encoder.encode("\u56C6")}).to.throw(Error, "EncodingError U+56C6");
expect(() => {ms932Encoder.encode("\u56C7")}).to.throw(Error, "EncodingError U+56C7");
r = r && ([...ms932Encoder.encode("囈")].join(",") === "154,148"); // U+56C8
expect(() => {ms932Encoder.encode("\u56C9")}).to.throw(Error, "EncodingError U+56C9");
expect(() => {ms932Encoder.encode("\u56CA")}).to.throw(Error, "EncodingError U+56CA");
expect(() => {ms932Encoder.encode("\u56CB")}).to.throw(Error, "EncodingError U+56CB");
expect(() => {ms932Encoder.encode("\u56CC")}).to.throw(Error, "EncodingError U+56CC");
expect(() => {ms932Encoder.encode("\u56CD")}).to.throw(Error, "EncodingError U+56CD");
r = r && ([...ms932Encoder.encode("囎")].join(",") === "154,149"); // U+56CE
expect(() => {ms932Encoder.encode("\u56CF")}).to.throw(Error, "EncodingError U+56CF");
expect(() => {ms932Encoder.encode("\u56D0")}).to.throw(Error, "EncodingError U+56D0");
r = r && ([...ms932Encoder.encode("囑")].join(",") === "154,150"); // U+56D1
expect(() => {ms932Encoder.encode("\u56D2")}).to.throw(Error, "EncodingError U+56D2");
r = r && ([...ms932Encoder.encode("囓")].join(",") === "154,151"); // U+56D3
expect(() => {ms932Encoder.encode("\u56D4")}).to.throw(Error, "EncodingError U+56D4");
expect(() => {ms932Encoder.encode("\u56D5")}).to.throw(Error, "EncodingError U+56D5");
expect(() => {ms932Encoder.encode("\u56D6")}).to.throw(Error, "EncodingError U+56D6");
r = r && ([...ms932Encoder.encode("囗囘")].join(",") === "154,152,153,100"); // U+56D7
expect(() => {ms932Encoder.encode("\u56D9")}).to.throw(Error, "EncodingError U+56D9");
r = r && ([...ms932Encoder.encode("囚四")].join(",") === "142,250,142,108"); // U+56DA
expect(() => {ms932Encoder.encode("\u56DC")}).to.throw(Error, "EncodingError U+56DC");
expect(() => {ms932Encoder.encode("\u56DD")}).to.throw(Error, "EncodingError U+56DD");
r = r && ([...ms932Encoder.encode("回")].join(",") === "137,241"); // U+56DE
expect(() => {ms932Encoder.encode("\u56DF")}).to.throw(Error, "EncodingError U+56DF");
r = r && ([...ms932Encoder.encode("因")].join(",") === "136,246"); // U+56E0
expect(() => {ms932Encoder.encode("\u56E1")}).to.throw(Error, "EncodingError U+56E1");
expect(() => {ms932Encoder.encode("\u56E2")}).to.throw(Error, "EncodingError U+56E2");
r = r && ([...ms932Encoder.encode("団")].join(",") === "146,99"); // U+56E3
expect(() => {ms932Encoder.encode("\u56E4")}).to.throw(Error, "EncodingError U+56E4");
expect(() => {ms932Encoder.encode("\u56E5")}).to.throw(Error, "EncodingError U+56E5");
expect(() => {ms932Encoder.encode("\u56E6")}).to.throw(Error, "EncodingError U+56E6");
expect(() => {ms932Encoder.encode("\u56E7")}).to.throw(Error, "EncodingError U+56E7");
expect(() => {ms932Encoder.encode("\u56E8")}).to.throw(Error, "EncodingError U+56E8");
expect(() => {ms932Encoder.encode("\u56E9")}).to.throw(Error, "EncodingError U+56E9");
expect(() => {ms932Encoder.encode("\u56EA")}).to.throw(Error, "EncodingError U+56EA");
expect(() => {ms932Encoder.encode("\u56EB")}).to.throw(Error, "EncodingError U+56EB");
expect(() => {ms932Encoder.encode("\u56EC")}).to.throw(Error, "EncodingError U+56EC");
expect(() => {ms932Encoder.encode("\u56ED")}).to.throw(Error, "EncodingError U+56ED");
r = r && ([...ms932Encoder.encode("囮")].join(",") === "154,153"); // U+56EE
expect(() => {ms932Encoder.encode("\u56EF")}).to.throw(Error, "EncodingError U+56EF");
r = r && ([...ms932Encoder.encode("困")].join(",") === "141,162"); // U+56F0
expect(() => {ms932Encoder.encode("\u56F1")}).to.throw(Error, "EncodingError U+56F1");
r = r && ([...ms932Encoder.encode("囲図")].join(",") === "136,205,144,125"); // U+56F2
expect(() => {ms932Encoder.encode("\u56F4")}).to.throw(Error, "EncodingError U+56F4");
expect(() => {ms932Encoder.encode("\u56F5")}).to.throw(Error, "EncodingError U+56F5");
expect(() => {ms932Encoder.encode("\u56F6")}).to.throw(Error, "EncodingError U+56F6");
expect(() => {ms932Encoder.encode("\u56F7")}).to.throw(Error, "EncodingError U+56F7");
expect(() => {ms932Encoder.encode("\u56F8")}).to.throw(Error, "EncodingError U+56F8");
r = r && ([...ms932Encoder.encode("囹固")].join(",") === "154,154,140,197"); // U+56F9
expect(() => {ms932Encoder.encode("\u56FB")}).to.throw(Error, "EncodingError U+56FB");
expect(() => {ms932Encoder.encode("\u56FC")}).to.throw(Error, "EncodingError U+56FC");
r = r && ([...ms932Encoder.encode("国")].join(",") === "141,145"); // U+56FD
expect(() => {ms932Encoder.encode("\u56FE")}).to.throw(Error, "EncodingError U+56FE");
r = r && ([...ms932Encoder.encode("囿圀")].join(",") === "154,156,154,155"); // U+56FF
expect(() => {ms932Encoder.encode("\u5701")}).to.throw(Error, "EncodingError U+5701");
expect(() => {ms932Encoder.encode("\u5702")}).to.throw(Error, "EncodingError U+5702");
r = r && ([...ms932Encoder.encode("圃圄")].join(",") === "149,222,154,157"); // U+5703
expect(() => {ms932Encoder.encode("\u5705")}).to.throw(Error, "EncodingError U+5705");
expect(() => {ms932Encoder.encode("\u5706")}).to.throw(Error, "EncodingError U+5706");
expect(() => {ms932Encoder.encode("\u5707")}).to.throw(Error, "EncodingError U+5707");
r = r && ([...ms932Encoder.encode("圈圉")].join(",") === "154,159,154,158"); // U+5708
expect(() => {ms932Encoder.encode("\u570A")}).to.throw(Error, "EncodingError U+570A");
r = r && ([...ms932Encoder.encode("國")].join(",") === "154,160"); // U+570B
expect(() => {ms932Encoder.encode("\u570C")}).to.throw(Error, "EncodingError U+570C");
r = r && ([...ms932Encoder.encode("圍")].join(",") === "154,161"); // U+570D
expect(() => {ms932Encoder.encode("\u570E")}).to.throw(Error, "EncodingError U+570E");
r = r && ([...ms932Encoder.encode("圏")].join(",") === "140,151"); // U+570F
expect(() => {ms932Encoder.encode("\u5710")}).to.throw(Error, "EncodingError U+5710");
expect(() => {ms932Encoder.encode("\u5711")}).to.throw(Error, "EncodingError U+5711");
r = r && ([...ms932Encoder.encode("園圓")].join(",") === "137,128,154,162"); // U+5712
expect(() => {ms932Encoder.encode("\u5714")}).to.throw(Error, "EncodingError U+5714");
expect(() => {ms932Encoder.encode("\u5715")}).to.throw(Error, "EncodingError U+5715");
r = r && ([...ms932Encoder.encode("圖")].join(",") === "154,164"); // U+5716
expect(() => {ms932Encoder.encode("\u5717")}).to.throw(Error, "EncodingError U+5717");
r = r && ([...ms932Encoder.encode("團")].join(",") === "154,163"); // U+5718
expect(() => {ms932Encoder.encode("\u5719")}).to.throw(Error, "EncodingError U+5719");
expect(() => {ms932Encoder.encode("\u571A")}).to.throw(Error, "EncodingError U+571A");
expect(() => {ms932Encoder.encode("\u571B")}).to.throw(Error, "EncodingError U+571B");
r = r && ([...ms932Encoder.encode("圜")].join(",") === "154,166"); // U+571C
expect(() => {ms932Encoder.encode("\u571D")}).to.throw(Error, "EncodingError U+571D");
expect(() => {ms932Encoder.encode("\u571E")}).to.throw(Error, "EncodingError U+571E");
r = r && ([...ms932Encoder.encode("土")].join(",") === "147,121"); // U+571F
expect(() => {ms932Encoder.encode("\u5720")}).to.throw(Error, "EncodingError U+5720");
expect(() => {ms932Encoder.encode("\u5721")}).to.throw(Error, "EncodingError U+5721");
expect(() => {ms932Encoder.encode("\u5722")}).to.throw(Error, "EncodingError U+5722");
expect(() => {ms932Encoder.encode("\u5723")}).to.throw(Error, "EncodingError U+5723");
expect(() => {ms932Encoder.encode("\u5724")}).to.throw(Error, "EncodingError U+5724");
expect(() => {ms932Encoder.encode("\u5725")}).to.throw(Error, "EncodingError U+5725");
r = r && ([...ms932Encoder.encode("圦圧在")].join(",") === "154,167,136,179,141,221"); // U+5726
expect(() => {ms932Encoder.encode("\u5729")}).to.throw(Error, "EncodingError U+5729");
expect(() => {ms932Encoder.encode("\u572A")}).to.throw(Error, "EncodingError U+572A");
expect(() => {ms932Encoder.encode("\u572B")}).to.throw(Error, "EncodingError U+572B");
expect(() => {ms932Encoder.encode("\u572C")}).to.throw(Error, "EncodingError U+572C");
r = r && ([...ms932Encoder.encode("圭")].join(",") === "140,92"); // U+572D
expect(() => {ms932Encoder.encode("\u572E")}).to.throw(Error, "EncodingError U+572E");
expect(() => {ms932Encoder.encode("\u572F")}).to.throw(Error, "EncodingError U+572F");
r = r && ([...ms932Encoder.encode("地")].join(",") === "146,110"); // U+5730
expect(() => {ms932Encoder.encode("\u5731")}).to.throw(Error, "EncodingError U+5731");
expect(() => {ms932Encoder.encode("\u5732")}).to.throw(Error, "EncodingError U+5732");
expect(() => {ms932Encoder.encode("\u5733")}).to.throw(Error, "EncodingError U+5733");
expect(() => {ms932Encoder.encode("\u5734")}).to.throw(Error, "EncodingError U+5734");
expect(() => {ms932Encoder.encode("\u5735")}).to.throw(Error, "EncodingError U+5735");
expect(() => {ms932Encoder.encode("\u5736")}).to.throw(Error, "EncodingError U+5736");
r = r && ([...ms932Encoder.encode("圷圸")].join(",") === "154,168,154,169"); // U+5737
expect(() => {ms932Encoder.encode("\u5739")}).to.throw(Error, "EncodingError U+5739");
expect(() => {ms932Encoder.encode("\u573A")}).to.throw(Error, "EncodingError U+573A");
r = r && ([...ms932Encoder.encode("圻")].join(",") === "154,171"); // U+573B
expect(() => {ms932Encoder.encode("\u573C")}).to.throw(Error, "EncodingError U+573C");
expect(() => {ms932Encoder.encode("\u573D")}).to.throw(Error, "EncodingError U+573D");
expect(() => {ms932Encoder.encode("\u573E")}).to.throw(Error, "EncodingError U+573E");
expect(() => {ms932Encoder.encode("\u573F")}).to.throw(Error, "EncodingError U+573F");
r = r && ([...ms932Encoder.encode("址")].join(",") === "154,172"); // U+5740
expect(() => {ms932Encoder.encode("\u5741")}).to.throw(Error, "EncodingError U+5741");
r = r && ([...ms932Encoder.encode("坂")].join(",") === "141,226"); // U+5742
expect(() => {ms932Encoder.encode("\u5743")}).to.throw(Error, "EncodingError U+5743");
expect(() => {ms932Encoder.encode("\u5744")}).to.throw(Error, "EncodingError U+5744");
expect(() => {ms932Encoder.encode("\u5745")}).to.throw(Error, "EncodingError U+5745");
expect(() => {ms932Encoder.encode("\u5746")}).to.throw(Error, "EncodingError U+5746");
r = r && ([...ms932Encoder.encode("均")].join(",") === "139,207"); // U+5747
expect(() => {ms932Encoder.encode("\u5748")}).to.throw(Error, "EncodingError U+5748");
expect(() => {ms932Encoder.encode("\u5749")}).to.throw(Error, "EncodingError U+5749");
r = r && ([...ms932Encoder.encode("坊")].join(",") === "150,86"); // U+574A
expect(() => {ms932Encoder.encode("\u574B")}).to.throw(Error, "EncodingError U+574B");
expect(() => {ms932Encoder.encode("\u574C")}).to.throw(Error, "EncodingError U+574C");
expect(() => {ms932Encoder.encode("\u574D")}).to.throw(Error, "EncodingError U+574D");
r = r && ([...ms932Encoder.encode("坎坏坐坑")].join(",") === "154,170,154,173,141,191,141,66"); // U+574E
expect(() => {ms932Encoder.encode("\u5752")}).to.throw(Error, "EncodingError U+5752");
expect(() => {ms932Encoder.encode("\u5753")}).to.throw(Error, "EncodingError U+5753");
expect(() => {ms932Encoder.encode("\u5754")}).to.throw(Error, "EncodingError U+5754");
expect(() => {ms932Encoder.encode("\u5755")}).to.throw(Error, "EncodingError U+5755");
expect(() => {ms932Encoder.encode("\u5756")}).to.throw(Error, "EncodingError U+5756");
expect(() => {ms932Encoder.encode("\u5757")}).to.throw(Error, "EncodingError U+5757");
expect(() => {ms932Encoder.encode("\u5758")}).to.throw(Error, "EncodingError U+5758");
r = r && ([...ms932Encoder.encode("坙")].join(",") === "250,150"); // U+5759
expect(() => {ms932Encoder.encode("\u575A")}).to.throw(Error, "EncodingError U+575A");
expect(() => {ms932Encoder.encode("\u575B")}).to.throw(Error, "EncodingError U+575B");
expect(() => {ms932Encoder.encode("\u575C")}).to.throw(Error, "EncodingError U+575C");
expect(() => {ms932Encoder.encode("\u575D")}).to.throw(Error, "EncodingError U+575D");
expect(() => {ms932Encoder.encode("\u575E")}).to.throw(Error, "EncodingError U+575E");
expect(() => {ms932Encoder.encode("\u575F")}).to.throw(Error, "EncodingError U+575F");
expect(() => {ms932Encoder.encode("\u5760")}).to.throw(Error, "EncodingError U+5760");
r = r && ([...ms932Encoder.encode("坡")].join(",") === "154,177"); // U+5761
expect(() => {ms932Encoder.encode("\u5762")}).to.throw(Error, "EncodingError U+5762");
expect(() => {ms932Encoder.encode("\u5763")}).to.throw(Error, "EncodingError U+5763");
r = r && ([...ms932Encoder.encode("坤坥坦")].join(",") === "141,163,250,151,146,82"); // U+5764
expect(() => {ms932Encoder.encode("\u5767")}).to.throw(Error, "EncodingError U+5767");
expect(() => {ms932Encoder.encode("\u5768")}).to.throw(Error, "EncodingError U+5768");
r = r && ([...ms932Encoder.encode("坩坪")].join(",") === "154,174,146,216"); // U+5769
expect(() => {ms932Encoder.encode("\u576B")}).to.throw(Error, "EncodingError U+576B");
expect(() => {ms932Encoder.encode("\u576C")}).to.throw(Error, "EncodingError U+576C");
expect(() => {ms932Encoder.encode("\u576D")}).to.throw(Error, "EncodingError U+576D");
expect(() => {ms932Encoder.encode("\u576E")}).to.throw(Error, "EncodingError U+576E");
expect(() => {ms932Encoder.encode("\u576F")}).to.throw(Error, "EncodingError U+576F");
expect(() => {ms932Encoder.encode("\u5770")}).to.throw(Error, "EncodingError U+5770");
expect(() => {ms932Encoder.encode("\u5771")}).to.throw(Error, "EncodingError U+5771");
expect(() => {ms932Encoder.encode("\u5772")}).to.throw(Error, "EncodingError U+5772");
expect(() => {ms932Encoder.encode("\u5773")}).to.throw(Error, "EncodingError U+5773");
expect(() => {ms932Encoder.encode("\u5774")}).to.throw(Error, "EncodingError U+5774");
expect(() => {ms932Encoder.encode("\u5775")}).to.throw(Error, "EncodingError U+5775");
expect(() => {ms932Encoder.encode("\u5776")}).to.throw(Error, "EncodingError U+5776");
expect(() => {ms932Encoder.encode("\u5777")}).to.throw(Error, "EncodingError U+5777");
expect(() => {ms932Encoder.encode("\u5778")}).to.throw(Error, "EncodingError U+5778");
expect(() => {ms932Encoder.encode("\u5779")}).to.throw(Error, "EncodingError U+5779");
expect(() => {ms932Encoder.encode("\u577A")}).to.throw(Error, "EncodingError U+577A");
expect(() => {ms932Encoder.encode("\u577B")}).to.throw(Error, "EncodingError U+577B");
expect(() => {ms932Encoder.encode("\u577C")}).to.throw(Error, "EncodingError U+577C");
expect(() => {ms932Encoder.encode("\u577D")}).to.throw(Error, "EncodingError U+577D");
expect(() => {ms932Encoder.encode("\u577E")}).to.throw(Error, "EncodingError U+577E");
r = r && ([...ms932Encoder.encode("坿")].join(",") === "154,178"); // U+577F
expect(() => {ms932Encoder.encode("\u5780")}).to.throw(Error, "EncodingError U+5780");
expect(() => {ms932Encoder.encode("\u5781")}).to.throw(Error, "EncodingError U+5781");
r = r && ([...ms932Encoder.encode("垂")].join(",") === "144,130"); // U+5782
expect(() => {ms932Encoder.encode("\u5783")}).to.throw(Error, "EncodingError U+5783");
expect(() => {ms932Encoder.encode("\u5784")}).to.throw(Error, "EncodingError U+5784");
expect(() => {ms932Encoder.encode("\u5785")}).to.throw(Error, "EncodingError U+5785");
expect(() => {ms932Encoder.encode("\u5786")}).to.throw(Error, "EncodingError U+5786");
expect(() => {ms932Encoder.encode("\u5787")}).to.throw(Error, "EncodingError U+5787");
r = r && ([...ms932Encoder.encode("垈垉")].join(",") === "154,176,154,179"); // U+5788
expect(() => {ms932Encoder.encode("\u578A")}).to.throw(Error, "EncodingError U+578A");
r = r && ([...ms932Encoder.encode("型")].join(",") === "140,94"); // U+578B
expect(() => {ms932Encoder.encode("\u578C")}).to.throw(Error, "EncodingError U+578C");
expect(() => {ms932Encoder.encode("\u578D")}).to.throw(Error, "EncodingError U+578D");
expect(() => {ms932Encoder.encode("\u578E")}).to.throw(Error, "EncodingError U+578E");
expect(() => {ms932Encoder.encode("\u578F")}).to.throw(Error, "EncodingError U+578F");
expect(() => {ms932Encoder.encode("\u5790")}).to.throw(Error, "EncodingError U+5790");
expect(() => {ms932Encoder.encode("\u5791")}).to.throw(Error, "EncodingError U+5791");
expect(() => {ms932Encoder.encode("\u5792")}).to.throw(Error, "EncodingError U+5792");
r = r && ([...ms932Encoder.encode("垓")].join(",") === "154,180"); // U+5793
expect(() => {ms932Encoder.encode("\u5794")}).to.throw(Error, "EncodingError U+5794");
expect(() => {ms932Encoder.encode("\u5795")}).to.throw(Error, "EncodingError U+5795");
expect(() => {ms932Encoder.encode("\u5796")}).to.throw(Error, "EncodingError U+5796");
expect(() => {ms932Encoder.encode("\u5797")}).to.throw(Error, "EncodingError U+5797");
expect(() => {ms932Encoder.encode("\u5798")}).to.throw(Error, "EncodingError U+5798");
expect(() => {ms932Encoder.encode("\u5799")}).to.throw(Error, "EncodingError U+5799");
expect(() => {ms932Encoder.encode("\u579A")}).to.throw(Error, "EncodingError U+579A");
expect(() => {ms932Encoder.encode("\u579B")}).to.throw(Error, "EncodingError U+579B");
expect(() => {ms932Encoder.encode("\u579C")}).to.throw(Error, "EncodingError U+579C");
expect(() => {ms932Encoder.encode("\u579D")}).to.throw(Error, "EncodingError U+579D");
expect(() => {ms932Encoder.encode("\u579E")}).to.throw(Error, "EncodingError U+579E");
expect(() => {ms932Encoder.encode("\u579F")}).to.throw(Error, "EncodingError U+579F");
r = r && ([...ms932Encoder.encode("垠")].join(",") === "154,181"); // U+57A0
expect(() => {ms932Encoder.encode("\u57A1")}).to.throw(Error, "EncodingError U+57A1");
r = r && ([...ms932Encoder.encode("垢垣垤")].join(",") === "141,67,138,95,154,183"); // U+57A2
expect(() => {ms932Encoder.encode("\u57A5")}).to.throw(Error, "EncodingError U+57A5");
expect(() => {ms932Encoder.encode("\u57A6")}).to.throw(Error, "EncodingError U+57A6");
expect(() => {ms932Encoder.encode("\u57A7")}).to.throw(Error, "EncodingError U+57A7");
expect(() => {ms932Encoder.encode("\u57A8")}).to.throw(Error, "EncodingError U+57A8");
expect(() => {ms932Encoder.encode("\u57A9")}).to.throw(Error, "EncodingError U+57A9");
r = r && ([...ms932Encoder.encode("垪")].join(",") === "154,184"); // U+57AA
expect(() => {ms932Encoder.encode("\u57AB")}).to.throw(Error, "EncodingError U+57AB");
r = r && ([...ms932Encoder.encode("垬")].join(",") === "250,152"); // U+57AC
expect(() => {ms932Encoder.encode("\u57AD")}).to.throw(Error, "EncodingError U+57AD");
expect(() => {ms932Encoder.encode("\u57AE")}).to.throw(Error, "EncodingError U+57AE");
expect(() => {ms932Encoder.encode("\u57AF")}).to.throw(Error, "EncodingError U+57AF");
r = r && ([...ms932Encoder.encode("垰")].join(",") === "154,185"); // U+57B0
expect(() => {ms932Encoder.encode("\u57B1")}).to.throw(Error, "EncodingError U+57B1");
expect(() => {ms932Encoder.encode("\u57B2")}).to.throw(Error, "EncodingError U+57B2");
r = r && ([...ms932Encoder.encode("垳")].join(",") === "154,182"); // U+57B3
expect(() => {ms932Encoder.encode("\u57B4")}).to.throw(Error, "EncodingError U+57B4");
expect(() => {ms932Encoder.encode("\u57B5")}).to.throw(Error, "EncodingError U+57B5");
expect(() => {ms932Encoder.encode("\u57B6")}).to.throw(Error, "EncodingError U+57B6");
expect(() => {ms932Encoder.encode("\u57B7")}).to.throw(Error, "EncodingError U+57B7");
expect(() => {ms932Encoder.encode("\u57B8")}).to.throw(Error, "EncodingError U+57B8");
expect(() => {ms932Encoder.encode("\u57B9")}).to.throw(Error, "EncodingError U+57B9");
expect(() => {ms932Encoder.encode("\u57BA")}).to.throw(Error, "EncodingError U+57BA");
expect(() => {ms932Encoder.encode("\u57BB")}).to.throw(Error, "EncodingError U+57BB");
expect(() => {ms932Encoder.encode("\u57BC")}).to.throw(Error, "EncodingError U+57BC");
expect(() => {ms932Encoder.encode("\u57BD")}).to.throw(Error, "EncodingError U+57BD");
expect(() => {ms932Encoder.encode("\u57BE")}).to.throw(Error, "EncodingError U+57BE");
expect(() => {ms932Encoder.encode("\u57BF")}).to.throw(Error, "EncodingError U+57BF");
r = r && ([...ms932Encoder.encode("埀")].join(",") === "154,175"); // U+57C0
expect(() => {ms932Encoder.encode("\u57C1")}).to.throw(Error, "EncodingError U+57C1");
expect(() => {ms932Encoder.encode("\u57C2")}).to.throw(Error, "EncodingError U+57C2");
r = r && ([...ms932Encoder.encode("埃")].join(",") === "154,186"); // U+57C3
expect(() => {ms932Encoder.encode("\u57C4")}).to.throw(Error, "EncodingError U+57C4");
expect(() => {ms932Encoder.encode("\u57C5")}).to.throw(Error, "EncodingError U+57C5");
r = r && ([...ms932Encoder.encode("埆埇埈")].join(",") === "154,187,250,154,250,153"); // U+57C6
expect(() => {ms932Encoder.encode("\u57C9")}).to.throw(Error, "EncodingError U+57C9");
expect(() => {ms932Encoder.encode("\u57CA")}).to.throw(Error, "EncodingError U+57CA");
r = r && ([...ms932Encoder.encode("埋")].join(",") === "150,132"); // U+57CB
expect(() => {ms932Encoder.encode("\u57CC")}).to.throw(Error, "EncodingError U+57CC");
expect(() => {ms932Encoder.encode("\u57CD")}).to.throw(Error, "EncodingError U+57CD");
r = r && ([...ms932Encoder.encode("城")].join(",") === "143,233"); // U+57CE
expect(() => {ms932Encoder.encode("\u57CF")}).to.throw(Error, "EncodingError U+57CF");
expect(() => {ms932Encoder.encode("\u57D0")}).to.throw(Error, "EncodingError U+57D0");
expect(() => {ms932Encoder.encode("\u57D1")}).to.throw(Error, "EncodingError U+57D1");
r = r && ([...ms932Encoder.encode("埒埓埔")].join(",") === "154,189,154,190,154,188"); // U+57D2
expect(() => {ms932Encoder.encode("\u57D5")}).to.throw(Error, "EncodingError U+57D5");
r = r && ([...ms932Encoder.encode("埖")].join(",") === "154,192"); // U+57D6
expect(() => {ms932Encoder.encode("\u57D7")}).to.throw(Error, "EncodingError U+57D7");
expect(() => {ms932Encoder.encode("\u57D8")}).to.throw(Error, "EncodingError U+57D8");
expect(() => {ms932Encoder.encode("\u57D9")}).to.throw(Error, "EncodingError U+57D9");
expect(() => {ms932Encoder.encode("\u57DA")}).to.throw(Error, "EncodingError U+57DA");
expect(() => {ms932Encoder.encode("\u57DB")}).to.throw(Error, "EncodingError U+57DB");
r = r && ([...ms932Encoder.encode("埜")].join(",") === "148,87"); // U+57DC
expect(() => {ms932Encoder.encode("\u57DD")}).to.throw(Error, "EncodingError U+57DD");
expect(() => {ms932Encoder.encode("\u57DE")}).to.throw(Error, "EncodingError U+57DE");
r = r && ([...ms932Encoder.encode("域埠")].join(",") === "136,230,149,117"); // U+57DF
expect(() => {ms932Encoder.encode("\u57E1")}).to.throw(Error, "EncodingError U+57E1");
expect(() => {ms932Encoder.encode("\u57E2")}).to.throw(Error, "EncodingError U+57E2");
r = r && ([...ms932Encoder.encode("埣")].join(",") === "154,193"); // U+57E3
expect(() => {ms932Encoder.encode("\u57E4")}).to.throw(Error, "EncodingError U+57E4");
expect(() => {ms932Encoder.encode("\u57E5")}).to.throw(Error, "EncodingError U+57E5");
expect(() => {ms932Encoder.encode("\u57E6")}).to.throw(Error, "EncodingError U+57E6");
expect(() => {ms932Encoder.encode("\u57E7")}).to.throw(Error, "EncodingError U+57E7");
expect(() => {ms932Encoder.encode("\u57E8")}).to.throw(Error, "EncodingError U+57E8");
expect(() => {ms932Encoder.encode("\u57E9")}).to.throw(Error, "EncodingError U+57E9");
expect(() => {ms932Encoder.encode("\u57EA")}).to.throw(Error, "EncodingError U+57EA");
expect(() => {ms932Encoder.encode("\u57EB")}).to.throw(Error, "EncodingError U+57EB");
expect(() => {ms932Encoder.encode("\u57EC")}).to.throw(Error, "EncodingError U+57EC");
expect(() => {ms932Encoder.encode("\u57ED")}).to.throw(Error, "EncodingError U+57ED");
expect(() => {ms932Encoder.encode("\u57EE")}).to.throw(Error, "EncodingError U+57EE");
expect(() => {ms932Encoder.encode("\u57EF")}).to.throw(Error, "EncodingError U+57EF");
expect(() => {ms932Encoder.encode("\u57F0")}).to.throw(Error, "EncodingError U+57F0");
expect(() => {ms932Encoder.encode("\u57F1")}).to.throw(Error, "EncodingError U+57F1");
expect(() => {ms932Encoder.encode("\u57F2")}).to.throw(Error, "EncodingError U+57F2");
expect(() => {ms932Encoder.encode("\u57F3")}).to.throw(Error, "EncodingError U+57F3");
r = r && ([...ms932Encoder.encode("埴")].join(",") === "143,251"); // U+57F4
expect(() => {ms932Encoder.encode("\u57F5")}).to.throw(Error, "EncodingError U+57F5");
expect(() => {ms932Encoder.encode("\u57F6")}).to.throw(Error, "EncodingError U+57F6");
r = r && ([...ms932Encoder.encode("執")].join(",") === "142,183"); // U+57F7
expect(() => {ms932Encoder.encode("\u57F8")}).to.throw(Error, "EncodingError U+57F8");
r = r && ([...ms932Encoder.encode("培基")].join(",") === "148,124,138,238"); // U+57F9
expect(() => {ms932Encoder.encode("\u57FB")}).to.throw(Error, "EncodingError U+57FB");
r = r && ([...ms932Encoder.encode("埼")].join(",") === "141,233"); // U+57FC
expect(() => {ms932Encoder.encode("\u57FD")}).to.throw(Error, "EncodingError U+57FD");
expect(() => {ms932Encoder.encode("\u57FE")}).to.throw(Error, "EncodingError U+57FE");
expect(() => {ms932Encoder.encode("\u57FF")}).to.throw(Error, "EncodingError U+57FF");

expect(r).to.equal(true);

  });

});
