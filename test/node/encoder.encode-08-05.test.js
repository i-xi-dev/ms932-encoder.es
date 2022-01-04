import assert from "node:assert";
import { Ms932Encoder } from "../../node/index.mjs";

describe("Ms932Encoder.prototype.encode 8", () => {

  it("encode(string) - U+7400-U+77FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u7400")}, {name:"Error",message:"EncodingError U+7400"});
assert.throws(() => {ms932Encoder.encode("\u7401")}, {name:"Error",message:"EncodingError U+7401"});
assert.throws(() => {ms932Encoder.encode("\u7402")}, {name:"Error",message:"EncodingError U+7402"});
r = r && ([...ms932Encoder.encode("球")].join(",") === "139,133"); // U+7403
assert.throws(() => {ms932Encoder.encode("\u7404")}, {name:"Error",message:"EncodingError U+7404"});
r = r && ([...ms932Encoder.encode("琅理琇")].join(",") === "224,228,151,157,251,101"); // U+7405
assert.throws(() => {ms932Encoder.encode("\u7408")}, {name:"Error",message:"EncodingError U+7408"});
r = r && ([...ms932Encoder.encode("琉")].join(",") === "151,174"); // U+7409
assert.throws(() => {ms932Encoder.encode("\u740A")}, {name:"Error",message:"EncodingError U+740A"});
assert.throws(() => {ms932Encoder.encode("\u740B")}, {name:"Error",message:"EncodingError U+740B"});
assert.throws(() => {ms932Encoder.encode("\u740C")}, {name:"Error",message:"EncodingError U+740C"});
assert.throws(() => {ms932Encoder.encode("\u740D")}, {name:"Error",message:"EncodingError U+740D"});
assert.throws(() => {ms932Encoder.encode("\u740E")}, {name:"Error",message:"EncodingError U+740E"});
assert.throws(() => {ms932Encoder.encode("\u740F")}, {name:"Error",message:"EncodingError U+740F"});
assert.throws(() => {ms932Encoder.encode("\u7410")}, {name:"Error",message:"EncodingError U+7410"});
assert.throws(() => {ms932Encoder.encode("\u7411")}, {name:"Error",message:"EncodingError U+7411"});
assert.throws(() => {ms932Encoder.encode("\u7412")}, {name:"Error",message:"EncodingError U+7412"});
assert.throws(() => {ms932Encoder.encode("\u7413")}, {name:"Error",message:"EncodingError U+7413"});
assert.throws(() => {ms932Encoder.encode("\u7414")}, {name:"Error",message:"EncodingError U+7414"});
assert.throws(() => {ms932Encoder.encode("\u7415")}, {name:"Error",message:"EncodingError U+7415"});
assert.throws(() => {ms932Encoder.encode("\u7416")}, {name:"Error",message:"EncodingError U+7416"});
assert.throws(() => {ms932Encoder.encode("\u7417")}, {name:"Error",message:"EncodingError U+7417"});
assert.throws(() => {ms932Encoder.encode("\u7418")}, {name:"Error",message:"EncodingError U+7418"});
assert.throws(() => {ms932Encoder.encode("\u7419")}, {name:"Error",message:"EncodingError U+7419"});
assert.throws(() => {ms932Encoder.encode("\u741A")}, {name:"Error",message:"EncodingError U+741A"});
assert.throws(() => {ms932Encoder.encode("\u741B")}, {name:"Error",message:"EncodingError U+741B"});
assert.throws(() => {ms932Encoder.encode("\u741C")}, {name:"Error",message:"EncodingError U+741C"});
assert.throws(() => {ms932Encoder.encode("\u741D")}, {name:"Error",message:"EncodingError U+741D"});
assert.throws(() => {ms932Encoder.encode("\u741E")}, {name:"Error",message:"EncodingError U+741E"});
assert.throws(() => {ms932Encoder.encode("\u741F")}, {name:"Error",message:"EncodingError U+741F"});
assert.throws(() => {ms932Encoder.encode("\u7420")}, {name:"Error",message:"EncodingError U+7420"});
assert.throws(() => {ms932Encoder.encode("\u7421")}, {name:"Error",message:"EncodingError U+7421"});
r = r && ([...ms932Encoder.encode("琢")].join(",") === "145,244"); // U+7422
assert.throws(() => {ms932Encoder.encode("\u7423")}, {name:"Error",message:"EncodingError U+7423"});
assert.throws(() => {ms932Encoder.encode("\u7424")}, {name:"Error",message:"EncodingError U+7424"});
r = r && ([...ms932Encoder.encode("琥琦")].join(",") === "224,230,251,103"); // U+7425
assert.throws(() => {ms932Encoder.encode("\u7427")}, {name:"Error",message:"EncodingError U+7427"});
assert.throws(() => {ms932Encoder.encode("\u7428")}, {name:"Error",message:"EncodingError U+7428"});
r = r && ([...ms932Encoder.encode("琩琪")].join(",") === "251,105,251,104"); // U+7429
assert.throws(() => {ms932Encoder.encode("\u742B")}, {name:"Error",message:"EncodingError U+742B"});
assert.throws(() => {ms932Encoder.encode("\u742C")}, {name:"Error",message:"EncodingError U+742C"});
assert.throws(() => {ms932Encoder.encode("\u742D")}, {name:"Error",message:"EncodingError U+742D"});
r = r && ([...ms932Encoder.encode("琮")].join(",") === "251,106"); // U+742E
assert.throws(() => {ms932Encoder.encode("\u742F")}, {name:"Error",message:"EncodingError U+742F"});
assert.throws(() => {ms932Encoder.encode("\u7430")}, {name:"Error",message:"EncodingError U+7430"});
assert.throws(() => {ms932Encoder.encode("\u7431")}, {name:"Error",message:"EncodingError U+7431"});
r = r && ([...ms932Encoder.encode("琲琳琴琵琶")].join(",") === "224,232,151,212,139,213,148,250,148,105"); // U+7432
assert.throws(() => {ms932Encoder.encode("\u7437")}, {name:"Error",message:"EncodingError U+7437"});
assert.throws(() => {ms932Encoder.encode("\u7438")}, {name:"Error",message:"EncodingError U+7438"});
assert.throws(() => {ms932Encoder.encode("\u7439")}, {name:"Error",message:"EncodingError U+7439"});
r = r && ([...ms932Encoder.encode("琺")].join(",") === "224,233"); // U+743A
assert.throws(() => {ms932Encoder.encode("\u743B")}, {name:"Error",message:"EncodingError U+743B"});
assert.throws(() => {ms932Encoder.encode("\u743C")}, {name:"Error",message:"EncodingError U+743C"});
assert.throws(() => {ms932Encoder.encode("\u743D")}, {name:"Error",message:"EncodingError U+743D"});
assert.throws(() => {ms932Encoder.encode("\u743E")}, {name:"Error",message:"EncodingError U+743E"});
r = r && ([...ms932Encoder.encode("琿")].join(",") === "224,235"); // U+743F
assert.throws(() => {ms932Encoder.encode("\u7440")}, {name:"Error",message:"EncodingError U+7440"});
r = r && ([...ms932Encoder.encode("瑁")].join(",") === "224,238"); // U+7441
assert.throws(() => {ms932Encoder.encode("\u7442")}, {name:"Error",message:"EncodingError U+7442"});
assert.throws(() => {ms932Encoder.encode("\u7443")}, {name:"Error",message:"EncodingError U+7443"});
assert.throws(() => {ms932Encoder.encode("\u7444")}, {name:"Error",message:"EncodingError U+7444"});
assert.throws(() => {ms932Encoder.encode("\u7445")}, {name:"Error",message:"EncodingError U+7445"});
assert.throws(() => {ms932Encoder.encode("\u7446")}, {name:"Error",message:"EncodingError U+7446"});
assert.throws(() => {ms932Encoder.encode("\u7447")}, {name:"Error",message:"EncodingError U+7447"});
assert.throws(() => {ms932Encoder.encode("\u7448")}, {name:"Error",message:"EncodingError U+7448"});
assert.throws(() => {ms932Encoder.encode("\u7449")}, {name:"Error",message:"EncodingError U+7449"});
assert.throws(() => {ms932Encoder.encode("\u744A")}, {name:"Error",message:"EncodingError U+744A"});
assert.throws(() => {ms932Encoder.encode("\u744B")}, {name:"Error",message:"EncodingError U+744B"});
assert.throws(() => {ms932Encoder.encode("\u744C")}, {name:"Error",message:"EncodingError U+744C"});
assert.throws(() => {ms932Encoder.encode("\u744D")}, {name:"Error",message:"EncodingError U+744D"});
assert.throws(() => {ms932Encoder.encode("\u744E")}, {name:"Error",message:"EncodingError U+744E"});
assert.throws(() => {ms932Encoder.encode("\u744F")}, {name:"Error",message:"EncodingError U+744F"});
assert.throws(() => {ms932Encoder.encode("\u7450")}, {name:"Error",message:"EncodingError U+7450"});
assert.throws(() => {ms932Encoder.encode("\u7451")}, {name:"Error",message:"EncodingError U+7451"});
assert.throws(() => {ms932Encoder.encode("\u7452")}, {name:"Error",message:"EncodingError U+7452"});
assert.throws(() => {ms932Encoder.encode("\u7453")}, {name:"Error",message:"EncodingError U+7453"});
assert.throws(() => {ms932Encoder.encode("\u7454")}, {name:"Error",message:"EncodingError U+7454"});
r = r && ([...ms932Encoder.encode("瑕")].join(",") === "224,234"); // U+7455
assert.throws(() => {ms932Encoder.encode("\u7456")}, {name:"Error",message:"EncodingError U+7456"});
assert.throws(() => {ms932Encoder.encode("\u7457")}, {name:"Error",message:"EncodingError U+7457"});
assert.throws(() => {ms932Encoder.encode("\u7458")}, {name:"Error",message:"EncodingError U+7458"});
r = r && ([...ms932Encoder.encode("瑙瑚瑛瑜")].join(",") === "224,237,140,232,137,108,224,239"); // U+7459
assert.throws(() => {ms932Encoder.encode("\u745D")}, {name:"Error",message:"EncodingError U+745D"});
r = r && ([...ms932Encoder.encode("瑞瑟瑠")].join(",") === "144,144,224,236,151,218"); // U+745E
assert.throws(() => {ms932Encoder.encode("\u7461")}, {name:"Error",message:"EncodingError U+7461"});
r = r && ([...ms932Encoder.encode("瑢瑣瑤")].join(",") === "251,107,224,242,234,162"); // U+7462
assert.throws(() => {ms932Encoder.encode("\u7465")}, {name:"Error",message:"EncodingError U+7465"});
assert.throws(() => {ms932Encoder.encode("\u7466")}, {name:"Error",message:"EncodingError U+7466"});
assert.throws(() => {ms932Encoder.encode("\u7467")}, {name:"Error",message:"EncodingError U+7467"});
assert.throws(() => {ms932Encoder.encode("\u7468")}, {name:"Error",message:"EncodingError U+7468"});
r = r && ([...ms932Encoder.encode("瑩瑪")].join(",") === "224,240,224,243"); // U+7469
assert.throws(() => {ms932Encoder.encode("\u746B")}, {name:"Error",message:"EncodingError U+746B"});
assert.throws(() => {ms932Encoder.encode("\u746C")}, {name:"Error",message:"EncodingError U+746C"});
assert.throws(() => {ms932Encoder.encode("\u746D")}, {name:"Error",message:"EncodingError U+746D"});
assert.throws(() => {ms932Encoder.encode("\u746E")}, {name:"Error",message:"EncodingError U+746E"});
r = r && ([...ms932Encoder.encode("瑯瑰")].join(",") === "224,229,224,241"); // U+746F
assert.throws(() => {ms932Encoder.encode("\u7471")}, {name:"Error",message:"EncodingError U+7471"});
assert.throws(() => {ms932Encoder.encode("\u7472")}, {name:"Error",message:"EncodingError U+7472"});
r = r && ([...ms932Encoder.encode("瑳")].join(",") === "141,186"); // U+7473
assert.throws(() => {ms932Encoder.encode("\u7474")}, {name:"Error",message:"EncodingError U+7474"});
assert.throws(() => {ms932Encoder.encode("\u7475")}, {name:"Error",message:"EncodingError U+7475"});
r = r && ([...ms932Encoder.encode("瑶")].join(",") === "224,244"); // U+7476
assert.throws(() => {ms932Encoder.encode("\u7477")}, {name:"Error",message:"EncodingError U+7477"});
assert.throws(() => {ms932Encoder.encode("\u7478")}, {name:"Error",message:"EncodingError U+7478"});
assert.throws(() => {ms932Encoder.encode("\u7479")}, {name:"Error",message:"EncodingError U+7479"});
assert.throws(() => {ms932Encoder.encode("\u747A")}, {name:"Error",message:"EncodingError U+747A"});
assert.throws(() => {ms932Encoder.encode("\u747B")}, {name:"Error",message:"EncodingError U+747B"});
assert.throws(() => {ms932Encoder.encode("\u747C")}, {name:"Error",message:"EncodingError U+747C"});
assert.throws(() => {ms932Encoder.encode("\u747D")}, {name:"Error",message:"EncodingError U+747D"});
r = r && ([...ms932Encoder.encode("瑾")].join(",") === "224,245"); // U+747E
assert.throws(() => {ms932Encoder.encode("\u747F")}, {name:"Error",message:"EncodingError U+747F"});
assert.throws(() => {ms932Encoder.encode("\u7480")}, {name:"Error",message:"EncodingError U+7480"});
assert.throws(() => {ms932Encoder.encode("\u7481")}, {name:"Error",message:"EncodingError U+7481"});
assert.throws(() => {ms932Encoder.encode("\u7482")}, {name:"Error",message:"EncodingError U+7482"});
r = r && ([...ms932Encoder.encode("璃")].join(",") === "151,158"); // U+7483
assert.throws(() => {ms932Encoder.encode("\u7484")}, {name:"Error",message:"EncodingError U+7484"});
assert.throws(() => {ms932Encoder.encode("\u7485")}, {name:"Error",message:"EncodingError U+7485"});
assert.throws(() => {ms932Encoder.encode("\u7486")}, {name:"Error",message:"EncodingError U+7486"});
assert.throws(() => {ms932Encoder.encode("\u7487")}, {name:"Error",message:"EncodingError U+7487"});
assert.throws(() => {ms932Encoder.encode("\u7488")}, {name:"Error",message:"EncodingError U+7488"});
r = r && ([...ms932Encoder.encode("璉")].join(",") === "251,108"); // U+7489
assert.throws(() => {ms932Encoder.encode("\u748A")}, {name:"Error",message:"EncodingError U+748A"});
r = r && ([...ms932Encoder.encode("璋")].join(",") === "224,246"); // U+748B
assert.throws(() => {ms932Encoder.encode("\u748C")}, {name:"Error",message:"EncodingError U+748C"});
assert.throws(() => {ms932Encoder.encode("\u748D")}, {name:"Error",message:"EncodingError U+748D"});
assert.throws(() => {ms932Encoder.encode("\u748E")}, {name:"Error",message:"EncodingError U+748E"});
assert.throws(() => {ms932Encoder.encode("\u748F")}, {name:"Error",message:"EncodingError U+748F"});
assert.throws(() => {ms932Encoder.encode("\u7490")}, {name:"Error",message:"EncodingError U+7490"});
assert.throws(() => {ms932Encoder.encode("\u7491")}, {name:"Error",message:"EncodingError U+7491"});
assert.throws(() => {ms932Encoder.encode("\u7492")}, {name:"Error",message:"EncodingError U+7492"});
assert.throws(() => {ms932Encoder.encode("\u7493")}, {name:"Error",message:"EncodingError U+7493"});
assert.throws(() => {ms932Encoder.encode("\u7494")}, {name:"Error",message:"EncodingError U+7494"});
assert.throws(() => {ms932Encoder.encode("\u7495")}, {name:"Error",message:"EncodingError U+7495"});
assert.throws(() => {ms932Encoder.encode("\u7496")}, {name:"Error",message:"EncodingError U+7496"});
assert.throws(() => {ms932Encoder.encode("\u7497")}, {name:"Error",message:"EncodingError U+7497"});
assert.throws(() => {ms932Encoder.encode("\u7498")}, {name:"Error",message:"EncodingError U+7498"});
assert.throws(() => {ms932Encoder.encode("\u7499")}, {name:"Error",message:"EncodingError U+7499"});
assert.throws(() => {ms932Encoder.encode("\u749A")}, {name:"Error",message:"EncodingError U+749A"});
assert.throws(() => {ms932Encoder.encode("\u749B")}, {name:"Error",message:"EncodingError U+749B"});
assert.throws(() => {ms932Encoder.encode("\u749C")}, {name:"Error",message:"EncodingError U+749C"});
assert.throws(() => {ms932Encoder.encode("\u749D")}, {name:"Error",message:"EncodingError U+749D"});
r = r && ([...ms932Encoder.encode("璞璟")].join(",") === "224,247,251,109"); // U+749E
assert.throws(() => {ms932Encoder.encode("\u74A0")}, {name:"Error",message:"EncodingError U+74A0"});
assert.throws(() => {ms932Encoder.encode("\u74A1")}, {name:"Error",message:"EncodingError U+74A1"});
r = r && ([...ms932Encoder.encode("璢")].join(",") === "224,227"); // U+74A2
assert.throws(() => {ms932Encoder.encode("\u74A3")}, {name:"Error",message:"EncodingError U+74A3"});
assert.throws(() => {ms932Encoder.encode("\u74A4")}, {name:"Error",message:"EncodingError U+74A4"});
assert.throws(() => {ms932Encoder.encode("\u74A5")}, {name:"Error",message:"EncodingError U+74A5"});
assert.throws(() => {ms932Encoder.encode("\u74A6")}, {name:"Error",message:"EncodingError U+74A6"});
r = r && ([...ms932Encoder.encode("璧")].join(",") === "224,248"); // U+74A7
assert.throws(() => {ms932Encoder.encode("\u74A8")}, {name:"Error",message:"EncodingError U+74A8"});
assert.throws(() => {ms932Encoder.encode("\u74A9")}, {name:"Error",message:"EncodingError U+74A9"});
assert.throws(() => {ms932Encoder.encode("\u74AA")}, {name:"Error",message:"EncodingError U+74AA"});
assert.throws(() => {ms932Encoder.encode("\u74AB")}, {name:"Error",message:"EncodingError U+74AB"});
assert.throws(() => {ms932Encoder.encode("\u74AC")}, {name:"Error",message:"EncodingError U+74AC"});
assert.throws(() => {ms932Encoder.encode("\u74AD")}, {name:"Error",message:"EncodingError U+74AD"});
assert.throws(() => {ms932Encoder.encode("\u74AE")}, {name:"Error",message:"EncodingError U+74AE"});
assert.throws(() => {ms932Encoder.encode("\u74AF")}, {name:"Error",message:"EncodingError U+74AF"});
r = r && ([...ms932Encoder.encode("環")].join(",") === "138,194"); // U+74B0
assert.throws(() => {ms932Encoder.encode("\u74B1")}, {name:"Error",message:"EncodingError U+74B1"});
assert.throws(() => {ms932Encoder.encode("\u74B2")}, {name:"Error",message:"EncodingError U+74B2"});
assert.throws(() => {ms932Encoder.encode("\u74B3")}, {name:"Error",message:"EncodingError U+74B3"});
assert.throws(() => {ms932Encoder.encode("\u74B4")}, {name:"Error",message:"EncodingError U+74B4"});
assert.throws(() => {ms932Encoder.encode("\u74B5")}, {name:"Error",message:"EncodingError U+74B5"});
assert.throws(() => {ms932Encoder.encode("\u74B6")}, {name:"Error",message:"EncodingError U+74B6"});
assert.throws(() => {ms932Encoder.encode("\u74B7")}, {name:"Error",message:"EncodingError U+74B7"});
assert.throws(() => {ms932Encoder.encode("\u74B8")}, {name:"Error",message:"EncodingError U+74B8"});
assert.throws(() => {ms932Encoder.encode("\u74B9")}, {name:"Error",message:"EncodingError U+74B9"});
assert.throws(() => {ms932Encoder.encode("\u74BA")}, {name:"Error",message:"EncodingError U+74BA"});
assert.throws(() => {ms932Encoder.encode("\u74BB")}, {name:"Error",message:"EncodingError U+74BB"});
assert.throws(() => {ms932Encoder.encode("\u74BC")}, {name:"Error",message:"EncodingError U+74BC"});
r = r && ([...ms932Encoder.encode("璽")].join(",") === "142,163"); // U+74BD
assert.throws(() => {ms932Encoder.encode("\u74BE")}, {name:"Error",message:"EncodingError U+74BE"});
assert.throws(() => {ms932Encoder.encode("\u74BF")}, {name:"Error",message:"EncodingError U+74BF"});
assert.throws(() => {ms932Encoder.encode("\u74C0")}, {name:"Error",message:"EncodingError U+74C0"});
assert.throws(() => {ms932Encoder.encode("\u74C1")}, {name:"Error",message:"EncodingError U+74C1"});
assert.throws(() => {ms932Encoder.encode("\u74C2")}, {name:"Error",message:"EncodingError U+74C2"});
assert.throws(() => {ms932Encoder.encode("\u74C3")}, {name:"Error",message:"EncodingError U+74C3"});
assert.throws(() => {ms932Encoder.encode("\u74C4")}, {name:"Error",message:"EncodingError U+74C4"});
assert.throws(() => {ms932Encoder.encode("\u74C5")}, {name:"Error",message:"EncodingError U+74C5"});
assert.throws(() => {ms932Encoder.encode("\u74C6")}, {name:"Error",message:"EncodingError U+74C6"});
assert.throws(() => {ms932Encoder.encode("\u74C7")}, {name:"Error",message:"EncodingError U+74C7"});
assert.throws(() => {ms932Encoder.encode("\u74C8")}, {name:"Error",message:"EncodingError U+74C8"});
assert.throws(() => {ms932Encoder.encode("\u74C9")}, {name:"Error",message:"EncodingError U+74C9"});
r = r && ([...ms932Encoder.encode("瓊")].join(",") === "224,249"); // U+74CA
assert.throws(() => {ms932Encoder.encode("\u74CB")}, {name:"Error",message:"EncodingError U+74CB"});
assert.throws(() => {ms932Encoder.encode("\u74CC")}, {name:"Error",message:"EncodingError U+74CC"});
assert.throws(() => {ms932Encoder.encode("\u74CD")}, {name:"Error",message:"EncodingError U+74CD"});
assert.throws(() => {ms932Encoder.encode("\u74CE")}, {name:"Error",message:"EncodingError U+74CE"});
r = r && ([...ms932Encoder.encode("瓏")].join(",") === "224,250"); // U+74CF
assert.throws(() => {ms932Encoder.encode("\u74D0")}, {name:"Error",message:"EncodingError U+74D0"});
assert.throws(() => {ms932Encoder.encode("\u74D1")}, {name:"Error",message:"EncodingError U+74D1"});
assert.throws(() => {ms932Encoder.encode("\u74D2")}, {name:"Error",message:"EncodingError U+74D2"});
assert.throws(() => {ms932Encoder.encode("\u74D3")}, {name:"Error",message:"EncodingError U+74D3"});
r = r && ([...ms932Encoder.encode("瓔")].join(",") === "224,251"); // U+74D4
assert.throws(() => {ms932Encoder.encode("\u74D5")}, {name:"Error",message:"EncodingError U+74D5"});
assert.throws(() => {ms932Encoder.encode("\u74D6")}, {name:"Error",message:"EncodingError U+74D6"});
assert.throws(() => {ms932Encoder.encode("\u74D7")}, {name:"Error",message:"EncodingError U+74D7"});
assert.throws(() => {ms932Encoder.encode("\u74D8")}, {name:"Error",message:"EncodingError U+74D8"});
assert.throws(() => {ms932Encoder.encode("\u74D9")}, {name:"Error",message:"EncodingError U+74D9"});
assert.throws(() => {ms932Encoder.encode("\u74DA")}, {name:"Error",message:"EncodingError U+74DA"});
assert.throws(() => {ms932Encoder.encode("\u74DB")}, {name:"Error",message:"EncodingError U+74DB"});
r = r && ([...ms932Encoder.encode("瓜")].join(",") === "137,90"); // U+74DC
assert.throws(() => {ms932Encoder.encode("\u74DD")}, {name:"Error",message:"EncodingError U+74DD"});
assert.throws(() => {ms932Encoder.encode("\u74DE")}, {name:"Error",message:"EncodingError U+74DE"});
assert.throws(() => {ms932Encoder.encode("\u74DF")}, {name:"Error",message:"EncodingError U+74DF"});
r = r && ([...ms932Encoder.encode("瓠")].join(",") === "225,64"); // U+74E0
assert.throws(() => {ms932Encoder.encode("\u74E1")}, {name:"Error",message:"EncodingError U+74E1"});
r = r && ([...ms932Encoder.encode("瓢瓣")].join(",") === "149,90,225,65"); // U+74E2
assert.throws(() => {ms932Encoder.encode("\u74E4")}, {name:"Error",message:"EncodingError U+74E4"});
assert.throws(() => {ms932Encoder.encode("\u74E5")}, {name:"Error",message:"EncodingError U+74E5"});
r = r && ([...ms932Encoder.encode("瓦瓧")].join(",") === "138,162,225,66"); // U+74E6
assert.throws(() => {ms932Encoder.encode("\u74E8")}, {name:"Error",message:"EncodingError U+74E8"});
r = r && ([...ms932Encoder.encode("瓩")].join(",") === "225,67"); // U+74E9
assert.throws(() => {ms932Encoder.encode("\u74EA")}, {name:"Error",message:"EncodingError U+74EA"});
assert.throws(() => {ms932Encoder.encode("\u74EB")}, {name:"Error",message:"EncodingError U+74EB"});
assert.throws(() => {ms932Encoder.encode("\u74EC")}, {name:"Error",message:"EncodingError U+74EC"});
assert.throws(() => {ms932Encoder.encode("\u74ED")}, {name:"Error",message:"EncodingError U+74ED"});
r = r && ([...ms932Encoder.encode("瓮")].join(",") === "225,68"); // U+74EE
assert.throws(() => {ms932Encoder.encode("\u74EF")}, {name:"Error",message:"EncodingError U+74EF"});
r = r && ([...ms932Encoder.encode("瓰瓱瓲")].join(",") === "225,70,225,71,225,69"); // U+74F0
assert.throws(() => {ms932Encoder.encode("\u74F3")}, {name:"Error",message:"EncodingError U+74F3"});
assert.throws(() => {ms932Encoder.encode("\u74F4")}, {name:"Error",message:"EncodingError U+74F4"});
assert.throws(() => {ms932Encoder.encode("\u74F5")}, {name:"Error",message:"EncodingError U+74F5"});
r = r && ([...ms932Encoder.encode("瓶瓷瓸")].join(",") === "149,114,225,73,225,72"); // U+74F6
assert.throws(() => {ms932Encoder.encode("\u74F9")}, {name:"Error",message:"EncodingError U+74F9"});
assert.throws(() => {ms932Encoder.encode("\u74FA")}, {name:"Error",message:"EncodingError U+74FA"});
assert.throws(() => {ms932Encoder.encode("\u74FB")}, {name:"Error",message:"EncodingError U+74FB"});
assert.throws(() => {ms932Encoder.encode("\u74FC")}, {name:"Error",message:"EncodingError U+74FC"});
assert.throws(() => {ms932Encoder.encode("\u74FD")}, {name:"Error",message:"EncodingError U+74FD"});
assert.throws(() => {ms932Encoder.encode("\u74FE")}, {name:"Error",message:"EncodingError U+74FE"});
assert.throws(() => {ms932Encoder.encode("\u74FF")}, {name:"Error",message:"EncodingError U+74FF"});
assert.throws(() => {ms932Encoder.encode("\u7500")}, {name:"Error",message:"EncodingError U+7500"});
r = r && ([...ms932Encoder.encode("甁")].join(",") === "251,110"); // U+7501
assert.throws(() => {ms932Encoder.encode("\u7502")}, {name:"Error",message:"EncodingError U+7502"});
r = r && ([...ms932Encoder.encode("甃甄甅")].join(",") === "225,75,225,74,225,76"); // U+7503
assert.throws(() => {ms932Encoder.encode("\u7506")}, {name:"Error",message:"EncodingError U+7506"});
assert.throws(() => {ms932Encoder.encode("\u7507")}, {name:"Error",message:"EncodingError U+7507"});
assert.throws(() => {ms932Encoder.encode("\u7508")}, {name:"Error",message:"EncodingError U+7508"});
assert.throws(() => {ms932Encoder.encode("\u7509")}, {name:"Error",message:"EncodingError U+7509"});
assert.throws(() => {ms932Encoder.encode("\u750A")}, {name:"Error",message:"EncodingError U+750A"});
assert.throws(() => {ms932Encoder.encode("\u750B")}, {name:"Error",message:"EncodingError U+750B"});
r = r && ([...ms932Encoder.encode("甌甍甎")].join(",") === "225,77,225,79,225,78"); // U+750C
assert.throws(() => {ms932Encoder.encode("\u750F")}, {name:"Error",message:"EncodingError U+750F"});
assert.throws(() => {ms932Encoder.encode("\u7510")}, {name:"Error",message:"EncodingError U+7510"});
r = r && ([...ms932Encoder.encode("甑")].join(",") === "141,153"); // U+7511
assert.throws(() => {ms932Encoder.encode("\u7512")}, {name:"Error",message:"EncodingError U+7512"});
r = r && ([...ms932Encoder.encode("甓")].join(",") === "225,81"); // U+7513
assert.throws(() => {ms932Encoder.encode("\u7514")}, {name:"Error",message:"EncodingError U+7514"});
r = r && ([...ms932Encoder.encode("甕")].join(",") === "225,80"); // U+7515
assert.throws(() => {ms932Encoder.encode("\u7516")}, {name:"Error",message:"EncodingError U+7516"});
assert.throws(() => {ms932Encoder.encode("\u7517")}, {name:"Error",message:"EncodingError U+7517"});
r = r && ([...ms932Encoder.encode("甘")].join(",") === "138,195"); // U+7518
assert.throws(() => {ms932Encoder.encode("\u7519")}, {name:"Error",message:"EncodingError U+7519"});
r = r && ([...ms932Encoder.encode("甚")].join(",") === "144,114"); // U+751A
assert.throws(() => {ms932Encoder.encode("\u751B")}, {name:"Error",message:"EncodingError U+751B"});
r = r && ([...ms932Encoder.encode("甜")].join(",") === "147,91"); // U+751C
assert.throws(() => {ms932Encoder.encode("\u751D")}, {name:"Error",message:"EncodingError U+751D"});
r = r && ([...ms932Encoder.encode("甞生")].join(",") === "225,82,144,182"); // U+751E
assert.throws(() => {ms932Encoder.encode("\u7520")}, {name:"Error",message:"EncodingError U+7520"});
assert.throws(() => {ms932Encoder.encode("\u7521")}, {name:"Error",message:"EncodingError U+7521"});
assert.throws(() => {ms932Encoder.encode("\u7522")}, {name:"Error",message:"EncodingError U+7522"});
r = r && ([...ms932Encoder.encode("産")].join(",") === "142,89"); // U+7523
assert.throws(() => {ms932Encoder.encode("\u7524")}, {name:"Error",message:"EncodingError U+7524"});
r = r && ([...ms932Encoder.encode("甥甦")].join(",") === "137,153,225,83"); // U+7525
assert.throws(() => {ms932Encoder.encode("\u7527")}, {name:"Error",message:"EncodingError U+7527"});
r = r && ([...ms932Encoder.encode("用")].join(",") === "151,112"); // U+7528
assert.throws(() => {ms932Encoder.encode("\u7529")}, {name:"Error",message:"EncodingError U+7529"});
assert.throws(() => {ms932Encoder.encode("\u752A")}, {name:"Error",message:"EncodingError U+752A"});
r = r && ([...ms932Encoder.encode("甫甬")].join(",") === "149,225,225,84"); // U+752B
assert.throws(() => {ms932Encoder.encode("\u752D")}, {name:"Error",message:"EncodingError U+752D"});
assert.throws(() => {ms932Encoder.encode("\u752E")}, {name:"Error",message:"EncodingError U+752E"});
r = r && ([...ms932Encoder.encode("甯田由甲申")].join(",") === "250,168,147,99,151,82,141,98,144,92"); // U+752F
assert.throws(() => {ms932Encoder.encode("\u7534")}, {name:"Error",message:"EncodingError U+7534"});
assert.throws(() => {ms932Encoder.encode("\u7535")}, {name:"Error",message:"EncodingError U+7535"});
assert.throws(() => {ms932Encoder.encode("\u7536")}, {name:"Error",message:"EncodingError U+7536"});
r = r && ([...ms932Encoder.encode("男甸")].join(",") === "146,106,153,178"); // U+7537
assert.throws(() => {ms932Encoder.encode("\u7539")}, {name:"Error",message:"EncodingError U+7539"});
r = r && ([...ms932Encoder.encode("町画甼")].join(",") === "146,172,137,230,225,85"); // U+753A
assert.throws(() => {ms932Encoder.encode("\u753D")}, {name:"Error",message:"EncodingError U+753D"});
assert.throws(() => {ms932Encoder.encode("\u753E")}, {name:"Error",message:"EncodingError U+753E"});
assert.throws(() => {ms932Encoder.encode("\u753F")}, {name:"Error",message:"EncodingError U+753F"});
assert.throws(() => {ms932Encoder.encode("\u7540")}, {name:"Error",message:"EncodingError U+7540"});
assert.throws(() => {ms932Encoder.encode("\u7541")}, {name:"Error",message:"EncodingError U+7541"});
assert.throws(() => {ms932Encoder.encode("\u7542")}, {name:"Error",message:"EncodingError U+7542"});
assert.throws(() => {ms932Encoder.encode("\u7543")}, {name:"Error",message:"EncodingError U+7543"});
r = r && ([...ms932Encoder.encode("畄")].join(",") === "225,86"); // U+7544
assert.throws(() => {ms932Encoder.encode("\u7545")}, {name:"Error",message:"EncodingError U+7545"});
r = r && ([...ms932Encoder.encode("畆")].join(",") === "225,91"); // U+7546
assert.throws(() => {ms932Encoder.encode("\u7547")}, {name:"Error",message:"EncodingError U+7547"});
assert.throws(() => {ms932Encoder.encode("\u7548")}, {name:"Error",message:"EncodingError U+7548"});
r = r && ([...ms932Encoder.encode("畉畊畋界畍")].join(",") === "225,89,225,88,157,192,138,69,225,87"); // U+7549
assert.throws(() => {ms932Encoder.encode("\u754E")}, {name:"Error",message:"EncodingError U+754E"});
r = r && ([...ms932Encoder.encode("畏")].join(",") === "136,216"); // U+754F
assert.throws(() => {ms932Encoder.encode("\u7550")}, {name:"Error",message:"EncodingError U+7550"});
r = r && ([...ms932Encoder.encode("畑")].join(",") === "148,168"); // U+7551
assert.throws(() => {ms932Encoder.encode("\u7552")}, {name:"Error",message:"EncodingError U+7552"});
assert.throws(() => {ms932Encoder.encode("\u7553")}, {name:"Error",message:"EncodingError U+7553"});
r = r && ([...ms932Encoder.encode("畔")].join(",") === "148,200"); // U+7554
assert.throws(() => {ms932Encoder.encode("\u7555")}, {name:"Error",message:"EncodingError U+7555"});
assert.throws(() => {ms932Encoder.encode("\u7556")}, {name:"Error",message:"EncodingError U+7556"});
assert.throws(() => {ms932Encoder.encode("\u7557")}, {name:"Error",message:"EncodingError U+7557"});
assert.throws(() => {ms932Encoder.encode("\u7558")}, {name:"Error",message:"EncodingError U+7558"});
r = r && ([...ms932Encoder.encode("留畚畛畜畝")].join(",") === "151,175,225,92,225,90,146,123,144,164"); // U+7559
assert.throws(() => {ms932Encoder.encode("\u755E")}, {name:"Error",message:"EncodingError U+755E"});
assert.throws(() => {ms932Encoder.encode("\u755F")}, {name:"Error",message:"EncodingError U+755F"});
r = r && ([...ms932Encoder.encode("畠")].join(",") === "148,169"); // U+7560
assert.throws(() => {ms932Encoder.encode("\u7561")}, {name:"Error",message:"EncodingError U+7561"});
r = r && ([...ms932Encoder.encode("畢")].join(",") === "149,76"); // U+7562
assert.throws(() => {ms932Encoder.encode("\u7563")}, {name:"Error",message:"EncodingError U+7563"});
r = r && ([...ms932Encoder.encode("畤略畦畧")].join(",") === "225,94,151,170,140,108,225,95"); // U+7564
assert.throws(() => {ms932Encoder.encode("\u7568")}, {name:"Error",message:"EncodingError U+7568"});
r = r && ([...ms932Encoder.encode("畩番畫")].join(",") === "225,93,148,212,225,96"); // U+7569
assert.throws(() => {ms932Encoder.encode("\u756C")}, {name:"Error",message:"EncodingError U+756C"});
r = r && ([...ms932Encoder.encode("畭")].join(",") === "225,97"); // U+756D
assert.throws(() => {ms932Encoder.encode("\u756E")}, {name:"Error",message:"EncodingError U+756E"});
r = r && ([...ms932Encoder.encode("畯異")].join(",") === "251,111,136,217"); // U+756F
assert.throws(() => {ms932Encoder.encode("\u7571")}, {name:"Error",message:"EncodingError U+7571"});
assert.throws(() => {ms932Encoder.encode("\u7572")}, {name:"Error",message:"EncodingError U+7572"});
r = r && ([...ms932Encoder.encode("畳畴")].join(",") === "143,244,225,102"); // U+7573
assert.throws(() => {ms932Encoder.encode("\u7575")}, {name:"Error",message:"EncodingError U+7575"});
r = r && ([...ms932Encoder.encode("當畷畸")].join(",") === "225,99,147,235,225,98"); // U+7576
assert.throws(() => {ms932Encoder.encode("\u7579")}, {name:"Error",message:"EncodingError U+7579"});
assert.throws(() => {ms932Encoder.encode("\u757A")}, {name:"Error",message:"EncodingError U+757A"});
assert.throws(() => {ms932Encoder.encode("\u757B")}, {name:"Error",message:"EncodingError U+757B"});
assert.throws(() => {ms932Encoder.encode("\u757C")}, {name:"Error",message:"EncodingError U+757C"});
assert.throws(() => {ms932Encoder.encode("\u757D")}, {name:"Error",message:"EncodingError U+757D"});
assert.throws(() => {ms932Encoder.encode("\u757E")}, {name:"Error",message:"EncodingError U+757E"});
r = r && ([...ms932Encoder.encode("畿")].join(",") === "139,69"); // U+757F
assert.throws(() => {ms932Encoder.encode("\u7580")}, {name:"Error",message:"EncodingError U+7580"});
assert.throws(() => {ms932Encoder.encode("\u7581")}, {name:"Error",message:"EncodingError U+7581"});
r = r && ([...ms932Encoder.encode("疂")].join(",") === "225,105"); // U+7582
assert.throws(() => {ms932Encoder.encode("\u7583")}, {name:"Error",message:"EncodingError U+7583"});
assert.throws(() => {ms932Encoder.encode("\u7584")}, {name:"Error",message:"EncodingError U+7584"});
assert.throws(() => {ms932Encoder.encode("\u7585")}, {name:"Error",message:"EncodingError U+7585"});
r = r && ([...ms932Encoder.encode("疆疇")].join(",") === "225,100,225,101"); // U+7586
assert.throws(() => {ms932Encoder.encode("\u7588")}, {name:"Error",message:"EncodingError U+7588"});
r = r && ([...ms932Encoder.encode("疉疊疋")].join(",") === "225,104,225,103,149,68"); // U+7589
assert.throws(() => {ms932Encoder.encode("\u758C")}, {name:"Error",message:"EncodingError U+758C"});
assert.throws(() => {ms932Encoder.encode("\u758D")}, {name:"Error",message:"EncodingError U+758D"});
r = r && ([...ms932Encoder.encode("疎疏")].join(",") === "145,97,145,96"); // U+758E
assert.throws(() => {ms932Encoder.encode("\u7590")}, {name:"Error",message:"EncodingError U+7590"});
r = r && ([...ms932Encoder.encode("疑")].join(",") === "139,94"); // U+7591
assert.throws(() => {ms932Encoder.encode("\u7592")}, {name:"Error",message:"EncodingError U+7592"});
assert.throws(() => {ms932Encoder.encode("\u7593")}, {name:"Error",message:"EncodingError U+7593"});
r = r && ([...ms932Encoder.encode("疔")].join(",") === "225,106"); // U+7594
assert.throws(() => {ms932Encoder.encode("\u7595")}, {name:"Error",message:"EncodingError U+7595"});
assert.throws(() => {ms932Encoder.encode("\u7596")}, {name:"Error",message:"EncodingError U+7596"});
assert.throws(() => {ms932Encoder.encode("\u7597")}, {name:"Error",message:"EncodingError U+7597"});
assert.throws(() => {ms932Encoder.encode("\u7598")}, {name:"Error",message:"EncodingError U+7598"});
assert.throws(() => {ms932Encoder.encode("\u7599")}, {name:"Error",message:"EncodingError U+7599"});
r = r && ([...ms932Encoder.encode("疚")].join(",") === "225,107"); // U+759A
assert.throws(() => {ms932Encoder.encode("\u759B")}, {name:"Error",message:"EncodingError U+759B"});
assert.throws(() => {ms932Encoder.encode("\u759C")}, {name:"Error",message:"EncodingError U+759C"});
r = r && ([...ms932Encoder.encode("疝")].join(",") === "225,108"); // U+759D
assert.throws(() => {ms932Encoder.encode("\u759E")}, {name:"Error",message:"EncodingError U+759E"});
assert.throws(() => {ms932Encoder.encode("\u759F")}, {name:"Error",message:"EncodingError U+759F"});
assert.throws(() => {ms932Encoder.encode("\u75A0")}, {name:"Error",message:"EncodingError U+75A0"});
assert.throws(() => {ms932Encoder.encode("\u75A1")}, {name:"Error",message:"EncodingError U+75A1"});
assert.throws(() => {ms932Encoder.encode("\u75A2")}, {name:"Error",message:"EncodingError U+75A2"});
r = r && ([...ms932Encoder.encode("疣")].join(",") === "225,110"); // U+75A3
assert.throws(() => {ms932Encoder.encode("\u75A4")}, {name:"Error",message:"EncodingError U+75A4"});
r = r && ([...ms932Encoder.encode("疥")].join(",") === "225,109"); // U+75A5
assert.throws(() => {ms932Encoder.encode("\u75A6")}, {name:"Error",message:"EncodingError U+75A6"});
assert.throws(() => {ms932Encoder.encode("\u75A7")}, {name:"Error",message:"EncodingError U+75A7"});
assert.throws(() => {ms932Encoder.encode("\u75A8")}, {name:"Error",message:"EncodingError U+75A8"});
assert.throws(() => {ms932Encoder.encode("\u75A9")}, {name:"Error",message:"EncodingError U+75A9"});
assert.throws(() => {ms932Encoder.encode("\u75AA")}, {name:"Error",message:"EncodingError U+75AA"});
r = r && ([...ms932Encoder.encode("疫")].join(",") === "137,117"); // U+75AB
assert.throws(() => {ms932Encoder.encode("\u75AC")}, {name:"Error",message:"EncodingError U+75AC"});
assert.throws(() => {ms932Encoder.encode("\u75AD")}, {name:"Error",message:"EncodingError U+75AD"});
assert.throws(() => {ms932Encoder.encode("\u75AE")}, {name:"Error",message:"EncodingError U+75AE"});
assert.throws(() => {ms932Encoder.encode("\u75AF")}, {name:"Error",message:"EncodingError U+75AF"});
assert.throws(() => {ms932Encoder.encode("\u75B0")}, {name:"Error",message:"EncodingError U+75B0"});
r = r && ([...ms932Encoder.encode("疱疲疳")].join(",") === "225,118,148,230,225,112"); // U+75B1
assert.throws(() => {ms932Encoder.encode("\u75B4")}, {name:"Error",message:"EncodingError U+75B4"});
r = r && ([...ms932Encoder.encode("疵")].join(",") === "225,114"); // U+75B5
assert.throws(() => {ms932Encoder.encode("\u75B6")}, {name:"Error",message:"EncodingError U+75B6"});
assert.throws(() => {ms932Encoder.encode("\u75B7")}, {name:"Error",message:"EncodingError U+75B7"});
r = r && ([...ms932Encoder.encode("疸疹")].join(",") === "225,116,144,93"); // U+75B8
assert.throws(() => {ms932Encoder.encode("\u75BA")}, {name:"Error",message:"EncodingError U+75BA"});
assert.throws(() => {ms932Encoder.encode("\u75BB")}, {name:"Error",message:"EncodingError U+75BB"});
r = r && ([...ms932Encoder.encode("疼疽疾")].join(",") === "225,117,225,115,142,190"); // U+75BC
assert.throws(() => {ms932Encoder.encode("\u75BF")}, {name:"Error",message:"EncodingError U+75BF"});
assert.throws(() => {ms932Encoder.encode("\u75C0")}, {name:"Error",message:"EncodingError U+75C0"});
assert.throws(() => {ms932Encoder.encode("\u75C1")}, {name:"Error",message:"EncodingError U+75C1"});
r = r && ([...ms932Encoder.encode("痂痃")].join(",") === "225,111,225,113"); // U+75C2
assert.throws(() => {ms932Encoder.encode("\u75C4")}, {name:"Error",message:"EncodingError U+75C4"});
r = r && ([...ms932Encoder.encode("病")].join(",") === "149,97"); // U+75C5
assert.throws(() => {ms932Encoder.encode("\u75C6")}, {name:"Error",message:"EncodingError U+75C6"});
r = r && ([...ms932Encoder.encode("症")].join(",") === "143,199"); // U+75C7
assert.throws(() => {ms932Encoder.encode("\u75C8")}, {name:"Error",message:"EncodingError U+75C8"});
assert.throws(() => {ms932Encoder.encode("\u75C9")}, {name:"Error",message:"EncodingError U+75C9"});
r = r && ([...ms932Encoder.encode("痊")].join(",") === "225,120"); // U+75CA
assert.throws(() => {ms932Encoder.encode("\u75CB")}, {name:"Error",message:"EncodingError U+75CB"});
assert.throws(() => {ms932Encoder.encode("\u75CC")}, {name:"Error",message:"EncodingError U+75CC"});
r = r && ([...ms932Encoder.encode("痍")].join(",") === "225,119"); // U+75CD
assert.throws(() => {ms932Encoder.encode("\u75CE")}, {name:"Error",message:"EncodingError U+75CE"});
assert.throws(() => {ms932Encoder.encode("\u75CF")}, {name:"Error",message:"EncodingError U+75CF"});
assert.throws(() => {ms932Encoder.encode("\u75D0")}, {name:"Error",message:"EncodingError U+75D0"});
assert.throws(() => {ms932Encoder.encode("\u75D1")}, {name:"Error",message:"EncodingError U+75D1"});
r = r && ([...ms932Encoder.encode("痒")].join(",") === "225,121"); // U+75D2
assert.throws(() => {ms932Encoder.encode("\u75D3")}, {name:"Error",message:"EncodingError U+75D3"});
r = r && ([...ms932Encoder.encode("痔痕")].join(",") === "142,164,141,173"); // U+75D4
assert.throws(() => {ms932Encoder.encode("\u75D6")}, {name:"Error",message:"EncodingError U+75D6"});
assert.throws(() => {ms932Encoder.encode("\u75D7")}, {name:"Error",message:"EncodingError U+75D7"});
r = r && ([...ms932Encoder.encode("痘痙")].join(",") === "147,151,225,122"); // U+75D8
assert.throws(() => {ms932Encoder.encode("\u75DA")}, {name:"Error",message:"EncodingError U+75DA"});
r = r && ([...ms932Encoder.encode("痛")].join(",") === "146,201"); // U+75DB
assert.throws(() => {ms932Encoder.encode("\u75DC")}, {name:"Error",message:"EncodingError U+75DC"});
assert.throws(() => {ms932Encoder.encode("\u75DD")}, {name:"Error",message:"EncodingError U+75DD"});
r = r && ([...ms932Encoder.encode("痞")].join(",") === "225,124"); // U+75DE
assert.throws(() => {ms932Encoder.encode("\u75DF")}, {name:"Error",message:"EncodingError U+75DF"});
assert.throws(() => {ms932Encoder.encode("\u75E0")}, {name:"Error",message:"EncodingError U+75E0"});
assert.throws(() => {ms932Encoder.encode("\u75E1")}, {name:"Error",message:"EncodingError U+75E1"});
r = r && ([...ms932Encoder.encode("痢痣")].join(",") === "151,159,225,123"); // U+75E2
assert.throws(() => {ms932Encoder.encode("\u75E4")}, {name:"Error",message:"EncodingError U+75E4"});
assert.throws(() => {ms932Encoder.encode("\u75E5")}, {name:"Error",message:"EncodingError U+75E5"});
assert.throws(() => {ms932Encoder.encode("\u75E6")}, {name:"Error",message:"EncodingError U+75E6"});
assert.throws(() => {ms932Encoder.encode("\u75E7")}, {name:"Error",message:"EncodingError U+75E7"});
assert.throws(() => {ms932Encoder.encode("\u75E8")}, {name:"Error",message:"EncodingError U+75E8"});
r = r && ([...ms932Encoder.encode("痩")].join(",") === "145,137"); // U+75E9
assert.throws(() => {ms932Encoder.encode("\u75EA")}, {name:"Error",message:"EncodingError U+75EA"});
assert.throws(() => {ms932Encoder.encode("\u75EB")}, {name:"Error",message:"EncodingError U+75EB"});
assert.throws(() => {ms932Encoder.encode("\u75EC")}, {name:"Error",message:"EncodingError U+75EC"});
assert.throws(() => {ms932Encoder.encode("\u75ED")}, {name:"Error",message:"EncodingError U+75ED"});
assert.throws(() => {ms932Encoder.encode("\u75EE")}, {name:"Error",message:"EncodingError U+75EE"});
assert.throws(() => {ms932Encoder.encode("\u75EF")}, {name:"Error",message:"EncodingError U+75EF"});
r = r && ([...ms932Encoder.encode("痰")].join(",") === "225,130"); // U+75F0
assert.throws(() => {ms932Encoder.encode("\u75F1")}, {name:"Error",message:"EncodingError U+75F1"});
r = r && ([...ms932Encoder.encode("痲痳痴")].join(",") === "225,132,225,133,146,115"); // U+75F2
assert.throws(() => {ms932Encoder.encode("\u75F5")}, {name:"Error",message:"EncodingError U+75F5"});
assert.throws(() => {ms932Encoder.encode("\u75F6")}, {name:"Error",message:"EncodingError U+75F6"});
assert.throws(() => {ms932Encoder.encode("\u75F7")}, {name:"Error",message:"EncodingError U+75F7"});
assert.throws(() => {ms932Encoder.encode("\u75F8")}, {name:"Error",message:"EncodingError U+75F8"});
assert.throws(() => {ms932Encoder.encode("\u75F9")}, {name:"Error",message:"EncodingError U+75F9"});
r = r && ([...ms932Encoder.encode("痺")].join(",") === "225,131"); // U+75FA
assert.throws(() => {ms932Encoder.encode("\u75FB")}, {name:"Error",message:"EncodingError U+75FB"});
r = r && ([...ms932Encoder.encode("痼")].join(",") === "225,128"); // U+75FC
assert.throws(() => {ms932Encoder.encode("\u75FD")}, {name:"Error",message:"EncodingError U+75FD"});
r = r && ([...ms932Encoder.encode("痾痿")].join(",") === "225,125,225,126"); // U+75FE
assert.throws(() => {ms932Encoder.encode("\u7600")}, {name:"Error",message:"EncodingError U+7600"});
r = r && ([...ms932Encoder.encode("瘁")].join(",") === "225,129"); // U+7601
assert.throws(() => {ms932Encoder.encode("\u7602")}, {name:"Error",message:"EncodingError U+7602"});
assert.throws(() => {ms932Encoder.encode("\u7603")}, {name:"Error",message:"EncodingError U+7603"});
assert.throws(() => {ms932Encoder.encode("\u7604")}, {name:"Error",message:"EncodingError U+7604"});
assert.throws(() => {ms932Encoder.encode("\u7605")}, {name:"Error",message:"EncodingError U+7605"});
assert.throws(() => {ms932Encoder.encode("\u7606")}, {name:"Error",message:"EncodingError U+7606"});
assert.throws(() => {ms932Encoder.encode("\u7607")}, {name:"Error",message:"EncodingError U+7607"});
assert.throws(() => {ms932Encoder.encode("\u7608")}, {name:"Error",message:"EncodingError U+7608"});
r = r && ([...ms932Encoder.encode("瘉")].join(",") === "225,136"); // U+7609
assert.throws(() => {ms932Encoder.encode("\u760A")}, {name:"Error",message:"EncodingError U+760A"});
r = r && ([...ms932Encoder.encode("瘋")].join(",") === "225,134"); // U+760B
assert.throws(() => {ms932Encoder.encode("\u760C")}, {name:"Error",message:"EncodingError U+760C"});
r = r && ([...ms932Encoder.encode("瘍")].join(",") === "225,135"); // U+760D
assert.throws(() => {ms932Encoder.encode("\u760E")}, {name:"Error",message:"EncodingError U+760E"});
assert.throws(() => {ms932Encoder.encode("\u760F")}, {name:"Error",message:"EncodingError U+760F"});
assert.throws(() => {ms932Encoder.encode("\u7610")}, {name:"Error",message:"EncodingError U+7610"});
assert.throws(() => {ms932Encoder.encode("\u7611")}, {name:"Error",message:"EncodingError U+7611"});
assert.throws(() => {ms932Encoder.encode("\u7612")}, {name:"Error",message:"EncodingError U+7612"});
assert.throws(() => {ms932Encoder.encode("\u7613")}, {name:"Error",message:"EncodingError U+7613"});
assert.throws(() => {ms932Encoder.encode("\u7614")}, {name:"Error",message:"EncodingError U+7614"});
assert.throws(() => {ms932Encoder.encode("\u7615")}, {name:"Error",message:"EncodingError U+7615"});
assert.throws(() => {ms932Encoder.encode("\u7616")}, {name:"Error",message:"EncodingError U+7616"});
assert.throws(() => {ms932Encoder.encode("\u7617")}, {name:"Error",message:"EncodingError U+7617"});
assert.throws(() => {ms932Encoder.encode("\u7618")}, {name:"Error",message:"EncodingError U+7618"});
assert.throws(() => {ms932Encoder.encode("\u7619")}, {name:"Error",message:"EncodingError U+7619"});
assert.throws(() => {ms932Encoder.encode("\u761A")}, {name:"Error",message:"EncodingError U+761A"});
assert.throws(() => {ms932Encoder.encode("\u761B")}, {name:"Error",message:"EncodingError U+761B"});
assert.throws(() => {ms932Encoder.encode("\u761C")}, {name:"Error",message:"EncodingError U+761C"});
assert.throws(() => {ms932Encoder.encode("\u761D")}, {name:"Error",message:"EncodingError U+761D"});
assert.throws(() => {ms932Encoder.encode("\u761E")}, {name:"Error",message:"EncodingError U+761E"});
r = r && ([...ms932Encoder.encode("瘟瘠瘡瘢")].join(",") === "225,137,225,139,225,140,225,141"); // U+761F
assert.throws(() => {ms932Encoder.encode("\u7623")}, {name:"Error",message:"EncodingError U+7623"});
r = r && ([...ms932Encoder.encode("瘤")].join(",") === "225,142"); // U+7624
assert.throws(() => {ms932Encoder.encode("\u7625")}, {name:"Error",message:"EncodingError U+7625"});
assert.throws(() => {ms932Encoder.encode("\u7626")}, {name:"Error",message:"EncodingError U+7626"});
r = r && ([...ms932Encoder.encode("瘧")].join(",") === "225,138"); // U+7627
assert.throws(() => {ms932Encoder.encode("\u7628")}, {name:"Error",message:"EncodingError U+7628"});
assert.throws(() => {ms932Encoder.encode("\u7629")}, {name:"Error",message:"EncodingError U+7629"});
assert.throws(() => {ms932Encoder.encode("\u762A")}, {name:"Error",message:"EncodingError U+762A"});
assert.throws(() => {ms932Encoder.encode("\u762B")}, {name:"Error",message:"EncodingError U+762B"});
assert.throws(() => {ms932Encoder.encode("\u762C")}, {name:"Error",message:"EncodingError U+762C"});
assert.throws(() => {ms932Encoder.encode("\u762D")}, {name:"Error",message:"EncodingError U+762D"});
assert.throws(() => {ms932Encoder.encode("\u762E")}, {name:"Error",message:"EncodingError U+762E"});
assert.throws(() => {ms932Encoder.encode("\u762F")}, {name:"Error",message:"EncodingError U+762F"});
r = r && ([...ms932Encoder.encode("瘰")].join(",") === "225,144"); // U+7630
assert.throws(() => {ms932Encoder.encode("\u7631")}, {name:"Error",message:"EncodingError U+7631"});
assert.throws(() => {ms932Encoder.encode("\u7632")}, {name:"Error",message:"EncodingError U+7632"});
assert.throws(() => {ms932Encoder.encode("\u7633")}, {name:"Error",message:"EncodingError U+7633"});
r = r && ([...ms932Encoder.encode("瘴")].join(",") === "225,143"); // U+7634
assert.throws(() => {ms932Encoder.encode("\u7635")}, {name:"Error",message:"EncodingError U+7635"});
assert.throws(() => {ms932Encoder.encode("\u7636")}, {name:"Error",message:"EncodingError U+7636"});
assert.throws(() => {ms932Encoder.encode("\u7637")}, {name:"Error",message:"EncodingError U+7637"});
assert.throws(() => {ms932Encoder.encode("\u7638")}, {name:"Error",message:"EncodingError U+7638"});
assert.throws(() => {ms932Encoder.encode("\u7639")}, {name:"Error",message:"EncodingError U+7639"});
assert.throws(() => {ms932Encoder.encode("\u763A")}, {name:"Error",message:"EncodingError U+763A"});
r = r && ([...ms932Encoder.encode("瘻")].join(",") === "225,145"); // U+763B
assert.throws(() => {ms932Encoder.encode("\u763C")}, {name:"Error",message:"EncodingError U+763C"});
assert.throws(() => {ms932Encoder.encode("\u763D")}, {name:"Error",message:"EncodingError U+763D"});
assert.throws(() => {ms932Encoder.encode("\u763E")}, {name:"Error",message:"EncodingError U+763E"});
assert.throws(() => {ms932Encoder.encode("\u763F")}, {name:"Error",message:"EncodingError U+763F"});
assert.throws(() => {ms932Encoder.encode("\u7640")}, {name:"Error",message:"EncodingError U+7640"});
assert.throws(() => {ms932Encoder.encode("\u7641")}, {name:"Error",message:"EncodingError U+7641"});
r = r && ([...ms932Encoder.encode("療")].join(",") === "151,195"); // U+7642
assert.throws(() => {ms932Encoder.encode("\u7643")}, {name:"Error",message:"EncodingError U+7643"});
assert.throws(() => {ms932Encoder.encode("\u7644")}, {name:"Error",message:"EncodingError U+7644"});
assert.throws(() => {ms932Encoder.encode("\u7645")}, {name:"Error",message:"EncodingError U+7645"});
r = r && ([...ms932Encoder.encode("癆癇癈")].join(",") === "225,148,225,146,225,147"); // U+7646
assert.throws(() => {ms932Encoder.encode("\u7649")}, {name:"Error",message:"EncodingError U+7649"});
assert.throws(() => {ms932Encoder.encode("\u764A")}, {name:"Error",message:"EncodingError U+764A"});
assert.throws(() => {ms932Encoder.encode("\u764B")}, {name:"Error",message:"EncodingError U+764B"});
r = r && ([...ms932Encoder.encode("癌")].join(",") === "138,224"); // U+764C
assert.throws(() => {ms932Encoder.encode("\u764D")}, {name:"Error",message:"EncodingError U+764D"});
assert.throws(() => {ms932Encoder.encode("\u764E")}, {name:"Error",message:"EncodingError U+764E"});
assert.throws(() => {ms932Encoder.encode("\u764F")}, {name:"Error",message:"EncodingError U+764F"});
assert.throws(() => {ms932Encoder.encode("\u7650")}, {name:"Error",message:"EncodingError U+7650"});
assert.throws(() => {ms932Encoder.encode("\u7651")}, {name:"Error",message:"EncodingError U+7651"});
r = r && ([...ms932Encoder.encode("癒")].join(",") === "150,252"); // U+7652
assert.throws(() => {ms932Encoder.encode("\u7653")}, {name:"Error",message:"EncodingError U+7653"});
assert.throws(() => {ms932Encoder.encode("\u7654")}, {name:"Error",message:"EncodingError U+7654"});
assert.throws(() => {ms932Encoder.encode("\u7655")}, {name:"Error",message:"EncodingError U+7655"});
r = r && ([...ms932Encoder.encode("癖")].join(",") === "149,200"); // U+7656
assert.throws(() => {ms932Encoder.encode("\u7657")}, {name:"Error",message:"EncodingError U+7657"});
r = r && ([...ms932Encoder.encode("癘")].join(",") === "225,150"); // U+7658
assert.throws(() => {ms932Encoder.encode("\u7659")}, {name:"Error",message:"EncodingError U+7659"});
assert.throws(() => {ms932Encoder.encode("\u765A")}, {name:"Error",message:"EncodingError U+765A"});
assert.throws(() => {ms932Encoder.encode("\u765B")}, {name:"Error",message:"EncodingError U+765B"});
r = r && ([...ms932Encoder.encode("癜")].join(",") === "225,149"); // U+765C
assert.throws(() => {ms932Encoder.encode("\u765D")}, {name:"Error",message:"EncodingError U+765D"});
assert.throws(() => {ms932Encoder.encode("\u765E")}, {name:"Error",message:"EncodingError U+765E"});
assert.throws(() => {ms932Encoder.encode("\u765F")}, {name:"Error",message:"EncodingError U+765F"});
assert.throws(() => {ms932Encoder.encode("\u7660")}, {name:"Error",message:"EncodingError U+7660"});
r = r && ([...ms932Encoder.encode("癡癢")].join(",") === "225,151,225,152"); // U+7661
assert.throws(() => {ms932Encoder.encode("\u7663")}, {name:"Error",message:"EncodingError U+7663"});
assert.throws(() => {ms932Encoder.encode("\u7664")}, {name:"Error",message:"EncodingError U+7664"});
assert.throws(() => {ms932Encoder.encode("\u7665")}, {name:"Error",message:"EncodingError U+7665"});
assert.throws(() => {ms932Encoder.encode("\u7666")}, {name:"Error",message:"EncodingError U+7666"});
r = r && ([...ms932Encoder.encode("癧癨癩癪")].join(",") === "225,156,225,153,225,154,225,155"); // U+7667
assert.throws(() => {ms932Encoder.encode("\u766B")}, {name:"Error",message:"EncodingError U+766B"});
r = r && ([...ms932Encoder.encode("癬")].join(",") === "225,157"); // U+766C
assert.throws(() => {ms932Encoder.encode("\u766D")}, {name:"Error",message:"EncodingError U+766D"});
assert.throws(() => {ms932Encoder.encode("\u766E")}, {name:"Error",message:"EncodingError U+766E"});
assert.throws(() => {ms932Encoder.encode("\u766F")}, {name:"Error",message:"EncodingError U+766F"});
r = r && ([...ms932Encoder.encode("癰")].join(",") === "225,158"); // U+7670
assert.throws(() => {ms932Encoder.encode("\u7671")}, {name:"Error",message:"EncodingError U+7671"});
r = r && ([...ms932Encoder.encode("癲")].join(",") === "225,159"); // U+7672
assert.throws(() => {ms932Encoder.encode("\u7673")}, {name:"Error",message:"EncodingError U+7673"});
assert.throws(() => {ms932Encoder.encode("\u7674")}, {name:"Error",message:"EncodingError U+7674"});
assert.throws(() => {ms932Encoder.encode("\u7675")}, {name:"Error",message:"EncodingError U+7675"});
r = r && ([...ms932Encoder.encode("癶")].join(",") === "225,160"); // U+7676
assert.throws(() => {ms932Encoder.encode("\u7677")}, {name:"Error",message:"EncodingError U+7677"});
r = r && ([...ms932Encoder.encode("癸")].join(",") === "225,161"); // U+7678
assert.throws(() => {ms932Encoder.encode("\u7679")}, {name:"Error",message:"EncodingError U+7679"});
r = r && ([...ms932Encoder.encode("発登發白百")].join(",") === "148,173,147,111,225,162,148,146,149,83"); // U+767A
assert.throws(() => {ms932Encoder.encode("\u767F")}, {name:"Error",message:"EncodingError U+767F"});
r = r && ([...ms932Encoder.encode("皀")].join(",") === "225,163"); // U+7680
assert.throws(() => {ms932Encoder.encode("\u7681")}, {name:"Error",message:"EncodingError U+7681"});
r = r && ([...ms932Encoder.encode("皂皃的")].join(",") === "251,112,225,164,147,73"); // U+7682
assert.throws(() => {ms932Encoder.encode("\u7685")}, {name:"Error",message:"EncodingError U+7685"});
r = r && ([...ms932Encoder.encode("皆皇皈")].join(",") === "138,70,141,99,225,165"); // U+7686
assert.throws(() => {ms932Encoder.encode("\u7689")}, {name:"Error",message:"EncodingError U+7689"});
assert.throws(() => {ms932Encoder.encode("\u768A")}, {name:"Error",message:"EncodingError U+768A"});
r = r && ([...ms932Encoder.encode("皋")].join(",") === "225,166"); // U+768B
assert.throws(() => {ms932Encoder.encode("\u768C")}, {name:"Error",message:"EncodingError U+768C"});
assert.throws(() => {ms932Encoder.encode("\u768D")}, {name:"Error",message:"EncodingError U+768D"});
r = r && ([...ms932Encoder.encode("皎")].join(",") === "225,167"); // U+768E
assert.throws(() => {ms932Encoder.encode("\u768F")}, {name:"Error",message:"EncodingError U+768F"});
r = r && ([...ms932Encoder.encode("皐")].join(",") === "142,72"); // U+7690
assert.throws(() => {ms932Encoder.encode("\u7691")}, {name:"Error",message:"EncodingError U+7691"});
assert.throws(() => {ms932Encoder.encode("\u7692")}, {name:"Error",message:"EncodingError U+7692"});
r = r && ([...ms932Encoder.encode("皓")].join(",") === "225,169"); // U+7693
assert.throws(() => {ms932Encoder.encode("\u7694")}, {name:"Error",message:"EncodingError U+7694"});
assert.throws(() => {ms932Encoder.encode("\u7695")}, {name:"Error",message:"EncodingError U+7695"});
r = r && ([...ms932Encoder.encode("皖")].join(",") === "225,168"); // U+7696
assert.throws(() => {ms932Encoder.encode("\u7697")}, {name:"Error",message:"EncodingError U+7697"});
assert.throws(() => {ms932Encoder.encode("\u7698")}, {name:"Error",message:"EncodingError U+7698"});
r = r && ([...ms932Encoder.encode("皙皚皛皜")].join(",") === "225,170,225,171,251,115,251,113"); // U+7699
assert.throws(() => {ms932Encoder.encode("\u769D")}, {name:"Error",message:"EncodingError U+769D"});
r = r && ([...ms932Encoder.encode("皞")].join(",") === "251,114"); // U+769E
assert.throws(() => {ms932Encoder.encode("\u769F")}, {name:"Error",message:"EncodingError U+769F"});
assert.throws(() => {ms932Encoder.encode("\u76A0")}, {name:"Error",message:"EncodingError U+76A0"});
assert.throws(() => {ms932Encoder.encode("\u76A1")}, {name:"Error",message:"EncodingError U+76A1"});
assert.throws(() => {ms932Encoder.encode("\u76A2")}, {name:"Error",message:"EncodingError U+76A2"});
assert.throws(() => {ms932Encoder.encode("\u76A3")}, {name:"Error",message:"EncodingError U+76A3"});
assert.throws(() => {ms932Encoder.encode("\u76A4")}, {name:"Error",message:"EncodingError U+76A4"});
assert.throws(() => {ms932Encoder.encode("\u76A5")}, {name:"Error",message:"EncodingError U+76A5"});
r = r && ([...ms932Encoder.encode("皦")].join(",") === "251,116"); // U+76A6
assert.throws(() => {ms932Encoder.encode("\u76A7")}, {name:"Error",message:"EncodingError U+76A7"});
assert.throws(() => {ms932Encoder.encode("\u76A8")}, {name:"Error",message:"EncodingError U+76A8"});
assert.throws(() => {ms932Encoder.encode("\u76A9")}, {name:"Error",message:"EncodingError U+76A9"});
assert.throws(() => {ms932Encoder.encode("\u76AA")}, {name:"Error",message:"EncodingError U+76AA"});
assert.throws(() => {ms932Encoder.encode("\u76AB")}, {name:"Error",message:"EncodingError U+76AB"});
assert.throws(() => {ms932Encoder.encode("\u76AC")}, {name:"Error",message:"EncodingError U+76AC"});
assert.throws(() => {ms932Encoder.encode("\u76AD")}, {name:"Error",message:"EncodingError U+76AD"});
r = r && ([...ms932Encoder.encode("皮")].join(",") === "148,231"); // U+76AE
assert.throws(() => {ms932Encoder.encode("\u76AF")}, {name:"Error",message:"EncodingError U+76AF"});
r = r && ([...ms932Encoder.encode("皰")].join(",") === "225,172"); // U+76B0
assert.throws(() => {ms932Encoder.encode("\u76B1")}, {name:"Error",message:"EncodingError U+76B1"});
assert.throws(() => {ms932Encoder.encode("\u76B2")}, {name:"Error",message:"EncodingError U+76B2"});
assert.throws(() => {ms932Encoder.encode("\u76B3")}, {name:"Error",message:"EncodingError U+76B3"});
r = r && ([...ms932Encoder.encode("皴")].join(",") === "225,173"); // U+76B4
assert.throws(() => {ms932Encoder.encode("\u76B5")}, {name:"Error",message:"EncodingError U+76B5"});
assert.throws(() => {ms932Encoder.encode("\u76B6")}, {name:"Error",message:"EncodingError U+76B6"});
r = r && ([...ms932Encoder.encode("皷皸皹皺")].join(",") === "234,137,225,174,225,175,225,176"); // U+76B7
assert.throws(() => {ms932Encoder.encode("\u76BB")}, {name:"Error",message:"EncodingError U+76BB"});
assert.throws(() => {ms932Encoder.encode("\u76BC")}, {name:"Error",message:"EncodingError U+76BC"});
assert.throws(() => {ms932Encoder.encode("\u76BD")}, {name:"Error",message:"EncodingError U+76BD"});
assert.throws(() => {ms932Encoder.encode("\u76BE")}, {name:"Error",message:"EncodingError U+76BE"});
r = r && ([...ms932Encoder.encode("皿")].join(",") === "142,77"); // U+76BF
assert.throws(() => {ms932Encoder.encode("\u76C0")}, {name:"Error",message:"EncodingError U+76C0"});
assert.throws(() => {ms932Encoder.encode("\u76C1")}, {name:"Error",message:"EncodingError U+76C1"});
r = r && ([...ms932Encoder.encode("盂盃")].join(",") === "225,177,148,117"); // U+76C2
assert.throws(() => {ms932Encoder.encode("\u76C4")}, {name:"Error",message:"EncodingError U+76C4"});
assert.throws(() => {ms932Encoder.encode("\u76C5")}, {name:"Error",message:"EncodingError U+76C5"});
r = r && ([...ms932Encoder.encode("盆")].join(",") === "150,126"); // U+76C6
assert.throws(() => {ms932Encoder.encode("\u76C7")}, {name:"Error",message:"EncodingError U+76C7"});
r = r && ([...ms932Encoder.encode("盈")].join(",") === "137,109"); // U+76C8
assert.throws(() => {ms932Encoder.encode("\u76C9")}, {name:"Error",message:"EncodingError U+76C9"});
r = r && ([...ms932Encoder.encode("益")].join(",") === "137,118"); // U+76CA
assert.throws(() => {ms932Encoder.encode("\u76CB")}, {name:"Error",message:"EncodingError U+76CB"});
assert.throws(() => {ms932Encoder.encode("\u76CC")}, {name:"Error",message:"EncodingError U+76CC"});
r = r && ([...ms932Encoder.encode("盍")].join(",") === "225,178"); // U+76CD
assert.throws(() => {ms932Encoder.encode("\u76CE")}, {name:"Error",message:"EncodingError U+76CE"});
assert.throws(() => {ms932Encoder.encode("\u76CF")}, {name:"Error",message:"EncodingError U+76CF"});
assert.throws(() => {ms932Encoder.encode("\u76D0")}, {name:"Error",message:"EncodingError U+76D0"});
assert.throws(() => {ms932Encoder.encode("\u76D1")}, {name:"Error",message:"EncodingError U+76D1"});
r = r && ([...ms932Encoder.encode("盒")].join(",") === "225,180"); // U+76D2
assert.throws(() => {ms932Encoder.encode("\u76D3")}, {name:"Error",message:"EncodingError U+76D3"});
assert.throws(() => {ms932Encoder.encode("\u76D4")}, {name:"Error",message:"EncodingError U+76D4"});
assert.throws(() => {ms932Encoder.encode("\u76D5")}, {name:"Error",message:"EncodingError U+76D5"});
r = r && ([...ms932Encoder.encode("盖盗")].join(",") === "225,179,147,144"); // U+76D6
assert.throws(() => {ms932Encoder.encode("\u76D8")}, {name:"Error",message:"EncodingError U+76D8"});
assert.throws(() => {ms932Encoder.encode("\u76D9")}, {name:"Error",message:"EncodingError U+76D9"});
assert.throws(() => {ms932Encoder.encode("\u76DA")}, {name:"Error",message:"EncodingError U+76DA"});
r = r && ([...ms932Encoder.encode("盛盜")].join(",") === "144,183,159,88"); // U+76DB
assert.throws(() => {ms932Encoder.encode("\u76DD")}, {name:"Error",message:"EncodingError U+76DD"});
r = r && ([...ms932Encoder.encode("盞盟")].join(",") === "225,181,150,191"); // U+76DE
assert.throws(() => {ms932Encoder.encode("\u76E0")}, {name:"Error",message:"EncodingError U+76E0"});
r = r && ([...ms932Encoder.encode("盡")].join(",") === "225,182"); // U+76E1
assert.throws(() => {ms932Encoder.encode("\u76E2")}, {name:"Error",message:"EncodingError U+76E2"});
r = r && ([...ms932Encoder.encode("監盤盥")].join(",") === "138,196,148,213,225,183"); // U+76E3
assert.throws(() => {ms932Encoder.encode("\u76E6")}, {name:"Error",message:"EncodingError U+76E6"});
r = r && ([...ms932Encoder.encode("盧")].join(",") === "225,184"); // U+76E7
assert.throws(() => {ms932Encoder.encode("\u76E8")}, {name:"Error",message:"EncodingError U+76E8"});
assert.throws(() => {ms932Encoder.encode("\u76E9")}, {name:"Error",message:"EncodingError U+76E9"});
r = r && ([...ms932Encoder.encode("盪")].join(",") === "225,185"); // U+76EA
assert.throws(() => {ms932Encoder.encode("\u76EB")}, {name:"Error",message:"EncodingError U+76EB"});
assert.throws(() => {ms932Encoder.encode("\u76EC")}, {name:"Error",message:"EncodingError U+76EC"});
assert.throws(() => {ms932Encoder.encode("\u76ED")}, {name:"Error",message:"EncodingError U+76ED"});
r = r && ([...ms932Encoder.encode("目")].join(",") === "150,218"); // U+76EE
assert.throws(() => {ms932Encoder.encode("\u76EF")}, {name:"Error",message:"EncodingError U+76EF"});
assert.throws(() => {ms932Encoder.encode("\u76F0")}, {name:"Error",message:"EncodingError U+76F0"});
assert.throws(() => {ms932Encoder.encode("\u76F1")}, {name:"Error",message:"EncodingError U+76F1"});
r = r && ([...ms932Encoder.encode("盲")].join(",") === "150,211"); // U+76F2
assert.throws(() => {ms932Encoder.encode("\u76F3")}, {name:"Error",message:"EncodingError U+76F3"});
r = r && ([...ms932Encoder.encode("直")].join(",") === "146,188"); // U+76F4
assert.throws(() => {ms932Encoder.encode("\u76F5")}, {name:"Error",message:"EncodingError U+76F5"});
assert.throws(() => {ms932Encoder.encode("\u76F6")}, {name:"Error",message:"EncodingError U+76F6"});
assert.throws(() => {ms932Encoder.encode("\u76F7")}, {name:"Error",message:"EncodingError U+76F7"});
r = r && ([...ms932Encoder.encode("相")].join(",") === "145,138"); // U+76F8
assert.throws(() => {ms932Encoder.encode("\u76F9")}, {name:"Error",message:"EncodingError U+76F9"});
assert.throws(() => {ms932Encoder.encode("\u76FA")}, {name:"Error",message:"EncodingError U+76FA"});
r = r && ([...ms932Encoder.encode("盻")].join(",") === "225,187"); // U+76FB
assert.throws(() => {ms932Encoder.encode("\u76FC")}, {name:"Error",message:"EncodingError U+76FC"});
assert.throws(() => {ms932Encoder.encode("\u76FD")}, {name:"Error",message:"EncodingError U+76FD"});
r = r && ([...ms932Encoder.encode("盾")].join(",") === "143,130"); // U+76FE
assert.throws(() => {ms932Encoder.encode("\u76FF")}, {name:"Error",message:"EncodingError U+76FF"});
assert.throws(() => {ms932Encoder.encode("\u7700")}, {name:"Error",message:"EncodingError U+7700"});
r = r && ([...ms932Encoder.encode("省")].join(",") === "143,200"); // U+7701
assert.throws(() => {ms932Encoder.encode("\u7702")}, {name:"Error",message:"EncodingError U+7702"});
assert.throws(() => {ms932Encoder.encode("\u7703")}, {name:"Error",message:"EncodingError U+7703"});
r = r && ([...ms932Encoder.encode("眄")].join(",") === "225,190"); // U+7704
assert.throws(() => {ms932Encoder.encode("\u7705")}, {name:"Error",message:"EncodingError U+7705"});
assert.throws(() => {ms932Encoder.encode("\u7706")}, {name:"Error",message:"EncodingError U+7706"});
r = r && ([...ms932Encoder.encode("眇眈眉")].join(",") === "225,189,225,188,148,251"); // U+7707
assert.throws(() => {ms932Encoder.encode("\u770A")}, {name:"Error",message:"EncodingError U+770A"});
r = r && ([...ms932Encoder.encode("看県")].join(",") === "138,197,140,167"); // U+770B
assert.throws(() => {ms932Encoder.encode("\u770D")}, {name:"Error",message:"EncodingError U+770D"});
assert.throws(() => {ms932Encoder.encode("\u770E")}, {name:"Error",message:"EncodingError U+770E"});
assert.throws(() => {ms932Encoder.encode("\u770F")}, {name:"Error",message:"EncodingError U+770F"});
assert.throws(() => {ms932Encoder.encode("\u7710")}, {name:"Error",message:"EncodingError U+7710"});
assert.throws(() => {ms932Encoder.encode("\u7711")}, {name:"Error",message:"EncodingError U+7711"});
assert.throws(() => {ms932Encoder.encode("\u7712")}, {name:"Error",message:"EncodingError U+7712"});
assert.throws(() => {ms932Encoder.encode("\u7713")}, {name:"Error",message:"EncodingError U+7713"});
assert.throws(() => {ms932Encoder.encode("\u7714")}, {name:"Error",message:"EncodingError U+7714"});
assert.throws(() => {ms932Encoder.encode("\u7715")}, {name:"Error",message:"EncodingError U+7715"});
assert.throws(() => {ms932Encoder.encode("\u7716")}, {name:"Error",message:"EncodingError U+7716"});
assert.throws(() => {ms932Encoder.encode("\u7717")}, {name:"Error",message:"EncodingError U+7717"});
assert.throws(() => {ms932Encoder.encode("\u7718")}, {name:"Error",message:"EncodingError U+7718"});
assert.throws(() => {ms932Encoder.encode("\u7719")}, {name:"Error",message:"EncodingError U+7719"});
assert.throws(() => {ms932Encoder.encode("\u771A")}, {name:"Error",message:"EncodingError U+771A"});
r = r && ([...ms932Encoder.encode("眛")].join(",") === "225,196"); // U+771B
assert.throws(() => {ms932Encoder.encode("\u771C")}, {name:"Error",message:"EncodingError U+771C"});
assert.throws(() => {ms932Encoder.encode("\u771D")}, {name:"Error",message:"EncodingError U+771D"});
r = r && ([...ms932Encoder.encode("眞真眠")].join(",") === "225,193,144,94,150,176"); // U+771E
assert.throws(() => {ms932Encoder.encode("\u7721")}, {name:"Error",message:"EncodingError U+7721"});
assert.throws(() => {ms932Encoder.encode("\u7722")}, {name:"Error",message:"EncodingError U+7722"});
assert.throws(() => {ms932Encoder.encode("\u7723")}, {name:"Error",message:"EncodingError U+7723"});
r = r && ([...ms932Encoder.encode("眤眥眦")].join(",") === "225,192,225,194,225,195"); // U+7724
assert.throws(() => {ms932Encoder.encode("\u7727")}, {name:"Error",message:"EncodingError U+7727"});
assert.throws(() => {ms932Encoder.encode("\u7728")}, {name:"Error",message:"EncodingError U+7728"});
r = r && ([...ms932Encoder.encode("眩")].join(",") === "225,191"); // U+7729
assert.throws(() => {ms932Encoder.encode("\u772A")}, {name:"Error",message:"EncodingError U+772A"});
assert.throws(() => {ms932Encoder.encode("\u772B")}, {name:"Error",message:"EncodingError U+772B"});
assert.throws(() => {ms932Encoder.encode("\u772C")}, {name:"Error",message:"EncodingError U+772C"});
assert.throws(() => {ms932Encoder.encode("\u772D")}, {name:"Error",message:"EncodingError U+772D"});
assert.throws(() => {ms932Encoder.encode("\u772E")}, {name:"Error",message:"EncodingError U+772E"});
assert.throws(() => {ms932Encoder.encode("\u772F")}, {name:"Error",message:"EncodingError U+772F"});
assert.throws(() => {ms932Encoder.encode("\u7730")}, {name:"Error",message:"EncodingError U+7730"});
assert.throws(() => {ms932Encoder.encode("\u7731")}, {name:"Error",message:"EncodingError U+7731"});
assert.throws(() => {ms932Encoder.encode("\u7732")}, {name:"Error",message:"EncodingError U+7732"});
assert.throws(() => {ms932Encoder.encode("\u7733")}, {name:"Error",message:"EncodingError U+7733"});
assert.throws(() => {ms932Encoder.encode("\u7734")}, {name:"Error",message:"EncodingError U+7734"});
assert.throws(() => {ms932Encoder.encode("\u7735")}, {name:"Error",message:"EncodingError U+7735"});
assert.throws(() => {ms932Encoder.encode("\u7736")}, {name:"Error",message:"EncodingError U+7736"});
r = r && ([...ms932Encoder.encode("眷眸")].join(",") === "225,197,225,198"); // U+7737
assert.throws(() => {ms932Encoder.encode("\u7739")}, {name:"Error",message:"EncodingError U+7739"});
r = r && ([...ms932Encoder.encode("眺")].join(",") === "146,173"); // U+773A
assert.throws(() => {ms932Encoder.encode("\u773B")}, {name:"Error",message:"EncodingError U+773B"});
r = r && ([...ms932Encoder.encode("眼")].join(",") === "138,225"); // U+773C
assert.throws(() => {ms932Encoder.encode("\u773D")}, {name:"Error",message:"EncodingError U+773D"});
assert.throws(() => {ms932Encoder.encode("\u773E")}, {name:"Error",message:"EncodingError U+773E"});
assert.throws(() => {ms932Encoder.encode("\u773F")}, {name:"Error",message:"EncodingError U+773F"});
r = r && ([...ms932Encoder.encode("着")].join(",") === "146,133"); // U+7740
assert.throws(() => {ms932Encoder.encode("\u7741")}, {name:"Error",message:"EncodingError U+7741"});
assert.throws(() => {ms932Encoder.encode("\u7742")}, {name:"Error",message:"EncodingError U+7742"});
assert.throws(() => {ms932Encoder.encode("\u7743")}, {name:"Error",message:"EncodingError U+7743"});
assert.throws(() => {ms932Encoder.encode("\u7744")}, {name:"Error",message:"EncodingError U+7744"});
assert.throws(() => {ms932Encoder.encode("\u7745")}, {name:"Error",message:"EncodingError U+7745"});
r = r && ([...ms932Encoder.encode("睆睇")].join(",") === "251,118,225,199"); // U+7746
assert.throws(() => {ms932Encoder.encode("\u7748")}, {name:"Error",message:"EncodingError U+7748"});
assert.throws(() => {ms932Encoder.encode("\u7749")}, {name:"Error",message:"EncodingError U+7749"});
assert.throws(() => {ms932Encoder.encode("\u774A")}, {name:"Error",message:"EncodingError U+774A"});
assert.throws(() => {ms932Encoder.encode("\u774B")}, {name:"Error",message:"EncodingError U+774B"});
assert.throws(() => {ms932Encoder.encode("\u774C")}, {name:"Error",message:"EncodingError U+774C"});
assert.throws(() => {ms932Encoder.encode("\u774D")}, {name:"Error",message:"EncodingError U+774D"});
assert.throws(() => {ms932Encoder.encode("\u774E")}, {name:"Error",message:"EncodingError U+774E"});
assert.throws(() => {ms932Encoder.encode("\u774F")}, {name:"Error",message:"EncodingError U+774F"});
assert.throws(() => {ms932Encoder.encode("\u7750")}, {name:"Error",message:"EncodingError U+7750"});
assert.throws(() => {ms932Encoder.encode("\u7751")}, {name:"Error",message:"EncodingError U+7751"});
assert.throws(() => {ms932Encoder.encode("\u7752")}, {name:"Error",message:"EncodingError U+7752"});
assert.throws(() => {ms932Encoder.encode("\u7753")}, {name:"Error",message:"EncodingError U+7753"});
assert.throws(() => {ms932Encoder.encode("\u7754")}, {name:"Error",message:"EncodingError U+7754"});
assert.throws(() => {ms932Encoder.encode("\u7755")}, {name:"Error",message:"EncodingError U+7755"});
assert.throws(() => {ms932Encoder.encode("\u7756")}, {name:"Error",message:"EncodingError U+7756"});
assert.throws(() => {ms932Encoder.encode("\u7757")}, {name:"Error",message:"EncodingError U+7757"});
assert.throws(() => {ms932Encoder.encode("\u7758")}, {name:"Error",message:"EncodingError U+7758"});
assert.throws(() => {ms932Encoder.encode("\u7759")}, {name:"Error",message:"EncodingError U+7759"});
r = r && ([...ms932Encoder.encode("睚睛")].join(",") === "225,200,225,203"); // U+775A
assert.throws(() => {ms932Encoder.encode("\u775C")}, {name:"Error",message:"EncodingError U+775C"});
assert.throws(() => {ms932Encoder.encode("\u775D")}, {name:"Error",message:"EncodingError U+775D"});
assert.throws(() => {ms932Encoder.encode("\u775E")}, {name:"Error",message:"EncodingError U+775E"});
assert.throws(() => {ms932Encoder.encode("\u775F")}, {name:"Error",message:"EncodingError U+775F"});
assert.throws(() => {ms932Encoder.encode("\u7760")}, {name:"Error",message:"EncodingError U+7760"});
r = r && ([...ms932Encoder.encode("睡")].join(",") === "144,135"); // U+7761
assert.throws(() => {ms932Encoder.encode("\u7762")}, {name:"Error",message:"EncodingError U+7762"});
r = r && ([...ms932Encoder.encode("督")].join(",") === "147,194"); // U+7763
assert.throws(() => {ms932Encoder.encode("\u7764")}, {name:"Error",message:"EncodingError U+7764"});
r = r && ([...ms932Encoder.encode("睥睦")].join(",") === "225,204,150,114"); // U+7765
assert.throws(() => {ms932Encoder.encode("\u7767")}, {name:"Error",message:"EncodingError U+7767"});
r = r && ([...ms932Encoder.encode("睨")].join(",") === "225,201"); // U+7768
assert.throws(() => {ms932Encoder.encode("\u7769")}, {name:"Error",message:"EncodingError U+7769"});
assert.throws(() => {ms932Encoder.encode("\u776A")}, {name:"Error",message:"EncodingError U+776A"});
r = r && ([...ms932Encoder.encode("睫")].join(",") === "225,202"); // U+776B
assert.throws(() => {ms932Encoder.encode("\u776C")}, {name:"Error",message:"EncodingError U+776C"});
assert.throws(() => {ms932Encoder.encode("\u776D")}, {name:"Error",message:"EncodingError U+776D"});
assert.throws(() => {ms932Encoder.encode("\u776E")}, {name:"Error",message:"EncodingError U+776E"});
assert.throws(() => {ms932Encoder.encode("\u776F")}, {name:"Error",message:"EncodingError U+776F"});
assert.throws(() => {ms932Encoder.encode("\u7770")}, {name:"Error",message:"EncodingError U+7770"});
assert.throws(() => {ms932Encoder.encode("\u7771")}, {name:"Error",message:"EncodingError U+7771"});
assert.throws(() => {ms932Encoder.encode("\u7772")}, {name:"Error",message:"EncodingError U+7772"});
assert.throws(() => {ms932Encoder.encode("\u7773")}, {name:"Error",message:"EncodingError U+7773"});
assert.throws(() => {ms932Encoder.encode("\u7774")}, {name:"Error",message:"EncodingError U+7774"});
assert.throws(() => {ms932Encoder.encode("\u7775")}, {name:"Error",message:"EncodingError U+7775"});
assert.throws(() => {ms932Encoder.encode("\u7776")}, {name:"Error",message:"EncodingError U+7776"});
assert.throws(() => {ms932Encoder.encode("\u7777")}, {name:"Error",message:"EncodingError U+7777"});
assert.throws(() => {ms932Encoder.encode("\u7778")}, {name:"Error",message:"EncodingError U+7778"});
r = r && ([...ms932Encoder.encode("睹")].join(",") === "225,207"); // U+7779
assert.throws(() => {ms932Encoder.encode("\u777A")}, {name:"Error",message:"EncodingError U+777A"});
assert.throws(() => {ms932Encoder.encode("\u777B")}, {name:"Error",message:"EncodingError U+777B"});
assert.throws(() => {ms932Encoder.encode("\u777C")}, {name:"Error",message:"EncodingError U+777C"});
assert.throws(() => {ms932Encoder.encode("\u777D")}, {name:"Error",message:"EncodingError U+777D"});
r = r && ([...ms932Encoder.encode("睾睿")].join(",") === "225,206,225,205"); // U+777E
assert.throws(() => {ms932Encoder.encode("\u7780")}, {name:"Error",message:"EncodingError U+7780"});
assert.throws(() => {ms932Encoder.encode("\u7781")}, {name:"Error",message:"EncodingError U+7781"});
assert.throws(() => {ms932Encoder.encode("\u7782")}, {name:"Error",message:"EncodingError U+7782"});
assert.throws(() => {ms932Encoder.encode("\u7783")}, {name:"Error",message:"EncodingError U+7783"});
assert.throws(() => {ms932Encoder.encode("\u7784")}, {name:"Error",message:"EncodingError U+7784"});
assert.throws(() => {ms932Encoder.encode("\u7785")}, {name:"Error",message:"EncodingError U+7785"});
assert.throws(() => {ms932Encoder.encode("\u7786")}, {name:"Error",message:"EncodingError U+7786"});
assert.throws(() => {ms932Encoder.encode("\u7787")}, {name:"Error",message:"EncodingError U+7787"});
assert.throws(() => {ms932Encoder.encode("\u7788")}, {name:"Error",message:"EncodingError U+7788"});
assert.throws(() => {ms932Encoder.encode("\u7789")}, {name:"Error",message:"EncodingError U+7789"});
assert.throws(() => {ms932Encoder.encode("\u778A")}, {name:"Error",message:"EncodingError U+778A"});
r = r && ([...ms932Encoder.encode("瞋")].join(",") === "225,209"); // U+778B
assert.throws(() => {ms932Encoder.encode("\u778C")}, {name:"Error",message:"EncodingError U+778C"});
assert.throws(() => {ms932Encoder.encode("\u778D")}, {name:"Error",message:"EncodingError U+778D"});
r = r && ([...ms932Encoder.encode("瞎")].join(",") === "225,208"); // U+778E
assert.throws(() => {ms932Encoder.encode("\u778F")}, {name:"Error",message:"EncodingError U+778F"});
assert.throws(() => {ms932Encoder.encode("\u7790")}, {name:"Error",message:"EncodingError U+7790"});
r = r && ([...ms932Encoder.encode("瞑")].join(",") === "225,210"); // U+7791
assert.throws(() => {ms932Encoder.encode("\u7792")}, {name:"Error",message:"EncodingError U+7792"});
assert.throws(() => {ms932Encoder.encode("\u7793")}, {name:"Error",message:"EncodingError U+7793"});
assert.throws(() => {ms932Encoder.encode("\u7794")}, {name:"Error",message:"EncodingError U+7794"});
assert.throws(() => {ms932Encoder.encode("\u7795")}, {name:"Error",message:"EncodingError U+7795"});
assert.throws(() => {ms932Encoder.encode("\u7796")}, {name:"Error",message:"EncodingError U+7796"});
assert.throws(() => {ms932Encoder.encode("\u7797")}, {name:"Error",message:"EncodingError U+7797"});
assert.throws(() => {ms932Encoder.encode("\u7798")}, {name:"Error",message:"EncodingError U+7798"});
assert.throws(() => {ms932Encoder.encode("\u7799")}, {name:"Error",message:"EncodingError U+7799"});
assert.throws(() => {ms932Encoder.encode("\u779A")}, {name:"Error",message:"EncodingError U+779A"});
assert.throws(() => {ms932Encoder.encode("\u779B")}, {name:"Error",message:"EncodingError U+779B"});
assert.throws(() => {ms932Encoder.encode("\u779C")}, {name:"Error",message:"EncodingError U+779C"});
assert.throws(() => {ms932Encoder.encode("\u779D")}, {name:"Error",message:"EncodingError U+779D"});
r = r && ([...ms932Encoder.encode("瞞")].join(",") === "225,212"); // U+779E
assert.throws(() => {ms932Encoder.encode("\u779F")}, {name:"Error",message:"EncodingError U+779F"});
r = r && ([...ms932Encoder.encode("瞠")].join(",") === "225,211"); // U+77A0
assert.throws(() => {ms932Encoder.encode("\u77A1")}, {name:"Error",message:"EncodingError U+77A1"});
assert.throws(() => {ms932Encoder.encode("\u77A2")}, {name:"Error",message:"EncodingError U+77A2"});
assert.throws(() => {ms932Encoder.encode("\u77A3")}, {name:"Error",message:"EncodingError U+77A3"});
assert.throws(() => {ms932Encoder.encode("\u77A4")}, {name:"Error",message:"EncodingError U+77A4"});
r = r && ([...ms932Encoder.encode("瞥")].join(",") === "149,203"); // U+77A5
assert.throws(() => {ms932Encoder.encode("\u77A6")}, {name:"Error",message:"EncodingError U+77A6"});
assert.throws(() => {ms932Encoder.encode("\u77A7")}, {name:"Error",message:"EncodingError U+77A7"});
assert.throws(() => {ms932Encoder.encode("\u77A8")}, {name:"Error",message:"EncodingError U+77A8"});
assert.throws(() => {ms932Encoder.encode("\u77A9")}, {name:"Error",message:"EncodingError U+77A9"});
assert.throws(() => {ms932Encoder.encode("\u77AA")}, {name:"Error",message:"EncodingError U+77AA"});
assert.throws(() => {ms932Encoder.encode("\u77AB")}, {name:"Error",message:"EncodingError U+77AB"});
r = r && ([...ms932Encoder.encode("瞬瞭")].join(",") === "143,117,151,196"); // U+77AC
assert.throws(() => {ms932Encoder.encode("\u77AE")}, {name:"Error",message:"EncodingError U+77AE"});
assert.throws(() => {ms932Encoder.encode("\u77AF")}, {name:"Error",message:"EncodingError U+77AF"});
r = r && ([...ms932Encoder.encode("瞰")].join(",") === "225,213"); // U+77B0
assert.throws(() => {ms932Encoder.encode("\u77B1")}, {name:"Error",message:"EncodingError U+77B1"});
assert.throws(() => {ms932Encoder.encode("\u77B2")}, {name:"Error",message:"EncodingError U+77B2"});
r = r && ([...ms932Encoder.encode("瞳")].join(",") === "147,181"); // U+77B3
assert.throws(() => {ms932Encoder.encode("\u77B4")}, {name:"Error",message:"EncodingError U+77B4"});
assert.throws(() => {ms932Encoder.encode("\u77B5")}, {name:"Error",message:"EncodingError U+77B5"});
r = r && ([...ms932Encoder.encode("瞶")].join(",") === "225,214"); // U+77B6
assert.throws(() => {ms932Encoder.encode("\u77B7")}, {name:"Error",message:"EncodingError U+77B7"});
assert.throws(() => {ms932Encoder.encode("\u77B8")}, {name:"Error",message:"EncodingError U+77B8"});
r = r && ([...ms932Encoder.encode("瞹")].join(",") === "225,215"); // U+77B9
assert.throws(() => {ms932Encoder.encode("\u77BA")}, {name:"Error",message:"EncodingError U+77BA"});
r = r && ([...ms932Encoder.encode("瞻瞼瞽")].join(",") === "225,219,225,217,225,218"); // U+77BB
assert.throws(() => {ms932Encoder.encode("\u77BE")}, {name:"Error",message:"EncodingError U+77BE"});
r = r && ([...ms932Encoder.encode("瞿")].join(",") === "225,216"); // U+77BF
assert.throws(() => {ms932Encoder.encode("\u77C0")}, {name:"Error",message:"EncodingError U+77C0"});
assert.throws(() => {ms932Encoder.encode("\u77C1")}, {name:"Error",message:"EncodingError U+77C1"});
assert.throws(() => {ms932Encoder.encode("\u77C2")}, {name:"Error",message:"EncodingError U+77C2"});
assert.throws(() => {ms932Encoder.encode("\u77C3")}, {name:"Error",message:"EncodingError U+77C3"});
assert.throws(() => {ms932Encoder.encode("\u77C4")}, {name:"Error",message:"EncodingError U+77C4"});
assert.throws(() => {ms932Encoder.encode("\u77C5")}, {name:"Error",message:"EncodingError U+77C5"});
assert.throws(() => {ms932Encoder.encode("\u77C6")}, {name:"Error",message:"EncodingError U+77C6"});
r = r && ([...ms932Encoder.encode("矇")].join(",") === "225,220"); // U+77C7
assert.throws(() => {ms932Encoder.encode("\u77C8")}, {name:"Error",message:"EncodingError U+77C8"});
assert.throws(() => {ms932Encoder.encode("\u77C9")}, {name:"Error",message:"EncodingError U+77C9"});
assert.throws(() => {ms932Encoder.encode("\u77CA")}, {name:"Error",message:"EncodingError U+77CA"});
assert.throws(() => {ms932Encoder.encode("\u77CB")}, {name:"Error",message:"EncodingError U+77CB"});
assert.throws(() => {ms932Encoder.encode("\u77CC")}, {name:"Error",message:"EncodingError U+77CC"});
r = r && ([...ms932Encoder.encode("矍")].join(",") === "225,221"); // U+77CD
assert.throws(() => {ms932Encoder.encode("\u77CE")}, {name:"Error",message:"EncodingError U+77CE"});
assert.throws(() => {ms932Encoder.encode("\u77CF")}, {name:"Error",message:"EncodingError U+77CF"});
assert.throws(() => {ms932Encoder.encode("\u77D0")}, {name:"Error",message:"EncodingError U+77D0"});
assert.throws(() => {ms932Encoder.encode("\u77D1")}, {name:"Error",message:"EncodingError U+77D1"});
assert.throws(() => {ms932Encoder.encode("\u77D2")}, {name:"Error",message:"EncodingError U+77D2"});
assert.throws(() => {ms932Encoder.encode("\u77D3")}, {name:"Error",message:"EncodingError U+77D3"});
assert.throws(() => {ms932Encoder.encode("\u77D4")}, {name:"Error",message:"EncodingError U+77D4"});
assert.throws(() => {ms932Encoder.encode("\u77D5")}, {name:"Error",message:"EncodingError U+77D5"});
assert.throws(() => {ms932Encoder.encode("\u77D6")}, {name:"Error",message:"EncodingError U+77D6"});
r = r && ([...ms932Encoder.encode("矗")].join(",") === "225,222"); // U+77D7
assert.throws(() => {ms932Encoder.encode("\u77D8")}, {name:"Error",message:"EncodingError U+77D8"});
assert.throws(() => {ms932Encoder.encode("\u77D9")}, {name:"Error",message:"EncodingError U+77D9"});
r = r && ([...ms932Encoder.encode("矚矛矜")].join(",") === "225,223,150,181,225,224"); // U+77DA
assert.throws(() => {ms932Encoder.encode("\u77DD")}, {name:"Error",message:"EncodingError U+77DD"});
assert.throws(() => {ms932Encoder.encode("\u77DE")}, {name:"Error",message:"EncodingError U+77DE"});
assert.throws(() => {ms932Encoder.encode("\u77DF")}, {name:"Error",message:"EncodingError U+77DF"});
assert.throws(() => {ms932Encoder.encode("\u77E0")}, {name:"Error",message:"EncodingError U+77E0"});
assert.throws(() => {ms932Encoder.encode("\u77E1")}, {name:"Error",message:"EncodingError U+77E1"});
r = r && ([...ms932Encoder.encode("矢矣")].join(",") === "150,238,225,225"); // U+77E2
assert.throws(() => {ms932Encoder.encode("\u77E4")}, {name:"Error",message:"EncodingError U+77E4"});
r = r && ([...ms932Encoder.encode("知")].join(",") === "146,109"); // U+77E5
assert.throws(() => {ms932Encoder.encode("\u77E6")}, {name:"Error",message:"EncodingError U+77E6"});
r = r && ([...ms932Encoder.encode("矧")].join(",") === "148,138"); // U+77E7
assert.throws(() => {ms932Encoder.encode("\u77E8")}, {name:"Error",message:"EncodingError U+77E8"});
r = r && ([...ms932Encoder.encode("矩")].join(",") === "139,233"); // U+77E9
assert.throws(() => {ms932Encoder.encode("\u77EA")}, {name:"Error",message:"EncodingError U+77EA"});
assert.throws(() => {ms932Encoder.encode("\u77EB")}, {name:"Error",message:"EncodingError U+77EB"});
assert.throws(() => {ms932Encoder.encode("\u77EC")}, {name:"Error",message:"EncodingError U+77EC"});
r = r && ([...ms932Encoder.encode("短矮矯")].join(",") === "146,90,225,226,139,184"); // U+77ED
assert.throws(() => {ms932Encoder.encode("\u77F0")}, {name:"Error",message:"EncodingError U+77F0"});
assert.throws(() => {ms932Encoder.encode("\u77F1")}, {name:"Error",message:"EncodingError U+77F1"});
assert.throws(() => {ms932Encoder.encode("\u77F2")}, {name:"Error",message:"EncodingError U+77F2"});
r = r && ([...ms932Encoder.encode("石")].join(",") === "144,206"); // U+77F3
assert.throws(() => {ms932Encoder.encode("\u77F4")}, {name:"Error",message:"EncodingError U+77F4"});
assert.throws(() => {ms932Encoder.encode("\u77F5")}, {name:"Error",message:"EncodingError U+77F5"});
assert.throws(() => {ms932Encoder.encode("\u77F6")}, {name:"Error",message:"EncodingError U+77F6"});
assert.throws(() => {ms932Encoder.encode("\u77F7")}, {name:"Error",message:"EncodingError U+77F7"});
assert.throws(() => {ms932Encoder.encode("\u77F8")}, {name:"Error",message:"EncodingError U+77F8"});
assert.throws(() => {ms932Encoder.encode("\u77F9")}, {name:"Error",message:"EncodingError U+77F9"});
assert.throws(() => {ms932Encoder.encode("\u77FA")}, {name:"Error",message:"EncodingError U+77FA"});
assert.throws(() => {ms932Encoder.encode("\u77FB")}, {name:"Error",message:"EncodingError U+77FB"});
r = r && ([...ms932Encoder.encode("矼")].join(",") === "225,227"); // U+77FC
assert.throws(() => {ms932Encoder.encode("\u77FD")}, {name:"Error",message:"EncodingError U+77FD"});
assert.throws(() => {ms932Encoder.encode("\u77FE")}, {name:"Error",message:"EncodingError U+77FE"});
assert.throws(() => {ms932Encoder.encode("\u77FF")}, {name:"Error",message:"EncodingError U+77FF"});

assert.strictEqual(r, true);

  });

});
