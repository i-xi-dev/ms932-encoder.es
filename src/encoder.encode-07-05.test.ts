import assert from "node:assert";
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 7", () => {

  it("encode(string) - U+6400-U+67FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u6400")}, {name:"Error",message:"EncodingError U+6400"});
assert.throws(() => {ms932Encoder.encode("\u6401")}, {name:"Error",message:"EncodingError U+6401"});
assert.throws(() => {ms932Encoder.encode("\u6402")}, {name:"Error",message:"EncodingError U+6402"});
assert.throws(() => {ms932Encoder.encode("\u6403")}, {name:"Error",message:"EncodingError U+6403"});
assert.throws(() => {ms932Encoder.encode("\u6404")}, {name:"Error",message:"EncodingError U+6404"});
assert.throws(() => {ms932Encoder.encode("\u6405")}, {name:"Error",message:"EncodingError U+6405"});
r = r && ([...ms932Encoder.encode("搆")].join(",") === "157,140"); // U+6406
assert.throws(() => {ms932Encoder.encode("\u6407")}, {name:"Error",message:"EncodingError U+6407"});
assert.throws(() => {ms932Encoder.encode("\u6408")}, {name:"Error",message:"EncodingError U+6408"});
assert.throws(() => {ms932Encoder.encode("\u6409")}, {name:"Error",message:"EncodingError U+6409"});
assert.throws(() => {ms932Encoder.encode("\u640A")}, {name:"Error",message:"EncodingError U+640A"});
assert.throws(() => {ms932Encoder.encode("\u640B")}, {name:"Error",message:"EncodingError U+640B"});
assert.throws(() => {ms932Encoder.encode("\u640C")}, {name:"Error",message:"EncodingError U+640C"});
r = r && ([...ms932Encoder.encode("損")].join(",") === "145,185"); // U+640D
assert.throws(() => {ms932Encoder.encode("\u640E")}, {name:"Error",message:"EncodingError U+640E"});
r = r && ([...ms932Encoder.encode("搏")].join(",") === "157,147"); // U+640F
assert.throws(() => {ms932Encoder.encode("\u6410")}, {name:"Error",message:"EncodingError U+6410"});
assert.throws(() => {ms932Encoder.encode("\u6411")}, {name:"Error",message:"EncodingError U+6411"});
assert.throws(() => {ms932Encoder.encode("\u6412")}, {name:"Error",message:"EncodingError U+6412"});
r = r && ([...ms932Encoder.encode("搓")].join(",") === "157,141"); // U+6413
assert.throws(() => {ms932Encoder.encode("\u6414")}, {name:"Error",message:"EncodingError U+6414"});
assert.throws(() => {ms932Encoder.encode("\u6415")}, {name:"Error",message:"EncodingError U+6415"});
r = r && ([...ms932Encoder.encode("搖搗")].join(",") === "157,138,157,145"); // U+6416
assert.throws(() => {ms932Encoder.encode("\u6418")}, {name:"Error",message:"EncodingError U+6418"});
assert.throws(() => {ms932Encoder.encode("\u6419")}, {name:"Error",message:"EncodingError U+6419"});
assert.throws(() => {ms932Encoder.encode("\u641A")}, {name:"Error",message:"EncodingError U+641A"});
assert.throws(() => {ms932Encoder.encode("\u641B")}, {name:"Error",message:"EncodingError U+641B"});
r = r && ([...ms932Encoder.encode("搜")].join(",") === "157,114"); // U+641C
assert.throws(() => {ms932Encoder.encode("\u641D")}, {name:"Error",message:"EncodingError U+641D"});
assert.throws(() => {ms932Encoder.encode("\u641E")}, {name:"Error",message:"EncodingError U+641E"});
assert.throws(() => {ms932Encoder.encode("\u641F")}, {name:"Error",message:"EncodingError U+641F"});
assert.throws(() => {ms932Encoder.encode("\u6420")}, {name:"Error",message:"EncodingError U+6420"});
assert.throws(() => {ms932Encoder.encode("\u6421")}, {name:"Error",message:"EncodingError U+6421"});
assert.throws(() => {ms932Encoder.encode("\u6422")}, {name:"Error",message:"EncodingError U+6422"});
assert.throws(() => {ms932Encoder.encode("\u6423")}, {name:"Error",message:"EncodingError U+6423"});
assert.throws(() => {ms932Encoder.encode("\u6424")}, {name:"Error",message:"EncodingError U+6424"});
assert.throws(() => {ms932Encoder.encode("\u6425")}, {name:"Error",message:"EncodingError U+6425"});
r = r && ([...ms932Encoder.encode("搦")].join(",") === "157,142"); // U+6426
assert.throws(() => {ms932Encoder.encode("\u6427")}, {name:"Error",message:"EncodingError U+6427"});
r = r && ([...ms932Encoder.encode("搨")].join(",") === "157,146"); // U+6428
assert.throws(() => {ms932Encoder.encode("\u6429")}, {name:"Error",message:"EncodingError U+6429"});
assert.throws(() => {ms932Encoder.encode("\u642A")}, {name:"Error",message:"EncodingError U+642A"});
assert.throws(() => {ms932Encoder.encode("\u642B")}, {name:"Error",message:"EncodingError U+642B"});
r = r && ([...ms932Encoder.encode("搬搭")].join(",") === "148,192,147,139"); // U+642C
assert.throws(() => {ms932Encoder.encode("\u642E")}, {name:"Error",message:"EncodingError U+642E"});
assert.throws(() => {ms932Encoder.encode("\u642F")}, {name:"Error",message:"EncodingError U+642F"});
assert.throws(() => {ms932Encoder.encode("\u6430")}, {name:"Error",message:"EncodingError U+6430"});
assert.throws(() => {ms932Encoder.encode("\u6431")}, {name:"Error",message:"EncodingError U+6431"});
assert.throws(() => {ms932Encoder.encode("\u6432")}, {name:"Error",message:"EncodingError U+6432"});
assert.throws(() => {ms932Encoder.encode("\u6433")}, {name:"Error",message:"EncodingError U+6433"});
r = r && ([...ms932Encoder.encode("搴")].join(",") === "157,139"); // U+6434
assert.throws(() => {ms932Encoder.encode("\u6435")}, {name:"Error",message:"EncodingError U+6435"});
r = r && ([...ms932Encoder.encode("搶")].join(",") === "157,143"); // U+6436
assert.throws(() => {ms932Encoder.encode("\u6437")}, {name:"Error",message:"EncodingError U+6437"});
assert.throws(() => {ms932Encoder.encode("\u6438")}, {name:"Error",message:"EncodingError U+6438"});
assert.throws(() => {ms932Encoder.encode("\u6439")}, {name:"Error",message:"EncodingError U+6439"});
r = r && ([...ms932Encoder.encode("携")].join(",") === "140,103"); // U+643A
assert.throws(() => {ms932Encoder.encode("\u643B")}, {name:"Error",message:"EncodingError U+643B"});
assert.throws(() => {ms932Encoder.encode("\u643C")}, {name:"Error",message:"EncodingError U+643C"});
assert.throws(() => {ms932Encoder.encode("\u643D")}, {name:"Error",message:"EncodingError U+643D"});
r = r && ([...ms932Encoder.encode("搾")].join(",") === "141,239"); // U+643E
assert.throws(() => {ms932Encoder.encode("\u643F")}, {name:"Error",message:"EncodingError U+643F"});
assert.throws(() => {ms932Encoder.encode("\u6440")}, {name:"Error",message:"EncodingError U+6440"});
assert.throws(() => {ms932Encoder.encode("\u6441")}, {name:"Error",message:"EncodingError U+6441"});
r = r && ([...ms932Encoder.encode("摂")].join(",") === "144,219"); // U+6442
assert.throws(() => {ms932Encoder.encode("\u6443")}, {name:"Error",message:"EncodingError U+6443"});
assert.throws(() => {ms932Encoder.encode("\u6444")}, {name:"Error",message:"EncodingError U+6444"});
assert.throws(() => {ms932Encoder.encode("\u6445")}, {name:"Error",message:"EncodingError U+6445"});
assert.throws(() => {ms932Encoder.encode("\u6446")}, {name:"Error",message:"EncodingError U+6446"});
assert.throws(() => {ms932Encoder.encode("\u6447")}, {name:"Error",message:"EncodingError U+6447"});
assert.throws(() => {ms932Encoder.encode("\u6448")}, {name:"Error",message:"EncodingError U+6448"});
assert.throws(() => {ms932Encoder.encode("\u6449")}, {name:"Error",message:"EncodingError U+6449"});
assert.throws(() => {ms932Encoder.encode("\u644A")}, {name:"Error",message:"EncodingError U+644A"});
assert.throws(() => {ms932Encoder.encode("\u644B")}, {name:"Error",message:"EncodingError U+644B"});
assert.throws(() => {ms932Encoder.encode("\u644C")}, {name:"Error",message:"EncodingError U+644C"});
assert.throws(() => {ms932Encoder.encode("\u644D")}, {name:"Error",message:"EncodingError U+644D"});
r = r && ([...ms932Encoder.encode("摎")].join(",") === "157,151"); // U+644E
assert.throws(() => {ms932Encoder.encode("\u644F")}, {name:"Error",message:"EncodingError U+644F"});
assert.throws(() => {ms932Encoder.encode("\u6450")}, {name:"Error",message:"EncodingError U+6450"});
assert.throws(() => {ms932Encoder.encode("\u6451")}, {name:"Error",message:"EncodingError U+6451"});
assert.throws(() => {ms932Encoder.encode("\u6452")}, {name:"Error",message:"EncodingError U+6452"});
assert.throws(() => {ms932Encoder.encode("\u6453")}, {name:"Error",message:"EncodingError U+6453"});
assert.throws(() => {ms932Encoder.encode("\u6454")}, {name:"Error",message:"EncodingError U+6454"});
assert.throws(() => {ms932Encoder.encode("\u6455")}, {name:"Error",message:"EncodingError U+6455"});
assert.throws(() => {ms932Encoder.encode("\u6456")}, {name:"Error",message:"EncodingError U+6456"});
assert.throws(() => {ms932Encoder.encode("\u6457")}, {name:"Error",message:"EncodingError U+6457"});
r = r && ([...ms932Encoder.encode("摘")].join(",") === "147,69"); // U+6458
assert.throws(() => {ms932Encoder.encode("\u6459")}, {name:"Error",message:"EncodingError U+6459"});
assert.throws(() => {ms932Encoder.encode("\u645A")}, {name:"Error",message:"EncodingError U+645A"});
assert.throws(() => {ms932Encoder.encode("\u645B")}, {name:"Error",message:"EncodingError U+645B"});
assert.throws(() => {ms932Encoder.encode("\u645C")}, {name:"Error",message:"EncodingError U+645C"});
assert.throws(() => {ms932Encoder.encode("\u645D")}, {name:"Error",message:"EncodingError U+645D"});
assert.throws(() => {ms932Encoder.encode("\u645E")}, {name:"Error",message:"EncodingError U+645E"});
assert.throws(() => {ms932Encoder.encode("\u645F")}, {name:"Error",message:"EncodingError U+645F"});
r = r && ([...ms932Encoder.encode("摠")].join(",") === "250,202"); // U+6460
assert.throws(() => {ms932Encoder.encode("\u6461")}, {name:"Error",message:"EncodingError U+6461"});
assert.throws(() => {ms932Encoder.encode("\u6462")}, {name:"Error",message:"EncodingError U+6462"});
assert.throws(() => {ms932Encoder.encode("\u6463")}, {name:"Error",message:"EncodingError U+6463"});
assert.throws(() => {ms932Encoder.encode("\u6464")}, {name:"Error",message:"EncodingError U+6464"});
assert.throws(() => {ms932Encoder.encode("\u6465")}, {name:"Error",message:"EncodingError U+6465"});
assert.throws(() => {ms932Encoder.encode("\u6466")}, {name:"Error",message:"EncodingError U+6466"});
r = r && ([...ms932Encoder.encode("摧")].join(",") === "157,148"); // U+6467
assert.throws(() => {ms932Encoder.encode("\u6468")}, {name:"Error",message:"EncodingError U+6468"});
r = r && ([...ms932Encoder.encode("摩")].join(",") === "150,128"); // U+6469
assert.throws(() => {ms932Encoder.encode("\u646A")}, {name:"Error",message:"EncodingError U+646A"});
assert.throws(() => {ms932Encoder.encode("\u646B")}, {name:"Error",message:"EncodingError U+646B"});
assert.throws(() => {ms932Encoder.encode("\u646C")}, {name:"Error",message:"EncodingError U+646C"});
assert.throws(() => {ms932Encoder.encode("\u646D")}, {name:"Error",message:"EncodingError U+646D"});
assert.throws(() => {ms932Encoder.encode("\u646E")}, {name:"Error",message:"EncodingError U+646E"});
r = r && ([...ms932Encoder.encode("摯")].join(",") === "157,149"); // U+646F
assert.throws(() => {ms932Encoder.encode("\u6470")}, {name:"Error",message:"EncodingError U+6470"});
assert.throws(() => {ms932Encoder.encode("\u6471")}, {name:"Error",message:"EncodingError U+6471"});
assert.throws(() => {ms932Encoder.encode("\u6472")}, {name:"Error",message:"EncodingError U+6472"});
assert.throws(() => {ms932Encoder.encode("\u6473")}, {name:"Error",message:"EncodingError U+6473"});
assert.throws(() => {ms932Encoder.encode("\u6474")}, {name:"Error",message:"EncodingError U+6474"});
assert.throws(() => {ms932Encoder.encode("\u6475")}, {name:"Error",message:"EncodingError U+6475"});
r = r && ([...ms932Encoder.encode("摶")].join(",") === "157,150"); // U+6476
assert.throws(() => {ms932Encoder.encode("\u6477")}, {name:"Error",message:"EncodingError U+6477"});
r = r && ([...ms932Encoder.encode("摸")].join(",") === "150,204"); // U+6478
assert.throws(() => {ms932Encoder.encode("\u6479")}, {name:"Error",message:"EncodingError U+6479"});
r = r && ([...ms932Encoder.encode("摺")].join(",") === "144,160"); // U+647A
assert.throws(() => {ms932Encoder.encode("\u647B")}, {name:"Error",message:"EncodingError U+647B"});
assert.throws(() => {ms932Encoder.encode("\u647C")}, {name:"Error",message:"EncodingError U+647C"});
assert.throws(() => {ms932Encoder.encode("\u647D")}, {name:"Error",message:"EncodingError U+647D"});
assert.throws(() => {ms932Encoder.encode("\u647E")}, {name:"Error",message:"EncodingError U+647E"});
assert.throws(() => {ms932Encoder.encode("\u647F")}, {name:"Error",message:"EncodingError U+647F"});
assert.throws(() => {ms932Encoder.encode("\u6480")}, {name:"Error",message:"EncodingError U+6480"});
assert.throws(() => {ms932Encoder.encode("\u6481")}, {name:"Error",message:"EncodingError U+6481"});
assert.throws(() => {ms932Encoder.encode("\u6482")}, {name:"Error",message:"EncodingError U+6482"});
r = r && ([...ms932Encoder.encode("撃")].join(",") === "140,130"); // U+6483
assert.throws(() => {ms932Encoder.encode("\u6484")}, {name:"Error",message:"EncodingError U+6484"});
assert.throws(() => {ms932Encoder.encode("\u6485")}, {name:"Error",message:"EncodingError U+6485"});
assert.throws(() => {ms932Encoder.encode("\u6486")}, {name:"Error",message:"EncodingError U+6486"});
assert.throws(() => {ms932Encoder.encode("\u6487")}, {name:"Error",message:"EncodingError U+6487"});
r = r && ([...ms932Encoder.encode("撈")].join(",") === "157,157"); // U+6488
assert.throws(() => {ms932Encoder.encode("\u6489")}, {name:"Error",message:"EncodingError U+6489"});
assert.throws(() => {ms932Encoder.encode("\u648A")}, {name:"Error",message:"EncodingError U+648A"});
assert.throws(() => {ms932Encoder.encode("\u648B")}, {name:"Error",message:"EncodingError U+648B"});
assert.throws(() => {ms932Encoder.encode("\u648C")}, {name:"Error",message:"EncodingError U+648C"});
assert.throws(() => {ms932Encoder.encode("\u648D")}, {name:"Error",message:"EncodingError U+648D"});
assert.throws(() => {ms932Encoder.encode("\u648E")}, {name:"Error",message:"EncodingError U+648E"});
assert.throws(() => {ms932Encoder.encode("\u648F")}, {name:"Error",message:"EncodingError U+648F"});
assert.throws(() => {ms932Encoder.encode("\u6490")}, {name:"Error",message:"EncodingError U+6490"});
assert.throws(() => {ms932Encoder.encode("\u6491")}, {name:"Error",message:"EncodingError U+6491"});
r = r && ([...ms932Encoder.encode("撒撓")].join(",") === "142,84,157,154"); // U+6492
assert.throws(() => {ms932Encoder.encode("\u6494")}, {name:"Error",message:"EncodingError U+6494"});
r = r && ([...ms932Encoder.encode("撕")].join(",") === "157,153"); // U+6495
assert.throws(() => {ms932Encoder.encode("\u6496")}, {name:"Error",message:"EncodingError U+6496"});
assert.throws(() => {ms932Encoder.encode("\u6497")}, {name:"Error",message:"EncodingError U+6497"});
assert.throws(() => {ms932Encoder.encode("\u6498")}, {name:"Error",message:"EncodingError U+6498"});
assert.throws(() => {ms932Encoder.encode("\u6499")}, {name:"Error",message:"EncodingError U+6499"});
r = r && ([...ms932Encoder.encode("撚")].join(",") === "148,81"); // U+649A
assert.throws(() => {ms932Encoder.encode("\u649B")}, {name:"Error",message:"EncodingError U+649B"});
assert.throws(() => {ms932Encoder.encode("\u649C")}, {name:"Error",message:"EncodingError U+649C"});
r = r && ([...ms932Encoder.encode("撝撞")].join(",") === "250,203,147,179"); // U+649D
assert.throws(() => {ms932Encoder.encode("\u649F")}, {name:"Error",message:"EncodingError U+649F"});
assert.throws(() => {ms932Encoder.encode("\u64A0")}, {name:"Error",message:"EncodingError U+64A0"});
assert.throws(() => {ms932Encoder.encode("\u64A1")}, {name:"Error",message:"EncodingError U+64A1"});
assert.throws(() => {ms932Encoder.encode("\u64A2")}, {name:"Error",message:"EncodingError U+64A2"});
assert.throws(() => {ms932Encoder.encode("\u64A3")}, {name:"Error",message:"EncodingError U+64A3"});
r = r && ([...ms932Encoder.encode("撤撥")].join(",") === "147,80,157,155"); // U+64A4
assert.throws(() => {ms932Encoder.encode("\u64A6")}, {name:"Error",message:"EncodingError U+64A6"});
assert.throws(() => {ms932Encoder.encode("\u64A7")}, {name:"Error",message:"EncodingError U+64A7"});
assert.throws(() => {ms932Encoder.encode("\u64A8")}, {name:"Error",message:"EncodingError U+64A8"});
r = r && ([...ms932Encoder.encode("撩")].join(",") === "157,156"); // U+64A9
assert.throws(() => {ms932Encoder.encode("\u64AA")}, {name:"Error",message:"EncodingError U+64AA"});
r = r && ([...ms932Encoder.encode("撫")].join(",") === "149,143"); // U+64AB
assert.throws(() => {ms932Encoder.encode("\u64AC")}, {name:"Error",message:"EncodingError U+64AC"});
r = r && ([...ms932Encoder.encode("播撮")].join(",") === "148,100,142,66"); // U+64AD
assert.throws(() => {ms932Encoder.encode("\u64AF")}, {name:"Error",message:"EncodingError U+64AF"});
r = r && ([...ms932Encoder.encode("撰")].join(",") === "144,239"); // U+64B0
assert.throws(() => {ms932Encoder.encode("\u64B1")}, {name:"Error",message:"EncodingError U+64B1"});
r = r && ([...ms932Encoder.encode("撲")].join(",") === "150,111"); // U+64B2
assert.throws(() => {ms932Encoder.encode("\u64B3")}, {name:"Error",message:"EncodingError U+64B3"});
assert.throws(() => {ms932Encoder.encode("\u64B4")}, {name:"Error",message:"EncodingError U+64B4"});
assert.throws(() => {ms932Encoder.encode("\u64B5")}, {name:"Error",message:"EncodingError U+64B5"});
assert.throws(() => {ms932Encoder.encode("\u64B6")}, {name:"Error",message:"EncodingError U+64B6"});
assert.throws(() => {ms932Encoder.encode("\u64B7")}, {name:"Error",message:"EncodingError U+64B7"});
assert.throws(() => {ms932Encoder.encode("\u64B8")}, {name:"Error",message:"EncodingError U+64B8"});
r = r && ([...ms932Encoder.encode("撹")].join(",") === "138,104"); // U+64B9
assert.throws(() => {ms932Encoder.encode("\u64BA")}, {name:"Error",message:"EncodingError U+64BA"});
r = r && ([...ms932Encoder.encode("撻撼")].join(",") === "157,163,157,158"); // U+64BB
assert.throws(() => {ms932Encoder.encode("\u64BD")}, {name:"Error",message:"EncodingError U+64BD"});
assert.throws(() => {ms932Encoder.encode("\u64BE")}, {name:"Error",message:"EncodingError U+64BE"});
assert.throws(() => {ms932Encoder.encode("\u64BF")}, {name:"Error",message:"EncodingError U+64BF"});
assert.throws(() => {ms932Encoder.encode("\u64C0")}, {name:"Error",message:"EncodingError U+64C0"});
r = r && ([...ms932Encoder.encode("擁擂")].join(",") === "151,105,157,165"); // U+64C1
assert.throws(() => {ms932Encoder.encode("\u64C3")}, {name:"Error",message:"EncodingError U+64C3"});
assert.throws(() => {ms932Encoder.encode("\u64C4")}, {name:"Error",message:"EncodingError U+64C4"});
r = r && ([...ms932Encoder.encode("擅")].join(",") === "157,161"); // U+64C5
assert.throws(() => {ms932Encoder.encode("\u64C6")}, {name:"Error",message:"EncodingError U+64C6"});
r = r && ([...ms932Encoder.encode("擇")].join(",") === "157,162"); // U+64C7
assert.throws(() => {ms932Encoder.encode("\u64C8")}, {name:"Error",message:"EncodingError U+64C8"});
assert.throws(() => {ms932Encoder.encode("\u64C9")}, {name:"Error",message:"EncodingError U+64C9"});
assert.throws(() => {ms932Encoder.encode("\u64CA")}, {name:"Error",message:"EncodingError U+64CA"});
assert.throws(() => {ms932Encoder.encode("\u64CB")}, {name:"Error",message:"EncodingError U+64CB"});
assert.throws(() => {ms932Encoder.encode("\u64CC")}, {name:"Error",message:"EncodingError U+64CC"});
r = r && ([...ms932Encoder.encode("操擎")].join(",") === "145,128,250,204"); // U+64CD
assert.throws(() => {ms932Encoder.encode("\u64CF")}, {name:"Error",message:"EncodingError U+64CF"});
assert.throws(() => {ms932Encoder.encode("\u64D0")}, {name:"Error",message:"EncodingError U+64D0"});
assert.throws(() => {ms932Encoder.encode("\u64D1")}, {name:"Error",message:"EncodingError U+64D1"});
r = r && ([...ms932Encoder.encode("擒")].join(",") === "157,160"); // U+64D2
assert.throws(() => {ms932Encoder.encode("\u64D3")}, {name:"Error",message:"EncodingError U+64D3"});
r = r && ([...ms932Encoder.encode("擔")].join(",") === "157,94"); // U+64D4
assert.throws(() => {ms932Encoder.encode("\u64D5")}, {name:"Error",message:"EncodingError U+64D5"});
assert.throws(() => {ms932Encoder.encode("\u64D6")}, {name:"Error",message:"EncodingError U+64D6"});
assert.throws(() => {ms932Encoder.encode("\u64D7")}, {name:"Error",message:"EncodingError U+64D7"});
r = r && ([...ms932Encoder.encode("擘")].join(",") === "157,164"); // U+64D8
assert.throws(() => {ms932Encoder.encode("\u64D9")}, {name:"Error",message:"EncodingError U+64D9"});
r = r && ([...ms932Encoder.encode("據")].join(",") === "157,159"); // U+64DA
assert.throws(() => {ms932Encoder.encode("\u64DB")}, {name:"Error",message:"EncodingError U+64DB"});
assert.throws(() => {ms932Encoder.encode("\u64DC")}, {name:"Error",message:"EncodingError U+64DC"});
assert.throws(() => {ms932Encoder.encode("\u64DD")}, {name:"Error",message:"EncodingError U+64DD"});
assert.throws(() => {ms932Encoder.encode("\u64DE")}, {name:"Error",message:"EncodingError U+64DE"});
assert.throws(() => {ms932Encoder.encode("\u64DF")}, {name:"Error",message:"EncodingError U+64DF"});
r = r && ([...ms932Encoder.encode("擠擡擢擣")].join(",") === "157,169,157,170,147,70,157,172"); // U+64E0
assert.throws(() => {ms932Encoder.encode("\u64E4")}, {name:"Error",message:"EncodingError U+64E4"});
assert.throws(() => {ms932Encoder.encode("\u64E5")}, {name:"Error",message:"EncodingError U+64E5"});
r = r && ([...ms932Encoder.encode("擦擧")].join(",") === "142,67,157,167"); // U+64E6
assert.throws(() => {ms932Encoder.encode("\u64E8")}, {name:"Error",message:"EncodingError U+64E8"});
assert.throws(() => {ms932Encoder.encode("\u64E9")}, {name:"Error",message:"EncodingError U+64E9"});
assert.throws(() => {ms932Encoder.encode("\u64EA")}, {name:"Error",message:"EncodingError U+64EA"});
assert.throws(() => {ms932Encoder.encode("\u64EB")}, {name:"Error",message:"EncodingError U+64EB"});
r = r && ([...ms932Encoder.encode("擬")].join(",") === "139,91"); // U+64EC
assert.throws(() => {ms932Encoder.encode("\u64ED")}, {name:"Error",message:"EncodingError U+64ED"});
assert.throws(() => {ms932Encoder.encode("\u64EE")}, {name:"Error",message:"EncodingError U+64EE"});
r = r && ([...ms932Encoder.encode("擯")].join(",") === "157,173"); // U+64EF
assert.throws(() => {ms932Encoder.encode("\u64F0")}, {name:"Error",message:"EncodingError U+64F0"});
r = r && ([...ms932Encoder.encode("擱擲")].join(",") === "157,166,157,177"); // U+64F1
assert.throws(() => {ms932Encoder.encode("\u64F3")}, {name:"Error",message:"EncodingError U+64F3"});
r = r && ([...ms932Encoder.encode("擴")].join(",") === "157,176"); // U+64F4
assert.throws(() => {ms932Encoder.encode("\u64F5")}, {name:"Error",message:"EncodingError U+64F5"});
r = r && ([...ms932Encoder.encode("擶")].join(",") === "157,175"); // U+64F6
assert.throws(() => {ms932Encoder.encode("\u64F7")}, {name:"Error",message:"EncodingError U+64F7"});
assert.throws(() => {ms932Encoder.encode("\u64F8")}, {name:"Error",message:"EncodingError U+64F8"});
assert.throws(() => {ms932Encoder.encode("\u64F9")}, {name:"Error",message:"EncodingError U+64F9"});
r = r && ([...ms932Encoder.encode("擺")].join(",") === "157,178"); // U+64FA
assert.throws(() => {ms932Encoder.encode("\u64FB")}, {name:"Error",message:"EncodingError U+64FB"});
assert.throws(() => {ms932Encoder.encode("\u64FC")}, {name:"Error",message:"EncodingError U+64FC"});
r = r && ([...ms932Encoder.encode("擽擾")].join(",") === "157,180,143,239"); // U+64FD
assert.throws(() => {ms932Encoder.encode("\u64FF")}, {name:"Error",message:"EncodingError U+64FF"});
r = r && ([...ms932Encoder.encode("攀")].join(",") === "157,179"); // U+6500
assert.throws(() => {ms932Encoder.encode("\u6501")}, {name:"Error",message:"EncodingError U+6501"});
assert.throws(() => {ms932Encoder.encode("\u6502")}, {name:"Error",message:"EncodingError U+6502"});
assert.throws(() => {ms932Encoder.encode("\u6503")}, {name:"Error",message:"EncodingError U+6503"});
assert.throws(() => {ms932Encoder.encode("\u6504")}, {name:"Error",message:"EncodingError U+6504"});
r = r && ([...ms932Encoder.encode("攅")].join(",") === "157,183"); // U+6505
assert.throws(() => {ms932Encoder.encode("\u6506")}, {name:"Error",message:"EncodingError U+6506"});
assert.throws(() => {ms932Encoder.encode("\u6507")}, {name:"Error",message:"EncodingError U+6507"});
assert.throws(() => {ms932Encoder.encode("\u6508")}, {name:"Error",message:"EncodingError U+6508"});
assert.throws(() => {ms932Encoder.encode("\u6509")}, {name:"Error",message:"EncodingError U+6509"});
assert.throws(() => {ms932Encoder.encode("\u650A")}, {name:"Error",message:"EncodingError U+650A"});
assert.throws(() => {ms932Encoder.encode("\u650B")}, {name:"Error",message:"EncodingError U+650B"});
assert.throws(() => {ms932Encoder.encode("\u650C")}, {name:"Error",message:"EncodingError U+650C"});
assert.throws(() => {ms932Encoder.encode("\u650D")}, {name:"Error",message:"EncodingError U+650D"});
assert.throws(() => {ms932Encoder.encode("\u650E")}, {name:"Error",message:"EncodingError U+650E"});
assert.throws(() => {ms932Encoder.encode("\u650F")}, {name:"Error",message:"EncodingError U+650F"});
assert.throws(() => {ms932Encoder.encode("\u6510")}, {name:"Error",message:"EncodingError U+6510"});
assert.throws(() => {ms932Encoder.encode("\u6511")}, {name:"Error",message:"EncodingError U+6511"});
assert.throws(() => {ms932Encoder.encode("\u6512")}, {name:"Error",message:"EncodingError U+6512"});
assert.throws(() => {ms932Encoder.encode("\u6513")}, {name:"Error",message:"EncodingError U+6513"});
assert.throws(() => {ms932Encoder.encode("\u6514")}, {name:"Error",message:"EncodingError U+6514"});
assert.throws(() => {ms932Encoder.encode("\u6515")}, {name:"Error",message:"EncodingError U+6515"});
assert.throws(() => {ms932Encoder.encode("\u6516")}, {name:"Error",message:"EncodingError U+6516"});
assert.throws(() => {ms932Encoder.encode("\u6517")}, {name:"Error",message:"EncodingError U+6517"});
r = r && ([...ms932Encoder.encode("攘")].join(",") === "157,181"); // U+6518
assert.throws(() => {ms932Encoder.encode("\u6519")}, {name:"Error",message:"EncodingError U+6519"});
assert.throws(() => {ms932Encoder.encode("\u651A")}, {name:"Error",message:"EncodingError U+651A"});
assert.throws(() => {ms932Encoder.encode("\u651B")}, {name:"Error",message:"EncodingError U+651B"});
r = r && ([...ms932Encoder.encode("攜攝")].join(",") === "157,182,157,144"); // U+651C
assert.throws(() => {ms932Encoder.encode("\u651E")}, {name:"Error",message:"EncodingError U+651E"});
assert.throws(() => {ms932Encoder.encode("\u651F")}, {name:"Error",message:"EncodingError U+651F"});
assert.throws(() => {ms932Encoder.encode("\u6520")}, {name:"Error",message:"EncodingError U+6520"});
assert.throws(() => {ms932Encoder.encode("\u6521")}, {name:"Error",message:"EncodingError U+6521"});
assert.throws(() => {ms932Encoder.encode("\u6522")}, {name:"Error",message:"EncodingError U+6522"});
r = r && ([...ms932Encoder.encode("攣攤")].join(",") === "157,185,157,184"); // U+6523
assert.throws(() => {ms932Encoder.encode("\u6525")}, {name:"Error",message:"EncodingError U+6525"});
assert.throws(() => {ms932Encoder.encode("\u6526")}, {name:"Error",message:"EncodingError U+6526"});
assert.throws(() => {ms932Encoder.encode("\u6527")}, {name:"Error",message:"EncodingError U+6527"});
assert.throws(() => {ms932Encoder.encode("\u6528")}, {name:"Error",message:"EncodingError U+6528"});
assert.throws(() => {ms932Encoder.encode("\u6529")}, {name:"Error",message:"EncodingError U+6529"});
r = r && ([...ms932Encoder.encode("攪攫攬")].join(",") === "157,152,157,186,157,174"); // U+652A
assert.throws(() => {ms932Encoder.encode("\u652D")}, {name:"Error",message:"EncodingError U+652D"});
assert.throws(() => {ms932Encoder.encode("\u652E")}, {name:"Error",message:"EncodingError U+652E"});
r = r && ([...ms932Encoder.encode("支")].join(",") === "142,120"); // U+652F
assert.throws(() => {ms932Encoder.encode("\u6530")}, {name:"Error",message:"EncodingError U+6530"});
assert.throws(() => {ms932Encoder.encode("\u6531")}, {name:"Error",message:"EncodingError U+6531"});
assert.throws(() => {ms932Encoder.encode("\u6532")}, {name:"Error",message:"EncodingError U+6532"});
assert.throws(() => {ms932Encoder.encode("\u6533")}, {name:"Error",message:"EncodingError U+6533"});
r = r && ([...ms932Encoder.encode("攴攵收攷攸改")].join(",") === "157,187,157,188,157,190,157,189,157,191,137,252"); // U+6534
assert.throws(() => {ms932Encoder.encode("\u653A")}, {name:"Error",message:"EncodingError U+653A"});
r = r && ([...ms932Encoder.encode("攻")].join(",") === "141,85"); // U+653B
assert.throws(() => {ms932Encoder.encode("\u653C")}, {name:"Error",message:"EncodingError U+653C"});
assert.throws(() => {ms932Encoder.encode("\u653D")}, {name:"Error",message:"EncodingError U+653D"});
r = r && ([...ms932Encoder.encode("放政")].join(",") === "149,250,144,173"); // U+653E
assert.throws(() => {ms932Encoder.encode("\u6540")}, {name:"Error",message:"EncodingError U+6540"});
assert.throws(() => {ms932Encoder.encode("\u6541")}, {name:"Error",message:"EncodingError U+6541"});
assert.throws(() => {ms932Encoder.encode("\u6542")}, {name:"Error",message:"EncodingError U+6542"});
assert.throws(() => {ms932Encoder.encode("\u6543")}, {name:"Error",message:"EncodingError U+6543"});
assert.throws(() => {ms932Encoder.encode("\u6544")}, {name:"Error",message:"EncodingError U+6544"});
r = r && ([...ms932Encoder.encode("故")].join(",") === "140,204"); // U+6545
assert.throws(() => {ms932Encoder.encode("\u6546")}, {name:"Error",message:"EncodingError U+6546"});
assert.throws(() => {ms932Encoder.encode("\u6547")}, {name:"Error",message:"EncodingError U+6547"});
r = r && ([...ms932Encoder.encode("效")].join(",") === "157,193"); // U+6548
assert.throws(() => {ms932Encoder.encode("\u6549")}, {name:"Error",message:"EncodingError U+6549"});
assert.throws(() => {ms932Encoder.encode("\u654A")}, {name:"Error",message:"EncodingError U+654A"});
assert.throws(() => {ms932Encoder.encode("\u654B")}, {name:"Error",message:"EncodingError U+654B"});
assert.throws(() => {ms932Encoder.encode("\u654C")}, {name:"Error",message:"EncodingError U+654C"});
r = r && ([...ms932Encoder.encode("敍敎敏")].join(",") === "157,196,250,205,149,113"); // U+654D
assert.throws(() => {ms932Encoder.encode("\u6550")}, {name:"Error",message:"EncodingError U+6550"});
r = r && ([...ms932Encoder.encode("救")].join(",") === "139,126"); // U+6551
assert.throws(() => {ms932Encoder.encode("\u6552")}, {name:"Error",message:"EncodingError U+6552"});
assert.throws(() => {ms932Encoder.encode("\u6553")}, {name:"Error",message:"EncodingError U+6553"});
assert.throws(() => {ms932Encoder.encode("\u6554")}, {name:"Error",message:"EncodingError U+6554"});
r = r && ([...ms932Encoder.encode("敕敖敗敘教")].join(",") === "157,195,157,194,148,115,157,197,139,179"); // U+6555
assert.throws(() => {ms932Encoder.encode("\u655A")}, {name:"Error",message:"EncodingError U+655A"});
assert.throws(() => {ms932Encoder.encode("\u655B")}, {name:"Error",message:"EncodingError U+655B"});
assert.throws(() => {ms932Encoder.encode("\u655C")}, {name:"Error",message:"EncodingError U+655C"});
r = r && ([...ms932Encoder.encode("敝敞")].join(",") === "157,199,157,198"); // U+655D
assert.throws(() => {ms932Encoder.encode("\u655F")}, {name:"Error",message:"EncodingError U+655F"});
assert.throws(() => {ms932Encoder.encode("\u6560")}, {name:"Error",message:"EncodingError U+6560"});
assert.throws(() => {ms932Encoder.encode("\u6561")}, {name:"Error",message:"EncodingError U+6561"});
r = r && ([...ms932Encoder.encode("敢散")].join(",") === "138,184,142,85"); // U+6562
assert.throws(() => {ms932Encoder.encode("\u6564")}, {name:"Error",message:"EncodingError U+6564"});
assert.throws(() => {ms932Encoder.encode("\u6565")}, {name:"Error",message:"EncodingError U+6565"});
r = r && ([...ms932Encoder.encode("敦")].join(",") === "147,214"); // U+6566
assert.throws(() => {ms932Encoder.encode("\u6567")}, {name:"Error",message:"EncodingError U+6567"});
assert.throws(() => {ms932Encoder.encode("\u6568")}, {name:"Error",message:"EncodingError U+6568"});
assert.throws(() => {ms932Encoder.encode("\u6569")}, {name:"Error",message:"EncodingError U+6569"});
assert.throws(() => {ms932Encoder.encode("\u656A")}, {name:"Error",message:"EncodingError U+656A"});
assert.throws(() => {ms932Encoder.encode("\u656B")}, {name:"Error",message:"EncodingError U+656B"});
r = r && ([...ms932Encoder.encode("敬")].join(",") === "140,104"); // U+656C
assert.throws(() => {ms932Encoder.encode("\u656D")}, {name:"Error",message:"EncodingError U+656D"});
assert.throws(() => {ms932Encoder.encode("\u656E")}, {name:"Error",message:"EncodingError U+656E"});
assert.throws(() => {ms932Encoder.encode("\u656F")}, {name:"Error",message:"EncodingError U+656F"});
r = r && ([...ms932Encoder.encode("数")].join(",") === "144,148"); // U+6570
assert.throws(() => {ms932Encoder.encode("\u6571")}, {name:"Error",message:"EncodingError U+6571"});
r = r && ([...ms932Encoder.encode("敲")].join(",") === "157,200"); // U+6572
assert.throws(() => {ms932Encoder.encode("\u6573")}, {name:"Error",message:"EncodingError U+6573"});
r = r && ([...ms932Encoder.encode("整敵")].join(",") === "144,174,147,71"); // U+6574
assert.throws(() => {ms932Encoder.encode("\u6576")}, {name:"Error",message:"EncodingError U+6576"});
r = r && ([...ms932Encoder.encode("敷數")].join(",") === "149,126,157,201"); // U+6577
assert.throws(() => {ms932Encoder.encode("\u6579")}, {name:"Error",message:"EncodingError U+6579"});
assert.throws(() => {ms932Encoder.encode("\u657A")}, {name:"Error",message:"EncodingError U+657A"});
assert.throws(() => {ms932Encoder.encode("\u657B")}, {name:"Error",message:"EncodingError U+657B"});
assert.throws(() => {ms932Encoder.encode("\u657C")}, {name:"Error",message:"EncodingError U+657C"});
assert.throws(() => {ms932Encoder.encode("\u657D")}, {name:"Error",message:"EncodingError U+657D"});
assert.throws(() => {ms932Encoder.encode("\u657E")}, {name:"Error",message:"EncodingError U+657E"});
assert.throws(() => {ms932Encoder.encode("\u657F")}, {name:"Error",message:"EncodingError U+657F"});
assert.throws(() => {ms932Encoder.encode("\u6580")}, {name:"Error",message:"EncodingError U+6580"});
assert.throws(() => {ms932Encoder.encode("\u6581")}, {name:"Error",message:"EncodingError U+6581"});
r = r && ([...ms932Encoder.encode("斂斃")].join(",") === "157,202,157,203"); // U+6582
assert.throws(() => {ms932Encoder.encode("\u6584")}, {name:"Error",message:"EncodingError U+6584"});
assert.throws(() => {ms932Encoder.encode("\u6585")}, {name:"Error",message:"EncodingError U+6585"});
assert.throws(() => {ms932Encoder.encode("\u6586")}, {name:"Error",message:"EncodingError U+6586"});
r = r && ([...ms932Encoder.encode("文斈斉")].join(",") === "149,182,155,124,144,196"); // U+6587
assert.throws(() => {ms932Encoder.encode("\u658A")}, {name:"Error",message:"EncodingError U+658A"});
assert.throws(() => {ms932Encoder.encode("\u658B")}, {name:"Error",message:"EncodingError U+658B"});
r = r && ([...ms932Encoder.encode("斌")].join(",") === "149,107"); // U+658C
assert.throws(() => {ms932Encoder.encode("\u658D")}, {name:"Error",message:"EncodingError U+658D"});
r = r && ([...ms932Encoder.encode("斎")].join(",") === "141,214"); // U+658E
assert.throws(() => {ms932Encoder.encode("\u658F")}, {name:"Error",message:"EncodingError U+658F"});
r = r && ([...ms932Encoder.encode("斐斑")].join(",") === "148,227,148,193"); // U+6590
assert.throws(() => {ms932Encoder.encode("\u6592")}, {name:"Error",message:"EncodingError U+6592"});
assert.throws(() => {ms932Encoder.encode("\u6593")}, {name:"Error",message:"EncodingError U+6593"});
assert.throws(() => {ms932Encoder.encode("\u6594")}, {name:"Error",message:"EncodingError U+6594"});
assert.throws(() => {ms932Encoder.encode("\u6595")}, {name:"Error",message:"EncodingError U+6595"});
assert.throws(() => {ms932Encoder.encode("\u6596")}, {name:"Error",message:"EncodingError U+6596"});
r = r && ([...ms932Encoder.encode("斗")].join(",") === "147,108"); // U+6597
assert.throws(() => {ms932Encoder.encode("\u6598")}, {name:"Error",message:"EncodingError U+6598"});
r = r && ([...ms932Encoder.encode("料")].join(",") === "151,191"); // U+6599
assert.throws(() => {ms932Encoder.encode("\u659A")}, {name:"Error",message:"EncodingError U+659A"});
r = r && ([...ms932Encoder.encode("斛斜")].join(",") === "157,205,142,206"); // U+659B
assert.throws(() => {ms932Encoder.encode("\u659D")}, {name:"Error",message:"EncodingError U+659D"});
assert.throws(() => {ms932Encoder.encode("\u659E")}, {name:"Error",message:"EncodingError U+659E"});
r = r && ([...ms932Encoder.encode("斟")].join(",") === "157,206"); // U+659F
assert.throws(() => {ms932Encoder.encode("\u65A0")}, {name:"Error",message:"EncodingError U+65A0"});
r = r && ([...ms932Encoder.encode("斡")].join(",") === "136,180"); // U+65A1
assert.throws(() => {ms932Encoder.encode("\u65A2")}, {name:"Error",message:"EncodingError U+65A2"});
assert.throws(() => {ms932Encoder.encode("\u65A3")}, {name:"Error",message:"EncodingError U+65A3"});
r = r && ([...ms932Encoder.encode("斤斥")].join(",") === "139,210,144,203"); // U+65A4
assert.throws(() => {ms932Encoder.encode("\u65A6")}, {name:"Error",message:"EncodingError U+65A6"});
r = r && ([...ms932Encoder.encode("斧")].join(",") === "149,128"); // U+65A7
assert.throws(() => {ms932Encoder.encode("\u65A8")}, {name:"Error",message:"EncodingError U+65A8"});
assert.throws(() => {ms932Encoder.encode("\u65A9")}, {name:"Error",message:"EncodingError U+65A9"});
assert.throws(() => {ms932Encoder.encode("\u65AA")}, {name:"Error",message:"EncodingError U+65AA"});
r = r && ([...ms932Encoder.encode("斫斬断")].join(",") === "157,207,142,97,146,102"); // U+65AB
assert.throws(() => {ms932Encoder.encode("\u65AE")}, {name:"Error",message:"EncodingError U+65AE"});
r = r && ([...ms932Encoder.encode("斯新")].join(",") === "142,122,144,86"); // U+65AF
assert.throws(() => {ms932Encoder.encode("\u65B1")}, {name:"Error",message:"EncodingError U+65B1"});
assert.throws(() => {ms932Encoder.encode("\u65B2")}, {name:"Error",message:"EncodingError U+65B2"});
assert.throws(() => {ms932Encoder.encode("\u65B3")}, {name:"Error",message:"EncodingError U+65B3"});
assert.throws(() => {ms932Encoder.encode("\u65B4")}, {name:"Error",message:"EncodingError U+65B4"});
assert.throws(() => {ms932Encoder.encode("\u65B5")}, {name:"Error",message:"EncodingError U+65B5"});
assert.throws(() => {ms932Encoder.encode("\u65B6")}, {name:"Error",message:"EncodingError U+65B6"});
r = r && ([...ms932Encoder.encode("斷")].join(",") === "157,208"); // U+65B7
assert.throws(() => {ms932Encoder.encode("\u65B8")}, {name:"Error",message:"EncodingError U+65B8"});
r = r && ([...ms932Encoder.encode("方")].join(",") === "149,251"); // U+65B9
assert.throws(() => {ms932Encoder.encode("\u65BA")}, {name:"Error",message:"EncodingError U+65BA"});
assert.throws(() => {ms932Encoder.encode("\u65BB")}, {name:"Error",message:"EncodingError U+65BB"});
r = r && ([...ms932Encoder.encode("於施")].join(",") === "137,151,142,123"); // U+65BC
assert.throws(() => {ms932Encoder.encode("\u65BE")}, {name:"Error",message:"EncodingError U+65BE"});
assert.throws(() => {ms932Encoder.encode("\u65BF")}, {name:"Error",message:"EncodingError U+65BF"});
assert.throws(() => {ms932Encoder.encode("\u65C0")}, {name:"Error",message:"EncodingError U+65C0"});
r = r && ([...ms932Encoder.encode("旁")].join(",") === "157,211"); // U+65C1
assert.throws(() => {ms932Encoder.encode("\u65C2")}, {name:"Error",message:"EncodingError U+65C2"});
r = r && ([...ms932Encoder.encode("旃旄旅旆")].join(",") === "157,209,157,212,151,183,157,210"); // U+65C3
assert.throws(() => {ms932Encoder.encode("\u65C7")}, {name:"Error",message:"EncodingError U+65C7"});
assert.throws(() => {ms932Encoder.encode("\u65C8")}, {name:"Error",message:"EncodingError U+65C8"});
assert.throws(() => {ms932Encoder.encode("\u65C9")}, {name:"Error",message:"EncodingError U+65C9"});
assert.throws(() => {ms932Encoder.encode("\u65CA")}, {name:"Error",message:"EncodingError U+65CA"});
r = r && ([...ms932Encoder.encode("旋旌")].join(",") === "144,249,157,213"); // U+65CB
assert.throws(() => {ms932Encoder.encode("\u65CD")}, {name:"Error",message:"EncodingError U+65CD"});
assert.throws(() => {ms932Encoder.encode("\u65CE")}, {name:"Error",message:"EncodingError U+65CE"});
r = r && ([...ms932Encoder.encode("族")].join(",") === "145,176"); // U+65CF
assert.throws(() => {ms932Encoder.encode("\u65D0")}, {name:"Error",message:"EncodingError U+65D0"});
assert.throws(() => {ms932Encoder.encode("\u65D1")}, {name:"Error",message:"EncodingError U+65D1"});
r = r && ([...ms932Encoder.encode("旒")].join(",") === "157,214"); // U+65D2
assert.throws(() => {ms932Encoder.encode("\u65D3")}, {name:"Error",message:"EncodingError U+65D3"});
assert.throws(() => {ms932Encoder.encode("\u65D4")}, {name:"Error",message:"EncodingError U+65D4"});
assert.throws(() => {ms932Encoder.encode("\u65D5")}, {name:"Error",message:"EncodingError U+65D5"});
assert.throws(() => {ms932Encoder.encode("\u65D6")}, {name:"Error",message:"EncodingError U+65D6"});
r = r && ([...ms932Encoder.encode("旗")].join(",") === "138,248"); // U+65D7
assert.throws(() => {ms932Encoder.encode("\u65D8")}, {name:"Error",message:"EncodingError U+65D8"});
r = r && ([...ms932Encoder.encode("旙")].join(",") === "157,216"); // U+65D9
assert.throws(() => {ms932Encoder.encode("\u65DA")}, {name:"Error",message:"EncodingError U+65DA"});
r = r && ([...ms932Encoder.encode("旛")].join(",") === "157,215"); // U+65DB
assert.throws(() => {ms932Encoder.encode("\u65DC")}, {name:"Error",message:"EncodingError U+65DC"});
assert.throws(() => {ms932Encoder.encode("\u65DD")}, {name:"Error",message:"EncodingError U+65DD"});
assert.throws(() => {ms932Encoder.encode("\u65DE")}, {name:"Error",message:"EncodingError U+65DE"});
assert.throws(() => {ms932Encoder.encode("\u65DF")}, {name:"Error",message:"EncodingError U+65DF"});
r = r && ([...ms932Encoder.encode("无旡既")].join(",") === "157,217,157,218,138,249"); // U+65E0
assert.throws(() => {ms932Encoder.encode("\u65E3")}, {name:"Error",message:"EncodingError U+65E3"});
assert.throws(() => {ms932Encoder.encode("\u65E4")}, {name:"Error",message:"EncodingError U+65E4"});
r = r && ([...ms932Encoder.encode("日旦旧旨早")].join(",") === "147,250,146,85,139,140,142,124,145,129"); // U+65E5
assert.throws(() => {ms932Encoder.encode("\u65EA")}, {name:"Error",message:"EncodingError U+65EA"});
assert.throws(() => {ms932Encoder.encode("\u65EB")}, {name:"Error",message:"EncodingError U+65EB"});
r = r && ([...ms932Encoder.encode("旬旭")].join(",") === "143,123,136,174"); // U+65EC
assert.throws(() => {ms932Encoder.encode("\u65EE")}, {name:"Error",message:"EncodingError U+65EE"});
assert.throws(() => {ms932Encoder.encode("\u65EF")}, {name:"Error",message:"EncodingError U+65EF"});
assert.throws(() => {ms932Encoder.encode("\u65F0")}, {name:"Error",message:"EncodingError U+65F0"});
r = r && ([...ms932Encoder.encode("旱")].join(",") === "157,219"); // U+65F1
assert.throws(() => {ms932Encoder.encode("\u65F2")}, {name:"Error",message:"EncodingError U+65F2"});
assert.throws(() => {ms932Encoder.encode("\u65F3")}, {name:"Error",message:"EncodingError U+65F3"});
assert.throws(() => {ms932Encoder.encode("\u65F4")}, {name:"Error",message:"EncodingError U+65F4"});
assert.throws(() => {ms932Encoder.encode("\u65F5")}, {name:"Error",message:"EncodingError U+65F5"});
assert.throws(() => {ms932Encoder.encode("\u65F6")}, {name:"Error",message:"EncodingError U+65F6"});
assert.throws(() => {ms932Encoder.encode("\u65F7")}, {name:"Error",message:"EncodingError U+65F7"});
assert.throws(() => {ms932Encoder.encode("\u65F8")}, {name:"Error",message:"EncodingError U+65F8"});
assert.throws(() => {ms932Encoder.encode("\u65F9")}, {name:"Error",message:"EncodingError U+65F9"});
r = r && ([...ms932Encoder.encode("旺旻")].join(",") === "137,160,157,223"); // U+65FA
assert.throws(() => {ms932Encoder.encode("\u65FC")}, {name:"Error",message:"EncodingError U+65FC"});
assert.throws(() => {ms932Encoder.encode("\u65FD")}, {name:"Error",message:"EncodingError U+65FD"});
assert.throws(() => {ms932Encoder.encode("\u65FE")}, {name:"Error",message:"EncodingError U+65FE"});
assert.throws(() => {ms932Encoder.encode("\u65FF")}, {name:"Error",message:"EncodingError U+65FF"});
r = r && ([...ms932Encoder.encode("昀")].join(",") === "250,206"); // U+6600
assert.throws(() => {ms932Encoder.encode("\u6601")}, {name:"Error",message:"EncodingError U+6601"});
r = r && ([...ms932Encoder.encode("昂昃")].join(",") === "141,86,157,222"); // U+6602
assert.throws(() => {ms932Encoder.encode("\u6604")}, {name:"Error",message:"EncodingError U+6604"});
assert.throws(() => {ms932Encoder.encode("\u6605")}, {name:"Error",message:"EncodingError U+6605"});
r = r && ([...ms932Encoder.encode("昆昇")].join(",") === "141,169,143,184"); // U+6606
assert.throws(() => {ms932Encoder.encode("\u6608")}, {name:"Error",message:"EncodingError U+6608"});
r = r && ([...ms932Encoder.encode("昉昊")].join(",") === "250,209,157,221"); // U+6609
assert.throws(() => {ms932Encoder.encode("\u660B")}, {name:"Error",message:"EncodingError U+660B"});
r = r && ([...ms932Encoder.encode("昌")].join(",") === "143,185"); // U+660C
assert.throws(() => {ms932Encoder.encode("\u660D")}, {name:"Error",message:"EncodingError U+660D"});
r = r && ([...ms932Encoder.encode("明昏")].join(",") === "150,190,141,168"); // U+660E
assert.throws(() => {ms932Encoder.encode("\u6610")}, {name:"Error",message:"EncodingError U+6610"});
assert.throws(() => {ms932Encoder.encode("\u6611")}, {name:"Error",message:"EncodingError U+6611"});
assert.throws(() => {ms932Encoder.encode("\u6612")}, {name:"Error",message:"EncodingError U+6612"});
r = r && ([...ms932Encoder.encode("易昔昕")].join(",") === "136,213,144,204,250,207"); // U+6613
assert.throws(() => {ms932Encoder.encode("\u6616")}, {name:"Error",message:"EncodingError U+6616"});
assert.throws(() => {ms932Encoder.encode("\u6617")}, {name:"Error",message:"EncodingError U+6617"});
assert.throws(() => {ms932Encoder.encode("\u6618")}, {name:"Error",message:"EncodingError U+6618"});
assert.throws(() => {ms932Encoder.encode("\u6619")}, {name:"Error",message:"EncodingError U+6619"});
assert.throws(() => {ms932Encoder.encode("\u661A")}, {name:"Error",message:"EncodingError U+661A"});
assert.throws(() => {ms932Encoder.encode("\u661B")}, {name:"Error",message:"EncodingError U+661B"});
r = r && ([...ms932Encoder.encode("昜")].join(",") === "157,228"); // U+661C
assert.throws(() => {ms932Encoder.encode("\u661D")}, {name:"Error",message:"EncodingError U+661D"});
r = r && ([...ms932Encoder.encode("昞星映")].join(",") === "250,211,144,175,137,102"); // U+661E
assert.throws(() => {ms932Encoder.encode("\u6621")}, {name:"Error",message:"EncodingError U+6621"});
assert.throws(() => {ms932Encoder.encode("\u6622")}, {name:"Error",message:"EncodingError U+6622"});
assert.throws(() => {ms932Encoder.encode("\u6623")}, {name:"Error",message:"EncodingError U+6623"});
r = r && ([...ms932Encoder.encode("昤春")].join(",") === "250,212,143,116"); // U+6624
assert.throws(() => {ms932Encoder.encode("\u6626")}, {name:"Error",message:"EncodingError U+6626"});
r = r && ([...ms932Encoder.encode("昧昨")].join(",") === "150,134,141,240"); // U+6627
assert.throws(() => {ms932Encoder.encode("\u6629")}, {name:"Error",message:"EncodingError U+6629"});
assert.throws(() => {ms932Encoder.encode("\u662A")}, {name:"Error",message:"EncodingError U+662A"});
assert.throws(() => {ms932Encoder.encode("\u662B")}, {name:"Error",message:"EncodingError U+662B"});
assert.throws(() => {ms932Encoder.encode("\u662C")}, {name:"Error",message:"EncodingError U+662C"});
r = r && ([...ms932Encoder.encode("昭昮是")].join(",") === "143,186,250,210,144,165"); // U+662D
assert.throws(() => {ms932Encoder.encode("\u6630")}, {name:"Error",message:"EncodingError U+6630"});
r = r && ([...ms932Encoder.encode("昱")].join(",") === "250,99"); // U+6631
assert.throws(() => {ms932Encoder.encode("\u6632")}, {name:"Error",message:"EncodingError U+6632"});
assert.throws(() => {ms932Encoder.encode("\u6633")}, {name:"Error",message:"EncodingError U+6633"});
r = r && ([...ms932Encoder.encode("昴昵昶")].join(",") === "157,227,157,225,157,226"); // U+6634
assert.throws(() => {ms932Encoder.encode("\u6637")}, {name:"Error",message:"EncodingError U+6637"});
assert.throws(() => {ms932Encoder.encode("\u6638")}, {name:"Error",message:"EncodingError U+6638"});
assert.throws(() => {ms932Encoder.encode("\u6639")}, {name:"Error",message:"EncodingError U+6639"});
assert.throws(() => {ms932Encoder.encode("\u663A")}, {name:"Error",message:"EncodingError U+663A"});
r = r && ([...ms932Encoder.encode("昻昼")].join(",") === "250,208,146,139"); // U+663B
assert.throws(() => {ms932Encoder.encode("\u663D")}, {name:"Error",message:"EncodingError U+663D"});
assert.throws(() => {ms932Encoder.encode("\u663E")}, {name:"Error",message:"EncodingError U+663E"});
r = r && ([...ms932Encoder.encode("昿")].join(",") === "158,69"); // U+663F
assert.throws(() => {ms932Encoder.encode("\u6640")}, {name:"Error",message:"EncodingError U+6640"});
r = r && ([...ms932Encoder.encode("晁時晃晄")].join(",") === "157,232,142,158,141,87,157,230"); // U+6641
assert.throws(() => {ms932Encoder.encode("\u6645")}, {name:"Error",message:"EncodingError U+6645"});
assert.throws(() => {ms932Encoder.encode("\u6646")}, {name:"Error",message:"EncodingError U+6646"});
assert.throws(() => {ms932Encoder.encode("\u6647")}, {name:"Error",message:"EncodingError U+6647"});
assert.throws(() => {ms932Encoder.encode("\u6648")}, {name:"Error",message:"EncodingError U+6648"});
r = r && ([...ms932Encoder.encode("晉")].join(",") === "157,231"); // U+6649
assert.throws(() => {ms932Encoder.encode("\u664A")}, {name:"Error",message:"EncodingError U+664A"});
r = r && ([...ms932Encoder.encode("晋")].join(",") === "144,87"); // U+664B
assert.throws(() => {ms932Encoder.encode("\u664C")}, {name:"Error",message:"EncodingError U+664C"});
assert.throws(() => {ms932Encoder.encode("\u664D")}, {name:"Error",message:"EncodingError U+664D"});
assert.throws(() => {ms932Encoder.encode("\u664E")}, {name:"Error",message:"EncodingError U+664E"});
r = r && ([...ms932Encoder.encode("晏")].join(",") === "157,229"); // U+664F
assert.throws(() => {ms932Encoder.encode("\u6650")}, {name:"Error",message:"EncodingError U+6650"});
assert.throws(() => {ms932Encoder.encode("\u6651")}, {name:"Error",message:"EncodingError U+6651"});
r = r && ([...ms932Encoder.encode("晒")].join(",") === "142,78"); // U+6652
assert.throws(() => {ms932Encoder.encode("\u6653")}, {name:"Error",message:"EncodingError U+6653"});
assert.throws(() => {ms932Encoder.encode("\u6654")}, {name:"Error",message:"EncodingError U+6654"});
assert.throws(() => {ms932Encoder.encode("\u6655")}, {name:"Error",message:"EncodingError U+6655"});
assert.throws(() => {ms932Encoder.encode("\u6656")}, {name:"Error",message:"EncodingError U+6656"});
r = r && ([...ms932Encoder.encode("晗")].join(",") === "250,214"); // U+6657
assert.throws(() => {ms932Encoder.encode("\u6658")}, {name:"Error",message:"EncodingError U+6658"});
r = r && ([...ms932Encoder.encode("晙")].join(",") === "250,215"); // U+6659
assert.throws(() => {ms932Encoder.encode("\u665A")}, {name:"Error",message:"EncodingError U+665A"});
assert.throws(() => {ms932Encoder.encode("\u665B")}, {name:"Error",message:"EncodingError U+665B"});
assert.throws(() => {ms932Encoder.encode("\u665C")}, {name:"Error",message:"EncodingError U+665C"});
r = r && ([...ms932Encoder.encode("晝晞晟")].join(",") === "157,234,157,233,157,238"); // U+665D
assert.throws(() => {ms932Encoder.encode("\u6660")}, {name:"Error",message:"EncodingError U+6660"});
assert.throws(() => {ms932Encoder.encode("\u6661")}, {name:"Error",message:"EncodingError U+6661"});
r = r && ([...ms932Encoder.encode("晢")].join(",") === "157,239"); // U+6662
assert.throws(() => {ms932Encoder.encode("\u6663")}, {name:"Error",message:"EncodingError U+6663"});
r = r && ([...ms932Encoder.encode("晤晥晦晧晨晩")].join(",") === "157,235,250,213,138,65,157,236,157,237,148,211"); // U+6664
assert.throws(() => {ms932Encoder.encode("\u666A")}, {name:"Error",message:"EncodingError U+666A"});
assert.throws(() => {ms932Encoder.encode("\u666B")}, {name:"Error",message:"EncodingError U+666B"});
assert.throws(() => {ms932Encoder.encode("\u666C")}, {name:"Error",message:"EncodingError U+666C"});
assert.throws(() => {ms932Encoder.encode("\u666D")}, {name:"Error",message:"EncodingError U+666D"});
r = r && ([...ms932Encoder.encode("普景晰")].join(",") === "149,129,140,105,157,240"); // U+666E
assert.throws(() => {ms932Encoder.encode("\u6671")}, {name:"Error",message:"EncodingError U+6671"});
assert.throws(() => {ms932Encoder.encode("\u6672")}, {name:"Error",message:"EncodingError U+6672"});
r = r && ([...ms932Encoder.encode("晳晴")].join(",") === "250,217,144,176"); // U+6673
assert.throws(() => {ms932Encoder.encode("\u6675")}, {name:"Error",message:"EncodingError U+6675"});
r = r && ([...ms932Encoder.encode("晶")].join(",") === "143,187"); // U+6676
assert.throws(() => {ms932Encoder.encode("\u6677")}, {name:"Error",message:"EncodingError U+6677"});
assert.throws(() => {ms932Encoder.encode("\u6678")}, {name:"Error",message:"EncodingError U+6678"});
assert.throws(() => {ms932Encoder.encode("\u6679")}, {name:"Error",message:"EncodingError U+6679"});
r = r && ([...ms932Encoder.encode("智")].join(",") === "146,113"); // U+667A
assert.throws(() => {ms932Encoder.encode("\u667B")}, {name:"Error",message:"EncodingError U+667B"});
assert.throws(() => {ms932Encoder.encode("\u667C")}, {name:"Error",message:"EncodingError U+667C"});
assert.throws(() => {ms932Encoder.encode("\u667D")}, {name:"Error",message:"EncodingError U+667D"});
assert.throws(() => {ms932Encoder.encode("\u667E")}, {name:"Error",message:"EncodingError U+667E"});
assert.throws(() => {ms932Encoder.encode("\u667F")}, {name:"Error",message:"EncodingError U+667F"});
assert.throws(() => {ms932Encoder.encode("\u6680")}, {name:"Error",message:"EncodingError U+6680"});
r = r && ([...ms932Encoder.encode("暁")].join(",") === "139,197"); // U+6681
assert.throws(() => {ms932Encoder.encode("\u6682")}, {name:"Error",message:"EncodingError U+6682"});
r = r && ([...ms932Encoder.encode("暃暄")].join(",") === "157,241,157,245"); // U+6683
assert.throws(() => {ms932Encoder.encode("\u6685")}, {name:"Error",message:"EncodingError U+6685"});
assert.throws(() => {ms932Encoder.encode("\u6686")}, {name:"Error",message:"EncodingError U+6686"});
r = r && ([...ms932Encoder.encode("暇暈暉")].join(",") === "137,201,157,242,157,244"); // U+6687
assert.throws(() => {ms932Encoder.encode("\u668A")}, {name:"Error",message:"EncodingError U+668A"});
assert.throws(() => {ms932Encoder.encode("\u668B")}, {name:"Error",message:"EncodingError U+668B"});
assert.throws(() => {ms932Encoder.encode("\u668C")}, {name:"Error",message:"EncodingError U+668C"});
assert.throws(() => {ms932Encoder.encode("\u668D")}, {name:"Error",message:"EncodingError U+668D"});
r = r && ([...ms932Encoder.encode("暎")].join(",") === "157,243"); // U+668E
assert.throws(() => {ms932Encoder.encode("\u668F")}, {name:"Error",message:"EncodingError U+668F"});
assert.throws(() => {ms932Encoder.encode("\u6690")}, {name:"Error",message:"EncodingError U+6690"});
r = r && ([...ms932Encoder.encode("暑")].join(",") === "143,139"); // U+6691
assert.throws(() => {ms932Encoder.encode("\u6692")}, {name:"Error",message:"EncodingError U+6692"});
assert.throws(() => {ms932Encoder.encode("\u6693")}, {name:"Error",message:"EncodingError U+6693"});
assert.throws(() => {ms932Encoder.encode("\u6694")}, {name:"Error",message:"EncodingError U+6694"});
assert.throws(() => {ms932Encoder.encode("\u6695")}, {name:"Error",message:"EncodingError U+6695"});
r = r && ([...ms932Encoder.encode("暖暗暘暙")].join(",") === "146,103,136,195,157,246,250,218"); // U+6696
assert.throws(() => {ms932Encoder.encode("\u669A")}, {name:"Error",message:"EncodingError U+669A"});
assert.throws(() => {ms932Encoder.encode("\u669B")}, {name:"Error",message:"EncodingError U+669B"});
assert.throws(() => {ms932Encoder.encode("\u669C")}, {name:"Error",message:"EncodingError U+669C"});
r = r && ([...ms932Encoder.encode("暝")].join(",") === "157,247"); // U+669D
assert.throws(() => {ms932Encoder.encode("\u669E")}, {name:"Error",message:"EncodingError U+669E"});
assert.throws(() => {ms932Encoder.encode("\u669F")}, {name:"Error",message:"EncodingError U+669F"});
r = r && ([...ms932Encoder.encode("暠")].join(",") === "250,219"); // U+66A0
assert.throws(() => {ms932Encoder.encode("\u66A1")}, {name:"Error",message:"EncodingError U+66A1"});
r = r && ([...ms932Encoder.encode("暢")].join(",") === "146,168"); // U+66A2
assert.throws(() => {ms932Encoder.encode("\u66A3")}, {name:"Error",message:"EncodingError U+66A3"});
assert.throws(() => {ms932Encoder.encode("\u66A4")}, {name:"Error",message:"EncodingError U+66A4"});
assert.throws(() => {ms932Encoder.encode("\u66A5")}, {name:"Error",message:"EncodingError U+66A5"});
r = r && ([...ms932Encoder.encode("暦")].join(",") === "151,239"); // U+66A6
assert.throws(() => {ms932Encoder.encode("\u66A7")}, {name:"Error",message:"EncodingError U+66A7"});
assert.throws(() => {ms932Encoder.encode("\u66A8")}, {name:"Error",message:"EncodingError U+66A8"});
assert.throws(() => {ms932Encoder.encode("\u66A9")}, {name:"Error",message:"EncodingError U+66A9"});
assert.throws(() => {ms932Encoder.encode("\u66AA")}, {name:"Error",message:"EncodingError U+66AA"});
r = r && ([...ms932Encoder.encode("暫")].join(",") === "142,98"); // U+66AB
assert.throws(() => {ms932Encoder.encode("\u66AC")}, {name:"Error",message:"EncodingError U+66AC"});
assert.throws(() => {ms932Encoder.encode("\u66AD")}, {name:"Error",message:"EncodingError U+66AD"});
r = r && ([...ms932Encoder.encode("暮")].join(",") === "149,233"); // U+66AE
assert.throws(() => {ms932Encoder.encode("\u66AF")}, {name:"Error",message:"EncodingError U+66AF"});
assert.throws(() => {ms932Encoder.encode("\u66B0")}, {name:"Error",message:"EncodingError U+66B0"});
assert.throws(() => {ms932Encoder.encode("\u66B1")}, {name:"Error",message:"EncodingError U+66B1"});
r = r && ([...ms932Encoder.encode("暲")].join(",") === "250,220"); // U+66B2
assert.throws(() => {ms932Encoder.encode("\u66B3")}, {name:"Error",message:"EncodingError U+66B3"});
r = r && ([...ms932Encoder.encode("暴")].join(",") === "150,92"); // U+66B4
assert.throws(() => {ms932Encoder.encode("\u66B5")}, {name:"Error",message:"EncodingError U+66B5"});
assert.throws(() => {ms932Encoder.encode("\u66B6")}, {name:"Error",message:"EncodingError U+66B6"});
assert.throws(() => {ms932Encoder.encode("\u66B7")}, {name:"Error",message:"EncodingError U+66B7"});
r = r && ([...ms932Encoder.encode("暸暹")].join(",") === "158,65,157,249"); // U+66B8
assert.throws(() => {ms932Encoder.encode("\u66BA")}, {name:"Error",message:"EncodingError U+66BA"});
assert.throws(() => {ms932Encoder.encode("\u66BB")}, {name:"Error",message:"EncodingError U+66BB"});
r = r && ([...ms932Encoder.encode("暼")].join(",") === "157,252"); // U+66BC
assert.throws(() => {ms932Encoder.encode("\u66BD")}, {name:"Error",message:"EncodingError U+66BD"});
r = r && ([...ms932Encoder.encode("暾暿")].join(",") === "157,251,250,221"); // U+66BE
assert.throws(() => {ms932Encoder.encode("\u66C0")}, {name:"Error",message:"EncodingError U+66C0"});
r = r && ([...ms932Encoder.encode("曁")].join(",") === "157,248"); // U+66C1
assert.throws(() => {ms932Encoder.encode("\u66C2")}, {name:"Error",message:"EncodingError U+66C2"});
assert.throws(() => {ms932Encoder.encode("\u66C3")}, {name:"Error",message:"EncodingError U+66C3"});
r = r && ([...ms932Encoder.encode("曄")].join(",") === "158,64"); // U+66C4
assert.throws(() => {ms932Encoder.encode("\u66C5")}, {name:"Error",message:"EncodingError U+66C5"});
assert.throws(() => {ms932Encoder.encode("\u66C6")}, {name:"Error",message:"EncodingError U+66C6"});
r = r && ([...ms932Encoder.encode("曇")].join(",") === "147,220"); // U+66C7
assert.throws(() => {ms932Encoder.encode("\u66C8")}, {name:"Error",message:"EncodingError U+66C8"});
r = r && ([...ms932Encoder.encode("曉")].join(",") === "157,250"); // U+66C9
assert.throws(() => {ms932Encoder.encode("\u66CA")}, {name:"Error",message:"EncodingError U+66CA"});
assert.throws(() => {ms932Encoder.encode("\u66CB")}, {name:"Error",message:"EncodingError U+66CB"});
assert.throws(() => {ms932Encoder.encode("\u66CC")}, {name:"Error",message:"EncodingError U+66CC"});
assert.throws(() => {ms932Encoder.encode("\u66CD")}, {name:"Error",message:"EncodingError U+66CD"});
assert.throws(() => {ms932Encoder.encode("\u66CE")}, {name:"Error",message:"EncodingError U+66CE"});
assert.throws(() => {ms932Encoder.encode("\u66CF")}, {name:"Error",message:"EncodingError U+66CF"});
assert.throws(() => {ms932Encoder.encode("\u66D0")}, {name:"Error",message:"EncodingError U+66D0"});
assert.throws(() => {ms932Encoder.encode("\u66D1")}, {name:"Error",message:"EncodingError U+66D1"});
assert.throws(() => {ms932Encoder.encode("\u66D2")}, {name:"Error",message:"EncodingError U+66D2"});
assert.throws(() => {ms932Encoder.encode("\u66D3")}, {name:"Error",message:"EncodingError U+66D3"});
assert.throws(() => {ms932Encoder.encode("\u66D4")}, {name:"Error",message:"EncodingError U+66D4"});
assert.throws(() => {ms932Encoder.encode("\u66D5")}, {name:"Error",message:"EncodingError U+66D5"});
r = r && ([...ms932Encoder.encode("曖")].join(",") === "158,66"); // U+66D6
assert.throws(() => {ms932Encoder.encode("\u66D7")}, {name:"Error",message:"EncodingError U+66D7"});
assert.throws(() => {ms932Encoder.encode("\u66D8")}, {name:"Error",message:"EncodingError U+66D8"});
r = r && ([...ms932Encoder.encode("曙曚")].join(",") === "143,140,158,67"); // U+66D9
assert.throws(() => {ms932Encoder.encode("\u66DB")}, {name:"Error",message:"EncodingError U+66DB"});
r = r && ([...ms932Encoder.encode("曜曝")].join(",") === "151,106,148,152"); // U+66DC
assert.throws(() => {ms932Encoder.encode("\u66DE")}, {name:"Error",message:"EncodingError U+66DE"});
assert.throws(() => {ms932Encoder.encode("\u66DF")}, {name:"Error",message:"EncodingError U+66DF"});
r = r && ([...ms932Encoder.encode("曠")].join(",") === "158,68"); // U+66E0
assert.throws(() => {ms932Encoder.encode("\u66E1")}, {name:"Error",message:"EncodingError U+66E1"});
assert.throws(() => {ms932Encoder.encode("\u66E2")}, {name:"Error",message:"EncodingError U+66E2"});
assert.throws(() => {ms932Encoder.encode("\u66E3")}, {name:"Error",message:"EncodingError U+66E3"});
assert.throws(() => {ms932Encoder.encode("\u66E4")}, {name:"Error",message:"EncodingError U+66E4"});
assert.throws(() => {ms932Encoder.encode("\u66E5")}, {name:"Error",message:"EncodingError U+66E5"});
r = r && ([...ms932Encoder.encode("曦")].join(",") === "158,70"); // U+66E6
assert.throws(() => {ms932Encoder.encode("\u66E7")}, {name:"Error",message:"EncodingError U+66E7"});
assert.throws(() => {ms932Encoder.encode("\u66E8")}, {name:"Error",message:"EncodingError U+66E8"});
r = r && ([...ms932Encoder.encode("曩")].join(",") === "158,71"); // U+66E9
assert.throws(() => {ms932Encoder.encode("\u66EA")}, {name:"Error",message:"EncodingError U+66EA"});
assert.throws(() => {ms932Encoder.encode("\u66EB")}, {name:"Error",message:"EncodingError U+66EB"});
assert.throws(() => {ms932Encoder.encode("\u66EC")}, {name:"Error",message:"EncodingError U+66EC"});
assert.throws(() => {ms932Encoder.encode("\u66ED")}, {name:"Error",message:"EncodingError U+66ED"});
assert.throws(() => {ms932Encoder.encode("\u66EE")}, {name:"Error",message:"EncodingError U+66EE"});
assert.throws(() => {ms932Encoder.encode("\u66EF")}, {name:"Error",message:"EncodingError U+66EF"});
r = r && ([...ms932Encoder.encode("曰")].join(",") === "158,72"); // U+66F0
assert.throws(() => {ms932Encoder.encode("\u66F1")}, {name:"Error",message:"EncodingError U+66F1"});
r = r && ([...ms932Encoder.encode("曲曳更曵")].join(",") === "139,200,137,103,141,88,158,73"); // U+66F2
assert.throws(() => {ms932Encoder.encode("\u66F6")}, {name:"Error",message:"EncodingError U+66F6"});
r = r && ([...ms932Encoder.encode("曷書曹曺曻曼曽曾替最")].join(",") === "158,74,143,145,145,130,250,222,250,102,153,214,145,93,145,92,145,214,141,197"); // U+66F7
assert.throws(() => {ms932Encoder.encode("\u6701")}, {name:"Error",message:"EncodingError U+6701"});
assert.throws(() => {ms932Encoder.encode("\u6702")}, {name:"Error",message:"EncodingError U+6702"});
r = r && ([...ms932Encoder.encode("會")].join(",") === "152,240"); // U+6703
assert.throws(() => {ms932Encoder.encode("\u6704")}, {name:"Error",message:"EncodingError U+6704"});
assert.throws(() => {ms932Encoder.encode("\u6705")}, {name:"Error",message:"EncodingError U+6705"});
assert.throws(() => {ms932Encoder.encode("\u6706")}, {name:"Error",message:"EncodingError U+6706"});
assert.throws(() => {ms932Encoder.encode("\u6707")}, {name:"Error",message:"EncodingError U+6707"});
r = r && ([...ms932Encoder.encode("月有")].join(",") === "140,142,151,76"); // U+6708
assert.throws(() => {ms932Encoder.encode("\u670A")}, {name:"Error",message:"EncodingError U+670A"});
r = r && ([...ms932Encoder.encode("朋")].join(",") === "149,252"); // U+670B
assert.throws(() => {ms932Encoder.encode("\u670C")}, {name:"Error",message:"EncodingError U+670C"});
r = r && ([...ms932Encoder.encode("服朎朏")].join(",") === "149,158,250,223,158,75"); // U+670D
assert.throws(() => {ms932Encoder.encode("\u6710")}, {name:"Error",message:"EncodingError U+6710"});
assert.throws(() => {ms932Encoder.encode("\u6711")}, {name:"Error",message:"EncodingError U+6711"});
assert.throws(() => {ms932Encoder.encode("\u6712")}, {name:"Error",message:"EncodingError U+6712"});
assert.throws(() => {ms932Encoder.encode("\u6713")}, {name:"Error",message:"EncodingError U+6713"});
r = r && ([...ms932Encoder.encode("朔朕朖朗")].join(",") === "141,241,146,189,158,76,152,78"); // U+6714
assert.throws(() => {ms932Encoder.encode("\u6718")}, {name:"Error",message:"EncodingError U+6718"});
assert.throws(() => {ms932Encoder.encode("\u6719")}, {name:"Error",message:"EncodingError U+6719"});
assert.throws(() => {ms932Encoder.encode("\u671A")}, {name:"Error",message:"EncodingError U+671A"});
r = r && ([...ms932Encoder.encode("望")].join(",") === "150,93"); // U+671B
assert.throws(() => {ms932Encoder.encode("\u671C")}, {name:"Error",message:"EncodingError U+671C"});
r = r && ([...ms932Encoder.encode("朝朞期")].join(",") === "146,169,158,77,138,250"); // U+671D
assert.throws(() => {ms932Encoder.encode("\u6720")}, {name:"Error",message:"EncodingError U+6720"});
assert.throws(() => {ms932Encoder.encode("\u6721")}, {name:"Error",message:"EncodingError U+6721"});
assert.throws(() => {ms932Encoder.encode("\u6722")}, {name:"Error",message:"EncodingError U+6722"});
assert.throws(() => {ms932Encoder.encode("\u6723")}, {name:"Error",message:"EncodingError U+6723"});
assert.throws(() => {ms932Encoder.encode("\u6724")}, {name:"Error",message:"EncodingError U+6724"});
assert.throws(() => {ms932Encoder.encode("\u6725")}, {name:"Error",message:"EncodingError U+6725"});
r = r && ([...ms932Encoder.encode("朦朧木")].join(",") === "158,78,158,79,150,216"); // U+6726
assert.throws(() => {ms932Encoder.encode("\u6729")}, {name:"Error",message:"EncodingError U+6729"});
r = r && ([...ms932Encoder.encode("未末本札朮")].join(",") === "150,162,150,150,150,123,142,68,158,81"); // U+672A
assert.throws(() => {ms932Encoder.encode("\u672F")}, {name:"Error",message:"EncodingError U+672F"});
assert.throws(() => {ms932Encoder.encode("\u6730")}, {name:"Error",message:"EncodingError U+6730"});
r = r && ([...ms932Encoder.encode("朱")].join(",") === "142,233"); // U+6731
assert.throws(() => {ms932Encoder.encode("\u6732")}, {name:"Error",message:"EncodingError U+6732"});
assert.throws(() => {ms932Encoder.encode("\u6733")}, {name:"Error",message:"EncodingError U+6733"});
r = r && ([...ms932Encoder.encode("朴")].join(",") === "150,112"); // U+6734
assert.throws(() => {ms932Encoder.encode("\u6735")}, {name:"Error",message:"EncodingError U+6735"});
r = r && ([...ms932Encoder.encode("朶朷朸")].join(",") === "158,83,158,86,158,85"); // U+6736
assert.throws(() => {ms932Encoder.encode("\u6739")}, {name:"Error",message:"EncodingError U+6739"});
r = r && ([...ms932Encoder.encode("机")].join(",") === "138,247"); // U+673A
assert.throws(() => {ms932Encoder.encode("\u673B")}, {name:"Error",message:"EncodingError U+673B"});
assert.throws(() => {ms932Encoder.encode("\u673C")}, {name:"Error",message:"EncodingError U+673C"});
r = r && ([...ms932Encoder.encode("朽")].join(",") === "139,128"); // U+673D
assert.throws(() => {ms932Encoder.encode("\u673E")}, {name:"Error",message:"EncodingError U+673E"});
r = r && ([...ms932Encoder.encode("朿")].join(",") === "158,82"); // U+673F
assert.throws(() => {ms932Encoder.encode("\u6740")}, {name:"Error",message:"EncodingError U+6740"});
r = r && ([...ms932Encoder.encode("杁")].join(",") === "158,84"); // U+6741
assert.throws(() => {ms932Encoder.encode("\u6742")}, {name:"Error",message:"EncodingError U+6742"});
assert.throws(() => {ms932Encoder.encode("\u6743")}, {name:"Error",message:"EncodingError U+6743"});
assert.throws(() => {ms932Encoder.encode("\u6744")}, {name:"Error",message:"EncodingError U+6744"});
assert.throws(() => {ms932Encoder.encode("\u6745")}, {name:"Error",message:"EncodingError U+6745"});
r = r && ([...ms932Encoder.encode("杆")].join(",") === "158,87"); // U+6746
assert.throws(() => {ms932Encoder.encode("\u6747")}, {name:"Error",message:"EncodingError U+6747"});
assert.throws(() => {ms932Encoder.encode("\u6748")}, {name:"Error",message:"EncodingError U+6748"});
r = r && ([...ms932Encoder.encode("杉")].join(",") === "144,153"); // U+6749
assert.throws(() => {ms932Encoder.encode("\u674A")}, {name:"Error",message:"EncodingError U+674A"});
assert.throws(() => {ms932Encoder.encode("\u674B")}, {name:"Error",message:"EncodingError U+674B"});
assert.throws(() => {ms932Encoder.encode("\u674C")}, {name:"Error",message:"EncodingError U+674C"});
assert.throws(() => {ms932Encoder.encode("\u674D")}, {name:"Error",message:"EncodingError U+674D"});
r = r && ([...ms932Encoder.encode("李杏材村")].join(",") === "151,155,136,199,141,222,145,186"); // U+674E
assert.throws(() => {ms932Encoder.encode("\u6752")}, {name:"Error",message:"EncodingError U+6752"});
r = r && ([...ms932Encoder.encode("杓")].join(",") === "142,219"); // U+6753
assert.throws(() => {ms932Encoder.encode("\u6754")}, {name:"Error",message:"EncodingError U+6754"});
assert.throws(() => {ms932Encoder.encode("\u6755")}, {name:"Error",message:"EncodingError U+6755"});
r = r && ([...ms932Encoder.encode("杖")].join(",") === "143,241"); // U+6756
assert.throws(() => {ms932Encoder.encode("\u6757")}, {name:"Error",message:"EncodingError U+6757"});
assert.throws(() => {ms932Encoder.encode("\u6758")}, {name:"Error",message:"EncodingError U+6758"});
r = r && ([...ms932Encoder.encode("杙")].join(",") === "158,90"); // U+6759
assert.throws(() => {ms932Encoder.encode("\u675A")}, {name:"Error",message:"EncodingError U+675A"});
assert.throws(() => {ms932Encoder.encode("\u675B")}, {name:"Error",message:"EncodingError U+675B"});
r = r && ([...ms932Encoder.encode("杜")].join(",") === "147,109"); // U+675C
assert.throws(() => {ms932Encoder.encode("\u675D")}, {name:"Error",message:"EncodingError U+675D"});
r = r && ([...ms932Encoder.encode("杞束杠条杢杣杤来杦")].join(",") === "158,88,145,169,158,89,143,240,150,219,158,91,158,92,151,136,250,225"); // U+675E
assert.throws(() => {ms932Encoder.encode("\u6767")}, {name:"Error",message:"EncodingError U+6767"});
assert.throws(() => {ms932Encoder.encode("\u6768")}, {name:"Error",message:"EncodingError U+6768"});
assert.throws(() => {ms932Encoder.encode("\u6769")}, {name:"Error",message:"EncodingError U+6769"});
r = r && ([...ms932Encoder.encode("杪")].join(",") === "158,97"); // U+676A
assert.throws(() => {ms932Encoder.encode("\u676B")}, {name:"Error",message:"EncodingError U+676B"});
assert.throws(() => {ms932Encoder.encode("\u676C")}, {name:"Error",message:"EncodingError U+676C"});
r = r && ([...ms932Encoder.encode("杭")].join(",") === "141,89"); // U+676D
assert.throws(() => {ms932Encoder.encode("\u676E")}, {name:"Error",message:"EncodingError U+676E"});
r = r && ([...ms932Encoder.encode("杯杰東杲杳")].join(",") === "148,116,158,94,147,140,157,220,157,224"); // U+676F
assert.throws(() => {ms932Encoder.encode("\u6774")}, {name:"Error",message:"EncodingError U+6774"});
r = r && ([...ms932Encoder.encode("杵")].join(",") === "139,110"); // U+6775
assert.throws(() => {ms932Encoder.encode("\u6776")}, {name:"Error",message:"EncodingError U+6776"});
r = r && ([...ms932Encoder.encode("杷")].join(",") === "148,102"); // U+6777
assert.throws(() => {ms932Encoder.encode("\u6778")}, {name:"Error",message:"EncodingError U+6778"});
assert.throws(() => {ms932Encoder.encode("\u6779")}, {name:"Error",message:"EncodingError U+6779"});
assert.throws(() => {ms932Encoder.encode("\u677A")}, {name:"Error",message:"EncodingError U+677A"});
assert.throws(() => {ms932Encoder.encode("\u677B")}, {name:"Error",message:"EncodingError U+677B"});
r = r && ([...ms932Encoder.encode("杼")].join(",") === "158,96"); // U+677C
assert.throws(() => {ms932Encoder.encode("\u677D")}, {name:"Error",message:"EncodingError U+677D"});
r = r && ([...ms932Encoder.encode("松板")].join(",") === "143,188,148,194"); // U+677E
assert.throws(() => {ms932Encoder.encode("\u6780")}, {name:"Error",message:"EncodingError U+6780"});
assert.throws(() => {ms932Encoder.encode("\u6781")}, {name:"Error",message:"EncodingError U+6781"});
assert.throws(() => {ms932Encoder.encode("\u6782")}, {name:"Error",message:"EncodingError U+6782"});
assert.throws(() => {ms932Encoder.encode("\u6783")}, {name:"Error",message:"EncodingError U+6783"});
assert.throws(() => {ms932Encoder.encode("\u6784")}, {name:"Error",message:"EncodingError U+6784"});
r = r && ([...ms932Encoder.encode("枅")].join(",") === "158,102"); // U+6785
assert.throws(() => {ms932Encoder.encode("\u6786")}, {name:"Error",message:"EncodingError U+6786"});
r = r && ([...ms932Encoder.encode("枇")].join(",") === "148,248"); // U+6787
assert.throws(() => {ms932Encoder.encode("\u6788")}, {name:"Error",message:"EncodingError U+6788"});
r = r && ([...ms932Encoder.encode("枉")].join(",") === "158,93"); // U+6789
assert.throws(() => {ms932Encoder.encode("\u678A")}, {name:"Error",message:"EncodingError U+678A"});
r = r && ([...ms932Encoder.encode("枋枌")].join(",") === "158,99,158,98"); // U+678B
assert.throws(() => {ms932Encoder.encode("\u678D")}, {name:"Error",message:"EncodingError U+678D"});
assert.throws(() => {ms932Encoder.encode("\u678E")}, {name:"Error",message:"EncodingError U+678E"});
assert.throws(() => {ms932Encoder.encode("\u678F")}, {name:"Error",message:"EncodingError U+678F"});
r = r && ([...ms932Encoder.encode("析")].join(",") === "144,205"); // U+6790
assert.throws(() => {ms932Encoder.encode("\u6791")}, {name:"Error",message:"EncodingError U+6791"});
assert.throws(() => {ms932Encoder.encode("\u6792")}, {name:"Error",message:"EncodingError U+6792"});
assert.throws(() => {ms932Encoder.encode("\u6793")}, {name:"Error",message:"EncodingError U+6793"});
assert.throws(() => {ms932Encoder.encode("\u6794")}, {name:"Error",message:"EncodingError U+6794"});
r = r && ([...ms932Encoder.encode("枕")].join(",") === "150,141"); // U+6795
assert.throws(() => {ms932Encoder.encode("\u6796")}, {name:"Error",message:"EncodingError U+6796"});
r = r && ([...ms932Encoder.encode("林")].join(",") === "151,209"); // U+6797
assert.throws(() => {ms932Encoder.encode("\u6798")}, {name:"Error",message:"EncodingError U+6798"});
assert.throws(() => {ms932Encoder.encode("\u6799")}, {name:"Error",message:"EncodingError U+6799"});
r = r && ([...ms932Encoder.encode("枚")].join(",") === "150,135"); // U+679A
assert.throws(() => {ms932Encoder.encode("\u679B")}, {name:"Error",message:"EncodingError U+679B"});
r = r && ([...ms932Encoder.encode("果枝")].join(",") === "137,202,142,125"); // U+679C
assert.throws(() => {ms932Encoder.encode("\u679E")}, {name:"Error",message:"EncodingError U+679E"});
assert.throws(() => {ms932Encoder.encode("\u679F")}, {name:"Error",message:"EncodingError U+679F"});
r = r && ([...ms932Encoder.encode("枠枡枢")].join(",") === "152,103,158,101,144,149"); // U+67A0
assert.throws(() => {ms932Encoder.encode("\u67A3")}, {name:"Error",message:"EncodingError U+67A3"});
assert.throws(() => {ms932Encoder.encode("\u67A4")}, {name:"Error",message:"EncodingError U+67A4"});
assert.throws(() => {ms932Encoder.encode("\u67A5")}, {name:"Error",message:"EncodingError U+67A5"});
r = r && ([...ms932Encoder.encode("枦")].join(",") === "158,100"); // U+67A6
assert.throws(() => {ms932Encoder.encode("\u67A7")}, {name:"Error",message:"EncodingError U+67A7"});
assert.throws(() => {ms932Encoder.encode("\u67A8")}, {name:"Error",message:"EncodingError U+67A8"});
r = r && ([...ms932Encoder.encode("枩")].join(",") === "158,95"); // U+67A9
assert.throws(() => {ms932Encoder.encode("\u67AA")}, {name:"Error",message:"EncodingError U+67AA"});
assert.throws(() => {ms932Encoder.encode("\u67AB")}, {name:"Error",message:"EncodingError U+67AB"});
assert.throws(() => {ms932Encoder.encode("\u67AC")}, {name:"Error",message:"EncodingError U+67AC"});
assert.throws(() => {ms932Encoder.encode("\u67AD")}, {name:"Error",message:"EncodingError U+67AD"});
assert.throws(() => {ms932Encoder.encode("\u67AE")}, {name:"Error",message:"EncodingError U+67AE"});
r = r && ([...ms932Encoder.encode("枯")].join(",") === "140,205"); // U+67AF
assert.throws(() => {ms932Encoder.encode("\u67B0")}, {name:"Error",message:"EncodingError U+67B0"});
assert.throws(() => {ms932Encoder.encode("\u67B1")}, {name:"Error",message:"EncodingError U+67B1"});
assert.throws(() => {ms932Encoder.encode("\u67B2")}, {name:"Error",message:"EncodingError U+67B2"});
r = r && ([...ms932Encoder.encode("枳枴")].join(",") === "158,107,158,105"); // U+67B3
assert.throws(() => {ms932Encoder.encode("\u67B5")}, {name:"Error",message:"EncodingError U+67B5"});
r = r && ([...ms932Encoder.encode("架枷枸枹")].join(",") === "137,203,158,103,158,109,158,115"); // U+67B6
assert.throws(() => {ms932Encoder.encode("\u67BA")}, {name:"Error",message:"EncodingError U+67BA"});
r = r && ([...ms932Encoder.encode("枻")].join(",") === "250,226"); // U+67BB
assert.throws(() => {ms932Encoder.encode("\u67BC")}, {name:"Error",message:"EncodingError U+67BC"});
assert.throws(() => {ms932Encoder.encode("\u67BD")}, {name:"Error",message:"EncodingError U+67BD"});
assert.throws(() => {ms932Encoder.encode("\u67BE")}, {name:"Error",message:"EncodingError U+67BE"});
assert.throws(() => {ms932Encoder.encode("\u67BF")}, {name:"Error",message:"EncodingError U+67BF"});
r = r && ([...ms932Encoder.encode("柀柁")].join(",") === "250,228,145,198"); // U+67C0
assert.throws(() => {ms932Encoder.encode("\u67C2")}, {name:"Error",message:"EncodingError U+67C2"});
assert.throws(() => {ms932Encoder.encode("\u67C3")}, {name:"Error",message:"EncodingError U+67C3"});
r = r && ([...ms932Encoder.encode("柄")].join(",") === "149,191"); // U+67C4
assert.throws(() => {ms932Encoder.encode("\u67C5")}, {name:"Error",message:"EncodingError U+67C5"});
r = r && ([...ms932Encoder.encode("柆")].join(",") === "158,117"); // U+67C6
assert.throws(() => {ms932Encoder.encode("\u67C7")}, {name:"Error",message:"EncodingError U+67C7"});
assert.throws(() => {ms932Encoder.encode("\u67C8")}, {name:"Error",message:"EncodingError U+67C8"});
assert.throws(() => {ms932Encoder.encode("\u67C9")}, {name:"Error",message:"EncodingError U+67C9"});
r = r && ([...ms932Encoder.encode("柊")].join(",") === "149,65"); // U+67CA
assert.throws(() => {ms932Encoder.encode("\u67CB")}, {name:"Error",message:"EncodingError U+67CB"});
assert.throws(() => {ms932Encoder.encode("\u67CC")}, {name:"Error",message:"EncodingError U+67CC"});
assert.throws(() => {ms932Encoder.encode("\u67CD")}, {name:"Error",message:"EncodingError U+67CD"});
r = r && ([...ms932Encoder.encode("柎柏某柑")].join(",") === "158,116,148,144,150,94,138,185"); // U+67CE
assert.throws(() => {ms932Encoder.encode("\u67D2")}, {name:"Error",message:"EncodingError U+67D2"});
r = r && ([...ms932Encoder.encode("染柔")].join(",") === "144,245,143,95"); // U+67D3
assert.throws(() => {ms932Encoder.encode("\u67D5")}, {name:"Error",message:"EncodingError U+67D5"});
assert.throws(() => {ms932Encoder.encode("\u67D6")}, {name:"Error",message:"EncodingError U+67D6"});
assert.throws(() => {ms932Encoder.encode("\u67D7")}, {name:"Error",message:"EncodingError U+67D7"});
r = r && ([...ms932Encoder.encode("柘")].join(",") === "146,209"); // U+67D8
assert.throws(() => {ms932Encoder.encode("\u67D9")}, {name:"Error",message:"EncodingError U+67D9"});
r = r && ([...ms932Encoder.encode("柚")].join(",") === "151,77"); // U+67DA
assert.throws(() => {ms932Encoder.encode("\u67DB")}, {name:"Error",message:"EncodingError U+67DB"});
assert.throws(() => {ms932Encoder.encode("\u67DC")}, {name:"Error",message:"EncodingError U+67DC"});
r = r && ([...ms932Encoder.encode("柝柞")].join(",") === "158,112,158,111"); // U+67DD
assert.throws(() => {ms932Encoder.encode("\u67DF")}, {name:"Error",message:"EncodingError U+67DF"});
assert.throws(() => {ms932Encoder.encode("\u67E0")}, {name:"Error",message:"EncodingError U+67E0"});
assert.throws(() => {ms932Encoder.encode("\u67E1")}, {name:"Error",message:"EncodingError U+67E1"});
r = r && ([...ms932Encoder.encode("柢")].join(",") === "158,113"); // U+67E2
assert.throws(() => {ms932Encoder.encode("\u67E3")}, {name:"Error",message:"EncodingError U+67E3"});
r = r && ([...ms932Encoder.encode("柤")].join(",") === "158,110"); // U+67E4
assert.throws(() => {ms932Encoder.encode("\u67E5")}, {name:"Error",message:"EncodingError U+67E5"});
assert.throws(() => {ms932Encoder.encode("\u67E6")}, {name:"Error",message:"EncodingError U+67E6"});
r = r && ([...ms932Encoder.encode("柧")].join(",") === "158,118"); // U+67E7
assert.throws(() => {ms932Encoder.encode("\u67E8")}, {name:"Error",message:"EncodingError U+67E8"});
r = r && ([...ms932Encoder.encode("柩")].join(",") === "158,108"); // U+67E9
assert.throws(() => {ms932Encoder.encode("\u67EA")}, {name:"Error",message:"EncodingError U+67EA"});
assert.throws(() => {ms932Encoder.encode("\u67EB")}, {name:"Error",message:"EncodingError U+67EB"});
r = r && ([...ms932Encoder.encode("柬")].join(",") === "158,106"); // U+67EC
assert.throws(() => {ms932Encoder.encode("\u67ED")}, {name:"Error",message:"EncodingError U+67ED"});
r = r && ([...ms932Encoder.encode("柮柯")].join(",") === "158,114,158,104"); // U+67EE
assert.throws(() => {ms932Encoder.encode("\u67F0")}, {name:"Error",message:"EncodingError U+67F0"});
r = r && ([...ms932Encoder.encode("柱")].join(",") === "146,140"); // U+67F1
assert.throws(() => {ms932Encoder.encode("\u67F2")}, {name:"Error",message:"EncodingError U+67F2"});
r = r && ([...ms932Encoder.encode("柳柴柵")].join(",") === "150,246,142,196,141,242"); // U+67F3
assert.throws(() => {ms932Encoder.encode("\u67F6")}, {name:"Error",message:"EncodingError U+67F6"});
assert.throws(() => {ms932Encoder.encode("\u67F7")}, {name:"Error",message:"EncodingError U+67F7"});
assert.throws(() => {ms932Encoder.encode("\u67F8")}, {name:"Error",message:"EncodingError U+67F8"});
assert.throws(() => {ms932Encoder.encode("\u67F9")}, {name:"Error",message:"EncodingError U+67F9"});
assert.throws(() => {ms932Encoder.encode("\u67FA")}, {name:"Error",message:"EncodingError U+67FA"});
r = r && ([...ms932Encoder.encode("査")].join(",") === "141,184"); // U+67FB
assert.throws(() => {ms932Encoder.encode("\u67FC")}, {name:"Error",message:"EncodingError U+67FC"});
assert.throws(() => {ms932Encoder.encode("\u67FD")}, {name:"Error",message:"EncodingError U+67FD"});
r = r && ([...ms932Encoder.encode("柾柿")].join(",") === "150,143,138,96"); // U+67FE

assert.strictEqual(r, true);

  });

});
