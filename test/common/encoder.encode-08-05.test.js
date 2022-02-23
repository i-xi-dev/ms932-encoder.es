import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "../../dist/index.js";

describe("Ms932Encoder.prototype.encode 8", () => {

  it("encode(string) - U+7400-U+77FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u7400")}).to.throw(Error, "EncodingError U+7400");
expect(() => {ms932Encoder.encode("\u7401")}).to.throw(Error, "EncodingError U+7401");
expect(() => {ms932Encoder.encode("\u7402")}).to.throw(Error, "EncodingError U+7402");
r = r && ([...ms932Encoder.encode("球")].join(",") === "139,133"); // U+7403
expect(() => {ms932Encoder.encode("\u7404")}).to.throw(Error, "EncodingError U+7404");
r = r && ([...ms932Encoder.encode("琅理琇")].join(",") === "224,228,151,157,251,101"); // U+7405
expect(() => {ms932Encoder.encode("\u7408")}).to.throw(Error, "EncodingError U+7408");
r = r && ([...ms932Encoder.encode("琉")].join(",") === "151,174"); // U+7409
expect(() => {ms932Encoder.encode("\u740A")}).to.throw(Error, "EncodingError U+740A");
expect(() => {ms932Encoder.encode("\u740B")}).to.throw(Error, "EncodingError U+740B");
expect(() => {ms932Encoder.encode("\u740C")}).to.throw(Error, "EncodingError U+740C");
expect(() => {ms932Encoder.encode("\u740D")}).to.throw(Error, "EncodingError U+740D");
expect(() => {ms932Encoder.encode("\u740E")}).to.throw(Error, "EncodingError U+740E");
expect(() => {ms932Encoder.encode("\u740F")}).to.throw(Error, "EncodingError U+740F");
expect(() => {ms932Encoder.encode("\u7410")}).to.throw(Error, "EncodingError U+7410");
expect(() => {ms932Encoder.encode("\u7411")}).to.throw(Error, "EncodingError U+7411");
expect(() => {ms932Encoder.encode("\u7412")}).to.throw(Error, "EncodingError U+7412");
expect(() => {ms932Encoder.encode("\u7413")}).to.throw(Error, "EncodingError U+7413");
expect(() => {ms932Encoder.encode("\u7414")}).to.throw(Error, "EncodingError U+7414");
expect(() => {ms932Encoder.encode("\u7415")}).to.throw(Error, "EncodingError U+7415");
expect(() => {ms932Encoder.encode("\u7416")}).to.throw(Error, "EncodingError U+7416");
expect(() => {ms932Encoder.encode("\u7417")}).to.throw(Error, "EncodingError U+7417");
expect(() => {ms932Encoder.encode("\u7418")}).to.throw(Error, "EncodingError U+7418");
expect(() => {ms932Encoder.encode("\u7419")}).to.throw(Error, "EncodingError U+7419");
expect(() => {ms932Encoder.encode("\u741A")}).to.throw(Error, "EncodingError U+741A");
expect(() => {ms932Encoder.encode("\u741B")}).to.throw(Error, "EncodingError U+741B");
expect(() => {ms932Encoder.encode("\u741C")}).to.throw(Error, "EncodingError U+741C");
expect(() => {ms932Encoder.encode("\u741D")}).to.throw(Error, "EncodingError U+741D");
expect(() => {ms932Encoder.encode("\u741E")}).to.throw(Error, "EncodingError U+741E");
expect(() => {ms932Encoder.encode("\u741F")}).to.throw(Error, "EncodingError U+741F");
expect(() => {ms932Encoder.encode("\u7420")}).to.throw(Error, "EncodingError U+7420");
expect(() => {ms932Encoder.encode("\u7421")}).to.throw(Error, "EncodingError U+7421");
r = r && ([...ms932Encoder.encode("琢")].join(",") === "145,244"); // U+7422
expect(() => {ms932Encoder.encode("\u7423")}).to.throw(Error, "EncodingError U+7423");
expect(() => {ms932Encoder.encode("\u7424")}).to.throw(Error, "EncodingError U+7424");
r = r && ([...ms932Encoder.encode("琥琦")].join(",") === "224,230,251,103"); // U+7425
expect(() => {ms932Encoder.encode("\u7427")}).to.throw(Error, "EncodingError U+7427");
expect(() => {ms932Encoder.encode("\u7428")}).to.throw(Error, "EncodingError U+7428");
r = r && ([...ms932Encoder.encode("琩琪")].join(",") === "251,105,251,104"); // U+7429
expect(() => {ms932Encoder.encode("\u742B")}).to.throw(Error, "EncodingError U+742B");
expect(() => {ms932Encoder.encode("\u742C")}).to.throw(Error, "EncodingError U+742C");
expect(() => {ms932Encoder.encode("\u742D")}).to.throw(Error, "EncodingError U+742D");
r = r && ([...ms932Encoder.encode("琮")].join(",") === "251,106"); // U+742E
expect(() => {ms932Encoder.encode("\u742F")}).to.throw(Error, "EncodingError U+742F");
expect(() => {ms932Encoder.encode("\u7430")}).to.throw(Error, "EncodingError U+7430");
expect(() => {ms932Encoder.encode("\u7431")}).to.throw(Error, "EncodingError U+7431");
r = r && ([...ms932Encoder.encode("琲琳琴琵琶")].join(",") === "224,232,151,212,139,213,148,250,148,105"); // U+7432
expect(() => {ms932Encoder.encode("\u7437")}).to.throw(Error, "EncodingError U+7437");
expect(() => {ms932Encoder.encode("\u7438")}).to.throw(Error, "EncodingError U+7438");
expect(() => {ms932Encoder.encode("\u7439")}).to.throw(Error, "EncodingError U+7439");
r = r && ([...ms932Encoder.encode("琺")].join(",") === "224,233"); // U+743A
expect(() => {ms932Encoder.encode("\u743B")}).to.throw(Error, "EncodingError U+743B");
expect(() => {ms932Encoder.encode("\u743C")}).to.throw(Error, "EncodingError U+743C");
expect(() => {ms932Encoder.encode("\u743D")}).to.throw(Error, "EncodingError U+743D");
expect(() => {ms932Encoder.encode("\u743E")}).to.throw(Error, "EncodingError U+743E");
r = r && ([...ms932Encoder.encode("琿")].join(",") === "224,235"); // U+743F
expect(() => {ms932Encoder.encode("\u7440")}).to.throw(Error, "EncodingError U+7440");
r = r && ([...ms932Encoder.encode("瑁")].join(",") === "224,238"); // U+7441
expect(() => {ms932Encoder.encode("\u7442")}).to.throw(Error, "EncodingError U+7442");
expect(() => {ms932Encoder.encode("\u7443")}).to.throw(Error, "EncodingError U+7443");
expect(() => {ms932Encoder.encode("\u7444")}).to.throw(Error, "EncodingError U+7444");
expect(() => {ms932Encoder.encode("\u7445")}).to.throw(Error, "EncodingError U+7445");
expect(() => {ms932Encoder.encode("\u7446")}).to.throw(Error, "EncodingError U+7446");
expect(() => {ms932Encoder.encode("\u7447")}).to.throw(Error, "EncodingError U+7447");
expect(() => {ms932Encoder.encode("\u7448")}).to.throw(Error, "EncodingError U+7448");
expect(() => {ms932Encoder.encode("\u7449")}).to.throw(Error, "EncodingError U+7449");
expect(() => {ms932Encoder.encode("\u744A")}).to.throw(Error, "EncodingError U+744A");
expect(() => {ms932Encoder.encode("\u744B")}).to.throw(Error, "EncodingError U+744B");
expect(() => {ms932Encoder.encode("\u744C")}).to.throw(Error, "EncodingError U+744C");
expect(() => {ms932Encoder.encode("\u744D")}).to.throw(Error, "EncodingError U+744D");
expect(() => {ms932Encoder.encode("\u744E")}).to.throw(Error, "EncodingError U+744E");
expect(() => {ms932Encoder.encode("\u744F")}).to.throw(Error, "EncodingError U+744F");
expect(() => {ms932Encoder.encode("\u7450")}).to.throw(Error, "EncodingError U+7450");
expect(() => {ms932Encoder.encode("\u7451")}).to.throw(Error, "EncodingError U+7451");
expect(() => {ms932Encoder.encode("\u7452")}).to.throw(Error, "EncodingError U+7452");
expect(() => {ms932Encoder.encode("\u7453")}).to.throw(Error, "EncodingError U+7453");
expect(() => {ms932Encoder.encode("\u7454")}).to.throw(Error, "EncodingError U+7454");
r = r && ([...ms932Encoder.encode("瑕")].join(",") === "224,234"); // U+7455
expect(() => {ms932Encoder.encode("\u7456")}).to.throw(Error, "EncodingError U+7456");
expect(() => {ms932Encoder.encode("\u7457")}).to.throw(Error, "EncodingError U+7457");
expect(() => {ms932Encoder.encode("\u7458")}).to.throw(Error, "EncodingError U+7458");
r = r && ([...ms932Encoder.encode("瑙瑚瑛瑜")].join(",") === "224,237,140,232,137,108,224,239"); // U+7459
expect(() => {ms932Encoder.encode("\u745D")}).to.throw(Error, "EncodingError U+745D");
r = r && ([...ms932Encoder.encode("瑞瑟瑠")].join(",") === "144,144,224,236,151,218"); // U+745E
expect(() => {ms932Encoder.encode("\u7461")}).to.throw(Error, "EncodingError U+7461");
r = r && ([...ms932Encoder.encode("瑢瑣瑤")].join(",") === "251,107,224,242,234,162"); // U+7462
expect(() => {ms932Encoder.encode("\u7465")}).to.throw(Error, "EncodingError U+7465");
expect(() => {ms932Encoder.encode("\u7466")}).to.throw(Error, "EncodingError U+7466");
expect(() => {ms932Encoder.encode("\u7467")}).to.throw(Error, "EncodingError U+7467");
expect(() => {ms932Encoder.encode("\u7468")}).to.throw(Error, "EncodingError U+7468");
r = r && ([...ms932Encoder.encode("瑩瑪")].join(",") === "224,240,224,243"); // U+7469
expect(() => {ms932Encoder.encode("\u746B")}).to.throw(Error, "EncodingError U+746B");
expect(() => {ms932Encoder.encode("\u746C")}).to.throw(Error, "EncodingError U+746C");
expect(() => {ms932Encoder.encode("\u746D")}).to.throw(Error, "EncodingError U+746D");
expect(() => {ms932Encoder.encode("\u746E")}).to.throw(Error, "EncodingError U+746E");
r = r && ([...ms932Encoder.encode("瑯瑰")].join(",") === "224,229,224,241"); // U+746F
expect(() => {ms932Encoder.encode("\u7471")}).to.throw(Error, "EncodingError U+7471");
expect(() => {ms932Encoder.encode("\u7472")}).to.throw(Error, "EncodingError U+7472");
r = r && ([...ms932Encoder.encode("瑳")].join(",") === "141,186"); // U+7473
expect(() => {ms932Encoder.encode("\u7474")}).to.throw(Error, "EncodingError U+7474");
expect(() => {ms932Encoder.encode("\u7475")}).to.throw(Error, "EncodingError U+7475");
r = r && ([...ms932Encoder.encode("瑶")].join(",") === "224,244"); // U+7476
expect(() => {ms932Encoder.encode("\u7477")}).to.throw(Error, "EncodingError U+7477");
expect(() => {ms932Encoder.encode("\u7478")}).to.throw(Error, "EncodingError U+7478");
expect(() => {ms932Encoder.encode("\u7479")}).to.throw(Error, "EncodingError U+7479");
expect(() => {ms932Encoder.encode("\u747A")}).to.throw(Error, "EncodingError U+747A");
expect(() => {ms932Encoder.encode("\u747B")}).to.throw(Error, "EncodingError U+747B");
expect(() => {ms932Encoder.encode("\u747C")}).to.throw(Error, "EncodingError U+747C");
expect(() => {ms932Encoder.encode("\u747D")}).to.throw(Error, "EncodingError U+747D");
r = r && ([...ms932Encoder.encode("瑾")].join(",") === "224,245"); // U+747E
expect(() => {ms932Encoder.encode("\u747F")}).to.throw(Error, "EncodingError U+747F");
expect(() => {ms932Encoder.encode("\u7480")}).to.throw(Error, "EncodingError U+7480");
expect(() => {ms932Encoder.encode("\u7481")}).to.throw(Error, "EncodingError U+7481");
expect(() => {ms932Encoder.encode("\u7482")}).to.throw(Error, "EncodingError U+7482");
r = r && ([...ms932Encoder.encode("璃")].join(",") === "151,158"); // U+7483
expect(() => {ms932Encoder.encode("\u7484")}).to.throw(Error, "EncodingError U+7484");
expect(() => {ms932Encoder.encode("\u7485")}).to.throw(Error, "EncodingError U+7485");
expect(() => {ms932Encoder.encode("\u7486")}).to.throw(Error, "EncodingError U+7486");
expect(() => {ms932Encoder.encode("\u7487")}).to.throw(Error, "EncodingError U+7487");
expect(() => {ms932Encoder.encode("\u7488")}).to.throw(Error, "EncodingError U+7488");
r = r && ([...ms932Encoder.encode("璉")].join(",") === "251,108"); // U+7489
expect(() => {ms932Encoder.encode("\u748A")}).to.throw(Error, "EncodingError U+748A");
r = r && ([...ms932Encoder.encode("璋")].join(",") === "224,246"); // U+748B
expect(() => {ms932Encoder.encode("\u748C")}).to.throw(Error, "EncodingError U+748C");
expect(() => {ms932Encoder.encode("\u748D")}).to.throw(Error, "EncodingError U+748D");
expect(() => {ms932Encoder.encode("\u748E")}).to.throw(Error, "EncodingError U+748E");
expect(() => {ms932Encoder.encode("\u748F")}).to.throw(Error, "EncodingError U+748F");
expect(() => {ms932Encoder.encode("\u7490")}).to.throw(Error, "EncodingError U+7490");
expect(() => {ms932Encoder.encode("\u7491")}).to.throw(Error, "EncodingError U+7491");
expect(() => {ms932Encoder.encode("\u7492")}).to.throw(Error, "EncodingError U+7492");
expect(() => {ms932Encoder.encode("\u7493")}).to.throw(Error, "EncodingError U+7493");
expect(() => {ms932Encoder.encode("\u7494")}).to.throw(Error, "EncodingError U+7494");
expect(() => {ms932Encoder.encode("\u7495")}).to.throw(Error, "EncodingError U+7495");
expect(() => {ms932Encoder.encode("\u7496")}).to.throw(Error, "EncodingError U+7496");
expect(() => {ms932Encoder.encode("\u7497")}).to.throw(Error, "EncodingError U+7497");
expect(() => {ms932Encoder.encode("\u7498")}).to.throw(Error, "EncodingError U+7498");
expect(() => {ms932Encoder.encode("\u7499")}).to.throw(Error, "EncodingError U+7499");
expect(() => {ms932Encoder.encode("\u749A")}).to.throw(Error, "EncodingError U+749A");
expect(() => {ms932Encoder.encode("\u749B")}).to.throw(Error, "EncodingError U+749B");
expect(() => {ms932Encoder.encode("\u749C")}).to.throw(Error, "EncodingError U+749C");
expect(() => {ms932Encoder.encode("\u749D")}).to.throw(Error, "EncodingError U+749D");
r = r && ([...ms932Encoder.encode("璞璟")].join(",") === "224,247,251,109"); // U+749E
expect(() => {ms932Encoder.encode("\u74A0")}).to.throw(Error, "EncodingError U+74A0");
expect(() => {ms932Encoder.encode("\u74A1")}).to.throw(Error, "EncodingError U+74A1");
r = r && ([...ms932Encoder.encode("璢")].join(",") === "224,227"); // U+74A2
expect(() => {ms932Encoder.encode("\u74A3")}).to.throw(Error, "EncodingError U+74A3");
expect(() => {ms932Encoder.encode("\u74A4")}).to.throw(Error, "EncodingError U+74A4");
expect(() => {ms932Encoder.encode("\u74A5")}).to.throw(Error, "EncodingError U+74A5");
expect(() => {ms932Encoder.encode("\u74A6")}).to.throw(Error, "EncodingError U+74A6");
r = r && ([...ms932Encoder.encode("璧")].join(",") === "224,248"); // U+74A7
expect(() => {ms932Encoder.encode("\u74A8")}).to.throw(Error, "EncodingError U+74A8");
expect(() => {ms932Encoder.encode("\u74A9")}).to.throw(Error, "EncodingError U+74A9");
expect(() => {ms932Encoder.encode("\u74AA")}).to.throw(Error, "EncodingError U+74AA");
expect(() => {ms932Encoder.encode("\u74AB")}).to.throw(Error, "EncodingError U+74AB");
expect(() => {ms932Encoder.encode("\u74AC")}).to.throw(Error, "EncodingError U+74AC");
expect(() => {ms932Encoder.encode("\u74AD")}).to.throw(Error, "EncodingError U+74AD");
expect(() => {ms932Encoder.encode("\u74AE")}).to.throw(Error, "EncodingError U+74AE");
expect(() => {ms932Encoder.encode("\u74AF")}).to.throw(Error, "EncodingError U+74AF");
r = r && ([...ms932Encoder.encode("環")].join(",") === "138,194"); // U+74B0
expect(() => {ms932Encoder.encode("\u74B1")}).to.throw(Error, "EncodingError U+74B1");
expect(() => {ms932Encoder.encode("\u74B2")}).to.throw(Error, "EncodingError U+74B2");
expect(() => {ms932Encoder.encode("\u74B3")}).to.throw(Error, "EncodingError U+74B3");
expect(() => {ms932Encoder.encode("\u74B4")}).to.throw(Error, "EncodingError U+74B4");
expect(() => {ms932Encoder.encode("\u74B5")}).to.throw(Error, "EncodingError U+74B5");
expect(() => {ms932Encoder.encode("\u74B6")}).to.throw(Error, "EncodingError U+74B6");
expect(() => {ms932Encoder.encode("\u74B7")}).to.throw(Error, "EncodingError U+74B7");
expect(() => {ms932Encoder.encode("\u74B8")}).to.throw(Error, "EncodingError U+74B8");
expect(() => {ms932Encoder.encode("\u74B9")}).to.throw(Error, "EncodingError U+74B9");
expect(() => {ms932Encoder.encode("\u74BA")}).to.throw(Error, "EncodingError U+74BA");
expect(() => {ms932Encoder.encode("\u74BB")}).to.throw(Error, "EncodingError U+74BB");
expect(() => {ms932Encoder.encode("\u74BC")}).to.throw(Error, "EncodingError U+74BC");
r = r && ([...ms932Encoder.encode("璽")].join(",") === "142,163"); // U+74BD
expect(() => {ms932Encoder.encode("\u74BE")}).to.throw(Error, "EncodingError U+74BE");
expect(() => {ms932Encoder.encode("\u74BF")}).to.throw(Error, "EncodingError U+74BF");
expect(() => {ms932Encoder.encode("\u74C0")}).to.throw(Error, "EncodingError U+74C0");
expect(() => {ms932Encoder.encode("\u74C1")}).to.throw(Error, "EncodingError U+74C1");
expect(() => {ms932Encoder.encode("\u74C2")}).to.throw(Error, "EncodingError U+74C2");
expect(() => {ms932Encoder.encode("\u74C3")}).to.throw(Error, "EncodingError U+74C3");
expect(() => {ms932Encoder.encode("\u74C4")}).to.throw(Error, "EncodingError U+74C4");
expect(() => {ms932Encoder.encode("\u74C5")}).to.throw(Error, "EncodingError U+74C5");
expect(() => {ms932Encoder.encode("\u74C6")}).to.throw(Error, "EncodingError U+74C6");
expect(() => {ms932Encoder.encode("\u74C7")}).to.throw(Error, "EncodingError U+74C7");
expect(() => {ms932Encoder.encode("\u74C8")}).to.throw(Error, "EncodingError U+74C8");
expect(() => {ms932Encoder.encode("\u74C9")}).to.throw(Error, "EncodingError U+74C9");
r = r && ([...ms932Encoder.encode("瓊")].join(",") === "224,249"); // U+74CA
expect(() => {ms932Encoder.encode("\u74CB")}).to.throw(Error, "EncodingError U+74CB");
expect(() => {ms932Encoder.encode("\u74CC")}).to.throw(Error, "EncodingError U+74CC");
expect(() => {ms932Encoder.encode("\u74CD")}).to.throw(Error, "EncodingError U+74CD");
expect(() => {ms932Encoder.encode("\u74CE")}).to.throw(Error, "EncodingError U+74CE");
r = r && ([...ms932Encoder.encode("瓏")].join(",") === "224,250"); // U+74CF
expect(() => {ms932Encoder.encode("\u74D0")}).to.throw(Error, "EncodingError U+74D0");
expect(() => {ms932Encoder.encode("\u74D1")}).to.throw(Error, "EncodingError U+74D1");
expect(() => {ms932Encoder.encode("\u74D2")}).to.throw(Error, "EncodingError U+74D2");
expect(() => {ms932Encoder.encode("\u74D3")}).to.throw(Error, "EncodingError U+74D3");
r = r && ([...ms932Encoder.encode("瓔")].join(",") === "224,251"); // U+74D4
expect(() => {ms932Encoder.encode("\u74D5")}).to.throw(Error, "EncodingError U+74D5");
expect(() => {ms932Encoder.encode("\u74D6")}).to.throw(Error, "EncodingError U+74D6");
expect(() => {ms932Encoder.encode("\u74D7")}).to.throw(Error, "EncodingError U+74D7");
expect(() => {ms932Encoder.encode("\u74D8")}).to.throw(Error, "EncodingError U+74D8");
expect(() => {ms932Encoder.encode("\u74D9")}).to.throw(Error, "EncodingError U+74D9");
expect(() => {ms932Encoder.encode("\u74DA")}).to.throw(Error, "EncodingError U+74DA");
expect(() => {ms932Encoder.encode("\u74DB")}).to.throw(Error, "EncodingError U+74DB");
r = r && ([...ms932Encoder.encode("瓜")].join(",") === "137,90"); // U+74DC
expect(() => {ms932Encoder.encode("\u74DD")}).to.throw(Error, "EncodingError U+74DD");
expect(() => {ms932Encoder.encode("\u74DE")}).to.throw(Error, "EncodingError U+74DE");
expect(() => {ms932Encoder.encode("\u74DF")}).to.throw(Error, "EncodingError U+74DF");
r = r && ([...ms932Encoder.encode("瓠")].join(",") === "225,64"); // U+74E0
expect(() => {ms932Encoder.encode("\u74E1")}).to.throw(Error, "EncodingError U+74E1");
r = r && ([...ms932Encoder.encode("瓢瓣")].join(",") === "149,90,225,65"); // U+74E2
expect(() => {ms932Encoder.encode("\u74E4")}).to.throw(Error, "EncodingError U+74E4");
expect(() => {ms932Encoder.encode("\u74E5")}).to.throw(Error, "EncodingError U+74E5");
r = r && ([...ms932Encoder.encode("瓦瓧")].join(",") === "138,162,225,66"); // U+74E6
expect(() => {ms932Encoder.encode("\u74E8")}).to.throw(Error, "EncodingError U+74E8");
r = r && ([...ms932Encoder.encode("瓩")].join(",") === "225,67"); // U+74E9
expect(() => {ms932Encoder.encode("\u74EA")}).to.throw(Error, "EncodingError U+74EA");
expect(() => {ms932Encoder.encode("\u74EB")}).to.throw(Error, "EncodingError U+74EB");
expect(() => {ms932Encoder.encode("\u74EC")}).to.throw(Error, "EncodingError U+74EC");
expect(() => {ms932Encoder.encode("\u74ED")}).to.throw(Error, "EncodingError U+74ED");
r = r && ([...ms932Encoder.encode("瓮")].join(",") === "225,68"); // U+74EE
expect(() => {ms932Encoder.encode("\u74EF")}).to.throw(Error, "EncodingError U+74EF");
r = r && ([...ms932Encoder.encode("瓰瓱瓲")].join(",") === "225,70,225,71,225,69"); // U+74F0
expect(() => {ms932Encoder.encode("\u74F3")}).to.throw(Error, "EncodingError U+74F3");
expect(() => {ms932Encoder.encode("\u74F4")}).to.throw(Error, "EncodingError U+74F4");
expect(() => {ms932Encoder.encode("\u74F5")}).to.throw(Error, "EncodingError U+74F5");
r = r && ([...ms932Encoder.encode("瓶瓷瓸")].join(",") === "149,114,225,73,225,72"); // U+74F6
expect(() => {ms932Encoder.encode("\u74F9")}).to.throw(Error, "EncodingError U+74F9");
expect(() => {ms932Encoder.encode("\u74FA")}).to.throw(Error, "EncodingError U+74FA");
expect(() => {ms932Encoder.encode("\u74FB")}).to.throw(Error, "EncodingError U+74FB");
expect(() => {ms932Encoder.encode("\u74FC")}).to.throw(Error, "EncodingError U+74FC");
expect(() => {ms932Encoder.encode("\u74FD")}).to.throw(Error, "EncodingError U+74FD");
expect(() => {ms932Encoder.encode("\u74FE")}).to.throw(Error, "EncodingError U+74FE");
expect(() => {ms932Encoder.encode("\u74FF")}).to.throw(Error, "EncodingError U+74FF");
expect(() => {ms932Encoder.encode("\u7500")}).to.throw(Error, "EncodingError U+7500");
r = r && ([...ms932Encoder.encode("甁")].join(",") === "251,110"); // U+7501
expect(() => {ms932Encoder.encode("\u7502")}).to.throw(Error, "EncodingError U+7502");
r = r && ([...ms932Encoder.encode("甃甄甅")].join(",") === "225,75,225,74,225,76"); // U+7503
expect(() => {ms932Encoder.encode("\u7506")}).to.throw(Error, "EncodingError U+7506");
expect(() => {ms932Encoder.encode("\u7507")}).to.throw(Error, "EncodingError U+7507");
expect(() => {ms932Encoder.encode("\u7508")}).to.throw(Error, "EncodingError U+7508");
expect(() => {ms932Encoder.encode("\u7509")}).to.throw(Error, "EncodingError U+7509");
expect(() => {ms932Encoder.encode("\u750A")}).to.throw(Error, "EncodingError U+750A");
expect(() => {ms932Encoder.encode("\u750B")}).to.throw(Error, "EncodingError U+750B");
r = r && ([...ms932Encoder.encode("甌甍甎")].join(",") === "225,77,225,79,225,78"); // U+750C
expect(() => {ms932Encoder.encode("\u750F")}).to.throw(Error, "EncodingError U+750F");
expect(() => {ms932Encoder.encode("\u7510")}).to.throw(Error, "EncodingError U+7510");
r = r && ([...ms932Encoder.encode("甑")].join(",") === "141,153"); // U+7511
expect(() => {ms932Encoder.encode("\u7512")}).to.throw(Error, "EncodingError U+7512");
r = r && ([...ms932Encoder.encode("甓")].join(",") === "225,81"); // U+7513
expect(() => {ms932Encoder.encode("\u7514")}).to.throw(Error, "EncodingError U+7514");
r = r && ([...ms932Encoder.encode("甕")].join(",") === "225,80"); // U+7515
expect(() => {ms932Encoder.encode("\u7516")}).to.throw(Error, "EncodingError U+7516");
expect(() => {ms932Encoder.encode("\u7517")}).to.throw(Error, "EncodingError U+7517");
r = r && ([...ms932Encoder.encode("甘")].join(",") === "138,195"); // U+7518
expect(() => {ms932Encoder.encode("\u7519")}).to.throw(Error, "EncodingError U+7519");
r = r && ([...ms932Encoder.encode("甚")].join(",") === "144,114"); // U+751A
expect(() => {ms932Encoder.encode("\u751B")}).to.throw(Error, "EncodingError U+751B");
r = r && ([...ms932Encoder.encode("甜")].join(",") === "147,91"); // U+751C
expect(() => {ms932Encoder.encode("\u751D")}).to.throw(Error, "EncodingError U+751D");
r = r && ([...ms932Encoder.encode("甞生")].join(",") === "225,82,144,182"); // U+751E
expect(() => {ms932Encoder.encode("\u7520")}).to.throw(Error, "EncodingError U+7520");
expect(() => {ms932Encoder.encode("\u7521")}).to.throw(Error, "EncodingError U+7521");
expect(() => {ms932Encoder.encode("\u7522")}).to.throw(Error, "EncodingError U+7522");
r = r && ([...ms932Encoder.encode("産")].join(",") === "142,89"); // U+7523
expect(() => {ms932Encoder.encode("\u7524")}).to.throw(Error, "EncodingError U+7524");
r = r && ([...ms932Encoder.encode("甥甦")].join(",") === "137,153,225,83"); // U+7525
expect(() => {ms932Encoder.encode("\u7527")}).to.throw(Error, "EncodingError U+7527");
r = r && ([...ms932Encoder.encode("用")].join(",") === "151,112"); // U+7528
expect(() => {ms932Encoder.encode("\u7529")}).to.throw(Error, "EncodingError U+7529");
expect(() => {ms932Encoder.encode("\u752A")}).to.throw(Error, "EncodingError U+752A");
r = r && ([...ms932Encoder.encode("甫甬")].join(",") === "149,225,225,84"); // U+752B
expect(() => {ms932Encoder.encode("\u752D")}).to.throw(Error, "EncodingError U+752D");
expect(() => {ms932Encoder.encode("\u752E")}).to.throw(Error, "EncodingError U+752E");
r = r && ([...ms932Encoder.encode("甯田由甲申")].join(",") === "250,168,147,99,151,82,141,98,144,92"); // U+752F
expect(() => {ms932Encoder.encode("\u7534")}).to.throw(Error, "EncodingError U+7534");
expect(() => {ms932Encoder.encode("\u7535")}).to.throw(Error, "EncodingError U+7535");
expect(() => {ms932Encoder.encode("\u7536")}).to.throw(Error, "EncodingError U+7536");
r = r && ([...ms932Encoder.encode("男甸")].join(",") === "146,106,153,178"); // U+7537
expect(() => {ms932Encoder.encode("\u7539")}).to.throw(Error, "EncodingError U+7539");
r = r && ([...ms932Encoder.encode("町画甼")].join(",") === "146,172,137,230,225,85"); // U+753A
expect(() => {ms932Encoder.encode("\u753D")}).to.throw(Error, "EncodingError U+753D");
expect(() => {ms932Encoder.encode("\u753E")}).to.throw(Error, "EncodingError U+753E");
expect(() => {ms932Encoder.encode("\u753F")}).to.throw(Error, "EncodingError U+753F");
expect(() => {ms932Encoder.encode("\u7540")}).to.throw(Error, "EncodingError U+7540");
expect(() => {ms932Encoder.encode("\u7541")}).to.throw(Error, "EncodingError U+7541");
expect(() => {ms932Encoder.encode("\u7542")}).to.throw(Error, "EncodingError U+7542");
expect(() => {ms932Encoder.encode("\u7543")}).to.throw(Error, "EncodingError U+7543");
r = r && ([...ms932Encoder.encode("畄")].join(",") === "225,86"); // U+7544
expect(() => {ms932Encoder.encode("\u7545")}).to.throw(Error, "EncodingError U+7545");
r = r && ([...ms932Encoder.encode("畆")].join(",") === "225,91"); // U+7546
expect(() => {ms932Encoder.encode("\u7547")}).to.throw(Error, "EncodingError U+7547");
expect(() => {ms932Encoder.encode("\u7548")}).to.throw(Error, "EncodingError U+7548");
r = r && ([...ms932Encoder.encode("畉畊畋界畍")].join(",") === "225,89,225,88,157,192,138,69,225,87"); // U+7549
expect(() => {ms932Encoder.encode("\u754E")}).to.throw(Error, "EncodingError U+754E");
r = r && ([...ms932Encoder.encode("畏")].join(",") === "136,216"); // U+754F
expect(() => {ms932Encoder.encode("\u7550")}).to.throw(Error, "EncodingError U+7550");
r = r && ([...ms932Encoder.encode("畑")].join(",") === "148,168"); // U+7551
expect(() => {ms932Encoder.encode("\u7552")}).to.throw(Error, "EncodingError U+7552");
expect(() => {ms932Encoder.encode("\u7553")}).to.throw(Error, "EncodingError U+7553");
r = r && ([...ms932Encoder.encode("畔")].join(",") === "148,200"); // U+7554
expect(() => {ms932Encoder.encode("\u7555")}).to.throw(Error, "EncodingError U+7555");
expect(() => {ms932Encoder.encode("\u7556")}).to.throw(Error, "EncodingError U+7556");
expect(() => {ms932Encoder.encode("\u7557")}).to.throw(Error, "EncodingError U+7557");
expect(() => {ms932Encoder.encode("\u7558")}).to.throw(Error, "EncodingError U+7558");
r = r && ([...ms932Encoder.encode("留畚畛畜畝")].join(",") === "151,175,225,92,225,90,146,123,144,164"); // U+7559
expect(() => {ms932Encoder.encode("\u755E")}).to.throw(Error, "EncodingError U+755E");
expect(() => {ms932Encoder.encode("\u755F")}).to.throw(Error, "EncodingError U+755F");
r = r && ([...ms932Encoder.encode("畠")].join(",") === "148,169"); // U+7560
expect(() => {ms932Encoder.encode("\u7561")}).to.throw(Error, "EncodingError U+7561");
r = r && ([...ms932Encoder.encode("畢")].join(",") === "149,76"); // U+7562
expect(() => {ms932Encoder.encode("\u7563")}).to.throw(Error, "EncodingError U+7563");
r = r && ([...ms932Encoder.encode("畤略畦畧")].join(",") === "225,94,151,170,140,108,225,95"); // U+7564
expect(() => {ms932Encoder.encode("\u7568")}).to.throw(Error, "EncodingError U+7568");
r = r && ([...ms932Encoder.encode("畩番畫")].join(",") === "225,93,148,212,225,96"); // U+7569
expect(() => {ms932Encoder.encode("\u756C")}).to.throw(Error, "EncodingError U+756C");
r = r && ([...ms932Encoder.encode("畭")].join(",") === "225,97"); // U+756D
expect(() => {ms932Encoder.encode("\u756E")}).to.throw(Error, "EncodingError U+756E");
r = r && ([...ms932Encoder.encode("畯異")].join(",") === "251,111,136,217"); // U+756F
expect(() => {ms932Encoder.encode("\u7571")}).to.throw(Error, "EncodingError U+7571");
expect(() => {ms932Encoder.encode("\u7572")}).to.throw(Error, "EncodingError U+7572");
r = r && ([...ms932Encoder.encode("畳畴")].join(",") === "143,244,225,102"); // U+7573
expect(() => {ms932Encoder.encode("\u7575")}).to.throw(Error, "EncodingError U+7575");
r = r && ([...ms932Encoder.encode("當畷畸")].join(",") === "225,99,147,235,225,98"); // U+7576
expect(() => {ms932Encoder.encode("\u7579")}).to.throw(Error, "EncodingError U+7579");
expect(() => {ms932Encoder.encode("\u757A")}).to.throw(Error, "EncodingError U+757A");
expect(() => {ms932Encoder.encode("\u757B")}).to.throw(Error, "EncodingError U+757B");
expect(() => {ms932Encoder.encode("\u757C")}).to.throw(Error, "EncodingError U+757C");
expect(() => {ms932Encoder.encode("\u757D")}).to.throw(Error, "EncodingError U+757D");
expect(() => {ms932Encoder.encode("\u757E")}).to.throw(Error, "EncodingError U+757E");
r = r && ([...ms932Encoder.encode("畿")].join(",") === "139,69"); // U+757F
expect(() => {ms932Encoder.encode("\u7580")}).to.throw(Error, "EncodingError U+7580");
expect(() => {ms932Encoder.encode("\u7581")}).to.throw(Error, "EncodingError U+7581");
r = r && ([...ms932Encoder.encode("疂")].join(",") === "225,105"); // U+7582
expect(() => {ms932Encoder.encode("\u7583")}).to.throw(Error, "EncodingError U+7583");
expect(() => {ms932Encoder.encode("\u7584")}).to.throw(Error, "EncodingError U+7584");
expect(() => {ms932Encoder.encode("\u7585")}).to.throw(Error, "EncodingError U+7585");
r = r && ([...ms932Encoder.encode("疆疇")].join(",") === "225,100,225,101"); // U+7586
expect(() => {ms932Encoder.encode("\u7588")}).to.throw(Error, "EncodingError U+7588");
r = r && ([...ms932Encoder.encode("疉疊疋")].join(",") === "225,104,225,103,149,68"); // U+7589
expect(() => {ms932Encoder.encode("\u758C")}).to.throw(Error, "EncodingError U+758C");
expect(() => {ms932Encoder.encode("\u758D")}).to.throw(Error, "EncodingError U+758D");
r = r && ([...ms932Encoder.encode("疎疏")].join(",") === "145,97,145,96"); // U+758E
expect(() => {ms932Encoder.encode("\u7590")}).to.throw(Error, "EncodingError U+7590");
r = r && ([...ms932Encoder.encode("疑")].join(",") === "139,94"); // U+7591
expect(() => {ms932Encoder.encode("\u7592")}).to.throw(Error, "EncodingError U+7592");
expect(() => {ms932Encoder.encode("\u7593")}).to.throw(Error, "EncodingError U+7593");
r = r && ([...ms932Encoder.encode("疔")].join(",") === "225,106"); // U+7594
expect(() => {ms932Encoder.encode("\u7595")}).to.throw(Error, "EncodingError U+7595");
expect(() => {ms932Encoder.encode("\u7596")}).to.throw(Error, "EncodingError U+7596");
expect(() => {ms932Encoder.encode("\u7597")}).to.throw(Error, "EncodingError U+7597");
expect(() => {ms932Encoder.encode("\u7598")}).to.throw(Error, "EncodingError U+7598");
expect(() => {ms932Encoder.encode("\u7599")}).to.throw(Error, "EncodingError U+7599");
r = r && ([...ms932Encoder.encode("疚")].join(",") === "225,107"); // U+759A
expect(() => {ms932Encoder.encode("\u759B")}).to.throw(Error, "EncodingError U+759B");
expect(() => {ms932Encoder.encode("\u759C")}).to.throw(Error, "EncodingError U+759C");
r = r && ([...ms932Encoder.encode("疝")].join(",") === "225,108"); // U+759D
expect(() => {ms932Encoder.encode("\u759E")}).to.throw(Error, "EncodingError U+759E");
expect(() => {ms932Encoder.encode("\u759F")}).to.throw(Error, "EncodingError U+759F");
expect(() => {ms932Encoder.encode("\u75A0")}).to.throw(Error, "EncodingError U+75A0");
expect(() => {ms932Encoder.encode("\u75A1")}).to.throw(Error, "EncodingError U+75A1");
expect(() => {ms932Encoder.encode("\u75A2")}).to.throw(Error, "EncodingError U+75A2");
r = r && ([...ms932Encoder.encode("疣")].join(",") === "225,110"); // U+75A3
expect(() => {ms932Encoder.encode("\u75A4")}).to.throw(Error, "EncodingError U+75A4");
r = r && ([...ms932Encoder.encode("疥")].join(",") === "225,109"); // U+75A5
expect(() => {ms932Encoder.encode("\u75A6")}).to.throw(Error, "EncodingError U+75A6");
expect(() => {ms932Encoder.encode("\u75A7")}).to.throw(Error, "EncodingError U+75A7");
expect(() => {ms932Encoder.encode("\u75A8")}).to.throw(Error, "EncodingError U+75A8");
expect(() => {ms932Encoder.encode("\u75A9")}).to.throw(Error, "EncodingError U+75A9");
expect(() => {ms932Encoder.encode("\u75AA")}).to.throw(Error, "EncodingError U+75AA");
r = r && ([...ms932Encoder.encode("疫")].join(",") === "137,117"); // U+75AB
expect(() => {ms932Encoder.encode("\u75AC")}).to.throw(Error, "EncodingError U+75AC");
expect(() => {ms932Encoder.encode("\u75AD")}).to.throw(Error, "EncodingError U+75AD");
expect(() => {ms932Encoder.encode("\u75AE")}).to.throw(Error, "EncodingError U+75AE");
expect(() => {ms932Encoder.encode("\u75AF")}).to.throw(Error, "EncodingError U+75AF");
expect(() => {ms932Encoder.encode("\u75B0")}).to.throw(Error, "EncodingError U+75B0");
r = r && ([...ms932Encoder.encode("疱疲疳")].join(",") === "225,118,148,230,225,112"); // U+75B1
expect(() => {ms932Encoder.encode("\u75B4")}).to.throw(Error, "EncodingError U+75B4");
r = r && ([...ms932Encoder.encode("疵")].join(",") === "225,114"); // U+75B5
expect(() => {ms932Encoder.encode("\u75B6")}).to.throw(Error, "EncodingError U+75B6");
expect(() => {ms932Encoder.encode("\u75B7")}).to.throw(Error, "EncodingError U+75B7");
r = r && ([...ms932Encoder.encode("疸疹")].join(",") === "225,116,144,93"); // U+75B8
expect(() => {ms932Encoder.encode("\u75BA")}).to.throw(Error, "EncodingError U+75BA");
expect(() => {ms932Encoder.encode("\u75BB")}).to.throw(Error, "EncodingError U+75BB");
r = r && ([...ms932Encoder.encode("疼疽疾")].join(",") === "225,117,225,115,142,190"); // U+75BC
expect(() => {ms932Encoder.encode("\u75BF")}).to.throw(Error, "EncodingError U+75BF");
expect(() => {ms932Encoder.encode("\u75C0")}).to.throw(Error, "EncodingError U+75C0");
expect(() => {ms932Encoder.encode("\u75C1")}).to.throw(Error, "EncodingError U+75C1");
r = r && ([...ms932Encoder.encode("痂痃")].join(",") === "225,111,225,113"); // U+75C2
expect(() => {ms932Encoder.encode("\u75C4")}).to.throw(Error, "EncodingError U+75C4");
r = r && ([...ms932Encoder.encode("病")].join(",") === "149,97"); // U+75C5
expect(() => {ms932Encoder.encode("\u75C6")}).to.throw(Error, "EncodingError U+75C6");
r = r && ([...ms932Encoder.encode("症")].join(",") === "143,199"); // U+75C7
expect(() => {ms932Encoder.encode("\u75C8")}).to.throw(Error, "EncodingError U+75C8");
expect(() => {ms932Encoder.encode("\u75C9")}).to.throw(Error, "EncodingError U+75C9");
r = r && ([...ms932Encoder.encode("痊")].join(",") === "225,120"); // U+75CA
expect(() => {ms932Encoder.encode("\u75CB")}).to.throw(Error, "EncodingError U+75CB");
expect(() => {ms932Encoder.encode("\u75CC")}).to.throw(Error, "EncodingError U+75CC");
r = r && ([...ms932Encoder.encode("痍")].join(",") === "225,119"); // U+75CD
expect(() => {ms932Encoder.encode("\u75CE")}).to.throw(Error, "EncodingError U+75CE");
expect(() => {ms932Encoder.encode("\u75CF")}).to.throw(Error, "EncodingError U+75CF");
expect(() => {ms932Encoder.encode("\u75D0")}).to.throw(Error, "EncodingError U+75D0");
expect(() => {ms932Encoder.encode("\u75D1")}).to.throw(Error, "EncodingError U+75D1");
r = r && ([...ms932Encoder.encode("痒")].join(",") === "225,121"); // U+75D2
expect(() => {ms932Encoder.encode("\u75D3")}).to.throw(Error, "EncodingError U+75D3");
r = r && ([...ms932Encoder.encode("痔痕")].join(",") === "142,164,141,173"); // U+75D4
expect(() => {ms932Encoder.encode("\u75D6")}).to.throw(Error, "EncodingError U+75D6");
expect(() => {ms932Encoder.encode("\u75D7")}).to.throw(Error, "EncodingError U+75D7");
r = r && ([...ms932Encoder.encode("痘痙")].join(",") === "147,151,225,122"); // U+75D8
expect(() => {ms932Encoder.encode("\u75DA")}).to.throw(Error, "EncodingError U+75DA");
r = r && ([...ms932Encoder.encode("痛")].join(",") === "146,201"); // U+75DB
expect(() => {ms932Encoder.encode("\u75DC")}).to.throw(Error, "EncodingError U+75DC");
expect(() => {ms932Encoder.encode("\u75DD")}).to.throw(Error, "EncodingError U+75DD");
r = r && ([...ms932Encoder.encode("痞")].join(",") === "225,124"); // U+75DE
expect(() => {ms932Encoder.encode("\u75DF")}).to.throw(Error, "EncodingError U+75DF");
expect(() => {ms932Encoder.encode("\u75E0")}).to.throw(Error, "EncodingError U+75E0");
expect(() => {ms932Encoder.encode("\u75E1")}).to.throw(Error, "EncodingError U+75E1");
r = r && ([...ms932Encoder.encode("痢痣")].join(",") === "151,159,225,123"); // U+75E2
expect(() => {ms932Encoder.encode("\u75E4")}).to.throw(Error, "EncodingError U+75E4");
expect(() => {ms932Encoder.encode("\u75E5")}).to.throw(Error, "EncodingError U+75E5");
expect(() => {ms932Encoder.encode("\u75E6")}).to.throw(Error, "EncodingError U+75E6");
expect(() => {ms932Encoder.encode("\u75E7")}).to.throw(Error, "EncodingError U+75E7");
expect(() => {ms932Encoder.encode("\u75E8")}).to.throw(Error, "EncodingError U+75E8");
r = r && ([...ms932Encoder.encode("痩")].join(",") === "145,137"); // U+75E9
expect(() => {ms932Encoder.encode("\u75EA")}).to.throw(Error, "EncodingError U+75EA");
expect(() => {ms932Encoder.encode("\u75EB")}).to.throw(Error, "EncodingError U+75EB");
expect(() => {ms932Encoder.encode("\u75EC")}).to.throw(Error, "EncodingError U+75EC");
expect(() => {ms932Encoder.encode("\u75ED")}).to.throw(Error, "EncodingError U+75ED");
expect(() => {ms932Encoder.encode("\u75EE")}).to.throw(Error, "EncodingError U+75EE");
expect(() => {ms932Encoder.encode("\u75EF")}).to.throw(Error, "EncodingError U+75EF");
r = r && ([...ms932Encoder.encode("痰")].join(",") === "225,130"); // U+75F0
expect(() => {ms932Encoder.encode("\u75F1")}).to.throw(Error, "EncodingError U+75F1");
r = r && ([...ms932Encoder.encode("痲痳痴")].join(",") === "225,132,225,133,146,115"); // U+75F2
expect(() => {ms932Encoder.encode("\u75F5")}).to.throw(Error, "EncodingError U+75F5");
expect(() => {ms932Encoder.encode("\u75F6")}).to.throw(Error, "EncodingError U+75F6");
expect(() => {ms932Encoder.encode("\u75F7")}).to.throw(Error, "EncodingError U+75F7");
expect(() => {ms932Encoder.encode("\u75F8")}).to.throw(Error, "EncodingError U+75F8");
expect(() => {ms932Encoder.encode("\u75F9")}).to.throw(Error, "EncodingError U+75F9");
r = r && ([...ms932Encoder.encode("痺")].join(",") === "225,131"); // U+75FA
expect(() => {ms932Encoder.encode("\u75FB")}).to.throw(Error, "EncodingError U+75FB");
r = r && ([...ms932Encoder.encode("痼")].join(",") === "225,128"); // U+75FC
expect(() => {ms932Encoder.encode("\u75FD")}).to.throw(Error, "EncodingError U+75FD");
r = r && ([...ms932Encoder.encode("痾痿")].join(",") === "225,125,225,126"); // U+75FE
expect(() => {ms932Encoder.encode("\u7600")}).to.throw(Error, "EncodingError U+7600");
r = r && ([...ms932Encoder.encode("瘁")].join(",") === "225,129"); // U+7601
expect(() => {ms932Encoder.encode("\u7602")}).to.throw(Error, "EncodingError U+7602");
expect(() => {ms932Encoder.encode("\u7603")}).to.throw(Error, "EncodingError U+7603");
expect(() => {ms932Encoder.encode("\u7604")}).to.throw(Error, "EncodingError U+7604");
expect(() => {ms932Encoder.encode("\u7605")}).to.throw(Error, "EncodingError U+7605");
expect(() => {ms932Encoder.encode("\u7606")}).to.throw(Error, "EncodingError U+7606");
expect(() => {ms932Encoder.encode("\u7607")}).to.throw(Error, "EncodingError U+7607");
expect(() => {ms932Encoder.encode("\u7608")}).to.throw(Error, "EncodingError U+7608");
r = r && ([...ms932Encoder.encode("瘉")].join(",") === "225,136"); // U+7609
expect(() => {ms932Encoder.encode("\u760A")}).to.throw(Error, "EncodingError U+760A");
r = r && ([...ms932Encoder.encode("瘋")].join(",") === "225,134"); // U+760B
expect(() => {ms932Encoder.encode("\u760C")}).to.throw(Error, "EncodingError U+760C");
r = r && ([...ms932Encoder.encode("瘍")].join(",") === "225,135"); // U+760D
expect(() => {ms932Encoder.encode("\u760E")}).to.throw(Error, "EncodingError U+760E");
expect(() => {ms932Encoder.encode("\u760F")}).to.throw(Error, "EncodingError U+760F");
expect(() => {ms932Encoder.encode("\u7610")}).to.throw(Error, "EncodingError U+7610");
expect(() => {ms932Encoder.encode("\u7611")}).to.throw(Error, "EncodingError U+7611");
expect(() => {ms932Encoder.encode("\u7612")}).to.throw(Error, "EncodingError U+7612");
expect(() => {ms932Encoder.encode("\u7613")}).to.throw(Error, "EncodingError U+7613");
expect(() => {ms932Encoder.encode("\u7614")}).to.throw(Error, "EncodingError U+7614");
expect(() => {ms932Encoder.encode("\u7615")}).to.throw(Error, "EncodingError U+7615");
expect(() => {ms932Encoder.encode("\u7616")}).to.throw(Error, "EncodingError U+7616");
expect(() => {ms932Encoder.encode("\u7617")}).to.throw(Error, "EncodingError U+7617");
expect(() => {ms932Encoder.encode("\u7618")}).to.throw(Error, "EncodingError U+7618");
expect(() => {ms932Encoder.encode("\u7619")}).to.throw(Error, "EncodingError U+7619");
expect(() => {ms932Encoder.encode("\u761A")}).to.throw(Error, "EncodingError U+761A");
expect(() => {ms932Encoder.encode("\u761B")}).to.throw(Error, "EncodingError U+761B");
expect(() => {ms932Encoder.encode("\u761C")}).to.throw(Error, "EncodingError U+761C");
expect(() => {ms932Encoder.encode("\u761D")}).to.throw(Error, "EncodingError U+761D");
expect(() => {ms932Encoder.encode("\u761E")}).to.throw(Error, "EncodingError U+761E");
r = r && ([...ms932Encoder.encode("瘟瘠瘡瘢")].join(",") === "225,137,225,139,225,140,225,141"); // U+761F
expect(() => {ms932Encoder.encode("\u7623")}).to.throw(Error, "EncodingError U+7623");
r = r && ([...ms932Encoder.encode("瘤")].join(",") === "225,142"); // U+7624
expect(() => {ms932Encoder.encode("\u7625")}).to.throw(Error, "EncodingError U+7625");
expect(() => {ms932Encoder.encode("\u7626")}).to.throw(Error, "EncodingError U+7626");
r = r && ([...ms932Encoder.encode("瘧")].join(",") === "225,138"); // U+7627
expect(() => {ms932Encoder.encode("\u7628")}).to.throw(Error, "EncodingError U+7628");
expect(() => {ms932Encoder.encode("\u7629")}).to.throw(Error, "EncodingError U+7629");
expect(() => {ms932Encoder.encode("\u762A")}).to.throw(Error, "EncodingError U+762A");
expect(() => {ms932Encoder.encode("\u762B")}).to.throw(Error, "EncodingError U+762B");
expect(() => {ms932Encoder.encode("\u762C")}).to.throw(Error, "EncodingError U+762C");
expect(() => {ms932Encoder.encode("\u762D")}).to.throw(Error, "EncodingError U+762D");
expect(() => {ms932Encoder.encode("\u762E")}).to.throw(Error, "EncodingError U+762E");
expect(() => {ms932Encoder.encode("\u762F")}).to.throw(Error, "EncodingError U+762F");
r = r && ([...ms932Encoder.encode("瘰")].join(",") === "225,144"); // U+7630
expect(() => {ms932Encoder.encode("\u7631")}).to.throw(Error, "EncodingError U+7631");
expect(() => {ms932Encoder.encode("\u7632")}).to.throw(Error, "EncodingError U+7632");
expect(() => {ms932Encoder.encode("\u7633")}).to.throw(Error, "EncodingError U+7633");
r = r && ([...ms932Encoder.encode("瘴")].join(",") === "225,143"); // U+7634
expect(() => {ms932Encoder.encode("\u7635")}).to.throw(Error, "EncodingError U+7635");
expect(() => {ms932Encoder.encode("\u7636")}).to.throw(Error, "EncodingError U+7636");
expect(() => {ms932Encoder.encode("\u7637")}).to.throw(Error, "EncodingError U+7637");
expect(() => {ms932Encoder.encode("\u7638")}).to.throw(Error, "EncodingError U+7638");
expect(() => {ms932Encoder.encode("\u7639")}).to.throw(Error, "EncodingError U+7639");
expect(() => {ms932Encoder.encode("\u763A")}).to.throw(Error, "EncodingError U+763A");
r = r && ([...ms932Encoder.encode("瘻")].join(",") === "225,145"); // U+763B
expect(() => {ms932Encoder.encode("\u763C")}).to.throw(Error, "EncodingError U+763C");
expect(() => {ms932Encoder.encode("\u763D")}).to.throw(Error, "EncodingError U+763D");
expect(() => {ms932Encoder.encode("\u763E")}).to.throw(Error, "EncodingError U+763E");
expect(() => {ms932Encoder.encode("\u763F")}).to.throw(Error, "EncodingError U+763F");
expect(() => {ms932Encoder.encode("\u7640")}).to.throw(Error, "EncodingError U+7640");
expect(() => {ms932Encoder.encode("\u7641")}).to.throw(Error, "EncodingError U+7641");
r = r && ([...ms932Encoder.encode("療")].join(",") === "151,195"); // U+7642
expect(() => {ms932Encoder.encode("\u7643")}).to.throw(Error, "EncodingError U+7643");
expect(() => {ms932Encoder.encode("\u7644")}).to.throw(Error, "EncodingError U+7644");
expect(() => {ms932Encoder.encode("\u7645")}).to.throw(Error, "EncodingError U+7645");
r = r && ([...ms932Encoder.encode("癆癇癈")].join(",") === "225,148,225,146,225,147"); // U+7646
expect(() => {ms932Encoder.encode("\u7649")}).to.throw(Error, "EncodingError U+7649");
expect(() => {ms932Encoder.encode("\u764A")}).to.throw(Error, "EncodingError U+764A");
expect(() => {ms932Encoder.encode("\u764B")}).to.throw(Error, "EncodingError U+764B");
r = r && ([...ms932Encoder.encode("癌")].join(",") === "138,224"); // U+764C
expect(() => {ms932Encoder.encode("\u764D")}).to.throw(Error, "EncodingError U+764D");
expect(() => {ms932Encoder.encode("\u764E")}).to.throw(Error, "EncodingError U+764E");
expect(() => {ms932Encoder.encode("\u764F")}).to.throw(Error, "EncodingError U+764F");
expect(() => {ms932Encoder.encode("\u7650")}).to.throw(Error, "EncodingError U+7650");
expect(() => {ms932Encoder.encode("\u7651")}).to.throw(Error, "EncodingError U+7651");
r = r && ([...ms932Encoder.encode("癒")].join(",") === "150,252"); // U+7652
expect(() => {ms932Encoder.encode("\u7653")}).to.throw(Error, "EncodingError U+7653");
expect(() => {ms932Encoder.encode("\u7654")}).to.throw(Error, "EncodingError U+7654");
expect(() => {ms932Encoder.encode("\u7655")}).to.throw(Error, "EncodingError U+7655");
r = r && ([...ms932Encoder.encode("癖")].join(",") === "149,200"); // U+7656
expect(() => {ms932Encoder.encode("\u7657")}).to.throw(Error, "EncodingError U+7657");
r = r && ([...ms932Encoder.encode("癘")].join(",") === "225,150"); // U+7658
expect(() => {ms932Encoder.encode("\u7659")}).to.throw(Error, "EncodingError U+7659");
expect(() => {ms932Encoder.encode("\u765A")}).to.throw(Error, "EncodingError U+765A");
expect(() => {ms932Encoder.encode("\u765B")}).to.throw(Error, "EncodingError U+765B");
r = r && ([...ms932Encoder.encode("癜")].join(",") === "225,149"); // U+765C
expect(() => {ms932Encoder.encode("\u765D")}).to.throw(Error, "EncodingError U+765D");
expect(() => {ms932Encoder.encode("\u765E")}).to.throw(Error, "EncodingError U+765E");
expect(() => {ms932Encoder.encode("\u765F")}).to.throw(Error, "EncodingError U+765F");
expect(() => {ms932Encoder.encode("\u7660")}).to.throw(Error, "EncodingError U+7660");
r = r && ([...ms932Encoder.encode("癡癢")].join(",") === "225,151,225,152"); // U+7661
expect(() => {ms932Encoder.encode("\u7663")}).to.throw(Error, "EncodingError U+7663");
expect(() => {ms932Encoder.encode("\u7664")}).to.throw(Error, "EncodingError U+7664");
expect(() => {ms932Encoder.encode("\u7665")}).to.throw(Error, "EncodingError U+7665");
expect(() => {ms932Encoder.encode("\u7666")}).to.throw(Error, "EncodingError U+7666");
r = r && ([...ms932Encoder.encode("癧癨癩癪")].join(",") === "225,156,225,153,225,154,225,155"); // U+7667
expect(() => {ms932Encoder.encode("\u766B")}).to.throw(Error, "EncodingError U+766B");
r = r && ([...ms932Encoder.encode("癬")].join(",") === "225,157"); // U+766C
expect(() => {ms932Encoder.encode("\u766D")}).to.throw(Error, "EncodingError U+766D");
expect(() => {ms932Encoder.encode("\u766E")}).to.throw(Error, "EncodingError U+766E");
expect(() => {ms932Encoder.encode("\u766F")}).to.throw(Error, "EncodingError U+766F");
r = r && ([...ms932Encoder.encode("癰")].join(",") === "225,158"); // U+7670
expect(() => {ms932Encoder.encode("\u7671")}).to.throw(Error, "EncodingError U+7671");
r = r && ([...ms932Encoder.encode("癲")].join(",") === "225,159"); // U+7672
expect(() => {ms932Encoder.encode("\u7673")}).to.throw(Error, "EncodingError U+7673");
expect(() => {ms932Encoder.encode("\u7674")}).to.throw(Error, "EncodingError U+7674");
expect(() => {ms932Encoder.encode("\u7675")}).to.throw(Error, "EncodingError U+7675");
r = r && ([...ms932Encoder.encode("癶")].join(",") === "225,160"); // U+7676
expect(() => {ms932Encoder.encode("\u7677")}).to.throw(Error, "EncodingError U+7677");
r = r && ([...ms932Encoder.encode("癸")].join(",") === "225,161"); // U+7678
expect(() => {ms932Encoder.encode("\u7679")}).to.throw(Error, "EncodingError U+7679");
r = r && ([...ms932Encoder.encode("発登發白百")].join(",") === "148,173,147,111,225,162,148,146,149,83"); // U+767A
expect(() => {ms932Encoder.encode("\u767F")}).to.throw(Error, "EncodingError U+767F");
r = r && ([...ms932Encoder.encode("皀")].join(",") === "225,163"); // U+7680
expect(() => {ms932Encoder.encode("\u7681")}).to.throw(Error, "EncodingError U+7681");
r = r && ([...ms932Encoder.encode("皂皃的")].join(",") === "251,112,225,164,147,73"); // U+7682
expect(() => {ms932Encoder.encode("\u7685")}).to.throw(Error, "EncodingError U+7685");
r = r && ([...ms932Encoder.encode("皆皇皈")].join(",") === "138,70,141,99,225,165"); // U+7686
expect(() => {ms932Encoder.encode("\u7689")}).to.throw(Error, "EncodingError U+7689");
expect(() => {ms932Encoder.encode("\u768A")}).to.throw(Error, "EncodingError U+768A");
r = r && ([...ms932Encoder.encode("皋")].join(",") === "225,166"); // U+768B
expect(() => {ms932Encoder.encode("\u768C")}).to.throw(Error, "EncodingError U+768C");
expect(() => {ms932Encoder.encode("\u768D")}).to.throw(Error, "EncodingError U+768D");
r = r && ([...ms932Encoder.encode("皎")].join(",") === "225,167"); // U+768E
expect(() => {ms932Encoder.encode("\u768F")}).to.throw(Error, "EncodingError U+768F");
r = r && ([...ms932Encoder.encode("皐")].join(",") === "142,72"); // U+7690
expect(() => {ms932Encoder.encode("\u7691")}).to.throw(Error, "EncodingError U+7691");
expect(() => {ms932Encoder.encode("\u7692")}).to.throw(Error, "EncodingError U+7692");
r = r && ([...ms932Encoder.encode("皓")].join(",") === "225,169"); // U+7693
expect(() => {ms932Encoder.encode("\u7694")}).to.throw(Error, "EncodingError U+7694");
expect(() => {ms932Encoder.encode("\u7695")}).to.throw(Error, "EncodingError U+7695");
r = r && ([...ms932Encoder.encode("皖")].join(",") === "225,168"); // U+7696
expect(() => {ms932Encoder.encode("\u7697")}).to.throw(Error, "EncodingError U+7697");
expect(() => {ms932Encoder.encode("\u7698")}).to.throw(Error, "EncodingError U+7698");
r = r && ([...ms932Encoder.encode("皙皚皛皜")].join(",") === "225,170,225,171,251,115,251,113"); // U+7699
expect(() => {ms932Encoder.encode("\u769D")}).to.throw(Error, "EncodingError U+769D");
r = r && ([...ms932Encoder.encode("皞")].join(",") === "251,114"); // U+769E
expect(() => {ms932Encoder.encode("\u769F")}).to.throw(Error, "EncodingError U+769F");
expect(() => {ms932Encoder.encode("\u76A0")}).to.throw(Error, "EncodingError U+76A0");
expect(() => {ms932Encoder.encode("\u76A1")}).to.throw(Error, "EncodingError U+76A1");
expect(() => {ms932Encoder.encode("\u76A2")}).to.throw(Error, "EncodingError U+76A2");
expect(() => {ms932Encoder.encode("\u76A3")}).to.throw(Error, "EncodingError U+76A3");
expect(() => {ms932Encoder.encode("\u76A4")}).to.throw(Error, "EncodingError U+76A4");
expect(() => {ms932Encoder.encode("\u76A5")}).to.throw(Error, "EncodingError U+76A5");
r = r && ([...ms932Encoder.encode("皦")].join(",") === "251,116"); // U+76A6
expect(() => {ms932Encoder.encode("\u76A7")}).to.throw(Error, "EncodingError U+76A7");
expect(() => {ms932Encoder.encode("\u76A8")}).to.throw(Error, "EncodingError U+76A8");
expect(() => {ms932Encoder.encode("\u76A9")}).to.throw(Error, "EncodingError U+76A9");
expect(() => {ms932Encoder.encode("\u76AA")}).to.throw(Error, "EncodingError U+76AA");
expect(() => {ms932Encoder.encode("\u76AB")}).to.throw(Error, "EncodingError U+76AB");
expect(() => {ms932Encoder.encode("\u76AC")}).to.throw(Error, "EncodingError U+76AC");
expect(() => {ms932Encoder.encode("\u76AD")}).to.throw(Error, "EncodingError U+76AD");
r = r && ([...ms932Encoder.encode("皮")].join(",") === "148,231"); // U+76AE
expect(() => {ms932Encoder.encode("\u76AF")}).to.throw(Error, "EncodingError U+76AF");
r = r && ([...ms932Encoder.encode("皰")].join(",") === "225,172"); // U+76B0
expect(() => {ms932Encoder.encode("\u76B1")}).to.throw(Error, "EncodingError U+76B1");
expect(() => {ms932Encoder.encode("\u76B2")}).to.throw(Error, "EncodingError U+76B2");
expect(() => {ms932Encoder.encode("\u76B3")}).to.throw(Error, "EncodingError U+76B3");
r = r && ([...ms932Encoder.encode("皴")].join(",") === "225,173"); // U+76B4
expect(() => {ms932Encoder.encode("\u76B5")}).to.throw(Error, "EncodingError U+76B5");
expect(() => {ms932Encoder.encode("\u76B6")}).to.throw(Error, "EncodingError U+76B6");
r = r && ([...ms932Encoder.encode("皷皸皹皺")].join(",") === "234,137,225,174,225,175,225,176"); // U+76B7
expect(() => {ms932Encoder.encode("\u76BB")}).to.throw(Error, "EncodingError U+76BB");
expect(() => {ms932Encoder.encode("\u76BC")}).to.throw(Error, "EncodingError U+76BC");
expect(() => {ms932Encoder.encode("\u76BD")}).to.throw(Error, "EncodingError U+76BD");
expect(() => {ms932Encoder.encode("\u76BE")}).to.throw(Error, "EncodingError U+76BE");
r = r && ([...ms932Encoder.encode("皿")].join(",") === "142,77"); // U+76BF
expect(() => {ms932Encoder.encode("\u76C0")}).to.throw(Error, "EncodingError U+76C0");
expect(() => {ms932Encoder.encode("\u76C1")}).to.throw(Error, "EncodingError U+76C1");
r = r && ([...ms932Encoder.encode("盂盃")].join(",") === "225,177,148,117"); // U+76C2
expect(() => {ms932Encoder.encode("\u76C4")}).to.throw(Error, "EncodingError U+76C4");
expect(() => {ms932Encoder.encode("\u76C5")}).to.throw(Error, "EncodingError U+76C5");
r = r && ([...ms932Encoder.encode("盆")].join(",") === "150,126"); // U+76C6
expect(() => {ms932Encoder.encode("\u76C7")}).to.throw(Error, "EncodingError U+76C7");
r = r && ([...ms932Encoder.encode("盈")].join(",") === "137,109"); // U+76C8
expect(() => {ms932Encoder.encode("\u76C9")}).to.throw(Error, "EncodingError U+76C9");
r = r && ([...ms932Encoder.encode("益")].join(",") === "137,118"); // U+76CA
expect(() => {ms932Encoder.encode("\u76CB")}).to.throw(Error, "EncodingError U+76CB");
expect(() => {ms932Encoder.encode("\u76CC")}).to.throw(Error, "EncodingError U+76CC");
r = r && ([...ms932Encoder.encode("盍")].join(",") === "225,178"); // U+76CD
expect(() => {ms932Encoder.encode("\u76CE")}).to.throw(Error, "EncodingError U+76CE");
expect(() => {ms932Encoder.encode("\u76CF")}).to.throw(Error, "EncodingError U+76CF");
expect(() => {ms932Encoder.encode("\u76D0")}).to.throw(Error, "EncodingError U+76D0");
expect(() => {ms932Encoder.encode("\u76D1")}).to.throw(Error, "EncodingError U+76D1");
r = r && ([...ms932Encoder.encode("盒")].join(",") === "225,180"); // U+76D2
expect(() => {ms932Encoder.encode("\u76D3")}).to.throw(Error, "EncodingError U+76D3");
expect(() => {ms932Encoder.encode("\u76D4")}).to.throw(Error, "EncodingError U+76D4");
expect(() => {ms932Encoder.encode("\u76D5")}).to.throw(Error, "EncodingError U+76D5");
r = r && ([...ms932Encoder.encode("盖盗")].join(",") === "225,179,147,144"); // U+76D6
expect(() => {ms932Encoder.encode("\u76D8")}).to.throw(Error, "EncodingError U+76D8");
expect(() => {ms932Encoder.encode("\u76D9")}).to.throw(Error, "EncodingError U+76D9");
expect(() => {ms932Encoder.encode("\u76DA")}).to.throw(Error, "EncodingError U+76DA");
r = r && ([...ms932Encoder.encode("盛盜")].join(",") === "144,183,159,88"); // U+76DB
expect(() => {ms932Encoder.encode("\u76DD")}).to.throw(Error, "EncodingError U+76DD");
r = r && ([...ms932Encoder.encode("盞盟")].join(",") === "225,181,150,191"); // U+76DE
expect(() => {ms932Encoder.encode("\u76E0")}).to.throw(Error, "EncodingError U+76E0");
r = r && ([...ms932Encoder.encode("盡")].join(",") === "225,182"); // U+76E1
expect(() => {ms932Encoder.encode("\u76E2")}).to.throw(Error, "EncodingError U+76E2");
r = r && ([...ms932Encoder.encode("監盤盥")].join(",") === "138,196,148,213,225,183"); // U+76E3
expect(() => {ms932Encoder.encode("\u76E6")}).to.throw(Error, "EncodingError U+76E6");
r = r && ([...ms932Encoder.encode("盧")].join(",") === "225,184"); // U+76E7
expect(() => {ms932Encoder.encode("\u76E8")}).to.throw(Error, "EncodingError U+76E8");
expect(() => {ms932Encoder.encode("\u76E9")}).to.throw(Error, "EncodingError U+76E9");
r = r && ([...ms932Encoder.encode("盪")].join(",") === "225,185"); // U+76EA
expect(() => {ms932Encoder.encode("\u76EB")}).to.throw(Error, "EncodingError U+76EB");
expect(() => {ms932Encoder.encode("\u76EC")}).to.throw(Error, "EncodingError U+76EC");
expect(() => {ms932Encoder.encode("\u76ED")}).to.throw(Error, "EncodingError U+76ED");
r = r && ([...ms932Encoder.encode("目")].join(",") === "150,218"); // U+76EE
expect(() => {ms932Encoder.encode("\u76EF")}).to.throw(Error, "EncodingError U+76EF");
expect(() => {ms932Encoder.encode("\u76F0")}).to.throw(Error, "EncodingError U+76F0");
expect(() => {ms932Encoder.encode("\u76F1")}).to.throw(Error, "EncodingError U+76F1");
r = r && ([...ms932Encoder.encode("盲")].join(",") === "150,211"); // U+76F2
expect(() => {ms932Encoder.encode("\u76F3")}).to.throw(Error, "EncodingError U+76F3");
r = r && ([...ms932Encoder.encode("直")].join(",") === "146,188"); // U+76F4
expect(() => {ms932Encoder.encode("\u76F5")}).to.throw(Error, "EncodingError U+76F5");
expect(() => {ms932Encoder.encode("\u76F6")}).to.throw(Error, "EncodingError U+76F6");
expect(() => {ms932Encoder.encode("\u76F7")}).to.throw(Error, "EncodingError U+76F7");
r = r && ([...ms932Encoder.encode("相")].join(",") === "145,138"); // U+76F8
expect(() => {ms932Encoder.encode("\u76F9")}).to.throw(Error, "EncodingError U+76F9");
expect(() => {ms932Encoder.encode("\u76FA")}).to.throw(Error, "EncodingError U+76FA");
r = r && ([...ms932Encoder.encode("盻")].join(",") === "225,187"); // U+76FB
expect(() => {ms932Encoder.encode("\u76FC")}).to.throw(Error, "EncodingError U+76FC");
expect(() => {ms932Encoder.encode("\u76FD")}).to.throw(Error, "EncodingError U+76FD");
r = r && ([...ms932Encoder.encode("盾")].join(",") === "143,130"); // U+76FE
expect(() => {ms932Encoder.encode("\u76FF")}).to.throw(Error, "EncodingError U+76FF");
expect(() => {ms932Encoder.encode("\u7700")}).to.throw(Error, "EncodingError U+7700");
r = r && ([...ms932Encoder.encode("省")].join(",") === "143,200"); // U+7701
expect(() => {ms932Encoder.encode("\u7702")}).to.throw(Error, "EncodingError U+7702");
expect(() => {ms932Encoder.encode("\u7703")}).to.throw(Error, "EncodingError U+7703");
r = r && ([...ms932Encoder.encode("眄")].join(",") === "225,190"); // U+7704
expect(() => {ms932Encoder.encode("\u7705")}).to.throw(Error, "EncodingError U+7705");
expect(() => {ms932Encoder.encode("\u7706")}).to.throw(Error, "EncodingError U+7706");
r = r && ([...ms932Encoder.encode("眇眈眉")].join(",") === "225,189,225,188,148,251"); // U+7707
expect(() => {ms932Encoder.encode("\u770A")}).to.throw(Error, "EncodingError U+770A");
r = r && ([...ms932Encoder.encode("看県")].join(",") === "138,197,140,167"); // U+770B
expect(() => {ms932Encoder.encode("\u770D")}).to.throw(Error, "EncodingError U+770D");
expect(() => {ms932Encoder.encode("\u770E")}).to.throw(Error, "EncodingError U+770E");
expect(() => {ms932Encoder.encode("\u770F")}).to.throw(Error, "EncodingError U+770F");
expect(() => {ms932Encoder.encode("\u7710")}).to.throw(Error, "EncodingError U+7710");
expect(() => {ms932Encoder.encode("\u7711")}).to.throw(Error, "EncodingError U+7711");
expect(() => {ms932Encoder.encode("\u7712")}).to.throw(Error, "EncodingError U+7712");
expect(() => {ms932Encoder.encode("\u7713")}).to.throw(Error, "EncodingError U+7713");
expect(() => {ms932Encoder.encode("\u7714")}).to.throw(Error, "EncodingError U+7714");
expect(() => {ms932Encoder.encode("\u7715")}).to.throw(Error, "EncodingError U+7715");
expect(() => {ms932Encoder.encode("\u7716")}).to.throw(Error, "EncodingError U+7716");
expect(() => {ms932Encoder.encode("\u7717")}).to.throw(Error, "EncodingError U+7717");
expect(() => {ms932Encoder.encode("\u7718")}).to.throw(Error, "EncodingError U+7718");
expect(() => {ms932Encoder.encode("\u7719")}).to.throw(Error, "EncodingError U+7719");
expect(() => {ms932Encoder.encode("\u771A")}).to.throw(Error, "EncodingError U+771A");
r = r && ([...ms932Encoder.encode("眛")].join(",") === "225,196"); // U+771B
expect(() => {ms932Encoder.encode("\u771C")}).to.throw(Error, "EncodingError U+771C");
expect(() => {ms932Encoder.encode("\u771D")}).to.throw(Error, "EncodingError U+771D");
r = r && ([...ms932Encoder.encode("眞真眠")].join(",") === "225,193,144,94,150,176"); // U+771E
expect(() => {ms932Encoder.encode("\u7721")}).to.throw(Error, "EncodingError U+7721");
expect(() => {ms932Encoder.encode("\u7722")}).to.throw(Error, "EncodingError U+7722");
expect(() => {ms932Encoder.encode("\u7723")}).to.throw(Error, "EncodingError U+7723");
r = r && ([...ms932Encoder.encode("眤眥眦")].join(",") === "225,192,225,194,225,195"); // U+7724
expect(() => {ms932Encoder.encode("\u7727")}).to.throw(Error, "EncodingError U+7727");
expect(() => {ms932Encoder.encode("\u7728")}).to.throw(Error, "EncodingError U+7728");
r = r && ([...ms932Encoder.encode("眩")].join(",") === "225,191"); // U+7729
expect(() => {ms932Encoder.encode("\u772A")}).to.throw(Error, "EncodingError U+772A");
expect(() => {ms932Encoder.encode("\u772B")}).to.throw(Error, "EncodingError U+772B");
expect(() => {ms932Encoder.encode("\u772C")}).to.throw(Error, "EncodingError U+772C");
expect(() => {ms932Encoder.encode("\u772D")}).to.throw(Error, "EncodingError U+772D");
expect(() => {ms932Encoder.encode("\u772E")}).to.throw(Error, "EncodingError U+772E");
expect(() => {ms932Encoder.encode("\u772F")}).to.throw(Error, "EncodingError U+772F");
expect(() => {ms932Encoder.encode("\u7730")}).to.throw(Error, "EncodingError U+7730");
expect(() => {ms932Encoder.encode("\u7731")}).to.throw(Error, "EncodingError U+7731");
expect(() => {ms932Encoder.encode("\u7732")}).to.throw(Error, "EncodingError U+7732");
expect(() => {ms932Encoder.encode("\u7733")}).to.throw(Error, "EncodingError U+7733");
expect(() => {ms932Encoder.encode("\u7734")}).to.throw(Error, "EncodingError U+7734");
expect(() => {ms932Encoder.encode("\u7735")}).to.throw(Error, "EncodingError U+7735");
expect(() => {ms932Encoder.encode("\u7736")}).to.throw(Error, "EncodingError U+7736");
r = r && ([...ms932Encoder.encode("眷眸")].join(",") === "225,197,225,198"); // U+7737
expect(() => {ms932Encoder.encode("\u7739")}).to.throw(Error, "EncodingError U+7739");
r = r && ([...ms932Encoder.encode("眺")].join(",") === "146,173"); // U+773A
expect(() => {ms932Encoder.encode("\u773B")}).to.throw(Error, "EncodingError U+773B");
r = r && ([...ms932Encoder.encode("眼")].join(",") === "138,225"); // U+773C
expect(() => {ms932Encoder.encode("\u773D")}).to.throw(Error, "EncodingError U+773D");
expect(() => {ms932Encoder.encode("\u773E")}).to.throw(Error, "EncodingError U+773E");
expect(() => {ms932Encoder.encode("\u773F")}).to.throw(Error, "EncodingError U+773F");
r = r && ([...ms932Encoder.encode("着")].join(",") === "146,133"); // U+7740
expect(() => {ms932Encoder.encode("\u7741")}).to.throw(Error, "EncodingError U+7741");
expect(() => {ms932Encoder.encode("\u7742")}).to.throw(Error, "EncodingError U+7742");
expect(() => {ms932Encoder.encode("\u7743")}).to.throw(Error, "EncodingError U+7743");
expect(() => {ms932Encoder.encode("\u7744")}).to.throw(Error, "EncodingError U+7744");
expect(() => {ms932Encoder.encode("\u7745")}).to.throw(Error, "EncodingError U+7745");
r = r && ([...ms932Encoder.encode("睆睇")].join(",") === "251,118,225,199"); // U+7746
expect(() => {ms932Encoder.encode("\u7748")}).to.throw(Error, "EncodingError U+7748");
expect(() => {ms932Encoder.encode("\u7749")}).to.throw(Error, "EncodingError U+7749");
expect(() => {ms932Encoder.encode("\u774A")}).to.throw(Error, "EncodingError U+774A");
expect(() => {ms932Encoder.encode("\u774B")}).to.throw(Error, "EncodingError U+774B");
expect(() => {ms932Encoder.encode("\u774C")}).to.throw(Error, "EncodingError U+774C");
expect(() => {ms932Encoder.encode("\u774D")}).to.throw(Error, "EncodingError U+774D");
expect(() => {ms932Encoder.encode("\u774E")}).to.throw(Error, "EncodingError U+774E");
expect(() => {ms932Encoder.encode("\u774F")}).to.throw(Error, "EncodingError U+774F");
expect(() => {ms932Encoder.encode("\u7750")}).to.throw(Error, "EncodingError U+7750");
expect(() => {ms932Encoder.encode("\u7751")}).to.throw(Error, "EncodingError U+7751");
expect(() => {ms932Encoder.encode("\u7752")}).to.throw(Error, "EncodingError U+7752");
expect(() => {ms932Encoder.encode("\u7753")}).to.throw(Error, "EncodingError U+7753");
expect(() => {ms932Encoder.encode("\u7754")}).to.throw(Error, "EncodingError U+7754");
expect(() => {ms932Encoder.encode("\u7755")}).to.throw(Error, "EncodingError U+7755");
expect(() => {ms932Encoder.encode("\u7756")}).to.throw(Error, "EncodingError U+7756");
expect(() => {ms932Encoder.encode("\u7757")}).to.throw(Error, "EncodingError U+7757");
expect(() => {ms932Encoder.encode("\u7758")}).to.throw(Error, "EncodingError U+7758");
expect(() => {ms932Encoder.encode("\u7759")}).to.throw(Error, "EncodingError U+7759");
r = r && ([...ms932Encoder.encode("睚睛")].join(",") === "225,200,225,203"); // U+775A
expect(() => {ms932Encoder.encode("\u775C")}).to.throw(Error, "EncodingError U+775C");
expect(() => {ms932Encoder.encode("\u775D")}).to.throw(Error, "EncodingError U+775D");
expect(() => {ms932Encoder.encode("\u775E")}).to.throw(Error, "EncodingError U+775E");
expect(() => {ms932Encoder.encode("\u775F")}).to.throw(Error, "EncodingError U+775F");
expect(() => {ms932Encoder.encode("\u7760")}).to.throw(Error, "EncodingError U+7760");
r = r && ([...ms932Encoder.encode("睡")].join(",") === "144,135"); // U+7761
expect(() => {ms932Encoder.encode("\u7762")}).to.throw(Error, "EncodingError U+7762");
r = r && ([...ms932Encoder.encode("督")].join(",") === "147,194"); // U+7763
expect(() => {ms932Encoder.encode("\u7764")}).to.throw(Error, "EncodingError U+7764");
r = r && ([...ms932Encoder.encode("睥睦")].join(",") === "225,204,150,114"); // U+7765
expect(() => {ms932Encoder.encode("\u7767")}).to.throw(Error, "EncodingError U+7767");
r = r && ([...ms932Encoder.encode("睨")].join(",") === "225,201"); // U+7768
expect(() => {ms932Encoder.encode("\u7769")}).to.throw(Error, "EncodingError U+7769");
expect(() => {ms932Encoder.encode("\u776A")}).to.throw(Error, "EncodingError U+776A");
r = r && ([...ms932Encoder.encode("睫")].join(",") === "225,202"); // U+776B
expect(() => {ms932Encoder.encode("\u776C")}).to.throw(Error, "EncodingError U+776C");
expect(() => {ms932Encoder.encode("\u776D")}).to.throw(Error, "EncodingError U+776D");
expect(() => {ms932Encoder.encode("\u776E")}).to.throw(Error, "EncodingError U+776E");
expect(() => {ms932Encoder.encode("\u776F")}).to.throw(Error, "EncodingError U+776F");
expect(() => {ms932Encoder.encode("\u7770")}).to.throw(Error, "EncodingError U+7770");
expect(() => {ms932Encoder.encode("\u7771")}).to.throw(Error, "EncodingError U+7771");
expect(() => {ms932Encoder.encode("\u7772")}).to.throw(Error, "EncodingError U+7772");
expect(() => {ms932Encoder.encode("\u7773")}).to.throw(Error, "EncodingError U+7773");
expect(() => {ms932Encoder.encode("\u7774")}).to.throw(Error, "EncodingError U+7774");
expect(() => {ms932Encoder.encode("\u7775")}).to.throw(Error, "EncodingError U+7775");
expect(() => {ms932Encoder.encode("\u7776")}).to.throw(Error, "EncodingError U+7776");
expect(() => {ms932Encoder.encode("\u7777")}).to.throw(Error, "EncodingError U+7777");
expect(() => {ms932Encoder.encode("\u7778")}).to.throw(Error, "EncodingError U+7778");
r = r && ([...ms932Encoder.encode("睹")].join(",") === "225,207"); // U+7779
expect(() => {ms932Encoder.encode("\u777A")}).to.throw(Error, "EncodingError U+777A");
expect(() => {ms932Encoder.encode("\u777B")}).to.throw(Error, "EncodingError U+777B");
expect(() => {ms932Encoder.encode("\u777C")}).to.throw(Error, "EncodingError U+777C");
expect(() => {ms932Encoder.encode("\u777D")}).to.throw(Error, "EncodingError U+777D");
r = r && ([...ms932Encoder.encode("睾睿")].join(",") === "225,206,225,205"); // U+777E
expect(() => {ms932Encoder.encode("\u7780")}).to.throw(Error, "EncodingError U+7780");
expect(() => {ms932Encoder.encode("\u7781")}).to.throw(Error, "EncodingError U+7781");
expect(() => {ms932Encoder.encode("\u7782")}).to.throw(Error, "EncodingError U+7782");
expect(() => {ms932Encoder.encode("\u7783")}).to.throw(Error, "EncodingError U+7783");
expect(() => {ms932Encoder.encode("\u7784")}).to.throw(Error, "EncodingError U+7784");
expect(() => {ms932Encoder.encode("\u7785")}).to.throw(Error, "EncodingError U+7785");
expect(() => {ms932Encoder.encode("\u7786")}).to.throw(Error, "EncodingError U+7786");
expect(() => {ms932Encoder.encode("\u7787")}).to.throw(Error, "EncodingError U+7787");
expect(() => {ms932Encoder.encode("\u7788")}).to.throw(Error, "EncodingError U+7788");
expect(() => {ms932Encoder.encode("\u7789")}).to.throw(Error, "EncodingError U+7789");
expect(() => {ms932Encoder.encode("\u778A")}).to.throw(Error, "EncodingError U+778A");
r = r && ([...ms932Encoder.encode("瞋")].join(",") === "225,209"); // U+778B
expect(() => {ms932Encoder.encode("\u778C")}).to.throw(Error, "EncodingError U+778C");
expect(() => {ms932Encoder.encode("\u778D")}).to.throw(Error, "EncodingError U+778D");
r = r && ([...ms932Encoder.encode("瞎")].join(",") === "225,208"); // U+778E
expect(() => {ms932Encoder.encode("\u778F")}).to.throw(Error, "EncodingError U+778F");
expect(() => {ms932Encoder.encode("\u7790")}).to.throw(Error, "EncodingError U+7790");
r = r && ([...ms932Encoder.encode("瞑")].join(",") === "225,210"); // U+7791
expect(() => {ms932Encoder.encode("\u7792")}).to.throw(Error, "EncodingError U+7792");
expect(() => {ms932Encoder.encode("\u7793")}).to.throw(Error, "EncodingError U+7793");
expect(() => {ms932Encoder.encode("\u7794")}).to.throw(Error, "EncodingError U+7794");
expect(() => {ms932Encoder.encode("\u7795")}).to.throw(Error, "EncodingError U+7795");
expect(() => {ms932Encoder.encode("\u7796")}).to.throw(Error, "EncodingError U+7796");
expect(() => {ms932Encoder.encode("\u7797")}).to.throw(Error, "EncodingError U+7797");
expect(() => {ms932Encoder.encode("\u7798")}).to.throw(Error, "EncodingError U+7798");
expect(() => {ms932Encoder.encode("\u7799")}).to.throw(Error, "EncodingError U+7799");
expect(() => {ms932Encoder.encode("\u779A")}).to.throw(Error, "EncodingError U+779A");
expect(() => {ms932Encoder.encode("\u779B")}).to.throw(Error, "EncodingError U+779B");
expect(() => {ms932Encoder.encode("\u779C")}).to.throw(Error, "EncodingError U+779C");
expect(() => {ms932Encoder.encode("\u779D")}).to.throw(Error, "EncodingError U+779D");
r = r && ([...ms932Encoder.encode("瞞")].join(",") === "225,212"); // U+779E
expect(() => {ms932Encoder.encode("\u779F")}).to.throw(Error, "EncodingError U+779F");
r = r && ([...ms932Encoder.encode("瞠")].join(",") === "225,211"); // U+77A0
expect(() => {ms932Encoder.encode("\u77A1")}).to.throw(Error, "EncodingError U+77A1");
expect(() => {ms932Encoder.encode("\u77A2")}).to.throw(Error, "EncodingError U+77A2");
expect(() => {ms932Encoder.encode("\u77A3")}).to.throw(Error, "EncodingError U+77A3");
expect(() => {ms932Encoder.encode("\u77A4")}).to.throw(Error, "EncodingError U+77A4");
r = r && ([...ms932Encoder.encode("瞥")].join(",") === "149,203"); // U+77A5
expect(() => {ms932Encoder.encode("\u77A6")}).to.throw(Error, "EncodingError U+77A6");
expect(() => {ms932Encoder.encode("\u77A7")}).to.throw(Error, "EncodingError U+77A7");
expect(() => {ms932Encoder.encode("\u77A8")}).to.throw(Error, "EncodingError U+77A8");
expect(() => {ms932Encoder.encode("\u77A9")}).to.throw(Error, "EncodingError U+77A9");
expect(() => {ms932Encoder.encode("\u77AA")}).to.throw(Error, "EncodingError U+77AA");
expect(() => {ms932Encoder.encode("\u77AB")}).to.throw(Error, "EncodingError U+77AB");
r = r && ([...ms932Encoder.encode("瞬瞭")].join(",") === "143,117,151,196"); // U+77AC
expect(() => {ms932Encoder.encode("\u77AE")}).to.throw(Error, "EncodingError U+77AE");
expect(() => {ms932Encoder.encode("\u77AF")}).to.throw(Error, "EncodingError U+77AF");
r = r && ([...ms932Encoder.encode("瞰")].join(",") === "225,213"); // U+77B0
expect(() => {ms932Encoder.encode("\u77B1")}).to.throw(Error, "EncodingError U+77B1");
expect(() => {ms932Encoder.encode("\u77B2")}).to.throw(Error, "EncodingError U+77B2");
r = r && ([...ms932Encoder.encode("瞳")].join(",") === "147,181"); // U+77B3
expect(() => {ms932Encoder.encode("\u77B4")}).to.throw(Error, "EncodingError U+77B4");
expect(() => {ms932Encoder.encode("\u77B5")}).to.throw(Error, "EncodingError U+77B5");
r = r && ([...ms932Encoder.encode("瞶")].join(",") === "225,214"); // U+77B6
expect(() => {ms932Encoder.encode("\u77B7")}).to.throw(Error, "EncodingError U+77B7");
expect(() => {ms932Encoder.encode("\u77B8")}).to.throw(Error, "EncodingError U+77B8");
r = r && ([...ms932Encoder.encode("瞹")].join(",") === "225,215"); // U+77B9
expect(() => {ms932Encoder.encode("\u77BA")}).to.throw(Error, "EncodingError U+77BA");
r = r && ([...ms932Encoder.encode("瞻瞼瞽")].join(",") === "225,219,225,217,225,218"); // U+77BB
expect(() => {ms932Encoder.encode("\u77BE")}).to.throw(Error, "EncodingError U+77BE");
r = r && ([...ms932Encoder.encode("瞿")].join(",") === "225,216"); // U+77BF
expect(() => {ms932Encoder.encode("\u77C0")}).to.throw(Error, "EncodingError U+77C0");
expect(() => {ms932Encoder.encode("\u77C1")}).to.throw(Error, "EncodingError U+77C1");
expect(() => {ms932Encoder.encode("\u77C2")}).to.throw(Error, "EncodingError U+77C2");
expect(() => {ms932Encoder.encode("\u77C3")}).to.throw(Error, "EncodingError U+77C3");
expect(() => {ms932Encoder.encode("\u77C4")}).to.throw(Error, "EncodingError U+77C4");
expect(() => {ms932Encoder.encode("\u77C5")}).to.throw(Error, "EncodingError U+77C5");
expect(() => {ms932Encoder.encode("\u77C6")}).to.throw(Error, "EncodingError U+77C6");
r = r && ([...ms932Encoder.encode("矇")].join(",") === "225,220"); // U+77C7
expect(() => {ms932Encoder.encode("\u77C8")}).to.throw(Error, "EncodingError U+77C8");
expect(() => {ms932Encoder.encode("\u77C9")}).to.throw(Error, "EncodingError U+77C9");
expect(() => {ms932Encoder.encode("\u77CA")}).to.throw(Error, "EncodingError U+77CA");
expect(() => {ms932Encoder.encode("\u77CB")}).to.throw(Error, "EncodingError U+77CB");
expect(() => {ms932Encoder.encode("\u77CC")}).to.throw(Error, "EncodingError U+77CC");
r = r && ([...ms932Encoder.encode("矍")].join(",") === "225,221"); // U+77CD
expect(() => {ms932Encoder.encode("\u77CE")}).to.throw(Error, "EncodingError U+77CE");
expect(() => {ms932Encoder.encode("\u77CF")}).to.throw(Error, "EncodingError U+77CF");
expect(() => {ms932Encoder.encode("\u77D0")}).to.throw(Error, "EncodingError U+77D0");
expect(() => {ms932Encoder.encode("\u77D1")}).to.throw(Error, "EncodingError U+77D1");
expect(() => {ms932Encoder.encode("\u77D2")}).to.throw(Error, "EncodingError U+77D2");
expect(() => {ms932Encoder.encode("\u77D3")}).to.throw(Error, "EncodingError U+77D3");
expect(() => {ms932Encoder.encode("\u77D4")}).to.throw(Error, "EncodingError U+77D4");
expect(() => {ms932Encoder.encode("\u77D5")}).to.throw(Error, "EncodingError U+77D5");
expect(() => {ms932Encoder.encode("\u77D6")}).to.throw(Error, "EncodingError U+77D6");
r = r && ([...ms932Encoder.encode("矗")].join(",") === "225,222"); // U+77D7
expect(() => {ms932Encoder.encode("\u77D8")}).to.throw(Error, "EncodingError U+77D8");
expect(() => {ms932Encoder.encode("\u77D9")}).to.throw(Error, "EncodingError U+77D9");
r = r && ([...ms932Encoder.encode("矚矛矜")].join(",") === "225,223,150,181,225,224"); // U+77DA
expect(() => {ms932Encoder.encode("\u77DD")}).to.throw(Error, "EncodingError U+77DD");
expect(() => {ms932Encoder.encode("\u77DE")}).to.throw(Error, "EncodingError U+77DE");
expect(() => {ms932Encoder.encode("\u77DF")}).to.throw(Error, "EncodingError U+77DF");
expect(() => {ms932Encoder.encode("\u77E0")}).to.throw(Error, "EncodingError U+77E0");
expect(() => {ms932Encoder.encode("\u77E1")}).to.throw(Error, "EncodingError U+77E1");
r = r && ([...ms932Encoder.encode("矢矣")].join(",") === "150,238,225,225"); // U+77E2
expect(() => {ms932Encoder.encode("\u77E4")}).to.throw(Error, "EncodingError U+77E4");
r = r && ([...ms932Encoder.encode("知")].join(",") === "146,109"); // U+77E5
expect(() => {ms932Encoder.encode("\u77E6")}).to.throw(Error, "EncodingError U+77E6");
r = r && ([...ms932Encoder.encode("矧")].join(",") === "148,138"); // U+77E7
expect(() => {ms932Encoder.encode("\u77E8")}).to.throw(Error, "EncodingError U+77E8");
r = r && ([...ms932Encoder.encode("矩")].join(",") === "139,233"); // U+77E9
expect(() => {ms932Encoder.encode("\u77EA")}).to.throw(Error, "EncodingError U+77EA");
expect(() => {ms932Encoder.encode("\u77EB")}).to.throw(Error, "EncodingError U+77EB");
expect(() => {ms932Encoder.encode("\u77EC")}).to.throw(Error, "EncodingError U+77EC");
r = r && ([...ms932Encoder.encode("短矮矯")].join(",") === "146,90,225,226,139,184"); // U+77ED
expect(() => {ms932Encoder.encode("\u77F0")}).to.throw(Error, "EncodingError U+77F0");
expect(() => {ms932Encoder.encode("\u77F1")}).to.throw(Error, "EncodingError U+77F1");
expect(() => {ms932Encoder.encode("\u77F2")}).to.throw(Error, "EncodingError U+77F2");
r = r && ([...ms932Encoder.encode("石")].join(",") === "144,206"); // U+77F3
expect(() => {ms932Encoder.encode("\u77F4")}).to.throw(Error, "EncodingError U+77F4");
expect(() => {ms932Encoder.encode("\u77F5")}).to.throw(Error, "EncodingError U+77F5");
expect(() => {ms932Encoder.encode("\u77F6")}).to.throw(Error, "EncodingError U+77F6");
expect(() => {ms932Encoder.encode("\u77F7")}).to.throw(Error, "EncodingError U+77F7");
expect(() => {ms932Encoder.encode("\u77F8")}).to.throw(Error, "EncodingError U+77F8");
expect(() => {ms932Encoder.encode("\u77F9")}).to.throw(Error, "EncodingError U+77F9");
expect(() => {ms932Encoder.encode("\u77FA")}).to.throw(Error, "EncodingError U+77FA");
expect(() => {ms932Encoder.encode("\u77FB")}).to.throw(Error, "EncodingError U+77FB");
r = r && ([...ms932Encoder.encode("矼")].join(",") === "225,227"); // U+77FC
expect(() => {ms932Encoder.encode("\u77FD")}).to.throw(Error, "EncodingError U+77FD");
expect(() => {ms932Encoder.encode("\u77FE")}).to.throw(Error, "EncodingError U+77FE");
expect(() => {ms932Encoder.encode("\u77FF")}).to.throw(Error, "EncodingError U+77FF");

expect(r).to.equal(true);

  });

});
