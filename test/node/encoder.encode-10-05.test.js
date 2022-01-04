import assert from "node:assert";
import { Ms932Encoder } from "../../node/index.mjs";

describe("Ms932Encoder.prototype.encode 10", () => {

  it("encode(string) - U+9400-U+97FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u9400")}, {name:"Error",message:"EncodingError U+9400"});
assert.throws(() => {ms932Encoder.encode("\u9401")}, {name:"Error",message:"EncodingError U+9401"});
assert.throws(() => {ms932Encoder.encode("\u9402")}, {name:"Error",message:"EncodingError U+9402"});
r = r && ([...ms932Encoder.encode("鐃")].join(",") === "232,94"); // U+9403
assert.throws(() => {ms932Encoder.encode("\u9404")}, {name:"Error",message:"EncodingError U+9404"});
assert.throws(() => {ms932Encoder.encode("\u9405")}, {name:"Error",message:"EncodingError U+9405"});
assert.throws(() => {ms932Encoder.encode("\u9406")}, {name:"Error",message:"EncodingError U+9406"});
r = r && ([...ms932Encoder.encode("鐇")].join(",") === "232,95"); // U+9407
assert.throws(() => {ms932Encoder.encode("\u9408")}, {name:"Error",message:"EncodingError U+9408"});
assert.throws(() => {ms932Encoder.encode("\u9409")}, {name:"Error",message:"EncodingError U+9409"});
assert.throws(() => {ms932Encoder.encode("\u940A")}, {name:"Error",message:"EncodingError U+940A"});
assert.throws(() => {ms932Encoder.encode("\u940B")}, {name:"Error",message:"EncodingError U+940B"});
assert.throws(() => {ms932Encoder.encode("\u940C")}, {name:"Error",message:"EncodingError U+940C"});
assert.throws(() => {ms932Encoder.encode("\u940D")}, {name:"Error",message:"EncodingError U+940D"});
assert.throws(() => {ms932Encoder.encode("\u940E")}, {name:"Error",message:"EncodingError U+940E"});
assert.throws(() => {ms932Encoder.encode("\u940F")}, {name:"Error",message:"EncodingError U+940F"});
r = r && ([...ms932Encoder.encode("鐐")].join(",") === "232,96"); // U+9410
assert.throws(() => {ms932Encoder.encode("\u9411")}, {name:"Error",message:"EncodingError U+9411"});
assert.throws(() => {ms932Encoder.encode("\u9412")}, {name:"Error",message:"EncodingError U+9412"});
r = r && ([...ms932Encoder.encode("鐓鐔")].join(",") === "232,93,232,92"); // U+9413
assert.throws(() => {ms932Encoder.encode("\u9415")}, {name:"Error",message:"EncodingError U+9415"});
assert.throws(() => {ms932Encoder.encode("\u9416")}, {name:"Error",message:"EncodingError U+9416"});
assert.throws(() => {ms932Encoder.encode("\u9417")}, {name:"Error",message:"EncodingError U+9417"});
r = r && ([...ms932Encoder.encode("鐘鐙鐚")].join(",") === "143,224,147,168,232,91"); // U+9418
assert.throws(() => {ms932Encoder.encode("\u941B")}, {name:"Error",message:"EncodingError U+941B"});
assert.throws(() => {ms932Encoder.encode("\u941C")}, {name:"Error",message:"EncodingError U+941C"});
assert.throws(() => {ms932Encoder.encode("\u941D")}, {name:"Error",message:"EncodingError U+941D"});
assert.throws(() => {ms932Encoder.encode("\u941E")}, {name:"Error",message:"EncodingError U+941E"});
assert.throws(() => {ms932Encoder.encode("\u941F")}, {name:"Error",message:"EncodingError U+941F"});
assert.throws(() => {ms932Encoder.encode("\u9420")}, {name:"Error",message:"EncodingError U+9420"});
r = r && ([...ms932Encoder.encode("鐡")].join(",") === "232,100"); // U+9421
assert.throws(() => {ms932Encoder.encode("\u9422")}, {name:"Error",message:"EncodingError U+9422"});
assert.throws(() => {ms932Encoder.encode("\u9423")}, {name:"Error",message:"EncodingError U+9423"});
assert.throws(() => {ms932Encoder.encode("\u9424")}, {name:"Error",message:"EncodingError U+9424"});
assert.throws(() => {ms932Encoder.encode("\u9425")}, {name:"Error",message:"EncodingError U+9425"});
assert.throws(() => {ms932Encoder.encode("\u9426")}, {name:"Error",message:"EncodingError U+9426"});
assert.throws(() => {ms932Encoder.encode("\u9427")}, {name:"Error",message:"EncodingError U+9427"});
assert.throws(() => {ms932Encoder.encode("\u9428")}, {name:"Error",message:"EncodingError U+9428"});
assert.throws(() => {ms932Encoder.encode("\u9429")}, {name:"Error",message:"EncodingError U+9429"});
assert.throws(() => {ms932Encoder.encode("\u942A")}, {name:"Error",message:"EncodingError U+942A"});
r = r && ([...ms932Encoder.encode("鐫")].join(",") === "232,98"); // U+942B
assert.throws(() => {ms932Encoder.encode("\u942C")}, {name:"Error",message:"EncodingError U+942C"});
assert.throws(() => {ms932Encoder.encode("\u942D")}, {name:"Error",message:"EncodingError U+942D"});
assert.throws(() => {ms932Encoder.encode("\u942E")}, {name:"Error",message:"EncodingError U+942E"});
assert.throws(() => {ms932Encoder.encode("\u942F")}, {name:"Error",message:"EncodingError U+942F"});
assert.throws(() => {ms932Encoder.encode("\u9430")}, {name:"Error",message:"EncodingError U+9430"});
r = r && ([...ms932Encoder.encode("鐱")].join(",") === "251,229"); // U+9431
assert.throws(() => {ms932Encoder.encode("\u9432")}, {name:"Error",message:"EncodingError U+9432"});
assert.throws(() => {ms932Encoder.encode("\u9433")}, {name:"Error",message:"EncodingError U+9433"});
assert.throws(() => {ms932Encoder.encode("\u9434")}, {name:"Error",message:"EncodingError U+9434"});
r = r && ([...ms932Encoder.encode("鐵鐶")].join(",") === "232,99,232,97"); // U+9435
assert.throws(() => {ms932Encoder.encode("\u9437")}, {name:"Error",message:"EncodingError U+9437"});
r = r && ([...ms932Encoder.encode("鐸")].join(",") === "145,246"); // U+9438
assert.throws(() => {ms932Encoder.encode("\u9439")}, {name:"Error",message:"EncodingError U+9439"});
r = r && ([...ms932Encoder.encode("鐺")].join(",") === "232,101"); // U+943A
assert.throws(() => {ms932Encoder.encode("\u943B")}, {name:"Error",message:"EncodingError U+943B"});
assert.throws(() => {ms932Encoder.encode("\u943C")}, {name:"Error",message:"EncodingError U+943C"});
assert.throws(() => {ms932Encoder.encode("\u943D")}, {name:"Error",message:"EncodingError U+943D"});
assert.throws(() => {ms932Encoder.encode("\u943E")}, {name:"Error",message:"EncodingError U+943E"});
assert.throws(() => {ms932Encoder.encode("\u943F")}, {name:"Error",message:"EncodingError U+943F"});
assert.throws(() => {ms932Encoder.encode("\u9440")}, {name:"Error",message:"EncodingError U+9440"});
r = r && ([...ms932Encoder.encode("鑁")].join(",") === "232,102"); // U+9441
assert.throws(() => {ms932Encoder.encode("\u9442")}, {name:"Error",message:"EncodingError U+9442"});
assert.throws(() => {ms932Encoder.encode("\u9443")}, {name:"Error",message:"EncodingError U+9443"});
r = r && ([...ms932Encoder.encode("鑄鑅")].join(",") === "232,104,251,230"); // U+9444
assert.throws(() => {ms932Encoder.encode("\u9446")}, {name:"Error",message:"EncodingError U+9446"});
assert.throws(() => {ms932Encoder.encode("\u9447")}, {name:"Error",message:"EncodingError U+9447"});
r = r && ([...ms932Encoder.encode("鑈")].join(",") === "251,231"); // U+9448
assert.throws(() => {ms932Encoder.encode("\u9449")}, {name:"Error",message:"EncodingError U+9449"});
assert.throws(() => {ms932Encoder.encode("\u944A")}, {name:"Error",message:"EncodingError U+944A"});
assert.throws(() => {ms932Encoder.encode("\u944B")}, {name:"Error",message:"EncodingError U+944B"});
assert.throws(() => {ms932Encoder.encode("\u944C")}, {name:"Error",message:"EncodingError U+944C"});
assert.throws(() => {ms932Encoder.encode("\u944D")}, {name:"Error",message:"EncodingError U+944D"});
assert.throws(() => {ms932Encoder.encode("\u944E")}, {name:"Error",message:"EncodingError U+944E"});
assert.throws(() => {ms932Encoder.encode("\u944F")}, {name:"Error",message:"EncodingError U+944F"});
assert.throws(() => {ms932Encoder.encode("\u9450")}, {name:"Error",message:"EncodingError U+9450"});
r = r && ([...ms932Encoder.encode("鑑鑒鑓")].join(",") === "138,211,232,103,150,248"); // U+9451
assert.throws(() => {ms932Encoder.encode("\u9454")}, {name:"Error",message:"EncodingError U+9454"});
assert.throws(() => {ms932Encoder.encode("\u9455")}, {name:"Error",message:"EncodingError U+9455"});
assert.throws(() => {ms932Encoder.encode("\u9456")}, {name:"Error",message:"EncodingError U+9456"});
assert.throws(() => {ms932Encoder.encode("\u9457")}, {name:"Error",message:"EncodingError U+9457"});
assert.throws(() => {ms932Encoder.encode("\u9458")}, {name:"Error",message:"EncodingError U+9458"});
assert.throws(() => {ms932Encoder.encode("\u9459")}, {name:"Error",message:"EncodingError U+9459"});
r = r && ([...ms932Encoder.encode("鑚鑛")].join(",") === "232,115,232,105"); // U+945A
assert.throws(() => {ms932Encoder.encode("\u945C")}, {name:"Error",message:"EncodingError U+945C"});
assert.throws(() => {ms932Encoder.encode("\u945D")}, {name:"Error",message:"EncodingError U+945D"});
r = r && ([...ms932Encoder.encode("鑞")].join(",") === "232,108"); // U+945E
assert.throws(() => {ms932Encoder.encode("\u945F")}, {name:"Error",message:"EncodingError U+945F"});
r = r && ([...ms932Encoder.encode("鑠")].join(",") === "232,106"); // U+9460
assert.throws(() => {ms932Encoder.encode("\u9461")}, {name:"Error",message:"EncodingError U+9461"});
r = r && ([...ms932Encoder.encode("鑢")].join(",") === "232,107"); // U+9462
assert.throws(() => {ms932Encoder.encode("\u9463")}, {name:"Error",message:"EncodingError U+9463"});
assert.throws(() => {ms932Encoder.encode("\u9464")}, {name:"Error",message:"EncodingError U+9464"});
assert.throws(() => {ms932Encoder.encode("\u9465")}, {name:"Error",message:"EncodingError U+9465"});
assert.throws(() => {ms932Encoder.encode("\u9466")}, {name:"Error",message:"EncodingError U+9466"});
assert.throws(() => {ms932Encoder.encode("\u9467")}, {name:"Error",message:"EncodingError U+9467"});
assert.throws(() => {ms932Encoder.encode("\u9468")}, {name:"Error",message:"EncodingError U+9468"});
assert.throws(() => {ms932Encoder.encode("\u9469")}, {name:"Error",message:"EncodingError U+9469"});
r = r && ([...ms932Encoder.encode("鑪")].join(",") === "232,109"); // U+946A
assert.throws(() => {ms932Encoder.encode("\u946B")}, {name:"Error",message:"EncodingError U+946B"});
assert.throws(() => {ms932Encoder.encode("\u946C")}, {name:"Error",message:"EncodingError U+946C"});
assert.throws(() => {ms932Encoder.encode("\u946D")}, {name:"Error",message:"EncodingError U+946D"});
assert.throws(() => {ms932Encoder.encode("\u946E")}, {name:"Error",message:"EncodingError U+946E"});
assert.throws(() => {ms932Encoder.encode("\u946F")}, {name:"Error",message:"EncodingError U+946F"});
r = r && ([...ms932Encoder.encode("鑰")].join(",") === "232,111"); // U+9470
assert.throws(() => {ms932Encoder.encode("\u9471")}, {name:"Error",message:"EncodingError U+9471"});
assert.throws(() => {ms932Encoder.encode("\u9472")}, {name:"Error",message:"EncodingError U+9472"});
assert.throws(() => {ms932Encoder.encode("\u9473")}, {name:"Error",message:"EncodingError U+9473"});
assert.throws(() => {ms932Encoder.encode("\u9474")}, {name:"Error",message:"EncodingError U+9474"});
r = r && ([...ms932Encoder.encode("鑵")].join(",") === "232,112"); // U+9475
assert.throws(() => {ms932Encoder.encode("\u9476")}, {name:"Error",message:"EncodingError U+9476"});
r = r && ([...ms932Encoder.encode("鑷")].join(",") === "232,113"); // U+9477
assert.throws(() => {ms932Encoder.encode("\u9478")}, {name:"Error",message:"EncodingError U+9478"});
assert.throws(() => {ms932Encoder.encode("\u9479")}, {name:"Error",message:"EncodingError U+9479"});
assert.throws(() => {ms932Encoder.encode("\u947A")}, {name:"Error",message:"EncodingError U+947A"});
assert.throws(() => {ms932Encoder.encode("\u947B")}, {name:"Error",message:"EncodingError U+947B"});
r = r && ([...ms932Encoder.encode("鑼鑽鑾鑿")].join(",") === "232,116,232,114,232,117,232,119"); // U+947C
assert.throws(() => {ms932Encoder.encode("\u9480")}, {name:"Error",message:"EncodingError U+9480"});
r = r && ([...ms932Encoder.encode("钁")].join(",") === "232,118"); // U+9481
assert.throws(() => {ms932Encoder.encode("\u9482")}, {name:"Error",message:"EncodingError U+9482"});
assert.throws(() => {ms932Encoder.encode("\u9483")}, {name:"Error",message:"EncodingError U+9483"});
assert.throws(() => {ms932Encoder.encode("\u9484")}, {name:"Error",message:"EncodingError U+9484"});
assert.throws(() => {ms932Encoder.encode("\u9485")}, {name:"Error",message:"EncodingError U+9485"});
assert.throws(() => {ms932Encoder.encode("\u9486")}, {name:"Error",message:"EncodingError U+9486"});
assert.throws(() => {ms932Encoder.encode("\u9487")}, {name:"Error",message:"EncodingError U+9487"});
assert.throws(() => {ms932Encoder.encode("\u9488")}, {name:"Error",message:"EncodingError U+9488"});
assert.throws(() => {ms932Encoder.encode("\u9489")}, {name:"Error",message:"EncodingError U+9489"});
assert.throws(() => {ms932Encoder.encode("\u948A")}, {name:"Error",message:"EncodingError U+948A"});
assert.throws(() => {ms932Encoder.encode("\u948B")}, {name:"Error",message:"EncodingError U+948B"});
assert.throws(() => {ms932Encoder.encode("\u948C")}, {name:"Error",message:"EncodingError U+948C"});
assert.throws(() => {ms932Encoder.encode("\u948D")}, {name:"Error",message:"EncodingError U+948D"});
assert.throws(() => {ms932Encoder.encode("\u948E")}, {name:"Error",message:"EncodingError U+948E"});
assert.throws(() => {ms932Encoder.encode("\u948F")}, {name:"Error",message:"EncodingError U+948F"});
assert.throws(() => {ms932Encoder.encode("\u9490")}, {name:"Error",message:"EncodingError U+9490"});
assert.throws(() => {ms932Encoder.encode("\u9491")}, {name:"Error",message:"EncodingError U+9491"});
assert.throws(() => {ms932Encoder.encode("\u9492")}, {name:"Error",message:"EncodingError U+9492"});
assert.throws(() => {ms932Encoder.encode("\u9493")}, {name:"Error",message:"EncodingError U+9493"});
assert.throws(() => {ms932Encoder.encode("\u9494")}, {name:"Error",message:"EncodingError U+9494"});
assert.throws(() => {ms932Encoder.encode("\u9495")}, {name:"Error",message:"EncodingError U+9495"});
assert.throws(() => {ms932Encoder.encode("\u9496")}, {name:"Error",message:"EncodingError U+9496"});
assert.throws(() => {ms932Encoder.encode("\u9497")}, {name:"Error",message:"EncodingError U+9497"});
assert.throws(() => {ms932Encoder.encode("\u9498")}, {name:"Error",message:"EncodingError U+9498"});
assert.throws(() => {ms932Encoder.encode("\u9499")}, {name:"Error",message:"EncodingError U+9499"});
assert.throws(() => {ms932Encoder.encode("\u949A")}, {name:"Error",message:"EncodingError U+949A"});
assert.throws(() => {ms932Encoder.encode("\u949B")}, {name:"Error",message:"EncodingError U+949B"});
assert.throws(() => {ms932Encoder.encode("\u949C")}, {name:"Error",message:"EncodingError U+949C"});
assert.throws(() => {ms932Encoder.encode("\u949D")}, {name:"Error",message:"EncodingError U+949D"});
assert.throws(() => {ms932Encoder.encode("\u949E")}, {name:"Error",message:"EncodingError U+949E"});
assert.throws(() => {ms932Encoder.encode("\u949F")}, {name:"Error",message:"EncodingError U+949F"});
assert.throws(() => {ms932Encoder.encode("\u94A0")}, {name:"Error",message:"EncodingError U+94A0"});
assert.throws(() => {ms932Encoder.encode("\u94A1")}, {name:"Error",message:"EncodingError U+94A1"});
assert.throws(() => {ms932Encoder.encode("\u94A2")}, {name:"Error",message:"EncodingError U+94A2"});
assert.throws(() => {ms932Encoder.encode("\u94A3")}, {name:"Error",message:"EncodingError U+94A3"});
assert.throws(() => {ms932Encoder.encode("\u94A4")}, {name:"Error",message:"EncodingError U+94A4"});
assert.throws(() => {ms932Encoder.encode("\u94A5")}, {name:"Error",message:"EncodingError U+94A5"});
assert.throws(() => {ms932Encoder.encode("\u94A6")}, {name:"Error",message:"EncodingError U+94A6"});
assert.throws(() => {ms932Encoder.encode("\u94A7")}, {name:"Error",message:"EncodingError U+94A7"});
assert.throws(() => {ms932Encoder.encode("\u94A8")}, {name:"Error",message:"EncodingError U+94A8"});
assert.throws(() => {ms932Encoder.encode("\u94A9")}, {name:"Error",message:"EncodingError U+94A9"});
assert.throws(() => {ms932Encoder.encode("\u94AA")}, {name:"Error",message:"EncodingError U+94AA"});
assert.throws(() => {ms932Encoder.encode("\u94AB")}, {name:"Error",message:"EncodingError U+94AB"});
assert.throws(() => {ms932Encoder.encode("\u94AC")}, {name:"Error",message:"EncodingError U+94AC"});
assert.throws(() => {ms932Encoder.encode("\u94AD")}, {name:"Error",message:"EncodingError U+94AD"});
assert.throws(() => {ms932Encoder.encode("\u94AE")}, {name:"Error",message:"EncodingError U+94AE"});
assert.throws(() => {ms932Encoder.encode("\u94AF")}, {name:"Error",message:"EncodingError U+94AF"});
assert.throws(() => {ms932Encoder.encode("\u94B0")}, {name:"Error",message:"EncodingError U+94B0"});
assert.throws(() => {ms932Encoder.encode("\u94B1")}, {name:"Error",message:"EncodingError U+94B1"});
assert.throws(() => {ms932Encoder.encode("\u94B2")}, {name:"Error",message:"EncodingError U+94B2"});
assert.throws(() => {ms932Encoder.encode("\u94B3")}, {name:"Error",message:"EncodingError U+94B3"});
assert.throws(() => {ms932Encoder.encode("\u94B4")}, {name:"Error",message:"EncodingError U+94B4"});
assert.throws(() => {ms932Encoder.encode("\u94B5")}, {name:"Error",message:"EncodingError U+94B5"});
assert.throws(() => {ms932Encoder.encode("\u94B6")}, {name:"Error",message:"EncodingError U+94B6"});
assert.throws(() => {ms932Encoder.encode("\u94B7")}, {name:"Error",message:"EncodingError U+94B7"});
assert.throws(() => {ms932Encoder.encode("\u94B8")}, {name:"Error",message:"EncodingError U+94B8"});
assert.throws(() => {ms932Encoder.encode("\u94B9")}, {name:"Error",message:"EncodingError U+94B9"});
assert.throws(() => {ms932Encoder.encode("\u94BA")}, {name:"Error",message:"EncodingError U+94BA"});
assert.throws(() => {ms932Encoder.encode("\u94BB")}, {name:"Error",message:"EncodingError U+94BB"});
assert.throws(() => {ms932Encoder.encode("\u94BC")}, {name:"Error",message:"EncodingError U+94BC"});
assert.throws(() => {ms932Encoder.encode("\u94BD")}, {name:"Error",message:"EncodingError U+94BD"});
assert.throws(() => {ms932Encoder.encode("\u94BE")}, {name:"Error",message:"EncodingError U+94BE"});
assert.throws(() => {ms932Encoder.encode("\u94BF")}, {name:"Error",message:"EncodingError U+94BF"});
assert.throws(() => {ms932Encoder.encode("\u94C0")}, {name:"Error",message:"EncodingError U+94C0"});
assert.throws(() => {ms932Encoder.encode("\u94C1")}, {name:"Error",message:"EncodingError U+94C1"});
assert.throws(() => {ms932Encoder.encode("\u94C2")}, {name:"Error",message:"EncodingError U+94C2"});
assert.throws(() => {ms932Encoder.encode("\u94C3")}, {name:"Error",message:"EncodingError U+94C3"});
assert.throws(() => {ms932Encoder.encode("\u94C4")}, {name:"Error",message:"EncodingError U+94C4"});
assert.throws(() => {ms932Encoder.encode("\u94C5")}, {name:"Error",message:"EncodingError U+94C5"});
assert.throws(() => {ms932Encoder.encode("\u94C6")}, {name:"Error",message:"EncodingError U+94C6"});
assert.throws(() => {ms932Encoder.encode("\u94C7")}, {name:"Error",message:"EncodingError U+94C7"});
assert.throws(() => {ms932Encoder.encode("\u94C8")}, {name:"Error",message:"EncodingError U+94C8"});
assert.throws(() => {ms932Encoder.encode("\u94C9")}, {name:"Error",message:"EncodingError U+94C9"});
assert.throws(() => {ms932Encoder.encode("\u94CA")}, {name:"Error",message:"EncodingError U+94CA"});
assert.throws(() => {ms932Encoder.encode("\u94CB")}, {name:"Error",message:"EncodingError U+94CB"});
assert.throws(() => {ms932Encoder.encode("\u94CC")}, {name:"Error",message:"EncodingError U+94CC"});
assert.throws(() => {ms932Encoder.encode("\u94CD")}, {name:"Error",message:"EncodingError U+94CD"});
assert.throws(() => {ms932Encoder.encode("\u94CE")}, {name:"Error",message:"EncodingError U+94CE"});
assert.throws(() => {ms932Encoder.encode("\u94CF")}, {name:"Error",message:"EncodingError U+94CF"});
assert.throws(() => {ms932Encoder.encode("\u94D0")}, {name:"Error",message:"EncodingError U+94D0"});
assert.throws(() => {ms932Encoder.encode("\u94D1")}, {name:"Error",message:"EncodingError U+94D1"});
assert.throws(() => {ms932Encoder.encode("\u94D2")}, {name:"Error",message:"EncodingError U+94D2"});
assert.throws(() => {ms932Encoder.encode("\u94D3")}, {name:"Error",message:"EncodingError U+94D3"});
assert.throws(() => {ms932Encoder.encode("\u94D4")}, {name:"Error",message:"EncodingError U+94D4"});
assert.throws(() => {ms932Encoder.encode("\u94D5")}, {name:"Error",message:"EncodingError U+94D5"});
assert.throws(() => {ms932Encoder.encode("\u94D6")}, {name:"Error",message:"EncodingError U+94D6"});
assert.throws(() => {ms932Encoder.encode("\u94D7")}, {name:"Error",message:"EncodingError U+94D7"});
assert.throws(() => {ms932Encoder.encode("\u94D8")}, {name:"Error",message:"EncodingError U+94D8"});
assert.throws(() => {ms932Encoder.encode("\u94D9")}, {name:"Error",message:"EncodingError U+94D9"});
assert.throws(() => {ms932Encoder.encode("\u94DA")}, {name:"Error",message:"EncodingError U+94DA"});
assert.throws(() => {ms932Encoder.encode("\u94DB")}, {name:"Error",message:"EncodingError U+94DB"});
assert.throws(() => {ms932Encoder.encode("\u94DC")}, {name:"Error",message:"EncodingError U+94DC"});
assert.throws(() => {ms932Encoder.encode("\u94DD")}, {name:"Error",message:"EncodingError U+94DD"});
assert.throws(() => {ms932Encoder.encode("\u94DE")}, {name:"Error",message:"EncodingError U+94DE"});
assert.throws(() => {ms932Encoder.encode("\u94DF")}, {name:"Error",message:"EncodingError U+94DF"});
assert.throws(() => {ms932Encoder.encode("\u94E0")}, {name:"Error",message:"EncodingError U+94E0"});
assert.throws(() => {ms932Encoder.encode("\u94E1")}, {name:"Error",message:"EncodingError U+94E1"});
assert.throws(() => {ms932Encoder.encode("\u94E2")}, {name:"Error",message:"EncodingError U+94E2"});
assert.throws(() => {ms932Encoder.encode("\u94E3")}, {name:"Error",message:"EncodingError U+94E3"});
assert.throws(() => {ms932Encoder.encode("\u94E4")}, {name:"Error",message:"EncodingError U+94E4"});
assert.throws(() => {ms932Encoder.encode("\u94E5")}, {name:"Error",message:"EncodingError U+94E5"});
assert.throws(() => {ms932Encoder.encode("\u94E6")}, {name:"Error",message:"EncodingError U+94E6"});
assert.throws(() => {ms932Encoder.encode("\u94E7")}, {name:"Error",message:"EncodingError U+94E7"});
assert.throws(() => {ms932Encoder.encode("\u94E8")}, {name:"Error",message:"EncodingError U+94E8"});
assert.throws(() => {ms932Encoder.encode("\u94E9")}, {name:"Error",message:"EncodingError U+94E9"});
assert.throws(() => {ms932Encoder.encode("\u94EA")}, {name:"Error",message:"EncodingError U+94EA"});
assert.throws(() => {ms932Encoder.encode("\u94EB")}, {name:"Error",message:"EncodingError U+94EB"});
assert.throws(() => {ms932Encoder.encode("\u94EC")}, {name:"Error",message:"EncodingError U+94EC"});
assert.throws(() => {ms932Encoder.encode("\u94ED")}, {name:"Error",message:"EncodingError U+94ED"});
assert.throws(() => {ms932Encoder.encode("\u94EE")}, {name:"Error",message:"EncodingError U+94EE"});
assert.throws(() => {ms932Encoder.encode("\u94EF")}, {name:"Error",message:"EncodingError U+94EF"});
assert.throws(() => {ms932Encoder.encode("\u94F0")}, {name:"Error",message:"EncodingError U+94F0"});
assert.throws(() => {ms932Encoder.encode("\u94F1")}, {name:"Error",message:"EncodingError U+94F1"});
assert.throws(() => {ms932Encoder.encode("\u94F2")}, {name:"Error",message:"EncodingError U+94F2"});
assert.throws(() => {ms932Encoder.encode("\u94F3")}, {name:"Error",message:"EncodingError U+94F3"});
assert.throws(() => {ms932Encoder.encode("\u94F4")}, {name:"Error",message:"EncodingError U+94F4"});
assert.throws(() => {ms932Encoder.encode("\u94F5")}, {name:"Error",message:"EncodingError U+94F5"});
assert.throws(() => {ms932Encoder.encode("\u94F6")}, {name:"Error",message:"EncodingError U+94F6"});
assert.throws(() => {ms932Encoder.encode("\u94F7")}, {name:"Error",message:"EncodingError U+94F7"});
assert.throws(() => {ms932Encoder.encode("\u94F8")}, {name:"Error",message:"EncodingError U+94F8"});
assert.throws(() => {ms932Encoder.encode("\u94F9")}, {name:"Error",message:"EncodingError U+94F9"});
assert.throws(() => {ms932Encoder.encode("\u94FA")}, {name:"Error",message:"EncodingError U+94FA"});
assert.throws(() => {ms932Encoder.encode("\u94FB")}, {name:"Error",message:"EncodingError U+94FB"});
assert.throws(() => {ms932Encoder.encode("\u94FC")}, {name:"Error",message:"EncodingError U+94FC"});
assert.throws(() => {ms932Encoder.encode("\u94FD")}, {name:"Error",message:"EncodingError U+94FD"});
assert.throws(() => {ms932Encoder.encode("\u94FE")}, {name:"Error",message:"EncodingError U+94FE"});
assert.throws(() => {ms932Encoder.encode("\u94FF")}, {name:"Error",message:"EncodingError U+94FF"});
assert.throws(() => {ms932Encoder.encode("\u9500")}, {name:"Error",message:"EncodingError U+9500"});
assert.throws(() => {ms932Encoder.encode("\u9501")}, {name:"Error",message:"EncodingError U+9501"});
assert.throws(() => {ms932Encoder.encode("\u9502")}, {name:"Error",message:"EncodingError U+9502"});
assert.throws(() => {ms932Encoder.encode("\u9503")}, {name:"Error",message:"EncodingError U+9503"});
assert.throws(() => {ms932Encoder.encode("\u9504")}, {name:"Error",message:"EncodingError U+9504"});
assert.throws(() => {ms932Encoder.encode("\u9505")}, {name:"Error",message:"EncodingError U+9505"});
assert.throws(() => {ms932Encoder.encode("\u9506")}, {name:"Error",message:"EncodingError U+9506"});
assert.throws(() => {ms932Encoder.encode("\u9507")}, {name:"Error",message:"EncodingError U+9507"});
assert.throws(() => {ms932Encoder.encode("\u9508")}, {name:"Error",message:"EncodingError U+9508"});
assert.throws(() => {ms932Encoder.encode("\u9509")}, {name:"Error",message:"EncodingError U+9509"});
assert.throws(() => {ms932Encoder.encode("\u950A")}, {name:"Error",message:"EncodingError U+950A"});
assert.throws(() => {ms932Encoder.encode("\u950B")}, {name:"Error",message:"EncodingError U+950B"});
assert.throws(() => {ms932Encoder.encode("\u950C")}, {name:"Error",message:"EncodingError U+950C"});
assert.throws(() => {ms932Encoder.encode("\u950D")}, {name:"Error",message:"EncodingError U+950D"});
assert.throws(() => {ms932Encoder.encode("\u950E")}, {name:"Error",message:"EncodingError U+950E"});
assert.throws(() => {ms932Encoder.encode("\u950F")}, {name:"Error",message:"EncodingError U+950F"});
assert.throws(() => {ms932Encoder.encode("\u9510")}, {name:"Error",message:"EncodingError U+9510"});
assert.throws(() => {ms932Encoder.encode("\u9511")}, {name:"Error",message:"EncodingError U+9511"});
assert.throws(() => {ms932Encoder.encode("\u9512")}, {name:"Error",message:"EncodingError U+9512"});
assert.throws(() => {ms932Encoder.encode("\u9513")}, {name:"Error",message:"EncodingError U+9513"});
assert.throws(() => {ms932Encoder.encode("\u9514")}, {name:"Error",message:"EncodingError U+9514"});
assert.throws(() => {ms932Encoder.encode("\u9515")}, {name:"Error",message:"EncodingError U+9515"});
assert.throws(() => {ms932Encoder.encode("\u9516")}, {name:"Error",message:"EncodingError U+9516"});
assert.throws(() => {ms932Encoder.encode("\u9517")}, {name:"Error",message:"EncodingError U+9517"});
assert.throws(() => {ms932Encoder.encode("\u9518")}, {name:"Error",message:"EncodingError U+9518"});
assert.throws(() => {ms932Encoder.encode("\u9519")}, {name:"Error",message:"EncodingError U+9519"});
assert.throws(() => {ms932Encoder.encode("\u951A")}, {name:"Error",message:"EncodingError U+951A"});
assert.throws(() => {ms932Encoder.encode("\u951B")}, {name:"Error",message:"EncodingError U+951B"});
assert.throws(() => {ms932Encoder.encode("\u951C")}, {name:"Error",message:"EncodingError U+951C"});
assert.throws(() => {ms932Encoder.encode("\u951D")}, {name:"Error",message:"EncodingError U+951D"});
assert.throws(() => {ms932Encoder.encode("\u951E")}, {name:"Error",message:"EncodingError U+951E"});
assert.throws(() => {ms932Encoder.encode("\u951F")}, {name:"Error",message:"EncodingError U+951F"});
assert.throws(() => {ms932Encoder.encode("\u9520")}, {name:"Error",message:"EncodingError U+9520"});
assert.throws(() => {ms932Encoder.encode("\u9521")}, {name:"Error",message:"EncodingError U+9521"});
assert.throws(() => {ms932Encoder.encode("\u9522")}, {name:"Error",message:"EncodingError U+9522"});
assert.throws(() => {ms932Encoder.encode("\u9523")}, {name:"Error",message:"EncodingError U+9523"});
assert.throws(() => {ms932Encoder.encode("\u9524")}, {name:"Error",message:"EncodingError U+9524"});
assert.throws(() => {ms932Encoder.encode("\u9525")}, {name:"Error",message:"EncodingError U+9525"});
assert.throws(() => {ms932Encoder.encode("\u9526")}, {name:"Error",message:"EncodingError U+9526"});
assert.throws(() => {ms932Encoder.encode("\u9527")}, {name:"Error",message:"EncodingError U+9527"});
assert.throws(() => {ms932Encoder.encode("\u9528")}, {name:"Error",message:"EncodingError U+9528"});
assert.throws(() => {ms932Encoder.encode("\u9529")}, {name:"Error",message:"EncodingError U+9529"});
assert.throws(() => {ms932Encoder.encode("\u952A")}, {name:"Error",message:"EncodingError U+952A"});
assert.throws(() => {ms932Encoder.encode("\u952B")}, {name:"Error",message:"EncodingError U+952B"});
assert.throws(() => {ms932Encoder.encode("\u952C")}, {name:"Error",message:"EncodingError U+952C"});
assert.throws(() => {ms932Encoder.encode("\u952D")}, {name:"Error",message:"EncodingError U+952D"});
assert.throws(() => {ms932Encoder.encode("\u952E")}, {name:"Error",message:"EncodingError U+952E"});
assert.throws(() => {ms932Encoder.encode("\u952F")}, {name:"Error",message:"EncodingError U+952F"});
assert.throws(() => {ms932Encoder.encode("\u9530")}, {name:"Error",message:"EncodingError U+9530"});
assert.throws(() => {ms932Encoder.encode("\u9531")}, {name:"Error",message:"EncodingError U+9531"});
assert.throws(() => {ms932Encoder.encode("\u9532")}, {name:"Error",message:"EncodingError U+9532"});
assert.throws(() => {ms932Encoder.encode("\u9533")}, {name:"Error",message:"EncodingError U+9533"});
assert.throws(() => {ms932Encoder.encode("\u9534")}, {name:"Error",message:"EncodingError U+9534"});
assert.throws(() => {ms932Encoder.encode("\u9535")}, {name:"Error",message:"EncodingError U+9535"});
assert.throws(() => {ms932Encoder.encode("\u9536")}, {name:"Error",message:"EncodingError U+9536"});
assert.throws(() => {ms932Encoder.encode("\u9537")}, {name:"Error",message:"EncodingError U+9537"});
assert.throws(() => {ms932Encoder.encode("\u9538")}, {name:"Error",message:"EncodingError U+9538"});
assert.throws(() => {ms932Encoder.encode("\u9539")}, {name:"Error",message:"EncodingError U+9539"});
assert.throws(() => {ms932Encoder.encode("\u953A")}, {name:"Error",message:"EncodingError U+953A"});
assert.throws(() => {ms932Encoder.encode("\u953B")}, {name:"Error",message:"EncodingError U+953B"});
assert.throws(() => {ms932Encoder.encode("\u953C")}, {name:"Error",message:"EncodingError U+953C"});
assert.throws(() => {ms932Encoder.encode("\u953D")}, {name:"Error",message:"EncodingError U+953D"});
assert.throws(() => {ms932Encoder.encode("\u953E")}, {name:"Error",message:"EncodingError U+953E"});
assert.throws(() => {ms932Encoder.encode("\u953F")}, {name:"Error",message:"EncodingError U+953F"});
assert.throws(() => {ms932Encoder.encode("\u9540")}, {name:"Error",message:"EncodingError U+9540"});
assert.throws(() => {ms932Encoder.encode("\u9541")}, {name:"Error",message:"EncodingError U+9541"});
assert.throws(() => {ms932Encoder.encode("\u9542")}, {name:"Error",message:"EncodingError U+9542"});
assert.throws(() => {ms932Encoder.encode("\u9543")}, {name:"Error",message:"EncodingError U+9543"});
assert.throws(() => {ms932Encoder.encode("\u9544")}, {name:"Error",message:"EncodingError U+9544"});
assert.throws(() => {ms932Encoder.encode("\u9545")}, {name:"Error",message:"EncodingError U+9545"});
assert.throws(() => {ms932Encoder.encode("\u9546")}, {name:"Error",message:"EncodingError U+9546"});
assert.throws(() => {ms932Encoder.encode("\u9547")}, {name:"Error",message:"EncodingError U+9547"});
assert.throws(() => {ms932Encoder.encode("\u9548")}, {name:"Error",message:"EncodingError U+9548"});
assert.throws(() => {ms932Encoder.encode("\u9549")}, {name:"Error",message:"EncodingError U+9549"});
assert.throws(() => {ms932Encoder.encode("\u954A")}, {name:"Error",message:"EncodingError U+954A"});
assert.throws(() => {ms932Encoder.encode("\u954B")}, {name:"Error",message:"EncodingError U+954B"});
assert.throws(() => {ms932Encoder.encode("\u954C")}, {name:"Error",message:"EncodingError U+954C"});
assert.throws(() => {ms932Encoder.encode("\u954D")}, {name:"Error",message:"EncodingError U+954D"});
assert.throws(() => {ms932Encoder.encode("\u954E")}, {name:"Error",message:"EncodingError U+954E"});
assert.throws(() => {ms932Encoder.encode("\u954F")}, {name:"Error",message:"EncodingError U+954F"});
assert.throws(() => {ms932Encoder.encode("\u9550")}, {name:"Error",message:"EncodingError U+9550"});
assert.throws(() => {ms932Encoder.encode("\u9551")}, {name:"Error",message:"EncodingError U+9551"});
assert.throws(() => {ms932Encoder.encode("\u9552")}, {name:"Error",message:"EncodingError U+9552"});
assert.throws(() => {ms932Encoder.encode("\u9553")}, {name:"Error",message:"EncodingError U+9553"});
assert.throws(() => {ms932Encoder.encode("\u9554")}, {name:"Error",message:"EncodingError U+9554"});
assert.throws(() => {ms932Encoder.encode("\u9555")}, {name:"Error",message:"EncodingError U+9555"});
assert.throws(() => {ms932Encoder.encode("\u9556")}, {name:"Error",message:"EncodingError U+9556"});
assert.throws(() => {ms932Encoder.encode("\u9557")}, {name:"Error",message:"EncodingError U+9557"});
assert.throws(() => {ms932Encoder.encode("\u9558")}, {name:"Error",message:"EncodingError U+9558"});
assert.throws(() => {ms932Encoder.encode("\u9559")}, {name:"Error",message:"EncodingError U+9559"});
assert.throws(() => {ms932Encoder.encode("\u955A")}, {name:"Error",message:"EncodingError U+955A"});
assert.throws(() => {ms932Encoder.encode("\u955B")}, {name:"Error",message:"EncodingError U+955B"});
assert.throws(() => {ms932Encoder.encode("\u955C")}, {name:"Error",message:"EncodingError U+955C"});
assert.throws(() => {ms932Encoder.encode("\u955D")}, {name:"Error",message:"EncodingError U+955D"});
assert.throws(() => {ms932Encoder.encode("\u955E")}, {name:"Error",message:"EncodingError U+955E"});
assert.throws(() => {ms932Encoder.encode("\u955F")}, {name:"Error",message:"EncodingError U+955F"});
assert.throws(() => {ms932Encoder.encode("\u9560")}, {name:"Error",message:"EncodingError U+9560"});
assert.throws(() => {ms932Encoder.encode("\u9561")}, {name:"Error",message:"EncodingError U+9561"});
assert.throws(() => {ms932Encoder.encode("\u9562")}, {name:"Error",message:"EncodingError U+9562"});
assert.throws(() => {ms932Encoder.encode("\u9563")}, {name:"Error",message:"EncodingError U+9563"});
assert.throws(() => {ms932Encoder.encode("\u9564")}, {name:"Error",message:"EncodingError U+9564"});
assert.throws(() => {ms932Encoder.encode("\u9565")}, {name:"Error",message:"EncodingError U+9565"});
assert.throws(() => {ms932Encoder.encode("\u9566")}, {name:"Error",message:"EncodingError U+9566"});
assert.throws(() => {ms932Encoder.encode("\u9567")}, {name:"Error",message:"EncodingError U+9567"});
assert.throws(() => {ms932Encoder.encode("\u9568")}, {name:"Error",message:"EncodingError U+9568"});
assert.throws(() => {ms932Encoder.encode("\u9569")}, {name:"Error",message:"EncodingError U+9569"});
assert.throws(() => {ms932Encoder.encode("\u956A")}, {name:"Error",message:"EncodingError U+956A"});
assert.throws(() => {ms932Encoder.encode("\u956B")}, {name:"Error",message:"EncodingError U+956B"});
assert.throws(() => {ms932Encoder.encode("\u956C")}, {name:"Error",message:"EncodingError U+956C"});
assert.throws(() => {ms932Encoder.encode("\u956D")}, {name:"Error",message:"EncodingError U+956D"});
assert.throws(() => {ms932Encoder.encode("\u956E")}, {name:"Error",message:"EncodingError U+956E"});
assert.throws(() => {ms932Encoder.encode("\u956F")}, {name:"Error",message:"EncodingError U+956F"});
assert.throws(() => {ms932Encoder.encode("\u9570")}, {name:"Error",message:"EncodingError U+9570"});
assert.throws(() => {ms932Encoder.encode("\u9571")}, {name:"Error",message:"EncodingError U+9571"});
assert.throws(() => {ms932Encoder.encode("\u9572")}, {name:"Error",message:"EncodingError U+9572"});
assert.throws(() => {ms932Encoder.encode("\u9573")}, {name:"Error",message:"EncodingError U+9573"});
assert.throws(() => {ms932Encoder.encode("\u9574")}, {name:"Error",message:"EncodingError U+9574"});
assert.throws(() => {ms932Encoder.encode("\u9575")}, {name:"Error",message:"EncodingError U+9575"});
assert.throws(() => {ms932Encoder.encode("\u9576")}, {name:"Error",message:"EncodingError U+9576"});
r = r && ([...ms932Encoder.encode("長")].join(",") === "146,183"); // U+9577
assert.throws(() => {ms932Encoder.encode("\u9578")}, {name:"Error",message:"EncodingError U+9578"});
assert.throws(() => {ms932Encoder.encode("\u9579")}, {name:"Error",message:"EncodingError U+9579"});
assert.throws(() => {ms932Encoder.encode("\u957A")}, {name:"Error",message:"EncodingError U+957A"});
assert.throws(() => {ms932Encoder.encode("\u957B")}, {name:"Error",message:"EncodingError U+957B"});
assert.throws(() => {ms932Encoder.encode("\u957C")}, {name:"Error",message:"EncodingError U+957C"});
assert.throws(() => {ms932Encoder.encode("\u957D")}, {name:"Error",message:"EncodingError U+957D"});
assert.throws(() => {ms932Encoder.encode("\u957E")}, {name:"Error",message:"EncodingError U+957E"});
assert.throws(() => {ms932Encoder.encode("\u957F")}, {name:"Error",message:"EncodingError U+957F"});
r = r && ([...ms932Encoder.encode("門")].join(",") === "150,229"); // U+9580
assert.throws(() => {ms932Encoder.encode("\u9581")}, {name:"Error",message:"EncodingError U+9581"});
r = r && ([...ms932Encoder.encode("閂閃")].join(",") === "232,120,145,77"); // U+9582
assert.throws(() => {ms932Encoder.encode("\u9584")}, {name:"Error",message:"EncodingError U+9584"});
assert.throws(() => {ms932Encoder.encode("\u9585")}, {name:"Error",message:"EncodingError U+9585"});
assert.throws(() => {ms932Encoder.encode("\u9586")}, {name:"Error",message:"EncodingError U+9586"});
r = r && ([...ms932Encoder.encode("閇")].join(",") === "232,121"); // U+9587
assert.throws(() => {ms932Encoder.encode("\u9588")}, {name:"Error",message:"EncodingError U+9588"});
r = r && ([...ms932Encoder.encode("閉閊開")].join(",") === "149,194,232,122,138,74"); // U+9589
assert.throws(() => {ms932Encoder.encode("\u958C")}, {name:"Error",message:"EncodingError U+958C"});
assert.throws(() => {ms932Encoder.encode("\u958D")}, {name:"Error",message:"EncodingError U+958D"});
assert.throws(() => {ms932Encoder.encode("\u958E")}, {name:"Error",message:"EncodingError U+958E"});
r = r && ([...ms932Encoder.encode("閏")].join(",") === "137,91"); // U+958F
assert.throws(() => {ms932Encoder.encode("\u9590")}, {name:"Error",message:"EncodingError U+9590"});
r = r && ([...ms932Encoder.encode("閑閒間閔")].join(",") === "138,213,251,232,138,212,232,123"); // U+9591
assert.throws(() => {ms932Encoder.encode("\u9595")}, {name:"Error",message:"EncodingError U+9595"});
r = r && ([...ms932Encoder.encode("閖")].join(",") === "232,124"); // U+9596
assert.throws(() => {ms932Encoder.encode("\u9597")}, {name:"Error",message:"EncodingError U+9597"});
r = r && ([...ms932Encoder.encode("閘閙")].join(",") === "232,125,232,126"); // U+9598
assert.throws(() => {ms932Encoder.encode("\u959A")}, {name:"Error",message:"EncodingError U+959A"});
assert.throws(() => {ms932Encoder.encode("\u959B")}, {name:"Error",message:"EncodingError U+959B"});
assert.throws(() => {ms932Encoder.encode("\u959C")}, {name:"Error",message:"EncodingError U+959C"});
assert.throws(() => {ms932Encoder.encode("\u959D")}, {name:"Error",message:"EncodingError U+959D"});
assert.throws(() => {ms932Encoder.encode("\u959E")}, {name:"Error",message:"EncodingError U+959E"});
assert.throws(() => {ms932Encoder.encode("\u959F")}, {name:"Error",message:"EncodingError U+959F"});
r = r && ([...ms932Encoder.encode("閠")].join(",") === "232,128"); // U+95A0
assert.throws(() => {ms932Encoder.encode("\u95A1")}, {name:"Error",message:"EncodingError U+95A1"});
r = r && ([...ms932Encoder.encode("関閣閤閥")].join(",") === "138,214,138,116,141,125,148,180"); // U+95A2
assert.throws(() => {ms932Encoder.encode("\u95A6")}, {name:"Error",message:"EncodingError U+95A6"});
r = r && ([...ms932Encoder.encode("閧閨")].join(",") === "232,130,232,129"); // U+95A7
assert.throws(() => {ms932Encoder.encode("\u95A9")}, {name:"Error",message:"EncodingError U+95A9"});
assert.throws(() => {ms932Encoder.encode("\u95AA")}, {name:"Error",message:"EncodingError U+95AA"});
assert.throws(() => {ms932Encoder.encode("\u95AB")}, {name:"Error",message:"EncodingError U+95AB"});
assert.throws(() => {ms932Encoder.encode("\u95AC")}, {name:"Error",message:"EncodingError U+95AC"});
r = r && ([...ms932Encoder.encode("閭")].join(",") === "232,131"); // U+95AD
assert.throws(() => {ms932Encoder.encode("\u95AE")}, {name:"Error",message:"EncodingError U+95AE"});
assert.throws(() => {ms932Encoder.encode("\u95AF")}, {name:"Error",message:"EncodingError U+95AF"});
assert.throws(() => {ms932Encoder.encode("\u95B0")}, {name:"Error",message:"EncodingError U+95B0"});
assert.throws(() => {ms932Encoder.encode("\u95B1")}, {name:"Error",message:"EncodingError U+95B1"});
r = r && ([...ms932Encoder.encode("閲")].join(",") === "137,123"); // U+95B2
assert.throws(() => {ms932Encoder.encode("\u95B3")}, {name:"Error",message:"EncodingError U+95B3"});
assert.throws(() => {ms932Encoder.encode("\u95B4")}, {name:"Error",message:"EncodingError U+95B4"});
assert.throws(() => {ms932Encoder.encode("\u95B5")}, {name:"Error",message:"EncodingError U+95B5"});
assert.throws(() => {ms932Encoder.encode("\u95B6")}, {name:"Error",message:"EncodingError U+95B6"});
assert.throws(() => {ms932Encoder.encode("\u95B7")}, {name:"Error",message:"EncodingError U+95B7"});
assert.throws(() => {ms932Encoder.encode("\u95B8")}, {name:"Error",message:"EncodingError U+95B8"});
r = r && ([...ms932Encoder.encode("閹")].join(",") === "232,134"); // U+95B9
assert.throws(() => {ms932Encoder.encode("\u95BA")}, {name:"Error",message:"EncodingError U+95BA"});
r = r && ([...ms932Encoder.encode("閻閼")].join(",") === "232,133,232,132"); // U+95BB
assert.throws(() => {ms932Encoder.encode("\u95BD")}, {name:"Error",message:"EncodingError U+95BD"});
r = r && ([...ms932Encoder.encode("閾")].join(",") === "232,135"); // U+95BE
assert.throws(() => {ms932Encoder.encode("\u95BF")}, {name:"Error",message:"EncodingError U+95BF"});
assert.throws(() => {ms932Encoder.encode("\u95C0")}, {name:"Error",message:"EncodingError U+95C0"});
assert.throws(() => {ms932Encoder.encode("\u95C1")}, {name:"Error",message:"EncodingError U+95C1"});
assert.throws(() => {ms932Encoder.encode("\u95C2")}, {name:"Error",message:"EncodingError U+95C2"});
r = r && ([...ms932Encoder.encode("闃")].join(",") === "232,138"); // U+95C3
assert.throws(() => {ms932Encoder.encode("\u95C4")}, {name:"Error",message:"EncodingError U+95C4"});
assert.throws(() => {ms932Encoder.encode("\u95C5")}, {name:"Error",message:"EncodingError U+95C5"});
assert.throws(() => {ms932Encoder.encode("\u95C6")}, {name:"Error",message:"EncodingError U+95C6"});
r = r && ([...ms932Encoder.encode("闇")].join(",") === "136,197"); // U+95C7
assert.throws(() => {ms932Encoder.encode("\u95C8")}, {name:"Error",message:"EncodingError U+95C8"});
assert.throws(() => {ms932Encoder.encode("\u95C9")}, {name:"Error",message:"EncodingError U+95C9"});
r = r && ([...ms932Encoder.encode("闊")].join(",") === "232,136"); // U+95CA
assert.throws(() => {ms932Encoder.encode("\u95CB")}, {name:"Error",message:"EncodingError U+95CB"});
r = r && ([...ms932Encoder.encode("闌闍")].join(",") === "232,140,232,139"); // U+95CC
assert.throws(() => {ms932Encoder.encode("\u95CE")}, {name:"Error",message:"EncodingError U+95CE"});
assert.throws(() => {ms932Encoder.encode("\u95CF")}, {name:"Error",message:"EncodingError U+95CF"});
assert.throws(() => {ms932Encoder.encode("\u95D0")}, {name:"Error",message:"EncodingError U+95D0"});
assert.throws(() => {ms932Encoder.encode("\u95D1")}, {name:"Error",message:"EncodingError U+95D1"});
assert.throws(() => {ms932Encoder.encode("\u95D2")}, {name:"Error",message:"EncodingError U+95D2"});
assert.throws(() => {ms932Encoder.encode("\u95D3")}, {name:"Error",message:"EncodingError U+95D3"});
r = r && ([...ms932Encoder.encode("闔闕闖")].join(",") === "232,142,232,141,232,143"); // U+95D4
assert.throws(() => {ms932Encoder.encode("\u95D7")}, {name:"Error",message:"EncodingError U+95D7"});
r = r && ([...ms932Encoder.encode("闘")].join(",") === "147,172"); // U+95D8
assert.throws(() => {ms932Encoder.encode("\u95D9")}, {name:"Error",message:"EncodingError U+95D9"});
assert.throws(() => {ms932Encoder.encode("\u95DA")}, {name:"Error",message:"EncodingError U+95DA"});
assert.throws(() => {ms932Encoder.encode("\u95DB")}, {name:"Error",message:"EncodingError U+95DB"});
r = r && ([...ms932Encoder.encode("關")].join(",") === "232,144"); // U+95DC
assert.throws(() => {ms932Encoder.encode("\u95DD")}, {name:"Error",message:"EncodingError U+95DD"});
assert.throws(() => {ms932Encoder.encode("\u95DE")}, {name:"Error",message:"EncodingError U+95DE"});
assert.throws(() => {ms932Encoder.encode("\u95DF")}, {name:"Error",message:"EncodingError U+95DF"});
assert.throws(() => {ms932Encoder.encode("\u95E0")}, {name:"Error",message:"EncodingError U+95E0"});
r = r && ([...ms932Encoder.encode("闡闢")].join(",") === "232,145,232,147"); // U+95E1
assert.throws(() => {ms932Encoder.encode("\u95E3")}, {name:"Error",message:"EncodingError U+95E3"});
assert.throws(() => {ms932Encoder.encode("\u95E4")}, {name:"Error",message:"EncodingError U+95E4"});
r = r && ([...ms932Encoder.encode("闥")].join(",") === "232,146"); // U+95E5
assert.throws(() => {ms932Encoder.encode("\u95E6")}, {name:"Error",message:"EncodingError U+95E6"});
assert.throws(() => {ms932Encoder.encode("\u95E7")}, {name:"Error",message:"EncodingError U+95E7"});
assert.throws(() => {ms932Encoder.encode("\u95E8")}, {name:"Error",message:"EncodingError U+95E8"});
assert.throws(() => {ms932Encoder.encode("\u95E9")}, {name:"Error",message:"EncodingError U+95E9"});
assert.throws(() => {ms932Encoder.encode("\u95EA")}, {name:"Error",message:"EncodingError U+95EA"});
assert.throws(() => {ms932Encoder.encode("\u95EB")}, {name:"Error",message:"EncodingError U+95EB"});
assert.throws(() => {ms932Encoder.encode("\u95EC")}, {name:"Error",message:"EncodingError U+95EC"});
assert.throws(() => {ms932Encoder.encode("\u95ED")}, {name:"Error",message:"EncodingError U+95ED"});
assert.throws(() => {ms932Encoder.encode("\u95EE")}, {name:"Error",message:"EncodingError U+95EE"});
assert.throws(() => {ms932Encoder.encode("\u95EF")}, {name:"Error",message:"EncodingError U+95EF"});
assert.throws(() => {ms932Encoder.encode("\u95F0")}, {name:"Error",message:"EncodingError U+95F0"});
assert.throws(() => {ms932Encoder.encode("\u95F1")}, {name:"Error",message:"EncodingError U+95F1"});
assert.throws(() => {ms932Encoder.encode("\u95F2")}, {name:"Error",message:"EncodingError U+95F2"});
assert.throws(() => {ms932Encoder.encode("\u95F3")}, {name:"Error",message:"EncodingError U+95F3"});
assert.throws(() => {ms932Encoder.encode("\u95F4")}, {name:"Error",message:"EncodingError U+95F4"});
assert.throws(() => {ms932Encoder.encode("\u95F5")}, {name:"Error",message:"EncodingError U+95F5"});
assert.throws(() => {ms932Encoder.encode("\u95F6")}, {name:"Error",message:"EncodingError U+95F6"});
assert.throws(() => {ms932Encoder.encode("\u95F7")}, {name:"Error",message:"EncodingError U+95F7"});
assert.throws(() => {ms932Encoder.encode("\u95F8")}, {name:"Error",message:"EncodingError U+95F8"});
assert.throws(() => {ms932Encoder.encode("\u95F9")}, {name:"Error",message:"EncodingError U+95F9"});
assert.throws(() => {ms932Encoder.encode("\u95FA")}, {name:"Error",message:"EncodingError U+95FA"});
assert.throws(() => {ms932Encoder.encode("\u95FB")}, {name:"Error",message:"EncodingError U+95FB"});
assert.throws(() => {ms932Encoder.encode("\u95FC")}, {name:"Error",message:"EncodingError U+95FC"});
assert.throws(() => {ms932Encoder.encode("\u95FD")}, {name:"Error",message:"EncodingError U+95FD"});
assert.throws(() => {ms932Encoder.encode("\u95FE")}, {name:"Error",message:"EncodingError U+95FE"});
assert.throws(() => {ms932Encoder.encode("\u95FF")}, {name:"Error",message:"EncodingError U+95FF"});
assert.throws(() => {ms932Encoder.encode("\u9600")}, {name:"Error",message:"EncodingError U+9600"});
assert.throws(() => {ms932Encoder.encode("\u9601")}, {name:"Error",message:"EncodingError U+9601"});
assert.throws(() => {ms932Encoder.encode("\u9602")}, {name:"Error",message:"EncodingError U+9602"});
assert.throws(() => {ms932Encoder.encode("\u9603")}, {name:"Error",message:"EncodingError U+9603"});
assert.throws(() => {ms932Encoder.encode("\u9604")}, {name:"Error",message:"EncodingError U+9604"});
assert.throws(() => {ms932Encoder.encode("\u9605")}, {name:"Error",message:"EncodingError U+9605"});
assert.throws(() => {ms932Encoder.encode("\u9606")}, {name:"Error",message:"EncodingError U+9606"});
assert.throws(() => {ms932Encoder.encode("\u9607")}, {name:"Error",message:"EncodingError U+9607"});
assert.throws(() => {ms932Encoder.encode("\u9608")}, {name:"Error",message:"EncodingError U+9608"});
assert.throws(() => {ms932Encoder.encode("\u9609")}, {name:"Error",message:"EncodingError U+9609"});
assert.throws(() => {ms932Encoder.encode("\u960A")}, {name:"Error",message:"EncodingError U+960A"});
assert.throws(() => {ms932Encoder.encode("\u960B")}, {name:"Error",message:"EncodingError U+960B"});
assert.throws(() => {ms932Encoder.encode("\u960C")}, {name:"Error",message:"EncodingError U+960C"});
assert.throws(() => {ms932Encoder.encode("\u960D")}, {name:"Error",message:"EncodingError U+960D"});
assert.throws(() => {ms932Encoder.encode("\u960E")}, {name:"Error",message:"EncodingError U+960E"});
assert.throws(() => {ms932Encoder.encode("\u960F")}, {name:"Error",message:"EncodingError U+960F"});
assert.throws(() => {ms932Encoder.encode("\u9610")}, {name:"Error",message:"EncodingError U+9610"});
assert.throws(() => {ms932Encoder.encode("\u9611")}, {name:"Error",message:"EncodingError U+9611"});
assert.throws(() => {ms932Encoder.encode("\u9612")}, {name:"Error",message:"EncodingError U+9612"});
assert.throws(() => {ms932Encoder.encode("\u9613")}, {name:"Error",message:"EncodingError U+9613"});
assert.throws(() => {ms932Encoder.encode("\u9614")}, {name:"Error",message:"EncodingError U+9614"});
assert.throws(() => {ms932Encoder.encode("\u9615")}, {name:"Error",message:"EncodingError U+9615"});
assert.throws(() => {ms932Encoder.encode("\u9616")}, {name:"Error",message:"EncodingError U+9616"});
assert.throws(() => {ms932Encoder.encode("\u9617")}, {name:"Error",message:"EncodingError U+9617"});
assert.throws(() => {ms932Encoder.encode("\u9618")}, {name:"Error",message:"EncodingError U+9618"});
assert.throws(() => {ms932Encoder.encode("\u9619")}, {name:"Error",message:"EncodingError U+9619"});
assert.throws(() => {ms932Encoder.encode("\u961A")}, {name:"Error",message:"EncodingError U+961A"});
assert.throws(() => {ms932Encoder.encode("\u961B")}, {name:"Error",message:"EncodingError U+961B"});
r = r && ([...ms932Encoder.encode("阜")].join(",") === "149,140"); // U+961C
assert.throws(() => {ms932Encoder.encode("\u961D")}, {name:"Error",message:"EncodingError U+961D"});
assert.throws(() => {ms932Encoder.encode("\u961E")}, {name:"Error",message:"EncodingError U+961E"});
assert.throws(() => {ms932Encoder.encode("\u961F")}, {name:"Error",message:"EncodingError U+961F"});
assert.throws(() => {ms932Encoder.encode("\u9620")}, {name:"Error",message:"EncodingError U+9620"});
r = r && ([...ms932Encoder.encode("阡")].join(",") === "232,148"); // U+9621
assert.throws(() => {ms932Encoder.encode("\u9622")}, {name:"Error",message:"EncodingError U+9622"});
assert.throws(() => {ms932Encoder.encode("\u9623")}, {name:"Error",message:"EncodingError U+9623"});
assert.throws(() => {ms932Encoder.encode("\u9624")}, {name:"Error",message:"EncodingError U+9624"});
assert.throws(() => {ms932Encoder.encode("\u9625")}, {name:"Error",message:"EncodingError U+9625"});
assert.throws(() => {ms932Encoder.encode("\u9626")}, {name:"Error",message:"EncodingError U+9626"});
assert.throws(() => {ms932Encoder.encode("\u9627")}, {name:"Error",message:"EncodingError U+9627"});
r = r && ([...ms932Encoder.encode("阨")].join(",") === "232,149"); // U+9628
assert.throws(() => {ms932Encoder.encode("\u9629")}, {name:"Error",message:"EncodingError U+9629"});
r = r && ([...ms932Encoder.encode("阪")].join(",") === "141,227"); // U+962A
assert.throws(() => {ms932Encoder.encode("\u962B")}, {name:"Error",message:"EncodingError U+962B"});
assert.throws(() => {ms932Encoder.encode("\u962C")}, {name:"Error",message:"EncodingError U+962C"});
assert.throws(() => {ms932Encoder.encode("\u962D")}, {name:"Error",message:"EncodingError U+962D"});
r = r && ([...ms932Encoder.encode("阮阯")].join(",") === "232,150,232,151"); // U+962E
assert.throws(() => {ms932Encoder.encode("\u9630")}, {name:"Error",message:"EncodingError U+9630"});
assert.throws(() => {ms932Encoder.encode("\u9631")}, {name:"Error",message:"EncodingError U+9631"});
r = r && ([...ms932Encoder.encode("防")].join(",") === "150,104"); // U+9632
assert.throws(() => {ms932Encoder.encode("\u9633")}, {name:"Error",message:"EncodingError U+9633"});
assert.throws(() => {ms932Encoder.encode("\u9634")}, {name:"Error",message:"EncodingError U+9634"});
assert.throws(() => {ms932Encoder.encode("\u9635")}, {name:"Error",message:"EncodingError U+9635"});
assert.throws(() => {ms932Encoder.encode("\u9636")}, {name:"Error",message:"EncodingError U+9636"});
assert.throws(() => {ms932Encoder.encode("\u9637")}, {name:"Error",message:"EncodingError U+9637"});
assert.throws(() => {ms932Encoder.encode("\u9638")}, {name:"Error",message:"EncodingError U+9638"});
assert.throws(() => {ms932Encoder.encode("\u9639")}, {name:"Error",message:"EncodingError U+9639"});
assert.throws(() => {ms932Encoder.encode("\u963A")}, {name:"Error",message:"EncodingError U+963A"});
r = r && ([...ms932Encoder.encode("阻")].join(",") === "145,106"); // U+963B
assert.throws(() => {ms932Encoder.encode("\u963C")}, {name:"Error",message:"EncodingError U+963C"});
assert.throws(() => {ms932Encoder.encode("\u963D")}, {name:"Error",message:"EncodingError U+963D"});
assert.throws(() => {ms932Encoder.encode("\u963E")}, {name:"Error",message:"EncodingError U+963E"});
r = r && ([...ms932Encoder.encode("阿陀")].join(",") === "136,162,145,201"); // U+963F
assert.throws(() => {ms932Encoder.encode("\u9641")}, {name:"Error",message:"EncodingError U+9641"});
r = r && ([...ms932Encoder.encode("陂")].join(",") === "232,152"); // U+9642
assert.throws(() => {ms932Encoder.encode("\u9643")}, {name:"Error",message:"EncodingError U+9643"});
r = r && ([...ms932Encoder.encode("附")].join(",") === "149,141"); // U+9644
assert.throws(() => {ms932Encoder.encode("\u9645")}, {name:"Error",message:"EncodingError U+9645"});
assert.throws(() => {ms932Encoder.encode("\u9646")}, {name:"Error",message:"EncodingError U+9646"});
assert.throws(() => {ms932Encoder.encode("\u9647")}, {name:"Error",message:"EncodingError U+9647"});
assert.throws(() => {ms932Encoder.encode("\u9648")}, {name:"Error",message:"EncodingError U+9648"});
assert.throws(() => {ms932Encoder.encode("\u9649")}, {name:"Error",message:"EncodingError U+9649"});
assert.throws(() => {ms932Encoder.encode("\u964A")}, {name:"Error",message:"EncodingError U+964A"});
r = r && ([...ms932Encoder.encode("陋陌降")].join(",") === "232,155,232,153,141,126"); // U+964B
assert.throws(() => {ms932Encoder.encode("\u964E")}, {name:"Error",message:"EncodingError U+964E"});
r = r && ([...ms932Encoder.encode("陏限")].join(",") === "232,154,140,192"); // U+964F
assert.throws(() => {ms932Encoder.encode("\u9651")}, {name:"Error",message:"EncodingError U+9651"});
assert.throws(() => {ms932Encoder.encode("\u9652")}, {name:"Error",message:"EncodingError U+9652"});
assert.throws(() => {ms932Encoder.encode("\u9653")}, {name:"Error",message:"EncodingError U+9653"});
assert.throws(() => {ms932Encoder.encode("\u9654")}, {name:"Error",message:"EncodingError U+9654"});
assert.throws(() => {ms932Encoder.encode("\u9655")}, {name:"Error",message:"EncodingError U+9655"});
assert.throws(() => {ms932Encoder.encode("\u9656")}, {name:"Error",message:"EncodingError U+9656"});
assert.throws(() => {ms932Encoder.encode("\u9657")}, {name:"Error",message:"EncodingError U+9657"});
assert.throws(() => {ms932Encoder.encode("\u9658")}, {name:"Error",message:"EncodingError U+9658"});
assert.throws(() => {ms932Encoder.encode("\u9659")}, {name:"Error",message:"EncodingError U+9659"});
assert.throws(() => {ms932Encoder.encode("\u965A")}, {name:"Error",message:"EncodingError U+965A"});
r = r && ([...ms932Encoder.encode("陛陜陝陞陟")].join(",") === "149,195,232,157,232,159,232,158,232,160"); // U+965B
assert.throws(() => {ms932Encoder.encode("\u9660")}, {name:"Error",message:"EncodingError U+9660"});
assert.throws(() => {ms932Encoder.encode("\u9661")}, {name:"Error",message:"EncodingError U+9661"});
r = r && ([...ms932Encoder.encode("院陣除陥陦")].join(",") === "137,64,144,119,143,156,138,215,232,161"); // U+9662
assert.throws(() => {ms932Encoder.encode("\u9667")}, {name:"Error",message:"EncodingError U+9667"});
assert.throws(() => {ms932Encoder.encode("\u9668")}, {name:"Error",message:"EncodingError U+9668"});
assert.throws(() => {ms932Encoder.encode("\u9669")}, {name:"Error",message:"EncodingError U+9669"});
r = r && ([...ms932Encoder.encode("陪")].join(",") === "148,134"); // U+966A
assert.throws(() => {ms932Encoder.encode("\u966B")}, {name:"Error",message:"EncodingError U+966B"});
r = r && ([...ms932Encoder.encode("陬")].join(",") === "232,163"); // U+966C
assert.throws(() => {ms932Encoder.encode("\u966D")}, {name:"Error",message:"EncodingError U+966D"});
assert.throws(() => {ms932Encoder.encode("\u966E")}, {name:"Error",message:"EncodingError U+966E"});
assert.throws(() => {ms932Encoder.encode("\u966F")}, {name:"Error",message:"EncodingError U+966F"});
r = r && ([...ms932Encoder.encode("陰")].join(",") === "137,65"); // U+9670
assert.throws(() => {ms932Encoder.encode("\u9671")}, {name:"Error",message:"EncodingError U+9671"});
r = r && ([...ms932Encoder.encode("陲陳")].join(",") === "232,162,146,194"); // U+9672
assert.throws(() => {ms932Encoder.encode("\u9674")}, {name:"Error",message:"EncodingError U+9674"});
r = r && ([...ms932Encoder.encode("陵陶陷陸")].join(",") === "151,203,147,169,232,156,151,164"); // U+9675
assert.throws(() => {ms932Encoder.encode("\u9679")}, {name:"Error",message:"EncodingError U+9679"});
r = r && ([...ms932Encoder.encode("険")].join(",") === "140,175"); // U+967A
assert.throws(() => {ms932Encoder.encode("\u967B")}, {name:"Error",message:"EncodingError U+967B"});
assert.throws(() => {ms932Encoder.encode("\u967C")}, {name:"Error",message:"EncodingError U+967C"});
r = r && ([...ms932Encoder.encode("陽")].join(",") === "151,122"); // U+967D
assert.throws(() => {ms932Encoder.encode("\u967E")}, {name:"Error",message:"EncodingError U+967E"});
assert.throws(() => {ms932Encoder.encode("\u967F")}, {name:"Error",message:"EncodingError U+967F"});
assert.throws(() => {ms932Encoder.encode("\u9680")}, {name:"Error",message:"EncodingError U+9680"});
assert.throws(() => {ms932Encoder.encode("\u9681")}, {name:"Error",message:"EncodingError U+9681"});
assert.throws(() => {ms932Encoder.encode("\u9682")}, {name:"Error",message:"EncodingError U+9682"});
assert.throws(() => {ms932Encoder.encode("\u9683")}, {name:"Error",message:"EncodingError U+9683"});
assert.throws(() => {ms932Encoder.encode("\u9684")}, {name:"Error",message:"EncodingError U+9684"});
r = r && ([...ms932Encoder.encode("隅隆")].join(",") === "139,247,151,178"); // U+9685
assert.throws(() => {ms932Encoder.encode("\u9687")}, {name:"Error",message:"EncodingError U+9687"});
r = r && ([...ms932Encoder.encode("隈")].join(",") === "140,71"); // U+9688
assert.throws(() => {ms932Encoder.encode("\u9689")}, {name:"Error",message:"EncodingError U+9689"});
r = r && ([...ms932Encoder.encode("隊隋")].join(",") === "145,224,228,64"); // U+968A
assert.throws(() => {ms932Encoder.encode("\u968C")}, {name:"Error",message:"EncodingError U+968C"});
r = r && ([...ms932Encoder.encode("隍階随")].join(",") === "232,164,138,75,144,143"); // U+968D
assert.throws(() => {ms932Encoder.encode("\u9690")}, {name:"Error",message:"EncodingError U+9690"});
assert.throws(() => {ms932Encoder.encode("\u9691")}, {name:"Error",message:"EncodingError U+9691"});
assert.throws(() => {ms932Encoder.encode("\u9692")}, {name:"Error",message:"EncodingError U+9692"});
assert.throws(() => {ms932Encoder.encode("\u9693")}, {name:"Error",message:"EncodingError U+9693"});
r = r && ([...ms932Encoder.encode("隔隕")].join(",") === "138,117,232,166"); // U+9694
assert.throws(() => {ms932Encoder.encode("\u9696")}, {name:"Error",message:"EncodingError U+9696"});
r = r && ([...ms932Encoder.encode("隗隘隙")].join(",") === "232,167,232,165,140,132"); // U+9697
assert.throws(() => {ms932Encoder.encode("\u969A")}, {name:"Error",message:"EncodingError U+969A"});
r = r && ([...ms932Encoder.encode("際障隝")].join(",") === "141,219,143,225,251,235"); // U+969B
assert.throws(() => {ms932Encoder.encode("\u969E")}, {name:"Error",message:"EncodingError U+969E"});
assert.throws(() => {ms932Encoder.encode("\u969F")}, {name:"Error",message:"EncodingError U+969F"});
r = r && ([...ms932Encoder.encode("隠")].join(",") === "137,66"); // U+96A0
assert.throws(() => {ms932Encoder.encode("\u96A1")}, {name:"Error",message:"EncodingError U+96A1"});
assert.throws(() => {ms932Encoder.encode("\u96A2")}, {name:"Error",message:"EncodingError U+96A2"});
r = r && ([...ms932Encoder.encode("隣")].join(",") === "151,215"); // U+96A3
assert.throws(() => {ms932Encoder.encode("\u96A4")}, {name:"Error",message:"EncodingError U+96A4"});
assert.throws(() => {ms932Encoder.encode("\u96A5")}, {name:"Error",message:"EncodingError U+96A5"});
assert.throws(() => {ms932Encoder.encode("\u96A6")}, {name:"Error",message:"EncodingError U+96A6"});
r = r && ([...ms932Encoder.encode("隧隨")].join(",") === "232,169,231,172"); // U+96A7
assert.throws(() => {ms932Encoder.encode("\u96A9")}, {name:"Error",message:"EncodingError U+96A9"});
r = r && ([...ms932Encoder.encode("險")].join(",") === "232,168"); // U+96AA
assert.throws(() => {ms932Encoder.encode("\u96AB")}, {name:"Error",message:"EncodingError U+96AB"});
assert.throws(() => {ms932Encoder.encode("\u96AC")}, {name:"Error",message:"EncodingError U+96AC"});
assert.throws(() => {ms932Encoder.encode("\u96AD")}, {name:"Error",message:"EncodingError U+96AD"});
assert.throws(() => {ms932Encoder.encode("\u96AE")}, {name:"Error",message:"EncodingError U+96AE"});
r = r && ([...ms932Encoder.encode("隯隰隱隲")].join(",") === "251,236,232,172,232,170,232,171"); // U+96AF
assert.throws(() => {ms932Encoder.encode("\u96B3")}, {name:"Error",message:"EncodingError U+96B3"});
r = r && ([...ms932Encoder.encode("隴")].join(",") === "232,173"); // U+96B4
assert.throws(() => {ms932Encoder.encode("\u96B5")}, {name:"Error",message:"EncodingError U+96B5"});
r = r && ([...ms932Encoder.encode("隶隷隸隹")].join(",") === "232,174,151,234,232,175,232,176"); // U+96B6
assert.throws(() => {ms932Encoder.encode("\u96BA")}, {name:"Error",message:"EncodingError U+96BA"});
r = r && ([...ms932Encoder.encode("隻隼")].join(",") === "144,199,148,185"); // U+96BB
assert.throws(() => {ms932Encoder.encode("\u96BD")}, {name:"Error",message:"EncodingError U+96BD"});
assert.throws(() => {ms932Encoder.encode("\u96BE")}, {name:"Error",message:"EncodingError U+96BE"});
assert.throws(() => {ms932Encoder.encode("\u96BF")}, {name:"Error",message:"EncodingError U+96BF"});
r = r && ([...ms932Encoder.encode("雀雁")].join(",") === "144,157,138,229"); // U+96C0
assert.throws(() => {ms932Encoder.encode("\u96C2")}, {name:"Error",message:"EncodingError U+96C2"});
assert.throws(() => {ms932Encoder.encode("\u96C3")}, {name:"Error",message:"EncodingError U+96C3"});
r = r && ([...ms932Encoder.encode("雄雅集雇")].join(",") === "151,89,137,235,143,87,140,217"); // U+96C4
assert.throws(() => {ms932Encoder.encode("\u96C8")}, {name:"Error",message:"EncodingError U+96C8"});
r = r && ([...ms932Encoder.encode("雉")].join(",") === "232,179"); // U+96C9
assert.throws(() => {ms932Encoder.encode("\u96CA")}, {name:"Error",message:"EncodingError U+96CA"});
r = r && ([...ms932Encoder.encode("雋雌雍雎")].join(",") === "232,178,142,147,232,180,232,177"); // U+96CB
assert.throws(() => {ms932Encoder.encode("\u96CF")}, {name:"Error",message:"EncodingError U+96CF"});
assert.throws(() => {ms932Encoder.encode("\u96D0")}, {name:"Error",message:"EncodingError U+96D0"});
r = r && ([...ms932Encoder.encode("雑")].join(",") === "142,71"); // U+96D1
assert.throws(() => {ms932Encoder.encode("\u96D2")}, {name:"Error",message:"EncodingError U+96D2"});
assert.throws(() => {ms932Encoder.encode("\u96D3")}, {name:"Error",message:"EncodingError U+96D3"});
assert.throws(() => {ms932Encoder.encode("\u96D4")}, {name:"Error",message:"EncodingError U+96D4"});
r = r && ([...ms932Encoder.encode("雕雖")].join(",") === "232,184,229,171"); // U+96D5
assert.throws(() => {ms932Encoder.encode("\u96D7")}, {name:"Error",message:"EncodingError U+96D7"});
assert.throws(() => {ms932Encoder.encode("\u96D8")}, {name:"Error",message:"EncodingError U+96D8"});
r = r && ([...ms932Encoder.encode("雙")].join(",") === "153,212"); // U+96D9
assert.throws(() => {ms932Encoder.encode("\u96DA")}, {name:"Error",message:"EncodingError U+96DA"});
r = r && ([...ms932Encoder.encode("雛雜")].join(",") === "144,151,232,182"); // U+96DB
assert.throws(() => {ms932Encoder.encode("\u96DD")}, {name:"Error",message:"EncodingError U+96DD"});
assert.throws(() => {ms932Encoder.encode("\u96DE")}, {name:"Error",message:"EncodingError U+96DE"});
assert.throws(() => {ms932Encoder.encode("\u96DF")}, {name:"Error",message:"EncodingError U+96DF"});
assert.throws(() => {ms932Encoder.encode("\u96E0")}, {name:"Error",message:"EncodingError U+96E0"});
assert.throws(() => {ms932Encoder.encode("\u96E1")}, {name:"Error",message:"EncodingError U+96E1"});
r = r && ([...ms932Encoder.encode("離難")].join(",") === "151,163,147,239"); // U+96E2
assert.throws(() => {ms932Encoder.encode("\u96E4")}, {name:"Error",message:"EncodingError U+96E4"});
assert.throws(() => {ms932Encoder.encode("\u96E5")}, {name:"Error",message:"EncodingError U+96E5"});
assert.throws(() => {ms932Encoder.encode("\u96E6")}, {name:"Error",message:"EncodingError U+96E6"});
assert.throws(() => {ms932Encoder.encode("\u96E7")}, {name:"Error",message:"EncodingError U+96E7"});
r = r && ([...ms932Encoder.encode("雨")].join(",") === "137,74"); // U+96E8
assert.throws(() => {ms932Encoder.encode("\u96E9")}, {name:"Error",message:"EncodingError U+96E9"});
r = r && ([...ms932Encoder.encode("雪雫")].join(",") === "144,225,142,180"); // U+96EA
assert.throws(() => {ms932Encoder.encode("\u96EC")}, {name:"Error",message:"EncodingError U+96EC"});
assert.throws(() => {ms932Encoder.encode("\u96ED")}, {name:"Error",message:"EncodingError U+96ED"});
assert.throws(() => {ms932Encoder.encode("\u96EE")}, {name:"Error",message:"EncodingError U+96EE"});
assert.throws(() => {ms932Encoder.encode("\u96EF")}, {name:"Error",message:"EncodingError U+96EF"});
r = r && ([...ms932Encoder.encode("雰")].join(",") === "149,181"); // U+96F0
assert.throws(() => {ms932Encoder.encode("\u96F1")}, {name:"Error",message:"EncodingError U+96F1"});
r = r && ([...ms932Encoder.encode("雲")].join(",") === "137,95"); // U+96F2
assert.throws(() => {ms932Encoder.encode("\u96F3")}, {name:"Error",message:"EncodingError U+96F3"});
assert.throws(() => {ms932Encoder.encode("\u96F4")}, {name:"Error",message:"EncodingError U+96F4"});
assert.throws(() => {ms932Encoder.encode("\u96F5")}, {name:"Error",message:"EncodingError U+96F5"});
r = r && ([...ms932Encoder.encode("零雷")].join(",") === "151,235,151,139"); // U+96F6
assert.throws(() => {ms932Encoder.encode("\u96F8")}, {name:"Error",message:"EncodingError U+96F8"});
r = r && ([...ms932Encoder.encode("雹")].join(",") === "232,185"); // U+96F9
assert.throws(() => {ms932Encoder.encode("\u96FA")}, {name:"Error",message:"EncodingError U+96FA"});
r = r && ([...ms932Encoder.encode("電")].join(",") === "147,100"); // U+96FB
assert.throws(() => {ms932Encoder.encode("\u96FC")}, {name:"Error",message:"EncodingError U+96FC"});
assert.throws(() => {ms932Encoder.encode("\u96FD")}, {name:"Error",message:"EncodingError U+96FD"});
assert.throws(() => {ms932Encoder.encode("\u96FE")}, {name:"Error",message:"EncodingError U+96FE"});
assert.throws(() => {ms932Encoder.encode("\u96FF")}, {name:"Error",message:"EncodingError U+96FF"});
r = r && ([...ms932Encoder.encode("需")].join(",") === "142,249"); // U+9700
assert.throws(() => {ms932Encoder.encode("\u9701")}, {name:"Error",message:"EncodingError U+9701"});
assert.throws(() => {ms932Encoder.encode("\u9702")}, {name:"Error",message:"EncodingError U+9702"});
assert.throws(() => {ms932Encoder.encode("\u9703")}, {name:"Error",message:"EncodingError U+9703"});
r = r && ([...ms932Encoder.encode("霄")].join(",") === "232,186"); // U+9704
assert.throws(() => {ms932Encoder.encode("\u9705")}, {name:"Error",message:"EncodingError U+9705"});
r = r && ([...ms932Encoder.encode("霆震霈")].join(",") === "232,187,144,107,232,188"); // U+9706
assert.throws(() => {ms932Encoder.encode("\u9709")}, {name:"Error",message:"EncodingError U+9709"});
r = r && ([...ms932Encoder.encode("霊")].join(",") === "151,236"); // U+970A
assert.throws(() => {ms932Encoder.encode("\u970B")}, {name:"Error",message:"EncodingError U+970B"});
assert.throws(() => {ms932Encoder.encode("\u970C")}, {name:"Error",message:"EncodingError U+970C"});
r = r && ([...ms932Encoder.encode("霍霎霏")].join(",") === "232,183,232,190,232,192"); // U+970D
assert.throws(() => {ms932Encoder.encode("\u9710")}, {name:"Error",message:"EncodingError U+9710"});
r = r && ([...ms932Encoder.encode("霑")].join(",") === "232,191"); // U+9711
assert.throws(() => {ms932Encoder.encode("\u9712")}, {name:"Error",message:"EncodingError U+9712"});
r = r && ([...ms932Encoder.encode("霓")].join(",") === "232,189"); // U+9713
assert.throws(() => {ms932Encoder.encode("\u9714")}, {name:"Error",message:"EncodingError U+9714"});
assert.throws(() => {ms932Encoder.encode("\u9715")}, {name:"Error",message:"EncodingError U+9715"});
r = r && ([...ms932Encoder.encode("霖")].join(",") === "232,193"); // U+9716
assert.throws(() => {ms932Encoder.encode("\u9717")}, {name:"Error",message:"EncodingError U+9717"});
assert.throws(() => {ms932Encoder.encode("\u9718")}, {name:"Error",message:"EncodingError U+9718"});
r = r && ([...ms932Encoder.encode("霙")].join(",") === "232,194"); // U+9719
assert.throws(() => {ms932Encoder.encode("\u971A")}, {name:"Error",message:"EncodingError U+971A"});
assert.throws(() => {ms932Encoder.encode("\u971B")}, {name:"Error",message:"EncodingError U+971B"});
r = r && ([...ms932Encoder.encode("霜")].join(",") === "145,154"); // U+971C
assert.throws(() => {ms932Encoder.encode("\u971D")}, {name:"Error",message:"EncodingError U+971D"});
r = r && ([...ms932Encoder.encode("霞")].join(",") === "137,224"); // U+971E
assert.throws(() => {ms932Encoder.encode("\u971F")}, {name:"Error",message:"EncodingError U+971F"});
assert.throws(() => {ms932Encoder.encode("\u9720")}, {name:"Error",message:"EncodingError U+9720"});
assert.throws(() => {ms932Encoder.encode("\u9721")}, {name:"Error",message:"EncodingError U+9721"});
assert.throws(() => {ms932Encoder.encode("\u9722")}, {name:"Error",message:"EncodingError U+9722"});
assert.throws(() => {ms932Encoder.encode("\u9723")}, {name:"Error",message:"EncodingError U+9723"});
r = r && ([...ms932Encoder.encode("霤")].join(",") === "232,195"); // U+9724
assert.throws(() => {ms932Encoder.encode("\u9725")}, {name:"Error",message:"EncodingError U+9725"});
assert.throws(() => {ms932Encoder.encode("\u9726")}, {name:"Error",message:"EncodingError U+9726"});
r = r && ([...ms932Encoder.encode("霧")].join(",") === "150,182"); // U+9727
assert.throws(() => {ms932Encoder.encode("\u9728")}, {name:"Error",message:"EncodingError U+9728"});
assert.throws(() => {ms932Encoder.encode("\u9729")}, {name:"Error",message:"EncodingError U+9729"});
r = r && ([...ms932Encoder.encode("霪")].join(",") === "232,196"); // U+972A
assert.throws(() => {ms932Encoder.encode("\u972B")}, {name:"Error",message:"EncodingError U+972B"});
assert.throws(() => {ms932Encoder.encode("\u972C")}, {name:"Error",message:"EncodingError U+972C"});
assert.throws(() => {ms932Encoder.encode("\u972D")}, {name:"Error",message:"EncodingError U+972D"});
assert.throws(() => {ms932Encoder.encode("\u972E")}, {name:"Error",message:"EncodingError U+972E"});
assert.throws(() => {ms932Encoder.encode("\u972F")}, {name:"Error",message:"EncodingError U+972F"});
r = r && ([...ms932Encoder.encode("霰")].join(",") === "232,197"); // U+9730
assert.throws(() => {ms932Encoder.encode("\u9731")}, {name:"Error",message:"EncodingError U+9731"});
r = r && ([...ms932Encoder.encode("露霳")].join(",") === "152,73,251,237"); // U+9732
assert.throws(() => {ms932Encoder.encode("\u9734")}, {name:"Error",message:"EncodingError U+9734"});
assert.throws(() => {ms932Encoder.encode("\u9735")}, {name:"Error",message:"EncodingError U+9735"});
assert.throws(() => {ms932Encoder.encode("\u9736")}, {name:"Error",message:"EncodingError U+9736"});
assert.throws(() => {ms932Encoder.encode("\u9737")}, {name:"Error",message:"EncodingError U+9737"});
r = r && ([...ms932Encoder.encode("霸霹")].join(",") === "158,80,232,198"); // U+9738
assert.throws(() => {ms932Encoder.encode("\u973A")}, {name:"Error",message:"EncodingError U+973A"});
r = r && ([...ms932Encoder.encode("霻")].join(",") === "251,238"); // U+973B
assert.throws(() => {ms932Encoder.encode("\u973C")}, {name:"Error",message:"EncodingError U+973C"});
r = r && ([...ms932Encoder.encode("霽霾")].join(",") === "232,199,232,200"); // U+973D
assert.throws(() => {ms932Encoder.encode("\u973F")}, {name:"Error",message:"EncodingError U+973F"});
assert.throws(() => {ms932Encoder.encode("\u9740")}, {name:"Error",message:"EncodingError U+9740"});
assert.throws(() => {ms932Encoder.encode("\u9741")}, {name:"Error",message:"EncodingError U+9741"});
r = r && ([...ms932Encoder.encode("靂靃靄")].join(",") === "232,204,251,239,232,201"); // U+9742
assert.throws(() => {ms932Encoder.encode("\u9745")}, {name:"Error",message:"EncodingError U+9745"});
r = r && ([...ms932Encoder.encode("靆")].join(",") === "232,202"); // U+9746
assert.throws(() => {ms932Encoder.encode("\u9747")}, {name:"Error",message:"EncodingError U+9747"});
r = r && ([...ms932Encoder.encode("靈靉")].join(",") === "232,203,232,205"); // U+9748
assert.throws(() => {ms932Encoder.encode("\u974A")}, {name:"Error",message:"EncodingError U+974A"});
assert.throws(() => {ms932Encoder.encode("\u974B")}, {name:"Error",message:"EncodingError U+974B"});
assert.throws(() => {ms932Encoder.encode("\u974C")}, {name:"Error",message:"EncodingError U+974C"});
r = r && ([...ms932Encoder.encode("靍")].join(",") === "251,240"); // U+974D
assert.throws(() => {ms932Encoder.encode("\u974E")}, {name:"Error",message:"EncodingError U+974E"});
r = r && ([...ms932Encoder.encode("靏")].join(",") === "251,241"); // U+974F
assert.throws(() => {ms932Encoder.encode("\u9750")}, {name:"Error",message:"EncodingError U+9750"});
r = r && ([...ms932Encoder.encode("靑青")].join(",") === "251,242,144,194"); // U+9751
assert.throws(() => {ms932Encoder.encode("\u9753")}, {name:"Error",message:"EncodingError U+9753"});
assert.throws(() => {ms932Encoder.encode("\u9754")}, {name:"Error",message:"EncodingError U+9754"});
r = r && ([...ms932Encoder.encode("靕靖")].join(",") === "251,243,150,245"); // U+9755
assert.throws(() => {ms932Encoder.encode("\u9757")}, {name:"Error",message:"EncodingError U+9757"});
assert.throws(() => {ms932Encoder.encode("\u9758")}, {name:"Error",message:"EncodingError U+9758"});
r = r && ([...ms932Encoder.encode("静")].join(",") === "144,195"); // U+9759
assert.throws(() => {ms932Encoder.encode("\u975A")}, {name:"Error",message:"EncodingError U+975A"});
assert.throws(() => {ms932Encoder.encode("\u975B")}, {name:"Error",message:"EncodingError U+975B"});
r = r && ([...ms932Encoder.encode("靜")].join(",") === "232,206"); // U+975C
assert.throws(() => {ms932Encoder.encode("\u975D")}, {name:"Error",message:"EncodingError U+975D"});
r = r && ([...ms932Encoder.encode("非")].join(",") === "148,241"); // U+975E
assert.throws(() => {ms932Encoder.encode("\u975F")}, {name:"Error",message:"EncodingError U+975F"});
r = r && ([...ms932Encoder.encode("靠靡面")].join(",") === "232,207,234,114,150,202"); // U+9760
assert.throws(() => {ms932Encoder.encode("\u9763")}, {name:"Error",message:"EncodingError U+9763"});
r = r && ([...ms932Encoder.encode("靤")].join(",") === "232,208"); // U+9764
assert.throws(() => {ms932Encoder.encode("\u9765")}, {name:"Error",message:"EncodingError U+9765"});
r = r && ([...ms932Encoder.encode("靦")].join(",") === "232,209"); // U+9766
assert.throws(() => {ms932Encoder.encode("\u9767")}, {name:"Error",message:"EncodingError U+9767"});
r = r && ([...ms932Encoder.encode("靨革")].join(",") === "232,210,138,118"); // U+9768
assert.throws(() => {ms932Encoder.encode("\u976A")}, {name:"Error",message:"EncodingError U+976A"});
r = r && ([...ms932Encoder.encode("靫")].join(",") === "232,212"); // U+976B
assert.throws(() => {ms932Encoder.encode("\u976C")}, {name:"Error",message:"EncodingError U+976C"});
r = r && ([...ms932Encoder.encode("靭")].join(",") === "144,120"); // U+976D
assert.throws(() => {ms932Encoder.encode("\u976E")}, {name:"Error",message:"EncodingError U+976E"});
assert.throws(() => {ms932Encoder.encode("\u976F")}, {name:"Error",message:"EncodingError U+976F"});
assert.throws(() => {ms932Encoder.encode("\u9770")}, {name:"Error",message:"EncodingError U+9770"});
r = r && ([...ms932Encoder.encode("靱")].join(",") === "232,213"); // U+9771
assert.throws(() => {ms932Encoder.encode("\u9772")}, {name:"Error",message:"EncodingError U+9772"});
assert.throws(() => {ms932Encoder.encode("\u9773")}, {name:"Error",message:"EncodingError U+9773"});
r = r && ([...ms932Encoder.encode("靴")].join(",") === "140,67"); // U+9774
assert.throws(() => {ms932Encoder.encode("\u9775")}, {name:"Error",message:"EncodingError U+9775"});
assert.throws(() => {ms932Encoder.encode("\u9776")}, {name:"Error",message:"EncodingError U+9776"});
assert.throws(() => {ms932Encoder.encode("\u9777")}, {name:"Error",message:"EncodingError U+9777"});
assert.throws(() => {ms932Encoder.encode("\u9778")}, {name:"Error",message:"EncodingError U+9778"});
r = r && ([...ms932Encoder.encode("靹靺")].join(",") === "232,214,232,218"); // U+9779
assert.throws(() => {ms932Encoder.encode("\u977B")}, {name:"Error",message:"EncodingError U+977B"});
r = r && ([...ms932Encoder.encode("靼")].join(",") === "232,216"); // U+977C
assert.throws(() => {ms932Encoder.encode("\u977D")}, {name:"Error",message:"EncodingError U+977D"});
assert.throws(() => {ms932Encoder.encode("\u977E")}, {name:"Error",message:"EncodingError U+977E"});
assert.throws(() => {ms932Encoder.encode("\u977F")}, {name:"Error",message:"EncodingError U+977F"});
assert.throws(() => {ms932Encoder.encode("\u9780")}, {name:"Error",message:"EncodingError U+9780"});
r = r && ([...ms932Encoder.encode("鞁")].join(",") === "232,217"); // U+9781
assert.throws(() => {ms932Encoder.encode("\u9782")}, {name:"Error",message:"EncodingError U+9782"});
assert.throws(() => {ms932Encoder.encode("\u9783")}, {name:"Error",message:"EncodingError U+9783"});
r = r && ([...ms932Encoder.encode("鞄鞅鞆")].join(",") === "138,147,232,215,232,219"); // U+9784
assert.throws(() => {ms932Encoder.encode("\u9787")}, {name:"Error",message:"EncodingError U+9787"});
assert.throws(() => {ms932Encoder.encode("\u9788")}, {name:"Error",message:"EncodingError U+9788"});
assert.throws(() => {ms932Encoder.encode("\u9789")}, {name:"Error",message:"EncodingError U+9789"});
assert.throws(() => {ms932Encoder.encode("\u978A")}, {name:"Error",message:"EncodingError U+978A"});
r = r && ([...ms932Encoder.encode("鞋")].join(",") === "232,220"); // U+978B
assert.throws(() => {ms932Encoder.encode("\u978C")}, {name:"Error",message:"EncodingError U+978C"});
r = r && ([...ms932Encoder.encode("鞍")].join(",") === "136,198"); // U+978D
assert.throws(() => {ms932Encoder.encode("\u978E")}, {name:"Error",message:"EncodingError U+978E"});
r = r && ([...ms932Encoder.encode("鞏鞐")].join(",") === "232,221,232,222"); // U+978F
assert.throws(() => {ms932Encoder.encode("\u9791")}, {name:"Error",message:"EncodingError U+9791"});
assert.throws(() => {ms932Encoder.encode("\u9792")}, {name:"Error",message:"EncodingError U+9792"});
assert.throws(() => {ms932Encoder.encode("\u9793")}, {name:"Error",message:"EncodingError U+9793"});
assert.throws(() => {ms932Encoder.encode("\u9794")}, {name:"Error",message:"EncodingError U+9794"});
assert.throws(() => {ms932Encoder.encode("\u9795")}, {name:"Error",message:"EncodingError U+9795"});
assert.throws(() => {ms932Encoder.encode("\u9796")}, {name:"Error",message:"EncodingError U+9796"});
assert.throws(() => {ms932Encoder.encode("\u9797")}, {name:"Error",message:"EncodingError U+9797"});
r = r && ([...ms932Encoder.encode("鞘")].join(",") === "143,226"); // U+9798
assert.throws(() => {ms932Encoder.encode("\u9799")}, {name:"Error",message:"EncodingError U+9799"});
assert.throws(() => {ms932Encoder.encode("\u979A")}, {name:"Error",message:"EncodingError U+979A"});
assert.throws(() => {ms932Encoder.encode("\u979B")}, {name:"Error",message:"EncodingError U+979B"});
r = r && ([...ms932Encoder.encode("鞜")].join(",") === "232,223"); // U+979C
assert.throws(() => {ms932Encoder.encode("\u979D")}, {name:"Error",message:"EncodingError U+979D"});
assert.throws(() => {ms932Encoder.encode("\u979E")}, {name:"Error",message:"EncodingError U+979E"});
assert.throws(() => {ms932Encoder.encode("\u979F")}, {name:"Error",message:"EncodingError U+979F"});
r = r && ([...ms932Encoder.encode("鞠")].join(",") === "139,102"); // U+97A0
assert.throws(() => {ms932Encoder.encode("\u97A1")}, {name:"Error",message:"EncodingError U+97A1"});
assert.throws(() => {ms932Encoder.encode("\u97A2")}, {name:"Error",message:"EncodingError U+97A2"});
r = r && ([...ms932Encoder.encode("鞣")].join(",") === "232,226"); // U+97A3
assert.throws(() => {ms932Encoder.encode("\u97A4")}, {name:"Error",message:"EncodingError U+97A4"});
assert.throws(() => {ms932Encoder.encode("\u97A5")}, {name:"Error",message:"EncodingError U+97A5"});
r = r && ([...ms932Encoder.encode("鞦")].join(",") === "232,225"); // U+97A6
assert.throws(() => {ms932Encoder.encode("\u97A7")}, {name:"Error",message:"EncodingError U+97A7"});
r = r && ([...ms932Encoder.encode("鞨")].join(",") === "232,224"); // U+97A8
assert.throws(() => {ms932Encoder.encode("\u97A9")}, {name:"Error",message:"EncodingError U+97A9"});
assert.throws(() => {ms932Encoder.encode("\u97AA")}, {name:"Error",message:"EncodingError U+97AA"});
r = r && ([...ms932Encoder.encode("鞫")].join(",") === "230,145"); // U+97AB
assert.throws(() => {ms932Encoder.encode("\u97AC")}, {name:"Error",message:"EncodingError U+97AC"});
r = r && ([...ms932Encoder.encode("鞭")].join(",") === "149,218"); // U+97AD
assert.throws(() => {ms932Encoder.encode("\u97AE")}, {name:"Error",message:"EncodingError U+97AE"});
assert.throws(() => {ms932Encoder.encode("\u97AF")}, {name:"Error",message:"EncodingError U+97AF"});
assert.throws(() => {ms932Encoder.encode("\u97B0")}, {name:"Error",message:"EncodingError U+97B0"});
assert.throws(() => {ms932Encoder.encode("\u97B1")}, {name:"Error",message:"EncodingError U+97B1"});
assert.throws(() => {ms932Encoder.encode("\u97B2")}, {name:"Error",message:"EncodingError U+97B2"});
r = r && ([...ms932Encoder.encode("鞳鞴")].join(",") === "232,227,232,228"); // U+97B3
assert.throws(() => {ms932Encoder.encode("\u97B5")}, {name:"Error",message:"EncodingError U+97B5"});
assert.throws(() => {ms932Encoder.encode("\u97B6")}, {name:"Error",message:"EncodingError U+97B6"});
assert.throws(() => {ms932Encoder.encode("\u97B7")}, {name:"Error",message:"EncodingError U+97B7"});
assert.throws(() => {ms932Encoder.encode("\u97B8")}, {name:"Error",message:"EncodingError U+97B8"});
assert.throws(() => {ms932Encoder.encode("\u97B9")}, {name:"Error",message:"EncodingError U+97B9"});
assert.throws(() => {ms932Encoder.encode("\u97BA")}, {name:"Error",message:"EncodingError U+97BA"});
assert.throws(() => {ms932Encoder.encode("\u97BB")}, {name:"Error",message:"EncodingError U+97BB"});
assert.throws(() => {ms932Encoder.encode("\u97BC")}, {name:"Error",message:"EncodingError U+97BC"});
assert.throws(() => {ms932Encoder.encode("\u97BD")}, {name:"Error",message:"EncodingError U+97BD"});
assert.throws(() => {ms932Encoder.encode("\u97BE")}, {name:"Error",message:"EncodingError U+97BE"});
assert.throws(() => {ms932Encoder.encode("\u97BF")}, {name:"Error",message:"EncodingError U+97BF"});
assert.throws(() => {ms932Encoder.encode("\u97C0")}, {name:"Error",message:"EncodingError U+97C0"});
assert.throws(() => {ms932Encoder.encode("\u97C1")}, {name:"Error",message:"EncodingError U+97C1"});
assert.throws(() => {ms932Encoder.encode("\u97C2")}, {name:"Error",message:"EncodingError U+97C2"});
r = r && ([...ms932Encoder.encode("韃")].join(",") === "232,229"); // U+97C3
assert.throws(() => {ms932Encoder.encode("\u97C4")}, {name:"Error",message:"EncodingError U+97C4"});
assert.throws(() => {ms932Encoder.encode("\u97C5")}, {name:"Error",message:"EncodingError U+97C5"});
r = r && ([...ms932Encoder.encode("韆")].join(",") === "232,230"); // U+97C6
assert.throws(() => {ms932Encoder.encode("\u97C7")}, {name:"Error",message:"EncodingError U+97C7"});
r = r && ([...ms932Encoder.encode("韈")].join(",") === "232,231"); // U+97C8
assert.throws(() => {ms932Encoder.encode("\u97C9")}, {name:"Error",message:"EncodingError U+97C9"});
assert.throws(() => {ms932Encoder.encode("\u97CA")}, {name:"Error",message:"EncodingError U+97CA"});
r = r && ([...ms932Encoder.encode("韋")].join(",") === "232,232"); // U+97CB
assert.throws(() => {ms932Encoder.encode("\u97CC")}, {name:"Error",message:"EncodingError U+97CC"});
assert.throws(() => {ms932Encoder.encode("\u97CD")}, {name:"Error",message:"EncodingError U+97CD"});
assert.throws(() => {ms932Encoder.encode("\u97CE")}, {name:"Error",message:"EncodingError U+97CE"});
assert.throws(() => {ms932Encoder.encode("\u97CF")}, {name:"Error",message:"EncodingError U+97CF"});
assert.throws(() => {ms932Encoder.encode("\u97D0")}, {name:"Error",message:"EncodingError U+97D0"});
assert.throws(() => {ms932Encoder.encode("\u97D1")}, {name:"Error",message:"EncodingError U+97D1"});
assert.throws(() => {ms932Encoder.encode("\u97D2")}, {name:"Error",message:"EncodingError U+97D2"});
r = r && ([...ms932Encoder.encode("韓")].join(",") === "138,216"); // U+97D3
assert.throws(() => {ms932Encoder.encode("\u97D4")}, {name:"Error",message:"EncodingError U+97D4"});
assert.throws(() => {ms932Encoder.encode("\u97D5")}, {name:"Error",message:"EncodingError U+97D5"});
assert.throws(() => {ms932Encoder.encode("\u97D6")}, {name:"Error",message:"EncodingError U+97D6"});
assert.throws(() => {ms932Encoder.encode("\u97D7")}, {name:"Error",message:"EncodingError U+97D7"});
assert.throws(() => {ms932Encoder.encode("\u97D8")}, {name:"Error",message:"EncodingError U+97D8"});
assert.throws(() => {ms932Encoder.encode("\u97D9")}, {name:"Error",message:"EncodingError U+97D9"});
assert.throws(() => {ms932Encoder.encode("\u97DA")}, {name:"Error",message:"EncodingError U+97DA"});
assert.throws(() => {ms932Encoder.encode("\u97DB")}, {name:"Error",message:"EncodingError U+97DB"});
r = r && ([...ms932Encoder.encode("韜")].join(",") === "232,233"); // U+97DC
assert.throws(() => {ms932Encoder.encode("\u97DD")}, {name:"Error",message:"EncodingError U+97DD"});
assert.throws(() => {ms932Encoder.encode("\u97DE")}, {name:"Error",message:"EncodingError U+97DE"});
assert.throws(() => {ms932Encoder.encode("\u97DF")}, {name:"Error",message:"EncodingError U+97DF"});
assert.throws(() => {ms932Encoder.encode("\u97E0")}, {name:"Error",message:"EncodingError U+97E0"});
assert.throws(() => {ms932Encoder.encode("\u97E1")}, {name:"Error",message:"EncodingError U+97E1"});
assert.throws(() => {ms932Encoder.encode("\u97E2")}, {name:"Error",message:"EncodingError U+97E2"});
assert.throws(() => {ms932Encoder.encode("\u97E3")}, {name:"Error",message:"EncodingError U+97E3"});
assert.throws(() => {ms932Encoder.encode("\u97E4")}, {name:"Error",message:"EncodingError U+97E4"});
assert.throws(() => {ms932Encoder.encode("\u97E5")}, {name:"Error",message:"EncodingError U+97E5"});
assert.throws(() => {ms932Encoder.encode("\u97E6")}, {name:"Error",message:"EncodingError U+97E6"});
assert.throws(() => {ms932Encoder.encode("\u97E7")}, {name:"Error",message:"EncodingError U+97E7"});
assert.throws(() => {ms932Encoder.encode("\u97E8")}, {name:"Error",message:"EncodingError U+97E8"});
assert.throws(() => {ms932Encoder.encode("\u97E9")}, {name:"Error",message:"EncodingError U+97E9"});
assert.throws(() => {ms932Encoder.encode("\u97EA")}, {name:"Error",message:"EncodingError U+97EA"});
assert.throws(() => {ms932Encoder.encode("\u97EB")}, {name:"Error",message:"EncodingError U+97EB"});
assert.throws(() => {ms932Encoder.encode("\u97EC")}, {name:"Error",message:"EncodingError U+97EC"});
r = r && ([...ms932Encoder.encode("韭韮")].join(",") === "232,234,148,66"); // U+97ED
assert.throws(() => {ms932Encoder.encode("\u97EF")}, {name:"Error",message:"EncodingError U+97EF"});
assert.throws(() => {ms932Encoder.encode("\u97F0")}, {name:"Error",message:"EncodingError U+97F0"});
assert.throws(() => {ms932Encoder.encode("\u97F1")}, {name:"Error",message:"EncodingError U+97F1"});
r = r && ([...ms932Encoder.encode("韲音")].join(",") === "232,236,137,185"); // U+97F2
assert.throws(() => {ms932Encoder.encode("\u97F4")}, {name:"Error",message:"EncodingError U+97F4"});
r = r && ([...ms932Encoder.encode("韵韶")].join(",") === "232,239,232,238"); // U+97F5
assert.throws(() => {ms932Encoder.encode("\u97F7")}, {name:"Error",message:"EncodingError U+97F7"});
assert.throws(() => {ms932Encoder.encode("\u97F8")}, {name:"Error",message:"EncodingError U+97F8"});
assert.throws(() => {ms932Encoder.encode("\u97F9")}, {name:"Error",message:"EncodingError U+97F9"});
assert.throws(() => {ms932Encoder.encode("\u97FA")}, {name:"Error",message:"EncodingError U+97FA"});
r = r && ([...ms932Encoder.encode("韻")].join(",") === "137,67"); // U+97FB
assert.throws(() => {ms932Encoder.encode("\u97FC")}, {name:"Error",message:"EncodingError U+97FC"});
assert.throws(() => {ms932Encoder.encode("\u97FD")}, {name:"Error",message:"EncodingError U+97FD"});
assert.throws(() => {ms932Encoder.encode("\u97FE")}, {name:"Error",message:"EncodingError U+97FE"});
r = r && ([...ms932Encoder.encode("響")].join(",") === "139,191"); // U+97FF

assert.strictEqual(r, true);

  });

});
