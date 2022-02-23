import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 8", () => {

  it("encode(string) - U+7800-U+7BFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u7800")}).to.throw(Error, "EncodingError U+7800");
expect(() => {ms932Encoder.encode("\u7801")}).to.throw(Error, "EncodingError U+7801");
r = r && ([...ms932Encoder.encode("砂")].join(",") === "141,187"); // U+7802
expect(() => {ms932Encoder.encode("\u7803")}).to.throw(Error, "EncodingError U+7803");
expect(() => {ms932Encoder.encode("\u7804")}).to.throw(Error, "EncodingError U+7804");
expect(() => {ms932Encoder.encode("\u7805")}).to.throw(Error, "EncodingError U+7805");
expect(() => {ms932Encoder.encode("\u7806")}).to.throw(Error, "EncodingError U+7806");
expect(() => {ms932Encoder.encode("\u7807")}).to.throw(Error, "EncodingError U+7807");
expect(() => {ms932Encoder.encode("\u7808")}).to.throw(Error, "EncodingError U+7808");
expect(() => {ms932Encoder.encode("\u7809")}).to.throw(Error, "EncodingError U+7809");
expect(() => {ms932Encoder.encode("\u780A")}).to.throw(Error, "EncodingError U+780A");
expect(() => {ms932Encoder.encode("\u780B")}).to.throw(Error, "EncodingError U+780B");
r = r && ([...ms932Encoder.encode("砌")].join(",") === "225,228"); // U+780C
expect(() => {ms932Encoder.encode("\u780D")}).to.throw(Error, "EncodingError U+780D");
expect(() => {ms932Encoder.encode("\u780E")}).to.throw(Error, "EncodingError U+780E");
expect(() => {ms932Encoder.encode("\u780F")}).to.throw(Error, "EncodingError U+780F");
expect(() => {ms932Encoder.encode("\u7810")}).to.throw(Error, "EncodingError U+7810");
expect(() => {ms932Encoder.encode("\u7811")}).to.throw(Error, "EncodingError U+7811");
r = r && ([...ms932Encoder.encode("砒")].join(",") === "225,229"); // U+7812
expect(() => {ms932Encoder.encode("\u7813")}).to.throw(Error, "EncodingError U+7813");
r = r && ([...ms932Encoder.encode("研砕")].join(",") === "140,164,141,211"); // U+7814
expect(() => {ms932Encoder.encode("\u7816")}).to.throw(Error, "EncodingError U+7816");
expect(() => {ms932Encoder.encode("\u7817")}).to.throw(Error, "EncodingError U+7817");
expect(() => {ms932Encoder.encode("\u7818")}).to.throw(Error, "EncodingError U+7818");
expect(() => {ms932Encoder.encode("\u7819")}).to.throw(Error, "EncodingError U+7819");
expect(() => {ms932Encoder.encode("\u781A")}).to.throw(Error, "EncodingError U+781A");
expect(() => {ms932Encoder.encode("\u781B")}).to.throw(Error, "EncodingError U+781B");
expect(() => {ms932Encoder.encode("\u781C")}).to.throw(Error, "EncodingError U+781C");
expect(() => {ms932Encoder.encode("\u781D")}).to.throw(Error, "EncodingError U+781D");
expect(() => {ms932Encoder.encode("\u781E")}).to.throw(Error, "EncodingError U+781E");
expect(() => {ms932Encoder.encode("\u781F")}).to.throw(Error, "EncodingError U+781F");
r = r && ([...ms932Encoder.encode("砠砡")].join(",") === "225,231,251,120"); // U+7820
expect(() => {ms932Encoder.encode("\u7822")}).to.throw(Error, "EncodingError U+7822");
expect(() => {ms932Encoder.encode("\u7823")}).to.throw(Error, "EncodingError U+7823");
expect(() => {ms932Encoder.encode("\u7824")}).to.throw(Error, "EncodingError U+7824");
r = r && ([...ms932Encoder.encode("砥砦砧")].join(",") === "147,117,141,212,139,109"); // U+7825
expect(() => {ms932Encoder.encode("\u7828")}).to.throw(Error, "EncodingError U+7828");
expect(() => {ms932Encoder.encode("\u7829")}).to.throw(Error, "EncodingError U+7829");
expect(() => {ms932Encoder.encode("\u782A")}).to.throw(Error, "EncodingError U+782A");
expect(() => {ms932Encoder.encode("\u782B")}).to.throw(Error, "EncodingError U+782B");
expect(() => {ms932Encoder.encode("\u782C")}).to.throw(Error, "EncodingError U+782C");
expect(() => {ms932Encoder.encode("\u782D")}).to.throw(Error, "EncodingError U+782D");
expect(() => {ms932Encoder.encode("\u782E")}).to.throw(Error, "EncodingError U+782E");
expect(() => {ms932Encoder.encode("\u782F")}).to.throw(Error, "EncodingError U+782F");
expect(() => {ms932Encoder.encode("\u7830")}).to.throw(Error, "EncodingError U+7830");
expect(() => {ms932Encoder.encode("\u7831")}).to.throw(Error, "EncodingError U+7831");
r = r && ([...ms932Encoder.encode("砲")].join(",") === "150,67"); // U+7832
expect(() => {ms932Encoder.encode("\u7833")}).to.throw(Error, "EncodingError U+7833");
r = r && ([...ms932Encoder.encode("破")].join(",") === "148,106"); // U+7834
expect(() => {ms932Encoder.encode("\u7835")}).to.throw(Error, "EncodingError U+7835");
expect(() => {ms932Encoder.encode("\u7836")}).to.throw(Error, "EncodingError U+7836");
expect(() => {ms932Encoder.encode("\u7837")}).to.throw(Error, "EncodingError U+7837");
expect(() => {ms932Encoder.encode("\u7838")}).to.throw(Error, "EncodingError U+7838");
expect(() => {ms932Encoder.encode("\u7839")}).to.throw(Error, "EncodingError U+7839");
r = r && ([...ms932Encoder.encode("砺")].join(",") === "147,118"); // U+783A
expect(() => {ms932Encoder.encode("\u783B")}).to.throw(Error, "EncodingError U+783B");
expect(() => {ms932Encoder.encode("\u783C")}).to.throw(Error, "EncodingError U+783C");
expect(() => {ms932Encoder.encode("\u783D")}).to.throw(Error, "EncodingError U+783D");
expect(() => {ms932Encoder.encode("\u783E")}).to.throw(Error, "EncodingError U+783E");
r = r && ([...ms932Encoder.encode("砿")].join(",") === "141,123"); // U+783F
expect(() => {ms932Encoder.encode("\u7840")}).to.throw(Error, "EncodingError U+7840");
expect(() => {ms932Encoder.encode("\u7841")}).to.throw(Error, "EncodingError U+7841");
expect(() => {ms932Encoder.encode("\u7842")}).to.throw(Error, "EncodingError U+7842");
expect(() => {ms932Encoder.encode("\u7843")}).to.throw(Error, "EncodingError U+7843");
expect(() => {ms932Encoder.encode("\u7844")}).to.throw(Error, "EncodingError U+7844");
r = r && ([...ms932Encoder.encode("硅")].join(",") === "225,233"); // U+7845
expect(() => {ms932Encoder.encode("\u7846")}).to.throw(Error, "EncodingError U+7846");
expect(() => {ms932Encoder.encode("\u7847")}).to.throw(Error, "EncodingError U+7847");
expect(() => {ms932Encoder.encode("\u7848")}).to.throw(Error, "EncodingError U+7848");
expect(() => {ms932Encoder.encode("\u7849")}).to.throw(Error, "EncodingError U+7849");
expect(() => {ms932Encoder.encode("\u784A")}).to.throw(Error, "EncodingError U+784A");
expect(() => {ms932Encoder.encode("\u784B")}).to.throw(Error, "EncodingError U+784B");
expect(() => {ms932Encoder.encode("\u784C")}).to.throw(Error, "EncodingError U+784C");
expect(() => {ms932Encoder.encode("\u784D")}).to.throw(Error, "EncodingError U+784D");
r = r && ([...ms932Encoder.encode("硎")].join(",") === "251,121"); // U+784E
expect(() => {ms932Encoder.encode("\u784F")}).to.throw(Error, "EncodingError U+784F");
expect(() => {ms932Encoder.encode("\u7850")}).to.throw(Error, "EncodingError U+7850");
expect(() => {ms932Encoder.encode("\u7851")}).to.throw(Error, "EncodingError U+7851");
expect(() => {ms932Encoder.encode("\u7852")}).to.throw(Error, "EncodingError U+7852");
expect(() => {ms932Encoder.encode("\u7853")}).to.throw(Error, "EncodingError U+7853");
expect(() => {ms932Encoder.encode("\u7854")}).to.throw(Error, "EncodingError U+7854");
expect(() => {ms932Encoder.encode("\u7855")}).to.throw(Error, "EncodingError U+7855");
expect(() => {ms932Encoder.encode("\u7856")}).to.throw(Error, "EncodingError U+7856");
expect(() => {ms932Encoder.encode("\u7857")}).to.throw(Error, "EncodingError U+7857");
expect(() => {ms932Encoder.encode("\u7858")}).to.throw(Error, "EncodingError U+7858");
expect(() => {ms932Encoder.encode("\u7859")}).to.throw(Error, "EncodingError U+7859");
expect(() => {ms932Encoder.encode("\u785A")}).to.throw(Error, "EncodingError U+785A");
expect(() => {ms932Encoder.encode("\u785B")}).to.throw(Error, "EncodingError U+785B");
expect(() => {ms932Encoder.encode("\u785C")}).to.throw(Error, "EncodingError U+785C");
r = r && ([...ms932Encoder.encode("硝")].join(",") === "143,201"); // U+785D
expect(() => {ms932Encoder.encode("\u785E")}).to.throw(Error, "EncodingError U+785E");
expect(() => {ms932Encoder.encode("\u785F")}).to.throw(Error, "EncodingError U+785F");
expect(() => {ms932Encoder.encode("\u7860")}).to.throw(Error, "EncodingError U+7860");
expect(() => {ms932Encoder.encode("\u7861")}).to.throw(Error, "EncodingError U+7861");
expect(() => {ms932Encoder.encode("\u7862")}).to.throw(Error, "EncodingError U+7862");
expect(() => {ms932Encoder.encode("\u7863")}).to.throw(Error, "EncodingError U+7863");
r = r && ([...ms932Encoder.encode("硤")].join(",") === "251,122"); // U+7864
expect(() => {ms932Encoder.encode("\u7865")}).to.throw(Error, "EncodingError U+7865");
expect(() => {ms932Encoder.encode("\u7866")}).to.throw(Error, "EncodingError U+7866");
expect(() => {ms932Encoder.encode("\u7867")}).to.throw(Error, "EncodingError U+7867");
expect(() => {ms932Encoder.encode("\u7868")}).to.throw(Error, "EncodingError U+7868");
expect(() => {ms932Encoder.encode("\u7869")}).to.throw(Error, "EncodingError U+7869");
expect(() => {ms932Encoder.encode("\u786A")}).to.throw(Error, "EncodingError U+786A");
r = r && ([...ms932Encoder.encode("硫硬")].join(",") === "151,176,141,100"); // U+786B
expect(() => {ms932Encoder.encode("\u786D")}).to.throw(Error, "EncodingError U+786D");
expect(() => {ms932Encoder.encode("\u786E")}).to.throw(Error, "EncodingError U+786E");
r = r && ([...ms932Encoder.encode("硯")].join(",") === "140,165"); // U+786F
expect(() => {ms932Encoder.encode("\u7870")}).to.throw(Error, "EncodingError U+7870");
expect(() => {ms932Encoder.encode("\u7871")}).to.throw(Error, "EncodingError U+7871");
r = r && ([...ms932Encoder.encode("硲")].join(",") === "148,161"); // U+7872
expect(() => {ms932Encoder.encode("\u7873")}).to.throw(Error, "EncodingError U+7873");
r = r && ([...ms932Encoder.encode("硴")].join(",") === "225,235"); // U+7874
expect(() => {ms932Encoder.encode("\u7875")}).to.throw(Error, "EncodingError U+7875");
expect(() => {ms932Encoder.encode("\u7876")}).to.throw(Error, "EncodingError U+7876");
expect(() => {ms932Encoder.encode("\u7877")}).to.throw(Error, "EncodingError U+7877");
expect(() => {ms932Encoder.encode("\u7878")}).to.throw(Error, "EncodingError U+7878");
expect(() => {ms932Encoder.encode("\u7879")}).to.throw(Error, "EncodingError U+7879");
r = r && ([...ms932Encoder.encode("硺")].join(",") === "251,123"); // U+787A
expect(() => {ms932Encoder.encode("\u787B")}).to.throw(Error, "EncodingError U+787B");
r = r && ([...ms932Encoder.encode("硼")].join(",") === "225,237"); // U+787C
expect(() => {ms932Encoder.encode("\u787D")}).to.throw(Error, "EncodingError U+787D");
expect(() => {ms932Encoder.encode("\u787E")}).to.throw(Error, "EncodingError U+787E");
expect(() => {ms932Encoder.encode("\u787F")}).to.throw(Error, "EncodingError U+787F");
expect(() => {ms932Encoder.encode("\u7880")}).to.throw(Error, "EncodingError U+7880");
r = r && ([...ms932Encoder.encode("碁")].join(",") === "140,233"); // U+7881
expect(() => {ms932Encoder.encode("\u7882")}).to.throw(Error, "EncodingError U+7882");
expect(() => {ms932Encoder.encode("\u7883")}).to.throw(Error, "EncodingError U+7883");
expect(() => {ms932Encoder.encode("\u7884")}).to.throw(Error, "EncodingError U+7884");
expect(() => {ms932Encoder.encode("\u7885")}).to.throw(Error, "EncodingError U+7885");
r = r && ([...ms932Encoder.encode("碆碇")].join(",") === "225,236,146,244"); // U+7886
expect(() => {ms932Encoder.encode("\u7888")}).to.throw(Error, "EncodingError U+7888");
expect(() => {ms932Encoder.encode("\u7889")}).to.throw(Error, "EncodingError U+7889");
expect(() => {ms932Encoder.encode("\u788A")}).to.throw(Error, "EncodingError U+788A");
expect(() => {ms932Encoder.encode("\u788B")}).to.throw(Error, "EncodingError U+788B");
r = r && ([...ms932Encoder.encode("碌碍碎")].join(",") === "225,239,138,86,225,234"); // U+788C
expect(() => {ms932Encoder.encode("\u788F")}).to.throw(Error, "EncodingError U+788F");
expect(() => {ms932Encoder.encode("\u7890")}).to.throw(Error, "EncodingError U+7890");
r = r && ([...ms932Encoder.encode("碑")].join(",") === "148,232"); // U+7891
expect(() => {ms932Encoder.encode("\u7892")}).to.throw(Error, "EncodingError U+7892");
r = r && ([...ms932Encoder.encode("碓")].join(",") === "137,79"); // U+7893
expect(() => {ms932Encoder.encode("\u7894")}).to.throw(Error, "EncodingError U+7894");
r = r && ([...ms932Encoder.encode("碕")].join(",") === "141,234"); // U+7895
expect(() => {ms932Encoder.encode("\u7896")}).to.throw(Error, "EncodingError U+7896");
r = r && ([...ms932Encoder.encode("碗")].join(",") === "152,113"); // U+7897
expect(() => {ms932Encoder.encode("\u7898")}).to.throw(Error, "EncodingError U+7898");
expect(() => {ms932Encoder.encode("\u7899")}).to.throw(Error, "EncodingError U+7899");
r = r && ([...ms932Encoder.encode("碚")].join(",") === "225,238"); // U+789A
expect(() => {ms932Encoder.encode("\u789B")}).to.throw(Error, "EncodingError U+789B");
expect(() => {ms932Encoder.encode("\u789C")}).to.throw(Error, "EncodingError U+789C");
expect(() => {ms932Encoder.encode("\u789D")}).to.throw(Error, "EncodingError U+789D");
expect(() => {ms932Encoder.encode("\u789E")}).to.throw(Error, "EncodingError U+789E");
expect(() => {ms932Encoder.encode("\u789F")}).to.throw(Error, "EncodingError U+789F");
expect(() => {ms932Encoder.encode("\u78A0")}).to.throw(Error, "EncodingError U+78A0");
expect(() => {ms932Encoder.encode("\u78A1")}).to.throw(Error, "EncodingError U+78A1");
expect(() => {ms932Encoder.encode("\u78A2")}).to.throw(Error, "EncodingError U+78A2");
r = r && ([...ms932Encoder.encode("碣")].join(",") === "225,240"); // U+78A3
expect(() => {ms932Encoder.encode("\u78A4")}).to.throw(Error, "EncodingError U+78A4");
expect(() => {ms932Encoder.encode("\u78A5")}).to.throw(Error, "EncodingError U+78A5");
expect(() => {ms932Encoder.encode("\u78A6")}).to.throw(Error, "EncodingError U+78A6");
r = r && ([...ms932Encoder.encode("碧")].join(",") === "149,201"); // U+78A7
expect(() => {ms932Encoder.encode("\u78A8")}).to.throw(Error, "EncodingError U+78A8");
r = r && ([...ms932Encoder.encode("碩碪")].join(",") === "144,215,225,242"); // U+78A9
expect(() => {ms932Encoder.encode("\u78AB")}).to.throw(Error, "EncodingError U+78AB");
expect(() => {ms932Encoder.encode("\u78AC")}).to.throw(Error, "EncodingError U+78AC");
expect(() => {ms932Encoder.encode("\u78AD")}).to.throw(Error, "EncodingError U+78AD");
expect(() => {ms932Encoder.encode("\u78AE")}).to.throw(Error, "EncodingError U+78AE");
r = r && ([...ms932Encoder.encode("碯")].join(",") === "225,243"); // U+78AF
expect(() => {ms932Encoder.encode("\u78B0")}).to.throw(Error, "EncodingError U+78B0");
expect(() => {ms932Encoder.encode("\u78B1")}).to.throw(Error, "EncodingError U+78B1");
expect(() => {ms932Encoder.encode("\u78B2")}).to.throw(Error, "EncodingError U+78B2");
expect(() => {ms932Encoder.encode("\u78B3")}).to.throw(Error, "EncodingError U+78B3");
expect(() => {ms932Encoder.encode("\u78B4")}).to.throw(Error, "EncodingError U+78B4");
r = r && ([...ms932Encoder.encode("碵")].join(",") === "225,241"); // U+78B5
expect(() => {ms932Encoder.encode("\u78B6")}).to.throw(Error, "EncodingError U+78B6");
expect(() => {ms932Encoder.encode("\u78B7")}).to.throw(Error, "EncodingError U+78B7");
expect(() => {ms932Encoder.encode("\u78B8")}).to.throw(Error, "EncodingError U+78B8");
expect(() => {ms932Encoder.encode("\u78B9")}).to.throw(Error, "EncodingError U+78B9");
r = r && ([...ms932Encoder.encode("確")].join(",") === "138,109"); // U+78BA
expect(() => {ms932Encoder.encode("\u78BB")}).to.throw(Error, "EncodingError U+78BB");
r = r && ([...ms932Encoder.encode("碼")].join(",") === "225,249"); // U+78BC
expect(() => {ms932Encoder.encode("\u78BD")}).to.throw(Error, "EncodingError U+78BD");
r = r && ([...ms932Encoder.encode("碾")].join(",") === "225,248"); // U+78BE
expect(() => {ms932Encoder.encode("\u78BF")}).to.throw(Error, "EncodingError U+78BF");
expect(() => {ms932Encoder.encode("\u78C0")}).to.throw(Error, "EncodingError U+78C0");
r = r && ([...ms932Encoder.encode("磁")].join(",") === "142,165"); // U+78C1
expect(() => {ms932Encoder.encode("\u78C2")}).to.throw(Error, "EncodingError U+78C2");
expect(() => {ms932Encoder.encode("\u78C3")}).to.throw(Error, "EncodingError U+78C3");
expect(() => {ms932Encoder.encode("\u78C4")}).to.throw(Error, "EncodingError U+78C4");
r = r && ([...ms932Encoder.encode("磅磆")].join(",") === "225,250,225,245"); // U+78C5
expect(() => {ms932Encoder.encode("\u78C7")}).to.throw(Error, "EncodingError U+78C7");
expect(() => {ms932Encoder.encode("\u78C8")}).to.throw(Error, "EncodingError U+78C8");
expect(() => {ms932Encoder.encode("\u78C9")}).to.throw(Error, "EncodingError U+78C9");
r = r && ([...ms932Encoder.encode("磊磋")].join(",") === "225,251,225,246"); // U+78CA
expect(() => {ms932Encoder.encode("\u78CC")}).to.throw(Error, "EncodingError U+78CC");
expect(() => {ms932Encoder.encode("\u78CD")}).to.throw(Error, "EncodingError U+78CD");
expect(() => {ms932Encoder.encode("\u78CE")}).to.throw(Error, "EncodingError U+78CE");
expect(() => {ms932Encoder.encode("\u78CF")}).to.throw(Error, "EncodingError U+78CF");
r = r && ([...ms932Encoder.encode("磐磑")].join(",") === "148,214,225,244"); // U+78D0
expect(() => {ms932Encoder.encode("\u78D2")}).to.throw(Error, "EncodingError U+78D2");
expect(() => {ms932Encoder.encode("\u78D3")}).to.throw(Error, "EncodingError U+78D3");
r = r && ([...ms932Encoder.encode("磔")].join(",") === "225,247"); // U+78D4
expect(() => {ms932Encoder.encode("\u78D5")}).to.throw(Error, "EncodingError U+78D5");
expect(() => {ms932Encoder.encode("\u78D6")}).to.throw(Error, "EncodingError U+78D6");
expect(() => {ms932Encoder.encode("\u78D7")}).to.throw(Error, "EncodingError U+78D7");
expect(() => {ms932Encoder.encode("\u78D8")}).to.throw(Error, "EncodingError U+78D8");
expect(() => {ms932Encoder.encode("\u78D9")}).to.throw(Error, "EncodingError U+78D9");
r = r && ([...ms932Encoder.encode("磚")].join(",") === "226,65"); // U+78DA
expect(() => {ms932Encoder.encode("\u78DB")}).to.throw(Error, "EncodingError U+78DB");
expect(() => {ms932Encoder.encode("\u78DC")}).to.throw(Error, "EncodingError U+78DC");
expect(() => {ms932Encoder.encode("\u78DD")}).to.throw(Error, "EncodingError U+78DD");
expect(() => {ms932Encoder.encode("\u78DE")}).to.throw(Error, "EncodingError U+78DE");
expect(() => {ms932Encoder.encode("\u78DF")}).to.throw(Error, "EncodingError U+78DF");
expect(() => {ms932Encoder.encode("\u78E0")}).to.throw(Error, "EncodingError U+78E0");
expect(() => {ms932Encoder.encode("\u78E1")}).to.throw(Error, "EncodingError U+78E1");
expect(() => {ms932Encoder.encode("\u78E2")}).to.throw(Error, "EncodingError U+78E2");
expect(() => {ms932Encoder.encode("\u78E3")}).to.throw(Error, "EncodingError U+78E3");
expect(() => {ms932Encoder.encode("\u78E4")}).to.throw(Error, "EncodingError U+78E4");
expect(() => {ms932Encoder.encode("\u78E5")}).to.throw(Error, "EncodingError U+78E5");
expect(() => {ms932Encoder.encode("\u78E6")}).to.throw(Error, "EncodingError U+78E6");
r = r && ([...ms932Encoder.encode("磧磨")].join(",") === "226,64,150,129"); // U+78E7
expect(() => {ms932Encoder.encode("\u78E9")}).to.throw(Error, "EncodingError U+78E9");
expect(() => {ms932Encoder.encode("\u78EA")}).to.throw(Error, "EncodingError U+78EA");
expect(() => {ms932Encoder.encode("\u78EB")}).to.throw(Error, "EncodingError U+78EB");
r = r && ([...ms932Encoder.encode("磬")].join(",") === "225,252"); // U+78EC
expect(() => {ms932Encoder.encode("\u78ED")}).to.throw(Error, "EncodingError U+78ED");
expect(() => {ms932Encoder.encode("\u78EE")}).to.throw(Error, "EncodingError U+78EE");
r = r && ([...ms932Encoder.encode("磯")].join(",") === "136,233"); // U+78EF
expect(() => {ms932Encoder.encode("\u78F0")}).to.throw(Error, "EncodingError U+78F0");
expect(() => {ms932Encoder.encode("\u78F1")}).to.throw(Error, "EncodingError U+78F1");
expect(() => {ms932Encoder.encode("\u78F2")}).to.throw(Error, "EncodingError U+78F2");
expect(() => {ms932Encoder.encode("\u78F3")}).to.throw(Error, "EncodingError U+78F3");
r = r && ([...ms932Encoder.encode("磴")].join(",") === "226,67"); // U+78F4
expect(() => {ms932Encoder.encode("\u78F5")}).to.throw(Error, "EncodingError U+78F5");
expect(() => {ms932Encoder.encode("\u78F6")}).to.throw(Error, "EncodingError U+78F6");
expect(() => {ms932Encoder.encode("\u78F7")}).to.throw(Error, "EncodingError U+78F7");
expect(() => {ms932Encoder.encode("\u78F8")}).to.throw(Error, "EncodingError U+78F8");
expect(() => {ms932Encoder.encode("\u78F9")}).to.throw(Error, "EncodingError U+78F9");
expect(() => {ms932Encoder.encode("\u78FA")}).to.throw(Error, "EncodingError U+78FA");
expect(() => {ms932Encoder.encode("\u78FB")}).to.throw(Error, "EncodingError U+78FB");
expect(() => {ms932Encoder.encode("\u78FC")}).to.throw(Error, "EncodingError U+78FC");
r = r && ([...ms932Encoder.encode("磽")].join(",") === "226,66"); // U+78FD
expect(() => {ms932Encoder.encode("\u78FE")}).to.throw(Error, "EncodingError U+78FE");
expect(() => {ms932Encoder.encode("\u78FF")}).to.throw(Error, "EncodingError U+78FF");
expect(() => {ms932Encoder.encode("\u7900")}).to.throw(Error, "EncodingError U+7900");
r = r && ([...ms932Encoder.encode("礁")].join(",") === "143,202"); // U+7901
expect(() => {ms932Encoder.encode("\u7902")}).to.throw(Error, "EncodingError U+7902");
expect(() => {ms932Encoder.encode("\u7903")}).to.throw(Error, "EncodingError U+7903");
expect(() => {ms932Encoder.encode("\u7904")}).to.throw(Error, "EncodingError U+7904");
expect(() => {ms932Encoder.encode("\u7905")}).to.throw(Error, "EncodingError U+7905");
expect(() => {ms932Encoder.encode("\u7906")}).to.throw(Error, "EncodingError U+7906");
r = r && ([...ms932Encoder.encode("礇")].join(",") === "226,68"); // U+7907
expect(() => {ms932Encoder.encode("\u7908")}).to.throw(Error, "EncodingError U+7908");
expect(() => {ms932Encoder.encode("\u7909")}).to.throw(Error, "EncodingError U+7909");
expect(() => {ms932Encoder.encode("\u790A")}).to.throw(Error, "EncodingError U+790A");
expect(() => {ms932Encoder.encode("\u790B")}).to.throw(Error, "EncodingError U+790B");
expect(() => {ms932Encoder.encode("\u790C")}).to.throw(Error, "EncodingError U+790C");
expect(() => {ms932Encoder.encode("\u790D")}).to.throw(Error, "EncodingError U+790D");
r = r && ([...ms932Encoder.encode("礎")].join(",") === "145,98"); // U+790E
expect(() => {ms932Encoder.encode("\u790F")}).to.throw(Error, "EncodingError U+790F");
expect(() => {ms932Encoder.encode("\u7910")}).to.throw(Error, "EncodingError U+7910");
r = r && ([...ms932Encoder.encode("礑礒")].join(",") === "226,70,226,69"); // U+7911
expect(() => {ms932Encoder.encode("\u7913")}).to.throw(Error, "EncodingError U+7913");
expect(() => {ms932Encoder.encode("\u7914")}).to.throw(Error, "EncodingError U+7914");
expect(() => {ms932Encoder.encode("\u7915")}).to.throw(Error, "EncodingError U+7915");
expect(() => {ms932Encoder.encode("\u7916")}).to.throw(Error, "EncodingError U+7916");
expect(() => {ms932Encoder.encode("\u7917")}).to.throw(Error, "EncodingError U+7917");
expect(() => {ms932Encoder.encode("\u7918")}).to.throw(Error, "EncodingError U+7918");
r = r && ([...ms932Encoder.encode("礙")].join(",") === "226,71"); // U+7919
expect(() => {ms932Encoder.encode("\u791A")}).to.throw(Error, "EncodingError U+791A");
expect(() => {ms932Encoder.encode("\u791B")}).to.throw(Error, "EncodingError U+791B");
expect(() => {ms932Encoder.encode("\u791C")}).to.throw(Error, "EncodingError U+791C");
expect(() => {ms932Encoder.encode("\u791D")}).to.throw(Error, "EncodingError U+791D");
expect(() => {ms932Encoder.encode("\u791E")}).to.throw(Error, "EncodingError U+791E");
expect(() => {ms932Encoder.encode("\u791F")}).to.throw(Error, "EncodingError U+791F");
expect(() => {ms932Encoder.encode("\u7920")}).to.throw(Error, "EncodingError U+7920");
expect(() => {ms932Encoder.encode("\u7921")}).to.throw(Error, "EncodingError U+7921");
expect(() => {ms932Encoder.encode("\u7922")}).to.throw(Error, "EncodingError U+7922");
expect(() => {ms932Encoder.encode("\u7923")}).to.throw(Error, "EncodingError U+7923");
expect(() => {ms932Encoder.encode("\u7924")}).to.throw(Error, "EncodingError U+7924");
expect(() => {ms932Encoder.encode("\u7925")}).to.throw(Error, "EncodingError U+7925");
r = r && ([...ms932Encoder.encode("礦")].join(",") === "225,230"); // U+7926
expect(() => {ms932Encoder.encode("\u7927")}).to.throw(Error, "EncodingError U+7927");
expect(() => {ms932Encoder.encode("\u7928")}).to.throw(Error, "EncodingError U+7928");
expect(() => {ms932Encoder.encode("\u7929")}).to.throw(Error, "EncodingError U+7929");
r = r && ([...ms932Encoder.encode("礪礫礬")].join(",") === "225,232,226,73,226,72"); // U+792A
expect(() => {ms932Encoder.encode("\u792D")}).to.throw(Error, "EncodingError U+792D");
expect(() => {ms932Encoder.encode("\u792E")}).to.throw(Error, "EncodingError U+792E");
expect(() => {ms932Encoder.encode("\u792F")}).to.throw(Error, "EncodingError U+792F");
r = r && ([...ms932Encoder.encode("礰")].join(",") === "251,124"); // U+7930
expect(() => {ms932Encoder.encode("\u7931")}).to.throw(Error, "EncodingError U+7931");
expect(() => {ms932Encoder.encode("\u7932")}).to.throw(Error, "EncodingError U+7932");
expect(() => {ms932Encoder.encode("\u7933")}).to.throw(Error, "EncodingError U+7933");
expect(() => {ms932Encoder.encode("\u7934")}).to.throw(Error, "EncodingError U+7934");
expect(() => {ms932Encoder.encode("\u7935")}).to.throw(Error, "EncodingError U+7935");
expect(() => {ms932Encoder.encode("\u7936")}).to.throw(Error, "EncodingError U+7936");
expect(() => {ms932Encoder.encode("\u7937")}).to.throw(Error, "EncodingError U+7937");
expect(() => {ms932Encoder.encode("\u7938")}).to.throw(Error, "EncodingError U+7938");
expect(() => {ms932Encoder.encode("\u7939")}).to.throw(Error, "EncodingError U+7939");
r = r && ([...ms932Encoder.encode("示")].join(",") === "142,166"); // U+793A
expect(() => {ms932Encoder.encode("\u793B")}).to.throw(Error, "EncodingError U+793B");
r = r && ([...ms932Encoder.encode("礼")].join(",") === "151,231"); // U+793C
expect(() => {ms932Encoder.encode("\u793D")}).to.throw(Error, "EncodingError U+793D");
r = r && ([...ms932Encoder.encode("社")].join(",") === "142,208"); // U+793E
expect(() => {ms932Encoder.encode("\u793F")}).to.throw(Error, "EncodingError U+793F");
r = r && ([...ms932Encoder.encode("祀祁")].join(",") === "226,74,140,86"); // U+7940
expect(() => {ms932Encoder.encode("\u7942")}).to.throw(Error, "EncodingError U+7942");
expect(() => {ms932Encoder.encode("\u7943")}).to.throw(Error, "EncodingError U+7943");
expect(() => {ms932Encoder.encode("\u7944")}).to.throw(Error, "EncodingError U+7944");
expect(() => {ms932Encoder.encode("\u7945")}).to.throw(Error, "EncodingError U+7945");
expect(() => {ms932Encoder.encode("\u7946")}).to.throw(Error, "EncodingError U+7946");
r = r && ([...ms932Encoder.encode("祇祈祉")].join(",") === "139,95,139,70,142,131"); // U+7947
expect(() => {ms932Encoder.encode("\u794A")}).to.throw(Error, "EncodingError U+794A");
expect(() => {ms932Encoder.encode("\u794B")}).to.throw(Error, "EncodingError U+794B");
expect(() => {ms932Encoder.encode("\u794C")}).to.throw(Error, "EncodingError U+794C");
expect(() => {ms932Encoder.encode("\u794D")}).to.throw(Error, "EncodingError U+794D");
expect(() => {ms932Encoder.encode("\u794E")}).to.throw(Error, "EncodingError U+794E");
expect(() => {ms932Encoder.encode("\u794F")}).to.throw(Error, "EncodingError U+794F");
r = r && ([...ms932Encoder.encode("祐")].join(",") === "151,83"); // U+7950
expect(() => {ms932Encoder.encode("\u7951")}).to.throw(Error, "EncodingError U+7951");
expect(() => {ms932Encoder.encode("\u7952")}).to.throw(Error, "EncodingError U+7952");
r = r && ([...ms932Encoder.encode("祓")].join(",") === "226,80"); // U+7953
expect(() => {ms932Encoder.encode("\u7954")}).to.throw(Error, "EncodingError U+7954");
r = r && ([...ms932Encoder.encode("祕祖祗")].join(",") === "226,79,145,99,226,76"); // U+7955
expect(() => {ms932Encoder.encode("\u7958")}).to.throw(Error, "EncodingError U+7958");
expect(() => {ms932Encoder.encode("\u7959")}).to.throw(Error, "EncodingError U+7959");
r = r && ([...ms932Encoder.encode("祚")].join(",") === "226,78"); // U+795A
expect(() => {ms932Encoder.encode("\u795B")}).to.throw(Error, "EncodingError U+795B");
expect(() => {ms932Encoder.encode("\u795C")}).to.throw(Error, "EncodingError U+795C");
r = r && ([...ms932Encoder.encode("祝神祟祠")].join(",") === "143,106,144,95,226,77,226,75"); // U+795D
expect(() => {ms932Encoder.encode("\u7961")}).to.throw(Error, "EncodingError U+7961");
r = r && ([...ms932Encoder.encode("祢")].join(",") === "148,73"); // U+7962
expect(() => {ms932Encoder.encode("\u7963")}).to.throw(Error, "EncodingError U+7963");
expect(() => {ms932Encoder.encode("\u7964")}).to.throw(Error, "EncodingError U+7964");
r = r && ([...ms932Encoder.encode("祥")].join(",") === "143,203"); // U+7965
expect(() => {ms932Encoder.encode("\u7966")}).to.throw(Error, "EncodingError U+7966");
expect(() => {ms932Encoder.encode("\u7967")}).to.throw(Error, "EncodingError U+7967");
r = r && ([...ms932Encoder.encode("票")].join(",") === "149,91"); // U+7968
expect(() => {ms932Encoder.encode("\u7969")}).to.throw(Error, "EncodingError U+7969");
expect(() => {ms932Encoder.encode("\u796A")}).to.throw(Error, "EncodingError U+796A");
expect(() => {ms932Encoder.encode("\u796B")}).to.throw(Error, "EncodingError U+796B");
expect(() => {ms932Encoder.encode("\u796C")}).to.throw(Error, "EncodingError U+796C");
r = r && ([...ms932Encoder.encode("祭")].join(",") === "141,213"); // U+796D
expect(() => {ms932Encoder.encode("\u796E")}).to.throw(Error, "EncodingError U+796E");
expect(() => {ms932Encoder.encode("\u796F")}).to.throw(Error, "EncodingError U+796F");
expect(() => {ms932Encoder.encode("\u7970")}).to.throw(Error, "EncodingError U+7970");
expect(() => {ms932Encoder.encode("\u7971")}).to.throw(Error, "EncodingError U+7971");
expect(() => {ms932Encoder.encode("\u7972")}).to.throw(Error, "EncodingError U+7972");
expect(() => {ms932Encoder.encode("\u7973")}).to.throw(Error, "EncodingError U+7973");
expect(() => {ms932Encoder.encode("\u7974")}).to.throw(Error, "EncodingError U+7974");
expect(() => {ms932Encoder.encode("\u7975")}).to.throw(Error, "EncodingError U+7975");
expect(() => {ms932Encoder.encode("\u7976")}).to.throw(Error, "EncodingError U+7976");
r = r && ([...ms932Encoder.encode("祷")].join(",") === "147,152"); // U+7977
expect(() => {ms932Encoder.encode("\u7978")}).to.throw(Error, "EncodingError U+7978");
expect(() => {ms932Encoder.encode("\u7979")}).to.throw(Error, "EncodingError U+7979");
r = r && ([...ms932Encoder.encode("祺")].join(",") === "226,81"); // U+797A
expect(() => {ms932Encoder.encode("\u797B")}).to.throw(Error, "EncodingError U+797B");
expect(() => {ms932Encoder.encode("\u797C")}).to.throw(Error, "EncodingError U+797C");
expect(() => {ms932Encoder.encode("\u797D")}).to.throw(Error, "EncodingError U+797D");
expect(() => {ms932Encoder.encode("\u797E")}).to.throw(Error, "EncodingError U+797E");
r = r && ([...ms932Encoder.encode("祿禀禁")].join(",") === "226,82,226,104,139,214"); // U+797F
expect(() => {ms932Encoder.encode("\u7982")}).to.throw(Error, "EncodingError U+7982");
expect(() => {ms932Encoder.encode("\u7983")}).to.throw(Error, "EncodingError U+7983");
r = r && ([...ms932Encoder.encode("禄禅")].join(",") === "152,92,145,84"); // U+7984
expect(() => {ms932Encoder.encode("\u7986")}).to.throw(Error, "EncodingError U+7986");
expect(() => {ms932Encoder.encode("\u7987")}).to.throw(Error, "EncodingError U+7987");
expect(() => {ms932Encoder.encode("\u7988")}).to.throw(Error, "EncodingError U+7988");
expect(() => {ms932Encoder.encode("\u7989")}).to.throw(Error, "EncodingError U+7989");
r = r && ([...ms932Encoder.encode("禊")].join(",") === "226,83"); // U+798A
expect(() => {ms932Encoder.encode("\u798B")}).to.throw(Error, "EncodingError U+798B");
expect(() => {ms932Encoder.encode("\u798C")}).to.throw(Error, "EncodingError U+798C");
r = r && ([...ms932Encoder.encode("禍禎福")].join(",") === "137,208,146,245,149,159"); // U+798D
expect(() => {ms932Encoder.encode("\u7990")}).to.throw(Error, "EncodingError U+7990");
expect(() => {ms932Encoder.encode("\u7991")}).to.throw(Error, "EncodingError U+7991");
expect(() => {ms932Encoder.encode("\u7992")}).to.throw(Error, "EncodingError U+7992");
expect(() => {ms932Encoder.encode("\u7993")}).to.throw(Error, "EncodingError U+7993");
r = r && ([...ms932Encoder.encode("禔")].join(",") === "251,129"); // U+7994
expect(() => {ms932Encoder.encode("\u7995")}).to.throw(Error, "EncodingError U+7995");
expect(() => {ms932Encoder.encode("\u7996")}).to.throw(Error, "EncodingError U+7996");
expect(() => {ms932Encoder.encode("\u7997")}).to.throw(Error, "EncodingError U+7997");
expect(() => {ms932Encoder.encode("\u7998")}).to.throw(Error, "EncodingError U+7998");
expect(() => {ms932Encoder.encode("\u7999")}).to.throw(Error, "EncodingError U+7999");
expect(() => {ms932Encoder.encode("\u799A")}).to.throw(Error, "EncodingError U+799A");
r = r && ([...ms932Encoder.encode("禛")].join(",") === "251,131"); // U+799B
expect(() => {ms932Encoder.encode("\u799C")}).to.throw(Error, "EncodingError U+799C");
r = r && ([...ms932Encoder.encode("禝")].join(",") === "226,84"); // U+799D
expect(() => {ms932Encoder.encode("\u799E")}).to.throw(Error, "EncodingError U+799E");
expect(() => {ms932Encoder.encode("\u799F")}).to.throw(Error, "EncodingError U+799F");
expect(() => {ms932Encoder.encode("\u79A0")}).to.throw(Error, "EncodingError U+79A0");
expect(() => {ms932Encoder.encode("\u79A1")}).to.throw(Error, "EncodingError U+79A1");
expect(() => {ms932Encoder.encode("\u79A2")}).to.throw(Error, "EncodingError U+79A2");
expect(() => {ms932Encoder.encode("\u79A3")}).to.throw(Error, "EncodingError U+79A3");
expect(() => {ms932Encoder.encode("\u79A4")}).to.throw(Error, "EncodingError U+79A4");
expect(() => {ms932Encoder.encode("\u79A5")}).to.throw(Error, "EncodingError U+79A5");
r = r && ([...ms932Encoder.encode("禦禧")].join(",") === "139,154,226,85"); // U+79A6
expect(() => {ms932Encoder.encode("\u79A8")}).to.throw(Error, "EncodingError U+79A8");
expect(() => {ms932Encoder.encode("\u79A9")}).to.throw(Error, "EncodingError U+79A9");
r = r && ([...ms932Encoder.encode("禪")].join(",") === "226,87"); // U+79AA
expect(() => {ms932Encoder.encode("\u79AB")}).to.throw(Error, "EncodingError U+79AB");
expect(() => {ms932Encoder.encode("\u79AC")}).to.throw(Error, "EncodingError U+79AC");
expect(() => {ms932Encoder.encode("\u79AD")}).to.throw(Error, "EncodingError U+79AD");
r = r && ([...ms932Encoder.encode("禮")].join(",") === "226,88"); // U+79AE
expect(() => {ms932Encoder.encode("\u79AF")}).to.throw(Error, "EncodingError U+79AF");
r = r && ([...ms932Encoder.encode("禰")].join(",") === "148,72"); // U+79B0
expect(() => {ms932Encoder.encode("\u79B1")}).to.throw(Error, "EncodingError U+79B1");
expect(() => {ms932Encoder.encode("\u79B2")}).to.throw(Error, "EncodingError U+79B2");
r = r && ([...ms932Encoder.encode("禳")].join(",") === "226,89"); // U+79B3
expect(() => {ms932Encoder.encode("\u79B4")}).to.throw(Error, "EncodingError U+79B4");
expect(() => {ms932Encoder.encode("\u79B5")}).to.throw(Error, "EncodingError U+79B5");
expect(() => {ms932Encoder.encode("\u79B6")}).to.throw(Error, "EncodingError U+79B6");
expect(() => {ms932Encoder.encode("\u79B7")}).to.throw(Error, "EncodingError U+79B7");
expect(() => {ms932Encoder.encode("\u79B8")}).to.throw(Error, "EncodingError U+79B8");
r = r && ([...ms932Encoder.encode("禹禺")].join(",") === "226,90,226,91"); // U+79B9
expect(() => {ms932Encoder.encode("\u79BB")}).to.throw(Error, "EncodingError U+79BB");
expect(() => {ms932Encoder.encode("\u79BC")}).to.throw(Error, "EncodingError U+79BC");
r = r && ([...ms932Encoder.encode("禽禾禿秀私")].join(",") === "139,215,137,209,147,195,143,71,142,132"); // U+79BD
expect(() => {ms932Encoder.encode("\u79C2")}).to.throw(Error, "EncodingError U+79C2");
expect(() => {ms932Encoder.encode("\u79C3")}).to.throw(Error, "EncodingError U+79C3");
expect(() => {ms932Encoder.encode("\u79C4")}).to.throw(Error, "EncodingError U+79C4");
expect(() => {ms932Encoder.encode("\u79C5")}).to.throw(Error, "EncodingError U+79C5");
expect(() => {ms932Encoder.encode("\u79C6")}).to.throw(Error, "EncodingError U+79C6");
expect(() => {ms932Encoder.encode("\u79C7")}).to.throw(Error, "EncodingError U+79C7");
expect(() => {ms932Encoder.encode("\u79C8")}).to.throw(Error, "EncodingError U+79C8");
r = r && ([...ms932Encoder.encode("秉")].join(",") === "226,92"); // U+79C9
expect(() => {ms932Encoder.encode("\u79CA")}).to.throw(Error, "EncodingError U+79CA");
r = r && ([...ms932Encoder.encode("秋")].join(",") === "143,72"); // U+79CB
expect(() => {ms932Encoder.encode("\u79CC")}).to.throw(Error, "EncodingError U+79CC");
expect(() => {ms932Encoder.encode("\u79CD")}).to.throw(Error, "EncodingError U+79CD");
expect(() => {ms932Encoder.encode("\u79CE")}).to.throw(Error, "EncodingError U+79CE");
expect(() => {ms932Encoder.encode("\u79CF")}).to.throw(Error, "EncodingError U+79CF");
expect(() => {ms932Encoder.encode("\u79D0")}).to.throw(Error, "EncodingError U+79D0");
r = r && ([...ms932Encoder.encode("科秒")].join(",") === "137,200,149,98"); // U+79D1
expect(() => {ms932Encoder.encode("\u79D3")}).to.throw(Error, "EncodingError U+79D3");
expect(() => {ms932Encoder.encode("\u79D4")}).to.throw(Error, "EncodingError U+79D4");
r = r && ([...ms932Encoder.encode("秕")].join(",") === "226,93"); // U+79D5
expect(() => {ms932Encoder.encode("\u79D6")}).to.throw(Error, "EncodingError U+79D6");
expect(() => {ms932Encoder.encode("\u79D7")}).to.throw(Error, "EncodingError U+79D7");
r = r && ([...ms932Encoder.encode("秘")].join(",") === "148,233"); // U+79D8
expect(() => {ms932Encoder.encode("\u79D9")}).to.throw(Error, "EncodingError U+79D9");
expect(() => {ms932Encoder.encode("\u79DA")}).to.throw(Error, "EncodingError U+79DA");
expect(() => {ms932Encoder.encode("\u79DB")}).to.throw(Error, "EncodingError U+79DB");
expect(() => {ms932Encoder.encode("\u79DC")}).to.throw(Error, "EncodingError U+79DC");
expect(() => {ms932Encoder.encode("\u79DD")}).to.throw(Error, "EncodingError U+79DD");
expect(() => {ms932Encoder.encode("\u79DE")}).to.throw(Error, "EncodingError U+79DE");
r = r && ([...ms932Encoder.encode("租")].join(",") === "145,100"); // U+79DF
expect(() => {ms932Encoder.encode("\u79E0")}).to.throw(Error, "EncodingError U+79E0");
r = r && ([...ms932Encoder.encode("秡")].join(",") === "226,96"); // U+79E1
expect(() => {ms932Encoder.encode("\u79E2")}).to.throw(Error, "EncodingError U+79E2");
r = r && ([...ms932Encoder.encode("秣秤")].join(",") === "226,97,148,137"); // U+79E3
expect(() => {ms932Encoder.encode("\u79E5")}).to.throw(Error, "EncodingError U+79E5");
r = r && ([...ms932Encoder.encode("秦秧")].join(",") === "144,96,226,94"); // U+79E6
expect(() => {ms932Encoder.encode("\u79E8")}).to.throw(Error, "EncodingError U+79E8");
r = r && ([...ms932Encoder.encode("秩")].join(",") === "146,129"); // U+79E9
expect(() => {ms932Encoder.encode("\u79EA")}).to.throw(Error, "EncodingError U+79EA");
expect(() => {ms932Encoder.encode("\u79EB")}).to.throw(Error, "EncodingError U+79EB");
r = r && ([...ms932Encoder.encode("秬")].join(",") === "226,95"); // U+79EC
expect(() => {ms932Encoder.encode("\u79ED")}).to.throw(Error, "EncodingError U+79ED");
expect(() => {ms932Encoder.encode("\u79EE")}).to.throw(Error, "EncodingError U+79EE");
expect(() => {ms932Encoder.encode("\u79EF")}).to.throw(Error, "EncodingError U+79EF");
r = r && ([...ms932Encoder.encode("称")].join(",") === "143,204"); // U+79F0
expect(() => {ms932Encoder.encode("\u79F1")}).to.throw(Error, "EncodingError U+79F1");
expect(() => {ms932Encoder.encode("\u79F2")}).to.throw(Error, "EncodingError U+79F2");
expect(() => {ms932Encoder.encode("\u79F3")}).to.throw(Error, "EncodingError U+79F3");
expect(() => {ms932Encoder.encode("\u79F4")}).to.throw(Error, "EncodingError U+79F4");
expect(() => {ms932Encoder.encode("\u79F5")}).to.throw(Error, "EncodingError U+79F5");
expect(() => {ms932Encoder.encode("\u79F6")}).to.throw(Error, "EncodingError U+79F6");
expect(() => {ms932Encoder.encode("\u79F7")}).to.throw(Error, "EncodingError U+79F7");
expect(() => {ms932Encoder.encode("\u79F8")}).to.throw(Error, "EncodingError U+79F8");
expect(() => {ms932Encoder.encode("\u79F9")}).to.throw(Error, "EncodingError U+79F9");
expect(() => {ms932Encoder.encode("\u79FA")}).to.throw(Error, "EncodingError U+79FA");
r = r && ([...ms932Encoder.encode("移")].join(",") === "136,218"); // U+79FB
expect(() => {ms932Encoder.encode("\u79FC")}).to.throw(Error, "EncodingError U+79FC");
expect(() => {ms932Encoder.encode("\u79FD")}).to.throw(Error, "EncodingError U+79FD");
expect(() => {ms932Encoder.encode("\u79FE")}).to.throw(Error, "EncodingError U+79FE");
expect(() => {ms932Encoder.encode("\u79FF")}).to.throw(Error, "EncodingError U+79FF");
r = r && ([...ms932Encoder.encode("稀")].join(",") === "139,72"); // U+7A00
expect(() => {ms932Encoder.encode("\u7A01")}).to.throw(Error, "EncodingError U+7A01");
expect(() => {ms932Encoder.encode("\u7A02")}).to.throw(Error, "EncodingError U+7A02");
expect(() => {ms932Encoder.encode("\u7A03")}).to.throw(Error, "EncodingError U+7A03");
expect(() => {ms932Encoder.encode("\u7A04")}).to.throw(Error, "EncodingError U+7A04");
expect(() => {ms932Encoder.encode("\u7A05")}).to.throw(Error, "EncodingError U+7A05");
expect(() => {ms932Encoder.encode("\u7A06")}).to.throw(Error, "EncodingError U+7A06");
expect(() => {ms932Encoder.encode("\u7A07")}).to.throw(Error, "EncodingError U+7A07");
r = r && ([...ms932Encoder.encode("稈")].join(",") === "226,98"); // U+7A08
expect(() => {ms932Encoder.encode("\u7A09")}).to.throw(Error, "EncodingError U+7A09");
expect(() => {ms932Encoder.encode("\u7A0A")}).to.throw(Error, "EncodingError U+7A0A");
r = r && ([...ms932Encoder.encode("程")].join(",") === "146,246"); // U+7A0B
expect(() => {ms932Encoder.encode("\u7A0C")}).to.throw(Error, "EncodingError U+7A0C");
r = r && ([...ms932Encoder.encode("稍税")].join(",") === "226,99,144,197"); // U+7A0D
expect(() => {ms932Encoder.encode("\u7A0F")}).to.throw(Error, "EncodingError U+7A0F");
expect(() => {ms932Encoder.encode("\u7A10")}).to.throw(Error, "EncodingError U+7A10");
expect(() => {ms932Encoder.encode("\u7A11")}).to.throw(Error, "EncodingError U+7A11");
expect(() => {ms932Encoder.encode("\u7A12")}).to.throw(Error, "EncodingError U+7A12");
expect(() => {ms932Encoder.encode("\u7A13")}).to.throw(Error, "EncodingError U+7A13");
r = r && ([...ms932Encoder.encode("稔")].join(",") === "150,171"); // U+7A14
expect(() => {ms932Encoder.encode("\u7A15")}).to.throw(Error, "EncodingError U+7A15");
expect(() => {ms932Encoder.encode("\u7A16")}).to.throw(Error, "EncodingError U+7A16");
r = r && ([...ms932Encoder.encode("稗稘稙稚")].join(",") === "149,66,226,100,226,101,146,116"); // U+7A17
expect(() => {ms932Encoder.encode("\u7A1B")}).to.throw(Error, "EncodingError U+7A1B");
r = r && ([...ms932Encoder.encode("稜")].join(",") === "151,197"); // U+7A1C
expect(() => {ms932Encoder.encode("\u7A1D")}).to.throw(Error, "EncodingError U+7A1D");
expect(() => {ms932Encoder.encode("\u7A1E")}).to.throw(Error, "EncodingError U+7A1E");
r = r && ([...ms932Encoder.encode("稟稠")].join(",") === "226,103,226,102"); // U+7A1F
expect(() => {ms932Encoder.encode("\u7A21")}).to.throw(Error, "EncodingError U+7A21");
expect(() => {ms932Encoder.encode("\u7A22")}).to.throw(Error, "EncodingError U+7A22");
expect(() => {ms932Encoder.encode("\u7A23")}).to.throw(Error, "EncodingError U+7A23");
expect(() => {ms932Encoder.encode("\u7A24")}).to.throw(Error, "EncodingError U+7A24");
expect(() => {ms932Encoder.encode("\u7A25")}).to.throw(Error, "EncodingError U+7A25");
expect(() => {ms932Encoder.encode("\u7A26")}).to.throw(Error, "EncodingError U+7A26");
expect(() => {ms932Encoder.encode("\u7A27")}).to.throw(Error, "EncodingError U+7A27");
expect(() => {ms932Encoder.encode("\u7A28")}).to.throw(Error, "EncodingError U+7A28");
expect(() => {ms932Encoder.encode("\u7A29")}).to.throw(Error, "EncodingError U+7A29");
expect(() => {ms932Encoder.encode("\u7A2A")}).to.throw(Error, "EncodingError U+7A2A");
expect(() => {ms932Encoder.encode("\u7A2B")}).to.throw(Error, "EncodingError U+7A2B");
expect(() => {ms932Encoder.encode("\u7A2C")}).to.throw(Error, "EncodingError U+7A2C");
expect(() => {ms932Encoder.encode("\u7A2D")}).to.throw(Error, "EncodingError U+7A2D");
r = r && ([...ms932Encoder.encode("種")].join(",") === "142,237"); // U+7A2E
expect(() => {ms932Encoder.encode("\u7A2F")}).to.throw(Error, "EncodingError U+7A2F");
expect(() => {ms932Encoder.encode("\u7A30")}).to.throw(Error, "EncodingError U+7A30");
r = r && ([...ms932Encoder.encode("稱稲")].join(",") === "226,105,136,238"); // U+7A31
expect(() => {ms932Encoder.encode("\u7A33")}).to.throw(Error, "EncodingError U+7A33");
expect(() => {ms932Encoder.encode("\u7A34")}).to.throw(Error, "EncodingError U+7A34");
expect(() => {ms932Encoder.encode("\u7A35")}).to.throw(Error, "EncodingError U+7A35");
expect(() => {ms932Encoder.encode("\u7A36")}).to.throw(Error, "EncodingError U+7A36");
r = r && ([...ms932Encoder.encode("稷")].join(",") === "226,108"); // U+7A37
expect(() => {ms932Encoder.encode("\u7A38")}).to.throw(Error, "EncodingError U+7A38");
expect(() => {ms932Encoder.encode("\u7A39")}).to.throw(Error, "EncodingError U+7A39");
expect(() => {ms932Encoder.encode("\u7A3A")}).to.throw(Error, "EncodingError U+7A3A");
r = r && ([...ms932Encoder.encode("稻稼稽稾稿穀")].join(",") === "226,106,137,210,140,109,226,107,141,101,141,146"); // U+7A3B
expect(() => {ms932Encoder.encode("\u7A41")}).to.throw(Error, "EncodingError U+7A41");
r = r && ([...ms932Encoder.encode("穂穃")].join(",") === "149,228,226,109"); // U+7A42
expect(() => {ms932Encoder.encode("\u7A44")}).to.throw(Error, "EncodingError U+7A44");
expect(() => {ms932Encoder.encode("\u7A45")}).to.throw(Error, "EncodingError U+7A45");
r = r && ([...ms932Encoder.encode("穆")].join(",") === "150,115"); // U+7A46
expect(() => {ms932Encoder.encode("\u7A47")}).to.throw(Error, "EncodingError U+7A47");
expect(() => {ms932Encoder.encode("\u7A48")}).to.throw(Error, "EncodingError U+7A48");
r = r && ([...ms932Encoder.encode("穉")].join(",") === "226,111"); // U+7A49
expect(() => {ms932Encoder.encode("\u7A4A")}).to.throw(Error, "EncodingError U+7A4A");
expect(() => {ms932Encoder.encode("\u7A4B")}).to.throw(Error, "EncodingError U+7A4B");
expect(() => {ms932Encoder.encode("\u7A4C")}).to.throw(Error, "EncodingError U+7A4C");
r = r && ([...ms932Encoder.encode("積穎穏穐")].join(",") === "144,207,137,110,137,184,136,170"); // U+7A4D
expect(() => {ms932Encoder.encode("\u7A51")}).to.throw(Error, "EncodingError U+7A51");
expect(() => {ms932Encoder.encode("\u7A52")}).to.throw(Error, "EncodingError U+7A52");
expect(() => {ms932Encoder.encode("\u7A53")}).to.throw(Error, "EncodingError U+7A53");
expect(() => {ms932Encoder.encode("\u7A54")}).to.throw(Error, "EncodingError U+7A54");
expect(() => {ms932Encoder.encode("\u7A55")}).to.throw(Error, "EncodingError U+7A55");
expect(() => {ms932Encoder.encode("\u7A56")}).to.throw(Error, "EncodingError U+7A56");
r = r && ([...ms932Encoder.encode("穗")].join(",") === "226,110"); // U+7A57
expect(() => {ms932Encoder.encode("\u7A58")}).to.throw(Error, "EncodingError U+7A58");
expect(() => {ms932Encoder.encode("\u7A59")}).to.throw(Error, "EncodingError U+7A59");
expect(() => {ms932Encoder.encode("\u7A5A")}).to.throw(Error, "EncodingError U+7A5A");
expect(() => {ms932Encoder.encode("\u7A5B")}).to.throw(Error, "EncodingError U+7A5B");
expect(() => {ms932Encoder.encode("\u7A5C")}).to.throw(Error, "EncodingError U+7A5C");
expect(() => {ms932Encoder.encode("\u7A5D")}).to.throw(Error, "EncodingError U+7A5D");
expect(() => {ms932Encoder.encode("\u7A5E")}).to.throw(Error, "EncodingError U+7A5E");
expect(() => {ms932Encoder.encode("\u7A5F")}).to.throw(Error, "EncodingError U+7A5F");
expect(() => {ms932Encoder.encode("\u7A60")}).to.throw(Error, "EncodingError U+7A60");
r = r && ([...ms932Encoder.encode("穡穢穣")].join(",") === "226,112,226,113,143,245"); // U+7A61
expect(() => {ms932Encoder.encode("\u7A64")}).to.throw(Error, "EncodingError U+7A64");
expect(() => {ms932Encoder.encode("\u7A65")}).to.throw(Error, "EncodingError U+7A65");
expect(() => {ms932Encoder.encode("\u7A66")}).to.throw(Error, "EncodingError U+7A66");
expect(() => {ms932Encoder.encode("\u7A67")}).to.throw(Error, "EncodingError U+7A67");
expect(() => {ms932Encoder.encode("\u7A68")}).to.throw(Error, "EncodingError U+7A68");
r = r && ([...ms932Encoder.encode("穩")].join(",") === "226,114"); // U+7A69
expect(() => {ms932Encoder.encode("\u7A6A")}).to.throw(Error, "EncodingError U+7A6A");
r = r && ([...ms932Encoder.encode("穫")].join(",") === "138,110"); // U+7A6B
expect(() => {ms932Encoder.encode("\u7A6C")}).to.throw(Error, "EncodingError U+7A6C");
expect(() => {ms932Encoder.encode("\u7A6D")}).to.throw(Error, "EncodingError U+7A6D");
expect(() => {ms932Encoder.encode("\u7A6E")}).to.throw(Error, "EncodingError U+7A6E");
expect(() => {ms932Encoder.encode("\u7A6F")}).to.throw(Error, "EncodingError U+7A6F");
r = r && ([...ms932Encoder.encode("穰")].join(",") === "226,116"); // U+7A70
expect(() => {ms932Encoder.encode("\u7A71")}).to.throw(Error, "EncodingError U+7A71");
expect(() => {ms932Encoder.encode("\u7A72")}).to.throw(Error, "EncodingError U+7A72");
expect(() => {ms932Encoder.encode("\u7A73")}).to.throw(Error, "EncodingError U+7A73");
r = r && ([...ms932Encoder.encode("穴")].join(",") === "140,138"); // U+7A74
expect(() => {ms932Encoder.encode("\u7A75")}).to.throw(Error, "EncodingError U+7A75");
r = r && ([...ms932Encoder.encode("究")].join(",") === "139,134"); // U+7A76
expect(() => {ms932Encoder.encode("\u7A77")}).to.throw(Error, "EncodingError U+7A77");
expect(() => {ms932Encoder.encode("\u7A78")}).to.throw(Error, "EncodingError U+7A78");
r = r && ([...ms932Encoder.encode("穹空")].join(",") === "226,117,139,243"); // U+7A79
expect(() => {ms932Encoder.encode("\u7A7B")}).to.throw(Error, "EncodingError U+7A7B");
expect(() => {ms932Encoder.encode("\u7A7C")}).to.throw(Error, "EncodingError U+7A7C");
r = r && ([...ms932Encoder.encode("穽")].join(",") === "226,118"); // U+7A7D
expect(() => {ms932Encoder.encode("\u7A7E")}).to.throw(Error, "EncodingError U+7A7E");
r = r && ([...ms932Encoder.encode("穿")].join(",") === "144,250"); // U+7A7F
expect(() => {ms932Encoder.encode("\u7A80")}).to.throw(Error, "EncodingError U+7A80");
r = r && ([...ms932Encoder.encode("突")].join(",") === "147,203"); // U+7A81
expect(() => {ms932Encoder.encode("\u7A82")}).to.throw(Error, "EncodingError U+7A82");
r = r && ([...ms932Encoder.encode("窃窄")].join(",") === "144,222,141,243"); // U+7A83
expect(() => {ms932Encoder.encode("\u7A85")}).to.throw(Error, "EncodingError U+7A85");
expect(() => {ms932Encoder.encode("\u7A86")}).to.throw(Error, "EncodingError U+7A86");
expect(() => {ms932Encoder.encode("\u7A87")}).to.throw(Error, "EncodingError U+7A87");
r = r && ([...ms932Encoder.encode("窈")].join(",") === "226,119"); // U+7A88
expect(() => {ms932Encoder.encode("\u7A89")}).to.throw(Error, "EncodingError U+7A89");
expect(() => {ms932Encoder.encode("\u7A8A")}).to.throw(Error, "EncodingError U+7A8A");
expect(() => {ms932Encoder.encode("\u7A8B")}).to.throw(Error, "EncodingError U+7A8B");
expect(() => {ms932Encoder.encode("\u7A8C")}).to.throw(Error, "EncodingError U+7A8C");
expect(() => {ms932Encoder.encode("\u7A8D")}).to.throw(Error, "EncodingError U+7A8D");
expect(() => {ms932Encoder.encode("\u7A8E")}).to.throw(Error, "EncodingError U+7A8E");
expect(() => {ms932Encoder.encode("\u7A8F")}).to.throw(Error, "EncodingError U+7A8F");
expect(() => {ms932Encoder.encode("\u7A90")}).to.throw(Error, "EncodingError U+7A90");
expect(() => {ms932Encoder.encode("\u7A91")}).to.throw(Error, "EncodingError U+7A91");
r = r && ([...ms932Encoder.encode("窒窓")].join(",") === "146,130,145,139"); // U+7A92
expect(() => {ms932Encoder.encode("\u7A94")}).to.throw(Error, "EncodingError U+7A94");
r = r && ([...ms932Encoder.encode("窕窖窗窘")].join(",") === "226,121,226,123,226,120,226,122"); // U+7A95
expect(() => {ms932Encoder.encode("\u7A99")}).to.throw(Error, "EncodingError U+7A99");
expect(() => {ms932Encoder.encode("\u7A9A")}).to.throw(Error, "EncodingError U+7A9A");
expect(() => {ms932Encoder.encode("\u7A9B")}).to.throw(Error, "EncodingError U+7A9B");
expect(() => {ms932Encoder.encode("\u7A9C")}).to.throw(Error, "EncodingError U+7A9C");
expect(() => {ms932Encoder.encode("\u7A9D")}).to.throw(Error, "EncodingError U+7A9D");
expect(() => {ms932Encoder.encode("\u7A9E")}).to.throw(Error, "EncodingError U+7A9E");
r = r && ([...ms932Encoder.encode("窟")].join(",") === "140,65"); // U+7A9F
expect(() => {ms932Encoder.encode("\u7AA0")}).to.throw(Error, "EncodingError U+7AA0");
expect(() => {ms932Encoder.encode("\u7AA1")}).to.throw(Error, "EncodingError U+7AA1");
expect(() => {ms932Encoder.encode("\u7AA2")}).to.throw(Error, "EncodingError U+7AA2");
expect(() => {ms932Encoder.encode("\u7AA3")}).to.throw(Error, "EncodingError U+7AA3");
expect(() => {ms932Encoder.encode("\u7AA4")}).to.throw(Error, "EncodingError U+7AA4");
expect(() => {ms932Encoder.encode("\u7AA5")}).to.throw(Error, "EncodingError U+7AA5");
expect(() => {ms932Encoder.encode("\u7AA6")}).to.throw(Error, "EncodingError U+7AA6");
expect(() => {ms932Encoder.encode("\u7AA7")}).to.throw(Error, "EncodingError U+7AA7");
expect(() => {ms932Encoder.encode("\u7AA8")}).to.throw(Error, "EncodingError U+7AA8");
r = r && ([...ms932Encoder.encode("窩窪")].join(",") === "226,124,140,69"); // U+7AA9
expect(() => {ms932Encoder.encode("\u7AAB")}).to.throw(Error, "EncodingError U+7AAB");
expect(() => {ms932Encoder.encode("\u7AAC")}).to.throw(Error, "EncodingError U+7AAC");
expect(() => {ms932Encoder.encode("\u7AAD")}).to.throw(Error, "EncodingError U+7AAD");
r = r && ([...ms932Encoder.encode("窮窯窰")].join(",") === "139,135,151,113,226,126"); // U+7AAE
expect(() => {ms932Encoder.encode("\u7AB1")}).to.throw(Error, "EncodingError U+7AB1");
expect(() => {ms932Encoder.encode("\u7AB2")}).to.throw(Error, "EncodingError U+7AB2");
expect(() => {ms932Encoder.encode("\u7AB3")}).to.throw(Error, "EncodingError U+7AB3");
expect(() => {ms932Encoder.encode("\u7AB4")}).to.throw(Error, "EncodingError U+7AB4");
expect(() => {ms932Encoder.encode("\u7AB5")}).to.throw(Error, "EncodingError U+7AB5");
r = r && ([...ms932Encoder.encode("窶")].join(",") === "226,128"); // U+7AB6
expect(() => {ms932Encoder.encode("\u7AB7")}).to.throw(Error, "EncodingError U+7AB7");
expect(() => {ms932Encoder.encode("\u7AB8")}).to.throw(Error, "EncodingError U+7AB8");
expect(() => {ms932Encoder.encode("\u7AB9")}).to.throw(Error, "EncodingError U+7AB9");
r = r && ([...ms932Encoder.encode("窺")].join(",") === "137,77"); // U+7ABA
expect(() => {ms932Encoder.encode("\u7ABB")}).to.throw(Error, "EncodingError U+7ABB");
expect(() => {ms932Encoder.encode("\u7ABC")}).to.throw(Error, "EncodingError U+7ABC");
expect(() => {ms932Encoder.encode("\u7ABD")}).to.throw(Error, "EncodingError U+7ABD");
expect(() => {ms932Encoder.encode("\u7ABE")}).to.throw(Error, "EncodingError U+7ABE");
r = r && ([...ms932Encoder.encode("窿")].join(",") === "226,131"); // U+7ABF
expect(() => {ms932Encoder.encode("\u7AC0")}).to.throw(Error, "EncodingError U+7AC0");
expect(() => {ms932Encoder.encode("\u7AC1")}).to.throw(Error, "EncodingError U+7AC1");
expect(() => {ms932Encoder.encode("\u7AC2")}).to.throw(Error, "EncodingError U+7AC2");
r = r && ([...ms932Encoder.encode("竃竄竅")].join(",") === "138,150,226,130,226,129"); // U+7AC3
expect(() => {ms932Encoder.encode("\u7AC6")}).to.throw(Error, "EncodingError U+7AC6");
r = r && ([...ms932Encoder.encode("竇竈")].join(",") === "226,133,226,125"); // U+7AC7
expect(() => {ms932Encoder.encode("\u7AC9")}).to.throw(Error, "EncodingError U+7AC9");
r = r && ([...ms932Encoder.encode("竊立")].join(",") === "226,134,151,167"); // U+7ACA
expect(() => {ms932Encoder.encode("\u7ACC")}).to.throw(Error, "EncodingError U+7ACC");
r = r && ([...ms932Encoder.encode("竍")].join(",") === "226,135"); // U+7ACD
expect(() => {ms932Encoder.encode("\u7ACE")}).to.throw(Error, "EncodingError U+7ACE");
r = r && ([...ms932Encoder.encode("竏")].join(",") === "226,136"); // U+7ACF
expect(() => {ms932Encoder.encode("\u7AD0")}).to.throw(Error, "EncodingError U+7AD0");
r = r && ([...ms932Encoder.encode("竑竒竓")].join(",") === "251,132,154,242,226,138"); // U+7AD1
expect(() => {ms932Encoder.encode("\u7AD4")}).to.throw(Error, "EncodingError U+7AD4");
r = r && ([...ms932Encoder.encode("竕")].join(",") === "226,137"); // U+7AD5
expect(() => {ms932Encoder.encode("\u7AD6")}).to.throw(Error, "EncodingError U+7AD6");
expect(() => {ms932Encoder.encode("\u7AD7")}).to.throw(Error, "EncodingError U+7AD7");
expect(() => {ms932Encoder.encode("\u7AD8")}).to.throw(Error, "EncodingError U+7AD8");
r = r && ([...ms932Encoder.encode("站竚")].join(",") === "226,139,226,140"); // U+7AD9
expect(() => {ms932Encoder.encode("\u7ADB")}).to.throw(Error, "EncodingError U+7ADB");
r = r && ([...ms932Encoder.encode("竜竝")].join(",") === "151,179,226,141"); // U+7ADC
expect(() => {ms932Encoder.encode("\u7ADE")}).to.throw(Error, "EncodingError U+7ADE");
r = r && ([...ms932Encoder.encode("竟章竡竢竣")].join(",") === "232,237,143,205,226,142,226,143,143,118"); // U+7ADF
expect(() => {ms932Encoder.encode("\u7AE4")}).to.throw(Error, "EncodingError U+7AE4");
r = r && ([...ms932Encoder.encode("童竦竧")].join(",") === "147,182,226,144,251,133"); // U+7AE5
expect(() => {ms932Encoder.encode("\u7AE8")}).to.throw(Error, "EncodingError U+7AE8");
expect(() => {ms932Encoder.encode("\u7AE9")}).to.throw(Error, "EncodingError U+7AE9");
r = r && ([...ms932Encoder.encode("竪竫")].join(",") === "146,71,251,135"); // U+7AEA
expect(() => {ms932Encoder.encode("\u7AEC")}).to.throw(Error, "EncodingError U+7AEC");
r = r && ([...ms932Encoder.encode("竭")].join(",") === "226,145"); // U+7AED
expect(() => {ms932Encoder.encode("\u7AEE")}).to.throw(Error, "EncodingError U+7AEE");
r = r && ([...ms932Encoder.encode("端竰")].join(",") === "146,91,226,146"); // U+7AEF
expect(() => {ms932Encoder.encode("\u7AF1")}).to.throw(Error, "EncodingError U+7AF1");
expect(() => {ms932Encoder.encode("\u7AF2")}).to.throw(Error, "EncodingError U+7AF2");
expect(() => {ms932Encoder.encode("\u7AF3")}).to.throw(Error, "EncodingError U+7AF3");
expect(() => {ms932Encoder.encode("\u7AF4")}).to.throw(Error, "EncodingError U+7AF4");
expect(() => {ms932Encoder.encode("\u7AF5")}).to.throw(Error, "EncodingError U+7AF5");
r = r && ([...ms932Encoder.encode("競")].join(",") === "139,163"); // U+7AF6
expect(() => {ms932Encoder.encode("\u7AF7")}).to.throw(Error, "EncodingError U+7AF7");
r = r && ([...ms932Encoder.encode("竸竹竺")].join(",") === "153,94,146,124,142,177"); // U+7AF8
expect(() => {ms932Encoder.encode("\u7AFB")}).to.throw(Error, "EncodingError U+7AFB");
expect(() => {ms932Encoder.encode("\u7AFC")}).to.throw(Error, "EncodingError U+7AFC");
expect(() => {ms932Encoder.encode("\u7AFD")}).to.throw(Error, "EncodingError U+7AFD");
expect(() => {ms932Encoder.encode("\u7AFE")}).to.throw(Error, "EncodingError U+7AFE");
r = r && ([...ms932Encoder.encode("竿")].join(",") === "138,198"); // U+7AFF
expect(() => {ms932Encoder.encode("\u7B00")}).to.throw(Error, "EncodingError U+7B00");
expect(() => {ms932Encoder.encode("\u7B01")}).to.throw(Error, "EncodingError U+7B01");
r = r && ([...ms932Encoder.encode("笂")].join(",") === "226,147"); // U+7B02
expect(() => {ms932Encoder.encode("\u7B03")}).to.throw(Error, "EncodingError U+7B03");
r = r && ([...ms932Encoder.encode("笄")].join(",") === "226,160"); // U+7B04
expect(() => {ms932Encoder.encode("\u7B05")}).to.throw(Error, "EncodingError U+7B05");
r = r && ([...ms932Encoder.encode("笆")].join(",") === "226,150"); // U+7B06
expect(() => {ms932Encoder.encode("\u7B07")}).to.throw(Error, "EncodingError U+7B07");
r = r && ([...ms932Encoder.encode("笈")].join(",") === "139,136"); // U+7B08
expect(() => {ms932Encoder.encode("\u7B09")}).to.throw(Error, "EncodingError U+7B09");
r = r && ([...ms932Encoder.encode("笊笋")].join(",") === "226,149,226,162"); // U+7B0A
expect(() => {ms932Encoder.encode("\u7B0C")}).to.throw(Error, "EncodingError U+7B0C");
expect(() => {ms932Encoder.encode("\u7B0D")}).to.throw(Error, "EncodingError U+7B0D");
expect(() => {ms932Encoder.encode("\u7B0E")}).to.throw(Error, "EncodingError U+7B0E");
r = r && ([...ms932Encoder.encode("笏")].join(",") === "226,148"); // U+7B0F
expect(() => {ms932Encoder.encode("\u7B10")}).to.throw(Error, "EncodingError U+7B10");
r = r && ([...ms932Encoder.encode("笑")].join(",") === "143,206"); // U+7B11
expect(() => {ms932Encoder.encode("\u7B12")}).to.throw(Error, "EncodingError U+7B12");
expect(() => {ms932Encoder.encode("\u7B13")}).to.throw(Error, "EncodingError U+7B13");
expect(() => {ms932Encoder.encode("\u7B14")}).to.throw(Error, "EncodingError U+7B14");
expect(() => {ms932Encoder.encode("\u7B15")}).to.throw(Error, "EncodingError U+7B15");
expect(() => {ms932Encoder.encode("\u7B16")}).to.throw(Error, "EncodingError U+7B16");
expect(() => {ms932Encoder.encode("\u7B17")}).to.throw(Error, "EncodingError U+7B17");
r = r && ([...ms932Encoder.encode("笘笙")].join(",") === "226,152,226,153"); // U+7B18
expect(() => {ms932Encoder.encode("\u7B1A")}).to.throw(Error, "EncodingError U+7B1A");
r = r && ([...ms932Encoder.encode("笛")].join(",") === "147,74"); // U+7B1B
expect(() => {ms932Encoder.encode("\u7B1C")}).to.throw(Error, "EncodingError U+7B1C");
expect(() => {ms932Encoder.encode("\u7B1D")}).to.throw(Error, "EncodingError U+7B1D");
r = r && ([...ms932Encoder.encode("笞")].join(",") === "226,154"); // U+7B1E
expect(() => {ms932Encoder.encode("\u7B1F")}).to.throw(Error, "EncodingError U+7B1F");
r = r && ([...ms932Encoder.encode("笠")].join(",") === "138,125"); // U+7B20
expect(() => {ms932Encoder.encode("\u7B21")}).to.throw(Error, "EncodingError U+7B21");
expect(() => {ms932Encoder.encode("\u7B22")}).to.throw(Error, "EncodingError U+7B22");
expect(() => {ms932Encoder.encode("\u7B23")}).to.throw(Error, "EncodingError U+7B23");
expect(() => {ms932Encoder.encode("\u7B24")}).to.throw(Error, "EncodingError U+7B24");
r = r && ([...ms932Encoder.encode("笥符")].join(",") === "144,121,149,132"); // U+7B25
expect(() => {ms932Encoder.encode("\u7B27")}).to.throw(Error, "EncodingError U+7B27");
r = r && ([...ms932Encoder.encode("笨")].join(",") === "226,156"); // U+7B28
expect(() => {ms932Encoder.encode("\u7B29")}).to.throw(Error, "EncodingError U+7B29");
expect(() => {ms932Encoder.encode("\u7B2A")}).to.throw(Error, "EncodingError U+7B2A");
expect(() => {ms932Encoder.encode("\u7B2B")}).to.throw(Error, "EncodingError U+7B2B");
r = r && ([...ms932Encoder.encode("第")].join(",") === "145,230"); // U+7B2C
expect(() => {ms932Encoder.encode("\u7B2D")}).to.throw(Error, "EncodingError U+7B2D");
expect(() => {ms932Encoder.encode("\u7B2E")}).to.throw(Error, "EncodingError U+7B2E");
expect(() => {ms932Encoder.encode("\u7B2F")}).to.throw(Error, "EncodingError U+7B2F");
expect(() => {ms932Encoder.encode("\u7B30")}).to.throw(Error, "EncodingError U+7B30");
expect(() => {ms932Encoder.encode("\u7B31")}).to.throw(Error, "EncodingError U+7B31");
expect(() => {ms932Encoder.encode("\u7B32")}).to.throw(Error, "EncodingError U+7B32");
r = r && ([...ms932Encoder.encode("笳")].join(",") === "226,151"); // U+7B33
expect(() => {ms932Encoder.encode("\u7B34")}).to.throw(Error, "EncodingError U+7B34");
r = r && ([...ms932Encoder.encode("笵笶")].join(",") === "226,155,226,157"); // U+7B35
expect(() => {ms932Encoder.encode("\u7B37")}).to.throw(Error, "EncodingError U+7B37");
expect(() => {ms932Encoder.encode("\u7B38")}).to.throw(Error, "EncodingError U+7B38");
r = r && ([...ms932Encoder.encode("笹")].join(",") === "141,249"); // U+7B39
expect(() => {ms932Encoder.encode("\u7B3A")}).to.throw(Error, "EncodingError U+7B3A");
expect(() => {ms932Encoder.encode("\u7B3B")}).to.throw(Error, "EncodingError U+7B3B");
expect(() => {ms932Encoder.encode("\u7B3C")}).to.throw(Error, "EncodingError U+7B3C");
expect(() => {ms932Encoder.encode("\u7B3D")}).to.throw(Error, "EncodingError U+7B3D");
expect(() => {ms932Encoder.encode("\u7B3E")}).to.throw(Error, "EncodingError U+7B3E");
expect(() => {ms932Encoder.encode("\u7B3F")}).to.throw(Error, "EncodingError U+7B3F");
expect(() => {ms932Encoder.encode("\u7B40")}).to.throw(Error, "EncodingError U+7B40");
expect(() => {ms932Encoder.encode("\u7B41")}).to.throw(Error, "EncodingError U+7B41");
expect(() => {ms932Encoder.encode("\u7B42")}).to.throw(Error, "EncodingError U+7B42");
expect(() => {ms932Encoder.encode("\u7B43")}).to.throw(Error, "EncodingError U+7B43");
expect(() => {ms932Encoder.encode("\u7B44")}).to.throw(Error, "EncodingError U+7B44");
r = r && ([...ms932Encoder.encode("筅筆")].join(",") === "226,164,149,77"); // U+7B45
expect(() => {ms932Encoder.encode("\u7B47")}).to.throw(Error, "EncodingError U+7B47");
r = r && ([...ms932Encoder.encode("筈等")].join(",") === "148,164,147,153"); // U+7B48
expect(() => {ms932Encoder.encode("\u7B4A")}).to.throw(Error, "EncodingError U+7B4A");
r = r && ([...ms932Encoder.encode("筋筌筍")].join(",") === "139,216,226,163,226,161"); // U+7B4B
expect(() => {ms932Encoder.encode("\u7B4E")}).to.throw(Error, "EncodingError U+7B4E");
r = r && ([...ms932Encoder.encode("筏筐筑筒")].join(",") === "148,179,226,158,146,125,147,155"); // U+7B4F
expect(() => {ms932Encoder.encode("\u7B53")}).to.throw(Error, "EncodingError U+7B53");
r = r && ([...ms932Encoder.encode("答")].join(",") === "147,154"); // U+7B54
expect(() => {ms932Encoder.encode("\u7B55")}).to.throw(Error, "EncodingError U+7B55");
r = r && ([...ms932Encoder.encode("策")].join(",") === "141,244"); // U+7B56
expect(() => {ms932Encoder.encode("\u7B57")}).to.throw(Error, "EncodingError U+7B57");
expect(() => {ms932Encoder.encode("\u7B58")}).to.throw(Error, "EncodingError U+7B58");
expect(() => {ms932Encoder.encode("\u7B59")}).to.throw(Error, "EncodingError U+7B59");
expect(() => {ms932Encoder.encode("\u7B5A")}).to.throw(Error, "EncodingError U+7B5A");
expect(() => {ms932Encoder.encode("\u7B5B")}).to.throw(Error, "EncodingError U+7B5B");
expect(() => {ms932Encoder.encode("\u7B5C")}).to.throw(Error, "EncodingError U+7B5C");
r = r && ([...ms932Encoder.encode("筝")].join(",") === "226,182"); // U+7B5D
expect(() => {ms932Encoder.encode("\u7B5E")}).to.throw(Error, "EncodingError U+7B5E");
expect(() => {ms932Encoder.encode("\u7B5F")}).to.throw(Error, "EncodingError U+7B5F");
expect(() => {ms932Encoder.encode("\u7B60")}).to.throw(Error, "EncodingError U+7B60");
expect(() => {ms932Encoder.encode("\u7B61")}).to.throw(Error, "EncodingError U+7B61");
expect(() => {ms932Encoder.encode("\u7B62")}).to.throw(Error, "EncodingError U+7B62");
expect(() => {ms932Encoder.encode("\u7B63")}).to.throw(Error, "EncodingError U+7B63");
expect(() => {ms932Encoder.encode("\u7B64")}).to.throw(Error, "EncodingError U+7B64");
r = r && ([...ms932Encoder.encode("筥")].join(",") === "226,166"); // U+7B65
expect(() => {ms932Encoder.encode("\u7B66")}).to.throw(Error, "EncodingError U+7B66");
r = r && ([...ms932Encoder.encode("筧")].join(",") === "226,168"); // U+7B67
expect(() => {ms932Encoder.encode("\u7B68")}).to.throw(Error, "EncodingError U+7B68");
expect(() => {ms932Encoder.encode("\u7B69")}).to.throw(Error, "EncodingError U+7B69");
expect(() => {ms932Encoder.encode("\u7B6A")}).to.throw(Error, "EncodingError U+7B6A");
expect(() => {ms932Encoder.encode("\u7B6B")}).to.throw(Error, "EncodingError U+7B6B");
r = r && ([...ms932Encoder.encode("筬")].join(",") === "226,171"); // U+7B6C
expect(() => {ms932Encoder.encode("\u7B6D")}).to.throw(Error, "EncodingError U+7B6D");
r = r && ([...ms932Encoder.encode("筮")].join(",") === "226,172"); // U+7B6E
expect(() => {ms932Encoder.encode("\u7B6F")}).to.throw(Error, "EncodingError U+7B6F");
r = r && ([...ms932Encoder.encode("筰筱")].join(",") === "226,169,226,170"); // U+7B70
expect(() => {ms932Encoder.encode("\u7B72")}).to.throw(Error, "EncodingError U+7B72");
expect(() => {ms932Encoder.encode("\u7B73")}).to.throw(Error, "EncodingError U+7B73");
r = r && ([...ms932Encoder.encode("筴筵")].join(",") === "226,167,226,165"); // U+7B74
expect(() => {ms932Encoder.encode("\u7B76")}).to.throw(Error, "EncodingError U+7B76");
expect(() => {ms932Encoder.encode("\u7B77")}).to.throw(Error, "EncodingError U+7B77");
expect(() => {ms932Encoder.encode("\u7B78")}).to.throw(Error, "EncodingError U+7B78");
expect(() => {ms932Encoder.encode("\u7B79")}).to.throw(Error, "EncodingError U+7B79");
r = r && ([...ms932Encoder.encode("筺")].join(",") === "226,159"); // U+7B7A
expect(() => {ms932Encoder.encode("\u7B7B")}).to.throw(Error, "EncodingError U+7B7B");
expect(() => {ms932Encoder.encode("\u7B7C")}).to.throw(Error, "EncodingError U+7B7C");
expect(() => {ms932Encoder.encode("\u7B7D")}).to.throw(Error, "EncodingError U+7B7D");
expect(() => {ms932Encoder.encode("\u7B7E")}).to.throw(Error, "EncodingError U+7B7E");
expect(() => {ms932Encoder.encode("\u7B7F")}).to.throw(Error, "EncodingError U+7B7F");
expect(() => {ms932Encoder.encode("\u7B80")}).to.throw(Error, "EncodingError U+7B80");
expect(() => {ms932Encoder.encode("\u7B81")}).to.throw(Error, "EncodingError U+7B81");
expect(() => {ms932Encoder.encode("\u7B82")}).to.throw(Error, "EncodingError U+7B82");
expect(() => {ms932Encoder.encode("\u7B83")}).to.throw(Error, "EncodingError U+7B83");
expect(() => {ms932Encoder.encode("\u7B84")}).to.throw(Error, "EncodingError U+7B84");
expect(() => {ms932Encoder.encode("\u7B85")}).to.throw(Error, "EncodingError U+7B85");
r = r && ([...ms932Encoder.encode("箆箇")].join(",") === "149,205,137,211"); // U+7B86
expect(() => {ms932Encoder.encode("\u7B88")}).to.throw(Error, "EncodingError U+7B88");
expect(() => {ms932Encoder.encode("\u7B89")}).to.throw(Error, "EncodingError U+7B89");
expect(() => {ms932Encoder.encode("\u7B8A")}).to.throw(Error, "EncodingError U+7B8A");
r = r && ([...ms932Encoder.encode("箋")].join(",") === "226,179"); // U+7B8B
expect(() => {ms932Encoder.encode("\u7B8C")}).to.throw(Error, "EncodingError U+7B8C");
r = r && ([...ms932Encoder.encode("箍")].join(",") === "226,176"); // U+7B8D
expect(() => {ms932Encoder.encode("\u7B8E")}).to.throw(Error, "EncodingError U+7B8E");
r = r && ([...ms932Encoder.encode("箏")].join(",") === "226,181"); // U+7B8F
expect(() => {ms932Encoder.encode("\u7B90")}).to.throw(Error, "EncodingError U+7B90");
expect(() => {ms932Encoder.encode("\u7B91")}).to.throw(Error, "EncodingError U+7B91");
r = r && ([...ms932Encoder.encode("箒")].join(",") === "226,180"); // U+7B92
expect(() => {ms932Encoder.encode("\u7B93")}).to.throw(Error, "EncodingError U+7B93");
r = r && ([...ms932Encoder.encode("箔箕")].join(",") === "148,147,150,165"); // U+7B94
expect(() => {ms932Encoder.encode("\u7B96")}).to.throw(Error, "EncodingError U+7B96");
r = r && ([...ms932Encoder.encode("算箘箙箚")].join(",") === "142,90,226,174,226,183,226,178"); // U+7B97
expect(() => {ms932Encoder.encode("\u7B9B")}).to.throw(Error, "EncodingError U+7B9B");
r = r && ([...ms932Encoder.encode("箜箝箞箟")].join(",") === "226,177,226,173,251,136,226,175"); // U+7B9C
expect(() => {ms932Encoder.encode("\u7BA0")}).to.throw(Error, "EncodingError U+7BA0");
r = r && ([...ms932Encoder.encode("管")].join(",") === "138,199"); // U+7BA1
expect(() => {ms932Encoder.encode("\u7BA2")}).to.throw(Error, "EncodingError U+7BA2");
expect(() => {ms932Encoder.encode("\u7BA3")}).to.throw(Error, "EncodingError U+7BA3");
expect(() => {ms932Encoder.encode("\u7BA4")}).to.throw(Error, "EncodingError U+7BA4");
expect(() => {ms932Encoder.encode("\u7BA5")}).to.throw(Error, "EncodingError U+7BA5");
expect(() => {ms932Encoder.encode("\u7BA6")}).to.throw(Error, "EncodingError U+7BA6");
expect(() => {ms932Encoder.encode("\u7BA7")}).to.throw(Error, "EncodingError U+7BA7");
expect(() => {ms932Encoder.encode("\u7BA8")}).to.throw(Error, "EncodingError U+7BA8");
expect(() => {ms932Encoder.encode("\u7BA9")}).to.throw(Error, "EncodingError U+7BA9");
r = r && ([...ms932Encoder.encode("箪")].join(",") === "146,92"); // U+7BAA
expect(() => {ms932Encoder.encode("\u7BAB")}).to.throw(Error, "EncodingError U+7BAB");
expect(() => {ms932Encoder.encode("\u7BAC")}).to.throw(Error, "EncodingError U+7BAC");
r = r && ([...ms932Encoder.encode("箭")].join(",") === "144,251"); // U+7BAD
expect(() => {ms932Encoder.encode("\u7BAE")}).to.throw(Error, "EncodingError U+7BAE");
expect(() => {ms932Encoder.encode("\u7BAF")}).to.throw(Error, "EncodingError U+7BAF");
expect(() => {ms932Encoder.encode("\u7BB0")}).to.throw(Error, "EncodingError U+7BB0");
r = r && ([...ms932Encoder.encode("箱")].join(",") === "148,160"); // U+7BB1
expect(() => {ms932Encoder.encode("\u7BB2")}).to.throw(Error, "EncodingError U+7BB2");
expect(() => {ms932Encoder.encode("\u7BB3")}).to.throw(Error, "EncodingError U+7BB3");
r = r && ([...ms932Encoder.encode("箴")].join(",") === "226,188"); // U+7BB4
expect(() => {ms932Encoder.encode("\u7BB5")}).to.throw(Error, "EncodingError U+7BB5");
expect(() => {ms932Encoder.encode("\u7BB6")}).to.throw(Error, "EncodingError U+7BB6");
expect(() => {ms932Encoder.encode("\u7BB7")}).to.throw(Error, "EncodingError U+7BB7");
r = r && ([...ms932Encoder.encode("箸")].join(",") === "148,162"); // U+7BB8
expect(() => {ms932Encoder.encode("\u7BB9")}).to.throw(Error, "EncodingError U+7BB9");
expect(() => {ms932Encoder.encode("\u7BBA")}).to.throw(Error, "EncodingError U+7BBA");
expect(() => {ms932Encoder.encode("\u7BBB")}).to.throw(Error, "EncodingError U+7BBB");
expect(() => {ms932Encoder.encode("\u7BBC")}).to.throw(Error, "EncodingError U+7BBC");
expect(() => {ms932Encoder.encode("\u7BBD")}).to.throw(Error, "EncodingError U+7BBD");
expect(() => {ms932Encoder.encode("\u7BBE")}).to.throw(Error, "EncodingError U+7BBE");
expect(() => {ms932Encoder.encode("\u7BBF")}).to.throw(Error, "EncodingError U+7BBF");
r = r && ([...ms932Encoder.encode("節篁")].join(",") === "144,223,226,185"); // U+7BC0
expect(() => {ms932Encoder.encode("\u7BC2")}).to.throw(Error, "EncodingError U+7BC2");
expect(() => {ms932Encoder.encode("\u7BC3")}).to.throw(Error, "EncodingError U+7BC3");
r = r && ([...ms932Encoder.encode("範")].join(",") === "148,205"); // U+7BC4
expect(() => {ms932Encoder.encode("\u7BC5")}).to.throw(Error, "EncodingError U+7BC5");
r = r && ([...ms932Encoder.encode("篆篇")].join(",") === "226,189,149,209"); // U+7BC6
expect(() => {ms932Encoder.encode("\u7BC8")}).to.throw(Error, "EncodingError U+7BC8");
r = r && ([...ms932Encoder.encode("築")].join(",") === "146,122"); // U+7BC9
expect(() => {ms932Encoder.encode("\u7BCA")}).to.throw(Error, "EncodingError U+7BCA");
r = r && ([...ms932Encoder.encode("篋篌")].join(",") === "226,184,226,186"); // U+7BCB
expect(() => {ms932Encoder.encode("\u7BCD")}).to.throw(Error, "EncodingError U+7BCD");
expect(() => {ms932Encoder.encode("\u7BCE")}).to.throw(Error, "EncodingError U+7BCE");
r = r && ([...ms932Encoder.encode("篏")].join(",") === "226,187"); // U+7BCF
expect(() => {ms932Encoder.encode("\u7BD0")}).to.throw(Error, "EncodingError U+7BD0");
expect(() => {ms932Encoder.encode("\u7BD1")}).to.throw(Error, "EncodingError U+7BD1");
expect(() => {ms932Encoder.encode("\u7BD2")}).to.throw(Error, "EncodingError U+7BD2");
expect(() => {ms932Encoder.encode("\u7BD3")}).to.throw(Error, "EncodingError U+7BD3");
expect(() => {ms932Encoder.encode("\u7BD4")}).to.throw(Error, "EncodingError U+7BD4");
expect(() => {ms932Encoder.encode("\u7BD5")}).to.throw(Error, "EncodingError U+7BD5");
expect(() => {ms932Encoder.encode("\u7BD6")}).to.throw(Error, "EncodingError U+7BD6");
expect(() => {ms932Encoder.encode("\u7BD7")}).to.throw(Error, "EncodingError U+7BD7");
expect(() => {ms932Encoder.encode("\u7BD8")}).to.throw(Error, "EncodingError U+7BD8");
expect(() => {ms932Encoder.encode("\u7BD9")}).to.throw(Error, "EncodingError U+7BD9");
expect(() => {ms932Encoder.encode("\u7BDA")}).to.throw(Error, "EncodingError U+7BDA");
expect(() => {ms932Encoder.encode("\u7BDB")}).to.throw(Error, "EncodingError U+7BDB");
expect(() => {ms932Encoder.encode("\u7BDC")}).to.throw(Error, "EncodingError U+7BDC");
r = r && ([...ms932Encoder.encode("篝")].join(",") === "226,190"); // U+7BDD
expect(() => {ms932Encoder.encode("\u7BDE")}).to.throw(Error, "EncodingError U+7BDE");
expect(() => {ms932Encoder.encode("\u7BDF")}).to.throw(Error, "EncodingError U+7BDF");
r = r && ([...ms932Encoder.encode("篠")].join(",") === "142,194"); // U+7BE0
expect(() => {ms932Encoder.encode("\u7BE1")}).to.throw(Error, "EncodingError U+7BE1");
expect(() => {ms932Encoder.encode("\u7BE2")}).to.throw(Error, "EncodingError U+7BE2");
expect(() => {ms932Encoder.encode("\u7BE3")}).to.throw(Error, "EncodingError U+7BE3");
r = r && ([...ms932Encoder.encode("篤篥篦")].join(",") === "147,196,226,195,226,194"); // U+7BE4
expect(() => {ms932Encoder.encode("\u7BE7")}).to.throw(Error, "EncodingError U+7BE7");
expect(() => {ms932Encoder.encode("\u7BE8")}).to.throw(Error, "EncodingError U+7BE8");
r = r && ([...ms932Encoder.encode("篩")].join(",") === "226,191"); // U+7BE9
expect(() => {ms932Encoder.encode("\u7BEA")}).to.throw(Error, "EncodingError U+7BEA");
expect(() => {ms932Encoder.encode("\u7BEB")}).to.throw(Error, "EncodingError U+7BEB");
expect(() => {ms932Encoder.encode("\u7BEC")}).to.throw(Error, "EncodingError U+7BEC");
r = r && ([...ms932Encoder.encode("篭")].join(",") === "152,85"); // U+7BED
expect(() => {ms932Encoder.encode("\u7BEE")}).to.throw(Error, "EncodingError U+7BEE");
expect(() => {ms932Encoder.encode("\u7BEF")}).to.throw(Error, "EncodingError U+7BEF");
expect(() => {ms932Encoder.encode("\u7BF0")}).to.throw(Error, "EncodingError U+7BF0");
expect(() => {ms932Encoder.encode("\u7BF1")}).to.throw(Error, "EncodingError U+7BF1");
expect(() => {ms932Encoder.encode("\u7BF2")}).to.throw(Error, "EncodingError U+7BF2");
r = r && ([...ms932Encoder.encode("篳")].join(",") === "226,200"); // U+7BF3
expect(() => {ms932Encoder.encode("\u7BF4")}).to.throw(Error, "EncodingError U+7BF4");
expect(() => {ms932Encoder.encode("\u7BF5")}).to.throw(Error, "EncodingError U+7BF5");
r = r && ([...ms932Encoder.encode("篶篷")].join(",") === "226,204,226,201"); // U+7BF6
expect(() => {ms932Encoder.encode("\u7BF8")}).to.throw(Error, "EncodingError U+7BF8");
expect(() => {ms932Encoder.encode("\u7BF9")}).to.throw(Error, "EncodingError U+7BF9");
expect(() => {ms932Encoder.encode("\u7BFA")}).to.throw(Error, "EncodingError U+7BFA");
expect(() => {ms932Encoder.encode("\u7BFB")}).to.throw(Error, "EncodingError U+7BFB");
expect(() => {ms932Encoder.encode("\u7BFC")}).to.throw(Error, "EncodingError U+7BFC");
expect(() => {ms932Encoder.encode("\u7BFD")}).to.throw(Error, "EncodingError U+7BFD");
expect(() => {ms932Encoder.encode("\u7BFE")}).to.throw(Error, "EncodingError U+7BFE");
expect(() => {ms932Encoder.encode("\u7BFF")}).to.throw(Error, "EncodingError U+7BFF");

expect(r).to.equal(true);

  });

});
