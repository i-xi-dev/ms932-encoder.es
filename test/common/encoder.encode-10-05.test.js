import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "../../dist/index.js";

describe("Ms932Encoder.prototype.encode 10", () => {

  it("encode(string) - U+9400-U+97FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u9400")}).to.throw(Error, "EncodingError U+9400");
expect(() => {ms932Encoder.encode("\u9401")}).to.throw(Error, "EncodingError U+9401");
expect(() => {ms932Encoder.encode("\u9402")}).to.throw(Error, "EncodingError U+9402");
r = r && ([...ms932Encoder.encode("鐃")].join(",") === "232,94"); // U+9403
expect(() => {ms932Encoder.encode("\u9404")}).to.throw(Error, "EncodingError U+9404");
expect(() => {ms932Encoder.encode("\u9405")}).to.throw(Error, "EncodingError U+9405");
expect(() => {ms932Encoder.encode("\u9406")}).to.throw(Error, "EncodingError U+9406");
r = r && ([...ms932Encoder.encode("鐇")].join(",") === "232,95"); // U+9407
expect(() => {ms932Encoder.encode("\u9408")}).to.throw(Error, "EncodingError U+9408");
expect(() => {ms932Encoder.encode("\u9409")}).to.throw(Error, "EncodingError U+9409");
expect(() => {ms932Encoder.encode("\u940A")}).to.throw(Error, "EncodingError U+940A");
expect(() => {ms932Encoder.encode("\u940B")}).to.throw(Error, "EncodingError U+940B");
expect(() => {ms932Encoder.encode("\u940C")}).to.throw(Error, "EncodingError U+940C");
expect(() => {ms932Encoder.encode("\u940D")}).to.throw(Error, "EncodingError U+940D");
expect(() => {ms932Encoder.encode("\u940E")}).to.throw(Error, "EncodingError U+940E");
expect(() => {ms932Encoder.encode("\u940F")}).to.throw(Error, "EncodingError U+940F");
r = r && ([...ms932Encoder.encode("鐐")].join(",") === "232,96"); // U+9410
expect(() => {ms932Encoder.encode("\u9411")}).to.throw(Error, "EncodingError U+9411");
expect(() => {ms932Encoder.encode("\u9412")}).to.throw(Error, "EncodingError U+9412");
r = r && ([...ms932Encoder.encode("鐓鐔")].join(",") === "232,93,232,92"); // U+9413
expect(() => {ms932Encoder.encode("\u9415")}).to.throw(Error, "EncodingError U+9415");
expect(() => {ms932Encoder.encode("\u9416")}).to.throw(Error, "EncodingError U+9416");
expect(() => {ms932Encoder.encode("\u9417")}).to.throw(Error, "EncodingError U+9417");
r = r && ([...ms932Encoder.encode("鐘鐙鐚")].join(",") === "143,224,147,168,232,91"); // U+9418
expect(() => {ms932Encoder.encode("\u941B")}).to.throw(Error, "EncodingError U+941B");
expect(() => {ms932Encoder.encode("\u941C")}).to.throw(Error, "EncodingError U+941C");
expect(() => {ms932Encoder.encode("\u941D")}).to.throw(Error, "EncodingError U+941D");
expect(() => {ms932Encoder.encode("\u941E")}).to.throw(Error, "EncodingError U+941E");
expect(() => {ms932Encoder.encode("\u941F")}).to.throw(Error, "EncodingError U+941F");
expect(() => {ms932Encoder.encode("\u9420")}).to.throw(Error, "EncodingError U+9420");
r = r && ([...ms932Encoder.encode("鐡")].join(",") === "232,100"); // U+9421
expect(() => {ms932Encoder.encode("\u9422")}).to.throw(Error, "EncodingError U+9422");
expect(() => {ms932Encoder.encode("\u9423")}).to.throw(Error, "EncodingError U+9423");
expect(() => {ms932Encoder.encode("\u9424")}).to.throw(Error, "EncodingError U+9424");
expect(() => {ms932Encoder.encode("\u9425")}).to.throw(Error, "EncodingError U+9425");
expect(() => {ms932Encoder.encode("\u9426")}).to.throw(Error, "EncodingError U+9426");
expect(() => {ms932Encoder.encode("\u9427")}).to.throw(Error, "EncodingError U+9427");
expect(() => {ms932Encoder.encode("\u9428")}).to.throw(Error, "EncodingError U+9428");
expect(() => {ms932Encoder.encode("\u9429")}).to.throw(Error, "EncodingError U+9429");
expect(() => {ms932Encoder.encode("\u942A")}).to.throw(Error, "EncodingError U+942A");
r = r && ([...ms932Encoder.encode("鐫")].join(",") === "232,98"); // U+942B
expect(() => {ms932Encoder.encode("\u942C")}).to.throw(Error, "EncodingError U+942C");
expect(() => {ms932Encoder.encode("\u942D")}).to.throw(Error, "EncodingError U+942D");
expect(() => {ms932Encoder.encode("\u942E")}).to.throw(Error, "EncodingError U+942E");
expect(() => {ms932Encoder.encode("\u942F")}).to.throw(Error, "EncodingError U+942F");
expect(() => {ms932Encoder.encode("\u9430")}).to.throw(Error, "EncodingError U+9430");
r = r && ([...ms932Encoder.encode("鐱")].join(",") === "251,229"); // U+9431
expect(() => {ms932Encoder.encode("\u9432")}).to.throw(Error, "EncodingError U+9432");
expect(() => {ms932Encoder.encode("\u9433")}).to.throw(Error, "EncodingError U+9433");
expect(() => {ms932Encoder.encode("\u9434")}).to.throw(Error, "EncodingError U+9434");
r = r && ([...ms932Encoder.encode("鐵鐶")].join(",") === "232,99,232,97"); // U+9435
expect(() => {ms932Encoder.encode("\u9437")}).to.throw(Error, "EncodingError U+9437");
r = r && ([...ms932Encoder.encode("鐸")].join(",") === "145,246"); // U+9438
expect(() => {ms932Encoder.encode("\u9439")}).to.throw(Error, "EncodingError U+9439");
r = r && ([...ms932Encoder.encode("鐺")].join(",") === "232,101"); // U+943A
expect(() => {ms932Encoder.encode("\u943B")}).to.throw(Error, "EncodingError U+943B");
expect(() => {ms932Encoder.encode("\u943C")}).to.throw(Error, "EncodingError U+943C");
expect(() => {ms932Encoder.encode("\u943D")}).to.throw(Error, "EncodingError U+943D");
expect(() => {ms932Encoder.encode("\u943E")}).to.throw(Error, "EncodingError U+943E");
expect(() => {ms932Encoder.encode("\u943F")}).to.throw(Error, "EncodingError U+943F");
expect(() => {ms932Encoder.encode("\u9440")}).to.throw(Error, "EncodingError U+9440");
r = r && ([...ms932Encoder.encode("鑁")].join(",") === "232,102"); // U+9441
expect(() => {ms932Encoder.encode("\u9442")}).to.throw(Error, "EncodingError U+9442");
expect(() => {ms932Encoder.encode("\u9443")}).to.throw(Error, "EncodingError U+9443");
r = r && ([...ms932Encoder.encode("鑄鑅")].join(",") === "232,104,251,230"); // U+9444
expect(() => {ms932Encoder.encode("\u9446")}).to.throw(Error, "EncodingError U+9446");
expect(() => {ms932Encoder.encode("\u9447")}).to.throw(Error, "EncodingError U+9447");
r = r && ([...ms932Encoder.encode("鑈")].join(",") === "251,231"); // U+9448
expect(() => {ms932Encoder.encode("\u9449")}).to.throw(Error, "EncodingError U+9449");
expect(() => {ms932Encoder.encode("\u944A")}).to.throw(Error, "EncodingError U+944A");
expect(() => {ms932Encoder.encode("\u944B")}).to.throw(Error, "EncodingError U+944B");
expect(() => {ms932Encoder.encode("\u944C")}).to.throw(Error, "EncodingError U+944C");
expect(() => {ms932Encoder.encode("\u944D")}).to.throw(Error, "EncodingError U+944D");
expect(() => {ms932Encoder.encode("\u944E")}).to.throw(Error, "EncodingError U+944E");
expect(() => {ms932Encoder.encode("\u944F")}).to.throw(Error, "EncodingError U+944F");
expect(() => {ms932Encoder.encode("\u9450")}).to.throw(Error, "EncodingError U+9450");
r = r && ([...ms932Encoder.encode("鑑鑒鑓")].join(",") === "138,211,232,103,150,248"); // U+9451
expect(() => {ms932Encoder.encode("\u9454")}).to.throw(Error, "EncodingError U+9454");
expect(() => {ms932Encoder.encode("\u9455")}).to.throw(Error, "EncodingError U+9455");
expect(() => {ms932Encoder.encode("\u9456")}).to.throw(Error, "EncodingError U+9456");
expect(() => {ms932Encoder.encode("\u9457")}).to.throw(Error, "EncodingError U+9457");
expect(() => {ms932Encoder.encode("\u9458")}).to.throw(Error, "EncodingError U+9458");
expect(() => {ms932Encoder.encode("\u9459")}).to.throw(Error, "EncodingError U+9459");
r = r && ([...ms932Encoder.encode("鑚鑛")].join(",") === "232,115,232,105"); // U+945A
expect(() => {ms932Encoder.encode("\u945C")}).to.throw(Error, "EncodingError U+945C");
expect(() => {ms932Encoder.encode("\u945D")}).to.throw(Error, "EncodingError U+945D");
r = r && ([...ms932Encoder.encode("鑞")].join(",") === "232,108"); // U+945E
expect(() => {ms932Encoder.encode("\u945F")}).to.throw(Error, "EncodingError U+945F");
r = r && ([...ms932Encoder.encode("鑠")].join(",") === "232,106"); // U+9460
expect(() => {ms932Encoder.encode("\u9461")}).to.throw(Error, "EncodingError U+9461");
r = r && ([...ms932Encoder.encode("鑢")].join(",") === "232,107"); // U+9462
expect(() => {ms932Encoder.encode("\u9463")}).to.throw(Error, "EncodingError U+9463");
expect(() => {ms932Encoder.encode("\u9464")}).to.throw(Error, "EncodingError U+9464");
expect(() => {ms932Encoder.encode("\u9465")}).to.throw(Error, "EncodingError U+9465");
expect(() => {ms932Encoder.encode("\u9466")}).to.throw(Error, "EncodingError U+9466");
expect(() => {ms932Encoder.encode("\u9467")}).to.throw(Error, "EncodingError U+9467");
expect(() => {ms932Encoder.encode("\u9468")}).to.throw(Error, "EncodingError U+9468");
expect(() => {ms932Encoder.encode("\u9469")}).to.throw(Error, "EncodingError U+9469");
r = r && ([...ms932Encoder.encode("鑪")].join(",") === "232,109"); // U+946A
expect(() => {ms932Encoder.encode("\u946B")}).to.throw(Error, "EncodingError U+946B");
expect(() => {ms932Encoder.encode("\u946C")}).to.throw(Error, "EncodingError U+946C");
expect(() => {ms932Encoder.encode("\u946D")}).to.throw(Error, "EncodingError U+946D");
expect(() => {ms932Encoder.encode("\u946E")}).to.throw(Error, "EncodingError U+946E");
expect(() => {ms932Encoder.encode("\u946F")}).to.throw(Error, "EncodingError U+946F");
r = r && ([...ms932Encoder.encode("鑰")].join(",") === "232,111"); // U+9470
expect(() => {ms932Encoder.encode("\u9471")}).to.throw(Error, "EncodingError U+9471");
expect(() => {ms932Encoder.encode("\u9472")}).to.throw(Error, "EncodingError U+9472");
expect(() => {ms932Encoder.encode("\u9473")}).to.throw(Error, "EncodingError U+9473");
expect(() => {ms932Encoder.encode("\u9474")}).to.throw(Error, "EncodingError U+9474");
r = r && ([...ms932Encoder.encode("鑵")].join(",") === "232,112"); // U+9475
expect(() => {ms932Encoder.encode("\u9476")}).to.throw(Error, "EncodingError U+9476");
r = r && ([...ms932Encoder.encode("鑷")].join(",") === "232,113"); // U+9477
expect(() => {ms932Encoder.encode("\u9478")}).to.throw(Error, "EncodingError U+9478");
expect(() => {ms932Encoder.encode("\u9479")}).to.throw(Error, "EncodingError U+9479");
expect(() => {ms932Encoder.encode("\u947A")}).to.throw(Error, "EncodingError U+947A");
expect(() => {ms932Encoder.encode("\u947B")}).to.throw(Error, "EncodingError U+947B");
r = r && ([...ms932Encoder.encode("鑼鑽鑾鑿")].join(",") === "232,116,232,114,232,117,232,119"); // U+947C
expect(() => {ms932Encoder.encode("\u9480")}).to.throw(Error, "EncodingError U+9480");
r = r && ([...ms932Encoder.encode("钁")].join(",") === "232,118"); // U+9481
expect(() => {ms932Encoder.encode("\u9482")}).to.throw(Error, "EncodingError U+9482");
expect(() => {ms932Encoder.encode("\u9483")}).to.throw(Error, "EncodingError U+9483");
expect(() => {ms932Encoder.encode("\u9484")}).to.throw(Error, "EncodingError U+9484");
expect(() => {ms932Encoder.encode("\u9485")}).to.throw(Error, "EncodingError U+9485");
expect(() => {ms932Encoder.encode("\u9486")}).to.throw(Error, "EncodingError U+9486");
expect(() => {ms932Encoder.encode("\u9487")}).to.throw(Error, "EncodingError U+9487");
expect(() => {ms932Encoder.encode("\u9488")}).to.throw(Error, "EncodingError U+9488");
expect(() => {ms932Encoder.encode("\u9489")}).to.throw(Error, "EncodingError U+9489");
expect(() => {ms932Encoder.encode("\u948A")}).to.throw(Error, "EncodingError U+948A");
expect(() => {ms932Encoder.encode("\u948B")}).to.throw(Error, "EncodingError U+948B");
expect(() => {ms932Encoder.encode("\u948C")}).to.throw(Error, "EncodingError U+948C");
expect(() => {ms932Encoder.encode("\u948D")}).to.throw(Error, "EncodingError U+948D");
expect(() => {ms932Encoder.encode("\u948E")}).to.throw(Error, "EncodingError U+948E");
expect(() => {ms932Encoder.encode("\u948F")}).to.throw(Error, "EncodingError U+948F");
expect(() => {ms932Encoder.encode("\u9490")}).to.throw(Error, "EncodingError U+9490");
expect(() => {ms932Encoder.encode("\u9491")}).to.throw(Error, "EncodingError U+9491");
expect(() => {ms932Encoder.encode("\u9492")}).to.throw(Error, "EncodingError U+9492");
expect(() => {ms932Encoder.encode("\u9493")}).to.throw(Error, "EncodingError U+9493");
expect(() => {ms932Encoder.encode("\u9494")}).to.throw(Error, "EncodingError U+9494");
expect(() => {ms932Encoder.encode("\u9495")}).to.throw(Error, "EncodingError U+9495");
expect(() => {ms932Encoder.encode("\u9496")}).to.throw(Error, "EncodingError U+9496");
expect(() => {ms932Encoder.encode("\u9497")}).to.throw(Error, "EncodingError U+9497");
expect(() => {ms932Encoder.encode("\u9498")}).to.throw(Error, "EncodingError U+9498");
expect(() => {ms932Encoder.encode("\u9499")}).to.throw(Error, "EncodingError U+9499");
expect(() => {ms932Encoder.encode("\u949A")}).to.throw(Error, "EncodingError U+949A");
expect(() => {ms932Encoder.encode("\u949B")}).to.throw(Error, "EncodingError U+949B");
expect(() => {ms932Encoder.encode("\u949C")}).to.throw(Error, "EncodingError U+949C");
expect(() => {ms932Encoder.encode("\u949D")}).to.throw(Error, "EncodingError U+949D");
expect(() => {ms932Encoder.encode("\u949E")}).to.throw(Error, "EncodingError U+949E");
expect(() => {ms932Encoder.encode("\u949F")}).to.throw(Error, "EncodingError U+949F");
expect(() => {ms932Encoder.encode("\u94A0")}).to.throw(Error, "EncodingError U+94A0");
expect(() => {ms932Encoder.encode("\u94A1")}).to.throw(Error, "EncodingError U+94A1");
expect(() => {ms932Encoder.encode("\u94A2")}).to.throw(Error, "EncodingError U+94A2");
expect(() => {ms932Encoder.encode("\u94A3")}).to.throw(Error, "EncodingError U+94A3");
expect(() => {ms932Encoder.encode("\u94A4")}).to.throw(Error, "EncodingError U+94A4");
expect(() => {ms932Encoder.encode("\u94A5")}).to.throw(Error, "EncodingError U+94A5");
expect(() => {ms932Encoder.encode("\u94A6")}).to.throw(Error, "EncodingError U+94A6");
expect(() => {ms932Encoder.encode("\u94A7")}).to.throw(Error, "EncodingError U+94A7");
expect(() => {ms932Encoder.encode("\u94A8")}).to.throw(Error, "EncodingError U+94A8");
expect(() => {ms932Encoder.encode("\u94A9")}).to.throw(Error, "EncodingError U+94A9");
expect(() => {ms932Encoder.encode("\u94AA")}).to.throw(Error, "EncodingError U+94AA");
expect(() => {ms932Encoder.encode("\u94AB")}).to.throw(Error, "EncodingError U+94AB");
expect(() => {ms932Encoder.encode("\u94AC")}).to.throw(Error, "EncodingError U+94AC");
expect(() => {ms932Encoder.encode("\u94AD")}).to.throw(Error, "EncodingError U+94AD");
expect(() => {ms932Encoder.encode("\u94AE")}).to.throw(Error, "EncodingError U+94AE");
expect(() => {ms932Encoder.encode("\u94AF")}).to.throw(Error, "EncodingError U+94AF");
expect(() => {ms932Encoder.encode("\u94B0")}).to.throw(Error, "EncodingError U+94B0");
expect(() => {ms932Encoder.encode("\u94B1")}).to.throw(Error, "EncodingError U+94B1");
expect(() => {ms932Encoder.encode("\u94B2")}).to.throw(Error, "EncodingError U+94B2");
expect(() => {ms932Encoder.encode("\u94B3")}).to.throw(Error, "EncodingError U+94B3");
expect(() => {ms932Encoder.encode("\u94B4")}).to.throw(Error, "EncodingError U+94B4");
expect(() => {ms932Encoder.encode("\u94B5")}).to.throw(Error, "EncodingError U+94B5");
expect(() => {ms932Encoder.encode("\u94B6")}).to.throw(Error, "EncodingError U+94B6");
expect(() => {ms932Encoder.encode("\u94B7")}).to.throw(Error, "EncodingError U+94B7");
expect(() => {ms932Encoder.encode("\u94B8")}).to.throw(Error, "EncodingError U+94B8");
expect(() => {ms932Encoder.encode("\u94B9")}).to.throw(Error, "EncodingError U+94B9");
expect(() => {ms932Encoder.encode("\u94BA")}).to.throw(Error, "EncodingError U+94BA");
expect(() => {ms932Encoder.encode("\u94BB")}).to.throw(Error, "EncodingError U+94BB");
expect(() => {ms932Encoder.encode("\u94BC")}).to.throw(Error, "EncodingError U+94BC");
expect(() => {ms932Encoder.encode("\u94BD")}).to.throw(Error, "EncodingError U+94BD");
expect(() => {ms932Encoder.encode("\u94BE")}).to.throw(Error, "EncodingError U+94BE");
expect(() => {ms932Encoder.encode("\u94BF")}).to.throw(Error, "EncodingError U+94BF");
expect(() => {ms932Encoder.encode("\u94C0")}).to.throw(Error, "EncodingError U+94C0");
expect(() => {ms932Encoder.encode("\u94C1")}).to.throw(Error, "EncodingError U+94C1");
expect(() => {ms932Encoder.encode("\u94C2")}).to.throw(Error, "EncodingError U+94C2");
expect(() => {ms932Encoder.encode("\u94C3")}).to.throw(Error, "EncodingError U+94C3");
expect(() => {ms932Encoder.encode("\u94C4")}).to.throw(Error, "EncodingError U+94C4");
expect(() => {ms932Encoder.encode("\u94C5")}).to.throw(Error, "EncodingError U+94C5");
expect(() => {ms932Encoder.encode("\u94C6")}).to.throw(Error, "EncodingError U+94C6");
expect(() => {ms932Encoder.encode("\u94C7")}).to.throw(Error, "EncodingError U+94C7");
expect(() => {ms932Encoder.encode("\u94C8")}).to.throw(Error, "EncodingError U+94C8");
expect(() => {ms932Encoder.encode("\u94C9")}).to.throw(Error, "EncodingError U+94C9");
expect(() => {ms932Encoder.encode("\u94CA")}).to.throw(Error, "EncodingError U+94CA");
expect(() => {ms932Encoder.encode("\u94CB")}).to.throw(Error, "EncodingError U+94CB");
expect(() => {ms932Encoder.encode("\u94CC")}).to.throw(Error, "EncodingError U+94CC");
expect(() => {ms932Encoder.encode("\u94CD")}).to.throw(Error, "EncodingError U+94CD");
expect(() => {ms932Encoder.encode("\u94CE")}).to.throw(Error, "EncodingError U+94CE");
expect(() => {ms932Encoder.encode("\u94CF")}).to.throw(Error, "EncodingError U+94CF");
expect(() => {ms932Encoder.encode("\u94D0")}).to.throw(Error, "EncodingError U+94D0");
expect(() => {ms932Encoder.encode("\u94D1")}).to.throw(Error, "EncodingError U+94D1");
expect(() => {ms932Encoder.encode("\u94D2")}).to.throw(Error, "EncodingError U+94D2");
expect(() => {ms932Encoder.encode("\u94D3")}).to.throw(Error, "EncodingError U+94D3");
expect(() => {ms932Encoder.encode("\u94D4")}).to.throw(Error, "EncodingError U+94D4");
expect(() => {ms932Encoder.encode("\u94D5")}).to.throw(Error, "EncodingError U+94D5");
expect(() => {ms932Encoder.encode("\u94D6")}).to.throw(Error, "EncodingError U+94D6");
expect(() => {ms932Encoder.encode("\u94D7")}).to.throw(Error, "EncodingError U+94D7");
expect(() => {ms932Encoder.encode("\u94D8")}).to.throw(Error, "EncodingError U+94D8");
expect(() => {ms932Encoder.encode("\u94D9")}).to.throw(Error, "EncodingError U+94D9");
expect(() => {ms932Encoder.encode("\u94DA")}).to.throw(Error, "EncodingError U+94DA");
expect(() => {ms932Encoder.encode("\u94DB")}).to.throw(Error, "EncodingError U+94DB");
expect(() => {ms932Encoder.encode("\u94DC")}).to.throw(Error, "EncodingError U+94DC");
expect(() => {ms932Encoder.encode("\u94DD")}).to.throw(Error, "EncodingError U+94DD");
expect(() => {ms932Encoder.encode("\u94DE")}).to.throw(Error, "EncodingError U+94DE");
expect(() => {ms932Encoder.encode("\u94DF")}).to.throw(Error, "EncodingError U+94DF");
expect(() => {ms932Encoder.encode("\u94E0")}).to.throw(Error, "EncodingError U+94E0");
expect(() => {ms932Encoder.encode("\u94E1")}).to.throw(Error, "EncodingError U+94E1");
expect(() => {ms932Encoder.encode("\u94E2")}).to.throw(Error, "EncodingError U+94E2");
expect(() => {ms932Encoder.encode("\u94E3")}).to.throw(Error, "EncodingError U+94E3");
expect(() => {ms932Encoder.encode("\u94E4")}).to.throw(Error, "EncodingError U+94E4");
expect(() => {ms932Encoder.encode("\u94E5")}).to.throw(Error, "EncodingError U+94E5");
expect(() => {ms932Encoder.encode("\u94E6")}).to.throw(Error, "EncodingError U+94E6");
expect(() => {ms932Encoder.encode("\u94E7")}).to.throw(Error, "EncodingError U+94E7");
expect(() => {ms932Encoder.encode("\u94E8")}).to.throw(Error, "EncodingError U+94E8");
expect(() => {ms932Encoder.encode("\u94E9")}).to.throw(Error, "EncodingError U+94E9");
expect(() => {ms932Encoder.encode("\u94EA")}).to.throw(Error, "EncodingError U+94EA");
expect(() => {ms932Encoder.encode("\u94EB")}).to.throw(Error, "EncodingError U+94EB");
expect(() => {ms932Encoder.encode("\u94EC")}).to.throw(Error, "EncodingError U+94EC");
expect(() => {ms932Encoder.encode("\u94ED")}).to.throw(Error, "EncodingError U+94ED");
expect(() => {ms932Encoder.encode("\u94EE")}).to.throw(Error, "EncodingError U+94EE");
expect(() => {ms932Encoder.encode("\u94EF")}).to.throw(Error, "EncodingError U+94EF");
expect(() => {ms932Encoder.encode("\u94F0")}).to.throw(Error, "EncodingError U+94F0");
expect(() => {ms932Encoder.encode("\u94F1")}).to.throw(Error, "EncodingError U+94F1");
expect(() => {ms932Encoder.encode("\u94F2")}).to.throw(Error, "EncodingError U+94F2");
expect(() => {ms932Encoder.encode("\u94F3")}).to.throw(Error, "EncodingError U+94F3");
expect(() => {ms932Encoder.encode("\u94F4")}).to.throw(Error, "EncodingError U+94F4");
expect(() => {ms932Encoder.encode("\u94F5")}).to.throw(Error, "EncodingError U+94F5");
expect(() => {ms932Encoder.encode("\u94F6")}).to.throw(Error, "EncodingError U+94F6");
expect(() => {ms932Encoder.encode("\u94F7")}).to.throw(Error, "EncodingError U+94F7");
expect(() => {ms932Encoder.encode("\u94F8")}).to.throw(Error, "EncodingError U+94F8");
expect(() => {ms932Encoder.encode("\u94F9")}).to.throw(Error, "EncodingError U+94F9");
expect(() => {ms932Encoder.encode("\u94FA")}).to.throw(Error, "EncodingError U+94FA");
expect(() => {ms932Encoder.encode("\u94FB")}).to.throw(Error, "EncodingError U+94FB");
expect(() => {ms932Encoder.encode("\u94FC")}).to.throw(Error, "EncodingError U+94FC");
expect(() => {ms932Encoder.encode("\u94FD")}).to.throw(Error, "EncodingError U+94FD");
expect(() => {ms932Encoder.encode("\u94FE")}).to.throw(Error, "EncodingError U+94FE");
expect(() => {ms932Encoder.encode("\u94FF")}).to.throw(Error, "EncodingError U+94FF");
expect(() => {ms932Encoder.encode("\u9500")}).to.throw(Error, "EncodingError U+9500");
expect(() => {ms932Encoder.encode("\u9501")}).to.throw(Error, "EncodingError U+9501");
expect(() => {ms932Encoder.encode("\u9502")}).to.throw(Error, "EncodingError U+9502");
expect(() => {ms932Encoder.encode("\u9503")}).to.throw(Error, "EncodingError U+9503");
expect(() => {ms932Encoder.encode("\u9504")}).to.throw(Error, "EncodingError U+9504");
expect(() => {ms932Encoder.encode("\u9505")}).to.throw(Error, "EncodingError U+9505");
expect(() => {ms932Encoder.encode("\u9506")}).to.throw(Error, "EncodingError U+9506");
expect(() => {ms932Encoder.encode("\u9507")}).to.throw(Error, "EncodingError U+9507");
expect(() => {ms932Encoder.encode("\u9508")}).to.throw(Error, "EncodingError U+9508");
expect(() => {ms932Encoder.encode("\u9509")}).to.throw(Error, "EncodingError U+9509");
expect(() => {ms932Encoder.encode("\u950A")}).to.throw(Error, "EncodingError U+950A");
expect(() => {ms932Encoder.encode("\u950B")}).to.throw(Error, "EncodingError U+950B");
expect(() => {ms932Encoder.encode("\u950C")}).to.throw(Error, "EncodingError U+950C");
expect(() => {ms932Encoder.encode("\u950D")}).to.throw(Error, "EncodingError U+950D");
expect(() => {ms932Encoder.encode("\u950E")}).to.throw(Error, "EncodingError U+950E");
expect(() => {ms932Encoder.encode("\u950F")}).to.throw(Error, "EncodingError U+950F");
expect(() => {ms932Encoder.encode("\u9510")}).to.throw(Error, "EncodingError U+9510");
expect(() => {ms932Encoder.encode("\u9511")}).to.throw(Error, "EncodingError U+9511");
expect(() => {ms932Encoder.encode("\u9512")}).to.throw(Error, "EncodingError U+9512");
expect(() => {ms932Encoder.encode("\u9513")}).to.throw(Error, "EncodingError U+9513");
expect(() => {ms932Encoder.encode("\u9514")}).to.throw(Error, "EncodingError U+9514");
expect(() => {ms932Encoder.encode("\u9515")}).to.throw(Error, "EncodingError U+9515");
expect(() => {ms932Encoder.encode("\u9516")}).to.throw(Error, "EncodingError U+9516");
expect(() => {ms932Encoder.encode("\u9517")}).to.throw(Error, "EncodingError U+9517");
expect(() => {ms932Encoder.encode("\u9518")}).to.throw(Error, "EncodingError U+9518");
expect(() => {ms932Encoder.encode("\u9519")}).to.throw(Error, "EncodingError U+9519");
expect(() => {ms932Encoder.encode("\u951A")}).to.throw(Error, "EncodingError U+951A");
expect(() => {ms932Encoder.encode("\u951B")}).to.throw(Error, "EncodingError U+951B");
expect(() => {ms932Encoder.encode("\u951C")}).to.throw(Error, "EncodingError U+951C");
expect(() => {ms932Encoder.encode("\u951D")}).to.throw(Error, "EncodingError U+951D");
expect(() => {ms932Encoder.encode("\u951E")}).to.throw(Error, "EncodingError U+951E");
expect(() => {ms932Encoder.encode("\u951F")}).to.throw(Error, "EncodingError U+951F");
expect(() => {ms932Encoder.encode("\u9520")}).to.throw(Error, "EncodingError U+9520");
expect(() => {ms932Encoder.encode("\u9521")}).to.throw(Error, "EncodingError U+9521");
expect(() => {ms932Encoder.encode("\u9522")}).to.throw(Error, "EncodingError U+9522");
expect(() => {ms932Encoder.encode("\u9523")}).to.throw(Error, "EncodingError U+9523");
expect(() => {ms932Encoder.encode("\u9524")}).to.throw(Error, "EncodingError U+9524");
expect(() => {ms932Encoder.encode("\u9525")}).to.throw(Error, "EncodingError U+9525");
expect(() => {ms932Encoder.encode("\u9526")}).to.throw(Error, "EncodingError U+9526");
expect(() => {ms932Encoder.encode("\u9527")}).to.throw(Error, "EncodingError U+9527");
expect(() => {ms932Encoder.encode("\u9528")}).to.throw(Error, "EncodingError U+9528");
expect(() => {ms932Encoder.encode("\u9529")}).to.throw(Error, "EncodingError U+9529");
expect(() => {ms932Encoder.encode("\u952A")}).to.throw(Error, "EncodingError U+952A");
expect(() => {ms932Encoder.encode("\u952B")}).to.throw(Error, "EncodingError U+952B");
expect(() => {ms932Encoder.encode("\u952C")}).to.throw(Error, "EncodingError U+952C");
expect(() => {ms932Encoder.encode("\u952D")}).to.throw(Error, "EncodingError U+952D");
expect(() => {ms932Encoder.encode("\u952E")}).to.throw(Error, "EncodingError U+952E");
expect(() => {ms932Encoder.encode("\u952F")}).to.throw(Error, "EncodingError U+952F");
expect(() => {ms932Encoder.encode("\u9530")}).to.throw(Error, "EncodingError U+9530");
expect(() => {ms932Encoder.encode("\u9531")}).to.throw(Error, "EncodingError U+9531");
expect(() => {ms932Encoder.encode("\u9532")}).to.throw(Error, "EncodingError U+9532");
expect(() => {ms932Encoder.encode("\u9533")}).to.throw(Error, "EncodingError U+9533");
expect(() => {ms932Encoder.encode("\u9534")}).to.throw(Error, "EncodingError U+9534");
expect(() => {ms932Encoder.encode("\u9535")}).to.throw(Error, "EncodingError U+9535");
expect(() => {ms932Encoder.encode("\u9536")}).to.throw(Error, "EncodingError U+9536");
expect(() => {ms932Encoder.encode("\u9537")}).to.throw(Error, "EncodingError U+9537");
expect(() => {ms932Encoder.encode("\u9538")}).to.throw(Error, "EncodingError U+9538");
expect(() => {ms932Encoder.encode("\u9539")}).to.throw(Error, "EncodingError U+9539");
expect(() => {ms932Encoder.encode("\u953A")}).to.throw(Error, "EncodingError U+953A");
expect(() => {ms932Encoder.encode("\u953B")}).to.throw(Error, "EncodingError U+953B");
expect(() => {ms932Encoder.encode("\u953C")}).to.throw(Error, "EncodingError U+953C");
expect(() => {ms932Encoder.encode("\u953D")}).to.throw(Error, "EncodingError U+953D");
expect(() => {ms932Encoder.encode("\u953E")}).to.throw(Error, "EncodingError U+953E");
expect(() => {ms932Encoder.encode("\u953F")}).to.throw(Error, "EncodingError U+953F");
expect(() => {ms932Encoder.encode("\u9540")}).to.throw(Error, "EncodingError U+9540");
expect(() => {ms932Encoder.encode("\u9541")}).to.throw(Error, "EncodingError U+9541");
expect(() => {ms932Encoder.encode("\u9542")}).to.throw(Error, "EncodingError U+9542");
expect(() => {ms932Encoder.encode("\u9543")}).to.throw(Error, "EncodingError U+9543");
expect(() => {ms932Encoder.encode("\u9544")}).to.throw(Error, "EncodingError U+9544");
expect(() => {ms932Encoder.encode("\u9545")}).to.throw(Error, "EncodingError U+9545");
expect(() => {ms932Encoder.encode("\u9546")}).to.throw(Error, "EncodingError U+9546");
expect(() => {ms932Encoder.encode("\u9547")}).to.throw(Error, "EncodingError U+9547");
expect(() => {ms932Encoder.encode("\u9548")}).to.throw(Error, "EncodingError U+9548");
expect(() => {ms932Encoder.encode("\u9549")}).to.throw(Error, "EncodingError U+9549");
expect(() => {ms932Encoder.encode("\u954A")}).to.throw(Error, "EncodingError U+954A");
expect(() => {ms932Encoder.encode("\u954B")}).to.throw(Error, "EncodingError U+954B");
expect(() => {ms932Encoder.encode("\u954C")}).to.throw(Error, "EncodingError U+954C");
expect(() => {ms932Encoder.encode("\u954D")}).to.throw(Error, "EncodingError U+954D");
expect(() => {ms932Encoder.encode("\u954E")}).to.throw(Error, "EncodingError U+954E");
expect(() => {ms932Encoder.encode("\u954F")}).to.throw(Error, "EncodingError U+954F");
expect(() => {ms932Encoder.encode("\u9550")}).to.throw(Error, "EncodingError U+9550");
expect(() => {ms932Encoder.encode("\u9551")}).to.throw(Error, "EncodingError U+9551");
expect(() => {ms932Encoder.encode("\u9552")}).to.throw(Error, "EncodingError U+9552");
expect(() => {ms932Encoder.encode("\u9553")}).to.throw(Error, "EncodingError U+9553");
expect(() => {ms932Encoder.encode("\u9554")}).to.throw(Error, "EncodingError U+9554");
expect(() => {ms932Encoder.encode("\u9555")}).to.throw(Error, "EncodingError U+9555");
expect(() => {ms932Encoder.encode("\u9556")}).to.throw(Error, "EncodingError U+9556");
expect(() => {ms932Encoder.encode("\u9557")}).to.throw(Error, "EncodingError U+9557");
expect(() => {ms932Encoder.encode("\u9558")}).to.throw(Error, "EncodingError U+9558");
expect(() => {ms932Encoder.encode("\u9559")}).to.throw(Error, "EncodingError U+9559");
expect(() => {ms932Encoder.encode("\u955A")}).to.throw(Error, "EncodingError U+955A");
expect(() => {ms932Encoder.encode("\u955B")}).to.throw(Error, "EncodingError U+955B");
expect(() => {ms932Encoder.encode("\u955C")}).to.throw(Error, "EncodingError U+955C");
expect(() => {ms932Encoder.encode("\u955D")}).to.throw(Error, "EncodingError U+955D");
expect(() => {ms932Encoder.encode("\u955E")}).to.throw(Error, "EncodingError U+955E");
expect(() => {ms932Encoder.encode("\u955F")}).to.throw(Error, "EncodingError U+955F");
expect(() => {ms932Encoder.encode("\u9560")}).to.throw(Error, "EncodingError U+9560");
expect(() => {ms932Encoder.encode("\u9561")}).to.throw(Error, "EncodingError U+9561");
expect(() => {ms932Encoder.encode("\u9562")}).to.throw(Error, "EncodingError U+9562");
expect(() => {ms932Encoder.encode("\u9563")}).to.throw(Error, "EncodingError U+9563");
expect(() => {ms932Encoder.encode("\u9564")}).to.throw(Error, "EncodingError U+9564");
expect(() => {ms932Encoder.encode("\u9565")}).to.throw(Error, "EncodingError U+9565");
expect(() => {ms932Encoder.encode("\u9566")}).to.throw(Error, "EncodingError U+9566");
expect(() => {ms932Encoder.encode("\u9567")}).to.throw(Error, "EncodingError U+9567");
expect(() => {ms932Encoder.encode("\u9568")}).to.throw(Error, "EncodingError U+9568");
expect(() => {ms932Encoder.encode("\u9569")}).to.throw(Error, "EncodingError U+9569");
expect(() => {ms932Encoder.encode("\u956A")}).to.throw(Error, "EncodingError U+956A");
expect(() => {ms932Encoder.encode("\u956B")}).to.throw(Error, "EncodingError U+956B");
expect(() => {ms932Encoder.encode("\u956C")}).to.throw(Error, "EncodingError U+956C");
expect(() => {ms932Encoder.encode("\u956D")}).to.throw(Error, "EncodingError U+956D");
expect(() => {ms932Encoder.encode("\u956E")}).to.throw(Error, "EncodingError U+956E");
expect(() => {ms932Encoder.encode("\u956F")}).to.throw(Error, "EncodingError U+956F");
expect(() => {ms932Encoder.encode("\u9570")}).to.throw(Error, "EncodingError U+9570");
expect(() => {ms932Encoder.encode("\u9571")}).to.throw(Error, "EncodingError U+9571");
expect(() => {ms932Encoder.encode("\u9572")}).to.throw(Error, "EncodingError U+9572");
expect(() => {ms932Encoder.encode("\u9573")}).to.throw(Error, "EncodingError U+9573");
expect(() => {ms932Encoder.encode("\u9574")}).to.throw(Error, "EncodingError U+9574");
expect(() => {ms932Encoder.encode("\u9575")}).to.throw(Error, "EncodingError U+9575");
expect(() => {ms932Encoder.encode("\u9576")}).to.throw(Error, "EncodingError U+9576");
r = r && ([...ms932Encoder.encode("長")].join(",") === "146,183"); // U+9577
expect(() => {ms932Encoder.encode("\u9578")}).to.throw(Error, "EncodingError U+9578");
expect(() => {ms932Encoder.encode("\u9579")}).to.throw(Error, "EncodingError U+9579");
expect(() => {ms932Encoder.encode("\u957A")}).to.throw(Error, "EncodingError U+957A");
expect(() => {ms932Encoder.encode("\u957B")}).to.throw(Error, "EncodingError U+957B");
expect(() => {ms932Encoder.encode("\u957C")}).to.throw(Error, "EncodingError U+957C");
expect(() => {ms932Encoder.encode("\u957D")}).to.throw(Error, "EncodingError U+957D");
expect(() => {ms932Encoder.encode("\u957E")}).to.throw(Error, "EncodingError U+957E");
expect(() => {ms932Encoder.encode("\u957F")}).to.throw(Error, "EncodingError U+957F");
r = r && ([...ms932Encoder.encode("門")].join(",") === "150,229"); // U+9580
expect(() => {ms932Encoder.encode("\u9581")}).to.throw(Error, "EncodingError U+9581");
r = r && ([...ms932Encoder.encode("閂閃")].join(",") === "232,120,145,77"); // U+9582
expect(() => {ms932Encoder.encode("\u9584")}).to.throw(Error, "EncodingError U+9584");
expect(() => {ms932Encoder.encode("\u9585")}).to.throw(Error, "EncodingError U+9585");
expect(() => {ms932Encoder.encode("\u9586")}).to.throw(Error, "EncodingError U+9586");
r = r && ([...ms932Encoder.encode("閇")].join(",") === "232,121"); // U+9587
expect(() => {ms932Encoder.encode("\u9588")}).to.throw(Error, "EncodingError U+9588");
r = r && ([...ms932Encoder.encode("閉閊開")].join(",") === "149,194,232,122,138,74"); // U+9589
expect(() => {ms932Encoder.encode("\u958C")}).to.throw(Error, "EncodingError U+958C");
expect(() => {ms932Encoder.encode("\u958D")}).to.throw(Error, "EncodingError U+958D");
expect(() => {ms932Encoder.encode("\u958E")}).to.throw(Error, "EncodingError U+958E");
r = r && ([...ms932Encoder.encode("閏")].join(",") === "137,91"); // U+958F
expect(() => {ms932Encoder.encode("\u9590")}).to.throw(Error, "EncodingError U+9590");
r = r && ([...ms932Encoder.encode("閑閒間閔")].join(",") === "138,213,251,232,138,212,232,123"); // U+9591
expect(() => {ms932Encoder.encode("\u9595")}).to.throw(Error, "EncodingError U+9595");
r = r && ([...ms932Encoder.encode("閖")].join(",") === "232,124"); // U+9596
expect(() => {ms932Encoder.encode("\u9597")}).to.throw(Error, "EncodingError U+9597");
r = r && ([...ms932Encoder.encode("閘閙")].join(",") === "232,125,232,126"); // U+9598
expect(() => {ms932Encoder.encode("\u959A")}).to.throw(Error, "EncodingError U+959A");
expect(() => {ms932Encoder.encode("\u959B")}).to.throw(Error, "EncodingError U+959B");
expect(() => {ms932Encoder.encode("\u959C")}).to.throw(Error, "EncodingError U+959C");
expect(() => {ms932Encoder.encode("\u959D")}).to.throw(Error, "EncodingError U+959D");
expect(() => {ms932Encoder.encode("\u959E")}).to.throw(Error, "EncodingError U+959E");
expect(() => {ms932Encoder.encode("\u959F")}).to.throw(Error, "EncodingError U+959F");
r = r && ([...ms932Encoder.encode("閠")].join(",") === "232,128"); // U+95A0
expect(() => {ms932Encoder.encode("\u95A1")}).to.throw(Error, "EncodingError U+95A1");
r = r && ([...ms932Encoder.encode("関閣閤閥")].join(",") === "138,214,138,116,141,125,148,180"); // U+95A2
expect(() => {ms932Encoder.encode("\u95A6")}).to.throw(Error, "EncodingError U+95A6");
r = r && ([...ms932Encoder.encode("閧閨")].join(",") === "232,130,232,129"); // U+95A7
expect(() => {ms932Encoder.encode("\u95A9")}).to.throw(Error, "EncodingError U+95A9");
expect(() => {ms932Encoder.encode("\u95AA")}).to.throw(Error, "EncodingError U+95AA");
expect(() => {ms932Encoder.encode("\u95AB")}).to.throw(Error, "EncodingError U+95AB");
expect(() => {ms932Encoder.encode("\u95AC")}).to.throw(Error, "EncodingError U+95AC");
r = r && ([...ms932Encoder.encode("閭")].join(",") === "232,131"); // U+95AD
expect(() => {ms932Encoder.encode("\u95AE")}).to.throw(Error, "EncodingError U+95AE");
expect(() => {ms932Encoder.encode("\u95AF")}).to.throw(Error, "EncodingError U+95AF");
expect(() => {ms932Encoder.encode("\u95B0")}).to.throw(Error, "EncodingError U+95B0");
expect(() => {ms932Encoder.encode("\u95B1")}).to.throw(Error, "EncodingError U+95B1");
r = r && ([...ms932Encoder.encode("閲")].join(",") === "137,123"); // U+95B2
expect(() => {ms932Encoder.encode("\u95B3")}).to.throw(Error, "EncodingError U+95B3");
expect(() => {ms932Encoder.encode("\u95B4")}).to.throw(Error, "EncodingError U+95B4");
expect(() => {ms932Encoder.encode("\u95B5")}).to.throw(Error, "EncodingError U+95B5");
expect(() => {ms932Encoder.encode("\u95B6")}).to.throw(Error, "EncodingError U+95B6");
expect(() => {ms932Encoder.encode("\u95B7")}).to.throw(Error, "EncodingError U+95B7");
expect(() => {ms932Encoder.encode("\u95B8")}).to.throw(Error, "EncodingError U+95B8");
r = r && ([...ms932Encoder.encode("閹")].join(",") === "232,134"); // U+95B9
expect(() => {ms932Encoder.encode("\u95BA")}).to.throw(Error, "EncodingError U+95BA");
r = r && ([...ms932Encoder.encode("閻閼")].join(",") === "232,133,232,132"); // U+95BB
expect(() => {ms932Encoder.encode("\u95BD")}).to.throw(Error, "EncodingError U+95BD");
r = r && ([...ms932Encoder.encode("閾")].join(",") === "232,135"); // U+95BE
expect(() => {ms932Encoder.encode("\u95BF")}).to.throw(Error, "EncodingError U+95BF");
expect(() => {ms932Encoder.encode("\u95C0")}).to.throw(Error, "EncodingError U+95C0");
expect(() => {ms932Encoder.encode("\u95C1")}).to.throw(Error, "EncodingError U+95C1");
expect(() => {ms932Encoder.encode("\u95C2")}).to.throw(Error, "EncodingError U+95C2");
r = r && ([...ms932Encoder.encode("闃")].join(",") === "232,138"); // U+95C3
expect(() => {ms932Encoder.encode("\u95C4")}).to.throw(Error, "EncodingError U+95C4");
expect(() => {ms932Encoder.encode("\u95C5")}).to.throw(Error, "EncodingError U+95C5");
expect(() => {ms932Encoder.encode("\u95C6")}).to.throw(Error, "EncodingError U+95C6");
r = r && ([...ms932Encoder.encode("闇")].join(",") === "136,197"); // U+95C7
expect(() => {ms932Encoder.encode("\u95C8")}).to.throw(Error, "EncodingError U+95C8");
expect(() => {ms932Encoder.encode("\u95C9")}).to.throw(Error, "EncodingError U+95C9");
r = r && ([...ms932Encoder.encode("闊")].join(",") === "232,136"); // U+95CA
expect(() => {ms932Encoder.encode("\u95CB")}).to.throw(Error, "EncodingError U+95CB");
r = r && ([...ms932Encoder.encode("闌闍")].join(",") === "232,140,232,139"); // U+95CC
expect(() => {ms932Encoder.encode("\u95CE")}).to.throw(Error, "EncodingError U+95CE");
expect(() => {ms932Encoder.encode("\u95CF")}).to.throw(Error, "EncodingError U+95CF");
expect(() => {ms932Encoder.encode("\u95D0")}).to.throw(Error, "EncodingError U+95D0");
expect(() => {ms932Encoder.encode("\u95D1")}).to.throw(Error, "EncodingError U+95D1");
expect(() => {ms932Encoder.encode("\u95D2")}).to.throw(Error, "EncodingError U+95D2");
expect(() => {ms932Encoder.encode("\u95D3")}).to.throw(Error, "EncodingError U+95D3");
r = r && ([...ms932Encoder.encode("闔闕闖")].join(",") === "232,142,232,141,232,143"); // U+95D4
expect(() => {ms932Encoder.encode("\u95D7")}).to.throw(Error, "EncodingError U+95D7");
r = r && ([...ms932Encoder.encode("闘")].join(",") === "147,172"); // U+95D8
expect(() => {ms932Encoder.encode("\u95D9")}).to.throw(Error, "EncodingError U+95D9");
expect(() => {ms932Encoder.encode("\u95DA")}).to.throw(Error, "EncodingError U+95DA");
expect(() => {ms932Encoder.encode("\u95DB")}).to.throw(Error, "EncodingError U+95DB");
r = r && ([...ms932Encoder.encode("關")].join(",") === "232,144"); // U+95DC
expect(() => {ms932Encoder.encode("\u95DD")}).to.throw(Error, "EncodingError U+95DD");
expect(() => {ms932Encoder.encode("\u95DE")}).to.throw(Error, "EncodingError U+95DE");
expect(() => {ms932Encoder.encode("\u95DF")}).to.throw(Error, "EncodingError U+95DF");
expect(() => {ms932Encoder.encode("\u95E0")}).to.throw(Error, "EncodingError U+95E0");
r = r && ([...ms932Encoder.encode("闡闢")].join(",") === "232,145,232,147"); // U+95E1
expect(() => {ms932Encoder.encode("\u95E3")}).to.throw(Error, "EncodingError U+95E3");
expect(() => {ms932Encoder.encode("\u95E4")}).to.throw(Error, "EncodingError U+95E4");
r = r && ([...ms932Encoder.encode("闥")].join(",") === "232,146"); // U+95E5
expect(() => {ms932Encoder.encode("\u95E6")}).to.throw(Error, "EncodingError U+95E6");
expect(() => {ms932Encoder.encode("\u95E7")}).to.throw(Error, "EncodingError U+95E7");
expect(() => {ms932Encoder.encode("\u95E8")}).to.throw(Error, "EncodingError U+95E8");
expect(() => {ms932Encoder.encode("\u95E9")}).to.throw(Error, "EncodingError U+95E9");
expect(() => {ms932Encoder.encode("\u95EA")}).to.throw(Error, "EncodingError U+95EA");
expect(() => {ms932Encoder.encode("\u95EB")}).to.throw(Error, "EncodingError U+95EB");
expect(() => {ms932Encoder.encode("\u95EC")}).to.throw(Error, "EncodingError U+95EC");
expect(() => {ms932Encoder.encode("\u95ED")}).to.throw(Error, "EncodingError U+95ED");
expect(() => {ms932Encoder.encode("\u95EE")}).to.throw(Error, "EncodingError U+95EE");
expect(() => {ms932Encoder.encode("\u95EF")}).to.throw(Error, "EncodingError U+95EF");
expect(() => {ms932Encoder.encode("\u95F0")}).to.throw(Error, "EncodingError U+95F0");
expect(() => {ms932Encoder.encode("\u95F1")}).to.throw(Error, "EncodingError U+95F1");
expect(() => {ms932Encoder.encode("\u95F2")}).to.throw(Error, "EncodingError U+95F2");
expect(() => {ms932Encoder.encode("\u95F3")}).to.throw(Error, "EncodingError U+95F3");
expect(() => {ms932Encoder.encode("\u95F4")}).to.throw(Error, "EncodingError U+95F4");
expect(() => {ms932Encoder.encode("\u95F5")}).to.throw(Error, "EncodingError U+95F5");
expect(() => {ms932Encoder.encode("\u95F6")}).to.throw(Error, "EncodingError U+95F6");
expect(() => {ms932Encoder.encode("\u95F7")}).to.throw(Error, "EncodingError U+95F7");
expect(() => {ms932Encoder.encode("\u95F8")}).to.throw(Error, "EncodingError U+95F8");
expect(() => {ms932Encoder.encode("\u95F9")}).to.throw(Error, "EncodingError U+95F9");
expect(() => {ms932Encoder.encode("\u95FA")}).to.throw(Error, "EncodingError U+95FA");
expect(() => {ms932Encoder.encode("\u95FB")}).to.throw(Error, "EncodingError U+95FB");
expect(() => {ms932Encoder.encode("\u95FC")}).to.throw(Error, "EncodingError U+95FC");
expect(() => {ms932Encoder.encode("\u95FD")}).to.throw(Error, "EncodingError U+95FD");
expect(() => {ms932Encoder.encode("\u95FE")}).to.throw(Error, "EncodingError U+95FE");
expect(() => {ms932Encoder.encode("\u95FF")}).to.throw(Error, "EncodingError U+95FF");
expect(() => {ms932Encoder.encode("\u9600")}).to.throw(Error, "EncodingError U+9600");
expect(() => {ms932Encoder.encode("\u9601")}).to.throw(Error, "EncodingError U+9601");
expect(() => {ms932Encoder.encode("\u9602")}).to.throw(Error, "EncodingError U+9602");
expect(() => {ms932Encoder.encode("\u9603")}).to.throw(Error, "EncodingError U+9603");
expect(() => {ms932Encoder.encode("\u9604")}).to.throw(Error, "EncodingError U+9604");
expect(() => {ms932Encoder.encode("\u9605")}).to.throw(Error, "EncodingError U+9605");
expect(() => {ms932Encoder.encode("\u9606")}).to.throw(Error, "EncodingError U+9606");
expect(() => {ms932Encoder.encode("\u9607")}).to.throw(Error, "EncodingError U+9607");
expect(() => {ms932Encoder.encode("\u9608")}).to.throw(Error, "EncodingError U+9608");
expect(() => {ms932Encoder.encode("\u9609")}).to.throw(Error, "EncodingError U+9609");
expect(() => {ms932Encoder.encode("\u960A")}).to.throw(Error, "EncodingError U+960A");
expect(() => {ms932Encoder.encode("\u960B")}).to.throw(Error, "EncodingError U+960B");
expect(() => {ms932Encoder.encode("\u960C")}).to.throw(Error, "EncodingError U+960C");
expect(() => {ms932Encoder.encode("\u960D")}).to.throw(Error, "EncodingError U+960D");
expect(() => {ms932Encoder.encode("\u960E")}).to.throw(Error, "EncodingError U+960E");
expect(() => {ms932Encoder.encode("\u960F")}).to.throw(Error, "EncodingError U+960F");
expect(() => {ms932Encoder.encode("\u9610")}).to.throw(Error, "EncodingError U+9610");
expect(() => {ms932Encoder.encode("\u9611")}).to.throw(Error, "EncodingError U+9611");
expect(() => {ms932Encoder.encode("\u9612")}).to.throw(Error, "EncodingError U+9612");
expect(() => {ms932Encoder.encode("\u9613")}).to.throw(Error, "EncodingError U+9613");
expect(() => {ms932Encoder.encode("\u9614")}).to.throw(Error, "EncodingError U+9614");
expect(() => {ms932Encoder.encode("\u9615")}).to.throw(Error, "EncodingError U+9615");
expect(() => {ms932Encoder.encode("\u9616")}).to.throw(Error, "EncodingError U+9616");
expect(() => {ms932Encoder.encode("\u9617")}).to.throw(Error, "EncodingError U+9617");
expect(() => {ms932Encoder.encode("\u9618")}).to.throw(Error, "EncodingError U+9618");
expect(() => {ms932Encoder.encode("\u9619")}).to.throw(Error, "EncodingError U+9619");
expect(() => {ms932Encoder.encode("\u961A")}).to.throw(Error, "EncodingError U+961A");
expect(() => {ms932Encoder.encode("\u961B")}).to.throw(Error, "EncodingError U+961B");
r = r && ([...ms932Encoder.encode("阜")].join(",") === "149,140"); // U+961C
expect(() => {ms932Encoder.encode("\u961D")}).to.throw(Error, "EncodingError U+961D");
expect(() => {ms932Encoder.encode("\u961E")}).to.throw(Error, "EncodingError U+961E");
expect(() => {ms932Encoder.encode("\u961F")}).to.throw(Error, "EncodingError U+961F");
expect(() => {ms932Encoder.encode("\u9620")}).to.throw(Error, "EncodingError U+9620");
r = r && ([...ms932Encoder.encode("阡")].join(",") === "232,148"); // U+9621
expect(() => {ms932Encoder.encode("\u9622")}).to.throw(Error, "EncodingError U+9622");
expect(() => {ms932Encoder.encode("\u9623")}).to.throw(Error, "EncodingError U+9623");
expect(() => {ms932Encoder.encode("\u9624")}).to.throw(Error, "EncodingError U+9624");
expect(() => {ms932Encoder.encode("\u9625")}).to.throw(Error, "EncodingError U+9625");
expect(() => {ms932Encoder.encode("\u9626")}).to.throw(Error, "EncodingError U+9626");
expect(() => {ms932Encoder.encode("\u9627")}).to.throw(Error, "EncodingError U+9627");
r = r && ([...ms932Encoder.encode("阨")].join(",") === "232,149"); // U+9628
expect(() => {ms932Encoder.encode("\u9629")}).to.throw(Error, "EncodingError U+9629");
r = r && ([...ms932Encoder.encode("阪")].join(",") === "141,227"); // U+962A
expect(() => {ms932Encoder.encode("\u962B")}).to.throw(Error, "EncodingError U+962B");
expect(() => {ms932Encoder.encode("\u962C")}).to.throw(Error, "EncodingError U+962C");
expect(() => {ms932Encoder.encode("\u962D")}).to.throw(Error, "EncodingError U+962D");
r = r && ([...ms932Encoder.encode("阮阯")].join(",") === "232,150,232,151"); // U+962E
expect(() => {ms932Encoder.encode("\u9630")}).to.throw(Error, "EncodingError U+9630");
expect(() => {ms932Encoder.encode("\u9631")}).to.throw(Error, "EncodingError U+9631");
r = r && ([...ms932Encoder.encode("防")].join(",") === "150,104"); // U+9632
expect(() => {ms932Encoder.encode("\u9633")}).to.throw(Error, "EncodingError U+9633");
expect(() => {ms932Encoder.encode("\u9634")}).to.throw(Error, "EncodingError U+9634");
expect(() => {ms932Encoder.encode("\u9635")}).to.throw(Error, "EncodingError U+9635");
expect(() => {ms932Encoder.encode("\u9636")}).to.throw(Error, "EncodingError U+9636");
expect(() => {ms932Encoder.encode("\u9637")}).to.throw(Error, "EncodingError U+9637");
expect(() => {ms932Encoder.encode("\u9638")}).to.throw(Error, "EncodingError U+9638");
expect(() => {ms932Encoder.encode("\u9639")}).to.throw(Error, "EncodingError U+9639");
expect(() => {ms932Encoder.encode("\u963A")}).to.throw(Error, "EncodingError U+963A");
r = r && ([...ms932Encoder.encode("阻")].join(",") === "145,106"); // U+963B
expect(() => {ms932Encoder.encode("\u963C")}).to.throw(Error, "EncodingError U+963C");
expect(() => {ms932Encoder.encode("\u963D")}).to.throw(Error, "EncodingError U+963D");
expect(() => {ms932Encoder.encode("\u963E")}).to.throw(Error, "EncodingError U+963E");
r = r && ([...ms932Encoder.encode("阿陀")].join(",") === "136,162,145,201"); // U+963F
expect(() => {ms932Encoder.encode("\u9641")}).to.throw(Error, "EncodingError U+9641");
r = r && ([...ms932Encoder.encode("陂")].join(",") === "232,152"); // U+9642
expect(() => {ms932Encoder.encode("\u9643")}).to.throw(Error, "EncodingError U+9643");
r = r && ([...ms932Encoder.encode("附")].join(",") === "149,141"); // U+9644
expect(() => {ms932Encoder.encode("\u9645")}).to.throw(Error, "EncodingError U+9645");
expect(() => {ms932Encoder.encode("\u9646")}).to.throw(Error, "EncodingError U+9646");
expect(() => {ms932Encoder.encode("\u9647")}).to.throw(Error, "EncodingError U+9647");
expect(() => {ms932Encoder.encode("\u9648")}).to.throw(Error, "EncodingError U+9648");
expect(() => {ms932Encoder.encode("\u9649")}).to.throw(Error, "EncodingError U+9649");
expect(() => {ms932Encoder.encode("\u964A")}).to.throw(Error, "EncodingError U+964A");
r = r && ([...ms932Encoder.encode("陋陌降")].join(",") === "232,155,232,153,141,126"); // U+964B
expect(() => {ms932Encoder.encode("\u964E")}).to.throw(Error, "EncodingError U+964E");
r = r && ([...ms932Encoder.encode("陏限")].join(",") === "232,154,140,192"); // U+964F
expect(() => {ms932Encoder.encode("\u9651")}).to.throw(Error, "EncodingError U+9651");
expect(() => {ms932Encoder.encode("\u9652")}).to.throw(Error, "EncodingError U+9652");
expect(() => {ms932Encoder.encode("\u9653")}).to.throw(Error, "EncodingError U+9653");
expect(() => {ms932Encoder.encode("\u9654")}).to.throw(Error, "EncodingError U+9654");
expect(() => {ms932Encoder.encode("\u9655")}).to.throw(Error, "EncodingError U+9655");
expect(() => {ms932Encoder.encode("\u9656")}).to.throw(Error, "EncodingError U+9656");
expect(() => {ms932Encoder.encode("\u9657")}).to.throw(Error, "EncodingError U+9657");
expect(() => {ms932Encoder.encode("\u9658")}).to.throw(Error, "EncodingError U+9658");
expect(() => {ms932Encoder.encode("\u9659")}).to.throw(Error, "EncodingError U+9659");
expect(() => {ms932Encoder.encode("\u965A")}).to.throw(Error, "EncodingError U+965A");
r = r && ([...ms932Encoder.encode("陛陜陝陞陟")].join(",") === "149,195,232,157,232,159,232,158,232,160"); // U+965B
expect(() => {ms932Encoder.encode("\u9660")}).to.throw(Error, "EncodingError U+9660");
expect(() => {ms932Encoder.encode("\u9661")}).to.throw(Error, "EncodingError U+9661");
r = r && ([...ms932Encoder.encode("院陣除陥陦")].join(",") === "137,64,144,119,143,156,138,215,232,161"); // U+9662
expect(() => {ms932Encoder.encode("\u9667")}).to.throw(Error, "EncodingError U+9667");
expect(() => {ms932Encoder.encode("\u9668")}).to.throw(Error, "EncodingError U+9668");
expect(() => {ms932Encoder.encode("\u9669")}).to.throw(Error, "EncodingError U+9669");
r = r && ([...ms932Encoder.encode("陪")].join(",") === "148,134"); // U+966A
expect(() => {ms932Encoder.encode("\u966B")}).to.throw(Error, "EncodingError U+966B");
r = r && ([...ms932Encoder.encode("陬")].join(",") === "232,163"); // U+966C
expect(() => {ms932Encoder.encode("\u966D")}).to.throw(Error, "EncodingError U+966D");
expect(() => {ms932Encoder.encode("\u966E")}).to.throw(Error, "EncodingError U+966E");
expect(() => {ms932Encoder.encode("\u966F")}).to.throw(Error, "EncodingError U+966F");
r = r && ([...ms932Encoder.encode("陰")].join(",") === "137,65"); // U+9670
expect(() => {ms932Encoder.encode("\u9671")}).to.throw(Error, "EncodingError U+9671");
r = r && ([...ms932Encoder.encode("陲陳")].join(",") === "232,162,146,194"); // U+9672
expect(() => {ms932Encoder.encode("\u9674")}).to.throw(Error, "EncodingError U+9674");
r = r && ([...ms932Encoder.encode("陵陶陷陸")].join(",") === "151,203,147,169,232,156,151,164"); // U+9675
expect(() => {ms932Encoder.encode("\u9679")}).to.throw(Error, "EncodingError U+9679");
r = r && ([...ms932Encoder.encode("険")].join(",") === "140,175"); // U+967A
expect(() => {ms932Encoder.encode("\u967B")}).to.throw(Error, "EncodingError U+967B");
expect(() => {ms932Encoder.encode("\u967C")}).to.throw(Error, "EncodingError U+967C");
r = r && ([...ms932Encoder.encode("陽")].join(",") === "151,122"); // U+967D
expect(() => {ms932Encoder.encode("\u967E")}).to.throw(Error, "EncodingError U+967E");
expect(() => {ms932Encoder.encode("\u967F")}).to.throw(Error, "EncodingError U+967F");
expect(() => {ms932Encoder.encode("\u9680")}).to.throw(Error, "EncodingError U+9680");
expect(() => {ms932Encoder.encode("\u9681")}).to.throw(Error, "EncodingError U+9681");
expect(() => {ms932Encoder.encode("\u9682")}).to.throw(Error, "EncodingError U+9682");
expect(() => {ms932Encoder.encode("\u9683")}).to.throw(Error, "EncodingError U+9683");
expect(() => {ms932Encoder.encode("\u9684")}).to.throw(Error, "EncodingError U+9684");
r = r && ([...ms932Encoder.encode("隅隆")].join(",") === "139,247,151,178"); // U+9685
expect(() => {ms932Encoder.encode("\u9687")}).to.throw(Error, "EncodingError U+9687");
r = r && ([...ms932Encoder.encode("隈")].join(",") === "140,71"); // U+9688
expect(() => {ms932Encoder.encode("\u9689")}).to.throw(Error, "EncodingError U+9689");
r = r && ([...ms932Encoder.encode("隊隋")].join(",") === "145,224,228,64"); // U+968A
expect(() => {ms932Encoder.encode("\u968C")}).to.throw(Error, "EncodingError U+968C");
r = r && ([...ms932Encoder.encode("隍階随")].join(",") === "232,164,138,75,144,143"); // U+968D
expect(() => {ms932Encoder.encode("\u9690")}).to.throw(Error, "EncodingError U+9690");
expect(() => {ms932Encoder.encode("\u9691")}).to.throw(Error, "EncodingError U+9691");
expect(() => {ms932Encoder.encode("\u9692")}).to.throw(Error, "EncodingError U+9692");
expect(() => {ms932Encoder.encode("\u9693")}).to.throw(Error, "EncodingError U+9693");
r = r && ([...ms932Encoder.encode("隔隕")].join(",") === "138,117,232,166"); // U+9694
expect(() => {ms932Encoder.encode("\u9696")}).to.throw(Error, "EncodingError U+9696");
r = r && ([...ms932Encoder.encode("隗隘隙")].join(",") === "232,167,232,165,140,132"); // U+9697
expect(() => {ms932Encoder.encode("\u969A")}).to.throw(Error, "EncodingError U+969A");
r = r && ([...ms932Encoder.encode("際障隝")].join(",") === "141,219,143,225,251,235"); // U+969B
expect(() => {ms932Encoder.encode("\u969E")}).to.throw(Error, "EncodingError U+969E");
expect(() => {ms932Encoder.encode("\u969F")}).to.throw(Error, "EncodingError U+969F");
r = r && ([...ms932Encoder.encode("隠")].join(",") === "137,66"); // U+96A0
expect(() => {ms932Encoder.encode("\u96A1")}).to.throw(Error, "EncodingError U+96A1");
expect(() => {ms932Encoder.encode("\u96A2")}).to.throw(Error, "EncodingError U+96A2");
r = r && ([...ms932Encoder.encode("隣")].join(",") === "151,215"); // U+96A3
expect(() => {ms932Encoder.encode("\u96A4")}).to.throw(Error, "EncodingError U+96A4");
expect(() => {ms932Encoder.encode("\u96A5")}).to.throw(Error, "EncodingError U+96A5");
expect(() => {ms932Encoder.encode("\u96A6")}).to.throw(Error, "EncodingError U+96A6");
r = r && ([...ms932Encoder.encode("隧隨")].join(",") === "232,169,231,172"); // U+96A7
expect(() => {ms932Encoder.encode("\u96A9")}).to.throw(Error, "EncodingError U+96A9");
r = r && ([...ms932Encoder.encode("險")].join(",") === "232,168"); // U+96AA
expect(() => {ms932Encoder.encode("\u96AB")}).to.throw(Error, "EncodingError U+96AB");
expect(() => {ms932Encoder.encode("\u96AC")}).to.throw(Error, "EncodingError U+96AC");
expect(() => {ms932Encoder.encode("\u96AD")}).to.throw(Error, "EncodingError U+96AD");
expect(() => {ms932Encoder.encode("\u96AE")}).to.throw(Error, "EncodingError U+96AE");
r = r && ([...ms932Encoder.encode("隯隰隱隲")].join(",") === "251,236,232,172,232,170,232,171"); // U+96AF
expect(() => {ms932Encoder.encode("\u96B3")}).to.throw(Error, "EncodingError U+96B3");
r = r && ([...ms932Encoder.encode("隴")].join(",") === "232,173"); // U+96B4
expect(() => {ms932Encoder.encode("\u96B5")}).to.throw(Error, "EncodingError U+96B5");
r = r && ([...ms932Encoder.encode("隶隷隸隹")].join(",") === "232,174,151,234,232,175,232,176"); // U+96B6
expect(() => {ms932Encoder.encode("\u96BA")}).to.throw(Error, "EncodingError U+96BA");
r = r && ([...ms932Encoder.encode("隻隼")].join(",") === "144,199,148,185"); // U+96BB
expect(() => {ms932Encoder.encode("\u96BD")}).to.throw(Error, "EncodingError U+96BD");
expect(() => {ms932Encoder.encode("\u96BE")}).to.throw(Error, "EncodingError U+96BE");
expect(() => {ms932Encoder.encode("\u96BF")}).to.throw(Error, "EncodingError U+96BF");
r = r && ([...ms932Encoder.encode("雀雁")].join(",") === "144,157,138,229"); // U+96C0
expect(() => {ms932Encoder.encode("\u96C2")}).to.throw(Error, "EncodingError U+96C2");
expect(() => {ms932Encoder.encode("\u96C3")}).to.throw(Error, "EncodingError U+96C3");
r = r && ([...ms932Encoder.encode("雄雅集雇")].join(",") === "151,89,137,235,143,87,140,217"); // U+96C4
expect(() => {ms932Encoder.encode("\u96C8")}).to.throw(Error, "EncodingError U+96C8");
r = r && ([...ms932Encoder.encode("雉")].join(",") === "232,179"); // U+96C9
expect(() => {ms932Encoder.encode("\u96CA")}).to.throw(Error, "EncodingError U+96CA");
r = r && ([...ms932Encoder.encode("雋雌雍雎")].join(",") === "232,178,142,147,232,180,232,177"); // U+96CB
expect(() => {ms932Encoder.encode("\u96CF")}).to.throw(Error, "EncodingError U+96CF");
expect(() => {ms932Encoder.encode("\u96D0")}).to.throw(Error, "EncodingError U+96D0");
r = r && ([...ms932Encoder.encode("雑")].join(",") === "142,71"); // U+96D1
expect(() => {ms932Encoder.encode("\u96D2")}).to.throw(Error, "EncodingError U+96D2");
expect(() => {ms932Encoder.encode("\u96D3")}).to.throw(Error, "EncodingError U+96D3");
expect(() => {ms932Encoder.encode("\u96D4")}).to.throw(Error, "EncodingError U+96D4");
r = r && ([...ms932Encoder.encode("雕雖")].join(",") === "232,184,229,171"); // U+96D5
expect(() => {ms932Encoder.encode("\u96D7")}).to.throw(Error, "EncodingError U+96D7");
expect(() => {ms932Encoder.encode("\u96D8")}).to.throw(Error, "EncodingError U+96D8");
r = r && ([...ms932Encoder.encode("雙")].join(",") === "153,212"); // U+96D9
expect(() => {ms932Encoder.encode("\u96DA")}).to.throw(Error, "EncodingError U+96DA");
r = r && ([...ms932Encoder.encode("雛雜")].join(",") === "144,151,232,182"); // U+96DB
expect(() => {ms932Encoder.encode("\u96DD")}).to.throw(Error, "EncodingError U+96DD");
expect(() => {ms932Encoder.encode("\u96DE")}).to.throw(Error, "EncodingError U+96DE");
expect(() => {ms932Encoder.encode("\u96DF")}).to.throw(Error, "EncodingError U+96DF");
expect(() => {ms932Encoder.encode("\u96E0")}).to.throw(Error, "EncodingError U+96E0");
expect(() => {ms932Encoder.encode("\u96E1")}).to.throw(Error, "EncodingError U+96E1");
r = r && ([...ms932Encoder.encode("離難")].join(",") === "151,163,147,239"); // U+96E2
expect(() => {ms932Encoder.encode("\u96E4")}).to.throw(Error, "EncodingError U+96E4");
expect(() => {ms932Encoder.encode("\u96E5")}).to.throw(Error, "EncodingError U+96E5");
expect(() => {ms932Encoder.encode("\u96E6")}).to.throw(Error, "EncodingError U+96E6");
expect(() => {ms932Encoder.encode("\u96E7")}).to.throw(Error, "EncodingError U+96E7");
r = r && ([...ms932Encoder.encode("雨")].join(",") === "137,74"); // U+96E8
expect(() => {ms932Encoder.encode("\u96E9")}).to.throw(Error, "EncodingError U+96E9");
r = r && ([...ms932Encoder.encode("雪雫")].join(",") === "144,225,142,180"); // U+96EA
expect(() => {ms932Encoder.encode("\u96EC")}).to.throw(Error, "EncodingError U+96EC");
expect(() => {ms932Encoder.encode("\u96ED")}).to.throw(Error, "EncodingError U+96ED");
expect(() => {ms932Encoder.encode("\u96EE")}).to.throw(Error, "EncodingError U+96EE");
expect(() => {ms932Encoder.encode("\u96EF")}).to.throw(Error, "EncodingError U+96EF");
r = r && ([...ms932Encoder.encode("雰")].join(",") === "149,181"); // U+96F0
expect(() => {ms932Encoder.encode("\u96F1")}).to.throw(Error, "EncodingError U+96F1");
r = r && ([...ms932Encoder.encode("雲")].join(",") === "137,95"); // U+96F2
expect(() => {ms932Encoder.encode("\u96F3")}).to.throw(Error, "EncodingError U+96F3");
expect(() => {ms932Encoder.encode("\u96F4")}).to.throw(Error, "EncodingError U+96F4");
expect(() => {ms932Encoder.encode("\u96F5")}).to.throw(Error, "EncodingError U+96F5");
r = r && ([...ms932Encoder.encode("零雷")].join(",") === "151,235,151,139"); // U+96F6
expect(() => {ms932Encoder.encode("\u96F8")}).to.throw(Error, "EncodingError U+96F8");
r = r && ([...ms932Encoder.encode("雹")].join(",") === "232,185"); // U+96F9
expect(() => {ms932Encoder.encode("\u96FA")}).to.throw(Error, "EncodingError U+96FA");
r = r && ([...ms932Encoder.encode("電")].join(",") === "147,100"); // U+96FB
expect(() => {ms932Encoder.encode("\u96FC")}).to.throw(Error, "EncodingError U+96FC");
expect(() => {ms932Encoder.encode("\u96FD")}).to.throw(Error, "EncodingError U+96FD");
expect(() => {ms932Encoder.encode("\u96FE")}).to.throw(Error, "EncodingError U+96FE");
expect(() => {ms932Encoder.encode("\u96FF")}).to.throw(Error, "EncodingError U+96FF");
r = r && ([...ms932Encoder.encode("需")].join(",") === "142,249"); // U+9700
expect(() => {ms932Encoder.encode("\u9701")}).to.throw(Error, "EncodingError U+9701");
expect(() => {ms932Encoder.encode("\u9702")}).to.throw(Error, "EncodingError U+9702");
expect(() => {ms932Encoder.encode("\u9703")}).to.throw(Error, "EncodingError U+9703");
r = r && ([...ms932Encoder.encode("霄")].join(",") === "232,186"); // U+9704
expect(() => {ms932Encoder.encode("\u9705")}).to.throw(Error, "EncodingError U+9705");
r = r && ([...ms932Encoder.encode("霆震霈")].join(",") === "232,187,144,107,232,188"); // U+9706
expect(() => {ms932Encoder.encode("\u9709")}).to.throw(Error, "EncodingError U+9709");
r = r && ([...ms932Encoder.encode("霊")].join(",") === "151,236"); // U+970A
expect(() => {ms932Encoder.encode("\u970B")}).to.throw(Error, "EncodingError U+970B");
expect(() => {ms932Encoder.encode("\u970C")}).to.throw(Error, "EncodingError U+970C");
r = r && ([...ms932Encoder.encode("霍霎霏")].join(",") === "232,183,232,190,232,192"); // U+970D
expect(() => {ms932Encoder.encode("\u9710")}).to.throw(Error, "EncodingError U+9710");
r = r && ([...ms932Encoder.encode("霑")].join(",") === "232,191"); // U+9711
expect(() => {ms932Encoder.encode("\u9712")}).to.throw(Error, "EncodingError U+9712");
r = r && ([...ms932Encoder.encode("霓")].join(",") === "232,189"); // U+9713
expect(() => {ms932Encoder.encode("\u9714")}).to.throw(Error, "EncodingError U+9714");
expect(() => {ms932Encoder.encode("\u9715")}).to.throw(Error, "EncodingError U+9715");
r = r && ([...ms932Encoder.encode("霖")].join(",") === "232,193"); // U+9716
expect(() => {ms932Encoder.encode("\u9717")}).to.throw(Error, "EncodingError U+9717");
expect(() => {ms932Encoder.encode("\u9718")}).to.throw(Error, "EncodingError U+9718");
r = r && ([...ms932Encoder.encode("霙")].join(",") === "232,194"); // U+9719
expect(() => {ms932Encoder.encode("\u971A")}).to.throw(Error, "EncodingError U+971A");
expect(() => {ms932Encoder.encode("\u971B")}).to.throw(Error, "EncodingError U+971B");
r = r && ([...ms932Encoder.encode("霜")].join(",") === "145,154"); // U+971C
expect(() => {ms932Encoder.encode("\u971D")}).to.throw(Error, "EncodingError U+971D");
r = r && ([...ms932Encoder.encode("霞")].join(",") === "137,224"); // U+971E
expect(() => {ms932Encoder.encode("\u971F")}).to.throw(Error, "EncodingError U+971F");
expect(() => {ms932Encoder.encode("\u9720")}).to.throw(Error, "EncodingError U+9720");
expect(() => {ms932Encoder.encode("\u9721")}).to.throw(Error, "EncodingError U+9721");
expect(() => {ms932Encoder.encode("\u9722")}).to.throw(Error, "EncodingError U+9722");
expect(() => {ms932Encoder.encode("\u9723")}).to.throw(Error, "EncodingError U+9723");
r = r && ([...ms932Encoder.encode("霤")].join(",") === "232,195"); // U+9724
expect(() => {ms932Encoder.encode("\u9725")}).to.throw(Error, "EncodingError U+9725");
expect(() => {ms932Encoder.encode("\u9726")}).to.throw(Error, "EncodingError U+9726");
r = r && ([...ms932Encoder.encode("霧")].join(",") === "150,182"); // U+9727
expect(() => {ms932Encoder.encode("\u9728")}).to.throw(Error, "EncodingError U+9728");
expect(() => {ms932Encoder.encode("\u9729")}).to.throw(Error, "EncodingError U+9729");
r = r && ([...ms932Encoder.encode("霪")].join(",") === "232,196"); // U+972A
expect(() => {ms932Encoder.encode("\u972B")}).to.throw(Error, "EncodingError U+972B");
expect(() => {ms932Encoder.encode("\u972C")}).to.throw(Error, "EncodingError U+972C");
expect(() => {ms932Encoder.encode("\u972D")}).to.throw(Error, "EncodingError U+972D");
expect(() => {ms932Encoder.encode("\u972E")}).to.throw(Error, "EncodingError U+972E");
expect(() => {ms932Encoder.encode("\u972F")}).to.throw(Error, "EncodingError U+972F");
r = r && ([...ms932Encoder.encode("霰")].join(",") === "232,197"); // U+9730
expect(() => {ms932Encoder.encode("\u9731")}).to.throw(Error, "EncodingError U+9731");
r = r && ([...ms932Encoder.encode("露霳")].join(",") === "152,73,251,237"); // U+9732
expect(() => {ms932Encoder.encode("\u9734")}).to.throw(Error, "EncodingError U+9734");
expect(() => {ms932Encoder.encode("\u9735")}).to.throw(Error, "EncodingError U+9735");
expect(() => {ms932Encoder.encode("\u9736")}).to.throw(Error, "EncodingError U+9736");
expect(() => {ms932Encoder.encode("\u9737")}).to.throw(Error, "EncodingError U+9737");
r = r && ([...ms932Encoder.encode("霸霹")].join(",") === "158,80,232,198"); // U+9738
expect(() => {ms932Encoder.encode("\u973A")}).to.throw(Error, "EncodingError U+973A");
r = r && ([...ms932Encoder.encode("霻")].join(",") === "251,238"); // U+973B
expect(() => {ms932Encoder.encode("\u973C")}).to.throw(Error, "EncodingError U+973C");
r = r && ([...ms932Encoder.encode("霽霾")].join(",") === "232,199,232,200"); // U+973D
expect(() => {ms932Encoder.encode("\u973F")}).to.throw(Error, "EncodingError U+973F");
expect(() => {ms932Encoder.encode("\u9740")}).to.throw(Error, "EncodingError U+9740");
expect(() => {ms932Encoder.encode("\u9741")}).to.throw(Error, "EncodingError U+9741");
r = r && ([...ms932Encoder.encode("靂靃靄")].join(",") === "232,204,251,239,232,201"); // U+9742
expect(() => {ms932Encoder.encode("\u9745")}).to.throw(Error, "EncodingError U+9745");
r = r && ([...ms932Encoder.encode("靆")].join(",") === "232,202"); // U+9746
expect(() => {ms932Encoder.encode("\u9747")}).to.throw(Error, "EncodingError U+9747");
r = r && ([...ms932Encoder.encode("靈靉")].join(",") === "232,203,232,205"); // U+9748
expect(() => {ms932Encoder.encode("\u974A")}).to.throw(Error, "EncodingError U+974A");
expect(() => {ms932Encoder.encode("\u974B")}).to.throw(Error, "EncodingError U+974B");
expect(() => {ms932Encoder.encode("\u974C")}).to.throw(Error, "EncodingError U+974C");
r = r && ([...ms932Encoder.encode("靍")].join(",") === "251,240"); // U+974D
expect(() => {ms932Encoder.encode("\u974E")}).to.throw(Error, "EncodingError U+974E");
r = r && ([...ms932Encoder.encode("靏")].join(",") === "251,241"); // U+974F
expect(() => {ms932Encoder.encode("\u9750")}).to.throw(Error, "EncodingError U+9750");
r = r && ([...ms932Encoder.encode("靑青")].join(",") === "251,242,144,194"); // U+9751
expect(() => {ms932Encoder.encode("\u9753")}).to.throw(Error, "EncodingError U+9753");
expect(() => {ms932Encoder.encode("\u9754")}).to.throw(Error, "EncodingError U+9754");
r = r && ([...ms932Encoder.encode("靕靖")].join(",") === "251,243,150,245"); // U+9755
expect(() => {ms932Encoder.encode("\u9757")}).to.throw(Error, "EncodingError U+9757");
expect(() => {ms932Encoder.encode("\u9758")}).to.throw(Error, "EncodingError U+9758");
r = r && ([...ms932Encoder.encode("静")].join(",") === "144,195"); // U+9759
expect(() => {ms932Encoder.encode("\u975A")}).to.throw(Error, "EncodingError U+975A");
expect(() => {ms932Encoder.encode("\u975B")}).to.throw(Error, "EncodingError U+975B");
r = r && ([...ms932Encoder.encode("靜")].join(",") === "232,206"); // U+975C
expect(() => {ms932Encoder.encode("\u975D")}).to.throw(Error, "EncodingError U+975D");
r = r && ([...ms932Encoder.encode("非")].join(",") === "148,241"); // U+975E
expect(() => {ms932Encoder.encode("\u975F")}).to.throw(Error, "EncodingError U+975F");
r = r && ([...ms932Encoder.encode("靠靡面")].join(",") === "232,207,234,114,150,202"); // U+9760
expect(() => {ms932Encoder.encode("\u9763")}).to.throw(Error, "EncodingError U+9763");
r = r && ([...ms932Encoder.encode("靤")].join(",") === "232,208"); // U+9764
expect(() => {ms932Encoder.encode("\u9765")}).to.throw(Error, "EncodingError U+9765");
r = r && ([...ms932Encoder.encode("靦")].join(",") === "232,209"); // U+9766
expect(() => {ms932Encoder.encode("\u9767")}).to.throw(Error, "EncodingError U+9767");
r = r && ([...ms932Encoder.encode("靨革")].join(",") === "232,210,138,118"); // U+9768
expect(() => {ms932Encoder.encode("\u976A")}).to.throw(Error, "EncodingError U+976A");
r = r && ([...ms932Encoder.encode("靫")].join(",") === "232,212"); // U+976B
expect(() => {ms932Encoder.encode("\u976C")}).to.throw(Error, "EncodingError U+976C");
r = r && ([...ms932Encoder.encode("靭")].join(",") === "144,120"); // U+976D
expect(() => {ms932Encoder.encode("\u976E")}).to.throw(Error, "EncodingError U+976E");
expect(() => {ms932Encoder.encode("\u976F")}).to.throw(Error, "EncodingError U+976F");
expect(() => {ms932Encoder.encode("\u9770")}).to.throw(Error, "EncodingError U+9770");
r = r && ([...ms932Encoder.encode("靱")].join(",") === "232,213"); // U+9771
expect(() => {ms932Encoder.encode("\u9772")}).to.throw(Error, "EncodingError U+9772");
expect(() => {ms932Encoder.encode("\u9773")}).to.throw(Error, "EncodingError U+9773");
r = r && ([...ms932Encoder.encode("靴")].join(",") === "140,67"); // U+9774
expect(() => {ms932Encoder.encode("\u9775")}).to.throw(Error, "EncodingError U+9775");
expect(() => {ms932Encoder.encode("\u9776")}).to.throw(Error, "EncodingError U+9776");
expect(() => {ms932Encoder.encode("\u9777")}).to.throw(Error, "EncodingError U+9777");
expect(() => {ms932Encoder.encode("\u9778")}).to.throw(Error, "EncodingError U+9778");
r = r && ([...ms932Encoder.encode("靹靺")].join(",") === "232,214,232,218"); // U+9779
expect(() => {ms932Encoder.encode("\u977B")}).to.throw(Error, "EncodingError U+977B");
r = r && ([...ms932Encoder.encode("靼")].join(",") === "232,216"); // U+977C
expect(() => {ms932Encoder.encode("\u977D")}).to.throw(Error, "EncodingError U+977D");
expect(() => {ms932Encoder.encode("\u977E")}).to.throw(Error, "EncodingError U+977E");
expect(() => {ms932Encoder.encode("\u977F")}).to.throw(Error, "EncodingError U+977F");
expect(() => {ms932Encoder.encode("\u9780")}).to.throw(Error, "EncodingError U+9780");
r = r && ([...ms932Encoder.encode("鞁")].join(",") === "232,217"); // U+9781
expect(() => {ms932Encoder.encode("\u9782")}).to.throw(Error, "EncodingError U+9782");
expect(() => {ms932Encoder.encode("\u9783")}).to.throw(Error, "EncodingError U+9783");
r = r && ([...ms932Encoder.encode("鞄鞅鞆")].join(",") === "138,147,232,215,232,219"); // U+9784
expect(() => {ms932Encoder.encode("\u9787")}).to.throw(Error, "EncodingError U+9787");
expect(() => {ms932Encoder.encode("\u9788")}).to.throw(Error, "EncodingError U+9788");
expect(() => {ms932Encoder.encode("\u9789")}).to.throw(Error, "EncodingError U+9789");
expect(() => {ms932Encoder.encode("\u978A")}).to.throw(Error, "EncodingError U+978A");
r = r && ([...ms932Encoder.encode("鞋")].join(",") === "232,220"); // U+978B
expect(() => {ms932Encoder.encode("\u978C")}).to.throw(Error, "EncodingError U+978C");
r = r && ([...ms932Encoder.encode("鞍")].join(",") === "136,198"); // U+978D
expect(() => {ms932Encoder.encode("\u978E")}).to.throw(Error, "EncodingError U+978E");
r = r && ([...ms932Encoder.encode("鞏鞐")].join(",") === "232,221,232,222"); // U+978F
expect(() => {ms932Encoder.encode("\u9791")}).to.throw(Error, "EncodingError U+9791");
expect(() => {ms932Encoder.encode("\u9792")}).to.throw(Error, "EncodingError U+9792");
expect(() => {ms932Encoder.encode("\u9793")}).to.throw(Error, "EncodingError U+9793");
expect(() => {ms932Encoder.encode("\u9794")}).to.throw(Error, "EncodingError U+9794");
expect(() => {ms932Encoder.encode("\u9795")}).to.throw(Error, "EncodingError U+9795");
expect(() => {ms932Encoder.encode("\u9796")}).to.throw(Error, "EncodingError U+9796");
expect(() => {ms932Encoder.encode("\u9797")}).to.throw(Error, "EncodingError U+9797");
r = r && ([...ms932Encoder.encode("鞘")].join(",") === "143,226"); // U+9798
expect(() => {ms932Encoder.encode("\u9799")}).to.throw(Error, "EncodingError U+9799");
expect(() => {ms932Encoder.encode("\u979A")}).to.throw(Error, "EncodingError U+979A");
expect(() => {ms932Encoder.encode("\u979B")}).to.throw(Error, "EncodingError U+979B");
r = r && ([...ms932Encoder.encode("鞜")].join(",") === "232,223"); // U+979C
expect(() => {ms932Encoder.encode("\u979D")}).to.throw(Error, "EncodingError U+979D");
expect(() => {ms932Encoder.encode("\u979E")}).to.throw(Error, "EncodingError U+979E");
expect(() => {ms932Encoder.encode("\u979F")}).to.throw(Error, "EncodingError U+979F");
r = r && ([...ms932Encoder.encode("鞠")].join(",") === "139,102"); // U+97A0
expect(() => {ms932Encoder.encode("\u97A1")}).to.throw(Error, "EncodingError U+97A1");
expect(() => {ms932Encoder.encode("\u97A2")}).to.throw(Error, "EncodingError U+97A2");
r = r && ([...ms932Encoder.encode("鞣")].join(",") === "232,226"); // U+97A3
expect(() => {ms932Encoder.encode("\u97A4")}).to.throw(Error, "EncodingError U+97A4");
expect(() => {ms932Encoder.encode("\u97A5")}).to.throw(Error, "EncodingError U+97A5");
r = r && ([...ms932Encoder.encode("鞦")].join(",") === "232,225"); // U+97A6
expect(() => {ms932Encoder.encode("\u97A7")}).to.throw(Error, "EncodingError U+97A7");
r = r && ([...ms932Encoder.encode("鞨")].join(",") === "232,224"); // U+97A8
expect(() => {ms932Encoder.encode("\u97A9")}).to.throw(Error, "EncodingError U+97A9");
expect(() => {ms932Encoder.encode("\u97AA")}).to.throw(Error, "EncodingError U+97AA");
r = r && ([...ms932Encoder.encode("鞫")].join(",") === "230,145"); // U+97AB
expect(() => {ms932Encoder.encode("\u97AC")}).to.throw(Error, "EncodingError U+97AC");
r = r && ([...ms932Encoder.encode("鞭")].join(",") === "149,218"); // U+97AD
expect(() => {ms932Encoder.encode("\u97AE")}).to.throw(Error, "EncodingError U+97AE");
expect(() => {ms932Encoder.encode("\u97AF")}).to.throw(Error, "EncodingError U+97AF");
expect(() => {ms932Encoder.encode("\u97B0")}).to.throw(Error, "EncodingError U+97B0");
expect(() => {ms932Encoder.encode("\u97B1")}).to.throw(Error, "EncodingError U+97B1");
expect(() => {ms932Encoder.encode("\u97B2")}).to.throw(Error, "EncodingError U+97B2");
r = r && ([...ms932Encoder.encode("鞳鞴")].join(",") === "232,227,232,228"); // U+97B3
expect(() => {ms932Encoder.encode("\u97B5")}).to.throw(Error, "EncodingError U+97B5");
expect(() => {ms932Encoder.encode("\u97B6")}).to.throw(Error, "EncodingError U+97B6");
expect(() => {ms932Encoder.encode("\u97B7")}).to.throw(Error, "EncodingError U+97B7");
expect(() => {ms932Encoder.encode("\u97B8")}).to.throw(Error, "EncodingError U+97B8");
expect(() => {ms932Encoder.encode("\u97B9")}).to.throw(Error, "EncodingError U+97B9");
expect(() => {ms932Encoder.encode("\u97BA")}).to.throw(Error, "EncodingError U+97BA");
expect(() => {ms932Encoder.encode("\u97BB")}).to.throw(Error, "EncodingError U+97BB");
expect(() => {ms932Encoder.encode("\u97BC")}).to.throw(Error, "EncodingError U+97BC");
expect(() => {ms932Encoder.encode("\u97BD")}).to.throw(Error, "EncodingError U+97BD");
expect(() => {ms932Encoder.encode("\u97BE")}).to.throw(Error, "EncodingError U+97BE");
expect(() => {ms932Encoder.encode("\u97BF")}).to.throw(Error, "EncodingError U+97BF");
expect(() => {ms932Encoder.encode("\u97C0")}).to.throw(Error, "EncodingError U+97C0");
expect(() => {ms932Encoder.encode("\u97C1")}).to.throw(Error, "EncodingError U+97C1");
expect(() => {ms932Encoder.encode("\u97C2")}).to.throw(Error, "EncodingError U+97C2");
r = r && ([...ms932Encoder.encode("韃")].join(",") === "232,229"); // U+97C3
expect(() => {ms932Encoder.encode("\u97C4")}).to.throw(Error, "EncodingError U+97C4");
expect(() => {ms932Encoder.encode("\u97C5")}).to.throw(Error, "EncodingError U+97C5");
r = r && ([...ms932Encoder.encode("韆")].join(",") === "232,230"); // U+97C6
expect(() => {ms932Encoder.encode("\u97C7")}).to.throw(Error, "EncodingError U+97C7");
r = r && ([...ms932Encoder.encode("韈")].join(",") === "232,231"); // U+97C8
expect(() => {ms932Encoder.encode("\u97C9")}).to.throw(Error, "EncodingError U+97C9");
expect(() => {ms932Encoder.encode("\u97CA")}).to.throw(Error, "EncodingError U+97CA");
r = r && ([...ms932Encoder.encode("韋")].join(",") === "232,232"); // U+97CB
expect(() => {ms932Encoder.encode("\u97CC")}).to.throw(Error, "EncodingError U+97CC");
expect(() => {ms932Encoder.encode("\u97CD")}).to.throw(Error, "EncodingError U+97CD");
expect(() => {ms932Encoder.encode("\u97CE")}).to.throw(Error, "EncodingError U+97CE");
expect(() => {ms932Encoder.encode("\u97CF")}).to.throw(Error, "EncodingError U+97CF");
expect(() => {ms932Encoder.encode("\u97D0")}).to.throw(Error, "EncodingError U+97D0");
expect(() => {ms932Encoder.encode("\u97D1")}).to.throw(Error, "EncodingError U+97D1");
expect(() => {ms932Encoder.encode("\u97D2")}).to.throw(Error, "EncodingError U+97D2");
r = r && ([...ms932Encoder.encode("韓")].join(",") === "138,216"); // U+97D3
expect(() => {ms932Encoder.encode("\u97D4")}).to.throw(Error, "EncodingError U+97D4");
expect(() => {ms932Encoder.encode("\u97D5")}).to.throw(Error, "EncodingError U+97D5");
expect(() => {ms932Encoder.encode("\u97D6")}).to.throw(Error, "EncodingError U+97D6");
expect(() => {ms932Encoder.encode("\u97D7")}).to.throw(Error, "EncodingError U+97D7");
expect(() => {ms932Encoder.encode("\u97D8")}).to.throw(Error, "EncodingError U+97D8");
expect(() => {ms932Encoder.encode("\u97D9")}).to.throw(Error, "EncodingError U+97D9");
expect(() => {ms932Encoder.encode("\u97DA")}).to.throw(Error, "EncodingError U+97DA");
expect(() => {ms932Encoder.encode("\u97DB")}).to.throw(Error, "EncodingError U+97DB");
r = r && ([...ms932Encoder.encode("韜")].join(",") === "232,233"); // U+97DC
expect(() => {ms932Encoder.encode("\u97DD")}).to.throw(Error, "EncodingError U+97DD");
expect(() => {ms932Encoder.encode("\u97DE")}).to.throw(Error, "EncodingError U+97DE");
expect(() => {ms932Encoder.encode("\u97DF")}).to.throw(Error, "EncodingError U+97DF");
expect(() => {ms932Encoder.encode("\u97E0")}).to.throw(Error, "EncodingError U+97E0");
expect(() => {ms932Encoder.encode("\u97E1")}).to.throw(Error, "EncodingError U+97E1");
expect(() => {ms932Encoder.encode("\u97E2")}).to.throw(Error, "EncodingError U+97E2");
expect(() => {ms932Encoder.encode("\u97E3")}).to.throw(Error, "EncodingError U+97E3");
expect(() => {ms932Encoder.encode("\u97E4")}).to.throw(Error, "EncodingError U+97E4");
expect(() => {ms932Encoder.encode("\u97E5")}).to.throw(Error, "EncodingError U+97E5");
expect(() => {ms932Encoder.encode("\u97E6")}).to.throw(Error, "EncodingError U+97E6");
expect(() => {ms932Encoder.encode("\u97E7")}).to.throw(Error, "EncodingError U+97E7");
expect(() => {ms932Encoder.encode("\u97E8")}).to.throw(Error, "EncodingError U+97E8");
expect(() => {ms932Encoder.encode("\u97E9")}).to.throw(Error, "EncodingError U+97E9");
expect(() => {ms932Encoder.encode("\u97EA")}).to.throw(Error, "EncodingError U+97EA");
expect(() => {ms932Encoder.encode("\u97EB")}).to.throw(Error, "EncodingError U+97EB");
expect(() => {ms932Encoder.encode("\u97EC")}).to.throw(Error, "EncodingError U+97EC");
r = r && ([...ms932Encoder.encode("韭韮")].join(",") === "232,234,148,66"); // U+97ED
expect(() => {ms932Encoder.encode("\u97EF")}).to.throw(Error, "EncodingError U+97EF");
expect(() => {ms932Encoder.encode("\u97F0")}).to.throw(Error, "EncodingError U+97F0");
expect(() => {ms932Encoder.encode("\u97F1")}).to.throw(Error, "EncodingError U+97F1");
r = r && ([...ms932Encoder.encode("韲音")].join(",") === "232,236,137,185"); // U+97F2
expect(() => {ms932Encoder.encode("\u97F4")}).to.throw(Error, "EncodingError U+97F4");
r = r && ([...ms932Encoder.encode("韵韶")].join(",") === "232,239,232,238"); // U+97F5
expect(() => {ms932Encoder.encode("\u97F7")}).to.throw(Error, "EncodingError U+97F7");
expect(() => {ms932Encoder.encode("\u97F8")}).to.throw(Error, "EncodingError U+97F8");
expect(() => {ms932Encoder.encode("\u97F9")}).to.throw(Error, "EncodingError U+97F9");
expect(() => {ms932Encoder.encode("\u97FA")}).to.throw(Error, "EncodingError U+97FA");
r = r && ([...ms932Encoder.encode("韻")].join(",") === "137,67"); // U+97FB
expect(() => {ms932Encoder.encode("\u97FC")}).to.throw(Error, "EncodingError U+97FC");
expect(() => {ms932Encoder.encode("\u97FD")}).to.throw(Error, "EncodingError U+97FD");
expect(() => {ms932Encoder.encode("\u97FE")}).to.throw(Error, "EncodingError U+97FE");
r = r && ([...ms932Encoder.encode("響")].join(",") === "139,191"); // U+97FF

expect(r).to.equal(true);

  });

});
