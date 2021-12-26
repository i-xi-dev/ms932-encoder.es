import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 9", () => {

  it("encode(string) - U+8000-U+8FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

expect([...ms932Encoder.encode("耀老")].join(",")).toBe("151,115,152,86"); // U+8000
expect(() => {ms932Encoder.encode("\u8002")}).toThrowError({name:"TypeError",message:"EncodingError U+8002"});
expect([...ms932Encoder.encode("考耄者耆")].join(",")).toBe("141,108,227,204,142,210,227,203"); // U+8003
expect(() => {ms932Encoder.encode("\u8007")}).toThrowError({name:"TypeError",message:"EncodingError U+8007"});
expect(() => {ms932Encoder.encode("\u8008")}).toThrowError({name:"TypeError",message:"EncodingError U+8008"});
expect(() => {ms932Encoder.encode("\u8009")}).toThrowError({name:"TypeError",message:"EncodingError U+8009"});
expect(() => {ms932Encoder.encode("\u800A")}).toThrowError({name:"TypeError",message:"EncodingError U+800A"});
expect([...ms932Encoder.encode("耋而")].join(",")).toBe("227,205,142,167"); // U+800B
expect(() => {ms932Encoder.encode("\u800D")}).toThrowError({name:"TypeError",message:"EncodingError U+800D"});
expect(() => {ms932Encoder.encode("\u800E")}).toThrowError({name:"TypeError",message:"EncodingError U+800E"});
expect(() => {ms932Encoder.encode("\u800F")}).toThrowError({name:"TypeError",message:"EncodingError U+800F"});
expect([...ms932Encoder.encode("耐")].join(",")).toBe("145,207"); // U+8010
expect(() => {ms932Encoder.encode("\u8011")}).toThrowError({name:"TypeError",message:"EncodingError U+8011"});
expect([...ms932Encoder.encode("耒")].join(",")).toBe("227,206"); // U+8012
expect(() => {ms932Encoder.encode("\u8013")}).toThrowError({name:"TypeError",message:"EncodingError U+8013"});
expect(() => {ms932Encoder.encode("\u8014")}).toThrowError({name:"TypeError",message:"EncodingError U+8014"});
expect([...ms932Encoder.encode("耕")].join(",")).toBe("141,107"); // U+8015
expect(() => {ms932Encoder.encode("\u8016")}).toThrowError({name:"TypeError",message:"EncodingError U+8016"});
expect([...ms932Encoder.encode("耗耘耙")].join(",")).toBe("150,213,227,207,227,208"); // U+8017
expect(() => {ms932Encoder.encode("\u801A")}).toThrowError({name:"TypeError",message:"EncodingError U+801A"});
expect(() => {ms932Encoder.encode("\u801B")}).toThrowError({name:"TypeError",message:"EncodingError U+801B"});
expect([...ms932Encoder.encode("耜")].join(",")).toBe("227,209"); // U+801C
expect(() => {ms932Encoder.encode("\u801D")}).toThrowError({name:"TypeError",message:"EncodingError U+801D"});
expect(() => {ms932Encoder.encode("\u801E")}).toThrowError({name:"TypeError",message:"EncodingError U+801E"});
expect(() => {ms932Encoder.encode("\u801F")}).toThrowError({name:"TypeError",message:"EncodingError U+801F"});
expect(() => {ms932Encoder.encode("\u8020")}).toThrowError({name:"TypeError",message:"EncodingError U+8020"});
expect([...ms932Encoder.encode("耡")].join(",")).toBe("227,210"); // U+8021
expect(() => {ms932Encoder.encode("\u8022")}).toThrowError({name:"TypeError",message:"EncodingError U+8022"});
expect(() => {ms932Encoder.encode("\u8023")}).toThrowError({name:"TypeError",message:"EncodingError U+8023"});
expect(() => {ms932Encoder.encode("\u8024")}).toThrowError({name:"TypeError",message:"EncodingError U+8024"});
expect(() => {ms932Encoder.encode("\u8025")}).toThrowError({name:"TypeError",message:"EncodingError U+8025"});
expect(() => {ms932Encoder.encode("\u8026")}).toThrowError({name:"TypeError",message:"EncodingError U+8026"});
expect(() => {ms932Encoder.encode("\u8027")}).toThrowError({name:"TypeError",message:"EncodingError U+8027"});
expect([...ms932Encoder.encode("耨")].join(",")).toBe("227,211"); // U+8028
expect(() => {ms932Encoder.encode("\u8029")}).toThrowError({name:"TypeError",message:"EncodingError U+8029"});
expect(() => {ms932Encoder.encode("\u802A")}).toThrowError({name:"TypeError",message:"EncodingError U+802A"});
expect(() => {ms932Encoder.encode("\u802B")}).toThrowError({name:"TypeError",message:"EncodingError U+802B"});
expect(() => {ms932Encoder.encode("\u802C")}).toThrowError({name:"TypeError",message:"EncodingError U+802C"});
expect(() => {ms932Encoder.encode("\u802D")}).toThrowError({name:"TypeError",message:"EncodingError U+802D"});
expect(() => {ms932Encoder.encode("\u802E")}).toThrowError({name:"TypeError",message:"EncodingError U+802E"});
expect(() => {ms932Encoder.encode("\u802F")}).toThrowError({name:"TypeError",message:"EncodingError U+802F"});
expect(() => {ms932Encoder.encode("\u8030")}).toThrowError({name:"TypeError",message:"EncodingError U+8030"});
expect(() => {ms932Encoder.encode("\u8031")}).toThrowError({name:"TypeError",message:"EncodingError U+8031"});
expect(() => {ms932Encoder.encode("\u8032")}).toThrowError({name:"TypeError",message:"EncodingError U+8032"});
expect([...ms932Encoder.encode("耳")].join(",")).toBe("142,168"); // U+8033
expect(() => {ms932Encoder.encode("\u8034")}).toThrowError({name:"TypeError",message:"EncodingError U+8034"});
expect(() => {ms932Encoder.encode("\u8035")}).toThrowError({name:"TypeError",message:"EncodingError U+8035"});
expect([...ms932Encoder.encode("耶")].join(",")).toBe("150,235"); // U+8036
expect(() => {ms932Encoder.encode("\u8037")}).toThrowError({name:"TypeError",message:"EncodingError U+8037"});
expect(() => {ms932Encoder.encode("\u8038")}).toThrowError({name:"TypeError",message:"EncodingError U+8038"});
expect(() => {ms932Encoder.encode("\u8039")}).toThrowError({name:"TypeError",message:"EncodingError U+8039"});
expect(() => {ms932Encoder.encode("\u803A")}).toThrowError({name:"TypeError",message:"EncodingError U+803A"});
expect([...ms932Encoder.encode("耻")].join(",")).toBe("227,213"); // U+803B
expect(() => {ms932Encoder.encode("\u803C")}).toThrowError({name:"TypeError",message:"EncodingError U+803C"});
expect([...ms932Encoder.encode("耽")].join(",")).toBe("146,94"); // U+803D
expect(() => {ms932Encoder.encode("\u803E")}).toThrowError({name:"TypeError",message:"EncodingError U+803E"});
expect([...ms932Encoder.encode("耿")].join(",")).toBe("227,212"); // U+803F
expect(() => {ms932Encoder.encode("\u8040")}).toThrowError({name:"TypeError",message:"EncodingError U+8040"});
expect(() => {ms932Encoder.encode("\u8041")}).toThrowError({name:"TypeError",message:"EncodingError U+8041"});
expect(() => {ms932Encoder.encode("\u8042")}).toThrowError({name:"TypeError",message:"EncodingError U+8042"});
expect(() => {ms932Encoder.encode("\u8043")}).toThrowError({name:"TypeError",message:"EncodingError U+8043"});
expect(() => {ms932Encoder.encode("\u8044")}).toThrowError({name:"TypeError",message:"EncodingError U+8044"});
expect(() => {ms932Encoder.encode("\u8045")}).toThrowError({name:"TypeError",message:"EncodingError U+8045"});
expect([...ms932Encoder.encode("聆")].join(",")).toBe("227,215"); // U+8046
expect(() => {ms932Encoder.encode("\u8047")}).toThrowError({name:"TypeError",message:"EncodingError U+8047"});
expect(() => {ms932Encoder.encode("\u8048")}).toThrowError({name:"TypeError",message:"EncodingError U+8048"});
expect(() => {ms932Encoder.encode("\u8049")}).toThrowError({name:"TypeError",message:"EncodingError U+8049"});
expect([...ms932Encoder.encode("聊")].join(",")).toBe("227,214"); // U+804A
expect(() => {ms932Encoder.encode("\u804B")}).toThrowError({name:"TypeError",message:"EncodingError U+804B"});
expect(() => {ms932Encoder.encode("\u804C")}).toThrowError({name:"TypeError",message:"EncodingError U+804C"});
expect(() => {ms932Encoder.encode("\u804D")}).toThrowError({name:"TypeError",message:"EncodingError U+804D"});
expect(() => {ms932Encoder.encode("\u804E")}).toThrowError({name:"TypeError",message:"EncodingError U+804E"});
expect(() => {ms932Encoder.encode("\u804F")}).toThrowError({name:"TypeError",message:"EncodingError U+804F"});
expect(() => {ms932Encoder.encode("\u8050")}).toThrowError({name:"TypeError",message:"EncodingError U+8050"});
expect(() => {ms932Encoder.encode("\u8051")}).toThrowError({name:"TypeError",message:"EncodingError U+8051"});
expect([...ms932Encoder.encode("聒")].join(",")).toBe("227,216"); // U+8052
expect(() => {ms932Encoder.encode("\u8053")}).toThrowError({name:"TypeError",message:"EncodingError U+8053"});
expect(() => {ms932Encoder.encode("\u8054")}).toThrowError({name:"TypeError",message:"EncodingError U+8054"});
expect(() => {ms932Encoder.encode("\u8055")}).toThrowError({name:"TypeError",message:"EncodingError U+8055"});
expect([...ms932Encoder.encode("聖")].join(",")).toBe("144,185"); // U+8056
expect(() => {ms932Encoder.encode("\u8057")}).toThrowError({name:"TypeError",message:"EncodingError U+8057"});
expect([...ms932Encoder.encode("聘")].join(",")).toBe("227,217"); // U+8058
expect(() => {ms932Encoder.encode("\u8059")}).toThrowError({name:"TypeError",message:"EncodingError U+8059"});
expect([...ms932Encoder.encode("聚")].join(",")).toBe("227,218"); // U+805A
expect(() => {ms932Encoder.encode("\u805B")}).toThrowError({name:"TypeError",message:"EncodingError U+805B"});
expect(() => {ms932Encoder.encode("\u805C")}).toThrowError({name:"TypeError",message:"EncodingError U+805C"});
expect(() => {ms932Encoder.encode("\u805D")}).toThrowError({name:"TypeError",message:"EncodingError U+805D"});
expect([...ms932Encoder.encode("聞聟")].join(",")).toBe("149,183,227,219"); // U+805E
expect(() => {ms932Encoder.encode("\u8060")}).toThrowError({name:"TypeError",message:"EncodingError U+8060"});
expect([...ms932Encoder.encode("聡聢")].join(",")).toBe("145,143,227,220"); // U+8061
expect(() => {ms932Encoder.encode("\u8063")}).toThrowError({name:"TypeError",message:"EncodingError U+8063"});
expect(() => {ms932Encoder.encode("\u8064")}).toThrowError({name:"TypeError",message:"EncodingError U+8064"});
expect(() => {ms932Encoder.encode("\u8065")}).toThrowError({name:"TypeError",message:"EncodingError U+8065"});
expect(() => {ms932Encoder.encode("\u8066")}).toThrowError({name:"TypeError",message:"EncodingError U+8066"});
expect(() => {ms932Encoder.encode("\u8067")}).toThrowError({name:"TypeError",message:"EncodingError U+8067"});
expect([...ms932Encoder.encode("聨")].join(",")).toBe("227,221"); // U+8068
expect(() => {ms932Encoder.encode("\u8069")}).toThrowError({name:"TypeError",message:"EncodingError U+8069"});
expect(() => {ms932Encoder.encode("\u806A")}).toThrowError({name:"TypeError",message:"EncodingError U+806A"});
expect(() => {ms932Encoder.encode("\u806B")}).toThrowError({name:"TypeError",message:"EncodingError U+806B"});
expect(() => {ms932Encoder.encode("\u806C")}).toThrowError({name:"TypeError",message:"EncodingError U+806C"});
expect(() => {ms932Encoder.encode("\u806D")}).toThrowError({name:"TypeError",message:"EncodingError U+806D"});
expect(() => {ms932Encoder.encode("\u806E")}).toThrowError({name:"TypeError",message:"EncodingError U+806E"});
expect([...ms932Encoder.encode("聯聰")].join(",")).toBe("151,252,227,224"); // U+806F
expect(() => {ms932Encoder.encode("\u8071")}).toThrowError({name:"TypeError",message:"EncodingError U+8071"});
expect([...ms932Encoder.encode("聲聳聴")].join(",")).toBe("227,223,227,222,146,174"); // U+8072
expect(() => {ms932Encoder.encode("\u8075")}).toThrowError({name:"TypeError",message:"EncodingError U+8075"});
expect([...ms932Encoder.encode("聶職")].join(",")).toBe("227,225,144,69"); // U+8076
expect(() => {ms932Encoder.encode("\u8078")}).toThrowError({name:"TypeError",message:"EncodingError U+8078"});
expect([...ms932Encoder.encode("聹")].join(",")).toBe("227,226"); // U+8079
expect(() => {ms932Encoder.encode("\u807A")}).toThrowError({name:"TypeError",message:"EncodingError U+807A"});
expect(() => {ms932Encoder.encode("\u807B")}).toThrowError({name:"TypeError",message:"EncodingError U+807B"});
expect(() => {ms932Encoder.encode("\u807C")}).toThrowError({name:"TypeError",message:"EncodingError U+807C"});
expect([...ms932Encoder.encode("聽聾聿")].join(",")).toBe("227,227,152,87,227,228"); // U+807D
expect(() => {ms932Encoder.encode("\u8080")}).toThrowError({name:"TypeError",message:"EncodingError U+8080"});
expect(() => {ms932Encoder.encode("\u8081")}).toThrowError({name:"TypeError",message:"EncodingError U+8081"});
expect(() => {ms932Encoder.encode("\u8082")}).toThrowError({name:"TypeError",message:"EncodingError U+8082"});
expect(() => {ms932Encoder.encode("\u8083")}).toThrowError({name:"TypeError",message:"EncodingError U+8083"});
expect([...ms932Encoder.encode("肄肅肆肇")].join(",")).toBe("227,229,227,231,227,230,148,163"); // U+8084
expect(() => {ms932Encoder.encode("\u8088")}).toThrowError({name:"TypeError",message:"EncodingError U+8088"});
expect([...ms932Encoder.encode("肉")].join(",")).toBe("147,247"); // U+8089
expect(() => {ms932Encoder.encode("\u808A")}).toThrowError({name:"TypeError",message:"EncodingError U+808A"});
expect([...ms932Encoder.encode("肋肌")].join(",")).toBe("152,93,148,167"); // U+808B
expect(() => {ms932Encoder.encode("\u808D")}).toThrowError({name:"TypeError",message:"EncodingError U+808D"});
expect(() => {ms932Encoder.encode("\u808E")}).toThrowError({name:"TypeError",message:"EncodingError U+808E"});
expect(() => {ms932Encoder.encode("\u808F")}).toThrowError({name:"TypeError",message:"EncodingError U+808F"});
expect(() => {ms932Encoder.encode("\u8090")}).toThrowError({name:"TypeError",message:"EncodingError U+8090"});
expect(() => {ms932Encoder.encode("\u8091")}).toThrowError({name:"TypeError",message:"EncodingError U+8091"});
expect(() => {ms932Encoder.encode("\u8092")}).toThrowError({name:"TypeError",message:"EncodingError U+8092"});
expect([...ms932Encoder.encode("肓")].join(",")).toBe("227,233"); // U+8093
expect(() => {ms932Encoder.encode("\u8094")}).toThrowError({name:"TypeError",message:"EncodingError U+8094"});
expect(() => {ms932Encoder.encode("\u8095")}).toThrowError({name:"TypeError",message:"EncodingError U+8095"});
expect([...ms932Encoder.encode("肖")].join(",")).toBe("143,209"); // U+8096
expect(() => {ms932Encoder.encode("\u8097")}).toThrowError({name:"TypeError",message:"EncodingError U+8097"});
expect([...ms932Encoder.encode("肘")].join(",")).toBe("149,73"); // U+8098
expect(() => {ms932Encoder.encode("\u8099")}).toThrowError({name:"TypeError",message:"EncodingError U+8099"});
expect([...ms932Encoder.encode("肚肛")].join(",")).toBe("227,234,227,232"); // U+809A
expect(() => {ms932Encoder.encode("\u809C")}).toThrowError({name:"TypeError",message:"EncodingError U+809C"});
expect([...ms932Encoder.encode("肝")].join(",")).toBe("138,204"); // U+809D
expect(() => {ms932Encoder.encode("\u809E")}).toThrowError({name:"TypeError",message:"EncodingError U+809E"});
expect(() => {ms932Encoder.encode("\u809F")}).toThrowError({name:"TypeError",message:"EncodingError U+809F"});
expect(() => {ms932Encoder.encode("\u80A0")}).toThrowError({name:"TypeError",message:"EncodingError U+80A0"});
expect([...ms932Encoder.encode("股肢")].join(",")).toBe("140,210,142,136"); // U+80A1
expect(() => {ms932Encoder.encode("\u80A3")}).toThrowError({name:"TypeError",message:"EncodingError U+80A3"});
expect(() => {ms932Encoder.encode("\u80A4")}).toThrowError({name:"TypeError",message:"EncodingError U+80A4"});
expect([...ms932Encoder.encode("肥")].join(",")).toBe("148,236"); // U+80A5
expect(() => {ms932Encoder.encode("\u80A6")}).toThrowError({name:"TypeError",message:"EncodingError U+80A6"});
expect(() => {ms932Encoder.encode("\u80A7")}).toThrowError({name:"TypeError",message:"EncodingError U+80A7"});
expect(() => {ms932Encoder.encode("\u80A8")}).toThrowError({name:"TypeError",message:"EncodingError U+80A8"});
expect([...ms932Encoder.encode("肩肪")].join(",")).toBe("140,168,150,98"); // U+80A9
expect(() => {ms932Encoder.encode("\u80AB")}).toThrowError({name:"TypeError",message:"EncodingError U+80AB"});
expect([...ms932Encoder.encode("肬肭")].join(",")).toBe("227,237,227,235"); // U+80AC
expect(() => {ms932Encoder.encode("\u80AE")}).toThrowError({name:"TypeError",message:"EncodingError U+80AE"});
expect([...ms932Encoder.encode("肯")].join(",")).toBe("141,109"); // U+80AF
expect(() => {ms932Encoder.encode("\u80B0")}).toThrowError({name:"TypeError",message:"EncodingError U+80B0"});
expect([...ms932Encoder.encode("肱育")].join(",")).toBe("141,110,136,231"); // U+80B1
expect(() => {ms932Encoder.encode("\u80B3")}).toThrowError({name:"TypeError",message:"EncodingError U+80B3"});
expect([...ms932Encoder.encode("肴")].join(",")).toBe("141,230"); // U+80B4
expect(() => {ms932Encoder.encode("\u80B5")}).toThrowError({name:"TypeError",message:"EncodingError U+80B5"});
expect(() => {ms932Encoder.encode("\u80B6")}).toThrowError({name:"TypeError",message:"EncodingError U+80B6"});
expect(() => {ms932Encoder.encode("\u80B7")}).toThrowError({name:"TypeError",message:"EncodingError U+80B7"});
expect(() => {ms932Encoder.encode("\u80B8")}).toThrowError({name:"TypeError",message:"EncodingError U+80B8"});
expect(() => {ms932Encoder.encode("\u80B9")}).toThrowError({name:"TypeError",message:"EncodingError U+80B9"});
expect([...ms932Encoder.encode("肺")].join(",")).toBe("148,120"); // U+80BA
expect(() => {ms932Encoder.encode("\u80BB")}).toThrowError({name:"TypeError",message:"EncodingError U+80BB"});
expect(() => {ms932Encoder.encode("\u80BC")}).toThrowError({name:"TypeError",message:"EncodingError U+80BC"});
expect(() => {ms932Encoder.encode("\u80BD")}).toThrowError({name:"TypeError",message:"EncodingError U+80BD"});
expect(() => {ms932Encoder.encode("\u80BE")}).toThrowError({name:"TypeError",message:"EncodingError U+80BE"});
expect(() => {ms932Encoder.encode("\u80BF")}).toThrowError({name:"TypeError",message:"EncodingError U+80BF"});
expect(() => {ms932Encoder.encode("\u80C0")}).toThrowError({name:"TypeError",message:"EncodingError U+80C0"});
expect(() => {ms932Encoder.encode("\u80C1")}).toThrowError({name:"TypeError",message:"EncodingError U+80C1"});
expect(() => {ms932Encoder.encode("\u80C2")}).toThrowError({name:"TypeError",message:"EncodingError U+80C2"});
expect([...ms932Encoder.encode("胃胄")].join(",")).toBe("136,221,227,242"); // U+80C3
expect(() => {ms932Encoder.encode("\u80C5")}).toThrowError({name:"TypeError",message:"EncodingError U+80C5"});
expect([...ms932Encoder.encode("胆")].join(",")).toBe("146,95"); // U+80C6
expect(() => {ms932Encoder.encode("\u80C7")}).toThrowError({name:"TypeError",message:"EncodingError U+80C7"});
expect(() => {ms932Encoder.encode("\u80C8")}).toThrowError({name:"TypeError",message:"EncodingError U+80C8"});
expect(() => {ms932Encoder.encode("\u80C9")}).toThrowError({name:"TypeError",message:"EncodingError U+80C9"});
expect(() => {ms932Encoder.encode("\u80CA")}).toThrowError({name:"TypeError",message:"EncodingError U+80CA"});
expect(() => {ms932Encoder.encode("\u80CB")}).toThrowError({name:"TypeError",message:"EncodingError U+80CB"});
expect([...ms932Encoder.encode("背")].join(",")).toBe("148,119"); // U+80CC
expect(() => {ms932Encoder.encode("\u80CD")}).toThrowError({name:"TypeError",message:"EncodingError U+80CD"});
expect([...ms932Encoder.encode("胎")].join(",")).toBe("145,217"); // U+80CE
expect(() => {ms932Encoder.encode("\u80CF")}).toThrowError({name:"TypeError",message:"EncodingError U+80CF"});
expect(() => {ms932Encoder.encode("\u80D0")}).toThrowError({name:"TypeError",message:"EncodingError U+80D0"});
expect(() => {ms932Encoder.encode("\u80D1")}).toThrowError({name:"TypeError",message:"EncodingError U+80D1"});
expect(() => {ms932Encoder.encode("\u80D2")}).toThrowError({name:"TypeError",message:"EncodingError U+80D2"});
expect(() => {ms932Encoder.encode("\u80D3")}).toThrowError({name:"TypeError",message:"EncodingError U+80D3"});
expect(() => {ms932Encoder.encode("\u80D4")}).toThrowError({name:"TypeError",message:"EncodingError U+80D4"});
expect(() => {ms932Encoder.encode("\u80D5")}).toThrowError({name:"TypeError",message:"EncodingError U+80D5"});
expect([...ms932Encoder.encode("胖")].join(",")).toBe("227,244"); // U+80D6
expect(() => {ms932Encoder.encode("\u80D7")}).toThrowError({name:"TypeError",message:"EncodingError U+80D7"});
expect(() => {ms932Encoder.encode("\u80D8")}).toThrowError({name:"TypeError",message:"EncodingError U+80D8"});
expect([...ms932Encoder.encode("胙胚胛")].join(",")).toBe("227,240,227,243,227,238"); // U+80D9
expect(() => {ms932Encoder.encode("\u80DC")}).toThrowError({name:"TypeError",message:"EncodingError U+80DC"});
expect([...ms932Encoder.encode("胝胞")].join(",")).toBe("227,241,150,69"); // U+80DD
expect(() => {ms932Encoder.encode("\u80DF")}).toThrowError({name:"TypeError",message:"EncodingError U+80DF"});
expect(() => {ms932Encoder.encode("\u80E0")}).toThrowError({name:"TypeError",message:"EncodingError U+80E0"});
expect([...ms932Encoder.encode("胡")].join(",")).toBe("140,211"); // U+80E1
expect(() => {ms932Encoder.encode("\u80E2")}).toThrowError({name:"TypeError",message:"EncodingError U+80E2"});
expect(() => {ms932Encoder.encode("\u80E3")}).toThrowError({name:"TypeError",message:"EncodingError U+80E3"});
expect([...ms932Encoder.encode("胤胥")].join(",")).toBe("136,251,227,239"); // U+80E4
expect(() => {ms932Encoder.encode("\u80E6")}).toThrowError({name:"TypeError",message:"EncodingError U+80E6"});
expect(() => {ms932Encoder.encode("\u80E7")}).toThrowError({name:"TypeError",message:"EncodingError U+80E7"});
expect(() => {ms932Encoder.encode("\u80E8")}).toThrowError({name:"TypeError",message:"EncodingError U+80E8"});
expect(() => {ms932Encoder.encode("\u80E9")}).toThrowError({name:"TypeError",message:"EncodingError U+80E9"});
expect(() => {ms932Encoder.encode("\u80EA")}).toThrowError({name:"TypeError",message:"EncodingError U+80EA"});
expect(() => {ms932Encoder.encode("\u80EB")}).toThrowError({name:"TypeError",message:"EncodingError U+80EB"});
expect(() => {ms932Encoder.encode("\u80EC")}).toThrowError({name:"TypeError",message:"EncodingError U+80EC"});
expect(() => {ms932Encoder.encode("\u80ED")}).toThrowError({name:"TypeError",message:"EncodingError U+80ED"});
expect(() => {ms932Encoder.encode("\u80EE")}).toThrowError({name:"TypeError",message:"EncodingError U+80EE"});
expect([...ms932Encoder.encode("胯")].join(",")).toBe("227,246"); // U+80EF
expect(() => {ms932Encoder.encode("\u80F0")}).toThrowError({name:"TypeError",message:"EncodingError U+80F0"});
expect([...ms932Encoder.encode("胱")].join(",")).toBe("227,247"); // U+80F1
expect(() => {ms932Encoder.encode("\u80F2")}).toThrowError({name:"TypeError",message:"EncodingError U+80F2"});
expect(() => {ms932Encoder.encode("\u80F3")}).toThrowError({name:"TypeError",message:"EncodingError U+80F3"});
expect([...ms932Encoder.encode("胴")].join(",")).toBe("147,183"); // U+80F4
expect(() => {ms932Encoder.encode("\u80F5")}).toThrowError({name:"TypeError",message:"EncodingError U+80F5"});
expect(() => {ms932Encoder.encode("\u80F6")}).toThrowError({name:"TypeError",message:"EncodingError U+80F6"});
expect(() => {ms932Encoder.encode("\u80F7")}).toThrowError({name:"TypeError",message:"EncodingError U+80F7"});
expect([...ms932Encoder.encode("胸")].join(",")).toBe("139,185"); // U+80F8
expect(() => {ms932Encoder.encode("\u80F9")}).toThrowError({name:"TypeError",message:"EncodingError U+80F9"});
expect(() => {ms932Encoder.encode("\u80FA")}).toThrowError({name:"TypeError",message:"EncodingError U+80FA"});
expect(() => {ms932Encoder.encode("\u80FB")}).toThrowError({name:"TypeError",message:"EncodingError U+80FB"});
expect([...ms932Encoder.encode("胼能")].join(",")).toBe("228,69,148,92"); // U+80FC
expect(() => {ms932Encoder.encode("\u80FE")}).toThrowError({name:"TypeError",message:"EncodingError U+80FE"});
expect(() => {ms932Encoder.encode("\u80FF")}).toThrowError({name:"TypeError",message:"EncodingError U+80FF"});
expect(() => {ms932Encoder.encode("\u8100")}).toThrowError({name:"TypeError",message:"EncodingError U+8100"});
expect(() => {ms932Encoder.encode("\u8101")}).toThrowError({name:"TypeError",message:"EncodingError U+8101"});
expect([...ms932Encoder.encode("脂")].join(",")).toBe("142,137"); // U+8102
expect(() => {ms932Encoder.encode("\u8103")}).toThrowError({name:"TypeError",message:"EncodingError U+8103"});
expect(() => {ms932Encoder.encode("\u8104")}).toThrowError({name:"TypeError",message:"EncodingError U+8104"});
expect([...ms932Encoder.encode("脅脆脇脈脉脊")].join(",")).toBe("139,186,144,198,152,101,150,172,227,245,144,210"); // U+8105
expect(() => {ms932Encoder.encode("\u810B")}).toThrowError({name:"TypeError",message:"EncodingError U+810B"});
expect(() => {ms932Encoder.encode("\u810C")}).toThrowError({name:"TypeError",message:"EncodingError U+810C"});
expect(() => {ms932Encoder.encode("\u810D")}).toThrowError({name:"TypeError",message:"EncodingError U+810D"});
expect(() => {ms932Encoder.encode("\u810E")}).toThrowError({name:"TypeError",message:"EncodingError U+810E"});
expect(() => {ms932Encoder.encode("\u810F")}).toThrowError({name:"TypeError",message:"EncodingError U+810F"});
expect(() => {ms932Encoder.encode("\u8110")}).toThrowError({name:"TypeError",message:"EncodingError U+8110"});
expect(() => {ms932Encoder.encode("\u8111")}).toThrowError({name:"TypeError",message:"EncodingError U+8111"});
expect(() => {ms932Encoder.encode("\u8112")}).toThrowError({name:"TypeError",message:"EncodingError U+8112"});
expect(() => {ms932Encoder.encode("\u8113")}).toThrowError({name:"TypeError",message:"EncodingError U+8113"});
expect(() => {ms932Encoder.encode("\u8114")}).toThrowError({name:"TypeError",message:"EncodingError U+8114"});
expect(() => {ms932Encoder.encode("\u8115")}).toThrowError({name:"TypeError",message:"EncodingError U+8115"});
expect(() => {ms932Encoder.encode("\u8116")}).toThrowError({name:"TypeError",message:"EncodingError U+8116"});
expect(() => {ms932Encoder.encode("\u8117")}).toThrowError({name:"TypeError",message:"EncodingError U+8117"});
expect(() => {ms932Encoder.encode("\u8118")}).toThrowError({name:"TypeError",message:"EncodingError U+8118"});
expect(() => {ms932Encoder.encode("\u8119")}).toThrowError({name:"TypeError",message:"EncodingError U+8119"});
expect([...ms932Encoder.encode("脚脛")].join(",")).toBe("139,114,227,248"); // U+811A
expect(() => {ms932Encoder.encode("\u811C")}).toThrowError({name:"TypeError",message:"EncodingError U+811C"});
expect(() => {ms932Encoder.encode("\u811D")}).toThrowError({name:"TypeError",message:"EncodingError U+811D"});
expect(() => {ms932Encoder.encode("\u811E")}).toThrowError({name:"TypeError",message:"EncodingError U+811E"});
expect(() => {ms932Encoder.encode("\u811F")}).toThrowError({name:"TypeError",message:"EncodingError U+811F"});
expect(() => {ms932Encoder.encode("\u8120")}).toThrowError({name:"TypeError",message:"EncodingError U+8120"});
expect(() => {ms932Encoder.encode("\u8121")}).toThrowError({name:"TypeError",message:"EncodingError U+8121"});
expect(() => {ms932Encoder.encode("\u8122")}).toThrowError({name:"TypeError",message:"EncodingError U+8122"});
expect([...ms932Encoder.encode("脣")].join(",")).toBe("227,250"); // U+8123
expect(() => {ms932Encoder.encode("\u8124")}).toThrowError({name:"TypeError",message:"EncodingError U+8124"});
expect(() => {ms932Encoder.encode("\u8125")}).toThrowError({name:"TypeError",message:"EncodingError U+8125"});
expect(() => {ms932Encoder.encode("\u8126")}).toThrowError({name:"TypeError",message:"EncodingError U+8126"});
expect(() => {ms932Encoder.encode("\u8127")}).toThrowError({name:"TypeError",message:"EncodingError U+8127"});
expect(() => {ms932Encoder.encode("\u8128")}).toThrowError({name:"TypeError",message:"EncodingError U+8128"});
expect([...ms932Encoder.encode("脩")].join(",")).toBe("227,249"); // U+8129
expect(() => {ms932Encoder.encode("\u812A")}).toThrowError({name:"TypeError",message:"EncodingError U+812A"});
expect(() => {ms932Encoder.encode("\u812B")}).toThrowError({name:"TypeError",message:"EncodingError U+812B"});
expect(() => {ms932Encoder.encode("\u812C")}).toThrowError({name:"TypeError",message:"EncodingError U+812C"});
expect(() => {ms932Encoder.encode("\u812D")}).toThrowError({name:"TypeError",message:"EncodingError U+812D"});
expect(() => {ms932Encoder.encode("\u812E")}).toThrowError({name:"TypeError",message:"EncodingError U+812E"});
expect([...ms932Encoder.encode("脯")].join(",")).toBe("227,251"); // U+812F
expect(() => {ms932Encoder.encode("\u8130")}).toThrowError({name:"TypeError",message:"EncodingError U+8130"});
expect([...ms932Encoder.encode("脱")].join(",")).toBe("146,69"); // U+8131
expect(() => {ms932Encoder.encode("\u8132")}).toThrowError({name:"TypeError",message:"EncodingError U+8132"});
expect([...ms932Encoder.encode("脳")].join(",")).toBe("148,93"); // U+8133
expect(() => {ms932Encoder.encode("\u8134")}).toThrowError({name:"TypeError",message:"EncodingError U+8134"});
expect(() => {ms932Encoder.encode("\u8135")}).toThrowError({name:"TypeError",message:"EncodingError U+8135"});
expect(() => {ms932Encoder.encode("\u8136")}).toThrowError({name:"TypeError",message:"EncodingError U+8136"});
expect(() => {ms932Encoder.encode("\u8137")}).toThrowError({name:"TypeError",message:"EncodingError U+8137"});
expect(() => {ms932Encoder.encode("\u8138")}).toThrowError({name:"TypeError",message:"EncodingError U+8138"});
expect([...ms932Encoder.encode("脹")].join(",")).toBe("146,175"); // U+8139
expect(() => {ms932Encoder.encode("\u813A")}).toThrowError({name:"TypeError",message:"EncodingError U+813A"});
expect(() => {ms932Encoder.encode("\u813B")}).toThrowError({name:"TypeError",message:"EncodingError U+813B"});
expect(() => {ms932Encoder.encode("\u813C")}).toThrowError({name:"TypeError",message:"EncodingError U+813C"});
expect(() => {ms932Encoder.encode("\u813D")}).toThrowError({name:"TypeError",message:"EncodingError U+813D"});
expect([...ms932Encoder.encode("脾")].join(",")).toBe("228,66"); // U+813E
expect(() => {ms932Encoder.encode("\u813F")}).toThrowError({name:"TypeError",message:"EncodingError U+813F"});
expect(() => {ms932Encoder.encode("\u8140")}).toThrowError({name:"TypeError",message:"EncodingError U+8140"});
expect(() => {ms932Encoder.encode("\u8141")}).toThrowError({name:"TypeError",message:"EncodingError U+8141"});
expect(() => {ms932Encoder.encode("\u8142")}).toThrowError({name:"TypeError",message:"EncodingError U+8142"});
expect(() => {ms932Encoder.encode("\u8143")}).toThrowError({name:"TypeError",message:"EncodingError U+8143"});
expect(() => {ms932Encoder.encode("\u8144")}).toThrowError({name:"TypeError",message:"EncodingError U+8144"});
expect(() => {ms932Encoder.encode("\u8145")}).toThrowError({name:"TypeError",message:"EncodingError U+8145"});
expect([...ms932Encoder.encode("腆")].join(",")).toBe("228,65"); // U+8146
expect(() => {ms932Encoder.encode("\u8147")}).toThrowError({name:"TypeError",message:"EncodingError U+8147"});
expect(() => {ms932Encoder.encode("\u8148")}).toThrowError({name:"TypeError",message:"EncodingError U+8148"});
expect(() => {ms932Encoder.encode("\u8149")}).toThrowError({name:"TypeError",message:"EncodingError U+8149"});
expect(() => {ms932Encoder.encode("\u814A")}).toThrowError({name:"TypeError",message:"EncodingError U+814A"});
expect([...ms932Encoder.encode("腋")].join(",")).toBe("227,252"); // U+814B
expect(() => {ms932Encoder.encode("\u814C")}).toThrowError({name:"TypeError",message:"EncodingError U+814C"});
expect(() => {ms932Encoder.encode("\u814D")}).toThrowError({name:"TypeError",message:"EncodingError U+814D"});
expect([...ms932Encoder.encode("腎")].join(",")).toBe("144,116"); // U+814E
expect(() => {ms932Encoder.encode("\u814F")}).toThrowError({name:"TypeError",message:"EncodingError U+814F"});
expect([...ms932Encoder.encode("腐腑")].join(",")).toBe("149,133,228,68"); // U+8150
expect(() => {ms932Encoder.encode("\u8152")}).toThrowError({name:"TypeError",message:"EncodingError U+8152"});
expect([...ms932Encoder.encode("腓腔腕")].join(",")).toBe("228,67,141,111,152,114"); // U+8153
expect(() => {ms932Encoder.encode("\u8156")}).toThrowError({name:"TypeError",message:"EncodingError U+8156"});
expect(() => {ms932Encoder.encode("\u8157")}).toThrowError({name:"TypeError",message:"EncodingError U+8157"});
expect(() => {ms932Encoder.encode("\u8158")}).toThrowError({name:"TypeError",message:"EncodingError U+8158"});
expect(() => {ms932Encoder.encode("\u8159")}).toThrowError({name:"TypeError",message:"EncodingError U+8159"});
expect(() => {ms932Encoder.encode("\u815A")}).toThrowError({name:"TypeError",message:"EncodingError U+815A"});
expect(() => {ms932Encoder.encode("\u815B")}).toThrowError({name:"TypeError",message:"EncodingError U+815B"});
expect(() => {ms932Encoder.encode("\u815C")}).toThrowError({name:"TypeError",message:"EncodingError U+815C"});
expect(() => {ms932Encoder.encode("\u815D")}).toThrowError({name:"TypeError",message:"EncodingError U+815D"});
expect(() => {ms932Encoder.encode("\u815E")}).toThrowError({name:"TypeError",message:"EncodingError U+815E"});
expect([...ms932Encoder.encode("腟")].join(",")).toBe("228,84"); // U+815F
expect(() => {ms932Encoder.encode("\u8160")}).toThrowError({name:"TypeError",message:"EncodingError U+8160"});
expect(() => {ms932Encoder.encode("\u8161")}).toThrowError({name:"TypeError",message:"EncodingError U+8161"});
expect(() => {ms932Encoder.encode("\u8162")}).toThrowError({name:"TypeError",message:"EncodingError U+8162"});
expect(() => {ms932Encoder.encode("\u8163")}).toThrowError({name:"TypeError",message:"EncodingError U+8163"});
expect(() => {ms932Encoder.encode("\u8164")}).toThrowError({name:"TypeError",message:"EncodingError U+8164"});
expect([...ms932Encoder.encode("腥腦")].join(",")).toBe("228,72,228,73"); // U+8165
expect(() => {ms932Encoder.encode("\u8167")}).toThrowError({name:"TypeError",message:"EncodingError U+8167"});
expect(() => {ms932Encoder.encode("\u8168")}).toThrowError({name:"TypeError",message:"EncodingError U+8168"});
expect(() => {ms932Encoder.encode("\u8169")}).toThrowError({name:"TypeError",message:"EncodingError U+8169"});
expect(() => {ms932Encoder.encode("\u816A")}).toThrowError({name:"TypeError",message:"EncodingError U+816A"});
expect([...ms932Encoder.encode("腫")].join(",")).toBe("142,238"); // U+816B
expect(() => {ms932Encoder.encode("\u816C")}).toThrowError({name:"TypeError",message:"EncodingError U+816C"});
expect(() => {ms932Encoder.encode("\u816D")}).toThrowError({name:"TypeError",message:"EncodingError U+816D"});
expect([...ms932Encoder.encode("腮")].join(",")).toBe("228,71"); // U+816E
expect(() => {ms932Encoder.encode("\u816F")}).toThrowError({name:"TypeError",message:"EncodingError U+816F"});
expect([...ms932Encoder.encode("腰腱")].join(",")).toBe("141,152,228,70"); // U+8170
expect(() => {ms932Encoder.encode("\u8172")}).toThrowError({name:"TypeError",message:"EncodingError U+8172"});
expect(() => {ms932Encoder.encode("\u8173")}).toThrowError({name:"TypeError",message:"EncodingError U+8173"});
expect([...ms932Encoder.encode("腴")].join(",")).toBe("228,74"); // U+8174
expect(() => {ms932Encoder.encode("\u8175")}).toThrowError({name:"TypeError",message:"EncodingError U+8175"});
expect(() => {ms932Encoder.encode("\u8176")}).toThrowError({name:"TypeError",message:"EncodingError U+8176"});
expect(() => {ms932Encoder.encode("\u8177")}).toThrowError({name:"TypeError",message:"EncodingError U+8177"});
expect([...ms932Encoder.encode("腸腹腺")].join(",")).toBe("146,176,149,160,145,66"); // U+8178
expect(() => {ms932Encoder.encode("\u817B")}).toThrowError({name:"TypeError",message:"EncodingError U+817B"});
expect(() => {ms932Encoder.encode("\u817C")}).toThrowError({name:"TypeError",message:"EncodingError U+817C"});
expect(() => {ms932Encoder.encode("\u817D")}).toThrowError({name:"TypeError",message:"EncodingError U+817D"});
expect(() => {ms932Encoder.encode("\u817E")}).toThrowError({name:"TypeError",message:"EncodingError U+817E"});
expect([...ms932Encoder.encode("腿膀")].join(",")).toBe("145,218,228,78"); // U+817F
expect(() => {ms932Encoder.encode("\u8181")}).toThrowError({name:"TypeError",message:"EncodingError U+8181"});
expect([...ms932Encoder.encode("膂膃")].join(",")).toBe("228,79,228,75"); // U+8182
expect(() => {ms932Encoder.encode("\u8184")}).toThrowError({name:"TypeError",message:"EncodingError U+8184"});
expect(() => {ms932Encoder.encode("\u8185")}).toThrowError({name:"TypeError",message:"EncodingError U+8185"});
expect(() => {ms932Encoder.encode("\u8186")}).toThrowError({name:"TypeError",message:"EncodingError U+8186"});
expect(() => {ms932Encoder.encode("\u8187")}).toThrowError({name:"TypeError",message:"EncodingError U+8187"});
expect([...ms932Encoder.encode("膈")].join(",")).toBe("228,76"); // U+8188
expect(() => {ms932Encoder.encode("\u8189")}).toThrowError({name:"TypeError",message:"EncodingError U+8189"});
expect([...ms932Encoder.encode("膊")].join(",")).toBe("228,77"); // U+818A
expect(() => {ms932Encoder.encode("\u818B")}).toThrowError({name:"TypeError",message:"EncodingError U+818B"});
expect(() => {ms932Encoder.encode("\u818C")}).toThrowError({name:"TypeError",message:"EncodingError U+818C"});
expect(() => {ms932Encoder.encode("\u818D")}).toThrowError({name:"TypeError",message:"EncodingError U+818D"});
expect(() => {ms932Encoder.encode("\u818E")}).toThrowError({name:"TypeError",message:"EncodingError U+818E"});
expect([...ms932Encoder.encode("膏")].join(",")).toBe("141,112"); // U+818F
expect(() => {ms932Encoder.encode("\u8190")}).toThrowError({name:"TypeError",message:"EncodingError U+8190"});
expect(() => {ms932Encoder.encode("\u8191")}).toThrowError({name:"TypeError",message:"EncodingError U+8191"});
expect(() => {ms932Encoder.encode("\u8192")}).toThrowError({name:"TypeError",message:"EncodingError U+8192"});
expect([...ms932Encoder.encode("膓")].join(",")).toBe("228,85"); // U+8193
expect(() => {ms932Encoder.encode("\u8194")}).toThrowError({name:"TypeError",message:"EncodingError U+8194"});
expect([...ms932Encoder.encode("膕")].join(",")).toBe("228,81"); // U+8195
expect(() => {ms932Encoder.encode("\u8196")}).toThrowError({name:"TypeError",message:"EncodingError U+8196"});
expect(() => {ms932Encoder.encode("\u8197")}).toThrowError({name:"TypeError",message:"EncodingError U+8197"});
expect(() => {ms932Encoder.encode("\u8198")}).toThrowError({name:"TypeError",message:"EncodingError U+8198"});
expect(() => {ms932Encoder.encode("\u8199")}).toThrowError({name:"TypeError",message:"EncodingError U+8199"});
expect([...ms932Encoder.encode("膚")].join(",")).toBe("149,134"); // U+819A
expect(() => {ms932Encoder.encode("\u819B")}).toThrowError({name:"TypeError",message:"EncodingError U+819B"});
expect([...ms932Encoder.encode("膜膝")].join(",")).toBe("150,140,149,71"); // U+819C
expect(() => {ms932Encoder.encode("\u819E")}).toThrowError({name:"TypeError",message:"EncodingError U+819E"});
expect(() => {ms932Encoder.encode("\u819F")}).toThrowError({name:"TypeError",message:"EncodingError U+819F"});
expect([...ms932Encoder.encode("膠")].join(",")).toBe("228,80"); // U+81A0
expect(() => {ms932Encoder.encode("\u81A1")}).toThrowError({name:"TypeError",message:"EncodingError U+81A1"});
expect(() => {ms932Encoder.encode("\u81A2")}).toThrowError({name:"TypeError",message:"EncodingError U+81A2"});
expect([...ms932Encoder.encode("膣膤")].join(",")).toBe("228,83,228,82"); // U+81A3
expect(() => {ms932Encoder.encode("\u81A5")}).toThrowError({name:"TypeError",message:"EncodingError U+81A5"});
expect(() => {ms932Encoder.encode("\u81A6")}).toThrowError({name:"TypeError",message:"EncodingError U+81A6"});
expect(() => {ms932Encoder.encode("\u81A7")}).toThrowError({name:"TypeError",message:"EncodingError U+81A7"});
expect([...ms932Encoder.encode("膨膩")].join(",")).toBe("150,99,228,86"); // U+81A8
expect(() => {ms932Encoder.encode("\u81AA")}).toThrowError({name:"TypeError",message:"EncodingError U+81AA"});
expect(() => {ms932Encoder.encode("\u81AB")}).toThrowError({name:"TypeError",message:"EncodingError U+81AB"});
expect(() => {ms932Encoder.encode("\u81AC")}).toThrowError({name:"TypeError",message:"EncodingError U+81AC"});
expect(() => {ms932Encoder.encode("\u81AD")}).toThrowError({name:"TypeError",message:"EncodingError U+81AD"});
expect(() => {ms932Encoder.encode("\u81AE")}).toThrowError({name:"TypeError",message:"EncodingError U+81AE"});
expect(() => {ms932Encoder.encode("\u81AF")}).toThrowError({name:"TypeError",message:"EncodingError U+81AF"});
expect([...ms932Encoder.encode("膰")].join(",")).toBe("228,87"); // U+81B0
expect(() => {ms932Encoder.encode("\u81B1")}).toThrowError({name:"TypeError",message:"EncodingError U+81B1"});
expect(() => {ms932Encoder.encode("\u81B2")}).toThrowError({name:"TypeError",message:"EncodingError U+81B2"});
expect([...ms932Encoder.encode("膳")].join(",")).toBe("145,86"); // U+81B3
expect(() => {ms932Encoder.encode("\u81B4")}).toThrowError({name:"TypeError",message:"EncodingError U+81B4"});
expect([...ms932Encoder.encode("膵")].join(",")).toBe("228,88"); // U+81B5
expect(() => {ms932Encoder.encode("\u81B6")}).toThrowError({name:"TypeError",message:"EncodingError U+81B6"});
expect(() => {ms932Encoder.encode("\u81B7")}).toThrowError({name:"TypeError",message:"EncodingError U+81B7"});
expect([...ms932Encoder.encode("膸")].join(",")).toBe("228,90"); // U+81B8
expect(() => {ms932Encoder.encode("\u81B9")}).toThrowError({name:"TypeError",message:"EncodingError U+81B9"});
expect([...ms932Encoder.encode("膺")].join(",")).toBe("228,94"); // U+81BA
expect(() => {ms932Encoder.encode("\u81BB")}).toThrowError({name:"TypeError",message:"EncodingError U+81BB"});
expect(() => {ms932Encoder.encode("\u81BC")}).toThrowError({name:"TypeError",message:"EncodingError U+81BC"});
expect([...ms932Encoder.encode("膽膾膿臀")].join(",")).toBe("228,91,228,89,148,94,228,92"); // U+81BD
expect(() => {ms932Encoder.encode("\u81C1")}).toThrowError({name:"TypeError",message:"EncodingError U+81C1"});
expect([...ms932Encoder.encode("臂")].join(",")).toBe("228,93"); // U+81C2
expect(() => {ms932Encoder.encode("\u81C3")}).toThrowError({name:"TypeError",message:"EncodingError U+81C3"});
expect(() => {ms932Encoder.encode("\u81C4")}).toThrowError({name:"TypeError",message:"EncodingError U+81C4"});
expect(() => {ms932Encoder.encode("\u81C5")}).toThrowError({name:"TypeError",message:"EncodingError U+81C5"});
expect([...ms932Encoder.encode("臆")].join(",")).toBe("137,176"); // U+81C6
expect(() => {ms932Encoder.encode("\u81C7")}).toThrowError({name:"TypeError",message:"EncodingError U+81C7"});
expect([...ms932Encoder.encode("臈臉")].join(",")).toBe("228,100,228,95"); // U+81C8
expect(() => {ms932Encoder.encode("\u81CA")}).toThrowError({name:"TypeError",message:"EncodingError U+81CA"});
expect(() => {ms932Encoder.encode("\u81CB")}).toThrowError({name:"TypeError",message:"EncodingError U+81CB"});
expect(() => {ms932Encoder.encode("\u81CC")}).toThrowError({name:"TypeError",message:"EncodingError U+81CC"});
expect([...ms932Encoder.encode("臍")].join(",")).toBe("228,96"); // U+81CD
expect(() => {ms932Encoder.encode("\u81CE")}).toThrowError({name:"TypeError",message:"EncodingError U+81CE"});
expect(() => {ms932Encoder.encode("\u81CF")}).toThrowError({name:"TypeError",message:"EncodingError U+81CF"});
expect(() => {ms932Encoder.encode("\u81D0")}).toThrowError({name:"TypeError",message:"EncodingError U+81D0"});
expect([...ms932Encoder.encode("臑")].join(",")).toBe("228,97"); // U+81D1
expect(() => {ms932Encoder.encode("\u81D2")}).toThrowError({name:"TypeError",message:"EncodingError U+81D2"});
expect([...ms932Encoder.encode("臓")].join(",")).toBe("145,159"); // U+81D3
expect(() => {ms932Encoder.encode("\u81D4")}).toThrowError({name:"TypeError",message:"EncodingError U+81D4"});
expect(() => {ms932Encoder.encode("\u81D5")}).toThrowError({name:"TypeError",message:"EncodingError U+81D5"});
expect(() => {ms932Encoder.encode("\u81D6")}).toThrowError({name:"TypeError",message:"EncodingError U+81D6"});
expect(() => {ms932Encoder.encode("\u81D7")}).toThrowError({name:"TypeError",message:"EncodingError U+81D7"});
expect([...ms932Encoder.encode("臘臙臚")].join(",")).toBe("228,99,228,98,228,101"); // U+81D8
expect(() => {ms932Encoder.encode("\u81DB")}).toThrowError({name:"TypeError",message:"EncodingError U+81DB"});
expect(() => {ms932Encoder.encode("\u81DC")}).toThrowError({name:"TypeError",message:"EncodingError U+81DC"});
expect(() => {ms932Encoder.encode("\u81DD")}).toThrowError({name:"TypeError",message:"EncodingError U+81DD"});
expect(() => {ms932Encoder.encode("\u81DE")}).toThrowError({name:"TypeError",message:"EncodingError U+81DE"});
expect([...ms932Encoder.encode("臟臠")].join(",")).toBe("228,102,228,103"); // U+81DF
expect(() => {ms932Encoder.encode("\u81E1")}).toThrowError({name:"TypeError",message:"EncodingError U+81E1"});
expect(() => {ms932Encoder.encode("\u81E2")}).toThrowError({name:"TypeError",message:"EncodingError U+81E2"});
expect([...ms932Encoder.encode("臣")].join(",")).toBe("144,98"); // U+81E3
expect(() => {ms932Encoder.encode("\u81E4")}).toThrowError({name:"TypeError",message:"EncodingError U+81E4"});
expect([...ms932Encoder.encode("臥")].join(",")).toBe("137,231"); // U+81E5
expect(() => {ms932Encoder.encode("\u81E6")}).toThrowError({name:"TypeError",message:"EncodingError U+81E6"});
expect([...ms932Encoder.encode("臧臨")].join(",")).toBe("228,104,151,213"); // U+81E7
expect(() => {ms932Encoder.encode("\u81E9")}).toThrowError({name:"TypeError",message:"EncodingError U+81E9"});
expect([...ms932Encoder.encode("自")].join(",")).toBe("142,169"); // U+81EA
expect(() => {ms932Encoder.encode("\u81EB")}).toThrowError({name:"TypeError",message:"EncodingError U+81EB"});
expect(() => {ms932Encoder.encode("\u81EC")}).toThrowError({name:"TypeError",message:"EncodingError U+81EC"});
expect([...ms932Encoder.encode("臭")].join(",")).toBe("143,76"); // U+81ED
expect(() => {ms932Encoder.encode("\u81EE")}).toThrowError({name:"TypeError",message:"EncodingError U+81EE"});
expect(() => {ms932Encoder.encode("\u81EF")}).toThrowError({name:"TypeError",message:"EncodingError U+81EF"});
expect(() => {ms932Encoder.encode("\u81F0")}).toThrowError({name:"TypeError",message:"EncodingError U+81F0"});
expect(() => {ms932Encoder.encode("\u81F1")}).toThrowError({name:"TypeError",message:"EncodingError U+81F1"});
expect(() => {ms932Encoder.encode("\u81F2")}).toThrowError({name:"TypeError",message:"EncodingError U+81F2"});
expect([...ms932Encoder.encode("至致")].join(",")).toBe("142,138,146,118"); // U+81F3
expect(() => {ms932Encoder.encode("\u81F5")}).toThrowError({name:"TypeError",message:"EncodingError U+81F5"});
expect(() => {ms932Encoder.encode("\u81F6")}).toThrowError({name:"TypeError",message:"EncodingError U+81F6"});
expect(() => {ms932Encoder.encode("\u81F7")}).toThrowError({name:"TypeError",message:"EncodingError U+81F7"});
expect(() => {ms932Encoder.encode("\u81F8")}).toThrowError({name:"TypeError",message:"EncodingError U+81F8"});
expect(() => {ms932Encoder.encode("\u81F9")}).toThrowError({name:"TypeError",message:"EncodingError U+81F9"});
expect([...ms932Encoder.encode("臺臻臼")].join(",")).toBe("228,105,228,106,137,80"); // U+81FA
expect(() => {ms932Encoder.encode("\u81FD")}).toThrowError({name:"TypeError",message:"EncodingError U+81FD"});
expect([...ms932Encoder.encode("臾")].join(",")).toBe("228,107"); // U+81FE
expect(() => {ms932Encoder.encode("\u81FF")}).toThrowError({name:"TypeError",message:"EncodingError U+81FF"});
expect(() => {ms932Encoder.encode("\u8200")}).toThrowError({name:"TypeError",message:"EncodingError U+8200"});
expect([...ms932Encoder.encode("舁舂")].join(",")).toBe("228,108,228,109"); // U+8201
expect(() => {ms932Encoder.encode("\u8203")}).toThrowError({name:"TypeError",message:"EncodingError U+8203"});
expect(() => {ms932Encoder.encode("\u8204")}).toThrowError({name:"TypeError",message:"EncodingError U+8204"});
expect([...ms932Encoder.encode("舅")].join(",")).toBe("228,110"); // U+8205
expect(() => {ms932Encoder.encode("\u8206")}).toThrowError({name:"TypeError",message:"EncodingError U+8206"});
expect([...ms932Encoder.encode("與興舉舊")].join(",")).toBe("228,111,139,187,157,168,228,112"); // U+8207
expect(() => {ms932Encoder.encode("\u820B")}).toThrowError({name:"TypeError",message:"EncodingError U+820B"});
expect([...ms932Encoder.encode("舌舍舎")].join(",")).toBe("144,227,228,113,142,201"); // U+820C
expect(() => {ms932Encoder.encode("\u820F")}).toThrowError({name:"TypeError",message:"EncodingError U+820F"});
expect([...ms932Encoder.encode("舐")].join(",")).toBe("228,114"); // U+8210
expect(() => {ms932Encoder.encode("\u8211")}).toThrowError({name:"TypeError",message:"EncodingError U+8211"});
expect([...ms932Encoder.encode("舒")].join(",")).toBe("152,174"); // U+8212
expect(() => {ms932Encoder.encode("\u8213")}).toThrowError({name:"TypeError",message:"EncodingError U+8213"});
expect(() => {ms932Encoder.encode("\u8214")}).toThrowError({name:"TypeError",message:"EncodingError U+8214"});
expect(() => {ms932Encoder.encode("\u8215")}).toThrowError({name:"TypeError",message:"EncodingError U+8215"});
expect([...ms932Encoder.encode("舖舗舘")].join(",")).toBe("228,115,149,220,138,218"); // U+8216
expect(() => {ms932Encoder.encode("\u8219")}).toThrowError({name:"TypeError",message:"EncodingError U+8219"});
expect(() => {ms932Encoder.encode("\u821A")}).toThrowError({name:"TypeError",message:"EncodingError U+821A"});
expect([...ms932Encoder.encode("舛舜")].join(",")).toBe("145,67,143,119"); // U+821B
expect(() => {ms932Encoder.encode("\u821D")}).toThrowError({name:"TypeError",message:"EncodingError U+821D"});
expect([...ms932Encoder.encode("舞舟")].join(",")).toBe("149,145,143,77"); // U+821E
expect(() => {ms932Encoder.encode("\u8220")}).toThrowError({name:"TypeError",message:"EncodingError U+8220"});
expect(() => {ms932Encoder.encode("\u8221")}).toThrowError({name:"TypeError",message:"EncodingError U+8221"});
expect(() => {ms932Encoder.encode("\u8222")}).toThrowError({name:"TypeError",message:"EncodingError U+8222"});
expect(() => {ms932Encoder.encode("\u8223")}).toThrowError({name:"TypeError",message:"EncodingError U+8223"});
expect(() => {ms932Encoder.encode("\u8224")}).toThrowError({name:"TypeError",message:"EncodingError U+8224"});
expect(() => {ms932Encoder.encode("\u8225")}).toThrowError({name:"TypeError",message:"EncodingError U+8225"});
expect(() => {ms932Encoder.encode("\u8226")}).toThrowError({name:"TypeError",message:"EncodingError U+8226"});
expect(() => {ms932Encoder.encode("\u8227")}).toThrowError({name:"TypeError",message:"EncodingError U+8227"});
expect(() => {ms932Encoder.encode("\u8228")}).toThrowError({name:"TypeError",message:"EncodingError U+8228"});
expect([...ms932Encoder.encode("舩航舫般")].join(",")).toBe("228,116,141,113,228,117,148,202"); // U+8229
expect(() => {ms932Encoder.encode("\u822D")}).toThrowError({name:"TypeError",message:"EncodingError U+822D"});
expect([...ms932Encoder.encode("舮")].join(",")).toBe("228,132"); // U+822E
expect(() => {ms932Encoder.encode("\u822F")}).toThrowError({name:"TypeError",message:"EncodingError U+822F"});
expect(() => {ms932Encoder.encode("\u8230")}).toThrowError({name:"TypeError",message:"EncodingError U+8230"});
expect(() => {ms932Encoder.encode("\u8231")}).toThrowError({name:"TypeError",message:"EncodingError U+8231"});
expect(() => {ms932Encoder.encode("\u8232")}).toThrowError({name:"TypeError",message:"EncodingError U+8232"});
expect([...ms932Encoder.encode("舳")].join(",")).toBe("228,119"); // U+8233
expect(() => {ms932Encoder.encode("\u8234")}).toThrowError({name:"TypeError",message:"EncodingError U+8234"});
expect([...ms932Encoder.encode("舵舶舷舸船")].join(",")).toBe("145,199,148,149,140,189,228,118,145,68"); // U+8235
expect(() => {ms932Encoder.encode("\u823A")}).toThrowError({name:"TypeError",message:"EncodingError U+823A"});
expect(() => {ms932Encoder.encode("\u823B")}).toThrowError({name:"TypeError",message:"EncodingError U+823B"});
expect(() => {ms932Encoder.encode("\u823C")}).toThrowError({name:"TypeError",message:"EncodingError U+823C"});
expect(() => {ms932Encoder.encode("\u823D")}).toThrowError({name:"TypeError",message:"EncodingError U+823D"});
expect(() => {ms932Encoder.encode("\u823E")}).toThrowError({name:"TypeError",message:"EncodingError U+823E"});
expect(() => {ms932Encoder.encode("\u823F")}).toThrowError({name:"TypeError",message:"EncodingError U+823F"});
expect([...ms932Encoder.encode("艀")].join(",")).toBe("228,120"); // U+8240
expect(() => {ms932Encoder.encode("\u8241")}).toThrowError({name:"TypeError",message:"EncodingError U+8241"});
expect(() => {ms932Encoder.encode("\u8242")}).toThrowError({name:"TypeError",message:"EncodingError U+8242"});
expect(() => {ms932Encoder.encode("\u8243")}).toThrowError({name:"TypeError",message:"EncodingError U+8243"});
expect(() => {ms932Encoder.encode("\u8244")}).toThrowError({name:"TypeError",message:"EncodingError U+8244"});
expect(() => {ms932Encoder.encode("\u8245")}).toThrowError({name:"TypeError",message:"EncodingError U+8245"});
expect(() => {ms932Encoder.encode("\u8246")}).toThrowError({name:"TypeError",message:"EncodingError U+8246"});
expect([...ms932Encoder.encode("艇")].join(",")).toBe("146,248"); // U+8247
expect(() => {ms932Encoder.encode("\u8248")}).toThrowError({name:"TypeError",message:"EncodingError U+8248"});
expect(() => {ms932Encoder.encode("\u8249")}).toThrowError({name:"TypeError",message:"EncodingError U+8249"});
expect(() => {ms932Encoder.encode("\u824A")}).toThrowError({name:"TypeError",message:"EncodingError U+824A"});
expect(() => {ms932Encoder.encode("\u824B")}).toThrowError({name:"TypeError",message:"EncodingError U+824B"});
expect(() => {ms932Encoder.encode("\u824C")}).toThrowError({name:"TypeError",message:"EncodingError U+824C"});
expect(() => {ms932Encoder.encode("\u824D")}).toThrowError({name:"TypeError",message:"EncodingError U+824D"});
expect(() => {ms932Encoder.encode("\u824E")}).toThrowError({name:"TypeError",message:"EncodingError U+824E"});
expect(() => {ms932Encoder.encode("\u824F")}).toThrowError({name:"TypeError",message:"EncodingError U+824F"});
expect(() => {ms932Encoder.encode("\u8250")}).toThrowError({name:"TypeError",message:"EncodingError U+8250"});
expect(() => {ms932Encoder.encode("\u8251")}).toThrowError({name:"TypeError",message:"EncodingError U+8251"});
expect(() => {ms932Encoder.encode("\u8252")}).toThrowError({name:"TypeError",message:"EncodingError U+8252"});
expect(() => {ms932Encoder.encode("\u8253")}).toThrowError({name:"TypeError",message:"EncodingError U+8253"});
expect(() => {ms932Encoder.encode("\u8254")}).toThrowError({name:"TypeError",message:"EncodingError U+8254"});
expect(() => {ms932Encoder.encode("\u8255")}).toThrowError({name:"TypeError",message:"EncodingError U+8255"});
expect(() => {ms932Encoder.encode("\u8256")}).toThrowError({name:"TypeError",message:"EncodingError U+8256"});
expect(() => {ms932Encoder.encode("\u8257")}).toThrowError({name:"TypeError",message:"EncodingError U+8257"});
expect([...ms932Encoder.encode("艘艙艚")].join(",")).toBe("228,122,228,121,228,124"); // U+8258
expect(() => {ms932Encoder.encode("\u825B")}).toThrowError({name:"TypeError",message:"EncodingError U+825B"});
expect(() => {ms932Encoder.encode("\u825C")}).toThrowError({name:"TypeError",message:"EncodingError U+825C"});
expect([...ms932Encoder.encode("艝")].join(",")).toBe("228,123"); // U+825D
expect(() => {ms932Encoder.encode("\u825E")}).toThrowError({name:"TypeError",message:"EncodingError U+825E"});
expect([...ms932Encoder.encode("艟")].join(",")).toBe("228,125"); // U+825F
expect(() => {ms932Encoder.encode("\u8260")}).toThrowError({name:"TypeError",message:"EncodingError U+8260"});
expect(() => {ms932Encoder.encode("\u8261")}).toThrowError({name:"TypeError",message:"EncodingError U+8261"});
expect([...ms932Encoder.encode("艢")].join(",")).toBe("228,128"); // U+8262
expect(() => {ms932Encoder.encode("\u8263")}).toThrowError({name:"TypeError",message:"EncodingError U+8263"});
expect([...ms932Encoder.encode("艤")].join(",")).toBe("228,126"); // U+8264
expect(() => {ms932Encoder.encode("\u8265")}).toThrowError({name:"TypeError",message:"EncodingError U+8265"});
expect([...ms932Encoder.encode("艦")].join(",")).toBe("138,205"); // U+8266
expect(() => {ms932Encoder.encode("\u8267")}).toThrowError({name:"TypeError",message:"EncodingError U+8267"});
expect([...ms932Encoder.encode("艨")].join(",")).toBe("228,129"); // U+8268
expect(() => {ms932Encoder.encode("\u8269")}).toThrowError({name:"TypeError",message:"EncodingError U+8269"});
expect([...ms932Encoder.encode("艪艫")].join(",")).toBe("228,130,228,131"); // U+826A
expect(() => {ms932Encoder.encode("\u826C")}).toThrowError({name:"TypeError",message:"EncodingError U+826C"});
expect(() => {ms932Encoder.encode("\u826D")}).toThrowError({name:"TypeError",message:"EncodingError U+826D"});
expect([...ms932Encoder.encode("艮良")].join(",")).toBe("141,175,151,199"); // U+826E
expect(() => {ms932Encoder.encode("\u8270")}).toThrowError({name:"TypeError",message:"EncodingError U+8270"});
expect([...ms932Encoder.encode("艱色")].join(",")).toBe("228,133,144,70"); // U+8271
expect(() => {ms932Encoder.encode("\u8273")}).toThrowError({name:"TypeError",message:"EncodingError U+8273"});
expect(() => {ms932Encoder.encode("\u8274")}).toThrowError({name:"TypeError",message:"EncodingError U+8274"});
expect(() => {ms932Encoder.encode("\u8275")}).toThrowError({name:"TypeError",message:"EncodingError U+8275"});
expect([...ms932Encoder.encode("艶艷艸")].join(",")).toBe("137,144,228,134,228,135"); // U+8276
expect(() => {ms932Encoder.encode("\u8279")}).toThrowError({name:"TypeError",message:"EncodingError U+8279"});
expect(() => {ms932Encoder.encode("\u827A")}).toThrowError({name:"TypeError",message:"EncodingError U+827A"});
expect(() => {ms932Encoder.encode("\u827B")}).toThrowError({name:"TypeError",message:"EncodingError U+827B"});
expect(() => {ms932Encoder.encode("\u827C")}).toThrowError({name:"TypeError",message:"EncodingError U+827C"});
expect(() => {ms932Encoder.encode("\u827D")}).toThrowError({name:"TypeError",message:"EncodingError U+827D"});
expect([...ms932Encoder.encode("艾")].join(",")).toBe("228,136"); // U+827E
expect(() => {ms932Encoder.encode("\u827F")}).toThrowError({name:"TypeError",message:"EncodingError U+827F"});
expect(() => {ms932Encoder.encode("\u8280")}).toThrowError({name:"TypeError",message:"EncodingError U+8280"});
expect(() => {ms932Encoder.encode("\u8281")}).toThrowError({name:"TypeError",message:"EncodingError U+8281"});
expect(() => {ms932Encoder.encode("\u8282")}).toThrowError({name:"TypeError",message:"EncodingError U+8282"});
expect(() => {ms932Encoder.encode("\u8283")}).toThrowError({name:"TypeError",message:"EncodingError U+8283"});
expect(() => {ms932Encoder.encode("\u8284")}).toThrowError({name:"TypeError",message:"EncodingError U+8284"});
expect(() => {ms932Encoder.encode("\u8285")}).toThrowError({name:"TypeError",message:"EncodingError U+8285"});
expect(() => {ms932Encoder.encode("\u8286")}).toThrowError({name:"TypeError",message:"EncodingError U+8286"});
expect(() => {ms932Encoder.encode("\u8287")}).toThrowError({name:"TypeError",message:"EncodingError U+8287"});
expect(() => {ms932Encoder.encode("\u8288")}).toThrowError({name:"TypeError",message:"EncodingError U+8288"});
expect(() => {ms932Encoder.encode("\u8289")}).toThrowError({name:"TypeError",message:"EncodingError U+8289"});
expect(() => {ms932Encoder.encode("\u828A")}).toThrowError({name:"TypeError",message:"EncodingError U+828A"});
expect([...ms932Encoder.encode("芋")].join(",")).toBe("136,240"); // U+828B
expect(() => {ms932Encoder.encode("\u828C")}).toThrowError({name:"TypeError",message:"EncodingError U+828C"});
expect([...ms932Encoder.encode("芍")].join(",")).toBe("228,137"); // U+828D
expect(() => {ms932Encoder.encode("\u828E")}).toThrowError({name:"TypeError",message:"EncodingError U+828E"});
expect(() => {ms932Encoder.encode("\u828F")}).toThrowError({name:"TypeError",message:"EncodingError U+828F"});
expect(() => {ms932Encoder.encode("\u8290")}).toThrowError({name:"TypeError",message:"EncodingError U+8290"});
expect(() => {ms932Encoder.encode("\u8291")}).toThrowError({name:"TypeError",message:"EncodingError U+8291"});
expect([...ms932Encoder.encode("芒")].join(",")).toBe("228,138"); // U+8292
expect(() => {ms932Encoder.encode("\u8293")}).toThrowError({name:"TypeError",message:"EncodingError U+8293"});
expect(() => {ms932Encoder.encode("\u8294")}).toThrowError({name:"TypeError",message:"EncodingError U+8294"});
expect(() => {ms932Encoder.encode("\u8295")}).toThrowError({name:"TypeError",message:"EncodingError U+8295"});
expect(() => {ms932Encoder.encode("\u8296")}).toThrowError({name:"TypeError",message:"EncodingError U+8296"});
expect(() => {ms932Encoder.encode("\u8297")}).toThrowError({name:"TypeError",message:"EncodingError U+8297"});
expect(() => {ms932Encoder.encode("\u8298")}).toThrowError({name:"TypeError",message:"EncodingError U+8298"});
expect([...ms932Encoder.encode("芙")].join(",")).toBe("149,135"); // U+8299
expect(() => {ms932Encoder.encode("\u829A")}).toThrowError({name:"TypeError",message:"EncodingError U+829A"});
expect(() => {ms932Encoder.encode("\u829B")}).toThrowError({name:"TypeError",message:"EncodingError U+829B"});
expect(() => {ms932Encoder.encode("\u829C")}).toThrowError({name:"TypeError",message:"EncodingError U+829C"});
expect([...ms932Encoder.encode("芝")].join(",")).toBe("142,197"); // U+829D
expect(() => {ms932Encoder.encode("\u829E")}).toThrowError({name:"TypeError",message:"EncodingError U+829E"});
expect([...ms932Encoder.encode("芟")].join(",")).toBe("228,140"); // U+829F
expect(() => {ms932Encoder.encode("\u82A0")}).toThrowError({name:"TypeError",message:"EncodingError U+82A0"});
expect(() => {ms932Encoder.encode("\u82A1")}).toThrowError({name:"TypeError",message:"EncodingError U+82A1"});
expect(() => {ms932Encoder.encode("\u82A2")}).toThrowError({name:"TypeError",message:"EncodingError U+82A2"});
expect(() => {ms932Encoder.encode("\u82A3")}).toThrowError({name:"TypeError",message:"EncodingError U+82A3"});
expect(() => {ms932Encoder.encode("\u82A4")}).toThrowError({name:"TypeError",message:"EncodingError U+82A4"});
expect([...ms932Encoder.encode("芥芦")].join(",")).toBe("138,72,136,176"); // U+82A5
expect(() => {ms932Encoder.encode("\u82A7")}).toThrowError({name:"TypeError",message:"EncodingError U+82A7"});
expect(() => {ms932Encoder.encode("\u82A8")}).toThrowError({name:"TypeError",message:"EncodingError U+82A8"});
expect(() => {ms932Encoder.encode("\u82A9")}).toThrowError({name:"TypeError",message:"EncodingError U+82A9"});
expect(() => {ms932Encoder.encode("\u82AA")}).toThrowError({name:"TypeError",message:"EncodingError U+82AA"});
expect([...ms932Encoder.encode("芫芬芭")].join(",")).toBe("228,139,228,142,148,109"); // U+82AB
expect(() => {ms932Encoder.encode("\u82AE")}).toThrowError({name:"TypeError",message:"EncodingError U+82AE"});
expect([...ms932Encoder.encode("芯")].join(",")).toBe("144,99"); // U+82AF
expect(() => {ms932Encoder.encode("\u82B0")}).toThrowError({name:"TypeError",message:"EncodingError U+82B0"});
expect([...ms932Encoder.encode("花")].join(",")).toBe("137,212"); // U+82B1
expect(() => {ms932Encoder.encode("\u82B2")}).toThrowError({name:"TypeError",message:"EncodingError U+82B2"});
expect([...ms932Encoder.encode("芳")].join(",")).toBe("150,70"); // U+82B3
expect(() => {ms932Encoder.encode("\u82B4")}).toThrowError({name:"TypeError",message:"EncodingError U+82B4"});
expect(() => {ms932Encoder.encode("\u82B5")}).toThrowError({name:"TypeError",message:"EncodingError U+82B5"});
expect(() => {ms932Encoder.encode("\u82B6")}).toThrowError({name:"TypeError",message:"EncodingError U+82B6"});
expect(() => {ms932Encoder.encode("\u82B7")}).toThrowError({name:"TypeError",message:"EncodingError U+82B7"});
expect([...ms932Encoder.encode("芸芹")].join(",")).toBe("140,124,139,218"); // U+82B8
expect(() => {ms932Encoder.encode("\u82BA")}).toThrowError({name:"TypeError",message:"EncodingError U+82BA"});
expect([...ms932Encoder.encode("芻")].join(",")).toBe("228,141"); // U+82BB
expect(() => {ms932Encoder.encode("\u82BC")}).toThrowError({name:"TypeError",message:"EncodingError U+82BC"});
expect([...ms932Encoder.encode("芽")].join(",")).toBe("137,232"); // U+82BD
expect(() => {ms932Encoder.encode("\u82BE")}).toThrowError({name:"TypeError",message:"EncodingError U+82BE"});
expect(() => {ms932Encoder.encode("\u82BF")}).toThrowError({name:"TypeError",message:"EncodingError U+82BF"});
expect(() => {ms932Encoder.encode("\u82C0")}).toThrowError({name:"TypeError",message:"EncodingError U+82C0"});
expect(() => {ms932Encoder.encode("\u82C1")}).toThrowError({name:"TypeError",message:"EncodingError U+82C1"});
expect(() => {ms932Encoder.encode("\u82C2")}).toThrowError({name:"TypeError",message:"EncodingError U+82C2"});
expect(() => {ms932Encoder.encode("\u82C3")}).toThrowError({name:"TypeError",message:"EncodingError U+82C3"});
expect(() => {ms932Encoder.encode("\u82C4")}).toThrowError({name:"TypeError",message:"EncodingError U+82C4"});
expect([...ms932Encoder.encode("苅")].join(",")).toBe("138,161"); // U+82C5
expect(() => {ms932Encoder.encode("\u82C6")}).toThrowError({name:"TypeError",message:"EncodingError U+82C6"});
expect(() => {ms932Encoder.encode("\u82C7")}).toThrowError({name:"TypeError",message:"EncodingError U+82C7"});
expect(() => {ms932Encoder.encode("\u82C8")}).toThrowError({name:"TypeError",message:"EncodingError U+82C8"});
expect(() => {ms932Encoder.encode("\u82C9")}).toThrowError({name:"TypeError",message:"EncodingError U+82C9"});
expect(() => {ms932Encoder.encode("\u82CA")}).toThrowError({name:"TypeError",message:"EncodingError U+82CA"});
expect(() => {ms932Encoder.encode("\u82CB")}).toThrowError({name:"TypeError",message:"EncodingError U+82CB"});
expect(() => {ms932Encoder.encode("\u82CC")}).toThrowError({name:"TypeError",message:"EncodingError U+82CC"});
expect(() => {ms932Encoder.encode("\u82CD")}).toThrowError({name:"TypeError",message:"EncodingError U+82CD"});
expect(() => {ms932Encoder.encode("\u82CE")}).toThrowError({name:"TypeError",message:"EncodingError U+82CE"});
expect(() => {ms932Encoder.encode("\u82CF")}).toThrowError({name:"TypeError",message:"EncodingError U+82CF"});
expect(() => {ms932Encoder.encode("\u82D0")}).toThrowError({name:"TypeError",message:"EncodingError U+82D0"});
expect([...ms932Encoder.encode("苑苒苓苔")].join(",")).toBe("137,145,228,146,151,232,145,219"); // U+82D1
expect(() => {ms932Encoder.encode("\u82D5")}).toThrowError({name:"TypeError",message:"EncodingError U+82D5"});
expect(() => {ms932Encoder.encode("\u82D6")}).toThrowError({name:"TypeError",message:"EncodingError U+82D6"});
expect([...ms932Encoder.encode("苗")].join(",")).toBe("149,99"); // U+82D7
expect(() => {ms932Encoder.encode("\u82D8")}).toThrowError({name:"TypeError",message:"EncodingError U+82D8"});
expect([...ms932Encoder.encode("苙")].join(",")).toBe("228,158"); // U+82D9
expect(() => {ms932Encoder.encode("\u82DA")}).toThrowError({name:"TypeError",message:"EncodingError U+82DA"});
expect([...ms932Encoder.encode("苛苜")].join(",")).toBe("137,213,228,156"); // U+82DB
expect(() => {ms932Encoder.encode("\u82DD")}).toThrowError({name:"TypeError",message:"EncodingError U+82DD"});
expect([...ms932Encoder.encode("苞苟")].join(",")).toBe("228,154,228,145"); // U+82DE
expect(() => {ms932Encoder.encode("\u82E0")}).toThrowError({name:"TypeError",message:"EncodingError U+82E0"});
expect([...ms932Encoder.encode("苡")].join(",")).toBe("228,143"); // U+82E1
expect(() => {ms932Encoder.encode("\u82E2")}).toThrowError({name:"TypeError",message:"EncodingError U+82E2"});
expect([...ms932Encoder.encode("苣")].join(",")).toBe("228,144"); // U+82E3
expect(() => {ms932Encoder.encode("\u82E4")}).toThrowError({name:"TypeError",message:"EncodingError U+82E4"});
expect([...ms932Encoder.encode("若苦苧")].join(",")).toBe("142,225,139,234,146,151"); // U+82E5
expect(() => {ms932Encoder.encode("\u82E8")}).toThrowError({name:"TypeError",message:"EncodingError U+82E8"});
expect(() => {ms932Encoder.encode("\u82E9")}).toThrowError({name:"TypeError",message:"EncodingError U+82E9"});
expect(() => {ms932Encoder.encode("\u82EA")}).toThrowError({name:"TypeError",message:"EncodingError U+82EA"});
expect([...ms932Encoder.encode("苫")].join(",")).toBe("147,207"); // U+82EB
expect(() => {ms932Encoder.encode("\u82EC")}).toThrowError({name:"TypeError",message:"EncodingError U+82EC"});
expect(() => {ms932Encoder.encode("\u82ED")}).toThrowError({name:"TypeError",message:"EncodingError U+82ED"});
expect(() => {ms932Encoder.encode("\u82EE")}).toThrowError({name:"TypeError",message:"EncodingError U+82EE"});
expect(() => {ms932Encoder.encode("\u82EF")}).toThrowError({name:"TypeError",message:"EncodingError U+82EF"});
expect(() => {ms932Encoder.encode("\u82F0")}).toThrowError({name:"TypeError",message:"EncodingError U+82F0"});
expect([...ms932Encoder.encode("英")].join(",")).toBe("137,112"); // U+82F1
expect(() => {ms932Encoder.encode("\u82F2")}).toThrowError({name:"TypeError",message:"EncodingError U+82F2"});
expect([...ms932Encoder.encode("苳苴")].join(",")).toBe("228,148,228,147"); // U+82F3
expect(() => {ms932Encoder.encode("\u82F5")}).toThrowError({name:"TypeError",message:"EncodingError U+82F5"});
expect(() => {ms932Encoder.encode("\u82F6")}).toThrowError({name:"TypeError",message:"EncodingError U+82F6"});
expect(() => {ms932Encoder.encode("\u82F7")}).toThrowError({name:"TypeError",message:"EncodingError U+82F7"});
expect(() => {ms932Encoder.encode("\u82F8")}).toThrowError({name:"TypeError",message:"EncodingError U+82F8"});
expect([...ms932Encoder.encode("苹苺苻")].join(",")).toBe("228,153,228,149,228,152"); // U+82F9
expect(() => {ms932Encoder.encode("\u82FC")}).toThrowError({name:"TypeError",message:"EncodingError U+82FC"});
expect(() => {ms932Encoder.encode("\u82FD")}).toThrowError({name:"TypeError",message:"EncodingError U+82FD"});
expect(() => {ms932Encoder.encode("\u82FE")}).toThrowError({name:"TypeError",message:"EncodingError U+82FE"});
expect(() => {ms932Encoder.encode("\u82FF")}).toThrowError({name:"TypeError",message:"EncodingError U+82FF"});
expect(() => {ms932Encoder.encode("\u8300")}).toThrowError({name:"TypeError",message:"EncodingError U+8300"});
expect([...ms932Encoder.encode("茁茂范茄茅茆")].join(",")).toBe("251,147,150,206,228,151,137,214,138,157,228,155"); // U+8301
expect(() => {ms932Encoder.encode("\u8307")}).toThrowError({name:"TypeError",message:"EncodingError U+8307"});
expect(() => {ms932Encoder.encode("\u8308")}).toThrowError({name:"TypeError",message:"EncodingError U+8308"});
expect([...ms932Encoder.encode("茉")].join(",")).toBe("228,157"); // U+8309
expect(() => {ms932Encoder.encode("\u830A")}).toThrowError({name:"TypeError",message:"EncodingError U+830A"});
expect(() => {ms932Encoder.encode("\u830B")}).toThrowError({name:"TypeError",message:"EncodingError U+830B"});
expect(() => {ms932Encoder.encode("\u830C")}).toThrowError({name:"TypeError",message:"EncodingError U+830C"});
expect(() => {ms932Encoder.encode("\u830D")}).toThrowError({name:"TypeError",message:"EncodingError U+830D"});
expect([...ms932Encoder.encode("茎")].join(",")).toBe("140,115"); // U+830E
expect(() => {ms932Encoder.encode("\u830F")}).toThrowError({name:"TypeError",message:"EncodingError U+830F"});
expect(() => {ms932Encoder.encode("\u8310")}).toThrowError({name:"TypeError",message:"EncodingError U+8310"});
expect(() => {ms932Encoder.encode("\u8311")}).toThrowError({name:"TypeError",message:"EncodingError U+8311"});
expect(() => {ms932Encoder.encode("\u8312")}).toThrowError({name:"TypeError",message:"EncodingError U+8312"});
expect(() => {ms932Encoder.encode("\u8313")}).toThrowError({name:"TypeError",message:"EncodingError U+8313"});
expect(() => {ms932Encoder.encode("\u8314")}).toThrowError({name:"TypeError",message:"EncodingError U+8314"});
expect(() => {ms932Encoder.encode("\u8315")}).toThrowError({name:"TypeError",message:"EncodingError U+8315"});
expect([...ms932Encoder.encode("茖茗茘")].join(",")).toBe("228,161,228,170,228,171"); // U+8316
expect(() => {ms932Encoder.encode("\u8319")}).toThrowError({name:"TypeError",message:"EncodingError U+8319"});
expect(() => {ms932Encoder.encode("\u831A")}).toThrowError({name:"TypeError",message:"EncodingError U+831A"});
expect(() => {ms932Encoder.encode("\u831B")}).toThrowError({name:"TypeError",message:"EncodingError U+831B"});
expect([...ms932Encoder.encode("茜")].join(",")).toBe("136,169"); // U+831C
expect(() => {ms932Encoder.encode("\u831D")}).toThrowError({name:"TypeError",message:"EncodingError U+831D"});
expect(() => {ms932Encoder.encode("\u831E")}).toThrowError({name:"TypeError",message:"EncodingError U+831E"});
expect(() => {ms932Encoder.encode("\u831F")}).toThrowError({name:"TypeError",message:"EncodingError U+831F"});
expect(() => {ms932Encoder.encode("\u8320")}).toThrowError({name:"TypeError",message:"EncodingError U+8320"});
expect(() => {ms932Encoder.encode("\u8321")}).toThrowError({name:"TypeError",message:"EncodingError U+8321"});
expect(() => {ms932Encoder.encode("\u8322")}).toThrowError({name:"TypeError",message:"EncodingError U+8322"});
expect([...ms932Encoder.encode("茣")].join(",")).toBe("228,178"); // U+8323
expect(() => {ms932Encoder.encode("\u8324")}).toThrowError({name:"TypeError",message:"EncodingError U+8324"});
expect(() => {ms932Encoder.encode("\u8325")}).toThrowError({name:"TypeError",message:"EncodingError U+8325"});
expect(() => {ms932Encoder.encode("\u8326")}).toThrowError({name:"TypeError",message:"EncodingError U+8326"});
expect(() => {ms932Encoder.encode("\u8327")}).toThrowError({name:"TypeError",message:"EncodingError U+8327"});
expect([...ms932Encoder.encode("茨")].join(",")).toBe("136,239"); // U+8328
expect(() => {ms932Encoder.encode("\u8329")}).toThrowError({name:"TypeError",message:"EncodingError U+8329"});
expect(() => {ms932Encoder.encode("\u832A")}).toThrowError({name:"TypeError",message:"EncodingError U+832A"});
expect([...ms932Encoder.encode("茫")].join(",")).toBe("228,169"); // U+832B
expect(() => {ms932Encoder.encode("\u832C")}).toThrowError({name:"TypeError",message:"EncodingError U+832C"});
expect(() => {ms932Encoder.encode("\u832D")}).toThrowError({name:"TypeError",message:"EncodingError U+832D"});
expect(() => {ms932Encoder.encode("\u832E")}).toThrowError({name:"TypeError",message:"EncodingError U+832E"});
expect([...ms932Encoder.encode("茯")].join(",")).toBe("228,168"); // U+832F
expect(() => {ms932Encoder.encode("\u8330")}).toThrowError({name:"TypeError",message:"EncodingError U+8330"});
expect([...ms932Encoder.encode("茱茲")].join(",")).toBe("228,163,228,162"); // U+8331
expect(() => {ms932Encoder.encode("\u8333")}).toThrowError({name:"TypeError",message:"EncodingError U+8333"});
expect([...ms932Encoder.encode("茴茵茶")].join(",")).toBe("228,160,228,159,146,131"); // U+8334
expect(() => {ms932Encoder.encode("\u8337")}).toThrowError({name:"TypeError",message:"EncodingError U+8337"});
expect([...ms932Encoder.encode("茸茹")].join(",")).toBe("145,249,228,165"); // U+8338
expect(() => {ms932Encoder.encode("\u833A")}).toThrowError({name:"TypeError",message:"EncodingError U+833A"});
expect(() => {ms932Encoder.encode("\u833B")}).toThrowError({name:"TypeError",message:"EncodingError U+833B"});
expect(() => {ms932Encoder.encode("\u833C")}).toThrowError({name:"TypeError",message:"EncodingError U+833C"});
expect(() => {ms932Encoder.encode("\u833D")}).toThrowError({name:"TypeError",message:"EncodingError U+833D"});
expect(() => {ms932Encoder.encode("\u833E")}).toThrowError({name:"TypeError",message:"EncodingError U+833E"});
expect(() => {ms932Encoder.encode("\u833F")}).toThrowError({name:"TypeError",message:"EncodingError U+833F"});
expect([...ms932Encoder.encode("荀")].join(",")).toBe("228,164"); // U+8340
expect(() => {ms932Encoder.encode("\u8341")}).toThrowError({name:"TypeError",message:"EncodingError U+8341"});
expect(() => {ms932Encoder.encode("\u8342")}).toThrowError({name:"TypeError",message:"EncodingError U+8342"});
expect(() => {ms932Encoder.encode("\u8343")}).toThrowError({name:"TypeError",message:"EncodingError U+8343"});
expect(() => {ms932Encoder.encode("\u8344")}).toThrowError({name:"TypeError",message:"EncodingError U+8344"});
expect([...ms932Encoder.encode("荅")].join(",")).toBe("228,167"); // U+8345
expect(() => {ms932Encoder.encode("\u8346")}).toThrowError({name:"TypeError",message:"EncodingError U+8346"});
expect(() => {ms932Encoder.encode("\u8347")}).toThrowError({name:"TypeError",message:"EncodingError U+8347"});
expect(() => {ms932Encoder.encode("\u8348")}).toThrowError({name:"TypeError",message:"EncodingError U+8348"});
expect([...ms932Encoder.encode("草荊")].join(",")).toBe("145,144,140,116"); // U+8349
expect(() => {ms932Encoder.encode("\u834B")}).toThrowError({name:"TypeError",message:"EncodingError U+834B"});
expect(() => {ms932Encoder.encode("\u834C")}).toThrowError({name:"TypeError",message:"EncodingError U+834C"});
expect(() => {ms932Encoder.encode("\u834D")}).toThrowError({name:"TypeError",message:"EncodingError U+834D"});
expect(() => {ms932Encoder.encode("\u834E")}).toThrowError({name:"TypeError",message:"EncodingError U+834E"});
expect([...ms932Encoder.encode("荏荐")].join(",")).toBe("137,96,228,166"); // U+834F
expect(() => {ms932Encoder.encode("\u8351")}).toThrowError({name:"TypeError",message:"EncodingError U+8351"});
expect([...ms932Encoder.encode("荒")].join(",")).toBe("141,114"); // U+8352
expect(() => {ms932Encoder.encode("\u8353")}).toThrowError({name:"TypeError",message:"EncodingError U+8353"});
expect(() => {ms932Encoder.encode("\u8354")}).toThrowError({name:"TypeError",message:"EncodingError U+8354"});
expect(() => {ms932Encoder.encode("\u8355")}).toThrowError({name:"TypeError",message:"EncodingError U+8355"});
expect(() => {ms932Encoder.encode("\u8356")}).toThrowError({name:"TypeError",message:"EncodingError U+8356"});
expect(() => {ms932Encoder.encode("\u8357")}).toThrowError({name:"TypeError",message:"EncodingError U+8357"});
expect([...ms932Encoder.encode("荘")].join(",")).toBe("145,145"); // U+8358
expect(() => {ms932Encoder.encode("\u8359")}).toThrowError({name:"TypeError",message:"EncodingError U+8359"});
expect(() => {ms932Encoder.encode("\u835A")}).toThrowError({name:"TypeError",message:"EncodingError U+835A"});
expect(() => {ms932Encoder.encode("\u835B")}).toThrowError({name:"TypeError",message:"EncodingError U+835B"});
expect(() => {ms932Encoder.encode("\u835C")}).toThrowError({name:"TypeError",message:"EncodingError U+835C"});
expect(() => {ms932Encoder.encode("\u835D")}).toThrowError({name:"TypeError",message:"EncodingError U+835D"});
expect(() => {ms932Encoder.encode("\u835E")}).toThrowError({name:"TypeError",message:"EncodingError U+835E"});
expect(() => {ms932Encoder.encode("\u835F")}).toThrowError({name:"TypeError",message:"EncodingError U+835F"});
expect(() => {ms932Encoder.encode("\u8360")}).toThrowError({name:"TypeError",message:"EncodingError U+8360"});
expect(() => {ms932Encoder.encode("\u8361")}).toThrowError({name:"TypeError",message:"EncodingError U+8361"});
expect([...ms932Encoder.encode("荢")].join(",")).toBe("251,148"); // U+8362
expect(() => {ms932Encoder.encode("\u8363")}).toThrowError({name:"TypeError",message:"EncodingError U+8363"});
expect(() => {ms932Encoder.encode("\u8364")}).toThrowError({name:"TypeError",message:"EncodingError U+8364"});
expect(() => {ms932Encoder.encode("\u8365")}).toThrowError({name:"TypeError",message:"EncodingError U+8365"});
expect(() => {ms932Encoder.encode("\u8366")}).toThrowError({name:"TypeError",message:"EncodingError U+8366"});
expect(() => {ms932Encoder.encode("\u8367")}).toThrowError({name:"TypeError",message:"EncodingError U+8367"});
expect(() => {ms932Encoder.encode("\u8368")}).toThrowError({name:"TypeError",message:"EncodingError U+8368"});
expect(() => {ms932Encoder.encode("\u8369")}).toThrowError({name:"TypeError",message:"EncodingError U+8369"});
expect(() => {ms932Encoder.encode("\u836A")}).toThrowError({name:"TypeError",message:"EncodingError U+836A"});
expect(() => {ms932Encoder.encode("\u836B")}).toThrowError({name:"TypeError",message:"EncodingError U+836B"});
expect(() => {ms932Encoder.encode("\u836C")}).toThrowError({name:"TypeError",message:"EncodingError U+836C"});
expect(() => {ms932Encoder.encode("\u836D")}).toThrowError({name:"TypeError",message:"EncodingError U+836D"});
expect(() => {ms932Encoder.encode("\u836E")}).toThrowError({name:"TypeError",message:"EncodingError U+836E"});
expect(() => {ms932Encoder.encode("\u836F")}).toThrowError({name:"TypeError",message:"EncodingError U+836F"});
expect(() => {ms932Encoder.encode("\u8370")}).toThrowError({name:"TypeError",message:"EncodingError U+8370"});
expect(() => {ms932Encoder.encode("\u8371")}).toThrowError({name:"TypeError",message:"EncodingError U+8371"});
expect(() => {ms932Encoder.encode("\u8372")}).toThrowError({name:"TypeError",message:"EncodingError U+8372"});
expect([...ms932Encoder.encode("荳")].join(",")).toBe("228,184"); // U+8373
expect(() => {ms932Encoder.encode("\u8374")}).toThrowError({name:"TypeError",message:"EncodingError U+8374"});
expect([...ms932Encoder.encode("荵")].join(",")).toBe("228,185"); // U+8375
expect(() => {ms932Encoder.encode("\u8376")}).toThrowError({name:"TypeError",message:"EncodingError U+8376"});
expect([...ms932Encoder.encode("荷")].join(",")).toBe("137,215"); // U+8377
expect(() => {ms932Encoder.encode("\u8378")}).toThrowError({name:"TypeError",message:"EncodingError U+8378"});
expect(() => {ms932Encoder.encode("\u8379")}).toThrowError({name:"TypeError",message:"EncodingError U+8379"});
expect(() => {ms932Encoder.encode("\u837A")}).toThrowError({name:"TypeError",message:"EncodingError U+837A"});
expect([...ms932Encoder.encode("荻荼")].join(",")).toBe("137,172,228,182"); // U+837B
expect(() => {ms932Encoder.encode("\u837D")}).toThrowError({name:"TypeError",message:"EncodingError U+837D"});
expect(() => {ms932Encoder.encode("\u837E")}).toThrowError({name:"TypeError",message:"EncodingError U+837E"});
expect([...ms932Encoder.encode("荿")].join(",")).toBe("251,149"); // U+837F
expect(() => {ms932Encoder.encode("\u8380")}).toThrowError({name:"TypeError",message:"EncodingError U+8380"});
expect(() => {ms932Encoder.encode("\u8381")}).toThrowError({name:"TypeError",message:"EncodingError U+8381"});
expect(() => {ms932Encoder.encode("\u8382")}).toThrowError({name:"TypeError",message:"EncodingError U+8382"});
expect(() => {ms932Encoder.encode("\u8383")}).toThrowError({name:"TypeError",message:"EncodingError U+8383"});
expect(() => {ms932Encoder.encode("\u8384")}).toThrowError({name:"TypeError",message:"EncodingError U+8384"});
expect([...ms932Encoder.encode("莅")].join(",")).toBe("228,172"); // U+8385
expect(() => {ms932Encoder.encode("\u8386")}).toThrowError({name:"TypeError",message:"EncodingError U+8386"});
expect([...ms932Encoder.encode("莇")].join(",")).toBe("228,180"); // U+8387
expect(() => {ms932Encoder.encode("\u8388")}).toThrowError({name:"TypeError",message:"EncodingError U+8388"});
expect([...ms932Encoder.encode("莉莊")].join(",")).toBe("228,187,228,181"); // U+8389
expect(() => {ms932Encoder.encode("\u838B")}).toThrowError({name:"TypeError",message:"EncodingError U+838B"});
expect(() => {ms932Encoder.encode("\u838C")}).toThrowError({name:"TypeError",message:"EncodingError U+838C"});
expect(() => {ms932Encoder.encode("\u838D")}).toThrowError({name:"TypeError",message:"EncodingError U+838D"});
expect([...ms932Encoder.encode("莎")].join(",")).toBe("228,179"); // U+838E
expect(() => {ms932Encoder.encode("\u838F")}).toThrowError({name:"TypeError",message:"EncodingError U+838F"});
expect(() => {ms932Encoder.encode("\u8390")}).toThrowError({name:"TypeError",message:"EncodingError U+8390"});
expect(() => {ms932Encoder.encode("\u8391")}).toThrowError({name:"TypeError",message:"EncodingError U+8391"});
expect(() => {ms932Encoder.encode("\u8392")}).toThrowError({name:"TypeError",message:"EncodingError U+8392"});
expect([...ms932Encoder.encode("莓")].join(",")).toBe("228,150"); // U+8393
expect(() => {ms932Encoder.encode("\u8394")}).toThrowError({name:"TypeError",message:"EncodingError U+8394"});
expect(() => {ms932Encoder.encode("\u8395")}).toThrowError({name:"TypeError",message:"EncodingError U+8395"});
expect([...ms932Encoder.encode("莖")].join(",")).toBe("228,177"); // U+8396
expect(() => {ms932Encoder.encode("\u8397")}).toThrowError({name:"TypeError",message:"EncodingError U+8397"});
expect(() => {ms932Encoder.encode("\u8398")}).toThrowError({name:"TypeError",message:"EncodingError U+8398"});
expect(() => {ms932Encoder.encode("\u8399")}).toThrowError({name:"TypeError",message:"EncodingError U+8399"});
expect([...ms932Encoder.encode("莚")].join(",")).toBe("228,173"); // U+839A
expect(() => {ms932Encoder.encode("\u839B")}).toThrowError({name:"TypeError",message:"EncodingError U+839B"});
expect(() => {ms932Encoder.encode("\u839C")}).toThrowError({name:"TypeError",message:"EncodingError U+839C"});
expect(() => {ms932Encoder.encode("\u839D")}).toThrowError({name:"TypeError",message:"EncodingError U+839D"});
expect([...ms932Encoder.encode("莞莟莠")].join(",")).toBe("138,206,228,175,228,186"); // U+839E
expect(() => {ms932Encoder.encode("\u83A1")}).toThrowError({name:"TypeError",message:"EncodingError U+83A1"});
expect([...ms932Encoder.encode("莢")].join(",")).toBe("228,176"); // U+83A2
expect(() => {ms932Encoder.encode("\u83A3")}).toThrowError({name:"TypeError",message:"EncodingError U+83A3"});
expect(() => {ms932Encoder.encode("\u83A4")}).toThrowError({name:"TypeError",message:"EncodingError U+83A4"});
expect(() => {ms932Encoder.encode("\u83A5")}).toThrowError({name:"TypeError",message:"EncodingError U+83A5"});
expect(() => {ms932Encoder.encode("\u83A6")}).toThrowError({name:"TypeError",message:"EncodingError U+83A6"});
expect(() => {ms932Encoder.encode("\u83A7")}).toThrowError({name:"TypeError",message:"EncodingError U+83A7"});
expect([...ms932Encoder.encode("莨")].join(",")).toBe("228,188"); // U+83A8
expect(() => {ms932Encoder.encode("\u83A9")}).toThrowError({name:"TypeError",message:"EncodingError U+83A9"});
expect([...ms932Encoder.encode("莪莫")].join(",")).toBe("228,174,148,156"); // U+83AA
expect(() => {ms932Encoder.encode("\u83AC")}).toThrowError({name:"TypeError",message:"EncodingError U+83AC"});
expect(() => {ms932Encoder.encode("\u83AD")}).toThrowError({name:"TypeError",message:"EncodingError U+83AD"});
expect(() => {ms932Encoder.encode("\u83AE")}).toThrowError({name:"TypeError",message:"EncodingError U+83AE"});
expect(() => {ms932Encoder.encode("\u83AF")}).toThrowError({name:"TypeError",message:"EncodingError U+83AF"});
expect(() => {ms932Encoder.encode("\u83B0")}).toThrowError({name:"TypeError",message:"EncodingError U+83B0"});
expect([...ms932Encoder.encode("莱")].join(",")).toBe("151,137"); // U+83B1
expect(() => {ms932Encoder.encode("\u83B2")}).toThrowError({name:"TypeError",message:"EncodingError U+83B2"});
expect(() => {ms932Encoder.encode("\u83B3")}).toThrowError({name:"TypeError",message:"EncodingError U+83B3"});
expect(() => {ms932Encoder.encode("\u83B4")}).toThrowError({name:"TypeError",message:"EncodingError U+83B4"});
expect([...ms932Encoder.encode("莵")].join(",")).toBe("228,183"); // U+83B5
expect(() => {ms932Encoder.encode("\u83B6")}).toThrowError({name:"TypeError",message:"EncodingError U+83B6"});
expect(() => {ms932Encoder.encode("\u83B7")}).toThrowError({name:"TypeError",message:"EncodingError U+83B7"});
expect(() => {ms932Encoder.encode("\u83B8")}).toThrowError({name:"TypeError",message:"EncodingError U+83B8"});
expect(() => {ms932Encoder.encode("\u83B9")}).toThrowError({name:"TypeError",message:"EncodingError U+83B9"});
expect(() => {ms932Encoder.encode("\u83BA")}).toThrowError({name:"TypeError",message:"EncodingError U+83BA"});
expect(() => {ms932Encoder.encode("\u83BB")}).toThrowError({name:"TypeError",message:"EncodingError U+83BB"});
expect(() => {ms932Encoder.encode("\u83BC")}).toThrowError({name:"TypeError",message:"EncodingError U+83BC"});
expect([...ms932Encoder.encode("莽")].join(",")).toBe("228,205"); // U+83BD
expect(() => {ms932Encoder.encode("\u83BE")}).toThrowError({name:"TypeError",message:"EncodingError U+83BE"});
expect(() => {ms932Encoder.encode("\u83BF")}).toThrowError({name:"TypeError",message:"EncodingError U+83BF"});
expect(() => {ms932Encoder.encode("\u83C0")}).toThrowError({name:"TypeError",message:"EncodingError U+83C0"});
expect([...ms932Encoder.encode("菁")].join(",")).toBe("228,197"); // U+83C1
expect(() => {ms932Encoder.encode("\u83C2")}).toThrowError({name:"TypeError",message:"EncodingError U+83C2"});
expect(() => {ms932Encoder.encode("\u83C3")}).toThrowError({name:"TypeError",message:"EncodingError U+83C3"});
expect(() => {ms932Encoder.encode("\u83C4")}).toThrowError({name:"TypeError",message:"EncodingError U+83C4"});
expect([...ms932Encoder.encode("菅")].join(",")).toBe("144,155"); // U+83C5
expect(() => {ms932Encoder.encode("\u83C6")}).toThrowError({name:"TypeError",message:"EncodingError U+83C6"});
expect([...ms932Encoder.encode("菇")].join(",")).toBe("251,150"); // U+83C7
expect(() => {ms932Encoder.encode("\u83C8")}).toThrowError({name:"TypeError",message:"EncodingError U+83C8"});
expect(() => {ms932Encoder.encode("\u83C9")}).toThrowError({name:"TypeError",message:"EncodingError U+83C9"});
expect([...ms932Encoder.encode("菊")].join(",")).toBe("139,101"); // U+83CA
expect(() => {ms932Encoder.encode("\u83CB")}).toThrowError({name:"TypeError",message:"EncodingError U+83CB"});
expect([...ms932Encoder.encode("菌")].join(",")).toBe("139,219"); // U+83CC
expect(() => {ms932Encoder.encode("\u83CD")}).toThrowError({name:"TypeError",message:"EncodingError U+83CD"});
expect([...ms932Encoder.encode("菎")].join(",")).toBe("228,192"); // U+83CE
expect(() => {ms932Encoder.encode("\u83CF")}).toThrowError({name:"TypeError",message:"EncodingError U+83CF"});
expect(() => {ms932Encoder.encode("\u83D0")}).toThrowError({name:"TypeError",message:"EncodingError U+83D0"});
expect(() => {ms932Encoder.encode("\u83D1")}).toThrowError({name:"TypeError",message:"EncodingError U+83D1"});
expect(() => {ms932Encoder.encode("\u83D2")}).toThrowError({name:"TypeError",message:"EncodingError U+83D2"});
expect([...ms932Encoder.encode("菓")].join(",")).toBe("137,217"); // U+83D3
expect(() => {ms932Encoder.encode("\u83D4")}).toThrowError({name:"TypeError",message:"EncodingError U+83D4"});
expect(() => {ms932Encoder.encode("\u83D5")}).toThrowError({name:"TypeError",message:"EncodingError U+83D5"});
expect([...ms932Encoder.encode("菖")].join(",")).toBe("143,210"); // U+83D6
expect(() => {ms932Encoder.encode("\u83D7")}).toThrowError({name:"TypeError",message:"EncodingError U+83D7"});
expect([...ms932Encoder.encode("菘")].join(",")).toBe("228,195"); // U+83D8
expect(() => {ms932Encoder.encode("\u83D9")}).toThrowError({name:"TypeError",message:"EncodingError U+83D9"});
expect(() => {ms932Encoder.encode("\u83DA")}).toThrowError({name:"TypeError",message:"EncodingError U+83DA"});
expect(() => {ms932Encoder.encode("\u83DB")}).toThrowError({name:"TypeError",message:"EncodingError U+83DB"});
expect([...ms932Encoder.encode("菜")].join(",")).toBe("141,216"); // U+83DC
expect(() => {ms932Encoder.encode("\u83DD")}).toThrowError({name:"TypeError",message:"EncodingError U+83DD"});
expect(() => {ms932Encoder.encode("\u83DE")}).toThrowError({name:"TypeError",message:"EncodingError U+83DE"});
expect([...ms932Encoder.encode("菟菠")].join(",")).toBe("147,112,228,200"); // U+83DF
expect(() => {ms932Encoder.encode("\u83E1")}).toThrowError({name:"TypeError",message:"EncodingError U+83E1"});
expect(() => {ms932Encoder.encode("\u83E2")}).toThrowError({name:"TypeError",message:"EncodingError U+83E2"});
expect(() => {ms932Encoder.encode("\u83E3")}).toThrowError({name:"TypeError",message:"EncodingError U+83E3"});
expect(() => {ms932Encoder.encode("\u83E4")}).toThrowError({name:"TypeError",message:"EncodingError U+83E4"});
expect(() => {ms932Encoder.encode("\u83E5")}).toThrowError({name:"TypeError",message:"EncodingError U+83E5"});
expect(() => {ms932Encoder.encode("\u83E6")}).toThrowError({name:"TypeError",message:"EncodingError U+83E6"});
expect(() => {ms932Encoder.encode("\u83E7")}).toThrowError({name:"TypeError",message:"EncodingError U+83E7"});
expect(() => {ms932Encoder.encode("\u83E8")}).toThrowError({name:"TypeError",message:"EncodingError U+83E8"});
expect([...ms932Encoder.encode("菩")].join(",")).toBe("149,236"); // U+83E9
expect(() => {ms932Encoder.encode("\u83EA")}).toThrowError({name:"TypeError",message:"EncodingError U+83EA"});
expect([...ms932Encoder.encode("菫")].join(",")).toBe("228,191"); // U+83EB
expect(() => {ms932Encoder.encode("\u83EC")}).toThrowError({name:"TypeError",message:"EncodingError U+83EC"});
expect(() => {ms932Encoder.encode("\u83ED")}).toThrowError({name:"TypeError",message:"EncodingError U+83ED"});
expect(() => {ms932Encoder.encode("\u83EE")}).toThrowError({name:"TypeError",message:"EncodingError U+83EE"});
expect([...ms932Encoder.encode("華菰菱菲")].join(",")).toBe("137,216,140,212,149,72,228,201"); // U+83EF
expect(() => {ms932Encoder.encode("\u83F3")}).toThrowError({name:"TypeError",message:"EncodingError U+83F3"});
expect([...ms932Encoder.encode("菴")].join(",")).toBe("228,189"); // U+83F4
expect(() => {ms932Encoder.encode("\u83F5")}).toThrowError({name:"TypeError",message:"EncodingError U+83F5"});
expect([...ms932Encoder.encode("菶菷")].join(",")).toBe("251,151,228,198"); // U+83F6
expect(() => {ms932Encoder.encode("\u83F8")}).toThrowError({name:"TypeError",message:"EncodingError U+83F8"});
expect(() => {ms932Encoder.encode("\u83F9")}).toThrowError({name:"TypeError",message:"EncodingError U+83F9"});
expect(() => {ms932Encoder.encode("\u83FA")}).toThrowError({name:"TypeError",message:"EncodingError U+83FA"});
expect([...ms932Encoder.encode("菻")].join(",")).toBe("228,208"); // U+83FB
expect(() => {ms932Encoder.encode("\u83FC")}).toThrowError({name:"TypeError",message:"EncodingError U+83FC"});
expect([...ms932Encoder.encode("菽")].join(",")).toBe("228,193"); // U+83FD
expect(() => {ms932Encoder.encode("\u83FE")}).toThrowError({name:"TypeError",message:"EncodingError U+83FE"});
expect(() => {ms932Encoder.encode("\u83FF")}).toThrowError({name:"TypeError",message:"EncodingError U+83FF"});
expect(() => {ms932Encoder.encode("\u8400")}).toThrowError({name:"TypeError",message:"EncodingError U+8400"});
expect(() => {ms932Encoder.encode("\u8401")}).toThrowError({name:"TypeError",message:"EncodingError U+8401"});
expect(() => {ms932Encoder.encode("\u8402")}).toThrowError({name:"TypeError",message:"EncodingError U+8402"});
expect([...ms932Encoder.encode("萃萄")].join(",")).toBe("228,194,147,184"); // U+8403
expect(() => {ms932Encoder.encode("\u8405")}).toThrowError({name:"TypeError",message:"EncodingError U+8405"});
expect(() => {ms932Encoder.encode("\u8406")}).toThrowError({name:"TypeError",message:"EncodingError U+8406"});
expect([...ms932Encoder.encode("萇")].join(",")).toBe("228,199"); // U+8407
expect(() => {ms932Encoder.encode("\u8408")}).toThrowError({name:"TypeError",message:"EncodingError U+8408"});
expect(() => {ms932Encoder.encode("\u8409")}).toThrowError({name:"TypeError",message:"EncodingError U+8409"});
expect(() => {ms932Encoder.encode("\u840A")}).toThrowError({name:"TypeError",message:"EncodingError U+840A"});
expect([...ms932Encoder.encode("萋萌萍萎")].join(",")).toBe("228,196,150,71,228,202,136,222"); // U+840B
expect(() => {ms932Encoder.encode("\u840F")}).toThrowError({name:"TypeError",message:"EncodingError U+840F"});
expect(() => {ms932Encoder.encode("\u8410")}).toThrowError({name:"TypeError",message:"EncodingError U+8410"});
expect(() => {ms932Encoder.encode("\u8411")}).toThrowError({name:"TypeError",message:"EncodingError U+8411"});
expect(() => {ms932Encoder.encode("\u8412")}).toThrowError({name:"TypeError",message:"EncodingError U+8412"});
expect([...ms932Encoder.encode("萓")].join(",")).toBe("228,190"); // U+8413
expect(() => {ms932Encoder.encode("\u8414")}).toThrowError({name:"TypeError",message:"EncodingError U+8414"});
expect(() => {ms932Encoder.encode("\u8415")}).toThrowError({name:"TypeError",message:"EncodingError U+8415"});
expect(() => {ms932Encoder.encode("\u8416")}).toThrowError({name:"TypeError",message:"EncodingError U+8416"});
expect(() => {ms932Encoder.encode("\u8417")}).toThrowError({name:"TypeError",message:"EncodingError U+8417"});
expect(() => {ms932Encoder.encode("\u8418")}).toThrowError({name:"TypeError",message:"EncodingError U+8418"});
expect(() => {ms932Encoder.encode("\u8419")}).toThrowError({name:"TypeError",message:"EncodingError U+8419"});
expect(() => {ms932Encoder.encode("\u841A")}).toThrowError({name:"TypeError",message:"EncodingError U+841A"});
expect(() => {ms932Encoder.encode("\u841B")}).toThrowError({name:"TypeError",message:"EncodingError U+841B"});
expect(() => {ms932Encoder.encode("\u841C")}).toThrowError({name:"TypeError",message:"EncodingError U+841C"});
expect(() => {ms932Encoder.encode("\u841D")}).toThrowError({name:"TypeError",message:"EncodingError U+841D"});
expect(() => {ms932Encoder.encode("\u841E")}).toThrowError({name:"TypeError",message:"EncodingError U+841E"});
expect(() => {ms932Encoder.encode("\u841F")}).toThrowError({name:"TypeError",message:"EncodingError U+841F"});
expect([...ms932Encoder.encode("萠")].join(",")).toBe("228,204"); // U+8420
expect(() => {ms932Encoder.encode("\u8421")}).toThrowError({name:"TypeError",message:"EncodingError U+8421"});
expect([...ms932Encoder.encode("萢")].join(",")).toBe("228,203"); // U+8422
expect(() => {ms932Encoder.encode("\u8423")}).toThrowError({name:"TypeError",message:"EncodingError U+8423"});
expect(() => {ms932Encoder.encode("\u8424")}).toThrowError({name:"TypeError",message:"EncodingError U+8424"});
expect(() => {ms932Encoder.encode("\u8425")}).toThrowError({name:"TypeError",message:"EncodingError U+8425"});
expect(() => {ms932Encoder.encode("\u8426")}).toThrowError({name:"TypeError",message:"EncodingError U+8426"});
expect(() => {ms932Encoder.encode("\u8427")}).toThrowError({name:"TypeError",message:"EncodingError U+8427"});
expect(() => {ms932Encoder.encode("\u8428")}).toThrowError({name:"TypeError",message:"EncodingError U+8428"});
expect([...ms932Encoder.encode("萩萪")].join(",")).toBe("148,139,228,210"); // U+8429
expect(() => {ms932Encoder.encode("\u842B")}).toThrowError({name:"TypeError",message:"EncodingError U+842B"});
expect([...ms932Encoder.encode("萬")].join(",")).toBe("228,221"); // U+842C
expect(() => {ms932Encoder.encode("\u842D")}).toThrowError({name:"TypeError",message:"EncodingError U+842D"});
expect(() => {ms932Encoder.encode("\u842E")}).toThrowError({name:"TypeError",message:"EncodingError U+842E"});
expect(() => {ms932Encoder.encode("\u842F")}).toThrowError({name:"TypeError",message:"EncodingError U+842F"});
expect(() => {ms932Encoder.encode("\u8430")}).toThrowError({name:"TypeError",message:"EncodingError U+8430"});
expect([...ms932Encoder.encode("萱")].join(",")).toBe("138,158"); // U+8431
expect(() => {ms932Encoder.encode("\u8432")}).toThrowError({name:"TypeError",message:"EncodingError U+8432"});
expect(() => {ms932Encoder.encode("\u8433")}).toThrowError({name:"TypeError",message:"EncodingError U+8433"});
expect(() => {ms932Encoder.encode("\u8434")}).toThrowError({name:"TypeError",message:"EncodingError U+8434"});
expect([...ms932Encoder.encode("萵")].join(",")).toBe("228,224"); // U+8435
expect(() => {ms932Encoder.encode("\u8436")}).toThrowError({name:"TypeError",message:"EncodingError U+8436"});
expect(() => {ms932Encoder.encode("\u8437")}).toThrowError({name:"TypeError",message:"EncodingError U+8437"});
expect([...ms932Encoder.encode("萸")].join(",")).toBe("228,206"); // U+8438
expect(() => {ms932Encoder.encode("\u8439")}).toThrowError({name:"TypeError",message:"EncodingError U+8439"});
expect(() => {ms932Encoder.encode("\u843A")}).toThrowError({name:"TypeError",message:"EncodingError U+843A"});
expect(() => {ms932Encoder.encode("\u843B")}).toThrowError({name:"TypeError",message:"EncodingError U+843B"});
expect([...ms932Encoder.encode("萼落")].join(",")).toBe("228,211,151,142"); // U+843C
expect(() => {ms932Encoder.encode("\u843E")}).toThrowError({name:"TypeError",message:"EncodingError U+843E"});
expect(() => {ms932Encoder.encode("\u843F")}).toThrowError({name:"TypeError",message:"EncodingError U+843F"});
expect(() => {ms932Encoder.encode("\u8440")}).toThrowError({name:"TypeError",message:"EncodingError U+8440"});
expect(() => {ms932Encoder.encode("\u8441")}).toThrowError({name:"TypeError",message:"EncodingError U+8441"});
expect(() => {ms932Encoder.encode("\u8442")}).toThrowError({name:"TypeError",message:"EncodingError U+8442"});
expect(() => {ms932Encoder.encode("\u8443")}).toThrowError({name:"TypeError",message:"EncodingError U+8443"});
expect(() => {ms932Encoder.encode("\u8444")}).toThrowError({name:"TypeError",message:"EncodingError U+8444"});
expect(() => {ms932Encoder.encode("\u8445")}).toThrowError({name:"TypeError",message:"EncodingError U+8445"});
expect([...ms932Encoder.encode("葆")].join(",")).toBe("228,220"); // U+8446
expect(() => {ms932Encoder.encode("\u8447")}).toThrowError({name:"TypeError",message:"EncodingError U+8447"});
expect([...ms932Encoder.encode("葈葉")].join(",")).toBe("251,152,151,116"); // U+8448
expect(() => {ms932Encoder.encode("\u844A")}).toThrowError({name:"TypeError",message:"EncodingError U+844A"});
expect(() => {ms932Encoder.encode("\u844B")}).toThrowError({name:"TypeError",message:"EncodingError U+844B"});
expect(() => {ms932Encoder.encode("\u844C")}).toThrowError({name:"TypeError",message:"EncodingError U+844C"});
expect(() => {ms932Encoder.encode("\u844D")}).toThrowError({name:"TypeError",message:"EncodingError U+844D"});
expect([...ms932Encoder.encode("葎")].join(",")).toBe("151,168"); // U+844E
expect(() => {ms932Encoder.encode("\u844F")}).toThrowError({name:"TypeError",message:"EncodingError U+844F"});
expect(() => {ms932Encoder.encode("\u8450")}).toThrowError({name:"TypeError",message:"EncodingError U+8450"});
expect(() => {ms932Encoder.encode("\u8451")}).toThrowError({name:"TypeError",message:"EncodingError U+8451"});
expect(() => {ms932Encoder.encode("\u8452")}).toThrowError({name:"TypeError",message:"EncodingError U+8452"});
expect(() => {ms932Encoder.encode("\u8453")}).toThrowError({name:"TypeError",message:"EncodingError U+8453"});
expect(() => {ms932Encoder.encode("\u8454")}).toThrowError({name:"TypeError",message:"EncodingError U+8454"});
expect(() => {ms932Encoder.encode("\u8455")}).toThrowError({name:"TypeError",message:"EncodingError U+8455"});
expect(() => {ms932Encoder.encode("\u8456")}).toThrowError({name:"TypeError",message:"EncodingError U+8456"});
expect([...ms932Encoder.encode("著")].join(",")).toBe("146,152"); // U+8457
expect(() => {ms932Encoder.encode("\u8458")}).toThrowError({name:"TypeError",message:"EncodingError U+8458"});
expect(() => {ms932Encoder.encode("\u8459")}).toThrowError({name:"TypeError",message:"EncodingError U+8459"});
expect(() => {ms932Encoder.encode("\u845A")}).toThrowError({name:"TypeError",message:"EncodingError U+845A"});
expect([...ms932Encoder.encode("葛")].join(",")).toBe("138,139"); // U+845B
expect(() => {ms932Encoder.encode("\u845C")}).toThrowError({name:"TypeError",message:"EncodingError U+845C"});
expect(() => {ms932Encoder.encode("\u845D")}).toThrowError({name:"TypeError",message:"EncodingError U+845D"});
expect(() => {ms932Encoder.encode("\u845E")}).toThrowError({name:"TypeError",message:"EncodingError U+845E"});
expect(() => {ms932Encoder.encode("\u845F")}).toThrowError({name:"TypeError",message:"EncodingError U+845F"});
expect(() => {ms932Encoder.encode("\u8460")}).toThrowError({name:"TypeError",message:"EncodingError U+8460"});
expect([...ms932Encoder.encode("葡葢董")].join(",")).toBe("149,146,228,226,147,159"); // U+8461
expect(() => {ms932Encoder.encode("\u8464")}).toThrowError({name:"TypeError",message:"EncodingError U+8464"});
expect(() => {ms932Encoder.encode("\u8465")}).toThrowError({name:"TypeError",message:"EncodingError U+8465"});
expect([...ms932Encoder.encode("葦")].join(",")).toBe("136,175"); // U+8466
expect(() => {ms932Encoder.encode("\u8467")}).toThrowError({name:"TypeError",message:"EncodingError U+8467"});
expect(() => {ms932Encoder.encode("\u8468")}).toThrowError({name:"TypeError",message:"EncodingError U+8468"});
expect([...ms932Encoder.encode("葩")].join(",")).toBe("228,219"); // U+8469
expect(() => {ms932Encoder.encode("\u846A")}).toThrowError({name:"TypeError",message:"EncodingError U+846A"});
expect([...ms932Encoder.encode("葫葬葭葮葯")].join(",")).toBe("228,215,145,146,228,209,228,217,228,222"); // U+846B
expect(() => {ms932Encoder.encode("\u8470")}).toThrowError({name:"TypeError",message:"EncodingError U+8470"});
expect([...ms932Encoder.encode("葱")].join(",")).toBe("148,75"); // U+8471
expect(() => {ms932Encoder.encode("\u8472")}).toThrowError({name:"TypeError",message:"EncodingError U+8472"});
expect(() => {ms932Encoder.encode("\u8473")}).toThrowError({name:"TypeError",message:"EncodingError U+8473"});
expect(() => {ms932Encoder.encode("\u8474")}).toThrowError({name:"TypeError",message:"EncodingError U+8474"});
expect([...ms932Encoder.encode("葵")].join(",")).toBe("136,168"); // U+8475
expect(() => {ms932Encoder.encode("\u8476")}).toThrowError({name:"TypeError",message:"EncodingError U+8476"});
expect([...ms932Encoder.encode("葷")].join(",")).toBe("228,214"); // U+8477
expect(() => {ms932Encoder.encode("\u8478")}).toThrowError({name:"TypeError",message:"EncodingError U+8478"});
expect([...ms932Encoder.encode("葹葺")].join(",")).toBe("228,223,149,152"); // U+8479
expect(() => {ms932Encoder.encode("\u847B")}).toThrowError({name:"TypeError",message:"EncodingError U+847B"});
expect(() => {ms932Encoder.encode("\u847C")}).toThrowError({name:"TypeError",message:"EncodingError U+847C"});
expect(() => {ms932Encoder.encode("\u847D")}).toThrowError({name:"TypeError",message:"EncodingError U+847D"});
expect(() => {ms932Encoder.encode("\u847E")}).toThrowError({name:"TypeError",message:"EncodingError U+847E"});
expect(() => {ms932Encoder.encode("\u847F")}).toThrowError({name:"TypeError",message:"EncodingError U+847F"});
expect(() => {ms932Encoder.encode("\u8480")}).toThrowError({name:"TypeError",message:"EncodingError U+8480"});
expect(() => {ms932Encoder.encode("\u8481")}).toThrowError({name:"TypeError",message:"EncodingError U+8481"});
expect([...ms932Encoder.encode("蒂")].join(",")).toBe("228,218"); // U+8482
expect(() => {ms932Encoder.encode("\u8483")}).toThrowError({name:"TypeError",message:"EncodingError U+8483"});
expect([...ms932Encoder.encode("蒄")].join(",")).toBe("228,213"); // U+8484
expect(() => {ms932Encoder.encode("\u8485")}).toThrowError({name:"TypeError",message:"EncodingError U+8485"});
expect(() => {ms932Encoder.encode("\u8486")}).toThrowError({name:"TypeError",message:"EncodingError U+8486"});
expect(() => {ms932Encoder.encode("\u8487")}).toThrowError({name:"TypeError",message:"EncodingError U+8487"});
expect(() => {ms932Encoder.encode("\u8488")}).toThrowError({name:"TypeError",message:"EncodingError U+8488"});
expect(() => {ms932Encoder.encode("\u8489")}).toThrowError({name:"TypeError",message:"EncodingError U+8489"});
expect(() => {ms932Encoder.encode("\u848A")}).toThrowError({name:"TypeError",message:"EncodingError U+848A"});
expect([...ms932Encoder.encode("蒋")].join(",")).toBe("143,211"); // U+848B
expect(() => {ms932Encoder.encode("\u848C")}).toThrowError({name:"TypeError",message:"EncodingError U+848C"});
expect(() => {ms932Encoder.encode("\u848D")}).toThrowError({name:"TypeError",message:"EncodingError U+848D"});
expect(() => {ms932Encoder.encode("\u848E")}).toThrowError({name:"TypeError",message:"EncodingError U+848E"});
expect(() => {ms932Encoder.encode("\u848F")}).toThrowError({name:"TypeError",message:"EncodingError U+848F"});
expect([...ms932Encoder.encode("蒐")].join(",")).toBe("143,78"); // U+8490
expect(() => {ms932Encoder.encode("\u8491")}).toThrowError({name:"TypeError",message:"EncodingError U+8491"});
expect(() => {ms932Encoder.encode("\u8492")}).toThrowError({name:"TypeError",message:"EncodingError U+8492"});
expect(() => {ms932Encoder.encode("\u8493")}).toThrowError({name:"TypeError",message:"EncodingError U+8493"});
expect([...ms932Encoder.encode("蒔")].join(",")).toBe("142,170"); // U+8494
expect(() => {ms932Encoder.encode("\u8495")}).toThrowError({name:"TypeError",message:"EncodingError U+8495"});
expect(() => {ms932Encoder.encode("\u8496")}).toThrowError({name:"TypeError",message:"EncodingError U+8496"});
expect(() => {ms932Encoder.encode("\u8497")}).toThrowError({name:"TypeError",message:"EncodingError U+8497"});
expect(() => {ms932Encoder.encode("\u8498")}).toThrowError({name:"TypeError",message:"EncodingError U+8498"});
expect([...ms932Encoder.encode("蒙")].join(",")).toBe("150,214"); // U+8499
expect(() => {ms932Encoder.encode("\u849A")}).toThrowError({name:"TypeError",message:"EncodingError U+849A"});
expect(() => {ms932Encoder.encode("\u849B")}).toThrowError({name:"TypeError",message:"EncodingError U+849B"});
expect([...ms932Encoder.encode("蒜")].join(",")).toBe("149,102"); // U+849C
expect(() => {ms932Encoder.encode("\u849D")}).toThrowError({name:"TypeError",message:"EncodingError U+849D"});
expect(() => {ms932Encoder.encode("\u849E")}).toThrowError({name:"TypeError",message:"EncodingError U+849E"});
expect([...ms932Encoder.encode("蒟")].join(",")).toBe("228,229"); // U+849F
expect(() => {ms932Encoder.encode("\u84A0")}).toThrowError({name:"TypeError",message:"EncodingError U+84A0"});
expect([...ms932Encoder.encode("蒡")].join(",")).toBe("228,238"); // U+84A1
expect(() => {ms932Encoder.encode("\u84A2")}).toThrowError({name:"TypeError",message:"EncodingError U+84A2"});
expect(() => {ms932Encoder.encode("\u84A3")}).toThrowError({name:"TypeError",message:"EncodingError U+84A3"});
expect(() => {ms932Encoder.encode("\u84A4")}).toThrowError({name:"TypeError",message:"EncodingError U+84A4"});
expect(() => {ms932Encoder.encode("\u84A5")}).toThrowError({name:"TypeError",message:"EncodingError U+84A5"});
expect(() => {ms932Encoder.encode("\u84A6")}).toThrowError({name:"TypeError",message:"EncodingError U+84A6"});
expect(() => {ms932Encoder.encode("\u84A7")}).toThrowError({name:"TypeError",message:"EncodingError U+84A7"});
expect(() => {ms932Encoder.encode("\u84A8")}).toThrowError({name:"TypeError",message:"EncodingError U+84A8"});
expect(() => {ms932Encoder.encode("\u84A9")}).toThrowError({name:"TypeError",message:"EncodingError U+84A9"});
expect(() => {ms932Encoder.encode("\u84AA")}).toThrowError({name:"TypeError",message:"EncodingError U+84AA"});
expect(() => {ms932Encoder.encode("\u84AB")}).toThrowError({name:"TypeError",message:"EncodingError U+84AB"});
expect(() => {ms932Encoder.encode("\u84AC")}).toThrowError({name:"TypeError",message:"EncodingError U+84AC"});
expect([...ms932Encoder.encode("蒭")].join(",")).toBe("228,216"); // U+84AD
expect(() => {ms932Encoder.encode("\u84AE")}).toThrowError({name:"TypeError",message:"EncodingError U+84AE"});
expect(() => {ms932Encoder.encode("\u84AF")}).toThrowError({name:"TypeError",message:"EncodingError U+84AF"});
expect(() => {ms932Encoder.encode("\u84B0")}).toThrowError({name:"TypeError",message:"EncodingError U+84B0"});
expect(() => {ms932Encoder.encode("\u84B1")}).toThrowError({name:"TypeError",message:"EncodingError U+84B1"});
expect([...ms932Encoder.encode("蒲")].join(",")).toBe("138,151"); // U+84B2
expect(() => {ms932Encoder.encode("\u84B3")}).toThrowError({name:"TypeError",message:"EncodingError U+84B3"});
expect([...ms932Encoder.encode("蒴")].join(",")).toBe("251,153"); // U+84B4
expect(() => {ms932Encoder.encode("\u84B5")}).toThrowError({name:"TypeError",message:"EncodingError U+84B5"});
expect(() => {ms932Encoder.encode("\u84B6")}).toThrowError({name:"TypeError",message:"EncodingError U+84B6"});
expect(() => {ms932Encoder.encode("\u84B7")}).toThrowError({name:"TypeError",message:"EncodingError U+84B7"});
expect([...ms932Encoder.encode("蒸蒹")].join(",")).toBe("143,246,228,227"); // U+84B8
expect(() => {ms932Encoder.encode("\u84BA")}).toThrowError({name:"TypeError",message:"EncodingError U+84BA"});
expect([...ms932Encoder.encode("蒻蒼")].join(",")).toBe("228,232,145,147"); // U+84BB
expect(() => {ms932Encoder.encode("\u84BD")}).toThrowError({name:"TypeError",message:"EncodingError U+84BD"});
expect(() => {ms932Encoder.encode("\u84BE")}).toThrowError({name:"TypeError",message:"EncodingError U+84BE"});
expect([...ms932Encoder.encode("蒿")].join(",")).toBe("228,228"); // U+84BF
expect(() => {ms932Encoder.encode("\u84C0")}).toThrowError({name:"TypeError",message:"EncodingError U+84C0"});
expect([...ms932Encoder.encode("蓁")].join(",")).toBe("228,235"); // U+84C1
expect(() => {ms932Encoder.encode("\u84C2")}).toThrowError({name:"TypeError",message:"EncodingError U+84C2"});
expect(() => {ms932Encoder.encode("\u84C3")}).toThrowError({name:"TypeError",message:"EncodingError U+84C3"});
expect([...ms932Encoder.encode("蓄")].join(",")).toBe("146,126"); // U+84C4
expect(() => {ms932Encoder.encode("\u84C5")}).toThrowError({name:"TypeError",message:"EncodingError U+84C5"});
expect([...ms932Encoder.encode("蓆")].join(",")).toBe("228,236"); // U+84C6
expect(() => {ms932Encoder.encode("\u84C7")}).toThrowError({name:"TypeError",message:"EncodingError U+84C7"});
expect(() => {ms932Encoder.encode("\u84C8")}).toThrowError({name:"TypeError",message:"EncodingError U+84C8"});
expect([...ms932Encoder.encode("蓉蓊蓋")].join(",")).toBe("151,117,228,225,138,87"); // U+84C9
expect(() => {ms932Encoder.encode("\u84CC")}).toThrowError({name:"TypeError",message:"EncodingError U+84CC"});
expect([...ms932Encoder.encode("蓍")].join(",")).toBe("228,231"); // U+84CD
expect(() => {ms932Encoder.encode("\u84CE")}).toThrowError({name:"TypeError",message:"EncodingError U+84CE"});
expect(() => {ms932Encoder.encode("\u84CF")}).toThrowError({name:"TypeError",message:"EncodingError U+84CF"});
expect([...ms932Encoder.encode("蓐蓑")].join(",")).toBe("228,234,150,170"); // U+84D0
expect(() => {ms932Encoder.encode("\u84D2")}).toThrowError({name:"TypeError",message:"EncodingError U+84D2"});
expect(() => {ms932Encoder.encode("\u84D3")}).toThrowError({name:"TypeError",message:"EncodingError U+84D3"});
expect(() => {ms932Encoder.encode("\u84D4")}).toThrowError({name:"TypeError",message:"EncodingError U+84D4"});
expect(() => {ms932Encoder.encode("\u84D5")}).toThrowError({name:"TypeError",message:"EncodingError U+84D5"});
expect([...ms932Encoder.encode("蓖")].join(",")).toBe("228,237"); // U+84D6
expect(() => {ms932Encoder.encode("\u84D7")}).toThrowError({name:"TypeError",message:"EncodingError U+84D7"});
expect(() => {ms932Encoder.encode("\u84D8")}).toThrowError({name:"TypeError",message:"EncodingError U+84D8"});
expect([...ms932Encoder.encode("蓙蓚")].join(",")).toBe("228,230,228,233"); // U+84D9
expect(() => {ms932Encoder.encode("\u84DB")}).toThrowError({name:"TypeError",message:"EncodingError U+84DB"});
expect([...ms932Encoder.encode("蓜")].join(",")).toBe("250,96"); // U+84DC
expect(() => {ms932Encoder.encode("\u84DD")}).toThrowError({name:"TypeError",message:"EncodingError U+84DD"});
expect(() => {ms932Encoder.encode("\u84DE")}).toThrowError({name:"TypeError",message:"EncodingError U+84DE"});
expect(() => {ms932Encoder.encode("\u84DF")}).toThrowError({name:"TypeError",message:"EncodingError U+84DF"});
expect(() => {ms932Encoder.encode("\u84E0")}).toThrowError({name:"TypeError",message:"EncodingError U+84E0"});
expect(() => {ms932Encoder.encode("\u84E1")}).toThrowError({name:"TypeError",message:"EncodingError U+84E1"});
expect(() => {ms932Encoder.encode("\u84E2")}).toThrowError({name:"TypeError",message:"EncodingError U+84E2"});
expect(() => {ms932Encoder.encode("\u84E3")}).toThrowError({name:"TypeError",message:"EncodingError U+84E3"});
expect(() => {ms932Encoder.encode("\u84E4")}).toThrowError({name:"TypeError",message:"EncodingError U+84E4"});
expect(() => {ms932Encoder.encode("\u84E5")}).toThrowError({name:"TypeError",message:"EncodingError U+84E5"});
expect(() => {ms932Encoder.encode("\u84E6")}).toThrowError({name:"TypeError",message:"EncodingError U+84E6"});
expect(() => {ms932Encoder.encode("\u84E7")}).toThrowError({name:"TypeError",message:"EncodingError U+84E7"});
expect(() => {ms932Encoder.encode("\u84E8")}).toThrowError({name:"TypeError",message:"EncodingError U+84E8"});
expect(() => {ms932Encoder.encode("\u84E9")}).toThrowError({name:"TypeError",message:"EncodingError U+84E9"});
expect(() => {ms932Encoder.encode("\u84EA")}).toThrowError({name:"TypeError",message:"EncodingError U+84EA"});
expect(() => {ms932Encoder.encode("\u84EB")}).toThrowError({name:"TypeError",message:"EncodingError U+84EB"});
expect([...ms932Encoder.encode("蓬")].join(",")).toBe("150,72"); // U+84EC
expect(() => {ms932Encoder.encode("\u84ED")}).toThrowError({name:"TypeError",message:"EncodingError U+84ED"});
expect([...ms932Encoder.encode("蓮")].join(",")).toBe("152,64"); // U+84EE
expect(() => {ms932Encoder.encode("\u84EF")}).toThrowError({name:"TypeError",message:"EncodingError U+84EF"});
expect(() => {ms932Encoder.encode("\u84F0")}).toThrowError({name:"TypeError",message:"EncodingError U+84F0"});
expect(() => {ms932Encoder.encode("\u84F1")}).toThrowError({name:"TypeError",message:"EncodingError U+84F1"});
expect(() => {ms932Encoder.encode("\u84F2")}).toThrowError({name:"TypeError",message:"EncodingError U+84F2"});
expect(() => {ms932Encoder.encode("\u84F3")}).toThrowError({name:"TypeError",message:"EncodingError U+84F3"});
expect([...ms932Encoder.encode("蓴")].join(",")).toBe("228,241"); // U+84F4
expect(() => {ms932Encoder.encode("\u84F5")}).toThrowError({name:"TypeError",message:"EncodingError U+84F5"});
expect(() => {ms932Encoder.encode("\u84F6")}).toThrowError({name:"TypeError",message:"EncodingError U+84F6"});
expect(() => {ms932Encoder.encode("\u84F7")}).toThrowError({name:"TypeError",message:"EncodingError U+84F7"});
expect(() => {ms932Encoder.encode("\u84F8")}).toThrowError({name:"TypeError",message:"EncodingError U+84F8"});
expect(() => {ms932Encoder.encode("\u84F9")}).toThrowError({name:"TypeError",message:"EncodingError U+84F9"});
expect(() => {ms932Encoder.encode("\u84FA")}).toThrowError({name:"TypeError",message:"EncodingError U+84FA"});
expect(() => {ms932Encoder.encode("\u84FB")}).toThrowError({name:"TypeError",message:"EncodingError U+84FB"});
expect([...ms932Encoder.encode("蓼")].join(",")).toBe("228,248"); // U+84FC
expect(() => {ms932Encoder.encode("\u84FD")}).toThrowError({name:"TypeError",message:"EncodingError U+84FD"});
expect(() => {ms932Encoder.encode("\u84FE")}).toThrowError({name:"TypeError",message:"EncodingError U+84FE"});
expect([...ms932Encoder.encode("蓿蔀")].join(",")).toBe("228,240,142,193"); // U+84FF
expect(() => {ms932Encoder.encode("\u8501")}).toThrowError({name:"TypeError",message:"EncodingError U+8501"});
expect(() => {ms932Encoder.encode("\u8502")}).toThrowError({name:"TypeError",message:"EncodingError U+8502"});
expect(() => {ms932Encoder.encode("\u8503")}).toThrowError({name:"TypeError",message:"EncodingError U+8503"});
expect(() => {ms932Encoder.encode("\u8504")}).toThrowError({name:"TypeError",message:"EncodingError U+8504"});
expect(() => {ms932Encoder.encode("\u8505")}).toThrowError({name:"TypeError",message:"EncodingError U+8505"});
expect([...ms932Encoder.encode("蔆")].join(",")).toBe("228,207"); // U+8506
expect(() => {ms932Encoder.encode("\u8507")}).toThrowError({name:"TypeError",message:"EncodingError U+8507"});
expect(() => {ms932Encoder.encode("\u8508")}).toThrowError({name:"TypeError",message:"EncodingError U+8508"});
expect(() => {ms932Encoder.encode("\u8509")}).toThrowError({name:"TypeError",message:"EncodingError U+8509"});
expect(() => {ms932Encoder.encode("\u850A")}).toThrowError({name:"TypeError",message:"EncodingError U+850A"});
expect(() => {ms932Encoder.encode("\u850B")}).toThrowError({name:"TypeError",message:"EncodingError U+850B"});
expect(() => {ms932Encoder.encode("\u850C")}).toThrowError({name:"TypeError",message:"EncodingError U+850C"});
expect(() => {ms932Encoder.encode("\u850D")}).toThrowError({name:"TypeError",message:"EncodingError U+850D"});
expect(() => {ms932Encoder.encode("\u850E")}).toThrowError({name:"TypeError",message:"EncodingError U+850E"});
expect(() => {ms932Encoder.encode("\u850F")}).toThrowError({name:"TypeError",message:"EncodingError U+850F"});
expect(() => {ms932Encoder.encode("\u8510")}).toThrowError({name:"TypeError",message:"EncodingError U+8510"});
expect([...ms932Encoder.encode("蔑")].join(",")).toBe("149,204"); // U+8511
expect(() => {ms932Encoder.encode("\u8512")}).toThrowError({name:"TypeError",message:"EncodingError U+8512"});
expect([...ms932Encoder.encode("蔓蔔蔕")].join(",")).toBe("150,160,228,247,228,246"); // U+8513
expect(() => {ms932Encoder.encode("\u8516")}).toThrowError({name:"TypeError",message:"EncodingError U+8516"});
expect([...ms932Encoder.encode("蔗蔘")].join(",")).toBe("228,242,228,243"); // U+8517
expect(() => {ms932Encoder.encode("\u8519")}).toThrowError({name:"TypeError",message:"EncodingError U+8519"});
expect([...ms932Encoder.encode("蔚")].join(",")).toBe("137,85"); // U+851A
expect(() => {ms932Encoder.encode("\u851B")}).toThrowError({name:"TypeError",message:"EncodingError U+851B"});
expect(() => {ms932Encoder.encode("\u851C")}).toThrowError({name:"TypeError",message:"EncodingError U+851C"});
expect(() => {ms932Encoder.encode("\u851D")}).toThrowError({name:"TypeError",message:"EncodingError U+851D"});
expect(() => {ms932Encoder.encode("\u851E")}).toThrowError({name:"TypeError",message:"EncodingError U+851E"});
expect([...ms932Encoder.encode("蔟")].join(",")).toBe("228,245"); // U+851F
expect(() => {ms932Encoder.encode("\u8520")}).toThrowError({name:"TypeError",message:"EncodingError U+8520"});
expect([...ms932Encoder.encode("蔡")].join(",")).toBe("228,239"); // U+8521
expect(() => {ms932Encoder.encode("\u8522")}).toThrowError({name:"TypeError",message:"EncodingError U+8522"});
expect(() => {ms932Encoder.encode("\u8523")}).toThrowError({name:"TypeError",message:"EncodingError U+8523"});
expect(() => {ms932Encoder.encode("\u8524")}).toThrowError({name:"TypeError",message:"EncodingError U+8524"});
expect(() => {ms932Encoder.encode("\u8525")}).toThrowError({name:"TypeError",message:"EncodingError U+8525"});
expect([...ms932Encoder.encode("蔦")].join(",")).toBe("146,211"); // U+8526
expect(() => {ms932Encoder.encode("\u8527")}).toThrowError({name:"TypeError",message:"EncodingError U+8527"});
expect(() => {ms932Encoder.encode("\u8528")}).toThrowError({name:"TypeError",message:"EncodingError U+8528"});
expect(() => {ms932Encoder.encode("\u8529")}).toThrowError({name:"TypeError",message:"EncodingError U+8529"});
expect(() => {ms932Encoder.encode("\u852A")}).toThrowError({name:"TypeError",message:"EncodingError U+852A"});
expect(() => {ms932Encoder.encode("\u852B")}).toThrowError({name:"TypeError",message:"EncodingError U+852B"});
expect([...ms932Encoder.encode("蔬蔭")].join(",")).toBe("228,244,136,252"); // U+852C
expect(() => {ms932Encoder.encode("\u852E")}).toThrowError({name:"TypeError",message:"EncodingError U+852E"});
expect(() => {ms932Encoder.encode("\u852F")}).toThrowError({name:"TypeError",message:"EncodingError U+852F"});
expect(() => {ms932Encoder.encode("\u8530")}).toThrowError({name:"TypeError",message:"EncodingError U+8530"});
expect(() => {ms932Encoder.encode("\u8531")}).toThrowError({name:"TypeError",message:"EncodingError U+8531"});
expect(() => {ms932Encoder.encode("\u8532")}).toThrowError({name:"TypeError",message:"EncodingError U+8532"});
expect(() => {ms932Encoder.encode("\u8533")}).toThrowError({name:"TypeError",message:"EncodingError U+8533"});
expect(() => {ms932Encoder.encode("\u8534")}).toThrowError({name:"TypeError",message:"EncodingError U+8534"});
expect([...ms932Encoder.encode("蔵")].join(",")).toBe("145,160"); // U+8535
expect(() => {ms932Encoder.encode("\u8536")}).toThrowError({name:"TypeError",message:"EncodingError U+8536"});
expect(() => {ms932Encoder.encode("\u8537")}).toThrowError({name:"TypeError",message:"EncodingError U+8537"});
expect(() => {ms932Encoder.encode("\u8538")}).toThrowError({name:"TypeError",message:"EncodingError U+8538"});
expect(() => {ms932Encoder.encode("\u8539")}).toThrowError({name:"TypeError",message:"EncodingError U+8539"});
expect(() => {ms932Encoder.encode("\u853A")}).toThrowError({name:"TypeError",message:"EncodingError U+853A"});
expect(() => {ms932Encoder.encode("\u853B")}).toThrowError({name:"TypeError",message:"EncodingError U+853B"});
expect(() => {ms932Encoder.encode("\u853C")}).toThrowError({name:"TypeError",message:"EncodingError U+853C"});
expect([...ms932Encoder.encode("蔽")].join(",")).toBe("149,193"); // U+853D
expect(() => {ms932Encoder.encode("\u853E")}).toThrowError({name:"TypeError",message:"EncodingError U+853E"});
expect(() => {ms932Encoder.encode("\u853F")}).toThrowError({name:"TypeError",message:"EncodingError U+853F"});
expect([...ms932Encoder.encode("蕀蕁")].join(",")).toBe("228,249,229,64"); // U+8540
expect(() => {ms932Encoder.encode("\u8542")}).toThrowError({name:"TypeError",message:"EncodingError U+8542"});
expect([...ms932Encoder.encode("蕃")].join(",")).toBe("148,215"); // U+8543
expect(() => {ms932Encoder.encode("\u8544")}).toThrowError({name:"TypeError",message:"EncodingError U+8544"});
expect(() => {ms932Encoder.encode("\u8545")}).toThrowError({name:"TypeError",message:"EncodingError U+8545"});
expect(() => {ms932Encoder.encode("\u8546")}).toThrowError({name:"TypeError",message:"EncodingError U+8546"});
expect(() => {ms932Encoder.encode("\u8547")}).toThrowError({name:"TypeError",message:"EncodingError U+8547"});
expect([...ms932Encoder.encode("蕈蕉蕊蕋")].join(",")).toBe("228,252,143,212,142,199,229,66"); // U+8548
expect(() => {ms932Encoder.encode("\u854C")}).toThrowError({name:"TypeError",message:"EncodingError U+854C"});
expect(() => {ms932Encoder.encode("\u854D")}).toThrowError({name:"TypeError",message:"EncodingError U+854D"});
expect([...ms932Encoder.encode("蕎")].join(",")).toBe("139,188"); // U+854E
expect(() => {ms932Encoder.encode("\u854F")}).toThrowError({name:"TypeError",message:"EncodingError U+854F"});
expect(() => {ms932Encoder.encode("\u8550")}).toThrowError({name:"TypeError",message:"EncodingError U+8550"});
expect(() => {ms932Encoder.encode("\u8551")}).toThrowError({name:"TypeError",message:"EncodingError U+8551"});
expect(() => {ms932Encoder.encode("\u8552")}).toThrowError({name:"TypeError",message:"EncodingError U+8552"});
expect([...ms932Encoder.encode("蕓")].join(",")).toBe("251,154"); // U+8553
expect(() => {ms932Encoder.encode("\u8554")}).toThrowError({name:"TypeError",message:"EncodingError U+8554"});
expect([...ms932Encoder.encode("蕕")].join(",")).toBe("229,67"); // U+8555
expect(() => {ms932Encoder.encode("\u8556")}).toThrowError({name:"TypeError",message:"EncodingError U+8556"});
expect([...ms932Encoder.encode("蕗蕘蕙蕚")].join(",")).toBe("149,153,228,251,251,155,228,212"); // U+8557
expect(() => {ms932Encoder.encode("\u855B")}).toThrowError({name:"TypeError",message:"EncodingError U+855B"});
expect(() => {ms932Encoder.encode("\u855C")}).toThrowError({name:"TypeError",message:"EncodingError U+855C"});
expect(() => {ms932Encoder.encode("\u855D")}).toThrowError({name:"TypeError",message:"EncodingError U+855D"});
expect(() => {ms932Encoder.encode("\u855E")}).toThrowError({name:"TypeError",message:"EncodingError U+855E"});
expect(() => {ms932Encoder.encode("\u855F")}).toThrowError({name:"TypeError",message:"EncodingError U+855F"});
expect(() => {ms932Encoder.encode("\u8560")}).toThrowError({name:"TypeError",message:"EncodingError U+8560"});
expect(() => {ms932Encoder.encode("\u8561")}).toThrowError({name:"TypeError",message:"EncodingError U+8561"});
expect(() => {ms932Encoder.encode("\u8562")}).toThrowError({name:"TypeError",message:"EncodingError U+8562"});
expect([...ms932Encoder.encode("蕣")].join(",")).toBe("228,250"); // U+8563
expect(() => {ms932Encoder.encode("\u8564")}).toThrowError({name:"TypeError",message:"EncodingError U+8564"});
expect(() => {ms932Encoder.encode("\u8565")}).toThrowError({name:"TypeError",message:"EncodingError U+8565"});
expect(() => {ms932Encoder.encode("\u8566")}).toThrowError({name:"TypeError",message:"EncodingError U+8566"});
expect(() => {ms932Encoder.encode("\u8567")}).toThrowError({name:"TypeError",message:"EncodingError U+8567"});
expect([...ms932Encoder.encode("蕨蕩蕪蕫")].join(",")).toBe("152,110,147,160,149,147,251,156"); // U+8568
expect(() => {ms932Encoder.encode("\u856C")}).toThrowError({name:"TypeError",message:"EncodingError U+856C"});
expect([...ms932Encoder.encode("蕭")].join(",")).toBe("229,74"); // U+856D
expect(() => {ms932Encoder.encode("\u856E")}).toThrowError({name:"TypeError",message:"EncodingError U+856E"});
expect(() => {ms932Encoder.encode("\u856F")}).toThrowError({name:"TypeError",message:"EncodingError U+856F"});
expect(() => {ms932Encoder.encode("\u8570")}).toThrowError({name:"TypeError",message:"EncodingError U+8570"});
expect(() => {ms932Encoder.encode("\u8571")}).toThrowError({name:"TypeError",message:"EncodingError U+8571"});
expect(() => {ms932Encoder.encode("\u8572")}).toThrowError({name:"TypeError",message:"EncodingError U+8572"});
expect(() => {ms932Encoder.encode("\u8573")}).toThrowError({name:"TypeError",message:"EncodingError U+8573"});
expect(() => {ms932Encoder.encode("\u8574")}).toThrowError({name:"TypeError",message:"EncodingError U+8574"});
expect(() => {ms932Encoder.encode("\u8575")}).toThrowError({name:"TypeError",message:"EncodingError U+8575"});
expect(() => {ms932Encoder.encode("\u8576")}).toThrowError({name:"TypeError",message:"EncodingError U+8576"});
expect([...ms932Encoder.encode("蕷")].join(",")).toBe("229,80"); // U+8577
expect(() => {ms932Encoder.encode("\u8578")}).toThrowError({name:"TypeError",message:"EncodingError U+8578"});
expect(() => {ms932Encoder.encode("\u8579")}).toThrowError({name:"TypeError",message:"EncodingError U+8579"});
expect(() => {ms932Encoder.encode("\u857A")}).toThrowError({name:"TypeError",message:"EncodingError U+857A"});
expect(() => {ms932Encoder.encode("\u857B")}).toThrowError({name:"TypeError",message:"EncodingError U+857B"});
expect(() => {ms932Encoder.encode("\u857C")}).toThrowError({name:"TypeError",message:"EncodingError U+857C"});
expect(() => {ms932Encoder.encode("\u857D")}).toThrowError({name:"TypeError",message:"EncodingError U+857D"});
expect([...ms932Encoder.encode("蕾")].join(",")).toBe("229,81"); // U+857E
expect(() => {ms932Encoder.encode("\u857F")}).toThrowError({name:"TypeError",message:"EncodingError U+857F"});
expect([...ms932Encoder.encode("薀")].join(",")).toBe("229,68"); // U+8580
expect(() => {ms932Encoder.encode("\u8581")}).toThrowError({name:"TypeError",message:"EncodingError U+8581"});
expect(() => {ms932Encoder.encode("\u8582")}).toThrowError({name:"TypeError",message:"EncodingError U+8582"});
expect(() => {ms932Encoder.encode("\u8583")}).toThrowError({name:"TypeError",message:"EncodingError U+8583"});
expect([...ms932Encoder.encode("薄")].join(",")).toBe("148,150"); // U+8584
expect(() => {ms932Encoder.encode("\u8585")}).toThrowError({name:"TypeError",message:"EncodingError U+8585"});
expect(() => {ms932Encoder.encode("\u8586")}).toThrowError({name:"TypeError",message:"EncodingError U+8586"});
expect([...ms932Encoder.encode("薇薈")].join(",")).toBe("229,78,229,70"); // U+8587
expect(() => {ms932Encoder.encode("\u8589")}).toThrowError({name:"TypeError",message:"EncodingError U+8589"});
expect([...ms932Encoder.encode("薊")].join(",")).toBe("229,72"); // U+858A
expect(() => {ms932Encoder.encode("\u858B")}).toThrowError({name:"TypeError",message:"EncodingError U+858B"});
expect(() => {ms932Encoder.encode("\u858C")}).toThrowError({name:"TypeError",message:"EncodingError U+858C"});
expect(() => {ms932Encoder.encode("\u858D")}).toThrowError({name:"TypeError",message:"EncodingError U+858D"});
expect(() => {ms932Encoder.encode("\u858E")}).toThrowError({name:"TypeError",message:"EncodingError U+858E"});
expect(() => {ms932Encoder.encode("\u858F")}).toThrowError({name:"TypeError",message:"EncodingError U+858F"});
expect([...ms932Encoder.encode("薐薑")].join(",")).toBe("229,82,229,71"); // U+8590
expect(() => {ms932Encoder.encode("\u8592")}).toThrowError({name:"TypeError",message:"EncodingError U+8592"});
expect(() => {ms932Encoder.encode("\u8593")}).toThrowError({name:"TypeError",message:"EncodingError U+8593"});
expect([...ms932Encoder.encode("薔")].join(",")).toBe("229,75"); // U+8594
expect(() => {ms932Encoder.encode("\u8595")}).toThrowError({name:"TypeError",message:"EncodingError U+8595"});
expect(() => {ms932Encoder.encode("\u8596")}).toThrowError({name:"TypeError",message:"EncodingError U+8596"});
expect([...ms932Encoder.encode("薗")].join(",")).toBe("137,146"); // U+8597
expect(() => {ms932Encoder.encode("\u8598")}).toThrowError({name:"TypeError",message:"EncodingError U+8598"});
expect([...ms932Encoder.encode("薙")].join(",")).toBe("147,227"); // U+8599
expect(() => {ms932Encoder.encode("\u859A")}).toThrowError({name:"TypeError",message:"EncodingError U+859A"});
expect([...ms932Encoder.encode("薛薜")].join(",")).toBe("229,76,229,79"); // U+859B
expect(() => {ms932Encoder.encode("\u859D")}).toThrowError({name:"TypeError",message:"EncodingError U+859D"});
expect(() => {ms932Encoder.encode("\u859E")}).toThrowError({name:"TypeError",message:"EncodingError U+859E"});
expect(() => {ms932Encoder.encode("\u859F")}).toThrowError({name:"TypeError",message:"EncodingError U+859F"});
expect(() => {ms932Encoder.encode("\u85A0")}).toThrowError({name:"TypeError",message:"EncodingError U+85A0"});
expect(() => {ms932Encoder.encode("\u85A1")}).toThrowError({name:"TypeError",message:"EncodingError U+85A1"});
expect(() => {ms932Encoder.encode("\u85A2")}).toThrowError({name:"TypeError",message:"EncodingError U+85A2"});
expect(() => {ms932Encoder.encode("\u85A3")}).toThrowError({name:"TypeError",message:"EncodingError U+85A3"});
expect([...ms932Encoder.encode("薤")].join(",")).toBe("229,69"); // U+85A4
expect(() => {ms932Encoder.encode("\u85A5")}).toThrowError({name:"TypeError",message:"EncodingError U+85A5"});
expect([...ms932Encoder.encode("薦")].join(",")).toBe("145,69"); // U+85A6
expect(() => {ms932Encoder.encode("\u85A7")}).toThrowError({name:"TypeError",message:"EncodingError U+85A7"});
expect([...ms932Encoder.encode("薨薩薪薫薬")].join(",")).toBe("229,73,142,70,144,100,140,79,150,242"); // U+85A8
expect(() => {ms932Encoder.encode("\u85AD")}).toThrowError({name:"TypeError",message:"EncodingError U+85AD"});
expect([...ms932Encoder.encode("薮薯薰")].join(",")).toBe("150,247,143,146,251,158"); // U+85AE
expect(() => {ms932Encoder.encode("\u85B1")}).toThrowError({name:"TypeError",message:"EncodingError U+85B1"});
expect(() => {ms932Encoder.encode("\u85B2")}).toThrowError({name:"TypeError",message:"EncodingError U+85B2"});
expect(() => {ms932Encoder.encode("\u85B3")}).toThrowError({name:"TypeError",message:"EncodingError U+85B3"});
expect(() => {ms932Encoder.encode("\u85B4")}).toThrowError({name:"TypeError",message:"EncodingError U+85B4"});
expect(() => {ms932Encoder.encode("\u85B5")}).toThrowError({name:"TypeError",message:"EncodingError U+85B5"});
expect(() => {ms932Encoder.encode("\u85B6")}).toThrowError({name:"TypeError",message:"EncodingError U+85B6"});
expect(() => {ms932Encoder.encode("\u85B7")}).toThrowError({name:"TypeError",message:"EncodingError U+85B7"});
expect(() => {ms932Encoder.encode("\u85B8")}).toThrowError({name:"TypeError",message:"EncodingError U+85B8"});
expect([...ms932Encoder.encode("薹薺")].join(",")).toBe("229,86,229,84"); // U+85B9
expect(() => {ms932Encoder.encode("\u85BB")}).toThrowError({name:"TypeError",message:"EncodingError U+85BB"});
expect(() => {ms932Encoder.encode("\u85BC")}).toThrowError({name:"TypeError",message:"EncodingError U+85BC"});
expect(() => {ms932Encoder.encode("\u85BD")}).toThrowError({name:"TypeError",message:"EncodingError U+85BD"});
expect(() => {ms932Encoder.encode("\u85BE")}).toThrowError({name:"TypeError",message:"EncodingError U+85BE"});
expect(() => {ms932Encoder.encode("\u85BF")}).toThrowError({name:"TypeError",message:"EncodingError U+85BF"});
expect(() => {ms932Encoder.encode("\u85C0")}).toThrowError({name:"TypeError",message:"EncodingError U+85C0"});
expect([...ms932Encoder.encode("藁")].join(",")).toBe("152,109"); // U+85C1
expect(() => {ms932Encoder.encode("\u85C2")}).toThrowError({name:"TypeError",message:"EncodingError U+85C2"});
expect(() => {ms932Encoder.encode("\u85C3")}).toThrowError({name:"TypeError",message:"EncodingError U+85C3"});
expect(() => {ms932Encoder.encode("\u85C4")}).toThrowError({name:"TypeError",message:"EncodingError U+85C4"});
expect(() => {ms932Encoder.encode("\u85C5")}).toThrowError({name:"TypeError",message:"EncodingError U+85C5"});
expect(() => {ms932Encoder.encode("\u85C6")}).toThrowError({name:"TypeError",message:"EncodingError U+85C6"});
expect(() => {ms932Encoder.encode("\u85C7")}).toThrowError({name:"TypeError",message:"EncodingError U+85C7"});
expect(() => {ms932Encoder.encode("\u85C8")}).toThrowError({name:"TypeError",message:"EncodingError U+85C8"});
expect([...ms932Encoder.encode("藉")].join(",")).toBe("229,83"); // U+85C9
expect(() => {ms932Encoder.encode("\u85CA")}).toThrowError({name:"TypeError",message:"EncodingError U+85CA"});
expect(() => {ms932Encoder.encode("\u85CB")}).toThrowError({name:"TypeError",message:"EncodingError U+85CB"});
expect(() => {ms932Encoder.encode("\u85CC")}).toThrowError({name:"TypeError",message:"EncodingError U+85CC"});
expect([...ms932Encoder.encode("藍")].join(",")).toBe("151,149"); // U+85CD
expect(() => {ms932Encoder.encode("\u85CE")}).toThrowError({name:"TypeError",message:"EncodingError U+85CE"});
expect([...ms932Encoder.encode("藏藐")].join(",")).toBe("229,85,229,87"); // U+85CF
expect(() => {ms932Encoder.encode("\u85D1")}).toThrowError({name:"TypeError",message:"EncodingError U+85D1"});
expect(() => {ms932Encoder.encode("\u85D2")}).toThrowError({name:"TypeError",message:"EncodingError U+85D2"});
expect(() => {ms932Encoder.encode("\u85D3")}).toThrowError({name:"TypeError",message:"EncodingError U+85D3"});
expect(() => {ms932Encoder.encode("\u85D4")}).toThrowError({name:"TypeError",message:"EncodingError U+85D4"});
expect([...ms932Encoder.encode("藕")].join(",")).toBe("229,88"); // U+85D5
expect(() => {ms932Encoder.encode("\u85D6")}).toThrowError({name:"TypeError",message:"EncodingError U+85D6"});
expect(() => {ms932Encoder.encode("\u85D7")}).toThrowError({name:"TypeError",message:"EncodingError U+85D7"});
expect(() => {ms932Encoder.encode("\u85D8")}).toThrowError({name:"TypeError",message:"EncodingError U+85D8"});
expect(() => {ms932Encoder.encode("\u85D9")}).toThrowError({name:"TypeError",message:"EncodingError U+85D9"});
expect(() => {ms932Encoder.encode("\u85DA")}).toThrowError({name:"TypeError",message:"EncodingError U+85DA"});
expect(() => {ms932Encoder.encode("\u85DB")}).toThrowError({name:"TypeError",message:"EncodingError U+85DB"});
expect([...ms932Encoder.encode("藜藝")].join(",")).toBe("229,91,229,89"); // U+85DC
expect(() => {ms932Encoder.encode("\u85DE")}).toThrowError({name:"TypeError",message:"EncodingError U+85DE"});
expect(() => {ms932Encoder.encode("\u85DF")}).toThrowError({name:"TypeError",message:"EncodingError U+85DF"});
expect(() => {ms932Encoder.encode("\u85E0")}).toThrowError({name:"TypeError",message:"EncodingError U+85E0"});
expect(() => {ms932Encoder.encode("\u85E1")}).toThrowError({name:"TypeError",message:"EncodingError U+85E1"});
expect(() => {ms932Encoder.encode("\u85E2")}).toThrowError({name:"TypeError",message:"EncodingError U+85E2"});
expect(() => {ms932Encoder.encode("\u85E3")}).toThrowError({name:"TypeError",message:"EncodingError U+85E3"});
expect([...ms932Encoder.encode("藤藥")].join(",")).toBe("147,161,229,90"); // U+85E4
expect(() => {ms932Encoder.encode("\u85E6")}).toThrowError({name:"TypeError",message:"EncodingError U+85E6"});
expect(() => {ms932Encoder.encode("\u85E7")}).toThrowError({name:"TypeError",message:"EncodingError U+85E7"});
expect(() => {ms932Encoder.encode("\u85E8")}).toThrowError({name:"TypeError",message:"EncodingError U+85E8"});
expect([...ms932Encoder.encode("藩藪")].join(",")).toBe("148,203,229,77"); // U+85E9
expect(() => {ms932Encoder.encode("\u85EB")}).toThrowError({name:"TypeError",message:"EncodingError U+85EB"});
expect(() => {ms932Encoder.encode("\u85EC")}).toThrowError({name:"TypeError",message:"EncodingError U+85EC"});
expect(() => {ms932Encoder.encode("\u85ED")}).toThrowError({name:"TypeError",message:"EncodingError U+85ED"});
expect(() => {ms932Encoder.encode("\u85EE")}).toThrowError({name:"TypeError",message:"EncodingError U+85EE"});
expect(() => {ms932Encoder.encode("\u85EF")}).toThrowError({name:"TypeError",message:"EncodingError U+85EF"});
expect(() => {ms932Encoder.encode("\u85F0")}).toThrowError({name:"TypeError",message:"EncodingError U+85F0"});
expect(() => {ms932Encoder.encode("\u85F1")}).toThrowError({name:"TypeError",message:"EncodingError U+85F1"});
expect(() => {ms932Encoder.encode("\u85F2")}).toThrowError({name:"TypeError",message:"EncodingError U+85F2"});
expect(() => {ms932Encoder.encode("\u85F3")}).toThrowError({name:"TypeError",message:"EncodingError U+85F3"});
expect(() => {ms932Encoder.encode("\u85F4")}).toThrowError({name:"TypeError",message:"EncodingError U+85F4"});
expect(() => {ms932Encoder.encode("\u85F5")}).toThrowError({name:"TypeError",message:"EncodingError U+85F5"});
expect(() => {ms932Encoder.encode("\u85F6")}).toThrowError({name:"TypeError",message:"EncodingError U+85F6"});
expect([...ms932Encoder.encode("藷")].join(",")).toBe("143,147"); // U+85F7
expect(() => {ms932Encoder.encode("\u85F8")}).toThrowError({name:"TypeError",message:"EncodingError U+85F8"});
expect([...ms932Encoder.encode("藹藺藻")].join(",")).toBe("229,92,229,97,145,148"); // U+85F9
expect(() => {ms932Encoder.encode("\u85FC")}).toThrowError({name:"TypeError",message:"EncodingError U+85FC"});
expect(() => {ms932Encoder.encode("\u85FD")}).toThrowError({name:"TypeError",message:"EncodingError U+85FD"});
expect([...ms932Encoder.encode("藾")].join(",")).toBe("229,96"); // U+85FE
expect(() => {ms932Encoder.encode("\u85FF")}).toThrowError({name:"TypeError",message:"EncodingError U+85FF"});
expect(() => {ms932Encoder.encode("\u8600")}).toThrowError({name:"TypeError",message:"EncodingError U+8600"});
expect(() => {ms932Encoder.encode("\u8601")}).toThrowError({name:"TypeError",message:"EncodingError U+8601"});
expect([...ms932Encoder.encode("蘂")].join(",")).toBe("229,65"); // U+8602
expect(() => {ms932Encoder.encode("\u8603")}).toThrowError({name:"TypeError",message:"EncodingError U+8603"});
expect(() => {ms932Encoder.encode("\u8604")}).toThrowError({name:"TypeError",message:"EncodingError U+8604"});
expect(() => {ms932Encoder.encode("\u8605")}).toThrowError({name:"TypeError",message:"EncodingError U+8605"});
expect([...ms932Encoder.encode("蘆蘇")].join(",")).toBe("229,98,145,104"); // U+8606
expect(() => {ms932Encoder.encode("\u8608")}).toThrowError({name:"TypeError",message:"EncodingError U+8608"});
expect(() => {ms932Encoder.encode("\u8609")}).toThrowError({name:"TypeError",message:"EncodingError U+8609"});
expect([...ms932Encoder.encode("蘊蘋")].join(",")).toBe("229,93,229,95"); // U+860A
expect(() => {ms932Encoder.encode("\u860C")}).toThrowError({name:"TypeError",message:"EncodingError U+860C"});
expect(() => {ms932Encoder.encode("\u860D")}).toThrowError({name:"TypeError",message:"EncodingError U+860D"});
expect(() => {ms932Encoder.encode("\u860E")}).toThrowError({name:"TypeError",message:"EncodingError U+860E"});
expect(() => {ms932Encoder.encode("\u860F")}).toThrowError({name:"TypeError",message:"EncodingError U+860F"});
expect(() => {ms932Encoder.encode("\u8610")}).toThrowError({name:"TypeError",message:"EncodingError U+8610"});
expect(() => {ms932Encoder.encode("\u8611")}).toThrowError({name:"TypeError",message:"EncodingError U+8611"});
expect(() => {ms932Encoder.encode("\u8612")}).toThrowError({name:"TypeError",message:"EncodingError U+8612"});
expect([...ms932Encoder.encode("蘓")].join(",")).toBe("229,94"); // U+8613
expect(() => {ms932Encoder.encode("\u8614")}).toThrowError({name:"TypeError",message:"EncodingError U+8614"});
expect(() => {ms932Encoder.encode("\u8615")}).toThrowError({name:"TypeError",message:"EncodingError U+8615"});
expect([...ms932Encoder.encode("蘖蘗")].join(",")).toBe("159,80,159,65"); // U+8616
expect(() => {ms932Encoder.encode("\u8618")}).toThrowError({name:"TypeError",message:"EncodingError U+8618"});
expect(() => {ms932Encoder.encode("\u8619")}).toThrowError({name:"TypeError",message:"EncodingError U+8619"});
expect([...ms932Encoder.encode("蘚")].join(",")).toBe("229,100"); // U+861A
expect(() => {ms932Encoder.encode("\u861B")}).toThrowError({name:"TypeError",message:"EncodingError U+861B"});
expect(() => {ms932Encoder.encode("\u861C")}).toThrowError({name:"TypeError",message:"EncodingError U+861C"});
expect(() => {ms932Encoder.encode("\u861D")}).toThrowError({name:"TypeError",message:"EncodingError U+861D"});
expect(() => {ms932Encoder.encode("\u861E")}).toThrowError({name:"TypeError",message:"EncodingError U+861E"});
expect(() => {ms932Encoder.encode("\u861F")}).toThrowError({name:"TypeError",message:"EncodingError U+861F"});
expect(() => {ms932Encoder.encode("\u8620")}).toThrowError({name:"TypeError",message:"EncodingError U+8620"});
expect(() => {ms932Encoder.encode("\u8621")}).toThrowError({name:"TypeError",message:"EncodingError U+8621"});
expect([...ms932Encoder.encode("蘢")].join(",")).toBe("229,99"); // U+8622
expect(() => {ms932Encoder.encode("\u8623")}).toThrowError({name:"TypeError",message:"EncodingError U+8623"});
expect(() => {ms932Encoder.encode("\u8624")}).toThrowError({name:"TypeError",message:"EncodingError U+8624"});
expect(() => {ms932Encoder.encode("\u8625")}).toThrowError({name:"TypeError",message:"EncodingError U+8625"});
expect(() => {ms932Encoder.encode("\u8626")}).toThrowError({name:"TypeError",message:"EncodingError U+8626"});
expect(() => {ms932Encoder.encode("\u8627")}).toThrowError({name:"TypeError",message:"EncodingError U+8627"});
expect(() => {ms932Encoder.encode("\u8628")}).toThrowError({name:"TypeError",message:"EncodingError U+8628"});
expect(() => {ms932Encoder.encode("\u8629")}).toThrowError({name:"TypeError",message:"EncodingError U+8629"});
expect(() => {ms932Encoder.encode("\u862A")}).toThrowError({name:"TypeError",message:"EncodingError U+862A"});
expect(() => {ms932Encoder.encode("\u862B")}).toThrowError({name:"TypeError",message:"EncodingError U+862B"});
expect(() => {ms932Encoder.encode("\u862C")}).toThrowError({name:"TypeError",message:"EncodingError U+862C"});
expect([...ms932Encoder.encode("蘭")].join(",")).toBe("151,150"); // U+862D
expect(() => {ms932Encoder.encode("\u862E")}).toThrowError({name:"TypeError",message:"EncodingError U+862E"});
expect([...ms932Encoder.encode("蘯蘰")].join(",")).toBe("225,186,229,101"); // U+862F
expect(() => {ms932Encoder.encode("\u8631")}).toThrowError({name:"TypeError",message:"EncodingError U+8631"});
expect(() => {ms932Encoder.encode("\u8632")}).toThrowError({name:"TypeError",message:"EncodingError U+8632"});
expect(() => {ms932Encoder.encode("\u8633")}).toThrowError({name:"TypeError",message:"EncodingError U+8633"});
expect(() => {ms932Encoder.encode("\u8634")}).toThrowError({name:"TypeError",message:"EncodingError U+8634"});
expect(() => {ms932Encoder.encode("\u8635")}).toThrowError({name:"TypeError",message:"EncodingError U+8635"});
expect(() => {ms932Encoder.encode("\u8636")}).toThrowError({name:"TypeError",message:"EncodingError U+8636"});
expect(() => {ms932Encoder.encode("\u8637")}).toThrowError({name:"TypeError",message:"EncodingError U+8637"});
expect(() => {ms932Encoder.encode("\u8638")}).toThrowError({name:"TypeError",message:"EncodingError U+8638"});
expect(() => {ms932Encoder.encode("\u8639")}).toThrowError({name:"TypeError",message:"EncodingError U+8639"});
expect(() => {ms932Encoder.encode("\u863A")}).toThrowError({name:"TypeError",message:"EncodingError U+863A"});
expect(() => {ms932Encoder.encode("\u863B")}).toThrowError({name:"TypeError",message:"EncodingError U+863B"});
expect(() => {ms932Encoder.encode("\u863C")}).toThrowError({name:"TypeError",message:"EncodingError U+863C"});
expect(() => {ms932Encoder.encode("\u863D")}).toThrowError({name:"TypeError",message:"EncodingError U+863D"});
expect(() => {ms932Encoder.encode("\u863E")}).toThrowError({name:"TypeError",message:"EncodingError U+863E"});
expect([...ms932Encoder.encode("蘿")].join(",")).toBe("229,102"); // U+863F
expect(() => {ms932Encoder.encode("\u8640")}).toThrowError({name:"TypeError",message:"EncodingError U+8640"});
expect(() => {ms932Encoder.encode("\u8641")}).toThrowError({name:"TypeError",message:"EncodingError U+8641"});
expect(() => {ms932Encoder.encode("\u8642")}).toThrowError({name:"TypeError",message:"EncodingError U+8642"});
expect(() => {ms932Encoder.encode("\u8643")}).toThrowError({name:"TypeError",message:"EncodingError U+8643"});
expect(() => {ms932Encoder.encode("\u8644")}).toThrowError({name:"TypeError",message:"EncodingError U+8644"});
expect(() => {ms932Encoder.encode("\u8645")}).toThrowError({name:"TypeError",message:"EncodingError U+8645"});
expect(() => {ms932Encoder.encode("\u8646")}).toThrowError({name:"TypeError",message:"EncodingError U+8646"});
expect(() => {ms932Encoder.encode("\u8647")}).toThrowError({name:"TypeError",message:"EncodingError U+8647"});
expect(() => {ms932Encoder.encode("\u8648")}).toThrowError({name:"TypeError",message:"EncodingError U+8648"});
expect(() => {ms932Encoder.encode("\u8649")}).toThrowError({name:"TypeError",message:"EncodingError U+8649"});
expect(() => {ms932Encoder.encode("\u864A")}).toThrowError({name:"TypeError",message:"EncodingError U+864A"});
expect(() => {ms932Encoder.encode("\u864B")}).toThrowError({name:"TypeError",message:"EncodingError U+864B"});
expect(() => {ms932Encoder.encode("\u864C")}).toThrowError({name:"TypeError",message:"EncodingError U+864C"});
expect([...ms932Encoder.encode("虍虎")].join(",")).toBe("229,103,140,213"); // U+864D
expect(() => {ms932Encoder.encode("\u864F")}).toThrowError({name:"TypeError",message:"EncodingError U+864F"});
expect([...ms932Encoder.encode("虐")].join(",")).toBe("139,115"); // U+8650
expect(() => {ms932Encoder.encode("\u8651")}).toThrowError({name:"TypeError",message:"EncodingError U+8651"});
expect(() => {ms932Encoder.encode("\u8652")}).toThrowError({name:"TypeError",message:"EncodingError U+8652"});
expect(() => {ms932Encoder.encode("\u8653")}).toThrowError({name:"TypeError",message:"EncodingError U+8653"});
expect([...ms932Encoder.encode("虔處")].join(",")).toBe("229,105,153,124"); // U+8654
expect(() => {ms932Encoder.encode("\u8656")}).toThrowError({name:"TypeError",message:"EncodingError U+8656"});
expect(() => {ms932Encoder.encode("\u8657")}).toThrowError({name:"TypeError",message:"EncodingError U+8657"});
expect(() => {ms932Encoder.encode("\u8658")}).toThrowError({name:"TypeError",message:"EncodingError U+8658"});
expect(() => {ms932Encoder.encode("\u8659")}).toThrowError({name:"TypeError",message:"EncodingError U+8659"});
expect([...ms932Encoder.encode("虚")].join(",")).toBe("139,149"); // U+865A
expect(() => {ms932Encoder.encode("\u865B")}).toThrowError({name:"TypeError",message:"EncodingError U+865B"});
expect([...ms932Encoder.encode("虜")].join(",")).toBe("151,184"); // U+865C
expect(() => {ms932Encoder.encode("\u865D")}).toThrowError({name:"TypeError",message:"EncodingError U+865D"});
expect([...ms932Encoder.encode("虞號")].join(",")).toBe("139,241,229,106"); // U+865E
expect(() => {ms932Encoder.encode("\u8660")}).toThrowError({name:"TypeError",message:"EncodingError U+8660"});
expect(() => {ms932Encoder.encode("\u8661")}).toThrowError({name:"TypeError",message:"EncodingError U+8661"});
expect(() => {ms932Encoder.encode("\u8662")}).toThrowError({name:"TypeError",message:"EncodingError U+8662"});
expect(() => {ms932Encoder.encode("\u8663")}).toThrowError({name:"TypeError",message:"EncodingError U+8663"});
expect(() => {ms932Encoder.encode("\u8664")}).toThrowError({name:"TypeError",message:"EncodingError U+8664"});
expect(() => {ms932Encoder.encode("\u8665")}).toThrowError({name:"TypeError",message:"EncodingError U+8665"});
expect(() => {ms932Encoder.encode("\u8666")}).toThrowError({name:"TypeError",message:"EncodingError U+8666"});
expect([...ms932Encoder.encode("虧")].join(",")).toBe("229,107"); // U+8667
expect(() => {ms932Encoder.encode("\u8668")}).toThrowError({name:"TypeError",message:"EncodingError U+8668"});
expect(() => {ms932Encoder.encode("\u8669")}).toThrowError({name:"TypeError",message:"EncodingError U+8669"});
expect(() => {ms932Encoder.encode("\u866A")}).toThrowError({name:"TypeError",message:"EncodingError U+866A"});
expect([...ms932Encoder.encode("虫")].join(",")).toBe("146,142"); // U+866B
expect(() => {ms932Encoder.encode("\u866C")}).toThrowError({name:"TypeError",message:"EncodingError U+866C"});
expect(() => {ms932Encoder.encode("\u866D")}).toThrowError({name:"TypeError",message:"EncodingError U+866D"});
expect(() => {ms932Encoder.encode("\u866E")}).toThrowError({name:"TypeError",message:"EncodingError U+866E"});
expect(() => {ms932Encoder.encode("\u866F")}).toThrowError({name:"TypeError",message:"EncodingError U+866F"});
expect(() => {ms932Encoder.encode("\u8670")}).toThrowError({name:"TypeError",message:"EncodingError U+8670"});
expect([...ms932Encoder.encode("虱")].join(",")).toBe("229,108"); // U+8671
expect(() => {ms932Encoder.encode("\u8672")}).toThrowError({name:"TypeError",message:"EncodingError U+8672"});
expect(() => {ms932Encoder.encode("\u8673")}).toThrowError({name:"TypeError",message:"EncodingError U+8673"});
expect(() => {ms932Encoder.encode("\u8674")}).toThrowError({name:"TypeError",message:"EncodingError U+8674"});
expect(() => {ms932Encoder.encode("\u8675")}).toThrowError({name:"TypeError",message:"EncodingError U+8675"});
expect(() => {ms932Encoder.encode("\u8676")}).toThrowError({name:"TypeError",message:"EncodingError U+8676"});
expect(() => {ms932Encoder.encode("\u8677")}).toThrowError({name:"TypeError",message:"EncodingError U+8677"});
expect(() => {ms932Encoder.encode("\u8678")}).toThrowError({name:"TypeError",message:"EncodingError U+8678"});
expect([...ms932Encoder.encode("虹")].join(",")).toBe("147,248"); // U+8679
expect(() => {ms932Encoder.encode("\u867A")}).toThrowError({name:"TypeError",message:"EncodingError U+867A"});
expect([...ms932Encoder.encode("虻")].join(",")).toBe("136,184"); // U+867B
expect(() => {ms932Encoder.encode("\u867C")}).toThrowError({name:"TypeError",message:"EncodingError U+867C"});
expect(() => {ms932Encoder.encode("\u867D")}).toThrowError({name:"TypeError",message:"EncodingError U+867D"});
expect(() => {ms932Encoder.encode("\u867E")}).toThrowError({name:"TypeError",message:"EncodingError U+867E"});
expect(() => {ms932Encoder.encode("\u867F")}).toThrowError({name:"TypeError",message:"EncodingError U+867F"});
expect(() => {ms932Encoder.encode("\u8680")}).toThrowError({name:"TypeError",message:"EncodingError U+8680"});
expect(() => {ms932Encoder.encode("\u8681")}).toThrowError({name:"TypeError",message:"EncodingError U+8681"});
expect(() => {ms932Encoder.encode("\u8682")}).toThrowError({name:"TypeError",message:"EncodingError U+8682"});
expect(() => {ms932Encoder.encode("\u8683")}).toThrowError({name:"TypeError",message:"EncodingError U+8683"});
expect(() => {ms932Encoder.encode("\u8684")}).toThrowError({name:"TypeError",message:"EncodingError U+8684"});
expect(() => {ms932Encoder.encode("\u8685")}).toThrowError({name:"TypeError",message:"EncodingError U+8685"});
expect(() => {ms932Encoder.encode("\u8686")}).toThrowError({name:"TypeError",message:"EncodingError U+8686"});
expect(() => {ms932Encoder.encode("\u8687")}).toThrowError({name:"TypeError",message:"EncodingError U+8687"});
expect(() => {ms932Encoder.encode("\u8688")}).toThrowError({name:"TypeError",message:"EncodingError U+8688"});
expect(() => {ms932Encoder.encode("\u8689")}).toThrowError({name:"TypeError",message:"EncodingError U+8689"});
expect([...ms932Encoder.encode("蚊蚋蚌")].join(",")).toBe("137,225,229,113,229,114"); // U+868A
expect(() => {ms932Encoder.encode("\u868D")}).toThrowError({name:"TypeError",message:"EncodingError U+868D"});
expect(() => {ms932Encoder.encode("\u868E")}).toThrowError({name:"TypeError",message:"EncodingError U+868E"});
expect(() => {ms932Encoder.encode("\u868F")}).toThrowError({name:"TypeError",message:"EncodingError U+868F"});
expect(() => {ms932Encoder.encode("\u8690")}).toThrowError({name:"TypeError",message:"EncodingError U+8690"});
expect(() => {ms932Encoder.encode("\u8691")}).toThrowError({name:"TypeError",message:"EncodingError U+8691"});
expect(() => {ms932Encoder.encode("\u8692")}).toThrowError({name:"TypeError",message:"EncodingError U+8692"});
expect([...ms932Encoder.encode("蚓")].join(",")).toBe("229,109"); // U+8693
expect(() => {ms932Encoder.encode("\u8694")}).toThrowError({name:"TypeError",message:"EncodingError U+8694"});
expect([...ms932Encoder.encode("蚕")].join(",")).toBe("142,92"); // U+8695
expect(() => {ms932Encoder.encode("\u8696")}).toThrowError({name:"TypeError",message:"EncodingError U+8696"});
expect(() => {ms932Encoder.encode("\u8697")}).toThrowError({name:"TypeError",message:"EncodingError U+8697"});
expect(() => {ms932Encoder.encode("\u8698")}).toThrowError({name:"TypeError",message:"EncodingError U+8698"});
expect(() => {ms932Encoder.encode("\u8699")}).toThrowError({name:"TypeError",message:"EncodingError U+8699"});
expect(() => {ms932Encoder.encode("\u869A")}).toThrowError({name:"TypeError",message:"EncodingError U+869A"});
expect(() => {ms932Encoder.encode("\u869B")}).toThrowError({name:"TypeError",message:"EncodingError U+869B"});
expect(() => {ms932Encoder.encode("\u869C")}).toThrowError({name:"TypeError",message:"EncodingError U+869C"});
expect(() => {ms932Encoder.encode("\u869D")}).toThrowError({name:"TypeError",message:"EncodingError U+869D"});
expect(() => {ms932Encoder.encode("\u869E")}).toThrowError({name:"TypeError",message:"EncodingError U+869E"});
expect(() => {ms932Encoder.encode("\u869F")}).toThrowError({name:"TypeError",message:"EncodingError U+869F"});
expect(() => {ms932Encoder.encode("\u86A0")}).toThrowError({name:"TypeError",message:"EncodingError U+86A0"});
expect(() => {ms932Encoder.encode("\u86A1")}).toThrowError({name:"TypeError",message:"EncodingError U+86A1"});
expect(() => {ms932Encoder.encode("\u86A2")}).toThrowError({name:"TypeError",message:"EncodingError U+86A2"});
expect([...ms932Encoder.encode("蚣蚤")].join(",")).toBe("229,110,148,97"); // U+86A3
expect(() => {ms932Encoder.encode("\u86A5")}).toThrowError({name:"TypeError",message:"EncodingError U+86A5"});
expect(() => {ms932Encoder.encode("\u86A6")}).toThrowError({name:"TypeError",message:"EncodingError U+86A6"});
expect(() => {ms932Encoder.encode("\u86A7")}).toThrowError({name:"TypeError",message:"EncodingError U+86A7"});
expect(() => {ms932Encoder.encode("\u86A8")}).toThrowError({name:"TypeError",message:"EncodingError U+86A8"});
expect([...ms932Encoder.encode("蚩蚪蚫")].join(",")).toBe("229,111,229,112,229,122"); // U+86A9
expect(() => {ms932Encoder.encode("\u86AC")}).toThrowError({name:"TypeError",message:"EncodingError U+86AC"});
expect(() => {ms932Encoder.encode("\u86AD")}).toThrowError({name:"TypeError",message:"EncodingError U+86AD"});
expect(() => {ms932Encoder.encode("\u86AE")}).toThrowError({name:"TypeError",message:"EncodingError U+86AE"});
expect([...ms932Encoder.encode("蚯蚰")].join(",")).toBe("229,116,229,119"); // U+86AF
expect(() => {ms932Encoder.encode("\u86B1")}).toThrowError({name:"TypeError",message:"EncodingError U+86B1"});
expect(() => {ms932Encoder.encode("\u86B2")}).toThrowError({name:"TypeError",message:"EncodingError U+86B2"});
expect(() => {ms932Encoder.encode("\u86B3")}).toThrowError({name:"TypeError",message:"EncodingError U+86B3"});
expect(() => {ms932Encoder.encode("\u86B4")}).toThrowError({name:"TypeError",message:"EncodingError U+86B4"});
expect(() => {ms932Encoder.encode("\u86B5")}).toThrowError({name:"TypeError",message:"EncodingError U+86B5"});
expect([...ms932Encoder.encode("蚶")].join(",")).toBe("229,115"); // U+86B6
expect(() => {ms932Encoder.encode("\u86B7")}).toThrowError({name:"TypeError",message:"EncodingError U+86B7"});
expect(() => {ms932Encoder.encode("\u86B8")}).toThrowError({name:"TypeError",message:"EncodingError U+86B8"});
expect(() => {ms932Encoder.encode("\u86B9")}).toThrowError({name:"TypeError",message:"EncodingError U+86B9"});
expect(() => {ms932Encoder.encode("\u86BA")}).toThrowError({name:"TypeError",message:"EncodingError U+86BA"});
expect(() => {ms932Encoder.encode("\u86BB")}).toThrowError({name:"TypeError",message:"EncodingError U+86BB"});
expect(() => {ms932Encoder.encode("\u86BC")}).toThrowError({name:"TypeError",message:"EncodingError U+86BC"});
expect(() => {ms932Encoder.encode("\u86BD")}).toThrowError({name:"TypeError",message:"EncodingError U+86BD"});
expect(() => {ms932Encoder.encode("\u86BE")}).toThrowError({name:"TypeError",message:"EncodingError U+86BE"});
expect(() => {ms932Encoder.encode("\u86BF")}).toThrowError({name:"TypeError",message:"EncodingError U+86BF"});
expect(() => {ms932Encoder.encode("\u86C0")}).toThrowError({name:"TypeError",message:"EncodingError U+86C0"});
expect(() => {ms932Encoder.encode("\u86C1")}).toThrowError({name:"TypeError",message:"EncodingError U+86C1"});
expect(() => {ms932Encoder.encode("\u86C2")}).toThrowError({name:"TypeError",message:"EncodingError U+86C2"});
expect(() => {ms932Encoder.encode("\u86C3")}).toThrowError({name:"TypeError",message:"EncodingError U+86C3"});
expect([...ms932Encoder.encode("蛄")].join(",")).toBe("229,117"); // U+86C4
expect(() => {ms932Encoder.encode("\u86C5")}).toThrowError({name:"TypeError",message:"EncodingError U+86C5"});
expect([...ms932Encoder.encode("蛆蛇")].join(",")).toBe("229,118,142,214"); // U+86C6
expect(() => {ms932Encoder.encode("\u86C8")}).toThrowError({name:"TypeError",message:"EncodingError U+86C8"});
expect([...ms932Encoder.encode("蛉")].join(",")).toBe("229,120"); // U+86C9
expect(() => {ms932Encoder.encode("\u86CA")}).toThrowError({name:"TypeError",message:"EncodingError U+86CA"});
expect([...ms932Encoder.encode("蛋")].join(",")).toBe("146,96"); // U+86CB
expect(() => {ms932Encoder.encode("\u86CC")}).toThrowError({name:"TypeError",message:"EncodingError U+86CC"});
expect([...ms932Encoder.encode("蛍蛎")].join(",")).toBe("140,117,138,97"); // U+86CD
expect(() => {ms932Encoder.encode("\u86CF")}).toThrowError({name:"TypeError",message:"EncodingError U+86CF"});
expect(() => {ms932Encoder.encode("\u86D0")}).toThrowError({name:"TypeError",message:"EncodingError U+86D0"});
expect(() => {ms932Encoder.encode("\u86D1")}).toThrowError({name:"TypeError",message:"EncodingError U+86D1"});
expect(() => {ms932Encoder.encode("\u86D2")}).toThrowError({name:"TypeError",message:"EncodingError U+86D2"});
expect(() => {ms932Encoder.encode("\u86D3")}).toThrowError({name:"TypeError",message:"EncodingError U+86D3"});
expect([...ms932Encoder.encode("蛔")].join(",")).toBe("229,123"); // U+86D4
expect(() => {ms932Encoder.encode("\u86D5")}).toThrowError({name:"TypeError",message:"EncodingError U+86D5"});
expect(() => {ms932Encoder.encode("\u86D6")}).toThrowError({name:"TypeError",message:"EncodingError U+86D6"});
expect(() => {ms932Encoder.encode("\u86D7")}).toThrowError({name:"TypeError",message:"EncodingError U+86D7"});
expect(() => {ms932Encoder.encode("\u86D8")}).toThrowError({name:"TypeError",message:"EncodingError U+86D8"});
expect([...ms932Encoder.encode("蛙")].join(",")).toBe("138,94"); // U+86D9
expect(() => {ms932Encoder.encode("\u86DA")}).toThrowError({name:"TypeError",message:"EncodingError U+86DA"});
expect([...ms932Encoder.encode("蛛")].join(",")).toBe("229,129"); // U+86DB
expect(() => {ms932Encoder.encode("\u86DC")}).toThrowError({name:"TypeError",message:"EncodingError U+86DC"});
expect(() => {ms932Encoder.encode("\u86DD")}).toThrowError({name:"TypeError",message:"EncodingError U+86DD"});
expect([...ms932Encoder.encode("蛞蛟")].join(",")).toBe("229,124,229,128"); // U+86DE
expect(() => {ms932Encoder.encode("\u86E0")}).toThrowError({name:"TypeError",message:"EncodingError U+86E0"});
expect(() => {ms932Encoder.encode("\u86E1")}).toThrowError({name:"TypeError",message:"EncodingError U+86E1"});
expect(() => {ms932Encoder.encode("\u86E2")}).toThrowError({name:"TypeError",message:"EncodingError U+86E2"});
expect(() => {ms932Encoder.encode("\u86E3")}).toThrowError({name:"TypeError",message:"EncodingError U+86E3"});
expect([...ms932Encoder.encode("蛤")].join(",")).toBe("148,184"); // U+86E4
expect(() => {ms932Encoder.encode("\u86E5")}).toThrowError({name:"TypeError",message:"EncodingError U+86E5"});
expect(() => {ms932Encoder.encode("\u86E6")}).toThrowError({name:"TypeError",message:"EncodingError U+86E6"});
expect(() => {ms932Encoder.encode("\u86E7")}).toThrowError({name:"TypeError",message:"EncodingError U+86E7"});
expect(() => {ms932Encoder.encode("\u86E8")}).toThrowError({name:"TypeError",message:"EncodingError U+86E8"});
expect([...ms932Encoder.encode("蛩")].join(",")).toBe("229,125"); // U+86E9
expect(() => {ms932Encoder.encode("\u86EA")}).toThrowError({name:"TypeError",message:"EncodingError U+86EA"});
expect(() => {ms932Encoder.encode("\u86EB")}).toThrowError({name:"TypeError",message:"EncodingError U+86EB"});
expect([...ms932Encoder.encode("蛬蛭蛮蛯")].join(",")).toBe("229,126,149,103,148,216,229,130"); // U+86EC
expect(() => {ms932Encoder.encode("\u86F0")}).toThrowError({name:"TypeError",message:"EncodingError U+86F0"});
expect(() => {ms932Encoder.encode("\u86F1")}).toThrowError({name:"TypeError",message:"EncodingError U+86F1"});
expect(() => {ms932Encoder.encode("\u86F2")}).toThrowError({name:"TypeError",message:"EncodingError U+86F2"});
expect(() => {ms932Encoder.encode("\u86F3")}).toThrowError({name:"TypeError",message:"EncodingError U+86F3"});
expect(() => {ms932Encoder.encode("\u86F4")}).toThrowError({name:"TypeError",message:"EncodingError U+86F4"});
expect(() => {ms932Encoder.encode("\u86F5")}).toThrowError({name:"TypeError",message:"EncodingError U+86F5"});
expect(() => {ms932Encoder.encode("\u86F6")}).toThrowError({name:"TypeError",message:"EncodingError U+86F6"});
expect(() => {ms932Encoder.encode("\u86F7")}).toThrowError({name:"TypeError",message:"EncodingError U+86F7"});
expect([...ms932Encoder.encode("蛸蛹")].join(",")).toBe("145,251,229,140"); // U+86F8
expect(() => {ms932Encoder.encode("\u86FA")}).toThrowError({name:"TypeError",message:"EncodingError U+86FA"});
expect([...ms932Encoder.encode("蛻")].join(",")).toBe("229,136"); // U+86FB
expect(() => {ms932Encoder.encode("\u86FC")}).toThrowError({name:"TypeError",message:"EncodingError U+86FC"});
expect(() => {ms932Encoder.encode("\u86FD")}).toThrowError({name:"TypeError",message:"EncodingError U+86FD"});
expect([...ms932Encoder.encode("蛾")].join(",")).toBe("137,233"); // U+86FE
expect(() => {ms932Encoder.encode("\u86FF")}).toThrowError({name:"TypeError",message:"EncodingError U+86FF"});
expect([...ms932Encoder.encode("蜀")].join(",")).toBe("229,134"); // U+8700
expect(() => {ms932Encoder.encode("\u8701")}).toThrowError({name:"TypeError",message:"EncodingError U+8701"});
expect([...ms932Encoder.encode("蜂蜃")].join(",")).toBe("150,73,229,135"); // U+8702
expect(() => {ms932Encoder.encode("\u8704")}).toThrowError({name:"TypeError",message:"EncodingError U+8704"});
expect(() => {ms932Encoder.encode("\u8705")}).toThrowError({name:"TypeError",message:"EncodingError U+8705"});
expect([...ms932Encoder.encode("蜆")].join(",")).toBe("229,132"); // U+8706
expect(() => {ms932Encoder.encode("\u8707")}).toThrowError({name:"TypeError",message:"EncodingError U+8707"});
expect([...ms932Encoder.encode("蜈蜉蜊")].join(",")).toBe("229,133,229,138,229,141"); // U+8708
expect(() => {ms932Encoder.encode("\u870B")}).toThrowError({name:"TypeError",message:"EncodingError U+870B"});
expect(() => {ms932Encoder.encode("\u870C")}).toThrowError({name:"TypeError",message:"EncodingError U+870C"});
expect([...ms932Encoder.encode("蜍")].join(",")).toBe("229,139"); // U+870D
expect(() => {ms932Encoder.encode("\u870E")}).toThrowError({name:"TypeError",message:"EncodingError U+870E"});
expect(() => {ms932Encoder.encode("\u870F")}).toThrowError({name:"TypeError",message:"EncodingError U+870F"});
expect(() => {ms932Encoder.encode("\u8710")}).toThrowError({name:"TypeError",message:"EncodingError U+8710"});
expect([...ms932Encoder.encode("蜑蜒")].join(",")).toBe("229,137,229,131"); // U+8711
expect(() => {ms932Encoder.encode("\u8713")}).toThrowError({name:"TypeError",message:"EncodingError U+8713"});
expect(() => {ms932Encoder.encode("\u8714")}).toThrowError({name:"TypeError",message:"EncodingError U+8714"});
expect(() => {ms932Encoder.encode("\u8715")}).toThrowError({name:"TypeError",message:"EncodingError U+8715"});
expect(() => {ms932Encoder.encode("\u8716")}).toThrowError({name:"TypeError",message:"EncodingError U+8716"});
expect(() => {ms932Encoder.encode("\u8717")}).toThrowError({name:"TypeError",message:"EncodingError U+8717"});
expect([...ms932Encoder.encode("蜘")].join(",")).toBe("146,119"); // U+8718
expect(() => {ms932Encoder.encode("\u8719")}).toThrowError({name:"TypeError",message:"EncodingError U+8719"});
expect([...ms932Encoder.encode("蜚")].join(",")).toBe("229,148"); // U+871A
expect(() => {ms932Encoder.encode("\u871B")}).toThrowError({name:"TypeError",message:"EncodingError U+871B"});
expect([...ms932Encoder.encode("蜜")].join(",")).toBe("150,168"); // U+871C
expect(() => {ms932Encoder.encode("\u871D")}).toThrowError({name:"TypeError",message:"EncodingError U+871D"});
expect(() => {ms932Encoder.encode("\u871E")}).toThrowError({name:"TypeError",message:"EncodingError U+871E"});
expect(() => {ms932Encoder.encode("\u871F")}).toThrowError({name:"TypeError",message:"EncodingError U+871F"});
expect(() => {ms932Encoder.encode("\u8720")}).toThrowError({name:"TypeError",message:"EncodingError U+8720"});
expect(() => {ms932Encoder.encode("\u8721")}).toThrowError({name:"TypeError",message:"EncodingError U+8721"});
expect(() => {ms932Encoder.encode("\u8722")}).toThrowError({name:"TypeError",message:"EncodingError U+8722"});
expect(() => {ms932Encoder.encode("\u8723")}).toThrowError({name:"TypeError",message:"EncodingError U+8723"});
expect(() => {ms932Encoder.encode("\u8724")}).toThrowError({name:"TypeError",message:"EncodingError U+8724"});
expect([...ms932Encoder.encode("蜥")].join(",")).toBe("229,146"); // U+8725
expect(() => {ms932Encoder.encode("\u8726")}).toThrowError({name:"TypeError",message:"EncodingError U+8726"});
expect(() => {ms932Encoder.encode("\u8727")}).toThrowError({name:"TypeError",message:"EncodingError U+8727"});
expect(() => {ms932Encoder.encode("\u8728")}).toThrowError({name:"TypeError",message:"EncodingError U+8728"});
expect([...ms932Encoder.encode("蜩")].join(",")).toBe("229,147"); // U+8729
expect(() => {ms932Encoder.encode("\u872A")}).toThrowError({name:"TypeError",message:"EncodingError U+872A"});
expect(() => {ms932Encoder.encode("\u872B")}).toThrowError({name:"TypeError",message:"EncodingError U+872B"});
expect(() => {ms932Encoder.encode("\u872C")}).toThrowError({name:"TypeError",message:"EncodingError U+872C"});
expect(() => {ms932Encoder.encode("\u872D")}).toThrowError({name:"TypeError",message:"EncodingError U+872D"});
expect(() => {ms932Encoder.encode("\u872E")}).toThrowError({name:"TypeError",message:"EncodingError U+872E"});
expect(() => {ms932Encoder.encode("\u872F")}).toThrowError({name:"TypeError",message:"EncodingError U+872F"});
expect(() => {ms932Encoder.encode("\u8730")}).toThrowError({name:"TypeError",message:"EncodingError U+8730"});
expect(() => {ms932Encoder.encode("\u8731")}).toThrowError({name:"TypeError",message:"EncodingError U+8731"});
expect(() => {ms932Encoder.encode("\u8732")}).toThrowError({name:"TypeError",message:"EncodingError U+8732"});
expect(() => {ms932Encoder.encode("\u8733")}).toThrowError({name:"TypeError",message:"EncodingError U+8733"});
expect([...ms932Encoder.encode("蜴")].join(",")).toBe("229,142"); // U+8734
expect(() => {ms932Encoder.encode("\u8735")}).toThrowError({name:"TypeError",message:"EncodingError U+8735"});
expect(() => {ms932Encoder.encode("\u8736")}).toThrowError({name:"TypeError",message:"EncodingError U+8736"});
expect([...ms932Encoder.encode("蜷")].join(",")).toBe("229,144"); // U+8737
expect(() => {ms932Encoder.encode("\u8738")}).toThrowError({name:"TypeError",message:"EncodingError U+8738"});
expect(() => {ms932Encoder.encode("\u8739")}).toThrowError({name:"TypeError",message:"EncodingError U+8739"});
expect(() => {ms932Encoder.encode("\u873A")}).toThrowError({name:"TypeError",message:"EncodingError U+873A"});
expect([...ms932Encoder.encode("蜻")].join(",")).toBe("229,145"); // U+873B
expect(() => {ms932Encoder.encode("\u873C")}).toThrowError({name:"TypeError",message:"EncodingError U+873C"});
expect(() => {ms932Encoder.encode("\u873D")}).toThrowError({name:"TypeError",message:"EncodingError U+873D"});
expect(() => {ms932Encoder.encode("\u873E")}).toThrowError({name:"TypeError",message:"EncodingError U+873E"});
expect([...ms932Encoder.encode("蜿")].join(",")).toBe("229,143"); // U+873F
expect(() => {ms932Encoder.encode("\u8740")}).toThrowError({name:"TypeError",message:"EncodingError U+8740"});
expect(() => {ms932Encoder.encode("\u8741")}).toThrowError({name:"TypeError",message:"EncodingError U+8741"});
expect(() => {ms932Encoder.encode("\u8742")}).toThrowError({name:"TypeError",message:"EncodingError U+8742"});
expect(() => {ms932Encoder.encode("\u8743")}).toThrowError({name:"TypeError",message:"EncodingError U+8743"});
expect(() => {ms932Encoder.encode("\u8744")}).toThrowError({name:"TypeError",message:"EncodingError U+8744"});
expect(() => {ms932Encoder.encode("\u8745")}).toThrowError({name:"TypeError",message:"EncodingError U+8745"});
expect(() => {ms932Encoder.encode("\u8746")}).toThrowError({name:"TypeError",message:"EncodingError U+8746"});
expect(() => {ms932Encoder.encode("\u8747")}).toThrowError({name:"TypeError",message:"EncodingError U+8747"});
expect(() => {ms932Encoder.encode("\u8748")}).toThrowError({name:"TypeError",message:"EncodingError U+8748"});
expect([...ms932Encoder.encode("蝉")].join(",")).toBe("144,228"); // U+8749
expect(() => {ms932Encoder.encode("\u874A")}).toThrowError({name:"TypeError",message:"EncodingError U+874A"});
expect([...ms932Encoder.encode("蝋蝌")].join(",")).toBe("152,88,229,152"); // U+874B
expect(() => {ms932Encoder.encode("\u874D")}).toThrowError({name:"TypeError",message:"EncodingError U+874D"});
expect([...ms932Encoder.encode("蝎")].join(",")).toBe("229,153"); // U+874E
expect(() => {ms932Encoder.encode("\u874F")}).toThrowError({name:"TypeError",message:"EncodingError U+874F"});
expect(() => {ms932Encoder.encode("\u8750")}).toThrowError({name:"TypeError",message:"EncodingError U+8750"});
expect(() => {ms932Encoder.encode("\u8751")}).toThrowError({name:"TypeError",message:"EncodingError U+8751"});
expect(() => {ms932Encoder.encode("\u8752")}).toThrowError({name:"TypeError",message:"EncodingError U+8752"});
expect([...ms932Encoder.encode("蝓")].join(",")).toBe("229,159"); // U+8753
expect(() => {ms932Encoder.encode("\u8754")}).toThrowError({name:"TypeError",message:"EncodingError U+8754"});
expect([...ms932Encoder.encode("蝕")].join(",")).toBe("144,73"); // U+8755
expect(() => {ms932Encoder.encode("\u8756")}).toThrowError({name:"TypeError",message:"EncodingError U+8756"});
expect([...ms932Encoder.encode("蝗")].join(",")).toBe("229,155"); // U+8757
expect(() => {ms932Encoder.encode("\u8758")}).toThrowError({name:"TypeError",message:"EncodingError U+8758"});
expect([...ms932Encoder.encode("蝙")].join(",")).toBe("229,158"); // U+8759
expect(() => {ms932Encoder.encode("\u875A")}).toThrowError({name:"TypeError",message:"EncodingError U+875A"});
expect(() => {ms932Encoder.encode("\u875B")}).toThrowError({name:"TypeError",message:"EncodingError U+875B"});
expect(() => {ms932Encoder.encode("\u875C")}).toThrowError({name:"TypeError",message:"EncodingError U+875C"});
expect(() => {ms932Encoder.encode("\u875D")}).toThrowError({name:"TypeError",message:"EncodingError U+875D"});
expect(() => {ms932Encoder.encode("\u875E")}).toThrowError({name:"TypeError",message:"EncodingError U+875E"});
expect([...ms932Encoder.encode("蝟蝠")].join(",")).toBe("229,150,229,149"); // U+875F
expect(() => {ms932Encoder.encode("\u8761")}).toThrowError({name:"TypeError",message:"EncodingError U+8761"});
expect(() => {ms932Encoder.encode("\u8762")}).toThrowError({name:"TypeError",message:"EncodingError U+8762"});
expect([...ms932Encoder.encode("蝣")].join(",")).toBe("229,160"); // U+8763
expect(() => {ms932Encoder.encode("\u8764")}).toThrowError({name:"TypeError",message:"EncodingError U+8764"});
expect(() => {ms932Encoder.encode("\u8765")}).toThrowError({name:"TypeError",message:"EncodingError U+8765"});
expect([...ms932Encoder.encode("蝦")].join(",")).toBe("137,218"); // U+8766
expect(() => {ms932Encoder.encode("\u8767")}).toThrowError({name:"TypeError",message:"EncodingError U+8767"});
expect([...ms932Encoder.encode("蝨")].join(",")).toBe("229,156"); // U+8768
expect(() => {ms932Encoder.encode("\u8769")}).toThrowError({name:"TypeError",message:"EncodingError U+8769"});
expect([...ms932Encoder.encode("蝪")].join(",")).toBe("229,161"); // U+876A
expect(() => {ms932Encoder.encode("\u876B")}).toThrowError({name:"TypeError",message:"EncodingError U+876B"});
expect(() => {ms932Encoder.encode("\u876C")}).toThrowError({name:"TypeError",message:"EncodingError U+876C"});
expect(() => {ms932Encoder.encode("\u876D")}).toThrowError({name:"TypeError",message:"EncodingError U+876D"});
expect([...ms932Encoder.encode("蝮")].join(",")).toBe("229,157"); // U+876E
expect(() => {ms932Encoder.encode("\u876F")}).toThrowError({name:"TypeError",message:"EncodingError U+876F"});
expect(() => {ms932Encoder.encode("\u8770")}).toThrowError({name:"TypeError",message:"EncodingError U+8770"});
expect(() => {ms932Encoder.encode("\u8771")}).toThrowError({name:"TypeError",message:"EncodingError U+8771"});
expect(() => {ms932Encoder.encode("\u8772")}).toThrowError({name:"TypeError",message:"EncodingError U+8772"});
expect(() => {ms932Encoder.encode("\u8773")}).toThrowError({name:"TypeError",message:"EncodingError U+8773"});
expect([...ms932Encoder.encode("蝴")].join(",")).toBe("229,154"); // U+8774
expect(() => {ms932Encoder.encode("\u8775")}).toThrowError({name:"TypeError",message:"EncodingError U+8775"});
expect([...ms932Encoder.encode("蝶")].join(",")).toBe("146,177"); // U+8776
expect(() => {ms932Encoder.encode("\u8777")}).toThrowError({name:"TypeError",message:"EncodingError U+8777"});
expect([...ms932Encoder.encode("蝸")].join(",")).toBe("229,151"); // U+8778
expect(() => {ms932Encoder.encode("\u8779")}).toThrowError({name:"TypeError",message:"EncodingError U+8779"});
expect(() => {ms932Encoder.encode("\u877A")}).toThrowError({name:"TypeError",message:"EncodingError U+877A"});
expect(() => {ms932Encoder.encode("\u877B")}).toThrowError({name:"TypeError",message:"EncodingError U+877B"});
expect(() => {ms932Encoder.encode("\u877C")}).toThrowError({name:"TypeError",message:"EncodingError U+877C"});
expect(() => {ms932Encoder.encode("\u877D")}).toThrowError({name:"TypeError",message:"EncodingError U+877D"});
expect(() => {ms932Encoder.encode("\u877E")}).toThrowError({name:"TypeError",message:"EncodingError U+877E"});
expect([...ms932Encoder.encode("蝿")].join(",")).toBe("148,136"); // U+877F
expect(() => {ms932Encoder.encode("\u8780")}).toThrowError({name:"TypeError",message:"EncodingError U+8780"});
expect(() => {ms932Encoder.encode("\u8781")}).toThrowError({name:"TypeError",message:"EncodingError U+8781"});
expect([...ms932Encoder.encode("螂")].join(",")).toBe("229,165"); // U+8782
expect(() => {ms932Encoder.encode("\u8783")}).toThrowError({name:"TypeError",message:"EncodingError U+8783"});
expect(() => {ms932Encoder.encode("\u8784")}).toThrowError({name:"TypeError",message:"EncodingError U+8784"});
expect(() => {ms932Encoder.encode("\u8785")}).toThrowError({name:"TypeError",message:"EncodingError U+8785"});
expect(() => {ms932Encoder.encode("\u8786")}).toThrowError({name:"TypeError",message:"EncodingError U+8786"});
expect(() => {ms932Encoder.encode("\u8787")}).toThrowError({name:"TypeError",message:"EncodingError U+8787"});
expect(() => {ms932Encoder.encode("\u8788")}).toThrowError({name:"TypeError",message:"EncodingError U+8788"});
expect(() => {ms932Encoder.encode("\u8789")}).toThrowError({name:"TypeError",message:"EncodingError U+8789"});
expect(() => {ms932Encoder.encode("\u878A")}).toThrowError({name:"TypeError",message:"EncodingError U+878A"});
expect(() => {ms932Encoder.encode("\u878B")}).toThrowError({name:"TypeError",message:"EncodingError U+878B"});
expect(() => {ms932Encoder.encode("\u878C")}).toThrowError({name:"TypeError",message:"EncodingError U+878C"});
expect([...ms932Encoder.encode("融")].join(",")).toBe("151,90"); // U+878D
expect(() => {ms932Encoder.encode("\u878E")}).toThrowError({name:"TypeError",message:"EncodingError U+878E"});
expect(() => {ms932Encoder.encode("\u878F")}).toThrowError({name:"TypeError",message:"EncodingError U+878F"});
expect(() => {ms932Encoder.encode("\u8790")}).toThrowError({name:"TypeError",message:"EncodingError U+8790"});
expect(() => {ms932Encoder.encode("\u8791")}).toThrowError({name:"TypeError",message:"EncodingError U+8791"});
expect(() => {ms932Encoder.encode("\u8792")}).toThrowError({name:"TypeError",message:"EncodingError U+8792"});
expect(() => {ms932Encoder.encode("\u8793")}).toThrowError({name:"TypeError",message:"EncodingError U+8793"});
expect(() => {ms932Encoder.encode("\u8794")}).toThrowError({name:"TypeError",message:"EncodingError U+8794"});
expect(() => {ms932Encoder.encode("\u8795")}).toThrowError({name:"TypeError",message:"EncodingError U+8795"});
expect(() => {ms932Encoder.encode("\u8796")}).toThrowError({name:"TypeError",message:"EncodingError U+8796"});
expect(() => {ms932Encoder.encode("\u8797")}).toThrowError({name:"TypeError",message:"EncodingError U+8797"});
expect(() => {ms932Encoder.encode("\u8798")}).toThrowError({name:"TypeError",message:"EncodingError U+8798"});
expect(() => {ms932Encoder.encode("\u8799")}).toThrowError({name:"TypeError",message:"EncodingError U+8799"});
expect(() => {ms932Encoder.encode("\u879A")}).toThrowError({name:"TypeError",message:"EncodingError U+879A"});
expect(() => {ms932Encoder.encode("\u879B")}).toThrowError({name:"TypeError",message:"EncodingError U+879B"});
expect(() => {ms932Encoder.encode("\u879C")}).toThrowError({name:"TypeError",message:"EncodingError U+879C"});
expect(() => {ms932Encoder.encode("\u879D")}).toThrowError({name:"TypeError",message:"EncodingError U+879D"});
expect(() => {ms932Encoder.encode("\u879E")}).toThrowError({name:"TypeError",message:"EncodingError U+879E"});
expect([...ms932Encoder.encode("螟")].join(",")).toBe("229,164"); // U+879F
expect(() => {ms932Encoder.encode("\u87A0")}).toThrowError({name:"TypeError",message:"EncodingError U+87A0"});
expect(() => {ms932Encoder.encode("\u87A1")}).toThrowError({name:"TypeError",message:"EncodingError U+87A1"});
expect([...ms932Encoder.encode("螢")].join(",")).toBe("229,163"); // U+87A2
expect(() => {ms932Encoder.encode("\u87A3")}).toThrowError({name:"TypeError",message:"EncodingError U+87A3"});
expect(() => {ms932Encoder.encode("\u87A4")}).toThrowError({name:"TypeError",message:"EncodingError U+87A4"});
expect(() => {ms932Encoder.encode("\u87A5")}).toThrowError({name:"TypeError",message:"EncodingError U+87A5"});
expect(() => {ms932Encoder.encode("\u87A6")}).toThrowError({name:"TypeError",message:"EncodingError U+87A6"});
expect(() => {ms932Encoder.encode("\u87A7")}).toThrowError({name:"TypeError",message:"EncodingError U+87A7"});
expect(() => {ms932Encoder.encode("\u87A8")}).toThrowError({name:"TypeError",message:"EncodingError U+87A8"});
expect(() => {ms932Encoder.encode("\u87A9")}).toThrowError({name:"TypeError",message:"EncodingError U+87A9"});
expect(() => {ms932Encoder.encode("\u87AA")}).toThrowError({name:"TypeError",message:"EncodingError U+87AA"});
expect([...ms932Encoder.encode("螫")].join(",")).toBe("229,172"); // U+87AB
expect(() => {ms932Encoder.encode("\u87AC")}).toThrowError({name:"TypeError",message:"EncodingError U+87AC"});
expect(() => {ms932Encoder.encode("\u87AD")}).toThrowError({name:"TypeError",message:"EncodingError U+87AD"});
expect(() => {ms932Encoder.encode("\u87AE")}).toThrowError({name:"TypeError",message:"EncodingError U+87AE"});
expect([...ms932Encoder.encode("螯")].join(",")).toBe("229,166"); // U+87AF
expect(() => {ms932Encoder.encode("\u87B0")}).toThrowError({name:"TypeError",message:"EncodingError U+87B0"});
expect(() => {ms932Encoder.encode("\u87B1")}).toThrowError({name:"TypeError",message:"EncodingError U+87B1"});
expect(() => {ms932Encoder.encode("\u87B2")}).toThrowError({name:"TypeError",message:"EncodingError U+87B2"});
expect([...ms932Encoder.encode("螳")].join(",")).toBe("229,174"); // U+87B3
expect(() => {ms932Encoder.encode("\u87B4")}).toThrowError({name:"TypeError",message:"EncodingError U+87B4"});
expect(() => {ms932Encoder.encode("\u87B5")}).toThrowError({name:"TypeError",message:"EncodingError U+87B5"});
expect(() => {ms932Encoder.encode("\u87B6")}).toThrowError({name:"TypeError",message:"EncodingError U+87B6"});
expect(() => {ms932Encoder.encode("\u87B7")}).toThrowError({name:"TypeError",message:"EncodingError U+87B7"});
expect(() => {ms932Encoder.encode("\u87B8")}).toThrowError({name:"TypeError",message:"EncodingError U+87B8"});
expect(() => {ms932Encoder.encode("\u87B9")}).toThrowError({name:"TypeError",message:"EncodingError U+87B9"});
expect([...ms932Encoder.encode("螺螻")].join(",")).toBe("151,134,229,177"); // U+87BA
expect(() => {ms932Encoder.encode("\u87BC")}).toThrowError({name:"TypeError",message:"EncodingError U+87BC"});
expect([...ms932Encoder.encode("螽")].join(",")).toBe("229,168"); // U+87BD
expect(() => {ms932Encoder.encode("\u87BE")}).toThrowError({name:"TypeError",message:"EncodingError U+87BE"});
expect(() => {ms932Encoder.encode("\u87BF")}).toThrowError({name:"TypeError",message:"EncodingError U+87BF"});
expect([...ms932Encoder.encode("蟀")].join(",")).toBe("229,169"); // U+87C0
expect(() => {ms932Encoder.encode("\u87C1")}).toThrowError({name:"TypeError",message:"EncodingError U+87C1"});
expect(() => {ms932Encoder.encode("\u87C2")}).toThrowError({name:"TypeError",message:"EncodingError U+87C2"});
expect(() => {ms932Encoder.encode("\u87C3")}).toThrowError({name:"TypeError",message:"EncodingError U+87C3"});
expect([...ms932Encoder.encode("蟄")].join(",")).toBe("229,173"); // U+87C4
expect(() => {ms932Encoder.encode("\u87C5")}).toThrowError({name:"TypeError",message:"EncodingError U+87C5"});
expect([...ms932Encoder.encode("蟆蟇")].join(",")).toBe("229,176,229,175"); // U+87C6
expect(() => {ms932Encoder.encode("\u87C8")}).toThrowError({name:"TypeError",message:"EncodingError U+87C8"});
expect(() => {ms932Encoder.encode("\u87C9")}).toThrowError({name:"TypeError",message:"EncodingError U+87C9"});
expect(() => {ms932Encoder.encode("\u87CA")}).toThrowError({name:"TypeError",message:"EncodingError U+87CA"});
expect([...ms932Encoder.encode("蟋")].join(",")).toBe("229,167"); // U+87CB
expect(() => {ms932Encoder.encode("\u87CC")}).toThrowError({name:"TypeError",message:"EncodingError U+87CC"});
expect(() => {ms932Encoder.encode("\u87CD")}).toThrowError({name:"TypeError",message:"EncodingError U+87CD"});
expect(() => {ms932Encoder.encode("\u87CE")}).toThrowError({name:"TypeError",message:"EncodingError U+87CE"});
expect(() => {ms932Encoder.encode("\u87CF")}).toThrowError({name:"TypeError",message:"EncodingError U+87CF"});
expect([...ms932Encoder.encode("蟐")].join(",")).toBe("229,170"); // U+87D0
expect(() => {ms932Encoder.encode("\u87D1")}).toThrowError({name:"TypeError",message:"EncodingError U+87D1"});
expect([...ms932Encoder.encode("蟒")].join(",")).toBe("229,187"); // U+87D2
expect(() => {ms932Encoder.encode("\u87D3")}).toThrowError({name:"TypeError",message:"EncodingError U+87D3"});
expect(() => {ms932Encoder.encode("\u87D4")}).toThrowError({name:"TypeError",message:"EncodingError U+87D4"});
expect(() => {ms932Encoder.encode("\u87D5")}).toThrowError({name:"TypeError",message:"EncodingError U+87D5"});
expect(() => {ms932Encoder.encode("\u87D6")}).toThrowError({name:"TypeError",message:"EncodingError U+87D6"});
expect(() => {ms932Encoder.encode("\u87D7")}).toThrowError({name:"TypeError",message:"EncodingError U+87D7"});
expect(() => {ms932Encoder.encode("\u87D8")}).toThrowError({name:"TypeError",message:"EncodingError U+87D8"});
expect(() => {ms932Encoder.encode("\u87D9")}).toThrowError({name:"TypeError",message:"EncodingError U+87D9"});
expect(() => {ms932Encoder.encode("\u87DA")}).toThrowError({name:"TypeError",message:"EncodingError U+87DA"});
expect(() => {ms932Encoder.encode("\u87DB")}).toThrowError({name:"TypeError",message:"EncodingError U+87DB"});
expect(() => {ms932Encoder.encode("\u87DC")}).toThrowError({name:"TypeError",message:"EncodingError U+87DC"});
expect(() => {ms932Encoder.encode("\u87DD")}).toThrowError({name:"TypeError",message:"EncodingError U+87DD"});
expect(() => {ms932Encoder.encode("\u87DE")}).toThrowError({name:"TypeError",message:"EncodingError U+87DE"});
expect(() => {ms932Encoder.encode("\u87DF")}).toThrowError({name:"TypeError",message:"EncodingError U+87DF"});
expect([...ms932Encoder.encode("蟠")].join(",")).toBe("229,180"); // U+87E0
expect(() => {ms932Encoder.encode("\u87E1")}).toThrowError({name:"TypeError",message:"EncodingError U+87E1"});
expect(() => {ms932Encoder.encode("\u87E2")}).toThrowError({name:"TypeError",message:"EncodingError U+87E2"});
expect(() => {ms932Encoder.encode("\u87E3")}).toThrowError({name:"TypeError",message:"EncodingError U+87E3"});
expect(() => {ms932Encoder.encode("\u87E4")}).toThrowError({name:"TypeError",message:"EncodingError U+87E4"});
expect(() => {ms932Encoder.encode("\u87E5")}).toThrowError({name:"TypeError",message:"EncodingError U+87E5"});
expect(() => {ms932Encoder.encode("\u87E6")}).toThrowError({name:"TypeError",message:"EncodingError U+87E6"});
expect(() => {ms932Encoder.encode("\u87E7")}).toThrowError({name:"TypeError",message:"EncodingError U+87E7"});
expect(() => {ms932Encoder.encode("\u87E8")}).toThrowError({name:"TypeError",message:"EncodingError U+87E8"});
expect(() => {ms932Encoder.encode("\u87E9")}).toThrowError({name:"TypeError",message:"EncodingError U+87E9"});
expect(() => {ms932Encoder.encode("\u87EA")}).toThrowError({name:"TypeError",message:"EncodingError U+87EA"});
expect(() => {ms932Encoder.encode("\u87EB")}).toThrowError({name:"TypeError",message:"EncodingError U+87EB"});
expect(() => {ms932Encoder.encode("\u87EC")}).toThrowError({name:"TypeError",message:"EncodingError U+87EC"});
expect(() => {ms932Encoder.encode("\u87ED")}).toThrowError({name:"TypeError",message:"EncodingError U+87ED"});
expect(() => {ms932Encoder.encode("\u87EE")}).toThrowError({name:"TypeError",message:"EncodingError U+87EE"});
expect([...ms932Encoder.encode("蟯")].join(",")).toBe("229,178"); // U+87EF
expect(() => {ms932Encoder.encode("\u87F0")}).toThrowError({name:"TypeError",message:"EncodingError U+87F0"});
expect(() => {ms932Encoder.encode("\u87F1")}).toThrowError({name:"TypeError",message:"EncodingError U+87F1"});
expect([...ms932Encoder.encode("蟲")].join(",")).toBe("229,179"); // U+87F2
expect(() => {ms932Encoder.encode("\u87F3")}).toThrowError({name:"TypeError",message:"EncodingError U+87F3"});
expect(() => {ms932Encoder.encode("\u87F4")}).toThrowError({name:"TypeError",message:"EncodingError U+87F4"});
expect(() => {ms932Encoder.encode("\u87F5")}).toThrowError({name:"TypeError",message:"EncodingError U+87F5"});
expect([...ms932Encoder.encode("蟶蟷")].join(",")).toBe("229,184,229,185"); // U+87F6
expect(() => {ms932Encoder.encode("\u87F8")}).toThrowError({name:"TypeError",message:"EncodingError U+87F8"});
expect([...ms932Encoder.encode("蟹")].join(",")).toBe("138,73"); // U+87F9
expect(() => {ms932Encoder.encode("\u87FA")}).toThrowError({name:"TypeError",message:"EncodingError U+87FA"});
expect([...ms932Encoder.encode("蟻")].join(",")).toBe("139,97"); // U+87FB
expect(() => {ms932Encoder.encode("\u87FC")}).toThrowError({name:"TypeError",message:"EncodingError U+87FC"});
expect(() => {ms932Encoder.encode("\u87FD")}).toThrowError({name:"TypeError",message:"EncodingError U+87FD"});
expect([...ms932Encoder.encode("蟾")].join(",")).toBe("229,183"); // U+87FE
expect(() => {ms932Encoder.encode("\u87FF")}).toThrowError({name:"TypeError",message:"EncodingError U+87FF"});
expect(() => {ms932Encoder.encode("\u8800")}).toThrowError({name:"TypeError",message:"EncodingError U+8800"});
expect(() => {ms932Encoder.encode("\u8801")}).toThrowError({name:"TypeError",message:"EncodingError U+8801"});
expect(() => {ms932Encoder.encode("\u8802")}).toThrowError({name:"TypeError",message:"EncodingError U+8802"});
expect(() => {ms932Encoder.encode("\u8803")}).toThrowError({name:"TypeError",message:"EncodingError U+8803"});
expect(() => {ms932Encoder.encode("\u8804")}).toThrowError({name:"TypeError",message:"EncodingError U+8804"});
expect([...ms932Encoder.encode("蠅")].join(",")).toBe("229,162"); // U+8805
expect(() => {ms932Encoder.encode("\u8806")}).toThrowError({name:"TypeError",message:"EncodingError U+8806"});
expect([...ms932Encoder.encode("蠇")].join(",")).toBe("251,161"); // U+8807
expect(() => {ms932Encoder.encode("\u8808")}).toThrowError({name:"TypeError",message:"EncodingError U+8808"});
expect(() => {ms932Encoder.encode("\u8809")}).toThrowError({name:"TypeError",message:"EncodingError U+8809"});
expect(() => {ms932Encoder.encode("\u880A")}).toThrowError({name:"TypeError",message:"EncodingError U+880A"});
expect(() => {ms932Encoder.encode("\u880B")}).toThrowError({name:"TypeError",message:"EncodingError U+880B"});
expect(() => {ms932Encoder.encode("\u880C")}).toThrowError({name:"TypeError",message:"EncodingError U+880C"});
expect([...ms932Encoder.encode("蠍蠎蠏")].join(",")).toBe("229,182,229,186,229,181"); // U+880D
expect(() => {ms932Encoder.encode("\u8810")}).toThrowError({name:"TypeError",message:"EncodingError U+8810"});
expect([...ms932Encoder.encode("蠑")].join(",")).toBe("229,188"); // U+8811
expect(() => {ms932Encoder.encode("\u8812")}).toThrowError({name:"TypeError",message:"EncodingError U+8812"});
expect(() => {ms932Encoder.encode("\u8813")}).toThrowError({name:"TypeError",message:"EncodingError U+8813"});
expect(() => {ms932Encoder.encode("\u8814")}).toThrowError({name:"TypeError",message:"EncodingError U+8814"});
expect([...ms932Encoder.encode("蠕蠖")].join(",")).toBe("229,190,229,189"); // U+8815
expect(() => {ms932Encoder.encode("\u8817")}).toThrowError({name:"TypeError",message:"EncodingError U+8817"});
expect(() => {ms932Encoder.encode("\u8818")}).toThrowError({name:"TypeError",message:"EncodingError U+8818"});
expect(() => {ms932Encoder.encode("\u8819")}).toThrowError({name:"TypeError",message:"EncodingError U+8819"});
expect(() => {ms932Encoder.encode("\u881A")}).toThrowError({name:"TypeError",message:"EncodingError U+881A"});
expect(() => {ms932Encoder.encode("\u881B")}).toThrowError({name:"TypeError",message:"EncodingError U+881B"});
expect(() => {ms932Encoder.encode("\u881C")}).toThrowError({name:"TypeError",message:"EncodingError U+881C"});
expect(() => {ms932Encoder.encode("\u881D")}).toThrowError({name:"TypeError",message:"EncodingError U+881D"});
expect(() => {ms932Encoder.encode("\u881E")}).toThrowError({name:"TypeError",message:"EncodingError U+881E"});
expect(() => {ms932Encoder.encode("\u881F")}).toThrowError({name:"TypeError",message:"EncodingError U+881F"});
expect(() => {ms932Encoder.encode("\u8820")}).toThrowError({name:"TypeError",message:"EncodingError U+8820"});
expect([...ms932Encoder.encode("蠡蠢蠣")].join(",")).toBe("229,192,229,191,229,121"); // U+8821
expect(() => {ms932Encoder.encode("\u8824")}).toThrowError({name:"TypeError",message:"EncodingError U+8824"});
expect(() => {ms932Encoder.encode("\u8825")}).toThrowError({name:"TypeError",message:"EncodingError U+8825"});
expect(() => {ms932Encoder.encode("\u8826")}).toThrowError({name:"TypeError",message:"EncodingError U+8826"});
expect([...ms932Encoder.encode("蠧")].join(",")).toBe("229,196"); // U+8827
expect(() => {ms932Encoder.encode("\u8828")}).toThrowError({name:"TypeError",message:"EncodingError U+8828"});
expect(() => {ms932Encoder.encode("\u8829")}).toThrowError({name:"TypeError",message:"EncodingError U+8829"});
expect(() => {ms932Encoder.encode("\u882A")}).toThrowError({name:"TypeError",message:"EncodingError U+882A"});
expect(() => {ms932Encoder.encode("\u882B")}).toThrowError({name:"TypeError",message:"EncodingError U+882B"});
expect(() => {ms932Encoder.encode("\u882C")}).toThrowError({name:"TypeError",message:"EncodingError U+882C"});
expect(() => {ms932Encoder.encode("\u882D")}).toThrowError({name:"TypeError",message:"EncodingError U+882D"});
expect(() => {ms932Encoder.encode("\u882E")}).toThrowError({name:"TypeError",message:"EncodingError U+882E"});
expect(() => {ms932Encoder.encode("\u882F")}).toThrowError({name:"TypeError",message:"EncodingError U+882F"});
expect(() => {ms932Encoder.encode("\u8830")}).toThrowError({name:"TypeError",message:"EncodingError U+8830"});
expect([...ms932Encoder.encode("蠱")].join(",")).toBe("229,193"); // U+8831
expect(() => {ms932Encoder.encode("\u8832")}).toThrowError({name:"TypeError",message:"EncodingError U+8832"});
expect(() => {ms932Encoder.encode("\u8833")}).toThrowError({name:"TypeError",message:"EncodingError U+8833"});
expect(() => {ms932Encoder.encode("\u8834")}).toThrowError({name:"TypeError",message:"EncodingError U+8834"});
expect(() => {ms932Encoder.encode("\u8835")}).toThrowError({name:"TypeError",message:"EncodingError U+8835"});
expect([...ms932Encoder.encode("蠶")].join(",")).toBe("229,194"); // U+8836
expect(() => {ms932Encoder.encode("\u8837")}).toThrowError({name:"TypeError",message:"EncodingError U+8837"});
expect(() => {ms932Encoder.encode("\u8838")}).toThrowError({name:"TypeError",message:"EncodingError U+8838"});
expect([...ms932Encoder.encode("蠹")].join(",")).toBe("229,195"); // U+8839
expect(() => {ms932Encoder.encode("\u883A")}).toThrowError({name:"TypeError",message:"EncodingError U+883A"});
expect([...ms932Encoder.encode("蠻")].join(",")).toBe("229,197"); // U+883B
expect(() => {ms932Encoder.encode("\u883C")}).toThrowError({name:"TypeError",message:"EncodingError U+883C"});
expect(() => {ms932Encoder.encode("\u883D")}).toThrowError({name:"TypeError",message:"EncodingError U+883D"});
expect(() => {ms932Encoder.encode("\u883E")}).toThrowError({name:"TypeError",message:"EncodingError U+883E"});
expect(() => {ms932Encoder.encode("\u883F")}).toThrowError({name:"TypeError",message:"EncodingError U+883F"});
expect([...ms932Encoder.encode("血")].join(",")).toBe("140,140"); // U+8840
expect(() => {ms932Encoder.encode("\u8841")}).toThrowError({name:"TypeError",message:"EncodingError U+8841"});
expect([...ms932Encoder.encode("衂")].join(",")).toBe("229,199"); // U+8842
expect(() => {ms932Encoder.encode("\u8843")}).toThrowError({name:"TypeError",message:"EncodingError U+8843"});
expect([...ms932Encoder.encode("衄")].join(",")).toBe("229,198"); // U+8844
expect(() => {ms932Encoder.encode("\u8845")}).toThrowError({name:"TypeError",message:"EncodingError U+8845"});
expect([...ms932Encoder.encode("衆")].join(",")).toBe("143,79"); // U+8846
expect(() => {ms932Encoder.encode("\u8847")}).toThrowError({name:"TypeError",message:"EncodingError U+8847"});
expect(() => {ms932Encoder.encode("\u8848")}).toThrowError({name:"TypeError",message:"EncodingError U+8848"});
expect(() => {ms932Encoder.encode("\u8849")}).toThrowError({name:"TypeError",message:"EncodingError U+8849"});
expect(() => {ms932Encoder.encode("\u884A")}).toThrowError({name:"TypeError",message:"EncodingError U+884A"});
expect(() => {ms932Encoder.encode("\u884B")}).toThrowError({name:"TypeError",message:"EncodingError U+884B"});
expect([...ms932Encoder.encode("行衍")].join(",")).toBe("141,115,159,165"); // U+884C
expect(() => {ms932Encoder.encode("\u884E")}).toThrowError({name:"TypeError",message:"EncodingError U+884E"});
expect(() => {ms932Encoder.encode("\u884F")}).toThrowError({name:"TypeError",message:"EncodingError U+884F"});
expect(() => {ms932Encoder.encode("\u8850")}).toThrowError({name:"TypeError",message:"EncodingError U+8850"});
expect(() => {ms932Encoder.encode("\u8851")}).toThrowError({name:"TypeError",message:"EncodingError U+8851"});
expect([...ms932Encoder.encode("衒術")].join(",")).toBe("229,200,143,112"); // U+8852
expect(() => {ms932Encoder.encode("\u8854")}).toThrowError({name:"TypeError",message:"EncodingError U+8854"});
expect(() => {ms932Encoder.encode("\u8855")}).toThrowError({name:"TypeError",message:"EncodingError U+8855"});
expect(() => {ms932Encoder.encode("\u8856")}).toThrowError({name:"TypeError",message:"EncodingError U+8856"});
expect([...ms932Encoder.encode("街")].join(",")).toBe("138,88"); // U+8857
expect(() => {ms932Encoder.encode("\u8858")}).toThrowError({name:"TypeError",message:"EncodingError U+8858"});
expect([...ms932Encoder.encode("衙")].join(",")).toBe("229,201"); // U+8859
expect(() => {ms932Encoder.encode("\u885A")}).toThrowError({name:"TypeError",message:"EncodingError U+885A"});
expect([...ms932Encoder.encode("衛")].join(",")).toBe("137,113"); // U+885B
expect(() => {ms932Encoder.encode("\u885C")}).toThrowError({name:"TypeError",message:"EncodingError U+885C"});
expect([...ms932Encoder.encode("衝衞")].join(",")).toBe("143,213,229,202"); // U+885D
expect(() => {ms932Encoder.encode("\u885F")}).toThrowError({name:"TypeError",message:"EncodingError U+885F"});
expect(() => {ms932Encoder.encode("\u8860")}).toThrowError({name:"TypeError",message:"EncodingError U+8860"});
expect([...ms932Encoder.encode("衡衢衣")].join(",")).toBe("141,116,229,203,136,223"); // U+8861
expect(() => {ms932Encoder.encode("\u8864")}).toThrowError({name:"TypeError",message:"EncodingError U+8864"});
expect(() => {ms932Encoder.encode("\u8865")}).toThrowError({name:"TypeError",message:"EncodingError U+8865"});
expect(() => {ms932Encoder.encode("\u8866")}).toThrowError({name:"TypeError",message:"EncodingError U+8866"});
expect(() => {ms932Encoder.encode("\u8867")}).toThrowError({name:"TypeError",message:"EncodingError U+8867"});
expect([...ms932Encoder.encode("表")].join(",")).toBe("149,92"); // U+8868
expect(() => {ms932Encoder.encode("\u8869")}).toThrowError({name:"TypeError",message:"EncodingError U+8869"});
expect(() => {ms932Encoder.encode("\u886A")}).toThrowError({name:"TypeError",message:"EncodingError U+886A"});
expect([...ms932Encoder.encode("衫")].join(",")).toBe("229,204"); // U+886B
expect(() => {ms932Encoder.encode("\u886C")}).toThrowError({name:"TypeError",message:"EncodingError U+886C"});
expect(() => {ms932Encoder.encode("\u886D")}).toThrowError({name:"TypeError",message:"EncodingError U+886D"});
expect(() => {ms932Encoder.encode("\u886E")}).toThrowError({name:"TypeError",message:"EncodingError U+886E"});
expect(() => {ms932Encoder.encode("\u886F")}).toThrowError({name:"TypeError",message:"EncodingError U+886F"});
expect([...ms932Encoder.encode("衰")].join(",")).toBe("144,138"); // U+8870
expect(() => {ms932Encoder.encode("\u8871")}).toThrowError({name:"TypeError",message:"EncodingError U+8871"});
expect([...ms932Encoder.encode("衲")].join(",")).toBe("229,211"); // U+8872
expect(() => {ms932Encoder.encode("\u8873")}).toThrowError({name:"TypeError",message:"EncodingError U+8873"});
expect(() => {ms932Encoder.encode("\u8874")}).toThrowError({name:"TypeError",message:"EncodingError U+8874"});
expect([...ms932Encoder.encode("衵")].join(",")).toBe("229,208"); // U+8875
expect(() => {ms932Encoder.encode("\u8876")}).toThrowError({name:"TypeError",message:"EncodingError U+8876"});
expect([...ms932Encoder.encode("衷")].join(",")).toBe("146,143"); // U+8877
expect(() => {ms932Encoder.encode("\u8878")}).toThrowError({name:"TypeError",message:"EncodingError U+8878"});
expect(() => {ms932Encoder.encode("\u8879")}).toThrowError({name:"TypeError",message:"EncodingError U+8879"});
expect(() => {ms932Encoder.encode("\u887A")}).toThrowError({name:"TypeError",message:"EncodingError U+887A"});
expect(() => {ms932Encoder.encode("\u887B")}).toThrowError({name:"TypeError",message:"EncodingError U+887B"});
expect(() => {ms932Encoder.encode("\u887C")}).toThrowError({name:"TypeError",message:"EncodingError U+887C"});
expect([...ms932Encoder.encode("衽衾衿")].join(",")).toBe("229,209,229,206,139,220"); // U+887D
expect(() => {ms932Encoder.encode("\u8880")}).toThrowError({name:"TypeError",message:"EncodingError U+8880"});
expect([...ms932Encoder.encode("袁袂")].join(",")).toBe("229,205,229,212"); // U+8881
expect(() => {ms932Encoder.encode("\u8883")}).toThrowError({name:"TypeError",message:"EncodingError U+8883"});
expect(() => {ms932Encoder.encode("\u8884")}).toThrowError({name:"TypeError",message:"EncodingError U+8884"});
expect(() => {ms932Encoder.encode("\u8885")}).toThrowError({name:"TypeError",message:"EncodingError U+8885"});
expect(() => {ms932Encoder.encode("\u8886")}).toThrowError({name:"TypeError",message:"EncodingError U+8886"});
expect(() => {ms932Encoder.encode("\u8887")}).toThrowError({name:"TypeError",message:"EncodingError U+8887"});
expect([...ms932Encoder.encode("袈")].join(",")).toBe("140,85"); // U+8888
expect(() => {ms932Encoder.encode("\u8889")}).toThrowError({name:"TypeError",message:"EncodingError U+8889"});
expect(() => {ms932Encoder.encode("\u888A")}).toThrowError({name:"TypeError",message:"EncodingError U+888A"});
expect([...ms932Encoder.encode("袋")].join(",")).toBe("145,220"); // U+888B
expect(() => {ms932Encoder.encode("\u888C")}).toThrowError({name:"TypeError",message:"EncodingError U+888C"});
expect([...ms932Encoder.encode("袍")].join(",")).toBe("229,218"); // U+888D
expect(() => {ms932Encoder.encode("\u888E")}).toThrowError({name:"TypeError",message:"EncodingError U+888E"});
expect(() => {ms932Encoder.encode("\u888F")}).toThrowError({name:"TypeError",message:"EncodingError U+888F"});
expect(() => {ms932Encoder.encode("\u8890")}).toThrowError({name:"TypeError",message:"EncodingError U+8890"});
expect(() => {ms932Encoder.encode("\u8891")}).toThrowError({name:"TypeError",message:"EncodingError U+8891"});
expect([...ms932Encoder.encode("袒")].join(",")).toBe("229,214"); // U+8892
expect(() => {ms932Encoder.encode("\u8893")}).toThrowError({name:"TypeError",message:"EncodingError U+8893"});
expect(() => {ms932Encoder.encode("\u8894")}).toThrowError({name:"TypeError",message:"EncodingError U+8894"});
expect(() => {ms932Encoder.encode("\u8895")}).toThrowError({name:"TypeError",message:"EncodingError U+8895"});
expect([...ms932Encoder.encode("袖袗")].join(",")).toBe("145,179,229,213"); // U+8896
expect(() => {ms932Encoder.encode("\u8898")}).toThrowError({name:"TypeError",message:"EncodingError U+8898"});
expect([...ms932Encoder.encode("袙")].join(",")).toBe("229,216"); // U+8899
expect(() => {ms932Encoder.encode("\u889A")}).toThrowError({name:"TypeError",message:"EncodingError U+889A"});
expect(() => {ms932Encoder.encode("\u889B")}).toThrowError({name:"TypeError",message:"EncodingError U+889B"});
expect(() => {ms932Encoder.encode("\u889C")}).toThrowError({name:"TypeError",message:"EncodingError U+889C"});
expect(() => {ms932Encoder.encode("\u889D")}).toThrowError({name:"TypeError",message:"EncodingError U+889D"});
expect([...ms932Encoder.encode("袞")].join(",")).toBe("229,207"); // U+889E
expect(() => {ms932Encoder.encode("\u889F")}).toThrowError({name:"TypeError",message:"EncodingError U+889F"});
expect(() => {ms932Encoder.encode("\u88A0")}).toThrowError({name:"TypeError",message:"EncodingError U+88A0"});
expect(() => {ms932Encoder.encode("\u88A1")}).toThrowError({name:"TypeError",message:"EncodingError U+88A1"});
expect([...ms932Encoder.encode("袢")].join(",")).toBe("229,217"); // U+88A2
expect(() => {ms932Encoder.encode("\u88A3")}).toThrowError({name:"TypeError",message:"EncodingError U+88A3"});
expect([...ms932Encoder.encode("袤")].join(",")).toBe("229,219"); // U+88A4
expect(() => {ms932Encoder.encode("\u88A5")}).toThrowError({name:"TypeError",message:"EncodingError U+88A5"});
expect(() => {ms932Encoder.encode("\u88A6")}).toThrowError({name:"TypeError",message:"EncodingError U+88A6"});
expect(() => {ms932Encoder.encode("\u88A7")}).toThrowError({name:"TypeError",message:"EncodingError U+88A7"});
expect(() => {ms932Encoder.encode("\u88A8")}).toThrowError({name:"TypeError",message:"EncodingError U+88A8"});
expect(() => {ms932Encoder.encode("\u88A9")}).toThrowError({name:"TypeError",message:"EncodingError U+88A9"});
expect(() => {ms932Encoder.encode("\u88AA")}).toThrowError({name:"TypeError",message:"EncodingError U+88AA"});
expect([...ms932Encoder.encode("被")].join(",")).toBe("148,237"); // U+88AB
expect(() => {ms932Encoder.encode("\u88AC")}).toThrowError({name:"TypeError",message:"EncodingError U+88AC"});
expect(() => {ms932Encoder.encode("\u88AD")}).toThrowError({name:"TypeError",message:"EncodingError U+88AD"});
expect([...ms932Encoder.encode("袮")].join(",")).toBe("229,215"); // U+88AE
expect(() => {ms932Encoder.encode("\u88AF")}).toThrowError({name:"TypeError",message:"EncodingError U+88AF"});
expect([...ms932Encoder.encode("袰袱")].join(",")).toBe("229,220,229,222"); // U+88B0
expect(() => {ms932Encoder.encode("\u88B2")}).toThrowError({name:"TypeError",message:"EncodingError U+88B2"});
expect(() => {ms932Encoder.encode("\u88B3")}).toThrowError({name:"TypeError",message:"EncodingError U+88B3"});
expect([...ms932Encoder.encode("袴袵")].join(",")).toBe("140,209,229,210"); // U+88B4
expect(() => {ms932Encoder.encode("\u88B6")}).toThrowError({name:"TypeError",message:"EncodingError U+88B6"});
expect([...ms932Encoder.encode("袷")].join(",")).toBe("136,191"); // U+88B7
expect(() => {ms932Encoder.encode("\u88B8")}).toThrowError({name:"TypeError",message:"EncodingError U+88B8"});
expect(() => {ms932Encoder.encode("\u88B9")}).toThrowError({name:"TypeError",message:"EncodingError U+88B9"});
expect(() => {ms932Encoder.encode("\u88BA")}).toThrowError({name:"TypeError",message:"EncodingError U+88BA"});
expect(() => {ms932Encoder.encode("\u88BB")}).toThrowError({name:"TypeError",message:"EncodingError U+88BB"});
expect(() => {ms932Encoder.encode("\u88BC")}).toThrowError({name:"TypeError",message:"EncodingError U+88BC"});
expect(() => {ms932Encoder.encode("\u88BD")}).toThrowError({name:"TypeError",message:"EncodingError U+88BD"});
expect(() => {ms932Encoder.encode("\u88BE")}).toThrowError({name:"TypeError",message:"EncodingError U+88BE"});
expect([...ms932Encoder.encode("袿")].join(",")).toBe("229,221"); // U+88BF
expect(() => {ms932Encoder.encode("\u88C0")}).toThrowError({name:"TypeError",message:"EncodingError U+88C0"});
expect([...ms932Encoder.encode("裁裂裃裄装")].join(",")).toBe("141,217,151,244,229,223,229,224,145,149"); // U+88C1
expect(() => {ms932Encoder.encode("\u88C6")}).toThrowError({name:"TypeError",message:"EncodingError U+88C6"});
expect(() => {ms932Encoder.encode("\u88C7")}).toThrowError({name:"TypeError",message:"EncodingError U+88C7"});
expect(() => {ms932Encoder.encode("\u88C8")}).toThrowError({name:"TypeError",message:"EncodingError U+88C8"});
expect(() => {ms932Encoder.encode("\u88C9")}).toThrowError({name:"TypeError",message:"EncodingError U+88C9"});
expect(() => {ms932Encoder.encode("\u88CA")}).toThrowError({name:"TypeError",message:"EncodingError U+88CA"});
expect(() => {ms932Encoder.encode("\u88CB")}).toThrowError({name:"TypeError",message:"EncodingError U+88CB"});
expect(() => {ms932Encoder.encode("\u88CC")}).toThrowError({name:"TypeError",message:"EncodingError U+88CC"});
expect(() => {ms932Encoder.encode("\u88CD")}).toThrowError({name:"TypeError",message:"EncodingError U+88CD"});
expect(() => {ms932Encoder.encode("\u88CE")}).toThrowError({name:"TypeError",message:"EncodingError U+88CE"});
expect([...ms932Encoder.encode("裏")].join(",")).toBe("151,160"); // U+88CF
expect(() => {ms932Encoder.encode("\u88D0")}).toThrowError({name:"TypeError",message:"EncodingError U+88D0"});
expect(() => {ms932Encoder.encode("\u88D1")}).toThrowError({name:"TypeError",message:"EncodingError U+88D1"});
expect(() => {ms932Encoder.encode("\u88D2")}).toThrowError({name:"TypeError",message:"EncodingError U+88D2"});
expect(() => {ms932Encoder.encode("\u88D3")}).toThrowError({name:"TypeError",message:"EncodingError U+88D3"});
expect([...ms932Encoder.encode("裔裕")].join(",")).toBe("229,225,151,84"); // U+88D4
expect(() => {ms932Encoder.encode("\u88D6")}).toThrowError({name:"TypeError",message:"EncodingError U+88D6"});
expect(() => {ms932Encoder.encode("\u88D7")}).toThrowError({name:"TypeError",message:"EncodingError U+88D7"});
expect([...ms932Encoder.encode("裘裙")].join(",")).toBe("229,226,229,227"); // U+88D8
expect(() => {ms932Encoder.encode("\u88DA")}).toThrowError({name:"TypeError",message:"EncodingError U+88DA"});
expect(() => {ms932Encoder.encode("\u88DB")}).toThrowError({name:"TypeError",message:"EncodingError U+88DB"});
expect([...ms932Encoder.encode("補裝")].join(",")).toBe("149,226,229,228"); // U+88DC
expect(() => {ms932Encoder.encode("\u88DE")}).toThrowError({name:"TypeError",message:"EncodingError U+88DE"});
expect([...ms932Encoder.encode("裟")].join(",")).toBe("141,190"); // U+88DF
expect(() => {ms932Encoder.encode("\u88E0")}).toThrowError({name:"TypeError",message:"EncodingError U+88E0"});
expect([...ms932Encoder.encode("裡")].join(",")).toBe("151,161"); // U+88E1
expect(() => {ms932Encoder.encode("\u88E2")}).toThrowError({name:"TypeError",message:"EncodingError U+88E2"});
expect(() => {ms932Encoder.encode("\u88E3")}).toThrowError({name:"TypeError",message:"EncodingError U+88E3"});
expect(() => {ms932Encoder.encode("\u88E4")}).toThrowError({name:"TypeError",message:"EncodingError U+88E4"});
expect(() => {ms932Encoder.encode("\u88E5")}).toThrowError({name:"TypeError",message:"EncodingError U+88E5"});
expect(() => {ms932Encoder.encode("\u88E6")}).toThrowError({name:"TypeError",message:"EncodingError U+88E6"});
expect(() => {ms932Encoder.encode("\u88E7")}).toThrowError({name:"TypeError",message:"EncodingError U+88E7"});
expect([...ms932Encoder.encode("裨")].join(",")).toBe("229,233"); // U+88E8
expect(() => {ms932Encoder.encode("\u88E9")}).toThrowError({name:"TypeError",message:"EncodingError U+88E9"});
expect(() => {ms932Encoder.encode("\u88EA")}).toThrowError({name:"TypeError",message:"EncodingError U+88EA"});
expect(() => {ms932Encoder.encode("\u88EB")}).toThrowError({name:"TypeError",message:"EncodingError U+88EB"});
expect(() => {ms932Encoder.encode("\u88EC")}).toThrowError({name:"TypeError",message:"EncodingError U+88EC"});
expect(() => {ms932Encoder.encode("\u88ED")}).toThrowError({name:"TypeError",message:"EncodingError U+88ED"});
expect(() => {ms932Encoder.encode("\u88EE")}).toThrowError({name:"TypeError",message:"EncodingError U+88EE"});
expect(() => {ms932Encoder.encode("\u88EF")}).toThrowError({name:"TypeError",message:"EncodingError U+88EF"});
expect(() => {ms932Encoder.encode("\u88F0")}).toThrowError({name:"TypeError",message:"EncodingError U+88F0"});
expect(() => {ms932Encoder.encode("\u88F1")}).toThrowError({name:"TypeError",message:"EncodingError U+88F1"});
expect([...ms932Encoder.encode("裲裳裴裵")].join(",")).toBe("229,234,143,214,229,232,251,162"); // U+88F2
expect(() => {ms932Encoder.encode("\u88F6")}).toThrowError({name:"TypeError",message:"EncodingError U+88F6"});
expect(() => {ms932Encoder.encode("\u88F7")}).toThrowError({name:"TypeError",message:"EncodingError U+88F7"});
expect([...ms932Encoder.encode("裸裹")].join(",")).toBe("151,135,229,229"); // U+88F8
expect(() => {ms932Encoder.encode("\u88FA")}).toThrowError({name:"TypeError",message:"EncodingError U+88FA"});
expect(() => {ms932Encoder.encode("\u88FB")}).toThrowError({name:"TypeError",message:"EncodingError U+88FB"});
expect([...ms932Encoder.encode("裼製裾")].join(",")).toBe("229,231,144,187,144,158"); // U+88FC
expect(() => {ms932Encoder.encode("\u88FF")}).toThrowError({name:"TypeError",message:"EncodingError U+88FF"});
expect(() => {ms932Encoder.encode("\u8900")}).toThrowError({name:"TypeError",message:"EncodingError U+8900"});
expect(() => {ms932Encoder.encode("\u8901")}).toThrowError({name:"TypeError",message:"EncodingError U+8901"});
expect([...ms932Encoder.encode("褂")].join(",")).toBe("229,230"); // U+8902
expect(() => {ms932Encoder.encode("\u8903")}).toThrowError({name:"TypeError",message:"EncodingError U+8903"});
expect([...ms932Encoder.encode("褄")].join(",")).toBe("229,235"); // U+8904
expect(() => {ms932Encoder.encode("\u8905")}).toThrowError({name:"TypeError",message:"EncodingError U+8905"});
expect(() => {ms932Encoder.encode("\u8906")}).toThrowError({name:"TypeError",message:"EncodingError U+8906"});
expect([...ms932Encoder.encode("複")].join(",")).toBe("149,161"); // U+8907
expect(() => {ms932Encoder.encode("\u8908")}).toThrowError({name:"TypeError",message:"EncodingError U+8908"});
expect(() => {ms932Encoder.encode("\u8909")}).toThrowError({name:"TypeError",message:"EncodingError U+8909"});
expect([...ms932Encoder.encode("褊")].join(",")).toBe("229,237"); // U+890A
expect(() => {ms932Encoder.encode("\u890B")}).toThrowError({name:"TypeError",message:"EncodingError U+890B"});
expect([...ms932Encoder.encode("褌")].join(",")).toBe("229,236"); // U+890C
expect(() => {ms932Encoder.encode("\u890D")}).toThrowError({name:"TypeError",message:"EncodingError U+890D"});
expect(() => {ms932Encoder.encode("\u890E")}).toThrowError({name:"TypeError",message:"EncodingError U+890E"});
expect(() => {ms932Encoder.encode("\u890F")}).toThrowError({name:"TypeError",message:"EncodingError U+890F"});
expect([...ms932Encoder.encode("褐")].join(",")).toBe("138,140"); // U+8910
expect(() => {ms932Encoder.encode("\u8911")}).toThrowError({name:"TypeError",message:"EncodingError U+8911"});
expect([...ms932Encoder.encode("褒褓")].join(",")).toBe("150,74,229,238"); // U+8912
expect(() => {ms932Encoder.encode("\u8914")}).toThrowError({name:"TypeError",message:"EncodingError U+8914"});
expect(() => {ms932Encoder.encode("\u8915")}).toThrowError({name:"TypeError",message:"EncodingError U+8915"});
expect(() => {ms932Encoder.encode("\u8916")}).toThrowError({name:"TypeError",message:"EncodingError U+8916"});
expect(() => {ms932Encoder.encode("\u8917")}).toThrowError({name:"TypeError",message:"EncodingError U+8917"});
expect(() => {ms932Encoder.encode("\u8918")}).toThrowError({name:"TypeError",message:"EncodingError U+8918"});
expect(() => {ms932Encoder.encode("\u8919")}).toThrowError({name:"TypeError",message:"EncodingError U+8919"});
expect(() => {ms932Encoder.encode("\u891A")}).toThrowError({name:"TypeError",message:"EncodingError U+891A"});
expect(() => {ms932Encoder.encode("\u891B")}).toThrowError({name:"TypeError",message:"EncodingError U+891B"});
expect([...ms932Encoder.encode("褜褝褞")].join(",")).toBe("250,93,229,250,229,240"); // U+891C
expect(() => {ms932Encoder.encode("\u891F")}).toThrowError({name:"TypeError",message:"EncodingError U+891F"});
expect(() => {ms932Encoder.encode("\u8920")}).toThrowError({name:"TypeError",message:"EncodingError U+8920"});
expect(() => {ms932Encoder.encode("\u8921")}).toThrowError({name:"TypeError",message:"EncodingError U+8921"});
expect(() => {ms932Encoder.encode("\u8922")}).toThrowError({name:"TypeError",message:"EncodingError U+8922"});
expect(() => {ms932Encoder.encode("\u8923")}).toThrowError({name:"TypeError",message:"EncodingError U+8923"});
expect(() => {ms932Encoder.encode("\u8924")}).toThrowError({name:"TypeError",message:"EncodingError U+8924"});
expect([...ms932Encoder.encode("褥")].join(",")).toBe("229,241"); // U+8925
expect(() => {ms932Encoder.encode("\u8926")}).toThrowError({name:"TypeError",message:"EncodingError U+8926"});
expect(() => {ms932Encoder.encode("\u8927")}).toThrowError({name:"TypeError",message:"EncodingError U+8927"});
expect(() => {ms932Encoder.encode("\u8928")}).toThrowError({name:"TypeError",message:"EncodingError U+8928"});
expect(() => {ms932Encoder.encode("\u8929")}).toThrowError({name:"TypeError",message:"EncodingError U+8929"});
expect([...ms932Encoder.encode("褪褫")].join(",")).toBe("229,242,229,243"); // U+892A
expect(() => {ms932Encoder.encode("\u892C")}).toThrowError({name:"TypeError",message:"EncodingError U+892C"});
expect(() => {ms932Encoder.encode("\u892D")}).toThrowError({name:"TypeError",message:"EncodingError U+892D"});
expect(() => {ms932Encoder.encode("\u892E")}).toThrowError({name:"TypeError",message:"EncodingError U+892E"});
expect(() => {ms932Encoder.encode("\u892F")}).toThrowError({name:"TypeError",message:"EncodingError U+892F"});
expect(() => {ms932Encoder.encode("\u8930")}).toThrowError({name:"TypeError",message:"EncodingError U+8930"});
expect(() => {ms932Encoder.encode("\u8931")}).toThrowError({name:"TypeError",message:"EncodingError U+8931"});
expect(() => {ms932Encoder.encode("\u8932")}).toThrowError({name:"TypeError",message:"EncodingError U+8932"});
expect(() => {ms932Encoder.encode("\u8933")}).toThrowError({name:"TypeError",message:"EncodingError U+8933"});
expect(() => {ms932Encoder.encode("\u8934")}).toThrowError({name:"TypeError",message:"EncodingError U+8934"});
expect(() => {ms932Encoder.encode("\u8935")}).toThrowError({name:"TypeError",message:"EncodingError U+8935"});
expect([...ms932Encoder.encode("褶")].join(",")).toBe("229,247"); // U+8936
expect(() => {ms932Encoder.encode("\u8937")}).toThrowError({name:"TypeError",message:"EncodingError U+8937"});
expect([...ms932Encoder.encode("褸")].join(",")).toBe("229,248"); // U+8938
expect(() => {ms932Encoder.encode("\u8939")}).toThrowError({name:"TypeError",message:"EncodingError U+8939"});
expect(() => {ms932Encoder.encode("\u893A")}).toThrowError({name:"TypeError",message:"EncodingError U+893A"});
expect([...ms932Encoder.encode("褻")].join(",")).toBe("229,246"); // U+893B
expect(() => {ms932Encoder.encode("\u893C")}).toThrowError({name:"TypeError",message:"EncodingError U+893C"});
expect(() => {ms932Encoder.encode("\u893D")}).toThrowError({name:"TypeError",message:"EncodingError U+893D"});
expect(() => {ms932Encoder.encode("\u893E")}).toThrowError({name:"TypeError",message:"EncodingError U+893E"});
expect(() => {ms932Encoder.encode("\u893F")}).toThrowError({name:"TypeError",message:"EncodingError U+893F"});
expect(() => {ms932Encoder.encode("\u8940")}).toThrowError({name:"TypeError",message:"EncodingError U+8940"});
expect([...ms932Encoder.encode("襁")].join(",")).toBe("229,244"); // U+8941
expect(() => {ms932Encoder.encode("\u8942")}).toThrowError({name:"TypeError",message:"EncodingError U+8942"});
expect([...ms932Encoder.encode("襃襄")].join(",")).toBe("229,239,229,245"); // U+8943
expect(() => {ms932Encoder.encode("\u8945")}).toThrowError({name:"TypeError",message:"EncodingError U+8945"});
expect(() => {ms932Encoder.encode("\u8946")}).toThrowError({name:"TypeError",message:"EncodingError U+8946"});
expect(() => {ms932Encoder.encode("\u8947")}).toThrowError({name:"TypeError",message:"EncodingError U+8947"});
expect(() => {ms932Encoder.encode("\u8948")}).toThrowError({name:"TypeError",message:"EncodingError U+8948"});
expect(() => {ms932Encoder.encode("\u8949")}).toThrowError({name:"TypeError",message:"EncodingError U+8949"});
expect(() => {ms932Encoder.encode("\u894A")}).toThrowError({name:"TypeError",message:"EncodingError U+894A"});
expect(() => {ms932Encoder.encode("\u894B")}).toThrowError({name:"TypeError",message:"EncodingError U+894B"});
expect([...ms932Encoder.encode("襌襍")].join(",")).toBe("229,249,232,181"); // U+894C
expect(() => {ms932Encoder.encode("\u894E")}).toThrowError({name:"TypeError",message:"EncodingError U+894E"});
expect(() => {ms932Encoder.encode("\u894F")}).toThrowError({name:"TypeError",message:"EncodingError U+894F"});
expect(() => {ms932Encoder.encode("\u8950")}).toThrowError({name:"TypeError",message:"EncodingError U+8950"});
expect(() => {ms932Encoder.encode("\u8951")}).toThrowError({name:"TypeError",message:"EncodingError U+8951"});
expect(() => {ms932Encoder.encode("\u8952")}).toThrowError({name:"TypeError",message:"EncodingError U+8952"});
expect(() => {ms932Encoder.encode("\u8953")}).toThrowError({name:"TypeError",message:"EncodingError U+8953"});
expect(() => {ms932Encoder.encode("\u8954")}).toThrowError({name:"TypeError",message:"EncodingError U+8954"});
expect(() => {ms932Encoder.encode("\u8955")}).toThrowError({name:"TypeError",message:"EncodingError U+8955"});
expect([...ms932Encoder.encode("襖")].join(",")).toBe("137,166"); // U+8956
expect(() => {ms932Encoder.encode("\u8957")}).toThrowError({name:"TypeError",message:"EncodingError U+8957"});
expect(() => {ms932Encoder.encode("\u8958")}).toThrowError({name:"TypeError",message:"EncodingError U+8958"});
expect(() => {ms932Encoder.encode("\u8959")}).toThrowError({name:"TypeError",message:"EncodingError U+8959"});
expect(() => {ms932Encoder.encode("\u895A")}).toThrowError({name:"TypeError",message:"EncodingError U+895A"});
expect(() => {ms932Encoder.encode("\u895B")}).toThrowError({name:"TypeError",message:"EncodingError U+895B"});
expect(() => {ms932Encoder.encode("\u895C")}).toThrowError({name:"TypeError",message:"EncodingError U+895C"});
expect(() => {ms932Encoder.encode("\u895D")}).toThrowError({name:"TypeError",message:"EncodingError U+895D"});
expect([...ms932Encoder.encode("襞襟襠")].join(",")).toBe("229,252,139,221,229,251"); // U+895E
expect(() => {ms932Encoder.encode("\u8961")}).toThrowError({name:"TypeError",message:"EncodingError U+8961"});
expect(() => {ms932Encoder.encode("\u8962")}).toThrowError({name:"TypeError",message:"EncodingError U+8962"});
expect(() => {ms932Encoder.encode("\u8963")}).toThrowError({name:"TypeError",message:"EncodingError U+8963"});
expect([...ms932Encoder.encode("襤")].join(",")).toBe("230,65"); // U+8964
expect(() => {ms932Encoder.encode("\u8965")}).toThrowError({name:"TypeError",message:"EncodingError U+8965"});
expect([...ms932Encoder.encode("襦")].join(",")).toBe("230,64"); // U+8966
expect(() => {ms932Encoder.encode("\u8967")}).toThrowError({name:"TypeError",message:"EncodingError U+8967"});
expect(() => {ms932Encoder.encode("\u8968")}).toThrowError({name:"TypeError",message:"EncodingError U+8968"});
expect(() => {ms932Encoder.encode("\u8969")}).toThrowError({name:"TypeError",message:"EncodingError U+8969"});
expect([...ms932Encoder.encode("襪")].join(",")).toBe("230,67"); // U+896A
expect(() => {ms932Encoder.encode("\u896B")}).toThrowError({name:"TypeError",message:"EncodingError U+896B"});
expect(() => {ms932Encoder.encode("\u896C")}).toThrowError({name:"TypeError",message:"EncodingError U+896C"});
expect([...ms932Encoder.encode("襭")].join(",")).toBe("230,66"); // U+896D
expect(() => {ms932Encoder.encode("\u896E")}).toThrowError({name:"TypeError",message:"EncodingError U+896E"});
expect([...ms932Encoder.encode("襯")].join(",")).toBe("230,68"); // U+896F
expect(() => {ms932Encoder.encode("\u8970")}).toThrowError({name:"TypeError",message:"EncodingError U+8970"});
expect(() => {ms932Encoder.encode("\u8971")}).toThrowError({name:"TypeError",message:"EncodingError U+8971"});
expect([...ms932Encoder.encode("襲")].join(",")).toBe("143,80"); // U+8972
expect(() => {ms932Encoder.encode("\u8973")}).toThrowError({name:"TypeError",message:"EncodingError U+8973"});
expect([...ms932Encoder.encode("襴")].join(",")).toBe("230,69"); // U+8974
expect(() => {ms932Encoder.encode("\u8975")}).toThrowError({name:"TypeError",message:"EncodingError U+8975"});
expect(() => {ms932Encoder.encode("\u8976")}).toThrowError({name:"TypeError",message:"EncodingError U+8976"});
expect([...ms932Encoder.encode("襷")].join(",")).toBe("230,70"); // U+8977
expect(() => {ms932Encoder.encode("\u8978")}).toThrowError({name:"TypeError",message:"EncodingError U+8978"});
expect(() => {ms932Encoder.encode("\u8979")}).toThrowError({name:"TypeError",message:"EncodingError U+8979"});
expect(() => {ms932Encoder.encode("\u897A")}).toThrowError({name:"TypeError",message:"EncodingError U+897A"});
expect(() => {ms932Encoder.encode("\u897B")}).toThrowError({name:"TypeError",message:"EncodingError U+897B"});
expect(() => {ms932Encoder.encode("\u897C")}).toThrowError({name:"TypeError",message:"EncodingError U+897C"});
expect(() => {ms932Encoder.encode("\u897D")}).toThrowError({name:"TypeError",message:"EncodingError U+897D"});
expect([...ms932Encoder.encode("襾西")].join(",")).toBe("230,71,144,188"); // U+897E
expect(() => {ms932Encoder.encode("\u8980")}).toThrowError({name:"TypeError",message:"EncodingError U+8980"});
expect([...ms932Encoder.encode("要")].join(",")).toBe("151,118"); // U+8981
expect(() => {ms932Encoder.encode("\u8982")}).toThrowError({name:"TypeError",message:"EncodingError U+8982"});
expect([...ms932Encoder.encode("覃")].join(",")).toBe("230,72"); // U+8983
expect(() => {ms932Encoder.encode("\u8984")}).toThrowError({name:"TypeError",message:"EncodingError U+8984"});
expect(() => {ms932Encoder.encode("\u8985")}).toThrowError({name:"TypeError",message:"EncodingError U+8985"});
expect([...ms932Encoder.encode("覆覇覈")].join(",")).toBe("149,162,148,101,230,73"); // U+8986
expect(() => {ms932Encoder.encode("\u8989")}).toThrowError({name:"TypeError",message:"EncodingError U+8989"});
expect([...ms932Encoder.encode("覊見")].join(",")).toBe("230,74,140,169"); // U+898A
expect(() => {ms932Encoder.encode("\u898C")}).toThrowError({name:"TypeError",message:"EncodingError U+898C"});
expect(() => {ms932Encoder.encode("\u898D")}).toThrowError({name:"TypeError",message:"EncodingError U+898D"});
expect(() => {ms932Encoder.encode("\u898E")}).toThrowError({name:"TypeError",message:"EncodingError U+898E"});
expect([...ms932Encoder.encode("規")].join(",")).toBe("139,75"); // U+898F
expect(() => {ms932Encoder.encode("\u8990")}).toThrowError({name:"TypeError",message:"EncodingError U+8990"});
expect(() => {ms932Encoder.encode("\u8991")}).toThrowError({name:"TypeError",message:"EncodingError U+8991"});
expect(() => {ms932Encoder.encode("\u8992")}).toThrowError({name:"TypeError",message:"EncodingError U+8992"});
expect([...ms932Encoder.encode("覓")].join(",")).toBe("230,75"); // U+8993
expect(() => {ms932Encoder.encode("\u8994")}).toThrowError({name:"TypeError",message:"EncodingError U+8994"});
expect(() => {ms932Encoder.encode("\u8995")}).toThrowError({name:"TypeError",message:"EncodingError U+8995"});
expect([...ms932Encoder.encode("視覗覘")].join(",")).toBe("142,139,148,96,230,76"); // U+8996
expect(() => {ms932Encoder.encode("\u8999")}).toThrowError({name:"TypeError",message:"EncodingError U+8999"});
expect([...ms932Encoder.encode("覚")].join(",")).toBe("138,111"); // U+899A
expect(() => {ms932Encoder.encode("\u899B")}).toThrowError({name:"TypeError",message:"EncodingError U+899B"});
expect(() => {ms932Encoder.encode("\u899C")}).toThrowError({name:"TypeError",message:"EncodingError U+899C"});
expect(() => {ms932Encoder.encode("\u899D")}).toThrowError({name:"TypeError",message:"EncodingError U+899D"});
expect(() => {ms932Encoder.encode("\u899E")}).toThrowError({name:"TypeError",message:"EncodingError U+899E"});
expect(() => {ms932Encoder.encode("\u899F")}).toThrowError({name:"TypeError",message:"EncodingError U+899F"});
expect(() => {ms932Encoder.encode("\u89A0")}).toThrowError({name:"TypeError",message:"EncodingError U+89A0"});
expect([...ms932Encoder.encode("覡")].join(",")).toBe("230,77"); // U+89A1
expect(() => {ms932Encoder.encode("\u89A2")}).toThrowError({name:"TypeError",message:"EncodingError U+89A2"});
expect(() => {ms932Encoder.encode("\u89A3")}).toThrowError({name:"TypeError",message:"EncodingError U+89A3"});
expect(() => {ms932Encoder.encode("\u89A4")}).toThrowError({name:"TypeError",message:"EncodingError U+89A4"});
expect(() => {ms932Encoder.encode("\u89A5")}).toThrowError({name:"TypeError",message:"EncodingError U+89A5"});
expect([...ms932Encoder.encode("覦覧")].join(",")).toBe("230,79,151,151"); // U+89A6
expect(() => {ms932Encoder.encode("\u89A8")}).toThrowError({name:"TypeError",message:"EncodingError U+89A8"});
expect([...ms932Encoder.encode("覩親")].join(",")).toBe("230,78,144,101"); // U+89A9
expect(() => {ms932Encoder.encode("\u89AB")}).toThrowError({name:"TypeError",message:"EncodingError U+89AB"});
expect([...ms932Encoder.encode("覬")].join(",")).toBe("230,80"); // U+89AC
expect(() => {ms932Encoder.encode("\u89AD")}).toThrowError({name:"TypeError",message:"EncodingError U+89AD"});
expect(() => {ms932Encoder.encode("\u89AE")}).toThrowError({name:"TypeError",message:"EncodingError U+89AE"});
expect([...ms932Encoder.encode("覯")].join(",")).toBe("230,81"); // U+89AF
expect(() => {ms932Encoder.encode("\u89B0")}).toThrowError({name:"TypeError",message:"EncodingError U+89B0"});
expect(() => {ms932Encoder.encode("\u89B1")}).toThrowError({name:"TypeError",message:"EncodingError U+89B1"});
expect([...ms932Encoder.encode("覲観")].join(",")).toBe("230,82,138,207"); // U+89B2
expect(() => {ms932Encoder.encode("\u89B4")}).toThrowError({name:"TypeError",message:"EncodingError U+89B4"});
expect(() => {ms932Encoder.encode("\u89B5")}).toThrowError({name:"TypeError",message:"EncodingError U+89B5"});
expect(() => {ms932Encoder.encode("\u89B6")}).toThrowError({name:"TypeError",message:"EncodingError U+89B6"});
expect(() => {ms932Encoder.encode("\u89B7")}).toThrowError({name:"TypeError",message:"EncodingError U+89B7"});
expect(() => {ms932Encoder.encode("\u89B8")}).toThrowError({name:"TypeError",message:"EncodingError U+89B8"});
expect(() => {ms932Encoder.encode("\u89B9")}).toThrowError({name:"TypeError",message:"EncodingError U+89B9"});
expect([...ms932Encoder.encode("覺")].join(",")).toBe("230,83"); // U+89BA
expect(() => {ms932Encoder.encode("\u89BB")}).toThrowError({name:"TypeError",message:"EncodingError U+89BB"});
expect(() => {ms932Encoder.encode("\u89BC")}).toThrowError({name:"TypeError",message:"EncodingError U+89BC"});
expect([...ms932Encoder.encode("覽")].join(",")).toBe("230,84"); // U+89BD
expect(() => {ms932Encoder.encode("\u89BE")}).toThrowError({name:"TypeError",message:"EncodingError U+89BE"});
expect([...ms932Encoder.encode("覿觀")].join(",")).toBe("230,85,230,86"); // U+89BF
expect(() => {ms932Encoder.encode("\u89C1")}).toThrowError({name:"TypeError",message:"EncodingError U+89C1"});
expect(() => {ms932Encoder.encode("\u89C2")}).toThrowError({name:"TypeError",message:"EncodingError U+89C2"});
expect(() => {ms932Encoder.encode("\u89C3")}).toThrowError({name:"TypeError",message:"EncodingError U+89C3"});
expect(() => {ms932Encoder.encode("\u89C4")}).toThrowError({name:"TypeError",message:"EncodingError U+89C4"});
expect(() => {ms932Encoder.encode("\u89C5")}).toThrowError({name:"TypeError",message:"EncodingError U+89C5"});
expect(() => {ms932Encoder.encode("\u89C6")}).toThrowError({name:"TypeError",message:"EncodingError U+89C6"});
expect(() => {ms932Encoder.encode("\u89C7")}).toThrowError({name:"TypeError",message:"EncodingError U+89C7"});
expect(() => {ms932Encoder.encode("\u89C8")}).toThrowError({name:"TypeError",message:"EncodingError U+89C8"});
expect(() => {ms932Encoder.encode("\u89C9")}).toThrowError({name:"TypeError",message:"EncodingError U+89C9"});
expect(() => {ms932Encoder.encode("\u89CA")}).toThrowError({name:"TypeError",message:"EncodingError U+89CA"});
expect(() => {ms932Encoder.encode("\u89CB")}).toThrowError({name:"TypeError",message:"EncodingError U+89CB"});
expect(() => {ms932Encoder.encode("\u89CC")}).toThrowError({name:"TypeError",message:"EncodingError U+89CC"});
expect(() => {ms932Encoder.encode("\u89CD")}).toThrowError({name:"TypeError",message:"EncodingError U+89CD"});
expect(() => {ms932Encoder.encode("\u89CE")}).toThrowError({name:"TypeError",message:"EncodingError U+89CE"});
expect(() => {ms932Encoder.encode("\u89CF")}).toThrowError({name:"TypeError",message:"EncodingError U+89CF"});
expect(() => {ms932Encoder.encode("\u89D0")}).toThrowError({name:"TypeError",message:"EncodingError U+89D0"});
expect(() => {ms932Encoder.encode("\u89D1")}).toThrowError({name:"TypeError",message:"EncodingError U+89D1"});
expect([...ms932Encoder.encode("角")].join(",")).toBe("138,112"); // U+89D2
expect(() => {ms932Encoder.encode("\u89D3")}).toThrowError({name:"TypeError",message:"EncodingError U+89D3"});
expect(() => {ms932Encoder.encode("\u89D4")}).toThrowError({name:"TypeError",message:"EncodingError U+89D4"});
expect(() => {ms932Encoder.encode("\u89D5")}).toThrowError({name:"TypeError",message:"EncodingError U+89D5"});
expect(() => {ms932Encoder.encode("\u89D6")}).toThrowError({name:"TypeError",message:"EncodingError U+89D6"});
expect(() => {ms932Encoder.encode("\u89D7")}).toThrowError({name:"TypeError",message:"EncodingError U+89D7"});
expect(() => {ms932Encoder.encode("\u89D8")}).toThrowError({name:"TypeError",message:"EncodingError U+89D8"});
expect(() => {ms932Encoder.encode("\u89D9")}).toThrowError({name:"TypeError",message:"EncodingError U+89D9"});
expect([...ms932Encoder.encode("觚")].join(",")).toBe("230,87"); // U+89DA
expect(() => {ms932Encoder.encode("\u89DB")}).toThrowError({name:"TypeError",message:"EncodingError U+89DB"});
expect([...ms932Encoder.encode("觜觝")].join(",")).toBe("230,88,230,89"); // U+89DC
expect(() => {ms932Encoder.encode("\u89DE")}).toThrowError({name:"TypeError",message:"EncodingError U+89DE"});
expect(() => {ms932Encoder.encode("\u89DF")}).toThrowError({name:"TypeError",message:"EncodingError U+89DF"});
expect(() => {ms932Encoder.encode("\u89E0")}).toThrowError({name:"TypeError",message:"EncodingError U+89E0"});
expect(() => {ms932Encoder.encode("\u89E1")}).toThrowError({name:"TypeError",message:"EncodingError U+89E1"});
expect(() => {ms932Encoder.encode("\u89E2")}).toThrowError({name:"TypeError",message:"EncodingError U+89E2"});
expect([...ms932Encoder.encode("解")].join(",")).toBe("137,240"); // U+89E3
expect(() => {ms932Encoder.encode("\u89E4")}).toThrowError({name:"TypeError",message:"EncodingError U+89E4"});
expect(() => {ms932Encoder.encode("\u89E5")}).toThrowError({name:"TypeError",message:"EncodingError U+89E5"});
expect([...ms932Encoder.encode("触觧")].join(",")).toBe("144,71,230,90"); // U+89E6
expect(() => {ms932Encoder.encode("\u89E8")}).toThrowError({name:"TypeError",message:"EncodingError U+89E8"});
expect(() => {ms932Encoder.encode("\u89E9")}).toThrowError({name:"TypeError",message:"EncodingError U+89E9"});
expect(() => {ms932Encoder.encode("\u89EA")}).toThrowError({name:"TypeError",message:"EncodingError U+89EA"});
expect(() => {ms932Encoder.encode("\u89EB")}).toThrowError({name:"TypeError",message:"EncodingError U+89EB"});
expect(() => {ms932Encoder.encode("\u89EC")}).toThrowError({name:"TypeError",message:"EncodingError U+89EC"});
expect(() => {ms932Encoder.encode("\u89ED")}).toThrowError({name:"TypeError",message:"EncodingError U+89ED"});
expect(() => {ms932Encoder.encode("\u89EE")}).toThrowError({name:"TypeError",message:"EncodingError U+89EE"});
expect(() => {ms932Encoder.encode("\u89EF")}).toThrowError({name:"TypeError",message:"EncodingError U+89EF"});
expect(() => {ms932Encoder.encode("\u89F0")}).toThrowError({name:"TypeError",message:"EncodingError U+89F0"});
expect(() => {ms932Encoder.encode("\u89F1")}).toThrowError({name:"TypeError",message:"EncodingError U+89F1"});
expect(() => {ms932Encoder.encode("\u89F2")}).toThrowError({name:"TypeError",message:"EncodingError U+89F2"});
expect(() => {ms932Encoder.encode("\u89F3")}).toThrowError({name:"TypeError",message:"EncodingError U+89F3"});
expect([...ms932Encoder.encode("觴")].join(",")).toBe("230,91"); // U+89F4
expect(() => {ms932Encoder.encode("\u89F5")}).toThrowError({name:"TypeError",message:"EncodingError U+89F5"});
expect(() => {ms932Encoder.encode("\u89F6")}).toThrowError({name:"TypeError",message:"EncodingError U+89F6"});
expect(() => {ms932Encoder.encode("\u89F7")}).toThrowError({name:"TypeError",message:"EncodingError U+89F7"});
expect([...ms932Encoder.encode("觸")].join(",")).toBe("230,92"); // U+89F8
expect(() => {ms932Encoder.encode("\u89F9")}).toThrowError({name:"TypeError",message:"EncodingError U+89F9"});
expect(() => {ms932Encoder.encode("\u89FA")}).toThrowError({name:"TypeError",message:"EncodingError U+89FA"});
expect(() => {ms932Encoder.encode("\u89FB")}).toThrowError({name:"TypeError",message:"EncodingError U+89FB"});
expect(() => {ms932Encoder.encode("\u89FC")}).toThrowError({name:"TypeError",message:"EncodingError U+89FC"});
expect(() => {ms932Encoder.encode("\u89FD")}).toThrowError({name:"TypeError",message:"EncodingError U+89FD"});
expect(() => {ms932Encoder.encode("\u89FE")}).toThrowError({name:"TypeError",message:"EncodingError U+89FE"});
expect(() => {ms932Encoder.encode("\u89FF")}).toThrowError({name:"TypeError",message:"EncodingError U+89FF"});
expect([...ms932Encoder.encode("言")].join(",")).toBe("140,190"); // U+8A00
expect(() => {ms932Encoder.encode("\u8A01")}).toThrowError({name:"TypeError",message:"EncodingError U+8A01"});
expect([...ms932Encoder.encode("訂訃")].join(",")).toBe("146,249,230,93"); // U+8A02
expect(() => {ms932Encoder.encode("\u8A04")}).toThrowError({name:"TypeError",message:"EncodingError U+8A04"});
expect(() => {ms932Encoder.encode("\u8A05")}).toThrowError({name:"TypeError",message:"EncodingError U+8A05"});
expect(() => {ms932Encoder.encode("\u8A06")}).toThrowError({name:"TypeError",message:"EncodingError U+8A06"});
expect(() => {ms932Encoder.encode("\u8A07")}).toThrowError({name:"TypeError",message:"EncodingError U+8A07"});
expect([...ms932Encoder.encode("計")].join(",")).toBe("140,118"); // U+8A08
expect(() => {ms932Encoder.encode("\u8A09")}).toThrowError({name:"TypeError",message:"EncodingError U+8A09"});
expect([...ms932Encoder.encode("訊")].join(",")).toBe("144,117"); // U+8A0A
expect(() => {ms932Encoder.encode("\u8A0B")}).toThrowError({name:"TypeError",message:"EncodingError U+8A0B"});
expect([...ms932Encoder.encode("訌")].join(",")).toBe("230,96"); // U+8A0C
expect(() => {ms932Encoder.encode("\u8A0D")}).toThrowError({name:"TypeError",message:"EncodingError U+8A0D"});
expect([...ms932Encoder.encode("討")].join(",")).toBe("147,162"); // U+8A0E
expect(() => {ms932Encoder.encode("\u8A0F")}).toThrowError({name:"TypeError",message:"EncodingError U+8A0F"});
expect([...ms932Encoder.encode("訐")].join(",")).toBe("230,95"); // U+8A10
expect(() => {ms932Encoder.encode("\u8A11")}).toThrowError({name:"TypeError",message:"EncodingError U+8A11"});
expect([...ms932Encoder.encode("訒訓")].join(",")).toBe("251,163,140,80"); // U+8A12
expect(() => {ms932Encoder.encode("\u8A14")}).toThrowError({name:"TypeError",message:"EncodingError U+8A14"});
expect(() => {ms932Encoder.encode("\u8A15")}).toThrowError({name:"TypeError",message:"EncodingError U+8A15"});
expect([...ms932Encoder.encode("訖託記")].join(",")).toBe("230,94,145,245,139,76"); // U+8A16
expect(() => {ms932Encoder.encode("\u8A19")}).toThrowError({name:"TypeError",message:"EncodingError U+8A19"});
expect(() => {ms932Encoder.encode("\u8A1A")}).toThrowError({name:"TypeError",message:"EncodingError U+8A1A"});
expect([...ms932Encoder.encode("訛")].join(",")).toBe("230,97"); // U+8A1B
expect(() => {ms932Encoder.encode("\u8A1C")}).toThrowError({name:"TypeError",message:"EncodingError U+8A1C"});
expect([...ms932Encoder.encode("訝")].join(",")).toBe("230,98"); // U+8A1D
expect(() => {ms932Encoder.encode("\u8A1E")}).toThrowError({name:"TypeError",message:"EncodingError U+8A1E"});
expect([...ms932Encoder.encode("訟")].join(",")).toBe("143,215"); // U+8A1F
expect(() => {ms932Encoder.encode("\u8A20")}).toThrowError({name:"TypeError",message:"EncodingError U+8A20"});
expect(() => {ms932Encoder.encode("\u8A21")}).toThrowError({name:"TypeError",message:"EncodingError U+8A21"});
expect(() => {ms932Encoder.encode("\u8A22")}).toThrowError({name:"TypeError",message:"EncodingError U+8A22"});
expect([...ms932Encoder.encode("訣")].join(",")).toBe("140,141"); // U+8A23
expect(() => {ms932Encoder.encode("\u8A24")}).toThrowError({name:"TypeError",message:"EncodingError U+8A24"});
expect([...ms932Encoder.encode("訥")].join(",")).toBe("230,99"); // U+8A25
expect(() => {ms932Encoder.encode("\u8A26")}).toThrowError({name:"TypeError",message:"EncodingError U+8A26"});
expect(() => {ms932Encoder.encode("\u8A27")}).toThrowError({name:"TypeError",message:"EncodingError U+8A27"});
expect(() => {ms932Encoder.encode("\u8A28")}).toThrowError({name:"TypeError",message:"EncodingError U+8A28"});
expect(() => {ms932Encoder.encode("\u8A29")}).toThrowError({name:"TypeError",message:"EncodingError U+8A29"});
expect([...ms932Encoder.encode("訪")].join(",")).toBe("150,75"); // U+8A2A
expect(() => {ms932Encoder.encode("\u8A2B")}).toThrowError({name:"TypeError",message:"EncodingError U+8A2B"});
expect(() => {ms932Encoder.encode("\u8A2C")}).toThrowError({name:"TypeError",message:"EncodingError U+8A2C"});
expect([...ms932Encoder.encode("設")].join(",")).toBe("144,221"); // U+8A2D
expect(() => {ms932Encoder.encode("\u8A2E")}).toThrowError({name:"TypeError",message:"EncodingError U+8A2E"});
expect(() => {ms932Encoder.encode("\u8A2F")}).toThrowError({name:"TypeError",message:"EncodingError U+8A2F"});
expect(() => {ms932Encoder.encode("\u8A30")}).toThrowError({name:"TypeError",message:"EncodingError U+8A30"});
expect([...ms932Encoder.encode("許")].join(",")).toBe("139,150"); // U+8A31
expect(() => {ms932Encoder.encode("\u8A32")}).toThrowError({name:"TypeError",message:"EncodingError U+8A32"});
expect([...ms932Encoder.encode("訳訴")].join(",")).toBe("150,243,145,105"); // U+8A33
expect(() => {ms932Encoder.encode("\u8A35")}).toThrowError({name:"TypeError",message:"EncodingError U+8A35"});
expect([...ms932Encoder.encode("訶訷")].join(",")).toBe("230,100,251,164"); // U+8A36
expect(() => {ms932Encoder.encode("\u8A38")}).toThrowError({name:"TypeError",message:"EncodingError U+8A38"});
expect(() => {ms932Encoder.encode("\u8A39")}).toThrowError({name:"TypeError",message:"EncodingError U+8A39"});
expect([...ms932Encoder.encode("診註証")].join(",")).toBe("144,102,146,144,143,216"); // U+8A3A
expect(() => {ms932Encoder.encode("\u8A3D")}).toThrowError({name:"TypeError",message:"EncodingError U+8A3D"});
expect(() => {ms932Encoder.encode("\u8A3E")}).toThrowError({name:"TypeError",message:"EncodingError U+8A3E"});
expect(() => {ms932Encoder.encode("\u8A3F")}).toThrowError({name:"TypeError",message:"EncodingError U+8A3F"});
expect(() => {ms932Encoder.encode("\u8A40")}).toThrowError({name:"TypeError",message:"EncodingError U+8A40"});
expect([...ms932Encoder.encode("詁")].join(",")).toBe("230,101"); // U+8A41
expect(() => {ms932Encoder.encode("\u8A42")}).toThrowError({name:"TypeError",message:"EncodingError U+8A42"});
expect(() => {ms932Encoder.encode("\u8A43")}).toThrowError({name:"TypeError",message:"EncodingError U+8A43"});
expect(() => {ms932Encoder.encode("\u8A44")}).toThrowError({name:"TypeError",message:"EncodingError U+8A44"});
expect(() => {ms932Encoder.encode("\u8A45")}).toThrowError({name:"TypeError",message:"EncodingError U+8A45"});
expect([...ms932Encoder.encode("詆")].join(",")).toBe("230,104"); // U+8A46
expect(() => {ms932Encoder.encode("\u8A47")}).toThrowError({name:"TypeError",message:"EncodingError U+8A47"});
expect([...ms932Encoder.encode("詈")].join(",")).toBe("230,105"); // U+8A48
expect(() => {ms932Encoder.encode("\u8A49")}).toThrowError({name:"TypeError",message:"EncodingError U+8A49"});
expect(() => {ms932Encoder.encode("\u8A4A")}).toThrowError({name:"TypeError",message:"EncodingError U+8A4A"});
expect(() => {ms932Encoder.encode("\u8A4B")}).toThrowError({name:"TypeError",message:"EncodingError U+8A4B"});
expect(() => {ms932Encoder.encode("\u8A4C")}).toThrowError({name:"TypeError",message:"EncodingError U+8A4C"});
expect(() => {ms932Encoder.encode("\u8A4D")}).toThrowError({name:"TypeError",message:"EncodingError U+8A4D"});
expect(() => {ms932Encoder.encode("\u8A4E")}).toThrowError({name:"TypeError",message:"EncodingError U+8A4E"});
expect(() => {ms932Encoder.encode("\u8A4F")}).toThrowError({name:"TypeError",message:"EncodingError U+8A4F"});
expect([...ms932Encoder.encode("詐詑詒")].join(",")).toBe("141,188,145,192,230,103"); // U+8A50
expect(() => {ms932Encoder.encode("\u8A53")}).toThrowError({name:"TypeError",message:"EncodingError U+8A53"});
expect([...ms932Encoder.encode("詔評")].join(",")).toBe("143,217,149,93"); // U+8A54
expect(() => {ms932Encoder.encode("\u8A56")}).toThrowError({name:"TypeError",message:"EncodingError U+8A56"});
expect(() => {ms932Encoder.encode("\u8A57")}).toThrowError({name:"TypeError",message:"EncodingError U+8A57"});
expect(() => {ms932Encoder.encode("\u8A58")}).toThrowError({name:"TypeError",message:"EncodingError U+8A58"});
expect(() => {ms932Encoder.encode("\u8A59")}).toThrowError({name:"TypeError",message:"EncodingError U+8A59"});
expect(() => {ms932Encoder.encode("\u8A5A")}).toThrowError({name:"TypeError",message:"EncodingError U+8A5A"});
expect([...ms932Encoder.encode("詛")].join(",")).toBe("230,102"); // U+8A5B
expect(() => {ms932Encoder.encode("\u8A5C")}).toThrowError({name:"TypeError",message:"EncodingError U+8A5C"});
expect(() => {ms932Encoder.encode("\u8A5D")}).toThrowError({name:"TypeError",message:"EncodingError U+8A5D"});
expect([...ms932Encoder.encode("詞")].join(",")).toBe("142,140"); // U+8A5E
expect(() => {ms932Encoder.encode("\u8A5F")}).toThrowError({name:"TypeError",message:"EncodingError U+8A5F"});
expect([...ms932Encoder.encode("詠")].join(",")).toBe("137,114"); // U+8A60
expect(() => {ms932Encoder.encode("\u8A61")}).toThrowError({name:"TypeError",message:"EncodingError U+8A61"});
expect([...ms932Encoder.encode("詢詣")].join(",")).toBe("230,109,140,119"); // U+8A62
expect(() => {ms932Encoder.encode("\u8A64")}).toThrowError({name:"TypeError",message:"EncodingError U+8A64"});
expect(() => {ms932Encoder.encode("\u8A65")}).toThrowError({name:"TypeError",message:"EncodingError U+8A65"});
expect([...ms932Encoder.encode("試")].join(",")).toBe("142,142"); // U+8A66
expect(() => {ms932Encoder.encode("\u8A67")}).toThrowError({name:"TypeError",message:"EncodingError U+8A67"});
expect(() => {ms932Encoder.encode("\u8A68")}).toThrowError({name:"TypeError",message:"EncodingError U+8A68"});
expect([...ms932Encoder.encode("詩")].join(",")).toBe("142,141"); // U+8A69
expect(() => {ms932Encoder.encode("\u8A6A")}).toThrowError({name:"TypeError",message:"EncodingError U+8A6A"});
expect([...ms932Encoder.encode("詫詬詭詮")].join(",")).toBe("152,108,230,108,230,107,145,70"); // U+8A6B
expect(() => {ms932Encoder.encode("\u8A6F")}).toThrowError({name:"TypeError",message:"EncodingError U+8A6F"});
expect([...ms932Encoder.encode("詰話該詳")].join(",")).toBe("139,108,152,98,138,89,143,218"); // U+8A70
expect(() => {ms932Encoder.encode("\u8A74")}).toThrowError({name:"TypeError",message:"EncodingError U+8A74"});
expect(() => {ms932Encoder.encode("\u8A75")}).toThrowError({name:"TypeError",message:"EncodingError U+8A75"});
expect(() => {ms932Encoder.encode("\u8A76")}).toThrowError({name:"TypeError",message:"EncodingError U+8A76"});
expect(() => {ms932Encoder.encode("\u8A77")}).toThrowError({name:"TypeError",message:"EncodingError U+8A77"});
expect(() => {ms932Encoder.encode("\u8A78")}).toThrowError({name:"TypeError",message:"EncodingError U+8A78"});
expect([...ms932Encoder.encode("詹")].join(",")).toBe("251,165"); // U+8A79
expect(() => {ms932Encoder.encode("\u8A7A")}).toThrowError({name:"TypeError",message:"EncodingError U+8A7A"});
expect(() => {ms932Encoder.encode("\u8A7B")}).toThrowError({name:"TypeError",message:"EncodingError U+8A7B"});
expect([...ms932Encoder.encode("詼")].join(",")).toBe("230,106"); // U+8A7C
expect(() => {ms932Encoder.encode("\u8A7D")}).toThrowError({name:"TypeError",message:"EncodingError U+8A7D"});
expect(() => {ms932Encoder.encode("\u8A7E")}).toThrowError({name:"TypeError",message:"EncodingError U+8A7E"});
expect(() => {ms932Encoder.encode("\u8A7F")}).toThrowError({name:"TypeError",message:"EncodingError U+8A7F"});
expect(() => {ms932Encoder.encode("\u8A80")}).toThrowError({name:"TypeError",message:"EncodingError U+8A80"});
expect(() => {ms932Encoder.encode("\u8A81")}).toThrowError({name:"TypeError",message:"EncodingError U+8A81"});
expect([...ms932Encoder.encode("誂")].join(",")).toBe("230,111"); // U+8A82
expect(() => {ms932Encoder.encode("\u8A83")}).toThrowError({name:"TypeError",message:"EncodingError U+8A83"});
expect([...ms932Encoder.encode("誄誅")].join(",")).toBe("230,112,230,110"); // U+8A84
expect(() => {ms932Encoder.encode("\u8A86")}).toThrowError({name:"TypeError",message:"EncodingError U+8A86"});
expect([...ms932Encoder.encode("誇")].join(",")).toBe("140,214"); // U+8A87
expect(() => {ms932Encoder.encode("\u8A88")}).toThrowError({name:"TypeError",message:"EncodingError U+8A88"});
expect([...ms932Encoder.encode("誉")].join(",")).toBe("151,95"); // U+8A89
expect(() => {ms932Encoder.encode("\u8A8A")}).toThrowError({name:"TypeError",message:"EncodingError U+8A8A"});
expect(() => {ms932Encoder.encode("\u8A8B")}).toThrowError({name:"TypeError",message:"EncodingError U+8A8B"});
expect([...ms932Encoder.encode("誌認")].join(",")).toBe("142,143,148,70"); // U+8A8C
expect(() => {ms932Encoder.encode("\u8A8E")}).toThrowError({name:"TypeError",message:"EncodingError U+8A8E"});
expect(() => {ms932Encoder.encode("\u8A8F")}).toThrowError({name:"TypeError",message:"EncodingError U+8A8F"});
expect(() => {ms932Encoder.encode("\u8A90")}).toThrowError({name:"TypeError",message:"EncodingError U+8A90"});
expect([...ms932Encoder.encode("誑")].join(",")).toBe("230,115"); // U+8A91
expect(() => {ms932Encoder.encode("\u8A92")}).toThrowError({name:"TypeError",message:"EncodingError U+8A92"});
expect([...ms932Encoder.encode("誓")].join(",")).toBe("144,190"); // U+8A93
expect(() => {ms932Encoder.encode("\u8A94")}).toThrowError({name:"TypeError",message:"EncodingError U+8A94"});
expect([...ms932Encoder.encode("誕")].join(",")).toBe("146,97"); // U+8A95
expect(() => {ms932Encoder.encode("\u8A96")}).toThrowError({name:"TypeError",message:"EncodingError U+8A96"});
expect(() => {ms932Encoder.encode("\u8A97")}).toThrowError({name:"TypeError",message:"EncodingError U+8A97"});
expect([...ms932Encoder.encode("誘")].join(",")).toBe("151,85"); // U+8A98
expect(() => {ms932Encoder.encode("\u8A99")}).toThrowError({name:"TypeError",message:"EncodingError U+8A99"});
expect([...ms932Encoder.encode("誚")].join(",")).toBe("230,118"); // U+8A9A
expect(() => {ms932Encoder.encode("\u8A9B")}).toThrowError({name:"TypeError",message:"EncodingError U+8A9B"});
expect(() => {ms932Encoder.encode("\u8A9C")}).toThrowError({name:"TypeError",message:"EncodingError U+8A9C"});
expect(() => {ms932Encoder.encode("\u8A9D")}).toThrowError({name:"TypeError",message:"EncodingError U+8A9D"});
expect([...ms932Encoder.encode("語")].join(",")).toBe("140,234"); // U+8A9E
expect(() => {ms932Encoder.encode("\u8A9F")}).toThrowError({name:"TypeError",message:"EncodingError U+8A9F"});
expect([...ms932Encoder.encode("誠誡")].join(",")).toBe("144,189,230,114"); // U+8AA0
expect(() => {ms932Encoder.encode("\u8AA2")}).toThrowError({name:"TypeError",message:"EncodingError U+8AA2"});
expect([...ms932Encoder.encode("誣誤誥誦誧誨")].join(",")).toBe("230,119,140,235,230,116,230,117,251,166,230,113"); // U+8AA3
expect(() => {ms932Encoder.encode("\u8AA9")}).toThrowError({name:"TypeError",message:"EncodingError U+8AA9"});
expect(() => {ms932Encoder.encode("\u8AAA")}).toThrowError({name:"TypeError",message:"EncodingError U+8AAA"});
expect(() => {ms932Encoder.encode("\u8AAB")}).toThrowError({name:"TypeError",message:"EncodingError U+8AAB"});
expect([...ms932Encoder.encode("説読")].join(",")).toBe("144,224,147,199"); // U+8AAC
expect(() => {ms932Encoder.encode("\u8AAE")}).toThrowError({name:"TypeError",message:"EncodingError U+8AAE"});
expect(() => {ms932Encoder.encode("\u8AAF")}).toThrowError({name:"TypeError",message:"EncodingError U+8AAF"});
expect([...ms932Encoder.encode("誰")].join(",")).toBe("146,78"); // U+8AB0
expect(() => {ms932Encoder.encode("\u8AB1")}).toThrowError({name:"TypeError",message:"EncodingError U+8AB1"});
expect([...ms932Encoder.encode("課")].join(",")).toBe("137,219"); // U+8AB2
expect(() => {ms932Encoder.encode("\u8AB3")}).toThrowError({name:"TypeError",message:"EncodingError U+8AB3"});
expect(() => {ms932Encoder.encode("\u8AB4")}).toThrowError({name:"TypeError",message:"EncodingError U+8AB4"});
expect(() => {ms932Encoder.encode("\u8AB5")}).toThrowError({name:"TypeError",message:"EncodingError U+8AB5"});
expect(() => {ms932Encoder.encode("\u8AB6")}).toThrowError({name:"TypeError",message:"EncodingError U+8AB6"});
expect(() => {ms932Encoder.encode("\u8AB7")}).toThrowError({name:"TypeError",message:"EncodingError U+8AB7"});
expect(() => {ms932Encoder.encode("\u8AB8")}).toThrowError({name:"TypeError",message:"EncodingError U+8AB8"});
expect([...ms932Encoder.encode("誹")].join(",")).toBe("148,238"); // U+8AB9
expect(() => {ms932Encoder.encode("\u8ABA")}).toThrowError({name:"TypeError",message:"EncodingError U+8ABA"});
expect(() => {ms932Encoder.encode("\u8ABB")}).toThrowError({name:"TypeError",message:"EncodingError U+8ABB"});
expect([...ms932Encoder.encode("誼")].join(",")).toBe("139,98"); // U+8ABC
expect(() => {ms932Encoder.encode("\u8ABD")}).toThrowError({name:"TypeError",message:"EncodingError U+8ABD"});
expect([...ms932Encoder.encode("誾調")].join(",")).toBe("251,167,146,178"); // U+8ABE
expect(() => {ms932Encoder.encode("\u8AC0")}).toThrowError({name:"TypeError",message:"EncodingError U+8AC0"});
expect(() => {ms932Encoder.encode("\u8AC1")}).toThrowError({name:"TypeError",message:"EncodingError U+8AC1"});
expect([...ms932Encoder.encode("諂")].join(",")).toBe("230,122"); // U+8AC2
expect(() => {ms932Encoder.encode("\u8AC3")}).toThrowError({name:"TypeError",message:"EncodingError U+8AC3"});
expect([...ms932Encoder.encode("諄")].join(",")).toBe("230,120"); // U+8AC4
expect(() => {ms932Encoder.encode("\u8AC5")}).toThrowError({name:"TypeError",message:"EncodingError U+8AC5"});
expect(() => {ms932Encoder.encode("\u8AC6")}).toThrowError({name:"TypeError",message:"EncodingError U+8AC6"});
expect([...ms932Encoder.encode("談")].join(",")).toBe("146,107"); // U+8AC7
expect(() => {ms932Encoder.encode("\u8AC8")}).toThrowError({name:"TypeError",message:"EncodingError U+8AC8"});
expect(() => {ms932Encoder.encode("\u8AC9")}).toThrowError({name:"TypeError",message:"EncodingError U+8AC9"});
expect(() => {ms932Encoder.encode("\u8ACA")}).toThrowError({name:"TypeError",message:"EncodingError U+8ACA"});
expect([...ms932Encoder.encode("請諌諍")].join(",")).toBe("144,191,138,208,230,121"); // U+8ACB
expect(() => {ms932Encoder.encode("\u8ACE")}).toThrowError({name:"TypeError",message:"EncodingError U+8ACE"});
expect([...ms932Encoder.encode("諏")].join(",")).toBe("144,122"); // U+8ACF
expect(() => {ms932Encoder.encode("\u8AD0")}).toThrowError({name:"TypeError",message:"EncodingError U+8AD0"});
expect(() => {ms932Encoder.encode("\u8AD1")}).toThrowError({name:"TypeError",message:"EncodingError U+8AD1"});
expect([...ms932Encoder.encode("諒")].join(",")).toBe("151,200"); // U+8AD2
expect(() => {ms932Encoder.encode("\u8AD3")}).toThrowError({name:"TypeError",message:"EncodingError U+8AD3"});
expect(() => {ms932Encoder.encode("\u8AD4")}).toThrowError({name:"TypeError",message:"EncodingError U+8AD4"});
expect(() => {ms932Encoder.encode("\u8AD5")}).toThrowError({name:"TypeError",message:"EncodingError U+8AD5"});
expect([...ms932Encoder.encode("論")].join(",")).toBe("152,95"); // U+8AD6
expect(() => {ms932Encoder.encode("\u8AD7")}).toThrowError({name:"TypeError",message:"EncodingError U+8AD7"});
expect(() => {ms932Encoder.encode("\u8AD8")}).toThrowError({name:"TypeError",message:"EncodingError U+8AD8"});
expect(() => {ms932Encoder.encode("\u8AD9")}).toThrowError({name:"TypeError",message:"EncodingError U+8AD9"});
expect([...ms932Encoder.encode("諚諛諜")].join(",")).toBe("230,123,230,135,146,179"); // U+8ADA
expect(() => {ms932Encoder.encode("\u8ADD")}).toThrowError({name:"TypeError",message:"EncodingError U+8ADD"});
expect([...ms932Encoder.encode("諞諟諠諡諢")].join(",")).toBe("230,134,251,168,230,131,230,139,230,132"); // U+8ADE
expect(() => {ms932Encoder.encode("\u8AE3")}).toThrowError({name:"TypeError",message:"EncodingError U+8AE3"});
expect([...ms932Encoder.encode("諤")].join(",")).toBe("230,128"); // U+8AE4
expect(() => {ms932Encoder.encode("\u8AE5")}).toThrowError({name:"TypeError",message:"EncodingError U+8AE5"});
expect([...ms932Encoder.encode("諦諧")].join(",")).toBe("146,250,230,126"); // U+8AE6
expect(() => {ms932Encoder.encode("\u8AE8")}).toThrowError({name:"TypeError",message:"EncodingError U+8AE8"});
expect(() => {ms932Encoder.encode("\u8AE9")}).toThrowError({name:"TypeError",message:"EncodingError U+8AE9"});
expect(() => {ms932Encoder.encode("\u8AEA")}).toThrowError({name:"TypeError",message:"EncodingError U+8AEA"});
expect([...ms932Encoder.encode("諫")].join(",")).toBe("230,124"); // U+8AEB
expect(() => {ms932Encoder.encode("\u8AEC")}).toThrowError({name:"TypeError",message:"EncodingError U+8AEC"});
expect([...ms932Encoder.encode("諭諮")].join(",")).toBe("151,64,142,144"); // U+8AED
expect(() => {ms932Encoder.encode("\u8AEF")}).toThrowError({name:"TypeError",message:"EncodingError U+8AEF"});
expect(() => {ms932Encoder.encode("\u8AF0")}).toThrowError({name:"TypeError",message:"EncodingError U+8AF0"});
expect([...ms932Encoder.encode("諱")].join(",")).toBe("230,129"); // U+8AF1
expect(() => {ms932Encoder.encode("\u8AF2")}).toThrowError({name:"TypeError",message:"EncodingError U+8AF2"});
expect([...ms932Encoder.encode("諳")].join(",")).toBe("230,125"); // U+8AF3
expect(() => {ms932Encoder.encode("\u8AF4")}).toThrowError({name:"TypeError",message:"EncodingError U+8AF4"});
expect(() => {ms932Encoder.encode("\u8AF5")}).toThrowError({name:"TypeError",message:"EncodingError U+8AF5"});
expect([...ms932Encoder.encode("諶諷諸")].join(",")).toBe("251,170,230,133,143,148"); // U+8AF6
expect(() => {ms932Encoder.encode("\u8AF9")}).toThrowError({name:"TypeError",message:"EncodingError U+8AF9"});
expect([...ms932Encoder.encode("諺")].join(",")).toBe("140,191"); // U+8AFA
expect(() => {ms932Encoder.encode("\u8AFB")}).toThrowError({name:"TypeError",message:"EncodingError U+8AFB"});
expect(() => {ms932Encoder.encode("\u8AFC")}).toThrowError({name:"TypeError",message:"EncodingError U+8AFC"});
expect(() => {ms932Encoder.encode("\u8AFD")}).toThrowError({name:"TypeError",message:"EncodingError U+8AFD"});
expect([...ms932Encoder.encode("諾")].join(",")).toBe("145,248"); // U+8AFE
expect(() => {ms932Encoder.encode("\u8AFF")}).toThrowError({name:"TypeError",message:"EncodingError U+8AFF"});
expect([...ms932Encoder.encode("謀謁謂")].join(",")).toBe("150,100,137,121,136,224"); // U+8B00
expect(() => {ms932Encoder.encode("\u8B03")}).toThrowError({name:"TypeError",message:"EncodingError U+8B03"});
expect([...ms932Encoder.encode("謄")].join(",")).toBe("147,163"); // U+8B04
expect(() => {ms932Encoder.encode("\u8B05")}).toThrowError({name:"TypeError",message:"EncodingError U+8B05"});
expect(() => {ms932Encoder.encode("\u8B06")}).toThrowError({name:"TypeError",message:"EncodingError U+8B06"});
expect([...ms932Encoder.encode("謇")].join(",")).toBe("230,137"); // U+8B07
expect(() => {ms932Encoder.encode("\u8B08")}).toThrowError({name:"TypeError",message:"EncodingError U+8B08"});
expect(() => {ms932Encoder.encode("\u8B09")}).toThrowError({name:"TypeError",message:"EncodingError U+8B09"});
expect(() => {ms932Encoder.encode("\u8B0A")}).toThrowError({name:"TypeError",message:"EncodingError U+8B0A"});
expect(() => {ms932Encoder.encode("\u8B0B")}).toThrowError({name:"TypeError",message:"EncodingError U+8B0B"});
expect([...ms932Encoder.encode("謌")].join(",")).toBe("230,136"); // U+8B0C
expect(() => {ms932Encoder.encode("\u8B0D")}).toThrowError({name:"TypeError",message:"EncodingError U+8B0D"});
expect([...ms932Encoder.encode("謎")].join(",")).toBe("147,228"); // U+8B0E
expect(() => {ms932Encoder.encode("\u8B0F")}).toThrowError({name:"TypeError",message:"EncodingError U+8B0F"});
expect([...ms932Encoder.encode("謐")].join(",")).toBe("230,141"); // U+8B10
expect(() => {ms932Encoder.encode("\u8B11")}).toThrowError({name:"TypeError",message:"EncodingError U+8B11"});
expect(() => {ms932Encoder.encode("\u8B12")}).toThrowError({name:"TypeError",message:"EncodingError U+8B12"});
expect(() => {ms932Encoder.encode("\u8B13")}).toThrowError({name:"TypeError",message:"EncodingError U+8B13"});
expect([...ms932Encoder.encode("謔")].join(",")).toBe("230,130"); // U+8B14
expect(() => {ms932Encoder.encode("\u8B15")}).toThrowError({name:"TypeError",message:"EncodingError U+8B15"});
expect([...ms932Encoder.encode("謖謗")].join(",")).toBe("230,140,230,142"); // U+8B16
expect(() => {ms932Encoder.encode("\u8B18")}).toThrowError({name:"TypeError",message:"EncodingError U+8B18"});
expect([...ms932Encoder.encode("謙謚講")].join(",")).toBe("140,170,230,138,141,117"); // U+8B19
expect(() => {ms932Encoder.encode("\u8B1C")}).toThrowError({name:"TypeError",message:"EncodingError U+8B1C"});
expect([...ms932Encoder.encode("謝")].join(",")).toBe("142,211"); // U+8B1D
expect(() => {ms932Encoder.encode("\u8B1E")}).toThrowError({name:"TypeError",message:"EncodingError U+8B1E"});
expect(() => {ms932Encoder.encode("\u8B1F")}).toThrowError({name:"TypeError",message:"EncodingError U+8B1F"});
expect([...ms932Encoder.encode("謠謡")].join(",")).toBe("230,143,151,119"); // U+8B20
expect(() => {ms932Encoder.encode("\u8B22")}).toThrowError({name:"TypeError",message:"EncodingError U+8B22"});
expect(() => {ms932Encoder.encode("\u8B23")}).toThrowError({name:"TypeError",message:"EncodingError U+8B23"});
expect(() => {ms932Encoder.encode("\u8B24")}).toThrowError({name:"TypeError",message:"EncodingError U+8B24"});
expect(() => {ms932Encoder.encode("\u8B25")}).toThrowError({name:"TypeError",message:"EncodingError U+8B25"});
expect([...ms932Encoder.encode("謦")].join(",")).toBe("230,146"); // U+8B26
expect(() => {ms932Encoder.encode("\u8B27")}).toThrowError({name:"TypeError",message:"EncodingError U+8B27"});
expect([...ms932Encoder.encode("謨")].join(",")).toBe("230,149"); // U+8B28
expect(() => {ms932Encoder.encode("\u8B29")}).toThrowError({name:"TypeError",message:"EncodingError U+8B29"});
expect(() => {ms932Encoder.encode("\u8B2A")}).toThrowError({name:"TypeError",message:"EncodingError U+8B2A"});
expect([...ms932Encoder.encode("謫謬")].join(",")).toBe("230,147,149,84"); // U+8B2B
expect(() => {ms932Encoder.encode("\u8B2D")}).toThrowError({name:"TypeError",message:"EncodingError U+8B2D"});
expect(() => {ms932Encoder.encode("\u8B2E")}).toThrowError({name:"TypeError",message:"EncodingError U+8B2E"});
expect(() => {ms932Encoder.encode("\u8B2F")}).toThrowError({name:"TypeError",message:"EncodingError U+8B2F"});
expect(() => {ms932Encoder.encode("\u8B30")}).toThrowError({name:"TypeError",message:"EncodingError U+8B30"});
expect(() => {ms932Encoder.encode("\u8B31")}).toThrowError({name:"TypeError",message:"EncodingError U+8B31"});
expect(() => {ms932Encoder.encode("\u8B32")}).toThrowError({name:"TypeError",message:"EncodingError U+8B32"});
expect([...ms932Encoder.encode("謳")].join(",")).toBe("230,144"); // U+8B33
expect(() => {ms932Encoder.encode("\u8B34")}).toThrowError({name:"TypeError",message:"EncodingError U+8B34"});
expect(() => {ms932Encoder.encode("\u8B35")}).toThrowError({name:"TypeError",message:"EncodingError U+8B35"});
expect(() => {ms932Encoder.encode("\u8B36")}).toThrowError({name:"TypeError",message:"EncodingError U+8B36"});
expect(() => {ms932Encoder.encode("\u8B37")}).toThrowError({name:"TypeError",message:"EncodingError U+8B37"});
expect(() => {ms932Encoder.encode("\u8B38")}).toThrowError({name:"TypeError",message:"EncodingError U+8B38"});
expect([...ms932Encoder.encode("謹")].join(",")).toBe("139,222"); // U+8B39
expect(() => {ms932Encoder.encode("\u8B3A")}).toThrowError({name:"TypeError",message:"EncodingError U+8B3A"});
expect(() => {ms932Encoder.encode("\u8B3B")}).toThrowError({name:"TypeError",message:"EncodingError U+8B3B"});
expect(() => {ms932Encoder.encode("\u8B3C")}).toThrowError({name:"TypeError",message:"EncodingError U+8B3C"});
expect(() => {ms932Encoder.encode("\u8B3D")}).toThrowError({name:"TypeError",message:"EncodingError U+8B3D"});
expect([...ms932Encoder.encode("謾")].join(",")).toBe("230,148"); // U+8B3E
expect(() => {ms932Encoder.encode("\u8B3F")}).toThrowError({name:"TypeError",message:"EncodingError U+8B3F"});
expect(() => {ms932Encoder.encode("\u8B40")}).toThrowError({name:"TypeError",message:"EncodingError U+8B40"});
expect([...ms932Encoder.encode("譁")].join(",")).toBe("230,150"); // U+8B41
expect(() => {ms932Encoder.encode("\u8B42")}).toThrowError({name:"TypeError",message:"EncodingError U+8B42"});
expect(() => {ms932Encoder.encode("\u8B43")}).toThrowError({name:"TypeError",message:"EncodingError U+8B43"});
expect(() => {ms932Encoder.encode("\u8B44")}).toThrowError({name:"TypeError",message:"EncodingError U+8B44"});
expect(() => {ms932Encoder.encode("\u8B45")}).toThrowError({name:"TypeError",message:"EncodingError U+8B45"});
expect(() => {ms932Encoder.encode("\u8B46")}).toThrowError({name:"TypeError",message:"EncodingError U+8B46"});
expect(() => {ms932Encoder.encode("\u8B47")}).toThrowError({name:"TypeError",message:"EncodingError U+8B47"});
expect(() => {ms932Encoder.encode("\u8B48")}).toThrowError({name:"TypeError",message:"EncodingError U+8B48"});
expect([...ms932Encoder.encode("證")].join(",")).toBe("230,154"); // U+8B49
expect(() => {ms932Encoder.encode("\u8B4A")}).toThrowError({name:"TypeError",message:"EncodingError U+8B4A"});
expect(() => {ms932Encoder.encode("\u8B4B")}).toThrowError({name:"TypeError",message:"EncodingError U+8B4B"});
expect([...ms932Encoder.encode("譌")].join(",")).toBe("230,151"); // U+8B4C
expect(() => {ms932Encoder.encode("\u8B4D")}).toThrowError({name:"TypeError",message:"EncodingError U+8B4D"});
expect([...ms932Encoder.encode("譎譏")].join(",")).toBe("230,153,230,152"); // U+8B4E
expect(() => {ms932Encoder.encode("\u8B50")}).toThrowError({name:"TypeError",message:"EncodingError U+8B50"});
expect(() => {ms932Encoder.encode("\u8B51")}).toThrowError({name:"TypeError",message:"EncodingError U+8B51"});
expect(() => {ms932Encoder.encode("\u8B52")}).toThrowError({name:"TypeError",message:"EncodingError U+8B52"});
expect([...ms932Encoder.encode("譓")].join(",")).toBe("251,171"); // U+8B53
expect(() => {ms932Encoder.encode("\u8B54")}).toThrowError({name:"TypeError",message:"EncodingError U+8B54"});
expect(() => {ms932Encoder.encode("\u8B55")}).toThrowError({name:"TypeError",message:"EncodingError U+8B55"});
expect([...ms932Encoder.encode("譖")].join(",")).toBe("230,155"); // U+8B56
expect(() => {ms932Encoder.encode("\u8B57")}).toThrowError({name:"TypeError",message:"EncodingError U+8B57"});
expect([...ms932Encoder.encode("識")].join(",")).toBe("142,175"); // U+8B58
expect(() => {ms932Encoder.encode("\u8B59")}).toThrowError({name:"TypeError",message:"EncodingError U+8B59"});
expect([...ms932Encoder.encode("譚譛譜")].join(",")).toBe("230,157,230,156,149,136"); // U+8B5A
expect(() => {ms932Encoder.encode("\u8B5D")}).toThrowError({name:"TypeError",message:"EncodingError U+8B5D"});
expect(() => {ms932Encoder.encode("\u8B5E")}).toThrowError({name:"TypeError",message:"EncodingError U+8B5E"});
expect([...ms932Encoder.encode("譟")].join(",")).toBe("230,159"); // U+8B5F
expect(() => {ms932Encoder.encode("\u8B60")}).toThrowError({name:"TypeError",message:"EncodingError U+8B60"});
expect(() => {ms932Encoder.encode("\u8B61")}).toThrowError({name:"TypeError",message:"EncodingError U+8B61"});
expect(() => {ms932Encoder.encode("\u8B62")}).toThrowError({name:"TypeError",message:"EncodingError U+8B62"});
expect(() => {ms932Encoder.encode("\u8B63")}).toThrowError({name:"TypeError",message:"EncodingError U+8B63"});
expect(() => {ms932Encoder.encode("\u8B64")}).toThrowError({name:"TypeError",message:"EncodingError U+8B64"});
expect(() => {ms932Encoder.encode("\u8B65")}).toThrowError({name:"TypeError",message:"EncodingError U+8B65"});
expect([...ms932Encoder.encode("警")].join(",")).toBe("140,120"); // U+8B66
expect(() => {ms932Encoder.encode("\u8B67")}).toThrowError({name:"TypeError",message:"EncodingError U+8B67"});
expect(() => {ms932Encoder.encode("\u8B68")}).toThrowError({name:"TypeError",message:"EncodingError U+8B68"});
expect(() => {ms932Encoder.encode("\u8B69")}).toThrowError({name:"TypeError",message:"EncodingError U+8B69"});
expect(() => {ms932Encoder.encode("\u8B6A")}).toThrowError({name:"TypeError",message:"EncodingError U+8B6A"});
expect([...ms932Encoder.encode("譫譬")].join(",")).toBe("230,158,230,160"); // U+8B6B
expect(() => {ms932Encoder.encode("\u8B6D")}).toThrowError({name:"TypeError",message:"EncodingError U+8B6D"});
expect(() => {ms932Encoder.encode("\u8B6E")}).toThrowError({name:"TypeError",message:"EncodingError U+8B6E"});
expect([...ms932Encoder.encode("譯議譱譲")].join(",")).toBe("230,161,139,99,227,191,143,247"); // U+8B6F
expect(() => {ms932Encoder.encode("\u8B73")}).toThrowError({name:"TypeError",message:"EncodingError U+8B73"});
expect([...ms932Encoder.encode("譴")].join(",")).toBe("230,162"); // U+8B74
expect(() => {ms932Encoder.encode("\u8B75")}).toThrowError({name:"TypeError",message:"EncodingError U+8B75"});
expect(() => {ms932Encoder.encode("\u8B76")}).toThrowError({name:"TypeError",message:"EncodingError U+8B76"});
expect([...ms932Encoder.encode("護")].join(",")).toBe("140,236"); // U+8B77
expect(() => {ms932Encoder.encode("\u8B78")}).toThrowError({name:"TypeError",message:"EncodingError U+8B78"});
expect(() => {ms932Encoder.encode("\u8B79")}).toThrowError({name:"TypeError",message:"EncodingError U+8B79"});
expect(() => {ms932Encoder.encode("\u8B7A")}).toThrowError({name:"TypeError",message:"EncodingError U+8B7A"});
expect(() => {ms932Encoder.encode("\u8B7B")}).toThrowError({name:"TypeError",message:"EncodingError U+8B7B"});
expect(() => {ms932Encoder.encode("\u8B7C")}).toThrowError({name:"TypeError",message:"EncodingError U+8B7C"});
expect([...ms932Encoder.encode("譽")].join(",")).toBe("230,163"); // U+8B7D
expect(() => {ms932Encoder.encode("\u8B7E")}).toThrowError({name:"TypeError",message:"EncodingError U+8B7E"});
expect([...ms932Encoder.encode("譿讀")].join(",")).toBe("251,172,230,164"); // U+8B7F
expect(() => {ms932Encoder.encode("\u8B81")}).toThrowError({name:"TypeError",message:"EncodingError U+8B81"});
expect(() => {ms932Encoder.encode("\u8B82")}).toThrowError({name:"TypeError",message:"EncodingError U+8B82"});
expect([...ms932Encoder.encode("讃")].join(",")).toBe("142,93"); // U+8B83
expect(() => {ms932Encoder.encode("\u8B84")}).toThrowError({name:"TypeError",message:"EncodingError U+8B84"});
expect(() => {ms932Encoder.encode("\u8B85")}).toThrowError({name:"TypeError",message:"EncodingError U+8B85"});
expect(() => {ms932Encoder.encode("\u8B86")}).toThrowError({name:"TypeError",message:"EncodingError U+8B86"});
expect(() => {ms932Encoder.encode("\u8B87")}).toThrowError({name:"TypeError",message:"EncodingError U+8B87"});
expect(() => {ms932Encoder.encode("\u8B88")}).toThrowError({name:"TypeError",message:"EncodingError U+8B88"});
expect(() => {ms932Encoder.encode("\u8B89")}).toThrowError({name:"TypeError",message:"EncodingError U+8B89"});
expect([...ms932Encoder.encode("變")].join(",")).toBe("157,204"); // U+8B8A
expect(() => {ms932Encoder.encode("\u8B8B")}).toThrowError({name:"TypeError",message:"EncodingError U+8B8B"});
expect([...ms932Encoder.encode("讌")].join(",")).toBe("230,165"); // U+8B8C
expect(() => {ms932Encoder.encode("\u8B8D")}).toThrowError({name:"TypeError",message:"EncodingError U+8B8D"});
expect([...ms932Encoder.encode("讎")].join(",")).toBe("230,166"); // U+8B8E
expect(() => {ms932Encoder.encode("\u8B8F")}).toThrowError({name:"TypeError",message:"EncodingError U+8B8F"});
expect([...ms932Encoder.encode("讐")].join(",")).toBe("143,81"); // U+8B90
expect(() => {ms932Encoder.encode("\u8B91")}).toThrowError({name:"TypeError",message:"EncodingError U+8B91"});
expect([...ms932Encoder.encode("讒讓")].join(",")).toBe("230,167,230,168"); // U+8B92
expect(() => {ms932Encoder.encode("\u8B94")}).toThrowError({name:"TypeError",message:"EncodingError U+8B94"});
expect(() => {ms932Encoder.encode("\u8B95")}).toThrowError({name:"TypeError",message:"EncodingError U+8B95"});
expect([...ms932Encoder.encode("讖")].join(",")).toBe("230,169"); // U+8B96
expect(() => {ms932Encoder.encode("\u8B97")}).toThrowError({name:"TypeError",message:"EncodingError U+8B97"});
expect(() => {ms932Encoder.encode("\u8B98")}).toThrowError({name:"TypeError",message:"EncodingError U+8B98"});
expect([...ms932Encoder.encode("讙讚")].join(",")).toBe("230,170,230,171"); // U+8B99
expect(() => {ms932Encoder.encode("\u8B9B")}).toThrowError({name:"TypeError",message:"EncodingError U+8B9B"});
expect(() => {ms932Encoder.encode("\u8B9C")}).toThrowError({name:"TypeError",message:"EncodingError U+8B9C"});
expect(() => {ms932Encoder.encode("\u8B9D")}).toThrowError({name:"TypeError",message:"EncodingError U+8B9D"});
expect(() => {ms932Encoder.encode("\u8B9E")}).toThrowError({name:"TypeError",message:"EncodingError U+8B9E"});
expect(() => {ms932Encoder.encode("\u8B9F")}).toThrowError({name:"TypeError",message:"EncodingError U+8B9F"});
expect(() => {ms932Encoder.encode("\u8BA0")}).toThrowError({name:"TypeError",message:"EncodingError U+8BA0"});
expect(() => {ms932Encoder.encode("\u8BA1")}).toThrowError({name:"TypeError",message:"EncodingError U+8BA1"});
expect(() => {ms932Encoder.encode("\u8BA2")}).toThrowError({name:"TypeError",message:"EncodingError U+8BA2"});
expect(() => {ms932Encoder.encode("\u8BA3")}).toThrowError({name:"TypeError",message:"EncodingError U+8BA3"});
expect(() => {ms932Encoder.encode("\u8BA4")}).toThrowError({name:"TypeError",message:"EncodingError U+8BA4"});
expect(() => {ms932Encoder.encode("\u8BA5")}).toThrowError({name:"TypeError",message:"EncodingError U+8BA5"});
expect(() => {ms932Encoder.encode("\u8BA6")}).toThrowError({name:"TypeError",message:"EncodingError U+8BA6"});
expect(() => {ms932Encoder.encode("\u8BA7")}).toThrowError({name:"TypeError",message:"EncodingError U+8BA7"});
expect(() => {ms932Encoder.encode("\u8BA8")}).toThrowError({name:"TypeError",message:"EncodingError U+8BA8"});
expect(() => {ms932Encoder.encode("\u8BA9")}).toThrowError({name:"TypeError",message:"EncodingError U+8BA9"});
expect(() => {ms932Encoder.encode("\u8BAA")}).toThrowError({name:"TypeError",message:"EncodingError U+8BAA"});
expect(() => {ms932Encoder.encode("\u8BAB")}).toThrowError({name:"TypeError",message:"EncodingError U+8BAB"});
expect(() => {ms932Encoder.encode("\u8BAC")}).toThrowError({name:"TypeError",message:"EncodingError U+8BAC"});
expect(() => {ms932Encoder.encode("\u8BAD")}).toThrowError({name:"TypeError",message:"EncodingError U+8BAD"});
expect(() => {ms932Encoder.encode("\u8BAE")}).toThrowError({name:"TypeError",message:"EncodingError U+8BAE"});
expect(() => {ms932Encoder.encode("\u8BAF")}).toThrowError({name:"TypeError",message:"EncodingError U+8BAF"});
expect(() => {ms932Encoder.encode("\u8BB0")}).toThrowError({name:"TypeError",message:"EncodingError U+8BB0"});
expect(() => {ms932Encoder.encode("\u8BB1")}).toThrowError({name:"TypeError",message:"EncodingError U+8BB1"});
expect(() => {ms932Encoder.encode("\u8BB2")}).toThrowError({name:"TypeError",message:"EncodingError U+8BB2"});
expect(() => {ms932Encoder.encode("\u8BB3")}).toThrowError({name:"TypeError",message:"EncodingError U+8BB3"});
expect(() => {ms932Encoder.encode("\u8BB4")}).toThrowError({name:"TypeError",message:"EncodingError U+8BB4"});
expect(() => {ms932Encoder.encode("\u8BB5")}).toThrowError({name:"TypeError",message:"EncodingError U+8BB5"});
expect(() => {ms932Encoder.encode("\u8BB6")}).toThrowError({name:"TypeError",message:"EncodingError U+8BB6"});
expect(() => {ms932Encoder.encode("\u8BB7")}).toThrowError({name:"TypeError",message:"EncodingError U+8BB7"});
expect(() => {ms932Encoder.encode("\u8BB8")}).toThrowError({name:"TypeError",message:"EncodingError U+8BB8"});
expect(() => {ms932Encoder.encode("\u8BB9")}).toThrowError({name:"TypeError",message:"EncodingError U+8BB9"});
expect(() => {ms932Encoder.encode("\u8BBA")}).toThrowError({name:"TypeError",message:"EncodingError U+8BBA"});
expect(() => {ms932Encoder.encode("\u8BBB")}).toThrowError({name:"TypeError",message:"EncodingError U+8BBB"});
expect(() => {ms932Encoder.encode("\u8BBC")}).toThrowError({name:"TypeError",message:"EncodingError U+8BBC"});
expect(() => {ms932Encoder.encode("\u8BBD")}).toThrowError({name:"TypeError",message:"EncodingError U+8BBD"});
expect(() => {ms932Encoder.encode("\u8BBE")}).toThrowError({name:"TypeError",message:"EncodingError U+8BBE"});
expect(() => {ms932Encoder.encode("\u8BBF")}).toThrowError({name:"TypeError",message:"EncodingError U+8BBF"});
expect(() => {ms932Encoder.encode("\u8BC0")}).toThrowError({name:"TypeError",message:"EncodingError U+8BC0"});
expect(() => {ms932Encoder.encode("\u8BC1")}).toThrowError({name:"TypeError",message:"EncodingError U+8BC1"});
expect(() => {ms932Encoder.encode("\u8BC2")}).toThrowError({name:"TypeError",message:"EncodingError U+8BC2"});
expect(() => {ms932Encoder.encode("\u8BC3")}).toThrowError({name:"TypeError",message:"EncodingError U+8BC3"});
expect(() => {ms932Encoder.encode("\u8BC4")}).toThrowError({name:"TypeError",message:"EncodingError U+8BC4"});
expect(() => {ms932Encoder.encode("\u8BC5")}).toThrowError({name:"TypeError",message:"EncodingError U+8BC5"});
expect(() => {ms932Encoder.encode("\u8BC6")}).toThrowError({name:"TypeError",message:"EncodingError U+8BC6"});
expect(() => {ms932Encoder.encode("\u8BC7")}).toThrowError({name:"TypeError",message:"EncodingError U+8BC7"});
expect(() => {ms932Encoder.encode("\u8BC8")}).toThrowError({name:"TypeError",message:"EncodingError U+8BC8"});
expect(() => {ms932Encoder.encode("\u8BC9")}).toThrowError({name:"TypeError",message:"EncodingError U+8BC9"});
expect(() => {ms932Encoder.encode("\u8BCA")}).toThrowError({name:"TypeError",message:"EncodingError U+8BCA"});
expect(() => {ms932Encoder.encode("\u8BCB")}).toThrowError({name:"TypeError",message:"EncodingError U+8BCB"});
expect(() => {ms932Encoder.encode("\u8BCC")}).toThrowError({name:"TypeError",message:"EncodingError U+8BCC"});
expect(() => {ms932Encoder.encode("\u8BCD")}).toThrowError({name:"TypeError",message:"EncodingError U+8BCD"});
expect(() => {ms932Encoder.encode("\u8BCE")}).toThrowError({name:"TypeError",message:"EncodingError U+8BCE"});
expect(() => {ms932Encoder.encode("\u8BCF")}).toThrowError({name:"TypeError",message:"EncodingError U+8BCF"});
expect(() => {ms932Encoder.encode("\u8BD0")}).toThrowError({name:"TypeError",message:"EncodingError U+8BD0"});
expect(() => {ms932Encoder.encode("\u8BD1")}).toThrowError({name:"TypeError",message:"EncodingError U+8BD1"});
expect(() => {ms932Encoder.encode("\u8BD2")}).toThrowError({name:"TypeError",message:"EncodingError U+8BD2"});
expect(() => {ms932Encoder.encode("\u8BD3")}).toThrowError({name:"TypeError",message:"EncodingError U+8BD3"});
expect(() => {ms932Encoder.encode("\u8BD4")}).toThrowError({name:"TypeError",message:"EncodingError U+8BD4"});
expect(() => {ms932Encoder.encode("\u8BD5")}).toThrowError({name:"TypeError",message:"EncodingError U+8BD5"});
expect(() => {ms932Encoder.encode("\u8BD6")}).toThrowError({name:"TypeError",message:"EncodingError U+8BD6"});
expect(() => {ms932Encoder.encode("\u8BD7")}).toThrowError({name:"TypeError",message:"EncodingError U+8BD7"});
expect(() => {ms932Encoder.encode("\u8BD8")}).toThrowError({name:"TypeError",message:"EncodingError U+8BD8"});
expect(() => {ms932Encoder.encode("\u8BD9")}).toThrowError({name:"TypeError",message:"EncodingError U+8BD9"});
expect(() => {ms932Encoder.encode("\u8BDA")}).toThrowError({name:"TypeError",message:"EncodingError U+8BDA"});
expect(() => {ms932Encoder.encode("\u8BDB")}).toThrowError({name:"TypeError",message:"EncodingError U+8BDB"});
expect(() => {ms932Encoder.encode("\u8BDC")}).toThrowError({name:"TypeError",message:"EncodingError U+8BDC"});
expect(() => {ms932Encoder.encode("\u8BDD")}).toThrowError({name:"TypeError",message:"EncodingError U+8BDD"});
expect(() => {ms932Encoder.encode("\u8BDE")}).toThrowError({name:"TypeError",message:"EncodingError U+8BDE"});
expect(() => {ms932Encoder.encode("\u8BDF")}).toThrowError({name:"TypeError",message:"EncodingError U+8BDF"});
expect(() => {ms932Encoder.encode("\u8BE0")}).toThrowError({name:"TypeError",message:"EncodingError U+8BE0"});
expect(() => {ms932Encoder.encode("\u8BE1")}).toThrowError({name:"TypeError",message:"EncodingError U+8BE1"});
expect(() => {ms932Encoder.encode("\u8BE2")}).toThrowError({name:"TypeError",message:"EncodingError U+8BE2"});
expect(() => {ms932Encoder.encode("\u8BE3")}).toThrowError({name:"TypeError",message:"EncodingError U+8BE3"});
expect(() => {ms932Encoder.encode("\u8BE4")}).toThrowError({name:"TypeError",message:"EncodingError U+8BE4"});
expect(() => {ms932Encoder.encode("\u8BE5")}).toThrowError({name:"TypeError",message:"EncodingError U+8BE5"});
expect(() => {ms932Encoder.encode("\u8BE6")}).toThrowError({name:"TypeError",message:"EncodingError U+8BE6"});
expect(() => {ms932Encoder.encode("\u8BE7")}).toThrowError({name:"TypeError",message:"EncodingError U+8BE7"});
expect(() => {ms932Encoder.encode("\u8BE8")}).toThrowError({name:"TypeError",message:"EncodingError U+8BE8"});
expect(() => {ms932Encoder.encode("\u8BE9")}).toThrowError({name:"TypeError",message:"EncodingError U+8BE9"});
expect(() => {ms932Encoder.encode("\u8BEA")}).toThrowError({name:"TypeError",message:"EncodingError U+8BEA"});
expect(() => {ms932Encoder.encode("\u8BEB")}).toThrowError({name:"TypeError",message:"EncodingError U+8BEB"});
expect(() => {ms932Encoder.encode("\u8BEC")}).toThrowError({name:"TypeError",message:"EncodingError U+8BEC"});
expect(() => {ms932Encoder.encode("\u8BED")}).toThrowError({name:"TypeError",message:"EncodingError U+8BED"});
expect(() => {ms932Encoder.encode("\u8BEE")}).toThrowError({name:"TypeError",message:"EncodingError U+8BEE"});
expect(() => {ms932Encoder.encode("\u8BEF")}).toThrowError({name:"TypeError",message:"EncodingError U+8BEF"});
expect(() => {ms932Encoder.encode("\u8BF0")}).toThrowError({name:"TypeError",message:"EncodingError U+8BF0"});
expect(() => {ms932Encoder.encode("\u8BF1")}).toThrowError({name:"TypeError",message:"EncodingError U+8BF1"});
expect(() => {ms932Encoder.encode("\u8BF2")}).toThrowError({name:"TypeError",message:"EncodingError U+8BF2"});
expect(() => {ms932Encoder.encode("\u8BF3")}).toThrowError({name:"TypeError",message:"EncodingError U+8BF3"});
expect(() => {ms932Encoder.encode("\u8BF4")}).toThrowError({name:"TypeError",message:"EncodingError U+8BF4"});
expect(() => {ms932Encoder.encode("\u8BF5")}).toThrowError({name:"TypeError",message:"EncodingError U+8BF5"});
expect(() => {ms932Encoder.encode("\u8BF6")}).toThrowError({name:"TypeError",message:"EncodingError U+8BF6"});
expect(() => {ms932Encoder.encode("\u8BF7")}).toThrowError({name:"TypeError",message:"EncodingError U+8BF7"});
expect(() => {ms932Encoder.encode("\u8BF8")}).toThrowError({name:"TypeError",message:"EncodingError U+8BF8"});
expect(() => {ms932Encoder.encode("\u8BF9")}).toThrowError({name:"TypeError",message:"EncodingError U+8BF9"});
expect(() => {ms932Encoder.encode("\u8BFA")}).toThrowError({name:"TypeError",message:"EncodingError U+8BFA"});
expect(() => {ms932Encoder.encode("\u8BFB")}).toThrowError({name:"TypeError",message:"EncodingError U+8BFB"});
expect(() => {ms932Encoder.encode("\u8BFC")}).toThrowError({name:"TypeError",message:"EncodingError U+8BFC"});
expect(() => {ms932Encoder.encode("\u8BFD")}).toThrowError({name:"TypeError",message:"EncodingError U+8BFD"});
expect(() => {ms932Encoder.encode("\u8BFE")}).toThrowError({name:"TypeError",message:"EncodingError U+8BFE"});
expect(() => {ms932Encoder.encode("\u8BFF")}).toThrowError({name:"TypeError",message:"EncodingError U+8BFF"});
expect(() => {ms932Encoder.encode("\u8C00")}).toThrowError({name:"TypeError",message:"EncodingError U+8C00"});
expect(() => {ms932Encoder.encode("\u8C01")}).toThrowError({name:"TypeError",message:"EncodingError U+8C01"});
expect(() => {ms932Encoder.encode("\u8C02")}).toThrowError({name:"TypeError",message:"EncodingError U+8C02"});
expect(() => {ms932Encoder.encode("\u8C03")}).toThrowError({name:"TypeError",message:"EncodingError U+8C03"});
expect(() => {ms932Encoder.encode("\u8C04")}).toThrowError({name:"TypeError",message:"EncodingError U+8C04"});
expect(() => {ms932Encoder.encode("\u8C05")}).toThrowError({name:"TypeError",message:"EncodingError U+8C05"});
expect(() => {ms932Encoder.encode("\u8C06")}).toThrowError({name:"TypeError",message:"EncodingError U+8C06"});
expect(() => {ms932Encoder.encode("\u8C07")}).toThrowError({name:"TypeError",message:"EncodingError U+8C07"});
expect(() => {ms932Encoder.encode("\u8C08")}).toThrowError({name:"TypeError",message:"EncodingError U+8C08"});
expect(() => {ms932Encoder.encode("\u8C09")}).toThrowError({name:"TypeError",message:"EncodingError U+8C09"});
expect(() => {ms932Encoder.encode("\u8C0A")}).toThrowError({name:"TypeError",message:"EncodingError U+8C0A"});
expect(() => {ms932Encoder.encode("\u8C0B")}).toThrowError({name:"TypeError",message:"EncodingError U+8C0B"});
expect(() => {ms932Encoder.encode("\u8C0C")}).toThrowError({name:"TypeError",message:"EncodingError U+8C0C"});
expect(() => {ms932Encoder.encode("\u8C0D")}).toThrowError({name:"TypeError",message:"EncodingError U+8C0D"});
expect(() => {ms932Encoder.encode("\u8C0E")}).toThrowError({name:"TypeError",message:"EncodingError U+8C0E"});
expect(() => {ms932Encoder.encode("\u8C0F")}).toThrowError({name:"TypeError",message:"EncodingError U+8C0F"});
expect(() => {ms932Encoder.encode("\u8C10")}).toThrowError({name:"TypeError",message:"EncodingError U+8C10"});
expect(() => {ms932Encoder.encode("\u8C11")}).toThrowError({name:"TypeError",message:"EncodingError U+8C11"});
expect(() => {ms932Encoder.encode("\u8C12")}).toThrowError({name:"TypeError",message:"EncodingError U+8C12"});
expect(() => {ms932Encoder.encode("\u8C13")}).toThrowError({name:"TypeError",message:"EncodingError U+8C13"});
expect(() => {ms932Encoder.encode("\u8C14")}).toThrowError({name:"TypeError",message:"EncodingError U+8C14"});
expect(() => {ms932Encoder.encode("\u8C15")}).toThrowError({name:"TypeError",message:"EncodingError U+8C15"});
expect(() => {ms932Encoder.encode("\u8C16")}).toThrowError({name:"TypeError",message:"EncodingError U+8C16"});
expect(() => {ms932Encoder.encode("\u8C17")}).toThrowError({name:"TypeError",message:"EncodingError U+8C17"});
expect(() => {ms932Encoder.encode("\u8C18")}).toThrowError({name:"TypeError",message:"EncodingError U+8C18"});
expect(() => {ms932Encoder.encode("\u8C19")}).toThrowError({name:"TypeError",message:"EncodingError U+8C19"});
expect(() => {ms932Encoder.encode("\u8C1A")}).toThrowError({name:"TypeError",message:"EncodingError U+8C1A"});
expect(() => {ms932Encoder.encode("\u8C1B")}).toThrowError({name:"TypeError",message:"EncodingError U+8C1B"});
expect(() => {ms932Encoder.encode("\u8C1C")}).toThrowError({name:"TypeError",message:"EncodingError U+8C1C"});
expect(() => {ms932Encoder.encode("\u8C1D")}).toThrowError({name:"TypeError",message:"EncodingError U+8C1D"});
expect(() => {ms932Encoder.encode("\u8C1E")}).toThrowError({name:"TypeError",message:"EncodingError U+8C1E"});
expect(() => {ms932Encoder.encode("\u8C1F")}).toThrowError({name:"TypeError",message:"EncodingError U+8C1F"});
expect(() => {ms932Encoder.encode("\u8C20")}).toThrowError({name:"TypeError",message:"EncodingError U+8C20"});
expect(() => {ms932Encoder.encode("\u8C21")}).toThrowError({name:"TypeError",message:"EncodingError U+8C21"});
expect(() => {ms932Encoder.encode("\u8C22")}).toThrowError({name:"TypeError",message:"EncodingError U+8C22"});
expect(() => {ms932Encoder.encode("\u8C23")}).toThrowError({name:"TypeError",message:"EncodingError U+8C23"});
expect(() => {ms932Encoder.encode("\u8C24")}).toThrowError({name:"TypeError",message:"EncodingError U+8C24"});
expect(() => {ms932Encoder.encode("\u8C25")}).toThrowError({name:"TypeError",message:"EncodingError U+8C25"});
expect(() => {ms932Encoder.encode("\u8C26")}).toThrowError({name:"TypeError",message:"EncodingError U+8C26"});
expect(() => {ms932Encoder.encode("\u8C27")}).toThrowError({name:"TypeError",message:"EncodingError U+8C27"});
expect(() => {ms932Encoder.encode("\u8C28")}).toThrowError({name:"TypeError",message:"EncodingError U+8C28"});
expect(() => {ms932Encoder.encode("\u8C29")}).toThrowError({name:"TypeError",message:"EncodingError U+8C29"});
expect(() => {ms932Encoder.encode("\u8C2A")}).toThrowError({name:"TypeError",message:"EncodingError U+8C2A"});
expect(() => {ms932Encoder.encode("\u8C2B")}).toThrowError({name:"TypeError",message:"EncodingError U+8C2B"});
expect(() => {ms932Encoder.encode("\u8C2C")}).toThrowError({name:"TypeError",message:"EncodingError U+8C2C"});
expect(() => {ms932Encoder.encode("\u8C2D")}).toThrowError({name:"TypeError",message:"EncodingError U+8C2D"});
expect(() => {ms932Encoder.encode("\u8C2E")}).toThrowError({name:"TypeError",message:"EncodingError U+8C2E"});
expect(() => {ms932Encoder.encode("\u8C2F")}).toThrowError({name:"TypeError",message:"EncodingError U+8C2F"});
expect(() => {ms932Encoder.encode("\u8C30")}).toThrowError({name:"TypeError",message:"EncodingError U+8C30"});
expect(() => {ms932Encoder.encode("\u8C31")}).toThrowError({name:"TypeError",message:"EncodingError U+8C31"});
expect(() => {ms932Encoder.encode("\u8C32")}).toThrowError({name:"TypeError",message:"EncodingError U+8C32"});
expect(() => {ms932Encoder.encode("\u8C33")}).toThrowError({name:"TypeError",message:"EncodingError U+8C33"});
expect(() => {ms932Encoder.encode("\u8C34")}).toThrowError({name:"TypeError",message:"EncodingError U+8C34"});
expect(() => {ms932Encoder.encode("\u8C35")}).toThrowError({name:"TypeError",message:"EncodingError U+8C35"});
expect(() => {ms932Encoder.encode("\u8C36")}).toThrowError({name:"TypeError",message:"EncodingError U+8C36"});
expect([...ms932Encoder.encode("谷")].join(",")).toBe("146,74"); // U+8C37
expect(() => {ms932Encoder.encode("\u8C38")}).toThrowError({name:"TypeError",message:"EncodingError U+8C38"});
expect(() => {ms932Encoder.encode("\u8C39")}).toThrowError({name:"TypeError",message:"EncodingError U+8C39"});
expect([...ms932Encoder.encode("谺")].join(",")).toBe("230,172"); // U+8C3A
expect(() => {ms932Encoder.encode("\u8C3B")}).toThrowError({name:"TypeError",message:"EncodingError U+8C3B"});
expect(() => {ms932Encoder.encode("\u8C3C")}).toThrowError({name:"TypeError",message:"EncodingError U+8C3C"});
expect(() => {ms932Encoder.encode("\u8C3D")}).toThrowError({name:"TypeError",message:"EncodingError U+8C3D"});
expect(() => {ms932Encoder.encode("\u8C3E")}).toThrowError({name:"TypeError",message:"EncodingError U+8C3E"});
expect([...ms932Encoder.encode("谿")].join(",")).toBe("230,174"); // U+8C3F
expect(() => {ms932Encoder.encode("\u8C40")}).toThrowError({name:"TypeError",message:"EncodingError U+8C40"});
expect([...ms932Encoder.encode("豁")].join(",")).toBe("230,173"); // U+8C41
expect(() => {ms932Encoder.encode("\u8C42")}).toThrowError({name:"TypeError",message:"EncodingError U+8C42"});
expect(() => {ms932Encoder.encode("\u8C43")}).toThrowError({name:"TypeError",message:"EncodingError U+8C43"});
expect(() => {ms932Encoder.encode("\u8C44")}).toThrowError({name:"TypeError",message:"EncodingError U+8C44"});
expect(() => {ms932Encoder.encode("\u8C45")}).toThrowError({name:"TypeError",message:"EncodingError U+8C45"});
expect([...ms932Encoder.encode("豆")].join(",")).toBe("147,164"); // U+8C46
expect(() => {ms932Encoder.encode("\u8C47")}).toThrowError({name:"TypeError",message:"EncodingError U+8C47"});
expect([...ms932Encoder.encode("豈")].join(",")).toBe("230,175"); // U+8C48
expect(() => {ms932Encoder.encode("\u8C49")}).toThrowError({name:"TypeError",message:"EncodingError U+8C49"});
expect([...ms932Encoder.encode("豊")].join(",")).toBe("150,76"); // U+8C4A
expect(() => {ms932Encoder.encode("\u8C4B")}).toThrowError({name:"TypeError",message:"EncodingError U+8C4B"});
expect([...ms932Encoder.encode("豌")].join(",")).toBe("230,176"); // U+8C4C
expect(() => {ms932Encoder.encode("\u8C4D")}).toThrowError({name:"TypeError",message:"EncodingError U+8C4D"});
expect([...ms932Encoder.encode("豎")].join(",")).toBe("230,177"); // U+8C4E
expect(() => {ms932Encoder.encode("\u8C4F")}).toThrowError({name:"TypeError",message:"EncodingError U+8C4F"});
expect([...ms932Encoder.encode("豐")].join(",")).toBe("230,178"); // U+8C50
expect(() => {ms932Encoder.encode("\u8C51")}).toThrowError({name:"TypeError",message:"EncodingError U+8C51"});
expect(() => {ms932Encoder.encode("\u8C52")}).toThrowError({name:"TypeError",message:"EncodingError U+8C52"});
expect(() => {ms932Encoder.encode("\u8C53")}).toThrowError({name:"TypeError",message:"EncodingError U+8C53"});
expect(() => {ms932Encoder.encode("\u8C54")}).toThrowError({name:"TypeError",message:"EncodingError U+8C54"});
expect([...ms932Encoder.encode("豕")].join(",")).toBe("230,179"); // U+8C55
expect(() => {ms932Encoder.encode("\u8C56")}).toThrowError({name:"TypeError",message:"EncodingError U+8C56"});
expect(() => {ms932Encoder.encode("\u8C57")}).toThrowError({name:"TypeError",message:"EncodingError U+8C57"});
expect(() => {ms932Encoder.encode("\u8C58")}).toThrowError({name:"TypeError",message:"EncodingError U+8C58"});
expect(() => {ms932Encoder.encode("\u8C59")}).toThrowError({name:"TypeError",message:"EncodingError U+8C59"});
expect([...ms932Encoder.encode("豚")].join(",")).toBe("147,216"); // U+8C5A
expect(() => {ms932Encoder.encode("\u8C5B")}).toThrowError({name:"TypeError",message:"EncodingError U+8C5B"});
expect(() => {ms932Encoder.encode("\u8C5C")}).toThrowError({name:"TypeError",message:"EncodingError U+8C5C"});
expect(() => {ms932Encoder.encode("\u8C5D")}).toThrowError({name:"TypeError",message:"EncodingError U+8C5D"});
expect(() => {ms932Encoder.encode("\u8C5E")}).toThrowError({name:"TypeError",message:"EncodingError U+8C5E"});
expect(() => {ms932Encoder.encode("\u8C5F")}).toThrowError({name:"TypeError",message:"EncodingError U+8C5F"});
expect(() => {ms932Encoder.encode("\u8C60")}).toThrowError({name:"TypeError",message:"EncodingError U+8C60"});
expect([...ms932Encoder.encode("象豢")].join(",")).toBe("143,219,230,180"); // U+8C61
expect(() => {ms932Encoder.encode("\u8C63")}).toThrowError({name:"TypeError",message:"EncodingError U+8C63"});
expect(() => {ms932Encoder.encode("\u8C64")}).toThrowError({name:"TypeError",message:"EncodingError U+8C64"});
expect(() => {ms932Encoder.encode("\u8C65")}).toThrowError({name:"TypeError",message:"EncodingError U+8C65"});
expect(() => {ms932Encoder.encode("\u8C66")}).toThrowError({name:"TypeError",message:"EncodingError U+8C66"});
expect(() => {ms932Encoder.encode("\u8C67")}).toThrowError({name:"TypeError",message:"EncodingError U+8C67"});
expect(() => {ms932Encoder.encode("\u8C68")}).toThrowError({name:"TypeError",message:"EncodingError U+8C68"});
expect(() => {ms932Encoder.encode("\u8C69")}).toThrowError({name:"TypeError",message:"EncodingError U+8C69"});
expect([...ms932Encoder.encode("豪豫豬")].join(",")).toBe("141,139,152,172,230,181"); // U+8C6A
expect(() => {ms932Encoder.encode("\u8C6D")}).toThrowError({name:"TypeError",message:"EncodingError U+8C6D"});
expect(() => {ms932Encoder.encode("\u8C6E")}).toThrowError({name:"TypeError",message:"EncodingError U+8C6E"});
expect(() => {ms932Encoder.encode("\u8C6F")}).toThrowError({name:"TypeError",message:"EncodingError U+8C6F"});
expect(() => {ms932Encoder.encode("\u8C70")}).toThrowError({name:"TypeError",message:"EncodingError U+8C70"});
expect(() => {ms932Encoder.encode("\u8C71")}).toThrowError({name:"TypeError",message:"EncodingError U+8C71"});
expect(() => {ms932Encoder.encode("\u8C72")}).toThrowError({name:"TypeError",message:"EncodingError U+8C72"});
expect(() => {ms932Encoder.encode("\u8C73")}).toThrowError({name:"TypeError",message:"EncodingError U+8C73"});
expect(() => {ms932Encoder.encode("\u8C74")}).toThrowError({name:"TypeError",message:"EncodingError U+8C74"});
expect(() => {ms932Encoder.encode("\u8C75")}).toThrowError({name:"TypeError",message:"EncodingError U+8C75"});
expect(() => {ms932Encoder.encode("\u8C76")}).toThrowError({name:"TypeError",message:"EncodingError U+8C76"});
expect(() => {ms932Encoder.encode("\u8C77")}).toThrowError({name:"TypeError",message:"EncodingError U+8C77"});
expect([...ms932Encoder.encode("豸豹豺")].join(",")).toBe("230,182,149,94,230,183"); // U+8C78
expect(() => {ms932Encoder.encode("\u8C7B")}).toThrowError({name:"TypeError",message:"EncodingError U+8C7B"});
expect([...ms932Encoder.encode("豼")].join(",")).toBe("230,191"); // U+8C7C
expect(() => {ms932Encoder.encode("\u8C7D")}).toThrowError({name:"TypeError",message:"EncodingError U+8C7D"});
expect(() => {ms932Encoder.encode("\u8C7E")}).toThrowError({name:"TypeError",message:"EncodingError U+8C7E"});
expect(() => {ms932Encoder.encode("\u8C7F")}).toThrowError({name:"TypeError",message:"EncodingError U+8C7F"});
expect(() => {ms932Encoder.encode("\u8C80")}).toThrowError({name:"TypeError",message:"EncodingError U+8C80"});
expect(() => {ms932Encoder.encode("\u8C81")}).toThrowError({name:"TypeError",message:"EncodingError U+8C81"});
expect([...ms932Encoder.encode("貂")].join(",")).toBe("230,184"); // U+8C82
expect(() => {ms932Encoder.encode("\u8C83")}).toThrowError({name:"TypeError",message:"EncodingError U+8C83"});
expect(() => {ms932Encoder.encode("\u8C84")}).toThrowError({name:"TypeError",message:"EncodingError U+8C84"});
expect([...ms932Encoder.encode("貅")].join(",")).toBe("230,186"); // U+8C85
expect(() => {ms932Encoder.encode("\u8C86")}).toThrowError({name:"TypeError",message:"EncodingError U+8C86"});
expect(() => {ms932Encoder.encode("\u8C87")}).toThrowError({name:"TypeError",message:"EncodingError U+8C87"});
expect(() => {ms932Encoder.encode("\u8C88")}).toThrowError({name:"TypeError",message:"EncodingError U+8C88"});
expect([...ms932Encoder.encode("貉貊")].join(",")).toBe("230,185,230,187"); // U+8C89
expect(() => {ms932Encoder.encode("\u8C8B")}).toThrowError({name:"TypeError",message:"EncodingError U+8C8B"});
expect([...ms932Encoder.encode("貌貍貎")].join(",")).toBe("150,101,230,188,230,189"); // U+8C8C
expect(() => {ms932Encoder.encode("\u8C8F")}).toThrowError({name:"TypeError",message:"EncodingError U+8C8F"});
expect(() => {ms932Encoder.encode("\u8C90")}).toThrowError({name:"TypeError",message:"EncodingError U+8C90"});
expect(() => {ms932Encoder.encode("\u8C91")}).toThrowError({name:"TypeError",message:"EncodingError U+8C91"});
expect(() => {ms932Encoder.encode("\u8C92")}).toThrowError({name:"TypeError",message:"EncodingError U+8C92"});
expect(() => {ms932Encoder.encode("\u8C93")}).toThrowError({name:"TypeError",message:"EncodingError U+8C93"});
expect([...ms932Encoder.encode("貔")].join(",")).toBe("230,190"); // U+8C94
expect(() => {ms932Encoder.encode("\u8C95")}).toThrowError({name:"TypeError",message:"EncodingError U+8C95"});
expect(() => {ms932Encoder.encode("\u8C96")}).toThrowError({name:"TypeError",message:"EncodingError U+8C96"});
expect(() => {ms932Encoder.encode("\u8C97")}).toThrowError({name:"TypeError",message:"EncodingError U+8C97"});
expect([...ms932Encoder.encode("貘")].join(",")).toBe("230,192"); // U+8C98
expect(() => {ms932Encoder.encode("\u8C99")}).toThrowError({name:"TypeError",message:"EncodingError U+8C99"});
expect(() => {ms932Encoder.encode("\u8C9A")}).toThrowError({name:"TypeError",message:"EncodingError U+8C9A"});
expect(() => {ms932Encoder.encode("\u8C9B")}).toThrowError({name:"TypeError",message:"EncodingError U+8C9B"});
expect(() => {ms932Encoder.encode("\u8C9C")}).toThrowError({name:"TypeError",message:"EncodingError U+8C9C"});
expect([...ms932Encoder.encode("貝貞")].join(",")).toBe("138,76,146,229"); // U+8C9D
expect(() => {ms932Encoder.encode("\u8C9F")}).toThrowError({name:"TypeError",message:"EncodingError U+8C9F"});
expect([...ms932Encoder.encode("負財貢")].join(",")).toBe("149,137,141,224,141,118"); // U+8CA0
expect(() => {ms932Encoder.encode("\u8CA3")}).toThrowError({name:"TypeError",message:"EncodingError U+8CA3"});
expect(() => {ms932Encoder.encode("\u8CA4")}).toThrowError({name:"TypeError",message:"EncodingError U+8CA4"});
expect(() => {ms932Encoder.encode("\u8CA5")}).toThrowError({name:"TypeError",message:"EncodingError U+8CA5"});
expect(() => {ms932Encoder.encode("\u8CA6")}).toThrowError({name:"TypeError",message:"EncodingError U+8CA6"});
expect([...ms932Encoder.encode("貧貨販貪貫責貭貮貯貰")].join(",")).toBe("149,110,137,221,148,204,230,195,138,209,144,211,230,194,230,199,146,153,150,225"); // U+8CA7
expect(() => {ms932Encoder.encode("\u8CB1")}).toThrowError({name:"TypeError",message:"EncodingError U+8CB1"});
expect([...ms932Encoder.encode("貲貳貴")].join(",")).toBe("230,197,230,198,139,77"); // U+8CB2
expect(() => {ms932Encoder.encode("\u8CB5")}).toThrowError({name:"TypeError",message:"EncodingError U+8CB5"});
expect([...ms932Encoder.encode("貶買貸")].join(",")).toBe("230,200,148,131,145,221"); // U+8CB6
expect(() => {ms932Encoder.encode("\u8CB9")}).toThrowError({name:"TypeError",message:"EncodingError U+8CB9"});
expect(() => {ms932Encoder.encode("\u8CBA")}).toThrowError({name:"TypeError",message:"EncodingError U+8CBA"});
expect([...ms932Encoder.encode("費貼貽")].join(",")).toBe("148,239,147,92,230,196"); // U+8CBB
expect(() => {ms932Encoder.encode("\u8CBE")}).toThrowError({name:"TypeError",message:"EncodingError U+8CBE"});
expect([...ms932Encoder.encode("貿賀賁賂賃賄")].join(",")).toBe("150,102,137,234,230,202,152,71,146,192,152,100"); // U+8CBF
expect(() => {ms932Encoder.encode("\u8CC5")}).toThrowError({name:"TypeError",message:"EncodingError U+8CC5"});
expect(() => {ms932Encoder.encode("\u8CC6")}).toThrowError({name:"TypeError",message:"EncodingError U+8CC6"});
expect([...ms932Encoder.encode("資賈")].join(",")).toBe("142,145,230,201"); // U+8CC7
expect(() => {ms932Encoder.encode("\u8CC9")}).toThrowError({name:"TypeError",message:"EncodingError U+8CC9"});
expect([...ms932Encoder.encode("賊")].join(",")).toBe("145,175"); // U+8CCA
expect(() => {ms932Encoder.encode("\u8CCB")}).toThrowError({name:"TypeError",message:"EncodingError U+8CCB"});
expect(() => {ms932Encoder.encode("\u8CCC")}).toThrowError({name:"TypeError",message:"EncodingError U+8CCC"});
expect([...ms932Encoder.encode("賍賎")].join(",")).toBe("230,218,145,71"); // U+8CCD
expect(() => {ms932Encoder.encode("\u8CCF")}).toThrowError({name:"TypeError",message:"EncodingError U+8CCF"});
expect(() => {ms932Encoder.encode("\u8CD0")}).toThrowError({name:"TypeError",message:"EncodingError U+8CD0"});
expect([...ms932Encoder.encode("賑")].join(",")).toBe("147,246"); // U+8CD1
expect(() => {ms932Encoder.encode("\u8CD2")}).toThrowError({name:"TypeError",message:"EncodingError U+8CD2"});
expect([...ms932Encoder.encode("賓")].join(",")).toBe("149,111"); // U+8CD3
expect(() => {ms932Encoder.encode("\u8CD4")}).toThrowError({name:"TypeError",message:"EncodingError U+8CD4"});
expect(() => {ms932Encoder.encode("\u8CD5")}).toThrowError({name:"TypeError",message:"EncodingError U+8CD5"});
expect(() => {ms932Encoder.encode("\u8CD6")}).toThrowError({name:"TypeError",message:"EncodingError U+8CD6"});
expect(() => {ms932Encoder.encode("\u8CD7")}).toThrowError({name:"TypeError",message:"EncodingError U+8CD7"});
expect(() => {ms932Encoder.encode("\u8CD8")}).toThrowError({name:"TypeError",message:"EncodingError U+8CD8"});
expect(() => {ms932Encoder.encode("\u8CD9")}).toThrowError({name:"TypeError",message:"EncodingError U+8CD9"});
expect([...ms932Encoder.encode("賚賛賜")].join(",")).toBe("230,205,142,94,142,146"); // U+8CDA
expect(() => {ms932Encoder.encode("\u8CDD")}).toThrowError({name:"TypeError",message:"EncodingError U+8CDD"});
expect([...ms932Encoder.encode("賞")].join(",")).toBe("143,220"); // U+8CDE
expect(() => {ms932Encoder.encode("\u8CDF")}).toThrowError({name:"TypeError",message:"EncodingError U+8CDF"});
expect([...ms932Encoder.encode("賠")].join(",")).toBe("148,133"); // U+8CE0
expect(() => {ms932Encoder.encode("\u8CE1")}).toThrowError({name:"TypeError",message:"EncodingError U+8CE1"});
expect([...ms932Encoder.encode("賢賣賤")].join(",")).toBe("140,171,230,204,230,203"); // U+8CE2
expect(() => {ms932Encoder.encode("\u8CE5")}).toThrowError({name:"TypeError",message:"EncodingError U+8CE5"});
expect([...ms932Encoder.encode("賦")].join(",")).toBe("149,138"); // U+8CE6
expect(() => {ms932Encoder.encode("\u8CE7")}).toThrowError({name:"TypeError",message:"EncodingError U+8CE7"});
expect(() => {ms932Encoder.encode("\u8CE8")}).toThrowError({name:"TypeError",message:"EncodingError U+8CE8"});
expect(() => {ms932Encoder.encode("\u8CE9")}).toThrowError({name:"TypeError",message:"EncodingError U+8CE9"});
expect([...ms932Encoder.encode("質")].join(",")).toBe("142,191"); // U+8CEA
expect(() => {ms932Encoder.encode("\u8CEB")}).toThrowError({name:"TypeError",message:"EncodingError U+8CEB"});
expect(() => {ms932Encoder.encode("\u8CEC")}).toThrowError({name:"TypeError",message:"EncodingError U+8CEC"});
expect([...ms932Encoder.encode("賭")].join(",")).toBe("147,113"); // U+8CED
expect(() => {ms932Encoder.encode("\u8CEE")}).toThrowError({name:"TypeError",message:"EncodingError U+8CEE"});
expect(() => {ms932Encoder.encode("\u8CEF")}).toThrowError({name:"TypeError",message:"EncodingError U+8CEF"});
expect([...ms932Encoder.encode("賰")].join(",")).toBe("251,173"); // U+8CF0
expect(() => {ms932Encoder.encode("\u8CF1")}).toThrowError({name:"TypeError",message:"EncodingError U+8CF1"});
expect(() => {ms932Encoder.encode("\u8CF2")}).toThrowError({name:"TypeError",message:"EncodingError U+8CF2"});
expect(() => {ms932Encoder.encode("\u8CF3")}).toThrowError({name:"TypeError",message:"EncodingError U+8CF3"});
expect([...ms932Encoder.encode("賴")].join(",")).toBe("251,174"); // U+8CF4
expect(() => {ms932Encoder.encode("\u8CF5")}).toThrowError({name:"TypeError",message:"EncodingError U+8CF5"});
expect(() => {ms932Encoder.encode("\u8CF6")}).toThrowError({name:"TypeError",message:"EncodingError U+8CF6"});
expect(() => {ms932Encoder.encode("\u8CF7")}).toThrowError({name:"TypeError",message:"EncodingError U+8CF7"});
expect(() => {ms932Encoder.encode("\u8CF8")}).toThrowError({name:"TypeError",message:"EncodingError U+8CF8"});
expect(() => {ms932Encoder.encode("\u8CF9")}).toThrowError({name:"TypeError",message:"EncodingError U+8CF9"});
expect([...ms932Encoder.encode("賺賻購賽")].join(",")).toBe("230,207,230,208,141,119,230,206"); // U+8CFA
expect(() => {ms932Encoder.encode("\u8CFE")}).toThrowError({name:"TypeError",message:"EncodingError U+8CFE"});
expect(() => {ms932Encoder.encode("\u8CFF")}).toThrowError({name:"TypeError",message:"EncodingError U+8CFF"});
expect(() => {ms932Encoder.encode("\u8D00")}).toThrowError({name:"TypeError",message:"EncodingError U+8D00"});
expect(() => {ms932Encoder.encode("\u8D01")}).toThrowError({name:"TypeError",message:"EncodingError U+8D01"});
expect(() => {ms932Encoder.encode("\u8D02")}).toThrowError({name:"TypeError",message:"EncodingError U+8D02"});
expect(() => {ms932Encoder.encode("\u8D03")}).toThrowError({name:"TypeError",message:"EncodingError U+8D03"});
expect([...ms932Encoder.encode("贄贅")].join(",")).toBe("230,209,230,210"); // U+8D04
expect(() => {ms932Encoder.encode("\u8D06")}).toThrowError({name:"TypeError",message:"EncodingError U+8D06"});
expect([...ms932Encoder.encode("贇贈")].join(",")).toBe("230,212,145,161"); // U+8D07
expect(() => {ms932Encoder.encode("\u8D09")}).toThrowError({name:"TypeError",message:"EncodingError U+8D09"});
expect([...ms932Encoder.encode("贊贋")].join(",")).toBe("230,211,138,228"); // U+8D0A
expect(() => {ms932Encoder.encode("\u8D0C")}).toThrowError({name:"TypeError",message:"EncodingError U+8D0C"});
expect([...ms932Encoder.encode("贍")].join(",")).toBe("230,214"); // U+8D0D
expect(() => {ms932Encoder.encode("\u8D0E")}).toThrowError({name:"TypeError",message:"EncodingError U+8D0E"});
expect([...ms932Encoder.encode("贏贐")].join(",")).toBe("230,213,230,215"); // U+8D0F
expect(() => {ms932Encoder.encode("\u8D11")}).toThrowError({name:"TypeError",message:"EncodingError U+8D11"});
expect([...ms932Encoder.encode("贒贓贔")].join(",")).toBe("251,175,230,217,230,219"); // U+8D12
expect(() => {ms932Encoder.encode("\u8D15")}).toThrowError({name:"TypeError",message:"EncodingError U+8D15"});
expect([...ms932Encoder.encode("贖")].join(",")).toBe("230,220"); // U+8D16
expect(() => {ms932Encoder.encode("\u8D17")}).toThrowError({name:"TypeError",message:"EncodingError U+8D17"});
expect(() => {ms932Encoder.encode("\u8D18")}).toThrowError({name:"TypeError",message:"EncodingError U+8D18"});
expect(() => {ms932Encoder.encode("\u8D19")}).toThrowError({name:"TypeError",message:"EncodingError U+8D19"});
expect(() => {ms932Encoder.encode("\u8D1A")}).toThrowError({name:"TypeError",message:"EncodingError U+8D1A"});
expect(() => {ms932Encoder.encode("\u8D1B")}).toThrowError({name:"TypeError",message:"EncodingError U+8D1B"});
expect(() => {ms932Encoder.encode("\u8D1C")}).toThrowError({name:"TypeError",message:"EncodingError U+8D1C"});
expect(() => {ms932Encoder.encode("\u8D1D")}).toThrowError({name:"TypeError",message:"EncodingError U+8D1D"});
expect(() => {ms932Encoder.encode("\u8D1E")}).toThrowError({name:"TypeError",message:"EncodingError U+8D1E"});
expect(() => {ms932Encoder.encode("\u8D1F")}).toThrowError({name:"TypeError",message:"EncodingError U+8D1F"});
expect(() => {ms932Encoder.encode("\u8D20")}).toThrowError({name:"TypeError",message:"EncodingError U+8D20"});
expect(() => {ms932Encoder.encode("\u8D21")}).toThrowError({name:"TypeError",message:"EncodingError U+8D21"});
expect(() => {ms932Encoder.encode("\u8D22")}).toThrowError({name:"TypeError",message:"EncodingError U+8D22"});
expect(() => {ms932Encoder.encode("\u8D23")}).toThrowError({name:"TypeError",message:"EncodingError U+8D23"});
expect(() => {ms932Encoder.encode("\u8D24")}).toThrowError({name:"TypeError",message:"EncodingError U+8D24"});
expect(() => {ms932Encoder.encode("\u8D25")}).toThrowError({name:"TypeError",message:"EncodingError U+8D25"});
expect(() => {ms932Encoder.encode("\u8D26")}).toThrowError({name:"TypeError",message:"EncodingError U+8D26"});
expect(() => {ms932Encoder.encode("\u8D27")}).toThrowError({name:"TypeError",message:"EncodingError U+8D27"});
expect(() => {ms932Encoder.encode("\u8D28")}).toThrowError({name:"TypeError",message:"EncodingError U+8D28"});
expect(() => {ms932Encoder.encode("\u8D29")}).toThrowError({name:"TypeError",message:"EncodingError U+8D29"});
expect(() => {ms932Encoder.encode("\u8D2A")}).toThrowError({name:"TypeError",message:"EncodingError U+8D2A"});
expect(() => {ms932Encoder.encode("\u8D2B")}).toThrowError({name:"TypeError",message:"EncodingError U+8D2B"});
expect(() => {ms932Encoder.encode("\u8D2C")}).toThrowError({name:"TypeError",message:"EncodingError U+8D2C"});
expect(() => {ms932Encoder.encode("\u8D2D")}).toThrowError({name:"TypeError",message:"EncodingError U+8D2D"});
expect(() => {ms932Encoder.encode("\u8D2E")}).toThrowError({name:"TypeError",message:"EncodingError U+8D2E"});
expect(() => {ms932Encoder.encode("\u8D2F")}).toThrowError({name:"TypeError",message:"EncodingError U+8D2F"});
expect(() => {ms932Encoder.encode("\u8D30")}).toThrowError({name:"TypeError",message:"EncodingError U+8D30"});
expect(() => {ms932Encoder.encode("\u8D31")}).toThrowError({name:"TypeError",message:"EncodingError U+8D31"});
expect(() => {ms932Encoder.encode("\u8D32")}).toThrowError({name:"TypeError",message:"EncodingError U+8D32"});
expect(() => {ms932Encoder.encode("\u8D33")}).toThrowError({name:"TypeError",message:"EncodingError U+8D33"});
expect(() => {ms932Encoder.encode("\u8D34")}).toThrowError({name:"TypeError",message:"EncodingError U+8D34"});
expect(() => {ms932Encoder.encode("\u8D35")}).toThrowError({name:"TypeError",message:"EncodingError U+8D35"});
expect(() => {ms932Encoder.encode("\u8D36")}).toThrowError({name:"TypeError",message:"EncodingError U+8D36"});
expect(() => {ms932Encoder.encode("\u8D37")}).toThrowError({name:"TypeError",message:"EncodingError U+8D37"});
expect(() => {ms932Encoder.encode("\u8D38")}).toThrowError({name:"TypeError",message:"EncodingError U+8D38"});
expect(() => {ms932Encoder.encode("\u8D39")}).toThrowError({name:"TypeError",message:"EncodingError U+8D39"});
expect(() => {ms932Encoder.encode("\u8D3A")}).toThrowError({name:"TypeError",message:"EncodingError U+8D3A"});
expect(() => {ms932Encoder.encode("\u8D3B")}).toThrowError({name:"TypeError",message:"EncodingError U+8D3B"});
expect(() => {ms932Encoder.encode("\u8D3C")}).toThrowError({name:"TypeError",message:"EncodingError U+8D3C"});
expect(() => {ms932Encoder.encode("\u8D3D")}).toThrowError({name:"TypeError",message:"EncodingError U+8D3D"});
expect(() => {ms932Encoder.encode("\u8D3E")}).toThrowError({name:"TypeError",message:"EncodingError U+8D3E"});
expect(() => {ms932Encoder.encode("\u8D3F")}).toThrowError({name:"TypeError",message:"EncodingError U+8D3F"});
expect(() => {ms932Encoder.encode("\u8D40")}).toThrowError({name:"TypeError",message:"EncodingError U+8D40"});
expect(() => {ms932Encoder.encode("\u8D41")}).toThrowError({name:"TypeError",message:"EncodingError U+8D41"});
expect(() => {ms932Encoder.encode("\u8D42")}).toThrowError({name:"TypeError",message:"EncodingError U+8D42"});
expect(() => {ms932Encoder.encode("\u8D43")}).toThrowError({name:"TypeError",message:"EncodingError U+8D43"});
expect(() => {ms932Encoder.encode("\u8D44")}).toThrowError({name:"TypeError",message:"EncodingError U+8D44"});
expect(() => {ms932Encoder.encode("\u8D45")}).toThrowError({name:"TypeError",message:"EncodingError U+8D45"});
expect(() => {ms932Encoder.encode("\u8D46")}).toThrowError({name:"TypeError",message:"EncodingError U+8D46"});
expect(() => {ms932Encoder.encode("\u8D47")}).toThrowError({name:"TypeError",message:"EncodingError U+8D47"});
expect(() => {ms932Encoder.encode("\u8D48")}).toThrowError({name:"TypeError",message:"EncodingError U+8D48"});
expect(() => {ms932Encoder.encode("\u8D49")}).toThrowError({name:"TypeError",message:"EncodingError U+8D49"});
expect(() => {ms932Encoder.encode("\u8D4A")}).toThrowError({name:"TypeError",message:"EncodingError U+8D4A"});
expect(() => {ms932Encoder.encode("\u8D4B")}).toThrowError({name:"TypeError",message:"EncodingError U+8D4B"});
expect(() => {ms932Encoder.encode("\u8D4C")}).toThrowError({name:"TypeError",message:"EncodingError U+8D4C"});
expect(() => {ms932Encoder.encode("\u8D4D")}).toThrowError({name:"TypeError",message:"EncodingError U+8D4D"});
expect(() => {ms932Encoder.encode("\u8D4E")}).toThrowError({name:"TypeError",message:"EncodingError U+8D4E"});
expect(() => {ms932Encoder.encode("\u8D4F")}).toThrowError({name:"TypeError",message:"EncodingError U+8D4F"});
expect(() => {ms932Encoder.encode("\u8D50")}).toThrowError({name:"TypeError",message:"EncodingError U+8D50"});
expect(() => {ms932Encoder.encode("\u8D51")}).toThrowError({name:"TypeError",message:"EncodingError U+8D51"});
expect(() => {ms932Encoder.encode("\u8D52")}).toThrowError({name:"TypeError",message:"EncodingError U+8D52"});
expect(() => {ms932Encoder.encode("\u8D53")}).toThrowError({name:"TypeError",message:"EncodingError U+8D53"});
expect(() => {ms932Encoder.encode("\u8D54")}).toThrowError({name:"TypeError",message:"EncodingError U+8D54"});
expect(() => {ms932Encoder.encode("\u8D55")}).toThrowError({name:"TypeError",message:"EncodingError U+8D55"});
expect(() => {ms932Encoder.encode("\u8D56")}).toThrowError({name:"TypeError",message:"EncodingError U+8D56"});
expect(() => {ms932Encoder.encode("\u8D57")}).toThrowError({name:"TypeError",message:"EncodingError U+8D57"});
expect(() => {ms932Encoder.encode("\u8D58")}).toThrowError({name:"TypeError",message:"EncodingError U+8D58"});
expect(() => {ms932Encoder.encode("\u8D59")}).toThrowError({name:"TypeError",message:"EncodingError U+8D59"});
expect(() => {ms932Encoder.encode("\u8D5A")}).toThrowError({name:"TypeError",message:"EncodingError U+8D5A"});
expect(() => {ms932Encoder.encode("\u8D5B")}).toThrowError({name:"TypeError",message:"EncodingError U+8D5B"});
expect(() => {ms932Encoder.encode("\u8D5C")}).toThrowError({name:"TypeError",message:"EncodingError U+8D5C"});
expect(() => {ms932Encoder.encode("\u8D5D")}).toThrowError({name:"TypeError",message:"EncodingError U+8D5D"});
expect(() => {ms932Encoder.encode("\u8D5E")}).toThrowError({name:"TypeError",message:"EncodingError U+8D5E"});
expect(() => {ms932Encoder.encode("\u8D5F")}).toThrowError({name:"TypeError",message:"EncodingError U+8D5F"});
expect(() => {ms932Encoder.encode("\u8D60")}).toThrowError({name:"TypeError",message:"EncodingError U+8D60"});
expect(() => {ms932Encoder.encode("\u8D61")}).toThrowError({name:"TypeError",message:"EncodingError U+8D61"});
expect(() => {ms932Encoder.encode("\u8D62")}).toThrowError({name:"TypeError",message:"EncodingError U+8D62"});
expect(() => {ms932Encoder.encode("\u8D63")}).toThrowError({name:"TypeError",message:"EncodingError U+8D63"});
expect([...ms932Encoder.encode("赤")].join(",")).toBe("144,212"); // U+8D64
expect(() => {ms932Encoder.encode("\u8D65")}).toThrowError({name:"TypeError",message:"EncodingError U+8D65"});
expect([...ms932Encoder.encode("赦赧")].join(",")).toBe("142,205,230,221"); // U+8D66
expect(() => {ms932Encoder.encode("\u8D68")}).toThrowError({name:"TypeError",message:"EncodingError U+8D68"});
expect(() => {ms932Encoder.encode("\u8D69")}).toThrowError({name:"TypeError",message:"EncodingError U+8D69"});
expect(() => {ms932Encoder.encode("\u8D6A")}).toThrowError({name:"TypeError",message:"EncodingError U+8D6A"});
expect([...ms932Encoder.encode("赫")].join(",")).toBe("138,113"); // U+8D6B
expect(() => {ms932Encoder.encode("\u8D6C")}).toThrowError({name:"TypeError",message:"EncodingError U+8D6C"});
expect([...ms932Encoder.encode("赭")].join(",")).toBe("230,222"); // U+8D6D
expect(() => {ms932Encoder.encode("\u8D6E")}).toThrowError({name:"TypeError",message:"EncodingError U+8D6E"});
expect(() => {ms932Encoder.encode("\u8D6F")}).toThrowError({name:"TypeError",message:"EncodingError U+8D6F"});
expect([...ms932Encoder.encode("走赱")].join(",")).toBe("145,150,230,223"); // U+8D70
expect(() => {ms932Encoder.encode("\u8D72")}).toThrowError({name:"TypeError",message:"EncodingError U+8D72"});
expect([...ms932Encoder.encode("赳赴")].join(",")).toBe("230,224,149,139"); // U+8D73
expect(() => {ms932Encoder.encode("\u8D75")}).toThrowError({name:"TypeError",message:"EncodingError U+8D75"});
expect([...ms932Encoder.encode("赶起")].join(",")).toBe("251,176,139,78"); // U+8D76
expect(() => {ms932Encoder.encode("\u8D78")}).toThrowError({name:"TypeError",message:"EncodingError U+8D78"});
expect(() => {ms932Encoder.encode("\u8D79")}).toThrowError({name:"TypeError",message:"EncodingError U+8D79"});
expect(() => {ms932Encoder.encode("\u8D7A")}).toThrowError({name:"TypeError",message:"EncodingError U+8D7A"});
expect(() => {ms932Encoder.encode("\u8D7B")}).toThrowError({name:"TypeError",message:"EncodingError U+8D7B"});
expect(() => {ms932Encoder.encode("\u8D7C")}).toThrowError({name:"TypeError",message:"EncodingError U+8D7C"});
expect(() => {ms932Encoder.encode("\u8D7D")}).toThrowError({name:"TypeError",message:"EncodingError U+8D7D"});
expect(() => {ms932Encoder.encode("\u8D7E")}).toThrowError({name:"TypeError",message:"EncodingError U+8D7E"});
expect(() => {ms932Encoder.encode("\u8D7F")}).toThrowError({name:"TypeError",message:"EncodingError U+8D7F"});
expect(() => {ms932Encoder.encode("\u8D80")}).toThrowError({name:"TypeError",message:"EncodingError U+8D80"});
expect([...ms932Encoder.encode("趁")].join(",")).toBe("230,225"); // U+8D81
expect(() => {ms932Encoder.encode("\u8D82")}).toThrowError({name:"TypeError",message:"EncodingError U+8D82"});
expect(() => {ms932Encoder.encode("\u8D83")}).toThrowError({name:"TypeError",message:"EncodingError U+8D83"});
expect(() => {ms932Encoder.encode("\u8D84")}).toThrowError({name:"TypeError",message:"EncodingError U+8D84"});
expect([...ms932Encoder.encode("超")].join(",")).toBe("146,180"); // U+8D85
expect(() => {ms932Encoder.encode("\u8D86")}).toThrowError({name:"TypeError",message:"EncodingError U+8D86"});
expect(() => {ms932Encoder.encode("\u8D87")}).toThrowError({name:"TypeError",message:"EncodingError U+8D87"});
expect(() => {ms932Encoder.encode("\u8D88")}).toThrowError({name:"TypeError",message:"EncodingError U+8D88"});
expect(() => {ms932Encoder.encode("\u8D89")}).toThrowError({name:"TypeError",message:"EncodingError U+8D89"});
expect([...ms932Encoder.encode("越")].join(",")).toBe("137,122"); // U+8D8A
expect(() => {ms932Encoder.encode("\u8D8B")}).toThrowError({name:"TypeError",message:"EncodingError U+8D8B"});
expect(() => {ms932Encoder.encode("\u8D8C")}).toThrowError({name:"TypeError",message:"EncodingError U+8D8C"});
expect(() => {ms932Encoder.encode("\u8D8D")}).toThrowError({name:"TypeError",message:"EncodingError U+8D8D"});
expect(() => {ms932Encoder.encode("\u8D8E")}).toThrowError({name:"TypeError",message:"EncodingError U+8D8E"});
expect(() => {ms932Encoder.encode("\u8D8F")}).toThrowError({name:"TypeError",message:"EncodingError U+8D8F"});
expect(() => {ms932Encoder.encode("\u8D90")}).toThrowError({name:"TypeError",message:"EncodingError U+8D90"});
expect(() => {ms932Encoder.encode("\u8D91")}).toThrowError({name:"TypeError",message:"EncodingError U+8D91"});
expect(() => {ms932Encoder.encode("\u8D92")}).toThrowError({name:"TypeError",message:"EncodingError U+8D92"});
expect(() => {ms932Encoder.encode("\u8D93")}).toThrowError({name:"TypeError",message:"EncodingError U+8D93"});
expect(() => {ms932Encoder.encode("\u8D94")}).toThrowError({name:"TypeError",message:"EncodingError U+8D94"});
expect(() => {ms932Encoder.encode("\u8D95")}).toThrowError({name:"TypeError",message:"EncodingError U+8D95"});
expect(() => {ms932Encoder.encode("\u8D96")}).toThrowError({name:"TypeError",message:"EncodingError U+8D96"});
expect(() => {ms932Encoder.encode("\u8D97")}).toThrowError({name:"TypeError",message:"EncodingError U+8D97"});
expect(() => {ms932Encoder.encode("\u8D98")}).toThrowError({name:"TypeError",message:"EncodingError U+8D98"});
expect([...ms932Encoder.encode("趙")].join(",")).toBe("230,226"); // U+8D99
expect(() => {ms932Encoder.encode("\u8D9A")}).toThrowError({name:"TypeError",message:"EncodingError U+8D9A"});
expect(() => {ms932Encoder.encode("\u8D9B")}).toThrowError({name:"TypeError",message:"EncodingError U+8D9B"});
expect(() => {ms932Encoder.encode("\u8D9C")}).toThrowError({name:"TypeError",message:"EncodingError U+8D9C"});
expect(() => {ms932Encoder.encode("\u8D9D")}).toThrowError({name:"TypeError",message:"EncodingError U+8D9D"});
expect(() => {ms932Encoder.encode("\u8D9E")}).toThrowError({name:"TypeError",message:"EncodingError U+8D9E"});
expect(() => {ms932Encoder.encode("\u8D9F")}).toThrowError({name:"TypeError",message:"EncodingError U+8D9F"});
expect(() => {ms932Encoder.encode("\u8DA0")}).toThrowError({name:"TypeError",message:"EncodingError U+8DA0"});
expect(() => {ms932Encoder.encode("\u8DA1")}).toThrowError({name:"TypeError",message:"EncodingError U+8DA1"});
expect(() => {ms932Encoder.encode("\u8DA2")}).toThrowError({name:"TypeError",message:"EncodingError U+8DA2"});
expect([...ms932Encoder.encode("趣")].join(",")).toBe("142,239"); // U+8DA3
expect(() => {ms932Encoder.encode("\u8DA4")}).toThrowError({name:"TypeError",message:"EncodingError U+8DA4"});
expect(() => {ms932Encoder.encode("\u8DA5")}).toThrowError({name:"TypeError",message:"EncodingError U+8DA5"});
expect(() => {ms932Encoder.encode("\u8DA6")}).toThrowError({name:"TypeError",message:"EncodingError U+8DA6"});
expect(() => {ms932Encoder.encode("\u8DA7")}).toThrowError({name:"TypeError",message:"EncodingError U+8DA7"});
expect([...ms932Encoder.encode("趨")].join(",")).toBe("144,150"); // U+8DA8
expect(() => {ms932Encoder.encode("\u8DA9")}).toThrowError({name:"TypeError",message:"EncodingError U+8DA9"});
expect(() => {ms932Encoder.encode("\u8DAA")}).toThrowError({name:"TypeError",message:"EncodingError U+8DAA"});
expect(() => {ms932Encoder.encode("\u8DAB")}).toThrowError({name:"TypeError",message:"EncodingError U+8DAB"});
expect(() => {ms932Encoder.encode("\u8DAC")}).toThrowError({name:"TypeError",message:"EncodingError U+8DAC"});
expect(() => {ms932Encoder.encode("\u8DAD")}).toThrowError({name:"TypeError",message:"EncodingError U+8DAD"});
expect(() => {ms932Encoder.encode("\u8DAE")}).toThrowError({name:"TypeError",message:"EncodingError U+8DAE"});
expect(() => {ms932Encoder.encode("\u8DAF")}).toThrowError({name:"TypeError",message:"EncodingError U+8DAF"});
expect(() => {ms932Encoder.encode("\u8DB0")}).toThrowError({name:"TypeError",message:"EncodingError U+8DB0"});
expect(() => {ms932Encoder.encode("\u8DB1")}).toThrowError({name:"TypeError",message:"EncodingError U+8DB1"});
expect(() => {ms932Encoder.encode("\u8DB2")}).toThrowError({name:"TypeError",message:"EncodingError U+8DB2"});
expect([...ms932Encoder.encode("足")].join(",")).toBe("145,171"); // U+8DB3
expect(() => {ms932Encoder.encode("\u8DB4")}).toThrowError({name:"TypeError",message:"EncodingError U+8DB4"});
expect(() => {ms932Encoder.encode("\u8DB5")}).toThrowError({name:"TypeError",message:"EncodingError U+8DB5"});
expect(() => {ms932Encoder.encode("\u8DB6")}).toThrowError({name:"TypeError",message:"EncodingError U+8DB6"});
expect(() => {ms932Encoder.encode("\u8DB7")}).toThrowError({name:"TypeError",message:"EncodingError U+8DB7"});
expect(() => {ms932Encoder.encode("\u8DB8")}).toThrowError({name:"TypeError",message:"EncodingError U+8DB8"});
expect(() => {ms932Encoder.encode("\u8DB9")}).toThrowError({name:"TypeError",message:"EncodingError U+8DB9"});
expect([...ms932Encoder.encode("趺")].join(",")).toBe("230,229"); // U+8DBA
expect(() => {ms932Encoder.encode("\u8DBB")}).toThrowError({name:"TypeError",message:"EncodingError U+8DBB"});
expect(() => {ms932Encoder.encode("\u8DBC")}).toThrowError({name:"TypeError",message:"EncodingError U+8DBC"});
expect(() => {ms932Encoder.encode("\u8DBD")}).toThrowError({name:"TypeError",message:"EncodingError U+8DBD"});
expect([...ms932Encoder.encode("趾")].join(",")).toBe("230,228"); // U+8DBE
expect(() => {ms932Encoder.encode("\u8DBF")}).toThrowError({name:"TypeError",message:"EncodingError U+8DBF"});
expect(() => {ms932Encoder.encode("\u8DC0")}).toThrowError({name:"TypeError",message:"EncodingError U+8DC0"});
expect(() => {ms932Encoder.encode("\u8DC1")}).toThrowError({name:"TypeError",message:"EncodingError U+8DC1"});
expect([...ms932Encoder.encode("跂")].join(",")).toBe("230,227"); // U+8DC2
expect(() => {ms932Encoder.encode("\u8DC3")}).toThrowError({name:"TypeError",message:"EncodingError U+8DC3"});
expect(() => {ms932Encoder.encode("\u8DC4")}).toThrowError({name:"TypeError",message:"EncodingError U+8DC4"});
expect(() => {ms932Encoder.encode("\u8DC5")}).toThrowError({name:"TypeError",message:"EncodingError U+8DC5"});
expect(() => {ms932Encoder.encode("\u8DC6")}).toThrowError({name:"TypeError",message:"EncodingError U+8DC6"});
expect(() => {ms932Encoder.encode("\u8DC7")}).toThrowError({name:"TypeError",message:"EncodingError U+8DC7"});
expect(() => {ms932Encoder.encode("\u8DC8")}).toThrowError({name:"TypeError",message:"EncodingError U+8DC8"});
expect(() => {ms932Encoder.encode("\u8DC9")}).toThrowError({name:"TypeError",message:"EncodingError U+8DC9"});
expect(() => {ms932Encoder.encode("\u8DCA")}).toThrowError({name:"TypeError",message:"EncodingError U+8DCA"});
expect([...ms932Encoder.encode("跋跌")].join(",")).toBe("230,235,230,233"); // U+8DCB
expect(() => {ms932Encoder.encode("\u8DCD")}).toThrowError({name:"TypeError",message:"EncodingError U+8DCD"});
expect(() => {ms932Encoder.encode("\u8DCE")}).toThrowError({name:"TypeError",message:"EncodingError U+8DCE"});
expect([...ms932Encoder.encode("跏")].join(",")).toBe("230,230"); // U+8DCF
expect(() => {ms932Encoder.encode("\u8DD0")}).toThrowError({name:"TypeError",message:"EncodingError U+8DD0"});
expect(() => {ms932Encoder.encode("\u8DD1")}).toThrowError({name:"TypeError",message:"EncodingError U+8DD1"});
expect(() => {ms932Encoder.encode("\u8DD2")}).toThrowError({name:"TypeError",message:"EncodingError U+8DD2"});
expect(() => {ms932Encoder.encode("\u8DD3")}).toThrowError({name:"TypeError",message:"EncodingError U+8DD3"});
expect(() => {ms932Encoder.encode("\u8DD4")}).toThrowError({name:"TypeError",message:"EncodingError U+8DD4"});
expect(() => {ms932Encoder.encode("\u8DD5")}).toThrowError({name:"TypeError",message:"EncodingError U+8DD5"});
expect([...ms932Encoder.encode("跖")].join(",")).toBe("230,232"); // U+8DD6
expect(() => {ms932Encoder.encode("\u8DD7")}).toThrowError({name:"TypeError",message:"EncodingError U+8DD7"});
expect(() => {ms932Encoder.encode("\u8DD8")}).toThrowError({name:"TypeError",message:"EncodingError U+8DD8"});
expect(() => {ms932Encoder.encode("\u8DD9")}).toThrowError({name:"TypeError",message:"EncodingError U+8DD9"});
expect([...ms932Encoder.encode("跚跛")].join(",")).toBe("230,231,230,234"); // U+8DDA
expect(() => {ms932Encoder.encode("\u8DDC")}).toThrowError({name:"TypeError",message:"EncodingError U+8DDC"});
expect([...ms932Encoder.encode("距")].join(",")).toBe("139,151"); // U+8DDD
expect(() => {ms932Encoder.encode("\u8DDE")}).toThrowError({name:"TypeError",message:"EncodingError U+8DDE"});
expect([...ms932Encoder.encode("跟")].join(",")).toBe("230,238"); // U+8DDF
expect(() => {ms932Encoder.encode("\u8DE0")}).toThrowError({name:"TypeError",message:"EncodingError U+8DE0"});
expect([...ms932Encoder.encode("跡")].join(",")).toBe("144,213"); // U+8DE1
expect(() => {ms932Encoder.encode("\u8DE2")}).toThrowError({name:"TypeError",message:"EncodingError U+8DE2"});
expect([...ms932Encoder.encode("跣")].join(",")).toBe("230,239"); // U+8DE3
expect(() => {ms932Encoder.encode("\u8DE4")}).toThrowError({name:"TypeError",message:"EncodingError U+8DE4"});
expect(() => {ms932Encoder.encode("\u8DE5")}).toThrowError({name:"TypeError",message:"EncodingError U+8DE5"});
expect(() => {ms932Encoder.encode("\u8DE6")}).toThrowError({name:"TypeError",message:"EncodingError U+8DE6"});
expect(() => {ms932Encoder.encode("\u8DE7")}).toThrowError({name:"TypeError",message:"EncodingError U+8DE7"});
expect([...ms932Encoder.encode("跨")].join(",")).toBe("140,215"); // U+8DE8
expect(() => {ms932Encoder.encode("\u8DE9")}).toThrowError({name:"TypeError",message:"EncodingError U+8DE9"});
expect([...ms932Encoder.encode("跪跫")].join(",")).toBe("230,236,230,237"); // U+8DEA
expect(() => {ms932Encoder.encode("\u8DEC")}).toThrowError({name:"TypeError",message:"EncodingError U+8DEC"});
expect(() => {ms932Encoder.encode("\u8DED")}).toThrowError({name:"TypeError",message:"EncodingError U+8DED"});
expect(() => {ms932Encoder.encode("\u8DEE")}).toThrowError({name:"TypeError",message:"EncodingError U+8DEE"});
expect([...ms932Encoder.encode("路")].join(",")).toBe("152,72"); // U+8DEF
expect(() => {ms932Encoder.encode("\u8DF0")}).toThrowError({name:"TypeError",message:"EncodingError U+8DF0"});
expect(() => {ms932Encoder.encode("\u8DF1")}).toThrowError({name:"TypeError",message:"EncodingError U+8DF1"});
expect(() => {ms932Encoder.encode("\u8DF2")}).toThrowError({name:"TypeError",message:"EncodingError U+8DF2"});
expect([...ms932Encoder.encode("跳")].join(",")).toBe("146,181"); // U+8DF3
expect(() => {ms932Encoder.encode("\u8DF4")}).toThrowError({name:"TypeError",message:"EncodingError U+8DF4"});
expect([...ms932Encoder.encode("践")].join(",")).toBe("145,72"); // U+8DF5
expect(() => {ms932Encoder.encode("\u8DF6")}).toThrowError({name:"TypeError",message:"EncodingError U+8DF6"});
expect(() => {ms932Encoder.encode("\u8DF7")}).toThrowError({name:"TypeError",message:"EncodingError U+8DF7"});
expect(() => {ms932Encoder.encode("\u8DF8")}).toThrowError({name:"TypeError",message:"EncodingError U+8DF8"});
expect(() => {ms932Encoder.encode("\u8DF9")}).toThrowError({name:"TypeError",message:"EncodingError U+8DF9"});
expect(() => {ms932Encoder.encode("\u8DFA")}).toThrowError({name:"TypeError",message:"EncodingError U+8DFA"});
expect(() => {ms932Encoder.encode("\u8DFB")}).toThrowError({name:"TypeError",message:"EncodingError U+8DFB"});
expect([...ms932Encoder.encode("跼")].join(",")).toBe("230,240"); // U+8DFC
expect(() => {ms932Encoder.encode("\u8DFD")}).toThrowError({name:"TypeError",message:"EncodingError U+8DFD"});
expect(() => {ms932Encoder.encode("\u8DFE")}).toThrowError({name:"TypeError",message:"EncodingError U+8DFE"});
expect([...ms932Encoder.encode("跿")].join(",")).toBe("230,243"); // U+8DFF
expect(() => {ms932Encoder.encode("\u8E00")}).toThrowError({name:"TypeError",message:"EncodingError U+8E00"});
expect(() => {ms932Encoder.encode("\u8E01")}).toThrowError({name:"TypeError",message:"EncodingError U+8E01"});
expect(() => {ms932Encoder.encode("\u8E02")}).toThrowError({name:"TypeError",message:"EncodingError U+8E02"});
expect(() => {ms932Encoder.encode("\u8E03")}).toThrowError({name:"TypeError",message:"EncodingError U+8E03"});
expect(() => {ms932Encoder.encode("\u8E04")}).toThrowError({name:"TypeError",message:"EncodingError U+8E04"});
expect(() => {ms932Encoder.encode("\u8E05")}).toThrowError({name:"TypeError",message:"EncodingError U+8E05"});
expect(() => {ms932Encoder.encode("\u8E06")}).toThrowError({name:"TypeError",message:"EncodingError U+8E06"});
expect(() => {ms932Encoder.encode("\u8E07")}).toThrowError({name:"TypeError",message:"EncodingError U+8E07"});
expect([...ms932Encoder.encode("踈踉踊")].join(",")).toBe("230,241,230,242,151,120"); // U+8E08
expect(() => {ms932Encoder.encode("\u8E0B")}).toThrowError({name:"TypeError",message:"EncodingError U+8E0B"});
expect(() => {ms932Encoder.encode("\u8E0C")}).toThrowError({name:"TypeError",message:"EncodingError U+8E0C"});
expect(() => {ms932Encoder.encode("\u8E0D")}).toThrowError({name:"TypeError",message:"EncodingError U+8E0D"});
expect(() => {ms932Encoder.encode("\u8E0E")}).toThrowError({name:"TypeError",message:"EncodingError U+8E0E"});
expect([...ms932Encoder.encode("踏踐")].join(",")).toBe("147,165,230,246"); // U+8E0F
expect(() => {ms932Encoder.encode("\u8E11")}).toThrowError({name:"TypeError",message:"EncodingError U+8E11"});
expect(() => {ms932Encoder.encode("\u8E12")}).toThrowError({name:"TypeError",message:"EncodingError U+8E12"});
expect(() => {ms932Encoder.encode("\u8E13")}).toThrowError({name:"TypeError",message:"EncodingError U+8E13"});
expect(() => {ms932Encoder.encode("\u8E14")}).toThrowError({name:"TypeError",message:"EncodingError U+8E14"});
expect(() => {ms932Encoder.encode("\u8E15")}).toThrowError({name:"TypeError",message:"EncodingError U+8E15"});
expect(() => {ms932Encoder.encode("\u8E16")}).toThrowError({name:"TypeError",message:"EncodingError U+8E16"});
expect(() => {ms932Encoder.encode("\u8E17")}).toThrowError({name:"TypeError",message:"EncodingError U+8E17"});
expect(() => {ms932Encoder.encode("\u8E18")}).toThrowError({name:"TypeError",message:"EncodingError U+8E18"});
expect(() => {ms932Encoder.encode("\u8E19")}).toThrowError({name:"TypeError",message:"EncodingError U+8E19"});
expect(() => {ms932Encoder.encode("\u8E1A")}).toThrowError({name:"TypeError",message:"EncodingError U+8E1A"});
expect(() => {ms932Encoder.encode("\u8E1B")}).toThrowError({name:"TypeError",message:"EncodingError U+8E1B"});
expect(() => {ms932Encoder.encode("\u8E1C")}).toThrowError({name:"TypeError",message:"EncodingError U+8E1C"});
expect([...ms932Encoder.encode("踝踞踟")].join(",")).toBe("230,244,230,245,230,247"); // U+8E1D
expect(() => {ms932Encoder.encode("\u8E20")}).toThrowError({name:"TypeError",message:"EncodingError U+8E20"});
expect(() => {ms932Encoder.encode("\u8E21")}).toThrowError({name:"TypeError",message:"EncodingError U+8E21"});
expect(() => {ms932Encoder.encode("\u8E22")}).toThrowError({name:"TypeError",message:"EncodingError U+8E22"});
expect(() => {ms932Encoder.encode("\u8E23")}).toThrowError({name:"TypeError",message:"EncodingError U+8E23"});
expect(() => {ms932Encoder.encode("\u8E24")}).toThrowError({name:"TypeError",message:"EncodingError U+8E24"});
expect(() => {ms932Encoder.encode("\u8E25")}).toThrowError({name:"TypeError",message:"EncodingError U+8E25"});
expect(() => {ms932Encoder.encode("\u8E26")}).toThrowError({name:"TypeError",message:"EncodingError U+8E26"});
expect(() => {ms932Encoder.encode("\u8E27")}).toThrowError({name:"TypeError",message:"EncodingError U+8E27"});
expect(() => {ms932Encoder.encode("\u8E28")}).toThrowError({name:"TypeError",message:"EncodingError U+8E28"});
expect(() => {ms932Encoder.encode("\u8E29")}).toThrowError({name:"TypeError",message:"EncodingError U+8E29"});
expect([...ms932Encoder.encode("踪")].join(",")).toBe("231,72"); // U+8E2A
expect(() => {ms932Encoder.encode("\u8E2B")}).toThrowError({name:"TypeError",message:"EncodingError U+8E2B"});
expect(() => {ms932Encoder.encode("\u8E2C")}).toThrowError({name:"TypeError",message:"EncodingError U+8E2C"});
expect(() => {ms932Encoder.encode("\u8E2D")}).toThrowError({name:"TypeError",message:"EncodingError U+8E2D"});
expect(() => {ms932Encoder.encode("\u8E2E")}).toThrowError({name:"TypeError",message:"EncodingError U+8E2E"});
expect(() => {ms932Encoder.encode("\u8E2F")}).toThrowError({name:"TypeError",message:"EncodingError U+8E2F"});
expect([...ms932Encoder.encode("踰")].join(",")).toBe("230,250"); // U+8E30
expect(() => {ms932Encoder.encode("\u8E31")}).toThrowError({name:"TypeError",message:"EncodingError U+8E31"});
expect(() => {ms932Encoder.encode("\u8E32")}).toThrowError({name:"TypeError",message:"EncodingError U+8E32"});
expect(() => {ms932Encoder.encode("\u8E33")}).toThrowError({name:"TypeError",message:"EncodingError U+8E33"});
expect([...ms932Encoder.encode("踴踵")].join(",")).toBe("230,251,230,249"); // U+8E34
expect(() => {ms932Encoder.encode("\u8E36")}).toThrowError({name:"TypeError",message:"EncodingError U+8E36"});
expect(() => {ms932Encoder.encode("\u8E37")}).toThrowError({name:"TypeError",message:"EncodingError U+8E37"});
expect(() => {ms932Encoder.encode("\u8E38")}).toThrowError({name:"TypeError",message:"EncodingError U+8E38"});
expect(() => {ms932Encoder.encode("\u8E39")}).toThrowError({name:"TypeError",message:"EncodingError U+8E39"});
expect(() => {ms932Encoder.encode("\u8E3A")}).toThrowError({name:"TypeError",message:"EncodingError U+8E3A"});
expect(() => {ms932Encoder.encode("\u8E3B")}).toThrowError({name:"TypeError",message:"EncodingError U+8E3B"});
expect(() => {ms932Encoder.encode("\u8E3C")}).toThrowError({name:"TypeError",message:"EncodingError U+8E3C"});
expect(() => {ms932Encoder.encode("\u8E3D")}).toThrowError({name:"TypeError",message:"EncodingError U+8E3D"});
expect(() => {ms932Encoder.encode("\u8E3E")}).toThrowError({name:"TypeError",message:"EncodingError U+8E3E"});
expect(() => {ms932Encoder.encode("\u8E3F")}).toThrowError({name:"TypeError",message:"EncodingError U+8E3F"});
expect(() => {ms932Encoder.encode("\u8E40")}).toThrowError({name:"TypeError",message:"EncodingError U+8E40"});
expect(() => {ms932Encoder.encode("\u8E41")}).toThrowError({name:"TypeError",message:"EncodingError U+8E41"});
expect([...ms932Encoder.encode("蹂")].join(",")).toBe("230,248"); // U+8E42
expect(() => {ms932Encoder.encode("\u8E43")}).toThrowError({name:"TypeError",message:"EncodingError U+8E43"});
expect([...ms932Encoder.encode("蹄")].join(",")).toBe("146,251"); // U+8E44
expect(() => {ms932Encoder.encode("\u8E45")}).toThrowError({name:"TypeError",message:"EncodingError U+8E45"});
expect(() => {ms932Encoder.encode("\u8E46")}).toThrowError({name:"TypeError",message:"EncodingError U+8E46"});
expect([...ms932Encoder.encode("蹇蹈蹉蹊")].join(",")).toBe("231,64,231,68,231,65,230,252"); // U+8E47
expect(() => {ms932Encoder.encode("\u8E4B")}).toThrowError({name:"TypeError",message:"EncodingError U+8E4B"});
expect([...ms932Encoder.encode("蹌")].join(",")).toBe("231,66"); // U+8E4C
expect(() => {ms932Encoder.encode("\u8E4D")}).toThrowError({name:"TypeError",message:"EncodingError U+8E4D"});
expect(() => {ms932Encoder.encode("\u8E4E")}).toThrowError({name:"TypeError",message:"EncodingError U+8E4E"});
expect(() => {ms932Encoder.encode("\u8E4F")}).toThrowError({name:"TypeError",message:"EncodingError U+8E4F"});
expect([...ms932Encoder.encode("蹐")].join(",")).toBe("231,67"); // U+8E50
expect(() => {ms932Encoder.encode("\u8E51")}).toThrowError({name:"TypeError",message:"EncodingError U+8E51"});
expect(() => {ms932Encoder.encode("\u8E52")}).toThrowError({name:"TypeError",message:"EncodingError U+8E52"});
expect(() => {ms932Encoder.encode("\u8E53")}).toThrowError({name:"TypeError",message:"EncodingError U+8E53"});
expect(() => {ms932Encoder.encode("\u8E54")}).toThrowError({name:"TypeError",message:"EncodingError U+8E54"});
expect([...ms932Encoder.encode("蹕")].join(",")).toBe("231,74"); // U+8E55
expect(() => {ms932Encoder.encode("\u8E56")}).toThrowError({name:"TypeError",message:"EncodingError U+8E56"});
expect(() => {ms932Encoder.encode("\u8E57")}).toThrowError({name:"TypeError",message:"EncodingError U+8E57"});
expect(() => {ms932Encoder.encode("\u8E58")}).toThrowError({name:"TypeError",message:"EncodingError U+8E58"});
expect([...ms932Encoder.encode("蹙")].join(",")).toBe("231,69"); // U+8E59
expect(() => {ms932Encoder.encode("\u8E5A")}).toThrowError({name:"TypeError",message:"EncodingError U+8E5A"});
expect(() => {ms932Encoder.encode("\u8E5B")}).toThrowError({name:"TypeError",message:"EncodingError U+8E5B"});
expect(() => {ms932Encoder.encode("\u8E5C")}).toThrowError({name:"TypeError",message:"EncodingError U+8E5C"});
expect(() => {ms932Encoder.encode("\u8E5D")}).toThrowError({name:"TypeError",message:"EncodingError U+8E5D"});
expect(() => {ms932Encoder.encode("\u8E5E")}).toThrowError({name:"TypeError",message:"EncodingError U+8E5E"});
expect([...ms932Encoder.encode("蹟蹠")].join(",")).toBe("144,214,231,71"); // U+8E5F
expect(() => {ms932Encoder.encode("\u8E61")}).toThrowError({name:"TypeError",message:"EncodingError U+8E61"});
expect(() => {ms932Encoder.encode("\u8E62")}).toThrowError({name:"TypeError",message:"EncodingError U+8E62"});
expect([...ms932Encoder.encode("蹣蹤")].join(",")).toBe("231,73,231,70"); // U+8E63
expect(() => {ms932Encoder.encode("\u8E65")}).toThrowError({name:"TypeError",message:"EncodingError U+8E65"});
expect(() => {ms932Encoder.encode("\u8E66")}).toThrowError({name:"TypeError",message:"EncodingError U+8E66"});
expect(() => {ms932Encoder.encode("\u8E67")}).toThrowError({name:"TypeError",message:"EncodingError U+8E67"});
expect(() => {ms932Encoder.encode("\u8E68")}).toThrowError({name:"TypeError",message:"EncodingError U+8E68"});
expect(() => {ms932Encoder.encode("\u8E69")}).toThrowError({name:"TypeError",message:"EncodingError U+8E69"});
expect(() => {ms932Encoder.encode("\u8E6A")}).toThrowError({name:"TypeError",message:"EncodingError U+8E6A"});
expect(() => {ms932Encoder.encode("\u8E6B")}).toThrowError({name:"TypeError",message:"EncodingError U+8E6B"});
expect(() => {ms932Encoder.encode("\u8E6C")}).toThrowError({name:"TypeError",message:"EncodingError U+8E6C"});
expect(() => {ms932Encoder.encode("\u8E6D")}).toThrowError({name:"TypeError",message:"EncodingError U+8E6D"});
expect(() => {ms932Encoder.encode("\u8E6E")}).toThrowError({name:"TypeError",message:"EncodingError U+8E6E"});
expect(() => {ms932Encoder.encode("\u8E6F")}).toThrowError({name:"TypeError",message:"EncodingError U+8E6F"});
expect(() => {ms932Encoder.encode("\u8E70")}).toThrowError({name:"TypeError",message:"EncodingError U+8E70"});
expect(() => {ms932Encoder.encode("\u8E71")}).toThrowError({name:"TypeError",message:"EncodingError U+8E71"});
expect([...ms932Encoder.encode("蹲")].join(",")).toBe("231,76"); // U+8E72
expect(() => {ms932Encoder.encode("\u8E73")}).toThrowError({name:"TypeError",message:"EncodingError U+8E73"});
expect([...ms932Encoder.encode("蹴")].join(",")).toBe("143,82"); // U+8E74
expect(() => {ms932Encoder.encode("\u8E75")}).toThrowError({name:"TypeError",message:"EncodingError U+8E75"});
expect([...ms932Encoder.encode("蹶")].join(",")).toBe("231,75"); // U+8E76
expect(() => {ms932Encoder.encode("\u8E77")}).toThrowError({name:"TypeError",message:"EncodingError U+8E77"});
expect(() => {ms932Encoder.encode("\u8E78")}).toThrowError({name:"TypeError",message:"EncodingError U+8E78"});
expect(() => {ms932Encoder.encode("\u8E79")}).toThrowError({name:"TypeError",message:"EncodingError U+8E79"});
expect(() => {ms932Encoder.encode("\u8E7A")}).toThrowError({name:"TypeError",message:"EncodingError U+8E7A"});
expect(() => {ms932Encoder.encode("\u8E7B")}).toThrowError({name:"TypeError",message:"EncodingError U+8E7B"});
expect([...ms932Encoder.encode("蹼")].join(",")).toBe("231,77"); // U+8E7C
expect(() => {ms932Encoder.encode("\u8E7D")}).toThrowError({name:"TypeError",message:"EncodingError U+8E7D"});
expect(() => {ms932Encoder.encode("\u8E7E")}).toThrowError({name:"TypeError",message:"EncodingError U+8E7E"});
expect(() => {ms932Encoder.encode("\u8E7F")}).toThrowError({name:"TypeError",message:"EncodingError U+8E7F"});
expect(() => {ms932Encoder.encode("\u8E80")}).toThrowError({name:"TypeError",message:"EncodingError U+8E80"});
expect([...ms932Encoder.encode("躁")].join(",")).toBe("231,78"); // U+8E81
expect(() => {ms932Encoder.encode("\u8E82")}).toThrowError({name:"TypeError",message:"EncodingError U+8E82"});
expect(() => {ms932Encoder.encode("\u8E83")}).toThrowError({name:"TypeError",message:"EncodingError U+8E83"});
expect([...ms932Encoder.encode("躄躅")].join(",")).toBe("231,81,231,80"); // U+8E84
expect(() => {ms932Encoder.encode("\u8E86")}).toThrowError({name:"TypeError",message:"EncodingError U+8E86"});
expect([...ms932Encoder.encode("躇")].join(",")).toBe("231,79"); // U+8E87
expect(() => {ms932Encoder.encode("\u8E88")}).toThrowError({name:"TypeError",message:"EncodingError U+8E88"});
expect(() => {ms932Encoder.encode("\u8E89")}).toThrowError({name:"TypeError",message:"EncodingError U+8E89"});
expect([...ms932Encoder.encode("躊躋")].join(",")).toBe("231,83,231,82"); // U+8E8A
expect(() => {ms932Encoder.encode("\u8E8C")}).toThrowError({name:"TypeError",message:"EncodingError U+8E8C"});
expect([...ms932Encoder.encode("躍")].join(",")).toBe("150,244"); // U+8E8D
expect(() => {ms932Encoder.encode("\u8E8E")}).toThrowError({name:"TypeError",message:"EncodingError U+8E8E"});
expect(() => {ms932Encoder.encode("\u8E8F")}).toThrowError({name:"TypeError",message:"EncodingError U+8E8F"});
expect(() => {ms932Encoder.encode("\u8E90")}).toThrowError({name:"TypeError",message:"EncodingError U+8E90"});
expect([...ms932Encoder.encode("躑")].join(",")).toBe("231,85"); // U+8E91
expect(() => {ms932Encoder.encode("\u8E92")}).toThrowError({name:"TypeError",message:"EncodingError U+8E92"});
expect([...ms932Encoder.encode("躓躔")].join(",")).toBe("231,84,231,86"); // U+8E93
expect(() => {ms932Encoder.encode("\u8E95")}).toThrowError({name:"TypeError",message:"EncodingError U+8E95"});
expect(() => {ms932Encoder.encode("\u8E96")}).toThrowError({name:"TypeError",message:"EncodingError U+8E96"});
expect(() => {ms932Encoder.encode("\u8E97")}).toThrowError({name:"TypeError",message:"EncodingError U+8E97"});
expect(() => {ms932Encoder.encode("\u8E98")}).toThrowError({name:"TypeError",message:"EncodingError U+8E98"});
expect([...ms932Encoder.encode("躙")].join(",")).toBe("231,87"); // U+8E99
expect(() => {ms932Encoder.encode("\u8E9A")}).toThrowError({name:"TypeError",message:"EncodingError U+8E9A"});
expect(() => {ms932Encoder.encode("\u8E9B")}).toThrowError({name:"TypeError",message:"EncodingError U+8E9B"});
expect(() => {ms932Encoder.encode("\u8E9C")}).toThrowError({name:"TypeError",message:"EncodingError U+8E9C"});
expect(() => {ms932Encoder.encode("\u8E9D")}).toThrowError({name:"TypeError",message:"EncodingError U+8E9D"});
expect(() => {ms932Encoder.encode("\u8E9E")}).toThrowError({name:"TypeError",message:"EncodingError U+8E9E"});
expect(() => {ms932Encoder.encode("\u8E9F")}).toThrowError({name:"TypeError",message:"EncodingError U+8E9F"});
expect(() => {ms932Encoder.encode("\u8EA0")}).toThrowError({name:"TypeError",message:"EncodingError U+8EA0"});
expect([...ms932Encoder.encode("躡")].join(",")).toBe("231,89"); // U+8EA1
expect(() => {ms932Encoder.encode("\u8EA2")}).toThrowError({name:"TypeError",message:"EncodingError U+8EA2"});
expect(() => {ms932Encoder.encode("\u8EA3")}).toThrowError({name:"TypeError",message:"EncodingError U+8EA3"});
expect(() => {ms932Encoder.encode("\u8EA4")}).toThrowError({name:"TypeError",message:"EncodingError U+8EA4"});
expect(() => {ms932Encoder.encode("\u8EA5")}).toThrowError({name:"TypeError",message:"EncodingError U+8EA5"});
expect(() => {ms932Encoder.encode("\u8EA6")}).toThrowError({name:"TypeError",message:"EncodingError U+8EA6"});
expect(() => {ms932Encoder.encode("\u8EA7")}).toThrowError({name:"TypeError",message:"EncodingError U+8EA7"});
expect(() => {ms932Encoder.encode("\u8EA8")}).toThrowError({name:"TypeError",message:"EncodingError U+8EA8"});
expect(() => {ms932Encoder.encode("\u8EA9")}).toThrowError({name:"TypeError",message:"EncodingError U+8EA9"});
expect([...ms932Encoder.encode("躪身躬")].join(",")).toBe("231,88,144,103,231,90"); // U+8EAA
expect(() => {ms932Encoder.encode("\u8EAD")}).toThrowError({name:"TypeError",message:"EncodingError U+8EAD"});
expect(() => {ms932Encoder.encode("\u8EAE")}).toThrowError({name:"TypeError",message:"EncodingError U+8EAE"});
expect([...ms932Encoder.encode("躯躰躱")].join(",")).toBe("139,235,231,91,231,93"); // U+8EAF
expect(() => {ms932Encoder.encode("\u8EB2")}).toThrowError({name:"TypeError",message:"EncodingError U+8EB2"});
expect(() => {ms932Encoder.encode("\u8EB3")}).toThrowError({name:"TypeError",message:"EncodingError U+8EB3"});
expect(() => {ms932Encoder.encode("\u8EB4")}).toThrowError({name:"TypeError",message:"EncodingError U+8EB4"});
expect(() => {ms932Encoder.encode("\u8EB5")}).toThrowError({name:"TypeError",message:"EncodingError U+8EB5"});
expect(() => {ms932Encoder.encode("\u8EB6")}).toThrowError({name:"TypeError",message:"EncodingError U+8EB6"});
expect(() => {ms932Encoder.encode("\u8EB7")}).toThrowError({name:"TypeError",message:"EncodingError U+8EB7"});
expect(() => {ms932Encoder.encode("\u8EB8")}).toThrowError({name:"TypeError",message:"EncodingError U+8EB8"});
expect(() => {ms932Encoder.encode("\u8EB9")}).toThrowError({name:"TypeError",message:"EncodingError U+8EB9"});
expect(() => {ms932Encoder.encode("\u8EBA")}).toThrowError({name:"TypeError",message:"EncodingError U+8EBA"});
expect(() => {ms932Encoder.encode("\u8EBB")}).toThrowError({name:"TypeError",message:"EncodingError U+8EBB"});
expect(() => {ms932Encoder.encode("\u8EBC")}).toThrowError({name:"TypeError",message:"EncodingError U+8EBC"});
expect(() => {ms932Encoder.encode("\u8EBD")}).toThrowError({name:"TypeError",message:"EncodingError U+8EBD"});
expect([...ms932Encoder.encode("躾")].join(",")).toBe("231,94"); // U+8EBE
expect(() => {ms932Encoder.encode("\u8EBF")}).toThrowError({name:"TypeError",message:"EncodingError U+8EBF"});
expect(() => {ms932Encoder.encode("\u8EC0")}).toThrowError({name:"TypeError",message:"EncodingError U+8EC0"});
expect(() => {ms932Encoder.encode("\u8EC1")}).toThrowError({name:"TypeError",message:"EncodingError U+8EC1"});
expect(() => {ms932Encoder.encode("\u8EC2")}).toThrowError({name:"TypeError",message:"EncodingError U+8EC2"});
expect(() => {ms932Encoder.encode("\u8EC3")}).toThrowError({name:"TypeError",message:"EncodingError U+8EC3"});
expect(() => {ms932Encoder.encode("\u8EC4")}).toThrowError({name:"TypeError",message:"EncodingError U+8EC4"});
expect([...ms932Encoder.encode("軅軆")].join(",")).toBe("231,95,231,92"); // U+8EC5
expect(() => {ms932Encoder.encode("\u8EC7")}).toThrowError({name:"TypeError",message:"EncodingError U+8EC7"});
expect([...ms932Encoder.encode("軈")].join(",")).toBe("231,96"); // U+8EC8
expect(() => {ms932Encoder.encode("\u8EC9")}).toThrowError({name:"TypeError",message:"EncodingError U+8EC9"});
expect([...ms932Encoder.encode("車軋軌軍")].join(",")).toBe("142,212,231,97,139,79,140,82"); // U+8ECA
expect(() => {ms932Encoder.encode("\u8ECE")}).toThrowError({name:"TypeError",message:"EncodingError U+8ECE"});
expect([...ms932Encoder.encode("軏")].join(",")).toBe("251,178"); // U+8ECF
expect(() => {ms932Encoder.encode("\u8ED0")}).toThrowError({name:"TypeError",message:"EncodingError U+8ED0"});
expect(() => {ms932Encoder.encode("\u8ED1")}).toThrowError({name:"TypeError",message:"EncodingError U+8ED1"});
expect([...ms932Encoder.encode("軒")].join(",")).toBe("140,172"); // U+8ED2
expect(() => {ms932Encoder.encode("\u8ED3")}).toThrowError({name:"TypeError",message:"EncodingError U+8ED3"});
expect(() => {ms932Encoder.encode("\u8ED4")}).toThrowError({name:"TypeError",message:"EncodingError U+8ED4"});
expect(() => {ms932Encoder.encode("\u8ED5")}).toThrowError({name:"TypeError",message:"EncodingError U+8ED5"});
expect(() => {ms932Encoder.encode("\u8ED6")}).toThrowError({name:"TypeError",message:"EncodingError U+8ED6"});
expect(() => {ms932Encoder.encode("\u8ED7")}).toThrowError({name:"TypeError",message:"EncodingError U+8ED7"});
expect(() => {ms932Encoder.encode("\u8ED8")}).toThrowError({name:"TypeError",message:"EncodingError U+8ED8"});
expect(() => {ms932Encoder.encode("\u8ED9")}).toThrowError({name:"TypeError",message:"EncodingError U+8ED9"});
expect(() => {ms932Encoder.encode("\u8EDA")}).toThrowError({name:"TypeError",message:"EncodingError U+8EDA"});
expect([...ms932Encoder.encode("軛")].join(",")).toBe("231,98"); // U+8EDB
expect(() => {ms932Encoder.encode("\u8EDC")}).toThrowError({name:"TypeError",message:"EncodingError U+8EDC"});
expect(() => {ms932Encoder.encode("\u8EDD")}).toThrowError({name:"TypeError",message:"EncodingError U+8EDD"});
expect(() => {ms932Encoder.encode("\u8EDE")}).toThrowError({name:"TypeError",message:"EncodingError U+8EDE"});
expect([...ms932Encoder.encode("軟")].join(",")).toBe("147,238"); // U+8EDF
expect(() => {ms932Encoder.encode("\u8EE0")}).toThrowError({name:"TypeError",message:"EncodingError U+8EE0"});
expect(() => {ms932Encoder.encode("\u8EE1")}).toThrowError({name:"TypeError",message:"EncodingError U+8EE1"});
expect([...ms932Encoder.encode("転軣")].join(",")).toBe("147,93,231,99"); // U+8EE2
expect(() => {ms932Encoder.encode("\u8EE4")}).toThrowError({name:"TypeError",message:"EncodingError U+8EE4"});
expect(() => {ms932Encoder.encode("\u8EE5")}).toThrowError({name:"TypeError",message:"EncodingError U+8EE5"});
expect(() => {ms932Encoder.encode("\u8EE6")}).toThrowError({name:"TypeError",message:"EncodingError U+8EE6"});
expect(() => {ms932Encoder.encode("\u8EE7")}).toThrowError({name:"TypeError",message:"EncodingError U+8EE7"});
expect(() => {ms932Encoder.encode("\u8EE8")}).toThrowError({name:"TypeError",message:"EncodingError U+8EE8"});
expect(() => {ms932Encoder.encode("\u8EE9")}).toThrowError({name:"TypeError",message:"EncodingError U+8EE9"});
expect(() => {ms932Encoder.encode("\u8EEA")}).toThrowError({name:"TypeError",message:"EncodingError U+8EEA"});
expect([...ms932Encoder.encode("軫")].join(",")).toBe("231,102"); // U+8EEB
expect(() => {ms932Encoder.encode("\u8EEC")}).toThrowError({name:"TypeError",message:"EncodingError U+8EEC"});
expect(() => {ms932Encoder.encode("\u8EED")}).toThrowError({name:"TypeError",message:"EncodingError U+8EED"});
expect(() => {ms932Encoder.encode("\u8EEE")}).toThrowError({name:"TypeError",message:"EncodingError U+8EEE"});
expect(() => {ms932Encoder.encode("\u8EEF")}).toThrowError({name:"TypeError",message:"EncodingError U+8EEF"});
expect(() => {ms932Encoder.encode("\u8EF0")}).toThrowError({name:"TypeError",message:"EncodingError U+8EF0"});
expect(() => {ms932Encoder.encode("\u8EF1")}).toThrowError({name:"TypeError",message:"EncodingError U+8EF1"});
expect(() => {ms932Encoder.encode("\u8EF2")}).toThrowError({name:"TypeError",message:"EncodingError U+8EF2"});
expect(() => {ms932Encoder.encode("\u8EF3")}).toThrowError({name:"TypeError",message:"EncodingError U+8EF3"});
expect(() => {ms932Encoder.encode("\u8EF4")}).toThrowError({name:"TypeError",message:"EncodingError U+8EF4"});
expect(() => {ms932Encoder.encode("\u8EF5")}).toThrowError({name:"TypeError",message:"EncodingError U+8EF5"});
expect(() => {ms932Encoder.encode("\u8EF6")}).toThrowError({name:"TypeError",message:"EncodingError U+8EF6"});
expect(() => {ms932Encoder.encode("\u8EF7")}).toThrowError({name:"TypeError",message:"EncodingError U+8EF7"});
expect([...ms932Encoder.encode("軸")].join(",")).toBe("142,178"); // U+8EF8
expect(() => {ms932Encoder.encode("\u8EF9")}).toThrowError({name:"TypeError",message:"EncodingError U+8EF9"});
expect(() => {ms932Encoder.encode("\u8EFA")}).toThrowError({name:"TypeError",message:"EncodingError U+8EFA"});
expect([...ms932Encoder.encode("軻軼軽軾")].join(",")).toBe("231,101,231,100,140,121,231,103"); // U+8EFB
expect(() => {ms932Encoder.encode("\u8EFF")}).toThrowError({name:"TypeError",message:"EncodingError U+8EFF"});
expect(() => {ms932Encoder.encode("\u8F00")}).toThrowError({name:"TypeError",message:"EncodingError U+8F00"});
expect(() => {ms932Encoder.encode("\u8F01")}).toThrowError({name:"TypeError",message:"EncodingError U+8F01"});
expect(() => {ms932Encoder.encode("\u8F02")}).toThrowError({name:"TypeError",message:"EncodingError U+8F02"});
expect([...ms932Encoder.encode("較")].join(",")).toBe("138,114"); // U+8F03
expect(() => {ms932Encoder.encode("\u8F04")}).toThrowError({name:"TypeError",message:"EncodingError U+8F04"});
expect([...ms932Encoder.encode("輅")].join(",")).toBe("231,105"); // U+8F05
expect(() => {ms932Encoder.encode("\u8F06")}).toThrowError({name:"TypeError",message:"EncodingError U+8F06"});
expect(() => {ms932Encoder.encode("\u8F07")}).toThrowError({name:"TypeError",message:"EncodingError U+8F07"});
expect(() => {ms932Encoder.encode("\u8F08")}).toThrowError({name:"TypeError",message:"EncodingError U+8F08"});
expect([...ms932Encoder.encode("載輊")].join(",")).toBe("141,218,231,104"); // U+8F09
expect(() => {ms932Encoder.encode("\u8F0B")}).toThrowError({name:"TypeError",message:"EncodingError U+8F0B"});
expect([...ms932Encoder.encode("輌")].join(",")).toBe("231,113"); // U+8F0C
expect(() => {ms932Encoder.encode("\u8F0D")}).toThrowError({name:"TypeError",message:"EncodingError U+8F0D"});
expect(() => {ms932Encoder.encode("\u8F0E")}).toThrowError({name:"TypeError",message:"EncodingError U+8F0E"});
expect(() => {ms932Encoder.encode("\u8F0F")}).toThrowError({name:"TypeError",message:"EncodingError U+8F0F"});
expect(() => {ms932Encoder.encode("\u8F10")}).toThrowError({name:"TypeError",message:"EncodingError U+8F10"});
expect(() => {ms932Encoder.encode("\u8F11")}).toThrowError({name:"TypeError",message:"EncodingError U+8F11"});
expect([...ms932Encoder.encode("輒輓輔輕")].join(",")).toBe("231,107,231,109,149,227,231,106"); // U+8F12
expect(() => {ms932Encoder.encode("\u8F16")}).toThrowError({name:"TypeError",message:"EncodingError U+8F16"});
expect(() => {ms932Encoder.encode("\u8F17")}).toThrowError({name:"TypeError",message:"EncodingError U+8F17"});
expect(() => {ms932Encoder.encode("\u8F18")}).toThrowError({name:"TypeError",message:"EncodingError U+8F18"});
expect([...ms932Encoder.encode("輙")].join(",")).toBe("231,108"); // U+8F19
expect(() => {ms932Encoder.encode("\u8F1A")}).toThrowError({name:"TypeError",message:"EncodingError U+8F1A"});
expect([...ms932Encoder.encode("輛輜輝")].join(",")).toBe("231,112,231,110,139,80"); // U+8F1B
expect(() => {ms932Encoder.encode("\u8F1E")}).toThrowError({name:"TypeError",message:"EncodingError U+8F1E"});
expect([...ms932Encoder.encode("輟")].join(",")).toBe("231,111"); // U+8F1F
expect(() => {ms932Encoder.encode("\u8F20")}).toThrowError({name:"TypeError",message:"EncodingError U+8F20"});
expect(() => {ms932Encoder.encode("\u8F21")}).toThrowError({name:"TypeError",message:"EncodingError U+8F21"});
expect(() => {ms932Encoder.encode("\u8F22")}).toThrowError({name:"TypeError",message:"EncodingError U+8F22"});
expect(() => {ms932Encoder.encode("\u8F23")}).toThrowError({name:"TypeError",message:"EncodingError U+8F23"});
expect(() => {ms932Encoder.encode("\u8F24")}).toThrowError({name:"TypeError",message:"EncodingError U+8F24"});
expect(() => {ms932Encoder.encode("\u8F25")}).toThrowError({name:"TypeError",message:"EncodingError U+8F25"});
expect([...ms932Encoder.encode("輦")].join(",")).toBe("231,114"); // U+8F26
expect(() => {ms932Encoder.encode("\u8F27")}).toThrowError({name:"TypeError",message:"EncodingError U+8F27"});
expect(() => {ms932Encoder.encode("\u8F28")}).toThrowError({name:"TypeError",message:"EncodingError U+8F28"});
expect([...ms932Encoder.encode("輩輪")].join(",")).toBe("148,121,151,214"); // U+8F29
expect(() => {ms932Encoder.encode("\u8F2B")}).toThrowError({name:"TypeError",message:"EncodingError U+8F2B"});
expect(() => {ms932Encoder.encode("\u8F2C")}).toThrowError({name:"TypeError",message:"EncodingError U+8F2C"});
expect(() => {ms932Encoder.encode("\u8F2D")}).toThrowError({name:"TypeError",message:"EncodingError U+8F2D"});
expect(() => {ms932Encoder.encode("\u8F2E")}).toThrowError({name:"TypeError",message:"EncodingError U+8F2E"});
expect([...ms932Encoder.encode("輯")].join(",")).toBe("143,83"); // U+8F2F
expect(() => {ms932Encoder.encode("\u8F30")}).toThrowError({name:"TypeError",message:"EncodingError U+8F30"});
expect(() => {ms932Encoder.encode("\u8F31")}).toThrowError({name:"TypeError",message:"EncodingError U+8F31"});
expect(() => {ms932Encoder.encode("\u8F32")}).toThrowError({name:"TypeError",message:"EncodingError U+8F32"});
expect([...ms932Encoder.encode("輳")].join(",")).toBe("231,115"); // U+8F33
expect(() => {ms932Encoder.encode("\u8F34")}).toThrowError({name:"TypeError",message:"EncodingError U+8F34"});
expect(() => {ms932Encoder.encode("\u8F35")}).toThrowError({name:"TypeError",message:"EncodingError U+8F35"});
expect(() => {ms932Encoder.encode("\u8F36")}).toThrowError({name:"TypeError",message:"EncodingError U+8F36"});
expect(() => {ms932Encoder.encode("\u8F37")}).toThrowError({name:"TypeError",message:"EncodingError U+8F37"});
expect([...ms932Encoder.encode("輸輹")].join(",")).toBe("151,65,231,117"); // U+8F38
expect(() => {ms932Encoder.encode("\u8F3A")}).toThrowError({name:"TypeError",message:"EncodingError U+8F3A"});
expect([...ms932Encoder.encode("輻")].join(",")).toBe("231,116"); // U+8F3B
expect(() => {ms932Encoder.encode("\u8F3C")}).toThrowError({name:"TypeError",message:"EncodingError U+8F3C"});
expect(() => {ms932Encoder.encode("\u8F3D")}).toThrowError({name:"TypeError",message:"EncodingError U+8F3D"});
expect([...ms932Encoder.encode("輾輿")].join(",")).toBe("231,120,151,96"); // U+8F3E
expect(() => {ms932Encoder.encode("\u8F40")}).toThrowError({name:"TypeError",message:"EncodingError U+8F40"});
expect(() => {ms932Encoder.encode("\u8F41")}).toThrowError({name:"TypeError",message:"EncodingError U+8F41"});
expect([...ms932Encoder.encode("轂")].join(",")).toBe("231,119"); // U+8F42
expect(() => {ms932Encoder.encode("\u8F43")}).toThrowError({name:"TypeError",message:"EncodingError U+8F43"});
expect([...ms932Encoder.encode("轄轅轆")].join(",")).toBe("138,141,231,118,231,123"); // U+8F44
expect(() => {ms932Encoder.encode("\u8F47")}).toThrowError({name:"TypeError",message:"EncodingError U+8F47"});
expect(() => {ms932Encoder.encode("\u8F48")}).toThrowError({name:"TypeError",message:"EncodingError U+8F48"});
expect([...ms932Encoder.encode("轉")].join(",")).toBe("231,122"); // U+8F49
expect(() => {ms932Encoder.encode("\u8F4A")}).toThrowError({name:"TypeError",message:"EncodingError U+8F4A"});
expect(() => {ms932Encoder.encode("\u8F4B")}).toThrowError({name:"TypeError",message:"EncodingError U+8F4B"});
expect([...ms932Encoder.encode("轌轍轎")].join(",")).toBe("231,121,147,81,231,124"); // U+8F4C
expect(() => {ms932Encoder.encode("\u8F4F")}).toThrowError({name:"TypeError",message:"EncodingError U+8F4F"});
expect(() => {ms932Encoder.encode("\u8F50")}).toThrowError({name:"TypeError",message:"EncodingError U+8F50"});
expect(() => {ms932Encoder.encode("\u8F51")}).toThrowError({name:"TypeError",message:"EncodingError U+8F51"});
expect(() => {ms932Encoder.encode("\u8F52")}).toThrowError({name:"TypeError",message:"EncodingError U+8F52"});
expect(() => {ms932Encoder.encode("\u8F53")}).toThrowError({name:"TypeError",message:"EncodingError U+8F53"});
expect(() => {ms932Encoder.encode("\u8F54")}).toThrowError({name:"TypeError",message:"EncodingError U+8F54"});
expect(() => {ms932Encoder.encode("\u8F55")}).toThrowError({name:"TypeError",message:"EncodingError U+8F55"});
expect(() => {ms932Encoder.encode("\u8F56")}).toThrowError({name:"TypeError",message:"EncodingError U+8F56"});
expect([...ms932Encoder.encode("轗")].join(",")).toBe("231,125"); // U+8F57
expect(() => {ms932Encoder.encode("\u8F58")}).toThrowError({name:"TypeError",message:"EncodingError U+8F58"});
expect(() => {ms932Encoder.encode("\u8F59")}).toThrowError({name:"TypeError",message:"EncodingError U+8F59"});
expect(() => {ms932Encoder.encode("\u8F5A")}).toThrowError({name:"TypeError",message:"EncodingError U+8F5A"});
expect(() => {ms932Encoder.encode("\u8F5B")}).toThrowError({name:"TypeError",message:"EncodingError U+8F5B"});
expect([...ms932Encoder.encode("轜")].join(",")).toBe("231,126"); // U+8F5C
expect(() => {ms932Encoder.encode("\u8F5D")}).toThrowError({name:"TypeError",message:"EncodingError U+8F5D"});
expect(() => {ms932Encoder.encode("\u8F5E")}).toThrowError({name:"TypeError",message:"EncodingError U+8F5E"});
expect([...ms932Encoder.encode("轟")].join(",")).toBe("141,140"); // U+8F5F
expect(() => {ms932Encoder.encode("\u8F60")}).toThrowError({name:"TypeError",message:"EncodingError U+8F60"});
expect([...ms932Encoder.encode("轡轢轣轤")].join(",")).toBe("140,68,231,128,231,129,231,130"); // U+8F61
expect(() => {ms932Encoder.encode("\u8F65")}).toThrowError({name:"TypeError",message:"EncodingError U+8F65"});
expect(() => {ms932Encoder.encode("\u8F66")}).toThrowError({name:"TypeError",message:"EncodingError U+8F66"});
expect(() => {ms932Encoder.encode("\u8F67")}).toThrowError({name:"TypeError",message:"EncodingError U+8F67"});
expect(() => {ms932Encoder.encode("\u8F68")}).toThrowError({name:"TypeError",message:"EncodingError U+8F68"});
expect(() => {ms932Encoder.encode("\u8F69")}).toThrowError({name:"TypeError",message:"EncodingError U+8F69"});
expect(() => {ms932Encoder.encode("\u8F6A")}).toThrowError({name:"TypeError",message:"EncodingError U+8F6A"});
expect(() => {ms932Encoder.encode("\u8F6B")}).toThrowError({name:"TypeError",message:"EncodingError U+8F6B"});
expect(() => {ms932Encoder.encode("\u8F6C")}).toThrowError({name:"TypeError",message:"EncodingError U+8F6C"});
expect(() => {ms932Encoder.encode("\u8F6D")}).toThrowError({name:"TypeError",message:"EncodingError U+8F6D"});
expect(() => {ms932Encoder.encode("\u8F6E")}).toThrowError({name:"TypeError",message:"EncodingError U+8F6E"});
expect(() => {ms932Encoder.encode("\u8F6F")}).toThrowError({name:"TypeError",message:"EncodingError U+8F6F"});
expect(() => {ms932Encoder.encode("\u8F70")}).toThrowError({name:"TypeError",message:"EncodingError U+8F70"});
expect(() => {ms932Encoder.encode("\u8F71")}).toThrowError({name:"TypeError",message:"EncodingError U+8F71"});
expect(() => {ms932Encoder.encode("\u8F72")}).toThrowError({name:"TypeError",message:"EncodingError U+8F72"});
expect(() => {ms932Encoder.encode("\u8F73")}).toThrowError({name:"TypeError",message:"EncodingError U+8F73"});
expect(() => {ms932Encoder.encode("\u8F74")}).toThrowError({name:"TypeError",message:"EncodingError U+8F74"});
expect(() => {ms932Encoder.encode("\u8F75")}).toThrowError({name:"TypeError",message:"EncodingError U+8F75"});
expect(() => {ms932Encoder.encode("\u8F76")}).toThrowError({name:"TypeError",message:"EncodingError U+8F76"});
expect(() => {ms932Encoder.encode("\u8F77")}).toThrowError({name:"TypeError",message:"EncodingError U+8F77"});
expect(() => {ms932Encoder.encode("\u8F78")}).toThrowError({name:"TypeError",message:"EncodingError U+8F78"});
expect(() => {ms932Encoder.encode("\u8F79")}).toThrowError({name:"TypeError",message:"EncodingError U+8F79"});
expect(() => {ms932Encoder.encode("\u8F7A")}).toThrowError({name:"TypeError",message:"EncodingError U+8F7A"});
expect(() => {ms932Encoder.encode("\u8F7B")}).toThrowError({name:"TypeError",message:"EncodingError U+8F7B"});
expect(() => {ms932Encoder.encode("\u8F7C")}).toThrowError({name:"TypeError",message:"EncodingError U+8F7C"});
expect(() => {ms932Encoder.encode("\u8F7D")}).toThrowError({name:"TypeError",message:"EncodingError U+8F7D"});
expect(() => {ms932Encoder.encode("\u8F7E")}).toThrowError({name:"TypeError",message:"EncodingError U+8F7E"});
expect(() => {ms932Encoder.encode("\u8F7F")}).toThrowError({name:"TypeError",message:"EncodingError U+8F7F"});
expect(() => {ms932Encoder.encode("\u8F80")}).toThrowError({name:"TypeError",message:"EncodingError U+8F80"});
expect(() => {ms932Encoder.encode("\u8F81")}).toThrowError({name:"TypeError",message:"EncodingError U+8F81"});
expect(() => {ms932Encoder.encode("\u8F82")}).toThrowError({name:"TypeError",message:"EncodingError U+8F82"});
expect(() => {ms932Encoder.encode("\u8F83")}).toThrowError({name:"TypeError",message:"EncodingError U+8F83"});
expect(() => {ms932Encoder.encode("\u8F84")}).toThrowError({name:"TypeError",message:"EncodingError U+8F84"});
expect(() => {ms932Encoder.encode("\u8F85")}).toThrowError({name:"TypeError",message:"EncodingError U+8F85"});
expect(() => {ms932Encoder.encode("\u8F86")}).toThrowError({name:"TypeError",message:"EncodingError U+8F86"});
expect(() => {ms932Encoder.encode("\u8F87")}).toThrowError({name:"TypeError",message:"EncodingError U+8F87"});
expect(() => {ms932Encoder.encode("\u8F88")}).toThrowError({name:"TypeError",message:"EncodingError U+8F88"});
expect(() => {ms932Encoder.encode("\u8F89")}).toThrowError({name:"TypeError",message:"EncodingError U+8F89"});
expect(() => {ms932Encoder.encode("\u8F8A")}).toThrowError({name:"TypeError",message:"EncodingError U+8F8A"});
expect(() => {ms932Encoder.encode("\u8F8B")}).toThrowError({name:"TypeError",message:"EncodingError U+8F8B"});
expect(() => {ms932Encoder.encode("\u8F8C")}).toThrowError({name:"TypeError",message:"EncodingError U+8F8C"});
expect(() => {ms932Encoder.encode("\u8F8D")}).toThrowError({name:"TypeError",message:"EncodingError U+8F8D"});
expect(() => {ms932Encoder.encode("\u8F8E")}).toThrowError({name:"TypeError",message:"EncodingError U+8F8E"});
expect(() => {ms932Encoder.encode("\u8F8F")}).toThrowError({name:"TypeError",message:"EncodingError U+8F8F"});
expect(() => {ms932Encoder.encode("\u8F90")}).toThrowError({name:"TypeError",message:"EncodingError U+8F90"});
expect(() => {ms932Encoder.encode("\u8F91")}).toThrowError({name:"TypeError",message:"EncodingError U+8F91"});
expect(() => {ms932Encoder.encode("\u8F92")}).toThrowError({name:"TypeError",message:"EncodingError U+8F92"});
expect(() => {ms932Encoder.encode("\u8F93")}).toThrowError({name:"TypeError",message:"EncodingError U+8F93"});
expect(() => {ms932Encoder.encode("\u8F94")}).toThrowError({name:"TypeError",message:"EncodingError U+8F94"});
expect(() => {ms932Encoder.encode("\u8F95")}).toThrowError({name:"TypeError",message:"EncodingError U+8F95"});
expect(() => {ms932Encoder.encode("\u8F96")}).toThrowError({name:"TypeError",message:"EncodingError U+8F96"});
expect(() => {ms932Encoder.encode("\u8F97")}).toThrowError({name:"TypeError",message:"EncodingError U+8F97"});
expect(() => {ms932Encoder.encode("\u8F98")}).toThrowError({name:"TypeError",message:"EncodingError U+8F98"});
expect(() => {ms932Encoder.encode("\u8F99")}).toThrowError({name:"TypeError",message:"EncodingError U+8F99"});
expect(() => {ms932Encoder.encode("\u8F9A")}).toThrowError({name:"TypeError",message:"EncodingError U+8F9A"});
expect([...ms932Encoder.encode("辛辜")].join(",")).toBe("144,104,231,131"); // U+8F9B
expect(() => {ms932Encoder.encode("\u8F9D")}).toThrowError({name:"TypeError",message:"EncodingError U+8F9D"});
expect([...ms932Encoder.encode("辞辟")].join(",")).toBe("142,171,231,132"); // U+8F9E
expect(() => {ms932Encoder.encode("\u8FA0")}).toThrowError({name:"TypeError",message:"EncodingError U+8FA0"});
expect(() => {ms932Encoder.encode("\u8FA1")}).toThrowError({name:"TypeError",message:"EncodingError U+8FA1"});
expect(() => {ms932Encoder.encode("\u8FA2")}).toThrowError({name:"TypeError",message:"EncodingError U+8FA2"});
expect([...ms932Encoder.encode("辣")].join(",")).toBe("231,133"); // U+8FA3
expect(() => {ms932Encoder.encode("\u8FA4")}).toThrowError({name:"TypeError",message:"EncodingError U+8FA4"});
expect(() => {ms932Encoder.encode("\u8FA5")}).toThrowError({name:"TypeError",message:"EncodingError U+8FA5"});
expect(() => {ms932Encoder.encode("\u8FA6")}).toThrowError({name:"TypeError",message:"EncodingError U+8FA6"});
expect([...ms932Encoder.encode("辧辨")].join(",")).toBe("153,159,153,158"); // U+8FA7
expect(() => {ms932Encoder.encode("\u8FA9")}).toThrowError({name:"TypeError",message:"EncodingError U+8FA9"});
expect(() => {ms932Encoder.encode("\u8FAA")}).toThrowError({name:"TypeError",message:"EncodingError U+8FAA"});
expect(() => {ms932Encoder.encode("\u8FAB")}).toThrowError({name:"TypeError",message:"EncodingError U+8FAB"});
expect(() => {ms932Encoder.encode("\u8FAC")}).toThrowError({name:"TypeError",message:"EncodingError U+8FAC"});
expect([...ms932Encoder.encode("辭辮辯辰辱農")].join(",")).toBe("231,134,227,144,231,135,146,67,144,74,148,95"); // U+8FAD
expect(() => {ms932Encoder.encode("\u8FB3")}).toThrowError({name:"TypeError",message:"EncodingError U+8FB3"});
expect(() => {ms932Encoder.encode("\u8FB4")}).toThrowError({name:"TypeError",message:"EncodingError U+8FB4"});
expect(() => {ms932Encoder.encode("\u8FB5")}).toThrowError({name:"TypeError",message:"EncodingError U+8FB5"});
expect(() => {ms932Encoder.encode("\u8FB6")}).toThrowError({name:"TypeError",message:"EncodingError U+8FB6"});
expect([...ms932Encoder.encode("辷")].join(",")).toBe("231,136"); // U+8FB7
expect(() => {ms932Encoder.encode("\u8FB8")}).toThrowError({name:"TypeError",message:"EncodingError U+8FB8"});
expect(() => {ms932Encoder.encode("\u8FB9")}).toThrowError({name:"TypeError",message:"EncodingError U+8FB9"});
expect([...ms932Encoder.encode("辺辻込")].join(",")).toBe("149,211,146,210,141,158"); // U+8FBA
expect(() => {ms932Encoder.encode("\u8FBD")}).toThrowError({name:"TypeError",message:"EncodingError U+8FBD"});
expect(() => {ms932Encoder.encode("\u8FBE")}).toThrowError({name:"TypeError",message:"EncodingError U+8FBE"});
expect([...ms932Encoder.encode("辿")].join(",")).toBe("146,72"); // U+8FBF
expect(() => {ms932Encoder.encode("\u8FC0")}).toThrowError({name:"TypeError",message:"EncodingError U+8FC0"});
expect(() => {ms932Encoder.encode("\u8FC1")}).toThrowError({name:"TypeError",message:"EncodingError U+8FC1"});
expect([...ms932Encoder.encode("迂")].join(",")).toBe("137,73"); // U+8FC2
expect(() => {ms932Encoder.encode("\u8FC3")}).toThrowError({name:"TypeError",message:"EncodingError U+8FC3"});
expect([...ms932Encoder.encode("迄迅")].join(",")).toBe("150,152,144,118"); // U+8FC4
expect(() => {ms932Encoder.encode("\u8FC6")}).toThrowError({name:"TypeError",message:"EncodingError U+8FC6"});
expect(() => {ms932Encoder.encode("\u8FC7")}).toThrowError({name:"TypeError",message:"EncodingError U+8FC7"});
expect(() => {ms932Encoder.encode("\u8FC8")}).toThrowError({name:"TypeError",message:"EncodingError U+8FC8"});
expect(() => {ms932Encoder.encode("\u8FC9")}).toThrowError({name:"TypeError",message:"EncodingError U+8FC9"});
expect(() => {ms932Encoder.encode("\u8FCA")}).toThrowError({name:"TypeError",message:"EncodingError U+8FCA"});
expect(() => {ms932Encoder.encode("\u8FCB")}).toThrowError({name:"TypeError",message:"EncodingError U+8FCB"});
expect(() => {ms932Encoder.encode("\u8FCC")}).toThrowError({name:"TypeError",message:"EncodingError U+8FCC"});
expect(() => {ms932Encoder.encode("\u8FCD")}).toThrowError({name:"TypeError",message:"EncodingError U+8FCD"});
expect([...ms932Encoder.encode("迎")].join(",")).toBe("140,125"); // U+8FCE
expect(() => {ms932Encoder.encode("\u8FCF")}).toThrowError({name:"TypeError",message:"EncodingError U+8FCF"});
expect(() => {ms932Encoder.encode("\u8FD0")}).toThrowError({name:"TypeError",message:"EncodingError U+8FD0"});
expect([...ms932Encoder.encode("近")].join(",")).toBe("139,223"); // U+8FD1
expect(() => {ms932Encoder.encode("\u8FD2")}).toThrowError({name:"TypeError",message:"EncodingError U+8FD2"});
expect(() => {ms932Encoder.encode("\u8FD3")}).toThrowError({name:"TypeError",message:"EncodingError U+8FD3"});
expect([...ms932Encoder.encode("返")].join(",")).toBe("149,212"); // U+8FD4
expect(() => {ms932Encoder.encode("\u8FD5")}).toThrowError({name:"TypeError",message:"EncodingError U+8FD5"});
expect(() => {ms932Encoder.encode("\u8FD6")}).toThrowError({name:"TypeError",message:"EncodingError U+8FD6"});
expect(() => {ms932Encoder.encode("\u8FD7")}).toThrowError({name:"TypeError",message:"EncodingError U+8FD7"});
expect(() => {ms932Encoder.encode("\u8FD8")}).toThrowError({name:"TypeError",message:"EncodingError U+8FD8"});
expect(() => {ms932Encoder.encode("\u8FD9")}).toThrowError({name:"TypeError",message:"EncodingError U+8FD9"});
expect([...ms932Encoder.encode("迚")].join(",")).toBe("231,137"); // U+8FDA
expect(() => {ms932Encoder.encode("\u8FDB")}).toThrowError({name:"TypeError",message:"EncodingError U+8FDB"});
expect(() => {ms932Encoder.encode("\u8FDC")}).toThrowError({name:"TypeError",message:"EncodingError U+8FDC"});
expect(() => {ms932Encoder.encode("\u8FDD")}).toThrowError({name:"TypeError",message:"EncodingError U+8FDD"});
expect(() => {ms932Encoder.encode("\u8FDE")}).toThrowError({name:"TypeError",message:"EncodingError U+8FDE"});
expect(() => {ms932Encoder.encode("\u8FDF")}).toThrowError({name:"TypeError",message:"EncodingError U+8FDF"});
expect(() => {ms932Encoder.encode("\u8FE0")}).toThrowError({name:"TypeError",message:"EncodingError U+8FE0"});
expect(() => {ms932Encoder.encode("\u8FE1")}).toThrowError({name:"TypeError",message:"EncodingError U+8FE1"});
expect([...ms932Encoder.encode("迢")].join(",")).toBe("231,139"); // U+8FE2
expect(() => {ms932Encoder.encode("\u8FE3")}).toThrowError({name:"TypeError",message:"EncodingError U+8FE3"});
expect(() => {ms932Encoder.encode("\u8FE4")}).toThrowError({name:"TypeError",message:"EncodingError U+8FE4"});
expect([...ms932Encoder.encode("迥迦")].join(",")).toBe("231,138,137,222"); // U+8FE5
expect(() => {ms932Encoder.encode("\u8FE7")}).toThrowError({name:"TypeError",message:"EncodingError U+8FE7"});
expect(() => {ms932Encoder.encode("\u8FE8")}).toThrowError({name:"TypeError",message:"EncodingError U+8FE8"});
expect([...ms932Encoder.encode("迩迪迫")].join(",")).toBe("147,244,231,140,148,151"); // U+8FE9
expect(() => {ms932Encoder.encode("\u8FEC")}).toThrowError({name:"TypeError",message:"EncodingError U+8FEC"});
expect([...ms932Encoder.encode("迭")].join(",")).toBe("147,82"); // U+8FED
expect(() => {ms932Encoder.encode("\u8FEE")}).toThrowError({name:"TypeError",message:"EncodingError U+8FEE"});
expect([...ms932Encoder.encode("迯述")].join(",")).toBe("231,141,143,113"); // U+8FEF
expect(() => {ms932Encoder.encode("\u8FF1")}).toThrowError({name:"TypeError",message:"EncodingError U+8FF1"});
expect(() => {ms932Encoder.encode("\u8FF2")}).toThrowError({name:"TypeError",message:"EncodingError U+8FF2"});
expect(() => {ms932Encoder.encode("\u8FF3")}).toThrowError({name:"TypeError",message:"EncodingError U+8FF3"});
expect([...ms932Encoder.encode("迴")].join(",")).toBe("231,143"); // U+8FF4
expect(() => {ms932Encoder.encode("\u8FF5")}).toThrowError({name:"TypeError",message:"EncodingError U+8FF5"});
expect(() => {ms932Encoder.encode("\u8FF6")}).toThrowError({name:"TypeError",message:"EncodingError U+8FF6"});
expect([...ms932Encoder.encode("迷迸迹迺")].join(",")).toBe("150,192,231,158,231,145,231,146"); // U+8FF7
expect(() => {ms932Encoder.encode("\u8FFB")}).toThrowError({name:"TypeError",message:"EncodingError U+8FFB"});
expect(() => {ms932Encoder.encode("\u8FFC")}).toThrowError({name:"TypeError",message:"EncodingError U+8FFC"});
expect([...ms932Encoder.encode("追")].join(",")).toBe("146,199"); // U+8FFD
expect(() => {ms932Encoder.encode("\u8FFE")}).toThrowError({name:"TypeError",message:"EncodingError U+8FFE"});
expect(() => {ms932Encoder.encode("\u8FFF")}).toThrowError({name:"TypeError",message:"EncodingError U+8FFF"});

  });

});
