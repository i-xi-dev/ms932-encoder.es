import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "../../dist/index.js";

describe("Ms932Encoder.prototype.encode 7", () => {

  it("encode(string) - U+6400-U+67FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u6400")}).to.throw(Error, "EncodingError U+6400");
expect(() => {ms932Encoder.encode("\u6401")}).to.throw(Error, "EncodingError U+6401");
expect(() => {ms932Encoder.encode("\u6402")}).to.throw(Error, "EncodingError U+6402");
expect(() => {ms932Encoder.encode("\u6403")}).to.throw(Error, "EncodingError U+6403");
expect(() => {ms932Encoder.encode("\u6404")}).to.throw(Error, "EncodingError U+6404");
expect(() => {ms932Encoder.encode("\u6405")}).to.throw(Error, "EncodingError U+6405");
r = r && ([...ms932Encoder.encode("搆")].join(",") === "157,140"); // U+6406
expect(() => {ms932Encoder.encode("\u6407")}).to.throw(Error, "EncodingError U+6407");
expect(() => {ms932Encoder.encode("\u6408")}).to.throw(Error, "EncodingError U+6408");
expect(() => {ms932Encoder.encode("\u6409")}).to.throw(Error, "EncodingError U+6409");
expect(() => {ms932Encoder.encode("\u640A")}).to.throw(Error, "EncodingError U+640A");
expect(() => {ms932Encoder.encode("\u640B")}).to.throw(Error, "EncodingError U+640B");
expect(() => {ms932Encoder.encode("\u640C")}).to.throw(Error, "EncodingError U+640C");
r = r && ([...ms932Encoder.encode("損")].join(",") === "145,185"); // U+640D
expect(() => {ms932Encoder.encode("\u640E")}).to.throw(Error, "EncodingError U+640E");
r = r && ([...ms932Encoder.encode("搏")].join(",") === "157,147"); // U+640F
expect(() => {ms932Encoder.encode("\u6410")}).to.throw(Error, "EncodingError U+6410");
expect(() => {ms932Encoder.encode("\u6411")}).to.throw(Error, "EncodingError U+6411");
expect(() => {ms932Encoder.encode("\u6412")}).to.throw(Error, "EncodingError U+6412");
r = r && ([...ms932Encoder.encode("搓")].join(",") === "157,141"); // U+6413
expect(() => {ms932Encoder.encode("\u6414")}).to.throw(Error, "EncodingError U+6414");
expect(() => {ms932Encoder.encode("\u6415")}).to.throw(Error, "EncodingError U+6415");
r = r && ([...ms932Encoder.encode("搖搗")].join(",") === "157,138,157,145"); // U+6416
expect(() => {ms932Encoder.encode("\u6418")}).to.throw(Error, "EncodingError U+6418");
expect(() => {ms932Encoder.encode("\u6419")}).to.throw(Error, "EncodingError U+6419");
expect(() => {ms932Encoder.encode("\u641A")}).to.throw(Error, "EncodingError U+641A");
expect(() => {ms932Encoder.encode("\u641B")}).to.throw(Error, "EncodingError U+641B");
r = r && ([...ms932Encoder.encode("搜")].join(",") === "157,114"); // U+641C
expect(() => {ms932Encoder.encode("\u641D")}).to.throw(Error, "EncodingError U+641D");
expect(() => {ms932Encoder.encode("\u641E")}).to.throw(Error, "EncodingError U+641E");
expect(() => {ms932Encoder.encode("\u641F")}).to.throw(Error, "EncodingError U+641F");
expect(() => {ms932Encoder.encode("\u6420")}).to.throw(Error, "EncodingError U+6420");
expect(() => {ms932Encoder.encode("\u6421")}).to.throw(Error, "EncodingError U+6421");
expect(() => {ms932Encoder.encode("\u6422")}).to.throw(Error, "EncodingError U+6422");
expect(() => {ms932Encoder.encode("\u6423")}).to.throw(Error, "EncodingError U+6423");
expect(() => {ms932Encoder.encode("\u6424")}).to.throw(Error, "EncodingError U+6424");
expect(() => {ms932Encoder.encode("\u6425")}).to.throw(Error, "EncodingError U+6425");
r = r && ([...ms932Encoder.encode("搦")].join(",") === "157,142"); // U+6426
expect(() => {ms932Encoder.encode("\u6427")}).to.throw(Error, "EncodingError U+6427");
r = r && ([...ms932Encoder.encode("搨")].join(",") === "157,146"); // U+6428
expect(() => {ms932Encoder.encode("\u6429")}).to.throw(Error, "EncodingError U+6429");
expect(() => {ms932Encoder.encode("\u642A")}).to.throw(Error, "EncodingError U+642A");
expect(() => {ms932Encoder.encode("\u642B")}).to.throw(Error, "EncodingError U+642B");
r = r && ([...ms932Encoder.encode("搬搭")].join(",") === "148,192,147,139"); // U+642C
expect(() => {ms932Encoder.encode("\u642E")}).to.throw(Error, "EncodingError U+642E");
expect(() => {ms932Encoder.encode("\u642F")}).to.throw(Error, "EncodingError U+642F");
expect(() => {ms932Encoder.encode("\u6430")}).to.throw(Error, "EncodingError U+6430");
expect(() => {ms932Encoder.encode("\u6431")}).to.throw(Error, "EncodingError U+6431");
expect(() => {ms932Encoder.encode("\u6432")}).to.throw(Error, "EncodingError U+6432");
expect(() => {ms932Encoder.encode("\u6433")}).to.throw(Error, "EncodingError U+6433");
r = r && ([...ms932Encoder.encode("搴")].join(",") === "157,139"); // U+6434
expect(() => {ms932Encoder.encode("\u6435")}).to.throw(Error, "EncodingError U+6435");
r = r && ([...ms932Encoder.encode("搶")].join(",") === "157,143"); // U+6436
expect(() => {ms932Encoder.encode("\u6437")}).to.throw(Error, "EncodingError U+6437");
expect(() => {ms932Encoder.encode("\u6438")}).to.throw(Error, "EncodingError U+6438");
expect(() => {ms932Encoder.encode("\u6439")}).to.throw(Error, "EncodingError U+6439");
r = r && ([...ms932Encoder.encode("携")].join(",") === "140,103"); // U+643A
expect(() => {ms932Encoder.encode("\u643B")}).to.throw(Error, "EncodingError U+643B");
expect(() => {ms932Encoder.encode("\u643C")}).to.throw(Error, "EncodingError U+643C");
expect(() => {ms932Encoder.encode("\u643D")}).to.throw(Error, "EncodingError U+643D");
r = r && ([...ms932Encoder.encode("搾")].join(",") === "141,239"); // U+643E
expect(() => {ms932Encoder.encode("\u643F")}).to.throw(Error, "EncodingError U+643F");
expect(() => {ms932Encoder.encode("\u6440")}).to.throw(Error, "EncodingError U+6440");
expect(() => {ms932Encoder.encode("\u6441")}).to.throw(Error, "EncodingError U+6441");
r = r && ([...ms932Encoder.encode("摂")].join(",") === "144,219"); // U+6442
expect(() => {ms932Encoder.encode("\u6443")}).to.throw(Error, "EncodingError U+6443");
expect(() => {ms932Encoder.encode("\u6444")}).to.throw(Error, "EncodingError U+6444");
expect(() => {ms932Encoder.encode("\u6445")}).to.throw(Error, "EncodingError U+6445");
expect(() => {ms932Encoder.encode("\u6446")}).to.throw(Error, "EncodingError U+6446");
expect(() => {ms932Encoder.encode("\u6447")}).to.throw(Error, "EncodingError U+6447");
expect(() => {ms932Encoder.encode("\u6448")}).to.throw(Error, "EncodingError U+6448");
expect(() => {ms932Encoder.encode("\u6449")}).to.throw(Error, "EncodingError U+6449");
expect(() => {ms932Encoder.encode("\u644A")}).to.throw(Error, "EncodingError U+644A");
expect(() => {ms932Encoder.encode("\u644B")}).to.throw(Error, "EncodingError U+644B");
expect(() => {ms932Encoder.encode("\u644C")}).to.throw(Error, "EncodingError U+644C");
expect(() => {ms932Encoder.encode("\u644D")}).to.throw(Error, "EncodingError U+644D");
r = r && ([...ms932Encoder.encode("摎")].join(",") === "157,151"); // U+644E
expect(() => {ms932Encoder.encode("\u644F")}).to.throw(Error, "EncodingError U+644F");
expect(() => {ms932Encoder.encode("\u6450")}).to.throw(Error, "EncodingError U+6450");
expect(() => {ms932Encoder.encode("\u6451")}).to.throw(Error, "EncodingError U+6451");
expect(() => {ms932Encoder.encode("\u6452")}).to.throw(Error, "EncodingError U+6452");
expect(() => {ms932Encoder.encode("\u6453")}).to.throw(Error, "EncodingError U+6453");
expect(() => {ms932Encoder.encode("\u6454")}).to.throw(Error, "EncodingError U+6454");
expect(() => {ms932Encoder.encode("\u6455")}).to.throw(Error, "EncodingError U+6455");
expect(() => {ms932Encoder.encode("\u6456")}).to.throw(Error, "EncodingError U+6456");
expect(() => {ms932Encoder.encode("\u6457")}).to.throw(Error, "EncodingError U+6457");
r = r && ([...ms932Encoder.encode("摘")].join(",") === "147,69"); // U+6458
expect(() => {ms932Encoder.encode("\u6459")}).to.throw(Error, "EncodingError U+6459");
expect(() => {ms932Encoder.encode("\u645A")}).to.throw(Error, "EncodingError U+645A");
expect(() => {ms932Encoder.encode("\u645B")}).to.throw(Error, "EncodingError U+645B");
expect(() => {ms932Encoder.encode("\u645C")}).to.throw(Error, "EncodingError U+645C");
expect(() => {ms932Encoder.encode("\u645D")}).to.throw(Error, "EncodingError U+645D");
expect(() => {ms932Encoder.encode("\u645E")}).to.throw(Error, "EncodingError U+645E");
expect(() => {ms932Encoder.encode("\u645F")}).to.throw(Error, "EncodingError U+645F");
r = r && ([...ms932Encoder.encode("摠")].join(",") === "250,202"); // U+6460
expect(() => {ms932Encoder.encode("\u6461")}).to.throw(Error, "EncodingError U+6461");
expect(() => {ms932Encoder.encode("\u6462")}).to.throw(Error, "EncodingError U+6462");
expect(() => {ms932Encoder.encode("\u6463")}).to.throw(Error, "EncodingError U+6463");
expect(() => {ms932Encoder.encode("\u6464")}).to.throw(Error, "EncodingError U+6464");
expect(() => {ms932Encoder.encode("\u6465")}).to.throw(Error, "EncodingError U+6465");
expect(() => {ms932Encoder.encode("\u6466")}).to.throw(Error, "EncodingError U+6466");
r = r && ([...ms932Encoder.encode("摧")].join(",") === "157,148"); // U+6467
expect(() => {ms932Encoder.encode("\u6468")}).to.throw(Error, "EncodingError U+6468");
r = r && ([...ms932Encoder.encode("摩")].join(",") === "150,128"); // U+6469
expect(() => {ms932Encoder.encode("\u646A")}).to.throw(Error, "EncodingError U+646A");
expect(() => {ms932Encoder.encode("\u646B")}).to.throw(Error, "EncodingError U+646B");
expect(() => {ms932Encoder.encode("\u646C")}).to.throw(Error, "EncodingError U+646C");
expect(() => {ms932Encoder.encode("\u646D")}).to.throw(Error, "EncodingError U+646D");
expect(() => {ms932Encoder.encode("\u646E")}).to.throw(Error, "EncodingError U+646E");
r = r && ([...ms932Encoder.encode("摯")].join(",") === "157,149"); // U+646F
expect(() => {ms932Encoder.encode("\u6470")}).to.throw(Error, "EncodingError U+6470");
expect(() => {ms932Encoder.encode("\u6471")}).to.throw(Error, "EncodingError U+6471");
expect(() => {ms932Encoder.encode("\u6472")}).to.throw(Error, "EncodingError U+6472");
expect(() => {ms932Encoder.encode("\u6473")}).to.throw(Error, "EncodingError U+6473");
expect(() => {ms932Encoder.encode("\u6474")}).to.throw(Error, "EncodingError U+6474");
expect(() => {ms932Encoder.encode("\u6475")}).to.throw(Error, "EncodingError U+6475");
r = r && ([...ms932Encoder.encode("摶")].join(",") === "157,150"); // U+6476
expect(() => {ms932Encoder.encode("\u6477")}).to.throw(Error, "EncodingError U+6477");
r = r && ([...ms932Encoder.encode("摸")].join(",") === "150,204"); // U+6478
expect(() => {ms932Encoder.encode("\u6479")}).to.throw(Error, "EncodingError U+6479");
r = r && ([...ms932Encoder.encode("摺")].join(",") === "144,160"); // U+647A
expect(() => {ms932Encoder.encode("\u647B")}).to.throw(Error, "EncodingError U+647B");
expect(() => {ms932Encoder.encode("\u647C")}).to.throw(Error, "EncodingError U+647C");
expect(() => {ms932Encoder.encode("\u647D")}).to.throw(Error, "EncodingError U+647D");
expect(() => {ms932Encoder.encode("\u647E")}).to.throw(Error, "EncodingError U+647E");
expect(() => {ms932Encoder.encode("\u647F")}).to.throw(Error, "EncodingError U+647F");
expect(() => {ms932Encoder.encode("\u6480")}).to.throw(Error, "EncodingError U+6480");
expect(() => {ms932Encoder.encode("\u6481")}).to.throw(Error, "EncodingError U+6481");
expect(() => {ms932Encoder.encode("\u6482")}).to.throw(Error, "EncodingError U+6482");
r = r && ([...ms932Encoder.encode("撃")].join(",") === "140,130"); // U+6483
expect(() => {ms932Encoder.encode("\u6484")}).to.throw(Error, "EncodingError U+6484");
expect(() => {ms932Encoder.encode("\u6485")}).to.throw(Error, "EncodingError U+6485");
expect(() => {ms932Encoder.encode("\u6486")}).to.throw(Error, "EncodingError U+6486");
expect(() => {ms932Encoder.encode("\u6487")}).to.throw(Error, "EncodingError U+6487");
r = r && ([...ms932Encoder.encode("撈")].join(",") === "157,157"); // U+6488
expect(() => {ms932Encoder.encode("\u6489")}).to.throw(Error, "EncodingError U+6489");
expect(() => {ms932Encoder.encode("\u648A")}).to.throw(Error, "EncodingError U+648A");
expect(() => {ms932Encoder.encode("\u648B")}).to.throw(Error, "EncodingError U+648B");
expect(() => {ms932Encoder.encode("\u648C")}).to.throw(Error, "EncodingError U+648C");
expect(() => {ms932Encoder.encode("\u648D")}).to.throw(Error, "EncodingError U+648D");
expect(() => {ms932Encoder.encode("\u648E")}).to.throw(Error, "EncodingError U+648E");
expect(() => {ms932Encoder.encode("\u648F")}).to.throw(Error, "EncodingError U+648F");
expect(() => {ms932Encoder.encode("\u6490")}).to.throw(Error, "EncodingError U+6490");
expect(() => {ms932Encoder.encode("\u6491")}).to.throw(Error, "EncodingError U+6491");
r = r && ([...ms932Encoder.encode("撒撓")].join(",") === "142,84,157,154"); // U+6492
expect(() => {ms932Encoder.encode("\u6494")}).to.throw(Error, "EncodingError U+6494");
r = r && ([...ms932Encoder.encode("撕")].join(",") === "157,153"); // U+6495
expect(() => {ms932Encoder.encode("\u6496")}).to.throw(Error, "EncodingError U+6496");
expect(() => {ms932Encoder.encode("\u6497")}).to.throw(Error, "EncodingError U+6497");
expect(() => {ms932Encoder.encode("\u6498")}).to.throw(Error, "EncodingError U+6498");
expect(() => {ms932Encoder.encode("\u6499")}).to.throw(Error, "EncodingError U+6499");
r = r && ([...ms932Encoder.encode("撚")].join(",") === "148,81"); // U+649A
expect(() => {ms932Encoder.encode("\u649B")}).to.throw(Error, "EncodingError U+649B");
expect(() => {ms932Encoder.encode("\u649C")}).to.throw(Error, "EncodingError U+649C");
r = r && ([...ms932Encoder.encode("撝撞")].join(",") === "250,203,147,179"); // U+649D
expect(() => {ms932Encoder.encode("\u649F")}).to.throw(Error, "EncodingError U+649F");
expect(() => {ms932Encoder.encode("\u64A0")}).to.throw(Error, "EncodingError U+64A0");
expect(() => {ms932Encoder.encode("\u64A1")}).to.throw(Error, "EncodingError U+64A1");
expect(() => {ms932Encoder.encode("\u64A2")}).to.throw(Error, "EncodingError U+64A2");
expect(() => {ms932Encoder.encode("\u64A3")}).to.throw(Error, "EncodingError U+64A3");
r = r && ([...ms932Encoder.encode("撤撥")].join(",") === "147,80,157,155"); // U+64A4
expect(() => {ms932Encoder.encode("\u64A6")}).to.throw(Error, "EncodingError U+64A6");
expect(() => {ms932Encoder.encode("\u64A7")}).to.throw(Error, "EncodingError U+64A7");
expect(() => {ms932Encoder.encode("\u64A8")}).to.throw(Error, "EncodingError U+64A8");
r = r && ([...ms932Encoder.encode("撩")].join(",") === "157,156"); // U+64A9
expect(() => {ms932Encoder.encode("\u64AA")}).to.throw(Error, "EncodingError U+64AA");
r = r && ([...ms932Encoder.encode("撫")].join(",") === "149,143"); // U+64AB
expect(() => {ms932Encoder.encode("\u64AC")}).to.throw(Error, "EncodingError U+64AC");
r = r && ([...ms932Encoder.encode("播撮")].join(",") === "148,100,142,66"); // U+64AD
expect(() => {ms932Encoder.encode("\u64AF")}).to.throw(Error, "EncodingError U+64AF");
r = r && ([...ms932Encoder.encode("撰")].join(",") === "144,239"); // U+64B0
expect(() => {ms932Encoder.encode("\u64B1")}).to.throw(Error, "EncodingError U+64B1");
r = r && ([...ms932Encoder.encode("撲")].join(",") === "150,111"); // U+64B2
expect(() => {ms932Encoder.encode("\u64B3")}).to.throw(Error, "EncodingError U+64B3");
expect(() => {ms932Encoder.encode("\u64B4")}).to.throw(Error, "EncodingError U+64B4");
expect(() => {ms932Encoder.encode("\u64B5")}).to.throw(Error, "EncodingError U+64B5");
expect(() => {ms932Encoder.encode("\u64B6")}).to.throw(Error, "EncodingError U+64B6");
expect(() => {ms932Encoder.encode("\u64B7")}).to.throw(Error, "EncodingError U+64B7");
expect(() => {ms932Encoder.encode("\u64B8")}).to.throw(Error, "EncodingError U+64B8");
r = r && ([...ms932Encoder.encode("撹")].join(",") === "138,104"); // U+64B9
expect(() => {ms932Encoder.encode("\u64BA")}).to.throw(Error, "EncodingError U+64BA");
r = r && ([...ms932Encoder.encode("撻撼")].join(",") === "157,163,157,158"); // U+64BB
expect(() => {ms932Encoder.encode("\u64BD")}).to.throw(Error, "EncodingError U+64BD");
expect(() => {ms932Encoder.encode("\u64BE")}).to.throw(Error, "EncodingError U+64BE");
expect(() => {ms932Encoder.encode("\u64BF")}).to.throw(Error, "EncodingError U+64BF");
expect(() => {ms932Encoder.encode("\u64C0")}).to.throw(Error, "EncodingError U+64C0");
r = r && ([...ms932Encoder.encode("擁擂")].join(",") === "151,105,157,165"); // U+64C1
expect(() => {ms932Encoder.encode("\u64C3")}).to.throw(Error, "EncodingError U+64C3");
expect(() => {ms932Encoder.encode("\u64C4")}).to.throw(Error, "EncodingError U+64C4");
r = r && ([...ms932Encoder.encode("擅")].join(",") === "157,161"); // U+64C5
expect(() => {ms932Encoder.encode("\u64C6")}).to.throw(Error, "EncodingError U+64C6");
r = r && ([...ms932Encoder.encode("擇")].join(",") === "157,162"); // U+64C7
expect(() => {ms932Encoder.encode("\u64C8")}).to.throw(Error, "EncodingError U+64C8");
expect(() => {ms932Encoder.encode("\u64C9")}).to.throw(Error, "EncodingError U+64C9");
expect(() => {ms932Encoder.encode("\u64CA")}).to.throw(Error, "EncodingError U+64CA");
expect(() => {ms932Encoder.encode("\u64CB")}).to.throw(Error, "EncodingError U+64CB");
expect(() => {ms932Encoder.encode("\u64CC")}).to.throw(Error, "EncodingError U+64CC");
r = r && ([...ms932Encoder.encode("操擎")].join(",") === "145,128,250,204"); // U+64CD
expect(() => {ms932Encoder.encode("\u64CF")}).to.throw(Error, "EncodingError U+64CF");
expect(() => {ms932Encoder.encode("\u64D0")}).to.throw(Error, "EncodingError U+64D0");
expect(() => {ms932Encoder.encode("\u64D1")}).to.throw(Error, "EncodingError U+64D1");
r = r && ([...ms932Encoder.encode("擒")].join(",") === "157,160"); // U+64D2
expect(() => {ms932Encoder.encode("\u64D3")}).to.throw(Error, "EncodingError U+64D3");
r = r && ([...ms932Encoder.encode("擔")].join(",") === "157,94"); // U+64D4
expect(() => {ms932Encoder.encode("\u64D5")}).to.throw(Error, "EncodingError U+64D5");
expect(() => {ms932Encoder.encode("\u64D6")}).to.throw(Error, "EncodingError U+64D6");
expect(() => {ms932Encoder.encode("\u64D7")}).to.throw(Error, "EncodingError U+64D7");
r = r && ([...ms932Encoder.encode("擘")].join(",") === "157,164"); // U+64D8
expect(() => {ms932Encoder.encode("\u64D9")}).to.throw(Error, "EncodingError U+64D9");
r = r && ([...ms932Encoder.encode("據")].join(",") === "157,159"); // U+64DA
expect(() => {ms932Encoder.encode("\u64DB")}).to.throw(Error, "EncodingError U+64DB");
expect(() => {ms932Encoder.encode("\u64DC")}).to.throw(Error, "EncodingError U+64DC");
expect(() => {ms932Encoder.encode("\u64DD")}).to.throw(Error, "EncodingError U+64DD");
expect(() => {ms932Encoder.encode("\u64DE")}).to.throw(Error, "EncodingError U+64DE");
expect(() => {ms932Encoder.encode("\u64DF")}).to.throw(Error, "EncodingError U+64DF");
r = r && ([...ms932Encoder.encode("擠擡擢擣")].join(",") === "157,169,157,170,147,70,157,172"); // U+64E0
expect(() => {ms932Encoder.encode("\u64E4")}).to.throw(Error, "EncodingError U+64E4");
expect(() => {ms932Encoder.encode("\u64E5")}).to.throw(Error, "EncodingError U+64E5");
r = r && ([...ms932Encoder.encode("擦擧")].join(",") === "142,67,157,167"); // U+64E6
expect(() => {ms932Encoder.encode("\u64E8")}).to.throw(Error, "EncodingError U+64E8");
expect(() => {ms932Encoder.encode("\u64E9")}).to.throw(Error, "EncodingError U+64E9");
expect(() => {ms932Encoder.encode("\u64EA")}).to.throw(Error, "EncodingError U+64EA");
expect(() => {ms932Encoder.encode("\u64EB")}).to.throw(Error, "EncodingError U+64EB");
r = r && ([...ms932Encoder.encode("擬")].join(",") === "139,91"); // U+64EC
expect(() => {ms932Encoder.encode("\u64ED")}).to.throw(Error, "EncodingError U+64ED");
expect(() => {ms932Encoder.encode("\u64EE")}).to.throw(Error, "EncodingError U+64EE");
r = r && ([...ms932Encoder.encode("擯")].join(",") === "157,173"); // U+64EF
expect(() => {ms932Encoder.encode("\u64F0")}).to.throw(Error, "EncodingError U+64F0");
r = r && ([...ms932Encoder.encode("擱擲")].join(",") === "157,166,157,177"); // U+64F1
expect(() => {ms932Encoder.encode("\u64F3")}).to.throw(Error, "EncodingError U+64F3");
r = r && ([...ms932Encoder.encode("擴")].join(",") === "157,176"); // U+64F4
expect(() => {ms932Encoder.encode("\u64F5")}).to.throw(Error, "EncodingError U+64F5");
r = r && ([...ms932Encoder.encode("擶")].join(",") === "157,175"); // U+64F6
expect(() => {ms932Encoder.encode("\u64F7")}).to.throw(Error, "EncodingError U+64F7");
expect(() => {ms932Encoder.encode("\u64F8")}).to.throw(Error, "EncodingError U+64F8");
expect(() => {ms932Encoder.encode("\u64F9")}).to.throw(Error, "EncodingError U+64F9");
r = r && ([...ms932Encoder.encode("擺")].join(",") === "157,178"); // U+64FA
expect(() => {ms932Encoder.encode("\u64FB")}).to.throw(Error, "EncodingError U+64FB");
expect(() => {ms932Encoder.encode("\u64FC")}).to.throw(Error, "EncodingError U+64FC");
r = r && ([...ms932Encoder.encode("擽擾")].join(",") === "157,180,143,239"); // U+64FD
expect(() => {ms932Encoder.encode("\u64FF")}).to.throw(Error, "EncodingError U+64FF");
r = r && ([...ms932Encoder.encode("攀")].join(",") === "157,179"); // U+6500
expect(() => {ms932Encoder.encode("\u6501")}).to.throw(Error, "EncodingError U+6501");
expect(() => {ms932Encoder.encode("\u6502")}).to.throw(Error, "EncodingError U+6502");
expect(() => {ms932Encoder.encode("\u6503")}).to.throw(Error, "EncodingError U+6503");
expect(() => {ms932Encoder.encode("\u6504")}).to.throw(Error, "EncodingError U+6504");
r = r && ([...ms932Encoder.encode("攅")].join(",") === "157,183"); // U+6505
expect(() => {ms932Encoder.encode("\u6506")}).to.throw(Error, "EncodingError U+6506");
expect(() => {ms932Encoder.encode("\u6507")}).to.throw(Error, "EncodingError U+6507");
expect(() => {ms932Encoder.encode("\u6508")}).to.throw(Error, "EncodingError U+6508");
expect(() => {ms932Encoder.encode("\u6509")}).to.throw(Error, "EncodingError U+6509");
expect(() => {ms932Encoder.encode("\u650A")}).to.throw(Error, "EncodingError U+650A");
expect(() => {ms932Encoder.encode("\u650B")}).to.throw(Error, "EncodingError U+650B");
expect(() => {ms932Encoder.encode("\u650C")}).to.throw(Error, "EncodingError U+650C");
expect(() => {ms932Encoder.encode("\u650D")}).to.throw(Error, "EncodingError U+650D");
expect(() => {ms932Encoder.encode("\u650E")}).to.throw(Error, "EncodingError U+650E");
expect(() => {ms932Encoder.encode("\u650F")}).to.throw(Error, "EncodingError U+650F");
expect(() => {ms932Encoder.encode("\u6510")}).to.throw(Error, "EncodingError U+6510");
expect(() => {ms932Encoder.encode("\u6511")}).to.throw(Error, "EncodingError U+6511");
expect(() => {ms932Encoder.encode("\u6512")}).to.throw(Error, "EncodingError U+6512");
expect(() => {ms932Encoder.encode("\u6513")}).to.throw(Error, "EncodingError U+6513");
expect(() => {ms932Encoder.encode("\u6514")}).to.throw(Error, "EncodingError U+6514");
expect(() => {ms932Encoder.encode("\u6515")}).to.throw(Error, "EncodingError U+6515");
expect(() => {ms932Encoder.encode("\u6516")}).to.throw(Error, "EncodingError U+6516");
expect(() => {ms932Encoder.encode("\u6517")}).to.throw(Error, "EncodingError U+6517");
r = r && ([...ms932Encoder.encode("攘")].join(",") === "157,181"); // U+6518
expect(() => {ms932Encoder.encode("\u6519")}).to.throw(Error, "EncodingError U+6519");
expect(() => {ms932Encoder.encode("\u651A")}).to.throw(Error, "EncodingError U+651A");
expect(() => {ms932Encoder.encode("\u651B")}).to.throw(Error, "EncodingError U+651B");
r = r && ([...ms932Encoder.encode("攜攝")].join(",") === "157,182,157,144"); // U+651C
expect(() => {ms932Encoder.encode("\u651E")}).to.throw(Error, "EncodingError U+651E");
expect(() => {ms932Encoder.encode("\u651F")}).to.throw(Error, "EncodingError U+651F");
expect(() => {ms932Encoder.encode("\u6520")}).to.throw(Error, "EncodingError U+6520");
expect(() => {ms932Encoder.encode("\u6521")}).to.throw(Error, "EncodingError U+6521");
expect(() => {ms932Encoder.encode("\u6522")}).to.throw(Error, "EncodingError U+6522");
r = r && ([...ms932Encoder.encode("攣攤")].join(",") === "157,185,157,184"); // U+6523
expect(() => {ms932Encoder.encode("\u6525")}).to.throw(Error, "EncodingError U+6525");
expect(() => {ms932Encoder.encode("\u6526")}).to.throw(Error, "EncodingError U+6526");
expect(() => {ms932Encoder.encode("\u6527")}).to.throw(Error, "EncodingError U+6527");
expect(() => {ms932Encoder.encode("\u6528")}).to.throw(Error, "EncodingError U+6528");
expect(() => {ms932Encoder.encode("\u6529")}).to.throw(Error, "EncodingError U+6529");
r = r && ([...ms932Encoder.encode("攪攫攬")].join(",") === "157,152,157,186,157,174"); // U+652A
expect(() => {ms932Encoder.encode("\u652D")}).to.throw(Error, "EncodingError U+652D");
expect(() => {ms932Encoder.encode("\u652E")}).to.throw(Error, "EncodingError U+652E");
r = r && ([...ms932Encoder.encode("支")].join(",") === "142,120"); // U+652F
expect(() => {ms932Encoder.encode("\u6530")}).to.throw(Error, "EncodingError U+6530");
expect(() => {ms932Encoder.encode("\u6531")}).to.throw(Error, "EncodingError U+6531");
expect(() => {ms932Encoder.encode("\u6532")}).to.throw(Error, "EncodingError U+6532");
expect(() => {ms932Encoder.encode("\u6533")}).to.throw(Error, "EncodingError U+6533");
r = r && ([...ms932Encoder.encode("攴攵收攷攸改")].join(",") === "157,187,157,188,157,190,157,189,157,191,137,252"); // U+6534
expect(() => {ms932Encoder.encode("\u653A")}).to.throw(Error, "EncodingError U+653A");
r = r && ([...ms932Encoder.encode("攻")].join(",") === "141,85"); // U+653B
expect(() => {ms932Encoder.encode("\u653C")}).to.throw(Error, "EncodingError U+653C");
expect(() => {ms932Encoder.encode("\u653D")}).to.throw(Error, "EncodingError U+653D");
r = r && ([...ms932Encoder.encode("放政")].join(",") === "149,250,144,173"); // U+653E
expect(() => {ms932Encoder.encode("\u6540")}).to.throw(Error, "EncodingError U+6540");
expect(() => {ms932Encoder.encode("\u6541")}).to.throw(Error, "EncodingError U+6541");
expect(() => {ms932Encoder.encode("\u6542")}).to.throw(Error, "EncodingError U+6542");
expect(() => {ms932Encoder.encode("\u6543")}).to.throw(Error, "EncodingError U+6543");
expect(() => {ms932Encoder.encode("\u6544")}).to.throw(Error, "EncodingError U+6544");
r = r && ([...ms932Encoder.encode("故")].join(",") === "140,204"); // U+6545
expect(() => {ms932Encoder.encode("\u6546")}).to.throw(Error, "EncodingError U+6546");
expect(() => {ms932Encoder.encode("\u6547")}).to.throw(Error, "EncodingError U+6547");
r = r && ([...ms932Encoder.encode("效")].join(",") === "157,193"); // U+6548
expect(() => {ms932Encoder.encode("\u6549")}).to.throw(Error, "EncodingError U+6549");
expect(() => {ms932Encoder.encode("\u654A")}).to.throw(Error, "EncodingError U+654A");
expect(() => {ms932Encoder.encode("\u654B")}).to.throw(Error, "EncodingError U+654B");
expect(() => {ms932Encoder.encode("\u654C")}).to.throw(Error, "EncodingError U+654C");
r = r && ([...ms932Encoder.encode("敍敎敏")].join(",") === "157,196,250,205,149,113"); // U+654D
expect(() => {ms932Encoder.encode("\u6550")}).to.throw(Error, "EncodingError U+6550");
r = r && ([...ms932Encoder.encode("救")].join(",") === "139,126"); // U+6551
expect(() => {ms932Encoder.encode("\u6552")}).to.throw(Error, "EncodingError U+6552");
expect(() => {ms932Encoder.encode("\u6553")}).to.throw(Error, "EncodingError U+6553");
expect(() => {ms932Encoder.encode("\u6554")}).to.throw(Error, "EncodingError U+6554");
r = r && ([...ms932Encoder.encode("敕敖敗敘教")].join(",") === "157,195,157,194,148,115,157,197,139,179"); // U+6555
expect(() => {ms932Encoder.encode("\u655A")}).to.throw(Error, "EncodingError U+655A");
expect(() => {ms932Encoder.encode("\u655B")}).to.throw(Error, "EncodingError U+655B");
expect(() => {ms932Encoder.encode("\u655C")}).to.throw(Error, "EncodingError U+655C");
r = r && ([...ms932Encoder.encode("敝敞")].join(",") === "157,199,157,198"); // U+655D
expect(() => {ms932Encoder.encode("\u655F")}).to.throw(Error, "EncodingError U+655F");
expect(() => {ms932Encoder.encode("\u6560")}).to.throw(Error, "EncodingError U+6560");
expect(() => {ms932Encoder.encode("\u6561")}).to.throw(Error, "EncodingError U+6561");
r = r && ([...ms932Encoder.encode("敢散")].join(",") === "138,184,142,85"); // U+6562
expect(() => {ms932Encoder.encode("\u6564")}).to.throw(Error, "EncodingError U+6564");
expect(() => {ms932Encoder.encode("\u6565")}).to.throw(Error, "EncodingError U+6565");
r = r && ([...ms932Encoder.encode("敦")].join(",") === "147,214"); // U+6566
expect(() => {ms932Encoder.encode("\u6567")}).to.throw(Error, "EncodingError U+6567");
expect(() => {ms932Encoder.encode("\u6568")}).to.throw(Error, "EncodingError U+6568");
expect(() => {ms932Encoder.encode("\u6569")}).to.throw(Error, "EncodingError U+6569");
expect(() => {ms932Encoder.encode("\u656A")}).to.throw(Error, "EncodingError U+656A");
expect(() => {ms932Encoder.encode("\u656B")}).to.throw(Error, "EncodingError U+656B");
r = r && ([...ms932Encoder.encode("敬")].join(",") === "140,104"); // U+656C
expect(() => {ms932Encoder.encode("\u656D")}).to.throw(Error, "EncodingError U+656D");
expect(() => {ms932Encoder.encode("\u656E")}).to.throw(Error, "EncodingError U+656E");
expect(() => {ms932Encoder.encode("\u656F")}).to.throw(Error, "EncodingError U+656F");
r = r && ([...ms932Encoder.encode("数")].join(",") === "144,148"); // U+6570
expect(() => {ms932Encoder.encode("\u6571")}).to.throw(Error, "EncodingError U+6571");
r = r && ([...ms932Encoder.encode("敲")].join(",") === "157,200"); // U+6572
expect(() => {ms932Encoder.encode("\u6573")}).to.throw(Error, "EncodingError U+6573");
r = r && ([...ms932Encoder.encode("整敵")].join(",") === "144,174,147,71"); // U+6574
expect(() => {ms932Encoder.encode("\u6576")}).to.throw(Error, "EncodingError U+6576");
r = r && ([...ms932Encoder.encode("敷數")].join(",") === "149,126,157,201"); // U+6577
expect(() => {ms932Encoder.encode("\u6579")}).to.throw(Error, "EncodingError U+6579");
expect(() => {ms932Encoder.encode("\u657A")}).to.throw(Error, "EncodingError U+657A");
expect(() => {ms932Encoder.encode("\u657B")}).to.throw(Error, "EncodingError U+657B");
expect(() => {ms932Encoder.encode("\u657C")}).to.throw(Error, "EncodingError U+657C");
expect(() => {ms932Encoder.encode("\u657D")}).to.throw(Error, "EncodingError U+657D");
expect(() => {ms932Encoder.encode("\u657E")}).to.throw(Error, "EncodingError U+657E");
expect(() => {ms932Encoder.encode("\u657F")}).to.throw(Error, "EncodingError U+657F");
expect(() => {ms932Encoder.encode("\u6580")}).to.throw(Error, "EncodingError U+6580");
expect(() => {ms932Encoder.encode("\u6581")}).to.throw(Error, "EncodingError U+6581");
r = r && ([...ms932Encoder.encode("斂斃")].join(",") === "157,202,157,203"); // U+6582
expect(() => {ms932Encoder.encode("\u6584")}).to.throw(Error, "EncodingError U+6584");
expect(() => {ms932Encoder.encode("\u6585")}).to.throw(Error, "EncodingError U+6585");
expect(() => {ms932Encoder.encode("\u6586")}).to.throw(Error, "EncodingError U+6586");
r = r && ([...ms932Encoder.encode("文斈斉")].join(",") === "149,182,155,124,144,196"); // U+6587
expect(() => {ms932Encoder.encode("\u658A")}).to.throw(Error, "EncodingError U+658A");
expect(() => {ms932Encoder.encode("\u658B")}).to.throw(Error, "EncodingError U+658B");
r = r && ([...ms932Encoder.encode("斌")].join(",") === "149,107"); // U+658C
expect(() => {ms932Encoder.encode("\u658D")}).to.throw(Error, "EncodingError U+658D");
r = r && ([...ms932Encoder.encode("斎")].join(",") === "141,214"); // U+658E
expect(() => {ms932Encoder.encode("\u658F")}).to.throw(Error, "EncodingError U+658F");
r = r && ([...ms932Encoder.encode("斐斑")].join(",") === "148,227,148,193"); // U+6590
expect(() => {ms932Encoder.encode("\u6592")}).to.throw(Error, "EncodingError U+6592");
expect(() => {ms932Encoder.encode("\u6593")}).to.throw(Error, "EncodingError U+6593");
expect(() => {ms932Encoder.encode("\u6594")}).to.throw(Error, "EncodingError U+6594");
expect(() => {ms932Encoder.encode("\u6595")}).to.throw(Error, "EncodingError U+6595");
expect(() => {ms932Encoder.encode("\u6596")}).to.throw(Error, "EncodingError U+6596");
r = r && ([...ms932Encoder.encode("斗")].join(",") === "147,108"); // U+6597
expect(() => {ms932Encoder.encode("\u6598")}).to.throw(Error, "EncodingError U+6598");
r = r && ([...ms932Encoder.encode("料")].join(",") === "151,191"); // U+6599
expect(() => {ms932Encoder.encode("\u659A")}).to.throw(Error, "EncodingError U+659A");
r = r && ([...ms932Encoder.encode("斛斜")].join(",") === "157,205,142,206"); // U+659B
expect(() => {ms932Encoder.encode("\u659D")}).to.throw(Error, "EncodingError U+659D");
expect(() => {ms932Encoder.encode("\u659E")}).to.throw(Error, "EncodingError U+659E");
r = r && ([...ms932Encoder.encode("斟")].join(",") === "157,206"); // U+659F
expect(() => {ms932Encoder.encode("\u65A0")}).to.throw(Error, "EncodingError U+65A0");
r = r && ([...ms932Encoder.encode("斡")].join(",") === "136,180"); // U+65A1
expect(() => {ms932Encoder.encode("\u65A2")}).to.throw(Error, "EncodingError U+65A2");
expect(() => {ms932Encoder.encode("\u65A3")}).to.throw(Error, "EncodingError U+65A3");
r = r && ([...ms932Encoder.encode("斤斥")].join(",") === "139,210,144,203"); // U+65A4
expect(() => {ms932Encoder.encode("\u65A6")}).to.throw(Error, "EncodingError U+65A6");
r = r && ([...ms932Encoder.encode("斧")].join(",") === "149,128"); // U+65A7
expect(() => {ms932Encoder.encode("\u65A8")}).to.throw(Error, "EncodingError U+65A8");
expect(() => {ms932Encoder.encode("\u65A9")}).to.throw(Error, "EncodingError U+65A9");
expect(() => {ms932Encoder.encode("\u65AA")}).to.throw(Error, "EncodingError U+65AA");
r = r && ([...ms932Encoder.encode("斫斬断")].join(",") === "157,207,142,97,146,102"); // U+65AB
expect(() => {ms932Encoder.encode("\u65AE")}).to.throw(Error, "EncodingError U+65AE");
r = r && ([...ms932Encoder.encode("斯新")].join(",") === "142,122,144,86"); // U+65AF
expect(() => {ms932Encoder.encode("\u65B1")}).to.throw(Error, "EncodingError U+65B1");
expect(() => {ms932Encoder.encode("\u65B2")}).to.throw(Error, "EncodingError U+65B2");
expect(() => {ms932Encoder.encode("\u65B3")}).to.throw(Error, "EncodingError U+65B3");
expect(() => {ms932Encoder.encode("\u65B4")}).to.throw(Error, "EncodingError U+65B4");
expect(() => {ms932Encoder.encode("\u65B5")}).to.throw(Error, "EncodingError U+65B5");
expect(() => {ms932Encoder.encode("\u65B6")}).to.throw(Error, "EncodingError U+65B6");
r = r && ([...ms932Encoder.encode("斷")].join(",") === "157,208"); // U+65B7
expect(() => {ms932Encoder.encode("\u65B8")}).to.throw(Error, "EncodingError U+65B8");
r = r && ([...ms932Encoder.encode("方")].join(",") === "149,251"); // U+65B9
expect(() => {ms932Encoder.encode("\u65BA")}).to.throw(Error, "EncodingError U+65BA");
expect(() => {ms932Encoder.encode("\u65BB")}).to.throw(Error, "EncodingError U+65BB");
r = r && ([...ms932Encoder.encode("於施")].join(",") === "137,151,142,123"); // U+65BC
expect(() => {ms932Encoder.encode("\u65BE")}).to.throw(Error, "EncodingError U+65BE");
expect(() => {ms932Encoder.encode("\u65BF")}).to.throw(Error, "EncodingError U+65BF");
expect(() => {ms932Encoder.encode("\u65C0")}).to.throw(Error, "EncodingError U+65C0");
r = r && ([...ms932Encoder.encode("旁")].join(",") === "157,211"); // U+65C1
expect(() => {ms932Encoder.encode("\u65C2")}).to.throw(Error, "EncodingError U+65C2");
r = r && ([...ms932Encoder.encode("旃旄旅旆")].join(",") === "157,209,157,212,151,183,157,210"); // U+65C3
expect(() => {ms932Encoder.encode("\u65C7")}).to.throw(Error, "EncodingError U+65C7");
expect(() => {ms932Encoder.encode("\u65C8")}).to.throw(Error, "EncodingError U+65C8");
expect(() => {ms932Encoder.encode("\u65C9")}).to.throw(Error, "EncodingError U+65C9");
expect(() => {ms932Encoder.encode("\u65CA")}).to.throw(Error, "EncodingError U+65CA");
r = r && ([...ms932Encoder.encode("旋旌")].join(",") === "144,249,157,213"); // U+65CB
expect(() => {ms932Encoder.encode("\u65CD")}).to.throw(Error, "EncodingError U+65CD");
expect(() => {ms932Encoder.encode("\u65CE")}).to.throw(Error, "EncodingError U+65CE");
r = r && ([...ms932Encoder.encode("族")].join(",") === "145,176"); // U+65CF
expect(() => {ms932Encoder.encode("\u65D0")}).to.throw(Error, "EncodingError U+65D0");
expect(() => {ms932Encoder.encode("\u65D1")}).to.throw(Error, "EncodingError U+65D1");
r = r && ([...ms932Encoder.encode("旒")].join(",") === "157,214"); // U+65D2
expect(() => {ms932Encoder.encode("\u65D3")}).to.throw(Error, "EncodingError U+65D3");
expect(() => {ms932Encoder.encode("\u65D4")}).to.throw(Error, "EncodingError U+65D4");
expect(() => {ms932Encoder.encode("\u65D5")}).to.throw(Error, "EncodingError U+65D5");
expect(() => {ms932Encoder.encode("\u65D6")}).to.throw(Error, "EncodingError U+65D6");
r = r && ([...ms932Encoder.encode("旗")].join(",") === "138,248"); // U+65D7
expect(() => {ms932Encoder.encode("\u65D8")}).to.throw(Error, "EncodingError U+65D8");
r = r && ([...ms932Encoder.encode("旙")].join(",") === "157,216"); // U+65D9
expect(() => {ms932Encoder.encode("\u65DA")}).to.throw(Error, "EncodingError U+65DA");
r = r && ([...ms932Encoder.encode("旛")].join(",") === "157,215"); // U+65DB
expect(() => {ms932Encoder.encode("\u65DC")}).to.throw(Error, "EncodingError U+65DC");
expect(() => {ms932Encoder.encode("\u65DD")}).to.throw(Error, "EncodingError U+65DD");
expect(() => {ms932Encoder.encode("\u65DE")}).to.throw(Error, "EncodingError U+65DE");
expect(() => {ms932Encoder.encode("\u65DF")}).to.throw(Error, "EncodingError U+65DF");
r = r && ([...ms932Encoder.encode("无旡既")].join(",") === "157,217,157,218,138,249"); // U+65E0
expect(() => {ms932Encoder.encode("\u65E3")}).to.throw(Error, "EncodingError U+65E3");
expect(() => {ms932Encoder.encode("\u65E4")}).to.throw(Error, "EncodingError U+65E4");
r = r && ([...ms932Encoder.encode("日旦旧旨早")].join(",") === "147,250,146,85,139,140,142,124,145,129"); // U+65E5
expect(() => {ms932Encoder.encode("\u65EA")}).to.throw(Error, "EncodingError U+65EA");
expect(() => {ms932Encoder.encode("\u65EB")}).to.throw(Error, "EncodingError U+65EB");
r = r && ([...ms932Encoder.encode("旬旭")].join(",") === "143,123,136,174"); // U+65EC
expect(() => {ms932Encoder.encode("\u65EE")}).to.throw(Error, "EncodingError U+65EE");
expect(() => {ms932Encoder.encode("\u65EF")}).to.throw(Error, "EncodingError U+65EF");
expect(() => {ms932Encoder.encode("\u65F0")}).to.throw(Error, "EncodingError U+65F0");
r = r && ([...ms932Encoder.encode("旱")].join(",") === "157,219"); // U+65F1
expect(() => {ms932Encoder.encode("\u65F2")}).to.throw(Error, "EncodingError U+65F2");
expect(() => {ms932Encoder.encode("\u65F3")}).to.throw(Error, "EncodingError U+65F3");
expect(() => {ms932Encoder.encode("\u65F4")}).to.throw(Error, "EncodingError U+65F4");
expect(() => {ms932Encoder.encode("\u65F5")}).to.throw(Error, "EncodingError U+65F5");
expect(() => {ms932Encoder.encode("\u65F6")}).to.throw(Error, "EncodingError U+65F6");
expect(() => {ms932Encoder.encode("\u65F7")}).to.throw(Error, "EncodingError U+65F7");
expect(() => {ms932Encoder.encode("\u65F8")}).to.throw(Error, "EncodingError U+65F8");
expect(() => {ms932Encoder.encode("\u65F9")}).to.throw(Error, "EncodingError U+65F9");
r = r && ([...ms932Encoder.encode("旺旻")].join(",") === "137,160,157,223"); // U+65FA
expect(() => {ms932Encoder.encode("\u65FC")}).to.throw(Error, "EncodingError U+65FC");
expect(() => {ms932Encoder.encode("\u65FD")}).to.throw(Error, "EncodingError U+65FD");
expect(() => {ms932Encoder.encode("\u65FE")}).to.throw(Error, "EncodingError U+65FE");
expect(() => {ms932Encoder.encode("\u65FF")}).to.throw(Error, "EncodingError U+65FF");
r = r && ([...ms932Encoder.encode("昀")].join(",") === "250,206"); // U+6600
expect(() => {ms932Encoder.encode("\u6601")}).to.throw(Error, "EncodingError U+6601");
r = r && ([...ms932Encoder.encode("昂昃")].join(",") === "141,86,157,222"); // U+6602
expect(() => {ms932Encoder.encode("\u6604")}).to.throw(Error, "EncodingError U+6604");
expect(() => {ms932Encoder.encode("\u6605")}).to.throw(Error, "EncodingError U+6605");
r = r && ([...ms932Encoder.encode("昆昇")].join(",") === "141,169,143,184"); // U+6606
expect(() => {ms932Encoder.encode("\u6608")}).to.throw(Error, "EncodingError U+6608");
r = r && ([...ms932Encoder.encode("昉昊")].join(",") === "250,209,157,221"); // U+6609
expect(() => {ms932Encoder.encode("\u660B")}).to.throw(Error, "EncodingError U+660B");
r = r && ([...ms932Encoder.encode("昌")].join(",") === "143,185"); // U+660C
expect(() => {ms932Encoder.encode("\u660D")}).to.throw(Error, "EncodingError U+660D");
r = r && ([...ms932Encoder.encode("明昏")].join(",") === "150,190,141,168"); // U+660E
expect(() => {ms932Encoder.encode("\u6610")}).to.throw(Error, "EncodingError U+6610");
expect(() => {ms932Encoder.encode("\u6611")}).to.throw(Error, "EncodingError U+6611");
expect(() => {ms932Encoder.encode("\u6612")}).to.throw(Error, "EncodingError U+6612");
r = r && ([...ms932Encoder.encode("易昔昕")].join(",") === "136,213,144,204,250,207"); // U+6613
expect(() => {ms932Encoder.encode("\u6616")}).to.throw(Error, "EncodingError U+6616");
expect(() => {ms932Encoder.encode("\u6617")}).to.throw(Error, "EncodingError U+6617");
expect(() => {ms932Encoder.encode("\u6618")}).to.throw(Error, "EncodingError U+6618");
expect(() => {ms932Encoder.encode("\u6619")}).to.throw(Error, "EncodingError U+6619");
expect(() => {ms932Encoder.encode("\u661A")}).to.throw(Error, "EncodingError U+661A");
expect(() => {ms932Encoder.encode("\u661B")}).to.throw(Error, "EncodingError U+661B");
r = r && ([...ms932Encoder.encode("昜")].join(",") === "157,228"); // U+661C
expect(() => {ms932Encoder.encode("\u661D")}).to.throw(Error, "EncodingError U+661D");
r = r && ([...ms932Encoder.encode("昞星映")].join(",") === "250,211,144,175,137,102"); // U+661E
expect(() => {ms932Encoder.encode("\u6621")}).to.throw(Error, "EncodingError U+6621");
expect(() => {ms932Encoder.encode("\u6622")}).to.throw(Error, "EncodingError U+6622");
expect(() => {ms932Encoder.encode("\u6623")}).to.throw(Error, "EncodingError U+6623");
r = r && ([...ms932Encoder.encode("昤春")].join(",") === "250,212,143,116"); // U+6624
expect(() => {ms932Encoder.encode("\u6626")}).to.throw(Error, "EncodingError U+6626");
r = r && ([...ms932Encoder.encode("昧昨")].join(",") === "150,134,141,240"); // U+6627
expect(() => {ms932Encoder.encode("\u6629")}).to.throw(Error, "EncodingError U+6629");
expect(() => {ms932Encoder.encode("\u662A")}).to.throw(Error, "EncodingError U+662A");
expect(() => {ms932Encoder.encode("\u662B")}).to.throw(Error, "EncodingError U+662B");
expect(() => {ms932Encoder.encode("\u662C")}).to.throw(Error, "EncodingError U+662C");
r = r && ([...ms932Encoder.encode("昭昮是")].join(",") === "143,186,250,210,144,165"); // U+662D
expect(() => {ms932Encoder.encode("\u6630")}).to.throw(Error, "EncodingError U+6630");
r = r && ([...ms932Encoder.encode("昱")].join(",") === "250,99"); // U+6631
expect(() => {ms932Encoder.encode("\u6632")}).to.throw(Error, "EncodingError U+6632");
expect(() => {ms932Encoder.encode("\u6633")}).to.throw(Error, "EncodingError U+6633");
r = r && ([...ms932Encoder.encode("昴昵昶")].join(",") === "157,227,157,225,157,226"); // U+6634
expect(() => {ms932Encoder.encode("\u6637")}).to.throw(Error, "EncodingError U+6637");
expect(() => {ms932Encoder.encode("\u6638")}).to.throw(Error, "EncodingError U+6638");
expect(() => {ms932Encoder.encode("\u6639")}).to.throw(Error, "EncodingError U+6639");
expect(() => {ms932Encoder.encode("\u663A")}).to.throw(Error, "EncodingError U+663A");
r = r && ([...ms932Encoder.encode("昻昼")].join(",") === "250,208,146,139"); // U+663B
expect(() => {ms932Encoder.encode("\u663D")}).to.throw(Error, "EncodingError U+663D");
expect(() => {ms932Encoder.encode("\u663E")}).to.throw(Error, "EncodingError U+663E");
r = r && ([...ms932Encoder.encode("昿")].join(",") === "158,69"); // U+663F
expect(() => {ms932Encoder.encode("\u6640")}).to.throw(Error, "EncodingError U+6640");
r = r && ([...ms932Encoder.encode("晁時晃晄")].join(",") === "157,232,142,158,141,87,157,230"); // U+6641
expect(() => {ms932Encoder.encode("\u6645")}).to.throw(Error, "EncodingError U+6645");
expect(() => {ms932Encoder.encode("\u6646")}).to.throw(Error, "EncodingError U+6646");
expect(() => {ms932Encoder.encode("\u6647")}).to.throw(Error, "EncodingError U+6647");
expect(() => {ms932Encoder.encode("\u6648")}).to.throw(Error, "EncodingError U+6648");
r = r && ([...ms932Encoder.encode("晉")].join(",") === "157,231"); // U+6649
expect(() => {ms932Encoder.encode("\u664A")}).to.throw(Error, "EncodingError U+664A");
r = r && ([...ms932Encoder.encode("晋")].join(",") === "144,87"); // U+664B
expect(() => {ms932Encoder.encode("\u664C")}).to.throw(Error, "EncodingError U+664C");
expect(() => {ms932Encoder.encode("\u664D")}).to.throw(Error, "EncodingError U+664D");
expect(() => {ms932Encoder.encode("\u664E")}).to.throw(Error, "EncodingError U+664E");
r = r && ([...ms932Encoder.encode("晏")].join(",") === "157,229"); // U+664F
expect(() => {ms932Encoder.encode("\u6650")}).to.throw(Error, "EncodingError U+6650");
expect(() => {ms932Encoder.encode("\u6651")}).to.throw(Error, "EncodingError U+6651");
r = r && ([...ms932Encoder.encode("晒")].join(",") === "142,78"); // U+6652
expect(() => {ms932Encoder.encode("\u6653")}).to.throw(Error, "EncodingError U+6653");
expect(() => {ms932Encoder.encode("\u6654")}).to.throw(Error, "EncodingError U+6654");
expect(() => {ms932Encoder.encode("\u6655")}).to.throw(Error, "EncodingError U+6655");
expect(() => {ms932Encoder.encode("\u6656")}).to.throw(Error, "EncodingError U+6656");
r = r && ([...ms932Encoder.encode("晗")].join(",") === "250,214"); // U+6657
expect(() => {ms932Encoder.encode("\u6658")}).to.throw(Error, "EncodingError U+6658");
r = r && ([...ms932Encoder.encode("晙")].join(",") === "250,215"); // U+6659
expect(() => {ms932Encoder.encode("\u665A")}).to.throw(Error, "EncodingError U+665A");
expect(() => {ms932Encoder.encode("\u665B")}).to.throw(Error, "EncodingError U+665B");
expect(() => {ms932Encoder.encode("\u665C")}).to.throw(Error, "EncodingError U+665C");
r = r && ([...ms932Encoder.encode("晝晞晟")].join(",") === "157,234,157,233,157,238"); // U+665D
expect(() => {ms932Encoder.encode("\u6660")}).to.throw(Error, "EncodingError U+6660");
expect(() => {ms932Encoder.encode("\u6661")}).to.throw(Error, "EncodingError U+6661");
r = r && ([...ms932Encoder.encode("晢")].join(",") === "157,239"); // U+6662
expect(() => {ms932Encoder.encode("\u6663")}).to.throw(Error, "EncodingError U+6663");
r = r && ([...ms932Encoder.encode("晤晥晦晧晨晩")].join(",") === "157,235,250,213,138,65,157,236,157,237,148,211"); // U+6664
expect(() => {ms932Encoder.encode("\u666A")}).to.throw(Error, "EncodingError U+666A");
expect(() => {ms932Encoder.encode("\u666B")}).to.throw(Error, "EncodingError U+666B");
expect(() => {ms932Encoder.encode("\u666C")}).to.throw(Error, "EncodingError U+666C");
expect(() => {ms932Encoder.encode("\u666D")}).to.throw(Error, "EncodingError U+666D");
r = r && ([...ms932Encoder.encode("普景晰")].join(",") === "149,129,140,105,157,240"); // U+666E
expect(() => {ms932Encoder.encode("\u6671")}).to.throw(Error, "EncodingError U+6671");
expect(() => {ms932Encoder.encode("\u6672")}).to.throw(Error, "EncodingError U+6672");
r = r && ([...ms932Encoder.encode("晳晴")].join(",") === "250,217,144,176"); // U+6673
expect(() => {ms932Encoder.encode("\u6675")}).to.throw(Error, "EncodingError U+6675");
r = r && ([...ms932Encoder.encode("晶")].join(",") === "143,187"); // U+6676
expect(() => {ms932Encoder.encode("\u6677")}).to.throw(Error, "EncodingError U+6677");
expect(() => {ms932Encoder.encode("\u6678")}).to.throw(Error, "EncodingError U+6678");
expect(() => {ms932Encoder.encode("\u6679")}).to.throw(Error, "EncodingError U+6679");
r = r && ([...ms932Encoder.encode("智")].join(",") === "146,113"); // U+667A
expect(() => {ms932Encoder.encode("\u667B")}).to.throw(Error, "EncodingError U+667B");
expect(() => {ms932Encoder.encode("\u667C")}).to.throw(Error, "EncodingError U+667C");
expect(() => {ms932Encoder.encode("\u667D")}).to.throw(Error, "EncodingError U+667D");
expect(() => {ms932Encoder.encode("\u667E")}).to.throw(Error, "EncodingError U+667E");
expect(() => {ms932Encoder.encode("\u667F")}).to.throw(Error, "EncodingError U+667F");
expect(() => {ms932Encoder.encode("\u6680")}).to.throw(Error, "EncodingError U+6680");
r = r && ([...ms932Encoder.encode("暁")].join(",") === "139,197"); // U+6681
expect(() => {ms932Encoder.encode("\u6682")}).to.throw(Error, "EncodingError U+6682");
r = r && ([...ms932Encoder.encode("暃暄")].join(",") === "157,241,157,245"); // U+6683
expect(() => {ms932Encoder.encode("\u6685")}).to.throw(Error, "EncodingError U+6685");
expect(() => {ms932Encoder.encode("\u6686")}).to.throw(Error, "EncodingError U+6686");
r = r && ([...ms932Encoder.encode("暇暈暉")].join(",") === "137,201,157,242,157,244"); // U+6687
expect(() => {ms932Encoder.encode("\u668A")}).to.throw(Error, "EncodingError U+668A");
expect(() => {ms932Encoder.encode("\u668B")}).to.throw(Error, "EncodingError U+668B");
expect(() => {ms932Encoder.encode("\u668C")}).to.throw(Error, "EncodingError U+668C");
expect(() => {ms932Encoder.encode("\u668D")}).to.throw(Error, "EncodingError U+668D");
r = r && ([...ms932Encoder.encode("暎")].join(",") === "157,243"); // U+668E
expect(() => {ms932Encoder.encode("\u668F")}).to.throw(Error, "EncodingError U+668F");
expect(() => {ms932Encoder.encode("\u6690")}).to.throw(Error, "EncodingError U+6690");
r = r && ([...ms932Encoder.encode("暑")].join(",") === "143,139"); // U+6691
expect(() => {ms932Encoder.encode("\u6692")}).to.throw(Error, "EncodingError U+6692");
expect(() => {ms932Encoder.encode("\u6693")}).to.throw(Error, "EncodingError U+6693");
expect(() => {ms932Encoder.encode("\u6694")}).to.throw(Error, "EncodingError U+6694");
expect(() => {ms932Encoder.encode("\u6695")}).to.throw(Error, "EncodingError U+6695");
r = r && ([...ms932Encoder.encode("暖暗暘暙")].join(",") === "146,103,136,195,157,246,250,218"); // U+6696
expect(() => {ms932Encoder.encode("\u669A")}).to.throw(Error, "EncodingError U+669A");
expect(() => {ms932Encoder.encode("\u669B")}).to.throw(Error, "EncodingError U+669B");
expect(() => {ms932Encoder.encode("\u669C")}).to.throw(Error, "EncodingError U+669C");
r = r && ([...ms932Encoder.encode("暝")].join(",") === "157,247"); // U+669D
expect(() => {ms932Encoder.encode("\u669E")}).to.throw(Error, "EncodingError U+669E");
expect(() => {ms932Encoder.encode("\u669F")}).to.throw(Error, "EncodingError U+669F");
r = r && ([...ms932Encoder.encode("暠")].join(",") === "250,219"); // U+66A0
expect(() => {ms932Encoder.encode("\u66A1")}).to.throw(Error, "EncodingError U+66A1");
r = r && ([...ms932Encoder.encode("暢")].join(",") === "146,168"); // U+66A2
expect(() => {ms932Encoder.encode("\u66A3")}).to.throw(Error, "EncodingError U+66A3");
expect(() => {ms932Encoder.encode("\u66A4")}).to.throw(Error, "EncodingError U+66A4");
expect(() => {ms932Encoder.encode("\u66A5")}).to.throw(Error, "EncodingError U+66A5");
r = r && ([...ms932Encoder.encode("暦")].join(",") === "151,239"); // U+66A6
expect(() => {ms932Encoder.encode("\u66A7")}).to.throw(Error, "EncodingError U+66A7");
expect(() => {ms932Encoder.encode("\u66A8")}).to.throw(Error, "EncodingError U+66A8");
expect(() => {ms932Encoder.encode("\u66A9")}).to.throw(Error, "EncodingError U+66A9");
expect(() => {ms932Encoder.encode("\u66AA")}).to.throw(Error, "EncodingError U+66AA");
r = r && ([...ms932Encoder.encode("暫")].join(",") === "142,98"); // U+66AB
expect(() => {ms932Encoder.encode("\u66AC")}).to.throw(Error, "EncodingError U+66AC");
expect(() => {ms932Encoder.encode("\u66AD")}).to.throw(Error, "EncodingError U+66AD");
r = r && ([...ms932Encoder.encode("暮")].join(",") === "149,233"); // U+66AE
expect(() => {ms932Encoder.encode("\u66AF")}).to.throw(Error, "EncodingError U+66AF");
expect(() => {ms932Encoder.encode("\u66B0")}).to.throw(Error, "EncodingError U+66B0");
expect(() => {ms932Encoder.encode("\u66B1")}).to.throw(Error, "EncodingError U+66B1");
r = r && ([...ms932Encoder.encode("暲")].join(",") === "250,220"); // U+66B2
expect(() => {ms932Encoder.encode("\u66B3")}).to.throw(Error, "EncodingError U+66B3");
r = r && ([...ms932Encoder.encode("暴")].join(",") === "150,92"); // U+66B4
expect(() => {ms932Encoder.encode("\u66B5")}).to.throw(Error, "EncodingError U+66B5");
expect(() => {ms932Encoder.encode("\u66B6")}).to.throw(Error, "EncodingError U+66B6");
expect(() => {ms932Encoder.encode("\u66B7")}).to.throw(Error, "EncodingError U+66B7");
r = r && ([...ms932Encoder.encode("暸暹")].join(",") === "158,65,157,249"); // U+66B8
expect(() => {ms932Encoder.encode("\u66BA")}).to.throw(Error, "EncodingError U+66BA");
expect(() => {ms932Encoder.encode("\u66BB")}).to.throw(Error, "EncodingError U+66BB");
r = r && ([...ms932Encoder.encode("暼")].join(",") === "157,252"); // U+66BC
expect(() => {ms932Encoder.encode("\u66BD")}).to.throw(Error, "EncodingError U+66BD");
r = r && ([...ms932Encoder.encode("暾暿")].join(",") === "157,251,250,221"); // U+66BE
expect(() => {ms932Encoder.encode("\u66C0")}).to.throw(Error, "EncodingError U+66C0");
r = r && ([...ms932Encoder.encode("曁")].join(",") === "157,248"); // U+66C1
expect(() => {ms932Encoder.encode("\u66C2")}).to.throw(Error, "EncodingError U+66C2");
expect(() => {ms932Encoder.encode("\u66C3")}).to.throw(Error, "EncodingError U+66C3");
r = r && ([...ms932Encoder.encode("曄")].join(",") === "158,64"); // U+66C4
expect(() => {ms932Encoder.encode("\u66C5")}).to.throw(Error, "EncodingError U+66C5");
expect(() => {ms932Encoder.encode("\u66C6")}).to.throw(Error, "EncodingError U+66C6");
r = r && ([...ms932Encoder.encode("曇")].join(",") === "147,220"); // U+66C7
expect(() => {ms932Encoder.encode("\u66C8")}).to.throw(Error, "EncodingError U+66C8");
r = r && ([...ms932Encoder.encode("曉")].join(",") === "157,250"); // U+66C9
expect(() => {ms932Encoder.encode("\u66CA")}).to.throw(Error, "EncodingError U+66CA");
expect(() => {ms932Encoder.encode("\u66CB")}).to.throw(Error, "EncodingError U+66CB");
expect(() => {ms932Encoder.encode("\u66CC")}).to.throw(Error, "EncodingError U+66CC");
expect(() => {ms932Encoder.encode("\u66CD")}).to.throw(Error, "EncodingError U+66CD");
expect(() => {ms932Encoder.encode("\u66CE")}).to.throw(Error, "EncodingError U+66CE");
expect(() => {ms932Encoder.encode("\u66CF")}).to.throw(Error, "EncodingError U+66CF");
expect(() => {ms932Encoder.encode("\u66D0")}).to.throw(Error, "EncodingError U+66D0");
expect(() => {ms932Encoder.encode("\u66D1")}).to.throw(Error, "EncodingError U+66D1");
expect(() => {ms932Encoder.encode("\u66D2")}).to.throw(Error, "EncodingError U+66D2");
expect(() => {ms932Encoder.encode("\u66D3")}).to.throw(Error, "EncodingError U+66D3");
expect(() => {ms932Encoder.encode("\u66D4")}).to.throw(Error, "EncodingError U+66D4");
expect(() => {ms932Encoder.encode("\u66D5")}).to.throw(Error, "EncodingError U+66D5");
r = r && ([...ms932Encoder.encode("曖")].join(",") === "158,66"); // U+66D6
expect(() => {ms932Encoder.encode("\u66D7")}).to.throw(Error, "EncodingError U+66D7");
expect(() => {ms932Encoder.encode("\u66D8")}).to.throw(Error, "EncodingError U+66D8");
r = r && ([...ms932Encoder.encode("曙曚")].join(",") === "143,140,158,67"); // U+66D9
expect(() => {ms932Encoder.encode("\u66DB")}).to.throw(Error, "EncodingError U+66DB");
r = r && ([...ms932Encoder.encode("曜曝")].join(",") === "151,106,148,152"); // U+66DC
expect(() => {ms932Encoder.encode("\u66DE")}).to.throw(Error, "EncodingError U+66DE");
expect(() => {ms932Encoder.encode("\u66DF")}).to.throw(Error, "EncodingError U+66DF");
r = r && ([...ms932Encoder.encode("曠")].join(",") === "158,68"); // U+66E0
expect(() => {ms932Encoder.encode("\u66E1")}).to.throw(Error, "EncodingError U+66E1");
expect(() => {ms932Encoder.encode("\u66E2")}).to.throw(Error, "EncodingError U+66E2");
expect(() => {ms932Encoder.encode("\u66E3")}).to.throw(Error, "EncodingError U+66E3");
expect(() => {ms932Encoder.encode("\u66E4")}).to.throw(Error, "EncodingError U+66E4");
expect(() => {ms932Encoder.encode("\u66E5")}).to.throw(Error, "EncodingError U+66E5");
r = r && ([...ms932Encoder.encode("曦")].join(",") === "158,70"); // U+66E6
expect(() => {ms932Encoder.encode("\u66E7")}).to.throw(Error, "EncodingError U+66E7");
expect(() => {ms932Encoder.encode("\u66E8")}).to.throw(Error, "EncodingError U+66E8");
r = r && ([...ms932Encoder.encode("曩")].join(",") === "158,71"); // U+66E9
expect(() => {ms932Encoder.encode("\u66EA")}).to.throw(Error, "EncodingError U+66EA");
expect(() => {ms932Encoder.encode("\u66EB")}).to.throw(Error, "EncodingError U+66EB");
expect(() => {ms932Encoder.encode("\u66EC")}).to.throw(Error, "EncodingError U+66EC");
expect(() => {ms932Encoder.encode("\u66ED")}).to.throw(Error, "EncodingError U+66ED");
expect(() => {ms932Encoder.encode("\u66EE")}).to.throw(Error, "EncodingError U+66EE");
expect(() => {ms932Encoder.encode("\u66EF")}).to.throw(Error, "EncodingError U+66EF");
r = r && ([...ms932Encoder.encode("曰")].join(",") === "158,72"); // U+66F0
expect(() => {ms932Encoder.encode("\u66F1")}).to.throw(Error, "EncodingError U+66F1");
r = r && ([...ms932Encoder.encode("曲曳更曵")].join(",") === "139,200,137,103,141,88,158,73"); // U+66F2
expect(() => {ms932Encoder.encode("\u66F6")}).to.throw(Error, "EncodingError U+66F6");
r = r && ([...ms932Encoder.encode("曷書曹曺曻曼曽曾替最")].join(",") === "158,74,143,145,145,130,250,222,250,102,153,214,145,93,145,92,145,214,141,197"); // U+66F7
expect(() => {ms932Encoder.encode("\u6701")}).to.throw(Error, "EncodingError U+6701");
expect(() => {ms932Encoder.encode("\u6702")}).to.throw(Error, "EncodingError U+6702");
r = r && ([...ms932Encoder.encode("會")].join(",") === "152,240"); // U+6703
expect(() => {ms932Encoder.encode("\u6704")}).to.throw(Error, "EncodingError U+6704");
expect(() => {ms932Encoder.encode("\u6705")}).to.throw(Error, "EncodingError U+6705");
expect(() => {ms932Encoder.encode("\u6706")}).to.throw(Error, "EncodingError U+6706");
expect(() => {ms932Encoder.encode("\u6707")}).to.throw(Error, "EncodingError U+6707");
r = r && ([...ms932Encoder.encode("月有")].join(",") === "140,142,151,76"); // U+6708
expect(() => {ms932Encoder.encode("\u670A")}).to.throw(Error, "EncodingError U+670A");
r = r && ([...ms932Encoder.encode("朋")].join(",") === "149,252"); // U+670B
expect(() => {ms932Encoder.encode("\u670C")}).to.throw(Error, "EncodingError U+670C");
r = r && ([...ms932Encoder.encode("服朎朏")].join(",") === "149,158,250,223,158,75"); // U+670D
expect(() => {ms932Encoder.encode("\u6710")}).to.throw(Error, "EncodingError U+6710");
expect(() => {ms932Encoder.encode("\u6711")}).to.throw(Error, "EncodingError U+6711");
expect(() => {ms932Encoder.encode("\u6712")}).to.throw(Error, "EncodingError U+6712");
expect(() => {ms932Encoder.encode("\u6713")}).to.throw(Error, "EncodingError U+6713");
r = r && ([...ms932Encoder.encode("朔朕朖朗")].join(",") === "141,241,146,189,158,76,152,78"); // U+6714
expect(() => {ms932Encoder.encode("\u6718")}).to.throw(Error, "EncodingError U+6718");
expect(() => {ms932Encoder.encode("\u6719")}).to.throw(Error, "EncodingError U+6719");
expect(() => {ms932Encoder.encode("\u671A")}).to.throw(Error, "EncodingError U+671A");
r = r && ([...ms932Encoder.encode("望")].join(",") === "150,93"); // U+671B
expect(() => {ms932Encoder.encode("\u671C")}).to.throw(Error, "EncodingError U+671C");
r = r && ([...ms932Encoder.encode("朝朞期")].join(",") === "146,169,158,77,138,250"); // U+671D
expect(() => {ms932Encoder.encode("\u6720")}).to.throw(Error, "EncodingError U+6720");
expect(() => {ms932Encoder.encode("\u6721")}).to.throw(Error, "EncodingError U+6721");
expect(() => {ms932Encoder.encode("\u6722")}).to.throw(Error, "EncodingError U+6722");
expect(() => {ms932Encoder.encode("\u6723")}).to.throw(Error, "EncodingError U+6723");
expect(() => {ms932Encoder.encode("\u6724")}).to.throw(Error, "EncodingError U+6724");
expect(() => {ms932Encoder.encode("\u6725")}).to.throw(Error, "EncodingError U+6725");
r = r && ([...ms932Encoder.encode("朦朧木")].join(",") === "158,78,158,79,150,216"); // U+6726
expect(() => {ms932Encoder.encode("\u6729")}).to.throw(Error, "EncodingError U+6729");
r = r && ([...ms932Encoder.encode("未末本札朮")].join(",") === "150,162,150,150,150,123,142,68,158,81"); // U+672A
expect(() => {ms932Encoder.encode("\u672F")}).to.throw(Error, "EncodingError U+672F");
expect(() => {ms932Encoder.encode("\u6730")}).to.throw(Error, "EncodingError U+6730");
r = r && ([...ms932Encoder.encode("朱")].join(",") === "142,233"); // U+6731
expect(() => {ms932Encoder.encode("\u6732")}).to.throw(Error, "EncodingError U+6732");
expect(() => {ms932Encoder.encode("\u6733")}).to.throw(Error, "EncodingError U+6733");
r = r && ([...ms932Encoder.encode("朴")].join(",") === "150,112"); // U+6734
expect(() => {ms932Encoder.encode("\u6735")}).to.throw(Error, "EncodingError U+6735");
r = r && ([...ms932Encoder.encode("朶朷朸")].join(",") === "158,83,158,86,158,85"); // U+6736
expect(() => {ms932Encoder.encode("\u6739")}).to.throw(Error, "EncodingError U+6739");
r = r && ([...ms932Encoder.encode("机")].join(",") === "138,247"); // U+673A
expect(() => {ms932Encoder.encode("\u673B")}).to.throw(Error, "EncodingError U+673B");
expect(() => {ms932Encoder.encode("\u673C")}).to.throw(Error, "EncodingError U+673C");
r = r && ([...ms932Encoder.encode("朽")].join(",") === "139,128"); // U+673D
expect(() => {ms932Encoder.encode("\u673E")}).to.throw(Error, "EncodingError U+673E");
r = r && ([...ms932Encoder.encode("朿")].join(",") === "158,82"); // U+673F
expect(() => {ms932Encoder.encode("\u6740")}).to.throw(Error, "EncodingError U+6740");
r = r && ([...ms932Encoder.encode("杁")].join(",") === "158,84"); // U+6741
expect(() => {ms932Encoder.encode("\u6742")}).to.throw(Error, "EncodingError U+6742");
expect(() => {ms932Encoder.encode("\u6743")}).to.throw(Error, "EncodingError U+6743");
expect(() => {ms932Encoder.encode("\u6744")}).to.throw(Error, "EncodingError U+6744");
expect(() => {ms932Encoder.encode("\u6745")}).to.throw(Error, "EncodingError U+6745");
r = r && ([...ms932Encoder.encode("杆")].join(",") === "158,87"); // U+6746
expect(() => {ms932Encoder.encode("\u6747")}).to.throw(Error, "EncodingError U+6747");
expect(() => {ms932Encoder.encode("\u6748")}).to.throw(Error, "EncodingError U+6748");
r = r && ([...ms932Encoder.encode("杉")].join(",") === "144,153"); // U+6749
expect(() => {ms932Encoder.encode("\u674A")}).to.throw(Error, "EncodingError U+674A");
expect(() => {ms932Encoder.encode("\u674B")}).to.throw(Error, "EncodingError U+674B");
expect(() => {ms932Encoder.encode("\u674C")}).to.throw(Error, "EncodingError U+674C");
expect(() => {ms932Encoder.encode("\u674D")}).to.throw(Error, "EncodingError U+674D");
r = r && ([...ms932Encoder.encode("李杏材村")].join(",") === "151,155,136,199,141,222,145,186"); // U+674E
expect(() => {ms932Encoder.encode("\u6752")}).to.throw(Error, "EncodingError U+6752");
r = r && ([...ms932Encoder.encode("杓")].join(",") === "142,219"); // U+6753
expect(() => {ms932Encoder.encode("\u6754")}).to.throw(Error, "EncodingError U+6754");
expect(() => {ms932Encoder.encode("\u6755")}).to.throw(Error, "EncodingError U+6755");
r = r && ([...ms932Encoder.encode("杖")].join(",") === "143,241"); // U+6756
expect(() => {ms932Encoder.encode("\u6757")}).to.throw(Error, "EncodingError U+6757");
expect(() => {ms932Encoder.encode("\u6758")}).to.throw(Error, "EncodingError U+6758");
r = r && ([...ms932Encoder.encode("杙")].join(",") === "158,90"); // U+6759
expect(() => {ms932Encoder.encode("\u675A")}).to.throw(Error, "EncodingError U+675A");
expect(() => {ms932Encoder.encode("\u675B")}).to.throw(Error, "EncodingError U+675B");
r = r && ([...ms932Encoder.encode("杜")].join(",") === "147,109"); // U+675C
expect(() => {ms932Encoder.encode("\u675D")}).to.throw(Error, "EncodingError U+675D");
r = r && ([...ms932Encoder.encode("杞束杠条杢杣杤来杦")].join(",") === "158,88,145,169,158,89,143,240,150,219,158,91,158,92,151,136,250,225"); // U+675E
expect(() => {ms932Encoder.encode("\u6767")}).to.throw(Error, "EncodingError U+6767");
expect(() => {ms932Encoder.encode("\u6768")}).to.throw(Error, "EncodingError U+6768");
expect(() => {ms932Encoder.encode("\u6769")}).to.throw(Error, "EncodingError U+6769");
r = r && ([...ms932Encoder.encode("杪")].join(",") === "158,97"); // U+676A
expect(() => {ms932Encoder.encode("\u676B")}).to.throw(Error, "EncodingError U+676B");
expect(() => {ms932Encoder.encode("\u676C")}).to.throw(Error, "EncodingError U+676C");
r = r && ([...ms932Encoder.encode("杭")].join(",") === "141,89"); // U+676D
expect(() => {ms932Encoder.encode("\u676E")}).to.throw(Error, "EncodingError U+676E");
r = r && ([...ms932Encoder.encode("杯杰東杲杳")].join(",") === "148,116,158,94,147,140,157,220,157,224"); // U+676F
expect(() => {ms932Encoder.encode("\u6774")}).to.throw(Error, "EncodingError U+6774");
r = r && ([...ms932Encoder.encode("杵")].join(",") === "139,110"); // U+6775
expect(() => {ms932Encoder.encode("\u6776")}).to.throw(Error, "EncodingError U+6776");
r = r && ([...ms932Encoder.encode("杷")].join(",") === "148,102"); // U+6777
expect(() => {ms932Encoder.encode("\u6778")}).to.throw(Error, "EncodingError U+6778");
expect(() => {ms932Encoder.encode("\u6779")}).to.throw(Error, "EncodingError U+6779");
expect(() => {ms932Encoder.encode("\u677A")}).to.throw(Error, "EncodingError U+677A");
expect(() => {ms932Encoder.encode("\u677B")}).to.throw(Error, "EncodingError U+677B");
r = r && ([...ms932Encoder.encode("杼")].join(",") === "158,96"); // U+677C
expect(() => {ms932Encoder.encode("\u677D")}).to.throw(Error, "EncodingError U+677D");
r = r && ([...ms932Encoder.encode("松板")].join(",") === "143,188,148,194"); // U+677E
expect(() => {ms932Encoder.encode("\u6780")}).to.throw(Error, "EncodingError U+6780");
expect(() => {ms932Encoder.encode("\u6781")}).to.throw(Error, "EncodingError U+6781");
expect(() => {ms932Encoder.encode("\u6782")}).to.throw(Error, "EncodingError U+6782");
expect(() => {ms932Encoder.encode("\u6783")}).to.throw(Error, "EncodingError U+6783");
expect(() => {ms932Encoder.encode("\u6784")}).to.throw(Error, "EncodingError U+6784");
r = r && ([...ms932Encoder.encode("枅")].join(",") === "158,102"); // U+6785
expect(() => {ms932Encoder.encode("\u6786")}).to.throw(Error, "EncodingError U+6786");
r = r && ([...ms932Encoder.encode("枇")].join(",") === "148,248"); // U+6787
expect(() => {ms932Encoder.encode("\u6788")}).to.throw(Error, "EncodingError U+6788");
r = r && ([...ms932Encoder.encode("枉")].join(",") === "158,93"); // U+6789
expect(() => {ms932Encoder.encode("\u678A")}).to.throw(Error, "EncodingError U+678A");
r = r && ([...ms932Encoder.encode("枋枌")].join(",") === "158,99,158,98"); // U+678B
expect(() => {ms932Encoder.encode("\u678D")}).to.throw(Error, "EncodingError U+678D");
expect(() => {ms932Encoder.encode("\u678E")}).to.throw(Error, "EncodingError U+678E");
expect(() => {ms932Encoder.encode("\u678F")}).to.throw(Error, "EncodingError U+678F");
r = r && ([...ms932Encoder.encode("析")].join(",") === "144,205"); // U+6790
expect(() => {ms932Encoder.encode("\u6791")}).to.throw(Error, "EncodingError U+6791");
expect(() => {ms932Encoder.encode("\u6792")}).to.throw(Error, "EncodingError U+6792");
expect(() => {ms932Encoder.encode("\u6793")}).to.throw(Error, "EncodingError U+6793");
expect(() => {ms932Encoder.encode("\u6794")}).to.throw(Error, "EncodingError U+6794");
r = r && ([...ms932Encoder.encode("枕")].join(",") === "150,141"); // U+6795
expect(() => {ms932Encoder.encode("\u6796")}).to.throw(Error, "EncodingError U+6796");
r = r && ([...ms932Encoder.encode("林")].join(",") === "151,209"); // U+6797
expect(() => {ms932Encoder.encode("\u6798")}).to.throw(Error, "EncodingError U+6798");
expect(() => {ms932Encoder.encode("\u6799")}).to.throw(Error, "EncodingError U+6799");
r = r && ([...ms932Encoder.encode("枚")].join(",") === "150,135"); // U+679A
expect(() => {ms932Encoder.encode("\u679B")}).to.throw(Error, "EncodingError U+679B");
r = r && ([...ms932Encoder.encode("果枝")].join(",") === "137,202,142,125"); // U+679C
expect(() => {ms932Encoder.encode("\u679E")}).to.throw(Error, "EncodingError U+679E");
expect(() => {ms932Encoder.encode("\u679F")}).to.throw(Error, "EncodingError U+679F");
r = r && ([...ms932Encoder.encode("枠枡枢")].join(",") === "152,103,158,101,144,149"); // U+67A0
expect(() => {ms932Encoder.encode("\u67A3")}).to.throw(Error, "EncodingError U+67A3");
expect(() => {ms932Encoder.encode("\u67A4")}).to.throw(Error, "EncodingError U+67A4");
expect(() => {ms932Encoder.encode("\u67A5")}).to.throw(Error, "EncodingError U+67A5");
r = r && ([...ms932Encoder.encode("枦")].join(",") === "158,100"); // U+67A6
expect(() => {ms932Encoder.encode("\u67A7")}).to.throw(Error, "EncodingError U+67A7");
expect(() => {ms932Encoder.encode("\u67A8")}).to.throw(Error, "EncodingError U+67A8");
r = r && ([...ms932Encoder.encode("枩")].join(",") === "158,95"); // U+67A9
expect(() => {ms932Encoder.encode("\u67AA")}).to.throw(Error, "EncodingError U+67AA");
expect(() => {ms932Encoder.encode("\u67AB")}).to.throw(Error, "EncodingError U+67AB");
expect(() => {ms932Encoder.encode("\u67AC")}).to.throw(Error, "EncodingError U+67AC");
expect(() => {ms932Encoder.encode("\u67AD")}).to.throw(Error, "EncodingError U+67AD");
expect(() => {ms932Encoder.encode("\u67AE")}).to.throw(Error, "EncodingError U+67AE");
r = r && ([...ms932Encoder.encode("枯")].join(",") === "140,205"); // U+67AF
expect(() => {ms932Encoder.encode("\u67B0")}).to.throw(Error, "EncodingError U+67B0");
expect(() => {ms932Encoder.encode("\u67B1")}).to.throw(Error, "EncodingError U+67B1");
expect(() => {ms932Encoder.encode("\u67B2")}).to.throw(Error, "EncodingError U+67B2");
r = r && ([...ms932Encoder.encode("枳枴")].join(",") === "158,107,158,105"); // U+67B3
expect(() => {ms932Encoder.encode("\u67B5")}).to.throw(Error, "EncodingError U+67B5");
r = r && ([...ms932Encoder.encode("架枷枸枹")].join(",") === "137,203,158,103,158,109,158,115"); // U+67B6
expect(() => {ms932Encoder.encode("\u67BA")}).to.throw(Error, "EncodingError U+67BA");
r = r && ([...ms932Encoder.encode("枻")].join(",") === "250,226"); // U+67BB
expect(() => {ms932Encoder.encode("\u67BC")}).to.throw(Error, "EncodingError U+67BC");
expect(() => {ms932Encoder.encode("\u67BD")}).to.throw(Error, "EncodingError U+67BD");
expect(() => {ms932Encoder.encode("\u67BE")}).to.throw(Error, "EncodingError U+67BE");
expect(() => {ms932Encoder.encode("\u67BF")}).to.throw(Error, "EncodingError U+67BF");
r = r && ([...ms932Encoder.encode("柀柁")].join(",") === "250,228,145,198"); // U+67C0
expect(() => {ms932Encoder.encode("\u67C2")}).to.throw(Error, "EncodingError U+67C2");
expect(() => {ms932Encoder.encode("\u67C3")}).to.throw(Error, "EncodingError U+67C3");
r = r && ([...ms932Encoder.encode("柄")].join(",") === "149,191"); // U+67C4
expect(() => {ms932Encoder.encode("\u67C5")}).to.throw(Error, "EncodingError U+67C5");
r = r && ([...ms932Encoder.encode("柆")].join(",") === "158,117"); // U+67C6
expect(() => {ms932Encoder.encode("\u67C7")}).to.throw(Error, "EncodingError U+67C7");
expect(() => {ms932Encoder.encode("\u67C8")}).to.throw(Error, "EncodingError U+67C8");
expect(() => {ms932Encoder.encode("\u67C9")}).to.throw(Error, "EncodingError U+67C9");
r = r && ([...ms932Encoder.encode("柊")].join(",") === "149,65"); // U+67CA
expect(() => {ms932Encoder.encode("\u67CB")}).to.throw(Error, "EncodingError U+67CB");
expect(() => {ms932Encoder.encode("\u67CC")}).to.throw(Error, "EncodingError U+67CC");
expect(() => {ms932Encoder.encode("\u67CD")}).to.throw(Error, "EncodingError U+67CD");
r = r && ([...ms932Encoder.encode("柎柏某柑")].join(",") === "158,116,148,144,150,94,138,185"); // U+67CE
expect(() => {ms932Encoder.encode("\u67D2")}).to.throw(Error, "EncodingError U+67D2");
r = r && ([...ms932Encoder.encode("染柔")].join(",") === "144,245,143,95"); // U+67D3
expect(() => {ms932Encoder.encode("\u67D5")}).to.throw(Error, "EncodingError U+67D5");
expect(() => {ms932Encoder.encode("\u67D6")}).to.throw(Error, "EncodingError U+67D6");
expect(() => {ms932Encoder.encode("\u67D7")}).to.throw(Error, "EncodingError U+67D7");
r = r && ([...ms932Encoder.encode("柘")].join(",") === "146,209"); // U+67D8
expect(() => {ms932Encoder.encode("\u67D9")}).to.throw(Error, "EncodingError U+67D9");
r = r && ([...ms932Encoder.encode("柚")].join(",") === "151,77"); // U+67DA
expect(() => {ms932Encoder.encode("\u67DB")}).to.throw(Error, "EncodingError U+67DB");
expect(() => {ms932Encoder.encode("\u67DC")}).to.throw(Error, "EncodingError U+67DC");
r = r && ([...ms932Encoder.encode("柝柞")].join(",") === "158,112,158,111"); // U+67DD
expect(() => {ms932Encoder.encode("\u67DF")}).to.throw(Error, "EncodingError U+67DF");
expect(() => {ms932Encoder.encode("\u67E0")}).to.throw(Error, "EncodingError U+67E0");
expect(() => {ms932Encoder.encode("\u67E1")}).to.throw(Error, "EncodingError U+67E1");
r = r && ([...ms932Encoder.encode("柢")].join(",") === "158,113"); // U+67E2
expect(() => {ms932Encoder.encode("\u67E3")}).to.throw(Error, "EncodingError U+67E3");
r = r && ([...ms932Encoder.encode("柤")].join(",") === "158,110"); // U+67E4
expect(() => {ms932Encoder.encode("\u67E5")}).to.throw(Error, "EncodingError U+67E5");
expect(() => {ms932Encoder.encode("\u67E6")}).to.throw(Error, "EncodingError U+67E6");
r = r && ([...ms932Encoder.encode("柧")].join(",") === "158,118"); // U+67E7
expect(() => {ms932Encoder.encode("\u67E8")}).to.throw(Error, "EncodingError U+67E8");
r = r && ([...ms932Encoder.encode("柩")].join(",") === "158,108"); // U+67E9
expect(() => {ms932Encoder.encode("\u67EA")}).to.throw(Error, "EncodingError U+67EA");
expect(() => {ms932Encoder.encode("\u67EB")}).to.throw(Error, "EncodingError U+67EB");
r = r && ([...ms932Encoder.encode("柬")].join(",") === "158,106"); // U+67EC
expect(() => {ms932Encoder.encode("\u67ED")}).to.throw(Error, "EncodingError U+67ED");
r = r && ([...ms932Encoder.encode("柮柯")].join(",") === "158,114,158,104"); // U+67EE
expect(() => {ms932Encoder.encode("\u67F0")}).to.throw(Error, "EncodingError U+67F0");
r = r && ([...ms932Encoder.encode("柱")].join(",") === "146,140"); // U+67F1
expect(() => {ms932Encoder.encode("\u67F2")}).to.throw(Error, "EncodingError U+67F2");
r = r && ([...ms932Encoder.encode("柳柴柵")].join(",") === "150,246,142,196,141,242"); // U+67F3
expect(() => {ms932Encoder.encode("\u67F6")}).to.throw(Error, "EncodingError U+67F6");
expect(() => {ms932Encoder.encode("\u67F7")}).to.throw(Error, "EncodingError U+67F7");
expect(() => {ms932Encoder.encode("\u67F8")}).to.throw(Error, "EncodingError U+67F8");
expect(() => {ms932Encoder.encode("\u67F9")}).to.throw(Error, "EncodingError U+67F9");
expect(() => {ms932Encoder.encode("\u67FA")}).to.throw(Error, "EncodingError U+67FA");
r = r && ([...ms932Encoder.encode("査")].join(",") === "141,184"); // U+67FB
expect(() => {ms932Encoder.encode("\u67FC")}).to.throw(Error, "EncodingError U+67FC");
expect(() => {ms932Encoder.encode("\u67FD")}).to.throw(Error, "EncodingError U+67FD");
r = r && ([...ms932Encoder.encode("柾柿")].join(",") === "150,143,138,96"); // U+67FE

expect(r).to.equal(true);

  });

});
