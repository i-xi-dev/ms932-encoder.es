import assert from "node:assert";
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 8", () => {

  it("encode(string) - U+7800-U+7BFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u7800")}, {name:"Error",message:"EncodingError U+7800"});
assert.throws(() => {ms932Encoder.encode("\u7801")}, {name:"Error",message:"EncodingError U+7801"});
r = r && ([...ms932Encoder.encode("砂")].join(",") === "141,187"); // U+7802
assert.throws(() => {ms932Encoder.encode("\u7803")}, {name:"Error",message:"EncodingError U+7803"});
assert.throws(() => {ms932Encoder.encode("\u7804")}, {name:"Error",message:"EncodingError U+7804"});
assert.throws(() => {ms932Encoder.encode("\u7805")}, {name:"Error",message:"EncodingError U+7805"});
assert.throws(() => {ms932Encoder.encode("\u7806")}, {name:"Error",message:"EncodingError U+7806"});
assert.throws(() => {ms932Encoder.encode("\u7807")}, {name:"Error",message:"EncodingError U+7807"});
assert.throws(() => {ms932Encoder.encode("\u7808")}, {name:"Error",message:"EncodingError U+7808"});
assert.throws(() => {ms932Encoder.encode("\u7809")}, {name:"Error",message:"EncodingError U+7809"});
assert.throws(() => {ms932Encoder.encode("\u780A")}, {name:"Error",message:"EncodingError U+780A"});
assert.throws(() => {ms932Encoder.encode("\u780B")}, {name:"Error",message:"EncodingError U+780B"});
r = r && ([...ms932Encoder.encode("砌")].join(",") === "225,228"); // U+780C
assert.throws(() => {ms932Encoder.encode("\u780D")}, {name:"Error",message:"EncodingError U+780D"});
assert.throws(() => {ms932Encoder.encode("\u780E")}, {name:"Error",message:"EncodingError U+780E"});
assert.throws(() => {ms932Encoder.encode("\u780F")}, {name:"Error",message:"EncodingError U+780F"});
assert.throws(() => {ms932Encoder.encode("\u7810")}, {name:"Error",message:"EncodingError U+7810"});
assert.throws(() => {ms932Encoder.encode("\u7811")}, {name:"Error",message:"EncodingError U+7811"});
r = r && ([...ms932Encoder.encode("砒")].join(",") === "225,229"); // U+7812
assert.throws(() => {ms932Encoder.encode("\u7813")}, {name:"Error",message:"EncodingError U+7813"});
r = r && ([...ms932Encoder.encode("研砕")].join(",") === "140,164,141,211"); // U+7814
assert.throws(() => {ms932Encoder.encode("\u7816")}, {name:"Error",message:"EncodingError U+7816"});
assert.throws(() => {ms932Encoder.encode("\u7817")}, {name:"Error",message:"EncodingError U+7817"});
assert.throws(() => {ms932Encoder.encode("\u7818")}, {name:"Error",message:"EncodingError U+7818"});
assert.throws(() => {ms932Encoder.encode("\u7819")}, {name:"Error",message:"EncodingError U+7819"});
assert.throws(() => {ms932Encoder.encode("\u781A")}, {name:"Error",message:"EncodingError U+781A"});
assert.throws(() => {ms932Encoder.encode("\u781B")}, {name:"Error",message:"EncodingError U+781B"});
assert.throws(() => {ms932Encoder.encode("\u781C")}, {name:"Error",message:"EncodingError U+781C"});
assert.throws(() => {ms932Encoder.encode("\u781D")}, {name:"Error",message:"EncodingError U+781D"});
assert.throws(() => {ms932Encoder.encode("\u781E")}, {name:"Error",message:"EncodingError U+781E"});
assert.throws(() => {ms932Encoder.encode("\u781F")}, {name:"Error",message:"EncodingError U+781F"});
r = r && ([...ms932Encoder.encode("砠砡")].join(",") === "225,231,251,120"); // U+7820
assert.throws(() => {ms932Encoder.encode("\u7822")}, {name:"Error",message:"EncodingError U+7822"});
assert.throws(() => {ms932Encoder.encode("\u7823")}, {name:"Error",message:"EncodingError U+7823"});
assert.throws(() => {ms932Encoder.encode("\u7824")}, {name:"Error",message:"EncodingError U+7824"});
r = r && ([...ms932Encoder.encode("砥砦砧")].join(",") === "147,117,141,212,139,109"); // U+7825
assert.throws(() => {ms932Encoder.encode("\u7828")}, {name:"Error",message:"EncodingError U+7828"});
assert.throws(() => {ms932Encoder.encode("\u7829")}, {name:"Error",message:"EncodingError U+7829"});
assert.throws(() => {ms932Encoder.encode("\u782A")}, {name:"Error",message:"EncodingError U+782A"});
assert.throws(() => {ms932Encoder.encode("\u782B")}, {name:"Error",message:"EncodingError U+782B"});
assert.throws(() => {ms932Encoder.encode("\u782C")}, {name:"Error",message:"EncodingError U+782C"});
assert.throws(() => {ms932Encoder.encode("\u782D")}, {name:"Error",message:"EncodingError U+782D"});
assert.throws(() => {ms932Encoder.encode("\u782E")}, {name:"Error",message:"EncodingError U+782E"});
assert.throws(() => {ms932Encoder.encode("\u782F")}, {name:"Error",message:"EncodingError U+782F"});
assert.throws(() => {ms932Encoder.encode("\u7830")}, {name:"Error",message:"EncodingError U+7830"});
assert.throws(() => {ms932Encoder.encode("\u7831")}, {name:"Error",message:"EncodingError U+7831"});
r = r && ([...ms932Encoder.encode("砲")].join(",") === "150,67"); // U+7832
assert.throws(() => {ms932Encoder.encode("\u7833")}, {name:"Error",message:"EncodingError U+7833"});
r = r && ([...ms932Encoder.encode("破")].join(",") === "148,106"); // U+7834
assert.throws(() => {ms932Encoder.encode("\u7835")}, {name:"Error",message:"EncodingError U+7835"});
assert.throws(() => {ms932Encoder.encode("\u7836")}, {name:"Error",message:"EncodingError U+7836"});
assert.throws(() => {ms932Encoder.encode("\u7837")}, {name:"Error",message:"EncodingError U+7837"});
assert.throws(() => {ms932Encoder.encode("\u7838")}, {name:"Error",message:"EncodingError U+7838"});
assert.throws(() => {ms932Encoder.encode("\u7839")}, {name:"Error",message:"EncodingError U+7839"});
r = r && ([...ms932Encoder.encode("砺")].join(",") === "147,118"); // U+783A
assert.throws(() => {ms932Encoder.encode("\u783B")}, {name:"Error",message:"EncodingError U+783B"});
assert.throws(() => {ms932Encoder.encode("\u783C")}, {name:"Error",message:"EncodingError U+783C"});
assert.throws(() => {ms932Encoder.encode("\u783D")}, {name:"Error",message:"EncodingError U+783D"});
assert.throws(() => {ms932Encoder.encode("\u783E")}, {name:"Error",message:"EncodingError U+783E"});
r = r && ([...ms932Encoder.encode("砿")].join(",") === "141,123"); // U+783F
assert.throws(() => {ms932Encoder.encode("\u7840")}, {name:"Error",message:"EncodingError U+7840"});
assert.throws(() => {ms932Encoder.encode("\u7841")}, {name:"Error",message:"EncodingError U+7841"});
assert.throws(() => {ms932Encoder.encode("\u7842")}, {name:"Error",message:"EncodingError U+7842"});
assert.throws(() => {ms932Encoder.encode("\u7843")}, {name:"Error",message:"EncodingError U+7843"});
assert.throws(() => {ms932Encoder.encode("\u7844")}, {name:"Error",message:"EncodingError U+7844"});
r = r && ([...ms932Encoder.encode("硅")].join(",") === "225,233"); // U+7845
assert.throws(() => {ms932Encoder.encode("\u7846")}, {name:"Error",message:"EncodingError U+7846"});
assert.throws(() => {ms932Encoder.encode("\u7847")}, {name:"Error",message:"EncodingError U+7847"});
assert.throws(() => {ms932Encoder.encode("\u7848")}, {name:"Error",message:"EncodingError U+7848"});
assert.throws(() => {ms932Encoder.encode("\u7849")}, {name:"Error",message:"EncodingError U+7849"});
assert.throws(() => {ms932Encoder.encode("\u784A")}, {name:"Error",message:"EncodingError U+784A"});
assert.throws(() => {ms932Encoder.encode("\u784B")}, {name:"Error",message:"EncodingError U+784B"});
assert.throws(() => {ms932Encoder.encode("\u784C")}, {name:"Error",message:"EncodingError U+784C"});
assert.throws(() => {ms932Encoder.encode("\u784D")}, {name:"Error",message:"EncodingError U+784D"});
r = r && ([...ms932Encoder.encode("硎")].join(",") === "251,121"); // U+784E
assert.throws(() => {ms932Encoder.encode("\u784F")}, {name:"Error",message:"EncodingError U+784F"});
assert.throws(() => {ms932Encoder.encode("\u7850")}, {name:"Error",message:"EncodingError U+7850"});
assert.throws(() => {ms932Encoder.encode("\u7851")}, {name:"Error",message:"EncodingError U+7851"});
assert.throws(() => {ms932Encoder.encode("\u7852")}, {name:"Error",message:"EncodingError U+7852"});
assert.throws(() => {ms932Encoder.encode("\u7853")}, {name:"Error",message:"EncodingError U+7853"});
assert.throws(() => {ms932Encoder.encode("\u7854")}, {name:"Error",message:"EncodingError U+7854"});
assert.throws(() => {ms932Encoder.encode("\u7855")}, {name:"Error",message:"EncodingError U+7855"});
assert.throws(() => {ms932Encoder.encode("\u7856")}, {name:"Error",message:"EncodingError U+7856"});
assert.throws(() => {ms932Encoder.encode("\u7857")}, {name:"Error",message:"EncodingError U+7857"});
assert.throws(() => {ms932Encoder.encode("\u7858")}, {name:"Error",message:"EncodingError U+7858"});
assert.throws(() => {ms932Encoder.encode("\u7859")}, {name:"Error",message:"EncodingError U+7859"});
assert.throws(() => {ms932Encoder.encode("\u785A")}, {name:"Error",message:"EncodingError U+785A"});
assert.throws(() => {ms932Encoder.encode("\u785B")}, {name:"Error",message:"EncodingError U+785B"});
assert.throws(() => {ms932Encoder.encode("\u785C")}, {name:"Error",message:"EncodingError U+785C"});
r = r && ([...ms932Encoder.encode("硝")].join(",") === "143,201"); // U+785D
assert.throws(() => {ms932Encoder.encode("\u785E")}, {name:"Error",message:"EncodingError U+785E"});
assert.throws(() => {ms932Encoder.encode("\u785F")}, {name:"Error",message:"EncodingError U+785F"});
assert.throws(() => {ms932Encoder.encode("\u7860")}, {name:"Error",message:"EncodingError U+7860"});
assert.throws(() => {ms932Encoder.encode("\u7861")}, {name:"Error",message:"EncodingError U+7861"});
assert.throws(() => {ms932Encoder.encode("\u7862")}, {name:"Error",message:"EncodingError U+7862"});
assert.throws(() => {ms932Encoder.encode("\u7863")}, {name:"Error",message:"EncodingError U+7863"});
r = r && ([...ms932Encoder.encode("硤")].join(",") === "251,122"); // U+7864
assert.throws(() => {ms932Encoder.encode("\u7865")}, {name:"Error",message:"EncodingError U+7865"});
assert.throws(() => {ms932Encoder.encode("\u7866")}, {name:"Error",message:"EncodingError U+7866"});
assert.throws(() => {ms932Encoder.encode("\u7867")}, {name:"Error",message:"EncodingError U+7867"});
assert.throws(() => {ms932Encoder.encode("\u7868")}, {name:"Error",message:"EncodingError U+7868"});
assert.throws(() => {ms932Encoder.encode("\u7869")}, {name:"Error",message:"EncodingError U+7869"});
assert.throws(() => {ms932Encoder.encode("\u786A")}, {name:"Error",message:"EncodingError U+786A"});
r = r && ([...ms932Encoder.encode("硫硬")].join(",") === "151,176,141,100"); // U+786B
assert.throws(() => {ms932Encoder.encode("\u786D")}, {name:"Error",message:"EncodingError U+786D"});
assert.throws(() => {ms932Encoder.encode("\u786E")}, {name:"Error",message:"EncodingError U+786E"});
r = r && ([...ms932Encoder.encode("硯")].join(",") === "140,165"); // U+786F
assert.throws(() => {ms932Encoder.encode("\u7870")}, {name:"Error",message:"EncodingError U+7870"});
assert.throws(() => {ms932Encoder.encode("\u7871")}, {name:"Error",message:"EncodingError U+7871"});
r = r && ([...ms932Encoder.encode("硲")].join(",") === "148,161"); // U+7872
assert.throws(() => {ms932Encoder.encode("\u7873")}, {name:"Error",message:"EncodingError U+7873"});
r = r && ([...ms932Encoder.encode("硴")].join(",") === "225,235"); // U+7874
assert.throws(() => {ms932Encoder.encode("\u7875")}, {name:"Error",message:"EncodingError U+7875"});
assert.throws(() => {ms932Encoder.encode("\u7876")}, {name:"Error",message:"EncodingError U+7876"});
assert.throws(() => {ms932Encoder.encode("\u7877")}, {name:"Error",message:"EncodingError U+7877"});
assert.throws(() => {ms932Encoder.encode("\u7878")}, {name:"Error",message:"EncodingError U+7878"});
assert.throws(() => {ms932Encoder.encode("\u7879")}, {name:"Error",message:"EncodingError U+7879"});
r = r && ([...ms932Encoder.encode("硺")].join(",") === "251,123"); // U+787A
assert.throws(() => {ms932Encoder.encode("\u787B")}, {name:"Error",message:"EncodingError U+787B"});
r = r && ([...ms932Encoder.encode("硼")].join(",") === "225,237"); // U+787C
assert.throws(() => {ms932Encoder.encode("\u787D")}, {name:"Error",message:"EncodingError U+787D"});
assert.throws(() => {ms932Encoder.encode("\u787E")}, {name:"Error",message:"EncodingError U+787E"});
assert.throws(() => {ms932Encoder.encode("\u787F")}, {name:"Error",message:"EncodingError U+787F"});
assert.throws(() => {ms932Encoder.encode("\u7880")}, {name:"Error",message:"EncodingError U+7880"});
r = r && ([...ms932Encoder.encode("碁")].join(",") === "140,233"); // U+7881
assert.throws(() => {ms932Encoder.encode("\u7882")}, {name:"Error",message:"EncodingError U+7882"});
assert.throws(() => {ms932Encoder.encode("\u7883")}, {name:"Error",message:"EncodingError U+7883"});
assert.throws(() => {ms932Encoder.encode("\u7884")}, {name:"Error",message:"EncodingError U+7884"});
assert.throws(() => {ms932Encoder.encode("\u7885")}, {name:"Error",message:"EncodingError U+7885"});
r = r && ([...ms932Encoder.encode("碆碇")].join(",") === "225,236,146,244"); // U+7886
assert.throws(() => {ms932Encoder.encode("\u7888")}, {name:"Error",message:"EncodingError U+7888"});
assert.throws(() => {ms932Encoder.encode("\u7889")}, {name:"Error",message:"EncodingError U+7889"});
assert.throws(() => {ms932Encoder.encode("\u788A")}, {name:"Error",message:"EncodingError U+788A"});
assert.throws(() => {ms932Encoder.encode("\u788B")}, {name:"Error",message:"EncodingError U+788B"});
r = r && ([...ms932Encoder.encode("碌碍碎")].join(",") === "225,239,138,86,225,234"); // U+788C
assert.throws(() => {ms932Encoder.encode("\u788F")}, {name:"Error",message:"EncodingError U+788F"});
assert.throws(() => {ms932Encoder.encode("\u7890")}, {name:"Error",message:"EncodingError U+7890"});
r = r && ([...ms932Encoder.encode("碑")].join(",") === "148,232"); // U+7891
assert.throws(() => {ms932Encoder.encode("\u7892")}, {name:"Error",message:"EncodingError U+7892"});
r = r && ([...ms932Encoder.encode("碓")].join(",") === "137,79"); // U+7893
assert.throws(() => {ms932Encoder.encode("\u7894")}, {name:"Error",message:"EncodingError U+7894"});
r = r && ([...ms932Encoder.encode("碕")].join(",") === "141,234"); // U+7895
assert.throws(() => {ms932Encoder.encode("\u7896")}, {name:"Error",message:"EncodingError U+7896"});
r = r && ([...ms932Encoder.encode("碗")].join(",") === "152,113"); // U+7897
assert.throws(() => {ms932Encoder.encode("\u7898")}, {name:"Error",message:"EncodingError U+7898"});
assert.throws(() => {ms932Encoder.encode("\u7899")}, {name:"Error",message:"EncodingError U+7899"});
r = r && ([...ms932Encoder.encode("碚")].join(",") === "225,238"); // U+789A
assert.throws(() => {ms932Encoder.encode("\u789B")}, {name:"Error",message:"EncodingError U+789B"});
assert.throws(() => {ms932Encoder.encode("\u789C")}, {name:"Error",message:"EncodingError U+789C"});
assert.throws(() => {ms932Encoder.encode("\u789D")}, {name:"Error",message:"EncodingError U+789D"});
assert.throws(() => {ms932Encoder.encode("\u789E")}, {name:"Error",message:"EncodingError U+789E"});
assert.throws(() => {ms932Encoder.encode("\u789F")}, {name:"Error",message:"EncodingError U+789F"});
assert.throws(() => {ms932Encoder.encode("\u78A0")}, {name:"Error",message:"EncodingError U+78A0"});
assert.throws(() => {ms932Encoder.encode("\u78A1")}, {name:"Error",message:"EncodingError U+78A1"});
assert.throws(() => {ms932Encoder.encode("\u78A2")}, {name:"Error",message:"EncodingError U+78A2"});
r = r && ([...ms932Encoder.encode("碣")].join(",") === "225,240"); // U+78A3
assert.throws(() => {ms932Encoder.encode("\u78A4")}, {name:"Error",message:"EncodingError U+78A4"});
assert.throws(() => {ms932Encoder.encode("\u78A5")}, {name:"Error",message:"EncodingError U+78A5"});
assert.throws(() => {ms932Encoder.encode("\u78A6")}, {name:"Error",message:"EncodingError U+78A6"});
r = r && ([...ms932Encoder.encode("碧")].join(",") === "149,201"); // U+78A7
assert.throws(() => {ms932Encoder.encode("\u78A8")}, {name:"Error",message:"EncodingError U+78A8"});
r = r && ([...ms932Encoder.encode("碩碪")].join(",") === "144,215,225,242"); // U+78A9
assert.throws(() => {ms932Encoder.encode("\u78AB")}, {name:"Error",message:"EncodingError U+78AB"});
assert.throws(() => {ms932Encoder.encode("\u78AC")}, {name:"Error",message:"EncodingError U+78AC"});
assert.throws(() => {ms932Encoder.encode("\u78AD")}, {name:"Error",message:"EncodingError U+78AD"});
assert.throws(() => {ms932Encoder.encode("\u78AE")}, {name:"Error",message:"EncodingError U+78AE"});
r = r && ([...ms932Encoder.encode("碯")].join(",") === "225,243"); // U+78AF
assert.throws(() => {ms932Encoder.encode("\u78B0")}, {name:"Error",message:"EncodingError U+78B0"});
assert.throws(() => {ms932Encoder.encode("\u78B1")}, {name:"Error",message:"EncodingError U+78B1"});
assert.throws(() => {ms932Encoder.encode("\u78B2")}, {name:"Error",message:"EncodingError U+78B2"});
assert.throws(() => {ms932Encoder.encode("\u78B3")}, {name:"Error",message:"EncodingError U+78B3"});
assert.throws(() => {ms932Encoder.encode("\u78B4")}, {name:"Error",message:"EncodingError U+78B4"});
r = r && ([...ms932Encoder.encode("碵")].join(",") === "225,241"); // U+78B5
assert.throws(() => {ms932Encoder.encode("\u78B6")}, {name:"Error",message:"EncodingError U+78B6"});
assert.throws(() => {ms932Encoder.encode("\u78B7")}, {name:"Error",message:"EncodingError U+78B7"});
assert.throws(() => {ms932Encoder.encode("\u78B8")}, {name:"Error",message:"EncodingError U+78B8"});
assert.throws(() => {ms932Encoder.encode("\u78B9")}, {name:"Error",message:"EncodingError U+78B9"});
r = r && ([...ms932Encoder.encode("確")].join(",") === "138,109"); // U+78BA
assert.throws(() => {ms932Encoder.encode("\u78BB")}, {name:"Error",message:"EncodingError U+78BB"});
r = r && ([...ms932Encoder.encode("碼")].join(",") === "225,249"); // U+78BC
assert.throws(() => {ms932Encoder.encode("\u78BD")}, {name:"Error",message:"EncodingError U+78BD"});
r = r && ([...ms932Encoder.encode("碾")].join(",") === "225,248"); // U+78BE
assert.throws(() => {ms932Encoder.encode("\u78BF")}, {name:"Error",message:"EncodingError U+78BF"});
assert.throws(() => {ms932Encoder.encode("\u78C0")}, {name:"Error",message:"EncodingError U+78C0"});
r = r && ([...ms932Encoder.encode("磁")].join(",") === "142,165"); // U+78C1
assert.throws(() => {ms932Encoder.encode("\u78C2")}, {name:"Error",message:"EncodingError U+78C2"});
assert.throws(() => {ms932Encoder.encode("\u78C3")}, {name:"Error",message:"EncodingError U+78C3"});
assert.throws(() => {ms932Encoder.encode("\u78C4")}, {name:"Error",message:"EncodingError U+78C4"});
r = r && ([...ms932Encoder.encode("磅磆")].join(",") === "225,250,225,245"); // U+78C5
assert.throws(() => {ms932Encoder.encode("\u78C7")}, {name:"Error",message:"EncodingError U+78C7"});
assert.throws(() => {ms932Encoder.encode("\u78C8")}, {name:"Error",message:"EncodingError U+78C8"});
assert.throws(() => {ms932Encoder.encode("\u78C9")}, {name:"Error",message:"EncodingError U+78C9"});
r = r && ([...ms932Encoder.encode("磊磋")].join(",") === "225,251,225,246"); // U+78CA
assert.throws(() => {ms932Encoder.encode("\u78CC")}, {name:"Error",message:"EncodingError U+78CC"});
assert.throws(() => {ms932Encoder.encode("\u78CD")}, {name:"Error",message:"EncodingError U+78CD"});
assert.throws(() => {ms932Encoder.encode("\u78CE")}, {name:"Error",message:"EncodingError U+78CE"});
assert.throws(() => {ms932Encoder.encode("\u78CF")}, {name:"Error",message:"EncodingError U+78CF"});
r = r && ([...ms932Encoder.encode("磐磑")].join(",") === "148,214,225,244"); // U+78D0
assert.throws(() => {ms932Encoder.encode("\u78D2")}, {name:"Error",message:"EncodingError U+78D2"});
assert.throws(() => {ms932Encoder.encode("\u78D3")}, {name:"Error",message:"EncodingError U+78D3"});
r = r && ([...ms932Encoder.encode("磔")].join(",") === "225,247"); // U+78D4
assert.throws(() => {ms932Encoder.encode("\u78D5")}, {name:"Error",message:"EncodingError U+78D5"});
assert.throws(() => {ms932Encoder.encode("\u78D6")}, {name:"Error",message:"EncodingError U+78D6"});
assert.throws(() => {ms932Encoder.encode("\u78D7")}, {name:"Error",message:"EncodingError U+78D7"});
assert.throws(() => {ms932Encoder.encode("\u78D8")}, {name:"Error",message:"EncodingError U+78D8"});
assert.throws(() => {ms932Encoder.encode("\u78D9")}, {name:"Error",message:"EncodingError U+78D9"});
r = r && ([...ms932Encoder.encode("磚")].join(",") === "226,65"); // U+78DA
assert.throws(() => {ms932Encoder.encode("\u78DB")}, {name:"Error",message:"EncodingError U+78DB"});
assert.throws(() => {ms932Encoder.encode("\u78DC")}, {name:"Error",message:"EncodingError U+78DC"});
assert.throws(() => {ms932Encoder.encode("\u78DD")}, {name:"Error",message:"EncodingError U+78DD"});
assert.throws(() => {ms932Encoder.encode("\u78DE")}, {name:"Error",message:"EncodingError U+78DE"});
assert.throws(() => {ms932Encoder.encode("\u78DF")}, {name:"Error",message:"EncodingError U+78DF"});
assert.throws(() => {ms932Encoder.encode("\u78E0")}, {name:"Error",message:"EncodingError U+78E0"});
assert.throws(() => {ms932Encoder.encode("\u78E1")}, {name:"Error",message:"EncodingError U+78E1"});
assert.throws(() => {ms932Encoder.encode("\u78E2")}, {name:"Error",message:"EncodingError U+78E2"});
assert.throws(() => {ms932Encoder.encode("\u78E3")}, {name:"Error",message:"EncodingError U+78E3"});
assert.throws(() => {ms932Encoder.encode("\u78E4")}, {name:"Error",message:"EncodingError U+78E4"});
assert.throws(() => {ms932Encoder.encode("\u78E5")}, {name:"Error",message:"EncodingError U+78E5"});
assert.throws(() => {ms932Encoder.encode("\u78E6")}, {name:"Error",message:"EncodingError U+78E6"});
r = r && ([...ms932Encoder.encode("磧磨")].join(",") === "226,64,150,129"); // U+78E7
assert.throws(() => {ms932Encoder.encode("\u78E9")}, {name:"Error",message:"EncodingError U+78E9"});
assert.throws(() => {ms932Encoder.encode("\u78EA")}, {name:"Error",message:"EncodingError U+78EA"});
assert.throws(() => {ms932Encoder.encode("\u78EB")}, {name:"Error",message:"EncodingError U+78EB"});
r = r && ([...ms932Encoder.encode("磬")].join(",") === "225,252"); // U+78EC
assert.throws(() => {ms932Encoder.encode("\u78ED")}, {name:"Error",message:"EncodingError U+78ED"});
assert.throws(() => {ms932Encoder.encode("\u78EE")}, {name:"Error",message:"EncodingError U+78EE"});
r = r && ([...ms932Encoder.encode("磯")].join(",") === "136,233"); // U+78EF
assert.throws(() => {ms932Encoder.encode("\u78F0")}, {name:"Error",message:"EncodingError U+78F0"});
assert.throws(() => {ms932Encoder.encode("\u78F1")}, {name:"Error",message:"EncodingError U+78F1"});
assert.throws(() => {ms932Encoder.encode("\u78F2")}, {name:"Error",message:"EncodingError U+78F2"});
assert.throws(() => {ms932Encoder.encode("\u78F3")}, {name:"Error",message:"EncodingError U+78F3"});
r = r && ([...ms932Encoder.encode("磴")].join(",") === "226,67"); // U+78F4
assert.throws(() => {ms932Encoder.encode("\u78F5")}, {name:"Error",message:"EncodingError U+78F5"});
assert.throws(() => {ms932Encoder.encode("\u78F6")}, {name:"Error",message:"EncodingError U+78F6"});
assert.throws(() => {ms932Encoder.encode("\u78F7")}, {name:"Error",message:"EncodingError U+78F7"});
assert.throws(() => {ms932Encoder.encode("\u78F8")}, {name:"Error",message:"EncodingError U+78F8"});
assert.throws(() => {ms932Encoder.encode("\u78F9")}, {name:"Error",message:"EncodingError U+78F9"});
assert.throws(() => {ms932Encoder.encode("\u78FA")}, {name:"Error",message:"EncodingError U+78FA"});
assert.throws(() => {ms932Encoder.encode("\u78FB")}, {name:"Error",message:"EncodingError U+78FB"});
assert.throws(() => {ms932Encoder.encode("\u78FC")}, {name:"Error",message:"EncodingError U+78FC"});
r = r && ([...ms932Encoder.encode("磽")].join(",") === "226,66"); // U+78FD
assert.throws(() => {ms932Encoder.encode("\u78FE")}, {name:"Error",message:"EncodingError U+78FE"});
assert.throws(() => {ms932Encoder.encode("\u78FF")}, {name:"Error",message:"EncodingError U+78FF"});
assert.throws(() => {ms932Encoder.encode("\u7900")}, {name:"Error",message:"EncodingError U+7900"});
r = r && ([...ms932Encoder.encode("礁")].join(",") === "143,202"); // U+7901
assert.throws(() => {ms932Encoder.encode("\u7902")}, {name:"Error",message:"EncodingError U+7902"});
assert.throws(() => {ms932Encoder.encode("\u7903")}, {name:"Error",message:"EncodingError U+7903"});
assert.throws(() => {ms932Encoder.encode("\u7904")}, {name:"Error",message:"EncodingError U+7904"});
assert.throws(() => {ms932Encoder.encode("\u7905")}, {name:"Error",message:"EncodingError U+7905"});
assert.throws(() => {ms932Encoder.encode("\u7906")}, {name:"Error",message:"EncodingError U+7906"});
r = r && ([...ms932Encoder.encode("礇")].join(",") === "226,68"); // U+7907
assert.throws(() => {ms932Encoder.encode("\u7908")}, {name:"Error",message:"EncodingError U+7908"});
assert.throws(() => {ms932Encoder.encode("\u7909")}, {name:"Error",message:"EncodingError U+7909"});
assert.throws(() => {ms932Encoder.encode("\u790A")}, {name:"Error",message:"EncodingError U+790A"});
assert.throws(() => {ms932Encoder.encode("\u790B")}, {name:"Error",message:"EncodingError U+790B"});
assert.throws(() => {ms932Encoder.encode("\u790C")}, {name:"Error",message:"EncodingError U+790C"});
assert.throws(() => {ms932Encoder.encode("\u790D")}, {name:"Error",message:"EncodingError U+790D"});
r = r && ([...ms932Encoder.encode("礎")].join(",") === "145,98"); // U+790E
assert.throws(() => {ms932Encoder.encode("\u790F")}, {name:"Error",message:"EncodingError U+790F"});
assert.throws(() => {ms932Encoder.encode("\u7910")}, {name:"Error",message:"EncodingError U+7910"});
r = r && ([...ms932Encoder.encode("礑礒")].join(",") === "226,70,226,69"); // U+7911
assert.throws(() => {ms932Encoder.encode("\u7913")}, {name:"Error",message:"EncodingError U+7913"});
assert.throws(() => {ms932Encoder.encode("\u7914")}, {name:"Error",message:"EncodingError U+7914"});
assert.throws(() => {ms932Encoder.encode("\u7915")}, {name:"Error",message:"EncodingError U+7915"});
assert.throws(() => {ms932Encoder.encode("\u7916")}, {name:"Error",message:"EncodingError U+7916"});
assert.throws(() => {ms932Encoder.encode("\u7917")}, {name:"Error",message:"EncodingError U+7917"});
assert.throws(() => {ms932Encoder.encode("\u7918")}, {name:"Error",message:"EncodingError U+7918"});
r = r && ([...ms932Encoder.encode("礙")].join(",") === "226,71"); // U+7919
assert.throws(() => {ms932Encoder.encode("\u791A")}, {name:"Error",message:"EncodingError U+791A"});
assert.throws(() => {ms932Encoder.encode("\u791B")}, {name:"Error",message:"EncodingError U+791B"});
assert.throws(() => {ms932Encoder.encode("\u791C")}, {name:"Error",message:"EncodingError U+791C"});
assert.throws(() => {ms932Encoder.encode("\u791D")}, {name:"Error",message:"EncodingError U+791D"});
assert.throws(() => {ms932Encoder.encode("\u791E")}, {name:"Error",message:"EncodingError U+791E"});
assert.throws(() => {ms932Encoder.encode("\u791F")}, {name:"Error",message:"EncodingError U+791F"});
assert.throws(() => {ms932Encoder.encode("\u7920")}, {name:"Error",message:"EncodingError U+7920"});
assert.throws(() => {ms932Encoder.encode("\u7921")}, {name:"Error",message:"EncodingError U+7921"});
assert.throws(() => {ms932Encoder.encode("\u7922")}, {name:"Error",message:"EncodingError U+7922"});
assert.throws(() => {ms932Encoder.encode("\u7923")}, {name:"Error",message:"EncodingError U+7923"});
assert.throws(() => {ms932Encoder.encode("\u7924")}, {name:"Error",message:"EncodingError U+7924"});
assert.throws(() => {ms932Encoder.encode("\u7925")}, {name:"Error",message:"EncodingError U+7925"});
r = r && ([...ms932Encoder.encode("礦")].join(",") === "225,230"); // U+7926
assert.throws(() => {ms932Encoder.encode("\u7927")}, {name:"Error",message:"EncodingError U+7927"});
assert.throws(() => {ms932Encoder.encode("\u7928")}, {name:"Error",message:"EncodingError U+7928"});
assert.throws(() => {ms932Encoder.encode("\u7929")}, {name:"Error",message:"EncodingError U+7929"});
r = r && ([...ms932Encoder.encode("礪礫礬")].join(",") === "225,232,226,73,226,72"); // U+792A
assert.throws(() => {ms932Encoder.encode("\u792D")}, {name:"Error",message:"EncodingError U+792D"});
assert.throws(() => {ms932Encoder.encode("\u792E")}, {name:"Error",message:"EncodingError U+792E"});
assert.throws(() => {ms932Encoder.encode("\u792F")}, {name:"Error",message:"EncodingError U+792F"});
r = r && ([...ms932Encoder.encode("礰")].join(",") === "251,124"); // U+7930
assert.throws(() => {ms932Encoder.encode("\u7931")}, {name:"Error",message:"EncodingError U+7931"});
assert.throws(() => {ms932Encoder.encode("\u7932")}, {name:"Error",message:"EncodingError U+7932"});
assert.throws(() => {ms932Encoder.encode("\u7933")}, {name:"Error",message:"EncodingError U+7933"});
assert.throws(() => {ms932Encoder.encode("\u7934")}, {name:"Error",message:"EncodingError U+7934"});
assert.throws(() => {ms932Encoder.encode("\u7935")}, {name:"Error",message:"EncodingError U+7935"});
assert.throws(() => {ms932Encoder.encode("\u7936")}, {name:"Error",message:"EncodingError U+7936"});
assert.throws(() => {ms932Encoder.encode("\u7937")}, {name:"Error",message:"EncodingError U+7937"});
assert.throws(() => {ms932Encoder.encode("\u7938")}, {name:"Error",message:"EncodingError U+7938"});
assert.throws(() => {ms932Encoder.encode("\u7939")}, {name:"Error",message:"EncodingError U+7939"});
r = r && ([...ms932Encoder.encode("示")].join(",") === "142,166"); // U+793A
assert.throws(() => {ms932Encoder.encode("\u793B")}, {name:"Error",message:"EncodingError U+793B"});
r = r && ([...ms932Encoder.encode("礼")].join(",") === "151,231"); // U+793C
assert.throws(() => {ms932Encoder.encode("\u793D")}, {name:"Error",message:"EncodingError U+793D"});
r = r && ([...ms932Encoder.encode("社")].join(",") === "142,208"); // U+793E
assert.throws(() => {ms932Encoder.encode("\u793F")}, {name:"Error",message:"EncodingError U+793F"});
r = r && ([...ms932Encoder.encode("祀祁")].join(",") === "226,74,140,86"); // U+7940
assert.throws(() => {ms932Encoder.encode("\u7942")}, {name:"Error",message:"EncodingError U+7942"});
assert.throws(() => {ms932Encoder.encode("\u7943")}, {name:"Error",message:"EncodingError U+7943"});
assert.throws(() => {ms932Encoder.encode("\u7944")}, {name:"Error",message:"EncodingError U+7944"});
assert.throws(() => {ms932Encoder.encode("\u7945")}, {name:"Error",message:"EncodingError U+7945"});
assert.throws(() => {ms932Encoder.encode("\u7946")}, {name:"Error",message:"EncodingError U+7946"});
r = r && ([...ms932Encoder.encode("祇祈祉")].join(",") === "139,95,139,70,142,131"); // U+7947
assert.throws(() => {ms932Encoder.encode("\u794A")}, {name:"Error",message:"EncodingError U+794A"});
assert.throws(() => {ms932Encoder.encode("\u794B")}, {name:"Error",message:"EncodingError U+794B"});
assert.throws(() => {ms932Encoder.encode("\u794C")}, {name:"Error",message:"EncodingError U+794C"});
assert.throws(() => {ms932Encoder.encode("\u794D")}, {name:"Error",message:"EncodingError U+794D"});
assert.throws(() => {ms932Encoder.encode("\u794E")}, {name:"Error",message:"EncodingError U+794E"});
assert.throws(() => {ms932Encoder.encode("\u794F")}, {name:"Error",message:"EncodingError U+794F"});
r = r && ([...ms932Encoder.encode("祐")].join(",") === "151,83"); // U+7950
assert.throws(() => {ms932Encoder.encode("\u7951")}, {name:"Error",message:"EncodingError U+7951"});
assert.throws(() => {ms932Encoder.encode("\u7952")}, {name:"Error",message:"EncodingError U+7952"});
r = r && ([...ms932Encoder.encode("祓")].join(",") === "226,80"); // U+7953
assert.throws(() => {ms932Encoder.encode("\u7954")}, {name:"Error",message:"EncodingError U+7954"});
r = r && ([...ms932Encoder.encode("祕祖祗")].join(",") === "226,79,145,99,226,76"); // U+7955
assert.throws(() => {ms932Encoder.encode("\u7958")}, {name:"Error",message:"EncodingError U+7958"});
assert.throws(() => {ms932Encoder.encode("\u7959")}, {name:"Error",message:"EncodingError U+7959"});
r = r && ([...ms932Encoder.encode("祚")].join(",") === "226,78"); // U+795A
assert.throws(() => {ms932Encoder.encode("\u795B")}, {name:"Error",message:"EncodingError U+795B"});
assert.throws(() => {ms932Encoder.encode("\u795C")}, {name:"Error",message:"EncodingError U+795C"});
r = r && ([...ms932Encoder.encode("祝神祟祠")].join(",") === "143,106,144,95,226,77,226,75"); // U+795D
assert.throws(() => {ms932Encoder.encode("\u7961")}, {name:"Error",message:"EncodingError U+7961"});
r = r && ([...ms932Encoder.encode("祢")].join(",") === "148,73"); // U+7962
assert.throws(() => {ms932Encoder.encode("\u7963")}, {name:"Error",message:"EncodingError U+7963"});
assert.throws(() => {ms932Encoder.encode("\u7964")}, {name:"Error",message:"EncodingError U+7964"});
r = r && ([...ms932Encoder.encode("祥")].join(",") === "143,203"); // U+7965
assert.throws(() => {ms932Encoder.encode("\u7966")}, {name:"Error",message:"EncodingError U+7966"});
assert.throws(() => {ms932Encoder.encode("\u7967")}, {name:"Error",message:"EncodingError U+7967"});
r = r && ([...ms932Encoder.encode("票")].join(",") === "149,91"); // U+7968
assert.throws(() => {ms932Encoder.encode("\u7969")}, {name:"Error",message:"EncodingError U+7969"});
assert.throws(() => {ms932Encoder.encode("\u796A")}, {name:"Error",message:"EncodingError U+796A"});
assert.throws(() => {ms932Encoder.encode("\u796B")}, {name:"Error",message:"EncodingError U+796B"});
assert.throws(() => {ms932Encoder.encode("\u796C")}, {name:"Error",message:"EncodingError U+796C"});
r = r && ([...ms932Encoder.encode("祭")].join(",") === "141,213"); // U+796D
assert.throws(() => {ms932Encoder.encode("\u796E")}, {name:"Error",message:"EncodingError U+796E"});
assert.throws(() => {ms932Encoder.encode("\u796F")}, {name:"Error",message:"EncodingError U+796F"});
assert.throws(() => {ms932Encoder.encode("\u7970")}, {name:"Error",message:"EncodingError U+7970"});
assert.throws(() => {ms932Encoder.encode("\u7971")}, {name:"Error",message:"EncodingError U+7971"});
assert.throws(() => {ms932Encoder.encode("\u7972")}, {name:"Error",message:"EncodingError U+7972"});
assert.throws(() => {ms932Encoder.encode("\u7973")}, {name:"Error",message:"EncodingError U+7973"});
assert.throws(() => {ms932Encoder.encode("\u7974")}, {name:"Error",message:"EncodingError U+7974"});
assert.throws(() => {ms932Encoder.encode("\u7975")}, {name:"Error",message:"EncodingError U+7975"});
assert.throws(() => {ms932Encoder.encode("\u7976")}, {name:"Error",message:"EncodingError U+7976"});
r = r && ([...ms932Encoder.encode("祷")].join(",") === "147,152"); // U+7977
assert.throws(() => {ms932Encoder.encode("\u7978")}, {name:"Error",message:"EncodingError U+7978"});
assert.throws(() => {ms932Encoder.encode("\u7979")}, {name:"Error",message:"EncodingError U+7979"});
r = r && ([...ms932Encoder.encode("祺")].join(",") === "226,81"); // U+797A
assert.throws(() => {ms932Encoder.encode("\u797B")}, {name:"Error",message:"EncodingError U+797B"});
assert.throws(() => {ms932Encoder.encode("\u797C")}, {name:"Error",message:"EncodingError U+797C"});
assert.throws(() => {ms932Encoder.encode("\u797D")}, {name:"Error",message:"EncodingError U+797D"});
assert.throws(() => {ms932Encoder.encode("\u797E")}, {name:"Error",message:"EncodingError U+797E"});
r = r && ([...ms932Encoder.encode("祿禀禁")].join(",") === "226,82,226,104,139,214"); // U+797F
assert.throws(() => {ms932Encoder.encode("\u7982")}, {name:"Error",message:"EncodingError U+7982"});
assert.throws(() => {ms932Encoder.encode("\u7983")}, {name:"Error",message:"EncodingError U+7983"});
r = r && ([...ms932Encoder.encode("禄禅")].join(",") === "152,92,145,84"); // U+7984
assert.throws(() => {ms932Encoder.encode("\u7986")}, {name:"Error",message:"EncodingError U+7986"});
assert.throws(() => {ms932Encoder.encode("\u7987")}, {name:"Error",message:"EncodingError U+7987"});
assert.throws(() => {ms932Encoder.encode("\u7988")}, {name:"Error",message:"EncodingError U+7988"});
assert.throws(() => {ms932Encoder.encode("\u7989")}, {name:"Error",message:"EncodingError U+7989"});
r = r && ([...ms932Encoder.encode("禊")].join(",") === "226,83"); // U+798A
assert.throws(() => {ms932Encoder.encode("\u798B")}, {name:"Error",message:"EncodingError U+798B"});
assert.throws(() => {ms932Encoder.encode("\u798C")}, {name:"Error",message:"EncodingError U+798C"});
r = r && ([...ms932Encoder.encode("禍禎福")].join(",") === "137,208,146,245,149,159"); // U+798D
assert.throws(() => {ms932Encoder.encode("\u7990")}, {name:"Error",message:"EncodingError U+7990"});
assert.throws(() => {ms932Encoder.encode("\u7991")}, {name:"Error",message:"EncodingError U+7991"});
assert.throws(() => {ms932Encoder.encode("\u7992")}, {name:"Error",message:"EncodingError U+7992"});
assert.throws(() => {ms932Encoder.encode("\u7993")}, {name:"Error",message:"EncodingError U+7993"});
r = r && ([...ms932Encoder.encode("禔")].join(",") === "251,129"); // U+7994
assert.throws(() => {ms932Encoder.encode("\u7995")}, {name:"Error",message:"EncodingError U+7995"});
assert.throws(() => {ms932Encoder.encode("\u7996")}, {name:"Error",message:"EncodingError U+7996"});
assert.throws(() => {ms932Encoder.encode("\u7997")}, {name:"Error",message:"EncodingError U+7997"});
assert.throws(() => {ms932Encoder.encode("\u7998")}, {name:"Error",message:"EncodingError U+7998"});
assert.throws(() => {ms932Encoder.encode("\u7999")}, {name:"Error",message:"EncodingError U+7999"});
assert.throws(() => {ms932Encoder.encode("\u799A")}, {name:"Error",message:"EncodingError U+799A"});
r = r && ([...ms932Encoder.encode("禛")].join(",") === "251,131"); // U+799B
assert.throws(() => {ms932Encoder.encode("\u799C")}, {name:"Error",message:"EncodingError U+799C"});
r = r && ([...ms932Encoder.encode("禝")].join(",") === "226,84"); // U+799D
assert.throws(() => {ms932Encoder.encode("\u799E")}, {name:"Error",message:"EncodingError U+799E"});
assert.throws(() => {ms932Encoder.encode("\u799F")}, {name:"Error",message:"EncodingError U+799F"});
assert.throws(() => {ms932Encoder.encode("\u79A0")}, {name:"Error",message:"EncodingError U+79A0"});
assert.throws(() => {ms932Encoder.encode("\u79A1")}, {name:"Error",message:"EncodingError U+79A1"});
assert.throws(() => {ms932Encoder.encode("\u79A2")}, {name:"Error",message:"EncodingError U+79A2"});
assert.throws(() => {ms932Encoder.encode("\u79A3")}, {name:"Error",message:"EncodingError U+79A3"});
assert.throws(() => {ms932Encoder.encode("\u79A4")}, {name:"Error",message:"EncodingError U+79A4"});
assert.throws(() => {ms932Encoder.encode("\u79A5")}, {name:"Error",message:"EncodingError U+79A5"});
r = r && ([...ms932Encoder.encode("禦禧")].join(",") === "139,154,226,85"); // U+79A6
assert.throws(() => {ms932Encoder.encode("\u79A8")}, {name:"Error",message:"EncodingError U+79A8"});
assert.throws(() => {ms932Encoder.encode("\u79A9")}, {name:"Error",message:"EncodingError U+79A9"});
r = r && ([...ms932Encoder.encode("禪")].join(",") === "226,87"); // U+79AA
assert.throws(() => {ms932Encoder.encode("\u79AB")}, {name:"Error",message:"EncodingError U+79AB"});
assert.throws(() => {ms932Encoder.encode("\u79AC")}, {name:"Error",message:"EncodingError U+79AC"});
assert.throws(() => {ms932Encoder.encode("\u79AD")}, {name:"Error",message:"EncodingError U+79AD"});
r = r && ([...ms932Encoder.encode("禮")].join(",") === "226,88"); // U+79AE
assert.throws(() => {ms932Encoder.encode("\u79AF")}, {name:"Error",message:"EncodingError U+79AF"});
r = r && ([...ms932Encoder.encode("禰")].join(",") === "148,72"); // U+79B0
assert.throws(() => {ms932Encoder.encode("\u79B1")}, {name:"Error",message:"EncodingError U+79B1"});
assert.throws(() => {ms932Encoder.encode("\u79B2")}, {name:"Error",message:"EncodingError U+79B2"});
r = r && ([...ms932Encoder.encode("禳")].join(",") === "226,89"); // U+79B3
assert.throws(() => {ms932Encoder.encode("\u79B4")}, {name:"Error",message:"EncodingError U+79B4"});
assert.throws(() => {ms932Encoder.encode("\u79B5")}, {name:"Error",message:"EncodingError U+79B5"});
assert.throws(() => {ms932Encoder.encode("\u79B6")}, {name:"Error",message:"EncodingError U+79B6"});
assert.throws(() => {ms932Encoder.encode("\u79B7")}, {name:"Error",message:"EncodingError U+79B7"});
assert.throws(() => {ms932Encoder.encode("\u79B8")}, {name:"Error",message:"EncodingError U+79B8"});
r = r && ([...ms932Encoder.encode("禹禺")].join(",") === "226,90,226,91"); // U+79B9
assert.throws(() => {ms932Encoder.encode("\u79BB")}, {name:"Error",message:"EncodingError U+79BB"});
assert.throws(() => {ms932Encoder.encode("\u79BC")}, {name:"Error",message:"EncodingError U+79BC"});
r = r && ([...ms932Encoder.encode("禽禾禿秀私")].join(",") === "139,215,137,209,147,195,143,71,142,132"); // U+79BD
assert.throws(() => {ms932Encoder.encode("\u79C2")}, {name:"Error",message:"EncodingError U+79C2"});
assert.throws(() => {ms932Encoder.encode("\u79C3")}, {name:"Error",message:"EncodingError U+79C3"});
assert.throws(() => {ms932Encoder.encode("\u79C4")}, {name:"Error",message:"EncodingError U+79C4"});
assert.throws(() => {ms932Encoder.encode("\u79C5")}, {name:"Error",message:"EncodingError U+79C5"});
assert.throws(() => {ms932Encoder.encode("\u79C6")}, {name:"Error",message:"EncodingError U+79C6"});
assert.throws(() => {ms932Encoder.encode("\u79C7")}, {name:"Error",message:"EncodingError U+79C7"});
assert.throws(() => {ms932Encoder.encode("\u79C8")}, {name:"Error",message:"EncodingError U+79C8"});
r = r && ([...ms932Encoder.encode("秉")].join(",") === "226,92"); // U+79C9
assert.throws(() => {ms932Encoder.encode("\u79CA")}, {name:"Error",message:"EncodingError U+79CA"});
r = r && ([...ms932Encoder.encode("秋")].join(",") === "143,72"); // U+79CB
assert.throws(() => {ms932Encoder.encode("\u79CC")}, {name:"Error",message:"EncodingError U+79CC"});
assert.throws(() => {ms932Encoder.encode("\u79CD")}, {name:"Error",message:"EncodingError U+79CD"});
assert.throws(() => {ms932Encoder.encode("\u79CE")}, {name:"Error",message:"EncodingError U+79CE"});
assert.throws(() => {ms932Encoder.encode("\u79CF")}, {name:"Error",message:"EncodingError U+79CF"});
assert.throws(() => {ms932Encoder.encode("\u79D0")}, {name:"Error",message:"EncodingError U+79D0"});
r = r && ([...ms932Encoder.encode("科秒")].join(",") === "137,200,149,98"); // U+79D1
assert.throws(() => {ms932Encoder.encode("\u79D3")}, {name:"Error",message:"EncodingError U+79D3"});
assert.throws(() => {ms932Encoder.encode("\u79D4")}, {name:"Error",message:"EncodingError U+79D4"});
r = r && ([...ms932Encoder.encode("秕")].join(",") === "226,93"); // U+79D5
assert.throws(() => {ms932Encoder.encode("\u79D6")}, {name:"Error",message:"EncodingError U+79D6"});
assert.throws(() => {ms932Encoder.encode("\u79D7")}, {name:"Error",message:"EncodingError U+79D7"});
r = r && ([...ms932Encoder.encode("秘")].join(",") === "148,233"); // U+79D8
assert.throws(() => {ms932Encoder.encode("\u79D9")}, {name:"Error",message:"EncodingError U+79D9"});
assert.throws(() => {ms932Encoder.encode("\u79DA")}, {name:"Error",message:"EncodingError U+79DA"});
assert.throws(() => {ms932Encoder.encode("\u79DB")}, {name:"Error",message:"EncodingError U+79DB"});
assert.throws(() => {ms932Encoder.encode("\u79DC")}, {name:"Error",message:"EncodingError U+79DC"});
assert.throws(() => {ms932Encoder.encode("\u79DD")}, {name:"Error",message:"EncodingError U+79DD"});
assert.throws(() => {ms932Encoder.encode("\u79DE")}, {name:"Error",message:"EncodingError U+79DE"});
r = r && ([...ms932Encoder.encode("租")].join(",") === "145,100"); // U+79DF
assert.throws(() => {ms932Encoder.encode("\u79E0")}, {name:"Error",message:"EncodingError U+79E0"});
r = r && ([...ms932Encoder.encode("秡")].join(",") === "226,96"); // U+79E1
assert.throws(() => {ms932Encoder.encode("\u79E2")}, {name:"Error",message:"EncodingError U+79E2"});
r = r && ([...ms932Encoder.encode("秣秤")].join(",") === "226,97,148,137"); // U+79E3
assert.throws(() => {ms932Encoder.encode("\u79E5")}, {name:"Error",message:"EncodingError U+79E5"});
r = r && ([...ms932Encoder.encode("秦秧")].join(",") === "144,96,226,94"); // U+79E6
assert.throws(() => {ms932Encoder.encode("\u79E8")}, {name:"Error",message:"EncodingError U+79E8"});
r = r && ([...ms932Encoder.encode("秩")].join(",") === "146,129"); // U+79E9
assert.throws(() => {ms932Encoder.encode("\u79EA")}, {name:"Error",message:"EncodingError U+79EA"});
assert.throws(() => {ms932Encoder.encode("\u79EB")}, {name:"Error",message:"EncodingError U+79EB"});
r = r && ([...ms932Encoder.encode("秬")].join(",") === "226,95"); // U+79EC
assert.throws(() => {ms932Encoder.encode("\u79ED")}, {name:"Error",message:"EncodingError U+79ED"});
assert.throws(() => {ms932Encoder.encode("\u79EE")}, {name:"Error",message:"EncodingError U+79EE"});
assert.throws(() => {ms932Encoder.encode("\u79EF")}, {name:"Error",message:"EncodingError U+79EF"});
r = r && ([...ms932Encoder.encode("称")].join(",") === "143,204"); // U+79F0
assert.throws(() => {ms932Encoder.encode("\u79F1")}, {name:"Error",message:"EncodingError U+79F1"});
assert.throws(() => {ms932Encoder.encode("\u79F2")}, {name:"Error",message:"EncodingError U+79F2"});
assert.throws(() => {ms932Encoder.encode("\u79F3")}, {name:"Error",message:"EncodingError U+79F3"});
assert.throws(() => {ms932Encoder.encode("\u79F4")}, {name:"Error",message:"EncodingError U+79F4"});
assert.throws(() => {ms932Encoder.encode("\u79F5")}, {name:"Error",message:"EncodingError U+79F5"});
assert.throws(() => {ms932Encoder.encode("\u79F6")}, {name:"Error",message:"EncodingError U+79F6"});
assert.throws(() => {ms932Encoder.encode("\u79F7")}, {name:"Error",message:"EncodingError U+79F7"});
assert.throws(() => {ms932Encoder.encode("\u79F8")}, {name:"Error",message:"EncodingError U+79F8"});
assert.throws(() => {ms932Encoder.encode("\u79F9")}, {name:"Error",message:"EncodingError U+79F9"});
assert.throws(() => {ms932Encoder.encode("\u79FA")}, {name:"Error",message:"EncodingError U+79FA"});
r = r && ([...ms932Encoder.encode("移")].join(",") === "136,218"); // U+79FB
assert.throws(() => {ms932Encoder.encode("\u79FC")}, {name:"Error",message:"EncodingError U+79FC"});
assert.throws(() => {ms932Encoder.encode("\u79FD")}, {name:"Error",message:"EncodingError U+79FD"});
assert.throws(() => {ms932Encoder.encode("\u79FE")}, {name:"Error",message:"EncodingError U+79FE"});
assert.throws(() => {ms932Encoder.encode("\u79FF")}, {name:"Error",message:"EncodingError U+79FF"});
r = r && ([...ms932Encoder.encode("稀")].join(",") === "139,72"); // U+7A00
assert.throws(() => {ms932Encoder.encode("\u7A01")}, {name:"Error",message:"EncodingError U+7A01"});
assert.throws(() => {ms932Encoder.encode("\u7A02")}, {name:"Error",message:"EncodingError U+7A02"});
assert.throws(() => {ms932Encoder.encode("\u7A03")}, {name:"Error",message:"EncodingError U+7A03"});
assert.throws(() => {ms932Encoder.encode("\u7A04")}, {name:"Error",message:"EncodingError U+7A04"});
assert.throws(() => {ms932Encoder.encode("\u7A05")}, {name:"Error",message:"EncodingError U+7A05"});
assert.throws(() => {ms932Encoder.encode("\u7A06")}, {name:"Error",message:"EncodingError U+7A06"});
assert.throws(() => {ms932Encoder.encode("\u7A07")}, {name:"Error",message:"EncodingError U+7A07"});
r = r && ([...ms932Encoder.encode("稈")].join(",") === "226,98"); // U+7A08
assert.throws(() => {ms932Encoder.encode("\u7A09")}, {name:"Error",message:"EncodingError U+7A09"});
assert.throws(() => {ms932Encoder.encode("\u7A0A")}, {name:"Error",message:"EncodingError U+7A0A"});
r = r && ([...ms932Encoder.encode("程")].join(",") === "146,246"); // U+7A0B
assert.throws(() => {ms932Encoder.encode("\u7A0C")}, {name:"Error",message:"EncodingError U+7A0C"});
r = r && ([...ms932Encoder.encode("稍税")].join(",") === "226,99,144,197"); // U+7A0D
assert.throws(() => {ms932Encoder.encode("\u7A0F")}, {name:"Error",message:"EncodingError U+7A0F"});
assert.throws(() => {ms932Encoder.encode("\u7A10")}, {name:"Error",message:"EncodingError U+7A10"});
assert.throws(() => {ms932Encoder.encode("\u7A11")}, {name:"Error",message:"EncodingError U+7A11"});
assert.throws(() => {ms932Encoder.encode("\u7A12")}, {name:"Error",message:"EncodingError U+7A12"});
assert.throws(() => {ms932Encoder.encode("\u7A13")}, {name:"Error",message:"EncodingError U+7A13"});
r = r && ([...ms932Encoder.encode("稔")].join(",") === "150,171"); // U+7A14
assert.throws(() => {ms932Encoder.encode("\u7A15")}, {name:"Error",message:"EncodingError U+7A15"});
assert.throws(() => {ms932Encoder.encode("\u7A16")}, {name:"Error",message:"EncodingError U+7A16"});
r = r && ([...ms932Encoder.encode("稗稘稙稚")].join(",") === "149,66,226,100,226,101,146,116"); // U+7A17
assert.throws(() => {ms932Encoder.encode("\u7A1B")}, {name:"Error",message:"EncodingError U+7A1B"});
r = r && ([...ms932Encoder.encode("稜")].join(",") === "151,197"); // U+7A1C
assert.throws(() => {ms932Encoder.encode("\u7A1D")}, {name:"Error",message:"EncodingError U+7A1D"});
assert.throws(() => {ms932Encoder.encode("\u7A1E")}, {name:"Error",message:"EncodingError U+7A1E"});
r = r && ([...ms932Encoder.encode("稟稠")].join(",") === "226,103,226,102"); // U+7A1F
assert.throws(() => {ms932Encoder.encode("\u7A21")}, {name:"Error",message:"EncodingError U+7A21"});
assert.throws(() => {ms932Encoder.encode("\u7A22")}, {name:"Error",message:"EncodingError U+7A22"});
assert.throws(() => {ms932Encoder.encode("\u7A23")}, {name:"Error",message:"EncodingError U+7A23"});
assert.throws(() => {ms932Encoder.encode("\u7A24")}, {name:"Error",message:"EncodingError U+7A24"});
assert.throws(() => {ms932Encoder.encode("\u7A25")}, {name:"Error",message:"EncodingError U+7A25"});
assert.throws(() => {ms932Encoder.encode("\u7A26")}, {name:"Error",message:"EncodingError U+7A26"});
assert.throws(() => {ms932Encoder.encode("\u7A27")}, {name:"Error",message:"EncodingError U+7A27"});
assert.throws(() => {ms932Encoder.encode("\u7A28")}, {name:"Error",message:"EncodingError U+7A28"});
assert.throws(() => {ms932Encoder.encode("\u7A29")}, {name:"Error",message:"EncodingError U+7A29"});
assert.throws(() => {ms932Encoder.encode("\u7A2A")}, {name:"Error",message:"EncodingError U+7A2A"});
assert.throws(() => {ms932Encoder.encode("\u7A2B")}, {name:"Error",message:"EncodingError U+7A2B"});
assert.throws(() => {ms932Encoder.encode("\u7A2C")}, {name:"Error",message:"EncodingError U+7A2C"});
assert.throws(() => {ms932Encoder.encode("\u7A2D")}, {name:"Error",message:"EncodingError U+7A2D"});
r = r && ([...ms932Encoder.encode("種")].join(",") === "142,237"); // U+7A2E
assert.throws(() => {ms932Encoder.encode("\u7A2F")}, {name:"Error",message:"EncodingError U+7A2F"});
assert.throws(() => {ms932Encoder.encode("\u7A30")}, {name:"Error",message:"EncodingError U+7A30"});
r = r && ([...ms932Encoder.encode("稱稲")].join(",") === "226,105,136,238"); // U+7A31
assert.throws(() => {ms932Encoder.encode("\u7A33")}, {name:"Error",message:"EncodingError U+7A33"});
assert.throws(() => {ms932Encoder.encode("\u7A34")}, {name:"Error",message:"EncodingError U+7A34"});
assert.throws(() => {ms932Encoder.encode("\u7A35")}, {name:"Error",message:"EncodingError U+7A35"});
assert.throws(() => {ms932Encoder.encode("\u7A36")}, {name:"Error",message:"EncodingError U+7A36"});
r = r && ([...ms932Encoder.encode("稷")].join(",") === "226,108"); // U+7A37
assert.throws(() => {ms932Encoder.encode("\u7A38")}, {name:"Error",message:"EncodingError U+7A38"});
assert.throws(() => {ms932Encoder.encode("\u7A39")}, {name:"Error",message:"EncodingError U+7A39"});
assert.throws(() => {ms932Encoder.encode("\u7A3A")}, {name:"Error",message:"EncodingError U+7A3A"});
r = r && ([...ms932Encoder.encode("稻稼稽稾稿穀")].join(",") === "226,106,137,210,140,109,226,107,141,101,141,146"); // U+7A3B
assert.throws(() => {ms932Encoder.encode("\u7A41")}, {name:"Error",message:"EncodingError U+7A41"});
r = r && ([...ms932Encoder.encode("穂穃")].join(",") === "149,228,226,109"); // U+7A42
assert.throws(() => {ms932Encoder.encode("\u7A44")}, {name:"Error",message:"EncodingError U+7A44"});
assert.throws(() => {ms932Encoder.encode("\u7A45")}, {name:"Error",message:"EncodingError U+7A45"});
r = r && ([...ms932Encoder.encode("穆")].join(",") === "150,115"); // U+7A46
assert.throws(() => {ms932Encoder.encode("\u7A47")}, {name:"Error",message:"EncodingError U+7A47"});
assert.throws(() => {ms932Encoder.encode("\u7A48")}, {name:"Error",message:"EncodingError U+7A48"});
r = r && ([...ms932Encoder.encode("穉")].join(",") === "226,111"); // U+7A49
assert.throws(() => {ms932Encoder.encode("\u7A4A")}, {name:"Error",message:"EncodingError U+7A4A"});
assert.throws(() => {ms932Encoder.encode("\u7A4B")}, {name:"Error",message:"EncodingError U+7A4B"});
assert.throws(() => {ms932Encoder.encode("\u7A4C")}, {name:"Error",message:"EncodingError U+7A4C"});
r = r && ([...ms932Encoder.encode("積穎穏穐")].join(",") === "144,207,137,110,137,184,136,170"); // U+7A4D
assert.throws(() => {ms932Encoder.encode("\u7A51")}, {name:"Error",message:"EncodingError U+7A51"});
assert.throws(() => {ms932Encoder.encode("\u7A52")}, {name:"Error",message:"EncodingError U+7A52"});
assert.throws(() => {ms932Encoder.encode("\u7A53")}, {name:"Error",message:"EncodingError U+7A53"});
assert.throws(() => {ms932Encoder.encode("\u7A54")}, {name:"Error",message:"EncodingError U+7A54"});
assert.throws(() => {ms932Encoder.encode("\u7A55")}, {name:"Error",message:"EncodingError U+7A55"});
assert.throws(() => {ms932Encoder.encode("\u7A56")}, {name:"Error",message:"EncodingError U+7A56"});
r = r && ([...ms932Encoder.encode("穗")].join(",") === "226,110"); // U+7A57
assert.throws(() => {ms932Encoder.encode("\u7A58")}, {name:"Error",message:"EncodingError U+7A58"});
assert.throws(() => {ms932Encoder.encode("\u7A59")}, {name:"Error",message:"EncodingError U+7A59"});
assert.throws(() => {ms932Encoder.encode("\u7A5A")}, {name:"Error",message:"EncodingError U+7A5A"});
assert.throws(() => {ms932Encoder.encode("\u7A5B")}, {name:"Error",message:"EncodingError U+7A5B"});
assert.throws(() => {ms932Encoder.encode("\u7A5C")}, {name:"Error",message:"EncodingError U+7A5C"});
assert.throws(() => {ms932Encoder.encode("\u7A5D")}, {name:"Error",message:"EncodingError U+7A5D"});
assert.throws(() => {ms932Encoder.encode("\u7A5E")}, {name:"Error",message:"EncodingError U+7A5E"});
assert.throws(() => {ms932Encoder.encode("\u7A5F")}, {name:"Error",message:"EncodingError U+7A5F"});
assert.throws(() => {ms932Encoder.encode("\u7A60")}, {name:"Error",message:"EncodingError U+7A60"});
r = r && ([...ms932Encoder.encode("穡穢穣")].join(",") === "226,112,226,113,143,245"); // U+7A61
assert.throws(() => {ms932Encoder.encode("\u7A64")}, {name:"Error",message:"EncodingError U+7A64"});
assert.throws(() => {ms932Encoder.encode("\u7A65")}, {name:"Error",message:"EncodingError U+7A65"});
assert.throws(() => {ms932Encoder.encode("\u7A66")}, {name:"Error",message:"EncodingError U+7A66"});
assert.throws(() => {ms932Encoder.encode("\u7A67")}, {name:"Error",message:"EncodingError U+7A67"});
assert.throws(() => {ms932Encoder.encode("\u7A68")}, {name:"Error",message:"EncodingError U+7A68"});
r = r && ([...ms932Encoder.encode("穩")].join(",") === "226,114"); // U+7A69
assert.throws(() => {ms932Encoder.encode("\u7A6A")}, {name:"Error",message:"EncodingError U+7A6A"});
r = r && ([...ms932Encoder.encode("穫")].join(",") === "138,110"); // U+7A6B
assert.throws(() => {ms932Encoder.encode("\u7A6C")}, {name:"Error",message:"EncodingError U+7A6C"});
assert.throws(() => {ms932Encoder.encode("\u7A6D")}, {name:"Error",message:"EncodingError U+7A6D"});
assert.throws(() => {ms932Encoder.encode("\u7A6E")}, {name:"Error",message:"EncodingError U+7A6E"});
assert.throws(() => {ms932Encoder.encode("\u7A6F")}, {name:"Error",message:"EncodingError U+7A6F"});
r = r && ([...ms932Encoder.encode("穰")].join(",") === "226,116"); // U+7A70
assert.throws(() => {ms932Encoder.encode("\u7A71")}, {name:"Error",message:"EncodingError U+7A71"});
assert.throws(() => {ms932Encoder.encode("\u7A72")}, {name:"Error",message:"EncodingError U+7A72"});
assert.throws(() => {ms932Encoder.encode("\u7A73")}, {name:"Error",message:"EncodingError U+7A73"});
r = r && ([...ms932Encoder.encode("穴")].join(",") === "140,138"); // U+7A74
assert.throws(() => {ms932Encoder.encode("\u7A75")}, {name:"Error",message:"EncodingError U+7A75"});
r = r && ([...ms932Encoder.encode("究")].join(",") === "139,134"); // U+7A76
assert.throws(() => {ms932Encoder.encode("\u7A77")}, {name:"Error",message:"EncodingError U+7A77"});
assert.throws(() => {ms932Encoder.encode("\u7A78")}, {name:"Error",message:"EncodingError U+7A78"});
r = r && ([...ms932Encoder.encode("穹空")].join(",") === "226,117,139,243"); // U+7A79
assert.throws(() => {ms932Encoder.encode("\u7A7B")}, {name:"Error",message:"EncodingError U+7A7B"});
assert.throws(() => {ms932Encoder.encode("\u7A7C")}, {name:"Error",message:"EncodingError U+7A7C"});
r = r && ([...ms932Encoder.encode("穽")].join(",") === "226,118"); // U+7A7D
assert.throws(() => {ms932Encoder.encode("\u7A7E")}, {name:"Error",message:"EncodingError U+7A7E"});
r = r && ([...ms932Encoder.encode("穿")].join(",") === "144,250"); // U+7A7F
assert.throws(() => {ms932Encoder.encode("\u7A80")}, {name:"Error",message:"EncodingError U+7A80"});
r = r && ([...ms932Encoder.encode("突")].join(",") === "147,203"); // U+7A81
assert.throws(() => {ms932Encoder.encode("\u7A82")}, {name:"Error",message:"EncodingError U+7A82"});
r = r && ([...ms932Encoder.encode("窃窄")].join(",") === "144,222,141,243"); // U+7A83
assert.throws(() => {ms932Encoder.encode("\u7A85")}, {name:"Error",message:"EncodingError U+7A85"});
assert.throws(() => {ms932Encoder.encode("\u7A86")}, {name:"Error",message:"EncodingError U+7A86"});
assert.throws(() => {ms932Encoder.encode("\u7A87")}, {name:"Error",message:"EncodingError U+7A87"});
r = r && ([...ms932Encoder.encode("窈")].join(",") === "226,119"); // U+7A88
assert.throws(() => {ms932Encoder.encode("\u7A89")}, {name:"Error",message:"EncodingError U+7A89"});
assert.throws(() => {ms932Encoder.encode("\u7A8A")}, {name:"Error",message:"EncodingError U+7A8A"});
assert.throws(() => {ms932Encoder.encode("\u7A8B")}, {name:"Error",message:"EncodingError U+7A8B"});
assert.throws(() => {ms932Encoder.encode("\u7A8C")}, {name:"Error",message:"EncodingError U+7A8C"});
assert.throws(() => {ms932Encoder.encode("\u7A8D")}, {name:"Error",message:"EncodingError U+7A8D"});
assert.throws(() => {ms932Encoder.encode("\u7A8E")}, {name:"Error",message:"EncodingError U+7A8E"});
assert.throws(() => {ms932Encoder.encode("\u7A8F")}, {name:"Error",message:"EncodingError U+7A8F"});
assert.throws(() => {ms932Encoder.encode("\u7A90")}, {name:"Error",message:"EncodingError U+7A90"});
assert.throws(() => {ms932Encoder.encode("\u7A91")}, {name:"Error",message:"EncodingError U+7A91"});
r = r && ([...ms932Encoder.encode("窒窓")].join(",") === "146,130,145,139"); // U+7A92
assert.throws(() => {ms932Encoder.encode("\u7A94")}, {name:"Error",message:"EncodingError U+7A94"});
r = r && ([...ms932Encoder.encode("窕窖窗窘")].join(",") === "226,121,226,123,226,120,226,122"); // U+7A95
assert.throws(() => {ms932Encoder.encode("\u7A99")}, {name:"Error",message:"EncodingError U+7A99"});
assert.throws(() => {ms932Encoder.encode("\u7A9A")}, {name:"Error",message:"EncodingError U+7A9A"});
assert.throws(() => {ms932Encoder.encode("\u7A9B")}, {name:"Error",message:"EncodingError U+7A9B"});
assert.throws(() => {ms932Encoder.encode("\u7A9C")}, {name:"Error",message:"EncodingError U+7A9C"});
assert.throws(() => {ms932Encoder.encode("\u7A9D")}, {name:"Error",message:"EncodingError U+7A9D"});
assert.throws(() => {ms932Encoder.encode("\u7A9E")}, {name:"Error",message:"EncodingError U+7A9E"});
r = r && ([...ms932Encoder.encode("窟")].join(",") === "140,65"); // U+7A9F
assert.throws(() => {ms932Encoder.encode("\u7AA0")}, {name:"Error",message:"EncodingError U+7AA0"});
assert.throws(() => {ms932Encoder.encode("\u7AA1")}, {name:"Error",message:"EncodingError U+7AA1"});
assert.throws(() => {ms932Encoder.encode("\u7AA2")}, {name:"Error",message:"EncodingError U+7AA2"});
assert.throws(() => {ms932Encoder.encode("\u7AA3")}, {name:"Error",message:"EncodingError U+7AA3"});
assert.throws(() => {ms932Encoder.encode("\u7AA4")}, {name:"Error",message:"EncodingError U+7AA4"});
assert.throws(() => {ms932Encoder.encode("\u7AA5")}, {name:"Error",message:"EncodingError U+7AA5"});
assert.throws(() => {ms932Encoder.encode("\u7AA6")}, {name:"Error",message:"EncodingError U+7AA6"});
assert.throws(() => {ms932Encoder.encode("\u7AA7")}, {name:"Error",message:"EncodingError U+7AA7"});
assert.throws(() => {ms932Encoder.encode("\u7AA8")}, {name:"Error",message:"EncodingError U+7AA8"});
r = r && ([...ms932Encoder.encode("窩窪")].join(",") === "226,124,140,69"); // U+7AA9
assert.throws(() => {ms932Encoder.encode("\u7AAB")}, {name:"Error",message:"EncodingError U+7AAB"});
assert.throws(() => {ms932Encoder.encode("\u7AAC")}, {name:"Error",message:"EncodingError U+7AAC"});
assert.throws(() => {ms932Encoder.encode("\u7AAD")}, {name:"Error",message:"EncodingError U+7AAD"});
r = r && ([...ms932Encoder.encode("窮窯窰")].join(",") === "139,135,151,113,226,126"); // U+7AAE
assert.throws(() => {ms932Encoder.encode("\u7AB1")}, {name:"Error",message:"EncodingError U+7AB1"});
assert.throws(() => {ms932Encoder.encode("\u7AB2")}, {name:"Error",message:"EncodingError U+7AB2"});
assert.throws(() => {ms932Encoder.encode("\u7AB3")}, {name:"Error",message:"EncodingError U+7AB3"});
assert.throws(() => {ms932Encoder.encode("\u7AB4")}, {name:"Error",message:"EncodingError U+7AB4"});
assert.throws(() => {ms932Encoder.encode("\u7AB5")}, {name:"Error",message:"EncodingError U+7AB5"});
r = r && ([...ms932Encoder.encode("窶")].join(",") === "226,128"); // U+7AB6
assert.throws(() => {ms932Encoder.encode("\u7AB7")}, {name:"Error",message:"EncodingError U+7AB7"});
assert.throws(() => {ms932Encoder.encode("\u7AB8")}, {name:"Error",message:"EncodingError U+7AB8"});
assert.throws(() => {ms932Encoder.encode("\u7AB9")}, {name:"Error",message:"EncodingError U+7AB9"});
r = r && ([...ms932Encoder.encode("窺")].join(",") === "137,77"); // U+7ABA
assert.throws(() => {ms932Encoder.encode("\u7ABB")}, {name:"Error",message:"EncodingError U+7ABB"});
assert.throws(() => {ms932Encoder.encode("\u7ABC")}, {name:"Error",message:"EncodingError U+7ABC"});
assert.throws(() => {ms932Encoder.encode("\u7ABD")}, {name:"Error",message:"EncodingError U+7ABD"});
assert.throws(() => {ms932Encoder.encode("\u7ABE")}, {name:"Error",message:"EncodingError U+7ABE"});
r = r && ([...ms932Encoder.encode("窿")].join(",") === "226,131"); // U+7ABF
assert.throws(() => {ms932Encoder.encode("\u7AC0")}, {name:"Error",message:"EncodingError U+7AC0"});
assert.throws(() => {ms932Encoder.encode("\u7AC1")}, {name:"Error",message:"EncodingError U+7AC1"});
assert.throws(() => {ms932Encoder.encode("\u7AC2")}, {name:"Error",message:"EncodingError U+7AC2"});
r = r && ([...ms932Encoder.encode("竃竄竅")].join(",") === "138,150,226,130,226,129"); // U+7AC3
assert.throws(() => {ms932Encoder.encode("\u7AC6")}, {name:"Error",message:"EncodingError U+7AC6"});
r = r && ([...ms932Encoder.encode("竇竈")].join(",") === "226,133,226,125"); // U+7AC7
assert.throws(() => {ms932Encoder.encode("\u7AC9")}, {name:"Error",message:"EncodingError U+7AC9"});
r = r && ([...ms932Encoder.encode("竊立")].join(",") === "226,134,151,167"); // U+7ACA
assert.throws(() => {ms932Encoder.encode("\u7ACC")}, {name:"Error",message:"EncodingError U+7ACC"});
r = r && ([...ms932Encoder.encode("竍")].join(",") === "226,135"); // U+7ACD
assert.throws(() => {ms932Encoder.encode("\u7ACE")}, {name:"Error",message:"EncodingError U+7ACE"});
r = r && ([...ms932Encoder.encode("竏")].join(",") === "226,136"); // U+7ACF
assert.throws(() => {ms932Encoder.encode("\u7AD0")}, {name:"Error",message:"EncodingError U+7AD0"});
r = r && ([...ms932Encoder.encode("竑竒竓")].join(",") === "251,132,154,242,226,138"); // U+7AD1
assert.throws(() => {ms932Encoder.encode("\u7AD4")}, {name:"Error",message:"EncodingError U+7AD4"});
r = r && ([...ms932Encoder.encode("竕")].join(",") === "226,137"); // U+7AD5
assert.throws(() => {ms932Encoder.encode("\u7AD6")}, {name:"Error",message:"EncodingError U+7AD6"});
assert.throws(() => {ms932Encoder.encode("\u7AD7")}, {name:"Error",message:"EncodingError U+7AD7"});
assert.throws(() => {ms932Encoder.encode("\u7AD8")}, {name:"Error",message:"EncodingError U+7AD8"});
r = r && ([...ms932Encoder.encode("站竚")].join(",") === "226,139,226,140"); // U+7AD9
assert.throws(() => {ms932Encoder.encode("\u7ADB")}, {name:"Error",message:"EncodingError U+7ADB"});
r = r && ([...ms932Encoder.encode("竜竝")].join(",") === "151,179,226,141"); // U+7ADC
assert.throws(() => {ms932Encoder.encode("\u7ADE")}, {name:"Error",message:"EncodingError U+7ADE"});
r = r && ([...ms932Encoder.encode("竟章竡竢竣")].join(",") === "232,237,143,205,226,142,226,143,143,118"); // U+7ADF
assert.throws(() => {ms932Encoder.encode("\u7AE4")}, {name:"Error",message:"EncodingError U+7AE4"});
r = r && ([...ms932Encoder.encode("童竦竧")].join(",") === "147,182,226,144,251,133"); // U+7AE5
assert.throws(() => {ms932Encoder.encode("\u7AE8")}, {name:"Error",message:"EncodingError U+7AE8"});
assert.throws(() => {ms932Encoder.encode("\u7AE9")}, {name:"Error",message:"EncodingError U+7AE9"});
r = r && ([...ms932Encoder.encode("竪竫")].join(",") === "146,71,251,135"); // U+7AEA
assert.throws(() => {ms932Encoder.encode("\u7AEC")}, {name:"Error",message:"EncodingError U+7AEC"});
r = r && ([...ms932Encoder.encode("竭")].join(",") === "226,145"); // U+7AED
assert.throws(() => {ms932Encoder.encode("\u7AEE")}, {name:"Error",message:"EncodingError U+7AEE"});
r = r && ([...ms932Encoder.encode("端竰")].join(",") === "146,91,226,146"); // U+7AEF
assert.throws(() => {ms932Encoder.encode("\u7AF1")}, {name:"Error",message:"EncodingError U+7AF1"});
assert.throws(() => {ms932Encoder.encode("\u7AF2")}, {name:"Error",message:"EncodingError U+7AF2"});
assert.throws(() => {ms932Encoder.encode("\u7AF3")}, {name:"Error",message:"EncodingError U+7AF3"});
assert.throws(() => {ms932Encoder.encode("\u7AF4")}, {name:"Error",message:"EncodingError U+7AF4"});
assert.throws(() => {ms932Encoder.encode("\u7AF5")}, {name:"Error",message:"EncodingError U+7AF5"});
r = r && ([...ms932Encoder.encode("競")].join(",") === "139,163"); // U+7AF6
assert.throws(() => {ms932Encoder.encode("\u7AF7")}, {name:"Error",message:"EncodingError U+7AF7"});
r = r && ([...ms932Encoder.encode("竸竹竺")].join(",") === "153,94,146,124,142,177"); // U+7AF8
assert.throws(() => {ms932Encoder.encode("\u7AFB")}, {name:"Error",message:"EncodingError U+7AFB"});
assert.throws(() => {ms932Encoder.encode("\u7AFC")}, {name:"Error",message:"EncodingError U+7AFC"});
assert.throws(() => {ms932Encoder.encode("\u7AFD")}, {name:"Error",message:"EncodingError U+7AFD"});
assert.throws(() => {ms932Encoder.encode("\u7AFE")}, {name:"Error",message:"EncodingError U+7AFE"});
r = r && ([...ms932Encoder.encode("竿")].join(",") === "138,198"); // U+7AFF
assert.throws(() => {ms932Encoder.encode("\u7B00")}, {name:"Error",message:"EncodingError U+7B00"});
assert.throws(() => {ms932Encoder.encode("\u7B01")}, {name:"Error",message:"EncodingError U+7B01"});
r = r && ([...ms932Encoder.encode("笂")].join(",") === "226,147"); // U+7B02
assert.throws(() => {ms932Encoder.encode("\u7B03")}, {name:"Error",message:"EncodingError U+7B03"});
r = r && ([...ms932Encoder.encode("笄")].join(",") === "226,160"); // U+7B04
assert.throws(() => {ms932Encoder.encode("\u7B05")}, {name:"Error",message:"EncodingError U+7B05"});
r = r && ([...ms932Encoder.encode("笆")].join(",") === "226,150"); // U+7B06
assert.throws(() => {ms932Encoder.encode("\u7B07")}, {name:"Error",message:"EncodingError U+7B07"});
r = r && ([...ms932Encoder.encode("笈")].join(",") === "139,136"); // U+7B08
assert.throws(() => {ms932Encoder.encode("\u7B09")}, {name:"Error",message:"EncodingError U+7B09"});
r = r && ([...ms932Encoder.encode("笊笋")].join(",") === "226,149,226,162"); // U+7B0A
assert.throws(() => {ms932Encoder.encode("\u7B0C")}, {name:"Error",message:"EncodingError U+7B0C"});
assert.throws(() => {ms932Encoder.encode("\u7B0D")}, {name:"Error",message:"EncodingError U+7B0D"});
assert.throws(() => {ms932Encoder.encode("\u7B0E")}, {name:"Error",message:"EncodingError U+7B0E"});
r = r && ([...ms932Encoder.encode("笏")].join(",") === "226,148"); // U+7B0F
assert.throws(() => {ms932Encoder.encode("\u7B10")}, {name:"Error",message:"EncodingError U+7B10"});
r = r && ([...ms932Encoder.encode("笑")].join(",") === "143,206"); // U+7B11
assert.throws(() => {ms932Encoder.encode("\u7B12")}, {name:"Error",message:"EncodingError U+7B12"});
assert.throws(() => {ms932Encoder.encode("\u7B13")}, {name:"Error",message:"EncodingError U+7B13"});
assert.throws(() => {ms932Encoder.encode("\u7B14")}, {name:"Error",message:"EncodingError U+7B14"});
assert.throws(() => {ms932Encoder.encode("\u7B15")}, {name:"Error",message:"EncodingError U+7B15"});
assert.throws(() => {ms932Encoder.encode("\u7B16")}, {name:"Error",message:"EncodingError U+7B16"});
assert.throws(() => {ms932Encoder.encode("\u7B17")}, {name:"Error",message:"EncodingError U+7B17"});
r = r && ([...ms932Encoder.encode("笘笙")].join(",") === "226,152,226,153"); // U+7B18
assert.throws(() => {ms932Encoder.encode("\u7B1A")}, {name:"Error",message:"EncodingError U+7B1A"});
r = r && ([...ms932Encoder.encode("笛")].join(",") === "147,74"); // U+7B1B
assert.throws(() => {ms932Encoder.encode("\u7B1C")}, {name:"Error",message:"EncodingError U+7B1C"});
assert.throws(() => {ms932Encoder.encode("\u7B1D")}, {name:"Error",message:"EncodingError U+7B1D"});
r = r && ([...ms932Encoder.encode("笞")].join(",") === "226,154"); // U+7B1E
assert.throws(() => {ms932Encoder.encode("\u7B1F")}, {name:"Error",message:"EncodingError U+7B1F"});
r = r && ([...ms932Encoder.encode("笠")].join(",") === "138,125"); // U+7B20
assert.throws(() => {ms932Encoder.encode("\u7B21")}, {name:"Error",message:"EncodingError U+7B21"});
assert.throws(() => {ms932Encoder.encode("\u7B22")}, {name:"Error",message:"EncodingError U+7B22"});
assert.throws(() => {ms932Encoder.encode("\u7B23")}, {name:"Error",message:"EncodingError U+7B23"});
assert.throws(() => {ms932Encoder.encode("\u7B24")}, {name:"Error",message:"EncodingError U+7B24"});
r = r && ([...ms932Encoder.encode("笥符")].join(",") === "144,121,149,132"); // U+7B25
assert.throws(() => {ms932Encoder.encode("\u7B27")}, {name:"Error",message:"EncodingError U+7B27"});
r = r && ([...ms932Encoder.encode("笨")].join(",") === "226,156"); // U+7B28
assert.throws(() => {ms932Encoder.encode("\u7B29")}, {name:"Error",message:"EncodingError U+7B29"});
assert.throws(() => {ms932Encoder.encode("\u7B2A")}, {name:"Error",message:"EncodingError U+7B2A"});
assert.throws(() => {ms932Encoder.encode("\u7B2B")}, {name:"Error",message:"EncodingError U+7B2B"});
r = r && ([...ms932Encoder.encode("第")].join(",") === "145,230"); // U+7B2C
assert.throws(() => {ms932Encoder.encode("\u7B2D")}, {name:"Error",message:"EncodingError U+7B2D"});
assert.throws(() => {ms932Encoder.encode("\u7B2E")}, {name:"Error",message:"EncodingError U+7B2E"});
assert.throws(() => {ms932Encoder.encode("\u7B2F")}, {name:"Error",message:"EncodingError U+7B2F"});
assert.throws(() => {ms932Encoder.encode("\u7B30")}, {name:"Error",message:"EncodingError U+7B30"});
assert.throws(() => {ms932Encoder.encode("\u7B31")}, {name:"Error",message:"EncodingError U+7B31"});
assert.throws(() => {ms932Encoder.encode("\u7B32")}, {name:"Error",message:"EncodingError U+7B32"});
r = r && ([...ms932Encoder.encode("笳")].join(",") === "226,151"); // U+7B33
assert.throws(() => {ms932Encoder.encode("\u7B34")}, {name:"Error",message:"EncodingError U+7B34"});
r = r && ([...ms932Encoder.encode("笵笶")].join(",") === "226,155,226,157"); // U+7B35
assert.throws(() => {ms932Encoder.encode("\u7B37")}, {name:"Error",message:"EncodingError U+7B37"});
assert.throws(() => {ms932Encoder.encode("\u7B38")}, {name:"Error",message:"EncodingError U+7B38"});
r = r && ([...ms932Encoder.encode("笹")].join(",") === "141,249"); // U+7B39
assert.throws(() => {ms932Encoder.encode("\u7B3A")}, {name:"Error",message:"EncodingError U+7B3A"});
assert.throws(() => {ms932Encoder.encode("\u7B3B")}, {name:"Error",message:"EncodingError U+7B3B"});
assert.throws(() => {ms932Encoder.encode("\u7B3C")}, {name:"Error",message:"EncodingError U+7B3C"});
assert.throws(() => {ms932Encoder.encode("\u7B3D")}, {name:"Error",message:"EncodingError U+7B3D"});
assert.throws(() => {ms932Encoder.encode("\u7B3E")}, {name:"Error",message:"EncodingError U+7B3E"});
assert.throws(() => {ms932Encoder.encode("\u7B3F")}, {name:"Error",message:"EncodingError U+7B3F"});
assert.throws(() => {ms932Encoder.encode("\u7B40")}, {name:"Error",message:"EncodingError U+7B40"});
assert.throws(() => {ms932Encoder.encode("\u7B41")}, {name:"Error",message:"EncodingError U+7B41"});
assert.throws(() => {ms932Encoder.encode("\u7B42")}, {name:"Error",message:"EncodingError U+7B42"});
assert.throws(() => {ms932Encoder.encode("\u7B43")}, {name:"Error",message:"EncodingError U+7B43"});
assert.throws(() => {ms932Encoder.encode("\u7B44")}, {name:"Error",message:"EncodingError U+7B44"});
r = r && ([...ms932Encoder.encode("筅筆")].join(",") === "226,164,149,77"); // U+7B45
assert.throws(() => {ms932Encoder.encode("\u7B47")}, {name:"Error",message:"EncodingError U+7B47"});
r = r && ([...ms932Encoder.encode("筈等")].join(",") === "148,164,147,153"); // U+7B48
assert.throws(() => {ms932Encoder.encode("\u7B4A")}, {name:"Error",message:"EncodingError U+7B4A"});
r = r && ([...ms932Encoder.encode("筋筌筍")].join(",") === "139,216,226,163,226,161"); // U+7B4B
assert.throws(() => {ms932Encoder.encode("\u7B4E")}, {name:"Error",message:"EncodingError U+7B4E"});
r = r && ([...ms932Encoder.encode("筏筐筑筒")].join(",") === "148,179,226,158,146,125,147,155"); // U+7B4F
assert.throws(() => {ms932Encoder.encode("\u7B53")}, {name:"Error",message:"EncodingError U+7B53"});
r = r && ([...ms932Encoder.encode("答")].join(",") === "147,154"); // U+7B54
assert.throws(() => {ms932Encoder.encode("\u7B55")}, {name:"Error",message:"EncodingError U+7B55"});
r = r && ([...ms932Encoder.encode("策")].join(",") === "141,244"); // U+7B56
assert.throws(() => {ms932Encoder.encode("\u7B57")}, {name:"Error",message:"EncodingError U+7B57"});
assert.throws(() => {ms932Encoder.encode("\u7B58")}, {name:"Error",message:"EncodingError U+7B58"});
assert.throws(() => {ms932Encoder.encode("\u7B59")}, {name:"Error",message:"EncodingError U+7B59"});
assert.throws(() => {ms932Encoder.encode("\u7B5A")}, {name:"Error",message:"EncodingError U+7B5A"});
assert.throws(() => {ms932Encoder.encode("\u7B5B")}, {name:"Error",message:"EncodingError U+7B5B"});
assert.throws(() => {ms932Encoder.encode("\u7B5C")}, {name:"Error",message:"EncodingError U+7B5C"});
r = r && ([...ms932Encoder.encode("筝")].join(",") === "226,182"); // U+7B5D
assert.throws(() => {ms932Encoder.encode("\u7B5E")}, {name:"Error",message:"EncodingError U+7B5E"});
assert.throws(() => {ms932Encoder.encode("\u7B5F")}, {name:"Error",message:"EncodingError U+7B5F"});
assert.throws(() => {ms932Encoder.encode("\u7B60")}, {name:"Error",message:"EncodingError U+7B60"});
assert.throws(() => {ms932Encoder.encode("\u7B61")}, {name:"Error",message:"EncodingError U+7B61"});
assert.throws(() => {ms932Encoder.encode("\u7B62")}, {name:"Error",message:"EncodingError U+7B62"});
assert.throws(() => {ms932Encoder.encode("\u7B63")}, {name:"Error",message:"EncodingError U+7B63"});
assert.throws(() => {ms932Encoder.encode("\u7B64")}, {name:"Error",message:"EncodingError U+7B64"});
r = r && ([...ms932Encoder.encode("筥")].join(",") === "226,166"); // U+7B65
assert.throws(() => {ms932Encoder.encode("\u7B66")}, {name:"Error",message:"EncodingError U+7B66"});
r = r && ([...ms932Encoder.encode("筧")].join(",") === "226,168"); // U+7B67
assert.throws(() => {ms932Encoder.encode("\u7B68")}, {name:"Error",message:"EncodingError U+7B68"});
assert.throws(() => {ms932Encoder.encode("\u7B69")}, {name:"Error",message:"EncodingError U+7B69"});
assert.throws(() => {ms932Encoder.encode("\u7B6A")}, {name:"Error",message:"EncodingError U+7B6A"});
assert.throws(() => {ms932Encoder.encode("\u7B6B")}, {name:"Error",message:"EncodingError U+7B6B"});
r = r && ([...ms932Encoder.encode("筬")].join(",") === "226,171"); // U+7B6C
assert.throws(() => {ms932Encoder.encode("\u7B6D")}, {name:"Error",message:"EncodingError U+7B6D"});
r = r && ([...ms932Encoder.encode("筮")].join(",") === "226,172"); // U+7B6E
assert.throws(() => {ms932Encoder.encode("\u7B6F")}, {name:"Error",message:"EncodingError U+7B6F"});
r = r && ([...ms932Encoder.encode("筰筱")].join(",") === "226,169,226,170"); // U+7B70
assert.throws(() => {ms932Encoder.encode("\u7B72")}, {name:"Error",message:"EncodingError U+7B72"});
assert.throws(() => {ms932Encoder.encode("\u7B73")}, {name:"Error",message:"EncodingError U+7B73"});
r = r && ([...ms932Encoder.encode("筴筵")].join(",") === "226,167,226,165"); // U+7B74
assert.throws(() => {ms932Encoder.encode("\u7B76")}, {name:"Error",message:"EncodingError U+7B76"});
assert.throws(() => {ms932Encoder.encode("\u7B77")}, {name:"Error",message:"EncodingError U+7B77"});
assert.throws(() => {ms932Encoder.encode("\u7B78")}, {name:"Error",message:"EncodingError U+7B78"});
assert.throws(() => {ms932Encoder.encode("\u7B79")}, {name:"Error",message:"EncodingError U+7B79"});
r = r && ([...ms932Encoder.encode("筺")].join(",") === "226,159"); // U+7B7A
assert.throws(() => {ms932Encoder.encode("\u7B7B")}, {name:"Error",message:"EncodingError U+7B7B"});
assert.throws(() => {ms932Encoder.encode("\u7B7C")}, {name:"Error",message:"EncodingError U+7B7C"});
assert.throws(() => {ms932Encoder.encode("\u7B7D")}, {name:"Error",message:"EncodingError U+7B7D"});
assert.throws(() => {ms932Encoder.encode("\u7B7E")}, {name:"Error",message:"EncodingError U+7B7E"});
assert.throws(() => {ms932Encoder.encode("\u7B7F")}, {name:"Error",message:"EncodingError U+7B7F"});
assert.throws(() => {ms932Encoder.encode("\u7B80")}, {name:"Error",message:"EncodingError U+7B80"});
assert.throws(() => {ms932Encoder.encode("\u7B81")}, {name:"Error",message:"EncodingError U+7B81"});
assert.throws(() => {ms932Encoder.encode("\u7B82")}, {name:"Error",message:"EncodingError U+7B82"});
assert.throws(() => {ms932Encoder.encode("\u7B83")}, {name:"Error",message:"EncodingError U+7B83"});
assert.throws(() => {ms932Encoder.encode("\u7B84")}, {name:"Error",message:"EncodingError U+7B84"});
assert.throws(() => {ms932Encoder.encode("\u7B85")}, {name:"Error",message:"EncodingError U+7B85"});
r = r && ([...ms932Encoder.encode("箆箇")].join(",") === "149,205,137,211"); // U+7B86
assert.throws(() => {ms932Encoder.encode("\u7B88")}, {name:"Error",message:"EncodingError U+7B88"});
assert.throws(() => {ms932Encoder.encode("\u7B89")}, {name:"Error",message:"EncodingError U+7B89"});
assert.throws(() => {ms932Encoder.encode("\u7B8A")}, {name:"Error",message:"EncodingError U+7B8A"});
r = r && ([...ms932Encoder.encode("箋")].join(",") === "226,179"); // U+7B8B
assert.throws(() => {ms932Encoder.encode("\u7B8C")}, {name:"Error",message:"EncodingError U+7B8C"});
r = r && ([...ms932Encoder.encode("箍")].join(",") === "226,176"); // U+7B8D
assert.throws(() => {ms932Encoder.encode("\u7B8E")}, {name:"Error",message:"EncodingError U+7B8E"});
r = r && ([...ms932Encoder.encode("箏")].join(",") === "226,181"); // U+7B8F
assert.throws(() => {ms932Encoder.encode("\u7B90")}, {name:"Error",message:"EncodingError U+7B90"});
assert.throws(() => {ms932Encoder.encode("\u7B91")}, {name:"Error",message:"EncodingError U+7B91"});
r = r && ([...ms932Encoder.encode("箒")].join(",") === "226,180"); // U+7B92
assert.throws(() => {ms932Encoder.encode("\u7B93")}, {name:"Error",message:"EncodingError U+7B93"});
r = r && ([...ms932Encoder.encode("箔箕")].join(",") === "148,147,150,165"); // U+7B94
assert.throws(() => {ms932Encoder.encode("\u7B96")}, {name:"Error",message:"EncodingError U+7B96"});
r = r && ([...ms932Encoder.encode("算箘箙箚")].join(",") === "142,90,226,174,226,183,226,178"); // U+7B97
assert.throws(() => {ms932Encoder.encode("\u7B9B")}, {name:"Error",message:"EncodingError U+7B9B"});
r = r && ([...ms932Encoder.encode("箜箝箞箟")].join(",") === "226,177,226,173,251,136,226,175"); // U+7B9C
assert.throws(() => {ms932Encoder.encode("\u7BA0")}, {name:"Error",message:"EncodingError U+7BA0"});
r = r && ([...ms932Encoder.encode("管")].join(",") === "138,199"); // U+7BA1
assert.throws(() => {ms932Encoder.encode("\u7BA2")}, {name:"Error",message:"EncodingError U+7BA2"});
assert.throws(() => {ms932Encoder.encode("\u7BA3")}, {name:"Error",message:"EncodingError U+7BA3"});
assert.throws(() => {ms932Encoder.encode("\u7BA4")}, {name:"Error",message:"EncodingError U+7BA4"});
assert.throws(() => {ms932Encoder.encode("\u7BA5")}, {name:"Error",message:"EncodingError U+7BA5"});
assert.throws(() => {ms932Encoder.encode("\u7BA6")}, {name:"Error",message:"EncodingError U+7BA6"});
assert.throws(() => {ms932Encoder.encode("\u7BA7")}, {name:"Error",message:"EncodingError U+7BA7"});
assert.throws(() => {ms932Encoder.encode("\u7BA8")}, {name:"Error",message:"EncodingError U+7BA8"});
assert.throws(() => {ms932Encoder.encode("\u7BA9")}, {name:"Error",message:"EncodingError U+7BA9"});
r = r && ([...ms932Encoder.encode("箪")].join(",") === "146,92"); // U+7BAA
assert.throws(() => {ms932Encoder.encode("\u7BAB")}, {name:"Error",message:"EncodingError U+7BAB"});
assert.throws(() => {ms932Encoder.encode("\u7BAC")}, {name:"Error",message:"EncodingError U+7BAC"});
r = r && ([...ms932Encoder.encode("箭")].join(",") === "144,251"); // U+7BAD
assert.throws(() => {ms932Encoder.encode("\u7BAE")}, {name:"Error",message:"EncodingError U+7BAE"});
assert.throws(() => {ms932Encoder.encode("\u7BAF")}, {name:"Error",message:"EncodingError U+7BAF"});
assert.throws(() => {ms932Encoder.encode("\u7BB0")}, {name:"Error",message:"EncodingError U+7BB0"});
r = r && ([...ms932Encoder.encode("箱")].join(",") === "148,160"); // U+7BB1
assert.throws(() => {ms932Encoder.encode("\u7BB2")}, {name:"Error",message:"EncodingError U+7BB2"});
assert.throws(() => {ms932Encoder.encode("\u7BB3")}, {name:"Error",message:"EncodingError U+7BB3"});
r = r && ([...ms932Encoder.encode("箴")].join(",") === "226,188"); // U+7BB4
assert.throws(() => {ms932Encoder.encode("\u7BB5")}, {name:"Error",message:"EncodingError U+7BB5"});
assert.throws(() => {ms932Encoder.encode("\u7BB6")}, {name:"Error",message:"EncodingError U+7BB6"});
assert.throws(() => {ms932Encoder.encode("\u7BB7")}, {name:"Error",message:"EncodingError U+7BB7"});
r = r && ([...ms932Encoder.encode("箸")].join(",") === "148,162"); // U+7BB8
assert.throws(() => {ms932Encoder.encode("\u7BB9")}, {name:"Error",message:"EncodingError U+7BB9"});
assert.throws(() => {ms932Encoder.encode("\u7BBA")}, {name:"Error",message:"EncodingError U+7BBA"});
assert.throws(() => {ms932Encoder.encode("\u7BBB")}, {name:"Error",message:"EncodingError U+7BBB"});
assert.throws(() => {ms932Encoder.encode("\u7BBC")}, {name:"Error",message:"EncodingError U+7BBC"});
assert.throws(() => {ms932Encoder.encode("\u7BBD")}, {name:"Error",message:"EncodingError U+7BBD"});
assert.throws(() => {ms932Encoder.encode("\u7BBE")}, {name:"Error",message:"EncodingError U+7BBE"});
assert.throws(() => {ms932Encoder.encode("\u7BBF")}, {name:"Error",message:"EncodingError U+7BBF"});
r = r && ([...ms932Encoder.encode("節篁")].join(",") === "144,223,226,185"); // U+7BC0
assert.throws(() => {ms932Encoder.encode("\u7BC2")}, {name:"Error",message:"EncodingError U+7BC2"});
assert.throws(() => {ms932Encoder.encode("\u7BC3")}, {name:"Error",message:"EncodingError U+7BC3"});
r = r && ([...ms932Encoder.encode("範")].join(",") === "148,205"); // U+7BC4
assert.throws(() => {ms932Encoder.encode("\u7BC5")}, {name:"Error",message:"EncodingError U+7BC5"});
r = r && ([...ms932Encoder.encode("篆篇")].join(",") === "226,189,149,209"); // U+7BC6
assert.throws(() => {ms932Encoder.encode("\u7BC8")}, {name:"Error",message:"EncodingError U+7BC8"});
r = r && ([...ms932Encoder.encode("築")].join(",") === "146,122"); // U+7BC9
assert.throws(() => {ms932Encoder.encode("\u7BCA")}, {name:"Error",message:"EncodingError U+7BCA"});
r = r && ([...ms932Encoder.encode("篋篌")].join(",") === "226,184,226,186"); // U+7BCB
assert.throws(() => {ms932Encoder.encode("\u7BCD")}, {name:"Error",message:"EncodingError U+7BCD"});
assert.throws(() => {ms932Encoder.encode("\u7BCE")}, {name:"Error",message:"EncodingError U+7BCE"});
r = r && ([...ms932Encoder.encode("篏")].join(",") === "226,187"); // U+7BCF
assert.throws(() => {ms932Encoder.encode("\u7BD0")}, {name:"Error",message:"EncodingError U+7BD0"});
assert.throws(() => {ms932Encoder.encode("\u7BD1")}, {name:"Error",message:"EncodingError U+7BD1"});
assert.throws(() => {ms932Encoder.encode("\u7BD2")}, {name:"Error",message:"EncodingError U+7BD2"});
assert.throws(() => {ms932Encoder.encode("\u7BD3")}, {name:"Error",message:"EncodingError U+7BD3"});
assert.throws(() => {ms932Encoder.encode("\u7BD4")}, {name:"Error",message:"EncodingError U+7BD4"});
assert.throws(() => {ms932Encoder.encode("\u7BD5")}, {name:"Error",message:"EncodingError U+7BD5"});
assert.throws(() => {ms932Encoder.encode("\u7BD6")}, {name:"Error",message:"EncodingError U+7BD6"});
assert.throws(() => {ms932Encoder.encode("\u7BD7")}, {name:"Error",message:"EncodingError U+7BD7"});
assert.throws(() => {ms932Encoder.encode("\u7BD8")}, {name:"Error",message:"EncodingError U+7BD8"});
assert.throws(() => {ms932Encoder.encode("\u7BD9")}, {name:"Error",message:"EncodingError U+7BD9"});
assert.throws(() => {ms932Encoder.encode("\u7BDA")}, {name:"Error",message:"EncodingError U+7BDA"});
assert.throws(() => {ms932Encoder.encode("\u7BDB")}, {name:"Error",message:"EncodingError U+7BDB"});
assert.throws(() => {ms932Encoder.encode("\u7BDC")}, {name:"Error",message:"EncodingError U+7BDC"});
r = r && ([...ms932Encoder.encode("篝")].join(",") === "226,190"); // U+7BDD
assert.throws(() => {ms932Encoder.encode("\u7BDE")}, {name:"Error",message:"EncodingError U+7BDE"});
assert.throws(() => {ms932Encoder.encode("\u7BDF")}, {name:"Error",message:"EncodingError U+7BDF"});
r = r && ([...ms932Encoder.encode("篠")].join(",") === "142,194"); // U+7BE0
assert.throws(() => {ms932Encoder.encode("\u7BE1")}, {name:"Error",message:"EncodingError U+7BE1"});
assert.throws(() => {ms932Encoder.encode("\u7BE2")}, {name:"Error",message:"EncodingError U+7BE2"});
assert.throws(() => {ms932Encoder.encode("\u7BE3")}, {name:"Error",message:"EncodingError U+7BE3"});
r = r && ([...ms932Encoder.encode("篤篥篦")].join(",") === "147,196,226,195,226,194"); // U+7BE4
assert.throws(() => {ms932Encoder.encode("\u7BE7")}, {name:"Error",message:"EncodingError U+7BE7"});
assert.throws(() => {ms932Encoder.encode("\u7BE8")}, {name:"Error",message:"EncodingError U+7BE8"});
r = r && ([...ms932Encoder.encode("篩")].join(",") === "226,191"); // U+7BE9
assert.throws(() => {ms932Encoder.encode("\u7BEA")}, {name:"Error",message:"EncodingError U+7BEA"});
assert.throws(() => {ms932Encoder.encode("\u7BEB")}, {name:"Error",message:"EncodingError U+7BEB"});
assert.throws(() => {ms932Encoder.encode("\u7BEC")}, {name:"Error",message:"EncodingError U+7BEC"});
r = r && ([...ms932Encoder.encode("篭")].join(",") === "152,85"); // U+7BED
assert.throws(() => {ms932Encoder.encode("\u7BEE")}, {name:"Error",message:"EncodingError U+7BEE"});
assert.throws(() => {ms932Encoder.encode("\u7BEF")}, {name:"Error",message:"EncodingError U+7BEF"});
assert.throws(() => {ms932Encoder.encode("\u7BF0")}, {name:"Error",message:"EncodingError U+7BF0"});
assert.throws(() => {ms932Encoder.encode("\u7BF1")}, {name:"Error",message:"EncodingError U+7BF1"});
assert.throws(() => {ms932Encoder.encode("\u7BF2")}, {name:"Error",message:"EncodingError U+7BF2"});
r = r && ([...ms932Encoder.encode("篳")].join(",") === "226,200"); // U+7BF3
assert.throws(() => {ms932Encoder.encode("\u7BF4")}, {name:"Error",message:"EncodingError U+7BF4"});
assert.throws(() => {ms932Encoder.encode("\u7BF5")}, {name:"Error",message:"EncodingError U+7BF5"});
r = r && ([...ms932Encoder.encode("篶篷")].join(",") === "226,204,226,201"); // U+7BF6
assert.throws(() => {ms932Encoder.encode("\u7BF8")}, {name:"Error",message:"EncodingError U+7BF8"});
assert.throws(() => {ms932Encoder.encode("\u7BF9")}, {name:"Error",message:"EncodingError U+7BF9"});
assert.throws(() => {ms932Encoder.encode("\u7BFA")}, {name:"Error",message:"EncodingError U+7BFA"});
assert.throws(() => {ms932Encoder.encode("\u7BFB")}, {name:"Error",message:"EncodingError U+7BFB"});
assert.throws(() => {ms932Encoder.encode("\u7BFC")}, {name:"Error",message:"EncodingError U+7BFC"});
assert.throws(() => {ms932Encoder.encode("\u7BFD")}, {name:"Error",message:"EncodingError U+7BFD"});
assert.throws(() => {ms932Encoder.encode("\u7BFE")}, {name:"Error",message:"EncodingError U+7BFE"});
assert.throws(() => {ms932Encoder.encode("\u7BFF")}, {name:"Error",message:"EncodingError U+7BFF"});

assert.strictEqual(r, true);

  });

});
