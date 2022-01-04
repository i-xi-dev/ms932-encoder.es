import assert from "node:assert";
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 6", () => {

  it("encode(string) - U+5800-U+5BFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
r = r && ([...ms932Encoder.encode("堀")].join(",") === "150,120"); // U+5800
assert.throws(() => {ms932Encoder.encode("\u5801")}, {name:"Error",message:"EncodingError U+5801"});
r = r && ([...ms932Encoder.encode("堂")].join(",") === "147,176"); // U+5802
assert.throws(() => {ms932Encoder.encode("\u5803")}, {name:"Error",message:"EncodingError U+5803"});
assert.throws(() => {ms932Encoder.encode("\u5804")}, {name:"Error",message:"EncodingError U+5804"});
r = r && ([...ms932Encoder.encode("堅堆")].join(",") === "140,152,145,205"); // U+5805
assert.throws(() => {ms932Encoder.encode("\u5807")}, {name:"Error",message:"EncodingError U+5807"});
assert.throws(() => {ms932Encoder.encode("\u5808")}, {name:"Error",message:"EncodingError U+5808"});
assert.throws(() => {ms932Encoder.encode("\u5809")}, {name:"Error",message:"EncodingError U+5809"});
r = r && ([...ms932Encoder.encode("堊堋")].join(",") === "154,191,154,194"); // U+580A
assert.throws(() => {ms932Encoder.encode("\u580C")}, {name:"Error",message:"EncodingError U+580C"});
assert.throws(() => {ms932Encoder.encode("\u580D")}, {name:"Error",message:"EncodingError U+580D"});
assert.throws(() => {ms932Encoder.encode("\u580E")}, {name:"Error",message:"EncodingError U+580E"});
assert.throws(() => {ms932Encoder.encode("\u580F")}, {name:"Error",message:"EncodingError U+580F"});
assert.throws(() => {ms932Encoder.encode("\u5810")}, {name:"Error",message:"EncodingError U+5810"});
assert.throws(() => {ms932Encoder.encode("\u5811")}, {name:"Error",message:"EncodingError U+5811"});
assert.throws(() => {ms932Encoder.encode("\u5812")}, {name:"Error",message:"EncodingError U+5812"});
assert.throws(() => {ms932Encoder.encode("\u5813")}, {name:"Error",message:"EncodingError U+5813"});
assert.throws(() => {ms932Encoder.encode("\u5814")}, {name:"Error",message:"EncodingError U+5814"});
r = r && ([...ms932Encoder.encode("堕")].join(",") === "145,194"); // U+5815
assert.throws(() => {ms932Encoder.encode("\u5816")}, {name:"Error",message:"EncodingError U+5816"});
assert.throws(() => {ms932Encoder.encode("\u5817")}, {name:"Error",message:"EncodingError U+5817"});
assert.throws(() => {ms932Encoder.encode("\u5818")}, {name:"Error",message:"EncodingError U+5818"});
r = r && ([...ms932Encoder.encode("堙")].join(",") === "154,195"); // U+5819
assert.throws(() => {ms932Encoder.encode("\u581A")}, {name:"Error",message:"EncodingError U+581A"});
assert.throws(() => {ms932Encoder.encode("\u581B")}, {name:"Error",message:"EncodingError U+581B"});
assert.throws(() => {ms932Encoder.encode("\u581C")}, {name:"Error",message:"EncodingError U+581C"});
r = r && ([...ms932Encoder.encode("堝")].join(",") === "154,196"); // U+581D
assert.throws(() => {ms932Encoder.encode("\u581E")}, {name:"Error",message:"EncodingError U+581E"});
assert.throws(() => {ms932Encoder.encode("\u581F")}, {name:"Error",message:"EncodingError U+581F"});
assert.throws(() => {ms932Encoder.encode("\u5820")}, {name:"Error",message:"EncodingError U+5820"});
r = r && ([...ms932Encoder.encode("堡")].join(",") === "154,198"); // U+5821
assert.throws(() => {ms932Encoder.encode("\u5822")}, {name:"Error",message:"EncodingError U+5822"});
assert.throws(() => {ms932Encoder.encode("\u5823")}, {name:"Error",message:"EncodingError U+5823"});
r = r && ([...ms932Encoder.encode("堤")].join(",") === "146,231"); // U+5824
assert.throws(() => {ms932Encoder.encode("\u5825")}, {name:"Error",message:"EncodingError U+5825"});
assert.throws(() => {ms932Encoder.encode("\u5826")}, {name:"Error",message:"EncodingError U+5826"});
assert.throws(() => {ms932Encoder.encode("\u5827")}, {name:"Error",message:"EncodingError U+5827"});
assert.throws(() => {ms932Encoder.encode("\u5828")}, {name:"Error",message:"EncodingError U+5828"});
assert.throws(() => {ms932Encoder.encode("\u5829")}, {name:"Error",message:"EncodingError U+5829"});
r = r && ([...ms932Encoder.encode("堪")].join(",") === "138,172"); // U+582A
assert.throws(() => {ms932Encoder.encode("\u582B")}, {name:"Error",message:"EncodingError U+582B"});
assert.throws(() => {ms932Encoder.encode("\u582C")}, {name:"Error",message:"EncodingError U+582C"});
assert.throws(() => {ms932Encoder.encode("\u582D")}, {name:"Error",message:"EncodingError U+582D"});
assert.throws(() => {ms932Encoder.encode("\u582E")}, {name:"Error",message:"EncodingError U+582E"});
r = r && ([...ms932Encoder.encode("堯堰報")].join(",") === "234,159,137,129,149,241"); // U+582F
assert.throws(() => {ms932Encoder.encode("\u5832")}, {name:"Error",message:"EncodingError U+5832"});
assert.throws(() => {ms932Encoder.encode("\u5833")}, {name:"Error",message:"EncodingError U+5833"});
r = r && ([...ms932Encoder.encode("場堵")].join(",") === "143,234,147,103"); // U+5834
assert.throws(() => {ms932Encoder.encode("\u5836")}, {name:"Error",message:"EncodingError U+5836"});
assert.throws(() => {ms932Encoder.encode("\u5837")}, {name:"Error",message:"EncodingError U+5837"});
assert.throws(() => {ms932Encoder.encode("\u5838")}, {name:"Error",message:"EncodingError U+5838"});
assert.throws(() => {ms932Encoder.encode("\u5839")}, {name:"Error",message:"EncodingError U+5839"});
r = r && ([...ms932Encoder.encode("堺")].join(",") === "141,228"); // U+583A
assert.throws(() => {ms932Encoder.encode("\u583B")}, {name:"Error",message:"EncodingError U+583B"});
assert.throws(() => {ms932Encoder.encode("\u583C")}, {name:"Error",message:"EncodingError U+583C"});
r = r && ([...ms932Encoder.encode("堽")].join(",") === "154,204"); // U+583D
assert.throws(() => {ms932Encoder.encode("\u583E")}, {name:"Error",message:"EncodingError U+583E"});
assert.throws(() => {ms932Encoder.encode("\u583F")}, {name:"Error",message:"EncodingError U+583F"});
r = r && ([...ms932Encoder.encode("塀塁")].join(",") === "149,187,151,219"); // U+5840
assert.throws(() => {ms932Encoder.encode("\u5842")}, {name:"Error",message:"EncodingError U+5842"});
assert.throws(() => {ms932Encoder.encode("\u5843")}, {name:"Error",message:"EncodingError U+5843"});
assert.throws(() => {ms932Encoder.encode("\u5844")}, {name:"Error",message:"EncodingError U+5844"});
assert.throws(() => {ms932Encoder.encode("\u5845")}, {name:"Error",message:"EncodingError U+5845"});
assert.throws(() => {ms932Encoder.encode("\u5846")}, {name:"Error",message:"EncodingError U+5846"});
assert.throws(() => {ms932Encoder.encode("\u5847")}, {name:"Error",message:"EncodingError U+5847"});
assert.throws(() => {ms932Encoder.encode("\u5848")}, {name:"Error",message:"EncodingError U+5848"});
assert.throws(() => {ms932Encoder.encode("\u5849")}, {name:"Error",message:"EncodingError U+5849"});
r = r && ([...ms932Encoder.encode("塊塋")].join(",") === "137,242,154,200"); // U+584A
assert.throws(() => {ms932Encoder.encode("\u584C")}, {name:"Error",message:"EncodingError U+584C"});
assert.throws(() => {ms932Encoder.encode("\u584D")}, {name:"Error",message:"EncodingError U+584D"});
assert.throws(() => {ms932Encoder.encode("\u584E")}, {name:"Error",message:"EncodingError U+584E"});
assert.throws(() => {ms932Encoder.encode("\u584F")}, {name:"Error",message:"EncodingError U+584F"});
assert.throws(() => {ms932Encoder.encode("\u5850")}, {name:"Error",message:"EncodingError U+5850"});
r = r && ([...ms932Encoder.encode("塑塒")].join(",") === "145,89,154,203"); // U+5851
assert.throws(() => {ms932Encoder.encode("\u5853")}, {name:"Error",message:"EncodingError U+5853"});
r = r && ([...ms932Encoder.encode("塔")].join(",") === "147,131"); // U+5854
assert.throws(() => {ms932Encoder.encode("\u5855")}, {name:"Error",message:"EncodingError U+5855"});
assert.throws(() => {ms932Encoder.encode("\u5856")}, {name:"Error",message:"EncodingError U+5856"});
r = r && ([...ms932Encoder.encode("塗塘塙塚")].join(",") === "147,104,147,132,148,183,146,203"); // U+5857
assert.throws(() => {ms932Encoder.encode("\u585B")}, {name:"Error",message:"EncodingError U+585B"});
assert.throws(() => {ms932Encoder.encode("\u585C")}, {name:"Error",message:"EncodingError U+585C"});
assert.throws(() => {ms932Encoder.encode("\u585D")}, {name:"Error",message:"EncodingError U+585D"});
r = r && ([...ms932Encoder.encode("塞")].join(",") === "141,199"); // U+585E
assert.throws(() => {ms932Encoder.encode("\u585F")}, {name:"Error",message:"EncodingError U+585F"});
assert.throws(() => {ms932Encoder.encode("\u5860")}, {name:"Error",message:"EncodingError U+5860"});
assert.throws(() => {ms932Encoder.encode("\u5861")}, {name:"Error",message:"EncodingError U+5861"});
r = r && ([...ms932Encoder.encode("塢")].join(",") === "154,199"); // U+5862
assert.throws(() => {ms932Encoder.encode("\u5863")}, {name:"Error",message:"EncodingError U+5863"});
assert.throws(() => {ms932Encoder.encode("\u5864")}, {name:"Error",message:"EncodingError U+5864"});
assert.throws(() => {ms932Encoder.encode("\u5865")}, {name:"Error",message:"EncodingError U+5865"});
assert.throws(() => {ms932Encoder.encode("\u5866")}, {name:"Error",message:"EncodingError U+5866"});
assert.throws(() => {ms932Encoder.encode("\u5867")}, {name:"Error",message:"EncodingError U+5867"});
assert.throws(() => {ms932Encoder.encode("\u5868")}, {name:"Error",message:"EncodingError U+5868"});
r = r && ([...ms932Encoder.encode("塩")].join(",") === "137,150"); // U+5869
assert.throws(() => {ms932Encoder.encode("\u586A")}, {name:"Error",message:"EncodingError U+586A"});
r = r && ([...ms932Encoder.encode("填")].join(",") === "147,85"); // U+586B
assert.throws(() => {ms932Encoder.encode("\u586C")}, {name:"Error",message:"EncodingError U+586C"});
assert.throws(() => {ms932Encoder.encode("\u586D")}, {name:"Error",message:"EncodingError U+586D"});
assert.throws(() => {ms932Encoder.encode("\u586E")}, {name:"Error",message:"EncodingError U+586E"});
assert.throws(() => {ms932Encoder.encode("\u586F")}, {name:"Error",message:"EncodingError U+586F"});
r = r && ([...ms932Encoder.encode("塰")].join(",") === "154,201"); // U+5870
assert.throws(() => {ms932Encoder.encode("\u5871")}, {name:"Error",message:"EncodingError U+5871"});
r = r && ([...ms932Encoder.encode("塲")].join(",") === "154,197"); // U+5872
assert.throws(() => {ms932Encoder.encode("\u5873")}, {name:"Error",message:"EncodingError U+5873"});
assert.throws(() => {ms932Encoder.encode("\u5874")}, {name:"Error",message:"EncodingError U+5874"});
r = r && ([...ms932Encoder.encode("塵")].join(",") === "144,111"); // U+5875
assert.throws(() => {ms932Encoder.encode("\u5876")}, {name:"Error",message:"EncodingError U+5876"});
assert.throws(() => {ms932Encoder.encode("\u5877")}, {name:"Error",message:"EncodingError U+5877"});
assert.throws(() => {ms932Encoder.encode("\u5878")}, {name:"Error",message:"EncodingError U+5878"});
r = r && ([...ms932Encoder.encode("塹")].join(",") === "154,205"); // U+5879
assert.throws(() => {ms932Encoder.encode("\u587A")}, {name:"Error",message:"EncodingError U+587A"});
assert.throws(() => {ms932Encoder.encode("\u587B")}, {name:"Error",message:"EncodingError U+587B"});
assert.throws(() => {ms932Encoder.encode("\u587C")}, {name:"Error",message:"EncodingError U+587C"});
assert.throws(() => {ms932Encoder.encode("\u587D")}, {name:"Error",message:"EncodingError U+587D"});
r = r && ([...ms932Encoder.encode("塾")].join(",") === "143,109"); // U+587E
assert.throws(() => {ms932Encoder.encode("\u587F")}, {name:"Error",message:"EncodingError U+587F"});
assert.throws(() => {ms932Encoder.encode("\u5880")}, {name:"Error",message:"EncodingError U+5880"});
assert.throws(() => {ms932Encoder.encode("\u5881")}, {name:"Error",message:"EncodingError U+5881"});
assert.throws(() => {ms932Encoder.encode("\u5882")}, {name:"Error",message:"EncodingError U+5882"});
r = r && ([...ms932Encoder.encode("境")].join(",") === "139,171"); // U+5883
assert.throws(() => {ms932Encoder.encode("\u5884")}, {name:"Error",message:"EncodingError U+5884"});
r = r && ([...ms932Encoder.encode("墅")].join(",") === "154,206"); // U+5885
assert.throws(() => {ms932Encoder.encode("\u5886")}, {name:"Error",message:"EncodingError U+5886"});
assert.throws(() => {ms932Encoder.encode("\u5887")}, {name:"Error",message:"EncodingError U+5887"});
assert.throws(() => {ms932Encoder.encode("\u5888")}, {name:"Error",message:"EncodingError U+5888"});
assert.throws(() => {ms932Encoder.encode("\u5889")}, {name:"Error",message:"EncodingError U+5889"});
assert.throws(() => {ms932Encoder.encode("\u588A")}, {name:"Error",message:"EncodingError U+588A"});
assert.throws(() => {ms932Encoder.encode("\u588B")}, {name:"Error",message:"EncodingError U+588B"});
assert.throws(() => {ms932Encoder.encode("\u588C")}, {name:"Error",message:"EncodingError U+588C"});
assert.throws(() => {ms932Encoder.encode("\u588D")}, {name:"Error",message:"EncodingError U+588D"});
assert.throws(() => {ms932Encoder.encode("\u588E")}, {name:"Error",message:"EncodingError U+588E"});
assert.throws(() => {ms932Encoder.encode("\u588F")}, {name:"Error",message:"EncodingError U+588F"});
assert.throws(() => {ms932Encoder.encode("\u5890")}, {name:"Error",message:"EncodingError U+5890"});
assert.throws(() => {ms932Encoder.encode("\u5891")}, {name:"Error",message:"EncodingError U+5891"});
assert.throws(() => {ms932Encoder.encode("\u5892")}, {name:"Error",message:"EncodingError U+5892"});
r = r && ([...ms932Encoder.encode("墓")].join(",") === "149,230"); // U+5893
assert.throws(() => {ms932Encoder.encode("\u5894")}, {name:"Error",message:"EncodingError U+5894"});
assert.throws(() => {ms932Encoder.encode("\u5895")}, {name:"Error",message:"EncodingError U+5895"});
assert.throws(() => {ms932Encoder.encode("\u5896")}, {name:"Error",message:"EncodingError U+5896"});
r = r && ([...ms932Encoder.encode("増")].join(",") === "145,157"); // U+5897
assert.throws(() => {ms932Encoder.encode("\u5898")}, {name:"Error",message:"EncodingError U+5898"});
assert.throws(() => {ms932Encoder.encode("\u5899")}, {name:"Error",message:"EncodingError U+5899"});
assert.throws(() => {ms932Encoder.encode("\u589A")}, {name:"Error",message:"EncodingError U+589A"});
assert.throws(() => {ms932Encoder.encode("\u589B")}, {name:"Error",message:"EncodingError U+589B"});
r = r && ([...ms932Encoder.encode("墜")].join(",") === "146,196"); // U+589C
assert.throws(() => {ms932Encoder.encode("\u589D")}, {name:"Error",message:"EncodingError U+589D"});
r = r && ([...ms932Encoder.encode("增墟")].join(",") === "250,157,154,208"); // U+589E
assert.throws(() => {ms932Encoder.encode("\u58A0")}, {name:"Error",message:"EncodingError U+58A0"});
assert.throws(() => {ms932Encoder.encode("\u58A1")}, {name:"Error",message:"EncodingError U+58A1"});
assert.throws(() => {ms932Encoder.encode("\u58A2")}, {name:"Error",message:"EncodingError U+58A2"});
assert.throws(() => {ms932Encoder.encode("\u58A3")}, {name:"Error",message:"EncodingError U+58A3"});
assert.throws(() => {ms932Encoder.encode("\u58A4")}, {name:"Error",message:"EncodingError U+58A4"});
assert.throws(() => {ms932Encoder.encode("\u58A5")}, {name:"Error",message:"EncodingError U+58A5"});
assert.throws(() => {ms932Encoder.encode("\u58A6")}, {name:"Error",message:"EncodingError U+58A6"});
assert.throws(() => {ms932Encoder.encode("\u58A7")}, {name:"Error",message:"EncodingError U+58A7"});
r = r && ([...ms932Encoder.encode("墨")].join(",") === "150,110"); // U+58A8
assert.throws(() => {ms932Encoder.encode("\u58A9")}, {name:"Error",message:"EncodingError U+58A9"});
assert.throws(() => {ms932Encoder.encode("\u58AA")}, {name:"Error",message:"EncodingError U+58AA"});
r = r && ([...ms932Encoder.encode("墫")].join(",") === "154,209"); // U+58AB
assert.throws(() => {ms932Encoder.encode("\u58AC")}, {name:"Error",message:"EncodingError U+58AC"});
assert.throws(() => {ms932Encoder.encode("\u58AD")}, {name:"Error",message:"EncodingError U+58AD"});
r = r && ([...ms932Encoder.encode("墮")].join(",") === "154,214"); // U+58AE
assert.throws(() => {ms932Encoder.encode("\u58AF")}, {name:"Error",message:"EncodingError U+58AF"});
assert.throws(() => {ms932Encoder.encode("\u58B0")}, {name:"Error",message:"EncodingError U+58B0"});
assert.throws(() => {ms932Encoder.encode("\u58B1")}, {name:"Error",message:"EncodingError U+58B1"});
r = r && ([...ms932Encoder.encode("墲墳")].join(",") === "250,158,149,173"); // U+58B2
assert.throws(() => {ms932Encoder.encode("\u58B4")}, {name:"Error",message:"EncodingError U+58B4"});
assert.throws(() => {ms932Encoder.encode("\u58B5")}, {name:"Error",message:"EncodingError U+58B5"});
assert.throws(() => {ms932Encoder.encode("\u58B6")}, {name:"Error",message:"EncodingError U+58B6"});
assert.throws(() => {ms932Encoder.encode("\u58B7")}, {name:"Error",message:"EncodingError U+58B7"});
r = r && ([...ms932Encoder.encode("墸墹墺墻")].join(",") === "154,213,154,207,154,210,154,212"); // U+58B8
assert.throws(() => {ms932Encoder.encode("\u58BC")}, {name:"Error",message:"EncodingError U+58BC"});
assert.throws(() => {ms932Encoder.encode("\u58BD")}, {name:"Error",message:"EncodingError U+58BD"});
r = r && ([...ms932Encoder.encode("墾")].join(",") === "141,164"); // U+58BE
assert.throws(() => {ms932Encoder.encode("\u58BF")}, {name:"Error",message:"EncodingError U+58BF"});
assert.throws(() => {ms932Encoder.encode("\u58C0")}, {name:"Error",message:"EncodingError U+58C0"});
r = r && ([...ms932Encoder.encode("壁")].join(",") === "149,199"); // U+58C1
assert.throws(() => {ms932Encoder.encode("\u58C2")}, {name:"Error",message:"EncodingError U+58C2"});
assert.throws(() => {ms932Encoder.encode("\u58C3")}, {name:"Error",message:"EncodingError U+58C3"});
assert.throws(() => {ms932Encoder.encode("\u58C4")}, {name:"Error",message:"EncodingError U+58C4"});
r = r && ([...ms932Encoder.encode("壅")].join(",") === "154,215"); // U+58C5
assert.throws(() => {ms932Encoder.encode("\u58C6")}, {name:"Error",message:"EncodingError U+58C6"});
r = r && ([...ms932Encoder.encode("壇")].join(",") === "146,100"); // U+58C7
assert.throws(() => {ms932Encoder.encode("\u58C8")}, {name:"Error",message:"EncodingError U+58C8"});
assert.throws(() => {ms932Encoder.encode("\u58C9")}, {name:"Error",message:"EncodingError U+58C9"});
r = r && ([...ms932Encoder.encode("壊")].join(",") === "137,243"); // U+58CA
assert.throws(() => {ms932Encoder.encode("\u58CB")}, {name:"Error",message:"EncodingError U+58CB"});
r = r && ([...ms932Encoder.encode("壌")].join(",") === "143,235"); // U+58CC
assert.throws(() => {ms932Encoder.encode("\u58CD")}, {name:"Error",message:"EncodingError U+58CD"});
assert.throws(() => {ms932Encoder.encode("\u58CE")}, {name:"Error",message:"EncodingError U+58CE"});
assert.throws(() => {ms932Encoder.encode("\u58CF")}, {name:"Error",message:"EncodingError U+58CF"});
assert.throws(() => {ms932Encoder.encode("\u58D0")}, {name:"Error",message:"EncodingError U+58D0"});
r = r && ([...ms932Encoder.encode("壑")].join(",") === "154,217"); // U+58D1
assert.throws(() => {ms932Encoder.encode("\u58D2")}, {name:"Error",message:"EncodingError U+58D2"});
r = r && ([...ms932Encoder.encode("壓")].join(",") === "154,216"); // U+58D3
assert.throws(() => {ms932Encoder.encode("\u58D4")}, {name:"Error",message:"EncodingError U+58D4"});
r = r && ([...ms932Encoder.encode("壕")].join(",") === "141,136"); // U+58D5
assert.throws(() => {ms932Encoder.encode("\u58D6")}, {name:"Error",message:"EncodingError U+58D6"});
r = r && ([...ms932Encoder.encode("壗壘壙")].join(",") === "154,218,154,220,154,219"); // U+58D7
assert.throws(() => {ms932Encoder.encode("\u58DA")}, {name:"Error",message:"EncodingError U+58DA"});
assert.throws(() => {ms932Encoder.encode("\u58DB")}, {name:"Error",message:"EncodingError U+58DB"});
r = r && ([...ms932Encoder.encode("壜")].join(",") === "154,222"); // U+58DC
assert.throws(() => {ms932Encoder.encode("\u58DD")}, {name:"Error",message:"EncodingError U+58DD"});
r = r && ([...ms932Encoder.encode("壞壟")].join(",") === "154,211,154,224"); // U+58DE
assert.throws(() => {ms932Encoder.encode("\u58E0")}, {name:"Error",message:"EncodingError U+58E0"});
assert.throws(() => {ms932Encoder.encode("\u58E1")}, {name:"Error",message:"EncodingError U+58E1"});
assert.throws(() => {ms932Encoder.encode("\u58E2")}, {name:"Error",message:"EncodingError U+58E2"});
assert.throws(() => {ms932Encoder.encode("\u58E3")}, {name:"Error",message:"EncodingError U+58E3"});
r = r && ([...ms932Encoder.encode("壤壥")].join(",") === "154,223,154,221"); // U+58E4
assert.throws(() => {ms932Encoder.encode("\u58E6")}, {name:"Error",message:"EncodingError U+58E6"});
assert.throws(() => {ms932Encoder.encode("\u58E7")}, {name:"Error",message:"EncodingError U+58E7"});
assert.throws(() => {ms932Encoder.encode("\u58E8")}, {name:"Error",message:"EncodingError U+58E8"});
assert.throws(() => {ms932Encoder.encode("\u58E9")}, {name:"Error",message:"EncodingError U+58E9"});
assert.throws(() => {ms932Encoder.encode("\u58EA")}, {name:"Error",message:"EncodingError U+58EA"});
r = r && ([...ms932Encoder.encode("士壬")].join(",") === "142,109,144,112"); // U+58EB
assert.throws(() => {ms932Encoder.encode("\u58ED")}, {name:"Error",message:"EncodingError U+58ED"});
r = r && ([...ms932Encoder.encode("壮壯声壱売")].join(",") === "145,115,154,225,144,186,136,235,148,132"); // U+58EE
assert.throws(() => {ms932Encoder.encode("\u58F3")}, {name:"Error",message:"EncodingError U+58F3"});
assert.throws(() => {ms932Encoder.encode("\u58F4")}, {name:"Error",message:"EncodingError U+58F4"});
assert.throws(() => {ms932Encoder.encode("\u58F5")}, {name:"Error",message:"EncodingError U+58F5"});
assert.throws(() => {ms932Encoder.encode("\u58F6")}, {name:"Error",message:"EncodingError U+58F6"});
r = r && ([...ms932Encoder.encode("壷")].join(",") === "146,217"); // U+58F7
assert.throws(() => {ms932Encoder.encode("\u58F8")}, {name:"Error",message:"EncodingError U+58F8"});
r = r && ([...ms932Encoder.encode("壹壺壻壼壽")].join(",") === "154,227,154,226,154,228,154,229,154,230"); // U+58F9
assert.throws(() => {ms932Encoder.encode("\u58FE")}, {name:"Error",message:"EncodingError U+58FE"});
assert.throws(() => {ms932Encoder.encode("\u58FF")}, {name:"Error",message:"EncodingError U+58FF"});
assert.throws(() => {ms932Encoder.encode("\u5900")}, {name:"Error",message:"EncodingError U+5900"});
assert.throws(() => {ms932Encoder.encode("\u5901")}, {name:"Error",message:"EncodingError U+5901"});
r = r && ([...ms932Encoder.encode("夂")].join(",") === "154,231"); // U+5902
assert.throws(() => {ms932Encoder.encode("\u5903")}, {name:"Error",message:"EncodingError U+5903"});
assert.throws(() => {ms932Encoder.encode("\u5904")}, {name:"Error",message:"EncodingError U+5904"});
assert.throws(() => {ms932Encoder.encode("\u5905")}, {name:"Error",message:"EncodingError U+5905"});
assert.throws(() => {ms932Encoder.encode("\u5906")}, {name:"Error",message:"EncodingError U+5906"});
assert.throws(() => {ms932Encoder.encode("\u5907")}, {name:"Error",message:"EncodingError U+5907"});
assert.throws(() => {ms932Encoder.encode("\u5908")}, {name:"Error",message:"EncodingError U+5908"});
r = r && ([...ms932Encoder.encode("変夊夋")].join(",") === "149,207,154,232,250,159"); // U+5909
assert.throws(() => {ms932Encoder.encode("\u590C")}, {name:"Error",message:"EncodingError U+590C"});
assert.throws(() => {ms932Encoder.encode("\u590D")}, {name:"Error",message:"EncodingError U+590D"});
assert.throws(() => {ms932Encoder.encode("\u590E")}, {name:"Error",message:"EncodingError U+590E"});
r = r && ([...ms932Encoder.encode("夏夐")].join(",") === "137,196,154,233"); // U+590F
assert.throws(() => {ms932Encoder.encode("\u5911")}, {name:"Error",message:"EncodingError U+5911"});
assert.throws(() => {ms932Encoder.encode("\u5912")}, {name:"Error",message:"EncodingError U+5912"});
assert.throws(() => {ms932Encoder.encode("\u5913")}, {name:"Error",message:"EncodingError U+5913"});
assert.throws(() => {ms932Encoder.encode("\u5914")}, {name:"Error",message:"EncodingError U+5914"});
r = r && ([...ms932Encoder.encode("夕外")].join(",") === "151,91,138,79"); // U+5915
assert.throws(() => {ms932Encoder.encode("\u5917")}, {name:"Error",message:"EncodingError U+5917"});
r = r && ([...ms932Encoder.encode("夘夙多夛夜")].join(",") === "153,199,143,103,145,189,154,234,150,233"); // U+5918
assert.throws(() => {ms932Encoder.encode("\u591D")}, {name:"Error",message:"EncodingError U+591D"});
assert.throws(() => {ms932Encoder.encode("\u591E")}, {name:"Error",message:"EncodingError U+591E"});
assert.throws(() => {ms932Encoder.encode("\u591F")}, {name:"Error",message:"EncodingError U+591F"});
assert.throws(() => {ms932Encoder.encode("\u5920")}, {name:"Error",message:"EncodingError U+5920"});
assert.throws(() => {ms932Encoder.encode("\u5921")}, {name:"Error",message:"EncodingError U+5921"});
r = r && ([...ms932Encoder.encode("夢")].join(",") === "150,178"); // U+5922
assert.throws(() => {ms932Encoder.encode("\u5923")}, {name:"Error",message:"EncodingError U+5923"});
assert.throws(() => {ms932Encoder.encode("\u5924")}, {name:"Error",message:"EncodingError U+5924"});
r = r && ([...ms932Encoder.encode("夥")].join(",") === "154,236"); // U+5925
assert.throws(() => {ms932Encoder.encode("\u5926")}, {name:"Error",message:"EncodingError U+5926"});
r = r && ([...ms932Encoder.encode("大")].join(",") === "145,229"); // U+5927
assert.throws(() => {ms932Encoder.encode("\u5928")}, {name:"Error",message:"EncodingError U+5928"});
r = r && ([...ms932Encoder.encode("天太夫夬夭央")].join(",") === "147,86,145,190,149,118,154,237,154,238,137,155"); // U+5929
assert.throws(() => {ms932Encoder.encode("\u592F")}, {name:"Error",message:"EncodingError U+592F"});
assert.throws(() => {ms932Encoder.encode("\u5930")}, {name:"Error",message:"EncodingError U+5930"});
r = r && ([...ms932Encoder.encode("失夲")].join(",") === "142,184,154,239"); // U+5931
assert.throws(() => {ms932Encoder.encode("\u5933")}, {name:"Error",message:"EncodingError U+5933"});
assert.throws(() => {ms932Encoder.encode("\u5934")}, {name:"Error",message:"EncodingError U+5934"});
assert.throws(() => {ms932Encoder.encode("\u5935")}, {name:"Error",message:"EncodingError U+5935"});
assert.throws(() => {ms932Encoder.encode("\u5936")}, {name:"Error",message:"EncodingError U+5936"});
r = r && ([...ms932Encoder.encode("夷夸")].join(",") === "136,206,154,240"); // U+5937
assert.throws(() => {ms932Encoder.encode("\u5939")}, {name:"Error",message:"EncodingError U+5939"});
assert.throws(() => {ms932Encoder.encode("\u593A")}, {name:"Error",message:"EncodingError U+593A"});
assert.throws(() => {ms932Encoder.encode("\u593B")}, {name:"Error",message:"EncodingError U+593B"});
assert.throws(() => {ms932Encoder.encode("\u593C")}, {name:"Error",message:"EncodingError U+593C"});
assert.throws(() => {ms932Encoder.encode("\u593D")}, {name:"Error",message:"EncodingError U+593D"});
r = r && ([...ms932Encoder.encode("夾")].join(",") === "154,241"); // U+593E
assert.throws(() => {ms932Encoder.encode("\u593F")}, {name:"Error",message:"EncodingError U+593F"});
assert.throws(() => {ms932Encoder.encode("\u5940")}, {name:"Error",message:"EncodingError U+5940"});
assert.throws(() => {ms932Encoder.encode("\u5941")}, {name:"Error",message:"EncodingError U+5941"});
assert.throws(() => {ms932Encoder.encode("\u5942")}, {name:"Error",message:"EncodingError U+5942"});
assert.throws(() => {ms932Encoder.encode("\u5943")}, {name:"Error",message:"EncodingError U+5943"});
r = r && ([...ms932Encoder.encode("奄")].join(",") === "137,130"); // U+5944
assert.throws(() => {ms932Encoder.encode("\u5945")}, {name:"Error",message:"EncodingError U+5945"});
assert.throws(() => {ms932Encoder.encode("\u5946")}, {name:"Error",message:"EncodingError U+5946"});
r = r && ([...ms932Encoder.encode("奇奈奉")].join(",") === "138,239,147,222,149,242"); // U+5947
assert.throws(() => {ms932Encoder.encode("\u594A")}, {name:"Error",message:"EncodingError U+594A"});
assert.throws(() => {ms932Encoder.encode("\u594B")}, {name:"Error",message:"EncodingError U+594B"});
assert.throws(() => {ms932Encoder.encode("\u594C")}, {name:"Error",message:"EncodingError U+594C"});
assert.throws(() => {ms932Encoder.encode("\u594D")}, {name:"Error",message:"EncodingError U+594D"});
r = r && ([...ms932Encoder.encode("奎奏奐契")].join(",") === "154,245,145,116,154,244,140,95"); // U+594E
assert.throws(() => {ms932Encoder.encode("\u5952")}, {name:"Error",message:"EncodingError U+5952"});
r = r && ([...ms932Encoder.encode("奓奔奕")].join(",") === "250,160,150,122,154,243"); // U+5953
assert.throws(() => {ms932Encoder.encode("\u5956")}, {name:"Error",message:"EncodingError U+5956"});
r = r && ([...ms932Encoder.encode("套奘")].join(",") === "147,133,154,247"); // U+5957
assert.throws(() => {ms932Encoder.encode("\u5959")}, {name:"Error",message:"EncodingError U+5959"});
r = r && ([...ms932Encoder.encode("奚奛")].join(",") === "154,246,250,161"); // U+595A
assert.throws(() => {ms932Encoder.encode("\u595C")}, {name:"Error",message:"EncodingError U+595C"});
r = r && ([...ms932Encoder.encode("奝")].join(",") === "250,162"); // U+595D
assert.throws(() => {ms932Encoder.encode("\u595E")}, {name:"Error",message:"EncodingError U+595E"});
assert.throws(() => {ms932Encoder.encode("\u595F")}, {name:"Error",message:"EncodingError U+595F"});
r = r && ([...ms932Encoder.encode("奠")].join(",") === "154,249"); // U+5960
assert.throws(() => {ms932Encoder.encode("\u5961")}, {name:"Error",message:"EncodingError U+5961"});
r = r && ([...ms932Encoder.encode("奢奣")].join(",") === "154,248,250,163"); // U+5962
assert.throws(() => {ms932Encoder.encode("\u5964")}, {name:"Error",message:"EncodingError U+5964"});
r = r && ([...ms932Encoder.encode("奥")].join(",") === "137,156"); // U+5965
assert.throws(() => {ms932Encoder.encode("\u5966")}, {name:"Error",message:"EncodingError U+5966"});
r = r && ([...ms932Encoder.encode("奧奨奩奪")].join(",") === "154,250,143,167,154,252,146,68"); // U+5967
assert.throws(() => {ms932Encoder.encode("\u596B")}, {name:"Error",message:"EncodingError U+596B"});
r = r && ([...ms932Encoder.encode("奬")].join(",") === "154,251"); // U+596C
assert.throws(() => {ms932Encoder.encode("\u596D")}, {name:"Error",message:"EncodingError U+596D"});
r = r && ([...ms932Encoder.encode("奮")].join(",") === "149,177"); // U+596E
assert.throws(() => {ms932Encoder.encode("\u596F")}, {name:"Error",message:"EncodingError U+596F"});
assert.throws(() => {ms932Encoder.encode("\u5970")}, {name:"Error",message:"EncodingError U+5970"});
assert.throws(() => {ms932Encoder.encode("\u5971")}, {name:"Error",message:"EncodingError U+5971"});
assert.throws(() => {ms932Encoder.encode("\u5972")}, {name:"Error",message:"EncodingError U+5972"});
r = r && ([...ms932Encoder.encode("女奴")].join(",") === "143,151,147,122"); // U+5973
assert.throws(() => {ms932Encoder.encode("\u5975")}, {name:"Error",message:"EncodingError U+5975"});
assert.throws(() => {ms932Encoder.encode("\u5976")}, {name:"Error",message:"EncodingError U+5976"});
assert.throws(() => {ms932Encoder.encode("\u5977")}, {name:"Error",message:"EncodingError U+5977"});
r = r && ([...ms932Encoder.encode("奸")].join(",") === "155,64"); // U+5978
assert.throws(() => {ms932Encoder.encode("\u5979")}, {name:"Error",message:"EncodingError U+5979"});
assert.throws(() => {ms932Encoder.encode("\u597A")}, {name:"Error",message:"EncodingError U+597A"});
assert.throws(() => {ms932Encoder.encode("\u597B")}, {name:"Error",message:"EncodingError U+597B"});
assert.throws(() => {ms932Encoder.encode("\u597C")}, {name:"Error",message:"EncodingError U+597C"});
r = r && ([...ms932Encoder.encode("好")].join(",") === "141,68"); // U+597D
assert.throws(() => {ms932Encoder.encode("\u597E")}, {name:"Error",message:"EncodingError U+597E"});
assert.throws(() => {ms932Encoder.encode("\u597F")}, {name:"Error",message:"EncodingError U+597F"});
assert.throws(() => {ms932Encoder.encode("\u5980")}, {name:"Error",message:"EncodingError U+5980"});
r = r && ([...ms932Encoder.encode("妁如妃妄")].join(",") === "155,65,148,64,148,220,150,207"); // U+5981
assert.throws(() => {ms932Encoder.encode("\u5985")}, {name:"Error",message:"EncodingError U+5985"});
assert.throws(() => {ms932Encoder.encode("\u5986")}, {name:"Error",message:"EncodingError U+5986"});
assert.throws(() => {ms932Encoder.encode("\u5987")}, {name:"Error",message:"EncodingError U+5987"});
assert.throws(() => {ms932Encoder.encode("\u5988")}, {name:"Error",message:"EncodingError U+5988"});
assert.throws(() => {ms932Encoder.encode("\u5989")}, {name:"Error",message:"EncodingError U+5989"});
r = r && ([...ms932Encoder.encode("妊")].join(",") === "148,68"); // U+598A
assert.throws(() => {ms932Encoder.encode("\u598B")}, {name:"Error",message:"EncodingError U+598B"});
assert.throws(() => {ms932Encoder.encode("\u598C")}, {name:"Error",message:"EncodingError U+598C"});
r = r && ([...ms932Encoder.encode("妍")].join(",") === "155,74"); // U+598D
assert.throws(() => {ms932Encoder.encode("\u598E")}, {name:"Error",message:"EncodingError U+598E"});
assert.throws(() => {ms932Encoder.encode("\u598F")}, {name:"Error",message:"EncodingError U+598F"});
assert.throws(() => {ms932Encoder.encode("\u5990")}, {name:"Error",message:"EncodingError U+5990"});
assert.throws(() => {ms932Encoder.encode("\u5991")}, {name:"Error",message:"EncodingError U+5991"});
assert.throws(() => {ms932Encoder.encode("\u5992")}, {name:"Error",message:"EncodingError U+5992"});
r = r && ([...ms932Encoder.encode("妓")].join(",") === "139,87"); // U+5993
assert.throws(() => {ms932Encoder.encode("\u5994")}, {name:"Error",message:"EncodingError U+5994"});
assert.throws(() => {ms932Encoder.encode("\u5995")}, {name:"Error",message:"EncodingError U+5995"});
r = r && ([...ms932Encoder.encode("妖")].join(",") === "151,100"); // U+5996
assert.throws(() => {ms932Encoder.encode("\u5997")}, {name:"Error",message:"EncodingError U+5997"});
assert.throws(() => {ms932Encoder.encode("\u5998")}, {name:"Error",message:"EncodingError U+5998"});
r = r && ([...ms932Encoder.encode("妙")].join(",") === "150,173"); // U+5999
assert.throws(() => {ms932Encoder.encode("\u599A")}, {name:"Error",message:"EncodingError U+599A"});
r = r && ([...ms932Encoder.encode("妛")].join(",") === "155,170"); // U+599B
assert.throws(() => {ms932Encoder.encode("\u599C")}, {name:"Error",message:"EncodingError U+599C"});
r = r && ([...ms932Encoder.encode("妝")].join(",") === "155,66"); // U+599D
assert.throws(() => {ms932Encoder.encode("\u599E")}, {name:"Error",message:"EncodingError U+599E"});
assert.throws(() => {ms932Encoder.encode("\u599F")}, {name:"Error",message:"EncodingError U+599F"});
assert.throws(() => {ms932Encoder.encode("\u59A0")}, {name:"Error",message:"EncodingError U+59A0"});
assert.throws(() => {ms932Encoder.encode("\u59A1")}, {name:"Error",message:"EncodingError U+59A1"});
assert.throws(() => {ms932Encoder.encode("\u59A2")}, {name:"Error",message:"EncodingError U+59A2"});
r = r && ([...ms932Encoder.encode("妣妤妥")].join(",") === "155,69,250,164,145,195"); // U+59A3
assert.throws(() => {ms932Encoder.encode("\u59A6")}, {name:"Error",message:"EncodingError U+59A6"});
assert.throws(() => {ms932Encoder.encode("\u59A7")}, {name:"Error",message:"EncodingError U+59A7"});
r = r && ([...ms932Encoder.encode("妨")].join(",") === "150,87"); // U+59A8
assert.throws(() => {ms932Encoder.encode("\u59A9")}, {name:"Error",message:"EncodingError U+59A9"});
assert.throws(() => {ms932Encoder.encode("\u59AA")}, {name:"Error",message:"EncodingError U+59AA"});
assert.throws(() => {ms932Encoder.encode("\u59AB")}, {name:"Error",message:"EncodingError U+59AB"});
r = r && ([...ms932Encoder.encode("妬")].join(",") === "147,105"); // U+59AC
assert.throws(() => {ms932Encoder.encode("\u59AD")}, {name:"Error",message:"EncodingError U+59AD"});
assert.throws(() => {ms932Encoder.encode("\u59AE")}, {name:"Error",message:"EncodingError U+59AE"});
assert.throws(() => {ms932Encoder.encode("\u59AF")}, {name:"Error",message:"EncodingError U+59AF"});
assert.throws(() => {ms932Encoder.encode("\u59B0")}, {name:"Error",message:"EncodingError U+59B0"});
assert.throws(() => {ms932Encoder.encode("\u59B1")}, {name:"Error",message:"EncodingError U+59B1"});
r = r && ([...ms932Encoder.encode("妲")].join(",") === "155,70"); // U+59B2
assert.throws(() => {ms932Encoder.encode("\u59B3")}, {name:"Error",message:"EncodingError U+59B3"});
assert.throws(() => {ms932Encoder.encode("\u59B4")}, {name:"Error",message:"EncodingError U+59B4"});
assert.throws(() => {ms932Encoder.encode("\u59B5")}, {name:"Error",message:"EncodingError U+59B5"});
assert.throws(() => {ms932Encoder.encode("\u59B6")}, {name:"Error",message:"EncodingError U+59B6"});
assert.throws(() => {ms932Encoder.encode("\u59B7")}, {name:"Error",message:"EncodingError U+59B7"});
assert.throws(() => {ms932Encoder.encode("\u59B8")}, {name:"Error",message:"EncodingError U+59B8"});
r = r && ([...ms932Encoder.encode("妹妺妻")].join(",") === "150,133,250,165,141,200"); // U+59B9
assert.throws(() => {ms932Encoder.encode("\u59BC")}, {name:"Error",message:"EncodingError U+59BC"});
assert.throws(() => {ms932Encoder.encode("\u59BD")}, {name:"Error",message:"EncodingError U+59BD"});
r = r && ([...ms932Encoder.encode("妾")].join(",") === "143,168"); // U+59BE
assert.throws(() => {ms932Encoder.encode("\u59BF")}, {name:"Error",message:"EncodingError U+59BF"});
assert.throws(() => {ms932Encoder.encode("\u59C0")}, {name:"Error",message:"EncodingError U+59C0"});
assert.throws(() => {ms932Encoder.encode("\u59C1")}, {name:"Error",message:"EncodingError U+59C1"});
assert.throws(() => {ms932Encoder.encode("\u59C2")}, {name:"Error",message:"EncodingError U+59C2"});
assert.throws(() => {ms932Encoder.encode("\u59C3")}, {name:"Error",message:"EncodingError U+59C3"});
assert.throws(() => {ms932Encoder.encode("\u59C4")}, {name:"Error",message:"EncodingError U+59C4"});
assert.throws(() => {ms932Encoder.encode("\u59C5")}, {name:"Error",message:"EncodingError U+59C5"});
r = r && ([...ms932Encoder.encode("姆")].join(",") === "155,71"); // U+59C6
assert.throws(() => {ms932Encoder.encode("\u59C7")}, {name:"Error",message:"EncodingError U+59C7"});
assert.throws(() => {ms932Encoder.encode("\u59C8")}, {name:"Error",message:"EncodingError U+59C8"});
r = r && ([...ms932Encoder.encode("姉")].join(",") === "142,111"); // U+59C9
assert.throws(() => {ms932Encoder.encode("\u59CA")}, {name:"Error",message:"EncodingError U+59CA"});
r = r && ([...ms932Encoder.encode("始")].join(",") === "142,110"); // U+59CB
assert.throws(() => {ms932Encoder.encode("\u59CC")}, {name:"Error",message:"EncodingError U+59CC"});
assert.throws(() => {ms932Encoder.encode("\u59CD")}, {name:"Error",message:"EncodingError U+59CD"});
assert.throws(() => {ms932Encoder.encode("\u59CE")}, {name:"Error",message:"EncodingError U+59CE"});
assert.throws(() => {ms932Encoder.encode("\u59CF")}, {name:"Error",message:"EncodingError U+59CF"});
r = r && ([...ms932Encoder.encode("姐姑")].join(",") === "136,183,140,198"); // U+59D0
assert.throws(() => {ms932Encoder.encode("\u59D2")}, {name:"Error",message:"EncodingError U+59D2"});
r = r && ([...ms932Encoder.encode("姓委")].join(",") === "144,169,136,207"); // U+59D3
assert.throws(() => {ms932Encoder.encode("\u59D5")}, {name:"Error",message:"EncodingError U+59D5"});
assert.throws(() => {ms932Encoder.encode("\u59D6")}, {name:"Error",message:"EncodingError U+59D6"});
assert.throws(() => {ms932Encoder.encode("\u59D7")}, {name:"Error",message:"EncodingError U+59D7"});
assert.throws(() => {ms932Encoder.encode("\u59D8")}, {name:"Error",message:"EncodingError U+59D8"});
r = r && ([...ms932Encoder.encode("姙姚")].join(",") === "155,75,155,76"); // U+59D9
assert.throws(() => {ms932Encoder.encode("\u59DB")}, {name:"Error",message:"EncodingError U+59DB"});
r = r && ([...ms932Encoder.encode("姜")].join(",") === "155,73"); // U+59DC
assert.throws(() => {ms932Encoder.encode("\u59DD")}, {name:"Error",message:"EncodingError U+59DD"});
assert.throws(() => {ms932Encoder.encode("\u59DE")}, {name:"Error",message:"EncodingError U+59DE"});
assert.throws(() => {ms932Encoder.encode("\u59DF")}, {name:"Error",message:"EncodingError U+59DF"});
assert.throws(() => {ms932Encoder.encode("\u59E0")}, {name:"Error",message:"EncodingError U+59E0"});
assert.throws(() => {ms932Encoder.encode("\u59E1")}, {name:"Error",message:"EncodingError U+59E1"});
assert.throws(() => {ms932Encoder.encode("\u59E2")}, {name:"Error",message:"EncodingError U+59E2"});
assert.throws(() => {ms932Encoder.encode("\u59E3")}, {name:"Error",message:"EncodingError U+59E3"});
assert.throws(() => {ms932Encoder.encode("\u59E4")}, {name:"Error",message:"EncodingError U+59E4"});
r = r && ([...ms932Encoder.encode("姥姦")].join(",") === "137,87,138,173"); // U+59E5
assert.throws(() => {ms932Encoder.encode("\u59E7")}, {name:"Error",message:"EncodingError U+59E7"});
r = r && ([...ms932Encoder.encode("姨")].join(",") === "155,72"); // U+59E8
assert.throws(() => {ms932Encoder.encode("\u59E9")}, {name:"Error",message:"EncodingError U+59E9"});
r = r && ([...ms932Encoder.encode("姪姫")].join(",") === "150,195,149,80"); // U+59EA
assert.throws(() => {ms932Encoder.encode("\u59EC")}, {name:"Error",message:"EncodingError U+59EC"});
assert.throws(() => {ms932Encoder.encode("\u59ED")}, {name:"Error",message:"EncodingError U+59ED"});
assert.throws(() => {ms932Encoder.encode("\u59EE")}, {name:"Error",message:"EncodingError U+59EE"});
assert.throws(() => {ms932Encoder.encode("\u59EF")}, {name:"Error",message:"EncodingError U+59EF"});
assert.throws(() => {ms932Encoder.encode("\u59F0")}, {name:"Error",message:"EncodingError U+59F0"});
assert.throws(() => {ms932Encoder.encode("\u59F1")}, {name:"Error",message:"EncodingError U+59F1"});
assert.throws(() => {ms932Encoder.encode("\u59F2")}, {name:"Error",message:"EncodingError U+59F2"});
assert.throws(() => {ms932Encoder.encode("\u59F3")}, {name:"Error",message:"EncodingError U+59F3"});
assert.throws(() => {ms932Encoder.encode("\u59F4")}, {name:"Error",message:"EncodingError U+59F4"});
assert.throws(() => {ms932Encoder.encode("\u59F5")}, {name:"Error",message:"EncodingError U+59F5"});
r = r && ([...ms932Encoder.encode("姶")].join(",") === "136,166"); // U+59F6
assert.throws(() => {ms932Encoder.encode("\u59F7")}, {name:"Error",message:"EncodingError U+59F7"});
assert.throws(() => {ms932Encoder.encode("\u59F8")}, {name:"Error",message:"EncodingError U+59F8"});
assert.throws(() => {ms932Encoder.encode("\u59F9")}, {name:"Error",message:"EncodingError U+59F9"});
assert.throws(() => {ms932Encoder.encode("\u59FA")}, {name:"Error",message:"EncodingError U+59FA"});
r = r && ([...ms932Encoder.encode("姻")].join(",") === "136,247"); // U+59FB
assert.throws(() => {ms932Encoder.encode("\u59FC")}, {name:"Error",message:"EncodingError U+59FC"});
assert.throws(() => {ms932Encoder.encode("\u59FD")}, {name:"Error",message:"EncodingError U+59FD"});
assert.throws(() => {ms932Encoder.encode("\u59FE")}, {name:"Error",message:"EncodingError U+59FE"});
r = r && ([...ms932Encoder.encode("姿")].join(",") === "142,112"); // U+59FF
assert.throws(() => {ms932Encoder.encode("\u5A00")}, {name:"Error",message:"EncodingError U+5A00"});
r = r && ([...ms932Encoder.encode("威")].join(",") === "136,208"); // U+5A01
assert.throws(() => {ms932Encoder.encode("\u5A02")}, {name:"Error",message:"EncodingError U+5A02"});
r = r && ([...ms932Encoder.encode("娃")].join(",") === "136,161"); // U+5A03
assert.throws(() => {ms932Encoder.encode("\u5A04")}, {name:"Error",message:"EncodingError U+5A04"});
assert.throws(() => {ms932Encoder.encode("\u5A05")}, {name:"Error",message:"EncodingError U+5A05"});
assert.throws(() => {ms932Encoder.encode("\u5A06")}, {name:"Error",message:"EncodingError U+5A06"});
assert.throws(() => {ms932Encoder.encode("\u5A07")}, {name:"Error",message:"EncodingError U+5A07"});
assert.throws(() => {ms932Encoder.encode("\u5A08")}, {name:"Error",message:"EncodingError U+5A08"});
r = r && ([...ms932Encoder.encode("娉")].join(",") === "155,81"); // U+5A09
assert.throws(() => {ms932Encoder.encode("\u5A0A")}, {name:"Error",message:"EncodingError U+5A0A"});
assert.throws(() => {ms932Encoder.encode("\u5A0B")}, {name:"Error",message:"EncodingError U+5A0B"});
assert.throws(() => {ms932Encoder.encode("\u5A0C")}, {name:"Error",message:"EncodingError U+5A0C"});
assert.throws(() => {ms932Encoder.encode("\u5A0D")}, {name:"Error",message:"EncodingError U+5A0D"});
assert.throws(() => {ms932Encoder.encode("\u5A0E")}, {name:"Error",message:"EncodingError U+5A0E"});
assert.throws(() => {ms932Encoder.encode("\u5A0F")}, {name:"Error",message:"EncodingError U+5A0F"});
assert.throws(() => {ms932Encoder.encode("\u5A10")}, {name:"Error",message:"EncodingError U+5A10"});
r = r && ([...ms932Encoder.encode("娑")].join(",") === "155,79"); // U+5A11
assert.throws(() => {ms932Encoder.encode("\u5A12")}, {name:"Error",message:"EncodingError U+5A12"});
assert.throws(() => {ms932Encoder.encode("\u5A13")}, {name:"Error",message:"EncodingError U+5A13"});
assert.throws(() => {ms932Encoder.encode("\u5A14")}, {name:"Error",message:"EncodingError U+5A14"});
assert.throws(() => {ms932Encoder.encode("\u5A15")}, {name:"Error",message:"EncodingError U+5A15"});
assert.throws(() => {ms932Encoder.encode("\u5A16")}, {name:"Error",message:"EncodingError U+5A16"});
assert.throws(() => {ms932Encoder.encode("\u5A17")}, {name:"Error",message:"EncodingError U+5A17"});
r = r && ([...ms932Encoder.encode("娘")].join(",") === "150,186"); // U+5A18
assert.throws(() => {ms932Encoder.encode("\u5A19")}, {name:"Error",message:"EncodingError U+5A19"});
r = r && ([...ms932Encoder.encode("娚")].join(",") === "155,82"); // U+5A1A
assert.throws(() => {ms932Encoder.encode("\u5A1B")}, {name:"Error",message:"EncodingError U+5A1B"});
r = r && ([...ms932Encoder.encode("娜")].join(",") === "155,80"); // U+5A1C
assert.throws(() => {ms932Encoder.encode("\u5A1D")}, {name:"Error",message:"EncodingError U+5A1D"});
assert.throws(() => {ms932Encoder.encode("\u5A1E")}, {name:"Error",message:"EncodingError U+5A1E"});
r = r && ([...ms932Encoder.encode("娟娠")].join(",") === "155,78,144,80"); // U+5A1F
assert.throws(() => {ms932Encoder.encode("\u5A21")}, {name:"Error",message:"EncodingError U+5A21"});
assert.throws(() => {ms932Encoder.encode("\u5A22")}, {name:"Error",message:"EncodingError U+5A22"});
assert.throws(() => {ms932Encoder.encode("\u5A23")}, {name:"Error",message:"EncodingError U+5A23"});
assert.throws(() => {ms932Encoder.encode("\u5A24")}, {name:"Error",message:"EncodingError U+5A24"});
r = r && ([...ms932Encoder.encode("娥")].join(",") === "155,77"); // U+5A25
assert.throws(() => {ms932Encoder.encode("\u5A26")}, {name:"Error",message:"EncodingError U+5A26"});
assert.throws(() => {ms932Encoder.encode("\u5A27")}, {name:"Error",message:"EncodingError U+5A27"});
assert.throws(() => {ms932Encoder.encode("\u5A28")}, {name:"Error",message:"EncodingError U+5A28"});
r = r && ([...ms932Encoder.encode("娩")].join(",") === "149,216"); // U+5A29
assert.throws(() => {ms932Encoder.encode("\u5A2A")}, {name:"Error",message:"EncodingError U+5A2A"});
assert.throws(() => {ms932Encoder.encode("\u5A2B")}, {name:"Error",message:"EncodingError U+5A2B"});
assert.throws(() => {ms932Encoder.encode("\u5A2C")}, {name:"Error",message:"EncodingError U+5A2C"});
assert.throws(() => {ms932Encoder.encode("\u5A2D")}, {name:"Error",message:"EncodingError U+5A2D"});
assert.throws(() => {ms932Encoder.encode("\u5A2E")}, {name:"Error",message:"EncodingError U+5A2E"});
r = r && ([...ms932Encoder.encode("娯")].join(",") === "140,226"); // U+5A2F
assert.throws(() => {ms932Encoder.encode("\u5A30")}, {name:"Error",message:"EncodingError U+5A30"});
assert.throws(() => {ms932Encoder.encode("\u5A31")}, {name:"Error",message:"EncodingError U+5A31"});
assert.throws(() => {ms932Encoder.encode("\u5A32")}, {name:"Error",message:"EncodingError U+5A32"});
assert.throws(() => {ms932Encoder.encode("\u5A33")}, {name:"Error",message:"EncodingError U+5A33"});
assert.throws(() => {ms932Encoder.encode("\u5A34")}, {name:"Error",message:"EncodingError U+5A34"});
r = r && ([...ms932Encoder.encode("娵娶")].join(",") === "155,86,155,87"); // U+5A35
assert.throws(() => {ms932Encoder.encode("\u5A37")}, {name:"Error",message:"EncodingError U+5A37"});
assert.throws(() => {ms932Encoder.encode("\u5A38")}, {name:"Error",message:"EncodingError U+5A38"});
assert.throws(() => {ms932Encoder.encode("\u5A39")}, {name:"Error",message:"EncodingError U+5A39"});
assert.throws(() => {ms932Encoder.encode("\u5A3A")}, {name:"Error",message:"EncodingError U+5A3A"});
assert.throws(() => {ms932Encoder.encode("\u5A3B")}, {name:"Error",message:"EncodingError U+5A3B"});
r = r && ([...ms932Encoder.encode("娼")].join(",") === "143,169"); // U+5A3C
assert.throws(() => {ms932Encoder.encode("\u5A3D")}, {name:"Error",message:"EncodingError U+5A3D"});
assert.throws(() => {ms932Encoder.encode("\u5A3E")}, {name:"Error",message:"EncodingError U+5A3E"});
assert.throws(() => {ms932Encoder.encode("\u5A3F")}, {name:"Error",message:"EncodingError U+5A3F"});
r = r && ([...ms932Encoder.encode("婀婁")].join(",") === "155,83,152,75"); // U+5A40
assert.throws(() => {ms932Encoder.encode("\u5A42")}, {name:"Error",message:"EncodingError U+5A42"});
assert.throws(() => {ms932Encoder.encode("\u5A43")}, {name:"Error",message:"EncodingError U+5A43"});
assert.throws(() => {ms932Encoder.encode("\u5A44")}, {name:"Error",message:"EncodingError U+5A44"});
assert.throws(() => {ms932Encoder.encode("\u5A45")}, {name:"Error",message:"EncodingError U+5A45"});
r = r && ([...ms932Encoder.encode("婆")].join(",") === "148,107"); // U+5A46
assert.throws(() => {ms932Encoder.encode("\u5A47")}, {name:"Error",message:"EncodingError U+5A47"});
assert.throws(() => {ms932Encoder.encode("\u5A48")}, {name:"Error",message:"EncodingError U+5A48"});
r = r && ([...ms932Encoder.encode("婉")].join(",") === "155,85"); // U+5A49
assert.throws(() => {ms932Encoder.encode("\u5A4A")}, {name:"Error",message:"EncodingError U+5A4A"});
assert.throws(() => {ms932Encoder.encode("\u5A4B")}, {name:"Error",message:"EncodingError U+5A4B"});
assert.throws(() => {ms932Encoder.encode("\u5A4C")}, {name:"Error",message:"EncodingError U+5A4C"});
assert.throws(() => {ms932Encoder.encode("\u5A4D")}, {name:"Error",message:"EncodingError U+5A4D"});
assert.throws(() => {ms932Encoder.encode("\u5A4E")}, {name:"Error",message:"EncodingError U+5A4E"});
assert.throws(() => {ms932Encoder.encode("\u5A4F")}, {name:"Error",message:"EncodingError U+5A4F"});
assert.throws(() => {ms932Encoder.encode("\u5A50")}, {name:"Error",message:"EncodingError U+5A50"});
assert.throws(() => {ms932Encoder.encode("\u5A51")}, {name:"Error",message:"EncodingError U+5A51"});
assert.throws(() => {ms932Encoder.encode("\u5A52")}, {name:"Error",message:"EncodingError U+5A52"});
assert.throws(() => {ms932Encoder.encode("\u5A53")}, {name:"Error",message:"EncodingError U+5A53"});
assert.throws(() => {ms932Encoder.encode("\u5A54")}, {name:"Error",message:"EncodingError U+5A54"});
assert.throws(() => {ms932Encoder.encode("\u5A55")}, {name:"Error",message:"EncodingError U+5A55"});
assert.throws(() => {ms932Encoder.encode("\u5A56")}, {name:"Error",message:"EncodingError U+5A56"});
assert.throws(() => {ms932Encoder.encode("\u5A57")}, {name:"Error",message:"EncodingError U+5A57"});
assert.throws(() => {ms932Encoder.encode("\u5A58")}, {name:"Error",message:"EncodingError U+5A58"});
assert.throws(() => {ms932Encoder.encode("\u5A59")}, {name:"Error",message:"EncodingError U+5A59"});
r = r && ([...ms932Encoder.encode("婚")].join(",") === "141,165"); // U+5A5A
assert.throws(() => {ms932Encoder.encode("\u5A5B")}, {name:"Error",message:"EncodingError U+5A5B"});
assert.throws(() => {ms932Encoder.encode("\u5A5C")}, {name:"Error",message:"EncodingError U+5A5C"});
assert.throws(() => {ms932Encoder.encode("\u5A5D")}, {name:"Error",message:"EncodingError U+5A5D"});
assert.throws(() => {ms932Encoder.encode("\u5A5E")}, {name:"Error",message:"EncodingError U+5A5E"});
assert.throws(() => {ms932Encoder.encode("\u5A5F")}, {name:"Error",message:"EncodingError U+5A5F"});
assert.throws(() => {ms932Encoder.encode("\u5A60")}, {name:"Error",message:"EncodingError U+5A60"});
assert.throws(() => {ms932Encoder.encode("\u5A61")}, {name:"Error",message:"EncodingError U+5A61"});
r = r && ([...ms932Encoder.encode("婢")].join(",") === "155,88"); // U+5A62
assert.throws(() => {ms932Encoder.encode("\u5A63")}, {name:"Error",message:"EncodingError U+5A63"});
assert.throws(() => {ms932Encoder.encode("\u5A64")}, {name:"Error",message:"EncodingError U+5A64"});
assert.throws(() => {ms932Encoder.encode("\u5A65")}, {name:"Error",message:"EncodingError U+5A65"});
r = r && ([...ms932Encoder.encode("婦")].join(",") === "149,119"); // U+5A66
assert.throws(() => {ms932Encoder.encode("\u5A67")}, {name:"Error",message:"EncodingError U+5A67"});
assert.throws(() => {ms932Encoder.encode("\u5A68")}, {name:"Error",message:"EncodingError U+5A68"});
assert.throws(() => {ms932Encoder.encode("\u5A69")}, {name:"Error",message:"EncodingError U+5A69"});
r = r && ([...ms932Encoder.encode("婪")].join(",") === "155,89"); // U+5A6A
assert.throws(() => {ms932Encoder.encode("\u5A6B")}, {name:"Error",message:"EncodingError U+5A6B"});
r = r && ([...ms932Encoder.encode("婬")].join(",") === "155,84"); // U+5A6C
assert.throws(() => {ms932Encoder.encode("\u5A6D")}, {name:"Error",message:"EncodingError U+5A6D"});
assert.throws(() => {ms932Encoder.encode("\u5A6E")}, {name:"Error",message:"EncodingError U+5A6E"});
assert.throws(() => {ms932Encoder.encode("\u5A6F")}, {name:"Error",message:"EncodingError U+5A6F"});
assert.throws(() => {ms932Encoder.encode("\u5A70")}, {name:"Error",message:"EncodingError U+5A70"});
assert.throws(() => {ms932Encoder.encode("\u5A71")}, {name:"Error",message:"EncodingError U+5A71"});
assert.throws(() => {ms932Encoder.encode("\u5A72")}, {name:"Error",message:"EncodingError U+5A72"});
assert.throws(() => {ms932Encoder.encode("\u5A73")}, {name:"Error",message:"EncodingError U+5A73"});
assert.throws(() => {ms932Encoder.encode("\u5A74")}, {name:"Error",message:"EncodingError U+5A74"});
assert.throws(() => {ms932Encoder.encode("\u5A75")}, {name:"Error",message:"EncodingError U+5A75"});
assert.throws(() => {ms932Encoder.encode("\u5A76")}, {name:"Error",message:"EncodingError U+5A76"});
assert.throws(() => {ms932Encoder.encode("\u5A77")}, {name:"Error",message:"EncodingError U+5A77"});
assert.throws(() => {ms932Encoder.encode("\u5A78")}, {name:"Error",message:"EncodingError U+5A78"});
assert.throws(() => {ms932Encoder.encode("\u5A79")}, {name:"Error",message:"EncodingError U+5A79"});
assert.throws(() => {ms932Encoder.encode("\u5A7A")}, {name:"Error",message:"EncodingError U+5A7A"});
assert.throws(() => {ms932Encoder.encode("\u5A7B")}, {name:"Error",message:"EncodingError U+5A7B"});
assert.throws(() => {ms932Encoder.encode("\u5A7C")}, {name:"Error",message:"EncodingError U+5A7C"});
assert.throws(() => {ms932Encoder.encode("\u5A7D")}, {name:"Error",message:"EncodingError U+5A7D"});
assert.throws(() => {ms932Encoder.encode("\u5A7E")}, {name:"Error",message:"EncodingError U+5A7E"});
r = r && ([...ms932Encoder.encode("婿")].join(",") === "150,185"); // U+5A7F
assert.throws(() => {ms932Encoder.encode("\u5A80")}, {name:"Error",message:"EncodingError U+5A80"});
assert.throws(() => {ms932Encoder.encode("\u5A81")}, {name:"Error",message:"EncodingError U+5A81"});
assert.throws(() => {ms932Encoder.encode("\u5A82")}, {name:"Error",message:"EncodingError U+5A82"});
assert.throws(() => {ms932Encoder.encode("\u5A83")}, {name:"Error",message:"EncodingError U+5A83"});
assert.throws(() => {ms932Encoder.encode("\u5A84")}, {name:"Error",message:"EncodingError U+5A84"});
assert.throws(() => {ms932Encoder.encode("\u5A85")}, {name:"Error",message:"EncodingError U+5A85"});
assert.throws(() => {ms932Encoder.encode("\u5A86")}, {name:"Error",message:"EncodingError U+5A86"});
assert.throws(() => {ms932Encoder.encode("\u5A87")}, {name:"Error",message:"EncodingError U+5A87"});
assert.throws(() => {ms932Encoder.encode("\u5A88")}, {name:"Error",message:"EncodingError U+5A88"});
assert.throws(() => {ms932Encoder.encode("\u5A89")}, {name:"Error",message:"EncodingError U+5A89"});
assert.throws(() => {ms932Encoder.encode("\u5A8A")}, {name:"Error",message:"EncodingError U+5A8A"});
assert.throws(() => {ms932Encoder.encode("\u5A8B")}, {name:"Error",message:"EncodingError U+5A8B"});
assert.throws(() => {ms932Encoder.encode("\u5A8C")}, {name:"Error",message:"EncodingError U+5A8C"});
assert.throws(() => {ms932Encoder.encode("\u5A8D")}, {name:"Error",message:"EncodingError U+5A8D"});
assert.throws(() => {ms932Encoder.encode("\u5A8E")}, {name:"Error",message:"EncodingError U+5A8E"});
assert.throws(() => {ms932Encoder.encode("\u5A8F")}, {name:"Error",message:"EncodingError U+5A8F"});
assert.throws(() => {ms932Encoder.encode("\u5A90")}, {name:"Error",message:"EncodingError U+5A90"});
assert.throws(() => {ms932Encoder.encode("\u5A91")}, {name:"Error",message:"EncodingError U+5A91"});
r = r && ([...ms932Encoder.encode("媒")].join(",") === "148,125"); // U+5A92
assert.throws(() => {ms932Encoder.encode("\u5A93")}, {name:"Error",message:"EncodingError U+5A93"});
assert.throws(() => {ms932Encoder.encode("\u5A94")}, {name:"Error",message:"EncodingError U+5A94"});
assert.throws(() => {ms932Encoder.encode("\u5A95")}, {name:"Error",message:"EncodingError U+5A95"});
assert.throws(() => {ms932Encoder.encode("\u5A96")}, {name:"Error",message:"EncodingError U+5A96"});
assert.throws(() => {ms932Encoder.encode("\u5A97")}, {name:"Error",message:"EncodingError U+5A97"});
assert.throws(() => {ms932Encoder.encode("\u5A98")}, {name:"Error",message:"EncodingError U+5A98"});
assert.throws(() => {ms932Encoder.encode("\u5A99")}, {name:"Error",message:"EncodingError U+5A99"});
r = r && ([...ms932Encoder.encode("媚媛")].join(",") === "155,90,149,81"); // U+5A9A
assert.throws(() => {ms932Encoder.encode("\u5A9C")}, {name:"Error",message:"EncodingError U+5A9C"});
assert.throws(() => {ms932Encoder.encode("\u5A9D")}, {name:"Error",message:"EncodingError U+5A9D"});
assert.throws(() => {ms932Encoder.encode("\u5A9E")}, {name:"Error",message:"EncodingError U+5A9E"});
assert.throws(() => {ms932Encoder.encode("\u5A9F")}, {name:"Error",message:"EncodingError U+5A9F"});
assert.throws(() => {ms932Encoder.encode("\u5AA0")}, {name:"Error",message:"EncodingError U+5AA0"});
assert.throws(() => {ms932Encoder.encode("\u5AA1")}, {name:"Error",message:"EncodingError U+5AA1"});
assert.throws(() => {ms932Encoder.encode("\u5AA2")}, {name:"Error",message:"EncodingError U+5AA2"});
assert.throws(() => {ms932Encoder.encode("\u5AA3")}, {name:"Error",message:"EncodingError U+5AA3"});
assert.throws(() => {ms932Encoder.encode("\u5AA4")}, {name:"Error",message:"EncodingError U+5AA4"});
assert.throws(() => {ms932Encoder.encode("\u5AA5")}, {name:"Error",message:"EncodingError U+5AA5"});
assert.throws(() => {ms932Encoder.encode("\u5AA6")}, {name:"Error",message:"EncodingError U+5AA6"});
assert.throws(() => {ms932Encoder.encode("\u5AA7")}, {name:"Error",message:"EncodingError U+5AA7"});
assert.throws(() => {ms932Encoder.encode("\u5AA8")}, {name:"Error",message:"EncodingError U+5AA8"});
assert.throws(() => {ms932Encoder.encode("\u5AA9")}, {name:"Error",message:"EncodingError U+5AA9"});
assert.throws(() => {ms932Encoder.encode("\u5AAA")}, {name:"Error",message:"EncodingError U+5AAA"});
assert.throws(() => {ms932Encoder.encode("\u5AAB")}, {name:"Error",message:"EncodingError U+5AAB"});
assert.throws(() => {ms932Encoder.encode("\u5AAC")}, {name:"Error",message:"EncodingError U+5AAC"});
assert.throws(() => {ms932Encoder.encode("\u5AAD")}, {name:"Error",message:"EncodingError U+5AAD"});
assert.throws(() => {ms932Encoder.encode("\u5AAE")}, {name:"Error",message:"EncodingError U+5AAE"});
assert.throws(() => {ms932Encoder.encode("\u5AAF")}, {name:"Error",message:"EncodingError U+5AAF"});
assert.throws(() => {ms932Encoder.encode("\u5AB0")}, {name:"Error",message:"EncodingError U+5AB0"});
assert.throws(() => {ms932Encoder.encode("\u5AB1")}, {name:"Error",message:"EncodingError U+5AB1"});
assert.throws(() => {ms932Encoder.encode("\u5AB2")}, {name:"Error",message:"EncodingError U+5AB2"});
assert.throws(() => {ms932Encoder.encode("\u5AB3")}, {name:"Error",message:"EncodingError U+5AB3"});
assert.throws(() => {ms932Encoder.encode("\u5AB4")}, {name:"Error",message:"EncodingError U+5AB4"});
assert.throws(() => {ms932Encoder.encode("\u5AB5")}, {name:"Error",message:"EncodingError U+5AB5"});
assert.throws(() => {ms932Encoder.encode("\u5AB6")}, {name:"Error",message:"EncodingError U+5AB6"});
assert.throws(() => {ms932Encoder.encode("\u5AB7")}, {name:"Error",message:"EncodingError U+5AB7"});
assert.throws(() => {ms932Encoder.encode("\u5AB8")}, {name:"Error",message:"EncodingError U+5AB8"});
assert.throws(() => {ms932Encoder.encode("\u5AB9")}, {name:"Error",message:"EncodingError U+5AB9"});
assert.throws(() => {ms932Encoder.encode("\u5ABA")}, {name:"Error",message:"EncodingError U+5ABA"});
assert.throws(() => {ms932Encoder.encode("\u5ABB")}, {name:"Error",message:"EncodingError U+5ABB"});
r = r && ([...ms932Encoder.encode("媼媽媾")].join(",") === "155,91,155,95,155,92"); // U+5ABC
assert.throws(() => {ms932Encoder.encode("\u5ABF")}, {name:"Error",message:"EncodingError U+5ABF"});
assert.throws(() => {ms932Encoder.encode("\u5AC0")}, {name:"Error",message:"EncodingError U+5AC0"});
r = r && ([...ms932Encoder.encode("嫁嫂")].join(",") === "137,197,155,94"); // U+5AC1
assert.throws(() => {ms932Encoder.encode("\u5AC3")}, {name:"Error",message:"EncodingError U+5AC3"});
assert.throws(() => {ms932Encoder.encode("\u5AC4")}, {name:"Error",message:"EncodingError U+5AC4"});
assert.throws(() => {ms932Encoder.encode("\u5AC5")}, {name:"Error",message:"EncodingError U+5AC5"});
assert.throws(() => {ms932Encoder.encode("\u5AC6")}, {name:"Error",message:"EncodingError U+5AC6"});
assert.throws(() => {ms932Encoder.encode("\u5AC7")}, {name:"Error",message:"EncodingError U+5AC7"});
assert.throws(() => {ms932Encoder.encode("\u5AC8")}, {name:"Error",message:"EncodingError U+5AC8"});
r = r && ([...ms932Encoder.encode("嫉")].join(",") === "142,185"); // U+5AC9
assert.throws(() => {ms932Encoder.encode("\u5ACA")}, {name:"Error",message:"EncodingError U+5ACA"});
r = r && ([...ms932Encoder.encode("嫋嫌")].join(",") === "155,93,140,153"); // U+5ACB
assert.throws(() => {ms932Encoder.encode("\u5ACD")}, {name:"Error",message:"EncodingError U+5ACD"});
assert.throws(() => {ms932Encoder.encode("\u5ACE")}, {name:"Error",message:"EncodingError U+5ACE"});
assert.throws(() => {ms932Encoder.encode("\u5ACF")}, {name:"Error",message:"EncodingError U+5ACF"});
r = r && ([...ms932Encoder.encode("嫐")].join(",") === "155,107"); // U+5AD0
assert.throws(() => {ms932Encoder.encode("\u5AD1")}, {name:"Error",message:"EncodingError U+5AD1"});
assert.throws(() => {ms932Encoder.encode("\u5AD2")}, {name:"Error",message:"EncodingError U+5AD2"});
assert.throws(() => {ms932Encoder.encode("\u5AD3")}, {name:"Error",message:"EncodingError U+5AD3"});
assert.throws(() => {ms932Encoder.encode("\u5AD4")}, {name:"Error",message:"EncodingError U+5AD4"});
assert.throws(() => {ms932Encoder.encode("\u5AD5")}, {name:"Error",message:"EncodingError U+5AD5"});
r = r && ([...ms932Encoder.encode("嫖嫗")].join(",") === "155,100,155,97"); // U+5AD6
assert.throws(() => {ms932Encoder.encode("\u5AD8")}, {name:"Error",message:"EncodingError U+5AD8"});
assert.throws(() => {ms932Encoder.encode("\u5AD9")}, {name:"Error",message:"EncodingError U+5AD9"});
assert.throws(() => {ms932Encoder.encode("\u5ADA")}, {name:"Error",message:"EncodingError U+5ADA"});
assert.throws(() => {ms932Encoder.encode("\u5ADB")}, {name:"Error",message:"EncodingError U+5ADB"});
assert.throws(() => {ms932Encoder.encode("\u5ADC")}, {name:"Error",message:"EncodingError U+5ADC"});
assert.throws(() => {ms932Encoder.encode("\u5ADD")}, {name:"Error",message:"EncodingError U+5ADD"});
assert.throws(() => {ms932Encoder.encode("\u5ADE")}, {name:"Error",message:"EncodingError U+5ADE"});
assert.throws(() => {ms932Encoder.encode("\u5ADF")}, {name:"Error",message:"EncodingError U+5ADF"});
assert.throws(() => {ms932Encoder.encode("\u5AE0")}, {name:"Error",message:"EncodingError U+5AE0"});
r = r && ([...ms932Encoder.encode("嫡")].join(",") === "146,132"); // U+5AE1
assert.throws(() => {ms932Encoder.encode("\u5AE2")}, {name:"Error",message:"EncodingError U+5AE2"});
r = r && ([...ms932Encoder.encode("嫣")].join(",") === "155,96"); // U+5AE3
assert.throws(() => {ms932Encoder.encode("\u5AE4")}, {name:"Error",message:"EncodingError U+5AE4"});
assert.throws(() => {ms932Encoder.encode("\u5AE5")}, {name:"Error",message:"EncodingError U+5AE5"});
r = r && ([...ms932Encoder.encode("嫦")].join(",") === "155,98"); // U+5AE6
assert.throws(() => {ms932Encoder.encode("\u5AE7")}, {name:"Error",message:"EncodingError U+5AE7"});
assert.throws(() => {ms932Encoder.encode("\u5AE8")}, {name:"Error",message:"EncodingError U+5AE8"});
r = r && ([...ms932Encoder.encode("嫩")].join(",") === "155,99"); // U+5AE9
assert.throws(() => {ms932Encoder.encode("\u5AEA")}, {name:"Error",message:"EncodingError U+5AEA"});
assert.throws(() => {ms932Encoder.encode("\u5AEB")}, {name:"Error",message:"EncodingError U+5AEB"});
assert.throws(() => {ms932Encoder.encode("\u5AEC")}, {name:"Error",message:"EncodingError U+5AEC"});
assert.throws(() => {ms932Encoder.encode("\u5AED")}, {name:"Error",message:"EncodingError U+5AED"});
assert.throws(() => {ms932Encoder.encode("\u5AEE")}, {name:"Error",message:"EncodingError U+5AEE"});
assert.throws(() => {ms932Encoder.encode("\u5AEF")}, {name:"Error",message:"EncodingError U+5AEF"});
assert.throws(() => {ms932Encoder.encode("\u5AF0")}, {name:"Error",message:"EncodingError U+5AF0"});
assert.throws(() => {ms932Encoder.encode("\u5AF1")}, {name:"Error",message:"EncodingError U+5AF1"});
assert.throws(() => {ms932Encoder.encode("\u5AF2")}, {name:"Error",message:"EncodingError U+5AF2"});
assert.throws(() => {ms932Encoder.encode("\u5AF3")}, {name:"Error",message:"EncodingError U+5AF3"});
assert.throws(() => {ms932Encoder.encode("\u5AF4")}, {name:"Error",message:"EncodingError U+5AF4"});
assert.throws(() => {ms932Encoder.encode("\u5AF5")}, {name:"Error",message:"EncodingError U+5AF5"});
assert.throws(() => {ms932Encoder.encode("\u5AF6")}, {name:"Error",message:"EncodingError U+5AF6"});
assert.throws(() => {ms932Encoder.encode("\u5AF7")}, {name:"Error",message:"EncodingError U+5AF7"});
assert.throws(() => {ms932Encoder.encode("\u5AF8")}, {name:"Error",message:"EncodingError U+5AF8"});
assert.throws(() => {ms932Encoder.encode("\u5AF9")}, {name:"Error",message:"EncodingError U+5AF9"});
r = r && ([...ms932Encoder.encode("嫺嫻")].join(",") === "155,101,155,102"); // U+5AFA
assert.throws(() => {ms932Encoder.encode("\u5AFC")}, {name:"Error",message:"EncodingError U+5AFC"});
assert.throws(() => {ms932Encoder.encode("\u5AFD")}, {name:"Error",message:"EncodingError U+5AFD"});
assert.throws(() => {ms932Encoder.encode("\u5AFE")}, {name:"Error",message:"EncodingError U+5AFE"});
assert.throws(() => {ms932Encoder.encode("\u5AFF")}, {name:"Error",message:"EncodingError U+5AFF"});
assert.throws(() => {ms932Encoder.encode("\u5B00")}, {name:"Error",message:"EncodingError U+5B00"});
assert.throws(() => {ms932Encoder.encode("\u5B01")}, {name:"Error",message:"EncodingError U+5B01"});
assert.throws(() => {ms932Encoder.encode("\u5B02")}, {name:"Error",message:"EncodingError U+5B02"});
assert.throws(() => {ms932Encoder.encode("\u5B03")}, {name:"Error",message:"EncodingError U+5B03"});
assert.throws(() => {ms932Encoder.encode("\u5B04")}, {name:"Error",message:"EncodingError U+5B04"});
assert.throws(() => {ms932Encoder.encode("\u5B05")}, {name:"Error",message:"EncodingError U+5B05"});
assert.throws(() => {ms932Encoder.encode("\u5B06")}, {name:"Error",message:"EncodingError U+5B06"});
assert.throws(() => {ms932Encoder.encode("\u5B07")}, {name:"Error",message:"EncodingError U+5B07"});
assert.throws(() => {ms932Encoder.encode("\u5B08")}, {name:"Error",message:"EncodingError U+5B08"});
r = r && ([...ms932Encoder.encode("嬉")].join(",") === "138,240"); // U+5B09
assert.throws(() => {ms932Encoder.encode("\u5B0A")}, {name:"Error",message:"EncodingError U+5B0A"});
r = r && ([...ms932Encoder.encode("嬋嬌")].join(",") === "155,104,155,103"); // U+5B0B
assert.throws(() => {ms932Encoder.encode("\u5B0D")}, {name:"Error",message:"EncodingError U+5B0D"});
assert.throws(() => {ms932Encoder.encode("\u5B0E")}, {name:"Error",message:"EncodingError U+5B0E"});
assert.throws(() => {ms932Encoder.encode("\u5B0F")}, {name:"Error",message:"EncodingError U+5B0F"});
assert.throws(() => {ms932Encoder.encode("\u5B10")}, {name:"Error",message:"EncodingError U+5B10"});
assert.throws(() => {ms932Encoder.encode("\u5B11")}, {name:"Error",message:"EncodingError U+5B11"});
assert.throws(() => {ms932Encoder.encode("\u5B12")}, {name:"Error",message:"EncodingError U+5B12"});
assert.throws(() => {ms932Encoder.encode("\u5B13")}, {name:"Error",message:"EncodingError U+5B13"});
assert.throws(() => {ms932Encoder.encode("\u5B14")}, {name:"Error",message:"EncodingError U+5B14"});
assert.throws(() => {ms932Encoder.encode("\u5B15")}, {name:"Error",message:"EncodingError U+5B15"});
r = r && ([...ms932Encoder.encode("嬖")].join(",") === "155,105"); // U+5B16
assert.throws(() => {ms932Encoder.encode("\u5B17")}, {name:"Error",message:"EncodingError U+5B17"});
assert.throws(() => {ms932Encoder.encode("\u5B18")}, {name:"Error",message:"EncodingError U+5B18"});
assert.throws(() => {ms932Encoder.encode("\u5B19")}, {name:"Error",message:"EncodingError U+5B19"});
assert.throws(() => {ms932Encoder.encode("\u5B1A")}, {name:"Error",message:"EncodingError U+5B1A"});
assert.throws(() => {ms932Encoder.encode("\u5B1B")}, {name:"Error",message:"EncodingError U+5B1B"});
assert.throws(() => {ms932Encoder.encode("\u5B1C")}, {name:"Error",message:"EncodingError U+5B1C"});
assert.throws(() => {ms932Encoder.encode("\u5B1D")}, {name:"Error",message:"EncodingError U+5B1D"});
assert.throws(() => {ms932Encoder.encode("\u5B1E")}, {name:"Error",message:"EncodingError U+5B1E"});
assert.throws(() => {ms932Encoder.encode("\u5B1F")}, {name:"Error",message:"EncodingError U+5B1F"});
assert.throws(() => {ms932Encoder.encode("\u5B20")}, {name:"Error",message:"EncodingError U+5B20"});
assert.throws(() => {ms932Encoder.encode("\u5B21")}, {name:"Error",message:"EncodingError U+5B21"});
r = r && ([...ms932Encoder.encode("嬢")].join(",") === "143,236"); // U+5B22
assert.throws(() => {ms932Encoder.encode("\u5B23")}, {name:"Error",message:"EncodingError U+5B23"});
assert.throws(() => {ms932Encoder.encode("\u5B24")}, {name:"Error",message:"EncodingError U+5B24"});
assert.throws(() => {ms932Encoder.encode("\u5B25")}, {name:"Error",message:"EncodingError U+5B25"});
assert.throws(() => {ms932Encoder.encode("\u5B26")}, {name:"Error",message:"EncodingError U+5B26"});
assert.throws(() => {ms932Encoder.encode("\u5B27")}, {name:"Error",message:"EncodingError U+5B27"});
assert.throws(() => {ms932Encoder.encode("\u5B28")}, {name:"Error",message:"EncodingError U+5B28"});
assert.throws(() => {ms932Encoder.encode("\u5B29")}, {name:"Error",message:"EncodingError U+5B29"});
r = r && ([...ms932Encoder.encode("嬪")].join(",") === "155,108"); // U+5B2A
assert.throws(() => {ms932Encoder.encode("\u5B2B")}, {name:"Error",message:"EncodingError U+5B2B"});
r = r && ([...ms932Encoder.encode("嬬")].join(",") === "146,218"); // U+5B2C
assert.throws(() => {ms932Encoder.encode("\u5B2D")}, {name:"Error",message:"EncodingError U+5B2D"});
assert.throws(() => {ms932Encoder.encode("\u5B2E")}, {name:"Error",message:"EncodingError U+5B2E"});
assert.throws(() => {ms932Encoder.encode("\u5B2F")}, {name:"Error",message:"EncodingError U+5B2F"});
r = r && ([...ms932Encoder.encode("嬰")].join(",") === "137,100"); // U+5B30
assert.throws(() => {ms932Encoder.encode("\u5B31")}, {name:"Error",message:"EncodingError U+5B31"});
r = r && ([...ms932Encoder.encode("嬲")].join(",") === "155,106"); // U+5B32
assert.throws(() => {ms932Encoder.encode("\u5B33")}, {name:"Error",message:"EncodingError U+5B33"});
assert.throws(() => {ms932Encoder.encode("\u5B34")}, {name:"Error",message:"EncodingError U+5B34"});
assert.throws(() => {ms932Encoder.encode("\u5B35")}, {name:"Error",message:"EncodingError U+5B35"});
r = r && ([...ms932Encoder.encode("嬶")].join(",") === "155,109"); // U+5B36
assert.throws(() => {ms932Encoder.encode("\u5B37")}, {name:"Error",message:"EncodingError U+5B37"});
assert.throws(() => {ms932Encoder.encode("\u5B38")}, {name:"Error",message:"EncodingError U+5B38"});
assert.throws(() => {ms932Encoder.encode("\u5B39")}, {name:"Error",message:"EncodingError U+5B39"});
assert.throws(() => {ms932Encoder.encode("\u5B3A")}, {name:"Error",message:"EncodingError U+5B3A"});
assert.throws(() => {ms932Encoder.encode("\u5B3B")}, {name:"Error",message:"EncodingError U+5B3B"});
assert.throws(() => {ms932Encoder.encode("\u5B3C")}, {name:"Error",message:"EncodingError U+5B3C"});
assert.throws(() => {ms932Encoder.encode("\u5B3D")}, {name:"Error",message:"EncodingError U+5B3D"});
r = r && ([...ms932Encoder.encode("嬾")].join(",") === "155,110"); // U+5B3E
assert.throws(() => {ms932Encoder.encode("\u5B3F")}, {name:"Error",message:"EncodingError U+5B3F"});
r = r && ([...ms932Encoder.encode("孀")].join(",") === "155,113"); // U+5B40
assert.throws(() => {ms932Encoder.encode("\u5B41")}, {name:"Error",message:"EncodingError U+5B41"});
assert.throws(() => {ms932Encoder.encode("\u5B42")}, {name:"Error",message:"EncodingError U+5B42"});
r = r && ([...ms932Encoder.encode("孃")].join(",") === "155,111"); // U+5B43
assert.throws(() => {ms932Encoder.encode("\u5B44")}, {name:"Error",message:"EncodingError U+5B44"});
r = r && ([...ms932Encoder.encode("孅")].join(",") === "155,112"); // U+5B45
assert.throws(() => {ms932Encoder.encode("\u5B46")}, {name:"Error",message:"EncodingError U+5B46"});
assert.throws(() => {ms932Encoder.encode("\u5B47")}, {name:"Error",message:"EncodingError U+5B47"});
assert.throws(() => {ms932Encoder.encode("\u5B48")}, {name:"Error",message:"EncodingError U+5B48"});
assert.throws(() => {ms932Encoder.encode("\u5B49")}, {name:"Error",message:"EncodingError U+5B49"});
assert.throws(() => {ms932Encoder.encode("\u5B4A")}, {name:"Error",message:"EncodingError U+5B4A"});
assert.throws(() => {ms932Encoder.encode("\u5B4B")}, {name:"Error",message:"EncodingError U+5B4B"});
assert.throws(() => {ms932Encoder.encode("\u5B4C")}, {name:"Error",message:"EncodingError U+5B4C"});
assert.throws(() => {ms932Encoder.encode("\u5B4D")}, {name:"Error",message:"EncodingError U+5B4D"});
assert.throws(() => {ms932Encoder.encode("\u5B4E")}, {name:"Error",message:"EncodingError U+5B4E"});
assert.throws(() => {ms932Encoder.encode("\u5B4F")}, {name:"Error",message:"EncodingError U+5B4F"});
r = r && ([...ms932Encoder.encode("子孑")].join(",") === "142,113,155,114"); // U+5B50
assert.throws(() => {ms932Encoder.encode("\u5B52")}, {name:"Error",message:"EncodingError U+5B52"});
assert.throws(() => {ms932Encoder.encode("\u5B53")}, {name:"Error",message:"EncodingError U+5B53"});
r = r && ([...ms932Encoder.encode("孔孕孖字存")].join(",") === "141,69,155,115,250,166,142,154,145,182"); // U+5B54
assert.throws(() => {ms932Encoder.encode("\u5B59")}, {name:"Error",message:"EncodingError U+5B59"});
r = r && ([...ms932Encoder.encode("孚孛孜孝")].join(",") === "155,116,155,117,142,121,141,70"); // U+5B5A
assert.throws(() => {ms932Encoder.encode("\u5B5E")}, {name:"Error",message:"EncodingError U+5B5E"});
r = r && ([...ms932Encoder.encode("孟")].join(",") === "150,208"); // U+5B5F
assert.throws(() => {ms932Encoder.encode("\u5B60")}, {name:"Error",message:"EncodingError U+5B60"});
assert.throws(() => {ms932Encoder.encode("\u5B61")}, {name:"Error",message:"EncodingError U+5B61"});
assert.throws(() => {ms932Encoder.encode("\u5B62")}, {name:"Error",message:"EncodingError U+5B62"});
r = r && ([...ms932Encoder.encode("季孤孥学")].join(",") === "139,71,140,199,155,118,138,119"); // U+5B63
assert.throws(() => {ms932Encoder.encode("\u5B67")}, {name:"Error",message:"EncodingError U+5B67"});
assert.throws(() => {ms932Encoder.encode("\u5B68")}, {name:"Error",message:"EncodingError U+5B68"});
r = r && ([...ms932Encoder.encode("孩")].join(",") === "155,119"); // U+5B69
assert.throws(() => {ms932Encoder.encode("\u5B6A")}, {name:"Error",message:"EncodingError U+5B6A"});
r = r && ([...ms932Encoder.encode("孫")].join(",") === "145,183"); // U+5B6B
assert.throws(() => {ms932Encoder.encode("\u5B6C")}, {name:"Error",message:"EncodingError U+5B6C"});
assert.throws(() => {ms932Encoder.encode("\u5B6D")}, {name:"Error",message:"EncodingError U+5B6D"});
assert.throws(() => {ms932Encoder.encode("\u5B6E")}, {name:"Error",message:"EncodingError U+5B6E"});
assert.throws(() => {ms932Encoder.encode("\u5B6F")}, {name:"Error",message:"EncodingError U+5B6F"});
r = r && ([...ms932Encoder.encode("孰孱")].join(",") === "155,120,155,161"); // U+5B70
assert.throws(() => {ms932Encoder.encode("\u5B72")}, {name:"Error",message:"EncodingError U+5B72"});
r = r && ([...ms932Encoder.encode("孳")].join(",") === "155,121"); // U+5B73
assert.throws(() => {ms932Encoder.encode("\u5B74")}, {name:"Error",message:"EncodingError U+5B74"});
r = r && ([...ms932Encoder.encode("孵")].join(",") === "155,122"); // U+5B75
assert.throws(() => {ms932Encoder.encode("\u5B76")}, {name:"Error",message:"EncodingError U+5B76"});
assert.throws(() => {ms932Encoder.encode("\u5B77")}, {name:"Error",message:"EncodingError U+5B77"});
r = r && ([...ms932Encoder.encode("學")].join(",") === "155,123"); // U+5B78
assert.throws(() => {ms932Encoder.encode("\u5B79")}, {name:"Error",message:"EncodingError U+5B79"});
r = r && ([...ms932Encoder.encode("孺")].join(",") === "155,125"); // U+5B7A
assert.throws(() => {ms932Encoder.encode("\u5B7B")}, {name:"Error",message:"EncodingError U+5B7B"});
assert.throws(() => {ms932Encoder.encode("\u5B7C")}, {name:"Error",message:"EncodingError U+5B7C"});
assert.throws(() => {ms932Encoder.encode("\u5B7D")}, {name:"Error",message:"EncodingError U+5B7D"});
assert.throws(() => {ms932Encoder.encode("\u5B7E")}, {name:"Error",message:"EncodingError U+5B7E"});
assert.throws(() => {ms932Encoder.encode("\u5B7F")}, {name:"Error",message:"EncodingError U+5B7F"});
r = r && ([...ms932Encoder.encode("宀")].join(",") === "155,126"); // U+5B80
assert.throws(() => {ms932Encoder.encode("\u5B81")}, {name:"Error",message:"EncodingError U+5B81"});
assert.throws(() => {ms932Encoder.encode("\u5B82")}, {name:"Error",message:"EncodingError U+5B82"});
r = r && ([...ms932Encoder.encode("它")].join(",") === "155,128"); // U+5B83
assert.throws(() => {ms932Encoder.encode("\u5B84")}, {name:"Error",message:"EncodingError U+5B84"});
r = r && ([...ms932Encoder.encode("宅")].join(",") === "145,238"); // U+5B85
assert.throws(() => {ms932Encoder.encode("\u5B86")}, {name:"Error",message:"EncodingError U+5B86"});
r = r && ([...ms932Encoder.encode("宇守安")].join(",") === "137,70,142,231,136,192"); // U+5B87
assert.throws(() => {ms932Encoder.encode("\u5B8A")}, {name:"Error",message:"EncodingError U+5B8A"});
r = r && ([...ms932Encoder.encode("宋完宍")].join(",") === "145,118,138,174,142,179"); // U+5B8B
assert.throws(() => {ms932Encoder.encode("\u5B8E")}, {name:"Error",message:"EncodingError U+5B8E"});
r = r && ([...ms932Encoder.encode("宏")].join(",") === "141,71"); // U+5B8F
assert.throws(() => {ms932Encoder.encode("\u5B90")}, {name:"Error",message:"EncodingError U+5B90"});
assert.throws(() => {ms932Encoder.encode("\u5B91")}, {name:"Error",message:"EncodingError U+5B91"});
assert.throws(() => {ms932Encoder.encode("\u5B92")}, {name:"Error",message:"EncodingError U+5B92"});
assert.throws(() => {ms932Encoder.encode("\u5B93")}, {name:"Error",message:"EncodingError U+5B93"});
assert.throws(() => {ms932Encoder.encode("\u5B94")}, {name:"Error",message:"EncodingError U+5B94"});
r = r && ([...ms932Encoder.encode("宕")].join(",") === "147,134"); // U+5B95
assert.throws(() => {ms932Encoder.encode("\u5B96")}, {name:"Error",message:"EncodingError U+5B96"});
r = r && ([...ms932Encoder.encode("宗官宙定宛宜宝")].join(",") === "143,64,138,175,146,136,146,232,136,182,139,88,149,243"); // U+5B97
assert.throws(() => {ms932Encoder.encode("\u5B9E")}, {name:"Error",message:"EncodingError U+5B9E"});
r = r && ([...ms932Encoder.encode("実")].join(",") === "142,192"); // U+5B9F
assert.throws(() => {ms932Encoder.encode("\u5BA0")}, {name:"Error",message:"EncodingError U+5BA0"});
assert.throws(() => {ms932Encoder.encode("\u5BA1")}, {name:"Error",message:"EncodingError U+5BA1"});
r = r && ([...ms932Encoder.encode("客宣室宥宦")].join(",") === "139,113,144,233,142,186,151,71,155,129"); // U+5BA2
assert.throws(() => {ms932Encoder.encode("\u5BA7")}, {name:"Error",message:"EncodingError U+5BA7"});
assert.throws(() => {ms932Encoder.encode("\u5BA8")}, {name:"Error",message:"EncodingError U+5BA8"});
assert.throws(() => {ms932Encoder.encode("\u5BA9")}, {name:"Error",message:"EncodingError U+5BA9"});
assert.throws(() => {ms932Encoder.encode("\u5BAA")}, {name:"Error",message:"EncodingError U+5BAA"});
assert.throws(() => {ms932Encoder.encode("\u5BAB")}, {name:"Error",message:"EncodingError U+5BAB"});
assert.throws(() => {ms932Encoder.encode("\u5BAC")}, {name:"Error",message:"EncodingError U+5BAC"});
assert.throws(() => {ms932Encoder.encode("\u5BAD")}, {name:"Error",message:"EncodingError U+5BAD"});
r = r && ([...ms932Encoder.encode("宮")].join(",") === "139,123"); // U+5BAE
assert.throws(() => {ms932Encoder.encode("\u5BAF")}, {name:"Error",message:"EncodingError U+5BAF"});
r = r && ([...ms932Encoder.encode("宰")].join(",") === "141,201"); // U+5BB0
assert.throws(() => {ms932Encoder.encode("\u5BB1")}, {name:"Error",message:"EncodingError U+5BB1"});
assert.throws(() => {ms932Encoder.encode("\u5BB2")}, {name:"Error",message:"EncodingError U+5BB2"});
r = r && ([...ms932Encoder.encode("害宴宵家")].join(",") === "138,81,137,131,143,170,137,198"); // U+5BB3
assert.throws(() => {ms932Encoder.encode("\u5BB7")}, {name:"Error",message:"EncodingError U+5BB7"});
r = r && ([...ms932Encoder.encode("宸容")].join(",") === "155,130,151,101"); // U+5BB8
assert.throws(() => {ms932Encoder.encode("\u5BBA")}, {name:"Error",message:"EncodingError U+5BBA"});
assert.throws(() => {ms932Encoder.encode("\u5BBB")}, {name:"Error",message:"EncodingError U+5BBB"});
assert.throws(() => {ms932Encoder.encode("\u5BBC")}, {name:"Error",message:"EncodingError U+5BBC"});
assert.throws(() => {ms932Encoder.encode("\u5BBD")}, {name:"Error",message:"EncodingError U+5BBD"});
assert.throws(() => {ms932Encoder.encode("\u5BBE")}, {name:"Error",message:"EncodingError U+5BBE"});
r = r && ([...ms932Encoder.encode("宿寀")].join(",") === "143,104,250,167"); // U+5BBF
assert.throws(() => {ms932Encoder.encode("\u5BC1")}, {name:"Error",message:"EncodingError U+5BC1"});
r = r && ([...ms932Encoder.encode("寂寃寄寅密寇")].join(",") === "142,226,155,131,138,241,147,208,150,167,155,132"); // U+5BC2
assert.throws(() => {ms932Encoder.encode("\u5BC8")}, {name:"Error",message:"EncodingError U+5BC8"});
r = r && ([...ms932Encoder.encode("寉")].join(",") === "155,133"); // U+5BC9
assert.throws(() => {ms932Encoder.encode("\u5BCA")}, {name:"Error",message:"EncodingError U+5BCA"});
assert.throws(() => {ms932Encoder.encode("\u5BCB")}, {name:"Error",message:"EncodingError U+5BCB"});
r = r && ([...ms932Encoder.encode("富")].join(",") === "149,120"); // U+5BCC
assert.throws(() => {ms932Encoder.encode("\u5BCD")}, {name:"Error",message:"EncodingError U+5BCD"});
assert.throws(() => {ms932Encoder.encode("\u5BCE")}, {name:"Error",message:"EncodingError U+5BCE"});
assert.throws(() => {ms932Encoder.encode("\u5BCF")}, {name:"Error",message:"EncodingError U+5BCF"});
r = r && ([...ms932Encoder.encode("寐")].join(",") === "155,135"); // U+5BD0
assert.throws(() => {ms932Encoder.encode("\u5BD1")}, {name:"Error",message:"EncodingError U+5BD1"});
r = r && ([...ms932Encoder.encode("寒寓寔")].join(",") === "138,166,139,245,155,134"); // U+5BD2
assert.throws(() => {ms932Encoder.encode("\u5BD5")}, {name:"Error",message:"EncodingError U+5BD5"});
assert.throws(() => {ms932Encoder.encode("\u5BD6")}, {name:"Error",message:"EncodingError U+5BD6"});
assert.throws(() => {ms932Encoder.encode("\u5BD7")}, {name:"Error",message:"EncodingError U+5BD7"});
r = r && ([...ms932Encoder.encode("寘")].join(",") === "250,169"); // U+5BD8
assert.throws(() => {ms932Encoder.encode("\u5BD9")}, {name:"Error",message:"EncodingError U+5BD9"});
assert.throws(() => {ms932Encoder.encode("\u5BDA")}, {name:"Error",message:"EncodingError U+5BDA"});
r = r && ([...ms932Encoder.encode("寛")].join(",") === "138,176"); // U+5BDB
assert.throws(() => {ms932Encoder.encode("\u5BDC")}, {name:"Error",message:"EncodingError U+5BDC"});
r = r && ([...ms932Encoder.encode("寝寞察")].join(",") === "144,81,155,139,142,64"); // U+5BDD
assert.throws(() => {ms932Encoder.encode("\u5BE0")}, {name:"Error",message:"EncodingError U+5BE0"});
r = r && ([...ms932Encoder.encode("寡寢")].join(",") === "137,199,155,138"); // U+5BE1
assert.throws(() => {ms932Encoder.encode("\u5BE3")}, {name:"Error",message:"EncodingError U+5BE3"});
r = r && ([...ms932Encoder.encode("寤寥實寧寨審")].join(",") === "155,136,155,140,155,137,148,74,158,203,144,82"); // U+5BE4
assert.throws(() => {ms932Encoder.encode("\u5BEA")}, {name:"Error",message:"EncodingError U+5BEA"});
r = r && ([...ms932Encoder.encode("寫寬")].join(",") === "155,141,250,170"); // U+5BEB
assert.throws(() => {ms932Encoder.encode("\u5BED")}, {name:"Error",message:"EncodingError U+5BED"});
r = r && ([...ms932Encoder.encode("寮")].join(",") === "151,190"); // U+5BEE
assert.throws(() => {ms932Encoder.encode("\u5BEF")}, {name:"Error",message:"EncodingError U+5BEF"});
r = r && ([...ms932Encoder.encode("寰")].join(",") === "155,142"); // U+5BF0
assert.throws(() => {ms932Encoder.encode("\u5BF1")}, {name:"Error",message:"EncodingError U+5BF1"});
assert.throws(() => {ms932Encoder.encode("\u5BF2")}, {name:"Error",message:"EncodingError U+5BF2"});
r = r && ([...ms932Encoder.encode("寳")].join(",") === "155,144"); // U+5BF3
assert.throws(() => {ms932Encoder.encode("\u5BF4")}, {name:"Error",message:"EncodingError U+5BF4"});
r = r && ([...ms932Encoder.encode("寵寶")].join(",") === "146,158,155,143"); // U+5BF5
assert.throws(() => {ms932Encoder.encode("\u5BF7")}, {name:"Error",message:"EncodingError U+5BF7"});
r = r && ([...ms932Encoder.encode("寸")].join(",") === "144,161"); // U+5BF8
assert.throws(() => {ms932Encoder.encode("\u5BF9")}, {name:"Error",message:"EncodingError U+5BF9"});
r = r && ([...ms932Encoder.encode("寺")].join(",") === "142,155"); // U+5BFA
assert.throws(() => {ms932Encoder.encode("\u5BFB")}, {name:"Error",message:"EncodingError U+5BFB"});
assert.throws(() => {ms932Encoder.encode("\u5BFC")}, {name:"Error",message:"EncodingError U+5BFC"});
assert.throws(() => {ms932Encoder.encode("\u5BFD")}, {name:"Error",message:"EncodingError U+5BFD"});
r = r && ([...ms932Encoder.encode("対寿")].join(",") === "145,206,142,245"); // U+5BFE

assert.strictEqual(r, true);

  });

});
