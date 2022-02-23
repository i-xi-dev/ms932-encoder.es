import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "../../dist/index.js";

describe("Ms932Encoder.prototype.encode 9", () => {

  it("encode(string) - U+8400-U+87FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u8400")}).to.throw(Error, "EncodingError U+8400");
expect(() => {ms932Encoder.encode("\u8401")}).to.throw(Error, "EncodingError U+8401");
expect(() => {ms932Encoder.encode("\u8402")}).to.throw(Error, "EncodingError U+8402");
r = r && ([...ms932Encoder.encode("萃萄")].join(",") === "228,194,147,184"); // U+8403
expect(() => {ms932Encoder.encode("\u8405")}).to.throw(Error, "EncodingError U+8405");
expect(() => {ms932Encoder.encode("\u8406")}).to.throw(Error, "EncodingError U+8406");
r = r && ([...ms932Encoder.encode("萇")].join(",") === "228,199"); // U+8407
expect(() => {ms932Encoder.encode("\u8408")}).to.throw(Error, "EncodingError U+8408");
expect(() => {ms932Encoder.encode("\u8409")}).to.throw(Error, "EncodingError U+8409");
expect(() => {ms932Encoder.encode("\u840A")}).to.throw(Error, "EncodingError U+840A");
r = r && ([...ms932Encoder.encode("萋萌萍萎")].join(",") === "228,196,150,71,228,202,136,222"); // U+840B
expect(() => {ms932Encoder.encode("\u840F")}).to.throw(Error, "EncodingError U+840F");
expect(() => {ms932Encoder.encode("\u8410")}).to.throw(Error, "EncodingError U+8410");
expect(() => {ms932Encoder.encode("\u8411")}).to.throw(Error, "EncodingError U+8411");
expect(() => {ms932Encoder.encode("\u8412")}).to.throw(Error, "EncodingError U+8412");
r = r && ([...ms932Encoder.encode("萓")].join(",") === "228,190"); // U+8413
expect(() => {ms932Encoder.encode("\u8414")}).to.throw(Error, "EncodingError U+8414");
expect(() => {ms932Encoder.encode("\u8415")}).to.throw(Error, "EncodingError U+8415");
expect(() => {ms932Encoder.encode("\u8416")}).to.throw(Error, "EncodingError U+8416");
expect(() => {ms932Encoder.encode("\u8417")}).to.throw(Error, "EncodingError U+8417");
expect(() => {ms932Encoder.encode("\u8418")}).to.throw(Error, "EncodingError U+8418");
expect(() => {ms932Encoder.encode("\u8419")}).to.throw(Error, "EncodingError U+8419");
expect(() => {ms932Encoder.encode("\u841A")}).to.throw(Error, "EncodingError U+841A");
expect(() => {ms932Encoder.encode("\u841B")}).to.throw(Error, "EncodingError U+841B");
expect(() => {ms932Encoder.encode("\u841C")}).to.throw(Error, "EncodingError U+841C");
expect(() => {ms932Encoder.encode("\u841D")}).to.throw(Error, "EncodingError U+841D");
expect(() => {ms932Encoder.encode("\u841E")}).to.throw(Error, "EncodingError U+841E");
expect(() => {ms932Encoder.encode("\u841F")}).to.throw(Error, "EncodingError U+841F");
r = r && ([...ms932Encoder.encode("萠")].join(",") === "228,204"); // U+8420
expect(() => {ms932Encoder.encode("\u8421")}).to.throw(Error, "EncodingError U+8421");
r = r && ([...ms932Encoder.encode("萢")].join(",") === "228,203"); // U+8422
expect(() => {ms932Encoder.encode("\u8423")}).to.throw(Error, "EncodingError U+8423");
expect(() => {ms932Encoder.encode("\u8424")}).to.throw(Error, "EncodingError U+8424");
expect(() => {ms932Encoder.encode("\u8425")}).to.throw(Error, "EncodingError U+8425");
expect(() => {ms932Encoder.encode("\u8426")}).to.throw(Error, "EncodingError U+8426");
expect(() => {ms932Encoder.encode("\u8427")}).to.throw(Error, "EncodingError U+8427");
expect(() => {ms932Encoder.encode("\u8428")}).to.throw(Error, "EncodingError U+8428");
r = r && ([...ms932Encoder.encode("萩萪")].join(",") === "148,139,228,210"); // U+8429
expect(() => {ms932Encoder.encode("\u842B")}).to.throw(Error, "EncodingError U+842B");
r = r && ([...ms932Encoder.encode("萬")].join(",") === "228,221"); // U+842C
expect(() => {ms932Encoder.encode("\u842D")}).to.throw(Error, "EncodingError U+842D");
expect(() => {ms932Encoder.encode("\u842E")}).to.throw(Error, "EncodingError U+842E");
expect(() => {ms932Encoder.encode("\u842F")}).to.throw(Error, "EncodingError U+842F");
expect(() => {ms932Encoder.encode("\u8430")}).to.throw(Error, "EncodingError U+8430");
r = r && ([...ms932Encoder.encode("萱")].join(",") === "138,158"); // U+8431
expect(() => {ms932Encoder.encode("\u8432")}).to.throw(Error, "EncodingError U+8432");
expect(() => {ms932Encoder.encode("\u8433")}).to.throw(Error, "EncodingError U+8433");
expect(() => {ms932Encoder.encode("\u8434")}).to.throw(Error, "EncodingError U+8434");
r = r && ([...ms932Encoder.encode("萵")].join(",") === "228,224"); // U+8435
expect(() => {ms932Encoder.encode("\u8436")}).to.throw(Error, "EncodingError U+8436");
expect(() => {ms932Encoder.encode("\u8437")}).to.throw(Error, "EncodingError U+8437");
r = r && ([...ms932Encoder.encode("萸")].join(",") === "228,206"); // U+8438
expect(() => {ms932Encoder.encode("\u8439")}).to.throw(Error, "EncodingError U+8439");
expect(() => {ms932Encoder.encode("\u843A")}).to.throw(Error, "EncodingError U+843A");
expect(() => {ms932Encoder.encode("\u843B")}).to.throw(Error, "EncodingError U+843B");
r = r && ([...ms932Encoder.encode("萼落")].join(",") === "228,211,151,142"); // U+843C
expect(() => {ms932Encoder.encode("\u843E")}).to.throw(Error, "EncodingError U+843E");
expect(() => {ms932Encoder.encode("\u843F")}).to.throw(Error, "EncodingError U+843F");
expect(() => {ms932Encoder.encode("\u8440")}).to.throw(Error, "EncodingError U+8440");
expect(() => {ms932Encoder.encode("\u8441")}).to.throw(Error, "EncodingError U+8441");
expect(() => {ms932Encoder.encode("\u8442")}).to.throw(Error, "EncodingError U+8442");
expect(() => {ms932Encoder.encode("\u8443")}).to.throw(Error, "EncodingError U+8443");
expect(() => {ms932Encoder.encode("\u8444")}).to.throw(Error, "EncodingError U+8444");
expect(() => {ms932Encoder.encode("\u8445")}).to.throw(Error, "EncodingError U+8445");
r = r && ([...ms932Encoder.encode("葆")].join(",") === "228,220"); // U+8446
expect(() => {ms932Encoder.encode("\u8447")}).to.throw(Error, "EncodingError U+8447");
r = r && ([...ms932Encoder.encode("葈葉")].join(",") === "251,152,151,116"); // U+8448
expect(() => {ms932Encoder.encode("\u844A")}).to.throw(Error, "EncodingError U+844A");
expect(() => {ms932Encoder.encode("\u844B")}).to.throw(Error, "EncodingError U+844B");
expect(() => {ms932Encoder.encode("\u844C")}).to.throw(Error, "EncodingError U+844C");
expect(() => {ms932Encoder.encode("\u844D")}).to.throw(Error, "EncodingError U+844D");
r = r && ([...ms932Encoder.encode("葎")].join(",") === "151,168"); // U+844E
expect(() => {ms932Encoder.encode("\u844F")}).to.throw(Error, "EncodingError U+844F");
expect(() => {ms932Encoder.encode("\u8450")}).to.throw(Error, "EncodingError U+8450");
expect(() => {ms932Encoder.encode("\u8451")}).to.throw(Error, "EncodingError U+8451");
expect(() => {ms932Encoder.encode("\u8452")}).to.throw(Error, "EncodingError U+8452");
expect(() => {ms932Encoder.encode("\u8453")}).to.throw(Error, "EncodingError U+8453");
expect(() => {ms932Encoder.encode("\u8454")}).to.throw(Error, "EncodingError U+8454");
expect(() => {ms932Encoder.encode("\u8455")}).to.throw(Error, "EncodingError U+8455");
expect(() => {ms932Encoder.encode("\u8456")}).to.throw(Error, "EncodingError U+8456");
r = r && ([...ms932Encoder.encode("著")].join(",") === "146,152"); // U+8457
expect(() => {ms932Encoder.encode("\u8458")}).to.throw(Error, "EncodingError U+8458");
expect(() => {ms932Encoder.encode("\u8459")}).to.throw(Error, "EncodingError U+8459");
expect(() => {ms932Encoder.encode("\u845A")}).to.throw(Error, "EncodingError U+845A");
r = r && ([...ms932Encoder.encode("葛")].join(",") === "138,139"); // U+845B
expect(() => {ms932Encoder.encode("\u845C")}).to.throw(Error, "EncodingError U+845C");
expect(() => {ms932Encoder.encode("\u845D")}).to.throw(Error, "EncodingError U+845D");
expect(() => {ms932Encoder.encode("\u845E")}).to.throw(Error, "EncodingError U+845E");
expect(() => {ms932Encoder.encode("\u845F")}).to.throw(Error, "EncodingError U+845F");
expect(() => {ms932Encoder.encode("\u8460")}).to.throw(Error, "EncodingError U+8460");
r = r && ([...ms932Encoder.encode("葡葢董")].join(",") === "149,146,228,226,147,159"); // U+8461
expect(() => {ms932Encoder.encode("\u8464")}).to.throw(Error, "EncodingError U+8464");
expect(() => {ms932Encoder.encode("\u8465")}).to.throw(Error, "EncodingError U+8465");
r = r && ([...ms932Encoder.encode("葦")].join(",") === "136,175"); // U+8466
expect(() => {ms932Encoder.encode("\u8467")}).to.throw(Error, "EncodingError U+8467");
expect(() => {ms932Encoder.encode("\u8468")}).to.throw(Error, "EncodingError U+8468");
r = r && ([...ms932Encoder.encode("葩")].join(",") === "228,219"); // U+8469
expect(() => {ms932Encoder.encode("\u846A")}).to.throw(Error, "EncodingError U+846A");
r = r && ([...ms932Encoder.encode("葫葬葭葮葯")].join(",") === "228,215,145,146,228,209,228,217,228,222"); // U+846B
expect(() => {ms932Encoder.encode("\u8470")}).to.throw(Error, "EncodingError U+8470");
r = r && ([...ms932Encoder.encode("葱")].join(",") === "148,75"); // U+8471
expect(() => {ms932Encoder.encode("\u8472")}).to.throw(Error, "EncodingError U+8472");
expect(() => {ms932Encoder.encode("\u8473")}).to.throw(Error, "EncodingError U+8473");
expect(() => {ms932Encoder.encode("\u8474")}).to.throw(Error, "EncodingError U+8474");
r = r && ([...ms932Encoder.encode("葵")].join(",") === "136,168"); // U+8475
expect(() => {ms932Encoder.encode("\u8476")}).to.throw(Error, "EncodingError U+8476");
r = r && ([...ms932Encoder.encode("葷")].join(",") === "228,214"); // U+8477
expect(() => {ms932Encoder.encode("\u8478")}).to.throw(Error, "EncodingError U+8478");
r = r && ([...ms932Encoder.encode("葹葺")].join(",") === "228,223,149,152"); // U+8479
expect(() => {ms932Encoder.encode("\u847B")}).to.throw(Error, "EncodingError U+847B");
expect(() => {ms932Encoder.encode("\u847C")}).to.throw(Error, "EncodingError U+847C");
expect(() => {ms932Encoder.encode("\u847D")}).to.throw(Error, "EncodingError U+847D");
expect(() => {ms932Encoder.encode("\u847E")}).to.throw(Error, "EncodingError U+847E");
expect(() => {ms932Encoder.encode("\u847F")}).to.throw(Error, "EncodingError U+847F");
expect(() => {ms932Encoder.encode("\u8480")}).to.throw(Error, "EncodingError U+8480");
expect(() => {ms932Encoder.encode("\u8481")}).to.throw(Error, "EncodingError U+8481");
r = r && ([...ms932Encoder.encode("蒂")].join(",") === "228,218"); // U+8482
expect(() => {ms932Encoder.encode("\u8483")}).to.throw(Error, "EncodingError U+8483");
r = r && ([...ms932Encoder.encode("蒄")].join(",") === "228,213"); // U+8484
expect(() => {ms932Encoder.encode("\u8485")}).to.throw(Error, "EncodingError U+8485");
expect(() => {ms932Encoder.encode("\u8486")}).to.throw(Error, "EncodingError U+8486");
expect(() => {ms932Encoder.encode("\u8487")}).to.throw(Error, "EncodingError U+8487");
expect(() => {ms932Encoder.encode("\u8488")}).to.throw(Error, "EncodingError U+8488");
expect(() => {ms932Encoder.encode("\u8489")}).to.throw(Error, "EncodingError U+8489");
expect(() => {ms932Encoder.encode("\u848A")}).to.throw(Error, "EncodingError U+848A");
r = r && ([...ms932Encoder.encode("蒋")].join(",") === "143,211"); // U+848B
expect(() => {ms932Encoder.encode("\u848C")}).to.throw(Error, "EncodingError U+848C");
expect(() => {ms932Encoder.encode("\u848D")}).to.throw(Error, "EncodingError U+848D");
expect(() => {ms932Encoder.encode("\u848E")}).to.throw(Error, "EncodingError U+848E");
expect(() => {ms932Encoder.encode("\u848F")}).to.throw(Error, "EncodingError U+848F");
r = r && ([...ms932Encoder.encode("蒐")].join(",") === "143,78"); // U+8490
expect(() => {ms932Encoder.encode("\u8491")}).to.throw(Error, "EncodingError U+8491");
expect(() => {ms932Encoder.encode("\u8492")}).to.throw(Error, "EncodingError U+8492");
expect(() => {ms932Encoder.encode("\u8493")}).to.throw(Error, "EncodingError U+8493");
r = r && ([...ms932Encoder.encode("蒔")].join(",") === "142,170"); // U+8494
expect(() => {ms932Encoder.encode("\u8495")}).to.throw(Error, "EncodingError U+8495");
expect(() => {ms932Encoder.encode("\u8496")}).to.throw(Error, "EncodingError U+8496");
expect(() => {ms932Encoder.encode("\u8497")}).to.throw(Error, "EncodingError U+8497");
expect(() => {ms932Encoder.encode("\u8498")}).to.throw(Error, "EncodingError U+8498");
r = r && ([...ms932Encoder.encode("蒙")].join(",") === "150,214"); // U+8499
expect(() => {ms932Encoder.encode("\u849A")}).to.throw(Error, "EncodingError U+849A");
expect(() => {ms932Encoder.encode("\u849B")}).to.throw(Error, "EncodingError U+849B");
r = r && ([...ms932Encoder.encode("蒜")].join(",") === "149,102"); // U+849C
expect(() => {ms932Encoder.encode("\u849D")}).to.throw(Error, "EncodingError U+849D");
expect(() => {ms932Encoder.encode("\u849E")}).to.throw(Error, "EncodingError U+849E");
r = r && ([...ms932Encoder.encode("蒟")].join(",") === "228,229"); // U+849F
expect(() => {ms932Encoder.encode("\u84A0")}).to.throw(Error, "EncodingError U+84A0");
r = r && ([...ms932Encoder.encode("蒡")].join(",") === "228,238"); // U+84A1
expect(() => {ms932Encoder.encode("\u84A2")}).to.throw(Error, "EncodingError U+84A2");
expect(() => {ms932Encoder.encode("\u84A3")}).to.throw(Error, "EncodingError U+84A3");
expect(() => {ms932Encoder.encode("\u84A4")}).to.throw(Error, "EncodingError U+84A4");
expect(() => {ms932Encoder.encode("\u84A5")}).to.throw(Error, "EncodingError U+84A5");
expect(() => {ms932Encoder.encode("\u84A6")}).to.throw(Error, "EncodingError U+84A6");
expect(() => {ms932Encoder.encode("\u84A7")}).to.throw(Error, "EncodingError U+84A7");
expect(() => {ms932Encoder.encode("\u84A8")}).to.throw(Error, "EncodingError U+84A8");
expect(() => {ms932Encoder.encode("\u84A9")}).to.throw(Error, "EncodingError U+84A9");
expect(() => {ms932Encoder.encode("\u84AA")}).to.throw(Error, "EncodingError U+84AA");
expect(() => {ms932Encoder.encode("\u84AB")}).to.throw(Error, "EncodingError U+84AB");
expect(() => {ms932Encoder.encode("\u84AC")}).to.throw(Error, "EncodingError U+84AC");
r = r && ([...ms932Encoder.encode("蒭")].join(",") === "228,216"); // U+84AD
expect(() => {ms932Encoder.encode("\u84AE")}).to.throw(Error, "EncodingError U+84AE");
expect(() => {ms932Encoder.encode("\u84AF")}).to.throw(Error, "EncodingError U+84AF");
expect(() => {ms932Encoder.encode("\u84B0")}).to.throw(Error, "EncodingError U+84B0");
expect(() => {ms932Encoder.encode("\u84B1")}).to.throw(Error, "EncodingError U+84B1");
r = r && ([...ms932Encoder.encode("蒲")].join(",") === "138,151"); // U+84B2
expect(() => {ms932Encoder.encode("\u84B3")}).to.throw(Error, "EncodingError U+84B3");
r = r && ([...ms932Encoder.encode("蒴")].join(",") === "251,153"); // U+84B4
expect(() => {ms932Encoder.encode("\u84B5")}).to.throw(Error, "EncodingError U+84B5");
expect(() => {ms932Encoder.encode("\u84B6")}).to.throw(Error, "EncodingError U+84B6");
expect(() => {ms932Encoder.encode("\u84B7")}).to.throw(Error, "EncodingError U+84B7");
r = r && ([...ms932Encoder.encode("蒸蒹")].join(",") === "143,246,228,227"); // U+84B8
expect(() => {ms932Encoder.encode("\u84BA")}).to.throw(Error, "EncodingError U+84BA");
r = r && ([...ms932Encoder.encode("蒻蒼")].join(",") === "228,232,145,147"); // U+84BB
expect(() => {ms932Encoder.encode("\u84BD")}).to.throw(Error, "EncodingError U+84BD");
expect(() => {ms932Encoder.encode("\u84BE")}).to.throw(Error, "EncodingError U+84BE");
r = r && ([...ms932Encoder.encode("蒿")].join(",") === "228,228"); // U+84BF
expect(() => {ms932Encoder.encode("\u84C0")}).to.throw(Error, "EncodingError U+84C0");
r = r && ([...ms932Encoder.encode("蓁")].join(",") === "228,235"); // U+84C1
expect(() => {ms932Encoder.encode("\u84C2")}).to.throw(Error, "EncodingError U+84C2");
expect(() => {ms932Encoder.encode("\u84C3")}).to.throw(Error, "EncodingError U+84C3");
r = r && ([...ms932Encoder.encode("蓄")].join(",") === "146,126"); // U+84C4
expect(() => {ms932Encoder.encode("\u84C5")}).to.throw(Error, "EncodingError U+84C5");
r = r && ([...ms932Encoder.encode("蓆")].join(",") === "228,236"); // U+84C6
expect(() => {ms932Encoder.encode("\u84C7")}).to.throw(Error, "EncodingError U+84C7");
expect(() => {ms932Encoder.encode("\u84C8")}).to.throw(Error, "EncodingError U+84C8");
r = r && ([...ms932Encoder.encode("蓉蓊蓋")].join(",") === "151,117,228,225,138,87"); // U+84C9
expect(() => {ms932Encoder.encode("\u84CC")}).to.throw(Error, "EncodingError U+84CC");
r = r && ([...ms932Encoder.encode("蓍")].join(",") === "228,231"); // U+84CD
expect(() => {ms932Encoder.encode("\u84CE")}).to.throw(Error, "EncodingError U+84CE");
expect(() => {ms932Encoder.encode("\u84CF")}).to.throw(Error, "EncodingError U+84CF");
r = r && ([...ms932Encoder.encode("蓐蓑")].join(",") === "228,234,150,170"); // U+84D0
expect(() => {ms932Encoder.encode("\u84D2")}).to.throw(Error, "EncodingError U+84D2");
expect(() => {ms932Encoder.encode("\u84D3")}).to.throw(Error, "EncodingError U+84D3");
expect(() => {ms932Encoder.encode("\u84D4")}).to.throw(Error, "EncodingError U+84D4");
expect(() => {ms932Encoder.encode("\u84D5")}).to.throw(Error, "EncodingError U+84D5");
r = r && ([...ms932Encoder.encode("蓖")].join(",") === "228,237"); // U+84D6
expect(() => {ms932Encoder.encode("\u84D7")}).to.throw(Error, "EncodingError U+84D7");
expect(() => {ms932Encoder.encode("\u84D8")}).to.throw(Error, "EncodingError U+84D8");
r = r && ([...ms932Encoder.encode("蓙蓚")].join(",") === "228,230,228,233"); // U+84D9
expect(() => {ms932Encoder.encode("\u84DB")}).to.throw(Error, "EncodingError U+84DB");
r = r && ([...ms932Encoder.encode("蓜")].join(",") === "250,96"); // U+84DC
expect(() => {ms932Encoder.encode("\u84DD")}).to.throw(Error, "EncodingError U+84DD");
expect(() => {ms932Encoder.encode("\u84DE")}).to.throw(Error, "EncodingError U+84DE");
expect(() => {ms932Encoder.encode("\u84DF")}).to.throw(Error, "EncodingError U+84DF");
expect(() => {ms932Encoder.encode("\u84E0")}).to.throw(Error, "EncodingError U+84E0");
expect(() => {ms932Encoder.encode("\u84E1")}).to.throw(Error, "EncodingError U+84E1");
expect(() => {ms932Encoder.encode("\u84E2")}).to.throw(Error, "EncodingError U+84E2");
expect(() => {ms932Encoder.encode("\u84E3")}).to.throw(Error, "EncodingError U+84E3");
expect(() => {ms932Encoder.encode("\u84E4")}).to.throw(Error, "EncodingError U+84E4");
expect(() => {ms932Encoder.encode("\u84E5")}).to.throw(Error, "EncodingError U+84E5");
expect(() => {ms932Encoder.encode("\u84E6")}).to.throw(Error, "EncodingError U+84E6");
expect(() => {ms932Encoder.encode("\u84E7")}).to.throw(Error, "EncodingError U+84E7");
expect(() => {ms932Encoder.encode("\u84E8")}).to.throw(Error, "EncodingError U+84E8");
expect(() => {ms932Encoder.encode("\u84E9")}).to.throw(Error, "EncodingError U+84E9");
expect(() => {ms932Encoder.encode("\u84EA")}).to.throw(Error, "EncodingError U+84EA");
expect(() => {ms932Encoder.encode("\u84EB")}).to.throw(Error, "EncodingError U+84EB");
r = r && ([...ms932Encoder.encode("蓬")].join(",") === "150,72"); // U+84EC
expect(() => {ms932Encoder.encode("\u84ED")}).to.throw(Error, "EncodingError U+84ED");
r = r && ([...ms932Encoder.encode("蓮")].join(",") === "152,64"); // U+84EE
expect(() => {ms932Encoder.encode("\u84EF")}).to.throw(Error, "EncodingError U+84EF");
expect(() => {ms932Encoder.encode("\u84F0")}).to.throw(Error, "EncodingError U+84F0");
expect(() => {ms932Encoder.encode("\u84F1")}).to.throw(Error, "EncodingError U+84F1");
expect(() => {ms932Encoder.encode("\u84F2")}).to.throw(Error, "EncodingError U+84F2");
expect(() => {ms932Encoder.encode("\u84F3")}).to.throw(Error, "EncodingError U+84F3");
r = r && ([...ms932Encoder.encode("蓴")].join(",") === "228,241"); // U+84F4
expect(() => {ms932Encoder.encode("\u84F5")}).to.throw(Error, "EncodingError U+84F5");
expect(() => {ms932Encoder.encode("\u84F6")}).to.throw(Error, "EncodingError U+84F6");
expect(() => {ms932Encoder.encode("\u84F7")}).to.throw(Error, "EncodingError U+84F7");
expect(() => {ms932Encoder.encode("\u84F8")}).to.throw(Error, "EncodingError U+84F8");
expect(() => {ms932Encoder.encode("\u84F9")}).to.throw(Error, "EncodingError U+84F9");
expect(() => {ms932Encoder.encode("\u84FA")}).to.throw(Error, "EncodingError U+84FA");
expect(() => {ms932Encoder.encode("\u84FB")}).to.throw(Error, "EncodingError U+84FB");
r = r && ([...ms932Encoder.encode("蓼")].join(",") === "228,248"); // U+84FC
expect(() => {ms932Encoder.encode("\u84FD")}).to.throw(Error, "EncodingError U+84FD");
expect(() => {ms932Encoder.encode("\u84FE")}).to.throw(Error, "EncodingError U+84FE");
r = r && ([...ms932Encoder.encode("蓿蔀")].join(",") === "228,240,142,193"); // U+84FF
expect(() => {ms932Encoder.encode("\u8501")}).to.throw(Error, "EncodingError U+8501");
expect(() => {ms932Encoder.encode("\u8502")}).to.throw(Error, "EncodingError U+8502");
expect(() => {ms932Encoder.encode("\u8503")}).to.throw(Error, "EncodingError U+8503");
expect(() => {ms932Encoder.encode("\u8504")}).to.throw(Error, "EncodingError U+8504");
expect(() => {ms932Encoder.encode("\u8505")}).to.throw(Error, "EncodingError U+8505");
r = r && ([...ms932Encoder.encode("蔆")].join(",") === "228,207"); // U+8506
expect(() => {ms932Encoder.encode("\u8507")}).to.throw(Error, "EncodingError U+8507");
expect(() => {ms932Encoder.encode("\u8508")}).to.throw(Error, "EncodingError U+8508");
expect(() => {ms932Encoder.encode("\u8509")}).to.throw(Error, "EncodingError U+8509");
expect(() => {ms932Encoder.encode("\u850A")}).to.throw(Error, "EncodingError U+850A");
expect(() => {ms932Encoder.encode("\u850B")}).to.throw(Error, "EncodingError U+850B");
expect(() => {ms932Encoder.encode("\u850C")}).to.throw(Error, "EncodingError U+850C");
expect(() => {ms932Encoder.encode("\u850D")}).to.throw(Error, "EncodingError U+850D");
expect(() => {ms932Encoder.encode("\u850E")}).to.throw(Error, "EncodingError U+850E");
expect(() => {ms932Encoder.encode("\u850F")}).to.throw(Error, "EncodingError U+850F");
expect(() => {ms932Encoder.encode("\u8510")}).to.throw(Error, "EncodingError U+8510");
r = r && ([...ms932Encoder.encode("蔑")].join(",") === "149,204"); // U+8511
expect(() => {ms932Encoder.encode("\u8512")}).to.throw(Error, "EncodingError U+8512");
r = r && ([...ms932Encoder.encode("蔓蔔蔕")].join(",") === "150,160,228,247,228,246"); // U+8513
expect(() => {ms932Encoder.encode("\u8516")}).to.throw(Error, "EncodingError U+8516");
r = r && ([...ms932Encoder.encode("蔗蔘")].join(",") === "228,242,228,243"); // U+8517
expect(() => {ms932Encoder.encode("\u8519")}).to.throw(Error, "EncodingError U+8519");
r = r && ([...ms932Encoder.encode("蔚")].join(",") === "137,85"); // U+851A
expect(() => {ms932Encoder.encode("\u851B")}).to.throw(Error, "EncodingError U+851B");
expect(() => {ms932Encoder.encode("\u851C")}).to.throw(Error, "EncodingError U+851C");
expect(() => {ms932Encoder.encode("\u851D")}).to.throw(Error, "EncodingError U+851D");
expect(() => {ms932Encoder.encode("\u851E")}).to.throw(Error, "EncodingError U+851E");
r = r && ([...ms932Encoder.encode("蔟")].join(",") === "228,245"); // U+851F
expect(() => {ms932Encoder.encode("\u8520")}).to.throw(Error, "EncodingError U+8520");
r = r && ([...ms932Encoder.encode("蔡")].join(",") === "228,239"); // U+8521
expect(() => {ms932Encoder.encode("\u8522")}).to.throw(Error, "EncodingError U+8522");
expect(() => {ms932Encoder.encode("\u8523")}).to.throw(Error, "EncodingError U+8523");
expect(() => {ms932Encoder.encode("\u8524")}).to.throw(Error, "EncodingError U+8524");
expect(() => {ms932Encoder.encode("\u8525")}).to.throw(Error, "EncodingError U+8525");
r = r && ([...ms932Encoder.encode("蔦")].join(",") === "146,211"); // U+8526
expect(() => {ms932Encoder.encode("\u8527")}).to.throw(Error, "EncodingError U+8527");
expect(() => {ms932Encoder.encode("\u8528")}).to.throw(Error, "EncodingError U+8528");
expect(() => {ms932Encoder.encode("\u8529")}).to.throw(Error, "EncodingError U+8529");
expect(() => {ms932Encoder.encode("\u852A")}).to.throw(Error, "EncodingError U+852A");
expect(() => {ms932Encoder.encode("\u852B")}).to.throw(Error, "EncodingError U+852B");
r = r && ([...ms932Encoder.encode("蔬蔭")].join(",") === "228,244,136,252"); // U+852C
expect(() => {ms932Encoder.encode("\u852E")}).to.throw(Error, "EncodingError U+852E");
expect(() => {ms932Encoder.encode("\u852F")}).to.throw(Error, "EncodingError U+852F");
expect(() => {ms932Encoder.encode("\u8530")}).to.throw(Error, "EncodingError U+8530");
expect(() => {ms932Encoder.encode("\u8531")}).to.throw(Error, "EncodingError U+8531");
expect(() => {ms932Encoder.encode("\u8532")}).to.throw(Error, "EncodingError U+8532");
expect(() => {ms932Encoder.encode("\u8533")}).to.throw(Error, "EncodingError U+8533");
expect(() => {ms932Encoder.encode("\u8534")}).to.throw(Error, "EncodingError U+8534");
r = r && ([...ms932Encoder.encode("蔵")].join(",") === "145,160"); // U+8535
expect(() => {ms932Encoder.encode("\u8536")}).to.throw(Error, "EncodingError U+8536");
expect(() => {ms932Encoder.encode("\u8537")}).to.throw(Error, "EncodingError U+8537");
expect(() => {ms932Encoder.encode("\u8538")}).to.throw(Error, "EncodingError U+8538");
expect(() => {ms932Encoder.encode("\u8539")}).to.throw(Error, "EncodingError U+8539");
expect(() => {ms932Encoder.encode("\u853A")}).to.throw(Error, "EncodingError U+853A");
expect(() => {ms932Encoder.encode("\u853B")}).to.throw(Error, "EncodingError U+853B");
expect(() => {ms932Encoder.encode("\u853C")}).to.throw(Error, "EncodingError U+853C");
r = r && ([...ms932Encoder.encode("蔽")].join(",") === "149,193"); // U+853D
expect(() => {ms932Encoder.encode("\u853E")}).to.throw(Error, "EncodingError U+853E");
expect(() => {ms932Encoder.encode("\u853F")}).to.throw(Error, "EncodingError U+853F");
r = r && ([...ms932Encoder.encode("蕀蕁")].join(",") === "228,249,229,64"); // U+8540
expect(() => {ms932Encoder.encode("\u8542")}).to.throw(Error, "EncodingError U+8542");
r = r && ([...ms932Encoder.encode("蕃")].join(",") === "148,215"); // U+8543
expect(() => {ms932Encoder.encode("\u8544")}).to.throw(Error, "EncodingError U+8544");
expect(() => {ms932Encoder.encode("\u8545")}).to.throw(Error, "EncodingError U+8545");
expect(() => {ms932Encoder.encode("\u8546")}).to.throw(Error, "EncodingError U+8546");
expect(() => {ms932Encoder.encode("\u8547")}).to.throw(Error, "EncodingError U+8547");
r = r && ([...ms932Encoder.encode("蕈蕉蕊蕋")].join(",") === "228,252,143,212,142,199,229,66"); // U+8548
expect(() => {ms932Encoder.encode("\u854C")}).to.throw(Error, "EncodingError U+854C");
expect(() => {ms932Encoder.encode("\u854D")}).to.throw(Error, "EncodingError U+854D");
r = r && ([...ms932Encoder.encode("蕎")].join(",") === "139,188"); // U+854E
expect(() => {ms932Encoder.encode("\u854F")}).to.throw(Error, "EncodingError U+854F");
expect(() => {ms932Encoder.encode("\u8550")}).to.throw(Error, "EncodingError U+8550");
expect(() => {ms932Encoder.encode("\u8551")}).to.throw(Error, "EncodingError U+8551");
expect(() => {ms932Encoder.encode("\u8552")}).to.throw(Error, "EncodingError U+8552");
r = r && ([...ms932Encoder.encode("蕓")].join(",") === "251,154"); // U+8553
expect(() => {ms932Encoder.encode("\u8554")}).to.throw(Error, "EncodingError U+8554");
r = r && ([...ms932Encoder.encode("蕕")].join(",") === "229,67"); // U+8555
expect(() => {ms932Encoder.encode("\u8556")}).to.throw(Error, "EncodingError U+8556");
r = r && ([...ms932Encoder.encode("蕗蕘蕙蕚")].join(",") === "149,153,228,251,251,155,228,212"); // U+8557
expect(() => {ms932Encoder.encode("\u855B")}).to.throw(Error, "EncodingError U+855B");
expect(() => {ms932Encoder.encode("\u855C")}).to.throw(Error, "EncodingError U+855C");
expect(() => {ms932Encoder.encode("\u855D")}).to.throw(Error, "EncodingError U+855D");
expect(() => {ms932Encoder.encode("\u855E")}).to.throw(Error, "EncodingError U+855E");
expect(() => {ms932Encoder.encode("\u855F")}).to.throw(Error, "EncodingError U+855F");
expect(() => {ms932Encoder.encode("\u8560")}).to.throw(Error, "EncodingError U+8560");
expect(() => {ms932Encoder.encode("\u8561")}).to.throw(Error, "EncodingError U+8561");
expect(() => {ms932Encoder.encode("\u8562")}).to.throw(Error, "EncodingError U+8562");
r = r && ([...ms932Encoder.encode("蕣")].join(",") === "228,250"); // U+8563
expect(() => {ms932Encoder.encode("\u8564")}).to.throw(Error, "EncodingError U+8564");
expect(() => {ms932Encoder.encode("\u8565")}).to.throw(Error, "EncodingError U+8565");
expect(() => {ms932Encoder.encode("\u8566")}).to.throw(Error, "EncodingError U+8566");
expect(() => {ms932Encoder.encode("\u8567")}).to.throw(Error, "EncodingError U+8567");
r = r && ([...ms932Encoder.encode("蕨蕩蕪蕫")].join(",") === "152,110,147,160,149,147,251,156"); // U+8568
expect(() => {ms932Encoder.encode("\u856C")}).to.throw(Error, "EncodingError U+856C");
r = r && ([...ms932Encoder.encode("蕭")].join(",") === "229,74"); // U+856D
expect(() => {ms932Encoder.encode("\u856E")}).to.throw(Error, "EncodingError U+856E");
expect(() => {ms932Encoder.encode("\u856F")}).to.throw(Error, "EncodingError U+856F");
expect(() => {ms932Encoder.encode("\u8570")}).to.throw(Error, "EncodingError U+8570");
expect(() => {ms932Encoder.encode("\u8571")}).to.throw(Error, "EncodingError U+8571");
expect(() => {ms932Encoder.encode("\u8572")}).to.throw(Error, "EncodingError U+8572");
expect(() => {ms932Encoder.encode("\u8573")}).to.throw(Error, "EncodingError U+8573");
expect(() => {ms932Encoder.encode("\u8574")}).to.throw(Error, "EncodingError U+8574");
expect(() => {ms932Encoder.encode("\u8575")}).to.throw(Error, "EncodingError U+8575");
expect(() => {ms932Encoder.encode("\u8576")}).to.throw(Error, "EncodingError U+8576");
r = r && ([...ms932Encoder.encode("蕷")].join(",") === "229,80"); // U+8577
expect(() => {ms932Encoder.encode("\u8578")}).to.throw(Error, "EncodingError U+8578");
expect(() => {ms932Encoder.encode("\u8579")}).to.throw(Error, "EncodingError U+8579");
expect(() => {ms932Encoder.encode("\u857A")}).to.throw(Error, "EncodingError U+857A");
expect(() => {ms932Encoder.encode("\u857B")}).to.throw(Error, "EncodingError U+857B");
expect(() => {ms932Encoder.encode("\u857C")}).to.throw(Error, "EncodingError U+857C");
expect(() => {ms932Encoder.encode("\u857D")}).to.throw(Error, "EncodingError U+857D");
r = r && ([...ms932Encoder.encode("蕾")].join(",") === "229,81"); // U+857E
expect(() => {ms932Encoder.encode("\u857F")}).to.throw(Error, "EncodingError U+857F");
r = r && ([...ms932Encoder.encode("薀")].join(",") === "229,68"); // U+8580
expect(() => {ms932Encoder.encode("\u8581")}).to.throw(Error, "EncodingError U+8581");
expect(() => {ms932Encoder.encode("\u8582")}).to.throw(Error, "EncodingError U+8582");
expect(() => {ms932Encoder.encode("\u8583")}).to.throw(Error, "EncodingError U+8583");
r = r && ([...ms932Encoder.encode("薄")].join(",") === "148,150"); // U+8584
expect(() => {ms932Encoder.encode("\u8585")}).to.throw(Error, "EncodingError U+8585");
expect(() => {ms932Encoder.encode("\u8586")}).to.throw(Error, "EncodingError U+8586");
r = r && ([...ms932Encoder.encode("薇薈")].join(",") === "229,78,229,70"); // U+8587
expect(() => {ms932Encoder.encode("\u8589")}).to.throw(Error, "EncodingError U+8589");
r = r && ([...ms932Encoder.encode("薊")].join(",") === "229,72"); // U+858A
expect(() => {ms932Encoder.encode("\u858B")}).to.throw(Error, "EncodingError U+858B");
expect(() => {ms932Encoder.encode("\u858C")}).to.throw(Error, "EncodingError U+858C");
expect(() => {ms932Encoder.encode("\u858D")}).to.throw(Error, "EncodingError U+858D");
expect(() => {ms932Encoder.encode("\u858E")}).to.throw(Error, "EncodingError U+858E");
expect(() => {ms932Encoder.encode("\u858F")}).to.throw(Error, "EncodingError U+858F");
r = r && ([...ms932Encoder.encode("薐薑")].join(",") === "229,82,229,71"); // U+8590
expect(() => {ms932Encoder.encode("\u8592")}).to.throw(Error, "EncodingError U+8592");
expect(() => {ms932Encoder.encode("\u8593")}).to.throw(Error, "EncodingError U+8593");
r = r && ([...ms932Encoder.encode("薔")].join(",") === "229,75"); // U+8594
expect(() => {ms932Encoder.encode("\u8595")}).to.throw(Error, "EncodingError U+8595");
expect(() => {ms932Encoder.encode("\u8596")}).to.throw(Error, "EncodingError U+8596");
r = r && ([...ms932Encoder.encode("薗")].join(",") === "137,146"); // U+8597
expect(() => {ms932Encoder.encode("\u8598")}).to.throw(Error, "EncodingError U+8598");
r = r && ([...ms932Encoder.encode("薙")].join(",") === "147,227"); // U+8599
expect(() => {ms932Encoder.encode("\u859A")}).to.throw(Error, "EncodingError U+859A");
r = r && ([...ms932Encoder.encode("薛薜")].join(",") === "229,76,229,79"); // U+859B
expect(() => {ms932Encoder.encode("\u859D")}).to.throw(Error, "EncodingError U+859D");
expect(() => {ms932Encoder.encode("\u859E")}).to.throw(Error, "EncodingError U+859E");
expect(() => {ms932Encoder.encode("\u859F")}).to.throw(Error, "EncodingError U+859F");
expect(() => {ms932Encoder.encode("\u85A0")}).to.throw(Error, "EncodingError U+85A0");
expect(() => {ms932Encoder.encode("\u85A1")}).to.throw(Error, "EncodingError U+85A1");
expect(() => {ms932Encoder.encode("\u85A2")}).to.throw(Error, "EncodingError U+85A2");
expect(() => {ms932Encoder.encode("\u85A3")}).to.throw(Error, "EncodingError U+85A3");
r = r && ([...ms932Encoder.encode("薤")].join(",") === "229,69"); // U+85A4
expect(() => {ms932Encoder.encode("\u85A5")}).to.throw(Error, "EncodingError U+85A5");
r = r && ([...ms932Encoder.encode("薦")].join(",") === "145,69"); // U+85A6
expect(() => {ms932Encoder.encode("\u85A7")}).to.throw(Error, "EncodingError U+85A7");
r = r && ([...ms932Encoder.encode("薨薩薪薫薬")].join(",") === "229,73,142,70,144,100,140,79,150,242"); // U+85A8
expect(() => {ms932Encoder.encode("\u85AD")}).to.throw(Error, "EncodingError U+85AD");
r = r && ([...ms932Encoder.encode("薮薯薰")].join(",") === "150,247,143,146,251,158"); // U+85AE
expect(() => {ms932Encoder.encode("\u85B1")}).to.throw(Error, "EncodingError U+85B1");
expect(() => {ms932Encoder.encode("\u85B2")}).to.throw(Error, "EncodingError U+85B2");
expect(() => {ms932Encoder.encode("\u85B3")}).to.throw(Error, "EncodingError U+85B3");
expect(() => {ms932Encoder.encode("\u85B4")}).to.throw(Error, "EncodingError U+85B4");
expect(() => {ms932Encoder.encode("\u85B5")}).to.throw(Error, "EncodingError U+85B5");
expect(() => {ms932Encoder.encode("\u85B6")}).to.throw(Error, "EncodingError U+85B6");
expect(() => {ms932Encoder.encode("\u85B7")}).to.throw(Error, "EncodingError U+85B7");
expect(() => {ms932Encoder.encode("\u85B8")}).to.throw(Error, "EncodingError U+85B8");
r = r && ([...ms932Encoder.encode("薹薺")].join(",") === "229,86,229,84"); // U+85B9
expect(() => {ms932Encoder.encode("\u85BB")}).to.throw(Error, "EncodingError U+85BB");
expect(() => {ms932Encoder.encode("\u85BC")}).to.throw(Error, "EncodingError U+85BC");
expect(() => {ms932Encoder.encode("\u85BD")}).to.throw(Error, "EncodingError U+85BD");
expect(() => {ms932Encoder.encode("\u85BE")}).to.throw(Error, "EncodingError U+85BE");
expect(() => {ms932Encoder.encode("\u85BF")}).to.throw(Error, "EncodingError U+85BF");
expect(() => {ms932Encoder.encode("\u85C0")}).to.throw(Error, "EncodingError U+85C0");
r = r && ([...ms932Encoder.encode("藁")].join(",") === "152,109"); // U+85C1
expect(() => {ms932Encoder.encode("\u85C2")}).to.throw(Error, "EncodingError U+85C2");
expect(() => {ms932Encoder.encode("\u85C3")}).to.throw(Error, "EncodingError U+85C3");
expect(() => {ms932Encoder.encode("\u85C4")}).to.throw(Error, "EncodingError U+85C4");
expect(() => {ms932Encoder.encode("\u85C5")}).to.throw(Error, "EncodingError U+85C5");
expect(() => {ms932Encoder.encode("\u85C6")}).to.throw(Error, "EncodingError U+85C6");
expect(() => {ms932Encoder.encode("\u85C7")}).to.throw(Error, "EncodingError U+85C7");
expect(() => {ms932Encoder.encode("\u85C8")}).to.throw(Error, "EncodingError U+85C8");
r = r && ([...ms932Encoder.encode("藉")].join(",") === "229,83"); // U+85C9
expect(() => {ms932Encoder.encode("\u85CA")}).to.throw(Error, "EncodingError U+85CA");
expect(() => {ms932Encoder.encode("\u85CB")}).to.throw(Error, "EncodingError U+85CB");
expect(() => {ms932Encoder.encode("\u85CC")}).to.throw(Error, "EncodingError U+85CC");
r = r && ([...ms932Encoder.encode("藍")].join(",") === "151,149"); // U+85CD
expect(() => {ms932Encoder.encode("\u85CE")}).to.throw(Error, "EncodingError U+85CE");
r = r && ([...ms932Encoder.encode("藏藐")].join(",") === "229,85,229,87"); // U+85CF
expect(() => {ms932Encoder.encode("\u85D1")}).to.throw(Error, "EncodingError U+85D1");
expect(() => {ms932Encoder.encode("\u85D2")}).to.throw(Error, "EncodingError U+85D2");
expect(() => {ms932Encoder.encode("\u85D3")}).to.throw(Error, "EncodingError U+85D3");
expect(() => {ms932Encoder.encode("\u85D4")}).to.throw(Error, "EncodingError U+85D4");
r = r && ([...ms932Encoder.encode("藕")].join(",") === "229,88"); // U+85D5
expect(() => {ms932Encoder.encode("\u85D6")}).to.throw(Error, "EncodingError U+85D6");
expect(() => {ms932Encoder.encode("\u85D7")}).to.throw(Error, "EncodingError U+85D7");
expect(() => {ms932Encoder.encode("\u85D8")}).to.throw(Error, "EncodingError U+85D8");
expect(() => {ms932Encoder.encode("\u85D9")}).to.throw(Error, "EncodingError U+85D9");
expect(() => {ms932Encoder.encode("\u85DA")}).to.throw(Error, "EncodingError U+85DA");
expect(() => {ms932Encoder.encode("\u85DB")}).to.throw(Error, "EncodingError U+85DB");
r = r && ([...ms932Encoder.encode("藜藝")].join(",") === "229,91,229,89"); // U+85DC
expect(() => {ms932Encoder.encode("\u85DE")}).to.throw(Error, "EncodingError U+85DE");
expect(() => {ms932Encoder.encode("\u85DF")}).to.throw(Error, "EncodingError U+85DF");
expect(() => {ms932Encoder.encode("\u85E0")}).to.throw(Error, "EncodingError U+85E0");
expect(() => {ms932Encoder.encode("\u85E1")}).to.throw(Error, "EncodingError U+85E1");
expect(() => {ms932Encoder.encode("\u85E2")}).to.throw(Error, "EncodingError U+85E2");
expect(() => {ms932Encoder.encode("\u85E3")}).to.throw(Error, "EncodingError U+85E3");
r = r && ([...ms932Encoder.encode("藤藥")].join(",") === "147,161,229,90"); // U+85E4
expect(() => {ms932Encoder.encode("\u85E6")}).to.throw(Error, "EncodingError U+85E6");
expect(() => {ms932Encoder.encode("\u85E7")}).to.throw(Error, "EncodingError U+85E7");
expect(() => {ms932Encoder.encode("\u85E8")}).to.throw(Error, "EncodingError U+85E8");
r = r && ([...ms932Encoder.encode("藩藪")].join(",") === "148,203,229,77"); // U+85E9
expect(() => {ms932Encoder.encode("\u85EB")}).to.throw(Error, "EncodingError U+85EB");
expect(() => {ms932Encoder.encode("\u85EC")}).to.throw(Error, "EncodingError U+85EC");
expect(() => {ms932Encoder.encode("\u85ED")}).to.throw(Error, "EncodingError U+85ED");
expect(() => {ms932Encoder.encode("\u85EE")}).to.throw(Error, "EncodingError U+85EE");
expect(() => {ms932Encoder.encode("\u85EF")}).to.throw(Error, "EncodingError U+85EF");
expect(() => {ms932Encoder.encode("\u85F0")}).to.throw(Error, "EncodingError U+85F0");
expect(() => {ms932Encoder.encode("\u85F1")}).to.throw(Error, "EncodingError U+85F1");
expect(() => {ms932Encoder.encode("\u85F2")}).to.throw(Error, "EncodingError U+85F2");
expect(() => {ms932Encoder.encode("\u85F3")}).to.throw(Error, "EncodingError U+85F3");
expect(() => {ms932Encoder.encode("\u85F4")}).to.throw(Error, "EncodingError U+85F4");
expect(() => {ms932Encoder.encode("\u85F5")}).to.throw(Error, "EncodingError U+85F5");
expect(() => {ms932Encoder.encode("\u85F6")}).to.throw(Error, "EncodingError U+85F6");
r = r && ([...ms932Encoder.encode("藷")].join(",") === "143,147"); // U+85F7
expect(() => {ms932Encoder.encode("\u85F8")}).to.throw(Error, "EncodingError U+85F8");
r = r && ([...ms932Encoder.encode("藹藺藻")].join(",") === "229,92,229,97,145,148"); // U+85F9
expect(() => {ms932Encoder.encode("\u85FC")}).to.throw(Error, "EncodingError U+85FC");
expect(() => {ms932Encoder.encode("\u85FD")}).to.throw(Error, "EncodingError U+85FD");
r = r && ([...ms932Encoder.encode("藾")].join(",") === "229,96"); // U+85FE
expect(() => {ms932Encoder.encode("\u85FF")}).to.throw(Error, "EncodingError U+85FF");
expect(() => {ms932Encoder.encode("\u8600")}).to.throw(Error, "EncodingError U+8600");
expect(() => {ms932Encoder.encode("\u8601")}).to.throw(Error, "EncodingError U+8601");
r = r && ([...ms932Encoder.encode("蘂")].join(",") === "229,65"); // U+8602
expect(() => {ms932Encoder.encode("\u8603")}).to.throw(Error, "EncodingError U+8603");
expect(() => {ms932Encoder.encode("\u8604")}).to.throw(Error, "EncodingError U+8604");
expect(() => {ms932Encoder.encode("\u8605")}).to.throw(Error, "EncodingError U+8605");
r = r && ([...ms932Encoder.encode("蘆蘇")].join(",") === "229,98,145,104"); // U+8606
expect(() => {ms932Encoder.encode("\u8608")}).to.throw(Error, "EncodingError U+8608");
expect(() => {ms932Encoder.encode("\u8609")}).to.throw(Error, "EncodingError U+8609");
r = r && ([...ms932Encoder.encode("蘊蘋")].join(",") === "229,93,229,95"); // U+860A
expect(() => {ms932Encoder.encode("\u860C")}).to.throw(Error, "EncodingError U+860C");
expect(() => {ms932Encoder.encode("\u860D")}).to.throw(Error, "EncodingError U+860D");
expect(() => {ms932Encoder.encode("\u860E")}).to.throw(Error, "EncodingError U+860E");
expect(() => {ms932Encoder.encode("\u860F")}).to.throw(Error, "EncodingError U+860F");
expect(() => {ms932Encoder.encode("\u8610")}).to.throw(Error, "EncodingError U+8610");
expect(() => {ms932Encoder.encode("\u8611")}).to.throw(Error, "EncodingError U+8611");
expect(() => {ms932Encoder.encode("\u8612")}).to.throw(Error, "EncodingError U+8612");
r = r && ([...ms932Encoder.encode("蘓")].join(",") === "229,94"); // U+8613
expect(() => {ms932Encoder.encode("\u8614")}).to.throw(Error, "EncodingError U+8614");
expect(() => {ms932Encoder.encode("\u8615")}).to.throw(Error, "EncodingError U+8615");
r = r && ([...ms932Encoder.encode("蘖蘗")].join(",") === "159,80,159,65"); // U+8616
expect(() => {ms932Encoder.encode("\u8618")}).to.throw(Error, "EncodingError U+8618");
expect(() => {ms932Encoder.encode("\u8619")}).to.throw(Error, "EncodingError U+8619");
r = r && ([...ms932Encoder.encode("蘚")].join(",") === "229,100"); // U+861A
expect(() => {ms932Encoder.encode("\u861B")}).to.throw(Error, "EncodingError U+861B");
expect(() => {ms932Encoder.encode("\u861C")}).to.throw(Error, "EncodingError U+861C");
expect(() => {ms932Encoder.encode("\u861D")}).to.throw(Error, "EncodingError U+861D");
expect(() => {ms932Encoder.encode("\u861E")}).to.throw(Error, "EncodingError U+861E");
expect(() => {ms932Encoder.encode("\u861F")}).to.throw(Error, "EncodingError U+861F");
expect(() => {ms932Encoder.encode("\u8620")}).to.throw(Error, "EncodingError U+8620");
expect(() => {ms932Encoder.encode("\u8621")}).to.throw(Error, "EncodingError U+8621");
r = r && ([...ms932Encoder.encode("蘢")].join(",") === "229,99"); // U+8622
expect(() => {ms932Encoder.encode("\u8623")}).to.throw(Error, "EncodingError U+8623");
expect(() => {ms932Encoder.encode("\u8624")}).to.throw(Error, "EncodingError U+8624");
expect(() => {ms932Encoder.encode("\u8625")}).to.throw(Error, "EncodingError U+8625");
expect(() => {ms932Encoder.encode("\u8626")}).to.throw(Error, "EncodingError U+8626");
expect(() => {ms932Encoder.encode("\u8627")}).to.throw(Error, "EncodingError U+8627");
expect(() => {ms932Encoder.encode("\u8628")}).to.throw(Error, "EncodingError U+8628");
expect(() => {ms932Encoder.encode("\u8629")}).to.throw(Error, "EncodingError U+8629");
expect(() => {ms932Encoder.encode("\u862A")}).to.throw(Error, "EncodingError U+862A");
expect(() => {ms932Encoder.encode("\u862B")}).to.throw(Error, "EncodingError U+862B");
expect(() => {ms932Encoder.encode("\u862C")}).to.throw(Error, "EncodingError U+862C");
r = r && ([...ms932Encoder.encode("蘭")].join(",") === "151,150"); // U+862D
expect(() => {ms932Encoder.encode("\u862E")}).to.throw(Error, "EncodingError U+862E");
r = r && ([...ms932Encoder.encode("蘯蘰")].join(",") === "225,186,229,101"); // U+862F
expect(() => {ms932Encoder.encode("\u8631")}).to.throw(Error, "EncodingError U+8631");
expect(() => {ms932Encoder.encode("\u8632")}).to.throw(Error, "EncodingError U+8632");
expect(() => {ms932Encoder.encode("\u8633")}).to.throw(Error, "EncodingError U+8633");
expect(() => {ms932Encoder.encode("\u8634")}).to.throw(Error, "EncodingError U+8634");
expect(() => {ms932Encoder.encode("\u8635")}).to.throw(Error, "EncodingError U+8635");
expect(() => {ms932Encoder.encode("\u8636")}).to.throw(Error, "EncodingError U+8636");
expect(() => {ms932Encoder.encode("\u8637")}).to.throw(Error, "EncodingError U+8637");
expect(() => {ms932Encoder.encode("\u8638")}).to.throw(Error, "EncodingError U+8638");
expect(() => {ms932Encoder.encode("\u8639")}).to.throw(Error, "EncodingError U+8639");
expect(() => {ms932Encoder.encode("\u863A")}).to.throw(Error, "EncodingError U+863A");
expect(() => {ms932Encoder.encode("\u863B")}).to.throw(Error, "EncodingError U+863B");
expect(() => {ms932Encoder.encode("\u863C")}).to.throw(Error, "EncodingError U+863C");
expect(() => {ms932Encoder.encode("\u863D")}).to.throw(Error, "EncodingError U+863D");
expect(() => {ms932Encoder.encode("\u863E")}).to.throw(Error, "EncodingError U+863E");
r = r && ([...ms932Encoder.encode("蘿")].join(",") === "229,102"); // U+863F
expect(() => {ms932Encoder.encode("\u8640")}).to.throw(Error, "EncodingError U+8640");
expect(() => {ms932Encoder.encode("\u8641")}).to.throw(Error, "EncodingError U+8641");
expect(() => {ms932Encoder.encode("\u8642")}).to.throw(Error, "EncodingError U+8642");
expect(() => {ms932Encoder.encode("\u8643")}).to.throw(Error, "EncodingError U+8643");
expect(() => {ms932Encoder.encode("\u8644")}).to.throw(Error, "EncodingError U+8644");
expect(() => {ms932Encoder.encode("\u8645")}).to.throw(Error, "EncodingError U+8645");
expect(() => {ms932Encoder.encode("\u8646")}).to.throw(Error, "EncodingError U+8646");
expect(() => {ms932Encoder.encode("\u8647")}).to.throw(Error, "EncodingError U+8647");
expect(() => {ms932Encoder.encode("\u8648")}).to.throw(Error, "EncodingError U+8648");
expect(() => {ms932Encoder.encode("\u8649")}).to.throw(Error, "EncodingError U+8649");
expect(() => {ms932Encoder.encode("\u864A")}).to.throw(Error, "EncodingError U+864A");
expect(() => {ms932Encoder.encode("\u864B")}).to.throw(Error, "EncodingError U+864B");
expect(() => {ms932Encoder.encode("\u864C")}).to.throw(Error, "EncodingError U+864C");
r = r && ([...ms932Encoder.encode("虍虎")].join(",") === "229,103,140,213"); // U+864D
expect(() => {ms932Encoder.encode("\u864F")}).to.throw(Error, "EncodingError U+864F");
r = r && ([...ms932Encoder.encode("虐")].join(",") === "139,115"); // U+8650
expect(() => {ms932Encoder.encode("\u8651")}).to.throw(Error, "EncodingError U+8651");
expect(() => {ms932Encoder.encode("\u8652")}).to.throw(Error, "EncodingError U+8652");
expect(() => {ms932Encoder.encode("\u8653")}).to.throw(Error, "EncodingError U+8653");
r = r && ([...ms932Encoder.encode("虔處")].join(",") === "229,105,153,124"); // U+8654
expect(() => {ms932Encoder.encode("\u8656")}).to.throw(Error, "EncodingError U+8656");
expect(() => {ms932Encoder.encode("\u8657")}).to.throw(Error, "EncodingError U+8657");
expect(() => {ms932Encoder.encode("\u8658")}).to.throw(Error, "EncodingError U+8658");
expect(() => {ms932Encoder.encode("\u8659")}).to.throw(Error, "EncodingError U+8659");
r = r && ([...ms932Encoder.encode("虚")].join(",") === "139,149"); // U+865A
expect(() => {ms932Encoder.encode("\u865B")}).to.throw(Error, "EncodingError U+865B");
r = r && ([...ms932Encoder.encode("虜")].join(",") === "151,184"); // U+865C
expect(() => {ms932Encoder.encode("\u865D")}).to.throw(Error, "EncodingError U+865D");
r = r && ([...ms932Encoder.encode("虞號")].join(",") === "139,241,229,106"); // U+865E
expect(() => {ms932Encoder.encode("\u8660")}).to.throw(Error, "EncodingError U+8660");
expect(() => {ms932Encoder.encode("\u8661")}).to.throw(Error, "EncodingError U+8661");
expect(() => {ms932Encoder.encode("\u8662")}).to.throw(Error, "EncodingError U+8662");
expect(() => {ms932Encoder.encode("\u8663")}).to.throw(Error, "EncodingError U+8663");
expect(() => {ms932Encoder.encode("\u8664")}).to.throw(Error, "EncodingError U+8664");
expect(() => {ms932Encoder.encode("\u8665")}).to.throw(Error, "EncodingError U+8665");
expect(() => {ms932Encoder.encode("\u8666")}).to.throw(Error, "EncodingError U+8666");
r = r && ([...ms932Encoder.encode("虧")].join(",") === "229,107"); // U+8667
expect(() => {ms932Encoder.encode("\u8668")}).to.throw(Error, "EncodingError U+8668");
expect(() => {ms932Encoder.encode("\u8669")}).to.throw(Error, "EncodingError U+8669");
expect(() => {ms932Encoder.encode("\u866A")}).to.throw(Error, "EncodingError U+866A");
r = r && ([...ms932Encoder.encode("虫")].join(",") === "146,142"); // U+866B
expect(() => {ms932Encoder.encode("\u866C")}).to.throw(Error, "EncodingError U+866C");
expect(() => {ms932Encoder.encode("\u866D")}).to.throw(Error, "EncodingError U+866D");
expect(() => {ms932Encoder.encode("\u866E")}).to.throw(Error, "EncodingError U+866E");
expect(() => {ms932Encoder.encode("\u866F")}).to.throw(Error, "EncodingError U+866F");
expect(() => {ms932Encoder.encode("\u8670")}).to.throw(Error, "EncodingError U+8670");
r = r && ([...ms932Encoder.encode("虱")].join(",") === "229,108"); // U+8671
expect(() => {ms932Encoder.encode("\u8672")}).to.throw(Error, "EncodingError U+8672");
expect(() => {ms932Encoder.encode("\u8673")}).to.throw(Error, "EncodingError U+8673");
expect(() => {ms932Encoder.encode("\u8674")}).to.throw(Error, "EncodingError U+8674");
expect(() => {ms932Encoder.encode("\u8675")}).to.throw(Error, "EncodingError U+8675");
expect(() => {ms932Encoder.encode("\u8676")}).to.throw(Error, "EncodingError U+8676");
expect(() => {ms932Encoder.encode("\u8677")}).to.throw(Error, "EncodingError U+8677");
expect(() => {ms932Encoder.encode("\u8678")}).to.throw(Error, "EncodingError U+8678");
r = r && ([...ms932Encoder.encode("虹")].join(",") === "147,248"); // U+8679
expect(() => {ms932Encoder.encode("\u867A")}).to.throw(Error, "EncodingError U+867A");
r = r && ([...ms932Encoder.encode("虻")].join(",") === "136,184"); // U+867B
expect(() => {ms932Encoder.encode("\u867C")}).to.throw(Error, "EncodingError U+867C");
expect(() => {ms932Encoder.encode("\u867D")}).to.throw(Error, "EncodingError U+867D");
expect(() => {ms932Encoder.encode("\u867E")}).to.throw(Error, "EncodingError U+867E");
expect(() => {ms932Encoder.encode("\u867F")}).to.throw(Error, "EncodingError U+867F");
expect(() => {ms932Encoder.encode("\u8680")}).to.throw(Error, "EncodingError U+8680");
expect(() => {ms932Encoder.encode("\u8681")}).to.throw(Error, "EncodingError U+8681");
expect(() => {ms932Encoder.encode("\u8682")}).to.throw(Error, "EncodingError U+8682");
expect(() => {ms932Encoder.encode("\u8683")}).to.throw(Error, "EncodingError U+8683");
expect(() => {ms932Encoder.encode("\u8684")}).to.throw(Error, "EncodingError U+8684");
expect(() => {ms932Encoder.encode("\u8685")}).to.throw(Error, "EncodingError U+8685");
expect(() => {ms932Encoder.encode("\u8686")}).to.throw(Error, "EncodingError U+8686");
expect(() => {ms932Encoder.encode("\u8687")}).to.throw(Error, "EncodingError U+8687");
expect(() => {ms932Encoder.encode("\u8688")}).to.throw(Error, "EncodingError U+8688");
expect(() => {ms932Encoder.encode("\u8689")}).to.throw(Error, "EncodingError U+8689");
r = r && ([...ms932Encoder.encode("蚊蚋蚌")].join(",") === "137,225,229,113,229,114"); // U+868A
expect(() => {ms932Encoder.encode("\u868D")}).to.throw(Error, "EncodingError U+868D");
expect(() => {ms932Encoder.encode("\u868E")}).to.throw(Error, "EncodingError U+868E");
expect(() => {ms932Encoder.encode("\u868F")}).to.throw(Error, "EncodingError U+868F");
expect(() => {ms932Encoder.encode("\u8690")}).to.throw(Error, "EncodingError U+8690");
expect(() => {ms932Encoder.encode("\u8691")}).to.throw(Error, "EncodingError U+8691");
expect(() => {ms932Encoder.encode("\u8692")}).to.throw(Error, "EncodingError U+8692");
r = r && ([...ms932Encoder.encode("蚓")].join(",") === "229,109"); // U+8693
expect(() => {ms932Encoder.encode("\u8694")}).to.throw(Error, "EncodingError U+8694");
r = r && ([...ms932Encoder.encode("蚕")].join(",") === "142,92"); // U+8695
expect(() => {ms932Encoder.encode("\u8696")}).to.throw(Error, "EncodingError U+8696");
expect(() => {ms932Encoder.encode("\u8697")}).to.throw(Error, "EncodingError U+8697");
expect(() => {ms932Encoder.encode("\u8698")}).to.throw(Error, "EncodingError U+8698");
expect(() => {ms932Encoder.encode("\u8699")}).to.throw(Error, "EncodingError U+8699");
expect(() => {ms932Encoder.encode("\u869A")}).to.throw(Error, "EncodingError U+869A");
expect(() => {ms932Encoder.encode("\u869B")}).to.throw(Error, "EncodingError U+869B");
expect(() => {ms932Encoder.encode("\u869C")}).to.throw(Error, "EncodingError U+869C");
expect(() => {ms932Encoder.encode("\u869D")}).to.throw(Error, "EncodingError U+869D");
expect(() => {ms932Encoder.encode("\u869E")}).to.throw(Error, "EncodingError U+869E");
expect(() => {ms932Encoder.encode("\u869F")}).to.throw(Error, "EncodingError U+869F");
expect(() => {ms932Encoder.encode("\u86A0")}).to.throw(Error, "EncodingError U+86A0");
expect(() => {ms932Encoder.encode("\u86A1")}).to.throw(Error, "EncodingError U+86A1");
expect(() => {ms932Encoder.encode("\u86A2")}).to.throw(Error, "EncodingError U+86A2");
r = r && ([...ms932Encoder.encode("蚣蚤")].join(",") === "229,110,148,97"); // U+86A3
expect(() => {ms932Encoder.encode("\u86A5")}).to.throw(Error, "EncodingError U+86A5");
expect(() => {ms932Encoder.encode("\u86A6")}).to.throw(Error, "EncodingError U+86A6");
expect(() => {ms932Encoder.encode("\u86A7")}).to.throw(Error, "EncodingError U+86A7");
expect(() => {ms932Encoder.encode("\u86A8")}).to.throw(Error, "EncodingError U+86A8");
r = r && ([...ms932Encoder.encode("蚩蚪蚫")].join(",") === "229,111,229,112,229,122"); // U+86A9
expect(() => {ms932Encoder.encode("\u86AC")}).to.throw(Error, "EncodingError U+86AC");
expect(() => {ms932Encoder.encode("\u86AD")}).to.throw(Error, "EncodingError U+86AD");
expect(() => {ms932Encoder.encode("\u86AE")}).to.throw(Error, "EncodingError U+86AE");
r = r && ([...ms932Encoder.encode("蚯蚰")].join(",") === "229,116,229,119"); // U+86AF
expect(() => {ms932Encoder.encode("\u86B1")}).to.throw(Error, "EncodingError U+86B1");
expect(() => {ms932Encoder.encode("\u86B2")}).to.throw(Error, "EncodingError U+86B2");
expect(() => {ms932Encoder.encode("\u86B3")}).to.throw(Error, "EncodingError U+86B3");
expect(() => {ms932Encoder.encode("\u86B4")}).to.throw(Error, "EncodingError U+86B4");
expect(() => {ms932Encoder.encode("\u86B5")}).to.throw(Error, "EncodingError U+86B5");
r = r && ([...ms932Encoder.encode("蚶")].join(",") === "229,115"); // U+86B6
expect(() => {ms932Encoder.encode("\u86B7")}).to.throw(Error, "EncodingError U+86B7");
expect(() => {ms932Encoder.encode("\u86B8")}).to.throw(Error, "EncodingError U+86B8");
expect(() => {ms932Encoder.encode("\u86B9")}).to.throw(Error, "EncodingError U+86B9");
expect(() => {ms932Encoder.encode("\u86BA")}).to.throw(Error, "EncodingError U+86BA");
expect(() => {ms932Encoder.encode("\u86BB")}).to.throw(Error, "EncodingError U+86BB");
expect(() => {ms932Encoder.encode("\u86BC")}).to.throw(Error, "EncodingError U+86BC");
expect(() => {ms932Encoder.encode("\u86BD")}).to.throw(Error, "EncodingError U+86BD");
expect(() => {ms932Encoder.encode("\u86BE")}).to.throw(Error, "EncodingError U+86BE");
expect(() => {ms932Encoder.encode("\u86BF")}).to.throw(Error, "EncodingError U+86BF");
expect(() => {ms932Encoder.encode("\u86C0")}).to.throw(Error, "EncodingError U+86C0");
expect(() => {ms932Encoder.encode("\u86C1")}).to.throw(Error, "EncodingError U+86C1");
expect(() => {ms932Encoder.encode("\u86C2")}).to.throw(Error, "EncodingError U+86C2");
expect(() => {ms932Encoder.encode("\u86C3")}).to.throw(Error, "EncodingError U+86C3");
r = r && ([...ms932Encoder.encode("蛄")].join(",") === "229,117"); // U+86C4
expect(() => {ms932Encoder.encode("\u86C5")}).to.throw(Error, "EncodingError U+86C5");
r = r && ([...ms932Encoder.encode("蛆蛇")].join(",") === "229,118,142,214"); // U+86C6
expect(() => {ms932Encoder.encode("\u86C8")}).to.throw(Error, "EncodingError U+86C8");
r = r && ([...ms932Encoder.encode("蛉")].join(",") === "229,120"); // U+86C9
expect(() => {ms932Encoder.encode("\u86CA")}).to.throw(Error, "EncodingError U+86CA");
r = r && ([...ms932Encoder.encode("蛋")].join(",") === "146,96"); // U+86CB
expect(() => {ms932Encoder.encode("\u86CC")}).to.throw(Error, "EncodingError U+86CC");
r = r && ([...ms932Encoder.encode("蛍蛎")].join(",") === "140,117,138,97"); // U+86CD
expect(() => {ms932Encoder.encode("\u86CF")}).to.throw(Error, "EncodingError U+86CF");
expect(() => {ms932Encoder.encode("\u86D0")}).to.throw(Error, "EncodingError U+86D0");
expect(() => {ms932Encoder.encode("\u86D1")}).to.throw(Error, "EncodingError U+86D1");
expect(() => {ms932Encoder.encode("\u86D2")}).to.throw(Error, "EncodingError U+86D2");
expect(() => {ms932Encoder.encode("\u86D3")}).to.throw(Error, "EncodingError U+86D3");
r = r && ([...ms932Encoder.encode("蛔")].join(",") === "229,123"); // U+86D4
expect(() => {ms932Encoder.encode("\u86D5")}).to.throw(Error, "EncodingError U+86D5");
expect(() => {ms932Encoder.encode("\u86D6")}).to.throw(Error, "EncodingError U+86D6");
expect(() => {ms932Encoder.encode("\u86D7")}).to.throw(Error, "EncodingError U+86D7");
expect(() => {ms932Encoder.encode("\u86D8")}).to.throw(Error, "EncodingError U+86D8");
r = r && ([...ms932Encoder.encode("蛙")].join(",") === "138,94"); // U+86D9
expect(() => {ms932Encoder.encode("\u86DA")}).to.throw(Error, "EncodingError U+86DA");
r = r && ([...ms932Encoder.encode("蛛")].join(",") === "229,129"); // U+86DB
expect(() => {ms932Encoder.encode("\u86DC")}).to.throw(Error, "EncodingError U+86DC");
expect(() => {ms932Encoder.encode("\u86DD")}).to.throw(Error, "EncodingError U+86DD");
r = r && ([...ms932Encoder.encode("蛞蛟")].join(",") === "229,124,229,128"); // U+86DE
expect(() => {ms932Encoder.encode("\u86E0")}).to.throw(Error, "EncodingError U+86E0");
expect(() => {ms932Encoder.encode("\u86E1")}).to.throw(Error, "EncodingError U+86E1");
expect(() => {ms932Encoder.encode("\u86E2")}).to.throw(Error, "EncodingError U+86E2");
expect(() => {ms932Encoder.encode("\u86E3")}).to.throw(Error, "EncodingError U+86E3");
r = r && ([...ms932Encoder.encode("蛤")].join(",") === "148,184"); // U+86E4
expect(() => {ms932Encoder.encode("\u86E5")}).to.throw(Error, "EncodingError U+86E5");
expect(() => {ms932Encoder.encode("\u86E6")}).to.throw(Error, "EncodingError U+86E6");
expect(() => {ms932Encoder.encode("\u86E7")}).to.throw(Error, "EncodingError U+86E7");
expect(() => {ms932Encoder.encode("\u86E8")}).to.throw(Error, "EncodingError U+86E8");
r = r && ([...ms932Encoder.encode("蛩")].join(",") === "229,125"); // U+86E9
expect(() => {ms932Encoder.encode("\u86EA")}).to.throw(Error, "EncodingError U+86EA");
expect(() => {ms932Encoder.encode("\u86EB")}).to.throw(Error, "EncodingError U+86EB");
r = r && ([...ms932Encoder.encode("蛬蛭蛮蛯")].join(",") === "229,126,149,103,148,216,229,130"); // U+86EC
expect(() => {ms932Encoder.encode("\u86F0")}).to.throw(Error, "EncodingError U+86F0");
expect(() => {ms932Encoder.encode("\u86F1")}).to.throw(Error, "EncodingError U+86F1");
expect(() => {ms932Encoder.encode("\u86F2")}).to.throw(Error, "EncodingError U+86F2");
expect(() => {ms932Encoder.encode("\u86F3")}).to.throw(Error, "EncodingError U+86F3");
expect(() => {ms932Encoder.encode("\u86F4")}).to.throw(Error, "EncodingError U+86F4");
expect(() => {ms932Encoder.encode("\u86F5")}).to.throw(Error, "EncodingError U+86F5");
expect(() => {ms932Encoder.encode("\u86F6")}).to.throw(Error, "EncodingError U+86F6");
expect(() => {ms932Encoder.encode("\u86F7")}).to.throw(Error, "EncodingError U+86F7");
r = r && ([...ms932Encoder.encode("蛸蛹")].join(",") === "145,251,229,140"); // U+86F8
expect(() => {ms932Encoder.encode("\u86FA")}).to.throw(Error, "EncodingError U+86FA");
r = r && ([...ms932Encoder.encode("蛻")].join(",") === "229,136"); // U+86FB
expect(() => {ms932Encoder.encode("\u86FC")}).to.throw(Error, "EncodingError U+86FC");
expect(() => {ms932Encoder.encode("\u86FD")}).to.throw(Error, "EncodingError U+86FD");
r = r && ([...ms932Encoder.encode("蛾")].join(",") === "137,233"); // U+86FE
expect(() => {ms932Encoder.encode("\u86FF")}).to.throw(Error, "EncodingError U+86FF");
r = r && ([...ms932Encoder.encode("蜀")].join(",") === "229,134"); // U+8700
expect(() => {ms932Encoder.encode("\u8701")}).to.throw(Error, "EncodingError U+8701");
r = r && ([...ms932Encoder.encode("蜂蜃")].join(",") === "150,73,229,135"); // U+8702
expect(() => {ms932Encoder.encode("\u8704")}).to.throw(Error, "EncodingError U+8704");
expect(() => {ms932Encoder.encode("\u8705")}).to.throw(Error, "EncodingError U+8705");
r = r && ([...ms932Encoder.encode("蜆")].join(",") === "229,132"); // U+8706
expect(() => {ms932Encoder.encode("\u8707")}).to.throw(Error, "EncodingError U+8707");
r = r && ([...ms932Encoder.encode("蜈蜉蜊")].join(",") === "229,133,229,138,229,141"); // U+8708
expect(() => {ms932Encoder.encode("\u870B")}).to.throw(Error, "EncodingError U+870B");
expect(() => {ms932Encoder.encode("\u870C")}).to.throw(Error, "EncodingError U+870C");
r = r && ([...ms932Encoder.encode("蜍")].join(",") === "229,139"); // U+870D
expect(() => {ms932Encoder.encode("\u870E")}).to.throw(Error, "EncodingError U+870E");
expect(() => {ms932Encoder.encode("\u870F")}).to.throw(Error, "EncodingError U+870F");
expect(() => {ms932Encoder.encode("\u8710")}).to.throw(Error, "EncodingError U+8710");
r = r && ([...ms932Encoder.encode("蜑蜒")].join(",") === "229,137,229,131"); // U+8711
expect(() => {ms932Encoder.encode("\u8713")}).to.throw(Error, "EncodingError U+8713");
expect(() => {ms932Encoder.encode("\u8714")}).to.throw(Error, "EncodingError U+8714");
expect(() => {ms932Encoder.encode("\u8715")}).to.throw(Error, "EncodingError U+8715");
expect(() => {ms932Encoder.encode("\u8716")}).to.throw(Error, "EncodingError U+8716");
expect(() => {ms932Encoder.encode("\u8717")}).to.throw(Error, "EncodingError U+8717");
r = r && ([...ms932Encoder.encode("蜘")].join(",") === "146,119"); // U+8718
expect(() => {ms932Encoder.encode("\u8719")}).to.throw(Error, "EncodingError U+8719");
r = r && ([...ms932Encoder.encode("蜚")].join(",") === "229,148"); // U+871A
expect(() => {ms932Encoder.encode("\u871B")}).to.throw(Error, "EncodingError U+871B");
r = r && ([...ms932Encoder.encode("蜜")].join(",") === "150,168"); // U+871C
expect(() => {ms932Encoder.encode("\u871D")}).to.throw(Error, "EncodingError U+871D");
expect(() => {ms932Encoder.encode("\u871E")}).to.throw(Error, "EncodingError U+871E");
expect(() => {ms932Encoder.encode("\u871F")}).to.throw(Error, "EncodingError U+871F");
expect(() => {ms932Encoder.encode("\u8720")}).to.throw(Error, "EncodingError U+8720");
expect(() => {ms932Encoder.encode("\u8721")}).to.throw(Error, "EncodingError U+8721");
expect(() => {ms932Encoder.encode("\u8722")}).to.throw(Error, "EncodingError U+8722");
expect(() => {ms932Encoder.encode("\u8723")}).to.throw(Error, "EncodingError U+8723");
expect(() => {ms932Encoder.encode("\u8724")}).to.throw(Error, "EncodingError U+8724");
r = r && ([...ms932Encoder.encode("蜥")].join(",") === "229,146"); // U+8725
expect(() => {ms932Encoder.encode("\u8726")}).to.throw(Error, "EncodingError U+8726");
expect(() => {ms932Encoder.encode("\u8727")}).to.throw(Error, "EncodingError U+8727");
expect(() => {ms932Encoder.encode("\u8728")}).to.throw(Error, "EncodingError U+8728");
r = r && ([...ms932Encoder.encode("蜩")].join(",") === "229,147"); // U+8729
expect(() => {ms932Encoder.encode("\u872A")}).to.throw(Error, "EncodingError U+872A");
expect(() => {ms932Encoder.encode("\u872B")}).to.throw(Error, "EncodingError U+872B");
expect(() => {ms932Encoder.encode("\u872C")}).to.throw(Error, "EncodingError U+872C");
expect(() => {ms932Encoder.encode("\u872D")}).to.throw(Error, "EncodingError U+872D");
expect(() => {ms932Encoder.encode("\u872E")}).to.throw(Error, "EncodingError U+872E");
expect(() => {ms932Encoder.encode("\u872F")}).to.throw(Error, "EncodingError U+872F");
expect(() => {ms932Encoder.encode("\u8730")}).to.throw(Error, "EncodingError U+8730");
expect(() => {ms932Encoder.encode("\u8731")}).to.throw(Error, "EncodingError U+8731");
expect(() => {ms932Encoder.encode("\u8732")}).to.throw(Error, "EncodingError U+8732");
expect(() => {ms932Encoder.encode("\u8733")}).to.throw(Error, "EncodingError U+8733");
r = r && ([...ms932Encoder.encode("蜴")].join(",") === "229,142"); // U+8734
expect(() => {ms932Encoder.encode("\u8735")}).to.throw(Error, "EncodingError U+8735");
expect(() => {ms932Encoder.encode("\u8736")}).to.throw(Error, "EncodingError U+8736");
r = r && ([...ms932Encoder.encode("蜷")].join(",") === "229,144"); // U+8737
expect(() => {ms932Encoder.encode("\u8738")}).to.throw(Error, "EncodingError U+8738");
expect(() => {ms932Encoder.encode("\u8739")}).to.throw(Error, "EncodingError U+8739");
expect(() => {ms932Encoder.encode("\u873A")}).to.throw(Error, "EncodingError U+873A");
r = r && ([...ms932Encoder.encode("蜻")].join(",") === "229,145"); // U+873B
expect(() => {ms932Encoder.encode("\u873C")}).to.throw(Error, "EncodingError U+873C");
expect(() => {ms932Encoder.encode("\u873D")}).to.throw(Error, "EncodingError U+873D");
expect(() => {ms932Encoder.encode("\u873E")}).to.throw(Error, "EncodingError U+873E");
r = r && ([...ms932Encoder.encode("蜿")].join(",") === "229,143"); // U+873F
expect(() => {ms932Encoder.encode("\u8740")}).to.throw(Error, "EncodingError U+8740");
expect(() => {ms932Encoder.encode("\u8741")}).to.throw(Error, "EncodingError U+8741");
expect(() => {ms932Encoder.encode("\u8742")}).to.throw(Error, "EncodingError U+8742");
expect(() => {ms932Encoder.encode("\u8743")}).to.throw(Error, "EncodingError U+8743");
expect(() => {ms932Encoder.encode("\u8744")}).to.throw(Error, "EncodingError U+8744");
expect(() => {ms932Encoder.encode("\u8745")}).to.throw(Error, "EncodingError U+8745");
expect(() => {ms932Encoder.encode("\u8746")}).to.throw(Error, "EncodingError U+8746");
expect(() => {ms932Encoder.encode("\u8747")}).to.throw(Error, "EncodingError U+8747");
expect(() => {ms932Encoder.encode("\u8748")}).to.throw(Error, "EncodingError U+8748");
r = r && ([...ms932Encoder.encode("蝉")].join(",") === "144,228"); // U+8749
expect(() => {ms932Encoder.encode("\u874A")}).to.throw(Error, "EncodingError U+874A");
r = r && ([...ms932Encoder.encode("蝋蝌")].join(",") === "152,88,229,152"); // U+874B
expect(() => {ms932Encoder.encode("\u874D")}).to.throw(Error, "EncodingError U+874D");
r = r && ([...ms932Encoder.encode("蝎")].join(",") === "229,153"); // U+874E
expect(() => {ms932Encoder.encode("\u874F")}).to.throw(Error, "EncodingError U+874F");
expect(() => {ms932Encoder.encode("\u8750")}).to.throw(Error, "EncodingError U+8750");
expect(() => {ms932Encoder.encode("\u8751")}).to.throw(Error, "EncodingError U+8751");
expect(() => {ms932Encoder.encode("\u8752")}).to.throw(Error, "EncodingError U+8752");
r = r && ([...ms932Encoder.encode("蝓")].join(",") === "229,159"); // U+8753
expect(() => {ms932Encoder.encode("\u8754")}).to.throw(Error, "EncodingError U+8754");
r = r && ([...ms932Encoder.encode("蝕")].join(",") === "144,73"); // U+8755
expect(() => {ms932Encoder.encode("\u8756")}).to.throw(Error, "EncodingError U+8756");
r = r && ([...ms932Encoder.encode("蝗")].join(",") === "229,155"); // U+8757
expect(() => {ms932Encoder.encode("\u8758")}).to.throw(Error, "EncodingError U+8758");
r = r && ([...ms932Encoder.encode("蝙")].join(",") === "229,158"); // U+8759
expect(() => {ms932Encoder.encode("\u875A")}).to.throw(Error, "EncodingError U+875A");
expect(() => {ms932Encoder.encode("\u875B")}).to.throw(Error, "EncodingError U+875B");
expect(() => {ms932Encoder.encode("\u875C")}).to.throw(Error, "EncodingError U+875C");
expect(() => {ms932Encoder.encode("\u875D")}).to.throw(Error, "EncodingError U+875D");
expect(() => {ms932Encoder.encode("\u875E")}).to.throw(Error, "EncodingError U+875E");
r = r && ([...ms932Encoder.encode("蝟蝠")].join(",") === "229,150,229,149"); // U+875F
expect(() => {ms932Encoder.encode("\u8761")}).to.throw(Error, "EncodingError U+8761");
expect(() => {ms932Encoder.encode("\u8762")}).to.throw(Error, "EncodingError U+8762");
r = r && ([...ms932Encoder.encode("蝣")].join(",") === "229,160"); // U+8763
expect(() => {ms932Encoder.encode("\u8764")}).to.throw(Error, "EncodingError U+8764");
expect(() => {ms932Encoder.encode("\u8765")}).to.throw(Error, "EncodingError U+8765");
r = r && ([...ms932Encoder.encode("蝦")].join(",") === "137,218"); // U+8766
expect(() => {ms932Encoder.encode("\u8767")}).to.throw(Error, "EncodingError U+8767");
r = r && ([...ms932Encoder.encode("蝨")].join(",") === "229,156"); // U+8768
expect(() => {ms932Encoder.encode("\u8769")}).to.throw(Error, "EncodingError U+8769");
r = r && ([...ms932Encoder.encode("蝪")].join(",") === "229,161"); // U+876A
expect(() => {ms932Encoder.encode("\u876B")}).to.throw(Error, "EncodingError U+876B");
expect(() => {ms932Encoder.encode("\u876C")}).to.throw(Error, "EncodingError U+876C");
expect(() => {ms932Encoder.encode("\u876D")}).to.throw(Error, "EncodingError U+876D");
r = r && ([...ms932Encoder.encode("蝮")].join(",") === "229,157"); // U+876E
expect(() => {ms932Encoder.encode("\u876F")}).to.throw(Error, "EncodingError U+876F");
expect(() => {ms932Encoder.encode("\u8770")}).to.throw(Error, "EncodingError U+8770");
expect(() => {ms932Encoder.encode("\u8771")}).to.throw(Error, "EncodingError U+8771");
expect(() => {ms932Encoder.encode("\u8772")}).to.throw(Error, "EncodingError U+8772");
expect(() => {ms932Encoder.encode("\u8773")}).to.throw(Error, "EncodingError U+8773");
r = r && ([...ms932Encoder.encode("蝴")].join(",") === "229,154"); // U+8774
expect(() => {ms932Encoder.encode("\u8775")}).to.throw(Error, "EncodingError U+8775");
r = r && ([...ms932Encoder.encode("蝶")].join(",") === "146,177"); // U+8776
expect(() => {ms932Encoder.encode("\u8777")}).to.throw(Error, "EncodingError U+8777");
r = r && ([...ms932Encoder.encode("蝸")].join(",") === "229,151"); // U+8778
expect(() => {ms932Encoder.encode("\u8779")}).to.throw(Error, "EncodingError U+8779");
expect(() => {ms932Encoder.encode("\u877A")}).to.throw(Error, "EncodingError U+877A");
expect(() => {ms932Encoder.encode("\u877B")}).to.throw(Error, "EncodingError U+877B");
expect(() => {ms932Encoder.encode("\u877C")}).to.throw(Error, "EncodingError U+877C");
expect(() => {ms932Encoder.encode("\u877D")}).to.throw(Error, "EncodingError U+877D");
expect(() => {ms932Encoder.encode("\u877E")}).to.throw(Error, "EncodingError U+877E");
r = r && ([...ms932Encoder.encode("蝿")].join(",") === "148,136"); // U+877F
expect(() => {ms932Encoder.encode("\u8780")}).to.throw(Error, "EncodingError U+8780");
expect(() => {ms932Encoder.encode("\u8781")}).to.throw(Error, "EncodingError U+8781");
r = r && ([...ms932Encoder.encode("螂")].join(",") === "229,165"); // U+8782
expect(() => {ms932Encoder.encode("\u8783")}).to.throw(Error, "EncodingError U+8783");
expect(() => {ms932Encoder.encode("\u8784")}).to.throw(Error, "EncodingError U+8784");
expect(() => {ms932Encoder.encode("\u8785")}).to.throw(Error, "EncodingError U+8785");
expect(() => {ms932Encoder.encode("\u8786")}).to.throw(Error, "EncodingError U+8786");
expect(() => {ms932Encoder.encode("\u8787")}).to.throw(Error, "EncodingError U+8787");
expect(() => {ms932Encoder.encode("\u8788")}).to.throw(Error, "EncodingError U+8788");
expect(() => {ms932Encoder.encode("\u8789")}).to.throw(Error, "EncodingError U+8789");
expect(() => {ms932Encoder.encode("\u878A")}).to.throw(Error, "EncodingError U+878A");
expect(() => {ms932Encoder.encode("\u878B")}).to.throw(Error, "EncodingError U+878B");
expect(() => {ms932Encoder.encode("\u878C")}).to.throw(Error, "EncodingError U+878C");
r = r && ([...ms932Encoder.encode("融")].join(",") === "151,90"); // U+878D
expect(() => {ms932Encoder.encode("\u878E")}).to.throw(Error, "EncodingError U+878E");
expect(() => {ms932Encoder.encode("\u878F")}).to.throw(Error, "EncodingError U+878F");
expect(() => {ms932Encoder.encode("\u8790")}).to.throw(Error, "EncodingError U+8790");
expect(() => {ms932Encoder.encode("\u8791")}).to.throw(Error, "EncodingError U+8791");
expect(() => {ms932Encoder.encode("\u8792")}).to.throw(Error, "EncodingError U+8792");
expect(() => {ms932Encoder.encode("\u8793")}).to.throw(Error, "EncodingError U+8793");
expect(() => {ms932Encoder.encode("\u8794")}).to.throw(Error, "EncodingError U+8794");
expect(() => {ms932Encoder.encode("\u8795")}).to.throw(Error, "EncodingError U+8795");
expect(() => {ms932Encoder.encode("\u8796")}).to.throw(Error, "EncodingError U+8796");
expect(() => {ms932Encoder.encode("\u8797")}).to.throw(Error, "EncodingError U+8797");
expect(() => {ms932Encoder.encode("\u8798")}).to.throw(Error, "EncodingError U+8798");
expect(() => {ms932Encoder.encode("\u8799")}).to.throw(Error, "EncodingError U+8799");
expect(() => {ms932Encoder.encode("\u879A")}).to.throw(Error, "EncodingError U+879A");
expect(() => {ms932Encoder.encode("\u879B")}).to.throw(Error, "EncodingError U+879B");
expect(() => {ms932Encoder.encode("\u879C")}).to.throw(Error, "EncodingError U+879C");
expect(() => {ms932Encoder.encode("\u879D")}).to.throw(Error, "EncodingError U+879D");
expect(() => {ms932Encoder.encode("\u879E")}).to.throw(Error, "EncodingError U+879E");
r = r && ([...ms932Encoder.encode("螟")].join(",") === "229,164"); // U+879F
expect(() => {ms932Encoder.encode("\u87A0")}).to.throw(Error, "EncodingError U+87A0");
expect(() => {ms932Encoder.encode("\u87A1")}).to.throw(Error, "EncodingError U+87A1");
r = r && ([...ms932Encoder.encode("螢")].join(",") === "229,163"); // U+87A2
expect(() => {ms932Encoder.encode("\u87A3")}).to.throw(Error, "EncodingError U+87A3");
expect(() => {ms932Encoder.encode("\u87A4")}).to.throw(Error, "EncodingError U+87A4");
expect(() => {ms932Encoder.encode("\u87A5")}).to.throw(Error, "EncodingError U+87A5");
expect(() => {ms932Encoder.encode("\u87A6")}).to.throw(Error, "EncodingError U+87A6");
expect(() => {ms932Encoder.encode("\u87A7")}).to.throw(Error, "EncodingError U+87A7");
expect(() => {ms932Encoder.encode("\u87A8")}).to.throw(Error, "EncodingError U+87A8");
expect(() => {ms932Encoder.encode("\u87A9")}).to.throw(Error, "EncodingError U+87A9");
expect(() => {ms932Encoder.encode("\u87AA")}).to.throw(Error, "EncodingError U+87AA");
r = r && ([...ms932Encoder.encode("螫")].join(",") === "229,172"); // U+87AB
expect(() => {ms932Encoder.encode("\u87AC")}).to.throw(Error, "EncodingError U+87AC");
expect(() => {ms932Encoder.encode("\u87AD")}).to.throw(Error, "EncodingError U+87AD");
expect(() => {ms932Encoder.encode("\u87AE")}).to.throw(Error, "EncodingError U+87AE");
r = r && ([...ms932Encoder.encode("螯")].join(",") === "229,166"); // U+87AF
expect(() => {ms932Encoder.encode("\u87B0")}).to.throw(Error, "EncodingError U+87B0");
expect(() => {ms932Encoder.encode("\u87B1")}).to.throw(Error, "EncodingError U+87B1");
expect(() => {ms932Encoder.encode("\u87B2")}).to.throw(Error, "EncodingError U+87B2");
r = r && ([...ms932Encoder.encode("螳")].join(",") === "229,174"); // U+87B3
expect(() => {ms932Encoder.encode("\u87B4")}).to.throw(Error, "EncodingError U+87B4");
expect(() => {ms932Encoder.encode("\u87B5")}).to.throw(Error, "EncodingError U+87B5");
expect(() => {ms932Encoder.encode("\u87B6")}).to.throw(Error, "EncodingError U+87B6");
expect(() => {ms932Encoder.encode("\u87B7")}).to.throw(Error, "EncodingError U+87B7");
expect(() => {ms932Encoder.encode("\u87B8")}).to.throw(Error, "EncodingError U+87B8");
expect(() => {ms932Encoder.encode("\u87B9")}).to.throw(Error, "EncodingError U+87B9");
r = r && ([...ms932Encoder.encode("螺螻")].join(",") === "151,134,229,177"); // U+87BA
expect(() => {ms932Encoder.encode("\u87BC")}).to.throw(Error, "EncodingError U+87BC");
r = r && ([...ms932Encoder.encode("螽")].join(",") === "229,168"); // U+87BD
expect(() => {ms932Encoder.encode("\u87BE")}).to.throw(Error, "EncodingError U+87BE");
expect(() => {ms932Encoder.encode("\u87BF")}).to.throw(Error, "EncodingError U+87BF");
r = r && ([...ms932Encoder.encode("蟀")].join(",") === "229,169"); // U+87C0
expect(() => {ms932Encoder.encode("\u87C1")}).to.throw(Error, "EncodingError U+87C1");
expect(() => {ms932Encoder.encode("\u87C2")}).to.throw(Error, "EncodingError U+87C2");
expect(() => {ms932Encoder.encode("\u87C3")}).to.throw(Error, "EncodingError U+87C3");
r = r && ([...ms932Encoder.encode("蟄")].join(",") === "229,173"); // U+87C4
expect(() => {ms932Encoder.encode("\u87C5")}).to.throw(Error, "EncodingError U+87C5");
r = r && ([...ms932Encoder.encode("蟆蟇")].join(",") === "229,176,229,175"); // U+87C6
expect(() => {ms932Encoder.encode("\u87C8")}).to.throw(Error, "EncodingError U+87C8");
expect(() => {ms932Encoder.encode("\u87C9")}).to.throw(Error, "EncodingError U+87C9");
expect(() => {ms932Encoder.encode("\u87CA")}).to.throw(Error, "EncodingError U+87CA");
r = r && ([...ms932Encoder.encode("蟋")].join(",") === "229,167"); // U+87CB
expect(() => {ms932Encoder.encode("\u87CC")}).to.throw(Error, "EncodingError U+87CC");
expect(() => {ms932Encoder.encode("\u87CD")}).to.throw(Error, "EncodingError U+87CD");
expect(() => {ms932Encoder.encode("\u87CE")}).to.throw(Error, "EncodingError U+87CE");
expect(() => {ms932Encoder.encode("\u87CF")}).to.throw(Error, "EncodingError U+87CF");
r = r && ([...ms932Encoder.encode("蟐")].join(",") === "229,170"); // U+87D0
expect(() => {ms932Encoder.encode("\u87D1")}).to.throw(Error, "EncodingError U+87D1");
r = r && ([...ms932Encoder.encode("蟒")].join(",") === "229,187"); // U+87D2
expect(() => {ms932Encoder.encode("\u87D3")}).to.throw(Error, "EncodingError U+87D3");
expect(() => {ms932Encoder.encode("\u87D4")}).to.throw(Error, "EncodingError U+87D4");
expect(() => {ms932Encoder.encode("\u87D5")}).to.throw(Error, "EncodingError U+87D5");
expect(() => {ms932Encoder.encode("\u87D6")}).to.throw(Error, "EncodingError U+87D6");
expect(() => {ms932Encoder.encode("\u87D7")}).to.throw(Error, "EncodingError U+87D7");
expect(() => {ms932Encoder.encode("\u87D8")}).to.throw(Error, "EncodingError U+87D8");
expect(() => {ms932Encoder.encode("\u87D9")}).to.throw(Error, "EncodingError U+87D9");
expect(() => {ms932Encoder.encode("\u87DA")}).to.throw(Error, "EncodingError U+87DA");
expect(() => {ms932Encoder.encode("\u87DB")}).to.throw(Error, "EncodingError U+87DB");
expect(() => {ms932Encoder.encode("\u87DC")}).to.throw(Error, "EncodingError U+87DC");
expect(() => {ms932Encoder.encode("\u87DD")}).to.throw(Error, "EncodingError U+87DD");
expect(() => {ms932Encoder.encode("\u87DE")}).to.throw(Error, "EncodingError U+87DE");
expect(() => {ms932Encoder.encode("\u87DF")}).to.throw(Error, "EncodingError U+87DF");
r = r && ([...ms932Encoder.encode("蟠")].join(",") === "229,180"); // U+87E0
expect(() => {ms932Encoder.encode("\u87E1")}).to.throw(Error, "EncodingError U+87E1");
expect(() => {ms932Encoder.encode("\u87E2")}).to.throw(Error, "EncodingError U+87E2");
expect(() => {ms932Encoder.encode("\u87E3")}).to.throw(Error, "EncodingError U+87E3");
expect(() => {ms932Encoder.encode("\u87E4")}).to.throw(Error, "EncodingError U+87E4");
expect(() => {ms932Encoder.encode("\u87E5")}).to.throw(Error, "EncodingError U+87E5");
expect(() => {ms932Encoder.encode("\u87E6")}).to.throw(Error, "EncodingError U+87E6");
expect(() => {ms932Encoder.encode("\u87E7")}).to.throw(Error, "EncodingError U+87E7");
expect(() => {ms932Encoder.encode("\u87E8")}).to.throw(Error, "EncodingError U+87E8");
expect(() => {ms932Encoder.encode("\u87E9")}).to.throw(Error, "EncodingError U+87E9");
expect(() => {ms932Encoder.encode("\u87EA")}).to.throw(Error, "EncodingError U+87EA");
expect(() => {ms932Encoder.encode("\u87EB")}).to.throw(Error, "EncodingError U+87EB");
expect(() => {ms932Encoder.encode("\u87EC")}).to.throw(Error, "EncodingError U+87EC");
expect(() => {ms932Encoder.encode("\u87ED")}).to.throw(Error, "EncodingError U+87ED");
expect(() => {ms932Encoder.encode("\u87EE")}).to.throw(Error, "EncodingError U+87EE");
r = r && ([...ms932Encoder.encode("蟯")].join(",") === "229,178"); // U+87EF
expect(() => {ms932Encoder.encode("\u87F0")}).to.throw(Error, "EncodingError U+87F0");
expect(() => {ms932Encoder.encode("\u87F1")}).to.throw(Error, "EncodingError U+87F1");
r = r && ([...ms932Encoder.encode("蟲")].join(",") === "229,179"); // U+87F2
expect(() => {ms932Encoder.encode("\u87F3")}).to.throw(Error, "EncodingError U+87F3");
expect(() => {ms932Encoder.encode("\u87F4")}).to.throw(Error, "EncodingError U+87F4");
expect(() => {ms932Encoder.encode("\u87F5")}).to.throw(Error, "EncodingError U+87F5");
r = r && ([...ms932Encoder.encode("蟶蟷")].join(",") === "229,184,229,185"); // U+87F6
expect(() => {ms932Encoder.encode("\u87F8")}).to.throw(Error, "EncodingError U+87F8");
r = r && ([...ms932Encoder.encode("蟹")].join(",") === "138,73"); // U+87F9
expect(() => {ms932Encoder.encode("\u87FA")}).to.throw(Error, "EncodingError U+87FA");
r = r && ([...ms932Encoder.encode("蟻")].join(",") === "139,97"); // U+87FB
expect(() => {ms932Encoder.encode("\u87FC")}).to.throw(Error, "EncodingError U+87FC");
expect(() => {ms932Encoder.encode("\u87FD")}).to.throw(Error, "EncodingError U+87FD");
r = r && ([...ms932Encoder.encode("蟾")].join(",") === "229,183"); // U+87FE
expect(() => {ms932Encoder.encode("\u87FF")}).to.throw(Error, "EncodingError U+87FF");

expect(r).to.equal(true);

  });

});
