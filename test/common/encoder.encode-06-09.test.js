import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "../../dist/index.js";

describe("Ms932Encoder.prototype.encode 6", () => {

  it("encode(string) - U+5800-U+5BFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
r = r && ([...ms932Encoder.encode("堀")].join(",") === "150,120"); // U+5800
expect(() => {ms932Encoder.encode("\u5801")}).to.throw(Error, "EncodingError U+5801");
r = r && ([...ms932Encoder.encode("堂")].join(",") === "147,176"); // U+5802
expect(() => {ms932Encoder.encode("\u5803")}).to.throw(Error, "EncodingError U+5803");
expect(() => {ms932Encoder.encode("\u5804")}).to.throw(Error, "EncodingError U+5804");
r = r && ([...ms932Encoder.encode("堅堆")].join(",") === "140,152,145,205"); // U+5805
expect(() => {ms932Encoder.encode("\u5807")}).to.throw(Error, "EncodingError U+5807");
expect(() => {ms932Encoder.encode("\u5808")}).to.throw(Error, "EncodingError U+5808");
expect(() => {ms932Encoder.encode("\u5809")}).to.throw(Error, "EncodingError U+5809");
r = r && ([...ms932Encoder.encode("堊堋")].join(",") === "154,191,154,194"); // U+580A
expect(() => {ms932Encoder.encode("\u580C")}).to.throw(Error, "EncodingError U+580C");
expect(() => {ms932Encoder.encode("\u580D")}).to.throw(Error, "EncodingError U+580D");
expect(() => {ms932Encoder.encode("\u580E")}).to.throw(Error, "EncodingError U+580E");
expect(() => {ms932Encoder.encode("\u580F")}).to.throw(Error, "EncodingError U+580F");
expect(() => {ms932Encoder.encode("\u5810")}).to.throw(Error, "EncodingError U+5810");
expect(() => {ms932Encoder.encode("\u5811")}).to.throw(Error, "EncodingError U+5811");
expect(() => {ms932Encoder.encode("\u5812")}).to.throw(Error, "EncodingError U+5812");
expect(() => {ms932Encoder.encode("\u5813")}).to.throw(Error, "EncodingError U+5813");
expect(() => {ms932Encoder.encode("\u5814")}).to.throw(Error, "EncodingError U+5814");
r = r && ([...ms932Encoder.encode("堕")].join(",") === "145,194"); // U+5815
expect(() => {ms932Encoder.encode("\u5816")}).to.throw(Error, "EncodingError U+5816");
expect(() => {ms932Encoder.encode("\u5817")}).to.throw(Error, "EncodingError U+5817");
expect(() => {ms932Encoder.encode("\u5818")}).to.throw(Error, "EncodingError U+5818");
r = r && ([...ms932Encoder.encode("堙")].join(",") === "154,195"); // U+5819
expect(() => {ms932Encoder.encode("\u581A")}).to.throw(Error, "EncodingError U+581A");
expect(() => {ms932Encoder.encode("\u581B")}).to.throw(Error, "EncodingError U+581B");
expect(() => {ms932Encoder.encode("\u581C")}).to.throw(Error, "EncodingError U+581C");
r = r && ([...ms932Encoder.encode("堝")].join(",") === "154,196"); // U+581D
expect(() => {ms932Encoder.encode("\u581E")}).to.throw(Error, "EncodingError U+581E");
expect(() => {ms932Encoder.encode("\u581F")}).to.throw(Error, "EncodingError U+581F");
expect(() => {ms932Encoder.encode("\u5820")}).to.throw(Error, "EncodingError U+5820");
r = r && ([...ms932Encoder.encode("堡")].join(",") === "154,198"); // U+5821
expect(() => {ms932Encoder.encode("\u5822")}).to.throw(Error, "EncodingError U+5822");
expect(() => {ms932Encoder.encode("\u5823")}).to.throw(Error, "EncodingError U+5823");
r = r && ([...ms932Encoder.encode("堤")].join(",") === "146,231"); // U+5824
expect(() => {ms932Encoder.encode("\u5825")}).to.throw(Error, "EncodingError U+5825");
expect(() => {ms932Encoder.encode("\u5826")}).to.throw(Error, "EncodingError U+5826");
expect(() => {ms932Encoder.encode("\u5827")}).to.throw(Error, "EncodingError U+5827");
expect(() => {ms932Encoder.encode("\u5828")}).to.throw(Error, "EncodingError U+5828");
expect(() => {ms932Encoder.encode("\u5829")}).to.throw(Error, "EncodingError U+5829");
r = r && ([...ms932Encoder.encode("堪")].join(",") === "138,172"); // U+582A
expect(() => {ms932Encoder.encode("\u582B")}).to.throw(Error, "EncodingError U+582B");
expect(() => {ms932Encoder.encode("\u582C")}).to.throw(Error, "EncodingError U+582C");
expect(() => {ms932Encoder.encode("\u582D")}).to.throw(Error, "EncodingError U+582D");
expect(() => {ms932Encoder.encode("\u582E")}).to.throw(Error, "EncodingError U+582E");
r = r && ([...ms932Encoder.encode("堯堰報")].join(",") === "234,159,137,129,149,241"); // U+582F
expect(() => {ms932Encoder.encode("\u5832")}).to.throw(Error, "EncodingError U+5832");
expect(() => {ms932Encoder.encode("\u5833")}).to.throw(Error, "EncodingError U+5833");
r = r && ([...ms932Encoder.encode("場堵")].join(",") === "143,234,147,103"); // U+5834
expect(() => {ms932Encoder.encode("\u5836")}).to.throw(Error, "EncodingError U+5836");
expect(() => {ms932Encoder.encode("\u5837")}).to.throw(Error, "EncodingError U+5837");
expect(() => {ms932Encoder.encode("\u5838")}).to.throw(Error, "EncodingError U+5838");
expect(() => {ms932Encoder.encode("\u5839")}).to.throw(Error, "EncodingError U+5839");
r = r && ([...ms932Encoder.encode("堺")].join(",") === "141,228"); // U+583A
expect(() => {ms932Encoder.encode("\u583B")}).to.throw(Error, "EncodingError U+583B");
expect(() => {ms932Encoder.encode("\u583C")}).to.throw(Error, "EncodingError U+583C");
r = r && ([...ms932Encoder.encode("堽")].join(",") === "154,204"); // U+583D
expect(() => {ms932Encoder.encode("\u583E")}).to.throw(Error, "EncodingError U+583E");
expect(() => {ms932Encoder.encode("\u583F")}).to.throw(Error, "EncodingError U+583F");
r = r && ([...ms932Encoder.encode("塀塁")].join(",") === "149,187,151,219"); // U+5840
expect(() => {ms932Encoder.encode("\u5842")}).to.throw(Error, "EncodingError U+5842");
expect(() => {ms932Encoder.encode("\u5843")}).to.throw(Error, "EncodingError U+5843");
expect(() => {ms932Encoder.encode("\u5844")}).to.throw(Error, "EncodingError U+5844");
expect(() => {ms932Encoder.encode("\u5845")}).to.throw(Error, "EncodingError U+5845");
expect(() => {ms932Encoder.encode("\u5846")}).to.throw(Error, "EncodingError U+5846");
expect(() => {ms932Encoder.encode("\u5847")}).to.throw(Error, "EncodingError U+5847");
expect(() => {ms932Encoder.encode("\u5848")}).to.throw(Error, "EncodingError U+5848");
expect(() => {ms932Encoder.encode("\u5849")}).to.throw(Error, "EncodingError U+5849");
r = r && ([...ms932Encoder.encode("塊塋")].join(",") === "137,242,154,200"); // U+584A
expect(() => {ms932Encoder.encode("\u584C")}).to.throw(Error, "EncodingError U+584C");
expect(() => {ms932Encoder.encode("\u584D")}).to.throw(Error, "EncodingError U+584D");
expect(() => {ms932Encoder.encode("\u584E")}).to.throw(Error, "EncodingError U+584E");
expect(() => {ms932Encoder.encode("\u584F")}).to.throw(Error, "EncodingError U+584F");
expect(() => {ms932Encoder.encode("\u5850")}).to.throw(Error, "EncodingError U+5850");
r = r && ([...ms932Encoder.encode("塑塒")].join(",") === "145,89,154,203"); // U+5851
expect(() => {ms932Encoder.encode("\u5853")}).to.throw(Error, "EncodingError U+5853");
r = r && ([...ms932Encoder.encode("塔")].join(",") === "147,131"); // U+5854
expect(() => {ms932Encoder.encode("\u5855")}).to.throw(Error, "EncodingError U+5855");
expect(() => {ms932Encoder.encode("\u5856")}).to.throw(Error, "EncodingError U+5856");
r = r && ([...ms932Encoder.encode("塗塘塙塚")].join(",") === "147,104,147,132,148,183,146,203"); // U+5857
expect(() => {ms932Encoder.encode("\u585B")}).to.throw(Error, "EncodingError U+585B");
expect(() => {ms932Encoder.encode("\u585C")}).to.throw(Error, "EncodingError U+585C");
expect(() => {ms932Encoder.encode("\u585D")}).to.throw(Error, "EncodingError U+585D");
r = r && ([...ms932Encoder.encode("塞")].join(",") === "141,199"); // U+585E
expect(() => {ms932Encoder.encode("\u585F")}).to.throw(Error, "EncodingError U+585F");
expect(() => {ms932Encoder.encode("\u5860")}).to.throw(Error, "EncodingError U+5860");
expect(() => {ms932Encoder.encode("\u5861")}).to.throw(Error, "EncodingError U+5861");
r = r && ([...ms932Encoder.encode("塢")].join(",") === "154,199"); // U+5862
expect(() => {ms932Encoder.encode("\u5863")}).to.throw(Error, "EncodingError U+5863");
expect(() => {ms932Encoder.encode("\u5864")}).to.throw(Error, "EncodingError U+5864");
expect(() => {ms932Encoder.encode("\u5865")}).to.throw(Error, "EncodingError U+5865");
expect(() => {ms932Encoder.encode("\u5866")}).to.throw(Error, "EncodingError U+5866");
expect(() => {ms932Encoder.encode("\u5867")}).to.throw(Error, "EncodingError U+5867");
expect(() => {ms932Encoder.encode("\u5868")}).to.throw(Error, "EncodingError U+5868");
r = r && ([...ms932Encoder.encode("塩")].join(",") === "137,150"); // U+5869
expect(() => {ms932Encoder.encode("\u586A")}).to.throw(Error, "EncodingError U+586A");
r = r && ([...ms932Encoder.encode("填")].join(",") === "147,85"); // U+586B
expect(() => {ms932Encoder.encode("\u586C")}).to.throw(Error, "EncodingError U+586C");
expect(() => {ms932Encoder.encode("\u586D")}).to.throw(Error, "EncodingError U+586D");
expect(() => {ms932Encoder.encode("\u586E")}).to.throw(Error, "EncodingError U+586E");
expect(() => {ms932Encoder.encode("\u586F")}).to.throw(Error, "EncodingError U+586F");
r = r && ([...ms932Encoder.encode("塰")].join(",") === "154,201"); // U+5870
expect(() => {ms932Encoder.encode("\u5871")}).to.throw(Error, "EncodingError U+5871");
r = r && ([...ms932Encoder.encode("塲")].join(",") === "154,197"); // U+5872
expect(() => {ms932Encoder.encode("\u5873")}).to.throw(Error, "EncodingError U+5873");
expect(() => {ms932Encoder.encode("\u5874")}).to.throw(Error, "EncodingError U+5874");
r = r && ([...ms932Encoder.encode("塵")].join(",") === "144,111"); // U+5875
expect(() => {ms932Encoder.encode("\u5876")}).to.throw(Error, "EncodingError U+5876");
expect(() => {ms932Encoder.encode("\u5877")}).to.throw(Error, "EncodingError U+5877");
expect(() => {ms932Encoder.encode("\u5878")}).to.throw(Error, "EncodingError U+5878");
r = r && ([...ms932Encoder.encode("塹")].join(",") === "154,205"); // U+5879
expect(() => {ms932Encoder.encode("\u587A")}).to.throw(Error, "EncodingError U+587A");
expect(() => {ms932Encoder.encode("\u587B")}).to.throw(Error, "EncodingError U+587B");
expect(() => {ms932Encoder.encode("\u587C")}).to.throw(Error, "EncodingError U+587C");
expect(() => {ms932Encoder.encode("\u587D")}).to.throw(Error, "EncodingError U+587D");
r = r && ([...ms932Encoder.encode("塾")].join(",") === "143,109"); // U+587E
expect(() => {ms932Encoder.encode("\u587F")}).to.throw(Error, "EncodingError U+587F");
expect(() => {ms932Encoder.encode("\u5880")}).to.throw(Error, "EncodingError U+5880");
expect(() => {ms932Encoder.encode("\u5881")}).to.throw(Error, "EncodingError U+5881");
expect(() => {ms932Encoder.encode("\u5882")}).to.throw(Error, "EncodingError U+5882");
r = r && ([...ms932Encoder.encode("境")].join(",") === "139,171"); // U+5883
expect(() => {ms932Encoder.encode("\u5884")}).to.throw(Error, "EncodingError U+5884");
r = r && ([...ms932Encoder.encode("墅")].join(",") === "154,206"); // U+5885
expect(() => {ms932Encoder.encode("\u5886")}).to.throw(Error, "EncodingError U+5886");
expect(() => {ms932Encoder.encode("\u5887")}).to.throw(Error, "EncodingError U+5887");
expect(() => {ms932Encoder.encode("\u5888")}).to.throw(Error, "EncodingError U+5888");
expect(() => {ms932Encoder.encode("\u5889")}).to.throw(Error, "EncodingError U+5889");
expect(() => {ms932Encoder.encode("\u588A")}).to.throw(Error, "EncodingError U+588A");
expect(() => {ms932Encoder.encode("\u588B")}).to.throw(Error, "EncodingError U+588B");
expect(() => {ms932Encoder.encode("\u588C")}).to.throw(Error, "EncodingError U+588C");
expect(() => {ms932Encoder.encode("\u588D")}).to.throw(Error, "EncodingError U+588D");
expect(() => {ms932Encoder.encode("\u588E")}).to.throw(Error, "EncodingError U+588E");
expect(() => {ms932Encoder.encode("\u588F")}).to.throw(Error, "EncodingError U+588F");
expect(() => {ms932Encoder.encode("\u5890")}).to.throw(Error, "EncodingError U+5890");
expect(() => {ms932Encoder.encode("\u5891")}).to.throw(Error, "EncodingError U+5891");
expect(() => {ms932Encoder.encode("\u5892")}).to.throw(Error, "EncodingError U+5892");
r = r && ([...ms932Encoder.encode("墓")].join(",") === "149,230"); // U+5893
expect(() => {ms932Encoder.encode("\u5894")}).to.throw(Error, "EncodingError U+5894");
expect(() => {ms932Encoder.encode("\u5895")}).to.throw(Error, "EncodingError U+5895");
expect(() => {ms932Encoder.encode("\u5896")}).to.throw(Error, "EncodingError U+5896");
r = r && ([...ms932Encoder.encode("増")].join(",") === "145,157"); // U+5897
expect(() => {ms932Encoder.encode("\u5898")}).to.throw(Error, "EncodingError U+5898");
expect(() => {ms932Encoder.encode("\u5899")}).to.throw(Error, "EncodingError U+5899");
expect(() => {ms932Encoder.encode("\u589A")}).to.throw(Error, "EncodingError U+589A");
expect(() => {ms932Encoder.encode("\u589B")}).to.throw(Error, "EncodingError U+589B");
r = r && ([...ms932Encoder.encode("墜")].join(",") === "146,196"); // U+589C
expect(() => {ms932Encoder.encode("\u589D")}).to.throw(Error, "EncodingError U+589D");
r = r && ([...ms932Encoder.encode("增墟")].join(",") === "250,157,154,208"); // U+589E
expect(() => {ms932Encoder.encode("\u58A0")}).to.throw(Error, "EncodingError U+58A0");
expect(() => {ms932Encoder.encode("\u58A1")}).to.throw(Error, "EncodingError U+58A1");
expect(() => {ms932Encoder.encode("\u58A2")}).to.throw(Error, "EncodingError U+58A2");
expect(() => {ms932Encoder.encode("\u58A3")}).to.throw(Error, "EncodingError U+58A3");
expect(() => {ms932Encoder.encode("\u58A4")}).to.throw(Error, "EncodingError U+58A4");
expect(() => {ms932Encoder.encode("\u58A5")}).to.throw(Error, "EncodingError U+58A5");
expect(() => {ms932Encoder.encode("\u58A6")}).to.throw(Error, "EncodingError U+58A6");
expect(() => {ms932Encoder.encode("\u58A7")}).to.throw(Error, "EncodingError U+58A7");
r = r && ([...ms932Encoder.encode("墨")].join(",") === "150,110"); // U+58A8
expect(() => {ms932Encoder.encode("\u58A9")}).to.throw(Error, "EncodingError U+58A9");
expect(() => {ms932Encoder.encode("\u58AA")}).to.throw(Error, "EncodingError U+58AA");
r = r && ([...ms932Encoder.encode("墫")].join(",") === "154,209"); // U+58AB
expect(() => {ms932Encoder.encode("\u58AC")}).to.throw(Error, "EncodingError U+58AC");
expect(() => {ms932Encoder.encode("\u58AD")}).to.throw(Error, "EncodingError U+58AD");
r = r && ([...ms932Encoder.encode("墮")].join(",") === "154,214"); // U+58AE
expect(() => {ms932Encoder.encode("\u58AF")}).to.throw(Error, "EncodingError U+58AF");
expect(() => {ms932Encoder.encode("\u58B0")}).to.throw(Error, "EncodingError U+58B0");
expect(() => {ms932Encoder.encode("\u58B1")}).to.throw(Error, "EncodingError U+58B1");
r = r && ([...ms932Encoder.encode("墲墳")].join(",") === "250,158,149,173"); // U+58B2
expect(() => {ms932Encoder.encode("\u58B4")}).to.throw(Error, "EncodingError U+58B4");
expect(() => {ms932Encoder.encode("\u58B5")}).to.throw(Error, "EncodingError U+58B5");
expect(() => {ms932Encoder.encode("\u58B6")}).to.throw(Error, "EncodingError U+58B6");
expect(() => {ms932Encoder.encode("\u58B7")}).to.throw(Error, "EncodingError U+58B7");
r = r && ([...ms932Encoder.encode("墸墹墺墻")].join(",") === "154,213,154,207,154,210,154,212"); // U+58B8
expect(() => {ms932Encoder.encode("\u58BC")}).to.throw(Error, "EncodingError U+58BC");
expect(() => {ms932Encoder.encode("\u58BD")}).to.throw(Error, "EncodingError U+58BD");
r = r && ([...ms932Encoder.encode("墾")].join(",") === "141,164"); // U+58BE
expect(() => {ms932Encoder.encode("\u58BF")}).to.throw(Error, "EncodingError U+58BF");
expect(() => {ms932Encoder.encode("\u58C0")}).to.throw(Error, "EncodingError U+58C0");
r = r && ([...ms932Encoder.encode("壁")].join(",") === "149,199"); // U+58C1
expect(() => {ms932Encoder.encode("\u58C2")}).to.throw(Error, "EncodingError U+58C2");
expect(() => {ms932Encoder.encode("\u58C3")}).to.throw(Error, "EncodingError U+58C3");
expect(() => {ms932Encoder.encode("\u58C4")}).to.throw(Error, "EncodingError U+58C4");
r = r && ([...ms932Encoder.encode("壅")].join(",") === "154,215"); // U+58C5
expect(() => {ms932Encoder.encode("\u58C6")}).to.throw(Error, "EncodingError U+58C6");
r = r && ([...ms932Encoder.encode("壇")].join(",") === "146,100"); // U+58C7
expect(() => {ms932Encoder.encode("\u58C8")}).to.throw(Error, "EncodingError U+58C8");
expect(() => {ms932Encoder.encode("\u58C9")}).to.throw(Error, "EncodingError U+58C9");
r = r && ([...ms932Encoder.encode("壊")].join(",") === "137,243"); // U+58CA
expect(() => {ms932Encoder.encode("\u58CB")}).to.throw(Error, "EncodingError U+58CB");
r = r && ([...ms932Encoder.encode("壌")].join(",") === "143,235"); // U+58CC
expect(() => {ms932Encoder.encode("\u58CD")}).to.throw(Error, "EncodingError U+58CD");
expect(() => {ms932Encoder.encode("\u58CE")}).to.throw(Error, "EncodingError U+58CE");
expect(() => {ms932Encoder.encode("\u58CF")}).to.throw(Error, "EncodingError U+58CF");
expect(() => {ms932Encoder.encode("\u58D0")}).to.throw(Error, "EncodingError U+58D0");
r = r && ([...ms932Encoder.encode("壑")].join(",") === "154,217"); // U+58D1
expect(() => {ms932Encoder.encode("\u58D2")}).to.throw(Error, "EncodingError U+58D2");
r = r && ([...ms932Encoder.encode("壓")].join(",") === "154,216"); // U+58D3
expect(() => {ms932Encoder.encode("\u58D4")}).to.throw(Error, "EncodingError U+58D4");
r = r && ([...ms932Encoder.encode("壕")].join(",") === "141,136"); // U+58D5
expect(() => {ms932Encoder.encode("\u58D6")}).to.throw(Error, "EncodingError U+58D6");
r = r && ([...ms932Encoder.encode("壗壘壙")].join(",") === "154,218,154,220,154,219"); // U+58D7
expect(() => {ms932Encoder.encode("\u58DA")}).to.throw(Error, "EncodingError U+58DA");
expect(() => {ms932Encoder.encode("\u58DB")}).to.throw(Error, "EncodingError U+58DB");
r = r && ([...ms932Encoder.encode("壜")].join(",") === "154,222"); // U+58DC
expect(() => {ms932Encoder.encode("\u58DD")}).to.throw(Error, "EncodingError U+58DD");
r = r && ([...ms932Encoder.encode("壞壟")].join(",") === "154,211,154,224"); // U+58DE
expect(() => {ms932Encoder.encode("\u58E0")}).to.throw(Error, "EncodingError U+58E0");
expect(() => {ms932Encoder.encode("\u58E1")}).to.throw(Error, "EncodingError U+58E1");
expect(() => {ms932Encoder.encode("\u58E2")}).to.throw(Error, "EncodingError U+58E2");
expect(() => {ms932Encoder.encode("\u58E3")}).to.throw(Error, "EncodingError U+58E3");
r = r && ([...ms932Encoder.encode("壤壥")].join(",") === "154,223,154,221"); // U+58E4
expect(() => {ms932Encoder.encode("\u58E6")}).to.throw(Error, "EncodingError U+58E6");
expect(() => {ms932Encoder.encode("\u58E7")}).to.throw(Error, "EncodingError U+58E7");
expect(() => {ms932Encoder.encode("\u58E8")}).to.throw(Error, "EncodingError U+58E8");
expect(() => {ms932Encoder.encode("\u58E9")}).to.throw(Error, "EncodingError U+58E9");
expect(() => {ms932Encoder.encode("\u58EA")}).to.throw(Error, "EncodingError U+58EA");
r = r && ([...ms932Encoder.encode("士壬")].join(",") === "142,109,144,112"); // U+58EB
expect(() => {ms932Encoder.encode("\u58ED")}).to.throw(Error, "EncodingError U+58ED");
r = r && ([...ms932Encoder.encode("壮壯声壱売")].join(",") === "145,115,154,225,144,186,136,235,148,132"); // U+58EE
expect(() => {ms932Encoder.encode("\u58F3")}).to.throw(Error, "EncodingError U+58F3");
expect(() => {ms932Encoder.encode("\u58F4")}).to.throw(Error, "EncodingError U+58F4");
expect(() => {ms932Encoder.encode("\u58F5")}).to.throw(Error, "EncodingError U+58F5");
expect(() => {ms932Encoder.encode("\u58F6")}).to.throw(Error, "EncodingError U+58F6");
r = r && ([...ms932Encoder.encode("壷")].join(",") === "146,217"); // U+58F7
expect(() => {ms932Encoder.encode("\u58F8")}).to.throw(Error, "EncodingError U+58F8");
r = r && ([...ms932Encoder.encode("壹壺壻壼壽")].join(",") === "154,227,154,226,154,228,154,229,154,230"); // U+58F9
expect(() => {ms932Encoder.encode("\u58FE")}).to.throw(Error, "EncodingError U+58FE");
expect(() => {ms932Encoder.encode("\u58FF")}).to.throw(Error, "EncodingError U+58FF");
expect(() => {ms932Encoder.encode("\u5900")}).to.throw(Error, "EncodingError U+5900");
expect(() => {ms932Encoder.encode("\u5901")}).to.throw(Error, "EncodingError U+5901");
r = r && ([...ms932Encoder.encode("夂")].join(",") === "154,231"); // U+5902
expect(() => {ms932Encoder.encode("\u5903")}).to.throw(Error, "EncodingError U+5903");
expect(() => {ms932Encoder.encode("\u5904")}).to.throw(Error, "EncodingError U+5904");
expect(() => {ms932Encoder.encode("\u5905")}).to.throw(Error, "EncodingError U+5905");
expect(() => {ms932Encoder.encode("\u5906")}).to.throw(Error, "EncodingError U+5906");
expect(() => {ms932Encoder.encode("\u5907")}).to.throw(Error, "EncodingError U+5907");
expect(() => {ms932Encoder.encode("\u5908")}).to.throw(Error, "EncodingError U+5908");
r = r && ([...ms932Encoder.encode("変夊夋")].join(",") === "149,207,154,232,250,159"); // U+5909
expect(() => {ms932Encoder.encode("\u590C")}).to.throw(Error, "EncodingError U+590C");
expect(() => {ms932Encoder.encode("\u590D")}).to.throw(Error, "EncodingError U+590D");
expect(() => {ms932Encoder.encode("\u590E")}).to.throw(Error, "EncodingError U+590E");
r = r && ([...ms932Encoder.encode("夏夐")].join(",") === "137,196,154,233"); // U+590F
expect(() => {ms932Encoder.encode("\u5911")}).to.throw(Error, "EncodingError U+5911");
expect(() => {ms932Encoder.encode("\u5912")}).to.throw(Error, "EncodingError U+5912");
expect(() => {ms932Encoder.encode("\u5913")}).to.throw(Error, "EncodingError U+5913");
expect(() => {ms932Encoder.encode("\u5914")}).to.throw(Error, "EncodingError U+5914");
r = r && ([...ms932Encoder.encode("夕外")].join(",") === "151,91,138,79"); // U+5915
expect(() => {ms932Encoder.encode("\u5917")}).to.throw(Error, "EncodingError U+5917");
r = r && ([...ms932Encoder.encode("夘夙多夛夜")].join(",") === "153,199,143,103,145,189,154,234,150,233"); // U+5918
expect(() => {ms932Encoder.encode("\u591D")}).to.throw(Error, "EncodingError U+591D");
expect(() => {ms932Encoder.encode("\u591E")}).to.throw(Error, "EncodingError U+591E");
expect(() => {ms932Encoder.encode("\u591F")}).to.throw(Error, "EncodingError U+591F");
expect(() => {ms932Encoder.encode("\u5920")}).to.throw(Error, "EncodingError U+5920");
expect(() => {ms932Encoder.encode("\u5921")}).to.throw(Error, "EncodingError U+5921");
r = r && ([...ms932Encoder.encode("夢")].join(",") === "150,178"); // U+5922
expect(() => {ms932Encoder.encode("\u5923")}).to.throw(Error, "EncodingError U+5923");
expect(() => {ms932Encoder.encode("\u5924")}).to.throw(Error, "EncodingError U+5924");
r = r && ([...ms932Encoder.encode("夥")].join(",") === "154,236"); // U+5925
expect(() => {ms932Encoder.encode("\u5926")}).to.throw(Error, "EncodingError U+5926");
r = r && ([...ms932Encoder.encode("大")].join(",") === "145,229"); // U+5927
expect(() => {ms932Encoder.encode("\u5928")}).to.throw(Error, "EncodingError U+5928");
r = r && ([...ms932Encoder.encode("天太夫夬夭央")].join(",") === "147,86,145,190,149,118,154,237,154,238,137,155"); // U+5929
expect(() => {ms932Encoder.encode("\u592F")}).to.throw(Error, "EncodingError U+592F");
expect(() => {ms932Encoder.encode("\u5930")}).to.throw(Error, "EncodingError U+5930");
r = r && ([...ms932Encoder.encode("失夲")].join(",") === "142,184,154,239"); // U+5931
expect(() => {ms932Encoder.encode("\u5933")}).to.throw(Error, "EncodingError U+5933");
expect(() => {ms932Encoder.encode("\u5934")}).to.throw(Error, "EncodingError U+5934");
expect(() => {ms932Encoder.encode("\u5935")}).to.throw(Error, "EncodingError U+5935");
expect(() => {ms932Encoder.encode("\u5936")}).to.throw(Error, "EncodingError U+5936");
r = r && ([...ms932Encoder.encode("夷夸")].join(",") === "136,206,154,240"); // U+5937
expect(() => {ms932Encoder.encode("\u5939")}).to.throw(Error, "EncodingError U+5939");
expect(() => {ms932Encoder.encode("\u593A")}).to.throw(Error, "EncodingError U+593A");
expect(() => {ms932Encoder.encode("\u593B")}).to.throw(Error, "EncodingError U+593B");
expect(() => {ms932Encoder.encode("\u593C")}).to.throw(Error, "EncodingError U+593C");
expect(() => {ms932Encoder.encode("\u593D")}).to.throw(Error, "EncodingError U+593D");
r = r && ([...ms932Encoder.encode("夾")].join(",") === "154,241"); // U+593E
expect(() => {ms932Encoder.encode("\u593F")}).to.throw(Error, "EncodingError U+593F");
expect(() => {ms932Encoder.encode("\u5940")}).to.throw(Error, "EncodingError U+5940");
expect(() => {ms932Encoder.encode("\u5941")}).to.throw(Error, "EncodingError U+5941");
expect(() => {ms932Encoder.encode("\u5942")}).to.throw(Error, "EncodingError U+5942");
expect(() => {ms932Encoder.encode("\u5943")}).to.throw(Error, "EncodingError U+5943");
r = r && ([...ms932Encoder.encode("奄")].join(",") === "137,130"); // U+5944
expect(() => {ms932Encoder.encode("\u5945")}).to.throw(Error, "EncodingError U+5945");
expect(() => {ms932Encoder.encode("\u5946")}).to.throw(Error, "EncodingError U+5946");
r = r && ([...ms932Encoder.encode("奇奈奉")].join(",") === "138,239,147,222,149,242"); // U+5947
expect(() => {ms932Encoder.encode("\u594A")}).to.throw(Error, "EncodingError U+594A");
expect(() => {ms932Encoder.encode("\u594B")}).to.throw(Error, "EncodingError U+594B");
expect(() => {ms932Encoder.encode("\u594C")}).to.throw(Error, "EncodingError U+594C");
expect(() => {ms932Encoder.encode("\u594D")}).to.throw(Error, "EncodingError U+594D");
r = r && ([...ms932Encoder.encode("奎奏奐契")].join(",") === "154,245,145,116,154,244,140,95"); // U+594E
expect(() => {ms932Encoder.encode("\u5952")}).to.throw(Error, "EncodingError U+5952");
r = r && ([...ms932Encoder.encode("奓奔奕")].join(",") === "250,160,150,122,154,243"); // U+5953
expect(() => {ms932Encoder.encode("\u5956")}).to.throw(Error, "EncodingError U+5956");
r = r && ([...ms932Encoder.encode("套奘")].join(",") === "147,133,154,247"); // U+5957
expect(() => {ms932Encoder.encode("\u5959")}).to.throw(Error, "EncodingError U+5959");
r = r && ([...ms932Encoder.encode("奚奛")].join(",") === "154,246,250,161"); // U+595A
expect(() => {ms932Encoder.encode("\u595C")}).to.throw(Error, "EncodingError U+595C");
r = r && ([...ms932Encoder.encode("奝")].join(",") === "250,162"); // U+595D
expect(() => {ms932Encoder.encode("\u595E")}).to.throw(Error, "EncodingError U+595E");
expect(() => {ms932Encoder.encode("\u595F")}).to.throw(Error, "EncodingError U+595F");
r = r && ([...ms932Encoder.encode("奠")].join(",") === "154,249"); // U+5960
expect(() => {ms932Encoder.encode("\u5961")}).to.throw(Error, "EncodingError U+5961");
r = r && ([...ms932Encoder.encode("奢奣")].join(",") === "154,248,250,163"); // U+5962
expect(() => {ms932Encoder.encode("\u5964")}).to.throw(Error, "EncodingError U+5964");
r = r && ([...ms932Encoder.encode("奥")].join(",") === "137,156"); // U+5965
expect(() => {ms932Encoder.encode("\u5966")}).to.throw(Error, "EncodingError U+5966");
r = r && ([...ms932Encoder.encode("奧奨奩奪")].join(",") === "154,250,143,167,154,252,146,68"); // U+5967
expect(() => {ms932Encoder.encode("\u596B")}).to.throw(Error, "EncodingError U+596B");
r = r && ([...ms932Encoder.encode("奬")].join(",") === "154,251"); // U+596C
expect(() => {ms932Encoder.encode("\u596D")}).to.throw(Error, "EncodingError U+596D");
r = r && ([...ms932Encoder.encode("奮")].join(",") === "149,177"); // U+596E
expect(() => {ms932Encoder.encode("\u596F")}).to.throw(Error, "EncodingError U+596F");
expect(() => {ms932Encoder.encode("\u5970")}).to.throw(Error, "EncodingError U+5970");
expect(() => {ms932Encoder.encode("\u5971")}).to.throw(Error, "EncodingError U+5971");
expect(() => {ms932Encoder.encode("\u5972")}).to.throw(Error, "EncodingError U+5972");
r = r && ([...ms932Encoder.encode("女奴")].join(",") === "143,151,147,122"); // U+5973
expect(() => {ms932Encoder.encode("\u5975")}).to.throw(Error, "EncodingError U+5975");
expect(() => {ms932Encoder.encode("\u5976")}).to.throw(Error, "EncodingError U+5976");
expect(() => {ms932Encoder.encode("\u5977")}).to.throw(Error, "EncodingError U+5977");
r = r && ([...ms932Encoder.encode("奸")].join(",") === "155,64"); // U+5978
expect(() => {ms932Encoder.encode("\u5979")}).to.throw(Error, "EncodingError U+5979");
expect(() => {ms932Encoder.encode("\u597A")}).to.throw(Error, "EncodingError U+597A");
expect(() => {ms932Encoder.encode("\u597B")}).to.throw(Error, "EncodingError U+597B");
expect(() => {ms932Encoder.encode("\u597C")}).to.throw(Error, "EncodingError U+597C");
r = r && ([...ms932Encoder.encode("好")].join(",") === "141,68"); // U+597D
expect(() => {ms932Encoder.encode("\u597E")}).to.throw(Error, "EncodingError U+597E");
expect(() => {ms932Encoder.encode("\u597F")}).to.throw(Error, "EncodingError U+597F");
expect(() => {ms932Encoder.encode("\u5980")}).to.throw(Error, "EncodingError U+5980");
r = r && ([...ms932Encoder.encode("妁如妃妄")].join(",") === "155,65,148,64,148,220,150,207"); // U+5981
expect(() => {ms932Encoder.encode("\u5985")}).to.throw(Error, "EncodingError U+5985");
expect(() => {ms932Encoder.encode("\u5986")}).to.throw(Error, "EncodingError U+5986");
expect(() => {ms932Encoder.encode("\u5987")}).to.throw(Error, "EncodingError U+5987");
expect(() => {ms932Encoder.encode("\u5988")}).to.throw(Error, "EncodingError U+5988");
expect(() => {ms932Encoder.encode("\u5989")}).to.throw(Error, "EncodingError U+5989");
r = r && ([...ms932Encoder.encode("妊")].join(",") === "148,68"); // U+598A
expect(() => {ms932Encoder.encode("\u598B")}).to.throw(Error, "EncodingError U+598B");
expect(() => {ms932Encoder.encode("\u598C")}).to.throw(Error, "EncodingError U+598C");
r = r && ([...ms932Encoder.encode("妍")].join(",") === "155,74"); // U+598D
expect(() => {ms932Encoder.encode("\u598E")}).to.throw(Error, "EncodingError U+598E");
expect(() => {ms932Encoder.encode("\u598F")}).to.throw(Error, "EncodingError U+598F");
expect(() => {ms932Encoder.encode("\u5990")}).to.throw(Error, "EncodingError U+5990");
expect(() => {ms932Encoder.encode("\u5991")}).to.throw(Error, "EncodingError U+5991");
expect(() => {ms932Encoder.encode("\u5992")}).to.throw(Error, "EncodingError U+5992");
r = r && ([...ms932Encoder.encode("妓")].join(",") === "139,87"); // U+5993
expect(() => {ms932Encoder.encode("\u5994")}).to.throw(Error, "EncodingError U+5994");
expect(() => {ms932Encoder.encode("\u5995")}).to.throw(Error, "EncodingError U+5995");
r = r && ([...ms932Encoder.encode("妖")].join(",") === "151,100"); // U+5996
expect(() => {ms932Encoder.encode("\u5997")}).to.throw(Error, "EncodingError U+5997");
expect(() => {ms932Encoder.encode("\u5998")}).to.throw(Error, "EncodingError U+5998");
r = r && ([...ms932Encoder.encode("妙")].join(",") === "150,173"); // U+5999
expect(() => {ms932Encoder.encode("\u599A")}).to.throw(Error, "EncodingError U+599A");
r = r && ([...ms932Encoder.encode("妛")].join(",") === "155,170"); // U+599B
expect(() => {ms932Encoder.encode("\u599C")}).to.throw(Error, "EncodingError U+599C");
r = r && ([...ms932Encoder.encode("妝")].join(",") === "155,66"); // U+599D
expect(() => {ms932Encoder.encode("\u599E")}).to.throw(Error, "EncodingError U+599E");
expect(() => {ms932Encoder.encode("\u599F")}).to.throw(Error, "EncodingError U+599F");
expect(() => {ms932Encoder.encode("\u59A0")}).to.throw(Error, "EncodingError U+59A0");
expect(() => {ms932Encoder.encode("\u59A1")}).to.throw(Error, "EncodingError U+59A1");
expect(() => {ms932Encoder.encode("\u59A2")}).to.throw(Error, "EncodingError U+59A2");
r = r && ([...ms932Encoder.encode("妣妤妥")].join(",") === "155,69,250,164,145,195"); // U+59A3
expect(() => {ms932Encoder.encode("\u59A6")}).to.throw(Error, "EncodingError U+59A6");
expect(() => {ms932Encoder.encode("\u59A7")}).to.throw(Error, "EncodingError U+59A7");
r = r && ([...ms932Encoder.encode("妨")].join(",") === "150,87"); // U+59A8
expect(() => {ms932Encoder.encode("\u59A9")}).to.throw(Error, "EncodingError U+59A9");
expect(() => {ms932Encoder.encode("\u59AA")}).to.throw(Error, "EncodingError U+59AA");
expect(() => {ms932Encoder.encode("\u59AB")}).to.throw(Error, "EncodingError U+59AB");
r = r && ([...ms932Encoder.encode("妬")].join(",") === "147,105"); // U+59AC
expect(() => {ms932Encoder.encode("\u59AD")}).to.throw(Error, "EncodingError U+59AD");
expect(() => {ms932Encoder.encode("\u59AE")}).to.throw(Error, "EncodingError U+59AE");
expect(() => {ms932Encoder.encode("\u59AF")}).to.throw(Error, "EncodingError U+59AF");
expect(() => {ms932Encoder.encode("\u59B0")}).to.throw(Error, "EncodingError U+59B0");
expect(() => {ms932Encoder.encode("\u59B1")}).to.throw(Error, "EncodingError U+59B1");
r = r && ([...ms932Encoder.encode("妲")].join(",") === "155,70"); // U+59B2
expect(() => {ms932Encoder.encode("\u59B3")}).to.throw(Error, "EncodingError U+59B3");
expect(() => {ms932Encoder.encode("\u59B4")}).to.throw(Error, "EncodingError U+59B4");
expect(() => {ms932Encoder.encode("\u59B5")}).to.throw(Error, "EncodingError U+59B5");
expect(() => {ms932Encoder.encode("\u59B6")}).to.throw(Error, "EncodingError U+59B6");
expect(() => {ms932Encoder.encode("\u59B7")}).to.throw(Error, "EncodingError U+59B7");
expect(() => {ms932Encoder.encode("\u59B8")}).to.throw(Error, "EncodingError U+59B8");
r = r && ([...ms932Encoder.encode("妹妺妻")].join(",") === "150,133,250,165,141,200"); // U+59B9
expect(() => {ms932Encoder.encode("\u59BC")}).to.throw(Error, "EncodingError U+59BC");
expect(() => {ms932Encoder.encode("\u59BD")}).to.throw(Error, "EncodingError U+59BD");
r = r && ([...ms932Encoder.encode("妾")].join(",") === "143,168"); // U+59BE
expect(() => {ms932Encoder.encode("\u59BF")}).to.throw(Error, "EncodingError U+59BF");
expect(() => {ms932Encoder.encode("\u59C0")}).to.throw(Error, "EncodingError U+59C0");
expect(() => {ms932Encoder.encode("\u59C1")}).to.throw(Error, "EncodingError U+59C1");
expect(() => {ms932Encoder.encode("\u59C2")}).to.throw(Error, "EncodingError U+59C2");
expect(() => {ms932Encoder.encode("\u59C3")}).to.throw(Error, "EncodingError U+59C3");
expect(() => {ms932Encoder.encode("\u59C4")}).to.throw(Error, "EncodingError U+59C4");
expect(() => {ms932Encoder.encode("\u59C5")}).to.throw(Error, "EncodingError U+59C5");
r = r && ([...ms932Encoder.encode("姆")].join(",") === "155,71"); // U+59C6
expect(() => {ms932Encoder.encode("\u59C7")}).to.throw(Error, "EncodingError U+59C7");
expect(() => {ms932Encoder.encode("\u59C8")}).to.throw(Error, "EncodingError U+59C8");
r = r && ([...ms932Encoder.encode("姉")].join(",") === "142,111"); // U+59C9
expect(() => {ms932Encoder.encode("\u59CA")}).to.throw(Error, "EncodingError U+59CA");
r = r && ([...ms932Encoder.encode("始")].join(",") === "142,110"); // U+59CB
expect(() => {ms932Encoder.encode("\u59CC")}).to.throw(Error, "EncodingError U+59CC");
expect(() => {ms932Encoder.encode("\u59CD")}).to.throw(Error, "EncodingError U+59CD");
expect(() => {ms932Encoder.encode("\u59CE")}).to.throw(Error, "EncodingError U+59CE");
expect(() => {ms932Encoder.encode("\u59CF")}).to.throw(Error, "EncodingError U+59CF");
r = r && ([...ms932Encoder.encode("姐姑")].join(",") === "136,183,140,198"); // U+59D0
expect(() => {ms932Encoder.encode("\u59D2")}).to.throw(Error, "EncodingError U+59D2");
r = r && ([...ms932Encoder.encode("姓委")].join(",") === "144,169,136,207"); // U+59D3
expect(() => {ms932Encoder.encode("\u59D5")}).to.throw(Error, "EncodingError U+59D5");
expect(() => {ms932Encoder.encode("\u59D6")}).to.throw(Error, "EncodingError U+59D6");
expect(() => {ms932Encoder.encode("\u59D7")}).to.throw(Error, "EncodingError U+59D7");
expect(() => {ms932Encoder.encode("\u59D8")}).to.throw(Error, "EncodingError U+59D8");
r = r && ([...ms932Encoder.encode("姙姚")].join(",") === "155,75,155,76"); // U+59D9
expect(() => {ms932Encoder.encode("\u59DB")}).to.throw(Error, "EncodingError U+59DB");
r = r && ([...ms932Encoder.encode("姜")].join(",") === "155,73"); // U+59DC
expect(() => {ms932Encoder.encode("\u59DD")}).to.throw(Error, "EncodingError U+59DD");
expect(() => {ms932Encoder.encode("\u59DE")}).to.throw(Error, "EncodingError U+59DE");
expect(() => {ms932Encoder.encode("\u59DF")}).to.throw(Error, "EncodingError U+59DF");
expect(() => {ms932Encoder.encode("\u59E0")}).to.throw(Error, "EncodingError U+59E0");
expect(() => {ms932Encoder.encode("\u59E1")}).to.throw(Error, "EncodingError U+59E1");
expect(() => {ms932Encoder.encode("\u59E2")}).to.throw(Error, "EncodingError U+59E2");
expect(() => {ms932Encoder.encode("\u59E3")}).to.throw(Error, "EncodingError U+59E3");
expect(() => {ms932Encoder.encode("\u59E4")}).to.throw(Error, "EncodingError U+59E4");
r = r && ([...ms932Encoder.encode("姥姦")].join(",") === "137,87,138,173"); // U+59E5
expect(() => {ms932Encoder.encode("\u59E7")}).to.throw(Error, "EncodingError U+59E7");
r = r && ([...ms932Encoder.encode("姨")].join(",") === "155,72"); // U+59E8
expect(() => {ms932Encoder.encode("\u59E9")}).to.throw(Error, "EncodingError U+59E9");
r = r && ([...ms932Encoder.encode("姪姫")].join(",") === "150,195,149,80"); // U+59EA
expect(() => {ms932Encoder.encode("\u59EC")}).to.throw(Error, "EncodingError U+59EC");
expect(() => {ms932Encoder.encode("\u59ED")}).to.throw(Error, "EncodingError U+59ED");
expect(() => {ms932Encoder.encode("\u59EE")}).to.throw(Error, "EncodingError U+59EE");
expect(() => {ms932Encoder.encode("\u59EF")}).to.throw(Error, "EncodingError U+59EF");
expect(() => {ms932Encoder.encode("\u59F0")}).to.throw(Error, "EncodingError U+59F0");
expect(() => {ms932Encoder.encode("\u59F1")}).to.throw(Error, "EncodingError U+59F1");
expect(() => {ms932Encoder.encode("\u59F2")}).to.throw(Error, "EncodingError U+59F2");
expect(() => {ms932Encoder.encode("\u59F3")}).to.throw(Error, "EncodingError U+59F3");
expect(() => {ms932Encoder.encode("\u59F4")}).to.throw(Error, "EncodingError U+59F4");
expect(() => {ms932Encoder.encode("\u59F5")}).to.throw(Error, "EncodingError U+59F5");
r = r && ([...ms932Encoder.encode("姶")].join(",") === "136,166"); // U+59F6
expect(() => {ms932Encoder.encode("\u59F7")}).to.throw(Error, "EncodingError U+59F7");
expect(() => {ms932Encoder.encode("\u59F8")}).to.throw(Error, "EncodingError U+59F8");
expect(() => {ms932Encoder.encode("\u59F9")}).to.throw(Error, "EncodingError U+59F9");
expect(() => {ms932Encoder.encode("\u59FA")}).to.throw(Error, "EncodingError U+59FA");
r = r && ([...ms932Encoder.encode("姻")].join(",") === "136,247"); // U+59FB
expect(() => {ms932Encoder.encode("\u59FC")}).to.throw(Error, "EncodingError U+59FC");
expect(() => {ms932Encoder.encode("\u59FD")}).to.throw(Error, "EncodingError U+59FD");
expect(() => {ms932Encoder.encode("\u59FE")}).to.throw(Error, "EncodingError U+59FE");
r = r && ([...ms932Encoder.encode("姿")].join(",") === "142,112"); // U+59FF
expect(() => {ms932Encoder.encode("\u5A00")}).to.throw(Error, "EncodingError U+5A00");
r = r && ([...ms932Encoder.encode("威")].join(",") === "136,208"); // U+5A01
expect(() => {ms932Encoder.encode("\u5A02")}).to.throw(Error, "EncodingError U+5A02");
r = r && ([...ms932Encoder.encode("娃")].join(",") === "136,161"); // U+5A03
expect(() => {ms932Encoder.encode("\u5A04")}).to.throw(Error, "EncodingError U+5A04");
expect(() => {ms932Encoder.encode("\u5A05")}).to.throw(Error, "EncodingError U+5A05");
expect(() => {ms932Encoder.encode("\u5A06")}).to.throw(Error, "EncodingError U+5A06");
expect(() => {ms932Encoder.encode("\u5A07")}).to.throw(Error, "EncodingError U+5A07");
expect(() => {ms932Encoder.encode("\u5A08")}).to.throw(Error, "EncodingError U+5A08");
r = r && ([...ms932Encoder.encode("娉")].join(",") === "155,81"); // U+5A09
expect(() => {ms932Encoder.encode("\u5A0A")}).to.throw(Error, "EncodingError U+5A0A");
expect(() => {ms932Encoder.encode("\u5A0B")}).to.throw(Error, "EncodingError U+5A0B");
expect(() => {ms932Encoder.encode("\u5A0C")}).to.throw(Error, "EncodingError U+5A0C");
expect(() => {ms932Encoder.encode("\u5A0D")}).to.throw(Error, "EncodingError U+5A0D");
expect(() => {ms932Encoder.encode("\u5A0E")}).to.throw(Error, "EncodingError U+5A0E");
expect(() => {ms932Encoder.encode("\u5A0F")}).to.throw(Error, "EncodingError U+5A0F");
expect(() => {ms932Encoder.encode("\u5A10")}).to.throw(Error, "EncodingError U+5A10");
r = r && ([...ms932Encoder.encode("娑")].join(",") === "155,79"); // U+5A11
expect(() => {ms932Encoder.encode("\u5A12")}).to.throw(Error, "EncodingError U+5A12");
expect(() => {ms932Encoder.encode("\u5A13")}).to.throw(Error, "EncodingError U+5A13");
expect(() => {ms932Encoder.encode("\u5A14")}).to.throw(Error, "EncodingError U+5A14");
expect(() => {ms932Encoder.encode("\u5A15")}).to.throw(Error, "EncodingError U+5A15");
expect(() => {ms932Encoder.encode("\u5A16")}).to.throw(Error, "EncodingError U+5A16");
expect(() => {ms932Encoder.encode("\u5A17")}).to.throw(Error, "EncodingError U+5A17");
r = r && ([...ms932Encoder.encode("娘")].join(",") === "150,186"); // U+5A18
expect(() => {ms932Encoder.encode("\u5A19")}).to.throw(Error, "EncodingError U+5A19");
r = r && ([...ms932Encoder.encode("娚")].join(",") === "155,82"); // U+5A1A
expect(() => {ms932Encoder.encode("\u5A1B")}).to.throw(Error, "EncodingError U+5A1B");
r = r && ([...ms932Encoder.encode("娜")].join(",") === "155,80"); // U+5A1C
expect(() => {ms932Encoder.encode("\u5A1D")}).to.throw(Error, "EncodingError U+5A1D");
expect(() => {ms932Encoder.encode("\u5A1E")}).to.throw(Error, "EncodingError U+5A1E");
r = r && ([...ms932Encoder.encode("娟娠")].join(",") === "155,78,144,80"); // U+5A1F
expect(() => {ms932Encoder.encode("\u5A21")}).to.throw(Error, "EncodingError U+5A21");
expect(() => {ms932Encoder.encode("\u5A22")}).to.throw(Error, "EncodingError U+5A22");
expect(() => {ms932Encoder.encode("\u5A23")}).to.throw(Error, "EncodingError U+5A23");
expect(() => {ms932Encoder.encode("\u5A24")}).to.throw(Error, "EncodingError U+5A24");
r = r && ([...ms932Encoder.encode("娥")].join(",") === "155,77"); // U+5A25
expect(() => {ms932Encoder.encode("\u5A26")}).to.throw(Error, "EncodingError U+5A26");
expect(() => {ms932Encoder.encode("\u5A27")}).to.throw(Error, "EncodingError U+5A27");
expect(() => {ms932Encoder.encode("\u5A28")}).to.throw(Error, "EncodingError U+5A28");
r = r && ([...ms932Encoder.encode("娩")].join(",") === "149,216"); // U+5A29
expect(() => {ms932Encoder.encode("\u5A2A")}).to.throw(Error, "EncodingError U+5A2A");
expect(() => {ms932Encoder.encode("\u5A2B")}).to.throw(Error, "EncodingError U+5A2B");
expect(() => {ms932Encoder.encode("\u5A2C")}).to.throw(Error, "EncodingError U+5A2C");
expect(() => {ms932Encoder.encode("\u5A2D")}).to.throw(Error, "EncodingError U+5A2D");
expect(() => {ms932Encoder.encode("\u5A2E")}).to.throw(Error, "EncodingError U+5A2E");
r = r && ([...ms932Encoder.encode("娯")].join(",") === "140,226"); // U+5A2F
expect(() => {ms932Encoder.encode("\u5A30")}).to.throw(Error, "EncodingError U+5A30");
expect(() => {ms932Encoder.encode("\u5A31")}).to.throw(Error, "EncodingError U+5A31");
expect(() => {ms932Encoder.encode("\u5A32")}).to.throw(Error, "EncodingError U+5A32");
expect(() => {ms932Encoder.encode("\u5A33")}).to.throw(Error, "EncodingError U+5A33");
expect(() => {ms932Encoder.encode("\u5A34")}).to.throw(Error, "EncodingError U+5A34");
r = r && ([...ms932Encoder.encode("娵娶")].join(",") === "155,86,155,87"); // U+5A35
expect(() => {ms932Encoder.encode("\u5A37")}).to.throw(Error, "EncodingError U+5A37");
expect(() => {ms932Encoder.encode("\u5A38")}).to.throw(Error, "EncodingError U+5A38");
expect(() => {ms932Encoder.encode("\u5A39")}).to.throw(Error, "EncodingError U+5A39");
expect(() => {ms932Encoder.encode("\u5A3A")}).to.throw(Error, "EncodingError U+5A3A");
expect(() => {ms932Encoder.encode("\u5A3B")}).to.throw(Error, "EncodingError U+5A3B");
r = r && ([...ms932Encoder.encode("娼")].join(",") === "143,169"); // U+5A3C
expect(() => {ms932Encoder.encode("\u5A3D")}).to.throw(Error, "EncodingError U+5A3D");
expect(() => {ms932Encoder.encode("\u5A3E")}).to.throw(Error, "EncodingError U+5A3E");
expect(() => {ms932Encoder.encode("\u5A3F")}).to.throw(Error, "EncodingError U+5A3F");
r = r && ([...ms932Encoder.encode("婀婁")].join(",") === "155,83,152,75"); // U+5A40
expect(() => {ms932Encoder.encode("\u5A42")}).to.throw(Error, "EncodingError U+5A42");
expect(() => {ms932Encoder.encode("\u5A43")}).to.throw(Error, "EncodingError U+5A43");
expect(() => {ms932Encoder.encode("\u5A44")}).to.throw(Error, "EncodingError U+5A44");
expect(() => {ms932Encoder.encode("\u5A45")}).to.throw(Error, "EncodingError U+5A45");
r = r && ([...ms932Encoder.encode("婆")].join(",") === "148,107"); // U+5A46
expect(() => {ms932Encoder.encode("\u5A47")}).to.throw(Error, "EncodingError U+5A47");
expect(() => {ms932Encoder.encode("\u5A48")}).to.throw(Error, "EncodingError U+5A48");
r = r && ([...ms932Encoder.encode("婉")].join(",") === "155,85"); // U+5A49
expect(() => {ms932Encoder.encode("\u5A4A")}).to.throw(Error, "EncodingError U+5A4A");
expect(() => {ms932Encoder.encode("\u5A4B")}).to.throw(Error, "EncodingError U+5A4B");
expect(() => {ms932Encoder.encode("\u5A4C")}).to.throw(Error, "EncodingError U+5A4C");
expect(() => {ms932Encoder.encode("\u5A4D")}).to.throw(Error, "EncodingError U+5A4D");
expect(() => {ms932Encoder.encode("\u5A4E")}).to.throw(Error, "EncodingError U+5A4E");
expect(() => {ms932Encoder.encode("\u5A4F")}).to.throw(Error, "EncodingError U+5A4F");
expect(() => {ms932Encoder.encode("\u5A50")}).to.throw(Error, "EncodingError U+5A50");
expect(() => {ms932Encoder.encode("\u5A51")}).to.throw(Error, "EncodingError U+5A51");
expect(() => {ms932Encoder.encode("\u5A52")}).to.throw(Error, "EncodingError U+5A52");
expect(() => {ms932Encoder.encode("\u5A53")}).to.throw(Error, "EncodingError U+5A53");
expect(() => {ms932Encoder.encode("\u5A54")}).to.throw(Error, "EncodingError U+5A54");
expect(() => {ms932Encoder.encode("\u5A55")}).to.throw(Error, "EncodingError U+5A55");
expect(() => {ms932Encoder.encode("\u5A56")}).to.throw(Error, "EncodingError U+5A56");
expect(() => {ms932Encoder.encode("\u5A57")}).to.throw(Error, "EncodingError U+5A57");
expect(() => {ms932Encoder.encode("\u5A58")}).to.throw(Error, "EncodingError U+5A58");
expect(() => {ms932Encoder.encode("\u5A59")}).to.throw(Error, "EncodingError U+5A59");
r = r && ([...ms932Encoder.encode("婚")].join(",") === "141,165"); // U+5A5A
expect(() => {ms932Encoder.encode("\u5A5B")}).to.throw(Error, "EncodingError U+5A5B");
expect(() => {ms932Encoder.encode("\u5A5C")}).to.throw(Error, "EncodingError U+5A5C");
expect(() => {ms932Encoder.encode("\u5A5D")}).to.throw(Error, "EncodingError U+5A5D");
expect(() => {ms932Encoder.encode("\u5A5E")}).to.throw(Error, "EncodingError U+5A5E");
expect(() => {ms932Encoder.encode("\u5A5F")}).to.throw(Error, "EncodingError U+5A5F");
expect(() => {ms932Encoder.encode("\u5A60")}).to.throw(Error, "EncodingError U+5A60");
expect(() => {ms932Encoder.encode("\u5A61")}).to.throw(Error, "EncodingError U+5A61");
r = r && ([...ms932Encoder.encode("婢")].join(",") === "155,88"); // U+5A62
expect(() => {ms932Encoder.encode("\u5A63")}).to.throw(Error, "EncodingError U+5A63");
expect(() => {ms932Encoder.encode("\u5A64")}).to.throw(Error, "EncodingError U+5A64");
expect(() => {ms932Encoder.encode("\u5A65")}).to.throw(Error, "EncodingError U+5A65");
r = r && ([...ms932Encoder.encode("婦")].join(",") === "149,119"); // U+5A66
expect(() => {ms932Encoder.encode("\u5A67")}).to.throw(Error, "EncodingError U+5A67");
expect(() => {ms932Encoder.encode("\u5A68")}).to.throw(Error, "EncodingError U+5A68");
expect(() => {ms932Encoder.encode("\u5A69")}).to.throw(Error, "EncodingError U+5A69");
r = r && ([...ms932Encoder.encode("婪")].join(",") === "155,89"); // U+5A6A
expect(() => {ms932Encoder.encode("\u5A6B")}).to.throw(Error, "EncodingError U+5A6B");
r = r && ([...ms932Encoder.encode("婬")].join(",") === "155,84"); // U+5A6C
expect(() => {ms932Encoder.encode("\u5A6D")}).to.throw(Error, "EncodingError U+5A6D");
expect(() => {ms932Encoder.encode("\u5A6E")}).to.throw(Error, "EncodingError U+5A6E");
expect(() => {ms932Encoder.encode("\u5A6F")}).to.throw(Error, "EncodingError U+5A6F");
expect(() => {ms932Encoder.encode("\u5A70")}).to.throw(Error, "EncodingError U+5A70");
expect(() => {ms932Encoder.encode("\u5A71")}).to.throw(Error, "EncodingError U+5A71");
expect(() => {ms932Encoder.encode("\u5A72")}).to.throw(Error, "EncodingError U+5A72");
expect(() => {ms932Encoder.encode("\u5A73")}).to.throw(Error, "EncodingError U+5A73");
expect(() => {ms932Encoder.encode("\u5A74")}).to.throw(Error, "EncodingError U+5A74");
expect(() => {ms932Encoder.encode("\u5A75")}).to.throw(Error, "EncodingError U+5A75");
expect(() => {ms932Encoder.encode("\u5A76")}).to.throw(Error, "EncodingError U+5A76");
expect(() => {ms932Encoder.encode("\u5A77")}).to.throw(Error, "EncodingError U+5A77");
expect(() => {ms932Encoder.encode("\u5A78")}).to.throw(Error, "EncodingError U+5A78");
expect(() => {ms932Encoder.encode("\u5A79")}).to.throw(Error, "EncodingError U+5A79");
expect(() => {ms932Encoder.encode("\u5A7A")}).to.throw(Error, "EncodingError U+5A7A");
expect(() => {ms932Encoder.encode("\u5A7B")}).to.throw(Error, "EncodingError U+5A7B");
expect(() => {ms932Encoder.encode("\u5A7C")}).to.throw(Error, "EncodingError U+5A7C");
expect(() => {ms932Encoder.encode("\u5A7D")}).to.throw(Error, "EncodingError U+5A7D");
expect(() => {ms932Encoder.encode("\u5A7E")}).to.throw(Error, "EncodingError U+5A7E");
r = r && ([...ms932Encoder.encode("婿")].join(",") === "150,185"); // U+5A7F
expect(() => {ms932Encoder.encode("\u5A80")}).to.throw(Error, "EncodingError U+5A80");
expect(() => {ms932Encoder.encode("\u5A81")}).to.throw(Error, "EncodingError U+5A81");
expect(() => {ms932Encoder.encode("\u5A82")}).to.throw(Error, "EncodingError U+5A82");
expect(() => {ms932Encoder.encode("\u5A83")}).to.throw(Error, "EncodingError U+5A83");
expect(() => {ms932Encoder.encode("\u5A84")}).to.throw(Error, "EncodingError U+5A84");
expect(() => {ms932Encoder.encode("\u5A85")}).to.throw(Error, "EncodingError U+5A85");
expect(() => {ms932Encoder.encode("\u5A86")}).to.throw(Error, "EncodingError U+5A86");
expect(() => {ms932Encoder.encode("\u5A87")}).to.throw(Error, "EncodingError U+5A87");
expect(() => {ms932Encoder.encode("\u5A88")}).to.throw(Error, "EncodingError U+5A88");
expect(() => {ms932Encoder.encode("\u5A89")}).to.throw(Error, "EncodingError U+5A89");
expect(() => {ms932Encoder.encode("\u5A8A")}).to.throw(Error, "EncodingError U+5A8A");
expect(() => {ms932Encoder.encode("\u5A8B")}).to.throw(Error, "EncodingError U+5A8B");
expect(() => {ms932Encoder.encode("\u5A8C")}).to.throw(Error, "EncodingError U+5A8C");
expect(() => {ms932Encoder.encode("\u5A8D")}).to.throw(Error, "EncodingError U+5A8D");
expect(() => {ms932Encoder.encode("\u5A8E")}).to.throw(Error, "EncodingError U+5A8E");
expect(() => {ms932Encoder.encode("\u5A8F")}).to.throw(Error, "EncodingError U+5A8F");
expect(() => {ms932Encoder.encode("\u5A90")}).to.throw(Error, "EncodingError U+5A90");
expect(() => {ms932Encoder.encode("\u5A91")}).to.throw(Error, "EncodingError U+5A91");
r = r && ([...ms932Encoder.encode("媒")].join(",") === "148,125"); // U+5A92
expect(() => {ms932Encoder.encode("\u5A93")}).to.throw(Error, "EncodingError U+5A93");
expect(() => {ms932Encoder.encode("\u5A94")}).to.throw(Error, "EncodingError U+5A94");
expect(() => {ms932Encoder.encode("\u5A95")}).to.throw(Error, "EncodingError U+5A95");
expect(() => {ms932Encoder.encode("\u5A96")}).to.throw(Error, "EncodingError U+5A96");
expect(() => {ms932Encoder.encode("\u5A97")}).to.throw(Error, "EncodingError U+5A97");
expect(() => {ms932Encoder.encode("\u5A98")}).to.throw(Error, "EncodingError U+5A98");
expect(() => {ms932Encoder.encode("\u5A99")}).to.throw(Error, "EncodingError U+5A99");
r = r && ([...ms932Encoder.encode("媚媛")].join(",") === "155,90,149,81"); // U+5A9A
expect(() => {ms932Encoder.encode("\u5A9C")}).to.throw(Error, "EncodingError U+5A9C");
expect(() => {ms932Encoder.encode("\u5A9D")}).to.throw(Error, "EncodingError U+5A9D");
expect(() => {ms932Encoder.encode("\u5A9E")}).to.throw(Error, "EncodingError U+5A9E");
expect(() => {ms932Encoder.encode("\u5A9F")}).to.throw(Error, "EncodingError U+5A9F");
expect(() => {ms932Encoder.encode("\u5AA0")}).to.throw(Error, "EncodingError U+5AA0");
expect(() => {ms932Encoder.encode("\u5AA1")}).to.throw(Error, "EncodingError U+5AA1");
expect(() => {ms932Encoder.encode("\u5AA2")}).to.throw(Error, "EncodingError U+5AA2");
expect(() => {ms932Encoder.encode("\u5AA3")}).to.throw(Error, "EncodingError U+5AA3");
expect(() => {ms932Encoder.encode("\u5AA4")}).to.throw(Error, "EncodingError U+5AA4");
expect(() => {ms932Encoder.encode("\u5AA5")}).to.throw(Error, "EncodingError U+5AA5");
expect(() => {ms932Encoder.encode("\u5AA6")}).to.throw(Error, "EncodingError U+5AA6");
expect(() => {ms932Encoder.encode("\u5AA7")}).to.throw(Error, "EncodingError U+5AA7");
expect(() => {ms932Encoder.encode("\u5AA8")}).to.throw(Error, "EncodingError U+5AA8");
expect(() => {ms932Encoder.encode("\u5AA9")}).to.throw(Error, "EncodingError U+5AA9");
expect(() => {ms932Encoder.encode("\u5AAA")}).to.throw(Error, "EncodingError U+5AAA");
expect(() => {ms932Encoder.encode("\u5AAB")}).to.throw(Error, "EncodingError U+5AAB");
expect(() => {ms932Encoder.encode("\u5AAC")}).to.throw(Error, "EncodingError U+5AAC");
expect(() => {ms932Encoder.encode("\u5AAD")}).to.throw(Error, "EncodingError U+5AAD");
expect(() => {ms932Encoder.encode("\u5AAE")}).to.throw(Error, "EncodingError U+5AAE");
expect(() => {ms932Encoder.encode("\u5AAF")}).to.throw(Error, "EncodingError U+5AAF");
expect(() => {ms932Encoder.encode("\u5AB0")}).to.throw(Error, "EncodingError U+5AB0");
expect(() => {ms932Encoder.encode("\u5AB1")}).to.throw(Error, "EncodingError U+5AB1");
expect(() => {ms932Encoder.encode("\u5AB2")}).to.throw(Error, "EncodingError U+5AB2");
expect(() => {ms932Encoder.encode("\u5AB3")}).to.throw(Error, "EncodingError U+5AB3");
expect(() => {ms932Encoder.encode("\u5AB4")}).to.throw(Error, "EncodingError U+5AB4");
expect(() => {ms932Encoder.encode("\u5AB5")}).to.throw(Error, "EncodingError U+5AB5");
expect(() => {ms932Encoder.encode("\u5AB6")}).to.throw(Error, "EncodingError U+5AB6");
expect(() => {ms932Encoder.encode("\u5AB7")}).to.throw(Error, "EncodingError U+5AB7");
expect(() => {ms932Encoder.encode("\u5AB8")}).to.throw(Error, "EncodingError U+5AB8");
expect(() => {ms932Encoder.encode("\u5AB9")}).to.throw(Error, "EncodingError U+5AB9");
expect(() => {ms932Encoder.encode("\u5ABA")}).to.throw(Error, "EncodingError U+5ABA");
expect(() => {ms932Encoder.encode("\u5ABB")}).to.throw(Error, "EncodingError U+5ABB");
r = r && ([...ms932Encoder.encode("媼媽媾")].join(",") === "155,91,155,95,155,92"); // U+5ABC
expect(() => {ms932Encoder.encode("\u5ABF")}).to.throw(Error, "EncodingError U+5ABF");
expect(() => {ms932Encoder.encode("\u5AC0")}).to.throw(Error, "EncodingError U+5AC0");
r = r && ([...ms932Encoder.encode("嫁嫂")].join(",") === "137,197,155,94"); // U+5AC1
expect(() => {ms932Encoder.encode("\u5AC3")}).to.throw(Error, "EncodingError U+5AC3");
expect(() => {ms932Encoder.encode("\u5AC4")}).to.throw(Error, "EncodingError U+5AC4");
expect(() => {ms932Encoder.encode("\u5AC5")}).to.throw(Error, "EncodingError U+5AC5");
expect(() => {ms932Encoder.encode("\u5AC6")}).to.throw(Error, "EncodingError U+5AC6");
expect(() => {ms932Encoder.encode("\u5AC7")}).to.throw(Error, "EncodingError U+5AC7");
expect(() => {ms932Encoder.encode("\u5AC8")}).to.throw(Error, "EncodingError U+5AC8");
r = r && ([...ms932Encoder.encode("嫉")].join(",") === "142,185"); // U+5AC9
expect(() => {ms932Encoder.encode("\u5ACA")}).to.throw(Error, "EncodingError U+5ACA");
r = r && ([...ms932Encoder.encode("嫋嫌")].join(",") === "155,93,140,153"); // U+5ACB
expect(() => {ms932Encoder.encode("\u5ACD")}).to.throw(Error, "EncodingError U+5ACD");
expect(() => {ms932Encoder.encode("\u5ACE")}).to.throw(Error, "EncodingError U+5ACE");
expect(() => {ms932Encoder.encode("\u5ACF")}).to.throw(Error, "EncodingError U+5ACF");
r = r && ([...ms932Encoder.encode("嫐")].join(",") === "155,107"); // U+5AD0
expect(() => {ms932Encoder.encode("\u5AD1")}).to.throw(Error, "EncodingError U+5AD1");
expect(() => {ms932Encoder.encode("\u5AD2")}).to.throw(Error, "EncodingError U+5AD2");
expect(() => {ms932Encoder.encode("\u5AD3")}).to.throw(Error, "EncodingError U+5AD3");
expect(() => {ms932Encoder.encode("\u5AD4")}).to.throw(Error, "EncodingError U+5AD4");
expect(() => {ms932Encoder.encode("\u5AD5")}).to.throw(Error, "EncodingError U+5AD5");
r = r && ([...ms932Encoder.encode("嫖嫗")].join(",") === "155,100,155,97"); // U+5AD6
expect(() => {ms932Encoder.encode("\u5AD8")}).to.throw(Error, "EncodingError U+5AD8");
expect(() => {ms932Encoder.encode("\u5AD9")}).to.throw(Error, "EncodingError U+5AD9");
expect(() => {ms932Encoder.encode("\u5ADA")}).to.throw(Error, "EncodingError U+5ADA");
expect(() => {ms932Encoder.encode("\u5ADB")}).to.throw(Error, "EncodingError U+5ADB");
expect(() => {ms932Encoder.encode("\u5ADC")}).to.throw(Error, "EncodingError U+5ADC");
expect(() => {ms932Encoder.encode("\u5ADD")}).to.throw(Error, "EncodingError U+5ADD");
expect(() => {ms932Encoder.encode("\u5ADE")}).to.throw(Error, "EncodingError U+5ADE");
expect(() => {ms932Encoder.encode("\u5ADF")}).to.throw(Error, "EncodingError U+5ADF");
expect(() => {ms932Encoder.encode("\u5AE0")}).to.throw(Error, "EncodingError U+5AE0");
r = r && ([...ms932Encoder.encode("嫡")].join(",") === "146,132"); // U+5AE1
expect(() => {ms932Encoder.encode("\u5AE2")}).to.throw(Error, "EncodingError U+5AE2");
r = r && ([...ms932Encoder.encode("嫣")].join(",") === "155,96"); // U+5AE3
expect(() => {ms932Encoder.encode("\u5AE4")}).to.throw(Error, "EncodingError U+5AE4");
expect(() => {ms932Encoder.encode("\u5AE5")}).to.throw(Error, "EncodingError U+5AE5");
r = r && ([...ms932Encoder.encode("嫦")].join(",") === "155,98"); // U+5AE6
expect(() => {ms932Encoder.encode("\u5AE7")}).to.throw(Error, "EncodingError U+5AE7");
expect(() => {ms932Encoder.encode("\u5AE8")}).to.throw(Error, "EncodingError U+5AE8");
r = r && ([...ms932Encoder.encode("嫩")].join(",") === "155,99"); // U+5AE9
expect(() => {ms932Encoder.encode("\u5AEA")}).to.throw(Error, "EncodingError U+5AEA");
expect(() => {ms932Encoder.encode("\u5AEB")}).to.throw(Error, "EncodingError U+5AEB");
expect(() => {ms932Encoder.encode("\u5AEC")}).to.throw(Error, "EncodingError U+5AEC");
expect(() => {ms932Encoder.encode("\u5AED")}).to.throw(Error, "EncodingError U+5AED");
expect(() => {ms932Encoder.encode("\u5AEE")}).to.throw(Error, "EncodingError U+5AEE");
expect(() => {ms932Encoder.encode("\u5AEF")}).to.throw(Error, "EncodingError U+5AEF");
expect(() => {ms932Encoder.encode("\u5AF0")}).to.throw(Error, "EncodingError U+5AF0");
expect(() => {ms932Encoder.encode("\u5AF1")}).to.throw(Error, "EncodingError U+5AF1");
expect(() => {ms932Encoder.encode("\u5AF2")}).to.throw(Error, "EncodingError U+5AF2");
expect(() => {ms932Encoder.encode("\u5AF3")}).to.throw(Error, "EncodingError U+5AF3");
expect(() => {ms932Encoder.encode("\u5AF4")}).to.throw(Error, "EncodingError U+5AF4");
expect(() => {ms932Encoder.encode("\u5AF5")}).to.throw(Error, "EncodingError U+5AF5");
expect(() => {ms932Encoder.encode("\u5AF6")}).to.throw(Error, "EncodingError U+5AF6");
expect(() => {ms932Encoder.encode("\u5AF7")}).to.throw(Error, "EncodingError U+5AF7");
expect(() => {ms932Encoder.encode("\u5AF8")}).to.throw(Error, "EncodingError U+5AF8");
expect(() => {ms932Encoder.encode("\u5AF9")}).to.throw(Error, "EncodingError U+5AF9");
r = r && ([...ms932Encoder.encode("嫺嫻")].join(",") === "155,101,155,102"); // U+5AFA
expect(() => {ms932Encoder.encode("\u5AFC")}).to.throw(Error, "EncodingError U+5AFC");
expect(() => {ms932Encoder.encode("\u5AFD")}).to.throw(Error, "EncodingError U+5AFD");
expect(() => {ms932Encoder.encode("\u5AFE")}).to.throw(Error, "EncodingError U+5AFE");
expect(() => {ms932Encoder.encode("\u5AFF")}).to.throw(Error, "EncodingError U+5AFF");
expect(() => {ms932Encoder.encode("\u5B00")}).to.throw(Error, "EncodingError U+5B00");
expect(() => {ms932Encoder.encode("\u5B01")}).to.throw(Error, "EncodingError U+5B01");
expect(() => {ms932Encoder.encode("\u5B02")}).to.throw(Error, "EncodingError U+5B02");
expect(() => {ms932Encoder.encode("\u5B03")}).to.throw(Error, "EncodingError U+5B03");
expect(() => {ms932Encoder.encode("\u5B04")}).to.throw(Error, "EncodingError U+5B04");
expect(() => {ms932Encoder.encode("\u5B05")}).to.throw(Error, "EncodingError U+5B05");
expect(() => {ms932Encoder.encode("\u5B06")}).to.throw(Error, "EncodingError U+5B06");
expect(() => {ms932Encoder.encode("\u5B07")}).to.throw(Error, "EncodingError U+5B07");
expect(() => {ms932Encoder.encode("\u5B08")}).to.throw(Error, "EncodingError U+5B08");
r = r && ([...ms932Encoder.encode("嬉")].join(",") === "138,240"); // U+5B09
expect(() => {ms932Encoder.encode("\u5B0A")}).to.throw(Error, "EncodingError U+5B0A");
r = r && ([...ms932Encoder.encode("嬋嬌")].join(",") === "155,104,155,103"); // U+5B0B
expect(() => {ms932Encoder.encode("\u5B0D")}).to.throw(Error, "EncodingError U+5B0D");
expect(() => {ms932Encoder.encode("\u5B0E")}).to.throw(Error, "EncodingError U+5B0E");
expect(() => {ms932Encoder.encode("\u5B0F")}).to.throw(Error, "EncodingError U+5B0F");
expect(() => {ms932Encoder.encode("\u5B10")}).to.throw(Error, "EncodingError U+5B10");
expect(() => {ms932Encoder.encode("\u5B11")}).to.throw(Error, "EncodingError U+5B11");
expect(() => {ms932Encoder.encode("\u5B12")}).to.throw(Error, "EncodingError U+5B12");
expect(() => {ms932Encoder.encode("\u5B13")}).to.throw(Error, "EncodingError U+5B13");
expect(() => {ms932Encoder.encode("\u5B14")}).to.throw(Error, "EncodingError U+5B14");
expect(() => {ms932Encoder.encode("\u5B15")}).to.throw(Error, "EncodingError U+5B15");
r = r && ([...ms932Encoder.encode("嬖")].join(",") === "155,105"); // U+5B16
expect(() => {ms932Encoder.encode("\u5B17")}).to.throw(Error, "EncodingError U+5B17");
expect(() => {ms932Encoder.encode("\u5B18")}).to.throw(Error, "EncodingError U+5B18");
expect(() => {ms932Encoder.encode("\u5B19")}).to.throw(Error, "EncodingError U+5B19");
expect(() => {ms932Encoder.encode("\u5B1A")}).to.throw(Error, "EncodingError U+5B1A");
expect(() => {ms932Encoder.encode("\u5B1B")}).to.throw(Error, "EncodingError U+5B1B");
expect(() => {ms932Encoder.encode("\u5B1C")}).to.throw(Error, "EncodingError U+5B1C");
expect(() => {ms932Encoder.encode("\u5B1D")}).to.throw(Error, "EncodingError U+5B1D");
expect(() => {ms932Encoder.encode("\u5B1E")}).to.throw(Error, "EncodingError U+5B1E");
expect(() => {ms932Encoder.encode("\u5B1F")}).to.throw(Error, "EncodingError U+5B1F");
expect(() => {ms932Encoder.encode("\u5B20")}).to.throw(Error, "EncodingError U+5B20");
expect(() => {ms932Encoder.encode("\u5B21")}).to.throw(Error, "EncodingError U+5B21");
r = r && ([...ms932Encoder.encode("嬢")].join(",") === "143,236"); // U+5B22
expect(() => {ms932Encoder.encode("\u5B23")}).to.throw(Error, "EncodingError U+5B23");
expect(() => {ms932Encoder.encode("\u5B24")}).to.throw(Error, "EncodingError U+5B24");
expect(() => {ms932Encoder.encode("\u5B25")}).to.throw(Error, "EncodingError U+5B25");
expect(() => {ms932Encoder.encode("\u5B26")}).to.throw(Error, "EncodingError U+5B26");
expect(() => {ms932Encoder.encode("\u5B27")}).to.throw(Error, "EncodingError U+5B27");
expect(() => {ms932Encoder.encode("\u5B28")}).to.throw(Error, "EncodingError U+5B28");
expect(() => {ms932Encoder.encode("\u5B29")}).to.throw(Error, "EncodingError U+5B29");
r = r && ([...ms932Encoder.encode("嬪")].join(",") === "155,108"); // U+5B2A
expect(() => {ms932Encoder.encode("\u5B2B")}).to.throw(Error, "EncodingError U+5B2B");
r = r && ([...ms932Encoder.encode("嬬")].join(",") === "146,218"); // U+5B2C
expect(() => {ms932Encoder.encode("\u5B2D")}).to.throw(Error, "EncodingError U+5B2D");
expect(() => {ms932Encoder.encode("\u5B2E")}).to.throw(Error, "EncodingError U+5B2E");
expect(() => {ms932Encoder.encode("\u5B2F")}).to.throw(Error, "EncodingError U+5B2F");
r = r && ([...ms932Encoder.encode("嬰")].join(",") === "137,100"); // U+5B30
expect(() => {ms932Encoder.encode("\u5B31")}).to.throw(Error, "EncodingError U+5B31");
r = r && ([...ms932Encoder.encode("嬲")].join(",") === "155,106"); // U+5B32
expect(() => {ms932Encoder.encode("\u5B33")}).to.throw(Error, "EncodingError U+5B33");
expect(() => {ms932Encoder.encode("\u5B34")}).to.throw(Error, "EncodingError U+5B34");
expect(() => {ms932Encoder.encode("\u5B35")}).to.throw(Error, "EncodingError U+5B35");
r = r && ([...ms932Encoder.encode("嬶")].join(",") === "155,109"); // U+5B36
expect(() => {ms932Encoder.encode("\u5B37")}).to.throw(Error, "EncodingError U+5B37");
expect(() => {ms932Encoder.encode("\u5B38")}).to.throw(Error, "EncodingError U+5B38");
expect(() => {ms932Encoder.encode("\u5B39")}).to.throw(Error, "EncodingError U+5B39");
expect(() => {ms932Encoder.encode("\u5B3A")}).to.throw(Error, "EncodingError U+5B3A");
expect(() => {ms932Encoder.encode("\u5B3B")}).to.throw(Error, "EncodingError U+5B3B");
expect(() => {ms932Encoder.encode("\u5B3C")}).to.throw(Error, "EncodingError U+5B3C");
expect(() => {ms932Encoder.encode("\u5B3D")}).to.throw(Error, "EncodingError U+5B3D");
r = r && ([...ms932Encoder.encode("嬾")].join(",") === "155,110"); // U+5B3E
expect(() => {ms932Encoder.encode("\u5B3F")}).to.throw(Error, "EncodingError U+5B3F");
r = r && ([...ms932Encoder.encode("孀")].join(",") === "155,113"); // U+5B40
expect(() => {ms932Encoder.encode("\u5B41")}).to.throw(Error, "EncodingError U+5B41");
expect(() => {ms932Encoder.encode("\u5B42")}).to.throw(Error, "EncodingError U+5B42");
r = r && ([...ms932Encoder.encode("孃")].join(",") === "155,111"); // U+5B43
expect(() => {ms932Encoder.encode("\u5B44")}).to.throw(Error, "EncodingError U+5B44");
r = r && ([...ms932Encoder.encode("孅")].join(",") === "155,112"); // U+5B45
expect(() => {ms932Encoder.encode("\u5B46")}).to.throw(Error, "EncodingError U+5B46");
expect(() => {ms932Encoder.encode("\u5B47")}).to.throw(Error, "EncodingError U+5B47");
expect(() => {ms932Encoder.encode("\u5B48")}).to.throw(Error, "EncodingError U+5B48");
expect(() => {ms932Encoder.encode("\u5B49")}).to.throw(Error, "EncodingError U+5B49");
expect(() => {ms932Encoder.encode("\u5B4A")}).to.throw(Error, "EncodingError U+5B4A");
expect(() => {ms932Encoder.encode("\u5B4B")}).to.throw(Error, "EncodingError U+5B4B");
expect(() => {ms932Encoder.encode("\u5B4C")}).to.throw(Error, "EncodingError U+5B4C");
expect(() => {ms932Encoder.encode("\u5B4D")}).to.throw(Error, "EncodingError U+5B4D");
expect(() => {ms932Encoder.encode("\u5B4E")}).to.throw(Error, "EncodingError U+5B4E");
expect(() => {ms932Encoder.encode("\u5B4F")}).to.throw(Error, "EncodingError U+5B4F");
r = r && ([...ms932Encoder.encode("子孑")].join(",") === "142,113,155,114"); // U+5B50
expect(() => {ms932Encoder.encode("\u5B52")}).to.throw(Error, "EncodingError U+5B52");
expect(() => {ms932Encoder.encode("\u5B53")}).to.throw(Error, "EncodingError U+5B53");
r = r && ([...ms932Encoder.encode("孔孕孖字存")].join(",") === "141,69,155,115,250,166,142,154,145,182"); // U+5B54
expect(() => {ms932Encoder.encode("\u5B59")}).to.throw(Error, "EncodingError U+5B59");
r = r && ([...ms932Encoder.encode("孚孛孜孝")].join(",") === "155,116,155,117,142,121,141,70"); // U+5B5A
expect(() => {ms932Encoder.encode("\u5B5E")}).to.throw(Error, "EncodingError U+5B5E");
r = r && ([...ms932Encoder.encode("孟")].join(",") === "150,208"); // U+5B5F
expect(() => {ms932Encoder.encode("\u5B60")}).to.throw(Error, "EncodingError U+5B60");
expect(() => {ms932Encoder.encode("\u5B61")}).to.throw(Error, "EncodingError U+5B61");
expect(() => {ms932Encoder.encode("\u5B62")}).to.throw(Error, "EncodingError U+5B62");
r = r && ([...ms932Encoder.encode("季孤孥学")].join(",") === "139,71,140,199,155,118,138,119"); // U+5B63
expect(() => {ms932Encoder.encode("\u5B67")}).to.throw(Error, "EncodingError U+5B67");
expect(() => {ms932Encoder.encode("\u5B68")}).to.throw(Error, "EncodingError U+5B68");
r = r && ([...ms932Encoder.encode("孩")].join(",") === "155,119"); // U+5B69
expect(() => {ms932Encoder.encode("\u5B6A")}).to.throw(Error, "EncodingError U+5B6A");
r = r && ([...ms932Encoder.encode("孫")].join(",") === "145,183"); // U+5B6B
expect(() => {ms932Encoder.encode("\u5B6C")}).to.throw(Error, "EncodingError U+5B6C");
expect(() => {ms932Encoder.encode("\u5B6D")}).to.throw(Error, "EncodingError U+5B6D");
expect(() => {ms932Encoder.encode("\u5B6E")}).to.throw(Error, "EncodingError U+5B6E");
expect(() => {ms932Encoder.encode("\u5B6F")}).to.throw(Error, "EncodingError U+5B6F");
r = r && ([...ms932Encoder.encode("孰孱")].join(",") === "155,120,155,161"); // U+5B70
expect(() => {ms932Encoder.encode("\u5B72")}).to.throw(Error, "EncodingError U+5B72");
r = r && ([...ms932Encoder.encode("孳")].join(",") === "155,121"); // U+5B73
expect(() => {ms932Encoder.encode("\u5B74")}).to.throw(Error, "EncodingError U+5B74");
r = r && ([...ms932Encoder.encode("孵")].join(",") === "155,122"); // U+5B75
expect(() => {ms932Encoder.encode("\u5B76")}).to.throw(Error, "EncodingError U+5B76");
expect(() => {ms932Encoder.encode("\u5B77")}).to.throw(Error, "EncodingError U+5B77");
r = r && ([...ms932Encoder.encode("學")].join(",") === "155,123"); // U+5B78
expect(() => {ms932Encoder.encode("\u5B79")}).to.throw(Error, "EncodingError U+5B79");
r = r && ([...ms932Encoder.encode("孺")].join(",") === "155,125"); // U+5B7A
expect(() => {ms932Encoder.encode("\u5B7B")}).to.throw(Error, "EncodingError U+5B7B");
expect(() => {ms932Encoder.encode("\u5B7C")}).to.throw(Error, "EncodingError U+5B7C");
expect(() => {ms932Encoder.encode("\u5B7D")}).to.throw(Error, "EncodingError U+5B7D");
expect(() => {ms932Encoder.encode("\u5B7E")}).to.throw(Error, "EncodingError U+5B7E");
expect(() => {ms932Encoder.encode("\u5B7F")}).to.throw(Error, "EncodingError U+5B7F");
r = r && ([...ms932Encoder.encode("宀")].join(",") === "155,126"); // U+5B80
expect(() => {ms932Encoder.encode("\u5B81")}).to.throw(Error, "EncodingError U+5B81");
expect(() => {ms932Encoder.encode("\u5B82")}).to.throw(Error, "EncodingError U+5B82");
r = r && ([...ms932Encoder.encode("它")].join(",") === "155,128"); // U+5B83
expect(() => {ms932Encoder.encode("\u5B84")}).to.throw(Error, "EncodingError U+5B84");
r = r && ([...ms932Encoder.encode("宅")].join(",") === "145,238"); // U+5B85
expect(() => {ms932Encoder.encode("\u5B86")}).to.throw(Error, "EncodingError U+5B86");
r = r && ([...ms932Encoder.encode("宇守安")].join(",") === "137,70,142,231,136,192"); // U+5B87
expect(() => {ms932Encoder.encode("\u5B8A")}).to.throw(Error, "EncodingError U+5B8A");
r = r && ([...ms932Encoder.encode("宋完宍")].join(",") === "145,118,138,174,142,179"); // U+5B8B
expect(() => {ms932Encoder.encode("\u5B8E")}).to.throw(Error, "EncodingError U+5B8E");
r = r && ([...ms932Encoder.encode("宏")].join(",") === "141,71"); // U+5B8F
expect(() => {ms932Encoder.encode("\u5B90")}).to.throw(Error, "EncodingError U+5B90");
expect(() => {ms932Encoder.encode("\u5B91")}).to.throw(Error, "EncodingError U+5B91");
expect(() => {ms932Encoder.encode("\u5B92")}).to.throw(Error, "EncodingError U+5B92");
expect(() => {ms932Encoder.encode("\u5B93")}).to.throw(Error, "EncodingError U+5B93");
expect(() => {ms932Encoder.encode("\u5B94")}).to.throw(Error, "EncodingError U+5B94");
r = r && ([...ms932Encoder.encode("宕")].join(",") === "147,134"); // U+5B95
expect(() => {ms932Encoder.encode("\u5B96")}).to.throw(Error, "EncodingError U+5B96");
r = r && ([...ms932Encoder.encode("宗官宙定宛宜宝")].join(",") === "143,64,138,175,146,136,146,232,136,182,139,88,149,243"); // U+5B97
expect(() => {ms932Encoder.encode("\u5B9E")}).to.throw(Error, "EncodingError U+5B9E");
r = r && ([...ms932Encoder.encode("実")].join(",") === "142,192"); // U+5B9F
expect(() => {ms932Encoder.encode("\u5BA0")}).to.throw(Error, "EncodingError U+5BA0");
expect(() => {ms932Encoder.encode("\u5BA1")}).to.throw(Error, "EncodingError U+5BA1");
r = r && ([...ms932Encoder.encode("客宣室宥宦")].join(",") === "139,113,144,233,142,186,151,71,155,129"); // U+5BA2
expect(() => {ms932Encoder.encode("\u5BA7")}).to.throw(Error, "EncodingError U+5BA7");
expect(() => {ms932Encoder.encode("\u5BA8")}).to.throw(Error, "EncodingError U+5BA8");
expect(() => {ms932Encoder.encode("\u5BA9")}).to.throw(Error, "EncodingError U+5BA9");
expect(() => {ms932Encoder.encode("\u5BAA")}).to.throw(Error, "EncodingError U+5BAA");
expect(() => {ms932Encoder.encode("\u5BAB")}).to.throw(Error, "EncodingError U+5BAB");
expect(() => {ms932Encoder.encode("\u5BAC")}).to.throw(Error, "EncodingError U+5BAC");
expect(() => {ms932Encoder.encode("\u5BAD")}).to.throw(Error, "EncodingError U+5BAD");
r = r && ([...ms932Encoder.encode("宮")].join(",") === "139,123"); // U+5BAE
expect(() => {ms932Encoder.encode("\u5BAF")}).to.throw(Error, "EncodingError U+5BAF");
r = r && ([...ms932Encoder.encode("宰")].join(",") === "141,201"); // U+5BB0
expect(() => {ms932Encoder.encode("\u5BB1")}).to.throw(Error, "EncodingError U+5BB1");
expect(() => {ms932Encoder.encode("\u5BB2")}).to.throw(Error, "EncodingError U+5BB2");
r = r && ([...ms932Encoder.encode("害宴宵家")].join(",") === "138,81,137,131,143,170,137,198"); // U+5BB3
expect(() => {ms932Encoder.encode("\u5BB7")}).to.throw(Error, "EncodingError U+5BB7");
r = r && ([...ms932Encoder.encode("宸容")].join(",") === "155,130,151,101"); // U+5BB8
expect(() => {ms932Encoder.encode("\u5BBA")}).to.throw(Error, "EncodingError U+5BBA");
expect(() => {ms932Encoder.encode("\u5BBB")}).to.throw(Error, "EncodingError U+5BBB");
expect(() => {ms932Encoder.encode("\u5BBC")}).to.throw(Error, "EncodingError U+5BBC");
expect(() => {ms932Encoder.encode("\u5BBD")}).to.throw(Error, "EncodingError U+5BBD");
expect(() => {ms932Encoder.encode("\u5BBE")}).to.throw(Error, "EncodingError U+5BBE");
r = r && ([...ms932Encoder.encode("宿寀")].join(",") === "143,104,250,167"); // U+5BBF
expect(() => {ms932Encoder.encode("\u5BC1")}).to.throw(Error, "EncodingError U+5BC1");
r = r && ([...ms932Encoder.encode("寂寃寄寅密寇")].join(",") === "142,226,155,131,138,241,147,208,150,167,155,132"); // U+5BC2
expect(() => {ms932Encoder.encode("\u5BC8")}).to.throw(Error, "EncodingError U+5BC8");
r = r && ([...ms932Encoder.encode("寉")].join(",") === "155,133"); // U+5BC9
expect(() => {ms932Encoder.encode("\u5BCA")}).to.throw(Error, "EncodingError U+5BCA");
expect(() => {ms932Encoder.encode("\u5BCB")}).to.throw(Error, "EncodingError U+5BCB");
r = r && ([...ms932Encoder.encode("富")].join(",") === "149,120"); // U+5BCC
expect(() => {ms932Encoder.encode("\u5BCD")}).to.throw(Error, "EncodingError U+5BCD");
expect(() => {ms932Encoder.encode("\u5BCE")}).to.throw(Error, "EncodingError U+5BCE");
expect(() => {ms932Encoder.encode("\u5BCF")}).to.throw(Error, "EncodingError U+5BCF");
r = r && ([...ms932Encoder.encode("寐")].join(",") === "155,135"); // U+5BD0
expect(() => {ms932Encoder.encode("\u5BD1")}).to.throw(Error, "EncodingError U+5BD1");
r = r && ([...ms932Encoder.encode("寒寓寔")].join(",") === "138,166,139,245,155,134"); // U+5BD2
expect(() => {ms932Encoder.encode("\u5BD5")}).to.throw(Error, "EncodingError U+5BD5");
expect(() => {ms932Encoder.encode("\u5BD6")}).to.throw(Error, "EncodingError U+5BD6");
expect(() => {ms932Encoder.encode("\u5BD7")}).to.throw(Error, "EncodingError U+5BD7");
r = r && ([...ms932Encoder.encode("寘")].join(",") === "250,169"); // U+5BD8
expect(() => {ms932Encoder.encode("\u5BD9")}).to.throw(Error, "EncodingError U+5BD9");
expect(() => {ms932Encoder.encode("\u5BDA")}).to.throw(Error, "EncodingError U+5BDA");
r = r && ([...ms932Encoder.encode("寛")].join(",") === "138,176"); // U+5BDB
expect(() => {ms932Encoder.encode("\u5BDC")}).to.throw(Error, "EncodingError U+5BDC");
r = r && ([...ms932Encoder.encode("寝寞察")].join(",") === "144,81,155,139,142,64"); // U+5BDD
expect(() => {ms932Encoder.encode("\u5BE0")}).to.throw(Error, "EncodingError U+5BE0");
r = r && ([...ms932Encoder.encode("寡寢")].join(",") === "137,199,155,138"); // U+5BE1
expect(() => {ms932Encoder.encode("\u5BE3")}).to.throw(Error, "EncodingError U+5BE3");
r = r && ([...ms932Encoder.encode("寤寥實寧寨審")].join(",") === "155,136,155,140,155,137,148,74,158,203,144,82"); // U+5BE4
expect(() => {ms932Encoder.encode("\u5BEA")}).to.throw(Error, "EncodingError U+5BEA");
r = r && ([...ms932Encoder.encode("寫寬")].join(",") === "155,141,250,170"); // U+5BEB
expect(() => {ms932Encoder.encode("\u5BED")}).to.throw(Error, "EncodingError U+5BED");
r = r && ([...ms932Encoder.encode("寮")].join(",") === "151,190"); // U+5BEE
expect(() => {ms932Encoder.encode("\u5BEF")}).to.throw(Error, "EncodingError U+5BEF");
r = r && ([...ms932Encoder.encode("寰")].join(",") === "155,142"); // U+5BF0
expect(() => {ms932Encoder.encode("\u5BF1")}).to.throw(Error, "EncodingError U+5BF1");
expect(() => {ms932Encoder.encode("\u5BF2")}).to.throw(Error, "EncodingError U+5BF2");
r = r && ([...ms932Encoder.encode("寳")].join(",") === "155,144"); // U+5BF3
expect(() => {ms932Encoder.encode("\u5BF4")}).to.throw(Error, "EncodingError U+5BF4");
r = r && ([...ms932Encoder.encode("寵寶")].join(",") === "146,158,155,143"); // U+5BF5
expect(() => {ms932Encoder.encode("\u5BF7")}).to.throw(Error, "EncodingError U+5BF7");
r = r && ([...ms932Encoder.encode("寸")].join(",") === "144,161"); // U+5BF8
expect(() => {ms932Encoder.encode("\u5BF9")}).to.throw(Error, "EncodingError U+5BF9");
r = r && ([...ms932Encoder.encode("寺")].join(",") === "142,155"); // U+5BFA
expect(() => {ms932Encoder.encode("\u5BFB")}).to.throw(Error, "EncodingError U+5BFB");
expect(() => {ms932Encoder.encode("\u5BFC")}).to.throw(Error, "EncodingError U+5BFC");
expect(() => {ms932Encoder.encode("\u5BFD")}).to.throw(Error, "EncodingError U+5BFD");
r = r && ([...ms932Encoder.encode("対寿")].join(",") === "145,206,142,245"); // U+5BFE

expect(r).to.equal(true);

  });

});
