import { expect } from '@esm-bundle/chai';
import { Ms932 } from "./index";

describe("Ms932.Encoder.prototype.encode 9", () => {

  it("encode(string) - U+8000-U+83FF", () => {
    const ms932Encoder = new Ms932.Encoder({fatal:true});

    let r = true;
r = r && ([...ms932Encoder.encode("耀老")].join(",") === "151,115,152,86"); // U+8000
expect(() => {ms932Encoder.encode("\u8002")}).to.throw(Error, "EncodingError U+8002");
r = r && ([...ms932Encoder.encode("考耄者耆")].join(",") === "141,108,227,204,142,210,227,203"); // U+8003
expect(() => {ms932Encoder.encode("\u8007")}).to.throw(Error, "EncodingError U+8007");
expect(() => {ms932Encoder.encode("\u8008")}).to.throw(Error, "EncodingError U+8008");
expect(() => {ms932Encoder.encode("\u8009")}).to.throw(Error, "EncodingError U+8009");
expect(() => {ms932Encoder.encode("\u800A")}).to.throw(Error, "EncodingError U+800A");
r = r && ([...ms932Encoder.encode("耋而")].join(",") === "227,205,142,167"); // U+800B
expect(() => {ms932Encoder.encode("\u800D")}).to.throw(Error, "EncodingError U+800D");
expect(() => {ms932Encoder.encode("\u800E")}).to.throw(Error, "EncodingError U+800E");
expect(() => {ms932Encoder.encode("\u800F")}).to.throw(Error, "EncodingError U+800F");
r = r && ([...ms932Encoder.encode("耐")].join(",") === "145,207"); // U+8010
expect(() => {ms932Encoder.encode("\u8011")}).to.throw(Error, "EncodingError U+8011");
r = r && ([...ms932Encoder.encode("耒")].join(",") === "227,206"); // U+8012
expect(() => {ms932Encoder.encode("\u8013")}).to.throw(Error, "EncodingError U+8013");
expect(() => {ms932Encoder.encode("\u8014")}).to.throw(Error, "EncodingError U+8014");
r = r && ([...ms932Encoder.encode("耕")].join(",") === "141,107"); // U+8015
expect(() => {ms932Encoder.encode("\u8016")}).to.throw(Error, "EncodingError U+8016");
r = r && ([...ms932Encoder.encode("耗耘耙")].join(",") === "150,213,227,207,227,208"); // U+8017
expect(() => {ms932Encoder.encode("\u801A")}).to.throw(Error, "EncodingError U+801A");
expect(() => {ms932Encoder.encode("\u801B")}).to.throw(Error, "EncodingError U+801B");
r = r && ([...ms932Encoder.encode("耜")].join(",") === "227,209"); // U+801C
expect(() => {ms932Encoder.encode("\u801D")}).to.throw(Error, "EncodingError U+801D");
expect(() => {ms932Encoder.encode("\u801E")}).to.throw(Error, "EncodingError U+801E");
expect(() => {ms932Encoder.encode("\u801F")}).to.throw(Error, "EncodingError U+801F");
expect(() => {ms932Encoder.encode("\u8020")}).to.throw(Error, "EncodingError U+8020");
r = r && ([...ms932Encoder.encode("耡")].join(",") === "227,210"); // U+8021
expect(() => {ms932Encoder.encode("\u8022")}).to.throw(Error, "EncodingError U+8022");
expect(() => {ms932Encoder.encode("\u8023")}).to.throw(Error, "EncodingError U+8023");
expect(() => {ms932Encoder.encode("\u8024")}).to.throw(Error, "EncodingError U+8024");
expect(() => {ms932Encoder.encode("\u8025")}).to.throw(Error, "EncodingError U+8025");
expect(() => {ms932Encoder.encode("\u8026")}).to.throw(Error, "EncodingError U+8026");
expect(() => {ms932Encoder.encode("\u8027")}).to.throw(Error, "EncodingError U+8027");
r = r && ([...ms932Encoder.encode("耨")].join(",") === "227,211"); // U+8028
expect(() => {ms932Encoder.encode("\u8029")}).to.throw(Error, "EncodingError U+8029");
expect(() => {ms932Encoder.encode("\u802A")}).to.throw(Error, "EncodingError U+802A");
expect(() => {ms932Encoder.encode("\u802B")}).to.throw(Error, "EncodingError U+802B");
expect(() => {ms932Encoder.encode("\u802C")}).to.throw(Error, "EncodingError U+802C");
expect(() => {ms932Encoder.encode("\u802D")}).to.throw(Error, "EncodingError U+802D");
expect(() => {ms932Encoder.encode("\u802E")}).to.throw(Error, "EncodingError U+802E");
expect(() => {ms932Encoder.encode("\u802F")}).to.throw(Error, "EncodingError U+802F");
expect(() => {ms932Encoder.encode("\u8030")}).to.throw(Error, "EncodingError U+8030");
expect(() => {ms932Encoder.encode("\u8031")}).to.throw(Error, "EncodingError U+8031");
expect(() => {ms932Encoder.encode("\u8032")}).to.throw(Error, "EncodingError U+8032");
r = r && ([...ms932Encoder.encode("耳")].join(",") === "142,168"); // U+8033
expect(() => {ms932Encoder.encode("\u8034")}).to.throw(Error, "EncodingError U+8034");
expect(() => {ms932Encoder.encode("\u8035")}).to.throw(Error, "EncodingError U+8035");
r = r && ([...ms932Encoder.encode("耶")].join(",") === "150,235"); // U+8036
expect(() => {ms932Encoder.encode("\u8037")}).to.throw(Error, "EncodingError U+8037");
expect(() => {ms932Encoder.encode("\u8038")}).to.throw(Error, "EncodingError U+8038");
expect(() => {ms932Encoder.encode("\u8039")}).to.throw(Error, "EncodingError U+8039");
expect(() => {ms932Encoder.encode("\u803A")}).to.throw(Error, "EncodingError U+803A");
r = r && ([...ms932Encoder.encode("耻")].join(",") === "227,213"); // U+803B
expect(() => {ms932Encoder.encode("\u803C")}).to.throw(Error, "EncodingError U+803C");
r = r && ([...ms932Encoder.encode("耽")].join(",") === "146,94"); // U+803D
expect(() => {ms932Encoder.encode("\u803E")}).to.throw(Error, "EncodingError U+803E");
r = r && ([...ms932Encoder.encode("耿")].join(",") === "227,212"); // U+803F
expect(() => {ms932Encoder.encode("\u8040")}).to.throw(Error, "EncodingError U+8040");
expect(() => {ms932Encoder.encode("\u8041")}).to.throw(Error, "EncodingError U+8041");
expect(() => {ms932Encoder.encode("\u8042")}).to.throw(Error, "EncodingError U+8042");
expect(() => {ms932Encoder.encode("\u8043")}).to.throw(Error, "EncodingError U+8043");
expect(() => {ms932Encoder.encode("\u8044")}).to.throw(Error, "EncodingError U+8044");
expect(() => {ms932Encoder.encode("\u8045")}).to.throw(Error, "EncodingError U+8045");
r = r && ([...ms932Encoder.encode("聆")].join(",") === "227,215"); // U+8046
expect(() => {ms932Encoder.encode("\u8047")}).to.throw(Error, "EncodingError U+8047");
expect(() => {ms932Encoder.encode("\u8048")}).to.throw(Error, "EncodingError U+8048");
expect(() => {ms932Encoder.encode("\u8049")}).to.throw(Error, "EncodingError U+8049");
r = r && ([...ms932Encoder.encode("聊")].join(",") === "227,214"); // U+804A
expect(() => {ms932Encoder.encode("\u804B")}).to.throw(Error, "EncodingError U+804B");
expect(() => {ms932Encoder.encode("\u804C")}).to.throw(Error, "EncodingError U+804C");
expect(() => {ms932Encoder.encode("\u804D")}).to.throw(Error, "EncodingError U+804D");
expect(() => {ms932Encoder.encode("\u804E")}).to.throw(Error, "EncodingError U+804E");
expect(() => {ms932Encoder.encode("\u804F")}).to.throw(Error, "EncodingError U+804F");
expect(() => {ms932Encoder.encode("\u8050")}).to.throw(Error, "EncodingError U+8050");
expect(() => {ms932Encoder.encode("\u8051")}).to.throw(Error, "EncodingError U+8051");
r = r && ([...ms932Encoder.encode("聒")].join(",") === "227,216"); // U+8052
expect(() => {ms932Encoder.encode("\u8053")}).to.throw(Error, "EncodingError U+8053");
expect(() => {ms932Encoder.encode("\u8054")}).to.throw(Error, "EncodingError U+8054");
expect(() => {ms932Encoder.encode("\u8055")}).to.throw(Error, "EncodingError U+8055");
r = r && ([...ms932Encoder.encode("聖")].join(",") === "144,185"); // U+8056
expect(() => {ms932Encoder.encode("\u8057")}).to.throw(Error, "EncodingError U+8057");
r = r && ([...ms932Encoder.encode("聘")].join(",") === "227,217"); // U+8058
expect(() => {ms932Encoder.encode("\u8059")}).to.throw(Error, "EncodingError U+8059");
r = r && ([...ms932Encoder.encode("聚")].join(",") === "227,218"); // U+805A
expect(() => {ms932Encoder.encode("\u805B")}).to.throw(Error, "EncodingError U+805B");
expect(() => {ms932Encoder.encode("\u805C")}).to.throw(Error, "EncodingError U+805C");
expect(() => {ms932Encoder.encode("\u805D")}).to.throw(Error, "EncodingError U+805D");
r = r && ([...ms932Encoder.encode("聞聟")].join(",") === "149,183,227,219"); // U+805E
expect(() => {ms932Encoder.encode("\u8060")}).to.throw(Error, "EncodingError U+8060");
r = r && ([...ms932Encoder.encode("聡聢")].join(",") === "145,143,227,220"); // U+8061
expect(() => {ms932Encoder.encode("\u8063")}).to.throw(Error, "EncodingError U+8063");
expect(() => {ms932Encoder.encode("\u8064")}).to.throw(Error, "EncodingError U+8064");
expect(() => {ms932Encoder.encode("\u8065")}).to.throw(Error, "EncodingError U+8065");
expect(() => {ms932Encoder.encode("\u8066")}).to.throw(Error, "EncodingError U+8066");
expect(() => {ms932Encoder.encode("\u8067")}).to.throw(Error, "EncodingError U+8067");
r = r && ([...ms932Encoder.encode("聨")].join(",") === "227,221"); // U+8068
expect(() => {ms932Encoder.encode("\u8069")}).to.throw(Error, "EncodingError U+8069");
expect(() => {ms932Encoder.encode("\u806A")}).to.throw(Error, "EncodingError U+806A");
expect(() => {ms932Encoder.encode("\u806B")}).to.throw(Error, "EncodingError U+806B");
expect(() => {ms932Encoder.encode("\u806C")}).to.throw(Error, "EncodingError U+806C");
expect(() => {ms932Encoder.encode("\u806D")}).to.throw(Error, "EncodingError U+806D");
expect(() => {ms932Encoder.encode("\u806E")}).to.throw(Error, "EncodingError U+806E");
r = r && ([...ms932Encoder.encode("聯聰")].join(",") === "151,252,227,224"); // U+806F
expect(() => {ms932Encoder.encode("\u8071")}).to.throw(Error, "EncodingError U+8071");
r = r && ([...ms932Encoder.encode("聲聳聴")].join(",") === "227,223,227,222,146,174"); // U+8072
expect(() => {ms932Encoder.encode("\u8075")}).to.throw(Error, "EncodingError U+8075");
r = r && ([...ms932Encoder.encode("聶職")].join(",") === "227,225,144,69"); // U+8076
expect(() => {ms932Encoder.encode("\u8078")}).to.throw(Error, "EncodingError U+8078");
r = r && ([...ms932Encoder.encode("聹")].join(",") === "227,226"); // U+8079
expect(() => {ms932Encoder.encode("\u807A")}).to.throw(Error, "EncodingError U+807A");
expect(() => {ms932Encoder.encode("\u807B")}).to.throw(Error, "EncodingError U+807B");
expect(() => {ms932Encoder.encode("\u807C")}).to.throw(Error, "EncodingError U+807C");
r = r && ([...ms932Encoder.encode("聽聾聿")].join(",") === "227,227,152,87,227,228"); // U+807D
expect(() => {ms932Encoder.encode("\u8080")}).to.throw(Error, "EncodingError U+8080");
expect(() => {ms932Encoder.encode("\u8081")}).to.throw(Error, "EncodingError U+8081");
expect(() => {ms932Encoder.encode("\u8082")}).to.throw(Error, "EncodingError U+8082");
expect(() => {ms932Encoder.encode("\u8083")}).to.throw(Error, "EncodingError U+8083");
r = r && ([...ms932Encoder.encode("肄肅肆肇")].join(",") === "227,229,227,231,227,230,148,163"); // U+8084
expect(() => {ms932Encoder.encode("\u8088")}).to.throw(Error, "EncodingError U+8088");
r = r && ([...ms932Encoder.encode("肉")].join(",") === "147,247"); // U+8089
expect(() => {ms932Encoder.encode("\u808A")}).to.throw(Error, "EncodingError U+808A");
r = r && ([...ms932Encoder.encode("肋肌")].join(",") === "152,93,148,167"); // U+808B
expect(() => {ms932Encoder.encode("\u808D")}).to.throw(Error, "EncodingError U+808D");
expect(() => {ms932Encoder.encode("\u808E")}).to.throw(Error, "EncodingError U+808E");
expect(() => {ms932Encoder.encode("\u808F")}).to.throw(Error, "EncodingError U+808F");
expect(() => {ms932Encoder.encode("\u8090")}).to.throw(Error, "EncodingError U+8090");
expect(() => {ms932Encoder.encode("\u8091")}).to.throw(Error, "EncodingError U+8091");
expect(() => {ms932Encoder.encode("\u8092")}).to.throw(Error, "EncodingError U+8092");
r = r && ([...ms932Encoder.encode("肓")].join(",") === "227,233"); // U+8093
expect(() => {ms932Encoder.encode("\u8094")}).to.throw(Error, "EncodingError U+8094");
expect(() => {ms932Encoder.encode("\u8095")}).to.throw(Error, "EncodingError U+8095");
r = r && ([...ms932Encoder.encode("肖")].join(",") === "143,209"); // U+8096
expect(() => {ms932Encoder.encode("\u8097")}).to.throw(Error, "EncodingError U+8097");
r = r && ([...ms932Encoder.encode("肘")].join(",") === "149,73"); // U+8098
expect(() => {ms932Encoder.encode("\u8099")}).to.throw(Error, "EncodingError U+8099");
r = r && ([...ms932Encoder.encode("肚肛")].join(",") === "227,234,227,232"); // U+809A
expect(() => {ms932Encoder.encode("\u809C")}).to.throw(Error, "EncodingError U+809C");
r = r && ([...ms932Encoder.encode("肝")].join(",") === "138,204"); // U+809D
expect(() => {ms932Encoder.encode("\u809E")}).to.throw(Error, "EncodingError U+809E");
expect(() => {ms932Encoder.encode("\u809F")}).to.throw(Error, "EncodingError U+809F");
expect(() => {ms932Encoder.encode("\u80A0")}).to.throw(Error, "EncodingError U+80A0");
r = r && ([...ms932Encoder.encode("股肢")].join(",") === "140,210,142,136"); // U+80A1
expect(() => {ms932Encoder.encode("\u80A3")}).to.throw(Error, "EncodingError U+80A3");
expect(() => {ms932Encoder.encode("\u80A4")}).to.throw(Error, "EncodingError U+80A4");
r = r && ([...ms932Encoder.encode("肥")].join(",") === "148,236"); // U+80A5
expect(() => {ms932Encoder.encode("\u80A6")}).to.throw(Error, "EncodingError U+80A6");
expect(() => {ms932Encoder.encode("\u80A7")}).to.throw(Error, "EncodingError U+80A7");
expect(() => {ms932Encoder.encode("\u80A8")}).to.throw(Error, "EncodingError U+80A8");
r = r && ([...ms932Encoder.encode("肩肪")].join(",") === "140,168,150,98"); // U+80A9
expect(() => {ms932Encoder.encode("\u80AB")}).to.throw(Error, "EncodingError U+80AB");
r = r && ([...ms932Encoder.encode("肬肭")].join(",") === "227,237,227,235"); // U+80AC
expect(() => {ms932Encoder.encode("\u80AE")}).to.throw(Error, "EncodingError U+80AE");
r = r && ([...ms932Encoder.encode("肯")].join(",") === "141,109"); // U+80AF
expect(() => {ms932Encoder.encode("\u80B0")}).to.throw(Error, "EncodingError U+80B0");
r = r && ([...ms932Encoder.encode("肱育")].join(",") === "141,110,136,231"); // U+80B1
expect(() => {ms932Encoder.encode("\u80B3")}).to.throw(Error, "EncodingError U+80B3");
r = r && ([...ms932Encoder.encode("肴")].join(",") === "141,230"); // U+80B4
expect(() => {ms932Encoder.encode("\u80B5")}).to.throw(Error, "EncodingError U+80B5");
expect(() => {ms932Encoder.encode("\u80B6")}).to.throw(Error, "EncodingError U+80B6");
expect(() => {ms932Encoder.encode("\u80B7")}).to.throw(Error, "EncodingError U+80B7");
expect(() => {ms932Encoder.encode("\u80B8")}).to.throw(Error, "EncodingError U+80B8");
expect(() => {ms932Encoder.encode("\u80B9")}).to.throw(Error, "EncodingError U+80B9");
r = r && ([...ms932Encoder.encode("肺")].join(",") === "148,120"); // U+80BA
expect(() => {ms932Encoder.encode("\u80BB")}).to.throw(Error, "EncodingError U+80BB");
expect(() => {ms932Encoder.encode("\u80BC")}).to.throw(Error, "EncodingError U+80BC");
expect(() => {ms932Encoder.encode("\u80BD")}).to.throw(Error, "EncodingError U+80BD");
expect(() => {ms932Encoder.encode("\u80BE")}).to.throw(Error, "EncodingError U+80BE");
expect(() => {ms932Encoder.encode("\u80BF")}).to.throw(Error, "EncodingError U+80BF");
expect(() => {ms932Encoder.encode("\u80C0")}).to.throw(Error, "EncodingError U+80C0");
expect(() => {ms932Encoder.encode("\u80C1")}).to.throw(Error, "EncodingError U+80C1");
expect(() => {ms932Encoder.encode("\u80C2")}).to.throw(Error, "EncodingError U+80C2");
r = r && ([...ms932Encoder.encode("胃胄")].join(",") === "136,221,227,242"); // U+80C3
expect(() => {ms932Encoder.encode("\u80C5")}).to.throw(Error, "EncodingError U+80C5");
r = r && ([...ms932Encoder.encode("胆")].join(",") === "146,95"); // U+80C6
expect(() => {ms932Encoder.encode("\u80C7")}).to.throw(Error, "EncodingError U+80C7");
expect(() => {ms932Encoder.encode("\u80C8")}).to.throw(Error, "EncodingError U+80C8");
expect(() => {ms932Encoder.encode("\u80C9")}).to.throw(Error, "EncodingError U+80C9");
expect(() => {ms932Encoder.encode("\u80CA")}).to.throw(Error, "EncodingError U+80CA");
expect(() => {ms932Encoder.encode("\u80CB")}).to.throw(Error, "EncodingError U+80CB");
r = r && ([...ms932Encoder.encode("背")].join(",") === "148,119"); // U+80CC
expect(() => {ms932Encoder.encode("\u80CD")}).to.throw(Error, "EncodingError U+80CD");
r = r && ([...ms932Encoder.encode("胎")].join(",") === "145,217"); // U+80CE
expect(() => {ms932Encoder.encode("\u80CF")}).to.throw(Error, "EncodingError U+80CF");
expect(() => {ms932Encoder.encode("\u80D0")}).to.throw(Error, "EncodingError U+80D0");
expect(() => {ms932Encoder.encode("\u80D1")}).to.throw(Error, "EncodingError U+80D1");
expect(() => {ms932Encoder.encode("\u80D2")}).to.throw(Error, "EncodingError U+80D2");
expect(() => {ms932Encoder.encode("\u80D3")}).to.throw(Error, "EncodingError U+80D3");
expect(() => {ms932Encoder.encode("\u80D4")}).to.throw(Error, "EncodingError U+80D4");
expect(() => {ms932Encoder.encode("\u80D5")}).to.throw(Error, "EncodingError U+80D5");
r = r && ([...ms932Encoder.encode("胖")].join(",") === "227,244"); // U+80D6
expect(() => {ms932Encoder.encode("\u80D7")}).to.throw(Error, "EncodingError U+80D7");
expect(() => {ms932Encoder.encode("\u80D8")}).to.throw(Error, "EncodingError U+80D8");
r = r && ([...ms932Encoder.encode("胙胚胛")].join(",") === "227,240,227,243,227,238"); // U+80D9
expect(() => {ms932Encoder.encode("\u80DC")}).to.throw(Error, "EncodingError U+80DC");
r = r && ([...ms932Encoder.encode("胝胞")].join(",") === "227,241,150,69"); // U+80DD
expect(() => {ms932Encoder.encode("\u80DF")}).to.throw(Error, "EncodingError U+80DF");
expect(() => {ms932Encoder.encode("\u80E0")}).to.throw(Error, "EncodingError U+80E0");
r = r && ([...ms932Encoder.encode("胡")].join(",") === "140,211"); // U+80E1
expect(() => {ms932Encoder.encode("\u80E2")}).to.throw(Error, "EncodingError U+80E2");
expect(() => {ms932Encoder.encode("\u80E3")}).to.throw(Error, "EncodingError U+80E3");
r = r && ([...ms932Encoder.encode("胤胥")].join(",") === "136,251,227,239"); // U+80E4
expect(() => {ms932Encoder.encode("\u80E6")}).to.throw(Error, "EncodingError U+80E6");
expect(() => {ms932Encoder.encode("\u80E7")}).to.throw(Error, "EncodingError U+80E7");
expect(() => {ms932Encoder.encode("\u80E8")}).to.throw(Error, "EncodingError U+80E8");
expect(() => {ms932Encoder.encode("\u80E9")}).to.throw(Error, "EncodingError U+80E9");
expect(() => {ms932Encoder.encode("\u80EA")}).to.throw(Error, "EncodingError U+80EA");
expect(() => {ms932Encoder.encode("\u80EB")}).to.throw(Error, "EncodingError U+80EB");
expect(() => {ms932Encoder.encode("\u80EC")}).to.throw(Error, "EncodingError U+80EC");
expect(() => {ms932Encoder.encode("\u80ED")}).to.throw(Error, "EncodingError U+80ED");
expect(() => {ms932Encoder.encode("\u80EE")}).to.throw(Error, "EncodingError U+80EE");
r = r && ([...ms932Encoder.encode("胯")].join(",") === "227,246"); // U+80EF
expect(() => {ms932Encoder.encode("\u80F0")}).to.throw(Error, "EncodingError U+80F0");
r = r && ([...ms932Encoder.encode("胱")].join(",") === "227,247"); // U+80F1
expect(() => {ms932Encoder.encode("\u80F2")}).to.throw(Error, "EncodingError U+80F2");
expect(() => {ms932Encoder.encode("\u80F3")}).to.throw(Error, "EncodingError U+80F3");
r = r && ([...ms932Encoder.encode("胴")].join(",") === "147,183"); // U+80F4
expect(() => {ms932Encoder.encode("\u80F5")}).to.throw(Error, "EncodingError U+80F5");
expect(() => {ms932Encoder.encode("\u80F6")}).to.throw(Error, "EncodingError U+80F6");
expect(() => {ms932Encoder.encode("\u80F7")}).to.throw(Error, "EncodingError U+80F7");
r = r && ([...ms932Encoder.encode("胸")].join(",") === "139,185"); // U+80F8
expect(() => {ms932Encoder.encode("\u80F9")}).to.throw(Error, "EncodingError U+80F9");
expect(() => {ms932Encoder.encode("\u80FA")}).to.throw(Error, "EncodingError U+80FA");
expect(() => {ms932Encoder.encode("\u80FB")}).to.throw(Error, "EncodingError U+80FB");
r = r && ([...ms932Encoder.encode("胼能")].join(",") === "228,69,148,92"); // U+80FC
expect(() => {ms932Encoder.encode("\u80FE")}).to.throw(Error, "EncodingError U+80FE");
expect(() => {ms932Encoder.encode("\u80FF")}).to.throw(Error, "EncodingError U+80FF");
expect(() => {ms932Encoder.encode("\u8100")}).to.throw(Error, "EncodingError U+8100");
expect(() => {ms932Encoder.encode("\u8101")}).to.throw(Error, "EncodingError U+8101");
r = r && ([...ms932Encoder.encode("脂")].join(",") === "142,137"); // U+8102
expect(() => {ms932Encoder.encode("\u8103")}).to.throw(Error, "EncodingError U+8103");
expect(() => {ms932Encoder.encode("\u8104")}).to.throw(Error, "EncodingError U+8104");
r = r && ([...ms932Encoder.encode("脅脆脇脈脉脊")].join(",") === "139,186,144,198,152,101,150,172,227,245,144,210"); // U+8105
expect(() => {ms932Encoder.encode("\u810B")}).to.throw(Error, "EncodingError U+810B");
expect(() => {ms932Encoder.encode("\u810C")}).to.throw(Error, "EncodingError U+810C");
expect(() => {ms932Encoder.encode("\u810D")}).to.throw(Error, "EncodingError U+810D");
expect(() => {ms932Encoder.encode("\u810E")}).to.throw(Error, "EncodingError U+810E");
expect(() => {ms932Encoder.encode("\u810F")}).to.throw(Error, "EncodingError U+810F");
expect(() => {ms932Encoder.encode("\u8110")}).to.throw(Error, "EncodingError U+8110");
expect(() => {ms932Encoder.encode("\u8111")}).to.throw(Error, "EncodingError U+8111");
expect(() => {ms932Encoder.encode("\u8112")}).to.throw(Error, "EncodingError U+8112");
expect(() => {ms932Encoder.encode("\u8113")}).to.throw(Error, "EncodingError U+8113");
expect(() => {ms932Encoder.encode("\u8114")}).to.throw(Error, "EncodingError U+8114");
expect(() => {ms932Encoder.encode("\u8115")}).to.throw(Error, "EncodingError U+8115");
expect(() => {ms932Encoder.encode("\u8116")}).to.throw(Error, "EncodingError U+8116");
expect(() => {ms932Encoder.encode("\u8117")}).to.throw(Error, "EncodingError U+8117");
expect(() => {ms932Encoder.encode("\u8118")}).to.throw(Error, "EncodingError U+8118");
expect(() => {ms932Encoder.encode("\u8119")}).to.throw(Error, "EncodingError U+8119");
r = r && ([...ms932Encoder.encode("脚脛")].join(",") === "139,114,227,248"); // U+811A
expect(() => {ms932Encoder.encode("\u811C")}).to.throw(Error, "EncodingError U+811C");
expect(() => {ms932Encoder.encode("\u811D")}).to.throw(Error, "EncodingError U+811D");
expect(() => {ms932Encoder.encode("\u811E")}).to.throw(Error, "EncodingError U+811E");
expect(() => {ms932Encoder.encode("\u811F")}).to.throw(Error, "EncodingError U+811F");
expect(() => {ms932Encoder.encode("\u8120")}).to.throw(Error, "EncodingError U+8120");
expect(() => {ms932Encoder.encode("\u8121")}).to.throw(Error, "EncodingError U+8121");
expect(() => {ms932Encoder.encode("\u8122")}).to.throw(Error, "EncodingError U+8122");
r = r && ([...ms932Encoder.encode("脣")].join(",") === "227,250"); // U+8123
expect(() => {ms932Encoder.encode("\u8124")}).to.throw(Error, "EncodingError U+8124");
expect(() => {ms932Encoder.encode("\u8125")}).to.throw(Error, "EncodingError U+8125");
expect(() => {ms932Encoder.encode("\u8126")}).to.throw(Error, "EncodingError U+8126");
expect(() => {ms932Encoder.encode("\u8127")}).to.throw(Error, "EncodingError U+8127");
expect(() => {ms932Encoder.encode("\u8128")}).to.throw(Error, "EncodingError U+8128");
r = r && ([...ms932Encoder.encode("脩")].join(",") === "227,249"); // U+8129
expect(() => {ms932Encoder.encode("\u812A")}).to.throw(Error, "EncodingError U+812A");
expect(() => {ms932Encoder.encode("\u812B")}).to.throw(Error, "EncodingError U+812B");
expect(() => {ms932Encoder.encode("\u812C")}).to.throw(Error, "EncodingError U+812C");
expect(() => {ms932Encoder.encode("\u812D")}).to.throw(Error, "EncodingError U+812D");
expect(() => {ms932Encoder.encode("\u812E")}).to.throw(Error, "EncodingError U+812E");
r = r && ([...ms932Encoder.encode("脯")].join(",") === "227,251"); // U+812F
expect(() => {ms932Encoder.encode("\u8130")}).to.throw(Error, "EncodingError U+8130");
r = r && ([...ms932Encoder.encode("脱")].join(",") === "146,69"); // U+8131
expect(() => {ms932Encoder.encode("\u8132")}).to.throw(Error, "EncodingError U+8132");
r = r && ([...ms932Encoder.encode("脳")].join(",") === "148,93"); // U+8133
expect(() => {ms932Encoder.encode("\u8134")}).to.throw(Error, "EncodingError U+8134");
expect(() => {ms932Encoder.encode("\u8135")}).to.throw(Error, "EncodingError U+8135");
expect(() => {ms932Encoder.encode("\u8136")}).to.throw(Error, "EncodingError U+8136");
expect(() => {ms932Encoder.encode("\u8137")}).to.throw(Error, "EncodingError U+8137");
expect(() => {ms932Encoder.encode("\u8138")}).to.throw(Error, "EncodingError U+8138");
r = r && ([...ms932Encoder.encode("脹")].join(",") === "146,175"); // U+8139
expect(() => {ms932Encoder.encode("\u813A")}).to.throw(Error, "EncodingError U+813A");
expect(() => {ms932Encoder.encode("\u813B")}).to.throw(Error, "EncodingError U+813B");
expect(() => {ms932Encoder.encode("\u813C")}).to.throw(Error, "EncodingError U+813C");
expect(() => {ms932Encoder.encode("\u813D")}).to.throw(Error, "EncodingError U+813D");
r = r && ([...ms932Encoder.encode("脾")].join(",") === "228,66"); // U+813E
expect(() => {ms932Encoder.encode("\u813F")}).to.throw(Error, "EncodingError U+813F");
expect(() => {ms932Encoder.encode("\u8140")}).to.throw(Error, "EncodingError U+8140");
expect(() => {ms932Encoder.encode("\u8141")}).to.throw(Error, "EncodingError U+8141");
expect(() => {ms932Encoder.encode("\u8142")}).to.throw(Error, "EncodingError U+8142");
expect(() => {ms932Encoder.encode("\u8143")}).to.throw(Error, "EncodingError U+8143");
expect(() => {ms932Encoder.encode("\u8144")}).to.throw(Error, "EncodingError U+8144");
expect(() => {ms932Encoder.encode("\u8145")}).to.throw(Error, "EncodingError U+8145");
r = r && ([...ms932Encoder.encode("腆")].join(",") === "228,65"); // U+8146
expect(() => {ms932Encoder.encode("\u8147")}).to.throw(Error, "EncodingError U+8147");
expect(() => {ms932Encoder.encode("\u8148")}).to.throw(Error, "EncodingError U+8148");
expect(() => {ms932Encoder.encode("\u8149")}).to.throw(Error, "EncodingError U+8149");
expect(() => {ms932Encoder.encode("\u814A")}).to.throw(Error, "EncodingError U+814A");
r = r && ([...ms932Encoder.encode("腋")].join(",") === "227,252"); // U+814B
expect(() => {ms932Encoder.encode("\u814C")}).to.throw(Error, "EncodingError U+814C");
expect(() => {ms932Encoder.encode("\u814D")}).to.throw(Error, "EncodingError U+814D");
r = r && ([...ms932Encoder.encode("腎")].join(",") === "144,116"); // U+814E
expect(() => {ms932Encoder.encode("\u814F")}).to.throw(Error, "EncodingError U+814F");
r = r && ([...ms932Encoder.encode("腐腑")].join(",") === "149,133,228,68"); // U+8150
expect(() => {ms932Encoder.encode("\u8152")}).to.throw(Error, "EncodingError U+8152");
r = r && ([...ms932Encoder.encode("腓腔腕")].join(",") === "228,67,141,111,152,114"); // U+8153
expect(() => {ms932Encoder.encode("\u8156")}).to.throw(Error, "EncodingError U+8156");
expect(() => {ms932Encoder.encode("\u8157")}).to.throw(Error, "EncodingError U+8157");
expect(() => {ms932Encoder.encode("\u8158")}).to.throw(Error, "EncodingError U+8158");
expect(() => {ms932Encoder.encode("\u8159")}).to.throw(Error, "EncodingError U+8159");
expect(() => {ms932Encoder.encode("\u815A")}).to.throw(Error, "EncodingError U+815A");
expect(() => {ms932Encoder.encode("\u815B")}).to.throw(Error, "EncodingError U+815B");
expect(() => {ms932Encoder.encode("\u815C")}).to.throw(Error, "EncodingError U+815C");
expect(() => {ms932Encoder.encode("\u815D")}).to.throw(Error, "EncodingError U+815D");
expect(() => {ms932Encoder.encode("\u815E")}).to.throw(Error, "EncodingError U+815E");
r = r && ([...ms932Encoder.encode("腟")].join(",") === "228,84"); // U+815F
expect(() => {ms932Encoder.encode("\u8160")}).to.throw(Error, "EncodingError U+8160");
expect(() => {ms932Encoder.encode("\u8161")}).to.throw(Error, "EncodingError U+8161");
expect(() => {ms932Encoder.encode("\u8162")}).to.throw(Error, "EncodingError U+8162");
expect(() => {ms932Encoder.encode("\u8163")}).to.throw(Error, "EncodingError U+8163");
expect(() => {ms932Encoder.encode("\u8164")}).to.throw(Error, "EncodingError U+8164");
r = r && ([...ms932Encoder.encode("腥腦")].join(",") === "228,72,228,73"); // U+8165
expect(() => {ms932Encoder.encode("\u8167")}).to.throw(Error, "EncodingError U+8167");
expect(() => {ms932Encoder.encode("\u8168")}).to.throw(Error, "EncodingError U+8168");
expect(() => {ms932Encoder.encode("\u8169")}).to.throw(Error, "EncodingError U+8169");
expect(() => {ms932Encoder.encode("\u816A")}).to.throw(Error, "EncodingError U+816A");
r = r && ([...ms932Encoder.encode("腫")].join(",") === "142,238"); // U+816B
expect(() => {ms932Encoder.encode("\u816C")}).to.throw(Error, "EncodingError U+816C");
expect(() => {ms932Encoder.encode("\u816D")}).to.throw(Error, "EncodingError U+816D");
r = r && ([...ms932Encoder.encode("腮")].join(",") === "228,71"); // U+816E
expect(() => {ms932Encoder.encode("\u816F")}).to.throw(Error, "EncodingError U+816F");
r = r && ([...ms932Encoder.encode("腰腱")].join(",") === "141,152,228,70"); // U+8170
expect(() => {ms932Encoder.encode("\u8172")}).to.throw(Error, "EncodingError U+8172");
expect(() => {ms932Encoder.encode("\u8173")}).to.throw(Error, "EncodingError U+8173");
r = r && ([...ms932Encoder.encode("腴")].join(",") === "228,74"); // U+8174
expect(() => {ms932Encoder.encode("\u8175")}).to.throw(Error, "EncodingError U+8175");
expect(() => {ms932Encoder.encode("\u8176")}).to.throw(Error, "EncodingError U+8176");
expect(() => {ms932Encoder.encode("\u8177")}).to.throw(Error, "EncodingError U+8177");
r = r && ([...ms932Encoder.encode("腸腹腺")].join(",") === "146,176,149,160,145,66"); // U+8178
expect(() => {ms932Encoder.encode("\u817B")}).to.throw(Error, "EncodingError U+817B");
expect(() => {ms932Encoder.encode("\u817C")}).to.throw(Error, "EncodingError U+817C");
expect(() => {ms932Encoder.encode("\u817D")}).to.throw(Error, "EncodingError U+817D");
expect(() => {ms932Encoder.encode("\u817E")}).to.throw(Error, "EncodingError U+817E");
r = r && ([...ms932Encoder.encode("腿膀")].join(",") === "145,218,228,78"); // U+817F
expect(() => {ms932Encoder.encode("\u8181")}).to.throw(Error, "EncodingError U+8181");
r = r && ([...ms932Encoder.encode("膂膃")].join(",") === "228,79,228,75"); // U+8182
expect(() => {ms932Encoder.encode("\u8184")}).to.throw(Error, "EncodingError U+8184");
expect(() => {ms932Encoder.encode("\u8185")}).to.throw(Error, "EncodingError U+8185");
expect(() => {ms932Encoder.encode("\u8186")}).to.throw(Error, "EncodingError U+8186");
expect(() => {ms932Encoder.encode("\u8187")}).to.throw(Error, "EncodingError U+8187");
r = r && ([...ms932Encoder.encode("膈")].join(",") === "228,76"); // U+8188
expect(() => {ms932Encoder.encode("\u8189")}).to.throw(Error, "EncodingError U+8189");
r = r && ([...ms932Encoder.encode("膊")].join(",") === "228,77"); // U+818A
expect(() => {ms932Encoder.encode("\u818B")}).to.throw(Error, "EncodingError U+818B");
expect(() => {ms932Encoder.encode("\u818C")}).to.throw(Error, "EncodingError U+818C");
expect(() => {ms932Encoder.encode("\u818D")}).to.throw(Error, "EncodingError U+818D");
expect(() => {ms932Encoder.encode("\u818E")}).to.throw(Error, "EncodingError U+818E");
r = r && ([...ms932Encoder.encode("膏")].join(",") === "141,112"); // U+818F
expect(() => {ms932Encoder.encode("\u8190")}).to.throw(Error, "EncodingError U+8190");
expect(() => {ms932Encoder.encode("\u8191")}).to.throw(Error, "EncodingError U+8191");
expect(() => {ms932Encoder.encode("\u8192")}).to.throw(Error, "EncodingError U+8192");
r = r && ([...ms932Encoder.encode("膓")].join(",") === "228,85"); // U+8193
expect(() => {ms932Encoder.encode("\u8194")}).to.throw(Error, "EncodingError U+8194");
r = r && ([...ms932Encoder.encode("膕")].join(",") === "228,81"); // U+8195
expect(() => {ms932Encoder.encode("\u8196")}).to.throw(Error, "EncodingError U+8196");
expect(() => {ms932Encoder.encode("\u8197")}).to.throw(Error, "EncodingError U+8197");
expect(() => {ms932Encoder.encode("\u8198")}).to.throw(Error, "EncodingError U+8198");
expect(() => {ms932Encoder.encode("\u8199")}).to.throw(Error, "EncodingError U+8199");
r = r && ([...ms932Encoder.encode("膚")].join(",") === "149,134"); // U+819A
expect(() => {ms932Encoder.encode("\u819B")}).to.throw(Error, "EncodingError U+819B");
r = r && ([...ms932Encoder.encode("膜膝")].join(",") === "150,140,149,71"); // U+819C
expect(() => {ms932Encoder.encode("\u819E")}).to.throw(Error, "EncodingError U+819E");
expect(() => {ms932Encoder.encode("\u819F")}).to.throw(Error, "EncodingError U+819F");
r = r && ([...ms932Encoder.encode("膠")].join(",") === "228,80"); // U+81A0
expect(() => {ms932Encoder.encode("\u81A1")}).to.throw(Error, "EncodingError U+81A1");
expect(() => {ms932Encoder.encode("\u81A2")}).to.throw(Error, "EncodingError U+81A2");
r = r && ([...ms932Encoder.encode("膣膤")].join(",") === "228,83,228,82"); // U+81A3
expect(() => {ms932Encoder.encode("\u81A5")}).to.throw(Error, "EncodingError U+81A5");
expect(() => {ms932Encoder.encode("\u81A6")}).to.throw(Error, "EncodingError U+81A6");
expect(() => {ms932Encoder.encode("\u81A7")}).to.throw(Error, "EncodingError U+81A7");
r = r && ([...ms932Encoder.encode("膨膩")].join(",") === "150,99,228,86"); // U+81A8
expect(() => {ms932Encoder.encode("\u81AA")}).to.throw(Error, "EncodingError U+81AA");
expect(() => {ms932Encoder.encode("\u81AB")}).to.throw(Error, "EncodingError U+81AB");
expect(() => {ms932Encoder.encode("\u81AC")}).to.throw(Error, "EncodingError U+81AC");
expect(() => {ms932Encoder.encode("\u81AD")}).to.throw(Error, "EncodingError U+81AD");
expect(() => {ms932Encoder.encode("\u81AE")}).to.throw(Error, "EncodingError U+81AE");
expect(() => {ms932Encoder.encode("\u81AF")}).to.throw(Error, "EncodingError U+81AF");
r = r && ([...ms932Encoder.encode("膰")].join(",") === "228,87"); // U+81B0
expect(() => {ms932Encoder.encode("\u81B1")}).to.throw(Error, "EncodingError U+81B1");
expect(() => {ms932Encoder.encode("\u81B2")}).to.throw(Error, "EncodingError U+81B2");
r = r && ([...ms932Encoder.encode("膳")].join(",") === "145,86"); // U+81B3
expect(() => {ms932Encoder.encode("\u81B4")}).to.throw(Error, "EncodingError U+81B4");
r = r && ([...ms932Encoder.encode("膵")].join(",") === "228,88"); // U+81B5
expect(() => {ms932Encoder.encode("\u81B6")}).to.throw(Error, "EncodingError U+81B6");
expect(() => {ms932Encoder.encode("\u81B7")}).to.throw(Error, "EncodingError U+81B7");
r = r && ([...ms932Encoder.encode("膸")].join(",") === "228,90"); // U+81B8
expect(() => {ms932Encoder.encode("\u81B9")}).to.throw(Error, "EncodingError U+81B9");
r = r && ([...ms932Encoder.encode("膺")].join(",") === "228,94"); // U+81BA
expect(() => {ms932Encoder.encode("\u81BB")}).to.throw(Error, "EncodingError U+81BB");
expect(() => {ms932Encoder.encode("\u81BC")}).to.throw(Error, "EncodingError U+81BC");
r = r && ([...ms932Encoder.encode("膽膾膿臀")].join(",") === "228,91,228,89,148,94,228,92"); // U+81BD
expect(() => {ms932Encoder.encode("\u81C1")}).to.throw(Error, "EncodingError U+81C1");
r = r && ([...ms932Encoder.encode("臂")].join(",") === "228,93"); // U+81C2
expect(() => {ms932Encoder.encode("\u81C3")}).to.throw(Error, "EncodingError U+81C3");
expect(() => {ms932Encoder.encode("\u81C4")}).to.throw(Error, "EncodingError U+81C4");
expect(() => {ms932Encoder.encode("\u81C5")}).to.throw(Error, "EncodingError U+81C5");
r = r && ([...ms932Encoder.encode("臆")].join(",") === "137,176"); // U+81C6
expect(() => {ms932Encoder.encode("\u81C7")}).to.throw(Error, "EncodingError U+81C7");
r = r && ([...ms932Encoder.encode("臈臉")].join(",") === "228,100,228,95"); // U+81C8
expect(() => {ms932Encoder.encode("\u81CA")}).to.throw(Error, "EncodingError U+81CA");
expect(() => {ms932Encoder.encode("\u81CB")}).to.throw(Error, "EncodingError U+81CB");
expect(() => {ms932Encoder.encode("\u81CC")}).to.throw(Error, "EncodingError U+81CC");
r = r && ([...ms932Encoder.encode("臍")].join(",") === "228,96"); // U+81CD
expect(() => {ms932Encoder.encode("\u81CE")}).to.throw(Error, "EncodingError U+81CE");
expect(() => {ms932Encoder.encode("\u81CF")}).to.throw(Error, "EncodingError U+81CF");
expect(() => {ms932Encoder.encode("\u81D0")}).to.throw(Error, "EncodingError U+81D0");
r = r && ([...ms932Encoder.encode("臑")].join(",") === "228,97"); // U+81D1
expect(() => {ms932Encoder.encode("\u81D2")}).to.throw(Error, "EncodingError U+81D2");
r = r && ([...ms932Encoder.encode("臓")].join(",") === "145,159"); // U+81D3
expect(() => {ms932Encoder.encode("\u81D4")}).to.throw(Error, "EncodingError U+81D4");
expect(() => {ms932Encoder.encode("\u81D5")}).to.throw(Error, "EncodingError U+81D5");
expect(() => {ms932Encoder.encode("\u81D6")}).to.throw(Error, "EncodingError U+81D6");
expect(() => {ms932Encoder.encode("\u81D7")}).to.throw(Error, "EncodingError U+81D7");
r = r && ([...ms932Encoder.encode("臘臙臚")].join(",") === "228,99,228,98,228,101"); // U+81D8
expect(() => {ms932Encoder.encode("\u81DB")}).to.throw(Error, "EncodingError U+81DB");
expect(() => {ms932Encoder.encode("\u81DC")}).to.throw(Error, "EncodingError U+81DC");
expect(() => {ms932Encoder.encode("\u81DD")}).to.throw(Error, "EncodingError U+81DD");
expect(() => {ms932Encoder.encode("\u81DE")}).to.throw(Error, "EncodingError U+81DE");
r = r && ([...ms932Encoder.encode("臟臠")].join(",") === "228,102,228,103"); // U+81DF
expect(() => {ms932Encoder.encode("\u81E1")}).to.throw(Error, "EncodingError U+81E1");
expect(() => {ms932Encoder.encode("\u81E2")}).to.throw(Error, "EncodingError U+81E2");
r = r && ([...ms932Encoder.encode("臣")].join(",") === "144,98"); // U+81E3
expect(() => {ms932Encoder.encode("\u81E4")}).to.throw(Error, "EncodingError U+81E4");
r = r && ([...ms932Encoder.encode("臥")].join(",") === "137,231"); // U+81E5
expect(() => {ms932Encoder.encode("\u81E6")}).to.throw(Error, "EncodingError U+81E6");
r = r && ([...ms932Encoder.encode("臧臨")].join(",") === "228,104,151,213"); // U+81E7
expect(() => {ms932Encoder.encode("\u81E9")}).to.throw(Error, "EncodingError U+81E9");
r = r && ([...ms932Encoder.encode("自")].join(",") === "142,169"); // U+81EA
expect(() => {ms932Encoder.encode("\u81EB")}).to.throw(Error, "EncodingError U+81EB");
expect(() => {ms932Encoder.encode("\u81EC")}).to.throw(Error, "EncodingError U+81EC");
r = r && ([...ms932Encoder.encode("臭")].join(",") === "143,76"); // U+81ED
expect(() => {ms932Encoder.encode("\u81EE")}).to.throw(Error, "EncodingError U+81EE");
expect(() => {ms932Encoder.encode("\u81EF")}).to.throw(Error, "EncodingError U+81EF");
expect(() => {ms932Encoder.encode("\u81F0")}).to.throw(Error, "EncodingError U+81F0");
expect(() => {ms932Encoder.encode("\u81F1")}).to.throw(Error, "EncodingError U+81F1");
expect(() => {ms932Encoder.encode("\u81F2")}).to.throw(Error, "EncodingError U+81F2");
r = r && ([...ms932Encoder.encode("至致")].join(",") === "142,138,146,118"); // U+81F3
expect(() => {ms932Encoder.encode("\u81F5")}).to.throw(Error, "EncodingError U+81F5");
expect(() => {ms932Encoder.encode("\u81F6")}).to.throw(Error, "EncodingError U+81F6");
expect(() => {ms932Encoder.encode("\u81F7")}).to.throw(Error, "EncodingError U+81F7");
expect(() => {ms932Encoder.encode("\u81F8")}).to.throw(Error, "EncodingError U+81F8");
expect(() => {ms932Encoder.encode("\u81F9")}).to.throw(Error, "EncodingError U+81F9");
r = r && ([...ms932Encoder.encode("臺臻臼")].join(",") === "228,105,228,106,137,80"); // U+81FA
expect(() => {ms932Encoder.encode("\u81FD")}).to.throw(Error, "EncodingError U+81FD");
r = r && ([...ms932Encoder.encode("臾")].join(",") === "228,107"); // U+81FE
expect(() => {ms932Encoder.encode("\u81FF")}).to.throw(Error, "EncodingError U+81FF");
expect(() => {ms932Encoder.encode("\u8200")}).to.throw(Error, "EncodingError U+8200");
r = r && ([...ms932Encoder.encode("舁舂")].join(",") === "228,108,228,109"); // U+8201
expect(() => {ms932Encoder.encode("\u8203")}).to.throw(Error, "EncodingError U+8203");
expect(() => {ms932Encoder.encode("\u8204")}).to.throw(Error, "EncodingError U+8204");
r = r && ([...ms932Encoder.encode("舅")].join(",") === "228,110"); // U+8205
expect(() => {ms932Encoder.encode("\u8206")}).to.throw(Error, "EncodingError U+8206");
r = r && ([...ms932Encoder.encode("與興舉舊")].join(",") === "228,111,139,187,157,168,228,112"); // U+8207
expect(() => {ms932Encoder.encode("\u820B")}).to.throw(Error, "EncodingError U+820B");
r = r && ([...ms932Encoder.encode("舌舍舎")].join(",") === "144,227,228,113,142,201"); // U+820C
expect(() => {ms932Encoder.encode("\u820F")}).to.throw(Error, "EncodingError U+820F");
r = r && ([...ms932Encoder.encode("舐")].join(",") === "228,114"); // U+8210
expect(() => {ms932Encoder.encode("\u8211")}).to.throw(Error, "EncodingError U+8211");
r = r && ([...ms932Encoder.encode("舒")].join(",") === "152,174"); // U+8212
expect(() => {ms932Encoder.encode("\u8213")}).to.throw(Error, "EncodingError U+8213");
expect(() => {ms932Encoder.encode("\u8214")}).to.throw(Error, "EncodingError U+8214");
expect(() => {ms932Encoder.encode("\u8215")}).to.throw(Error, "EncodingError U+8215");
r = r && ([...ms932Encoder.encode("舖舗舘")].join(",") === "228,115,149,220,138,218"); // U+8216
expect(() => {ms932Encoder.encode("\u8219")}).to.throw(Error, "EncodingError U+8219");
expect(() => {ms932Encoder.encode("\u821A")}).to.throw(Error, "EncodingError U+821A");
r = r && ([...ms932Encoder.encode("舛舜")].join(",") === "145,67,143,119"); // U+821B
expect(() => {ms932Encoder.encode("\u821D")}).to.throw(Error, "EncodingError U+821D");
r = r && ([...ms932Encoder.encode("舞舟")].join(",") === "149,145,143,77"); // U+821E
expect(() => {ms932Encoder.encode("\u8220")}).to.throw(Error, "EncodingError U+8220");
expect(() => {ms932Encoder.encode("\u8221")}).to.throw(Error, "EncodingError U+8221");
expect(() => {ms932Encoder.encode("\u8222")}).to.throw(Error, "EncodingError U+8222");
expect(() => {ms932Encoder.encode("\u8223")}).to.throw(Error, "EncodingError U+8223");
expect(() => {ms932Encoder.encode("\u8224")}).to.throw(Error, "EncodingError U+8224");
expect(() => {ms932Encoder.encode("\u8225")}).to.throw(Error, "EncodingError U+8225");
expect(() => {ms932Encoder.encode("\u8226")}).to.throw(Error, "EncodingError U+8226");
expect(() => {ms932Encoder.encode("\u8227")}).to.throw(Error, "EncodingError U+8227");
expect(() => {ms932Encoder.encode("\u8228")}).to.throw(Error, "EncodingError U+8228");
r = r && ([...ms932Encoder.encode("舩航舫般")].join(",") === "228,116,141,113,228,117,148,202"); // U+8229
expect(() => {ms932Encoder.encode("\u822D")}).to.throw(Error, "EncodingError U+822D");
r = r && ([...ms932Encoder.encode("舮")].join(",") === "228,132"); // U+822E
expect(() => {ms932Encoder.encode("\u822F")}).to.throw(Error, "EncodingError U+822F");
expect(() => {ms932Encoder.encode("\u8230")}).to.throw(Error, "EncodingError U+8230");
expect(() => {ms932Encoder.encode("\u8231")}).to.throw(Error, "EncodingError U+8231");
expect(() => {ms932Encoder.encode("\u8232")}).to.throw(Error, "EncodingError U+8232");
r = r && ([...ms932Encoder.encode("舳")].join(",") === "228,119"); // U+8233
expect(() => {ms932Encoder.encode("\u8234")}).to.throw(Error, "EncodingError U+8234");
r = r && ([...ms932Encoder.encode("舵舶舷舸船")].join(",") === "145,199,148,149,140,189,228,118,145,68"); // U+8235
expect(() => {ms932Encoder.encode("\u823A")}).to.throw(Error, "EncodingError U+823A");
expect(() => {ms932Encoder.encode("\u823B")}).to.throw(Error, "EncodingError U+823B");
expect(() => {ms932Encoder.encode("\u823C")}).to.throw(Error, "EncodingError U+823C");
expect(() => {ms932Encoder.encode("\u823D")}).to.throw(Error, "EncodingError U+823D");
expect(() => {ms932Encoder.encode("\u823E")}).to.throw(Error, "EncodingError U+823E");
expect(() => {ms932Encoder.encode("\u823F")}).to.throw(Error, "EncodingError U+823F");
r = r && ([...ms932Encoder.encode("艀")].join(",") === "228,120"); // U+8240
expect(() => {ms932Encoder.encode("\u8241")}).to.throw(Error, "EncodingError U+8241");
expect(() => {ms932Encoder.encode("\u8242")}).to.throw(Error, "EncodingError U+8242");
expect(() => {ms932Encoder.encode("\u8243")}).to.throw(Error, "EncodingError U+8243");
expect(() => {ms932Encoder.encode("\u8244")}).to.throw(Error, "EncodingError U+8244");
expect(() => {ms932Encoder.encode("\u8245")}).to.throw(Error, "EncodingError U+8245");
expect(() => {ms932Encoder.encode("\u8246")}).to.throw(Error, "EncodingError U+8246");
r = r && ([...ms932Encoder.encode("艇")].join(",") === "146,248"); // U+8247
expect(() => {ms932Encoder.encode("\u8248")}).to.throw(Error, "EncodingError U+8248");
expect(() => {ms932Encoder.encode("\u8249")}).to.throw(Error, "EncodingError U+8249");
expect(() => {ms932Encoder.encode("\u824A")}).to.throw(Error, "EncodingError U+824A");
expect(() => {ms932Encoder.encode("\u824B")}).to.throw(Error, "EncodingError U+824B");
expect(() => {ms932Encoder.encode("\u824C")}).to.throw(Error, "EncodingError U+824C");
expect(() => {ms932Encoder.encode("\u824D")}).to.throw(Error, "EncodingError U+824D");
expect(() => {ms932Encoder.encode("\u824E")}).to.throw(Error, "EncodingError U+824E");
expect(() => {ms932Encoder.encode("\u824F")}).to.throw(Error, "EncodingError U+824F");
expect(() => {ms932Encoder.encode("\u8250")}).to.throw(Error, "EncodingError U+8250");
expect(() => {ms932Encoder.encode("\u8251")}).to.throw(Error, "EncodingError U+8251");
expect(() => {ms932Encoder.encode("\u8252")}).to.throw(Error, "EncodingError U+8252");
expect(() => {ms932Encoder.encode("\u8253")}).to.throw(Error, "EncodingError U+8253");
expect(() => {ms932Encoder.encode("\u8254")}).to.throw(Error, "EncodingError U+8254");
expect(() => {ms932Encoder.encode("\u8255")}).to.throw(Error, "EncodingError U+8255");
expect(() => {ms932Encoder.encode("\u8256")}).to.throw(Error, "EncodingError U+8256");
expect(() => {ms932Encoder.encode("\u8257")}).to.throw(Error, "EncodingError U+8257");
r = r && ([...ms932Encoder.encode("艘艙艚")].join(",") === "228,122,228,121,228,124"); // U+8258
expect(() => {ms932Encoder.encode("\u825B")}).to.throw(Error, "EncodingError U+825B");
expect(() => {ms932Encoder.encode("\u825C")}).to.throw(Error, "EncodingError U+825C");
r = r && ([...ms932Encoder.encode("艝")].join(",") === "228,123"); // U+825D
expect(() => {ms932Encoder.encode("\u825E")}).to.throw(Error, "EncodingError U+825E");
r = r && ([...ms932Encoder.encode("艟")].join(",") === "228,125"); // U+825F
expect(() => {ms932Encoder.encode("\u8260")}).to.throw(Error, "EncodingError U+8260");
expect(() => {ms932Encoder.encode("\u8261")}).to.throw(Error, "EncodingError U+8261");
r = r && ([...ms932Encoder.encode("艢")].join(",") === "228,128"); // U+8262
expect(() => {ms932Encoder.encode("\u8263")}).to.throw(Error, "EncodingError U+8263");
r = r && ([...ms932Encoder.encode("艤")].join(",") === "228,126"); // U+8264
expect(() => {ms932Encoder.encode("\u8265")}).to.throw(Error, "EncodingError U+8265");
r = r && ([...ms932Encoder.encode("艦")].join(",") === "138,205"); // U+8266
expect(() => {ms932Encoder.encode("\u8267")}).to.throw(Error, "EncodingError U+8267");
r = r && ([...ms932Encoder.encode("艨")].join(",") === "228,129"); // U+8268
expect(() => {ms932Encoder.encode("\u8269")}).to.throw(Error, "EncodingError U+8269");
r = r && ([...ms932Encoder.encode("艪艫")].join(",") === "228,130,228,131"); // U+826A
expect(() => {ms932Encoder.encode("\u826C")}).to.throw(Error, "EncodingError U+826C");
expect(() => {ms932Encoder.encode("\u826D")}).to.throw(Error, "EncodingError U+826D");
r = r && ([...ms932Encoder.encode("艮良")].join(",") === "141,175,151,199"); // U+826E
expect(() => {ms932Encoder.encode("\u8270")}).to.throw(Error, "EncodingError U+8270");
r = r && ([...ms932Encoder.encode("艱色")].join(",") === "228,133,144,70"); // U+8271
expect(() => {ms932Encoder.encode("\u8273")}).to.throw(Error, "EncodingError U+8273");
expect(() => {ms932Encoder.encode("\u8274")}).to.throw(Error, "EncodingError U+8274");
expect(() => {ms932Encoder.encode("\u8275")}).to.throw(Error, "EncodingError U+8275");
r = r && ([...ms932Encoder.encode("艶艷艸")].join(",") === "137,144,228,134,228,135"); // U+8276
expect(() => {ms932Encoder.encode("\u8279")}).to.throw(Error, "EncodingError U+8279");
expect(() => {ms932Encoder.encode("\u827A")}).to.throw(Error, "EncodingError U+827A");
expect(() => {ms932Encoder.encode("\u827B")}).to.throw(Error, "EncodingError U+827B");
expect(() => {ms932Encoder.encode("\u827C")}).to.throw(Error, "EncodingError U+827C");
expect(() => {ms932Encoder.encode("\u827D")}).to.throw(Error, "EncodingError U+827D");
r = r && ([...ms932Encoder.encode("艾")].join(",") === "228,136"); // U+827E
expect(() => {ms932Encoder.encode("\u827F")}).to.throw(Error, "EncodingError U+827F");
expect(() => {ms932Encoder.encode("\u8280")}).to.throw(Error, "EncodingError U+8280");
expect(() => {ms932Encoder.encode("\u8281")}).to.throw(Error, "EncodingError U+8281");
expect(() => {ms932Encoder.encode("\u8282")}).to.throw(Error, "EncodingError U+8282");
expect(() => {ms932Encoder.encode("\u8283")}).to.throw(Error, "EncodingError U+8283");
expect(() => {ms932Encoder.encode("\u8284")}).to.throw(Error, "EncodingError U+8284");
expect(() => {ms932Encoder.encode("\u8285")}).to.throw(Error, "EncodingError U+8285");
expect(() => {ms932Encoder.encode("\u8286")}).to.throw(Error, "EncodingError U+8286");
expect(() => {ms932Encoder.encode("\u8287")}).to.throw(Error, "EncodingError U+8287");
expect(() => {ms932Encoder.encode("\u8288")}).to.throw(Error, "EncodingError U+8288");
expect(() => {ms932Encoder.encode("\u8289")}).to.throw(Error, "EncodingError U+8289");
expect(() => {ms932Encoder.encode("\u828A")}).to.throw(Error, "EncodingError U+828A");
r = r && ([...ms932Encoder.encode("芋")].join(",") === "136,240"); // U+828B
expect(() => {ms932Encoder.encode("\u828C")}).to.throw(Error, "EncodingError U+828C");
r = r && ([...ms932Encoder.encode("芍")].join(",") === "228,137"); // U+828D
expect(() => {ms932Encoder.encode("\u828E")}).to.throw(Error, "EncodingError U+828E");
expect(() => {ms932Encoder.encode("\u828F")}).to.throw(Error, "EncodingError U+828F");
expect(() => {ms932Encoder.encode("\u8290")}).to.throw(Error, "EncodingError U+8290");
expect(() => {ms932Encoder.encode("\u8291")}).to.throw(Error, "EncodingError U+8291");
r = r && ([...ms932Encoder.encode("芒")].join(",") === "228,138"); // U+8292
expect(() => {ms932Encoder.encode("\u8293")}).to.throw(Error, "EncodingError U+8293");
expect(() => {ms932Encoder.encode("\u8294")}).to.throw(Error, "EncodingError U+8294");
expect(() => {ms932Encoder.encode("\u8295")}).to.throw(Error, "EncodingError U+8295");
expect(() => {ms932Encoder.encode("\u8296")}).to.throw(Error, "EncodingError U+8296");
expect(() => {ms932Encoder.encode("\u8297")}).to.throw(Error, "EncodingError U+8297");
expect(() => {ms932Encoder.encode("\u8298")}).to.throw(Error, "EncodingError U+8298");
r = r && ([...ms932Encoder.encode("芙")].join(",") === "149,135"); // U+8299
expect(() => {ms932Encoder.encode("\u829A")}).to.throw(Error, "EncodingError U+829A");
expect(() => {ms932Encoder.encode("\u829B")}).to.throw(Error, "EncodingError U+829B");
expect(() => {ms932Encoder.encode("\u829C")}).to.throw(Error, "EncodingError U+829C");
r = r && ([...ms932Encoder.encode("芝")].join(",") === "142,197"); // U+829D
expect(() => {ms932Encoder.encode("\u829E")}).to.throw(Error, "EncodingError U+829E");
r = r && ([...ms932Encoder.encode("芟")].join(",") === "228,140"); // U+829F
expect(() => {ms932Encoder.encode("\u82A0")}).to.throw(Error, "EncodingError U+82A0");
expect(() => {ms932Encoder.encode("\u82A1")}).to.throw(Error, "EncodingError U+82A1");
expect(() => {ms932Encoder.encode("\u82A2")}).to.throw(Error, "EncodingError U+82A2");
expect(() => {ms932Encoder.encode("\u82A3")}).to.throw(Error, "EncodingError U+82A3");
expect(() => {ms932Encoder.encode("\u82A4")}).to.throw(Error, "EncodingError U+82A4");
r = r && ([...ms932Encoder.encode("芥芦")].join(",") === "138,72,136,176"); // U+82A5
expect(() => {ms932Encoder.encode("\u82A7")}).to.throw(Error, "EncodingError U+82A7");
expect(() => {ms932Encoder.encode("\u82A8")}).to.throw(Error, "EncodingError U+82A8");
expect(() => {ms932Encoder.encode("\u82A9")}).to.throw(Error, "EncodingError U+82A9");
expect(() => {ms932Encoder.encode("\u82AA")}).to.throw(Error, "EncodingError U+82AA");
r = r && ([...ms932Encoder.encode("芫芬芭")].join(",") === "228,139,228,142,148,109"); // U+82AB
expect(() => {ms932Encoder.encode("\u82AE")}).to.throw(Error, "EncodingError U+82AE");
r = r && ([...ms932Encoder.encode("芯")].join(",") === "144,99"); // U+82AF
expect(() => {ms932Encoder.encode("\u82B0")}).to.throw(Error, "EncodingError U+82B0");
r = r && ([...ms932Encoder.encode("花")].join(",") === "137,212"); // U+82B1
expect(() => {ms932Encoder.encode("\u82B2")}).to.throw(Error, "EncodingError U+82B2");
r = r && ([...ms932Encoder.encode("芳")].join(",") === "150,70"); // U+82B3
expect(() => {ms932Encoder.encode("\u82B4")}).to.throw(Error, "EncodingError U+82B4");
expect(() => {ms932Encoder.encode("\u82B5")}).to.throw(Error, "EncodingError U+82B5");
expect(() => {ms932Encoder.encode("\u82B6")}).to.throw(Error, "EncodingError U+82B6");
expect(() => {ms932Encoder.encode("\u82B7")}).to.throw(Error, "EncodingError U+82B7");
r = r && ([...ms932Encoder.encode("芸芹")].join(",") === "140,124,139,218"); // U+82B8
expect(() => {ms932Encoder.encode("\u82BA")}).to.throw(Error, "EncodingError U+82BA");
r = r && ([...ms932Encoder.encode("芻")].join(",") === "228,141"); // U+82BB
expect(() => {ms932Encoder.encode("\u82BC")}).to.throw(Error, "EncodingError U+82BC");
r = r && ([...ms932Encoder.encode("芽")].join(",") === "137,232"); // U+82BD
expect(() => {ms932Encoder.encode("\u82BE")}).to.throw(Error, "EncodingError U+82BE");
expect(() => {ms932Encoder.encode("\u82BF")}).to.throw(Error, "EncodingError U+82BF");
expect(() => {ms932Encoder.encode("\u82C0")}).to.throw(Error, "EncodingError U+82C0");
expect(() => {ms932Encoder.encode("\u82C1")}).to.throw(Error, "EncodingError U+82C1");
expect(() => {ms932Encoder.encode("\u82C2")}).to.throw(Error, "EncodingError U+82C2");
expect(() => {ms932Encoder.encode("\u82C3")}).to.throw(Error, "EncodingError U+82C3");
expect(() => {ms932Encoder.encode("\u82C4")}).to.throw(Error, "EncodingError U+82C4");
r = r && ([...ms932Encoder.encode("苅")].join(",") === "138,161"); // U+82C5
expect(() => {ms932Encoder.encode("\u82C6")}).to.throw(Error, "EncodingError U+82C6");
expect(() => {ms932Encoder.encode("\u82C7")}).to.throw(Error, "EncodingError U+82C7");
expect(() => {ms932Encoder.encode("\u82C8")}).to.throw(Error, "EncodingError U+82C8");
expect(() => {ms932Encoder.encode("\u82C9")}).to.throw(Error, "EncodingError U+82C9");
expect(() => {ms932Encoder.encode("\u82CA")}).to.throw(Error, "EncodingError U+82CA");
expect(() => {ms932Encoder.encode("\u82CB")}).to.throw(Error, "EncodingError U+82CB");
expect(() => {ms932Encoder.encode("\u82CC")}).to.throw(Error, "EncodingError U+82CC");
expect(() => {ms932Encoder.encode("\u82CD")}).to.throw(Error, "EncodingError U+82CD");
expect(() => {ms932Encoder.encode("\u82CE")}).to.throw(Error, "EncodingError U+82CE");
expect(() => {ms932Encoder.encode("\u82CF")}).to.throw(Error, "EncodingError U+82CF");
expect(() => {ms932Encoder.encode("\u82D0")}).to.throw(Error, "EncodingError U+82D0");
r = r && ([...ms932Encoder.encode("苑苒苓苔")].join(",") === "137,145,228,146,151,232,145,219"); // U+82D1
expect(() => {ms932Encoder.encode("\u82D5")}).to.throw(Error, "EncodingError U+82D5");
expect(() => {ms932Encoder.encode("\u82D6")}).to.throw(Error, "EncodingError U+82D6");
r = r && ([...ms932Encoder.encode("苗")].join(",") === "149,99"); // U+82D7
expect(() => {ms932Encoder.encode("\u82D8")}).to.throw(Error, "EncodingError U+82D8");
r = r && ([...ms932Encoder.encode("苙")].join(",") === "228,158"); // U+82D9
expect(() => {ms932Encoder.encode("\u82DA")}).to.throw(Error, "EncodingError U+82DA");
r = r && ([...ms932Encoder.encode("苛苜")].join(",") === "137,213,228,156"); // U+82DB
expect(() => {ms932Encoder.encode("\u82DD")}).to.throw(Error, "EncodingError U+82DD");
r = r && ([...ms932Encoder.encode("苞苟")].join(",") === "228,154,228,145"); // U+82DE
expect(() => {ms932Encoder.encode("\u82E0")}).to.throw(Error, "EncodingError U+82E0");
r = r && ([...ms932Encoder.encode("苡")].join(",") === "228,143"); // U+82E1
expect(() => {ms932Encoder.encode("\u82E2")}).to.throw(Error, "EncodingError U+82E2");
r = r && ([...ms932Encoder.encode("苣")].join(",") === "228,144"); // U+82E3
expect(() => {ms932Encoder.encode("\u82E4")}).to.throw(Error, "EncodingError U+82E4");
r = r && ([...ms932Encoder.encode("若苦苧")].join(",") === "142,225,139,234,146,151"); // U+82E5
expect(() => {ms932Encoder.encode("\u82E8")}).to.throw(Error, "EncodingError U+82E8");
expect(() => {ms932Encoder.encode("\u82E9")}).to.throw(Error, "EncodingError U+82E9");
expect(() => {ms932Encoder.encode("\u82EA")}).to.throw(Error, "EncodingError U+82EA");
r = r && ([...ms932Encoder.encode("苫")].join(",") === "147,207"); // U+82EB
expect(() => {ms932Encoder.encode("\u82EC")}).to.throw(Error, "EncodingError U+82EC");
expect(() => {ms932Encoder.encode("\u82ED")}).to.throw(Error, "EncodingError U+82ED");
expect(() => {ms932Encoder.encode("\u82EE")}).to.throw(Error, "EncodingError U+82EE");
expect(() => {ms932Encoder.encode("\u82EF")}).to.throw(Error, "EncodingError U+82EF");
expect(() => {ms932Encoder.encode("\u82F0")}).to.throw(Error, "EncodingError U+82F0");
r = r && ([...ms932Encoder.encode("英")].join(",") === "137,112"); // U+82F1
expect(() => {ms932Encoder.encode("\u82F2")}).to.throw(Error, "EncodingError U+82F2");
r = r && ([...ms932Encoder.encode("苳苴")].join(",") === "228,148,228,147"); // U+82F3
expect(() => {ms932Encoder.encode("\u82F5")}).to.throw(Error, "EncodingError U+82F5");
expect(() => {ms932Encoder.encode("\u82F6")}).to.throw(Error, "EncodingError U+82F6");
expect(() => {ms932Encoder.encode("\u82F7")}).to.throw(Error, "EncodingError U+82F7");
expect(() => {ms932Encoder.encode("\u82F8")}).to.throw(Error, "EncodingError U+82F8");
r = r && ([...ms932Encoder.encode("苹苺苻")].join(",") === "228,153,228,149,228,152"); // U+82F9
expect(() => {ms932Encoder.encode("\u82FC")}).to.throw(Error, "EncodingError U+82FC");
expect(() => {ms932Encoder.encode("\u82FD")}).to.throw(Error, "EncodingError U+82FD");
expect(() => {ms932Encoder.encode("\u82FE")}).to.throw(Error, "EncodingError U+82FE");
expect(() => {ms932Encoder.encode("\u82FF")}).to.throw(Error, "EncodingError U+82FF");
expect(() => {ms932Encoder.encode("\u8300")}).to.throw(Error, "EncodingError U+8300");
r = r && ([...ms932Encoder.encode("茁茂范茄茅茆")].join(",") === "251,147,150,206,228,151,137,214,138,157,228,155"); // U+8301
expect(() => {ms932Encoder.encode("\u8307")}).to.throw(Error, "EncodingError U+8307");
expect(() => {ms932Encoder.encode("\u8308")}).to.throw(Error, "EncodingError U+8308");
r = r && ([...ms932Encoder.encode("茉")].join(",") === "228,157"); // U+8309
expect(() => {ms932Encoder.encode("\u830A")}).to.throw(Error, "EncodingError U+830A");
expect(() => {ms932Encoder.encode("\u830B")}).to.throw(Error, "EncodingError U+830B");
expect(() => {ms932Encoder.encode("\u830C")}).to.throw(Error, "EncodingError U+830C");
expect(() => {ms932Encoder.encode("\u830D")}).to.throw(Error, "EncodingError U+830D");
r = r && ([...ms932Encoder.encode("茎")].join(",") === "140,115"); // U+830E
expect(() => {ms932Encoder.encode("\u830F")}).to.throw(Error, "EncodingError U+830F");
expect(() => {ms932Encoder.encode("\u8310")}).to.throw(Error, "EncodingError U+8310");
expect(() => {ms932Encoder.encode("\u8311")}).to.throw(Error, "EncodingError U+8311");
expect(() => {ms932Encoder.encode("\u8312")}).to.throw(Error, "EncodingError U+8312");
expect(() => {ms932Encoder.encode("\u8313")}).to.throw(Error, "EncodingError U+8313");
expect(() => {ms932Encoder.encode("\u8314")}).to.throw(Error, "EncodingError U+8314");
expect(() => {ms932Encoder.encode("\u8315")}).to.throw(Error, "EncodingError U+8315");
r = r && ([...ms932Encoder.encode("茖茗茘")].join(",") === "228,161,228,170,228,171"); // U+8316
expect(() => {ms932Encoder.encode("\u8319")}).to.throw(Error, "EncodingError U+8319");
expect(() => {ms932Encoder.encode("\u831A")}).to.throw(Error, "EncodingError U+831A");
expect(() => {ms932Encoder.encode("\u831B")}).to.throw(Error, "EncodingError U+831B");
r = r && ([...ms932Encoder.encode("茜")].join(",") === "136,169"); // U+831C
expect(() => {ms932Encoder.encode("\u831D")}).to.throw(Error, "EncodingError U+831D");
expect(() => {ms932Encoder.encode("\u831E")}).to.throw(Error, "EncodingError U+831E");
expect(() => {ms932Encoder.encode("\u831F")}).to.throw(Error, "EncodingError U+831F");
expect(() => {ms932Encoder.encode("\u8320")}).to.throw(Error, "EncodingError U+8320");
expect(() => {ms932Encoder.encode("\u8321")}).to.throw(Error, "EncodingError U+8321");
expect(() => {ms932Encoder.encode("\u8322")}).to.throw(Error, "EncodingError U+8322");
r = r && ([...ms932Encoder.encode("茣")].join(",") === "228,178"); // U+8323
expect(() => {ms932Encoder.encode("\u8324")}).to.throw(Error, "EncodingError U+8324");
expect(() => {ms932Encoder.encode("\u8325")}).to.throw(Error, "EncodingError U+8325");
expect(() => {ms932Encoder.encode("\u8326")}).to.throw(Error, "EncodingError U+8326");
expect(() => {ms932Encoder.encode("\u8327")}).to.throw(Error, "EncodingError U+8327");
r = r && ([...ms932Encoder.encode("茨")].join(",") === "136,239"); // U+8328
expect(() => {ms932Encoder.encode("\u8329")}).to.throw(Error, "EncodingError U+8329");
expect(() => {ms932Encoder.encode("\u832A")}).to.throw(Error, "EncodingError U+832A");
r = r && ([...ms932Encoder.encode("茫")].join(",") === "228,169"); // U+832B
expect(() => {ms932Encoder.encode("\u832C")}).to.throw(Error, "EncodingError U+832C");
expect(() => {ms932Encoder.encode("\u832D")}).to.throw(Error, "EncodingError U+832D");
expect(() => {ms932Encoder.encode("\u832E")}).to.throw(Error, "EncodingError U+832E");
r = r && ([...ms932Encoder.encode("茯")].join(",") === "228,168"); // U+832F
expect(() => {ms932Encoder.encode("\u8330")}).to.throw(Error, "EncodingError U+8330");
r = r && ([...ms932Encoder.encode("茱茲")].join(",") === "228,163,228,162"); // U+8331
expect(() => {ms932Encoder.encode("\u8333")}).to.throw(Error, "EncodingError U+8333");
r = r && ([...ms932Encoder.encode("茴茵茶")].join(",") === "228,160,228,159,146,131"); // U+8334
expect(() => {ms932Encoder.encode("\u8337")}).to.throw(Error, "EncodingError U+8337");
r = r && ([...ms932Encoder.encode("茸茹")].join(",") === "145,249,228,165"); // U+8338
expect(() => {ms932Encoder.encode("\u833A")}).to.throw(Error, "EncodingError U+833A");
expect(() => {ms932Encoder.encode("\u833B")}).to.throw(Error, "EncodingError U+833B");
expect(() => {ms932Encoder.encode("\u833C")}).to.throw(Error, "EncodingError U+833C");
expect(() => {ms932Encoder.encode("\u833D")}).to.throw(Error, "EncodingError U+833D");
expect(() => {ms932Encoder.encode("\u833E")}).to.throw(Error, "EncodingError U+833E");
expect(() => {ms932Encoder.encode("\u833F")}).to.throw(Error, "EncodingError U+833F");
r = r && ([...ms932Encoder.encode("荀")].join(",") === "228,164"); // U+8340
expect(() => {ms932Encoder.encode("\u8341")}).to.throw(Error, "EncodingError U+8341");
expect(() => {ms932Encoder.encode("\u8342")}).to.throw(Error, "EncodingError U+8342");
expect(() => {ms932Encoder.encode("\u8343")}).to.throw(Error, "EncodingError U+8343");
expect(() => {ms932Encoder.encode("\u8344")}).to.throw(Error, "EncodingError U+8344");
r = r && ([...ms932Encoder.encode("荅")].join(",") === "228,167"); // U+8345
expect(() => {ms932Encoder.encode("\u8346")}).to.throw(Error, "EncodingError U+8346");
expect(() => {ms932Encoder.encode("\u8347")}).to.throw(Error, "EncodingError U+8347");
expect(() => {ms932Encoder.encode("\u8348")}).to.throw(Error, "EncodingError U+8348");
r = r && ([...ms932Encoder.encode("草荊")].join(",") === "145,144,140,116"); // U+8349
expect(() => {ms932Encoder.encode("\u834B")}).to.throw(Error, "EncodingError U+834B");
expect(() => {ms932Encoder.encode("\u834C")}).to.throw(Error, "EncodingError U+834C");
expect(() => {ms932Encoder.encode("\u834D")}).to.throw(Error, "EncodingError U+834D");
expect(() => {ms932Encoder.encode("\u834E")}).to.throw(Error, "EncodingError U+834E");
r = r && ([...ms932Encoder.encode("荏荐")].join(",") === "137,96,228,166"); // U+834F
expect(() => {ms932Encoder.encode("\u8351")}).to.throw(Error, "EncodingError U+8351");
r = r && ([...ms932Encoder.encode("荒")].join(",") === "141,114"); // U+8352
expect(() => {ms932Encoder.encode("\u8353")}).to.throw(Error, "EncodingError U+8353");
expect(() => {ms932Encoder.encode("\u8354")}).to.throw(Error, "EncodingError U+8354");
expect(() => {ms932Encoder.encode("\u8355")}).to.throw(Error, "EncodingError U+8355");
expect(() => {ms932Encoder.encode("\u8356")}).to.throw(Error, "EncodingError U+8356");
expect(() => {ms932Encoder.encode("\u8357")}).to.throw(Error, "EncodingError U+8357");
r = r && ([...ms932Encoder.encode("荘")].join(",") === "145,145"); // U+8358
expect(() => {ms932Encoder.encode("\u8359")}).to.throw(Error, "EncodingError U+8359");
expect(() => {ms932Encoder.encode("\u835A")}).to.throw(Error, "EncodingError U+835A");
expect(() => {ms932Encoder.encode("\u835B")}).to.throw(Error, "EncodingError U+835B");
expect(() => {ms932Encoder.encode("\u835C")}).to.throw(Error, "EncodingError U+835C");
expect(() => {ms932Encoder.encode("\u835D")}).to.throw(Error, "EncodingError U+835D");
expect(() => {ms932Encoder.encode("\u835E")}).to.throw(Error, "EncodingError U+835E");
expect(() => {ms932Encoder.encode("\u835F")}).to.throw(Error, "EncodingError U+835F");
expect(() => {ms932Encoder.encode("\u8360")}).to.throw(Error, "EncodingError U+8360");
expect(() => {ms932Encoder.encode("\u8361")}).to.throw(Error, "EncodingError U+8361");
r = r && ([...ms932Encoder.encode("荢")].join(",") === "251,148"); // U+8362
expect(() => {ms932Encoder.encode("\u8363")}).to.throw(Error, "EncodingError U+8363");
expect(() => {ms932Encoder.encode("\u8364")}).to.throw(Error, "EncodingError U+8364");
expect(() => {ms932Encoder.encode("\u8365")}).to.throw(Error, "EncodingError U+8365");
expect(() => {ms932Encoder.encode("\u8366")}).to.throw(Error, "EncodingError U+8366");
expect(() => {ms932Encoder.encode("\u8367")}).to.throw(Error, "EncodingError U+8367");
expect(() => {ms932Encoder.encode("\u8368")}).to.throw(Error, "EncodingError U+8368");
expect(() => {ms932Encoder.encode("\u8369")}).to.throw(Error, "EncodingError U+8369");
expect(() => {ms932Encoder.encode("\u836A")}).to.throw(Error, "EncodingError U+836A");
expect(() => {ms932Encoder.encode("\u836B")}).to.throw(Error, "EncodingError U+836B");
expect(() => {ms932Encoder.encode("\u836C")}).to.throw(Error, "EncodingError U+836C");
expect(() => {ms932Encoder.encode("\u836D")}).to.throw(Error, "EncodingError U+836D");
expect(() => {ms932Encoder.encode("\u836E")}).to.throw(Error, "EncodingError U+836E");
expect(() => {ms932Encoder.encode("\u836F")}).to.throw(Error, "EncodingError U+836F");
expect(() => {ms932Encoder.encode("\u8370")}).to.throw(Error, "EncodingError U+8370");
expect(() => {ms932Encoder.encode("\u8371")}).to.throw(Error, "EncodingError U+8371");
expect(() => {ms932Encoder.encode("\u8372")}).to.throw(Error, "EncodingError U+8372");
r = r && ([...ms932Encoder.encode("荳")].join(",") === "228,184"); // U+8373
expect(() => {ms932Encoder.encode("\u8374")}).to.throw(Error, "EncodingError U+8374");
r = r && ([...ms932Encoder.encode("荵")].join(",") === "228,185"); // U+8375
expect(() => {ms932Encoder.encode("\u8376")}).to.throw(Error, "EncodingError U+8376");
r = r && ([...ms932Encoder.encode("荷")].join(",") === "137,215"); // U+8377
expect(() => {ms932Encoder.encode("\u8378")}).to.throw(Error, "EncodingError U+8378");
expect(() => {ms932Encoder.encode("\u8379")}).to.throw(Error, "EncodingError U+8379");
expect(() => {ms932Encoder.encode("\u837A")}).to.throw(Error, "EncodingError U+837A");
r = r && ([...ms932Encoder.encode("荻荼")].join(",") === "137,172,228,182"); // U+837B
expect(() => {ms932Encoder.encode("\u837D")}).to.throw(Error, "EncodingError U+837D");
expect(() => {ms932Encoder.encode("\u837E")}).to.throw(Error, "EncodingError U+837E");
r = r && ([...ms932Encoder.encode("荿")].join(",") === "251,149"); // U+837F
expect(() => {ms932Encoder.encode("\u8380")}).to.throw(Error, "EncodingError U+8380");
expect(() => {ms932Encoder.encode("\u8381")}).to.throw(Error, "EncodingError U+8381");
expect(() => {ms932Encoder.encode("\u8382")}).to.throw(Error, "EncodingError U+8382");
expect(() => {ms932Encoder.encode("\u8383")}).to.throw(Error, "EncodingError U+8383");
expect(() => {ms932Encoder.encode("\u8384")}).to.throw(Error, "EncodingError U+8384");
r = r && ([...ms932Encoder.encode("莅")].join(",") === "228,172"); // U+8385
expect(() => {ms932Encoder.encode("\u8386")}).to.throw(Error, "EncodingError U+8386");
r = r && ([...ms932Encoder.encode("莇")].join(",") === "228,180"); // U+8387
expect(() => {ms932Encoder.encode("\u8388")}).to.throw(Error, "EncodingError U+8388");
r = r && ([...ms932Encoder.encode("莉莊")].join(",") === "228,187,228,181"); // U+8389
expect(() => {ms932Encoder.encode("\u838B")}).to.throw(Error, "EncodingError U+838B");
expect(() => {ms932Encoder.encode("\u838C")}).to.throw(Error, "EncodingError U+838C");
expect(() => {ms932Encoder.encode("\u838D")}).to.throw(Error, "EncodingError U+838D");
r = r && ([...ms932Encoder.encode("莎")].join(",") === "228,179"); // U+838E
expect(() => {ms932Encoder.encode("\u838F")}).to.throw(Error, "EncodingError U+838F");
expect(() => {ms932Encoder.encode("\u8390")}).to.throw(Error, "EncodingError U+8390");
expect(() => {ms932Encoder.encode("\u8391")}).to.throw(Error, "EncodingError U+8391");
expect(() => {ms932Encoder.encode("\u8392")}).to.throw(Error, "EncodingError U+8392");
r = r && ([...ms932Encoder.encode("莓")].join(",") === "228,150"); // U+8393
expect(() => {ms932Encoder.encode("\u8394")}).to.throw(Error, "EncodingError U+8394");
expect(() => {ms932Encoder.encode("\u8395")}).to.throw(Error, "EncodingError U+8395");
r = r && ([...ms932Encoder.encode("莖")].join(",") === "228,177"); // U+8396
expect(() => {ms932Encoder.encode("\u8397")}).to.throw(Error, "EncodingError U+8397");
expect(() => {ms932Encoder.encode("\u8398")}).to.throw(Error, "EncodingError U+8398");
expect(() => {ms932Encoder.encode("\u8399")}).to.throw(Error, "EncodingError U+8399");
r = r && ([...ms932Encoder.encode("莚")].join(",") === "228,173"); // U+839A
expect(() => {ms932Encoder.encode("\u839B")}).to.throw(Error, "EncodingError U+839B");
expect(() => {ms932Encoder.encode("\u839C")}).to.throw(Error, "EncodingError U+839C");
expect(() => {ms932Encoder.encode("\u839D")}).to.throw(Error, "EncodingError U+839D");
r = r && ([...ms932Encoder.encode("莞莟莠")].join(",") === "138,206,228,175,228,186"); // U+839E
expect(() => {ms932Encoder.encode("\u83A1")}).to.throw(Error, "EncodingError U+83A1");
r = r && ([...ms932Encoder.encode("莢")].join(",") === "228,176"); // U+83A2
expect(() => {ms932Encoder.encode("\u83A3")}).to.throw(Error, "EncodingError U+83A3");
expect(() => {ms932Encoder.encode("\u83A4")}).to.throw(Error, "EncodingError U+83A4");
expect(() => {ms932Encoder.encode("\u83A5")}).to.throw(Error, "EncodingError U+83A5");
expect(() => {ms932Encoder.encode("\u83A6")}).to.throw(Error, "EncodingError U+83A6");
expect(() => {ms932Encoder.encode("\u83A7")}).to.throw(Error, "EncodingError U+83A7");
r = r && ([...ms932Encoder.encode("莨")].join(",") === "228,188"); // U+83A8
expect(() => {ms932Encoder.encode("\u83A9")}).to.throw(Error, "EncodingError U+83A9");
r = r && ([...ms932Encoder.encode("莪莫")].join(",") === "228,174,148,156"); // U+83AA
expect(() => {ms932Encoder.encode("\u83AC")}).to.throw(Error, "EncodingError U+83AC");
expect(() => {ms932Encoder.encode("\u83AD")}).to.throw(Error, "EncodingError U+83AD");
expect(() => {ms932Encoder.encode("\u83AE")}).to.throw(Error, "EncodingError U+83AE");
expect(() => {ms932Encoder.encode("\u83AF")}).to.throw(Error, "EncodingError U+83AF");
expect(() => {ms932Encoder.encode("\u83B0")}).to.throw(Error, "EncodingError U+83B0");
r = r && ([...ms932Encoder.encode("莱")].join(",") === "151,137"); // U+83B1
expect(() => {ms932Encoder.encode("\u83B2")}).to.throw(Error, "EncodingError U+83B2");
expect(() => {ms932Encoder.encode("\u83B3")}).to.throw(Error, "EncodingError U+83B3");
expect(() => {ms932Encoder.encode("\u83B4")}).to.throw(Error, "EncodingError U+83B4");
r = r && ([...ms932Encoder.encode("莵")].join(",") === "228,183"); // U+83B5
expect(() => {ms932Encoder.encode("\u83B6")}).to.throw(Error, "EncodingError U+83B6");
expect(() => {ms932Encoder.encode("\u83B7")}).to.throw(Error, "EncodingError U+83B7");
expect(() => {ms932Encoder.encode("\u83B8")}).to.throw(Error, "EncodingError U+83B8");
expect(() => {ms932Encoder.encode("\u83B9")}).to.throw(Error, "EncodingError U+83B9");
expect(() => {ms932Encoder.encode("\u83BA")}).to.throw(Error, "EncodingError U+83BA");
expect(() => {ms932Encoder.encode("\u83BB")}).to.throw(Error, "EncodingError U+83BB");
expect(() => {ms932Encoder.encode("\u83BC")}).to.throw(Error, "EncodingError U+83BC");
r = r && ([...ms932Encoder.encode("莽")].join(",") === "228,205"); // U+83BD
expect(() => {ms932Encoder.encode("\u83BE")}).to.throw(Error, "EncodingError U+83BE");
expect(() => {ms932Encoder.encode("\u83BF")}).to.throw(Error, "EncodingError U+83BF");
expect(() => {ms932Encoder.encode("\u83C0")}).to.throw(Error, "EncodingError U+83C0");
r = r && ([...ms932Encoder.encode("菁")].join(",") === "228,197"); // U+83C1
expect(() => {ms932Encoder.encode("\u83C2")}).to.throw(Error, "EncodingError U+83C2");
expect(() => {ms932Encoder.encode("\u83C3")}).to.throw(Error, "EncodingError U+83C3");
expect(() => {ms932Encoder.encode("\u83C4")}).to.throw(Error, "EncodingError U+83C4");
r = r && ([...ms932Encoder.encode("菅")].join(",") === "144,155"); // U+83C5
expect(() => {ms932Encoder.encode("\u83C6")}).to.throw(Error, "EncodingError U+83C6");
r = r && ([...ms932Encoder.encode("菇")].join(",") === "251,150"); // U+83C7
expect(() => {ms932Encoder.encode("\u83C8")}).to.throw(Error, "EncodingError U+83C8");
expect(() => {ms932Encoder.encode("\u83C9")}).to.throw(Error, "EncodingError U+83C9");
r = r && ([...ms932Encoder.encode("菊")].join(",") === "139,101"); // U+83CA
expect(() => {ms932Encoder.encode("\u83CB")}).to.throw(Error, "EncodingError U+83CB");
r = r && ([...ms932Encoder.encode("菌")].join(",") === "139,219"); // U+83CC
expect(() => {ms932Encoder.encode("\u83CD")}).to.throw(Error, "EncodingError U+83CD");
r = r && ([...ms932Encoder.encode("菎")].join(",") === "228,192"); // U+83CE
expect(() => {ms932Encoder.encode("\u83CF")}).to.throw(Error, "EncodingError U+83CF");
expect(() => {ms932Encoder.encode("\u83D0")}).to.throw(Error, "EncodingError U+83D0");
expect(() => {ms932Encoder.encode("\u83D1")}).to.throw(Error, "EncodingError U+83D1");
expect(() => {ms932Encoder.encode("\u83D2")}).to.throw(Error, "EncodingError U+83D2");
r = r && ([...ms932Encoder.encode("菓")].join(",") === "137,217"); // U+83D3
expect(() => {ms932Encoder.encode("\u83D4")}).to.throw(Error, "EncodingError U+83D4");
expect(() => {ms932Encoder.encode("\u83D5")}).to.throw(Error, "EncodingError U+83D5");
r = r && ([...ms932Encoder.encode("菖")].join(",") === "143,210"); // U+83D6
expect(() => {ms932Encoder.encode("\u83D7")}).to.throw(Error, "EncodingError U+83D7");
r = r && ([...ms932Encoder.encode("菘")].join(",") === "228,195"); // U+83D8
expect(() => {ms932Encoder.encode("\u83D9")}).to.throw(Error, "EncodingError U+83D9");
expect(() => {ms932Encoder.encode("\u83DA")}).to.throw(Error, "EncodingError U+83DA");
expect(() => {ms932Encoder.encode("\u83DB")}).to.throw(Error, "EncodingError U+83DB");
r = r && ([...ms932Encoder.encode("菜")].join(",") === "141,216"); // U+83DC
expect(() => {ms932Encoder.encode("\u83DD")}).to.throw(Error, "EncodingError U+83DD");
expect(() => {ms932Encoder.encode("\u83DE")}).to.throw(Error, "EncodingError U+83DE");
r = r && ([...ms932Encoder.encode("菟菠")].join(",") === "147,112,228,200"); // U+83DF
expect(() => {ms932Encoder.encode("\u83E1")}).to.throw(Error, "EncodingError U+83E1");
expect(() => {ms932Encoder.encode("\u83E2")}).to.throw(Error, "EncodingError U+83E2");
expect(() => {ms932Encoder.encode("\u83E3")}).to.throw(Error, "EncodingError U+83E3");
expect(() => {ms932Encoder.encode("\u83E4")}).to.throw(Error, "EncodingError U+83E4");
expect(() => {ms932Encoder.encode("\u83E5")}).to.throw(Error, "EncodingError U+83E5");
expect(() => {ms932Encoder.encode("\u83E6")}).to.throw(Error, "EncodingError U+83E6");
expect(() => {ms932Encoder.encode("\u83E7")}).to.throw(Error, "EncodingError U+83E7");
expect(() => {ms932Encoder.encode("\u83E8")}).to.throw(Error, "EncodingError U+83E8");
r = r && ([...ms932Encoder.encode("菩")].join(",") === "149,236"); // U+83E9
expect(() => {ms932Encoder.encode("\u83EA")}).to.throw(Error, "EncodingError U+83EA");
r = r && ([...ms932Encoder.encode("菫")].join(",") === "228,191"); // U+83EB
expect(() => {ms932Encoder.encode("\u83EC")}).to.throw(Error, "EncodingError U+83EC");
expect(() => {ms932Encoder.encode("\u83ED")}).to.throw(Error, "EncodingError U+83ED");
expect(() => {ms932Encoder.encode("\u83EE")}).to.throw(Error, "EncodingError U+83EE");
r = r && ([...ms932Encoder.encode("華菰菱菲")].join(",") === "137,216,140,212,149,72,228,201"); // U+83EF
expect(() => {ms932Encoder.encode("\u83F3")}).to.throw(Error, "EncodingError U+83F3");
r = r && ([...ms932Encoder.encode("菴")].join(",") === "228,189"); // U+83F4
expect(() => {ms932Encoder.encode("\u83F5")}).to.throw(Error, "EncodingError U+83F5");
r = r && ([...ms932Encoder.encode("菶菷")].join(",") === "251,151,228,198"); // U+83F6
expect(() => {ms932Encoder.encode("\u83F8")}).to.throw(Error, "EncodingError U+83F8");
expect(() => {ms932Encoder.encode("\u83F9")}).to.throw(Error, "EncodingError U+83F9");
expect(() => {ms932Encoder.encode("\u83FA")}).to.throw(Error, "EncodingError U+83FA");
r = r && ([...ms932Encoder.encode("菻")].join(",") === "228,208"); // U+83FB
expect(() => {ms932Encoder.encode("\u83FC")}).to.throw(Error, "EncodingError U+83FC");
r = r && ([...ms932Encoder.encode("菽")].join(",") === "228,193"); // U+83FD
expect(() => {ms932Encoder.encode("\u83FE")}).to.throw(Error, "EncodingError U+83FE");
expect(() => {ms932Encoder.encode("\u83FF")}).to.throw(Error, "EncodingError U+83FF");

expect(r).to.equal(true);

  });

});
