import assert from "node:assert";
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 9", () => {

  it("encode(string) - U+8000-U+83FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
r = r && ([...ms932Encoder.encode("耀老")].join(",") === "151,115,152,86"); // U+8000
assert.throws(() => {ms932Encoder.encode("\u8002")}, {name:"Error",message:"EncodingError U+8002"});
r = r && ([...ms932Encoder.encode("考耄者耆")].join(",") === "141,108,227,204,142,210,227,203"); // U+8003
assert.throws(() => {ms932Encoder.encode("\u8007")}, {name:"Error",message:"EncodingError U+8007"});
assert.throws(() => {ms932Encoder.encode("\u8008")}, {name:"Error",message:"EncodingError U+8008"});
assert.throws(() => {ms932Encoder.encode("\u8009")}, {name:"Error",message:"EncodingError U+8009"});
assert.throws(() => {ms932Encoder.encode("\u800A")}, {name:"Error",message:"EncodingError U+800A"});
r = r && ([...ms932Encoder.encode("耋而")].join(",") === "227,205,142,167"); // U+800B
assert.throws(() => {ms932Encoder.encode("\u800D")}, {name:"Error",message:"EncodingError U+800D"});
assert.throws(() => {ms932Encoder.encode("\u800E")}, {name:"Error",message:"EncodingError U+800E"});
assert.throws(() => {ms932Encoder.encode("\u800F")}, {name:"Error",message:"EncodingError U+800F"});
r = r && ([...ms932Encoder.encode("耐")].join(",") === "145,207"); // U+8010
assert.throws(() => {ms932Encoder.encode("\u8011")}, {name:"Error",message:"EncodingError U+8011"});
r = r && ([...ms932Encoder.encode("耒")].join(",") === "227,206"); // U+8012
assert.throws(() => {ms932Encoder.encode("\u8013")}, {name:"Error",message:"EncodingError U+8013"});
assert.throws(() => {ms932Encoder.encode("\u8014")}, {name:"Error",message:"EncodingError U+8014"});
r = r && ([...ms932Encoder.encode("耕")].join(",") === "141,107"); // U+8015
assert.throws(() => {ms932Encoder.encode("\u8016")}, {name:"Error",message:"EncodingError U+8016"});
r = r && ([...ms932Encoder.encode("耗耘耙")].join(",") === "150,213,227,207,227,208"); // U+8017
assert.throws(() => {ms932Encoder.encode("\u801A")}, {name:"Error",message:"EncodingError U+801A"});
assert.throws(() => {ms932Encoder.encode("\u801B")}, {name:"Error",message:"EncodingError U+801B"});
r = r && ([...ms932Encoder.encode("耜")].join(",") === "227,209"); // U+801C
assert.throws(() => {ms932Encoder.encode("\u801D")}, {name:"Error",message:"EncodingError U+801D"});
assert.throws(() => {ms932Encoder.encode("\u801E")}, {name:"Error",message:"EncodingError U+801E"});
assert.throws(() => {ms932Encoder.encode("\u801F")}, {name:"Error",message:"EncodingError U+801F"});
assert.throws(() => {ms932Encoder.encode("\u8020")}, {name:"Error",message:"EncodingError U+8020"});
r = r && ([...ms932Encoder.encode("耡")].join(",") === "227,210"); // U+8021
assert.throws(() => {ms932Encoder.encode("\u8022")}, {name:"Error",message:"EncodingError U+8022"});
assert.throws(() => {ms932Encoder.encode("\u8023")}, {name:"Error",message:"EncodingError U+8023"});
assert.throws(() => {ms932Encoder.encode("\u8024")}, {name:"Error",message:"EncodingError U+8024"});
assert.throws(() => {ms932Encoder.encode("\u8025")}, {name:"Error",message:"EncodingError U+8025"});
assert.throws(() => {ms932Encoder.encode("\u8026")}, {name:"Error",message:"EncodingError U+8026"});
assert.throws(() => {ms932Encoder.encode("\u8027")}, {name:"Error",message:"EncodingError U+8027"});
r = r && ([...ms932Encoder.encode("耨")].join(",") === "227,211"); // U+8028
assert.throws(() => {ms932Encoder.encode("\u8029")}, {name:"Error",message:"EncodingError U+8029"});
assert.throws(() => {ms932Encoder.encode("\u802A")}, {name:"Error",message:"EncodingError U+802A"});
assert.throws(() => {ms932Encoder.encode("\u802B")}, {name:"Error",message:"EncodingError U+802B"});
assert.throws(() => {ms932Encoder.encode("\u802C")}, {name:"Error",message:"EncodingError U+802C"});
assert.throws(() => {ms932Encoder.encode("\u802D")}, {name:"Error",message:"EncodingError U+802D"});
assert.throws(() => {ms932Encoder.encode("\u802E")}, {name:"Error",message:"EncodingError U+802E"});
assert.throws(() => {ms932Encoder.encode("\u802F")}, {name:"Error",message:"EncodingError U+802F"});
assert.throws(() => {ms932Encoder.encode("\u8030")}, {name:"Error",message:"EncodingError U+8030"});
assert.throws(() => {ms932Encoder.encode("\u8031")}, {name:"Error",message:"EncodingError U+8031"});
assert.throws(() => {ms932Encoder.encode("\u8032")}, {name:"Error",message:"EncodingError U+8032"});
r = r && ([...ms932Encoder.encode("耳")].join(",") === "142,168"); // U+8033
assert.throws(() => {ms932Encoder.encode("\u8034")}, {name:"Error",message:"EncodingError U+8034"});
assert.throws(() => {ms932Encoder.encode("\u8035")}, {name:"Error",message:"EncodingError U+8035"});
r = r && ([...ms932Encoder.encode("耶")].join(",") === "150,235"); // U+8036
assert.throws(() => {ms932Encoder.encode("\u8037")}, {name:"Error",message:"EncodingError U+8037"});
assert.throws(() => {ms932Encoder.encode("\u8038")}, {name:"Error",message:"EncodingError U+8038"});
assert.throws(() => {ms932Encoder.encode("\u8039")}, {name:"Error",message:"EncodingError U+8039"});
assert.throws(() => {ms932Encoder.encode("\u803A")}, {name:"Error",message:"EncodingError U+803A"});
r = r && ([...ms932Encoder.encode("耻")].join(",") === "227,213"); // U+803B
assert.throws(() => {ms932Encoder.encode("\u803C")}, {name:"Error",message:"EncodingError U+803C"});
r = r && ([...ms932Encoder.encode("耽")].join(",") === "146,94"); // U+803D
assert.throws(() => {ms932Encoder.encode("\u803E")}, {name:"Error",message:"EncodingError U+803E"});
r = r && ([...ms932Encoder.encode("耿")].join(",") === "227,212"); // U+803F
assert.throws(() => {ms932Encoder.encode("\u8040")}, {name:"Error",message:"EncodingError U+8040"});
assert.throws(() => {ms932Encoder.encode("\u8041")}, {name:"Error",message:"EncodingError U+8041"});
assert.throws(() => {ms932Encoder.encode("\u8042")}, {name:"Error",message:"EncodingError U+8042"});
assert.throws(() => {ms932Encoder.encode("\u8043")}, {name:"Error",message:"EncodingError U+8043"});
assert.throws(() => {ms932Encoder.encode("\u8044")}, {name:"Error",message:"EncodingError U+8044"});
assert.throws(() => {ms932Encoder.encode("\u8045")}, {name:"Error",message:"EncodingError U+8045"});
r = r && ([...ms932Encoder.encode("聆")].join(",") === "227,215"); // U+8046
assert.throws(() => {ms932Encoder.encode("\u8047")}, {name:"Error",message:"EncodingError U+8047"});
assert.throws(() => {ms932Encoder.encode("\u8048")}, {name:"Error",message:"EncodingError U+8048"});
assert.throws(() => {ms932Encoder.encode("\u8049")}, {name:"Error",message:"EncodingError U+8049"});
r = r && ([...ms932Encoder.encode("聊")].join(",") === "227,214"); // U+804A
assert.throws(() => {ms932Encoder.encode("\u804B")}, {name:"Error",message:"EncodingError U+804B"});
assert.throws(() => {ms932Encoder.encode("\u804C")}, {name:"Error",message:"EncodingError U+804C"});
assert.throws(() => {ms932Encoder.encode("\u804D")}, {name:"Error",message:"EncodingError U+804D"});
assert.throws(() => {ms932Encoder.encode("\u804E")}, {name:"Error",message:"EncodingError U+804E"});
assert.throws(() => {ms932Encoder.encode("\u804F")}, {name:"Error",message:"EncodingError U+804F"});
assert.throws(() => {ms932Encoder.encode("\u8050")}, {name:"Error",message:"EncodingError U+8050"});
assert.throws(() => {ms932Encoder.encode("\u8051")}, {name:"Error",message:"EncodingError U+8051"});
r = r && ([...ms932Encoder.encode("聒")].join(",") === "227,216"); // U+8052
assert.throws(() => {ms932Encoder.encode("\u8053")}, {name:"Error",message:"EncodingError U+8053"});
assert.throws(() => {ms932Encoder.encode("\u8054")}, {name:"Error",message:"EncodingError U+8054"});
assert.throws(() => {ms932Encoder.encode("\u8055")}, {name:"Error",message:"EncodingError U+8055"});
r = r && ([...ms932Encoder.encode("聖")].join(",") === "144,185"); // U+8056
assert.throws(() => {ms932Encoder.encode("\u8057")}, {name:"Error",message:"EncodingError U+8057"});
r = r && ([...ms932Encoder.encode("聘")].join(",") === "227,217"); // U+8058
assert.throws(() => {ms932Encoder.encode("\u8059")}, {name:"Error",message:"EncodingError U+8059"});
r = r && ([...ms932Encoder.encode("聚")].join(",") === "227,218"); // U+805A
assert.throws(() => {ms932Encoder.encode("\u805B")}, {name:"Error",message:"EncodingError U+805B"});
assert.throws(() => {ms932Encoder.encode("\u805C")}, {name:"Error",message:"EncodingError U+805C"});
assert.throws(() => {ms932Encoder.encode("\u805D")}, {name:"Error",message:"EncodingError U+805D"});
r = r && ([...ms932Encoder.encode("聞聟")].join(",") === "149,183,227,219"); // U+805E
assert.throws(() => {ms932Encoder.encode("\u8060")}, {name:"Error",message:"EncodingError U+8060"});
r = r && ([...ms932Encoder.encode("聡聢")].join(",") === "145,143,227,220"); // U+8061
assert.throws(() => {ms932Encoder.encode("\u8063")}, {name:"Error",message:"EncodingError U+8063"});
assert.throws(() => {ms932Encoder.encode("\u8064")}, {name:"Error",message:"EncodingError U+8064"});
assert.throws(() => {ms932Encoder.encode("\u8065")}, {name:"Error",message:"EncodingError U+8065"});
assert.throws(() => {ms932Encoder.encode("\u8066")}, {name:"Error",message:"EncodingError U+8066"});
assert.throws(() => {ms932Encoder.encode("\u8067")}, {name:"Error",message:"EncodingError U+8067"});
r = r && ([...ms932Encoder.encode("聨")].join(",") === "227,221"); // U+8068
assert.throws(() => {ms932Encoder.encode("\u8069")}, {name:"Error",message:"EncodingError U+8069"});
assert.throws(() => {ms932Encoder.encode("\u806A")}, {name:"Error",message:"EncodingError U+806A"});
assert.throws(() => {ms932Encoder.encode("\u806B")}, {name:"Error",message:"EncodingError U+806B"});
assert.throws(() => {ms932Encoder.encode("\u806C")}, {name:"Error",message:"EncodingError U+806C"});
assert.throws(() => {ms932Encoder.encode("\u806D")}, {name:"Error",message:"EncodingError U+806D"});
assert.throws(() => {ms932Encoder.encode("\u806E")}, {name:"Error",message:"EncodingError U+806E"});
r = r && ([...ms932Encoder.encode("聯聰")].join(",") === "151,252,227,224"); // U+806F
assert.throws(() => {ms932Encoder.encode("\u8071")}, {name:"Error",message:"EncodingError U+8071"});
r = r && ([...ms932Encoder.encode("聲聳聴")].join(",") === "227,223,227,222,146,174"); // U+8072
assert.throws(() => {ms932Encoder.encode("\u8075")}, {name:"Error",message:"EncodingError U+8075"});
r = r && ([...ms932Encoder.encode("聶職")].join(",") === "227,225,144,69"); // U+8076
assert.throws(() => {ms932Encoder.encode("\u8078")}, {name:"Error",message:"EncodingError U+8078"});
r = r && ([...ms932Encoder.encode("聹")].join(",") === "227,226"); // U+8079
assert.throws(() => {ms932Encoder.encode("\u807A")}, {name:"Error",message:"EncodingError U+807A"});
assert.throws(() => {ms932Encoder.encode("\u807B")}, {name:"Error",message:"EncodingError U+807B"});
assert.throws(() => {ms932Encoder.encode("\u807C")}, {name:"Error",message:"EncodingError U+807C"});
r = r && ([...ms932Encoder.encode("聽聾聿")].join(",") === "227,227,152,87,227,228"); // U+807D
assert.throws(() => {ms932Encoder.encode("\u8080")}, {name:"Error",message:"EncodingError U+8080"});
assert.throws(() => {ms932Encoder.encode("\u8081")}, {name:"Error",message:"EncodingError U+8081"});
assert.throws(() => {ms932Encoder.encode("\u8082")}, {name:"Error",message:"EncodingError U+8082"});
assert.throws(() => {ms932Encoder.encode("\u8083")}, {name:"Error",message:"EncodingError U+8083"});
r = r && ([...ms932Encoder.encode("肄肅肆肇")].join(",") === "227,229,227,231,227,230,148,163"); // U+8084
assert.throws(() => {ms932Encoder.encode("\u8088")}, {name:"Error",message:"EncodingError U+8088"});
r = r && ([...ms932Encoder.encode("肉")].join(",") === "147,247"); // U+8089
assert.throws(() => {ms932Encoder.encode("\u808A")}, {name:"Error",message:"EncodingError U+808A"});
r = r && ([...ms932Encoder.encode("肋肌")].join(",") === "152,93,148,167"); // U+808B
assert.throws(() => {ms932Encoder.encode("\u808D")}, {name:"Error",message:"EncodingError U+808D"});
assert.throws(() => {ms932Encoder.encode("\u808E")}, {name:"Error",message:"EncodingError U+808E"});
assert.throws(() => {ms932Encoder.encode("\u808F")}, {name:"Error",message:"EncodingError U+808F"});
assert.throws(() => {ms932Encoder.encode("\u8090")}, {name:"Error",message:"EncodingError U+8090"});
assert.throws(() => {ms932Encoder.encode("\u8091")}, {name:"Error",message:"EncodingError U+8091"});
assert.throws(() => {ms932Encoder.encode("\u8092")}, {name:"Error",message:"EncodingError U+8092"});
r = r && ([...ms932Encoder.encode("肓")].join(",") === "227,233"); // U+8093
assert.throws(() => {ms932Encoder.encode("\u8094")}, {name:"Error",message:"EncodingError U+8094"});
assert.throws(() => {ms932Encoder.encode("\u8095")}, {name:"Error",message:"EncodingError U+8095"});
r = r && ([...ms932Encoder.encode("肖")].join(",") === "143,209"); // U+8096
assert.throws(() => {ms932Encoder.encode("\u8097")}, {name:"Error",message:"EncodingError U+8097"});
r = r && ([...ms932Encoder.encode("肘")].join(",") === "149,73"); // U+8098
assert.throws(() => {ms932Encoder.encode("\u8099")}, {name:"Error",message:"EncodingError U+8099"});
r = r && ([...ms932Encoder.encode("肚肛")].join(",") === "227,234,227,232"); // U+809A
assert.throws(() => {ms932Encoder.encode("\u809C")}, {name:"Error",message:"EncodingError U+809C"});
r = r && ([...ms932Encoder.encode("肝")].join(",") === "138,204"); // U+809D
assert.throws(() => {ms932Encoder.encode("\u809E")}, {name:"Error",message:"EncodingError U+809E"});
assert.throws(() => {ms932Encoder.encode("\u809F")}, {name:"Error",message:"EncodingError U+809F"});
assert.throws(() => {ms932Encoder.encode("\u80A0")}, {name:"Error",message:"EncodingError U+80A0"});
r = r && ([...ms932Encoder.encode("股肢")].join(",") === "140,210,142,136"); // U+80A1
assert.throws(() => {ms932Encoder.encode("\u80A3")}, {name:"Error",message:"EncodingError U+80A3"});
assert.throws(() => {ms932Encoder.encode("\u80A4")}, {name:"Error",message:"EncodingError U+80A4"});
r = r && ([...ms932Encoder.encode("肥")].join(",") === "148,236"); // U+80A5
assert.throws(() => {ms932Encoder.encode("\u80A6")}, {name:"Error",message:"EncodingError U+80A6"});
assert.throws(() => {ms932Encoder.encode("\u80A7")}, {name:"Error",message:"EncodingError U+80A7"});
assert.throws(() => {ms932Encoder.encode("\u80A8")}, {name:"Error",message:"EncodingError U+80A8"});
r = r && ([...ms932Encoder.encode("肩肪")].join(",") === "140,168,150,98"); // U+80A9
assert.throws(() => {ms932Encoder.encode("\u80AB")}, {name:"Error",message:"EncodingError U+80AB"});
r = r && ([...ms932Encoder.encode("肬肭")].join(",") === "227,237,227,235"); // U+80AC
assert.throws(() => {ms932Encoder.encode("\u80AE")}, {name:"Error",message:"EncodingError U+80AE"});
r = r && ([...ms932Encoder.encode("肯")].join(",") === "141,109"); // U+80AF
assert.throws(() => {ms932Encoder.encode("\u80B0")}, {name:"Error",message:"EncodingError U+80B0"});
r = r && ([...ms932Encoder.encode("肱育")].join(",") === "141,110,136,231"); // U+80B1
assert.throws(() => {ms932Encoder.encode("\u80B3")}, {name:"Error",message:"EncodingError U+80B3"});
r = r && ([...ms932Encoder.encode("肴")].join(",") === "141,230"); // U+80B4
assert.throws(() => {ms932Encoder.encode("\u80B5")}, {name:"Error",message:"EncodingError U+80B5"});
assert.throws(() => {ms932Encoder.encode("\u80B6")}, {name:"Error",message:"EncodingError U+80B6"});
assert.throws(() => {ms932Encoder.encode("\u80B7")}, {name:"Error",message:"EncodingError U+80B7"});
assert.throws(() => {ms932Encoder.encode("\u80B8")}, {name:"Error",message:"EncodingError U+80B8"});
assert.throws(() => {ms932Encoder.encode("\u80B9")}, {name:"Error",message:"EncodingError U+80B9"});
r = r && ([...ms932Encoder.encode("肺")].join(",") === "148,120"); // U+80BA
assert.throws(() => {ms932Encoder.encode("\u80BB")}, {name:"Error",message:"EncodingError U+80BB"});
assert.throws(() => {ms932Encoder.encode("\u80BC")}, {name:"Error",message:"EncodingError U+80BC"});
assert.throws(() => {ms932Encoder.encode("\u80BD")}, {name:"Error",message:"EncodingError U+80BD"});
assert.throws(() => {ms932Encoder.encode("\u80BE")}, {name:"Error",message:"EncodingError U+80BE"});
assert.throws(() => {ms932Encoder.encode("\u80BF")}, {name:"Error",message:"EncodingError U+80BF"});
assert.throws(() => {ms932Encoder.encode("\u80C0")}, {name:"Error",message:"EncodingError U+80C0"});
assert.throws(() => {ms932Encoder.encode("\u80C1")}, {name:"Error",message:"EncodingError U+80C1"});
assert.throws(() => {ms932Encoder.encode("\u80C2")}, {name:"Error",message:"EncodingError U+80C2"});
r = r && ([...ms932Encoder.encode("胃胄")].join(",") === "136,221,227,242"); // U+80C3
assert.throws(() => {ms932Encoder.encode("\u80C5")}, {name:"Error",message:"EncodingError U+80C5"});
r = r && ([...ms932Encoder.encode("胆")].join(",") === "146,95"); // U+80C6
assert.throws(() => {ms932Encoder.encode("\u80C7")}, {name:"Error",message:"EncodingError U+80C7"});
assert.throws(() => {ms932Encoder.encode("\u80C8")}, {name:"Error",message:"EncodingError U+80C8"});
assert.throws(() => {ms932Encoder.encode("\u80C9")}, {name:"Error",message:"EncodingError U+80C9"});
assert.throws(() => {ms932Encoder.encode("\u80CA")}, {name:"Error",message:"EncodingError U+80CA"});
assert.throws(() => {ms932Encoder.encode("\u80CB")}, {name:"Error",message:"EncodingError U+80CB"});
r = r && ([...ms932Encoder.encode("背")].join(",") === "148,119"); // U+80CC
assert.throws(() => {ms932Encoder.encode("\u80CD")}, {name:"Error",message:"EncodingError U+80CD"});
r = r && ([...ms932Encoder.encode("胎")].join(",") === "145,217"); // U+80CE
assert.throws(() => {ms932Encoder.encode("\u80CF")}, {name:"Error",message:"EncodingError U+80CF"});
assert.throws(() => {ms932Encoder.encode("\u80D0")}, {name:"Error",message:"EncodingError U+80D0"});
assert.throws(() => {ms932Encoder.encode("\u80D1")}, {name:"Error",message:"EncodingError U+80D1"});
assert.throws(() => {ms932Encoder.encode("\u80D2")}, {name:"Error",message:"EncodingError U+80D2"});
assert.throws(() => {ms932Encoder.encode("\u80D3")}, {name:"Error",message:"EncodingError U+80D3"});
assert.throws(() => {ms932Encoder.encode("\u80D4")}, {name:"Error",message:"EncodingError U+80D4"});
assert.throws(() => {ms932Encoder.encode("\u80D5")}, {name:"Error",message:"EncodingError U+80D5"});
r = r && ([...ms932Encoder.encode("胖")].join(",") === "227,244"); // U+80D6
assert.throws(() => {ms932Encoder.encode("\u80D7")}, {name:"Error",message:"EncodingError U+80D7"});
assert.throws(() => {ms932Encoder.encode("\u80D8")}, {name:"Error",message:"EncodingError U+80D8"});
r = r && ([...ms932Encoder.encode("胙胚胛")].join(",") === "227,240,227,243,227,238"); // U+80D9
assert.throws(() => {ms932Encoder.encode("\u80DC")}, {name:"Error",message:"EncodingError U+80DC"});
r = r && ([...ms932Encoder.encode("胝胞")].join(",") === "227,241,150,69"); // U+80DD
assert.throws(() => {ms932Encoder.encode("\u80DF")}, {name:"Error",message:"EncodingError U+80DF"});
assert.throws(() => {ms932Encoder.encode("\u80E0")}, {name:"Error",message:"EncodingError U+80E0"});
r = r && ([...ms932Encoder.encode("胡")].join(",") === "140,211"); // U+80E1
assert.throws(() => {ms932Encoder.encode("\u80E2")}, {name:"Error",message:"EncodingError U+80E2"});
assert.throws(() => {ms932Encoder.encode("\u80E3")}, {name:"Error",message:"EncodingError U+80E3"});
r = r && ([...ms932Encoder.encode("胤胥")].join(",") === "136,251,227,239"); // U+80E4
assert.throws(() => {ms932Encoder.encode("\u80E6")}, {name:"Error",message:"EncodingError U+80E6"});
assert.throws(() => {ms932Encoder.encode("\u80E7")}, {name:"Error",message:"EncodingError U+80E7"});
assert.throws(() => {ms932Encoder.encode("\u80E8")}, {name:"Error",message:"EncodingError U+80E8"});
assert.throws(() => {ms932Encoder.encode("\u80E9")}, {name:"Error",message:"EncodingError U+80E9"});
assert.throws(() => {ms932Encoder.encode("\u80EA")}, {name:"Error",message:"EncodingError U+80EA"});
assert.throws(() => {ms932Encoder.encode("\u80EB")}, {name:"Error",message:"EncodingError U+80EB"});
assert.throws(() => {ms932Encoder.encode("\u80EC")}, {name:"Error",message:"EncodingError U+80EC"});
assert.throws(() => {ms932Encoder.encode("\u80ED")}, {name:"Error",message:"EncodingError U+80ED"});
assert.throws(() => {ms932Encoder.encode("\u80EE")}, {name:"Error",message:"EncodingError U+80EE"});
r = r && ([...ms932Encoder.encode("胯")].join(",") === "227,246"); // U+80EF
assert.throws(() => {ms932Encoder.encode("\u80F0")}, {name:"Error",message:"EncodingError U+80F0"});
r = r && ([...ms932Encoder.encode("胱")].join(",") === "227,247"); // U+80F1
assert.throws(() => {ms932Encoder.encode("\u80F2")}, {name:"Error",message:"EncodingError U+80F2"});
assert.throws(() => {ms932Encoder.encode("\u80F3")}, {name:"Error",message:"EncodingError U+80F3"});
r = r && ([...ms932Encoder.encode("胴")].join(",") === "147,183"); // U+80F4
assert.throws(() => {ms932Encoder.encode("\u80F5")}, {name:"Error",message:"EncodingError U+80F5"});
assert.throws(() => {ms932Encoder.encode("\u80F6")}, {name:"Error",message:"EncodingError U+80F6"});
assert.throws(() => {ms932Encoder.encode("\u80F7")}, {name:"Error",message:"EncodingError U+80F7"});
r = r && ([...ms932Encoder.encode("胸")].join(",") === "139,185"); // U+80F8
assert.throws(() => {ms932Encoder.encode("\u80F9")}, {name:"Error",message:"EncodingError U+80F9"});
assert.throws(() => {ms932Encoder.encode("\u80FA")}, {name:"Error",message:"EncodingError U+80FA"});
assert.throws(() => {ms932Encoder.encode("\u80FB")}, {name:"Error",message:"EncodingError U+80FB"});
r = r && ([...ms932Encoder.encode("胼能")].join(",") === "228,69,148,92"); // U+80FC
assert.throws(() => {ms932Encoder.encode("\u80FE")}, {name:"Error",message:"EncodingError U+80FE"});
assert.throws(() => {ms932Encoder.encode("\u80FF")}, {name:"Error",message:"EncodingError U+80FF"});
assert.throws(() => {ms932Encoder.encode("\u8100")}, {name:"Error",message:"EncodingError U+8100"});
assert.throws(() => {ms932Encoder.encode("\u8101")}, {name:"Error",message:"EncodingError U+8101"});
r = r && ([...ms932Encoder.encode("脂")].join(",") === "142,137"); // U+8102
assert.throws(() => {ms932Encoder.encode("\u8103")}, {name:"Error",message:"EncodingError U+8103"});
assert.throws(() => {ms932Encoder.encode("\u8104")}, {name:"Error",message:"EncodingError U+8104"});
r = r && ([...ms932Encoder.encode("脅脆脇脈脉脊")].join(",") === "139,186,144,198,152,101,150,172,227,245,144,210"); // U+8105
assert.throws(() => {ms932Encoder.encode("\u810B")}, {name:"Error",message:"EncodingError U+810B"});
assert.throws(() => {ms932Encoder.encode("\u810C")}, {name:"Error",message:"EncodingError U+810C"});
assert.throws(() => {ms932Encoder.encode("\u810D")}, {name:"Error",message:"EncodingError U+810D"});
assert.throws(() => {ms932Encoder.encode("\u810E")}, {name:"Error",message:"EncodingError U+810E"});
assert.throws(() => {ms932Encoder.encode("\u810F")}, {name:"Error",message:"EncodingError U+810F"});
assert.throws(() => {ms932Encoder.encode("\u8110")}, {name:"Error",message:"EncodingError U+8110"});
assert.throws(() => {ms932Encoder.encode("\u8111")}, {name:"Error",message:"EncodingError U+8111"});
assert.throws(() => {ms932Encoder.encode("\u8112")}, {name:"Error",message:"EncodingError U+8112"});
assert.throws(() => {ms932Encoder.encode("\u8113")}, {name:"Error",message:"EncodingError U+8113"});
assert.throws(() => {ms932Encoder.encode("\u8114")}, {name:"Error",message:"EncodingError U+8114"});
assert.throws(() => {ms932Encoder.encode("\u8115")}, {name:"Error",message:"EncodingError U+8115"});
assert.throws(() => {ms932Encoder.encode("\u8116")}, {name:"Error",message:"EncodingError U+8116"});
assert.throws(() => {ms932Encoder.encode("\u8117")}, {name:"Error",message:"EncodingError U+8117"});
assert.throws(() => {ms932Encoder.encode("\u8118")}, {name:"Error",message:"EncodingError U+8118"});
assert.throws(() => {ms932Encoder.encode("\u8119")}, {name:"Error",message:"EncodingError U+8119"});
r = r && ([...ms932Encoder.encode("脚脛")].join(",") === "139,114,227,248"); // U+811A
assert.throws(() => {ms932Encoder.encode("\u811C")}, {name:"Error",message:"EncodingError U+811C"});
assert.throws(() => {ms932Encoder.encode("\u811D")}, {name:"Error",message:"EncodingError U+811D"});
assert.throws(() => {ms932Encoder.encode("\u811E")}, {name:"Error",message:"EncodingError U+811E"});
assert.throws(() => {ms932Encoder.encode("\u811F")}, {name:"Error",message:"EncodingError U+811F"});
assert.throws(() => {ms932Encoder.encode("\u8120")}, {name:"Error",message:"EncodingError U+8120"});
assert.throws(() => {ms932Encoder.encode("\u8121")}, {name:"Error",message:"EncodingError U+8121"});
assert.throws(() => {ms932Encoder.encode("\u8122")}, {name:"Error",message:"EncodingError U+8122"});
r = r && ([...ms932Encoder.encode("脣")].join(",") === "227,250"); // U+8123
assert.throws(() => {ms932Encoder.encode("\u8124")}, {name:"Error",message:"EncodingError U+8124"});
assert.throws(() => {ms932Encoder.encode("\u8125")}, {name:"Error",message:"EncodingError U+8125"});
assert.throws(() => {ms932Encoder.encode("\u8126")}, {name:"Error",message:"EncodingError U+8126"});
assert.throws(() => {ms932Encoder.encode("\u8127")}, {name:"Error",message:"EncodingError U+8127"});
assert.throws(() => {ms932Encoder.encode("\u8128")}, {name:"Error",message:"EncodingError U+8128"});
r = r && ([...ms932Encoder.encode("脩")].join(",") === "227,249"); // U+8129
assert.throws(() => {ms932Encoder.encode("\u812A")}, {name:"Error",message:"EncodingError U+812A"});
assert.throws(() => {ms932Encoder.encode("\u812B")}, {name:"Error",message:"EncodingError U+812B"});
assert.throws(() => {ms932Encoder.encode("\u812C")}, {name:"Error",message:"EncodingError U+812C"});
assert.throws(() => {ms932Encoder.encode("\u812D")}, {name:"Error",message:"EncodingError U+812D"});
assert.throws(() => {ms932Encoder.encode("\u812E")}, {name:"Error",message:"EncodingError U+812E"});
r = r && ([...ms932Encoder.encode("脯")].join(",") === "227,251"); // U+812F
assert.throws(() => {ms932Encoder.encode("\u8130")}, {name:"Error",message:"EncodingError U+8130"});
r = r && ([...ms932Encoder.encode("脱")].join(",") === "146,69"); // U+8131
assert.throws(() => {ms932Encoder.encode("\u8132")}, {name:"Error",message:"EncodingError U+8132"});
r = r && ([...ms932Encoder.encode("脳")].join(",") === "148,93"); // U+8133
assert.throws(() => {ms932Encoder.encode("\u8134")}, {name:"Error",message:"EncodingError U+8134"});
assert.throws(() => {ms932Encoder.encode("\u8135")}, {name:"Error",message:"EncodingError U+8135"});
assert.throws(() => {ms932Encoder.encode("\u8136")}, {name:"Error",message:"EncodingError U+8136"});
assert.throws(() => {ms932Encoder.encode("\u8137")}, {name:"Error",message:"EncodingError U+8137"});
assert.throws(() => {ms932Encoder.encode("\u8138")}, {name:"Error",message:"EncodingError U+8138"});
r = r && ([...ms932Encoder.encode("脹")].join(",") === "146,175"); // U+8139
assert.throws(() => {ms932Encoder.encode("\u813A")}, {name:"Error",message:"EncodingError U+813A"});
assert.throws(() => {ms932Encoder.encode("\u813B")}, {name:"Error",message:"EncodingError U+813B"});
assert.throws(() => {ms932Encoder.encode("\u813C")}, {name:"Error",message:"EncodingError U+813C"});
assert.throws(() => {ms932Encoder.encode("\u813D")}, {name:"Error",message:"EncodingError U+813D"});
r = r && ([...ms932Encoder.encode("脾")].join(",") === "228,66"); // U+813E
assert.throws(() => {ms932Encoder.encode("\u813F")}, {name:"Error",message:"EncodingError U+813F"});
assert.throws(() => {ms932Encoder.encode("\u8140")}, {name:"Error",message:"EncodingError U+8140"});
assert.throws(() => {ms932Encoder.encode("\u8141")}, {name:"Error",message:"EncodingError U+8141"});
assert.throws(() => {ms932Encoder.encode("\u8142")}, {name:"Error",message:"EncodingError U+8142"});
assert.throws(() => {ms932Encoder.encode("\u8143")}, {name:"Error",message:"EncodingError U+8143"});
assert.throws(() => {ms932Encoder.encode("\u8144")}, {name:"Error",message:"EncodingError U+8144"});
assert.throws(() => {ms932Encoder.encode("\u8145")}, {name:"Error",message:"EncodingError U+8145"});
r = r && ([...ms932Encoder.encode("腆")].join(",") === "228,65"); // U+8146
assert.throws(() => {ms932Encoder.encode("\u8147")}, {name:"Error",message:"EncodingError U+8147"});
assert.throws(() => {ms932Encoder.encode("\u8148")}, {name:"Error",message:"EncodingError U+8148"});
assert.throws(() => {ms932Encoder.encode("\u8149")}, {name:"Error",message:"EncodingError U+8149"});
assert.throws(() => {ms932Encoder.encode("\u814A")}, {name:"Error",message:"EncodingError U+814A"});
r = r && ([...ms932Encoder.encode("腋")].join(",") === "227,252"); // U+814B
assert.throws(() => {ms932Encoder.encode("\u814C")}, {name:"Error",message:"EncodingError U+814C"});
assert.throws(() => {ms932Encoder.encode("\u814D")}, {name:"Error",message:"EncodingError U+814D"});
r = r && ([...ms932Encoder.encode("腎")].join(",") === "144,116"); // U+814E
assert.throws(() => {ms932Encoder.encode("\u814F")}, {name:"Error",message:"EncodingError U+814F"});
r = r && ([...ms932Encoder.encode("腐腑")].join(",") === "149,133,228,68"); // U+8150
assert.throws(() => {ms932Encoder.encode("\u8152")}, {name:"Error",message:"EncodingError U+8152"});
r = r && ([...ms932Encoder.encode("腓腔腕")].join(",") === "228,67,141,111,152,114"); // U+8153
assert.throws(() => {ms932Encoder.encode("\u8156")}, {name:"Error",message:"EncodingError U+8156"});
assert.throws(() => {ms932Encoder.encode("\u8157")}, {name:"Error",message:"EncodingError U+8157"});
assert.throws(() => {ms932Encoder.encode("\u8158")}, {name:"Error",message:"EncodingError U+8158"});
assert.throws(() => {ms932Encoder.encode("\u8159")}, {name:"Error",message:"EncodingError U+8159"});
assert.throws(() => {ms932Encoder.encode("\u815A")}, {name:"Error",message:"EncodingError U+815A"});
assert.throws(() => {ms932Encoder.encode("\u815B")}, {name:"Error",message:"EncodingError U+815B"});
assert.throws(() => {ms932Encoder.encode("\u815C")}, {name:"Error",message:"EncodingError U+815C"});
assert.throws(() => {ms932Encoder.encode("\u815D")}, {name:"Error",message:"EncodingError U+815D"});
assert.throws(() => {ms932Encoder.encode("\u815E")}, {name:"Error",message:"EncodingError U+815E"});
r = r && ([...ms932Encoder.encode("腟")].join(",") === "228,84"); // U+815F
assert.throws(() => {ms932Encoder.encode("\u8160")}, {name:"Error",message:"EncodingError U+8160"});
assert.throws(() => {ms932Encoder.encode("\u8161")}, {name:"Error",message:"EncodingError U+8161"});
assert.throws(() => {ms932Encoder.encode("\u8162")}, {name:"Error",message:"EncodingError U+8162"});
assert.throws(() => {ms932Encoder.encode("\u8163")}, {name:"Error",message:"EncodingError U+8163"});
assert.throws(() => {ms932Encoder.encode("\u8164")}, {name:"Error",message:"EncodingError U+8164"});
r = r && ([...ms932Encoder.encode("腥腦")].join(",") === "228,72,228,73"); // U+8165
assert.throws(() => {ms932Encoder.encode("\u8167")}, {name:"Error",message:"EncodingError U+8167"});
assert.throws(() => {ms932Encoder.encode("\u8168")}, {name:"Error",message:"EncodingError U+8168"});
assert.throws(() => {ms932Encoder.encode("\u8169")}, {name:"Error",message:"EncodingError U+8169"});
assert.throws(() => {ms932Encoder.encode("\u816A")}, {name:"Error",message:"EncodingError U+816A"});
r = r && ([...ms932Encoder.encode("腫")].join(",") === "142,238"); // U+816B
assert.throws(() => {ms932Encoder.encode("\u816C")}, {name:"Error",message:"EncodingError U+816C"});
assert.throws(() => {ms932Encoder.encode("\u816D")}, {name:"Error",message:"EncodingError U+816D"});
r = r && ([...ms932Encoder.encode("腮")].join(",") === "228,71"); // U+816E
assert.throws(() => {ms932Encoder.encode("\u816F")}, {name:"Error",message:"EncodingError U+816F"});
r = r && ([...ms932Encoder.encode("腰腱")].join(",") === "141,152,228,70"); // U+8170
assert.throws(() => {ms932Encoder.encode("\u8172")}, {name:"Error",message:"EncodingError U+8172"});
assert.throws(() => {ms932Encoder.encode("\u8173")}, {name:"Error",message:"EncodingError U+8173"});
r = r && ([...ms932Encoder.encode("腴")].join(",") === "228,74"); // U+8174
assert.throws(() => {ms932Encoder.encode("\u8175")}, {name:"Error",message:"EncodingError U+8175"});
assert.throws(() => {ms932Encoder.encode("\u8176")}, {name:"Error",message:"EncodingError U+8176"});
assert.throws(() => {ms932Encoder.encode("\u8177")}, {name:"Error",message:"EncodingError U+8177"});
r = r && ([...ms932Encoder.encode("腸腹腺")].join(",") === "146,176,149,160,145,66"); // U+8178
assert.throws(() => {ms932Encoder.encode("\u817B")}, {name:"Error",message:"EncodingError U+817B"});
assert.throws(() => {ms932Encoder.encode("\u817C")}, {name:"Error",message:"EncodingError U+817C"});
assert.throws(() => {ms932Encoder.encode("\u817D")}, {name:"Error",message:"EncodingError U+817D"});
assert.throws(() => {ms932Encoder.encode("\u817E")}, {name:"Error",message:"EncodingError U+817E"});
r = r && ([...ms932Encoder.encode("腿膀")].join(",") === "145,218,228,78"); // U+817F
assert.throws(() => {ms932Encoder.encode("\u8181")}, {name:"Error",message:"EncodingError U+8181"});
r = r && ([...ms932Encoder.encode("膂膃")].join(",") === "228,79,228,75"); // U+8182
assert.throws(() => {ms932Encoder.encode("\u8184")}, {name:"Error",message:"EncodingError U+8184"});
assert.throws(() => {ms932Encoder.encode("\u8185")}, {name:"Error",message:"EncodingError U+8185"});
assert.throws(() => {ms932Encoder.encode("\u8186")}, {name:"Error",message:"EncodingError U+8186"});
assert.throws(() => {ms932Encoder.encode("\u8187")}, {name:"Error",message:"EncodingError U+8187"});
r = r && ([...ms932Encoder.encode("膈")].join(",") === "228,76"); // U+8188
assert.throws(() => {ms932Encoder.encode("\u8189")}, {name:"Error",message:"EncodingError U+8189"});
r = r && ([...ms932Encoder.encode("膊")].join(",") === "228,77"); // U+818A
assert.throws(() => {ms932Encoder.encode("\u818B")}, {name:"Error",message:"EncodingError U+818B"});
assert.throws(() => {ms932Encoder.encode("\u818C")}, {name:"Error",message:"EncodingError U+818C"});
assert.throws(() => {ms932Encoder.encode("\u818D")}, {name:"Error",message:"EncodingError U+818D"});
assert.throws(() => {ms932Encoder.encode("\u818E")}, {name:"Error",message:"EncodingError U+818E"});
r = r && ([...ms932Encoder.encode("膏")].join(",") === "141,112"); // U+818F
assert.throws(() => {ms932Encoder.encode("\u8190")}, {name:"Error",message:"EncodingError U+8190"});
assert.throws(() => {ms932Encoder.encode("\u8191")}, {name:"Error",message:"EncodingError U+8191"});
assert.throws(() => {ms932Encoder.encode("\u8192")}, {name:"Error",message:"EncodingError U+8192"});
r = r && ([...ms932Encoder.encode("膓")].join(",") === "228,85"); // U+8193
assert.throws(() => {ms932Encoder.encode("\u8194")}, {name:"Error",message:"EncodingError U+8194"});
r = r && ([...ms932Encoder.encode("膕")].join(",") === "228,81"); // U+8195
assert.throws(() => {ms932Encoder.encode("\u8196")}, {name:"Error",message:"EncodingError U+8196"});
assert.throws(() => {ms932Encoder.encode("\u8197")}, {name:"Error",message:"EncodingError U+8197"});
assert.throws(() => {ms932Encoder.encode("\u8198")}, {name:"Error",message:"EncodingError U+8198"});
assert.throws(() => {ms932Encoder.encode("\u8199")}, {name:"Error",message:"EncodingError U+8199"});
r = r && ([...ms932Encoder.encode("膚")].join(",") === "149,134"); // U+819A
assert.throws(() => {ms932Encoder.encode("\u819B")}, {name:"Error",message:"EncodingError U+819B"});
r = r && ([...ms932Encoder.encode("膜膝")].join(",") === "150,140,149,71"); // U+819C
assert.throws(() => {ms932Encoder.encode("\u819E")}, {name:"Error",message:"EncodingError U+819E"});
assert.throws(() => {ms932Encoder.encode("\u819F")}, {name:"Error",message:"EncodingError U+819F"});
r = r && ([...ms932Encoder.encode("膠")].join(",") === "228,80"); // U+81A0
assert.throws(() => {ms932Encoder.encode("\u81A1")}, {name:"Error",message:"EncodingError U+81A1"});
assert.throws(() => {ms932Encoder.encode("\u81A2")}, {name:"Error",message:"EncodingError U+81A2"});
r = r && ([...ms932Encoder.encode("膣膤")].join(",") === "228,83,228,82"); // U+81A3
assert.throws(() => {ms932Encoder.encode("\u81A5")}, {name:"Error",message:"EncodingError U+81A5"});
assert.throws(() => {ms932Encoder.encode("\u81A6")}, {name:"Error",message:"EncodingError U+81A6"});
assert.throws(() => {ms932Encoder.encode("\u81A7")}, {name:"Error",message:"EncodingError U+81A7"});
r = r && ([...ms932Encoder.encode("膨膩")].join(",") === "150,99,228,86"); // U+81A8
assert.throws(() => {ms932Encoder.encode("\u81AA")}, {name:"Error",message:"EncodingError U+81AA"});
assert.throws(() => {ms932Encoder.encode("\u81AB")}, {name:"Error",message:"EncodingError U+81AB"});
assert.throws(() => {ms932Encoder.encode("\u81AC")}, {name:"Error",message:"EncodingError U+81AC"});
assert.throws(() => {ms932Encoder.encode("\u81AD")}, {name:"Error",message:"EncodingError U+81AD"});
assert.throws(() => {ms932Encoder.encode("\u81AE")}, {name:"Error",message:"EncodingError U+81AE"});
assert.throws(() => {ms932Encoder.encode("\u81AF")}, {name:"Error",message:"EncodingError U+81AF"});
r = r && ([...ms932Encoder.encode("膰")].join(",") === "228,87"); // U+81B0
assert.throws(() => {ms932Encoder.encode("\u81B1")}, {name:"Error",message:"EncodingError U+81B1"});
assert.throws(() => {ms932Encoder.encode("\u81B2")}, {name:"Error",message:"EncodingError U+81B2"});
r = r && ([...ms932Encoder.encode("膳")].join(",") === "145,86"); // U+81B3
assert.throws(() => {ms932Encoder.encode("\u81B4")}, {name:"Error",message:"EncodingError U+81B4"});
r = r && ([...ms932Encoder.encode("膵")].join(",") === "228,88"); // U+81B5
assert.throws(() => {ms932Encoder.encode("\u81B6")}, {name:"Error",message:"EncodingError U+81B6"});
assert.throws(() => {ms932Encoder.encode("\u81B7")}, {name:"Error",message:"EncodingError U+81B7"});
r = r && ([...ms932Encoder.encode("膸")].join(",") === "228,90"); // U+81B8
assert.throws(() => {ms932Encoder.encode("\u81B9")}, {name:"Error",message:"EncodingError U+81B9"});
r = r && ([...ms932Encoder.encode("膺")].join(",") === "228,94"); // U+81BA
assert.throws(() => {ms932Encoder.encode("\u81BB")}, {name:"Error",message:"EncodingError U+81BB"});
assert.throws(() => {ms932Encoder.encode("\u81BC")}, {name:"Error",message:"EncodingError U+81BC"});
r = r && ([...ms932Encoder.encode("膽膾膿臀")].join(",") === "228,91,228,89,148,94,228,92"); // U+81BD
assert.throws(() => {ms932Encoder.encode("\u81C1")}, {name:"Error",message:"EncodingError U+81C1"});
r = r && ([...ms932Encoder.encode("臂")].join(",") === "228,93"); // U+81C2
assert.throws(() => {ms932Encoder.encode("\u81C3")}, {name:"Error",message:"EncodingError U+81C3"});
assert.throws(() => {ms932Encoder.encode("\u81C4")}, {name:"Error",message:"EncodingError U+81C4"});
assert.throws(() => {ms932Encoder.encode("\u81C5")}, {name:"Error",message:"EncodingError U+81C5"});
r = r && ([...ms932Encoder.encode("臆")].join(",") === "137,176"); // U+81C6
assert.throws(() => {ms932Encoder.encode("\u81C7")}, {name:"Error",message:"EncodingError U+81C7"});
r = r && ([...ms932Encoder.encode("臈臉")].join(",") === "228,100,228,95"); // U+81C8
assert.throws(() => {ms932Encoder.encode("\u81CA")}, {name:"Error",message:"EncodingError U+81CA"});
assert.throws(() => {ms932Encoder.encode("\u81CB")}, {name:"Error",message:"EncodingError U+81CB"});
assert.throws(() => {ms932Encoder.encode("\u81CC")}, {name:"Error",message:"EncodingError U+81CC"});
r = r && ([...ms932Encoder.encode("臍")].join(",") === "228,96"); // U+81CD
assert.throws(() => {ms932Encoder.encode("\u81CE")}, {name:"Error",message:"EncodingError U+81CE"});
assert.throws(() => {ms932Encoder.encode("\u81CF")}, {name:"Error",message:"EncodingError U+81CF"});
assert.throws(() => {ms932Encoder.encode("\u81D0")}, {name:"Error",message:"EncodingError U+81D0"});
r = r && ([...ms932Encoder.encode("臑")].join(",") === "228,97"); // U+81D1
assert.throws(() => {ms932Encoder.encode("\u81D2")}, {name:"Error",message:"EncodingError U+81D2"});
r = r && ([...ms932Encoder.encode("臓")].join(",") === "145,159"); // U+81D3
assert.throws(() => {ms932Encoder.encode("\u81D4")}, {name:"Error",message:"EncodingError U+81D4"});
assert.throws(() => {ms932Encoder.encode("\u81D5")}, {name:"Error",message:"EncodingError U+81D5"});
assert.throws(() => {ms932Encoder.encode("\u81D6")}, {name:"Error",message:"EncodingError U+81D6"});
assert.throws(() => {ms932Encoder.encode("\u81D7")}, {name:"Error",message:"EncodingError U+81D7"});
r = r && ([...ms932Encoder.encode("臘臙臚")].join(",") === "228,99,228,98,228,101"); // U+81D8
assert.throws(() => {ms932Encoder.encode("\u81DB")}, {name:"Error",message:"EncodingError U+81DB"});
assert.throws(() => {ms932Encoder.encode("\u81DC")}, {name:"Error",message:"EncodingError U+81DC"});
assert.throws(() => {ms932Encoder.encode("\u81DD")}, {name:"Error",message:"EncodingError U+81DD"});
assert.throws(() => {ms932Encoder.encode("\u81DE")}, {name:"Error",message:"EncodingError U+81DE"});
r = r && ([...ms932Encoder.encode("臟臠")].join(",") === "228,102,228,103"); // U+81DF
assert.throws(() => {ms932Encoder.encode("\u81E1")}, {name:"Error",message:"EncodingError U+81E1"});
assert.throws(() => {ms932Encoder.encode("\u81E2")}, {name:"Error",message:"EncodingError U+81E2"});
r = r && ([...ms932Encoder.encode("臣")].join(",") === "144,98"); // U+81E3
assert.throws(() => {ms932Encoder.encode("\u81E4")}, {name:"Error",message:"EncodingError U+81E4"});
r = r && ([...ms932Encoder.encode("臥")].join(",") === "137,231"); // U+81E5
assert.throws(() => {ms932Encoder.encode("\u81E6")}, {name:"Error",message:"EncodingError U+81E6"});
r = r && ([...ms932Encoder.encode("臧臨")].join(",") === "228,104,151,213"); // U+81E7
assert.throws(() => {ms932Encoder.encode("\u81E9")}, {name:"Error",message:"EncodingError U+81E9"});
r = r && ([...ms932Encoder.encode("自")].join(",") === "142,169"); // U+81EA
assert.throws(() => {ms932Encoder.encode("\u81EB")}, {name:"Error",message:"EncodingError U+81EB"});
assert.throws(() => {ms932Encoder.encode("\u81EC")}, {name:"Error",message:"EncodingError U+81EC"});
r = r && ([...ms932Encoder.encode("臭")].join(",") === "143,76"); // U+81ED
assert.throws(() => {ms932Encoder.encode("\u81EE")}, {name:"Error",message:"EncodingError U+81EE"});
assert.throws(() => {ms932Encoder.encode("\u81EF")}, {name:"Error",message:"EncodingError U+81EF"});
assert.throws(() => {ms932Encoder.encode("\u81F0")}, {name:"Error",message:"EncodingError U+81F0"});
assert.throws(() => {ms932Encoder.encode("\u81F1")}, {name:"Error",message:"EncodingError U+81F1"});
assert.throws(() => {ms932Encoder.encode("\u81F2")}, {name:"Error",message:"EncodingError U+81F2"});
r = r && ([...ms932Encoder.encode("至致")].join(",") === "142,138,146,118"); // U+81F3
assert.throws(() => {ms932Encoder.encode("\u81F5")}, {name:"Error",message:"EncodingError U+81F5"});
assert.throws(() => {ms932Encoder.encode("\u81F6")}, {name:"Error",message:"EncodingError U+81F6"});
assert.throws(() => {ms932Encoder.encode("\u81F7")}, {name:"Error",message:"EncodingError U+81F7"});
assert.throws(() => {ms932Encoder.encode("\u81F8")}, {name:"Error",message:"EncodingError U+81F8"});
assert.throws(() => {ms932Encoder.encode("\u81F9")}, {name:"Error",message:"EncodingError U+81F9"});
r = r && ([...ms932Encoder.encode("臺臻臼")].join(",") === "228,105,228,106,137,80"); // U+81FA
assert.throws(() => {ms932Encoder.encode("\u81FD")}, {name:"Error",message:"EncodingError U+81FD"});
r = r && ([...ms932Encoder.encode("臾")].join(",") === "228,107"); // U+81FE
assert.throws(() => {ms932Encoder.encode("\u81FF")}, {name:"Error",message:"EncodingError U+81FF"});
assert.throws(() => {ms932Encoder.encode("\u8200")}, {name:"Error",message:"EncodingError U+8200"});
r = r && ([...ms932Encoder.encode("舁舂")].join(",") === "228,108,228,109"); // U+8201
assert.throws(() => {ms932Encoder.encode("\u8203")}, {name:"Error",message:"EncodingError U+8203"});
assert.throws(() => {ms932Encoder.encode("\u8204")}, {name:"Error",message:"EncodingError U+8204"});
r = r && ([...ms932Encoder.encode("舅")].join(",") === "228,110"); // U+8205
assert.throws(() => {ms932Encoder.encode("\u8206")}, {name:"Error",message:"EncodingError U+8206"});
r = r && ([...ms932Encoder.encode("與興舉舊")].join(",") === "228,111,139,187,157,168,228,112"); // U+8207
assert.throws(() => {ms932Encoder.encode("\u820B")}, {name:"Error",message:"EncodingError U+820B"});
r = r && ([...ms932Encoder.encode("舌舍舎")].join(",") === "144,227,228,113,142,201"); // U+820C
assert.throws(() => {ms932Encoder.encode("\u820F")}, {name:"Error",message:"EncodingError U+820F"});
r = r && ([...ms932Encoder.encode("舐")].join(",") === "228,114"); // U+8210
assert.throws(() => {ms932Encoder.encode("\u8211")}, {name:"Error",message:"EncodingError U+8211"});
r = r && ([...ms932Encoder.encode("舒")].join(",") === "152,174"); // U+8212
assert.throws(() => {ms932Encoder.encode("\u8213")}, {name:"Error",message:"EncodingError U+8213"});
assert.throws(() => {ms932Encoder.encode("\u8214")}, {name:"Error",message:"EncodingError U+8214"});
assert.throws(() => {ms932Encoder.encode("\u8215")}, {name:"Error",message:"EncodingError U+8215"});
r = r && ([...ms932Encoder.encode("舖舗舘")].join(",") === "228,115,149,220,138,218"); // U+8216
assert.throws(() => {ms932Encoder.encode("\u8219")}, {name:"Error",message:"EncodingError U+8219"});
assert.throws(() => {ms932Encoder.encode("\u821A")}, {name:"Error",message:"EncodingError U+821A"});
r = r && ([...ms932Encoder.encode("舛舜")].join(",") === "145,67,143,119"); // U+821B
assert.throws(() => {ms932Encoder.encode("\u821D")}, {name:"Error",message:"EncodingError U+821D"});
r = r && ([...ms932Encoder.encode("舞舟")].join(",") === "149,145,143,77"); // U+821E
assert.throws(() => {ms932Encoder.encode("\u8220")}, {name:"Error",message:"EncodingError U+8220"});
assert.throws(() => {ms932Encoder.encode("\u8221")}, {name:"Error",message:"EncodingError U+8221"});
assert.throws(() => {ms932Encoder.encode("\u8222")}, {name:"Error",message:"EncodingError U+8222"});
assert.throws(() => {ms932Encoder.encode("\u8223")}, {name:"Error",message:"EncodingError U+8223"});
assert.throws(() => {ms932Encoder.encode("\u8224")}, {name:"Error",message:"EncodingError U+8224"});
assert.throws(() => {ms932Encoder.encode("\u8225")}, {name:"Error",message:"EncodingError U+8225"});
assert.throws(() => {ms932Encoder.encode("\u8226")}, {name:"Error",message:"EncodingError U+8226"});
assert.throws(() => {ms932Encoder.encode("\u8227")}, {name:"Error",message:"EncodingError U+8227"});
assert.throws(() => {ms932Encoder.encode("\u8228")}, {name:"Error",message:"EncodingError U+8228"});
r = r && ([...ms932Encoder.encode("舩航舫般")].join(",") === "228,116,141,113,228,117,148,202"); // U+8229
assert.throws(() => {ms932Encoder.encode("\u822D")}, {name:"Error",message:"EncodingError U+822D"});
r = r && ([...ms932Encoder.encode("舮")].join(",") === "228,132"); // U+822E
assert.throws(() => {ms932Encoder.encode("\u822F")}, {name:"Error",message:"EncodingError U+822F"});
assert.throws(() => {ms932Encoder.encode("\u8230")}, {name:"Error",message:"EncodingError U+8230"});
assert.throws(() => {ms932Encoder.encode("\u8231")}, {name:"Error",message:"EncodingError U+8231"});
assert.throws(() => {ms932Encoder.encode("\u8232")}, {name:"Error",message:"EncodingError U+8232"});
r = r && ([...ms932Encoder.encode("舳")].join(",") === "228,119"); // U+8233
assert.throws(() => {ms932Encoder.encode("\u8234")}, {name:"Error",message:"EncodingError U+8234"});
r = r && ([...ms932Encoder.encode("舵舶舷舸船")].join(",") === "145,199,148,149,140,189,228,118,145,68"); // U+8235
assert.throws(() => {ms932Encoder.encode("\u823A")}, {name:"Error",message:"EncodingError U+823A"});
assert.throws(() => {ms932Encoder.encode("\u823B")}, {name:"Error",message:"EncodingError U+823B"});
assert.throws(() => {ms932Encoder.encode("\u823C")}, {name:"Error",message:"EncodingError U+823C"});
assert.throws(() => {ms932Encoder.encode("\u823D")}, {name:"Error",message:"EncodingError U+823D"});
assert.throws(() => {ms932Encoder.encode("\u823E")}, {name:"Error",message:"EncodingError U+823E"});
assert.throws(() => {ms932Encoder.encode("\u823F")}, {name:"Error",message:"EncodingError U+823F"});
r = r && ([...ms932Encoder.encode("艀")].join(",") === "228,120"); // U+8240
assert.throws(() => {ms932Encoder.encode("\u8241")}, {name:"Error",message:"EncodingError U+8241"});
assert.throws(() => {ms932Encoder.encode("\u8242")}, {name:"Error",message:"EncodingError U+8242"});
assert.throws(() => {ms932Encoder.encode("\u8243")}, {name:"Error",message:"EncodingError U+8243"});
assert.throws(() => {ms932Encoder.encode("\u8244")}, {name:"Error",message:"EncodingError U+8244"});
assert.throws(() => {ms932Encoder.encode("\u8245")}, {name:"Error",message:"EncodingError U+8245"});
assert.throws(() => {ms932Encoder.encode("\u8246")}, {name:"Error",message:"EncodingError U+8246"});
r = r && ([...ms932Encoder.encode("艇")].join(",") === "146,248"); // U+8247
assert.throws(() => {ms932Encoder.encode("\u8248")}, {name:"Error",message:"EncodingError U+8248"});
assert.throws(() => {ms932Encoder.encode("\u8249")}, {name:"Error",message:"EncodingError U+8249"});
assert.throws(() => {ms932Encoder.encode("\u824A")}, {name:"Error",message:"EncodingError U+824A"});
assert.throws(() => {ms932Encoder.encode("\u824B")}, {name:"Error",message:"EncodingError U+824B"});
assert.throws(() => {ms932Encoder.encode("\u824C")}, {name:"Error",message:"EncodingError U+824C"});
assert.throws(() => {ms932Encoder.encode("\u824D")}, {name:"Error",message:"EncodingError U+824D"});
assert.throws(() => {ms932Encoder.encode("\u824E")}, {name:"Error",message:"EncodingError U+824E"});
assert.throws(() => {ms932Encoder.encode("\u824F")}, {name:"Error",message:"EncodingError U+824F"});
assert.throws(() => {ms932Encoder.encode("\u8250")}, {name:"Error",message:"EncodingError U+8250"});
assert.throws(() => {ms932Encoder.encode("\u8251")}, {name:"Error",message:"EncodingError U+8251"});
assert.throws(() => {ms932Encoder.encode("\u8252")}, {name:"Error",message:"EncodingError U+8252"});
assert.throws(() => {ms932Encoder.encode("\u8253")}, {name:"Error",message:"EncodingError U+8253"});
assert.throws(() => {ms932Encoder.encode("\u8254")}, {name:"Error",message:"EncodingError U+8254"});
assert.throws(() => {ms932Encoder.encode("\u8255")}, {name:"Error",message:"EncodingError U+8255"});
assert.throws(() => {ms932Encoder.encode("\u8256")}, {name:"Error",message:"EncodingError U+8256"});
assert.throws(() => {ms932Encoder.encode("\u8257")}, {name:"Error",message:"EncodingError U+8257"});
r = r && ([...ms932Encoder.encode("艘艙艚")].join(",") === "228,122,228,121,228,124"); // U+8258
assert.throws(() => {ms932Encoder.encode("\u825B")}, {name:"Error",message:"EncodingError U+825B"});
assert.throws(() => {ms932Encoder.encode("\u825C")}, {name:"Error",message:"EncodingError U+825C"});
r = r && ([...ms932Encoder.encode("艝")].join(",") === "228,123"); // U+825D
assert.throws(() => {ms932Encoder.encode("\u825E")}, {name:"Error",message:"EncodingError U+825E"});
r = r && ([...ms932Encoder.encode("艟")].join(",") === "228,125"); // U+825F
assert.throws(() => {ms932Encoder.encode("\u8260")}, {name:"Error",message:"EncodingError U+8260"});
assert.throws(() => {ms932Encoder.encode("\u8261")}, {name:"Error",message:"EncodingError U+8261"});
r = r && ([...ms932Encoder.encode("艢")].join(",") === "228,128"); // U+8262
assert.throws(() => {ms932Encoder.encode("\u8263")}, {name:"Error",message:"EncodingError U+8263"});
r = r && ([...ms932Encoder.encode("艤")].join(",") === "228,126"); // U+8264
assert.throws(() => {ms932Encoder.encode("\u8265")}, {name:"Error",message:"EncodingError U+8265"});
r = r && ([...ms932Encoder.encode("艦")].join(",") === "138,205"); // U+8266
assert.throws(() => {ms932Encoder.encode("\u8267")}, {name:"Error",message:"EncodingError U+8267"});
r = r && ([...ms932Encoder.encode("艨")].join(",") === "228,129"); // U+8268
assert.throws(() => {ms932Encoder.encode("\u8269")}, {name:"Error",message:"EncodingError U+8269"});
r = r && ([...ms932Encoder.encode("艪艫")].join(",") === "228,130,228,131"); // U+826A
assert.throws(() => {ms932Encoder.encode("\u826C")}, {name:"Error",message:"EncodingError U+826C"});
assert.throws(() => {ms932Encoder.encode("\u826D")}, {name:"Error",message:"EncodingError U+826D"});
r = r && ([...ms932Encoder.encode("艮良")].join(",") === "141,175,151,199"); // U+826E
assert.throws(() => {ms932Encoder.encode("\u8270")}, {name:"Error",message:"EncodingError U+8270"});
r = r && ([...ms932Encoder.encode("艱色")].join(",") === "228,133,144,70"); // U+8271
assert.throws(() => {ms932Encoder.encode("\u8273")}, {name:"Error",message:"EncodingError U+8273"});
assert.throws(() => {ms932Encoder.encode("\u8274")}, {name:"Error",message:"EncodingError U+8274"});
assert.throws(() => {ms932Encoder.encode("\u8275")}, {name:"Error",message:"EncodingError U+8275"});
r = r && ([...ms932Encoder.encode("艶艷艸")].join(",") === "137,144,228,134,228,135"); // U+8276
assert.throws(() => {ms932Encoder.encode("\u8279")}, {name:"Error",message:"EncodingError U+8279"});
assert.throws(() => {ms932Encoder.encode("\u827A")}, {name:"Error",message:"EncodingError U+827A"});
assert.throws(() => {ms932Encoder.encode("\u827B")}, {name:"Error",message:"EncodingError U+827B"});
assert.throws(() => {ms932Encoder.encode("\u827C")}, {name:"Error",message:"EncodingError U+827C"});
assert.throws(() => {ms932Encoder.encode("\u827D")}, {name:"Error",message:"EncodingError U+827D"});
r = r && ([...ms932Encoder.encode("艾")].join(",") === "228,136"); // U+827E
assert.throws(() => {ms932Encoder.encode("\u827F")}, {name:"Error",message:"EncodingError U+827F"});
assert.throws(() => {ms932Encoder.encode("\u8280")}, {name:"Error",message:"EncodingError U+8280"});
assert.throws(() => {ms932Encoder.encode("\u8281")}, {name:"Error",message:"EncodingError U+8281"});
assert.throws(() => {ms932Encoder.encode("\u8282")}, {name:"Error",message:"EncodingError U+8282"});
assert.throws(() => {ms932Encoder.encode("\u8283")}, {name:"Error",message:"EncodingError U+8283"});
assert.throws(() => {ms932Encoder.encode("\u8284")}, {name:"Error",message:"EncodingError U+8284"});
assert.throws(() => {ms932Encoder.encode("\u8285")}, {name:"Error",message:"EncodingError U+8285"});
assert.throws(() => {ms932Encoder.encode("\u8286")}, {name:"Error",message:"EncodingError U+8286"});
assert.throws(() => {ms932Encoder.encode("\u8287")}, {name:"Error",message:"EncodingError U+8287"});
assert.throws(() => {ms932Encoder.encode("\u8288")}, {name:"Error",message:"EncodingError U+8288"});
assert.throws(() => {ms932Encoder.encode("\u8289")}, {name:"Error",message:"EncodingError U+8289"});
assert.throws(() => {ms932Encoder.encode("\u828A")}, {name:"Error",message:"EncodingError U+828A"});
r = r && ([...ms932Encoder.encode("芋")].join(",") === "136,240"); // U+828B
assert.throws(() => {ms932Encoder.encode("\u828C")}, {name:"Error",message:"EncodingError U+828C"});
r = r && ([...ms932Encoder.encode("芍")].join(",") === "228,137"); // U+828D
assert.throws(() => {ms932Encoder.encode("\u828E")}, {name:"Error",message:"EncodingError U+828E"});
assert.throws(() => {ms932Encoder.encode("\u828F")}, {name:"Error",message:"EncodingError U+828F"});
assert.throws(() => {ms932Encoder.encode("\u8290")}, {name:"Error",message:"EncodingError U+8290"});
assert.throws(() => {ms932Encoder.encode("\u8291")}, {name:"Error",message:"EncodingError U+8291"});
r = r && ([...ms932Encoder.encode("芒")].join(",") === "228,138"); // U+8292
assert.throws(() => {ms932Encoder.encode("\u8293")}, {name:"Error",message:"EncodingError U+8293"});
assert.throws(() => {ms932Encoder.encode("\u8294")}, {name:"Error",message:"EncodingError U+8294"});
assert.throws(() => {ms932Encoder.encode("\u8295")}, {name:"Error",message:"EncodingError U+8295"});
assert.throws(() => {ms932Encoder.encode("\u8296")}, {name:"Error",message:"EncodingError U+8296"});
assert.throws(() => {ms932Encoder.encode("\u8297")}, {name:"Error",message:"EncodingError U+8297"});
assert.throws(() => {ms932Encoder.encode("\u8298")}, {name:"Error",message:"EncodingError U+8298"});
r = r && ([...ms932Encoder.encode("芙")].join(",") === "149,135"); // U+8299
assert.throws(() => {ms932Encoder.encode("\u829A")}, {name:"Error",message:"EncodingError U+829A"});
assert.throws(() => {ms932Encoder.encode("\u829B")}, {name:"Error",message:"EncodingError U+829B"});
assert.throws(() => {ms932Encoder.encode("\u829C")}, {name:"Error",message:"EncodingError U+829C"});
r = r && ([...ms932Encoder.encode("芝")].join(",") === "142,197"); // U+829D
assert.throws(() => {ms932Encoder.encode("\u829E")}, {name:"Error",message:"EncodingError U+829E"});
r = r && ([...ms932Encoder.encode("芟")].join(",") === "228,140"); // U+829F
assert.throws(() => {ms932Encoder.encode("\u82A0")}, {name:"Error",message:"EncodingError U+82A0"});
assert.throws(() => {ms932Encoder.encode("\u82A1")}, {name:"Error",message:"EncodingError U+82A1"});
assert.throws(() => {ms932Encoder.encode("\u82A2")}, {name:"Error",message:"EncodingError U+82A2"});
assert.throws(() => {ms932Encoder.encode("\u82A3")}, {name:"Error",message:"EncodingError U+82A3"});
assert.throws(() => {ms932Encoder.encode("\u82A4")}, {name:"Error",message:"EncodingError U+82A4"});
r = r && ([...ms932Encoder.encode("芥芦")].join(",") === "138,72,136,176"); // U+82A5
assert.throws(() => {ms932Encoder.encode("\u82A7")}, {name:"Error",message:"EncodingError U+82A7"});
assert.throws(() => {ms932Encoder.encode("\u82A8")}, {name:"Error",message:"EncodingError U+82A8"});
assert.throws(() => {ms932Encoder.encode("\u82A9")}, {name:"Error",message:"EncodingError U+82A9"});
assert.throws(() => {ms932Encoder.encode("\u82AA")}, {name:"Error",message:"EncodingError U+82AA"});
r = r && ([...ms932Encoder.encode("芫芬芭")].join(",") === "228,139,228,142,148,109"); // U+82AB
assert.throws(() => {ms932Encoder.encode("\u82AE")}, {name:"Error",message:"EncodingError U+82AE"});
r = r && ([...ms932Encoder.encode("芯")].join(",") === "144,99"); // U+82AF
assert.throws(() => {ms932Encoder.encode("\u82B0")}, {name:"Error",message:"EncodingError U+82B0"});
r = r && ([...ms932Encoder.encode("花")].join(",") === "137,212"); // U+82B1
assert.throws(() => {ms932Encoder.encode("\u82B2")}, {name:"Error",message:"EncodingError U+82B2"});
r = r && ([...ms932Encoder.encode("芳")].join(",") === "150,70"); // U+82B3
assert.throws(() => {ms932Encoder.encode("\u82B4")}, {name:"Error",message:"EncodingError U+82B4"});
assert.throws(() => {ms932Encoder.encode("\u82B5")}, {name:"Error",message:"EncodingError U+82B5"});
assert.throws(() => {ms932Encoder.encode("\u82B6")}, {name:"Error",message:"EncodingError U+82B6"});
assert.throws(() => {ms932Encoder.encode("\u82B7")}, {name:"Error",message:"EncodingError U+82B7"});
r = r && ([...ms932Encoder.encode("芸芹")].join(",") === "140,124,139,218"); // U+82B8
assert.throws(() => {ms932Encoder.encode("\u82BA")}, {name:"Error",message:"EncodingError U+82BA"});
r = r && ([...ms932Encoder.encode("芻")].join(",") === "228,141"); // U+82BB
assert.throws(() => {ms932Encoder.encode("\u82BC")}, {name:"Error",message:"EncodingError U+82BC"});
r = r && ([...ms932Encoder.encode("芽")].join(",") === "137,232"); // U+82BD
assert.throws(() => {ms932Encoder.encode("\u82BE")}, {name:"Error",message:"EncodingError U+82BE"});
assert.throws(() => {ms932Encoder.encode("\u82BF")}, {name:"Error",message:"EncodingError U+82BF"});
assert.throws(() => {ms932Encoder.encode("\u82C0")}, {name:"Error",message:"EncodingError U+82C0"});
assert.throws(() => {ms932Encoder.encode("\u82C1")}, {name:"Error",message:"EncodingError U+82C1"});
assert.throws(() => {ms932Encoder.encode("\u82C2")}, {name:"Error",message:"EncodingError U+82C2"});
assert.throws(() => {ms932Encoder.encode("\u82C3")}, {name:"Error",message:"EncodingError U+82C3"});
assert.throws(() => {ms932Encoder.encode("\u82C4")}, {name:"Error",message:"EncodingError U+82C4"});
r = r && ([...ms932Encoder.encode("苅")].join(",") === "138,161"); // U+82C5
assert.throws(() => {ms932Encoder.encode("\u82C6")}, {name:"Error",message:"EncodingError U+82C6"});
assert.throws(() => {ms932Encoder.encode("\u82C7")}, {name:"Error",message:"EncodingError U+82C7"});
assert.throws(() => {ms932Encoder.encode("\u82C8")}, {name:"Error",message:"EncodingError U+82C8"});
assert.throws(() => {ms932Encoder.encode("\u82C9")}, {name:"Error",message:"EncodingError U+82C9"});
assert.throws(() => {ms932Encoder.encode("\u82CA")}, {name:"Error",message:"EncodingError U+82CA"});
assert.throws(() => {ms932Encoder.encode("\u82CB")}, {name:"Error",message:"EncodingError U+82CB"});
assert.throws(() => {ms932Encoder.encode("\u82CC")}, {name:"Error",message:"EncodingError U+82CC"});
assert.throws(() => {ms932Encoder.encode("\u82CD")}, {name:"Error",message:"EncodingError U+82CD"});
assert.throws(() => {ms932Encoder.encode("\u82CE")}, {name:"Error",message:"EncodingError U+82CE"});
assert.throws(() => {ms932Encoder.encode("\u82CF")}, {name:"Error",message:"EncodingError U+82CF"});
assert.throws(() => {ms932Encoder.encode("\u82D0")}, {name:"Error",message:"EncodingError U+82D0"});
r = r && ([...ms932Encoder.encode("苑苒苓苔")].join(",") === "137,145,228,146,151,232,145,219"); // U+82D1
assert.throws(() => {ms932Encoder.encode("\u82D5")}, {name:"Error",message:"EncodingError U+82D5"});
assert.throws(() => {ms932Encoder.encode("\u82D6")}, {name:"Error",message:"EncodingError U+82D6"});
r = r && ([...ms932Encoder.encode("苗")].join(",") === "149,99"); // U+82D7
assert.throws(() => {ms932Encoder.encode("\u82D8")}, {name:"Error",message:"EncodingError U+82D8"});
r = r && ([...ms932Encoder.encode("苙")].join(",") === "228,158"); // U+82D9
assert.throws(() => {ms932Encoder.encode("\u82DA")}, {name:"Error",message:"EncodingError U+82DA"});
r = r && ([...ms932Encoder.encode("苛苜")].join(",") === "137,213,228,156"); // U+82DB
assert.throws(() => {ms932Encoder.encode("\u82DD")}, {name:"Error",message:"EncodingError U+82DD"});
r = r && ([...ms932Encoder.encode("苞苟")].join(",") === "228,154,228,145"); // U+82DE
assert.throws(() => {ms932Encoder.encode("\u82E0")}, {name:"Error",message:"EncodingError U+82E0"});
r = r && ([...ms932Encoder.encode("苡")].join(",") === "228,143"); // U+82E1
assert.throws(() => {ms932Encoder.encode("\u82E2")}, {name:"Error",message:"EncodingError U+82E2"});
r = r && ([...ms932Encoder.encode("苣")].join(",") === "228,144"); // U+82E3
assert.throws(() => {ms932Encoder.encode("\u82E4")}, {name:"Error",message:"EncodingError U+82E4"});
r = r && ([...ms932Encoder.encode("若苦苧")].join(",") === "142,225,139,234,146,151"); // U+82E5
assert.throws(() => {ms932Encoder.encode("\u82E8")}, {name:"Error",message:"EncodingError U+82E8"});
assert.throws(() => {ms932Encoder.encode("\u82E9")}, {name:"Error",message:"EncodingError U+82E9"});
assert.throws(() => {ms932Encoder.encode("\u82EA")}, {name:"Error",message:"EncodingError U+82EA"});
r = r && ([...ms932Encoder.encode("苫")].join(",") === "147,207"); // U+82EB
assert.throws(() => {ms932Encoder.encode("\u82EC")}, {name:"Error",message:"EncodingError U+82EC"});
assert.throws(() => {ms932Encoder.encode("\u82ED")}, {name:"Error",message:"EncodingError U+82ED"});
assert.throws(() => {ms932Encoder.encode("\u82EE")}, {name:"Error",message:"EncodingError U+82EE"});
assert.throws(() => {ms932Encoder.encode("\u82EF")}, {name:"Error",message:"EncodingError U+82EF"});
assert.throws(() => {ms932Encoder.encode("\u82F0")}, {name:"Error",message:"EncodingError U+82F0"});
r = r && ([...ms932Encoder.encode("英")].join(",") === "137,112"); // U+82F1
assert.throws(() => {ms932Encoder.encode("\u82F2")}, {name:"Error",message:"EncodingError U+82F2"});
r = r && ([...ms932Encoder.encode("苳苴")].join(",") === "228,148,228,147"); // U+82F3
assert.throws(() => {ms932Encoder.encode("\u82F5")}, {name:"Error",message:"EncodingError U+82F5"});
assert.throws(() => {ms932Encoder.encode("\u82F6")}, {name:"Error",message:"EncodingError U+82F6"});
assert.throws(() => {ms932Encoder.encode("\u82F7")}, {name:"Error",message:"EncodingError U+82F7"});
assert.throws(() => {ms932Encoder.encode("\u82F8")}, {name:"Error",message:"EncodingError U+82F8"});
r = r && ([...ms932Encoder.encode("苹苺苻")].join(",") === "228,153,228,149,228,152"); // U+82F9
assert.throws(() => {ms932Encoder.encode("\u82FC")}, {name:"Error",message:"EncodingError U+82FC"});
assert.throws(() => {ms932Encoder.encode("\u82FD")}, {name:"Error",message:"EncodingError U+82FD"});
assert.throws(() => {ms932Encoder.encode("\u82FE")}, {name:"Error",message:"EncodingError U+82FE"});
assert.throws(() => {ms932Encoder.encode("\u82FF")}, {name:"Error",message:"EncodingError U+82FF"});
assert.throws(() => {ms932Encoder.encode("\u8300")}, {name:"Error",message:"EncodingError U+8300"});
r = r && ([...ms932Encoder.encode("茁茂范茄茅茆")].join(",") === "251,147,150,206,228,151,137,214,138,157,228,155"); // U+8301
assert.throws(() => {ms932Encoder.encode("\u8307")}, {name:"Error",message:"EncodingError U+8307"});
assert.throws(() => {ms932Encoder.encode("\u8308")}, {name:"Error",message:"EncodingError U+8308"});
r = r && ([...ms932Encoder.encode("茉")].join(",") === "228,157"); // U+8309
assert.throws(() => {ms932Encoder.encode("\u830A")}, {name:"Error",message:"EncodingError U+830A"});
assert.throws(() => {ms932Encoder.encode("\u830B")}, {name:"Error",message:"EncodingError U+830B"});
assert.throws(() => {ms932Encoder.encode("\u830C")}, {name:"Error",message:"EncodingError U+830C"});
assert.throws(() => {ms932Encoder.encode("\u830D")}, {name:"Error",message:"EncodingError U+830D"});
r = r && ([...ms932Encoder.encode("茎")].join(",") === "140,115"); // U+830E
assert.throws(() => {ms932Encoder.encode("\u830F")}, {name:"Error",message:"EncodingError U+830F"});
assert.throws(() => {ms932Encoder.encode("\u8310")}, {name:"Error",message:"EncodingError U+8310"});
assert.throws(() => {ms932Encoder.encode("\u8311")}, {name:"Error",message:"EncodingError U+8311"});
assert.throws(() => {ms932Encoder.encode("\u8312")}, {name:"Error",message:"EncodingError U+8312"});
assert.throws(() => {ms932Encoder.encode("\u8313")}, {name:"Error",message:"EncodingError U+8313"});
assert.throws(() => {ms932Encoder.encode("\u8314")}, {name:"Error",message:"EncodingError U+8314"});
assert.throws(() => {ms932Encoder.encode("\u8315")}, {name:"Error",message:"EncodingError U+8315"});
r = r && ([...ms932Encoder.encode("茖茗茘")].join(",") === "228,161,228,170,228,171"); // U+8316
assert.throws(() => {ms932Encoder.encode("\u8319")}, {name:"Error",message:"EncodingError U+8319"});
assert.throws(() => {ms932Encoder.encode("\u831A")}, {name:"Error",message:"EncodingError U+831A"});
assert.throws(() => {ms932Encoder.encode("\u831B")}, {name:"Error",message:"EncodingError U+831B"});
r = r && ([...ms932Encoder.encode("茜")].join(",") === "136,169"); // U+831C
assert.throws(() => {ms932Encoder.encode("\u831D")}, {name:"Error",message:"EncodingError U+831D"});
assert.throws(() => {ms932Encoder.encode("\u831E")}, {name:"Error",message:"EncodingError U+831E"});
assert.throws(() => {ms932Encoder.encode("\u831F")}, {name:"Error",message:"EncodingError U+831F"});
assert.throws(() => {ms932Encoder.encode("\u8320")}, {name:"Error",message:"EncodingError U+8320"});
assert.throws(() => {ms932Encoder.encode("\u8321")}, {name:"Error",message:"EncodingError U+8321"});
assert.throws(() => {ms932Encoder.encode("\u8322")}, {name:"Error",message:"EncodingError U+8322"});
r = r && ([...ms932Encoder.encode("茣")].join(",") === "228,178"); // U+8323
assert.throws(() => {ms932Encoder.encode("\u8324")}, {name:"Error",message:"EncodingError U+8324"});
assert.throws(() => {ms932Encoder.encode("\u8325")}, {name:"Error",message:"EncodingError U+8325"});
assert.throws(() => {ms932Encoder.encode("\u8326")}, {name:"Error",message:"EncodingError U+8326"});
assert.throws(() => {ms932Encoder.encode("\u8327")}, {name:"Error",message:"EncodingError U+8327"});
r = r && ([...ms932Encoder.encode("茨")].join(",") === "136,239"); // U+8328
assert.throws(() => {ms932Encoder.encode("\u8329")}, {name:"Error",message:"EncodingError U+8329"});
assert.throws(() => {ms932Encoder.encode("\u832A")}, {name:"Error",message:"EncodingError U+832A"});
r = r && ([...ms932Encoder.encode("茫")].join(",") === "228,169"); // U+832B
assert.throws(() => {ms932Encoder.encode("\u832C")}, {name:"Error",message:"EncodingError U+832C"});
assert.throws(() => {ms932Encoder.encode("\u832D")}, {name:"Error",message:"EncodingError U+832D"});
assert.throws(() => {ms932Encoder.encode("\u832E")}, {name:"Error",message:"EncodingError U+832E"});
r = r && ([...ms932Encoder.encode("茯")].join(",") === "228,168"); // U+832F
assert.throws(() => {ms932Encoder.encode("\u8330")}, {name:"Error",message:"EncodingError U+8330"});
r = r && ([...ms932Encoder.encode("茱茲")].join(",") === "228,163,228,162"); // U+8331
assert.throws(() => {ms932Encoder.encode("\u8333")}, {name:"Error",message:"EncodingError U+8333"});
r = r && ([...ms932Encoder.encode("茴茵茶")].join(",") === "228,160,228,159,146,131"); // U+8334
assert.throws(() => {ms932Encoder.encode("\u8337")}, {name:"Error",message:"EncodingError U+8337"});
r = r && ([...ms932Encoder.encode("茸茹")].join(",") === "145,249,228,165"); // U+8338
assert.throws(() => {ms932Encoder.encode("\u833A")}, {name:"Error",message:"EncodingError U+833A"});
assert.throws(() => {ms932Encoder.encode("\u833B")}, {name:"Error",message:"EncodingError U+833B"});
assert.throws(() => {ms932Encoder.encode("\u833C")}, {name:"Error",message:"EncodingError U+833C"});
assert.throws(() => {ms932Encoder.encode("\u833D")}, {name:"Error",message:"EncodingError U+833D"});
assert.throws(() => {ms932Encoder.encode("\u833E")}, {name:"Error",message:"EncodingError U+833E"});
assert.throws(() => {ms932Encoder.encode("\u833F")}, {name:"Error",message:"EncodingError U+833F"});
r = r && ([...ms932Encoder.encode("荀")].join(",") === "228,164"); // U+8340
assert.throws(() => {ms932Encoder.encode("\u8341")}, {name:"Error",message:"EncodingError U+8341"});
assert.throws(() => {ms932Encoder.encode("\u8342")}, {name:"Error",message:"EncodingError U+8342"});
assert.throws(() => {ms932Encoder.encode("\u8343")}, {name:"Error",message:"EncodingError U+8343"});
assert.throws(() => {ms932Encoder.encode("\u8344")}, {name:"Error",message:"EncodingError U+8344"});
r = r && ([...ms932Encoder.encode("荅")].join(",") === "228,167"); // U+8345
assert.throws(() => {ms932Encoder.encode("\u8346")}, {name:"Error",message:"EncodingError U+8346"});
assert.throws(() => {ms932Encoder.encode("\u8347")}, {name:"Error",message:"EncodingError U+8347"});
assert.throws(() => {ms932Encoder.encode("\u8348")}, {name:"Error",message:"EncodingError U+8348"});
r = r && ([...ms932Encoder.encode("草荊")].join(",") === "145,144,140,116"); // U+8349
assert.throws(() => {ms932Encoder.encode("\u834B")}, {name:"Error",message:"EncodingError U+834B"});
assert.throws(() => {ms932Encoder.encode("\u834C")}, {name:"Error",message:"EncodingError U+834C"});
assert.throws(() => {ms932Encoder.encode("\u834D")}, {name:"Error",message:"EncodingError U+834D"});
assert.throws(() => {ms932Encoder.encode("\u834E")}, {name:"Error",message:"EncodingError U+834E"});
r = r && ([...ms932Encoder.encode("荏荐")].join(",") === "137,96,228,166"); // U+834F
assert.throws(() => {ms932Encoder.encode("\u8351")}, {name:"Error",message:"EncodingError U+8351"});
r = r && ([...ms932Encoder.encode("荒")].join(",") === "141,114"); // U+8352
assert.throws(() => {ms932Encoder.encode("\u8353")}, {name:"Error",message:"EncodingError U+8353"});
assert.throws(() => {ms932Encoder.encode("\u8354")}, {name:"Error",message:"EncodingError U+8354"});
assert.throws(() => {ms932Encoder.encode("\u8355")}, {name:"Error",message:"EncodingError U+8355"});
assert.throws(() => {ms932Encoder.encode("\u8356")}, {name:"Error",message:"EncodingError U+8356"});
assert.throws(() => {ms932Encoder.encode("\u8357")}, {name:"Error",message:"EncodingError U+8357"});
r = r && ([...ms932Encoder.encode("荘")].join(",") === "145,145"); // U+8358
assert.throws(() => {ms932Encoder.encode("\u8359")}, {name:"Error",message:"EncodingError U+8359"});
assert.throws(() => {ms932Encoder.encode("\u835A")}, {name:"Error",message:"EncodingError U+835A"});
assert.throws(() => {ms932Encoder.encode("\u835B")}, {name:"Error",message:"EncodingError U+835B"});
assert.throws(() => {ms932Encoder.encode("\u835C")}, {name:"Error",message:"EncodingError U+835C"});
assert.throws(() => {ms932Encoder.encode("\u835D")}, {name:"Error",message:"EncodingError U+835D"});
assert.throws(() => {ms932Encoder.encode("\u835E")}, {name:"Error",message:"EncodingError U+835E"});
assert.throws(() => {ms932Encoder.encode("\u835F")}, {name:"Error",message:"EncodingError U+835F"});
assert.throws(() => {ms932Encoder.encode("\u8360")}, {name:"Error",message:"EncodingError U+8360"});
assert.throws(() => {ms932Encoder.encode("\u8361")}, {name:"Error",message:"EncodingError U+8361"});
r = r && ([...ms932Encoder.encode("荢")].join(",") === "251,148"); // U+8362
assert.throws(() => {ms932Encoder.encode("\u8363")}, {name:"Error",message:"EncodingError U+8363"});
assert.throws(() => {ms932Encoder.encode("\u8364")}, {name:"Error",message:"EncodingError U+8364"});
assert.throws(() => {ms932Encoder.encode("\u8365")}, {name:"Error",message:"EncodingError U+8365"});
assert.throws(() => {ms932Encoder.encode("\u8366")}, {name:"Error",message:"EncodingError U+8366"});
assert.throws(() => {ms932Encoder.encode("\u8367")}, {name:"Error",message:"EncodingError U+8367"});
assert.throws(() => {ms932Encoder.encode("\u8368")}, {name:"Error",message:"EncodingError U+8368"});
assert.throws(() => {ms932Encoder.encode("\u8369")}, {name:"Error",message:"EncodingError U+8369"});
assert.throws(() => {ms932Encoder.encode("\u836A")}, {name:"Error",message:"EncodingError U+836A"});
assert.throws(() => {ms932Encoder.encode("\u836B")}, {name:"Error",message:"EncodingError U+836B"});
assert.throws(() => {ms932Encoder.encode("\u836C")}, {name:"Error",message:"EncodingError U+836C"});
assert.throws(() => {ms932Encoder.encode("\u836D")}, {name:"Error",message:"EncodingError U+836D"});
assert.throws(() => {ms932Encoder.encode("\u836E")}, {name:"Error",message:"EncodingError U+836E"});
assert.throws(() => {ms932Encoder.encode("\u836F")}, {name:"Error",message:"EncodingError U+836F"});
assert.throws(() => {ms932Encoder.encode("\u8370")}, {name:"Error",message:"EncodingError U+8370"});
assert.throws(() => {ms932Encoder.encode("\u8371")}, {name:"Error",message:"EncodingError U+8371"});
assert.throws(() => {ms932Encoder.encode("\u8372")}, {name:"Error",message:"EncodingError U+8372"});
r = r && ([...ms932Encoder.encode("荳")].join(",") === "228,184"); // U+8373
assert.throws(() => {ms932Encoder.encode("\u8374")}, {name:"Error",message:"EncodingError U+8374"});
r = r && ([...ms932Encoder.encode("荵")].join(",") === "228,185"); // U+8375
assert.throws(() => {ms932Encoder.encode("\u8376")}, {name:"Error",message:"EncodingError U+8376"});
r = r && ([...ms932Encoder.encode("荷")].join(",") === "137,215"); // U+8377
assert.throws(() => {ms932Encoder.encode("\u8378")}, {name:"Error",message:"EncodingError U+8378"});
assert.throws(() => {ms932Encoder.encode("\u8379")}, {name:"Error",message:"EncodingError U+8379"});
assert.throws(() => {ms932Encoder.encode("\u837A")}, {name:"Error",message:"EncodingError U+837A"});
r = r && ([...ms932Encoder.encode("荻荼")].join(",") === "137,172,228,182"); // U+837B
assert.throws(() => {ms932Encoder.encode("\u837D")}, {name:"Error",message:"EncodingError U+837D"});
assert.throws(() => {ms932Encoder.encode("\u837E")}, {name:"Error",message:"EncodingError U+837E"});
r = r && ([...ms932Encoder.encode("荿")].join(",") === "251,149"); // U+837F
assert.throws(() => {ms932Encoder.encode("\u8380")}, {name:"Error",message:"EncodingError U+8380"});
assert.throws(() => {ms932Encoder.encode("\u8381")}, {name:"Error",message:"EncodingError U+8381"});
assert.throws(() => {ms932Encoder.encode("\u8382")}, {name:"Error",message:"EncodingError U+8382"});
assert.throws(() => {ms932Encoder.encode("\u8383")}, {name:"Error",message:"EncodingError U+8383"});
assert.throws(() => {ms932Encoder.encode("\u8384")}, {name:"Error",message:"EncodingError U+8384"});
r = r && ([...ms932Encoder.encode("莅")].join(",") === "228,172"); // U+8385
assert.throws(() => {ms932Encoder.encode("\u8386")}, {name:"Error",message:"EncodingError U+8386"});
r = r && ([...ms932Encoder.encode("莇")].join(",") === "228,180"); // U+8387
assert.throws(() => {ms932Encoder.encode("\u8388")}, {name:"Error",message:"EncodingError U+8388"});
r = r && ([...ms932Encoder.encode("莉莊")].join(",") === "228,187,228,181"); // U+8389
assert.throws(() => {ms932Encoder.encode("\u838B")}, {name:"Error",message:"EncodingError U+838B"});
assert.throws(() => {ms932Encoder.encode("\u838C")}, {name:"Error",message:"EncodingError U+838C"});
assert.throws(() => {ms932Encoder.encode("\u838D")}, {name:"Error",message:"EncodingError U+838D"});
r = r && ([...ms932Encoder.encode("莎")].join(",") === "228,179"); // U+838E
assert.throws(() => {ms932Encoder.encode("\u838F")}, {name:"Error",message:"EncodingError U+838F"});
assert.throws(() => {ms932Encoder.encode("\u8390")}, {name:"Error",message:"EncodingError U+8390"});
assert.throws(() => {ms932Encoder.encode("\u8391")}, {name:"Error",message:"EncodingError U+8391"});
assert.throws(() => {ms932Encoder.encode("\u8392")}, {name:"Error",message:"EncodingError U+8392"});
r = r && ([...ms932Encoder.encode("莓")].join(",") === "228,150"); // U+8393
assert.throws(() => {ms932Encoder.encode("\u8394")}, {name:"Error",message:"EncodingError U+8394"});
assert.throws(() => {ms932Encoder.encode("\u8395")}, {name:"Error",message:"EncodingError U+8395"});
r = r && ([...ms932Encoder.encode("莖")].join(",") === "228,177"); // U+8396
assert.throws(() => {ms932Encoder.encode("\u8397")}, {name:"Error",message:"EncodingError U+8397"});
assert.throws(() => {ms932Encoder.encode("\u8398")}, {name:"Error",message:"EncodingError U+8398"});
assert.throws(() => {ms932Encoder.encode("\u8399")}, {name:"Error",message:"EncodingError U+8399"});
r = r && ([...ms932Encoder.encode("莚")].join(",") === "228,173"); // U+839A
assert.throws(() => {ms932Encoder.encode("\u839B")}, {name:"Error",message:"EncodingError U+839B"});
assert.throws(() => {ms932Encoder.encode("\u839C")}, {name:"Error",message:"EncodingError U+839C"});
assert.throws(() => {ms932Encoder.encode("\u839D")}, {name:"Error",message:"EncodingError U+839D"});
r = r && ([...ms932Encoder.encode("莞莟莠")].join(",") === "138,206,228,175,228,186"); // U+839E
assert.throws(() => {ms932Encoder.encode("\u83A1")}, {name:"Error",message:"EncodingError U+83A1"});
r = r && ([...ms932Encoder.encode("莢")].join(",") === "228,176"); // U+83A2
assert.throws(() => {ms932Encoder.encode("\u83A3")}, {name:"Error",message:"EncodingError U+83A3"});
assert.throws(() => {ms932Encoder.encode("\u83A4")}, {name:"Error",message:"EncodingError U+83A4"});
assert.throws(() => {ms932Encoder.encode("\u83A5")}, {name:"Error",message:"EncodingError U+83A5"});
assert.throws(() => {ms932Encoder.encode("\u83A6")}, {name:"Error",message:"EncodingError U+83A6"});
assert.throws(() => {ms932Encoder.encode("\u83A7")}, {name:"Error",message:"EncodingError U+83A7"});
r = r && ([...ms932Encoder.encode("莨")].join(",") === "228,188"); // U+83A8
assert.throws(() => {ms932Encoder.encode("\u83A9")}, {name:"Error",message:"EncodingError U+83A9"});
r = r && ([...ms932Encoder.encode("莪莫")].join(",") === "228,174,148,156"); // U+83AA
assert.throws(() => {ms932Encoder.encode("\u83AC")}, {name:"Error",message:"EncodingError U+83AC"});
assert.throws(() => {ms932Encoder.encode("\u83AD")}, {name:"Error",message:"EncodingError U+83AD"});
assert.throws(() => {ms932Encoder.encode("\u83AE")}, {name:"Error",message:"EncodingError U+83AE"});
assert.throws(() => {ms932Encoder.encode("\u83AF")}, {name:"Error",message:"EncodingError U+83AF"});
assert.throws(() => {ms932Encoder.encode("\u83B0")}, {name:"Error",message:"EncodingError U+83B0"});
r = r && ([...ms932Encoder.encode("莱")].join(",") === "151,137"); // U+83B1
assert.throws(() => {ms932Encoder.encode("\u83B2")}, {name:"Error",message:"EncodingError U+83B2"});
assert.throws(() => {ms932Encoder.encode("\u83B3")}, {name:"Error",message:"EncodingError U+83B3"});
assert.throws(() => {ms932Encoder.encode("\u83B4")}, {name:"Error",message:"EncodingError U+83B4"});
r = r && ([...ms932Encoder.encode("莵")].join(",") === "228,183"); // U+83B5
assert.throws(() => {ms932Encoder.encode("\u83B6")}, {name:"Error",message:"EncodingError U+83B6"});
assert.throws(() => {ms932Encoder.encode("\u83B7")}, {name:"Error",message:"EncodingError U+83B7"});
assert.throws(() => {ms932Encoder.encode("\u83B8")}, {name:"Error",message:"EncodingError U+83B8"});
assert.throws(() => {ms932Encoder.encode("\u83B9")}, {name:"Error",message:"EncodingError U+83B9"});
assert.throws(() => {ms932Encoder.encode("\u83BA")}, {name:"Error",message:"EncodingError U+83BA"});
assert.throws(() => {ms932Encoder.encode("\u83BB")}, {name:"Error",message:"EncodingError U+83BB"});
assert.throws(() => {ms932Encoder.encode("\u83BC")}, {name:"Error",message:"EncodingError U+83BC"});
r = r && ([...ms932Encoder.encode("莽")].join(",") === "228,205"); // U+83BD
assert.throws(() => {ms932Encoder.encode("\u83BE")}, {name:"Error",message:"EncodingError U+83BE"});
assert.throws(() => {ms932Encoder.encode("\u83BF")}, {name:"Error",message:"EncodingError U+83BF"});
assert.throws(() => {ms932Encoder.encode("\u83C0")}, {name:"Error",message:"EncodingError U+83C0"});
r = r && ([...ms932Encoder.encode("菁")].join(",") === "228,197"); // U+83C1
assert.throws(() => {ms932Encoder.encode("\u83C2")}, {name:"Error",message:"EncodingError U+83C2"});
assert.throws(() => {ms932Encoder.encode("\u83C3")}, {name:"Error",message:"EncodingError U+83C3"});
assert.throws(() => {ms932Encoder.encode("\u83C4")}, {name:"Error",message:"EncodingError U+83C4"});
r = r && ([...ms932Encoder.encode("菅")].join(",") === "144,155"); // U+83C5
assert.throws(() => {ms932Encoder.encode("\u83C6")}, {name:"Error",message:"EncodingError U+83C6"});
r = r && ([...ms932Encoder.encode("菇")].join(",") === "251,150"); // U+83C7
assert.throws(() => {ms932Encoder.encode("\u83C8")}, {name:"Error",message:"EncodingError U+83C8"});
assert.throws(() => {ms932Encoder.encode("\u83C9")}, {name:"Error",message:"EncodingError U+83C9"});
r = r && ([...ms932Encoder.encode("菊")].join(",") === "139,101"); // U+83CA
assert.throws(() => {ms932Encoder.encode("\u83CB")}, {name:"Error",message:"EncodingError U+83CB"});
r = r && ([...ms932Encoder.encode("菌")].join(",") === "139,219"); // U+83CC
assert.throws(() => {ms932Encoder.encode("\u83CD")}, {name:"Error",message:"EncodingError U+83CD"});
r = r && ([...ms932Encoder.encode("菎")].join(",") === "228,192"); // U+83CE
assert.throws(() => {ms932Encoder.encode("\u83CF")}, {name:"Error",message:"EncodingError U+83CF"});
assert.throws(() => {ms932Encoder.encode("\u83D0")}, {name:"Error",message:"EncodingError U+83D0"});
assert.throws(() => {ms932Encoder.encode("\u83D1")}, {name:"Error",message:"EncodingError U+83D1"});
assert.throws(() => {ms932Encoder.encode("\u83D2")}, {name:"Error",message:"EncodingError U+83D2"});
r = r && ([...ms932Encoder.encode("菓")].join(",") === "137,217"); // U+83D3
assert.throws(() => {ms932Encoder.encode("\u83D4")}, {name:"Error",message:"EncodingError U+83D4"});
assert.throws(() => {ms932Encoder.encode("\u83D5")}, {name:"Error",message:"EncodingError U+83D5"});
r = r && ([...ms932Encoder.encode("菖")].join(",") === "143,210"); // U+83D6
assert.throws(() => {ms932Encoder.encode("\u83D7")}, {name:"Error",message:"EncodingError U+83D7"});
r = r && ([...ms932Encoder.encode("菘")].join(",") === "228,195"); // U+83D8
assert.throws(() => {ms932Encoder.encode("\u83D9")}, {name:"Error",message:"EncodingError U+83D9"});
assert.throws(() => {ms932Encoder.encode("\u83DA")}, {name:"Error",message:"EncodingError U+83DA"});
assert.throws(() => {ms932Encoder.encode("\u83DB")}, {name:"Error",message:"EncodingError U+83DB"});
r = r && ([...ms932Encoder.encode("菜")].join(",") === "141,216"); // U+83DC
assert.throws(() => {ms932Encoder.encode("\u83DD")}, {name:"Error",message:"EncodingError U+83DD"});
assert.throws(() => {ms932Encoder.encode("\u83DE")}, {name:"Error",message:"EncodingError U+83DE"});
r = r && ([...ms932Encoder.encode("菟菠")].join(",") === "147,112,228,200"); // U+83DF
assert.throws(() => {ms932Encoder.encode("\u83E1")}, {name:"Error",message:"EncodingError U+83E1"});
assert.throws(() => {ms932Encoder.encode("\u83E2")}, {name:"Error",message:"EncodingError U+83E2"});
assert.throws(() => {ms932Encoder.encode("\u83E3")}, {name:"Error",message:"EncodingError U+83E3"});
assert.throws(() => {ms932Encoder.encode("\u83E4")}, {name:"Error",message:"EncodingError U+83E4"});
assert.throws(() => {ms932Encoder.encode("\u83E5")}, {name:"Error",message:"EncodingError U+83E5"});
assert.throws(() => {ms932Encoder.encode("\u83E6")}, {name:"Error",message:"EncodingError U+83E6"});
assert.throws(() => {ms932Encoder.encode("\u83E7")}, {name:"Error",message:"EncodingError U+83E7"});
assert.throws(() => {ms932Encoder.encode("\u83E8")}, {name:"Error",message:"EncodingError U+83E8"});
r = r && ([...ms932Encoder.encode("菩")].join(",") === "149,236"); // U+83E9
assert.throws(() => {ms932Encoder.encode("\u83EA")}, {name:"Error",message:"EncodingError U+83EA"});
r = r && ([...ms932Encoder.encode("菫")].join(",") === "228,191"); // U+83EB
assert.throws(() => {ms932Encoder.encode("\u83EC")}, {name:"Error",message:"EncodingError U+83EC"});
assert.throws(() => {ms932Encoder.encode("\u83ED")}, {name:"Error",message:"EncodingError U+83ED"});
assert.throws(() => {ms932Encoder.encode("\u83EE")}, {name:"Error",message:"EncodingError U+83EE"});
r = r && ([...ms932Encoder.encode("華菰菱菲")].join(",") === "137,216,140,212,149,72,228,201"); // U+83EF
assert.throws(() => {ms932Encoder.encode("\u83F3")}, {name:"Error",message:"EncodingError U+83F3"});
r = r && ([...ms932Encoder.encode("菴")].join(",") === "228,189"); // U+83F4
assert.throws(() => {ms932Encoder.encode("\u83F5")}, {name:"Error",message:"EncodingError U+83F5"});
r = r && ([...ms932Encoder.encode("菶菷")].join(",") === "251,151,228,198"); // U+83F6
assert.throws(() => {ms932Encoder.encode("\u83F8")}, {name:"Error",message:"EncodingError U+83F8"});
assert.throws(() => {ms932Encoder.encode("\u83F9")}, {name:"Error",message:"EncodingError U+83F9"});
assert.throws(() => {ms932Encoder.encode("\u83FA")}, {name:"Error",message:"EncodingError U+83FA"});
r = r && ([...ms932Encoder.encode("菻")].join(",") === "228,208"); // U+83FB
assert.throws(() => {ms932Encoder.encode("\u83FC")}, {name:"Error",message:"EncodingError U+83FC"});
r = r && ([...ms932Encoder.encode("菽")].join(",") === "228,193"); // U+83FD
assert.throws(() => {ms932Encoder.encode("\u83FE")}, {name:"Error",message:"EncodingError U+83FE"});
assert.throws(() => {ms932Encoder.encode("\u83FF")}, {name:"Error",message:"EncodingError U+83FF"});

assert.strictEqual(r, true);

  });

});
