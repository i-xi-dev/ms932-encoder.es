import assert from "node:assert";
import { Ms932Encoder } from "../../node/index.mjs";

describe("Ms932Encoder.prototype.encode 9", () => {

  it("encode(string) - U+8400-U+87FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u8400")}, {name:"Error",message:"EncodingError U+8400"});
assert.throws(() => {ms932Encoder.encode("\u8401")}, {name:"Error",message:"EncodingError U+8401"});
assert.throws(() => {ms932Encoder.encode("\u8402")}, {name:"Error",message:"EncodingError U+8402"});
r = r && ([...ms932Encoder.encode("萃萄")].join(",") === "228,194,147,184"); // U+8403
assert.throws(() => {ms932Encoder.encode("\u8405")}, {name:"Error",message:"EncodingError U+8405"});
assert.throws(() => {ms932Encoder.encode("\u8406")}, {name:"Error",message:"EncodingError U+8406"});
r = r && ([...ms932Encoder.encode("萇")].join(",") === "228,199"); // U+8407
assert.throws(() => {ms932Encoder.encode("\u8408")}, {name:"Error",message:"EncodingError U+8408"});
assert.throws(() => {ms932Encoder.encode("\u8409")}, {name:"Error",message:"EncodingError U+8409"});
assert.throws(() => {ms932Encoder.encode("\u840A")}, {name:"Error",message:"EncodingError U+840A"});
r = r && ([...ms932Encoder.encode("萋萌萍萎")].join(",") === "228,196,150,71,228,202,136,222"); // U+840B
assert.throws(() => {ms932Encoder.encode("\u840F")}, {name:"Error",message:"EncodingError U+840F"});
assert.throws(() => {ms932Encoder.encode("\u8410")}, {name:"Error",message:"EncodingError U+8410"});
assert.throws(() => {ms932Encoder.encode("\u8411")}, {name:"Error",message:"EncodingError U+8411"});
assert.throws(() => {ms932Encoder.encode("\u8412")}, {name:"Error",message:"EncodingError U+8412"});
r = r && ([...ms932Encoder.encode("萓")].join(",") === "228,190"); // U+8413
assert.throws(() => {ms932Encoder.encode("\u8414")}, {name:"Error",message:"EncodingError U+8414"});
assert.throws(() => {ms932Encoder.encode("\u8415")}, {name:"Error",message:"EncodingError U+8415"});
assert.throws(() => {ms932Encoder.encode("\u8416")}, {name:"Error",message:"EncodingError U+8416"});
assert.throws(() => {ms932Encoder.encode("\u8417")}, {name:"Error",message:"EncodingError U+8417"});
assert.throws(() => {ms932Encoder.encode("\u8418")}, {name:"Error",message:"EncodingError U+8418"});
assert.throws(() => {ms932Encoder.encode("\u8419")}, {name:"Error",message:"EncodingError U+8419"});
assert.throws(() => {ms932Encoder.encode("\u841A")}, {name:"Error",message:"EncodingError U+841A"});
assert.throws(() => {ms932Encoder.encode("\u841B")}, {name:"Error",message:"EncodingError U+841B"});
assert.throws(() => {ms932Encoder.encode("\u841C")}, {name:"Error",message:"EncodingError U+841C"});
assert.throws(() => {ms932Encoder.encode("\u841D")}, {name:"Error",message:"EncodingError U+841D"});
assert.throws(() => {ms932Encoder.encode("\u841E")}, {name:"Error",message:"EncodingError U+841E"});
assert.throws(() => {ms932Encoder.encode("\u841F")}, {name:"Error",message:"EncodingError U+841F"});
r = r && ([...ms932Encoder.encode("萠")].join(",") === "228,204"); // U+8420
assert.throws(() => {ms932Encoder.encode("\u8421")}, {name:"Error",message:"EncodingError U+8421"});
r = r && ([...ms932Encoder.encode("萢")].join(",") === "228,203"); // U+8422
assert.throws(() => {ms932Encoder.encode("\u8423")}, {name:"Error",message:"EncodingError U+8423"});
assert.throws(() => {ms932Encoder.encode("\u8424")}, {name:"Error",message:"EncodingError U+8424"});
assert.throws(() => {ms932Encoder.encode("\u8425")}, {name:"Error",message:"EncodingError U+8425"});
assert.throws(() => {ms932Encoder.encode("\u8426")}, {name:"Error",message:"EncodingError U+8426"});
assert.throws(() => {ms932Encoder.encode("\u8427")}, {name:"Error",message:"EncodingError U+8427"});
assert.throws(() => {ms932Encoder.encode("\u8428")}, {name:"Error",message:"EncodingError U+8428"});
r = r && ([...ms932Encoder.encode("萩萪")].join(",") === "148,139,228,210"); // U+8429
assert.throws(() => {ms932Encoder.encode("\u842B")}, {name:"Error",message:"EncodingError U+842B"});
r = r && ([...ms932Encoder.encode("萬")].join(",") === "228,221"); // U+842C
assert.throws(() => {ms932Encoder.encode("\u842D")}, {name:"Error",message:"EncodingError U+842D"});
assert.throws(() => {ms932Encoder.encode("\u842E")}, {name:"Error",message:"EncodingError U+842E"});
assert.throws(() => {ms932Encoder.encode("\u842F")}, {name:"Error",message:"EncodingError U+842F"});
assert.throws(() => {ms932Encoder.encode("\u8430")}, {name:"Error",message:"EncodingError U+8430"});
r = r && ([...ms932Encoder.encode("萱")].join(",") === "138,158"); // U+8431
assert.throws(() => {ms932Encoder.encode("\u8432")}, {name:"Error",message:"EncodingError U+8432"});
assert.throws(() => {ms932Encoder.encode("\u8433")}, {name:"Error",message:"EncodingError U+8433"});
assert.throws(() => {ms932Encoder.encode("\u8434")}, {name:"Error",message:"EncodingError U+8434"});
r = r && ([...ms932Encoder.encode("萵")].join(",") === "228,224"); // U+8435
assert.throws(() => {ms932Encoder.encode("\u8436")}, {name:"Error",message:"EncodingError U+8436"});
assert.throws(() => {ms932Encoder.encode("\u8437")}, {name:"Error",message:"EncodingError U+8437"});
r = r && ([...ms932Encoder.encode("萸")].join(",") === "228,206"); // U+8438
assert.throws(() => {ms932Encoder.encode("\u8439")}, {name:"Error",message:"EncodingError U+8439"});
assert.throws(() => {ms932Encoder.encode("\u843A")}, {name:"Error",message:"EncodingError U+843A"});
assert.throws(() => {ms932Encoder.encode("\u843B")}, {name:"Error",message:"EncodingError U+843B"});
r = r && ([...ms932Encoder.encode("萼落")].join(",") === "228,211,151,142"); // U+843C
assert.throws(() => {ms932Encoder.encode("\u843E")}, {name:"Error",message:"EncodingError U+843E"});
assert.throws(() => {ms932Encoder.encode("\u843F")}, {name:"Error",message:"EncodingError U+843F"});
assert.throws(() => {ms932Encoder.encode("\u8440")}, {name:"Error",message:"EncodingError U+8440"});
assert.throws(() => {ms932Encoder.encode("\u8441")}, {name:"Error",message:"EncodingError U+8441"});
assert.throws(() => {ms932Encoder.encode("\u8442")}, {name:"Error",message:"EncodingError U+8442"});
assert.throws(() => {ms932Encoder.encode("\u8443")}, {name:"Error",message:"EncodingError U+8443"});
assert.throws(() => {ms932Encoder.encode("\u8444")}, {name:"Error",message:"EncodingError U+8444"});
assert.throws(() => {ms932Encoder.encode("\u8445")}, {name:"Error",message:"EncodingError U+8445"});
r = r && ([...ms932Encoder.encode("葆")].join(",") === "228,220"); // U+8446
assert.throws(() => {ms932Encoder.encode("\u8447")}, {name:"Error",message:"EncodingError U+8447"});
r = r && ([...ms932Encoder.encode("葈葉")].join(",") === "251,152,151,116"); // U+8448
assert.throws(() => {ms932Encoder.encode("\u844A")}, {name:"Error",message:"EncodingError U+844A"});
assert.throws(() => {ms932Encoder.encode("\u844B")}, {name:"Error",message:"EncodingError U+844B"});
assert.throws(() => {ms932Encoder.encode("\u844C")}, {name:"Error",message:"EncodingError U+844C"});
assert.throws(() => {ms932Encoder.encode("\u844D")}, {name:"Error",message:"EncodingError U+844D"});
r = r && ([...ms932Encoder.encode("葎")].join(",") === "151,168"); // U+844E
assert.throws(() => {ms932Encoder.encode("\u844F")}, {name:"Error",message:"EncodingError U+844F"});
assert.throws(() => {ms932Encoder.encode("\u8450")}, {name:"Error",message:"EncodingError U+8450"});
assert.throws(() => {ms932Encoder.encode("\u8451")}, {name:"Error",message:"EncodingError U+8451"});
assert.throws(() => {ms932Encoder.encode("\u8452")}, {name:"Error",message:"EncodingError U+8452"});
assert.throws(() => {ms932Encoder.encode("\u8453")}, {name:"Error",message:"EncodingError U+8453"});
assert.throws(() => {ms932Encoder.encode("\u8454")}, {name:"Error",message:"EncodingError U+8454"});
assert.throws(() => {ms932Encoder.encode("\u8455")}, {name:"Error",message:"EncodingError U+8455"});
assert.throws(() => {ms932Encoder.encode("\u8456")}, {name:"Error",message:"EncodingError U+8456"});
r = r && ([...ms932Encoder.encode("著")].join(",") === "146,152"); // U+8457
assert.throws(() => {ms932Encoder.encode("\u8458")}, {name:"Error",message:"EncodingError U+8458"});
assert.throws(() => {ms932Encoder.encode("\u8459")}, {name:"Error",message:"EncodingError U+8459"});
assert.throws(() => {ms932Encoder.encode("\u845A")}, {name:"Error",message:"EncodingError U+845A"});
r = r && ([...ms932Encoder.encode("葛")].join(",") === "138,139"); // U+845B
assert.throws(() => {ms932Encoder.encode("\u845C")}, {name:"Error",message:"EncodingError U+845C"});
assert.throws(() => {ms932Encoder.encode("\u845D")}, {name:"Error",message:"EncodingError U+845D"});
assert.throws(() => {ms932Encoder.encode("\u845E")}, {name:"Error",message:"EncodingError U+845E"});
assert.throws(() => {ms932Encoder.encode("\u845F")}, {name:"Error",message:"EncodingError U+845F"});
assert.throws(() => {ms932Encoder.encode("\u8460")}, {name:"Error",message:"EncodingError U+8460"});
r = r && ([...ms932Encoder.encode("葡葢董")].join(",") === "149,146,228,226,147,159"); // U+8461
assert.throws(() => {ms932Encoder.encode("\u8464")}, {name:"Error",message:"EncodingError U+8464"});
assert.throws(() => {ms932Encoder.encode("\u8465")}, {name:"Error",message:"EncodingError U+8465"});
r = r && ([...ms932Encoder.encode("葦")].join(",") === "136,175"); // U+8466
assert.throws(() => {ms932Encoder.encode("\u8467")}, {name:"Error",message:"EncodingError U+8467"});
assert.throws(() => {ms932Encoder.encode("\u8468")}, {name:"Error",message:"EncodingError U+8468"});
r = r && ([...ms932Encoder.encode("葩")].join(",") === "228,219"); // U+8469
assert.throws(() => {ms932Encoder.encode("\u846A")}, {name:"Error",message:"EncodingError U+846A"});
r = r && ([...ms932Encoder.encode("葫葬葭葮葯")].join(",") === "228,215,145,146,228,209,228,217,228,222"); // U+846B
assert.throws(() => {ms932Encoder.encode("\u8470")}, {name:"Error",message:"EncodingError U+8470"});
r = r && ([...ms932Encoder.encode("葱")].join(",") === "148,75"); // U+8471
assert.throws(() => {ms932Encoder.encode("\u8472")}, {name:"Error",message:"EncodingError U+8472"});
assert.throws(() => {ms932Encoder.encode("\u8473")}, {name:"Error",message:"EncodingError U+8473"});
assert.throws(() => {ms932Encoder.encode("\u8474")}, {name:"Error",message:"EncodingError U+8474"});
r = r && ([...ms932Encoder.encode("葵")].join(",") === "136,168"); // U+8475
assert.throws(() => {ms932Encoder.encode("\u8476")}, {name:"Error",message:"EncodingError U+8476"});
r = r && ([...ms932Encoder.encode("葷")].join(",") === "228,214"); // U+8477
assert.throws(() => {ms932Encoder.encode("\u8478")}, {name:"Error",message:"EncodingError U+8478"});
r = r && ([...ms932Encoder.encode("葹葺")].join(",") === "228,223,149,152"); // U+8479
assert.throws(() => {ms932Encoder.encode("\u847B")}, {name:"Error",message:"EncodingError U+847B"});
assert.throws(() => {ms932Encoder.encode("\u847C")}, {name:"Error",message:"EncodingError U+847C"});
assert.throws(() => {ms932Encoder.encode("\u847D")}, {name:"Error",message:"EncodingError U+847D"});
assert.throws(() => {ms932Encoder.encode("\u847E")}, {name:"Error",message:"EncodingError U+847E"});
assert.throws(() => {ms932Encoder.encode("\u847F")}, {name:"Error",message:"EncodingError U+847F"});
assert.throws(() => {ms932Encoder.encode("\u8480")}, {name:"Error",message:"EncodingError U+8480"});
assert.throws(() => {ms932Encoder.encode("\u8481")}, {name:"Error",message:"EncodingError U+8481"});
r = r && ([...ms932Encoder.encode("蒂")].join(",") === "228,218"); // U+8482
assert.throws(() => {ms932Encoder.encode("\u8483")}, {name:"Error",message:"EncodingError U+8483"});
r = r && ([...ms932Encoder.encode("蒄")].join(",") === "228,213"); // U+8484
assert.throws(() => {ms932Encoder.encode("\u8485")}, {name:"Error",message:"EncodingError U+8485"});
assert.throws(() => {ms932Encoder.encode("\u8486")}, {name:"Error",message:"EncodingError U+8486"});
assert.throws(() => {ms932Encoder.encode("\u8487")}, {name:"Error",message:"EncodingError U+8487"});
assert.throws(() => {ms932Encoder.encode("\u8488")}, {name:"Error",message:"EncodingError U+8488"});
assert.throws(() => {ms932Encoder.encode("\u8489")}, {name:"Error",message:"EncodingError U+8489"});
assert.throws(() => {ms932Encoder.encode("\u848A")}, {name:"Error",message:"EncodingError U+848A"});
r = r && ([...ms932Encoder.encode("蒋")].join(",") === "143,211"); // U+848B
assert.throws(() => {ms932Encoder.encode("\u848C")}, {name:"Error",message:"EncodingError U+848C"});
assert.throws(() => {ms932Encoder.encode("\u848D")}, {name:"Error",message:"EncodingError U+848D"});
assert.throws(() => {ms932Encoder.encode("\u848E")}, {name:"Error",message:"EncodingError U+848E"});
assert.throws(() => {ms932Encoder.encode("\u848F")}, {name:"Error",message:"EncodingError U+848F"});
r = r && ([...ms932Encoder.encode("蒐")].join(",") === "143,78"); // U+8490
assert.throws(() => {ms932Encoder.encode("\u8491")}, {name:"Error",message:"EncodingError U+8491"});
assert.throws(() => {ms932Encoder.encode("\u8492")}, {name:"Error",message:"EncodingError U+8492"});
assert.throws(() => {ms932Encoder.encode("\u8493")}, {name:"Error",message:"EncodingError U+8493"});
r = r && ([...ms932Encoder.encode("蒔")].join(",") === "142,170"); // U+8494
assert.throws(() => {ms932Encoder.encode("\u8495")}, {name:"Error",message:"EncodingError U+8495"});
assert.throws(() => {ms932Encoder.encode("\u8496")}, {name:"Error",message:"EncodingError U+8496"});
assert.throws(() => {ms932Encoder.encode("\u8497")}, {name:"Error",message:"EncodingError U+8497"});
assert.throws(() => {ms932Encoder.encode("\u8498")}, {name:"Error",message:"EncodingError U+8498"});
r = r && ([...ms932Encoder.encode("蒙")].join(",") === "150,214"); // U+8499
assert.throws(() => {ms932Encoder.encode("\u849A")}, {name:"Error",message:"EncodingError U+849A"});
assert.throws(() => {ms932Encoder.encode("\u849B")}, {name:"Error",message:"EncodingError U+849B"});
r = r && ([...ms932Encoder.encode("蒜")].join(",") === "149,102"); // U+849C
assert.throws(() => {ms932Encoder.encode("\u849D")}, {name:"Error",message:"EncodingError U+849D"});
assert.throws(() => {ms932Encoder.encode("\u849E")}, {name:"Error",message:"EncodingError U+849E"});
r = r && ([...ms932Encoder.encode("蒟")].join(",") === "228,229"); // U+849F
assert.throws(() => {ms932Encoder.encode("\u84A0")}, {name:"Error",message:"EncodingError U+84A0"});
r = r && ([...ms932Encoder.encode("蒡")].join(",") === "228,238"); // U+84A1
assert.throws(() => {ms932Encoder.encode("\u84A2")}, {name:"Error",message:"EncodingError U+84A2"});
assert.throws(() => {ms932Encoder.encode("\u84A3")}, {name:"Error",message:"EncodingError U+84A3"});
assert.throws(() => {ms932Encoder.encode("\u84A4")}, {name:"Error",message:"EncodingError U+84A4"});
assert.throws(() => {ms932Encoder.encode("\u84A5")}, {name:"Error",message:"EncodingError U+84A5"});
assert.throws(() => {ms932Encoder.encode("\u84A6")}, {name:"Error",message:"EncodingError U+84A6"});
assert.throws(() => {ms932Encoder.encode("\u84A7")}, {name:"Error",message:"EncodingError U+84A7"});
assert.throws(() => {ms932Encoder.encode("\u84A8")}, {name:"Error",message:"EncodingError U+84A8"});
assert.throws(() => {ms932Encoder.encode("\u84A9")}, {name:"Error",message:"EncodingError U+84A9"});
assert.throws(() => {ms932Encoder.encode("\u84AA")}, {name:"Error",message:"EncodingError U+84AA"});
assert.throws(() => {ms932Encoder.encode("\u84AB")}, {name:"Error",message:"EncodingError U+84AB"});
assert.throws(() => {ms932Encoder.encode("\u84AC")}, {name:"Error",message:"EncodingError U+84AC"});
r = r && ([...ms932Encoder.encode("蒭")].join(",") === "228,216"); // U+84AD
assert.throws(() => {ms932Encoder.encode("\u84AE")}, {name:"Error",message:"EncodingError U+84AE"});
assert.throws(() => {ms932Encoder.encode("\u84AF")}, {name:"Error",message:"EncodingError U+84AF"});
assert.throws(() => {ms932Encoder.encode("\u84B0")}, {name:"Error",message:"EncodingError U+84B0"});
assert.throws(() => {ms932Encoder.encode("\u84B1")}, {name:"Error",message:"EncodingError U+84B1"});
r = r && ([...ms932Encoder.encode("蒲")].join(",") === "138,151"); // U+84B2
assert.throws(() => {ms932Encoder.encode("\u84B3")}, {name:"Error",message:"EncodingError U+84B3"});
r = r && ([...ms932Encoder.encode("蒴")].join(",") === "251,153"); // U+84B4
assert.throws(() => {ms932Encoder.encode("\u84B5")}, {name:"Error",message:"EncodingError U+84B5"});
assert.throws(() => {ms932Encoder.encode("\u84B6")}, {name:"Error",message:"EncodingError U+84B6"});
assert.throws(() => {ms932Encoder.encode("\u84B7")}, {name:"Error",message:"EncodingError U+84B7"});
r = r && ([...ms932Encoder.encode("蒸蒹")].join(",") === "143,246,228,227"); // U+84B8
assert.throws(() => {ms932Encoder.encode("\u84BA")}, {name:"Error",message:"EncodingError U+84BA"});
r = r && ([...ms932Encoder.encode("蒻蒼")].join(",") === "228,232,145,147"); // U+84BB
assert.throws(() => {ms932Encoder.encode("\u84BD")}, {name:"Error",message:"EncodingError U+84BD"});
assert.throws(() => {ms932Encoder.encode("\u84BE")}, {name:"Error",message:"EncodingError U+84BE"});
r = r && ([...ms932Encoder.encode("蒿")].join(",") === "228,228"); // U+84BF
assert.throws(() => {ms932Encoder.encode("\u84C0")}, {name:"Error",message:"EncodingError U+84C0"});
r = r && ([...ms932Encoder.encode("蓁")].join(",") === "228,235"); // U+84C1
assert.throws(() => {ms932Encoder.encode("\u84C2")}, {name:"Error",message:"EncodingError U+84C2"});
assert.throws(() => {ms932Encoder.encode("\u84C3")}, {name:"Error",message:"EncodingError U+84C3"});
r = r && ([...ms932Encoder.encode("蓄")].join(",") === "146,126"); // U+84C4
assert.throws(() => {ms932Encoder.encode("\u84C5")}, {name:"Error",message:"EncodingError U+84C5"});
r = r && ([...ms932Encoder.encode("蓆")].join(",") === "228,236"); // U+84C6
assert.throws(() => {ms932Encoder.encode("\u84C7")}, {name:"Error",message:"EncodingError U+84C7"});
assert.throws(() => {ms932Encoder.encode("\u84C8")}, {name:"Error",message:"EncodingError U+84C8"});
r = r && ([...ms932Encoder.encode("蓉蓊蓋")].join(",") === "151,117,228,225,138,87"); // U+84C9
assert.throws(() => {ms932Encoder.encode("\u84CC")}, {name:"Error",message:"EncodingError U+84CC"});
r = r && ([...ms932Encoder.encode("蓍")].join(",") === "228,231"); // U+84CD
assert.throws(() => {ms932Encoder.encode("\u84CE")}, {name:"Error",message:"EncodingError U+84CE"});
assert.throws(() => {ms932Encoder.encode("\u84CF")}, {name:"Error",message:"EncodingError U+84CF"});
r = r && ([...ms932Encoder.encode("蓐蓑")].join(",") === "228,234,150,170"); // U+84D0
assert.throws(() => {ms932Encoder.encode("\u84D2")}, {name:"Error",message:"EncodingError U+84D2"});
assert.throws(() => {ms932Encoder.encode("\u84D3")}, {name:"Error",message:"EncodingError U+84D3"});
assert.throws(() => {ms932Encoder.encode("\u84D4")}, {name:"Error",message:"EncodingError U+84D4"});
assert.throws(() => {ms932Encoder.encode("\u84D5")}, {name:"Error",message:"EncodingError U+84D5"});
r = r && ([...ms932Encoder.encode("蓖")].join(",") === "228,237"); // U+84D6
assert.throws(() => {ms932Encoder.encode("\u84D7")}, {name:"Error",message:"EncodingError U+84D7"});
assert.throws(() => {ms932Encoder.encode("\u84D8")}, {name:"Error",message:"EncodingError U+84D8"});
r = r && ([...ms932Encoder.encode("蓙蓚")].join(",") === "228,230,228,233"); // U+84D9
assert.throws(() => {ms932Encoder.encode("\u84DB")}, {name:"Error",message:"EncodingError U+84DB"});
r = r && ([...ms932Encoder.encode("蓜")].join(",") === "250,96"); // U+84DC
assert.throws(() => {ms932Encoder.encode("\u84DD")}, {name:"Error",message:"EncodingError U+84DD"});
assert.throws(() => {ms932Encoder.encode("\u84DE")}, {name:"Error",message:"EncodingError U+84DE"});
assert.throws(() => {ms932Encoder.encode("\u84DF")}, {name:"Error",message:"EncodingError U+84DF"});
assert.throws(() => {ms932Encoder.encode("\u84E0")}, {name:"Error",message:"EncodingError U+84E0"});
assert.throws(() => {ms932Encoder.encode("\u84E1")}, {name:"Error",message:"EncodingError U+84E1"});
assert.throws(() => {ms932Encoder.encode("\u84E2")}, {name:"Error",message:"EncodingError U+84E2"});
assert.throws(() => {ms932Encoder.encode("\u84E3")}, {name:"Error",message:"EncodingError U+84E3"});
assert.throws(() => {ms932Encoder.encode("\u84E4")}, {name:"Error",message:"EncodingError U+84E4"});
assert.throws(() => {ms932Encoder.encode("\u84E5")}, {name:"Error",message:"EncodingError U+84E5"});
assert.throws(() => {ms932Encoder.encode("\u84E6")}, {name:"Error",message:"EncodingError U+84E6"});
assert.throws(() => {ms932Encoder.encode("\u84E7")}, {name:"Error",message:"EncodingError U+84E7"});
assert.throws(() => {ms932Encoder.encode("\u84E8")}, {name:"Error",message:"EncodingError U+84E8"});
assert.throws(() => {ms932Encoder.encode("\u84E9")}, {name:"Error",message:"EncodingError U+84E9"});
assert.throws(() => {ms932Encoder.encode("\u84EA")}, {name:"Error",message:"EncodingError U+84EA"});
assert.throws(() => {ms932Encoder.encode("\u84EB")}, {name:"Error",message:"EncodingError U+84EB"});
r = r && ([...ms932Encoder.encode("蓬")].join(",") === "150,72"); // U+84EC
assert.throws(() => {ms932Encoder.encode("\u84ED")}, {name:"Error",message:"EncodingError U+84ED"});
r = r && ([...ms932Encoder.encode("蓮")].join(",") === "152,64"); // U+84EE
assert.throws(() => {ms932Encoder.encode("\u84EF")}, {name:"Error",message:"EncodingError U+84EF"});
assert.throws(() => {ms932Encoder.encode("\u84F0")}, {name:"Error",message:"EncodingError U+84F0"});
assert.throws(() => {ms932Encoder.encode("\u84F1")}, {name:"Error",message:"EncodingError U+84F1"});
assert.throws(() => {ms932Encoder.encode("\u84F2")}, {name:"Error",message:"EncodingError U+84F2"});
assert.throws(() => {ms932Encoder.encode("\u84F3")}, {name:"Error",message:"EncodingError U+84F3"});
r = r && ([...ms932Encoder.encode("蓴")].join(",") === "228,241"); // U+84F4
assert.throws(() => {ms932Encoder.encode("\u84F5")}, {name:"Error",message:"EncodingError U+84F5"});
assert.throws(() => {ms932Encoder.encode("\u84F6")}, {name:"Error",message:"EncodingError U+84F6"});
assert.throws(() => {ms932Encoder.encode("\u84F7")}, {name:"Error",message:"EncodingError U+84F7"});
assert.throws(() => {ms932Encoder.encode("\u84F8")}, {name:"Error",message:"EncodingError U+84F8"});
assert.throws(() => {ms932Encoder.encode("\u84F9")}, {name:"Error",message:"EncodingError U+84F9"});
assert.throws(() => {ms932Encoder.encode("\u84FA")}, {name:"Error",message:"EncodingError U+84FA"});
assert.throws(() => {ms932Encoder.encode("\u84FB")}, {name:"Error",message:"EncodingError U+84FB"});
r = r && ([...ms932Encoder.encode("蓼")].join(",") === "228,248"); // U+84FC
assert.throws(() => {ms932Encoder.encode("\u84FD")}, {name:"Error",message:"EncodingError U+84FD"});
assert.throws(() => {ms932Encoder.encode("\u84FE")}, {name:"Error",message:"EncodingError U+84FE"});
r = r && ([...ms932Encoder.encode("蓿蔀")].join(",") === "228,240,142,193"); // U+84FF
assert.throws(() => {ms932Encoder.encode("\u8501")}, {name:"Error",message:"EncodingError U+8501"});
assert.throws(() => {ms932Encoder.encode("\u8502")}, {name:"Error",message:"EncodingError U+8502"});
assert.throws(() => {ms932Encoder.encode("\u8503")}, {name:"Error",message:"EncodingError U+8503"});
assert.throws(() => {ms932Encoder.encode("\u8504")}, {name:"Error",message:"EncodingError U+8504"});
assert.throws(() => {ms932Encoder.encode("\u8505")}, {name:"Error",message:"EncodingError U+8505"});
r = r && ([...ms932Encoder.encode("蔆")].join(",") === "228,207"); // U+8506
assert.throws(() => {ms932Encoder.encode("\u8507")}, {name:"Error",message:"EncodingError U+8507"});
assert.throws(() => {ms932Encoder.encode("\u8508")}, {name:"Error",message:"EncodingError U+8508"});
assert.throws(() => {ms932Encoder.encode("\u8509")}, {name:"Error",message:"EncodingError U+8509"});
assert.throws(() => {ms932Encoder.encode("\u850A")}, {name:"Error",message:"EncodingError U+850A"});
assert.throws(() => {ms932Encoder.encode("\u850B")}, {name:"Error",message:"EncodingError U+850B"});
assert.throws(() => {ms932Encoder.encode("\u850C")}, {name:"Error",message:"EncodingError U+850C"});
assert.throws(() => {ms932Encoder.encode("\u850D")}, {name:"Error",message:"EncodingError U+850D"});
assert.throws(() => {ms932Encoder.encode("\u850E")}, {name:"Error",message:"EncodingError U+850E"});
assert.throws(() => {ms932Encoder.encode("\u850F")}, {name:"Error",message:"EncodingError U+850F"});
assert.throws(() => {ms932Encoder.encode("\u8510")}, {name:"Error",message:"EncodingError U+8510"});
r = r && ([...ms932Encoder.encode("蔑")].join(",") === "149,204"); // U+8511
assert.throws(() => {ms932Encoder.encode("\u8512")}, {name:"Error",message:"EncodingError U+8512"});
r = r && ([...ms932Encoder.encode("蔓蔔蔕")].join(",") === "150,160,228,247,228,246"); // U+8513
assert.throws(() => {ms932Encoder.encode("\u8516")}, {name:"Error",message:"EncodingError U+8516"});
r = r && ([...ms932Encoder.encode("蔗蔘")].join(",") === "228,242,228,243"); // U+8517
assert.throws(() => {ms932Encoder.encode("\u8519")}, {name:"Error",message:"EncodingError U+8519"});
r = r && ([...ms932Encoder.encode("蔚")].join(",") === "137,85"); // U+851A
assert.throws(() => {ms932Encoder.encode("\u851B")}, {name:"Error",message:"EncodingError U+851B"});
assert.throws(() => {ms932Encoder.encode("\u851C")}, {name:"Error",message:"EncodingError U+851C"});
assert.throws(() => {ms932Encoder.encode("\u851D")}, {name:"Error",message:"EncodingError U+851D"});
assert.throws(() => {ms932Encoder.encode("\u851E")}, {name:"Error",message:"EncodingError U+851E"});
r = r && ([...ms932Encoder.encode("蔟")].join(",") === "228,245"); // U+851F
assert.throws(() => {ms932Encoder.encode("\u8520")}, {name:"Error",message:"EncodingError U+8520"});
r = r && ([...ms932Encoder.encode("蔡")].join(",") === "228,239"); // U+8521
assert.throws(() => {ms932Encoder.encode("\u8522")}, {name:"Error",message:"EncodingError U+8522"});
assert.throws(() => {ms932Encoder.encode("\u8523")}, {name:"Error",message:"EncodingError U+8523"});
assert.throws(() => {ms932Encoder.encode("\u8524")}, {name:"Error",message:"EncodingError U+8524"});
assert.throws(() => {ms932Encoder.encode("\u8525")}, {name:"Error",message:"EncodingError U+8525"});
r = r && ([...ms932Encoder.encode("蔦")].join(",") === "146,211"); // U+8526
assert.throws(() => {ms932Encoder.encode("\u8527")}, {name:"Error",message:"EncodingError U+8527"});
assert.throws(() => {ms932Encoder.encode("\u8528")}, {name:"Error",message:"EncodingError U+8528"});
assert.throws(() => {ms932Encoder.encode("\u8529")}, {name:"Error",message:"EncodingError U+8529"});
assert.throws(() => {ms932Encoder.encode("\u852A")}, {name:"Error",message:"EncodingError U+852A"});
assert.throws(() => {ms932Encoder.encode("\u852B")}, {name:"Error",message:"EncodingError U+852B"});
r = r && ([...ms932Encoder.encode("蔬蔭")].join(",") === "228,244,136,252"); // U+852C
assert.throws(() => {ms932Encoder.encode("\u852E")}, {name:"Error",message:"EncodingError U+852E"});
assert.throws(() => {ms932Encoder.encode("\u852F")}, {name:"Error",message:"EncodingError U+852F"});
assert.throws(() => {ms932Encoder.encode("\u8530")}, {name:"Error",message:"EncodingError U+8530"});
assert.throws(() => {ms932Encoder.encode("\u8531")}, {name:"Error",message:"EncodingError U+8531"});
assert.throws(() => {ms932Encoder.encode("\u8532")}, {name:"Error",message:"EncodingError U+8532"});
assert.throws(() => {ms932Encoder.encode("\u8533")}, {name:"Error",message:"EncodingError U+8533"});
assert.throws(() => {ms932Encoder.encode("\u8534")}, {name:"Error",message:"EncodingError U+8534"});
r = r && ([...ms932Encoder.encode("蔵")].join(",") === "145,160"); // U+8535
assert.throws(() => {ms932Encoder.encode("\u8536")}, {name:"Error",message:"EncodingError U+8536"});
assert.throws(() => {ms932Encoder.encode("\u8537")}, {name:"Error",message:"EncodingError U+8537"});
assert.throws(() => {ms932Encoder.encode("\u8538")}, {name:"Error",message:"EncodingError U+8538"});
assert.throws(() => {ms932Encoder.encode("\u8539")}, {name:"Error",message:"EncodingError U+8539"});
assert.throws(() => {ms932Encoder.encode("\u853A")}, {name:"Error",message:"EncodingError U+853A"});
assert.throws(() => {ms932Encoder.encode("\u853B")}, {name:"Error",message:"EncodingError U+853B"});
assert.throws(() => {ms932Encoder.encode("\u853C")}, {name:"Error",message:"EncodingError U+853C"});
r = r && ([...ms932Encoder.encode("蔽")].join(",") === "149,193"); // U+853D
assert.throws(() => {ms932Encoder.encode("\u853E")}, {name:"Error",message:"EncodingError U+853E"});
assert.throws(() => {ms932Encoder.encode("\u853F")}, {name:"Error",message:"EncodingError U+853F"});
r = r && ([...ms932Encoder.encode("蕀蕁")].join(",") === "228,249,229,64"); // U+8540
assert.throws(() => {ms932Encoder.encode("\u8542")}, {name:"Error",message:"EncodingError U+8542"});
r = r && ([...ms932Encoder.encode("蕃")].join(",") === "148,215"); // U+8543
assert.throws(() => {ms932Encoder.encode("\u8544")}, {name:"Error",message:"EncodingError U+8544"});
assert.throws(() => {ms932Encoder.encode("\u8545")}, {name:"Error",message:"EncodingError U+8545"});
assert.throws(() => {ms932Encoder.encode("\u8546")}, {name:"Error",message:"EncodingError U+8546"});
assert.throws(() => {ms932Encoder.encode("\u8547")}, {name:"Error",message:"EncodingError U+8547"});
r = r && ([...ms932Encoder.encode("蕈蕉蕊蕋")].join(",") === "228,252,143,212,142,199,229,66"); // U+8548
assert.throws(() => {ms932Encoder.encode("\u854C")}, {name:"Error",message:"EncodingError U+854C"});
assert.throws(() => {ms932Encoder.encode("\u854D")}, {name:"Error",message:"EncodingError U+854D"});
r = r && ([...ms932Encoder.encode("蕎")].join(",") === "139,188"); // U+854E
assert.throws(() => {ms932Encoder.encode("\u854F")}, {name:"Error",message:"EncodingError U+854F"});
assert.throws(() => {ms932Encoder.encode("\u8550")}, {name:"Error",message:"EncodingError U+8550"});
assert.throws(() => {ms932Encoder.encode("\u8551")}, {name:"Error",message:"EncodingError U+8551"});
assert.throws(() => {ms932Encoder.encode("\u8552")}, {name:"Error",message:"EncodingError U+8552"});
r = r && ([...ms932Encoder.encode("蕓")].join(",") === "251,154"); // U+8553
assert.throws(() => {ms932Encoder.encode("\u8554")}, {name:"Error",message:"EncodingError U+8554"});
r = r && ([...ms932Encoder.encode("蕕")].join(",") === "229,67"); // U+8555
assert.throws(() => {ms932Encoder.encode("\u8556")}, {name:"Error",message:"EncodingError U+8556"});
r = r && ([...ms932Encoder.encode("蕗蕘蕙蕚")].join(",") === "149,153,228,251,251,155,228,212"); // U+8557
assert.throws(() => {ms932Encoder.encode("\u855B")}, {name:"Error",message:"EncodingError U+855B"});
assert.throws(() => {ms932Encoder.encode("\u855C")}, {name:"Error",message:"EncodingError U+855C"});
assert.throws(() => {ms932Encoder.encode("\u855D")}, {name:"Error",message:"EncodingError U+855D"});
assert.throws(() => {ms932Encoder.encode("\u855E")}, {name:"Error",message:"EncodingError U+855E"});
assert.throws(() => {ms932Encoder.encode("\u855F")}, {name:"Error",message:"EncodingError U+855F"});
assert.throws(() => {ms932Encoder.encode("\u8560")}, {name:"Error",message:"EncodingError U+8560"});
assert.throws(() => {ms932Encoder.encode("\u8561")}, {name:"Error",message:"EncodingError U+8561"});
assert.throws(() => {ms932Encoder.encode("\u8562")}, {name:"Error",message:"EncodingError U+8562"});
r = r && ([...ms932Encoder.encode("蕣")].join(",") === "228,250"); // U+8563
assert.throws(() => {ms932Encoder.encode("\u8564")}, {name:"Error",message:"EncodingError U+8564"});
assert.throws(() => {ms932Encoder.encode("\u8565")}, {name:"Error",message:"EncodingError U+8565"});
assert.throws(() => {ms932Encoder.encode("\u8566")}, {name:"Error",message:"EncodingError U+8566"});
assert.throws(() => {ms932Encoder.encode("\u8567")}, {name:"Error",message:"EncodingError U+8567"});
r = r && ([...ms932Encoder.encode("蕨蕩蕪蕫")].join(",") === "152,110,147,160,149,147,251,156"); // U+8568
assert.throws(() => {ms932Encoder.encode("\u856C")}, {name:"Error",message:"EncodingError U+856C"});
r = r && ([...ms932Encoder.encode("蕭")].join(",") === "229,74"); // U+856D
assert.throws(() => {ms932Encoder.encode("\u856E")}, {name:"Error",message:"EncodingError U+856E"});
assert.throws(() => {ms932Encoder.encode("\u856F")}, {name:"Error",message:"EncodingError U+856F"});
assert.throws(() => {ms932Encoder.encode("\u8570")}, {name:"Error",message:"EncodingError U+8570"});
assert.throws(() => {ms932Encoder.encode("\u8571")}, {name:"Error",message:"EncodingError U+8571"});
assert.throws(() => {ms932Encoder.encode("\u8572")}, {name:"Error",message:"EncodingError U+8572"});
assert.throws(() => {ms932Encoder.encode("\u8573")}, {name:"Error",message:"EncodingError U+8573"});
assert.throws(() => {ms932Encoder.encode("\u8574")}, {name:"Error",message:"EncodingError U+8574"});
assert.throws(() => {ms932Encoder.encode("\u8575")}, {name:"Error",message:"EncodingError U+8575"});
assert.throws(() => {ms932Encoder.encode("\u8576")}, {name:"Error",message:"EncodingError U+8576"});
r = r && ([...ms932Encoder.encode("蕷")].join(",") === "229,80"); // U+8577
assert.throws(() => {ms932Encoder.encode("\u8578")}, {name:"Error",message:"EncodingError U+8578"});
assert.throws(() => {ms932Encoder.encode("\u8579")}, {name:"Error",message:"EncodingError U+8579"});
assert.throws(() => {ms932Encoder.encode("\u857A")}, {name:"Error",message:"EncodingError U+857A"});
assert.throws(() => {ms932Encoder.encode("\u857B")}, {name:"Error",message:"EncodingError U+857B"});
assert.throws(() => {ms932Encoder.encode("\u857C")}, {name:"Error",message:"EncodingError U+857C"});
assert.throws(() => {ms932Encoder.encode("\u857D")}, {name:"Error",message:"EncodingError U+857D"});
r = r && ([...ms932Encoder.encode("蕾")].join(",") === "229,81"); // U+857E
assert.throws(() => {ms932Encoder.encode("\u857F")}, {name:"Error",message:"EncodingError U+857F"});
r = r && ([...ms932Encoder.encode("薀")].join(",") === "229,68"); // U+8580
assert.throws(() => {ms932Encoder.encode("\u8581")}, {name:"Error",message:"EncodingError U+8581"});
assert.throws(() => {ms932Encoder.encode("\u8582")}, {name:"Error",message:"EncodingError U+8582"});
assert.throws(() => {ms932Encoder.encode("\u8583")}, {name:"Error",message:"EncodingError U+8583"});
r = r && ([...ms932Encoder.encode("薄")].join(",") === "148,150"); // U+8584
assert.throws(() => {ms932Encoder.encode("\u8585")}, {name:"Error",message:"EncodingError U+8585"});
assert.throws(() => {ms932Encoder.encode("\u8586")}, {name:"Error",message:"EncodingError U+8586"});
r = r && ([...ms932Encoder.encode("薇薈")].join(",") === "229,78,229,70"); // U+8587
assert.throws(() => {ms932Encoder.encode("\u8589")}, {name:"Error",message:"EncodingError U+8589"});
r = r && ([...ms932Encoder.encode("薊")].join(",") === "229,72"); // U+858A
assert.throws(() => {ms932Encoder.encode("\u858B")}, {name:"Error",message:"EncodingError U+858B"});
assert.throws(() => {ms932Encoder.encode("\u858C")}, {name:"Error",message:"EncodingError U+858C"});
assert.throws(() => {ms932Encoder.encode("\u858D")}, {name:"Error",message:"EncodingError U+858D"});
assert.throws(() => {ms932Encoder.encode("\u858E")}, {name:"Error",message:"EncodingError U+858E"});
assert.throws(() => {ms932Encoder.encode("\u858F")}, {name:"Error",message:"EncodingError U+858F"});
r = r && ([...ms932Encoder.encode("薐薑")].join(",") === "229,82,229,71"); // U+8590
assert.throws(() => {ms932Encoder.encode("\u8592")}, {name:"Error",message:"EncodingError U+8592"});
assert.throws(() => {ms932Encoder.encode("\u8593")}, {name:"Error",message:"EncodingError U+8593"});
r = r && ([...ms932Encoder.encode("薔")].join(",") === "229,75"); // U+8594
assert.throws(() => {ms932Encoder.encode("\u8595")}, {name:"Error",message:"EncodingError U+8595"});
assert.throws(() => {ms932Encoder.encode("\u8596")}, {name:"Error",message:"EncodingError U+8596"});
r = r && ([...ms932Encoder.encode("薗")].join(",") === "137,146"); // U+8597
assert.throws(() => {ms932Encoder.encode("\u8598")}, {name:"Error",message:"EncodingError U+8598"});
r = r && ([...ms932Encoder.encode("薙")].join(",") === "147,227"); // U+8599
assert.throws(() => {ms932Encoder.encode("\u859A")}, {name:"Error",message:"EncodingError U+859A"});
r = r && ([...ms932Encoder.encode("薛薜")].join(",") === "229,76,229,79"); // U+859B
assert.throws(() => {ms932Encoder.encode("\u859D")}, {name:"Error",message:"EncodingError U+859D"});
assert.throws(() => {ms932Encoder.encode("\u859E")}, {name:"Error",message:"EncodingError U+859E"});
assert.throws(() => {ms932Encoder.encode("\u859F")}, {name:"Error",message:"EncodingError U+859F"});
assert.throws(() => {ms932Encoder.encode("\u85A0")}, {name:"Error",message:"EncodingError U+85A0"});
assert.throws(() => {ms932Encoder.encode("\u85A1")}, {name:"Error",message:"EncodingError U+85A1"});
assert.throws(() => {ms932Encoder.encode("\u85A2")}, {name:"Error",message:"EncodingError U+85A2"});
assert.throws(() => {ms932Encoder.encode("\u85A3")}, {name:"Error",message:"EncodingError U+85A3"});
r = r && ([...ms932Encoder.encode("薤")].join(",") === "229,69"); // U+85A4
assert.throws(() => {ms932Encoder.encode("\u85A5")}, {name:"Error",message:"EncodingError U+85A5"});
r = r && ([...ms932Encoder.encode("薦")].join(",") === "145,69"); // U+85A6
assert.throws(() => {ms932Encoder.encode("\u85A7")}, {name:"Error",message:"EncodingError U+85A7"});
r = r && ([...ms932Encoder.encode("薨薩薪薫薬")].join(",") === "229,73,142,70,144,100,140,79,150,242"); // U+85A8
assert.throws(() => {ms932Encoder.encode("\u85AD")}, {name:"Error",message:"EncodingError U+85AD"});
r = r && ([...ms932Encoder.encode("薮薯薰")].join(",") === "150,247,143,146,251,158"); // U+85AE
assert.throws(() => {ms932Encoder.encode("\u85B1")}, {name:"Error",message:"EncodingError U+85B1"});
assert.throws(() => {ms932Encoder.encode("\u85B2")}, {name:"Error",message:"EncodingError U+85B2"});
assert.throws(() => {ms932Encoder.encode("\u85B3")}, {name:"Error",message:"EncodingError U+85B3"});
assert.throws(() => {ms932Encoder.encode("\u85B4")}, {name:"Error",message:"EncodingError U+85B4"});
assert.throws(() => {ms932Encoder.encode("\u85B5")}, {name:"Error",message:"EncodingError U+85B5"});
assert.throws(() => {ms932Encoder.encode("\u85B6")}, {name:"Error",message:"EncodingError U+85B6"});
assert.throws(() => {ms932Encoder.encode("\u85B7")}, {name:"Error",message:"EncodingError U+85B7"});
assert.throws(() => {ms932Encoder.encode("\u85B8")}, {name:"Error",message:"EncodingError U+85B8"});
r = r && ([...ms932Encoder.encode("薹薺")].join(",") === "229,86,229,84"); // U+85B9
assert.throws(() => {ms932Encoder.encode("\u85BB")}, {name:"Error",message:"EncodingError U+85BB"});
assert.throws(() => {ms932Encoder.encode("\u85BC")}, {name:"Error",message:"EncodingError U+85BC"});
assert.throws(() => {ms932Encoder.encode("\u85BD")}, {name:"Error",message:"EncodingError U+85BD"});
assert.throws(() => {ms932Encoder.encode("\u85BE")}, {name:"Error",message:"EncodingError U+85BE"});
assert.throws(() => {ms932Encoder.encode("\u85BF")}, {name:"Error",message:"EncodingError U+85BF"});
assert.throws(() => {ms932Encoder.encode("\u85C0")}, {name:"Error",message:"EncodingError U+85C0"});
r = r && ([...ms932Encoder.encode("藁")].join(",") === "152,109"); // U+85C1
assert.throws(() => {ms932Encoder.encode("\u85C2")}, {name:"Error",message:"EncodingError U+85C2"});
assert.throws(() => {ms932Encoder.encode("\u85C3")}, {name:"Error",message:"EncodingError U+85C3"});
assert.throws(() => {ms932Encoder.encode("\u85C4")}, {name:"Error",message:"EncodingError U+85C4"});
assert.throws(() => {ms932Encoder.encode("\u85C5")}, {name:"Error",message:"EncodingError U+85C5"});
assert.throws(() => {ms932Encoder.encode("\u85C6")}, {name:"Error",message:"EncodingError U+85C6"});
assert.throws(() => {ms932Encoder.encode("\u85C7")}, {name:"Error",message:"EncodingError U+85C7"});
assert.throws(() => {ms932Encoder.encode("\u85C8")}, {name:"Error",message:"EncodingError U+85C8"});
r = r && ([...ms932Encoder.encode("藉")].join(",") === "229,83"); // U+85C9
assert.throws(() => {ms932Encoder.encode("\u85CA")}, {name:"Error",message:"EncodingError U+85CA"});
assert.throws(() => {ms932Encoder.encode("\u85CB")}, {name:"Error",message:"EncodingError U+85CB"});
assert.throws(() => {ms932Encoder.encode("\u85CC")}, {name:"Error",message:"EncodingError U+85CC"});
r = r && ([...ms932Encoder.encode("藍")].join(",") === "151,149"); // U+85CD
assert.throws(() => {ms932Encoder.encode("\u85CE")}, {name:"Error",message:"EncodingError U+85CE"});
r = r && ([...ms932Encoder.encode("藏藐")].join(",") === "229,85,229,87"); // U+85CF
assert.throws(() => {ms932Encoder.encode("\u85D1")}, {name:"Error",message:"EncodingError U+85D1"});
assert.throws(() => {ms932Encoder.encode("\u85D2")}, {name:"Error",message:"EncodingError U+85D2"});
assert.throws(() => {ms932Encoder.encode("\u85D3")}, {name:"Error",message:"EncodingError U+85D3"});
assert.throws(() => {ms932Encoder.encode("\u85D4")}, {name:"Error",message:"EncodingError U+85D4"});
r = r && ([...ms932Encoder.encode("藕")].join(",") === "229,88"); // U+85D5
assert.throws(() => {ms932Encoder.encode("\u85D6")}, {name:"Error",message:"EncodingError U+85D6"});
assert.throws(() => {ms932Encoder.encode("\u85D7")}, {name:"Error",message:"EncodingError U+85D7"});
assert.throws(() => {ms932Encoder.encode("\u85D8")}, {name:"Error",message:"EncodingError U+85D8"});
assert.throws(() => {ms932Encoder.encode("\u85D9")}, {name:"Error",message:"EncodingError U+85D9"});
assert.throws(() => {ms932Encoder.encode("\u85DA")}, {name:"Error",message:"EncodingError U+85DA"});
assert.throws(() => {ms932Encoder.encode("\u85DB")}, {name:"Error",message:"EncodingError U+85DB"});
r = r && ([...ms932Encoder.encode("藜藝")].join(",") === "229,91,229,89"); // U+85DC
assert.throws(() => {ms932Encoder.encode("\u85DE")}, {name:"Error",message:"EncodingError U+85DE"});
assert.throws(() => {ms932Encoder.encode("\u85DF")}, {name:"Error",message:"EncodingError U+85DF"});
assert.throws(() => {ms932Encoder.encode("\u85E0")}, {name:"Error",message:"EncodingError U+85E0"});
assert.throws(() => {ms932Encoder.encode("\u85E1")}, {name:"Error",message:"EncodingError U+85E1"});
assert.throws(() => {ms932Encoder.encode("\u85E2")}, {name:"Error",message:"EncodingError U+85E2"});
assert.throws(() => {ms932Encoder.encode("\u85E3")}, {name:"Error",message:"EncodingError U+85E3"});
r = r && ([...ms932Encoder.encode("藤藥")].join(",") === "147,161,229,90"); // U+85E4
assert.throws(() => {ms932Encoder.encode("\u85E6")}, {name:"Error",message:"EncodingError U+85E6"});
assert.throws(() => {ms932Encoder.encode("\u85E7")}, {name:"Error",message:"EncodingError U+85E7"});
assert.throws(() => {ms932Encoder.encode("\u85E8")}, {name:"Error",message:"EncodingError U+85E8"});
r = r && ([...ms932Encoder.encode("藩藪")].join(",") === "148,203,229,77"); // U+85E9
assert.throws(() => {ms932Encoder.encode("\u85EB")}, {name:"Error",message:"EncodingError U+85EB"});
assert.throws(() => {ms932Encoder.encode("\u85EC")}, {name:"Error",message:"EncodingError U+85EC"});
assert.throws(() => {ms932Encoder.encode("\u85ED")}, {name:"Error",message:"EncodingError U+85ED"});
assert.throws(() => {ms932Encoder.encode("\u85EE")}, {name:"Error",message:"EncodingError U+85EE"});
assert.throws(() => {ms932Encoder.encode("\u85EF")}, {name:"Error",message:"EncodingError U+85EF"});
assert.throws(() => {ms932Encoder.encode("\u85F0")}, {name:"Error",message:"EncodingError U+85F0"});
assert.throws(() => {ms932Encoder.encode("\u85F1")}, {name:"Error",message:"EncodingError U+85F1"});
assert.throws(() => {ms932Encoder.encode("\u85F2")}, {name:"Error",message:"EncodingError U+85F2"});
assert.throws(() => {ms932Encoder.encode("\u85F3")}, {name:"Error",message:"EncodingError U+85F3"});
assert.throws(() => {ms932Encoder.encode("\u85F4")}, {name:"Error",message:"EncodingError U+85F4"});
assert.throws(() => {ms932Encoder.encode("\u85F5")}, {name:"Error",message:"EncodingError U+85F5"});
assert.throws(() => {ms932Encoder.encode("\u85F6")}, {name:"Error",message:"EncodingError U+85F6"});
r = r && ([...ms932Encoder.encode("藷")].join(",") === "143,147"); // U+85F7
assert.throws(() => {ms932Encoder.encode("\u85F8")}, {name:"Error",message:"EncodingError U+85F8"});
r = r && ([...ms932Encoder.encode("藹藺藻")].join(",") === "229,92,229,97,145,148"); // U+85F9
assert.throws(() => {ms932Encoder.encode("\u85FC")}, {name:"Error",message:"EncodingError U+85FC"});
assert.throws(() => {ms932Encoder.encode("\u85FD")}, {name:"Error",message:"EncodingError U+85FD"});
r = r && ([...ms932Encoder.encode("藾")].join(",") === "229,96"); // U+85FE
assert.throws(() => {ms932Encoder.encode("\u85FF")}, {name:"Error",message:"EncodingError U+85FF"});
assert.throws(() => {ms932Encoder.encode("\u8600")}, {name:"Error",message:"EncodingError U+8600"});
assert.throws(() => {ms932Encoder.encode("\u8601")}, {name:"Error",message:"EncodingError U+8601"});
r = r && ([...ms932Encoder.encode("蘂")].join(",") === "229,65"); // U+8602
assert.throws(() => {ms932Encoder.encode("\u8603")}, {name:"Error",message:"EncodingError U+8603"});
assert.throws(() => {ms932Encoder.encode("\u8604")}, {name:"Error",message:"EncodingError U+8604"});
assert.throws(() => {ms932Encoder.encode("\u8605")}, {name:"Error",message:"EncodingError U+8605"});
r = r && ([...ms932Encoder.encode("蘆蘇")].join(",") === "229,98,145,104"); // U+8606
assert.throws(() => {ms932Encoder.encode("\u8608")}, {name:"Error",message:"EncodingError U+8608"});
assert.throws(() => {ms932Encoder.encode("\u8609")}, {name:"Error",message:"EncodingError U+8609"});
r = r && ([...ms932Encoder.encode("蘊蘋")].join(",") === "229,93,229,95"); // U+860A
assert.throws(() => {ms932Encoder.encode("\u860C")}, {name:"Error",message:"EncodingError U+860C"});
assert.throws(() => {ms932Encoder.encode("\u860D")}, {name:"Error",message:"EncodingError U+860D"});
assert.throws(() => {ms932Encoder.encode("\u860E")}, {name:"Error",message:"EncodingError U+860E"});
assert.throws(() => {ms932Encoder.encode("\u860F")}, {name:"Error",message:"EncodingError U+860F"});
assert.throws(() => {ms932Encoder.encode("\u8610")}, {name:"Error",message:"EncodingError U+8610"});
assert.throws(() => {ms932Encoder.encode("\u8611")}, {name:"Error",message:"EncodingError U+8611"});
assert.throws(() => {ms932Encoder.encode("\u8612")}, {name:"Error",message:"EncodingError U+8612"});
r = r && ([...ms932Encoder.encode("蘓")].join(",") === "229,94"); // U+8613
assert.throws(() => {ms932Encoder.encode("\u8614")}, {name:"Error",message:"EncodingError U+8614"});
assert.throws(() => {ms932Encoder.encode("\u8615")}, {name:"Error",message:"EncodingError U+8615"});
r = r && ([...ms932Encoder.encode("蘖蘗")].join(",") === "159,80,159,65"); // U+8616
assert.throws(() => {ms932Encoder.encode("\u8618")}, {name:"Error",message:"EncodingError U+8618"});
assert.throws(() => {ms932Encoder.encode("\u8619")}, {name:"Error",message:"EncodingError U+8619"});
r = r && ([...ms932Encoder.encode("蘚")].join(",") === "229,100"); // U+861A
assert.throws(() => {ms932Encoder.encode("\u861B")}, {name:"Error",message:"EncodingError U+861B"});
assert.throws(() => {ms932Encoder.encode("\u861C")}, {name:"Error",message:"EncodingError U+861C"});
assert.throws(() => {ms932Encoder.encode("\u861D")}, {name:"Error",message:"EncodingError U+861D"});
assert.throws(() => {ms932Encoder.encode("\u861E")}, {name:"Error",message:"EncodingError U+861E"});
assert.throws(() => {ms932Encoder.encode("\u861F")}, {name:"Error",message:"EncodingError U+861F"});
assert.throws(() => {ms932Encoder.encode("\u8620")}, {name:"Error",message:"EncodingError U+8620"});
assert.throws(() => {ms932Encoder.encode("\u8621")}, {name:"Error",message:"EncodingError U+8621"});
r = r && ([...ms932Encoder.encode("蘢")].join(",") === "229,99"); // U+8622
assert.throws(() => {ms932Encoder.encode("\u8623")}, {name:"Error",message:"EncodingError U+8623"});
assert.throws(() => {ms932Encoder.encode("\u8624")}, {name:"Error",message:"EncodingError U+8624"});
assert.throws(() => {ms932Encoder.encode("\u8625")}, {name:"Error",message:"EncodingError U+8625"});
assert.throws(() => {ms932Encoder.encode("\u8626")}, {name:"Error",message:"EncodingError U+8626"});
assert.throws(() => {ms932Encoder.encode("\u8627")}, {name:"Error",message:"EncodingError U+8627"});
assert.throws(() => {ms932Encoder.encode("\u8628")}, {name:"Error",message:"EncodingError U+8628"});
assert.throws(() => {ms932Encoder.encode("\u8629")}, {name:"Error",message:"EncodingError U+8629"});
assert.throws(() => {ms932Encoder.encode("\u862A")}, {name:"Error",message:"EncodingError U+862A"});
assert.throws(() => {ms932Encoder.encode("\u862B")}, {name:"Error",message:"EncodingError U+862B"});
assert.throws(() => {ms932Encoder.encode("\u862C")}, {name:"Error",message:"EncodingError U+862C"});
r = r && ([...ms932Encoder.encode("蘭")].join(",") === "151,150"); // U+862D
assert.throws(() => {ms932Encoder.encode("\u862E")}, {name:"Error",message:"EncodingError U+862E"});
r = r && ([...ms932Encoder.encode("蘯蘰")].join(",") === "225,186,229,101"); // U+862F
assert.throws(() => {ms932Encoder.encode("\u8631")}, {name:"Error",message:"EncodingError U+8631"});
assert.throws(() => {ms932Encoder.encode("\u8632")}, {name:"Error",message:"EncodingError U+8632"});
assert.throws(() => {ms932Encoder.encode("\u8633")}, {name:"Error",message:"EncodingError U+8633"});
assert.throws(() => {ms932Encoder.encode("\u8634")}, {name:"Error",message:"EncodingError U+8634"});
assert.throws(() => {ms932Encoder.encode("\u8635")}, {name:"Error",message:"EncodingError U+8635"});
assert.throws(() => {ms932Encoder.encode("\u8636")}, {name:"Error",message:"EncodingError U+8636"});
assert.throws(() => {ms932Encoder.encode("\u8637")}, {name:"Error",message:"EncodingError U+8637"});
assert.throws(() => {ms932Encoder.encode("\u8638")}, {name:"Error",message:"EncodingError U+8638"});
assert.throws(() => {ms932Encoder.encode("\u8639")}, {name:"Error",message:"EncodingError U+8639"});
assert.throws(() => {ms932Encoder.encode("\u863A")}, {name:"Error",message:"EncodingError U+863A"});
assert.throws(() => {ms932Encoder.encode("\u863B")}, {name:"Error",message:"EncodingError U+863B"});
assert.throws(() => {ms932Encoder.encode("\u863C")}, {name:"Error",message:"EncodingError U+863C"});
assert.throws(() => {ms932Encoder.encode("\u863D")}, {name:"Error",message:"EncodingError U+863D"});
assert.throws(() => {ms932Encoder.encode("\u863E")}, {name:"Error",message:"EncodingError U+863E"});
r = r && ([...ms932Encoder.encode("蘿")].join(",") === "229,102"); // U+863F
assert.throws(() => {ms932Encoder.encode("\u8640")}, {name:"Error",message:"EncodingError U+8640"});
assert.throws(() => {ms932Encoder.encode("\u8641")}, {name:"Error",message:"EncodingError U+8641"});
assert.throws(() => {ms932Encoder.encode("\u8642")}, {name:"Error",message:"EncodingError U+8642"});
assert.throws(() => {ms932Encoder.encode("\u8643")}, {name:"Error",message:"EncodingError U+8643"});
assert.throws(() => {ms932Encoder.encode("\u8644")}, {name:"Error",message:"EncodingError U+8644"});
assert.throws(() => {ms932Encoder.encode("\u8645")}, {name:"Error",message:"EncodingError U+8645"});
assert.throws(() => {ms932Encoder.encode("\u8646")}, {name:"Error",message:"EncodingError U+8646"});
assert.throws(() => {ms932Encoder.encode("\u8647")}, {name:"Error",message:"EncodingError U+8647"});
assert.throws(() => {ms932Encoder.encode("\u8648")}, {name:"Error",message:"EncodingError U+8648"});
assert.throws(() => {ms932Encoder.encode("\u8649")}, {name:"Error",message:"EncodingError U+8649"});
assert.throws(() => {ms932Encoder.encode("\u864A")}, {name:"Error",message:"EncodingError U+864A"});
assert.throws(() => {ms932Encoder.encode("\u864B")}, {name:"Error",message:"EncodingError U+864B"});
assert.throws(() => {ms932Encoder.encode("\u864C")}, {name:"Error",message:"EncodingError U+864C"});
r = r && ([...ms932Encoder.encode("虍虎")].join(",") === "229,103,140,213"); // U+864D
assert.throws(() => {ms932Encoder.encode("\u864F")}, {name:"Error",message:"EncodingError U+864F"});
r = r && ([...ms932Encoder.encode("虐")].join(",") === "139,115"); // U+8650
assert.throws(() => {ms932Encoder.encode("\u8651")}, {name:"Error",message:"EncodingError U+8651"});
assert.throws(() => {ms932Encoder.encode("\u8652")}, {name:"Error",message:"EncodingError U+8652"});
assert.throws(() => {ms932Encoder.encode("\u8653")}, {name:"Error",message:"EncodingError U+8653"});
r = r && ([...ms932Encoder.encode("虔處")].join(",") === "229,105,153,124"); // U+8654
assert.throws(() => {ms932Encoder.encode("\u8656")}, {name:"Error",message:"EncodingError U+8656"});
assert.throws(() => {ms932Encoder.encode("\u8657")}, {name:"Error",message:"EncodingError U+8657"});
assert.throws(() => {ms932Encoder.encode("\u8658")}, {name:"Error",message:"EncodingError U+8658"});
assert.throws(() => {ms932Encoder.encode("\u8659")}, {name:"Error",message:"EncodingError U+8659"});
r = r && ([...ms932Encoder.encode("虚")].join(",") === "139,149"); // U+865A
assert.throws(() => {ms932Encoder.encode("\u865B")}, {name:"Error",message:"EncodingError U+865B"});
r = r && ([...ms932Encoder.encode("虜")].join(",") === "151,184"); // U+865C
assert.throws(() => {ms932Encoder.encode("\u865D")}, {name:"Error",message:"EncodingError U+865D"});
r = r && ([...ms932Encoder.encode("虞號")].join(",") === "139,241,229,106"); // U+865E
assert.throws(() => {ms932Encoder.encode("\u8660")}, {name:"Error",message:"EncodingError U+8660"});
assert.throws(() => {ms932Encoder.encode("\u8661")}, {name:"Error",message:"EncodingError U+8661"});
assert.throws(() => {ms932Encoder.encode("\u8662")}, {name:"Error",message:"EncodingError U+8662"});
assert.throws(() => {ms932Encoder.encode("\u8663")}, {name:"Error",message:"EncodingError U+8663"});
assert.throws(() => {ms932Encoder.encode("\u8664")}, {name:"Error",message:"EncodingError U+8664"});
assert.throws(() => {ms932Encoder.encode("\u8665")}, {name:"Error",message:"EncodingError U+8665"});
assert.throws(() => {ms932Encoder.encode("\u8666")}, {name:"Error",message:"EncodingError U+8666"});
r = r && ([...ms932Encoder.encode("虧")].join(",") === "229,107"); // U+8667
assert.throws(() => {ms932Encoder.encode("\u8668")}, {name:"Error",message:"EncodingError U+8668"});
assert.throws(() => {ms932Encoder.encode("\u8669")}, {name:"Error",message:"EncodingError U+8669"});
assert.throws(() => {ms932Encoder.encode("\u866A")}, {name:"Error",message:"EncodingError U+866A"});
r = r && ([...ms932Encoder.encode("虫")].join(",") === "146,142"); // U+866B
assert.throws(() => {ms932Encoder.encode("\u866C")}, {name:"Error",message:"EncodingError U+866C"});
assert.throws(() => {ms932Encoder.encode("\u866D")}, {name:"Error",message:"EncodingError U+866D"});
assert.throws(() => {ms932Encoder.encode("\u866E")}, {name:"Error",message:"EncodingError U+866E"});
assert.throws(() => {ms932Encoder.encode("\u866F")}, {name:"Error",message:"EncodingError U+866F"});
assert.throws(() => {ms932Encoder.encode("\u8670")}, {name:"Error",message:"EncodingError U+8670"});
r = r && ([...ms932Encoder.encode("虱")].join(",") === "229,108"); // U+8671
assert.throws(() => {ms932Encoder.encode("\u8672")}, {name:"Error",message:"EncodingError U+8672"});
assert.throws(() => {ms932Encoder.encode("\u8673")}, {name:"Error",message:"EncodingError U+8673"});
assert.throws(() => {ms932Encoder.encode("\u8674")}, {name:"Error",message:"EncodingError U+8674"});
assert.throws(() => {ms932Encoder.encode("\u8675")}, {name:"Error",message:"EncodingError U+8675"});
assert.throws(() => {ms932Encoder.encode("\u8676")}, {name:"Error",message:"EncodingError U+8676"});
assert.throws(() => {ms932Encoder.encode("\u8677")}, {name:"Error",message:"EncodingError U+8677"});
assert.throws(() => {ms932Encoder.encode("\u8678")}, {name:"Error",message:"EncodingError U+8678"});
r = r && ([...ms932Encoder.encode("虹")].join(",") === "147,248"); // U+8679
assert.throws(() => {ms932Encoder.encode("\u867A")}, {name:"Error",message:"EncodingError U+867A"});
r = r && ([...ms932Encoder.encode("虻")].join(",") === "136,184"); // U+867B
assert.throws(() => {ms932Encoder.encode("\u867C")}, {name:"Error",message:"EncodingError U+867C"});
assert.throws(() => {ms932Encoder.encode("\u867D")}, {name:"Error",message:"EncodingError U+867D"});
assert.throws(() => {ms932Encoder.encode("\u867E")}, {name:"Error",message:"EncodingError U+867E"});
assert.throws(() => {ms932Encoder.encode("\u867F")}, {name:"Error",message:"EncodingError U+867F"});
assert.throws(() => {ms932Encoder.encode("\u8680")}, {name:"Error",message:"EncodingError U+8680"});
assert.throws(() => {ms932Encoder.encode("\u8681")}, {name:"Error",message:"EncodingError U+8681"});
assert.throws(() => {ms932Encoder.encode("\u8682")}, {name:"Error",message:"EncodingError U+8682"});
assert.throws(() => {ms932Encoder.encode("\u8683")}, {name:"Error",message:"EncodingError U+8683"});
assert.throws(() => {ms932Encoder.encode("\u8684")}, {name:"Error",message:"EncodingError U+8684"});
assert.throws(() => {ms932Encoder.encode("\u8685")}, {name:"Error",message:"EncodingError U+8685"});
assert.throws(() => {ms932Encoder.encode("\u8686")}, {name:"Error",message:"EncodingError U+8686"});
assert.throws(() => {ms932Encoder.encode("\u8687")}, {name:"Error",message:"EncodingError U+8687"});
assert.throws(() => {ms932Encoder.encode("\u8688")}, {name:"Error",message:"EncodingError U+8688"});
assert.throws(() => {ms932Encoder.encode("\u8689")}, {name:"Error",message:"EncodingError U+8689"});
r = r && ([...ms932Encoder.encode("蚊蚋蚌")].join(",") === "137,225,229,113,229,114"); // U+868A
assert.throws(() => {ms932Encoder.encode("\u868D")}, {name:"Error",message:"EncodingError U+868D"});
assert.throws(() => {ms932Encoder.encode("\u868E")}, {name:"Error",message:"EncodingError U+868E"});
assert.throws(() => {ms932Encoder.encode("\u868F")}, {name:"Error",message:"EncodingError U+868F"});
assert.throws(() => {ms932Encoder.encode("\u8690")}, {name:"Error",message:"EncodingError U+8690"});
assert.throws(() => {ms932Encoder.encode("\u8691")}, {name:"Error",message:"EncodingError U+8691"});
assert.throws(() => {ms932Encoder.encode("\u8692")}, {name:"Error",message:"EncodingError U+8692"});
r = r && ([...ms932Encoder.encode("蚓")].join(",") === "229,109"); // U+8693
assert.throws(() => {ms932Encoder.encode("\u8694")}, {name:"Error",message:"EncodingError U+8694"});
r = r && ([...ms932Encoder.encode("蚕")].join(",") === "142,92"); // U+8695
assert.throws(() => {ms932Encoder.encode("\u8696")}, {name:"Error",message:"EncodingError U+8696"});
assert.throws(() => {ms932Encoder.encode("\u8697")}, {name:"Error",message:"EncodingError U+8697"});
assert.throws(() => {ms932Encoder.encode("\u8698")}, {name:"Error",message:"EncodingError U+8698"});
assert.throws(() => {ms932Encoder.encode("\u8699")}, {name:"Error",message:"EncodingError U+8699"});
assert.throws(() => {ms932Encoder.encode("\u869A")}, {name:"Error",message:"EncodingError U+869A"});
assert.throws(() => {ms932Encoder.encode("\u869B")}, {name:"Error",message:"EncodingError U+869B"});
assert.throws(() => {ms932Encoder.encode("\u869C")}, {name:"Error",message:"EncodingError U+869C"});
assert.throws(() => {ms932Encoder.encode("\u869D")}, {name:"Error",message:"EncodingError U+869D"});
assert.throws(() => {ms932Encoder.encode("\u869E")}, {name:"Error",message:"EncodingError U+869E"});
assert.throws(() => {ms932Encoder.encode("\u869F")}, {name:"Error",message:"EncodingError U+869F"});
assert.throws(() => {ms932Encoder.encode("\u86A0")}, {name:"Error",message:"EncodingError U+86A0"});
assert.throws(() => {ms932Encoder.encode("\u86A1")}, {name:"Error",message:"EncodingError U+86A1"});
assert.throws(() => {ms932Encoder.encode("\u86A2")}, {name:"Error",message:"EncodingError U+86A2"});
r = r && ([...ms932Encoder.encode("蚣蚤")].join(",") === "229,110,148,97"); // U+86A3
assert.throws(() => {ms932Encoder.encode("\u86A5")}, {name:"Error",message:"EncodingError U+86A5"});
assert.throws(() => {ms932Encoder.encode("\u86A6")}, {name:"Error",message:"EncodingError U+86A6"});
assert.throws(() => {ms932Encoder.encode("\u86A7")}, {name:"Error",message:"EncodingError U+86A7"});
assert.throws(() => {ms932Encoder.encode("\u86A8")}, {name:"Error",message:"EncodingError U+86A8"});
r = r && ([...ms932Encoder.encode("蚩蚪蚫")].join(",") === "229,111,229,112,229,122"); // U+86A9
assert.throws(() => {ms932Encoder.encode("\u86AC")}, {name:"Error",message:"EncodingError U+86AC"});
assert.throws(() => {ms932Encoder.encode("\u86AD")}, {name:"Error",message:"EncodingError U+86AD"});
assert.throws(() => {ms932Encoder.encode("\u86AE")}, {name:"Error",message:"EncodingError U+86AE"});
r = r && ([...ms932Encoder.encode("蚯蚰")].join(",") === "229,116,229,119"); // U+86AF
assert.throws(() => {ms932Encoder.encode("\u86B1")}, {name:"Error",message:"EncodingError U+86B1"});
assert.throws(() => {ms932Encoder.encode("\u86B2")}, {name:"Error",message:"EncodingError U+86B2"});
assert.throws(() => {ms932Encoder.encode("\u86B3")}, {name:"Error",message:"EncodingError U+86B3"});
assert.throws(() => {ms932Encoder.encode("\u86B4")}, {name:"Error",message:"EncodingError U+86B4"});
assert.throws(() => {ms932Encoder.encode("\u86B5")}, {name:"Error",message:"EncodingError U+86B5"});
r = r && ([...ms932Encoder.encode("蚶")].join(",") === "229,115"); // U+86B6
assert.throws(() => {ms932Encoder.encode("\u86B7")}, {name:"Error",message:"EncodingError U+86B7"});
assert.throws(() => {ms932Encoder.encode("\u86B8")}, {name:"Error",message:"EncodingError U+86B8"});
assert.throws(() => {ms932Encoder.encode("\u86B9")}, {name:"Error",message:"EncodingError U+86B9"});
assert.throws(() => {ms932Encoder.encode("\u86BA")}, {name:"Error",message:"EncodingError U+86BA"});
assert.throws(() => {ms932Encoder.encode("\u86BB")}, {name:"Error",message:"EncodingError U+86BB"});
assert.throws(() => {ms932Encoder.encode("\u86BC")}, {name:"Error",message:"EncodingError U+86BC"});
assert.throws(() => {ms932Encoder.encode("\u86BD")}, {name:"Error",message:"EncodingError U+86BD"});
assert.throws(() => {ms932Encoder.encode("\u86BE")}, {name:"Error",message:"EncodingError U+86BE"});
assert.throws(() => {ms932Encoder.encode("\u86BF")}, {name:"Error",message:"EncodingError U+86BF"});
assert.throws(() => {ms932Encoder.encode("\u86C0")}, {name:"Error",message:"EncodingError U+86C0"});
assert.throws(() => {ms932Encoder.encode("\u86C1")}, {name:"Error",message:"EncodingError U+86C1"});
assert.throws(() => {ms932Encoder.encode("\u86C2")}, {name:"Error",message:"EncodingError U+86C2"});
assert.throws(() => {ms932Encoder.encode("\u86C3")}, {name:"Error",message:"EncodingError U+86C3"});
r = r && ([...ms932Encoder.encode("蛄")].join(",") === "229,117"); // U+86C4
assert.throws(() => {ms932Encoder.encode("\u86C5")}, {name:"Error",message:"EncodingError U+86C5"});
r = r && ([...ms932Encoder.encode("蛆蛇")].join(",") === "229,118,142,214"); // U+86C6
assert.throws(() => {ms932Encoder.encode("\u86C8")}, {name:"Error",message:"EncodingError U+86C8"});
r = r && ([...ms932Encoder.encode("蛉")].join(",") === "229,120"); // U+86C9
assert.throws(() => {ms932Encoder.encode("\u86CA")}, {name:"Error",message:"EncodingError U+86CA"});
r = r && ([...ms932Encoder.encode("蛋")].join(",") === "146,96"); // U+86CB
assert.throws(() => {ms932Encoder.encode("\u86CC")}, {name:"Error",message:"EncodingError U+86CC"});
r = r && ([...ms932Encoder.encode("蛍蛎")].join(",") === "140,117,138,97"); // U+86CD
assert.throws(() => {ms932Encoder.encode("\u86CF")}, {name:"Error",message:"EncodingError U+86CF"});
assert.throws(() => {ms932Encoder.encode("\u86D0")}, {name:"Error",message:"EncodingError U+86D0"});
assert.throws(() => {ms932Encoder.encode("\u86D1")}, {name:"Error",message:"EncodingError U+86D1"});
assert.throws(() => {ms932Encoder.encode("\u86D2")}, {name:"Error",message:"EncodingError U+86D2"});
assert.throws(() => {ms932Encoder.encode("\u86D3")}, {name:"Error",message:"EncodingError U+86D3"});
r = r && ([...ms932Encoder.encode("蛔")].join(",") === "229,123"); // U+86D4
assert.throws(() => {ms932Encoder.encode("\u86D5")}, {name:"Error",message:"EncodingError U+86D5"});
assert.throws(() => {ms932Encoder.encode("\u86D6")}, {name:"Error",message:"EncodingError U+86D6"});
assert.throws(() => {ms932Encoder.encode("\u86D7")}, {name:"Error",message:"EncodingError U+86D7"});
assert.throws(() => {ms932Encoder.encode("\u86D8")}, {name:"Error",message:"EncodingError U+86D8"});
r = r && ([...ms932Encoder.encode("蛙")].join(",") === "138,94"); // U+86D9
assert.throws(() => {ms932Encoder.encode("\u86DA")}, {name:"Error",message:"EncodingError U+86DA"});
r = r && ([...ms932Encoder.encode("蛛")].join(",") === "229,129"); // U+86DB
assert.throws(() => {ms932Encoder.encode("\u86DC")}, {name:"Error",message:"EncodingError U+86DC"});
assert.throws(() => {ms932Encoder.encode("\u86DD")}, {name:"Error",message:"EncodingError U+86DD"});
r = r && ([...ms932Encoder.encode("蛞蛟")].join(",") === "229,124,229,128"); // U+86DE
assert.throws(() => {ms932Encoder.encode("\u86E0")}, {name:"Error",message:"EncodingError U+86E0"});
assert.throws(() => {ms932Encoder.encode("\u86E1")}, {name:"Error",message:"EncodingError U+86E1"});
assert.throws(() => {ms932Encoder.encode("\u86E2")}, {name:"Error",message:"EncodingError U+86E2"});
assert.throws(() => {ms932Encoder.encode("\u86E3")}, {name:"Error",message:"EncodingError U+86E3"});
r = r && ([...ms932Encoder.encode("蛤")].join(",") === "148,184"); // U+86E4
assert.throws(() => {ms932Encoder.encode("\u86E5")}, {name:"Error",message:"EncodingError U+86E5"});
assert.throws(() => {ms932Encoder.encode("\u86E6")}, {name:"Error",message:"EncodingError U+86E6"});
assert.throws(() => {ms932Encoder.encode("\u86E7")}, {name:"Error",message:"EncodingError U+86E7"});
assert.throws(() => {ms932Encoder.encode("\u86E8")}, {name:"Error",message:"EncodingError U+86E8"});
r = r && ([...ms932Encoder.encode("蛩")].join(",") === "229,125"); // U+86E9
assert.throws(() => {ms932Encoder.encode("\u86EA")}, {name:"Error",message:"EncodingError U+86EA"});
assert.throws(() => {ms932Encoder.encode("\u86EB")}, {name:"Error",message:"EncodingError U+86EB"});
r = r && ([...ms932Encoder.encode("蛬蛭蛮蛯")].join(",") === "229,126,149,103,148,216,229,130"); // U+86EC
assert.throws(() => {ms932Encoder.encode("\u86F0")}, {name:"Error",message:"EncodingError U+86F0"});
assert.throws(() => {ms932Encoder.encode("\u86F1")}, {name:"Error",message:"EncodingError U+86F1"});
assert.throws(() => {ms932Encoder.encode("\u86F2")}, {name:"Error",message:"EncodingError U+86F2"});
assert.throws(() => {ms932Encoder.encode("\u86F3")}, {name:"Error",message:"EncodingError U+86F3"});
assert.throws(() => {ms932Encoder.encode("\u86F4")}, {name:"Error",message:"EncodingError U+86F4"});
assert.throws(() => {ms932Encoder.encode("\u86F5")}, {name:"Error",message:"EncodingError U+86F5"});
assert.throws(() => {ms932Encoder.encode("\u86F6")}, {name:"Error",message:"EncodingError U+86F6"});
assert.throws(() => {ms932Encoder.encode("\u86F7")}, {name:"Error",message:"EncodingError U+86F7"});
r = r && ([...ms932Encoder.encode("蛸蛹")].join(",") === "145,251,229,140"); // U+86F8
assert.throws(() => {ms932Encoder.encode("\u86FA")}, {name:"Error",message:"EncodingError U+86FA"});
r = r && ([...ms932Encoder.encode("蛻")].join(",") === "229,136"); // U+86FB
assert.throws(() => {ms932Encoder.encode("\u86FC")}, {name:"Error",message:"EncodingError U+86FC"});
assert.throws(() => {ms932Encoder.encode("\u86FD")}, {name:"Error",message:"EncodingError U+86FD"});
r = r && ([...ms932Encoder.encode("蛾")].join(",") === "137,233"); // U+86FE
assert.throws(() => {ms932Encoder.encode("\u86FF")}, {name:"Error",message:"EncodingError U+86FF"});
r = r && ([...ms932Encoder.encode("蜀")].join(",") === "229,134"); // U+8700
assert.throws(() => {ms932Encoder.encode("\u8701")}, {name:"Error",message:"EncodingError U+8701"});
r = r && ([...ms932Encoder.encode("蜂蜃")].join(",") === "150,73,229,135"); // U+8702
assert.throws(() => {ms932Encoder.encode("\u8704")}, {name:"Error",message:"EncodingError U+8704"});
assert.throws(() => {ms932Encoder.encode("\u8705")}, {name:"Error",message:"EncodingError U+8705"});
r = r && ([...ms932Encoder.encode("蜆")].join(",") === "229,132"); // U+8706
assert.throws(() => {ms932Encoder.encode("\u8707")}, {name:"Error",message:"EncodingError U+8707"});
r = r && ([...ms932Encoder.encode("蜈蜉蜊")].join(",") === "229,133,229,138,229,141"); // U+8708
assert.throws(() => {ms932Encoder.encode("\u870B")}, {name:"Error",message:"EncodingError U+870B"});
assert.throws(() => {ms932Encoder.encode("\u870C")}, {name:"Error",message:"EncodingError U+870C"});
r = r && ([...ms932Encoder.encode("蜍")].join(",") === "229,139"); // U+870D
assert.throws(() => {ms932Encoder.encode("\u870E")}, {name:"Error",message:"EncodingError U+870E"});
assert.throws(() => {ms932Encoder.encode("\u870F")}, {name:"Error",message:"EncodingError U+870F"});
assert.throws(() => {ms932Encoder.encode("\u8710")}, {name:"Error",message:"EncodingError U+8710"});
r = r && ([...ms932Encoder.encode("蜑蜒")].join(",") === "229,137,229,131"); // U+8711
assert.throws(() => {ms932Encoder.encode("\u8713")}, {name:"Error",message:"EncodingError U+8713"});
assert.throws(() => {ms932Encoder.encode("\u8714")}, {name:"Error",message:"EncodingError U+8714"});
assert.throws(() => {ms932Encoder.encode("\u8715")}, {name:"Error",message:"EncodingError U+8715"});
assert.throws(() => {ms932Encoder.encode("\u8716")}, {name:"Error",message:"EncodingError U+8716"});
assert.throws(() => {ms932Encoder.encode("\u8717")}, {name:"Error",message:"EncodingError U+8717"});
r = r && ([...ms932Encoder.encode("蜘")].join(",") === "146,119"); // U+8718
assert.throws(() => {ms932Encoder.encode("\u8719")}, {name:"Error",message:"EncodingError U+8719"});
r = r && ([...ms932Encoder.encode("蜚")].join(",") === "229,148"); // U+871A
assert.throws(() => {ms932Encoder.encode("\u871B")}, {name:"Error",message:"EncodingError U+871B"});
r = r && ([...ms932Encoder.encode("蜜")].join(",") === "150,168"); // U+871C
assert.throws(() => {ms932Encoder.encode("\u871D")}, {name:"Error",message:"EncodingError U+871D"});
assert.throws(() => {ms932Encoder.encode("\u871E")}, {name:"Error",message:"EncodingError U+871E"});
assert.throws(() => {ms932Encoder.encode("\u871F")}, {name:"Error",message:"EncodingError U+871F"});
assert.throws(() => {ms932Encoder.encode("\u8720")}, {name:"Error",message:"EncodingError U+8720"});
assert.throws(() => {ms932Encoder.encode("\u8721")}, {name:"Error",message:"EncodingError U+8721"});
assert.throws(() => {ms932Encoder.encode("\u8722")}, {name:"Error",message:"EncodingError U+8722"});
assert.throws(() => {ms932Encoder.encode("\u8723")}, {name:"Error",message:"EncodingError U+8723"});
assert.throws(() => {ms932Encoder.encode("\u8724")}, {name:"Error",message:"EncodingError U+8724"});
r = r && ([...ms932Encoder.encode("蜥")].join(",") === "229,146"); // U+8725
assert.throws(() => {ms932Encoder.encode("\u8726")}, {name:"Error",message:"EncodingError U+8726"});
assert.throws(() => {ms932Encoder.encode("\u8727")}, {name:"Error",message:"EncodingError U+8727"});
assert.throws(() => {ms932Encoder.encode("\u8728")}, {name:"Error",message:"EncodingError U+8728"});
r = r && ([...ms932Encoder.encode("蜩")].join(",") === "229,147"); // U+8729
assert.throws(() => {ms932Encoder.encode("\u872A")}, {name:"Error",message:"EncodingError U+872A"});
assert.throws(() => {ms932Encoder.encode("\u872B")}, {name:"Error",message:"EncodingError U+872B"});
assert.throws(() => {ms932Encoder.encode("\u872C")}, {name:"Error",message:"EncodingError U+872C"});
assert.throws(() => {ms932Encoder.encode("\u872D")}, {name:"Error",message:"EncodingError U+872D"});
assert.throws(() => {ms932Encoder.encode("\u872E")}, {name:"Error",message:"EncodingError U+872E"});
assert.throws(() => {ms932Encoder.encode("\u872F")}, {name:"Error",message:"EncodingError U+872F"});
assert.throws(() => {ms932Encoder.encode("\u8730")}, {name:"Error",message:"EncodingError U+8730"});
assert.throws(() => {ms932Encoder.encode("\u8731")}, {name:"Error",message:"EncodingError U+8731"});
assert.throws(() => {ms932Encoder.encode("\u8732")}, {name:"Error",message:"EncodingError U+8732"});
assert.throws(() => {ms932Encoder.encode("\u8733")}, {name:"Error",message:"EncodingError U+8733"});
r = r && ([...ms932Encoder.encode("蜴")].join(",") === "229,142"); // U+8734
assert.throws(() => {ms932Encoder.encode("\u8735")}, {name:"Error",message:"EncodingError U+8735"});
assert.throws(() => {ms932Encoder.encode("\u8736")}, {name:"Error",message:"EncodingError U+8736"});
r = r && ([...ms932Encoder.encode("蜷")].join(",") === "229,144"); // U+8737
assert.throws(() => {ms932Encoder.encode("\u8738")}, {name:"Error",message:"EncodingError U+8738"});
assert.throws(() => {ms932Encoder.encode("\u8739")}, {name:"Error",message:"EncodingError U+8739"});
assert.throws(() => {ms932Encoder.encode("\u873A")}, {name:"Error",message:"EncodingError U+873A"});
r = r && ([...ms932Encoder.encode("蜻")].join(",") === "229,145"); // U+873B
assert.throws(() => {ms932Encoder.encode("\u873C")}, {name:"Error",message:"EncodingError U+873C"});
assert.throws(() => {ms932Encoder.encode("\u873D")}, {name:"Error",message:"EncodingError U+873D"});
assert.throws(() => {ms932Encoder.encode("\u873E")}, {name:"Error",message:"EncodingError U+873E"});
r = r && ([...ms932Encoder.encode("蜿")].join(",") === "229,143"); // U+873F
assert.throws(() => {ms932Encoder.encode("\u8740")}, {name:"Error",message:"EncodingError U+8740"});
assert.throws(() => {ms932Encoder.encode("\u8741")}, {name:"Error",message:"EncodingError U+8741"});
assert.throws(() => {ms932Encoder.encode("\u8742")}, {name:"Error",message:"EncodingError U+8742"});
assert.throws(() => {ms932Encoder.encode("\u8743")}, {name:"Error",message:"EncodingError U+8743"});
assert.throws(() => {ms932Encoder.encode("\u8744")}, {name:"Error",message:"EncodingError U+8744"});
assert.throws(() => {ms932Encoder.encode("\u8745")}, {name:"Error",message:"EncodingError U+8745"});
assert.throws(() => {ms932Encoder.encode("\u8746")}, {name:"Error",message:"EncodingError U+8746"});
assert.throws(() => {ms932Encoder.encode("\u8747")}, {name:"Error",message:"EncodingError U+8747"});
assert.throws(() => {ms932Encoder.encode("\u8748")}, {name:"Error",message:"EncodingError U+8748"});
r = r && ([...ms932Encoder.encode("蝉")].join(",") === "144,228"); // U+8749
assert.throws(() => {ms932Encoder.encode("\u874A")}, {name:"Error",message:"EncodingError U+874A"});
r = r && ([...ms932Encoder.encode("蝋蝌")].join(",") === "152,88,229,152"); // U+874B
assert.throws(() => {ms932Encoder.encode("\u874D")}, {name:"Error",message:"EncodingError U+874D"});
r = r && ([...ms932Encoder.encode("蝎")].join(",") === "229,153"); // U+874E
assert.throws(() => {ms932Encoder.encode("\u874F")}, {name:"Error",message:"EncodingError U+874F"});
assert.throws(() => {ms932Encoder.encode("\u8750")}, {name:"Error",message:"EncodingError U+8750"});
assert.throws(() => {ms932Encoder.encode("\u8751")}, {name:"Error",message:"EncodingError U+8751"});
assert.throws(() => {ms932Encoder.encode("\u8752")}, {name:"Error",message:"EncodingError U+8752"});
r = r && ([...ms932Encoder.encode("蝓")].join(",") === "229,159"); // U+8753
assert.throws(() => {ms932Encoder.encode("\u8754")}, {name:"Error",message:"EncodingError U+8754"});
r = r && ([...ms932Encoder.encode("蝕")].join(",") === "144,73"); // U+8755
assert.throws(() => {ms932Encoder.encode("\u8756")}, {name:"Error",message:"EncodingError U+8756"});
r = r && ([...ms932Encoder.encode("蝗")].join(",") === "229,155"); // U+8757
assert.throws(() => {ms932Encoder.encode("\u8758")}, {name:"Error",message:"EncodingError U+8758"});
r = r && ([...ms932Encoder.encode("蝙")].join(",") === "229,158"); // U+8759
assert.throws(() => {ms932Encoder.encode("\u875A")}, {name:"Error",message:"EncodingError U+875A"});
assert.throws(() => {ms932Encoder.encode("\u875B")}, {name:"Error",message:"EncodingError U+875B"});
assert.throws(() => {ms932Encoder.encode("\u875C")}, {name:"Error",message:"EncodingError U+875C"});
assert.throws(() => {ms932Encoder.encode("\u875D")}, {name:"Error",message:"EncodingError U+875D"});
assert.throws(() => {ms932Encoder.encode("\u875E")}, {name:"Error",message:"EncodingError U+875E"});
r = r && ([...ms932Encoder.encode("蝟蝠")].join(",") === "229,150,229,149"); // U+875F
assert.throws(() => {ms932Encoder.encode("\u8761")}, {name:"Error",message:"EncodingError U+8761"});
assert.throws(() => {ms932Encoder.encode("\u8762")}, {name:"Error",message:"EncodingError U+8762"});
r = r && ([...ms932Encoder.encode("蝣")].join(",") === "229,160"); // U+8763
assert.throws(() => {ms932Encoder.encode("\u8764")}, {name:"Error",message:"EncodingError U+8764"});
assert.throws(() => {ms932Encoder.encode("\u8765")}, {name:"Error",message:"EncodingError U+8765"});
r = r && ([...ms932Encoder.encode("蝦")].join(",") === "137,218"); // U+8766
assert.throws(() => {ms932Encoder.encode("\u8767")}, {name:"Error",message:"EncodingError U+8767"});
r = r && ([...ms932Encoder.encode("蝨")].join(",") === "229,156"); // U+8768
assert.throws(() => {ms932Encoder.encode("\u8769")}, {name:"Error",message:"EncodingError U+8769"});
r = r && ([...ms932Encoder.encode("蝪")].join(",") === "229,161"); // U+876A
assert.throws(() => {ms932Encoder.encode("\u876B")}, {name:"Error",message:"EncodingError U+876B"});
assert.throws(() => {ms932Encoder.encode("\u876C")}, {name:"Error",message:"EncodingError U+876C"});
assert.throws(() => {ms932Encoder.encode("\u876D")}, {name:"Error",message:"EncodingError U+876D"});
r = r && ([...ms932Encoder.encode("蝮")].join(",") === "229,157"); // U+876E
assert.throws(() => {ms932Encoder.encode("\u876F")}, {name:"Error",message:"EncodingError U+876F"});
assert.throws(() => {ms932Encoder.encode("\u8770")}, {name:"Error",message:"EncodingError U+8770"});
assert.throws(() => {ms932Encoder.encode("\u8771")}, {name:"Error",message:"EncodingError U+8771"});
assert.throws(() => {ms932Encoder.encode("\u8772")}, {name:"Error",message:"EncodingError U+8772"});
assert.throws(() => {ms932Encoder.encode("\u8773")}, {name:"Error",message:"EncodingError U+8773"});
r = r && ([...ms932Encoder.encode("蝴")].join(",") === "229,154"); // U+8774
assert.throws(() => {ms932Encoder.encode("\u8775")}, {name:"Error",message:"EncodingError U+8775"});
r = r && ([...ms932Encoder.encode("蝶")].join(",") === "146,177"); // U+8776
assert.throws(() => {ms932Encoder.encode("\u8777")}, {name:"Error",message:"EncodingError U+8777"});
r = r && ([...ms932Encoder.encode("蝸")].join(",") === "229,151"); // U+8778
assert.throws(() => {ms932Encoder.encode("\u8779")}, {name:"Error",message:"EncodingError U+8779"});
assert.throws(() => {ms932Encoder.encode("\u877A")}, {name:"Error",message:"EncodingError U+877A"});
assert.throws(() => {ms932Encoder.encode("\u877B")}, {name:"Error",message:"EncodingError U+877B"});
assert.throws(() => {ms932Encoder.encode("\u877C")}, {name:"Error",message:"EncodingError U+877C"});
assert.throws(() => {ms932Encoder.encode("\u877D")}, {name:"Error",message:"EncodingError U+877D"});
assert.throws(() => {ms932Encoder.encode("\u877E")}, {name:"Error",message:"EncodingError U+877E"});
r = r && ([...ms932Encoder.encode("蝿")].join(",") === "148,136"); // U+877F
assert.throws(() => {ms932Encoder.encode("\u8780")}, {name:"Error",message:"EncodingError U+8780"});
assert.throws(() => {ms932Encoder.encode("\u8781")}, {name:"Error",message:"EncodingError U+8781"});
r = r && ([...ms932Encoder.encode("螂")].join(",") === "229,165"); // U+8782
assert.throws(() => {ms932Encoder.encode("\u8783")}, {name:"Error",message:"EncodingError U+8783"});
assert.throws(() => {ms932Encoder.encode("\u8784")}, {name:"Error",message:"EncodingError U+8784"});
assert.throws(() => {ms932Encoder.encode("\u8785")}, {name:"Error",message:"EncodingError U+8785"});
assert.throws(() => {ms932Encoder.encode("\u8786")}, {name:"Error",message:"EncodingError U+8786"});
assert.throws(() => {ms932Encoder.encode("\u8787")}, {name:"Error",message:"EncodingError U+8787"});
assert.throws(() => {ms932Encoder.encode("\u8788")}, {name:"Error",message:"EncodingError U+8788"});
assert.throws(() => {ms932Encoder.encode("\u8789")}, {name:"Error",message:"EncodingError U+8789"});
assert.throws(() => {ms932Encoder.encode("\u878A")}, {name:"Error",message:"EncodingError U+878A"});
assert.throws(() => {ms932Encoder.encode("\u878B")}, {name:"Error",message:"EncodingError U+878B"});
assert.throws(() => {ms932Encoder.encode("\u878C")}, {name:"Error",message:"EncodingError U+878C"});
r = r && ([...ms932Encoder.encode("融")].join(",") === "151,90"); // U+878D
assert.throws(() => {ms932Encoder.encode("\u878E")}, {name:"Error",message:"EncodingError U+878E"});
assert.throws(() => {ms932Encoder.encode("\u878F")}, {name:"Error",message:"EncodingError U+878F"});
assert.throws(() => {ms932Encoder.encode("\u8790")}, {name:"Error",message:"EncodingError U+8790"});
assert.throws(() => {ms932Encoder.encode("\u8791")}, {name:"Error",message:"EncodingError U+8791"});
assert.throws(() => {ms932Encoder.encode("\u8792")}, {name:"Error",message:"EncodingError U+8792"});
assert.throws(() => {ms932Encoder.encode("\u8793")}, {name:"Error",message:"EncodingError U+8793"});
assert.throws(() => {ms932Encoder.encode("\u8794")}, {name:"Error",message:"EncodingError U+8794"});
assert.throws(() => {ms932Encoder.encode("\u8795")}, {name:"Error",message:"EncodingError U+8795"});
assert.throws(() => {ms932Encoder.encode("\u8796")}, {name:"Error",message:"EncodingError U+8796"});
assert.throws(() => {ms932Encoder.encode("\u8797")}, {name:"Error",message:"EncodingError U+8797"});
assert.throws(() => {ms932Encoder.encode("\u8798")}, {name:"Error",message:"EncodingError U+8798"});
assert.throws(() => {ms932Encoder.encode("\u8799")}, {name:"Error",message:"EncodingError U+8799"});
assert.throws(() => {ms932Encoder.encode("\u879A")}, {name:"Error",message:"EncodingError U+879A"});
assert.throws(() => {ms932Encoder.encode("\u879B")}, {name:"Error",message:"EncodingError U+879B"});
assert.throws(() => {ms932Encoder.encode("\u879C")}, {name:"Error",message:"EncodingError U+879C"});
assert.throws(() => {ms932Encoder.encode("\u879D")}, {name:"Error",message:"EncodingError U+879D"});
assert.throws(() => {ms932Encoder.encode("\u879E")}, {name:"Error",message:"EncodingError U+879E"});
r = r && ([...ms932Encoder.encode("螟")].join(",") === "229,164"); // U+879F
assert.throws(() => {ms932Encoder.encode("\u87A0")}, {name:"Error",message:"EncodingError U+87A0"});
assert.throws(() => {ms932Encoder.encode("\u87A1")}, {name:"Error",message:"EncodingError U+87A1"});
r = r && ([...ms932Encoder.encode("螢")].join(",") === "229,163"); // U+87A2
assert.throws(() => {ms932Encoder.encode("\u87A3")}, {name:"Error",message:"EncodingError U+87A3"});
assert.throws(() => {ms932Encoder.encode("\u87A4")}, {name:"Error",message:"EncodingError U+87A4"});
assert.throws(() => {ms932Encoder.encode("\u87A5")}, {name:"Error",message:"EncodingError U+87A5"});
assert.throws(() => {ms932Encoder.encode("\u87A6")}, {name:"Error",message:"EncodingError U+87A6"});
assert.throws(() => {ms932Encoder.encode("\u87A7")}, {name:"Error",message:"EncodingError U+87A7"});
assert.throws(() => {ms932Encoder.encode("\u87A8")}, {name:"Error",message:"EncodingError U+87A8"});
assert.throws(() => {ms932Encoder.encode("\u87A9")}, {name:"Error",message:"EncodingError U+87A9"});
assert.throws(() => {ms932Encoder.encode("\u87AA")}, {name:"Error",message:"EncodingError U+87AA"});
r = r && ([...ms932Encoder.encode("螫")].join(",") === "229,172"); // U+87AB
assert.throws(() => {ms932Encoder.encode("\u87AC")}, {name:"Error",message:"EncodingError U+87AC"});
assert.throws(() => {ms932Encoder.encode("\u87AD")}, {name:"Error",message:"EncodingError U+87AD"});
assert.throws(() => {ms932Encoder.encode("\u87AE")}, {name:"Error",message:"EncodingError U+87AE"});
r = r && ([...ms932Encoder.encode("螯")].join(",") === "229,166"); // U+87AF
assert.throws(() => {ms932Encoder.encode("\u87B0")}, {name:"Error",message:"EncodingError U+87B0"});
assert.throws(() => {ms932Encoder.encode("\u87B1")}, {name:"Error",message:"EncodingError U+87B1"});
assert.throws(() => {ms932Encoder.encode("\u87B2")}, {name:"Error",message:"EncodingError U+87B2"});
r = r && ([...ms932Encoder.encode("螳")].join(",") === "229,174"); // U+87B3
assert.throws(() => {ms932Encoder.encode("\u87B4")}, {name:"Error",message:"EncodingError U+87B4"});
assert.throws(() => {ms932Encoder.encode("\u87B5")}, {name:"Error",message:"EncodingError U+87B5"});
assert.throws(() => {ms932Encoder.encode("\u87B6")}, {name:"Error",message:"EncodingError U+87B6"});
assert.throws(() => {ms932Encoder.encode("\u87B7")}, {name:"Error",message:"EncodingError U+87B7"});
assert.throws(() => {ms932Encoder.encode("\u87B8")}, {name:"Error",message:"EncodingError U+87B8"});
assert.throws(() => {ms932Encoder.encode("\u87B9")}, {name:"Error",message:"EncodingError U+87B9"});
r = r && ([...ms932Encoder.encode("螺螻")].join(",") === "151,134,229,177"); // U+87BA
assert.throws(() => {ms932Encoder.encode("\u87BC")}, {name:"Error",message:"EncodingError U+87BC"});
r = r && ([...ms932Encoder.encode("螽")].join(",") === "229,168"); // U+87BD
assert.throws(() => {ms932Encoder.encode("\u87BE")}, {name:"Error",message:"EncodingError U+87BE"});
assert.throws(() => {ms932Encoder.encode("\u87BF")}, {name:"Error",message:"EncodingError U+87BF"});
r = r && ([...ms932Encoder.encode("蟀")].join(",") === "229,169"); // U+87C0
assert.throws(() => {ms932Encoder.encode("\u87C1")}, {name:"Error",message:"EncodingError U+87C1"});
assert.throws(() => {ms932Encoder.encode("\u87C2")}, {name:"Error",message:"EncodingError U+87C2"});
assert.throws(() => {ms932Encoder.encode("\u87C3")}, {name:"Error",message:"EncodingError U+87C3"});
r = r && ([...ms932Encoder.encode("蟄")].join(",") === "229,173"); // U+87C4
assert.throws(() => {ms932Encoder.encode("\u87C5")}, {name:"Error",message:"EncodingError U+87C5"});
r = r && ([...ms932Encoder.encode("蟆蟇")].join(",") === "229,176,229,175"); // U+87C6
assert.throws(() => {ms932Encoder.encode("\u87C8")}, {name:"Error",message:"EncodingError U+87C8"});
assert.throws(() => {ms932Encoder.encode("\u87C9")}, {name:"Error",message:"EncodingError U+87C9"});
assert.throws(() => {ms932Encoder.encode("\u87CA")}, {name:"Error",message:"EncodingError U+87CA"});
r = r && ([...ms932Encoder.encode("蟋")].join(",") === "229,167"); // U+87CB
assert.throws(() => {ms932Encoder.encode("\u87CC")}, {name:"Error",message:"EncodingError U+87CC"});
assert.throws(() => {ms932Encoder.encode("\u87CD")}, {name:"Error",message:"EncodingError U+87CD"});
assert.throws(() => {ms932Encoder.encode("\u87CE")}, {name:"Error",message:"EncodingError U+87CE"});
assert.throws(() => {ms932Encoder.encode("\u87CF")}, {name:"Error",message:"EncodingError U+87CF"});
r = r && ([...ms932Encoder.encode("蟐")].join(",") === "229,170"); // U+87D0
assert.throws(() => {ms932Encoder.encode("\u87D1")}, {name:"Error",message:"EncodingError U+87D1"});
r = r && ([...ms932Encoder.encode("蟒")].join(",") === "229,187"); // U+87D2
assert.throws(() => {ms932Encoder.encode("\u87D3")}, {name:"Error",message:"EncodingError U+87D3"});
assert.throws(() => {ms932Encoder.encode("\u87D4")}, {name:"Error",message:"EncodingError U+87D4"});
assert.throws(() => {ms932Encoder.encode("\u87D5")}, {name:"Error",message:"EncodingError U+87D5"});
assert.throws(() => {ms932Encoder.encode("\u87D6")}, {name:"Error",message:"EncodingError U+87D6"});
assert.throws(() => {ms932Encoder.encode("\u87D7")}, {name:"Error",message:"EncodingError U+87D7"});
assert.throws(() => {ms932Encoder.encode("\u87D8")}, {name:"Error",message:"EncodingError U+87D8"});
assert.throws(() => {ms932Encoder.encode("\u87D9")}, {name:"Error",message:"EncodingError U+87D9"});
assert.throws(() => {ms932Encoder.encode("\u87DA")}, {name:"Error",message:"EncodingError U+87DA"});
assert.throws(() => {ms932Encoder.encode("\u87DB")}, {name:"Error",message:"EncodingError U+87DB"});
assert.throws(() => {ms932Encoder.encode("\u87DC")}, {name:"Error",message:"EncodingError U+87DC"});
assert.throws(() => {ms932Encoder.encode("\u87DD")}, {name:"Error",message:"EncodingError U+87DD"});
assert.throws(() => {ms932Encoder.encode("\u87DE")}, {name:"Error",message:"EncodingError U+87DE"});
assert.throws(() => {ms932Encoder.encode("\u87DF")}, {name:"Error",message:"EncodingError U+87DF"});
r = r && ([...ms932Encoder.encode("蟠")].join(",") === "229,180"); // U+87E0
assert.throws(() => {ms932Encoder.encode("\u87E1")}, {name:"Error",message:"EncodingError U+87E1"});
assert.throws(() => {ms932Encoder.encode("\u87E2")}, {name:"Error",message:"EncodingError U+87E2"});
assert.throws(() => {ms932Encoder.encode("\u87E3")}, {name:"Error",message:"EncodingError U+87E3"});
assert.throws(() => {ms932Encoder.encode("\u87E4")}, {name:"Error",message:"EncodingError U+87E4"});
assert.throws(() => {ms932Encoder.encode("\u87E5")}, {name:"Error",message:"EncodingError U+87E5"});
assert.throws(() => {ms932Encoder.encode("\u87E6")}, {name:"Error",message:"EncodingError U+87E6"});
assert.throws(() => {ms932Encoder.encode("\u87E7")}, {name:"Error",message:"EncodingError U+87E7"});
assert.throws(() => {ms932Encoder.encode("\u87E8")}, {name:"Error",message:"EncodingError U+87E8"});
assert.throws(() => {ms932Encoder.encode("\u87E9")}, {name:"Error",message:"EncodingError U+87E9"});
assert.throws(() => {ms932Encoder.encode("\u87EA")}, {name:"Error",message:"EncodingError U+87EA"});
assert.throws(() => {ms932Encoder.encode("\u87EB")}, {name:"Error",message:"EncodingError U+87EB"});
assert.throws(() => {ms932Encoder.encode("\u87EC")}, {name:"Error",message:"EncodingError U+87EC"});
assert.throws(() => {ms932Encoder.encode("\u87ED")}, {name:"Error",message:"EncodingError U+87ED"});
assert.throws(() => {ms932Encoder.encode("\u87EE")}, {name:"Error",message:"EncodingError U+87EE"});
r = r && ([...ms932Encoder.encode("蟯")].join(",") === "229,178"); // U+87EF
assert.throws(() => {ms932Encoder.encode("\u87F0")}, {name:"Error",message:"EncodingError U+87F0"});
assert.throws(() => {ms932Encoder.encode("\u87F1")}, {name:"Error",message:"EncodingError U+87F1"});
r = r && ([...ms932Encoder.encode("蟲")].join(",") === "229,179"); // U+87F2
assert.throws(() => {ms932Encoder.encode("\u87F3")}, {name:"Error",message:"EncodingError U+87F3"});
assert.throws(() => {ms932Encoder.encode("\u87F4")}, {name:"Error",message:"EncodingError U+87F4"});
assert.throws(() => {ms932Encoder.encode("\u87F5")}, {name:"Error",message:"EncodingError U+87F5"});
r = r && ([...ms932Encoder.encode("蟶蟷")].join(",") === "229,184,229,185"); // U+87F6
assert.throws(() => {ms932Encoder.encode("\u87F8")}, {name:"Error",message:"EncodingError U+87F8"});
r = r && ([...ms932Encoder.encode("蟹")].join(",") === "138,73"); // U+87F9
assert.throws(() => {ms932Encoder.encode("\u87FA")}, {name:"Error",message:"EncodingError U+87FA"});
r = r && ([...ms932Encoder.encode("蟻")].join(",") === "139,97"); // U+87FB
assert.throws(() => {ms932Encoder.encode("\u87FC")}, {name:"Error",message:"EncodingError U+87FC"});
assert.throws(() => {ms932Encoder.encode("\u87FD")}, {name:"Error",message:"EncodingError U+87FD"});
r = r && ([...ms932Encoder.encode("蟾")].join(",") === "229,183"); // U+87FE
assert.throws(() => {ms932Encoder.encode("\u87FF")}, {name:"Error",message:"EncodingError U+87FF"});

assert.strictEqual(r, true);

  });

});
